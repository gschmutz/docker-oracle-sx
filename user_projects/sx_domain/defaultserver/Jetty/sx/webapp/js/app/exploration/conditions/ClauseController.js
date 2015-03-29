/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('ClauseController', [
        'jquery',
        'knockout',
        'FieldTypeOperations',
        'Condition',
        'Operand',
        'OperandType',
        'Utils',
        'FieldType',
        'Translate',
        'ColorCoding',
        'ExplorationUtils',
        'ExplorationFieldsController',
        'ImplicitDatatypeConversionMatrix',
        'QueryPrinter',
        'QueryAnalyser',
        'NotificationUtils',
        'EditedRegion',
        'Correlation',

        'dtpicker',
        'select2'
    ],

    /**
     * @exports exploration/conditions
     * @ignoer
     */
        function ($, ko, FieldTypeOperations, Condition, Operand, OperandType, Utils, FieldType, Translate, ColorCoding, ExplorationUtils, ExplorationFieldsController, ImplicitDatatypeConversionMatrix, QueryPrinter, QueryAnalyser, NotificationUtils, EditedRegion, Correlation) {


        /**
         * @class
         * @classdesc base class for @see ConditionsController, @see CorrelationsController, @see SummariesController
         * @constructor
         */
        function ClauseController() {

            /**
             *
             * @type {ExplorationFieldsController}
             */
            this.fieldsController = ExplorationFieldsController.getInstance();
            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;
            this.operations = FieldTypeOperations.getInstance();
            this.queryPrinter = QueryPrinter.getInstance();
            this.queryAnalyser = QueryAnalyser.getInstance();
            this.operandTypes = OperandType.OperandType;
            this.uiFieldTypes = FieldType.UI_FIELD_TYPES;
            this.datatypeConversionMatrix = ImplicitDatatypeConversionMatrix.getInstance();
            this.clauseContainer = null;
            this.clausesTable = null;
        }


        ClauseController.prototype.onOpenExplorationEditor = function (exploration) {
            this.clauseContainer = $(this.exUtils.conditions);
            this.clausesTable = $(this.exUtils.conditionsTable);
//            this.initExplorationSourceListener();
            this.initAddConditionWelcomeButton();
//            this.initAddSourceWelcomeButton();
            this.initCurrentEditedClauseChangesListener();
            this.addConditions(exploration);
//            this.addGetStartedNotificationIfNewExploration() ;
            this.addClauseContainerFocusListener(EditedRegion.EditedRegion.Filters);
            this.addExitFromEditModeWhenFocusOutListener(this.clauseContainer, this.explorationKoModel.isFiltersInEditMode, EditedRegion.EditedRegion.Filters);

        };

        /**
         *
         * @param editedRegion
         */
        ClauseController.prototype.addClauseContainerFocusListener = function (editedRegion) {
            var self = this;

            this.clauseContainer.focusin(
                function (event) {
                    self.explorationKoModel.currentEditedRegion(editedRegion);
                    var target = $(event.target);
                    if (event.currentTarget === event.target) {
                        self.selectLastClauseIfNoClausesInEditMode();
                    } else if (target.is('[class^="conditionTextMode"]')) {
                        var clauseId = target.attr(self.exUtils.dataClauseId);
                        self.selectClauseById(clauseId);

                    }
                }
            );

        };


        ClauseController.prototype.initCurrentEditedClauseChangesListener = function () {
            var self = this;

            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Condition && !(clause instanceof Correlation)) {
                    self.updateTextModeControl(clause);
                    self.showEditMode(self.getConditionContainer(clause), false);
                }
            }, null, "beforeChange");


            self.explorationKoModel.currentEditedClause.subscribe(function (clause) {
                if (clause && clause instanceof Condition && !(clause instanceof Correlation)) {
                    self.showEditMode(self.getConditionContainer(clause), true);
                }

            });


        };


        ClauseController.prototype.selectClauseById = function (clauseId) {
            var clause = Utils.findById(clauseId, this.explorationKoModel.exploration().conditions());
            if (clause) {
                this.explorationKoModel.currentEditedClause(clause);
            }
        };


        ClauseController.prototype.selectLastClauseIfNoClausesInEditMode = function () {

            var length = this.explorationKoModel.exploration().conditions().length;
            if (!this.explorationKoModel.isFiltersInEditMode() && length) {
                var lastClause = this.explorationKoModel.exploration().conditions()[length - 1];
                this.explorationKoModel.currentEditedClause(lastClause);
            }

        };


        ClauseController.prototype.initAddConditionWelcomeButton = function () {
            var control = $(this.exUtils.conditionsWelcomeBtns).find(this.exUtils.addConditionWelcomeBtn);
            var self = this;
            control.click(function () {
                self.addCondition();
            });

        };


        ClauseController.prototype.initAddSourceWelcomeButton = function () {
            var control = $(this.exUtils.selectASourceWelcomeBtn);
            var self = this;
            control.click(function () {
                $(self.exUtils.sourceCombobox).select2('open');

            });
        };


        ClauseController.prototype.addGetStartedNotificationIfNewExploration = function () {
            if (!this.explorationKoModel.exploration().sources().length) {
                NotificationUtils.youNeedToAddASourceToBeginExploring();
            }
        };


        /**
         *
         * @param {Exploration} exploration
         */
        ClauseController.prototype.addConditions = function (exploration) {
            var conditions = exploration.conditions();
            for (var i = 0; i < conditions.length; i++) {
                this.addNewCondition(conditions[i]);
            }
            this.exitEditMode();
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.addNewCondition = function (condition) {
            this.explorationKoModel.exploration().conditions.push(condition);
            this.createConditionContainer(condition);

            this.createOperand1Control(condition);
            this.createOperationControl(condition);
            this.createOperand2Control(condition);
            this.createChangeOperandTypeButtonCointainer(condition);
            this.createRemoveButton(condition);
            this.createTextModeControl(condition);
            this.updateCurrentEditedClause(condition);

        };


        /**
         * exit edit Mode when focusOut
         * @param clauseContainer
         */
        ClauseController.prototype.addExitFromEditModeWhenFocusOutListener = function (clauseContainer, isClauseInEditMode, editedRegion) {
            var self = this;
            clauseContainer.focusout(
                function (evt) {
                    evt.preventDefault();


                    setTimeout(
                        $.proxy(function () {            //switch off to edit mode

                            var activeElement = document.activeElement;
//                            console.log("activeElement: ", activeElement);
                            if (activeElement !== null
                                && self.isNotSelect2ExceptSourcesSelect2(activeElement)
                                && activeElement !== evt.currentTarget   //not container itself
                                && clauseContainer.has(activeElement).length === 0  //not child of container
                                && isClauseInEditMode()
                                ) {

//                                console.log("focusOut: ", conditionContainer);

                                self.explorationKoModel.currentEditedClause(null);

                                if (self.explorationKoModel.currentEditedRegion() == editedRegion) {
                                    self.explorationKoModel.currentEditedRegion(null);
                                }
                            }


                        }, self), 20
                    )
                    ;


                }
            )
            ;
        };


        ClauseController.prototype.isNotSelect2ExceptSourcesSelect2 = function (activeElement) {
            return !(
                $(activeElement).is('[class^="select2"]') &&
                $(this.exUtils.sources).has(activeElement).length === 0
                );
        };

        function keepInEditMode(condition) {
            this.getConditionContainer(condition).focus();
        }

        ClauseController.prototype.exitEditMode = function () {
            this.explorationKoModel.currentEditedClause(null);
            this.clauseContainer.focusout();
        };


        ClauseController.prototype.showEditMode = function (conditionContainer, isEditMode) {
            var editModeElements = conditionContainer.find(this.exUtils.colClass);
            var textModeElements = conditionContainer.find(this.exUtils.conditionTextModeClassSelector);

            if (isEditMode) {
                conditionContainer.focus();
            } else {
                var changeOperandMenu = editModeElements.find(this.exUtils.changeOperandMenu);
                Utils.displayElement(false, changeOperandMenu);
            }

            Utils.displayClauseElement(isEditMode, editModeElements);
            Utils.displayElement(!isEditMode, textModeElements);
//            this.updateCurrentEditedClause(condition);
        };

        /**
         * update Filters Box edit state
         */
        ClauseController.prototype.updateCurrentEditedClause = function (clause) {
            this.explorationKoModel.currentEditedClause(clause);
        };


        ClauseController.prototype.createConditionContainer = function (condition) {
            var conditionContainer = $(this.exUtils.row).attr('id', condition.id).attr('tabindex', -1);
            this.clausesTable.append(conditionContainer);
            return conditionContainer;
        };

        /**
         *
         * @param {Condition} condition
         * @returns {*|jQuery|HTMLElement}
         */
        ClauseController.prototype.getConditionContainer = function (condition) {
            return $("#" + condition.id);
        };

        ClauseController.prototype.getConditionEditContainer = function (condition) {
            var editContainer = $("#" + condition.id + '>' + this.exUtils.correlationEditModeContainerSelector);
            if (editContainer.length) {
                return editContainer;
            }

            return $("#" + condition.id);
        };

        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createTextModeControl = function (condition) {
            var conditionContainer = this.getConditionContainer(condition);
            var textModeElement = $(this.exUtils.conditionTextMode).attr('tabindex', -1).attr(this.exUtils.dataClauseId, condition.id);

            this.updateTextModeControl(condition);
            conditionContainer.append(textModeElement);
        };

        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.updateTextModeControl = function (condition) {
            var textMode = this.getConditionContainer(condition).find(this.exUtils.conditionTextModeClassSelector);
            textMode.text(this.queryPrinter.conditionToText(condition));
        };


        ClauseController.prototype.addCondition = function () {

            var defaultSource = this.exUtils.getDefaultSource();
            var defaultField = this.exUtils.getDefaultField(defaultSource);
            var newCondition = new Condition(
                new Operand(this.operandTypes.FIELD, null, defaultField),
                this.operations.getDefaultOperation(),
                new Operand(
                    this.operandTypes.VALUE,
                    this.operations.getDefaultOperationValue(defaultField.type),
                    null
                )
            );
            this.addNewCondition(newCondition);
        };

        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createOperand2FieldsControl = function (condition) {
            var select = this.fieldsController.createOperand2FieldsControl(this.getOperand2ControlId(condition.id), condition.id, condition);

            select.select2("val", condition.operand2.field.id);
            var self = this;
            select.on("change", function (event) {
                self.operand2ChangeListener(event, condition);
            });

            return select;
        };


        /**
         *
         * @param event
         * @param {Condition} condition
         */
        ClauseController.prototype.operand2ChangeListener = function (event, condition) {
            /**
             *
             * @type {Field}
             */
            var newField = event.added;
            if (newField) {
                condition.operand2.field = newField;
                this.resetConditionOperationValueIfNotValid(condition);

                this.explorationKoModel.exploration().conditions.valueHasMutated();
            }
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createOperand1Control = function (condition) {
            var select = this.fieldsController.createOperand1FieldsControl(this.getOperand1ControlId(condition.id), condition.id);

            select.select2("val", condition.operand1.field.id);
            var self = this;
            select.on("change", function (event) {
                self.operand1ChangeListener(event, condition);
            });

            return select;
        };


        /**
         *
         * @param event
         * @param {Condition} condition
         */
        ClauseController.prototype.operand1ChangeListener = function (event, condition) {
            /**
             *
             * @type {Field|AggregatedField}
             */
            var newField = event.added;
            if (newField) {
                var oldOperand1FieldType = condition.operand1.field.type;
                condition.operand1.field = newField;

                this.updateOperand2ControlByOperand1Changes(condition, oldOperand1FieldType);
                this.resetOperationControlToDefault(condition);
                this.explorationKoModel.exploration().conditions.valueHasMutated();
            }
        };

        /**]
         *
         * @param {Condition} condition
         * @param {FieldType} oldOperand1FieldType
         */
        ClauseController.prototype.updateOperand2ControlByOperand1Changes = function (condition, oldOperand1FieldType) {
            if (condition.operand2.type == this.operandTypes.VALUE) {
                this.destroyOperand2ValueControl(condition.id, oldOperand1FieldType);
            }
            if (condition.operand2.type == this.operandTypes.FIELD) {
                this.destroyOperand2FieldControl(condition.id);
            }
            condition.operand2.value = null;
            condition.operand2.field = null;
            condition.operand2.type = this.operandTypes.VALUE;
            this.createOperand2Control(condition);
            this.resetConditionOperationValueIfNotValid(condition);

        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createOperationControl = function (condition) {
            var select = $(this.exUtils.operationControlMarkup).attr('id', this.getConditionOperationControlId(condition.id));

            this.getConditionContainer(condition).append($(this.exUtils.col).append(select));
            var self = this;
            select = select.select2({
                    data: function () {
                        return  {  results: self.operations.getOperations(self.datatypeConversionMatrix.getConditionImplicitConversionType(condition))
                        };
                    }
                }
            );
            select.select2("val", condition.operation);

            select.on("change", function (event) {
                condition.operation = event.val;
                self.explorationKoModel.exploration().conditions.valueHasMutated();
            });

            return select;
        };


        /**
         * reset Condition Operation Value If old Operation Not Valid between new condition operands
         * @see {DatatypeConversionMatrix.getConditionImplicitConversionType}
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.resetConditionOperationValueIfNotValid = function (condition) {
            var self = this;
            var select = $("#" + this.getConditionOperationControlId(condition.id));

            var oldOperation = condition.operation;
            var availableOperationsForConditionOperands = self.operations.getOperations(self.datatypeConversionMatrix.getConditionImplicitConversionType(condition));
            var isOperationValid = Utils.containsById({id: oldOperation}, availableOperationsForConditionOperands);

            if (!isOperationValid) {
                condition.operation = this.operations.getDefaultOperation();
            }

            select.select2("val", condition.operation);
        };

        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.resetOperationControlToDefault = function (condition) {
            var select = $("#" + this.getConditionOperationControlId(condition.id));
            condition.operation = this.operations.getDefaultOperation();
            select.select2("val", condition.operation);
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createOperand2ValueControl = function (condition) {

            var uiFieldType = null;
            if (condition.operand1.field) {
                uiFieldType = condition.operand1.field.type.uiFieldType;
            }

            var operand2ValueControl = null;

            switch (uiFieldType) {
                case this.uiFieldTypes.INTEGER:
                    operand2ValueControl = this.createIntegerValueControl(condition);
                    break;

                case this.uiFieldTypes.DOUBLE:
                    operand2ValueControl = this.createDoubleValueControl(condition);
                    break;

                case this.uiFieldTypes.STRING:
                    operand2ValueControl = this.createTextValueControl(condition);
                    break;

                case this.uiFieldTypes.DATE:
                    operand2ValueControl = this.createDateValueControl(condition);
                    break;

                case this.uiFieldTypes.TIME:
                    operand2ValueControl = this.createTimeValueControl(condition);
                    break;

                case this.uiFieldTypes.BOOLEAN:
                    operand2ValueControl = this.createBooleanValueControl(condition);
                    break;


                default:
                    operand2ValueControl = this.createTextValueControl(condition);
            }

            return operand2ValueControl;
        };


        /**
         *
         * @param conditionId
         * @param {FieldType} operandFieldType
         */
        ClauseController.prototype.destroyOperand2ValueControl = function (conditionId, operandFieldType) {

            var valueControl = $("#" + this.getOperand2ControlId(conditionId));


            switch (operandFieldType.uiFieldType) {
                case this.uiFieldTypes.INTEGER:
                    valueControl.spinner("destroy");
                    break;

                case this.uiFieldTypes.DOUBLE:
                    valueControl.spinner("destroy");
                    break;

                case this.uiFieldTypes.BOOLEAN:
                    valueControl.select2('destroy');
                    break;

                case this.uiFieldTypes.DATE:
                    valueControl.dtpickerDestroy();
                    break;

                case this.uiFieldTypes.TIME:
                    valueControl.dtpickerDestroy();
                    break;

                default:   //no
            }

        };

        /**
         *
         * @param conditionId
         */
        ClauseController.prototype.destroyOperand2FieldControl = function (conditionId) {
            var valueControl = $("#" + this.getOperand2ControlId(conditionId));
            valueControl.select2('destroy');
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createBooleanValueControl = function (condition) {

            var controlId = this.getOperand2ControlId(condition.id);

            var control = $(this.exUtils.booleanOperationValueControl).attr('id', controlId);

            this.exUtils.replaceOldControlMarkup(controlId, control, condition.id);

            control.select2({
                    data: {
                        results: [
                            { id: "true", text: "true" },
                            { id: "false", text: "false" }
                        ]
                    }
                }
            );

            //select current
            if (!condition.operand2.value) {
                condition.operand2.value = this.operations.getDefaultOperationValue(condition.operand1.field.type);
            }
            control.select2("val", condition.operand2.value ? 'true' : 'false');

            var self = this;
            control.on("change", function (event) {
                var newValue = (event.val === 'true');
                if (condition.operand2.value != newValue) {
                    condition.operand2.value = newValue;
                    self.explorationKoModel.exploration().conditions.valueHasMutated();
                }

            });

            return control;
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createTextValueControl = function (condition) {
            var oldControlId = this.getOperand2ControlId(condition.id);
            var control = $(this.exUtils.stringControlMarkup).attr({ type: 'text', id: oldControlId});

            this.exUtils.replaceOldControlMarkup(oldControlId, control, condition.id);
            if (!condition.operand2.value) {
                condition.operand2.value = this.operations.getDefaultOperationValue(condition.operand1.field.type);
            }
            control.val(condition.operand2.value);
            var self = this;
            control.bind("change paste keyup", function () {
                if (self.validateField(control)) {
                    var newValue = $(this).val();
                    if (condition.operand2.value != newValue) {
                        condition.operand2.value = newValue;
                        self.explorationKoModel.exploration().conditions.valueHasMutated();
                    }
                }
            });

            return control;
        };


        ClauseController.prototype.createTimeValueControl = function (condition) {
            this.createDateTimeOperationValueControl(condition, false);
        };

        ClauseController.prototype.createDateValueControl = function (condition) {
            this.createDateTimeOperationValueControl(condition, true);
        };

        /**
         *
         * @param {Condition} condition
         * @param isDateOnly
         * @returns {jquery|HTMLElement}
         */
        ClauseController.prototype.createDateTimeOperationValueControl = function (condition, isDateOnly) {
            var controlId = this.getOperand2ControlId(condition.id);
            var control = isDateOnly ? $(this.exUtils.dateControlMarkup) : $(this.exUtils.timeStampControlMarkup);
            control.attr({id: controlId});

            this.exUtils.replaceOldControlMarkup(controlId, control, condition.id);

            var defautValue = condition.operand2.value;
            if (!condition.operand2.value) {
                defautValue = this.operations.getDefaultOperationValue(condition.operand1.field.type);
            }
            var self = this;
            control.bind("change paste keyup", function () {
                if (self.validateField(control)) {
                    var newValue = $(this).val();
                    if (condition.operand2.value != newValue) {
                        condition.operand2.value = newValue;
                        self.explorationKoModel.exploration().conditions.valueHasMutated();
                    }
                }
            });

            control.appendDtpicker({
//                    "locale": "en",
                closeOnSelected: true,
                "dateOnly": isDateOnly,
                "firstDayOfWeek": 1,
                "current": defautValue
            });

            return control;
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createIntegerValueControl = function (condition) {

            var oldControlId = this.getOperand2ControlId(condition.id);
            var control = $(this.exUtils.spinnerIntegerControlMarkup).attr({id: oldControlId});

            this.exUtils.replaceOldControlMarkup(oldControlId, control, condition.id);

            control.spinner();
            if (!condition.operand2.value) {
                condition.operand2.value = this.operations.getDefaultOperationValue(condition.operand1.field.type);
            }
            control.spinner("value", condition.operand2.value);

            var self = this;
            control.on("spinchange change paste keyup", function () {
                if (self.validateField(control)) {
                    var newValue = control.spinner("value");
                    if (condition.operand2.value != newValue) {
                        condition.operand2.value = newValue;
                        self.explorationKoModel.exploration().conditions.valueHasMutated();
                    }
                }
            });

            return control;
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createDoubleValueControl = function (condition) {
            var controlId = this.getOperand2ControlId(condition.id);
            var control = $(this.exUtils.spinnerDoubleControlMarkup).attr({id: controlId});

            this.exUtils.replaceOldControlMarkup(controlId, control, condition.id);

            control.spinner({
                step: 0.01,
                numberFormat: "n"
            });
            if (!condition.operand2.value) {
                condition.operand2.value = this.operations.getDefaultOperationValue(condition.operand1.field.type);
            }
            control.spinner("value", condition.operand2.value);

            var self = this;
            control.on("spinchange change paste keyup", function () {
                if (self.validateField(control)) {
                    var newValue = control.spinner("value");
                    if (condition.operand2.value != newValue) {
                        condition.operand2.value = newValue;
                        self.explorationKoModel.exploration().conditions.valueHasMutated();
                    }
                }
            });

            return control;
        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createChangeOperandTypeButtonCointainer = function (condition) {

            var changeOperandTypeContainer = $(this.exUtils.changeOperandTypeContainerPattern);
            this.createChangeOperandMenu(condition, changeOperandTypeContainer);
            this.getConditionContainer(condition).append($(this.exUtils.col).append(changeOperandTypeContainer));
            Utils.translateJqueryElement(changeOperandTypeContainer);

        };


        /**
         *
         * @param {Condition} condition
         * @param changeOperandTypeContainer
         */
        ClauseController.prototype.createChangeOperandMenu = function (condition, changeOperandTypeContainer) {

            var changeOperandTypeButton = changeOperandTypeContainer.find(this.exUtils.changeOperandTypeButton);
            var changeOperandMenu = changeOperandTypeContainer.find(this.exUtils.changeOperandMenu);
            var changeOperandMenuDoneButton = changeOperandMenu.find(this.exUtils.changeOperandMenuDoneButton);

            var valueList = changeOperandMenu.find(this.exUtils.valueList);
            var sourceList = changeOperandMenu.find(this.exUtils.sourceList);
            var sourceItem = sourceList.find(this.exUtils.sourceItem).clone();

            var self = this;

            changeOperandTypeButton.click(function () {
                if (Utils.isDisplayElement(changeOperandMenu)) {
                    self.hideChangeOperandMenu(condition, changeOperandMenu);
                } else {
                    self.showChangeOperandMenu(condition, changeOperandMenu, valueList, sourceList, sourceItem);
                }
            });


            Utils.displayElement(false, changeOperandMenu);

            changeOperandMenuDoneButton.click(function () {
                self.hideChangeOperandMenu(condition, changeOperandMenu);
            });

        };


        ClauseController.prototype.hideChangeOperandMenu = function (condition, changeOperandMenu) {
            Utils.displayElement(false, changeOperandMenu);
            keepInEditMode.call(this, condition);
        };

        /**
         *
         * @param {Condition} condition
         * @param changeOperandMenu
         * @param valueList
         * @param sourceList
         * @param sourceItem
         */
        ClauseController.prototype.showChangeOperandMenu = function (condition, changeOperandMenu, valueList, sourceList, sourceItem) {

            this.refreshOperandValueList(condition, valueList, changeOperandMenu);
            this.refreshOperandSourceList(condition, sourceList, sourceItem, changeOperandMenu);
            Utils.translateJqueryElement(changeOperandMenu);
            Utils.displayElement(true, changeOperandMenu);

        };

        /**
         *
         * @param {Condition} condition
         * @param valueList
         * @param changeOperandMenu
         */
        ClauseController.prototype.refreshOperandValueList = function (condition, valueList, changeOperandMenu) {
            var item = valueList.find("li a");
            item.html(condition.operand1.field.type.displayName);
            var self = this;
            item.unbind().click(function () {
                self.changeOperand2ToValue(condition, changeOperandMenu);
            });
        };

        /**
         *
         * @param {Condition} condition
         * @param changeOperandMenu
         */
        ClauseController.prototype.changeOperand2ToValue = function (condition, changeOperandMenu) {
            var oldOperand2Type = condition.operand2.type;
            condition.operand2.type = this.operandTypes.VALUE;

            Utils.displayElement(false, changeOperandMenu);
            this.updateOperand2ControlByChangeOperandTypeButtonChanges(condition, oldOperand2Type);

        };


        /**
         *
         * @param {Condition} condition
         * @param oldOperand2Type
         */
        ClauseController.prototype.updateOperand2ControlByChangeOperandTypeButtonChanges = function (condition, oldOperand2Type) {
            if (oldOperand2Type == this.operandTypes.VALUE) {
                this.destroyOperand2ValueControl(condition.id, condition.operand1.field.type);
            }
            if (oldOperand2Type == this.operandTypes.FIELD) {
                this.destroyOperand2FieldControl(condition.id);
            }
            this.createOperand2Control(condition);
            this.resetConditionOperationValueIfNotValid(condition);

            this.explorationKoModel.exploration().conditions.valueHasMutated();

            keepInEditMode.call(this, condition);

        };


        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createOperand2Control = function (condition) {
            if (condition.operand2.type == this.operandTypes.VALUE) {
                this.createOperand2ValueControl(condition);
            }
            if (condition.operand2.type == this.operandTypes.FIELD) {
                this.createOperand2FieldsControl(condition);
            }

        };


        /**
         *
         * @param {Condition} condition
         * @param sourceList
         * @param sourceItem
         * @param changeOperandMenu
         */
        ClauseController.prototype.refreshOperandSourceList = function (condition, sourceList, sourceItem, changeOperandMenu) {
            sourceList.empty();


            var self = this;
            var correlatedSources = this.queryAnalyser.getCorrelatedSources(condition.operand1.field.source);
            var sourcesWithCompatibleFields = correlatedSources.filter(function (source) {
                return self.fieldsController.isCompatibleFieldsInSource(condition.operand1.field, source);
            });
            sourcesWithCompatibleFields.forEach(
                /**
                 *
                 * @param {EventSource} source
                 */
                    function (source) {

                    var newSourceItem = sourceItem.clone();
                    newSourceItem.addClass(source.color);
                    newSourceItem.addClass(source.sourceType.value);
                    var sourceLink = newSourceItem.find("a");
                    sourceLink.html(source.displayName);
                    sourceLink.click(function () {
                        self.changeOperand2ToField(condition, source, changeOperandMenu);
                    });

                    sourceList.append(newSourceItem);
                }
            );
        };


        /**
         *
         * @param {Condition} condition
         * @param source
         * @param changeOperandMenu
         */
        ClauseController.prototype.changeOperand2ToField = function (condition, source, changeOperandMenu) {
            var oldOperand2Type = condition.operand2.type;
            condition.operand2.type = this.operandTypes.FIELD;
            condition.operand2.field = this.fieldsController.getFirstCompatibleFieldFromSource(condition.operand1.field, source);

            Utils.displayElement(false, changeOperandMenu);
            this.updateOperand2ControlByChangeOperandTypeButtonChanges(condition, oldOperand2Type);
        };

        /**
         *
         * @param {Condition} condition
         */
        ClauseController.prototype.createRemoveButton = function (condition) {

            var addRemoveButtons = $(this.exUtils.addRemoveButtonsPattern);

            var removeConditonClone = addRemoveButtons.find(this.exUtils.sxRemoveButton);
            var self = this;
            removeConditonClone.click(function () {
                self.updateCurrentEditedClause(null);
                self.exUtils.removeCondition(condition.id);
            });

            this.getConditionEditContainer(condition).append($(this.exUtils.col).append(addRemoveButtons));

            return  removeConditonClone;
        };


        ClauseController.prototype.getOperand1ControlId = function (conditionId) {
            return this.exUtils.conditionOperand1Property + "_" + conditionId;
        };

        ClauseController.prototype.getOperand2ControlId = function (conditionId) {
            return this.exUtils.conditionOperand2Property + "_" + conditionId;
        };

        ClauseController.prototype.getConditionOperationControlId = function (conditionId) {
            return this.exUtils.conditionOperationProperty + "_" + conditionId;
        };

        /**
         *
         * @param {jquery|HTMLElement} field
         * @returns {boolean}
         */
        ClauseController.prototype.validateField = function (field) {
            return !Utils.isValidate(field);
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ClauseController}
         */
        ClauseController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ClauseController();
            }
            return this.instance;
        };


        return ClauseController;

    }
)
;
