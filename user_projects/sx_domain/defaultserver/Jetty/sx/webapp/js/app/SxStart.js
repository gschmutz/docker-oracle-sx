/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SxStart',
    [
        'jquery',
        'knockout',
        'PageIsLoading',
        'Translate',
        'SxPages',
        'Utils',
        'UserPreferencesModel',
        'NavigationController',
        'UserPreferencesController',
        'ojs/ojcore'
    ],
    /**
     * @exports sxController
     * @ignore
     */
    function ($, ko, PageIsLoading, Translate, SxPages, Utils, UserPreferencesModel, NavigationController, UserPreferencesController, ojcore) {


        /**
         * sx.start -application entry point,
         * responsible to parse sx url, determine current Sx Page and parameters, then load it
         * @see  SxPages
         *
         * @constructor
         */
        function SxStart() {
            var QUERY_STARTING_STARTED_SYMBOL = ':';
            var QUERY_PARAMS_SEPARATOR = '&';
            var QUERY_PARAM_EQUAL_SYMBOL = '=';

            var self = this;

            /**
             *
             * @type {SxPages}
             */
            var sxPages = SxPages.getInstance();
            var pageIsLoading = PageIsLoading.getInstance();


            /**
             *
             * @type {NavigationController}
             */
            var navigationController = NavigationController.getInstance();
            UserPreferencesController.getInstance().loadUserPreferencesFromServer();
            loadUserLanguageBundle(thenInitSxPage);


            /**
             *
             * @param {Function} callback
             */
            function loadUserLanguageBundle(callback) {
                var language = UserPreferencesModel.getInstance().getLanguage();
                //ojcore.Config.setLocale(language, callback);    // TODO language should be swithced in next release
                ojcore.Config.setLocale("en", callback);
            }


            /**
             * sx page, depends on url hash: #
             * example: .../index.html#home
             */
            function thenInitSxPage() {
                initSxStartPage();
                navigationController.initSxBrandingBarArea();
                translateIndexHtml();
                hashChanged(window.location.hash);

                initSxPageChangeListener();
                initSxPageLeaveListener();

            }


            /**
             * sx page, depends on url hash: #
             * example: .../index.html#home
             */
            function initSxStartPage() {
                var hash = window.location.hash;
                if (!hash || hash.indexOf(SxPages.getInstance().login) > -1) {
                    window.location.hash = UserPreferencesModel.getInstance().getSxDefaultPage();
                }

            }

            /**
             * sx page, depends on url hash: #
             * example: .../index.html#home
             */
            function initSxPageChangeListener() {
                window.onhashchange = function (event) {
                    var hash = window.location.hash;
                    hashChanged(hash);
                };
            }

            function initSxPageLeaveListener() {
                $(window).unload(function () {
                    onClosePage();
                });
            }

            /**
             *
             * @param {String} hash
             */
            function parseHash(hash) {
                var pageName = hash;
                var params = [];
                var queryStartsSymbol = hash.indexOf(QUERY_STARTING_STARTED_SYMBOL);
                if (queryStartsSymbol !== -1) {
                    pageName = hash.slice(0, queryStartsSymbol);
                    if (hash.length > queryStartsSymbol) {
                        var queryString = hash.slice(queryStartsSymbol + 1);
                        if (queryString.length) {
                            var paramsStrs = queryString.split(QUERY_PARAMS_SEPARATOR);
                            $.each(paramsStrs, function (key, paramStr) {
                                if (paramStr && paramStr.indexOf(QUERY_PARAM_EQUAL_SYMBOL) > 0) {
                                    var paramKeyValue = paramStr.split(QUERY_PARAM_EQUAL_SYMBOL);
                                    params[paramKeyValue[0]] = paramKeyValue[1] || '';
                                }
                            });
                        }
                    }
                }
                return {
                    page: pageName,
                    params: params
                };
            }

            function onClosePage() {
                require(['ExplorationKoModel'], function (ExplorationKoModel) {
                    var openedExploration = ExplorationKoModel.getInstance().exploration();
                    if (openedExploration) {
                        require(['SxControllerImpl'], function (SxControllerImpl) {
                            SxControllerImpl.getInstance().closeExplorationIfOpened();
                        });
                    }
                });
            }

            /**
             *
             * @param {String} hash
             */
            function hashChanged(hash) {
                if (hash.length > 0) {
                    hash = hash.slice(1); //remove hash #
                }
                var parsedHash = parseHash(hash);
                var parsedHashParams = parsedHash.params;

                if (!parsedHash.page || parsedHash.page === sxPages.login) {
                    navigationController.currentPage(sxPages.home);
                    require(['HomeController'], function (HomeController) {
                        loadPage(sxPages.home, function () {
                            HomeController.getInstance().bind();
                        });
                    });
                } else {
                    onClosePage();
                    navigationController.currentPage(parsedHash.page);
                    switch (parsedHash.page) {

                        case sxPages.home:
                            pageIsLoading.pageIsLoading();
                            require(['HomeController'], function (HomeController) {
                                loadPage(sxPages.home, function () {
                                    HomeController.getInstance().bind();
                                    pageIsLoading.pageIsLoaded();
                                });
                            });
                            break;

                        case sxPages.catalog:
                            pageIsLoading.pageIsLoading();
                            require(['Catalog'], function (Catalog) {
                                loadPage(sxPages.catalog, function () {
                                    Catalog.build(parsedHashParams);
                                    pageIsLoading.pageIsLoaded();
                                });
                            });
                            //window.location.hash = sxPages.catalog;
                            break;

                        case sxPages.explorationEditor:
                            pageIsLoading.pageIsLoading();
                            require(['SxControllerImpl'], function (SxControllerImpl) {
                                var sxControllerImpl = SxControllerImpl.getInstance();
                                var explorationId = parsedHashParams.id;
                                if (explorationId && parsedHashParams.inspect == "true") {
                                    sxControllerImpl.inspectPublishedExploration(explorationId);
                                } else if (explorationId) {
                                    sxControllerImpl.openExploration(explorationId);
                                } else {
                                    sxControllerImpl.createExplorationWithoutSources();
                                }
                            });
                            break;

                        case sxPages.createPatternExploration:
                            pageIsLoading.pageIsLoading();
                            require(['SxControllerImpl'], function (SxControllerImpl) {
                                var sxControllerImpl = SxControllerImpl.getInstance();
                                if (parsedHashParams.id) {
                                    sxControllerImpl.createPatternExploration(parsedHashParams.id);
                                }
                            });
                            break;
                        default:
                            window.location.hash = sxPages.home;
                    }

                }
            }

            /**
             *
             * @param {string} pageName
             * @param {Function} callback
             */
            function loadPage(pageName, callback) {
                $(document).ready(function () {
                    var $mainContent = $('#mainContent');
                    Utils.loadHtmlAsync(
                        $mainContent,
                        'html/' + pageName + '.html',
                        function (data, textStatus) {
                            Translate.getTranslated($mainContent);
                            if (callback) {
                                document.body.className = pageName || sxPages.home;
                                callback.call(this);
                            }
                        }
                    );

                });
            }


            function translateIndexHtml() {  //sx template page, headers footers
                $(document).ready(function () {
                    Translate.getTranslated($(document.body));
                });
            }


        }


        /** Custom binding handler to control descendant bindings. */
        ko.bindingHandlers.stopBinding = {
            init: function (elem, valueAccessor) {
                return {
                    controlsDescendantBindings: true
                };
            }
        };


        SxStart.build = function () {
            if (!SxStart.instance) {
                SxStart.instance = new SxStart();
            }
        };

        return SxStart;
    }
);
