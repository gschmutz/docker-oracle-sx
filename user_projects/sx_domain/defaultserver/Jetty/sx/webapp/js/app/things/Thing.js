/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'Thing',
        ['jquery', 'knockout', 'Translate'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, Translate) {
                    /**
                     * @class
                     * @classdesc This object is a base class for all the possible CRUD (VIEW) entities: Source, EventShape, Exploration, Pattern and so on.
                     * @param 
                     */
                    function Thing() {
                        var self = this;
                        self.name = ko.observable('');
                        self.displayName = ko.observable('');
                        self.description = ko.observable('');
                        self.createdAt = null;
                        self.createdBy = '';
                        self.updatedAt = null;
                        self.updatedBy = '';
                        self.attachedTagNames = ko.observableArray();
                        self.favorite = ko.observable(false);
                                               
                        self.config = {
                            fields: [
                                'createdAt',
                                'createdBy',
                                'updatedAt',
                                'updatedBy',
                                'name',
                                'displayName',
                                'description',
                                'attachedTagNames'
                            ]
                        };

                        self.label = ko.computed(function() {
                            return self.displayName() || self.name();
                        });

                        self.addToFavourite = function() {
                            alert(Translate.getTranslated('oep.thing.NOT_IMPLEMENTED'));
                        };

                        self.init = function(data) {
                            self.populate(data);
                            /*self.name(data && data.name ? data.name : '');
                            self.displayName(data ? data.displayName : '');
                            self.description(data && data.description ? data.description : '');
                            self.createdAt = data && data.createdAt ? data.createdAt : null;
                            self.createdBy = data && data.createdBy ? data.createdBy : '';
                            self.tags = data && data.attachedTagNames ? data.attachedTagNames : [];
                            */
                        };

                        self.populate = function(data) {
                            var self = this;
                            if (data) {
                                $.each(data, function(key, value) {
                                    if (ko.isObservable(self[key])) {
                                        if (!!self[key].indexOf && !value) {
                                            self[key]([]);
                                        }
                                        self[key](value);
                                    } else {
                                        self[key] = value;
                                    }
                                });
                            }
                        };
                        self.getPlainData = function() {
                            var self = this;
                            var data = {};
                            $.each(self.config.fields, function(index, field) {
                                var plainValue = ko.isObservable(self[field]) ? self[field]() : self[field];
                                if (plainValue && plainValue.getPlainData) {
                                    plainValue = plainValue.getPlainData();
                                } else {
                                    plainValue = ko.toJS(plainValue);
                                }
                                data[field] = plainValue;
                            });
                            return data;
                        };

                        //self.init(data);

                        //return self;
                        return {virtualMethods: {
                                init: self.init,
                                populate: self.populate,
                                getPlainData: self.getPlainData
                            }
                        };
                    }

                    /*Thing.getMe = function() {
                     return this;
                     }*/

                    return Thing;
                }
        );



