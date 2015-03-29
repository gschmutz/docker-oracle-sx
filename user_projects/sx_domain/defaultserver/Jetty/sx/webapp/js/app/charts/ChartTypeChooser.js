/**
 * Product: OEP Stream Explorer.
 *
 * @author Anna Yarmolenko
 * @author Julia Shmeleva
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ChartTypeChooser', [
    'jquery',
    'knockout',
    'ChartUtils',
    'LineChart',
    'ScatterChart',
    'PolarChart'
],
    /**
     * @exports exploration/results
     * @ignore
     */
        function ($, ko, ChartUtils, LineChart, ScatterChart, PolarChart) {

        /**
         * @class
         * @classdesc - switches between Charts View Modes
         **/
        function ChartTypeChooser(viewModeControllerId) {
            var self = this;

            self.type = ko.observable();
            self.lineChart = LineChart;
            self.scatterChart = ScatterChart;
            self.polarChart = PolarChart;

            self.init = function() {
                $(ChartUtils.toJqueryId(viewModeControllerId)).append(ChartUtils.getInstance().chartTypeChooserPattern);
                $("#" + viewModeControllerId + " .chartsMenu").ojMenu();
                $("#" + viewModeControllerId + " .chartsButton").ojButton(
                  { "display": "icons",
                    "label": "Charts",
                    "icons": { end: 'oj-icon app-oj-charts-icon' },
                    "menu": "#" + viewModeControllerId + " .chartsMenu"
                });
                ko.applyBindings(self, document.getElementById(viewModeControllerId));
            };

            self.setType = function (type) {
                self.type(type);
            };

            self.close = function() {
                var node = $(ChartUtils.toJqueryId(viewModeControllerId)).empty()[0];
                ko.cleanNode(node);
            };

            self.init();
        }

        return ChartTypeChooser;

    }
);




