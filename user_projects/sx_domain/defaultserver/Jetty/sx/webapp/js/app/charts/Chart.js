/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 13/3/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Chart', [
        'jquery',
        'knockout',
        'ChartModel',
        'ChartConfigurationPanel',
        'ChartUtils',
        'ChartsColorsAndGradients'
    ],

    /**
     * base class for chart
     * @exports chart
     * @version 1.0
     */

        function ($, ko, ChartModel, ChartConfigurationPanel, ChartUtils, ChartsColorsAndGradients) {

        function Chart(chartContainerId, chartModel, configPanel) {
            var self = this;

            self.chartContainerId = chartContainerId;

            /** Set configuration panel **/
            if(!configPanel) {
                var newId = ChartUtils.toJqueryId(chartContainerId) + '-conf';
                $(ChartUtils.toJqueryId(chartContainerId)).append($("<div/>").attr("id", newId));
                configPanel = new ChartConfigurationPanel(newId);
            };
            self.configPanel = configPanel;


            /** Set model **/
            if (!chartModel) {
                chartModel = new ChartModel();
            }
            self.model = chartModel;
            self.model.maxEventsNumber(self.configPanel.limit().eventsCount);
            self.model.timePeriod(self.configPanel.limit().timePeriod);


            /**
             * Subscriptions
             **/
            var axisSubscription = self.configPanel.axis.subscribe(function () {
                if (self.isShown) { self.refresh(); }
            });

            var limitSubscription = self.configPanel.limit.subscribe(function (value) {
                if (value === null || value <= 0) {
                    self.model.maxEventsNumber(null);
                    self.model.timePeriod(null);
                } else {
                    self.model.maxEventsNumber(value.eventsCount);
                    self.model.timePeriod(value.timePeriod);
                }
            });

            var modelSubscription = self.model.data.subscribe(function () {
                if (self.isShown) { self.refresh(); }
            });

            var sparseModelSubscription = self.model.sparseCoefficient.subscribe(function (value) {
                if (value > 0) {
                    ChartUtils.notifyThresholdExceeded(value);
                }
            });

            /**
             * Methods for destroying charts
             */

            self.cancelAllSubscriptions = function() {
                modelSubscription.dispose();
                axisSubscription.dispose();
                sparseModelSubscription.dispose();
                limitSubscription.dispose();
            };

            self.destroy = function () {
                self.cancelAllSubscriptions();
                self.clear();
                var $object = $(ChartUtils.toJqueryId(self.chartContainerId));
                if ($object[0]) { ko.cleanNode($object[0]); }
                $object.empty();
            };


            /**
             * Indicates where the chart is visible or not,
             * Used to prevent extra refresh operations.
             * @type {boolean}
             */
            self.isShown = true;

            self.show = function () {
                self.isShown  = true;
                self.refresh();
            };

            self.hide = function () {
                self.isShown  = false;
                self.clear();
            };


            /**
             * Boilerplate code for obtaining data from model
             */
            self.getLabelName = function (seriesName) {
                return ChartUtils.getSeriesLabel(seriesName);
            };

            self.getTimePeriod = function () {
                return self.configPanel.limit() === null ? null : self.configPanel.limit().timePeriod;
            };

            self.getMaxDataSize = function () {
                return self.configPanel.limit() === null ? null : self.configPanel.limit().eventsCount;
            };


            self.getAllYFields = function () {
                return self.configPanel.yOptions();
            };

            self.getSelectedYFields = function () {
                var fields = self.configPanel.ySelectedSeriesArray();
                if (!fields || fields.length === 0) {
                    return null;
                }

                return fields;
            };

            self.getSelectedXField = function () {
                return self.configPanel.xSelectedSeries();
            };

            self.addSelectedYField = function(field) {
                self.configPanel.ySelectedSeriesArray.push(field);
            };

            self.removeSelectedYField = function(field) {
                self.configPanel.ySelectedSeriesArray.remove(field);
            };


            /**
             * Function that is called when series is selected/deselected
             */
            self.selectSeries = function(event, ui) {
                if (ui.type === 'in') {
                    self.addSelectedYField(ui.category);
                } else if (self.getSelectedYFields().length > 1) {
                    self.removeSelectedYField(ui.category);
                }
                self.refresh();
            };

            /**
             * Get class for setting colors and gradients in OJet charts
             * @returns {ChartsColorsAndGradients}
             */
            self.getColorsAndGradients = function() {
                return ChartsColorsAndGradients.getInstance();
            };


            /**
             * ojet hack : override ojet string bundle
             */
            self.overrideOJetChartGetTranslationMap = function () {

                var ojChartPrototype = $.oj.ojChart.prototype;
                var oldMethod = ojChartPrototype._GetTranslationMap;
                ojChartPrototype._GetTranslationMap = function () {
                    var bundle = oldMethod.apply(this);
                    bundle['DvtChartBundle.EMPTY_TEXT'] = ChartUtils.getNoVisualDataMessage();

                    return bundle;
                };
            };

            self.overrideOJetChartGetTranslationMap();
        }

        /**
         * Clears the chart but leaves all configuration and model unchanged.
         * Override this method for each chart type.
         */
        Chart.prototype.clear = function () {
            $(ChartUtils.getInstance().toJqueryId(this.chartContainerId)).empty();
        };



        /**
         * Implement here how the chart should be updated
         * when the chart model has been changed.
         * Override this method for each chart type.
         */
        Chart.prototype.refresh = function () {
            alert("Not Implemented");
        };

        return Chart;
    });


