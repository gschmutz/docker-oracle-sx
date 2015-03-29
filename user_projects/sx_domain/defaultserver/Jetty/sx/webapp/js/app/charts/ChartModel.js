/**
 * Product: OEP Stream Explorer.
 *
 * @author Julia Shmeleva
 *
 * Date: 14/3/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ChartModel', ['jquery', 'knockout', 'ChartUtils'],
        /**
         * @exports chart model
         * @ignore
         */
        function($, ko, ChartUtils) {

            function ChartModel() {
                var self = this;
                var chartUtils = ChartUtils.getInstance();

                //Data
                self.data = ko.observableArray();
                self.startEvent = null;

                //Sparse data
                var eventsAmountThreshold = chartUtils.DEFAULT_EVENTS_AMOUNT_THRESHOLD;
                self.sparseCoefficient = ko.observable(0);
                self.indexToInclude = 0;
                self.sparseCoefficient.subscribe(function() {
                    self.indexToInclude = 0;
                });

                //Limits
                self.maxEventsNumber = ko.observable(null);
                self.timePeriod = ko.observable(60000);
                var limit = ko.computed(function () {
                    return self.maxEventsNumber() !== null ? self.maxEventsNumber() : self.timePeriod();
                }).extend({ rateLimit: 0, notify: 'always' });

                limit.subscribe(function() {
                    self.sparseCoefficient(0);
                    var data = self.data();
                    self.data(removeOldData(data));
                });

                self.isEmpty = function() {
                    return (self.data() === null || self.data().length === 0);
                };

                self.clear = function() {
                    self.data.removeAll();
                };

                self.getData = function() {
                    return self.data();
                };

                self.getStartEvent = function() {
                    return self.startEvent;
                };

                self.getServerTime = function(event) {
                    return event[chartUtils.SERVER_TIMESTAMP];
                };

                var removeOldDataByEventsCount = function(eventsCount, data) {
                    var cutoffIndex = data.length - eventsCount;

                    if(cutoffIndex > 0) {
                        return data.slice(cutoffIndex);
                    }

                    return data;
                };

                var removeOldDataByTimePeriod = function(period, data) {
                    var lastTime = self.getServerTime(data[data.length - 1]);
                    var cutoffIndex = 0;
                    for (var i=0; i < data.length; i++) {
                        var curTime = self.getServerTime(data[i]);
                        if (lastTime - curTime < period) {
                            cutoffIndex = i - 1;
                            break;
                        }
                    }

                    if(cutoffIndex > 0) {
                        return data.slice(cutoffIndex);
                    }

                    return data;
                };

                var removeOldData = function(data) {
                    if (data === null || data.length === 0) {
                        return [];
                    }

                    if(limit() === null || limit() <= 0) {
                        return [];
                    }

                    if(self.maxEventsNumber() !== null) {
                        data = removeOldDataByEventsCount(self.maxEventsNumber(), data);
                    } else if(self.timePeriod() !== null) {
                        data = removeOldDataByTimePeriod(self.timePeriod(), data);
                    }

                    return sparseData(data);
                };

                var increaseSparseCoefficient = function() {
                    if(self.sparseCoefficient() === null) {
                        self.sparseCoefficient(ChartUtils.getInstance().DEFAULT_SPARSE_COEFFICIENT);
                    } else {
                        var old = self.sparseCoefficient();
                        self.sparseCoefficient(old + ChartUtils.getInstance().DEFAULT_SPARSE_COEFFICIENT);
                    }
                };

                var sparseData = function(data) {
                    if (data.length <= eventsAmountThreshold) {
                        return data;
                    }
                    increaseSparseCoefficient();

                    var newData = [];
                    $.each(data, function(index, item) {
                        if (index % self.sparseCoefficient() === 0) {
                            newData.push(item);
                        }
                    });

                    console.log('Chart data is too big. It is going to be stored only every ' + self.sparseCoefficient() + ' event.');
                    return newData;
                };

                self.addDataItem = function(event) {
                    if (event === null || $.isEmptyObject(event)) {
                        return;
                    };

                    if (self.isEmpty()) {
                        self.startEvent = event;
                    };

                    if (self.sparseCoefficient() === 0 || self.indexToInclude % self.sparseCoefficient() === 0) {
                        var data = self.data();
                        data.push(event);
                        self.data(removeOldData(data));
                    }

                    self.indexToInclude++;
                };
            };

            return ChartModel;
        });




