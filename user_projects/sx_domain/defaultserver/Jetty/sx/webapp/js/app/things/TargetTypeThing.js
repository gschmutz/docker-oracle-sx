/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
        'TargetTypeThing',
        ['jquery', 'knockout', 'Thing'],
        /**
         * @exports target
         * @ignore
         */
                function($, ko, Thing) {
                    /**
                     * @class
                     * @classdesc Target Type class.
                     * @param 
                     */
                    function TargetTypeThing(data) {
                        var self = this;

                        self.base = Thing.call(self, data).virtualMethods;

                        self.parameters = ko.observableArray([]);
                        self.config.fields = [
                            //'createdAt',
                            //'createdBy',
                            //'updatedAt',
                            //'updatedBy',
                            'name',
                            'displayName',
                            'description',
                            //'tags',
                            'parameters'
                        ]

                        self.init(data);
                    }

                    return TargetTypeThing;
                }
        );
