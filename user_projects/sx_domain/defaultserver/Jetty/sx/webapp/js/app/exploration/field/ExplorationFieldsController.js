/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationFieldsController', [
        'jquery',
        'knockout',
        'Field',
        'AggregatedField',
        'ImplicitDatatypeConversionMatrix',
        'ExplorationUtils',
        'QueryAnalyser',
        'AggregateFunctions',
        'ColorCoding'
    ],

    /**
     * @exports exploration/field
     * @ignoer
     */
        function ($, ko, Field, AggregatedField, ImplicitDatatypeConversionMatrix, ExplorationUtils, QueryAnalyser, AggregateFunctions, ColorCoding) {

        /**
         * @class
         * @classdesc : factory for select2 controller, that gives access to fields  available in Exploration,
         * depends on how many  Sources and/or Summaries in current Exploration @see EventSource, @see Summaries
         * used in:  @see ConditionsController, @see CorrelationsController, @see SummariesController, @see GroupByController
         *
         * @constructor
         */
        function ExplorationFieldsController() {
            var exUtils = ExplorationUtils.getInstance();
            var colorCoding = ColorCoding.getInstance();
            var queryAnalyser = QueryAnalyser.getInstance();
            var datatypeConversionMatrix = ImplicitDatatypeConversionMatrix.getInstance();
            var aggregateFunctions = AggregateFunctions.getInstance();

            var self = this;

            /**
             * fields list from all  exploration sources
             * @type {Array.<Field>}
             */
            this.explorationFields = [];
            this.observableFields = ko.observableArray(this.explorationFields);

            /**
             * filter(condition) uses source fields and summary(aggregated) fields
             * @type {Array.<Field | AggregatedField>}
             */
            this.filterFields = [];

            this.onOpenExplorationEditor = function () {
                initExplorationSourceListener();
                initExplorationSummariesListener();
            };

            self.onCloseExplorationEditor = function () {
                self.explorationFields.splice(0, self.explorationFields.length);
                self.observableFields.valueHasMutated();
                self.filterFields.splice(0, self.filterFields.length);
            };


            /**
             * create select2 Field Control, without setup initial value, and without change listener
             * @param id
             * @param containerId
             * @param {Summary} summary
             * @returns {jqeryElement|select2}
             */
            this.createSummaryFieldsControl = function (id, containerId, summary) {
                var select = $(exUtils.fieldControlMarkup).attr('id', id);
                $("#" + containerId).append($(exUtils.col).append(select));

                select = select.select2({
                        data: function () {
                            return   {
                                results: self.explorationFields.filter(
                                    /**
                                     * summary fields filter - isAggregateFunctionCompatibleWithField
                                     * @param {Field} field
                                     * @returns {boolean}
                                     */
                                    function (field) {
                                        return aggregateFunctions.isAggregateFunctionCompatibleWithField(summary.aggregatedField.aggregateFunction, field);
                                    }
                                ),
                                /**
                                 *
                                 * @param {Field} field
                                 * @returns {string}
                                 */
                                text: function (field) {
                                    return field.label;
                                }
                            };
                        },
                        /**
                         *
                         * @param {Field} field
                         * @returns {string}
                         */
                        id: function (field) {
                            return field.id;
                        },
                        formatResult: formatComboboxOptions,
                        formatSelection: formatCurrentSelection,
                        escapeMarkup: function (m) {
                            return m;
                        }
                    }
                );
                return select;
            };



            /**
             *  getAggregateFunctions, if we doesnt have eligible fields for agregate function - agregate function disabled
             */
            this.getAggregateFunctions = function () {
                return aggregateFunctions.getAggregateFunctions(this.explorationFields);
            };


            /**
             * create select2 Field Control, without setup initial value, and without change listener
             * @param id
             * @param containerId
             * @returns {jqeryElement|select2}
             */
            this.createCorrelationOperandFieldsControl = function (id, containerId, correlation, oppositeOperand) {
                var select = $(exUtils.fieldControlMarkup).attr('id', id);
                $("#" + containerId).append($(exUtils.col).append(select));

                select = select.select2({
                        data: function () {
                            return   {
                                results: self.explorationFields.filter(
                                    /**
                                     * fields filter -can't correlate fields from the same source
                                     * @param {Field} field
                                     * @returns {boolean}
                                     */
                                        function (field) {
                                        return field.source.id !== correlation[oppositeOperand].field.source.id;
                                    }
                                ),
                                /**
                                 *
                                 * @param {Field} field
                                 * @returns {string}
                                 */
                                text: function (field) {
                                    return field.label;
                                }
                            };
                        },
                        /**
                         *
                         * @param {Field} field
                         * @returns {string}
                         */
                        id: function (field) {
                            return field.id;
                        },
                        formatResult: formatComboboxOptions,
                        formatSelection: formatCurrentSelection,
                        escapeMarkup: function (m) {
                            return m;
                        }
                    }
                );
                return select;
            };


            /**
             * create select2 Field Control, without setup initial value, and without change listener
             * @param id
             * @param containerId
             * @returns {jqeryElement|select2}
             */
            this.createOperand1FieldsControl = function (id, containerId) {
                var select = $(exUtils.fieldControlMarkup).attr('id', id);
                $("#" + containerId).append($(exUtils.col).append(select));

                select = select.select2({
                        data: function () {
                            return   {
                                results: self.filterFields,
                                /**
                                 *
                                 * @param {Field} field
                                 * @returns {string}
                                 */
                                text: function (field) {
                                    return field.label;
                                }
                            };
                        },
                        /**
                         *
                         * @param {Field} field
                         * @returns {string}
                         */
                        id: function (field) {
                            return field.id;
                        },
                        formatResult: formatComboboxOptions,
                        formatSelection: formatCurrentSelection,
                        escapeMarkup: function (m) {
                            return m;
                        }
                    }
                );
                return select;
            };


            /**
             * fields, restricted by source
             *
             * create select2 Field Control, without setup initial value, and without change listener
             * @param id
             * @param containerId
             * @param {Condition} condition
             * @returns {jqeryElement|select2}
             */
            this.createOperand2FieldsControl = function (id, containerId, condition) {
                var select = $(exUtils.fieldControlMarkup).attr('id', id);
                exUtils.replaceOldControlMarkup(id, select, containerId);

                select = select.select2({
                        data: function () {
                            return   {
                                results: self.filterFields.filter(
                                    /**
                                     * filter
                                     * @param {Field} filteredField
                                     * @returns {boolean}
                                     */
                                        function (filteredField) {
                                        return filteredField.source === condition.operand2.field.source &&
                                            datatypeConversionMatrix.isFieldDatatypesCompatible(filteredField.type, condition.operand1.field.type) &&
                                            queryAnalyser.isFieldClauseTypesCompatible(condition.operand1.field, filteredField)
                                            ;
                                    }
                                ),
                                /**
                                 *
                                 * @param {Field} field
                                 * @returns {string}
                                 */
                                text: function (field) {
                                    return field.label;
                                }
                            };
                        },
                        /**
                         *
                         * @param {Field} field
                         * @returns {string}
                         */
                        id: function (field) {
                            return field.id;
                        },
                        formatResult: formatComboboxOptions,
                        formatSelection: formatCurrentSelection,
                        escapeMarkup: function (m) {
                            return m;
                        }
                    }
                );
                return select;
            };


            /**
             *
             * @param {Field} field
             * @param {EventSource} source
             * @returns {boolean}
             */
            this.isCompatibleFieldsInSource = function (field, source) {

                if (this.getFirstCompatibleFieldFromSource(field, source)) {
                    return true;
                }
                return  false;
            };


            /**
             *
             *
             * @param {Field} field
             * @param {EventSource} source
             * @returns {Field}
             */
            this.getFirstCompatibleFieldFromSource = function (field, source) {
                for (var i = 0; i < this.filterFields.length; i++) {
                    var filterField = this.filterFields[i];
                    if (filterField.source.id == source.id && datatypeConversionMatrix.getImplicitConversionType(filterField.type, field.type) &&
                        queryAnalyser.isFieldClauseTypesCompatible(filterField, field)) {
                        return filterField;
                    }
                }
                return null;
            };


            function formatComboboxOptions(object, container) {
                return colorCodingFormat(object, container, "li");
            }


            function formatCurrentSelection(object, container) {
                return colorCodingFormat(object, container, "a");
            }

            /**
             * format field in its source color
             *
             * @param {Field} field
             * @param container
             * @param parentTag
             * @returns {*}
             */
            function colorCodingFormat(field, container, parentTag) {
                if (!field || !field.source) { // optgroup
                    return "error: not field";
                }
                var color = field.source.color;
                var parent = container.parent();
                if (parent && parentTag == 'a' && parent.is(parentTag)) {
                    colorCoding.colors.forEach(function (color) {
                        parent.removeClass(color);
                    });
                    parent.addClass(color);
                } else {
                    container.addClass(color);
                }

                return  field.label;
            }


            function initExplorationSourceListener() {
                ExplorationUtils.getInstance().explorationKoModel.exploration().sources.subscribe(function () {
                    refreshFields();
                    refreshFilterFields();
                });
            }

            function initExplorationSummariesListener() {
                ExplorationUtils.getInstance().explorationKoModel.exploration().summaries.subscribe(function () {
                    refreshFilterFields();
                });
            }

            function refreshFields() {

                self.explorationFields.splice(0, self.explorationFields.length);

                var sources = ExplorationUtils.getInstance().getExplorationSources();
                sources.forEach(function (source) {
                    source.fields.forEach(function (field) {
                        self.explorationFields.push(field);
                    });
                });

                self.observableFields.valueHasMutated();
            }


            /**
             *
             * @returns {Array.<Field|AggregatedField>}
             */
            function refreshFilterFields() {

                self.filterFields.splice(0, self.filterFields.length);

                var sources = ExplorationUtils.getInstance().getExplorationSources();
                var uniqueSummaries = queryAnalyser.getUniqueObjects(ExplorationUtils.getInstance().getExplorationSummaries());

                sources.forEach(function (source) {
                    source.fields.forEach(function (field) {
                        self.filterFields.push(field);
                        addAggregatedFieldsFromSummaries(uniqueSummaries, field);
                    });
                });
            }


            function addAggregatedFieldsFromSummaries(summaries, field) {
                for (var i = 0; i < summaries.length; i++) {
                    if (summaries[i].operand.field.equals(field)) {
                        self.filterFields.push(summaries[i].aggregatedField);
                    }
                }
            }

        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationFieldsController}
         */
        ExplorationFieldsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationFieldsController();
            }
            return this.instance;
        };


        return ExplorationFieldsController;

    });
