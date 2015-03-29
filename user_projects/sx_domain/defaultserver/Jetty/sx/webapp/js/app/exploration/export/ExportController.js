/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('ExportController', [
        'jquery',
        'knockout',
        'Utils',
        'HelpController',
        'ExplorationUtils',
        'ExportDependency',
        'ExplorationsLoader',
        'NotificationUtils',
        'SourceType',
        'Translate',

        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojcollapsible',


        'jqueryui',
        'fileDownload'
    ],

    /**
     * @exports exploration/export
     * @ignore
     */
        function ($, ko, Utils, HelpController, ExplorationUtils, ExportDependency, ExplorationsLoader, NotificationUtils, SourceType, oj) {

        var EXPORT_FILE_EXTENTION = ".jar";

        /**
         * @class
         * @classdesc by click on 'Export button' in 'Exploration Editor Menu'
         * user can see 'Export Dialog' and get ability to 'Export Exploration' and save as .jar
         *
         * @constructor
         */
        function ExportController() {

            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;

            this.exploration = this.exUtils.explorationKoModel.exploration;


            this.exportDependencies = ko.observableArray([]);

            this.uniqueId = ko.observable('');
            this.uniqueIdEditor = ko.computed({
                read: function () {
                    return  this.uniqueId();
                },
                write: function (value) {
                    value = validateBundleId(value);
                    if (value) {
                        this.uniqueId(value);
                    }
                    this.uniqueId.valueHasMutated();
                },
                owner: this
            }).extend({ notify: 'always' });


            this.bundleName = ko.observable('');
            this.bundleNameEditor = ko.computed({
                read: function () {
                    return  this.bundleName();
                },
                write: function (value) {
                    value = validateBundleName(value);
                    if (value) {
                        this.bundleName(value);
                    }
                    this.bundleName.valueHasMutated();
                },
                owner: this
            }).extend({ notify: 'always' });
        }


        ExportController.prototype.onOpenExplorationEditor = function () {
            this.initExportButtonInActionsMenu();
        };


        ExportController.prototype.initExportButtonInActionsMenu = function () {
            var self = this;
            $(this.exUtils.exportExplorationBtnInActionsMenu).click(function () {
                self.initExportContent();
                self.openExportDialog();
            });
        };


        ExportController.prototype.initExportContent = function () {
            var explContentJqueryPath = this.exUtils.exportContent;
            var exportContent = $(this.exUtils.exportContent);
            if (!exportContent.length) {
                var self = this;
                $('body').append('<div id="exportContainer" data-i18n-ns="*oep.exploration.export"></div>');
                
                
                this.loadExportHtmlPattern(function() { 
                    exportContent = $(self.exUtils.exportContent);
                    Utils.translateJqueryElement(exportContent);
                    //Translate.getTranslated();
                    ko.applyBindings(self, exportContent[0]);
                    self.initExportDependencies();
                    self.initExportAdvanchedOptions();
                });
            }
            else {
                this.initExportDependencies();
                this.initExportAdvanchedOptions();
            }
        };


        ExportController.prototype.initExportDependencies = function () {

            this.exportDependencies.removeAll();
            this.addExplorationDependency();
            this.addSourcesDependencies();
            this.addTargetsDependencies();
        };

        ExportController.prototype.addExplorationDependency = function () {

            var explorationDependency = new ExportDependency(
                this.exploration().name(),
                this.exploration().displayName(),
                this.exploration().description(),
                SourceType.SourceType.EXPLORATION_SOURCE_TYPE,
                this.exUtils.explorationDependencyTitle
            );

            this.exportDependencies.push(explorationDependency);
        };

        ExportController.prototype.addSourcesDependencies = function () {

            for (var i = 0; i < this.exploration().sources().length; i++) {
                var source = this.exploration().sources()[i];

                var sourceDependency = new ExportDependency(
                    source.name,
                    source.displayName,
                    source.description,
                    source.sourceType.value,
                    this.exUtils.sourceDependencyTitle
                );
                this.exportDependencies.push(sourceDependency);

            }
        };


        ExportController.prototype.addTargetsDependencies = function () {
            //TODO not show targets for current release in export
            // Targets are parts of exploration, not separate entities.
            // They do not have name, description and displayName.
            // instead they contain targetTypeName and a batch of parameters
/*
            for (var i = 0; i < this.exploration().targets().length; i++) {
                var target = this.exploration().targets()[i];

            //target is saved like explorationKoModel.exploration().targets().push(targetInJson)
                var targetDependency = new ExportDependency(
                    target.name,
                    target.displayName,
                    target.description,
                    SourceType.SourceType.TARGET,
                    this.exUtils.targetDependencyTitle
                );
                this.exportDependencies.push(targetDependency);

            }
            */
        };


        ExportController.prototype.initExportAdvanchedOptions = function () {
            var name = validateBundleId(this.exploration().displayName());
            if (name.length === 0) {
                name = "Exploration1";
            }
            this.uniqueId(name);
            this.bundleName(name);
        };

        function validateBundleId(value) {
            value = Utils.removeNonOSGILegalIdSymbols(value).trim();
            value = Utils.cutStringIfMoreCharactersThan(value, 64);
            return value;
        }


        function validateBundleName(value) {
            value = Utils.removeNonAsciiSymbols(value).trim();
            value = Utils.cutStringIfMoreCharactersThan(value, 250);
            return value;
        }

        ExportController.prototype.loadExportHtmlPattern = function (onLoadMarkup) {
            Utils.loadHtmlAsync(this.exUtils.exportContainer, this.exUtils.exportHTMLMarkup, onLoadMarkup);

        };


        ExportController.prototype.openExportDialog = function () {
            var self = this;

            var exportContainer = $(this.exUtils.exportContainer);
            HelpController.getInstance().setDialogTopicId(HelpController.EXPORT_EXPLORATION, exportContainer);

            exportContainer.dialog({
                dialogClass: self.exUtils.noTitleForJqueryUIDialog,
                title: self.exUtils.exportTitle,
                modal: true,
                minWidth: 620,
                minHeight: 600,
                buttons: {
                }
            });


            exportContainer.dialog("open");
            $(this.exUtils.exportButton).focus(20);
        };


        ExportController.prototype.exportButtonClick = function () {
            var self = this;
            var id = self.exploration().name();
            var bundleName = self.bundleName();
            var bundleId = self.uniqueId();

            if (id && bundleName && bundleId) {
                var fileName = getExportFileName(bundleId);
                var downloadUrl = getExportDownloadUrl(id, bundleName, bundleId, fileName);
                downloadByUsingFileDownloadPlugin.call(self, downloadUrl, fileName);
            }
        };


        /**
         *
         * @param {String} bundleId
         * @returns {string}
         */
        function getExportFileName(bundleId) {
            return bundleId + EXPORT_FILE_EXTENTION;
        }

        /**
         *
         * @param {string} downloadUrl
         * @param {string} fileName
         */
        function downloadByUsingFileDownloadPlugin(downloadUrl, fileName) {
            var self = this;
            $.fileDownload(downloadUrl, {
                successCallback: function (url) {
                    NotificationUtils.exportSuccesfull(fileName);
                    self.closeExportDialog();
                },
                failCallback: function (responseHtml, url) {
                    NotificationUtils.exportFailed(fileName);

                }
            });


        }

        /**
         *
         *
         * @see UtilService.java exportExploration method
         * @Path("/exportExploration/{explorationId}/{bundleName}/{bundleId}/{fileName}")
         *
         * @param {long}  explorationId
         * @param {String} bundleName
         * @param {String} bundleId
         * @param {String} fileName
         * @returns {string}
         */
        function getExportDownloadUrl(explorationId, bundleName, bundleId, fileName) {

            return "webresources/v0.1/exportExploration/" +
                explorationId + "/" +
                bundleName + "/" +
                bundleId + "/" +
                fileName;
        }


        ExportController.prototype.closeExportDialog = function () {
            var self = this;
            $(self.exUtils.exportContainer).dialog("close");
        };

        ExportController.prototype.exportHelpButtonClick = function () {
            var self = this;
            HelpController.getInstance().openHelpInNewWidow();
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExportController}
         */
        ExportController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ExportController();
            }
            return this.instance;
        };


        return ExportController;

    })
;
