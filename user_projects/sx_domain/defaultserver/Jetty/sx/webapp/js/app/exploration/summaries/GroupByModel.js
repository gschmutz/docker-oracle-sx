/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('GroupByModel', [
        'jquery',
        'knockout',
        'Utils',
        'ExplorationFieldsController',
        'ExplorationKoModel',
        'SelectedField',
        'Notifications',
        'QueryDependenciesController',
        'ExplorationUtils'
    ],

    /**
     * @exports exploration/summaries
     * @ignore
     */
        function ($, ko, Utils, ExplorationFieldsController, ExplorationKoModel, SelectedField, Notifications, QueryDependenciesController, ExplorationUtils) {

        /**
         * @class
         * @classdesc knockout based model for @see GroupByController
         *
         * @constructor
         */
        function GroupByModel() {


            var self = this;

            this.explorationFieldsController = ExplorationFieldsController.getInstance();
            this.explorationKoModel = ExplorationKoModel.getInstance();
            this.exUtils = ExplorationUtils.getInstance();

            /**
             * consists all eligible fields for Groupby statement in query
             * @type {Field[]}
             */
            self.observableFields = self.explorationFieldsController.observableFields;
            self.observableFields.subscribe(function () {
                updateGroupByFields.call(self);
            });

            /**
             * consists all eligible fields for Groupby statement in query
             * all fields in them that marked as @see SelectedField.selected=true - go to Groupby statement
             * @type {SelectedField[]}
             */
            self.fieldsForGroupBy = null;

            /**
             *
             * fieldsForGroupBy updated by values from fieldsForGroupByInEditMode when user close groupByI Editor (popup)
             *
             * consists all eligible fields for Groupby statement in query
             * all fields in them that marked as @see SelectedField.selected=true - go to Groupby statement
             * @type {SelectedField[]}
             */
            self.fieldsForGroupByInEditMode = ko.observableArray([]);
            /**
             * activeField for sort by shuttle
             * @see {@link moveFieldUp } {@link moveFieldDown }
             *
             * @type {SelectedField[]}
             */
            self.activeField = ko.observable(null);

            //switch off accordion key interaction: ctrl+up
            $.ui.accordion.prototype._panelKeyDown = function () {
            };


            GroupByModel.prototype.onOpenExplorationEditor = function () {
                self.fieldsForGroupBy = self.explorationKoModel.exploration().groupBy;
                updateGroupByFields.call(this);
            };

            GroupByModel.prototype.onCloseExplorationEditor = function () {
//                self.fieldsForGroupBy = null;
//                self.explorationKoModel.groupBySelectedFieldsCount(0);
            };

            function updateGroupByFields() {
                self.explorationKoModel.exploration().groupBy(
                    matchOldAndNewFields.call(this,
                        self.explorationKoModel.exploration().groupBy(),
                        self.observableFields()
                    )
                );
                self.fieldsForGroupByInEditMode(cloneGroupByFields(self.explorationKoModel.exploration().groupBy()));


                self.activeField(null);
                self.refreshReadModeText(true);

            }


            /**
             * @param {SelectedField[]} groupByFields
             * @returns {SelectedField[]}
             */
            function cloneGroupByFields(groupByFields) {

                var clonedGroupByFields = [];
                for (var i = 0; i < groupByFields.length; i++) {
                    clonedGroupByFields.push(groupByFields[i].clone());
                }
                return  clonedGroupByFields;
            }


            /**
             * join old and new available fields to keep previous groupby order and selection
             * for example we add/remove source
             *
             * newAv    old                   explorationFields
             * a        a                     a
             * k        b.visible = false     b.selected = false
             * b        l                     k
             * c                              c
             *
             * @param {SelectedField[]} oldGroupByFields
             * @param {Field[]} explorationFields  - we can have new fields, for example if we add/remove source
             * @returns {SelectedField[]}
             */
            function matchOldAndNewFields(oldGroupByFields, explorationFields) {
                var fieldsForGroupBy = [];

                for (var i = 0; i < oldGroupByFields.length; i++) {
                    var explorationField = Utils.findById(oldGroupByFields[i].field.id, explorationFields);
                    if (explorationField) {
                        oldGroupByFields[i].field = explorationField; // because source(and its fields) reloaded onOpenExploration we should update ref
                        fieldsForGroupBy.push(oldGroupByFields[i]);
                    }
                }
                for (var j = 0; j < explorationFields.length; j++) {
                    if (!containsByEquals(oldGroupByFields, explorationFields[j])) {
                        fieldsForGroupBy.push(new SelectedField(explorationFields[j], false));
                    }
                }
                return fieldsForGroupBy;
            }

            /**
             * @param {SelectedField[] } selectedField
             * @param {Field } field
             * @returns {boolean}
             */
            function containsByEquals(selectedFields, field) {
                for (var i = 0; i < selectedFields.length; i++) {
                    if (selectedFields[i].field.equals(field)) {
                        return true;
                    }
                }
                return false;
            }


            self.isGroupByInReadMode = self.explorationKoModel.isGroupByInReadMode;
            self.isSummariesInEditMode = self.explorationKoModel.isSummariesInEditMode;
            self.currentEditedRegion = self.explorationKoModel.currentEditedRegion;
            self.refreshReadModeText = ko.observable(true).extend({ notify: 'always' });


            /**
             * isGroupByInReadMode change listener
             * fieldsForGroupBy updated by values from fieldsForGroupByInEditMode when user close GroupBy Editor (popup)
             */
            self.isGroupByInReadMode.subscribe(function (isGroupByInReadMode) {
                if (isGroupByInReadMode) {  //exit group ByEditMode

                    QueryDependenciesController.getInstance().showConfirmDialogIfChangedGroupByAffectsConditions(
                        self.fieldsForGroupBy(),
                        self.fieldsForGroupByInEditMode(),
                        function () {
                            self.fieldsForGroupBy(cloneGroupByFields(self.fieldsForGroupByInEditMode()));
                        }
                    );

                } else {  //open group by editor
                    self.fieldsForGroupByInEditMode(cloneGroupByFields(self.fieldsForGroupBy()));
                }
            });


            /**
             * calculate readModeText if fields were changed
             */
            self.readModeText = ko.computed(function () {
                self.refreshReadModeText();
                var selectedGroupByFieldNames = [];

                var groupBy = self.fieldsForGroupBy ? self.fieldsForGroupBy() : [];
                for (var i = 0; i < groupBy.length; i++) {
                    if (groupBy[i].selected) {
                        selectedGroupByFieldNames.push(groupBy[i].field.name);
                    }
                }
                self.explorationKoModel.groupBySelectedFieldsCount(selectedGroupByFieldNames.length);

                var text = self.exUtils.groupByHeader + " " +
                    self.exUtils.spanMarkup +
                    selectedGroupByFieldNames.join(self.exUtils.spanEndMarkup + self.exUtils.andLabel + self.exUtils.spanMarkup) +
                    self.exUtils.spanEndMarkup;
                return  text;

            }, this);

            /**
             *
             * @param {SelectedField} field
             * @returns {*}
             */
            self.isFieldSelected = function (field) {
                return field.selected;
            };


            self.openGroupByEditor = function () {
                $(self.exUtils.summaries).focus();
                self.isGroupByInReadMode(false);
            };


            /**
             *
             * @param {SelectedField} selectedField
             * @returns {boolean}
             */
            self.clickOnGroupByFieldDeleteIcon = function (selectedField) {

                var editedGroupByFields = cloneGroupByFields(self.fieldsForGroupBy());
                for (var i = 0; i < editedGroupByFields.length; i++) {
                    if (editedGroupByFields[i].field.id == selectedField.field.id) {
                        editedGroupByFields[i].selected = false; //delete
                    }
                }
                self.fieldsForGroupByInEditMode(editedGroupByFields);
                QueryDependenciesController.getInstance().showConfirmDialogIfChangedGroupByAffectsConditions(
                    self.fieldsForGroupBy(),
                    self.fieldsForGroupByInEditMode(),
                    function () {
                        self.fieldsForGroupBy(cloneGroupByFields(self.fieldsForGroupByInEditMode()));
                    }
                );

                $(self.exUtils.summaries).focus();

//                return isAffectedConditionsNotFounded;
                return true;

            };

            /**
             *
             * @param {SelectedField} field
             * @param {HTMLElement} groupByFieldCheckBox
             * @returns {boolean}
             */
            self.clickGroupByCheckBox = function (field, groupByFieldCheckBox) {
                field.selected = !field.selected;
                return true;
            };

            /**
             *
             * @param {SelectedField} field
             */
            self.mouseoverField = function (field) {
                self.activeField(field);
            };

            /**
             * move Current Field On Top
             */
            self.moveFieldTop = function () {
                if (self.activeField()) {
                    var i = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                    if (i > 0) {
                        var removedField = self.fieldsForGroupByInEditMode.splice(i, 1)[0];
                        self.fieldsForGroupByInEditMode.unshift(removedField);
                        scrollToFieldIfFieldOutsideScrollBarView();
                    }
                }

            };

            /**
             * move Current Field up
             */
            self.moveFieldUp = function () {
                if (self.activeField()) {
                    var i = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                    if (i > 0) {
                        var rawGroupBy = self.fieldsForGroupByInEditMode();
                        self.fieldsForGroupByInEditMode.splice(i - 1, 2, rawGroupBy[i ], rawGroupBy[i - 1]);
                        scrollToFieldIfFieldOutsideScrollBarView();
                    }

                }
            };

            /**
             * move Current Field Down
             */
            self.moveFieldDown = function () {
                if (self.activeField()) {
                    var i = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                    if (i < self.fieldsForGroupByInEditMode().length - 1) {
                        var rawGroupBy = self.fieldsForGroupByInEditMode();
                        self.fieldsForGroupByInEditMode.splice(i, 2, rawGroupBy[i + 1], rawGroupBy[i]);
                        scrollToFieldIfFieldOutsideScrollBarView();
                    }
                }
            };

            /**
             * move Current Field Bottom
             */
            self.moveFieldBottom = function () {
                if (self.activeField()) {
                    var i = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                    if (i < self.fieldsForGroupByInEditMode().length - 1) {
                        var removedField = self.fieldsForGroupByInEditMode.splice(i, 1)[0];
                        self.fieldsForGroupByInEditMode.push(removedField);
                        scrollToFieldIfFieldOutsideScrollBarView();
                    }
                }
            };


            /**
             * move scrollbar if field outside scroll bar view
             */
            function scrollToFieldIfFieldOutsideScrollBarView() {
                var activeFieldIndex = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                var item0 = $(String.format(self.exUtils.findGroupByCheckBoxByNumberPattern, 0));
                var item = $(String.format(self.exUtils.findGroupByCheckBoxByNumberPattern, activeFieldIndex));
                $(self.exUtils.groupByFieldsCheckBoxes).animate({ scrollTop: item.position().top - item0.position().top }, 100);
            }


            self.goToEditModeOnKeyPressed = function (model, event) {
                var KEY_CODE = $.ui.keyCode;
                if ((event.keyCode == KEY_CODE.TAB || event.keyCode == KEY_CODE.ENTER || event.keyCode == KEY_CODE.SPACE) && $(event.currentTarget).is(":focus")) {
                    self.isGroupByInReadMode(false);
                }
            };

            /**
             *  focus NextElement after element
             * @param {jqueryElement}  element
             */
            function focusNextElement(element) {
                var focusables = $(":focusable");
                var current = focusables.index(element);
                var next = focusables.eq(current + 1).length ? focusables.eq(current + 1) : focusables.eq(0);
                next.focus();
            }

            function selectNextField(currentFieldIndex) {
                var fieldsLength = self.fieldsForGroupByInEditMode().length;
                var selectedIndex = (currentFieldIndex + 1) % fieldsLength;
                selectedIndex = selectedIndex >= 0 ? selectedIndex : fieldsLength - 1;
                self.activeField(self.fieldsForGroupByInEditMode()[selectedIndex]);
                scrollToFieldIfFieldOutsideScrollBarView();
            }

            function selectPreviousField(currentFieldIndex) {
                var fieldsLength = self.fieldsForGroupByInEditMode().length;
                var selectedIndex = (currentFieldIndex - 1) % fieldsLength;
                selectedIndex = selectedIndex >= 0 ? selectedIndex : fieldsLength - 1;
                self.activeField(self.fieldsForGroupByInEditMode()[selectedIndex]);
                scrollToFieldIfFieldOutsideScrollBarView();
            }

            /**
             * accessibility  -  keyboard key listener
             *
             *  arrows up \down  - select active field for sort
             *  Ctrl/Alt/Shift + arrows up \down  +   - sort
             *  Esc / Enter - exit
             *  Space - check checkbox
             *
             * @param {GroupByModel} model
             * @param event
             */
            self.keyPressedOnField = function (model, event) {
                var KEY_CODE = $.ui.keyCode;

                if (self.fieldsForGroupByInEditMode().length) {

                    if (!self.activeField()) {
                        self.activeField(self.fieldsForGroupByInEditMode()[0]);
                    }
                    var activeFieldIndexInGroupByArray = self.fieldsForGroupByInEditMode().indexOf(self.activeField());
                    if (activeFieldIndexInGroupByArray == -1) {
                        activeFieldIndexInGroupByArray = 0;
                        self.activeField(self.fieldsForGroupByInEditMode()[activeFieldIndexInGroupByArray]);
                    }

                    switch (event.keyCode) {
                        case KEY_CODE.PAGE_UP:
                        case KEY_CODE.UP:
                            if (event.altKey || event.ctrlKey || event.shiftKey) {
                                self.moveFieldUp();
                            } else {
                                selectPreviousField(activeFieldIndexInGroupByArray);
                            }
                            event.preventDefault();
                            break;

                        case KEY_CODE.PAGE_DOWN:
                        case KEY_CODE.DOWN:
                            if (event.altKey || event.ctrlKey || event.shiftKey) {
                                self.moveFieldDown();
                            } else {
                                selectNextField(activeFieldIndexInGroupByArray);
                            }
                            event.preventDefault();
                            break;
//
                        case KEY_CODE.SPACE:
                            var groupByCheckBox = $(String.format(self.exUtils.findGroupByCheckBoxByNumberPattern, activeFieldIndexInGroupByArray));
                            var isAffectedConditionsNotFounded = self.clickGroupByCheckBox(self.activeField(), groupByCheckBox);
                            if (isAffectedConditionsNotFounded) {
                                groupByCheckBox.prop('checked', self.activeField().selected);
                                event.preventDefault();
                            }

                            break;

                        case KEY_CODE.ENTER:
                        case KEY_CODE.ESCAPE:
                            self.isGroupByInReadMode(true);
                            focusNextElement($(self.exUtils.groupByReadMode));
                            event.preventDefault();
                            break;
                    }
                }
            };


            self.groupByEditorDoneButtonClick = function () {
                self.isGroupByInReadMode(true);
                $(self.exUtils.summaries).focus();
                //todo impl validation that  New selected/unselected GroupBy fields  not affects Query filter

            };


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {GroupByModel}
         */
        GroupByModel.getInstance = function () {
            if (!this.instance) {
                this.instance = new GroupByModel();
            }
            return this.instance;
        };


        return GroupByModel;

    });
