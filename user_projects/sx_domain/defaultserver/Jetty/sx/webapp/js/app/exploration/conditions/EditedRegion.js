/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('EditedRegion', [],

    /**
     * @exports exploration
     * @ignoer
     */

        function () {

        /**
         * @class
         * @classdesc enum
         * @constructor
         */
        function EditedRegion() {

        }
        EditedRegion.EditedRegion = {
            Sources: "Sources",
            Correlations: "Correlations",
            Filters: "Filters",
            Summaries: "Summaries"
        };

        return EditedRegion;
    });