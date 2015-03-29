/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('PatternField', [
        'Utils'
    ],

    /**
     * @exports exploration/field
     * @version 1.0
     */
        function (Utils) {

        /**
         * @class
         * @classdesc pattern-based exploration field
         *
         * @constructor
         * @param {string} name
         * @param {string} sourceAlias
         * @param {FieldType} type
         *
         */
        function PatternField(name, sourceAlias, type) {
            this.id = 'patternField_' + name;
            this.name = name;
            this.sourceAlias = sourceAlias;  //ui field needed for backend (we should keep it and return it back)
            this.label = name;
            /**
             *
             * @type {FieldType}
             */
            this.type = type;

        }


        /**
         *
         * @param {PatternField } PatternField
         */
        PatternField.prototype.equals = function (PatternField) {
            if (PatternField == null || !(PatternField instanceof PatternField)) {
                return false;
            }

            return this.id == PatternField.id;
        };


        return PatternField;

    });
