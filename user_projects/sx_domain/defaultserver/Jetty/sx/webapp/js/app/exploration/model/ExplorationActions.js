/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationActions', [
        'knockout',
        'jquery',
        'HelpController'
    ],

    /**
     * @exports exploration
     * @ignore
     */
    function (ko, $, HelpController) {

        /**
         * @class
         * @classdesc -  exploration actions info: action is accessible (published canUndo canRedo) or action is needed: (reloadNeeded)
         */
        function ExplorationActions(dirty, reloadNeeded, published, canUndo, canRedo, remoteChanges, dependentExplorationCount) {

            var self = this;


            /**
             *
             * @type {boolean | ko.observable}
             */
            this.reloadNeeded = ko.observable(reloadNeeded || false);


            /**
             *  when we inspect published exploration , it shouldnt be edited
             *
             * @type {boolean | ko.observable}
             */
            this.isReadMode = ko.observable(ExplorationActions.isInspectMode());

            /**
             *
             * @type {boolean | ko.observable}
             */
            this.draft = ko.observable(ExplorationActions.isDraft(dirty));

            /**
             *  true if exploration published and not changes
             * @type {boolean | ko.observable}
             */
            this.published = ko.observable(published || false);

            /**
             * Publishing Conflict can happen when two users made changes to the same exploration simultaneously
             and try to publish it simultaneously
             */
            this.publishingConflict = ko.observable(false);


            /**
             * if publishingConflict happens and  publishButtonPressed
             * we will show you publishingConflict resolver
             *
             */
            this.publishButtonPressed = ko.observable(false);

            /**
             * show actions buttons popup
             */
            this.actionsButtonPressed = function () {

                self.publishButtonPressed(false);    //reset
                $('#actionsPopup').ojPopup(
                    'open',
                    '#actionsBtn',
                    {
                        my: 'center top',
                        at: 'center bottom'
                    }
                );
            };

            this.setHelpTopicForActions = function() {
                HelpController.getInstance().setTempId(HelpController.EXPLORATION_ACTIONS);
            };

            this.removeHelpTopicForActions = function() {
                HelpController.getInstance().removeTempId();
            };


            /**
             * count of published consumers
             * ,where consumer - exploration that used this exploration
             * @type {*|number}
             */
            this.dependentExplorationCount = dependentExplorationCount || 0;

            /**
             * remoteChanges - publishing conflict happens
             *
             * Publishing Conflict can happen when two users made changes to the same exploration simultaneously
             *
             * @type {*|boolean}
             */
            this.remoteChanges = remoteChanges || false;

            /**
             *
             * @type {boolean | ko.observable}
             */
            this.canUndo = ko.observable(canUndo || false);

            /**
             *
             * @type {boolean | ko.observable}
             */
            this.canRedo = ko.observable(canRedo || false);


            /**
             *
             * @param {boolean} reloadNeeded
             * @param {boolean} published
             * @param {boolean} canUndo
             * @param {boolean} canRedo
             * @param {boolean} canSync
             */
            this.updateExplorationActions = function (dirty, reloadNeeded, published, canUndo, canRedo, remoteChanges, dependentExplorationCount) {
                this.draft(dirty === false ? false : true);
                this.reloadNeeded(reloadNeeded || false);
                this.published(published || false);
                this.canUndo(canUndo || false);
                this.canRedo(canRedo || false);
                this.remoteChanges = remoteChanges || false;
                this.dependentExplorationCount = dependentExplorationCount || 0;

            };
        }


        /**
         * parameter that required to open pure published exploration
         *
         * by default user opens not pure published exploration but
         * 'user edited published exploration' (publish exploration editor, related with user id),
         * in 'user edited published exploration' user can add his local changes without affects other users
         *
         * pure published exploration : explorationId
         * user edited published exploration : explorationId + userId
         *
         * @type {string}
         */
        var inspect = '&inspect=true';

        ExplorationActions.isInspectMode = function () {
            return window.location.hash.indexOf(inspect) > -1;
        };


        ExplorationActions.isDraft = function (dirty) {

            if (ExplorationActions.isInspectMode()) {
                return false; //inspect mode cannot be draft, we can inspect only published exploration
            } else {
                return (dirty === false ? false : true);
            }
        };


        return ExplorationActions;

    });
