define(['ojs/ojcore', 'jquery', 'ojs/ojmodel', 'ojs/ojdatacollection-common', 'ojs/ojtable'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
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

/*jslint browser: true*/

/**
 * @export
 * @class oj.ModelRow
 * @classdesc Object representing name/value pairs for a row of data
 *
 * @param {oj.Model} model oj.Model object 
 * @param {Object=} options 
 *                  rowSet: rowSet for this row
 * @constructor
 */
oj.ModelRow = function(model, options)
{
  oj.ModelRow._init(this, model, options, null);
};


// Subclass from oj.Object 
oj.Object.createSubclass(oj.ModelRow, oj.Row, "ModelRow.ModelRow");

oj.ModelRow.prototype.Init = function()
{
  oj.Row.superclass.Init.call(this);
};

/**
 * 
 * @export
 * @desc Attribute/value pairs held by the Row.
 * 
 * @type Object
 */
oj.ModelRow.prototype.attributes = {};

/**
 * @export
 * @desc The Row's unique ID. 
 * 
 * @type String
 */
oj.ModelRow.prototype.id = null;

/**
 * @export
 * @desc The name of the row property to be used as the unique ID. See property id. This defaults to a value of "id".
 *  
 * @type String
 */
oj.ModelRow.prototype.idAttribute = null;

oj.ModelRow._init = function(row, model, options, properties)
{
  var prop = null, attrCopy;

  row.Init();

  row._model = model;
  row.id = model.id;
  row.idAttribute = model.idAttribute;
  row.attributes = model.attributes;
  row.index = model.index;

  options = options || {};

  // First, copy all properties passed in
  for (prop in properties)
  {
    if (properties.hasOwnProperty(prop))
    {
      row[prop] = properties[prop];
    }
  }
  row['context'] = options['context'];
};

/**
 * @export
 * Return a copy of the Row with identical attributes and settings
 */
oj.ModelRow.prototype.clone = function()
{
  return this._model.clone();
};

/**
 * Returns the value of the property from the Row.
 * @param {string} property Property to get from row
 * @return {Object} value of property
 * @export
 */
oj.ModelRow.prototype.get = function(property)
{
  return this._model.get(property);
};

/**
 * Return the oj.Model object which was wrapped
 * @return {oj.Model} oj.Model object
 * 
 * @export
 */
oj.ModelRow.prototype.getModel = function()
{
  return this._model;
};

/**
 * Set the value(s) of one or more attributes of the row
 * @param {string||Object} property Property attribute name to set, or an Object containing attribute/value pairs
 * @param {Object=} value Value for property if property is not an Object containing attribute/value pairs
 * @param {Object=} options Options may be passed in
 * @returns {Object||boolean} the row itself, false if failed
 * @export
 */
oj.ModelRow.prototype.set = function(property, value, options)
{
  return this._model.set(property, value, options);
};

/**
 * @export
 * Return all of the Row's attributes as an array
 * 
 * @returns {Array} array of all the Row's attributes
 */
oj.ModelRow.prototype.keys = function()
{
  return this._model.keys();
};

/**
 * @export
 * Return all of the Row's attributes values as an array
 * 
 * @returns {Array} array of all the Row's attributes values
 */
oj.ModelRow.prototype.values = function()
{
  return this._model.values();
};

/**
 * @export
 * Return an array of attributes/value pairs found in the Row 
 * 
 * @returns {Object} returns the Row's attribute/value pairs as an object property bag
 */
oj.ModelRow.prototype.pairs = function()
{
  return this._model.pairs();
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

/*jslint browser: true*/

/**
 * @export
 * @class oj.CollectionRowSet
 * @classdesc RowSet wrapper for oj.Collection 
 * 
 * @param {oj.Collection} collection oj.Collection object 
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 */
oj.CollectionRowSet = function(collection, options) 
{
  // Initialize
  oj.CollectionRowSet._init(this, collection, options, null);
};

/**
 * @export
 * @desc If set, sort the rowSet using the given attribute of a row (if string); function(Row) returning a string attribute
 * by which the sort should take place; function(Row1, Row2) if a user-defined function comparing Row1 and Row2 (see the
 * JavaScript array.sort() for details)
 * 
 * @type {String|function(Object)|function(Object,Object)}
 */
oj.CollectionRowSet.prototype.comparator = null;

/**
 * @export
 * @desc If comparator is a string, define the sort direction (ascending or descending) for sorting
 * 
 * @type {String}
 */
oj.CollectionRowSet.prototype.sortDirection = null;

/**
 * @export
 * @desc Set to true if sort is supported.
 * 
 * @type boolean
 */
oj.CollectionRowSet.prototype.sortSupported = true;


// Subclass from oj.Object 
oj.Object.createSubclass(oj.CollectionRowSet, oj.RowSet, "CollectionRowSet.CollectionRowSet");

oj.CollectionRowSet.prototype.Init = function()
{
  oj.CollectionRowSet.superclass.Init.call(this);
};

oj.CollectionRowSet._init = function(rowSet, collection, options, properties) 
{
  var prop;
  rowSet._eventHandlers = [];
  rowSet._startIndex = 0;
  
  rowSet.Init();

  // First, copy all properties passed in
  if (properties) 
  {
    for (prop in properties) 
    {
      if (properties.hasOwnProperty(prop)) 
      {
        rowSet[prop] = properties[prop];
      }
    }
  }
  rowSet._collection = collection;
  rowSet._addCollectionEventListeners();
};

/**
 * Return the row object found at the given index of the collection, or a promise object that will return the row to a function
 * in the done() call.
 * 
 * @param {number} index Index for which to return the row object. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 *                  deferred: if true, return a deferred/promise object as described below.  If not specified, the return value will
 *                   be determined by whether or not the collection is virtual
 * @return {Object} Row object located at index. If index is out of range, returns null.  If this is a paging/virtual collection or
 *                  if deferred is specified and true, at will return a Promise object which will call its done function,
 *                  passing the value at(index) 
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.at = function(index, options)
{
  var model = this._collection.at(index, options);
  if (model != null)
  {
    if (model instanceof oj.Model)
    {
      return new oj.ModelRow(model);
    }
    else
    {
      return oj.Object.__getPromise(function(resolve, reject) {
        model.then(function(resolvedModel)
                           {
                             resolve(new oj.ModelRow(resolvedModel));
                           });
        });
    }
  }
  return null;
};

/**
 * Loads the data into the RowSet
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully.<p>
 *                  error: a user callback function called if the fetch fails.<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.fetch = function(options)
{
  if (this._canFetch.call(this))
  {
    this._startFetch.call(this);

    options = options || {};
    var self = this;
    var isPaged =  options.startIndex != null ? true : false;
    this._startIndex = isPaged ? options.startIndex : 0;
    this._initFetch = true;
    var pageSize = options['pageSize'] > 0 ? options['pageSize'] : -1;
    options['pageSize'] = pageSize;
    options['startIndex'] = this._startIndex;
    options['refresh'] = true;
  
    if (isPaged)
    {
      this._collection.setRangeLocal(this._startIndex, pageSize).then(function() 
        {
          self._endFetch.call(self, options, null);
        });
    }
    else
    {
      this._collection.fetch({
        'success': function(collection, response, opts) 
        {
          self._collection = collection;
          self._endFetch.call(self, options, null);
        },
        'error': function(collection, e, opts) 
        {
          self._collection = collection;
          self._endFetch.call(self, options, e);
        }
      });
    }
  }
}

/**
 * Return the first row object from the collection whose row id value is the given id
 * Note this method will not function as expected if the id is not set
 * @param {Object|string} id ID for which to return the row object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} First row object in the collection where row.id = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the row when done
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.get = function(id, options)
{
  return new oj.ModelRow(this._collection.get(id, options));
};

/**
 * Return the oj.Collection object which was wrapped
 * @return {oj.Collection} oj.Collection object
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.getCollection = function()
{
  return this._collection;
};

/**
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.hasMore = function()
{
  return this._collection['hasMore'];
};

/**
 * Return the array index location of the given row object.
 * @param {Object} row Row object to locate 
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 
 * @return {number} The index of the given row object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.indexOf = function(row, options) 
{
  return this._collection.indexOf(row.getModel(), options);
};

/**
 * Determine if the rowset has any rows
 * 
 * @returns {boolean} true if collection is empty
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.isEmpty = function() 
{
  return this._collection.isEmpty();
};

/**
 * Return the length of the collection
 * @returns {number} length of the collection
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.size = function() 
{
  var size = this._collection.size();
  if (!this._initFetch)
  {
    // if a fetch hasn't been done yet and this is virtual then return -1
    // so an initial fetch will be called to execute setRangeLocal
    if (!this._collection.isRangeLocal(0, size))
    {
      return 0;
    }
  }
  return size;
};

/**
 * Sort the rows in the rowSet
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.sort = function() 
{
  if (this['comparator']) {
    this._collection['comparator'] = this['comparator'];
  }
  if (this['sortDirection']) { 
      this._collection['sortDirection'] = this['sortDirection'] === 'ascending' ? 1 : -1;
  }
  return this._collection.sort(null);
};

/**
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @export
 * @expose
 * @memberof! oj.CollectionRowSet
 * @instance
 */
oj.CollectionRowSet.prototype.totalSize = function()
{
  return this._collection['totalResults'];
};

oj.CollectionRowSet.prototype.SetComparator = function(criteria) {
  
  if (criteria == null)
  {
    this['comparator'] = null;
    this._collection['comparator'] = null;
    return;
  }
  
  var key = criteria['key']; 
  var direction = criteria['direction'];
  var comparator = null;
  
  if (this._collection.__isVirtual()) {
      // Only strings are supported for virtual sorts
      this['comparator'] = key;
      this['sortDirection'] = direction;
      return;
  }
  
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
  this['comparator'] = comparator;
};

/**
 * Add event listeners to the collection
 * @private
 */
oj.CollectionRowSet.prototype._addCollectionEventListeners = function()
{
  var self = this;
  this._collection.on(oj.Events.EventType['SYNC'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['SYNC'], event);
  });
  this._collection.on(oj.Events.EventType['ADD'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['ADD'], new oj.ModelRow(event));
  });
  this._collection.on(oj.Events.EventType['REMOVE'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['REMOVE'], new oj.ModelRow(event));
  });
  this._collection.on(oj.Events.EventType['RESET'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['RESET'], event);
  });
  this._collection.on(oj.Events.EventType['SORT'], function(event, eventOpts) {
    if (eventOpts == null || !eventOpts['add'])
    {
      oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['SORT'], event);
    }
  });
  this._collection.on(oj.Events.EventType['CHANGE'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['CHANGE'], new oj.ModelRow(event));
  });
  this._collection.on(oj.Events.EventType['DESTROY'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['REMOVE'], event);
  });
  this._collection.on(oj.Events.EventType['REFRESH'], function(event) {
      oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['REFRESH'], event);
  });
  this._collection.on(oj.Events.EventType['ERROR'], function(event) {
    oj.CollectionRowSet.superclass._handleEvent.call(self, oj.RowSet.EventType['ERROR'], event);
    // call endfetch in case a fetch caused the error
    self._endFetch.call(self, null, null);
  });
};

/**
 * Indicate whether we can start a fetch
 * @private
 */
oj.CollectionRowSet.prototype._canFetch = function()
{
  return !this._isFetching;
};

/**
 * Indicate starting fetch
 * @private
 */
oj.CollectionRowSet.prototype._startFetch = function()
{
  this._isFetching = true;
  oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['REQUEST'], null);
};

/**
 * Indicate ending fetch
 * @private
 */
oj.CollectionRowSet.prototype._endFetch = function(options, e)
{
  options = options || {}; 
  var success = options['success'];
  var error = options['error'];
  
  this._isFetching = false;
  if (e != null)
  {
    oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ERROR'], e);
    
    if (error)
    { 
      error.call(this, options, e);
    }
  }
  else
  {
    oj.CollectionRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['SYNC'], options);
    
    if (success)
    {
      success.call(this, options);
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
 * @class oj.CollectionTableDataSource
 * @classdesc Object representing data used by table component
 * @param {Object} data data supported by the components
 * @param {Object|null} options Array of options for the TableDataSource
 * @constructor
 */
oj.CollectionTableDataSource = function(data, options)
{
  // Initialize
  this.data = {};   // This was put in to keep closure happy...
  if (!(data instanceof oj.Collection))
  {
    // we only support Array, oj.Collection, oj.RowSet, or ko.observableArray. To
    // check for observableArray, we can't do instanceof check because it's
    // a function. So we just check if it contains a subscribe function.
    var errSummary = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_SUMMARY'];
    var errDetail = oj.TableDataSource._LOGGER_MSG['_ERR_DATA_INVALID_TYPE_DETAIL'];
    throw new Error(errSummary + '\n' + errDetail);
  }
  
  oj.CollectionTableDataSource.superclass.constructor.call(this, data, options);

  this._rowSet = new oj.CollectionRowSet(data, this.options);
  this._addRowSetEventListeners();
  
  this.Init();

  if ((options != null && (options['startFetch'] == 'enabled' || options['startFetch'] == null))
    || options == null)
  {
    this._startFetchEnabled = true;
  }
};

// Subclass from oj.DataSource 
oj.Object.createSubclass(oj.CollectionTableDataSource, oj.TableDataSource, "oj.CollectionTableDataSource");

/**
 * Initializes the instance.
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.Init = function()
{
  oj.CollectionTableDataSource.superclass.Init.call(this);
};

/**
 * Return the oj.Row object found at the given index of the RowSet.
 * 
 * @param {number} index Index for which to return the Row object. 
 * @return {Object} oj.Row object located at index. If index is out of range, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.at = function(index)
{
  return this._rowSet.at(index);
};

/**
 * Fetch the RowSet data.
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully.<p>
 *                  error: a user callback function called if the fetch fails.<p>
 * @return {Promise} promise object triggering done when complete.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.fetch = function(options)
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
    oj.CollectionTableDataSource.superclass.startIndex.call(this, options['startIndex']);
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
 * @param {Object|string} id ID for which to return the Row object, if found. 
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.get = function(id)
{
  return this._rowSet.get(id);
};

/**
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.hasMore = function()
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.indexOf = function(row)
{
  return this._rowSet.indexOf(row);
};

/**
 * Get the length of the RowSet.
 * limit it.
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.size = function()
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.sort = function(criteria)
{ 
  this._rowSet.SetComparator(criteria);
  
  if (criteria == null)
  {
    return oj.Object.__getPromise(function(resolve, reject) {
      resolve();
    }); 
  }
  
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
 * @memberof! oj.CollectionTableDataSource
 * @instance
 */
oj.CollectionTableDataSource.prototype.totalSize = function()
{
  return this._rowSet.totalSize();
};

/**
 * Add event listeners to the RowSet
 * @private
 */
oj.CollectionTableDataSource.prototype._addRowSetEventListeners = function()
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
  (/** @type {{on: Function}} */  (this._rowSet)).on(oj.RowSet.EventType['REFRESH'], function(event) {
    self.isFetching = false;
    oj.TableDataSource.superclass.handleEvent.call(self, oj.TableDataSource.EventType['REFRESH'], event);
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
});
