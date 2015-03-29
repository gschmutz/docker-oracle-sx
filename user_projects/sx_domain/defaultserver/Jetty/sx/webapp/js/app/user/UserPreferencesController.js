/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('UserPreferencesController', [
        'ojs/ojcore',
        'knockout',
        'jquery',

        'UserInfo',
        'UserPreferencesModel',
        'UserPreferencesParameters',
        'UserPreferencesLoader',
        'Utils',
        'PresentationModeController',
        'HelpController',

        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojmenu',
        'ojs/ojtoolbar',
        'ojs/ojselectcombobox',
        'ojs/ojcheckboxset',
        'ojs/ojradioset',
        'jqueryui',
        'Translate'
    ],

    /**
     * @exports user
     */
    function (oj, ko, $, UserInfo, UserPreferencesModel, UserPreferencesParameters, UserPreferencesLoader, Utils, PresentationModeController, HelpController) {


        /**
         * @class
         * @classdesc  UserPreferencesController
         *
         * @constructor
         */
        function UserPreferencesController() {

            var self = this;
            var $body = $("body");
            var $mainContent = $("#mainContent");

            var preferencesContainerPath = "html/userPreferences.html";
            var preferencesContainer_ = "#preferencesContainer";
            var preferencesContainer = $(preferencesContainer_);
            var preferencesLayout = $("#preferencesLayout");


            var openPreferencesButton_ = "#openPreferencesButton";
            var visible = "visible";
            var bodyBackgroundIfPreferencesOpened = "bodyBackgroundIfPreferencesOpened";
            var notVisible = "notVisible";

            var userPreferences_ = "#userPreferences";
            var userPreferences;

            var userPreferencesRestoreToDefault = "#userRestoreToDefault";
            var userPreferencesSave = "#userPreferencesSave";
            var userPreferencesCancel = "#userPreferencesCancel";


            this.isLoaded = false;
            this.userPreferencesModel = UserPreferencesModel.getInstance();
            this.userPreferencesModelBackup = UserPreferencesModel.getBackupInstance();


            this.onOpenUserPreferences = function () {
                buckupUserPreferencesModel();
                self.userPreferencesModel.activeTab(UserPreferencesParameters.UserPreferencesTabs.general);
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_GENERAL);
                loadUserPreferencesMarkupIfNotLoaded();

                preferencesContainer.addClass(visible);
                $mainContent.addClass(notVisible);
                $body.addClass(bodyBackgroundIfPreferencesOpened);
            };


            function buckupUserPreferencesModel() {
                self.userPreferencesModelBackup.updateUserPreferencesModel(
                    self.userPreferencesModel.infoNotificationAutoHideTimeout(),
                    self.userPreferencesModel.isInfoNotificationsShowed(),
                    self.userPreferencesModel.catalogDefaultSortingColumn(),
                    self.userPreferencesModel.catalogDefaultSortingOrder(),
                    self.userPreferencesModel.catalogDefaultPageSize(),
                    self.userPreferencesModel.viewModeType(),
                    self.userPreferencesModel.tableSize(),
                    self.userPreferencesModel.sxDefaultPage(),
                    self.userPreferencesModel.language(),
                    self.userPreferencesModel.timeZoneOffset()
                );
            }

            function restoreFromBackupUserPreferencesModel() {
                self.userPreferencesModel.updateUserPreferencesModel(
                    self.userPreferencesModelBackup.infoNotificationAutoHideTimeout(),
                    self.userPreferencesModelBackup.isInfoNotificationsShowed(),
                    self.userPreferencesModelBackup.catalogDefaultSortingColumn(),
                    self.userPreferencesModelBackup.catalogDefaultSortingOrder(),
                    self.userPreferencesModelBackup.catalogDefaultPageSize(),
                    self.userPreferencesModelBackup.viewModeType(),
                    self.userPreferencesModelBackup.tableSize(),
                    self.userPreferencesModelBackup.sxDefaultPage(),
                    self.userPreferencesModelBackup.language(),
                    self.userPreferencesModelBackup.timeZoneOffset()
                );
            }

            function updateUIThatDependsOnUserPreferencesModel() {
                PresentationModeController.getInstance().updateViewMode(self.userPreferencesModel.isPresentationMode());
            }


            function saveUserPreferencesModel() {
                var userPreferences = self.userPreferencesModel.getUserPreferencesInJsonFormat();
                UserPreferencesLoader.getInstance().saveUserPreferences(userPreferences, null, null);

                updateUIThatDependsOnUserPreferencesModel();
                ifLanguageChangedReloadSxPages();

            }

            /**
             * ifLanguageChanged -Reload sx pages , to update translation bundle from server
             */
            function ifLanguageChangedReloadSxPages() {
                if (self.userPreferencesModel.language()[0] &&
                    self.userPreferencesModelBackup.language()[0] != self.userPreferencesModel.language()[0]) {
                    Utils.reloadFromServer();
                }
            }


            this.loadUserPreferencesFromServer = function () {
                var userPreferences = UserPreferencesLoader.getInstance().loadUserPreferences(null, null, null);
                self.userPreferencesModel.updateUserPreferencesByDataFromServerIfPropertiesInDataValid(userPreferences);

                updateUIThatDependsOnUserPreferencesModel();
            };

            function resetToDefaultUserPreferencesModel() {
                self.userPreferencesModel.resetToDefaultUserPreferencesModel();
            }


            function initRestoreToDefaultPreferencesButton_() {
                $(userPreferencesRestoreToDefault).on('click', function (jqEvent) {
                    resetToDefaultUserPreferencesModel();
                });
            }

            function initSavePreferencesButton_() {
                $(userPreferencesSave).on('click', function (jqEvent) {
                    saveUserPreferencesModel();
                    self.closePreferences();
                });
            }

            function initCancelPreferencesButton_() {
                $(userPreferencesCancel).on('click', function (jqEvent) {
                    restoreFromBackupUserPreferencesModel();
                    self.closePreferences();
                });
            }

            this.closePreferences = function () {
                preferencesContainer.removeClass(visible);
                $mainContent.removeClass(notVisible);
                $body.removeClass(bodyBackgroundIfPreferencesOpened);
                HelpController.getInstance().removeTempId();
            };


            function loadUserPreferencesMarkupIfNotLoaded() {
                if (self.isLoaded) {
                    return;
                }
                Utils.loadHtmlAsync(preferencesLayout,
                    preferencesContainerPath,
                    function () {
                        userPreferences = $(userPreferences_);
                        initRestoreToDefaultPreferencesButton_();
                        initSavePreferencesButton_();
                        initCancelPreferencesButton_();
                        getTranslated(userPreferences);
                        ko.applyBindings(self.userPreferencesModel, userPreferences[0]);
                        self.isLoaded = true;
                    }
                );
            }

        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {UserPreferencesController}
         */
        UserPreferencesController.getInstance = function () {
            if (!this.instance) {
                this.instance = new UserPreferencesController();
            }
            return this.instance;
        };


        return UserPreferencesController;
    }
)
;