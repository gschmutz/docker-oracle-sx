/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('PublishController', [
        'jquery',
        'knockout',
        'ExplorationUtils',
        'ExplorationsLoader',
        'RestAPI',
        'Utils',
        'NotificationUtils'
    ],
    /**
     * @exports exploration/publish
     * @version 1.0
     */
    function ($, ko, ExplorationUtils, ExplorationsLoader, RestAPI, Utils, NotificationUtils) {

        /**
         * @class
         * @classdesc Publish/Unpublish functionality : publish  - means that other sx users can consume exploration output (use exploration as source)
         *
         * @constructor
         */
        function PublishController() {

            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var explorationsLoader = ExplorationsLoader.getInstance();

            var publishButton;
            var unpublishButton;

            var overwriteButton;
            var uptakeButton;
            var cloneButton;
            var inspectButton;
            var cancelButton;


            this.onOpenExplorationEditor = function () {
                initPublishController();
            };


            function initPublishController() {

                publishButton = $(exUtils.publishExplorationBtn);
                publishButton.click(function () {
                    publishExploration();
                });

                unpublishButton = $(exUtils.unpublishExplorationBtn);
                unpublishButton.click(function () {
                    unpublishExploration();
                    $(exUtils.actionsPopup).ojPopup('close');
                });

                initResolvePublishingConflictButtons();
            }


            function initResolvePublishingConflictButtons() {

                overwriteButton = $(exUtils.overwriteExplorationBtn);
                overwriteButton.click(function () {
                    overwriteExploration();
                    $(exUtils.actionsPopup).ojPopup('close');
                });


                uptakeButton = $(exUtils.uptakeExplorationBtn);
                uptakeButton.click(function () {
                    uptakeExploration();
                    $(exUtils.actionsPopup).ojPopup('close');
                });


                cloneButton = $(exUtils.cloneExplorationBtn);
                cloneButton.click(function () {
                    cloneExploration();
                    $(exUtils.actionsPopup).ojPopup('close');
                });

                inspectButton = $(exUtils.inspectExplorationBtn);
                inspectButton.click(function () {
                    inspectExploration();
                    $(exUtils.actionsPopup).ojPopup('close');
                });

                cancelButton = $(exUtils.cancelExplorationBtn);
                cancelButton.click(function () {
                    resetPublishingConflict();
                    $(exUtils.actionsPopup).ojPopup('close');
                });
            }


            /**
             *Overwrite: overwrite remote exploration
             * publish with force key
             * force key means that other user changes in published exploration become overrided
             *
             */
            function overwriteExploration() {
                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.overwrite, exploration, onOverwriteSuccesfull, NotificationUtils.overwriteFailed);
                }
            }


            /**
             *Uptake: uptake changes from the remote exploration to the local exploration.
             *
             */
            function uptakeExploration() {
                //give me conflicted exploration id

                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.uptake, exploration, onUptakeSuccesfull, NotificationUtils.uptakeFailed);
                }
            }

            /**
             *Clone(Publish as): Publish the local exploration under a different name.
             *
             */
            function cloneExploration() {
                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.clone, exploration, onCloneSuccesfull, NotificationUtils.cloneFailed);
                }
            }

            /**
             *Inspect: Opens up the remote exploration to look at it without uptaking.
             *
             */
            function inspectExploration() {
                var exploration = explorationKoModel.exploration();
                exploration.actions.publishingConflict(false);
                window.location.hash = '#explorationEditor:id=' + exploration.name() + exUtils.inspectHashParam;
                Utils.reloadFromCache();

            }

            /**
             *Reset publishing conflict status
             *
             */
            function resetPublishingConflict() {
                explorationKoModel.exploration().actions.publishingConflict(false);

            }

            function unpublishExploration() {
                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0) {
                    explorationsLoader.executeExplorationAction(RestAPI.URL.unpublish, exploration, onUnpublishSuccesfull, onFailed);
                }
            }

            /**
             *
             * @param {Response} response
             */
            function onUnpublishSuccesfull(response) {

                if (isExplorationHasConsumers(response)) {
                    NotificationUtils.unpublishFailedHasConsumers();
                } else {
                    NotificationUtils.unpublishedSuccesfull();
                    var exploration = exUtils.explorationKoModel.exploration();
                    if (exploration.actions.isReadMode()) {
                        onUnpublishSuccesfullInInspectModeReopenInDraftMode(exploration.name());

                    }
                }

                exUtils.updateExplorationModel(response.data);

            }

            /**
             *
             * @param explorationId
             */
            function onUnpublishSuccesfullInInspectModeReopenInDraftMode(explorationId) {
                window.location.hash = '#explorationEditor:id=' + explorationId;
                Utils.reloadFromCache();
            }


            /**
             * publish with force key
             * force key means that other user changes in published exploration become overrided

             * @param {Response} response
             */
            function onOverwriteSuccesfull(response) {

                if (!isActionSuccesfull(response)) {
                    NotificationUtils.overwriteFailed();
                } else {
                    explorationKoModel.exploration().actions.publishingConflict(false);
                    $(exUtils.actionsPopup).ojPopup('close');
                    NotificationUtils.overwriteSuccesfull();

                }

                exUtils.updateExplorationModel(response.data);

            }

            /**
             *
             * @param {Response} response
             */
            function onUptakeSuccesfull(response) {

                var uptakedExplorationId = getExplorationId(response);


                if (!isActionSuccesfull(response)) {
                    NotificationUtils.uptakeFailed();
                } else {
                    explorationKoModel.exploration().actions.publishingConflict(false);
                    $(exUtils.actionsPopup).ojPopup('close');
                    NotificationUtils.uptakeSuccesfull();

                    Utils.reloadFromCacheWithTimeout('#explorationEditor:id=' + uptakedExplorationId);
                }


            }


            /**
             *
             * @param {Response} response
             */
            function onCloneSuccesfull(response) {

                var clonedExplorationId = getExplorationId(response);

                if (!isActionSuccesfull(response) || !clonedExplorationId) {
                    NotificationUtils.cloneFailed();
                } else {
                    explorationKoModel.exploration().actions.publishingConflict(false);
                    $(exUtils.actionsPopup).ojPopup('close');
                    NotificationUtils.cloneSuccesfull();
                    window.location.hash = '#explorationEditor:id=' + clonedExplorationId;
                    Utils.reloadFromCache();
                }


            }

            /**
             *
             * @param {Response} response
             */
            function getExplorationId(response) {
                return response.data ? response.data.name : null;

            }


            /**
             *
             * @param {Response} response
             */
            function isActionSuccesfull(response) {
                return response.success;

            }

            /**
             *
             * @param {Response} response
             */
            function isExplorationHasConsumers(response) {
                return !response.success &&
                    response.data &&
                    response.data.status &&
                    response.data.status.dependentExplorationCount > 0;   //consumers

            }

            /**
             *
             * @param {Response} response
             */
            function isExplorationHasPublishingConflict(response) {
                return !response.success &&
                    response.data &&
                    response.data.status &&
                    response.data.status.remoteChanges; //conflict

            }

            /**
             *
             * @param {Exploration} exploration
             */
            function isExplorationHasPublishingConflict_(exploration) {

                return exploration.actions.remoteChanges; //conflict

            }


            /**
             *
             * @param {Response} response
             */
            function isExplorationPublishFailed(response) {
                return !response.success;
            }


            function publishExploration() {
                $(exUtils.actionsPopup).ojPopup('close');

                var exploration = explorationKoModel.exploration();
                var name = exploration.name();
                if (name && name.length > 0) {
                    if (isExplorationCanBePublished(exploration)) {

                        if (isExplorationHasPublishingConflict_(exploration)) {
                            tryToResolvePublishingConflict();
                        } else {
                            explorationsLoader.executeExplorationAction(RestAPI.URL.publish, exploration, onPublishSuccesfull, onFailed);
                        }
                    }
                }
            }


            /**
             *
             * @param {Response} response
             */
            function onPublishSuccesfull(response) {

                var exploration = explorationKoModel.exploration();

                if (exploration.actions.published() === true && isExplorationHasConsumers(response)) {
                    NotificationUtils.republishedFailedExplorationHasConsumers();

                } else if (exploration.actions.published() === true && isExplorationHasPublishingConflict(response)) {
                    NotificationUtils.republishedFailedBecausePublishingConflict();
                    tryToResolvePublishingConflict();

                } else if (isExplorationPublishFailed(response)) {
                    NotificationUtils.republishedFailed();

                } else if (exploration.actions.published() === true) {
                    explorationKoModel.exploration().actions.publishingConflict(false);
                    NotificationUtils.republishedSuccesfull();

                } else { //not been published yet
                    explorationKoModel.exploration().actions.publishingConflict(false);
                    NotificationUtils.publishedSuccesfull();
                }

                exUtils.updateExplorationModel(response.data);

            }

            function tryToResolvePublishingConflict() {

                var exploration = explorationKoModel.exploration();
                exploration.actions.publishingConflict(true);
                exploration.actions.publishButtonPressed(true);

                $(exUtils.actionsPopup).ojPopup('open');

            }


            function isExplorationCanBePublished(exploration) {

                if (exploration.isPatternBasedExploration) {
                    return true;

                } else {

                    if (exploration.queries().length === 1) {
                        return true;

                    } else if (exploration.queries().length === 0) {
                        NotificationUtils.publishFailedNoSources();
                        return false;

                    } else {
                        NotificationUtils.publishFailedSourcesNotCorrelated();
                        return false;
                    }

                }

            }

        }


        /**
         *
         * @param {FailureResponse} failureResponse
         */
        function onFailed(failureResponse) {
            NotificationUtils.onFailureResponse(failureResponse);
        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {PublishController}
         */
        PublishController.getInstance = function () {
            if (!this.instance) {
                this.instance = new PublishController();
            }
            return this.instance;
        };


        return PublishController;

    }
)
;
