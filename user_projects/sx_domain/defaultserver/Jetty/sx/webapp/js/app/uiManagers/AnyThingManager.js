/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'AnyThingManager',
        ['jquery', 'knockout', 'ThingManager', 'EventShapeManager',
            'ExplorationManager', 'PatternManager', 'SourceManager', 'SourceTypeManager'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, ThingManager, EventShapeManager, ExplorationManager, PatternManager, SourceManager, SourceTypeManager) {
                    /**
                     * @class
                     * @classdesc This object is a class for all the ui operations on EventShape.
                     * @param 
                     */
                    
                    var AnyThingManager = {};
                     
                    AnyThingManager.getThingManager = function(thing) {
                        var thingName = ($.type(thing) === 'function') ? thing.name : thing.constructor.name;
                        if (thingName === EventShapeManager.thing.name) {
                           return EventShapeManager;
                        }
                        if (thingName === ExplorationManager.thing.name) {
                           return ExplorationManager;
                        }
                        if (thingName === PatternManager.thing.name) {
                           return PatternManager;
                        }
                        if (thingName === SourceManager.thing.name) {
                           return SourceManager;
                        }
                        if (thingName === SourceTypeManager.thing.name) {
                           return SourceTypeManager;
                        }
                        if (thingName === ThingManager.thing.name) {
                           return ThingManager;
                        }
                        throw "AnyThingManager error:: could not find right manager for " + thingName + " thing";
                        return null;
                    };
                    
                    AnyThingManager.thing = null;


                    AnyThingManager.goEdit = function(thing, onOk, onCancel) {
                        var manager = this.getThingManager(thing);
                        if (manager) {
                            manager.goEdit.call(this, thing, onOk, onCancel);
                        }
                    };

                    AnyThingManager.goCreate = function(thingClass, onOk, onCancel) {
                        //Here write, please a code for calling creation popup
                        var manager = this.getThingManager(thingClass);
                        if (manager) {
                            manager.goCreate.call(this, thingClass, onOk, onCancel);
                        }
                    };
                    
                    AnyThingManager.goDelete = function(thing, onOk, onCancel) {
                        //Here write, please a code for calling creation popup
                        var manager = this.getThingManager(thing);
                        if (manager) {
                            manager.goDelete.call(this, thing, onOk, onCancel);
                        }
                    };
                    
                    AnyThingManager = $.extend(true, {}, ThingManager, AnyThingManager);
                    return AnyThingManager;
                });



