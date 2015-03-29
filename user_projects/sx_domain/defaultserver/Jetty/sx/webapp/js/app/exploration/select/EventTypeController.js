/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('EventTypeController', [
        'knockout',
        'ExplorationKoModel',
        'ExplorationUtils',
        'EventTypeField',
        'ConstantField',
        'FieldType',
        'QueryAnalyser',
        'Utils'
    ],

    /**
     * @exports exploration/select
     * @version 1.0
     */
    function (ko, ExplorationKoModel, ExplorationUtils, EventTypeField, ConstantField, FieldType, QueryAnalyser, Utils) {

        /**
         * @class
         * @classdesc methods for update EventType( cql Select statement columns), and validate incoming event by EventType
         * EventType is updated on  Query changes - changes in  @see Summaries, @see Correlation, @see EventSource, @see GroupByController
         * @constructor
         */
        function EventTypeController() {
            this.explorationKoModel = ExplorationKoModel.getInstance();
            this.exUtils = ExplorationUtils.getInstance();

            /**
             * consists all eligible fields for select statement in query
             * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
             *
             * @type {ko.observable | EventTypeField[]}
             */
            this.fieldsForEventType = null;

            /**
             * consists all eligible fields for select statement in query
             * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
             *
             * changed only on Exploration Deployment phase
             *
             * @type {EventTypeField[]}
             */
            this.deployedFieldsForEventType = [];

            /**
             *
             * only visible fields: fields in eventType(select statement)
             * @type {Array}
             */
            this.deployedEventType = [];

            /**
             * consists all eligible fields for select statement in query
             * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
             *
             * are changed by Table Properties component :
             * component changes : alias, visibility, order of fields (and value in ConstantField)
             * on press Done button changes applyed to { @see this.fieldsForEventType}
             *
             *
             * @see  VisualizationComponentsController.tablePropertiesMenu
             *
             * @type {EventTypeField[]}
             */
            this.fieldsEditedInTablePropertiesMenu = [];

        }


        /**
         *
         * @param {Exploration} exploration
         */
        EventTypeController.prototype.onOpenExplorationEditor = function () {


            var exploration = this.explorationKoModel.exploration();
            this.fieldsForEventType = exploration.fieldsForEventType;

            if (!exploration.isPatternBasedExploration) {
                var query = QueryAnalyser.getInstance().getFreshPrimaryQuery(exploration);
                if (query) {
                    var fieldsForEventType = this.getFieldsForEventType(query, exploration.fieldsForEventType());
                    exploration.fieldsForEventType(fieldsForEventType);
                }

                this.deployedFieldsForEventType = [];
                this.deployedEventType = [];
                this.fieldsEditedInTablePropertiesMenu = cloneEventTypeFields(this.fieldsForEventType());

            } else {
                saveFieldsForEventType.call(this, exploration.fieldsForEventType());

            }

        };

        EventTypeController.prototype.onCloseExplorationEditor = function () {

        };


        /**
         * join old and new fields to
         * keep previous eventType order
         * keep previous eventType visibility
         * for example we add additional summary field to query
         *
         * newAv    old                   fieldsForEventType
         * a        a                     a
         * k        b.visible = false     b.visible = false
         * b        l                     k
         * c                              c
         *
         * @param {EventTypeField[]} oldFieldsForEventType  - event type from previous deployment or event type from previous deployment changed in TableProperties
         * @param {EventTypeField[]} newAvailableFieldsForEventType  - if query changed, we can have new fields eligible for event type, for example we add/remove aggregation field
         * @param {boolean} isNewFieldsVisible - is newAvailableFieldsForEventType become part of EventType
         * @returns {EventTypeField[]}
         */
        function matchOldAndNewFields(oldFieldsForEventType, newAvailableFieldsForEventType, isNewFieldsVisible) {
            var fieldsForEventType = [];

            for (var i = 0; i < oldFieldsForEventType.length; i++) {
                if (containsByEqualsWithoutAlias(newAvailableFieldsForEventType, oldFieldsForEventType[i])
                    || oldFieldsForEventType[i].field instanceof ConstantField
                ) {
                    fieldsForEventType.push(oldFieldsForEventType[i]);
                }
            }
            for (var j = 0; j < newAvailableFieldsForEventType.length; j++) {
                if (!containsByEqualsWithoutAlias(oldFieldsForEventType, newAvailableFieldsForEventType[j])) {
                    fieldsForEventType.push(newAvailableFieldsForEventType[j]);
                    newAvailableFieldsForEventType[j].visible = isNewFieldsVisible;
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
         *
         * @param {Query} query
         * @returns {EventTypeField[]}
         */
        EventTypeController.prototype.getAvailableFieldsFromQuery = function (query) {
            /**
             *
             * @type {EventTypeField[]}
             */
            var availableFieldsForEventType = [];

            if (!query) {
                return availableFieldsForEventType;
            }

            var sources = query.sources;
            var summaries = query.summaries;
            var groupBy = query.groupBy;
            var correlations = query.correlations;


            var excludedCorrelationFields = [];
            for (var i = 0; i < correlations.length; i++) {
                var correlation = correlations[i];
                excludedCorrelationFields.push(correlation.operand2.field);
            }


            if (summaries.length || groupBy.length) {

                summaries.forEach(function (summary) {
                    var alias = summary.aggregatedField.defaultAlias;
                    availableFieldsForEventType.push(new EventTypeField(alias, summary.aggregatedField, true));
                });
                groupBy.forEach(function (groupByField) {
                    var alias = generateFieldUniqueAlias(groupByField.name, availableFieldsForEventType);
                    availableFieldsForEventType.push(new EventTypeField(alias, groupByField, true));
                });
            } else {
                sources.forEach(function (source) {
                    source.fields.forEach(function (field) {
                        var alias = generateFieldUniqueAlias(field.name, availableFieldsForEventType);
                        availableFieldsForEventType.push(new EventTypeField(alias, field, true));
                    });
                });

            }
            return availableFieldsForEventType;
        };

        /**
         *
         * @param {string} defaultAlias
         * @param {EventTypeField[]} eventTypeFields
         * @returns {number}
         */
        function generateFieldUniqueAlias(defaultAlias, eventTypeFields) {
            var howManyFieldsWithTheSameAlias_ = howManyFieldsWithTheSameAlias(defaultAlias, eventTypeFields);
            if (howManyFieldsWithTheSameAlias_ > 0) {
                return defaultAlias + "_" + howManyFieldsWithTheSameAlias_;
            }
            return defaultAlias;
        }

        /**
         *
         * @param {string} alias
         * @param {EventTypeField[]} eventTypeFields
         * @returns {number}
         */
        function howManyFieldsWithTheSameAlias(alias, eventTypeFields) {
            var howManyFieldsWithTheSameAlias_ = 0;
            for (var i = 0; i < eventTypeFields.length; i++) {
                if (alias == eventTypeFields[i].alias) {
                    howManyFieldsWithTheSameAlias_++;
                }
            }

            return howManyFieldsWithTheSameAlias_;
        }

        /**
         * consists all eligible fields for select statement in query
         * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
         *
         * @param {Query} query
         * @param {EventTypeField[]} oldFieldsForEventType
         * @returns {EventTypeField[]}
         */
        EventTypeController.prototype.updateFieldsForEventType = function (query, oldFieldsForEventType) {
            var availableFieldsForEventType = this.getAvailableFieldsFromQuery(query);
            return matchOldAndNewFields.call(this, oldFieldsForEventType, availableFieldsForEventType, true);
        };


        /**
         * consists all eligible fields for select statement in query
         * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
         *
         * @param {Query} query
         * @param {EventTypeField[]} oldFieldsForEventType
         * @returns {EventTypeField[]}
         */
        EventTypeController.prototype.getFieldsForEventType = function (query, oldFieldsForEventType) {
            var availableFieldsForEventType = this.getAvailableFieldsFromQuery(query);
            return matchOldAndNewFields.call(this, oldFieldsForEventType, availableFieldsForEventType, false);
        };


        /**
         * @param {EventTypeField[]} newFieldsForEventType
         */
        function saveFieldsForEventType(newFieldsForEventType) {
            this.fieldsForEventType(newFieldsForEventType);

            this.deployedFieldsForEventType = [];
            this.deployedEventType = [];
            for (var i = 0; i < newFieldsForEventType.length; i++) {
                var clonedField = newFieldsForEventType[i].clone();
                this.deployedFieldsForEventType.push(clonedField);
                if (newFieldsForEventType[i].visible) {
                    this.deployedEventType.push(clonedField);
                }
            }
            this.fieldsEditedInTablePropertiesMenu = cloneEventTypeFields(this.fieldsForEventType());

        }


        /**
         * @param {EventTypeField[]} fieldsForEventType
         * @returns {EventTypeField[]}
         */
        function cloneEventTypeFields(fieldsForEventType) {

            var clonedFieldsForEventType = [];
            for (var i = 0; i < fieldsForEventType.length; i++) {
                clonedFieldsForEventType.push(fieldsForEventType[i].clone());
            }
            return clonedFieldsForEventType;
        }


        EventTypeController.prototype.applyFieldsEditedInTablePropertiesMenu = function (fieldsEditedInTablePropertiesMenu) {
            if (this.isEventTypeChanged(this.fieldsForEventType(), fieldsEditedInTablePropertiesMenu)) {
                this.fieldsEditedInTablePropertiesMenu = fieldsEditedInTablePropertiesMenu;
                this.fieldsForEventType(this.fieldsEditedInTablePropertiesMenu);
                this.explorationKoModel.deployExplorationTrigger(true);
            }
        };


        /**
         *
         * @param {Exploration} patternExploration
         */
        EventTypeController.prototype.updatePatternExplorationEventType = function (fieldsForEventType) {
            saveFieldsForEventType.call(this, fieldsForEventType);
        };

        /**
         * returns false if EventType not changed  - if
         * @param {Query} query
         * @returns {boolean} -
         *
         */
        EventTypeController.prototype.updateEventType = function (query) {
            var updatedFieldsForEventType = this.updateFieldsForEventType(query, this.fieldsForEventType());
            if (this.isEventTypeChanged(updatedFieldsForEventType, this.deployedFieldsForEventType)) {
                console.log(" EventTypeUpdated ", "newEventType", updatedFieldsForEventType, "oldEventType:", this.deployedFieldsForEventType);
                saveFieldsForEventType.call(this, updatedFieldsForEventType);
                return true;
            }

            return false;
        };

        /**
         *
         * @param {EventTypeField[]} newEventType
         * @param {EventTypeField[]} oldEventType
         * @returns {boolean}
         */
        EventTypeController.prototype.isEventTypeChanged = function (newEventType, oldEventType) {
            if (oldEventType.length !== newEventType.length) {
                return true;
            }
            for (var i = 0; i < newEventType.length; i++) {
                if (!newEventType[i].equalsWithVisible(oldEventType[i])) {
                    return true;
                }
            }
            return false;
        };

        EventTypeController.prototype.isFieldsForEventTypeFilled = function () {
            return this.deployedEventType.length > 0;
        };

        /**
         *
         * validate incoming event by current eventType
         * we have to do it, because oep application redeployment executed async,
         * so we can get old events some time after redeployment( from previous version of exploration query)
         *
         * @param event
         * @returns {null | event} -return null if eventType not matched
         */
        EventTypeController.prototype.checkAndConvertEvent = function (event) {
            var eventFields = event.value;
            var eventFieldKeys = Object.keys(eventFields);

            if (eventFieldKeys.length !== this.deployedEventType.length) {
                console.warn(this.deployedEventType, "- event type length does not match incoming event: ", eventFields);
                return null;
            }

            for (var i = 0; i < eventFieldKeys.length; i++) {//field existence, and order
                if (eventFields[this.deployedEventType[i].alias] === undefined) {
                    //todo validate order
//                if (eventFieldKeys[i] != eventType[i].alias || eventFields[eventType[i].alias] === undefined) {
                    console.warn(this.deployedEventType[i].alias, "- event type field not match incoming event field: ", eventFieldKeys[i]);
                    return null;  //type not matched

                } else {
                    if (this.deployedEventType[i].field.type.name === FieldType.TYPES.timestamp) {  ///convert time
                        eventFields[this.deployedEventType[i].alias] = new Date(eventFields[this.deployedEventType[i].alias]);
                    }
                }
            }
            //add SERVER_TIMESTAMP field
            eventFields[this.exUtils.SERVER_TIMESTAMP] = Math.floor(event.timestamp * this.exUtils.NANOSECONDS_TO_MILLISECONDS_MULTIPLIER);

            return event;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {EventTypeController}
         */
        EventTypeController.getInstance = function () {
            if (!this.instance) {
                this.instance = new EventTypeController();
            }
            return this.instance;
        };


        return EventTypeController;

    });
