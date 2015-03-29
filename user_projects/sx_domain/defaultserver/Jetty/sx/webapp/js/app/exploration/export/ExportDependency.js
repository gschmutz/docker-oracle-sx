/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ExportDependency', [
    ],

    /**
     * @exports exploration/export
     * @ignore
     */
        function () {

        /**
         *
         * @class
         * @classdesc  ExportDependency : can be exploration, target, source
         *
         * @param id
         * @param label
         * @param description
         * @param type
         * @constructor
         */
        function ExportDependency(id, label, description, type, typeLabel) {
            this.id = id;
            this.label = label;
            this.description = description;
            this.type = type;
            this.typeLabel = typeLabel;
        }


        return ExportDependency;

    });


