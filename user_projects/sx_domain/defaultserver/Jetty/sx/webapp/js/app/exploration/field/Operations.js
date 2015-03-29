/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Operations', [],

    /**
     * @exports exploration/field
     * @ignoer
     */

        function () {

        /**
         * @class
         * @classdesc enum  - comparison operations between fields in Filter
         * @see FieldType, @see Condition
         *
         */
        function Operations() {

        }

        Operations.Operations = {//got from backend
            EQ: "EQ",               //equals
            NE: "NE",               //not equals
            LT: "LT",               //lower than
            LTE: "LTE",             //lower than and equals
            GT: "GT",               //greater than
            GTE: "GTE",             //greater than and equals
            CONTAINS: "CONTAINS"
        };

        return Operations;
    });