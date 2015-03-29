/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('QueryAnalyser', [
        'jquery',
        'knockout',
        'Utils',
        'ConditionsMatching',
        'Operations',
        'AggregatedField',
        'ConstantField',
        'FieldType',
        'ExplorationUtils',
        'OperandType',
        'Exploration',
        'WindowUnit',
        'NotificationUtils',
        'Query'
    ],


    /**
     * @exports exploration/query
     * @ignore
     */
    function ($, ko, Utils, ConditionsMatching, Operations, AggregatedField, ConstantField, FieldType, ExplorationUtils, OperandType, Exploration, WindowUnit, NotificationUtils, Query) {

        /**
         * @class
         * @classdesc methods for analysis exploration datas and get cql Query
         */
        function QueryAnalyser() {

            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var operandTypes = OperandType.OperandType;
            var self = this;


            this.onOpenExplorationEditor = function () {
                this.initQueryChangedListener();
            };


            /**
             * update correlated sources
             *
             */
            this.initQueryChangedListener = function () {
                var self = this;
                self.updateQueries();
                explorationKoModel.exploration().sources.subscribe(function () {
                    self.updateQueries();
                });
                explorationKoModel.exploration().correlations.subscribe(function (correlations) {
                    if (self.isCorrelationsContainsDBSource(correlations)) {
                        self.resetRangesOfAllStreamsToNOW();
                        explorationKoModel.exploration().isCorrelationsContainsDBSource(true);   //restrict ranges in WindowsDrawer
                    } else {
                        explorationKoModel.exploration().isCorrelationsContainsDBSource(false);
                    }

                    self.updateQueries();
                });
//                explorationKoModel.exploration().summaries.subscribe(function () {
//                    self.updateQueries();
//                });
//                explorationKoModel.exploration().groupBy.subscribe(function () {
//                    self.updateQueries();
//                });
            };


            /**
             *
             * @param {Correlation} correlations
             *
             *
             */
            this.isCorrelationsContainsDBSource = function (correlations) {
                var isCorrelationsContainsDBSource = false;

                for (var i = 0; i < correlations.length; i++) {
                    var correlation = correlations[i];
                    if (!correlation.operand1.field.source.windowable || !correlation.operand2.field.source.windowable) {
                        isCorrelationsContainsDBSource = true;
                        break;
                    }
                }

                return isCorrelationsContainsDBSource;
            };

            /**
             *                You have added DB reference as a part of correlation.
             *                Due to system limitation we have to reset ranges of all other sources to 'Now'.
             *
             */
            this.resetRangesOfAllStreamsToNOW = function () {

                var isAnyStreamRangesBeenReseted = false;
                var sources = explorationKoModel.exploration().sources();

                for (var i = 0; i < sources.length; i++) {
                    var source = sources[i];
                    if (source.windowable && source.window.rangeUnit() != WindowUnit.Units.NOW) {
                        source.window.rangeUnit(WindowUnit.Units.NOW);
                        isAnyStreamRangesBeenReseted = true;
                    }
                }


                if (isAnyStreamRangesBeenReseted) {
                    NotificationUtils.resetRangesOfAllStreamsToNowBecauseAddedDbReferenceAsASource();
                }
            };


            /**
             * Exploration can have multiple queries, if not enough correlation(join) rules for exploration sources
             * join correlated sources together into Queries and add conditions
             *
             * This method updates exploration.queries
             * updateQueries influence on :
             * 1)filters(conditions) behaviour (user can compare only fields from correlated sources
             * 2)fields in cql Select statement( eventType)
             *
             * @returns {Array.<Query>}
             */
            this.updateQueries = function () {
                var exploration = explorationKoModel.exploration();
                return this.updateExplorationQueries(exploration);
            };

            /**
             *
             * @param {Exploration} exploration
             * @returns {Query[]}
             */
            this.updateExplorationQueries = function (exploration) {
                var queries = divideExplorationToQueriesByCorrelations(exploration);
                console.log("updateQueries", queries);
                exploration.queries(queries);
                return queries;
            };


            /**
             * in Sx we show users results from only one Query in exploration
             * Exploration can have multiple queries, if not enough correlation(join) rules for exploration sources
             @returns {Query}
             */
            this.getFreshPrimaryQuery = function (exploration) {

                this.updateQueries(exploration);
                return this.getExplorationPrimaryQuery(exploration);
            };


            /**
             *
             * @param {Exploration} exploration
             * @returns {Query}
             */
            this.getExplorationPrimaryQuery = function (exploration) {
                var queries = exploration.queries();
                var firstSource = exploration.sources()[0];

                exploration.primaryQuery(queries[0]);//default

                if (firstSource) {   //by first source
                    for (var i = 0; i < queries.length; i++) {
                        var query = queries[i];
                        if (Utils.containsById(firstSource, query.sources)) {
                            exploration.primaryQuery(query);
                            break;
                        }
                    }
                }

                return exploration.primaryQuery();
            };


            /**
             *
             * @param {Exploration} exploration
             * @returns {boolean}
             */
            this.isEvaluationFrequencyNoLongerThanRange = function (exploration) {

                var isEvaluationFrequencyNoLongerThanRange_ = true;

                var sources = exploration.sources();
                for (var i = 0; i < sources.length; i++) {
                    var source = sources[i];
                    if (source.windowable && !source.window.isEvaluationFrequencyNoLongerThanRange()) {
                        isEvaluationFrequencyNoLongerThanRange_ = false;
                        break;
                    }
                }
                return isEvaluationFrequencyNoLongerThanRange_;
            };


            /**
             * only for Objects  with equals method implemented
             *
             * @param {Object[]} objects
             * @returns {Object[]}
             */
            this.getUniqueObjects = function (objects) {
                var uniqueObjects = objects.reduce(collectOnlyUniqueObjects, []);

                return uniqueObjects;
            };


            /**
             *
             * depends on methods:
             * @see {@link initQueryChangedListener}
             * @see {@link updateQueries}
             *
             * @param {EventSource} source
             * @returns {EventSource[]}
             */
            this.getCorrelatedSources = function (source) {

                var queries = explorationKoModel.exploration().queries();
                for (var i = 0; i < queries.length; i++) {
                    if (Utils.containsById(source, queries[i].sources)) {
                        return queries[i].sources;
                    }
                }
                return [];

            };

            /**
             *
             * @param {EventSource} source
             * @returns {*}
             */
            this.getQueryBySource = function (source) {

                var queries = explorationKoModel.exploration().queries();
                for (var i = 0; i < queries.length; i++) {
                    if (Utils.containsById(source, queries[i].sources)) {
                        return queries[i];
                    }
                }
                return null;

            };

            /**
             *
             * @param {EventSource} source1
             * @param {EventSource} source2
             * @returns {boolean}
             */
            this.isSourcesCorrelated = function (source1, source2) {
                return Utils.containsById(source2, this.getCorrelatedSources(source1)) ? true : false;

            };

            this.isAllSourcesCorrelated = function () {
                return explorationKoModel.exploration().queries().length == 1;

            };

            /**
             *
             * @param {Array.<Correlation>} correlations
             * @returns {Array.<Correlation>}
             */
            this.getUniqueCorrelations = function (correlations) {
                var uniqueCorrelations = correlations.reduce(collectOnlyUniqueCorrelations, []);

                return uniqueCorrelations;
            };

            /**
             *
             * @param {Array.<Correlation>} correlations
             * @returns {Array.<Correlation>}
             */
            this.getNonUniqueCorrelations = function (correlations) {
                var uniqueCorrelations = self.getUniqueCorrelations(correlations);
                var uniqueCorrelationsIds = Utils.extractIdsFromArrayOfObjects(uniqueCorrelations);

                var nonUniqueCorrelations = Utils.excludeByIds(uniqueCorrelationsIds, correlations);
                return nonUniqueCorrelations;
            };


            /**
             * if summary removed/changed, some exploration conditions become not valid
             *
             * @param {Summary[]} summaries
             * @returns {Condition[]}
             */
            this.getNotValidSummaryConditions = function (summaries) {
                var notValidSummaryConditions = [];

                var conditions = exUtils.getExplorationConditions();

                var conditions_ = conditions;
                for (var i = 0; i < conditions_.length; i++) {
                    var condition = conditions_[i];
                    var operand1 = condition.operand1;
                    var operand2 = condition.operand2;


                    var isOperand1Valid = true;
                    if (operand1.type == operandTypes.FIELD && operand1.field instanceof AggregatedField) {
                        isOperand1Valid = isSummariesContainsAggregatedField(summaries, operand1.field);
                    }
                    var isOperand2Valid = true;
                    if (operand2.type == operandTypes.FIELD && operand2.field instanceof AggregatedField) {
                        isOperand2Valid = isSummariesContainsAggregatedField(summaries, operand2.field);
                    }
                    var isConditionValid = isOperand1Valid && isOperand2Valid;

                    if (!isConditionValid) {
                        notValidSummaryConditions.push(condition);
                    }
                }

                return notValidSummaryConditions;

            };
            /**
             *
             * @param {Summary[]} summaries
             * @param {AggregatedField} field
             * @returns {boolean}
             */
            function isSummariesContainsAggregatedField(summaries, field) {
                return summaries.some(function (summary) {
                    return summary.aggregatedField.equals(field);
                });
            }


            /**
             * if group by  fields removed, some exploration conditions become not valid :
             * condition with Non group by field cannot be compatible with summary(AggregatedField) field
             *
             * @param {SelectedField[]} removedGroupByFields
             * * @returns {Condition[]}
             */
            this.getNotValidGroupByConditions = function (removedGroupByFields) {
                var notValidGroupByConditions = [];


                if (removedGroupByFields.length > 0) {

                    var conditions = exUtils.getExplorationConditions();

                    var conditions_ = conditions;
                    for (var i = 0; i < conditions_.length; i++) {
                        var condition = conditions_[i];
                        var operand1 = condition.operand1;
                        var operand2 = condition.operand2;

                        var isConditionValid = true;

                        //if field not in GroupBy clause - it cannot be compatible with summary(AggregatedField) field
                        if (
                            operand1.type == operandTypes.FIELD &&
                            operand2.type == operandTypes.FIELD && operand2.field instanceof AggregatedField &&
                            this.isFieldInRemovedGroupByFields(operand1.field, removedGroupByFields)
                        ) {
                            isConditionValid = false;
                        } else if (
                            operand2.type == operandTypes.FIELD &&
                            operand1.type == operandTypes.FIELD && operand1.field instanceof AggregatedField &&
                            this.isFieldInRemovedGroupByFields(operand2.field, removedGroupByFields)
                        ) {
                            isConditionValid = false;
                        }

                        if (!isConditionValid) {
                            notValidGroupByConditions.push(condition);
                        }

                    }
                }

                return notValidGroupByConditions;

            };

            /**
             * if group by  fieldы removed, some exploration conditions become not valid
             *
             * @param {SelectedField[]} oldGroupByFields
             * @param {SelectedField[]} changedGroupByFields
             * * @returns {Condition[]}
             */
            this.getRemovedGroupByFields = function (oldGroupByFields, changedGroupByFields) {
                var removedGroupByFields = [];

                for (var i = 0; i < oldGroupByFields.length; i++) {
                    var oldGroupByField = oldGroupByFields[i];
                    if (oldGroupByField.selected) {
                        var removedField = this.getFieldIfOldGroupByFieldRemovedInChangedGroupByFields(oldGroupByField, changedGroupByFields);
                        if (removedField) {
                            removedGroupByFields.push(removedField);
                        }
                    }
                }
                return removedGroupByFields;

            };


            /**
             *
             * @param {SelectedField} oldGroupByField
             * @param {SelectedField[]} changedGroupByFields
             * * @returns {boolean}
             */
            this.getFieldIfOldGroupByFieldRemovedInChangedGroupByFields = function (oldGroupByField, changedGroupByFields) {
                for (var i = 0; i < changedGroupByFields.length; i++) {
                    if (oldGroupByField.equals(changedGroupByFields[i]) && changedGroupByFields[i].selected === false) {
                        return changedGroupByFields[i];
                    }
                }
                return null;

            };

            /**
             *
             * @param {Field} field
             * @param {SelectedField[]} removedGroupByFields
             * * @returns {boolean}
             */
            this.isFieldInRemovedGroupByFields = function (field, removedGroupByFields) {
                for (var i = 0; i < removedGroupByFields.length; i++) {
                    if (field.id == removedGroupByFields[i].field.id) {
                        return true;
                    }
                }
                return false;

            };


            /**
             * if source removed, conditions/correlations, that use this source, become not valid
             *
             * @param {Condition[]} conditions
             * @param {EventSource[]} sources
             * @returns {Condition[]}
             */
            this.getConditionsWithoutSource = function (sources, conditions) {
                var conditionsWithoutSource = [];

                for (var i = 0; i < conditions.length; i++) {
                    var condition = conditions[i];
                    var isOperand1WithoutSource = !Utils.findById(condition.operand1.field.source.id, sources);
                    var isOperand2WithoutSource = (condition.operand2.type == operandTypes.FIELD) ? !Utils.findById(condition.operand2.field.source.id, sources) : false;
                    if (isOperand1WithoutSource || isOperand2WithoutSource) {
                        conditionsWithoutSource.push(condition);
                    }
                }
                return conditionsWithoutSource;
            };


            /**
             * if source removed, summaries, that use this source, become not valid
             *
             * @param {EventSource[]} sources
             * @param {Summary[]} summaries
             * @returns {Summary[]}
             */
            this.getSummariesWithoutSource = function (sources, summaries) {
                var summariesWithoutSource = [];

                for (var i = 0; i < summaries.length; i++) {
                    var summary = summaries[i];
                    if (!Utils.findById(summary.operand.field.source.id, sources)) {
                        summariesWithoutSource.push(summary);
                    }
                }
                return summariesWithoutSource;
            };


            /**
             * if source removed, groupByFields, that use this source, become not valid
             *
             * @param {EventSource[]} sources
             * @param {SelectedField[]} groupByFields
             * @returns {Field[]}
             */
            this.getGroupByFieldsWithoutSource = function (sources, groupByFields) {
                var getGroupByFieldsWithoutSource = [];

                for (var i = 0; i < groupByFields.length; i++) {
                    var field = groupByFields[i];
                    if (field.selected && !Utils.findById(field.field.source.id, sources)) {
                        getGroupByFieldsWithoutSource.push(field.field);
                    }
                }
                return getGroupByFieldsWithoutSource;
            };


            /**
             * if correlation/source removed, exploration conditions can't contain fields from removed/not correlated sources
             * (conditions in SX can bind only fields from correlated sources)
             *
             * @param {EventSource[]} sources
             * @param {Condition[]} conditions
             * @param {Correlation[]} correlations
             * @returns {Condition[]}
             */
            this.getConditionsWithoutSourceOrCorrelation = function (sources, conditions, correlations) {
                var conditionsWithoutCorrelation = [];

                var queries = divideExplorationToQueriesByCorrelations(
                    new Exploration(
                        null, //name
                        null, //displayName
                        null,  //createdBy
                        null,  //createdAt
                        null,  //updatedBy
                        null,  //updatedAt
                        null,  //description
                        null,  //attachedTagNames
                        sources,
                        conditions,
                        null, //conditionsMatching
                        correlations
                    )
                );


                var conditions_ = conditions;
                for (var i = 0; i < conditions_.length; i++) {
                    var condition = conditions_[i];
                    var operand1Source = condition.operand1.field.source;
                    var operand2Source = (condition.operand2.type == operandTypes.FIELD) ? condition.operand2.field.source : null;
                    var isConditionWithoutSourceOrCorrelation = true;
                    for (var j = 0; j < queries.length; j++) {
                        if (Utils.containsById(operand1Source, queries[j].sources) && (operand2Source == null || Utils.containsById(operand2Source, queries[j].sources))) {
                            isConditionWithoutSourceOrCorrelation = false;
                            break;
                        }
                    }
                    if (isConditionWithoutSourceOrCorrelation) {
                        conditionsWithoutCorrelation.push(condition);
                    }
                }

                return conditionsWithoutCorrelation;

            };


            /**
             * Exploration can have multiple queries, if not enough correlation/join rules for exploration sources
             * join correlated sources together into Queries and add conditions


             * @param {Exploration} exploration
             * @returns {Array.<Query>}
             */
            function divideExplorationToQueriesByCorrelations(exploration) {
                var correlations = self.getUniqueCorrelations(exploration.correlations());
                var sources = exploration.sources();
                var conditions = exploration.conditions();
                var summaries = exploration.summaries();
                var groupBy = exploration.groupBy();

                //without correlations we have as many Queries as sources.
                var queriesWithSingleSource = sources.map(function (source) {
                    var query = new Query();
                    query.sources.push(source);
                    query.conditionsMatching = exploration.conditionsMatching();
                    return query;
                });

                var correlationsClone = correlations.map(function (correlation) {
                    return correlation;
                });


                var queries = joinQueriesByCorrelations(queriesWithSingleSource, correlationsClone);
                queries = joinQueriesIfExistsCommonSources(queries);
                queries = updateQueriesFields(queries);
                queries = joinConditonsToQueries(queries, conditions);
                queries = joinSummariesToQueries(queries, summaries);
                queries = joinGroupByToQueries(queries, groupBy);


                return queries;
            }


            /**
             *
             * @param {Array.<Query>} queries
             * @param {Array.<Condition>} conditions
             * @returns {Array.<Query>}
             */
            function joinConditonsToQueries(queries, conditions) {

                var conditions_ = self.getUniqueObjects(conditions);
                for (var i = 0; i < conditions_.length; i++) {
                    var operand1Source = conditions_[i].operand1.field.source;
                    var operand2Source = (conditions_[i].operand2.type == operandTypes.FIELD) ? conditions_[i].operand2.field.source : null;
                    for (var j = 0; j < queries.length; j++) {
                        if (Utils.containsById(operand1Source, queries[j].sources) && (operand2Source == null || Utils.containsById(operand2Source, queries[j].sources))) {
                            queries[j].conditions.push(conditions_[i]);
                            break;
                        }
                    }
                }

                return queries;
            }

            /**
             *
             * @param {Array.<Query>} queries
             * @param {Array.<Summary>} summaries
             * @returns {Array.<Query>}
             */
            function joinSummariesToQueries(queries, summaries) {

                var summaries_ = self.getUniqueObjects(summaries);
                for (var i = 0; i < summaries_.length; i++) {
                    var aggregatedFieldSource = summaries_[i].aggregatedField.source;
                    for (var j = 0; j < queries.length; j++) {
                        if (Utils.containsById(aggregatedFieldSource, queries[j].sources)) {
                            queries[j].summaries.push(summaries_[i]);
                            break;
                        }
                    }
                }

                return queries;
            }

            /**
             *
             * @param {Array.<Query>} queries
             * @param {Array.<SelectedField>} groupBy
             * @returns {Array.<Query>}
             */
            function joinGroupByToQueries(queries, groupBy) {

                for (var i = 0; i < groupBy.length; i++) {
                    if (groupBy[i].selected) {
                        var operand1Source = groupBy[i].field.source;
                        for (var j = 0; j < queries.length; j++) {
                            if (Utils.containsById(operand1Source, queries[j].sources)) {
                                queries[j].groupBy.push(groupBy[i].field);
                                break;
                            }
                        }
                    }
                }

                return queries;
            }

            /**
             * @param {Query[]} queries
             * @param {Correlation[]} correlations
             * @returns {Query[]}
             */
            function joinQueriesByCorrelations(queries, correlations) {

                var i = 0;
                while (i < queries.length && correlations.length > 0) {

                    var query = queries[i];

                    var correlationsForRemove = [];
                    correlations.forEach(function (correlation) {
                        var isQueryContainsFirstCorrelationSource = Utils.containsById(correlation.operand1.field.source, query.sources);
                        var isQueryContainsSecondCorrelationSource = Utils.containsById(correlation.operand2.field.source, query.sources);

                        if (isQueryContainsFirstCorrelationSource || isQueryContainsSecondCorrelationSource) { //correlation has common sources with query
                            joinCorrelationSourcesToQuery(query, correlation);
                            removeQueryWithSingleSource(queries, correlation.operand1.field.source);
                            removeQueryWithSingleSource(queries, correlation.operand2.field.source);

                            query.correlations.push(correlation);  //join correlation to query
                            correlationsForRemove.push(correlation); //this correlation joined with query, so remove from correlations

                        }
                    });
                    correlations = Utils.excludeObjectsWithId(correlationsForRemove, correlations);
                    i++;
                }
                return queries;

            }

            /**
             *
             * @param {Array.<Query>} queries
             */
            function joinQueriesIfExistsCommonSources(queries) {
                var i = 0;
                while (i < queries.length) {

                    var query = queries[i];
                    i++;
                    for (var j = i; j < queries.length; j++) {
                        var commonSources = Utils.findObjectsWithId(queries[j].sources, query.sources);
                        if (commonSources.length > 0) {
                            //join sources
                            var notCommonSources = Utils.excludeObjectsWithId(query.sources, queries[j].sources);
                            query.sources = query.sources.concat(notCommonSources);
                            queries.splice(j, 1); //remove joined
                            i = 0;//began from scratch
                            break;
                        }
                    }
                }
                return queries;
            }

            /**
             * update @see Query.fields
             * all query sources fields in one array reference -
             * performance perpose -fast ref to all query fields
             * @param {Query[]} queries
             * @returns {Array.<Query>}
             */
            function updateQueriesFields(queries) {

                var fields = [];
                for (var i = 0; i < queries.length; i++) {
                    var sources = queries[i].sources;
                    for (var j = 0; j < sources.length; j++) {
                        fields = fields.concat(sources[j].fields);
                    }
                    queries[i].fields = fields;
                }
                return queries;
            }


            /**
             *
             * @param {Array.<Query>} queries
             * @param {EventSource} source
             */
            function removeQueryWithSingleSource(queries, source) {
                for (var i = 0; i < queries.length; i++) {
                    if (queries[i].sources.length == 1 && queries[i].sources[0].id == source.id) {
                        queries.splice(i, 1);
                        break;
                    }

                }
            }

            /**
             *
             * @param {Query} query
             * @param {Correlation} correlation
             */
            function joinCorrelationSourcesToQuery(query, correlation) {
                addSourceIfNotExists(correlation.operand1.field.source, query.sources);
                addSourceIfNotExists(correlation.operand2.field.source, query.sources);
            }

            /**
             *
             * @param {EventSource} source
             * @param {Array.<EventSource>} array
             */
            function addSourceIfNotExists(source, array) {
                if (!Utils.containsById(source, array)) {
                    array.push(source);
                }
            }


            /**
             *
             * @param {Array.<Correlation>} previousResult
             * @param {Correlation} currentCorrelation
             * @param  {int}  currentCorrelationIndex
             * @param {Array.<Correlation>} correlations
             * @returns {Array.<Correlation>}
             */
            function collectOnlyUniqueCorrelations(previousResult, currentCorrelation, currentCorrelationIndex, correlations) {

                var isUnique = true;
                for (var i = currentCorrelationIndex + 1; i < correlations.length; i++) {  //iterate only not checked
                    if (!isCorrelationsUnique(currentCorrelation, correlations[i])) {
                        isUnique = false;
                        break;
                    }
                }

                if (isUnique) {
                    previousResult.push(currentCorrelation);
                }

                return previousResult;
            }


            /**
             *
             * @param {Correlation} a
             * @param {Correlation} b
             * @returns {boolean}
             */
            function isCorrelationsUnique(a, b) {
                var field_1a = a.operand1.field.id;
                var field_2a = a.operand2.field.id;

                var field_1b = b.operand1.field.id;
                var field_2b = b.operand2.field.id;

                var isFieldsEquals = ((field_1a == field_1b) && (field_2a == field_2b) )
                    ||
                    ((field_1a == field_2b) && (field_2a == field_1b) );

                return !isFieldsEquals;
            }


            /**
             * only for Objects  with equals method implemented
             *
             * @param {Object[]} previousResult
             * @param {Object} currentObject
             * @param  {int}  currentObjectIndex
             * @param {Object[]} objects
             * @returns {Object[]}
             */
            function collectOnlyUniqueObjects(previousResult, currentObject, currentObjectIndex, objects) {

                var isUnique = true;
                for (var i = currentObjectIndex + 1; i < objects.length; i++) {  //iterate only not checked
                    if (currentObject.equals(objects[i])) {
                        isUnique = false;
                        break;
                    }
                }

                if (isUnique) {
                    previousResult.push(currentObject);
                }

                return previousResult;
            }


            /**
             *
             * check field CLAUSE types compatibility
             * for check ability to compare fields in Filters box
             *
             * Scenario A: Left operand is a [source field]
             * Right operand may be either [source field] [group_by field]
             *
             *  Scenario B: Left operand is a [group_by field]
             * Right operand may be either [source field] [group_by field] [summary field]
             *
             * Scenario C: Left operand is a [summary field]
             * Right operand may be either [group_by field] [summary field]
             *
             * (Any of them can be compared with  [constant])
             *
             * @param {Field} field1
             * @param {Field} field2
             *
             * @return {boolean}
             */
            this.isFieldClauseTypesCompatible = function (field1, field2) {

                var field1ClauseType = getFieldClauseType(field1);
                var field2ClauseType = getFieldClauseType(field2);

                if (field1ClauseType == FieldType.CLAUSE_TYPE.SOURCE &&
                    (field2ClauseType == FieldType.CLAUSE_TYPE.SOURCE || field2ClauseType == FieldType.CLAUSE_TYPE.GROUP_BY)
                ) {
                    return true;

                } else if (field1ClauseType == FieldType.CLAUSE_TYPE.GROUP_BY &&
                    (field2ClauseType == FieldType.CLAUSE_TYPE.SOURCE || field2ClauseType == FieldType.CLAUSE_TYPE.GROUP_BY || field2ClauseType == FieldType.CLAUSE_TYPE.SUMMARY)
                ) {
                    return true;

                } else if (field1ClauseType == FieldType.CLAUSE_TYPE.SUMMARY &&
                    ( field2ClauseType == FieldType.CLAUSE_TYPE.GROUP_BY || field2ClauseType == FieldType.CLAUSE_TYPE.SUMMARY)
                ) {
                    return true;
                }

                return false;

            };

            /**
             *
             * @param field
             * @returns {FieldType.CLAUSE_TYPE}
             */
            function getFieldClauseType(field) {

                if (field instanceof AggregatedField) {
                    return FieldType.CLAUSE_TYPE.SUMMARY;
                } else if (field instanceof ConstantField) {
                    return FieldType.CLAUSE_TYPE.CONSTANT;
                } else if (isGroupByField(field)) {
                    return FieldType.CLAUSE_TYPE.GROUP_BY;
                }

                return FieldType.CLAUSE_TYPE.SOURCE;

            }


            /**
             *
             * @param field
             * @returns {boolean}
             */
            function isGroupByField(field) {

                /**
                 *
                 * @type {SelectedField[]}
                 */
                var groupByFields = explorationKoModel.exploration().groupBy();

                for (var i = 0; i < groupByFields.length; i++) {
                    if (groupByFields[i].selected && groupByFields[i].field.id == field.id) {
                        return true;
                    }
                }
                return false;
            }
        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {QueryAnalyser}
         */
        QueryAnalyser.getInstance = function () {
            if (!this.instance) {
                this.instance = new QueryAnalyser();
            }
            return this.instance;
        };


        return QueryAnalyser;

    }
)
;
