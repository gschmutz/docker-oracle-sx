/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationsController', [
        'jquery',
        'knockout',
        'Exploration',
        'Utils',
        'ConditionsController',
        'CorrelationsController',
        'SourcesController',
        'SummariesController',
        'EventTypeController',
        'ResultsController',
        'WindowsDrawerController',
        'SourceStorage',
        'ExplorationUtils',
        'ExplorationsLoader',
        'ExplorationFieldsController',
        'DeployerController',
        'SubscriberCometd',
        'QueryAnalyser',
        'PublishController',
        'UndoRedoController',
        'Notifications',
        'ServiceFactory',
        'FiltersMatchingEditor',
        'PatternController',
        'HelpBannerPanel',
        'NotificationUtils',
        'ExplorationConverter',
        'SourceSummaryController',
        'ExportController',
        'ProgressBar',
        'NotificationType',
        'UserAssistance',
        'ExplorationUserAssistance',
        'Translate',
        'HelpController',
        'SxPages',
        'PageIsLoading',

        'jqueryui',
        'validationEngine',

        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojdialog',
        'ojs/ojpopup'

    ],
    /**
     * @exports exploration/controller
     * @version 1.0
     */
    function ($, ko, Exploration, Utils, ConditionsController, CorrelationsController, SourcesController, SummariesController, EventTypeController, ResultsController, WindowsDrawerController, SourceStorage, ExplorationUtils, ExplorationsLoader, ExplorationFieldsController, DeployerController, SubscriberCometd, QueryAnalyser, PublishController, UndoRedoController, Notifications, ServiceFactory, FiltersMatchingEditor, PatternController, HelpBannerPanel, NotificationUtils, ExplorationConverter, SourceSummaryController, ExportController, ProgressBar, NotificationType, UserAssistance, ExplorationUserAssistance, Translate, HelpController, SxPages, PageIsLoading) {

        /**
         * @class
         * @classdesc create, open, close exploration in exploration editor
         * @constructor
         */
        function ExplorationsController() {

            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var explorationConverter = ExplorationConverter.getInstance();


            this.init = function () {
            };

            this.createExplorationWithoutSources = function () {
                openExplorationEditor(exUtils.createExplorationWithoutSources());
            };


            /**
             *
             * @param {String | id } pattern
             */
            this.createPatternExploration = function (pattern) {
                ProgressBar.getInstance().busyState();
                exUtils.createPatternExploration(pattern, openExplorationEditor, this);
            };

            /**
             *
             * @param {string} name
             */
            this.openExploration = function (name) {
                ExplorationsLoader.getInstance().getExploration(name, onOpenExploration, NotificationUtils.onFailureResponse);

            };

            /**
             *
             * @param {string} name
             */
            this.inspectPublishedExploration = function (name) {
                ExplorationsLoader.getInstance().inspectPublishedExploration(name, onOpenExploration, NotificationUtils.onFailureResponse);

            };

            /**
             *
             * @param {Response} response
             */
            function onOpenExploration(response) {
                ProgressBar.getInstance().busyState();
                if (response.success) {
                    SourceStorage.getInstance().onOpenExploration(); //refresh sources to valid convert jsonToExploration
                    var exploration;
                    //Catching the error while convert data to exploration object
                    try {
                        exploration = explorationConverter.jsonToExploration(response.data);
                    } catch (e) {
                        PageIsLoading.getInstance().pageIsLoaded();
                        ProgressBar.getInstance().connectedState();
                        return;
                    }
                    openExplorationEditor(exploration);
                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);

                }
            }


            this.closeExplorationIfOpened = function () {
                var openedExploration = explorationKoModel.exploration();
                if (openedExploration) {
                    ResultsController.getInstance().onCloseExplorationEditor();
                    SubscriberCometd.getInstance().onCloseExplorationEditor();
                    WindowsDrawerController.getInstance().onCloseExplorationEditor();
                    ExplorationFieldsController.getInstance().onCloseExplorationEditor();
                    SummariesController.getInstance().onCloseExplorationEditor();
                    DeployerController.getInstance().onCloseExplorationEditor();
                    ExplorationUserAssistance.getInstance().onCloseExplorationEditor();

                    explorationKoModel.resetExplorationKoModel();
                    ProgressBar.getInstance().resetState();
                }
            };

            /**
             *
             * @param {Exploration} exploration
             */
            function openExplorationEditor(exploration) {

                var explorationForKoModel = new Exploration(
                    exploration.name(),
                    exploration.displayName(),
                    exploration.createdBy,
                    exploration.createdAt,
                    exploration.updatedBy(),
                    exploration.updatedAt(),
                    exploration.description(),
                    exploration.attachedTagNames(),
                    null,  //sources (resposibility for init  is : @see SourcesController.getInstance().onOpenExplorationEditor(exploration);)
                    null,  //conditions
                    null,  //conditionsMatching
                    null,  //correlations
                    null,  //summaries
                    exploration.groupBy(),
                    exploration.fieldsForEventType(),
                    exploration.targets(),
                    exploration.pubSubChannelName,
                    exploration.originalVersion,
                    exploration.actions,

                    exploration.isPatternBasedExploration,
                    exploration.pattern,
                    exploration.typeName,
                    exploration.patternParameters
                );

                explorationKoModel.update(explorationForKoModel);

                loadExplorationEditorMarkupAndOpen(exploration);
            }

            /**
             *
             * @param {Exploration} exploration
             */
            function loadExplorationEditorMarkupAndOpen(exploration) {
                $(document).ready(function () {
                    Utils.loadHtmlAsync(exUtils.mainContent,
                        exUtils.explorationEditorPath,
                        function () {
                            document.body.className = SxPages.getInstance().explorationEditor;
                            onOpenExplorationEditor(exploration);
                        }
                    );
                });
            }


            /**
             *
             * @param {Exploration} exploration
             */
            function onOpenPatternExplorationEditor(exploration) {
                Utils.loadHtmlAsync(exUtils.pattern,
                    exUtils.patternFormTemplate,
                    function () {
                        loadPatternByIdIfPatternEmpty();

                        PatternController.getInstance().onOpenExplorationEditor();

                    }
                );
            }

            function loadPatternByIdIfPatternEmpty() {
                if (explorationKoModel.exploration().pattern === null && Utils.isPatternTypeName(explorationKoModel.exploration())) {
                    //load pattern by pattern typeName
                    explorationKoModel.exploration().pattern =
                        ExplorationsLoader.getInstance().getPatternById(
                            explorationKoModel.exploration().typeName,
                            null,
                            NotificationUtils.onFailureResponse
                        );
                }
            }


            /**
             *
             * @param {Exploration} exploration
             */
            function onOpenExplorationEditor(exploration) {
                Utils.translateJqueryElement($(exUtils.explorationEditor));

                ko.applyBindings(explorationKoModel, $(exUtils.explorationEditor)[0]);

                initRemoveTargetController();

                initExplorationAccordions();

                //order is important!!!
                SourceSummaryController.getInstance().onOpenExplorationEditor();
                ExplorationFieldsController.getInstance().onOpenExplorationEditor();
                QueryAnalyser.getInstance().onOpenExplorationEditor();
                UserAssistance.getInstance().onOpenExplorationEditor();

                if (!exploration.isPatternBasedExploration) {
                    UserAssistance.getInstance().setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_WELCOME);
                    SourcesController.getInstance().onOpenExplorationEditor(exploration);
                    ConditionsController.getInstance().onOpenExplorationEditor(exploration);
                    FiltersMatchingEditor.getInstance().onOpenExplorationEditor(exploration);
                    CorrelationsController.getInstance().onOpenExplorationEditor(exploration);
                    SummariesController.getInstance().onOpenExplorationEditor(exploration);
                    WindowsDrawerController.getInstance().onOpenExplorationEditor();
                    ExplorationUserAssistance.getInstance().onOpenExplorationEditor();
                    HelpController.getInstance().setPageTopicId(HelpController.EXPLORATION);

                } else {
                    onOpenPatternExplorationEditor(exploration);
                }

                EventTypeController.getInstance().onOpenExplorationEditor();
                DeployerController.getInstance().onOpenExplorationEditor();
                ResultsController.getInstance().onOpenExplorationEditor();
                SubscriberCometd.getInstance().onOpenExplorationEditor();
                PublishController.getInstance().onOpenExplorationEditor();
                UndoRedoController.getInstance().onOpenExplorationEditor();
                ExportController.getInstance().onOpenExplorationEditor();

                initValidation();


                ProgressBar.getInstance().connectedState();
                PageIsLoading.getInstance().pageIsLoaded();

            }


            function initExplorationAccordions() {
                $(exUtils.explorationQueryEditor).accordion({collapsible: true});
                $(exUtils.explorationResultsAccordion).accordion({collapsible: true, heightStyle: "content"});
                $(exUtils.explorationChartsAccordion).accordion({collapsible: true, heightStyle: "content"});
            }


            function initRemoveTargetController() {
                // TODO extract Target functionality

                $(exUtils.explorationResultsMenu + ' > ul').menu({
                    position: {
                        my: 'left top',
                        at: 'left bottom'
                    }
                });

                $(exUtils.explorationResultsMenu).on('click', function (jqEvent) {
                    jqEvent.stopPropagation();
                    return false;
                });

                $(exUtils.removeTargetBtn).on('click', function (jqEvent) {
                    var __ = function (key, i18n_path) {
                        return Translate.getTranslated((i18n_path ? i18n_path : 'oep.exploration.target') + '.' + key);
                    };

                    var targets = explorationKoModel.exploration().targets();

                    explorationKoModel.exploration().targets([]);
                    $(exUtils.explorationResultsMenu).hide();

                    Notifications.add({
                        type: NotificationType.TYPE.info,
                        text: __('targetDetached')
                    });

                    $.each(targets, function (index, targetForDelete) {
                        ServiceFactory.getTargetTypeService().getById(targetForDelete.name, null, function (target) {
                            if (target) {
                                ServiceFactory.getTargetTypeService().remove(target, null, function () {
                                    Notifications.add({
                                        type: NotificationType.TYPE.info,
                                        text: __('targetDeleted')
                                    });
                                }, function () {
                                    Notifications.add({
                                        type: 'error',
                                        text: __('targetNotDelete')
                                    });
                                });
                            } else {
                                Notifications.add({
                                    type: 'error',
                                    text: __('targetNotRetrieved')
                                });
                            }
                        }, function () {
                            Notifications.add({
                                type: 'error',
                                text: __('targetNotRetrieved')
                            });
                        });
                    });
                });
            }


            function initValidation() {
                $(exUtils.explorationEditor).validationEngine(
                    {
                        promptPosition: "topLeft",
                        scroll: false,
                        showOneMessage: false
                    });
            }


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationsController}
         */
        ExplorationsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationsController();
            }
            return this.instance;
        };


        return ExplorationsController;

    }
)
;
