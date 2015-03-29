/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'PatternService',
    ['jquery', 'knockout', 'Translate', 'ThingService', 'PatternThing'],
    /**
     * @exports event/source
     * @ignore
     */
        function ($, ko, Translate, ThingService, Pattern) {
        /**
         * @class
         * @classdesc This class is a class for a service, which can get/update/add/getById/delete Event Shapes, provided by oep REST-service
         */
        function PatternService() {

            var methods = ThingService.call(this, 'webresources/v0.1/patternType');

            var self = this;

            self.thing = Pattern;

            return this;
        }

        return PatternService;
    }
);



