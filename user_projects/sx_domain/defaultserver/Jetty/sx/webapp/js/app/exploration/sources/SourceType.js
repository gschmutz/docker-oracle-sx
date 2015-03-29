/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SourceType', [
    ],

    /**
     * @exports exploration/window
     * @ignore
     */
        function () {


        /**
         *
         * @param {SourceTypeDescriptor} sourceTypeDescriptor
         * @constructor
         */
        function SourceType(sourceTypeDescriptor) {
            /**
             * @type{SourceTypeDescriptor}
             */
            this.sourceTypeDescriptor = sourceTypeDescriptor;

            this.value = this.sourceTypeDescriptor.name ;
            this.label = this.sourceTypeDescriptor.displayName;

        }

        /**
         * enum
         * see more : SourceType.java inheritors
         * and SourceType.NAME property
         *
         */
        SourceType.SourceType = {
            CSVSource: "CSVSource",
            DBTable: "DBTable",
            DBTableSourceType: "DBTableSourceType",
            EDN: "EDN",
            HttpSubscriber: "HttpSubscriber",
            JMSSource: "JMSSource",
            RESTSource: "RESTSource",

            EXPLORATION_SOURCE_TYPE: "Exploration",
            PATTERN_BASED_EXPLORATION_SOURCE_TYPE: "PatternBasedExploration",
            TARGET: "Target"
        };

        SourceType.prototype.equals = function (sourceType) {
            if (sourceType == null || !(sourceType instanceof SourceType)) {
                return false;
            }
            return this.value == sourceType.value;
        };


        return SourceType;

    });


