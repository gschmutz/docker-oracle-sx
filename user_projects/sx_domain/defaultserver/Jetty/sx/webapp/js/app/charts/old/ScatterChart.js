/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ScatterChart', ['jquery', 'Utils', 'Chart', 'ChartUtils', 'Translate', 'jqplot'],
        /**
         * @exports scatter chart
         * @ignore
         */
            function($, Utils, Chart, ChartUtils, Translate) {

            function ScatterChart(chartContainerId, chartModel, configPanel) {
                ScatterChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
                var self = this;

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
                            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                            tickOptions: {
                                formatString: '%d'
                            },
                            label: null
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
                        showMarker: true,
                        showLine: false,
                        markerOptions: {size: 7, style: "x"}
                    }
                };

                self.updateConfigPanel = function () {
                    var types = self.configPanel.types();

                    if (types === null) {
                        self.configPanel.xOptions.removeAll();
                        self.configPanel.yOptions.removeAll();
                        self.configPanel.xSelectedSeries(null);
                        self.configPanel.ySelectedSeriesArray.removeAll();

                    } else {
                        self.configPanel.xOptions(self.configPanel.types().numeric);
                        self.configPanel.yOptions(self.configPanel.types().numeric);

                        if (self.configPanel.xOptions().length > 1) {
                            self.configPanel.xSelectedSeries(self.configPanel.xOptions()[0]);
                        } else {
                            self.configPanel.xSelectedSeries(null);
                        }

                        if (self.configPanel.yOptions().length > 1) {
                            self.configPanel.ySelectedSeriesArray([self.configPanel.yOptions()[1]]);
                        } else {
                            self.configPanel.ySelectedSeriesArray.removeAll();
                        }
                    }
                };

                self.configPanel.types.subscribe(function() {
                    self.updateConfigPanel();
                });

                self.updateConfigPanel();
                self.configPanel.showAllOptions();
            };

            Utils.extend(ScatterChart, Chart);
            
            
            ScatterChart.prototype.clear = function () {
                var self = this;
                if (self.chart) {
                    self.chart.destroy();
                };
                $(Utils.toJqueryId(self.chartContainerId)).empty();
            };
            
            ScatterChart.prototype.refresh = function () {
                var self = this;
                self.clear(); 

                var seriesArray = self.generateSeriesArrayForJQPlot();
                if (seriesArray === null) {
                    self.showWarningForJQPlot(Translate.getTranslated('oep.exploration.charts.SCATTER_CHART_NO_DATA'));
                    return;
                }

                self.options.axes.yaxis.label = self.getLabelName(self.getYSeries()[0]);
                self.options.axes.xaxis.label = self.getLabelName(self.getXSeries());

                self.chart = $.jqplot(self.chartContainerId, seriesArray, self.options);
            };

            return ScatterChart;
        });









