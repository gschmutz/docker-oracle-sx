
/**
 * Product: OEP Stream Explorer
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'ChartsColorsAndGradients', [
        'jquery',
        'ChartUtils'
    ],
    /**
     * @exports chart configuration panel
     * @ignore
     */
        function ($, ChartUtils) {

        /**
         * @class
         * @classdesc - chart configuration panel
         **/
        function ChartsColorsAndGradients() {
            var self = this;

            var containerId = 'sx-charts-colors';

            //TODO optimize this code.
            //Now line colors are set here in the code
            // and gradients are set in chartsColorsAndGradients.html
            var defaultColors = [
                '#fad55c',
                '#f09543',
                '#e85d88'
            ];

            self.init = function() {
                $('body').append(ChartUtils.getInstance().colorsPattern);

                /*
                var $svg = $("</svg>").attr("id", containerId);
                var $defs = $("</defs>");
                $('body').append($svg);
                $svg.append($defs);

                $.each(defaultColors, function(index, value) {

                });
                */
            };

            self.getAreaColor = function(index) {
                if (index >= defaultColors.length) {
                    index = index % defaultColors.length;
                }
                return "url(#grad" + index + ")";
            };

            self.getLineColor = function(index) {
                if (index < defaultColors.length) {
                    return defaultColors[index];
                }

                return defaultColors[index % defaultColors.length];
            };

            self.init();
        }

        ChartsColorsAndGradients.getInstance = function () {
            if (!this.instance) {
                this.instance = new ChartsColorsAndGradients();
            }
            return this.instance;
        };

        return ChartsColorsAndGradients;

    }
);



