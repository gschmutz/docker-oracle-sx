/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('OperandType', [],

    /**
     * @exports exploration/operand
     * @ignore
     */

        function () {

        /**
         * @class
         * @classdesc enum: operand type @see Operand
         *
         * @constructor
         */
        function OperandType() {

        }

        OperandType.OperandType = {
            FIELD: "FIELD",
            VALUE: "VALUE"
        };


        return OperandType;
    });