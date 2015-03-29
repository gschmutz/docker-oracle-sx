define(['ojs/ojcore', 'jquery', 'ojs/ojdatacollection-common', 'ojs/ojmodel'], function(oj, $)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * @export
 * A CellSet represents a collection of cells.  The CellSet is an object returned by the success callback
 * of the fetchCells method on DataGridDataSource.  The CollectionCellSet is an oj collection specific 
 * implementation of methods on CellSet. 
 * @param {number} startRow the start row index of the cell set
 * @param {number} endRow the end row index of the cell set
 * @param {number} startColumn the start column index of the cell set
 * @param {number} endColumn the end column index of the cell set
 * @param {Array|null} columns the set of column keys
 * @constructor
 */
oj.CollectionCellSet = function(startRow, endRow, startColumn, endColumn, columns)
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
    this.m_columns = columns;
};

/**
 * Sets the models used in this cell set.
 * @param {Array} models an array of oj model for the cell set
 * @private
 */
oj.CollectionCellSet.prototype.setModels = function(models)
{
    oj.Assert.assertArray(models);
    // make sure the array size is valid
    if (models != null && models.length === this.getCount("row"))
    {
        this.m_models = models;
    }
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
oj.CollectionCellSet.prototype.getData = function(indexes)
{
    var column, model;

    // indexes are validated in _getModel
    model = this._getModel(indexes);
    if (model == null)
    {
        return null;
    }

    // extract column index
    column = indexes['column'];

    return model.get(this.m_columns[column]);
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
oj.CollectionCellSet.prototype.getMetadata = function(indexes)
{
    var column, model, keys;

    // indexes are validated in _getModel
    model = this._getModel(indexes);
    if (model == null)
    {
        return null;
    }

    // extract column index
    column = indexes['column'];

    keys = {"row": oj.CollectionDataGridUtils._getModelKey(model), "column": this.m_columns[column]};
    return {"keys": keys};
};

/**
 * Gets the Model based on indexes.
 * @private
 */
oj.CollectionCellSet.prototype._getModel = function(indexes)
{
    var row, column;

    // make sure models is populated
    if (this.m_models == null)
    {
        return null;
    }

    oj.Assert.assertObject(indexes);

    // extract row and column index
    row = indexes['row'];
    column = indexes['column'];

    // make sure index are valid
    oj.Assert.assert(row >= this.m_startRow && row <= this.m_endRow && column >= this.m_startColumn && column <= this.m_endColumn); 

    return this.m_models[row - this.m_startRow];
};

/**
 * Gets the actual count of the result set for the specified axis.  Valid values are "row" and "column".
 * @param {string} axis the axis in which to inquire the actual count of the result set.
 * @return {number} the actual count of the result set for the specified axis.  
 * @export
 */
oj.CollectionCellSet.prototype.getCount = function(axis)
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

/**
 * Gets the m_startRow property
 * @export
 */
oj.CollectionCellSet.prototype.getStartRow = function()
{
    return this.m_startRow;
};

/**
 * Gets the m_endRow property
 * @export
 */
oj.CollectionCellSet.prototype.getEndRow = function()
{
    return this.m_endRow;
};

/**
 * Gets the m_startColumn property
 * @export
 */
oj.CollectionCellSet.prototype.getStartColumn = function()
{
    return this.m_startColumn;
};

/**
 * Gets the m_endColumn property
 * @export
 */
oj.CollectionCellSet.prototype.getEndColumn = function()
{
    return this.m_endColumn;
};

/**
 * Gets the m_columns property
 * @export
 */
oj.CollectionCellSet.prototype.getColumns = function()
{
    return this.m_columns;
};


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * This class contains all utility methods used by the data grid colelction model.
 * @constructor
 */
oj.CollectionDataGridUtils = function()
{
};

/**
 * Returns the key of the model. It is the id if one is set otherwise
 * it is the cId
 * @param {Object} model the model to chececk for id and cid
 * @return {String} the id or cid for the model
 */
oj.CollectionDataGridUtils._getModelKey = function(model)
{
    var key;
    key = model.GetId();
    if (key == null)
    {
        key = model.GetCid();
    }
    return key;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * @export
 * A HeaderSet represents a collection of headers.  The HeaderSet is an object returned by the success callback
 * of the fetchHeaders method on DataGridDataSource.  This is an oj collection specific implementation of the HeaderSet.
 * @param {number} start the start index of header set.
 * @param {number} end the end index of the header set.
 * @param {Array} headers the array of headers
 * @param {string=} rowHeader the id of the row header column.  Required for row headers.
 * @constructor
 */
oj.CollectionHeaderSet = function(start, end, headers, rowHeader)
{
    // assert start/end are number
    oj.Assert.assertNumber(start, null);
    oj.Assert.assertNumber(end, null);
    oj.Assert.assertArrayOrNull(headers);

    this.m_start = start;
    this.m_end = end;
    this.m_headers = headers;
    this.m_rowHeader = rowHeader;
};

/**
 * Sets the models used in this header set.
 * @param {Array} models an array of oj model for the header set
 * @private
 */
oj.CollectionHeaderSet.prototype.setModels = function(models)
{
    oj.Assert.assertArray(models);
    // make sure the array size is valid
    if (models != null && models.length === this.getCount())
    {
        this.m_models = models;
    }
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the header in which we want to retrieve the header from.  
 * @return {Object} the data object for the specific index.
 * @export
 */
oj.CollectionHeaderSet.prototype.getData = function(index)
{
    var model;

    // make sure index are valid
    oj.Assert.assert(index <= this.m_end && index >= this.m_start); 

    // row or column header
    if (this.m_rowHeader != null)
    {
        if (this.m_models == null)
        {
            return null;
        }

        model = this.m_models[index - this.m_start];
        return model.get(this.m_rowHeader);
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
oj.CollectionHeaderSet.prototype.getMetadata = function(index)
{
    var data, model;

    // row header case
    if (this.m_rowHeader != null)
    {
        if (this.m_models == null)
        {
            return null;
        }

        model = this.m_models[index - this.m_start];        
        return {'key':oj.CollectionDataGridUtils._getModelKey(model)};
    }    
    else
    {
        data = this.getData(index);
        return {'key': data};
    }    
    
};

/**
 * Gets the actual count of the result set.
 *
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.CollectionHeaderSet.prototype.getCount = function()
{
    return Math.max(0, this.m_end - this.m_start);
};

/**
 * Gets the m_start property
 * @export
 */
oj.CollectionHeaderSet.prototype.getStart = function()
{
    return this.m_start;
};

/**
 * Gets the m_end property
 * @export
 */
oj.CollectionHeaderSet.prototype.getEnd = function()
{
    return this.m_end;
};

/**
 * Gets the m_headers property
 * @export
 */
oj.CollectionHeaderSet.prototype.getHeaders = function()
{
    return this.m_headers;
};

/**
 * Gets the m_rowHeader property
 * @export
 */
oj.CollectionHeaderSet.prototype.getRowHeader = function()
{
    return this.m_rowHeader;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * An OJ Collection based implementation of the DataGridDataSource.
 * @param {Object} collection the oj collection to adapter the DataGridDataSource
 * @param {Object=} options optional settings on this oj collection data source
 * @param {string=} options.rowHeader the key of the attribute designated as the row header
 * @param {Array.<string>=} options.columns explicitly specifies columns to display and in 
 *        what order.  These columns must be a subset of attributes from Model. * @constructor
 * @export
 * @constructor
 * @extends oj.DataGridDataSource
 */
oj.CollectionDataGridDataSource = function(collection, options)
{
    this.collection = collection;
    if (options != null)
    {
        this.rowHeader = options['rowHeader'];
        this.columns = options['columns'];
    }
    this._startIndex = 0;
    this._pageSize = -1;
    oj.CollectionDataGridDataSource.superclass.constructor.call(this);
};

//subclass of DataGridDataSource
oj.Object.createSubclass(oj.CollectionDataGridDataSource, oj.DataGridDataSource, "oj.CollectionDataGridDataSource");

/**
 * Initial the OJ collection based data source.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.Init = function()
{
    // call super
    oj.CollectionDataGridDataSource.superclass.Init.call(this);

    this.pendingHeaderCallback = {};

    if (!this._isRemote())
    {
        // extract column info for local collection
        if (this.columns == null && this.collection.length > 0)
        {
            this.columns = this.collection.first().keys();
            if (this.columns.indexOf(this.rowHeader) != -1)
            {
                this.columns.splice(this.columns.indexOf(this.rowHeader),1);
            }
        }
        else
        {
            //local empty collection case
            this.columns = [];
        }
    }
 
    this._registerEventListeners();
};

/**
 * Register event handlers on the underlying OJ collection.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._registerEventListeners = function()
{
    this.collection.on("add", this._handleModelAdded.bind(this));
    this.collection.on("remove", this._handleModelDeleted.bind(this));
    this.collection.on("change", this._handleModelChanged.bind(this));
    this.collection.on("refresh", this._handleCollectionRefresh.bind(this));
};

/**
 * Whether this collection is associated with a remote rest services
 * @private
 */
oj.CollectionDataGridDataSource.prototype._isRemote = function()
{
    // if this is a url specified in the option
    return (this.collection['url'] != null || this.collection['customURL'] != null);
};

/**
 * Determines if data is locally available.
 * @return {boolean} true if data is locally available, false otherwise.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._isDataAvailable = function()
{
    if (this._isRemote())
    {
        return (this.data != null);
    }
    // for local collection, always return true;
    return true;
};

/**
 * Determines if header data is locally available.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {boolean} true if data is locally available, false otherwise.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._isHeaderAvailable = function(axis)
{
    if (this._isRemote())
    {
        if (axis === "column")
        {
            return (this.columns != null);
        }
        else if (axis === "row")
        {
            // only if row header is specified
            if (this.rowHeader != null)
            {
                return (this.data != null);
            }
        }
    }
    // for local collection, always return true;
    return true;
};

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown. In the case of paging returns the total number of rows/colums on the page.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCount = function(axis)
{
    // not done fetching yet, provide an estimate count
    if (!this._isHeaderAvailable(axis))
    {
        this.precision = "estimate";
        return -1;
    }

    this.precision = "exact";
    if (axis == "row")
    {
        return this.size();
    }
    if (axis == "column")
    {
        return this.columns.length;
    }

    // should not get here
    return 0;
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "actual" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "actual".
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCountPrecision = function(axis)
{
    // if precision has not been determine, invoke getCount
    if (this.precision == null)
    {
        this.getCount(axis);
    }
    return this.precision;
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
oj.CollectionDataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    var axis, callback;

    axis = headerRange.axis;
    if (this._isHeaderAvailable(axis))
    {
        // headers are locally available
        this._handleHeaderFetchSuccess(headerRange, callbacks, callbackObjects);
    }
    else
    {
        // still fetching, just store the callback info
        if (callbacks != null)
        {
            callback = {};
            callback.headerRange = headerRange;
            callback.callbacks = callbacks;
            callback.callbackObjects = callbackObjects;
            this.pendingHeaderCallback[axis] = callback;
        }
    }
};

/**
 * Handle success fetchHeaders request
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
 * @param {Object=} actualRange the count and start returned from the server
 * @param {number} actualRange.start the start index of the data the server returned
 * @param {number} actualRange.count the size of the range the server returned
 */
oj.CollectionDataGridDataSource.prototype._handleHeaderFetchSuccess = function(headerRange, callbacks, callbackObjects, actualRange)
{
    var axis, start, count, end, headerSet;

    axis = headerRange.axis;
    start = headerRange.start;
    count = headerRange.count;	                

    oj.Assert.assert(axis === 'row' || axis === 'column');    
    oj.Assert.assert(count > 0);
	      
    if (axis === "column")
    {  
        // column headers, this.columns should be populated by now
        if (this.columns != null)
        {
            end = Math.min(this.columns.length, start+count);
            headerSet = new oj.CollectionHeaderSet(start, end, this.columns);
        }
        else
        {
            // no row header, return empty result set
            headerSet = new oj.ArrayHeaderSet(start, start, axis, null);
        }
    }
    else if (axis === "row")
    {
        // row headers, return non-empty header set if row header is specified
        if (this.rowHeader != null)
        {
            //need the actual rows that the server returned to create the header set
            if (actualRange != null)
            {
                count = actualRange.count;	                
            }
            end = Math.min(this.size(), start+count);
            if (this._pageSize > 0)
            {
                end = Math.min(end, this.totalSize() - this._startIndex);
            }

            headerSet = new oj.CollectionHeaderSet(start, end, this.columns, this.rowHeader);     
            // resolve any promises before invoking callbacks
            this._resolveModels(start, end, headerSet, headerRange, callbacks, callbackObjects);

            // resolveModels will invoke callbacks
            return;
        }
        else
        {
            // no row header, return empty result set
            headerSet = new oj.ArrayHeaderSet(start, start, axis, null);
        }
    }

    // invoke callback
    if (callbacks != null && callbacks['success'])
    {
        callbacks['success'].call(callbackObjects['success'], headerSet, headerRange);
    }
};

/**
 * Helper method to extract range information from cellRanges
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @return {Object} an object containing rowStart, rowCount, colStart, colCount
 * @private
 */
oj.CollectionDataGridDataSource.prototype._getRanges = function(cellRanges)
{
    var i, cellRange, rowStart, rowCount, colStart, colCount;

    // extract the start and end row/column info from cellRanges (there should only be two, one for each axis)
    for (i=0; i<cellRanges.length; i+=1)
    {
        cellRange = cellRanges[i];   
        oj.Assert.assert(cellRange['axis'] === 'row' || cellRange['axis'] === 'column');
        oj.Assert.assert(cellRange['count'] > 0);
        if (cellRange['axis'] === "row")
        {
            rowStart = cellRange['start'];
            rowCount = cellRange['count'];
        }
        else if (cellRange['axis'] === "column")
        {
            colStart = cellRange['start'];
            colCount = cellRange['count'];
        }
    }			

    // return object containing the ranges
    return {'rowStart': rowStart, 'rowCount': rowCount, 'colStart': colStart, 'colCount': colCount};
};

/**
 * Handle success fetchCells request
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
 * @param {Object=} actualRange the count and start returned from the server
 * @param {number} actualRange.start the start index of the data the server returned
 * @param {number} actualRange.count the size of the range the server returned        
 * @private
 */
oj.CollectionDataGridDataSource.prototype._handleCellFetchSuccess = function(cellRanges, callbacks, callbackObjects, actualRange)
{
    var ranges, rowStart, rowEnd, colStart, colEnd, cellSet;

    // extract the start and end row/column info from cellRanges (there should only be two, one for each axis)
    ranges = this._getRanges(cellRanges);
    rowStart = ranges['rowStart'];
    //use the actual rows returned by the server
    if (actualRange != null)
    {
        rowEnd = Math.min(this.size(), rowStart + actualRange['count']);
    }
    else
    {
        rowEnd = Math.min(this.size(), rowStart + ranges['rowCount']);        
    }
    colStart = ranges['colStart'];
    colEnd = Math.min(this.columns.length, colStart + ranges['colCount']);       

    if (this._pageSize > 0)
    {
        rowEnd = Math.min(rowEnd, this.totalSize() - this._startIndex);    
    }

    // resolves models at row range
    cellSet = new oj.CollectionCellSet(rowStart, rowEnd, colStart, colEnd, this.columns);
    this._resolveModels(rowStart, rowEnd, cellSet, cellRanges, callbacks, callbackObjects);
};

/**
 * Resolves all the promises from Collection before invoking callbacks
 * @param {number} rowStart the start row index in the cell set
 * @param {number} rowEnd the end row index in the cell set
 * @param {Object} set the result HeaderSet or CellSet that is return to callbacks when models are resolved
 * @param {Array.<Object>|Object} ranges Information about the header/cell range.  
 * @param {function(Object)} callbacks.success the callback to invoke when fetch headers/cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch headers/cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._resolveModels = function(rowStart, rowEnd, set, ranges, callbacks, callbackObjects)
{
    var promises, i;

    promises = [];
    for (i = rowStart; i < rowEnd; i++) 
    {
        promises.push(this.collection.at(i+this._startIndex, {'deferred':true}));
    }
    
    // resolves all promises
    Promise.all(promises).then(function(models) 
    {
        // all promises resolved, invoke callback with cell/header set
        set.setModels(models);
        callbacks['success'].call(callbackObjects['success'], set, ranges);
    });
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
oj.CollectionDataGridDataSource.prototype.fetchCells = function(cellRanges, callbacks, callbackObjects)
{
    var rowEnd, colEnd;
    rowEnd = 0;
    colEnd = 0;

    // checks if data is locally available
    if (this._isDataAvailable())
    {
        this._handleCellFetchSuccess(cellRanges, callbacks, callbackObjects);
    }
    else
    {
        // still fetching, just store the callback info
        if (callbacks != null)
        {
            this.pendingCellCallback = {};
            this.pendingCellCallback.cellRanges = cellRanges;
            this.pendingCellCallback.callbacks = callbacks;
            this.pendingCellCallback.callbackObjects = callbackObjects;
        }
        
        // kick start a setRangeLocal call on the collection
        this._fetchCells(cellRanges);
    }
};

/**
 * Processing pending header callbacks.
 * @param {string} axis the axis to check for pending header callbacks.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._processPendingHeaderCallbacks = function(axis)
{
    var pendingCallback, headerRange, callbacks, callbackObjects, actualRange;

    // check if there's callback remaining for the axis
    pendingCallback = this.pendingHeaderCallback[axis];
    if (pendingCallback != null)
    {
        // todo: check whether pending header range matches result
        headerRange = pendingCallback.headerRange;
        callbacks = pendingCallback.callbacks;
        callbackObjects = pendingCallback.callbackObjects;
        if (axis === "row")
        {
            actualRange = pendingCallback.actualRange;
        }
        this._handleHeaderFetchSuccess(headerRange, callbacks, callbackObjects, actualRange);
            
        // clear any pending callback
        this.pendingHeaderCallback[axis] = null;
    } 
};

/**
 * Processing pending cell callbacks.
 * @private
 */
oj.CollectionDataGridDataSource.prototype._processPendingCellCallbacks = function()
{
    var cellRanges, callbacks, callbackObjects, actualRange;

    cellRanges = this.pendingCellCallback.cellRanges;
    callbacks = this.pendingCellCallback.callbacks;
    callbackObjects = this.pendingCellCallback.callbackObjects;
    actualRange = this.pendingCellCallback.actualRange;
    // handles success cell fetch
    this._handleCellFetchSuccess(cellRanges, callbacks, callbackObjects, actualRange);
};

/**
 * Internal method to handle fetching of cells for virtualized collection.
 * @param {Array.<Object>} cellRanges Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRanges.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRanges.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRanges.count the size of the range for this axis in which the cells are fetched. 
 * @private
 */
oj.CollectionDataGridDataSource.prototype._fetchCells = function(cellRanges)
{
    var ranges, rowStart, rowCount;

    ranges = this._getRanges(cellRanges);
    rowStart = ranges['rowStart'];
    if (this._pageSize > 0)
    {
        rowStart += this._startIndex;
    }
    rowCount = ranges['rowCount'];

    // set the range local for the requested range
    this.collection.setRangeLocal(rowStart, rowCount).then(function (actual)
    {
        var first = this.collection.at(rowStart, {'deferred':true});
        
        this._setActualCallbackRanges(actual.start, actual.count);
        
        // check if we need to poach columns from row
        if (first != null && this.columns === undefined)
        {
            first.then(function(model)
            {
                this._setupColumns(model);
                // now we can complete the fetch
                this._fetchCellsComplete();
            }.bind(this));

            // process must be done after columns are discovered
            return;
        }
        else
        {
            this._fetchCellsComplete();
        }       
    }.bind(this));
};

/**
 * Finish fetch cells operation
 * @private
 */
oj.CollectionDataGridDataSource.prototype._fetchCellsComplete = function()
{
    // check outstanding header calls
    if (this.pendingHeaderCallback != null)
    {
        this._processPendingHeaderCallbacks('column');    
        this._processPendingHeaderCallbacks('row');
    }        

    // finally process outstanding cell calls
    if (this.pendingCellCallback != null)
    {          
        this._processPendingCellCallbacks();
    }        
		
    //communicates with paging control to indicate fetch end
    if (this._pageSize > 0)
    {
        oj.DataGridDataSource.superclass.handleEvent.call(this, 'sync', true);    
    }
};

/**
 * Takes the actual result start and count from the server and adds it to the pending callbcak objects
 * as the attribute actualRange
 * @param {number} start the start index from the server
 * @param {number} count the count of records from the server
 * @private
 */
oj.CollectionDataGridDataSource.prototype._setActualCallbackRanges = function(start, count)
{
    var actualRange = {'start':start, 'count':count};
    
    if (this.pendingHeaderCallback['row'] != null)
    {
        this.pendingHeaderCallback['row'].actualRange = actualRange; 
    }
    
    if (this.pendingCellCallback != null)
    {
        this.pendingCellCallback.actualRange = actualRange;
    }
};

oj.CollectionDataGridDataSource.prototype._setupColumns = function(model) 
{
    this.columns = model.keys();
    if (this.columns.indexOf(this.rowHeader) != -1)
    {
        this.columns.splice(this.columns.indexOf(this.rowHeader),1);
    }
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object} a Promise object which upon resolution will pass in an object containing the keys for each axis
 * @export
 */
oj.CollectionDataGridDataSource.prototype.keys = function(indexes)
{
    var rowIndex, columnIndex, rowKey, columnKey, atPromise, self;
    rowIndex = indexes['row'] + this._startIndex;
    columnIndex = indexes['column'];
    self = this;

    return oj.Object.__getPromise(function(resolve, reject) {
        atPromise = self.collection.at(rowIndex, {deferred: true});
        //.at() will return null if index known to be OOB
        if (atPromise != null)
        {
            atPromise.then(function(rowModel) {
                rowKey = oj.CollectionDataGridUtils._getModelKey(rowModel);
                if (self.columns == null)
                {
                    self._setupColumns(rowModel);
                }
                columnKey = self.columns[columnIndex];
                resolve({"row": rowKey == null ? null : rowKey, "column": columnKey == null ? null : columnKey});
            }.bind(self));
        }
        else
        {
            resolve({"row": null , "column": null});
        }
    });
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object} a Promise object which upon resolution will pass in an object containing the indexes for each axis
 * @export
 */
oj.CollectionDataGridDataSource.prototype.indexes = function(keys)
{
    var rowKey, columnKey, columnIndex, self;
    rowKey = keys['row']; 
    columnKey = keys['column'];
    self = this;
    
    return oj.Object.__getPromise(function(resolve, reject) 
    {
        self.collection.indexOf(rowKey, {deferred:true}).then(function(rowIndex)
        {
            if (rowIndex != -1)
            {
                rowIndex -= this._startIndex;
            }
            if (self.columns == null)
            {
                self.collection.first(1, {'deferred':true}).then(function(model)
                {
                    self._setupColumns(model);
                    columnIndex = self.columns.indexOf(columnKey);            
                    resolve({"row": rowIndex, "column": columnIndex});                    
                }.bind(self));
            }
            else
            {
                columnIndex = self.columns.indexOf(columnKey);
                resolve({"row": rowIndex, "column": columnIndex});
            }            
        }.bind(self));
    });
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For sort, the valid return values are: "full", "none".  Returns null if the
 *         feature is not recognized.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'sort')
    {
        // OJ collection based data source supports column sorting only
        return 'column';
    }
    else if (feature === 'move')
    {
        // OJ collection based data source supports row moving only
        return 'row';        
    }
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
oj.CollectionDataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    var comparator, direction = criteria['direction'], key = criteria['key'], axis = criteria['axis'];

    // make sure callbackObjects is not null
    if (callbackObjects == null)
    {
        callbackObjects = {};
    }

    if (axis === "column") {
        //check to see if collection is virtual, if so set the comparator and direction
        if (this.collection.fetchSize > -1 && this.collection.hasMore)
        {
            this.collection['comparator'] = key;
            if (direction === 'ascending') 
            {
                this.collection['sortDirection'] = 1;
            }
            else
            {
                this.collection['sortDirection'] = -1;                
            }
        }
        else
        {
            //if the collection is local supply a comparator to allow date sorting
            if (direction === 'ascending') {
                comparator = function(a, b) {
                    var as, bs;
                    //Get the values from the model objects
                    a = a.get(key);
                    b = b.get(key);
                    //Strings of numbers return false, so we can compare strings of numebers with numbers                
                    as = isNaN(a);
                    bs = isNaN(b);
                    //If they dates, turn them into sortable strings         
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
            if (direction === 'descending') {
                comparator = function(a, b) {
                    var as, bs;
                    a = a.get(key);
                    b = b.get(key);
                    as = isNaN(a);
                    bs = isNaN(b); 
                    if (a instanceof Date) {
                        a = a.toISOString();
                    }
                    if (b instanceof Date) {
                        b = b.toISOString();
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
            this.collection['comparator'] = comparator;                
        }

        this.collection.sort();

        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(callbackObjects['success']);
        }
    }
    else
    { 
        if (callbacks != null && callbacks['error'] != null)
        {
            callbacks['error'].call(callbackObjects['error'], "Axis value not supported");
        }
    }
};

/**
 * Move a model to a new index in the collection, if atKey is null adds to the end
 * @param {Object} moveKey the key of the model that should be moved
 * @param {Object} atKey the key of the model that the moved model should be inserted before or after
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after" 
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */
oj.CollectionDataGridDataSource.prototype.move = function(moveKey, atKey, position, callbacks, callbackObjects)
{
    var indexPromise;
    this.collection.get(moveKey, {deferred: true}).then(
        function(moveModel) {
            if (atKey == null)
            {
                this.collection.remove(moveModel);
                this.collection.add(moveModel);
            }
            else
            {
                if (moveKey === atKey)
                {
                    indexPromise = this.collection.indexOf(atKey, {deferred: true});
                    this.collection.remove(moveModel);
                }
                else
                {
                    this.collection.remove(moveModel);
                    indexPromise = this.collection.indexOf(atKey, {deferred: true});
                }

                indexPromise.then(function(newIndex) {
                    this.collection.add(moveModel, {at: newIndex, force:true});
                }.bind(this));
            }
        }.bind(this));
};

//////////////////////////////////// Event listeners /////////////////////////////////////
/**
 * Returns an Object for an event 
 * @param {string} operation the operation done on the model
 * @param {Object|null} rowKey the key for the row axis
 * @param {Object|null} columnKey the key for the column axis
 * @param {number=} rowIndex the index for the row axis
 * @param {number=} columnIndex the index for the column axis
 * @return {Object} an object containing the the source, operation, and keys of the event
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._getModelEvent = function(operation, rowKey, columnKey, rowIndex, columnIndex)
{
    var event = {};
    event['source'] = this;
    event['operation'] = operation;
    event['keys'] = {'row': rowKey, 'column': columnKey};
    event['indexes'] = {'row': rowIndex, 'column': columnIndex};
    return event;
};

/**
 * Handle a model add to the collection
 * @param {Object} model The model being added to the collection 
 * @param {Object} collection The coleection the model was added to 
 * @param {Object} args additional params passed by the event
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelAdded = function(model, collection, args)
{
    var event, rowKey;
    this.collection.indexOf(model, {deferred: true}).then(function(index)
    {
        var rowIndex, atPromise;
        rowKey = oj.CollectionDataGridUtils._getModelKey(model);
        rowIndex = index - this._startIndex > 0 ? index - this._startIndex : 0;
        event = this._getModelEvent('insert', rowKey, null, rowIndex, -1);
        this.handleEvent("change", event);

        //remove the model at the end of the page
        if (index < this._pageSize + this._startIndex)
        {
            //at can return null if the index is OOB right now
            atPromise = this.collection.at(this._startIndex + this._pageSize, {deferred: true});
            if (atPromise != null)
            {
                atPromise.then(function(overfillModel) {
                    if (model != null)
                    {
                        this._handleModelDeleted(overfillModel, collection, {'index':this._startIndex + this._pageSize - 1});
                    }
                }.bind(this));
            }
        }
    }.bind(this));    
};

/**
 * Handle a model delete from the collection
 * @param {Object} model The model being deleted from the collection 
 * @param {Object} collection The coleection the model was added to 
 * @param {Object} args additional params passed by the event
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelDeleted = function(model, collection, args)
{
    var event, rowKey, rowIndex, atPromise;
    rowIndex = args['index'];
    if (this._pageSize > 0 && rowIndex < this._startIndex)
    {
        if (rowIndex < this._startIndex)
        {
            rowIndex = 0;
        }

        atPromise = this.collection.at(this._startIndex - 1, {deferred: true});
        if (atPromise != null)
        {
            atPromise.then(function(model) {
                if (model != null)
                {
                    rowKey = oj.CollectionDataGridUtils._getModelKey(model);
                    event = this._getModelEvent('delete', rowKey, null, rowIndex, -1);
                    this.handleEvent("change", event);
                }
            }.bind(this));
        }
    }
    else
    {
        if (this._pageSize > 0)
        {
            rowIndex -= this._startIndex;
        }
        rowKey = oj.CollectionDataGridUtils._getModelKey(model);        
        event = this._getModelEvent('delete', rowKey, null, rowIndex, -1);
        this.handleEvent("change", event);    
    }
       
};

/**
 * Handle a model change in the collection
 * @param {Object} model The model being changed in the collection  
 * @param {Object} collection The coleection the model was added to 
 * @param {Object} args additional params passed by the event
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleModelChanged = function(model, collection, args)
{
    var event, rowKey;
	//pass the indexes into the grid on model change
    this.collection.indexOf(model, {deferred: true}).then(function(index) 
    {
        rowKey = oj.CollectionDataGridUtils._getModelKey(model);
        index = index - this._startIndex > 0 ? index - this._startIndex : -1;
        event = this._getModelEvent('update', rowKey, null, index, -1);         
        this.handleEvent("change", event);    
    }.bind(this)); 
};

/**
 * Handle a colelction reset, by passing refresh to the data grid
 * @protected
 */
oj.CollectionDataGridDataSource.prototype._handleCollectionRefresh = function()
{
    var event = this._getModelEvent('refresh', null, null);
    this.handleEvent("change", event);
};

/**
 * Set or change the number of models in a page
 * @export
 * @param {number} n page size
 */
oj.CollectionDataGridDataSource.prototype.setPageSize = function(n) {
    this._pageSize = n; 
};

/**
 * @export
 * Get the length of the collection. -1 if an initial fetch has not been
 * done yet. Default to the size of the collection. If pageSize is set then
 * limit it.
 * @returns {number} length of the collection
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.size = function() 
{
    if (this._pageSize != null && this._pageSize > 0)
    {
        if (this.collection.size() > this._pageSize)
        {
            return this._pageSize;
        }
    }
    return this.collection.size();
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.totalSize = function() 
{ 
    if (this.collection != null)
    {
        return this.collection['totalResults'];
    }
    return -1;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.hasMore = function() 
{    
    if (this.collection != null)
    {
        return this.collection.hasMore;
    }
    return false;
};

/**
 * Perform a fetch call from the options specified
 * @expose
 * @memberof! oj.CollectionDataGridDataSource
 * @instance
 */
oj.CollectionDataGridDataSource.prototype.fetch = function(options) 
{    
    this._startIndex = options != null ? (options['startIndex'] != null ? options['startIndex'] : 0) : 0;    
    this.handleEvent("change", {'operation': 'sync', 'pageSize': this._pageSize});    
};

//////////////////////////////////// Property Getters  /////////////////////////////////////    
/**
 * Gets the collection property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getCollection = function()
{
    return this.collection;
};    

/**
 * Gets the columns property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getColumns = function()
{
    return this.columns;
};    

/**
 * Gets the rowHeader property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getRowHeader = function()
{
    return this.rowHeader;
};

/**
 * Gets the _startIndex property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getStartIndex = function()
{
    return this._startIndex;
};

/**
 * Gets the _pageSize property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getPageSize = function()
{
    return this._pageSize;
};

/**
 * Gets the data property
 * @export
 */
oj.CollectionDataGridDataSource.prototype.getData = function()
{
    return this.data;
};
});
