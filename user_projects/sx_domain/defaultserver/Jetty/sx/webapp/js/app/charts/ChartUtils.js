/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 4/14/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ChartUtils', ['jquery', 'Utils', 'ExplorationUtils', 'Translate', 'Notifications', 'NotificationType'],

    /**
     * @exports Chart Utils
     * @version 1.0
     */

        function ($, Utils, ExplorationUtils, Translate, Notifications, NotificationType) {

        /**
         * @class
         * @classdesc contains chart html ids
         *
         */
        function ChartUtils() {
            var self = this;

            self.noDataMsg = Translate.getTranslated('oep.exploration.charts.CHART_NO_DATA');
            self.chartDrawerSelector = '.chart-drawer';
            self.chartWarningSelector = '.chart-warning';

            self.SERVER_TIMESTAMP = ExplorationUtils.getInstance().SERVER_TIMESTAMP;
            self.DEFAULT_LABEL_EVENTS = Translate.getTranslated('oep.exploration.charts.EVENTS_LABEL');
            self.DEFAULT_SPARSE_COEFFICIENT = 2;
            self.DEFAULT_EVENTS_AMOUNT_THRESHOLD = 1000;

            self.chartLimitPattern = Utils.loadContent('html/charts/chartLimitForm.html');
            self.chartPropertiesPattern = Utils.loadContent('html/charts/chartPropertiesForm.html');
            self.chartTypeChooserPattern = Utils.loadContent('html/charts/chartTypeChooserForm.html');
            self.lineChartPattern = Utils.loadContent('html/charts/lineChart.html');
            self.scatterChartPattern = Utils.loadContent('html/charts/scatterChart.html');
            self.polarChartPattern = Utils.loadContent('html/charts/polarChart.html');
            self.colorsPattern = Utils.loadContent('html/charts/chartsColorsAndGradients.html');

            //constants
            self.EVENTS_ID = 'events';
            self.SEC_ID = 'sec';
            self.MIN_ID = 'min';
            self.HR_ID = 'hr';

            //settings
            self.MAX_EVENTS_IN_CHART_MODEL = 1000;
            self.DEFAULT_TIME_LIMIT_VALUE = 1;
            self.DEFAULT_TIME_LIMIT_UNIT = self.MIN_ID;
            self.DEFAULT_MAX_EVENTS_VALUE = self.MAX_EVENTS_IN_CHART_MODEL;

            self.eventsByCountLimitSelector = 'span[id*=' + self.EVENTS_ID + ']';

            self.limitUnits = [
                {id: self.SEC_ID, label: 'Sec', ms: 1000},
                {id: self.MIN_ID, label: 'Min', ms: 60000},
                {id: self.HR_ID, label: 'Hr', ms: 3600000},
                {id: self.EVENTS_ID, label: 'Events', ms: null}
            ];

            /**
             * Converts id for jquery
             * @param id
             * @returns {string}
             */
            self.toJqueryId = function (id) {
                if (id.charAt(0) === '#') {
                    return id;
                }

                return '#' + id;
            };

            /**
             * remove first "#" from id
             * @param {String} id
             * @returns {String}
             */
            self.getIdWithoutFirstHash = function (id) {
                while (id.charAt(0) === '#') {
                    id = id.substring(1);
                }

                return id;
            };


        };

        ChartUtils.notifyThresholdExceeded= function(sparseCoefficient) {
            Notifications.add({
                type: NotificationType.TYPE.info,
                text: Translate.getTranslated('oep.exploration.charts.EXCEED_DATA_SIZE_THRESHOLD',
                    [ChartUtils.getInstance().DEFAULT_EVENTS_AMOUNT_THRESHOLD, sparseCoefficient])
            });
        };

        ChartUtils.toJqueryId = function (id) {
            return Utils.toJqueryId(id);
        };

        ChartUtils.inArray = function (value, array) {
            return array.indexOf(value) > -1;
        };

        ChartUtils.extend = function (Child, Parent) {
            Utils.extend(Child, Parent);
        };

        ChartUtils.getSeriesLabel = function(seriesName) {
            if (seriesName === ChartUtils.getInstance().SERVER_TIMESTAMP) {
                return Translate.getTranslated('oep.exploration.charts.' + seriesName);
            } else if (seriesName === ChartUtils.getInstance().DEFAULT_LABEL_EVENTS) {
                return Translate.getTranslated('oep.exploration.charts.' + seriesName);
            }

            return seriesName;
        };

        ChartUtils.getNoVisualDataMessage = function() {
            return Translate.getTranslated('oep.exploration.charts.CHART_NO_DATA');
        };

        /**
         * Get instance of singleton
         *
         * @static
         * @return {ChartUtils}
         */
        ChartUtils.getInstance = function () {
            if (!this.instance) {
                this.instance = new ChartUtils();
            }
            return this.instance;
        };


        return ChartUtils;
    });