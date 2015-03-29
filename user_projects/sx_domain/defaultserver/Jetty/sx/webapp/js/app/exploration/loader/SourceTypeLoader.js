/**
 * Product: OEP Stream Explorer
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'SourceTypeLoader', [
        'jquery',
        'knockout',
        'Translate',
        'RestAPI',
        'Utils',
        'Loader'
    ],

    /**
     * @exports exploration/loader
     * @ignore
     */
        function ($, ko, Translate, RestAPI, Utils, Loader) {

        /**
         * @class
         * @classdesc SourceTypeLoader
         *
         * @constructor
         */
        function SourceTypeLoader() {

            var self = this;


            /**
             *
             * @param params
             * @param onSuccess
             * @param onFalure
             * @returns {Array.<jsonObject>}
             */
            self.getSourceTypeDescriptors = function (params, onSuccess, onFalure) {

                var url = RestAPI.URL.sourceType;
                var callee = arguments.callee.name;

                var sourceTypeDescriptors = [];

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);
                        self.onSuccess_(callee, response, onSuccess);
                        sourceTypeDescriptors = response.data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        self.onFailure_(callee, url, jqXHR, textStatus, errorThrown, onFalure, params);
                    }
                });

                return sourceTypeDescriptors;

            };

        }

        //inheritance
        Utils.extend(SourceTypeLoader, Loader);

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourceTypeLoader}
         */
        SourceTypeLoader.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourceTypeLoader();
            }
            return this.instance;
        };

        return SourceTypeLoader;
    }
)
;