/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
        'SourceThing',
        ['jquery', 'knockout', 'Thing', 'EventShapeThing'],
        /**
         * @exports source
         * @ignore
         */
                function($, ko, Thing, EventShape) {
                    /**
                     * @class
                     * @classdesc Source class.
                     * @param 
                     */
                    function SourceThing(data) {
                        var self = this;

                        self.base = Thing.call(self).virtualMethods;

                        self.producedEventType = ko.observable(new EventShape());
                        self.typeName = ko.observable('');
                        self.parameters = ko.observableArray([]);
                        self.config.fields = [
                            'createdAt',
                            'createdBy',
                            'updatedAt',
                            'updatedBy',
                            'name',
                            'displayName',
                            'description',
                            //'tags',
                            'attachedTagNames',
                            'typeName',
                            'parameters',
                            'producedEventType'
                        ];

                        self.populate = function(data) {
                            self.base.populate.call(this, data);
                            self.producedEventType(new EventShape(data ? data.producedEventType : null));
                        };

                        self.init(data);
                    }

                    return SourceThing;
                }
        );
