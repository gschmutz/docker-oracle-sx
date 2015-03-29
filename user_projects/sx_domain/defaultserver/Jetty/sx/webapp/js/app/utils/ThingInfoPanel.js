/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/
define(
    'ThingInfoPanel',
    ['jquery', 'knockout', 'Translate', 'Thing', 'Utils', 'tag-it'],
    /**
     * @exports utils
     * @ignore
     */
    function ($, ko, Translate, Thing, Utils) {
        var THING_INFO_PANEL_CONTAINER_ID = 'thing-info-panel-container';
        var THING_INFO_PANEL_ID = 'thing-info-panel';
        var THING_INFO_PANEL_FORM_SELECTOR = '.thing-info-panel-form';
        var THING_INFO_PANEL_I18N_PATH = 'oep.thingInfoPanel';
        var THING_INFO_PANEL_CONTROL_SELECTOR = '.thing-info-panel-control';
        var THING_INFO_PANEL_TAGS = 'thing-info-tags';
        var TAGS_SERVICE_URL = 'webresources/v0.1/tag';

        var __ = function (key) {
            return Translate.getTranslated(THING_INFO_PANEL_I18N_PATH + '.' + key);
        };

        function ThingInfoPanel() {
            var self = this;

            self.__ = __;

            self.original = null;
            self.thing = ko.observable(new Thing());


            self.editMode = ko.observable(false);


            self.changes = {
                displayName: ko.observable(''),
                description: ko.observable(''),
                attachedTagNames: ko.observableArray([])
            };

            this.displayNameEditor = ko.computed({
                read: function () {
                    return self.changes.displayName();
                },
                write: function (value) {
                    value = Utils.removeNonAsciiSymbols(value).trim();
                    value = Utils.cutStringIfMoreCharactersThan(value, 250).trim();

                    if (value) {
                        self.changes.displayName(value);
                        self.changes.displayName.valueHasMutated();
                    }
                }
            }).extend({notify: 'always'});


            self.opts = {
                scope: self,
                afterDone: function () {
                    return true;
                }
            };

            self.reset = function (config) {
                if (config) {
                    for (var key in config) {
                        if (ko.isObservable(self[key])) {
                            self[key](config[key]);
                        } else {
                            self[key] = config[key];
                        }
                    }
                }
            };

            self.open = function (data) {
                console.log('==== OPEN ====');
                self.original = data;
                self.thing(data);
                $.each(self.changes, function (key, changes) {
                    if (self.thing()[key]) {
                        self.changes[key](self.thing()[key]());
                    }
                });
                self.addTags(self.changes.attachedTagNames());

                $('#' + THING_INFO_PANEL_CONTAINER_ID).slideDown('slow');

                var controlButton = $(self.opts.controlButton);
                if (controlButton) {
                    controlButton.addClass('active');
                }
            };

            self.close = function (data) {
                console.log('==== CLOSE ====');
                $('#' + THING_INFO_PANEL_CONTAINER_ID).slideUp('slow');

                var controlButton = $(self.opts.controlButton);
                if (controlButton) {
                    controlButton.removeClass('active');
                }
                self.editMode(false);
            };

            self.act = function (action, data, opts) {
                if (!$('#' + THING_INFO_PANEL_ID).length) {
                    self.createPanel(action, data, opts);
                } else {
                    $.extend(self.opts, opts ? opts : {});
                    /* Test */
                    //console.log(data);

                    switch (action) {
                        case 'open':
                            self.open(data, opts);
                            break;
                        case 'close':
                            self.close(data, opts);
                            break;
                        case 'toggle':
                            var controlButton = $(self.opts.controlButton);
                            var opened = controlButton ? controlButton.hasClass('active') : false;
                            if (opened) {
                                self.close(data, opts);
                            } else {
                                self.open(data, opts);
                            }
                            break;
                    }
                }
            };

            self.onFieldChange = function (model, event) {
                console.log('ThingInfoPanel.onFieldChange', model, event);
            };

            self.createPanel = function (action, data, opts) {
                var containerSelector = '#' + THING_INFO_PANEL_CONTAINER_ID;
                var panelSelector = '#' + THING_INFO_PANEL_ID;

                if ($(containerSelector).length) {
                    if (!$(panelSelector).length) {
                        Utils.loadHtmlAsync(containerSelector, ThingInfoPanel.template, function () {
                            ko.applyBindings(self, document.getElementById(THING_INFO_PANEL_CONTAINER_ID));
                            Translate.getTranslated($(containerSelector));

                            self.updateButton = $('#info-panel-update-button').button({
                                id: 'info-panel-update-button',
                                label: __('UPDATE_BUTTON_LABEL'),
                                disabled: false
                            }).click(function (event) {
                                event.stopPropagation();
                                console.log('==== UPDATE ====');
                                self.editMode(true);
                            });

                            self.doneButton = $('#info-panel-done-button').button({
                                id: 'info-panel-done-button',
                                label: __('DONE_BUTTON_LABEL'),
                                disabled: false
                            }).click(function (event) {
                                event.stopPropagation();
                                console.log('==== DONE ====');

                                if (self.original) {
                                    $.each(self.changes, function (key, changes) {
                                        if (ko.isObservable(self.original)) {
                                            if (self.original()[key]) {
                                                self.original()[key](self.changes[key]());
                                            }
                                        } else {
                                            if (self.original[key]) {
                                                self.original[key](self.changes[key]());
                                            }
                                        }
                                    });
                                }

                                if (self.opts.afterDone) {
                                    self.opts.afterDone(self.original);
                                }

                                self.act('close');
                            });

                            self.tagsEl = $('#' + THING_INFO_PANEL_TAGS).tagit({
                                availableTags: [],
                                autocomplete: {
                                    delay: 0, minLength: 1,
                                    source: function (request, response) {
                                        $.get(TAGS_SERVICE_URL, function (data, textStatus, jqXHR) {
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
                                fieldName: 'thingInfoTags',
                                tagLimit: 10,
                                afterTagAdded: function (event, ui) {
                                    self.changes.attachedTagNames($(this).tagit('assignedTags'));
                                },
                                afterTagRemoved: function (event, ui) {
                                    self.changes.attachedTagNames($(this).tagit('assignedTags'));
                                },
                                onTagLimitExceeded: function (event, ui) {
                                    console.log('TAG-IT: TOO MUCH TAGS', $(this).tagit('assignedTags'));
                                }
                            });

                            $(THING_INFO_PANEL_FORM_SELECTOR).validationEngine('attach', {
                                promptPosition: 'topLeft',
                                scroll: false,
                                onSuccess: self.stepValid,
                                onFailure: self.stepInvalid
                            });

                            self.act(action, data, opts);
                        });
                    } else {
                        self.act(action, data, opts);
                    }
                }
            };

            self.addTags = function (tags) {
                $.each(tags, function (index, tag) {
                    $('#' + THING_INFO_PANEL_TAGS).tagit('createTag', tag);
                });
            };


            /**
             *
             * @param int
             */
            self.convertToDate = function (int) {
                return Translate.getTranslated(
                    new Date(int),
                    {
                        formatType: 'datetime',
                        dateFormat: 'short',
                        timeFormat: 'long'
                    }
                );
            };

            self.updatedAt = ko.computed(function () {
                var updatedAt = self.thing().updatedAt;
                if (ko.isObservable(updatedAt)) {
                    return self.convertToDate(updatedAt());
                }
                return '';
            }, self);

            self.updatedBy = ko.computed(function () {
                var updatedBy = self.thing().updatedBy;
                if (ko.isObservable(updatedBy)) {
                    return updatedBy();
                }
                return '';
            }, self);


        }

        ThingInfoPanel.template = 'html/thingInfoPanel.html';
        ThingInfoPanel.containerId = THING_INFO_PANEL_CONTAINER_ID;
        ThingInfoPanel.panelId = THING_INFO_PANEL_ID;

        ThingInfoPanel.getInstance = function (action, data, opts) {
            if (!ThingInfoPanel._instance) {
                ThingInfoPanel._instance = new ThingInfoPanel();
                ThingInfoPanel._instance.createPanel(action, data, opts);
            } else {
                ThingInfoPanel._instance.act(action, data, opts);
            }
        };

        ThingInfoPanel.panel = ThingInfoPanel.getInstance;

        return ThingInfoPanel;
    }
);
