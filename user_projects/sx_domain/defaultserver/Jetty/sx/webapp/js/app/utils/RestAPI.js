/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('RestAPI', [],

    /**
     * @exports sxController
     * @ignore
     */

    function () {

        /**
         * @class
         * @classdesc  single place for sx REST API URIs
         *
         * @constructor
         */
        function RestAPI() {
        }

        var explorationRestServiceURL = 'webresources/v0.1/exploration';
        /**
         * enum
         */
        RestAPI.URL = {

            /**
             * @see   UtilService.java
             */
            saveUserPreferences: 'webresources/v0.1/saveUserPreferences',

            /**
             * @see   UtilService.java
             */
            loadUserPreferences: 'webresources/v0.1/loadUserPreferences',

            /**
             * @see   UtilService.java
             */
            exportExploration: 'webresources/v0.1/exportExploration',

            /**
             * @see   UtilService.java
             */
            getUserInfo: 'webresources/v0.1/getInfo',

            /**
             * @see   UtilService.java
             */
            getTags: 'webresources/v0.1/tag',

            /**
             * @see   UtilService.java
             */
            visualizerUrl: 'webresources/v0.1/visualizerUrl',


            /**
             * @see   UtilService.java
             */
            delete: 'webresources/v0.1/delete',


            /**
             * @see   UtilService.java
             */
            search: 'webresources/v0.1/search',


            /**
             * @see   UtilService.java
             */
            markFavorite: 'webresources/v0.1/markFavorite',


            /**
             * @see   UtilService.java
             */
            recover: 'webresources/v0.1/recover',


            /**
             * @see   UtilService.java
             */
            findDependentNames: 'webresources/v0.1/findDependentNames',


            /**
             * get, create, update, delete  exploration
             * @see   ExplorationService.java
             */
            exploration: explorationRestServiceURL,

            /**
             * delete
             * @see   ExplorationService.java
             */
            deleteExploration: explorationRestServiceURL + "/delete",

            /**
             * deleteDraftExploration - delete only draft exploration, but published exploration should remains
             * @see   ExplorationService.java
             */
            deleteDraftExploration: explorationRestServiceURL + "/deleteDraftExploration",


            unpublishOnPressDeleteInCatalog: explorationRestServiceURL + '/unpublishOnPressDeleteInCatalog',

            /**
             * exploration actions
             * @see   ExplorationService.java
             */
            publish: explorationRestServiceURL + '/publish?force=false',
            /**
             * force key means that other user changes in published exploration become overrided
             */
            overwrite: explorationRestServiceURL + '/publish?force=true',
            clone: explorationRestServiceURL + '/publishAs',
            uptake: explorationRestServiceURL + '/uptake',
            inspect: explorationRestServiceURL + '/inspect',

            unpublish: explorationRestServiceURL + '/unpublish',

            generateName: explorationRestServiceURL + '/generateName',
            undo: explorationRestServiceURL + '/undo',
            redo: explorationRestServiceURL + '/redo',
            sync: explorationRestServiceURL + '/sync',

            /**
             * @see   UtilService.java
             */
            pattern: 'webresources/v0.1/patternType',

            /**
             * @see SourceService.java
             */
            source: 'webresources/v0.1/source',

            /**
             * @see SourceService.java
             */
            updateSourceCache: 'webresources/v0.1/source/updateSourceCache',

            /**
             * @see   UtilService.java
             */
            pubsubUrl: 'webresources/v0.1/pubsubUrl',

            /**
             * getSourceTypes
             * @see   UtilService.java
             */
            sourceType: 'webresources/v0.1/sourceType',

            /**
             * @see   EventTypeService.java
             */
            eventType: 'webresources/v0.1/eventType'

        };


        return RestAPI;
    });