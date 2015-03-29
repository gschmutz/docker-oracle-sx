/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SubscriberCometd', [
        'jquery'
        , 'knockout'
        , 'ExplorationKoModel'
        , 'ExplorationUtils'
        , 'ExplorationsLoader'
        , 'ServiceFactory'
        , 'QuerySubscriptionModel'
        , 'NotificationUtils'
        , 'jquerycomet'

    ],

    /**
     * @exports exploration/subscriber
     * @ignore
     */
    function ($, ko, ExplorationKoModel, ExplorationUtils, ExplorationsLoader, ServiceFactory, QuerySubscriptionModel, NotificationUtils) {
        
        var EVENTS_BUFFER_SIZE = 25;
        var EVENT_PUSH_INTERVAL = 100;  // ms

        /**
         * @class
         * @classdesc subscribe_ to oep pubsub channels by using cometd to get oep events
         *
         * @constructor
         */
        function SubscriberCometd() {

            var self = this;
            var exUtils = ExplorationUtils.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;
            var pubsubUrl = ExplorationsLoader.getInstance().getPubsubUrl(null, NotificationUtils.onFailureResponse);

            var cometd = $.cometd;

            /**
             * cometd connection state (to pubsub)
             * @type {boolean}
             */
            var connected = false;

            /**
             * The timestamp when the "Too many events came" warning is shown
             * @type {boolean}
             */
            var tooManyEventsWarning = 0;
            
            /**
             * The events buffer to collect events and push them to the table and charts every 0.5 sec 
             * (the interval TBS) to avoid JS overload
             * @type Array
             */
            var eventsBuffer = [];
            
            /**
             * The events push timer id
             * @type Number
             */
            var eventPush = null;

            /**
             *
             * @type {QuerySubscriptionModel}
             */
            this.subscription1 = new QuerySubscriptionModel("subscription1");
            

            this.onOpenExplorationEditor = function () {
                this.refreshSubscription();
            };

            this.refreshSubscription = function () {
                refreshSubscription_(this.subscription1);
            };

            this.subscribeToExplorationChannel = function () {
                subscribe_(this.subscription1);
            };

            this.unsubscribeFromExplorationChannel = function () {
                unsubscribe_(this.subscription1);
            };

            this.onCloseExplorationEditor = function () {
                unsubscribe_(this.subscription1);
                this.subscription1.onCloseExplorationEditor();
            };

            initCometd.call(self);


            function initCometd() {
                var self = this;
                cometd.addListener('/meta/connect', function (message) {
                    if (cometd.isDisconnected()) {
                        return;
                    }
                    var wasConnected = connected;
                    connected = message.successful;
                    if (!wasConnected && connected) {// Reconnected
                        console.log("pubsub connection is SUCCESSFUL");
                        refreshSubscriptions.call(self);
                    }
                    else if (wasConnected && !connected) { // Disconnected
                        console.log("pubsub connection is FAILED");
                        refreshSubscriptions.call(self);
                    }
                });


                cometd.addListener('/meta/disconnect', function (message) {
                    if (message.successful) {
                        connected = false;
                    }
                });


                cometd.onListenerException = function (exception, subscriptionHandle, isListener, message) {
                    console.log("Subscriber exception", exception);
                    if (isListener) {
                        this.removeListener(subscriptionHandle);
                        console.log("removeListener " + subscriptionHandle);
                    }
                    else {
                        this.unsubscribe(subscriptionHandle);
                        console.log("unsubscribe " + subscriptionHandle);
                    }
                };


                cometd.configure({
                    url: pubsubUrl
                    /*,
                     logLevel: 'debug'*/
                });
                cometd.websocketEnabled = false;
                cometd.handshake();

            }


            /**
             *
             * @param {QuerySubscriptionModel} subscriptionModel
             */
            function refreshSubscription_(subscriptionModel) {
                unsubscribe_(subscriptionModel);
                subscribe_(subscriptionModel);
            }


            function refreshSubscriptions() {
                unsubscribe_(this.subscription1);
                subscribe_(this.subscription1);
            }

            /**
             *
             * @param {QuerySubscriptionModel} subscriptionModel
             */
            function unsubscribe_(subscriptionModel) {
                if (subscriptionModel.subscription) {
                    cometd.unsubscribe(subscriptionModel.subscription);
                    console.log("unsubscribe " + subscriptionModel.name, subscriptionModel.subscription.channel);
                }
                subscriptionModel.subscription = null;
                eventsBuffer = [];
                clearInterval(eventPush);
                tooManyEventsWarning = 0;
            }

            /**
             *
             * @param {QuerySubscriptionModel} subscriptionModel
             */
            function subscribe_(subscriptionModel) {
                var explorationName = explorationKoModel.exploration().name();
                var pubSubChannelName = explorationKoModel.exploration().pubSubChannelName;

                if (subscriptionModel.subscription === null && explorationName && explorationName.length > 0 && pubSubChannelName) {
                    var pushStart = 0;
                    var pushCount = 0;
                    var comeCount = 0;
                    eventPush = setInterval(function() {
                        if (eventsBuffer.length > 0) {
                            subscriptionModel.notifyAboutEvent(eventsBuffer.shift());
                            if (tooManyEventsWarning > 0) {
                                if (pushStart === 0) {
                                    pushStart = (new Date()).getTime();
                                }
                            }
                        }
                        if (pushStart > 0) {
                            pushCount++;
                        }
                    }, EVENT_PUSH_INTERVAL);
                    subscriptionModel.subscription = cometd.subscribe(pubSubChannelName, function (message) {
                        var arriveTime = (new Date()).getTime();
                        comeCount += message.data.length;
                        if (eventsBuffer.length + message.data.length > EVENTS_BUFFER_SIZE) {
                            console.log("Too many events at " + arriveTime);
                            NotificationUtils.showTooManyEventsWarning();
                            tooManyEventsWarning = arriveTime;
                        } else if (tooManyEventsWarning > 0 && pushStart > 0 &&
                                   comeCount / (arriveTime - tooManyEventsWarning) < pushCount / (arriveTime - pushStart)) {
                            console.log("Stream resumed at " + arriveTime + " " + 
                                        comeCount / (arriveTime - tooManyEventsWarning) + " " +
                                        pushCount / (arriveTime - pushStart));
                            tooManyEventsWarning = 0;
                            pushStart = 0;
                            pushCount = 0;
                            comeCount = 0;
                            NotificationUtils.eventsAreShownAgain();
                        } 
                        if (tooManyEventsWarning === 0) {
                            console.log("OK at " + arriveTime);
                            eventsBuffer = eventsBuffer.concat(message.data);
                        }
                    });
                    console.log("SubscriberCometd:: subscribe :" + subscriptionModel.name, pubSubChannelName);
                }
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SubscriberCometd}
         */
        SubscriberCometd.getInstance = function () {
            if (!this.instance) {
                this.instance = new SubscriberCometd();
            }
            return this.instance;
        };


        return SubscriberCometd;

    });
