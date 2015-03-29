/**
 * Product: OEP Stream Explorer.
 *
 * @author Anna Yarmolenko
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('WindowsController', [
        'jquery',
        'knockout',
        'ExplorationKoModel',
        'ExplorationUtils',
        'WindowUnit',
        'Utils'
    ],
    /**
     * @exports exploration/window
     * @version 1.0
     */
    function ($, ko, ExplorationKoModel, ExplorationUtils, WindowUnit, Utils) {

        /**
         * @class
         * @classdesc  ui conroller for windows
         *  windows for all sources(streams) in exploration
         *
         * examples:
         * S [range T]  - time-based range window
         * S [rows N] -  tuple-based window,
         * S [partition by A1,..., Ak rows N]
         *
         */
        function WindowsController() {
            var self = this;
            var explorationKoModel = ExplorationKoModel.getInstance();
            var exUtils = ExplorationUtils.getInstance();

            /**
             *
             * exploration sources
             *
             * @type {EventType[] | ko.observableArray}
             */
            self.sources = null;
            self.isCorrelationsContainsDBSource = null;
            self.isReadMode = false;

            /**
             *
             * @type {WindowUnit[]}
             */
            self.rangeUnitsForStream = WindowUnit.rangeUnitsForStream;
            self.rangeUnitsForDataSource = WindowUnit.rangeUnitsForDataSource;

            /**
             *
             * @type {WindowUnit[]}
             */
            self.slideUnitsForRange = WindowUnit.availableSlideUnitsForRange;
            self.slideUnitsForRows = WindowUnit.availableSlideUnitsForRows;


            /**
             *
             * @param {Field} field
             * @param {EventSource} source
             * @returns {boolean}
             */
            self.isPartitionByFieldSelected = function (field, source) {
                return Utils.containsById(field, source.window.partitionByInEditMode());
            };

            /**
             *
             * @param {Field} field
             * @param {EventSource} source
             * @returns {boolean}
             */
            self.clickPartitionByField = function (field, source) {

                var founded = Utils.findById(field.id, source.window.partitionByInEditMode());
                if (founded) {
                    source.window.partitionByInEditMode.remove(function (item) {
                        return item.id === founded.id;
                    });

                } else {
                    source.window.partitionByInEditMode.push(field);
                }
                return true;
            };


            self.onOpenExplorationEditor = function () {
                self.sources = explorationKoModel.exploration().sources;
                self.isCorrelationsContainsDBSource = explorationKoModel.exploration().isCorrelationsContainsDBSource;
                self.isReadMode = explorationKoModel.exploration().actions.isReadMode;
            };


            self.onCloseExplorationEditor = function () {
                if (self.sources) {
                    self.sources().forEach(function (source) {
                        source.resetExplorationRelatedData();
                    });
                    self.sources = null;
                }

            };

            /**
             *
             * @param {EventSource} source
             * @returns {string}
             */
            self.partitionByReadModeText = function (source) {
                var text = exUtils.partitionByHeader + " " + source.window.partitionBy().map(
                        /**
                         *
                         * @param {Field} field
                         */
                        function (field) {
                            return field.name;
                        }).join(" " + exUtils.andLabel + " ");
                return text;
            };


            /**
             *
             * @param {EventSource[]} newSources
             */
            self.updateSourceWindowSlider = function (newSources) {
                var sources = newSources || self.sources();
                $.each(sources, function (key, value) {
                    self.updateWindowSlider(value);
                });
            };

            /**
             *
             * @param {EventSource} source
             */
            self.onWindowRangeUnitChange = function (source) {
                self.updateWindowSlider(source);
            };


            /**
             *
             * @param {EventSource} source
             * @param {Event} ev
             */
            self.onWindowRangeValueChange = function (source, ev) {
                var rangeValue = source.window.rangeValue();
                var rangeValueInError = $(ev.target).validationEngine('validate');

                if (rangeValueInError) {
                    source.window.rangeValue(isNaN(parseInt(rangeValue)) ? 0 : parseInt(rangeValue));
                }
                return false;
            };
            
            /**
             *
             * @param {EventSource} source
             * @param {Event} ev
             */
            self.onWindowSlideValueChange = function (source, ev) {
                var slideValue = source.window.slideValue();
                var slideValueInError = $(ev.target).validationEngine('validate');

                if (slideValueInError) {
                    source.window.slideValue(isNaN(parseInt(slideValue)) ? 0 : parseInt(slideValue));
                }
                return false;
            };

            /**
             *
             * @param element
             * @param index
             * @param data
             */
            self.onSourceAddRemove = function (element, index, data) {
            };


            /**
             *
             * @param {EventSource} source
             */
            self.updateWindowSlider = function (source) {
                var sourceWindow = source.window;
                var sliderContainer = $('#exploration-source-window-slider-' + source.name);
                if (!sliderContainer.length) {
                    return;
                }
                var rangeUnitSelected = sourceWindow.rangeUnit();
                var rangeMinValue = 0;
                var rangeMaxValue = WindowUnit.getWindowUnitMaxValue(rangeUnitSelected);
                var rangeValue = sourceWindow.rangeValue();

                var setAltaSlider = function (sliderHandle, sliderElement, value) {
                    var sliderValueLbl = sliderElement.find('.slider-value');
                    if (!sliderValueLbl.length) {
                        sliderValueLbl = $('<div class="slider-value"></div>')
                            .append('<div></div>');
                        sliderElement.append(sliderValueLbl);

                        //Draw marks (risochki) on the line-scale
                        var markShift = 0;
                        var stepValue = (rangeMaxValue - rangeMinValue) / 10;
                        for (var markInd = 0; markInd < 11; markInd++) {
                            var mark = $('<div class="mark"></div>')
                                .css('left', markShift * 10 + '%');
                            if (markShift / 5 === Math.floor(markShift / 5)) {
                                mark.text(rangeMinValue + markShift * stepValue);
                                mark.addClass('zero');
                            }
                            sliderElement.append(mark);
                            markShift = markShift + 1;
                        }

                    }
                    sliderValueLbl.css('left', sliderHandle.css('left'));
                    sliderValueLbl.find('div').text(value);
                    sliderHandle.attr('alt', value);
                    sliderHandle.attr('title', value);


                };
                if (sliderContainer.find('a.ui-slider-handle').length) {
                    //this means, that slider is initialized
                    sliderContainer.slider('destroy');
                    sliderContainer.find('*').remove();
                }
                var slider = sliderContainer.slider(
                    {
                        min: rangeMinValue,
                        max: rangeMaxValue,
                        value: rangeValue,
                        step: 1,
                        change: function (event, ui) {
                            var sliderHandle = $(ui.handle);
                            var sliderElement = $(event.target);
                            setAltaSlider(sliderHandle, sliderElement, ui.value);
                            sourceWindow.rangeValue(ui.value);
                        },
                        slide: function (event, ui) {
                            var sliderHandle = $(ui.handle);
                            var sliderElement = $(event.target);
                            setAltaSlider(sliderHandle, sliderElement, ui.value);
                        }
                    });

                setAltaSlider(sliderContainer.find('a.ui-slider-handle'), sliderContainer, rangeValue);

            };

        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {WindowsController}
         */
        WindowsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new WindowsController();
            }
            return this.instance;
        };

        return WindowsController;

    }
);

