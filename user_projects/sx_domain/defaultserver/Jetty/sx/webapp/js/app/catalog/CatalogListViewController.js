/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 5/22/14
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('CatalogListViewController', [
        'jquery',
        'knockout',
        'Utils',
        'CatalogUtils',
        'CatalogParameters',
        'Translate',
        'CatalogViewController',
        'ServiceFactory',
        'SourceStorage',
        'ExplorationManager',
        'ProgressBar',
        'UserPreferencesModel',
        'PageIsLoading',
        'DeleteItemConfirmationDialog',
        'Notifications',
        'NotificationType'
    ],

    /**
     * class for controller that views search results as a list
     * @exports ListViewController
     * @version 1.0
     */
    function ($, ko, Utils, CatalogUtils, CatalogParameters, Translate, CatalogViewController, ServiceFactory, SourceStorage,
              ExplorationManager, ProgressBar, UserPreferencesModel, PageIsLoading, DeleteItemConfirmationDialog, Notifications, NotificationType) {


        function CatalogListViewController(searchPage, containerId) {
            CatalogListViewController.superclass.constructor.call(this, searchPage, containerId);
            var self = this;
            var pageIsLoading = PageIsLoading.getInstance();


            var MAX_DESCRIPTION_LENGTH = 200;
            self.results = ko.observableArray([]);
            self.noDataFound = ko.observable(false);

            var searchUtils = CatalogUtils.getInstance();

            self.pageSizeOptions = CatalogParameters.catalogPageSizesArray;


            //page size
            self.pageSize = ko.observable(UserPreferencesModel.getInstance().getCatalogDefaultPageSize());
            self.setPageSize = function (size, needReload) {
                self.pageSize(size);
                if (needReload) {
                    self.reload();
                }
            };

            //page number
            self.pageNumber = ko.observable(1);
            self.setPageNumber = function (number, needReload) {
                self.pageNumber(number);
                if (needReload) {
                    self.reload();
                }
            };

            //obtain from server
            self.totalNumOfItems = ko.observable(100);

            //Computed values for UI
            self.totalNumOfPages = ko.computed(function () {
                return Math.ceil(self.totalNumOfItems() / self.pageSize());
            }, this);

            self.numberOfItemsLabel = ko.computed(function () {
                var startItemIndex = self.pageNumber() === 1 ? 1 : (self.pageNumber() - 1) * self.pageSize() - 1;
                var endItemIndex = startItemIndex + self.results().length - 1;

                return Translate.getTranslated('oep.search.searchResults.NUMBER_OF_ITEMS',
                    [startItemIndex + "-" + endItemIndex, self.totalNumOfItems()]);
            }, this);

            self.numberOfPagesLabel = ko.computed(function () {
                return Translate.getTranslated('oep.search.searchResults.NUMBER_OF_PAGES', [self.totalNumOfPages()]);
            }, this);

            self.isFirstPageClickable = function () {
                var curNum = self.pageNumber();
                if (curNum !== null && curNum > 1) {
                    return true;
                }

                return false;
            };

            self.isLastPageClickable = function () {
                var curNum = self.pageNumber();
                if (curNum !== null && curNum < self.totalNumOfPages()) {
                    return true;
                }

                return false;
            };

            self.loadFirstPage = function () {
                if (self.isFirstPageClickable()) {
                    self.setPageNumber(1, true);
                }
                ;
            };

            self.loadPreviousPage = function () {
                if (self.isFirstPageClickable()) {
                    var curNum = self.pageNumber();
                    self.setPageNumber(--curNum, true);
                }
                ;
            };

            self.loadNextPage = function () {
                if (self.isLastPageClickable()) {
                    var curNum = self.pageNumber();
                    self.setPageNumber(++curNum, true);
                }
            };

            self.loadLastPage = function () {
                if (self.isLastPageClickable()) {
                    self.setPageNumber(null, true);
                }
            };

            self.getFavoriteClass = function (thing) {
                if (thing.favorite() === true) {
                    return 'mark-favorite-icon';
                }

                return 'mark-not-favorite-icon';
            };

            self.getTagToolTip = function (tag) {
                return Translate.getTranslated('oep.search.searchResults.TAG_TT', [tag]);
            };

            self.getUpdatedByToolTip = function (thing) {
                return Translate.getTranslated('oep.search.searchResults.UPDATED_BY_TT', [thing.updatedBy]);
            };

            self.getStatus = function (thing) {
                if (thing.constructor.name == "ExplorationThing") {
                    if (thing.published() === true) {
                        return Translate.getTranslated('oep.search.searchResults.PUBLISHED');
                    }

                    return Translate.getTranslated('oep.search.searchResults.DRAFT');
                }

                return '';
            };

            self.getStatusClass = function (thing) {
                if (thing.constructor.name == "ExplorationThing") {
                    if (thing.published() === true) {
                        return 'status-published';
                    }

                    return 'status-draft';
                }
            };

            self.getIconClass = function (thing) {
                if (thing.constructor.name == "ExplorationThing") {
                    if (thing.published() === true) {
                        return 'exploration-published';
                    }

                    return 'exploration-draft';
                }
                return thing.entityType;
            };


            self.setNoDataFound = function () {
                self.totalNumOfItems(0);
                self.pageNumber(1);
//                self.getSpinner().hide();
                ProgressBar.getInstance().resetState();
                pageIsLoading.pageIsLoaded();
                self.noDataFound(true);
            };

            self.readEntities = function () {
                ProgressBar.getInstance().busyState();
                pageIsLoading.pageIsLoading();
                self.results.removeAll();

                //collect all parameters in one array
                var parameters = self.searchPage.getCatalogParameters();
                if (parameters === null) {
                    self.setNoDataFound();
                    return;
                }
                ;

//                self.getSpinner().show();
                self.noDataFound(false);

                //pagination
                if (self.pageNumber() !== null) {
                    parameters.push(
                        CatalogUtils.getKeyValuePair(
                            CatalogParameters.Parameters.OFFSET, (self.pageNumber() - 1) * self.pageSize()));
                }
                parameters.push(CatalogUtils.getKeyValuePair(CatalogParameters.Parameters.LIMIT, self.pageSize()));


                var entityService = ServiceFactory.getBrowseService();
                entityService.getList(parameters, null, function (result) {
//                    self.getSpinner().hide();

                    if (!result || !result.data || result.data.length === 0) {
                        self.setNoDataFound();
                        ProgressBar.getInstance().connectedState();
                        pageIsLoading.pageIsLoaded();

                        return;
                    }
                    var extendedResults = self.extendResults(result.data);
                    self.results(result.data);
                    self.totalNumOfItems(result.total);
                    if (result.parameters.limit > 0) {
                        self.setPageSize(result.parameters.limit);
                        self.setPageNumber(Math.floor(result.parameters.offset / result.parameters.limit) + 1);
                    } else {
                        self.setPageSize(null);
                        self.setPageNumber(null);
                    }
                    ProgressBar.getInstance().connectedState();
                    pageIsLoading.pageIsLoaded();

                }, function () {
                    self.setNoDataFound();
                    ProgressBar.getInstance().connectedState();
                    pageIsLoading.pageIsLoaded();

                });
            };

            self.extendResults = function (results) {
                for (var resInd = 0; resInd < results.length; resInd++) {
                    var resultThing = results[resInd];
                    var resultThing = self.extendResultThing(resultThing);

                }
                return results;
            }

            self.extendResultThing = function (resultThing) {
                var isExplorationThing = false;
                var isSourceThing = false;
                if (ServiceFactory.getExplorationService().isServiceThing(resultThing)) {
                    isExplorationThing = true;
                }
                if (ServiceFactory.getSourceService().isServiceThing(resultThing)) {
                    isSourceThing = true;
                }
                resultThing.getThingName = function (thing) {
                    return thing.constructor.name;
                };
                resultThing.shortDescription = ko.computed(function () {
                    if (resultThing.description().length < MAX_DESCRIPTION_LENGTH) {
                        return resultThing.description();
                    }
                    return resultThing.description().substr(0, MAX_DESCRIPTION_LENGTH) + '...';
                }, this);

                resultThing.pubShortDescription = ko.computed(function () {
                    if (!resultThing.publishedMetadata) {
                        return '';
                    }
                    if (resultThing.publishedMetadata.description().length < MAX_DESCRIPTION_LENGTH) {
                        return resultThing.publishedMetadata.description();
                    }
                    return resultThing.publishedMetadata.description().substr(0, MAX_DESCRIPTION_LENGTH) + '...';
                }, this);
                resultThing.getUpdatedByLabel = function (thing) {
                    return CatalogUtils.getUpdatedByLabel(thing);
                };
                resultThing.getUpdatedAtLabel = function (thing) {
                    return CatalogUtils.getUpdatedAtLabel(thing);
                };
                resultThing.addUpdatedByToFilters = function (thing) {
                    return self.addUpdatedByToFilters(thing);
                };
                resultThing.getCreatedAtLabel = function (thing) {
                    return thing.getCreatedAtLabel(thing);
                };
                resultThing.isNotEmpty = function (thing) {
                    return self.isNotEmpty(thing);
                };
                resultThing.goEdit = function (thing) {
                    return self.goEdit(thing);
                };
                resultThing.invalidTitle = ko.computed(function () {
                    if (resultThing.invalid) {
                        return Translate.getTranslated('oep.search.searchResults.INVALID_LABEL');
                    }
                    return Translate.getTranslated('oep.search.searchResults.TITLE_TOOLTIP');
                }, this);

                resultThing.pubInvalidTitle = ko.computed(function () {
                    if (resultThing.publishedMetadata && resultThing.publishedMetadata.invalid) {
                        return Translate.getTranslated('oep.search.searchResults.INVALID_LABEL');
                    }
                    return Translate.getTranslated('oep.search.searchResults.TITLE_TOOLTIP_INSPECT_MODE');
                    ;
                }, this);

                resultThing.addTagToFilters = function (thing) {
                    return self.addTagToFilters(thing);
                };
                resultThing.getTags = function (thing) {
                    return self.getTags(thing);
                };
                resultThing.getSources = function (thing) {
                    return self.getSources(thing);
                };

                resultThing.changeFavorite = function (thing) {
                    var entityService = ServiceFactory.getBrowseService();
                    var newFavValue = !thing.favorite();
                    entityService.markFavorite(thing.name(), newFavValue, null, function () {
                        thing.favorite(newFavValue);
                    });
                };
                resultThing.goEditPublished = function (thing) {
                    if (thing.publishedMetadata) {
                        ExplorationManager.goInspect(thing.publishedMetadata);
                    }
                };

                resultThing.openDeleteItemConfirmationDialog = function (thing) {
                    DeleteItemConfirmationDialog.getInstance().openDeleteItemConfirmationDialog(thing);

                };

                resultThing.goDelete = function (thing) {
                    var entityService = ServiceFactory.getBrowseService();

                    entityService.findDependentEntitiesNames(thing.name(), null, function (data) {
                        if (!data || data.length < 1) {
                            ProgressBar.getInstance().busyState();
                            pageIsLoading.pageIsLoading();

                            entityService.delete(
                                thing.name(),
                                null,  //scope
                                function () {
                                    CatalogUtils.showEntityIsRemovedNotification(thing.label());
                                    self.reload();
                                    SourceStorage.getInstance().removeSourceById(thing.name());
                                    ProgressBar.getInstance().connectedState();
                                    pageIsLoading.pageIsLoaded();

                                },
                                function () {
                                    CatalogUtils.showDependencyExistsNotification(thing.label());
                                    ProgressBar.getInstance().connectedState();
                                    pageIsLoading.pageIsLoaded();

                                },
                                thing
                            );
                        } else {
                            CatalogUtils.showDependencyExistsNotification(thing.label(), data);
                        }
                    });
                };
                resultThing.goRestore = function (thing) {
                    var entityService = ServiceFactory.getBrowseService();
                    ProgressBar.getInstance().busyState();
                    pageIsLoading.pageIsLoading();

                    entityService.restore(thing.name(), null, function () {
                            Notifications.add({
                                type: NotificationType.TYPE.info,
                                text: Translate.getTranslated('oep.thing.STATUS_RESTORED', [thing.displayName()])

                            });

                            ProgressBar.getInstance().connectedState();
                            pageIsLoading.pageIsLoaded();

                            self.readEntities();
                        },
                        function (errorObj) {
                            CatalogUtils.showEntityRestoreFailedNotification(thing.label(), errorObj.status || errorObj.error);
                            ProgressBar.getInstance().connectedState();
                            pageIsLoading.pageIsLoaded();

                        }
                    );
                };

                resultThing.getFavoriteClass = function (thing) {
                    if (thing.favorite() === true) {
                        return 'mark-favorite-icon';
                    }

                    return 'mark-not-favorite-icon';
                };

                resultThing.getStatus = function (thing) {
                    if (isExplorationThing) {
                        if (thing.published() === true) {
                            return Translate.getTranslated('oep.search.searchResults.PUBLISHED');
                        }

                        return Translate.getTranslated('oep.search.searchResults.DRAFT');
                    }

                };

                resultThing.getIconClass = function (thing) {
                    if (isExplorationThing) {
                        if (thing.published() === true) {
                            return 'exploration-published';
                        }

                        return 'exploration-draft';
                    }
                    return thing.entityType;
                };


                resultThing.showPublished = function (koThing, ev) {
                    resultThing.isPublishedShown(!resultThing.isPublishedShown());
                    return false;
                };


                resultThing.isPublishedShown = ko.observable(false);
                return resultThing;

            };


            self.initPageSizeMenu = function () {
                $(searchUtils.pageSizeMenuSelector).ojMenu(
                    {
                        openOptions: {position: {"my": "right top", "at": "right bottom"}},
                        //menuPosition: { "my": "right top", "at": "right bottom" },
                        "select": function (event, ui) {
                            self.setPageSize(ui.item.children("a").text(), true);
                        }
                    });


                $(searchUtils.pageSizeButtonSelector).ojButton(
                    {
                        "display": "icons",
                        "icons": {end: 'oj-component-icon oj-button-menu-dropdown-icon'},
                        "menu": searchUtils.pageSizeMenuSelector
                    });
            };

            self.loadViewTemplate = function () {
                var $id = Utils.toJqueryId(self.containerId);
                $($id).append(searchUtils.listViewPattern);

                Translate.getTranslated($($id));
                $(Utils.toJqueryId(self.containerId)).hide();
            };

            self.init = function () {
                ko.cleanNode(document.getElementById(self.containerId));

                CatalogListViewController.superclass.init.call(this);
                self.loadViewTemplate();

                self.setPageSize(UserPreferencesModel.getInstance().getCatalogDefaultPageSize());
                self.initPageSizeMenu();
                DeleteItemConfirmationDialog.getInstance().onOpenCatalog();

                ko.applyBindings(this, document.getElementById(self.containerId));
            };

            self.init();
        };

        Utils.extend(CatalogListViewController, CatalogViewController);

        /**
         * Implementation how the view should be updated
         * when configuration is changed (added filter,
         * explorations/sources/patterns are checked/unchecked,
         * page size is changed etc)
         */
        CatalogListViewController.prototype.reload = function () {
            this.readEntities();
        };

        return CatalogListViewController;
    });

