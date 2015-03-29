/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SourceParameter', [
        'Translate'
    ],

    /**
     * @exports exploration/window
     * @ignore
     */
        function (Translate) {

        var TRANSLATE_NAMESPACE = 'oep.exploration.sourceSummary.sourceTypeParameters.';

        /**
         *
         * @class
         * @classdesc  SourceParameter depends on
         * @see SourceType
         *
         * For example:
         * CSV_FILE parameters : eventInterval, initialDelay, sourceURL,
         * DB_TABLE parameters :  dataSourceURI, tableName
         * ...
         *
         * @param key
         * @param value
         * @param {ParameterDescriptor[]} parameterDescriptors
         * @constructor
         */
        function SourceParameter(key, value, parameterDescriptors) {
            this.key = key;
            this.value = value || "";
            this.label = "";
            this.description = "";
            this.initDescriptionAndLabel(parameterDescriptors);


        }


        SourceParameter.prototype.initDescriptionAndLabel = function (parameterDescriptors) {
            for (var i = 0; i < parameterDescriptors.length; i++) {
                if (parameterDescriptors[i].name == this.key) {
                    this.label = parameterDescriptors[i].displayName;
                    this.description = parameterDescriptors[i].description;
                    break;
                }
            }

            if (!this.label) {
                var key = TRANSLATE_NAMESPACE + this.key;
                var translatedKey = Translate.getTranslated(key);
                if (key != translatedKey) {
                    this.label = translatedKey;
                } else {                     //cant translate
                    this.label = this.key;

                }
            }
        };


        SourceParameter.prototype.equals = function (sourceParameters) {
            if (sourceParameters == null || !(sourceParameters instanceof sourceParameters)) {
                return false;
            }
            return this.key == sourceParameters.key && this.value == sourceParameters.value;
        };


        return SourceParameter;

    });


