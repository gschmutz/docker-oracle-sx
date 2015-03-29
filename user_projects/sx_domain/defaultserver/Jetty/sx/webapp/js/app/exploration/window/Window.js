/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Window', [
        'knockout',
        'jquery',
        'WindowUnit'
    ],

    /**
     * @exports exploration/window
     * @ignore
     */
    function (ko, $, WindowUnit) {

        /**
         * @class
         * @classdesc - info about window operator in CQL query
         *
         * S[Partition By A1 ... Ak Range T1 Slide T2]
         * S[Partition By A1 ... Ak Rows N1 Slide N2]
         * not implemented yet : S[Partition By A1 ... Ak Rows N Range T1 Slide T2]
         *
         * impl: Range and Rows datas store in one field : Window.rangeValue ,
         * it difers by Window.rangeUnit: @see { WindowUnit.Units }
         *
         * @constructor
         * @param {number} rangeValue  - Range/Rows value
         * @param {WindowUnit } rangeUnit  - Range/Rows rangeUnit
         * @param {Field[] } partitionBy
         */
        function Window(rangeValue, rangeUnit, slideValue, slideUnit, partitionBy) {
            var self = this;


            /**
             *
             * @type {number}
             */
            this.rangeValue = ko.observable(rangeValue || WindowUnit.DEFAULT_RANGE_VALUE);

            /**
             *
             * @type {WindowUnit.Units | ko.observable}
             */
            this.rangeUnit = ko.observable(rangeUnit || WindowUnit.Units.NOW);


            /**
             *
             * @type {number| ko.observable}
             */
            this.slideValue = ko.observable(slideValue || WindowUnit.DEFAULT_SLIDE_VALUE);

            /**
             *
             * @type {WindowUnit.Units | ko.observable}
             */
            this.slideUnit = ko.observable(slideUnit || WindowUnit.Units.SECONDS);

            /**
             *
             * @type {Field[]| ko.observableArray}
             */
            this.partitionBy = ko.observableArray(partitionBy || []);

            /**
             * partitionBy updated by values from partitionByInEditMode when user close partitionBy Editor (popup)
             * @type {Field[]| ko.observableArray}
             */
            this.partitionByInEditMode = ko.observableArray(partitionBy || []);

            /**
             * exploration deployer trigger should listen(subscribe to) changes in Window properties
             * to provide AutoDeploy feature
             *
             * if source removed from exploration - all exploration subsribtions should be disposed
             * @type {Array}
             */
            this.windowPropertiesSubscriptions = [];

            /**
             *
             * @param rangeValue
             * @param {WindowUnit} rangeUnit
             * @param {Field[]} partitionBy
             */
            this.setWindow = function (rangeValue, rangeUnit, slideValue, slideUnit, partitionBy) {
                this.unsubscribeAllWindowProperties();
                this.rangeValue(rangeValue || WindowUnit.DEFAULT_RANGE_VALUE);
                this.rangeUnit(rangeUnit || WindowUnit.Units.NOW);
                this.slideValue(slideValue || WindowUnit.DEFAULT_SLIDE_VALUE);
                this.slideUnit(slideUnit || WindowUnit.Units.SECONDS);
                this.partitionBy(partitionBy || []);
            };

            /**
             * exploration deployer trigger should listen(subscribe to) changes in Window properties
             * to provide AutoDeploy feature
             *
             * if source removed from exploration - all exploration subsribtions should be disposed
             * @type {Array}
             */
            this.unsubscribeAllWindowProperties = function () {
                var self = this;
                for (var i = 0; i < self.windowPropertiesSubscriptions.length; i++) {
                    self.windowPropertiesSubscriptions[i].dispose(); //no longer want notifications
                }
                self.windowPropertiesSubscriptions.splice(0, self.windowPropertiesSubscriptions.length);

            };

            /**
             *
             * exploration deployer trigger should listen(subscribe to) changes in Window properties
             * to provide AutoDeploy feature
             *
             * if source removed from exploration - all exploration subsribtions should be disposed
             *
             * @param {ko.observable | boolean} deployExplorationTrigger
             * @see {ExplorationKoModel.deployExplorationTrigger}
             *
             */
            this.subscribeToWindowPropertiesChanges = function (deployExplorationTrigger) {

                var rangeValueSubscribe = this.rangeValue.subscribe(function () {
                    deployExplorationTrigger(true);
                });
                var rangeUnitSubscribe = this.rangeUnit.subscribe(function () {
                    deployExplorationTrigger(true);
                });
                var slideValueSubscribe = this.slideValue.subscribe(function () {
                    deployExplorationTrigger(true);
                });
                var slideUnitSubscribe = this.slideUnit.subscribe(function () {
                    deployExplorationTrigger(true);
                });
                var partitionBySubscribe = this.partitionBy.subscribe(function () {
                    deployExplorationTrigger(true);
                });

                this.windowPropertiesSubscriptions.push(
                    rangeValueSubscribe,
                    rangeUnitSubscribe,
                    slideValueSubscribe,
                    slideUnitSubscribe,
                    partitionBySubscribe
                );
            };


            /**
             * rangeUnit change listener
             */
            self.rangeUnit.subscribe(function (rangeUnit) {
                if (rangeUnit == WindowUnit.Units.ROWS) {  //Events as range

                    if (self.slideUnit() !== WindowUnit.Units.ROWS) {
                        self.slideUnit(WindowUnit.Units.ROWS);
                        self.slideValue(1);
                    }

                } else { // Time as Range
                    self.partitionBy.removeAll();
                    self.partitionByInEditMode.removeAll();

                    if (self.slideUnit() == WindowUnit.Units.ROWS) {
                        self.slideUnit(WindowUnit.Units.SECONDS);
                        self.slideValue(WindowUnit.DEFAULT_SLIDE_VALUE);
                    }
                }
            });

            self.isPartitionByReadMode = ko.observable(true);

            /**
             * isPartitionByReadMode change listener
             * partitionBy updated by values from partitionByInEditMode when user close partitionBy Editor (popup)
             *
             */
            self.isPartitionByReadMode.subscribe(function (isPartitionByReadMode) {
                if (isPartitionByReadMode) {  //exitPartitionByEditMode
                    self.partitionBy([].concat(self.partitionByInEditMode()));

                } else {  //open partition by editor
                    self.partitionByInEditMode([].concat(self.partitionBy()));

                }
            });

            /**
             *
             * @param {HTMLElement} partitionByEditor
             */
            self.exitPartitionByEditMode = function (partitionByEditor) {
                partitionByEditor = $(partitionByEditor);
                setTimeout(
                    $.proxy(function () {            //switch off to edit mode
                        var activeElement = document.activeElement;
//                            console.log("activeElement: ", activeElement);
                        if (activeElement !== null
                            && !partitionByEditor.is(activeElement)//not  partitionByEditor
                            && partitionByEditor.has(activeElement).length === 0  //not internal element
                        ) {
                            self.isPartitionByReadMode(true);
                        }
                    }, self), 20
                );
            };


            /**
             *
             * @returns {boolean} true if evaluationFrequency is NoLongerThanRange
             */
            self.isEvaluationFrequencyNoLongerThanRange = function () {


                var isEvaluationFrequencyNoLongerThanRange_ = false;

                if (self.rangeUnit() == WindowUnit.Units.NOW || self.rangeUnit() == WindowUnit.Units.UNBOUNDED) {
                    isEvaluationFrequencyNoLongerThanRange_ = true;
                } else {
                    var rangeInNanoseconds = WindowUnit.convertWindowUnitValueToNanoseconds(self.rangeValue(), self.rangeUnit());
                    if (Window.isIntegerValue(rangeInNanoseconds)) {
                        var slideInNanoseconds = WindowUnit.convertWindowUnitValueToNanoseconds(self.slideValue(), self.slideUnit());
                        isEvaluationFrequencyNoLongerThanRange_ =
                            Window.isIntegerValue(slideInNanoseconds) && slideInNanoseconds > 0
                                ?
                            slideInNanoseconds <= rangeInNanoseconds :    //evaluationFrequencyShouldBeNoLongerThanRange
                                false;
                    }

                }

                return isEvaluationFrequencyNoLongerThanRange_;
            }
            ;


        }

        /**
         *
         * @param value
         * @returns {boolean}
         */
        Window.isIntegerValue = function (value) {
            return $.isNumeric(value) && Math.floor(value) == value;
        };

        /**
         *
         * @returns {Window}
         */
        Window.getDefaultWindow = function () {
            return new Window(WindowUnit.DEFAULT_RANGE_VALUE, WindowUnit.Units.NOW, WindowUnit.DEFAULT_SLIDE_VALUE, WindowUnit.Units.SECONDS, []);
        };


        return Window;

    }
)
;
