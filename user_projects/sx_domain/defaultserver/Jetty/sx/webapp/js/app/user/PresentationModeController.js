/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('PresentationModeController', [
        'jquery'
    ],

    /**
     * @exports user/presentationMode
     */
        function ($) {


        /**
         * @class
         * @classdesc  switch between css skins for sx: presentation(projector) mode, Browser(normal) mode
         * @see UserPreferencesParameters.ViewMode
         *
         * @constructor
         */
        function PresentationModeController() {


            var CSS_PATH_FOR_PRESENTATION_MODE = "css/projection.css";
            var PRESENTATION_MODE_SELECTOR = "head link[href='" + CSS_PATH_FOR_PRESENTATION_MODE + "']";

            /**
             *
             * @param {Boolean} userNeedsPresentationMode
             */
            this.updateViewMode = function (userNeedsPresentationMode) {

                var presentationModeSwitchedOn = isPresentationModeSwitchedOn();

                if (userNeedsPresentationMode && !presentationModeSwitchedOn) {
                    switchOnPresentationMode();
                } else if (!userNeedsPresentationMode && presentationModeSwitchedOn) {
                    switchOffPresentationMode();
                }
            };

            /**
             *
             * @returns {boolean}
             */
            function isPresentationModeSwitchedOn() {
                return $(PRESENTATION_MODE_SELECTOR).length > 0;
            }


            function switchOnPresentationMode() {
                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: CSS_PATH_FOR_PRESENTATION_MODE
                }).appendTo("head");
            }


            function switchOffPresentationMode() {
                $(PRESENTATION_MODE_SELECTOR).remove();
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {PresentationModeController}
         */
        PresentationModeController.getInstance = function () {
            if (!this.instance) {
                this.instance = new PresentationModeController();
            }
            return this.instance;
        };


        return PresentationModeController;
    }
)
;