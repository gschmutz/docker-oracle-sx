/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('NavigationController', [
        'knockout',
        'jquery',
        'UserInfo',
        'UserPreferencesController',
        'UserPreferencesModel',
        'UserAssistance',
        'HelpController',
        'AboutController',
        'RestAPI',
        'SxPages',
        'Utils',

        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojtoolbar',
        'ojs/ojmenu',
        'Translate'

    ],


    /**
     * @exports user
     * @ignore
     */
    function (ko, $, UserInfo, UserPreferencesController, UserPreferencesModel, UserAssistance, HelpController, AboutController, RestAPI, SxPages, Utils) {

        /**
         * @class
         * @classdesc -  store sx navigation state, like current page
         * init Branding bar components: like User menu,  HOME, CATALOG buttons , load UserPreferences
         */
        function NavigationController() {

            var self = this;

            var userPanel = $('#userPanel');
            var visible = 'visible';

            //help menu
            var helpInMainMenuButton = "helpInMainMenuButton";
            var userAssistantMenu = "userAssistantMenu";

            //nav buttons
            var home = $("#homeNavButton");
            var catalog = $("#catalogNavButton");
            var $currentPageNavigationButtons = $("#currentPageNavigationButtons");

            //userMenu
            var openPreferencesButton = "openPreferencesButton";
            var openAboutButton = "openAboutButton";
            var logout = "logout";
            var LOGOUT_SERVLET_LOCATION = 'logout';


            /**
             *
             * @type {SxPages | ko.observable}
             */
            this.currentPage = ko.observable("");

            /**
             *
             * @type {UserInfo}
             */
            this.userInfo = UserInfo.getInstance();


            /**
             *
             * init Branding bar components: like User menu,User preferences  HOME, CATALOG buttons ,
             */
            this.initSxBrandingBarArea = function () {

                applyNavigationControllerModel();
                initCurrentPageNavigationButtons();
                initHelpController();
                updateUserInfo();
                makeUserMenusPanelVisible();

            };


            /**
             * apply ko model for Navigation
             * also automatically init Navigation toolbar and HOME, CATALOG buttons (ojet components)
             * @see index.html
             */
            function applyNavigationControllerModel() {
                ko.applyBindings(self, userPanel[0]);

            }

            function makeUserMenusPanelVisible() {
                userPanel.addClass(visible);

            }


            function initHelpController() {
                HelpController.getInstance().currentPage = self.currentPage;

            }


            this.helpMenuItemSelect = function (event, ui) {
                switch (ui.item.children("a").attr("id")) {
                    case userAssistantMenu:
                        UserAssistance.getInstance().clickUserAssistanceMainMenuButton();
                        break;
                    case helpInMainMenuButton:
                        HelpController.getInstance().openHelpInNewWidow(null);
                        break;
                    default:
                        console.log("helpMenuItemSelectError item");
                }
            };

            this.userMenuItemSelect = function (event, ui) {
                switch (ui.item.children("a").attr("id")) {
                    case openPreferencesButton:
                        UserPreferencesController.getInstance().onOpenUserPreferences();
                        break;
                    case openAboutButton:
                        AboutController.getInstance().onOpenUserAbout();
                        break;
                    case logout:
                        window.location = LOGOUT_SERVLET_LOCATION;
                        break;
                    default:
                        console.log("userMenuItemSelect item");
                }
            };

            function initCurrentPageNavigationButtons() {
                var sxDefaultPage = UserPreferencesModel.getInstance().getSxDefaultPage();
                if (sxDefaultPage == SxPages.getInstance().home) {
                    home.prop('tabIndex', 1);  //fix ojet bug OEP-599 ACCESSIBILITY: CATALOG AND HOME BUTTONS NOT ACCESSIBLE VIA KBD, AFTER INITIALIZATION
                }
                self.currentPage.subscribe(function (newValue) {
                    $currentPageNavigationButtons.ojButtonset({"checked": newValue});
                });


            }

            this.handleSxPageChange = function (event, ui) {
                if (ui.option === "checked" && self.currentPage() != ui.value) {
                    UserPreferencesController.getInstance().closePreferences();
                    window.location.hash = ui.value;
                }
            };


            function updateUserInfo() {
                $.ajax(RestAPI.URL.getUserInfo, {
                    async: false,
                    cache: false,
                    success: function (userInfoInJson) {
                        Utils.goToLoginPageIfUserSessionExpired(userInfoInJson);
                        self.userInfo.updateUserInfo(
                            userInfoInJson.userName,
                            userInfoInJson.mainPubSubChannel,
                            userInfoInJson.userPubSubChannel,
                            userInfoInJson.token,
                            userInfoInJson.pubSubServerURL,
                            userInfoInJson.visualizerURL,
                            userInfoInJson.sxVersion,
                            userInfoInJson.osName,
                            userInfoInJson.osVersion,
                            userInfoInJson.javaVersion,
                            userInfoInJson.javaVendor,
                            userInfoInJson.oepServer
                        );
                    }
                });
            }


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {NavigationController}
         */
        NavigationController.getInstance = function () {
            if (!this.instance) {
                this.instance = new NavigationController();
            }
            return this.instance;
        };


        return NavigationController;

    });
