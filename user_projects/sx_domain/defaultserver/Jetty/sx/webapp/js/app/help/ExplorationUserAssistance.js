/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationUserAssistance', [
        'jquery',
        'ExplorationKoModel',
        'UserAssistance',
        'WindowsDrawerController',
        'HelpBannerPanel',
        'EditedRegion'
    ],

    /**
     * @exports help
     */
    function ($, ExplorationKoModel, UserAssistance, WindowsDrawerController, HelpBannerPanel, EditedRegion) {


        /**
         * @class
         * @classdesc  User Assistant for different Exploration regions and use-cases
         *
         * @constructor
         */
        function ExplorationUserAssistance() {

            var explorationKoModel = ExplorationKoModel.getInstance();
            var userAssistance = UserAssistance.getInstance();

            this.currentEditedRegionSubscription = null;


            this.onOpenExplorationEditor = function () {
                this.currentEditedRegionSubscription = explorationKoModel.currentEditedRegion.subscribe(function (editedRegion) {

                    if (explorationKoModel.exploration().queries().length > 1) {
                        userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED);

                    } else if (WindowsDrawerController.getInstance().isWindowsDrawerOpened) {
                        userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_WINDOWS);

                    } else {

                        switch (editedRegion) {
                            case EditedRegion.EditedRegion.Filters:
                                userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_FILTERS);
                                break;

                            case EditedRegion.EditedRegion.Sources:
                                userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_SOURCES);
                                break;

                            case EditedRegion.EditedRegion.Summaries:
                                userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_SUMMARIES);
                                break;

                            case EditedRegion.EditedRegion.Correlations:

                                if (explorationKoModel.exploration().queries().length > 1) {
                                    userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED);
                                    break;
                                }

                                //default for correlations
                                userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_CORRELATIONS);
                                break;


                            default:
                                userAssistance.setUserAssistanceContent(UserAssistance.CONTENT.EXPLORATION_EDITOR_WELCOME);
                        }

                    }

                });

                HelpBannerPanel.panel('open');

            };


            this.onCloseExplorationEditor = function () {
                if (this.currentEditedRegionSubscription) {
                    this.currentEditedRegionSubscription.dispose();
                    this.currentEditedRegionSubscription = null;
                }


            };


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationUserAssistance}
         */
        ExplorationUserAssistance.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationUserAssistance();
            }
            return this.instance;
        };


        return ExplorationUserAssistance;
    }
)
;