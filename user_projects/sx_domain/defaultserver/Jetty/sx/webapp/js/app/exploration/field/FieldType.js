/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('FieldType', [
        'Utils'
    ],

    /**
     * @exports exploration/field
     * @ignoer
     */

        function (Utils) {

        /**
         * @class
         * @classdesc  field datatypes class
         *
         * @constructor
         * @param {string}  name
         * @param {FieldType.UI_FIELD_TYPES} uiFieldType
         */
        function FieldType(name, uiFieldType) {
            this.name = name;
            this.displayName = Utils.translateKey(FieldType.translatePrefix, name);
            this.uiFieldType = uiFieldType;       //each field type has its own ui controller

        }

        FieldType.translatePrefix = "oep.field.type.";


        FieldType.TYPES = {
            string: 'string',
            byte: 'byte',
            int: 'int',
            bigint: 'bigint',
            bigdecimal: 'bigdecimal',
            float: 'float',
            double: 'double',
            number: 'number',
            boolean: 'boolean',
            object: 'object',
            timestamp: 'timestamp',
            interval: 'interval',
            intervalym: 'intervalym',
            xmltype: 'xmltype'
        };

        FieldType.MAPPING = {
            string: [FieldType.TYPES.string],
            byte: [FieldType.TYPES.byte],
            int: [FieldType.TYPES.int],
            bigint: [FieldType.TYPES.bigint],
            bigdecimal: [FieldType.TYPES.bigdecimal],
            float: [FieldType.TYPES.float],
            double: [FieldType.TYPES.double],
            number: [FieldType.TYPES.number],
            boolean: [FieldType.TYPES.boolean],
            object: [FieldType.TYPES.object],
            timestamp: [FieldType.TYPES.timestamp],
            interval: [FieldType.TYPES.interval],
            intervalym: [FieldType.TYPES.intervalym],
            xmltype: [FieldType.TYPES.xmltype]
        };


        FieldType.CLAUSE_TYPE = {
            SOURCE: 'SOURCE',
            GROUP_BY: 'GROUP_BY',
            SUMMARY: 'SUMMARY',
            CONSTANT: 'CONSTANT'
        };

        /**
         * each field type has its own ui controller in Filters
         */
        FieldType.UI_FIELD_TYPES = {
            INTEGER: "INTEGER",
            DOUBLE: "DOUBLE",
            STRING: "STRING",
            DATE: "DATE",
            TIME: "TIME",
            BOOLEAN: "BOOLEAN"
        };


        FieldType.FieldTypes = [
            new FieldType(FieldType.TYPES.string, FieldType.UI_FIELD_TYPES.STRING),
            new FieldType(FieldType.TYPES.byte, FieldType.UI_FIELD_TYPES.STRING), //?
            new FieldType(FieldType.TYPES.int, FieldType.UI_FIELD_TYPES.INTEGER),
            new FieldType(FieldType.TYPES.bigint, FieldType.UI_FIELD_TYPES.INTEGER),
            new FieldType(FieldType.TYPES.float, FieldType.UI_FIELD_TYPES.DOUBLE),
            new FieldType(FieldType.TYPES.double, FieldType.UI_FIELD_TYPES.DOUBLE),
            new FieldType(FieldType.TYPES.bigdecimal, FieldType.UI_FIELD_TYPES.DOUBLE),
//            new FieldType(FieldType.TYPES.number, FieldType.UI_FIELD_TYPES.DOUBLE),
            new FieldType(FieldType.TYPES.boolean, FieldType.UI_FIELD_TYPES.BOOLEAN),
//            new FieldType(FieldType.TYPES.object, FieldType.UI_FIELD_TYPES.STRING),
            new FieldType(FieldType.TYPES.timestamp, FieldType.UI_FIELD_TYPES.TIME),
//            new FieldType(FieldType.TYPES.interval, FieldType.UI_FIELD_TYPES.STRING),
//            new FieldType(FieldType.TYPES.intervalym, FieldType.UI_FIELD_TYPES.STRING),
//            new FieldType(FieldType.TYPES.xmltype, FieldType.UI_FIELD_TYPES.STRING)
        ];

        /**
         *
         * @param {string} name
         * @returns {FieldType}
         */
        FieldType.getFieldTypeByName = function (name) {

            for (var i = 0; i < FieldType.FieldTypes.length; i++) {
                var fieldType = FieldType.FieldTypes[i];
                if (fieldType.name == name) {
                    return fieldType;
                }
            }

            var defaultFieldType = FieldType.FieldTypes[0];
            console.warn("unknown name", name, "use  as default", defaultFieldType);
            return  defaultFieldType;
        };


        /**
         *
         * @param {FieldType} fieldType
         * @returns {boolean}
         */
        FieldType.isNumber = function (fieldType) {
            if (fieldType.name === FieldType.TYPES.int ||
                fieldType.name === FieldType.TYPES.bigint ||
                fieldType.name === FieldType.TYPES.float ||
                fieldType.name === FieldType.TYPES.double ||
                fieldType.name === FieldType.TYPES.number ||
                fieldType.name === FieldType.TYPES.bigdecimal ) {
                return  true;
            }

            return  false;
        };


        /**
         *
         * @param {FieldType} fieldType
         * @returns {boolean}
         */
        FieldType.isString = function (fieldType) {
            if (fieldType.name === FieldType.TYPES.string) {
                return  true;
            }

            return  false;
        };


        /**
         *
         * @param {FieldType} fieldType
         * @returns {boolean}
         */
        FieldType.isTimeStamp = function (fieldType) {
            if (fieldType.name === FieldType.TYPES.timestamp) {
                return  true;
            }

            return  false;
        };


        return FieldType;
    });