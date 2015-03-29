/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Laschenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'TargetService',
        ['jquery', 'knockout', 'Translate', 'ThingService', 'TargetThing'],
        /**
         * @exports target
         * @ignore
         */
                function($, ko, Translate, ThingService, Target) {
                    /**
                     * @class
                     * @classdesc Target Service class.
                     */
                    function TargetService() {
                        var self = this;

                        ThingService.call(self, 'webresources/v0.1/target');

                        self.thing = Target;

                        return this;
                    }

                    return TargetService;
                }
        );
