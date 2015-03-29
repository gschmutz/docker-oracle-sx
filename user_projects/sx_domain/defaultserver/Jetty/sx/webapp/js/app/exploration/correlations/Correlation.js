/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 1/16/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Correlation', [
    'Utils',
    'Condition',
    'Operand'
],

    /**
     * @exports exploration/correlations
     * @version 1.0
     */
        function (Utils, Condition, Operand) {

        /**
         *
         * @class
         * @classdesc Correlation
         * @extends Condition
         *
         * @constructor
         * @param operand1
         * @param operation
         * @param operand2
         */
        function Correlation(operand1, operation, operand2) {
            Correlation.superclass.constructor.call(this, operand1, operation, operand2);
            this.id = 'correlation_' + Utils.getUniqueId();
        }

        //inheritance
        Utils.extend(Correlation, Condition);


        Correlation.prototype.clone = function () {
            return new Correlation(
                new Operand(this.operand1.type, this.operand1.value, this.operand1.field),
                this.operation,
                new Operand(this.operand2.type, this.operand2.value, this.operand2.field)
            );
        };


        return Correlation;

    });
