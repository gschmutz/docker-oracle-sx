/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 * @author Anna Yarmolenko
 *
 * Date: 5/22/14
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('CatalogBoxViewController', [
    'jquery',
    'knockout',
    'Utils',
    'CatalogUtils',
    'CatalogParameters',
    'Translate',
    'CatalogViewController',
    'ServiceFactory'
],

/**
 * class for controller that views search results as boxes
 * @exports CatalogBoxViewController
 * @version 1.0
 */
    function($, ko, Utils, CatalogUtils, CatalogParameters, Translate, CatalogViewController, ServiceFactory) {

        
        function CatalogBoxViewController(searchPage, containerId) {
            CatalogBoxViewController.superclass.constructor.call(this, searchPage, containerId);
            var self = this;
            
            self.sortings = CatalogParameters.Sorting;
            
            self.fwFavoritesEnabled = ko.observable(false);
            self.fwRecentEnabled = ko.observable(false);
            self.fwPattensEnabled = ko.observable(false);
            
            self.eventShapes = [];
            self.explorations = [];
            self.eventSources = [];
            self.patterns = ko.observableArray([]);
            self.favorites = ko.observableArray([]);
            self.mostRecent = ko.observableArray([]);
            
            self.viewMoreLabel = Translate.getTranslated('oep.search.searchResults.VIEW_MORE_LINK');
            self.viewLessLabel = Translate.getTranslated('oep.search.searchResults.VIEW_LESS_LINK');
            
            self.patternsShift = 0;
            self.favoritesShift = 0;
            self.recentShift = 0;
            
            self.patternsViewAll = ko.observable(false);
            self.favoritesViewAll = ko.observable(false);
            self.recentViewAll = ko.observable(false);

            self.results = [];
            self.noFavorites = ko.computed(function() {
                return self.favorites().length === 0;
            }, this);
            self.noMostRecent = ko.computed(function() {
                return self.mostRecent().length === 0;
            }, this);
            self.noPatterns = ko.computed(function() {
                return self.patterns().length === 0;
            }, this);
            
            self.showListView = function(sorting) {
                var listView = self.searchPage.getListViewController();
                listView.setSorting(sorting, CatalogParameters.Sorting.DESC, false); //do not need to reload view, because it will be done automatically when view will be switched.
                self.searchPage.chooseViewController(listView);
;            };
            
            self.moveForward = function(blockName) {
                var shiftVal = self[blockName + 'Shift'];
                if ($.type(shiftVal) === 'number') {
                    self[blockName + 'Shift'] = shiftVal + 1;
                }
                self.mergeResults();
            };
            
            self.moveBackward = function(blockName) {
                var shiftVal = self[blockName + 'Shift'];
                if ($.type(shiftVal) === 'number') {
                    self[blockName + 'Shift'] = shiftVal - 1;
                }
                self.mergeResults();
            };
            
            self.showMore = function(blockName) {
                self[blockName + 'ViewAll'](true);
                self.mergeResults();
            };
            
            self.showLess = function(blockName) {
                self[blockName + 'ViewAll'](false);
                self.mergeResults();
            };
                        
            self.isEmpty = function(array) {
                return array.length === 0;
            };
            
            self.mergeResults = function() {
                var results = self.results;
                
                var sortByDate = function(first, second) {
                    if (!first.createdAt) return -1;
                    if (!second.createdAt) return 1;
                    return second.createdAt - first.createdAt;
                }; 
                
                var sortByName = function(first, second) {
                    var firstName = first.label() || first.name();
                    var secondName = second.label() || second.name() || '';
                    return secondName.toLowerCase() < firstName.toLowerCase();
                }; 
                
                var favs = self.selectItemsToDisplay(sortByName, results, self.favoritesViewAll ? -1 : self.RESULTS_PER_PAGE);
                var recents = self.selectItemsToDisplay(sortByDate, results, self.recentViewAll ? -1 : self.RESULTS_PER_PAGE);
                
                
                self.fwFavoritesEnabled((self.favoritesShift + 1) * self.RESULTS_PER_PAGE < results.length);
                self.fwRecentEnabled((self.recentShift + 1) * self.RESULTS_PER_PAGE < results.length);
                //TODO:: here should be a sort function or something like this for real presentation for recents.
                self.favorites(favs);
                self.mostRecent(recents);
                
            };
            
            self.selectItemsToDisplay = function(sortFunction, arr, howManyToSelect) {
                var sortedArray = arr.sort(sortFunction);
                /* return sortedArray.slice(shift * howManyToSelect , (shift + 1) * howManyToSelect); */
                if (howManyToSelect < 0) {
                    return sortedArray;
                }
                return sortedArray.slice(0, howManyToSelect);
            };
            
            self.pushNewResults = function(incoming) {
                if (!incoming) {
                    return;
                }
                self.results = self.results.concat(incoming);
                self.mergeResults();
            };
            
            self.readEventSource = function(searchString) {
                var self = this;
                var eventSourceService = ServiceFactory.getSourceService();
                eventSourceService.getList(null, function(list) {
                    self.pushNewResults(list);
                });
            };

            self.readExplorations = function(searchString) {
                var self = this;
                var explorationService = ServiceFactory.getExplorationService();
                explorationService.getList(null, function(list) {
                    self.pushNewResults(list);
                });

            };

            self.readEventShapes = function(searchString) {
                var self = this;
                var eventShapeService = ServiceFactory.getEventShapeService();
                eventShapeService.getList(null, function(list) {
                    self.pushNewResults(list);
                });
            };

            self.readPatterns = function(searchString) {
                var self = this;
                var patternService = ServiceFactory.getPatternService();
                patternService.getList(null, function(list) {
                    self.pushNewResults(list);
                });
            };
            
            self.getCreatedByLabel = function(thing) {
                if (self.isNotEmpty(thing.createdBy)) {
                    return Translate.getTranslated('oep.search.searchResults.CREATED_BY', [thing.createdBy]);  
                }
                return '';
            };

            self.readFavorites = function() {
                //collect all parameters in one array
                var parameters = self.searchPage.getCatalogParameters();
                if (parameters === null) {
                    //no entities were selected to be shown. return empty list.
                    self.favorites.removeAll();
                    return;
                }


                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.SHOW_ONLY, CatalogParameters.Sorting.FAVORITE));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.ORDER, CatalogParameters.Order.DESC));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.SORTING, CatalogParameters.Sorting.FAVORITE));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.OFFSET, 0));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.LIMIT, 5));

                var entityService = ServiceFactory.getBrowseService();
                entityService.search(parameters, null, function(result) {
                    if (!result) {
                        self.favorites.removeAll();
                        return;
                    } else {
                        self.favorites(result);
                    }
                });
            };

            self.readMostRecent = function() {
                //collect all parameters in one array
                var parameters = self.searchPage.getCatalogParameters();
                if (parameters === null) {
                    //no entities were selected to be shown. return empty list.
                    self.mostRecent.removeAll();
                    return;
                }

                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.SORTING, CatalogParameters.Sorting.RECENT));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.ORDER, CatalogParameters.Order.DESC));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.OFFSET, 0));
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.LIMIT, 5));

                var entityService = ServiceFactory.getBrowseService();
                entityService.search(parameters, null, function(result) {
                    if (!result) {
                        self.mostRecent.removeAll();
                        return;
                    } else {
                        self.mostRecent(result);
                    }
                });
            };

            self.readMostPopular = function() {
            };
            
            self.init();
        };
        
        Utils.extend(CatalogBoxViewController, CatalogViewController);
        
        /**
         * Implementation how the view should be updated
         * when configuration is changed (added filter, 
         * explorations/sources/patterns are checked/unchecked,
         * page size is changed etc)
         */
        CatalogBoxViewController.prototype.reload = function () {
            var self = this;
            self.readFavorites();
            self.readMostRecent();
            self.readMostPopular();

    /*
            var self = this;
            self.results = [];
            self.mergeResults();
            if (self.searchPage.includeSources()) {
                self.readEventSource(self.searchPage.searchString());
            }
            if (self.searchPage.includeExplorations()) {
                self.readExplorations(self.searchPage.searchString());
            }
            */

        };
        
        /**
         * Implement here how the view should be initialized.
         */
        CatalogBoxViewController.prototype.init = function () {
            var self = this;
            CatalogBoxViewController.superclass.init.call(this);
            var searchUtils = CatalogUtils.getInstance();
            var $id = Utils.toJqueryId(self.containerId);
            $($id).append(searchUtils.boxViewPattern);
            Translate.getTranslated($($id));
            ko.applyBindings(this, document.getElementById(self.containerId));
            $(Utils.toJqueryId(self.containerId)).hide();
        };

        return CatalogBoxViewController;
    });




