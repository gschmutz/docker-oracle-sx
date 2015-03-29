/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 * @author Julia Shmeleva
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define(
    'TargetForm',[
        'jquery',
        'knockout',
        'Translate',
        'FieldType',
        'HelpController',
        'EventShapeThing',
        'TargetTypeThing',
        'TargetThing',
        'ServiceFactory',
        'EventTypeController',
        'ModalMessageDialog',
        'Utils',
        'ValidationTune',
        'tag-it'
    ],
    /**
     * @exports target
     * @ignore
     */
        function($,
                 ko,
                 Translate,
                 FieldType,
                 HelpController,
                 EventShapeThing,
                 TargetTypeThing,
                 TargetThing,
                 ServiceFactory,
                 EventTypeController,
                 ModalMessageDialog,
                 Utils) {

            var TARGET_DIALOG_CONTAINER = 'target-dialog-container';
            var TARGET_DIALOG_I18N_PATH = 'oep.targetDialog';
            var TARGET_DIALOG_CONTROL_SELECTOR = '.target-dialog-control';
            var TARGET_DIALOG_DATA_ATTR = 'data-target-dialog';

            var __ = function(key, i18n_path) {
                return Translate.getTranslated((i18n_path ? i18n_path : TARGET_DIALOG_I18N_PATH) + '.' + key);
            };

            /**
             * @class
             * @classdesc Target Creation Form Model
             * @param
             */
            function TargetForm() {
                var self = this;

                self.__ = __;

                self.streamEnabled = ko.observable(true);
                self.mappingNeeded = ko.observable(false);
                self.showEventTypesLoader = ko.observable(false);

                self.item = ko.observable(new TargetThing());

                self.eventTypesSelectCaption = ko.observable(__('EVENT_TYPE_CAPTION'));

                self.opts = {
                    scope: self,
                    beforeCancel: function() {
                        return true;
                    },
                    afterSave: function() {
                        return true;
                    }
                };

                setTargetVariables();
                setEventTypeVariables();
                setValidation();


                /*
                 * Get available exploration field for the selected target field type
                 */

                self.getExplorationEventTypeFields = function(type) {
                    var varName = 'mappableExplorationFieldsFor' + type;
                    if (!self.explorationFields[varName]) {
                        self.explorationFields[varName] = ko.observableArray([]);
                        $.each(EventTypeController.getInstance().deployedEventType, function(index, value) {
                            var explorationFieldType = value.field.type;
                            if (isMappable(explorationFieldType.name, type)) {
                                self.explorationFields[varName].push({alias: value.alias,
                                    name: value.field.name,
                                    type: explorationFieldType});
                            }
                        });
                    }
                    return self.explorationFields[varName];
                };

                /*
                 ******* Callback on buttons click
                 */

                self.onCancel = function() {
                    if (self.opts.beforeCancel.call(self.opts.scope)) {
                        self.dialog.dialog('close');
                    }
                };

                self.onSave = function() {
                    if (!self.streamEnabled()) {
                        return;
                    }

                    var valid = checkStep(1) && checkStep(2);
                    if (!valid) {
                        return;
                    }

                    self.streamEnabled(false);
                    saveTargetParameters();

                    self.opts.afterSave.call(self.opts.scope, self.item());
                    self.dialog.dialog('close');
                };

                self.onGetEventTypes = function() {
                    var valid = checkStep(1);
                    if (valid) {
                        saveTargetParameters();
                        getAvailableEventTypes();
                    }
                };

                self.onTargetParamChange = function(data, ev) {
                    self.availableEventTypes.removeAll();
                    self.predefinedEventTypeName = null;
                    self.predefinedTargetMapping = null;
                    checkButtons();
                    if (self.mappingNeeded()) {
                        self.streamEnabled(false);
                    }
                };

                self.onMappingParamChange = function(data, ev) {
                    self.targetMapping()[data.name] = ev.target.value;
                    checkFinishButton();
                };

                self.onEventTypeChange = function(data, ev) {
                    self.targetMapping({});
                    checkButtons();
                };

                self.onTargetTypeChange = function(data, ev) {
                    checkButtons();
                };



                /*
                 ******* Target dialog control methods: create, act, reset
                 */

                self.createDialog = function(action, data, opts) {
                    var elSelector = '#' + TARGET_DIALOG_CONTAINER;

                    if (!$(elSelector).length) {
                        $('body').append('<div id="' + TARGET_DIALOG_CONTAINER + '"></div>');

                        Utils.loadHtmlAsync(elSelector, 'html/targetForm.html', function() {
                            ko.applyBindings(self, document.getElementById(TARGET_DIALOG_CONTAINER));
                            Translate.getTranslated($(elSelector));

                            $("#target-dialog").dialog({
                                autoOpen: false,
                                dialogClass: 'target-dialog',
                                modal: true,
                                minWidth: 620,
                                minHeight: 360,
                                closeOnEscape: false,
                                closeText: null
                            });

                            self.dialog = $('#target-dialog');

                            HelpController.getInstance().setDialogTopicId(HelpController.SEND_DOWNSTREAM, self.dialog);

                            $('.target-form').validationEngine('attach', {
                                promptPosition: 'topLeft',
                                scroll: false,
                                onSuccess: $.noop,
                                onFailure: $.noop
                            });

                            self.act(action, data, opts);
                        });
                    }
                };

                self.act = function(action, data, opts) {
                    $.extend(self.opts, opts ? opts : {});

                    switch (action) {
                        case 'open':
                            self.reset(data, function() {
                                self.dialog.dialog('open');
                            });
                    }
                };

                self.reset = function(item, callback) {
                    self.streamEnabled(true);

                    resetExplorationFields();

                    ServiceFactory.getTargetTypeService().getList(null,
                        function(data) {
                            self.availableTargetTypes(data);

                            if (item) {
                                populateTargetParameters(item);
                            } else {
                                cleanTargetParameters();
                            }

                            if (typeof callback === 'function') {
                                callback.call(self);
                            }
                        });
                };


                /*
                 ********* Private methods
                 */

                function checkStep(step) {
                    if (step === 2 && !self.mappingNeeded()) {
                        return true;
                    }

                    var valid = $('#target-form-step-' + step).validationEngine('validate');
                    return valid;
                }

                function checkButtons() {
                    var validForSave = checkStep(1) && checkStep(2);
                    self.streamEnabled(validForSave);
                }

                function checkFinishButton() {
                    if (self.mappingNeeded()) {
                        var validEventType = self.selectedEventTypeName() && self.selectedEventType() !== null;
                        var validMapping = false;
                        $.each(self.targetMapping(), function(key, value) {
                            if (value) {
                                validMapping = true;
                                return;
                            }
                        });

                        self.streamEnabled(validEventType && validMapping);
                    }
                }

                function setTargetVariables() {
                    self.targetParameters = ko.observableArray([]);
                    self.targetMapping = ko.observable({});

                    self.availableTargetTypes = ko.observableArray([]);
                    self.selectedTargetTypeName = ko.observable();
                    self.selectedTargetType = ko.observable();

                    self.selectedTargetTypeName.subscribe(function(selectedTargetTypeName) {
                        var selectedTargetType = null;

                        if (selectedTargetTypeName && self.availableTargetTypes().length) {
                            $.each(self.availableTargetTypes(), function (index, item) {
                                if (item.name() === selectedTargetTypeName) {
                                    selectedTargetType = item;
                                    return false;
                                }
                            });
                        }

                        self.selectedTargetType(selectedTargetType);
                    });

                    self.selectedTargetType.subscribe(function(targetType) {
                        if (!targetType) {
                            cleanTargetParameters();
                            return;
                        }

                        self.mappingNeeded(targetType.mappingNeeded);

                        var parameters = [];
                        if (targetType.parameters) {
                            $.each(targetType.parameters(), function(index, config) {
                                parameters.push(buildTargetParam(config));
                            });
                        }
                        self.targetParameters(parameters);

                        self.availableEventTypes.removeAll();
                        self.selectedEventTypeName('');
                    });
                }

                function setEventTypeVariables() {
                    self.availableEventTypes = ko.observableArray();

                    self.selectedEventTypeName = ko.observable('');
                    self.selectedEventType = ko.observable(new EventShapeThing());
                    self.selectedEventTypeFields = ko.observableArray();
                    self.targetMapping = ko.observable({});

                    self.selectedEventTypeName.subscribe(function(selectedEventTypeName) {
                        var selectedEventType = new EventShapeThing();
                        var fields = [];
                        var mapping = {};

                        if (selectedEventTypeName && self.availableEventTypes().length) {
                            $.each(self.availableEventTypes(), function (index, item) {
                                if (item.name() === selectedEventTypeName) {
                                    selectedEventType = item;
                                    return false;
                                }
                            });

                            $.each(selectedEventType.fields(), function(key, value) {
                                var targetField = {name: key, type: value};
                                fields.push(targetField);
                                if (self.predefinedTargetMapping) {
                                    mapping[targetField.name] = self.predefinedTargetMapping[targetField.name];
                                } else {
                                    mapping[targetField.name] = getDefaultMappingField(targetField);
                                }
                            });
                        }

                        self.selectedEventType(selectedEventType);
                        self.selectedEventTypeFields(fields);
                        self.targetMapping(mapping);
                    });
                }

                function getAvailableEventTypes() {
                    self.streamEnabled(false);

                    self.availableEventTypes.removeAll();
                    self.selectedEventTypeName('');

                    self.showEventTypesLoader(true);
                    self.eventTypesSelectCaption(__('LOADING_EVENT_TYPES_TEXT', 'oep.field'));

                    ServiceFactory.getEventShapeService().getListForTargetType(
                        self.item().typeName(),
                        self.item().parameters(),
                        null,
                        function(data) {
                            self.showEventTypesLoader(false);
                            self.eventTypesSelectCaption(__('EVENT_TYPE_CAPTION'));

                            self.availableEventTypes(data);

                            if (self.predefinedEventTypeName) {
                                self.selectedEventTypeName(self.predefinedEventTypeName);
                                checkButtons();
                            }
                        },
                        function(data) {
                            self.showEventTypesLoader(false);
                            self.eventTypesSelectCaption(__('ERROR_GET_EVENT_TYPES'));
                            ModalMessageDialog.open({
                                type: 'error',
                                header: __('ERROR_GET_EVENT_TYPES'),
                                messages: [{
                                    type: 'error',
                                    text: data.error
                                }]
                            });
                        });
                }

                function resetExplorationFields() {
                    self.explorationFields = {};
                }

                function getDefaultMappingField(targetField) {
                    var mappingName = null;
                    var explorationFields = self.getExplorationEventTypeFields(targetField.type);
                    $.each(explorationFields(), function(index, explorationField) {
                        if (targetField.name === explorationField.name) {
                            mappingName = explorationField.name;
                        }
                    });
                    return mappingName;
                }

                function isMappable(explorationFieldType, targetFieldType) {
                    var mappableTypes = FieldType.MAPPING[explorationFieldType];
                    if (mappableTypes && mappableTypes.indexOf(targetFieldType) !== -1) {
                        return true;
                    }
                    return false;
                }

                function setValidation() {
                    //var validationRules = Translate.getTranslated('oep.validationEngine', {returnBundleValue: true});
                    //$.validationEngineLanguage.allRules = validationRules;
                    $.validationEngine.defaults.showOneMessage = true;
                    $.validationEngine.defaults.maxErrorsPerField = 1;
                    /*$.extend(validationRules, {
                     'url': {
                     "regex": /^(https?|ftp?|t3):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                     //				                    "regex": /^(https?|ftp?|t3)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)((\:[0-9]+)?)(\/?)$/i,
                     "alertText": "Invalid URL"
                     }, "channel": {
                     "regex": /^(\w|-|\/)(\w|-|\.|\/)+$/,
                     "alertText":__('VALIDATION_ERROR_CHANNEL_FORMAT')
                     }
                     }, true);*/
                }

                function saveTargetParameters() {
                    self.item().typeName(self.selectedTargetTypeName());

                    if (self.mappingNeeded()) {
                        self.item().consumedEventType(self.selectedEventType());
                        self.item().mapping(self.targetMapping());
                    }

                    self.item().parameters({});
                    $.each(self.targetParameters(), function(typeIndex, typeItem) {
                        self.item().parameters()[typeItem.name] = typeItem.value();
                    });
                }

                function cleanTargetParameters() {
                    self.selectedTargetTypeName('');
                    self.targetParameters.removeAll();
                    self.targetMapping({});
                    self.mappingNeeded(false);
                    self.streamEnabled(true);
                }

                function populateTargetParameters(savedTarget) {

                    self.item(savedTarget);
                    self.selectedTargetTypeName(self.item().typeName());

                    $.each(self.targetParameters(), function(index, parameter) {
                        var savedParameter = self.item().parameters()[parameter.name];
                        if (savedParameter) {
                            parameter.value(savedParameter);
                        }
                    });

                    self.selectedEventType(self.item().consumedEventType());
                    self.targetMapping(self.item().mapping());

                    //Needed for show previously saved event type, when getEventTypes button is pressed
                    self.predefinedEventTypeName = self.item().consumedEventType().name();
                    self.predefinedTargetMapping = self.item().mapping();

                    checkStep(1);
                    self.streamEnabled(true);
                }

                function buildTargetParam(config) {
                    var param = {};

                    param.name = config.name;
                    param.description = config.description;
                    param.displayName = config.displayName ? config.displayName : config.name;
                    param.required = config.required;
                    param.validators = config.required ? 'required' : '';
                    param.value = ko.observable(config.value ? config.value : '');

                    var type = config.type ? config.type.toLowerCase() : '';
                    var validator = config.validator ? config.validator.toLowerCase() : '';
                    switch (type) {
                        case 'boolean':
                            param.widget = 'checkbox';
                            param.cls = 'oj-checkbox oj-enabled';
                            param.value(param.value() ? true : false);
                            break;
                        default:
                            if (config.options) {
                                param.widget = 'select';
                                param.cls = 'oj-select oj-inputtext oj-inputtext-input';
                                param.options = config.options;
                            } else if (validator && validator.search('\\bpassword\\b') > -1) {
                                param.widget = 'password';
                                param.cls = 'oj-inputpassword oj-inputpassword-input';
                            } else {
                                param.widget = 'input';
                                param.cls = 'oj-inputtext oj-inputtext-input';
                                if (validator) {
                                    param.validators += (param.validators.length ? ',' : '') + validator;
                                }

                                if (type === 'url') {
                                    param.validators += (param.validators.length ? ',' : '') + 'custom[url]';
                                }
                            }
                    }

                    return param;
                }
            }

            TargetForm.bind = function() {
                $(TARGET_DIALOG_CONTROL_SELECTOR).click(function() {
                    TargetForm.getInstance('open', $(this).attr(TARGET_DIALOG_DATA_ATTR));
                });
            };

            TargetForm.getInstance = function(action, data, opts) {
                if (!TargetForm._instance) {
                    TargetForm._instance = new TargetForm();
                    TargetForm._instance.createDialog(action, data, opts);
                } else {
                    TargetForm._instance.act(action, data, opts);
                }
            };

            TargetForm.form = TargetForm.getInstance;
            TargetForm.Object = TargetThing;

            return TargetForm;
    }
);
