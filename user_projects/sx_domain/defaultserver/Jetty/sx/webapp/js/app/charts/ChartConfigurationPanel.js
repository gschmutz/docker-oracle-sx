
/**
 * Product: OEP Stream Explorer
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'ChartConfigurationPanel',
        ['jquery',
        'knockout',
        'ChartUtils',
        'Utils',
        'Translate'],
    /**
     * @exports chart configuration panel
     * @ignore
     */
        function ($, ko, ChartUtils, Utils, Translate) {

        /**
         * @class
         * @classdesc - chart configuration panel
         **/
        function ChartConfigurationPanel(propertiesId, limitId) {
            var self = this;
            var chartUtils = ChartUtils.getInstance();

            self.propertiesId = propertiesId;
            self.limitId = limitId;

            self.currentFunctionForUpdatingFieldTypes = ko.observable();
            self.currentFunctionForUpdatingFieldTypes.subscribe(function(callback) {
                if (callback) {
                    callback.call(self);
                }
            });

            self.types = ko.observable(null);
            self.types.subscribe(function() {
                var callback = self.currentFunctionForUpdatingFieldTypes();
                if (callback) {
                    callback.call(self);
                }
            });

            self.xSelectedSeries = ko.observable(null);
            self.ySelectedSeriesArray = ko.observableArray();

            self.axis = ko.computed(function () {
                var x = self.xSelectedSeries();
                var y = self.ySelectedSeriesArray();
                if (x === null || y === null || y.length === 0) {
                    return null;
                } else {
                    return [x, y];
                }
            }).extend({ rateLimit: 0});

            self.yOptions = ko.observableArray();
            self.xOptions = ko.observableArray();


            /**
             * Limits
             */
            self.limitUnitOptions = chartUtils.limitUnits;
            self.limitValue = ko.observable(chartUtils.DEFAULT_TIME_LIMIT_VALUE);
            self.limitUnit = ko.observable(chartUtils.DEFAULT_TIME_LIMIT_UNIT);

            self.limit = ko.computed(function () {
                var value = self.limitValue();
                if (isNaN(value) || value <= 0) {
                    return null;
                }

                var obj = {};
                obj.eventsCount = null;
                obj.timePeriod = null;
                var unit = self.limitUnit();
                if (unit === chartUtils.EVENTS_ID) {
                    obj.eventsCount = value;
                } else if (unit === chartUtils.SEC_ID) {
                    obj.timePeriod = value * 1000;
                } else if (unit === chartUtils.MIN_ID) {
                    obj.timePeriod = value * 60000;
                } else if (unit === chartUtils.HR_ID) {
                    obj.timePeriod = value * 3600000;
                }

                return obj;
            });

            self.hasLimit= function() {
                var value = self.limitValue();
                if (isNaN(value) || value <= 0) {
                    return false;
                }
                return true;
            };

            self.init = function() {
                $(chartUtils.toJqueryId(self.limitId)).append(chartUtils.chartLimitPattern);
                $(chartUtils.toJqueryId(self.propertiesId)).append(chartUtils.chartPropertiesPattern);

                $('#' + self.propertiesId + ' .xOptions').ojMenu();
                $('#' + self.propertiesId + ' .yOptions').ojMenu();
                $('#' + self.propertiesId + " .xButton").ojButton( { "display": "icons",
                    "label": "X axis",
                    "icons": { end:'oj-icon app-oj-x-axis-icon' },
                    "menu": '#' + self.propertiesId + ' .xOptions'
                } );

                $('#' + self.propertiesId + " .yButton").ojButton( { "display": "icons",
                    "label": "Y axis",
                    "icons": { end: 'oj-icon app-oj-y-axis-icon' },
                    "menu": '#' + self.propertiesId + ' .yOptions'
                } );

                ko.applyBindings(self, document.getElementById(self.propertiesId));
                ko.applyBindings(self, document.getElementById(self.limitId));
            };

            self.close = function() {
                var node = $(chartUtils.toJqueryId(self.propertiesId)).empty()[0];
                ko.cleanNode(node);
                node = $(chartUtils.toJqueryId(self.limitId)).empty()[0];
                ko.cleanNode(node);
            };

            self.getLabel = function(value) {
                if (value === chartUtils.SERVER_TIMESTAMP) {
                    return Translate.getTranslated('oep.exploration.charts.' + value);
                }

                return value;
            };

            /**
             * Setup for line chart
             */
            self.setupForLineChart = function() {
                self.showAllOptions(true);
                self.isXShown(false);
                self.isYShown(false);
                showEventsLimit(false);
                checkLimitValueForLineChart();
                self.currentFunctionForUpdatingFieldTypes(updateFieldTypesForLineChart);
            };

            function checkLimitValueForLineChart() {
                if (self.limitUnit() === chartUtils.EVENTS_ID) {
                    self.limitValue(chartUtils.DEFAULT_TIME_LIMIT_VALUE);
                    self.limitUnit(chartUtils.DEFAULT_TIME_LIMIT_UNIT);
                }
            }

            function updateFieldTypesForLineChart() {
                var types = self.types();
                if (!types || types === null) {
                    self.xOptions.removeAll();
                    self.yOptions.removeAll();
                    self.xSelectedSeries(null);
                    self.ySelectedSeriesArray.removeAll();

                } else {
                    self.xOptions(types.date);
                    self.yOptions(types.numeric);

                    if (self.xOptions().length > 0) {
                        self.xSelectedSeries(self.xOptions()[0]);
                    } else {
                        self.xSelectedSeries(null);
                    }

                    if (self.yOptions().length > 0) {
                        self.ySelectedSeriesArray([self.yOptions()[0]]);
                    } else {
                        self.ySelectedSeriesArray.removeAll();
                    }
                }
            }

            /**
             * Setup for scatter chart
             */
            self.setupForScatterChart = function() {
                self.showAllOptions(true);
                self.isYShown(false);
                self.currentFunctionForUpdatingFieldTypes(updateFieldTypesForScatterChart);
            };

            function updateFieldTypesForScatterChart() {
                var types = self.types();
                if (types === null) {
                    self.xOptions.removeAll();
                    self.yOptions.removeAll();
                    self.xSelectedSeries(null);
                    self.ySelectedSeriesArray.removeAll();

                } else {
                    self.xOptions(self.types().numeric);
                    self.yOptions(self.types().numeric);

                    if (self.xOptions().length > 1) {
                        self.xSelectedSeries(self.xOptions()[1]);
                    } else {
                        self.xSelectedSeries(null);
                    }

                    if (self.yOptions().length > 1) {
                        self.ySelectedSeriesArray([self.yOptions()[0]]);
                    } else {
                        self.ySelectedSeriesArray.removeAll();
                    }
                }
            }

            /**
             * Setup for polar chart
             */

            self.setupForPolarChart = function() {
                self.showAllOptions(true);
                self.isXShown(false);
                showEventsLimit(false);
                checkLimitValueForPolarChart();
                self.currentFunctionForUpdatingFieldTypes(updateFieldTypesForPolarChart);
            };

            function checkLimitValueForPolarChart() {
                if (self.limitUnit() === chartUtils.EVENTS_ID) {
                    self.limitValue(chartUtils.DEFAULT_TIME_LIMIT_VALUE);
                    self.limitUnit(chartUtils.DEFAULT_TIME_LIMIT_UNIT);
                }
            }

            function updateFieldTypesForPolarChart() {
                var types = self.types();
                if (!types || types === null) {
                    self.xOptions.removeAll();
                    self.yOptions.removeAll();
                    self.xSelectedSeries(null);
                    self.ySelectedSeriesArray.removeAll();

                } else {
                    self.xOptions(types.date);
                    self.yOptions(types.numeric);

                    if (self.xOptions().length > 0) {
                        self.xSelectedSeries(self.xOptions()[0]);
                    } else {
                        self.xSelectedSeries(null);
                    }

                    if (self.yOptions().length > 0) {
                        self.ySelectedSeriesArray([self.yOptions()[0]]);
                    } else {
                        self.ySelectedSeriesArray.removeAll();
                    }
                }
            }


            /**
             * Visibility configuration
             */

            self.isYShown = ko.observable(true);
            self.isXShown = ko.observable(true);
            self.isLimitShown = ko.observable(true);

            self.showAllOptions = function(value) {
                self.isYShown(value);
                self.isXShown(value);
                self.isLimitShown(value);
                showEventsLimit(value);
            };

            function showEventsLimit(value) {
                if (value) {
                    $(chartUtils.toJqueryId(self.limitId)).find(chartUtils.eventsByCountLimitSelector).show();
                } else {
                    $(chartUtils.toJqueryId(self.limitId)).find(chartUtils.eventsByCountLimitSelector).hide();
                }
            }

            self.init();
        }

        return ChartConfigurationPanel;

    }
);



