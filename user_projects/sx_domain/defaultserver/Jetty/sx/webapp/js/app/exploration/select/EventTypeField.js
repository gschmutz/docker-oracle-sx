/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('EventTypeField', [
        'ConstantField',
        'Utils'
    ],

    /**
     * @exports exploration/select
     * @ignore
     */
        function (ConstantField) {

        /**
         * @class
         * @classdesc - info about column in CQL query Select statement( EventType column)
         *
         * @constructor
         * @param {string} alias -alias of field (select statement column)
         * @param {Field | AggregatedField | PatternField | ConstantField} field
         */
        function EventTypeField(alias, field, visible) {

            this.alias = alias;

            /**
             *
             * @type {Field | AggregatedField}
             */
            this.field = field;


            /**
             * user can include/exclude fields from EventType(select statement)
             * @type {boolean}
             */
            this.visible = visible;
        }


        /**
         *
         * @param {EventTypeField } EventTypeField
         */
        EventTypeField.prototype.equalsWithVisible = function (eventTypeField) {
            if (eventTypeField == null || !(eventTypeField instanceof EventTypeField)) {
                return false;
            }
            return  this.alias == eventTypeField.alias &&
                this.field.id == eventTypeField.field.id &&
                ((this.field instanceof ConstantField) ? //ConstantField  value can be changed in TableProperties
                    this.field.value == eventTypeField.field.value :
                    true) &&
                this.visible == eventTypeField.visible;
        };


        /**
         *
         * @param {EventTypeField } eventTypeField
         */
        EventTypeField.prototype.equalsWithoutAlias = function (eventTypeField) {
            if (eventTypeField == null || !(eventTypeField instanceof EventTypeField)) {
                return false;
            }
            return  this.field.id == eventTypeField.field.id;
        };


        /**
         *
         * @param {EventTypeField } EventTypeField
         */
        EventTypeField.prototype.equals = function (eventTypeField) {
            if (eventTypeField == null || !(eventTypeField instanceof EventTypeField)) {
                return false;
            }
            return  this.alias == eventTypeField.alias && this.field.id == eventTypeField.field.id;
        };

        EventTypeField.prototype.clone = function () {

            var field = this.field;
            if (field instanceof ConstantField) {
                field = this.field.clone();  //because Table Properties can change  ConstantField value (edit)
            }

            return new EventTypeField(
                this.alias,
                field,
                this.visible
            );
        };

        return EventTypeField;

    });
