/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('DeployerController', [
        'jquery',
        'knockout',
        'ExplorationUtils',
        'ExplorationsLoader',
        'OperandType',
        'ExplorationConverter',
        'ResultsController',
        'SubscriberCometd',
        'TargetManager',
        'ThingInfoPanel',
        'EventTypeController',
        'QueryAnalyser',
        'Notifications',
        'NotificationUtils',
        'PatternParameter',


        'validationEngine'
    ],
    /**
     * @exports exploration/deployer
     * @version 1.0
     */
    function ($, ko, ExplorationUtils, ExplorationsLoader, OperandType, ExplorationConverter, ResultsController, SubscriberCometd, TargetManager, ThingInfoPanel, EventTypeController, QueryAnalyser, Notifications, NotificationUtils, PatternParameter) {

        /**
         * @class
         * @classdesc AutoDeploy / Delete button functionality : deploy/delete exploration to oep server, more @see  ExplorationsLoader
         *
         * @constructor
         */
        function DeployerController() {

            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var explorationConverter = ExplorationConverter.getInstance();

            var deployButton;
            var deployTimeInMs;
            var deleteButton;
            var addExplorationTargetButton;

            /**
             *
             * Deploy when the user stops making changes
             * Combining multiple changes into a single update
             *
             * for example: Filters inputs :
             * we listen all input changes(even 1 key pressed).
             * and when user stop typing during 1 second
             * we submit changes to server (if changes valid for this input)
             * @see ClauseController.createTextValueControl
             *
             * @type {number}
             */
            var DEPLOY_WHEN_CHANGES_STOP_DURING_PERIOD_OF_TIME_IN_MS = 1000;
            var deployExplorationWhenChangesStop = ko.observable(true).extend({
                    notify: 'always',
                    rateLimit: {
                        timeout: DEPLOY_WHEN_CHANGES_STOP_DURING_PERIOD_OF_TIME_IN_MS,
                        method: "notifyWhenChangesStop"
                    }
                }
            );

            var redeployExplorationWhenChangesStopSubscribtion;

            this.onOpenExplorationEditor = function () {
                initDeployerController();
            };


            this.onCloseExplorationEditor = function () {
                NotificationUtils.hideSourcesNotCorrelatedWarning(explorationKoModel.notCorrelatedSourcesMessage);
                NotificationUtils.hideFieldsForEventTypeIsEmptyWarning(explorationKoModel.fieldsForEventTypeIsEmptyMessage);
            };

            function initDeployerController() {
                initAutoDeploy();
                initSaveExplorationButton();
                initDeleteExplorationButton();

                //TODO refactoring
                initAddExplorationTargetButton();
                initEditExplorationInfoButton();
            }


            function initAutoDeploy() {
                initAutoDeployTriggers();
                initDeployExplorationExecutor();
            }


            function initAutoDeployTriggers() {
                explorationKoModel.exploration().sources.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().correlations.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().summaries.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().groupBy.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().conditionsMatching.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().conditions.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
                explorationKoModel.exploration().displayName.subscribe(function () {
                    explorationKoModel.deployExplorationTrigger(true);
                });
            }


            function initDeployExplorationExecutor() {
                if (!redeployExplorationWhenChangesStopSubscribtion) {
                    explorationKoModel.deployExplorationTrigger.subscribe(function () {
                        deployExplorationWhenChangesStop.valueHasMutated();
                    });

                    redeployExplorationWhenChangesStopSubscribtion = deployExplorationWhenChangesStop.subscribe(function () {
                        redeployExploration();
                    });
                }

            }


            function initSaveExplorationButton() {
                deployButton = $(exUtils.deployExplorationToOepServer);
                deployButton.click(function () {
                    redeployExploration();
                });
            }


            function initDeleteExplorationButton() {
                deleteButton = $(exUtils.deleteExplorationBtn);
                deleteButton.click(function () {
                    deleteExploration(onDeleteSuccess);
                });
            }


            function initAddExplorationTargetButton() {
                addExplorationTargetButton = $(exUtils.addExplorationTargetBtn);
                addExplorationTargetButton.click(function () {
                    addExplorationTarget();
                    return false;
                });
            }

            function initEditExplorationInfoButton() {
                var editExplorationInfoButton = $(exUtils.infoExplorationBtn);
                editExplorationInfoButton.click(function (event) {
                    editExplorationInfo(event);
                });
            }

            function editExplorationInfo(event) {
                ThingInfoPanel.panel('toggle', explorationKoModel.exploration(), {
                    afterDone: onExplorationInfoDone,
                    controlButton: event ? event.target : null
                });
            }

            function onExplorationInfoDone(exploration) {
                console.log('DeployerController.onExplorationInfoDone: ', exploration);
                redeployExploration();
            }


            /**
             * open  {@see TargetForm}
             * and on Success(Save button) execute
             * @see  onAddTargetComplete
             *
             */
            function addExplorationTarget() {
                if (explorationKoModel.exploration().targets().length > 0) {
                    TargetManager.goEdit(explorationKoModel.exploration().targets()[0], onAddTargetComplete);
                } else {
                    TargetManager.goCreate(null, onAddTargetComplete);
                }

            }

            /**
             *
             * @param {TargetThing } target
             */
            function onAddTargetComplete(target) {
                if (target) {
                    var targetInJson = target.getPlainData();
                    //explorationKoModel.exploration().targets().push(targetInJson); MAKE ONLY 1 TARGET.
                    // Uncomment this if we need multiple targets
                    explorationKoModel.exploration().targets().length = 0;
                    if (targetInJson.typeName) {
                        explorationKoModel.exploration().targets().push(targetInJson);
                    }
                    NotificationUtils.youHaveConfiguredYourTarget();
                }

                redeployExploration();

            }

            /**
             *
             * @param {Function} onDeleteSuccess
             */
            function deleteExploration(onDeleteSuccess) {
                var name = explorationKoModel.exploration().name();
                if (name && name.length > 0) {
                    SubscriberCometd.getInstance().unsubscribeFromExplorationChannel();
                    ExplorationsLoader.getInstance().deleteExploration(name, onDeleteSuccess, onDeleteFailure);
                }
            }

            /**
             *
             * @param {Response} response
             */
            function onDeleteSuccess(response) {
                if (response.success) {
                    explorationKoModel.exploration().name('');
                    //TODO may be exit exploration editor
                } else {
                    NotificationUtils.showErrorMessage(response.message);

                }
            }


            function redeployExploration() {
                deployTimeInMs = new Date().getTime();

                if (isExplorationDeployable()) {
                    if (explorationKoModel.exploration().isPatternBasedExploration) {
                        redeployPatternExploration_();
                    } else {
                        redeployExploration_();
                    }
                }
            }


            function redeployExploration_() {

                if (isNewExploration(explorationKoModel.exploration())) {
                    createExploration(onExplorationCreateSuccess, onExplorationCreateFailure);
                } else {
                    updateExploration(onExplorationCreateSuccess, onExplorationCreateFailure);
                }

            }


            function redeployPatternExploration_() {
                if (isNewExploration(explorationKoModel.exploration())) {
                    createExploration(onPatternExplorationCreateSuccess, onExplorationCreateFailure);
                } else {
                    updateExploration(onPatternExplorationCreateSuccess, onExplorationCreateFailure);
                }
            }

            /**
             *
             * @param {Function} onCreateSuccess
             * @param {Function} onCreateFailure
             */
            function createExploration(onCreateSuccess, onCreateFailure) {
                var exploration = explorationKoModel.exploration();
                var explorationInJson = explorationConverter.explorationToJson(exploration);
                explorationKoModel.isCreateExplorationRequestInProgress = true;
                ExplorationsLoader.getInstance().createExploration(explorationInJson, onCreateSuccess, onCreateFailure);
            }

            /**
             *
             * @param {Function} onCreateSuccess
             * @param {Function} onCreateFailure
             */
            function updateExploration(onCreateSuccess, onCreateFailure) {
                var exploration = explorationKoModel.exploration();
                SubscriberCometd.getInstance().unsubscribeFromExplorationChannel();
                var explorationInJson = explorationConverter.explorationToJson(exploration);
                ExplorationsLoader.getInstance().updateExploration(explorationInJson, onCreateSuccess, onCreateFailure);
            }

            /**
             *
             * @param {Exploration} exploration
             * @returns {boolean}
             */
            function isNewExploration(exploration) {
                return exploration.name() == null || exploration.name().length === 0;
            }


            /**
             *
             * @returns {boolean}
             */
            function isExplorationDeployable() {
                var exploration = explorationKoModel.exploration();

                if (exploration == null) {
                    return false;
                }

                /**
                 * defer update while CreateExplorationRequestInProgress
                 */
                if (explorationKoModel.isCreateExplorationRequestInProgress) {
                    explorationKoModel.deployExplorationTrigger(true);
                    return false;
                }

                if (exploration.isPatternBasedExploration) {
                    return isAllRequiredPatternParametersFilled(exploration);
                } else { //
                    return (
                    exploration.sources().length === 0 && updateEventTypeAndRelatedUI()
                    ||
                    (
                    (exploration.sources().length > 0) &&
                    isAllExplorationSourcesCorrelated(exploration) &&
                    evaluationFrequencyShouldBeNoLongerThanRange(exploration) &&
                    updateEventTypeAndRelatedUI() && isEventTypeFilled()
                    )
                    );
                }
            }

            /**
             *
             * @param {Exploration} exploration
             * @returns {boolean}
             */
            function isAllExplorationSourcesCorrelated(exploration) {
                var queries = QueryAnalyser.getInstance().updateExplorationQueries(exploration);

                if (queries.length > 1) {
                    explorationKoModel.currentEditedRegion(null);
                    $(exUtils.correlations).focus();
                    NotificationUtils.showSourcesNotCorrelatedWarning(explorationKoModel.notCorrelatedSourcesMessage);
                } else {
                    NotificationUtils.hideSourcesNotCorrelatedWarning(explorationKoModel.notCorrelatedSourcesMessage);
                }

                var isAllExplorationSourcesCorrelated_ = false;
                if (queries.length == 1) {
                    isAllExplorationSourcesCorrelated_ = true;
                }

                return isAllExplorationSourcesCorrelated_;

            }

            function updateEventTypeAndRelatedUI() {
                ResultsController.getInstance().onExplorationApply();
                return true;
            }

            /**
             *
             * @returns {boolean}
             */
            function isEventTypeFilled() {
                var isEventTypeFilled_ = EventTypeController.getInstance().isFieldsForEventTypeFilled();

                if (!isEventTypeFilled_) {
                    NotificationUtils.showFieldsForEventTypeIsEmptyWarning(explorationKoModel.fieldsForEventTypeIsEmptyMessage);
                } else {
                    NotificationUtils.hideFieldsForEventTypeIsEmptyWarning(explorationKoModel.fieldsForEventTypeIsEmptyMessage);
                }


                return isEventTypeFilled_;

            }


            /**
             *
             * @returns {boolean}
             */
            function evaluationFrequencyShouldBeNoLongerThanRange(exploration) {
                var isEvaluationFrequencyNoLongerThanRange_ = QueryAnalyser.getInstance().isEvaluationFrequencyNoLongerThanRange(exploration);

                if (!isEvaluationFrequencyNoLongerThanRange_) {
                    NotificationUtils.showEvaluationFrequencyShouldBeNoLongerThanRange(explorationKoModel.evaluationFrequencyShouldBeNoLongerThanRange);
                } else {
                    NotificationUtils.hideEvaluationFrequencyShouldBeNoLongerThanRange(explorationKoModel.evaluationFrequencyShouldBeNoLongerThanRange);
                }


                return isEvaluationFrequencyNoLongerThanRange_;

            }


            /**
             *
             * @param {Exploration} exploration
             * @returns {boolean}
             */
            function isAllRequiredPatternParametersFilled(exploration) {

                var isAllRequiredPatternParametersFilled_ = true;


                for (var i = 0; i < exploration.pattern.parameters().length; i++) {
                    var parameter = exploration.pattern.parameters()[i];
                    var value = parameter.value();
                    if (parameter.required()
                        &&
                        (isRangeOrInterval(parameter) ? isRangeOrIntervalEmpty(parameter) : (value == null || value === '' )) //is value empty
                        ||
                        ($.isArray(value) && value.length === 0 )    //is Array empty
                    ) {
                        isAllRequiredPatternParametersFilled_ = false;
                        break;
                    }
                }

                var isAllPatternParametersValidated = false;
                if (isAllRequiredPatternParametersFilled_) {
                    var explorationEditor = $(exUtils.explorationEditor);
                    isAllPatternParametersValidated = explorationEditor.validationEngine('validate')
                    && explorationEditor.find('.oj-invalid').length === 0;
                }

                return isAllRequiredPatternParametersFilled_ && isAllPatternParametersValidated;

            }


            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            function isRangeOrInterval(parameter) {
                var type = parameter.type();
                return type === PatternParameter.TYPE.interval ||
                    type === PatternParameter.TYPE.range;
            }

            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            function isRangeOrIntervalEmpty(parameter) {
                return parameter.valueValue() == null;
            }


            function calculateDeployTime() {
                console.log("deployTime in ms: " + (new Date().getTime() - deployTimeInMs));
            }

            /**
             *
             * @param {Response} response
             */
            function onPatternExplorationCreateSuccess(response) {
                explorationKoModel.isCreateExplorationRequestInProgress = false;

                var explorationInJson = response.data;
                if (response.success && explorationInJson && explorationInJson.name) {
                    if (explorationKoModel.exploration()) {

                        if (response.message) {
                            /**
                             * should be redesign in V2, or should be checked on UI)(validation problem)
                             * see OEP-528 TWO W PATTERNS ARE CREATED WHEN CREATE ONE PATTERN IN BROWSER.
                             */
                            NotificationUtils.showErrorMessage(response.message);
                        }

                        updatePatternExplorationKoModel(explorationInJson);
                        ResultsController.getInstance().onPatternExplorationApply();
                        SubscriberCometd.getInstance().subscribeToExplorationChannel();
                        calculateDeployTime();
                    }
                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);

                }
            }

            /**
             *
             * @param {Object} explorationInJson
             */
            function updatePatternExplorationKoModel(explorationInJson) {
                exUtils.updateExplorationModel(explorationInJson);

                var fieldsForEventType = ExplorationConverter.getInstance().outputColumnsToFieldsForEventTypeForPatternBasedExploration(explorationInJson.outputColumns, explorationInJson.possibleOutputColumns);
                EventTypeController.getInstance().updatePatternExplorationEventType(fieldsForEventType);

            }


            /**
             *
             * @param {Response} response
             */
            function onExplorationCreateSuccess(response) {
                explorationKoModel.isCreateExplorationRequestInProgress = false;

                var explorationInJson = response.data;
                if (response.success && explorationInJson && explorationInJson.name) {
                    if (explorationKoModel.exploration()) {

                        exUtils.updateExplorationModel(explorationInJson);
                        SubscriberCometd.getInstance().subscribeToExplorationChannel();
                        calculateDeployTime();
                    }

                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);
                }
            }

            /**
             *
             * @param {FailureResponse} failureResponse
             */
            function onExplorationCreateFailure(failureResponse) {
                explorationKoModel.isCreateExplorationRequestInProgress = false;
                NotificationUtils.onFailureResponse(failureResponse);

            }

            /**
             *
             * @param {FailureResponse} failureResponse
             */
            function onDeleteFailure(failureResponse) {
                NotificationUtils.onFailureResponse(failureResponse);
            }

        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {DeployerController}
         */
        DeployerController.getInstance = function () {
            if (!this.instance) {
                this.instance = new DeployerController();
            }
            return this.instance;
        };


        return DeployerController;

    }
)
;
