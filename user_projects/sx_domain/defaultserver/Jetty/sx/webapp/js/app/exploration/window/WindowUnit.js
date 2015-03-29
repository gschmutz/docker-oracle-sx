/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('WindowUnit', [
        'Translate'
    ],

    /**
     * @exports exploration/window
     * @ignore
     */
    function (Translate) {

        var TRANSLATE_NAMESPACE = 'oep.exploration.window.units.';

        /**
         *
         * @class
         * @classdesc  WindowUnit
         *
         * @constructor
         * @param {WindowUnit.Units.*} value
         */
        function WindowUnit(value) {
            this.value = value;
            this.label = Translate.getTranslated(TRANSLATE_NAMESPACE + value);
            this.maxValue = WindowUnit.getWindowUnitDefaultMaxValue(value);


        }

        /**
         * (CQL Window): Rows and Range units
         */
        WindowUnit.Units = {
            NOW: "NOW",
            NANOSECONDS: "NANOSECONDS",
            MICROSECONDS: "MICROSECONDS",
            MILLISECONDS: "MILLISECONDS",
            SECONDS: "SECONDS",
            MINUTES: "MINUTES",
            HOURS: "HOURS",
            ROWS: "ROWS",  //for Rows
            UNBOUNDED: "UNBOUNDED"
        };

        /**
         *
         * @param {WindowUnit.Units.*} value
         * @returns {number}
         */
        WindowUnit.getWindowUnitDefaultMaxValue = function (value) {
            switch (value) {
                case WindowUnit.Units.SECONDS:
                    return 60;
                case WindowUnit.Units.MINUTES:
                    return 60;
                case WindowUnit.Units.HOURS:
                    return 24;
                default:
                    return 1000;
            }
        };


        WindowUnit.rangeUnitsForStream = [
            new WindowUnit(WindowUnit.Units.NOW),
            new WindowUnit(WindowUnit.Units.NANOSECONDS),
            new WindowUnit(WindowUnit.Units.MICROSECONDS),
            new WindowUnit(WindowUnit.Units.MILLISECONDS),
            new WindowUnit(WindowUnit.Units.SECONDS),
            new WindowUnit(WindowUnit.Units.MINUTES),
            new WindowUnit(WindowUnit.Units.HOURS),
            new WindowUnit(WindowUnit.Units.ROWS),  //for Rows
            new WindowUnit(WindowUnit.Units.UNBOUNDED)
        ];

        /**
         *
         * @type {Object} - map : key : value for fast search
         */
        WindowUnit.rangeUnitsForStreamAsMap = null;

        WindowUnit.getRangeUnitsForStreamAsMap = function () {
            if (WindowUnit.rangeUnitsForStreamAsMap) {
                return WindowUnit.rangeUnitsForStreamAsMap;
            }
            var rangeUnitsForStreamAsMap = {};
            for (var i = 0; i < WindowUnit.rangeUnitsForStream.length; i++) {
                rangeUnitsForStreamAsMap[WindowUnit.rangeUnitsForStream[i].value] = WindowUnit.rangeUnitsForStream[i];
            }

            WindowUnit.rangeUnitsForStreamAsMap = rangeUnitsForStreamAsMap;
            return rangeUnitsForStreamAsMap;
        };

        /**
         *
         * @param {WindowUnit.Unit.*} value
         * @returns {number}
         */
        WindowUnit.getWindowUnitMaxValue = function (value) {
            return WindowUnit.getRangeUnitsForStreamAsMap()[value].maxValue;
        };


        WindowUnit.rangeUnitsForDataSource = [
            new WindowUnit(WindowUnit.Units.NOW)
        ];

        WindowUnit.availableSlideUnitsForRange = [
            new WindowUnit(WindowUnit.Units.NANOSECONDS),
            new WindowUnit(WindowUnit.Units.MICROSECONDS),
            new WindowUnit(WindowUnit.Units.MILLISECONDS),
            new WindowUnit(WindowUnit.Units.SECONDS),
            new WindowUnit(WindowUnit.Units.MINUTES),
            new WindowUnit(WindowUnit.Units.HOURS)
        ];

        WindowUnit.availableSlideUnitsForRows = [
            new WindowUnit(WindowUnit.Units.ROWS)
        ];


        WindowUnit.DEFAULT_RANGE_VALUE = 1;
        WindowUnit.DEFAULT_SLIDE_VALUE = 1;


        /**
         *
         * @param windowValue
         * @param windowUnit
         * @returns {number || null - if non possible}
         */
        WindowUnit.convertWindowUnitValueToNanoseconds = function (windowValue, windowUnit) {
            switch (windowUnit) {
                case WindowUnit.Units.NANOSECONDS:
                    return windowValue * 1; // implicit convert to Number, otherwise NaN ( NaN<=NaN == false )

                case WindowUnit.Units.ROWS:
                    return windowValue * 1; // implicit convert to Number, otherwise NaN ( NaN<=NaN == false )

                case WindowUnit.Units.MICROSECONDS:
                    return windowValue * 1000;

                case WindowUnit.Units.MILLISECONDS:
                    return windowValue * 1000000;

                case WindowUnit.Units.SECONDS:
                    return windowValue * 1000000000;

                case WindowUnit.Units.MINUTES:
                    return windowValue * 1000000000 * 60;

                case WindowUnit.Units.HOURS:
                    return windowValue * 1000000000 * 60 * 24;

                default:
                    return 0; //NOW  //UNBOUNDED
            }

            return 0;
        };

        WindowUnit.prototype.equals = function (windowUnit) {
            if (windowUnit == null || !(windowUnit instanceof WindowUnit)) {
                return false;
            }
            return this.value == windowUnit.value;
        };


        return WindowUnit;

    });


