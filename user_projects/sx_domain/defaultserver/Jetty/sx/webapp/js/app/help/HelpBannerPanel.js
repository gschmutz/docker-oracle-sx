/**
 * Product: OEP Stream Explorer
 *
 * @author Victor Lashchenko
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/
define('HelpBannerPanel', [
        'jquery',
        'knockout',
        'Translate',
        'Utils'
    ],
    /**
     * @exports utils
     * @ignore
     */
    function ($, ko, Translate, Utils) {
        var HELP_BANNER_PANEL_CONTAINER_ID = 'help-banner-panel-container';
        var HELP_BANNER_PANEL_ID = 'help-banner-panel';
        var HELP_BANNER_PANEL_I18N_PATH = 'oep.helpBannerPanel';


        HelpBannerPanel.template = 'html/helpBannerPanel.html';
        HelpBannerPanel.containerId = HELP_BANNER_PANEL_CONTAINER_ID;
        HelpBannerPanel.panelId = HELP_BANNER_PANEL_ID;


        var __ = function (key) {
            return Translate.getTranslated(HELP_BANNER_PANEL_I18N_PATH + '.' + key);
        };

        function HelpBannerPanel() {
            var self = this;

            self.__ = __;

            self.header = ko.observable('');
            self.content = ko.observable('');

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

            /**
             *
             * @param data {header : header , content : content }
             */
            self.setData = function (data) {
                self.header(data.header);
                self.content(data.content);
            };


            self.open = function () {
                $('#' + HELP_BANNER_PANEL_CONTAINER_ID).slideDown('slow');
            };

            /**
             *
             * @param data {header : header , content : content }
             */
            self.openWithData = function (data) {
                self.setData(data);
                self.open();
            };


            self.isOpened = function () {
                return $('#' + HELP_BANNER_PANEL_CONTAINER_ID).is(":visible");
            };

            self.close = function () {
                $('#' + HELP_BANNER_PANEL_CONTAINER_ID).slideUp('slow');
            };


            /**
             *
             * @param action
             * @param data
             * @param opts
             */
            self.act = function (action, data, opts) {
                if (!$('#' + HELP_BANNER_PANEL_ID).length) {
                    self.createPanel(action, data, opts);
                } else {
                    $.extend(self.opts, opts ? opts : {});

                    switch (action) {
                        case 'open':
                            self.open();
                            break;
                        case 'openWithData':
                            self.openWithData(data, opts);
                            break;
                        case 'close':
                            self.close(data, opts);
                            break;
                    }
                }
            };

            self.createPanel = function () {
                var containerSelector = '#' + HELP_BANNER_PANEL_CONTAINER_ID;
                var panelSelector = '#' + HELP_BANNER_PANEL_ID;

                if ($(containerSelector).length) {
                    if (!$(panelSelector).length) {
                        Utils.loadHtmlAsync(containerSelector, HelpBannerPanel.template, function () {
                            ko.applyBindings(self, document.getElementById(HELP_BANNER_PANEL_CONTAINER_ID));
                            Translate.getTranslated($(containerSelector));

                            $('#help-banner-close-button').click(function (event) {
                                event.stopPropagation();
                                self.act('close');
                            });

                        });
                    }
                }
            };
        }



        HelpBannerPanel.getInstance = function () {
            if (!HelpBannerPanel._instance) {
                HelpBannerPanel._instance = new HelpBannerPanel();
                HelpBannerPanel._instance.createPanel();
            }

            return HelpBannerPanel._instance;
        };

        HelpBannerPanel.panel = HelpBannerPanel.getInstance().act;

        return HelpBannerPanel;
    }
);
