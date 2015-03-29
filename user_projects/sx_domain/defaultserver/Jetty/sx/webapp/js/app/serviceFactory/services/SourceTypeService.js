/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'SourceTypeService',
    ['jquery', 'knockout', 'Translate', 'ThingService', 'SourceTypeThing'],
    /**
     * @exports source
     * @ignore
     */
    function ($, ko, Translate, ThingService, SourceType) {
        /**
         * @class
         * @classdesc This class is a class for a service, which can get/update/add/getById/delete sources, provided by oep REST-service
         */
        function SourceTypeService() {
            var methods = ThingService.call(this, 'webresources/v0.1/sourceType');

            var self = this;
            self.thing = SourceType;

            self.getById = function (id, scope, onSuccess, onFalure) {
                self.getList(null, function (list) {
                    $.each(list, function (index, thing) {
                        if (thing.name() === id) {
                            if (onSuccess) {
                                onSuccess.call(scope || self, thing);
                            }
                            return;
                        }
                    });
                }, onFalure);
            };
            return this;
        }

        return SourceTypeService;
    }
);



