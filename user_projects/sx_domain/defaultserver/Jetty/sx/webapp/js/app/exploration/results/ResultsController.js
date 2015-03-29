/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ResultsController', [
        'jquery',
        'knockout',
        'ExplorationKoModel',
        'ExplorationUtils',
        'VisualizationComponentsController',
        'SubscriberCometd',
        'QueryAnalyser'
    ],
    /**
     * @exports exploration/results
     * @version 1.0
     */
        function ($, ko, ExplorationKoModel, ExplorationUtils, VisualizationComponentsController, SubscriberCometd, QueryAnalyser) {

        /**
         *
         * @class
         * @classdesc create exploration results visualization ccmponents and rebuild them on exploration query changes
         *
         * @constructor
         */
        function ResultsController() {

            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = ExplorationKoModel.getInstance();

            /**
             *
             * @type {QuerySubscriptionModel}
             */
            this.subscriptionModel = SubscriberCometd.getInstance().subscription1;
            this.queryChangedListener = null;

            /**
             *
             * @type {VisualizationComponentsController}
             */
            this.visualizationComponentsController = null;

        }

        ResultsController.prototype.onOpenExplorationEditor = function () {
            if (this.explorationKoModel.exploration().name()) {
                if (!this.explorationKoModel.exploration().isPatternBasedExploration) {
                    QueryAnalyser.getInstance().updateQueries();
                    this.onExplorationApply();

                } else {
                    this.onPatternExplorationApply();
                }
            }
        };

        /**
         *  called on : open, create, update exploration.
         *  update event type, refresh table and charts
         *
         */
        ResultsController.prototype.onExplorationApply = function () {

            this.initQueryChangeListener();
            this.subscriptionModel.updateQuerySubscriptionModel();
        };

        /**
         *  called on : open, create, update pattern exploration .
         *  refresh table and charts
         *
         */
        ResultsController.prototype.onPatternExplorationApply = function () {
            this.rebuildVisualizationComponents();
        };

        /**
         * rebuild Visualization Components (charts, table) if Query EventType changed
         */
        ResultsController.prototype.initQueryChangeListener = function () {
            if (!this.queryChangedListener) {
                var self = this;
                this.queryChangedListener = this.subscriptionModel.isQueryChanged.subscribe(function () {
                    self.rebuildVisualizationComponents();
                });
            }
        };


        ResultsController.prototype.rebuildVisualizationComponents = function () {
            if (!this.visualizationComponentsController) {
                this.visualizationComponentsController = new VisualizationComponentsController(this.subscriptionModel.observableEvent);
            }
            this.visualizationComponentsController.rebuildVisualizationComponents();
        };


        ResultsController.prototype.onCloseExplorationEditor = function () {
            if (this.visualizationComponentsController) {
                this.visualizationComponentsController.onCloseExplorationEditor();
                this.visualizationComponentsController = null;

            }
            if (this.queryChangedListener) {
                this.queryChangedListener.dispose();
                this.queryChangedListener = null;
            }
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ResultsController}
         */
        ResultsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ResultsController();
            }
            return this.instance;
        };

        return ResultsController;

    }
)
;




