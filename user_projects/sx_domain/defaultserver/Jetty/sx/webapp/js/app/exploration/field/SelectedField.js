/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SelectedField', [
        'Utils'
    ],

    /**
     * @exports exploration/select
     * @ignore
     */
        function () {

        /**
         * @class
         * @classdesc - class when ui need select/unselect field (like GroupBy)
         *
         * @constructor
         * @param {Field } - column(source field)
         * @param {boolean } - is selected
         */
        function SelectedField(field, selected) {
            /**
             *
             * @type {Field | AggregatedField}
             */
            this.field = field;


            /**
             * user can include/exclude fields from selection( for example: fields for GroupBy)
             * @type {boolean}
             */
            this.selected = selected;
        }


        /**
         *
         * @param {SelectedField } SelectedField
         */
        SelectedField.prototype.equalsWithVisible = function (selectedField) {
            if (selectedField == null || !(selectedField instanceof SelectedField)) {
                return false;
            }
            return  this.field.id == selectedField.field.id && this.selected == selectedField.selected;
        };


        /**
         *
         * @param {SelectedField } SelectedField
         */
        SelectedField.prototype.equals = function (selectedField) {
            if (selectedField == null || !(selectedField instanceof SelectedField)) {
                return false;
            }
            return  this.field.id == selectedField.field.id;
        };

        /**
         *
         * @param {SelectedField } SelectedField
         * @returns {SelectedField}
         *
         */
        SelectedField.prototype.clone = function (selectedField) {
            return  new SelectedField(this.field, this.selected);
        };


        return SelectedField;

    });
