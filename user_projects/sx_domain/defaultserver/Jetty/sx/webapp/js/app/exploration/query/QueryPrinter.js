/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('QueryPrinter', [
        'jquery',
        'knockout',
        'Utils',
        'ConditionsMatching',
        'Operations',
        'Field',
        'AggregatedField',
        'FieldType',
        'FieldTypeOperations',
        'OperandType',
        'ExplorationUtils'
    ],

    /**
     * @exports exploration/query
     * @ignore
     */
        function ($, ko, Utils, ConditionsMatching, Operations, Field, AggregatedField, FieldType, FieldTypeOperations, OperandType, ExplorationUtils) {

        /**
         * @class
         * @classdesc -convert exploration components to text
         * components like : @see Condition, @see Correlation, @see Summaries
         *
         * @constructor
         */
        function QueryPrinter() {

            //queryTemplate
            var select = "SELECT * FROM ";
            var where = " WHERE ";
            var groupBy = " GROUP BY ";
            var AND = " AND ";
            var OR = " OR ";

            var error = 'ERROR';
            var line = "\n ";
            var lineWithTab = "\n\t ";
            var correlationsComment = '/* correlations */';
            var conditionsComment = '/* conditions */';


            var op = Operations.Operations;
            var uiFieldTypes = FieldType.UI_FIELD_TYPES;
            var exUtils = ExplorationUtils.getInstance();
            var fieldTypeOperations = FieldTypeOperations.getInstance();
            var conditionsMatching = ConditionsMatching.ConditionsMatching;
            var operandTypes = OperandType.OperandType;


            /**
             *
             * @param {Query[]} queries
             * @returns {string}
             */
            this.generateQueriesString = function (queries) {

                var results = [];
                for (var i = 0; i < queries.length; i++) {
                    results.push(generateQueryString(queries[i]));
                }

                var result = results.join(line + line);
                return  result;
            };


            /**
             *
             * @param {Query} query
             * @returns {string}
             */
            function generateQueryString(query) {

                var queryString = select;

                queryString = generateFrom(queryString, query);
                queryString = generateWhere(queryString, query);
                queryString = generateGroupBy(queryString, query);

                return queryString;

            }


            /**
             *
             * @param queryString
             * @param {Query} query
             * @returns {string}
             */
            function generateFrom(queryString, query) {
                var sources = query.sources;

                if (sources.length > 0) {
                    var sourceClauses = [];
                    for (var i = 0; i < sources.length; i++) {
                        sourceClauses.push(sources[i].name);
                    }
                    queryString = queryString + lineWithTab + sourceClauses.join(", ");

                }

                return queryString;
            }


            /**
             *
             * @param queryString
             * @param {Query} query
             * @returns {string}
             */
            function generateWhere(queryString, query) {

                var correlations = query.correlations;
                var conditions = query.conditions;
                var conditionsMatching = getConditionsMatching(query.conditionsMatching);

                var isConditons = conditions.length > 0;
                var isCorrelations = correlations.length;

                if (isConditons || isCorrelations > 0) {
                    queryString = queryString + line + where;
                }

                queryString = updateCorrelations(correlations, queryString);
                queryString = updateConditions(conditions, conditionsMatching, isCorrelations, queryString);

                return queryString;
            }

            /**
             *
             * @param {Array.<Correlation>} correlations
             * @param queryString
             * @returns {*}
             */
            function updateCorrelations(correlations, queryString) {
                if (correlations.length > 0) {
                    var correlationClauses = [];
                    for (var i = 0; i < correlations.length; i++) {
                        correlationClauses.push(getCorrelationClause(correlations[i]));
                    }
                    queryString = queryString + lineWithTab + correlationsComment + lineWithTab + correlationClauses.join(lineWithTab + AND);

                }

                return queryString;
            }

            /**
             *
             * @param {Array.<Condition>} conditions
             * @param conditionsMatching
             * @param isCorrelations
             * @param queryString
             * @returns {*}
             */
            function updateConditions(conditions, conditionsMatching, isCorrelations, queryString) {
                if (conditions.length > 0) {
                    var conditionsClauses = [];
                    for (var i = 0; i < conditions.length; i++) {
                        conditionsClauses.push(getConditionClause(conditions[i]));
                    }
                    var conditions_ = lineWithTab + conditionsComment + lineWithTab + conditionsClauses.join(conditionsMatching + lineWithTab);

                    if (isCorrelations) {
                        conditions_ = AND + lineWithTab + " ( " + conditions_ + lineWithTab + " ) ";
                    }
                    queryString = queryString + conditions_;

                }
                return queryString;
            }

            /**
             *
             * @param queryString
             * @param {Query} query
             * @returns {*}
             */
            function generateGroupBy(queryString, query) {
                var summaries = query.summaries;

//                if (summaries.length > 0) {
                if (false) {
                    var groupByFields = [];
                    var groupByOperations = [];
                    for (var i = 0; i < summaries.length; i++) {
                        var groupByField = summaries[i].field.name;
                        var groupByOperation = summaries[i].operation + "(" + groupByField + ")";
                        groupByFields.push(groupByField);
                        groupByOperations.push(groupByOperation);
                    }

                    queryString = queryString + groupBy + groupByFields.join(", ");

                }
                return queryString;
            }


            function getConditionsMatching(queryConditionsMatching) {
                if (conditionsMatching.ANY == queryConditionsMatching) {
                    return  OR;
                }
                return  AND;
            }


            /**
             *
             * @param {Condition} condition
             * @returns {string}
             */
            function getConditionClause(condition) {

                var operand1Clause = getFieldAsTextWithSourceName(condition.operand1.field);
                var operation = getCQLOperation(condition.operation) + " ";
                var operand2Clause = getOperand2Clause(condition);

                var clause = operand1Clause + operation + operand2Clause;

                return clause;
            }


            /**
             *
             * @param {Summary} summary
             * @returns {string}
             */
            this.summaryToText = function (summary) {
                var summaryText = getFieldAsText(summary.aggregatedField);
                return summaryText;
            };

            /**
             *
             * @param {Summary[]} summaries
             * @returns {string}
             */
            this.summariesToText = function (summaries) {
                var summariesAsText = "";
                var self = this;
                summaries.forEach(function (summary) {
                    summariesAsText += $("<span></span>")
                        .addClass("explorationLink").text(self.summaryToText(summary)).html() + "<br/>";
                });
                return summariesAsText;
            };

            /**
             *
             * @param {Field[]} fields
             * @returns {string}
             */
            this.fieldsToText = function (fields) {
                var fielsAsText = "";
                fields.forEach(function (field) {
                    fielsAsText += $("<span></span>")
                        .addClass("explorationLink").text(getFieldAsText(field)).html() + "<br/>";
                });
                return fielsAsText;
            };

            /**
             *
             * @param {SelectedField[]} selectedFields
             * @returns {string}
             */
            this.selectedFieldsToText = function (selectedFields) {
                var fielsAsText = "";
                selectedFields.forEach(function (selectedField) {
                    fielsAsText += $("<span></span>")
                        .addClass("explorationLink").text(getFieldAsText(selectedField.field)).html() + "<br/>";
                });
                return fielsAsText;
            };


            /**
             *
             * @param {Condition} condition
             * @returns {string}
             */
            this.conditionToText = function (condition) {

//                var operand1Clause = condition.operand1.field.name;
                var operand1Clause = getOperandAsText(condition.operand1);
                var operation = fieldTypeOperations.translateOperation(condition.operation);
                var operand2Clause = getOperandAsText(condition.operand2);

                var clause = operand1Clause + " " + operation + " " + operand2Clause;

                return clause;
            };

            /**
             *
             * @param {Condition} condition
             * @returns {string}
             */
            this.equalityToText = function (condition) {

                var operand1Clause = getOperandAsText(condition.operand1);
                var operation = "=";
                var operand2Clause = getOperandAsText(condition.operand2);

                var clause = operand1Clause + " " + operation + " " + operand2Clause;

                return clause;
            };


            this.conditionsToText = function (conditions) {
                var conditionsAsText = "";
                var self = this;
                conditions.forEach(function (condition) {
                    conditionsAsText += $("<span></span>")
                        .addClass("explorationLink").text(self.conditionToText(condition)).html() + "<br/>";
                });
                return conditionsAsText;
            };


            /**
             *
             * @param {Operand} operand
             * @returns {String}
             */
            function getOperandAsText(operand) {

                if (operand.type == operandTypes.VALUE) {
                    return operand.value;
                }
                if (operand.type == operandTypes.FIELD) {
                    return getFieldAsText(operand.field);
                }

                return "Error";

            }


            /**
             *
             * @param {Field|AggregatedField} field
             * @returns {String}
             */
            function getFieldAsText(field) {

                if (field instanceof AggregatedField) {
                    return  field.aggregateFunction + " " + exUtils.of_Translated + " " + field.name;

                } else {
                    return field.name;

                }

            }


            /**
             *
             * @param {Field|AggregatedField}  field
             * @returns {string}
             */
            function getFieldAsTextWithSourceName(field) {

                if (field instanceof AggregatedField) {
                    return  field.aggregateFunction + " " + exUtils.of_Translated + " " + field.source.name + "." + field.name;

                } else {
                    return field.source.name + "." + field.name;

                }

            }


            function getOperand2Clause(condition) {

                if (condition.operand2.type == operandTypes.VALUE) {
                    return getCQLOperationValue(condition.operation, condition.operand1.field.type, condition.operand2.value) + " ";
                }
                if (condition.operand2.type == operandTypes.FIELD) {
                    return getFieldAsTextWithSourceName(condition.operand2.field);
                }

                return null;
            }


            /**
             *
             * @param {Correlation} correlation
             * @returns {string}
             */
            function getCorrelationClause(correlation) {

                var field1 = correlation.operand1.field.source.name + "." + correlation.operand1.field.name + " ";
                var field2 = correlation.operand2.field.source.name + "." + correlation.operand2.field.name + " ";
                var operation = getCQLOperation(correlation.operation) + " ";

                var clause = field1 + operation + field2;

                return clause;
            }


            function getCQLOperation(operation) {

                var cqlOperation = error;

                switch (operation) {

                    case op.EQ:
                        cqlOperation = '=';
                        break;

                    case op.NE:
                        cqlOperation = '<>';
                        break;

                    case op.LT:
                        cqlOperation = '<';
                        break;

                    case op.LTE:
                        cqlOperation = '<=';
                        break;

                    case op.GT:
                        cqlOperation = '>';
                        break;


                    case op.GTE:
                        cqlOperation = '>=';
                        break;

                    case op.CONTAINS:
                        cqlOperation = 'LIKE';
                        break;
                }

                return cqlOperation;
            }


            /**
             *
             * @param operation
             * @param {FieldType} fieldType
             * @param operationValue
             * @returns {string}
             */
            function getCQLOperationValue(operation, fieldType, operationValue) {

                var value = error;

                switch (fieldType.uiFieldType) {

                    case uiFieldTypes.INTEGER:
                        value = operationValue;
                        break;

                    case uiFieldTypes.DOUBLE:
                        value = operationValue;
                        break;

                    case uiFieldTypes.DATE:
                        value = "'" + operationValue + "'";
                        break;

                    case uiFieldTypes.TIME:
                        value = "'" + operationValue + "'";
                        break;

                    case uiFieldTypes.BOOLEAN:
                        value = operationValue;
                        break;

                    case uiFieldTypes.STRING:
                    {
                        if (operation == op.CONTAINS) {
                            value = "'%" + operationValue + "%'";
                        } else {
                            value = "'" + operationValue + "'";
                        }
                    }
                        break;


                }

                return value;
            }


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {QueryPrinter}
         */
        QueryPrinter.getInstance = function () {
            if (!this.instance) {
                this.instance = new QueryPrinter();
            }
            return this.instance;
        };


        return QueryPrinter;

    });
