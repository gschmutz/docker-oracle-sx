/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('SourceForm', [
        'jquery',
        'knockout',
        'Translate',
        'HelpController',
        'EventShapeThing',
        'SourceTypeThing',
        'SourceThing',
        'ServiceFactory',
        'FieldType',
        'ModalMessageDialog',
        'Notifications',
        'NotificationType',
        'ProgressBar',
        'Utils',
        'ValidationTune',
        'tag-it'
    ],
    /**
     * @exports source
     * @ignore
     */
    function ($,
              ko,
              Translate,
              HelpController,
              EventShapeThing,
              SourceTypeThing,
              SourceThing,
              ServiceFactory,
              FieldType,
              ModalMessageDialog,
              Notifications,
              NotificationType,
              ProgressBar,
              Utils) {

        var SOURCE_DIALOG_CONTAINER = 'source-dialog-container';
        var SOURCE_DIALOG_I18N_PATH = 'oep.sourceDialog';
        var SOURCE_DIALOG_SOURCE_TAGS = 'source-tags';
        var SERVICE_BASE_URL = 'webresources/v0.1/';
        var DEFAULT_EVENT_FIELD_TYPES = FieldType.FieldTypes;
        var TYPES_WITHOUT_MANUAL_EVENT = ['EDN', 'DBTableSourceType'];

        var __ = function (key, i18n_path, options) {
            return Translate.getTranslated((i18n_path ? i18n_path : SOURCE_DIALOG_I18N_PATH) + '.' + key, options ? options : null);
        };


        /**
         * @class
         * @classdesc Source Creation Form Model
         * @param
         */
        function SourceForm() {
            var self = this;

            self.__ = __;

            self.tagUrl = SERVICE_BASE_URL + 'tag';
            self.utilUrl = SERVICE_BASE_URL + 'utils';

            self.step = ko.observable(1);
            self.step.subscribe(function(step) {
                self.setHelpTopic(step);
            });

            self.passedSteps = [];
            self.backEnabled = ko.observable(false);
            self.nextEnabled = ko.observable(false);
            self.saveEnabled = ko.observable(false);
            self.eventTypeMode = ko.observable('select');
            self.manualEventType = ko.observable(new EventShapeThing());
            self.manualEventTypeFields = ko.observableArray([]);
            self.sourceTypeChanged = ko.observable(false);

            self.item = ko.observable(new SourceThing());

            self.sourceParameters = ko.observableArray([]);
            self.sourceTypes = ko.observableArray([]);
            self.sourceTypeSelected = ko.observable({});

            self.toOpenExploration = ko.observable(true);
            self.isCreateExplorationCheckBoxVisible = ko.observable(true);

            self.eventTypes = ko.observableArray([]);
            self.selectedEventTypeName = ko.observable('');
            self.eventTypeSelected = ko.observable(new EventShapeThing());
            self.eventTypeFieldTypes = ko.observableArray([].concat(DEFAULT_EVENT_FIELD_TYPES));
            self.eventTypesSelectCaption = ko.observable(__('EVENT_TYPE_CAPTION'));
            self.showEventTypesLoader = ko.observable(false);
            self.savingInProcess = ko.observable(false);

            self.reset = function (item, callback) {
                self.step(1);
                self.passedSteps = [];
                self.backEnabled(false);
                self.nextEnabled(false);
                self.saveEnabled(false);
                self.eventTypeMode('select');
                self.sourceParameters([]);
                self.sourceTypeChanged(false);
                self.manualEventType(new EventShapeThing());
                self.manualEventTypeFields([]);
                self.addEmptyManualEventTypeField();
                self.eventTypeFieldTypes([].concat(DEFAULT_EVENT_FIELD_TYPES));

                self.selectedEventTypeName('');
                self.eventTypeSelected(new EventShapeThing());
                self.toOpenExploration(item ? false : true);
                self.isCreateExplorationCheckBoxVisible(self.opts.isStream);
                self.tagsEl.tagit('removeAll');

                self.getStepForm(1).validationEngine('hideAll');
                self.getStepForm(2).validationEngine('hideAll');
                self.getStepForm(3).validationEngine('hideAll');

                ServiceFactory.getSourceTypeService().getList(null, function (data) {

                    var sourceTypesFilteredByWindowable = data.filter(
                        function (sourceType) {
                            return (self.opts.isStream === null) ? true  //if null : you can select between all  source types : windowable and no windowable
                                : self.opts.isStream === sourceType.windowable;
                        }
                    );

                    self.sourceTypes(sourceTypesFilteredByWindowable);

                    if (item) {
                        $.each(item.producedEventType().fields(), function (key, value) {
                            var found = false;
                            $.each(self.eventTypeFieldTypes(), function (index, item) {
                                if (item.name === value) {
                                    found = true;
                                    return false;
                                }
                            });
                            if (!found) {
                                self.eventTypeFieldTypes.push({
                                    name: value,
                                    displayName: value
                                });
                            }
                        });

                        self.changeSourceType(item.typeName());
                        self.addTags(item.attachedTagNames());
                        self.item(item);
                    } else {
                        self.item(new SourceThing());
                    }

                    self.saveEnabled(!self.isNew());
                    self.checkButtons();

                    if (typeof callback === 'function') {
                        callback.call(self);
                    }
                });
            };

            self.opts = {
                scope: self,
                beforeCancel: function () {
                    return true;
                },
                afterSave: function () {
                    return true;
                },
                isStream: true
            };

            self.cancel = function () {
                if (!self.opts.beforeCancel || self.opts.beforeCancel.call(self.opts.scope)) {
                    self.dialog.ojDialog('close');
                }
            };

            self.save = function () {
                var valid = self.getStepForm().validationEngine('validate');
                if (valid) {
                    if (self.passedSteps.indexOf(2) > -1) {
                        $.each(self.sourceParameters(), function (typeIndex, typeItem) {
                            self.item().parameters()[typeItem.name] = typeItem.value();
                        });
                    }

                    if (self.passedSteps.indexOf(3) > -1) {
                        if (self.isManualEventType()) {
                            self.manualEventType().fields({});

                            $.each(self.manualEventTypeFields(), function (index, item) {
                                self.manualEventType().fields()[item.name()] = item.value();
                            });

                            self.item().producedEventType(self.manualEventType());
                        } else {
                            self.item().producedEventType(self.eventTypeSelected());
                        }
                    }
                    //Disable save button to prevent multiple click on save button, while saving the source
                    self.saveEnabled(false);
                    self.checkButtons();
                    var saveMethod = self.item().name() ? ServiceFactory.getSourceService().update : ServiceFactory.getSourceService().create;
                    ProgressBar.getInstance().busyState();
                    saveMethod(self.item(), null, function (savedSourceThing) {
                        Notifications.add({
                            type: NotificationType.TYPE.info,
                            text: self.item().name()
                                ? __('SOURCE_UPDATED', null, [self.item().displayName()])
                                : __('SOURCE_CREATED', null, [self.item().displayName()])
                        });
                        self.opts.afterSave.call(self.opts.scope, savedSourceThing, self.isCreateExplorationCheckBoxVisible() && self.toOpenExploration());
                        self.saveEnabled(true);
                        self.dialog.ojDialog('close');
                        ProgressBar.getInstance().connectedState();


                    }, function (error) {
                        ProgressBar.getInstance().connectedState();

                        self.saveEnabled(true);
                        self.checkButtons();
                        ModalMessageDialog.open({
                            type: 'error',
                            header: __('ERROR_SAVE_SOURCE'),
                            messages: [{
                                type: 'error',
                                text: error.error
                            }]
                        });
                    });
                }
            };

            self.checkButtons = function () {
                self.backEnabled(self.step() > 1);
                self.nextEnabled(self.step() < 3);

                if (self.backButton) {
                    self.backButton.ojButton(self.backEnabled() ? 'enable' : 'disable');
                }
                if (self.nextButton) {
                    self.nextButton.ojButton(self.nextEnabled() ? 'enable' : 'disable');
                }
                if (self.saveButton) {
                    self.saveButton.ojButton(self.saveEnabled() ? 'enable' : 'disable');
                }
            };

            self.buildSourceParam = function (config) {
                var param = {};

                param.name = config.name;
                param.description = config.description;
                param.displayName = config.displayName ? config.displayName : config.name;
                param.required = config.required;
                param.validators = config.required ? 'required' : '';
                param.value = ko.observable((self.isNew() ? config.defaultValue : config.value) || '');

                //TODO: check if it possible to re-factor.

                var type = config.type ? config.type.toLowerCase() : '';
                var validator = config.validator ? config.validator.toLowerCase() : '';

                switch (type) {
                    case 'file':
                        param = self.getFileUploadParam(param, config);
                        break;
                    case 'boolean':
                        param.widget = 'checkbox';
                        param.cls = 'oj-checkbox oj-enabled';
                        param.value(param.value() ? true : false);
                        break;
                    default:
                        if (config.remote) {
                            param.widget = 'selectRemote';
                            param.cls = 'oj-select oj-inputtext oj-inputtext-input';
                            param.showLoader = ko.observable(true);
                            param.caption = ko.observable('Loading...');
                            param.options = ko.observable([]);
                            console.log(param);

                            $.get(self.utilUrl + '/list/' + self.item().typeName() + '/' + config.name,
                                //self.item().parameters(),
                                function (data, textStatus, jqXHR) {
                                    if (data.data && data.data.length) {
                                        param.caption('Select ' + config.displayName);
                                        param.options(data.data);
                                    } else {
                                        param.caption('No data');
                                    }
                                    param.showLoader(false);
                                }, 'json');
                        } else if (config.options) {
                            param.widget = 'select';
                            param.cls = 'oj-select oj-inputtext oj-inputtext-input';
                            param.options = config.options;
                        } else if (validator && validator.search('\\bpassword\\b') > -1) {
                            param = self.getPasswordParam(param, config);
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
            };

            self.getStepForm = function (step) {
                var theStep = step ? step : self.step();
                return $('#source-form-step-' + theStep + (theStep === 3 ? '-' + self.eventTypeMode() : ''));
            };

            self.nextStep = function () {
                var form = self.getStepForm();
                self.onBeforeSubmitParamForm(form);
                var valid = self.getStepForm().validationEngine('validate');
                self.onAfterSubmitParamForm(form);

                if (valid) {
                    self.step(self.step() < 3 ? self.step() + 1 : self.step());
                    self.passedSteps.push(self.step());
                    switch (self.step()) {
                        case 2:
                            $.each(self.sourceParameters(), function (typeIndex, typeItem) {
                                $.each(self.item().parameters(), function (key, value) {
                                    if (key === typeItem.name) {
                                        typeItem.value(value);
                                        return false;
                                    }
                                });
                            });
                            break;
                        case 3:
                            self.item().parameters({});
                            $.each(self.sourceParameters(), function (typeIndex, typeItem) {
                                self.item().parameters()[typeItem.name] = typeItem.value();
                            });

                            var eventTypeNameSelected = self.selectedEventTypeName();
                            self.eventTypes([]);
                            self.selectedEventTypeName('');
                            self.eventTypeSelected(new EventShapeThing());
                            self.saveEnabled(true);

                            self.showEventTypesLoader(true);
                            self.eventTypesSelectCaption(__('LOADING_EVENT_TYPES_TEXT', 'oep.field'));
                            $.get(self.utilUrl + '/eventType/' + self.item().typeName(),
                                self.item().parameters(),
                                function (data, textStatus, jqXHR) {
                                    if (data.success) {
                                        var eventTypes = [];

                                        $.each(data.data, function (index, item) {
                                            var eventType = new EventShapeThing(item);
                                            eventTypes.push(eventType);
                                        });

                                        self.eventTypes(eventTypes);
                                        self.showEventTypesLoader(false);
                                        self.eventTypesSelectCaption(__('EVENT_TYPE_CAPTION'));

                                        self.eventTypeSelected(self.item().producedEventType());
                                        var name = self.item().producedEventType().name();
                                        if (!eventTypeNameSelected && !name && self.isManualAvailable()) {
                                            self.eventTypeMode('manual');
                                        }
                                        self.selectedEventTypeName(eventTypeNameSelected ? eventTypeNameSelected : name);
                                        self.changeEventType(name);
                                        self.saveEnabled(true);
                                        self.checkButtons();
                                    } else {
                                        self.showEventTypesLoader(false);
                                        self.eventTypesSelectCaption(__('ERROR_GET_EVENT_TYPES'));
                                        ModalMessageDialog.open({
                                            type: 'error',
                                            header: __('ERROR_GET_EVENT_TYPES'),
                                            messages: [{
                                                type: 'error',
                                                text: data.message
                                            }]
                                        });
                                    }
                                }, 'json');
                            break;
                    }
                    Translate.getTranslated(self.getStepForm());
                    self.checkButtons();
                }
            };

            self.backStep = function () {
                self.step(self.step() > 1 ? self.step() - 1 : self.step());
                self.checkButtons();
            };

            self.onFieldChange = function (esForm, event) {
                self.checkButtons();
            };

            self.onSourceTypeChange = function (esForm, event) {
                self.saveEnabled(false);
                self.sourceTypeChanged(true);
                self.changeSourceType($(event.target).val());
                self.checkButtons();
            };

            self.changeSourceType = function (name) {
                ServiceFactory.getSourceTypeService().getById(name, null, function (item) {
                    self.sourceTypeSelected(item ? item : {});

                    var parameters = [];
                    if (self.sourceTypeSelected().parameters) {
                        $.each(self.sourceTypeSelected().parameters(), function (index, config) {
                            parameters.push(self.buildSourceParam(config));
                        });
                    }
                    self.sourceParameters(parameters);
                });
            };

            self.onEventTypeChange = function (esForm, event) {
                self.changeEventType($(event.target).val());
            };

            self.changeEventType = function (name) {
                var isManual = self.eventTypeMode() === 'manual';
                if (self.eventTypes().length) {
                    if (!isManual && name) {
                        isManual = true;
                        $.each(self.eventTypes(), function (index, item) {
                            if (item.name() === name) {
                                self.eventTypeSelected(item);
                                isManual = false;
                                return false;
                            }
                        });
                    }
                }

                //if (isManual) {
                var isManualTypeAssigned = self.manualEventType() && !$.isEmptyObject(self.manualEventType().fields());
                var eventTypeToShow = isManualTypeAssigned ? self.manualEventType() : self.item().producedEventType();
                self.setEventTypeFields(eventTypeToShow, self.isNew());
                //}

                self.eventTypeMode(isManual ? 'manual' : 'select');
            };

            self.setEventTypeFields = function (eventType, setDefaultField) {
                self.manualEventTypeFields([]);
                self.manualEventType(eventType);

                $.each(self.manualEventType().fields(), function (key, value) {
                    self.manualEventTypeFields.push({
                        name: ko.observable(key),
                        value: ko.observable(value)
                    });
                });
                if (setDefaultField && $.isEmptyObject(self.manualEventType().fields())) {
                    self.addEmptyManualEventTypeField();
                }
            };

            self.oneEventTypeModeClick = function (esForm, event) {
                return true;
            };

            self.onManualEventTypeFieldChange = function (esForm, event) {
                console.log(esForm, event);
            };

            self.addManualEventTypeField = function (data, event) {
                if (self.isManualEventType()) {
                    self.addEmptyManualEventTypeField();
                }
            };

            self.removeManualEventTypeField = function (data, event, index) {
                if (self.isManualEventType()) {
                    self.manualEventTypeFields.splice(index, 1);
                    if (!self.manualEventTypeFields().length) {
                        self.addEmptyManualEventTypeField();
                    }
                }
            };

            self.addEmptyManualEventTypeField = function () {
                self.manualEventTypeFields.push({
                    name: ko.observable(''),
                    value: ko.observable('')
                });
            };

            self.stepValid = function () {
                console.log('STEP', self.step(), 'VALID');
            };

            self.stepInvalid = function () {
                console.log('STEP', self.step(), 'INVALID');
            };

            self.isNew = function () {
                var itsNew = true;
                if (self.item()) {
                    itsNew = false;
                    if ((ko.isObservable(self.item().name) && !self.item().name())
                        || (!ko.isObservable(self.item().name) && !self.item().name)) {
                        itsNew = true;
                    }
                }
                return itsNew;
            };

            self.isManualEventType = function () {
                return self.eventTypeMode() === 'manual';
            };

            self.enableSelectEventTypeMode = ko.computed(function () {
                return TYPES_WITHOUT_MANUAL_EVENT.indexOf(self.item().typeName()) === -1;
            });

            self.isManualAvailable = ko.computed(function () {
                if (TYPES_WITHOUT_MANUAL_EVENT.indexOf(self.item().typeName()) > -1) {
                    self.eventTypeMode('select');
                    return false;
                }

                return true;
            });

            self.createDialog = function (action, data, opts) {
                var elSelector = '#' + SOURCE_DIALOG_CONTAINER;

                if (!$(elSelector).length) {
                    $('body').append('<div id="' + SOURCE_DIALOG_CONTAINER + '"></div>');

                    Utils.loadHtmlAsync(elSelector, 'html/sourceForm.html', function () {
                        ko.applyBindings(self, document.getElementById(SOURCE_DIALOG_CONTAINER));
                        Translate.getTranslated($(elSelector));

                        $("#source-dialog").ojDialog({
                            initialVisibility: 'hide',
                            rootAttributes: {
                                class: 'source-dialog',
                                style: 'min-width: 620px; min-height: 390px; '
                            },
                            modality: 'modal',
                            //minWidth: 620,
                            //minHeight: 360,
                            cancelBehaviour: 'none',
                            //closeText: null,
                            dragAffordance: 'title-bar',
                            close: function() {
                                HelpController.getInstance().removeTempId();
                            }

                        });

                        self.dialog = $('#source-dialog');

                        /*self.backButton = $('#source-dialog-back-button').button({
                         id: 'source-dialog-back-button',
                         label: __('BACK_LABEL'),
                         icons: {primary: 'ui-icon-carat-1-w'},
                         disabled: !self.backEnabled()
                         });

                         self.nextButton = $('#source-dialog-next-button').button({
                         id: 'source-dialog-next-button',
                         label: __('NEXT_LABEL'),
                         icons: {secondary: 'ui-icon-carat-1-e'},
                         disabled: !self.nextEnabled()
                         }); */
                        self.backButton = $('#source-dialog-back-button').ojButton({
                            label: __('BACK_LABEL'),
                            icons: {start: ' backIcon oj-fwk-icon'}
                        });

                        self.nextButton = $('#source-dialog-next-button').ojButton({
                            label: __('NEXT_LABEL'),
                            icons: {end: ' oj-fwk-icon forwardIcon'}
                        });
                        //Anna Y : since there is no desicion of replacing jquery dialog with ojDialog, but
                        //we have a task to replace jquery buttons with oj-button, I replace jquery buttons after dialog creation.
                        //Kostil:: TODO:: this code should be removed lately
                        self.saveButton = $('#source-dialog-save-button');
                        self.saveButton.click(self.save);
                        $('#source-dialog-cancel-button').click(self.cancel);
                        /*self.saveButton.ojButton({
                         id: 'source-dialog-save-button',
                         label: __('CREATE_LABEL'),
                         click: self.save
                         });

                         var cancelBtn = $('#source-dialog-cancel-button').button('destroy');
                         cancelBtn.ojButton({
                         id: 'source-dialog-cancel-button',
                         label: __('CANCEL_LABEL'),
                         click: self.cancel
                         });*/

                        self.tagsEl = $('#' + SOURCE_DIALOG_SOURCE_TAGS).tagit({
                            availableTags: [],
                            autocomplete: {
                                delay: 0, minLength: 1,
                                source: function (request, response) {
                                    $.get(self.tagUrl, function (data, textStatus, jqXHR) {
                                        var tags = [];
                                        $.each(data.data, function (index, item) {
                                            tags.push(item.name);
                                        });
                                        response($.grep(tags, function (item, index) {
                                            return item.match('^' + request.term, 'i');
                                        }));
                                    }, 'json');
                                }
                            },
                            caseSensitive: false,
                            showAutocompleteOnFocus: true,
                            allowSpaces: true,
                            placeholderText: __('ENTER_TAG_PLACEHOLDER'),
                            fieldName: 'sourceTags',
                            tagLimit: 10,
                            afterTagAdded: function (event, ui) {
                                self.item().attachedTagNames($(this).tagit('assignedTags'));
                            },
                            afterTagRemoved: function (event, ui) {
                                self.item().attachedTagNames($(this).tagit('assignedTags'));
                            },
                            onTagLimitExceeded: function (event, ui) {
                                console.log('TAG-IT: TOO MUCH TAGS', $(this).tagit('assignedTags'));
                            }
                        });

                        $('.source-form').validationEngine('attach', {
                            promptPosition: 'topLeft',
                            scroll: false,
                            onSuccess: self.stepValid,
                            onFailure: self.stepInvalid
                        });
                        self.act(action, data, opts);
                    });
                }
            };


            self.getLabelForSaveButton = function () {
                return self.isNew() ? __('CREATE_LABEL') : __('SAVE_LABEL');
            };


            self.getTitleForSourceDialog = function () {
                return self.isNew() ?
                    (self.opts.isStream ? __('CREATE_STREAM_TITLE') : __('CREATE_REFERENCE_TITLE')  )
                    : (self.opts.isStream ? __('EDIT_STREAM_TITLE') : __('EDIT_REFERENCE_TITLE')  );

            };

            self.setHelpTopic = function(step) {
                var first = self.isNew() ? "CREATE_" : "EDIT_";
                var second = self.opts.isStream ? "STREAM_DLG_" : "REFERENCE_DLG_";
                var third;
                switch (step) {
                    case 1:
                        third = "SOURCE";
                        break;
                    case 2:
                        third = "TYPE";
                        break;
                    case 3:
                        third = "SHAPE";
                        break;
                }

                var topicId = HelpController[first + second + third];

                HelpController.getInstance().setTempId(topicId);
            };

            self.act = function (action, data, opts) {
                $.extend(self.opts, opts ? opts : {});

                switch (action) {
                    case 'open':
                        if (typeof data == 'string' || data instanceof String) { //if source id
                            ServiceFactory.getSourceService().getById(data, null, function (item) {
                                self.reset(item, function () {
                                    self.isCreateExplorationCheckBoxVisible(false);
                                    self.dialog.ojDialog('option', 'title', self.getTitleForSourceDialog());
                                    self.saveButton.ojButton('option', 'label', self.getLabelForSaveButton());
                                    self.dialog.ojDialog('open');
                                    self.setHelpTopic(self.step());
                                });
                            });
                        } else if (data != null && typeof data === 'object') {    // if SourceThing
                            self.reset(null, function () {
                                self.item(data);
                                self.isCreateExplorationCheckBoxVisible(false);
                                self.dialog.ojDialog('option', 'title', self.getTitleForSourceDialog());
                                self.saveButton.ojButton('option', 'label', self.getLabelForSaveButton());
                                self.dialog.ojDialog('open');
                                self.setHelpTopic(self.step());
                            });
                        } else {
                            self.reset(null, function () {      // if new SourceThing (create)
                                self.dialog.ojDialog('option', 'title', self.getTitleForSourceDialog());
                                self.saveButton.ojButton('option', 'label', self.getLabelForSaveButton());
                                self.dialog.ojDialog('open');
                                self.setHelpTopic(self.step());
                            });
                        }
                        
                }
            };

            self.descriptionValidator = {
                validate: function (value) {
                    if (value && value.length > 512) {
                        throw new Error(__('DESCRIPTION_LENGTH_VALIDATION'));
                    }
                    return true;
                }
            };

            self.addTags = function (tags) {
                $.each(tags, function (index, tag) {
                    $('#' + SOURCE_DIALOG_SOURCE_TAGS).tagit('createTag', tag);
                });
            };
            
            self.getPasswordParam = function(param, paramConfig) {
                if (self.isNew()) {
                    return param;
                }
                param.changeMode = ko.observable(false);
                param.changePassword = function(koObj, ev) {
                    var newPassword = $(ev.target).val();
                    param.value(newPassword);
                };
                param.goChangePassword = function(koObj, ev) {
                    param.changeMode(true);
                    if (param.value() === null) {
                        param.value('');
                    }
                };
                param.cancelChangePassword = function(koObj, ev) {
                    param.changeMode(false);
                    param.value(null);
                };
                return param;
            };

            self.getFileUploadParam = function (param, paramConfig) {
                param.widget = 'file';
                param.validators = paramConfig.validator; //'checkFileType[txt|csv] checkFileLength[1024] required';
                param.requiredFileMessage = __('FILE_NOT_UPLOADED');
                param.cls = 'oj-inputtext oj-inputtext-input';
                param.value = ko.observable(paramConfig.value || {});
                param.value().type = param.value().type || 'upload';
                param.urlDefaultCaption = __('FILE_URL_CAPTION');
                var fileForm = self.getStepForm(2);
                if (param.required) {
                    param.onBeforeValidate = function () {
                        //var selFileType = param.value().type;

                        var valueField = param.mode.getValueCtrl();
                        valueField.addClass('validate[required]');
                    };
                    param.onAfterValidate = function () {
                        //var selFileType = param.value().type;

                        var valueField = param.mode.getValueCtrl();
                        valueField.removeClass('validate[required]');
                    };
                }

                                    param.mode = {
                                        emptyError: function() {
                                            param.mode.upload.error('');
                                            param.mode.url.error('');
                                        },
                                        
                                        isUrl: function() {
                                            return param.value().type === 'url';
                                        },
                                        isUpload: function() {
                                            return param.value().type === 'upload';
                                        },
                                        url : {
                                            visualCtrlName: 'source-dialog-' + param.name + '-url',
                                            valueCtrlName: 'source-dialog-' + param.name + '-url',
                                            onBlur: function(koParamObj, ev) {
                                                param.mode.emptyError();
                                                if (!ev.target.value) {
                                                    ev.target.value = param.urlDefaultCaption;
                                                }
                                                return true;
                                            },
                                            onFocus: function(koParamObj, ev) {
                                                param.mode.emptyError();
                                                if (ev.target.value === param.urlDefaultCaption) {
                                                    ev.target.value = '';
                                                }
                                                return true;
                                            },
                                            onChange: function(koFileFieldObj, ev) {
                                                //koFileFieldObj.value().fileServerName = $.trim(ev.target.value);
                                                var fileName = $.trim(ev.target.value);
                                                
                                                var fileFieldHasError = $(ev.target).validationEngine('validate');
                                                if (fileFieldHasError) {
                                                    koFileFieldObj.value(param.mode.url.constructUploadObject(null, null));
                                                    self.checkButtons();
                                                    return;
                                                }

                                                var fileField = ev.target;

                                                koFileFieldObj.value(param.mode.url.constructUploadObject(fileName));
                                                param.mode.emptyError();
                                                self.manualEventType(new EventShapeThing());

                                                //var serverNameField = $(fileField.parentNode).find('input[type="hidden"]');
                                                ServiceFactory.getSourceService().uploadRemoteSourceFile(

                                                    fileName,
                                                    function(data) {
                                                        console.log('Upload is successfully completed. Status:: ' + data);
                                                        if (data && data.fileServerName) {
                                                            var valueObject = param.mode.url.constructUploadObject(fileName);
                                                            koFileFieldObj.value(valueObject);
                                                            //koFileFieldObj.mode.getValueCtrl('upload').val(data.fileServerName);
                                                            //Disables the error 'not uploaded'. which can occur after click the 'next' button
                                                            //on the previous step
                                                            $(fileField).validationEngine('validate');

                                                            var incomingShape = new EventShapeThing();
                                                            incomingShape.fields(data.shape.fields);
                                                            //self.item.producedEventType(incomingShape);
                                                            self.manualEventType(incomingShape);
                                                            self.setEventTypeFields(incomingShape, true);
                                                            if (self.step() !== 3) {
                                                                self.eventTypeMode('manual');
                                                            }
                                                        } else {
                                                            console.error('Wrong answer from server, result file name is not passed.');
                                                            param.mode.url.error(__('ERROR_PARSE_SHAPE'));
                                                        }
                                                    }
                                                );
                                            },
                                            constructUploadObject: function(serverName) {
                                                return {
                                                    fileDisplayName: '',
                                                    fileServerName: serverName,
                                                    type: 'url'
                                                };
                                            },
                                            error: ko.observable('')
                                        },
                                        upload : {
                                            visualCtrlName: 'source-dialog-' + param.name + '-visual-upload',
                                            valueCtrlName: 'source-dialog-' + param.name + '-value-upload',
                                            inputFileName: 'source-dialog-' + param.name + '-file-upload',
                                            constructUploadObject: function(displayName, serverName) {
                                                return {
                                                    fileDisplayName: displayName,
                                                    fileServerName: serverName,
                                                    type: 'upload'
                                                };
                                            },
                                            onBlur: function(koParamObj, ev) {
                                                param.mode.emptyError();
                                                $('#' + param.mode.upload.inputFileName).val('');
                                                return true;
                                            },
                                            onFocus: function(koParamObj, ev) {
                                                param.mode.emptyError();
                                                return true;
                                            },
                                            error: ko.observable(''),
                                            onChange: function(koFileFieldObj, ev) {
                                                var fileFieldHasError = $(ev.target).validationEngine('validate');
                                                if (fileFieldHasError) {
                                                    koFileFieldObj.value(param.mode.upload.constructFileUploadObject(null, null));
                                                    self.checkButtons();
                                                    return;
                                                }

                                                var fileField = ev.target;
                                                var filePath = fileField.value;
                                                var fileNameIndex = (filePath.lastIndexOf('\\') === -1) ? 0 : filePath.lastIndexOf('\\') + 1;
                                                var fileName = filePath.slice(fileNameIndex);
                                                
                                                self.manualEventType(new EventShapeThing());
                                                param.mode.emptyError();
                                                koFileFieldObj.value(param.mode.upload.constructUploadObject(fileName, null));
                                                //$(fileField.parentNode.parentNode).find('span.file-upload-status').text(fileName);

                                                //var serverNameField = $(fileField.parentNode).find('input[type="hidden"]');
                                                ServiceFactory.getSourceService().uploadLocalSourceFile(
                                                    fileName,
                                                    fileField.files[0],
                                                    function(data) {
                                                        console.log('Upload is successfully completed. Status:: ' + data);
                                                        if (data && data.fileServerName) {
                                                            var valueObject = param.mode.upload.constructUploadObject(fileName, data.fileServerName);
                                                            koFileFieldObj.value(valueObject);
                                                            koFileFieldObj.mode.getValueCtrl('upload').val(data.fileServerName);
                                                            //Disables the error 'not uploaded'. which can occur after click the 'next' button
                                                            //on the previous step
                                                            $(fileField).nextAll('input').validationEngine('validate');

                                                            var incomingShape = new EventShapeThing();
                                                            incomingShape.fields(data.shape.fields);
                                                            //self.item.producedEventType(incomingShape);
                                                            self.manualEventType(incomingShape);
                                                            self.setEventTypeFields(incomingShape, true);
                                                            if (self.step() !== 3) {
                                                                self.eventTypeMode('manual');
                                                            }
                                                        } else {
                                                            console.error('Wrong answer from server, result file name is not passed.');
                                                            param.mode.upload.error(__('UPLOAD_FILE_FAILED'));
                                                        }
                                                    }
                                                );
                                            }
                                            
                                        },
                                        getValueCtrl: function(selFileType) {
                                            return fileForm.find('input[name="' + param.mode[selFileType || param.value().type].valueCtrlName + '"]');
                                        },
                                        getVisualCtrl: function(selFileType) {
                                            return $('#' + param.mode[selFileType || param.value().type].visualCtrlName);
                                        },
                                        onChange: function(koFileParam, event) {
                                            console.log('Clicked: ' + event.target.name);
                                            var fileInputCtrl = $(event.target);

                                            var currentInputName = fileInputCtrl.attr('name');
                                            if (currentInputName && currentInputName.lastIndexOf('-') !== -1) {
                                                var currentMode = currentInputName.slice(currentInputName.lastIndexOf('-') + 1);
                                                var previousMode = (currentMode === 'url') ? 'upload' : 'url';

                                                koFileParam.value().type = currentMode;
                                                var currentValueCtrl = koFileParam.mode.getValueCtrl();
                                                var currentVisualCtrl = koFileParam.mode.getVisualCtrl();;
                                                var previousVisualCtrl = koFileParam.mode.getVisualCtrl(previousMode);
                                                var previousValueCtrl = koFileParam.mode.getValueCtrl(previousMode);
                                                currentVisualCtrl.removeClass('oj-disabled');
                                                previousVisualCtrl.addClass('oj-disabled');


                                                if (koFileParam.required) {
                                                    //currentValueCtrl.addClass('validate[required]');
                                                    //previousValueCtrl.removeClass('validate[required]');
                                                }


                                                var currentValue = ((currentMode === 'url') && (currentValueCtrl.val() === koFileParam.urlDefaultCaption)) ?
                                                    '': currentValueCtrl.val();
                                                koFileParam.value().fileServerName = currentValue;
                                                previousValueCtrl.attr('disabled', true);
                                                currentValueCtrl.attr('disabled', false);
                                                currentValueCtrl.focus();
                                            }
                                            return true;
                                        }
                                    };

                                    return param;
                        };


            self.onBeforeSubmitParamForm = function (form) {
                var widget = 'file';
                if (form.find('input[type="' + widget + '"]')) {
                    var params = self.sourceParameters();
                    $.each(params, function (key, param) {
                        if (param.onBeforeValidate) {
                            param.onBeforeValidate();
                        }
                    });
                }
            };
            self.onAfterSubmitParamForm = function (form) {
                var widget = 'file';
                if (form.find('input[type="' + widget + '"]')) {
                    var params = self.sourceParameters;
                    $.each(params, function (key, param) {
                        if (param.onAfterValidate) {
                            param.onAfterValidate();
                        }
                    });
                }
            };

            self.constructFileUploadObject = function (displayName, serverName) {
                return {
                    fileDisplayName: displayName,
                    fileServerName: serverName,
                    type: 'upload'
                };
            };

        }


        SourceForm.getInstance = function (action, data, opts) {
            if (!SourceForm._instance) {
                SourceForm._instance = new SourceForm();
                SourceForm._instance.createDialog(action, data, opts);
            } else {
                SourceForm._instance.act(action, data, opts);
            }
        };

        SourceForm.Object = SourceThing;

        return SourceForm;
    }
);
