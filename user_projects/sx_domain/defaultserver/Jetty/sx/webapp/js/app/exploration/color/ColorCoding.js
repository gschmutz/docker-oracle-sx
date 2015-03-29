/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 1/16/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ColorCoding', [],

    /**
     * @exports exploration/color
     * @version 1.0
     */

        function () {

        /**
         * @class
         * @classdesc colors for sources @see EventSource.color
         * @constructor
         *
         */
        function ColorCoding() {

            /**
             * css classes names, to mark exploration sources by color
             * @type {Array}
             */
            this.colors = [
                "colorCoding1",
                "colorCoding2",
                "colorCoding3",
                "colorCoding4",
                "colorCoding5",
                "colorCoding6"

            ];

            this.returnFirstFreeColor = function (selectedColors) {
                for (var i = 0; i < this.colors.length; i++) {
                    if (selectedColors.indexOf(this.colors[i]) == -1) {
                        return this.colors[i];
                    }
                }

                return this.colors[0];
            };

        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ColorCoding}
         */
        ColorCoding.getInstance = function () {
            if (!this.instance) {
                this.instance = new ColorCoding();
            }
            return this.instance;
        };


        return ColorCoding;
    });