/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 * @author Julia Shmeleva
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Catalog', [
        'jquery',
        'knockout',
        'AnyThingManager',
        'SourceForm',
        'CreateExplorationDialogController',
        'SourceStorage',
        'ServiceFactory',
        'CatalogUtils',
        'CatalogParameters',
        'UserPreferencesModel',
        'UserAssistance',
        'HelpController',
        'CatalogBoxViewController',
        'CatalogListViewController'
    ],
    /**
     * @exports Catalog Page
     * @ignore
     */
    function ($,
              ko,
              AnyThingManager,
              SourceForm,
              CreateExplorationDialogController,
              SourceStorage,
              ServiceFactory,
              CatalogUtils,
              CatalogParameters,
              UserPreferencesModel,
              UserAssistance,
              HelpController,
              CatalogBoxViewController,
              CatalogListViewController) {

        /**
         * @class
         * @classdesc Catalog Page
         * @param predefined filters
         */

        function Catalog(filters) {
            var self = this;
            var searchUtils = CatalogUtils.getInstance();

            /**
             * Types selected
             */
            self.includeExplorations = ko.observable(true).extend({notify: 'always'});
            self.includeSources = ko.observable(true).extend({notify: 'always'});
            self.includeDataSources = ko.observable(true).extend({notify: 'always'});

            self.includeExplorations.subscribe(function () {
                self.reloadResults();
            });
            self.includeSources.subscribe(function () {
                self.reloadResults();
            });
            self.includeDataSources.subscribe(function () {
                self.reloadResults();
            });

            /**
             * Sorting
             */
            self.sortingOptions = ko.observableArray([]);
            $.each(CatalogParameters.Sorting, function (key, value) {
                self.sortingOptions().push({title: CatalogUtils.getSortingLabel(value), sort: value});
            });
            self.actualSortingTitle = ko.observable(CatalogUtils.getSortingLabel(UserPreferencesModel.getInstance().getCatalogDefaultSortingColumn()));
            self.actualSortingValue = ko.observable(UserPreferencesModel.getInstance().getCatalogDefaultSortingColumn()).extend({notify: 'always'});
            self.actualSortingValue.subscribe(function () {
                self.reloadResults();
            });

            //additional method to set sorting from inner code
            self.setSorting = function (sortingValue) {
                self.actualSortingTitle(CatalogUtils.getSortingLabel(sortingValue));
                self.actualSortingValue(sortingValue);
            };


            /**
             * Additional filters displayed on the top of the search page: tags, updatedAt
             */
            self.filters = ko.observableArray([]).extend({notify: 'always'});
            self.filters.subscribe(function () {
                self.reloadResults();
            });

            self.addToFilters = function (searchParameter) {
                var add = true;
                //check if already exists
                $.each(self.filters(), function (index, item) {
                    if (item.key === searchParameter.key && item.value === searchParameter.value) {
                        add = false;
                        return;
                    }
                });
                if (add) {
                    self.filters.push(searchParameter);
                }
            };

            self.setFilters = function (filters, needUpload) {
                if (filters && filters.tag) {
                    self.filters().length = 0;
                    self.filters().push(CatalogUtils.getKeyValuePair(
                        CatalogParameters.Parameters.ATTACHED_TAG, filters.tag));
                }

                if (needUpload) {
                    self.reloadResults();
                }
            };


            /*
             *  Active View Controller
             */
            self.activeViewController = ko.observable(null).extend({notify: 'always'});
            self.activeViewController.subscribe(function (oldValue) {
                if (oldValue !== null) {
                    oldValue.hide();
                }
            }, null, "beforeChange");

            self.activeViewController.subscribe(function (newValue) {
                if (newValue !== null) {
                    newValue.show();
                }
            });


            /**
             * Menu : Create New Item
             */

            self.explorationDescription = searchUtils.explorationDescription;
            self.sourceDescription = searchUtils.sourceDescription;
            self.dataSourceDescription = searchUtils.dataSourceDescription;
            self.patternsDescription = searchUtils.patternsDescription;

            self.explorationDescriptionHeader = searchUtils.explorationDescriptionHeader;
            self.sourceDescriptionHeader = searchUtils.sourceDescriptionHeader;
            self.dataSourceDescriptionHeader = searchUtils.dataSourceDescriptionHeader;
            self.patternsDescriptionHeader = searchUtils.patternsDescriptionHeader;


            self.isCreateNewItemMenuOpened = ko.observable(false);
            self.isPatternListMenuOpened = ko.observable(false);


            self.itemDescriptionHeader = ko.observable(null);
            self.itemDescriptionLabel = ko.observable(null);
            self.isItemDescriptionMenuVisible = ko.observable(false);
            self.isItemDescriptionMenuVisible.subscribe(function (isVisible) {
                if (isVisible === true) {
                    refreshItemDescriptionMenu();
                    $(searchUtils.itemDescriptionMenu).show();
                } else {
                    $(searchUtils.itemDescriptionMenu).hide();
                }
            });

            self.isPatternListMenuVisible = ko.observable(false);
            self.isPatternListMenuVisible.subscribe(function (isVisible) {
                if (isVisible === true) {
                    refreshPatternListMenu();
                    $(searchUtils.patternListMenu).show();
                } else {
                    $(searchUtils.patternListMenu).hide();
                }
            });

            self.patternDescriptionLabel = ko.observable(null);
            self.patternDescriptionHeader = ko.observable(null);
            self.isPatternDescriptionMenuVisible = ko.observable(false);
            self.isPatternDescriptionMenuVisible.subscribe(function (isVisible) {
                if (isVisible === true) {
                    refreshPatternDescriptionMenu();
                    $(searchUtils.patternDescriptionMenu).show();
                } else {
                    $(searchUtils.patternDescriptionMenu).hide();
                }
            });


            self.onItemMouseOver = function (description, header) {
                self.itemDescriptionLabel(description);
                self.itemDescriptionHeader(header);
                self.isItemDescriptionMenuVisible(true);
                self.isPatternListMenuVisible(false);
            };

            self.onItemMouseOut = function () {
                self.isItemDescriptionMenuVisible(false);
            };

            self.onItemDescriptionMouseOver = function () {
                self.isItemDescriptionMenuVisible(true);
            };

            self.onItemDescriptionMouseOut = function () {
                self.isItemDescriptionMenuVisible(false);
            };


            self.onClickOpenPatternSubMenu = function () {
                if (self.isPatternListMenuVisible()) {
                    self.isPatternListMenuVisible(false);
                    self.itemDescriptionLabel(self.patternsDescription);
                    self.itemDescriptionHeader(self.patternsDescriptionHeader);
                    self.isItemDescriptionMenuVisible(true);
                } else {
                    self.isPatternListMenuVisible(true);
                    self.isItemDescriptionMenuVisible(false);

                }

                return false;   //prevent event propagation
            };

            self.onClickForPatternDescription = function () {
                self.isPatternListMenuVisible(false);
                self.isPatternDescriptionMenuVisible(false);

                return false;   //prevent event propagation
            };


            self.onPatternListMouseOver = function () {
                if (self.isPatternListMenuVisible()) {
                    self.isItemDescriptionMenuVisible(false);
                } else {
                    self.itemDescriptionLabel(self.patternsDescription);
                    self.itemDescriptionHeader(self.patternsDescriptionHeader);
                    self.isItemDescriptionMenuVisible(true);
                }

            };


            self.onPatternItemMouseOver = function ($data, $element) {
                self.patternDescriptionLabel($data.description());
                self.patternDescriptionHeader($data.displayName());
                self.isPatternDescriptionMenuVisible(true);
                $($element).addClass('oj-focus');

            };


            self.onPatternItemMouseOut = function ($element) {
                self.isPatternDescriptionMenuVisible(false);
                $($element).removeClass('oj-focus');

            };


            /*
             * Patterns
             */
            self.patterns = ko.observableArray();
            self.patterns.subscribe(function () {
                refreshItemDescriptionMenu();
                refreshPatternListMenu();

                self.hideCreateNewItemMenu();
            });

            var refreshItemDescriptionMenu = function () {
                var createNewItemMenu = $(searchUtils.createNewItemMenu);
                var itemDescriptionMenu = $(searchUtils.itemDescriptionMenu);

                if (createNewItemMenu.is(":visible")) {
                    var newLeft = createNewItemMenu.position().left + createNewItemMenu.outerWidth();
                    var newTop = createNewItemMenu.position().top;
                    itemDescriptionMenu.css({
                        top: newTop,
                        left: newLeft
                    });
                }
            };


            var refreshPatternListMenu = function () {
                var createNewItemMenu = $(searchUtils.createNewItemMenu);
                var patternListMenu = $(searchUtils.patternListMenu);

                if (createNewItemMenu.is(":visible")) {
                    var newLeft = createNewItemMenu.position().left + createNewItemMenu.outerWidth();
                    var newTop = createNewItemMenu.position().top;
                    patternListMenu.css({
                        top: newTop,
                        left: newLeft
                    });
                }
            };


            var refreshPatternDescriptionMenu = function () {
                var patternListMenu = $(searchUtils.patternListMenu);
                var patternDescriptionMenu = $(searchUtils.patternDescriptionMenu);

                var newLeft = patternListMenu.position().left + patternListMenu.outerWidth();
                var newTop = patternListMenu.position().top;
                var outerHeight = patternListMenu.outerHeight();

                patternDescriptionMenu.css({
                    top: newTop,
                    left: newLeft,
                    'min-height': outerHeight

                });
            };


            self.initCreateNewItemMenu = function () {
                var createNewItemMenu = $(searchUtils.createNewItemMenu);
                var createNewItem = $(searchUtils.createNewItem);
                var itemDescriptionMenu = $(searchUtils.itemDescriptionMenu);

                createNewItemMenu.ojMenu({
                    openOptions: {initialFocus: "firstItem"},
                    "select": function (event, ui) {
                        var data = ko.dataFor(ui.item[0].firstChild);
                        var data2 = $(ui.item[0].firstChild).data().bind;
                        console.log("menu is pressed");
                    },
                    "beforeOpen": function (event, ui) {
                        console.log("menu is opened");

                    }
                });

                createNewItem.ojButton(
                    {
                        "label": searchUtils.createButtonLabel,
                        "icons": {end: 'oj-component-icon oj-button-menu-dropdown-icon'},
                        "menu": searchUtils.createNewItemMenu
                    });

                createNewItemMenu.click(function () {
                    itemDescriptionMenu.hide();
                });

                itemDescriptionMenu.click(function () {
                    itemDescriptionMenu.hide();
                });
                self.hideCreateNewItemMenu();
            };

            self.hideCreateNewItemMenu = function () {

                if (self.isItemDescriptionMenuVisible &&
                    self.isPatternListMenuVisible &&
                    self.isPatternDescriptionMenuVisible) {

                    self.isItemDescriptionMenuVisible(false);
                    self.isPatternListMenuVisible(false);
                    self.isPatternDescriptionMenuVisible(false);
                    $(searchUtils.itemDescriptionMenu).hide();
                    $(searchUtils.patternListMenu).hide();
                    $(searchUtils.patternDescriptionMenu).hide();

                }
            };

            self.initViewControllers = function () {
                if (self.boxViewController) {
                    self.boxViewController.init();
                }
                if (self.listViewController) {
                    self.listViewController.init();
                }
            };

            self.getBoxViewController = function () {
                if (!self.boxViewController) {
                    self.boxViewController = new CatalogBoxViewController(self, searchUtils.boxViewContainerId);
                }
                return self.boxViewController;
            };

            self.getListViewController = function () {
                if (!self.listViewController) {
                    self.listViewController = new CatalogListViewController(self, searchUtils.listViewContainerId);
                }
                return self.listViewController;
            };

            self.selectMenuItem = function (variableName) {
                var isChecked = self[variableName]();
                self[variableName](!isChecked);
            };

            self.removeFilter = function (filter) {
                self.filters.remove(filter);
            };

            self.getFilterCriteriaLabel = function (filter) {
                return CatalogUtils.getFilterCriteriaLabel(filter);
            };

            self.getFilterValueLabel = function (filter) {
                return CatalogUtils.getFilterValueLabel(filter);
            };

            self.chooseViewController = function (viewController) {
                self.activeViewController(viewController);
            };

            self.reloadResults = function () {
                self.activeViewController().reload();
            };

            self.goCreatePatternExploration = function (thing) {
                AnyThingManager.goEdit(thing, function () {
                    self.reloadResults();
                });
            };

            self.goCreateExploration = function () {
                AnyThingManager.goCreate(ServiceFactory.getExplorationService().thing, function () {
                    self.reloadResults();
                });
            };

            self.goCreateStreamSource = function () {
                SourceForm.getInstance(
                    'open',
                    null,
                    {
                        isStream: true,
                        afterSave: function (newSourceThing, createNewExploration) {
                            var newStorageSource = SourceStorage.getInstance().getFreshSourceBySourceId(newSourceThing.name());
                            self.reloadResults();
                            if (createNewExploration) {
                                CreateExplorationDialogController.getInstance().openCreateExplorationDialog(newStorageSource);
                            }
                        },
                        beforeCancel: null
                    }
                );
            };

            self.goCreateDataSource = function () {
                SourceForm.getInstance(
                    'open',
                    null,
                    {
                        isStream: false,
                        afterSave: function (newSourceThing) {
                            SourceStorage.getInstance().updateSourceStorageBySourceId(newSourceThing.name());
                            self.reloadResults();
                        },
                        beforeCancel: null
                    }
                );

            };


            self.goCreateEventShape = function () {
                AnyThingManager.goCreate(ServiceFactory.getEventShapeService().thing, function () {
                    self.reloadResults();
                });
            };

            self.goCreatePattern = function () {
                AnyThingManager.goCreate(ServiceFactory.getPatternService().thing, function () {
                    self.reloadResults();
                });
            };

            self.getCatalogParameters = function () {
                //check if at least 1 type is selected. otherwise there is nothing to search
                var types = [];
                if (self.includeExplorations()) {
                    types.push(CatalogParameters.EntityType.EXPLORATION);
                }
                if (self.includeSources()) {
                    types.push(CatalogParameters.EntityType.STREAM);
                }
                if (self.includeDataSources()) {
                    types.push(CatalogParameters.EntityType.DATA_SOURCE);
                }
                if (types.length === 0) {
                    return null;
                }

                //get filters criteria
                var parameters = self.filters().slice(0);

                //add entity types
                $.each(types, function (index, item) {
                    parameters.push(CatalogUtils.getTypeParameter(item));
                });

                //add sorting
                parameters.push(CatalogUtils.getSortingParameter(self.actualSortingValue()));
                parameters.push(CatalogUtils.getSortingOrderParameter(UserPreferencesModel.getInstance().getCatalogDefaultSortingOrder()));

                return parameters;
            };

            self.getPatternList = function () {
                if (self.patterns() === null || self.patterns().length === 0) {
                    var patternService = ServiceFactory.getPatternService();
                    patternService.getList(null, function (result) {
                        self.patterns(result);
                    });
                }
            };

            self.init = function () {
                UserAssistance.getInstance().setUserAssistanceContent(UserAssistance.CONTENT.CATALOG_WELCOME);

                self.initCreateNewItemMenu();
                CreateExplorationDialogController.getInstance().onOpenCatalog();
            };

            /**
             * ojet hack : workaround to hide extended menu
             *
             * hide patterns list and descriptions if menu collapsed
             */
            self.overideCollapseAllOjetMenuMethod = function () {

                var ojMenuPrototype = $.oj.ojMenu.prototype;
                var oldMethod = ojMenuPrototype.__collapseAll;
                ojMenuPrototype.__collapseAll = function (event, all, delay) {


                    var createNewItemMenuContainer = $(searchUtils.createNewItemMenuContainer)[0];

                    if (createNewItemMenuContainer &&
                        (!$.contains(createNewItemMenuContainer, event.target) ||
                        event.currentTarget.id == searchUtils.createNewItemMenuPureId && event.currentTarget.style.display == "none"
                        )
                    ) {
                        self.hideCreateNewItemMenu();
                    }

                    // apply old method
                    oldMethod.apply(this, arguments);
                };

            };

        }

        Catalog.build = function (filters) {
            ko.cleanNode(document.getElementById(CatalogUtils.getInstance().searchUpperPanelId));
            ko.cleanNode(document.getElementById(CatalogUtils.getInstance().searchTypeChooserId));

            if (!Catalog._model) {
                Catalog._model = new Catalog();
                Catalog._model.overideCollapseAllOjetMenuMethod();
            }

            Catalog._model.init();
            Catalog._model.initViewControllers();
            Catalog._model.getPatternList();
            Catalog._model.setFilters(filters);
            Catalog._model.chooseViewController(Catalog._model.getListViewController());
            Catalog._model.setSorting(UserPreferencesModel.getInstance().getCatalogDefaultSortingColumn());

            HelpController.getInstance().setPageTopicId(HelpController.CATALOG);
            ko.applyBindings(Catalog._model, document.getElementById(CatalogUtils.getInstance().searchUpperPanelId));
            ko.applyBindings(Catalog._model, document.getElementById(CatalogUtils.getInstance().searchTypeChooserId));
        };

        return Catalog;
    }
);



