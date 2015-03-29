/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Summary', [
    'Utils',
    'Operand',
    'AggregatedField'],

    /**
     * @exports exploration/summaries
     * @version 1.0
     */
        function (Utils, Operand, AggregatedField) {

        /**
         * @class
         * @classdesc Summary
         *
         * @constructor
         * @param {Operand} operand
         * @param {AggregatedField} aggregatedField
         *
         */
        function Summary(operand, aggregatedField) {

            this.id = 'summary_' + Utils.getUniqueId();

            /**
             *
             * @type {Operand}
             */
            this.operand = operand;

            /**
             *
             * @type {AggregatedField}
             */
            this.aggregatedField = aggregatedField;
        }


        Summary.prototype.clone = function () {
            return new Summary(
                new Operand(this.operand.type, this.operand.value, this.operand.field),
                new AggregatedField(this.field, this.aggregateFunction)
            );
        };

        /**
         *
         * @param {Summary } summary
         */
        Summary.prototype.equals = function (summary) {
            if (summary == null || !(summary instanceof Summary)) {
                return false;
            }

            return this.aggregatedField.equals(summary.aggregatedField);
        };

        return Summary;

    });
