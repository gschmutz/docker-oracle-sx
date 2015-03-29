/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'EventShapeManager',
        ['jquery', 'knockout', 'ThingManager', 'EventShapeThing'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, ThingManager, EventShape) {
                    /**
                     * @class
                     * @classdesc This object is a class for all the ui operations on EventShape.
                     * @param 
                     */
                    var EventShapeManager = {};

                    EventShapeManager.thing = EventShape;


                    /*EventShapeManager.goEdit = function(thing) {
                     //Write some code here to re-write method
                     };
                     
                     EventShapeManager.goCreate = function() {
                     //Here write, please a code for calling creation popup
                     };*/
                    EventShapeManager = $.extend(true, {}, ThingManager, EventShapeManager);
                    return EventShapeManager;
                });



