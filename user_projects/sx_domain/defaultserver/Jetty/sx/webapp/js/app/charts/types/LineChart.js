/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('LineChart', [
        'jquery',
        'knockout',
        'Chart',
        'ChartUtils',
        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojchart'
    ],
    /**
     * @exports line chart with ojet
     * @ignore
     */
    function($, ko, Chart, ChartUtils, oj) {

        function LineChart(chartContainerId, chartModel, configPanel) {
            LineChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
            var self = this;

            self.yData = ko.observableArray();
            self.xData = ko.observableArray();
            self.xLabel = ko.observable('');
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
                    self.xData.removeAll();
                    self.yData.removeAll();
                }
            };

            self.init = function () {
                self.configPanel.setupForLineChart();
                $(ChartUtils.toJqueryId(self.chartContainerId)).append(ChartUtils.getInstance().lineChartPattern);
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

                setChartData(arrays.x, arrays.y);
                setChartProperties(self.getLabelName(self.getSelectedXField()), 'straight');
            }

            function generateChosenSeries() {
                if (self.model.isEmpty()) {
                    return null;
                }

                var ySelectedFields = self.getSelectedYFields();
                var xSelectedField = self.getSelectedXField();

                if (xSelectedField === null || ySelectedFields === null || ySelectedFields.length === 0) {
                    return null; //nothing to show
                }

                var data = self.model.getData();
                var xArray = [];
                $.each(data, function(index, event) {
                    xArray.push(event[xSelectedField]);
                });


                var ySeriesArray = [];
                var yAllFields = self.getAllYFields();
                $.each(yAllFields, function(index, yField) {
                    //init arrays for different series
                    var visibility = "hidden";
                    if (ChartUtils.inArray(yField, ySelectedFields)) {
                        visibility = "visible";
                    }

                    var y2 = 'off';
                    if (ySelectedFields.length === 2 && yField === ySelectedFields[1]) {
                        y2 = 'on';
                    }

                    ySeriesArray.push({
                        name: yField,
                        items: [],
                        visibility: visibility,
                        assignedToY2: y2,
                        markerShape: "square",
                        areaColor: self.getColorsAndGradients().getAreaColor(index),
                        color: self.getColorsAndGradients().getLineColor(index)
                    });


                    //fill in with data
                    $.each(data, function(index, event) {
                        ySeriesArray[ySeriesArray.length - 1].items.push(event[yField]);
                    });
                });

                return {y: ySeriesArray, x: xArray};
            }

            /*
             * Set charts data and properties
             */

            function setChartData(x, y) {
                self.xData(x);
                self.yData(y);
                self.xStart(getMinX(x));
                self.xEnd(getMaxX(x));
            }

            function setChartProperties(xLabel, lineType) {
                self.xLabel(xLabel);
                self.lineTypeValue(lineType);
            }

            function getMaxX(data) {
                return data[data.length - 1];
            }

            function getMinX(data) {
                var last = getMaxX(data);

                if (self.getMaxDataSize() !== null) {
                    var series = data[0];
                    if (series.length < 2) {
                        return last - 1000;
                    }
                    var first = series[0][0];
                    if (series.length < self.getMaxDataSize()) {
                        //we need to recalculate the chart window
                        //to make new events appear from the right side of the chart
                        var interval = Math.abs(last - first);
                        var window = interval*(self.getMaxDataSize() - 1)/(series.length - 1);
                        return last - window;
                    }
                    return first;
                }

                return last - self.getTimePeriod();
            }


            self.init();
        }

        ChartUtils.extend(LineChart, Chart);

        return LineChart;
    });

