/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
 * Date: 12/3/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Exploration', [
        'knockout',
        'ConditionsMatching',
        'ExplorationActions',
        'Utils'
    ],
    /**
     * @exports exploration/model
     * @version 1.0
     */
    function (ko, ConditionsMatching, ExplorationActions, Utils) {

        /**
         *
         * @class
         * @classdesc  Exploration  - ui representative for OEP application == OEP Application info (CQL query, sources), + UI metadata( tags, description...)
         *
         * @constructor
         * @param {String} name
         * @param {String} displayName
         * @param {String} createdBy
         * @param {int} createdAt
         * @param {String} updatedBy
         * @param {int} updatedAt
         * @param {String} description
         * @param {String[]} attachedTagNames
         * @param {EventSource[]} sources
         * @param {EventSource[]} conditions
         * @param {ConditionsMatching} conditionsMatching
         * @param {Correlation[]} correlations
         * @param {Summaries[]} summaries
         * @param {Field[]} groupBy
         * @param {EventTypeField[]} fieldsForEventType
         * @param {Object[]} targets
         * @param {boolean} isPublished
         * @param {boolean} isPatternBasedExploration
         * @param {PatternThing} pattern
         * @param {string} typeName
         * @param {Object} patternParameters
         *
         */
        function Exploration(name, displayName, createdBy, createdAt, updatedBy, updatedAt, description, attachedTagNames, sources, conditions, conditionsMatching, correlations, summaries, groupBy, fieldsForEventType, targets, pubSubChannelName, originalVersion, actions, isPatternBasedExploration, pattern, typeName, patternParameters) {


            var self = this;

            /**
             * Exploration id, if  Exploration is new(not deployed yet)  -this field is empty,
             * Exploration Editor functionality availability depends on new/deployed state
             */
            this.name = ko.observable(name || "");

            /**
             * if  Exploration is new(not deployed yet)
             */
            this.isNewExploration = ko.computed(function () {
                return this.name() == null || this.name().length === 0;
            }, this);


            self.displayName = ko.observable(displayName || "");
            this.isDisplayNameReadMode = ko.observable(true);
            this.displayNameEditor = ko.computed({
                read: function () {
                    return this.displayName();
                },
                write: function (value) {
                    value = Utils.removeNonAsciiSymbols(value).trim();
                    value = Utils.cutStringIfMoreCharactersThan(value, 250).trim();

                    if (value) {
                        this.displayName(value);
                        this.displayName.valueHasMutated();
                    }
                },
                owner: this
            }).extend({notify: 'always'});

            this.createdBy = createdBy || '';
            this.createdAt = createdAt || new Date().getTime();

            this.updatedBy = ko.observable(updatedBy || '');
            this.updatedAt = ko.observable(updatedAt || new Date().getTime());

            this.description = ko.observable(description || "");
            this.attachedTagNames = ko.observableArray(attachedTagNames || []);

            /**
             * @type {EventSource[] | ko.observableArray}
             */
            this.sources = ko.observableArray(sources || []);

            /**
             * @type {Correlation[] | ko.observableArray}
             */
            this.correlations = ko.observableArray(correlations || []);
            /**
             * restrict Windows Ranges in WindowsDrawer
             * @see WindowsController
             */
            this.isCorrelationsContainsDBSource = ko.observable(false);

            /**
             * @type {Condition[] | ko.observableArray}
             */
            this.conditions = ko.observableArray(conditions || []);

            /**
             * @type {ConditionsMatching.ConditionsMatching | ko.observable}
             */
            this.conditionsMatching = ko.observable(conditionsMatching || ConditionsMatching.ConditionsMatching.ALL);
            this.isFiltersMatchingReadMode = ko.observable(true);


            /**
             * @type {Summary[] | ko.observableArray}
             */
            this.summaries = ko.observableArray(summaries || []);

            /**
             * consists all eligible fields for group by statement
             * all fields in them that marked as @see SelectedField.selected=true - go to groupByStatement
             *
             * @type {SelectedField[] | ko.observableArray}
             */
            this.groupBy = ko.observableArray(groupBy || []);


            /**
             * consists all eligible fields for SELECT statement in query
             * all fields in them that marked as @see EventTypeField.visible=true - go to eventType(select statement)
             *
             * @type {EventTypeField[] | ko.observableArray}
             */
            this.fieldsForEventType = ko.observableArray(fieldsForEventType || []);


            /**
             * Explorations can publish their output results to targets
             */
            this.targets = ko.observableArray(targets || []);


            this.pubSubChannelName = pubSubChannelName || null;
            this.originalVersion = originalVersion || null;

            /**
             *
             * @type {ExplorationActions}
             */
            this.actions = actions || new ExplorationActions();


            /**
             * @type {Query[] | ko.observableArray}
             */
            this.queries = ko.observable([]).extend({notify: 'always'});

            /**
             * in Sx we show users results from only one Query in exploration
             * Exploration can have multiple queries, if not enough correlation(join) rules for exploration sources
             * @type {Query| ko.observable}
             * */
            this.primaryQuery = ko.observable(null).extend({notify: 'always'});


            /**
             *
             * @type {PatternThing}
             */
            this.pattern = pattern || null;

            this.typeName = typeName || Utils.EXPLORATION_TYPE_NAME;
            this.patternParameters = patternParameters || null;
            this.isPatternBasedExploration = isPatternBasedExploration || false;

        }

        /**
         *
         * @param {PatternThing} pattern
         * @returns {Exploration}
         */
        Exploration.prototype.setPattern = function (pattern) {
            if (pattern) {
                this.isPatternBasedExploration = true;
                this.pattern = pattern;
                this.typeName = pattern.name();
            } else {
                this.isPatternBasedExploration = false;
                this.pattern = null;
                this.typeName = Utils.EXPLORATION_TYPE_NAME;
                this.patternParameters = null;
            }

            return this;
        };

        return Exploration;
    });


