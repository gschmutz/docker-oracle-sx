/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('TagsStorage', [
        'jquery'
        , 'knockout'
        , 'ExplorationsLoader'
        , 'Utils'
        , 'ProgressBar'
        , 'NotificationUtils'
        , 'WeightTag'
    ],

    /**
     * @exports exploration/tags
     * @version 1.0
     *
     */
        function ($, ko, ExplorationsLoader, Utils, ProgressBar, NotificationUtils, WeightTag) {

        /**
         * @class
         * @classdesc storage for
         * @see WeightTag
         *
         * @constructor
         */
        function TagsStorage() {

            /**
             *
             * @type {WeightTag[]}
             */
            var tags = null;

            var explorationsLoader = ExplorationsLoader.getInstance();

            /**
             *
             * @returns {WeightTag[]}
             */
            this.refreshTags = function () {
                tags = null;
                return this.getTags();
            };

            /**
             *
             * @returns {WeightTag[]}
             */
            this.getTags = function () {

                if (!tags) {
                    var tags_ = explorationsLoader.getTags(
                        null,
                        onTagsSuccess,
                        onFailed
                    );

                    tags = [];
                    for (var i = 0; i < tags_.length; i++) {
                        tags.push(new WeightTag(tags_[i]));
                    }

                }
                return tags;

            };


            /**
             *
             * @param {Response} response
             */
            function onTagsSuccess(response) {
                if (response.success) {

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
         * @return {TagsStorage}
         */
        TagsStorage.getInstance = function () {
            if (!this.instance) {
                this.instance = new TagsStorage();
            }
            return this.instance;
        };

        return TagsStorage;
    }
)
;