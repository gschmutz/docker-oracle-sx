/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('UserPreferencesParameters', [
        'jquery',
        'CatalogParameters',
        'SxPages',
        'Translate'
    ],

    /**
     * @exports exploration/user
     * @ignore
     */

        function ($, CatalogParameters, SxPages) {

        /**
         * @class
         * @classdesc enum
         * @constructor
         */
        function UserPreferencesParameters() {
        }

        UserPreferencesParameters.UserPreferencesTabs = {
            general: "general",
            viewMode: "viewMode",
            home: "home",
            catalog: "catalog",
            notifications: "notifications",

            exploration: "exploration",
            liveOutputStream: "liveOutputStream",
            charts: "charts",
            patterns: "patterns"
        };


        UserPreferencesParameters.ViewMode = {
            Normal: "Normal",
            Projector: "Projector"
        };


        UserPreferencesParameters.infoNotificationAutoHideTimeout = {
            _5: "5",
            _10: "10",
            _20: "20",
            _60: "60"
        };
        UserPreferencesParameters.infoNotificationAutoHideTimeoutOptions = [];
        UserPreferencesParameters.getInfoNotificationAutoHideTimeoutOptions = function () {
            if (UserPreferencesParameters.infoNotificationAutoHideTimeoutOptions.length == 0) {
                $.each(UserPreferencesParameters.infoNotificationAutoHideTimeout, function (key, value) {
                    UserPreferencesParameters.infoNotificationAutoHideTimeoutOptions.push(
                        {
                            id: value,
                            title: value
                        }
                    );
                });
            }
            return UserPreferencesParameters.infoNotificationAutoHideTimeoutOptions;
        };


        UserPreferencesParameters.isInfoNotificationsShowed = {
            true: "true",
            false: "false"
        };


        var LANGUAGE_TRANSLATE_NAMESPACE = 'oep.preferencesContainer.general_.languageList.';
        /**
         *
         * Supported Languages
         *
         */
        UserPreferencesParameters.Language = {

            ar: "ar",
            da: "da",
            de: "de",
            el: "el",
            en: "en",
            es: "es",
            fi: "fi",
            fr: "fr",
            he: "he",
            hr: "hr",
            hu: "hu",
            it: "it",
            ja: "ja",
            ko: "ko",
            nl: "nl",
            no: "no",
            pl: "pl",
            pt: "pt",
            'pt-BR': "pt-BR",
            ro: "ro",
            ru: "ru",
            sk: "sk",
            sv: "sv",
            th: "th",
            tr: "tr",
            'zh-CN': "zh-CN",
            'zh-TW': "zh-TW"

        };

        UserPreferencesParameters.languageOptions = [];
        UserPreferencesParameters.getLanguageOptions = function () {
            if (UserPreferencesParameters.languageOptions.length == 0) {
                $.each(UserPreferencesParameters.Language, function (key, value) {
                    UserPreferencesParameters.languageOptions.push(
                        {
                            id: value,
                            title: getTranslated(LANGUAGE_TRANSLATE_NAMESPACE + value)
                        }
                    );
                });
            }
            return UserPreferencesParameters.languageOptions;
        };


        UserPreferencesParameters.timeZoneOffset = {
        };
        UserPreferencesParameters.timeZoneOffset["-12"] = "-12";
        UserPreferencesParameters.timeZoneOffset["-11"] = "-11";
        UserPreferencesParameters.timeZoneOffset["-10"] = "-10";
        UserPreferencesParameters.timeZoneOffset["-9"] = "-9";
        UserPreferencesParameters.timeZoneOffset["-8"] = "-8";
        UserPreferencesParameters.timeZoneOffset["-7"] = "-7";
        UserPreferencesParameters.timeZoneOffset["-6"] = "-6";
        UserPreferencesParameters.timeZoneOffset["-5"] = "-5";
        UserPreferencesParameters.timeZoneOffset["-4"] = "-4";
        UserPreferencesParameters.timeZoneOffset["-3.5"] = "-3.5";
        UserPreferencesParameters.timeZoneOffset["-3"] = "-3";
        UserPreferencesParameters.timeZoneOffset["-2"] = "-2";
        UserPreferencesParameters.timeZoneOffset["-1"] = "-1";
        UserPreferencesParameters.timeZoneOffset["0"] = "0";
        UserPreferencesParameters.timeZoneOffset["1"] = "1";
        UserPreferencesParameters.timeZoneOffset["2"] = "2";
        UserPreferencesParameters.timeZoneOffset["3"] = "3";
        UserPreferencesParameters.timeZoneOffset["3.5"] = "3.5";
        UserPreferencesParameters.timeZoneOffset["4"] = "4";
        UserPreferencesParameters.timeZoneOffset["4.5"] = "4.5";
        UserPreferencesParameters.timeZoneOffset["5"] = "5";
        UserPreferencesParameters.timeZoneOffset["5.5"] = "5.5";
        UserPreferencesParameters.timeZoneOffset["5.75"] = "5.75";
        UserPreferencesParameters.timeZoneOffset["6"] = "6";
        UserPreferencesParameters.timeZoneOffset["7"] = "7";
        UserPreferencesParameters.timeZoneOffset["8"] = "8";
        UserPreferencesParameters.timeZoneOffset["9"] = "9";
        UserPreferencesParameters.timeZoneOffset["9.5"] = "9.5";
        UserPreferencesParameters.timeZoneOffset["10"] = "10";
        UserPreferencesParameters.timeZoneOffset["11"] = "11";
        UserPreferencesParameters.timeZoneOffset["12"] = "12";


        var CATALOG_TRANSLATE_NAMESPACE = 'oep.preferencesContainer.catalog_.';
        UserPreferencesParameters.catalogSortingColumnArray = [
            CatalogParameters.Sorting.RECENT,
            CatalogParameters.Sorting.NAME,
            CatalogParameters.Sorting.FAVORITE
        ];

        UserPreferencesParameters.catalogSortingColumnOptions = [];
        UserPreferencesParameters.getCatalogSortingColumnOptions = function () {
            if (UserPreferencesParameters.catalogSortingColumnOptions.length == 0) {
                $.each(UserPreferencesParameters.catalogSortingColumnArray, function (key, value) {
                    UserPreferencesParameters.catalogSortingColumnOptions.push(
                        {
                            id: value,
                            title: getTranslated(CATALOG_TRANSLATE_NAMESPACE + value)
                        }
                    );
                });
            }
            return UserPreferencesParameters.catalogSortingColumnOptions;
        };

        UserPreferencesParameters.catalogSortingOrderArray = [
            CatalogParameters.Order.DESC,
            CatalogParameters.Order.ASC
        ];

        UserPreferencesParameters.catalogSortingOrderOptions = [];
        UserPreferencesParameters.getCatalogSortingOrderOptions = function () {
            if (UserPreferencesParameters.catalogSortingOrderOptions.length == 0) {
                $.each(UserPreferencesParameters.catalogSortingOrderArray, function (key, value) {
                    UserPreferencesParameters.catalogSortingOrderOptions.push(
                        {
                            id: value,
                            title: getTranslated(CATALOG_TRANSLATE_NAMESPACE + value)
                        }
                    );
                });
            }
            return UserPreferencesParameters.catalogSortingOrderOptions;
        };

        UserPreferencesParameters.catalogPageSizesOptions = [];
        UserPreferencesParameters.getCatalogPageSizesOptions = function () {
            if (UserPreferencesParameters.catalogPageSizesOptions.length == 0) {
                $.each(CatalogParameters.catalogPageSizesArray, function (key, value) {
                    UserPreferencesParameters.catalogPageSizesOptions.push(
                        {
                            id: value + "",
                            title: value
                        }
                    );
                });
            }
            return UserPreferencesParameters.catalogPageSizesOptions;
        };

        /**
         * for Table - liveOutputStream
         */
        UserPreferencesParameters.TableSize = {
            _10: "10",
            _25: "25",
            _50: "50",
            _100: "100"
        };
        UserPreferencesParameters.TableSizeArray = [
            UserPreferencesParameters.TableSize._10,
            UserPreferencesParameters.TableSize._25,
            UserPreferencesParameters.TableSize._50,
            UserPreferencesParameters.TableSize._100
        ];


        UserPreferencesParameters.tableSizeOptions = [];
        UserPreferencesParameters.getTableSizeOptions = function () {
            if (UserPreferencesParameters.tableSizeOptions.length == 0) {
                $.each(UserPreferencesParameters.TableSizeArray, function (key, value) {
                    UserPreferencesParameters.tableSizeOptions.push(
                        {
                            id: value,
                            title: value
                        }
                    );
                });
            }
            return UserPreferencesParameters.tableSizeOptions;
        };


        var HOME_TRANSLATE_NAMESPACE = 'oep.preferencesContainer.home_.';
        UserPreferencesParameters.sxDefaultPage = {
            HOME: SxPages.getInstance().home,
            CATALOG: SxPages.getInstance().catalog
        };
        UserPreferencesParameters.sxDefaultPageArray = [
            UserPreferencesParameters.sxDefaultPage.HOME,
            UserPreferencesParameters.sxDefaultPage.CATALOG
        ];
        UserPreferencesParameters.sxDefaultPageOptions = [];
        UserPreferencesParameters.getSxDefaultPageOptions = function () {
            if (UserPreferencesParameters.sxDefaultPageOptions.length == 0) {
                $.each(UserPreferencesParameters.sxDefaultPageArray, function (key, value) {
                    UserPreferencesParameters.sxDefaultPageOptions.push(
                        {
                            id: value,
                            title: getTranslated(HOME_TRANSLATE_NAMESPACE + value)
                        }
                    );
                });
            }
            return UserPreferencesParameters.sxDefaultPageOptions;
        };


        return UserPreferencesParameters;
    });


