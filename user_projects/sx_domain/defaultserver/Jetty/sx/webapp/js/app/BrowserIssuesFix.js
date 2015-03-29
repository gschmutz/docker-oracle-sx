/**
 * Product: OEP Stream Explorer.
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('BrowserIssuesFix',
    [],
    /**
     * @exports BrowserIssuesFix
     * @ignore
     */
    function () {


        /**
         *
         * BrowserIssuesFix
         *
         * @constructor
         */
        function BrowserIssuesFix() {

            /**
             * Fix Function#name on browsers that do not support it (IE):
             */
            var fixIEName = function () {
                if (!(function f() {
                    }).name) {
                    Object.defineProperty(Function.prototype, 'name', {
                        get: function () {
                            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
                            // For better performance only parse once, and then cache the
                            // result through a new accessor for repeated access.
                            Object.defineProperty(this, 'name', {value: name});
                            return name;
                        }
                    });
                }
            };

            fixIEName();

        }


        BrowserIssuesFix.build = function () {
            if (!BrowserIssuesFix.instance) {
                BrowserIssuesFix.instance = new BrowserIssuesFix();
            }
        };

        return BrowserIssuesFix;
    }
);
