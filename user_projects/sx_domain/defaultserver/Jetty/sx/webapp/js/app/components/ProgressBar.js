/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ProgressBar', [
        'jquery'
    ],

    /**
     * ProgressBar
     * location : in sx Global Branding Bar(top right corner : where User Preferences menu, Home and Catalog buttons  )
     * responsibility : traces ajax requests state : create/update/delete source, create/update/delete exploration, load catalog entities
     * state : busy (in progress) / connected(work finished)
     *
     * @exports ProgressBar
     * @version 1.0
     */

    function ($) {

        function ProgressBar() {
            var statusIndicator = "#statusIndicator";
            var busy = "busy";
            var connected = "connected";
            var self = this;

            self.$pageLoadIndicatorComponent = $(statusIndicator);


            self.resetState = function () {
                return self.$pageLoadIndicatorComponent.removeClass(connected).removeClass(busy);
            };

            self.connectedState = function () {
                self.resetState().addClass(connected);
            };

            self.busyState = function () {
                self.resetState().addClass(busy);
            };


            /**
             *
             * @param {String} tooltip
             */
            self.addTooltip = function (tooltip) {
                self.$pageLoadIndicatorComponent.prop('title', tooltip);
            };


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ProgressBar}
         */
        ProgressBar.getInstance = function () {
            if (!this.instance) {
                this.instance = new ProgressBar();
            }
            return this.instance;
        };


        return ProgressBar;
    });



