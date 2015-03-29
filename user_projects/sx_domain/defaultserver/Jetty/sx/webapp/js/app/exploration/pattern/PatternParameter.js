/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('PatternParameter', [],

    /**
     * @exports pattern
     * @ignore
     */
    function () {

        /**
         * @class
         * @classdesc   pattern-based exploration  UI controls and  behavior depends on PatternParameter
         *
         * all pattern parameters we got from backend
         * all pattern parameter types are specificated for pattern developers
         *
         */
        function PatternParameter() {
        }

        PatternParameter.TYPE = {
            event_source: "event_source",
            source_field: "source_field",
            source_field_list: "source_field_list",
            integer: "integer",
            range: "range",
            interval: "interval"
            //options: "options", //options for select choices   //not used in this release
            //event_source_list: "event_source_list", //not used in this release
            //dataSource: "dataSource",      //not used in this release
            //staticSource: "staticSource",  //dataSource + cacheSource   //not used in this release
            //double: "double"   //not used in this release


        };


        return PatternParameter;

    });


