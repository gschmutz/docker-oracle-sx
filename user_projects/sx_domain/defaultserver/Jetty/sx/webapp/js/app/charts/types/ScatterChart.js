/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ScatterChart', [
        'jquery',
        'knockout',
        'Chart',
        'ChartUtils',
        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojchart'
    ],
    /**
     * @exports scatter chart with ojet
     * @ignore
     */
    function($, ko, Chart, ChartUtils, oj) {

        function ScatterChart(chartContainerId, chartModel, configPanel) {
            ScatterChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
            var self = this;

            self.data = ko.observableArray();
            self.xLabel = ko.observable();

            self.refresh = function () {
                if (self.isShown) {
                    var data = generateSeries();
                    if (data === null) {
                        self.clear();
                        return;
                    }

                    self.data(data);
                    self.xLabel(self.getLabelName(self.getSelectedXField()));
                }
            };

            self.clear = function() {
                if (self.isShown) {
                    self.data.removeAll();
                }
            };

            self.init = function () {
                self.configPanel.setupForScatterChart();
                $(ChartUtils.toJqueryId(self.chartContainerId)).append(ChartUtils.getInstance().scatterChartPattern);
                ko.applyBindings(self, document.getElementById(self.chartContainerId));
            };

            function generateSeries() {
                if (self.model.isEmpty()) {
                    return null;
                }

                var ySelectedFields = self.getSelectedYFields();
                var xSelectedField = self.getSelectedXField();
                if (xSelectedField === null || ySelectedFields === null) {
                    return null;
                }


                var array = [];
                var yAllFields = self.getAllYFields();
                $.each(yAllFields, function(index, yField) {
                    //init arrays for different series
                    var visibility = "hidden";
                    if (ChartUtils.inArray(yField, ySelectedFields)) {
                        visibility = "visible";
                    }
                    array.push({
                        name: yField,
                        items: [],
                        visibility: visibility,
                        markerShape: "circle",
                        markerSize: 7
                        //color: ChartUtils.getColor(index)
                    });

                    //fill in with data
                    var data = self.model.getData();
                    $.each(data, function(index, event) {
                        array[array.length - 1].items.push({x: event[xSelectedField], y: event[yField]});
                    });
                });

                return array;
            }

            self.init();
        }

        ChartUtils.extend(ScatterChart, Chart);

        return ScatterChart;
    });

