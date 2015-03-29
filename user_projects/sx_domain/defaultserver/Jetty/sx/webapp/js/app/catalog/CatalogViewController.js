/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 5/22/14
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('CatalogViewController', [
        'jquery',
        'knockout',
        'CatalogParameters',
        'CatalogUtils',
        'SourceSummaryController',
        'AnyThingManager'
    ],

    /**
     * base class for controller that views search results
     * @exports CatalogViewController
     * @version 1.0
     */

        function ($, ko, CatalogParameters, CatalogUtils, SourceSummaryController, AnyThingManager) {

        function CatalogViewController(searchPage, containerId) {
            var self = this;

            self.searchPage = searchPage;
            self.containerId = containerId;


            /*
             * Methods for display entity's properties
             */

            self.getTags = function (thing) {
                var tags = [];
                if (self.isNotEmpty(thing.attachedTagNames())) {
                    return thing.attachedTagNames();
//                    $.each(thing.attachedTagNames(), function(index, item) {
//                        if (index !== thing.attachedTagNames().length - 1) {
//                            tags.push(item + ',');
//                        } else {
//                            tags.push(item);
//                        }
//                    })
                }
                return tags;
            };

            self.getSources = function (thing) {
                if (self.isNotEmpty(thing.attachedSourceNames)) {
                    return thing.sources();
                }
                return [];
            };

            self.getIconClass = function (thing) {
                if (thing.entityType) {
                    return thing.entityType;
                }
                return thing.constructor.name;
            };
            
            self.getToolTip = function (thing) {
                return "invalid : " + thing.invalid;
            };

            self.getUpdatedByLabel = function (thing) {
                return CatalogUtils.getUpdatedByLabel(thing);
            };

            self.getUpdatedAtLabel = function (thing) {
                return CatalogUtils.getUpdatedAtLabel(thing);
            };

            self.isNotEmpty = function (obj) {
                return CatalogUtils.isNotEmpty(obj);
            };


            /**
             *
             * @param {Thing} thing
             */
            self.goEdit = function (thing) {
                if (thing.entityType === CatalogParameters.EntityType.STREAM ||
                    thing.entityType === CatalogParameters.EntityType.DATA_SOURCE) {
                    SourceSummaryController.getInstance().viewTheSourceFromCatalog(
                        thing,
                        function () {
                            self.searchPage.reloadResults();
                        }
                    );

                } else {
                    AnyThingManager.goEdit(thing, function () {
                        self.searchPage.reloadResults();
                    });
                }

            };

            /*
             * Methods for constructing search query
             */

            self.addUpdatedByToFilters = function (thing) {
                if (thing && thing.updatedBy) {
                    self.searchPage.addToFilters(CatalogUtils.getUpdatedByParameter(thing.updatedBy));
                }
            };

            self.addTagToFilters = function (tag) {
                if (tag) {
                    self.searchPage.addToFilters(CatalogUtils.getTagParameter(tag));
                }
            };

            /*
             * Methods for displaying catalog view
             */

            self.hide = function () {
                $(CatalogUtils.toJqueryId(self.containerId)).hide();
            };

            self.show = function () {
                self.reload();
                $(CatalogUtils.toJqueryId(self.containerId)).show();
            };

        };

        /**
         * Implement here how the view should be updated
         * when configuration is changed (added filter,
         * explorations/sources/patterns are checked/unchecked,
         * page size is changed etc)
         * Override this method for each view type.
         */
        CatalogViewController.prototype.reload = function () {
            alert("Not Implemented");
        };


        CatalogViewController.prototype.init = function () {
            SourceSummaryController.getInstance().onOpenCatalog();
        };



        return CatalogViewController;
    });



