/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('ExplorationKoModel', [
        'knockout',
        'Condition',
        'Correlation',
        'Summary',
    ],

    /**
     * @exports exploration/controller
     * @ignoer
     */
    function (ko, Condition, Correlation, Summary) {

        /**
         * @class
         * @classdesc knockout based, exploration observable model
         * incapsulate and manage all observable variables(notificators) for exploration functionality
         * @constructor
         */
        function ExplorationKoModel() {

            var self = this;

            /**
             * current exploration in Exploration Editor
             * @type {ko.observable | Exploration}
             * */
            this.exploration = ko.observable(null);

            /**
             * @see EditedRegion
             */
            this.currentEditedRegion = ko.observable(null);

            /**
             * @type {ko.observable | Condition |Correlation |Summary}
             */
            this.currentEditedClause = ko.observable(null);

            this.isFiltersInEditMode = ko.computed(function () {
                var clause = self.currentEditedClause();
                if (clause && clause instanceof Condition && !(clause instanceof Correlation)) {
                    return true;
                }
                return false;

            }, this);


            this.isSummariesInEditMode = ko.computed(function () {
                var clause = self.currentEditedClause();
                if (clause && clause instanceof Summary) {
                    return true;
                }
                return false;

            }, this);

            this.isGroupByInReadMode = ko.observable(true);
            this.groupBySelectedFieldsCount = ko.observable(0);


            this.isCorrelationsInEditMode = ko.computed(function () {
                var clause = self.currentEditedClause();
                if (clause && clause instanceof Correlation) {
                    return true;
                }
                return false;

            }, this);

            /**
             * deploy Exploration notificator
             * notify that Exploration query was changed and Exploration should be redeployed (autoDeploy)
             *
             * used in clauses:
             * sources
             * windows (range, slide partitionBy)
             * correlations
             * summaries
             * groupBy
             * filters
             * tableProperties {@see EventTypeController}
             * targets
             * exploration info
             * exploration displayName
             *
             * @see DeployerController
             *
             * @type {ko.observable | boolean}
             */
            this.deployExplorationTrigger = ko.observable(true).extend({notify: 'always'});

            /**
             *
             * @type {ko.observable | Notifications.MessageModel}
             */
            this.notCorrelatedSourcesMessage = ko.observable(null);


            /**
             *
             * @type {ko.observable | Notifications.MessageModel}
             */
            this.fieldsForEventTypeIsEmptyMessage = ko.observable(null);

            /**
             *
             * @type {ko.observable | Notifications.MessageModel}
             */
            this.evaluationFrequencyShouldBeNoLongerThanRange = ko.observable(null);


            /**
             *
             * when user made changes in new Exploration,
             * autoDeploy react on changes and  can send two createExploration requests
             * when used made changes but the first createExploration request is not finished yet(responce from backend)
             *
             * this variable solves such problem
             *
             * @type {boolean}
             */
            this.isCreateExplorationRequestInProgress = false;

            /**
             *
             * @param {Exploration} exploration
             */
            this.update = function (exploration) {
                this.exploration(exploration);
            };

            /**
             * reset
             */
            this.resetExplorationKoModel = function () {
                this.exploration(null);
                this.currentEditedRegion(null);
                this.currentEditedClause(null);
                this.isGroupByInReadMode(true);
                this.isCreateExplorationRequestInProgress = false;
            };


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationKoModel}
         */
        ExplorationKoModel.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationKoModel();
            }
            return this.instance;
        };


        return ExplorationKoModel;

    });
