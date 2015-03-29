/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('GroupByController', [
        'jquery',
        'knockout',
        'Summary',
        'Operand',
        'AggregatedField',
        'Utils',
        'ExplorationUtils',
        'ClauseController',
        'QueryDependenciesController',
        'QueryAnalyser',
        'AggregateFunctions',
        'ExplorationFieldsController',
        'GroupByModel',

        'select2',
        'knockout-sortable'
    ],

    /**
     * @exports exploration/summaries
     * @ignore
     */
        function ($, ko, Summary, Operand, AggregatedField, Utils, ExplorationUtils, ClauseController, QueryDependenciesController, QueryAnalyser, AggregateFunctions, ExplorationFieldsController, GroupByModel) {


        /**
         * @class
         * @classdesc - groupby Editor component in Summaries box
         *
         * @constructor
         */
        function GroupByController() {
            this.exUtils = ExplorationUtils.getInstance();
            this.groupByModel = GroupByModel.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;

        }


        /**
         *
         * @param {Exploration} exploration
         */
        GroupByController.prototype.onOpenExplorationEditor = function (exploration) {

            this.groupByModel.onOpenExplorationEditor();

            this.loadGroupByHtml();
            var groupByContent = $(this.exUtils.groupByContent);
            Utils.translateJqueryElement(groupByContent);
            ko.applyBindings(this.groupByModel, groupByContent[0]);
            this.addExitFromEditModeWhenFocusOutListener(groupByContent);


        };

        GroupByController.prototype.onCloseExplorationEditor = function () {
            this.groupByModel.onCloseExplorationEditor();

        };

        GroupByController.prototype.loadGroupByHtml = function () {
            var groupByContainer = $(this.exUtils.groupByContainer);
            groupByContainer.append(this.exUtils.groupByContainerPattern);

        };


        /**
         * exit edit Mode when focusOut
         * @param condition
         */
        GroupByController.prototype.addExitFromEditModeWhenFocusOutListener = function (container) {
            var self = this;
            container.focusout(
                function (evt) {
                    evt.preventDefault();

                    setTimeout(
                        $.proxy(function () {            //switch off to edit mode
                            var activeElement = document.activeElement;
//                            console.log("activeElement: ", activeElement);
                            if (activeElement !== null
                                && !container.is(activeElement)//not  container
                                && container.has(activeElement).length === 0  //not internal element
                                ) {
                                self.groupByModel.isGroupByInReadMode(true);
                            }
                        }, self), 20
                    )
                    ;
                }
            )
            ;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {GroupByController}
         */
        GroupByController.getInstance = function () {
            if (!this.instance) {
                this.instance = new GroupByController();
            }
            return this.instance;
        };


        return GroupByController;

    }
)
;
