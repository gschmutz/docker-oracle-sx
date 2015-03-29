/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
    'PatternController', [
        'jquery',
        'knockout',
        'select2',
        'Translate',
        'WindowUnit',
        'PatternParameter',
        'ExplorationKoModel',
        'SourceStorage',
        'HelpBannerPanel',
        'UserAssistance',
        'ExplorationUtils',

        'ServiceFactory',
        'HelpController',
        'Utils',

        'ojs/ojinputnumber'
    ],

    /**
     * @exports pattern
     * @ignore
     */
    function ($, ko, select2, Translate, WindowUnit, PatternParameter, ExplorationKoModel, SourceStorage, HelpBannerPanel, UserAssistance, ExplorationUtils, ServiceFactory, HelpController, Utils) {
        var PATTERN_FORM_SELECTOR = '#pattern-form';

        /**
         * @class
         * @classdesc Pattern Form Model
         */
        function PatternController() {
            var self = this;
            var explorationKoModel = ExplorationKoModel.getInstance();
            var exUtils = ExplorationUtils.getInstance();

            self.PatternParameter = PatternParameter;

            self.patternForm = null;
            self.exploration = null;
            self.pattern = null;


            /**
             * exploration pattern parameters( exploration data from backend )
             * (if new exploration - this value is empty)
             *
             * @see ExplorationConverter.jsonToExploration
             *
             * @type {Exploration.patternParameters|*}
             */
            self.explPatternParameters = null;


            self.onOpenExplorationEditor = function () {

                self.patternForm = $(PATTERN_FORM_SELECTOR);
                self.exploration = explorationKoModel.exploration();
                self.pattern = self.exploration.pattern;
                self.explPatternParameters = self.exploration.patternParameters ? self.exploration.patternParameters : {};


                SourceStorage.getInstance().onOpenExploration();
                self.initHelpBannerPanel();
                self.initPatternParameters();
                ko.applyBindings(self, self.patternForm[0]);
                self.initSelect2UIControlsForPatternParameters();
                self.patternParametersInitialized();
                HelpController.getInstance().setPageTopicId(self.pattern.helpId);
            };

            self.patternParametersInitialized = function () {
                self.patternForm.addClass('patternParametersInitialized');
            };

            self.initHelpBannerPanel = function () {
                UserAssistance.getInstance().setUserAssistanceContent(
                    {
                        header: self.exploration.pattern.displayName(),
                        content: self.exploration.pattern.description()
                    }
                );

                HelpBannerPanel.panel('open');
            };


            self.initPatternParameters = function () {
                self.convertPatternParametersToKoObservable();

                $.each(self.pattern.parameters(), function (index, parameter) {
                    var explPatternParameterValue = null;


                    switch (parameter.type()) {

                        case PatternParameter.TYPE.event_source:

                            var sources = SourceStorage.getInstance().getSources();
                            explPatternParameterValue = self.explPatternParameters[parameter.name()];

                            for (var i = 0; i < sources.length; i++) {
                                var source = sources[i];
                                parameter.options.push({
                                    value: source.name,
                                    text: source.displayName
                                });
                                if (source.name === explPatternParameterValue) {
                                    parameter.value(explPatternParameterValue);
                                }
                            }
                            break;

                        case PatternParameter.TYPE.range:
                            parameter.options(WindowUnit.rangeUnitsForStream);

                            explPatternParameterValue = self.explPatternParameters[parameter.name()] ? self.explPatternParameters[parameter.name()] : {};
                            if (explPatternParameterValue.value) {
                                parameter.valueValue(explPatternParameterValue.value);
                            }
                            if (explPatternParameterValue.unit) {
                                parameter.unitValue(explPatternParameterValue.unit);
                            }

                            parameter.showValue = ko.computed(function () {
                                return this.unitValue() !== WindowUnit.Units.NOW && this.unitValue() !== WindowUnit.Units.UNBOUNDED;
                            }, parameter);
                            break;

                        case PatternParameter.TYPE.interval:
                            parameter.options(WindowUnit.availableSlideUnitsForRange);

                            explPatternParameterValue = self.explPatternParameters[parameter.name()] ? self.explPatternParameters[parameter.name()] : {};
                            if (explPatternParameterValue.value) {
                                parameter.valueValue(explPatternParameterValue.value);
                            }
                            if (explPatternParameterValue.unit) {
                                parameter.unitValue(explPatternParameterValue.unit);
                            }

                            parameter.showValue = ko.computed(function () {
                                return true;
                            }, parameter);
                            break;


                        case PatternParameter.TYPE.source_field_list:
                        case PatternParameter.TYPE.source_field:
                            if (parameter.dependsOn().length == 1) { // for current release any parameter depends only on single dependency
                                var dependsOnParameterName = parameter.dependsOn()[0];
                                var dependsOnParameter = Utils.findByKoObservableName(dependsOnParameterName, self.pattern.parameters());

                                if (dependsOnParameter && dependsOnParameter.type() === PatternParameter.TYPE.event_source) {
                                    var sourceId = dependsOnParameter.value();
                                    self.updateParameterOptionsThatDependsOnSource(sourceId, parameter);
                                }

                                explPatternParameterValue = self.explPatternParameters[parameter.name()];
                                if (explPatternParameterValue) {
                                    parameter.value(explPatternParameterValue);
                                }
                            }
                            break;

                        default:
                            // PatternParameter.TYPE.integer
                            explPatternParameterValue = self.explPatternParameters[parameter.name()];
                            if (explPatternParameterValue) {
                                parameter.value(explPatternParameterValue);
                            }
                            break;


                    }
                });
            };

            self.convertPatternParametersToKoObservable = function () {
                $.each(self.pattern.parameters(), function (index, parameter) {
                    $.each(parameter, function (key, value) {
                        if (!ko.isObservable(parameter[key])) {
                            if (Array.isArray(parameter[key])) {
                                parameter[key] = ko.observableArray(value);
                            } else {
                                parameter[key] = ko.observable(value);
                            }
                        }
                    });
                });
                console.log('CONVERTED PATTERN PARAMETERS', self.pattern.parameters());
            };


            /**
             *
             * @param {string} sourceId
             * @param {PatternParameter} dependentParameter
             */
            self.updateParameterOptionsThatDependsOnSource = function (sourceId, dependentParameter) {
                dependentParameter.options([]);


                if (sourceId) {
                    var source = SourceStorage.getInstance().getSourceBySourceId(sourceId);
                    if (source && source.fields) {
                        for (var i = 0; i < source.fields.length; i++) {
                            var field = source.fields[i];
                            dependentParameter.options.push({
                                value: field.name,
                                text: field.name
                            });
                        }
                    }
                }
            };


            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            self.isSelect2Component = function (parameter) {
                return parameter.type() === PatternParameter.TYPE.source_field_list ||
                    parameter.type() === PatternParameter.TYPE.event_source ||
                    parameter.type() === PatternParameter.TYPE.source_field;
            };


            self.initSelect2UIControlsForPatternParameters = function () {

                var parameters = self.pattern.parameters();
                for (var i = 0; i < parameters.length; i++) {
                    var parameter = parameters[i];
                    if (self.isSelect2Component(parameter)) {
                        self.initSelect2Component(parameter);
                    }
                }
            };


            /**
             *
             * @param parameter
             */
            self.initSelect2Component = function (parameter) {
                if (parameter.type() === PatternParameter.TYPE.event_source) {
                    self.initSourceSelect2Component(parameter);

                } else if (parameter.type() === PatternParameter.TYPE.source_field) {
                    self.initSourceFieldSelect2Component(parameter);

                } else if (parameter.type() === PatternParameter.TYPE.source_field_list) {
                    self.initSourceFieldsSelect2Component(parameter);
                }

            };

            /**
             *
             * @param parameter
             */
            self.initSourceSelect2Component = function (parameter) {
                var select2Component = self.getSelect2Component(parameter);

                var select2 = select2Component.select2({
                            placeholder: exUtils.sourcesComboboxPlaceholder,
                            containerCssClass: exUtils.select2ComponentContainerForPatternBasedExploration,
                            maximumSelectionSize: 1,
                            width: 'off',
                            dropdownAutoWidth: false,
                            minimumInputLength: 0,
                            data: function () {
                                return {text: 'text', results: parameter.options()};
                                /** @see self.initPatternParameters
                                 @see  self.updateParameterOptionsThatDependsOnSource                 */
                            },
                            id: function (source) {
                                return source ? source.value : null;
                            },
                            //formatSelection: colorCodingFormat,  //Function used to render the current selection.
                            //formatResult: colorCodingFormat,     //Function used to render a result that the user can select.
                            //formatNoMatches: formatNoMatches,
                            multiple: true,
                            escapeMarkup: function (m) {
                                return m;
                            }
                        }
                    )
                    ;

                //init
                var value = parameter.value();
                var data = Utils.findByParameterValue("value", value, parameter.options());
                select2.select2("data", data);

                //listener
                select2.on("change", function (event) {
                    self.onSourceSelect2Change(select2, parameter);
                });
            };


            /**
             * one field select2 component
             *
             * @param parameter
             */
            self.initSourceFieldSelect2Component = function (parameter) {
                var select2Component = self.getSelect2Component(parameter);

                var select2 = select2Component.select2({
                            placeholder: exUtils.fieldComboboxPlaceholder,
                            containerCssClass: exUtils.select2ComponentContainerForPatternBasedExploration,
                            maximumSelectionSize: 1,
                            width: 'off',
                            dropdownAutoWidth: false,
                            minimumInputLength: 0,
                            data: function () {
                                return {text: 'text', results: parameter.options()};
                            },
                            id: function (sourceField) {
                                return sourceField ? sourceField.value : null;
                            },
                            //formatSelection: colorCodingFormat,  //Function used to render the current selection.
                            //formatResult: colorCodingFormat,     //Function used to render a result that the user can select.
                            //formatNoMatches: formatNoMatches,
                            multiple: true,
                            escapeMarkup: function (m) {
                                return m;
                            }
                        }
                    )
                    ;

                //init
                var value = parameter.value();
                var data = Utils.findByParameterValue("value", value, parameter.options());
                select2.select2("data", data);

                //listener
                select2.on("change", function (event) {
                    onFieldSelect2Change(select2, parameter);
                });
            };


            /**
             * many fields select2 component
             *
             * @param parameter
             */
            self.initSourceFieldsSelect2Component = function (parameter) {
                var select2Component = self.getSelect2Component(parameter);

                var select2 = select2Component.select2({
                            placeholder: exUtils.fieldsComboboxPlaceholder,
                            containerCssClass: exUtils.select2ComponentContainerForPatternBasedExploration,
                            //maximumSelectionSize: colorCoding.colors.length,
                            width: 'off',
                            dropdownAutoWidth: false,
                            minimumInputLength: 0,
                            data: function () {
                                return {text: 'text', results: parameter.options()};
                            },
                            id: function (sourceField) {
                                return sourceField ? sourceField.value : null;
                            },
                            //formatSelection: colorCodingFormat,  //Function used to render the current selection.
                            //formatResult: colorCodingFormat,     //Function used to render a result that the user can select.
                            //formatNoMatches: formatNoMatches,
                            multiple: true,
                            escapeMarkup: function (m) {
                                return m;
                            }
                        }
                    )
                    ;

                //init
                var value = parameter.value();
                var data = Utils.findByParameterValues("value", value, parameter.options());
                select2.select2("data", data);

                //listener
                select2.on("change", function (event) {
                    onFieldsSelect2Change(select2, parameter);
                });
            };


            /**
             *
             * @param parameter
             * @returns {*|HTMLElement|EventTarget}
             */
            self.getSelect2Component = function (parameter) {
                var componentId = '#pattern-parameter-' + parameter.name();
                return self.patternForm.find(componentId);
            };


            /**
             * check if parameter required also
             *
             * @returns {boolean}
             */
            self.isAllPatternParametersValid = function () {

                var isAllPatternParametersValid = true;

                for (var j = 0; j < self.pattern.parameters().length; j++) {
                    var parameter = self.pattern.parameters()[j];


                    switch (parameter.type()) {

                        case PatternParameter.TYPE.interval:
                        case PatternParameter.TYPE.range:
                            if (parameter.required() && !parameter.valueValue()) {
                                isAllPatternParametersValid = false;
                            }
                            if (parameter.required() && !parameter.unitValue()) {
                                isAllPatternParametersValid = false;
                            }
                            break;

                        case PatternParameter.TYPE.source_field:
                        case PatternParameter.TYPE.event_source:
                            if (parameter.required() && !parameter.value()) {
                                isAllPatternParametersValid = false;
                            }
                            break;

                        case PatternParameter.TYPE.source_field_list:
                            if (parameter.required() && !(parameter.value() && parameter.value().length > 0)) {
                                isAllPatternParametersValid = false;
                            }
                            break;

                        case PatternParameter.TYPE.integer:
                            if (parameter.required() && !(parameter.value() && Utils.isIntegerValue(parameter.value()) )
                            ) {
                                isAllPatternParametersValid = false;
                            }
                            break;


                        default:
                            if (parameter.required() && !parameter.value()) {
                                isAllPatternParametersValid = false;
                            }
                            break;
                    }

                    if (isAllPatternParametersValid === false) {
                        break;                                      //exit from cycle if any cycle parameter not valid
                    }
                }   //for

                return isAllPatternParametersValid;
            };


            /**
             *
             * @param {PatternParameter} changedParameter
             * @param value
             */
            self.onRangeOrIntervalHtmlSelectChange = function (changedParameter, jqEvent) {
                //var value = jqEvent.currentTarget.value;
                self.callDeployExplorationTriggerIfAllPatternParametersValid();
            };

            /**
             *
             * @param {PatternParameter} changedParameter
             * @param jqEvent
             */
            self.onInputChange = function (changedParameter, jqEvent) {
//                var value = jqEvent.currentTarget.value;
//                var changedParameterValue = changedParameter.value();
                console.log('INPUT CHANGED:', changedParameter.name(), changedParameter.type(), changedParameter);

                var isDependentParameters = false;
                for (var i = 0; i < self.pattern.parameters().length; i++) {
                    var parameter = self.pattern.parameters()[i];
                    if (parameter.dependsOn().indexOf(changedParameter.name()) > -1) {
                        isDependentParameters = true;
                        break;
                    }
                }

                if (isDependentParameters === false) {
                    self.callDeployExplorationTriggerIfAllPatternParametersValid();
                }

            };

            /**
             *
             * @param select2
             * @param parameter
             */
            function onFieldsSelect2Change(select2, parameter) {
                var value = select2.select2("val");
                parameter.value(value);

                self.callDeployExplorationTriggerIfAllPatternParametersValid();
            }


            /**
             *
             * @param select2
             * @param parameter
             */
            function onFieldSelect2Change(select2, parameter) {
                var value = select2.select2("val");
                if (value) {
                    parameter.value(value[0]);
                }

                self.callDeployExplorationTriggerIfAllPatternParametersValid();
            }


            /**
             *
             * @param {PatternParameter} changedParameter
             * @param value
             */
            self.onSourceSelect2Change = function (select2, parameter) {

                var value = select2.select2("val");
                if (value) {
                    parameter.value(value[0]);
                }

                if (self.ifDependentParametersFoundedUpdateThem(parameter) === false) {

                    //if (self.validateParameter()) {
                    self.callDeployExplorationTriggerIfAllPatternParametersValid();
                    //}
                }
            };


            self.callDeployExplorationTriggerIfAllPatternParametersValid = function () {
                if (self.isAllPatternParametersValid()) {
                    ExplorationKoModel.getInstance().deployExplorationTrigger(true);

                }
            };


            /**
             *
             * @param {PatternParameter} parameter
             * @returns {boolean} - return true - if dependencies founded
             */
            self.ifDependentParametersFoundedUpdateThem = function (parameter) {
                var isDependentParameters = false;
                var parameters = self.pattern.parameters();

                for (var i = 0; i < parameters.length; i++) {
                    var dependentParameter = parameters[i];
                    if (dependentParameter.dependsOn().indexOf(parameter.name()) > -1) {
                        isDependentParameters = true;

                        if (parameter.type() === PatternParameter.TYPE.event_source
                            && (dependentParameter.type() === PatternParameter.TYPE.source_field_list
                            || dependentParameter.type() === PatternParameter.TYPE.source_field)
                        ) {
                            self.updateParameterOptionsThatDependsOnSource(parameter.value(), dependentParameter);
                            self.resetSelect2Parameter(dependentParameter);
                        }
                    }
                }

                return isDependentParameters;
            };


            /**
             *
             * @param parameter
             */
            self.resetSelect2Parameter = function (parameter) {
                var select2Component = self.getSelect2Component(parameter);
                select2Component.select2("data", null, true);

            };


            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            self.isInteger = function (parameter) {
                var type = parameter.type();
                return type === PatternParameter.TYPE.integer;
            };

            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            self.isRangeOrInterval = function (parameter) {
                var type = parameter.type();
                return type === PatternParameter.TYPE.interval ||
                    type === PatternParameter.TYPE.range;
            };


            /**
             *
             * @param parameter
             * @returns {boolean}
             */
            self.isCheckBox = function (parameter) {
                //TODO next release
                return false;
            };


        }

        /**
         * ojet hack : ojinputnumber: workaround to trigger event on ojinputnumber spin button pressed
         *
         * for autodeploy perpose
         * @see self.onInputChange
         *
         */
        PatternController.overrideOjInputNumberMethod_spin = function () {

            var ojInputNumberPrototype = $.oj.ojInputNumber.prototype;
            var oldMethod = ojInputNumberPrototype._spin;
            ojInputNumberPrototype._spin = function (step, event) {
                // apply old method
                oldMethod.apply(this, arguments);
                if (this.element) {
                    $(this.element).trigger("change");
                }
            };

        };
        PatternController.overrideOjInputNumberMethod_spin();


        /**
         * Get instance of singleton
         *
         * @static
         * @return {PatternController}
         */
        PatternController.getInstance = function () {
            if (!this.instance) {
                this.instance = new PatternController();
            }
            return this.instance;
        };


        return PatternController;
    }
);
