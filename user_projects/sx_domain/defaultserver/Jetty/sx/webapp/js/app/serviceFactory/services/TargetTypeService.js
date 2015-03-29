/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Laschenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'TargetTypeService',
        ['jquery', 'knockout', 'Translate', 'ThingService', 'TargetTypeThing'],
        /**
         * @exports target
         * @ignore
         */
                function($, ko, Translate, ThingService, TargetType) {
                    /**
                     * @class
                     * @classdesc Target service class.
                     */
                    function TargetTypeService() {
                        var self = this;

                        ThingService.call(self, 'webresources/v0.1/targetType');
                        
                        self.thing = TargetType;
                        self.getById = function(id, scope, onSuccess, onFalure) {
                            self.getList(null, function(list) {
                                var found = null;
                                
                                $.each(list, function(index, thing) {
                                    if (thing.name() === id) {
                                        if (onSuccess) {
                                            found = thing;
                                            return false;
                                        }
                                    }
                                });
                                
                                onSuccess.call(scope || self, found);
                            }, onFalure);
                        };
                        return this;
                    }

                    return TargetTypeService;
                }
        );



