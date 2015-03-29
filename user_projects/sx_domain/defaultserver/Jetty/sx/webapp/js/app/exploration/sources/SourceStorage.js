/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SourceStorage', [
        'jquery'
        , 'knockout'
        , 'EventSource'
        , 'Field'
        , 'FieldType'
        , 'SourceLoader'
        , 'Utils'
        , 'ProgressBar'
        , 'NotificationUtils'
    ],

    /**
     * @exports exploration/loader
     * @version 1.0
     *
     */
        function ($, ko, EventSource, Field, FieldType, SourceLoader, Utils, ProgressBar, NotificationUtils) {

        /**
         * @class
         * @classdesc storage/cache for sources, to reuse its in @Exploration
         * @constructor
         */
        function SourceStorage() {

            var self = this;
            /**
             *
             * @type {int | miliseconds}
             */
            var CACHE_TIME_TO_LIVE = 10 * 60 * 1000; //10 minutes

            /**
             * cache
             * @type {EventSource[]}
             */
            var eventSources = [];

            /**
             *
             * @type {boolean}
             */
            var isRefreshNeeded = true;

            /**
             *
             * @type {int | miliseconds}
             */
            var refreshNeededTime = null;

            var sourceLoader = SourceLoader.getInstance();


            this.onOpenExploration = function () {
                isRefreshNeeded = true;
                refreshAllEventSources();
            };

            this.onOpenCatalog = function () {
                isRefreshNeeded = true;
            };


            /**
             *
             * @param {String} sourceName
             */
            this.updateSourceStorageBySourceId = function (sourceName) {
                this.getFreshSourceBySourceId(sourceName);
            };

            this.isRefreshAllEventSourcesNeeded = function () {
                return eventSources.length === 0 ||
                    isRefreshNeeded ||
                    refreshNeededTime == null ||
                    refreshNeededTime < new Date().getTime();
            };


            /**
             *
             * @param {String} sourceName
             * @returns {EventSource || null}
             */
            this.getSourceBySourceId = function (sourceName) {
                var sources = this.getSources();
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i].name == sourceName) {
                        return sources[i];
                    }
                }

                // if source was not founded in cache
                var loadedSource = this.refreshEventSource(sourceName);
                return loadedSource;
            };


            /**
             *
             * get fresh source from backend,
             * update Source Storage by it,
             * and return it
             *
             * @param {String} sourceName
             * @returns {EventSource}
             */
            this.getFreshSourceBySourceId = function (sourceName) {
                if (this.isRefreshAllEventSourcesNeeded()) {
                    refreshAllEventSources();
                    return this.getSourceBySourceId(sourceName);

                } else {//refresh only one source
                    var loadedSource = this.refreshEventSource(sourceName);
                    return loadedSource;

                }
            };

            /**
             *
             * @param {String} sourceName
             * @returns {EventSource || null}
             */
            this.refreshEventSource = function (sourceName) {
                var loadedSource = sourceLoader.getSourceBySourceId(
                    sourceName,
                    null,
                    onFailed
                );
                if (loadedSource) {
                    loadedSource = this.refreshSourceInSourceStorage(loadedSource);
                }
                return loadedSource;

            };


            /**
             *
             * @param {EventSource} source
             * @returns {*}
             */
            this.refreshSourceInSourceStorage = function (source) {
                source = Utils.updateArrayElementById(eventSources, source);
                return source;
            };

            /**
             *
             * @param {string} sourceId
             * @returns {*}
             */
            this.removeSourceById = function (sourceId) {
                Utils.removeArrayElementById(eventSources, sourceId);
            };


            /**
             *
             * @returns {EventSource[]}
             */
            this.getSources = function () {

                if (this.isRefreshAllEventSourcesNeeded()) {
                    refreshAllEventSources();
                }
                return eventSources;

            };

            /**
             *   we send to server SourceCache state and then we get Diff to update cache
             *
             *  sources cache are refreshed, when :
             * 1)onOpen createExploration dialog ( only  once in first time when click in Source Chooser )
             * 2)onOpenExploration
             * 3)when cache become invalid ( 10 min){ @see  SourceStorage.CACHE_TIME_TO_LIVE }
             *
             */
            function refreshAllEventSources() {
                if (eventSources.length) {
                    updateEventSourcesList();
                } else {
                    sourceLoader.getSourcesList(
                        null,
                        onGetSourcesListSuccess,
                        onFailed
                    );
                }
                isRefreshNeeded = false;
                refreshNeededTime = new Date().getTime() + CACHE_TIME_TO_LIVE;

            }

            function updateEventSourcesList() {

                var sourcesIdsWithUpdatedAtDate = {};
                for (var i = 0; i < eventSources.length; i++) {
                    sourcesIdsWithUpdatedAtDate[eventSources[i].id] = eventSources[i].updatedAt;
                }

                sourceLoader.updateEventSourcesList(
                    {
                        sourceIdAndUpdatedAtDateMap: sourcesIdsWithUpdatedAtDate
                    },

                    onUpdateEventSourcesListSuccess,
                    onFailed
                );

            }


            /**
             * backend got from UI Source Storage state ( sourcesIdsWithUpdatedAtData)
             *
             * backend return Diff between changes and Source Storage state:
             * list of sources that should be updated, and list of sources ids that should be removed from cache
             *
             * response.data.sourcesThatShouldBeUpdated - list of sources that should be updated or added to  SourceStorage Cache
             * response.data.sourcesIdsThatShouldBeRemoved - list of sources ids that should be removed from SourceStorage Cache
             *
             * @param {Response} response
             */
            function onUpdateEventSourcesListSuccess(response) {
                if (response.success) {
                    var sourcesThatShouldBeUpdated = response.data.sourcesThatShouldBeUpdated;
                    var sourcesIdsThatShouldBeRemoved = response.data.sourcesIdsThatShouldBeRemoved;

                    if (sourcesThatShouldBeUpdated && sourcesThatShouldBeUpdated.length) {
                        for (var i = 0; i < sourcesThatShouldBeUpdated.length; i++) {
                            var eventSource = new EventSource(sourcesThatShouldBeUpdated[i]);
                            //source storage and exploration.sources() should have the same references
                            Utils.updateArrayElementById(eventSources, eventSource);
                        }
                    }

                    if (sourcesIdsThatShouldBeRemoved && sourcesIdsThatShouldBeRemoved.length) {
                        for (var j = 0; j < sourcesIdsThatShouldBeRemoved.length; j++) {
                            Utils.removeArrayElementById(eventSources, sourcesIdsThatShouldBeRemoved[j]);

                        }
                    }

                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);
                }

            }


            /**
             *
             * @param {Response} response
             */
            function onGetSourcesListSuccess(response) {
                if (response.success && eventSources.length === 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        var eventSource = new EventSource(response.data[i]);
                        eventSources.push(eventSource);//eventSources.length==0

                    }

                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);
                }

            }


            /**
             *
             * @param {FailureResponse} failureResponse
             */
            function onFailed(failureResponse) {
                NotificationUtils.onFailureResponse(failureResponse);
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourceStorage}
         */
        SourceStorage.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourceStorage();
            }
            return this.instance;
        };

        return SourceStorage;
    }
)
;