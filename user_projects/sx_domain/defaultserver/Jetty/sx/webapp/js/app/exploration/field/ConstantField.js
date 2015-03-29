/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ConstantField', [
        'Utils'
    ],

    /**
     * @exports exploration/field
     * @version 1.0
     */
        function (Utils) {

        /**
         * @class
         * @classdesc exploration constant field : user can add constant field to Exploration
         *
         * @constructor
         * @param {string} name
         * @param {FieldType} type
         * @param {string | number} value
         *
         */
        function ConstantField(name, type, value) {
            this.id = 'constantField_' + Utils.getUniqueId();
            this.name = name;
            this.label = name;
            /**
             *
             * @type {FieldType}
             */
            this.type = type;
            this.value = value;

        }


        /**
         *
         * @param {ConstantField } constantField
         */
        ConstantField.prototype.equals = function (constantField) {
            if (constantField == null || !(constantField instanceof ConstantField)) {
                return false;
            }

            return this.id == constantField.id;
        };


        ConstantField.prototype.clone = function () {
            var constantField = new ConstantField(
                this.name,
                this.type,
                this.value
            );
            constantField.id = this.id;

            return  constantField;
        };


        return ConstantField;

    });
