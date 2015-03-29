/**
 * Product: OEP Stream Explorer
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'BrowseService',
    [
        'jquery',
        'knockout',
        'Translate',
        'CatalogParameters',
        'Thing',
        'PatternThing',
        'TargetThing',
        'SourceThing',
        'ExplorationThing',
        'Utils',
        'RestAPI'
    ],
    /**
     * @exports base
     * @ignore
     */
    function ($, ko, Translate, CatalogParameters, Thing, PatternThing, TargetThing, SourceThing, ExplorationThing, Utils, RestAPI) {
        /**
         * @class
         */
        function BrowseService() {
            var self = this;


            self.getEntityInstance = function (data) {
                if (!data.entityType) {
                    return new Thing(data);
                }

                if (data.entityType === CatalogParameters.EntityType.STREAM ||
                    data.entityType === CatalogParameters.EntityType.DATA_SOURCE) {
                    return new SourceThing(data);
                }

                if (data.entityType === CatalogParameters.EntityType.EXPLORATION) {
                    return new ExplorationThing(data);
                }

                if (data.entityType === CatalogParameters.EntityType.PATTERN) {
                    return new PatternThing(data);
                }

                if (data.entityType === CatalogParameters.EntityType.TARGET) {
                    return new TargetThing(data);
                }

                return new Thing(data);
            };

            self.getURL = function (url, paths, parameters) {
                if (!url) {
                    return;
                }

                if (paths && paths.length > 0) {
                    if (url.indexOf(url.length - 1) !== '/') {
                        url += '/';
                    }

                    $.each(paths, function (index, item) {
                        url += item;
                        if (index !== paths.length - 1) {
                            url += '/';
                        }
                    });
                }

                if (parameters && parameters.length > 0) {
                    url += '?';

                    $.each(parameters, function (index, item) {
                        url += item.key + '=' + item.value;
                        if (index !== parameters.length - 1) {
                            url += '&';
                        }
                    });
                }

                return url;
            };

            /**
             * Special method for the catalog list view.
             * If input parameters are incorrect, this service returns
             * THE LAST PAGE FOR THE CATALOG LIST VIEW.
             */
            self.getList = function (parameters, scope, onSuccess, onFailure) {
                var url = self.getURL(RestAPI.URL.search, ['list'], parameters);
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);
                        if (onSuccess) {
                            var result = {};
                            result.data = [];
                            $.each(data.data.list, function (index, value) {
                                var thingInstance = self.getEntityInstance(value);
                                result.data.push(thingInstance);
                            });
                            result.parameters = data.data.parameters ? data.data.parameters : {};
                            result.total = data.data.total ? data.data.total : 0;
                            onSuccess.call(scope || this, result);
                            console.log(self.constructor.name + '.getList method returned ' + result.data.length + ' entities.');
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                        console.log(self.constructor.name + '.getList method failed.');
                    }
                });
            };

            self.search = function (parameters, scope, onSuccess, onFailure) {
                var url = self.getURL(RestAPI.URL.search, [], parameters);
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);

                        if (onSuccess) {
                            var result = [];
                            $.each(data.data, function (index, value) {
                                var thingInstance = self.getEntityInstance(value);
                                result.push(thingInstance);
                            });
                            onSuccess.call(scope || this, result);
                            console.log(self.constructor.name + '.search method returned ' + result.length + ' entities.');
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                        console.log(self.constructor.name + '.search method failed.');
                    }
                });
            };

            self.markFavorite = function (id, isFavorite, scope, onSuccess, onFailure) {
                var url = self.getURL(RestAPI.URL.markFavorite, [id, isFavorite], null);
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);

                        console.log(self.constructor.name + '.markFavorite method set entity with id=' + id + ' favorite=' + isFavorite + '.');
                        if (onSuccess) {
                            onSuccess.call(scope || this);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                        console.log(self.constructor.name + '.markFavorite method failed.');
                    }
                });
            };

            /**
             *
             * delete entity
             *
             *
             * @param id
             * @param scope
             * @param onSuccess
             * @param onFailure
             *
             * @param {Thing} thing
             *
             */
            self.delete = function (id, scope, onSuccess, onFailure, thing) {

                var isExploration = thing.constructor.name === 'ExplorationThing';

                var isDraftExploration = isExploration
                    &&
                    thing.published() !== true; // draft

                var url =
                    isExploration ? isDraftExploration ?
                        self.getURL(RestAPI.URL.deleteDraftExploration, [id], null) // draft
                        :
                        self.getURL(RestAPI.URL.unpublishOnPressDeleteInCatalog, [id], null)  // published
                        :
                        self.getURL(RestAPI.URL.delete, [id], null); //not exploration
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);

                        console.log(self.constructor.name + '.remove successfully removed entity with id ' + id);
                        if (onSuccess) {
                            onSuccess.call(scope || this);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(self.constructor.name + '.remove method failed.');
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                    }
                });
            };

            self.restore = function (id, scope, onSuccess, onFailure) {
                var url = RestAPI.URL.recover;
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {id: id},
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);
                        if (data && data.success) {
                            console.log(self.constructor.name + '.restore successfully restored entity with id ' + id);

                        if (onSuccess) {
                            onSuccess.call(scope || this);
                        }
                        } else {
                            console.log(self.constructor.name + '.restore method failed.');
                            if (onFailure) {
                                onFailure.call(scope || this, {status: data.message, error: data.errorCode});
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(self.constructor.name + '.restore method failed.');
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                    }
                });
            };

            self.findDependentEntitiesNames = function (id, scope, onSuccess, onFailure) {
                var url = self.getURL(RestAPI.URL.findDependentNames, [id], null);
                if (!url) {
                    return;
                }

                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function (data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);

                        console.log(self.constructor.name + '.findDependentEntitiesNames succeeded.');
                        if (onSuccess) {
                            onSuccess.call(scope || this, data.data);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(self.constructor.name + '.findDependentEntitiesNames method failed.');
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                    }
                });
            };

            return {
                getList: self.getList,
                search: self.search,
                markFavorite: self.markFavorite,
                restore: self.restore,
                findDependentEntitiesNames: self.findDependentEntitiesNames,
                delete: self.delete
            };
        }

        return BrowseService;
    }
);



