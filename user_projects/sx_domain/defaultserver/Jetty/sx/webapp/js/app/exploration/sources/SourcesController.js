/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 1/15/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('SourcesController', [
        'jquery',
        'Utils',
        'ColorCoding',
        'ExplorationUtils',
        'QueryDependenciesController',
        'SourceStorage',
        'SourceType',
        'EditedRegion',
        'Translate',
        'SourceForm',
        'SourceSummaryController',
        'SourceThing',
        'NotificationUtils',
        'ExplorationConverter',

        'select2'
    ],

    /**
     * @exports exploration/sources
     * @ignore
     */
    function ($, Utils, ColorCoding, ExplorationUtils, QueryDependenciesController, SourceStorage, SourceType, EditedRegion, Translate, SourceForm, SourceSummaryController, SourceThing, NotificationUtils, ExplorationConverter) {


        /**
         * @class
         * @classdesc component in Exploration Editor, that add/remove sources to Exploration
         *
         * @constructor
         */
        function SourcesController() {


            var colorCoding = ColorCoding.getInstance();
            var exUtils = ExplorationUtils.getInstance();
            var dependenciesController = QueryDependenciesController.getInstance();
            var explorationKoModel = exUtils.explorationKoModel;

            /**
             * keep last Term used in query  -
             * on press Enter - create New source with the same name
             *
             * @type {string}
             */
            var lastQueryTerm = "";


            this.onOpenExplorationEditor = function (exploration) {

                var select = $(exUtils.sourceCombobox).select2({
                            placeholder: exUtils.sourcesComboboxPlaceholder,
                            containerCssClass: 'sourcesContainer',
                            maximumSelectionSize: colorCoding.colors.length,
                            width: 'off',
                            dropdownAutoWidth: false,
                            minimumInputLength: 0,
                            query: findSources,
                            id: function (source) {
                                return source ? source.name : null;
                            },
                            formatSelection: colorCodingFormat,  //Function used to render the current selection.
                            formatResult: colorCodingFormat,     //Function used to render a result that the user can select.
                            formatNoMatches: formatNoMatches,
                            multiple: true,
                            escapeMarkup: function (m) {
                                return m;
                            }
                        }
                    )
                    ;

                //listener
                select.on("change", function (event) {
                    sourcesChangeListener(event);
                });

                //listener
                select.on("select2-removing", function (event) {
                    dependenciesController.showConfirmDialogIfRemovedSourceAffectsExplorationClauses(event);
                });

                //select initial values
                exploration.sources().forEach(function (source) {// by one - because source color depends on previous selections
                    select.select2("data", select.select2("data").concat(source), true);
                });

                addSourceContainerFocusListener();
                resizeSourceControllerOnBrowserResize(select);
                addOnPressEnterListener();
            };


            /**
             * fix bug in select2 Version: 3.4.6
             * horizontal scrolling when resize browser window
             * see select2.resizeSearch method
             * @param select -select2

             */
            function resizeSourceControllerOnBrowserResize(select) {
                $(window).resize(function () {
                    setTimeout(
                        $.proxy(function () {
                            $(exUtils.sources + " .select2-input").width("auto");
                            select.select2("resizeSearch");
                        }, this), 100
                    );


                });
            }


            /**
             *   toggle to Edit mode on focus
             */
            function addSourceContainerFocusListener() {

                $(exUtils.sources).focusin(
                    function () {
                        explorationKoModel.currentEditedRegion(EditedRegion.EditedRegion.Sources);
                    }
                );

                $(exUtils.sources).focusout(
                    function () {
                        if (explorationKoModel.currentEditedRegion() == EditedRegion.EditedRegion.Sources && !isSelect2Opened()) {
                            explorationKoModel.currentEditedRegion(null);
                        }
                    }
                );

            }

            function isSelect2Opened() {
                return $("#select2-drop-mask").is(':visible');
            }


            function sourcesChangeListener(event) {
                var removedSources = (event.removed) ? ((event.removed  instanceof Array) ? event.removed : [event.removed] ) : null;
                var addedSources = (event.added) ? ((event.added  instanceof Array) ? event.added : [event.added] ) : null;


                var explorationSources = explorationKoModel.exploration().sources(); //faster iteration than ko.observableArray
                var observableSources = explorationKoModel.exploration().sources;


                if (addedSources) {
                    addedSources.forEach(function (addedEventSource) {
                        if (addedEventSource.isCorrupted()) {
                            NotificationUtils.failedToGetSource(addedEventSource.displayName || addedEventSource.id);
                        } else {
                            addedEventSource.color = getColorBySourceId(addedEventSource.id);
                            addedEventSource.window.subscribeToWindowPropertiesChanges(explorationKoModel.deployExplorationTrigger);
                            observableSources.push(addedEventSource);
                        }

                    });
                    updateTooltipForRemoveSourceIcon();
                }

                if (removedSources) {
                    removedSources.forEach(function (removedSource) {
                        for (var j = 0; j < explorationSources.length; j++) {
                            if (explorationSources[j].id === removedSource.id) {
                                removedSource.resetExplorationRelatedData();
                                observableSources.splice(j, 1);
                                break;
                            }
                        }
                    });


                }
            }


            function updateTooltipForRemoveSourceIcon() {
                $(ExplorationUtils.getInstance().sourcesRemoveIcons).attr('title', ExplorationUtils.getInstance().RemoveThisSource);
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

                    //first source in Exploration should be STREAM type (not data source)
                    var selectedSourcesLength = explorationKoModel.exploration().sources().length;
                    source.disabled = !(selectedSourcesLength || source.windowable);

                    var queryTerm = query.term.toLowerCase();
                    if (queryTerm) {
                        lastQueryTerm = query.term;
                        if (source.displayName.toLowerCase().indexOf(queryTerm) > -1) {
                            queryResults.push(source);
                        }
                    } else {
                        queryResults.push(source);
                    }
                }

                var data = {
                    results: queryResults,
                    text: "displayName"
                };
                query.callback(data);

            }


            /**
             * String containing "No matches" message
             * @param sourceName   Search string entered by user.
             * @returns {string} - Message html.
             */
            function formatNoMatches(sourceName) {
                if (sourceName) {
                    var noMatchesCreateSource = Translate.getTranslated(exUtils.noMatchesCreateSourceTemplate, [sourceName]);
                    return exUtils.noMatchesMessage + " " + noMatchesCreateSource;
                }
                return exUtils.noMatchesMessage + " " + exUtils.noMatchesCreateSourceEmptyName;
            }

            function addOnPressEnterListener() {
                $(exUtils.sources + " .select2-input").on('keyup', function (e) {
                    if (e.keyCode === 13) {
                        var ifNoMatchesElement = $(".select2-results .select2-no-results").text().indexOf(exUtils.noMatchesMessage) > -1;
                        if (ifNoMatchesElement) {
                            createNewSource();
                        }
                    }
                });
            }

            function createNewSource() {
                $(exUtils.sourceCombobox).select2("close");

                var newSource = new SourceThing();
                newSource.displayName(lastQueryTerm);

                SourceForm.getInstance(
                    'open',
                    newSource,
                    {
                        isStream: true, //if null it can be windowable or not
                        afterSave: addSavedSourceToSourceController,
                        beforeCancel: null

                    }
                );

            }

            /**
             *
             * @param {SourceThing} savedSourceThing
             */
            function addSavedSourceToSourceController(savedSourceThing) {
                var source = SourceStorage.getInstance().getFreshSourceBySourceId(savedSourceThing.name());
                var select = $(exUtils.sourceCombobox);
                select.select2("data", select.select2("data").concat(source), true);

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
                var color = getColorBySourceId(id);
                var icon = getSourceIconCssClassBySourceId(source);
                var parent = sourceContainer.parent();

                if (parent.is("li")) { //current selection(selected item )
                    parent.addClass(color);
                    parent.addClass(icon);
                    parent.addClass('grey');
                    parent.attr('title', exUtils.viewOrEditSourceDetails);
                    parent.click(function () {
                        SourceSummaryController.getInstance().clickOnSourceInExplorationEditor(source, function() {
                            ExplorationConverter.getInstance().checkExplorationAfterSourceUpdate(explorationKoModel.exploration(), source);
                        });
                    });

                } else { // item that user can select
                    sourceContainer.addClass(icon);
//                    sourceContainer.addClass('grey');
                }

                var format = $("<span />", {
                        text: source.displayName
                    }
                )[0].outerHTML;

                return format;
            }


            function getColorBySourceId(id) {
                var color;
                var explorationEventSources = explorationKoModel.exploration().sources();
                var currentEventSource = Utils.findById(id, explorationEventSources);

                if (currentEventSource && currentEventSource.color) {
                    color = currentEventSource.color;
                } else {
                    var selectedColors = explorationEventSources.map(function (source) {
                        return source.color;
                    });

                    color = colorCoding.returnFirstFreeColor(selectedColors);
                }
                return color;
            }

            /**
             *
             * @param {EventSource} source
             * @returns {string | css | SourceType.value}
             */
            function getSourceIconCssClassBySourceId(source) {
                return source.sourceType.value;
            }


        }

        /**
         * Get instance of singleton
         *
         * @static
         * @return {SourcesController}
         */
        SourcesController.getInstance = function () {
            if (!this.instance) {
                this.instance = new SourcesController();
            }
            return this.instance;
        };


        return SourcesController;

    })
;
