/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SourceTypeDescriptor', [
        'jquery',
        'ParameterDescriptor'
    ],

    /**
     * SourceTypeDescriptor
     * @exports exploration/sources
     * @version 1.0
     */

        function ($, ParameterDescriptor) {

        /**
         * @class
         * @classdesc -SourceTypeDescriptor - contains information about source type and source type paramaters
         * @see SourceType
         *
         * @constructor
         */
        function SourceTypeDescriptor(data) {

            this.name = data.name;
            this.displayName = data.displayName;
            this.description = data.description;

            /**
             *
             * @type {boolean}
             */
            this.windowable = data.windowable;


            /**
             *
             * @type {ParameterDescriptor[]}
             */
            this.parameterDescriptors = this.jsonToParameterDescriptions(data.parameters);


        }

        /**
         *
         * @param {Array} parametersInJson
         * @returns {ParameterDescriptor[]}
         */
        SourceTypeDescriptor.prototype.jsonToParameterDescriptions = function (parametersInJson) {
            var parameterDescriptors = [];
            if (parametersInJson) {
                for (var i = 0; i < parametersInJson.length; i++) {
                    parameterDescriptors.push(
                        new ParameterDescriptor(parametersInJson[i])
                    );
                }
            }
            return parameterDescriptors;
        };

        return SourceTypeDescriptor;
    }
)
;