/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Condition', [
    'Utils'
],

    /**
     * @exports exploration/conditions
     * @version 1.0
     */
        function (Utils) {

        /**
         * @class
         * @classdesc Condition(Filter clause)
         *
         * @constructor
         * @param {Operand} operand1
         * @param {Operations.Operations } operation
         * @param {Operand} operand2
         *
         */
        function Condition(operand1, operation, operand2) {

            this.id = 'condition_' + Utils.getUniqueId();

            /**
             *
             * @type {Operand}
             */
            this.operand1 = operand1;

            /**
             *
             * @type {Operations.Operations }
             */
            this.operation = operation;
            /**
             *
             * @type {Operand}
             */
            this.operand2 = operand2;


        }


        /**
         *
         * @param {Condition } condition
         */
        Condition.prototype.equals = function (condition) {
            if (condition == null || !(condition instanceof Condition)) {
                return false;
            }

            return this.operand1.equals(condition.operand1) &&
                this.operation == condition.operation &&
                this.operand2.equals(condition.operand2);
        };


        return Condition;

    });
