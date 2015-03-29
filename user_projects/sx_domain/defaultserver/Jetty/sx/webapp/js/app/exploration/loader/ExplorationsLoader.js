/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExplorationsLoader', [
        'jquery',
        'knockout',
        'Exploration',
        'Response',
        'FailureResponse',
        'RestAPI',
        'Notifications',
        'NotificationUtils',
        'PatternThing',
        'Utils',
        'Loader',
        'ProgressBar',
        'ExplorationConverter'
    ],

    /**
     * @exports exploration/loader
     * @ignore
     */
        function ($, ko, Exploration, Response, FailureResponse, RestAPI, Notifications, NotificationUtils, PatternThing, Utils, Loader, ProgressBar, ExplorationConverter) {

        /**
         * @class
         * @classdesc ajax methods to  create read, update, delete exploration  @see Exploration
         *
         * @constructor
         */
        function ExplorationsLoader() {


            var self = this;
            var explorationConverter = ExplorationConverter.getInstance();

            /**
             *
             * @param {string} explorationId
             * @param {Function} onSuccess
             * @param {Function} onFalureFunction
             */
            this.getExploration = function (explorationId, onSuccess, onFalureFunction) {

                var url = RestAPI.URL.exploration + "/" + explorationId;
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalureFunction, explorationId);
                        ProgressBar.getInstance().connectedState();

                    }
                });

            };

/**
             *
             * @param {string} explorationId
             * @param {Function} onSuccess
             * @param {Function} onFalureFunction
             */
            this.inspectPublishedExploration = function (explorationId, onSuccess, onFalureFunction) {

                var url = RestAPI.URL.inspect + "?id=" + explorationId;
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalureFunction, explorationId);
                        ProgressBar.getInstance().connectedState();

                    }
                });

            };


            /**
             *
             * @param {Object} explorationInJson
             * @param {Function} onSuccess
             * @param {Function} onFalure
             */
            this.createExploration = function (explorationInJson, onSuccess, onFalure) {

                var url = RestAPI.URL.exploration;
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'POST',
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(explorationInJson),
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        ProgressBar.getInstance().connectedState();

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, explorationInJson);
                        ProgressBar.getInstance().connectedState();
                    }
                });

            };

            /**
             *
             * @param {Object} explorationInJson
             * @param {Function} onSuccess
             * @param {Function} onFalure
             */
            this.updateExploration = function (explorationInJson, onSuccess, onFalure) {
                var url = RestAPI.URL.exploration + "/" + explorationInJson.name;
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'PUT',
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(explorationInJson),
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        ProgressBar.getInstance().connectedState();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, explorationInJson);
                        ProgressBar.getInstance().connectedState();
                    }
                });

            };


            /**
             *
             * @param {string} explorationId
             * @param {Function} onSuccess
             * @param {Function} onFalure
             */
            this.deleteExploration = function (explorationId, onSuccess, onFalure) {

                var url = RestAPI.URL.exploration + "/" + explorationId;
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'DELETE',
                    url: url,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        ProgressBar.getInstance().connectedState();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, explorationId);
                        ProgressBar.getInstance().connectedState();

                    }
                });

            };


            /**
             *
             * @param {string} url
             * @param {Exploration} exploration
             * @param {Function} onSuccess
             * @param {Function} onFalure
             */
            this.executeExplorationAction = function (url, exploration, onSuccess, onFalure) {

                var explorationInJson = explorationConverter.explorationToJson(exploration);
                var callee = arguments.callee.name;

                ProgressBar.getInstance().busyState();
                $.ajax({
                    type: 'POST',
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(explorationInJson),
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        ProgressBar.getInstance().connectedState();

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, exploration);
                        ProgressBar.getInstance().connectedState();

                    }
                });

            };


            /**
             * sync
             *
             * @param {string} patternId - (pattern type)
             * @param {Function} onSuccess
             * @param {Function} onFalure
             *
             * @returns {PatternThing}
             */
            this.getPatternById = function (patternId, onSuccess, onFalure) {

                /**
                 *
                 * @type {PatternThing}
                 */
                var pattern = null;

                var url = RestAPI.URL.pattern + "/" + patternId;
                var callee = arguments.callee.name;

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    async: false,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        pattern = new PatternThing(response.data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, patternId);
                    }
                });

                return pattern;

            };

            /**
             *
             * @param {Function} onSuccess
             * @param {Function} onFalure
             *
             * @returns {string} pubsubUrl
             */
            this.getPubsubUrl = function (onSuccess, onFalure) {

                var pubsubUrl = "";

                var url = RestAPI.URL.pubsubUrl;
                var callee = arguments.callee.name;

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        pubsubUrl = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, null);
                    }
                });
                return pubsubUrl;
            };

            /**
             *
             * @param {string} explorationTypeName
             * @param {Function} onSuccess
             * @param {Function} onFalure
             *
             * @returns {string} explorationDisplayName
             */
            this.getUniqueExplorationName = function (explorationTypeName, onSuccess, onFalure) {

                var explorationDisplayName = "";

                var url = RestAPI.URL.generateName;
                var callee = arguments.callee.name;
                var data = {typeName: explorationTypeName};
                $.ajax({
                        type: 'GET',
                        url: url,
                        data: data,
                        async: false,
                        cache: false,
                        contentType: 'text/plain',
                        dataType: 'json',
                        success: function (response, textStatus, jqXHR) {
                            Utils.goToLoginPageIfUserSessionExpired(response);
                            self.onSuccess_(callee, response, onSuccess);
                            explorationDisplayName = response.data;
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, explorationTypeName);
                        }
                    }
                )
                ;
                return explorationDisplayName;
            };


            /**
             *
             * @param params
             * @param onSuccess
             * @param onFalure
             * @returns {Array.<jsonObject>}
             */
            this.getTags = function (params, onSuccess, onFalure) {

                var url = RestAPI.URL.getTags;
                var callee = arguments.callee.name;

                var tags = [];

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        tags = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, params);
                    }
                });

                return tags;

            };



        }



        //inheritance
        Utils.extend(ExplorationsLoader, Loader);


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationsLoader}
         */
        ExplorationsLoader.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExplorationsLoader();
            }
            return this.instance;
        };

        return ExplorationsLoader;
    }
)
;
