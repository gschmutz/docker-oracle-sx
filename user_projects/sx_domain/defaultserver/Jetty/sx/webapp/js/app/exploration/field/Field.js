/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Field', [ ],

    /**
     * @exports exploration/field
     * @version 1.0
     */
        function () {

        /**
         * @class
         * @classdesc source field @see EventSource
         *
         * @constructor
         * @param {EventSource} source
         * @param {string} name
         * @param {FieldType} type
         */
        function Field(source, name, type) {
            this.id = source.name + "_" + name;
            /**
             *
             * @type {EventSource}
             */
            this.source = source;
            this.name = name;
            this.label = name;
            /**
             *
             * @type {FieldType}
             */
            this.type = type;

        }


        /**
         *
         * @param {Field } field
         */
        Field.prototype.equals = function (field) {
            if (field == null || !(field instanceof Field)) {
                return false;
            }

            return this.id == field.id;
        };


        return Field;

    });
