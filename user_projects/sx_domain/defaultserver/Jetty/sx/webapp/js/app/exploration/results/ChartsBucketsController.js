/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ChartsBucketsController', [
        'jquery',
        'knockout',
        'ExplorationUtils',
        'Utils',
        'ChartBucketController',
        'FieldType',
        'Translate'
    ],
    /**
     * @exports charts buckets
     * @ignore
     */
        function ($,
                  ko,
                  ExplorationUtils,
                  Utils,
                  ChartBucketController,
                  FieldType,
                  Translate) {

        /**
         *
         * @class
         * @classdesc choose amount and types of charts
         *
         * @constructor
         * @param observableEvent
         * @param containerId
         *
         */
        function ChartsBucketsController(observableEvent, containerId) {
            var self = this;
            var exUtils = ExplorationUtils.getInstance();
            var isHorizontal = true;
            var isFullScreen = false;

            self.outerContainerId = containerId;
            self.containerId = containerId + '-buckets-panel';
            self.controlContainerId = containerId + "-buckets-config";
            self.chartsContainerId = containerId + "-buckets-content";

            self.buckets = [];

            self.visibleBucketsNumber = ko.observable();
            self.visibleBucketsNumber.subscribe(function(value){
                $.each(self.buckets, function(index, item) {
                    if (index < value) {
                        item.show();
                    } else {
                        item.hide();
                    }
                });
                updateChartsBucketsSize();
            });

            self.init = function() {
                var $outerPanel = $(Utils.toJqueryId(self.outerContainerId));
                var $innerPanel = $("<div/>").attr("id", self.containerId).addClass("charts-buckets-panel");

                //generate inner divs
                $outerPanel.append($innerPanel);
                $innerPanel.append($("<div/>").attr("id", self.controlContainerId).addClass("charts-buckets-config"));
                $innerPanel.append($("<div/>").attr("id", self.chartsContainerId).addClass("charts-buckets-content"));

                //generate buckets control
                var $buckets = $(Utils.toJqueryId(self.chartsContainerId));
                var $controls = $(Utils.toJqueryId(self.controlContainerId)).append(exUtils.chartsBucketsControllerPattern);
                Translate.getTranslated($controls);

                //generate buckets
                for (var i=1; i <=3 ; i++) {
                    var bucketContainerId = exUtils.chartBucketId + i;
                    $buckets.append($("<div/>").attr("id", bucketContainerId).addClass("charts-bucket-panel"));
                    self.buckets.push(new ChartBucketController(bucketContainerId, observableEvent));
                }
                $buckets.append('<div class="clear"></div>');

                updateChartsBucketsSize();
                $(window).resize(function() {
                    updateChartsBucketsSize();
                });

                self.visibleBucketsNumber(1); //choose default
                ko.applyBindings(self, document.getElementById(self.controlContainerId));
            };

            self.changeChartsOrientation = function() {
                isHorizontal = !isHorizontal;
                updateChartsBucketsSize();
            };

            self.maximizeWindow = function() {
                isFullScreen = !isFullScreen;
                updateChartsPanelSize();
            };

            self.close = function() {
                $.each(self.buckets, function(index, item) {
                    item.close();
                });
                var node = $(Utils.toJqueryId(self.controlContainerId)).empty()[0];
                ko.cleanNode(node);
            };

            /**
             *
             * @param {EventTypeField[]} eventTypeFields
             * @param predefinedConfigurations - array of predefined configuration for each button.
             * See 'ChartBucketController.setPredefinedConfiguration' method.
             * The length of this array is a number of active buckets.
             *
             * Example:
             * var config = [{type: 'scatterChart', limitValue: '45', limitUnit: 'sec', xField: 'client_age', yFields: ['purchase_sum']},
                             {type: 'lineChart', limitValue: '36', limitUnit: 'sec', yFields: ['purchase_sum', 'client_age']} ];
             */
            self.rebuild = function(eventTypeFields, predefinedConfigurations) {
                var types = generateTypesArrayForCharts(eventTypeFields);

                if (predefinedConfigurations && predefinedConfigurations.length > 0) {
                    self.setVisibleBucketsNumber(predefinedConfigurations.length);

                    $.each(self.buckets, function(index, bucket) {
                        if ( index < predefinedConfigurations.length ) {
                            bucket.rebuild(types, predefinedConfigurations[index]);
                        } else {
                            bucket.rebuild(types);
                        }
                    });

                } else {
                    $.each(self.buckets, function(index, bucket) {
                        bucket.rebuild(types);
                    });
                }
            };

            /**
             * Show appropriate number of chart buckets
             * @param number of active chart buckets
             */
            self.setVisibleBucketsNumber = function(number) {
                if (number >= 0) {
                    self.visibleBucketsNumber(number);
                }
            };

            /**
             *
             * @param {EventTypeField[]} eventTypeFields
             * @returns {} fields sorted by type
             */
            var generateTypesArrayForCharts = function (eventTypeFields) {
                var types = {};
                types.numeric = [];
                types.string = [];
                types.date = [ExplorationUtils.getInstance().SERVER_TIMESTAMP];

                $.each(eventTypeFields, function (index, eventTypeField) {
                    var fieldType = eventTypeField.field.type;

                    if (FieldType.isNumber(fieldType)) {
                        types.numeric.push(eventTypeField.alias);
                    }

                    if (FieldType.isTimeStamp(fieldType)) {
                        types.date.push(eventTypeField.alias);
                    }

                    if (FieldType.isString(fieldType)) {
                        types.string.push(eventTypeField.alias);
                    }
                });

                return types;
            };

            /**
             * Show fullscreen mode or switch back to usual mode depending on 'isFullScreen' property
             */
            var updateChartsPanelSize = function() {
                var $charts = $(Utils.toJqueryId(self.containerId));
                if (isFullScreen) {
                    self.beforeFullscreen = {
                        parentElement: $charts.parent(),
                        index: $charts.parent().children().index($charts),
                        x: $(window).scrollLeft(),
                        y: $(window).scrollTop()
                    };

                    // Set values needed to go fullscreen.
                    $('body').append($charts).css('overflow', 'hidden');
                    $charts.addClass('charts-fullscreen');
                    window.scroll(0,0);
                } else {
                    // Restore saved values.
                    $charts.removeClass('charts-fullscreen');
                    if (self.beforeFullscreen.index >= self.beforeFullscreen.parentElement.children().length) {
                        self.beforeFullscreen.parentElement.append($charts);
                    } else {
                        $charts.insertBefore(self.beforeFullscreen.parentElement.children().get(self.beforeFullscreen.index));
                    }
                    $('body').css('overflow', 'auto');
                    window.scroll(self.beforeFullscreen.x, self.beforeFullscreen.y);
                }
                updateChartsBucketsSize();
            };

            /**
             * Update width of each visible chart buckets
             */
            var updateChartsBucketsSize = function() {
                var width, height;

                var $chartsOuter = $(Utils.toJqueryId(self.containerId));
                var innerChartsTotalHeight = $chartsOuter.innerHeight() - $(Utils.toJqueryId(self.controlContainerId)).outerHeight();

                if (isHorizontal) {
                    if (isFullScreen) {
                        height = innerChartsTotalHeight;
                    } else {
                        height = 300;
                    }
                    width = 100/self.visibleBucketsNumber() + '%';
                } else {
                    width = "100%";
                    if (isFullScreen) {
                        height = innerChartsTotalHeight/self.visibleBucketsNumber();
                    } else {
                        height = 300;
                    }

                }

                $.each(self.buckets, function(index, item) {
                    if (index < self.visibleBucketsNumber()) {
                        item.hide();
                        item.setWidth(width);
                        item.setHeight(height);
                        item.show();
                    }
                });
            };

            self.init();
        };

        return ChartsBucketsController;
    }
);



