/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Laschenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
        'TargetThing',
        ['jquery', 'knockout', 'Thing', 'EventShapeThing'],
        /**
         * @exports target
         * @ignore
         */
                function($, ko, Thing, EventShape) {
                    /**
                     * @class
                     * @classdesc Target class.
                     * @param {object} data
                     */
                    function TargetThing(data) {
                        var self = this;

                        self.base = Thing.call(self).virtualMethods;

                        self.consumedEventType = ko.observable(new EventShape());
                        self.typeName = ko.observable('');
                        self.parameters = ko.observable({});
                        self.mapping = ko.observable({});

                        self.config.fields = [
                            //'createdAt',
                            //'createdBy',
                            //'updatedAt',
                            //'updatedBy',
                            'name',
                            'displayName',
                            'description',
                            //'tags',
                            //'attachedTagNames',
                            'typeName',
                            'parameters',
                            'consumedEventType',
                            'mapping'
                        ];

                        self.populate = function(data) {
                            self.base.populate.call(this, data);
                            self.consumedEventType(new EventShape(data ? data.consumedEventType : null));
                        };

                        self.init(data);
                    }

                    return TargetThing;
                }
        );
