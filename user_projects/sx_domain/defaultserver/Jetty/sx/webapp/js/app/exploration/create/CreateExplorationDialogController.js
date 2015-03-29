/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('CreateExplorationDialogController', [
        'jquery',
        'knockout',
        'Utils',
        'HelpController',
        'ExplorationUtils',
        'SourceStorage',
        'SourceSummaryController',
        'ColorCoding',
        'Exploration',
        'EventTypeField',
        'NotificationUtils',
        'ExplorationsLoader',
        'ExplorationConverter',
        'TagsStorage',
        'WeightTag',

        'ojs/ojcore',
        'ojs/ojknockout',
        'ojs/ojbutton',
        'ojs/ojdialog',

        'select2'
    ],

    /**
     * @exports exploration/sources
     * @ignore
     */
    function ($, ko, Utils, HelpController, ExplorationUtils, SourceStorage, SourceSummaryController, ColorCoding, Exploration, EventTypeField, NotificationUtils, ExplorationsLoader, ExplorationConverter, TagsStorage, WeightTag) {


        /**
         * @class
         * @classdesc create Exploration Dialog
         * opened if user choose Exploration in Create New Item Menu in Catalog
         *
         * @constructor
         */
        function CreateExplorationDialogController() {

            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = this.exUtils.explorationKoModel;

            var self = this;
            this.createExplorationDialogContent = null;


            this.displayName = ko.observable("");
            this.description = ko.observable("");
            this.tags = ko.observable([]);
            /**
             *
             * @type {EventSource}
             */
            this.source = ko.observable(null);


            /**
             * update only on open catalog
             * @type {string}
             */
            this.cachedUniqueDisplayName = "";


            this.isCreateExplorationButtonDisabled = ko.computed(function () {
                return (this.source() == null ||
                this.displayName().length === 0);
            }, this);

        }


        CreateExplorationDialogController.prototype.onOpenCatalog = function () {
            this.createExplorationDialogContent = $(this.exUtils.createExplorationDialogContent);
            if (!this.createExplorationDialogContent.length) {
                this.initCreateExplorationDialogContent();
            } else {
                this.resetCreateExplorationDialogControllerState();
            }

            HelpController.getInstance().setDialogTopicId(HelpController.CREATE_EXPLORATION_DLG, this.createExplorationDialogContent);

            this.cachedUniqueDisplayName = this.exUtils.getUniqueExplorationDisplayName();

        };

        CreateExplorationDialogController.prototype.resetCreateExplorationDialogControllerState = function () {
            this.displayName("");
            this.description("");

            this.tags().splice(0, this.tags().length);
            $(this.exUtils.createExplorationDialogTags).select2("data", [], true);

            this.source(null);
            $(this.exUtils.createExplorationDialogSource).select2("data", [], true);

        };

        CreateExplorationDialogController.prototype.getUniqueExplorationName = function () {
            this.displayName(this.cachedUniqueDisplayName);

        };


        CreateExplorationDialogController.prototype.initCreateExplorationDialogContent = function () {
            var self = this;
            this.loadCreateExplorationDialogHtmlPattern();
            Utils.translateJqueryElement(this.createExplorationDialogContent);

            this.initOpenCreateExplorationDialogButton();
            this.initTagsController();
            this.initSourceController();

            ko.applyBindings(self, this.createExplorationDialogContent[0]);
        };

        CreateExplorationDialogController.prototype.loadCreateExplorationDialogHtmlPattern = function () {
            var createExplorationDialogContainer = $(this.exUtils.createExplorationDialogContainer);
            createExplorationDialogContainer.append(this.exUtils.createExplorationDialogPattern);
            this.createExplorationDialogContent = $(this.exUtils.createExplorationDialogContent);

        };

        CreateExplorationDialogController.prototype.initTagsController = function () {
            var self = this;


            var selectTags = $(this.exUtils.createExplorationDialogTags).select2({
                    placeholder: this.exUtils.createExplorationDialogTagsComboboxPlaceholder,
                    containerCssClass: 'createExplorationDialogTagsContainer',
                    maximumSelectionSize: 8,
                    width: 'off',
                    dropdownAutoWidth: false,
                    minimumInputLength: 1,
                    tokenSeparators: [
                        ";",
                        ",",
                        "."
                    ],
                    createSearchChoice: createTag,
                    maximumInputLength: 20,
                    tags: TagsStorage.getInstance().getTags(),
                    id: function (weightTag) {
                        return weightTag ? weightTag.name : null;
                    },
                    formatSelection: tagFormat.bind(self),  //Function used to render the current selection.
                    formatResult: tagFormat.bind(self),     //Function used to render a result that the user can select.
                    formatInputTooShort: this.exUtils.createExplorationDialogTagsTooltip,
                    multiple: true,
                    escapeMarkup: function (m) {
                        return m;
                    }
                }
            );

        };


        CreateExplorationDialogController.prototype.getExplorationTags = function () {
            return $(this.exUtils.createExplorationDialogTags).select2("val");
        };


        CreateExplorationDialogController.prototype.initSourceController = function () {
            var self = this;


            var selectSource = $(this.exUtils.createExplorationDialogSource).select2({
                    placeholder: this.exUtils.createExplorationDialogSourceComboboxPlaceholder,
                    containerCssClass: 'createExplorationDialogSourceContainer',
                    maximumSelectionSize: 1,
                    width: 'off',
                    dropdownAutoWidth: false,
                    minimumInputLength: 0,
                    query: findSources.bind(self),
                    id: function (source) {
                        return source ? source.name : null;
                    },
                    formatSelection: colorCodingFormat.bind(self),  //Function used to render the current selection.
                    formatResult: colorCodingFormat.bind(self),     //Function used to render a result that the user can select.
                    multiple: true,
                    escapeMarkup: function (m) {
                        return m;
                    }
                }
            );

            selectSource.on("change", function (event) {
                sourcesChangeListener.call(self, event);
            });

        };


        function sourcesChangeListener(event) {
            var removedSources = (event.removed) ? ((event.removed  instanceof Array) ? event.removed : [event.removed] ) : null;
            var addedSources = (event.added) ? ((event.added  instanceof Array) ? event.added : [event.added] ) : null;


            if (addedSources && addedSources.length) {
                var eventSource = addedSources[0];
                if (eventSource.isCorrupted()) {
                    NotificationUtils.failedToGetSource(eventSource.displayName || eventSource.id);
                } else {
                    this.source(addedSources[0]);
                }
                updateTooltipForRemoveSourceIcon();

            }

            if (removedSources && removedSources.length) {
                this.source(null);
            }

        }

        function updateTooltipForRemoveSourceIcon() {
            $(ExplorationUtils.getInstance().createExplorationDialogSourceRemoveIcons).attr('title', ExplorationUtils.getInstance().RemoveThisSource);
        }


        /**
         *  Function used to query sources by user input
         * @param query   Search object contains term entered by user.
         */
        function findSources(query) {


            var sources = SourceStorage.getInstance().getSources();

            var queryResults = [];

            for (var i = 0; i < sources.length; i++) {
                var source = sources[i];

                var queryTerm = query.term.toLowerCase();
                if (source.windowable) {//only streams
                    if (queryTerm) {
                        //first source in Exploration should be STREAM type (not data source)
                        if (source.displayName.toLowerCase().indexOf(queryTerm) > -1) {
                            queryResults.push(source);
                        }
                    } else {
                        queryResults.push(source);
                    }

                }
            }

            var data = {
                results: queryResults,
                text: "displayName"
            };
            query.callback(data);

        }


        /**
         *
         * @param {string}  term
         */
        function createTag(term) {
            return WeightTag.createTag(term);

        }

        /**
         *
         * @param {WeightTag} tag
         * @param {JqueryElement} container
         * @returns {*}
         */
        function tagFormat(tag, container) {

            if (!tag.name) { // optgroup
                return tag;
            }

            return tag.name;
        }


        /**
         *
         * @param {EventSource} source
         * @param {JqueryElement} sourceContainer
         * @returns {*}
         */
        function colorCodingFormat(source, sourceContainer) {
            var id = source.id;

            if (!id) { // optgroup
                return source.text;
            }
            var parent = sourceContainer.parent();
            var iconClass = source.sourceType.value;
            var self = this;

            if (parent.is("li")) { //current selection(selected item )
                var colorClass = ColorCoding.getInstance().colors[0];
                parent.addClass(colorClass);
                parent.addClass('grey');
                parent.addClass(iconClass);
                parent.attr('title', self.exUtils.viewSourceDetails);
                parent.click(function () {
                        SourceSummaryController.getInstance().viewTheSourceFromCreateExplorationDialog(
                            source,
                            function sourceSummaryOnCloseCallBack() {
                                setTimeout(function () {  // setTimeout because Esc button on SourceSummary - closed also  CreateExplorationDialog
                                    $(self.exUtils.createExplorationDialogContent).ojDialog("open");
                                }, 300);

                            }
                        );
                        self.createExplorationDialogContent.ojDialog("close");
                    }
                );

            } else { // item that user can select
                sourceContainer.addClass(iconClass);
//                sourceContainer.addClass('grey');


            }

            var format = $("<span />", {
                    text: source.displayName
                }
            )[0].outerHTML;

            return format;
        }


        CreateExplorationDialogController.prototype.initOpenCreateExplorationDialogButton = function () {
            var self = this;

            $(this.exUtils.openCreateExplorationDialog).click(
                function () {
                    self.openCreateExplorationDialog();
                }
            );
        };


        /**
         *
         * @param {EventSource | null} source - dialog can be opened with source, after edit/create source
         * @see SourceForm
         *
         */
        CreateExplorationDialogController.prototype.openCreateExplorationDialog = function (source) {
            this.resetCreateExplorationDialogControllerState();
            this.getUniqueExplorationName();
            if (source) {
                $(this.exUtils.createExplorationDialogSource).select2("data", [source], true);
            }
            SourceStorage.getInstance().onOpenCatalog();
            this.createExplorationDialogContent.ojDialog("open");

        };


        CreateExplorationDialogController.prototype.createExplorationButtonClick = function () {

            this.createNewExploration();
            this.createExplorationDialogContent.ojDialog("close");
        };


        CreateExplorationDialogController.prototype.createNewExploration = function () {
            var self = this;

            this.tags(this.getExplorationTags());

            var newExploration = new Exploration(
                null, //name
                this.displayName(),
                null,//createdBy
                null,//createdAt
                null,//updatedBy
                null,//updatedAt
                this.description(),
                this.tags(),
                [
                    this.source()
                ],
                null, //conditions
                null, //conditionsMatching
                null, //correlations
                null, //summaries
                null, //groupBy
                this.getFieldsForEventType()//fieldsForEventType
            );

            var explorationInJson = ExplorationConverter.getInstance().explorationToJson(newExploration);
            ExplorationsLoader.getInstance().createExploration(explorationInJson, onExplorationCreateSuccess, onExplorationCreateFailure);

        };


        /**
         *
         * @param {Response} response
         */
        function onExplorationCreateSuccess(response) {
            var explorationInJson = response.data;
            if (response.success && explorationInJson && explorationInJson.name) {


                /**
                 * see  more :
                 * @see SxStart.hashChanged
                 * @see SxControllerImpl.openExploration
                 *
                 */
                window.location.hash = '#explorationEditor:id=' + explorationInJson.name;
                Utils.reloadFromCache();

            } else {
                NotificationUtils.onResponseReturnsSuccessFalse(response);
            }
        }


        /**
         *
         * @param {FailureResponse} failureResponse
         */
        function onExplorationCreateFailure(failureResponse) {
            NotificationUtils.onFailureResponse(failureResponse);

        }

        CreateExplorationDialogController.prototype.getFieldsForEventType = function () {

            var source = this.source();

            var fieldsForEventType = [];
            for (var i = 0; i < source.fields.length; i++) {
                var field = source.fields[i];
                fieldsForEventType.push(new EventTypeField(field.name, field, true));
            }

            return fieldsForEventType;
        };


        CreateExplorationDialogController.prototype.cancelCreateExplorationButtonClick = function () {
            var self = this;
            this.resetCreateExplorationDialogControllerState();
            this.createExplorationDialogContent.ojDialog("close");
        };


        /**
         * Get instance of singleton
         *
         * @static
         * @return {CreateExplorationDialogController}
         */
        CreateExplorationDialogController.getInstance = function () {
            if (!this.instance) {
                this.instance = new CreateExplorationDialogController();
            }
            return this.instance;
        };


        return CreateExplorationDialogController;

    })
;
