/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('UndoRedoController', [
        'jquery',
        'knockout',
        'ExplorationUtils',
        'ExplorationsLoader',
        'RestAPI',
        'NotificationUtils',
        'Utils'
    ],
    /**
     * @exports exploration/undo
     * @version 1.0
     */
    function ($, ko, ExplorationUtils, ExplorationsLoader, RestAPI, NotificationUtils, Utils) {

        /**
         * @class
         * @classdesc Undo/Redo functionality :  -Undo/Redo exploration to previous/forvard versions
         * exploration versions stores on backend side
         *
         * @constructor
         */
        function UndoRedoController() {

            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var explorationsLoader = ExplorationsLoader.getInstance();

            var undoButton;
            var redoButton;

            this.onOpenExplorationEditor = function () {
                initUndoRedoController();
            };

            function initUndoRedoController() {

                undoButton = $(exUtils.undoExplorationBtn);
                undoButton.click(function () {
                    undoExploration();
                });

                redoButton = $(exUtils.redoExplorationBtn);
                redoButton.click(function () {
                    redoExploration();
                });

            }

            function redoExploration() {
                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0 && exploration.actions.canRedo()) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.redo, exploration, onRedoSuccesfull, onFailed);
                }
            }

            /**
             *
             * @param {Response} response
             */
            function onRedoSuccesfull(response) {
                var explorationId = response.data.name;
                if (response.success && explorationId) {
                    NotificationUtils.redoSuccesfull();
                    reloadExploration(explorationId);
                } else {
                    NotificationUtils.redoFailed();
                }

                exUtils.updateExplorationModel(response.data);

            }


            function undoExploration() {
                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0 && exploration.actions.canUndo()) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.undo, exploration, onUndoSuccesfull, onFailed);
                }
            }

            /**
             *
             * @param {Response} response
             */
            function onUndoSuccesfull(response) {
                var explorationId = response.data.name;

                if (response.success && explorationId) {
                    NotificationUtils.undoSuccesfull();
                    reloadExploration(explorationId);
                } else {
                    NotificationUtils.undoFailed();
                }

                exUtils.updateExplorationModel(response.data);

            }


            /**
             *
             * @param {String} explorationId
             */
            function reloadExploration(explorationId) {
                Utils.reloadFromCacheWithTimeout('#explorationEditor:id=' + explorationId);

            }


            /**
             *
             * @param {FailureResponse} failureResponse
             */
            function onFailed(failureResponse) {
                NotificationUtils.onFailureResponse(failureResponse);
            }
        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {UndoRedoController}
         */
        UndoRedoController.getInstance = function () {
            if (!this.instance) {
                this.instance = new UndoRedoController();
            }
            return this.instance;
        };


        return UndoRedoController;

    }
);
