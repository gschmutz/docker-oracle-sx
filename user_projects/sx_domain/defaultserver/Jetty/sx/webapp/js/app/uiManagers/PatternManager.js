/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'PatternManager',
        ['jquery', 'knockout', 'ThingManager', 'PatternThing', 'ExplorationsController'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, ThingManager, Pattern, ExplorationsController) {
                    /**
                     * @class
                     * @classdesc This object is a class for all the ui operations on Pattern.
                     * @param 
                     */
                    var PatternManager = {};
                    
                    PatternManager.thing = Pattern;
                    
                    PatternManager.goEdit = function(thing) {
                        window.location = '#createPatternExploration:id=' + thing.name();
                    };
                    PatternManager = $.extend(true, {}, ThingManager, PatternManager);
                    return PatternManager;
                });



