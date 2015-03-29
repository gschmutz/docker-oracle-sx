/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 1/16/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationUtils', [
        'jquery',
        'ExplorationKoModel',
        'FieldType',
        'Utils',
        'Exploration',
        'FieldTypeOperations',
        'Condition',
        'Correlation',
        'Operations',
        'SourceStorage',
        'ExplorationsLoader',
        'ConditionsMatching',
        'NotificationUtils',
        'ServiceFactory'
    ],

    /**
     * @exports exploration/utils
     * @version 1.0
     */

    function ($, ExplorationKoModel, FieldType, Utils, Exploration, FieldTypeOperations, Condition, Correlation, Operations, SourceStorage, ExplorationsLoader, ConditionsMatching, NotificationUtils, ServiceFactory) {

        /**
         * @class
         * @classdesc contains explorations html ids, markups, and exploration helper methods
         *
         * @constructor
         */
        function ExplorationUtils() {

            var BASE_EXPLORATION_NAME = 'Exploration';


            /**
             *
             * @type {ExplorationKoModel}
             */
            this.explorationKoModel = ExplorationKoModel.getInstance();

            /**
             *
             * @returns {Array.<EventSource>}
             */
            this.getExplorationSources = function () {
                return this.explorationKoModel.exploration().sources();
            };

            /**
             *
             * @returns {Array.<Condition>}
             */
            this.getExplorationConditions = function () {
                return this.explorationKoModel.exploration().conditions();
            };

            /**
             *
             * @returns {Array.<Correlation>}
             */
            this.getExplorationCorrelations = function () {
                return this.explorationKoModel.exploration().correlations();
            };

            /**
             *
             * @returns {Summary[]}
             */
            this.getExplorationSummaries = function () {
                return this.explorationKoModel.exploration().summaries();
            };

            /**
             *
             * @returns {Field[]}
             */
            this.getExplorationGroupByFields = function () {
                return this.explorationKoModel.exploration().groupBy();
            };


            /**
             *
             * @returns {EventSource}
             */
            this.getDefaultSource = function () {
                return this.getExplorationSources()[0];
            };


            /**
             *
             * @param {EventSource}  source
             * @returns {Field}
             */
            this.getDefaultField = function (source) {
                return source.fields[0];
            };


            /**
             * get new unique name for Exploration from server
             * @returns {string}
             */
            function getUniqueDisplayName(explorationTypeName, baseExplorationName) {
                var uniqueDisplayName = ExplorationsLoader.getInstance().getUniqueExplorationName(explorationTypeName, null, NotificationUtils.onFailureResponse);

                if (uniqueDisplayName && uniqueDisplayName.length) {
                    return uniqueDisplayName;
                }

                return baseExplorationName;
            }


            /**
             *  getUniqueExplorationDisplayName from server
             * @returns {string}
             */
            this.getUniqueExplorationDisplayName = function () {
                return getUniqueDisplayName(Utils.EXPLORATION_TYPE_NAME, BASE_EXPLORATION_NAME);
            };

            /**
             *
             * @returns {Exploration}
             */
            this.createExplorationWithoutSources = function () {
                var uniqueDisplayName = getUniqueDisplayName(Utils.EXPLORATION_TYPE_NAME, BASE_EXPLORATION_NAME);
                return new Exploration(null, uniqueDisplayName);
            };

            /**
             *
             * @param {PatternThing | string } pattern
             * @param {Function} callback
             * @param {Object} scope
             */
            this.createPatternExploration = function (pattern, callback, scope) {
                if (pattern) {
                    if (typeof pattern === 'string') {
                        ServiceFactory.getPatternService().getById(pattern, null, function (patternThing) {
                            var uniqueDisplayName = getUniqueDisplayName(patternThing.name, BASE_EXPLORATION_NAME);
                            callback.call(scope, new Exploration(null, uniqueDisplayName).setPattern(patternThing));
                        });
                    } else {
                        var uniqueDisplayName = getUniqueDisplayName(pattern.name, BASE_EXPLORATION_NAME);
                        callback.call(scope, new Exploration(null, uniqueDisplayName).setPattern(pattern));
                    }
                }
            };


            /**
             *
             * @param {String} oldControlId
             * @param {JqueryElement} newControl
             * @param {String} containerId
             */
            this.replaceOldControlMarkup = function (oldControlId, newControl, containerId) {
                var oldCondControl = $("#" + oldControlId);
                if (oldCondControl.length > 0) {
                    oldCondControl.replaceWith(newControl);
                } else {
                    $("#" + containerId).append($(this.col).append(newControl));
                }
            };

            /**
             *
             * @param {Condition[]} conditions
             */
            this.removeConditions = function (conditions) {
                var self = this;
                conditions.forEach(function (object) {
                    self.removeCondition(object.id);
                });
            };

            /**
             *
             * @param {String} conditionId
             */
            this.removeCondition = function (conditionId) {
                $("#" + conditionId).remove();

                var conditions_ = this.explorationKoModel.exploration().conditions();
                for (var i = 0; i < conditions_.length; i++) {
                    var cond = conditions_[i];
                    if (cond.id == conditionId) {
                        this.explorationKoModel.exploration().conditions.splice(i, 1);
                        break;
                    }
                }
                $(this.conditions).focus();

            };

            /**
             *
             * @param {Correlation[]} correlations
             */
            this.removeCorrelations = function (correlations) {
                var self = this;
                correlations.forEach(function (object) {
                    self.removeCorrelation(object.id);
                });
            };

            /**
             *
             * @param {String} conditionId
             */
            this.removeCorrelation = function (conditionId) {
                $("#" + conditionId).remove();

                var conditions_ = this.explorationKoModel.exploration().correlations();
                for (var i = 0; i < conditions_.length; i++) {
                    var cond = conditions_[i];
                    if (cond.id == conditionId) {
                        this.explorationKoModel.exploration().correlations.splice(i, 1);
                        break;
                    }
                }
                $(this.correlations).focus();
            };

            /**
             *
             * @param {Summary[]} summaries
             */
            this.removeSummaries = function (summaries) {
                var self = this;
                summaries.forEach(function (object) {
                    self.removeSummary(object.id);
                });
            };

            /**
             *
             * @param {String} conditionId
             */
            this.removeSummary = function (conditionId) {
                $("#" + conditionId).remove();

                var conditions_ = this.explorationKoModel.exploration().summaries();
                for (var i = 0; i < conditions_.length; i++) {
                    var cond = conditions_[i];
                    if (cond.id == conditionId) {
                        this.explorationKoModel.exploration().summaries.splice(i, 1);
                        break;
                    }
                }
                $(this.summaries).focus();

            };

            /**
             *
             * @param {Field[]} fields
             */
            this.removeGroupByFields = function (fields) {
                var self = this;
                fields.forEach(function (field) {
                    self.explorationKoModel.exploration().groupBy.remove(function (item) {
                        return item.id === field.id;
                    });

                });
            };


            /**
             *
             * @param {SelectedField} field
             * @param {HTMLElement} groupByFieldCheckBox
             */
            this.toggleGroupByFieldAndItsCheckboxSelection = function (field, groupByFieldCheckBox) {
                this.toggleGroupByFieldSelection(field);
                $(groupByFieldCheckBox).attr("checked", field.selected);
            };

            /**
             *
             * @param {SelectedField} field
             */
            this.toggleGroupByFieldSelection = function (field) {
                field.selected = !field.selected;
                this.explorationKoModel.exploration().groupBy.valueHasMutated();
            };

            /**
             *
             * @param {string} operandId
             * @returns {string} operandId
             */
            this.getOppositeOperandId = function (operandId) {
                if (operandId === this.conditionOperand1Property) {
                    return this.conditionOperand2Property;
                }
                return this.conditionOperand1Property;
            };


            /**
             *  update exploration parameters that can be changed by backend on deploy operation
             *
             * @param {Object} explorationInJson
             */
            this.updateExplorationModel = function (explorationInJson) {
                if (explorationInJson && explorationInJson.name) {
                    var exploration = this.explorationKoModel.exploration();

                    exploration.name(explorationInJson.name);
                    exploration.updatedBy(explorationInJson.updatedBy);
                    exploration.updatedAt(explorationInJson.updatedAt);
                    exploration.pubSubChannelName = explorationInJson.pubSubChannelName;
                    exploration.originalVersion = explorationInJson.originalVersion;
                    exploration.actions.updateExplorationActions(
                        explorationInJson.status.dirty,
                        explorationInJson.status.reloadNeeded,
                        explorationInJson.status.published,
                        explorationInJson.status.canUndo,
                        explorationInJson.status.canRedo,
                        explorationInJson.status.remoteChanges,
                        explorationInJson.status.dependentExplorationCount
                    );
                } else {
                    NotificationUtils.failedToUpdateExploration();
                }
            };


            /**
             *
             * @param {Exploration} exploration
             * @returns {boolean}
             */
            this.isNewExploration = function (exploration) {

                return exploration.name() == null || exploration.name().length === 0;
            };


            /**
             * ExplorationPrimaryChannelName  -contract with backend
             * example: /sx/explorationName/primary
             *
             * @param explorationName
             * @returns {string}
             */
            this.getPrimaryExplorationChannel = function (explorationName) {
                return "/sx/" + explorationName + "/primary";
            };

            //ids . html markups

            // createExplorationDialog
            this.openCreateExplorationDialog = "#openCreateExplorationDialog";
            this.createExplorationDialogContainer = "#createExplorationDialogContainer";
            this.createExplorationDialogContent = "#createExplorationDialogContent";
            this.createExplorationDialogTags = "#createExplorationDialogTags";
            this.createExplorationDialogSource = "#createExplorationDialogSource";
            this.createExplorationDialogSourceRemoveIcons = ".createExplorationDialogSourceContainer" + " .select2-search-choice-close";
            this.createExplorationDialogPattern = Utils.loadContent('html/exploration/createExplorationDialog.html');
            this.createExplorationDialogTranslatePrefix = "oep.exploration.createExplorationDialog.";
//            this.createExplorationDialogTitle = Utils.translateKey(this.createExplorationDialogTranslatePrefix, "createExplorationDialogTitle");
            this.createExplorationDialogSourceComboboxPlaceholder = Utils.translateKey(this.createExplorationDialogTranslatePrefix, "SourcePlaceholder");
            this.createExplorationDialogTagsComboboxPlaceholder = Utils.translateKey(this.createExplorationDialogTranslatePrefix, "TagsPlaceholder");
            this.createExplorationDialogTagsTooltip = Utils.translateKey(this.createExplorationDialogTranslatePrefix, "TagsTooltip");


            this.explorationEditor = "#explorationEditor";
            this.explorationEditorPath = "html/exploration/explorationEditor.html";

            this.explorationQueryEditor = "#explorationQueryEditor";
            this.explorationResultsMenu = "#explorationResultsMenu";
            this.explorationResultsAccordion = "#explorationResultsAccordion";
            this.explorationChartsAccordion = "#explorationChartsAccordion";
            this.mainContent = "#mainContent";

            this.sxAddButton = ".sxAddButton";
            this.sxRemoveButton = ".sxRemoveButton";
            this.changeOperandTypeContainer = ".changeOperandTypeContainer";
            this.changeOperandMenu = ".changeOperandMenu";
            this.changeOperandMenuDoneButton = ".changeOperandMenuDoneButton";
            this.valueList = ".valueList";
            this.sourceList = ".sourceList";
            this.sourceItem = ".sourceItem";
            this.changeOperandTypeButton = ".changeOperandTypeButton";
            this.addRemoveButtonsPattern = Utils.loadContent('html/exploration/addRemoveButtons.html');
            this.changeOperandTypeContainerPattern = Utils.loadContent('html/exploration/changeOperandTypeContainer.html');

            //table style
            this.row = "<div class='row'/>";
            this.col = "<div class='col'/>";
            this.colMiddle = "<div class='col colMiddle'/>";
            this.conditionItem = '<div class=\'condition\'/>';
            this.conditionItemEdit = '<div class="edit"/>';
            this.colClass = ".col";
            this.conditionTextMode = "<a class='conditionTextMode'/>";
            this.conditionTextModeClassSelector = ".conditionTextMode";
            this.conditionTextModeClass = "conditionTextMode";
            this.dataClauseId = "data-clauseId";


            //exploration form
            //ids
            this.explorationFormContainer = "#explorationFormContainer";
            this.explorationCreate = "#explorationCreate";
            this.explorationFormId = "#explorationForm";
            this.createExplorationFormPath = 'html/exploration/explorationForm.html';
            this.nameId = "#name";
            this.tagsId = "#tags";
            this.descriptionId = "#description";
            this.sourcesId = "#sources";
            this.createExplorationBtn = "createExplorationBtn";
            this.cancelExplorationBtn = "#cancelExplorationBtn";
            this.explorationTranslatePrefix = "oep.exploration.";

            //sources
            this.sourceCombobox = "#sources #sourcesCombobox";
            this.sourcesRemoveIcons = ".sourcesContainer .select2-search-choice-close";
            this.sources = "#sources";
            this.sourcesTranslatePrefix = "oep.exploration.sources.";
            this.select2ComponentContainerForPatternBasedExploration = "select2ComponentContainerForPatternBasedExploration";
            this.sourcesComboboxPlaceholder = Utils.translateKey(this.sourcesTranslatePrefix, "sourcesComboboxPlaceholder");
            this.fieldComboboxPlaceholder = Utils.translateKey(this.sourcesTranslatePrefix, "fieldComboboxPlaceholder");
            this.fieldsComboboxPlaceholder = Utils.translateKey(this.sourcesTranslatePrefix, "fieldsComboboxPlaceholder");
            this.viewOrEditSourceDetails = Utils.translateKey(this.sourcesTranslatePrefix, "viewOrEditSourceDetails");
            this.viewSourceDetails = Utils.translateKey(this.sourcesTranslatePrefix, "viewSourceDetails");
            this.RemoveThisSource = Utils.translateKey(this.sourcesTranslatePrefix, "RemoveThisSource");
            this.noMatchesMessage = Utils.translateKey(this.sourcesTranslatePrefix, "noMatchesMessage");
            this.noMatchesCreateSourceEmptyName = Utils.translateKey(this.sourcesTranslatePrefix, "noMatchesCreateSourceEmptyName");
            this.noMatchesCreateSourceTemplate = this.sourcesTranslatePrefix + "noMatchesCreateSourceTemplate";
            this.selectASourceWelcomeBtn = ".selectASourceWelcomeBtn";


            //pattern
            this.pattern = '#pattern';
            this.patternFormTemplate = "html/exploration/patternForm.html";

            this.confirmDialogTranslatePrefix = "oep.exploration.confirmDialog.";
            this.explorationEditorConfirmDialog = "#explorationEditorConfirmDialog";
            this.explorationEditorConfirmDialogClass = ".explorationEditorConfirmDialog";
            this.explorationEditorConfirmDialogMessage = ".explorationEditorConfirmDialogMessage";
            this.explorationEditorConfirmDialogCreateButton = "#explorationEditorConfirmDialogCreateButton";
            this.explorationEditorConfirmDialogCancelButton = "#explorationEditorConfirmDialogCancelButton";
            this.andLabel = Utils.translateKey(this.confirmDialogTranslatePrefix, "andLabel");


            //conditions
            this.conditions = "#conditions";
            this.conditionsTranslatePrefix = "oep.exploration.conditions.";
            this.conditionsTable = "#conditionsTable";
            this.conditionsWelcomeBtns = "#conditionsWelcomeBtns";
            this.conditionMatching = "#conditionMatching";
            this.filtersMatchingContent = "#filtersMatchingContent";
            this.filtersMatchingEditor = ".filtersMatchingEditor";
            this.conditionMatchingInput = "input[class='conditionMatchingInput']";
            this.conditionMatchingAny = "input#matchAny";
            this.conditionMatchingAll = "input#matchAll";
            this.filtersMatchingPattern = Utils.loadContent('html/exploration/explorationFiltersMatchingEditor.html');


            this.addConditionWelcomeBtn = "#addConditionWelcomeBtn";

            this.conditionOperand1Property = "operand1";                   //condition property name
            this.conditionOperand2Property = "operand2";                   //condition property name
            this.conditionOperationProperty = "operation";           //condition property name

            this.fieldControlMarkup = "<input class='fieldControl' type='hidden' />";
            this.operationControlMarkup = "<input class='operationControl' type='hidden' />";
            this.stringControlMarkup = "<input class='conditionStringControl validate[]' />";
            this.timeStampControlMarkup = "<input type='text' class='validate[required, custom[timeStampFormat]] conditionStringControl'/>";
            this.dateControlMarkup = "<input type='text' class='validate[required, custom[date]] conditionStringControl'/>";
            this.spinnerIntegerControlMarkup = "<input class='validate[required, custom[integer]] conditionSpinnerControl'/>";
            this.spinnerDoubleControlMarkup = "<input class='validate[required, custom[number]] conditionSpinnerControl'/>";
            this.booleanOperationValueControl = "<input class='booleanOperationValueControl' type='hidden' />";

            //correlations
            this.correlations = "#correlations";
            this.correlationsTranslatePrefix = "oep.exploration.correlations.";
            this.correlationsTable = "#correlationsTable";
            this.correlationsWelcomeBtns = "#correlationsWelcomeBtns";
            this.addCorrelationWelcomeBtn = "#addCorrelationWelcomeBtn";
            this.correlationEditModeContainerSelector = '.edit';
            this.editModeClass = 'editMode';
            this.shakeCorrelationsIfSourceAdded = 'shakeCorrelationsIfSourceAdded';
            this.equalsOperationMarkup = "<div class='equalsOperation'>=</div>";

            //summaries
            this.summaries = "#summaries";
            this.summariesTranslatePrefix = "oep.exploration.summaries.";
            this.summariesTable = "#summariesTable";
            this.summariesWelcomeBtns = "#summariesWelcomeBtns";
            this.addSummaryWelcomeBtn = "#addSummaryWelcomeBtn";
            this.summaryControls = "#summaryControls";
            this.summariesSwitcher = "#summariesSwitcher";
            this.of_Translated = Utils.translateKey(this.summariesTranslatePrefix, "of");
            this.disabledFieldMarkup = "<div class='disabledField'></div>";
            this.of_Markup = "<div class='equalsOperation'>" + this.of_Translated + "</div>";

            //group by
            this.groupByContainer = "#groupByContainer";
            this.groupByContent = "#groupByContent";
            this.groupByEditor = ".groupByEditor";
            this.groupByReadMode = ".groupByReadMode";
            this.groupByContainerPattern = Utils.loadContent('html/exploration/groupByContainer.html');
            this.groupByTranslatePrefix = "oep.exploration.summaries.groupBy.";
            this.groupByHeader = Utils.translateKey(this.groupByTranslatePrefix, "groupByHeader");
            this.spanMarkup = " <span style='font-weight:bold '>";
            this.spanEndMarkup = "</span> ";

            this.findGroupByCheckBoxByNumberPattern = ".groupByEditor .explorationCheckboxInput:eq({0})";
            this.groupByFieldsCheckBoxes = ".groupByEditor .explorationCheckboxes";

            //partition by
            this.partitionByContainer = ".partitionByContainer";
            this.partitionByContent = ".partitionByContent";
            this.partitionByEditor = ".partitionByEditor";
            this.partitionByContainerPattern = Utils.loadContent('html/exploration/partitionByContainer.html');
            this.partitionByTranslatePrefix = "oep.exploration.window.partitionBy.";
            this.partitionByHeader = Utils.translateKey(this.partitionByTranslatePrefix, "partitionByHeader");


            //export Dialog
            this.exportExplorationBtnInActionsMenu = "#exportExplorationBtn";
            this.exportContainer = "#exportContainer";
            this.exportContent = "#exportContent";
            this.advanchedOptionsAccordion = "#advanchedOptionsAccordion";

            this.exportButton = "#exportButton";
            this.exportCancelButton = "#exportCancelButton";
            this.exportHTMLMarkup = 'html/exploration/exportDialog.html';
            this.exportTranslatePrefix = "oep.exploration.export.";
            this.exportResourceHeader = Utils.translateKey(this.exportTranslatePrefix, "exportList.resource");
            this.exportResourceTypeHeader = Utils.translateKey(this.exportTranslatePrefix, "exportList.type");
            this.explorationDependencyTitle = Utils.translateKey(this.exportTranslatePrefix, "exportList.explorationTitle");
            this.sourceDependencyTitle = Utils.translateKey(this.exportTranslatePrefix, "exportList.sourceTitle");
            this.targetDependencyTitle = Utils.translateKey(this.exportTranslatePrefix, "exportList.targetTitle");
            this.exportTitle = Utils.translateKey(this.exportTranslatePrefix, "exportTitle");


            //sourceSummary
            this.sourceSummaryContainer = "#sourceSummaryContainer";
            this.sourceSummaryContent = "#sourceSummaryContent";
            this.sourceDetailsAccordion = "#sourceDetailsAccordion";
            this.sourceTypeParametersAccordion = "#sourceTypeParametersAccordion";
            this.sourceShapeAccordion = "#sourceShapeAccordion";
            this.sourceSummaryDoneButton = "#sourceSummaryDoneButton";
            this.noTitleForJqueryUIDialog = "noTitleForJqueryUIDialog";
            this.sourceSummaryPattern = Utils.loadContent('html/exploration/sourceSummary.html');
            this.sourceSummaryTranslatePrefix = "oep.exploration.sourceSummary.";
            this.areYouSureToLeaveCurrentExploration = Utils.translateKey(this.sourceSummaryTranslatePrefix, "areYouSureToLeaveCurrentExploration");
            this.sourceSummaryTitle = Utils.translateKey(this.sourceSummaryTranslatePrefix, "sourceSummaryTitle");


            //edit exploration credentials
            this.explorationDisplayName = "#explorationDisplayName";

            //script mode
            this.scriptModeSwitcher = "#scriptModeSwitcher";
            this.scriptMode = "#scriptMode";
            this.explorationQuery = "#explorationQuery";

            //deployer controller -apply button
            this.deployExplorationToOepServer = "#deployExplorationToOepServer";
            this.succesfullDeployed = "succesfullDeployed";
            this.failDeployed = "failDeployed";
            this.deleteExplorationBtn = "#deleteExplorationBtn";
            this.addExplorationTargetBtn = "#addExplorationTargetBtn";

            //exploration editor Toolbar
            this.actionsPopup = "#actionsPopup";
            this.publishExplorationBtn = "#publishExplorationBtn";
            this.unpublishExplorationBtn = "#unpublishExplorationBtn";

            this.overwriteExplorationBtn = "#overwriteExplorationBtn";
            this.uptakeExplorationBtn = ".uptakeExplorationBtn";
            this.cloneExplorationBtn = "#cloneExplorationBtn";
            this.inspectExplorationBtn = ".inspectExplorationBtn";
            this.cancelExplorationBtn = "#cancelExplorationBtn";

            this.inspectHashParam = "&inspect=true";

            this.undoExplorationBtn = "#undoExplorationBtn";
            this.redoExplorationBtn = "#redoExplorationBtn";
            this.saveExplorationBtn = "#saveExplorationBtn";
            this.stopExplorationBtn = "#stopExplorationBtn";
            this.infoExplorationBtn = "#infoExplorationBtn";
            this.deleteExplorationBtn = "#deleteExplorationBtn";


            //subscriber
            this.subscriberConnected = "subscriber connected";
            this.subscriberDisconnected = "subscriber disconnected";

            //results
            this.explorationResults = '#explorationResults';
            this.bucket1 = "bucket1_";
            this.table = 'Table';
            this.tableContainer = 'TableContainer';
            this.resultSourceLabels = 'resultSourceLabels';
            this.btnEventTypeColumns = 'btnEventTypeColumns';
            this.showServerTimestamp = 'btnShowServerTimestamp';
            this.lineChart = 'LineChart';
            this.polarChart = 'PolarChart';
            this.scatterChart = 'ScatterChart';
            this.querySwitcher = 'querySwitcher';
            this.chartsViewModeSwitcher = 'ViewModeController';
            this.removeTargetBtn = "#removeTargetBtn";

            //charts
            this.chartsId = 'charts';
            this.chartsBucketsControllerPattern = Utils.loadContent('html/exploration/chartsBucketsController.html');
            this.chartBucketId = 'chartBucket';
            this.chartConfigPanelClass = 'chartConfigPanel';
            this.chartPropertiesClass = 'chartProperties';
            this.chartComponentClass = 'chartComponent';
            this.chartTypeChooserClass = 'chartTypeChooser';

            //window
            this.windowsDrawer = '#windowsDrawer';
            this.windowsContainer = '.windowsContainer';
            this.windowsDrawerOpenBtn = '.windowsDrawerOpenBtn';
            this.windowsDrawerContent = '#windowsDrawerContent';
            this.windowsDrawerPattern = 'html/exploration/windowsDrawer.html';

            //table preferences
            this.MAX_EVENTS_IN_RESULT_TABLE = 100;
            this.resultsTableHeight = 310;
            this.SERVER_TIMESTAMP = '___EVENT_TIMESTAMP';
            this.NANOSECONDS_TO_MILLISECONDS_MULTIPLIER = 0.000001;


            //chart
            this.resultsChartContainerId = '#explorationResultsChart';
            this.PERIOD_IN_RESULT_CHART = 150000;  //milliseconds


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationUtils}
         */
        ExplorationUtils.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationUtils();
            }
            return this.instance;
        };


        return ExplorationUtils;
    });