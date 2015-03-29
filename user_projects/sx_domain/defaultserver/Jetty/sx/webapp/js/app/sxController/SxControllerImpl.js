/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SxControllerImpl', [
        'jquery',
        'knockout',
        'ExplorationsController',
        'SourceForm',
        'TargetForm',
        'HomeController',
        'HelpController'
    ],

    /**
     * @exports sxController
     * @ignore
     */
        function ($, ko, ExplorationsController, SourceForm, TargetForm, HomeController, HelpController) {

        /**
         * @class
         * @extends SxController
         */
        function SxControllerImpl() {
            initSxModel();


            function initSxModel() {
                ExplorationsController.getInstance().init();
            }

            /**
             * bind Page With Functionality
             */
            this.bind = function () {
                TargetForm.bind();  // TODO lazy bind better
            };

            this.createExplorationWithoutSources = function () {
                ExplorationsController.getInstance().createExplorationWithoutSources();
            };

            /**
             *
             * @param {String} id
             */
            this.openExploration = function (id) {
                ExplorationsController.getInstance().openExploration(id);
            };

/**
             *
             * @param {String} id
             */
            this.inspectPublishedExploration = function (id) {
                ExplorationsController.getInstance().inspectPublishedExploration(id);
            };


            this.closeExplorationIfOpened = function () {
                ExplorationsController.getInstance().closeExplorationIfOpened();
            };

            /**
             *
             * @param {String} id
             */
            this.createPatternExploration = function (id) {
                ExplorationsController.getInstance().createPatternExploration(id);
            };
        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {SxControllerImpl}
         */
        SxControllerImpl.getInstance = function () {
            if (!this.instance) {
                this.instance = new SxControllerImpl();
            }
            return this.instance;
        };


        return SxControllerImpl;
    }
)
;
