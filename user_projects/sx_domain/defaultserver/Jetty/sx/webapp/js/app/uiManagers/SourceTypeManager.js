/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'SourceTypeManager',
        ['jquery', 'knockout', 'ThingManager', 'SourceTypeThing'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, ThingManager, SourceType) {
                    /**
                     * @class
                     * @classdesc This object is a class for all the ui operations on SourceType.
                     * @param 
                     */
                    var SourceTypeManager = {};
                    
                    SourceTypeManager.thing = SourceType;
                    
                    
                    /*SourceTypeManager.goEdit = function(thing) {
                                //Write some code here to re-write method
                            };
                            
                    SourceTypeManager.goCreate = function() {
                                //Here write, please a code for calling creation popup
                            };*/
                    
                    SourceTypeManager = $.extend(true, {}, ThingManager, SourceTypeManager);
                    return SourceTypeManager;
                });



