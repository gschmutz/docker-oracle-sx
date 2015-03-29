/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'ExplorationManager',
        ['jquery', 'knockout', 'ThingManager', 'ExplorationThing', 'Utils', 'ExplorationUtils'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, ThingManager, ExplorationThing, Utils, ExplorationUtils) {
                    /**
                     * @class
                     * @classdesc This object is a class for all the ui operations on EventShape.
                     * @param 
                     */
                    var ExplorationManager = {};
                    
                    ExplorationManager.thing = ExplorationThing;
                    
                    
                    ExplorationManager.goEdit = function(thing) {
                        window.location.hash = '#explorationEditor:id=' + thing.name();
                    };

                    ExplorationManager.goCreate = function() {
                        window.location.hash = '#explorationEditor';
                    };
                    
                    ExplorationManager.goInspect = function(thing) {
                        window.location.hash = '#explorationEditor:id=' + thing.name() + ExplorationUtils.getInstance().inspectHashParam;
                        Utils.reloadFromCache();
                    };


                    ExplorationManager = $.extend(true, {}, ThingManager, ExplorationManager);
                    return ExplorationManager;
                });



