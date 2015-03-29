/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('ExplorationConverter', [
        'jquery',
        'knockout',
        'OperandType',
        'SourceStorage',
        'Condition',
        'Operand',
        'Field',
        'EventTypeField',
        'SelectedField',
        'AggregatedField',
        'ConstantField',
        'PatternField',
        'FieldType',
        'Summary',
        'Operations',
        'Correlation',
        'Exploration',
        'PatternParameter',
        'PatternThing',
        'ExplorationActions',
        'NotificationUtils',
        'Utils'

    ],

    /**
     * @exports exploration/converter
     * @version 1.0
     */
    function ($, ko, OperandType, SourceStorage, Condition, Operand, Field, EventTypeField, SelectedField, AggregatedField, ConstantField, PatternField, FieldType, Summary, Operations, Correlation, Exploration, PatternParameter, PatternThing, ExplorationActions, NotificationUtils, Utils) {


        /**
         * @class
         * @classdesc convert Exploration to/from json for sx backend (json is used as DTO between browser client and server)
         * @constructor
         */
        function ExplorationConverter() {

            var operandTypes = OperandType.OperandType;
            var operations = Operations.Operations;
            var sourceStorage = SourceStorage.getInstance();


            /**
             *
             * @param {Exploration}  exploration
             */
            this.explorationToJson = function (exploration) {
                var sourceNames = exploration.sources().map(function (source) {
                    return source.name;
                });

                var sources = sourcesToJson(exploration.sources());
                var conditions = conditionsToJson(exploration);
                var correlations = correlationsToJson(exploration);
                var groupByFields = groupByToJson(exploration.groupBy());
                var summaries = summariesToJson(exploration);
                //pattern no need producedEventTypeMapping
                var producedEventTypeMapping = exploration.isPatternBasedExploration ? {} : fieldsForEventTypeToProducedEventTypeMapping(exploration.fieldsForEventType());
                var outputColumns = fieldsForEventTypeToOutputColumns(exploration.fieldsForEventType());

                var patternParameters = exploration.pattern ? patternParametersToJson(exploration.pattern) : null;
                var pattern = exploration.pattern ? patternToJson(exploration.pattern) : null;

                var explorationAsJson = {
                    //ui metadata
                    name: exploration.name(),
                    displayName: exploration.displayName(),
                    createdBy: exploration.createdBy,
                    createdAt: exploration.createdAt,
                    description: exploration.description(),
                    attachedTagNames: exploration.attachedTagNames(),

                    //oep server(cql) data
                    sourceNames: sourceNames,
                    sources: sources,
                    conditions: conditions,
                    correlations: correlations,
                    group: groupByFields,
                    summaries: summaries,
                    producedEventTypeMapping: producedEventTypeMapping,
                    outputColumns: outputColumns,
                    targets: exploration.targets(),

                    //pattern parameters
                    typeName: exploration.pattern ? patternParameters.typeName : Utils.EXPLORATION_TYPE_NAME,
                    parameters: exploration.pattern ? patternParameters.parameters : null,
                    pattern: pattern ? pattern : null
                };

                return explorationAsJson;
            };

            /**
             *
             * @param explorationInJson
             * @returns {Exploration}
             */
            this.jsonToExploration = function (explorationInJson) {

                var isPatternBasedExploration = Utils.isPatternExploration(explorationInJson);

                var sources = jsonToSources(explorationInJson);
                var conditions = (explorationInJson.conditions && explorationInJson.conditions.conditions) ? jsonToConditions(explorationInJson.conditions.conditions) : [];
                var conditionsMatching = (explorationInJson.conditions && explorationInJson.conditions.matching) ? explorationInJson.conditions.matching : null;
                var correlations = (explorationInJson.correlations) ? jsonToCorrelations(explorationInJson.correlations) : [];
                var summaries = (explorationInJson.producedEventTypeMapping) ? jsonToSummaries(explorationInJson.producedEventTypeMapping) : []; //todo
                var groupByFields = (explorationInJson.group) ? jsonToGroupByFields(explorationInJson.group) : [];
                var fieldsForEventType = isPatternBasedExploration && (explorationInJson.producedEventType) ?
                    this.outputColumnsToFieldsForEventTypeForPatternBasedExploration(explorationInJson.outputColumns, explorationInJson.possibleOutputColumns) :
                    (explorationInJson.producedEventTypeMapping) ? producedEventTypeMappingToFieldsForEventType(explorationInJson.producedEventTypeMapping) :
                        [];
                //TODO move from producedEventTypeMapping to outputColumns //because outputColumns stores info about ConstantsFields too.
//                var fieldsForEventTypeFromOutputColumns = (explorationInJson.outputColumns) ? outputColumnsToFieldsForEventType(explorationInJson.outputColumns) : [];

                var targets = (explorationInJson.targets) ? explorationInJson.targets : [];
                var actions = (explorationInJson.status) ? new ExplorationActions(
                    explorationInJson.status.dirty,
                    explorationInJson.status.reloadNeeded,
                    explorationInJson.status.published,
                    explorationInJson.status.canUndo,
                    explorationInJson.status.canRedo,
                    explorationInJson.status.remoteChanges,
                    explorationInJson.status.dependentExplorationCount
                ) :
                    new ExplorationActions();

                var pattern = jsonToPattern(explorationInJson);
                var patternType = explorationInJson.typeName;
                var patternParameters = explorationInJson.parameters;

                var exploration = new Exploration(
                    explorationInJson.name,
                    explorationInJson.displayName,
                    explorationInJson.createdBy,
                    explorationInJson.createdAt,
                    explorationInJson.updatedBy,
                    explorationInJson.updatedAt,
                    explorationInJson.description,
                    explorationInJson.attachedTagNames,
                    sources,
                    conditions,
                    conditionsMatching,
                    correlations,
                    summaries,
                    groupByFields,
                    fieldsForEventType,
                    targets,
                    explorationInJson.pubSubChannelName,
                    explorationInJson.originalVersion,
                    actions,

                    isPatternBasedExploration,
                    pattern,
                    patternType,
                    patternParameters
                );

                return exploration;
            };
            
            this.checkExplorationAfterSourceUpdate = function(exploration, source) {
                var explorationInJson = this.explorationToJson(exploration);
                try {
                    this.jsonToExploration(explorationInJson);
                } catch(error) {
                    NotificationUtils.explorationFailedAfterSourceUpdate(source.displayName);
                }
                
            }


            /**
             *
             * @param {EventSource[]} sources
             * @returns {{}}
             */
            function sourcesToJson(sources) {
                var sourcesInJson = {};
                sources.forEach(function (source) {
                    sourcesInJson[source.name] = {
                        name: source.name,
                        window: windowToJson(source.window)
                    };

                });
                return sourcesInJson;
            }

            /**
             *
             * @param explorationInJson
             * @returns {EventSource[]}
             */
            function jsonToSources(explorationInJson) {
                return explorationInJson.sourceNames.map(function (sourceName) {
                    var source = sourceStorage.getSourceBySourceId(sourceName);

                    if (source) {
                        if (explorationInJson.sources && explorationInJson.sources[sourceName] && explorationInJson.sources[sourceName].window) {
                            jsonToWindow(source, explorationInJson.sources[sourceName].window);
                        }
                        if (explorationInJson.sources && explorationInJson.sources[sourceName] && explorationInJson.sources[sourceName].pubSubChannel) {
                            source.pubSubChannel = explorationInJson.sources[sourceName].pubSubChannel;
                        }
                    } else {
                        NotificationUtils.failedToLoadExplorationBecauseOfSourceCorrupted(explorationInJson, sourceName);
                    }

                    return source;
                });
            }
            

            /**
             *
             * @param {EventSource} source
             * @param {jsonObject} windowInJson
             */
            function jsonToWindow(source, windowInJson) {
                var rangeValue = windowInJson.value;
                var rangeUnit = windowInJson.unit;
                var slideValue = windowInJson.slideValue;
                var slideUnit = windowInJson.slideUnit;
                var partitionBy = jsonToFields(windowInJson.partitionBy || []);
                source.window.setWindow(rangeValue, rangeUnit, slideValue, slideUnit, partitionBy);
            }


            /**
             *
             * @param {Window} window
             */
            function windowToJson(window) {
                return {
                    unit: window.rangeUnit(),
                    value: window.rangeValue(),
                    slideUnit: window.slideUnit(),
                    slideValue: window.slideValue(),
                    partitionBy: fieldsToJson(window.partitionBy())
                };
            }


            /**
             *
             * @param {Exploration} exploration
             */
            function correlationsToJson(exploration) {

                var correlations = exploration.correlations().map(
                    /**
                     *
                     * @param {Correlation} correlation
                     */
                    function (correlation) {
                        return correlationToJson(correlation);
                    });

                return correlations;
            }


            /**
             *
             * @param {Array.<>} correlationsArrayInJson
             * @returns {Array.<Correlation>}
             */
            function jsonToCorrelations(correlationsArrayInJson) {

                /**
                 *
                 * @type {Array.<Correlation>}
                 */
                var correlations = [];

                for (var i = 0; i < correlationsArrayInJson.length; i++) {
                    var correlationInJson = correlationsArrayInJson[i];
                    correlations.push(jsonToCorrelation(correlationInJson));
                }

                return correlations;
            }


            /**
             *
             * @param {Exploration} exploration
             */
            function conditionsToJson(exploration) {

                var conditionsMatching = exploration.conditionsMatching();
                var conditions = exploration.conditions().map(
                    /**
                     *
                     * @param {Condition} condition
                     */
                    function (condition) {
                        return conditionToJson(condition);
                    });

                var conditionsInJson =
                {
                    matching: conditionsMatching,
                    conditions: conditions
                };
                return conditionsInJson;
            }


            /**
             *
             * @param {Array.<>} conditionsArrayInJson
             * @returns {Array.<Condition>}
             */
            function jsonToConditions(conditionsArrayInJson) {

                /**
                 *
                 * @type {Array.<Condition>}
                 */
                var conditions = [];

                for (var i = 0; i < conditionsArrayInJson.length; i++) {
                    var conditionInJson = conditionsArrayInJson[i];
                    conditions.push(jsonToCondition(conditionInJson));
                }


                return conditions;
            }


            /**
             *
             * @param {Correlation} correlation
             */
            function correlationToJson(correlation) {

                var operand1 = operandToJson(correlation.operand1);
                var operand2 = operandToJson(correlation.operand2);

                var correlationInJson =
                {
                    first: operand1,
                    second: operand2
                };

                return correlationInJson;
            }


            /**
             *
             * @param correlationInJson
             * @returns {Correlation}
             */
            function jsonToCorrelation(correlationInJson) {

                var correlation = new Correlation(
                    jsonToOperand(correlationInJson.first),
                    operations.EQ,
                    jsonToOperand(correlationInJson.second)
                );
                return correlation;
            }


            /**
             *
             * @param {Condition} condition
             */
            function conditionToJson(condition) {

                var operation = condition.operation;
                var operand1 = operandToJson(condition.operand1);
                var operand2 = operandToJson(condition.operand2);

                var conditionInJson =
                {
                    operation: operation,
                    operands: {
                        first: operand1,
                        second: operand2
                    }
                };

                return conditionInJson;
            }


            /**
             *
             * @param conditionInJson
             * @returns {Condition}
             */
            function jsonToCondition(conditionInJson) {

                var condition = new Condition(
                    jsonToOperand(conditionInJson.operands.first),
                    conditionInJson.operation,
                    jsonToOperand(conditionInJson.operands.second)
                );
                return condition;
            }


            /**
             *
             * @param {Operand} operand
             */
            function operandToJson(operand) {

                var operandInJson;

                if (operand.type == operandTypes.VALUE) {
                    operandInJson = operand.value;

                } else if (operand.type == operandTypes.FIELD) {

                    if (operand.field instanceof AggregatedField) {
                        operandInJson = aggregatedFieldToJson(operand.field);

                    } else if (operand.field instanceof Field) {
                        operandInJson = fieldToJson(operand.field);
                    }
                }

                return operandInJson;

            }


            /**
             *
             * @param operandInJson
             * @returns {Operand}
             */
            function jsonToOperand(operandInJson) {

                if (operandInJson.fieldName && operandInJson.sourceName) {
                    return new Operand(operandTypes.FIELD, null, jsonToField(operandInJson), null);
                }

                if (operandInJson.function && operandInJson.sourceField) {
                    return new Operand(
                        operandTypes.FIELD,
                        null,
                        new AggregatedField(jsonToField(operandInJson.sourceField), operandInJson.function)
                    );
                }

                return new Operand(operandTypes.VALUE, operandInJson, null);
            }


            /**
             *
             * @param {SelectedFields} groupByFields
             */
            function groupByToJson(groupByFields) {

                var groupByToJson_ = [];
                groupByFields.forEach(
                    /**
                     *
                     * @param {SelectedField} selectedField
                     */
                    function (selectedField) {

                        if (selectedField.selected) {
                            groupByToJson_.push(fieldToJson(selectedField.field));
                        }

                    });
                return groupByToJson_;
            }

            /**
             *
             * @param {Array.<>} fieldsArrayInJson
             * @returns {Array.<SelectedField>}
             */
            function jsonToGroupByFields(fieldsArrayInJson) {

                /**
                 *
                 * @type {Array.<SelectedField>}
                 */
                var fields = [];
                for (var i = 0; i < fieldsArrayInJson.length; i++) {
                    fields.push(new SelectedField(jsonToField(fieldsArrayInJson[i]), true));
                }


                return fields;
            }


            /**
             * convert info about new Event Type into backend format (Table Columns in Live output stream)
             * @see Exploration.java Map<String, Operand> producedEventTypeMapping,
             * where Map<String is field alias, Operand is Event Field >
             *
             * @param {EventTypeField[]} fieldsForEventType
             */
            function fieldsForEventTypeToProducedEventTypeMapping(fieldsForEventType) {

                var eventTypeInJson = {}; //
                fieldsForEventType.forEach(
                    /**
                     *
                     * @param {EventTypeField} eventTypeField
                     */
                    function (eventTypeField) {

                        if (eventTypeField.visible) {
                            if (eventTypeField.field instanceof AggregatedField) {
                                eventTypeInJson[eventTypeField.alias] = aggregatedFieldToJson(eventTypeField.field);

                            } else if (eventTypeField.field instanceof Field) {
                                eventTypeInJson[eventTypeField.alias] = fieldToJson(eventTypeField.field);
                            } else if (eventTypeField.field instanceof ConstantField) {
                                eventTypeInJson[eventTypeField.alias] = constantFieldToJson(eventTypeField.field);
                            } else if (eventTypeField.field instanceof PatternField) {
                                eventTypeInJson[eventTypeField.alias] = patternFieldToJson(eventTypeField.field);
                            }
                        }

                    });
                return eventTypeInJson;
            }


            /**
             *
             * @param {Object} producedEventTypeMapping
             * @see Exploration.java Map<String, Operand> producedEventTypeMapping,
             * where Map<String is field alias, Operand is Event Field >
             *
             * @returns {Array.<EventTypeField>}
             */
            function producedEventTypeMappingToFieldsForEventType(producedEventTypeMapping) {

                /**
                 *
                 * @type {Array.<EventTypeField>}
                 */
                var fieldsForEventType = [];
                if (producedEventTypeMapping) {
                    for (var alias in producedEventTypeMapping) {
                        if (producedEventTypeMapping.hasOwnProperty(alias)) {
                            var eventTypeField = jsonToEventTypeField(alias, producedEventTypeMapping[alias], true);
                            fieldsForEventType.push(eventTypeField);
                        }
                    }
                }
                return fieldsForEventType;
            }

            /**
             *
             * @param {string} alias
             * @param eventTypeFieldInJson
             * @param {boolean} visible
             * @returns {EventTypeField}
             */
            function jsonToEventTypeField(alias, eventTypeFieldInJson, visible) {

                if (eventTypeFieldInJson.fieldName && eventTypeFieldInJson.sourceName) {
                    return new EventTypeField(
                        alias,
                        jsonToField(eventTypeFieldInJson),
                        visible
                    );
                }

                if (eventTypeFieldInJson.function && eventTypeFieldInJson.sourceField) {
                    return new EventTypeField(
                        alias,
                        new AggregatedField(jsonToField(eventTypeFieldInJson.sourceField), eventTypeFieldInJson.function),
                        visible
                    );
                }

                return new EventTypeField(
                    alias,
                    new ConstantField(
                        alias,
                        FieldType.getFieldTypeByName(FieldType.TYPES.string),
                        eventTypeFieldInJson
                    ),
                    visible
                );
            }


            /**
             * convert info about new Event Type into backend format (Table Columns in Live output stream)
             * @see Exploration.java outputColumns
             *
             * fieldsForEventType : consists all eligible fields for SELECT statement in query
             * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
             *
             *
             * @param {EventTypeField[]} fieldsForEventType
             *
             * @returns {
             * {
             * name: string,
             * operand: Field,
             * visible : boolean
             * }[]
             * }  - outputColumns
             */
            function fieldsForEventTypeToOutputColumns(fieldsForEventType) {

                var outputColumnsInJson = [];
                fieldsForEventType.forEach(
                    /**
                     *
                     * @param {EventTypeField} eventTypeField
                     */
                    function (eventTypeField) {

                        if (eventTypeField.field instanceof AggregatedField) {
                            outputColumnsInJson.push(
                                {
                                    alias: eventTypeField.alias,
                                    operand: aggregatedFieldToJson(eventTypeField.field),
                                    visible: eventTypeField.visible,
                                    type: eventTypeField.field.type.name
                                });
                        }
                        else if (eventTypeField.field instanceof Field) {
                            outputColumnsInJson.push(
                                {
                                    alias: eventTypeField.alias,
                                    operand: fieldToJson(eventTypeField.field),
                                    visible: eventTypeField.visible,
                                    type: eventTypeField.field.type.name
                                });
                        }
                        else if (eventTypeField.field instanceof ConstantField) {
                            outputColumnsInJson.push(
                                {
                                    alias: eventTypeField.alias,
                                    operand: constantFieldToJson(eventTypeField.field),
                                    visible: eventTypeField.visible,
                                    type: eventTypeField.field.type.name
                                });
                        }
                        else if (eventTypeField.field instanceof PatternField) {
                            outputColumnsInJson.push(
                                {
                                    alias: eventTypeField.alias,
                                    operand: patternFieldToJson(eventTypeField.field),
                                    visible: eventTypeField.visible,
                                    type: eventTypeField.field.type.name
                                });
                        }
                    }
                );

                return outputColumnsInJson;
            }


            /**
             *
             * @see Exploration.java: outputColumns
             *
             * @param  {
             * {
             * name: string,
             * operand: Field,
             * visible : boolean
             * type : string
             * }[]
             * } - outputColumnsInJson
             *
             *
             * @returns {Array.<EventTypeField>}
             */
            function outputColumnsToFieldsForEventTypeForPatternBasedExploration_(outputColumnsInJson) {

                /**
                 *
                 * @type {Array.<EventTypeField>}
                 */
                var fieldsForEventType = [];
                if (outputColumnsInJson) {
                    for (var i = 0; i < outputColumnsInJson.length; i++) {
                        var outputColumnInJson = outputColumnsInJson[i];
                        fieldsForEventType.push(
                            outputColumnToEventTypeFieldForPatternBasedExploration(
                                outputColumnInJson.alias,
                                outputColumnInJson.operand,
                                outputColumnInJson.type,
                                outputColumnInJson.visible
                            )
                        );
                    }
                }
                return fieldsForEventType;
            }


            /**
             *
             * @param {string} alias
             * @param {json |Object } eventTypeFieldInJson
             * @param {json |Object } producedEventTypeFields
             * @param {boolean} visible
             * @returns {EventTypeField}
             */
            function outputColumnToEventTypeFieldForPatternBasedExploration(alias, eventTypeFieldInJson, fieldType, visible) {

                if (eventTypeFieldInJson.fieldName && eventTypeFieldInJson.sourceName == null && fieldType) {
                    return new EventTypeField(
                        alias,
                        new PatternField(
                            eventTypeFieldInJson.fieldName,
                            eventTypeFieldInJson.sourceAlias,
                            FieldType.getFieldTypeByName(fieldType)
                        ),
                        visible
                    );
                }

                if (eventTypeFieldInJson.function && eventTypeFieldInJson.id && fieldType) {

                    var aggregatedPatternField = new PatternField(
                        eventTypeFieldInJson.id,
                        null,
                        FieldType.getFieldTypeByName(fieldType)
                    );
                    aggregatedPatternField.function = eventTypeFieldInJson.function;

                    return new EventTypeField(
                        alias,
                        aggregatedPatternField,
                        visible
                    );
                }

                return new EventTypeField(
                    alias,
                    new ConstantField(
                        alias,
                        FieldType.getFieldTypeByName(FieldType.TYPES.string),
                        eventTypeFieldInJson
                    ),
                    visible
                );
            }


            /**
             *
             * @see Exploration.java: outputColumns
             *
             * @param  {
             * {
             * name: string,
             * operand: Field,
             * visible : boolean
             * }[]
             * } - outputColumnsInJson
             *
             *
             * @returns {Array.<EventTypeField>}
             */
            function outputColumnsToFieldsForEventType(outputColumnsInJson) {

                /**
                 *
                 * @type {Array.<EventTypeField>}
                 */
                var fieldsForEventType = [];
                if (outputColumnsInJson) {
                    for (var i = 0; i < outputColumnsInJson.length; i++) {
                        var outputColumnInJson = outputColumnsInJson[i];
                        fieldsForEventType.push(
                            jsonToEventTypeField(
                                outputColumnInJson.alias,
                                outputColumnInJson.operand,
                                outputColumnInJson.visible
                            )
                        );
                    }
                }
                return fieldsForEventType;
            }


            /**
             *
             * @param {Exploration} exploration
             */
            function summariesToJson(exploration) {

                var summariesInJson = []; //to fill java: Map<String, Operand> producedEventTypeMapping
                exploration.summaries().forEach(
                    /**
                     *
                     * @param {Summary} summary
                     */
                    function (summary) {
                        summariesInJson.push(aggregatedFieldToJson(summary.aggregatedField));

                    });
                return summariesInJson;
            }


            /**
             *
             * @param {{}} producedEventTypeMapping -see Exploration.java: Map<String, Operand> producedEventTypeMapping
             * @returns {Array.<Summary>}
             */
            function jsonToSummaries(producedEventTypeMapping) {

                /**
                 *
                 * @type {Array.<Summary>}
                 */
                var summaries = [];

                if (producedEventTypeMapping) {

                    for (var key in producedEventTypeMapping) {
                        if (producedEventTypeMapping.hasOwnProperty(key)) {
                            var aggregatedFieldOperand = jsonToOperand(producedEventTypeMapping[key]);
                            if (aggregatedFieldOperand.type == operandTypes.FIELD && aggregatedFieldOperand.field instanceof AggregatedField) {

                                var sourceField = jsonToField(producedEventTypeMapping[key].sourceField);
                                var summaryOperand = new Operand(operandTypes.FIELD, null, sourceField);
                                summaries.push(new Summary(summaryOperand, aggregatedFieldOperand.field));
                            }
                        }
                    }
                }
                return summaries;
            }


            /**
             *
             * @param {Field[]} fields
             */
            function fieldsToJson(fields) {

                var groupByFieldsInJson = fields.map(
                    /**
                     *
                     * @param {Field} field
                     */
                    function (field) {
                        return fieldToJson(field);
                    });


                return groupByFieldsInJson;
            }


            /**
             *
             * @param {Array.<>} fieldsArrayInJson
             * @returns {Array.<Field>}
             */
            function jsonToFields(fieldsArrayInJson) {

                /**
                 *
                 * @type {Array.<Field>}
                 */
                var fields = [];
                for (var i = 0; i < fieldsArrayInJson.length; i++) {
                    fields.push(jsonToField(fieldsArrayInJson[i]));
                }


                return fields;
            }


            /**
             *
             * @param {ConstantField} field
             */
            function constantFieldToJson(field) {

                var fieldInJson =
                {
                    value: Utils.ifValueIsNumericConvertToNumber(field.value)
                };

                return fieldInJson;
            }


            /**
             *
             * @param {Field} field
             */
            function fieldToJson(field) {

                var fieldInJson =
                {
                    sourceName: field.source.name,
                    fieldName: field.name
                };

                return fieldInJson;
            }


            /**
             *
             * @param {PatternField} patternField
             */
            function patternFieldToJson(patternField) {

                var fieldInJson;

                if (patternField.function) {
                    fieldInJson = {
                        id: patternField.name,
                        function: patternField.function,
                        sourceField: null
                    };
                } else {
                    fieldInJson =
                    {
                        sourceName: null,
                        sourceAlias: patternField.sourceAlias,
                        fieldName: patternField.name
                    };
                }


                return fieldInJson;
            }


            /**
             *
             * @param fieldInJson
             * @returns {Field}
             */
            function jsonToField(fieldInJson) {

                /**
                 *
                 * @type {EventSource}
                 */
                var source = sourceStorage.getSourceBySourceId(fieldInJson.sourceName);
                var sourceFields = source.fields;

                for (var i = 0; i < sourceFields.length; i++) {
                    var field_ = sourceFields[i];
                    if (field_.name == fieldInJson.fieldName) {
                        return field_;
                    }
                }
                NotificationUtils.failedToLoadExplorationBecauseOfFieldsMissingInSource(source.displayName || source.name, fieldInJson.fieldName);
                
                //alert(Utils.toString("Failed to convert jsonToField :", JSON.stringify(fieldInJson)));
                return null;
            }


            /**
             *
             * @param aggregateFunction
             * @param {AggregatedField} field
             */
            function aggregatedFieldToJson(field) {

                var fieldInJson =
                {
                    function: field.aggregateFunction,
                    sourceField: fieldToJson(field)
                };

                return fieldInJson;
            }

            /**
             *
             * @param {PatternThing} pattern
             * @returns {*}
             */
            function patternToJson(pattern) {
                return pattern.getPlainData();
            }

            /**
             *
             * @param explorationInJson
             * @returns {Object}
             */
            function jsonToPattern(explorationInJson) {

                if (explorationInJson.pattern) {
                    return new PatternThing(explorationInJson.pattern);
                }

                return null;
            }


            /**
             *
             * @param {PatternThing} pattern
             * @returns {{typeName: *}}
             */
            function patternParametersToJson(pattern) {
                var patternParametersInJson = {
                    typeName: pattern.name
                        ? (ko.isObservable(pattern.name)
                        ? pattern.name()
                        : pattern.name)
                        : null
                };

                var parameters = {};
                $.each(pattern.parameters(), function (index, parameter) {
                    switch (parameter.type()) {
                        case PatternParameter.TYPE.interval:
                        case PatternParameter.TYPE.range:
                            parameters[parameter.name()] = {
                                value: parameter.valueValue(),
                                unit: parameter.unitValue()
                            };
                            break;
                        default:
                            parameters[parameter.name()] = parameter.value();
                    }
                });

                patternParametersInJson.parameters = parameters;

                console.log('PATTERN_TO_JSON', patternParametersInJson);
                return patternParametersInJson;
            }


            /**
             * method only for Pattern based Exploration
             *
             * @param {Object} possibleOutputColumns  - contains all possible pattern fields for Event Type
             * changes in pattern exploration can change possible pattern fields
             * generated by pattern-based exploration logic
             *
             * @param {Array} outputColumns  - all fields for EventType,  with visible property, all visible fields come to EventType
             * stored in database - its usually keep state of user selection in Table Properties
             *
             * changes in pattern exploration can change possible pattern fields
             * so we should match possibleOutputColumns and outputColumns stored in database
             *
             * @see Exploration.java       producedEventType
             *
             *
             * @returns {EventTypeField[]}
             */
            this.outputColumnsToFieldsForEventTypeForPatternBasedExploration = function (outputColumns, possibleOutputColumns) {
                /**
                 *
                 * @type {EventTypeField[]}
                 */
                var fieldsForEventType = [];


                if (outputColumns.length === 0) {   //outputColumns not filled, it happens when we create new Pattern based exploration
                    fieldsForEventType = outputColumnsToFieldsForEventTypeForPatternBasedExploration_(possibleOutputColumns);

                } else {
                    fieldsForEventType = outputColumnsToFieldsForEventTypeForPatternBasedExploration_(outputColumns);
                    var possibleFieldsForEventType = outputColumnsToFieldsForEventTypeForPatternBasedExploration_(possibleOutputColumns);
                    fieldsForEventType = matchPossibleOutputColumnsWithFieldsForEventType(possibleFieldsForEventType, fieldsForEventType);

                }

                return fieldsForEventType;
            };


            /**
             *
             * changes in pattern based exploration parameters can affect possible pattern fields for Event Type
             * for example : Detect Dublicate Pattern : changes in 'Dublicate Key' parameter will affect  pattern fields for Event Type
             *
             * @param {Object} newAvailableFieldsForEventType  - contains all possible pattern fields for Event Type
             * @param {} oldFieldsForEventType
             *
             * @returns {EventTypeField[]}
             */
            function matchPossibleOutputColumnsWithFieldsForEventType(newAvailableFieldsForEventType, oldFieldsForEventType) {
                /**
                 *
                 * @type {EventTypeField[]}
                 */
                var fieldsForEventType = [];
                var patternFieldIdsInEventTypeFields = [];

                // remain only valid fields from oldFieldsForEventType
                for (var i = 0; i < oldFieldsForEventType.length; i++) {
                    if (containsByEqualsWithoutAlias(newAvailableFieldsForEventType, oldFieldsForEventType[i])
                        || oldFieldsForEventType[i].field instanceof ConstantField
                    ) {
                        fieldsForEventType.push(oldFieldsForEventType[i]);
                    }
                }

                //add new pattern fields
                for (var j = 0; j < newAvailableFieldsForEventType.length; j++) {
                    if (!containsByEqualsWithoutAlias(oldFieldsForEventType, newAvailableFieldsForEventType[j])) {
                        fieldsForEventType.push(newAvailableFieldsForEventType[j]);
                        newAvailableFieldsForEventType[j].visible = true;
                    }
                }

                return fieldsForEventType;
            }

            /**
             *
             * @param {EventTypeField } field
             * @param {EventTypeField[] } fields
             * @returns {boolean}
             */
            function containsByEqualsWithoutAlias(fields, field) {
                for (var i = 0; i < fields.length; i++) {
                    if (fields[i].equalsWithoutAlias(field)) {
                        return true;
                    }
                }
                return false;
            }

            /**
             * @param {string} fieldId
             * @param {String[]} patternFieldIdsInEventTypeFields
             *
             * @returns {boolean}
             */
            function isFieldInEventTypeFields(fieldId, patternFieldIdsInEventTypeFields) {
                return patternFieldIdsInEventTypeFields.indexOf(fieldId) != -1;
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationConverter}
         */
        ExplorationConverter.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationConverter();
            }
            return this.instance;
        };


        return ExplorationConverter;

    }
)
;
