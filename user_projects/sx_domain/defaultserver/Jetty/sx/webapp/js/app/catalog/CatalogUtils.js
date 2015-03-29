/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 5/22/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('CatalogUtils', [
        'jquery',
        'knockout',
        'Utils',
        'Translate',
        'Notifications',
        'NotificationType',
        'CatalogParameters'],

    /**
     * @exports CatalogUtils
     * @version 1.0
     */

        function ($, ko, Utils, Translate, Notifications, NotificationType, CatalogParameters) {

        /**
         * @class
         * @classdesc contains constants and utils for Catalog
         *
         */
        function CatalogUtils() {
            var self = this;

            self.explorationDescription = Translate.getTranslated('oep.search.searchMenu.CREATE_EXPLORATION_DESCRIPTION');
            self.sourceDescription = Translate.getTranslated('oep.search.searchMenu.CREATE_SOURCE_DESCRIPTION');
            self.dataSourceDescription = Translate.getTranslated('oep.search.searchMenu.CREATE_DATA_SOURCE_DESCRIPTION');
            self.patternsDescription = Translate.getTranslated('oep.search.searchMenu.patternsDescription');
            self.createButtonLabel = Translate.getTranslated('oep.search.searchMenu.CREATE');



            self.explorationDescriptionHeader = Translate.getTranslated('oep.search.searchMenu.CREATE_EXPLORATION');
            self.sourceDescriptionHeader = Translate.getTranslated('oep.search.searchMenu.CREATE_SOURCE');
            self.dataSourceDescriptionHeader = Translate.getTranslated('oep.search.searchMenu.CREATE_DATA_SOURCE');
            self.patternsDescriptionHeader = Translate.getTranslated('oep.search.searchMenu.CREATE_PATTERN');

            //html
            self.listViewPath = 'html/catalog/listView.html';
            self.boxViewPath = 'html/catalog/boxView.html';
            self.listViewPattern = Utils.loadContent(self.listViewPath);
            self.boxViewPattern = Utils.loadContent(self.boxViewPath);

            //container IDs
            self.searchUpperPanelId = 'search-upper-panel';
            self.searchTypeChooserId = "search-choose-types";
            self.boxViewContainerId = 'search-box-view';
            self.listViewContainerId = 'search-list-view';
            self.boxViewButtonId = 'box-view-button';
            self.listViewButtonId = 'list-view-button';

            //classes
            self.titleClass = '.title';
            self.updatedByClass = '.updatedBy';
            self.tagsClass = '.tags';
            self.sourcesClass = '.sources';
            self.statusClass = '.status';
            self.buttonsClass = '.buttons';
            self.descriptionClass = '.description';
            self.listResultClass = '.search-list-view';

            //createNewItem menu selectors
            self.createNewItem = '#createNewItem';
            self.createNewItemMenuContainer = '.createNewItemMenuContainer';
            self.createNewItemMenu = '#createNewItemMenu';
            self.createNewItemMenuPureId = 'createNewItemMenu';
            self.itemDescriptionMenu = '#itemDescriptionMenu';
            self.patternListMenu = '#patternListMenu';
            self.patternDescriptionMenu = '#patternDescriptionMenu';

            //selectors
            self.listViewWidgetQuery = '#' + self.listViewContainerId + ' .widget';
            self.pageSizeMenuSelector = '#page-size-menu';
            self.pageSizeButtonSelector = '#page-size-button';

            //css width  in pixels
            self.marginsWidth = 80;

        };

        /**
         * Get instance of singleton
         *
         * @static
         * @return {CatalogUtils}
         */
        CatalogUtils.getInstance = function () {
            if (!this.instance) {
                this.instance = new CatalogUtils();
            }
            return this.instance;
        };

        CatalogUtils.getKeyValuePair = function (k, v) {
            return {key: k, value: v};
        };

        CatalogUtils.getSortingLabel = function (sorting) {
            if (!sorting) return;

            if (sorting === CatalogParameters.Sorting.FAVORITE) {
                return Translate.getTranslated('oep.search.searchMenu.FAVORITE_TITLE');
            }

            if (sorting === CatalogParameters.Sorting.RECENT) {
                return Translate.getTranslated('oep.search.searchMenu.RECENT_TITLE');
            }

            if (sorting === CatalogParameters.Sorting.POPULAR) {
                return Translate.getTranslated('oep.search.searchMenu.POPULAR_TITLE');
            }

            if (sorting === CatalogParameters.Sorting.NAME) {
                return Translate.getTranslated('oep.search.searchMenu.NAME_TITLE');
            }

            return sorting;
        };

        CatalogUtils.getFilterCriteriaLabel = function (filter) {
            return Translate.getTranslated('oep.search.filterLabels.' + filter.key.toUpperCase());
        };

        CatalogUtils.getFilterValueLabel = function (filter) {
            if (filter.key === CatalogParameters.Parameters.CREATED_AT ||
                filter.key === CatalogParameters.Parameters.UPDATED_AT) {
                return Translate.getTranslated(new Date(filter.value),
                    {   formatType: 'datetime',
                        dateFormat: 'short',
                        timeFormat: 'short'
                    });
            }

            return filter.value;
        };

        CatalogUtils.showDependencyExistsNotification = function (name, dependencies) {
            if (!dependencies || dependencies.length < 1) {
                Notifications.add({
                    type: NotificationType.TYPE.error,
                    text: Translate.getTranslated('oep.util.error.CAN_NOT_DELETE_DEPENDENCY_EXISTS', [name])
                });
            } else {
                var depString = '';
                $.each(dependencies, function (index, value) {
                    if (index !== 0) {
                        depString += ', ';
                    }
                    depString += value;
                });

                Notifications.add({
                    type: NotificationType.TYPE.error,
                    text: Translate.getTranslated('oep.util.error.CAN_NOT_DELETE_DEPENDENCY_EXISTS_WITH_NAMES', [name, depString])
                });
            }
        };

        CatalogUtils.showEntityIsRemovedNotification = function (name) {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Translate.getTranslated('oep.util.info.ENTITY_IS_REMOVED', [name]),
                autoHide: 5
            });
        };
        
        CatalogUtils.showEntityRestoreFailedNotification = function (name, errorMsg) {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Translate.getTranslated('oep.util.error.ENTITY_IS_RESTORED', [name, errorMsg])
            });
        };

        CatalogUtils.toJqueryId = function (id) {
            return Utils.toJqueryId(id);
        };

        CatalogUtils.getCreatedByLabel = function (thing) {
            if (CatalogUtils.isNotEmpty(thing.createdBy)) {
                return Translate.getTranslated('oep.search.searchResults.CREATED_BY', [thing.createdBy]);
            }
            return '';
        };

        CatalogUtils.getUpdatedByLabel = function (thing) {
            if (CatalogUtils.isNotEmpty(thing.updatedBy)) {
                return Translate.getTranslated('oep.search.searchResults.UPDATED_BY', [thing.updatedBy]);
            }

            return "";
            //return CatalogUtils.getCreatedByLabel(thing);
        };

        CatalogUtils.getCreatedAtLabel = function (thing) {
            if (CatalogUtils.isNotEmpty(thing.createdAt)) {
                return Translate.getTranslated(new Date(thing.createdAt),
                    {    formatType: 'datetime',
                        dateFormat: 'short',
                        timeFormat: 'long'
                    });
            }

            return '';
        };

        CatalogUtils.getUpdatedAtLabel = function (thing) {
            if (CatalogUtils.isNotEmpty(thing.updatedAt)) {
                return Translate.getTranslated(new Date(thing.updatedAt),
                    {    formatType: 'datetime',
                        dateFormat: 'short',
                        timeFormat: 'short'
                    });
            }

            return '';
            //return CatalogUtils.getCreatedAtLabel(thing);
        };

        CatalogUtils.isNotEmpty = function (obj) {
            if (ko.isObservable(obj)) {
                obj = obj();
            }

            if ($.type(obj) === 'null' || $.type(obj) === 'undefined') {
                return false;
            }

            if ($.type(obj) === 'array') {
                return obj.length > 0;
            }

            if ($.type(obj) === 'object') {
                return !$.isEmptyObject(obj);
            }

            if ($.type(obj) === 'string') {
                return obj !== '';
            }

            return true;
        };

        /*
         * Search parameters
         */

        CatalogUtils.getTypeParameter = function(item) {
            return CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.ENTITY_TYPE, item);
        };

        CatalogUtils.getTagParameter = function(item) {
            return CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.ATTACHED_TAG, item);
        };

        CatalogUtils.getUpdatedByParameter = function(item) {
            return CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.UPDATED_BY, item);
        };

        CatalogUtils.getSortingParameter = function(item) {
            return CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.SORTING, item);
        };

        CatalogUtils.getSortingOrderParameter = function(item) {
            return CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.ORDER, item);
        };

        return CatalogUtils;
    });


