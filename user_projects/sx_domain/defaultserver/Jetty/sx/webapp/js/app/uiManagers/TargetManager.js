/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Laschenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'TargetManager',
        ['jquery', 'knockout', 'ThingManager', 'TargetThing', 'TargetForm'],
        /**
         * @exports target
         * @ignore
         */
                function($, ko, ThingManager, Target, TargetForm) {
                    /**
                     * @class
                     * @classdesc TargetManager class.
                     * @param 
                     */
                    var TargetManager = {};

                    TargetManager.thing = Target;


                    TargetManager.goEdit = function(target, onUpdateComplete) {
                        onUpdateComplete = onUpdateComplete || function() {
                            return null;
                        };
                        TargetForm.form('open', new Target(target), {
                            afterSave: onUpdateComplete
                        });
                    };

                    TargetManager.goCreate = function(thingClass, onCreateComplete) {
                        thingClass = thingClass ? thingClass : Target;
                        onCreateComplete = onCreateComplete || function() {
                            return null;
                        };
                        TargetForm.form('open', null, {
                            afterSave: onCreateComplete
                        });
                    };

                    TargetManager = $.extend(true, {}, ThingManager, TargetManager);

                    return TargetManager;
                });
