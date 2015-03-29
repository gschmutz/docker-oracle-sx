/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('SourceSummaryController', [
        'jquery',
        'knockout',
        'Utils',
        'ExplorationUtils',
        'SourceStorage',
        'SourceType',
        'Translate',
        'HelpController',
        'SourceForm',
        'SourceThing',
        'EventSource',

        'jqueryui'
    ],

    /**
     * @exports exploration/sources
     * @ignore
     */
    function ($, ko, Utils, ExplorationUtils, SourceStorage, SourceType, Translate, HelpController, SourceForm, SourceThing, EventSource) {


        /**
         * @class
         * @classdesc by click on source in Exploration Editor or Catalog
         * user can see Source Details , then go to Source Editor
         *
         * @constructor
         */
        function SourceSummaryController() {

            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;

            /**
             *
             * @type {EventSource}
             */
            this.source = ko.observable(null);

            this.isEditEnabled = ko.observable(true);

            /**
             *
             * @type {Function}
             */
            this.onCloseCallback = null;

        }


        SourceSummaryController.prototype.onOpenExplorationEditor = function () {
            var sourceSummaryContent = $(this.exUtils.sourceSummaryContent);
            if (!sourceSummaryContent.length) {
                this.initSourceSummaryContent();
            } else {
                this.resetSourceSummaryControllerState();
            }
        };


        SourceSummaryController.prototype.onOpenCatalog = function () {
            this.onOpenExplorationEditor();
        };


        SourceSummaryController.prototype.resetSourceSummaryControllerState = function () {
            this.source(null);
            this.onCloseCallback = null;
        };


        SourceSummaryController.prototype.initSourceSummaryContent = function () {
            var self = this;
            this.loadSourceSummaryHtmlPattern();
            var sourceSummaryContent = $(this.exUtils.sourceSummaryContent);
            Utils.translateJqueryElement(sourceSummaryContent);
            ko.applyBindings(self, sourceSummaryContent[0]);
        };

        SourceSummaryController.prototype.loadSourceSummaryHtmlPattern = function () {
            var sourceSummaryContainer = $(this.exUtils.sourceSummaryContainer);
            sourceSummaryContainer.append(this.exUtils.sourceSummaryPattern);

        };


        /**
         * on source click
         *
         * @param {EventSource} source
         */
        SourceSummaryController.prototype.clickOnSourceInExplorationEditor = function (source, onCloseCallback) {
            this.isEditEnabled(true);
            this.source(source);
            this.onCloseCallback = onCloseCallback || false;
            this.openSourceSummaryDialog(true);
        };

        /**
         *
         * @param {SourceThing} sourceThing
         * @param {Function} onCloseCallback
         */
        SourceSummaryController.prototype.viewTheSourceFromCatalog = function (sourceThing, onCloseCallback) {
            var source = SourceStorage.getInstance().getFreshSourceBySourceId(sourceThing.name());

            this.isEditEnabled(true);
            this.source(source);
            this.onCloseCallback = onCloseCallback;
            this.openSourceSummaryDialog(false);
        };


        /**
         *
         * @param {EventSource} source
         * @param {Function} onCloseCallback
         */
        SourceSummaryController.prototype.viewTheSourceFromCreateExplorationDialog = function (source, onCloseCallback) {

            this.isEditEnabled(false);
            this.source(source);
            this.onCloseCallback = onCloseCallback;
            this.openSourceSummaryDialog(true);
        };


        /**
         *
         * @param {boolean} isCloseCallbackShouldBeExecuted  - used to refresh catalog after change source
         */
        SourceSummaryController.prototype.openSourceSummaryDialog = function (isCloseCallbackShouldBeExecuted) {
            var self = this;


            var sourceSummaryContainer = $(this.exUtils.sourceSummaryContainer);
            if (self.source().windowable) {
                HelpController.getInstance().setDialogTopicId(HelpController.STREAM, sourceSummaryContainer);
            } else {
                HelpController.getInstance().setDialogTopicId(HelpController.REFERENCE, sourceSummaryContainer);
            }


            sourceSummaryContainer.dialog({
                dialogClass: self.exUtils.noTitleForJqueryUIDialog,
                title: self.exUtils.sourceSummaryTitle,
                modal: true,
                minWidth: 620,
                minHeight: 600,
                buttons: {},
                close: function (event, ui) {
                    if (isCloseCallbackShouldBeExecuted && self.onCloseCallback) {
                        self.onCloseCallback();
                    }
                }
            });

            var sourceDetailsAccordion = $(this.exUtils.sourceDetailsAccordion);
            var sourceShapeAccordion = $(this.exUtils.sourceShapeAccordion);
            var sourceTypeParametersAccordion = $(this.exUtils.sourceTypeParametersAccordion);

            sourceDetailsAccordion.accordion({collapsible: true, heightStyle: "content"});
            sourceTypeParametersAccordion.accordion({collapsible: true, heightStyle: "content"});
            sourceShapeAccordion.accordion({collapsible: true, heightStyle: "content"});


            sourceSummaryContainer.dialog("open");
            $(this.exUtils.sourceSummaryDoneButton).focus(20);
        };


        SourceSummaryController.prototype.getUpdatedAtFormatted = function () {
            var self = this;
            return self.convertToDate(self.source().updatedAt);
        };


        SourceSummaryController.prototype.getCreatedAtFormatted = function () {
            var self = this;
            return self.convertToDate(self.source().createdAt);
        };


        /**
         *
         * @param int
         */
        SourceSummaryController.prototype.convertToDate = function (int) {
            return Translate.getTranslated(
                new Date(int),
                {
                    formatType: 'datetime',
                    dateFormat: 'short',
                    timeFormat: 'long'
                }
            );
        };


        SourceSummaryController.prototype.sourceSummaryDoneButtonClick = function () {
            var self = this;
            this.source(null);
            $(self.exUtils.sourceSummaryContainer).dialog("close");
        };

        SourceSummaryController.prototype.closeSourceSummary = function () {
            var self = this;
            $(self.exUtils.sourceSummaryContainer).dialog("close");
        };

        SourceSummaryController.prototype.sourceSummaryHelpButtonClick = function () {
            HelpController.getInstance().openHelpInNewWidow();
        };


        /**
         * on press button editSource
         *
         */
        SourceSummaryController.prototype.sourceSummaryEditButtonClick = function () {
            var self = this;
            var source = self.source();

            if (SourceType.SourceType.EXPLORATION_SOURCE_TYPE == source.sourceType.value ||
                SourceType.SourceType.PATTERN_BASED_EXPLORATION_SOURCE_TYPE == source.sourceType.value
            ) {
                editExploration(self, source);
            } else {
                editSource(self, source);
            }

        };

        /**
         *
         * @param self
         * @param {EventSource} source
         */
        function editExploration(self, source) {


            var confirmDialogContaner = $(self.exUtils.explorationEditorConfirmDialogClass);
            var confirmDialog = confirmDialogContaner.find(self.exUtils.explorationEditorConfirmDialog);


            confirmDialogContaner.find(self.exUtils.explorationEditorConfirmDialogCreateButton).unbind().click(function () {
                confirmDialog.ojDialog("close");
                window.location.hash = '#explorationEditor:id=' + source.id;
                Utils.reloadFromCache();

            });

            confirmDialogContaner.find(self.exUtils.explorationEditorConfirmDialogCancelButton).unbind().click(function () {
                confirmDialog.ojDialog("close");
            });


            confirmDialog.find(self.exUtils.explorationEditorConfirmDialogMessage).html(self.exUtils.areYouSureToLeaveCurrentExploration);

            confirmDialog.ojDialog("open");



        }

        /**
         *
         * @param self
         * @param {EventSource} source
         */
        function editSource(self, source) {
            self.closeSourceSummary();
            SourceForm.getInstance(
                'open',
                source.id,
                {
                    scope: self,
                    isStream : source.windowable,
                    afterSave: self.updateSourceStorageAndReopenSourceSummaryDialog,
                    beforeCancel: self.updateSourceStorageAndReopenSourceSummaryDialog
                }
            );
        }

        /**
         *
         * @param {SourceThing} savedSourceThing
         */
        SourceSummaryController.prototype.updateSourceStorageAndReopenSourceSummaryDialog = function (savedSourceThing) {
            if (savedSourceThing) {    //source saved
                var savedSource = new EventSource(savedSourceThing.getPlainData());
                SourceStorage.getInstance().refreshSourceInSourceStorage(savedSource);
                this.source(savedSource);
                this.openSourceSummaryDialog(true);
                //when source changed exploration become redeployed ( and pubsub channel become changed too)
                this.exUtils.explorationKoModel.deployExplorationTrigger(true);
                //TODO check that cql query clauses that depends on changed source is valid
                //TODO redeploy exploration

            } else {                      //sourceForm cancel or error
                this.openSourceSummaryDialog(true);

            }
            return true;
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourceSummaryController}
         */
        SourceSummaryController.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourceSummaryController();
            }
            return this.instance;
        };


        return SourceSummaryController;

    })
;
