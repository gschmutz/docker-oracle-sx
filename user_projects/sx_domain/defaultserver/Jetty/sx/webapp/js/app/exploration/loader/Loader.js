/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Loader', [
        'jquery',
        'Response',
        'FailureResponse',
        'NotificationUtils'
    ],

    /**
     * @exports exploration/loader
     * @ignore
     */
        function ($, Response, FailureResponse, NotificationUtils) {

        /**
         * @class
         * @classdesc template(pattern) methods for loaders
         *
         * base class for
         * @see ExplorationsLoader
         * @see SourceLoader
         *
         * @constructor
         */
        function Loader() {

        }

        /**
         *
         * @param {String} calleeName  - function name that calls this method
         * @param {Object} response
         * @param {Function} onSuccess
         * @private
         */
        Loader.prototype.onSuccess_ = function (calleeName, response, onSuccess) {
            console.log(calleeName, response);
            if (onSuccess) {
                onSuccess.call(this, new Response(response));
            } else if (!response.success) {
                var errorMessage = [calleeName, response.errorCode, response.message].join('\n');
                NotificationUtils.showErrorMessage(errorMessage);
            }
        };

        /**
         *
         * @param {String} calleeName  - function name that calls this method
         * @param {String} url
         * @param {Object} jqXHR
         * @param {Object} textStatus
         * @param {Object} errorThrown
         * @param {Function} onFalure
         * @param {Object} dataPassedToServer
         * @private
         */
        Loader.prototype.onFailure_ = function (callee, url, jqXHR, textStatus, errorThrown, onFalure, dataPassedToServer) {
            console.log('Error: ', callee, url, jqXHR, textStatus, errorThrown);
            if (onFalure) {
                onFalure.call(this, new FailureResponse(url, jqXHR, textStatus, errorThrown, dataPassedToServer));
            }
        };


        return Loader;
    }
)
;
