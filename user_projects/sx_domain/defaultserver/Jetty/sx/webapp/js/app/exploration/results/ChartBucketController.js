/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ChartBucketController', [
        'jquery',
        'knockout',
        'ExplorationUtils',
        'ExplorationKoModel',
        'Utils',
        'ChartModel',
        'ChartConfigurationPanel',
        'ChartTypeChooser'
    ],
    /**
     * @exports charts bucket
     * @ignore
     */
        function ($,
                  ko,
                  ExplorationUtils,
                  ExplorationKoModel,
                  Utils,
                  ChartModel,
                  ChartConfigurationPanel,
                  ChartTypeChooser) {

        /**
         *
         * @class
         * @classdesc charts bucket
         *
         * @constructor
         * @param observableEvent
         *
         */
        function ChartBucketController(containerId, observableEvent) {
            var self = this;

            /**
             * Ids
             */
            var configContainerId = containerId + "-conf";
            var propertiesContainerId = containerId + "-prop";
            var limitContainerId = containerId + "-limit";
            var typeChooserContainerId = containerId + "-type";
            var chartContainerId = containerId + "-graph";

            /**
             * Set chart model
             * @type {ChartModel}
             */
            self.chartModel = new ChartModel();
            self.chartModelSubscription = observableEvent.subscribe(function (event) {
                self.chartModel.addDataItem(event.value);
            });


            /**
             * variables for configuration controllers
             */
            self.chartConfigPanel = null;
            self.chartTypeChooser = null;

            self.init = function() {
                generateInnerDivs();

                self.chartConfigPanel = new ChartConfigurationPanel(propertiesContainerId, limitContainerId);

                self.chartTypeChooser = new ChartTypeChooser(typeChooserContainerId);
                self.chartTypeChooser.type.subscribe(function() {
                    if (self.chart) {
                        self.chart.destroy();
                        self.chart = null;
                    }
                }, null, "beforeChange");

                showConfigPanel(false);

                self.chartTypeChooser.type.subscribe(function(chart) {
                    self.chart = new chart(chartContainerId,  self.chartModel, self.chartConfigPanel);
                });

                self.chartTypeChooser.setType(self.chartTypeChooser.lineChart);

                ko.applyBindingsToNode(document.getElementById(containerId), {
                    event: {
                        mouseover: function() {
                            if (!self.chartModel.isEmpty() || !self.chartConfigPanel.hasLimit()) {
                                showConfigPanel(true);
                            } else {
                                showConfigPanel(false);
                            }
                        },
                        mouseout: function() {
                            showConfigPanel(false);
                        }
                    }
                });
            };

            self.setWidth = function(width) {
                $(Utils.toJqueryId(containerId)).width(width);
            };

            self.setHeight = function(height) {
                if (height) {
                    var newHeight = height  - 55; //height of config panel + padding and borders
                    $(Utils.toJqueryId(chartContainerId)).height(newHeight + 'px');
                }
            };

            self.show = function() {
                $(Utils.toJqueryId(containerId)).show();
                self.chart.show();
            };

            self.hide = function() {
                self.chart.hide();
                $(Utils.toJqueryId(containerId)).hide();
            };

            self.close = function() {
                self.chartModelSubscription.dispose();
                self.chartModel.clear();
                self.chart.destroy();
                self.chartConfigPanel.close();
                self.chartTypeChooser.close();
            };

            self.rebuild = function(types, predefinedConfiguration) {
                self.chartModel.clear();

                //Types should be set before other changes
                // since it automatically set default selected fields
                if (types) {
                    self.setFieldTypes(types);
                }

                if (predefinedConfiguration) {
                    self.setPredefinedConfiguration(predefinedConfiguration);
                }
            };

            self.setFieldTypes = function(types) {
                self.chartConfigPanel.types(types);
            };

            /**
             * @param config Object containing predefined settings for chart bucket
             *
             * Example:
             * var config = {type: 'scatterChart', limitValue: '45', limitUnit: 'sec', xField: 'client_age', yFields: ['purchase_sum']}
             */
            self.setPredefinedConfiguration = function(config) {

                //Type should be always the first change
                // since it is automatically sets its default settings
                if (config.type) {
                    setPredefinedType(config.type);
                }

                if (config.limitValue && config.limitUnit) {
                    setPredefinedLimit(config.limitValue, config.limitUnit);
                }

                if (config.xField) {
                    setPredefinedXField(config.xField);
                }

                if (config.yFields) {
                    setPredefinedYFields(config.yFields);
                }

                if (config.colors) {
                    setPredefinedColors(config.colors);
                }

                if (config.threshold) {
                    setPredefinedThreshold(config.threshold);
                }
            };

            /**
             * Set current chart type: 'lineChart', 'scatterChart', 'polarChart'
             * @param type
             */
            function setPredefinedType(type) {
                if (self.chartTypeChooser[type]) {
                    self.chartTypeChooser.setType(self.chartTypeChooser[type]);
                }
            }

            function setPredefinedLimit(value, unit) {
                self.chartConfigPanel.limitValue(value);
                self.chartConfigPanel.limitUnit(unit);
            }

            function setPredefinedXField(xField) {
                self.chartConfigPanel.xSelectedSeries(xField);
            }

            function setPredefinedYFields(yFields) {
                self.chartConfigPanel.ySelectedSeriesArray(yFields);
            }

            function setPredefinedColors(colors) {
                //TODO
            }

            function setPredefinedThreshold(threshold) {
                //TODO
            }

            function generateInnerDivs() {
                var $configPanel = $("<div/>").attr("id", configContainerId).addClass("charts-bucket-config");
                $configPanel.append($("<div/>").attr("id", typeChooserContainerId));
                $configPanel.append($("<div/>").attr("id", propertiesContainerId));
                $configPanel.append($("<div/>").attr("id", limitContainerId));
                $configPanel.append($("<div/>").addClass('clear'));

                var $chartPanel = $("<div/>").attr("id", chartContainerId).addClass("charts-bucket-content");

                var $container = $(Utils.toJqueryId(containerId));
                $container.append($configPanel);
                $container.append($chartPanel);
                $container.append($("<div/>").addClass('clear'));
            }

            function showConfigPanel(value) {
                if (value) {
                    $(Utils.toJqueryId(configContainerId)).css("visibility", "visible");
                } else {
                    $(Utils.toJqueryId(configContainerId)).css("visibility", "hidden");
                }
            }

            self.init();
        }

        return ChartBucketController;
    }
);
