/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'ThingManager',
        ['jquery', 'knockout', 'Translate', 'Thing'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, Translate, Thing) {
                    /**
                     * @class
                     * @classdesc This object is a base class for all the ui operations entities: Source, EventShape, Exploration, Pattern and so on.
                     * @param 
                     */

                    /*var goEdit = function(thing, options) {
                     alert(Translate.getTranslated('oep.thing.NO_EDITOR_FOUND', [thing.name()]));
                     };
                     var goCreate = function(Thing, options) {
                     alert(Translate.getTranslated('oep.thing.NO_CREATE_WIZARD_FOUND', [Thing.constructor.name]));
                     };
                     var sendToAddToFavourite = function() {
                     alert(Translate.getTranslated('oep.thing.NOT_IMPLEMENTED'));
                     };*/
                    
                    //No constructor here.
                    //Class contains only static methods
                    
                    return { goEdit: function(thing, onOk, onCancel) {
                                if (!this.checkThing(thing)) {
                                    return;
                                }
                                alert(Translate.getTranslated('oep.thing.NO_EDITOR_FOUND', [thing.name()]));
                                return thing;
                            },
                            goCreate: function(thingClass, onOk, onCancel) {
                                if (!this.checkThing(thingClass)) {
                                    return;
                                }
                                alert(Translate.getTranslated('oep.thing.NO_CREATE_WIZARD_FOUND', [thingClass.name]));
                                return Thing;
                            },
                            goDelete: function(thing, onOk, onCancel) {
                                if (!this.checkThing(thing)) {
                                    return;
                                }
                                alert(Translate.getTranslated('oep.thing.NO_EDITOR_FOUND', [thing.name()]));
                                return thing;
                            },
                            sendToAddToFavourite: function(thing, onOk, onCancel) {
                                alert(Translate.getTranslated('oep.thing.NOT_IMPLEMENTED'));
                            },
                            checkThing: function(thing) {
                                var thingClassName = thing.constructor.name;
                                if ($.type(thing) === 'function') {
                                    thingClassName = thing.name;
                                }
                                if (thingClassName === this.thing.name) {
                                   return true;
                                } 
                                throw "Incoming thing has not right type to Edit/Create/Delete";
                                return false;
                            },
                            thing: Thing
                        };
                    
                });



