/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define('PolarChart', [
        'jquery',
        'knockout',
        'Chart',
        'ChartUtils',
        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojchart'
    ],
    /**
     * This class is temporarily not used. Only scatter chart is generated.
     * @exports polar chart
     * @ignore
     */
    function($, ko, Chart, ChartUtils, oj) {
        
        function PolarChart(chartContainerId, chartModel, configPanel) {
            PolarChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
            var self = this;

            self.data = ko.observableArray();
            self.xLabel = ko.observable();
            self.xStart = ko.observable();
            self.xEnd = ko.observable();
            self.lineTypeValue = ko.observable();

            self.refresh = function () {
                if (self.isShown) {

                    if (!checkIfValidVisualizationDataExist()) {
                        showSeriesIndicatingComingEvents();
                        return;
                    }

                    showChosenSeries();
                }
            };

            self.clear = function() {
                if (self.isShown) {
                    self.data.removeAll();
                }
            };

            self.init = function () {
                self.configPanel.setupForLineChart();
                $(ChartUtils.toJqueryId(self.chartContainerId)).append(ChartUtils.getInstance().polarChartPattern);
                ko.applyBindings(self, document.getElementById(self.chartContainerId));
            };


            /*
             * Behaviour when no numeric fields exist
             */

            function checkIfValidVisualizationDataExist() {
                if(!self.configPanel.yOptions() || self.configPanel.yOptions().length < 1) {
                    return false;
                }

                return true;
            }

            function showSeriesIndicatingComingEvents() {
                var arrays = generateSeriesIndicatingComingEvents();

                if (arrays === null) {
                    self.clear();
                    return;
                }

                setChartData(arrays.x, arrays.y);
                setChartProperties(self.getLabelName(self.getSelectedXField()), 'none');
            }

            function generateSeriesIndicatingComingEvents() {
                if (self.model.isEmpty()) {
                    return null;
                }

                var xField = self.getSelectedXField();
                if (xField === null) {
                    return null;
                }

                var xArray = [];
                var ySeriesArray = [];
                ySeriesArray.push({name: ChartUtils.getInstance().DEFAULT_LABEL_EVENTS,
                    items: [],
                    markerShape: "circle",
                    displayInLegend: "off"});

                $.each(self.model.getData(), function(index, event) {
                    xArray.push(event[xField]);
                    ySeriesArray[0].items.push(1);
                });

                return {y: ySeriesArray, x: xArray};
            }


            /*
             * Default behaviour when there are numeric fields
             */

            function showChosenSeries() {
                var arrays = generateChosenSeries();

                if (arrays === null) {
                    self.clear();
                    return;
                }

                setChartData(arrays);
                setChartProperties(self.getLabelName(self.getSelectedXField()), 'straight');
            }

            function generateChosenSeries() {
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
                        visibility: visibility
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

            /*
             * Set charts data and properties
             */

            function setChartData(data) {
                self.xStart(getMinX(data));
                self.xEnd(getMaxX(data));
                self.data(data);

                /*
                var items = self.data()[0].items;
                if (items[0].x < self.xStart()) {
                    console.error("First item in data: " + items[0].x + " is smaller than minimum x value: " + self.xStart());
                }

                if (items[items.length - 1].x > self.xEnd()) {
                    console.error("Last item in data: " + items[items.length - 1].x + " is bigger than maximum x value: " + self.xEnd());
                }
                */
            }

            function setChartProperties(xLabel, lineType) {
                self.xLabel(xLabel);
                self.lineTypeValue(lineType);
            }

            function getMaxX(data) {
                var first = getMinX(data);

                if (self.getMaxDataSize() !== null) {
                    var series = data[0].items;
                    if (series.length < 2) {
                        return first + 1000;
                    }
                    var last = series[series.length - 1].x;
                    if (series.length < self.getMaxDataSize()) {
                        //we need to recalculate the chart window
                        //to make new events appear from the right side of the chart
                        var interval = Math.abs(last - first);
                        var window = interval*(self.getMaxDataSize() - 1)/(series.length - 1);
                        return first + window;
                    }
                    return last;
                }

                //or by time limit
                var max = first + self.getTimePeriod();
                return max;
            }

            function getMinX(data) {
                var firstSeries = data[0].items;
                var min = firstSeries[0].x;
                return min;
            }

            self.init();
        }

        ChartUtils.extend(PolarChart, Chart);
        
        return PolarChart;
    });





