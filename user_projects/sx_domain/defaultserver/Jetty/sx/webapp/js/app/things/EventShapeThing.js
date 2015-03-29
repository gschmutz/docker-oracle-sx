/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

  define(
    'EventShapeThing',
    ['jquery', 'knockout', 'Thing'],
    /**
     * @exports event/source
     * @ignore
     */
    function($, ko, Thing) {
        /**
         * @class
         * @classdesc Event Shape entity for viewing and editing this entity
         * @param 
         */
        
        function EventShapeThing(data) {
            
            
            this.base = Thing.call(this, data).virtualMethods;
            this.fields = ko.observable({});
            
            var self = this;
            
            self.config.fields = [
                                //'createdAt',
                                //'createdBy',
                                //'updatedAt',
                                //'updatedBy',
                                'name',
                                //'displayName',
                                //'description',
                                //'tags',
                                'fields'
                            ]; 
            
            self.init(data);
         };
        
            
            
        
        
        return EventShapeThing;
    }
);
