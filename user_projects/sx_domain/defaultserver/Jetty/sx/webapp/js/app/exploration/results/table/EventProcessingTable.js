/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('EventProcessingTable', [
        'jquery',
        'knockout',
        'jqueryui',
        'Table',
        'ExplorationUtils',
        'UserPreferencesModel',
        'Translate',
        'Utils'
    ],

    /**
     * @exports exploration/table
     * @ignore
     */
        function ($, ko, jqueryui, Table, ExplorationUtils, UserPreferencesModel, Translate, Utils) {

        /**
         * @class
         * @classdesc show events, processed by Exploration
         * @extends Table
         *
         * @param {string} tableId
         * @param {ko.observable | Event}  observableEvents
         * @param {ko.observable | QueryParameters} observableQuery
         * @param {number} MAX_EVENTS_IN_TABLE
         * @param {string} height
         */
        function EventProcessingTable(tableId, tableContainerId, timestampMode, observableEvents, height) {

            this.tableId = tableId;
            this.tableContainerId = tableContainerId;
            this.setupEventNotificator(observableEvents);
            this.setupTimestampListener(timestampMode);

            /**
             *
             * @type {int}
             */
            this.MAX_EVENTS_IN_TABLE = UserPreferencesModel.getInstance().getTableSize();
            this.height = height;

            this.eventTable = null;
            this.eventCount = 0;

            /**
             *    table columns
             * @type {EventTypeField[]}
             */
            this.columns = undefined;

            this.SERVER_TIMESTAMP = ExplorationUtils.getInstance().SERVER_TIMESTAMP;
        }

        EventProcessingTable.prototype = new Table();

        EventProcessingTable.prototype.setupTimestampListener = function (timestampModeObservable) {
            this.timestampModeObservable = timestampModeObservable;
            var self = this;
            timestampModeObservable.subscribe(function (mode) {
                console.log('change timestamp mode: {{' + mode + '}}');
                if (self.eventTable) {
                    var bShow = mode ? true : false;
                    var bRedraw = false;
                    self.eventTable.column(0).visible(bShow);
                    self.eventTable.columns.adjust().draw(bRedraw);
                }
                if (self.timestampModeSelect && !mode) {
                    self.timestampModeSelect.selectedIndex = 0;
                }
            });
        };

        /**
         * create Table and its headers
         * @param {EventTypeField[]} columns
         * @returns {dataTable}
         */
        EventProcessingTable.prototype.recreateTable = function (columns) {
            this.clear();
            this.MAX_EVENTS_IN_TABLE = UserPreferencesModel.getInstance().getTableSize();
            if (!columns) {
                columns = this.columns;
            }
            this.createTable(columns);
        };

        /**
         * create Table and its headers
         * @param {EventTypeField[]} columns
         * @returns {dataTable}
         */
        EventProcessingTable.prototype.createTable = function (columns) {
            var sortCondition = [
                [0, 'desc']
            ];
            var headerMetadata = [];
            var i = 0;
            var self = this;

            var timestampCol = this.getTimestampColumn();
            headerMetadata.push(timestampCol);

            var timestampHiddenColumn = this.getTimestampHiddenColumn();
            headerMetadata.push(timestampHiddenColumn);


            $.each(columns,
                /**
                 *
                 * @param key
                 * @param {EventTypeField}  column
                 */
                    function (key, column) {
                    var isNumberColumn = (column.field.type.name === 'int');//(column.field.type.name === 'double') || 
                    var isStringColumn = column.field.type.name === 'string';
                    var sourceClass = column.field && column.field.source ? column.field.source.color : 'colorCodingConstantField';
                    var headerColumnInfo = {
                        '_': key,
                        title: column.alias,
                        className: sourceClass + ' ' + (isNumberColumn ? 'center' : 'left'),
                        //sWidth: isNumberColumn ? '100px' : null,
                        //sType: self.getTableDataType(value),
                        orderable: key === self.SERVER_TIMESTAMP,
                        render: function (rObj, type, row) {
                            var rObjType = $.type(rObj);
                            if (rObjType === 'date') {
                                //return Utils.convertDate(rObj);
                                return Translate.getTranslated(rObj,
                                    {    formatType: 'datetime',
                                        dateFormat: 'short',
                                        timeFormat: 'long'
                                    });
                            }
                            if (rObjType === 'number') {
                                //return rObj.toFixed(2);
                                return Translate.getTranslated(rObj);
                            }
                            if ((rObjType === "undefined") || (rObjType === "null")) {
                                return "";
                            }
                            return rObj.toString();
                        }
                    };


                    i++;
                    headerMetadata.push(headerColumnInfo);

                });
            var emptyInfo = Translate.getTranslated('oep.exploration.eventTable.recordsNotFoundLabel');
            var eventTable = $(this.tableId).DataTable({
                autoWidth: true,
                columns: headerMetadata,
                ordering: true,
                paging: false,
                searching: false,
                scrollY: self.height,
                order: sortCondition,
                orderFixed: sortCondition,
                info: false,
                'language': {   'infoEmpty': emptyInfo,
                    'info': Translate.getTranslated('oep.exploration.eventTable.recordsFoundLabel')

                }
            });


            this.columns = columns;
            this.eventTable = eventTable;
            return eventTable;
        };


        EventProcessingTable.prototype.getTimestampColumn = function () {
            var self = this;
            var epochLabel = Translate.getTranslated("oep.exploration.resultButtons.timestamp.modeSwitcher.epochLabel");
            var dateLabel = Translate.getTranslated("oep.exploration.resultButtons.timestamp.modeSwitcher.dateLabel");
            this.timestampModeSelect = $('<select></select>')
                .append($('<option value="date"></option>').text(dateLabel))
                .append($('<option value="epoch"></option>').text(epochLabel))
                .change(function () {
                    var selectedMode = this.options[this.selectedIndex].value;
                    self.timestampModeObservable(selectedMode);
                })
                .click(function (event) {
                    event.preventDefault();
                    return false;
                });
            var timeStampRemoveBtn = $('<button></button>')
                .addClass('removeBtn')
                .click(function () {
                    self.timestampModeObservable('');
                });
            var timeStampHeader = $('<div></div>')
                .append(self.timestampModeSelect)
                .append(timeStampRemoveBtn);
            var timestampColumnInfo = {
                title: timeStampHeader.get(0), //self.timestampModeSelect.get(0),
                className: 'timestampColumn',
                width: '10em',
                //sType: self.getTableDataType(value),
                orderable: false,
                visible: self.timestampModeObservable() ? true : false,
                render: function (rObj, type, row) {
                    //var rObjType = $.type(rObj);
                    if (!self.timestampModeObservable() || (self.timestampModeObservable() === 'date')) {
                        var rDateObj = new Date(rObj);
                        //return Utils.convertDate(rObj);
                        return Translate.getTranslated(rDateObj,
                            {    formatType: 'datetime',
                                dateFormat: 'short',
                                timeFormat: 'long'
                            });
                    }
                    /*if (rObjType === 'number') {
                     //return rObj.toFixed(2);
                     return Translate.getTranslated(rObj);
                     }
                     if ((rObjType === "undefined") || (rObjType === "null")) {
                     return "";
                     }*/
                    return rObj;
                }
            };
            return timestampColumnInfo;

            //headerColumnInfo.asSorting = ['desc'];
        };

        EventProcessingTable.prototype.getTimestampHiddenColumn = function () {
            var self = this;
            var timestampColumnInfo = {
                title: self.SERVER_TIMESTAMP,
                //sType: self.getTableDataType(value),
                orderable: true,
                visible: false,
                render: function (rObj, type, row) {
                    return rObj;
                }
            };
            return timestampColumnInfo;
        };

        /**
         * convert oep pubsub event to dataTable format
         * @param event
         * @returns {*[]}
         */
        EventProcessingTable.prototype.convertEventToArray = function (event) {
            if (!this.columns) {
                return;
            }

            var serverTimestamp = event.value[this.SERVER_TIMESTAMP];
            var eventAsArray = [ serverTimestamp, serverTimestamp];
            //var eventAsArray = [];

            for (var i = 0; i < this.columns.length; i++) {
                var column = this.columns[i];
                var columnTitle = column.alias;
                if (!columnTitle) {
                    throw new Exception('EventProcessingTable:: can not convert event to appropriate view, the column has no name.');
                }
                var columnValue = event.value[columnTitle];
                if ($.type(columnValue) === 'undefined') {
                    console.log('Warning:: incoming event has no value for a column {{' + columnTitle + '}}');
                }
                eventAsArray.push(columnValue);
            }
            return eventAsArray;
        };


        EventProcessingTable.prototype.onCloseExplorationEditor = function () {
            if (this.eventSubscription) {
                this.eventSubscription.dispose();
            }
            this.clear();
        };

        EventProcessingTable.prototype.hide = function () {
            $(this.tableContainerId).hide();
        };

        EventProcessingTable.prototype.show = function () {
            $(this.tableContainerId).show();
        };


        return   EventProcessingTable;
    });