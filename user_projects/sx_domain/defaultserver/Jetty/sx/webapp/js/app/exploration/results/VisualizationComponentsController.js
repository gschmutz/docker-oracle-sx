/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('VisualizationComponentsController', [
        'jquery',
        'knockout',
        'ExplorationKoModel',
        'ExplorationUtils',
        'Utils',
        'EventProcessingTable',
        'ChartsBucketsController',
        'EventTypeField',
        'ConstantField',
        'FieldType',
        'EventTypeController',
        'Translate',
        'ValidationTune',
        'orderedListMenu'

    ],
    /**
     * @exports exploration/results
     * @ignore
     */
        function ($, ko, ExplorationKoModel, ExplorationUtils, Utils, EventProcessingTable, ChartsBucketsController, EventTypeField, ConstantField, FieldType, EventTypeController, Translate, ValidationTune) {

        /**
         *
         * @class
         * @classdesc create, update, delete Visualization Components (table and charts)
         *
         * @constructor
         * @param observableEvent
         *
         */
        function VisualizationComponentsController(observableEvent) {

            this.exUtils = ExplorationUtils.getInstance();
            this.explorationKoModel = ExplorationKoModel.getInstance();

            this.bucketId = this.exUtils.bucket1;
            this.observableEvent = observableEvent;
            this.tableId = Utils.toJqueryId(Utils.getChildId(this.bucketId, this.exUtils.table));
            this.tableContainerId = Utils.toJqueryId(Utils.getChildId(this.bucketId, this.exUtils.tableContainer));
            this.eventTypeColumnsBtnId = Utils.getChildId(this.bucketId, this.exUtils.btnEventTypeColumns);
            this.showTimestampMode = ko.observable('').extend({ notify: 'always' });
            this.showServerTimestampId = Utils.getChildId(this.bucketId, this.exUtils.showServerTimestamp);
            this.sourceLabelsId = Utils.getChildId(this.bucketId, this.exUtils.resultSourceLabels);

            /**
             *
             * @type {EventProcessingTable}
             */
            this.eventProcessingTable = null;


            /**
             * menu that allows to change table columns visibility / order / and alias  (EventType)
             * @type {jquery}
             */
            this.tablePropertiesMenu = null;

            /**
             *
             * @type {ChartsViewModeSwitcher}
             */
            this.chartsBucketsController = null;

        }


        VisualizationComponentsController.prototype.onCloseExplorationEditor = function () {
            if (this.tablePropertiesMenu) {
                this.tablePropertiesMenu = null;
            }

            if (this.tableShowTimestampBtn) {
                this.tableShowTimestampBtn = null;
                this.showTimestampMode('');
            }

            if (this.eventProcessingTable) {
                this.eventProcessingTable.onCloseExplorationEditor();
                this.eventProcessingTable = null;
            }

            if (this.chartsBucketsController) {
                this.chartsBucketsController.close();
                this.chartsBucketsController = null;
            }
        };


        VisualizationComponentsController.prototype.rebuildVisualizationComponents = function () {
            this.rebuildTableControls();
            this.rebuildChartsControls();
        };


        VisualizationComponentsController.prototype.rebuildChartsControls = function () {
            if (!this.chartsBucketsController) {
                this.chartsBucketsController = new ChartsBucketsController(this.observableEvent, this.exUtils.chartsId);
            }

            this.chartsBucketsController.rebuild(EventTypeController.getInstance().deployedEventType);
        };


        VisualizationComponentsController.prototype.rebuildTableControls = function () {
            if (this.eventProcessingTable) {
                this.eventProcessingTable.onCloseExplorationEditor();
                this.eventProcessingTable = null;
            }
            this.getTable().recreateTable(EventTypeController.getInstance().deployedEventType);
            this.rebuildTableMenusPanel();
        };


        VisualizationComponentsController.prototype.getTable = function () {
            if (!this.eventProcessingTable) {
                this.eventProcessingTable = new EventProcessingTable(
                    this.tableId,
                    this.tableContainerId,
                    this.showTimestampMode,
                    this.observableEvent,
                    this.exUtils.resultsTableHeight);
            }
            return this.eventProcessingTable;
        };

        VisualizationComponentsController.prototype.rebuildTableMenusPanel = function () {

            this.rebuildTableSourcesLabels(this.explorationKoModel.exploration().primaryQuery() ? this.explorationKoModel.exploration().primaryQuery().sources : []);
            this.rebuildTablePropertiesMenu();
            this.rebuildShowTimestampButton();

        };

        //todo : refactoring
        VisualizationComponentsController.prototype.rebuildTableSourcesLabels = function (sources) {
            var lblSources = $('#' + this.sourceLabelsId);
            lblSources.html('');
            var sourceTitle = 'oep.exploration.resultButtons.sources.SOURCE_FIELD';

            $.each(sources, function (key, source) {
                var sourceClass = source.color;
                var color = $('<div></div>')
                    .addClass('color')
                    .addClass(sourceClass);
                var label = $('<span></span>')
                    .text(source.displayName);

                $('<div></div>')
                    .addClass('sourceColorLabel')
                    .attr('title', Translate.getTranslated(sourceTitle, [source.displayName]))
                    .append(color)
                    .append(label)
                    .appendTo(lblSources);
            });

            //This lines are devoted to displaying label for custom fields
            var noSourceItemCssClass = 'colorCodingConstantField';
            if (this.explorationKoModel.exploration()) {
                var fieldsForEventType = this.explorationKoModel.exploration().fieldsForEventType();
                if (fieldsForEventType) {
                    var customFieldIsFound = false;
                    for (var i in fieldsForEventType) {
                        if (!fieldsForEventType[i].field.source) {
                            customFieldIsFound = true;
                            break;
                        }
                    }
                    if (customFieldIsFound) {
                        var color = $('<div></div>')
                            .addClass('color')
                            .addClass(noSourceItemCssClass);
                        var customDefinedProperty = Translate.getTranslated('oep.exploration.resultButtons.sources.USER_DEFINED_FIELD');

                        var label = $('<span></span>')
                            .text(customDefinedProperty);

                        $('<div></div>')
                            .addClass('sourceColorLabel')
                            .append(color)
                            .append(label)
                            .appendTo(lblSources);
                    }
                }
            }
        };


        VisualizationComponentsController.prototype.rebuildTablePropertiesMenu = function () {
            if (!this.tablePropertiesMenu) {
                this.tablePropertiesMenu = this.getTablePropertiesMenu();
            } else {
                this.tablePropertiesMenu.orderedListMenu('rebuildItems', EventTypeController.getInstance().fieldsEditedInTablePropertiesMenu);
            }
        };


        VisualizationComponentsController.prototype.rebuildShowTimestampButton = function () {
            if (!this.tableShowTimestampBtn) {
                this.tableShowTimestampBtn = this.getTimestampButton();
            }
        };


        VisualizationComponentsController.prototype.getTimestampButton = function () {
            var self = this;
            return $('#' + this.showServerTimestampId)
                .addClass('off')
                .click(function () {
                    var btn = $(this);
                    btn.removeClass('on').removeClass('off');
                    if (self.showTimestampMode()) {
                        self.showTimestampMode('');
                        btn.addClass('off');
                    } else {
                        self.showTimestampMode('date');
                        btn.addClass('on');
                    }
                    console.log('turn ' + btn.attr('class') + ' the timestamp');
                });
        };


        VisualizationComponentsController.prototype.getTablePropertiesMenu = function () {

            if (!this.tablePropertiesMenu) {
                var fieldsEditedInTablePropertiesMenu = EventTypeController.getInstance().fieldsEditedInTablePropertiesMenu;

                this.tablePropertiesMenu = $('#' + this.eventTypeColumnsBtnId).orderedListMenu({
                    items: fieldsEditedInTablePropertiesMenu,
                    alignMenuLeft: true,
                    //itemIdProperty: 'id',
                    itemStyleProperty: 'field.source.color',
                    //itemIdProperty: 'field.name',
                    itemLabelProperty: 'alias',
                    itemCheckedProperty: 'visible',
                    itemValueProperty: 'field.value',
                    defaultItemCssClass: 'colorCodingConstantField',

                    edit: {
                        reorderEnabled: true,
                        addEnabled: true,
                        editEnabled: true,
                        deleteEnabled: true,
                        labelPatternRegExp: $.validationEngineLanguage.allRules.sqlalias.regex,
                        createNewConstantField: function (name, value) {
                            return new EventTypeField(
                                name,
                                new ConstantField(
                                    name,
                                    FieldType.getFieldTypeByName(FieldType.TYPES.string),
                                    value
                                ),
                                true
                            );
                        },
                        applyFieldsEditedInTablePropertiesMenu: function (fieldsEditedInTablePropertiesMenu) {
                            EventTypeController.getInstance().applyFieldsEditedInTablePropertiesMenu(fieldsEditedInTablePropertiesMenu);
                        }
                    },
                    check: function (ev, incomingObject) {
                        var checked = false;
                        $.each(incomingObject.items, function (index, val) {
                            checked = checked || this.item.visible;
                        });
                        if (!checked) {
                            incomingObject.container.addClass('error');
                            incomingObject.container.attr('title', Translate.getTranslated('oep.exploration.warnings.columnsNotSelected'));
                        } else {
                            incomingObject.container.removeClass('error');
                            incomingObject.container.removeAttr('title');
                        }
                    }
                });
            }

            return this.tablePropertiesMenu;
        };

        return VisualizationComponentsController;

    }
);




