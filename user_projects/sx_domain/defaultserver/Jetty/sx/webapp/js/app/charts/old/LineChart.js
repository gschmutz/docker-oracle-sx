/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('LineChart', ['jquery', 'Utils', 'Chart', 'ChartUtils', 'Translate', 'jqplot'],
    /**
     * This class is temporarily not used. Only scatter chart is generated.
     * @exports line chart
     * @ignore
     */
    function($, Utils, Chart, ChartUtils, Translate) {

        
        function LineChart(chartContainerId, chartModel, configPanel) {
            LineChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
            var self = this;
            var chartUtils = ChartUtils.getInstance();

            self.options = {
                axesDefaults: {
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                    labelOptions: {
                        fontFamily: 'Tahoma',
                        fontSize: '13pt'
                    }
                },
                axes: {
                    xaxis: {
                        label: null,
                        renderer: $.jqplot.DateAxisRenderer,
                        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                        numberTicks: 10,
                        tickOptions: {
                            formatString:'%X',
                            angle: -30,
                            fontSize: '10pt'
                        }
                    },
                    yaxis: {
                        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                        tickOptions: {
                            formatString: '%d'
                        },
                        label: null
                    }
                },
                seriesDefaults: {
                    showMarker: false
                }
            };

            self.updateConfigPanelWithTypes = function () {
                var types = self.configPanel.types();

                if (types === null) {
                    self.configPanel.xOptions.removeAll();
                    self.configPanel.yOptions.removeAll();
                    self.configPanel.xSelectedSeries(null);
                    self.configPanel.ySelectedSeriesArray.removeAll();

                } else {
                    self.configPanel.xOptions(types.date);
                    self.configPanel.yOptions(types.numeric);

                    if (self.configPanel.xOptions().length > 0) {
                        self.configPanel.xSelectedSeries(self.configPanel.xOptions()[0]);
                    } else {
                        self.configPanel.xSelectedSeries(null);
                    }

                    if (self.configPanel.yOptions().length > 0) {
                        self.configPanel.ySelectedSeriesArray([self.configPanel.yOptions()[0]]);
                    } else {
                        self.configPanel.ySelectedSeriesArray.removeAll();
                    }
                }
            };

            self.updateConfigPanelUI = function () {
                self.configPanel.showAllOptions();
                self.configPanel.hideXOptions();
                self.configPanel.hideEventsLimit();
            };

            self.updateConfigPanelWithLimits = function () {
                if (self.configPanel.limitUnit() === chartUtils.EVENTS_ID) {
                    self.configPanel.limitValue(chartUtils.DEFAULT_TIME_LIMIT_VALUE);
                    self.configPanel.limitUnit(chartUtils.DEFAULT_TIME_LIMIT_UNIT);
                }
            };

            self.configPanel.types.subscribe(function() {
                self.updateConfigPanelWithTypes();
            });

            self.updateConfigPanelWithTypes();
            self.updateConfigPanelWithLimits();
            self.updateConfigPanelUI();
        }
        Utils.extend(LineChart, Chart);
        
        LineChart.prototype.getMinX = function (data) {
            var self = this;
            var last = self.getMaxX(data);
                      
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
            
            //or by time limit
            return last - self.getTimePeriod();
        };
        
        LineChart.prototype.getMaxX = function (data) {
            var series = data[0];
            return series[series.length - 1][0];
        };
 
        LineChart.prototype.refresh = function () {
            var self = this;
            self.clear();

            var seriesArray = self.generateSeriesArrayForJQPlot();
            if (seriesArray === null) {
                self.showWarningForJQPlot(Translate.getTranslated('oep.exploration.charts.CHART_NO_DATA'));
                return;
            }

            self.options.axes.yaxis.label = self.getLabelName(self.getYSeries()[0]);
            self.options.axes.xaxis.label = self.getLabelName(self.getXSeries());

            self.options.axes.xaxis.min = self.getMinX(seriesArray);
            self.options.axes.xaxis.max = self.getMaxX(seriesArray);


            self.chart = $.jqplot(self.chartContainerId, seriesArray, self.options);
        };       
        
        LineChart.prototype.clear = function() {
            var self = this;
            if (self.chart) {
                self.chart.destroy();
            }
            $(Utils.toJqueryId(self.chartContainerId)).empty();
        };

        return LineChart;
    });

