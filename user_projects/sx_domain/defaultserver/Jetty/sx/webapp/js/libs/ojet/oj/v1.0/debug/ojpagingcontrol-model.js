define(['ojs/ojcore', 'jquery', 'knockout', 'ojs/ojpagingcontrol', 'ojs/ojknockout-model'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        * @param (Object} ko
        */
       function(oj, $, ko)
{

/*jslint browser: true,devel:true*/
/**
 * Implementation of PagingDataSource backed by an oj.Collection.  CollectionPagingDataSource
 * provides a window into the collection, presenting both a standard JavaScript array and Knockout observable array for consumption.
 * @export
 * @class oj.CollectionPagingDataSource
 * @classdesc Implementation of PagingDataSource using an oj.Collection
 * @param {oj.Collection} collection the collection to use as source data for this paging control
 * @constructor
 */
oj.CollectionPagingDataSource = function(collection)
{
    this.collection = collection;
    // Start at the beginning
    this.current = 0;
    this.Init();  
    // Default the page size to 10
    var self = this;
    this.dataWindow = [];
    this._noInit = true;
    try {
        this.setPageSize(10);
    }
    finally {
        this._noInit = false;
    }
};

// Subclass from oj.PagingDataSource 
oj.Object.createSubclass(oj.CollectionPagingDataSource, oj.PagingDataSource, "oj.CollectionPagingDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.CollectionPagingDataSource.prototype.Init = function()
{
  oj.CollectionPagingDataSource.superclass.Init.call(this);
};


oj.CollectionPagingDataSource.prototype._getSize = function() {
    if (!this.hasMore()) {
        // Return a size representing only what's left if we'd go over the bounds
        return this.totalSize() - this.startIndex();
    }
    // Otherwise window size should match the page size
    return this.pageSize;
};

oj.CollectionPagingDataSource.prototype._refreshDataWindow = function() {
    // Reinit the array
    this.dataWindow = new Array(this._getSize());
    var self = this;
    return this.collection.IterativeAt(this.startIndex(), this.startIndex() + this.dataWindow.length).then(function(array) {
        // Copy from the source data
        for (var i = 0; i < array.length; i++) {
            self.dataWindow[i] = array[i];
        }
        // Update the observable array
        self._refreshObservableDataWindow();       
    });        
};

oj.CollectionPagingDataSource.prototype._refreshObservableDataWindow = function() {
    if (this.observableDataWindow !== undefined) {
        // Manage the observable window array
        this.observableDataWindow.removeAll();
        for (var i = 0; i < this.dataWindow.length; i++) {
            this.observableDataWindow.push(oj.KnockoutUtils.map(this.dataWindow[i]));
        }
    }
};

/**
 * @export
 * Return the current set of data in the paging window
 * 
 * @returns {Array} the current set of data in the paging window
 */
oj.CollectionPagingDataSource.prototype.getWindow = function() {
    return this.dataWindow;
};

/**
 * @export
 * Get the observable array representing the current set of data in the paging window
 * 
 * @returns {Object} an observable array representing the current data in the paging window
 */
oj.CollectionPagingDataSource.prototype.getWindowObservable = function() {
    if (this.observableDataWindow === undefined) {
        this.observableDataWindow = ko.observableArray();
        this._refreshObservableDataWindow();
    }
    return this.observableDataWindow;
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 *                  success: Callback once the records have been fetched.<p>
 *                           If set, this will be called.  If not set, the fetch callback<p>
 *                           property will be checked and that called on fetch success, if set<p>
 *                          
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.fetch = function(options)
{
    // No fetching, but set up window according to options
    var opts = options || {};
    if (opts['startIndex'] !== undefined) {
        this.current = opts['startIndex'];
    }
    if (opts['pageSize'] !== undefined) {
        this.pageSize = opts['pageSize'];
    }
    
    var self = this;
    // Call collection fetch, and refresh the window on success
    // Allow for the fact that this collection might not be backed by a rest service
    try {
        this.collection.fetch({success:function() {
            self._refreshDataWindow().then(function() {
                self._processSuccess(opts)});
        }});
    }
    catch (e) {
        self._refreshDataWindow().then(function() {
            self._processSuccess(opts)});
    }
};

oj.CollectionPagingDataSource.prototype._processSuccess = function(opts) {
    var options = opts || {};
    this.handleEvent("sync", null);
    
    if (options['success']) {
        options['success']();
    }
/*    else if (this.fetchCallback) {
        this.fetchCallback();
    }*/
};
    
oj.CollectionPagingDataSource.prototype.handleEvent = function(eventType, event)
{
    oj.CollectionPagingDataSource.superclass.handleEvent.call(this, eventType, event);
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.hasMore = function()
{
  return this.startIndex() + this.pageSize < this.totalSize();
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.next = function()
{
    if (!this.hasMore()) {
        // At the limit
        this._processSuccess(null);
        return;
    }
    // Bump the position by page size
    this.current += this.pageSize;
    var self = this;
    return this._refreshDataWindow().then(function() {
                self._processSuccess(null)});
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.previous = function()
{
    if (this.startIndex() - this.pageSize < 0) {
        // Don't go below 0!
        this.current = 0;
    }
    else {
        this.current -= this.pageSize;
    }
    var self = this;
    return this._refreshDataWindow().then(function() {
                self._processSuccess(null)});
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.CollectionPagingDataSource.prototype.setPageSize = function(n)
{
  this.pageSize = n;
/*  if (!this._noInit) {
    var self = this;
    return this._refreshDataWindow().then(function() {
                self._processSuccess(null)});
  }*/
};

oj.CollectionPagingDataSource.prototype.setFetchCallback = function(callback) {
    this.fetchCallback = callback;
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.startIndex = function()
{
  return this.current;
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.size = function()
{
  var w = this.getWindow();
  return w ? w.length : 0;
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.CollectionPagingDataSource
 * @instance
 */
oj.CollectionPagingDataSource.prototype.totalSize = function()
{
    return this.collection.length;
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
 * Implementation of PagingDataSource backed by an array of data.  ArrayPagingDataSource
 * provides a window into the array in both standard JavaScript array and Knockout observable array formats.
 * @export
 * @class oj.ArrayPagingDataSource
 * @classdesc Implementation of PagingDataSource using array data
 * @param {Array} data
 * @constructor
 */
oj.ArrayPagingDataSource = function(data)
{
  this.data = data;
  // Start at the beginning
  this.current = 0;
  this.Init();  
  // Default the page size to 10
  this.setPageSize(10);
};

// Subclass from oj.PagingDataSource 
oj.Object.createSubclass(oj.ArrayPagingDataSource, oj.PagingDataSource, "oj.ArrayPagingDataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.ArrayPagingDataSource.prototype.Init = function()
{
  oj.ArrayPagingDataSource.superclass.Init.call(this);
};


oj.ArrayPagingDataSource.prototype._getSize = function() {
    if (!this.hasMore()) {
        // Return a size representing only what's left if we'd go over the bounds
        return this.totalSize() - this.startIndex();
    }
    // Otherwise window size should match the page size
    return this.pageSize;
};

oj.ArrayPagingDataSource.prototype._refreshDataWindow = function() {
    // Reinit the array
    this.dataWindow = new Array(this._getSize());
    // Copy from the source data
    for (var i = 0; i < this.dataWindow.length; i++) {
        this.dataWindow[i] = this.data[this.startIndex() + i];
    }
    
    // Update the observable array
    this._refreshObservableDataWindow();
    
    this.handleEvent("sync", null);    
};

oj.ArrayPagingDataSource.prototype._refreshObservableDataWindow = function() {
    if (this.observableDataWindow !== undefined) {
        // Manage the observable window array
        this.observableDataWindow.removeAll();
        for (var i = 0; i < this.dataWindow.length; i++) {
            this.observableDataWindow.push(this.dataWindow[i]);
        }
    }
};

    
oj.ArrayPagingDataSource.prototype.handleEvent = function(eventType, event)
{
    oj.ArrayPagingDataSource.superclass.handleEvent.call(this, eventType, event);
};

/**
 * @export
 * Return the current set of data in the paging window
 * 
 * @returns {Array} the current set of data in the paging window
 */
oj.ArrayPagingDataSource.prototype.getWindow = function() {
    return this.dataWindow;
};

/**
 * @export
 * Get the observable array representing the current set of data in the paging window
 * 
 * @returns {Object} an observable array representing the current data in the paging window
 */
oj.ArrayPagingDataSource.prototype.getWindowObservable = function() {
    if (this.observableDataWindow === undefined) {
        this.observableDataWindow = ko.observableArray();
        this._refreshObservableDataWindow();
    }
    return this.observableDataWindow;
};

/**
 * Calls fetch on the datasource with paging options.
 * @param {Object=} options Options to control fetch<p>
 *                  startIndex: The index at which to start fetching records.<p>
 *                  pageSize: The number of records to be fetched.<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.fetch = function(options)
{
    // No fetching, but set up window according to options
    var opts = options || {};
    if (opts['startIndex'] !== undefined) {
        this.current = opts['startIndex'];
    }
    if (opts['pageSize'] !== undefined) {
        this.pageSize = opts['pageSize'];
    }
    this._refreshDataWindow();
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @returns {boolean} whether there is more data
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.hasMore = function()
{
  return this.startIndex() + this.pageSize < this.totalSize();
};

/**
 * Calls fetch for the next page of data. No-op if no more data.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.next = function()
{
    if (!this.hasMore()) {
        // At the limit
        return;
    }
    // Bump the position by page size
    this.current += this.pageSize;
    this._refreshDataWindow();
};

/**
 * Calls fetch for the previous page of data. No-op if at the beginning.
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.previous = function()
{
    if (this.startIndex() - this.pageSize < 0) {
        // Don't go below 0!
        this.current = 0;
    }
    else {
        this.current -= this.pageSize;
    }
    this._refreshDataWindow();
};

/**
 * Set or change the number of models in a page
 * 
 * @param {number} n page size
 */
oj.ArrayPagingDataSource.prototype.setPageSize = function(n)
{
  this.pageSize = n;
  this._refreshDataWindow();
};

/**
 * @export
 * Return current start index. -1 if initial fetch has not been done yet.
 * @returns {number} start index
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.startIndex = function()
{
  return this.current;
};

/**
 * @export
 * Return the size of the data locally in the dataSource. -1 if an initial fetch has not been
 * done yet.
 * @returns {number} size of data
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.size = function()
{
  return this.getWindow().length;
};

/**
 * @export
 * Return the total size of data available, including server side if not local.
 * @returns {number} total size of data
 * @expose
 * @memberof! oj.ArrayPagingDataSource
 * @instance
 */
oj.ArrayPagingDataSource.prototype.totalSize = function()
{
    return this.data.length;
};


});
