/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 12/3/13
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('AggregateFunctions', [
        'FieldType',
        'Utils'
    ],

    /**
     * @exports exploration/summaries
     * @ignore
     */

        function (FieldType, Utils) {

        /**
         * @class
         * @classdesc enum
         *
         * @constructor
         */
        function AggregateFunctions() {

            var translatePrefix = "oep.exploration.summaries.aggregateFunctions.";
            var uiFieldTypes = FieldType.UI_FIELD_TYPES;

            /**
             *  each field Type has its own eligible list of Aggregated functions
             *
             * @type {{fieldType: AggregateFunctions[]}
             */
            var translatedAggregateFunctionsForFieldType = {};

            init();

            function init() {

                /**
                 * @type {{id:String, text:String}[]}
                 */
                translatedAggregateFunctionsForFieldType.DEFAULT = Utils.translateArray(translatePrefix, [  //INTEGER//  DOUBLE
                        AggregateFunctions.AggregateFunctions.AVG ,
                        AggregateFunctions.AggregateFunctions.COUNT,
                        AggregateFunctions.AggregateFunctions.MAX,
                        AggregateFunctions.AggregateFunctions.MIN,
                        AggregateFunctions.AggregateFunctions.SUM
                    ]
                );

                /**
                 * @type {{id:String, text:String}[]}
                 */
                translatedAggregateFunctionsForFieldType[uiFieldTypes.DATE] = Utils.translateArray(translatePrefix, [
                        AggregateFunctions.AggregateFunctions.COUNT,
                        AggregateFunctions.AggregateFunctions.MAX,
                        AggregateFunctions.AggregateFunctions.MIN
                    ]
                );


                /**
                 * @type {{id:String, text:String}[]}
                 */
                translatedAggregateFunctionsForFieldType[uiFieldTypes.TIME] = Utils.translateArray(translatePrefix, [
                        AggregateFunctions.AggregateFunctions.COUNT,
                        AggregateFunctions.AggregateFunctions.MAX,
                        AggregateFunctions.AggregateFunctions.MIN
                    ]
                );


                /**
                 * @type {{id:String, text:String}[]}
                 */
                translatedAggregateFunctionsForFieldType[uiFieldTypes.BOOLEAN] = Utils.translateArray(translatePrefix, [
                        AggregateFunctions.AggregateFunctions.COUNT
                    ]
                );


                /**
                 * @type {{id:String, text:String}[]}
                 */
                translatedAggregateFunctionsForFieldType[uiFieldTypes.STRING] = Utils.translateArray(translatePrefix, [
                        AggregateFunctions.AggregateFunctions.COUNT,
                        AggregateFunctions.AggregateFunctions.MAX,
                        AggregateFunctions.AggregateFunctions.MIN
                    ]
                );
            }


            /**
             *
             * @returns {string}
             */
            this.getDefaultAggregateFunction = function () {
                return AggregateFunctions.AggregateFunctions.COUNT;
            };

            /**
             *
             * @param {FieldType} fieldType
             * returns {Array.<{id:key, text:translatedKey}>}
             */
            this.getAggregateFunctionsByFieldType = function (fieldType) {
                return this.getAggregateFunctionsByUiFieldType(fieldType.uiFieldType);

            };

            /**
             *
             * @param {FieldType.UI_FIELD_TYPES}  uiFieldType
             * @returns {*}
             */
            this.getAggregateFunctionsByUiFieldType = function (uiFieldType) {
                var translatedAggregateFunctions;

                switch (uiFieldType) {
                    case uiFieldTypes.STRING:
                        translatedAggregateFunctions = translatedAggregateFunctionsForFieldType[uiFieldTypes.STRING];
                        break;

                    case uiFieldTypes.BOOLEAN:
                        translatedAggregateFunctions = translatedAggregateFunctionsForFieldType[uiFieldTypes.BOOLEAN];
                        break;

                    case uiFieldTypes.DATE:
                        translatedAggregateFunctions = translatedAggregateFunctionsForFieldType[uiFieldTypes.DATE];
                        break;

                    case uiFieldTypes.TIME:
                        translatedAggregateFunctions = translatedAggregateFunctionsForFieldType[uiFieldTypes.TIME];
                        break;

                    default:
                        translatedAggregateFunctions = translatedAggregateFunctionsForFieldType.DEFAULT;

                }
                return translatedAggregateFunctions;

            };

            /**
             *  return only agregate functions that eligible for current exploration fields
             *  , if we doesnt have eligible fields for agregate function - exclude agregate function from list
             * @param  {Field[]}  explorationFields - all source fields in exploration
             * @returns {*}
             */
            this.getAggregateFunctions = function (explorationFields) {
                var translatedAggregateFunctions = translatedAggregateFunctionsForFieldType.DEFAULT;

                var eligibleAggeregateFunctions = [];

                for (var i = 0; i < translatedAggregateFunctions.length; i++) {
//                    translatedAggregateFunctions[i].disabled = true;

                    for (var j = 0; j < explorationFields.length; j++) {
                        if (this.isAggregateFunctionCompatibleWithField(translatedAggregateFunctions[i].id, explorationFields[j])) {
//                            translatedAggregateFunctions[i].disabled = false;
                            eligibleAggeregateFunctions.push(translatedAggregateFunctions[i]);
                            break;
                        }

                    }

                }


                return eligibleAggeregateFunctions;

            };


            /**
             *
             * @param {AggregateFunctions.AggregateFunctions} aggregateFunction
             * @param {Field[]} fields
             * returns {Field}
             */
            this.getFirstFieldThatCompatibleWithAggregateFunction = function (aggregateFunction, fields) {
                for (var i = 0; i < fields.length; i++) {
                    var field = fields[i];
                    if (this.isAggregateFunctionCompatibleWithField(aggregateFunction, field)) {
                        return  field;
                    }
                }

                return null;
            };


            /**
             *
             * @param {AggregateFunctions.AggregateFunctions} aggregateFunction
             * @param {Field} field
             * returns {boolean}
             */
            this.isAggregateFunctionCompatibleWithField = function (aggregateFunction, field) {
                var eligibleAggregageFunctionsForField = this.getAggregateFunctionsByUiFieldType(field.type.uiFieldType);
                return   Utils.findById(aggregateFunction, eligibleAggregageFunctionsForField) != null;

            };


        }

        /**
         * enum
         */
        AggregateFunctions.AggregateFunctions = {
            AVG: "AVG",
            COUNT: "COUNT",
            MAX: "MAX",
            MIN: "MIN",
            SUM: "SUM"
        };


        /**
         *
         * @param {AggregateFunctions.AggregateFunctions} aggregateFunction
         * @param {FieldType} sourceFieldType
         * @returns {FieldType}
         */
        AggregateFunctions.getFieldTypeByArregateFunctionAndAggregatedFiedType = function (aggregateFunction, sourceFieldType) {

            var fieldType;

            switch (aggregateFunction) {
                case AggregateFunctions.AggregateFunctions.AVG:
                    fieldType = FieldType.getFieldTypeByName(FieldType.TYPES.double);
                    break;

                case AggregateFunctions.AggregateFunctions.COUNT:
                    fieldType = FieldType.getFieldTypeByName(FieldType.TYPES.bigint);
                    break;

                case AggregateFunctions.AggregateFunctions.MAX:
                    fieldType = sourceFieldType;
                    break;

                case AggregateFunctions.AggregateFunctions.MIN:
                    fieldType = sourceFieldType;
                    break;

                case AggregateFunctions.AggregateFunctions.SUM:
                    fieldType = FieldType.getFieldTypeByName(FieldType.TYPES.double);
                    break;

            }
            return fieldType;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {AggregateFunctions}
         */
        AggregateFunctions.getInstance = function () {
            if (!this.instance) {
                this.instance = new AggregateFunctions();
            }
            return this.instance;
        };


        return AggregateFunctions;
    });