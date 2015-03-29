/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ImplicitDatatypeConversionMatrix', [
        'FieldType',
        'OperandType'
    ],

    /**
     * @exports exploration/field
     * @ignoer
     */

        function (FieldType, OperandType) {

        /**
         * @class
         * @classdesc check that compared fields(in correlation/filter clauses) are dataType compatible
         *
         * see more in the chapter at OEP CQL guide:
         * http://docs.oracle.com/cd/E23943_01/apirefs.1111/e12048/cql_elements.htm#BABIADIF
         *
         * 2.2.4.1 Implicit Datatype Conversion
         *
         * @constructor
         */
        function ImplicitDatatypeConversionMatrix() {

            var operandTypes = OperandType.OperandType;

            var implicitDatatypeConversionMatrix = [];
            implicitDatatypeConversionMatrix[FieldType.TYPES.string] = [
                FieldType.TYPES.string,
                FieldType.TYPES.timestamp
            ];


            implicitDatatypeConversionMatrix[FieldType.TYPES.byte] = [
                FieldType.TYPES.string,
                FieldType.TYPES.byte
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.int] = [
                FieldType.TYPES.string,
                FieldType.TYPES.int,
                FieldType.TYPES.bigint,
                FieldType.TYPES.float,
                FieldType.TYPES.double
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.bigint] = [
                FieldType.TYPES.string,
                FieldType.TYPES.bigint,
                FieldType.TYPES.float,
                FieldType.TYPES.double
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.float] = [
                FieldType.TYPES.string,
                FieldType.TYPES.float,
                FieldType.TYPES.double
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.double] = [
                FieldType.TYPES.string,
                FieldType.TYPES.double
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.number] =
                implicitDatatypeConversionMatrix[FieldType.TYPES.double];


            implicitDatatypeConversionMatrix[FieldType.TYPES.boolean] = [
                FieldType.TYPES.boolean
            ];

//                implicitDatatypeConversionMatrix[FieldType.TYPES.object] = [];
            implicitDatatypeConversionMatrix[FieldType.TYPES.timestamp] = [
                FieldType.TYPES.string,
                FieldType.TYPES.timestamp
            ];

            implicitDatatypeConversionMatrix[FieldType.TYPES.interval] = [
                FieldType.TYPES.string,
                FieldType.TYPES.interval
            ];

//                implicitDatatypeConversionMatrix[FieldType.TYPES.intervalym] = [];
//                implicitDatatypeConversionMatrix[FieldType.TYPES.xmltype] = [];


            /**
             *
             * check field data types compatibility (implicit datatype conversion or the same type)
             * for check ability to correlate fields in Correlations box/ Filters box
             *
             * @param {FieldType} fieldType1
             * @param {FieldType} fieldType2
             *
             * @return {boolean}
             */
            this.isFieldDatatypesCompatible = function (fieldType1, fieldType2) {

                if (this.getImplicitConversionType(fieldType1, fieldType2)) {
                    return true;
                }
                return  false;

            };


            /**
             *
             * @param {Condition} condition
             * @returns {FieldType|null}
             */
            this.getConditionImplicitConversionType = function (condition) {

                if (condition.operand2.type === operandTypes.FIELD) {
                    return  this.getImplicitConversionType(condition.operand1.field.type, condition.operand2.field.type);
                }
                return condition.operand1.field.type;
            };

            /**
             *
             *  return implicit conversion type if convesion possible, otherwise return null
             * for ability to correlate fields and filter fields cases
             *
             * @param {FieldType} fieldType1
             * @param {FieldType} fieldType2
             *
             * @return {FieldType|null}
             */
            this.getImplicitConversionType = function (fieldType1, fieldType2) {
                return  convertTypeFromTo(fieldType1, fieldType2) ||
                    convertTypeFromTo(fieldType2, fieldType1);

            }


            /**
             *
             * @param {FieldType} fromType
             * @param {FieldType} toType
             *
             * @return {FieldType|null}  - return toType if conversion possible, else null
             */
            function convertTypeFromTo(fromType, toType) {

                var possibleConversions = implicitDatatypeConversionMatrix[fromType.name];
                for (var i = 0; i < possibleConversions.length; i++) {
                    if (possibleConversions[i] === toType.name) {
                        return toType;
                    }
                }

                return null;
            }



        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ImplicitDatatypeConversionMatrix}
         */
        ImplicitDatatypeConversionMatrix.getInstance = function () {
            if (!this.instance) {
                this.instance = new ImplicitDatatypeConversionMatrix();
            }
            return this.instance;
        };


        return ImplicitDatatypeConversionMatrix;

    });
