/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('AggregatedField', [
        'Field',
        'AggregateFunctions',
        'Utils'
    ],

    /**
     * @exports exploration/field
     * @ignoer
     */
        function (Field, AggregateFunctions, Utils) {

        var TRANSLATE_NAMESPACE = 'oep.exploration.summaries.';

        /**
         * @class
         * @classdesc incapsulate field and its aggregated function
         * @extends  Field
         *
         * @constructor
         * @param {Field} field
         * @param {AggregateFunctions.AggregateFunctions} aggregateFunction
         */
        function AggregatedField(field, aggregateFunction) {
            AggregatedField.superclass.constructor.call(this, field.source, field.name, field.type);
            this.id = aggregateFunction + "_of_" + field.source.name + "_" + field.name;
            this.aggregateFunction = aggregateFunction;
            this.label = aggregateFunction + " " + Utils.translateKey(TRANSLATE_NAMESPACE, "of") + " " + field.name;
            this.defaultAlias = aggregateFunction + "_of_" + field.name;

            /**
             *
             * @type {FieldType}
             */
            this.type = AggregateFunctions.getFieldTypeByArregateFunctionAndAggregatedFiedType(aggregateFunction, field.type);
        }

        //inheritance
        Utils.extend(AggregatedField, Field);


        /**
         *
         * @param {AggregatedField } field
         */
        AggregatedField.prototype.equals = function (field) {
            if (field == null || !(field instanceof AggregatedField)) {
                return false;
            }

            return this.id == field.id;

        };


        return AggregatedField;

    });
