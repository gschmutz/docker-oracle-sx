/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Response', [
        'Translate'
    ],

    /**
     * Response
     * @exports response
     * @version 1.0
     */

        function (Translate) {

        var TRANSLATE_NAMESPACE = 'oep.exploration.errors.';

        /**
         * @class
         * @classdesc -response object from server
         *
         * @constructor
         */
        function Response(response) {

            /**
             *
             * @type {boolean}
             */
            this.success = response.success;

            /**
             *
             * @type {ErrorCode.ErrorCode}
             */
            this.errorCode = response.errorCode;

            /**
             * @type {string}
             */
            this.errorMessage = !this.success && this.errorCode && this.errorCode.length ?
                Translate.getTranslated(TRANSLATE_NAMESPACE + this.errorCode) : null;

            /**
             *
             * @type {string} - server message
             */
            this.message = response.message;

            /**
             * usually explorationInJson, sourceInJson or null if failed
             * @type {Object}
             */
            this.data = response.data;

        }


        Response.prototype.toErrorString = function () {
            return [this.errorMessage , this.message, this.errorCode ].join('\n');
        };


        return Response;
    }
)
;