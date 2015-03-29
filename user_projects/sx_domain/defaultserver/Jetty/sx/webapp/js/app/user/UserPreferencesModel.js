/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('UserPreferencesModel', [
        'knockout',
        'jquery',
        'UserPreferencesParameters',
        'CatalogParameters',
        'HelpController'
    ],

    /**
     * @exports user
     * @ignore
     */
        function (ko, $, UserPreferencesParameters, CatalogParameters, HelpController) {

        /**
         * @class
         * @classdesc -  user preferences:
         */
        function UserPreferencesModel() {

            var self = this;
            this.UserPreferencesParameters = UserPreferencesParameters;
            /**
             *  timeout for messages
             *
             * @type {UserPreferencesParameters.UserPreferencesTabs | ko.observable}
             */
            this.activeTab = ko.observable(UserPreferencesParameters.UserPreferencesTabs.general);

            /**
             *  infoNotification timeOfDissapearance
             * @type {string | ko.observableArray}
             */
            this.infoNotificationAutoHideTimeout = ko.observableArray([UserPreferencesParameters.infoNotificationAutoHideTimeout._5]);

            /**
             *
             * @type {string | ko.observableArray}
             */
            this.isInfoNotificationsShowed = ko.observableArray([UserPreferencesParameters.isInfoNotificationsShowed.true]);


            /**
             *
             * @type {CatalogParameters.Sorting | ko.observable}
             */
            this.catalogDefaultSortingColumn = ko.observableArray([CatalogParameters.Sorting.RECENT]);


            /**
             *
             * @type {CatalogParameters.Order | ko.observable}
             */
            this.catalogDefaultSortingOrder = ko.observableArray([CatalogParameters.Order.DESC]);


            /**
             *
             * @type {CatalogParameters.PageSizes | ko.observable}
             */
            this.catalogDefaultPageSize = ko.observableArray([CatalogParameters.PageSizes._10 + ""]);


            /**
             *
             * @type {UserPreferencesParameters.ViewMode| ko.observable}
             */
            this.viewModeType = ko.observable(UserPreferencesParameters.ViewMode.Normal);

            /**
             *
             * @type {UserPreferencesParameters.TableSize| ko.observable}
             */
            this.tableSize = ko.observableArray([UserPreferencesParameters.TableSize._100]);

            /**
             *
             * @type {UserPreferencesParameters.sxDefaultPage | ko.observable}
             */
            this.sxDefaultPage = ko.observableArray([UserPreferencesParameters.sxDefaultPage.HOME]);

            /**
             *
             * @type {UserPreferencesParameters.Language| ko.observable}
             */
            this.language = ko.observableArray([UserPreferencesParameters.Language.en]);


            /**
             *   timeZoneOffset in hours
             * @type {int| ko.observable}
             */
            this.timeZoneOffset = ko.observableArray([getUserLocalTimeZoneOffset()]);

            /**
             * timeZoneOffset in hours
             * @returns {string}
             */
            function getUserLocalTimeZoneOffset() {
                return Math.round(new Date().getTimezoneOffset() / 60) + "";
            }

            /**
             * to push properties to backend
             * save properties in database
             */
            this.getUserPreferencesInJsonFormat = function () {
                var userPreferencesInJson = {};

                userPreferencesInJson.infoNotificationAutoHideTimeout = this.infoNotificationAutoHideTimeout()[0];
                userPreferencesInJson.isInfoNotificationsShowed = this.isInfoNotificationsShowed()[0] || UserPreferencesParameters.isInfoNotificationsShowed.false;
                userPreferencesInJson.catalogDefaultSortingColumn = this.catalogDefaultSortingColumn()[0];
                userPreferencesInJson.catalogDefaultSortingOrder = this.catalogDefaultSortingOrder()[0];
                userPreferencesInJson.catalogDefaultPageSize = this.catalogDefaultPageSize()[0];
                userPreferencesInJson.viewModeType = this.viewModeType();
                userPreferencesInJson.tableSize = this.tableSize()[0];
                userPreferencesInJson.sxDefaultPage = this.sxDefaultPage()[0];
                userPreferencesInJson.language = this.language()[0];
                userPreferencesInJson.timeZoneOffset = this.timeZoneOffset()[0];

                return userPreferencesInJson;
            };

            /**
             *
             * @param userPreferencesInJson
             */
            this.updateUserPreferencesByDataFromServerIfPropertiesInDataValid = function (userPreferencesInJson) {

                this.infoNotificationAutoHideTimeout(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.infoNotificationAutoHideTimeout,
                        userPreferencesInJson.infoNotificationAutoHideTimeout
                    ) ? [userPreferencesInJson.infoNotificationAutoHideTimeout]
                        : [UserPreferencesParameters.infoNotificationAutoHideTimeout._5]
                );

                this.isInfoNotificationsShowed(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.isInfoNotificationsShowed,
                        userPreferencesInJson.isInfoNotificationsShowed
                    ) ? [userPreferencesInJson.isInfoNotificationsShowed]
                        : [UserPreferencesParameters.isInfoNotificationsShowed.true]
                );

                this.catalogDefaultSortingColumn(
                    isUserPreferencePropertyValid(
                        CatalogParameters.Sorting,
                        userPreferencesInJson.catalogDefaultSortingColumn
                    ) ? [userPreferencesInJson.catalogDefaultSortingColumn]
                        : [CatalogParameters.Sorting.RECENT]
                );

                this.catalogDefaultSortingOrder(
                    isUserPreferencePropertyValid(
                        CatalogParameters.Order,
                        userPreferencesInJson.catalogDefaultSortingOrder
                    ) ? [userPreferencesInJson.catalogDefaultSortingOrder]
                        : [CatalogParameters.Order.DESC]
                );

                this.catalogDefaultPageSize(
                    isUserPreferencePropertyValid(
                        CatalogParameters.PageSizes,
                        userPreferencesInJson.catalogDefaultPageSize
                    ) ? [userPreferencesInJson.catalogDefaultPageSize]
                        : [CatalogParameters.PageSizes._10 + ""]
                );

                this.viewModeType(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.ViewMode,
                        userPreferencesInJson.viewModeType
                    ) ? userPreferencesInJson.viewModeType
                        : UserPreferencesParameters.ViewMode.Normal
                );

                this.tableSize(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.TableSize,
                        userPreferencesInJson.tableSize
                    ) ? [userPreferencesInJson.tableSize]
                        : [UserPreferencesParameters.TableSize._100]
                );

                this.sxDefaultPage(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.sxDefaultPage,
                        userPreferencesInJson.sxDefaultPage
                    ) ? [userPreferencesInJson.sxDefaultPage]
                        : [UserPreferencesParameters.sxDefaultPage.HOME]
                );

                this.language(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.Language,
                        userPreferencesInJson.language
                    ) ? [userPreferencesInJson.language]
                        : [UserPreferencesParameters.Language.en]
                );

                this.timeZoneOffset(
                    isUserPreferencePropertyValid(
                        UserPreferencesParameters.timeZoneOffset,
                        userPreferencesInJson.timeZoneOffset
                    ) ? [userPreferencesInJson.timeZoneOffset]
                        : [getUserLocalTimeZoneOffset()]
                );

            };

            /**
             *
             * @param {Object} validOptions
             * @param {String} userPreferenceProperty
             * @returns {boolean}
             */
            function isUserPreferencePropertyValid(validOptions, userPreferenceProperty) {
                for (var optionKey in validOptions) {
                    if (validOptions.hasOwnProperty(optionKey) && validOptions[optionKey] == userPreferenceProperty) {
                        return true;
                    }
                }
                return false;
            }

            /**
             *
             * @param {Array<String>} infoNotificationAutoHideTimeout
             * @param {String}  isInfoNotificationsShowed
             * @param {Array<String>} catalogDefaultSortingColumn
             * @param {Array<String>} catalogDefaultSortingOrder
             * @param {Array<String>} catalogDefaultPageSize
             * @param {Array<String>} viewModeType
             * @param {Array<String>} tableSize
             * @param {Array<String>} sxDefaultPage
             * @param {Array<String>} language
             * @param {Array<String>} timeZoneOffset
             */
            this.updateUserPreferencesModel = function (infoNotificationAutoHideTimeout, isInfoNotificationsShowed, catalogDefaultSortingColumn, catalogDefaultSortingOrder, catalogDefaultPageSize, viewModeType, tableSize, sxDefaultPage, language, timeZoneOffset) {
                this.infoNotificationAutoHideTimeout(infoNotificationAutoHideTimeout || [UserPreferencesParameters.infoNotificationAutoHideTimeout._5]);
                this.isInfoNotificationsShowed(isInfoNotificationsShowed || [UserPreferencesParameters.isInfoNotificationsShowed.true]);
                this.catalogDefaultSortingColumn(catalogDefaultSortingColumn || [CatalogParameters.Sorting.RECENT]);
                this.catalogDefaultSortingOrder(catalogDefaultSortingOrder || [CatalogParameters.Order.DESC]);
                this.catalogDefaultPageSize(catalogDefaultPageSize || [CatalogParameters.PageSizes._10 + ""]);
                this.viewModeType(viewModeType || UserPreferencesParameters.ViewMode.Normal);
                this.tableSize(tableSize || [UserPreferencesParameters.TableSize._100]);
                this.sxDefaultPage(sxDefaultPage || [UserPreferencesParameters.sxDefaultPage.HOME]);
                this.language(language || [UserPreferencesParameters.Language.en]);
                this.timeZoneOffset(timeZoneOffset || [getUserLocalTimeZoneOffset()]);

            };

            this.resetToDefaultUserPreferencesModel = function () {
                this.infoNotificationAutoHideTimeout([UserPreferencesParameters.infoNotificationAutoHideTimeout._5]);
                this.isInfoNotificationsShowed([UserPreferencesParameters.isInfoNotificationsShowed.true]);
                this.catalogDefaultSortingColumn([CatalogParameters.Sorting.RECENT]);
                this.catalogDefaultSortingOrder([CatalogParameters.Order.DESC]);
                this.catalogDefaultPageSize([CatalogParameters.PageSizes._10 + ""]);
                this.viewModeType(UserPreferencesParameters.ViewMode.Normal);
                this.tableSize([UserPreferencesParameters.TableSize._100]);
                this.sxDefaultPage([UserPreferencesParameters.sxDefaultPage.HOME]);
                this.language([UserPreferencesParameters.Language.en]);
                this.timeZoneOffset([getUserLocalTimeZoneOffset()]);

            };


            this.UserPreferencesTabs = UserPreferencesParameters.UserPreferencesTabs;

            /**
             *
             * @returns {string}
             */
            this.getLanguage = function () {
                return this.language()[0] || UserPreferencesParameters.Language.en;

            };

            /**
             *
             * @returns {boolean}
             */
            this.isPresentationMode = function () {
                return UserPreferencesParameters.ViewMode.Projector === this.viewModeType();
            };

            /**
             *
             * @returns {Number|int}
             */
            this.getInfoNotificationAutoHideTimeout = function () {
                return parseInt(this.infoNotificationAutoHideTimeout()[0], 10) || parseInt(UserPreferencesParameters.infoNotificationAutoHideTimeout._5, 10);
            };

            /**
             *
             * @returns {Number|int}
             */
            this.getTableSize = function () {
                return parseInt(this.tableSize()[0], 10) || parseInt(UserPreferencesParameters.TableSize._100, 10);
            };

            /**
             *
             * @returns {string}
             */
            this.getSxDefaultPage = function () {
                return this.sxDefaultPage()[0] || UserPreferencesParameters.sxDefaultPage.HOME;
            };

            /**
             *
             * @returns {Number|int}
             */
            this.getCatalogDefaultPageSize = function () {
                return parseInt(this.catalogDefaultPageSize()[0], 10) || CatalogParameters.PageSizes._10;
            };

            /**
             *
             * @returns {string}
             */
            this.getCatalogDefaultSortingColumn = function () {
                return this.catalogDefaultSortingColumn()[0] || CatalogParameters.Sorting.RECENT;
            };

            /**
             *
             * @returns {string}
             */
            this.getCatalogDefaultSortingOrder = function () {
                return this.catalogDefaultSortingOrder()[0] || CatalogParameters.Order.DESC;
            };

            /**
             *
             * @returns {boolean}
             */
            this.isInfoNotificationsVisible = function () {
                return this.isInfoNotificationsShowed()[0] == UserPreferencesParameters.isInfoNotificationsShowed.true;
            };


            /**
             *
             * @param {UserPreferencesParameters.UserPreferencesTabs} activeTab
             * @returns {boolean}
             */
            this.setActiveTab = function (activeTab) {
                this.activeTab(activeTab);
                return true;
            };

            this.setHelpForCatalog = function() {
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_CATALOG);
            };

            this.setHelpForGeneral = function() {
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_GENERAL);
            };

            this.setHelpForNotifications = function() {
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_NOTIFICATIONS);
            }

            this.setHelpForViewMode = function() {
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_VIEWMODE);
            };

            this.setHelpForLiveOutputStream = function() {
                HelpController.getInstance().setTempId(HelpController.PREFERENCES_EXPLORATION_LIVE_OUTPUT);
            };

        }

        /**
         * buckup instance stores : "before changes state"
         * before open 'User Preferences editor' we made 'Backup for User preferences' to have possibility "Cancel Changes"
         * buckup instance used to restore state, when user pressed 'Cancel button'  in 'UserPreferences dialog '
         *
         *
         * @returns {UserPreferencesModel|*}
         */
        UserPreferencesModel.getBackupInstance = function () {
            if (!this.backupInstance) {
                this.backupInstance = new UserPreferencesModel();
            }
            return this.backupInstance;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {UserPreferencesModel}
         */
        UserPreferencesModel.getInstance = function () {
            if (!this.instance) {
                this.instance = new UserPreferencesModel();
            }
            return this.instance;
        };


        return UserPreferencesModel;

    });
