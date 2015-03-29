/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'ThingService',
        ['jquery', 'knockout', 'Thing', 'Translate', 'SxPages', 'Utils'],
        /**
         * @exports base
         * @ignore
         */
                function($, ko, Thing, Translate, SxPages, Utils) {
                    /**
                     * @class
                     * @classdesc This class is a base class for a service, which can get/update/add/getById/delete any entity, provided by oep REST-service
                     */
                    function ThingService(url) {
                        var self = this;
                        self.URL = url || '';
                        self.thing = Thing;

                        self.getThingInstance = function(data) {
                            if (!self.thing) {
                                return null;
                            }
                            return new self.thing(data);
                        };
                        
                        self.isServiceThing = function(thing) {
                            return self.thing.name === thing.constructor.name;
                        };


                        //This service 
                        self.getList = function(scope, onSuccess, onFalure) {

                            $.ajax({
                                type: 'GET',
                                url: self.URL,
                                contentType: 'application/json',
                                dataType: 'json',
                                cache: false,
                                success: function(data) {
                                    Utils.goToLoginPageIfUserSessionExpired(data);

                                    if (onSuccess) {
                                        var results = [];
                                        $.each(data.data, function(index, value) {
                                            var thingInstance = self.getThingInstance(value);
                                            results.push(thingInstance);
                                        });
                                        onSuccess.call(scope || this, results);
                                        console.log(self.constructor.name + '.getList metod returned ' + results.length + ' ' + self.thing.name + 's.');
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {
                                    if (onFalure) {
                                        onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                    }
                                    if (textStatus === 'parsererror') {
                                        
                                    }
                                    console.log(self.constructor.name + '.getList metod failed.');
                                    self.checkUnLogin(textStatus);
                                }
                            });
                        };

                        self.getById = function(id, scope, onSuccess, onFalure) {
                            var idThing = self.getThingInstance({name: id});

                            var url = self.getUrl(idThing);
                            if (!url) {
                                return;
                            }

                            $.ajax({
                                type: 'GET',
                                url: url,
                                cache: false,
                                success: function(data) {
                                    Utils.goToLoginPageIfUserSessionExpired(data);

                                    var thing = self.getThingInstance(data.data);
                                    console.log(self.constructor.name + '.getById metod returned ' + thing.constructor.name + '.');
                                    if (onSuccess) {
                                        onSuccess.call(this, thing);
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {
                                    if (onFalure) {
                                        onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                    }
                                    console.log(self.constructor.name + '.getById metod failed.');
                                    self.checkUnLogin(textStatus);
                                }
                            });

                        };


                        self.getUrl = function(thing) {
                            if (!self.checkThing(thing)) {
                                return;
                            }
                            if (!self.URL) {
                                return;
                            }
                            var baseUrl = self.URL;

                            if (self.URL.indexOf(self.URL.length - 1) !== '/') {
                                baseUrl = self.URL + '/';
                            }

                            //ko.isObservable(thing.name) - it's not constructor for a thing, strictly thing Object
                            if ($.type(thing.name) !== 'function')
                                return baseUrl;

                            return baseUrl + thing.name();
                        };

                        self.checkThing = function(thing) {
                            var thingClassName = thing.constructor.name;
                            if ($.type(thing) === 'function') {
                                thingClassName = thing.name;
                            }
                            if (thingClassName === this.thing.name) {
                                return true;
                            }
                            throw "Incoming thing has not right type to Edit/Create/Delete";
                            return false;
                        };

                        self.create = function(thingToCreate, scope, onSuccess, onFalure) {
                            var url = self.getUrl(thingToCreate); //self.URL;
                            if (!url) {
                                return;
                            }
                            var thingData = thingToCreate.getPlainData();
                            $.ajax({
                                url: url,
                                type: 'POST',
                                dataType: 'json',
                                contentType: 'application/json',
                                data: JSON.stringify(thingData), //JSON.stringify(data)
                                success: function(data) {
                                    Utils.goToLoginPageIfUserSessionExpired(data);

                                    if (data.success) {
                                        var thing = self.getThingInstance(data.data);
                                        console.log(self.constructor.name + '.create created one ' + thing.constructor.name);
                                        if (onSuccess) {
                                            onSuccess.call(scope || this, thing);
                                        }
                                    } else {
                                        onFalure.call(scope || this, {errorCode: data.textStatus, error: data.message, data: data.data});
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown) {
                                    console.log(self.constructor.name + '.create metod failed.');
                                    if (onFalure) {
                                        onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                    }
                                    self.checkUnLogin(textStatus);
                                }
                            });
                        };

                        self.update = function(thingToUpdate, scope, onSuccess, onFalure) {
                            var url = self.getUrl(thingToUpdate);
                            var thingData = thingToUpdate.getPlainData();
                            if (url) {
                                $.ajax({
                                    type: 'PUT',
                                    url: url,
                                    contentType: 'application/json',
                                    dataType: 'json',
                                    data: JSON.stringify(thingData),
                                    success: function(data, textStatus, jqXHR) {
                                        Utils.goToLoginPageIfUserSessionExpired(data);

                                        if (data.success) {
                                            var thing = self.getThingInstance(data.data);
                                            console.log(self.constructor.name + '.update updated one ' + thing.constructor.name);
                                            if (onSuccess) {
                                                onSuccess.call(scope || this, thing);
                                            }
                                        } else {
                                            onFalure.call(scope || this, {errorCode: data.textStatus, error: data.message, data: data.data});
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown) {
                                        console.log(self.constructor.name + '.update metod failed.');
                                        if (onFalure) {
                                            onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                        }
                                        self.checkUnLogin(textStatus);
                                    }
                                });
                            }
                        };

                        self.remove = function(thingToDelete, scope, onSuccess, onFalure) {
                            var url = self.getUrl(thingToDelete);
                            if (url)
                                $.ajax({
                                    type: 'DELETE',
                                    url: url,
                                    contentType: 'application/json',
                                    dataType: 'json',
                                    success: function(data) {
                                        Utils.goToLoginPageIfUserSessionExpired(data);

                                        console.log(self.constructor.name + '.remove removed one ' + thingToDelete.constructor.name);
                                        if (onSuccess) {
                                            onSuccess.call(this, data.data);
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown) {
                                        console.log(self.constructor.name + '.remove method failed.');
                                        if (onFalure) {
                                            onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                        }
                                        self.checkUnLogin(textStatus);
                                    }
                                });
                        };
                        
                        self.checkUnLogin = function(textStatus) {
                            if (textStatus === 'parsererror') {
                                SxPages.getInstance().goToLoginPage();
                                return true;
                            }
                            return false;
                        };

                        return {
                            getList: self.getList,
                            edit: self.edit,
                            add: self.add,
                            remove: self.remove,
                            getById: self.getById,
                            checkUnLogin: self.checkUnLogin
                        };
                    }

                    return ThingService;
                }
        );



