/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('SummariesController', [
        'jquery',
        'knockout',
        'Summary',
        'Operand',
        'OperandType',
        'AggregatedField',
        'Utils',
        'ExplorationUtils',
        'ClauseController',
        'QueryDependenciesController',
        'QueryAnalyser',
        'AggregateFunctions',
        'GroupByController',
        'NotificationUtils',
        'EditedRegion',

        'select2'
    ],

    /**
     * @exports exploration/summaries
     * @ignore
     */
        function ($, ko, Summary, Operand, OperandType, AggregatedField, Utils, ExplorationUtils, ClauseController, QueryDependenciesController, QueryAnalyser, AggregateFunctions, GroupByController, NotificationUtils, EditedRegion) {


        /**
         * @class
         * @classdesc - Summaries Editor component in ExplorationEditor
         * @extends  ClauseController
         *
         * @constructor
         */
        function SummariesController() {
            SummariesController.superclass.constructor.call(this);
            this.dependenciesController = QueryDependenciesController.getInstance();
            this.aggregateFunctions = AggregateFunctions.getInstance();
            this.groupByController = GroupByController.getInstance();

        }

        //inheritance
        Utils.extend(SummariesController, ClauseController);

        /**
         *
         * @param {Exploration} exploration
         */
        SummariesController.prototype.onOpenExplorationEditor = function (exploration) {
            this.clauseContainer = $(this.exUtils.summaries);
            this.clausesTable = $(this.exUtils.summariesTable);
            this.groupByController.onOpenExplorationEditor(exploration);
            this.initAddConditionWelcomeButton();
            this.initCurrentEditedClauseChangesListener();
            this.addConditions(exploration);
            this.addClauseContainerFocusListener(EditedRegion.EditedRegion.Summaries);
            this.addExitFromEditModeWhenFocusOutListener(this.clauseContainer, this.explorationKoModel.isSummariesInEditMode, EditedRegion.EditedRegion.Summaries);

            this.exitEditMode();

        };


        SummariesController.prototype.onCloseExplorationEditor = function () {
            this.groupByController.onCloseExplorationEditor();

        };


        SummariesController.prototype.initCurrentEditedClauseChangesListener = function () {
            var self = this;

            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Summary) {
                    self.updateTextModeControl(clause);
                    self.showEditMode(self.getConditionContainer(clause), false);
                }
            }, null, "beforeChange");


            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Summary) {
                    self.showEditMode(self.getConditionContainer(clause), true);
                }

            });


        };


        SummariesController.prototype.initAddConditionWelcomeButton = function () {
            var control = $(this.exUtils.summariesWelcomeBtns).find(this.exUtils.addSummaryWelcomeBtn);
            var self = this;
            control.click(function () {
                self.addCondition();
            });

        };


        SummariesController.prototype.selectClauseById = function (clauseId) {
            var clause = Utils.findById(clauseId, this.explorationKoModel.exploration().summaries());
            if (clause) {
                this.explorationKoModel.currentEditedClause(clause);
            }
        };


        SummariesController.prototype.selectLastClauseIfNoClausesInEditMode = function () {

            var length = this.explorationKoModel.exploration().summaries().length;
            if (!this.explorationKoModel.isSummariesInEditMode() && length) {
                this.explorationKoModel.currentEditedClause(this.explorationKoModel.exploration().summaries()[length - 1]);
            }
        };


        /**
         *
         * @param {Exploration} exploration
         */
        SummariesController.prototype.addConditions = function (exploration) {
            var summaries = exploration.summaries();
            for (var i = 0; i < summaries.length; i++) {
                this.addNewCondition(summaries[i]);
            }
            this.exitEditMode();

        };


        /**
         *
         * @param {Summary} summary
         */
        SummariesController.prototype.addNewCondition = function (summary) {

            this.explorationKoModel.exploration().summaries.push(summary);

            this.createConditionContainer(summary);
            var aggregateFunctionControl = this.createAggregateFunctionControl(summary);
            this.createTextBox(summary);
            var summaryFieldControl = this.createSummaryFieldControl(summary);

            this.initAggregageFunctionChangeListener(summary, summaryFieldControl, aggregateFunctionControl);
            this.initSummaryFieldChangeListener(summary, summaryFieldControl, aggregateFunctionControl);


            this.createRemoveButton(summary);
            this.createTextModeControl(summary);
            this.updateCurrentEditedClause(summary);
        };


        SummariesController.prototype.createRemoveButton = function (summary) {
            var removeButton = SummariesController.superclass.createRemoveButton.call(this, summary);
            this.showConfirmDialogIfRemovedSummaryAffectsConditions(removeButton, summary);
        };


        SummariesController.prototype.showConfirmDialogIfRemovedSummaryAffectsConditions = function (removeButton, summary) {
            var self = this;
            removeButton.unbind().click(function () {
                var isConfirmDialogShowed = self.dependenciesController.showConfirmDialogIfRemovedSummaryAffectsConditions(summary);
                if (!isConfirmDialogShowed) {  //removed by silence
                    self.updateCurrentEditedClause(null);
                    self.clauseContainer.focus();
                }


            });
        };


        /**
         *
         * @param {Condition} summary
         */
        SummariesController.prototype.updateTextModeControl = function (summary) {
            var textMode = this.getConditionContainer(summary).find(this.exUtils.conditionTextModeClassSelector);
            textMode.text(this.queryPrinter.summaryToText(summary));
        };

        SummariesController.prototype.showEditMode = function (conditionContainer, isEditMode) {
            var editModeElements = conditionContainer.find(this.exUtils.colClass);
            var textModeElements = conditionContainer.find(this.exUtils.conditionTextModeClassSelector);

            if (isEditMode) {
                conditionContainer.focus();
            } else {
            }

            Utils.displayClauseElement(isEditMode, editModeElements);
            Utils.displayElement(!isEditMode, textModeElements);
//            this.updateCurrentEditedClause();
        };


        SummariesController.prototype.createConditionContainer = function (condition) {
            var conditionContainer = $(this.exUtils.row).attr('id', condition.id).attr('tabindex', -1);
            this.clausesTable.append(conditionContainer);
            return conditionContainer;
        };


        SummariesController.prototype.addCondition = function () {

            var defaultSource = this.exUtils.getDefaultSource();
            var defaultField = this.exUtils.getDefaultField(defaultSource);
            var defaultAggregatedFunction = this.aggregateFunctions.getDefaultAggregateFunction();

            var newSummary = new Summary(
                new Operand(this.operandTypes.FIELD, null, defaultField),
                new AggregatedField(defaultField, defaultAggregatedFunction)
            );

            this.addNewCondition(newSummary);

            if (this.explorationKoModel.exploration().summaries().length == 1) {
                NotificationUtils.yourFirstSummaryHasBeenAdded();
            }
        };


        /**
         *
         * @param {Summary} summary
         */
        SummariesController.prototype.createAggregateFunctionControl = function (summary) {
            var select = $(this.exUtils.operationControlMarkup).attr('id', this.getConditionOperationControlId(summary.id));

            this.getConditionContainer(summary).append($(this.exUtils.col).append(select));
            var self = this;
            select = select.select2({
                    data: function () {
                        return  {  results: self.fieldsController.getAggregateFunctions()
                        };
                    }
                }
            );

            select.select2("val", summary.aggregatedField.aggregateFunction);

            return select;
        };


        /**
         *
         * @param {Summary} summary
         * @param aggregateFunctionControl
         * @returns {jquery | select2}
         */
        SummariesController.prototype.createSummaryFieldControl = function (summary) {
            var select = this.fieldsController.createSummaryFieldsControl(this.getOperand1ControlId(summary.id), summary.id, summary);

            select.select2("val", summary.operand.field.id);

            return select;
        };


        /**
         *
         * @param {Condition} condition
         */
        SummariesController.prototype.createTextBox = function (condition) {
            var select = $(this.exUtils.of_Markup);
            this.getConditionContainer(condition).append($(this.exUtils.colMiddle).append(select));

            return select;
        };


        /**
         *
         * @param {Summary} summary
         * @param summaryFieldControl
         * @param aggregateFunctionControl
         */
        SummariesController.prototype.initAggregageFunctionChangeListener = function (summary, summaryFieldControl, aggregateFunctionControl) {
            var self = this;

            aggregateFunctionControl.on("select2-selecting", function (event) {
                event.preventDefault();
                var newAggregateFunction = event.object.id;
                if (newAggregateFunction !== summary.aggregatedField.aggregateFunction) {

                    /**
                     *
                     * @type {Field}
                     */
                    var newField;
                    if (self.aggregateFunctions.isAggregateFunctionCompatibleWithField(newAggregateFunction, summary.operand.field)) {
                        newField = summary.operand.field; //use the old field
                    } else {
                        newField = self.aggregateFunctions.getFirstFieldThatCompatibleWithAggregateFunction(newAggregateFunction, self.fieldsController.explorationFields);
                    }

                    var newOperand = new Operand(OperandType.OperandType.FIELD, null, newField);
                    var newAggregatedField = new AggregatedField(newOperand.field, newAggregateFunction);
                    var changedSummary = new Summary(newOperand, newAggregatedField);

                    self.dependenciesController.showConfirmDialogIfChangedSummaryAffectsConditions(summary, changedSummary, summaryFieldControl, aggregateFunctionControl);
                }
                aggregateFunctionControl.select2('close');

            });

        };


        /**
         *
         * @param {Summary} summary
         * @param summaryFieldControl
         * @param aggregateFunctionControl
         */
        SummariesController.prototype.initSummaryFieldChangeListener = function (summary, summaryFieldControl, aggregateFunctionControl) {
            var self = this;
            summaryFieldControl.on("select2-selecting", function (event) {
                event.preventDefault();

                /**
                 *
                 * @type {Field}
                 */
                var newField = event.object;
                if (newField.id !== summary.operand.field.id) {
                    var changedSummary = new Summary(
                        new Operand(OperandType.OperandType.FIELD, null, newField),
                        new AggregatedField(newField, summary.aggregatedField.aggregateFunction)
                    );
                    self.dependenciesController.showConfirmDialogIfChangedSummaryAffectsConditions(summary, changedSummary, summaryFieldControl, aggregateFunctionControl);
                }
                summaryFieldControl.select2('close');
            });

        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {SummariesController}
         */
        SummariesController.getInstance = function () {
            if (!this.instance) {
                this.instance = new SummariesController();
            }
            return this.instance;
        };


        return SummariesController;

    }
)
;
