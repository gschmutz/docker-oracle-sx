/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('UserAssistance', [
        'jquery',
        'Utils',
        'HelpBannerPanel'
    ],

    /**
     * @exports help
     */
    function ($, Utils, HelpBannerPanel) {


        /**
         * @class
         * @classdesc  User Assistant controller
         *
         * @constructor
         */
        function UserAssistance() {


            var userAssistantBtn = "#userAssistantBtn";
            var userAssistantMenu = "#userAssistantMenu";

            this.onOpenExplorationEditor = function () {
                this.initUserAssistanceExplorationEditorButton();
            };


            this.initUserAssistanceExplorationEditorButton = function () {
                initUserAssistanceControl($(userAssistantBtn));
            };


            this.clickUserAssistanceMainMenuButton = function () {
                toggleHelpBannerPanel();
            };

            /**
             *
             * @param {UserAssistance.CONTENT} userAssistanceContent
             *
             * example : setUserAssistanceContent(UserAssistance.CONTENT.CATALOG);
             *
             */
            this.setUserAssistanceContent = function (userAssistanceContent) {

                HelpBannerPanel.getInstance().setData(userAssistanceContent);
            };


            /**
             *
             * @param {jqueryElement} userAssistanceControl  - control will be toggle (switch off /on ) UserAssistance panel
             */
            function initUserAssistanceControl(userAssistanceControl) {
                userAssistanceControl.click(function () {
                    toggleHelpBannerPanel();
                });
            }


            function toggleHelpBannerPanel() {
                if (HelpBannerPanel.getInstance().isOpened()) {
                    HelpBannerPanel.panel('close');
                } else {
                    HelpBannerPanel.panel('open');
                }
            }
        }


        UserAssistance.translatePrefix = "oep.UserAssistance.";
        UserAssistance.translatePrefixHeader = ".header";
        UserAssistance.translatePrefixContent = ".content";

        /**
         *
         @returns  {header : header , content : content }
         * @see HelpBannerPanel.setData format
         */
        UserAssistance.initUserAssistanceContent = function (id) {
            return {
                header: Utils.translateKey(UserAssistance.translatePrefix, id + UserAssistance.translatePrefixHeader),
                content: Utils.translateKey(UserAssistance.translatePrefix, id + UserAssistance.translatePrefixContent)
            };

        };

        /**
         *
         * @see oepTranslations ids
         */
        UserAssistance.CONTENT_IDS = {
            SOURCE_EDITOR_WELCOME: 'SOURCE_EDITOR_WELCOME',
            EXPLORATION_EDITOR_WELCOME: 'EXPLORATION_EDITOR_WELCOME',

            EXPLORATION_EDITOR_SOURCES: 'EXPLORATION_EDITOR_SOURCES',
            EXPLORATION_EDITOR_NO_SOURCES: 'EXPLORATION_EDITOR_NO_SOURCES',
            EXPLORATION_EDITOR_CORRELATIONS: 'EXPLORATION_EDITOR_CORRELATIONS',
            EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED: 'EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED',
            EXPLORATION_EDITOR_FILTERS: 'EXPLORATION_EDITOR_FILTERS',
            EXPLORATION_EDITOR_SUMMARIES: 'EXPLORATION_EDITOR_SUMMARIES',
            EXPLORATION_EDITOR_WINDOWS: 'EXPLORATION_EDITOR_WINDOWS',


            CATALOG_WELCOME: 'CATALOG_WELCOME'
        };

        /**
         *
         * @see setUserAssistanceContent
         */
        UserAssistance.CONTENT = {
            SOURCE_EDITOR_WELCOME: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.SOURCE_EDITOR_WELCOME),
            EXPLORATION_EDITOR_WELCOME: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_WELCOME),

            EXPLORATION_EDITOR_SOURCES: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_SOURCES),
            EXPLORATION_EDITOR_NO_SOURCES: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_NO_SOURCES),

            EXPLORATION_EDITOR_CORRELATIONS: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_CORRELATIONS),
            EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED),

            EXPLORATION_EDITOR_FILTERS: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_FILTERS),

            EXPLORATION_EDITOR_SUMMARIES: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_SUMMARIES),

            EXPLORATION_EDITOR_WINDOWS: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.EXPLORATION_EDITOR_WINDOWS),

            CATALOG_WELCOME: UserAssistance.initUserAssistanceContent(UserAssistance.CONTENT_IDS.CATALOG_WELCOME)
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {UserAssistance}
         */
        UserAssistance.getInstance = function () {
            if (!this.instance) {
                this.instance = new UserAssistance();
            }
            return this.instance;
        };


        return UserAssistance;
    })
;