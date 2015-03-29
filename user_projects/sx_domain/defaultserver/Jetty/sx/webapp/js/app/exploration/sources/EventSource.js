/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('EventSource', [
        'jquery',
        'Field',
        'Utils',
        'Window',
        'FieldType',
        'SourceTypeStorage',
        'SourceParameter',
        'SourceType'
    ],

    /**
     * EventSource
     * @exports exploration/sources
     * @version 1.0
     */

    function ($, Field, Utils, Window, FieldType, SourceTypeStorage, SourceParameter, SourceType) {

        /**
         * @class
         * @classdesc -ui representative for source
         *
         * @constructor
         */
        function EventSource(data) {


            this.data = data;
            this.id = data.name;
            this.name = data.name;
            this.displayName = data.displayName;
            this.description = data.description;
            this.createdAt = data.createdAt;
            this.createdBy = data.createdBy;
            this.updatedAt = data.updatedAt;
            this.updatedBy = data.updatedBy;
            this.attachedTagNames = data.attachedTagNames;

            /**
             * @type {SourceType}
             */
            this.sourceType = SourceTypeStorage.getInstance().getSourceTypeById(data.typeName);

            /**
             * @type {SourceParameter}
             */
            this.parameters = (SourceType.SourceType.PATTERN_BASED_EXPLORATION_SOURCE_TYPE == this.sourceType.value)
                ? []
                : this.jsonToSourceParameter(data.parameters);

            this.producedEventType = data.producedEventType;

            /**
             * @type {Array.<Field>}
             */
            this.fields = this.jsonToFields(data.producedEventType);

            /**
             * @type {Window}
             */
            this.window = Window.getDefaultWindow();
            this.windowable = this.isStream();

            this.color = null;
            this.pubSubChannel = null;

        }

        EventSource.prototype.isStream = function () {
            return this.sourceType.value !== SourceType.SourceType.DBTable &&
                this.sourceType.value !== SourceType.SourceType.DBTableSourceType;
        };

        EventSource.prototype.isCorrupted = function () {
            return this.fields.length === 0 || this.displayName == null;
        };

        /**
         *
         * @param producedEventType
         * @returns {Field[]}
         */
        EventSource.prototype.jsonToFields = function (producedEventType) {
            var fields = [];
            var self = this;
            if (producedEventType) {
                var jsonFields = producedEventType.fields;
                for (var fieldName in  jsonFields) {
                    if (jsonFields.hasOwnProperty(fieldName)) {
                        fields.push(
                            new Field(self,
                                fieldName,
                                FieldType.getFieldTypeByName(jsonFields[fieldName]))
                        );
                    }
                }
            }

            return fields;
        };

        /**
         *   recursive function  - convert parametersInJson to sourceParameters
         *
         * @param {Object} parameters
         * @param SourceParameter[] sourceParameters
         * @param SourceTypeDescriptor sourceTypeDescriptor
         * @private
         */
        function jsonToSourceParameter_(parameters, sourceParameters, sourceTypeDescriptor) {
            if (parameters) {
                for (var parameter in  parameters) {
                    if (parameters.hasOwnProperty(parameter)) {
                        var parameterValue = parameters[parameter];
                        if (parameter != null && parameterValue != null && typeof(parameterValue) !== 'object') {
                            sourceParameters.push(
                                new SourceParameter(
                                    parameter,
                                    parameterValue,
                                    sourceTypeDescriptor.parameterDescriptors
                                )
                            );
                        } else if (parameter != null && parameterValue != null && typeof(parameterValue) == 'object') {
                            jsonToSourceParameter_(parameterValue, sourceParameters, sourceTypeDescriptor);  //recursive function
                        }

                    }
                }
            }
        }


        /**
         *
         * @param {Object} parameters
         * @returns {SourceParameter[]}
         */
        EventSource.prototype.jsonToSourceParameter = function (parameters) {
            var sourceParameters = [];
            jsonToSourceParameter_(parameters, sourceParameters, this.sourceType.sourceTypeDescriptor);

            return sourceParameters;
        };


        EventSource.prototype.resetExplorationRelatedData = function () {
            this.color = null;
            this.window.unsubscribeAllWindowProperties();
            this.window = Window.getDefaultWindow();
            this.pubSubChannel = null;

        };


        /**
         *
         * @param {EventSource } source
         */
        EventSource.prototype.equals = function (source) {

            var isEquals = this.id == source.id &&
                Utils.jsonStringifyEquals(this.attachedTagNames, source.attachedTagNames) &&
                this.createdAt == source.createdAt &&
                this.createdBy == source.createdBy &&
                this.displayName == source.displayName &&
                this.name == source.name &&
                Utils.jsonStringifyEquals(this.producedEventType, source.producedEventType) &&
                this.typeName == source.typeName;

            return isEquals;
        };


        return EventSource;
    }
)
;