/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Operand', [
    'Utils',
    'OperandType'
],

    /**
     * @exports exploration/operand
     * @version 1.0
     */
        function (Utils, OperandType) {

        /**
         *
         * @class
         * @classdesc wrapper for @see Field or value in @see Condition or @see Correlation
         *
         * @constructor
         * @param {OperandType} type
         * @param {Field} field
         * @param value
         */
        function Operand(type, value, field) {
            this.id = 'Operand_' + Utils.getUniqueId();
            /**
             *
             * @type {OperandType}
             */
            this.type = type;
            this.value = value;
            /**
             *
             * @type {Field}
             */
            this.field = field;

        }

        /**
         *
         * @param {Operand } operand
         */
        Operand.prototype.equals = function (operand) {

            if (operand == null || !(operand instanceof Operand)) {
                return false;
            }

            if (this.type != operand.type) {
                return false;
            }

            if (this.type == OperandType.OperandType.VALUE) {
                return this.value === operand.value;
            }

            if (this.type == OperandType.OperandType.FIELD) {
                return this.field.equals(operand.field);
            }

            return false;
        };


        return Operand;

    });
