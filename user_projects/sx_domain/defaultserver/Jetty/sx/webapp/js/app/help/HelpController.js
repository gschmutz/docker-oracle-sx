/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('HelpController', [
    ],

    /**
     * @exports exploration/converter
     * @version 1.0
     */
    function () {


        /**
         * @class
         * @classdesc opens new tab with Help by topic ID
         * @constructor
         *
         * You can for help using 2 ways:
         * 1. call setCurrentTopicId to set the topic of the current page.
         *    now, when you press F1 button, help page will be opened in the separate tab|page
         * 2. or you can call directly method showHelp(topicId) method.
         *    When you press F1 you still will get the Help, corresponding to the currentTopicId.
         *    You can set it in a separate call, if you need.
         */
        function HelpController() {
            var self = this;

            /**
             * @see NavigationController.initHelpController
             *
             * @type {SxPages | ko.observable}
             */

            var parentTopicId = null;
            var childTopicId = null;
            var tempId = null;

            // Internet Explorer
            if ("onhelp" in window) {
                window.onhelp = function () {
                    self.openHelpInNewWidow();
                    return false;
                }
            }
            // Others
            else {
                document.onkeydown = function (evt) {
                    cancelKeypress = (evt.keyCode == 112);
                    if (cancelKeypress) {  // F1 was pressed
                        self.openHelpInNewWidow();
                        return false;
                    }
                };

                // Additional step required for Opera
                document.onkeypress = function (evt) {
                    if (cancelKeypress)
                        return false;
                }
            }

            /**
             *
             * @param {String}  topicId
             */
            self.openHelpInNewWidow = function (topicId) {
                if (!topicId) {
                    topicId = getDefaultTopicId();

                    if (!topicId) {
                        console.log("No topic id has been provided.");
                        return;
                    }
                }

                var url = getHtmlUrlByTopicId(topicId);
                window.open(url, 'Help');
            };


            /**
             *
             * @param {String}  topicId
             */
            self.setPageTopicId = function (topicId) {
                parentTopicId = topicId;
            };


            self.setDialogTopicId = function (topicId, $dialog) {
                $dialog.on("open", function (event, ui) {
                    childTopicId = topicId;
                });

                $dialog.on("close", function (event, ui) {
                    childTopicId = null;
                });

                $dialog.on("ojopen", function (event, ui) {
                    childTopicId = topicId;
                });

                $dialog.on("ojclose", function (event, ui) {
                    childTopicId = null;
                });

                $dialog.on("dialogopen", function (event, ui) {
                    childTopicId = topicId;
                });

                $dialog.on("dialogclose", function (event, ui) {
                    childTopicId = null;
                });
            };

            self.setTempId = function(topicId) {
                tempId = topicId;
            };

            self.removeTempId = function() {
                tempId = null;
            };


            function getHtmlUrlByTopicId(topicId) {
                return "help/" + topicId;
            }

            function getDefaultTopicId() {
                if(tempId) {
                    return tempId;
                }

                if (childTopicId) {
                    return childTopicId;
                }

                if (parentTopicId) {
                    return parentTopicId;
                }

                return HelpController.HOME;
            }

        }

        HelpController.HOME = "cs_pagename1.htm#f1_sx_home_pg";
        HelpController.CATALOG = "f1_oep_sx_home001.htm#f1_sx_catalog_page";
        HelpController.CREATE_EXPLORATION_DLG = "f1_sx_create_expl_pg.htm#f1_sx_create_expl_pg";
        HelpController.EXPLORATION = "f1_sx_expl_pg.htm#f1_sx_expl_pg";
        HelpController.PREFERENCES_GENERAL = "f1_oep_sx_pref001.htm#f1_sx_pref_gen_pg";
        HelpController.PREFERENCES_VIEWMODE = "f1_oep_sx_pref002.htm#f1_sx_pref_viewmode_pg";
        HelpController.PREFERENCES_NOTIFICATIONS = "f1_oep_sx_pref003.htm#f1_sx_pref_noti_pg";
        HelpController.PREFERENCES_CATALOG = "f1_oep_sx_pref004.htm#f1_sx_pref_cat_pg";
        HelpController.PREFERENCES_EXPLORATION_LIVE_OUTPUT = "f1_oep_sx_pref005.htm#f1_sx_pref_expl_livopstr_pg";
        HelpController.STREAM = "cs_pagename1001.htm#f1_sx_stream_pg";
        HelpController.REFERENCE = "f1_oep_sx_references001.htm#f1_sx_ref_pg";
        HelpController.SEND_DOWNSTREAM = "cs_pagename1002.htm#f1_sx_configure_target";
        HelpController.EXPORT_EXPLORATION = "f1_oep_expl_actions002.htm#f1_sx_export_expl_dialog";
        HelpController.EXPLORATION_ACTIONS = "f1_oep_expl_actions001.htm#f1_sx_expl__actions_pg";

        HelpController.CREATE_STREAM_DLG_SOURCE = "f1_oep_sx_streams004.htm#f1_sx_create_stream_srcdtls";
        HelpController.CREATE_STREAM_DLG_TYPE = "f1_oep_sx_streams005.htm#f1_sx_create_stream_typeprop";
        HelpController.CREATE_STREAM_DLG_SHAPE = "f1_oep_sx_streams006.htm#f1_sx_create_stream_shape";

        HelpController.CREATE_REFERENCE_DLG_SOURCE = "f1_oep_sx_references005.htm#f1_sx_create_ref_srcdtls";
        HelpController.CREATE_REFERENCE_DLG_TYPE = "f1_oep_sx_references006.htm#f1_sx_create_ref_typeprop";
        HelpController.CREATE_REFERENCE_DLG_SHAPE = "f1_oep_sx_references007.htm#f1_sx_create_ref_shape";

        HelpController.EDIT_STREAM_DLG_SOURCE = "f1_oep_sx_streams001.htm#f1_sx_editsrc_srcdetails_dialog";
        HelpController.EDIT_STREAM_DLG_TYPE = "f1_oep_sx_streams002.htm#f1_sx_editsrc_typeprop_dialog";
        HelpController.EDIT_STREAM_DLG_SHAPE = "f1_oep_sx_streams003.htm#f1_sx_editsrc_shape_dialog";

        HelpController.EDIT_REFERENCE_DLG_SOURCE = "f1_oep_sx_references002.htm#f1_sx_editref_srcdetails_dialog";
        HelpController.EDIT_REFERENCE_DLG_TYPE = "f1_oep_sx_references003.htm#f1_sx_editref_typeprop_dialog";
        HelpController.EDIT_REFERENCE_DLG_SHAPE = "f1_oep_sx_references004.htm#f1_sx_editref_shape_dialog";

        HelpController.CREATE_PATTERN_DETECT_DUPLICATES = "f1_oep_sx_patterns001.htm#f1_sx_create_patt_det_dup_pg";
        HelpController.CREATE_PATTERN_MISSING_EVENT = "f1_oep_sx_patterns002.htm#f1_sx_create_patt_det_mis_pg";
        HelpController.CREATE_PATTERN_W = "f1_oep_sx_patterns003.htm#f1_sx_create_patt_w_pg";
        HelpController.CREATE_PATTERN_INVERSE_W = "f1_oep_sx_patterns004.htm#f1_sx_create_patt_inv_w_pg";
        HelpController.CREATE_PATTERN_TOP_N = "f1_oep_sx_patterns005.htm#f1_sx_create_patt_topn_pg";
        HelpController.CREATE_PATTERN_BOTTOM_N = "f1_oep_sx_patterns006.htm#f1_sx_create_patt_bottomn_pg";
        HelpController.CREATE_PATTERN_ELIMINATE_DUPLICATES = "f1_oep_sx_patterns007.htm#f1_sx_create_patt_eli_dup_pg";
        HelpController.CREATE_PATTERN_FLUCTUATION = "f1_oep_sx_patterns008.htm#f1_sx_create_patt_fluct_pg";
        HelpController.CREATE_PATTERN_UP_TREND = "f1_oep_sx_patterns009.htm#f1_sx_create_patt_uptrend_pg";
        HelpController.CREATE_PATTERN_DOWN_TREND = "f1_oep_sx_patterns010.htm#f1_sx_create_patt_dwntrend_pg";







        /**
         * Get instance of singleton
         *
         * @static
         * @return {HelpController}
         */
        HelpController.getInstance = function () {
            if (!this.instance) {
                this.instance = new HelpController();
            }
            return this.instance;
        };


        return HelpController;

    }
);
