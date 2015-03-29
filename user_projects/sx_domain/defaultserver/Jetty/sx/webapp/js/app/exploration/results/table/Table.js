/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
 * Date: 12/3/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Table', [
    'jquery',
    'knockout',
    'Utils',
    'datatables'
],

    /**
     * @exports exploration/table
     * @version 1.0
     */
        function ($, ko, Utils) {

        /**
         * @class
         * @classdesc Table Abstract class, implemented common methods for all Tables
         *
         */
        function Table() {
        }

        /**
         *
         * @param {ko.observable | Event}  observableEvents
         */
        Table.prototype.setupEventNotificator = function (observableEvents) {
            var self = this;
            this.eventSubscription = observableEvents.subscribe(function (event) {
                self.updateEventTable(event);
            });

        };

        /**
         * @param {Event} event
         */
        Table.prototype.updateEventTable = function (event) {
            if (!$.isEmptyObject(event)) {
                if (!this.eventTable) {
                    this.eventTable = this.createTable(event);
                }
                this.addEventToTable(event);
            }
        };

        Table.prototype.getTableDataType = function (value) {
            var sType = $.type(value);
            if (sType === 'date') {
                return 'date';
            }

            if (sType === 'number') {
                return 'numeric';
            }

            return 'string';
        };

        /**
         * create Table and its headers by analysing Event properties,
         * @param {Event} event
         * @returns {dataTable}
         */
        Table.prototype.createTable = function (event) {
            var sortCondition = 0;
            var headerMetadata = [];
            var i = 0;
            $.each(event, function (key, value) {
                var headerColumnInfo = {
                    sTitle: key,
                    sClass: ($.type(value) === 'string') ? 'left' : 'center',
                    sWidth: ($.type(value) === 'number') ? '5em' : null,
                    mRender: function (rObj, type, row) {
                        if ($.type(rObj) === 'date') {
                            return Utils.convertDate(rObj);
                        }
                        if ($.type(rObj) === 'number') {
                            return rObj.toFixed(2);
                        }
                        return rObj.toString();
                    }
                };
                if (key === 'calculation') {
                    headerColumnInfo.bVisible = false;
                    headerColumnInfo.bSearchable = false;
                }
                if (key === 'utime') {
                    headerColumnInfo.sTitle = "time";
                    sortCondition = [
                        [i, 'desc']
                    ];
                }
                i++;
                headerMetadata.push(headerColumnInfo);
            });


            var eventTable = $(this.tableId).dataTable({
                aoColumns: headerMetadata,
                bSort: true,
                bPaginate: false,
                sScrollY: this.height,
                aaSorting: sortCondition,
                bInfo: false,
                oLanguage: { sInfo: "From _START_ to _END_ of _TOTAL_ events are shown",
                    sInfoEmpty: 'From 0 to 0 of 0 events are shown'
                }
            });
            return eventTable;
        };

        /**
         * addEventToTable
         */
        Table.prototype.addEventToTable = function (event) {
            if (this.eventCount >= this.MAX_EVENTS_IN_TABLE) {
                this.eventTable.row(0).draw();
                this.eventCount--;
            }
            var rowData = this.convertEventToArray(event);
            if (rowData) {
                this.eventTable.row.add(rowData).draw();
                this.eventCount++;
            }
        };
        Table.prototype.convertEventToArray = function(event) {
            return Utils.convertObjectValuesToArray(event);
        };


        /**
         * clear
         */
        Table.prototype.clear = function () {
            if (this.eventTable && $.fn.DataTable.isDataTable( this.tableId )) {
                this.eventTable.destroy(true);
            }
            if ($(this.tableId).size() === 0) {
                $(this.tableContainerId).append('<table id="' + this.tableId.replace("#", "") + '" class="filteredEventTable"></table>');
            }

            this.eventTable = null;
            this.eventCount = 0;
        };


        /**
         * todo
         * @param columnId
         */
        Table.prototype.hideColumn = function (columnId) {
            alert("Not Implemented");
        };

        /**
         * todo
         * @param columnId
         */
        Table.prototype.showColumn = function (columnId) {
            alert("Not Implemented");
        };


        /**
         * todo
         * @param JsonObject
         */
        Table.prototype.updateSettings = function (JsonObject) {
            alert("Not Implemented");
        };

        /**
         * todo
         */
        Table.prototype.resetSettings = function () {
            alert("Not Implemented");
        };


        /**
         *    todo
         */
        Table.prototype.play = function () {
            alert("Not Implemented");
        };


        /**
         *    todo
         */
        Table.prototype.pause = function () {
            alert("Not Implemented");
        };


        //TODO impl


        return Table;
    });
