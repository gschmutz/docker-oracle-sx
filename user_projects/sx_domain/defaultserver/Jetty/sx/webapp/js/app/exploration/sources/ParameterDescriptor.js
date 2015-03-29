/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ParameterDescriptor', [
    ],

    /**
     * ParameterDescriptor
     * @exports exploration/sources
     * @version 1.0
     */

        function () {

        /**
         * @class
         * @classdesc -ParameterDescriptor - contains information about  source type paramater
         * @see SourceType
         *
         * @constructor
         */
        function ParameterDescriptor(data) {

            this.name = data.name;
            this.displayName = data.displayName;
            this.description = data.description;
        }


        return ParameterDescriptor;
    }
)
;