/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/
define(
        'ModalMessageDialog',
        ['jquery', 'knockout', 'Translate', 'Utils', 'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojcomponents'],
        /**
         * @exports utils
         * @ignore
         */
                function($, ko, Translate, Utils) {
                    var MODAL_MESSAGE_DIALOG_CONTAINER = 'modal-message-dialog-container';
                    var MESSAGE_I18N_PATH = 'oep.messageDialog';
                    var MESSAGE_DIALOG_ID = 'message-dialog';
                    var MESSAGE_DIALOG_SELECTOR = '#' + MESSAGE_DIALOG_ID;

                    var __ = function(key) {
                        return Translate.getTranslated(MESSAGE_I18N_PATH + '.' + key);
                    };

                    function ModalMessageDialog() {}
                    
                    ModalMessageDialog.template = 'html/modalMessageDialog.html';
                    ModalMessageDialog.containerId = MODAL_MESSAGE_DIALOG_CONTAINER;
                    ModalMessageDialog.dialogId = MESSAGE_DIALOG_ID;
                    
                    ModalMessageDialog.DialogViewModel = function (config) {
                        var self = this;
                        self.__ = __;
                        
                        /** Available types: 'info', 'warning', 'error', 'confirmation' */
                        self.type = ko.observable('info');
                        self.height = ko.observable(200);
                        self.contentHeight = ko.observable('' + self.height() - 104 + 'px');
                        self.width = ko.observable(360);
                        self.title = ko.observable('');
                        self.header = ko.observable('');
                        self.messages = ko.observableArray([]);
                        self.labelOK = __('OK_LABEL');
                        
                        self.ojDialog = $(MESSAGE_DIALOG_SELECTOR).ojDialog;
                                                
                        self.reset = function(config) {
                            if (config) {
                                for (var key in config) {
                                    if (ko.isObservable(self[key])) {
                                        self[key](config[key]);
                                    } else {
                                        self[key] = config[key];
                                    }
                                }
                                
                                if (!config.title) {
                                    switch(self.type()) {
                                        case 'error':
                                            self.title(__('ERROR_TITLE'))
                                            break;
                                        case 'warning':
                                            self.title(__('WARNING_TITLE'))
                                            break;
                                        case 'confirmation':
                                            self.title(__('CONFIRMATION_TITLE'))
                                            break;
                                        default:
                                            self.title(__('INFO_TITLE'))
                                    }
                                }
                            }
                        };
                        
                        self.reset(config);
                    };
                    
                    ModalMessageDialog.action = function (config, actionFn, scope) {
                        scope = scope ? scope : null;
                        actionFn = typeof actionFn === 'function' ? actionFn : function() {};
                        var self = this;
                        var elSelector = '#' + MODAL_MESSAGE_DIALOG_CONTAINER;
                        
                        if (!self.instance) {
                            if (!$(elSelector).length) {
                                self.instance = new self.DialogViewModel(config);
                                
                                $('body').append('<div id="' + MODAL_MESSAGE_DIALOG_CONTAINER + '"></div>');

                                Utils.loadHtmlAsync(elSelector, ModalMessageDialog.template, function() {
                                    ko.applyBindings(self.instance, document.getElementById(MODAL_MESSAGE_DIALOG_CONTAINER));
                                    Translate.getTranslated($(elSelector));
                                    actionFn.call(scope);
                                });
                            }
                        } else {
                            self.instance.reset(config);
                            actionFn.call(scope);
                        }
                        
                        return self.instance;
                    };
                    
                    ModalMessageDialog.open = function(config) {
                        ModalMessageDialog.action(config, function() {
                            $(MESSAGE_DIALOG_SELECTOR).ojDialog('open');
                        });
                    };

                    ModalMessageDialog.close = function() {
                        $(MESSAGE_DIALOG_SELECTOR).ojDialog('close');
                    };

                    return ModalMessageDialog;
                }
        );
