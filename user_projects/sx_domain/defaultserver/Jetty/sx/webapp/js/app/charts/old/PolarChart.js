/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 23/2/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define('PolarChart', ['jquery', 'd3', 'Chart', 'ChartUtils', 'Translate'],
    /**
     * This class is temporarily not used. Only scatter chart is generated.
     * @exports polar chart
     * @ignore
     */
        function($, d3, Chart, ChartUtils, Translate) {

        function PolarChart(chartContainerId, chartModel, configPanel) {
            PolarChart.superclass.constructor.call(this, chartContainerId, chartModel, configPanel);
            var self = this;

            self.data = null;

            self.generateSeriesArrayForJQPlot = function () {
                if (self.model.isEmpty()) {
                    //no data to draw
                    return null;
                }

                var ySeries = self.getYSeries();
                var xSeries = self.getXSeries();
                if (xSeries === null || ySeries === null || ySeries.length === 0) {
                    //no fields are chosen to draw
                    return null;
                }

                //init arrays for different series
                var seriesArray = [];
                for (var j = 0; j < ySeries.length; j++) {
                    seriesArray.push([]);
                }

                var data = self.model.getData();
                $.each(data, function(index, event) {
                    var x = event[xSeries];

                    for (var j = 0; j < ySeries.length; j++) {
                        var y = event[ySeries[j]];
                        var arr = [];
                        arr.push(x);
                        arr.push(y);
                        seriesArray[j].push(arr);
                    }
                });

                return seriesArray;
            };

            self.showWarningForJQPlot = function (message) {
                var $messageBlock = $("<div/>").addClass("chart-warning");
                $messageBlock.html(message);
                $(ChartUtils.getInstance().toJqueryId(this.chartContainerId)).html($messageBlock);
            };
        }

        ChartUtils.extend(PolarChart, Chart);

        PolarChart.prototype.clear = function() {
            var self = this;
            $(ChartUtils.toJqueryId(self.chartContainerId)).empty();
        };

        PolarChart.prototype.refresh = function() {
            var self = this;
            if (!self.isShown) {
                return;
            }

            var self = this;
            self.clear();

            self.data = self.generateSeriesArrayForJQPlot();
            if (self.data === null) {
                self.showWarningForJQPlot(Translate.getTranslated('oep.exploration.charts.CHART_NO_DATA'));
                return;
            }

            //d3.select(Utils.toJqueryId(self.chartContainerId)).transition();

            self.init();
            self.updateRadiusAndLine();
            self.updateRadialAxis();
            self.updateAngularAxis();
            self.updatePath();
        };

        PolarChart.prototype.init = function() {
            var self = this;
            self.configPanel.setupForPolarChart();

            self.chart = {};
            var $id = ChartUtils.toJqueryId(self.chartContainerId);

            var width = $($id).width();
            var height = $($id).height();
            var margin = {top: 30, right: 30, bottom: 30, left: 30};

            var w = width - margin.left - margin.right;
            var h = height - margin.top - margin.bottom;

            self.chart.radiusConstraint = d3.min([h, w]) / 2;
            self.chart.radius = d3.scale.linear()
                .domain([0, 10000])
                .range([0, self.chart.radiusConstraint]);

            var centerXPos = w / 2 + margin.left;
            var centerYPos = h / 2 + margin.top;

            self.chart.svg = d3.select($id).append("svg")
                .attr("width", w + margin.left + margin.right)
                .attr("height", h + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + centerXPos + ", " + centerYPos + ")");
        };

        PolarChart.prototype.getMinX = function (data) {
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

        PolarChart.prototype.getMaxX = function (data) {
            var series = data[0];
            return series[series.length - 1][0];
        };

        PolarChart.prototype.getPeriod = function (data) {
            var self = this;
            return self.getMaxX(self.data) - self.getMinX(self.data);
        };

        PolarChart.prototype.updateRadiusAndLine = function() {
            var self = this;
            self.chart.radius = d3.scale.linear()
                .domain([0, 10000])
                .range([0, self.chart.radiusConstraint]);

            self.chart.line = d3.svg.line.radial()
                .radius(function(d) {
                    return self.chart.radius(d[1]);
                })
                .angle(function(d) {
                    //return (d[self.getXSeries()] - startTime) * 2 * Math.PI / self.getPeriod() + Math.PI / 2;
                    return (d[0] - self.model.getStartEvent()[self.getXSeries()]) * 2 * Math.PI / (self.getPeriod()) + Math.PI / 2;
                });
        };

        PolarChart.prototype.updateAngularAxis = function() {
            var self = this;
            var data = self.data[0];

            //delete angle axis
            self.chart.svg.selectAll(".angle").remove();
            var ga = self.chart.svg.append("g")
                .attr("class", "angle axis")
                .selectAll("g")
                .data(d3.range(0, 360, 90))
                .enter().append("g")
                .attr("transform", function(d) {
                    return "rotate(" + d + ")";
                });

            ga.append("line").attr("x2", self.chart.radiusConstraint);

            ga.append("text")
                .attr("x", self.chart.radiusConstraint + 6)
                .attr("dy", ".35em")
                .style("text-anchor", function(d) {
                    return d < 270 && d > 90 ? "end" : null;
                })
                .attr("transform", function(d) {
                    var dif = self.chart.radiusConstraint;
                    if (d === 90) {
                        return "rotate(" + -d + ")translate(" + -1*(dif + 40) + "," + (dif+10) + ")";
                    } else if (d === 270) {
                        return "rotate(" + -d + ")translate(" + -1*(dif + 40) + "," + -1*(dif + 10) + ")";
                    } else if (d === 180){
                        return "rotate(" + -d + ")translate(" + (-2*dif - 10) + ",0)";
                    }

                })
                .text(function(d) {
                    var period = self.getPeriod();
                    var lastTime = data[data.length - 1][0];
                    var timePast = lastTime;// - startTime;
                    var loops = timePast/period;
                    var numberOfFullLoops = Math.floor(loops);

                    var resultTick = null;
                    var startTickTime = d*period/360;// startTime + d*period/360;

                    if (numberOfFullLoops === 0) {
                        resultTick = startTickTime;
                    } else {
                        var partOfFinalLoop = timePast - numberOfFullLoops*period;

                        if (partOfFinalLoop >= startTickTime) {
                            resultTick = startTickTime + period*numberOfFullLoops;
                        } else {
                            resultTick = startTickTime + (period-1)*numberOfFullLoops;
                        }
                    };

                    return Translate.getTranslated(new Date(resultTick),
                        {    formatType: 'datetime',
                            dateFormat: 'short',
                            timeFormat: 'long'
                        });
                });
        };

        PolarChart.prototype.updateRadialAxis = function() {
            var self = this;

            //delete circles
            self.chart.svg.selectAll(".radius").remove();

            //redraw circles
            var gr = self.chart.svg.append("g")
                .attr("class", "radius axis")
                .selectAll("g")
                .data(self.chart.radius.ticks(5))
                .enter().append("g");

            gr.append("circle").attr("r", self.chart.radius);

            gr.append("text")
                .attr("x", function(d) {
                    return self.chart.radius(d);
                })
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d;
                });
        };

        PolarChart.prototype.updatePath = function() {
            var self = this;
            var data = self.data[0];

            //delete lines
            self.chart.svg.selectAll(".line").remove();

            //redraw lines
            self.chart.svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", self.chart.line);
        };

        return PolarChart;
    });





