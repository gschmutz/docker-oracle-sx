/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('QuerySubscriptionModel', [
        'jquery'
        , 'knockout'
        , 'ExplorationUtils'
        , 'FieldType'
        , 'EventTypeField'
        , 'EventTypeController'
        , 'QueryAnalyser'
        , 'Utils'
    ],

    /**
     * @exports exploration/subscriber
     * @ignore
     */
        function ($, ko, ExplorationUtils, FieldType, EventTypeField, EventTypeController, QueryAnalyser, Utils) {

        /**
         * @class
         * @classdesc Query events subscription metadata
         * we can subscribe to exploration query events by  pubSubChannel:
         * each pubSubChannel receive events from one CQL query  @see { SubscriberCometd, Query}
         *
         * @constructor
         * @param {String} name
         */
        function QuerySubscriptionModel(name) {

            this.exUtils = ExplorationUtils.getInstance();

            this.name = name;

            /**
             * cometd subscription object
             *  ex: subscription = cometd.subscribe(channelName, ...}
             */
            this.subscription = null;

            /**
             *
             * @type {Query}
             */
            this.query = null;

            /**
             *
             * @type {EventTypeController}
             */
            this.eventTypeController = EventTypeController.getInstance();


            /**
             * notificator : all query visualization components(tables, charts) should be rebuilded
             * @returns {ko.observable | object}
             */
            this.isQueryChanged = ko.observable({}).extend({ notify: 'always' });

            /**
             * event notificator : pass event to query visualization components(tables, charts)
             * @returns {ko.observable | object}
             */
            this.observableEvent = ko.observable({}).extend({ notify: 'always' });

        }

        QuerySubscriptionModel.prototype.updateQuerySubscriptionModel = function () {

            var exploration = this.exUtils.explorationKoModel.exploration();
            this.query = QueryAnalyser.getInstance().getExplorationPrimaryQuery(exploration);

            if (this.eventTypeController.updateEventType(this.query)) {
                this.isQueryChanged(true);
            }
        };


        QuerySubscriptionModel.prototype.onCloseExplorationEditor = function () {
            this.query = null;
            this.eventTypeController.onCloseExplorationEditor();
        };


        /**
         *
         * Convert pubsub event to sx event (eligible for charts and table components)
         * @param event
         */
        QuerySubscriptionModel.prototype.notifyAboutEvent = function (event) {
            event = this.eventTypeController.checkAndConvertEvent(event);
            if (event) {
                this.observableEvent(event);
            }
        };


        return QuerySubscriptionModel;

    }
)
;
