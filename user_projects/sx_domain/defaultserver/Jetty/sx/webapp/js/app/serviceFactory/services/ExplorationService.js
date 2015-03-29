/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

  define(
    'ExplorationService',
    ['jquery', 'knockout', 'Translate', 'ThingService', 'ExplorationThing'],
    /**
     * @exports event/source
     * @ignore
     */
    function($, ko, Translate, ThingService, Exploration) {
        /**
         * @class
         * @classdesc This class is a class for a service, which can get/update/add/getById/delete Explorations, provided by oep REST-service
         */
        function ExplorationService() {
            var self = this;

            var methods = ThingService.call(this, 'webresources/v0.1/exploration');
              
            self.thing = Exploration;

            return this;
        }
        
        return ExplorationService;
    }
);



