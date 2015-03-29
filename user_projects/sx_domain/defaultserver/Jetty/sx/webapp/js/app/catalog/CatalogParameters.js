/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 06/08/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('CatalogParameters', [],

    /**
     * @exports exploration/catalog
     */

        function () {

        /**
         * @class
         * @classdesc enum
         * @constructor
         */
        function CatalogParameters() {
        }

        CatalogParameters.Parameters = {
            UPDATED_BY: "updatedBy",
            ATTACHED_TAG: "tag",
            ENTITY_TYPE: "type",
            SORTING: "sort",
            SHOW_ONLY: "filter",
            ORDER: "order",
            OFFSET: "offset",
            LIMIT: "limit"
        };

        CatalogParameters.Sorting = {
            RECENT: "recent",
            NAME: "name",
            FAVORITE: "favorite"
            //POPULAR: "popular"
        };


        CatalogParameters.Order = {
            DESC: 'desc',
            ASC: 'asc'
        };



        /**
         * number of entities showed by once in Catalog
         *
         */
        CatalogParameters.PageSizes = {
            _10: 10,
            _25: 25,
            _50: 50
        };
        CatalogParameters.catalogPageSizesArray = [
            CatalogParameters.PageSizes._10,
            CatalogParameters.PageSizes._25,
            CatalogParameters.PageSizes._50
        ];



        CatalogParameters.EntityType = {
            SHAPE: 'shape',
            STREAM: 'stream',
            DATA_SOURCE: 'dataSource',
            EXPLORATION: 'exploration',
            PATTERN: 'pattern',
            TARGET: 'target'
        };

        return CatalogParameters;
    });


