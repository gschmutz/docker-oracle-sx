define(['ojs/ojcore', 'jquery','ojs/internal-deps/datagrid/DvtDataGrid', 'ojs/ojcomponentcore', 'ojs/ojdatacollection-common','ojs/ojinputnumber', 'ojs/ojmenu', 'ojs/ojdialog', 'ojs/ojpagingcontrol'], function(oj, $, DvtDataGrid)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * An array based implementation of the DataGridDataSource.
 * @param {Array|Object} data the data in the form of array or observable array.
 * @param {Object=} options the options specific to this DataGridDataSource.
 * @param {Array=} options.columns an array of columns to return as column headers.
 * @param {string=} options.rowHeader the key to the header designated as the row header.
 * @export
 * @constructor
 * @extends oj.DataGridDataSource
 */
oj.ArrayDataGridDataSource = function(data, options)
{
    var errSummary, errDetail;
    if (!(data instanceof Array) &&
            (typeof (data) != 'function' &&
                    typeof (data.subscribe) != 'function'))
    {
        // we only support Array or ko.observableArray. To
        // check for observableArray, we can't do instanceof check because it's
        // a function. So we just check if it contains a subscribe function.
        errSummary = '_ERR_DATA_INVALID_TYPE_SUMMARY';
        errDetail = '_ERR_DATA_INVALID_TYPE_DETAIL';
        throw new Error(errSummary + '\n' + errDetail);
    }
    if (options != null)
    {
        this.rowHeaderKey = options['rowHeader'];
    }
    this._startIndex = 0;
    this._pageSize = -1;

    oj.ArrayDataGridDataSource.superclass.constructor.call(this, data);
};

// Subclass from oj.DataGridDataSource
oj.Object.createSubclass(oj.ArrayDataGridDataSource, oj.DataGridDataSource, "oj.ArrayDataGridDataSource");

/**
 * Initial the array based data source.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.Init = function()
{
    // suck out the column definition from data
    this.columns = this._getColumnsForScaffolding(this.getDataArray());
    this._initializeRowKeys();

    //if the data is an observable array subscribe to array change notifications
    if (typeof (this.data) == 'function')
    {
        this.data['subscribe'](this._subscribe.bind(this), null, 'arrayChange');
    }

    // call super
    oj.ArrayDataGridDataSource.superclass.Init.call(this);
};

/**
 * Initialize the generated row keys.
 * @private
 */
oj.ArrayDataGridDataSource.prototype._initializeRowKeys = function()
{
    var data;
    data = this.getDataArray();
    for (this.lastKey = 0; this.lastKey < data.length; this.lastKey += 1)
    {
        //inject the row key into the object
        data[this.lastKey]['ojKey'] = this.lastKey.toString();
    }
};

/**
 * Get the column headers from the data, if it is an array of arrays with no row header key set,
 * gets the column number as the column header.
 * @param {Object} data the data to extract the column information.
 * @return {Array} the columns extracted from the data.
 * @private
 */
oj.ArrayDataGridDataSource.prototype._getColumnsForScaffolding = function(data)
{
    var propertyName, columns;
    if ((typeof data.length !== 'number') || data.length === 0)
    {
        return [];
    }

    columns = [];
    for (propertyName in data[0])
    {
        if (data[0].hasOwnProperty(propertyName))
        {
            if (!(this.rowHeaderKey != undefined && propertyName == this.rowHeaderKey))
            {
                columns.push(propertyName);
            }
        }
    }

    return columns;
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return this.size();
    }

    if (axis === "column")
    {
        return this.columns.length;
    }

    return 0;
};

/**
 * Retrieve the data for the header of a specified index.
 * @param {string} axis the axis of the header.  Valid values are "row" and "column".
 * @param {number} index the index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getHeaderData = function(axis, index)
{
    var data;
    if (axis === 'row')
    {
        data = this.getDataArray();
        //add the start index to the index for paging
        index += this._startIndex;
        // if row header is specified
        if (this.rowHeaderKey != undefined)
        {
            return data[index][this.rowHeaderKey];
        }
        else if (data.length > 0 && data[0] instanceof Array)
        {
            // generate default row header for two dimensional array
            if (this._getRowKeyByIndex(index) === undefined)
            {
                return index.toString();
            }
            else
            {
                return this._getRowKeyByIndex(index);
            }
        }
        else
        {
            return null;
        }
    }
    else if (axis === 'column')
    {
        return this.columns[index];
    }
};

/**
 * Retrieve the metadata for the header of a specified index.
 * @param {string} axis the axis of the header.  Valid values are "row" and "column".
 * @param {number} index the index in which to get the metadata.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getHeaderMetadata = function(axis, index)
{
    if (axis === 'row')
    {
        if (this.rowHeaderKey != undefined)
        {
            return {'key': this._getRowKeyByIndex(index + this._startIndex)};
        }
    }

    return {'key': this.getHeaderData(axis, index)};
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, start, count, end, headerSet, data;

    axis = headerRange.axis;
    start = headerRange.start;
    count = headerRange.count;

    oj.Assert.assert(axis === 'row' || axis === 'column');
    oj.Assert.assert(start < this.getCount(axis));
    oj.Assert.assert(count > 0);

    start = Math.max(0, start);
    if (axis === "column")
    {
        end = Math.min(this.columns.length, start + count);
    }
    else
    {
        data = this.getDataArray();
        // check if no row header is available
        if (this.rowHeaderKey === undefined && !(data.length > 0 && data[0] instanceof Array))
        {
            // header count = 0
            end = start;
        }
        else
        {
            end = Math.min(data.length, start + count);
            if (this._pageSize > 0)
            {
                end = Math.min(end, this.totalSize() - this._startIndex);
            }
        }
    }
    headerSet = new oj.ArrayHeaderSet(start, end, axis, this);

    if (callbacks != null && callbacks['success'] != null)
    {
        // make sure callbackObjects is not null
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }
        callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
    }
};

/**
 * Retrieve the data for the cell of a specified indexes.
 * @param {number} row the row index in which to get the data.
 * @param {number} column the column index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getCellData = function(row, column)
{
    var col = this.columns[column];
    return this.getDataArray()[row + this._startIndex][col];
};

/**
 * Retrieve the metadata for the cell of a specified indexes.
 * @param {number} row the row index in which to get the data.
 * @param {number} column the column index in which to get the data.
 * @protected
 */
oj.ArrayDataGridDataSource.prototype.getCellMetadata = function(row, column)
{
    var keys = {"row": this._getRowKeyByIndex(row + this._startIndex), "column": this.columns[column]};
    return {"keys": keys};
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowEnd, cellSet, colStart, colEnd;

    // extract the start and end row/column info from cellRanges (there should only be two, one for each axis)
    for (i = 0; i < cellRanges.length; i += 1)
    {
        cellRange = cellRanges[i];
        oj.Assert.assert(cellRange['axis'] === 'row' || cellRange['axis'] === 'column');
        oj.Assert.assert(cellRange['start'] < this.getCount(cellRange['axis']));
        oj.Assert.assert(cellRange['count'] > 0);
        if (cellRange['axis'] === "row")
        {
            rowStart = cellRange['start'];
            rowEnd = Math.min(this.size(), rowStart + cellRange['count']);
            if (this._pageSize > 0)
            {
                rowEnd = Math.min(rowEnd, this.totalSize() - this._startIndex);
            }
        }
        else if (cellRange['axis'] === "column")
        {
            colStart = cellRange['start'];
            colEnd = Math.min(this.columns.length, colStart + cellRange['count']);
        }
    }

    // check for errors
    if (rowEnd === undefined || colEnd === undefined)
    {
        if (callbacks != null && callbacks['error'] != null)
        {
            // make sure callbackObjects is not null
            if (callbackObjects == null)
            {
                callbackObjects = {};
            }
            callbacks['error'].call(callbackObjects['error']);
        }
        return;
    }

    cellSet = new oj.ArrayCellSet(rowStart, rowEnd, colStart, colEnd, this);

    if (callbacks != null && callbacks['success'] != null)
    {
        // make sure callbackObjects is not null
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }
        callbacks['success'].call(callbackObjects['success'], cellSet, cellRanges);
    }

    //communicates with paging control to indicate fetch end
    if (this._pageSize > 0)
    {
        oj.DataGridDataSource.superclass.handleEvent.call(this, 'sync', true);
    }
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Promise} a promise object containing the key for each axis
 * @export
 */
/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {string|number|null} indexes.row the index for the row axis
 * @param {string|number|null} indexes.column the index for the column axis
 * @return {Promise} a Promise object which upon resolution will pass in an object containing the keys for each axis
 * @export
 */
oj.ArrayDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex = indexes['row'], columnIndex = indexes['column'];
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve({"row": this._getRowKeyByIndex(rowIndex + this._startIndex), "column": this.columns[columnIndex]});
    }.bind(this));
};

/**
 * Returns the row and column index based on the keys. In a paging case returns the 
 * index on the page, not the absolute index in the array.
 * @param {Object} keys the key for each axis
 * @param {string|number|null} keys.row the key for the row axis
 * @param {string|number|null} keys.column the key for the column axis
 * @return {Promise} a promise object containing the index for each axis
 * @export
 */
oj.ArrayDataGridDataSource.prototype.indexes = function(keys)
{
    var rowKey = keys['row'], columnKey = keys['column'];
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve({"row": this._getRowIndexByKey(rowKey) - this._startIndex, "column": this.columns.indexOf(columnKey)});
    }.bind(this));
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var sortArray = [], newColumns = [], i, headerIndex, axis, headerKey, direction;

    axis = criteria['axis'];
    headerKey = criteria['key'];
    direction = criteria['direction'];

    // make sure callbackObjects is non null
    if (callbacks != null && callbackObjects == null)
    {
        callbackObjects = {};
    }

    if (axis === 'column')
    {
        this.getDataArray().sort(this._naturalSort(direction, headerKey));

        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(callbackObjects['success']);
        }
    }
    else if (axis === 'row')
    {
        headerIndex = this._getRowIndexByKey(headerKey);
        //rebuild the array to sort on
        for (i = 0; i < this.columns.length; i += 1)
        {
            sortArray[i] = this.getDataArray()[headerIndex][this.columns[i]];
        }

        //sort the given array with no headerKye specified
        sortArray.sort(this._naturalSort(direction));

        //reorder the columns property
        for (i = 0; i < this.columns.length; i += 1)
        {
            newColumns[i] = this.columns[sortArray.indexOf(this.getDataArray()[headerIndex][this.columns[i]])];
        }

        this.columns = newColumns;
        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(callbackObjects['success']);
        }
    }
    else
    {
        if (callbacks !== null && callbacks['error'] != null)
        {
            callbacks['error'].call(callbackObjects['error'], "Invalid axis value");
        }
    }
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'sort')
    {
        // array based data source supports column sorting only
        return 'column';
    }
    if (feature === 'move')
    {
        return 'row';
    }
    return null;
};

/**
 * Get a comparator fuicntion for natural sorting of objects
 * @param {string} direction ascending, descending 
 * @param {string|number=} key the key or index to perform the sort on
 * @returns {function(Object, Object)|undefined} a comapartor function, dependent on direction
 * @private
 */
oj.ArrayDataGridDataSource.prototype._naturalSort = function(direction, key)
{
    if (direction === 'ascending')
    {
        return function(a, b)
        {
            var as, bs;
            //Get the values the array we're sorting
            if (key != undefined)
            {
                //if the sorting item is an array it will be indexed with strings of ints and needs
                //to be accessed using ints not strings
                if (a instanceof Array)
                {
                    a = a[parseInt(key, 10)];
                    b = b[parseInt(key, 10)];
                }
                else
                {
                    a = a[key];
                    b = b[key];
                }
            }
            //Strings of numbers return false, so we can compare strings of numebers with numbers                
            as = isNaN(a);
            bs = isNaN(b);
            //If they are strings, check to see if they are dates, if they are, turn the string to a sortable date formatted string           
            if (a instanceof Date) {
                a = a.toISOString();
                as = true;
            }
            if (b instanceof Date) {
                b = b.toISOString();
                bs = true;
            }
            //both are string
            if (as && bs)
            {
                return a < b ? -1 : a === b ? 0 : 1;
            }
            //only a is a string
            if (as)
            {
                return 1;
            }
            //only b is a string
            if (bs)
            {
                return -1;
            }
            //both are numbers
            return a - b;
        };
    }
    if (direction === 'descending')
    {
        return function(a, b)
        {
            var as, bs;
            if (key != undefined)
            {
                //if the sorting item is an array it will be indexed with strings of ints and needs
                //to be accessed using ints not strings                
                if (a instanceof Array)
                {
                    a = a[parseInt(key, 10)];
                    b = b[parseInt(key, 10)];
                }
                else
                {
                    a = a[key];
                    b = b[key];
                }
            }
            as = isNaN(a);
            bs = isNaN(b);
            if (a instanceof Date) {
                a = a.toISOString();
                as = true;
            }
            if (b instanceof Date) {
                b = b.toISOString();
                bs = true;
            }
            if (as && bs)
            {
                return a > b ? -1 : a === b ? 0 : 1;
            }
            if (as)
            {
                return -1;
            }
            if (bs)
            {
                return 1;
            }
            return b - a;
        };
    }

    // only if direction is not recognized
    return;
};

/**
 * Moves a row from one location to another.
 * @param {Object} moveKey the key of the row to move
 * @param {Object} atKey the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after" 
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.move = function(moveKey, atKey, position, callbacks, callbackObjects)
{
    var moveKeyIndex, moveData, atKeyIndex, event, data;

    //remove the data from the array, but hold on to it
    moveKeyIndex = this._getRowIndexByKey(moveKey);
    moveData = this.data.splice(moveKeyIndex, 1)[0];

    //fire the delete event to the datagrid
    if (this.data instanceof Array)
    {
        event = this._getModelEvent('delete', moveKey, null, moveKeyIndex, -1);
        this.handleEvent("change", event);
    }

    //add the stored data back into the array
    if (atKey === null)
    {
        this.data.push(moveData);
    }
    else
    {
        atKeyIndex = this._getRowIndexByKey(atKey);
        this.data.splice(atKeyIndex, 0, moveData);
    }

    //fire the insert event to the datagrid
    if (this.data instanceof Array)
    {
        event = this._getModelEvent('insert', moveKey, null, atKeyIndex, -1);        
        this.handleEvent("change", event);
    }
};

/**
 * Gets the data array, if the data property is a function call it, else return data
 * @return {Object|Array} the array of the data
 * @private
 */
oj.ArrayDataGridDataSource.prototype.getDataArray = function()
{
    if (typeof (this.data) === 'function')
    {
        return this.data();
    }
    return this.data;
};

/**
 * Gets the row index of a given row key
 * @param {string|number|Object|null} key the key to get row index of
 * @return {number} the index with a certain key, -1 if the key doesn't exist
 * @private
 */
oj.ArrayDataGridDataSource.prototype._getRowIndexByKey = function(key)
{
    var i, data = this.getDataArray();
    for (i = 0; i < data.length; i++)
    {
        if (data[i]['ojKey'] === key)
        {
            return i;
        }
    }
    return -1;
};

/**
 * Gets the row key stored at a given index
 * @param {number} index the index to get row key of
 * @return {string|number|null} the key at index, null if the index doesn't exist
 * @private
 */
oj.ArrayDataGridDataSource.prototype._getRowKeyByIndex = function(index)
{
    var data = this.getDataArray();
    if (data[index])
    {
        return data[index]['ojKey'];
    }
    return null;
};

/**
 * Returns an Object for an event 
 * @param {string} operation the operation done on the model
 * @param {Object|string|number|null} rowKey the key for the row axis
 * @param {Object|string|number|null} columnKey the key for the column axis
 * @param {number=} rowIndex the index for the row axis
 * @param {number=} columnIndex the index for the column axis
 * @param {boolean=} silent should the event be silent
 * @return {Object} an object containing the the source, operation, and keys of the event
 * @protected
 */
oj.ArrayDataGridDataSource.prototype._getModelEvent = function(operation, rowKey, columnKey, rowIndex, columnIndex, silent)
{
    var event = {};
    event['source'] = this;
    event['operation'] = operation;
    event['keys'] = {'row': rowKey, 'column': columnKey};
    event['indexes'] = {'row': rowIndex, 'column': columnIndex};
    event['silent'] = silent;
    return event;
};

/**
 * Subscribe to knockout events
 * @param {Array} changes an array of change objects fired by an observable array
 * @private
 */
oj.ArrayDataGridDataSource.prototype._subscribe = function(changes)
{
    var i, rowData, rowKey, rowIndex, added = false, move = false, keys = [], indexes = [], event, beforeDelCount = 0, change;

    // first loop though the changes, 
    for (i = 0; i < changes.length; i++)
    {
        change = changes[i];
        // if a model was moved using a reverseAll or a sort, just refresh the grid
        if (change['moved'] !== undefined)
        {
            move = true;
            event = this._getModelEvent('refresh', null, null);        
            this.handleEvent("change", event);
            break;
        }
        
        // check if there were any adds, this way the delete will know to be fired silently
        if (change['status'] === 'added')
        {
            added = true;
        }
        
        // track the number of models deleted before the page so the index to remove can be tracked      
        if (this._pageSize > 0 && change['status'] === 'deleted')
        {
            if (change['index'] < this._startIndex)
            {
                beforeDelCount++;
            }
        }
    }
    
    //if we moved a model we just refreshed
    if (!move)
    {        
        //loop through changes looking for deletes
        for (i = 0; i < changes.length; i++)
        {
            change = changes[i];
            if (change['status'] === 'deleted')
            {
                rowData = change['value'];
                rowIndex = change['index'];
                if (this._pageSize > 0)
                {
                    //if paging and a delete before need to remove the 0 index, but that key is lcoated at a new index
                    if (rowIndex < this._startIndex)
                    {
                        rowIndex = 0;
                        rowKey = this._getRowKeyByIndex(this._startIndex - beforeDelCount);
                        beforeDelCount--;
                    }
                    //if paging and a delete inside remove that index
                    else if (rowIndex < this._startIndex + this._pageSize)
                    {
                        rowIndex -= this._startIndex;
                        rowKey = rowData['ojKey'];
                    }
                    //else delete after and it doesn't matter
                }
                else
                {
                    rowKey = rowData['ojKey'];
                }                
                //collect the deletes to do in one batch delete
                keys.push({'row': rowKey, 'column': -1});
                indexes.push({'row': rowIndex, 'column': -1});
            }
        }
        
        // batch delete all deletes
        if (keys.length > 0)
        {
            event = {'source': this, 'operation': 'delete', 'keys': keys, 'indexes': indexes, 'silent': added};
            this.handleEvent("change", event);
        }
        
        //loop through changes looking for adds
        for (i = 0; i < changes.length; i++)
        {
            change = changes[i];
            if (change['status'] === 'added')
            {
                rowData = change['value'];   
                rowIndex = change['index'];               
                //if no key add inject one into the add object based on the last assigned key          
                if (rowData['ojKey'] == null)
                {
                    rowData['ojKey'] = this.lastKey.toString();
                    this.lastKey++;
                }
                //if the add is on the page or before
                if (this._pageSize > 0 && rowIndex < (this._startIndex + this._pageSize))
                {
                    //if add is on a previous page insert a row at the startIndex
                    if (rowIndex < this._startIndex)
                    {
                        rowIndex = 0;
                        rowKey = this._getRowKeyByIndex(this._startIndex);
                    }
                    //if add is on the current page insert a row at the index - startIndex
                    else
                    {
                        rowIndex = change['index'] - this._startIndex;
                        rowKey = this._getRowKeyByIndex(rowIndex);               
                    }
                    //add at the given index and remove from the end of the page silently
                    event = this._getModelEvent('insert', rowKey, null, rowIndex, -1);                            
                    this.handleEvent("change", event);
                    event = this._getModelEvent('delete', this._getRowKeyByIndex(this._startIndex + this._pageSize), null, this._pageSize, -1, true);                            
                    this.handleEvent("change", event);                     
                }
                else
                {
                    //add at the given index and remove from the end of the page silently
                    rowKey = rowData['ojKey'];
                    event = this._getModelEvent('insert', rowKey, null, rowIndex, -1);                            
                    this.handleEvent("change", event);
                }
            }
        }
    }
};

//////// methods to support paging   ////////
/**
 * Perform a fetch call from the options specified
 * @expose
 * @memberof! oj.ArrayDataGridDataSource
 * @instance
 */
oj.ArrayDataGridDataSource.prototype.fetch = function(options)
{
    this._startIndex = options != null ? (options['startIndex'] != null ? options['startIndex'] : 0) : 0;
    this.handleEvent("change", {'operation': 'sync', 'pageSize': this._pageSize});
};

/**
 * Set or change the number of models in a page
 * @export
 * @param {number} n page size
 */
oj.ArrayDataGridDataSource.prototype.setPageSize = function(n) {
    var oldSize = this._pageSize;
    this._pageSize = n;
    if (oldSize < 0)
    {
        this.fetch({startIndex: this._startIndex});
    }
};

/**
 * @export
 * Get the length of the collection. -1 if an initial fetch has not been
 * done yet. Default to the size of the collection. If pageSize is set then
 * limit it.
 * @returns {number} length of the collection
 * @expose
 * @memberof! oj.ArrayDataGridDataSource
 * @instance
 */
oj.ArrayDataGridDataSource.prototype.size = function()
{
    if (this._pageSize != null && this._pageSize > 0)
    {
        if (this.getDataArray()['length'] > this._pageSize)
        {
            return this._pageSize;
        }
    }
    return this.getDataArray()['length'];
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.ArrayDataGridDataSource
 * @instance
 */
oj.ArrayDataGridDataSource.prototype.totalSize = function()
{
    return this.getDataArray()['length'];
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.ArrayDataGridDataSource
 * @instance
 */
oj.ArrayDataGridDataSource.prototype.hasMore = function()
{
    return false;
};
//////// testing methods to get properties /////////

/**
 * Gets the rowHeaderKey property.  This is an internal method for testing and should not be used by application.
 * @return {string|null} the row header key
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getRowHeaderKey = function()
{
    return this.rowHeaderKey;
};

/**
 * Gets the columns property.  This is an internal method for testing and should not be used by application.
 * @return {Array|null} the keys of the column headers
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getColumns = function()
{
    return this.columns;
};

/**
 * Gets the data property.  This is an internal method for testing and should not be used by application.
 * @return {Array|Object|null} the underlying array data.
 * @export
 */
oj.ArrayDataGridDataSource.prototype.getData = function()
{
    return this.data;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/*jslint browser: true*/
/**
 * @export    
 * This class captures all translation resources and style classes used by the DataGrid.
 * This should be populated with information extracted through the framework and set on the DataGrid.
 * Internal.  Developers should never use this class.
 * @constructor
 */
oj.DataGridResources = function(rtlMode, translationFunction)
{
    this.rtlMode = rtlMode;
    this.translationFunction = translationFunction;
    this.styles = {};
    this.styles['datagrid'] = "oj-datagrid";
    this.styles['cell'] = "oj-datagrid-cell";
    this.styles['cellcontent'] = "oj-datagrid-cell-content";
    this.styles['celltext'] = "oj-datagrid-cell-text";
    this.styles['banded'] = "oj-datagrid-banded";
    this.styles['row'] = "oj-datagrid-row";
    this.styles['databody'] = "oj-datagrid-databody";
    this.styles['topcorner'] = "oj-datagrid-top-corner";
    this.styles['bottomcorner'] = "oj-datagrid-bottom-corner";
    this.styles['rowheaderspacer'] = "oj-datagrid-row-header-spacer";
    this.styles['colheaderspacer'] = "oj-datagrid-column-header-spacer";
    this.styles['status'] = "oj-datagrid-status";
    this.styles['emptytext'] = "oj-datagrid-empty-text";
    this.styles['header'] = "oj-datagrid-header";                
    this.styles['headercell'] = "oj-datagrid-header-cell";
    this.styles['headercelltext'] = "oj-datagrid-header-cell-text";
    this.styles['headercellcontent'] = "oj-datagrid-header-cell-content";
    this.styles['rowheader'] = "oj-datagrid-row-header";
    this.styles['colheader'] = "oj-datagrid-column-header";
    this.styles['colheadercell'] = "oj-datagrid-column-header-cell";
    this.styles['rowheadercell'] = "oj-datagrid-row-header-cell";
    this.styles['scroller-mobile'] = "oj-datagrid-scroller-touch";
    this.styles['scroller'] = "oj-datagrid-scroller";
    this.styles['scrollers'] = "oj-datagrid-scrollers";
    this.styles['focus'] = "oj-focus";
    this.styles['hover'] = "oj-hover";
    this.styles['active'] = "oj-active";
    this.styles['selected'] = "oj-selected";
    this.styles['disabled'] = "oj-disabled";
    this.styles['enabled'] = "oj-enabled";
    this.styles['default'] = "oj-default";
    this.styles['sortcontainer'] = "oj-datagrid-sort-icon-container";
    this.styles['sortascending'] = "oj-datagrid-sort-ascending-icon";
    this.styles['sortdescending'] = "oj-datagrid-sort-descending-icon";
    this.styles['icon'] = "oj-component-icon";
    this.styles['clickableicon'] = "oj-clickable-icon-nocontext";    
    this.styles['info'] = "oj-helper-hidden-accessible";
    this.styles['rowexpander'] = "oj-rowexpander";
    this.styles['cut'] = "oj-datagrid-cut";
    this.styles['selectaffordancetop'] = "oj-datagrid-touch-selection-affordance-top";
    this.styles['selectaffordancebottom'] = "oj-datagrid-touch-selection-affordance-bottom";
    this.styles['toucharea'] = "oj-datagrid-touch-area";
    
    this.styles['draggable'] = "oj-draggable";
    this.styles['drag'] = "oj-drag";
    this.styles['drop'] = "oj-drop";
    this.styles['activedrop'] = "oj-active-drop";
    this.styles['validdrop'] = "oj-valid-drop";
    this.styles['invaliddrop'] = "oj-invalid-drop";
    
    this.commands = {};
    this.commands['sortCol'] = "oj-datagrid-sortCol";
    this.commands['sortColAsc'] = "oj-datagrid-sortColAsc";
    this.commands['sortColDsc'] = "oj-datagrid-sortColDsc";
    this.commands['sortRow'] = "oj-datagrid-sortRow";
    this.commands['sortRowAsc'] = "oj-datagrid-sortRowAsc";
    this.commands['sortRowDsc'] = "oj-datagrid-sortRowDsc";
    this.commands['resize'] = "oj-datagrid-resize";
    this.commands['resizeWidth'] = "oj-datagrid-resizeWidth";
    this.commands['resizeHeight'] = "oj-datagrid-resizeHeight";
    this.commands['cut'] = "oj-datagrid-cut";
    this.commands['paste'] = "oj-datagrid-paste";
    
    this.attributes = {};
    this.attributes['key'] = "data-oj-key";
    this.attributes['resizable'] = "data-oj-resizable";
    this.attributes['sortable'] = "data-oj-sortable";    
    this.attributes['sortDir'] = "data-oj-sortdir";    
    this.attributes['expander'] = "data-oj-expander";    
    this.attributes['expanderIndex'] = "data-oj-expander-index";    
    this.attributes['container'] = oj.Components._OJ_CONTAINER_ATTR;
};

/**
 * Whether the reading direction is right to left.
 * @return {boolean} true if reading direction is right to left, false otherwise.
 * @export
 */
oj.DataGridResources.prototype.isRTLMode = function()
{
    return (this.rtlMode === "rtl") ? true : false;
};

/**
 * Gets the translated text
 * @param {string} key the key to the translated text
 * @param {Array=} args optional arguments to format the translated text
 * @return {string|null} the translated text
 * @export
 */
oj.DataGridResources.prototype.getTranslatedText = function(key, args)
{
    return this.translationFunction(key, args);
};

/**
 * Gets the mapped style class
 * @param {string} key the key to the style class
 * @return {string|null} the style class
 * @export
 */
oj.DataGridResources.prototype.getMappedStyle = function(key)
{
    if (key != null)
    {
        return this.styles[key];
    }
    return null;
};

/**
 * Gets the mapped command class
 * @param {string} key the key to the command class
 * @return {string|null} the command class
 * @export
 */
oj.DataGridResources.prototype.getMappedCommand = function(key)
{
    if (key != null)
    {
        return this.commands[key];
    }
    return null;
};

/**
 * Gets the mapped attribute
 * @param {string} key the key to the attribute
 * @return {string|null} the attribute
 * @export
 */
oj.DataGridResources.prototype.getMappedAttribute = function(key)
{
    if (key != null)
    {
        return this.attributes[key];
    }
    return null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojDataGrid
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="datagridOverview-section">
 *   JET DataGrid Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#datagridOverview-section"></a>
 * </h3>
 * <p>Description:</p>
 * <p>A JET DataGrid is a themable, WAI-ARIA compliant component that displays data in a cell oriented grid.  Data inside the DataGrid can be associated with row and column headers.  Page authors can customize the content rendered inside cells and headers.</p>
 *
 * <h3 id="data-section">
 *   Data
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#data-section"></a>
 * </h3>
 * <p>The JET DataGrid gets its data from a DataGridDataSource.  There are several types of DataGridDataSource that are provided out of the box:</p>
 * <ul>
 * <li>oj.ArrayDataGridDataSource</li>
 * <li>oj.CollectionDataGridDataSource</li>
 * <li>oj.PagingDataGridDataSource</li>
 * <li>oj.FlattenedTreeDataGridDataSource</li>
 * </ul>
 *
 * <p>oj.ArrayDataGridDataSource - Use this when the underlying data is a static array.  The ArrayDataGridDataSource supports both single array (in which case each item in the array represents a row of data in the DataGrid) and two dimensional array (in which case each item in the array represents a cell in the DataGrid).  See the documentation for oj.ArrayDataGridDataSource for more details on the available options.</p>
 *
 * <p>oj.CollectionDataGridDataSource - Use this when oj.Collection is the model for the underlying data.  Note that the DataGrid will automatically react to model event from the underlying oj.Collection.  See the documentation for oj.CollectionDataGridDataSource for more details on the available options.</p>
 *
 * <p>oj.PagingDataGridDataSource - Use this when the DataGrid is driven by an associating ojPagingControl.  See the documentation for oj.PagingDataGridDataSource for more details on the available options.</p>
 *
 * <p>oj.FlattenedTreeDataGridDataSource - Use this when hierarchical data is displayed in the DataGrid.  The FlattenedDataGridDataSource takes an oj.TreeDataSource and adapts that to the DataGridDataSource.  The ojRowExpander works with the FlattenedTreeDataGridDataSource to enable expanding/collapsing of rows.</p>
 *
 * <p>Developer can also create their own DataSource by extending the oj.DataGridDataSource class.  See the cookbook for an example of a custom DataGridDataSource.</p>
 *
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 *
 * <p>When a data cell has focus:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>The first Tab into the DataGrid moves focus to the first cell of the first row.  The second Tab moves focus to the next focusable element outside of the DataGrid.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Left Arrow</kbd></td>
 *       <td>Moves focus to the cell of the previous column within the current row.  There is no wrapping at the beginning or end of the columns.  If a row header is present, then the row header next to the first column of the current row will gain focus.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Right Arrow</kbd></td>
 *       <td>Moves focus to the cell of the next column within the current row.  There is no wrapping at the beginning or end of the columns.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Up Arrow</kbd></td>
 *       <td>Moves focus to the cell of the previous row within the current column.  There is no wrapping at the beginning or end of the rows.  If a column header is present, then the column header above the first row of the current column will gain focus.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Down Arrow</kbd></td>
 *       <td>Moves focus to the cell of the next row within the current column.  There is no wrapping at the beginning or end of the rows.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Moves focus to the first (available) cell of the current row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Moves focus to the last (available) cell of the current row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Page Up</kbd></td>
 *       <td>Moves focus to the first (available) cell in the current column.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Page Down</kbd></td>
 *       <td>Moves focus to the last (available) cell in the current column.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Contrl+Space</kbd></td>
 *       <td>Selects all the cells of the current column.  This is only available if multiple cell selection mode is enabled.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Space</kbd></td>
 *       <td>Selects all the cells of the current row.  This is only available if multiple cell selection mode is enabled.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Arrow</kbd></td>
 *       <td>Extends the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+F8</kbd></td>
 *       <td>Freezes the current selection, therefore allowing user to move focus to another location to add additional cells to the current selection.  This is used to accomplish non-contiguous selection.  Use the Esc key or press Shift+F8 again to exit this mode.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+F10</kbd></td>
 *       <td>Brings up the context menu.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+X</kbd></td>
 *       <td>Marks the current row to move if dnd is enabled and the datasource supports move operation.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+V</kbd></td>
 *       <td>Move the row that is marked to directly under the current row.  If the row with the focused cell is the last row, then it will be move to the row above the current row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Alt+5</kbd></td>
 *       <td>Read the context and content of the current cell to the screen reader.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>When a column header cell has focus:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Left Arrow</kbd></td>
 *       <td>Moves focus to the previous column header.  There is no wrapping at the beginning or end of the column headers.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Right Arrow</kbd></td>
 *       <td>Moves focus to the next column header.  There is no wrapping at the beginning or end of the column headers.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Down Arrow</kbd></td>
 *       <td>Moves focus to the cell of the first row directly below the column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Enter</kbd></td>
 *       <td>Toggle the sort order of the column if the column is sortable.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+F10</kbd></td>
 *       <td>Brings up the context menu.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>When a row header cell has focus:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Up Arrow</kbd></td>
 *       <td>Moves focus to the previous row header.  There is no wrapping at the beginning or end of the row headers.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Down Arrow</kbd></td>
 *       <td>Moves focus to the next row header.  There is no wrapping at the beginning or end of the row headers.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Right Arrow</kbd></td>
 *       <td>Moves focus to the cell of the first column directly next to the row header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Left Arrow</kbd></td>
 *       <td>Moves focus to the cell of the first column directly next to the row header in RTL direction.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Enter</kbd></td>
 *       <td>Toggle the sort order of the row if the row is sortable.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 *
 * <p>Since <code class="prettyprint">role="application"</code> is used in the data grid, application should always apply an <code class="prettyprint">aria-label</code> to the data grid element so that it can distinguish from other elements with application role.</p>
 *
 * <h3 id="context-section">
 *   Header Context And Cell Context
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#context-section"></a>
 * </h3>
 *
 * <p>For all header and cell options, developers can specify a function as the return value.  The function takes a single argument, which is an object that contains contextual information about the particular header or cell.  This gives developers the flexibility to return different value depending on the context.</p>
 *
 * <p>For header options, the context paramter contains the following keys:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>axis</kbd></td>
 *       <td>The axis of the header.  Possible values are 'row' and 'column'.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>component</kbd></td>
 *       <td>A reference to the DataGrid component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>index</kbd></td>
 *       <td>The index of the header, where 0 is the index of the first header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>key</kbd></td>
 *       <td>The key of the header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>data</kbd></td>
 *       <td>The data object for the header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>parentElement</kbd></td>
 *       <td>The header cell element.  The renderer can use this to directly append content to the header cell element.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>For cell options, the context paramter contains the following keys:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>component</kbd></td>
 *       <td>A reference to the DataGrid component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>datasource</kbd></td>
 *       <td>A reference to the data source object.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>indexes</kbd></td>
 *       <td>The object that contains both the zero based row index and column index in which the cell is bound to.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>keys</kbd></td>
 *       <td>The object that contains both the row key and column key which identifies the cell.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>data</kbd></td>
 *       <td>The data object for the cell.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>parentElement</kbd></td>
 *       <td>The data cell element.  The renderer can use this to directly append content to the data cell element.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>If a FlattenedTreeDataGridDataSource is used, the following additional contextual information are available:</p>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>depth</kbd></td>
 *       <td>The depth of the row.  The depth of root row is 0.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>index</kbd></td>
 *       <td>The index of the row relative to its parent.  The index of the first child is 0.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>state</kbd></td>
 *       <td>The state of the row.  Possible values are "expanded", "collapsed", "leaf".</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>parentKey</kbd></td>
 *       <td>The key of the parent row.  For root row the parent key is null.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <p></p>
 * <p>Note that a custom DataGridDataSource can return additional header and cell context information.  Consult the documentation of the DataGridDataSource API for details.</p>
 *
 * <h3 id="context-section">
 *   Selection
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#selection-section"></a>
 * </h3>
 *
 * <p>The DataGrid supports both cell based and row based selection mode, which developers can specify using the selectionMode option.  For each mode developers can also specify whether single or multiple cells/rows can be selected.</p>
 * <p>Developers can specify or retrieve selection from the DataGrid using the selection option.  A selection in DataGrid consists of an array of ranges.  Each range contains the following keys: startIndex, endIndex, startKey, endKey.  Each of the keys contains value for 'row' and 'column'.  If endIndex and endKey are not specified, that means the range is unbounded, i.e. the cells of the entire row/column are selected.</p>
 *
 * <h3 id="menu-section">
 *   Context menu
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#menu-section"></a>
 * </h3>
 *
 * <p>The DataGrid has a default context menu for operations such as header resize and sort.  Developers can also specify their own context menu by using the contextMenu option.  See the option for details.</p>
 * 
 * <h3 id="geometry-section">
 *   Geometry Management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#geometry-section"></a>
 * </h3>
 *
 * <p>If the DataGrid is not styled with a fixed size, then it will responds to a change to the size of its container.  Note that unlike Table the content of the cell does not affect the height of the row.  The height of the rows must be pre-determined and specified by the developer or a default size will be used.</p>
 *
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>The order of the column headers will be rendered in reverse order in RTL reading direction.  The location of the row header will also be different between RTL and LTR direction.  It is up to the developers to ensure that the content of the header and data cell are rendered correctly according to the reading direction.</p>
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the datagrid must be <code class="prettyprint">refresh()</code>ed.  
 *
 * <h3 id="rtl-section">
 *   Templating Alignment
 *   <a class="bookmarkable-link" title="Templating Alignment" href="#templating-section"></a>
 * </h3>
 * <p>When using stamped content through templates, it is required to add specific class name's to obtain the default cell content alignment. In the case of header templates, add the class name <code class="prettyprint">oj-datagrid-header-cell-text</code>. In the cell template case add the class name <code class="prettyprint">oj-datagrid-cell-text</code> to obtain default cell alignment. These classes styles and default behavior are themable.</p>
*/
oj.__registerWidget('oj.ojDataGrid', $['oj']['baseComponent'],
{
    widgetEventPrefix: 'oj',
    options:
            {
                /**
                 * Row banding and column banding intervals within the data grid body.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, number>}
                 * @default <code class="prettyprint">{ "row":0, "column":0 }</code>
                 * @property {number} row row banding interval
                 * @property {number} column column banding interval
                 * 
                 * @example <caption>Initialize the data grid with the row banding interval set to every other row:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "bandingInterval": {"row":1} });
                 * 
                 * @example <caption>Get or set the <code class="prettyprint">rowBanding</code> option, after initialization:</caption>
                 * // get the bandingInterval object
                 * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "bandingInterval" );
                 * 
                 * // set the bandingInterval to every 2 rows and every other column
                 * $( ".selector" ).ojDataGrid( "option", "bandingInterval", {"row":2, "column":1 } );
                 */
                bandingInterval: {'row': 0, 'column': 0},
                /**
                 * The data source for the DataGrid must be an extension of oj.DataGridDataSource. 
                 * See the data source section in the introduction for out of the box data source types.
                 * To specify a row header key or index of an ArrayDataGridDataSource pass in an Object as such:
                 * {"data": oj.DataGridDataSource, "rowHeader":string|number}
                 * If the data attribute is not specified, an empty data grid is displayed.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {oj.DataGridDataSource}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid with a one-dimensional array:</caption>
                 * $( ".selector" ).ojDataGrid({ "data": new oj.ArrayDataGridDataSource([1,2,3])});
                 * 
                 * @example <caption>Initialize the data grid with a two-dimensional array:</caption>
                 * $( ".selector" ).ojDataGrid({ "data": new oj.ArrayDataGridDataSource(['X','X','O'],['O','X','O'],['O','O','X'])});
                 * 
                 * @example <caption>Initialize the data grid with a two-dimensional array and set an index for row headers:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":{"rowHeader":2 , "data": new oj.ArrayDataGridDataSource(['1','2','Cat'],['1','4','Dog'],['5','1','Bird']) }});
                 * 
                 * @example <caption>Initialize the data grid with an oj.Collection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data": new oj.CollectionDataGridDataSource(collection)});
                 * 
                 * @example <caption>Initialize the data grid with an oj.Collection and specify a row header:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":{ "data":new oj.CollectionDataGridDataSource(collection), "rowHeader":'key' }});
                 * 
                 * @example <caption>Initialize the data grid with a custom data source</caption>
                 * $( ".selector" ).ojDataGrid({ "data":new CustomDataSource()});
                 */
                data: null,
                /**
                 * The text to display when there are no data in the Grid. If it is not defined, 
                 * then a default empty text is extracted from the resource bundle.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {String|null}
                 * @default <code class="prettyprint">"No data to display."</code>
                 * 
                 * @example <caption>Initialize the data grid with the empty text set to 'no data':</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "emptyText": "no data" });
                 */
                emptyText: null,
                /**
                 * Display or hide the horizontal or vertical grid lines in the data body. Gridlines are
                 * visible by default, and must be set to 'hidden' in order to be hidden.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, string>}
                 * @default <code class="prettyprint">{"horizontal": "visible", "vertical": "visible"}</code>
                 * @property {string} horizontal horizontal gridlines, valid values are: "hidden", "visible"
                 * @property {string} vertical vertical gridlines, valid values are: "hidden", "visible"
                 * 
                 * @example <caption>Initialize the data grid with only horizontal gridlines visible:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "gridlines": {"horizontal": "visible", "vertical": "hidden"} });
                 */
                gridlines: {'horizontal': 'visible', 'vertical': 'visible'},
                /**
                 * The index or key of the row and/or column to display initially in the data grid. 
                 * Only key or index should be specified, if they both are the grid will scroll initially
                 * to the key values.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, Object>|null}
                 * @default <code class="prettyprint">null</code>
                 * @property {Object} index scroll to a given row and column index of the datagrid
                 * @property {number} index.row row index to scroll to
                 * @property {number} index.column column index to scroll to
                 * @property {Object} key scroll to a given row and column key of the datagrid
                 * @property {string} key.row row key to scroll to
                 * @property {string} key.column column key to scroll to
                 * 
                 * @example <caption>Initialize the data grid to scroll to row index 5 and column index 7:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPosition": {"index":{"row": 5, "column": 7}}});
                 * 
                 * @example <caption>Initialize the data grid to scroll to row key 'id5' and column key 'id7':</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPosition": {"key":{"row": "id5", "column": "id7"}}}); 
                 */
                scrollPosition: null,
                /**
                 * Specifies whether row/cell selection can be made and the cardinality 
                 * of each (single/multiple/none) selection in the Grid. Only one of the properties, row or column,
		 * should be set at at time. Selection is initially disabled, but setting the value to null will disable
                 * selection.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Object.<string, string>|null}
                 * @default <code class="prettyprint">null</code>
                 * @property {string} row set row selection mode, valid values are: "single", "multiple"
                 * @property {string} cell set cell selection mode, valid values are: "single", "multiple"
                 * 
                 * @example <caption>Initialize the data grid to enable single row selection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "selectionMode": {"row":"single"}});
                 * 
                 * @example <caption>Initialize the data grid to enable multiple cell selection:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "selectionMode": {"cell":"multiple"}});
                 */
                selectionMode: null,
                /**
                 * Enables or disables reordering the rows within the same datagrid using drag and drop.</br></br>
                 * Specify an object with the property "reorder" set to <code class="prettyprint">{'row':'enable'}</code> to enable
                 * reordering.  Setting the <code class="prettyprint">"reorder"</code> property to <code class="prettyprint">{'row':'disable'}</code>,
                 * or setting the <code class="prettyprint">"dnd"</code> property to <code class="prettyprint">null</code> (or omitting
                 * it), disables reordering support. There must be move capability on the datasource to support this feature.
                 * 
                 * @type {Object}
                 * @property {Object} reorder an object with property row
                 * @property {string} reorder.row row reordering within the datagrid: "enable", "disable"
                 * 
                 * @default <code class="prettyprint">{reorder: {row :'disable'}}</code>
                 * @expose
                 * @instance
                 * @memberof! oj.ojDataGrid
                 * 
                 * @example <caption>Initialize the data grid to enable single row reorder:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "dnd" : {"reorder":{"row":"enable"}}});
                 */
                dnd : {reorder: {row :'disable'}},    
                /**
                 * Specifies the mechanism used to scroll the data inside the data grid. possible values are: auto(datagrid will decide), loadMoreOnScroll, and scroll.
                 * When loadMoreOnScroll is specified, additional data are fetched when the user scrolls to the bottom of the data grid.
                 * When scroll is specified, then virtual scrolling is used meaning only rows/columns visibile in the viewport are fetched.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {string|null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize the data grid to use virtualized scrolling:</caption>
                 * $( ".selector" ).ojDataGrid({ "data":data, "scrollPolicy": "scroll"});
                 */
                scrollPolicy: "auto",                
                /**
                 * Specifies the current selections in the data grid. 
                 * Returns an array of range objects, or an empty array if there's no selection.
                 * 
                 * @expose 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {Array.<Object>}
                 * @default <code class="prettyprint">[]</code>
                 * 
                 * @example <caption>Get the current selection:</caption>
                 * $( ".selector" ).ojDataGrid("option", "selection");
                 * 
                 * @example <caption>Set a row selection on the grid during initialization:</caption>
                 * $(".selector").ojDataGrid({"selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]});
                 * 
                 * @example <caption>Set a cell selection on the grid during initialization:</caption>
                 * $(".selector").ojDataGrid({"selection", [{startIndex: {"row":1, "column":2}, endIndex: {"row":3, "column":4}}]});
                 *
                 * @example <caption>Set a row selection on the grid after initialization:</caption>
                 * $(".selector").ojDataGrid("option", "selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]);
                 * 
                 * @example <caption>Set a cell selection on the grid after initialization:</caption>
                 * $(".selector").ojDataGrid("option", "selection", [{startIndex: {"row":1, "column":2}, endIndex: {"row":3, "column":4}}]);
                 */
                selection: [],                
                /** @expose */
                header: {
                    /** @expose */
                    row: {
                        /**
                         * The CSS style class to apply to row headers in the data grid. If a string is specified
                         * the class will be added to all row header cells. 
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string to be set as a className.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.row.className
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row header style calss set to 'rhstyle':</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"className":"rhstyle"} } });
                         * 
                         * @example <caption>Get or set the <code class="prettyprint">className</code> option, after initialization:</caption>
                         * // get the className string
                         * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "header.row.className" );
                         * 
                         * // set the className string to a function of the headerContext
                         * $( ".selector" ).ojDataGrid( "option", "header.row.className", function(headerContext){return headerContext['index'] % 2 == 0 ? 'even':'odd'}});
                         */
                        className: null,
                        /**
                         * The renderer function that renders the content of the row header. See <a href="#context-section">headerContext</a>
                         * in the introduction to see the object passed into the row header renderer function.
                         * The function returns either a String or a DOM element of the content inside the row header.
                         * If the developer chooses to manipulate the row header element directly, the function should return 
                         * nothing. If no renderer is specified, the Grid will treat the header data as a String.
                         * 
                         * @expose 
                         * @alias header.row.renderer
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row header renderer that capitalizes each character in the row header cells:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"renderer": function(headerContext) {
                         *                                            return headerContext['key'].toUpperCase();}}}});
                         *
                         * @example <caption>Get or set the <code class="prettyprint">renderer</code> option, after initialization:</caption>
                         * // get the renderer function
                         * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "row.header.renderer" );
                         * 
                         * // set the renderer function
                         * $( ".selector" ).ojDataGrid( "option", "row.header.renderer", myFunction});
                         */
                        renderer: null,
                        /**
                         * Enable or disable width or height resize along the row headers. Note 
                         * that for row header, a function cannot be used with "height". 
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string of enable or disable.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.row.resizable
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {Object.<string, string>|Object.<string, function(Object)>|null}
                         * @default <code class="prettyprint">{"width": "disable", "height": "disable"}</code>
                         * @property {string} width row width resizable valid values are: "enable", "disable"
                         * @property {string} height row header height resizable valid values are: "enable", "disable"
                         *
                         * @example <caption>Initialize the data grid with row header height resizable only:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"resizable": {"height":"enable"}}}});
                         * 
                         * @example <caption>Initialize the data grid with every other row header height resizable:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"resizable": {"height":function(headerContext){ return headerContext['index'] % 2 === 0 ? 'enable':'disable'; }}}}}); 
                         */
                        resizable: {width: 'disable', height: 'disable'},
                        /**
                         * Enable or disable sorting on the field bounded by this header. The 
                         * data source associated with the DataGrid must have the sort function defined.
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string of auto, enable, or disable.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.row.sortable
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string}
                         * @default <code class="prettyprint">"auto"</code>
                         * @ojvalue {string} "auto" get the sortable property from the data source
                         * @ojvalue {string} "enable" enable sorting on row headers
                         * @ojvalue {string} "disable" disable sorting on row headers
                         * 
                         * @example <caption>Initialize the data grid with row header sort disabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"sortable": "disable"}}});
                         *
                         * @example <caption>Initialize the data grid with every other row header sort enabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {"sortable": function(headerContext){ return headerContext['index'] % 2 === 0 ? 'auto':'disable'; }}}}); 
                         * 
                         */
                        sortable: 'auto',
                        /**
                         * The inline style to apply to row headers in the data grid. If a string is specified
                         * the class will be added to all row header cells.
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.row.style
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with row headers to have green backgrounds:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {style: "background-color: green"}}});
                         * 
                         * @example <caption>Initialize the data grid with every other row header to have a green background:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "row": {style: function(headerContext) {
                         *                                            if (headerContext['index'] % 2 === 0)
                         *                                               return "background-color: green";
                         *                                            return;}}}});           
                         */
                        style: null
                    },
                    /** @expose */
                    column: {
                        /**
                         * The CSS style class to apply to column headers in the data grid. If a string is specified
                         * the class will be added to all column header cells. 
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string to be set as a className.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.column.className
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with column header style calss set to 'chstyle':</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"className":"chstyle"} } });
                         * 
                         * @example <caption>Get or set the <code class="prettyprint">className</code> option, after initialization:</caption>
                         * // get the className string
                         * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "header.column.className" );
                         * 
                         * // set the className string to a function of the headerContext
                         * $( ".selector" ).ojDataGrid( "option", "header.column.className", function(headerContext){return headerContext['index'] % 2 == 0 ? 'even':'odd'}});
                         */
                        className: null,
                        /**
                         * The renderer function that renders the content of the column header. See <a href="#context-section">headerContext</a>
                         * in the introduction to see the object passed into the column header renderer function.
                         * The function returns either a String or a DOM element of the content inside the column header.
                         * If the developer chooses to manipulate the column header element directly, the function should return 
                         * nothing. If no renderer is specified, the Grid will treat the header data as a String.
                         * 
                         * @expose 
                         * @alias header.column.renderer
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with column header renderer that capitalizes each character in the column header cells:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"renderer": function(headerContext) {
                         *                                            return headerContext['key'].toUpperCase();}}}});
                         *
                         * @example <caption>Get or set the <code class="prettyprint">renderer</code> option, after initialization:</caption>
                         * // get the renderer function
                         * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "column.header.renderer" );
                         * 
                         * // set the renderer function
                         * $( ".selector" ).ojDataGrid( "option", "column.header.renderer", myFunction});
                         */
                        renderer: null,
                        /**
                         * Enable ro disable width or height resize along the column headers. Note 
                         * that for column header, a function cannot be used with "height". 
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string of enable or disable.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.column.resizable
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {Object.<string, string>|Object.<string, function(Object)>|null}
                         * @default <code class="prettyprint">{"width": "disable", "height": "disable"}</code>
                         * @property {string} width column width resizable valid values are: "enable", "disable"
                         * @property {string} height column header height resizable valid values are: "enable", "disable"
                         *
                         * @example <caption>Initialize the data grid with column header width resizable only:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"resizable": {"width":"enable"}}}});
                         * 
                         * @example <caption>Initialize the data grid with every other column header width resizable:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"resizable": {"width":function(headerContext){ return headerContext['index'] % 2 === 0 ? 'enable':'disable'; }}}}}); 
                         */
                        resizable: {'width': 'disable', 'height': 'disable'},
                        /**
                         * Enable or disable sorting on the field bounded by this header. The 
                         * data source associated with the DataGrid must have the sort function defined.
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string of auto, enable, or disable.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.column.sortable
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string}
                         * @default <code class="prettyprint">"auto"</code>
                         * @ojvalue {string} "auto" get the sortable property from the data source
                         * @ojvalue {string} "enable" enable sorting on column headers
                         * @ojvalue {string} "disable" disable sorting on column headers
                         * 
                         * @example <caption>Initialize the data grid with column header sort disabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"sortable": "disable"}}});
                         *
                         * @example <caption>Initialize the data grid with every other column header sort enabled:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {"sortable": function(headerContext){ return headerContext['index'] % 2 === 0 ? 'auto':'disable'; }}}}); 
                         * 
                         */
                        sortable: 'auto',
                        /**
                         * The inline style to apply to column headers in the data grid. If a string is specified
                         * the class will be added to all column header cells. 
                         * A function can be specified with this option.  The function would take a single parameter, headerContext, and must return
                         * a string.  See <a href="#context-section">headerContext</a> for details.
                         * 
                         * @expose 
                         * @alias header.column.style
                         * @memberof! oj.ojDataGrid
                         * @instance
                         * @type {function(Object)|string|null}
                         * @default <code class="prettyprint">null</code>
                         * 
                         * @example <caption>Initialize the data grid with column headers to have green backgrounds:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {style: "background-color: green"}}});
                         * 
                         * @example <caption>Initialize the data grid with every other column header to have a green background:</caption>
                         * $( ".selector" ).ojDataGrid({ "data":data, "header": { "column": {style: function(headerContext) {
                         *                                            if (headerContext['index'] % 2 === 0)
                         *                                               return "background-color: green";
                         *                                            return;}}}});           
                         */
                        style: null
                    }
                },
                /** @expose */
                cell: {
                    /**
                     * The CSS style class to apply to cells in the data grid body. If a string is specified
                     * the class will be added to all cells.
                     * A function can be specified with this option.  The function would take a single parameter, cellContext, and must return
                     * a string to be set as a className.  See <a href="#context-section">cellContext</a> for details.
                     * 
                     * @expose 
                     * @alias cell.className
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {function(Object)|string|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with the cell style class set to 'myCellStyle':</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell":{"className":"myCellStyle"} });
                     * 
                     * @example <caption>Get or set the <code class="prettyprint">className</code> option, after initialization:</caption>
                     * // get the className string
                     * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "cell.className" );
                     * 
                     * // set the className string to a function of the cellContext
                     * $( ".selector" ).ojDataGrid( "option", "cell.className", function(cellContext){return cellContext['index'] % 2 == 0 ? 'even':'odd'}});
                     */
                    className: null,
                    /**
                     * The renderer function that renders the content of the cell. See <a href="#context-section">cellContext</a>
                     * in the introduction to see the object passed into the cell renderer function.
                     * The function returns either a String or a DOM element of the content inside the data body cell.
                     * If the developer chooses to manipulate the cell element directly, the function should return 
                     * nothing. If no renderer is specified, the Grid will treat the cell data as a String.
                     * 
                     * @expose 
                     * @alias cell.renderer
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {function(Object)|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with cell renderer that capitalizes each character in the cell:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell": {"renderer": function(cellContext) {
                     *                                            return cellContext['key'].toUpperCase();}}});
                     *
                     * @example <caption>Get or set the <code class="prettyprint">renderer</code> option, after initialization:</caption>
                     * // get the renderer function
                     * var bandingInterval = $( ".selector" ).ojDataGrid( "option", "cell.renderer" );
                     * 
                     * // set the renderer function
                     * $( ".selector" ).ojDataGrid( "option", "cell.renderer", myFunction});
                     */
                    renderer: null,
                    /**
                     * The CSS style to apply directly to cells in the data grid body. If a string is specified
                     * the style will be added to all cells. 
                     * A function can be specified with this option.  The function would take a single parameter, cellContext, and must return
                     * a string.  See <a href="#context-section">cellContext</a> for details.
                     * 
                     * @expose 
                     * @alias cell.style
                     * @memberof! oj.ojDataGrid
                     * @instance
                     * @type {function(Object)|string|null}
                     * @default <code class="prettyprint">null</code>
                     * 
                     * @example <caption>Initialize the data grid with cells to have green backgrounds:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell":{style: "background-color: green"}});
                     * 
                     * @example <caption>Initialize the data grid with every other cell to have a green background using a function:</caption>
                     * $( ".selector" ).ojDataGrid({ "data":data, "cell": {style: function(cellContext) {
                     *                                            if (cellContext['index'] % 2 === 0)
                     *                                               return "background-color: green";
                     *                                            return;}}});           
                     */
                    style: null
                },

                /**
                 * Triggered when a portion of the data grid is resized
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Element} ui.header the key of the header which was resized
                 * @property {string} ui.size the new pixel size string (ex: '75px')
                 *
                 * @example <caption>Initialize the data grid with the <code class="prettyprint">resize</code> callback specified:</caption>
                 * $( ".selector" ).ojDataGrid({
                 *     "resize": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojresize</code> event:</caption>
                 * $( ".selector" ).on( "ojresize", function( event, ui ) {} );
                 */
                resize: null,				

                /**
                 * Triggered when a sort is performed on the data grid
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {Element} ui.header the key of the header which was sorted on				 
                 * @property {string} ui.direction the direction of the sort ascending/descending
                 * 
                 * @example <caption>Initialize the data grid with the <code class="prettyprint">sort</code> callback specified:</caption>
                 * $( ".selector" ).ojDataGrid({
                 *     "sort": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojsort</code> event:</caption>
                 * $( ".selector" ).on( "ojsort", function( event, ui ) {} );
                 */
                sort: null,

                /**
                 * Fired whenever a supported component option changes, whether due to user interaction or programmatic
                 * intervention.  If the new value is the same as the previous value, no event will be fired.
                 *
                 * Currently there is one supported option, <code class="prettyprint">"selection"</code>.  Additional
                 * options may be supported in the future, so listeners should verify which option is changing
                 * before taking any action.
                 *
                 * @expose
                 * @event
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * @property {Object} ui Parameters
                 * @property {string} ui.option the name of the option that is changing
                 * @property {Object} ui.previousValue the previous value of the option
                 * @property {Object} ui.value the current value of the option
                 * @property {Object} ui.optionMetadata information about the option that is changing
                 * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
                 *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
                 *
                 */
                 optionChange: null
	
                
                /**
                 * Identifies the JET Menu that the component should launch as a context menu on right-click or
                 * <kbd>Shift-F10</kbd>. If specified, the browser's native context menu will be replaced by the
                 * specified JET Menu.
                 * 
                 * <p>To specify a JET context menu on a DOM element that is not a JET component, see the
                 * <code class="prettyprint">ojContextMenu</code> binding.  
                 * 
                 * <p>To make the page semantically accurate from the outset, applications are encouraged to specify the
                 * context menu via the standard HTML5 syntax shown in the below example.  When the component is
                 * initialized, the context menu thus specified will be set on the component.
                 *
                 * <p>When defining a contextMenu, ojDataGrid will provide built-in behavior for "edit" style functionality
                 *  (e.g. cut/copy/paste) if the following format for menu &lt;li&gt; item's is used (no &lt;a&gt; 
                 *  elements are required):
                 *  
                 * <ul><li> &lt;li data-oj-command="oj-datagrid-['commandname']" /&gt;</li></ul>
                 * 
                 * <p>The available translated text will be applied to menu items defined this way.
                 * 
                 * <p>The supported commands:
                 * <table class="keyboard-table">
                 *   <thead>
                 *     <tr>
                 *       <th>Default Function</th>
                 *       <th>data-oj-command value</th>
                 *     </tr>
                 *   </thead>
                 *   <tbody>
                 *     <tr>
                 *       <td><kbd>Resize menu</kbd> (contains width and height resize)</td>
                 *       <td>oj-datagrid-resize</td>
                 *     </tr>
                 *     <tr>
                 *       <td>Sort Row menu</kbd> (contains ascending and descending sort)</td>
                 *       <td>oj-datagrid-sortRow</td>
                 *     </tr>
                 *     <tr>
                 *       <td>Sort Column menu</kbd> (contains ascending and descending sort)</td>
                 *       <td>oj-datagrid-sortCol</td>
                 *     </tr>
                 *     <tr>
                 *       <td><kbd>Resize Width</kbd></td>
                 *       <td>oj-datagrid-resizeWidth</td>
                 *     </tr>
                 *     <tr>
                 *       <td><kbd>Resize Height</kbd></td>
                 *       <td>oj-datagrid-resizeHeight</td>
                 *     </tr> 
                 *     <tr>
                 *       <td><kbd>Sort Row Ascending</kbd></td>
                 *       <td>oj-datagrid-sortRowAsc</td>
                 *     </tr>
                 *     <tr>
                 *       <td><kbd>Sort Row Descending</kbd></td>
                 *       <td>oj-datagrid-sortRowDsc</td>
                 *     </tr>			
                 *     <tr>
                 *       <td><kbd>Sort Column Ascending</kbd></td>
                 *       <td>oj-datagrid-sortColAsc</td>
                 *     </tr>
                 *     <tr>
                 *       <td><kbd>Sort Column Descending</kbd></td>
                 *       <td>oj-datagrid-sortColDsc</td>
                 *     </tr>			
                 *     <tr>
                 *       <td><kbd>Cut</kbd></td>
                 *       <td>oj-datagrid-cut</td>
                 *     </tr>		
                 *     <tr>
                 *       <td><kbd>Paste</kbd></td>
                 *       <td>oj-datagrid-paste</td>
                 *     </tr>		
                 * </tbody></table>
                 * 
                 *
                 * <p>The JET Menu should be initialized before any component using it as a context menu.
                 * 
                 * @member
                 * @name contextMenu
                 * @memberof! oj.ojDataGrid
                 * @instance
                 * @type {string | null}
                 * @default <code class="prettyprint">null</code>
                 * 
                 * @example <caption>Initialize a JET Data Grid with a context menu:</caption>
                 * // via recommended HTML5 syntax:
                 * &lt;div id="myDataGrid" contextmenu="myMenu" data-bind="ojComponent: { ... }>
                 * 
                 * // via JET initializer (less preferred) :
                 * $( ".selector" ).ojDataGrid({ "contextMenu": "#myContextMenu"  ... } });
                 * 
                 * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option for
                 *      an ojDataGrid after initialization:</caption>
                 * // getter
                 * var menu = $( ".selector" ).ojDataGrid( "option", "contextMenu" );
                 * 
                 * // setter
                 * $( ".selector" ).ojDataGrid( "option", "contextMenu", "#myContextMenu"} );
                 */                
            },
    /**
     * Create the grid
     * @override
     * @memberof! oj.ojDataGrid
     * @protected
     */
    _ComponentCreate: function()
    {
        this._super();
        this.root = this.element[0];
        this.rootId = this.root.getAttribute('id');        
        this.grid = new DvtDataGrid();    
	this.redrawSet = {'data':'all', 'header':['className','renderer','style','template']}; //vvc    
    },
    /**
     * Initialize the grid after creation
     * @protected
     * @override
     * @memberof! oj.ojDataGrid
     */        
    _AfterCreate: function () 
    {     
        var self = this;

        // unregister existing resize listener before emptying out the root
        this._unregisterResizeListener(this.root);

        $(this.root).empty();
        this._super();          
        this.resources = new oj.DataGridResources(this._GetReadingDirection(), this._getTranslation.bind(self));
        this._setDataSource();
        // sets the initial (or default) selection on internal grid
        this._setSelection();

        this._addContextMenu();    
        if (this.datasource != null)
        {
            this.grid.SetDataSource(this.datasource);
        }
        this.grid.SetOptions(this.options);
        this.grid.SetResources(this.resources);
        this.grid.SetCreateContextCallback(this._modifyContext.bind(self));

        //listen for resizing, selection, sort and trigger relevent events
        this.grid.addListener('resize', function(details)
        {
            self._trigger('resize', details['event'], details['ui']);
        });
        this.grid.addListener('select', function(details)
        {
            self._fireOptionChange("selection", details['ui']['previousSelection'], details['ui']['selection'], details['event']);
        });
        this.grid.addListener('sort', function(details)
        {
            self._trigger('sort', details['event'], details['ui']);
        });
        this.grid.addListener('keydown', function(details)
        {
            self._trigger('keydown', details['event'], details['ui']);
        });
        this.grid.addListener('active', function(details)
        {
            self._trigger('active', details['event'], details['ui']);
        });
        
        //  Possible handler for contextmenu touch support
        // _OpenContextMenu requires a jquery event object
        //this.grid.addListener('contextmenu', function(details)
        //{
             //contextmenu 
        //   var menu = $("#" + self.options.contextMenu['menu']).data( "oj-ojMenu" );
        //   var e = jQuery.Event( "touchend" );
        //   e.originalEvent = details['event'];
        //  self._OpenContextMenu(menu,  e);
        //});
        
        this.grid.render(this.root);   

        // register a resize listener        
        if (this.datasource != null)
        {
            this._registerResizeListener(this.root);
        }
    },
    /**
     * Redraw the entire data grid after having made some external modifications.
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojDataGrid
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojDataGrid( "refresh" );
     */
    refresh: function()
    {
        this._super();	

        // unregister existing resize listener before emptying out the root
        this._unregisterResizeListener(this.root);

        $(this.root).empty();
        this._setDataSource();
        if (this.datasource != null)
        {
            this.grid.SetDataSource(this.datasource);
        }
        this.grid.SetOptions(this.options);
        this.grid.SetResources(this.resources);        
        this.grid.refresh(this.root);

        if (this.datasource != null)
        {
            // register a resize listener        
            this._registerResizeListener(this.root);
        }
    },
    /**
     * Destroy the grid
     * @memberof! oj.ojDataGrid
     * @private
     */
    _destroy: function()
    {
        this.grid.destroy();
        this._unregisterResizeListener(this.root);
        $(this.root).empty();
    },

    /**
     * Fires an optionChange event 
     * @param {String} key the key of option that changed
     * @param {Object} previousValue the previous value
     * @param {Object} value the new value
     * @param {Event} originalEvent  
     *
     * @private
     */
    _fireOptionChange: function(key, previousValue, value, originalEvent) 
    {
      var ui = {
        "option": key,
        "previousValue": previousValue,
        "value": value,
        // (originalEvent is non-null) iff (option change is due to user interaction) 
        // iff (binding should write back the value)
        "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
      };
      this._trigger('optionChange', originalEvent, ui);
    },

    /**
     * Sets multiple options 
     * @param {Object} options the options object
     * @param {Object} flags additional flags for option
     * @override
     * @private
     */
    _setOptions: function( options, flags ) //vvc
    { 
	var isRefresh;

        if(!this.datasource)
        {
            // not initialized yet, just call super
            this._super(options, flags);

            // if datasource is one of the options specified, then re-render the grid
            if (options['data'] != null)
            {
                this.refresh();
            }
        }
        else
        {            
            // check whether a full refresh is needed
            isRefresh = this._shouldRefresh(options);
            // update options
            this._super(options, flags);

            if(isRefresh)
            {
                //redraw whole grid if required 
                this.refresh();
            }
            else
            {
                //or process updated option(s) through the DvtDataGrid
                this.grid.UpdateOptions(options);
            }
        }
    },

    /**
     * Determine if the entire datagrid should refresh based on which options are updated.
     * @param {Object} options the options object
     * @return {boolean} true if datagrid should refresh, false otherwise
     * @private
     */
    _shouldRefresh: function(options)
    { 
        var i, key, isRefresh, elm, itm, opt;

        //Traversing through the header object to retreave option value 
        //header -> column/row -> resizable -> width/heigh

        isRefresh = false;

        for (key in options) 
        {
            if(key in this.redrawSet)
            {
                if (key === "data")
                {
                    isRefresh = true;
                    break;
                }
                //Walk through the header object to retrieve the option value 
                else if(key == "header")
                {
                    for(elm in options["header"])
                    {
                        if(elm == "column" || elm == "row" || elm == "cell")
                        {
                            for(itm in options["header"][elm])
                            {
                                //And check this option against the redraw list,
                                //if the option is in it and its value is different from original
                                //then assign 'true' to the isRefresh flag
                                for(i =0; i < this.redrawSet["header"].length; i++)
                                {
                                    if(itm == this.redrawSet["header"][i])
                                    {
                                        for(opt in this.options["header"][elm])
                                        {
                                            if(opt == itm)
                                            {
                                                if(options["header"][elm][itm] != this.options["header"][elm][itm])
                                                {
                                                    isRefresh = true;
                                                    break;
                                                }
                                            }
                                        }                                                                         
                                    }
                                }
                                if(isRefresh)
                                {
                                    break;
                                }
                            }
                        }
                        if(isRefresh)
                        {
                            break;
                        }
                    }
                }
                else
                {
                    for(opt in this.options)
                    {
                        if(opt == key)
                        {
                            if(!oj.Object.compareValues(options[key],this.options[opt]))
                            {
                                isRefresh = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        
        return isRefresh;
    },
                        
    /**
     * Checks if resize is enabled along a given axis width/height
     * @private	 
     * @param {string} axis column/row
     * @param {string} direction width/height
     * @return {boolean} true if resize is not set to 'disable'
     */
    _isResizeEnabled: function(axis, direction)
    {
        return this.options['header'][axis]['resizable'][direction] !== 'disable';
    },
            
    /**
     * Checks if sorting is enabled along a given axis
     * @private	 
     * @param {string} axis column/row
     * @return {boolean} true if sorting is not set to 'disable'
     */
    _isSortEnabled: function(axis)
    {
        return this.options['header'][axis]['sortable'] !== 'disable';
    },
            
    /**
     * Add a default context menu to the grid if there is none. If there is
     * a context menu set on the grid options we use that one. Add listeners
     * for context menu before show and select. 
     * @private	 
     */
    _addContextMenu: function()
    {
        var self, menuContainer, rootId, resizeMenu = null, sortMenu = null, moveMenu = null, listItems, temp, sortCapability;
        self = this;

        if (this.options["contextMenu"] == null)
        {
            if (this.datasource != null) {
                menuContainer = $('<ul>');
                menuContainer.css('display', 'none').attr('id', this.rootId + 'contextmenu');
                $(this.root).append(menuContainer);
                if (this._isResizeEnabled('column', 'width') || this._isResizeEnabled('column', 'height') ||
                        this._isResizeEnabled('row', 'width') || this._isResizeEnabled('row', 'height'))
                {
                    resizeMenu = this._buildContextMenuItem('resize');
                }
                
                sortCapability = this.datasource.getCapability('sort');
                if (this._isSortEnabled('column'))
                {                
                    if (sortCapability === 'column' || sortCapability === 'full')
                    {
                        sortMenu = this._buildContextMenuItem('sortCol');
                    }
                }
                if (this._isSortEnabled('row'))
                {
                    if (sortCapability === 'row' || sortCapability === 'full')
                    {
                        if (sortMenu != null)
                        {
                            sortMenu = sortMenu.add(this._buildContextMenuItem('sortRow'));
                        }
                        else
                        {
                            sortMenu = this._buildContextMenuItem('sortRow');                            
                        }
                    }                    
                }

                if (this.options['dnd']['reorder'] === 'enable')
                {
                    switch (this.datasource.getCapability('move'))
                    {
                        case 'none':
                            break;
                        default:
                            moveMenu = $(this._buildContextMenuListItem('cut')).add($(this._buildContextMenuListItem('paste')));
                    }
                }
                menuContainer.append(resizeMenu).append(sortMenu).append(moveMenu);
                menuContainer.ojMenu();
                this._setOption("contextMenu", '#' + menuContainer.attr('id'));
                menuContainer.on("ojbeforeopen", this._handleContextMenuBeforeShow.bind(this));
                menuContainer.on("ojselect", this._handleContextMenuSelect.bind(this));
            }
        }
        else
        {
            menuContainer = $(this.options["contextMenu"]);
            listItems = menuContainer.find('[data-oj-command]');
            listItems.each(function(){
                var command;
                if ($(this).children('a').length === 0)
                {
                    command = $(this).attr('data-oj-command').split("-");
                    $(this).replaceWith(self._buildContextMenuItem(command[command.length-1]));
                }
            });
            menuContainer.ojMenu('refresh');
            menuContainer.on("ojbeforeopen", this._handleContextMenuBeforeShow.bind(this));
            menuContainer.on("ojselect", this._handleContextMenuSelect.bind(this));
        }
    },
            
    /**
     * Builds a menu for a command, takes care of submenus where appropriate
     * @param {string} command the command that the datagrid should build a menu item for
     * @private	 
     */            
    _buildContextMenuItem: function(command)
    {
        if (command === 'resize')
        {
            return $(this._buildContextMenuListItem('resize')).append($('<ul></ul>').append($(this._buildContextMenuListItem('resizeWidth'))).append($(this._buildContextMenuListItem('resizeHeight'))));
        }
        else if(command === 'sortCol')
        {
            return $(this._buildContextMenuListItem('sortCol')).append($('<ul></ul>').append($(this._buildContextMenuListItem('sortColAsc'))).append($(this._buildContextMenuListItem('sortColDsc'))));
        }
        else if(command === 'sortRow')
        {
            return $(this._buildContextMenuListItem('sortRow')).append($('<ul></ul>').append($(this._buildContextMenuListItem('sortRowAsc'))).append($(this._buildContextMenuListItem('sortRowDsc'))));
        }        
        else if (Object.keys(this.resources.commands).indexOf(command) != -1)
        {
            return $(this._buildContextMenuListItem(command));         
        }
    },
            
    /**
     * Builds a context menu list item from a command
     * @param {string} command the string to look up command value for as well as translation
     * @return {string} an HTML string containing a list item and a  
     * @private	 
     */
    _buildContextMenuListItem: function(command)
    {
        return '<li data-oj-command=' + this._getMappedCommand(command) + '>' + this._buildContextMenuLabel(command) + '</li>';
    },
    /**
     * Builds a context menu label by looking up command translation
     * @param {string} command the string to look up translation for
     * @return {string} an HTML string containing a label  
     * @private	 
     */
    _buildContextMenuLabel: function(command)
    {
        // convert to the translation key convention
        var key = 'label' + command.charAt(0).toUpperCase() + command.slice(1);
        return '<a href="#">' + this._getTranslation(key) + '</a>';
    },        
            
    /**
     * Get the context menu from the grid
     * @return {Array.<Element>|Element} the context menu element that is set in the options
     * @private	 
     */
    _getContextMenu: function()
    {
        return $(this.options["contextMenu"]).get(0);
    },
    /**
     * Get a translation from the translation resources or one the user set
     * @param {string} key the key of the translation to look up
     * @param {Array|Object|null} args the arguments to pass into the translated string
     * @return {string} the string returned from the resources
     * @private	 
     */
    _getTranslation: function(key, args)
    {        
        return this.getTranslatedString(key, args);
    },
    /**
     * Callback from the resize dialog box, which sends the results to the grid
     * @param {Event} event the event that triggered the dialog button press
     * @private	 
     */
    _handleResizeDialog: function(event)
    {
        var value = $('#' + this.rootId + 'spinner').ojInputNumber("option", "value");
        $('#' + this.rootId + 'dialog').remove();
        this.grid.handleContextMenuReturn(this.contextMenuEvent, this.menuItemFunction, value);
        this.contextMenuEvent['target'].focus();
    },
    /**
     * Build the html for the resize dialog and add it to the root node
     * @param {string} title the header title for the dialog
     * @param {number} initialSize the initial size to put in the spinner
     * @private	 
     */            
    _buildResizeDialog: function(title, initialSize)
    {
        var dialog, dialogBody, spinner, dialogFooter, dialogOKButton;
        //create the base dialog
        dialog =  $('#' + this.rootId + 'dialog');
        spinner = $('#' + this.rootId + 'spinner');
        if (dialog.length === 0 || spinner.length === 0)
        {
            dialog = $('<div>');
            dialog.attr('id', this.rootId + 'dialog');
            dialog.attr('title', title);
            dialogBody = $('<div class="oj-dialog-body"></div>');
            dialogFooter = $('<div class="oj-dialog-footer"></div>');
            dialog.append(dialogBody).append(dialogFooter);

            //create the dialog content
            spinner = $('<input id="' + this.rootId + 'spinner"/>');
            dialogOKButton = $('<button>');

            dialogBody.append(spinner);
            dialogFooter.append(dialogOKButton);
            $(this.root).append(dialog);
        
            dialogOKButton.ojButton({component: 'ojButton', label: 'OK'});
            dialogOKButton.on('click', this._handleResizeDialog.bind(this));
        }
        spinner.ojInputNumber({component: 'ojInputNumber', max:1000, min:20, step:1, value:initialSize});
        dialog.ojDialog({initialVisibility:'show', position:{my: "center center", at: "center center", collision:"none", of:$(this.root)}});
    },
    /**
     * Handle an ojselect event on a menu item, if sort call the handler on the core.
     * If resize prompt the user with a dialog box
     * @param {Event} event event triggering context menu
     * @param {Object} ui an object containing the menu item that was selected
     * @private	 
     */
    _handleContextMenuSelect: function(event, ui)
    {
        var initialSize, parent;
        
        this.menuItemFunction = ui.item.attr('data-oj-command');
        if (this.menuItemFunction === this._getMappedCommand('sortColAsc') || this.menuItemFunction === this._getMappedCommand('sortColDsc')
            || this.menuItemFunction === this._getMappedCommand('cut') || this.menuItemFunction === this._getMappedCommand('paste'))
        {
            this.grid.handleContextMenuReturn(this.contextMenuEvent, this.menuItemFunction, null);
            //this.contextMenuEvent['target'].focus();
        }
        else if (this.menuItemFunction === this._getMappedCommand('resizeWidth') || this.menuItemFunction === this._getMappedCommand('resizeHeight'))
        {
            parent = this._findFirstAncestor($(this.contextMenuEvent['target']), "oj-datagrid-headercell");
            if (parent != null)
            {
                initialSize = this.menuItemFunction === this._getMappedCommand('resizeWidth') ? parent.outerWidth() : parent.outerHeight();
            }
            else
            {
                initialSize = this.menuItemFunction === this._getMappedCommand('resizeWidth') ? $(this.contextMenuEvent['target']).outerWidth() : $(this.contextMenuEvent['target']).outerHeight();
            }
            this._buildResizeDialog(ui.item.text(), initialSize);
        }
    },
    /**
     * Handle an ojbeforeopen event on the context menu. Set the position correctly for keyboard events and store the Keyboard/Mouse event that called the context menu
     * @param {Event} event event triggering context menu
     * @param {Object} ui an object containing the menu item that was selected
     * @private	 
     */
    _handleContextMenuBeforeShow: function(event, ui)
    {
        var contextMenu, cell, header, capabilities;
        contextMenu = $(this._getContextMenu());
        
        this.contextMenuEvent = event['originalEvent']['originalEvent'];
        
        // TODO: Rather than setting "position" in this beforeOpen listener, probably better to 
        // override _OpenContextMenu() and pass "position" in its call to menu.open().  That way, 
        // if the app wants to tweak the position in its beforeOpen listener, its success 
        // doesn't depend on who gets their listeners registered first.
        if (this.contextMenuEvent['type'] === 'keydown')
        {
            ui.openOptions.position = {"my": "start top", "at": "start bottom", "of": this.contextMenuEvent['target']};
        }
        else
        {
            ui.openOptions.position = {"my": "start top", "at": "start bottom"};
        }

        cell = this._findFirstAncestor($(this.contextMenuEvent['target']).eq(0), this._getMappedStyle('cell'));
        if (cell != null)
        {
            capabilities = this._getCellCapability(cell);
        }
        else
        {
            header = this._findFirstAncestor($(this.contextMenuEvent['target']).eq(0), this._getMappedStyle('headercell'));
            capabilities = this._getHeaderCapability(header);
        }

        this._manageContextMenu(capabilities);
    },    
    /**
     * Add the disabled class to the menu item with a given command
     * @param {string} command the command to add the diabled attribute to
     * @private	 
     */            
    _addContextMenuCapability: function(command)
    {
        var contextMenu;
        contextMenu = $(this._getContextMenu());
        if (!contextMenu.find("[data-oj-command=" + command + "]").hasClass('oj-disabled'))
        {
            contextMenu.find("[data-oj-command=" + command + "]").addClass('oj-disabled');
        }
    },
    /**
     * Remove the disabled class to the menu item with a given command
     * @param {string} command the command to remove the diabled attribute to
     * @private	 
     */                    
    _removeContextMenuCapability: function(command)
    {
        $(this._getContextMenu()).find("[data-oj-command=" + command + "]").removeClass('oj-disabled');
    },
    /**
     * Based on an object containing the capabilities, add or remove the disable attribute
     * @param {Object} capabilities an object with keys of resizable, sortable
     * @private	 
     */              
    _manageContextMenu: function(capabilities)
    {
        var property, command;
        for (property in capabilities)
        {
            if (capabilities.hasOwnProperty(property))
            {
                command = this.resources.getMappedCommand(property);
                if (capabilities[property] === 'disable')
                {
                    this._addContextMenuCapability(command);
                }
                else
                {
                    this._removeContextMenuCapability(command);
                }
            }
        }
    },
            
    /**
     * Find the first ancestor of an element with a specific class name
     * @param {Object} element the element to find the nearest class name to
     * @param {string} className the class name to look for
     * @return {Object|null} the element with the className, if there is none returns null 
     * @private	 
     */                  
    _findFirstAncestor: function(element, className) {
        var parents;
        if (element.hasClass(className))
        {
            return element;
        }
        parents = element.parents("."+className);
        if (parents.length != 0)
        {
            return parents.eq(0);
        }
        return null;
    },
    /**
     * Find the index of a cell
     * @param {Object} element the cell to find the index of
     * @return {Object} an object containing rowIndex and columnIndex 
     * @private	 
     */                     
    _findCellIndex: function(element) {
        var row, rowIndex, columnIndex;
        row = element.parent();
        columnIndex = row.children().index(element);
        rowIndex = row.parent().children().index(row) - 1;
        return {'rowIndex': rowIndex, 'columnIndex': columnIndex};
    },
            
    /**
     * Find the headers corresponding to a cell indicies
     * @param {Object} index the index to find the headers at
     * @return {Object} an object containing rowHeader and columnHeader 
     * @private	 
     */                     
    _findHeadersByCellIndex: function(index) {
        var rowHeader, columnHeader;
        rowHeader = this._getRowHeader().children().eq(0).children().eq(index['rowIndex'] + 1);
        columnHeader = this._getColumnHeader().children().eq(0).children().eq(index['columnIndex']);
        return {'rowHeader': rowHeader, 'columnHeader': columnHeader};
    },       
            
    /**
     * Get the root grid as a jquery object
     * @private	 
     */			
    _getGrid: function()
    {
        return $(this.root);
    },     
	
    /**
     * Get the column header container as a jquery object 
     * @private	 
     */	            
    _getColumnHeader: function() {
        return $('#' + this.rootId + '\\:columnHeader');
    },
	
    /**
     * Get the row header container as a jquery object 
     * @private	 
     */	                 
    _getRowHeader: function() {
        return $('#' + this.rootId + '\\:rowHeader');
    },
	
    /**
     * Get the databody container as a jquery object 
     * @private	 
     */  
    _getDatabody: function() {
        return $('#' + this.rootId + '\\:databody');
    },
            
    /**
     * Get the databody rows as a jquery object 
     * @private	 
     */        
    _getDatabodyRows: function() {
        return $('#' + this.rootId + '\\:databody .'+ this._getMappedStyle('row'));
    },            
    
    /**
     * Get the capabilities for context menu opened on a cell
     * @param {Object} cell the cell with context menu opened on it
     * @return {Object} capabilities object with props resizeWidth, resizeHeight, sortRow, sortCol
     * @private	 
     */		
    _getCellCapability: function(cell) {
        var index, headers, capabilities, rowHeader, columnHeader;
        index = this._findCellIndex(cell);
        headers = this._findHeadersByCellIndex(index);
        capabilities = {resizeWidth: 'disable', resizeHeight: 'disable', sortRow: 'disable', sortCol: 'disable'};
        rowHeader = headers['rowHeader'];
        columnHeader = headers['columnHeader'];
        if (columnHeader.length !== 0)
        {
            if (columnHeader.attr(this._getMappedAttribute('resizable')) === 'true')
            {
                capabilities['resizeWidth'] = 'enable';
            }
            if (columnHeader.attr(this._getMappedAttribute('sortable')) === 'true')
            {
                capabilities['sortCol'] = 'enable';
            }
        }
        if (rowHeader.length !== 0)
        {
            if (rowHeader.attr(this._getMappedAttribute('resizable')) === 'true')
            {
                capabilities['resizeHeight'] = 'enable';
            }
            if (rowHeader.attr(this._getMappedAttribute('sortable')) === 'true')
            {
                capabilities['sortRow'] = 'enable';
            }
        }
        return capabilities;
    },

    /**
     * Get the capabilities for context menu opened on a header
     * @param {Object} header the header with context menu opened on it
     * @return {Object} capabilities object with props resizeWidth, resizeHeight, sortRow, sortCol
     * @private	 
     */		
    _getHeaderCapability: function(header) {
        var capabilities;
        capabilities = {resizeWidth: 'disable', resizeHeight: 'disable', sortRow: 'disable', sortCol: 'disable'};
        if (header !== null)
        {
            if (header.hasClass(this._getMappedStyle('colheadercell')))
            {
                if (header.attr(this._getMappedAttribute('resizable')) === 'true')
                {
                    capabilities['resizeWidth'] = 'enable';
                }
                capabilities['resizeHeight'] = this._isResizeEnabled('column', 'height') ? 'enable' : 'disable';
                if (header.attr(this._getMappedAttribute('sortable')) === 'true')
                {
                    capabilities['sortCol'] = 'enable';
                }
            }
            else
            {
                if (header.attr(this._getMappedAttribute('resizable')) === 'true')
                {
                    capabilities['resizeHeight'] = 'enable';
                }
                capabilities['resizeWidth'] = this._isResizeEnabled('row', 'width') ? 'enable' : 'disable';
                if (header.attr(this._getMappedAttribute('sortable')) === 'true')
                {
                    capabilities['sortRow'] = 'enable';
                }
            }
        }
        return capabilities;
    },

    /**
     * @private	 
     */	
    _setDataSource: function()
    {
        if (this.options['data'] != null)
        {
            this.datasource = this.options['data'];
        }
        else
        {
            this.datasource = null;
        }
    },
       
    /**
     * Sets selection on internal grid from options
     * @private	 
     */	
    _setSelection: function()
    {
        var selection = this.options['selection'];
        if (selection != null)
        {
            this.grid.SetSelection(selection);
        }
    },

    /**
     * Modify the header and cell context before passing to the renderer.
     * @param {Object} context the header or cell context.
     * @private
     */
    _modifyContext: function(context)
    {
        context['component'] = this;
    },

    /**
     * Sets accessible context information about the current active cell.
     * Invoked by row expander to set accessible context info on the datagrid (and
     * the info is then read by the screen reader)
     * @param {Object} context
     * @private
     */
    _setAccessibleContext: function(context)
    {
        this.grid.SetAccessibleContext(context);
    },

    /**
     * Unregister event listeners for resize the container DOM element.
     * @param {Element} element  DOM element
     * @private
     */
    _unregisterResizeListener: function(element)
    {
        if (element && this._resizeHandler)
        {
            // remove existing listener
            oj.DomUtils.removeResizeListener(element, this._resizeHandler);    
        }
    },

    /**
     * Register event listeners for resize the container DOM element.
     * @param {Element} element  DOM element
     * @private
     */
    _registerResizeListener: function(element)
    {         
        if (element)
        {
            if (this._resizeHandler == null)
            {
                this._resizeHandler = this._handleResize.bind(this);
            }

            oj.DomUtils.addResizeListener(element, this._resizeHandler);
        }
    },

    /**
     * The resize handler.
     * @param {number} width the new width
     * @param {number} height the new height
     * @private
     */
    _handleResize: function(width, height)
    {
        if (width > 0 && height > 0)
        {
            this.grid.HandleResize(width, height);
        }
    },
        
    /**
     * Return the subcomponent node represented by the documented locator attribute values.
     * <p>
     * To lookup a cell the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-datagrid-cell'</li>
     * <li><b>rowIndex</b>: the zero based row index</li>
     * <li><b>columnIndex</b>: the zero based column index</li>
     * </ul>          
     *          
     * To lookup a header the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-datagrid-header'</li>
     * <li><b>axis</b>: 'column'/'row'</li>
     * <li><b>index</b>: the zero based row/column index</li>
     * </ul>
     *          
     * To lookup a sort icon the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-datagrid-sort-icon'</li>
     * <li><b>axis</b>: 'column'/'row'</li>
     * <li><b>index</b>: the zero based row/column index</li>                
     * </ul>
     * 
     * @expose
     * @memberof! oj.ojDataGrid
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *         the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Array.<(Element|null)>|Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
        var subId, header, rowIndex,columnIndex, index, axis;
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        subId = locator['subId'];
        if (subId === 'oj-datagrid-cell')
        {
            rowIndex = locator['rowIndex'] -  this.grid.getStartRow();
            columnIndex = locator['columnIndex'] -  this.grid.getStartColumn();
            return this._getDatabodyRows().eq(rowIndex).children().eq(columnIndex).get(0);
        }
        else if (subId === 'oj-datagrid-sort-icon' || subId === 'oj-datagrid-header')
        {
            axis = locator['axis'];
            index = locator['index'];
            if (axis === 'column')
            {
                header = $('#' + this.rootId + '\\:columnHeader .' + this._getMappedStyle('headercell')).eq(index - this.grid.getStartColumnHeader());
            }
            else if (axis === 'row')
            {
                header = $('#' + this.rootId + '\\:rowHeader .' + this._getMappedStyle('headercell')).eq(index - this.grid.getStartRowHeader());
            }
            
            if (subId === 'oj-datagrid-sort-icon')
            {
                return header.children('.' + this._getMappedStyle('sortcontainer')).children().get(0);
            }
            return header.get(0);
        }

        // Non-null locators have to be handled by the component subclasses
        return null;
    },              
          
    /**
     * Get the mapped style from the resources
     * @param {string} key style mapping key
     * @private
     */
    _getMappedStyle: function(key)
    {
        return this.resources.getMappedStyle(key);
    },
            
    /**
     * Get the mapped attribute from the resources
     * @param {string} key attribute mapping key
     * @private
     */
    _getMappedAttribute: function(key)
    {
        return this.resources.getMappedAttribute(key);
    },
            
    /**
     * Get the mapped command from the resources
     * @param {string} key command mapping key
     * @private
     */
    _getMappedCommand: function(key)
    {
        return this.resources.getMappedCommand(key);
    }             
});

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  The FlattenedTreeCellSet is a FlattenedDataGridDataSource specific 
 * implementation of methods on CellSet. 
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Object} nodeSet the node set in which this cell set wraps around
 * @param {Array|null} columns the set of column keys
 * @constructor
 * @export
 */
oj.FlattenedTreeCellSet = function(startRow, endRow, startColumn, endColumn, nodeSet, columns)
{
    // assert startRow/startColumn are number
    oj.Assert.assertNumber(startRow, null);
    oj.Assert.assertNumber(endRow, null);
    oj.Assert.assertNumber(startColumn, null);
    oj.Assert.assertNumber(endColumn, null);
    oj.Assert.assertArrayOrNull(columns);

    this.m_startRow = startRow;
    this.m_endRow = endRow;
    this.m_startColumn = startColumn;
    this.m_endColumn = endColumn;
    this.m_nodeSet = nodeSet;
    this.m_columns = columns;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the data from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object} the data object for the specified index.
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getData = function(indexes)
{
    var relIndex, row, column, columnKey, rowData;

    // convert to relative index
    relIndex = this._getRelIndexes(indexes);
    if (relIndex == null)
    {
        return null;
    }

    row = relIndex[0];
    column = relIndex[1];

    // make sure index are valid
    oj.Assert.assert(row < this.m_nodeSet.getStart()+this.m_nodeSet.getCount() && column < this.m_columns.length);

    columnKey = this.m_columns[column];
    rowData = this.m_nodeSet.getData(row);
    if (rowData != null)
    {
        if (rowData.get)
        {
            return rowData.get(columnKey);
        }
        else
        {
            return rowData[columnKey];
        }
    }
    return null;
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the metadata from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return the metadata object for the specific index.  The metadata that the DataGrid supports are: 
 *         1) keys - the key (of each axis) of the cell.
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getMetadata = function(indexes)
{
    var relIndex, row, column, columnKey, metadata, rowKey;

    // convert to relative index
    relIndex = this._getRelIndexes(indexes);
    if (relIndex == null)
    {
        return null;
    }

    row = relIndex[0];
    column = relIndex[1];

    // make sure index are valid
    oj.Assert.assert(row < this.m_nodeSet.getStart()+this.m_nodeSet.getCount() && column < this.m_columns.length);

    columnKey = this.m_columns[column];

    metadata = this.m_nodeSet.getMetadata(row);
    rowKey = metadata['key'];

    metadata['keys'] = {"row": rowKey, "column": columnKey};

    return metadata;
};

/**
 * Helper method to validate and retrieve the relative indexes.
 * @param {Object} indexes the row and column index
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object.<number, number>} the relative indexes
 * @private
 */
oj.FlattenedTreeCellSet.prototype._getRelIndexes = function(indexes)
{
    var row, column;

    oj.Assert.assertObject(indexes);

    if (this.m_nodeSet == null || this.m_nodeSet.length == 0)
    {
        return null;
    }

    // map to the index in nodeSet
    row = indexes['row'] - this.m_startRow + this.m_nodeSet.getStart();
    column = indexes['column'];

    // make sure index are valid
    oj.Assert.assertNumber(row, null);
    oj.Assert.assertNumber(column, null);
    oj.Assert.assert(row >= 0 && column >= 0); 

    return [row, column];
};

/**
 * Gets the start index of the result set for the specified axis.
 * @param {string} axis the axis in which to inquire the actual count of the result set.  
 *        Valid values are "row" and "column".
 * @return {number} the start of the index of the result set for the specified axis.  
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getStart = function(axis)
{
    if (axis === "row")
    {
        return this.m_startRow;
    }

    if (axis === "column")
    {
        return this.m_startColumn;
    }

    return 0;
};

/**
 * Gets the actual count of the result set for the specified axis. 
 * @param {string} axis the axis in which to inquire the actual count of the result set.  
 *        Valid values are "row" and "column".
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.FlattenedTreeCellSet.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return Math.min(this.m_endRow - this.m_startRow, this.m_nodeSet.getCount());
    }
    
    if (axis === "column")
    {
        return this.m_endColumn - this.m_startColumn;
    }

    return 0;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This is an OJ collection specific implementation of the HeaderSet.
 * @param {number} start the start index of header set.
 * @param {number} end the end index of the header set.
 * @param {Array} headers the array of headers.  Required for column headers.
 * @param {Object=} nodeSet the node set containing data about the row header.  Required for row headers.
 * @param {string=} rowHeader the id of the row header column.  Required for row headers.
 * @constructor
 * @export
 */
oj.FlattenedTreeHeaderSet = function(start, end, headers, nodeSet, rowHeader)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);
    oj.Assert.assertArrayOrNull(headers);

    this.m_start = start;
    this.m_end = end;
    this.m_headers = headers;
    this.m_nodeSet = nodeSet;
    this.m_rowHeader = rowHeader;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getData = function(index)
{
    var rowData;

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    // row or column header
    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        rowData = this.m_nodeSet.getData(index);
        if (rowData != null)
            return rowData.get(this.m_rowHeader);
        else
            return null;
    }
    else
    {
        return this.m_headers[index];
    }
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source can optionally return are:
 *  1) sortDirection - the initial sort direction of the header.  Valid values are "ascending" and "descending".
 *  2) key - the key of the row/column header.
 * @param {number} index the index of the header in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getMetadata = function(index)
{
    var data;

    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        return this.m_nodeSet.getMetadata(index);
    }
    else
    {
        data = this.getData(index);
        return {'key': data};
    }
};

/**
 * Gets the actual count of the result set.
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.FlattenedTreeHeaderSet.prototype.getCount = function()
{
    if (this.m_rowHeader != null && this.m_nodeSet != null)
    {
        return Math.min(this.m_nodeSet.getCount(), this.m_end - this.m_start);
    }
    else
    {
        return Math.max(0, this.m_end - this.m_start);
    }
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
 /**
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  This implementation of CellSet is used by the
 * array DataGridDataSource.   
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Object} callback the callback to invoke on to retrieve data and metadata. 
 * @constructor
 * @export
 */
oj.ArrayCellSet = function(startRow, endRow, startColumn, endColumn, callback)
{
    // assert startRow/startColumn are number
    oj.Assert.assertNumber(startRow, null);
    oj.Assert.assertNumber(endRow, null);
    oj.Assert.assertNumber(startColumn, null);
    oj.Assert.assertNumber(endColumn, null);

    this.m_startRow = startRow;
    this.m_endRow = endRow;
    this.m_startColumn = startColumn;
    this.m_endColumn = endColumn;
    this.m_callback = callback;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the data from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object} the data object for the specified index.
 * @export
 */
oj.ArrayCellSet.prototype.getData = function(indexes)
{
    return this.m_callback.getCellData(indexes['row'], indexes['column']);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available 
 * 2) the index specified is out of bounds. 
 * @param {Object} indexes the index of each axis in which we want to retrieve the metadata from.  
 * @param {number} indexes.row the index of the row axis.
 * @param {number} indexes.column the index of the column axis.
 * @return {Object} the metadata object for the specific index.  The metadata that the DataGrid supports are: 
 *         1) keys - the key (of each axis) of the cell.
 * @export
 */
oj.ArrayCellSet.prototype.getMetadata = function(indexes)
{
    return this.m_callback.getCellMetadata(indexes['row'], indexes['column']);
};

/**
 * Gets the start index of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the start index of the result set for the specified axis.  
 * @export
 */
oj.ArrayCellSet.prototype.getStart = function(axis)
{
    if (axis == "row")
    {
        return this.m_startRow;
    }
    else if (axis == "column")
    {
        return this.m_startColumn;
    }

    return -1;
};

/**
 * Gets the actual count of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.ArrayCellSet.prototype.getCount = function(axis)
{
    if (axis === "row")
    {
        return Math.max(0, this.m_endRow - this.m_startRow);
    }
    
    if (axis === "column")
    {
        return Math.max(0, this.m_endColumn - this.m_startColumn);
    }

    return 0;
};

////// testing methods to get properties //////
/**
 * Gets the start row property
 * @return {number} the start row
 * @export
 */
oj.ArrayCellSet.prototype.getStartRow = function()
{
    return this.m_startRow;
};

/**
 * Gets the start column property
 * @return {number} the start column
 * @export
 */
oj.ArrayCellSet.prototype.getStartColumn = function()
{
    return this.m_startColumn;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * The DataGrid specific implementation of the FlattenedTreeDataSource class.
 * @param {Object} treeDataSource the instance of TreeDataSource to flattened
 * @param {Object=} options the options set on this data source.  See documentation for a list
 *        of supported options.
 * @constructor
 * @export
 * @extends oj.FlattenedTreeDataSource
 */
oj.FlattenedTreeDataGridDataSource = function(treeDataSource, options)
{
    oj.FlattenedTreeDataGridDataSource.superclass.constructor.call(this, treeDataSource, options);
};

// Subclass from oj.FlattenedTreeDataSource
oj.Object.createSubclass(oj.FlattenedTreeDataGridDataSource, oj.FlattenedTreeDataSource, "oj.FlattenedTreeDataGridDataSource");

/**
 * Initializes the data source.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.Init = function()
{
    oj.FlattenedTreeDataGridDataSource.superclass.Init.call(this);

    this.m_columns = oj.FlattenedTreeDataGridDataSource.superclass.getOption.call(this, 'columns');
    this.m_rowHeader = oj.FlattenedTreeDataGridDataSource.superclass.getOption.call(this, 'rowHeader');
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "exact" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "exact".
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCountPrecision = function(axis)
{
    // always returns estimate row count to ensure high watermark scrolling is used.
    if (axis === "row")
    {
        return "estimate";
    }

    return "actual";
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCount = function(axis)
{
    // always returns -1 to ensure high watermark scrolling is used.
    if (axis === "row")
    {
        return -1;
    }

    if (axis === "column")
    {
        return this.m_columns.length;
    }

    return 0;
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, headerSet;

    axis = headerRange['axis'];
    if (axis === "column")
    {
        headerSet = new oj.FlattenedTreeHeaderSet(headerRange['start'], headerRange['start']+headerRange['count'], this.m_columns);
    }
    else if (axis === "row")
    {
        if (this.m_rowHeader != null)
        {
            // assumes that a fetch header request is immediately followed by a fetch cells request
            // avoid doing two fetch requests for the same set of data, wait until fetch cells request is available
            // before handling the header request
            // since the two fetches are converge on fetchCell, the range should always be in sync
            this.m_fetchHeaderRequest = {'range': headerRange, 'callbacks': callbacks, 'callbackObjects': callbackObjects};
            return;
        }
        else
        {
            // no row header, return empty result set
            headerSet = new oj.ArrayHeaderSet(headerRange['start'], headerRange['start'], axis, null);
        }
    }

    if (headerSet != null)
    {
        if (callbacks != null && callbacks['success'] != null)
        {
            // todo: get rid of callbackObjects
            if (callbackObjects == null)
            {
                callbackObjects = {};
            }	            
            callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
        }
    }
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowCount;

    // extract row range information needed to make the fetchRows call
    for (i=0; i<cellRanges.length; i++)
    {
        cellRange = cellRanges[i];   
        if (cellRange['axis'] == "row")
        {
            rowStart = cellRange['start'];
            rowCount = cellRange['count'];
            break;
        }
    }

    oj.FlattenedTreeDataGridDataSource.superclass.fetchRows.call(this, {'start': rowStart, 'count': rowCount}, {"success": function(nodeSet){this._handleFetchRowsSuccess(nodeSet, cellRanges, callbacks, callbackObjects, 0);}.bind(this), "error": function(status){this._handleFetchRowsError(status, {'start': rowStart, 'count': rowCount}, callbacks, callbackObjects);}.bind(this)}); 
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object.<Object, Object>} an object containing the keys for each axis
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex, colIndex, rowKey, colKey;

    rowIndex = indexes['row'];
    colIndex = indexes['column'];

    // if it hasn't been fetched yet or invalid column index, return null
    if (rowIndex > oj.FlattenedTreeDataGridDataSource.superclass.getFetchedRange.call(this)['end'] || colIndex > this.m_columns.length)
        return null;

    rowKey = oj.FlattenedTreeDataGridDataSource.superclass.getKey.call(this, rowIndex);
    colKey = this.m_columns[colIndex];

    return {"row": rowKey, "column": colKey};
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis. 
 *         Return null if the indexes cannot be found.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.indexes = function(keys)
{
    var rowIndex, colIndex, rowKey, colKey, i;

    rowKey = keys['row'];
    colKey = keys['column'];

    // call helper method to find the flattened index
    rowIndex = oj.FlattenedTreeDataGridDataSource.superclass.getIndex.call(this, rowKey);
    // for column index, just search through the column keys array
    for (i=0; i<this.m_columns.length; i++)
    {
        if (this.m_columns[i] === colKey)
        {
            colIndex = i;
            break;
        }
    }

    // make sure the indexes are valid
    if (rowIndex >= 0 && colIndex >= 0)
    {
        return {"row": rowIndex, "column": colIndex};
    }

    // can't find it
    return null;
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var dataSource = oj.FlattenedTreeDataGridDataSource.superclass.getWrappedDataSource.call(this);

    // delegates to the underlying TreeDataSource but intercept the success callback so that we can clear the cache
    return dataSource.sort(criteria, {"success": function(){this._handleSortSuccess(callbacks, callbackObjects);}.bind(this), "error": callbacks['error']});
};

/**
 * Handles sort success callback.
 * @param {Object} callbacks the original callbacks for the sort operation
 * @param {Object} callbackObjects the original callbackObjects for the sort operation
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleSortSuccess = function(callbacks, callbackObjects)
{
    // reset state
    this.refresh();

    // invoke original sort success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }	            
        callbacks['success'].call(callbackObjects['success']);
    }
};

/**
 * Moves a row from one location to another (different position within the same parent or a completely different parent)
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  Valid values are: "before", "after".
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @export
 */ 
oj.FlattenedTreeDataGridDataSource.prototype.move = function(rowToMove, referenceRow, position, callbacks)
{
    var dataSource = oj.FlattenedTreeDataGridDataSource.superclass.getWrappedDataSource.call(this);

    // delegates to the underlying TreeDataSource.  TreeDataSource is responsible for firing the appropriate model change
    // event so that the FlattenedTreeDataSource state are updated correctly.
    dataSource.move(rowToMove, referenceRow, position, callbacks);
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none", "row", "column".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.FlattenedTreeDataGridDataSource.prototype.getCapability = function(feature)
{
    var dataSource = oj.FlattenedTreeDataGridDataSource.superclass.getWrappedDataSource.call(this);

    // just delegates to the underlying TreeDataSource
    if (dataSource.getCapability(feature) === 'default')
    {
        return 'column';
    }
    else
    {
        return 'none';
    }
};

/**
 * A hook for FlattenedTreeDataSource to inject additional metadata into the NodeSet
 * @param {Object} key the row key identifying the row
 * @param {Object} metadata the existing metadata to inject into
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.insertMetadata = function(key, metadata)
{
    // just call super
    oj.FlattenedTreeDataGridDataSource.superclass.insertMetadata.call(this, key, metadata);
};

/**
 * Callback method to handle success callback for fetchRows operation on FlattenedTreeDataSource.
 * @param {Object} nodeSet the result node set from the fetchRows called.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleFetchRowsSuccess = function(nodeSet, cellRanges, callbacks, callbackObjects)
{
    var i, cellRange, rowStart, rowCount, columnStart, columnCount, headerRange, cellSet;

    // extract range information
    for (i=0; i<cellRanges.length; i++)
    {
        cellRange = cellRanges[i];   
        if (cellRange['axis'] == "row")
        {
            rowStart = cellRange['start'];
            rowCount = cellRange['count'];
        }
        else if (cellRange['axis'] == "column")
        {
            columnStart = cellRange['start'];
            columnCount = cellRange['count'];
        }
    }

    // checks whether there is an outstanding fetch header request with the same range
    if (this.m_fetchHeaderRequest)
    {
        headerRange = this.m_fetchHeaderRequest['range'];
        if (headerRange['start'] == rowStart && headerRange['count'] == rowCount)
        {
            // handle row header request
            this._handleRowHeaderFetchSuccess(nodeSet, headerRange, this.m_fetchHeaderRequest['callbacks'], this.m_fetchHeaderRequest['callbackObjects']);
        }
        this.m_fetchHeaderRequest = null;
    }

    // create wrapper
    cellSet = new oj.FlattenedTreeCellSet(rowStart, rowStart+rowCount, columnStart, columnStart+columnCount, nodeSet, this.m_columns);
    // invoke success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks["success"].call(callbackObjects['success'], cellSet, cellRanges);
    }
};

/**
 * Callback method to handle error callback for fetchRows operation on FlattenedTreeDataSource.
 * @param {Object} status the error status.
 * @param {Object} range Information about the row range.  
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleFetchRowsError = function(status, range, callbacks, callbackObjects)
{
    var headerRange, headerCallbacks, headerCallbackObjects;

    // checks whether there is an outstanding fetch header request with the same range
    if (this.m_fetchHeaderRequest)
    {
        headerRange = this.m_fetchHeaderRequest['range'];
        if (headerRange['start'] == range['start'] && headerRange['count'] == range['count'])
        {
            // invoke error callback on fetch header
            headerCallbacks = this.m_fetchHeaderRequest['callbacks'];
            headerCallbackObjects = this.m_fetchHeaderRequest['callbackObjects'];

            if (headerCallbacks['error'])
            {
                // todo: get rid of callbackObjects
                if (headerCallbackObjects == null)
                {
                    headerCallbackObjects = {};
                }            
                headerCallbacks['error'].call(headerCallbackObjects['error'], status);
            }
        }
        this.m_fetchHeaderRequest = null;
    }

    // invoke error callback
    if (callbacks['error'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks["success"].call(callbackObjects['error'], status);
    }
};

/**
 * Handles header fetch success request based on results from fetch cell operation.
 * @param {Object} nodeSet the result node set from the fetchRows called.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.FlattenedTreeDataGridDataSource.prototype._handleRowHeaderFetchSuccess = function(nodeSet, headerRange, callbacks, callbackObjects)
{
    // create wrapper
    var headerSet = new oj.FlattenedTreeHeaderSet(headerRange['start'], headerRange['start']+headerRange['count'], this.m_columns, nodeSet, this.m_rowHeader);
    // invoke success callback
    if (callbacks['success'])
    {
        // todo: get rid of callbackObjects
        if (callbackObjects == null)
        {
            callbackObjects = {};
        }            
        callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
    }
};

/**
 * Implementation of abstract method to insert a set of rows into the DataGrid
 * @param {number} insertAtIndex the flattened index of the node where the rows are inserted.
 * @param {Object} insertAtRowKey the key of the node where the rows are inserted (the parent key)
 * @param {Object} nodeSet the node set containing data/metadata of inserted rows
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.insertRows = function(insertAtIndex, insertAtRowKey, nodeSet)
{
    var cellSet, event;

    // create a CellSet that wraps around a RowSet 
    cellSet = new oj.FlattenedTreeCellSet(insertAtIndex, insertAtIndex+nodeSet.getCount(), 0, this.m_columns.length, nodeSet, this.m_columns);

    // construct model insert event with a set of rows to insert
    event = {};
    event['source'] = this;
    event['operation'] = 'insert';
    event['result'] = cellSet;
    event['keys'] = {"row": insertAtRowKey};

    oj.FlattenedTreeDataGridDataSource.superclass.handleEvent.call(this, "change", event);
};

/**
 * Implementation of bstract method to remove the specified rows in the DataGrid
 * @param {Array.<Object>} rowKeys an array of keys of the rows to be remove.
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.removeRows = function(rowKeys)
{
    var keys, i, event;
    
    // extract the keys
    keys = [];
    for (i=0; i<rowKeys.length; i++)
    {
        keys.push({"row": rowKeys[i]['key']});
    }

    // construct model delete event with a set of row keys to delete
    event = {};
    event['source'] = this;
    event['operation'] = 'delete';
    event['keys'] = keys;

    oj.FlattenedTreeDataGridDataSource.superclass.handleEvent.call(this, "change", event);
};

/**
 * Handles the case when the maximum number of rows have been reached
 * @param {Object} range the range of the fetch request that cause the max count to be reached
 * @param {number} range.start the start index of the range
 * @param {number} range.count the count of the range
 * @protected
 */
oj.FlattenedTreeDataGridDataSource.prototype.handleMaxCountReached = function(range, callbacks)
{
    var empty = new oj.EmptyNodeSet(null, range['start']);
    callbacks["success"].call(null, empty);
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
/**
 * @export
 * @class oj.PagingDataGridDataSource
 * @classdesc Object representing data used by the paging component
 * @param {oj.DataGridDataSource|null} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @extends oj.PagingDataSource
 * @constructor
 */
oj.PagingDataGridDataSource = function(dataSource, options)
{
    // Initialize
    if (!(dataSource instanceof oj.DataGridDataSource))
    {
        // we only support Array, oj.Collection, or ko.observableArray. To
        // check for observableArray, we can't do instanceof check because it's
        // a function. So we just check if it contains a subscribe function.
        throw new oj.Message('Not a datagridatasource', 'Not a datagridatasource', oj.Message.SEVERITY_LEVEL['ERROR']);
    }
    this.dataSource = dataSource;
    this._startIndex = 0;
    this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingDataGridDataSource, oj.PagingDataSource, "oj.PagingDataGridDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.PagingDataGridDataSource.prototype.Init = function()
{
    oj.PagingDataGridDataSource.superclass.Init.call(this);
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.fetch = function(options)
{
    this._initialized = true;
    this._startIndex = options.startIndex;

    this.dataSource.setPageSize(this._currentPageSize);

    var self = this;
    return oj.Object.__getPromise(function(resolve, reject) {
        self.dataSource.fetch(options);
        resolve();
    });
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.hasMore = function() {
    return this.dataSource.hasMore();
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.next = function()
{
    if (this.dataSource.totalSize() > this._startIndex)
    {
        this._currentPageSize = this._currentPageSize + this._pageSize;
        this.dataSource.setPageSize(this._currentPageSize);
        return this.fetch({startIndex: this._startIndex});
    }
    return oj.Object.__getPromise(function(resolve, reject) {
        reject();
    });
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.previous = function()
{
    if (this._startIndex != 0 || this._startIndex != -1)
    {
        this._startIndex = this._startIndex - this._pageSize;
        this._startIndex = this._startIndex < 0 ? 0 : this._startIndex;
        this._currentPageSize = this._currentPageSize + this._pageSize;
        this.dataSource.setPageSize(this._currentPageSize);
        return this.fetch({startIndex: this._startIndex});
    }
    return oj.Object.__getPromise(function(resolve, reject) {
        reject();
    });
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.PagingDataGridDataSource.prototype.setPageSize = function(n) {
    this._pageSize = n;
    this._currentPageSize = this._startIndex + n;
    this.dataSource.setPageSize(this._currentPageSize);
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.PagingControlDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.startIndex = function() {
    return this._startIndex;
};

/**** start delegated functions ****/


/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown. In the case of paging returns the total number of rows/colums on the page.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCount = function(axis)
{
    return this.dataSource.getCount(axis);
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "actual" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "actual".
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCountPrecision = function(axis)
{
    return this.dataSource.getCountPrecision(axis);
};

/**
 * Fetch a range of headers from the data source.
 * @param {Object} headerRange information about the header range, it must contain the following properties:
 *        axis, start, count.
 * @param {string} headerRange.axis the axis of the header that are fetched.  Valid values are "row" and "column".
 * @param {number} headerRange.start the start index of the range in which the header data are fetched.
 * @param {number} headerRange.count the size of the range in which the header data are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch headers operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(HeaderSet)} callbacks.success the callback to invoke when fetch headers completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.PagingDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var headerSet;
    if (this._initialized == null)
    {
        headerSet = new oj.ArrayHeaderSet(0, 0, headerRange.axis, null);
        if (callbacks != null && callbacks['success'])
        {
            callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
        }
    }
    else
    {
        this.dataSource.fetchHeaders(headerRange, callbacks, callbackObjects);
    }
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.PagingDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var cellSet;
    if (this._initialized == null)
    {
        cellSet = new oj.ArrayCellSet(0, 0, 0, 0, null);
        if (callbacks != null && callbacks['success'])
        {
            callbacks['success'].call(callbackObjects['success'], cellSet, cellRanges);
        }
    }
    else
    {
        this.dataSource.fetchCells(cellRanges, callbacks, callbackObjects);
    }
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object.<Object, Object>} an object containing the keys for each axis
 * @export
 */
oj.PagingDataGridDataSource.prototype.keys = function(indexes)
{
    return this.dataSource.keys(indexes);
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object.<number, number>} indexes an object containing the index for each axis
 * @export
 */
oj.PagingDataGridDataSource.prototype.indexes = function(keys)
{
    return this.dataSource.indexes(keys);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.PagingDataGridDataSource.prototype.on = function(eventType, eventHandler)
{
    var dataSource = (/** @type {{on: Function}} */ (this.dataSource));
    dataSource.on(eventType, eventHandler);
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.PagingDataGridDataSource.prototype.off = function(eventType, eventHandler)
{
    var dataSource = (/** @type {{off: Function}} */ (this.dataSource));
    dataSource.off(eventType, eventHandler);
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.PagingDataGridDataSource.prototype.getCapability = function(feature)
{
    return this.dataSource.getCapability(feature);
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.PagingDataGridDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.size = function()
{
    if (this._initialized == null)
    {
        return -1;
    }
    return this.dataSource.size();
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria. 
 * @param {string} criteria.axis The axis in which the sort is performed, valid values are "row", "column"
 * @param {Object} criteria.key The key that identifies which header to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {Object} callbacks the callbacks to be invoke upon completion of the sort operation.  The callback
 *        properties are "success" and "error".
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.PagingDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    this.dataSource.sort(criteria, callbacks, callbackObjects);
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.PagingDataGridDataSource
 * @instance
 */
oj.PagingDataGridDataSource.prototype.totalSize = function()
{
    if (this._initialized == null)
    {
        return -1;
    }
    return this.dataSource.totalSize();
};

/**
 * Move a model to a new index in the collection, if atKey is null adds to the end
 * @param {string|number} moveKey the key of the model that should be moved
 * @param {string|number|null} atKey the key of the model that the moved model should be inserted before
 * @export
 */
oj.PagingDataGridDataSource.prototype.move = function(moveKey, atKey)
{
    this.dataSource.move(moveKey, atKey);
};

/**** end delegated functions ****/



/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This implementation of HeaderSet is used by the
 * array DataGridDataSource.   
 * @param {number} start the start index of the header set.
 * @param {number} end the end index of the header set.
 * @param {string} axis the axis of the header, value is either 'row' or 'column'.
 * @param {Object} callback the callback to invoke on to retrieve data and metadata. 
 * @constructor
 * @export
 */
oj.ArrayHeaderSet = function(start, end, axis, callback)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);

    this.m_start = start;
    this.m_end = end;
    this.m_axis = axis;
    this.m_callback = callback;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.ArrayHeaderSet.prototype.getData = function(index)
{
    if (this.m_callback == null)
    {
        return null;
    }

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    return this.m_callback.getHeaderData(this.m_axis, index);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source can optionally return are:
 *  1) sortDirection - the initial sort direction of the header.  Valid values are "ascending" and "descending".
 *  2) key - the key of the row/column header.
 * @param {number} index the index of the header in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.ArrayHeaderSet.prototype.getMetadata = function(index)
{
    if (this.m_callback == null)
    {
        return null;
    }

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    return this.m_callback.getHeaderMetadata(this.m_axis, index);
};

/**
 * Gets the actual count of the result set.
 *
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.ArrayHeaderSet.prototype.getCount = function()
{
    if (this.m_callback == null)
    {
        return 0;
    }

    return Math.max(0, this.m_end - this.m_start);
};

/**
 * Gets the start index of the result set.
 * @return {number} the start index of the result set.
 * @export
 */
oj.ArrayHeaderSet.prototype.getStart = function()
{
    return this.m_start;
};
});
