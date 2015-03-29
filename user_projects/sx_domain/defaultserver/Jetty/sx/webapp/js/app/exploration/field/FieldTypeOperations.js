/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('FieldTypeOperations', [
    'Operations',
    'FieldType',
    'Utils'
],

    /**
     * @exports exploration/field
     * @ignoer
     */

        function (Operations, FieldType, Utils) {

        /**
         * @class
         * @classdesc available comparison operations for field in Filter - depends on field datatype
         * @see FieldType, @see Condition
         *
         * @constructor
         */
        function FieldTypeOperations() {

            //ids
            var fieldTranslatePrefix = "oep.exploration.conditions.operations.";


            var uiFieldTypes = FieldType.UI_FIELD_TYPES;
            var op = Operations.Operations;


            /**
             *
             * @type {{id:String, text:String}[]}
             */
            var translatedOperationsForFieldType = {};

            init();

            function init() {
                translatedOperationsForFieldType.DEFAULT = Utils.translateArray(fieldTranslatePrefix, [
                    op.EQ ,
                    op.NE,
                    op.LT,
                    op.LTE,
                    op.GT,
                    op.GTE
                ]
                );

                translatedOperationsForFieldType[uiFieldTypes.STRING] = Utils.translateArray(fieldTranslatePrefix, [
                    op.EQ ,
                    op.NE,
                    op.LT,
                    op.LTE,
                    op.GT,
                    op.GTE,
                    op.CONTAINS
                ]
                );

                translatedOperationsForFieldType[uiFieldTypes.BOOLEAN] = Utils.translateArray(fieldTranslatePrefix, [
                    op.EQ
                ]
                );
            }

            /**
             *
             * @param {FieldType} fieldType
             * returns {Array.<{id:key, text:translatedKey}>}
             */
            this.getOperations = function (fieldType) {

                return this.getOperationsByUiFieldType(fieldType.uiFieldType);

            };

            this.getOperationsByUiFieldType = function (uiFieldType) {

                var operations;

                switch (uiFieldType) {
                    case uiFieldTypes.STRING:
                        operations = translatedOperationsForFieldType[uiFieldTypes.STRING];
                        break;

                    case uiFieldTypes.BOOLEAN:
                        operations = translatedOperationsForFieldType[uiFieldTypes.BOOLEAN];
                        break;

                    default:
                        operations = translatedOperationsForFieldType.DEFAULT;

                }
                return operations;

            };


            this.translateOperation = function (key) {

                var operationsArray = translatedOperationsForFieldType[uiFieldTypes.STRING];
                for (var i = 0; i < operationsArray.length; i++) {
                    var o = operationsArray[i];
                    if (o.id == key) {
                        return  o.text;
                    }
                }

                return "Error";
            };


            /**
             *
             * @returns {Operations.Operations}
             */
            this.getDefaultOperation = function () {
                return op.EQ;
            };

            /**
             *
             * @param {FieldType} fieldType
             */
            this.getDefaultOperationValue = function (fieldType) {

                var operationValue = null;

                switch (fieldType.uiFieldType) {

                    case uiFieldTypes.INTEGER:
                        operationValue = 0;
                        break;

                    case uiFieldTypes.DOUBLE:
                        operationValue = 0;
                        break;

                    case uiFieldTypes.DATE:
                        operationValue = new Date();
                        break;

                    case uiFieldTypes.TIME:
                        operationValue = new Date();
                        break;

                    case uiFieldTypes.BOOLEAN:
                        operationValue = true;
                        break;

                    default:
                        operationValue = "";
                }

                return operationValue;
            };

        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {FieldTypeOperations}
         */
        FieldTypeOperations.getInstance = function () {
            if (!this.instance) {
                this.instance = new FieldTypeOperations();
            }
            return this.instance;
        };


        return FieldTypeOperations;

    });
