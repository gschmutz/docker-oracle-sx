/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('UserInfo', [
        'knockout'
    ],

    /**
     * @exports user
     * @ignore
     */
    function (ko) {

        /**
         * @class
         * @classdesc -  user info:
         */
        function UserInfo() {

            /**
             *
             * @type {String | ko.observable}
             */
            this.userName = ko.observable("");

            /**
             *  common channel: send messages to all users,
             *  for notifications related with Shared ( Published) Explorations
             *
             * @type {String | ko.observable}
             */
            this.mainPubSubChannel = ko.observable("");

            /**
             *  personal channel: send messages only for current user,
             *  for notifications related with Draft (local) (not Published) Explorations
             *
             * @type {String | ko.observable}
             */
            this.userPubSubChannel = ko.observable("");


            /**
             * user token
             * token is used to filter userPubSubChannel  messages, that dublicated in mainPubSubChannel for other users
             * all messages have token that identify author
             *
             * for example :
             * user change Shared (Published ) exploration, then
             *  1)user become notified by userPubSubChannel as author
             *  2)all users become notifyed by mainPubSubChannel
             *  3) and  token used to ignore dublicated messages
             *
             * @type {String | ko.observable}
             */
            this.token = ko.observable("");


            /**
             *
             * @type {String | ko.observable}
             */
            this.pubSubServerURL = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.visualizerURL = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.sxVersion = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.osName = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.osVersion = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.javaVersion = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.javaVendor = ko.observable("");

            /**
             *
             * @type {String | ko.observable}
             */
            this.oepServer = ko.observable("");


            this.updateUserInfo = function (userName,
                                            mainPubSubChannel,
                                            userPubSubChannel,
                                            token,
                                            pubSubServerURL,
                                            visualizerURL,
                                            sxVersion,
                                            osName,
                                            osVersion,
                                            javaVersion,
                                            javaVendor,
                                            oepServer) {
                this.userName(userName);
                this.mainPubSubChannel(mainPubSubChannel);
                this.userPubSubChannel(userPubSubChannel);
                this.token(token);
                this.pubSubServerURL(pubSubServerURL);
                this.visualizerURL(visualizerURL);
                this.sxVersion(sxVersion);
                this.osName(osName);
                this.osVersion(osVersion);
                this.javaVersion(javaVersion);
                this.javaVendor(javaVendor);
                this.oepServer(oepServer);

            };
        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {UserInfo}
         */
        UserInfo.getInstance = function () {
            if (!this.instance) {
                this.instance = new UserInfo();
            }
            return this.instance;
        };


        return UserInfo;

    });
