define(['ojs/ojcore', 'jquery'], function(oj, $)
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
 * @class oj.DataSource
 * @classdesc Object representing data used by table and grid components
 * @property {Object} data data supported by the components
 * @param {Object} data data supported by the components
 * @constructor
 */
oj.DataSource = function(data)
{
    this.data = data;
    this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.DataSource, oj.Object, "oj.DataSource");

/**
 * Initializes the instance.
 * @export
 */
oj.DataSource.prototype.Init = function()
{
    this._eventHandlers = [];
    oj.DataSource.superclass.Init.call(this);
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.DataSource.prototype.on = function(eventType, eventHandler)
{
    var foundEventHandler = false, i;
    for (i = 0; i < this._eventHandlers.length; i++)
    {
        if (this._eventHandlers[i]['eventType'] == eventType && 
            this._eventHandlers[i]['eventHandlerFunc'] == eventHandler)
        {
            foundEventHandler = true;
            break;
        }
    }
    if (!foundEventHandler) {
        this._eventHandlers.push({'eventType': eventType, 'eventHandlerFunc': eventHandler});
    }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 */
oj.DataSource.prototype.off = function(eventType, eventHandler)
{
    var i;
    for (i = this._eventHandlers.length-1; i >= 0; i--)
    {
        if (this._eventHandlers[i]['eventType'] == eventType && 
            this._eventHandlers[i]['eventHandlerFunc'] == eventHandler)
        {
            this._eventHandlers.splice(i, 1);
            break;
        }
    }
};

/**
 * Handle the event
 * @param {string} eventType  event type
 * @param {Object} event  event
 * @export
 */
oj.DataSource.prototype.handleEvent = function(eventType, event)
{
    var i;
    for (i = 0; i < this._eventHandlers.length; i++)
    {
        var eventHandler = this._eventHandlers[i];
        if (eventHandler['eventType'] == eventType)
        {
            eventHandler['eventHandlerFunc'](event);
        }
    }
};

/**
 * Determines whether this DataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired. 
 * @return {string|null} the capability of the specified feature.  Returns null if the feature is not recognized.
 * @export
 */
oj.DataSource.prototype.getCapability = function(feature)
{
    return null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Base class for all tree structure DataSource
 * @param {Object} data data supported by the component
 * @export
 * @extends oj.DataSource
 * @constructor
 */
oj.TreeDataSource = function(data)
{
    oj.TreeDataSource.superclass.constructor.call(this, data);
};


// Subclass TreeDataSource to DataSource
oj.Object.createSubclass(oj.TreeDataSource, oj.DataSource, "oj.TreeDataSource");

/**
 * Returns the number of children for a specified parent.  If the value returned is not >= 0 then it is automatically assumed
 * that the child count is unknown.
 * @param {Object} parent the parent key.  Specify null if inquiring child count of the root.
 * @return {number} the number of children for the specified parent.
 * @export
 */
oj.TreeDataSource.prototype.getChildCount = function(parent)
{
    return -1;
};

/**
 * Fetch the children
 * @param {Object} parent the parent key.  Specify null if fetching children from the root.
 * @param {Object} range information about the range, it must contain the following properties: start, count.
 * @param {number} range.start the start index of the range in which the children are fetched.
 * @param {number} range.count the size of the range in which the children are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.NodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {boolean=} options.queueOnly true if this fetch request is to be queued and not execute yet.  The implementation must maintain 
 *        the order of the fetch operations.  When queueOnly is false/null/undefined, any queued fetch operations are then
 *        flushed and executed in the order they are queued.  This flag is ignored if the datasource does not support batching.
 * @export
 */
oj.TreeDataSource.prototype.fetchChildren = function(parent, range, callbacks, options)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Fetch all children and their children recursively from a specified parent.
 * @param {Object} parent the parent key.  Specify null to fetch everything from the root (i.e. expand all)
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.NodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {number=} options.start the index related to parent in which to begin fetching descendants from.  If this is not specified, then 
 * @param {number=} options.maxCount the maximum number of children to fetch.  If a non-positive number is specified, then the value is ignored and
 *        there is no maximum fetch count.
 * @export
 */
oj.TreeDataSource.prototype.fetchDescendants = function(parent, callbacks, options)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Performs a sort operation on the tree data.
 * @param {Object} criteria the sort criteria.  It must contain the following properties: key, direction
 * @param {Object} criteria.key the key identifying the attribute (column) to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @export
 */
oj.TreeDataSource.prototype.sort = function(criteria, callbacks)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Returns the current sort criteria of the tree data.
 * @return {Object} the current sort criteria.  It should contain the following properties: key, direction where
 *         criteria.key the key identifying the attribute (column) to sort on.  Value is null if it's not sorted.
 *         criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @export
 */
oj.TreeDataSource.prototype.getSortCriteria = function()
{
    return {'key': null, 'direction': 'none'};
};

/**
 * Moves a row from one location to another (different position within the same parent or a completely different parent)
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {number|string} position The position of the moved row relative to the reference row.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference row's current children.
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @export
 */ 
oj.TreeDataSource.prototype.move = function(rowToMove, referenceRow, position, callbacks)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Checks whether a move operation is valid.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {number|string} position The position of the moved row relative to the reference row.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference row's current children.
 * @return {string} returns "valid" if the move is valid, "invalid" otherwise.
 * @export
 */ 
oj.TreeDataSource.prototype.moveOK = function(rowToMove, referenceRow, position)
{
    return "valid";
};

/**
 * Determines whether this TreeDataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the valid features "sort", 
 *        "move", "fetchDescendants", "batchFetch"
 * @return {string|null} the name of the feature.  Returns null if the feature is not recognized.
 *         For "sort", the valid return values are: "default", "none".  
 *         For "fetchDescendants", the valid return values are: "enable", "disable", "suboptimal".  
 *         For "move", the valid return values are: "default", "none".  
 *         For "batchFetch", the valid return values are: "enable", "disable".  
 * @export
 */
oj.TreeDataSource.prototype.getCapability = function(feature)
{
    return null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
 /**
 * Base class for FlattenedTreeDataGridDataSource and FlattenedTreeTableDataSource
 * @param {Object} treeDataSource the instance of TreeDataSource to flattened
 * @param {Object=} options the options set on the FlattenedDataSource
 * @constructor
 * @export
 * @extends oj.DataSource
 */
oj.FlattenedTreeDataSource = function(treeDataSource, options)
{
    this.m_wrapped = treeDataSource;
    this.m_options = options;
    oj.FlattenedTreeDataSource.superclass.constructor.call(this);
};

// Make FlattenedTreeDataSource subclass of oj.DataSource
oj.Object.createSubclass(oj.FlattenedTreeDataSource, oj.DataSource, "oj.FlattenedTreeDataSource");

/**
 * Initializes the data source.
 * @export
 */
oj.FlattenedTreeDataSource.prototype.Init = function()
{
    var expanded;

    // super
    oj.FlattenedTreeDataSource.superclass.Init.call(this);

    // we have to react if the underlying TreeDataSource has changed
    this.m_wrapped.on('change', this._handleModelEvent.bind(this));

    // retrieves the fetch size against the underlying data source
    this.m_fetchSize = parseInt(this.m_options['fetchSize'], 10);
    if (isNaN(this.m_fetchSize))
    {
        this.m_fetchSize = 25;
    }
    // retrieves the maximum number of rows to fetch from the underlying data source
    // once the maximum count has been reached, this data source should stop fetching
    // until either a collapse occurs or a delete model change event.
    this.m_maxCount = parseInt(this.m_options['maxCount'], 10);
    if (isNaN(this.m_maxCount))
    {
        this.m_maxCount = 500;
    }

    // retrieves the initial expanded row keys.  If the expanded is specified to 'all',
    // then mark that all rows should be expanded initially.
    expanded = this.m_options['expanded'];
    if (Array.isArray(expanded))
    {
        this.m_expandedKeys = expanded;
    }
    else
    {
        if (expanded === 'all')
        {
            // if expand all, we'll need to keep track of collapsed keys instead
            this.m_collapsedKeys = [];
        }
        // keep track of expanded row keys
        this.m_expandedKeys = [];
    }

    // cache to keep track of indexes
    // PRIVATE.  Subclass should never need to access this directly.
    // and implementation might change to use different form of caching strategy.
    this.m_cache = [];
};

/**
 * Handle the event
 * @param {string} eventType  event type
 * @param {Object} event  event
 * @export
 */
oj.FlattenedTreeDataSource.prototype.handleEvent = function(eventType, event)
{
    oj.FlattenedTreeDataSource.superclass.handleEvent.call(this, eventType, event);
};

/**
 * Destroy the data source.
 * @export
 */
oj.FlattenedTreeDataSource.prototype.Destroy = function()
{
    // free internal cache
    delete this.m_cache;
    delete this.m_expandedKeys;

    // unload listener
    this.m_wrapped.off('change');

    // delegate to underlying data source
    if (this.m_wrapped.Destory)
    {
        this.m_wrapped.Destory();
    }
};

/**
 * Retrieves the fetch size
 * @return {number} the fetch size
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.getFetchSize = function()
{
    return this.m_fetchSize;
};

/**
 * Retrieves the max count
 * @return {number} the max count
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.getMaxCount = function()
{
    return this.m_maxCount;
};

/**
 * Retrieves the expanded row keys
 * @return {Array.<Object>|string} an array of expanded row keys or 'all' if 
 *         all rows are expanded.
 * @export
 */
oj.FlattenedTreeDataSource.prototype.getExpandedKeys = function()
{
    return this.m_expandedKeys;
};

/**
 * Retreives the value of the specified option.
 * @param {string} option the option to retrieve the value.
 * @return {Object} the value of the specified option.  Returns null if the
 *         value is null or if the option is not recognized.
 * @export
 */
oj.FlattenedTreeDataSource.prototype.getOption = function(option)
{
    if (this.m_options != null)
    {
        return this.m_options[option];
    }

    // unrecoginzed option or no options set
    return null;
};

/**
 * Retrieves the underlying TreeDataSource.
 * @return {Object} the underlying oj.TreeDataSource.
 * @export
 */
oj.FlattenedTreeDataSource.prototype.getWrappedDataSource = function()
{
    return this.m_wrapped;
};

/**
 * Determine the actual fetch size to use.
 * @param {number} count the child count of the parent node to fetch on.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._getFetchSizeToUse = function(count)
{
    var fetchSize, maxCount;

    fetchSize = this.getFetchSize();
    maxCount = this.getMaxCount();

    if (fetchSize === -1)
    {
        if (count === -1)
        {
            return maxCount;
        }
        return count;
    }
    else
    {
        if (count === -1)
        {
            return Math.min(fetchSize, count);
        }
        return fetchSize;
    } 
};

/**
 * Fetch a range of rows from the underlying data source.  This is a convenient method that
 * the subclasses should use to fetch from the underlying TreeDataSource.  This method will take
 * care of the index mapping between a flattened range to tree indexes.
 * @param {Object} range the range of rows to fetch.  This is the range in a flattened view.
 * @param {number} range.start the start of the range in a flattened view
 * @param {number} range.count the number of rows to fetch
 * @protected
 */ 
oj.FlattenedTreeDataSource.prototype.fetchRows = function(range, callbacks)
{
    // check if we should fetch rows from descendants result set or walk the tree
    // to retrieve children
    if (this._isExpandAll())
    {
        this._fetchRowsFromDescendants(range, callbacks);
    }
    else
    {
        this._fetchRowsFromChildren(range, callbacks);
    }
};

/**
 * Fetch a range of rows from the underlying TreeDataSource.  
 * @param {Object} range the range of rows to fetch.  This is the range in a flattened view.
 * @param {number} range.start the start of the range in a flattened view
 * @param {number} range.count the number of rows to fetch
 * @protected
 */ 
oj.FlattenedTreeDataSource.prototype._fetchRowsFromChildren = function(range, callbacks)
{
    var maxFetchSize, lastEntry, parent, count, index, depth, processed, nodeSet, fetchSize;

    // this condition should always be true since in high watermark scrolling we are
    // always asking for rows after the current last row
    if (range['start'] > this._getLastIndex())
    {
        maxFetchSize = this._getMaxFetchSize();
        // initial fetch
        if (this._getLastIndex() < 0)
        {
            // adjust fetch count if neccessary
            range['count'] = Math.min(maxFetchSize, range['count']);
            this.m_wrapped.fetchChildren(null, range, {"success": function(nodeSet){this._handleFetchSuccess(nodeSet, null, 0, range, 0, callbacks);}.bind(this)});

            return;
        }
        else if (maxFetchSize > 0)
        {
            lastEntry = this._getLastEntry();
            parent = lastEntry['parent'];
            count = this.m_wrapped.getChildCount(parent);
            index = lastEntry['index'];
            depth = lastEntry['depth'];

            // see if we are fetching within the parent
            if (count === -1 || index < count-1)
            {
                fetchSize = this._getFetchSizeToUse(count);
                range['start'] = index+1;
                if (count === -1)
                {
                    range['count'] = fetchSize;
                }
                else
                {
                    range['count'] = Math.min(maxFetchSize, Math.min(fetchSize, count - range['start']));
                }
                this.m_wrapped.fetchChildren(parent, range, {"success": function(nodeSet){this._handleFetchSuccess(nodeSet, parent, depth, range, count, callbacks);}.bind(this)});
            }
            else if (index === count-1)
            {
                // if this is the last child within the parent, then we are done
                nodeSet = new oj.EmptyNodeSet(null, range['start']);
                // invoke original success callback
                if (callbacks != null && callbacks['success'] != null)
                {
                    callbacks['success'].call(null, nodeSet);
                }
            }
            else
            {
                // fetch size is greater than the number of children remaining to fetch
                // so we'll need to go up the path (recursively if necessary) and see if
                // if we need to fetch from ancestors.
                processed = this._fetchFromAncestors(parent, depth, callbacks, maxFetchSize);
                if (!processed)
                {
                    // nothing is used from node set, just return a empty node set
                    nodeSet = new oj.EmptyNodeSet(null, range['start']);
                    // invoke original success callback
                    if (callbacks != null && callbacks['success'] != null)
                    {
                        callbacks['success'].call(null, nodeSet);
                    }
                }
            }
            return;
        }
    }

    // the only case we'll ended up here is if the max count has been reached or
    // for some reason the caller is asking for count = 0
    this.handleMaxCountReached(range, callbacks);
};

/**
 * Determine the maximum possible fetch size.
 * @return {number} the maximum fetch size
 * @private
 */
oj.FlattenedTreeDataSource.prototype._getMaxFetchSize = function()
{
    return this.getMaxCount() - (this._getLastIndex()+1);
};

/**
 * Process success callback for fetchChildren operation before handing it back to original caller.
 * @param {Object} nodeSet the set of fetched nodes
 * @param {Object} parent the parent key of the fetch operation
 * @param {number} depth the depth of the nodes
 * @param {Object} range the request range for the fetch operation
 * @param {number} count the child count of the parent, -1 if count is unknown
 * @param {Object} callbacks the original callbacks passed to the fetch operation
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleFetchSuccess = function(nodeSet, parent, depth, range, count, callbacks)
{
    var toExpand, processed;

    // handle result nodeSet
    toExpand = [];
    // wrap it to inject additional metadata
    nodeSet = new oj.NodeSetWrapper(nodeSet, this.insertMetadata.bind(this), range);
    this._processNodeSet(nodeSet, parent, depth, toExpand);

    // if child count is unknown and the result fetched from parent is less than what we asked for 
    // and it's not a root node, go up one level and try to fetch results from its grandparent
    if (count === -1 && nodeSet.getCount() === 0 && parent != null && depth > 0)
    {
        processed = this._fetchFromAncestors(parent, depth, callbacks);
        if (!processed)
        {
            // if nothing is fetched from ancestors, then just return the original empty set
            if (callbacks != null && callbacks['success'] != null)
            {
                callbacks['success'].call(null, nodeSet);
            }
        }
    }
    else
    {
        // invoke original success callback
        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(null, nodeSet);
        }

        // see if there's rows that need to be expand
        this._expandRows(toExpand);
    }
};

/**
 * Go up ancestors and fetch build up fetch requests (if possible) until the fetch size is met.
 * @param {Object} parent the parent key of the fetch operation
 * @param {number} depth the depth of the nodes
 * @param {Object} callbacks the original callbacks passed to the fetch operation
 * @param {number=} maxFetchSize maximum fetch size, optional
 * @return {boolean} true if results are fetched, false if nothing is fetched
 * @private
 */
oj.FlattenedTreeDataSource.prototype._fetchFromAncestors = function(parent, depth, callbacks, maxFetchSize)
{
    var options, remainToFetch, current, i, currEntry, currDepth, count, index, countUnknown, range, fetchSize;

    if (maxFetchSize === undefined)
    {
        maxFetchSize = this._getMaxFetchSize();
    }

    // fetch size is greater than the number of children remaining to fetch
    // so we'll need to go up the path (recursively if necessary) and see if
    // if we need to fetch from ancestors.
    if (this._isBatchFetching())
    {
        options = {'queueOnly': true};
    }

    fetchSize = this._getFetchSizeToUse(-1);
    remainToFetch = fetchSize;
    current = this._getLastIndex();
    for (i=current-1; i>=0; i--)
    {
        currEntry = this._getEntry(i);
        currDepth = currEntry['depth'];
        if (currDepth < depth)
        {
            parent = currEntry['parent'];
            count = this.m_wrapped.getChildCount(parent);
            index = currEntry['index'];

            countUnknown = (count === -1);
            if (countUnknown || index < count-1)
            {
                range = {};
                range['start'] = index+1;
                if (countUnknown)
                {
                    range['count'] = Math.min(maxFetchSize, Math.max(0, remainToFetch));
                    // if count is unknown, we cannot do batch fetch
                    options = undefined;
                    // stop going up parents
                }
                else
                {
                    range['count'] = Math.min(maxFetchSize, Math.min(remainToFetch, count - range['start']));
                }

                // if there's nothing to fetch, quit
                if (range['count'] == 0)
                {
                    break;
                }
                
                // it's always attached at the end
                this.m_wrapped.fetchChildren(parent, range, {"success": function(nodeSet){this._handleFetchSuccess(nodeSet, parent, currDepth, range, count, callbacks);}.bind(this)}, options);

                // go up one level
                depth = currDepth;
                // update remaining fetch count
                remainToFetch = Math.max(0, remainToFetch - range['count']);

                // done if count is unknown or we've reach the root or we've reach total number of rows we want to fetch
                if (countUnknown || currDepth === 0 || remainToFetch === 0)                
                {
                    break;
                }
            }
        }
    }            

    // if batching is used, fire a final fetch children call to flush the queue
    if (options != undefined)
    {
        this.m_wrapped.fetchChildren(parent, {'start': range['count'], 'count': 0}, {"success": function(nodeSet){this._handleFetchSuccess(nodeSet, parent, currDepth, range, count, callbacks);}.bind(this)});
    }

    // return false if no results are fetched
    return (remainToFetch != fetchSize);
};

/**
 * Walk the node set and do whatever processing is neccessary.
 * @param {Object} nodeSet the node set to process
 * @param {Object} parent the parent key of the nodes
 * @param {number} depth the depth of the nodes
 * @param {Array.<Object>=} toExpand the set of keys to be expand.  It is populated by this method.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._processNodeSet = function(nodeSet, parent, depth, toExpand)
{
    var nodeStart, nodeCount, i, metadata, key;

    nodeStart = nodeSet.getStart();
    nodeCount = nodeSet.getCount();

    // walk the node set and populate the internal cache
    for (i=0; i<nodeCount; i++)
    {
        metadata = nodeSet.getMetadata(nodeStart+i);
        key = metadata['key'];

        this._addEntry(key, depth, nodeStart+i, parent);

        if (this._isExpanded(key))
        {
            // keep track of rows that needs to expand later
            toExpand.push(key);
        }
    }
};

/**
 * A hook for FlattenedTreeDataSource to inject additional metadata into the NodeSet
 * @param {Object} key the row key identifying the row
 * @param {Object} metadata the existing metadata to inject into
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.insertMetadata = function(key, metadata)
{
    if (this._isExpanded(key) && !metadata['leaf'])
    {
        // also update metadata with state info
        metadata['state'] = 'expanded';
    }
    else
    {
        // include state metadata for row expander to render correct icon
        if (metadata['leaf'])
        {
            metadata['state'] = 'leaf';
        }
        else
        {
            metadata['state'] = 'collapsed';
        }
    }
};

/**
 * Fetch a range of rows from the underlying TreeDataSource using the fetchDescendants method.
 * @param {Object} range the range of rows to fetch.  This is the range in a flattened view.
 * @param {number} range.start the start of the range in a flattened view
 * @param {number} range.count the number of rows to fetch
 * @protected
 */ 
oj.FlattenedTreeDataSource.prototype._fetchRowsFromDescendants = function(range, callbacks)
{
    // give implementation a hint of maximum to fetch, implementation can choose to ignore it
    var options = {'maxCount': this.getMaxCount()};

    // give implementation a hint of where to start, implementation can choose to ignore it
    if (this._getLastIndex() >= 0)
    {
        options['start'] = this._getEntry(this._getLastIndex())['key'];
    }

    // invoke method on TreeDataSource
    this.m_wrapped.fetchDescendants(null, {"success": function(nodeSet){this._handleFetchDescendantsSuccess(nodeSet, range, callbacks);}.bind(this)}, options);
};

/**
 * Process success callback for fetchDescendants operation before handing it back to original caller.
 * @param {Object} nodeSet the set of fetched nodes
 * @param {Object} range the request range for the fetch operation
 * @param {Object} callbacks the original callbacks passed to the fetch operation
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleFetchDescendantsSuccess = function(nodeSet, range, callbacks)
{
    var maxFetchSize, count, lastEntry, options, actualStart;

    // this condition should always be true since in high watermark scrolling we are
    // always asking for rows after the current last row
    if (range['start'] > this._getLastIndex())
    {
        maxFetchSize = this._getMaxFetchSize();
        count = Math.min(maxFetchSize, range['count']);

        // wrap it to inject additional metadata
        nodeSet = new oj.NodeSetWrapper(nodeSet, this.insertMetadata.bind(this));

        if (this._getLastIndex() >= 0)
        {
            // in fetchDescendants case, the result node set would probably contains more than what
            // we would return.  The issue is we can't really use range to filter the set since the 
            // range in the current view does not map one-to-one to the expand all node set as some 
            // node might have been collapsed before the fetch.
            // the solution is to use the last cached entry to find where new data starts in the
            // result node set, and use range count to limit what to return
            lastEntry = this._getLastEntry();
            options = {'index': 0, 'found': false, 'count': 0};
            this._processDescendantsNodeSet(nodeSet, null, 0, lastEntry, count, options);
            actualStart = options['index'] + 1;
        }
        else
        {
            // initial fetch case, just specify the count to limit result
            options = {'count': 0};
            this._processDescendantsNodeSet(nodeSet, null, 0, null, count, options);
            actualStart = 0;
        }

        if (callbacks != null && callbacks['success'] != null)
        {
            if (options != null)
            {
                if (options['count'] === 0)
                {
                    // nothing is used from node set, just return a empty node set
                    nodeSet = new oj.EmptyNodeSet(null, range['start']);
                }
                else 
                {
                    // wraps node set with a filter that only returns nodes that
                    // have not been fetched already
                    nodeSet = new oj.FlattenedNodeSet(nodeSet, actualStart);
                }
            }
            else
            {
                nodeSet = new oj.FlattenedNodeSet(nodeSet);
            }
            callbacks['success'].call(null, nodeSet);
        }

        return;
    }

    // the only case we'll ended up here is if the max count has been reached or
    // for some reason the caller is asking for count = 0
    this.handleMaxCountReached(range, callbacks);
};

/**
 * Walk the node set and do whatever processing is neccessary.
 * @param {Object} nodeSet the node set to process
 * @param {Object} parent the parent key of the nodes
 * @param {number} depth the depth of the nodes
 * @param {Object} lastEntry the last fetched entry
 * @param {number} maxCount the maximum number of rows to process
 * @param {Object=} options this object carries information collected in this method
 * @private
 */
oj.FlattenedTreeDataSource.prototype._processDescendantsNodeSet = function(nodeSet, parent, depth, lastEntry, maxCount, options)
{
    var nodeStart, nodeCount, i, metadata, key, childNodeSet;

    nodeStart = nodeSet.getStart();
    nodeCount = nodeSet.getCount();

    // walk the node set and populate the internal cache
    for (i=0; i<nodeCount; i++)
    {
        // see if we have enough results
        if (options['count'] == maxCount)
        {
            return;
        }

        metadata = nodeSet.getMetadata(nodeStart+i);
        key = metadata['key'];

        // see if we need to check depth
        if (options['checkDepth'])
        {
            if (lastEntry['depth'] === depth)
            {
                options['found'] = true;
                options['checkDepth'] = false;
            }
        }

        if (lastEntry == null || options['found'])
        {
            this._addEntry(key, depth, nodeStart+i, parent);

            options['count'] = options['count'] + 1;

            // include state metadata for row expander
            // in the fetchDescendants case the state is always 'expanded'
            if (metadata['leaf'])
            {
                metadata['state'] = 'leaf';
            }
            else
            {
                metadata['state'] = 'expanded';
            }
        }

        // mark we found the entry in node set that matches the last key
        // the rest of node set we can start pushing to cache
        if (lastEntry != null && !options['found'])
        {
            // we'll need to also check whether the last entry is expanded (or not leaf)
            // if it is collapsed, then we can't add any nodes from the node set until
            // we found child in the node set that has the same depth
            if (key === lastEntry['key'])
            {
                if (metadata['leaf'] || this._isExpanded(key))
                {
                    options['found'] = true;
                }
                else
                {
                    // collapsed.  Mark to check the depth of the next node before
                    // setting found to true.
                    options['checkDepth'] = true;
                }
            }
            else
            {
                options['index'] = options['index'] + 1;
            }
        }

        // process child node set, if any
        if (nodeSet.getChildNodeSet)
        {
            childNodeSet = nodeSet.getChildNodeSet(i);
            if (childNodeSet != null)
            {
                this._processDescendantsNodeSet(childNodeSet, key, depth+1, lastEntry, maxCount, options);
            }
        }
    }
};

/**
 * Expand the specified row.
 * @param {Object} rowKey the key of the row to expand
 * @export
 */
oj.FlattenedTreeDataSource.prototype.expand = function(rowKey)
{
    this._expand(rowKey);
};

/**
 * Expand the specified row with options
 * @param {Object} rowKey the key of the row to expand
 * @param {Object=} options additional options to pass to fetchChildren method
 * @private
 */
oj.FlattenedTreeDataSource.prototype._expand = function(rowKey, options)
{
    var count, fetchSize, maxCount, refIndex, queue, prevNodeSetInfo;

    count = this.m_wrapped.getChildCount(rowKey);
    fetchSize = this._getFetchSizeToUse(count);
    maxCount = this.getMaxCount();

    // if cache is full, check if the rowKey is the last row, if it's
    // the last row do nothing
    if (this._getLastIndex()+1 === maxCount)
    {
       refIndex = this.getIndex(rowKey);
       if (refIndex == maxCount-1)
       {
           // we'll still have to return an empty nodeset to trigger done to occur in handleExpandSuccess
           this.handleExpandSuccess(rowKey, new oj.EmptyNodeSet(rowKey, 0), 0, options);
           return;
       }
    }

    // nothing to do
    if (fetchSize == 0)
    {
        // we'll still have to return an empty nodeset to trigger done to occur in handleExpandSuccess
        this.handleExpandSuccess(rowKey, new oj.EmptyNodeSet(rowKey, 0), 0, options);
        return;
    }

    this.m_wrapped.fetchChildren(rowKey, {"start": 0, "count": fetchSize}, {"success": function(nodeSet){this.handleExpandSuccess(rowKey, nodeSet, count, options);}.bind(this)});
};

/**
 * Collapse the specified row.
 * @param {Object} rowKey the key of the row to collapse
 * @export
 */
oj.FlattenedTreeDataSource.prototype.collapse = function(rowKey)
{
    var rowIndex, parent, count, depth, lastIndex, i, j, keys;

    rowIndex = this.getIndex(rowKey) + 1;
    parent = this._getEntry(rowIndex-1);

    // keeping track of how many rows to remove
    count = 0;

    depth = parent['depth'];
    lastIndex = this._getLastIndex();
    for (j=rowIndex; j<lastIndex+1; j++)
    {
        var rowData = this._getEntry(j);
        var rowDepth = rowData['depth'];
        if (rowDepth > depth)
        {
            count = count + 1;
        }
        else if (rowDepth == depth)
        {
            break;
        }
    }

    // nothing to do
    if (count == 0)
    {
        return;
    }

    // remove from expanded keys or add to collapsed keys
    if (this._isExpandAll())
    {
        this.m_collapsedKeys.push(rowKey);
    }
    else
    {
        this._removeExpanded(rowKey);
    }

    // remove rows from view
    keys = [];
    for (i=0; i<count; i++)
    {
        keys.push({"key": this._getEntry(rowIndex+i)['key'], "index":rowIndex+i});
    }

    // remove from cache.  Note this has to be done before firing row remove event
    // since it could cause a fetch which relies on the internal cache being up to date.
    this._removeEntry(rowIndex, count);    

    // (firing of event to view)
    this.removeRows(keys);

    // fire datasource event
    this.handleEvent("collapse", {'rowKey':rowKey});
};

/**
 * Checks whether the row key is expanded.
 * @param {Object} rowKey the key of the row to inquire the state
 * @return {boolean} true if the row is/should be expanded.  False otherwise.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._isExpanded = function(rowKey)
{
    if (this._isExpandAll())
    {
        if (this.m_collapsedKeys && this.m_collapsedKeys.length > 0)
        {
            // call helper method to check collapsed keys
            return (this._getCollapsedKeyIndex(rowKey) === -1);
        }
        else
        {
            // everything expanded
            return true;
        }
    }
    else
    {
        if (this.m_expandedKeys && this.m_expandedKeys.length > 0)
        {
            // call helper method to check expanded keys
            return (this._getExpandedKeyIndex(rowKey) > -1);
        }
        else
        {
            // nothing expanded
            return false;
        }
    }
};

/**
 * Helper method to retrieve the index of the row key in the set of collapsed row keys
 * @param {Object} rowKey the key of the row
 * @return {number} the index of the key in the collapsed key array
 * @private
 */ 
oj.FlattenedTreeDataSource.prototype._getCollapsedKeyIndex = function(rowKey)
{
    return this._getKeyIndex(this.m_collapsedKeys, rowKey);
};

/**
 * Helper method to retrieve the index of the row key in the set of expanded row keys
 * @param {Object} rowKey the key of the row
 * @return {number} the index of the key in the expanded key array
 * @private
 */ 
oj.FlattenedTreeDataSource.prototype._getExpandedKeyIndex = function(rowKey)
{
    return this._getKeyIndex(this.m_expandedKeys, rowKey);
};

/**
 * Helper method to retrieve the index of the row key in a specified array
 * @param {Object} rowKey the key of the row
 * @return {number} the index of the key in the array
 * @private
 */ 
oj.FlattenedTreeDataSource.prototype._getKeyIndex = function(arr, rowKey)
{
    var i, index;

    index = -1;
    for (i=0; i<arr.length; i++)
    {
        if (arr[i] === rowKey)
        {
            index = i;
        }
    }

    return index;
}

/**
 * Remove the row key from the expanded cache
 * @param {Object} rowKey the key to remove
 * @private
 */
oj.FlattenedTreeDataSource.prototype._removeExpanded = function(rowKey)
{
    var index = this._getExpandedKeyIndex(rowKey);

    // index found, remove from array
    if (index > -1)
    {
        this.m_expandedKeys.splice(index, 1);    
    }
};

/**
 * Remove the row key from the collapsed cache
 * @param {Object} rowKey the key to remove
 * @private
 */
oj.FlattenedTreeDataSource.prototype._removeCollapsed = function(rowKey)
{
    var index = this._getCollapsedKeyIndex(rowKey);

    // index found, remove from array
    if (index > -1)
    {
        this.m_collapsedKeys.splice(index, 1);    
    }
};

/**
 * Callback method to handle fetch success on expand operation.
 * @param {Object} rowKey the key of the expanded row
 * @param {Object} nodeSet the node set that describes the children of the expanded row
 * @param {number} childCount the total number of children the expanded row has
 * @param {Object=} options optional parameters to the method
 * @param {Object=} options.queue a queue of expanded rows remaining to process (depth first traversal)
 * @param {Object=} options.prevNodeSetInfo.nodeSet the node set from a previous expand call
 * @param {number=} options.prevNodeSetInfo.firstIndex the ref index for the FIRST expand call, this is needed when firing the insert event, where the insertion point is the first index
 * @param {Object=} options.prevNodeSetInfo.firstKey the ref row key for the FIRST expand call, this is needed when firing the insert event, where the insertion point is the first row key
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.handleExpandSuccess = function(rowKey, nodeSet, childCount, options)
{
    var refIndex, rangeStart, rowStart, rowCount, parent, depth, metadata, key, toExpand, i, j, queue, prevNodeSetInfo, done, maxCount;

    // wrap it to inject additional metadata
    nodeSet = new oj.NodeSetWrapper(nodeSet, this.insertMetadata.bind(this));

    refIndex = this.getIndex(rowKey) + 1;
    rangeStart = refIndex;

    rowStart = nodeSet.getStart();
    rowCount = nodeSet.getCount();

    parent = this._getEntry(refIndex-1);
    depth = parent['depth']+1;

    toExpand = [];

    // go through the node set and insert an entry with info about the row into internal cache
    for (i=rowStart; i<rowCount; i++)
    {
        metadata = nodeSet.getMetadata(i);
        key = metadata['key'];
        if (this._isExpanded(key))
        {
            // expand it if the user specified it to be expand (or the
            // parent was previously collapsed before and now expanded again, 
            // the expanded child would need to be expanded also)
            toExpand.push(key);
        }

        // add to cache
        this._insertRow(refIndex, metadata, parent['key'], i, depth);

        refIndex++;
    }

    // keep track of expanded row or collapsed row for expand all case
    if (this._isExpandAll())
    {
        this._removeCollapsed(rowKey);
    }
    else
    {
        // check whether it's already in expanded keys, which is the case
        // if it is expanded by initial expansion
        if (this.m_expandedKeys.indexOf(rowKey) === -1)
        {
            this.m_expandedKeys.push(rowKey);
        }
    }

    // extract optional params
    if (options != undefined)
    {
        queue = options['queue'];
        prevNodeSetInfo = options['prevNodeSetInfo'];
    }

    // see if a previous nodeset has been set and merge with current one 
    // so that we have one nodeset that includes expanded children, a single row insert event
    // is fired and the nodeset will be in the proper order
    if (prevNodeSetInfo != undefined)
    {
        nodeSet = new oj.MergedNodeSet(prevNodeSetInfo['nodeSet'], nodeSet, rowKey);
    }

    // check if there's nothing else to expand and process queue is empty
    done = (toExpand.length == 0 && (queue === undefined || queue.length == 0));
    if (done)
    {
        // fire event to insert the expanded rows
        if (prevNodeSetInfo != undefined)
        {
            // use the reference insertion point from prevNodeSetInfo instead
            this.insertRows(prevNodeSetInfo['firstIndex'], prevNodeSetInfo['firstKey'], nodeSet);
        }
        else
        {
            this.insertRows(rangeStart, rowKey, nodeSet);
        }

        // if child count is > fetched or child count is unknown and requested fetch count is the same as result set size, 
        // then delete all rows that comes after the reference row so that we can trigger a fetch when user scroll to the end
        // ALSO delete all rows that comes after reference row if the reference row is the last row (according to max row count)
        maxCount = this.getMaxCount();
        if ((childCount === -1 && rowCount === this.getFetchSize()) || childCount > rowCount || refIndex == maxCount)
        {
            this._deleteAllRowsBelow(refIndex);
        }
        else if (this._getLastIndex() >= maxCount)
        {
            // also clean up rows that goes beyond max row count after expand
            this._deleteAllRowsBelow(maxCount);
        }

        if (prevNodeSetInfo != undefined)
        {
            // fire expand event for each row key cached in prevNodeSetInfo
            for (j=0; j<prevNodeSetInfo['keys'].length; j++)
            {
                this.handleEvent("expand", {'rowKey':prevNodeSetInfo['keys'][j]});
            }
        }

        // fire event
        this.handleEvent("expand", {'rowKey':rowKey});
    }
    else
    {
        // there are still child rows to expand
        // create queue if not yet created
        if (queue === undefined)
        {
            queue = [];
        }

        // push expanded rows to the queue
        if (toExpand.length > 0)
        {
            queue.push(toExpand);
        }

        // create prevNodeSetInfo if not yet created
        if (prevNodeSetInfo === undefined)
        {
            prevNodeSetInfo = {};
            // populate the initial insertion index and key, this is needed when we are actually firing
            // the insert event
            prevNodeSetInfo['firstIndex'] = rangeStart;
            prevNodeSetInfo['firstKey'] = rowKey;
            // cache of row keys for firing expand event when everything is done
            prevNodeSetInfo['keys'] = [];
        }

        // update the previous node set 
        prevNodeSetInfo['nodeSet'] = nodeSet;
        // update keys array for fire expand events later
        prevNodeSetInfo['keys'].push(rowKey);

        // expand any child rows that should be expanded
        this._syncExpandRows(queue, prevNodeSetInfo);
    }
};

/**
 * Expands the specified array of rows synchronously, i.e. one will not start until the previous one is finished.
 * @param {Object} queue the queue of a set of expanded row keys remaining to process 
 * @param {Object} prevNodeSetInfo node set from the previous expand call
 * @private 
 */ 
oj.FlattenedTreeDataSource.prototype._syncExpandRows = function(queue, prevNodeSetInfo)
{
    var last, key, options;

    // peek the last set of expanded rows from queue (since we are doing depth first traversal)
    last = queue[queue.length-1];    
    // then take the first row key from the set
    key = last.shift();
    // if this is the last item in the set, we can remove the set from queue
    if (last.length === 0)
    {
        queue.pop();
    }

    this._expand(key, {'prevNodeSetInfo': prevNodeSetInfo, 'queue': queue});    
};

/**
 * Expands the specified array of rows.  Use batch fetching if supported.
 * @param {Array.<Object>} keys an array of row keys.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._expandRows = function(keys)
{
    var options, i;

    // use batch fetching if supported so we'll have less trip to server.
    if (this._isBatchFetching())
    {
        options = {'queueOnly': true};
    }

    // expand each of the rows
    for (i=0; i<keys.length; i++)
    {
        // last expand should not have any options set to flush to batch queue
        if (i == keys.length-1)
        {
            this._expand(keys[i]);
        }            
        else
        {
            this._expand(keys[i], options);
        }            
    }
};

/**
 * Insert a single row of data into the cache
 * @param {number} index the index (based on flattened view) where this is inserted
 * @param {Object} metadata the metadata of the inserted node
 * @param {Object} parentKey the key of the parent node
 * @param {number} childIndex the index relative to its parent where this is inserted
 * @param {number} depth the depth of the node
 * @private
 */
oj.FlattenedTreeDataSource.prototype._insertRow = function(index, metadata, parentKey, childIndex, depth)
{
    var key, rowData;

    key = metadata['key'];

    if (index <= this._getLastIndex())    
    {
        this._addEntry(key, depth, childIndex, parentKey, index);
    }
    else
    {
        this._addEntry(key, depth, childIndex, parentKey);
    }
};

/**
 * Remove all rows below the row of the specified index including this row.
 * @param {number} index the index from which we start to delete rows 
 * @param {number=} count the number of rows to delete.  If not specified, then delete until the end.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._deleteAllRowsBelow = function(index, count)
{
    var keys, event;

    if (count == undefined)
    {
        count = this._getLastIndex()+1 - index;
    }

    keys = [];
    for (var i=0; i<count; i++)
    {
        keys.push({"row": this._getEntry(index+i)['key'], "index":index+i});
    }

    // update internal cache
    this._removeEntry(index, count);    

    // fire event to remove rows from view
    this.removeRows(keys);
};

/**
 * Handles model event from underlying TreeDataSource.
 * @param {Event} event the model change event
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleModelEvent = function(event)
{
    var operation, ancestors, parentKey, index;

    operation = event['operation'];
    ancestors = event['parent'];
    if (Array.isArray(ancestors))
    {
        // take the direct key of direct parent
        parentKey = ancestors[ancestors.length-1];
    }
    else
    {
        // single element or null, value is the parent key
        parentKey = ancestors;
    }
    index = event['index'];

    if (operation === 'insert')
    {
        this._handleInsertEvent(parentKey, index, event['data']);
    }
    else if (operation === 'delete')
    {
        this._handleDeleteEvent(parentKey, index);
    }
    else if (operation === 'refresh')
    {
        this._handleRefreshEvent(parentKey);
    }
};

/**
 * Handles insert event from TreeDataSource.
 * @param {Object} parentKey the key of the parent where the node is inserted
 * @param {number} index the index relative to its parent where the noce is inserted
 * @param {Object} nodeSet the node set containing the single insert data
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleInsertEvent = function(parentKey, index, nodeSet)
{
    var parentIndex, parent, depth, insertIndex, metadata;

    parentIndex = this.getIndex(parentKey);
    parent = this._getEntry(parentIndex);
    depth = parent['depth']+1;
    insertIndex = parentIndex + index + 1;

    // there should only be one row in the set
    metadata = nodeSet.getMetadata(nodeSet.getStart());

    // insert into cache
    this._insertRow(insertIndex, metadata, parentKey, index, depth)    
};

/**
 * Handles delete event from TreeDataSource.
 * @param {Object} parentKey the key of the parent where the node is inserted
 * @param {number} index the index relative to its parent where the noce is inserted
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleDeleteEvent = function(parentKey, index)
{
    var parentIndex, parent, startIndex, start, count, currentIndex, lastIndex, current;

    parentIndex = this.getIndex(parentKey);
    parent = this._getEntry(parentIndex);

    startIndex = parentIndex + index;
    start = this._getEntry(startIndex);

    // make sure the child data is valid
    oj.Assert.assert(start['parent'] === parent && start['depth'] === parent['depth']+1); 

    // remove the entry and all of its children from cache
    count = 1;
    currentIndex = startIndex + 1;
    lastIndex = this._getLastIndex();
    while (currentIndex <= lastIndex)
    {
        current = this._getEntry(currentIndex);
        // check if we have reached the last child of the deleted node
        if (current['depth'] != start['depth'])
        {
            break;
        }      
        currentIndex++;
    }

    // remove rows
    this._deleteAllRowsBelow(startIndex, count);
};

/**
 * Handles refresh event from TreeDataSource.
 * @param {Object} parentKey the key of the parent where the node is inserted
 * @private
 */
oj.FlattenedTreeDataSource.prototype._handleRefreshEvent = function(parentKey)
{
    if (parentKey == null)
    {
        // the entire tree is refreshed
        // clean up internal cache
        this.refresh();
    }
};

/**
 * Checks whether all rows should be expanded.
 * @return {boolean} true if expand all rows, false otherwise.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._isExpandAll = function()
{
    var capability = this.m_wrapped.getCapability('fetchDescendants');
    return (this.m_collapsedKeys != undefined && capability != null && capability != 'disable');
};

/**
 * Checks whether batch fetching is supported.
 * @return {boolean} true if batch fetching is supported, false otherwise.
 * @private
 */
oj.FlattenedTreeDataSource.prototype._isBatchFetching = function()
{
    var capability = this.m_wrapped.getCapability('batchFetch');
    return (capability === 'enable');
};

/////////////////////////////// helper methods subclass should find useful //////////////////////////////////////////////
/**
 * Refresh the data source.  Clear out any state.
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.refresh = function()
{
    // clear the cache
    this._clearAll();

    // todo: more work here to force fetch (remove then insert)
};

/**
 * Determine the flattened index for the specified key
 * @param {Object} rowKey the key to find the index
 * @return {number} the index representing the specified key.  Returns -1 if the index
 *         cannot be found.
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.getIndex = function(rowKey)
{
    var lastIndex, i, rowData;

    lastIndex = this._getLastIndex();
    for (i=0; i<=lastIndex; i++)
    {
        rowData = this._getEntry(i);
        if (rowData['key'] == rowKey)
        {
            return i;
        }
    }

    // can't find it, return -1
    return -1;
};

/**
 * Determines the key for the specified flattened index
 * @param {number} index the index in flattened view
 * @return {Object|null} the key for the specified index.  Returns null if the index has not been
 *         fetched yet or is invalid.
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.getKey = function(index)
{
    // ensure the index is valid and in range
    if (index < 0 || index > this._getLastIndex())
    {
        return null;
    }

    // just return from internal cache
    return this._getEntry(index)['key'];
};

/**
 * Returns the currently fetched range.
 * @return {Object} the fetched range (start, end).
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.getFetchedRange = function()
{
    return {'start': 0, 'end': this._getLastIndex()+1};
};

///////////////////////////////////// methods subclass must override ////////////////////////////////////////////////////////
/**
 * Handles what happened when the maximum row count has been reached.
 * @param {Object} range the range of the fetch request which caused the max count to be reached.
 * @param {Object} callbacks the callbacks of the fetch request which caused the max count to be reached.
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.handleMaxCountReached = function(range, callbacks)
{
    // send an error by default
    if (callbacks != null && callbacks['error'] != null)
    {
        callbacks['error'].call(null);
    }
};

/**
 * Abstract method to insert a set of rows into the DataGrid/Table
 * @param {number} insertAtIndex the flattened index of the node where the rows are inserted.
 * @param {Object} insertAtKey the key of the node where the rows are inserted (the parent key)
 * @param {Object} nodeSet the node set containing data/metadata of inserted rows
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.insertRows = function(insertAtIndex, insertAtKey, nodeSet)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Abstract method to remove the specified rows in the DataGrid/Table
 * @param {Array.<Object>} rowKeys an array of keys of the rows to be remove.
 * @protected
 */
oj.FlattenedTreeDataSource.prototype.removeRows = function(rowKeys)
{
    oj.Assert.failedInAbstractFunction();
};

///////////////////////////////// methods that manipulates the internal cache ///////////////////////////////////
/**
 * Retrieve the flattened index of the last entry fetched so far
 * @return {number} the flattened index of the last entry
 * @private
 */
oj.FlattenedTreeDataSource.prototype._getLastIndex = function()
{
    return this.m_cache.length-1;
};

/**
 * Retrieve the metadata for the last entry fetched so far
 * @return {Object} the metadata for the last entry
 * @private
 */
oj.FlattenedTreeDataSource.prototype._getLastEntry = function()
{
    return this.m_cache[this._getLastIndex()];
};

/**
 * Retrieve metadata info for the specified index.
 * @param {number} index the flattened index 
 * @return {Object} the metadata info
 * @private
 */
oj.FlattenedTreeDataSource.prototype._getEntry = function(index)
{
    return this.m_cache[index];
};

/**
 * Add or insert entry to the cache
 * @param {Object} key the key
 * @param {number} depth the depth 
 * @param {number} index the index relative to its parent
 * @param {Object} parent the parent
 * @param {number=} insertAt insert the metadata entry at this flattened index
 * @private
 */
oj.FlattenedTreeDataSource.prototype._addEntry = function(key, depth, index, parent, insertAt)
{
    var rowData = new Object();
    rowData['key'] = key;
    rowData['depth'] = depth;
    rowData['index'] = index;
    rowData['parent'] = parent;

    if (insertAt === undefined)
    {
        this.m_cache.push(rowData);
    }
    else
    {
        this.m_cache.splice(insertAt, 0, rowData);
    }
};

/**
 * Remove entry from cache
 * @param {number} index the flattened index to start remove entry
 * @param {number} count how many entries to remove starting from the flattened index
 * @private
 */
oj.FlattenedTreeDataSource.prototype._removeEntry = function(index, count)
{
    this.m_cache.splice(index, count);
};

/**
 * Clears the internal cache
 * @private
 */
oj.FlattenedTreeDataSource.prototype._clearAll = function()
{
    this.m_cache.length = 0;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
//////////////////// _JsonTreeNodeDataSource ///////////////////////////////////

/**
 * Helper class to implement sort recursive features for tree.
 * @constructor
 * @private
 */
oj._JsonTreeNodeDataSource = function()
{
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.title = null;
    this.attr = null;
    this.leaf = null;
};

/**
 * Helper comparer method for ascending sort.
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._ascending = function(key)
{
    return function(a, b) 
    {
        if (a.attr && b.attr) 
        {
            if (a.attr[key] && b.attr[key])
            {
                return a.attr[key] < b.attr[key] ? 0 : 1;
            }
        }
        return a[key] < b[key] ? 0 : 1;
    }
};

/**
 * Helper comparer method for descending sort.
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._descending = function(key)
{
    return function(a, b) 
    {
        if (a.attr && b.attr) 
        {
            if (a.attr[key] && b.attr[key])
            {
                return a.attr[key] < b.attr[key] ? 1 : 0;
            }
        }
        return a[key] < b[key] ? 1 : 0;
    }
};

/**
 * Helper method for recursive sort.
 * @param {Object} criteria the sort criteria.
 * @param {Object} criteria.key the key identifying the attribute to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending".
 * @private
 */
oj._JsonTreeNodeDataSource.prototype._sortRecursive = function(criteria)
{
    var key = criteria['key'];
    if (criteria['direction'] === 'ascending')
    {
        this.children.sort(this._ascending(key));
    }
    else if (criteria['direction'] === 'descending')
	{
		this.children.sort(this._descending(key));
	}
    for (var i = 0, l = this.children.length; i < l; i++)
    {
        this.children[i]._sortRecursive(criteria);
    }
    return this;
};

///////////// JsonTreeDataSource //////////////////   

/**
 * A json object based implementation of the TreeDataSource.
 * @param {Object} data the json object
 * @constructor
 * @export
 * @extends oj.TreeDataSource
 */
oj.JsonTreeDataSource = function(data)
{
    var tree;

    tree = new oj._JsonTreeNodeDataSource(); // that's the root node

    if (!data.id)
    {
        tree.id = "root";
    }

    this.data = this._createTreeDataSource(0, tree, data);

    oj.JsonTreeDataSource.superclass.constructor.call(this, tree);
};

// Subclass from oj.TreeDataSource
oj.Object.createSubclass(oj.JsonTreeDataSource, oj.TreeDataSource, "oj.JsonTreeDataSource");

/**
 * Initial the json object based data source.
 * @export
 */
oj.JsonTreeDataSource.prototype.Init = function()
{
    // call super
    oj.JsonTreeDataSource.superclass.Init.call(this);
};

/**
 * Returns tree based structure/object from json data.
 * @param {Object} target the final tree structure. 
 * @param {Object} source the json object.
 * @param {number=} depth used recursively for depth calculation.
 */
oj.JsonTreeDataSource.prototype._createTreeDataSource = function(c, target, source, depth)
{
    var children, node, child, prop, propr, prp, prpr, j;

    if (!depth)
    {
        depth = 0;
    }

    for (prop in source)
    {
        if (prop == "children" || (depth == 0 && source instanceof Array))
        {
            if (depth == 0 && source instanceof Array)
            {
                children = source;
            }
            else
            {
                children = source[prop];
            }

            depth++;
            for (j = 0; j < children.length; j++)
            {
                child = children[j];
                node = new oj._JsonTreeNodeDataSource();
                if (!child.id) 
                {
					c++;
                    if (!child.attr) 
                    {
                        node.id = 'rid_' + c;//Math.floor((Math.random() * 1000) + 1);
                    } 
                    else if (!child.attr.id) 
                    {
                        child.attr.id = 'rid_' + c;//Math.floor((Math.random() * 1000) + 1);
                    }
                }
                for (propr in child)
                {
                    for (prp in node)
                    {
                        if (propr == prp && propr != "children")
                        {    
                            node[prp] = child[propr];
                        }
                        if (prp == "depth")
                        {
                            node[prp] = depth;
                        }
                    }
                }
                target.children.push(node);
                for (prp in child)
                {
                    if (prp == "children")
                    {
                        this._createTreeDataSource(c, target.children[j], child, depth);
                    }
                }
            }
        }
    }
    return target;
};

/**
 * Returns the number of children for a specified parent.  If the value returned is not >= 0 then it is automatically assumed
 * that the child count is unknown.
 * @param {Object} parentKey the parent key.  Specify null if inquiring child count of the root.
 * @return {number} the number of children for the specified parent.
 * @export
 */
oj.JsonTreeDataSource.prototype.getChildCount = function(parentKey)
{
    var parent;

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    if (parent.children)
    {
        return parent.children.length;
    }
    else
    {
        return 0;
    }
};

/**
 * Fetch the children
 * @param {Object} parentKey the parent key.  Specify null if fetching children from the root.
 * @param {Object} range information about the range, it must contain the following properties: start, count.
 * @param {number} range.start the start index of the range in which the children are fetched.
 * @param {number} range.count the size of the range in which the children are fetched.  
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.JsonNodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} options optional parameters for this operation.
 * @param {boolean=} options.queueOnly true if this fetch request is to be queued and not execute yet.  The implementation must maintain 
 *        the order of the fetch operations.  When queueOnly is false/null/undefined, any queued fetch operations are then
 *        flushed and executed in the order they are queued.  This flag is ignored if the datasource does not support batching.
 * @export
 */
oj.JsonTreeDataSource.prototype.fetchChildren = function(parentKey, range, callbacks, options)
{
    var i, childStart, childEnd, nodeSet, results, parent, node;

    childStart = 0;
    childEnd = 0;
    results = [];

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    if (!range)
    {
        range = [];
        range['start'] = 0;
        range['count'] = parent.children.length;
    }

    if (!range['count'])
    {
        range['count'] = parent.children.length;
    }

    if (!range['start'])
    {
        range['start'] = 0;
    }

    childStart = range['start'];
    childEnd = Math.min(parent.children.length, childStart + range['count']);

    // now populate results from data array
    for (i = childStart; i < childEnd; i += 1)
    {
        node = new oj._JsonTreeNodeDataSource();
        if(parent.children[i].attr)
        {
            node.attr = parent.children[i].attr;
        }
        if(parent.children[i].id)
        {
            node.id = parent.children[i].id;
        }
        if(parent.children[i].depth)
        {
            node.depth = parent.children[i].depth;
        }
        if(parent.children[i].title)
        {
            node.title = parent.children[i].title;
        }
        if(parent.children[i].parent)
        {
            node.parent = parent.children[i].parent;
        }
        if(parent.children[i].children.length > 0)
        {
            node.leaf = false;
        }
        else 
        {
            node.leaf = true;
        }
        results.push(node);
    }

    // invoke callback
    nodeSet = new oj.JsonNodeSet(childStart, childEnd, results, parentKey, parent.depth);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, nodeSet);
    }
};

/**
 * Fetch all children and their children recursively from a specified parent.
 * @param {Object} parentKey the parent key.  Specify null to fetch everything from the root (i.e. expand all)
 * @param {Object} callbacks the callbacks to be invoke when fetch children operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.JsonNodeSet)} callbacks.success the callback to invoke when fetch completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch children failed.
 * @param {Object=} maxCount the maximum number of children to fetch.  If a non-positive number is specified, then the value is ignored and
 *        there is no maximum fetch count.
 * @export
 */
oj.JsonTreeDataSource.prototype.fetchDescendants = function(parentKey, callbacks, maxCount)
{
    var range, i, childStart, childEnd, nodeSet, results, parent;

    childStart = 0;
    childEnd = 0;
    results = [];

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    range = [];
    range['start'] = 0;
    range['count'] = parent.children.length;

    childStart = range['start'];
    childEnd = Math.min(parent.children.length, childStart + range['count']);

    // now populate results from data array
    for (i = childStart; i < childEnd; i += 1)
    {       
	if(parent.children[i].children.length > 0)
        {
            parent.children[i].leaf = false;
        }
        else 
        {
            parent.children[i].leaf = true;
        }
        results.push(parent.children[i]); 
    }

    // invoke callback
    nodeSet = new oj.JsonNodeSet(0, results.length, results, parentKey, parent.depth);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, nodeSet);
    }
};

/**
 * Moves a node from one location to another (different position within the same parent or a completely different parent)
 * @param {Object} nodeToMove the key of the node to move
 * @param {Object} referenceNode the key of the reference node which combined with position are used to determine 
 *        the destination of where the node should moved to.
 * @param {number|string} position The position of the moved node relative to the reference node.  
 *        This can be a string: "before", "after", "inside", "first", "last", or the zero based index to position 
 *        the element at a specific point among the reference node's current children.
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @export
 */
oj.JsonTreeDataSource.prototype.move = function(nodeToMove, referenceNode, position, callbacks)
{
    var moveNode, refNode, moveNodeKey, refNodeKey, pos, parent, index;

    pos = position;
    moveNodeKey = nodeToMove;
    refNodeKey = referenceNode;

    if ((!refNodeKey || refNodeKey == this.data.id))
    {
        if (pos != "inside")
        {
            console.log("Error: root can not be the reference node if position equals to " + pos);
            return;
        }
        else
        {
            if (!refNodeKey)
            {
                refNodeKey = this.data.id;
            }
        }
    }

    //get node to move;
    moveNode = this._searchTreeById(null, moveNodeKey);
    //if the moveNode doesn't contain the reference node as its sub-tree the action is allowed
    if (!this._searchTreeById(moveNode, refNodeKey))
    {
        refNode = this._searchTreeById(null, refNodeKey);

        parent = this._getParentById(refNodeKey);
        //remove moveNode from the original position;
        this._removeFromTree(moveNode);
        if (pos == "inside")
        {
            this._updateDepth(moveNode, moveNode.depth - (refNode.depth + 1));
            refNode.children.push(moveNode);
        }
        else if (pos == "before")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            index = parent.children.indexOf(refNode);
            if (index > -1)
            {
                if (index != 0)
                {
                    parent.children.splice(index - 1, 0, moveNode);
                }
                else
                {
                    parent.children.unshift(moveNode);
                }
            }
        }
        else if (pos == "after")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            index = parent.children.indexOf(refNode);
            if (index > -1)
            {
                parent.children.splice(index, 0, moveNode);
            }
        }
        else if (pos == "first")
        {
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            parent.children.unshift(moveNode);
        }
        else if (pos == "last")
        {
            //update depth recursively
            this._updateDepth(moveNode, moveNode.depth - refNode.depth);
            parent.children.push(moveNode);
        }

        // invoke original success callback
        if (callbacks != null && callbacks['success'] != null)
        {
            callbacks['success'].call(null, this.data);
        }
    }
    else
    {
        console.log("Error: the node to move contains the reference node as its sub-tree.");
    }
};

/**
 * Performs a sort operation on the tree data.
 * @param {Object} criteria the sort criteria.  It must contain the following properties: key, direction
 * @param {Object} criteria.key the key identifying the attribute (column) to sort on
 *        {string} criteria.direction the sort direction, valid values are "ascending", "descending", "none" (default)
 * @param {function()} callbacks.success the callback to invoke when the sort completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when sort failed.
 * @export
 */
oj.JsonTreeDataSource.prototype.sort = function(criteria, callbacks)
{
    var parent, parentKey;

    parentKey = null;

    if (!parentKey)
    {
        parentKey = this.data.id;
    }

    parent = this._searchTreeById(this.data, parentKey);

    parent._sortRecursive(criteria);

    // invoke original success callback
    if (callbacks != null && callbacks['success'] != null)
    {
        callbacks['success'].call(null, parent);
    }
};

/**
 * @param {string|number} refNodeKey
 * @param {Object=} currNode
 * @return {Object|null} the node with required key value.
 * @private
 */
oj.JsonTreeDataSource.prototype._getParentById = function(refNodeKey, currNode)
{
    var i, parent = null, parentIsFound = false;

    if ((refNodeKey == this.data.id))
    {
        return null;
    }

    if (!currNode)
    {
        currNode = this.data;
    }

    if (currNode.children && currNode.children.length > 0)
    {
        for (i = 0; i < currNode.children.length; i++)
        {
            if ((currNode.children[i].id && currNode.children[i].id == refNodeKey) || (currNode.children[i].attr && currNode.children[i].attr.id == refNodeKey))
            {
                parentIsFound = true;
                return currNode;
                break;
            }
        }
        if (!parentIsFound)
        {
            for (i = 0; i < currNode.children.length; i++)
            {
                parent = this._getParentById(refNodeKey, currNode.children[i]);
                if (parent)
                {
                    parentIsFound = true;
                    return parent;
                    break;
                }
            }

        }
    }
    return parent;
};

/**
 * Helper method to traverse through the tree and return the node with required key.
 * @param {Object|null} currChild the start tree node.
 * @param {Object|null} parentKey the node key for search.
 * @return {Object|null} the node with required key value.
 * @private
 */
oj.JsonTreeDataSource.prototype._searchTreeById = function(currChild, parentKey)
{
    var i, result = null;

    if (!currChild)
    {
        currChild = this.data;
    }

    if ((currChild.id && currChild.id == parentKey) || (currChild.attr && currChild.attr.id == parentKey))
    {
        return currChild;
    }
    else if (currChild.children != null)
    {
        for (i = 0; i < currChild.children.length; i++)
        {
            if (result)
            {
                return result;
                break;
            }
            if ((currChild.children[i].id && currChild.children[i].id == parentKey) || (currChild.children[i].attr && currChild.children[i].attr.id == parentKey))
            {
                result = currChild.children[i];
            }
            else
            {
                result = this._searchTreeById(currChild.children[i], parentKey);
            }
        }
        return result;
    }
    return result;
};

/**
 * Helper method to update the node's depth alongside with its children.
 * @param {Object} currChild the node to update.
 * @param {number} offset the difference between current and updated depth values.
 * @private
 */
oj.JsonTreeDataSource.prototype._updateDepth = function(currChild, offset)
{
    var i;

    currChild.depth = currChild.depth - offset;

    if (currChild.children && currChild.children.length != 0)
    {
        for (i = 0; i < currChild.children.length; i++)
        {
            this._updateDepth(currChild.children[i], offset);
        }
    }
};


/**
 * Helper method to remove node from the tree (based on depth value).
 * @param {Object} currChild the node to remove.
 * @private
 */
oj.JsonTreeDataSource.prototype._removeFromTree = function(currChild)
{
    var parent, index, key;

    if (currChild.id)
    {
        key = currChild.id;
    }
    else if (currChild.attr)
    {
        key = currChild.attr.id;
    }

    parent = this._getParentById(key);
    if (!parent)
    {
        parent = this.data;
    }
    index = parent.children.indexOf(currChild);
    if (index > -1)
    {
        parent.children.splice(index, 1);
    }
};

/**
 * Determines whether this TreeDataSource supports the specified feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the valid features "sort", 
 *        "move", "fetchDescendants", "batchFetch"
 * @return {string|null} the name of the feature.  Returns null if the feature is not recognized.
 *         For "sort", the valid return values are: "default", "none".  
 *         For "fetchDescendants", the valid return values are: "enable", "disable", "suboptimal".  
 *         For "move", the valid return values are: "default", "none".  
 *         For "batchFetch", the valid return values are: "enable", "disable".  
 * @export
 */
oj.JsonTreeDataSource.prototype.getCapability = function(feature)
{
    if (feature === 'fetchDescendants')
    {
        return "enable";
    }
    else if (feature === 'sort')
    {
        return "default";
    }
    else if (feature === 'batchFetch')
    {
        return "disable";
    }
    else if (feature === 'move')
    {
        return "full";
    }
    else
    {
        return null;
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

/*jslint browser: true*/

/**
 * @export
 * @class oj.Row
 * @classdesc Object representing name/value pairs for a row of data
 *
 * @param {Object=} attributes Initial set of attribute/value pairs with which to seed this Row object 
 * @param {Object=} options 
 *                  rowSet: rowSet for this row
 *                  context: context for this row
 * @constructor
 */
oj.Row = function(attributes, options)
{
  oj.Row._init(this, attributes, options, null);
};


// Subclass from oj.Object 
oj.Object.createSubclass(oj.Row, oj.Object, "Row.Row");

oj.Row.prototype.Init = function()
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
oj.Row.prototype.attributes = {};

/**
 * 
 * @export
 * @desc Attribute/value pairs for context held by the Row.
 * 
 * @type Object
 */
oj.Row.prototype.context = {};

/**
 * @export
 * @desc The Row's unique ID. Can be a String for single keys and Array for compound keys.
 * 
 * @type {string|Array}
 */
oj.Row.prototype.id = null;

/**
 * @export
 * @desc The name or Array of the row property(s) to be used as the unique ID. See property id. This defaults to a value of "id".
 *  
 * @type {string|Array}
 */
oj.Row.prototype.idAttribute = null;

oj.Row._init = function(row, attributes, options, properties)
{
  var prop = null, attrCopy;

  row.Init();

  row.index = -1;

  options = options || {};
  row.attributes = {};

  // First, copy all properties passed in
  for (prop in properties)
  {
    if (properties.hasOwnProperty(prop))
    {
      row[prop] = properties[prop];
    }
  }
  
  row['rowSet'] = options['rowSet'];
  row['context'] = options['context'];
};

/**
 * Return a copy of the Row with identical attributes and settings
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.clone = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Returns the value of the property from the Row.
 * @param {string} property Property to get from row
 * @return {Object} value of property
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.get = function(property)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Set the value(s) of one or more attributes of the row
 * @param {string||Object} property Property attribute name to set, or an Object containing attribute/value pairs
 * @param {Object=} value Value for property if property is not an Object containing attribute/value pairs
 * @param {Object=} options Options may be passed in
 * @returns {Object||boolean} the row itself, false if failed
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.set = function(property, value, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return all of the Row's attributes as an array
 * 
 * @returns {Array} array of all the Row's attributes
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.keys = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return all of the Row's attributes values as an array
 * 
 * @returns {Array} array of all the Row's attributes values
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.values = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return an array of attributes/value pairs found in the Row 
 * 
 * @returns {Object} returns the Row's attribute/value pairs as an object property bag
 * @export
 * @expose
 * @memberof! oj.Row
 * @instance
 */
oj.Row.prototype.pairs = function()
{
  oj.Assert.failedInAbstractFunction();
  return null;
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
 * @class oj.RowSet
 * @classdesc Internal class used for RowSet of Row objects. Should not be used by application developers. 
 */
oj.RowSet = function(rows, options)
{
  // Initialize
  oj.RowSet._init(this, rows, options, null);
};

/**
 * @export
 * @desc If set, sort the rowSet using the given attribute of a row (if string); function(Row) returning a string attribute
 * by which the sort should take place; function(Row1, Row2) if a user-defined function comparing Row1 and Row2 (see the
 * JavaScript array.sort() for details)
 * 
 * @type {string|function(Object)|function(Object,Object)|null}
 */
oj.RowSet.prototype.comparator = null;

/**
 * @export
 * @desc Set to true if sort is supported.
 * 
 * @type boolean
 */
oj.RowSet.prototype.sortSupported = true;


// Subclass from oj.Object 
oj.Object.createSubclass(oj.RowSet, oj.Object, "RowSet.RowSet");

oj.RowSet.prototype.Init = function()
{
  oj.RowSet.superclass.Init.call(this);
};

oj.RowSet._init = function(rowSet, rows, options, properties)
{
  var prop;
  rowSet._eventHandlers = [];
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
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.at = function(index, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Loads the data into the RowSet
 * @param {Object=} options Options to control fetch<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.fetch = function(options)
{
  oj.Assert.failedInAbstractFunction();
}

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
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.get = function(id, options)
{
  oj.Assert.failedInAbstractFunction();
  return null;
};

/**
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.hasMore = function()
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
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.indexOf = function(row, options)
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
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.isEmpty = function()
{
  oj.Assert.failedInAbstractFunction();
  return true;
};

/**
 * Return the length of the RowSet
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.size = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Sort the Rows in the RowSet
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.sort = function()
{
  oj.Assert.failedInAbstractFunction();
};

/**
 * Return the total length of the RowSet
 * @returns {number} length of the RowSet
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.totalSize = function()
{
  oj.Assert.failedInAbstractFunction();
  return 0;
};

/**
 * Attach an event handler to the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.on = function(eventType, eventHandler)
{
  var foundEventHandler = false, i;
  for (i = 0; i < this._eventHandlers.length; i++)
  {
    if (this._eventHandlers[i]['eventType'] == eventType &&
      this._eventHandlers[i]['eventHandlerFunc'] == eventHandler)
    {
      foundEventHandler = true;
      break;
    }
  }
  if (!foundEventHandler) {
    this._eventHandlers.push({'eventType': eventType, 'eventHandlerFunc': eventHandler});
  }
};

/**
 * Detach an event handler from the datasource
 * @param {string} eventType eventType supported by the datasource
 * @param {function(Object)} eventHandler event handler function
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.RowSet.prototype.off = function(eventType, eventHandler)
{
  var i;
  for (i = 0; i < this._eventHandlers.length; i++)
  {
    if (this._eventHandlers[i]['eventType'] == eventType &&
      this._eventHandlers[i]['eventHandlerFunc'] == eventHandler)
    {
      this._eventHandlers.remove(this._eventHandlers[i]);
      break;
    }
  }
};

/**
 * Handle the event
 * @param {string} eventType  event type
 * @param {?} event  event
 * @private
 */
oj.RowSet.prototype._handleEvent = function(eventType, event)
{
  var i;
  for (i = 0; i < this._eventHandlers.length; i++)
  {
    var eventHandler = this._eventHandlers[i];
    if (eventHandler['eventType'] == eventType)
    {
      eventHandler['eventHandlerFunc'](event);
    }
  }
};

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.RowSet.EventType =
  {
    /** Triggered when a Row is added to a RowSet */
    'ADD': "add",
    /** Triggered when a Row is removed from a RowSet */
    'REMOVE': "remove",
    /** Triggered when a RowSet is reset (see oj.RowSet.reset) */
    'RESET': "reset",
    /** Triggered when a RowSet is refreshed, generally from a collection */
    'REFRESH': "refresh",
    /** Triggered when a RowSet is sorted */
    'SORT': "sort",
    /** Triggered when a Row's attributes are changed */
    'CHANGE': "change",
    /** Triggered when a Row or RowSet has sent a request to the data service */
    'REQUEST': "request",
    /** Triggered when a Row or RowSet has been updated from the data service */
    'SYNC': "sync",
    /** Triggered when a Row has failed to update on the data service */
    'ERROR': "error"
  };

/**
 * @export
 * Event types
 * @enum {string}
 */
oj.RowSet._ROW_STATUSES =
  {
    _ADDED: 'added',
    _DELETED: 'deleted',
    _UPDATED: 'updated',
    _NONE: 'none'
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
 * @class oj.ArrayRow
 * @classdesc Object representing name/value pairs for a row of data
 *
 * @param {Object=} attributes Initial set of attribute/value pairs with which to seed this Row object 
 * @param {Object=} options 
 *                  rowSet: rowSet for this row
 * @constructor
 */
oj.ArrayRow = function(attributes, options)
{
  oj.ArrayRow._init(this, attributes, options, null);
};


// Subclass from oj.Object 
oj.Object.createSubclass(oj.ArrayRow, oj.Row, "ArrayRow.ArrayRow");

oj.ArrayRow.prototype.Init = function()
{
  oj.ArrayRow.superclass.Init.call(this);
};

/**
 * 
 * @export
 * @desc Attribute/value pairs held by the Model.
 * 
 * @type Object
 */
oj.ArrayRow.prototype.attributes = {};

/**
 * @export
 * @desc The Row's unique ID. 
 * 
 * @type {string|Array}
 */
oj.ArrayRow.prototype.id = null;

/**
 * @export
 * @desc The name of the row property to be used as the unique ID. See property id. This defaults to a value of "id".
 *  
 * @type {string|Array}
 */
oj.ArrayRow.prototype.idAttribute = null;

oj.ArrayRow._init = function(row, attributes, options, properties)
{
  var prop = null, attrCopy;

  row.Init();

  row.index = -1;

  options = options || {};
  row.attributes = attributes;

  // First, copy all properties passed in
  for (prop in properties)
  {
    if (properties.hasOwnProperty(prop))
    {
      row[prop] = properties[prop];
    }
  }
  
  row['idAttribute'] = options['idAttribute'];
  row['context'] = options['context'];
  row._setupId();
};

/**
 * @export
 * Return a copy of the Row with identical attributes and settings
 */
oj.ArrayRow.prototype.clone = function()
{
  var c = new this.constructor(), prop;

  for (prop in this)
  {
    // Shallow copy all but data
    if (this.hasOwnProperty(prop) && this[prop] !== this.attributes)
    {
      c[prop] = this[prop];
    }
  }
  // Deep copy data
  c.attributes = oj.ArrayRow._cloneAttributes(this.attributes, null);

  c._setupId();

  return c;
};

/**
 * Returns the value of the property from the Row.
 * @param {string} property Property to get from row
 * @return {Object} value of property
 * @export
 */
oj.ArrayRow.prototype.get = function(property)
{
  return this.attributes[property];
};

/**
 * Set the value(s) of one or more attributes of the row
 * @param {string||Object} property Property attribute name to set, or an Object containing attribute/value pairs
 * @param {Object=} value Value for property if property is not an Object containing attribute/value pairs
 * @param {Object=} options Options may be passed in
 * @returns {Object||boolean} the row itself, false if failed
 * @export
 */
oj.ArrayRow.prototype.set = function(property, value, options)
{
  var opts = {}, ignoreLastArg = false, prop, i, valid = true;

  if (arguments)
  {
    if (arguments.length > 0)
    {
      // Check if the last argument is not the first argument
      if (arguments.length > 1)
      {
        if (arguments[arguments.length - 1])
        {
          // Last arg is options: ignore later
          ignoreLastArg = true;
          opts = arguments[arguments.length - 1] || {};
        }
      }
      // Check if first arg is property bag
      if (oj.ArrayRow._hasProperties(property))
      {
        this._setProp(property, opts);
      }
      else
      {
        // Not a property bag?  We assume it's a series of property/value arguments
        for (i = 0; i < arguments.length; i += 2)
        {
          // Process the arg as long as its: defined, and isn't the last argument where we're supposed to ignore the last argument
          // due to it being 'options'
          if (arguments[i] !== undefined || i < arguments.length - 1 || (!ignoreLastArg && i === arguments.length - 1))
          {
            this._setProp(arguments[i], arguments[i + 1]);
          }
        }
      }
    }
  }
  return this;
};

/**
 * @export
 * Return all of the Row's attributes as an array
 * 
 * @returns {Array} array of all the Row's attributes
 */
oj.ArrayRow.prototype.keys = function()
{
  var prop, retArray = [];

  for (prop in this.attributes)
  {
    if (this.attributes.hasOwnProperty(prop))
    {
      retArray.push(prop);
    }
  }
  return retArray;
};

/**
 * @export
 * Return all of the Row's attributes values as an array
 * 
 * @returns {Array} array of all the Row's attributes values
 */
oj.ArrayRow.prototype.values = function()
{
  var prop, retArray = [];

  for (prop in this.attributes)
  {
    if (this.attributes.hasOwnProperty(prop))
    {
      retArray.push(this.get(prop));
    }
  }
  return retArray;
};

/**
 * @export
 * Return an array of attributes/value pairs found in the Row 
 * 
 * @returns {Object} returns the Row's attribute/value pairs as an object property bag
 */
oj.ArrayRow.prototype.pairs = function()
{
  var prop, retObj = [], item;
  for (prop in this.attributes)
  {
    if (this.attributes.hasOwnProperty(prop))
    {
      item = [];
      item.push(prop);
      item.push(this.get(prop));
      retObj.push(item);
      ;
    }
  }
  return retObj;
};

oj.ArrayRow.prototype._getIdAttr = function()
{
  return this['idAttribute'] || 'id';
};

// Might be a property value or a function
oj.ArrayRow.prototype._getProp = function(prop)
{
  if (this[prop] instanceof Function)
  {
    return this[prop]();
  }
  return this[prop];
};

oj.ArrayRow._hasProperties = function(object)
{
  var prop;
  if (object && object instanceof Object)
  {
    for (prop in object)
    {
      if (object.hasOwnProperty(prop))
      {
        return true;
      }
    }
  }
  return false;
};

oj.ArrayRow.prototype._setupId = function()
{
  var idAttr = this._getIdAttr();
  if ($.type(idAttr) === 'string')
  {
    this['id'] = this.attributes[idAttr];
  }
  else if ($.isArray(idAttr))
  {
    var i;
    this['id'] = [];
    for (i = 0; i < idAttr.length; i++)
    {
      this['id'][i] =  this.attributes[idAttr[i]];
    }
  }
};

oj.ArrayRow.prototype._setPropInternal = function(prop, value)
{
  if (!oj.Object.__innerEquals(this.attributes[prop], value))
  {
    this.attributes[prop] = value;
    this._setupId();
    oj.ArrayRowSet.superclass._handleEvent.call(this['rowSet'], oj.RowSet.EventType['CHANGE'], this);
    return true;
  }
  return false;
};

/**
 * @param {Object||string} prop
 * @param {Object} value
 * @returns {boolean}
 */
oj.ArrayRow.prototype._setProp = function(prop, value)
{
  if (prop == null)
  {
    return true;
  }

  var attrs = {}, p;

  if (arguments.length > 1)
  {
    attrs[prop] = value;
  }
  else
  {
    for (p in prop)
    {
      if (prop.hasOwnProperty(p))
      {
        attrs[p] = prop[p];
      }
    }
  }

  for (p in attrs)
  {
    if (attrs.hasOwnProperty(p))
    {
      this._setPropInternal(p, attrs[p]);
    }
  }
  return true;
};

oj.ArrayRow._cloneAttributes = function(oldData, newData)
{
  var prop;
  newData = newData || {};
  for (prop in oldData)
  {
    if (oldData.hasOwnProperty(prop)) {// && oldData[prop] !== undefined) {
      if (typeof (oldData[prop]) !== 'object')
      {
        // Only overwrite if not undefined
        if (newData.hasOwnProperty(prop))
        {
          if (oldData[prop] !== undefined)
          {
            newData[prop] = oldData[prop];
          }
        }
        else
        {
          newData[prop] = oldData[prop];
        }
      }
      else
      {
        newData[prop] = oj.ArrayRow._cloneAttributes(oldData[prop], null);
      }
    }
  }
  return newData;
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
 * @class oj.ArrayRowSet
 * @classdesc Internal class used for RowSet of ArrayRow objects. Should not be used by application developers. 
 * 
 * @param {Array=} rows Set of row objects or JS array of data to put into rowSet at construction time 
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 */
oj.ArrayRowSet = function(rows, options)
{
  // Initialize
  oj.ArrayRowSet._init(this, rows, options, null);
};

/**
 * @export
 * @desc If set, sort the rowSet using the given attribute of a row (if string); function(Row) returning a string attribute
 * by which the sort should take place; function(Row1, Row2) if a user-defined function comparing Row1 and Row2 (see the
 * JavaScript array.sort() for details)
 * 
 * @type {string|function(Object)|function(Object,Object)|null}
 */
oj.ArrayRowSet.prototype.comparator = null;

/**
 * @export
 * @desc Set to true if sort is supported.
 * 
 * @type boolean
 */
oj.ArrayRowSet.prototype.sortSupported = true;


// Subclass from oj.Object 
oj.Object.createSubclass(oj.ArrayRowSet, oj.RowSet, "ArrayRowSet.ArrayRowSet");

oj.ArrayRowSet.prototype.Init = function()
{
  oj.ArrayRowSet.superclass.Init.call(this);
};

oj.ArrayRowSet._init = function(rowSet, rows, options, properties)
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

  // Check options
  options = options || {};

  rowSet._rows = [];
  rowSet._pagedRows = [];

  if (rows != null && rows !== undefined)
  {
    rowSet._idAttribute = 'id';
    if (options != null && options['idAttribute'] != null)
    {
      rowSet._idAttribute = options['idAttribute'];
    }
    rowSet._data = (rows instanceof Array) ? rows : rows();
    rowSet._rows = oj.ArrayRowSet._getRowArray(rowSet._data, rowSet._idAttribute, rowSet);
    rowSet._totalSize = rowSet._data.length;
        
    if (!(rows instanceof Array))
    {
      // subscribe to observableArray arrayChange event to get individual updates
      (/** @type {{subscribe: Function}} */(rows))['subscribe']
        (
          function(changes) 
          {
            var i, row, delIndx = 0;
            // check if they are all deletes. If so, just call reset
            var removeAll = true;
            for (i = 0; i < changes.length; i++)
            {
              if (changes[i]['status'] != 'deleted')
              {
                removeAll = false;
              }
            }
            if (rows().length == 0 && removeAll)
            {
              rowSet.reset();
              return;
            }
            
            // do two passes, first for deletes and the second for adds
            for (i = 0; i < changes.length; i++)
            {
              if (changes[i]['status'] === 'deleted')
              {
                row = new oj.ArrayRow(changes[i].value, {'idAttribute': rowSet._idAttribute});
                row['index'] = changes[i].index - delIndx;
                rowSet._removeInternal(row, changes[i].index - delIndx);
                delIndx++;
              }
            }
            for (i = 0; i < changes.length; i++)
            {
              if (changes[i]['status'] === 'added')
              {
                row = new oj.ArrayRow(changes[i].value, {'idAttribute': rowSet._idAttribute});
                row['index'] = changes[i].index;
                rowSet.add(row, {'at': changes[i].index});
              }
            } 
          }, null, 'arrayChange');
    }
  }
};

/**
 * Add an instance of this RowSet's Row(s) to the end of the RowSet.
 * @param {Object} m Row object (or array of rows) to add. These can be already-created instance of the oj.Row object, or sets of attribute/values, which will be wrapped by add().
 * @param {Object=} options at: splice the new Row into the RowSet at the value given (at:index) <p>
 *                          deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 *                          silent: if set, do not fire an add event 
 * 
 * @returns {Object} if deferred or virtual, return a promise when the set has completed
 * @export
 */
oj.ArrayRowSet.prototype.add = function(m, options)
{
  options = options || {};
  var index = options['at'];
  var deferred = options['deferred'];

  this._addToRowSet(m, index, options);

  if (deferred)
  {
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve();
    });
  }
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
 *                  if deferred is specified and true, at will return a promise object which will call its then function,
 *                  passing the value at(index) 
 * @export
 */
oj.ArrayRowSet.prototype.at = function(index, options)
{
  options = options || {};
  var deferred = options['deferred'];

  if (index < 0 || index >= this._rows.length)
  {
    return null;
  }
  var row = this._rows[index];

  if (deferred)
  {
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve(row);
    });
  }
  return row;
};

/**
 * @export
 * Return a copy of the RowSet
 * @return {Object} copy of the RowSet
 */
oj.ArrayRowSet.prototype.clone = function()
{
  var rs = new this.constructor(), i;

  var row;
  for (i = 0; i < this._rows.length; i = i + 1)
  {
    row = this.at(i, null);
    if (row)
    {
      rs.add(row.clone(), {'at': i});
    }
  }

  return rs;
};

/**
 * Loads the data into the RowSet
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully.<p>
 *                  error: a user callback function called if the fetch fails.<p>
 * @throws {Error}
 * @export
 * @expose
 * @memberof! oj.RowSet
 * @instance
 */
oj.ArrayRowSet.prototype.fetch = function(options)
{
  options = options || {};
  this._startFetch();
  try
  {
    this._pageSize = options['pageSize'] > 0 ? options['pageSize'] : -1;
    this._startIndex = options != null ? (options['startIndex'] != null ? options['startIndex'] : 0) : 0;
    this._pagedRows = oj.ArrayRowSet._getPagedRows(this._rows, this._startIndex, this._pageSize);
  }
  catch (err)
  {
    this._endFetch(options, err);
    return;
  }
  
  options['pageSize'] = this._pageSize;
  options['startIndex'] = this._startIndex;
  options['refresh'] = true;
  this._endFetch(options, null);
}

/**
 * Return the first Row object from the RowSet whose Row id value is the given id
 * Note this method will not function as expected if the id is not set
 * @param {string|Array} id ID for which to return the Row object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 * @return {Object} First Row object in the RowSet where Row.id = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the Row when done
 * @export
 */
oj.ArrayRowSet.prototype.get = function(id, options)
{
  options = options || {};
  var deferred = options['deferred'];
  var i, j, row;
  var result = null;
  for (i = 0; i < this._rows.length; i = i + 1)
  {
    row = this._rows[i];
    if (row !== undefined)
    {
      if ($.isArray(row['id']) && $.isArray(id))
      {
        if (row['id'].length == id.length)
        {
          var equal = true;
          for (j = 0; j < id.length; j++)
          {
            if (row['id'][j] != id[j])
            {
              equal = false;
              break;
            }
          }
          if (equal)
          {
            result = row;
          }
        }
      }
      else if (row['id'] == id)
      {
        result = row;
      }
      if (result != null)
      {
        if (deferred)
        {
          return oj.Object.__getPromise(function(resolve, reject) {
            resolve(result);
        });
        }
        return result;
      }
    }
  }
  return null;
};

/**
 * @export
 * Return whether there is more data which can be fetched.
 * @return {boolean} whether there is more data
 */
oj.ArrayRowSet.prototype.hasMore = function()
{
  return false;
};

/**
 * Return the array index location of the given Row object.
 * @param {Object} row Row object to locate 
 * @param {Object=} options deferred: if true, return a promise as though this RowSet were virtual whether it is or not
 
 * @return {number} The index of the given Row object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 */
oj.ArrayRowSet.prototype.indexOf = function(row, options)
{
  var location;
  options = options || {};
  var deferred = options['deferred'];

  if (deferred)
  {
    return this.get(row['id'], null).then(function(loc) {
      return loc.index;
    });
  }
  location = this.get(row['id']);

  return location.index;
};

/**
 * @export
 * Determine if the RowSet has any Rows
 * 
 * @returns {boolean} true if RowSet is empty
 */
oj.ArrayRowSet.prototype.isEmpty = function()
{
  return this._pagedRows.length === 0;
};

/**
 * Remove a Row from the RowSet, if found.
 * @param {Object} m Row object (or array of rows) to remove.
 * @param {Object=} options silent: if set, do not fire a remove event 
 * @export
 */
oj.ArrayRowSet.prototype.remove = function(m, options)
{
  options = options || {};
  this._removeInternal(m, -1, options);
};

/**
 * Remove and replace the RowSet's entire list of Rows with a new set of Rows, if provided. Otherwise, empty the RowSet.
 * @param {Object=} data Array of Row objects with which to replace the RowSet's data. 
 * @param {Object=} options silent: if set, do not fire an add event<p>
 * @export
 */
oj.ArrayRowSet.prototype.reset = function(data, options)
{
  var i;

  options = options || {};
  options['previousRows'] = this._rows;
  var silent = options['silent'];

  if (data === undefined || data == null || (data instanceof Array && data.length == 0))
  {
    for (i = 0; i < this._rows.length; i = i + 1)
    {
      if (this._rows[i])
      {
        this._rows[i]['rowSet'] = null;
      }
    }
    this._pagedRows = [];
    this._rows = [];
    this._totalSize = 0;
  }
  else
  {
    this._rows = [];
    this._pagedRows = [];
    this._totalSize = 0;

    if (data instanceof Array)
    {
      for (i = 0; i < data.length; i = i + 1)
      {
        this.add(/** @type oj.Row */ (data[i]), options);
      }
    }
    else
    {
      this.add(/** @type oj.Row */ (data), options);
    }
  }
  if (!silent)
  {
    oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['RESET'], null);
  }
};

/**
 * @export
 * Return the length of the RowSet
 * @returns {number} length of the RowSet
 */
oj.ArrayRowSet.prototype.size = function()
{
  return this._pagedRows.length;
};

/**
 * @export
 * Sort the Rows in the RowSet
 */
oj.ArrayRowSet.prototype.sort = function()
{
  var comparator = this['comparator'], self;

  // Check for comparator
  if (!this._hasComparator())
  {
    return;
  }

  self = this;
  this._rows.sort(function(a, b)
  {
    return oj.ArrayRowSet._sortFunc(a, b, comparator, self, self);
  });
  this._realignRowIndices(0, this._rows);
  this._pagedRows = oj.ArrayRowSet._getPagedRows(this._rows, this._startIndex, this._pageSize);
  this._sorted = true;
  oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['SORT'], null);
};

/**
 * @export
 * Return the total length of the RowSet
 * @returns {number} length of the RowSet
 */
oj.ArrayRowSet.prototype.totalSize = function()
{
  return this._totalSize;
};

/**
 * @param {Object} m Row instance or array of Rows or sets of attribute/values
 * @param {number} index Index value
 * @param {Object=} options silent: if set, do not fire an add event 
 */
oj.ArrayRowSet.prototype._addToRowSet = function(m, index, options)
{
  var i, j, row;
  options = options || {};
  var silent = options['silent'];
  
  if (!(m instanceof Array))
  {
    m = [m];
  }
  for (i = 0; i < m.length; i++)
  {
    row = m[i];
    
    if (!(row instanceof oj.ArrayRow))
    {
      row = new oj.ArrayRow(row, {'idAttribute': this._idAttribute});
    }
    
    // check if pagedRows is empty
    if (!this._pagedRows || this._pagedRows.length == 0)
    {
      this._pagedRows = oj.ArrayRowSet._getPagedRows(this._rows, this._startIndex, this._pageSize);
    }

    if (this._sorted == true && this._rows.length > 0)
    {
      var self = this;
      for (j = 0; j < this._rows.length; j++)
      {
        if (oj.ArrayRowSet._sortFunc(row, this._rows[j], this['comparator'], self, self) < 0)
        {
          this._rows.splice(j, 0, row);
          row['index'] = j;
          break;
        }
        else if (j == this._rows.length - 1)
        {
          this._rows.push(row);
          row['index'] = j + 1;
          break;
        }
      }
    }
    else
    {
      if (index === undefined)
      { 
        this._rows.push(row);
        row['index'] = this._rows.length - 1;
      }
      else
      {
        this._rows.splice(index + i, 0, row);
        row['index'] = index + i;
      }
    }
    
    row['rowSet'] = this;
    var endIndex = oj.ArrayRowSet._getEndIndex(this._rows, this._startIndex, this._pageSize);
    if (row['index'] <= endIndex)
    {
      this._pagedRows.splice(row['index'], 0, row);
    }
    this._totalSize++;
    
    if (row['index'] != this._rows.length - 1)
    {
      // re-align the row indices if this is not the last row
      this._realignRowIndices(0, this._rows);
    }
    
    if (!silent)
    {
      oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ADD'], row);
    }
  }
}

oj.ArrayRowSet.prototype._getSortAttrs = function(sortStr)
{
  if (sortStr === undefined)
  {
    return [];
  }
  return sortStr.split(",");
};

oj.ArrayRowSet.prototype._getSortDirStr = function()
{
  if (this['sortDirection'] === -1)
  {
    return "dsc";
  }
  return "asc";
};

oj.ArrayRowSet.prototype._hasComparator = function()
{
  var comparator = this['comparator'];
  return comparator !== undefined && comparator !== null;
};

// Realign all the indices of the rows (after sort for example)
oj.ArrayRowSet.prototype._realignRowIndices = function(start, rows)
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

oj.ArrayRowSet.prototype._removeInternal = function(m, index, options)
{
  var i, j, row;
  options = options || {};
  var silent = options['silent'];
  
  if (!(m instanceof Array))
  {
    m = [m];
  }
  for (i = 0; i < m.length; i++)
  {
    row = m[i];
    
    if (index < 0 || this._sorted == true)
    {
      if (this.get(row['id']) != null)
      {
        index = this.get(row['id']).index;
      }
    }

    if (index > -1)
    {
      // only unset the RowSet setting if it's mine
      if (row !== undefined && row.rowSet === this)
      {
        row.rowSet = null;
      }
      var endIndex = oj.ArrayRowSet._getEndIndex(this._rows, this._startIndex, this._pageSize);
      this._rows.splice(index, 1);
      if (index <= endIndex)
      {
        this._pagedRows.splice(index, 1);
      }
      this._totalSize--;
      this._realignRowIndices(0, this._rows);
      if (!silent)
      {
        var opt = {};
        options['index'] = index;
        if (row !== undefined)
        {
          if (!silent)
          {
            oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['REMOVE'], row);
          }
        }
      }
    }
  }
  
  return row;
};

oj.ArrayRowSet.prototype._setRow = function(index, row)
{
  this._rows[index] = row;
  row['index'] = index;
};

/**
 * Indicate starting fetch
 * @private
 */
oj.ArrayRowSet.prototype._startFetch = function()
{
  oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['REQUEST'], null);
};

/**
 * Indicate ending fetch
 * @private
 */
oj.ArrayRowSet.prototype._endFetch = function(options, e)
{
  options = options || {}; 
  var success = options['success'];
  var error = options['error'];
  
  if (e != null)
  {
    oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['ERROR'], e);
    
    if (error)
    { 
      error.call(this, options, e);
    }
  }
  else
  {
    oj.ArrayRowSet.superclass._handleEvent.call(this, oj.RowSet.EventType['SYNC'], options);
    
    if (success)
    {
      success.call(this, options);
    }
  }
};

oj.ArrayRowSet._compareKeys = function(keyA, keyB, sortDirection)
{
  if (sortDirection === -1)
  {
    if (keyA < keyB)
    {
      return 1;
    }
    if (keyB < keyA)
    {
      return -1;
    }
  }
  else
  {
    if (keyA > keyB)
    {
      return 1;
    }
    if (keyB > keyA)
    {
      return -1;
    }
  }
  return 0;
};

oj.ArrayRowSet._getEndIndex = function(rows, startIndex, pageSize)
{
  var endIndex = rows.length - 1;
  
  if (pageSize > 0)
  {
    endIndex = startIndex + pageSize - 1;
    endIndex = endIndex > rows.length - 1 ? rows.length - 1 : endIndex;
  }
  
  return endIndex;
};

oj.ArrayRowSet._getKey = function(val, attr) {
  if (val instanceof oj.Row) {
    return val.get(attr);
  }
  if ($.isFunction(val[attr])) {
    return val[attr]();
  }
  return val[attr];
};

oj.ArrayRowSet._getPagedRows = function(rows, startIndex, pageSize)
{
  var endIndex = oj.ArrayRowSet._getEndIndex(rows, startIndex, pageSize);

  var pagedRowArray = [], i, row;
  for (i = 0; i <= endIndex; i++)
  {
    row = rows[i];
    row['index'] = i;
    pagedRowArray[i] = row;
  }

  return pagedRowArray;
};

oj.ArrayRowSet._getRowArray = function(values, idAttribute, rowSet)
{
  var endIndex = values.length - 1;

  var rowArray = [], i, prop;
  for (i = 0; i <= endIndex; i++)
  {
    var clonedRowValues = {};
    var rowValues = null;
    if (values[i] instanceof oj.Row)
    {
      rowValues = values[i].pairs();
    }
    else
    {
      rowValues = values[i];
    }
    for (prop in rowValues)
    {
      if (rowValues.hasOwnProperty(prop))
      {
        clonedRowValues[prop] = rowValues[prop];
      }
    }
    var row = new oj.ArrayRow(clonedRowValues, {'idAttribute': idAttribute});
    row['index'] = i;
    rowArray[i] = row;
    row['rowSet'] = rowSet;
  }

  return rowArray;
};

oj.ArrayRowSet._sortFunc = function(a, b, comparator, rowSet, self)
{
  var keyA, keyB, i, retVal;

  if ($.isFunction(comparator))
  {
    // How many args?
    if (comparator.length === 1)
    {
      // "sortBy" comparator option
      keyA = comparator.call(self, a);
      keyB = comparator.call(self, b);
      var attrs1 = oj.StringUtils.isString(keyA) ? keyA.split(",") : [keyA];
      var attrs2 = oj.StringUtils.isString(keyB) ? keyB.split(",") : [keyB];
      for (i = 0; i < attrs1.length; i++)
      {
        retVal = oj.ArrayRowSet._compareKeys(attrs1[i], attrs2[i], rowSet['sortDirection']);
        if (retVal !== 0)
        {
          return retVal;
        }
      }
      return 0;
    }
    // "sort" comparator option
    return comparator.call(self, a, b);
  }
  // String option
  if (oj.StringUtils.isString(comparator))
  {
    var attrs = comparator.split(",");

    for (i = 0; i < attrs.length; i++)
    {
      keyA = oj.ArrayRowSet._getKey(a, attrs[i]);
      keyB = oj.ArrayRowSet._getKey(b, attrs[i]);
      retVal = oj.ArrayRowSet._compareKeys(keyA, keyB, rowSet['sortDirection']);
      if (retVal !== 0)
      {
        return retVal;
      }
    }
  }
  return 0;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Convenient class that represents an empty node set
 * @param {Object} parent the parent key
 * @param {number} start the start index
 * @constructor
 * @export
 */
oj.EmptyNodeSet = function(parent, start)
{
    this.m_parent = parent;
    this.m_start = start;
};

/**
 * Gets the parent
 * @return {Object} the key of the parent.
 * @export
 */
oj.EmptyNodeSet.prototype.getParent = function()
{
    return this.m_parent;
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.  
 * @export
 */
oj.EmptyNodeSet.prototype.getStart = function()
{
    return this.m_start;
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.EmptyNodeSet.prototype.getCount = function()
{
    return 0;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.
 * @export
 */
oj.EmptyNodeSet.prototype.getData = function(index)
{
    return null;
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) state - state of the node, valid values are 'expanded', 'collapsed', 'leaf'. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.EmptyNodeSet.prototype.getMetadata = function(index)
{
    return null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Combines two NodeSets together into one.
 * @param {Object} nodeSet1 the first node set
 * @param {Object} nodeSet2 the second node set
 * @param {Object} mergeAt the row key on the first node set where the second node set is merge to 
 * @constructor
 * @export
 */
oj.MergedNodeSet = function(nodeSet1, nodeSet2, mergeAt)
{
    this.m_nodeSet1 = nodeSet1;
    this.m_nodeSet2 = nodeSet2;
    this.m_mergeAt = this._findIndex(mergeAt);
};

/**
 * Retrieve the index of the key within the first node set
 * Which is going to be the index where the two node set merge
 * @param {Object} key the key to find the index
 * @return {number} the index of the key within the first node set, if index is not found, then the last index of the first node set is returned.
 * @private
 */
oj.MergedNodeSet.prototype._findIndex = function(key)
{
    var start, end, i, rowKey;

    start = this.m_nodeSet1.getStart();
    end = start + this.m_nodeSet1.getCount();
    for (i=start; i<end; i++)
    {
        rowKey = this.m_nodeSet1.getMetadata(i)['key'];
        if (key === rowKey)
        {
            return i;
        }
    }

    // if the point cannot be found, the merge happens at the end
    return (end-1);
};

/**
 * Gets the parent
 * @return {Object} the key of the parent.
 * @export
 */
oj.MergedNodeSet.prototype.getParent = function()
{
    // returns the parent of the top node set
    return this.m_nodeSet1.getParent();
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.  
 * @export
 */
oj.MergedNodeSet.prototype.getStart = function()
{
    // returns the start of the top node set
    return this.m_nodeSet1.getStart();
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.MergedNodeSet.prototype.getCount = function()
{
    // return the total count of both node sets
    return this.m_nodeSet1.getCount() + this.m_nodeSet2.getCount();
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.
 * @export
 */
oj.MergedNodeSet.prototype.getData = function(index)
{
    var result, set, relIndex;

    result = this._getRelativeIndex(index);
    set = result['set'];
    relIndex = result['index'];

    return set.getData(relIndex);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) state - state of the node, valid values are 'expanded', 'collapsed', 'leaf'. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.MergedNodeSet.prototype.getMetadata = function(index)
{
    var result, set, relIndex;

    result = this._getRelativeIndex(index);
    set = result['set'];
    relIndex = result['index'];

    return set.getMetadata(relIndex);
};

/**
 * Calculate the relative index to the appropriate node set based on where the
 * merge point is.
 * @private
 */
oj.MergedNodeSet.prototype._getRelativeIndex = function(index)
{
    if (index <= this.m_mergeAt)
    {
        return {'set': this.m_nodeSet1, 'index': index};
    }
    else
    {
        var count = this.m_nodeSet2.getCount();
        var end = this.m_mergeAt + count;
        if (index > end)
        {
            // first set
            return {'set': this.m_nodeSet1, 'index': index - count};
        }   
        else
        {
            // second set
            return {'set': this.m_nodeSet2, 'index': index - (this.m_mergeAt+1)};
        }
    }
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Wraps around the NodeSet to provide additional metadata
 * @param {Object} nodeSet the node set to wrap
 * @param {function(Object, Object)} metadataCallback callback to inject additional metadata information
 * @param {Object=} range the requested range
 * @constructor
 * @export
 */
oj.NodeSetWrapper = function(nodeSet, metadataCallback, range)
{
    this.m_nodeSet = nodeSet;
    this.m_callback = metadataCallback;
    this.m_range = range;
};

/**
 * Gets the parent
 * @return {Object} the key of the parent.
 * @export
 */
oj.NodeSetWrapper.prototype.getParent = function()
{
    return this.m_nodeSet.getParent();
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.  
 * @export
 */
oj.NodeSetWrapper.prototype.getStart = function()
{
    // if the requested start is a subset of the result set, adjust
    // accordingly
    if (this.m_range != null)
    {
        return this.m_range['start'];
    }
    else
    {
        return this.m_nodeSet.getStart();
    }
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.NodeSetWrapper.prototype.getCount = function()
{
    var nodeStart, nodeCount;

    nodeStart = this.m_nodeSet.getStart();
    nodeCount = this.m_nodeSet.getCount();

    // if the requested start is a subset of the NodeSet, adjust
    // accordingly
    if (this.m_range != null)
    {
        if (this.m_range['start'] > nodeStart)
        {
            nodeCount = Math.min(0, nodeCount - (this.m_range['start'] - nodeStart));
        }
        else if (this.m_range['start'] < nodeStart)
        {
            // this is an invalid NodeSet, so just return 0
            nodeCount = 0;
        }
    }

    return nodeCount;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.
 * @export
 */
oj.NodeSetWrapper.prototype.getData = function(index)
{
    return this.m_nodeSet.getData(index);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) state - state of the node, valid values are 'expanded', 'collapsed', 'leaf'. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.NodeSetWrapper.prototype.getMetadata = function(index)
{
    var metadata, rowKey;

    metadata = this.m_nodeSet.getMetadata(index);
    metadata['index'] = index;
    metadata['parentKey'] = this.getParent();
    rowKey = metadata['key'];

    // inject additional metadata
    this.m_callback.call(null, rowKey, metadata);

    return metadata;
};

/**
 * Gets the node set child of the specified index.
 * @param {number} index the index of the node/row in which we want to retrieve the child node set
 * @return {Object|null} the child node set representing the child tree data.
 * @export
 */
oj.NodeSetWrapper.prototype.getChildNodeSet = function(index) 
{
    var result;
    if (this.m_nodeSet.getChildNodeSet)
    {
        result = this.m_nodeSet.getChildNodeSet(index);
        if (result != null)
        {
            // wraps the child nodeset too
            return new oj.NodeSetWrapper(result, this.m_callback);
        }
    }
    return null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * A JsonNodeSet represents a collection of nodes.  The JsonNodeSet is an object returned by the success callback
 * of the fetchChildren method on TreeDataSource.  
 * @constructor
 * @export
 */
oj.JsonNodeSet = function(startNode, endNode, data, currKey, depth)
{
    // assert startNode/endNode are number
    oj.Assert.assertNumber(startNode, null);
    oj.Assert.assertNumber(endNode, null);

    this.m_depth = depth;
    this.m_key = currKey;
    this.m_startNode = startNode;
    this.m_endNode = endNode;
    this.m_nodes = data;
};

/**
 * Gets the parent key for this result set.  
 * @return {Object} the parent key for this result set. 
 * @export
 */
oj.JsonNodeSet.prototype.getParent = function()
{
    return this.m_key;
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.
 * @export	
 */
oj.JsonNodeSet.prototype.getStart = function()
{
    return this.m_startNode;
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.
 * @export	
 */
oj.JsonNodeSet.prototype.getCount = function()
{
    return Math.max(0, this.m_endNode - this.m_startNode);
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.  oj.RowData should be returned for data that represents a row
 *         with a number of columns.
 * @export
 */
oj.JsonNodeSet.prototype.getData = function(index)
{
    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    if (this.m_nodes[index])
        return this.m_nodes[index].attr;
    else
        return null;
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) leaf - boolean, true if it's a leaf, false otherwise. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.JsonNodeSet.prototype.getMetadata = function(index)
{
    var metadata = [];

    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    metadata["key"] = this.m_nodes[index].id ? this.m_nodes[index].id : this.m_nodes[index].attr.id;
    metadata["leaf"] = this.m_nodes[index].leaf;
    metadata["depth"] = this.m_nodes[index].depth;

    if(metadata["leaf"] == null)
    {
        if (this.m_nodes[index].children && this.m_nodes[index].children.length > 0)
        {
            metadata["leaf"] = false;
        }
        else
        {
            metadata["leaf"] = true;
        }
    }

    return metadata;
};

/**
 * Helper method to update the node's depth recursively with its children.
 * @param {Object} currChild the node to update.
 * @param {number} offset the difference between current and updated depth values.
 * @private
 */
oj.JsonNodeSet.prototype._updateDepth = function (currChild, offset)
{
    var i;

    offset++;
    currChild.depth = offset;

    if (currChild.children && currChild.children.length != 0)
    {
        for (i = 0; i < currChild.children.length; i++)
	{
            this._updateDepth(currChild.children[i], offset);
	}
    }
};

/**
 * Gets the node set child of the specified index.
 * @param {number} index the index of the node/row in which we want to retrieve the child node set
 * @return {oj.JsonNodeSet|null} the child node set representing the child tree data.
 * @export
 */
oj.JsonNodeSet.prototype.getChildNodeSet = function(index) {

    var results, key, depth, i;

    // make sure index are valid
    oj.Assert.assert(index <= this.m_endNode && index >= this.m_startNode);

    // adjust to relative index
    index = index - this.m_startNode;

    depth = this.m_nodes[index].depth;
    results = this.m_nodes[index].children;
    if(results.length == 0)
    {
        return null;
    }
    key = this.m_nodes[index].id ? this.m_nodes[index].id : this.m_nodes[index].attr.id;
    for(i = 0; i < results.length; i++)
    {
        this._updateDepth(results[i], depth);
    }

    return new oj.JsonNodeSet(0, results.length, results, key, 0);
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Flattens a hierarchical node set, which can happen in node set returned from
 * fetchDescendants call.
 * @param {Object} nodeSet the node set to flatten
 * @param {number=} actualStart in the fetch descendant case the result set would
 *        be a subset of the node set.  This param gives the exact start index in the
 *        wrapped node set where the result should start.
 * @constructor
 * @export
 */
oj.FlattenedNodeSet = function(nodeSet, actualStart)
{
    this.m_nodeSet = nodeSet;
    this.m_start = actualStart;
};

/**
 * Gets the parent
 * @return {Object} the key of the parent.
 * @export
 */
oj.FlattenedNodeSet.prototype.getParent = function()
{
    return this.m_nodeSet.getParent();
};

/**
 * Gets the start index of the result set.  
 * @return {number} the start index of the result set.  
 * @export
 */
oj.FlattenedNodeSet.prototype.getStart = function()
{
    // if explicit start index is specified, use it, otherwise
    // delegate to wrapped node set
    if (this.m_start != undefined)
    {
        return this.m_start;
    }
    else
    {
        return this.m_nodeSet.getStart();
    }
};

/**
 * Gets the actual count of the result set.  
 * @return {number} the actual count of the result set.  
 * @export
 */
oj.FlattenedNodeSet.prototype.getCount = function()
{
    // see if it's calculated already
    if (this.m_count === undefined)
    {
        this.m_count = this._getCount(this.m_nodeSet, 0);

        // if explicit start is specified (subset), need to take that into
        // account when calculating total count
        if (this.m_start != undefined)
        {
            this.m_count = this.m_count - this.m_start;
        }
    }

    return this.m_count;
};

/**
 * Recursive function to calculate the total number of nodes in the node set.
 * @param {Object} nodeSet the node set to calculate count
 * @param {number} total the total number of nodes so far 
 * @return {number} the total number of nodes
 * @private
 */
oj.FlattenedNodeSet.prototype._getCount = function(nodeSet, total)
{
    var start, count, i, child;

    start = nodeSet.getStart();
    count = nodeSet.getCount();
    total = total + count;

    // if there's child node set
    if (nodeSet.getChildNodeSet)
    {
        for (i=0; i<count; i++)
        {
            child = nodeSet.getChildNodeSet(i+start);
            if (child != null)
                total = this._getCount(child, total); 
        }
    }

    return total;
};

/**
 * Gets the data of the specified index.  An error is throw when 1) the range is not yet available and
 * 2) the index specified is out of bounds. 
 * @param {number} index the index of the node/row in which we want to retrieve the data from.  
 * @return {Object} the data for the specified index.
 * @export
 */
oj.FlattenedNodeSet.prototype.getData = function(index)
{
    return this._getDataOrMetadata(this.m_nodeSet, index, {'index': this.m_nodeSet.getStart()}, this._getData);
};

/**
 * Gets the metadata of the specified index.  An error is throw when 1) the range is not yet available and 
 * 2) the index specified is out of bounds. 
 * The metadata that the data source must return are:
 *  1) key - Object, the key of the node/row.
 *  2) state - state of the node, valid values are 'expanded', 'collapsed', 'leaf'. 
 *  3) depth - number, the depth of the node/row. 
 * @param {number} index the index of the node/row in which we want to retrieve the metadata from.  
 * @return {Object} the metadata object for the specific index.
 * @export
 */
oj.FlattenedNodeSet.prototype.getMetadata = function(index)
{
    return this._getDataOrMetadata(this.m_nodeSet, index, {'index': this.m_nodeSet.getStart()}, this._getMetadata);
};

/**
 * Callback function to retrieve metadata of specified index in node set
 * @param {Object} nodeSet the node set to retrieve metadata from
 * @param {number} index the index to retrieve metadata from
 * @return {Object} the metadata
 * @private
 */
oj.FlattenedNodeSet.prototype._getMetadata = function(nodeSet, index)
{
    return nodeSet.getMetadata(index);
};

/**
 * Callback function to retrieve data of specified index in node set
 * @param {Object} nodeSet the node set to retrieve data from
 * @param {number} index the index to retrieve data from
 * @return {Object} the data
 * @private
 */
oj.FlattenedNodeSet.prototype._getData = function(nodeSet, index)
{
    return nodeSet.getData(index);
};

/**
 * Retrieve data or metadata (depending on callback function) from the node set
 * @param {Object} nodeSet the node set to retrieve data from
 * @param {number} index the index to retrieve data from
 * @param {Object} current contains the current index keep track by the method
 * @param {function(Object, number)} func the callback function to retrieve data or metadata
 * @return {Object} the data or metadata
 * @private
 */
oj.FlattenedNodeSet.prototype._getDataOrMetadata = function(nodeSet, index, current, func)
{
    var start, count, i, currIndex, child, result;

    // walk the node set recursively until we found the index
    start = nodeSet.getStart();
    count = nodeSet.getCount();
    for (i=0; i<count; i++)
    {
        currIndex = current['index'];
        // found the index
        if (currIndex === index)
            return func.call(this, nodeSet, i+start);

        current['index'] = currIndex+1;
        // if there's child node set
        if (nodeSet.getChildNodeSet)
        {
            child = nodeSet.getChildNodeSet(i+start);
            if (child != null)
            {
                result = this._getDataOrMetadata(child, index, current, func); 
                if (result != null)
                    return result;
            }
        }
    }       

    return null;
};

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * The base class for DataGridDataSource.  
 * @export
 * @extends oj.DataSource
 * @constructor
 */
oj.DataGridDataSource = function(data)
{
    // oj.DataSource would calls Init
    oj.DataGridDataSource.superclass.constructor.call(this, data);
};

// Subclass DataGridDataSource to DataSource
oj.Object.createSubclass(oj.DataGridDataSource, oj.DataSource, "oj.DataGridDataSource");

/**
 * Returns the total number of rows or columns.  If the value return is not >= 0 then it is automatically assumed
 * that the total count is unknown.
 * @param {string} axis the axis in which we inquire for the total count.  Valid values are "row" and "column".
 * @return {number} the total number of rows/columns.
 * @export
 */
oj.DataGridDataSource.prototype.getCount = function(axis)
{
    return 0;
};

/**
 * Returns whether the total count returned in getCount function is an actual or an estimate.
 * @param {string} axis the axis in which we inquire whether the total count is an estimate.  Valid values are 
 *        "row" and "column".
 * @return {string} "exact" if the count returned in getCount function is the actual count, "estimate" if the 
 *         count returned in getCount function is an estimate.  The default value is "exact".
 * @export
 */
oj.DataGridDataSource.prototype.getCountPrecision = function(axis)
{
    return "exact";
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
oj.DataGridDataSource.prototype.fetchHeaders = function(headerRange, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Fetch a range of cells from the data source.
 * @param {Array.<Object>} cellRange Information about the cell range.  A cell range is defined by an array 
 *        of range info for each axis, where each range contains three properties: axis, start, count.
 * @param {string} cellRange.axis the axis associated with this range where cells are fetched.  Valid 
 *        values are "row" and "column".
 * @param {number} cellRange.start the start index of the range for this axis in which the cells are fetched.
 * @param {number} cellRange.count the size of the range for this axis in which the cells are fetched. 
 * @param {Object} callbacks the callbacks to be invoke when fetch cells operation is completed.  The valid callback
 *        types are "success" and "error".
 * @param {function(oj.CellSet)} callbacks.success the callback to invoke when fetch cells completed successfully.
 * @param {function({status: Object})} callbacks.error the callback to invoke when fetch cells failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" keys.
 * @export
 */
oj.DataGridDataSource.prototype.fetchCells = function(cellRange, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Returns the keys based on the indexes. 
 * @param {Object} indexes the index for each axis
 * @param {Object} indexes.row the index for the row axis
 * @param {Object} indexes.column the index for the column axis
 * @return {Object} a Promise object which when resolved returns an object containing the keys for each axis
 * @export
 */
oj.DataGridDataSource.prototype.keys = function(indexes)
{
    oj.Assert.failedInAbstractFunction();
    return null;
};

/**
 * Returns the row and column index based on the keys.
 * @param {Object} keys the key for each axis
 * @param {Object} keys.row the key for the row axis
 * @param {Object} keys.column the key for the column axis
 * @return {Object} a Promise object which when resolved returns an object containing the index for each axis
 * @export
 */
oj.DataGridDataSource.prototype.indexes = function(keys)
{
    oj.Assert.failedInAbstractFunction();
    return null;
};

/**
 * Performs a sort on the data source.
 * @param {Object} criteria the sort criteria.  Specifies null to reset sort state.
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
oj.DataGridDataSource.prototype.sort = function(criteria, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Moves a row from one location to another.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after" 
 * @param {function()} callbacks.success the callback to invoke when the move completed successfully.  
 * @param {function({status: Object})} callbacks.error the callback to invoke when move failed.
 * @param {Object=} callbackObjects the object in which the callback function is invoked on.  This is optional.  
 *        You can specify the callback object for each callbacks using the "success" and "error" properties.
 * @export
 */ 
oj.DataGridDataSource.prototype.move = function(rowToMove, referenceRow, position, callbacks, callbackObjects)
{
    oj.Assert.failedInAbstractFunction();
};

/**
 * Checks whether a move operation is valid.
 * @param {Object} rowToMove the key of the row to move
 * @param {Object} referenceRow the key of the reference row which combined with position are used to determine 
 *        the destination of where the row should moved to.
 * @param {string} position The position of the moved row relative to the reference row.  
 *        Valid values are: "before", "after".
 * @return {string} returns "valid" if the move is valid, "invalid" otherwise.
 * @export
 */ 
oj.DataGridDataSource.prototype.moveOK = function(rowToMove, referenceRow, position)
{
    return "valid";
};

/**
 * Determines whether this DataGridDataSource supports certain feature.
 * @param {string} feature the feature in which its capabilities is inquired.  Currently the only valid feature is "sort".
 * @return {string|null} the name of the feature.  For "sort", the valid return values are: "full", "none", "row", "column".  
 *         For "move", the valid return values are: "row", "none".  
 *         Returns null if the feature is not recognized.
 * @export
 */
oj.DataGridDataSource.prototype.getCapability = function(feature)
{
    return null;
};
});
