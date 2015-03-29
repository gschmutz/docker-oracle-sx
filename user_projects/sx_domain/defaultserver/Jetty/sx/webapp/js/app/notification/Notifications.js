/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/
define(
        'Notifications',
        ['jquery', 'knockout', 'Translate', 'Utils', 'UserPreferencesModel', 'NotificationType', 'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojcomponents'],
        /**
         * @exports exploration/notification
         * @ignore
         */
                function($, ko, Translate, Utils, UserPreferencesModel, NotificationType) {
                    var MESSAGE_I18N_PATH = 'oep.notification';
                    var NOTIFICATION_TOP_SIBLING_ID = 'before-notifications'; // header';
                    var NOTIFICTION_TEMPLATE = 'html/notifications.html';
                    var AUTOHIDE_SECONDS = 5;

                    var __ = function(key) {
                        return Translate.getTranslated(MESSAGE_I18N_PATH + '.' + key);
                    };

                    function Notifications() {
                        this.messages = ko.observableArray([]);
                    }

                    var clazz = Notifications;
                    clazz.topSiblingId = NOTIFICATION_TOP_SIBLING_ID;
                    clazz.template = NOTIFICTION_TEMPLATE;
                    clazz.inProgress = false;

                    clazz.MessageModel = function(config) {
                        var self = this;
                        self.__ = __;

                        /** Available types:
                         * @see NotificationType.TYPE */

                        self.messageId = 'notification' + Date.now();
                        self.type = ko.observable(NotificationType.TYPE.info);
                        self.text = ko.observable('');
                        self.doDetails = null;
                        self.doCancel = null;
                        self.progress = null;
                        self.autoHide = UserPreferencesModel.getInstance().getInfoNotificationAutoHideTimeout() || AUTOHIDE_SECONDS;

                        self.reset = function(config) {
                            if (config) {
                                for (var key in config) {
                                    if (ko.isObservable(self[key])) {
                                        self[key](config[key]);
                                    } else {
                                        self[key] = config[key];
                                    }
                                }
                                if (typeof config.autoHide === 'undefined') {
                                    self.autoHide = self.type() === NotificationType.TYPE.info ? UserPreferencesModel.getInstance().getInfoNotificationAutoHideTimeout() || AUTOHIDE_SECONDS : 0;
                                }
                            }
                        };

                        self.remove = function() {
                            clazz.remove(self.messageId);
                        };

                        self.reset(config);
                    };

                    clazz.getInstance = function(callback) {
                        if (!clazz.instance && !clazz.inProgress) {
                            clazz.inProgress = true;
                            var notificationPlace = $('#' + clazz.topSiblingId).after('<div></div>').next();
                            Utils.loadHtmlAsync(notificationPlace, clazz.template, function() {
                                clazz.instance = new clazz();
                                clazz.container = notificationPlace.get(0);
                                ko.applyBindings(clazz.instance, clazz.container);
                                callback.call(clazz.instance);
                                clazz.inProgress = false;
                            });
                        } else if (clazz.instance) {
                            callback.call(clazz.instance);
                        }
                    };

                    clazz.add = function(config, callback) {
                        if (config.type == NotificationType.TYPE.info && UserPreferencesModel.getInstance().isInfoNotificationsVisible() === false) {
                            //do nothing
                        } else {   //show notification
                            clazz.getInstance(function () {
                                if (null === ko.utils.arrayFirst(this.messages(), function(item) {
                                    return item.messageId === config.messageId;
                                })) {
                                    var message = new clazz.MessageModel(config);
                                    this.messages.push(message);
                                    $('#' + message.messageId).slideDown('slow', function () {
                                        if (message.autoHide) {
                                            setTimeout(function () {
                                                clazz.remove(message.messageId);
                                            }, message.autoHide * 1000);
                                        }
                                    });
                                    if (callback) {
                                        callback.call(this, message);
                                    }
                                }
                            });
                        }
                    };

                    clazz.remove = function(messageId) {
                        clazz.getInstance(function() {
                            var the = this;
                            $.each(the.messages(), function(index, item) {
                                if (item.messageId === messageId) {
                                    $('#' + item.messageId).slideUp('slow', function() {
                                       the.messages.remove(item);
                                    });
                                    return false;
                                }
                            });
                        });
                    };


                    return Notifications;
                }
        );
