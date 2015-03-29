/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
    'PatternThing',
    ['jquery', 'knockout', 'Thing', 'PatternParameter', 'ojs/ojcore', 'ojs/ojknockout'],
    /**
     * @exports pattern
     * @ignore
     */
    function ($, ko, Thing, PatternParameter) {
        /**
         * @class
         * @classdesc Exploration entity for viewing and editing this entity
         * @param data
         */

        function PatternThing(data) {
            var self = this;

            self.base = Thing.call(self, data).virtualMethods;
            self.config.fields.push('parameters');
            self.parameters = ko.observableArray([]);
            self.helpId = null;

            self.init = function (data) {
                self.base.init(data);

                $.each(self.parameters(), function (index, parameter) {

                    parameter.type = parameter.type.toLowerCase();
                    parameter.displayName = parameter.displayName ? parameter.displayName : parameter.name;
                    //TODO: check the reason to set observable here.
                    parameter.value = ko.observable(parameter.value ? parameter.value : '');
                    parameter.options = parameter.options ? parameter.options : [];

                    parameter.validator = parameter.validator ? parameter.validator.toLowerCase() : '';
                    parameter.validator = parameter.validator + (parameter.validator.length ? ' ' : '') + parameter.required ? 'required' : '';
                    parameter.validator = parameter.validator.replace(/\burl\b/g, 'custom[url]');

                    switch (parameter.type) {
                        case PatternParameter.TYPE.source_field:
                            parameter.widget = 'select';
                            parameter.options = [];
                            parameter.cls = 'oj-select oj-inputtext oj-inputtext-input';
                            break;
                        case PatternParameter.TYPE.event_source:
                            parameter.widget = 'select';
                            parameter.options = [];
                            parameter.cls = 'oj-select oj-inputtext oj-inputtext-input';
                            break;
                        case PatternParameter.TYPE.source_field_list:
                            parameter.widget = 'multiselect';
                            parameter.options = [];
                            parameter.cls = 'oj-select oj-inputtext oj-inputtext-input';
                            break;
                        case PatternParameter.TYPE.interval:
                            parameter.widget = PatternParameter.TYPE.interval;
                            parameter.cls = '',
                                parameter.valueCls = 'oj-inputtext oj-inputtext-input pattern-range-value';
                            parameter.valueValidator = '';
                            parameter.valueValue = 1;
                            parameter.unitCls = 'oj-select oj-inputtext oj-inputtext-input pattern-range-units';
                            parameter.unitValidator = 'required';
                            parameter.unitValue = 'SECONDS';
                            break;
                        case PatternParameter.TYPE.range:
                            parameter.widget = PatternParameter.TYPE.range;
                            parameter.cls = '',
                                parameter.valueCls = 'oj-inputtext oj-inputtext-input pattern-range-value';
                            parameter.valueValidator = '';
                            parameter.valueValue = 1;
                            parameter.unitCls = 'oj-select oj-inputtext oj-inputtext-input pattern-range-units';
                            parameter.unitValidator = 'required';
                            parameter.unitValue = 'NOW';
                            break;
                        case PatternParameter.TYPE.integer:
                            //param.widget = 'input';
                            //param.cls = 'oj-inputtext oj-inputtext-input';
                            parameter.widget = 'integer';
                            parameter.value = 1;
                            break;
                        default:
                            if (parameter.validator.search('\bpassword\b') > -1) {
                                parameter.widget = 'password';
                                parameter.cls = 'oj-inputpassword oj-inputpassword-input';
                            } else {
                                parameter.widget = 'input';
                                parameter.cls = 'oj-inputtext oj-inputtext-input';
                            }
                    }
                });

                console.log('PATTERN THING PARAMETERS', self.parameters());
            };

            self.init(data);
        };

        return PatternThing;
    }
);


