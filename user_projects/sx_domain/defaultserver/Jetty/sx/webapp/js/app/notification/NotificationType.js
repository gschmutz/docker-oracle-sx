/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('NotificationType', [
    ],

    /**
     * @exports exploration/window
     * @ignore
     */
        function () {

        /**
         * @class
         * @classdesc  NotificationType
         */
        function NotificationType() {
        }


        NotificationType.TYPE = {
            info: "info",
            warning: "warning",
            error: "error",
            confirmation: "confirmation",
            success: "success",
            outgoing: "outgoing" ,
            gettingStarted: "gettingStarted"
        };


        return NotificationType;

    });


