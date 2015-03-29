define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'promise', 'ojs/ojmenu', 'ojs/ojdatacollection-common', 'ojs/ojpagingcontrol'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/**
 * @export
 * @class oj.FlattenedTreeRowSet
 * @classdesc RowSet wrapper for FlattenedTreeDataSource
 * 
 * @param {oj.FlattenedTreeDataSource} data oj.FlattenedTreeDataSource
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 */
oj.FlattenedTreeRowSet = function(data, options) 
{
  // Initialize
  oj.FlattenedTreeRowSet._init(this, data, options);
};

// Subclass from oj.FlattenedTreeDataSource
oj.Object.createSubclass(oj.FlattenedTreeRowSet, oj.RowSet, "oj.FlattenedTreeRowSet");

/**
 * Initializes the data source.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.Init = function()
{
    oj.FlattenedTreeRowSet.superclass.Init.call(this);
};

oj.FlattenedTreeRowSet._init = function(rowSet, data, options) 
{
  rowSet._eventHandlers = [];
  rowSet._startIndex = 0;
  
  rowSet.Init();
  rowSet._data = data;
  
  // override the fetchSize with -1 if not already specified.
  if (rowSet._data.getOption('fetchSize') == null)
  {
    rowSet._data.getFetchSize = function()
    {
      return -1;
    };
  }
  // override the insert/removeRows function
  rowSet._data.insertRows = function(insertAtIndex, insertAtKey, nodeSet)
  {
    var i, row, rowIdx;
    for (i = 0; i < nodeSet.getCount(); i++)
    {
      rowIdx = insertAtIndex + i;
      row = new oj.ArrayRow(nodeSet.getData(i), {'context': nodeSet.getMetadata(i)});
      row.index = rowIdx;
      row._updateContext = (function(index){
        return function() {
          this['context'] = nodeSet.getMetadata(index);
        };
      })(i);
      rowSet._rows.splice(rowIdx, 0, row);
      oj.FlattenedTreeRowSet.superclass._handleEvent.call(rowSet, oj.RowSet.EventType['ADD'], row);
    }
    oj.FlattenedTreeRowSet._realignRowIndices(0, rowSet._rows);
    if (rowSet._pageSize)
    {
      setTimeout(function(){
        rowSet.fetch({'pageSize': rowSet._pageSize});
      }, 0);
    }
  };
  rowSet._data.removeRows = function(rowKeys)
  {
    var i, row, rowIdx;
    for (i = 0; i < rowKeys.length; i++)
    {
      // indices shift down as we remove
      rowIdx = rowKeys[i].index - i;
      // just create a dummy row for deletion
      row = new oj.ArrayRow({}, null);
      row.index = rowIdx;
      rowSet._rows.splice(rowIdx, 1);
      oj.FlattenedTreeRowSet.superclass._handleEvent.call(rowSet, oj.RowSet.EventType['REMOVE'], row);
    }
    oj.FlattenedTreeRowSet._realignRowIndices(0, rowSet._rows);
    if (rowSet._pageSize)
    {
      setTimeout(function(){
        rowSet.fetch({'pageSize': rowSet._pageSize});
      }, 0);
    }
  };
};

/**
 * Add an instance of this RowSet's Row(s) to the end of the RowSet.
 * @param {oj.Row} row Row object
 * @param {Object=} options at: splice the new Row into the RowSet at the value given (at:index) <p>
 *                          deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 * 
 * @returns {Object} if deferred or virtual, return a promise when the set has completed
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.add = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return the Row object found at the given index of the RowSet, or a promise object that will return the Row to a function
 * in the done() call.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 *                  deferred: if true, return a deferred/promise object as described below.  If not specified, the return value will
 *                   be determined by whether or not the RowSet is virtual
 * @return {Object} Row object located at index. If index is out of range, returns null.  If this is a paging/virtual RowSet or
 *                  if deferred is specified and true, at will return a jQuery promise object which will call its done function,
 *                  passing the value at(index) 
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.at = function(index, options)
{
  return this._rows[index];
};

/**
 * Return a copy of the RowSet
 * @return {Object} copy of the RowSet
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.clone = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Collapse the specified row.
 * @param {Object} rowKey the key of the row to collapse
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.collapse = function(rowKey)
{
  this._data.collapse(rowKey);
};

/**
 * Expand the specified row.
 * @param {Object} rowKey the key of the row to expand
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.expand = function(rowKey)
{
  this._data.expand(rowKey);
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.fetch = function(options)
{
  options = options || {};
  if (options['startIndex'] != null)
  {
    this._startIndex = options['startIndex'];
  }
  // if pageSize is not specified then fetch everything
  var rangeCount = Number.MAX_VALUE;
  
  if (options['pageSize'] != null)
  {
    rangeCount = options['pageSize'];
    this._pageSize = rangeCount;
  }
  
  var startIndex = this._startIndex;
  if (this._rows != null && options['pageSize'] != null)
  {
    var endIndex = this._rows.length - 1;
    
    if (this._startIndex + options['pageSize'] - 1 <= endIndex)
    {
      // we already have the nodes, don't need to do a fetch
      // just update the metadata in case it changed
      var i;
      for (i = 0; i < this._rows.length; i++)
      {
        if (this._rows[i]._updateContext)
        {
          this._rows[i]._updateContext();
        }
      }
      options['refresh'] = true;
      this._endFetch(options, null);
      return;
    }
    else if (this._startIndex <= endIndex)
    {
      startIndex = endIndex + 1;
    }
  }
  
  var rangeOption = {'start': startIndex, 'count':  rangeCount};
  var self = this;
  this._data.fetchRows(rangeOption,
    {
      "success": function(nodeSet)
      {
        self._handleFetchRowsSuccess(nodeSet);
        options['refresh'] = true;
        self._endFetch(options, null);
      }.bind(this),
      "error": function(status)
      {
       self._endFetch(options, status);
      }.bind(this)
    }
  ); 
};

/**
 * Return the first Row object from the RowSet whose Row id value is the given id
 * Note this method will not function as expected if the id is not set
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the Row when done
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.get = function(id, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.hasMore = function()
{
  oj.Assert.failedInAbstractFunction();
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row Row object to locate 
 * @param {Object=} options deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 
 * @return {number} The index of the given Row object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.indexOf = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Determine if the RowSet has any Rows
 * 
 * @returns {boolean} true if RowSet is empty
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.isEmpty = function()
{
  oj.Assert.failedInAbstractFunction();
  return true;
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.on = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._data.on(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeRowSet.superclass.on.call(this, eventType, eventHandler);
  }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.off = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._data.off(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeRowSet.superclass.off.call(this, eventType, eventHandler);
  }
};

/**
 * Remove a Row from the RowSet, if found.
 * @param {oj.Row} row Row object
 * @param {Object=} options silent: if set, do not fire a remove event
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.remove = function(row, options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Remove and replace the RowSet's entire list of Rows with a new set of Rows, if provided. Otherwise, empty the RowSet.
 * @param {Object=} data Array of Row objects with which to replace the RowSet's data. 
 * @param {Object=} options user options, passed to event
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.reset = function(data, options)
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Return the length of the RowSet
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.size = function()
{ 
  if (!this._rows)
    return 0;
  
  if (this._pageSize && this._rows.length > this._startIndex + this._pageSize)
  {
    return this._startIndex + this._pageSize;
  }
  else
  {
    return this._rows.length;
  }
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.sort = function(criteria)
{
  // delegates to the underlying TreeDataSource but intercept the success callback so that we can clear the cache
  var self = this;
  return this._data.getWrappedDataSource().sort(criteria,
    {"success": function(nodeSet)
      {
        self._data.refresh();
        self.fetch({'startIndex': self._startIndex, 'pageSize': self._pageSize});
      }.bind(this),
      "error": function(status)
      {
        //this._handleFetchRowsError(status, {'start': rowStart, 'count': rowCount}, callbacks, callbackObjects);
      }.bind(this)});
};

/**
 * Return current start index.
 * @returns {number} start index
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.startIndex = function() {
  return 0;
};

/**
 * Return the total length of the RowSet
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeRowSet
 * @instance
 */
oj.FlattenedTreeRowSet.prototype.totalSize = function()
{
  return -1;
};

oj.FlattenedTreeRowSet.prototype._handleFetchRowsSuccess = function(nodeSet)
{
  this._currentNodeSet = nodeSet;
  if (!this._rows)
  {
    this._rows = [];
  }
  oj.FlattenedTreeRowSet._getRowArray(this._currentNodeSet, this, this._rows);
};

/**
 * Indicate ending fetch
 * @private
 */
oj.FlattenedTreeRowSet.prototype._endFetch = function(options, e)
{
  options = options || {}; 
  var success = options['success'];
  var error = options['error'];
  
  if (e != null)
  {
    oj.FlattenedTreeRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ERROR'], e);
    
    if (error)
    { 
      error.call(this, options, e);
    }
  }
  else
  {
    oj.FlattenedTreeRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['SYNC'], options);
    
    if (success)
    {
      success.call(this, options);
    }
  }
};

oj.FlattenedTreeRowSet._getRowArray = function(nodeSet, rowSet, rows)
{
  var endIndex = nodeSet.getCount() - 1;
  var startIndex = nodeSet.getStart();

  var i;
  for (i = startIndex; i <= endIndex; i++)
  {
    var row = new oj.ArrayRow(nodeSet.getData(i), {'context': nodeSet.getMetadata(i)});
    row._updateContext = (function(index){
        return function() {
          this['context'] = nodeSet.getMetadata(index);
        };
      })(i);
    row['index'] = i;
    rows[i] = row;
    row['rowSet'] = rowSet;
  }
};

// Realign all the indices of the rows (after sort for example)
oj.FlattenedTreeRowSet._realignRowIndices = function(start, rows)
{
  var row;
  for (var i = start; i < rows.length; i++)
  {
    row = rows[i];
    if (row)
    {
      row['index'] = i;
    }
  }
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.TableDataSource
 * @classdesc Abstract object representing data used by table component
 * @param {Object} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.TableDataSource = function(data, options)
{
  if (this.constructor == oj.TableDataSource)
  {
    // This should only be called by the constructors of the subclasses. If you need
    // to initialize a new TableDataSource then call the constructors of the subclasses such
    // as oj.ArrayTableDataSource or oj.CollectionTableDataSource.
    var errSummary = oj.TableDataSource._LOGGER_MSG._ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY;
    var errDetail = oj.TableDataSource._LOGGER_MSG._ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL;
    throw new Error(errSummary + '\n' + errDetail);
  }
  // Initialize
  this.data = data;
  this.options = options;
  this.isFetching = false;
  this._startIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.TableDataSource, oj.DataSource, "oj.TableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.Init = function()
{
  oj.TableDataSource.superclass.Init.call(this);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.at = function(index)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully. The callback is called passing the TableDataSource object and the fetch options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the TableDataSource object and the fetch options argument.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.fetch = function(options)
{
  oj.Assert.failedInAbstractFunction();
  return oj.Object.__getPromise(function(resolve, reject) {
          reject();
        });
};

/**
 * Return the first oj.Row object from the RowSet whose Row id value is the given id
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.get = function(id)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.getCapability = function(feature)
{
    return null;
};

/**
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.hasMore = function()
{
  oj.Assert.failedInAbstractFunction();
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row oj.Row object to locate 
 * @return {number} The index of the given Row object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.indexOf = function(row)
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.size = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Performs a sort on the data source. Null criteria clears the existing sort.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.sort = function(criteria)
{
  oj.Assert.failedInAbstractFunction();
  return oj.Object.__getPromise(function(resolve, reject) {
        reject();
      });
};

/**
 * Get or set the current start index.
 * @param {number} startIndex start index
 * @returns {number} start index
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.startIndex = function(startIndex) 
{
  if (startIndex != null)
  {
    this._startIndex = startIndex;
  }
  return this._startIndex;
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.TableDataSource
 * @instance
 */
oj.TableDataSource.prototype.totalSize = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.TableDataSource.EventType =
  {
    /** Triggered when a Row is added to a TableDataSource */
    'ADD': "add",
    /** Triggered when a Row is removed from a TableDataSource */
    'REMOVE': "remove",
    /** Triggered when a TableDataSource is reset */
    'RESET': "reset",
    /** Triggered when a TableDataSource is refreshed */
    'REFRESH': "refresh",
    /** Triggered when a TableDataSource is sorted */
    'SORT': "sort",
    /** Triggered when a Row's attributes are changed */
    'CHANGE': "change",
    /** Triggered when a TableDataSource has sent a fetch request */
    'REQUEST': "request",
    /** Triggered when a TableDataSource has been updated by a fetch */
    'SYNC': "sync",
    /** Triggered when an error occurred on the TableDataSource */
    'ERROR': "error"
  };

/**
 * @const
 * @export
 */
oj.TableDataSource._LOGGER_MSG =
  {
    '_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY': 'oj.TableDataSource constructor called.',
    '_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL':  'Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.',
    '_ERR_DATA_INVALID_TYPE_SUMMARY':             'Invalid data type.',
    '_ERR_DATA_INVALID_TYPE_DETAIL':              'Please specify the appropriate data type.'
  };
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.PagingTableDataSource
 * @classdesc Object representing data used by the paging component
 * @param {Object} dataSource
 * @param {Object|null} options Array of options for the PagingControlDataSource
 * @constructor
 */
oj.PagingTableDataSource = function(dataSource, options)
{
  // Initialize
  options = options || {};
  
  if (!(dataSource instanceof oj.TableDataSource))
  {
    // we only support Array, oj.Collection, or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }
  this.dataSource = dataSource;
  this._startIndex = 0;
  this.Init();
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.PagingTableDataSource, oj.PagingDataSource, "oj.PagingTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.Init = function()
{
  oj.PagingTableDataSource.superclass.Init.call(this);
};

/**
 * Retrieves the underlying DataSource.
 * @return {Object} the underlying oj.DataSource.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getWrappedDataSource = function()
{
    return this.dataSource;
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 *                  success: a user callback called when the fetch has completed successfully. The callback is called passing the PagingTableDataSource object and the fetch options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the PagingTableDataSource object and the fetch options argument.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.fetch = function(options)
{
  if (options != null)
  {
    this._startIndex = options['startIndex'];
    if (options['reset']) {
        this._currentStartIndex = undefined;
    }
  }
  var pageSize = options['pageSize'] != null ? options['pageSize'] : this._pageSize;
  options['pageSize'] = pageSize;
  options['startIndex'] = this._startIndex;
  var self = this;
  return oj.Object.__getPromise(function(resolve, reject) {
    options['success'] = function()
    {
      resolve();
      self._fetchType = options['fetchType'];
    };
    options['error'] = function()
    {
      reject();
    }
    self.dataSource.fetch(options);
  });
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.next = function()
{
  if (this.dataSource.totalSize() == -1 || this.dataSource.totalSize() > this._startIndex)
  {
    if (!this._currentStartIndex)
    {
      this._currentStartIndex = this._startIndex + this._pageSize;
    }
    else
    {
      this._currentStartIndex = this._currentStartIndex + this._pageSize;
    }
    this._currentPageSize = this._currentPageSize + this._pageSize;
    var self = this;
    return this.dataSource.fetch({'startIndex': this._currentStartIndex, 'pageSize': this._pageSize, 'fetchType': 'next', 'success' : function()
    {
      self._fetchType = 'next';
    }});
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
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.previous = function()
{
  if (this._startIndex != 0 || this._startIndex != -1)
  {
    this._startIndex = this._startIndex - this._pageSize;
    this._startIndex = this._startIndex < 0 ? 0 : this._startIndex;
    this._currentPageSize = this._currentPageSize - this._pageSize;
    var self = this;
    return this.dataSource.fetch({'startIndex': this._currentStartIndex, 'pageSize': this._pageSize, 'fetchType': 'previous', 'success' : function()
    {
      self._fetchType = 'previous';
    }});
  }
  return oj.Object.__getPromise(function(resolve, reject) {
      reject();
    });
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.setPageSize = function(n) {
  this._pageSize = n;
  this._currentPageSize = this._startIndex + n;
};

/**
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.startIndex = function() {
  return this._startIndex;
};


/**** start delegated functions ****/

/**
 * Return the model object found at the given index of the collection.
 * 
 * @param {number} index Index for which to return the model object. 
 * @return {Object} Model object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.at = function(index)
{
  return this.dataSource.at(index);
};

/**
 * Return the first model object from the collection whose model id value is the given id or cid, or the id or cid from a passed in model
 * @param {Object|string} id ID, cid, or Model (see Model id or cid) for which to return the model object, if found. 
 * @return {Object} First model object in the collection where model.id = id or model.cid = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.get = function(id)
{
  return this.dataSource.get(id);
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.getCapability = function(feature)
{
  return this.dataSource.getCapability(feature);
};

/**
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.hasMore = function()
{
  return this.dataSource.hasMore();
};

/**
 * Return the array index location of the given model object.
 * @param {Object} model Model object to locate 
 * @return {number} The index of the given model object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.indexOf = function(model)
{
  return this.dataSource.indexOf(model);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @return {function(Object)} the event handler function attached to the event 
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.on = function(eventType, eventHandler)
{
  var self = this;
  var dataSource = (/** @type {{on: Function}} */ (this.dataSource));
  
  if (eventType == oj.TableDataSource.EventType['SYNC'])
  {
    var ev = function(event){self._handleSyncEvent(event, eventHandler);}
    dataSource.on(eventType, ev);
    return ev;
  }
  else
  {
    dataSource.on(eventType, eventHandler);
    return eventHandler;
  }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.off = function(eventType, eventHandler)
{
  var dataSource = (/** @type {{off: Function}} */ (this.dataSource));
  return dataSource.off(eventType, eventHandler);
};

/**
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.size = function()
{
  if (this._currentPageSize != null && this._currentPageSize > 0)
  {
    if (this.dataSource.size() > this._currentPageSize)
    {
      return this._currentPageSize;
    }
  }
  return this.dataSource.size();
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.sort = function(criteria)
{
  return this.dataSource.sort(criteria);
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.PagingTableDataSource
 * @instance
 */
oj.PagingTableDataSource.prototype.totalSize = function()
{
  return this.dataSource.totalSize();
};

/**** end delegated functions ****/

oj.PagingTableDataSource.prototype._handleSyncEvent = function(event, eventHandler)
{
  var self = this;
  setTimeout(function()
    {
      if (self._fetchType == 'next' || event['fetchType'] == 'next')
      {
        var dataSource = (/** @type {{handleEvent: Function}} */ (self.dataSource));
        var startIndex = event['startIndex'];
        var pageSize = event['pageSize'];
        self._startIndex = 0;
        self._fetchType = null;
        var i;

        var end = startIndex + pageSize;
        if (end > dataSource.size()) {
            // Don't ask beyond the known end
            end = dataSource.size();
        }
        for (i = startIndex; i < startIndex + pageSize; i++)
        {
          dataSource.handleEvent(oj.RowSet.EventType['ADD'], self.dataSource.at(i));
        }
        eventHandler(event);
      }
      else
      {
        eventHandler(event);
      }
    }, 0);
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.ArrayTableDataSource
 * @classdesc Object representing data used by table component
 * @param {Array|Object|function():Array} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.ArrayTableDataSource = function(data, options)
{
  // Initialize
  this.data = {};   // This was put in to keep closure happy...
  if (!(data instanceof Array) &&
      (typeof (data) != 'function' &&
       typeof (data.subscribe) != 'function'))
  {
    // we only support Array or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }

  oj.ArrayTableDataSource.superclass.constructor.call(this, data, options);

  this._rowSet = new oj.ArrayRowSet(/** @type Array */ (data), this.options);
  this._addRowSetEventListeners();

  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.ArrayTableDataSource, oj.TableDataSource, "oj.ArrayTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.Init = function()
{
  oj.ArrayTableDataSource.superclass.Init.call(this);
};

/**
 * Add an instance of oj.Row to the end of the RowSet.
 * @param {Object} m Row object (or array of rows) to add. These can be already-created instance of the oj.Row object, or sets of attribute/values, which will be wrapped by add().
 * @param {Object=} options silent: if set, do not fire an add event<p>
 *                          at: splice the new Row into the RowSet at the value given (at:index) <p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.add = function(m, options)
{
  this._rowSet.add(m, options);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully. The callback is called passing the ArrayTableDataSource object and the fetch options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the ArrayTableDataSource object and the fetch options argument.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  var self = this;
  var success = options['success'];
  var error = options['error'];
  var context = options['context'] == null? this : options['context'];
  var fetchType = options['fetchType'];
  
  if (fetchType == 'init' && !this._startFetchEnabled)
  {
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve();
      });
  }
  
  if (options['startIndex'] != null)
  {
    oj.ArrayTableDataSource.superclass.startIndex.call(this, options['startIndex']);
  }
  var data = this.data;
  
  return oj.Object.__getPromise(function(resolve, reject) {
    options['success'] = function()
    {
      if (success != null)
      {
        success.call(context, self, options);
      }
      resolve();
    };
    options['error'] = function(options, e)
    {
      if (error != null)
      {
        error.call(context, self, options, e);
      }
      reject();
    }
    if (options['startFetch'] == 'enabled')
    {
      // only do an initial fetch if rowSet is empty
      if (self._rowSet.isEmpty() ||
        (typeof self._rowSet.size() === 'undefined'))
      {
        self._rowSet.fetch(options);
      }
    }
    else
    {
      self._rowSet.fetch(options);
    }
  });
};

/**
 * Return the first oj.Row object from the RowSet whose Row id value is the given id
 * @param {string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * Determines whether this TableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.ArrayTableDataSource.prototype.getCapability = function(feature)
{
    return 'full';
};

/**
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.hasMore = function()
{
  if (this._rowSet != null)
  {
    return this._rowSet.hasMore();
  }
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row oj.Row object to locate 
 * @return {number} The index of the given Row object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.indexOf = function(row)
{
  return this._rowSet.indexOf(row);
};

/**
 * Remove a Row from the RowSet, if found.
 * @param {Object} m oj.Row object or array of Rows to remove. 
 * @param {Object=} options silent: if set, do not fire a remove event 
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.remove = function(m, options)
{
  this._rowSet.remove(m, options);
};

/**
 * Remove and replace the RowSet's entire list of Rows with a new set of Rows, if provided. Otherwise, empty the RowSet.
 * @param {Object=} data Array of Row objects or attribute/value pair objects with which to replace the RowSet's data. 
 * @param {Object=} options user options, passed to event
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.reset = function(data, options)
{
  this._rowSet.reset(data, options);
};

/**
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.size = function()
{
  return this._rowSet.size();
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.sort = function(criteria)
{
  if (criteria == null)
  {
    this._rowSet['comparator'] = null;
    return oj.Object.__getPromise(function(resolve, reject) {
      resolve();
    }); 
  }
  
  var key = criteria['key']; 
  var direction = criteria['direction'];
  var comparator = null;
  
  if (direction == 'ascending')
  {
    comparator = function(row) {
      if ($.isFunction(row.get))
      {
        return row.get(key);
      }
      else
      {
        return row[key]();
      }
    };
  }
  else if (direction == 'descending')
  {
    comparator = function(rowA, rowB) {
      var a, b;
      if ($.isFunction(rowA.get))
      {
        a = rowA.get(key);
        b = rowB.get(key);
      }
      else
      {
        a = rowA[key]();
        b = rowB[key]();
      }
      if (a === b)
      {
        return 0;
      }
      return a > b ? -1 : 1;
    };
  }
  this._rowSet['comparator'] = comparator;
  var self = this;
  
  return oj.Object.__getPromise(function(resolve, reject) {
     self._rowSet.sort();
     resolve();
  });
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.ArrayTableDataSource
 * @instance
 */
oj.ArrayTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**
 * Add event listeners to the RowSet
 * @private
 */
oj.ArrayTableDataSource.prototype._addRowSetEventListeners = function()
{
  var self = this;
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ADD'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ADD'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REMOVE'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REMOVE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REQUEST'], function(event) {
    self.isFetching = true;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REQUEST'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['RESET'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['RESET'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SORT'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SORT'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['CHANGE'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['CHANGE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SYNC'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SYNC'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ERROR'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ERROR'], event);
  });
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/**
 * The ojTable component enhances a HTML table element into one that supports all
 * the features in JET Table.
 * 
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * When existing focus is on a column header.
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
 *       <td>Navigate to next focusable element on page (outside table).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Navigate to previous focusable element on page (outside table).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to the first row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus to previous column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+LeftArrow</kbd></td>
 *       <td>Select and move focus to previous column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus to next column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+RightArrow</kbd></td>
 *       <td>Select and move focus to next column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Space</kbd></td>
 *       <td>Select column.</td>
 *     </tr>
 * </tbody></table>
 * When existing focus is on a row element.
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
 *       <td>Move focus to next focusable element in row.
 *           <br>If focus is on the last focusable element in the row, move focus to first focusable element in next row.
 *           <br>If focus is on the last focusable element in the last row, move focus to next focusable element on the page (outside table).
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous focusable element in row.
 *           <br>If focus is on the first focusable element in the row, move focus to last focusable element in previous row.
 *           <br>If focus is on the first focusable element in the first row, move focus to previous focusable element on the page (outside table).
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to the next row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>Select and move focus to the next row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Move focus to the previous row. If at the first row then move to the column header.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>Select and move focus to the previous row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Do nothing.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last row.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Space</kbd></td>
 *       <td>Select row.</td>
 *     </tr>
 * </tbody></table>
 * 
 * <h3>Support for knockout templates:</h3>
 * When knockout bindings are used, the following additional options are available to use
 * knockout templates to customize JET Table.
 * <ul>
 *   <li>template<p>
 *   The name of the knockout template for the cells in a column.
 *   <li>headerTemplate<p>
 *   The name of the knockout template for the header in a column.
 *   </li>
 *   <li>footerTemplate<p>
 *   The name of the knockout template for the footer in a column.
 *   </li>
 *   <li>rowTemplate<p>
 *   The name of the knockout template for each row to use.
 *   </li>
 * </ul>
 * 
 * @example  <caption>Initialize the table via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]}"&gt;
 *      
 * @example  <caption>Initialize the table with column templates via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}]},
 *      {headerTemplate: 'oracle_link_hdr', template: 'oracle_link'}]}"&gt;
 * &lt;script type="text/html" id="oracle_link_hdr"&gt;
 *    &lt;th style="padding-left: 5px; padding-right: 5px;"&gt;
 *       Oracle Link
 *    &lt;/th&gt;
 * &lt;/script&gt;
 * &lt;script type="text/html" id="oracle_link"&gt;
 *     &lt;td&gt;
 *         &lt;a href="http://www.oracle.com"&gt;Oracle&lt;/a&gt;
 *     &lt;/td&gt;
 * &lt;/script&gt;
 *
 * @example  <caption>Initialize the table with rowTemplate via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
 *      [{headerText: 'Department Id', field: 'DepartmentId'},
 *      {headerText: 'Department Name', field: 'DepartmentName'},
 *      {headerText: 'Location Id', field: 'LocationId'},
 *      {headerText: 'Manager Id', field: 'ManagerId'}],
 *      rowTemplate: 'row_tmpl'}"&gt;
 * &lt;script type="text/html" id="row_tmpl"&gt;
 *   &lt;tr&gt;
 *       &lt;td data-bind="text: DepartmentId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: DepartmentName"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: LocationId"&gt;
 *       &lt;/td&gt;
 *       &lt;td data-bind="text: ManagerId"&gt;
 *       &lt;/td&gt;
 *   &lt;/tr&gt;
 * &lt;/script&gt;
 * 
 * @class
 * @constructor
 * @name oj.ojTable
 * @augments oj.baseComponent
 */
(function() {
  oj.__registerWidget("oj.ojTable", $['oj']['baseComponent'],
    {
      version: '1.0.0',
      defaultElement: '<table>',
      widgetEventPrefix: 'oj',
      options:
        {
          /** 
           * Accessibility options. 
           * <p>
           * The following options are supported:
           * <ul>
           *   <li>rowHeader: columnId</li>
           * </ul>
           * The td cells in the column specified by the rowHeader
           * attribute will be assigned an id and then referenced by the
           * headers attribute in the rest of the cells in the row.
           * This is required by screenReaders. By default the first column
           * will be taken as the rowHeader.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string>|null}
           * @property {string} rowHeader the column id to be used as the row header by screen readers
           * @default <code class="prettyprint">null</code>
           */
          accessibility: null,
          /** 
           * The current row the user has navigated to. Can be an index and/or key value.
           * When both are specified, the index is used as a hint.
           * Returns the current row or null if there is none.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object}
           * @default <code class="prettyprint">null</code>
           * 
           * @example <caption>Get the current row:</caption>
           * $( ".selector" ).ojTable("option", "currentRow");
           * 
           * @example <caption>Set the current row on the table during initialization:</caption>
           * $(".selector").ojTable({"currentRow", {rowKey: '123'}});
           * 
           * @example <caption>Set the current row on the table during initialization:</caption>
           * $(".selector").ojTable({"currentRow", {rowIndex: 1}});
           *
           * @example <caption>Set the current row on the table after initialization:</caption>
           * $(".selector").ojTable({"option", "currentRow", {rowKey: '123'}});
           * 
           * @example <caption>Set the current row on the table after initialization:</caption>
           * $(".selector").ojTable({"option", "currentRow", {rowIndex: 1}});
           */
          currentRow: null,
          /** 
           * The data to bind to the component. 
           * <p>
           * Must be of type oj.TableDataSource {@link oj.TableDataSource}
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {oj.TableDataSource|null}
           * @default <code class="prettyprint">null</code>
           */
          data: null,
          /**
           * The text to display when there are no data in the Table. If it is not defined, 
           * then a default empty text is extracted from the resource bundle.
           * 
           * @expose 
           * @memberof! oj.ojTable
           * @instance
           * @type {string|null}
           * @default <code class="prettyprint">"No data to display."</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">emptyText</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, emptyText: 'No data', columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          emptyText: null,
          /** 
           * Whether the horizontal gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {string}
           * @default <code class="prettyprint">"enabled"</code>
           */
          horizontalGridVisible: 'enabled',
          /** 
           * The row renderer function to use.
           * <p>
           * The renderer function will be passed in an Object which contains the fields:
           * <ul>
           *   <li>component: Instance of the component</li>
           *   <li>row: Key/value pairs of the row</li>
           *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
           *   <li>parentElement: Empty rendered TR element</li>
           * </ul>
           * The function returns  either a String or 
           * a DOM element of the content inside the row. If the developer chooses 
           * to manipulate the row element directly, the function should return 
           * nothing.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Function|null}
           * @default <code class="prettyprint">null</code>
           */
          rowRenderer: null,
          /**
           * Specifies the current selections in the table. Can be either an index or key value.
           * When both are specified, the index is used as a hint.
           * Returns an array of range objects, or an empty array if there's no selection.
           * 
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable
           * @type {Array.<Object>}
           * @default <code class="prettyprint">[]</code>
           * 
           * @example <caption>Get the current selection:</caption>
           * $( ".selector" ).ojTable("option", "selection");
           * 
           * @example <caption>Set a row selection on the table during initialization:</caption>
           * $(".selector").ojTable({"selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]});
           * 
           * @example <caption>Set a column selection on the table during initialization:</caption>
           * $(".selector").ojTable({"selection", [{startIndex: {"column":2}, endIndex: {"column":4}}]});
           *
           * @example <caption>Set a row selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startIndex: {"row":1}, endIndex:{"row":3}}]);
           * 
           * @example <caption>Set a column selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startIndex: {"column":1}, endIndex: {"column":3}}]);
           * 
           * @example <caption>Set a row selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startKey: {"row":10}, endKey:{"row":30}}]);
           * 
           * @example <caption>Set a column selection on the table after initialization:</caption>
           * $(".selector").ojTable("option", "selection", [{startKey: {"column": column1}, endKey: {"column": column2}}]);
           */
          selection: [],  
          /** 
           * The row and column selection modes. Both can be either single or multiple.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string>|null}
           * @property {string} row single or multiple selection for rows
           * @property {string} column single or multiple selection for columns
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">selectionMode</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, selectionMode: {row: 'multiple', column: 'multiple'}, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          selectionMode: null,
          /** 
           * Whether the vertical gridlines are to be drawn.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {string}
           * @default <code class="prettyprint">"enabled"</code>
           */
          verticalGridVisible: 'enabled',
          /** 
           * An array of column definitions.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Array.<Object>|null}
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">columns</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          columns: [{
              /** 
               * The renderer function that renders the content of the cell. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>data: The cell data</li>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>row: Key/value pairs of the row</li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the cell data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columns.renderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              renderer: null,
              /** 
               * The CSS class to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columns.className
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              className: null,
              /** 
               * The data field this column refers to. 
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.field
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              field: null,
              /** 
               * The CSS class to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.footerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerClassName: null,
              /** 
               * The renderer function that renders the content of the footer. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the footer. If the developer chooses 
               * to manipulate the footer element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the footer data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.footerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              footerRenderer: null,       
              /** 
               * The CSS styling to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.footerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerStyle: null,
              /** 
               * The CSS class to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.headerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerClassName: null,
              /** 
               * The renderer function that renders the content of the header. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>parentElement: Empty rendered TH element</li>
               * </ul>
               * The function returns either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the header data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.headerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              headerRenderer: null, 
              /** 
               * The CSS styling to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.headerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerStyle: null,
              /** 
               * Text to display in the header of the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.headerText
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerText: null,
              /** 
               * The identifier for the column
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.id
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              id: null,
              /** 
               * Whether or not the column is sortable. 
               * <p>
               * A sortable column has a clickable header that (when clicked) 
               * sorts the table by that column's property. Note that 
               * in order for a column to be sortable, this attribute 
               * must be set to "enabled" and the underlying model must 
               * support sorting by this column's property. If this attribute
               * is set to "auto" then the column will be sortable if the
               * underlying model supports sorting. A value of "none" will
               * disable sorting on the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.sortable
               * @type {string|null}
               * @default <code class="prettyprint">"auto"</code>
               */
              sortable: 'auto',
              /** 
               * This is the property that the framework uses to 
               * sort the Table's data.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.sortProperty
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              sortProperty: null,
              /** 
               * The CSS styling to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columns.style
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              style: null
            }],
          /** 
           * Default values to apply to all columns objects.
           * @expose 
           * @public 
           * @instance
           * @memberof! oj.ojTable 
           * @type {Object.<string, string|null>}
           * @default <code class="prettyprint">null</code>
           * @example <caption>Initialize the table with the <code class="prettyprint">columnsDefault</code> option specified:</caption>
           * &lt;table id="table" data-bind="ojComponent: {component: 'ojTable', data: datasource, columnsDefault: {headerStyle: 'text-align: left; white-space:nowrap;'}, columns:
           * [{headerText: 'Department Id', field: 'DepartmentId'},
           * {headerText: 'Department Name', field: 'DepartmentName']}"&gt;
           */
          columnsDefault: {
              /** 
               * The renderer function that renders the content of the cell. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>data: The cell data</li>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>row: Key/value pairs of the row</li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the cell data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable
               * @alias columnsDefault.renderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              renderer: null,
              /** 
               * The default CSS class for column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.className
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              className: null,
              /** 
               * The default data field for column. 
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.field
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              field: null,
              /** 
               * The CSS class to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerClassName: null,
              /** 
               * The renderer function that renders the content of the footer. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>datasource: Instance of the datasource used by the table </li>
               *   <li>status: Contains the rowIndex, rowKey, and currentRow</li>
               *   <li>parentElement: Empty rendered <td> element</li>
               * </ul>
               * The function returns  either a String or 
               * a DOM element of the content inside the footer. If the developer chooses 
               * to manipulate the footer element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the footer data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              footerRenderer: null, 
              /** 
               * The CSS styling to apply to the footer cell.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.footerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              footerStyle: null,
              /** 
               * The default CSS class to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerClassName
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerClassName: null,
              /** 
               * The renderer function that renders the content of the header. 
               * The function will be passed a context object which contains 
               * the following objects:
               * <ul>
               *   <li>column: The column object</li>
               *   <li>component: Instance of the component</li>
               *   <li>parentElement: Empty rendered TH element</li>
               * </ul>
               * The function returns either a String or 
               * a DOM element of the content inside the header. If the developer chooses 
               * to manipulate the cell element directly, the function should return 
               * nothing. If no renderer is specified, the Table will treat the header data as a String.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerRenderer
               * @type {Function|null}
               * @default <code class="prettyprint">null</code>
               */
              headerRenderer: null, 
              /** 
               * The default CSS styling to apply to the column header text.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerStyle
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerStyle: null,
              /** 
               * Default text to display in the header of the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.headerText
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              headerText: null,
              /** 
               * Whether or not the column is sortable. 
               * <p>
               * A sortable column has a clickable header that (when clicked) 
               * sorts the table by that column's property. Note that 
               * in order for a column to be sortable, this attribute 
               * must be set to "enabled" and the underlying model must 
               * support sorting by this column's property. If this attribute
               * is set to "auto" then the column will be sortable if the
               * underlying model supports sorting. A value of "none" will
               * disable sorting on the column.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.sortable
               * @type {string|null}
               * @default <code class="prettyprint">"auto"</code>
               */
              sortable: 'auto',
              /** 
               * Default property that the framework uses to 
               * sort the Table's data.
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.sortProperty
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              sortProperty: null,
              /** 
               * Default CSS styling to apply to the column cells
               * @expose 
               * @public 
               * @instance
               * @memberof! oj.ojTable 
               * @alias columnsDefault.style
               * @type {string|null}
               * @default <code class="prettyprint">null</code>
               */
              style: null
            },
            /**
              * Triggered before the current row is changed via the <code class="prettyprint">currentRow</code> option or via the UI.
              *
              * @expose 
              * @event 
              * @memberof! oj.ojTable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Parameters
              * @property {Object} ui.currentRow the new current row
              * @property {number} ui.previousCurrentRow the old current row
              * 
              * @example <caption>Initialize the table with the <code class="prettyprint">beforeCurrentRow</code> callback specified:</caption>
              * $( ".selector" ).ojTable({
              *     "beforeCurrentRow": function( event, data ) {}
              * });
              *
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecurrentrow</code> event:</caption>
              * $( ".selector" ).on( "ojbeforecurrentrow", function( event, data ) {} );
              */
            beforeCurrentRow: null,
            /**
              * Triggered when selection is changed via the <code class="prettyprint">selection()</code> method or via the UI.
              *
              * @expose 
              * @event 
              * @memberof! oj.ojTable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Parameters
              * @property {Array} ui.selection the table selection object
              * 
              * @example <caption>Initialize the table with the <code class="prettyprint">select</code> callback specified:</caption>
              * $( ".selector" ).ojTable({
              *     "select": function( event, data ) {}
              * });
              *
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
              * $( ".selector" ).on( "ojselect", function( event, data ) {} );
              */
            select: null,
            /** 
              * Translations for the component
              * @expose 
              * @public 
              * @instance
              * @memberof! oj.ojTable
              * @type {Object.<string, string>}
              * @property {string} labelSelectRow Select row label
              * @property {string} labelSelectColumn Select column label
              * @property {string} labelSort Context menu label for sort
              * @property {string} labelSortAsc Context menu label for sort ascending
              * @property {string} labelSortDsc Context menu label for sort descending
              * @property {string} msgFetchingData Fetching data message
              * @property {string} msgNoData No data to display message
              */
            translations: {}
        },
      /**
       * @const
       * @private
       */
      _BUNDLE_KEY:
        {
          _MSG_FETCHING_DATA:                             'msgFetchingData',
          _MSG_NO_DATA:                                   'msgNoData',
          _LABEL_SELECT_COLUMN:                           'labelSelectColumn',
          _LABEL_SELECT_ROW:                              'labelSelectRow'
        },
      /**
       * @const
       * @private
       */
      _LOGGER_MSG:
        {
          _ERR_PRECURRENTROW_ERROR_SUMMARY:                'Did not change current row due to error.',
          _ERR_PRECURRENTROW_ERROR_DETAIL:                 'Error detail: {error}.',
          _ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY:       'Did not change current row due to unavailable row index.',
          _ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL:        'Unavailable row index: {rowIdx}.',
          _ERR_REFRESHROW_INVALID_INDEX_SUMMARY:          'Invalid row index value.',
          _ERR_REFRESHROW_INVALID_INDEX_DETAIL:           'Row index: {rowIdx}.',
          _ERR_DATA_INVALID_TYPE_SUMMARY:                 'Invalid data type.',
          _ERR_DATA_INVALID_TYPE_DETAIL:                  'Please specify the appropriate data type.'
        },
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID:                                  '_headerColumn',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_TEXT_ID:                             '_headerColumnText',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ASC_ID:                              '_headerColumnAsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_DSC_ID:                              '_headerColumnDsc',
      /**
       * @private
       * @const
       * @type {string}
       */
      _COLUMN_HEADER_ID_PREFIX:                           '_hdrCol',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_AUTO:                                       'auto',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_ENABLED:                                    'enabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_DISABLED:                                   'disabled',
      /**
       * @private
       * @const
       * @type {string}
       */
      _OPTION_NONE:                                       'none',
      /**
       * @private
       * @const
       */
      _OPTION_SELECTION_MODES:
        {
          _SINGLE:                                        'single',
          _MULTIPLE:                                      'multiple'
        },
      /**
       * @private
       * @const
       */
      _COLUMN_SORT_ORDER:
        {
          _ASCENDING:                                     'ascending',
          _DESCENDING:                                    'descending'
        },
      /**
       * @private
       * @const
       */
      _KEYBOARD_CODES:
        {
          _KEYBOARD_CODE_SHIFT:                           16,
          _KEYBOARD_CODE_SPACEBAR:                        32,
          _KEYBOARD_CODE_ENTER:                           13,
          _KEYBOARD_CODE_UP:                              38,
          _KEYBOARD_CODE_DOWN:                            40,
          _KEYBOARD_CODE_LEFT:                            37,
          _KEYBOARD_CODE_RIGHT:                           39,
          _KEYBOARD_CODE_HOME:                            36,
          _KEYBOARD_CODE_END:                             35,
          _KEYBOARD_CODE_TAB:                             9,
          _KEYBOARD_CODE_ESC:                             27,
          _KEYBOARD_MODIFIER_SHIFT:                       'shiftKey'
        },
      /**** start Public APIs ****/
      /**
       * Get the column metadata
       * @param {number} columnIdx  Column index of the column. Null returns all columns
       * @return {Object|null} Column metadata or null if not found
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @example <caption>Invoke the <code class="prettyprint">columnMetaData</code> method:</caption>
       * $( ".selector" ).ojTable( "columnMetaData", "columnId1" );
       */
      'columnMetaData': function(columnIdx)
      {
        var columns = this._getColumnDefs();

        if (columnIdx === null || arguments.length == 0)
        {
          return columns;
        }
        else
        {
          return columns[columnIdx];
        }
      },
      /**
       * Return the subcomponent node represented by the documented locator attribute values.
       * 
       * To lookup a cell the locator object should have the following:
       *          subId: 'oj-table-cell'
       *          rowIndex: number
       *          columnIndex: number
       *          
       * To lookup a header the locator object should have the following:
       *          subId: 'oj-table-header'
       *          index: number   
       *          
       * To lookup a footer the locator object should have the following:
       *          subId: 'oj-table-footer'
       *          index: number   
       *          
       * To lookup a sort icon the locator object should have the following:
       *          subId: 'oj-table-sort-ascending'/'oj-table-sort-descending'
       *          index: number                
       * 
       * @override
       * @param {Object} locator An Object containing at minimum a subId property whose value is a string 
       * @return {Element|null} the subcomponent located by the subId string passed in locator, if found.
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * 
       */
      'getNodeBySubId': function(locator)
      {
        if (locator == null)
        {
          return this.element ? this.element[0] : null;
        }

        var subId = locator['subId'];

        if (subId === 'oj-table-cell')
        {
          var rowIdx = locator['rowIndex'];
          var columnIdx = locator['columnIndex'];
          return this._getTableDomUtils().getTableBodyCell(rowIdx, columnIdx)[0];
        }
        else if (subId === 'oj-table-header' ||
                 subId === 'oj-table-sort-ascending' ||
                 subId === 'oj-table-sort-descending')
        {
          var columnIdx = locator['index'];
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
          if (tableHeaderColumn != null)
          {
            if (subId === 'oj-table-header')
            {
              return tableHeaderColumn[0];
            }
            else if (subId === 'oj-table-sort-ascending')
            {
              var tableHeaderColumnSortAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
              if (tableHeaderColumnSortAsc.length > 0)
              {
                return tableHeaderColumnSortAsc[0];
              }
            }
            else
            {
              var tableHeaderColumnSortDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
              if (tableHeaderColumnSortDsc.length > 0)
              {
                return tableHeaderColumnSortDsc[0];
              }
            }
          }
        }
        else if (subId === 'oj-table-footer')
        {
          var columnIdx = locator['index'];
          var tableFooterCell = this._getTableDomUtils().getTableFooterCell(columnIdx);
          
          if (tableFooterCell != null)
          {
            return tableFooterCell[0];
          }
        }

        // Non-null locators have to be handled by the component subclasses
        return null;
      },              
      /**
       * Refresh the table.
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
       * $( ".selector" ).ojTable( "refresh" );
       */
      'refresh': function()
      {
        this._super();
        this._refresh(true);
      },
      /**
       * Refresh a row in the table.
       * @param {number} rowIdx  Index of the row to refresh.
       * @return {boolean} true if refreshed, false if not
       * @throws {Error}
       * @export
       * @expose
       * @memberof! oj.ojTable
       * @instance
       * @example <caption>Invoke the <code class="prettyprint">refreshRow</code> method:</caption>
       * $( ".selector" ).ojTable( "refreshRow", 1 );
       */
      'refreshRow': function(rowIdx)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return false;
        }

        if (isNaN(rowIdx) || rowIdx < 0 || rowIdx > data.size() - 1)
        {
          // validate rowIdx value
          var errSummary = this._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_SUMMARY;
          var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_DETAIL, {'rowIdx': rowIdx.toString()});
          throw new RangeError(errSummary + '\n' + errDetail);
        }

        // get row at rowIdx
        var row = data.at(rowIdx);
        if (row == null)
        {
          return false;
        }
        // refresh table row DOM with row
        try
        {
            if (row instanceof oj.Row)
            {
              this._refreshTableBodyRow(rowIdx, row);
            }
            else
            {
              this._asyncRefreshTableBodyRow(row);
            }
        }
        catch (e)
        {
          oj.Logger.error(e);
        }
        return true;
      },
      /**** end Public APIs ****/

      /**** start internal widget functions ****/

      /**
       * @override
       * @protected
       * @instance
       * @memberof! oj.ojTable
       */
      _ComponentCreate : function ()
      {
        this._super();
        this._draw();
        this._registerCustomEvents();
        this._on(this._events);
        // register event listeners for table on the datasource so that the table
        // component is notified when rows are added, deleted, etc from the datasource.
        this._registerDomEventListeners();
        this._registerDataSourceEventListeners();
        
        var self = this;
        setInterval(
          function()
          {
            if (self._selectionTimer != null)
            {
              self._setSelection();
              self._selectionTimer = null;
            }
        }, 100);
      },
      /**
       * @override
       * @private
       */
      _destroy: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        this._unregisterDataSourceEventListeners();
        
        this._getTableDomUtils().getTableBody().removeAttr(oj.Components._OJ_CONTAINER_ATTR);

        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
        this.element.children().remove('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);

        var tableContainer = this._getTableDomUtils().getTableContainer();
        if (tableContainer != null)
        {
          // add the table back tgo the parent element and remove the 
          // tableContainer div
          tableContainer[0].parentNode.appendChild(this.element);
          tableContainer[0].parentNode.removeChild(tableContainer[0]);
        }
        this.element.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CLASS);
      },
      /**
       * @override
       * @private
       */
      _draw: function()
      {
        var options = this.options;
        
         // add css class to element
        this.element.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_ELEMENT_CLASS);

        // create the initial table structure
        this._getTableDomUtils().createInitialTable(this._isTableHeaderless(), 
                                                    this._isTableFooterless(), 
                                                    this._handleContextMenuBeforeShow.bind(this), 
                                                    this._handleContextMenuSelect.bind(this));
        // style the initial table structure
        this._getTableDomUtils().styleInitialTable();

        // populate the table header DOM with header content
        this._refreshTableHeader();

        // populate the table footer DOM with footer content
        this._refreshTableFooter();

        // resize the table dimensions to accomodate the completed tableheader
        this._getTableDomUtils().refreshTableDimensions(true);

        if (this.options.disabled)
        {
          this.disable();
        }
        
        this._registerResizeListener(this._getTableDomUtils().getTableContainer());
      },
      /**
       * @override
       * @private
       */
      _events:
        {
          /**
           * Reset the keyboard state on blur and set the inactive
           * selected rows
           */
          'blur': function(event)
          {
            // make sure the blur isn't for a focus to an element within
            // the table
            var table = this._getTableDomUtils().getTable();
            if (table.has(event.relatedTarget).length > 0)
            {
              return;
            }
            // In FF we check explicitOriginalTarget
            else if (event.originalEvent != null && event.originalEvent.explicitOriginalTarget == table[0])
            {
              return;
            }

            this._clearKeyboardKeys();
            this._clearFocusedHeaderColumn();
            this._clearFocusedRow();
            this._setTableNavigationMode(false);
          },
          /**
           * Check the keyboard state on focus
           */
          'focus': function(event)
          {
            var focusedRowIdx = this._getFocusedRowIdx();
            var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
            
            if (focusedRowIdx == null && focusedHeaderColumnIdx == null)
            {
              // if no row or column is focused then set the focus on the first column
              this._setHeaderColumnFocus(0, true, false, null);
            }
          },
          /**
           * Capture acc selected column event
           */
          'click .oj-table-checkbox-acc-select-column': function(event)
          {
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            // if selected then focus on the column
            if (selected)
            {
              this._setHeaderColumnFocus(columnIdx, true, true, null);
            }
            this._setHeaderColumnSelection(columnIdx, selected, event.currentTarget, event);
            event.stopPropagation();
          },
          /**
           * Capture acc selected row event
           */
          'click .oj-table-checkbox-acc-select-row': function(event)
          {
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            var selected = $(event.currentTarget).is(':checked');
            // if selected then focus on the row
            if (selected)
            {
              this._setRowFocus(rowIdx, true, null, event);
            }
            this._setRowSelection(rowIdx, selected, event.currentTarget, event);
            event.stopPropagation();
          },
          /**
           * Capture keyboard down events
           */
          'keydown': function(event)
          {
            // ignore key event on the footer
            if (this._getTableDomUtils().getTableFooter() != null && 
                this._getTableDomUtils().getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            this._addKeyboardKey(event.keyCode);
            // process single or two key events
            if (this._getKeyboardKeys().length == 1 ||
              this._getKeyboardKeys().length == 2)
            {
              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_HOME) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_END))
              {
                event.preventDefault();
                event.stopPropagation();
              }

              if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
              {
                this._handleKeydownUpDown(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT) ||
                this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
              {
                this._handleKeydownLeftRight(event);
              }
              else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_TAB))
              {
                this._handleKeydownTab(event);
              }
            }
          },
          /**
           * Capture keyboard up events
           */
          'keyup': function(event)
          {
            // ignore key event on the footer
            if (this._getTableDomUtils().getTableFooter() != null && 
                this._getTableDomUtils().getTableFooter().has(event.target).length > 0)
            {
              return;
            }
            // process single or 2 key events
            if (this._getKeyboardKeys().length == 1)
            {
              var keyboardCode1 = this._getKeyboardKeys()[0];

              if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_SPACEBAR)
              {
                this._handleKeyupSpacebar(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ENTER)
              {
                this._handleKeyupEnter(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_HOME)
              {
                this._handleKeyupHome(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_END)
              {
                this._handleKeyupEnd(event);
              }
              else if (keyboardCode1 == this._KEYBOARD_CODES._KEYBOARD_CODE_ESC)
              {
                this._handleKeyupEsc(event);
              }
              this._removeKeyboardKey(keyboardCode1);
            }
            // remove the keycode from our internal list of pressed keys.
            this._removeKeyboardKey(event.keyCode);
          },
          /**
           * show the ascending/descending links when the mouse 
           * enters a column header
           */
          'mouseenter .oj-table-column-header-cell': function(event)
          {
            // get the column index of the header element
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // show the asc/dsc links for the header
            this._showTableHeaderColumnSortLink(columnIdx);
          },
          /**
           * hide the ascending/descending links when the mouse 
           * leaves a column header
           */
          'mouseleave .oj-table-column-header-cell': function(event)
          {
            // get the column index of the header element
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // hide the asc/dsc links for the header
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          },
          /**
           * show the row hover when the mouse enters a table cell
           */
          'mouseenter .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            // set row hover
            this._updateRowCellsClass(rowIdx, {hover: true});
          },
          /**
           * hide the row hover when the mouse leaves a table cell
           */
          'mouseleave .oj-table-data-cell': function(event)
          {
            // get the row index of the cell element
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            // unset row hover
            this._updateRowCellsClass(rowIdx, {hover: false});
          },
          /**
           * invoke a sort on the column data when the mouse clicks the ascending link
           */
          'click .oj-table-column-header-asc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

            if (!tableHeaderColumn)
            {
              return;
            }

            // check if the column is currently sorted
            var sorted = tableHeaderColumn.data('sorted');
            if (sorted == this._COLUMN_SORT_ORDER._ASCENDING)
            {
              this._handleSortTableHeaderColumn(columnIdx, false);
            }
            else
            {
              this._handleSortTableHeaderColumn(columnIdx, true);
            }
            event.preventDefault();
            event.stopPropagation();
          },
          'click .oj-table-column-header-acc-asc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, true);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * invoke a sort on the column data when the mouse clicks the descending link
           */
          'click .oj-table-column-header-dsc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

            if (!tableHeaderColumn)
            {
              return;
            }

            // check if the column is currently sorted
            var sorted = tableHeaderColumn.data('sorted');
            if (sorted == this._COLUMN_SORT_ORDER._DESCENDING)
            {
              this._handleSortTableHeaderColumn(columnIdx, true);
            }
            else
            {
              this._handleSortTableHeaderColumn(columnIdx, false);
            }
            event.preventDefault();
            event.stopPropagation();
          },
          'click .oj-table-column-header-acc-dsc-link': function(event)
          {
            this._checkFocus();
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.target));
            this._handleSortTableHeaderColumn(columnIdx, false);
            event.preventDefault();
            event.stopPropagation();
          },
          /**
           * set the row focus or selection when the mouse clicks on a cell.
           * Ctrl + click results in selection and focus. Plain click results in focus.
           * Plain click on a selected row removes the selection.
           */
          'click .oj-table-data-cell': function(event)
          {
            this._checkFocus();
            // get the row index of the cell element
            var rowIdx = this._getTableDomUtils().getElementRowIdx($(event.currentTarget));
            // set the row focus
            this._setRowFocus(rowIdx, true, event.currentTarget, event);
            // check if we are selecting
            if (this._getKeyboardKeys().length == 1)
            {
              if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_SHIFT)
              {
                var lastSelectedRowIdx = this._getLastRowSelection();
                if (lastSelectedRowIdx != null)
                {
                  // shift selection is always from the last selected row
                  if (rowIdx < lastSelectedRowIdx)
                  {
                    var i;
                    for (i = rowIdx; i <= lastSelectedRowIdx; i++)
                    {
                      this._setRowSelection(i, true, event.currentTarget, event);
                    }
                  }
                  else
                  {
                    var i;
                    for (i = lastSelectedRowIdx; i <= rowIdx; i++)
                      this._setRowSelection(i, true, event.currentTarget, event);
                  }
                }
              }
            }
            else if (oj.DomUtils.isMetaKeyPressed(event))
            {
              this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event);
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._clearSelectedRows();
              this._setRowSelection(rowIdx, !this._getRowSelection(rowIdx), event.currentTarget, event);
            }
          },
          /**
           * set the column header selection and focus. Plain click results in
           * focus and selection. If Ctrl is not pressed then we have single column selection.
           */
          'click .oj-table-column-header-cell': function(event)
          {
            this._checkFocus();
            // get the column index
            var columnIdx = this._getTableDomUtils().getElementColumnIdx($(event.currentTarget));
            // set the column focus
            this._setHeaderColumnFocus(columnIdx, true, true, event.currentTarget);
            // check if we are selecting
            if (this._getKeyboardKeys().length == 1)
            {
              if (this._getKeyboardKeys()[0] == this._KEYBOARD_CODES._KEYBOARD_CODE_SHIFT)
              {
                var lastSelectedColumnIdx = this._getLastHeaderColumnSelection();
                if (lastSelectedColumnIdx != null)
                {
                  // shift selection is always from the last selected column
                  if (columnIdx < lastSelectedColumnIdx)
                  {
                    var i;
                    for (i = columnIdx; i <= lastSelectedColumnIdx; i++)
                    {
                      this._setHeaderColumnSelection(i, true, event.currentTarget, event);
                    }
                  }
                  else
                  {
                    var i;
                    for (i = lastSelectedColumnIdx; i <= columnIdx; i++)
                      this._setHeaderColumnSelection(i, true, event.currentTarget, event);
                  }
                }
              }
            }
            else if (oj.DomUtils.isMetaKeyPressed(event))
            {
              this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event);
            }
            else if (this._getKeyboardKeys().length == 0)
            {
              this._clearSelectedHeaderColumns();
              this._setHeaderColumnSelection(columnIdx, !this._getHeaderColumnSelection(columnIdx), event.currentTarget, event);
            }
            event.preventDefault();
          }
        },
      /**
       * @param {boolean} immediate  refresh immediately
       * @private
       */
      _refresh: function(immediate)
      {
        this._clearCachedMetadata();
        if (this._data != this.options['data'])
        {
          this._clearCachedDataMetadata();
        }
        if (this._contextMenuId != this._getTableDomUtils().getContextMenuId())
        {
          this._getTableDomUtils().createContextMenu(this._handleContextMenuBeforeShow.bind(this), 
                                                     this._handleContextMenuSelect.bind(this));
        }
        this._getTableDomUtils().clearCachedDom();
        var self = this;
        setTimeout(function()
        {
          self._refreshAll(immediate)
        }, 0);
      },
      /**
       * @override
       * @private
       */
      _setOption: function(key, value)
      {
        var shouldRefresh = this._isTableRefreshNeeded(key, value);
        this._superApply(arguments);
        
        if (shouldRefresh)
        {
          this._refresh(true);
        }
        if (key == 'selection')
        {
          this._setSelection();
        }
      },
      /**** end internal widget functions ****/

      /**** start internal functions ****/

      /**
       * Add a keyCode to internally track pressed keys. keyCodes should be added on 
       * mouse down and then later removed on mouse up.
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @private
       */
      _addKeyboardKey: function(keyCode)
      {
        var foundCode = false;
        for (var prop in this._KEYBOARD_CODES)
        {
          if (this._KEYBOARD_CODES.hasOwnProperty(prop))
          {
            if (this._KEYBOARD_CODES[prop] == keyCode)
            {
              foundCode = true;
            }
          }
        }

        if (!foundCode)
        {
          // only add keys we are interested in
          return;
        }

        var keyboardKeys = this._getKeyboardKeys();
        var found = false;
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            found = true;
            break;
          }
        }
        if (!found)
        {
          keyboardKeys.push(keyCode);
        }
      },
      /**
       * Add a new tr and refresh the DOM at the row index and refresh the table 
       * dimensions to accomodate the new row
       * @param {number} rowIdx  row index
       * @param {Object} row  oj.Row
       * @param {Object} docFrag  document fragment
       * 
       * @private
       */
      _addSingleTableBodyRow: function(rowIdx, row, docFrag)
      {
        var tableBodyRow = this._getTableDomUtils().createTableBodyRow(rowIdx);
        this._getTableDomUtils().styleTableBodyRow(tableBodyRow);
        // insert the <tr> element in to the table body DOM
        this._getTableDomUtils().insertTableBodyRow(rowIdx, tableBodyRow, row, docFrag);
        if (row instanceof oj.Row)
        {
          this._refreshTableBodyRow(rowIdx, row, tableBodyRow, docFrag);
        }
        else
        {
          this._asyncRefreshTableBodyRow(row);
        }
      },
      /**
       * Refresh the row asynchronously
       * @param {Object} row deferred object or oj.Row
       * 
       * @private
       */
      _asyncRefreshTableBodyRow: function(row)
      {
        var self = this;
        
        row.then(function(resolvedModel)
                 {
                   setTimeout(function()
                   {
                     var rowIdx = resolvedModel.index - self._getData().startIndex();
                     self._refreshTableBodyRow(rowIdx, resolvedModel);
                     self._getTableDomUtils().refreshTableDimensions();
                   }, 0);
                 }); 
      },
      /**
       * Check the focus is on the table or descendent focusable element
       * @private
       */
      _checkFocus: function()
      {
        // set focus on the table
        if (!this._isFocused())
        {
          // only focus if focus is not on some child element of table
          this._getTableDomUtils().getTable().focus();
        }
      },
      /**
       * Clear any cached metadata
       * @private
       */
      _clearCachedMetadata: function()
      {
        this._columnDefArray = null;
        this._setTableNavigationMode(false);
      },
      /**
       * Clear any cached data metadata
       * @private
       */
      _clearCachedDataMetadata: function()
      {
        if (this._data != null)
        {
          this._unregisterDataSourceEventListeners();
        }
        this._data = null;
      },
      /**
       * Clear any keyboard keys
       * @private
       */
      _clearKeyboardKeys: function()
      {
        this._keyboardKeys = [];
      },
      /**
       * Clear the focused column header
       * @private
       */
      _clearFocusedHeaderColumn: function()
      {
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        if (focusedHeaderColumnIdx != null)
        {
          this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, false, null);
        }
        this._activeColumnIndex = -1;
      },
      /**
       * Clear the focused row
       * @private
       */
      _clearFocusedRow: function()
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        if (focusedRowIdx != null)
        {
          this._setRowFocus(focusedRowIdx, false, null, null);
        }
      },
      /**
       * Clear the selected column headers
       * @private
       */
      _clearSelectedHeaderColumns: function()
      {
        var selectedHeaderColumnIdxs = this._getSelectedHeaderColumnIdxs();

        var i;
        for (i = 0; i < selectedHeaderColumnIdxs.length; i++)
        {
          this._setHeaderColumnSelection(selectedHeaderColumnIdxs[i], false, null);
        }
      },
      /**
       * Clear the selected rows
       * @private
       */
      _clearSelectedRows: function()
      {
        var selectedRowIdxs = this._getSelectedRowIdxs();

        var i;
        for (i = 0; i < selectedRowIdxs.length; i++)
          this._setRowSelection(selectedRowIdxs[i], false, null);
      },
      /**
       * Clear the sorted column header indicator. Note this does not affect the order
       * of the data. This is just to clear the UI indication.
       * @param {number} columnIdx  column index
       * @private
       */
      _clearSortedHeaderColumn: function(columnIdx)
      {
        var sortedTableHeaderColumnIdx = this._getSortedTableHeaderColumnIdx();
        if (sortedTableHeaderColumnIdx != null)
        {
          var sortedTableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(sortedTableHeaderColumnIdx);
          var sorted = sortedTableHeaderColumn.data('sorted');
          sortedTableHeaderColumn.data('sorted', null);
          
          if (sortedTableHeaderColumnIdx != columnIdx)
          {
            if (sorted == this._COLUMN_SORT_ORDER._ASCENDING)
            {
              this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, true);
            }
            else
            {
              this._hideTableHeaderColumnSortLink(sortedTableHeaderColumnIdx, false);
            }
          }
          else
          {
            var sortedTableHeaderColumnAscLink = sortedTableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            sortedTableHeaderColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            var sortedTableHeaderColumnDscLink = sortedTableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            sortedTableHeaderColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Execute queued row operations
       * @private
       */
      _executeQueuedTableBodyRowOperations: function()
      {
        if (this._rowOperationQueue != null)
        {
          var lastOperation = this._rowOperationQueue[this._rowOperationQueue.length - 1];

          if (lastOperation != null)
          {
            var lastOperationEventType = lastOperation.eventType;

            if (lastOperationEventType == oj.TableDataSource.EventType['ADD'])
            {
              this._executeTableBodyRowsAdd(this._rowOperationQueue);
            }
            else if (lastOperationEventType == oj.TableDataSource.EventType['REMOVE'])
            {
              this._executeTableBodyRowsRemove(this._rowOperationQueue);
            }
            else if (lastOperationEventType == oj.TableDataSource.EventType['CHANGE'])
            {
              this._executeTableBodyRowsChange(this._rowOperationQueue);
            }
            this._rowOperationQueue = [];
          }
        }
      },
      /**
       * Add all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to add
       * @private
       */
      _executeTableBodyRowsAdd: function(rows)
      {
        // see if we should batch add
        // only batch if we are adding a block of contiguous rows
        var batchAdd = false;
        if (rows.length > 1)
        {
          var i;
          var isContiguous = true;
          for (i = 0; i < rows.length; i++)
          {
            if (i != 0)
            {
              if (rows[i - 1].rowIdx != rows[i].rowIdx - 1)
              {
                isContiguous = false;
                break;
              }
            }
          }
          
          if (isContiguous)
          {
            var tableBody = this._getTableDomUtils().getTableBody();
            var tableBodyDocFrag = $(document.createDocumentFragment());
            for (i = 0; i < rows.length; i++)
            {
              this._addSingleTableBodyRow(rows[i].rowIdx, rows[i].row, tableBodyDocFrag);
            }
            if (rows[0].rowIdx == 0)
            {
              tableBody.prepend(tableBodyDocFrag);
            }
            else
            {
              var tableBodyRowBefore = this._getTableDomUtils().getTableBodyRow(rows[0].rowIdx);
              if (tableBodyRowBefore != null)
              {
                tableBody[0].insertBefore(tableBodyDocFrag[0], tableBodyRowBefore[0]);
              }
              else
              {
                tableBody[0].insertBefore(tableBodyDocFrag[0], null);
              }
            }
            var j, columns;
            for (i = 0; i < rows.length; i++)
            {
              this._getTableDomUtils().renderDelayedTableBodyRow(rows[i].rowIdx);
              columns = this._getColumnDefs();
              for (j = 0; j < columns.length; j++)
              {
                this._getTableDomUtils().renderDelayedTableBodyCell(rows[i].rowIdx, j);
              }
            }
            this._getTableDomUtils().clearDelayedRenderRows();
            this._getTableDomUtils().clearDelayedRenderCells();
            batchAdd = true;
          }
        }
        
        if (!batchAdd)
        {
          for (i = 0; i < rows.length; i++)
          {
            this._addSingleTableBodyRow(rows[i].rowIdx, rows[i].row);
          }        
        }
        
        this._getTableDomUtils().clearCachedDomRowData();
        this._getTableDomUtils().refreshTableDimensions();
      },
      /**
       * Change all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to change
       * @private
       */
      _executeTableBodyRowsChange: function(rows)
      {
        var i;
        for (i = 0; i < rows.length; i++)
        {
            if (rows[i].row instanceof oj.Row)
            {
              this._refreshTableBodyRow(rows[i].rowIdx, rows[i].row);
            }
            else
            {
              this._asyncRefreshTableBodyRow(rows[i].row);
            }
        }
        this._getTableDomUtils().refreshTableDimensions();
      },
      /**
       * Change all the rows contained in the input array.
       * @param {Array} rows Array of row contexts to change
       * @private
       */
      _executeTableBodyRowsRemove: function(rows)
      {
        var i;
        for (i = 0; i < rows.length; i++)
        {
          this._removeTableBodyRow(rows[i].rowIdx);
        }
        this._getTableDomUtils().refreshTableDimensions();
      },
      /**
       * Fire optionChange event 
       * @param {String} key - 'selected'
       * @param {Object} previousValue 
       * @param {Object} value
       * @param {Object} event
       *
       * @private
       */
      _fireOptionChange: function(key, previousValue, value, event) 
      {
        var ui = {
          "option": key,
          "previousValue": previousValue,
          "value": value,
          "optionMetadata": {'writeback': event ? "shouldWrite" : "shouldNotWrite"}
        };
        this._trigger('optionChange', event, ui);
      },
      /**
       * Return the column definitions
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnDefs: function()
      {
        // cache the columns array in this._columnDefArray
        if (!this._columnDefArray)
        {
          this._columnDefArray = this._getColumnMetadata();
        }
        return this._columnDefArray;
      },
      /**
       * Return the column metadata in sorted oder.
       * @return {Array} array of column metadata Objects.
       * @private
       */
      _getColumnMetadata: function()
      {
        // get the columns metadata
        var columns = this.options['columns'];
        var columnsDefault = this.options['columnsDefault'];

        if ((columns.length == 0 ||
            (columns.length == 1 &&
            columns[0].id == null &&
            columns[0].headerText == null &&
            columns[0].field == null)) &&
            (columnsDefault.headerText == null &&
            columnsDefault.field == null))
        {
          return [];
        }
        
        var defaultedColumns = [];
        var i;
        for (i = 0; i < columns.length; i++)
        {
          defaultedColumns[i] = $.extend({}, columnsDefault, columns[i]);
        }

        var columnsSortedArray = [];
        // add the rest of the columns in the array
        for (i = 0; i < defaultedColumns.length; i++)
        {
          columnsSortedArray.push(defaultedColumns[i]);
        }
        
        var data = this._getData();
        var sortSupportedData = false;
        if (data != null && data.getCapability('sort') == 'full')
        {
          sortSupportedData = true;
        }

        for (i = 0; i < defaultedColumns.length; i++)
        {
          // generate ids for columns which don't have it specified
          if (columnsSortedArray[i]['id'] == null)
          {
            columnsSortedArray[i]['id'] = this._COLUMN_HEADER_ID_PREFIX + i;
          }
          // for the columns which have sortable = 'auto' check the datasource
          // and enable or disable
          if ((columnsSortedArray[i]['sortable'] == null || 
               columnsSortedArray[i]['sortable'] == this._OPTION_AUTO)
               && sortSupportedData)
          {
            columnsSortedArray[i]['sortable'] = this._OPTION_ENABLED;
          }
        }
        return columnsSortedArray;
      },
      /**
       * Return the column index for column key.
       * @param {Object} columnKey column key
       * @return {number|null} column index
       * @private
       */
      _getColumnIdxForColumnKey: function(columnKey)
      {
        var columns = this._getColumnDefs();
      
        if (columns != null)
        {
          var i, column;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            if (oj.Object.compareValues(column.id, columnKey))
            {
              return i;
            }
          }
        }
        return null;
      },
      /**
       * Return all the column indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of column indexes
       * @private
       */
      _getColumnIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTableDomUtils().getTable().find(styleClass);
        var columnIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, alreadyAdded, columnIdx;
          for (i = 0; i < elements.length; i++)
          {
            columnIdx = this._getTableDomUtils().getElementColumnIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < columnIdxs.length; j++)
            {
              if (columnIdxs[j] == columnIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              columnIdxs.push(columnIdx);
            }
          }
        }

        return columnIdxs;
      },
      /**
       * Return the column key for column index.
       * @param {number} columnIdx column index
       * @return {Object} column key
       * @private
       */
      _getColumnKeyForColumnIdx: function(columnIdx)
      {
        var columns = this._getColumnDefs();
      
        if (columns != null && columnIdx < columns.length)
        {
          return columns[columnIdx]['id'];
        }
        return null;
      },
      /**
       * Return the column renderer
       * @param {number} columnIdx  column index
       * @param {String} type  renderer type
       * @return {Object} renderer
       * @private
       */
      _getColumnRenderer: function(columnIdx, type)
      {
        var columns = this._getColumnDefs();
        var column = columns[columnIdx];
        
        if (type == 'cell')
        {
          return column['renderer'];
        }
        else if (type == 'footer')
        {
          return column['footerRenderer'];
        }
        else if (type == 'header')
        {
          return column['headerRenderer'];
        }

        return null;
      },
      /**
       * Get the current row.
       * @return {Object|null} current row object or null if none.
       * @throws {Error}
       * @private
       */
      _getCurrentRow: function()
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return null;
        }
        return this._currentRow;
      },
      /**
       * Return the datasource object defined for this table
       * @return {Object} Datasource object.
       * @throws {Error}
       * @private
       */
      _getData: function()
      {
        if (!this._data && this.options.data != null)
        {
          var data = this.options.data;
          if (data instanceof oj.TableDataSource ||
              data instanceof oj.PagingTableDataSource)
          {
            this._data = data;
          }
          else
          {
            // we only support TableDataSource
            var errSummary = this._LOGGER_MSG._ERR_DATA_INVALID_TYPE_SUMMARY;
            var errDetail = this._LOGGER_MSG._ERR_DATA_INVALID_TYPE_DETAIL;
            throw new Error(errSummary + '\n' + errDetail);
          }
          this._dataMetadata = this.options.data;
          this._registerDataSourceEventListeners();
          
          // do an initial fetch if not a PagingTableDataSource
          // paging control should do the fetches for PagingTableDataSource
          if (data instanceof oj.TableDataSource)
          {
            var self = this;
            setTimeout(function(){
              if (self._data.size() == 0)
              {
                self._getData().fetch({'fetchType': 'init'});
              }
            }, 0);
          }
        }
        return this._data;
      },
      /**
       * Get the focused column header index
       * @return {number|null} the column index
       * @private
       */
      _getFocusedHeaderColumnIdx: function()
      {
        // focused column headers have the focused style class. There should only be one focused header
        return this._getColumnIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Get the focused row index
       * @return {number|null} the row index
       * @private
       */
      _getFocusedRowIdx: function()
      {
        // focused rows have cells with focused style class. There should only be one focused row
        return this._getRowIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS)[0];
      },
      /**
       * Return whether the column header at the index is focused
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's focused
       * @private
       */
      _getHeaderColumnFocus: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).focused;
      },
      /**
       * Return whether the column header at the index is selected
       * @param {number} columnIdx  column index
       * @return {boolean} whether it's selected
       * @private
       */
      _getHeaderColumnSelection: function(columnIdx)
      {
        return this._getHeaderColumnState(columnIdx).selected;
      },
      /**
       * Return the column selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getColumnSelectionMode: function()
      {
        var columnSelectionMode = this.options.selectionMode == null ? null : this.options.selectionMode['column'];
        return columnSelectionMode;
      },
      /**
       * Return the state of the column header at a partiocular index
       * @param {number} columnIdx  column index
       * @return {Object} Object which contains booleans focused and selected
       * @private
       */
      _getHeaderColumnState: function(columnIdx)
      {
        var headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        return {focused: headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS),
          selected: headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED)};
      },
      /**
       * Return the currently pressed keyboard keys
       * @return {Array} Array of keyCodes
       * @private
       */
      _getKeyboardKeys: function()
      {
        if (!this._keyboardKeys)
        {
          this._keyboardKeys = [];
        }

        // reverse the array since we want the keybaord keys to be a LIFO stack
        return this._keyboardKeys.reverse();
      },
      /**
       * Return the last column which was selected (chronologically)
       * @return {number|null} last selected column
       * @private
       */
      _getLastHeaderColumnSelection: function()
      {
        if (this._lastSelectedColumnIdxArray != null &&
          this._lastSelectedColumnIdxArray.length > 0)
        {
          return this._lastSelectedColumnIdxArray[0];
        }
        return null;
      },
      /**
       * Return the last row which was selected (chronologically)
       * @return {number|null} last selected row
       * @private
       */
      _getLastRowSelection: function()
      {
        if (this._lastSelectedRowIdxArray != null &&
          this._lastSelectedRowIdxArray.length > 0)
        {
          return this._lastSelectedRowIdxArray[0];
        }
        return null;
      },
      /**
       * Get the element from an array of elements according to type
       * @param {Object} elements  Array of jquery elements
       * @param {string} type  DOM type
       * @return {Object|null} element
       * @private
       */
      _getJQueryElement: function(elements, type)
      {
        var i;
        for (i = 0; i < $(elements).length; i++)
        {
          if ($($(elements)[i]).is(type))
          {
            return $(elements)[i];
          }
        }
        return null;
      },
      /**
       * Return whether the row is focused
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is focused
       * @private
       */
      _getRowFocus: function(rowIdx)
      {
        return this._getTableDomUtils().getTableBodyRow(rowIdx).hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
      },
      /**
       * Return whether the row is hovered
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is hovered
       * @private
       */
      _getRowHover: function(rowIdx)
      {
        return this._getTableDomUtils().getTableBodyRow(rowIdx).hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
      },
      /**
       * Return the row index for row key. Only loop through displayed rows.
       * @param {Object} rowKey row key
       * @return {number|null} row index
       * @private
       */
      _getRowIdxForRowKey: function(rowKey)
      {
        var data = this._getData();
      
        if (data != null)
        {
          var startIndex = data.startIndex();
          var endIndex = startIndex + data.size();
          var i, row, rowIdx;
          for (i = startIndex; i < endIndex; i++)
          {
            rowIdx = i - startIndex;
            row = data.at(i);
            if (row != null && 
                (row instanceof oj.Row) && 
                oj.Object.compareValues(row['id'], rowKey))
            {
              return rowIdx;
            }
          }
        }
        return null;
      },
      /**
       * Return all the row indexes for elements with a particular style class
       * @param {string} styleClass  style class
       * @return {Array} Array of row indexes
       * @private
       */
      _getRowIdxsForElementsWithStyleClass: function(styleClass)
      {
        var elements = this._getTableDomUtils().getTable().find(styleClass);
        var rowIdxs = [];
        if (elements && elements.length > 0)
        {
          var i, j, rowIdx, alreadyAdded;
          for (i = 0; i < elements.length; i++)
          {
            rowIdx = this._getTableDomUtils().getElementRowIdx($(elements.get(i)));

            alreadyAdded = false;
            for (j = 0; j < rowIdxs.length; j++)
            {
              if (rowIdxs[j] == rowIdx)
              {
                alreadyAdded = true;
              }
            }
            if (!alreadyAdded)
            {
              rowIdxs.push(rowIdx);
            }
          }
        }

        return rowIdxs;
      },
      /**
       * Return the row key for row index.
       * @param {number} rowIdx row index
       * @return {Object} row key
       * @private
       */
      _getRowKeyForRowIdx: function(rowIdx)
      {
        var data = this._getData();
      
        if (data != null)
        {
          var row = data.at(rowIdx);
          if (row != null && (row instanceof oj.Row))
          {
            return row['id'];
          }
        }
        return null;
      },
      /**
       * Return the row renderer
       * @return {Object} renderer
       * @private
       */
      _getRowRenderer: function()
      {
        return this.options['rowRenderer'];
      },
      /**
       * Return whether the row is selected
       * @param {number} rowIdx  row index
       * @return {boolean} whether the row is selected
       * @private
       */
      _getRowSelection: function(rowIdx)
      {
        return this._getTableDomUtils().getTableBodyRow(rowIdx).hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the row selection mode
       * @return {string|null} single, multiple, or null
       * @private
       */
      _getRowSelectionMode: function()
      {
        var rowSelectionMode = this.options['selectionMode'] == null ? null : this.options['selectionMode']['row'];
        return rowSelectionMode;
      },
      /**
       * Return the selected column header indexes
       * @return {Array} array of column header indexes
       * @private
       */
      _getSelectedHeaderColumnIdxs: function()
      {
        // selected column headers have the selected css class
        return this._getColumnIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Return the selected row indexes
       * @return {Array} array of row indexes
       * @private
       */
      _getSelectedRowIdxs: function()
      {
        // selected rows have the selected css class
        return this._getRowIdxsForElementsWithStyleClass('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS + '.' + oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
      },
      /**
       * Gets the selection
       * @private	 
       */
      _getSelection: function()
      {
        var data = this._getData();
        var startIndex = data != null ? data.startIndex() : 0;
        var selectedRowIdxs = this._getSelectedRowIdxs();
        var selectedColumnIdxs = this._getSelectedHeaderColumnIdxs();
        var selectionIdxs = null;
        var rowSelection = true;
        if (selectedRowIdxs != null && selectedRowIdxs.length > 0)
        {
          selectionIdxs = selectedRowIdxs;
        }
        else if (selectedColumnIdxs != null && selectedColumnIdxs.length > 0)
        {
          selectionIdxs = selectedColumnIdxs;
          rowSelection = false;
        }
        else
        {
          return null;
        }

        var rangeArray = [];

        // first count the number of ranges we have by seeing how many
        // non-continguous selections we have
        var rangeCount = 0;
        var previousIdx = null;
        var rangeObj, selectionIdx, selectionKey;
        var i;
        for (i = 0; i < selectionIdxs.length; i++)
        {
          selectionIdx = selectionIdxs[i] + startIndex;
          if (i == 0)
          {
            rangeObj = [];
            rangeObj['startIndex'] = [];
            rangeObj['endIndex'] = [];
            rangeObj['startKey'] = [];
            rangeObj['endKey'] = [];
            if (rowSelection)
            {
              rangeObj['startIndex']['row'] = selectionIdx;
              rangeObj['endIndex']['row'] = selectionIdx;
              selectionKey = this._getRowKeyForRowIdx(selectionIdx);
              rangeObj['startKey']['row'] = selectionKey;
              rangeObj['endKey']['row'] = selectionKey;
            }
            else
            {
              rangeObj['startIndex']['column'] = selectionIdx;
              rangeObj['endIndex']['column'] = selectionIdx;
              selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
              rangeObj['startKey']['column'] = selectionKey;
              rangeObj['endKey']['column'] = selectionKey;
            }
            rangeArray[0] = rangeObj;
          }
          else
          {
            rangeObj = rangeArray[rangeCount];
            if (rowSelection)
            {
              rangeObj['endIndex']['row'] = selectionIdx;
              selectionKey = this._getRowKeyForRowIdx(selectionIdx);
              rangeObj['endKey']['row'] = selectionKey;
            }
            else
            {
              rangeObj['endIndex']['column'] = selectionIdx;
              selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
              rangeObj['endKey']['column'] = selectionKey;
            }
            if (selectionIdx != previousIdx + 1)
            {
              if (rowSelection)
              {
                rangeObj['endIndex']['row'] = previousIdx;
                selectionKey = this._getRowKeyForRowIdx(previousIdx);
                rangeObj['endKey']['row'] = selectionKey;
                rangeObj = [];
                rangeObj['startIndex'] = [];
                rangeObj['endIndex'] = [];
                rangeObj['startKey'] = [];
                rangeObj['endKey'] = [];
                rangeObj['startIndex']['row'] = selectionIdx;
                rangeObj['endIndex']['row'] = selectionIdx;
                selectionKey = this._getRowKeyForRowIdx(selectionIdx);
                rangeObj['startKey']['row'] = selectionKey;
                rangeObj['endKey']['row'] = selectionKey;
              }
              else
              {
                rangeObj['endIndex']['column'] = previousIdx;
                selectionKey = this._getColumnKeyForColumnIdx(previousIdx);
                rangeObj['endKey']['column'] = selectionKey;
                rangeObj = [];
                rangeObj['startIndex'] = [];
                rangeObj['endIndex'] = [];
                rangeObj['startKey'] = [];
                rangeObj['endKey'] = [];
                rangeObj['startIndex']['column'] = selectionIdx;
                rangeObj['endIndex']['column'] = selectionIdx;
                selectionKey = this._getColumnKeyForColumnIdx(selectionIdx);
                rangeObj['startKey']['column'] = selectionKey;
                rangeObj['endKey']['column'] = selectionKey;
              }
              rangeCount++;
              rangeArray[rangeCount] = rangeObj;
            }
          }
          previousIdx = selectionIdx;
        }
        return rangeArray;
      },
      /**
       * Return the currnetly sorted column index
       * @return {number|null} column index
       * @private
       */
      _getSortedTableHeaderColumnIdx: function()
      {
        var tableHeaderColumns = this._getTableDomUtils().getTableHeaderColumns();

        var i, sorted;
        for (i = 0; i < tableHeaderColumns.length; i++)
        {
          // sorted column will have the sorted data attr
          sorted = $(tableHeaderColumns[i]).data('sorted');

          if (sorted != null)
          {
            return i;
          }
        }
        return null;
      },
      /**
       * Get tabbable elements within the element
       * @param {jQuery} element  DOM element
       * @return {jQuery|null} jQuery array of DOM elements
       * @private
       */
      _getTabbableElements: function(element)
      {
        var tabbableElements = element.find(':tabbable');

        if (tabbableElements != null && tabbableElements.length > 0)
        {
          return tabbableElements;
        }
        return null;
      },
      /**
       * Return table DOM utils instance
       * @return {Object} instance of table DOM utils
       * @private
       */
      _getTableDomUtils: function()
      {
        if (!this._tableDomUtils)
        {
          this._tableDomUtils = new oj.TableDomUtils(this);
        }
        return this._tableDomUtils;
      },
      /**
       * Return the number of DOM rows in the table
       * @return {number} row count.
       * @private
       */
      _getTableRowCount: function()
      {
        var rows = this._getTableDomUtils().getTableBodyRows();

        if (rows != null)
        {
          return rows.length;
        }
        return 0;
      },
      /**
       * Handle an ojbeforeopen event on the context menu. Set the position correctly for keyboard events and store the Keyboard/Mouse event that called the context menu
       * @private	 
       */
      _handleContextMenuBeforeShow: function(event, ui)
      {
        var contextMenu = this._getTableDomUtils().getContextMenu();

        this._contextMenuEvent = event['originalEvent']['originalEvent'];
        
        // first check if we are invoking on an editable or clickable element If so bail
        if (this._isNodeEditableOrClickable($(this._contextMenuEvent['target'])))
        {
          return false;
        }
        
        // TODO: Rather than setting "position" in this beforeOpen listener, probably better to 
        // override _OpenContextMenu() and pass "position" in its call to menu.open().  That way, 
        // if the app wants to tweak the position in its beforeOpen listener, its success 
        // doesn't depend on who gets their listeners registered first.
        if (this._contextMenuEvent['type'] === 'keydown')
        {
          ui.openOptions.position = {"my": "start top", "at": "start bottom", "of": this._contextMenuEvent['target']};
        }
        else
        {
          ui.openOptions.position = {"my": "start top", "at": "start bottom"};
        }
        
        var headerColumn = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header-cell');
        headerColumn = headerColumn == null ? this._getTableDomUtils().getTableHeaderColumn(this._activeColumnIndex) : headerColumn;
        var tableBodyCell = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        
        if (tableBodyCell != null)
        {
          var columnIdx = this._getTableDomUtils().getElementColumnIdx(tableBodyCell);
          headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
        }

        if (headerColumn.attr('data-oj-sortable') == this._OPTION_ENABLED)
        {
          this._getTableDomUtils().getContextMenu().find('[data-oj-command=oj-table-sortAsc]').removeClass('oj-disabled');
          this._getTableDomUtils().getContextMenu().find('[data-oj-command=oj-table-sortDsc]').removeClass('oj-disabled');
        }
        else
        {
          this._getTableDomUtils().getContextMenu().find('[data-oj-command=oj-table-sortAsc]').addClass('oj-disabled');
          this._getTableDomUtils().getContextMenu().find('[data-oj-command=oj-table-sortDsc]').addClass('oj-disabled');
          
          return false;
        }
      },
      /**
       * Handle an ojselect event on a menu item, if sort call the handler on the core.
       * If resize prompt the user with a dialog box
       * @private	 
       */
      _handleContextMenuSelect: function(event, ui)
      {
        var menuItemCommand = ui.item.attr('data-oj-command');
        var headerColumn = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-column-header-cell');
        var tableBodyCell = this._getTableDomUtils().getFirstAncestor($(this._contextMenuEvent['target']), 'oj-table-data-cell');
        var columnIdx = null;
        
        if (headerColumn != null)
        {
          columnIdx = this._getTableDomUtils().getElementColumnIdx(headerColumn);
        }
        if (tableBodyCell != null)
        {
          columnIdx = this._getTableDomUtils().getElementColumnIdx(tableBodyCell);
        }
        if (menuItemCommand == 'oj-table-sortAsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, true);
        }
        else if (menuItemCommand == 'oj-table-sortDsc')
        {
          this._handleSortTableHeaderColumn(columnIdx, false);
        }
      },
      /**
       * Callback handler for data error.
       * @param {Object} error 
       * @private
       */
      _handleDataError: function(error)
      {
        this._hideStatusMessage();
        oj.Logger.error(error);
      },
      /**
       * Callback handler for fetch start in the datasource.
       * @param {Object} event 
       * @private
       */
      _handleDataFetchStart: function(event)
      {
        this._showStatusMessage();
        this._dataFetching = true;
      },
      /**
       * Callback handler for fetch completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions if refresh == true. Hide the Fetching Data... 
       * status message.
       * @param {Object} event
       * @private
       */
      _handleDataFetchEnd: function(event)
      {
        try {
            if (this._dataFetching && this._dataSorting) {
                this._dataFetching = false;
                this._dataSorting = false;
                this._handleDataSort();
            }
            else {
                var refresh = event['refresh'];

                if (refresh)
                {
                  this._refreshAll(true);
                }
            }
            this._hideStatusMessage();
        }
        catch (e) {
            throw e;
        }
        finally {
            this._dataFetching = false;
            this._dataSorting = false;
        }
      },
      /**
       * Callback handler for reset in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions.
       * @param {Object} event 
       * @private
       */
      _handleDataReset: function(event)
      {
        this._hideStatusMessage();
        this._refreshAll();
        this._setCurrentRow(null, null);
      },
      /**
       * Callback handler for rows added into the datasource. Add a new tr and refresh the DOM
       * at the row index and refresh the table dimensions to accomodate the new
       * row
       * @param {Object} event
       * @private
       */
      _handleDataRowAdd: function(event)
      {
        if (event && event.index !== undefined) {
            var rowIdx = event.index;
            var row = event;
            var data = this._getData();
            this._hideStatusMessage();

            var startIndex = data.startIndex();
            var endIndex = startIndex + data.size() - 1;

            if (rowIdx != null && (rowIdx < startIndex || rowIdx > endIndex))
            {
              // we're getting an add event for a row which is not in the current
              // display range
              return;
            }
            // insert the <tr> element in to the table body DOM
            if (rowIdx >= 0)
            {
              rowIdx = rowIdx - startIndex;
            }
            this._queueTableBodyRowOperation(oj.TableDataSource.EventType['ADD'], rowIdx, row);
        }
      },
      /**
       * Callback handler for row change in the datasource. Refresh the changed
       * row.
       * @param {Object} event
       * @private
       */
      _handleDataRowChange: function(event)
      {
        var rowIdx = event.index;
        var row = event;
        var data = this._getData();
        this._hideStatusMessage();
        
        var startIndex = data.startIndex();
        var endIndex = startIndex + data.size() - 1;
        
        if (rowIdx != null && (rowIdx < startIndex || rowIdx > endIndex))
        {
          // we're getting a change event for a row which is not in the current
          // display range
          return;
        }
        if (rowIdx >= 0)
        {
          rowIdx = rowIdx - startIndex;
        }
        this._queueTableBodyRowOperation(oj.TableDataSource.EventType['CHANGE'], rowIdx, row);
      },
      /**
       * Callback handler for row removed in the datasource. Remove the row DOM from the
       * table body by searching for the matching rowKey. New rows will have null rowKey.
       * After removing the row, refresh all the remaining row indexes since
       * they will have shifted. Lastly, refresh the table dimensions
       * @param {Object} event
       * @private
       */
      _handleDataRowRemove: function(event)
      {
        var rowIdx = event.index;
        var row = event;
        var data = this._getData();
        this._hideStatusMessage();
        var startIndex = data.startIndex();
        rowIdx = rowIdx - startIndex;
        this._queueTableBodyRowOperation(oj.TableDataSource.EventType['REMOVE'], rowIdx, row);
      },
      /**
       * Callback handler for sort completed in the datasource. Refresh entire
       * table body DOM and refresh the table dimensions. Set row focus to the
       * current row.
       * @param {Object} event 
       * @private
       */
      _handleDataSort: function(event)
      {
        if (!this._dataFetching) {
            this._hideStatusMessage();
            this._refreshTableBody();
            this._getTableDomUtils().refreshTableDimensions(true);
            // clear row selection
            this._clearSelectedRows();
            this['options']['selection'] = null;
            // set the current row
            this._setCurrentRow(this._currentRow, null);
        }
      },
      /**
       * Handler for Left/Right keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownLeftRight: function(event)
      {
        // pressing left/right navigates the column headers
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
        var columns = this._getColumnDefs();

        if (focusedHeaderColumnIdx != null)
        {
          var newFocusedHeaderColumnIdx = focusedHeaderColumnIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_LEFT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx > 0 ? focusedHeaderColumnIdx - 1 : focusedHeaderColumnIdx;
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_RIGHT))
          {
            newFocusedHeaderColumnIdx = focusedHeaderColumnIdx < columns.length - 1 ? focusedHeaderColumnIdx + 1 : focusedHeaderColumnIdx;
          }

          if (newFocusedHeaderColumnIdx != focusedHeaderColumnIdx)
          {
            this._setHeaderColumnFocus(newFocusedHeaderColumnIdx, true, false, null);

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedHeaderColumnSelection = this._getHeaderColumnSelection(newFocusedHeaderColumnIdx);
              // we may be clearing or setting the selection
              this._setHeaderColumnSelection(newFocusedHeaderColumnIdx, !newFocusedHeaderColumnSelection, null, event);
              // if we are clearing the selection, then clear the previous column too.
              if (newFocusedHeaderColumnSelection)
              {
                if (this._getHeaderColumnSelection(focusedHeaderColumnIdx))
                {
                  this._setHeaderColumnSelection(focusedHeaderColumnIdx, false, null, event);
                }
              }
            }
          }
        }
      },
      /**
       * Handler for Tab keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownTab: function(event)
      {
        // if Tab is pressed while a row has focus then we 
        // want to Tab within that row and then go to the 
        // next row until Esc is pressed
        var tabHandled = false;
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null && this._isTableNavigationMode())
        {

          var tableBody = this._getTableDomUtils().getTableBody();
          var tabbableElementsInBody = this._getTabbableElements(tableBody);
          // only bother if there are any tabbable elements
          if (tabbableElementsInBody != null)
          {
            tabHandled = true;
            var currentFocusElement = document.activeElement;

            var isCurrentlyFocused = false;
            var i, tableBodyRow, tabbableElementsInRow;
            for (i = 0; i < tabbableElementsInBody.length; i++)
            {
              if (currentFocusElement == tabbableElementsInBody[i])
              {
                isCurrentlyFocused = true;
                break;
              }
            }
            // if already focused on an element in the body, then
            // don't do anything
            if (isCurrentlyFocused)
            {
              return;
            }
            else if (!event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              tableBodyRow = this._getTableDomUtils().getTableBodyRow(focusedRowIdx);
              tabbableElementsInRow = this._getTabbableElements(tableBodyRow);

              if (tabbableElementsInRow != null)
              {
                $(tabbableElementsInRow[0]).focus();
              }
              else
              {
                // if there are no tabbable elements
                // in the row then focus on the first 
                // tabbable element in the body
                $(tabbableElementsInBody[0]).focus();
              }
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
        
        if (!tabHandled)
        {
          // tab out of the component to the next tabbable
          // element on the page
          var table = this._getTableDomUtils().getTable();
          var tabbableElementsInDocument = this._getTabbableElements($(document));
          var tabbableElementsInTable = this._getTabbableElements(table);
          var tabbableElementsInTableCount = tabbableElementsInTable != null ? tabbableElementsInTable.length : 0;
          var tableTabIndex = tabbableElementsInDocument.index(this._getTableDomUtils().getTable());
          if (!event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
          {
            $(tabbableElementsInDocument[tableTabIndex + tabbableElementsInTableCount + 1]).focus();
          }
          else
          {
            $(tabbableElementsInDocument[tableTabIndex - 1]).focus();
          }
          event.preventDefault();
          event.stopPropagation();
        }
        // we need to remove Tab on keydown because we may not
        // get a keyup for it if focus moves
        // outside of table
        this._removeKeyboardKey(event.keyCode);
      },
      /**
       * Handler for Up/Down keydown.
       * @param {Object} event
       * @private
       */
      _handleKeydownUpDown: function(event)
      {
        var focusedRowIdx = this._getFocusedRowIdx();
        var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedRowIdx != null)
        {
          // if row is focused then up/down navigates the rows
          var data = this._getData();
          var newFocusedRowIdx = focusedRowIdx;

          if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            if (focusedRowIdx > 0)
            {
              newFocusedRowIdx = focusedRowIdx - 1;
            }
            else
            {
              newFocusedRowIdx = focusedRowIdx;
            }
          }
          else if (this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
          {
            newFocusedRowIdx = focusedRowIdx < data.size() - 1 ? focusedRowIdx + 1 : focusedRowIdx;
          }

          if (newFocusedRowIdx != focusedRowIdx)
          {
            this._setRowFocus(newFocusedRowIdx, true, null, event);

            if (event[this._KEYBOARD_CODES._KEYBOARD_MODIFIER_SHIFT])
            {
              // if shift is also pressed then we need to select too
              var newFocusedRowSelection = this._getRowSelection(newFocusedRowIdx);
              // we may be clearing or setting the selection
              this._setRowSelection(newFocusedRowIdx, !newFocusedRowSelection, null, event);
              // if we are clearing the selection, then clear the previous row too.
              if (newFocusedRowSelection)
              {
                if (this._getRowSelection(focusedRowIdx))
                {
                  this._setRowSelection(focusedRowIdx, false, null, event);
                }
              }
            }
          }
          // if user is on the first row and presses up the focus on the first column header
          else if (newFocusedRowIdx == focusedRowIdx &&
            focusedRowIdx == 0 &&
            this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_UP))
          {
            this._setHeaderColumnFocus(0, true, false, null);
          }
        }
        // if user is on a column header and pressed down then focus on the first row
        else if (focusedHeaderColumnIdx != null &&
          this._isKeyboardKeyPressed(this._KEYBOARD_CODES._KEYBOARD_CODE_DOWN))
        {
          this._setRowFocus(0, true, null, event);
        }
      },
      /**
       * Handler for End keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnd: function(event)
      {
        // pressing End focuses on last column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null &&
          focusedColumnIdx != this._getColumnDefs().length - 1)
        {
          this._setHeaderColumnFocus(this._getColumnDefs().length - 1, true, false, null);
        }
      },
      /**
       * Handler for Enter keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEnter: function(event)
      {
        // pressing enter does sort on the focused column header
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && this._getColumnDefs()[focusedColumnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(focusedColumnIdx);
          var sorted = tableHeaderColumn.data('sorted');
          // if not already sorted then sort ascending. If already sorted
          // ascending then do descending sort and vice versa.
          if (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING)
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, true);
          }
          else
          {
            this._handleSortTableHeaderColumn(focusedColumnIdx, false);
          }
        }
      },
      /**
       * Handler for Esc keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupEsc: function(event)
      {
        // pressing Esc always returns focus back to the table.
        // This is for when users are tabbing through focuable
        // elements and need to get back to general table nav
        event.preventDefault();
        event.stopPropagation();
        this._getTableDomUtils().getTable().focus();
        this._setTableNavigationMode(false);
      },
      /**
       * Handler for Home keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupHome: function(event)
      {
        // pressing Home focuses on first column
        var focusedColumnIdx = this._getFocusedHeaderColumnIdx();

        if (focusedColumnIdx != null && focusedColumnIdx != 0)
        {
          this._setHeaderColumnFocus(0, true, false, null);
        }
      },
      /**
       * Handler for Spacebar keyup.
       * @param {Object} event
       * @private
       */
      _handleKeyupSpacebar: function(event)
      {
        // pressing spacebar selects the focused row/column
        var focusedRowIdx = this._getFocusedRowIdx();

        if (focusedRowIdx != null)
        {
          this._setRowSelection(focusedRowIdx, !this._getRowSelection(focusedRowIdx), null, event);
        }
        else
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null)
          {
            this._clearSelectedRows();
            this._setHeaderColumnSelection(focusedHeaderColumnIdx, !this._getHeaderColumnSelection(focusedHeaderColumnIdx), null, event);
          }
        }
      },
      /**
       * Handler for column sort
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _handleSortTableHeaderColumn: function(columnIdx, ascending)
      {
        // clear the sorted indicator on any other column
        this._clearSortedHeaderColumn(columnIdx);
        // get the column metadata
        var column = this._getColumnDefs()[columnIdx];
        // get which field to sort on
        var sortField = column['sortProperty'] == null ? column['field'] : column['sortProperty'];
        // get the column header DOM element
        var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
        // invoke sort on the data
        this._invokeDataSort(sortField, ascending, null);
        this._sortColumn = column;

        if (ascending)
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._ASCENDING);
          var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
          headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
          headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
          headerColumnAsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
          headerColumnDsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
        }
        else
        {
          // store sort order on the DOM element
          tableHeaderColumn.data('sorted', this._COLUMN_SORT_ORDER._DESCENDING);
          var headerColumnDscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
          headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
          headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
          headerColumnDsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
          headerColumnAsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
        }
        this._hideTableHeaderColumnSortLink(columnIdx, !ascending);
      },
      /**
       * Hide the 'No data to display.' message.
       * @private
       */
      _hideNoDataMessage: function()
      {
        var noDataMessage = this._getTableDomUtils().getTableNoDataMessage();
        noDataMessage.css('display', 'none');
      },
      /**
       * Hide the Fetching Data... status message.
       * @private
       */
      _hideStatusMessage: function()
      {
        var statusMessage = this._getTableDomUtils().getTableStatusMessage();
        statusMessage.css('display', 'none');
      },
      /**
       * Hide the column header sort link
       * @param {number} columnIdx  column index
       * @param {boolean} ascending  sort order ascending
       * @private
       */
      _hideTableHeaderColumnSortLink: function(columnIdx, ascending)
      {
        // check if the column is sortable. If not, then there won't be any sort links
        if (this._getColumnDefs()[columnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);
          // check if the column is currently sorted
          var sorted = tableHeaderColumn.data('sorted');

          // we should only hide the ascending sort link if the column is not sorted or
          // is sorted by descending order
          if (ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._DESCENDING))
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
          // we should only hide the descending sort link if the column is not sorted or
          // is sorted by ascending order
          else if (!ascending && (sorted == null || sorted == this._COLUMN_SORT_ORDER._ASCENDING))
          {
            var headerColumnDscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
            headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnDscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Invoke sort on a field. This function is called when a user clicks the 
       * column header sort links
       * @param {string} sortField  field name
       * @param {boolean} ascending  sort order ascending
       * @param {jQuery} element  DOM element which triggered the sort
       * @private
       */
      _invokeDataSort: function(sortField, ascending, element)
      {
        var data = this._getData();
        // if no data then bail
        if (!data)
        {
          return null;
        }

        // show the Fetching Data... message
        this._showStatusMessage();
        
        var sortCriteria = {};
        sortCriteria['key'] = sortField;

        // the sort function on the datasource takes comparators
        if (ascending)
        {
          sortCriteria['direction'] = this._COLUMN_SORT_ORDER._ASCENDING;
          data.sort(sortCriteria);
        }
        else
        {
          sortCriteria['direction'] = this._COLUMN_SORT_ORDER._DESCENDING;
          data.sort(sortCriteria);
        }
      },
      /**
       * Whether the columns have been updated
       * @return {boolean} true or false
       * @private
       */
      _isColumnMetadataUpdated: function()
      {
        if (this._columnDefArray != null)
        {
          var columnsMetadata = this._getColumnMetadata();
          if (this._columnDefArray.length != columnsMetadata.length)
          {
            return true;
          }
          else
          {
            var i, prop;
            for (i = 0; i < columnsMetadata.length; i++)
            {
              for (prop in columnsMetadata[i]) {
                if (columnsMetadata[i].hasOwnProperty(prop)) {
                  if (columnsMetadata[i][prop] != this._columnDefArray[i][prop])
                  {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
        return true;
      },
      /**
       * Whether the focus is on the table or descendent focusable element
       * @return {boolean} true or false
       * @private
       */
      _isFocused: function()
      {
        // set focus on the table
        var currentFocusElement = $(document.activeElement);
        var table = this._getTableDomUtils().getTable();
        if (table[0] != currentFocusElement[0] &&
          table.has(currentFocusElement).length == 0)
        {
          return false;
        }
        return true;
      },
      /**
       * Is keybaord key pressed
       * @param {number} keyCode  KeyCode of the keyboard key.
       * @return {boolean} true or false
       * @private
       */
      _isKeyboardKeyPressed: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            return true;
          }
        }
        return false;
      },
      /**
       * Return whether the node is editable or clickable
       * @param {jQuery} node  Node
       * @return {boolean} true or false
       * @private	 
       */
      _isNodeEditableOrClickable: function(node)
      {
        var nodeName;
        var table = this._getTableDomUtils().getTable();

        while (null != node && node[0] != table[0] &&
          (nodeName = node.prop("nodeName")) != "TD" && nodeName != "TH")
        {
          // If the node is a text node, move up the hierarchy to only operate on elements
          // (on at least the mobile platforms, the node may be a text node)
          if (node[0].nodeType == 3) // 3 is Node.TEXT_NODE
          {
            node = node[0].parentNode;
            continue;
          }

          var tabIndex = node.attr('tabIndex');

          if (tabIndex != null && tabIndex >= 0)
          {
            return true;
          }
          else if (nodeName.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/))
          {
            // ignore elements with tabIndex == -1
            if (tabIndex != -1)
            {
              return true;
            }
          }
          node = node.parentNode;
        }
        return false;
      },
      /**
       * Returns whether the table is footerless
       * @return {boolean} true or false
       * @private
       */
      _isTableFooterless: function()
      {
        var columns = this._getColumnDefs();
        var i, footerRenderer;
        
        for (i = 0; i < columns.length; i++)
        {
          footerRenderer = this._getColumnRenderer(i, 'footer');
          if (footerRenderer != null)
          {
            return false
          }
        }
        return true;
      },
      /**
       * Returns whether the table is headerless
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderless: function()
      {
        var columns = this._getColumnDefs();

        var i, j;
        for (i = 0; i < columns.length; i++)
        {
          if (columns[i]['headerText'] != null ||
            columns[i]['headerStyle'] != null ||
            (columns[i]['sortable'] != null &&
              columns[i]['sortable'] != this._OPTION_NONE) ||
            columns[i]['sortProperty'] != null ||
            columns[i]['headerRenderer'] != null)
          {
            return false;
          }
        }
        
        return true;
      },
      /**
       * Returns whether the table header columns were rendered
       * @return {boolean} true or false
       * @private
       */
      _isTableHeaderColumnsRendered: function()
      {
        return this._renderedTableHeaderColumns == true;
      },
      /**
       * Return whether the component is in table navigation mode
       * @return {boolean} true or false
       * @private
       */
      _isTableNavigationMode: function()
      {
        return this._tableNavMode;
      },
      /**
       * Returns whether the table refresh is needed based on option change
       * @param {string} key option key
       * @param {Object} value option value
       * @return {boolean} true or false
       * @private
       */
      _isTableRefreshNeeded: function(key, value)
      {
        var currentOptions = this.options;
        if (key != 'selection' && !oj.Object.compareValues(value, currentOptions[key]))
        {
          return true;
        }
        
        return false;
      },
      /**
       * Queue row operation
       * @param {string} eventType  event type
       * @param {number} rowIdx  row index
       * @param {Object} row  oj.Row
       * @private
       */
      _queueTableBodyRowOperation: function(eventType, rowIdx, row)
      {
        var self = this;
        if (!this._rowOperationQueue)
        {
          this._rowOperationQueue = [];
        }
        var executeImmediate = false;
        
        var lastOperation = this._rowOperationQueue[this._rowOperationQueue.length - 1];

        if (lastOperation != null)
        {
          var lastOperationEventType = lastOperation.eventType;

          if (lastOperationEventType != eventType)
          {
            this._executeQueuedTableBodyRowOperations();
            executeImmediate = true;
          }
        }
        
        if (this._queueExecutionTimer == null && !executeImmediate)
        {
          setTimeout(function() {
            self._executeQueuedTableBodyRowOperations();
            self._queueExecutionTimer = null;
          }, 0);
          this._queueExecutionTimer = true;
        }
        var i;
        var foundExisting = false;
        
        for (i = 0; i < this._rowOperationQueue.length; i++)
        {
          // Collapse duplicate operations
          if (this._rowOperationQueue[i].eventType == eventType &&
              this._rowOperationQueue[i].rowIdx == rowIdx && 
              this._rowOperationQueue[i].row == row)
            {
              this._rowOperationQueue[i] = {eventType: eventType, rowIdx: rowIdx, row: row};
              foundExisting = true;
            }
        }

        if (!foundExisting)
        {
          this._rowOperationQueue.push({eventType: eventType, rowIdx: rowIdx, row: row});
        }
      },
      /**
       * @param {boolean} immediate  refresh immediately
       * @private
       */
      _refreshAll: function(immediate)
      {
        this._refreshTableNoDataMessage();
        if (immediate)
        {
          // if we are doing an immediate refresh then execute any queued up
          // operations
          this._executeQueuedTableBodyRowOperations();
        }
        if (this._isColumnMetadataUpdated() ||
            (!this._isTableHeaderColumnsRendered() &&
            !this._isTableHeaderless()))
        {
          this._clearCachedMetadata();
          this._refreshTableHeader();
          
          // see if we need to clear the sort. If the column we sorted on is no
          // longer there then clear it.
          if (this._sortColumn != null)
          {
            var i, column;
            var foundColumn = false;
            var columns = this._getColumnDefs();
            if (columns != null)
            {
              for (i = 0; i < columns.length; i++)
              {
                column = columns[i];
                if (oj.Object.compareValues(column, this._sortColumn))
                {
                  foundColumn = true;
                  break;
                }
              }
              if (!foundColumn)
              {
                this._getData().sort(null);
              }
            }
          }
        }
        this._refreshTableFooter();
        this._refreshTableBody();
        // if the datasource is already doing a fetch then show the message
        if (this._getData() != null && this._getData().isFetching)
        {
          this._showStatusMessage();
        }
        this._getTableDomUtils().refreshTableDimensions(immediate);        
      },
      
      /**
       * Refresh the entire table body with data from the datasource
       * @private
       */
      _refreshTableBody: function()
      {
        var self = this;
        var tableBody = this._getTableDomUtils().getTableBody();
        var data = this._getData();
        var tableBodyRows = tableBody.children();
        var i;
        for (i = 0; i < tableBodyRows.length; i++)
        {
          this._removeTableBodyRow(0);
        }
        
        // if no data then bail
        if (!data || data.size() == 0 || this._getColumnDefs().length == 0)
        {
          this._showNoDataMessage();
        }
        else
        {
          this._hideNoDataMessage();
          this._getTableDomUtils().clearDelayedRenderRows();
          this._getTableDomUtils().clearDelayedRenderCells();
          var tableBodyDocFrag = $(document.createDocumentFragment());
          var startIndex = data.startIndex();
          var endIndex = startIndex + data.size();
          var j, row, rowIdx, columns, tableBodyRow;
          for (i = startIndex; i < endIndex; i++)
          {
            rowIdx = i - startIndex;
            row = data.at(i);
            if (row != null)
            {
              tableBodyRow = this._getTableDomUtils().createTableBodyRow(rowIdx);
              this._getTableDomUtils().styleTableBodyRow(tableBodyRow);
              this._getTableDomUtils().insertTableBodyRow(rowIdx, tableBodyRow, row, tableBodyDocFrag);
              if (row instanceof oj.Row)
              {
                this._refreshTableBodyRow(rowIdx, row, tableBodyRow, tableBodyDocFrag);
              }
              else
              {
                this._asyncRefreshTableBodyRow(row);
              }
            }
          }
          tableBody.append(tableBodyDocFrag);
          
          for (i = startIndex; i < endIndex; i++)
          {
            rowIdx = i - startIndex;
            this._getTableDomUtils().renderDelayedTableBodyRow(rowIdx);
            columns = this._getColumnDefs();
            for (j = 0; j < columns.length; j++)
            {
              this._getTableDomUtils().renderDelayedTableBodyCell(rowIdx, j);
            }
          }
          this._getTableDomUtils().clearDelayedRenderRows();
          this._getTableDomUtils().clearDelayedRenderCells();
        }
      },
      /**
       * Refresh the row at a particular index with the row data
       * @param {number} rowIdx  row index
       * @param {Object} row  oj.Row
       * @param {Object} tableBodyRow tr element
       * @param {Object} docFrag  document fragment
       * @private
       */
      _refreshTableBodyRow: function(rowIdx, row, tableBodyRow, docFrag)
      {
        var options = this.options;
        var rowRenderer = this._getRowRenderer();
        var columns = this._getColumnDefs();

        if (isNaN(rowIdx) || rowIdx < 0)
        {
          // validate rowIdx value
          oj.Logger.error('Error: Invalid rowIdx value: ' + rowIdx);
        }

        this._hideNoDataMessage();
        
        if (tableBodyRow == null)
        {
          // check if we already have a <tr> element at that index
          tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
          if (!tableBodyRow)
          {
            // if not return
            return;
          }
          else
          {
            tableBodyRow.empty();
            this._getTableDomUtils().createTableBodyCellAccSelect(rowIdx, tableBodyRow);
          }
        }

        // check if a row renderer was defined
        if (rowRenderer)
        {
          var rowContext = this._getTableDomUtils().getRendererContextObject(row, tableBodyRow[0]);
          var delayedRowObj = {};
          delayedRowObj.rowContext = rowContext;
          delayedRowObj.rowRenderer = rowRenderer;
          delayedRowObj.tableBodyRow = tableBodyRow;
          delayedRowObj.row = row;
          this._getTableDomUtils().addDelayedRenderRow(rowIdx, delayedRowObj);
          
          if (docFrag == null)
          {
            // if docFrag is null then render it immediately
            this._getTableDomUtils().renderDelayedTableBodyRow(rowIdx);
            this._getTableDomUtils().clearDelayedRenderRows();
          }
        }
        else
        {
          var j, column, cellContext, cellRenderer;
          for (j = 0; j < columns.length; j++)
          {
            column = columns[j];
            cellRenderer = this._getColumnRenderer(j, 'cell');
            // set the cells in the inserted row with values from the row
            this._getTableDomUtils().setTableBodyCell(rowIdx, j, tableBodyRow, row, cellRenderer);
            if (docFrag == null)
            {
              this._getTableDomUtils().renderDelayedTableBodyCell(rowIdx, j);
              this._getTableDomUtils().clearDelayedRenderCells();
            }
          }
        }
        this._selectionTimer = true;
      },
      /**
       * Refresh the table footer
       * @private
       */
      _refreshTableFooter: function()
      {
        var columns = this._getColumnDefs();
        var tableFooter = this._getTableDomUtils().getTableFooter();

        if (!tableFooter)
        {
          if (this._isTableFooterless())
          {
            return;
          }
          else
          {
            // metadata could have been updated to add column headers
            tableFooter = this._getTableDomUtils().createTableFooter();
            this._getTableDomUtils().styleTableFooter(tableFooter);
          }
        }

        var tableFooterRow = this._getTableDomUtils().getTableFooterRow();
        // remove all the existing footer cells
        tableFooterRow.empty();

        if (columns && columns.length > 0)
        {
          this._getTableDomUtils().createTableFooterAccSelect(tableFooterRow);
          
          var i, column, footerRenderer, footerCell, footerCellContent;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            footerRenderer = this._getColumnRenderer(i, 'footer');
            footerCell = this._getTableDomUtils().createTableFooterCell(i, this._getColumnSelectionMode());
            this._getTableDomUtils().styleTableFooterCell(i, footerCell);
            this._getTableDomUtils().insertTableFooterCell(i, footerCell);

            if (footerRenderer)
            {
              // if footerRenderer is defined then call that
              footerCellContent = footerRenderer({'footerContext': this._getTableDomUtils().getRendererContextObject(null, footerCell[0]),
                                                  'column': column});
              
              if (footerCellContent != null)
              {
                // if the renderer returned a value then we set it as the content
                // for the footer cell
                footerCell.empty();
                footerCell.append(footerCellContent);
              }
              else
              {
                // if the renderer didn't return a value then the existing
                // footer cell was manipulated. So get it and set the required
                // attributes just in case it was replaced or the attributes
                // got removed
                footerCell = $(tableFooterRow.children(':not(.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS + ')')[i]);
                this._getTableDomUtils().styleTableFooterCell(i, footerCell, this._getColumnSelectionMode());
              }
            }
          }
        }
      },
      /**
       * Refresh the table header
       * @private
       */
      _refreshTableHeader: function()
      {
        var columns = this._getColumnDefs();
        var tableHeader = this._getTableDomUtils().getTableHeader();

        if (!tableHeader)
        {
          if (this._isTableHeaderless())
          {
            return;
          }
          else
          {
            // metadata could have been updated to add column headers
            tableHeader = this._getTableDomUtils().createTableHeader();
            this._getTableDomUtils().styleTableHeader(tableHeader);
          }
        }

        var tableHeaderRow = this._getTableDomUtils().getTableHeaderRow();
        // remove all the existing column headers
        tableHeaderRow.empty();

        if (columns && columns.length > 0)
        {
          var tableHeaderAccSelectRowColumn = this._getTableDomUtils().createTableHeaderAccSelectRowColumn();
          tableHeaderRow.append(tableHeaderAccSelectRowColumn);

          var i, j, column, headerRenderer, headerColumn, headerColumnContent;
          for (i = 0; i < columns.length; i++)
          {
            column = columns[i];
            headerRenderer = this._getColumnRenderer(i, 'header');
            headerColumn = this._getTableDomUtils().createTableHeaderColumn(i, this._getColumnSelectionMode());
            this._getTableDomUtils().insertTableHeaderColumn(i, headerColumn);
            
            var headerColumnAsc = $(headerColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS)[0]);
            var headerColumnAscWidth = headerColumnAsc.width();
            var headerColumnAscHeight = headerColumnAsc.height();
            var headerColumnSortPlaceholder = $(headerColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_SORT_PACEHOLDER_CLASS)[0]);
            headerColumnSortPlaceholder.css('width', headerColumnAscWidth + 'px');
            headerColumnSortPlaceholder.css('height', headerColumnAscHeight + 'px');

            if (headerRenderer)
            {
              // if headerRenderer is defined then call that
              headerColumnContent = headerRenderer({'headerContext': this._getTableDomUtils().getRendererContextObject(null, headerColumn[0]),
                                                    'column': column});
              
              if (headerColumnContent != null)
              {
                // if the renderer returned a value then we set it as the content
                // for the headerColumn
                headerColumn.empty();
                headerColumn.append(headerColumnContent);
              }
              else
              {
                // if the renderer didn't return a value then the existing
                // headerColumn was manipulated. So get it and set the required
                // attributes just in case it was replaced or the attributes
                // got removed
                headerColumn = $(tableHeaderRow.children(':not(' + '.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS + ')')[i]);
                this._getTableDomUtils().setTableHeaderColumnAttributes(i, headerColumn);
                this._getTableDomUtils().styleTableHeaderColumn(i, headerColumn, this._getColumnSelectionMode());
              }
            }
            // set the acc column selection checkbox
            this._getTableDomUtils().createTableHeaderColumnAccSelect(i, this._getColumnSelectionMode());
          }
          this._renderedTableHeaderColumns = true;
        }
      },
      /**
       * Refresh the no data message
       * @private
       */
      _refreshTableNoDataMessage: function()
      {
        var tableNoDataMessage = this._getTableDomUtils().getTableNoDataMessage();
        tableNoDataMessage[0].parentNode.removeChild(tableNoDataMessage[0]);
        this._getTableDomUtils().createTableNoDataMessage();
      },
      /**
       * Register the events which will be published by the table component.
       * @private
       */
      _registerCustomEvents: function()
      {
        // ojtablecurrentrow handlers will be passed an object which contains the
        // old and new current row
        var jqEvent = (/** @type {{special: Object}} */($.event));
        var jqEventSpecial = jqEvent['special'];
        jqEventSpecial['ojtablecurrentrow'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtablebeforecurrentrow handlers will be passed an object which contains the
        // old and new current row
        jqEventSpecial['ojtablebeforecurrentrow'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtablescroll handlers will be passed an object which contains
        // the scrollTop and scrollLeft
        jqEventSpecial['ojtablescroll'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
        // ojtableselect handlers will be passed an object which contains
        // either the row or column index and the selectionAdded boolean which indicates whether
        // the selection was added or removed.
        jqEventSpecial['ojtableselect'] = {
          /**
           * Handle event
           * @param {{handleObj: {handler: {apply: Function}}}} event
           * @private
           */
          handle: function(event) {
            var handleObj = event['handleObj'];
            return handleObj['handler'].apply(this, [event, arguments[1]]);
          }
        };
      },
      /**
       * Register event listeners which need to be registered datasource. 
       * @private
       */
      _registerDataSourceEventListeners: function()
      {
        // register the listeners on the datasource
        var data = this._getData();
        if (data != null)
        {
          this._unregisterDataSourceEventListeners();
          
          this._dataSourceEventHandlers = [];
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REQUEST'], 'eventHandler': this._handleDataFetchStart.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SYNC'], 'eventHandler': this._handleDataFetchEnd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['SORT'], 'eventHandler': this._handleDataSort.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['ADD'], 'eventHandler': this._handleDataRowAdd.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['REMOVE'], 'eventHandler': this._handleDataRowRemove.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['CHANGE'], 'eventHandler': this._handleDataRowChange.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['RESET'], 'eventHandler': this._handleDataReset.bind(this)});
          this._dataSourceEventHandlers.push({'eventType': oj.TableDataSource.EventType['ERROR'], 'eventHandler': this._handleDataError.bind(this)});

          var i;
          var ev;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++) {
            ev = data.on(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
            if (ev) {
                this._dataSourceEventHandlers[i]['eventHandler'] = ev;
            }
          }
        }
      },
      /**
       * Register event listeners which need to be registered directly on
       * the DOM element.
       * @private
       */
      _registerDomEventListeners: function()
      {
        if (this._getTableDomUtils().getScroller() != null)
        {
          // if width or height is defined then we can have scrollbars so register scroll event listeners
          this._getTableDomUtils().getScroller().scroll((function(event) {
            var scrollLeft = $(event.target).scrollLeft();
            var maxScrollLeft = $(event.target)[0].scrollWidth - $(event.target)[0].clientWidth;

            if (this._GetReadingDirection() === "rtl")
            {
              scrollLeft = Math.abs(scrollLeft);
              if (/webkit/.test(navigator.userAgent.toLowerCase()))
              {
                scrollLeft = maxScrollLeft - scrollLeft;
              }
            }

            var scrollTop = $(event.target).scrollTop();
            var tableHeader = this._getTableDomUtils().getTableHeader();

            if (!tableHeader)
            {
              return;
            }

            if (!this._getTableDomUtils().isDivScroller())
            {
              var tableHeaderRow = this._getTableDomUtils().getTableHeaderRow();
              if (tableHeaderRow)
              {
                if (this._GetReadingDirection() === "rtl")
                {
                  tableHeaderRow.css('right', '-' + scrollLeft + 'px');
                }
                else
                {
                  tableHeaderRow.css('left', '-' + scrollLeft + 'px');
                }
              }
            }
            else
            {
              if (this._GetReadingDirection() === "rtl")
              {
                tableHeader.css('right', '-' + scrollLeft + 'px');
              }
              else
              {
                tableHeader.css('left', '-' + scrollLeft + 'px');
              }
            }
            // trigger the ojtablescroll event so that listeners on the table
            // // component will be notified that the table was scrolled.
            this._trigger('scroll', event, {'scrollLeft': $(event.target).scrollLeft(), 'scrollTop': scrollTop});
          }).bind(this));
        }
      },
      /**
       * Register event listeners for resize the container DOM element.
       * @param {jQuery} element  DOM element
       * @private
       */
      _registerResizeListener: function(element)
      {         
        if (!this._isResizeListenerAdded)
        {
          var self = this;
          oj.DomUtils.addResizeListener(element[0], function(width, height)
                                                    {
                                                      var tableContainerHeight = self._getTableDomUtils().getTableContainer().outerHeight();
                                                      var tableContainerWidth = self._getTableDomUtils().getTableContainer().outerWidth();
                                                      self._getTableDomUtils().refreshTableDimensions(false, tableContainerWidth, tableContainerHeight);
                                                    });
          this._isResizeListenerAdded = true;
        }
      },
      /**
       * Remove a keyCode from our internal list of pressed keys. This is done on keyup.
       * @private
       */
      _removeKeyboardKey: function(keyCode)
      {
        var keyboardKeys = this._getKeyboardKeys();
        var i;
        for (i = 0; i < keyboardKeys.length; i++)
        {
          if (keyboardKeys[i] == keyCode)
          {
            keyboardKeys.splice(i, 1);
          }
        }
      },
      /**
       * Remove table body row
       * @param {jQuery} rowIdx  row index
       * @private
       */
      _removeTableBodyRow: function(rowIdx)
      {
        var tableBodyRows = this._getTableDomUtils().getTableBodyRows();
        var tableBodyRow = null;
        if (tableBodyRows != null &&
          rowIdx < tableBodyRows.length &&
          rowIdx >= 0)
        {
          tableBodyRow = $(tableBodyRows[rowIdx]);
          if (tableBodyRow != null)
          {
            var index = $.inArray(tableBodyRow[0], this['hoverable']);
            if (index > -1)
            {
              this['hoverable'].splice(index, 1);
            }
            tableBodyRow[0].parentNode.removeChild(tableBodyRow[0]);
            this._getTableDomUtils().clearCachedDomRowData();
          }
        }
      },
      /**
       * Scroll column into viewport
       * @param {number} columnIdx  row index
       * @private
       */
      _scrollColumnIntoViewport: function(columnIdx)
      {
        var tableBody = this._getTableDomUtils().getTableBody();
        var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        if (!tableHeaderColumn)
        {
          return;
        }

        var scrollbarWidth = this._getTableDomUtils().getScrollbarWidth();
        var headerColumnRect = tableHeaderColumn.get(0).getBoundingClientRect();
        var tableBodyRect = tableBody.get(0).getBoundingClientRect();

        var scrolledLeft = false;
        if (headerColumnRect.left < tableBodyRect.left)
        {
          var scrollLeftDiff = tableBodyRect.left - headerColumnRect.left;
          tableBody.scrollLeft(tableBody.scrollLeft() - scrollLeftDiff);
          scrolledLeft = true;
        }

        if (headerColumnRect.right > tableBodyRect.right - scrollbarWidth && !scrolledLeft)
        {
          var scrollLeftDiff = headerColumnRect.right - tableBodyRect.right + scrollbarWidth;
          tableBody.scrollLeft(tableBody.scrollLeft() + scrollLeftDiff);
        }
      },
      /**
       * Scroll row into viewport
       * @param {number} rowIdx  row index
       * @private
       */
      _scrollRowIntoViewport: function(rowIdx)
      {

        var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
        var scrollbarHeight = this._getTableDomUtils().getScrollbarHeight();
        var rowRect = tableBodyRow.get(0).getBoundingClientRect();
        var scrollingElement = this._getTableDomUtils().getScroller();
        var scrollingElementRect = scrollingElement.get(0).getBoundingClientRect();

        var scrolledDown = false;
        if (rowRect.bottom > scrollingElementRect.bottom - scrollbarHeight)
        {
          var scrollTopDiff = rowRect.bottom - scrollingElementRect.bottom + scrollbarHeight;
          scrollingElement.scrollTop(scrollingElement.scrollTop() + scrollTopDiff);
          scrolledDown = true;
        }

        if (rowRect.top < scrollingElementRect.top && !scrolledDown)
        {
          var scrollTopDiff = scrollingElementRect.top - rowRect.top;
          scrollingElement.scrollTop(scrollingElement.scrollTop() - scrollTopDiff);
        }

      },
      /**
       * Update the current row. If called with null then resets the currentRow.
       * If index/key argument is specified then sets the current row. A beforecurrentrow 
       * event is fired before the current row is changed. If that event results in
       * an error then the current row will not be changed.
       * @param {Object} currentRow current row
       * @param {Object} event
       * @throws {Error}
       * @private
       */
      _setCurrentRow: function(currentRow, event)
      {
        var existingCurrentRow = this._currentRow;
        if (currentRow == null)
        {
          this._currentRow = null;
          this.options['currentRow'] = null; 
          this._setRowFocus(-1, true, null, event);
          this._fireOptionChange('currentRow', existingCurrentRow, this.options['currentRow'], event); 
          return;
        }
        var data = this._getData();
        var rowIdx = currentRow['rowIndex'];
        var rowKey = currentRow['rowKey'];
        if (rowKey != null)
        {
          rowIdx = this._getRowIdxForRowKey(rowKey);
        }
        else
        {
          rowKey = this._getRowKeyForRowIdx(rowIdx);
        }
        currentRow = {'rowIndex': rowIdx, 'rowKey': rowKey};
          
        if (rowIdx != -1 && 
            (!data || 
            data.size() == 0 ||
            rowIdx < -1))
        {
          var errSummary = this._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY;
          var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL, {'rowIdx': rowIdx});
          throw new Error(errSummary + '\n' + errDetail);
        }
        if (!oj.Object.compareValues(this._currentRow, currentRow))
        {
          try
          {
            this._trigger('beforecurrentrow', event, {'currentRow': {'rowIndex': rowIdx, 'rowKey': rowKey}, 'previousCurrentRow': this._currentRow});
          }
          catch (err)
          {
            // caught an error. Do not change current row
            var errSummary = this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_SUMMARY;
            var errDetail = oj.Translations.applyParameters(this._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_DETAIL, {'error': err.toString()});
            oj.Logger.info(errSummary + '\n' + errDetail);
          }
          this._currentRow = {'rowIndex': rowIdx, 'rowKey': rowKey};
          this.options['currentRow'] = {'rowIndex': rowIdx, 'rowKey': rowKey}; 
          this._setRowFocus(rowIdx, true, null, event);
          this._fireOptionChange('currentRow', existingCurrentRow, this.options['currentRow'], event); 
        }
      },
      /**
       * Set focus on column header
       * @param {number} columnIdx  column index
       * @param {boolean} focused  whether it's focused
       * @param {boolean} clearSelectedRows  whether to clear the selected rows
       * @param {jQuery} element  DOM element which triggered the column header focus
       * @private
       */
      _setHeaderColumnFocus: function(columnIdx, focused, clearSelectedRows, element)
      {
        if (focused)
        {
          var focusedHeaderColumnIdx = this._getFocusedHeaderColumnIdx();
          if (focusedHeaderColumnIdx != null && focusedHeaderColumnIdx != columnIdx)
          {
            this._setHeaderColumnFocus(focusedHeaderColumnIdx, false, false, element);
          }
          // clear focused row
          this._clearFocusedRow();
          // clear selected rows
          if (clearSelectedRows)
          {
            this._clearSelectedRows();
          }
          // scroll column into view
          this._scrollColumnIntoViewport(columnIdx);
          this._activeColumnIndex = columnIdx;
          
        }
        this._setHeaderColumnState(columnIdx, {focused: focused}, element);
      },
      /**
       * Set selection on column header
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's focused
       * @param {jQuery} element  DOM element which triggered the column header selection
       * @param {Object} event
       * @private
       */
      _setHeaderColumnSelection: function(columnIdx, selected, element, event)
      {
        if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(columnIdx) || columnIdx < 0)
          {
            // validate value
            oj.Logger.error('Error: Invalid column selection value: ' + columnIdx);
          }

          // if we have single selection then clear any existing selections
          if (this._getColumnSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedHeaderColumns();
          }
          this._setHeaderColumnState(columnIdx, {selected: selected}, element, event);
          // save it
          this._setLastHeaderColumnSelection(columnIdx, selected);
          
          // update the acc checkbox
          var accSelectionColumn = this._getTableDomUtils().getTableHeaderColumnAccSelect(columnIdx);
          var accSelectCheckbox = $(accSelectionColumn.children('.' + oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS)[0]);
          accSelectCheckbox.prop('checked', selected);
          var selection = this._getSelection();
          this['options']['selection'] = selection;
        }
      },
      /**
       * Set the state of the column header. e.g., focused, selected, etc.
       * @param {number} columnIdx  column index
       * @param {Object} state  Object which contains whether it's focused or selected
       * @param {jQuery} element  DOM element which triggered the column header state
       * @param {Object} event
       * @private
       */
      _setHeaderColumnState: function(columnIdx, state, element, event)
      {
        var headerColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

        if (!headerColumn)
        {
          return;
        }

        var focused = state.focused;
        var selected = state.selected;

        if (selected != null)
        {
          var headerColumnSelected = headerColumn.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);

          var selectionChanged = false;
          if (headerColumnSelected != selected)
          {
            if (!selected)
            {
              headerColumn.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              headerColumn.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            selectionChanged = true;
          }

          if (selectionChanged)
          {
            this._trigger('select', event, {'column': columnIdx, 'selectionAdded': selected});
          }
        }
        if (focused != null)
        {
          if (!focused)
          {
            headerColumn.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            this._hideTableHeaderColumnSortLink(columnIdx, true);
            this._hideTableHeaderColumnSortLink(columnIdx, false);
          }
          else
          {
            headerColumn.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            this._showTableHeaderColumnSortLink(columnIdx);
          }
        }
        this._updateHeaderColumnCellsClass(columnIdx);
      },
      /**
       * Set the last column which was selected (chronologically)
       * @param {number} columnIdx  column index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastHeaderColumnSelection: function(columnIdx, selected)
      {
        if (!this._lastSelectedColumnIdxArray)
        {
          this._lastSelectedColumnIdxArray = [];
        }

        var i;
        for (i = 0; i < this._lastSelectedColumnIdxArray.length; i++)
        {
          if (this._lastSelectedColumnIdxArray[i] == columnIdx)
          {
            this._lastSelectedColumnIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedColumnIdxArray.push(columnIdx);
        }
      },
      /**
       * Set the last row which was selected (chronologically)
       * @param {number} rowIdx  row index
       * @param {boolean} selected  whether it's selected
       * @private
       */
      _setLastRowSelection: function(rowIdx, selected)
      {
        if (!this._lastSelectedRowIdxArray)
        {
          this._lastSelectedRowIdxArray = [];
        }

        for (var i = 0; i < this._lastSelectedRowIdxArray.length; i++)
        {
          if (this._lastSelectedRowIdxArray[i] == rowIdx)
          {
            this._lastSelectedRowIdxArray.splice(i, 1);
            break;
          }
        }

        if (selected)
        {
          this._lastSelectedRowIdxArray.push(rowIdx);
        }
      },
      /**
       * Set focus on row
       * @param {number} rowIdx  row index
       * @param {boolean} focused  whether it's focused
       * @param {jQuery} element  DOM element which triggered the row focus
       * @param {Object} event 
       * @private
       */
      _setRowFocus: function(rowIdx, focused, element, event)
      {
        if (rowIdx == -1)
        {
          this._clearFocusedRow();
          return;
        }
        var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
        
        if (!tableBodyRow)
        {
          return;
        }

        if (focused)
        {
          var focusedRowIdx = this._getFocusedRowIdx();
          if (focusedRowIdx != null && focusedRowIdx != rowIdx)
          {
            this._setRowFocus(focusedRowIdx, false, element, null);
          }
          var rowKey = this._getRowKeyForRowIdx(rowIdx);
          this._setCurrentRow({'rowIndex': rowIdx, 'rowKey': rowKey}, event);
          tableBodyRow.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
          this._scrollRowIntoViewport(rowIdx);
          // clear any hover on the row
          this._updateRowCellsClass(rowIdx, {focused: true, hover: false});
          // clear any focused column header
          this._clearFocusedHeaderColumn();
          // clear any selected column header
          this._clearSelectedHeaderColumns();
          // set to table navigation mode
          this._setTableNavigationMode(true);
        }
        else
        {
          tableBodyRow.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
        }
        // update focus style for the cells
        this._updateRowCellsClass(rowIdx, {focused: focused});
      },
      /**
       * Set selection on row
       * @param {number} rowIdx  column index
       * @param {boolean} selected  whether it's selected
       * @param {jQuery} element  DOM element which triggered the row selection
       * @param {Object} event
       * @private
       */
      _setRowSelection: function(rowIdx, selected, element, event)
      {
        if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE ||
          this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._MULTIPLE)
        {
          if (isNaN(rowIdx) || rowIdx < 0)
          {
            // validate value
            oj.Logger.error('Error: Invalid row selection value: ' + rowIdx);
          }

          // if we have single selection then clear any existing selections
          if (this._getRowSelectionMode() == this._OPTION_SELECTION_MODES._SINGLE && selected)
          {
            this._clearSelectedRows();
          }
          var tableBodyRow = this._getTableDomUtils().getTableBodyRow(rowIdx);
          var selectionChanged = false;

          var rowSelected = tableBodyRow.hasClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);

          if (rowSelected != selected)
          {
            if (!selected)
            {
              tableBodyRow.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              tableBodyRow.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            selectionChanged = true;
          }

          if (selectionChanged)
          {
            this._trigger('select', event, {'row': rowIdx, 'selectionAdded': selected});
          }

          if (selectionChanged)
          {
            // if selection was set then we want to override
            // the default style precedence
            if (selected)
            {
              this._updateRowCellsClass(rowIdx, {hover: false, focused: false, selected: true});
            }
            else
            {
              this._updateRowCellsClass(rowIdx, {selected: false});
            }
          }
          // save it
          this._setLastRowSelection(rowIdx, selected);

          // update the acc checkbox
          var accSelectionCell = this._getTableDomUtils().getTableBodyCellAccSelect(tableBodyRow);
          var accSelectCheckbox = $(accSelectionCell.children('.' + oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS)[0]);
          accSelectCheckbox.prop('checked', selected);
          var selection = this._getSelection();
          this['options']['selection'] = selection;
        }
      },
      /**
       * Sets selection from options
       * @private	 
       */
      _setSelection: function()
      {
        var selection = this.options['selection'];
        
        if (selection != null && selection.length > 0)
        {
          var currentSelection = this._getSelection();
          var selectionChanged = !oj.Object.compareValues(selection, currentSelection);
          if (!selectionChanged)
          {
            return;
          }
          var data = this._getData();
          var startIndex = data != null ? data.startIndex() : 0;
          // first clear currently selected rows
          this._clearSelectedRows();
          // we need to set the selection
          var i, j, rangeObj, startRowIdx, endRowIdx, startColumnIdx, endColumnIdx;
          for (i = 0; i < selection.length; i++)
          {
            rangeObj = selection[i];

            if ((rangeObj['startKey'] == null && rangeObj['startIndex'] == null) || 
                (rangeObj['endKey'] == null && rangeObj['endIndex'] == null))
            {
              oj.Logger.error('Error: Invalid range object in selection. Both start and end objects must be specified');
              return null;
            }
            
            // if keys are specified, we get the index from the key
            if (rangeObj['startKey'] != null && rangeObj['startKey']['row'] != null)
            {
              startRowIdx = this._getRowIdxForRowKey(rangeObj['startKey']['row']);
            }
            if (rangeObj['endKey'] != null && rangeObj['endKey']['row'] != null)
            {
              endRowIdx = this._getRowIdxForRowKey(rangeObj['endKey']['row']);
            }
            if (rangeObj['startKey'] != null && rangeObj['startKey']['column'] != null)
            {
              startColumnIdx = this._getColumnIdxForColumnKey(rangeObj['startKey']['column']);
            }
            if (rangeObj['endKey'] != null && rangeObj['endKey']['column'] != null)
            {
              endColumnIdx = this._getColumnIdxForColumnKey(rangeObj['endKey']['column']);
            }
            
            if (startRowIdx == null && rangeObj['startIndex'] != null)
            {
              startRowIdx = rangeObj['startIndex']['row'];
            }
            if (endRowIdx == null && rangeObj['endIndex'] != null)
            {
              endRowIdx = rangeObj['endIndex']['row'];
            }
            if (startColumnIdx == null && rangeObj['startIndex'] != null)
            {
              startColumnIdx = rangeObj['startIndex']['column'];
            }
            if (endColumnIdx == null && rangeObj['endIndex'] != null)
            {
              endColumnIdx = rangeObj['endIndex']['column'];
            }

            if (startRowIdx != null && endRowIdx != null && startColumnIdx != null && endColumnIdx != null)
            {
              oj.Logger.error('Error: Invalid range object in selection - Can only support row or column selection. Not both');
              return null;
            }
            if (startRowIdx != null && endRowIdx != null)
            {
              startRowIdx = startRowIdx - startIndex;
              endRowIdx = endRowIdx - startIndex;
              // this is a row based selection
              if (startRowIdx >= 0 && endRowIdx >= 0)
              {
                for (j = startRowIdx; j <= endRowIdx; j++)
                {
                  try
                  {
                    this._setRowSelection(j, true, null);
                  }
                  catch (e)
                  {
                    oj.Logger.error('Error: ' + e);
                  }
                }
              }
            }
            else if (startColumnIdx != null && endColumnIdx != null)
            {
              // this is a column based selection
              for (j = startColumnIdx; j <= endColumnIdx; j++)
              {
                try
                {
                  this._setHeaderColumnSelection(j, true, null);
                }
                catch (e)
                {
                  oj.Logger.error('Error: ' + e);
                }
              }
            }
            else
            {
              oj.Logger.error('Error: Invalid range object in selection - \n start row: ' + startRowIdx + '\n' + 'end row: ' + endRowIdx+ '\n' + 'start column: ' + startColumnIdx + '\n' + 'end column: ' + endColumnIdx);
              return null;
            }
          }
        }
      },
      /**
       * Set whether the component is in table navigation mode
       * @param {boolean} value true or false
       * @private
       */
      _setTableNavigationMode: function(value)
      {
        this._tableNavMode = value;
      },
      /**
       * Show the 'No data to display.'
       * @private
       */
      _showNoDataMessage: function()
      {
        var noDataMessage = this._getTableDomUtils().getTableNoDataMessage();
        noDataMessage.css('display', 'inline');
      },
      /**
       * Show the Fetching Data... status message.
       * @private
       */
      _showStatusMessage: function()
      {
        var statusMessage = this._getTableDomUtils().getTableStatusMessage();
        statusMessage.css('display', 'inline');
      },
      /**
       * Show the column header sort link
       * @param {number} columnIdx  column index
       * @private
       */
      _showTableHeaderColumnSortLink: function(columnIdx)
      {
        if (this._getColumnDefs()[columnIdx]['sortable'] == this._OPTION_ENABLED)
        {
          var tableHeaderColumn = this._getTableDomUtils().getTableHeaderColumn(columnIdx);

          if (!tableHeaderColumn)
          {
            return;
          }
          
          // check if the column is currently sorted
          var sorted = tableHeaderColumn.data('sorted');

          // we should only show the ascending sort link if the column is not sorted
          if (sorted == null)
          {
            var headerColumnAscLink = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
            headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._ENABLED);
            headerColumnAscLink.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            var headerColumnAsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
            headerColumnAsc.removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
            var headerColumnDsc = tableHeaderColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
            headerColumnDsc.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
          }
        }
      },
      /**
       * Unregister event listeners which are registered on datasource. 
       * @private
       */
      _unregisterDataSourceEventListeners: function()
      {
        var data = this._getData();
        // unregister the listeners on the datasource
        if (this._dataSourceEventHandlers != null && data != null)
        {
          var i;
          for (i = 0; i < this._dataSourceEventHandlers.length; i++)
            data.off(this._dataSourceEventHandlers[i]['eventType'], this._dataSourceEventHandlers[i]['eventHandler']);
        }
      },
      /**
       * Update the css class from all the cells in a column according to column state
       * @param {number} columnIdx  column index
       * @param {boolean} blur  true or false
       * @private
       */
      _updateHeaderColumnCellsClass: function(columnIdx, blur)
      {
        var state = this._getHeaderColumnState(columnIdx);
        var selected = state.selected;
        var selectedRowIdxs = this._getSelectedRowIdxs();
        var data = this._getData();
        var i, j, tableBodyCell, rowSelected;
        for (i = 0; i < data.size(); i++)
        {
          tableBodyCell = this._getTableDomUtils().getTableBodyCell(i, columnIdx);
          if (!selected)
          {
            rowSelected = false;
            for (j = 0; j < selectedRowIdxs.length; j++)
            {
              if (i == selectedRowIdxs[j])
              {
                rowSelected = true;
                break;
              }
            }
            if (!rowSelected)
            {
              $(tableBodyCell).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
          }
          else
          {
            $(tableBodyCell).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
          }
        }
      },
      /**
       * Update the css class from all the cells in a row according to row state
       * @param {number} rowIdx  row index
       * @param {Object} state  row state
       * @param {boolean} blur  true or false
       * @private
       */
      _updateRowCellsClass: function(rowIdx, state, blur)
      {
        var tableBodyCells = this._getTableDomUtils().getTableBodyCells(rowIdx);
        var focused = state.focused;
        var selected = state.selected;
        var hover = state.hover;

        if (!tableBodyCells)
        {
          return;
        }

        if (hover != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!hover)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._HOVER);
            }
          }
        }
        if (focused != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!focused)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._FOCUS);
            }
          }
        }
        if (selected != null)
        {
          var i;
          for (i = 0; i < tableBodyCells.length; i++)
          {
            if (!selected)
            {
              $(tableBodyCells[i]).removeClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
            else
            {
              $(tableBodyCells[i]).addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._SELECTED);
            }
          }
        }
      }
      /**** end internal functions ****/
    })
}());
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.FlattenedTreeTableDataSource
 * @classdesc Object representing data used by the rowexpander component
 * @param {Object} data
 * @param {Object|null} options Array of options for the TreeTableDataSource
 * @constructor
 */
oj.FlattenedTreeTableDataSource = function(data, options)
{
  // Initialize
  options = options || {};

  if (!(data instanceof oj.FlattenedTreeDataSource))
  {
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }

  this.dataSource = data;
  this._rowSet = new oj.FlattenedTreeRowSet(data, options);
  this._addRowSetEventListeners();
  this.Init();
  
  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.FlattenedTreeTableDataSource, oj.TableDataSource, "oj.FlattenedTreeTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.Init = function()
{
  oj.FlattenedTreeTableDataSource.superclass.Init.call(this);
};

/**
 * Determines whether this FlattenedTreeTableDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.FlattenedTreeTableDataSource.prototype.getCapability = function(feature)
{
    return 'full';
};

/**
 * Retrieves the underlying DataSource.
 * @return {Object} the underlying oj.DataSource.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.getWrappedDataSource = function()
{
    return this.dataSource;
};

/**
 * Calls fetch on the datasource.
 * @param {Object=} options Options to control fetch<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.fetch = function(options)
{
  options = options || {};
  var self = this;
  var success = options['success'];
  var error = options['error'];
  var context = options['context'] == null? this : options['context'];
  var fetchType = options['fetchType'];
  
  if (fetchType == 'init' && !this._startFetchEnabled)
  {
     return oj.Object.__getPromise(function(resolve, reject) {
        resolve();
      });
  }

  return oj.Object.__getPromise(function(resolve, reject) {
    options['success'] = function()
    {
      if (success != null)
      {
        success.call(context, self, options);
      }
      resolve();
    };
    options['error'] = function(options, e)
    {
      if (error != null)
      {
        error.call(context, self, options, e);
      }
      reject();
    }
    if (options['startFetch'] == 'enabled')
    {
      // only do an initial fetch if rowSet is empty
      if (self._rowSet.isEmpty() ||
        (typeof self._rowSet.size() === 'undefined'))
      {
        self._rowSet.fetch(options);
      }
    }
    else
    {
      self._rowSet.fetch(options);
    }
  });
};




/**** start delegated functions ****/

/**
 * Return the model object found at the given index of the collection.
 * 
 * @param {number} index Index for which to return the model object. 
 * @return {Object} Model object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Collapse the specified row.
 * @param {Object} rowKey the key of the row to collapse
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.collapse = function(rowKey)
{
  this._rowSet.collapse(rowKey);
};

/**
 * Expand the specified row.
 * @param {Object} rowKey the key of the row to expand
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.expand = function(rowKey)
{
  this._rowSet.expand(rowKey);
};

/**
 * Return the first model object from the collection whose model id value is the given id or cid, or the id or cid from a passed in model
 * @param {Object|string} id ID, cid, or Model (see Model id or cid) for which to return the model object, if found. 
 * @return {Object} First model object in the collection where model.id = id or model.cid = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.hasMore = function()
{
  return this._rowSet.hasMore();
};

/**
 * Return the array index location of the given model object.
 * @param {Object} model Model object to locate 
 * @return {number} The index of the given model object. If the object is not found, returns -1.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.indexOf = function(model)
{
  return this._rowSet.indexOf(model);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.on = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._rowSet.on(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeTableDataSource.superclass.on.call(this, eventType, eventHandler);
  }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.off = function(eventType, eventHandler)
{
  if (eventType == 'expand' ||
      eventType == 'collapse')
  {
    // expand/collapse listeners should be passed through to the FlattenedTreeDatasource
    this._rowSet.off(eventType, eventHandler);
  }
  else
  {
    oj.FlattenedTreeTableDataSource.superclass.off.call(this, eventType, eventHandler);
  }
};

/**
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.size = function()
{
  return this._rowSet.size();
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key The key that identifies which field to sort
 * @param {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @return {Promise} promise object triggering done when complete.
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.sort = function(criteria)
{
  if (criteria == null)
  {
    return oj.Object.__getPromise(function(resolve, reject) {
      resolve();
    }); 
  }
  
  var self = this;
  criteria['axis'] = 'column';
  return oj.Object.__getPromise(function(resolve, reject) {
    self._rowSet.sort(criteria);
    resolve();
  });
};

/**
 * Return current start index.
 * @returns {number} start index
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.startIndex = function() {
  return this._rowSet.startIndex();
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.FlattenedTreeTableDataSource
 * @instance
 */
oj.FlattenedTreeTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**** end delegated functions ****/

/**
 * Add event listeners to the RowSet
 * @private
 */
oj.FlattenedTreeTableDataSource.prototype._addRowSetEventListeners = function()
{
  var self = this;
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ADD'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ADD'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REMOVE'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REMOVE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REQUEST'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REQUEST'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['RESET'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['RESET'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SORT'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SORT'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['CHANGE'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['CHANGE'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['SYNC'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['SYNC'], event);
  });
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['ERROR'], function(event) {
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['ERROR'], event);
  });
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*jslint browser: true,devel:true*/
/**
 * @export
 * @class oj.TableDomUtils
 * @classdesc DOM Utils for ojTable
 * @param {Object} component ojTable instance
 * @constructor
 */
oj.TableDomUtils = function(component)
{
  this.component = component;
  this.options = component['options'];
  this.element = component['element'];
  this.Init();
  var self = this;
  setInterval(
    function()
    {
      if (self._refreshTableDimensionsTimer != null)
      {
        var width = self._refreshTableDimensionsTimer.width;
        var height = self._refreshTableDimensionsTimer.height;
      
        self._refreshTableDimensions(width, height);
        self._refreshTableDimensionsTimer = null;
      }
    }, 50);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.TableDomUtils, oj.Object, "oj.TableDomUtils");

/**
 * Initializes the instance.
 * @export
 */
oj.TableDomUtils.prototype.Init = function()
{
  oj.TableDomUtils.superclass.Init.call(this);
};

/**
  * Add the cell for delayed rendering
  * @private
  * @param {number} rowIdx  row index
  * @param {number} columnIdx  column index
  * @param {Object} delayedCellObj cell information
  */
oj.TableDomUtils.prototype.addDelayedRenderCell = function(rowIdx, columnIdx, delayedCellObj)
{
  if (!this._delayedRenderCells)
  {
    this._delayedRenderCells = new Array();
  }
  var delayedRowCells = this._delayedRenderCells[rowIdx];
  
  if (!delayedRowCells)
  {
    delayedRowCells = new Array();
  }
  delayedRowCells[columnIdx] = delayedCellObj;
  this._delayedRenderCells[rowIdx] = delayedRowCells;
};

/**
  * Add the row for delayed rendering
  * @private
  * @param {number} rowIdx  row index
  * @param {Object} delayedRowObj row information
  */
oj.TableDomUtils.prototype.addDelayedRenderRow = function(rowIdx, delayedRowObj)
{
  if (!this._delayedRenderRows)
  {
    this._delayedRenderRows = new Array();
  }
  this._delayedRenderRows[rowIdx] = delayedRowObj;
};

/**
 * Clear any cached DOM
 * @private
 */
oj.TableDomUtils.prototype.clearCachedDom = function()
{
  this.clearCachedDomRowData();
  this._tableContainerDimensions = null;
}

/**
 * Clear any cached DOM rows
 * @private
 */
oj.TableDomUtils.prototype.clearCachedDomRowData = function()
{
  this._cachedDomTableBodyRows = null;
}

/**
  * Clear the array of delayed cells for rendering
  */
oj.TableDomUtils.prototype.clearDelayedRenderCells = function()
{
  if (this._delayedRenderCells != null)
  {
    while(this._delayedRenderCells.length > 0) 
    {
      this._delayedRenderCells.pop();
    }
  }
};

/**
  * Clear the array of delayed rows for rendering
  */
oj.TableDomUtils.prototype.clearDelayedRenderRows = function()
{
  if (this._delayedRenderRows != null)
  {
    while(this._delayedRenderRows.length > 0) 
    {
      this._delayedRenderRows.pop();
    }
  }
};

/**
 * Create a span element for acc purposes
 * @param {string} text span text
 * @param {string|null} className css class
 * @return {jQuery} jQuery span DOM element
 */
oj.TableDomUtils.prototype.createAccLabelSpan = function(text, className)
{
  var accLabel = $(document.createElement('span'));
  if (className != null)
  {
    accLabel.addClass(className);
  }
  accLabel.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accLabel.append(text);

  return accLabel;
};

/**
 * Add a default context menu to the table container if there is none. If there is
 * a context menu set on the table options we use that one. Add listeners
 * for context menu before show and select.
 * @param {function(Object)} handleContextMenuBeforeShow function called before menu show
 * @param {function(Object)} handleContextMenuSelect function called for menu select
 * @return {jQuery} jQuery ul DOM element
 */
oj.TableDomUtils.prototype.createContextMenu = function(handleContextMenuBeforeShow, handleContextMenuSelect)
{
  var menuContainer = null;
  var menuContainerId = null;
  var listItems;
  var self = this;

  if (this.options["contextMenu"] != null || this.getTable().attr("contextmenu") != null)
  {
    menuContainerId = this.getContextMenuId();
    menuContainer = $(menuContainerId);
    listItems = menuContainer.find('[data-oj-command]');
    listItems.each(function() {
      var command;
      if ($(this).children('a').length === 0)
      {
        command = $(this).attr('data-oj-command').split("-");
        $(this).replaceWith(self.createContextMenuItem(command[command.length - 1]));
      }
    });
    this._menuContainer = menuContainer;
    this.component._contextMenuId = menuContainerId;
    menuContainer.ojMenu('refresh');
    menuContainer.on("ojbeforeopen", handleContextMenuBeforeShow);
    menuContainer.on("ojselect", handleContextMenuSelect);

    return menuContainer;
  }
  
  return null
};

/**
 * Builds a menu for a command, takes care of submenus where appropriate
 * @return {jQuery} jQuery li DOM element
 */
oj.TableDomUtils.prototype.createContextMenuItem = function(command)
{
  if (command === 'sort')
  {
    return $(this.createContextMenuListItem(command)).append($('<ul></ul>').append($(this.createContextMenuListItem('sortAsc'))).append($(this.createContextMenuListItem('sortDsc'))));
  }
  return null;
};

/**
 * Builds a context menu list item from a command
 * @param {string} command the string to look up command value for as well as translation
 * @return {jQuery} jQuery li DOM element 
 */
oj.TableDomUtils.prototype.createContextMenuListItem = function(command)
{
  var contextMenuListItem = $(document.createElement('li'));
  contextMenuListItem.attr('data-oj-command', 'oj-table-' + command);
  contextMenuListItem.append(this.createContextMenuLabel(command));

  return contextMenuListItem;
};

/**
 * Builds a context menu label by looking up command translation
 * @param {string} command the string to look up translation for
 * @return {jQuery} jQuery a DOM element
 */
oj.TableDomUtils.prototype.createContextMenuLabel = function(command)
{
  var contextMenuLabel = $(document.createElement('a'));
  contextMenuLabel.attr('href', '#');
  var commandString = null;
  if (command == 'sort')
  {
    commandString = this.component.getTranslatedString('labelSort');
  }
  else if (command == 'sortAsc')
  {
    commandString = this.component.getTranslatedString('labelSortAsc');
  }
  else if (command == 'sortDsc')
  {
    commandString = this.component.getTranslatedString('labelSortDsc');
  }
  contextMenuLabel.append(commandString);

  return contextMenuLabel;
};

/**
 * Create the initial empty table
 * @param {boolean} isTableHeaderless is table headerless
 * @param {boolean} isTableFooterless is table footerless
 * @param {function(Object)} handleContextMenuBeforeShow function called before menu open
 * @param {function(Object)} handleContextMenuSelect function called for menu select
 * @return {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.createInitialTable = function(isTableHeaderless, isTableFooterless, handleContextMenuBeforeShow, handleContextMenuSelect)
{
  var table = this.getTable();
  this.createTableContainer();
  // create the context menu
  this.createContextMenu(handleContextMenuBeforeShow, handleContextMenuSelect);
  // we only need a scroller div if we are using fallback scrolling
  if (this.isDivScroller())
  {
    this.createTableDivScroller();
  }

  if (!isTableHeaderless)
  {
    this.createTableHeader();
  }
  if (!isTableFooterless)
  {
    this.createTableFooter();
  }
  this.createTableBody();
  this.createTableNoDataMessage();
  this.createTableStatusMessage();

  return table;
};

/**
 * Create an empty tbody element with appropriate styling
 * @return {jQuery} jQuery tbody DOM element
 */
oj.TableDomUtils.prototype.createTableBody = function()
{
  var table = this.getTable();
  var tableBody = $(document.createElement('tbody'));
  table.append(tableBody);
  this._cachedDomTableBody = tableBody;

  return tableBody;
};

/**
 * Create an empty td element with appropriate styling
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableBodyCell = function(rowIdx, columnIdx)
{
  var tableBodyCell = $(document.createElement('td'));

  return tableBodyCell;
};

/**
 * Create a checkbox for accessibility row selection
 * @param {number} rowIdx  row index
 * @param {jQuery} tableBodyRow  tr DOM element
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableBodyCellAccSelect = function(rowIdx, tableBodyRow)
{
  var accSelectionCell = this.getTableBodyCellAccSelect(tableBodyRow);
  var isTableHeaderless = this.getTableHeader() == null ? true : false;

  if (accSelectionCell != null)
  {
    return accSelectionCell;
  }

  accSelectionCell = $(document.createElement('td'));
  accSelectionCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);
  accSelectionCell.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  if (!isTableHeaderless)
  {
    accSelectionCell.attr('headers', oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID);
  }
  var accSelectCheckbox = $(document.createElement('input'));
  accSelectCheckbox.attr('id', 'acc_sel_row' + rowIdx);
  accSelectCheckbox.attr('type', 'checkbox');
  accSelectCheckbox.attr('tabindex', '-1');
  var selectRowTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_ROW);
  accSelectCheckbox.attr('title', selectRowTitle);
  accSelectCheckbox.addClass(oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_ROW_CLASS);
  accSelectionCell.append(accSelectCheckbox);
  tableBodyRow.prepend(accSelectionCell);

  return accSelectionCell;
};

/**
 * Create an empty tr element with appropriate styling
 * @param {number} rowIdx  row index
 * @return {jQuery} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.createTableBodyRow = function(rowIdx)
{
  var tableBodyRow = $(document.createElement('tr'));
  this.createTableBodyCellAccSelect(rowIdx, tableBodyRow);
  
  return tableBodyRow;
};

/**
 * Create an empty div element with appropriate styling
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableContainer = function()
{
  var options = this.options;
  // need to enclose the table in a div to provide horizontal scrolling
  var tableContainer = $(document.createElement('div'));
  this.element.parent()[0].replaceChild(tableContainer[0], this.element[0]);
  tableContainer.prepend(this.element);
  this._cachedDomTableContainer = tableContainer;

  return tableContainer;
};

/**
 * Create an empty tfoot with appropriate styling
 * @return {jQuery} jQuery tfoot DOM element
 */
oj.TableDomUtils.prototype.createTableFooter = function()
{
  var table = this.getTable();
  var tableFooter = $(document.createElement('tfoot'));
  var tableFooterRow = $(document.createElement('tr'));
  this.createTableFooterAccSelect(tableFooterRow);

  tableFooter.append(tableFooterRow);
  
  // check if thead is already there. If so add relative to thead.
  var tableHeader = this.getTableHeader();
  if (tableHeader != null)
  {
    tableHeader.after(tableFooter);
  }
  else
  {
    // check if tbody is already there. If so add relative to tbody.
    var tableBody = this.getTableBody();
    if (tableBody != null)
    {
      tableBody.before(tableFooter);
    }
    else
    {
      table.append(tableFooter);
    }
  }

  return tableFooter;
};

/**
 * Create a checkbox for accessibility row selection
 * @param {jQuery} tableFooterRow  tr DOM element
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableFooterAccSelect = function(tableFooterRow)
{
  var accFooterCell = tableFooterRow.find('.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);

  if (accFooterCell != null && accFooterCell.length > 0)
  {
    return $(accFooterCell[0]);
  }
  accFooterCell = $(document.createElement('td'));
  accFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  accFooterCell.attr('tabindex', '-1');
  tableFooterRow.prepend(accFooterCell);

  return accFooterCell;
};

/**
 * Create an empty td element with appropriate styling
 * @param {number} columnIdx  column index
 * @return {jQuery} jQuery td DOM element
 */
oj.TableDomUtils.prototype.createTableFooterCell = function(columnIdx)
{
  var tableFooterCell = $(document.createElement('td'));

  return tableFooterCell;
};

/**
 * Create an empty thead & tr element with appropriate styling
 * @return {jQuery} jQuery thead DOM element
 */
oj.TableDomUtils.prototype.createTableHeader = function()
{
  var table = this.getTable();
  var tableHeader = $(document.createElement('thead'));
  var tableHeaderRow = $(document.createElement('tr'));
  this._cachedDomTableHeaderRow = tableHeaderRow;
  tableHeader.append(tableHeaderRow);
  
  // check if tfoot is already there. If so add relative to tfoot.
  var tableFooter = this.getTableFooter();
  if (tableFooter != null)
  {
    tableFooter.before(tableHeader);
  }
  else
  {
    // check if tbody is already there. If so add relative to tbody.
    var tableBody = this.getTableBody();
    if (tableBody != null)
    {
      tableBody.before(tableHeader);
    }
    else
    {
      table.append(tableHeader);
    }
  }
  this._cachedDomTableHeader = tableHeader;
  
  return tableHeader;
};

/**
 * Create a th element for accessibility row selection
 * @return {jQuery} jQuery th DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderAccSelectRowColumn = function()
{
  var headerColumn = $(document.createElement('th'));
  headerColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS);
  headerColumn.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  headerColumn.attr('id', oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID);
  var selectRowTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_ROW);
  headerColumn.attr('title', selectRowTitle);
  headerColumn.append(selectRowTitle);

  return headerColumn;
};

/**
 * Create a th element with appropriate styling and column content
 * @param {number} columnIdx  column index
 * @param {string} columnSelectionMode  column selection mode
 * @return {jQuery} jQuery th DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderColumn = function(columnIdx, columnSelectionMode)
{
  var column = this.component['columnMetaData'](columnIdx);
  var headerColumnCell = $(document.createElement('th'));
  this.styleTableHeaderColumn(columnIdx, headerColumnCell, columnSelectionMode);
  var headerColumnDiv = $(document.createElement('div'));
  headerColumnDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
  
  if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
  {
    if (this.component._GetReadingDirection() === "rtl")
    {
      headerColumnDiv.css('padding-left', '0px');
    }
    else
    {
      headerColumnDiv.css('padding-right', '0px');
    }
  }
  headerColumnCell.append(headerColumnDiv);
  
  // add abbr for acc
  headerColumnCell.attr('abbr', column.headerText);
  // add title for tooltip
  headerColumnCell.attr('title', column.headerText);
  this.component._hoverable(headerColumnCell);
  
  // the text div contains the column header text
  var headerColumnTextDiv = $(document.createElement('div'));
  headerColumnTextDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
  if (column.headerStyle != null)
  {
    headerColumnTextDiv.attr('style', column.headerStyle);
  }
  if (column.headerClassName != null)
  {
    headerColumnTextDiv.addClass(column.headerClassName);
  }
  headerColumnDiv.append(headerColumnTextDiv);
  headerColumnTextDiv.append(column.headerText);
  // sort ascending link
  var headerColumnAscDiv = $(document.createElement('div'));
  headerColumnAscDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_CLASS);
  headerColumnDiv.append(headerColumnAscDiv);
  if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
  {
    var headerColumnAscLink = $(document.createElement('a'));
    headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_LINK_CLASS);
    headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._WIDGET_ICON_CLASS);
    headerColumnAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS);
    headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
    headerColumnAscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._CLICKABLE_ICON);
    this.component._hoverable(headerColumnAscLink);
    headerColumnAscDiv.append(headerColumnAscLink);
    
    // separate link for acc
    var headerColumnAccAscLink = $(document.createElement('a'));
    headerColumnAccAscLink.attr('tabindex', '0');
    headerColumnAccAscLink.attr('href', '#');
    headerColumnAccAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_ASC_LINK_CLASS);
    headerColumnAccAscLink.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
    headerColumnAccAscLink.append(this.component.getTranslatedString('labelSortAsc'));
    headerColumnAscDiv.append(headerColumnAccAscLink);
    
    headerColumnCell.attr('data-oj-sortable', oj.TableDomUtils._OPTION_ENABLED);
    
    var headerColumnSortPlaceholderDiv = $(document.createElement('div'));
    headerColumnSortPlaceholderDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_SORT_PACEHOLDER_CLASS);
    headerColumnSortPlaceholderDiv.css('display', 'inline-block');
    headerColumnDiv.append(headerColumnSortPlaceholderDiv);
  }
  //sort descending link
  var headerColumnDscDiv = $(document.createElement('div'));
  headerColumnDscDiv.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_CLASS);
  // descending sort is initially not visible
  headerColumnDscDiv.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
  headerColumnDiv.append(headerColumnDscDiv);
  if (column.sortable == oj.TableDomUtils._OPTION_ENABLED)
  {
    var headerColumnDscLink = $(document.createElement('a'));
    headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_LINK_CLASS);
    headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._WIDGET_ICON_CLASS);
    headerColumnDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS);
    headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._DISABLED);
    headerColumnDscLink.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._CLICKABLE_ICON);
    this.component._hoverable(headerColumnDscLink);
    headerColumnDscDiv.append(headerColumnDscLink);
    
    // separate link for acc
    var headerColumnAccDscLink = $(document.createElement('a'));
    headerColumnAccDscLink.attr('tabindex', '0');
    headerColumnAccDscLink.attr('href', '#');
    headerColumnAccDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_DSC_LINK_CLASS);
    headerColumnAccDscLink.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
    headerColumnAccDscLink.append(this.component.getTranslatedString('labelSortDsc'));
    headerColumnDscDiv.append(headerColumnAccDscLink);
  }

  return headerColumnCell;
};

/**
 * Create a checkbox for accessibility column selection
 * @param {number} columnIdx  column index
 * @param {string} columnSelectionMode  column selection mode
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableHeaderColumnAccSelect = function(columnIdx, columnSelectionMode)
{
  if (columnSelectionMode != oj.TableDomUtils._OPTION_SELECTION_MODES._SINGLE &&
    columnSelectionMode != oj.TableDomUtils._OPTION_SELECTION_MODES._MULTIPLE)
  {
    return null;
  }
  var headerColumn = this.getTableHeaderColumn(columnIdx);
  var accSelectionHeaderColumn = this.getTableHeaderColumnAccSelect(columnIdx);

  if (accSelectionHeaderColumn != null)
  {
    return accSelectionHeaderColumn;
  }

  accSelectionHeaderColumn = $(document.createElement('div'));
  accSelectionHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);
  accSelectionHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
  var accSelectCheckbox = $(document.createElement('input'));
  accSelectCheckbox.attr('id', 'acc_sel_col' + columnIdx);
  accSelectCheckbox.attr('type', 'checkbox');
  accSelectCheckbox.attr('tabindex', '-1');
  var selectColumnTitle = this.component.getTranslatedString(this.component._BUNDLE_KEY._LABEL_SELECT_COLUMN);
  accSelectCheckbox.attr('title', selectColumnTitle);
  accSelectCheckbox.addClass(oj.TableDomUtils.CSS_CLASSES._CHECKBOX_ACC_SELECT_COLUMN_CLASS);
  accSelectionHeaderColumn.append(accSelectCheckbox);
  headerColumn.prepend(accSelectionHeaderColumn);

  return accSelectionHeaderColumn;
};

/**
 * Create a div element for table scrolling. Used in scrolling fallback mode.
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableDivScroller = function()
{
  var table = this.getTable();
  var tableContainer = this.getTableContainer();
  var tableDivScroller = $(document.createElement('div'));
  tableDivScroller.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_SCROLLER_CLASS);
  tableContainer[0].replaceChild(tableDivScroller[0], table[0]);
  tableDivScroller.append(table);
  this._cachedDomTableDivScroller = tableDivScroller;

  return tableDivScroller;
};

/**
 * Create a div element for the 'No data to display' message
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableNoDataMessage = function()
{
  var tableContainer = this.getTableContainer();
  var noDataMessage = $(document.createElement('div'));
  noDataMessage.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);
  noDataMessage.css('display', 'none');
  var emptyTextMsg = null;
  if (this.options['emptyText'] != null)
  {
    emptyTextMsg = this.options['emptyText'];
  }
  else
  {
    emptyTextMsg = this.component.getTranslatedString(this.component._BUNDLE_KEY._MSG_NO_DATA);
  }
  noDataMessage.append(emptyTextMsg);
  tableContainer.append(noDataMessage);
  this._cachedDomTableNoDataMessage = noDataMessage;

  return noDataMessage;
};

/**
 * Create a div element for the Fetching Data... status message
 * @return {jQuery} jQuery div DOM element
 */
oj.TableDomUtils.prototype.createTableStatusMessage = function()
{
  var tableContainer = this.getTableContainer();
  var statusMessage = $(document.createElement('div'));
  statusMessage.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
  statusMessage.css('display', 'none');
  statusMessage.append(this.component.getTranslatedString(this.component._BUNDLE_KEY._MSG_FETCHING_DATA));
  tableContainer.append(statusMessage);
  this._cachedDomTableStatusMessage = statusMessage;

  return statusMessage;
};

/**
 * Get the context menu
 * @return  {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.getContextMenu = function()
{
  return this._menuContainer;
};

/**
 * Get the context menu id
 * @return  {string} context menu id
 */
oj.TableDomUtils.prototype.getContextMenuId = function()
{
  return this.options["contextMenu"] == null ? '#' + this.getTable().attr("contextmenu") : this.options["contextMenu"];
};

/**
 * Get the column index of the DOM element. e.g. pass in the table cell to
 * see which column it's in.
 * @param {jQuery} element  DOM element
 * @return {number|null} the column index
 * @private
 */
oj.TableDomUtils.prototype.getElementColumnIdx = function(element)
{
  var tableBodyCell = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
  if (tableBodyCell != null)
  {
    return tableBodyCell.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS).index(tableBodyCell);
  }
  
  var tableHeaderColumn = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);
  if (tableHeaderColumn != null)
  {
    return tableHeaderColumn.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS).index(tableHeaderColumn);
  }
  
  var tableFooterCell = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);
  if (tableFooterCell != null)
  {
    return tableFooterCell.parent().children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS).index(tableFooterCell);
  }
  return null;
};

/**
 * Get the row index of the DOM element. e.g. pass in the table cell to
 * see which row it's in.
 * @param {jQuery} element  DOM element
 * @return {number} the row index
 * @private
 */
oj.TableDomUtils.prototype.getElementRowIdx = function(element)
{
  var tableBodyRow = this.getFirstAncestor(element, oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  
  return tableBodyRow.index();
};

/**
 * Return table container dimensions
 * @return {Object} the height and width of the table container
 */
oj.TableDomUtils.prototype.getTableContainerDimensions = function()
{
  var tableContainer = this.getTableContainer();
  tableContainer.attr('style', '');
  this.styleTableContainer(tableContainer);
  
  // hide all children so it does affect the style
  var i;
  var tableContainerChildrenDisplayStyle = [];
  
  for (i = 0; i < tableContainer.children().length; i++)
  {
    tableContainerChildrenDisplayStyle[i] = $(tableContainer.children()[i]).css('display').toString();
    $(tableContainer.children()[i]).css('display', 'none');
  }
  var tableContainerDisplayStyle = tableContainer.css('display').toString();
  tableContainer.css('display', 'inline-block');
  var tableBorderWidth = tableContainer.outerWidth() - tableContainer.innerWidth();
  var tableBorderHeight = tableContainer.outerHeight() - tableContainer.innerHeight();
  var tableHeight = tableContainer.outerHeight() > tableBorderHeight ? tableContainer.outerHeight() : 0;
  var tableWidth = tableContainer.outerWidth() > tableBorderWidth ? tableContainer.outerWidth() : 0;
  var dimensions = {height: tableHeight, width: tableWidth};
  for (i = 0; i < tableContainer.children().length; i++)
  {
    $(tableContainer.children()[i]).css('display', tableContainerChildrenDisplayStyle[i]);
  }
  tableContainer.css('display', tableContainerDisplayStyle);

  if (tableContainer[0].clientWidth == 0)
  {
    return null;
  }

  return dimensions;
};

/**
  * Find the first ancestor of an element with a specific class name
  * @param {jQuery} element the element to find the nearest class name to
  * @param {string} className the class name to look for
  * @return {jQuery|null} the element with the className, if there is none returns null 
  */
oj.TableDomUtils.prototype.getFirstAncestor = function(element, className) 
{
  var parents;
  
  if (element == null)
  {
    return null;
  }
  element = $(element);

  if (element.hasClass(className))
  {
    return element;
  }
  parents = element.parents('.' + className);
  if (parents.length != 0)
  {
    return parents.eq(0);
  }
  return null;
};

/**
  * Get the context object to pass into the renderer
  * @param {Object} row  oj.Row instance
  * @param {Object} parentElement element
  * @private
  */
oj.TableDomUtils.prototype.getRendererContextObject = function(row, parentElement)
{
  var context = [];
  context['component'] = this.component;
  var dataSource = this.options['data'];
  // unwrap the datasource if we have a PagingTableDataSource
  if (dataSource instanceof oj.PagingTableDataSource)
  {
    dataSource = dataSource.getWrappedDataSource();
  }
  context['datasource'] = dataSource;
  context['parentElement'] = parentElement;

  if (row != null)
  {
    context['status'] = this.getRendererStatusObject(row);
    var rowContext = row.context;
    var i;
    for (i in rowContext)
    {
      if (rowContext.hasOwnProperty(i))
      {
        context[i] = rowContext[i];
      }
    }
  }

  return context;
};

/**
 * Get the status object to pass into the renderer
 * @param {Object} row  oj.Row instance
 * @return {Object} status object
 * @private
 */
oj.TableDomUtils.prototype.getRendererStatusObject = function(row)
{
  return {'rowIndex': this.options['data'].indexOf(row),
    'rowKey': row['id'],
    'currentRow': this.component._getCurrentRow()};
};

/**
 * Return the scrollbar height
 * @return {number} scrolbar height
 * @private
 */
oj.TableDomUtils.prototype.getScrollbarHeight = function()
{
  var scroller = this.getScroller();
  if (scroller.get(0).clientHeight > 0)
  {
    var scrollbarHeight = scroller.get(0).offsetHeight - scroller.get(0).clientHeight;

    return scrollbarHeight;
  }
  return 0;
};

/**
 * Return the scrollbar width
 * @return {number} scrolbar width
 * @private
 */
oj.TableDomUtils.prototype.getScrollbarWidth = function()
{
  var scroller = this.getScroller();
  if (scroller.get(0).clientWidth > 0)
  {
    var scrollbarWidth = scroller.get(0).offsetWidth - scroller.get(0).clientWidth;

    return scrollbarWidth;
  }
  return 0;
};

/**
 * Return the table scroller
 * @return {jQuery} scrolbar
 */
oj.TableDomUtils.prototype.getScroller = function()
{
  if (!this.isDivScroller())
  {
    return this.getTableBody();
  }
  else
  {
    return this.getTableDivScroller();
  }
};
        
/**
 * Return the table element
 * @return {jQuery} jQuery table DOM element
 */
oj.TableDomUtils.prototype.getTable = function()
{
  return $(this.element);
};

/**
 * Return the table body element
 * @return {jQuery|null} jQuery tbody DOM element
 */
oj.TableDomUtils.prototype.getTableBody = function()
{
  if (!this._cachedDomTableBody)
  {
    var table = this.getTable();
    var tableBody = null;
    if (table)
    {
      tableBody = table.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
      if (tableBody && tableBody.length > 0)
      {
        this._cachedDomTableBody = $(tableBody.get(0));
      }
    }
  }

  return this._cachedDomTableBody;
};

/**
 * Return the cell element
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery|null} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableBodyCell = function(rowIdx, columnIdx, tableBodyRow)
{
  var tableBodyCells = this.getTableBodyCells(rowIdx, tableBodyRow);
  if (!tableBodyCells)
  {
    return null;
  }

  if (tableBodyCells.length > columnIdx)
  {
    return $(tableBodyCells[columnIdx]);
  }

  return null;
};

/**
 * Get checkbox cell for accessibility row selection
 * @param {jQuery} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableBodyCellAccSelect = function(tableBodyRow)
{
  if (tableBodyRow != null)
  {
    var accSelectionCell = tableBodyRow.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      return $(accSelectionCell[0]);
    }
  }
  return null;
};

/**
 * Return all the cell elements in a row
 * @param {number} rowIdx  row index
 * @param {jQuery|null} tableBodyRow  tr DOM element
 * @return {jQuery|null} jQuery array of td DOM elements
 */
oj.TableDomUtils.prototype.getTableBodyCells = function(rowIdx, tableBodyRow)
{
  if (!tableBodyRow)
  {
    tableBodyRow = this.getTableBodyRow(rowIdx);
  }

  if (!tableBodyRow)
  {
    return null;
  }

  var tableBodyCellElements = tableBodyRow.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);

  if (tableBodyCellElements != null && tableBodyCellElements.length > 0)
  {
    return tableBodyCellElements;
  }

  return null;
};

/**
 * Return table row
 * @param {number|null} rowIdx  row index
 * @return {jQuery|null} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.getTableBodyRow = function(rowIdx)
{
  var tableBodyRows = this.getTableBodyRows();

  if (!tableBodyRows)
  {
    return null;
  }
  
  if (rowIdx == null)
  {
    return null;
  }

  if (tableBodyRows.length > rowIdx)
  {
    return $(tableBodyRows[rowIdx]);
  }
  
  return null;
};

/**
 * Return all the table rows
 * @return {jQuery|null} jQuery array of tr DOM elements
 */
oj.TableDomUtils.prototype.getTableBodyRows = function()
{
  if (!this._cachedDomTableBodyRows)
  {
    var tableBody = this.getTableBody();
    var tableBodyRowElements = tableBody.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);

    if (tableBodyRowElements != null && tableBodyRowElements.length > 0)
    {
      this._cachedDomTableBodyRows = tableBodyRowElements;
    }
  }

  return this._cachedDomTableBodyRows;
};

/**
 * Return the table container
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableContainer = function()
{
  if (!this._cachedDomTableContainer)
  {
    if (!this.isDivScroller())
    {
      this._cachedDomTableContainer = $(this.element.get(0).parentNode);
    }
    else
    {
      this._cachedDomTableContainer = $(this.element.get(0).parentNode.parentNode);
    }
  }

  return this._cachedDomTableContainer;
};

/**
 * Return the table footer
 * @return {jQuery|null} jQuery tfoot DOM element
 */
oj.TableDomUtils.prototype.getTableFooter = function()
{
  var table = this.getTable();
  var tableFooter = null;
  if (table)
  {
    tableFooter = table.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CLASS);
    if (tableFooter && tableFooter.length > 0)
    {
      return $(tableFooter.get(0));
    }
  }

  return null;
};

/**
 * Return the footer cell element
 * @param {number} columnIdx  column index
 */
oj.TableDomUtils.prototype.getTableFooterCell = function(columnIdx)
{
  var tableFooterRow = this.getTableFooterRow();
  var tableFooterCells = $(tableFooterRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);

  if (tableFooterCells.length >= columnIdx)
  {
    return $(tableFooterCells[columnIdx]); 
  }

  return null;
};

/**
 * Return table footer row
 * @return {jQuery|null} jQuery tr DOM element
 */
oj.TableDomUtils.prototype.getTableFooterRow = function()
{
  if (!this._cachedDomTableFooterRow)
  {
    var tableFooter = this.getTableFooter();

    if (!tableFooter)
    {
      return null;
    }

    this._cachedDomTableFooterRow = $(tableFooter.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS).get(0));
  }

  return this._cachedDomTableFooterRow;
};

/**
 * Return the table header
 * @return {jQuery|null} jQuery thead DOM element
 */
oj.TableDomUtils.prototype.getTableHeader = function()
{
  if (!this._cachedDomTableHeader)
  {
    var table = this.getTable();
    var tableHeader = null;
    if (table)
    {
      tableHeader = table.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
      if (tableHeader && tableHeader.length > 0)
      {
        this._cachedDomTableHeader = $(tableHeader.get(0));
      }
    }
  }

  return this._cachedDomTableHeader;
};

/**
 * Return table column header
 * @param {number} columnIdx  column index
 * @return {jQuery|null} jQuery th DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderColumn = function(columnIdx)
{
  var headerColumns = this.getTableHeaderColumns();

  if (!headerColumns)
  {
    return null;
  }

  if (headerColumns.length > columnIdx)
  {
    return $(headerColumns[columnIdx]);
  }

  return null;
};

/**
 * Get checkbox cell for accessibility column selection
 * @param {number} columnIdx  column index
 * @return {jQuery|null} jQuery td DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderColumnAccSelect = function(columnIdx)
{
  var headerColumn = this.getTableHeaderColumn(columnIdx);

  if (headerColumn != null)
  {
    var accSelectionCell = headerColumn.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      return $(accSelectionCell[0]);
    }
  }
  return null;
};

/**
 * Return all table column headers
 * @return {jQuery|null} jQuery array of th DOM elements
 */
oj.TableDomUtils.prototype.getTableHeaderColumns = function()
{
  var tableHeaderRow = this.getTableHeaderRow();

  if (tableHeaderRow != null)
  {
    var headerColumnElements = tableHeaderRow.children('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);

    if (headerColumnElements != null && headerColumnElements.length > 0)
    {
      return headerColumnElements;
    }
  }

  return null;
};

/**
 * Return table header row
 * @return {jQuery|null} jQuery th DOM element
 */
oj.TableDomUtils.prototype.getTableHeaderRow = function()
{
  if (!this._cachedDomTableHeaderRow)
  {
    var tableHeader = this.getTableHeader();

    if (!tableHeader)
    {
      return null;
    }

    this._cachedDomTableHeaderRow = $(tableHeader.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_ROW_CLASS).get(0));
  }

  return this._cachedDomTableHeaderRow;
};

/**
 * Return the table div scroller
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableDivScroller = function()
{
  if (!this._cachedDomTableDivScroller)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var tableDivScroller = tableContainer.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_SCROLLER_CLASS);
      if (tableDivScroller && tableDivScroller.length > 0)
      {
        this._cachedDomTableDivScroller = $(tableDivScroller.get(0));
      }
    }
  }
  return this._cachedDomTableDivScroller;
};

/**
 * Return the table no data message element
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableNoDataMessage = function()
{
  if (!this._cachedDomTableNoDataMessage)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var noDataMessage = tableContainer.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_NO_DATA_MESSAGE_CLASS);
      if (noDataMessage && noDataMessage.length > 0)
      {
        this._cachedDomTableNoDataMessage = $(noDataMessage.get(0));
      }
    }
  }
  return this._cachedDomTableNoDataMessage;
};

/**
 * Return the table status message element
 * @return {jQuery|null} jQuery div DOM element
 */
oj.TableDomUtils.prototype.getTableStatusMessage = function()
{
  if (!this._cachedDomTableStatusMessage)
  {
    var tableContainer = this.getTableContainer();
    if (tableContainer)
    {
      var statusMessage = tableContainer.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS);
      if (statusMessage && statusMessage.length > 0)
      {
        this._cachedDomTableStatusMessage = $(statusMessage.get(0));
      }
    }
  }

  return this._cachedDomTableStatusMessage;
};

/**
 * Insert a td element in the appropriate place in the DOM
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  DOM element
 * @param {jQuery} tableBodyRow  tr DOM element
 */
oj.TableDomUtils.prototype.insertTableBodyCell = function(rowIdx, columnIdx, tableBodyCell, tableBodyRow)
{
  this.setTableBodyCellAttributes(rowIdx, columnIdx, tableBodyCell);

  var tableBodyCells = $(tableBodyRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);

  if (columnIdx == 0)
  {
    // insert right after the acc cell
    var accSelectionCell = tableBodyRow.find('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS);

    if (accSelectionCell != null && accSelectionCell.length > 0)
    {
      $(accSelectionCell[0]).after(tableBodyCell);
    }
    else
    {
      // just prepend it
      tableBodyRow.prepend(tableBodyCell)
    }
  }
  else if (tableBodyCells.length >= columnIdx)
  {
    var previousCell = $(tableBodyCells.get(columnIdx - 1));
    previousCell.after(tableBodyCell);
  }
  else
  {
    $(tableBodyRow).append(tableBodyCell);
  }

  return tableBodyCell;
};

/**
 * Insert a tr element in the appropriate place in the DOM
 * @param {number} rowIdx  row index
 * @param {jQuery} tableBodyRow  DOM element
 * @param {Object} row  oj.Row
 * @param {Object} docFrag  document fragment
 */
oj.TableDomUtils.prototype.insertTableBodyRow = function(rowIdx, tableBodyRow, row, docFrag)
{
  var tableBodyRows = null;

  if (docFrag == null)
  {
    // if docFragm is null then get from the DOM nodes
    var tableBody = this.getTableBody();
    tableBodyRows = tableBody.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  }
  else
  {
    tableBodyRows = docFrag.children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  }
  this.setTableBodyRowAttributes(rowIdx, row, tableBodyRow);

  if (docFrag == null)
  {
    if (rowIdx == 0)
    {
      // just prepend it
      tableBody.prepend(tableBodyRow);
    }
    else if (tableBodyRows.length >= rowIdx)
    {
      var previousRow = $(tableBodyRows.get(rowIdx - 1));
      previousRow.after(tableBodyRow);
    }
    else
    {
      tableBody.append(tableBodyRow);
    }
  }
  else
  {
    docFrag.append(tableBodyRow);
  }
  this.clearCachedDomRowData();
};

/**
 * Insert a td element in the appropriate place in the DOM
 * @param {number} columnIdx  column index
 * @param {jQuery} tableFooterCell  DOM element
 */
oj.TableDomUtils.prototype.insertTableFooterCell = function(columnIdx, tableFooterCell)
{
  var tableFooterRow = this.getTableFooterRow();
  var tableFooterCells = $(tableFooterRow).children('.' + oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);

  if (columnIdx == 0)
  {
    // insert right after the acc cell
    var accFooterCell = tableFooterRow.find('.' + oj.TableDomUtils.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);

    if (accFooterCell != null && accFooterCell.length > 0)
    {
      $(accFooterCell[0]).after(tableFooterCell);
    }
    else
    {
      // just prepend it
      tableFooterRow.prepend(tableFooterCell)
    }
  }
  else if (tableFooterRow.length >= columnIdx)
  {
    var previousCell = $(tableFooterCells.get(columnIdx - 1));
    previousCell.after(tableFooterCell);
  }
  else
  {
    tableFooterRow.append(tableFooterCell);
  }

  return tableFooterCell;
};

/**
 * Insert a th element in the appropriate place in the DOM
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  DOM element
 */
oj.TableDomUtils.prototype.insertTableHeaderColumn = function(columnIdx, tableHeaderColumn)
{
  var tableHeaderRow = this.getTableHeaderRow();
  var tableHeaderColumns = this.getTableHeaderColumns();
  // save the column index on the element
  this.setTableHeaderColumnAttributes(columnIdx, tableHeaderColumn);

  // if there is an existing th at the index then replace it
  var oldTableHeaderColumn = this.getTableHeaderColumn(columnIdx);
  if (oldTableHeaderColumn)
    oldTableHeaderColumn.replaceWith(tableHeaderColumn);
  else
  {
    if (columnIdx == 0)
    {
      // insert right after the acc column
      var accSelectionColumn = tableHeaderRow.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_ACC_SELECT_ROW_CLASS);

      if (accSelectionColumn != null && accSelectionColumn.length > 0)
      {
        $(accSelectionColumn[0]).after(tableHeaderColumn);
      }
      else
      {
        // just prepend it
        tableHeaderRow.prepend(tableHeaderColumn)
      }
    }
    else if (tableHeaderColumns.length >= columnIdx)
    {
      var previousColumn = $(tableHeaderColumns.get(columnIdx - 1));
      previousColumn.after(tableHeaderColumn);
    }
    else
    {
      tableHeaderRow.append(tableHeaderColumn);
    }
  }
};

/**
  * Returns true if a div scroller is used. False if tbody scrolling is used.
  * @return {boolean} Whether div scroller is used
  */
oj.TableDomUtils.prototype.isDivScroller = function()
{
  return this._isIE() && this._isIE() < 10 ? true : false;
}

/**
  * Returns true if scrollHeight > clientHeight for height and width.
  * @return {Array} First element is height boolean, followed by width boolean.
  */
oj.TableDomUtils.prototype.isTableContainerScrollable = function()
{
  var tableContainer = this.getTableContainer();
  
  // temporarily hide the message divs to they don't messup our scrollHeight calculations
  var noDataMessage = this.getTableNoDataMessage();
  var noDataDisplay = noDataMessage.css('display').toString();
  noDataMessage.css('display', 'none');
  var statusMessage = this.getTableStatusMessage();
  var statusMessageDisplay = statusMessage.css('display').toString();
  statusMessage.css('display', 'none');
  
  var result = [];
  result[0] = this._tableContainerDimensions['height'] > 0 && tableContainer[0].clientHeight > 0 && tableContainer[0].scrollHeight > tableContainer[0].clientHeight ? true: false;
  result[1] = this._tableContainerDimensions['width'] > 0 && tableContainer[0].clientWidth > 0 && tableContainer[0].scrollWidth > tableContainer[0].clientWidth ? true: false;
  
  noDataMessage.css('display', noDataDisplay);
  statusMessage.css('display', statusMessageDisplay);
  
  return result;
}

/**
  * Refresh the table dimensions
  * @param {boolean} immediate  refresh immediately
  * @param {number} width  table container width
  * @param {number} height  table container height
  */
 oj.TableDomUtils.prototype.refreshTableDimensions = function(immediate, width, height)
{
  if (immediate)
  {
    this._refreshTableDimensions(width, height);
  }
  else
  {
    this._refreshTableDimensionsTimer = {width: width, height: height};
  } 
};

/**
 * Remove a tr element from the DOM
 * @param {number} rowIdx  row index
 */
oj.TableDomUtils.prototype.removeTableBodyRow = function(rowIdx)
{
  var tableBodyRow = this.getTableBodyRow(rowIdx);
  if (tableBodyRow != null)
  {
    tableBodyRow[0].parentNode.removeChild(tableBodyRow[0]);
    this.clearCachedDomRowData();
  }
};

/**
 * Render any delayed cell at the table index
 */
oj.TableDomUtils.prototype.renderDelayedTableBodyCell = function(rowIdx, columnIdx)
{
  var delayedCell = this._getDelayedRenderCell(rowIdx, columnIdx);

  if (delayedCell != null)
  {
    var cellColumnContent = delayedCell.cellRenderer({'cellContext': delayedCell.cellContext,
      'column': delayedCell.column,
      'data': delayedCell.data,
      'row': delayedCell.row.attributes});

    if (cellColumnContent != null)
    {
      // if the renderer returned a value then we set it as the content
      // for the cell
      delayedCell.tableBodyCell.append(cellColumnContent);
    }
    else
    {
      // if the renderer didn't return a value then the existing
      // cell was manipulated. So get it and set the required
      // attributes just in case it was replaced or the attributes
      // got removed
      var tableBodyCell = $(delayedCell.tableBodyRow.children(':not(' + '.' + oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_ACC_SELECT_CLASS + ')')[columnIdx]);
      this.setTableBodyCellAttributes(rowIdx, columnIdx, tableBodyCell);
      this.styleTableBodyCell(columnIdx, tableBodyCell);
    }
  }
};

/**
 * Render any delayed row at the table index
 */
oj.TableDomUtils.prototype.renderDelayedTableBodyRow = function(rowIdx)
{
  var delayedRow = this._getDelayedRenderRow(rowIdx);
  
  if (delayedRow != null)
  {
    var rowContent = delayedRow.rowRenderer({'rowContext': delayedRow.rowContext, 
                                             'row': delayedRow.row.attributes});

    var tableBodyRow = delayedRow.tableBodyRow;
    
    if (rowContent != null)
    {
      // if the renderer returned a value then we set it as the content
      // for the row
      tableBodyRow.append(rowContent);
    }
    else
    {
      // if the renderer didn't return a value then the existing
      // row was manipulated. So get it and set the required
      // attributes just in case it was replaced or the attributes
      // got removed
      var tableBody = this.getTableBody();
      tableBodyRow = $(tableBody.children()[rowIdx]);
      this.clearCachedDomRowData();
      this.setTableBodyRowAttributes(rowIdx, delayedRow.row, tableBodyRow);
      this.styleTableBodyRow(tableBodyRow);
    }
    this.createTableBodyCellAccSelect(rowIdx, tableBodyRow);

    // set the cell attributes and styling. Skip the 1st one
    // because it's the acc row select td
    var tableBodyCells = tableBodyRow.children('td');
    var i;
    for (i = 1; i < tableBodyCells.length; i++)
    {
      var tableBodyCell = $(tableBodyCells[i]);
      this.setTableBodyCellAttributes(rowIdx, i - 1, tableBodyCell);
      this.styleTableBodyCell(i - 1, tableBodyCell);
    }
  }
};

/**
 * Set the td cell. Calls the cell renderer or populates the value.
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyRow  tr DOM element
 * @param {Object} row  oj.Row
 * @param {function(Object)} cellRenderer cell renderer
 * 
 */
oj.TableDomUtils.prototype.setTableBodyCell = function(rowIdx, columnIdx, tableBodyRow, row, cellRenderer)
{
  var columns = this.component['columnMetaData']();
  var column = columns[columnIdx];

  var tableBodyCell = this.getTableBodyCell(rowIdx, columnIdx, tableBodyRow);

  if (!tableBodyCell)
  {
    tableBodyCell = this.createTableBodyCell(rowIdx, columnIdx);
    this.styleTableBodyCell(columnIdx, tableBodyCell);
    this.insertTableBodyCell(rowIdx, columnIdx, tableBodyCell, tableBodyRow);
  }
  else
  {
    tableBodyCell.empty();
  }
  var data = null;

  if (column.field != null)
  {
    data = row.get(column.field);
  }

  if (cellRenderer)
  {
    var cellContext = this.getRendererContextObject(row, tableBodyCell[0]);
    var delayedCellObj = {};
    delayedCellObj.cellRenderer = cellRenderer;
    delayedCellObj.cellContext = cellContext;
    delayedCellObj.data = data;
    delayedCellObj.row = row;
    delayedCellObj.column = column;
    delayedCellObj.tableBodyRow = tableBodyRow;
    delayedCellObj.tableBodyCell = tableBodyCell;
    this.addDelayedRenderCell(rowIdx, columnIdx, delayedCellObj);
  }
  else
  {
    tableBodyCell.append(data);
  }
};

/**
 * Set the attributes on the cell like rowIdx, columnIdx, etc
 * @param {number} rowIdx  row index
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  td DOM element
 */
oj.TableDomUtils.prototype.setTableBodyCellAttributes = function(rowIdx, columnIdx, tableBodyCell)
{
  var accessibility = this.options['accessibility'];
  var column = this.component['columnMetaData'](columnIdx);
  var rowHeaderColumnId = null;
  var isTableHeaderless = this.getTableHeader() == null ? true : false;

  if (accessibility != null && accessibility['rowHeader'] != null)
  {
    rowHeaderColumnId = accessibility['rowHeader'];
  }
  else
  {
    rowHeaderColumnId = this.component['columnMetaData'](0).id;
  }

  var cellRowHeaderId = rowHeaderColumnId + '_' + rowIdx;

  var headers = column.id;
  if (rowHeaderColumnId == column.id)
  {
    tableBodyCell.attr('id', cellRowHeaderId);

    if (isTableHeaderless)
    {
      headers = '';
    }
  }
  else
  {
    if (!isTableHeaderless)
    {
      headers = headers + ' ' + cellRowHeaderId;
    }
    else
    {
      headers = cellRowHeaderId;
    }
  }

  if (!tableBodyCell.attr('headers'))
  {
    tableBodyCell.attr('headers', headers);
  }
};

/**
 * Set the attributes on the row like rowIdx, etc
 * @param {number} rowIdx  row index
 * @param {Object} row  oj.Row
 * @param {jQuery} tableBodyRow  tr DOM element
 */
oj.TableDomUtils.prototype.setTableBodyRowAttributes = function(rowIdx, row, tableBodyRow)
{
};

/**
 * Set the attributes on the header like columndx, etc
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  th DOM element
 */
oj.TableDomUtils.prototype.setTableHeaderColumnAttributes = function(columnIdx, tableHeaderColumn)
{
  var column = this.component['columnMetaData'](columnIdx);

  if (!tableHeaderColumn.attr('id'))
  {
    tableHeaderColumn.attr('id', column.id);
  }
};

/**
 * Style the initial table
 */
oj.TableDomUtils.prototype.styleInitialTable = function()
{
  var table = this.getTable();
  var tableContainer = this.getTableContainer();
  var tableHeader = table.children('thead');
  tableHeader = tableHeader.length > 0 ? $(tableHeader[0]) : null;
  var tableFooter = table.children('tfoot');
  tableFooter = tableFooter.length > 0 ? $(tableFooter[0]) : null;
  var tableBody = table.children('tbody');
  tableBody = tableBody.length > 0 ? $(tableBody[0]) : null;
  // set the tabindex
  table.attr('tabindex', '0');
  // set focusable
  this.component._focusable(table);
  // set focusable
  this.component._focusable(tableContainer);

  this.styleTableHeader(tableHeader);
  this.styleTableFooter(tableFooter);
  this.styleTableBody(tableBody);
};

/**
 * Style the tbody element
 * @param {jQuery} tableBody thead DOM element
 */
oj.TableDomUtils.prototype.styleTableBody = function(tableBody)
{
  tableBody.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_BODY_CLASS);
  // Add a special marker attribute to tell child components that they are container within table
  tableBody.attr(oj.Components._OJ_CONTAINER_ATTR, this.component['widgetName']);
};

/**
 * Style the td element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableBodyCell  td DOM element
 */
oj.TableDomUtils.prototype.styleTableBodyCell = function(columnIdx, tableBodyCell)
{
  var options = this.options;
  var column = this.component['columnMetaData'](columnIdx);

  if (column.style != null && tableBodyCell.attr('style') != column.style)
  {
    tableBodyCell.attr('style', column.style);
  }
  
  if (!tableBodyCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS))
  {
    tableBodyCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
  }
  
  if (options.verticalGridVisible == oj.TableDomUtils._OPTION_ENABLED)
  {
    if (!tableBodyCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_VGRID_LINES_CLASS))
    {
      tableBodyCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_VGRID_LINES_CLASS);
    }
  }
  if (column.className)
  {
    if (!tableBodyCell.hasClass(column.className))
    {
      tableBodyCell.addClass(column.className);
    }
  }
};

/**
 * Style the tr element
 * @param {jQuery} tableBodyRow  tr DOM element
 */
oj.TableDomUtils.prototype.styleTableBodyRow = function(tableBodyRow)
{
  if (!tableBodyRow.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS))
  {
    tableBodyRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_DATA_ROW_CLASS);
  }
  if (this.options.horizontalGridVisible == oj.TableDomUtils._OPTION_ENABLED)
  {
    if (!tableBodyRow.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS))
    {
      tableBodyRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
    }
  }

  this.component._hoverable(tableBodyRow);
};

/**
 * Style the table container
 * @param {jQuery} tableContainer  div DOM element
 */
oj.TableDomUtils.prototype.styleTableContainer = function(tableContainer)
{
  var options = this.options;
  
  // add rootAttributes
  var rootAttributes = this.options['rootAttributes'];
  tableContainer.attr('class', '');
  var attr, value;
  for (attr in rootAttributes)
  {
    if (rootAttributes.hasOwnProperty(attr))
    {
      value = rootAttributes[attr];
      tableContainer.attr(attr, value);
    }
  }
  // add main css class to container
  tableContainer.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CLASS);
  tableContainer.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_CONTAINER_CLASS);
  tableContainer.addClass(oj.TableDomUtils.MARKER_STYLE_CLASSES._WIDGET);
  
  // copy over the table styling
  var table = this.getTable();
  if (table.attr('style') != null)
  {
    tableContainer.attr('style', table.attr('style').toString());
  }
  tableContainer.css('display', 'block');
};

/**
 * Style the tfoot element
 * @param {jQuery} tableFooter tfoot DOM element
 */
oj.TableDomUtils.prototype.styleTableFooter = function(tableFooter)
{
  if (!tableFooter)
  {
    return;
  }
  tableFooter.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CLASS);
  var tableFooterRow = $(tableFooter.children('tr')[0]);
  tableFooterRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS);
};

/**
 * Style the td element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableFooterCell  td DOM element
 */
oj.TableDomUtils.prototype.styleTableFooterCell = function(columnIdx, tableFooterCell)
{
  var options = this.options;
  var lastColumn = columnIdx == this.component['columnMetaData']().length - 1 ? true : false;
  var column = this.component['columnMetaData'](columnIdx);

  tableFooterCell.attr('style', column.footerStyle);
  if (!tableFooterCell.hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS))
  {
    tableFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);
  }
  if (options.verticalGridVisible == oj.TableDomUtils._OPTION_ENABLED && !lastColumn)
  {
    tableFooterCell.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_FOOTER_CELL_VGRID_LINES_CLASS);
  }
  if (column.footerClassName)
  {
    tableFooterCell.addClass(column.footerClassName);
  }
};

/**
 * Style the thead element
 * @param {jQuery} tableHeader thead DOM element
 */
oj.TableDomUtils.prototype.styleTableHeader = function(tableHeader)
{
  if (!tableHeader)
  {
    return;
  }
  tableHeader.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_CLASS);
  tableHeader.css('display', 'table-header-group');
  var tableHeaderRow = $(tableHeader.children('tr')[0]);
  tableHeaderRow.addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HEADER_ROW_CLASS);
  tableHeaderRow.css('position', 'relative');
};

/**
 * Style the th element
 * @param {number} columnIdx  column index
 * @param {jQuery} tableHeaderColumn  th DOM element
 * @param {string} columnSelectionMode  column selection mode
 */
oj.TableDomUtils.prototype.styleTableHeaderColumn = function(columnIdx, tableHeaderColumn, columnSelectionMode)
{
  var lastColumn = columnIdx == this.component['columnMetaData']().length - 1 ? true : false;
  var column = this.component['columnMetaData'](columnIdx);
  tableHeaderColumn.addClass(oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);
  tableHeaderColumn.attr('style', column.headerStyle);
};

/**
  * Return delayed cell for rendering
  * @private
  * @param {number} rowIdx  row index
  * @param {number} columnIdx  column index
  * @return {Object} delayed cell
  */
oj.TableDomUtils.prototype._getDelayedRenderCell = function(rowIdx, columnIdx)
{
  if (this._delayedRenderCells != null)
  {
    if (this._delayedRenderCells[rowIdx] != null)
    {
      return this._delayedRenderCells[rowIdx][columnIdx];
    }
  }
  return null;
};

/**
  * Return delayed row for rendering
  * @private
  * @param {number} rowIdx  row index
  * @return {Object} delayed row
  */
oj.TableDomUtils.prototype._getDelayedRenderRow = function(rowIdx)
{
  if (this._delayedRenderRows != null)
  {
    return this._delayedRenderRows[rowIdx];
  }
  return null;
};

/**
  * Helper function which returns if the browser is IE and if so the version.
  * @private
  * @return {number|null} IE version. null if not IE.
  */
oj.TableDomUtils.prototype._isIE = function()
{
  var userAgent = navigator.userAgent;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var resultArray = (new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})')).exec(userAgent);
    if (resultArray != null)
    {
      return parseFloat(resultArray[1]);
    }
  }
  else if (userAgent.indexOf('Trident') >= 0)
  {
    return 11;
  }
  return null;
};

/**
  * Refresh the table dimensions
  * @param {number} width  table container width
  * @param {number} height  table container height
  */
 oj.TableDomUtils.prototype._refreshTableDimensions = function(width, height)
{
  var options = this.options;
  var table = this.getTable();
  var tableHeader = this.getTableHeader();
  var tableFooter = this.getTableFooter();
  var tableHeaderRow = this.getTableHeaderRow();
  var tableContainer = this.getTableContainer();
  var tableBody = this.getTableBody();
  var data = options['data'];
  
  if (typeof this._specifiedTableStyle == "undefined")
  {
    if (typeof table.attr('style') == "undefined")
    {
      this._specifiedTableStyle = null;
    }
    else
    {
      this._specifiedTableStyle = table.attr('style');
    }
  }
  
  if (width > 0 && height > 0 && 
      this._tableContainerWidthConstrained === false && this._tableContainerHeightConstrained === false)
  {
    // we do not need to re-size if the resize listener calls us but height/width are not constrained
    return;
  }
  
  // first remove any styling so that the browser sizes the table
  this._removeTableDimensionsStyling();
  table.attr('style', this._specifiedTableStyle);
  
  if (this._tableContainerDimensions != null)
  {
    if (width > 0 && this._tableContainerWidthConstrained)
    {
      this._tableContainerDimensions['width'] = width;
    }
    if (height > 0 && this._tableContainerHeightConstrained)
    {
      this._tableContainerDimensions['height'] = height;
    }
  }
  else
  {
    this._tableContainerDimensions = this.getTableContainerDimensions();
    
    if (this._tableContainerDimensions == null)
    {
      // call refreshTableDimensions at a later time if the browser hasn't
      // finished rendering yet
      var self = this;
      setTimeout(function(){self.refreshTableDimensions(false, null, null)}, 100);
      return;
    }

    // Denotes whether the table container dimensions are constrained
    // such as by stretching or absolute dimensions
    this._tableContainerHeightConstrained = true;
    this._tableContainerWidthConstrained = true;

    if (this._tableContainerDimensions['height'] == 0)
    {
      this._tableContainerHeightConstrained = false;
    }
    if (this._tableContainerDimensions['width'] == 0)
    {
      this._tableContainerWidthConstrained = false;
    }
  }
  
  if (!this._tableBorderWidth)
  {
    this._tableBorderWidth = tableContainer.outerWidth() - tableContainer.innerWidth();
  }
  if (!this._tableBorderHeight)
  {
    this._tableBorderHeight = tableContainer.outerHeight() - tableContainer.innerHeight();
  }
  
  var isTableHeightScrolled = this.isTableContainerScrollable()[0];
  var isTableWidthScrolled = this.isTableContainerScrollable()[1];
  var isTableMinHeightSet = false;
 
  // size the tableBody so it's at least min size
  var minHeight = parseInt(table.css('minHeight'), 10);
  var minWidth = parseInt(table.css('minWidth'), 10);
  if (minHeight > 0)
  {
    isTableMinHeightSet = true;
    var tableHeaderHeight = 0;
    if (tableHeader != null)
    {
      tableHeaderHeight = tableHeader.height();
    }
    var tableFooterHeight = 0;
    if (tableFooter != null)
    {
      tableFooterHeight = tableFooter.height();
    }
    tableBody.css('min-height', minHeight - tableHeaderHeight - tableFooterHeight - this._tableBorderHeight + 'px');
  }
  
  if (minWidth > 0)
  {
    tableBody.css('min-width', minWidth - this._tableBorderWidth + 'px');
  }

  if (!isTableHeightScrolled && !isTableWidthScrolled &&
    !this._tableContainerHeightConstrained && !this._tableContainerWidthConstrained &&
    !isTableMinHeightSet)
  {
    if (data != null && data.size() > 0)
    {
      // if we have data and height and width are not specified then
      // we want the databody to be the same size as the row data
      tableBody.css('display', 'table-row-group');
    }
    else
    {
      tableBody.css('display', 'block');
    }
    this._refreshTableMessagingPosition();
    this._removeTableBodyRowBottomBorder();

    // we don't need to set any other table dimensions if height or width are not specified
    // just let the browser do everything
    return;
  }

  // let the browser layout the column widths
  if (this._setColumnWidths() === false)
  {
    // call refreshTableDimensions at a later time if the browser hasn't
    // finished rendering yet
    var self = this;
    setTimeout(function(){self.refreshTableDimensions(false, null, null)}, 100);
    return;
  }
  table.css('display', 'block');
  
  var captionHeight = 0;
  var caption = table.children('caption');
  if (caption != null && caption.length > 0)
  {
    captionHeight = $(caption[0]).height();
    caption.css('position', 'absolute');
    caption.css('top', '0px');
    caption.css('display', 'inline');
    if (tableHeader != null)
    {
      tableHeader.css('border-top', tableContainer.css('border-top').toString());
    }
  }

  // apply the styling which sets the fixed column headers, etc
  var tableHeaderHeight = 0;
  if (tableHeader != null)
  {
    tableHeader.css('position', 'absolute');
    
    // if there is a caption, position the thead below it
    tableHeader.css('top', captionHeight + 'px');
    tableHeaderRow.css('display', 'block');
    tableHeaderHeight = tableHeader.height();
    
     if (this.isDivScroller())
    {
      // if we use fallback scrolling then the padding top of the container is used to 
      // position the table scroller to below the table header.
      tableContainer.css('padding-top', tableHeaderHeight + captionHeight + 'px');
    }
    else
    {
      tableBody.css('top', tableHeaderHeight + captionHeight + 'px');
    }
  }
  else
  {
    if (this.isDivScroller())
    {
      tableContainer.css('padding-top', captionHeight + 'px');
    }
  }
  
  var tableFooterHeight = 0;
  if (tableFooter != null)
  {
    tableFooter.css('position', 'absolute');
    tableFooter.css('display', 'block');
    tableFooterHeight = tableFooter.height();
  }

  tableBody.css('display', 'block');

  if (!this.isDivScroller())
  {
    tableBody.css('position', 'absolute');
    tableBody.css('overflow-y', 'auto');
    
    if (this._tableContainerWidthConstrained)
    {
      tableBody.css('width', this._tableContainerDimensions['width'] - this._tableBorderWidth);
    }
    
    if (isTableWidthScrolled)
    {
      if (data != null && data.size() > 0)
      {
        tableBody.css('overflow-x', 'auto');
        if (tableHeader != null)
        {
          tableHeader.css('width', this._tableContainerDimensions['width'] - this._tableBorderWidth);
        }
        tableContainer.css('overflow-x', 'hidden');
      }
      else
      {
        // if we have no data then use the tableContainer's horizontal scroller
        tableContainer.css('overflow-x', 'auto');
      }
      if (tableHeaderRow != null)
      {
        // add relative positioning so we can move the table header when width
        // is scrolled
        tableHeaderRow.css('position', 'relative');
      }
    }
    else
    {
      tableBody.css('overflow-x', 'hidden');
    }

    // if we don't use fallback scrolling then size the table body
    // to fit in the height
    var tableBodyHeight = this._tableContainerDimensions['height'] - tableHeaderHeight - tableFooterHeight - captionHeight - this._tableBorderHeight;
    if (tableBodyHeight > 0)
    {
      tableBody.css('height', tableBodyHeight + 'px');
      tableBody.css('min-height', tableBodyHeight + 'px');
    }
  }

  if (!isTableWidthScrolled)
  {
    if ((data == null || data.size() == 0) && tableHeader != null && tableHeader.width() > 0)
    {
      // if width is not set and we don't currently have any data. We should
      // set the tableBody width to the tableHeader width to prevent 
      // a zero width table.
      tableBody.css('width', tableHeader.width() + 'px');
    }
  }

  var tableBodyWidth = tableBody.width();

  if (tableHeader != null)
  {
    var scrollbarWidth = this.getScrollbarWidth();
      
    if (scrollbarWidth > 0)
    {
      // if we have scrollbars then size the tableheader 
      // to align with the scrollbars
      tableHeader.css('overflow', 'hidden');
      tableHeader.css('width', tableBodyWidth - scrollbarWidth - this._tableBorderWidth + 'px');
    }
    else
    {
      // else table header should be the same width as the table body
      tableHeader.css('width', tableBodyWidth + 'px');
    }
  }
  
  if (this.isDivScroller())
  {
    var tableDivScroller = this.getTableDivScroller();
    tableDivScroller.css('overflow', 'auto');

    if (isTableWidthScrolled)
    {
      tableDivScroller.css('width', this._tableContainerDimensions['width']);
    }

    if (isTableHeightScrolled)
    {
      tableDivScroller.css('height', this._tableContainerDimensions['height'] - tableHeaderHeight - tableFooterHeight);
    }
    tableBody.css('float', 'left');
  }
  
  if (tableFooter != null)
  {
    // position the footer at the bottom
    tableFooter.css('bottom', '0px');
    // table footer should be the same width as the table body
    tableFooter.css('width', tableBodyWidth + 'px');
  }
  
  if (this._tableContainerDimensions['width'] == 0)
  {
    if (!this.isDivScroller())
    {
      // if width is not specified then size everything to the tbody width
      // We need to manually do this because the thead/tbody/tfoot has absolute positioning
      // and hence does not get included in the container div sizing
      tableBody.css('display', 'inline-block');
      table.css('width', tableBody.width() + this._tableBorderWidth + 'px');
      tableContainer.css('width', tableBody.width() + this._tableBorderWidth + 'px');
      tableBody.css('display', 'block');
    }
    else
    {
      tableContainer.css('width', tableBody.width() + this._tableBorderWidth + 'px');
    }
  }

  if (this._tableContainerDimensions['height'] == 0)
  {
    // if no height is set then resize the
    // tableContainer div so that it includes the tbody and thead.
    // We need to manually do this because the thead/tbody/tfoot has absolute positioning
    // and hence does not get included in the container div sizing
    var totalHeight = tableHeaderHeight + tableFooterHeight + captionHeight + tableBody.height() + this._tableBorderHeight;
    if (totalHeight > minHeight)
    {
      if (!this.isDivScroller())
      {
        table.css('height', totalHeight + 'px');
      }
      tableContainer.css('height', totalHeight + 'px');
    }
  }

  this._removeTableBodyRowBottomBorder();
  this._refreshTableMessagingPosition();
};

/**
  * Refresh the table messaging position
  * @private
  */
oj.TableDomUtils.prototype._refreshTableMessagingPosition = function()
{
  var tableContainer = this.getTableContainer();
  var tableBody = this.getTableBody();
  var tableStatusMessage = this.getTableStatusMessage();
  var tableNoDataMessage = this.getTableNoDataMessage();
  
  // refresh the status message position
  var isRTL = (this.component._GetReadingDirection() === "rtl");
  // position status in the center
  var options = {'my': 'center', 'at': 'center', 'collision': 'none', 'of': tableContainer};
  options = oj.PositionUtils.normalizeHorizontalAlignment(options, isRTL);
  (/** @type {Object} */ (tableStatusMessage)).position(options);

  // refresh the no data message position
  options = {'my': 'start top', 'at': 'start top', 'collision': 'none', 'of': tableBody};
  options = oj.PositionUtils.normalizeHorizontalAlignment(options, isRTL);
  (/** @type {Object} */ (tableNoDataMessage)).position(options);
  tableNoDataMessage.css('left', '0px;');
};

/**
  * Iterate through the columns and remove the widths
  * @private
  */
oj.TableDomUtils.prototype._removeHeaderColumnAndCellColumnWidths = function()
{
  var data = this.options['data'];
  var columns = this.component['columnMetaData']();

  var i, headerColumn;
  for (i = 0; i < columns.length; i++)
  {
    headerColumn = this.getTableHeaderColumn(i);
    if (headerColumn != null)
    {
      headerColumn.css('min-width', '');
    }
  }

  if (data != null && data.size() > 0)
  {
    var tableBodyRows = this.getTableBodyRows();
    if (tableBodyRows != null && tableBodyRows.length > 0)
    {
      var tableBodyCell;
      for (i = 0; i < columns.length; i++)
      {

        tableBodyCell = this.getTableBodyCell(0, i, null);
        if (tableBodyCell != null)
        {
          tableBodyCell.css('min-width', '');
        }
      }
    }
  }
};

/**
 * Remove table cell bottom border
 * @private
 */
oj.TableDomUtils.prototype._removeTableBodyRowBottomBorder = function()
{
  if (this.options.horizontalGridVisible != oj.TableDomUtils._OPTION_ENABLED)
  {
    return;
  }
  
  var table = this.getTable();
  var tableContainer = this.getTableContainer();
  var tableBodyRows = this.getTableBodyRows();

  if (tableBodyRows != null && tableBodyRows.length > 0)
  {
    // first make sure that all rows have hgrid
    var i;
    for (i = 0; i < tableBodyRows.length; i++)
    {
      if (!$(tableBodyRows[i]).hasClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS))
      {
        $(tableBodyRows[i]).addClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
      }
    }
    var lastTableBodyRow = $(tableBodyRows[tableBodyRows.length - 1]);
    var lastTableBodyRowRect = lastTableBodyRow[0].getBoundingClientRect();
    var tableRect = table[0].getBoundingClientRect();
    var borderBottomWidth = parseInt(lastTableBodyRow.css('borderBottomWidth'), 10) + parseInt(tableContainer.css('borderBottomWidth'), 10);

    if (Math.abs(lastTableBodyRowRect.bottom + borderBottomWidth - tableRect.bottom) <= 1)
    {
      lastTableBodyRow.removeClass(oj.TableDomUtils.CSS_CLASSES._TABLE_HGRID_LINES_CLASS);
    }
  }
};
 
/**
 * Remove table dimensions styling
 * @private
 */
oj.TableDomUtils.prototype._removeTableDimensionsStyling = function()
{
  var table = this.getTable();
  var tableHeader = this.getTableHeader();        
  var tableHeaderRow = this.getTableHeaderRow();
  var tableBody = this.getTableBody();

  // first remove any styling so that the browser sizes the table
  if (tableHeader != null)
  {
    tableHeader.attr('style', '');
    tableHeaderRow.attr('style', '');
  }
  table.css('display', '');
  tableBody.attr('style', '');

  this._removeHeaderColumnAndCellColumnWidths();
};

/**
 * Iterate through the columns and get and then set the widths
 * for the columns and first row this is so that when we re-apply the styling
 * the headers and footers will align with the cells
 * @private
 */
oj.TableDomUtils.prototype._setColumnWidths = function()
{
 var data = this.options['data'];
 var columns = this.component['columnMetaData']();
 // used to track if the widths are zero. This happens when the browser hasn't
 // finished rendering the columns
 var notZeroWidth = null;
 var columnWidths = [];
 var columnPaddingWidths = [];
 var i, headerColumnCell, headerColumnDiv, headerColumnTextDivHeight, headerColumnTextDiv, footerCell;
 for (i = 0; i < columns.length; i++)
 {
   notZeroWidth = false;
   headerColumnCell = this.getTableHeaderColumn(i);
   if (headerColumnCell != null)
   {
     // read in the widths first. Set the widths in a separate loop so setting
     // the widths of early columns does not affect the widths of the rest
     if (headerColumnCell.width() > 0)
     {
       notZeroWidth = true;
     }
     columnWidths[i] = headerColumnCell.width();
     columnPaddingWidths[i] = parseInt(headerColumnCell.css('padding-right'), 10) + parseInt(headerColumnCell.css('padding-left'), 10);

     // also set the header heights
     headerColumnTextDivHeight = null;
     headerColumnTextDiv = headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
     if (headerColumnTextDiv && headerColumnTextDiv.length > 0)
     {
       headerColumnTextDivHeight = headerColumnTextDiv.get(0).clientHeight;
     }
     if (headerColumnTextDivHeight != null)
     {
       headerColumnDiv = headerColumnCell.find('.' + oj.TableDomUtils.CSS_CLASSES._COLUMN_HEADER_CLASS);
       headerColumnDiv.css('min-height', headerColumnTextDivHeight + 'px');
     }
   }
 }
 for (i = 0; i < columns.length; i++)
 {
   headerColumnCell = this.getTableHeaderColumn(i);
   if (headerColumnCell != null)
   {
     headerColumnCell.css('min-width', columnWidths[i] + 'px');
   }
   footerCell = this.getTableFooterCell(i);
   if (footerCell != null)
   {
     footerCell.css('min-width', columnWidths[i] + 'px');
   }
 }

 if (data != null && data.size() > 0)
 {
   var tableBodyRows = this.getTableBodyRows();
   if (tableBodyRows != null && tableBodyRows.length > 0)
   {
     var tableBodyCell, tableBodyCellPaddingWidth, adjustedColumnWidth;
     for (i = 0; i < columns.length; i++)
     {

       tableBodyCell = this.getTableBodyCell(0, i, null);
        if (tableBodyCell != null)
        {
          if (tableBodyCell.width() > 0)
          {
            notZeroWidth = true;
          }
          tableBodyCellPaddingWidth = parseInt(tableBodyCell.css('padding-right'), 10) + parseInt(tableBodyCell.css('padding-left'), 10);
          adjustedColumnWidth = null;
          if (tableBodyCellPaddingWidth > columnPaddingWidths[i])
          {
            adjustedColumnWidth = columnWidths[i] - tableBodyCellPaddingWidth + columnPaddingWidths[i];
          }
          else
          {
            adjustedColumnWidth = columnWidths[i] + columnPaddingWidths[i] - tableBodyCellPaddingWidth;
          }
          tableBodyCell.css('min-width', adjustedColumnWidth + 'px');
        }
     }
   }
 }
 
 return notZeroWidth;
};

/**
 * @const
 */
oj.TableDomUtils.CSS_CLASSES =
  {
    _CHECKBOX_ACC_SELECT_COLUMN_CLASS: 'oj-table-checkbox-acc-select-column',
    _CHECKBOX_ACC_SELECT_ROW_CLASS: 'oj-table-checkbox-acc-select-row',
    _TABLE_CONTAINER_CLASS: 'oj-table-container',
    _TABLE_SCROLLER_CLASS: 'oj-table-scroller',
    _TABLE_CLASS: 'oj-table',
    _TABLE_ELEMENT_CLASS: 'oj-table-element',
    _TABLE_FOOTER_CLASS: 'oj-table-footer',
    _TABLE_FOOTER_ROW_CLASS: 'oj-table-footer-row',
    _TABLE_HEADER_CLASS: 'oj-table-header',
    _TABLE_HEADER_ROW_CLASS: 'oj-table-header-row',
    _COLUMN_HEADER_CELL_CLASS: 'oj-table-column-header-cell',
    _COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS: 'oj-table-column-header-acc-select-column',
    _COLUMN_HEADER_ACC_SELECT_ROW_CLASS: 'oj-table-column-header-acc-select-row',
    _COLUMN_HEADER_CLASS: 'oj-table-column-header',
    _COLUMN_HEADER_TEXT_CLASS: 'oj-table-column-header-text',
    _COLUMN_HEADER_ASC_CLASS: 'oj-table-column-header-asc',
    _COLUMN_HEADER_DSC_CLASS: 'oj-table-column-header-dsc',
    _COLUMN_HEADER_SORT_PACEHOLDER_CLASS: 'oj-table-column-header-sort-placeholder',
    _COLUMN_HEADER_ACC_ASC_LINK_CLASS: 'oj-table-column-header-acc-asc-link',
    _COLUMN_HEADER_ACC_DSC_LINK_CLASS: 'oj-table-column-header-acc-dsc-link',
    _COLUMN_HEADER_ASC_LINK_CLASS: 'oj-table-column-header-asc-link',
    _COLUMN_HEADER_DSC_LINK_CLASS: 'oj-table-column-header-dsc-link',
    _COLUMN_HEADER_ASC_ICON_CLASS: 'oj-table-column-header-asc-icon',
    _COLUMN_HEADER_DSC_ICON_CLASS: 'oj-table-column-header-dsc-icon',
    _TABLE_BODY_CLASS: 'oj-table-body',
    _TABLE_DATA_ROW_CLASS: 'oj-table-body-row',
    _TABLE_DATA_CELL_CLASS: 'oj-table-data-cell',
    _TABLE_DATA_CELL_ACC_SELECT_CLASS: 'oj-table-data-cell-acc-select',
    _TABLE_VGRID_LINES_CLASS: 'oj-table-vgrid-lines',
    _TABLE_HGRID_LINES_CLASS: 'oj-table-hgrid-lines',
    _TABLE_FOOTER_CELL_CLASS: 'oj-table-footer-cell',
    _TABLE_FOOTER_CELL_VGRID_LINES_CLASS: 'oj-table-footer-cell-vgrid-lines',
    _TABLE_STATUS_MESSAGE_CLASS: 'oj-table-status-message',
    _TABLE_NO_DATA_MESSAGE_CLASS: 'oj-table-no-data-message',
    _WIDGET_ICON_CLASS: 'oj-component-icon',
    _HIDDEN_CONTENT_ACC_CLASS: 'oj-helper-hidden-accessible'
  };

/**
 * @const
 */
oj.TableDomUtils.MARKER_STYLE_CLASSES =
  {
    _WIDGET: 'oj-component',
    _ACTIVE: 'oj-active',
    _CLICKABLE_ICON: 'oj-clickable-icon',
    _DISABLED: 'oj-disabled',
    _ENABLED: 'oj-enabled',
    _FOCUS: 'oj-focus',
    _HOVER: 'oj-hover',
    _SELECTED: 'oj-selected'
  };
  
/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._COLUMN_HEADER_ROW_SELECT_ID =   '_hdrColRowSel';

/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._OPTION_ENABLED = 'enabled';
/**
 * @private
 * @const
 * @type {string}
 */
oj.TableDomUtils._OPTION_DISABLED = 'disabled';
/**
 * @private
 * @const
 */
oj.TableDomUtils._OPTION_SELECTION_MODES =
  {
    _SINGLE: 'single',
    _MULTIPLE: 'multiple'
  };
});
