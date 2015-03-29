/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SourceTypeStorage', [
        'jquery'
        , 'knockout'
        , 'SourceType'
        , 'SourceTypeDescriptor'
        , 'SourceTypeLoader'
        , 'Utils'
        , 'ProgressBar'
        , 'NotificationUtils'
        , 'Translate'
    ],

    /**
     * @exports exploration/loader
     * @version 1.0
     *
     */
    function ($, ko, SourceType, SourceTypeDescriptor, SourceTypeLoader, Utils, ProgressBar, NotificationUtils, Translate) {

        /**
         * @class
         * @classdesc storage for
         *
         * @see SourceTypeDescriptor
         * used in
         * @see SourceSummaryController
         *
         * @constructor
         */
        function SourceTypeStorage() {

            /**
             *
             * @type {SourceType[]}
             */
            var sourceTypes = null;

            /**
             *
             * @type {SourceTypeDescriptor[]}
             */
            var sourceTypeDescriptors = null;

            var patternTypeSourceDescriptor = null;


            var sourceTypeLoader = SourceTypeLoader.getInstance();


            /**
             *
             * @param {SourceType.SourceType} sourceType
             * @returns {SourceType}
             */
            this.getSourceTypeById = function (sourceType) {

                sourceType = sourceType || SourceType.SourceType.EXPLORATION_SOURCE_TYPE;

                var sourceTypes = this.getSourceTypes();
                if (sourceTypes) {
                    for (var i = 0; i < sourceTypes.length; i++) {
                        if (sourceTypes[i].value == sourceType) {
                            return sourceTypes[i];
                        }
                    }

                }

                if (patternTypeSourceDescriptor) {
                    return patternTypeSourceDescriptor;
                }

                NotificationUtils.failedToGetSourceTypeDescriptor(sourceType);
                return null;
            };

            /**
             *
             * @returns {SourceType[]}
             */
            this.getSourceTypes = function () {

                if (!sourceTypes) {
                    sourceTypes = [];
                    var sourceTypeDescriptors = this.getSourceTypeDescriptors();
                    if (sourceTypeDescriptors) {
                        for (var i = 0; i < sourceTypeDescriptors.length; i++) {
                            sourceTypes.push(
                                new SourceType(sourceTypeDescriptors[i])
                            );
                        }

                        sourceTypes.push(
                            new SourceType(this.createExplorationSourceTypeDescriptor())
                        );

                        patternTypeSourceDescriptor = new SourceType(this.createPatternBasedExplorationSourceTypeDescriptor());
                        sourceTypes.push(patternTypeSourceDescriptor);
                    }

                }
                return sourceTypes;

            };


            /**
             *  SourceTypeDescriptor for Explotation
             * @returns {SourceTypeDescriptor}
             */
            this.createExplorationSourceTypeDescriptor = function () {

                var TRANSLATE_NAMESPACE = 'oep.exploration.sources.sourceType.';

                return new SourceTypeDescriptor(
                    {
                        name: SourceType.SourceType.EXPLORATION_SOURCE_TYPE,//required
                        displayName: Translate.getTranslated(TRANSLATE_NAMESPACE + SourceType.SourceType.EXPLORATION_SOURCE_TYPE),//required
                        description: "",
                        windowable: true,
                        parameters: []
                    }
                );

            };

            /**
             *  SourceTypeDescriptor for Pattern based Explotation
             * @returns {SourceTypeDescriptor}
             */
            this.createPatternBasedExplorationSourceTypeDescriptor = function () {

                var TRANSLATE_NAMESPACE = 'oep.exploration.sources.sourceType.';

                return new SourceTypeDescriptor(
                    {
                        name: SourceType.SourceType.PATTERN_BASED_EXPLORATION_SOURCE_TYPE,//required
                        displayName: Translate.getTranslated(TRANSLATE_NAMESPACE + SourceType.SourceType.PATTERN_BASED_EXPLORATION_SOURCE_TYPE),//required
                        description: "",
                        windowable: false,
                        parameters: []
                    }
                );

            };


            /**
             *
             * @returns {SourceTypeDescriptor[]}
             */
            this.getSourceTypeDescriptors = function () {

                if (!sourceTypeDescriptors) {
                    loadSourceTypeDescriptors();
                }
                return sourceTypeDescriptors;

            };

            function loadSourceTypeDescriptors() {
                sourceTypeLoader.getSourceTypeDescriptors(
                    null,
                    onLoadSourceTypeDescriptorsSuccess,
                    onFailed
                );

            }

            /**
             *
             * @param {Response} response
             */
            function onLoadSourceTypeDescriptorsSuccess(response) {
                if (response.success) {
                    sourceTypeDescriptors = [];
                    $.each(response.data, function (index, value) {
                        sourceTypeDescriptors.push(
                            new SourceTypeDescriptor(value)
                        );
                    });
                } else {
                    NotificationUtils.onResponseReturnsSuccessFalse(response);
                }
                ProgressBar.getInstance().connectedState();

            }

            /**
             *
             * @param {FailureResponse} failureResponse
             */
            function onFailed(failureResponse) {
                NotificationUtils.onFailureResponse(failureResponse);
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourceTypeStorage}
         */
        SourceTypeStorage.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourceTypeStorage();
            }
            return this.instance;
        };

        return SourceTypeStorage;
    }
)
;