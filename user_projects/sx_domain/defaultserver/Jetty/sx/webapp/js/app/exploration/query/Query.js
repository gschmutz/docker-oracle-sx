/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Query', [
    'knockout',
    'ConditionsMatching'
],

    /**
     * @exports exploration/query
     * @version 1.0
     */
        function (ko, ConditionsMatching) {

        /**
         * @class
         * @classdesc  cql query representation - Exploration can have many queries, if
         * exploration has multiple sources, and not enough correlations between them (join clauses)
         *
         * @constructor
         */
        function Query() {

            /**
             *
             * @type {EventSource[]}
             */
            this.sources = []; //all sources in Query should be binded by correlations


            /**
             *
             * @type {Fields[]}
             */
            this.fields = []; //all fields from Query  sources

            /**
             *
             * @type {Array<Correlation>}
             */
            this.correlations = [];

            /**
             *
             * @type {Array<Condition>}
             */
            this.conditions = [];

            /**
             *
             * @type {ConditionsMatching}
             */
            this.conditionsMatching = ConditionsMatching.ConditionsMatching.ALL; //default

            /**
             *
             * @type {Array<Summaries>}
             */
            this.summaries = [];

            /**
             *
             * @type {Array<Field>}
             */
            this.groupBy = [];

        }

        return Query;

    });


