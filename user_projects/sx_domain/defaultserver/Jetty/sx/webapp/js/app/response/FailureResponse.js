/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('FailureResponse', [
        'Translate'
    ],

    /**
     * FailureResponse
     * @exports response
     * @version 1.0
     */

        function (Translate) {

        var TRANSLATE_NAMESPACE = 'oep.exploration.errors.';

        /**
         * @class
         * @classdesc -response object from server
         * something bad happens on backend (like Uncatched Exception, lost network connection ...)
         *
         * @constructor
         */
        function FailureResponse(url, jqXHR, textStatus, errorThrown, data) {

            /**
             * url of Rest API method
             * @type {string}
             */
            this.url = url;

            /**
             * data passed to server( like Exploration object, Source..., null if no data)
             * @type {Object}
             */
            this.data = data;

            /**
             * @type { jQuery XMLHttpRequest}
             */
            this.jqXHR = jqXHR;

            /**
             *
             * @type {string}
             */
            this.textStatus = textStatus;

            /**
             * @type {string}
             */
            this.errorThrown = errorThrown;

        }


        FailureResponse.prototype.toString = function () {
            return ['ERROR: ', this.url, this.textStatus, this.errorThrown].join('\n');
        };


        return FailureResponse;
    }
)
;