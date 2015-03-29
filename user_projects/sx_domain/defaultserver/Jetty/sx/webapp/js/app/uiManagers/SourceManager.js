/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'SourceManager',
        ['jquery', 'knockout', 'ThingManager', 'SourceThing', 'SourceForm'],
        /**
         * @exports source
         * @ignore
         */
                function($, ko, ThingManager, Source, SourceForm) {
                    /**
                     * @class
                     * @classdesc SourceManager class.
                     * @param 
                     */
                    var SourceManager = {};

                    SourceManager.thing = Source;

                    SourceManager.goEdit = function(thing, onUpdateComplete) {
                        onUpdateComplete = onUpdateComplete || function() {
                            return null;
                        };
                        SourceForm.form('open', thing.name(), {
                            afterSave: onUpdateComplete
                        });
                    };


                    SourceManager = $.extend(true, {}, ThingManager, SourceManager);

                    return SourceManager;
                });
