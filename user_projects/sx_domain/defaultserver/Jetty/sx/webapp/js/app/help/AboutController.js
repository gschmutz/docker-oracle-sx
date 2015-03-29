/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('AboutController', [
        'ojs/ojcore',
        'knockout',
        'jquery',

        'UserInfo',
        'Utils',

        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojtoolbar',
        'ojs/ojmenu',
        'ojs/ojdialog',
        'Translate'
    ],

    /**
     * @exports user
     */
    function (oj, ko, $, UserInfo, Utils) {


        /**
         * @class
         * @classdesc  AboutController  - open About page
         *
         * @constructor
         */
        function AboutController() {

            var self = this;

            var aboutContainerPath = "html/about.html";
            var aboutContainer_ = "#aboutContainer";
            var aboutContainer = $(aboutContainer_);
            var aboutLayout = $("#aboutLayout");


            var openAboutButton_ = "#openAboutButton";

            var about_ = "#about";
            var about;
            var aboutDone = "#aboutDone";


            this.isLoaded = false;

            this.onOpenUserAbout = function () {
                self.openAbout();
                loadAboutMarkupIfNotLoaded();
            };

            function initDoneAboutButton_() {
                $(aboutDone).on('click', function (jqEvent) {
                    self.closeAbout();
                });
            }

            this.closeAbout = function () {
                $(about_).ojDialog("close");

            };

            this.openAbout = function () {
                if (self.isLoaded) {
                    $(about_).ojDialog("open");
                }

            };


            function loadAboutMarkupIfNotLoaded() {
                if (self.isLoaded) {
                    return;
                }
                Utils.loadHtmlAsync(aboutLayout,
                    aboutContainerPath,
                    function () {
                        about = $(about_);
                        initDoneAboutButton_();
                        getTranslated(about);
                        ko.applyBindings(UserInfo.getInstance(), about[0]);
                        self.isLoaded = true;
                        self.openAbout();

                    }
                );
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {AboutController}
         */
        AboutController.getInstance = function () {
            if (!this.instance) {
                this.instance = new AboutController();
            }
            return this.instance;
        };


        return AboutController;
    }
)
;