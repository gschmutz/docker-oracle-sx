/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('DeleteItemConfirmationDialog', [
        'jquery',
        'knockout',
        'Utils',
        'Translate',

        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojdialog',

        'select2'
    ],

    /**
     * @exports catalog
     * @ignore
     */
    function ($, ko, Utils, Translate) {


        /**
         * @class
         * @classdesc delete catalog item confirmation Dialog
         *
         * @constructor
         */
        function DeleteItemConfirmationDialog() {

            var self = this;
            this.item = ko.observable(null);
            this.deleteItemConfirmationDialogContent = null;
            this.deleteItemConfirmationDialogTranslatePrefix = "oep.search.deleteItemDialog.";
            this.areYouSureToDeleteItem = "areYouSureToDeleteItem";

            this.deleteItemConfirmationDialogContainer = "#deleteItemConfirmationDialogContainer";
            this.deleteItemConfirmationDialogContent_ = "#deleteItemConfirmationDialogContent";
            this.deleteConfirmationMessage_ = ".deleteConfirmationMessage";
            this.deleteItemConfirmationDialogPattern = Utils.loadContent('html/catalog/deleteItemConfirmationDialog.html');
        }


        DeleteItemConfirmationDialog.prototype.onOpenCatalog = function () {
            this.deleteItemConfirmationDialogContent = $(this.deleteItemConfirmationDialogContent_);
            if (!this.deleteItemConfirmationDialogContent.length) {
                this.initDeleteItemConfirmationDialogContent();
            } else {
                this.resetDeleteItemConfirmationDialogState();
            }

        };

        DeleteItemConfirmationDialog.prototype.resetDeleteItemConfirmationDialogState = function () {
            this.item(null);
        };


        DeleteItemConfirmationDialog.prototype.initDeleteItemConfirmationDialogContent = function () {
            var self = this;


            this.loadDeleteItemConfirmationDialogHtmlPattern();
            Utils.translateJqueryElement(this.deleteItemConfirmationDialogContent);

            ko.cleanNode(this.deleteItemConfirmationDialogContent[0]);
            ko.applyBindings(self, this.deleteItemConfirmationDialogContent[0]);
        };

        DeleteItemConfirmationDialog.prototype.loadDeleteItemConfirmationDialogHtmlPattern = function () {
            var deleteItemConfirmationDialogContainer = $(this.deleteItemConfirmationDialogContainer);
            deleteItemConfirmationDialogContainer.append(this.deleteItemConfirmationDialogPattern);
            this.deleteItemConfirmationDialogContent = $(this.deleteItemConfirmationDialogContent_);

        };

        /**
         *
         * @param {Thing}  - catalog Item
         *
         */
        DeleteItemConfirmationDialog.prototype.openDeleteItemConfirmationDialog = function (thing) {
            this.resetDeleteItemConfirmationDialogState();
            this.item(thing);
            var itemName = thing.displayName() || "";
            var areYouSureToDeleteItem = Translate.getTranslated(this.deleteItemConfirmationDialogTranslatePrefix + this.areYouSureToDeleteItem, [itemName]);
            this.deleteItemConfirmationDialogContent.find(this.deleteConfirmationMessage_).text(areYouSureToDeleteItem);

            this.deleteItemConfirmationDialogContent.ojDialog("open");

        };


        DeleteItemConfirmationDialog.prototype.deleteItem = function () {
            var thing = this.item();
            thing.goDelete(thing);
            this.deleteItemConfirmationDialogContent.ojDialog("close");
        };


        DeleteItemConfirmationDialog.prototype.cancelDeleteItem = function () {
            var self = this;
            this.deleteItemConfirmationDialogContent.ojDialog("close");
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {DeleteItemConfirmationDialog}
         */
        DeleteItemConfirmationDialog.getInstance = function () {
            if (!this.instance) {
                this.instance = new DeleteItemConfirmationDialog();
            }
            return this.instance;
        };


        return DeleteItemConfirmationDialog;

    })
;
