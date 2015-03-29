/**
 * Product: OEP Stream Explorer
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'SourceLoader', [
        'jquery',
        'knockout',
        'Translate',
        'RestAPI',
        'Utils',
        'Loader',
        'NotificationUtils',
        'EventSource'
    ],

    /**
     * @exports exploration/loader
     * @ignore
     */
        function ($, ko, Translate, RestAPI, Utils, Loader, NotificationUtils, EventSource) {

        /**
         * @class
         * @classdesc get sources by id, get list of sources @see EventSource
         *
         * @constructor
         */
        function SourceLoader() {

            var self = this;

            /**
             *
             * @param params
             * @param onSuccess
             * @param onFalure
             * @returns {Array.<jsonObject>}
             */
            self.getSourcesList = function (params, onSuccess, onFalure) {

                var url = RestAPI.URL.source;
                var callee = arguments.callee.name;

                var sources = [];

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);

                        self.onSuccess_(callee, response, onSuccess);
                        sources = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, params);
                    }
                });

                return sources;

            };

            /**
             *
             * @param {Object |Map} sourcesIdsWithUpdatedAtDate
             * @param {Function} onSuccess
             * @param {Function} onFalure
             * @returns {Array.<jsonObject>}
             */
            self.updateEventSourcesList = function (sourcesIdsWithUpdatedAtDate, onSuccess, onFalure) {

                var url = RestAPI.URL.updateSourceCache;
                var callee = arguments.callee.name;

                var sources = [];

                $.ajax({
                    type: 'POST',
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(sourcesIdsWithUpdatedAtDate),
                    async: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);

                        self.onSuccess_(callee, response, onSuccess);
                        sources = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, sourcesIdsWithUpdatedAtDate);
                    }
                });

                return sources;

            };


            /**
             *
             * @param params
             * @param onSuccess
             * @param onFalure
             * @returns {Array.<jsonObject>}
             */
            self.getSourceTypeDescriptors = function (params, onSuccess, onFalure) {

                var url = RestAPI.URL.sourceType;
                var callee = arguments.callee.name;

                var sourceTypeDescriptors = [];

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);

                        self.onSuccess_(callee, response, onSuccess);
                        sourceTypeDescriptors = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, params);
                    }
                });

                return sourceTypeDescriptors;

            };


            /**
             *
             * @param sourceId
             * @param onSuccess
             * @param onFalure
             * @returns {EventSource}
             */
            this.getSourceBySourceId = function (sourceId, onSuccess, onFalure) {
                var url = RestAPI.URL.source + "/" + sourceId;
                var callee = arguments.callee.name;

                var source = null;
                $.ajax({
                    type: 'GET',
                    url: url,
                    contentType: 'text/plain',
                    dataType: 'json',
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);

                        if (!response.success) {
                            NotificationUtils.failedToGetSource(sourceId);
                        } else {
                            try {
                                source = new EventSource(response.data);
                                if (source.isCorrupted()) {
                                    NotificationUtils.failedToGetSource(source.displayName || source.id);
                                }
                            } catch (e) {
                                NotificationUtils.failedToGetSource(sourceId);
                            }

                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, sourceId);
                    }
                });

                return source;


            };


            return this;
        }


        //inheritance
        Utils.extend(SourceLoader, Loader);

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourceLoader}
         */
        SourceLoader.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourceLoader();
            }
            return this.instance;
        };

        return SourceLoader;
    }
)
;