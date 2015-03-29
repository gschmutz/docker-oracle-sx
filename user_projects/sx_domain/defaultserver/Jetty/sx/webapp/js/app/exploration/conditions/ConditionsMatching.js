/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 1/16/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ConditionsMatching', [],

    /**
     * @exports exploration/conditions
     * @ignoer
     */

        function () {

        /**
         * @class
         * @classdesc enum
         * @constructor
         */
        function ConditionsMatching() {

        }

        ConditionsMatching.ConditionsMatching = {
            ALL: "ALL",
            ANY: "ANY"
        };

        return ConditionsMatching;
    });