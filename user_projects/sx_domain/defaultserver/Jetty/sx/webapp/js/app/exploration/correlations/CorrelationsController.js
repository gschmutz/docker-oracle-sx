/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('CorrelationsController', [
        'jquery',
        'knockout',
        'Correlation',
        'Operand',
        'Utils',
        'ExplorationUtils',
        'ClauseController',
        'QueryDependenciesController',
        'QueryAnalyser',
        'EditedRegion',

        'select2'
    ],

    /**
     * @exports exploration/correlations
     * @ignoer
     */
        function ($, ko, Correlation, Operand, Utils, ExplorationUtils, ClauseController, QueryDependenciesController, QueryAnalyser, EditedRegion) {


        /**
         * @class
         * @classdesc *
         * @extends  ClauseController
         *
         * @constructor
         */
        function CorrelationsController() {
            CorrelationsController.superclass.constructor.call(this);
            this.dependenciesController = QueryDependenciesController.getInstance();
        }

        //inheritance
        Utils.extend(CorrelationsController, ClauseController);


        CorrelationsController.prototype.onOpenExplorationEditor = function (exploration) {
            this.clauseContainer = $(this.exUtils.correlations);
            this.clausesTable = $(this.exUtils.correlationsTable);

//            this.initExplorationSourceListener();
            this.initAddConditionWelcomeButton();
            this.initCurrentEditedClauseChangesListener();
            this.addConditions(exploration);
            this.addClauseContainerFocusListener(EditedRegion.EditedRegion.Correlations);
            this.addExitFromEditModeWhenFocusOutListener(this.clauseContainer, this.explorationKoModel.isCorrelationsInEditMode, EditedRegion.EditedRegion.Correlations);
//            this.animateCorrelationsIfSourceAdded();

        };


        CorrelationsController.prototype.initCurrentEditedClauseChangesListener = function () {
            var self = this;

            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Correlation) {
                    self.updateTextModeControl(clause);
                    self.showEditMode(self.getConditionContainer(clause), false);
                }
            }, null, "beforeChange");


            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Correlation) {
                    self.showEditMode(self.getConditionContainer(clause), true);
                }

            });


        };


        CorrelationsController.prototype.animateCorrelationsIfSourceAdded = function () {
            var self = this;
            var previousSourcesLength = 0;
            this.explorationKoModel.exploration().sources.subscribe(function (sources) {
                if (sources.length > 2 && sources.length > previousSourcesLength) {
                    self.clauseContainer.removeClass(self.exUtils.shakeCorrelationsIfSourceAdded);

                    setTimeout(function () {
                        self.clauseContainer.addClass(self.exUtils.shakeCorrelationsIfSourceAdded);
                    }, 30);

                }
                previousSourcesLength = sources.length;

            });
        };


        CorrelationsController.prototype.selectClauseById = function (clauseId) {
            var clause = Utils.findById(clauseId, this.explorationKoModel.exploration().correlations());
            if (clause) {
                this.explorationKoModel.currentEditedClause(clause);
            }
        };


        CorrelationsController.prototype.selectLastClauseIfNoClausesInEditMode = function () {

            var length = this.explorationKoModel.exploration().correlations().length;
            if (!this.explorationKoModel.isCorrelationsInEditMode() && length) {
                this.explorationKoModel.currentEditedClause(this.explorationKoModel.exploration().correlations()[length - 1]);
            }
        };


        CorrelationsController.prototype.initAddConditionWelcomeButton = function () {
            var control = $(this.exUtils.correlationsWelcomeBtns).find(this.exUtils.addCorrelationWelcomeBtn);
            var self = this;
            control.click(function () {
                self.addCondition();
            });

        };


        /**
         *
         * @param {Exploration} exploration
         */
        CorrelationsController.prototype.addConditions = function (exploration) {
            var conditions = exploration.correlations();
            for (var i = 0; i < conditions.length; i++) {
                this.addNewCondition(conditions[i]);
            }
            this.exitEditMode();

        };


        /**
         *
         * @param {Condition} condition
         */
        CorrelationsController.prototype.addNewCondition = function (condition) {
            this.explorationKoModel.exploration().correlations.push(condition);
            this.createConditionContainer(condition);

            var operand1Control = this.createOperandControl(condition, this.exUtils.conditionOperand1Property);
            this.createOperationControl(condition);
            var operand2Control = this.createOperandControl(condition, this.exUtils.conditionOperand2Property);


            this.initCorrelationOperandChangeListener(condition, this.exUtils.conditionOperand1Property, operand1Control, operand2Control);
            this.initCorrelationOperandChangeListener(condition, this.exUtils.conditionOperand2Property, operand2Control, operand1Control);


            var removeButton = this.createRemoveButton(condition);
            this.showConfirmDialogIfRemovedCorrelationAffectsConditions(removeButton, condition);

            this.createTextModeControl(condition);
            this.updateCurrentEditedClause(condition);


        };

        CorrelationsController.prototype.showConfirmDialogIfRemovedCorrelationAffectsConditions = function (removeButton, correlation) {
            var self = this;
            removeButton.unbind().click(function () {
                var isConfirmDialogShowed = self.dependenciesController.showConfirmDialogIfRemovedCorrelationAffectsConditions(correlation);

                if (!isConfirmDialogShowed) {  //removed by silence
                    self.updateCurrentEditedClause(null);
                    self.clauseContainer.focus();
                }


//                self.explorationKoModel.currentEditedClause(null);

            });
        };


        CorrelationsController.prototype.showEditMode = function (conditionContainer, isEditMode) {
            var editModeElements = conditionContainer.find(this.exUtils.correlationEditModeContainerSelector);

            if (isEditMode) {
                conditionContainer.addClass(this.exUtils.editModeClass);
            } else {
                conditionContainer.removeClass(this.exUtils.editModeClass);
            }

            Utils.displayClauseElement(isEditMode, editModeElements);
//            this.updateCurrentEditedClause();

        };


        CorrelationsController.prototype.createConditionContainer = function (condition) {
            var conditionContainer = $(this.exUtils.conditionItem).attr('id', condition.id).attr('tabindex', -1);
            var editContainer = $(this.exUtils.conditionItemEdit);
            conditionContainer.append(editContainer);
            this.clausesTable.append(conditionContainer);
            return conditionContainer;
        };

        CorrelationsController.prototype.addCondition = function () {

            var newCorrelation = getCorrelationWithDataTypeCompatibleFields.call(this);
            if (newCorrelation) {
                this.addNewCondition(newCorrelation);
            }
        };

        /**
         * Correlation Fields should be  data type conversion compatible
         * @returns {Correlation| null}
         */
        function getCorrelationWithDataTypeCompatibleFields() {
            var operand1Field;
            var operand2Field;

            var fields = this.fieldsController.explorationFields;
            for (var i = 0; i < fields.length; i++) {
                var field1 = fields[i];
                for (var j = i + 1; j < fields.length; j++) {
                    var field2 = fields[j];
                    if (isCorrelationFieldsCompatible.call(this, field1, field2)) {
                        operand1Field = field1;
                        operand2Field = field2;
                        //exit both cycles
                        i = fields.length;
                        j = fields.length;

                    }
                }
            }

            if (operand1Field && operand2Field) {
                return new Correlation(
                    new Operand(this.operandTypes.FIELD, null, operand1Field),
                    this.operations.getDefaultOperation(),
                    new Operand(this.operandTypes.FIELD, null, operand2Field));

            } else {
                return null;
            }
        }


        /**
         *
         * @param {Condition} correlation
         * @param operandId
         * @returns {jquery | select2}
         */
        CorrelationsController.prototype.createOperandControl = function (correlation, operandId) {
            var editContainerSelector = correlation.id + '>' + this.exUtils.correlationEditModeContainerSelector;
            var select = this.fieldsController.createCorrelationOperandFieldsControl(this.getOperand1ControlId(correlation.id), editContainerSelector, correlation, this.exUtils.getOppositeOperandId(operandId));

            select.select2("val", correlation[operandId].field.id);

            return select;
        };

        /**
         *
         * @param {Correlation} correlation
         * @param operandId
         * @param fieldControl
         * @param oppositeFieldControl
         */
        CorrelationsController.prototype.initCorrelationOperandChangeListener = function (correlation, operandId, fieldControl, oppositeFieldControl) {
            var self = this;
            fieldControl.on("select2-selecting", function (event) {  //"select2-selecting" happens before "change" event
                self.showConfirmDialogIfChangedCorrelationOperandAffectsConditions(event, correlation, operandId, fieldControl, oppositeFieldControl);
            });

            fieldControl.on("change", function (event) {
                self.fieldChangeListener(event, correlation, operandId);
            });

        };

        /**
         *
         * @param event
         * @param {Correlation} correlation
         * @param operandId
         * @param oppositeFieldControl
         */
        CorrelationsController.prototype.fieldChangeListener = function (event, correlation, operandId) {
            /**
             *
             * @type {Field}
             */
            var field = event.added;
            if (field) {
                correlation[operandId].field = field;
            }
        };

        function findCompatibleOppositeFieldForCorrelation(field) {
            var fields = this.fieldsController.explorationFields;

            for (var j = 0; j < fields.length; j++) {
                if (isCorrelationFieldsCompatible.call(this, field, fields[j])) {
                    return fields[j];
                }
            }
            return null;
        }

        function isCorrelationFieldsCompatible(field1, field2) {
            return this.datatypeConversionMatrix.isFieldDatatypesCompatible(field1.type, field2.type) && !isFieldsHaveTheSameSource(field1, field2);
        }


        function isFieldsHaveTheSameSource(field1, field2) {
            return field1.source.id == field2.source.id;
        }

        /**
         *
         * @param selectingEvent
         * @param {Correlation} correlation
         * @param operandId
         * @param fieldControl
         * @param oppositeFieldControl
         */
        CorrelationsController.prototype.showConfirmDialogIfChangedCorrelationOperandAffectsConditions = function (selectingEvent, correlation, operandId, fieldControl, oppositeFieldControl) {
            selectingEvent.preventDefault();
            /**
             *
             * @type {Field}
             */
            var newCorrelationField = selectingEvent.object;
            /**
             *
             * @type {Field}
             */
            var oppositeCorrelationField = correlation[this.exUtils.getOppositeOperandId(operandId)].field;
            if (!isCorrelationFieldsCompatible.call(this, newCorrelationField, oppositeCorrelationField)) {
                oppositeCorrelationField = findCompatibleOppositeFieldForCorrelation.call(this, newCorrelationField);
            }

            if (newCorrelationField && oppositeCorrelationField) {
                var changedCorrelation = correlation.clone();
                changedCorrelation[operandId].field = newCorrelationField;
                changedCorrelation[this.exUtils.getOppositeOperandId(operandId)].field = oppositeCorrelationField;
                this.dependenciesController.showConfirmDialogIfChangedCorrelationAffectsConditions(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl);

            }

            fieldControl.select2('close');
        };

        /**
         *
         * @param {Condition} condition
         */
        CorrelationsController.prototype.createOperationControl = function (condition) {
            var select = $(this.exUtils.equalsOperationMarkup).attr('id', this.getConditionOperationControlId(condition.id));
            this.getConditionEditContainer(condition).append($(this.exUtils.colMiddle).append(select));

            return select;
        };

        CorrelationsController.prototype.updateTextModeControl = function (condition) {
            var textMode = this.getConditionContainer(condition).find(this.exUtils.conditionTextModeClassSelector);
            textMode.text(this.queryPrinter.equalityToText(condition));
        };

        this.remainsOnlyUniqueCorrelations = function () {
            var correlations = this.exUtils.getExplorationCorrelations();
            var nonUniqueCorrelations = QueryAnalyser.getInstance().getNonUniqueCorrelations(correlations);
            var self = this;
            nonUniqueCorrelations.forEach(function (correlation) {
                self.exUtils.removeCorrelation(correlation.id);
            });
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {CorrelationsController}
         */
        CorrelationsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new CorrelationsController();
            }
            return this.instance;
        };


        return CorrelationsController;

    }
)
;
