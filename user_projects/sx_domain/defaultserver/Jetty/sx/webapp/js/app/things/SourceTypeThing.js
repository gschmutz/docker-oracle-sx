/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
        'SourceTypeThing',
        ['jquery', 'knockout', 'Thing'],
        /**
         * @exports source
         * @ignore
         */
                function($, ko, Thing) {
                    /**
                     * @class
                     * @classdesc Source Type entity for viewing and editing this entity
                     * @param 
                     */
                    function SourceTypeThing(data) {
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
                            'parameters',
                            //'windowable'
                        ]

                        self.init(data);
                    }

                    return SourceTypeThing;
                }
        );
