/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

  define(
    'ExplorationThing',
    ['jquery', 'knockout', 'Thing'],
    /**
     * @exports event/source
     * @ignore
     */
    function($, ko, Thing) {
        /**
         * @class
         * @classdesc Exploration entity for viewing and editing this entity
         * @param 
         */
        
        function ExplorationThing(data) {

            this.base = Thing.call(this, data).virtualMethods;

            var self = this;

            self.published = ko.observable(false);
            
           
            self.populate = function(data) {
                            self.base.populate.call(this, data);
                            if (data.publishedMetadata) {
                                self.publishedMetadata = new ExplorationThing(data.publishedMetadata);
                            }
            };
            
            self.init(data);
            
            
        };
       
        return ExplorationThing;
    }
);


