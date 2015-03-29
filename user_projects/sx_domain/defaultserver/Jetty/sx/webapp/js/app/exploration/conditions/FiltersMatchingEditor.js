/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('FiltersMatchingEditor', [
        'jquery',
        'knockout',
        'Utils',
        'ExplorationUtils'
    ],

    /**
     * @exports exploration/metadata
     * @version 1.0
     */
    function ($, ko, Utils, ExplorationUtils) {


        /**
         * @class
         * @classdesc swith to Edit mode, if click on Filters Matching Mode
         * @see Exploration.conditionsMatching
         * @constructor
         */
        function FiltersMatchingEditor() {
            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;

        }


        FiltersMatchingEditor.prototype.onOpenExplorationEditor = function (exploration) {

            var conditionMatching = $(this.exUtils.conditionMatching);
            conditionMatching.append(this.exUtils.filtersMatchingPattern);
            var filtersMatchingContent = $(this.exUtils.filtersMatchingContent);
            Utils.translateJqueryElement(filtersMatchingContent);
            ko.applyBindings(this.explorationKoModel, filtersMatchingContent[0]);

            this.initConditionsMatchingInput(exploration);
            this.initConditionsMatchingInputListener();

            var filtersMatchingEditor = $(this.exUtils.filtersMatchingEditor);

//            this.initEditModeFocusInListener(filtersMatchingEditor);
//            this.initEditModeFocusOutListener(filtersMatchingEditor);
        };


        /**
         *
         * @param {Exploration} exploration
         */
        FiltersMatchingEditor.prototype.initConditionsMatchingInput = function (exploration) {
            if ($(this.exUtils.conditionMatchingAny).val() == exploration.conditionsMatching()) {
                $(this.exUtils.conditionMatchingAll).prop("checked", false);
                $(this.exUtils.conditionMatchingAny).prop("checked", true);
            } else {
                $(this.exUtils.conditionMatchingAll).prop("checked", true);
                $(this.exUtils.conditionMatchingAny).prop("checked", false);
            }


        };

        /**
         * radio button set without name attribute
         *
         */
        FiltersMatchingEditor.prototype.initConditionsMatchingInputListener = function () {
            var self = this;
            $(this.exUtils.conditionMatchingAny).on('click', function () {
                self.explorationKoModel.exploration().conditionsMatching($(this).val());
                $(self.exUtils.conditionMatchingAll).prop("checked", false);
            });

            $(this.exUtils.conditionMatchingAll).on('click', function () {
                self.explorationKoModel.exploration().conditionsMatching($(this).val());
                $(self.exUtils.conditionMatchingAny).prop("checked", false);
            });


        };

        /**
         * exit edit Mode when focusOut
         * @param condition
         */
        FiltersMatchingEditor.prototype.initEditModeFocusInListener = function (container) {
            var self = this;
            this.explorationKoModel.exploration().isFiltersMatchingReadMode.subscribe(function (isFiltersMatchingReadMode) {
                if (!isFiltersMatchingReadMode) {
                    container.focus();
                }
            });

        };

        /**
         * exit edit Mode when focusOut
         * @param condition
         */
        FiltersMatchingEditor.prototype.initEditModeFocusOutListener = function (container) {
            var self = this;
            container.focusout(
                function (evt) {
                    evt.preventDefault();

                    setTimeout(
                        $.proxy(function () {            //switch off to edit mode
                            var activeElement = document.activeElement;
//                            console.log("activeElement: ", activeElement);
                            if (activeElement !== null
                                && !container.is(activeElement)//not  container
                                && container.has(activeElement).length === 0  //not internal element
                            ) {
                                self.explorationKoModel.exploration().isFiltersMatchingReadMode(true);
                            }
                        }, self), 20
                    )
                    ;
                }
            )
            ;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {FiltersMatchingEditor}
         */
        FiltersMatchingEditor.getInstance = function () {
            if (!this.instance) {
                this.instance = new FiltersMatchingEditor();
            }
            return this.instance;
        };


        return FiltersMatchingEditor;

    }
)
;
