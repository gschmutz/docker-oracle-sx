/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('HomeController', [
        'jquery',
        'RestAPI',
        'HelpController'
    ],

    /**
     * @exports home
     */
        function ($, RestAPI, HelpController) {


        /**
         * @class
         * @classdesc  HomeController
         *
         * @constructor
         */
        function HomeController() {

            var self = this;
            var visualizerUrl = getVisualizerUrl(null, null);

            this.bind = function () {
                $('#visualizerUrl').attr("href", visualizerUrl);
                HelpController.getInstance().setPageTopicId(HelpController.HOME);
            };


            function getVisualizerUrl(onSuccess, onFailure) {

                var visualizerUrl = "";

                $.ajax({
                    type: 'GET',
                    url: RestAPI.URL.visualizerUrl,
                    async: false,
                    cache: false,
                    contentType: 'text/plain',
                    dataType: 'json',
                    success: function (response, textStatus, jqXHR) {

//                        console.log(': visualizerUrl: ', response.data);
                        visualizerUrl = response.data;
                        if (onSuccess) {
                            onSuccess.call(self, response.data);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(': ERROR: ', textStatus, errorThrown, jqXHR);
                        if (onFailure) {
                            onFailure.call(self, jqXHR);
                        }
                    }
                });
                return visualizerUrl;

            }


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {HomeController}
         */
        HomeController.getInstance = function () {
            if (!this.instance) {
                this.instance = new HomeController();
            }
            return this.instance;
        };


        return HomeController;
    });