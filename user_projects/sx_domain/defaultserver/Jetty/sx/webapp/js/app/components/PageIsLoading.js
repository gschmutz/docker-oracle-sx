/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('PageIsLoading', [],

    /**
     * PageIsLoading
     *
     * [x] while scripts loading (sx .js scripts, images ...)
     * [x] As soon as an User clicks on the Catalog icon from the home page and vice-verse
     * [x] Immediately after an User  launches an Exploration, before the Exploration canvas appears. (When we¿re ready to open the canvas the editor appears¿not before we are ready. i.e., fully load the canvas before showing it.)
     * [x] Immediately after an User  clicks a source if we anticipate a delay before the Source dialog opens
     * [x] Any time something an User  clicks in the Exploration Editor causes a delayed response or perceived inactivity
     *
     * @exports PageIsLoading
     * @version 1.0
     */

    function () {

        function PageIsLoading() {
            var pageLoadIndicatorId = "PageLoadIndicator";
            var pageIsLoadedClass = "pageIsLoaded";
            var self = this;

            self.pageLoadIndicatorComponent = null;

            self.getPageLoadIndicatorComponent = function () {
                if (!self.pageLoadIndicatorComponent) {
                    self.pageLoadIndicatorComponent = document.getElementById(pageLoadIndicatorId);
                }
                return self.pageLoadIndicatorComponent;
            };

            self.pageIsLoaded = function () {
                self.getPageLoadIndicatorComponent().className = pageIsLoadedClass;
            };

            self.pageIsLoading = function () {
                self.getPageLoadIndicatorComponent().className = "";
            };


            self.initPageIsLoading = function () {

                document.addEventListener("DOMContentLoaded", function (event) {
                    self.pageIsLoaded();
                });


                document.addEventListener("onload", function (event) {
                    self.pageIsLoaded();
                });

            };


            self.initPageIsLoading();

        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {PageIsLoading}
         */
        PageIsLoading.getInstance = function () {
            if (!this.instance) {
                this.instance = new PageIsLoading();
            }
            return this.instance;
        };


        return PageIsLoading;
    });



