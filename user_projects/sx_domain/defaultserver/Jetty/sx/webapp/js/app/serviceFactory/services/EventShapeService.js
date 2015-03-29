/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

  define(
    'EventShapeService',
    ['jquery', 'knockout', 'Translate', 'ThingService', 'EventShapeThing', 'Utils'],
    /**
     * @exports event/source
     * @ignore
     */
    function($, ko, Translate, ThingService, EventShape, Utils) {
        /**
         * @class
         * @classdesc This class is a class for a service, which can get/update/add/getById/delete Event Shapes, provided by oep REST-service
         */
        function EventShapeService() {
            var methods = ThingService.call(this, 'webresources/v0.1/eventType');

            var self = this;

            self.thing = EventShape;

            self.getSourceShapesList = function(sourceTypeThing, parameters, scope, onSuccess, onFailure) {
                var SHAPE_UTILS_SERVICE_BASE_URL = 'webresources/v0.1/utils/eventType/';
                if (!sourceTypeThing) {
                    return;
                }
                var url = SHAPE_UTILS_SERVICE_BASE_URL + sourceTypeThing.name();
                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    data: parameters,
                    success: function(data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);

                        if (onSuccess) {
                            var results = [];
                            $.each(data.data, function(index, value) {
                                var thingInstance = self.getThingInstance(value);
                                results.push(thingInstance);
                            });
                            console.log(self.constructor.name + '.getSourceShapesList method:: ' + results.length + ' results found for ' + sourceTypeThing.name() + ' sourceType.');
                            onSuccess.call(scope || this, results);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                        console.log(self.constructor.name + '.getSourceShapesList method failed:: ' + errorThrown);
                        self.checkUnLogin(textStatus);
                    }
                });
            };

            self.getListForTargetType = function(targetType, parameters, scope, onSuccess, onFailure) {
                var SHAPE_UTILS_SERVICE_BASE_URL = 'webresources/v0.1/utils/eventType/';
                var url = SHAPE_UTILS_SERVICE_BASE_URL + targetType;
                $.ajax({
                    type: 'GET',
                    url: url,
                    cache: false,
                    data: parameters,
                    success: function(data) {
                        Utils.goToLoginPageIfUserSessionExpired(data);
                        if (!data.data && onFailure) {
                            onFailure.call(scope || this, {status:data.errorCode , error: data.message});
                            return;
                        }
                        if (onSuccess) {
                            var results = [];
                            $.each(data.data, function(index, value) {
                                var thingInstance = self.getThingInstance(value);
                                results.push(thingInstance);
                            });
                            console.log(self.constructor.name + '.getListForTargetType method:: ' + results.length + ' results found for ' + targetType + ' targetType.');
                            onSuccess.call(scope || this, results);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        if (onFailure) {
                            onFailure.call(scope || this, {status: textStatus, error: errorThrown});
                        }
                        console.log(self.constructor.name + '.getListForTargetType method failed:: ' + errorThrown);
                        self.checkUnLogin(textStatus);
                    }
                });
            };

            return this;
        }

        return EventShapeService;
    }
);



