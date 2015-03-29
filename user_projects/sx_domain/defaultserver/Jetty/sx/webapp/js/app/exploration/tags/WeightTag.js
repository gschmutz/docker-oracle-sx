/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('WeightTag', [
    ],

    /**
     * WeightTag
     * @exports exploration/tags
     * @version 1.0
     */

        function () {

        /**
         * @class
         * @classdesc -Weight Tag , used to tag Explorations and sources
         *
         * @constructor
         */
        function WeightTag(data) {

            this.name = data.name;
            this.text = data.name;  //property for select2 plugin
            this.id = data.name;  //property for select2 plugin
            this.count = data.count;
        }

        /**
         *
         * @param {string} tag
         * @returns {WeightTag}
         */
        WeightTag.createTag = function (tag) {
            return new WeightTag(
                {
                    name: tag,
                    count: 1
                }
            );
        };


        return WeightTag;
    }
)
;