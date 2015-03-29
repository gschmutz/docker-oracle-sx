define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * This class contains all utility methods used by the Grid.
 * @param {Object} dataGrid the dataGrid using the utils
 * @constructor
 */
var DvtDataGridUtils = function(dataGrid)
{
    this.scrollbarSize = -1;
    this.dataGrid = dataGrid;

    var userAgent = (navigator && navigator.userAgent) ? navigator.userAgent.toLowerCase() : null;
    
    this.os = this._determineOS(userAgent);
    this.platform = this._determinePlatform(userAgent);
};

// Platform Constants
DvtDataGridUtils.IE_PLATFORM = "ie";
DvtDataGridUtils.GECKO_PLATFORM = "gecko";
DvtDataGridUtils.WEBKIT_PLATFORM = "webkit";
DvtDataGridUtils.UNKNOWN_PLATFORM = "unknown";

// OS Constants
DvtDataGridUtils.WINDOWS_OS = "Windows";
DvtDataGridUtils.SOLARIS_OS = "Solaris";
DvtDataGridUtils.MAC_OS = "Mac";
DvtDataGridUtils.UNKNOWN_OS = "Unknown";

// @internal
DvtDataGridUtils.prototype.calculateScrollbarSize = function()
{
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width/height
    this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV 
    document.body.removeChild(scrollDiv);
};

/**
 * Gets the size of the native scrollbar
 */
DvtDataGridUtils.prototype.getScrollbarSize = function()
{
    if (this.scrollbarSize == -1)
    {
        this.calculateScrollbarSize();
    }
    return this.scrollbarSize;
};

/**
 * Determine if the current agent is touch device
 */
DvtDataGridUtils.prototype.isTouchDevice = function()
{
    if (this.isTouch == undefined)
    {
        var agentName = navigator.userAgent.toLowerCase();
        if (agentName.indexOf("mobile") != -1 || agentName.indexOf("android") != -1)
        {
            this.isTouch = true;
        }
        else
        {
            this.isTouch = false;
        }
    }
    return this.isTouch;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Adds a CSS className to the dom node if it doesn't already exist in the classNames list and
 * returns <code>true</code> if the class name was added.
 * @param {HTMLElement|null} domElement DOM Element to add style class name to
 * @param {string|null} className Name of style class to add
 * @return {boolean|null} <code>true</code> if the style class was added
 */
DvtDataGridUtils.prototype.addCSSClassName = function(domElement, className)
{
    var added, currentClassName, classNameIndex, newClassName;
    added = false;

    if (className != null && domElement != null)
    {
        currentClassName = domElement.className;

        // get the current location of the className to add in the classNames list
        classNameIndex = DvtDataGridUtils._getCSSClassNameIndex(currentClassName, className);

        // the className doesn't exist so add it
        if (classNameIndex == -1)
        {
            newClassName = currentClassName
                    ? className + " " + currentClassName
                    : className;

            domElement.className = newClassName;

            added = true;
        }
    }

    return added;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Removes a CSS className to the dom node if it existd in the classNames list and
 * returns <code>true</code> if the class name was removed.
 * @param {HTMLElement|null} domElement DOM Element to remove style class name from
 * @param {string|null} className Name of style class to remove
 * @return {boolean|null} <code>true</code> if the style class was removed
 */
DvtDataGridUtils.prototype.removeCSSClassName = function(domElement, className)
{
    var removed, currentClassName, classNameIndex, classNameEndIndex, beforestring, afterstring, newClassName;
    removed = false;

    if (className != null && domElement != null)
    {
        currentClassName = domElement.className;

        classNameIndex = DvtDataGridUtils._getCSSClassNameIndex(currentClassName, className);

        // only need to do work if CSS class name is present
        if (classNameIndex != -1)
        {
            classNameEndIndex = classNameIndex + className.length;

            // the new classNames string is the string before our className and leading whitespace plus
            // the string after our className and trailing whitespace
            beforestring = (classNameIndex == 0)
                    ? null
                    : currentClassName.substring(0, classNameIndex);
            afterstring = (classNameEndIndex == currentClassName.length)
                    ? null
                    : currentClassName.substring(classNameEndIndex + 1); // skip space

            if (beforestring == null)
            {
                if (afterstring == null)
                {
                    newClassName = "";
                }
                else
                {
                    newClassName = afterstring;
                }
            }
            else
            {
                if (afterstring == null)
                {
                    newClassName = beforestring;
                }
                else
                {
                    newClassName = beforestring + afterstring;
                }
            }

            domElement.className = newClassName;

            removed = true;
        }
    }

    return removed;
};

/**
 * @param {HTMLElement|Element|EventTarget|null} domElement DOM Element to check for the style <code>className</code>
 * @param {string} className the CSS className to check for
 * @return {boolean} <code>true</code> if the className is in the element's list of classes
 */
DvtDataGridUtils.prototype.containsCSSClassName = function(domElement, className)
{
    if (className != null && domElement != null)
    {
        return DvtDataGridUtils._getCSSClassNameIndex(domElement.className, className) != -1;
    }
    return false;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Returns the index at which <code>className</code> appears within <code>currentClassName</code>
 * with either a space or the beginning or end of <code>currentClassName</code> on either side.
 * This function optimizes the runtime speed by not creating objects in most cases and assuming
 * 1) It is OK to only check for spaces as whitespace characters
 * 2) It is rare for the searched className to be a substring of another className, therefore
 *    if we get a hit on indexOf, we have almost certainly found our className
 * 3) It is even rarer for the searched className to be a substring of more than one className,
 *    therefore, repeating the search from the end of the string should almost always either return
 *    our className or the original search hit from indexOf
 * @param {string} currentClassName Space-separated class name string to search
 * @param {string} className string to search for within currentClassName
 * @return {number} index of className in currentClassName, or -1 if it doesn't exist
 */
DvtDataGridUtils._getCSSClassNameIndex = function(currentClassName, className)
{
    var classNameLength, currentClassNameLength, nameIndex, hasStart, endIndex, hasEnd, lastNameIndex;
    // if no current class
    // SVG element className property is not of type string
    if (!currentClassName || !currentClassName.indexOf)
    {
        return -1;
    }

    // if the strings are equivalent, then the start index is the beginning of the string
    if (className === currentClassName)
    {
        return 0;
    }

    classNameLength = className.length;
    currentClassNameLength = currentClassName.length;

    // check if our substring exists in the string at all
    nameIndex = currentClassName.indexOf(className);

    // if our substring exists then our class exists if either:
    // 1) It is at the beginning of the classNames string and has a following space
    // 2) It is at the end of the classNames string and has a leading space
    // 3) It has a space on either side
    if (nameIndex >= 0)
    {
        hasStart = (nameIndex == 0) || (currentClassName.charAt(nameIndex - 1) == " ");
        endIndex = nameIndex + classNameLength;
        hasEnd = (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

        //one of the three condition above has been met so our string is in the parent string
        if (hasStart && hasEnd)
        {
            return nameIndex;
        }

        // our substring exists in the parent string but didn't meet the above conditions,  Were
        // going to be lazy and retest, searchig for our substring from the back of the classNames
        // string
        lastNameIndex = currentClassName.lastIndexOf(className);

        // if we got the same index as the search from the beginning then we aren't in here
        if (lastNameIndex != nameIndex)
        {
            // recheck the three match cases
            hasStart = currentClassName.charAt(lastNameIndex - 1);
            endIndex = lastNameIndex + classNameLength;
            hasEnd = (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

            if (hasStart && hasEnd)
            {
                return lastNameIndex;
            }

            // this should only happen if the searched for className is a substring of more
            // than one className in the classNames list, so it is OK for this to be slow.  We
            // also know at this point that we definitely didn't get a match at either the very
            // beginning or very end of the classNames string, so we can safely append spaces
            // at either end
            return currentClassName.indexOf(" " + className + " ");

        }
    }


    // no match
    return -1;


};

/**
 * Returns either the ctrl key or the command key in Mac OS
 * @param {Event} event
 */
DvtDataGridUtils.prototype.ctrlEquivalent = function(event)
{
    var isMac = (this.os === DvtDataGridUtils.MAC_OS);
    return (isMac ? event.metaKey : event.ctrlKey);
};

/**
 * Gets the scroll left of an element.  This method abstracts the inconsistency of scrollLeft
 * behavior in RTL mode between browsers.
 * @param {Element} element the dom element to retrieve scroll left
 * @private
 */
DvtDataGridUtils.prototype.getElementScrollLeft = function(element)
{
    var width, elemWidth;
    if (this.dataGrid.getResources().isRTLMode())
    {
        // see mozilla Bug 383026 scrollLeft property now returns negative values in rtl environment
        if (this.platform == DvtDataGridUtils.GECKO_PLATFORM || this.platform == DvtDataGridUtils.IE_PLATFORM)
        {
            return Math.abs(element['scrollLeft']);
        }
        else
        {
            // webkit browser
            width = this.dataGrid.getScrollableWidth();
            elemWidth = parseInt(element['style']['width'], 10);
            return Math.max(0, width - elemWidth - element['scrollLeft']);
        }
    }

    return element['scrollLeft'];

};

/**
 * Sets the scroll left of an element.  This method abstracts the inconsistency of scrollLeft
 * behavior in RTL mode between browsers.
 * @param {Element} element the dom element to set scroll left
 * @param {Number} scrollLeft the scroll left of the dom element
 * @private
 */
DvtDataGridUtils.prototype.setElementScrollLeft = function(element, scrollLeft)
{
    var width, elemWidth, newPos;
    if (this.dataGrid.getResources().isRTLMode())
    {
        if (this.platform === DvtDataGridUtils.GECKO_PLATFORM)
        {
            // see mozilla Bug 383026 scrollLeft property now returns negative values in rtl environment
            element['scrollLeft'] = -scrollLeft;
        }
        else if (this.platform == DvtDataGridUtils.IE_PLATFORM)
        {
            element['scrollLeft'] = scrollLeft;            
        }
        else
        {
            // webkit based browsers
            width = this.dataGrid.getScrollableWidth();
            elemWidth = parseInt(element['style']['width'], 10);
            newPos = width - elemWidth - scrollLeft;
            element['scrollLeft'] = newPos;
        }
    }
    else
    {
        element['scrollLeft'] = scrollLeft;
    }
};

/**
 * Determines the operating system. This value should be cached to prevent costly calculations. This value should be 
 * treated as a guess, as this code is copied from AdfAgent.guessOS().
 * @param {string} userAgent The lowercase user agent string, if available.
 * @return {string} The DvtDataGridUtils.***_OS constant describing the platform.
 * @private
 */
DvtDataGridUtils.prototype._determineOS = function(userAgent)
{  
    if(userAgent) 
    {
        if (userAgent.indexOf('win')!= -1)
        {
            return DvtDataGridUtils.WINDOWS_OS;
        }
        else if (userAgent.indexOf('mac') != -1)
        {
            return DvtDataGridUtils.MAC_OS;
        }
        else if (userAgent.indexOf('sunos') != -1)
        {
            return DvtDataGridUtils.SOLARIS_OS;
        }
    }
  
    return DvtDataGridUtils.UNKNOWN_OS;
};

/**
 * Determines the name of the platform. This value should be cached to prevent costly calculations.
 * Copied from DvtAgent (which itself is copied from AdfAgent)
 * @param {string} userAgent The lowercase user agent string, if available.
 * @return {string} The DvtDataGridUtils.***_PLATFORM constant describing the platform.
 * @private
 */
DvtDataGridUtils.prototype._determinePlatform = function(userAgent)
{  
    if (userAgent) 
    { 
        if(userAgent.indexOf("opera") != -1) // check opera first, since it mimics other browsers
        {
            return DvtDataGridUtils.UNKNOWN_PLATFORM;
        }
        else if (userAgent.indexOf("trident") != -1 || userAgent.indexOf("msie")!= -1)
        {
            return DvtDataGridUtils.IE_PLATFORM;
        }
        else if ((userAgent.indexOf("applewebkit") != -1) || (userAgent.indexOf("safari") != -1))
        {
            return DvtDataGridUtils.WEBKIT_PLATFORM;
        }
        else if(userAgent.indexOf("gecko/") != -1)
        {
            return DvtDataGridUtils.GECKO_PLATFORM;
        }
    }

    return DvtDataGridUtils.UNKNOWN_PLATFORM;
};

/**
 * Determines the what mousewheel event the browser recognizes
 * If firefox then DOMMouseScroll else mousewheel
 * @return {string} The event which the browser uses to track mosuewheel events
 * @private
 */
DvtDataGridUtils.prototype.getMousewheelEvent = function()
{  
    return this.platform === DvtDataGridUtils.GECKO_PLATFORM ? "DOMMouseScroll" : "mousewheel";
};

/**
 * Determines what mousewheel event the browser recognizes
 * using click-wheel on mouse, always vertical in this case
 * FF 3.X uses event.detail which is the number of clicks
 * 40 mimics what IE 10 and Chrome currently do in scrolling
 * @param {Event} event the mousewheel scroll event
 * @return {Object} change in X and Y if applicable through a mousewheel event, properties are deltaX, deltaY
 * @private
 */
DvtDataGridUtils.prototype.getMousewheelScrollDelta = function(event)
{  
    var deltaX, deltaY;
    //Mac touchpad case
    if (event.wheelDeltaX)
    {
        deltaX = event.wheelDeltaX;
        deltaY = event.wheelDeltaY;
    }
    else
    {
        deltaX = 0;
        deltaY = event.detail ? event.detail*(-40) : event.wheelDelta;
    }

    return {"deltaX":deltaX, "deltaY":deltaY};
};
/**
 * The DvtDataGridOptions object provides convenient methods to access the options passed to the Grid.
 * @constructor
 * @param {Object=} options -options set on the grid.
 */
var DvtDataGridOptions = function(options)
{
    this.options = options;
};

/**
 * Helper method to extract properties
 * @param {string=} arg1 - key to extract in object
 * @param {string=} arg2 - key to extract in the value of object[arg1]
 * @param {string=} arg3 - key to extract in the value of object[arg1][arg2]
 * @return {string|number|Object|boolean|null}
 */
DvtDataGridOptions.prototype.extract = function(arg1, arg2, arg3)
{
    var val1, val2;
    if (arg1 != null)
    {
        val1 = this.options[arg1];
        if (arg2 != null && val1 != null)
        {
            val2 = val1[arg2]; 
            if (arg3 != null && val2 != null)
            {
                return val2[arg3];
            }
            return val2;
        }
        return val1;
    }
    return null;
};

/**
 * Evaluate the a function, if it is a constant return it
 * @param {string|number|Object|boolean|null} value - function or string of the raw property
 * @param {Object} obj - object to pass into value if it is a function 
 * @return {string|number|Object|boolean|null} the evaluated value(obj) if value a function, else return value
 */
DvtDataGridOptions.prototype.evaluate = function(value, obj)
{
    if (typeof value == 'function')
    {
        return value.call(this, obj);
    }
    return value;
};

/**
 * Get the property that was set on the option
 * @param {string} prop - the property to get from options
 * @param {string} axis - subobject to get row/column/cell
 * @return {string|number|Object|boolean|null} the raw value of the property
 */
DvtDataGridOptions.prototype.getRawProperty = function(prop, axis)
{
    var arg1, arg2, arg3;
    if (axis == "row" || axis == "column")
    {
        arg1 = "header";
        arg2 = axis;
        arg3 = prop;
    }
    else if (axis == "cell")
    {
        arg1 = "cell";
        arg2 = prop;
    }
    
    return this.extract(arg1, arg2, arg3);
};

/**
 * Get the evaluated property of the options
 * @param {string} prop - the property to get from options
 * @param {string} axis - subobject to get row/column/cell
 * @param {Object} obj - object to pass into property if it is a function 
 * @return {string|number|Object|boolean|null} the evaluated property
 */
DvtDataGridOptions.prototype.getProperty = function(prop, axis, obj)
{
    if (obj === undefined)
    {
        return this.extract(prop, axis);
    }
    else
    {
        return this.evaluate(this.getRawProperty(prop, axis), obj);
    }
};

/**
 * Get the null or default value if no value set
 * @param {string|number|Object|boolean|null} value - the value of the property
 * @param {boolean|null} defValue - the default value of the property
 * @return {string|number|Object|boolean|null} - value if not null, defValue if value is null, null if neither null
 */
DvtDataGridOptions.prototype.nullOrDefault = function(value, defValue)
{
    if (value != null)
    {
        return value;
    }
    if (defValue != null)
    {
        return defValue;
    }
    return null;
};

////////////////////////// Grid options /////////////////////////////////

/**
 * Get the row banding interval from the grid options
 * @return {string|number|Object|boolean} the row banding interval
 */
DvtDataGridOptions.prototype.getRowBandingInterval = function()
{
    var bandingInterval = this.getProperty("bandingInterval", "row");
    if (bandingInterval != null)
    {
        return bandingInterval;
    }
    return 0;
};

/**
 * Get the column banding interval from the grid options
 * @return {string|number|Object|boolean} the column banding interval
*/
DvtDataGridOptions.prototype.getColumnBandingInterval = function()
{
    var bandingInterval = this.getProperty("bandingInterval", "column");
    if (bandingInterval != null)
    {
        return bandingInterval;
    }
    return 0;
};

/**
 * Get the empty text from the grid options
 * @return {string|number|Object|boolean|null} the empty text
 */
DvtDataGridOptions.prototype.getEmptyText = function()
{
    return this.getProperty("emptyText");
};

/**
 * Get the horizontal gridlines from the grid options
 * @return {string|number|Object|boolean|null} horizontal gridlines visible/hidden
 */
DvtDataGridOptions.prototype.getHorizontalGridlines = function()
{
    var horizontalGridlines;
    horizontalGridlines = this.extract("gridlines", "horizontal");
    if (horizontalGridlines != null )
    {
        return horizontalGridlines;
    }
    return "visible";
};

/**
 * Get the vertical gridlines from the grid options
 * @return {string|number|Object|boolean|null} vertical gridlines visible/hidden
 */
DvtDataGridOptions.prototype.getVerticalGridlines = function()
{
    var verticalGridlines;
    verticalGridlines = this.extract("gridlines", "vertical");
    if (verticalGridlines != null )
    {
        return verticalGridlines;
    }
    return "visible";
};

/**
 * Get the inital row scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the row to show
 */
DvtDataGridOptions.prototype.getRowScrollPosition = function()
{
    var rowScrollPosition;
    rowScrollPosition = this.extract("scrollPosition", "key", "row");
    if (rowScrollPosition != null)
    {
        return rowScrollPosition;
    }
    return this.extract("scrollPosition", "index", "row");
};

/**
 * Get the inital column scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the column to show
 */
DvtDataGridOptions.prototype.getColumnScrollPosition = function()
{
    var columnScrollPosition;
    columnScrollPosition = this.extract("scrollPosition", "key", "column");
    if (columnScrollPosition != null)
    {
        return columnScrollPosition;
    }
    return this.extract("scrollPosition", "index", "column");
};

/**
 * Get the inital column scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the column to show
 */
DvtDataGridOptions.prototype.getScrollPositionMode = function()
{
    var scrollPosition;
    scrollPosition = this.getProperty("scrollPosition");
    if (scrollPosition == undefined)
    {
        return null;
    }
    if (scrollPosition['key'] != undefined)
    {
        return 'key';
    }
    if (scrollPosition['index'] != undefined)
    {
        return 'index';
    }    
    return null;
};

/**
 * Get the selection mode cardinality (none, single multiple)
 * @return {string|number|Object|boolean|null} none/single/multiple
 */
DvtDataGridOptions.prototype.getSelectionCardinality = function()
{
    var mode, key, val;
    mode = this.getProperty("selectionMode");
    if (mode == undefined)
    {
        return "none";
    }

    key = this.getSelectionMode();
    val = mode[key];
    if (val != null)
    {
        return val;
    }
    return "none";
};

/**
 * Get the selection mode (row,cell)
 * @return {string|number|Object|boolean|null} row/cell
 */
DvtDataGridOptions.prototype.getSelectionMode = function()
{
    var mode, cardinality;
    mode = this.getProperty("selectionMode");
    if (mode == undefined)
    {
        return "cell";
    }

    cardinality = mode['row'];
    if (cardinality != null && cardinality != "none")
    {
        return "row";
    }
    return "cell";
};

/**
 * Get the current selection from the grid options
 * @return {Array|null} the current selection from options
 */
DvtDataGridOptions.prototype.getSelection = function()
{
    return this.getProperty("selection");
};

////////////////////////// Grid header/cell options /////////////////////////////////
/**
 * Is the given header sortable
 * @param {string} axis - axis to check if sort enabled
 * @param {Object} obj - header context
 * @return {string|number|Object|boolean|null} default or null
 */
DvtDataGridOptions.prototype.isSortable = function(axis, obj)
{
    return this.nullOrDefault(this.getProperty("sortable", axis, obj), false);
};

/**
 * Is the given header resizable
 * @param {string} axis - axis to check if resizing enabled
 * @param {Object} obj - header context
 * @return {string|number|Object|boolean|null} enable, disable, or null
 */
DvtDataGridOptions.prototype.isResizable = function(axis, obj)
{
    // if no header context is specified, use null instead of undefined so that getProperty
    // will behave the way we want
    if (obj === undefined)
    {
        obj = null;
    }

    // if row header, ensure width does not return a function
    
    // if column header, ensure height does not return a function
    return this.nullOrDefault(this.getProperty("resizable", axis, obj), false);
};

/**
 * Gets the dnd rorderable option
 * @param {string} axis the axis to get the reorder property from
 * @return {string|number|Object|boolean|null} enable, disable, or null
 */
DvtDataGridOptions.prototype.isMoveable = function(axis)
{
    return this.nullOrDefault(this.extract("dnd", "reorder", axis), false);
};

/**
 * Get the inline style property on an object
 * @param {string} axis - axis to get style of
 * @param {Object} obj - context
 * @return {string|number|Object|boolean|null} inline style
 */
DvtDataGridOptions.prototype.getInlineStyle = function(axis, obj)
{
    return this.getProperty("style", axis, obj);
};

/**
 * Get the style class name property on an object
 * @param {string} axis - axis to get class name of
 * @param {Object} obj - context
 * @return {string|number|Object|boolean|null} class name
 */
DvtDataGridOptions.prototype.getStyleClass = function(axis, obj)
{
    return this.getProperty("className", axis, obj);
};

/**
 * Get the renderer of an axis
 * @param {string} axis - axis to get style of
 * @return {string|number|Object|boolean|null} axis renderer
 */
DvtDataGridOptions.prototype.getRenderer = function(axis)
{
    // return type expected to be function, so just return without further
    // evaluation
    return this.getRawProperty("renderer", axis);
};

/**
 * Get the scroll mode
 * @return {string} the scroll mode, which can be either "scroll", "loadMoreOnScroll", "auto".
 */
DvtDataGridOptions.prototype.getScrollPolicy = function()
{
    var mode = this.getProperty("scrollPolicy");
    if (mode == null)
    {
        mode = "auto";
    }

    return mode;
};
/**
 * Class used to keep track of whcih elements have been resized, has an object 
 * containing two objects 'row' and 'column', which should have objects of 
 * index:{size}. this.sizes = {axis:{index:{size}}}
 * @constructor
 */
var DvtDataGridSizingManager = function()
{
    this.sizes = {'column':{}, 'row':{}};
};

/**
 * Set a size in the sizes object in the sizing manager
 * @param {string} axis - column/row
 * @param {number} headerKey - key of the element
 * @param {number} size - the size to put in the object
 */
DvtDataGridSizingManager.prototype.setSize = function(axis, headerKey, size)
{
    this.sizes[axis][headerKey] = size;
};

/**
 * Get a size from the sizing manager for a given axis and index, 
 * @param {string} axis - column/row
 * @param {number} headerKey - key of the element
 * @return {number|null} a size if it exists
 */
DvtDataGridSizingManager.prototype.getSize = function(axis, headerKey)
{
    if (this.sizes[axis].hasOwnProperty(headerKey)){
        return this.sizes[axis][headerKey];
    }
    return null;
};

/**
 * Empty the sizing manager sizes
 */
DvtDataGridSizingManager.prototype.clear = function()
{
    this.sizes = {'column':{}, 'row':{}};
};
/**
 * Creates a new DataGrid
 * @constructor
 * @export
 */
var DvtDataGrid = function()
{
    this.MAX_COLUMN_THRESHOLD = 20;
    this.MAX_ROW_THRESHOLD = 30;

    this.m_utils = new DvtDataGridUtils(this);

    this.m_discontiguousSelection = false;

    this.m_sizingManager = new DvtDataGridSizingManager();

    this.m_rowHeaderWidth = null;
    this.m_colHeaderHeight = null;

    // a mapping of style class+inline style combo to a dimension
    // to reduce the need to do excessive offsetWidth/offsetHeight
    this.m_styleClassDimensionMap = {};

    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;
        
    // cached whether row/column count are unknown
    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;    
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;

    this.callbacks = {
    };
};

// constants for key codes
DvtDataGrid.DOWN_KEY = 40;
DvtDataGrid.UP_KEY = 38;
DvtDataGrid.LEFT_KEY = 37;
DvtDataGrid.RIGHT_KEY = 39;
DvtDataGrid.F10_KEY = 121;
DvtDataGrid.X_KEY = 88;
DvtDataGrid.V_KEY = 86;
DvtDataGrid.TAB_KEY = 9;
DvtDataGrid.HOME_KEY = 36;
DvtDataGrid.END_KEY = 35;
DvtDataGrid.PAGEUP_KEY = 33;
DvtDataGrid.PAGEDOWN_KEY = 34;
DvtDataGrid.NUM5_KEY = 53;

// constants for update animation
DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT = 1;
DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT = 2;
DvtDataGrid.UPDATE_ANIMATION_DURATION = 250;

// constants for expand/collapse animation
DvtDataGrid.EXPAND_ANIMATION_DURATION = 500; //vvc9
DvtDataGrid.COLLAPSE_ANIMATION_DURATION = 400;

// extra momentum for gesture
DvtDataGrid.TOUCHHOLD_MOMENTUM_FACTOR = 1.5;
DvtDataGrid.SWIPE_MOMENTUM_FACTOR = 3.5;
DvtDataGrid.MAX_OVERSCROLL_PIXEL = 50;

/**
 * Sets options on DataGrid
 * @export
 * @param {Object} options - the options to set on the data grid
 */
DvtDataGrid.prototype.SetOptions = function(options)
{
    this.m_options = new DvtDataGridOptions(options);
};

/**
 * Update options on DataGrid
 * @export
 * @param {Object} options - the options to set on the data grid
 */
DvtDataGrid.prototype.UpdateOptions = function(options) //vvc
{
    var candidate;
    
    //We should check each updated option (candidate) from the list of updated options (first loop)
    //against options already presented in the internal DvtDataGridOptions (this.m_options) object in
    //purpose to keep them in sync.
    for (candidate in options)
    {
        if(candidate in this.m_options['options'])
        {
            if(this.m_options['options'][candidate] != options[candidate])
            {
                this.m_options['options'][candidate] = options[candidate];
            }           
        }
    }
    //now update it
    for(candidate in options)
    {
        if(!this._updateDataGrid(candidate))
        {
            this.refresh(this.m_root);
            break;
        }
    }  
};

/**
 * Partial update for DataGrid 
 * @private
 * @param {string} option - the option to update the data grid based on
 * @return {boolean} true if redraw is not required otherwise return false
 */
DvtDataGrid.prototype._updateDataGrid = function(option) //vvc
{
    var obj;
    
    switch (option) 
    {
        case "bandingInterval":
            this._removeBanding();
            this.updateColumnBanding();
            this.updateRowBanding();
            break;
        case "gridlines":           
            this._updateGridlines();
            break;
        case "scrollPosition":
            this.setInitialScrollPosition();
            break;
        case "selectionMode":
            //Do nothing
            break;
	case "emptyText":
            //Do nothing
            break;
        case "header":
            obj = this.m_options['options']['header']; 
            this._updateHeaderOptions(obj);
            break;
        case "selection":
            obj = this.m_options.getSelection();
            this._updateSelection(obj);
            break;            
        default:
            return false;
    }
    return true;
};

/**
 * Update selection from option
 * @private
 * @param {Object} selection the selection from options
 */
DvtDataGrid.prototype._updateSelection = function(selection)
{
    // selection should not be null
    if (selection == null)
    {
        return;
    }

    // check whether selection is enabled
    if (this._isSelectionEnabled())
    {
        // clear existing selection
        this._clearSelection();
        // sets the new selection
        this.SetSelection(selection);
    }
    else
    {
         // selection is not enable, still need to clear the selection in options
         selection.length = 0;
    }
};

/**
 * Update header option
 * @private
 * @param {Object} obj - the obj is header object
 */
DvtDataGrid.prototype._updateHeaderOptions = function(obj) //vvc
{
    var colObj, opt, headers, element, key, refresh;
    
    //Process the sortable and the resizable options by traversing through
    //the header object: header -> column/row -> sortable or 
    //header -> column/row -> resizable -> width/heigh
    
    //for both sortable and resizable options 
    //it process the "enable/disable" values for all columns or
    //function for individual ones.
    
    //tested for columns only at this moment
    
    key = this.getResources().getMappedAttribute('key');
    refresh = false;
	
    for(element in obj)
    {
        if(element == "column" || element == "row")
        {
            if(refresh)
            {
		break;
            }
            if(element == "column")
            {
                if(this.m_colHeader)
                {
                    headers = this.m_colHeader['firstChild']['childNodes'];
                }
            }
            else
            {
                if(this.m_rowHeader)
                {
                    if(this.m_rowHeader['firstChild']['childElementCount'] > 1)
                    {
                        headers = this.m_rowHeader['firstChild']['childNodes'];
                    }
                }
            }
            
            if(headers)
            {
                colObj = obj[element];
                for(opt in colObj)
                {
                    //All redraw if option value is function
                    if(!this._processHeaders(headers, opt, colObj[opt]))
                    {
                        refresh = true;
                        break;
                    }
                }
            }
        }
    }
    if(refresh)
    {
        this.refresh(this.m_root);
    }
};

/**
 * Helper method to process header relaited options
 * @private
 * @param {array} headers - the array of the grid header objects
 * @param {string} opt - updated option
 * @param {string | function} value - the value of the updated option
 * @return {boolean} false if option value is function otherwise return true
 */
DvtDataGrid.prototype._processHeaders = function(headers, opt, value) //vvc
{
    var i, key, attribute, val;
    
    key = this.getResources().getMappedAttribute('key');
    attribute = this.getResources().getMappedAttribute(opt);
    val = value;
    
    if(value['width'])
    {
        val = value['width'];
    }
    else if(value['height'])
    {
        val = value['height'];
    }
    
    for(i=0; i<headers.length; i++)
    {
        if(val == 'disable')
        {
            headers[i].setAttribute(attribute, "false");
        }
        else if(val == 'enable')
        {
            headers[i].setAttribute(attribute, "true");
        }
        else // if value is function
        {
            return false;
        }
    }
    return true;
};
/**
 * Update gridlines
 * @private
 */
DvtDataGrid.prototype._updateGridlines = function() //vvc
{
    var i, j, row, rowCount, horizontalGridlines, verticalGridlines, rows, dir;
    
    horizontalGridlines = this.m_options.getHorizontalGridlines();
    verticalGridlines = this.m_options.getVerticalGridlines();
    rows = this.m_databody['firstChild']['childNodes'];
    rowCount = rows.length;
    dir = this.getResources().isRTLMode() ? "right" : "left";
    for (i = 1; i < rowCount; i += 1)
    {
        row = rows[i]['childNodes'];
        for (j=0; j < row.length; j+=1)
        {
            if (verticalGridlines === 'hidden' || (this._isLastColumn(j + this.m_startCol) && this.getRowHeaderWidth()+this.getElementDir(row[j], dir)+this.calculateColumnWidth(row[j]) >= this.getWidth()))
            {
                if (dir === 'left')
                {
                    row[j]['style']['borderRightStyle'] = 'none';
                }
                else
                {
                    row[j]['style']['borderLeftStyle'] = 'none';
                }
            }
            else 
            {
                if (dir === 'left')
                {
                    row[j]['style']['borderRightStyle'] = '';
                }
                else
                {
                    row[j]['style']['borderLeftStyle'] = '';
                }
            }
            if (horizontalGridlines === 'hidden'|| (this._isLastRow(i + this.m_startRow - 1) && this.getRowBottom(rows[i], null) >= this.getHeight()))
            {
                row[j]['style']['borderBottomStyle'] = 'none';
            }    
            else
            {
                row[j]['style']['borderBottomStyle'] = '';
            }
        }
    }
};

/**
 * Gets options on DataGrid
 * @return {Object} the options set on the data grid
 */
DvtDataGrid.prototype.GetOptions = function()
{
    if (this.m_options == null)
    {
        this.m_options = new DvtDataGridOptions();
    }

    return this.m_options;
};

/**
 * Sets resources on DataGrid
 * @export
 * @param {Object} resources - the resources to set on the data grid
 */
DvtDataGrid.prototype.SetResources = function(resources)
{
    this.m_resources = resources;
};

/**
 * Gets resources from DataGrid
 * @export
 * @return {Object} the resources set on the data grid
 */
DvtDataGrid.prototype.getResources = function()
{
    return this.m_resources;
};

/**
 * Gets start row index from DataGrid
 * @export
 * @return {number} the start row index
 */
DvtDataGrid.prototype.getStartRow = function()
{
    return this.m_startRow;
};

/**
 * Gets start row header index from DataGrid
 * @export
 * @return {number} the start row header index
 */
DvtDataGrid.prototype.getStartRowHeader = function()
{
    return this.m_startRowHeader;
};

/**
 * Gets start column index from DataGrid
 * @export
 * @return {number} the start column index
 */
DvtDataGrid.prototype.getStartColumn = function()
{
    return this.m_startCol;
};

/**
 * Gets start column header index from DataGrid
 * @export
 * @return {number} the start column header index
 */
DvtDataGrid.prototype.getStartColumnHeader = function()
{
    return this.m_startColHeader;
};

/**
 * Gets mapped style from the resources
 * @private
 * @param {string} key the key to get style on
 * @return {string} the style from the resources
 */
DvtDataGrid.prototype.getMappedStyle = function(key)
{
    return this.getResources().getMappedStyle(key);
};

/**
 * Sets the data source on DataGrid
 * @export
 * @param {Object} dataSource - the data source to set on the data grid
 */
DvtDataGrid.prototype.SetDataSource = function(dataSource)
{
    if (dataSource != null)
    {
        dataSource.on("change", this.handleModelEvent.bind(this), this);
        // if it's not flattened datasource, these will be ignored
        dataSource.on("expand", this.handleExpandEvent.bind(this), this);
        dataSource.on("collapse", this.handleCollapseEvent.bind(this), this);
    }
    this.m_dataSource = dataSource;
};

/**
 * Gets the data source from the DataGrid
 * @export
 * @return {Object} the data source set on the data grid
 */
DvtDataGrid.prototype.getDataSource = function()
{
    return this.m_dataSource;
};

/**
 * Get the indexes from the data source and call back to a function once they are available.
 * The callback should be a function(keys, indexes)
 * @param {Object} keys the keys to find the index of with properties row, column
 * @param {function} callback the callback to pass the keys back to 
 * @private
 */
DvtDataGrid.prototype._indexes = function(keys, callback)
{
    var self = this, indexes;
    indexes = this.getDataSource().indexes(keys);
    if (typeof indexes['then'] === 'function')
    {
        indexes.then(function(obj){
            callback.call(self, obj, keys);
        }, function()
        {
            callback.call(self,{'row':-1, 'column':-1}, keys);
        });
    }
    else
    {
        callback.call(self, indexes, keys);
    }   
};

/**
 * Get the keys from the data source and call back to a function once they are available.
 * The callback should be a function(indexes, keys)
 * @param {Object} indexes the indexes to find the keys of with properties row, column
 * @param {function} callback the callback to pass the indexes back to 
 * @private
 */
DvtDataGrid.prototype._keys = function(indexes, callback)
{
    var self = this, keys;    
    keys = this.getDataSource().keys(indexes);
    if (typeof keys['then'] === 'function')
    {                
        keys.then(function(obj){
            callback.call(self, obj, indexes);
        }, function()
        {
            callback.call(self,{'row':null, 'column':null}, indexes);
        });
    }
    else
    {
        callback.call(self, keys, indexes);
    }      
};

/**
 * Helper method to get keys from the DOM rather than the data source.
 * If the indexes do not exist in the DOM the key will be null for the row/column
 * @param {Object} indexes the indexes to find the keys of with properties row, column
 * @private
 * @return {Object} the keys in an object with row/column
 */
DvtDataGrid.prototype._getLocalKeys = function(indexes)
{
    var keys = {'row':null, 'column':null};
    
    if (indexes['row'] != null)
    {
        keys['row'] = this._getKey(this.m_databody['firstChild']['childNodes'][indexes['row'] - this.m_startRow + 1]);
    }
    
    if (indexes['column'] != null)
    {
        keys['column'] = this._getKey(this.m_colHeader['firstChild']['childNodes'][indexes['column'] - this.m_startColHeader]);  
    }
    return keys;
};

/**
 * Register a callback when creating the header context or cell context.
 * @param {function(Object)} callback the callback function to inject addition or modify
 *        properties in the context.
 * @export
 */
DvtDataGrid.prototype.SetCreateContextCallback = function(callback)
{
    this.m_createContextCallback = callback;
};

/**
 * Whether high watermark scrolling is used
 * @return {boolean} true if high watermark scrolling is used, false otherwise
 * @private
 */
DvtDataGrid.prototype._isHighWatermarkScrolling = function()
{
    return (this.m_options.getScrollPolicy() != "scroll");
};

/**
 * Destructor method that should be called when the widget is destroyed. Removes event 
 * listeners on the document.
 * @export
 */
DvtDataGrid.prototype.destroy = function()
{
    delete this.m_fetching;
    document.removeEventListener("mousemove", this.m_docMouseMoveListener, false);
    document.removeEventListener("mouseup", this.m_docMouseUpListener, false);
    // unregister all listeners
    if (this.m_dataSource != null)
    {
        this.m_dataSource.off("change", this.handleModelEvent);
        this.m_dataSource.off("expand", this.handleExpandEvent);
        this.m_dataSource.off("collapse", this.handleCollapseEvent);
    }
    
    if (this.m_root != null)
    {
        if (this.m_handleDatabodyKeyDown)
        {
            this.m_root.removeEventListener("keydown", this.m_handleDatabodyKeyDown, false);        
        }
    }
    
    delete this.m_styleClassDimensionMap;
    this.m_styleClassDimensionMap = {};
};

/**
 * Get the DataGrid root element
 * @return {Element} the root element
 */
DvtDataGrid.prototype.getRootElement = function()
{
    return this.m_root;
};

/**
 * Get the cached width of the root element. If not cached, sets the cached width.
 * @return {number} the cached width of the root element
 * @protected
 */
DvtDataGrid.prototype.getWidth = function()
{
    if (this.m_width == null)
    {
        //clientWidth since we use border box and care about the content of our root div
        this.m_width = this.getRootElement()['clientWidth'];
    }
    
    return this.m_width;
};

/**
 * Get the cached height of the root element. If not cached, sets the cached height.
 * @return {number} the cached height of the root element
 * @protected
 */
DvtDataGrid.prototype.getHeight = function()
{
    if (this.m_height == null)
    {
        //clientHeight since we use border box and care about the content of our root div        
        this.m_height = this.getRootElement()['clientHeight'];
    }

    return this.m_height;
};

/**
 * Gets the scrollable width of the grid.
 * @return {number} the scrollable width of the grid
 * @protected
 */
DvtDataGrid.prototype.getScrollableWidth = function()
{
    var scrollerContent = this.m_scroller['firstChild'];
    return this.getElementWidth(scrollerContent);
};

/**
 * Get the viewport width, which is defined as 1.5 the size of the width of Grid
 * @return {number} the viewport width
 */
DvtDataGrid.prototype.getViewportWidth = function()
{
    var width = this.getWidth();
    return Math.round(width * 1.5);
};

/**
 * Get the viewport height, which is defined as 1.5 the size of the height of Grid
 * @return {number} the viewport height
 */
DvtDataGrid.prototype.getViewportHeight = function()
{
    var height = this.getHeight();
    return Math.round(height * 1.5);
};

/**
 * Calculate the fetch size for rows or columns
 * @param {string} axis - the axis 'row'/'column' to get fetch size on
 * @return {number} the fetch size
 */
DvtDataGrid.prototype.getFetchSize = function(axis)
{
    // get the cached fetch size, this should be clear when the size changes
    if (axis == "row")
    {
        if (this.m_rowFetchSize == null)
        {
            this.m_rowFetchSize = Math.round(this.getViewportHeight() / this.getDefaultRowHeight());
        }

        return this.m_rowFetchSize;
    }
    if (axis == "column")
    {
        if (this.m_columnFetchSize == null)
        {
            this.m_columnFetchSize = Math.round(this.getViewportWidth() / this.getDefaultColumnWidth());
        }
        return this.m_columnFetchSize;
    }

    return 0;
};

/**
 * If the empty text option is 'default' return default empty translated text, 
 * otherwise return the emptyText set in the options 
 * @return {string} the empty text
 */
DvtDataGrid.prototype.getEmptyText = function()
{
    var emptyText, resources;
    emptyText = this.m_options.getEmptyText();
    if (emptyText == null)
    {
        resources = this.getResources();
        emptyText = resources.getTranslatedText("msgNoData");
    }
    return emptyText;
};

/**
 * Determine the size of the buffer that triggers fetching of rows. For example,
 * if the size of the buffer is zero, then the fetch will be triggered when the 
 * scroll position reached the end of where the current range ends
 * @return {number} the row threshold
 */
DvtDataGrid.prototype.getRowThreshold = function()
{
    return 0;
};

/**
 * Determine the size of the buffer that triggers fetching of columns. For example,
 * if the size of the buffer is zero, then the fetch will be triggered when the 
 * scroll position reached the end of where the current range ends.
 * @return {number} the column threshold
 */
DvtDataGrid.prototype.getColumnThreshold = function()
{
    return 0;
};


/*
 * Caches the default datagrid dimensions located in the style sheet, creates 
 * just one div to reduce createElement calls. This function should get called once on create.
 * Values found in style are:
 *  row header width
 *  column header height
 *  column width
 *  row height
 */
DvtDataGrid.prototype.setDefaultDimensions = function()
{
    var div, resources;
    div = document.createElement('div');
    div['style']['visibilty'] = 'hidden';
    
    resources = this.getResources();
    div['className'] = resources.getMappedStyle("colheader");
    this.m_root.appendChild(div);
    this.m_defaultColumnHeaderHeight = div['offsetHeight'];
    
    div['className'] = resources.getMappedStyle("colheadercell") + " " + resources.getMappedStyle("headercell");
    this.m_defaultColumnWidth = div['offsetWidth'];
    
    div['className'] = resources.getMappedStyle("rowheader");
    this.m_defaultRowHeaderWidth = div['offsetWidth'];
    
    div['className'] = resources.getMappedStyle("row");
    this.m_defaultRowHeight = div['offsetHeight'];    
        
    this.m_root.removeChild(div);    
};

/**
 * Get the default row height which comes from the style sheet
 * @return {number} the default row height
 */
DvtDataGrid.prototype.getDefaultRowHeight = function()
{
    if (this.m_defaultRowHeight == null)
    {
       this.setDefaultDimensions();
    }
    return this.m_defaultRowHeight;
};

/**
 * Get the default column width which comes from the stylesheet
 * @return {number} the default column width
 */
DvtDataGrid.prototype.getDefaultColumnWidth = function()
{
    if (this.m_defaultColumnWidth == null)
    {
       this.setDefaultDimensions();
    }    
    return this.m_defaultColumnWidth;
};

/**
 * Method to determine the height of a row. Checks the sizing manager, then checks its inline style, 
 * then a lookup by className, then falls back on the deafult.
 * @param {Element} elem - the row to find the height of
 * @param {string} key - the key of the row to find the height of
 * @return {number} the height of the row
 */
DvtDataGrid.prototype.getRowHeight = function(elem, key)
{
    var rowHeight, className;
    // check sizing manager first, the sizing manager should contain any non default 
    // value so that cells can match the headers where the styles are set
    rowHeight = this.m_sizingManager.getSize('row', key);
    if (rowHeight != null) 
    {
        //set the height because it has been changed somewhere that won't else be recognized        
        this.setElementHeight(elem, rowHeight);        
        return rowHeight;
    }    
    
    // check if inline style set on element
    if (elem['style']['height'] != '')
    {
        rowHeight = this.getElementHeight(elem);
        //in the event that row height is set via an additional style only on row header store the value        
        this.m_sizingManager.setSize('row', key, rowHeight);
        return rowHeight;
    }
    
    // check style class mapping, mapping prevents multiple offsetHeight calls on headers with the same class name
    className = elem['className'];
    rowHeight = this.m_styleClassDimensionMap[className];
    if (rowHeight == null)
    {
        // exhausted all options, use offsetHeight then
        elem['style']['visibility'] = "hidden";
        document.body.appendChild(elem);
        rowHeight = elem['offsetHeight'];
        elem['style']['visibility'] = "";
    }
    
    //the value isn't the default the cell will use meaning it's from an external 
    //class, so store it in the sizing manager cell can pick it up    
    if (rowHeight != this.getDefaultRowHeight())
    {
        this.m_sizingManager.setSize('row', key, rowHeight); 
    }    
    
    this.m_styleClassDimensionMap[className] = rowHeight;    
    return rowHeight;
};

/**
 * Method to determine the height of a row. Checks the sizing manager, then checks its inline style, 
 * then a lookup by className, then falls back on the deafult.
 * @param {Element} elem - the column to find the width of
 * @param {string} key - the key of the column to find the width of
 * @return {number} the width of the column
 */
DvtDataGrid.prototype.getColumnWidth = function(elem, key)
{
    var columnWidth,className;
    //check the sizing manager first
    columnWidth = this.m_sizingManager.getSize('column', key);
    if (columnWidth != null) 
    {
        //set the width because it has been changed somewhere that won't else be recognized
        this.setElementWidth(elem, columnWidth);
        return columnWidth;
    }    
    //if there was an inline style set
    if (elem['style']['width'] != '')
    {
        columnWidth = this.getElementWidth(elem);
        this.m_sizingManager.setSize('column', key, columnWidth);
        return columnWidth;
    }    
    
    // check style class mapping
    className = elem['className'];
    columnWidth = this.m_styleClassDimensionMap[className];
    if (columnWidth == null)
    {
        elem['style']['visibility'] = "hidden";
        document.body.appendChild(elem);
        columnWidth = elem['offsetWidth'];
        elem['style']['visibility'] = "";
    }
        
    //in the event that row height is set via an additional class only on row header store the value        
    if (columnWidth != this.getDefaultColumnWidth())
    {
        this.m_sizingManager.setSize('column', key, columnWidth); 
    }
    this.m_styleClassDimensionMap[className] = columnWidth;    
    return columnWidth;
};

/**
 * Helper method to create subid based on the root element's id
 * @param {string} subId - the id to append to the root element id
 * @return {string} the subId to append to the root element id
 */
DvtDataGrid.prototype.createSubId = function(subId)
{
    var id = this.getRootElement()['id'];
    if (id == null)
    {
        id = "";
    }

    return [id, subId].join(":");
};

/**
 * Checks whether header fetching is completed
 * @return {boolean} true if header fetching completed, else false
 */
DvtDataGrid.prototype.isHeaderFetchComplete = function()
{
    return (this.m_fetching['row'] === false && this.m_fetching['column'] === false);
};

/**
 * Checks whether header AND cell fetching is completed
 * @return {boolean} true if header AND cell fetching completed, else false
 */
DvtDataGrid.prototype.isFetchComplete = function()
{
    return (this.isHeaderFetchComplete() && this.m_fetching['cells'] === false);
};

/**
 * Checks whether the index is the last row
 * @param {number} index
 * @return {boolean} true if it's the last row, false otherwise
 */
DvtDataGrid.prototype._isLastRow = function(index)
{
    if (this._isCountUnknown("row"))
    {
        // if row count is unknown, then the last row is if the index is before the last row fetched
        // and there's no more rows from datasource
        return (index === this.m_endRow && this.m_stopRowFetch);
    }
    else
    {
        // if column count is known, then just check the index with the total column count
        return (index + 1 === this.getDataSource().getCount("row"));
    }
};

/**
 * Checks whether the index is the last column
 * @param {number} index
 * @return {boolean} true if it's the last column, false otherwise
 */
DvtDataGrid.prototype._isLastColumn = function(index)
{
    if (this._isCountUnknown("column"))
    {
        // if column count is unknown, then the last column is if the index is the last column fetched
        // and there's no more columns from datasource
        return (index === this.m_endCol && this.m_stopColumnFetch);
    }
    else
    {
        // if column count is known, then just check the index with the total column count
        return (index + 1 === this.getDataSource().getCount("column"));
    }
};

/**
 * Removes all of the datagrid children built by DvtDataGrid, this excludes context menus/popups
 */
DvtDataGrid.prototype.empty = function()
{
    //remove everything that will be rebuilt
    if (this.m_empty)
    {
        this.m_root.removeChild(this.m_empty);
    }
    if (this.m_corner)
    {    
        this.m_root.removeChild(this.m_corner);
    }
    if (this.m_bottomCorner)
    {    
        this.m_root.removeChild(this.m_bottomCorner);
    }
    if (this.m_columnHeaderScrollbarSpacer)
    {    
        this.m_root.removeChild(this.m_columnHeaderScrollbarSpacer);    
    }
    if (this.m_rowHeaderScrollbarSpacer)
    {    
        this.m_root.removeChild(this.m_rowHeaderScrollbarSpacer);
    }

    this.m_root.removeChild(this.m_placeHolder);
    this.m_root.removeChild(this.m_status);
    this.m_root.removeChild(this.m_accSummary);
    this.m_root.removeChild(this.m_accInfo);
    this.m_root.removeChild(this.m_stateInfo);
    this.m_root.removeChild(this.m_contextInfo);    
    this.m_root.removeChild(this.m_colHeader);   
    this.m_root.removeChild(this.m_rowHeader);    
    this.m_root.removeChild(this.m_databody);    
    this.m_root.removeChild(this.m_scroller);
};

/**
 * Re-renders the data grid. Resets all the necessary properties.
 * @param {Element} root - the root dom element for the DataGrid.
 * @export
 */
DvtDataGrid.prototype.refresh = function(root)
{
    this.destroy();
    this.resetInternal();
    this.render(root);    
};

/**
 * Resets internal state of data grid.
 * @private
 */
DvtDataGrid.prototype.resetInternal = function()
{
    this.m_sizingManager.clear();
    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;
    this.m_corner = null;
    this.m_bottomCorner = null;    
    this.m_columnHeaderScrollbarSpacer = null;
    this.m_rowHeaderScrollbarSpacer = null;
    this.m_avgRowHeight = undefined;
    this.m_avgColWidth = undefined;
    this.m_colHeader = null;
    this.m_rowHeader = null;
    this.m_databody = null;
    this.m_scroller = null;
    this.m_empty = null;
    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;
    
    //allow these values to be changed on refresh
    this.m_defaultColumnHeaderHeight = null;
    this.m_defaultColumnWidth = null;
    this.m_defaultRowHeaderWidth = null;
    this.m_defaultRowHeight = null;      
    
    this.m_active = null;
    this.m_prevActive = null;
    this.m_activeHeader = null;
    this.m_prevActiveHeader = null;
};

/**
 * Renders the DataGrid, initializes DataGrid properties.
 * @param {Element} root - the root dom element for the DataGrid.
 * @export
 */
DvtDataGrid.prototype.render = function(root)
{
    // if this is the same instance and state wasn't clear out from last time
    if (this.m_databody != null)
    {
        this.destroy();
        this.resetInternal();
    }
    
    this.m_timingStart = new Date();
    this.m_fetching = {
    };

    // since headers and cells are independently fetched, they could be returned
    // at a different time, therefore we'll need var to keep track the current range
    // for each one of them
    this.m_startRow = 0;
    this.m_startCol = 0;
    this.m_endRow = -1;
    this.m_endCol = -1;
    this.m_startRowPixel = 0;
    this.m_startColPixel = 0;
    this.m_endRowPixel = 0;
    this.m_endColPixel = 0;

    this.m_startRowHeader = 0;
    this.m_startColHeader = 0;
    this.m_endRowHeader = -1;
    this.m_endColHeader = -1;
    this.m_startRowHeaderPixel = 0;
    this.m_startColHeaderPixel = 0;
    this.m_endRowHeaderPixel = 0;
    this.m_endColHeaderPixel = 0;

    this.m_currentScrollLeft = 0;
    this.m_currentScrollTop = 0;

    this.buildGrid(root);
};

/**
 * Builds the DataGrid, adds root children (headers, scrollers, databody, corners),
 * initializes event listeners, and sets inital scroll position.
 * @param {Element} root - the root dom element for the DataGrid.
 */
DvtDataGrid.prototype.buildGrid = function(root)
{
    var status, accSummary, accInfo, stateInfo, rtl, colHeader, rowHeader, scroller, databody, empty, emptyText, i, contextInfo, placeHolder;
    
    this.m_root = root;
    this.m_root.className = this.getMappedStyle("datagrid");
    this.m_root.setAttribute("role", "application");
    this.m_root.setAttribute("aria-describedby", this.createSubId("summary"));

    // not done initializing until initial headers/cells are fetched
    this.m_initialized = false;

    // set a tab index so it can be focus and keyboard navigation to work
    root.tabIndex = 0;

    status = this.buildStatus();
    root.appendChild(status);
    this.m_status = status;

    accSummary = this.buildAccSummary();    
    root.appendChild(accSummary);
    this.m_accSummary = accSummary;    

    accInfo = this.buildAccInfo();    
    root.appendChild(accInfo);
    this.m_accInfo = accInfo;

    stateInfo = this.buildStateInfo();    
    root.appendChild(stateInfo);
    this.m_stateInfo = stateInfo;
    
    contextInfo = this.buildContextInfo();
    root.appendChild(contextInfo);
    this.m_contextInfo = contextInfo;

    placeHolder = this.buildPlaceHolder();
    root.appendChild(placeHolder);
    this.m_placeHolder = placeHolder;
    
    if (this.getDataSource() != null) {
        //in the event that the empty text was set when there was no datasource
        this.m_empty = null;

        rtl = this.getResources().isRTLMode();
        colHeader = this.buildHeaders("column", this.getMappedStyle("colheader"));
        rowHeader = this.buildHeaders("row", this.getMappedStyle("rowheader"));
        scroller = this.buildScroller();
        databody = this.buildDatabody(scroller);

        if (rtl)
        {
            colHeader['style']['direction'] = "rtl";
            databody['style']['direction'] = "rtl";
            scroller['style']['direction'] = "rtl";
        }

        root.insertBefore(colHeader, status);
        root.insertBefore(rowHeader, status);
        root.insertBefore(scroller, status);
        root.insertBefore(databody, status);

        this.m_colHeader = colHeader;
        this.m_rowHeader = rowHeader;
        this.m_databody = databody;
        this.m_scroller = scroller;
        
        this.m_isResizing = false;
        this.m_resizingElement = null;
        this.m_databodyDragState = false;           

        // store the listeners so we can remove them later (bind creates a new function)            
        this.m_handleDatabodyKeyDown = this.handleDatabodyKeyDown.bind(this);            
        this.m_docMouseMoveListener = this.handleMouseMove.bind(this);
        this.m_docMouseUpListener = this.handleMouseUp.bind(this);            

        //touch event handling
        if (this.m_utils.isTouchDevice())
        {
            //databody touch listeners
            databody.addEventListener("touchstart", this.handleTouchStart.bind(this), false);
            databody.addEventListener("touchmove", this.handleTouchMove.bind(this), false);
            databody.addEventListener("touchend", this.handleTouchEnd.bind(this), false);
            databody.addEventListener("touchcancel", this.handleTouchCancel.bind(this), false);

            //column header listeners
            colHeader.addEventListener("touchstart", this.handleHeaderTouchStart.bind(this), false);     
            colHeader.addEventListener("touchmove", this.handleHeaderTouchMove.bind(this), false);
            colHeader.addEventListener("touchend", this.handleHeaderTouchEnd.bind(this), false);
            colHeader.addEventListener("touchcancel", this.handleHeaderTouchCancel.bind(this), false);     

            //row header listeners
            rowHeader.addEventListener("touchstart", this.handleHeaderTouchStart.bind(this), false);     
            rowHeader.addEventListener("touchmove", this.handleHeaderTouchMove.bind(this), false);
            rowHeader.addEventListener("touchend", this.handleHeaderTouchEnd.bind(this), false);
            rowHeader.addEventListener("touchcancel", this.handleHeaderTouchCancel.bind(this), false);      
            
            //root listeners
            root.addEventListener('focus',this.handleRootFocus.bind(this),true);
            root.addEventListener('blur',this.handleRootBlur.bind(this),true);
        }
        else
        {
            //non-touch event listening
            //document level listeners
            document.addEventListener("mousemove", this.m_docMouseMoveListener, false);
            document.addEventListener("mouseup", this.m_docMouseUpListener, false);

            //root level listeners
            root.addEventListener("keydown", this.m_handleDatabodyKeyDown, false);
            root.addEventListener('focus',this.handleRootFocus.bind(this),true);
            root.addEventListener('blur',this.handleRootBlur.bind(this),true);
                       
            //databody listeners
            databody.addEventListener(this.m_utils.getMousewheelEvent(), this.handleDatabodyMouseWheel.bind(this), false);
            databody.addEventListener("mousedown", this.handleDatabodyMouseDown.bind(this), false);
            databody.addEventListener("mousemove", this.handleDatabodyMouseMove.bind(this), false);
            databody.addEventListener("mouseup", this.handleDatabodyMouseUp.bind(this), false);
            databody.addEventListener("mouseout", this.handleDatabodyMouseOut.bind(this), false);
            databody.addEventListener("mouseover", this.handleDatabodyMouseOver.bind(this), false);

            //header listeners
            rowHeader.addEventListener("mousedown", this.handleHeaderMouseDown.bind(this), false);
            colHeader.addEventListener("mousedown", this.handleHeaderMouseDown.bind(this), false);
            rowHeader.addEventListener("mouseover", this.handleHeaderMouseOver.bind(this), false);
            colHeader.addEventListener("mouseover", this.handleHeaderMouseOver.bind(this), false);
            rowHeader.addEventListener("mousemove", this.handleRowHeaderMouseMove.bind(this), false);
            rowHeader.addEventListener("mouseup", this.handleHeaderMouseUp.bind(this), false);
            rowHeader.addEventListener("mouseout", this.handleHeaderMouseOut.bind(this), false);
            colHeader.addEventListener("mouseout", this.handleHeaderMouseOut.bind(this), false);
            rowHeader.addEventListener("click", this.handleHeaderClick.bind(this), false);
            colHeader.addEventListener("click", this.handleHeaderClick.bind(this), false);        

            //scroller listeners
            scroller.addEventListener("mousedown", this.handleScrollerMouseDown.bind(this), false);
            scroller.addEventListener("mouseup", this.handleScrollerMouseUp.bind(this), false);
        }
        
        // check if data is fetched and size the grid
        if (this.isFetchComplete() && !this.m_initialized)
        {
            this.resizeGrid();            
            this.setInitialScrollPosition();

            // check the model event queue to see if there are outstanding events
            if (this.m_modelEvents != null)
            {
                for (i=0; i<this.m_modelEvents.length; i++)
                {
                    this.handleModelEvent(this.m_modelEvents[i]);
                }
                // empty the queue
                this.m_modelEvents.length = 0;
            }
        }
        else if (this.isHeaderFetchComplete() && !this.m_initialized)
        {
            this.resizeHeaders();
        }
    } 
    else 
    {
        //if no datasource render empty text
        emptyText = this.getEmptyText();
        empty = document.createElement("div");
        empty['className'] = this.getMappedStyle("emptytext");      
        empty.setAttribute("id", this.createSubId("empty"));
        empty.innerHTML = emptyText;
        this.m_root.appendChild(empty);
        this.m_empty = empty;
    }
};

/**
 * Size the headers based on current width and height.
 * @private
 */
DvtDataGrid.prototype.resizeHeaders = function()
{
    var width, height, colHeader, rowHeader, colHeaderHeight, rowHeaderWidth, dir;

    if (this.m_colHeader == null || this.m_rowHeader == null)
    {
        return;
    }

    width = this.getWidth();
    height = this.getHeight();
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;

    colHeaderHeight = this.getColumnHeaderHeight();
    rowHeaderWidth = this.getRowHeaderWidth();

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementDir(rowHeader, 0, dir);
    this.setElementDir(rowHeader, colHeaderHeight, 'top');
    this.setElementHeight(rowHeader, height - colHeaderHeight);
    this.setElementDir(colHeader, rowHeaderWidth, dir);
    this.setElementWidth(colHeader, width - rowHeaderWidth);

    if (!this.m_utils.isTouchDevice())
    {
        this.buildCorners();
    }
};

/**
 * Handle resize of grid to a new width and height.
 * @param {number} width the new width
 * @param {number} height the new height
 * @export
 */
DvtDataGrid.prototype.HandleResize = function(width, height)
{
    // don't do anything if nothing has changed
    if (width != this.m_width || height != this.m_height)
    {
        // assign new width and height
        this.m_width = width;
        this.m_height = height;

        // if it's not initialize (or fetching), then just skip now
        if (this.m_initialized && this.isFetchComplete())
        {
            // call resize logic
            this.resizeGrid();

            // check viewport
            this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
        }
    }
};

/**
 * Size the headers, scroller, databody based on current width and height.
 * @private
 */
DvtDataGrid.prototype.resizeGrid = function()
{
        var width, height, colHeader, rowHeader, scroller, databody,
            colHeaderHeight, rowHeaderWidth, databodyContentWidth, databodyWidth, databodyContentHeight, databodyHeight,
            isTouchDevice, isDatabodyHorizontalScrollbarRequired, isDatabodyVerticalScrollbarRequired, scrollbarSize,
            dir, empty, emptyText, endTime,scrollerHeight, scrollerWidth;

    // this is the case where data is ready before dom structure is complete
    if (this.m_databody == null)
    {
        return;
    }

    // check if there's no data
    if (this.m_databody['firstChild'] == null)
    {
        emptyText = this.getEmptyText();
        empty = document.createElement("div");
        empty['className'] = this.getMappedStyle("emptytext");
        if (this.m_colHeader != null)
        {
            this.setElementDir(empty, this.getElementHeight(this.m_colHeader), 'top');
        }        
        empty.innerHTML = emptyText;
        this.m_root.appendChild(empty);
        this.m_empty = empty;
        this.m_initialized = true;
        return;
    }

    width = this.getWidth();
    height = this.getHeight();
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;
    scroller = this.m_scroller;
    databody = this.m_databody;

    // cache these since they will be used in multiple places and we want to minimize reflow
    colHeaderHeight = this.getColumnHeaderHeight();
    rowHeaderWidth = this.getRowHeaderWidth();
    databodyContentWidth = this.getElementWidth(databody['firstChild']);
    databodyContentHeight = this.getElementHeight(databody['firstChild']);
    
    //adjusted to make the databody wrap the databody content, and the scroller to fill the remaing part of the grid
    //this way our scrollbars are always at the edges of our viewport
    scrollerHeight = height - colHeaderHeight;
    scrollerWidth = width - rowHeaderWidth;
    databodyWidth = Math.min(databodyContentWidth, scrollerWidth);
    databodyHeight = Math.min(databodyContentHeight, scrollerHeight);
                
    isTouchDevice = this.m_utils.isTouchDevice();
    scrollbarSize = this.m_utils.getScrollbarSize();
    
    //determine which scrollbars are required, if needing one forces need of the other, allows rendering within the root div
    isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(scrollerWidth);
    if (isDatabodyHorizontalScrollbarRequired)
    {
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(scrollerHeight - scrollbarSize);
    } 
    else 
    {   
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(scrollerHeight);
        if (isDatabodyVerticalScrollbarRequired)
        {   
            isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(scrollerWidth - scrollbarSize);
        }
    }

    this.m_hasHorizontalScroller = isDatabodyHorizontalScrollbarRequired;
    this.m_hasVerticalScroller = isDatabodyVerticalScrollbarRequired;
  
    //appropriatley set the width and height in the scrollabr case
    if (isDatabodyHorizontalScrollbarRequired)
    {
        //if the scroller position is bigger than the databody
        if (((scrollerHeight - scrollbarSize) < databodyHeight))
        {
            //if the visible height is going to be less than the databody height, set the databody height to the visible height 
            databodyHeight = scrollerHeight - scrollbarSize;            
        }
    }
    if (isDatabodyVerticalScrollbarRequired)
    {
        //if the visible width is going to be less than the databody width, set the databody width to the visible width 
        if (((scrollerWidth - scrollbarSize) < databodyWidth))
        {
            databodyWidth = scrollerWidth - scrollbarSize;            
        }
    }    

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementDir(rowHeader, 0, dir);
    this.setElementDir(rowHeader, colHeaderHeight, 'top');
    this.setElementHeight(rowHeader, databodyHeight);
    this.setElementDir(colHeader, rowHeaderWidth, dir);
    this.setElementWidth(colHeader, databodyWidth);
    this.setElementDir(databody, colHeaderHeight, 'top');
    this.setElementDir(databody, rowHeaderWidth, dir);
    this.setElementWidth(databody, databodyWidth);
    this.setElementHeight(databody, databodyHeight);
    this.setElementDir(scroller, colHeaderHeight, 'top');
    this.setElementDir(scroller, rowHeaderWidth, dir);
    this.setElementWidth(scroller, scrollerWidth);
    this.setElementHeight(scroller, scrollerHeight);
    
    // cache the scroll width and height to minimize reflow
    this.m_scrollWidth = databodyContentWidth - databodyWidth;
    this.m_scrollHeight = databodyContentHeight - databodyHeight;
        
    // check if we need to remove border on the last column header
    this._adjustColumnHeader();

    this.buildCorners();
    
    // now we are initialized
    this.m_initialized = true;

    endTime = new Date();
};

/**
 * Adjust the border style setting on the last column header if neccessary
 * @private
 */
DvtDataGrid.prototype._adjustColumnHeader = function()
{
    var borderStyle, lastHeader;

    if (this.m_colHeader != null && this.m_endColHeader >= 0)
    {
        //do not put borders on last header cell
        if ((this.getRowHeaderWidth()+this.m_endColHeaderPixel >= this.getWidth()))
        {
            borderStyle = this.getResources().isRTLMode() ? "borderLeftStyle" : "borderRightStyle";
            lastHeader = this.m_colHeader['firstChild']['lastChild'];
            lastHeader['style'][borderStyle] = 'none';
        }
    }
};

/**
 * Build the corners of the grid. If they exist, removes them and rebuilds them.
 * @private
 */
DvtDataGrid.prototype.buildCorners = function() 
{
    var scrollbarSize, colHeaderHeight, rowHeaderWidth, bottomCorner,
            corner, dir, rowHeaderScrollbarSpacer, columnHeaderScrollbarSpacer,
            colHeaderWidth, rowHeaderHeight, scrollerWidth, scrollerHeight;
    
    scrollbarSize = this.m_utils.getScrollbarSize();
    scrollerWidth = this.getElementWidth(this.m_scroller);
    scrollerHeight = this.getElementHeight(this.m_scroller);
    colHeaderHeight = this.getColumnHeaderHeight();
    colHeaderWidth = this.getElementWidth(this.m_colHeader);
    rowHeaderWidth = this.getRowHeaderWidth();
    rowHeaderHeight = this.getElementHeight(this.m_rowHeader);
    dir = this.getResources().isRTLMode() ? "right" : "left";

    //rather than removing and appending the nodes every time just adjust the live ones

    if (this.m_endRowHeader != -1 && this.m_endColHeader != -1)
    {
        // render corner
        if (this.m_corner != null)
        {
            corner = this.m_corner;         
        }
        else
        {
            corner = document.createElement("div");
            corner['id'] = this.createSubId("corner");
            corner['className'] = this.getMappedStyle("topcorner");
        }
        
        this.setElementWidth(corner, rowHeaderWidth);
        this.setElementHeight(corner, colHeaderHeight);  
        
        if (this.m_corner == null)
        {    
            this.m_root.appendChild(corner);
            this.m_corner = corner;
        }
    }
    if (this.m_corner != null && corner == null)
    {
        this.m_root.removeChild(this.m_corner);
        this.m_corner = null;
    }    
    
    //no bottom left corner if there are no row headers
    if (this.m_endRowHeader != -1)
    {
        if (this.m_hasHorizontalScroller)
        {
            if (this.m_rowHeaderScrollbarSpacer != null)
            {
                rowHeaderScrollbarSpacer = this.m_rowHeaderScrollbarSpacer;
            }
            else
            {
                rowHeaderScrollbarSpacer = document.createElement("div");
                rowHeaderScrollbarSpacer['id'] = this.createSubId("rhSbSpacer");
                rowHeaderScrollbarSpacer['className'] = this.getMappedStyle("rowheaderspacer");
            }

            this.setElementDir(rowHeaderScrollbarSpacer, (rowHeaderHeight + colHeaderHeight), 'top');
            this.setElementDir(rowHeaderScrollbarSpacer, 0, dir);
            this.setElementWidth(rowHeaderScrollbarSpacer, rowHeaderWidth);
            this.setElementHeight(rowHeaderScrollbarSpacer, scrollerHeight - rowHeaderHeight);

            if (this.m_rowHeaderScrollbarSpacer == null)
            {        
                this.m_root.appendChild(rowHeaderScrollbarSpacer);
                this.m_rowHeaderScrollbarSpacer = rowHeaderScrollbarSpacer;            
            }
        } 
        else 
        {
            if (this.m_rowHeaderScrollbarSpacer != null)
            {
                this.m_root.removeChild(this.m_rowHeaderScrollbarSpacer);
            }
            this.m_rowHeaderScrollbarSpacer = null;
        }        
    }
    
    //no top right corner if there are no col headers    
    if (this.m_endColHeader != -1)
    {
        // render scrollbar spacer in column header if needed
        if (this.m_hasVerticalScroller)
        {
            if (this.m_columnHeaderScrollbarSpacer != null)
            {
                columnHeaderScrollbarSpacer = this.m_columnHeaderScrollbarSpacer;
            }
            else
            {        
                columnHeaderScrollbarSpacer = document.createElement("div");
                columnHeaderScrollbarSpacer['id'] = this.createSubId("chSbSpacer");
                columnHeaderScrollbarSpacer['className'] = this.getMappedStyle("colheaderspacer");
            }

            this.setElementDir(columnHeaderScrollbarSpacer, (rowHeaderWidth + colHeaderWidth), dir);
            this.setElementDir(columnHeaderScrollbarSpacer, 0, 'top');
            this.setElementWidth(columnHeaderScrollbarSpacer, scrollerWidth - colHeaderWidth);
            this.setElementHeight(columnHeaderScrollbarSpacer, colHeaderHeight);

            if (this.m_columnHeaderScrollbarSpacer == null)
            {        
                this.m_root.appendChild(columnHeaderScrollbarSpacer);
                this.m_columnHeaderScrollbarSpacer = columnHeaderScrollbarSpacer;
            }
        } 
        else 
        {
            if (this.m_columnHeaderScrollbarSpacer != null)
            {
                this.m_root.removeChild(this.m_columnHeaderScrollbarSpacer);
            }
            this.m_columnHeaderScrollbarSpacer = null;
        }        
    }

    // render bottom corner (for both scrollbars) if needed
    if (this.m_hasHorizontalScroller && this.m_hasVerticalScroller)
    {
        if (this.m_bottomCorner != null)
        {
            bottomCorner = this.m_bottomCorner;
        }        
        else
        {
            bottomCorner = document.createElement("div");
            bottomCorner['id'] = this.createSubId("bcorner");
            bottomCorner['className'] = this.getMappedStyle("bottomcorner");
        }
        
        this.setElementDir(bottomCorner, (rowHeaderHeight + colHeaderHeight), 'top');
        this.setElementDir(bottomCorner, (rowHeaderWidth + colHeaderWidth), dir);
        this.setElementWidth(bottomCorner, scrollerWidth - colHeaderWidth);
        this.setElementHeight(bottomCorner, scrollerHeight - rowHeaderHeight);
            
        if (this.m_bottomCorner == null)
        {
            this.m_root.appendChild(bottomCorner);
            this.m_bottomCorner = bottomCorner;
        }
    }
    if (this.m_bottomCorner != null && bottomCorner == null)
    {
        this.m_root.removeChild(this.m_bottomCorner);
        this.m_bottomCorner = null;
    }
};

/**
 * Sets the inital scroller postion. If initial scroll is set via key, will find the indexes from the data source
 * and call back to _intialScrollPositionCallback, otherwise will just call _intialScrollPositionCallback with the indexes
 * provided.
 */
DvtDataGrid.prototype.setInitialScrollPosition = function()
{
    var scrollMode, columnScrollPosition, rowScrollPosition;
    scrollMode = this.m_options.getScrollPositionMode();
    if (this.m_scroller != undefined)
    {
        if (scrollMode != null)
        {
            columnScrollPosition = this.m_options.getColumnScrollPosition();
            rowScrollPosition = this.m_options.getRowScrollPosition();
            if (scrollMode === 'key')
            {
                //get the indexes of the given keys and pass in a callback to kick off a scroller event
                this._indexes({'row':rowScrollPosition, 'column':columnScrollPosition}, this._intialScrollPositionCallback);
            }
            else
            {
                this._intialScrollPositionCallback({'row':rowScrollPosition, 'column':columnScrollPosition});
            }
        }
    }
};

/**
 * Sets the inital scroller postion, based on average column width and height
 * @param {Object} indexes the indexes to scroll to with property row and column, values are numbers
 * @private
 */
DvtDataGrid.prototype._intialScrollPositionCallback = function(indexes)
{                
    //scroll to index puts the desired index at the bottom ojf the viewport
    var columnScrollPosition, rowScrollPosition, initialScrollLeft, initialScrollTop = 0;    
    columnScrollPosition = indexes['column'] === -1 ? 0:indexes['column'];
    rowScrollPosition = indexes['row'] === -1 ? 0:indexes['row'];
    
    initialScrollLeft = columnScrollPosition * this.m_avgColWidth;
    initialScrollTop = rowScrollPosition * this.m_avgRowHeight;

    this.m_utils.setElementScrollLeft(this.m_scroller, initialScrollLeft);
    this.m_scroller['scrollTop'] = initialScrollTop;       
};

/**
 * Determine if horizontal scrollbar is needed
 * @param {number|null=} expectedWidth - databody width
 * @return {boolean} true if horizontal scrollbar required
 */
DvtDataGrid.prototype.isDatabodyHorizontalScrollbarRequired = function(expectedWidth)
{
    var databody, scroller, expected;
    // if expected width of the databody is not specified, extract from style
    databody = this.m_databody;
    if (expectedWidth == null)
    {
        expected = this.getElementWidth(databody);
    } else {
        expected = expectedWidth;
    }
    
    scroller = databody['firstChild'];
    if (this.getElementWidth(scroller) > expected)
    {
        return true;
    }
    return false;
};

/**
 * Determine if vertical scrollbar is needed
 * @param {number|null=} expectedHeight - databody height
 * @return {boolean} true if vertical scrollbar required
 * @private
 */
DvtDataGrid.prototype.isDatabodyVerticalScrollbarRequired = function(expectedHeight)
{
    var databody, scroller, expected;
    // if expected height of the databody is not specified, extract from style
    databody = this.m_databody;
    if (expectedHeight == null)
    {
        expected =this.getElementHeight(databody);
    } else {
        expected = expectedHeight;
    }

    scroller = databody['firstChild'];
    if (this.getElementHeight(scroller) > expected)
    {
        return true;
    }
    return false;
};

/**
 * todo: merge with buildAccInfo, we just need one status role div.
 * Build a status bar div
 * @return {Element} the root of the status bar
 * @private
 */
DvtDataGrid.prototype.buildStatus = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("status");
    root['className'] = this.getMappedStyle("status");
    root.setAttribute("role", "status");

    return root;
};

/**
 * Build the offscreen div used by screenreader for action such as sort
 * @return {Element} the root of the accessibility info div
 */
DvtDataGrid.prototype.buildAccInfo = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("info");
    root['className'] = this.getMappedStyle("info");
    root.setAttribute("role", "status");
    
    return root;
};

/**
 * Build the offscreen div used by screenreader for summary description
 * @return {Element} the root of the accessibility summary div
 */
DvtDataGrid.prototype.buildAccSummary = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("summary");
    root['className'] = this.getMappedStyle("info");
    
    return root;
};

/**
 * Build the offscreen div used by screenreader for state information
 * @return {Element} the root of the accessibility state info div
 */
DvtDataGrid.prototype.buildStateInfo = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("state");
    root['className'] = this.getMappedStyle("info");
    
    return root;
};

/**
 * Build the offscreen div used by screenreader for cell context information
 * @return {Element} the root of the accessibility context info div
 */
DvtDataGrid.prototype.buildContextInfo = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("context");
    root['className'] = this.getMappedStyle("info");
    
    return root;
};

/**
 * Build the offscreen div used by screenreader used for reading current cell context information
 * @return {Element} the root of the accessibility current cell context info div
 */
DvtDataGrid.prototype.buildPlaceHolder = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("placeHolder");
    root['className'] = this.getMappedStyle("info");
    
    return root;
};

/**
 * Sets the text on the offscreen div.  The text contains a summary text describing the grid
 * including structure information
 * @private
 */
DvtDataGrid.prototype.populateAccInfo = function()
{
    var summary, summaryExpanded;

    summary = this.getResources().getTranslatedText('accessibleSummaryExact', {'rownum': (this.m_endRow + 1), 'colnum': (this.m_endCol + 1)});

    // if it's hierarchical, then include specific accessible info about what's expanded
    if (this.getDataSource().getExpandedKeys)
    {
        summaryExpanded = this.getResources().getTranslatedText('accessibleSummaryExpanded', {'num': this.getDataSource().getExpandedKeys().length});
        summary = summary + ". " + summaryExpanded;
    }

    // add instruction text
    summary = summary + ". " + this.getResources().getTranslatedText('accessibleInitialFocus');

    // set the summary text on the screen reader div
    this.m_accSummary.innerHTML = summary;
};

/**
 * Implements Accessible interface.
 * Sets accessible information on the DataGrid.
 * This is currently used by the Row Expander to alert screenreader of such
 * information as depth, expanded state, index etc
 * @param {Object} context an object containing attribute context or state to set m_accessibleContext/state
 * @export
 */
DvtDataGrid.prototype.SetAccessibleContext = function(context)
{
    if (context != null)
    {
        // got row context info
        if (context['context'] != null)
        {
            // save it for updateContextInfo to consume later
            this.m_accessibleContext = context['context'];
        }

        // got disclosure state info
        if (context['state'] != null)
        {
            this.m_stateInfo.innerHTML = context['state'];
        }
    }
};

/**
 * Sets the accessibility state info text
 * @param {string} key the message key
 * @param {Object=} args the optional arguments passed to bundle
 * @private
 */
DvtDataGrid.prototype._updateStateInfo = function(key, args)
{
    var text = this.getResources().getTranslatedText(key, args);
    if (text != null)
    {
        this.m_stateInfo.innerHTML = text;
    }
};

/**
 * Sets the accessibility context info text
 * @param {Object} context the context info about the cell
 * @param {number=} context.row the row index
 * @param {number=} context.column the column index
 * @param {string=} skip whether to skip row or column
 * @private
 */
DvtDataGrid.prototype._updateContextInfo = function(context, skip)
{
    var row, column, info, text;

    row = context['row'];
    column = context['column'];
    info = "";

    // row context.  Skip if there is an outstanding accessible row context
    if (this.m_accessibleContext == null && !isNaN(row) && skip != 'row')
    {
        text = this.getResources().getTranslatedText('accessibleRowContext', {'index': row+1});
        if (text != null)
        {
            info = text;
        }
    }

    // column context
    if (!isNaN(column) && skip != 'column')
    {
        text = this.getResources().getTranslatedText('accessibleColumnContext', {'index': column+1});
        if (text != null)
        {
            if (info.length === 0)
            {
                info = text;
            }
            else
            {
                info = info + ' ' + text;
            }
        }
    }

    // merge with accesssible context (from row expander)
    if (this.m_accessibleContext != null)
    {
        info = info + ', ' + this.m_accessibleContext;
        // reset
        this.m_accessibleContext = null;
    }

    this.m_contextInfo.innerHTML = info;
};

/**
 * Determine whether the row/column count is unknown.
 * @param {string} axis the row/column axis
 * @return {boolean} true if the count for the axis is unknown, false otherwise
 * @private
 */
DvtDataGrid.prototype._isCountUnknown = function(axis)
{
    var datasource, rowPrecision, colPrecision, rowCount, colCount;

    datasource = this.getDataSource();
    if (axis === 'row')
    {
        if (this.m_isEstimateRowCount === undefined)
        {
            rowPrecision = datasource.getCountPrecision('row');
            rowCount = datasource.getCount('row');
            if (rowPrecision === 'estimate' || rowCount < 0)
            {
                this.m_isEstimateRowCount = true;
            }
            else
            {
                this.m_isEstimateRowCount = false;
            }
        }

        return this.m_isEstimateRowCount;
    }
    else if (axis === 'column')
    {
        if (this.m_isEstimateColumnCount === undefined)
        {
            colPrecision = datasource.getCountPrecision('column');
            colCount = datasource.getCount('column');
            if (colPrecision === 'estimate' || colCount < 0)
            {
                this.m_isEstimateColumnCount = true;
            }
            else
            {
                this.m_isEstimateColumnCount = false;
            }
        }

        return this.m_isEstimateColumnCount;
    }

    // unrecognize axis, just assume the count is known
    return false;
};

/**
 * Convenient method which returns true if row count is unknown or high watermark scrolling is used.
 * @param {string} axis the row/column axis 
 * @return {boolean} true if count is unknown or high watermark scrolling is used, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isCountUnknownOrHighwatermark = function(axis)
{
    return (this._isCountUnknown(axis) || this._isHighWatermarkScrolling());
};

/**
 * Build a header div
 * @param {string} axis - 'row' or 'column'
 * @param {string} styleClass - class to set on the header
 * @return {Element} the root of the header
 */
DvtDataGrid.prototype.buildHeaders = function(axis, styleClass)
{
    var root = document.createElement("div");
    root['id'] = this.createSubId(axis + "Header");
    root['className'] = styleClass + " " + this.getMappedStyle("header");

    this.fetchHeaders(axis, 0, root);

    return root;
};

/**
 * Fetch the headers by calling the fetch headers method on the data source. Pass 
 * callbacks for success and error to the data source.
 * @param {string} axis - 'row' or 'column'
 * @param {number} start - index to start fetching at
 * @param {Element} header - the root element of the axis header
 * @param {number=} fetchSize - number of headers to fetch
 * @param {Object=} callbacks - the optional callbacks to invoke when the fetch success or fail
 * @protected
 */
DvtDataGrid.prototype.fetchHeaders = function(axis, start, header, fetchSize, callbacks)
{
    var axisStart, axisEnd, count, headerRange, successCallback;
    // check if we are already fetching
    if (!this.m_fetching[axis])
    {
        this.m_fetching[axis] = {'start': start};
    }
    else
    {
        return;
    }

    // fetch size could be explicitly specified.  If not, use the calculated one.
    if (fetchSize == undefined)
    {
        fetchSize = this.getFetchSize(axis);

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown(axis))
        {
            axisStart = (axis == "row") ? this.m_startRowHeader : this.m_startColHeader;
            axisEnd = (axis == "row") ? this.m_endRowHeader : this.m_endColHeader;

            // append to end vs. insert to top
            if (start < axisStart)
            {
                fetchSize = Math.min(fetchSize, axisStart);
            }
            else
            {
                count = this.getDataSource().getCount(axis);
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    fetchSize = Math.min(fetchSize, Math.max(0, count - axisEnd));
                }
            }
        }
    }

    headerRange = {
        "axis": axis, "start": start, "count": fetchSize, "header": header
    };

    // check if overriding callbacks are specified
    if (callbacks != null && callbacks['success'] != null)
    {
        successCallback = callbacks['success'];
    }
    else
    {
        successCallback = this.handleHeadersFetchSuccess;
    }

    this.showStatusText();

    this.getDataSource().fetchHeaders(headerRange, {
        "success": successCallback, "error": this.handleHeadersFetchError
    }, {'success': this, 'error': this});
};

/** 
 * Checks whether header fetch result match the request
 * @param {Object} headerRange the header range for the response
 * @protected
 */
DvtDataGrid.prototype.isHeaderFetchResponseValid = function(headerRange)
{
    var axis, requestStart, responseStart;

    axis = headerRange['axis'];
    requestStart = headerRange['start'];
    responseStart = this.m_fetching[axis]['start'];

    // note we are not checking size since the actual return size might be different
    // then the request size (ex, no more rows)
    return (requestStart == responseStart);
};

/**
 * Handle a successful call to the data source fetchHeaders 
 * @param {Array.<(Object|string)>} results - an array of headers returned from the dataSource
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @param {boolean} rowInsert - if this is triggered by a row insert event
 * @protected
 */
DvtDataGrid.prototype.handleHeadersFetchSuccess = function(results, headerRange, rowInsert)
{
    var axis, root, start, count;

    // validate result matches what we currently asks for
    if (!this.isHeaderFetchResponseValid(headerRange))
    {
        // not valid, so ignore result
        return;
    }

    // remove fetching message
    axis = headerRange["axis"];
    this.m_fetching[axis] = false;

    root = headerRange["header"];
    start = headerRange["start"];
    count = this.getDataSource().getCount(axis);

    if (axis === "column")
    {
        this.buildColumnHeaders(root, results, start, count);
    }
    else if (axis === "row")
    {
        this.buildRowHeaders(root, results, start, count, rowInsert, headerRange['count']); 
        if (results.getCount() < headerRange['count'])
        {
            this.m_stopRowHeaderFetch = true;
        }
    }

    if (this.isFetchComplete())
    {
        this.hideStatusText();
        if (!this.m_initialized && !rowInsert)
        {
            this.resizeGrid();
            this.setInitialScrollPosition();
        }
    }
    else if (this.isHeaderFetchComplete())
    {
        if (!this.m_initialized)
        {
            this.resizeHeaders();
        }
    }

    if (this.m_initialized)
    {
        // check if we need to sync header scroll position
        this._syncScroller();
    }    
};

/**
 * Handle an unsuccessful call to the data source fetchHeaders 
 * @param {Error} error - the error returned from the data source
 * @param {Object} headerRange - keys of {axis,start,count,header}
 */
DvtDataGrid.prototype.handleHeadersFetchError = function(error, headerRange)
{
    // remove fetching message
    var axis = headerRange["axis"];
    this.m_fetching[axis] = false;
};

/**
 * Build a header context object for a header and return it
 * The header elem and the data can be set to null for cases where there are no headers
 * but varying height and width are desired
 * @param {string} axis - 'row' or 'column'
 * @param {number} index - the index of the header
 * @param {Object|null} data - the data the cell contains
 * @param {Object} metadata - the metadata the cell contains
 * @param {Element|null} elem - the header element
 * @return {Object} the header context object, keys of {axis,index,data,key,datagrid}
 */
DvtDataGrid.prototype.createHeaderContext = function(axis, index, data, metadata, elem)
{
    var headerContext, key, prop;
    headerContext = {
    };
    headerContext['axis'] = axis;
    headerContext['index'] = index;
    headerContext['data'] = data;
    headerContext['datagrid'] = this;
    //set the parent element to the content div
    if (elem != null)
    {
        headerContext['parentElement'] = elem['firstChild'];
    }

    key = metadata['key'];
    if (key != null && elem != null)
    {
        // store the key in the header element for fast retrieval        
        if (axis === 'row')
        {
            elem.parentNode.setAttribute(this.getResources().getMappedAttribute('key'), key);
        }
        else
        {
            elem.setAttribute(this.getResources().getMappedAttribute('key'), key);
        }
    }

    // merge properties from metadata into cell context
    // the properties in metadata would have precedence
    for (prop in metadata) 
    {
        if (metadata.hasOwnProperty(prop)) 
        {
            headerContext[prop] = metadata[prop];   
        }
    }

    // invoke callback to allow ojDataGrid to change datagrid reference
    if (this.m_createContextCallback != null)
    {
        this.m_createContextCallback.call(this, headerContext);
    }

    return headerContext;
};

/**
 * Build column headers from the header data and start index.
 * @param {Element} headerRoot - the root element of the column headers
 * @param {Object} headerSet - the header data returned from the data source
 * @param {number} start - the column index that the to start building at
 * @param {string} totalCount - the total number of columns in the table
 */
DvtDataGrid.prototype.buildColumnHeaders = function(headerRoot, headerSet, start, totalCount)
{
    var scroller, renderer, totalColWidth, currentLeft, headerCount, firstHeader, headerClass, textWrapper, headerContent,
            dir, i, index, headerData, headerMetadata, headerContext, inlineStyle, styleClass, col, width, avgWidth, sortIcon, 
            content, sortableAttribute, resizableAttribute;

    headerCount = headerSet.getCount();

    // check if this is the first time column header is populated
    if (!headerRoot.hasChildNodes())
    {
        scroller = document.createElement("div");
        scroller['className'] = this.getMappedStyle("scroller") + (this.m_utils.isTouchDevice() ? " " + this.getMappedStyle("scroller-mobile"):"");        
        
        // if no column headers
        if (headerCount == 0)
        {
            //remove any height set inline style and remove class name
            headerRoot['className'] = '';
            this.setElementHeight(headerRoot, 0);
            this.setElementHeight(scroller, 0);
            this.m_stopColumnHeaderFetch = true;
        }
    }
    else
    {
        // if unknown count and there's no more column, mark it so we won't try to fetch again
        if (headerCount == 0 && this._isCountUnknown("column"))
        {
            this.m_stopColumnHeaderFetch = true;
            return;
        }
        scroller = headerRoot['firstChild'];
        //add class name back if header populated later       
        if (this.m_endColHeader == -1 && headerRoot['className'] == '')
        {
            headerRoot['className'] = this.getMappedStyle('colheader') + ' ' + this.getMappedStyle('header');
            headerRoot['style']['height'] = '';            
            scroller['style']['height'] = '';            
        }
    }

    renderer = this.m_options.getRenderer("column");

    totalColWidth = 0;
    if (start < this.m_startColHeader)
    {
        currentLeft = this.m_startColHeaderPixel;
    }
    else
    {
        currentLeft = this.m_endColHeaderPixel;
    }
    firstHeader = scroller['firstChild'];
    headerClass = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
    dir = this.getResources().isRTLMode() ? "right" : "left";
    sortableAttribute = this.getResources().getMappedAttribute('sortable');
    resizableAttribute = this.getResources().getMappedAttribute('resizable');
    for (i = 0; i < headerCount; i += 1)
    {
        // if we are building headers on the left, reverse index
        if (start < this.m_startColHeader)
        {
            index = start + headerCount-1-i;
        }
        else
        {
            index = start + i;
        }
        
        col = document.createElement("div");
        col['id'] = this.createSubId("c"+index);
        headerContent = document.createElement("div");
        headerContent['className'] = this.getMappedStyle("headercellcontent");
        col.appendChild(headerContent);             
        // temporarily add to dom
        scroller.appendChild(col);
        
        headerData = headerSet.getData(index);
        headerMetadata = headerSet.getMetadata(index);
        headerContext = this.createHeaderContext("column", index, headerData, headerMetadata, col);

        inlineStyle = this.m_options.getInlineStyle("column", headerContext);
        styleClass = this.m_options.getStyleClass("column", headerContext);  
        
        if (inlineStyle != null)
        {
            col['style']['cssText'] = inlineStyle;
        }
        if (styleClass != null)
        {
            col['className'] = headerClass + " " + styleClass;
        }
        else
        {
            col['className'] = headerClass;
        }

        //check to make sure that column header height is only set once from the options
        if (this.m_colHeaderHeight == null && col['style']['height'] != "") 
        {
            this.m_colHeaderHeight = this.getElementHeight(col);
            this.setElementHeight(headerRoot, this.m_colHeaderHeight);
        }
        //if they change the column height we don't want it effect the cell itself
        if (col['style']['height'] != "")
        {
            col['style']['height'] = '100%';
        }   
        
        //method gets the width and will add it as an inline style to col if it's been modified
        width = this.getColumnWidth(col, headerContext['key']);
        
        //do not put borders on last header cell
        if ((this._isLastColumn(index) && this.getRowHeaderWidth()+currentLeft+width >= this.getWidth()))
        {
            if (dir === 'left')
            {
                col['style']['borderRightStyle'] = 'none';
            }
            else
            {
                col['style']['borderLeftStyle'] = 'none';
            }            
        }                

        // assign left
        if (start < this.m_startColHeader)
        {
            this.setElementDir(col, (currentLeft - width), dir);
        }
        else
        {
            this.setElementDir(col, currentLeft, dir);
        }

        if (this._isHeaderResizeEnabled("column", headerContext))
        {
            col.setAttribute(resizableAttribute, "true");
        }

        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, headerContext);
            if (content != null)
            {
                if (content['parentNode'] === null)
                {
                    headerContent.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    textWrapper = document.createElement("span");
                    textWrapper['className'] = this.getMappedStyle("headercelltext");
                    textWrapper.appendChild(document.createTextNode(content.toString()));
                    headerContent.appendChild(textWrapper);          
                }
            }
        }
        else
        {
            textWrapper = document.createElement("span");
            textWrapper['className'] = this.getMappedStyle("headercelltext");
            textWrapper.appendChild(document.createTextNode(headerData.toString()));
            headerContent.appendChild(textWrapper);                    
        }
        
        // check if we need to render sort icons
        if (this._isSortEnabled("column", headerContext))
        {
            sortIcon = this._buildSortIcon(headerContext);
            col.appendChild(sortIcon);
            col.setAttribute(sortableAttribute, "true");
        }

        if (start < this.m_startColHeader)
        {
            currentLeft = currentLeft - width;
        }
        else
        {
            currentLeft = currentLeft + width;
        }
        totalColWidth = totalColWidth + width;

        if (start < this.m_startColHeader)
        {
            scroller.insertBefore(col, firstHeader);
            firstHeader = col;
        }
        else
        {
            scroller.appendChild(col);
        }
    }

    // whether this is adding columns to the left or right
    if (start < this.m_startColHeader)
    {
        // to the left
        this.m_startColHeader = this.m_startColHeader - headerCount;
        this.m_startColHeaderPixel = this.m_startColHeaderPixel - totalColWidth;
    }
    else
    {
        // to the right
        this.m_endColHeader = this.m_endColHeader + headerCount;
        this.m_endColHeaderPixel = this.m_endColHeaderPixel + totalColWidth;
    }

    if (!headerRoot.hasChildNodes())
    {
        headerRoot.appendChild(scroller);
    }

    // adjust column header canvas size if average width has changed
    if (headerCount > 0)
    {
        avgWidth = totalColWidth / headerCount;
        if (this.m_avgColHeaderWidth == 0 || avgWidth != this.m_avgColHeaderWidth)
        {
            this.m_avgColHeaderWidth = avgWidth;
            this.setElementWidth(scroller, (totalCount * avgWidth));
        }
    }
    
    // stop subsequent fetching if highwatermark scrolling is used and we have reach the last row, flag it.
    if (!this._isCountUnknown("column") && this._isHighWatermarkScrolling() && this.m_endColHeader + 1 >= totalCount)
    {
        this.m_stopColumnHeaderFetch = true;
    }
};

/**
 * Build row headers from the header data and start index.
 * @param {Element} headerRoot - the root element of the row headers
 * @param {Object} headerSet - the header data returned from the data source
 * @param {number} start - the row index that the to start building at
 * @param {string} totalCount - the total number of rows in the table
 * @param {boolean=} rowInsert - if the row headers are being inserted
 */
DvtDataGrid.prototype.buildRowHeaders = function(headerRoot, headerSet, start, totalCount, rowInsert)
{
    var headerCount, scroller, resizer, renderer, isAppend, top, totalRowHeight, 
            fragment, index, i, headerData, headerMetadata, headerContext, row, inlineStyle, height, 
            col, styleClass, prev, resizableAttribute, content, rowHeaderContent, referenceRow, textWrapper, headerContent;

    headerCount = headerSet.getCount();

    // check if this is the first time row header is populated
    if (!headerRoot.hasChildNodes())
    {
        scroller = document.createElement("div");
        scroller['className'] = this.getMappedStyle("scroller") + (this.m_utils.isTouchDevice() ? " " + this.getMappedStyle("scroller-mobile"):"");
                
        if (headerCount == 0)
        {
            //remove any height set inline style and remove class name
            headerRoot['className'] = '';
            this.setElementWidth(headerRoot, 0);
            this.setElementWidth(scroller, 0);
            this.m_stopRowHeaderFetch = true;   
        }
        
        // TODO: remove the resizer div, but need to be careful as logic still takes the resizer into account when walking dom
        resizer = document.createElement("div");
        resizer['style']['display'] = 'none';
        this.setElementWidth(resizer, 1);
        this.setElementHeight(resizer, 0);

        scroller.appendChild(resizer);
    }
    else
    {
        // if unknown count and there's no more row, mark it so we won't try to fetch again
        if (headerCount == 0 && this._isCountUnknown("row"))
        {
            this.m_stopRowHeaderFetch = true;
            return;
        }
        scroller = headerRoot['firstChild'];
        //add class name back if header populated later               
        if (this.m_endRowHeader == -1 && headerRoot['className'] == '')
        {
            headerRoot['className'] = this.getMappedStyle('rowheader') + ' ' + this.getMappedStyle('header');
            headerRoot['style']['width'] = '';            
            scroller['style']['width'] = '';            
        }
        resizer = scroller['firstChild'];
    }

    renderer = this.m_options.getRenderer("row");

    // whether this is adding rows to bottom (append) or top (insert)
    isAppend = start >= this.m_endRowHeader ? true : false;

    if (isAppend)
    {
        top = this.m_endRowHeaderPixel;
    }
    else if (rowInsert)
    {
        rowHeaderContent = headerRoot['firstChild'];
        referenceRow = rowHeaderContent['childNodes'][start-this.m_startRowHeader+1];
        top = this.getElementDir(referenceRow, 'top');
    }
    else 
    {
        top = this.m_startRowHeaderPixel;
    }

    // if total row count is unknown, then calculate it using current count and fetch count
    if (totalCount == -1)
    {
        totalCount = this.m_endRowHeader + headerCount;
    }
        
    resizableAttribute = this.getResources().getMappedAttribute('resizable');
    totalRowHeight = 0;
    fragment = document.createDocumentFragment();
    for (i = 0; i < headerCount; i += 1)
    {
        if (isAppend)
        {
            index = start+i;
        }
        else
        {
            index = start+(headerCount-1-i);
        }

        row = document.createElement("div");
        row['id'] = this.createSubId("r"+index);
        
        col = document.createElement("div");
        headerContent = document.createElement("div");
        headerContent['className'] = this.getMappedStyle("headercellcontent");
        col.appendChild(headerContent);
        row.appendChild(col);

        headerData = headerSet.getData(index);
        headerMetadata = headerSet.getMetadata(index);        
        headerContext = this.createHeaderContext("row", index, headerData, headerMetadata, col);
        
        inlineStyle = this.m_options.getInlineStyle("row", headerContext);
        styleClass = this.m_options.getStyleClass("row", headerContext);

        //add inline styles to the containing row and row header cell
        //todo: remove rows from row header
        if (inlineStyle != null)
        {
            row['style']['cssText'] = inlineStyle;
            col['style']['cssText'] = inlineStyle;
        }
        
        //add class names to the containing row and row header cell
        row['className'] = this.getMappedStyle("row");
        col['className'] = this.getMappedStyle("headercell") + " " +this.getMappedStyle("rowheadercell");
        if (styleClass != null)
        {
            row['className'] += " " + styleClass;
            col['className'] += " " + styleClass;
        }
        
        //check to see that row header width is set only once from the options
        if (this.m_rowHeaderWidth == null && row['style']['width'] != "") {
            this.m_rowHeaderWidth = this.getElementWidth(row);
            this.setElementWidth(headerRoot, this.m_rowHeaderWidth);
        }
        
        //if they change the row header width we don't want it effect the cell itself
        if (row['style']['width'] != "")
        {
            row['style']['width'] = '100%';
        }        

        //todo: once row is removed from wrapping row headers remove this
        if (styleClass != null || col['style']['width'] != "" || col['style']['height'] != "") 
        {
            //need row header cell to fill parent
            col['style']['width'] = '100%';
            col['style']['height'] = '100%';
        }
              
        //find the height in case it depends on the classes, will be set in the appropriate case
        height = this.getRowHeight(row, headerContext['key']);
        
        if (isAppend || rowInsert)
        {
            row['style']['top'] = top + 'px';
            top = top + height;
        } 
        else
        {
            top = top - height;
            row['style']['top'] = top + 'px';
        }        
        
        //do not put bottom border on last row
        if (this._isLastRow(index) && this.getRowBottom(row, top) >= this.getHeight())
        {
            col['style']['borderBottomStyle'] = 'none';
        }

        if (this._isHeaderResizeEnabled("row", headerContext))
        {
            col.setAttribute(resizableAttribute, "true");
        }

        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, headerContext);
            if (content != null)
            {                
                if (content['parentNode'] === null)
                {
                    headerContent.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    textWrapper = document.createElement("span");
                    textWrapper['className'] = this.getMappedStyle("headercelltext");
                    textWrapper.appendChild(document.createTextNode(content.toString()));
                    headerContent.appendChild(textWrapper);                  
                }
            }
        }
        else
        {
            textWrapper = document.createElement("span");
            textWrapper['className'] = this.getMappedStyle("headercelltext");
            textWrapper.appendChild(document.createTextNode(headerData.toString()));
            headerContent.appendChild(textWrapper);      
        }

        if (isAppend)
        {
            fragment.appendChild(row);
        }
        else
        {
            fragment.insertBefore(row, fragment['firstChild']);
        }
        totalRowHeight = totalRowHeight + height;
    }


    if (isAppend && headerCount != 0)
    {
        scroller.appendChild(fragment);
        //if appending a row header, make sure the previous fragment has a bottom border if it was the last
        if (this.m_endRowHeader != -1  && headerCount != 0)
        {
            //get the last header in the scroller, plus 1 for resizer
            prev = scroller['childNodes'][this.m_endRowHeader - this.m_startRowHeader + 1];
            if (prev != null)
            {
                prev['firstChild']['style']['borderBottomStyle'] = '';
            }
        }
        //in case of a long scroll the end should always be the start plus the count - 1 for 0 indexing
        this.m_endRowHeader = start + headerCount - 1;
        this.m_endRowHeaderPixel = this.m_endRowHeaderPixel + totalRowHeight;      
    }
    else if (rowInsert)
    {
        rowHeaderContent.insertBefore(fragment, referenceRow);
        if (start < this.m_startRowHeader)
        {
            // added before the start
            this.m_startRowHeader = start;
            this.m_startRowHeaderPixel = Math.max(0, this.m_startRowHeaderPixel - totalRowHeight);
            
        }
        //update the endRowHeader and endRowheaderPixel no matter where we insert
        this.m_endRowHeader = this.m_endRowHeader + headerCount;

        this.m_endRowHeaderPixel = Math.max(0, this.m_endRowHeaderPixel + totalRowHeight);            
        this.pushRowHeadersDown(referenceRow, totalRowHeight);      
    }
    else
    {
        scroller.insertBefore(fragment, resizer['nextSibling']);  // insert right after the resizer
        this.m_startRowHeader = this.m_startRowHeader - headerCount;
        this.m_startRowHeaderPixel = Math.max(0, this.m_startRowHeaderPixel - totalRowHeight);
    }

    if (!rowInsert)
    {
        headerRoot.appendChild(scroller);
    }

    // stop subsequent fetching if highwatermark scrolling is used and we have reach the last row, flag it.
    if (!this._isCountUnknown("row") && this._isHighWatermarkScrolling() && this.m_endRowHeader + 1 >= totalCount)
    {
        this.m_stopRowHeaderFetch = true;
    }
};

/**
 * Build a scroller div and add scroll listeners  to it
 * @return {Element} the root of the scroller
 */
DvtDataGrid.prototype.buildScroller = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("scroller");
    root['className'] = this.getMappedStyle("scrollers");
    // workaround for mozilla bug 616594, where overflow div would make it focusable
    root['tabIndex'] = '-1';
    if (!root.addEventListener)
    {
        root.attachEvent("onscroll", this.handleScroll.bind(this));
    }
    else
    {
        root.addEventListener("scroll", this.handleScroll.bind(this), false);
    }

    return root;
};

/**
 * Build the databody, fetching cells as well
 * @param {Element} scroller - the root of the scroller element
 * @return {Element} the root of databody
 */
DvtDataGrid.prototype.buildDatabody = function(scroller)
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("databody");
    root['className'] = this.getMappedStyle("databody"); 

    this.fetchCells(root, scroller, 0, 0);

    return root;
};

/**
 * Fetch cells to put in the databody. Calls fetch cells on the data source, 
 * setting callbacks for success and failure.
 * @param {Element} databody - the root of the databody element
 * @param {Element} scroller - the root of the scroller element
 * @param {number} rowStart - the row to start fetching at
 * @param {number} colStart - the column to start fetching at
 * @param {number|null=} rowCount - the total number of rows in the data source, if undefined then calculated
 * @param {number=} colCount - the total number of columns in the data source, if undefined then calculated
 * @param {callbacks=} callbacks - specifies success and error callbacks.  If undefined then default callbacks are used
 * @protected
 */
DvtDataGrid.prototype.fetchCells = function(databody, scroller, rowStart, colStart, rowCount, colCount, callbacks)
{
    var count, rowRange, columnRange, successCallback;

    // checks if we are already fetching cells
    if (!this.m_fetching['cells'])
    {
        this.m_fetching['cells'] = {'row': rowStart, 'column': colStart};
    }
    else
    {
        return;
    }

    if (rowCount == null)
    {
        rowCount = this.getFetchSize("row");

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown("row"))
        {
            // append to end vs. insert to top
            if (rowStart < this.m_startRow)
            {
                rowCount = Math.min(rowCount, this.m_startRow);
            }
            else
            {
                count = this.getDataSource().getCount("row");
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    rowCount = Math.min(rowCount, Math.max(0, count - this.m_endRow));
                }
            }
        }
    }

    if (colCount == null)
    {
        colCount = this.getFetchSize("column");

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown("column"))
        {
            // append to end vs. insert to top
            if (colStart < this.m_startCol)
            {
                colCount = Math.min(colCount, this.m_startCol);
            }
            else
            {
                count = this.getDataSource().getCount("column");
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    colCount = Math.min(colCount, Math.max(0, count - this.m_endCol));
                }
            }
        }
    }

    rowRange = {
        "axis": "row", "start": rowStart, "count": rowCount
    };
    columnRange = {
        "axis": "column", "start": colStart, "count": colCount, "databody": databody, "scroller": scroller
    };
    
    // if there is a override success callback specified, use it, otherwise use default one
    if (callbacks != null && callbacks['success'] != null)
    {
        successCallback = callbacks['success'];
    }
    else
    {
        successCallback = this.handleCellsFetchSuccess;
    }
    
    this.showStatusText();

    this.getDataSource().fetchCells([rowRange, columnRange], {
        "success": successCallback, "error": this.handleHeadersFetchError
    }, {'success': this, 'error': this});
};

/**
 * Checks whether the response matches the current request
 * @param {Object} cellRange the cell range of the response
 * @protected
 */
DvtDataGrid.prototype.isCellFetchResponseValid = function(cellRange)
{
    var rowRange, responseRowStart, columnRange, responseColumnStart, requestCellRanges, requestRowStart, requestColumnStart;

    rowRange = cellRange[0];
    responseRowStart = rowRange['start'];

    columnRange = cellRange[1];
    responseColumnStart = columnRange['start'];

    requestCellRanges = this.m_fetching['cells'];
    requestRowStart = requestCellRanges['row'];
    requestColumnStart = requestCellRanges['column'];

    // note we are not checking size since the actual return size might be different
    // then the request size (ex, no more rows)
    return (requestRowStart == responseRowStart && requestColumnStart == responseColumnStart);    
};

/**
 * Returns true if this is a long scroll (or initial scroll)
 * @return {boolean} true if it is a long or initial scroll, false otherwise
 */
DvtDataGrid.prototype.isLongScroll = function()
{
    return (this.m_startRowPixel == this.m_endRowPixel && this.m_startColPixel == this.m_endColPixel);
};

/**
 * Checks whether the result is within the current viewport
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @private
 */
DvtDataGrid.prototype.isCellFetchResponseInViewport = function(cellSet, cellRange)
{
    var rowRange, rowStart, rowEnd, columnRange, columnStart, columnEnd, rowStartPixel, rowEndPixel,
        columnStartPixel, columnEndPixel, viewportTop, viewportBottom, viewportLeft, viewportRight, rowCount, columnCount;

    if (isNaN(this.m_avgRowHeight) || isNaN(this.m_avgColWidth))
    {
        // initial scroll these are not defined so just return true
        return true;
    }

    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");
    rowEnd = rowStart + rowCount;

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");
    columnEnd = columnStart + columnCount;

    // calculate the bound covered by the cellset
    rowStartPixel = this.m_avgRowHeight * rowStart;
    rowEndPixel = this.m_avgRowHeight * rowEnd;
    columnStartPixel = this.m_avgColWidth * columnStart;    
    columnEndPixel = this.m_avgColWidth * columnEnd;    

    // the viewport bounds, take databody width/height to account for scrollbar, header, border
    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);
    viewportLeft = this.m_currentScrollLeft;
    viewportRight = this.m_currentScrollLeft + this.getElementWidth(this.m_databody);
    
    // if the all the rows and all the columns are fetched then obviously it
    // will be within the viewport
    if (!this._isCountUnknown('row') && this.getDataSource().getCount('row') == rowCount && rowEndPixel < viewportBottom)
    {
        // adjust the rowEndPixel so that it will pass the condition
        rowEndPixel = viewportBottom; 
    }

    if (!this._isCountUnknown('column') && this.getDataSource().getCount('column') == columnCount && columnEndPixel < viewportRight)
    {
        // adjust the columnEndPixel so that it will pass the condition
        columnEndPixel = viewportRight; 
    }
    
    // return true if the viewport fits inside the fetched range
    return (viewportTop >= rowStartPixel && viewportBottom <= rowEndPixel && viewportLeft >= columnStartPixel && viewportRight <= columnEndPixel);
};

/**
 * Determine whether the row/cell is draggable.
 * @return {boolean} true if the row/cell is draggable, false otherwise.
 * @protected
 */
DvtDataGrid.prototype.isDraggable = function()
{
    return false;
};

/**
 * Handle a successful call to the data source fetchCells. Create new row and 
 * cell DOM elements when necessary and then insert them into the databody.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @param {boolean} rowInsert - if this is triggered by a row insert event
 * @param {boolean=} obj
 * @protected
 */
DvtDataGrid.prototype.handleCellsFetchSuccess = function(cellSet, cellRange, rowInsert, obj) //vvc10
{
    var totalRowCount, totalColumnCount, defaultHeight, rowRange, rowStart, rowCount,
            rowRangeNeedsUpdate, columnRange, columnStart, columnCount, columnRangeNeedsUpdate,
            databody, top, referenceRow, scroller, inner, databodyContent, resizer, 
            isAppend, fragment, totalRowHeight, i, avgHeight, avgWidth, duration, self, //vvc9          
            rows, totalColumnWidth, prev, addResult, topHotspot, bottomHotspot; 
    totalRowCount = this.getDataSource().getCount("row");
    totalColumnCount = this.getDataSource().getCount("column");

    self = this;                                        //vvc9
    duration = DvtDataGrid.EXPAND_ANIMATION_DURATION;
    
    // if rowInsert is specified we can skip a couple of checks
    if (rowInsert === undefined)
    {
        rowInsert = false;

        // checks whether result matches what we requested
        if (!this.isCellFetchResponseValid(cellRange))
        {
            // ignore result if it is not valid
            return;
        }

        // checks if the response covers the viewport
        if (this.isLongScroll() && !this.isCellFetchResponseInViewport(cellSet, cellRange))
        {
            // clear cells fetching flag
            this.m_fetching['cells'] = false;

            // only start fetching again when the mouse has been released (note the flag is only set on mouse down)
            if (!this.m_captureScrolling)
            {
                // ignore the response and fetch another set for the current viewport
                this.handleLongScroll(this.m_currentScrollLeft, this.m_currentScrollTop);
            }
            return;
        }
    }

    defaultHeight = this.getDefaultRowHeight();

    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");

    // for short fetch it would be equal for long fetch it would be > (bottom) or < (top)
    rowRangeNeedsUpdate = rowCount > 0 && (rowStart > this.m_endRow || rowStart + rowCount <= this.m_startRow);

    // if no results returned and count is unknown, flag it so we won't try to fetch again
    // OR if highwater mark scrolling is used and count is known and we have reach the last row, stop fetching
    // OR if result set is less than what's requested, then assumes we have fetched the last row
    if ((rowCount == 0 && this._isCountUnknown('row') && rowRange['count'] > 0) ||
        (rowRangeNeedsUpdate && this._isHighWatermarkScrolling() && !this._isCountUnknown('row') && (this.m_endRow + rowCount + 1 >= totalRowCount)) ||
        (rowCount < rowRange['count']))
    {
        this.m_stopRowFetch = true;
    }

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");

    columnRangeNeedsUpdate = columnCount > 0 && (columnStart == (this.m_endCol + 1) || columnStart + columnCount == this.m_startCol);
    
    // if no results returned and count is unknown, flag it so we won't try to fetch again
    // OR if highwater mark scrolling is used and count is known and we have reach the last column, stop fetching
    // OR if result set is less than what's requested, then assumes we have fetched the last column
    if ((columnCount == 0 && this._isCountUnknown('column') && columnRange['count'] > 0) ||
        (columnRangeNeedsUpdate && this._isHighWatermarkScrolling() && !this._isCountUnknown('column') && (this.m_endCol + columnCount + 1 >= totalColumnCount)) ||
        (columnCount < columnRange['count']))
    {
        this.m_stopColumnFetch = true;
    }
    
    databody = this.m_databody;
    if (databody == null)
    {
        // try to search for it in the param
        databody = columnRange['databody'];
    }

    scroller = this.m_scroller;
    if (scroller == null)
    {
        // try to search for it in the param
        scroller = columnRange['scroller'];
    }

    // complete the structure of scroller if it does not exists yet
    if (!scroller.hasChildNodes())
    {
        inner = document.createElement("div");
        scroller.appendChild(inner);
    }
    else
    {
        inner = scroller['firstChild'];
    }

    if (!databody.hasChildNodes())
    {
        // first time databody is constructed
        databodyContent = document.createElement("div");
        databodyContent['className'] = this.getMappedStyle("scroller") + (this.m_utils.isTouchDevice() ? " " +this.getMappedStyle("scroller-mobile"):"");

        // TODO: remove the resizer div, but need to be careful as logic still takes the resizer into account when walking dom
        resizer = document.createElement("div");
        resizer['style']['display'] = 'none';
        this.setElementWidth(resizer, 1);
        this.setElementHeight(resizer, 0);

        databodyContent.appendChild(resizer);
    }
    else
    {
        databodyContent = databody['firstChild'];
        resizer = databodyContent['firstChild'];
    }

    // if these are new rows (append or insert in the middle)
    if (rowRangeNeedsUpdate || rowInsert)
    {
        // whether this is adding rows to bottom (append) or top (insert)
        isAppend = !rowInsert && rowStart >= this.m_startRow ? true : false;

        if (isAppend)
        {
            top = this.m_endRowPixel;
        }
        else
        {
            if (rowInsert)
            {
                referenceRow = databodyContent['childNodes'][rowStart-this.m_startRow+1];  
                top = this.getElementDir(referenceRow,'top');
            }
            else
            {
                top = this.m_startRowPixel;
            }
        }

        fragment = document.createDocumentFragment();
        addResult = this._addRows(fragment, (isAppend || rowInsert), top, rowStart, rowCount, columnStart, columnRangeNeedsUpdate, cellSet);
        totalRowHeight = addResult['totalRowHeight'];
        avgWidth = addResult['avgWidth'];
        avgHeight = totalRowHeight / rowCount;

        if (isAppend)
        {
            databodyContent.appendChild(fragment);
            // make sure there is a bottom border if adding a row to the bottom
            if (this.m_endRow != -1  && rowCount !=0)
            {
                //get the previous last row plus 1 for resizer
                prev = databodyContent['childNodes'][this.m_endRow - this.m_startRow + 1];
                if (prev != null)
                {    
                    prev = prev['childNodes'];
                    for (i = 0; i < prev.length; i+=1)
                    {
                        prev[i]['style']['borderBottomStyle'] = '';
                    }
                }
            }
            // update row range info if neccessary
            this.m_endRow = rowStart + rowCount - 1;
            this.m_endRowPixel = this.m_endRowPixel + totalRowHeight;

            // initial fetch case where databody is empty
            if (!databody.hasChildNodes())
            {
                databody.appendChild(databodyContent);

                if (this.isDraggable())
                {
                    // these are hotspots for autoscroll when dnd happens
                    topHotspot = document.createElement("div");
                    bottomHotspot = document.createElement("div");
                    databody.appendChild(topHotspot);
                    databody.appendChild(bottomHotspot);
                }
            }
        }
        else if (rowInsert)
        {
            if(obj && obj == true) //vvc10
            {
                this._insertRowsWithAnimation(databodyContent, fragment, referenceRow, rowStart, avgHeight, duration, 'ease-out');
            }
            // find the row in which the new row will be inserted
            else
            {
                databodyContent.insertBefore(fragment, referenceRow);
            }

            // update row range info if neccessary
            if (rowStart < this.m_startRow)
            {
                // added in the middle
                this.m_startRow = rowStart;
                this.m_startRowPixel = Math.max(0, this.m_startRowPixel - totalRowHeight);
            }
            //update the endRow and endRowPixel no matter where we insert            
            this.m_endRow = this.m_endRow + rowCount;
            this.m_endRowPixel = this.m_endRowPixel + totalRowHeight;                
            if(!obj) //vvc10
            {            
                this.pushRowsDown(referenceRow, totalRowHeight);                      
            }
            //down animation of the rest of rows in the grid (below clicked row)
            else 
            {
                if (totalRowCount != -1 && !this._isHighWatermarkScrolling()) 
                {
                    this.setElementHeight(this.m_databody, totalRowCount * avgHeight);
                }
                else
                {
                    this.setElementHeight(this.m_databody, this.m_endRowPixel);
                }            
                this.pushRowsDownWithAnimation(referenceRow, totalRowHeight, duration+30, 0, 'ease-out');
            }            
        }
        else
        {            
            databodyContent.insertBefore(fragment, resizer['nextSibling']);

            // update row range info if neccessary
            this.m_startRow = this.m_startRow - rowCount;
            this.m_startRowPixel = Math.max(0, this.m_startRowPixel - totalRowHeight);
        }
    }
    else if (columnRangeNeedsUpdate)
    {
        // no new rows, but new columns
        rows = databodyContent['childNodes'];
        // assert number of rows is the same as what's in the databody
        if (rowCount == rows.length - 1)
        {
            avgWidth = this._addColumns(rows, rowStart, rowCount, columnStart, cellSet);
        }
    }
    
    // if the total row count is unknown, then calculate it based on the current height and the added row height
    if (totalColumnCount != -1 && !this._isHighWatermarkScrolling())
    {
        totalColumnWidth = totalColumnCount * avgWidth;
    }
    else
    {
        totalColumnWidth = this.m_endColPixel;
    }
    // added to only do this on initialization
    // check to see if the average width and height has change and update the canvas and the scroller accordingly
    if (avgWidth != undefined && (this.m_avgColWidth == 0 || this.m_avgColWidth == undefined))
    {
        // the average column width should only be set once, it will only change when the column width varies between columns, but
        // in such case the new average column width would not be any more precise than previous one.
        this.m_avgColWidth = avgWidth;
        this.setElementWidth(databodyContent, totalColumnWidth);
        this.setElementWidth(inner, totalColumnWidth);
    }
    // if count is unknown, we'll need to update canvas if content is added
    else if ((totalColumnCount == -1 || this._isHighWatermarkScrolling()) && totalColumnWidth > this.getElementWidth(databodyContent))
    {
        this.setElementWidth(databodyContent, totalColumnWidth);
        this.setElementWidth(inner, totalColumnWidth);
    }

    // if the total row count is unknown, then calculate it based on the current height and the added row height
    if (totalRowCount != -1 && !this._isHighWatermarkScrolling())
    {
        totalRowHeight = totalRowCount * avgHeight;
    }
    else
    {
        totalRowHeight = this.m_endRowPixel;
    }
    
    if (avgHeight != undefined && (this.m_avgRowHeight == 0 || this.m_avgRowHeight == undefined))
    {
        // the average row height should only be set once, it will only change when the row height varies between rows, but
        // in such case the new average row height would not be any more precise than previous one.
        this.m_avgRowHeight = avgHeight;
        this.setElementHeight(databodyContent, totalRowHeight);
        this.setElementHeight(inner, totalRowHeight);
    }
    else if (((totalRowCount == -1 || this._isHighWatermarkScrolling()) && totalRowHeight > this.getElementHeight(databodyContent)) || (totalRowCount * avgHeight != this.getElementHeight(databodyContent)))
    {
        // in the insert case or unknown row count case
        this.setElementHeight(databodyContent, totalRowHeight);
        this.setElementHeight(inner, totalRowHeight);
    }

    // update column range info if neccessary
    if (columnRangeNeedsUpdate)
    {
        // add to left or to right
        if (columnStart < this.m_startCol)
        {
            this.m_startCol = this.m_startCol - columnCount;
        }
        else
        {
            this.m_endCol = this.m_endCol + columnCount;
        }
    }

    // fetch is done
    this.m_fetching['cells'] = false;

    if (this.m_initialized)
    {
        // check if we need to sync header and databody scroll position
        this._syncScroller();
    }

    // size the grid if fetch is done
    if (this.isFetchComplete())
    {
        this.hideStatusText();
        if (!this.m_initialized)
        {            
            this.resizeGrid();
            if (!rowInsert)
            {
                this.setInitialScrollPosition();
            }
        } 
        else if (this._isScrollerContentOutOfSync() || 
                //the case where a delete brought down the size of the databody and the fillViewport made it larger than the scroller again
                (this.m_endRowHeaderPixel > this.getElementHeight(databody) && this.getElementHeight(this.m_scroller) > this.getElementHeight(databody)))
        {
            this.resizeGrid();
        }
            
        // highlight focus cell or header if specified
        if (this.m_scrollIndexAfterFetch != null)
        {
            this.scrollToIndex(this.m_scrollIndexAfterFetch);
            if (this._isInViewport(this.m_scrollIndexAfterFetch) === DvtDataGrid.INSIDE)
            {
                // if it is a header index
                if (this.m_activeHeader != null)
                {
                    if (this.m_activeHeader['axis'] === 'row')
                    {
                        this._focusRowHeader(this.m_scrollIndexAfterFetch['row']);
                    }
                    else if (this.m_activeHeader['axis'] === 'column')
                    {
                        this._focusColumnHeader(this.m_scrollIndexAfterFetch['column']);
                    }
                }
                else
                {
                    if (this.m_active != null &&
                        this.m_scrollIndexAfterFetch['row'] == this.m_active['row'] &&
                        this.m_scrollIndexAfterFetch['column'] == this.m_active['column'])
                    {
                        this.highlightActive();
                    }
                    //should be able to scroll to index without highlighting it
                }
                this.m_scrollIndexAfterFetch = null;
            }
        }
        else
        {
            //highliht the active cell if we are virtualized scroll and scrolled away from the active and came back
            this.highlightActive();
        }

        // apply current selection range to newly fetched cells
        // this is more efficient than looping over ranges when rendering cell
        if (this._isSelectionEnabled())
        {
            // todo: applySelection requires m_databody be populated
            if (this.m_databody == null)
            {
                this.m_databody = databody;
            }
            this.applySelection(rowStart, rowStart + rowCount, columnStart, columnStart + columnCount);
        }

        // update accessibility info
        this.populateAccInfo();
    }

    //this.dumpRanges();
};

/**
 * Insert rows with animation.
 * @param {Element} databodyContent
 * @param {Element} fragment
 * @param {Element} referenceRow the starting row to insert.
 * @param {Element} rowStart the starting row index
 * @param {number} avgHeight
 * @param {number} duration animation duration.
 * @param {string} timing easy function name.
 * @private
 */
DvtDataGrid.prototype._insertRowsWithAnimation = function(databodyContent, fragment, referenceRow, rowStart, avgHeight, duration, timing) //vvc9
{
    var i, j, jk, shift, tops, beforeCount, startRowIdx, self,
        transition_duration, z_index, transition_timing, transform;
    
    startRowIdx = rowStart-this.m_startRow;
    beforeCount = startRowIdx+fragment.childNodes.length;
    shift = avgHeight*fragment.childNodes.length;             
    tops = [];
    self = this;
            
    //the clicked row should be on the top
    this.changeStyleProperty(databodyContent['childNodes'][startRowIdx], this.getCssSupport('z-index'), 1000);
    //collect style's top values for all new rows into array for future use (offestTop values are not available)
    for(j=0; j < fragment.childNodes.length; j++){
        tops.push(fragment.childNodes[j].style.top.split('px')[0]-(startRowIdx-1)*avgHeight);
    }           
    //move all new rows under under clicked row
    for(jk=0; jk < fragment.childNodes.length; jk++){
        this.addUpDownMoveStyle(fragment.childNodes[jk], 0, 0, 'linear', '-'+tops[jk]);
    }

    // find the row in which the new rows will be inserted and insert 
    databodyContent.insertBefore(fragment, referenceRow);
                
    setTimeout(function()
    {    
        //add animation rules to the inserted rows
        for(j=startRowIdx; j <= beforeCount; j++){
            self.addUpDownMoveStyle(databodyContent.childNodes[j], duration + "ms", 0, timing, 0);
        }            
        //add 'transition end' event listener to the last inserted row to clean all required style values as a final step of animation
        databodyContent.childNodes[beforeCount].addEventListener('transitionend', function() 
        {        
            transition_duration = self.getCssSupport('transition-duration');
            z_index = self.getCssSupport('z-index'); 
            transition_timing = self.getCssSupport('transition-timing-function'); 
            transform = self.getCssSupport('transform');
            for (i = 1; i < databodyContent.childElementCount; i++)
            {
                if(databodyContent.children[i].style[self.getCssSupport('transform')])
                {
                    self.changeStyleProperty(databodyContent['childNodes'][startRowIdx], z_index, 0, "remove");
                    self.changeStyleProperty(databodyContent.childNodes[i], transition_duration, 0, "remove");
                    self.changeStyleProperty(databodyContent.childNodes[i], transition_timing, 'linear', "remove");
                    self.changeStyleProperty(databodyContent.childNodes[i], transform, 0, "remove");
                    //Note: Avoid using arguments.callee() by either giving function expressions a name or use a function declaration where a function must call itself.
                    this.removeEventListener('transitionend',arguments.callee,false);
                }
            }
            //and assign the right top values instead
            self.pushRowsDown(referenceRow, shift);
        }, false);
    }, 0);
};

/**
 * Push the row and all of its next siblings down with animation.
 * @param {Element} row the starting row to push down.
 * @param {number} adjustment the amount in pixel to push down.
 * @param {number} duration the length of the animation in ms
 * @param {number} delay the delay of the animation in ms
 * @param {number} easing the easing function
 * @private
 */
DvtDataGrid.prototype.pushRowsDownWithAnimation = function(row, adjustment, duration, delay, easing) //vvc9 expand animation
{
    while (row)
    {
        this.addUpDownMoveStyle(row, duration + "ms", delay + "ms", easing, adjustment);
        row = row['nextSibling'];
    }
};

/**
 * Add columns to existing rows.
 * @param {Array} rows an array of existing row elements
 * @param {integer} rowStart the start row index of the cell set
 * @param {integer} rowCount the row count of the cell set
 * @param {integer} columnStart the start row index of the cell set
 * @param {Object} cellSet the result cell set from fetch operation
 * @return {number} the average width of the columns 
 * @private
 */
DvtDataGrid.prototype._addColumns = function(rows, rowStart, rowCount, columnStart, cellSet)
{
    var renderer, columnBandingInterval, horizontalGridlines, verticalGridlines, row, avgWidth, i;

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    horizontalGridlines = this.m_options.getHorizontalGridlines();
    verticalGridlines = this.m_options.getVerticalGridlines();

    for (i = 0; i < rowCount; i += 1)
    {
        // skip the first one which is a resizer
        row = rows[i + 1];

        // add the cells into existing row
        avgWidth = this.addCellsToRow(cellSet, row, rowStart + i, renderer, false, columnStart, (i == rowCount - 1), columnBandingInterval, horizontalGridlines, verticalGridlines);
    }

    return avgWidth;
};

/**
 * Add rows to the specified document element.
 * @param {Element} fragment the element in which the rows are added to
 * @param {boolean} isAppendOrInsert true if this is insert row to bottom or in the middle
 * @param {integer} top the top pixel position of the first row to be add
 * @param {integer} rowStart the start row index of the cell set
 * @param {integer} rowCount the row count of the cell set
 * @param {integer} columnStart the start row index of the cell set
 * @param {boolean} columnRangeNeedsUpdate true if column range needs update, false otherwise
 * @param {Object} cellSet the result cell set from fetch operation
 * @return {integer} the total row height
 * @private
 */
DvtDataGrid.prototype._addRows = function(fragment, isAppendOrInsert, top, rowStart, rowCount, columnStart, columnRangeNeedsUpdate, cellSet)
{
    var renderer, columnBandingInterval, rowBandingInterval, horizontalGridlines, verticalGridlines, row, 
            avgWidth, totalRowHeight, index, height, i, shimHeaderContext, inlineStyle, styleClass;

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    rowBandingInterval = this.m_options.getRowBandingInterval();
    horizontalGridlines = this.m_options.getHorizontalGridlines();
    verticalGridlines = this.m_options.getVerticalGridlines();

    totalRowHeight = 0;
    for (i = 0; i < rowCount; i += 1)
    {
        if (isAppendOrInsert)
        {
            index = rowStart + i;
        }
        else
        {
            index = rowStart + (rowCount-1-i);
        }
        row = document.createElement("div");

        // add the cells into the new row
        avgWidth = this.addCellsToRow(cellSet, row, index, renderer, true, columnStart, (i == rowCount - 1 && columnRangeNeedsUpdate), columnBandingInterval, horizontalGridlines, verticalGridlines, top + this.getDefaultRowHeight());
        
        //if there's no headers, check to make sure we get the row height correct, 
        //by getting it from the row header options, should happen once per row
        if (this.m_endRowHeader == -1)
        {
            shimHeaderContext = this.createHeaderContext('row', index, null, {'key':this._getKey(row)}, null);        
            inlineStyle = this.m_options.getInlineStyle('row', shimHeaderContext);
            styleClass = this.m_options.getStyleClass('row', shimHeaderContext);
            row['style']['cssText'] = inlineStyle;
            row['className'] = this.getMappedStyle('row') + ' ' + styleClass;
            //sets height in the sizing manager if necessary
            this.getRowHeight(row, this._getKey(row));
            row['style']['cssText'] = '';
            row['className'] = '';        
        }        

        
        //set the approriate class name back
        row['className'] = this.getMappedStyle("row");
        if ((Math.floor(index / rowBandingInterval) % 2 === 1))
        {
            row['className'] += " " + this.getMappedStyle("banded");
        }  
        
        height = this.getRowHeight(row, this._getKey(row));
        totalRowHeight = totalRowHeight + height;

        if (isAppendOrInsert)
        {
            row['style']['top'] = top + 'px';
            top = top + height;
            fragment.appendChild(row);
        }
        else
        {
            top = top - height;
            row['style']['top'] = top + 'px';
            fragment.insertBefore(row, fragment['firstChild']);
        }
    }

    return {"avgWidth": avgWidth, "totalRowHeight": totalRowHeight, "top": top};
};

/**
 * Returns true if the scroller dimension is out of sync with the databody content.
 * In which case we'll need to call ResizeGrid to re-layout the grid.
 * @return {boolean} true if the scroller dimension is out of sync with the databody content, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isScrollerContentOutOfSync = function()
{
    var scrollerHeight, scrollerWidth, scrollerContent, scrollerContentHeight, scrollerContentWidth;

    // if scroller is not built yet just return false
    if (this.m_scroller == null)
    {
        return false;
    }

    scrollerHeight = this.getElementHeight(this.m_scroller);
    scrollerWidth = this.getElementWidth(this.m_scroller);
    scrollerContent = this.m_scroller['firstChild'];
    scrollerContentHeight = this.getElementHeight(scrollerContent);
    scrollerContentWidth = this.getElementWidth(scrollerContent);

    // if the content height is greater than scroller height but there's no vertical scrollbar or
    // if the content width is greater than scroller width but there's no horizontal scrollbar
    if ((this.m_endRowPixel > scrollerHeight && scrollerWidth == scrollerContentWidth) ||
        (this.m_endColPixel > scrollerWidth && scrollerHeight == scrollerContentHeight))
    {
        return true;
    }

    return false;
};

/**
 * Push the row and all of its next siblings down.
 * @param {Element} row the starting row to push down.
 * @param {number} adjustment the amount in pixel to push down.
 * @private
 */
DvtDataGrid.prototype.pushRowsDown = function(row, adjustment)
{
    while (row)
    {
        var top = this.getElementDir(row,'top') + adjustment;
        row['style']['top'] = top + 'px';
        row = row['nextSibling'];
    }
};

/**
 * Push the row header and all of its next siblings up.
 * @param {Element} row the starting row to push up.
 * @param {number} adjustment the amount in pixel to push up.
 * @private
 */
DvtDataGrid.prototype.pushRowsUp = function(row, adjustment)
{
    this.pushRowsDown(row, -adjustment);
};

/**
 * Push the row header and all of its next siblings down.
 * @param {Element} rowHeader the starting rowHeader to push down.
 * @param {number} adjustment the amount in pixel to push down.
 * @private
 */
DvtDataGrid.prototype.pushRowHeadersDown = function(rowHeader, adjustment)
{
    while (rowHeader)
    {
        var top = this.getElementDir(rowHeader, 'top') + adjustment;
        rowHeader['style']['top'] = top + 'px';
        rowHeader = rowHeader['nextSibling'];
    }
};

/**
 * Push the row and all of its next siblings up.
 * @param {Element} rowHeader the starting rowHeader to push up.
 * @param {number} adjustment the amount in pixel to push up.
 * @private
 */
DvtDataGrid.prototype.pushRowHeadersUp = function(rowHeader, adjustment)
{
    this.pushRowsDown(rowHeader, -adjustment);
};

/**
 * Handle an unsuccessful call to the data source fetchCells 
 * @param {Error} error - the error returned from the data source
 * @param {Object} cellRanges
 */
DvtDataGrid.prototype.handleCellsFetchError = function(error, cellRanges)
{
};

/**
 * Build a cell context object for a cell and return it
 * @param {object} indexes - the row and column index of the cell
 * @param {Object} data - the data the cell contains
 * @param {Object} metadata - the metadata the cell contains
 * @param {Element} elem - the cell element
 * @return {Object} the cell context object, keys of {indexes,data,keys,datagrid}
 */
DvtDataGrid.prototype.createCellContext = function(indexes, data, metadata, elem)
{
    var cellContext, prop;
    
    cellContext = {
    };
    //set the parent to the cell content div
    cellContext['parentElement'] = elem['firstChild'];
    cellContext['indexes'] = indexes;
    cellContext['data'] = data;
    cellContext['component'] = this;
    cellContext['datasource'] = this.getDataSource();

    // merge properties from metadata into cell context
    // the properties in metadata would have precedence
    for (prop in metadata) 
    {
        if (metadata.hasOwnProperty(prop)) 
        {
            cellContext[prop] = metadata[prop];   
        }
    }

    // invoke callback to allow ojDataGrid to change datagrid reference
    if (this.m_createContextCallback != null)
    {
        this.m_createContextCallback.call(this, cellContext);
    }

    return cellContext;
};

/**
 * Creates the cell element
 * @param {Object} metadata the metadata for the cell
 * @protected
 */
DvtDataGrid.prototype.createCellElement = function(metadata)
{
    return document.createElement("div");
};

/**
 * Gets the width of the row header
 * @return {number} the width of the row header in pixel.
 * @protected
 */
DvtDataGrid.prototype.getRowHeaderWidth = function()
{
    if (this.m_endRowHeader === -1)
    {
        // check if there's no row header 
        return 0;
    }
    else if (this.m_rowHeaderWidth != null)
    {
        // if custom row header width is specified        
        return this.m_rowHeaderWidth;
    }
    if (this.m_defaultColumnHeaderCellHeight == null)
    {
       this.setDefaultDimensions();
    }
    return this.m_defaultRowHeaderWidth;
};

/**
 * Gets the height of the column header
 * @return {number} the height of the column header in pixel.
 * @protected
 */
DvtDataGrid.prototype.getColumnHeaderHeight = function()
{
    if (this.m_endColHeader === -1)
    {
        // check if there's no column header 
        return 0;
    }
    else if (this.m_colHeaderHeight != null)
    {
        // if custom column header height is specified
        return this.m_colHeaderHeight;
    }  
    if (this.m_defaultColumnHeaderHeight == null)
    {
       this.setDefaultDimensions();
    }
    return this.m_defaultColumnHeaderHeight;
};

/**
 * Gets the bottom value relative to the datagrid in pixel.
 * @param {Element} row the row element
 * @param {number} bottom the bottom value in pixel relative to the databody
 * @return {number} the bottom value relative to the datagrid in pixels.
 * @private
 */
DvtDataGrid.prototype.getRowBottom = function(row, bottom)
{
    var colHeaderHeight, top, height;

    // gets the height of the column header, if any
    colHeaderHeight = this.getColumnHeaderHeight();    
    // if a bottom value is specified use that
    if (bottom != null)
    {
        return colHeaderHeight + bottom;
    }
    else
    {
        // otherwise try find it from the row element
        top = this.getElementDir(row, 'top');
        height = this.calculateRowHeight(row);
        if (!isNaN(top) && !isNaN(height))
        {
            return colHeaderHeight + top + height;
        }
    }

    return colHeaderHeight;
};

/**
 * Adds cells to a row. Iterate over the cells passed in, create new div elements 
 * for them settign appropriate styles, and append or prepend them to the row based on the start column.
 * @param {Object} cellSet - the result set of cell data
 * @param {Element} row - the row element to add cells to
 * @param {number} rowIndex - the index of the row element
 * @param {function(Object)} renderer - the cell renderer
 * @param {boolean} isRowFetch - true if we fetched this row
 * @param {number} columnStart - the index to start start adding at
 * @param {boolean} updateColumnRangeInfo - true if we want to return average width
 * @param {number} columnBandingInterval - the column banding interval
 * @param {boolean} horizontalGridlines - true if horizontal lines visible
 * @param {boolean} verticalGridlines - true if vertical lines visible
 * @param {number=} bottom - the bottom of the last row in databody in pixels
 * @return {number|null} the average width if updateColumnRange is true, otherwise return nothing
 */
DvtDataGrid.prototype.addCellsToRow = function(cellSet, row, rowIndex, renderer, isRowFetch, columnStart, updateColumnRangeInfo, columnBandingInterval, horizontalGridlines, verticalGridlines, bottom)
{
    var isAppend, cellContent, firstColumn, inlineStyleClass, cellStyleClass, currentLeft, dir, totalWidth, columnCount, indexes, 
            cellData, cellMetadata, cellContext, j, cell, inlineStyle, width, content, columnIndex, keyAttribute, selectionAffordanceAppend, 
            textWrapper, shimHeaderContext, styleClass;
    // appending columns to the right? todo: > or >=
    isAppend = (columnStart >= this.m_startCol);

    firstColumn = row['firstChild'];

    // if this is new row fetch or not appending column
    if (isRowFetch || !isAppend)
    {
        currentLeft = this.m_startColPixel;
    }
    else
    {
        currentLeft = this.m_endColPixel;
    }
    
    //if on a  touch device and the row has the selection icons in it, want to insert the cells before the selection affordances (there can be one or two per row)
    if (this.m_utils.isTouchDevice())
    {
        if (this.m_utils.containsCSSClassName(row['lastChild'], this.getMappedStyle('toucharea')))
        {
            if (this.m_utils.containsCSSClassName(row['children'][row['children']['length'] - 2], this.getMappedStyle('toucharea')))
            {
                selectionAffordanceAppend = row['children'][row['children']['length'] - 2];
            }
            else
            {
                selectionAffordanceAppend = row['lastChild'];
            }
        }
    }   
    keyAttribute = this.getResources().getMappedAttribute('key');
    dir = this.getResources().isRTLMode() ? "right" : "left";
    totalWidth = 0;
    columnCount = cellSet.getCount("column");
    for (j = 0; j < columnCount; j += 1)
    {
        if (isAppend || isRowFetch)
        {
            columnIndex = columnStart + j;
        }
        else
        {
            columnIndex = columnStart + (columnCount - 1 - j);
        }
        
        indexes = {"row": rowIndex, "column": columnIndex};
        cellData = cellSet.getData(indexes);
        cellMetadata = cellSet.getMetadata(indexes);

        cell = this.createCellElement(cellMetadata);
        cell.setAttribute("tabIndex", -1);
        
        cellContent = document.createElement("div");
        cellContent['className'] = this.getMappedStyle("cellcontent");
        cell.appendChild(cellContent);

        cellContext = this.createCellContext(indexes, cellData, cellMetadata, cell);

        // cache the row key if not done already
        if (!row.hasAttribute(keyAttribute))
        {
            row.setAttribute(keyAttribute, cellContext['keys']['row']);
        }
        
        //even before the inline style get any width from the column header style even if there are no headers
        //in the case of no headers this gets called everytime, so added rowIndex=0 to make sure it's only the first time
        if (this.m_endColHeader == -1 && rowIndex == 0 && !this.m_initialized)
        {
            shimHeaderContext = this.createHeaderContext('column', columnIndex, null, {'key':cellContext['keys']['column']}, null);        
            inlineStyle = this.m_options.getInlineStyle('column', shimHeaderContext);        
            styleClass = this.m_options.getStyleClass('column', shimHeaderContext);        
            cell['style']['cssText'] = inlineStyle;            
            cell['className'] = this.getMappedStyle('colheadercell') + ' ' + this.getMappedStyle('headercell') + ' ' + styleClass;
            //will set it in the sizing manager so the cells can fetch it
            this.getColumnWidth(cell, cellContext['keys']['column']);
            cell['style']['cssText'] = '';
            cell['className'] = '';
        }
        
        //before setting our own styles, else we will overwrite them
        inlineStyle = this.m_options.getInlineStyle("cell", cellContext);
        if (inlineStyle != null)
        {
            cell['style']['cssText'] = inlineStyle;
        }
        
        //don't want developer setting height or width through inline styles on cell
        //should be done through header styles, or through the stylesheet
        if (cell['style']['height'] != '')
        {
            cell['style']['height'] = '';
        }
        if (cell['style']['width'] != '')
        {
            cell['style']['width'] = '';
        }        
        
        //determine if the newly fetched row should be banded
        if ((Math.floor(columnIndex / columnBandingInterval) % 2 === 1))
        {
            cellStyleClass = this.getMappedStyle("cell") + " " + this.getMappedStyle("banded");
        }
        else
        {
            cellStyleClass = this.getMappedStyle("cell");       
        }
        inlineStyleClass = this.m_options.getStyleClass("cell", cellContext);
        if (inlineStyleClass != null)
        {
            cell['className'] = cellStyleClass + " " + inlineStyleClass;
        }
        else
        {
            cell['className'] = cellStyleClass;            
        }
       
        // get width after class name and inline style set but before content set
        width = this.getColumnWidth(cell, cellContext['keys']['column']);
        
        //do not put borders on far edge column, edge row, turn off gridlines
        if (verticalGridlines === 'hidden' || (this._isLastColumn(columnIndex) && this.getRowHeaderWidth()+currentLeft+width >= this.getWidth()))
        {
            if (dir === 'left')
            {
                cell['style']['borderRightStyle'] = 'none';
            }
            else
            {
                cell['style']['borderLeftStyle'] = 'none';
            }
        }

        if (horizontalGridlines === 'hidden'|| (this._isLastRow(rowIndex) && this.getRowBottom(row, bottom) >= this.getHeight()))
        {
            cell['style']['borderBottomStyle'] = 'none';
        }    
        
        if (isAppend || isRowFetch)
        {
            this.setElementDir(cell, currentLeft, dir);
        }
        else
        {
            this.setElementDir(cell, currentLeft - width, dir);
        }

        //add cell to live DOM while rendering
        this.m_root.appendChild(cell);

        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, cellContext);
            if (content != null)
            {
                // allow return of document fragment from jquery create/js document.createDocumentFragment
                if (content['parentNode'] === null || content['parentNode'] instanceof DocumentFragment)
                {
                    cellContent.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    textWrapper = document.createElement("span");
                    textWrapper['className'] = this.getMappedStyle("celltext");
                    textWrapper.appendChild(document.createTextNode(content.toString()));
                    cellContent.appendChild(textWrapper);
                }
            }
        }
        else
        {
            if (cellData == null)
            {
                cellData = "";
            }
            textWrapper = document.createElement("span");
            textWrapper['className'] = this.getMappedStyle("celltext");
            textWrapper.appendChild(document.createTextNode(cellData.toString()));
            cellContent.appendChild(textWrapper);
        }

        if (isAppend || isRowFetch)
        {
            //if on a  touch device and the row has the selection icons in it, want do do an insert before
            if (selectionAffordanceAppend)
            {
                row.insertBefore(cell, selectionAffordanceAppend);
                currentLeft = currentLeft + width;
            }
            else
            {
                row.appendChild(cell);
                currentLeft = currentLeft + width;
            }
        }
        else
        {
            row.insertBefore(cell, firstColumn);
            firstColumn = cell;
            currentLeft = currentLeft - width;
        }

        // update column range info if neccessary
        if (updateColumnRangeInfo)
        {
            if (isAppend || isRowFetch)
            {
                this.m_endColPixel = this.m_endColPixel + width;
            }
            else
            {
                this.m_startColPixel = this.m_startColPixel - width;
            }
            totalWidth = totalWidth + width;
        }
    }

    if (updateColumnRangeInfo && columnCount > 0)
    {
        return totalWidth / columnCount;
    }
    return null;
};

/**
 * Handle an unsuccessful call to the data source fetchCells
 * @param {Error} errorStatus - the error returned from the data source
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype.handleCellsFetchError = function(errorStatus, cellRange)
{
    // remove fetch message
    this.m_fetching['cells'] = false;
};

/**
 * Display the 'fetching' status message
 */
DvtDataGrid.prototype.showStatusText = function()
{
    var left, msg;
    msg = this.getResources().getTranslatedText("msgFetchingData");

    if (this.m_status['style']['display'] == "block")
    {
        return;
    }

    this.m_status['innerHTML'] = msg;
    this.m_status['style']['display'] = "block";

    left = this.getWidth() / 2 - this.m_status['offsetWidth'] / 2;
    this.m_status['style']['left'] = left + 'px';
};

/**
 * Hide the 'fetching' status message
 */
DvtDataGrid.prototype.hideStatusText = function()
{
    this.m_status['style']['display'] = "none";
};

/************************************** scrolling/virtualization ************************************/

/**
 * Handle a scroll event calling scrollTo
 * @param {Event} event - the scroll event triggering the method
 */
DvtDataGrid.prototype.handleScroll = function(event)
{
    var scrollLeft, scrollTop, scroller;
    if (!event)
    {
        event = window['event'];
    }

    if (!event['target'])
    {
        scroller = event['srcElement'];
    }
    else
    {
        scroller = event['target'];
    }
        
    scrollLeft = this.m_utils.getElementScrollLeft(scroller);
    scrollTop = scroller['scrollTop'];

    this.scrollTo(scrollLeft, scrollTop);
};

/**
 * Retrieve the maximum scrollable width.  
 * @return {number} the maximum scrollable width.  Returns MAX_VALUE
 *         if canvas size is unknown.
 * @private
 */
DvtDataGrid.prototype._getMaxScrollWidth = function()
{
    if (this._isCountUnknownOrHighwatermark('column'))
    {
        return Number.MAX_VALUE;
    }
    return this.m_scrollWidth;
};

/**
 * Retrieve the maximum scrollable height.  
 * @return {number} the maximum scrollable width.  Returns MAX_VALUE
 *         if canvas size is unknown.
 * @private
 */
DvtDataGrid.prototype._getMaxScrollHeight = function()
{
    if (this._isCountUnknownOrHighwatermark('row'))
    {
        return Number.MAX_VALUE;
    }
    return this.m_scrollHeight;
};

/**
 * Used by mouse wheel and touch scrolling to set the scroll position, 
 * since the deltas are obtained instead of new scroll position.
 * @param {number} deltaX - the change in X position
 * @param {number} deltaY - the change in Y position
 */
DvtDataGrid.prototype.scrollDelta = function(deltaX, deltaY)
{
    var scrollLeft, scrollTop, scrollerScrollLeft, scrollerScrollTop, diff;
    // prevent 'diagonal' scrolling
    if (deltaX != 0 && deltaY != 0)
    {
        // direction depends on which way moves the most
        if (deltaX > deltaY)
        {
            deltaY = 0;
        }
        else
        {
            deltaX = 0;
        }
    }

    scrollLeft = this.m_currentScrollLeft - deltaX;
    scrollTop = this.m_currentScrollTop - deltaY;

    // this should force a scroll event
    this.m_utils.setElementScrollLeft(this.m_scroller, Math.max(0, Math.min(this._getMaxScrollWidth(), scrollLeft)));
    this.m_scroller['scrollTop'] = Math.max(0, Math.min(this._getMaxScrollHeight(), scrollTop));

    // checks whether we are overscroll, for touch we should do the bounce animation
    if (this.m_utils.isTouchDevice())
    {
        scrollerScrollTop = this.m_scroller['scrollTop'];
        scrollerScrollLeft = this.m_utils.getElementScrollLeft(this.m_scroller);

        // over scroll vertically
        if (deltaY != 0 && scrollTop != this.m_scroller['scrollTop'])
        {
            diff = scrollTop - scrollerScrollTop;
            this.m_extraScrollOverY = diff > 0 ? Math.min(DvtDataGrid.MAX_OVERSCROLL_PIXEL, diff) : Math.max(-DvtDataGrid.MAX_OVERSCROLL_PIXEL, diff);
        }
        else if (deltaX != 0 && scrollLeft != scrollerScrollLeft)
        {
            diff = scrollLeft - scrollerScrollLeft;
            this.m_extraScrollOverX = diff > 0 ? Math.min(DvtDataGrid.MAX_OVERSCROLL_PIXEL, diff) : Math.max(-DvtDataGrid.MAX_OVERSCROLL_PIXEL, diff);
        }        
    }    
};

/**
 * Checks whether we should stop scrolling the databody because there's no rows.  This is to avoid
 * showing blank spaces.
 * @param {number} scrollLeft - the position the scroller left should be
 * @param {number} scrollTop - the position the scroller top should be
 * @return {boolean} true if should stop scrolling databody, false otherwise
 * @private
 */
DvtDataGrid.prototype._shouldScrollDatabody = function(scrollLeft, scrollTop)
{
    var viewportLeft, viewportRight, viewportTop, viewportBottom;

    viewportLeft = scrollLeft;
    viewportRight = scrollLeft + this.getElementWidth(this.m_databody);
    viewportTop = scrollTop;
    viewportBottom = scrollTop + this.getElementHeight(this.m_databody);

    // check the viewport bounds against what's in the databody
    // todo: find out why viewportRight and m_endColPixel is off by 2 pixels
    if (this.m_endRowPixel < viewportBottom || this.m_startRowPixel > viewportTop || this.m_endColPixel < viewportRight-2 || this.m_startColPixel > viewportLeft)
    {
        return false;
    }

    return true;
};

/**
 * Set the scroller position, using translate3d when permitted
 * @param {number} scrollLeft - the position the scroller left should be
 * @param {number} scrollTop - the position the scroller top should be
 */
DvtDataGrid.prototype.scrollTo = function(scrollLeft, scrollTop)
{
    this.m_currentScrollLeft = scrollLeft;
    this.m_currentScrollTop = scrollTop;

    // check if this is a long scroll
    if ((scrollLeft + this.getViewportWidth()) < this.m_startColPixel ||
            scrollLeft > this.m_endColPixel ||
            (scrollTop + this.getViewportHeight()) < this.m_startRowPixel ||
            scrollTop > this.m_endRowPixel)
    {
        this.handleLongScroll(scrollLeft, scrollTop);
    }
    else
    {
        this.fillViewport(scrollLeft, scrollTop);
    }

    // check if we should stop scrolling the databody because data has not catch up yet.
    if (!this._shouldScrollDatabody(scrollLeft, scrollTop))
    {
        this.m_stopDatabodyScroll = true;
        return;
    }

    this.m_stopDatabodyScroll = false;

    // update header and databody scroll position
    this._syncScroller();

    // check if we need to adjust scroller dimension
    this._adjustScrollerSize();

    // check if there's a cell to focus
    if (this.m_cellToFocus != null)
    {
        this.m_cellToFocus.focus();
        this.m_cellToFocus = null;
    }    
};

/**
 * Perform the bounce back animation when a swipe gesture causes over scrolling
 * @private
 */
DvtDataGrid.prototype._bounceBack = function()
{
    var scrollLeft, scrollTop, databody, colHeader, rowHeader, dir;

    scrollLeft = this.m_currentScrollLeft;
    scrollTop = this.m_currentScrollTop;

    databody = this.m_databody['firstChild'];    
    colHeader = this.m_colHeader['firstChild'];
    rowHeader = this.m_rowHeader['firstChild'];

    // remove existing listener
    databody.removeEventListener("webkitTransitionEnd", this.m_bounceBack);

    // scroll back to actual scrollLeft/scrollTop positions
    if (this.getResources().isRTLMode())
    {
        databody.style.webkitTransform = "translate3d(" + scrollLeft + "px, " + (-scrollTop) + "px, 0)";
        colHeader.style.webkitTransform = "translate3d(" + scrollLeft + "px, 0, 0)";
    }
    else
    {
        databody.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, " + (-scrollTop) + "px, 0)";
        colHeader.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, 0, 0)";
    }
    rowHeader.style.webkitTransform = "translate3d(0, " + (-scrollTop) + "px, 0)";

    // reset
    this.m_extraScrollOverX = null;
    this.m_extraScrollOverY = null;
};

/**
 * Make sure the databody/headers and the scroller are in sync, which could happen when scrolling
 * stopped awaiting fetch to complete.
 * @private
 */
DvtDataGrid.prototype._syncScroller = function()
{
    var scrollLeft, scrollTop, databody, colHeader, rowHeader, dir;

    scrollLeft = this.m_currentScrollLeft;
    scrollTop = this.m_currentScrollTop;

    databody = this.m_databody['firstChild'];    
    colHeader = this.m_colHeader['firstChild'];
    rowHeader = this.m_rowHeader['firstChild'];

    // use translate3d for smoother scrolling
    // this checks determine whether this is webkit and translated3d is supported
    if (this.m_utils.isTouchDevice() && window.hasOwnProperty('WebKitCSSMatrix') && new WebKitCSSMatrix().hasOwnProperty('m11'))
    {
        // check if the swipe gesture causes over scrolling of scrollable area
        if (this.m_extraScrollOverX != null || this.m_extraScrollOverY != null)
        {
            // swipe horizontal or vertical
            if (this.m_extraScrollOverX != null)
            {
                scrollLeft = scrollLeft + this.m_extraScrollOverX;
            }
            else
            {
                scrollTop = scrollTop + this.m_extraScrollOverY;
            }

            // bounce back animation function
            if (this.m_bounceBack == null)
            {
                this.m_bounceBack = this._bounceBack.bind(this);
            }

            databody.addEventListener("webkitTransitionEnd", this.m_bounceBack);
        }

        // actual scrolling of databody and headers
        if (this.getResources().isRTLMode())
        {
            databody.style.webkitTransform = "translate3d(" + scrollLeft + "px, " + (-scrollTop) + "px, 0)";
            colHeader.style.webkitTransform = "translate3d(" + scrollLeft + "px, 0, 0)";
        }
        else
        {
            databody.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, " + (-scrollTop) + "px, 0)";
            colHeader.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, 0, 0)";
        }
        rowHeader.style.webkitTransform = "translate3d(0, " + (-scrollTop) + "px, 0)";
    }
    else
    {
        dir = this.getResources().isRTLMode() ? "right" : "left";
        this.setElementDir(databody, -scrollLeft, dir);
        this.setElementDir(databody, -scrollTop, 'top');
        this.setElementDir(colHeader, -scrollLeft, dir);
        this.setElementDir(rowHeader, -scrollTop, 'top');
    }
};

/**
 * Adjust the scroller when we scroll to the ends of the scroller.  The scroller dimension might
 * need adjustment due to 1) variable column width or row height due to custom sizing 2) the row
 * or column count is not exact.
 * @private
 */
DvtDataGrid.prototype._adjustScrollerSize = function()
{
    var  scrollerContent, scrollerContentHeight, scrollerContentWidth, databodyContent;
    scrollerContent = this.m_scroller['firstChild'];
    scrollerContentHeight = this.getElementHeight(scrollerContent);
    scrollerContentWidth = this.getElementWidth(scrollerContent);
    databodyContent = this.m_databody['firstChild'];

    // if (1) actual content is higher than scroller (regardless of the current position) OR
    //    (2) we have reached the last row and the actual content is shorter than scroller
    if ((this.m_endRowPixel > scrollerContentHeight) ||
        (this.getDataSource().getCount('row') == (this.m_endRow + 1) && !this._isCountUnknown('row') && this.m_endRowPixel < scrollerContentHeight))
    {
        this.setElementHeight(scrollerContent, this.m_endRowPixel);
        this.setElementHeight(databodyContent, this.m_endRowPixel);
    }

    // if (1) actual content is wider than scroller (regardless of the current position) OR
    //    (2) we have reached the last column and the actual content is narrower than scroller
    if ((this.m_endColPixel > scrollerContentWidth) ||
        (this.getDataSource().getCount('column') == (this.m_endCol + 1) && !this._isCountUnknown('column') && this.m_endColPixel < scrollerContentWidth))
    {
        this.setElementWidth(scrollerContent, this.m_endColPixel);
        this.setElementWidth(databodyContent, this.m_endColPixel);
    }
};

/**
 * Handle scroll to position that is completely outside of the current row/column range
 * For example, in Chrome it is possible to cause a "jump" back to the start position
 * This might also be needed if we decide to use delay scroll (to detect long scroll) to avoid
 * excessive fetching.
 * @param {number} scrollLeft - the position the scroller left should be
 * @param {number} scrollTop - the position the scroller top should be
 */
DvtDataGrid.prototype.handleLongScroll = function(scrollLeft, scrollTop)
{
    var startRow, startCol, startRowPixel, startColPixel;

    // do a fetch based on current scroll position
    startRow = Math.round(Math.max(0, scrollTop - this.getHeight() / 2) / this.m_avgRowHeight);
    startCol = Math.round(Math.max(0, scrollLeft - this.getWidth() / 2) / this.m_avgColWidth);
    startRowPixel = startRow * this.m_avgRowHeight;
    startColPixel = startCol * this.m_avgColWidth;

    // reset ranges
    this.m_startRow = startRow;
    this.m_endRow = -1;
    this.m_startRowHeader = startRow;
    this.m_endRowHeader = -1;
    this.m_startRowPixel = startRowPixel;
    this.m_endRowPixel = startRowPixel;
    this.m_startRowHeaderPixel = startRowPixel;
    this.m_endRowHeaderPixel = startRowPixel;

    this.m_startCol = startCol;
    this.m_endCol = -1;
    this.m_startColHeader = startCol;
    this.m_endColHeader = -1;
    this.m_startColPixel = startColPixel;
    this.m_endColPixel = startColPixel;
    this.m_startColHeaderPixel = startColPixel;
    this.m_endColHeaderPixel = startColPixel;

    // custom success callback so that we can reset all ranges and fields
    // initiate fetch of headers and cells
    this.fetchHeaders("row", startRow, this.m_rowHeader, undefined, {'success': function(headerSet, headerRange)
         { this.handleRowHeadersFetchSuccessForLongScroll(headerSet, headerRange, startRowPixel); }});
    this.fetchHeaders("column", startCol, this.m_colHeader, undefined, {'success': function(headerSet, headerRange)
         { this.handleColumnHeadersFetchSuccessForLongScroll(headerSet, headerRange); }});
    this.fetchCells(this.m_databody, this.m_scroller, startRow, startCol, null, null, {'success': function(cellSet, cellRange) 
         { this.handleCellsFetchSuccessForLongScroll(cellSet, cellRange, startRow, startCol, startRowPixel, startColPixel); }});
};

/**
 * Handle a successful call to the data source fetchHeaders for long scroll
 * @param {Object} headerSet - the result of the fetch
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @param {number} startRowPixel - the pixel to beign insert at
 * @protected
 */
DvtDataGrid.prototype.handleRowHeadersFetchSuccessForLongScroll = function(headerSet, headerRange, startRowPixel)
{
    var headerResizer, headerContent;
    headerContent = this.m_rowHeader['firstChild'];
    if (headerContent != null)
    {
        headerResizer = headerContent['firstChild'].cloneNode();
        headerContent.innerHTML = "";
        headerContent.appendChild(headerResizer);

        this.setElementHeight(headerResizer, startRowPixel);
    }
    this.handleHeadersFetchSuccess(headerSet, headerRange);
};

/**
 * Handle a successful call to the data source fetchHeaders for long scroll
 * @param {Array.<(Object|string)>} headerSet - an array of headers returned from the dataSource
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @protected
 */
DvtDataGrid.prototype.handleColumnHeadersFetchSuccessForLongScroll = function(headerSet, headerRange)
{
    var headerContent = this.m_colHeader['firstChild'];
    headerContent.innerHTML = "";

    this.handleHeadersFetchSuccess(headerSet, headerRange);
};

/**
 * Handle a successful call to the data source fetchCells. Create new row and 
 * cell DOM elements when necessary and then insert them into the databody.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @param {number} startRow the row to start insert at
 * @param {number} startCol the col to start insert at
 * @param {number} startRowPixel the row pixel to start insert at
 * @param {number} startColPixel the col pixel to start insert at
 * @protected
 */
DvtDataGrid.prototype.handleCellsFetchSuccessForLongScroll = function(cellSet, cellRange, startRow, startCol, startRowPixel, startColPixel)
{
    var databodyContent, databodyResizer;
    // remove everything
    databodyContent = this.m_databody['firstChild'];
    if (databodyContent != null)
    {    
        databodyResizer = databodyContent['firstChild'].cloneNode();
        databodyContent.innerHTML = "";
        databodyContent.appendChild(databodyResizer);

        this.setElementHeight(databodyResizer, startRowPixel);
    }
    // first reset all fields

    // now calls fetch success proc
    this.handleCellsFetchSuccess(cellSet, cellRange);
};

/**
 * Make sure the viewport is filled of cells
 * @param {number} scrollLeft - the position of the scroller left
 * @param {number} scrollTop - the position of the scroller top
 */
DvtDataGrid.prototype.fillViewport = function(scrollLeft, scrollTop)
{
    var viewportRight, databodyContent, fetchStartCol, fetchSize, viewportBottom, fetchStartRow, initFlag = false;
    //initFlag is used by model delete event to set initialized if the datagrid does not need to do a fetch after a delete
    databodyContent = this.m_databody['firstChild'];

    //the viewport is the scroller, width and height
    viewportRight = scrollLeft + this.getElementWidth(this.m_scroller);
    // scroll position passes the header content or reach the right (left for rtl) if count is unknown
    if (!this.m_stopColumnHeaderFetch && (viewportRight > this.m_endColHeaderPixel || (viewportRight == this.m_endColHeaderPixel && this._isCountUnknownOrHighwatermark("column"))))
    {
        // add column headers to right
        this.fetchHeaders("column", this.m_endColHeader + 1, this.m_colHeader);

        // clean up left column headers
        if (!this._isHighWatermarkScrolling() && ((this.m_endColHeader - this.m_startColHeader) > this.MAX_COLUMN_THRESHOLD))
        {
            this.removeColumnHeadersFromLeft(this.m_colHeader);
        }
        initFlag = true;
    }
    else if (scrollLeft < this.m_startColHeaderPixel)
    {
        // add column headers to left
        fetchStartCol = Math.max(0, this.m_startColHeader - this.getFetchSize("column"));
        fetchSize = Math.max(0, this.m_startColHeader - fetchStartCol);
        this.fetchHeaders("column", fetchStartCol, this.m_colHeader, fetchSize);

        // clean up right column headers
        if (!this._isHighWatermarkScrolling() && ((this.m_endColHeader - this.m_startColHeader) > this.MAX_COLUMN_THRESHOLD))
        {
            this.removeColumnHeadersFromRight(this.m_colHeader);
        }
        initFlag = true;
    }

    // scroll position passes the databody content or reach the right (left if rtl) if count is unknown
    if (!this.m_stopColumnFetch && (viewportRight > this.m_endColPixel || (viewportRight == this.m_endColPixel && this._isCountUnknownOrHighwatermark("column"))))
    {
        // add columns to right
        this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, this.m_endCol + 1, this.m_endRow - this.m_startRow + 1);

        // clean up left columns
        if (!this._isHighWatermarkScrolling() && (this.m_endCol - this.m_startCol) > this.MAX_COLUMN_THRESHOLD)
        {
            this.removeColumnsFromLeft(this.m_databody);
        }
        initFlag = true;
    }
    else if (scrollLeft < this.m_startColPixel)
    {
        // add columns to left
        fetchStartCol = Math.max(0, this.m_startCol - this.getFetchSize("column"));
        fetchSize = Math.max(0, this.m_startCol - fetchStartCol);
        this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, fetchStartCol, this.m_endRow - this.m_startRow + 1, fetchSize);

        // clean up left columns
        if (!this._isHighWatermarkScrolling() && (this.m_endCol - this.m_startCol) > this.MAX_COLUMN_THRESHOLD)
        {
            this.removeColumnsFromRight(this.m_databody);
        }
        initFlag = true;
    }    
    
    viewportBottom = scrollTop + this.getElementHeight(this.m_scroller);

    // scroll position passes the header content or reach the bottom if count is unknown
    if (!this.m_stopRowHeaderFetch && (viewportBottom > this.m_endRowHeaderPixel  || (viewportBottom == this.m_endRowHeaderPixel && this._isCountUnknownOrHighwatermark("row"))))
    {        
        // add row headers to bottom
        this.fetchHeaders("row", this.m_endRowHeader + 1, this.m_rowHeader);

        // clean up top row headers
        if (!this._isHighWatermarkScrolling() && (this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromTop(this.m_rowHeader);
        }
        initFlag = true;
    }

    else if (Math.max(0, (scrollTop - this.getRowThreshold())) < this.m_startRowHeaderPixel)
    {
        // if we reach the top row then stop
        if (this.m_startRowHeader == 0)
        {
            return;
        }
        
        // add row headers to top
        fetchStartRow = Math.max(0, this.m_startRowHeader - this.getFetchSize("row"));
        fetchSize = Math.max(0, this.m_startRowHeader - fetchStartRow);
        this.fetchHeaders("row", fetchStartRow, this.m_rowHeader, fetchSize);

        // clean up bottom row headers
        if (!this._isHighWatermarkScrolling() && (this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromBottom(this.m_rowHeader);
        }
        initFlag = true;
    }

    // scroll position passes the databody content or reach the bottom if count is unknown
    if (viewportBottom > this.m_endRowPixel || (viewportBottom == this.m_endRowPixel && this._isCountUnknownOrHighwatermark("row") && !this.m_stopRowFetch))
    {
        // add rows to bottom
        this.fetchCellsToBottom();

        // clean up top rows
        if (!this._isHighWatermarkScrolling() && (this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromTop(this.m_databody);
        }
        initFlag = true;
    }
    else if (Math.max(0, (scrollTop - this.getRowThreshold())) < this.m_startRowPixel)
    {
        // if we reach the top row then stop
        if (this.m_startRow == 0)
        {
            return;
        }

        // add rows to top
        this.fetchCellsToTop();

        // clean up bottom rows
        if (!this._isHighWatermarkScrolling() && (this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromBottom(this.m_databody);
        }
        initFlag = true;
    }
    if (!initFlag)
    {
        this.m_initialized = true;
    }
    
};

/**
 * Fetch cells and append results to the bottom
 * @protected
 */
DvtDataGrid.prototype.fetchCellsToBottom = function()
{
    this.fetchCells(this.m_databody, this.m_scroller, this.m_endRow + 1, this.m_startCol, null, this.m_endCol - this.m_startCol + 1);
};

/**
 * Fetch cells and insert results to the top
 * @protected
 */
DvtDataGrid.prototype.fetchCellsToTop = function()
{
    var fetchSize, fetchStartRow;
    // add rows to top
    fetchStartRow = Math.max(0, this.m_startRow - this.getFetchSize("row"));
    fetchSize = Math.max(0, this.m_startRow - fetchStartRow);
    this.fetchCells(this.m_databody, this.m_scroller, fetchStartRow, this.m_startCol, fetchSize, this.m_endCol - this.m_startCol + 1);
};

/**
 * Remove column headers to the left of the current viewport
 * @param {Element} colHeader - the root of the column headers
 */
DvtDataGrid.prototype.removeColumnHeadersFromLeft = function(colHeader)
{
    var colHeaderContent, headers, indexToRemove, left, colThreshold, i, j, header, prevLeft;
    
    colHeaderContent = colHeader['firstChild'];
    headers = colHeaderContent['childNodes'];
    indexToRemove = 0;
    left = 0;
    colThreshold = this.getColumnThreshold();
    for (i = 0; i < headers.length; i += 1)
    {
        header = headers[i];
        prevLeft = left;
        left = this.getElementDir(header, 'left');
        if (left > (this.m_currentScrollLeft - colThreshold))
        {
            indexToRemove = i - 1;
            this.m_startColHeader = this.m_startColHeader + indexToRemove;
            this.m_startColHeaderPixel = prevLeft;

            break;
        }
    }

    for (j = 0; j < indexToRemove; j += 1) {
        colHeaderContent.removeChild(colHeaderContent['firstChild']);
    }
};

/**
 * Remove cells to the left of the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeColumnsFromLeft = function(databody)
{
    var databodyContent, rows, indexToRemove, left, colThreshold, columns, i, column, prevLeft, j, row, k;
    databodyContent = databody['firstChild'];
    rows = databodyContent['childNodes'];
    indexToRemove = 0;
    left = 0;
    colThreshold = this.getColumnThreshold();

    // no rows in databody, nothing to remove
    if (rows.length < 2)
    {
        return;
    }

    // just use the first row to find the cut off point
    columns = rows[1]['childNodes'];
    for (i = 0; i < columns.length; i += 1)
    {
        column = columns[i];
        prevLeft = left;
        left = this.getElementDir(column, 'left');
        if (left > (this.m_currentScrollLeft - colThreshold))
        {
            indexToRemove = i - 1;
            this.m_startCol = this.m_startCol + indexToRemove;
            this.m_startColPixel = prevLeft;

            break;
        }
    }

    // skip the first one which is the resizer
    for (j = 1; j < rows.length; j += 1)
    {
        row = rows[j];
        for (k = 0; k < indexToRemove; k += 1)
        {
            row.removeChild(row['firstChild']);            
        }
    }
};

/**
 * Remove column headers to the right of the current viewport
 * @param {Element} colHeader - the root of the column headers
 */
DvtDataGrid.prototype.removeColumnHeadersFromRight = function(colHeader)
{
    var colHeaderContent, threshold, column, width;
    colHeaderContent = colHeader['firstChild'];
    threshold = this.m_currentScrollLeft + this.getViewportWidth() + this.getColumnThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endColHeaderPixel <= threshold)
    {
        return;
    }

    column = colHeaderContent['lastChild'];
    width = column['offsetWidth'];
    while (this.m_endColHeaderPixel + width > threshold)
    {
        colHeaderContent.removeChild(column);
        this.m_endColHeaderPixel = this.m_endColHeaderPixel - width;
        this.m_endColHeader -= 1;

        column = colHeaderContent['lastChild'];
        width = column['offsetWidth'];
    }
};

/**
 * Remove cells to the right of the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeColumnsFromRight = function(databody)
{
    var databodyContent, threshold, columns, column, width, rows, j, row;
    databodyContent = databody['firstChild'];
    rows = databodyContent['childNodes'];
    threshold = this.m_currentScrollLeft + this.getViewportWidth() + this.getColumnThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endColPixel <= threshold)
    {
        return;
    }

    columns = rows[1];
    column = columns['lastChild'];
    width = column['offsetWidth'];
    while (this.m_endColPixel + width > threshold)
    {
        for (j = 1; j < rows.length; j += 1) {
            row = rows[j];
            row.removeChild(row['lastChild']);
        }
        this.m_endColPixel = this.m_endColPixel - width;
        this.m_endCol -= 1;

        column = columns['lastChild'];
        width = column['offsetWidth'];
    }

};

/**
 * Remove row headers above the current viewport
 * @param {Element} rowHeader - the root of the row headers
 */
DvtDataGrid.prototype.removeRowHeadersFromTop = function(rowHeader)
{
    var rowHeaderContent, resizer, resizerHeight, rowThreshold, header, height;
    rowHeaderContent = rowHeader['firstChild'];
    resizer = rowHeaderContent['firstChild'];
    resizerHeight = this.getElementHeight(resizer);
    rowThreshold = this.getRowThreshold();
    if (resizerHeight >= this.m_currentScrollTop - rowThreshold)
    {
        return;
    }

    header = resizer['nextSibling'];
    height = header['offsetHeight'];
    // remove all rows from top until the threshold is reached
    while (resizerHeight + height < this.m_currentScrollTop - rowThreshold)
    {
        rowHeaderContent.removeChild(header);

        this.m_startRowHeaderPixel = this.m_startRowHeaderPixel + height;
        this.m_startRowHeader += 1;

        resizerHeight = resizerHeight + height;
        header = resizer['nextSibling'];
        height = header['offsetHeight'];
    }

    this.setElementHeight(resizer, resizerHeight);
};

/**
 * Remove rows/cells above the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeRowsFromTop = function(databody)
{
    var databodyContent, resizer, resizerHeight, rowThreshold, row, height;
    databodyContent = databody['firstChild'];
    resizer = databodyContent['firstChild'];
    resizerHeight = this.getElementHeight(resizer);
    rowThreshold = this.getRowThreshold();
    if (resizerHeight >= this.m_currentScrollTop - rowThreshold)
    {
        return;
    }

    row = resizer['nextSibling'];
    height = row['offsetHeight'];
    // remove all rows from top until the threshold is reached
    while (resizerHeight + height < this.m_currentScrollTop - rowThreshold)
    {
        databodyContent.removeChild(row);

        this.m_startRowPixel = this.m_startRowPixel + height;
        this.m_startRow += 1;

        resizerHeight = resizerHeight + height;
        row = resizer['nextSibling'];
        // if there's no more rows to remove from the databody
        if (row == null)
        {
            break;
        }
        height = row['offsetHeight'];
    }

    this.setElementHeight(resizer, resizerHeight);
};

/**
 * Remove row headers below the current viewport
 * @param {Element} rowHeader - the root of the row headers
 */
DvtDataGrid.prototype.removeRowHeadersFromBottom = function(rowHeader)
{
    var rowHeaderContent, threshold, row, height;
    rowHeaderContent = rowHeader['firstChild'];
    threshold = this.m_currentScrollTop + this.getViewportHeight() + this.getRowThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endRowHeaderPixel <= threshold)
    {
        return;
    }

    row = rowHeaderContent['lastChild'];
    height = row['offsetHeight'];
    while (this.m_endRowHeaderPixel + height > threshold)
    {        
        rowHeaderContent.removeChild(row);

        this.m_endRowHeaderPixel = this.m_endRowHeaderPixel - height;
        this.m_endRowHeader -= 1;

        row = rowHeaderContent['lastChild'];
        height = row['offsetHeight'];
    }
};

/**
 * Remove rows/cells below the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeRowsFromBottom = function(databody)
{
    var databodyContent, threshold, row, height;
    databodyContent = databody['firstChild'];
    threshold = this.m_currentScrollTop + this.getViewportHeight() + this.getRowThreshold();
    
    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endRowPixel <= threshold)
    {
        return;
    }

    row = databodyContent['lastChild'];
    height = row['offsetHeight'];    
    while (this.m_endRowPixel + height > threshold)
    {        
        databodyContent.removeChild(row);
        
        this.m_endRowPixel = this.m_endRowPixel - height;
        this.m_endRow -= 1;
        
        row = databodyContent['lastChild'];
        height = row['offsetHeight'];
    }
};

/**
 * Handles mouse down on the scroller
 * @param {Event} event the mouse down event
 * @protected
 */
DvtDataGrid.prototype.handleScrollerMouseDown = function(event)
{
    // start keeping track of scrolling.  This is used to determine whether long scroll
    // should be invoke and also when to start fetching
    this.m_captureScrolling = true;
};

/**
 * Handles mouse up on the scroller
 * @param {Event} event the mouse up event
 * @protected
 */
DvtDataGrid.prototype.handleScrollerMouseUp = function(event)
{
    this.m_captureScrolling = false;

    // see if we need to check data covered the viewport
    if (this.isFetchComplete() && this.m_stopDatabodyScroll)
    {
        this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
    }
};

/**
 * Debugging method to dump out current range info
 */
DvtDataGrid.prototype.dumpRanges = function()
{
    if (console != undefined && console.log)
    {
        console.log("=================");
        console.log("Start Row: " + this.m_startRow);
        console.log("  End Row: " + this.m_endRow);
        console.log("Start Column: " + this.m_startCol);
        console.log("  End Column: " + this.m_endCol);
        console.log("=================");
    }
};
/*********************************** end scrolling/virtualization ************************************/

/*********************************** start dom event handling ***************************************/

/**
 * Handle the callback from the widget to resize or sort.
 * @export
 * @param {Event} event - the original contextmenu event
 * @param {string} id - the id returned from the context menu
 * @param {string} value - the value set in the dialog on resizing
 */
DvtDataGrid.prototype.handleContextMenuReturn = function(event, id, value)
{
    var target, cell, direction;
    target = event['target'];
    //Check if context menu inside a cell
    cell = this.findCell(target);
    if (id === this.m_resources.getMappedCommand('resizeHeight'))
    {
        if ((this.isResizeEnabled()))
        {
            if (cell != null)
            {
                target = this.getHeaderFromCell(cell, 'row')['firstChild'];
            }
            else 
            {
                target = this.findHeader(target);
            }
            this.handleContextMenuResize(target, 'resizeHeight', value);            
        }
    }
    else if (id === this.m_resources.getMappedCommand('resizeWidth'))
    {
        if ((this.isResizeEnabled()))
        {
            if (cell != null)
            {
                target = this.getHeaderFromCell(cell, 'column');
            } 
            else 
            {
                target = this.findHeader(target);
            }
            this.handleContextMenuResize(target, 'resizeWidth', value);            
        }
    }    
    else if (id === this.m_resources.getMappedCommand('sortColAsc') || id === this.m_resources.getMappedCommand('sortColDsc'))
    {
        direction = id === this.m_resources.getMappedCommand('sortColAsc') ? 'ascending':'descending';
        if (cell != null)
        {
            target = this.getHeaderFromCell(cell, 'column');
            if (this._isDOMElementSortable(target))
            {
                this._handleCellSort(event, direction, target);                              
            }
        }
        else
        {   
            if (this._isDOMElementSortable(target))
            {
                this._handleHeaderSort(event, direction);      
            }
        }
    }       

    else if (id === this.m_resources.getMappedCommand('sortRowAsc') || id === this.m_resources.getMappedCommand('sortRowDsc'))
    {
        direction = id === this.m_resources.getMappedCommand('sortRowAsc') ? 'ascending':'descending';
        if (cell != null)
        {
            target = this.getHeaderFromCell(cell, 'row');
            if (this._isDOMElementSortable(target))
            {
                this._handleCellSort(event, direction, target);                              
            }
        }
        else
        {   
            if (this._isDOMElementSortable(target))
            {
                this._handleHeaderSort(event, direction);      
            }
        }
    }        
    else if (id === this.m_resources.getMappedCommand('cut'))
    {
        this._handleCut(event);
    }    
    else if (id === this.m_resources.getMappedCommand('paste'))
    {
        this._handlePaste(event);
    }        
};

/**
 * Determined if sort is supported for the specified axis.
 * @param {string} axis the axis which we check whether sort is supported.
 * @param {Object} headerContext the header context object
 * @private
 */
DvtDataGrid.prototype._isSortEnabled = function(axis, headerContext)
{
    var capability, sortable;
    capability = this.getDataSource().getCapability("sort");
    sortable = this.m_options.isSortable(axis, headerContext);
    if ((sortable === "enable" || sortable === "auto") && (capability === "full" || capability === axis))
    {
        return true;
    }

    return false;
};

/**
 * Determined if sort is supported for the specified element.
 * @param {HMTLElement} element to check if sorting should be on
 * @private
 */
DvtDataGrid.prototype._isDOMElementSortable = function(element)
{
    var header = this.findHeader(element);
    if (header == null)
    {
        return false;
    }
    return header.getAttribute(this.getResources().getMappedAttribute('sortable')) == "true";
};

/**
 * Check if selection enabled by options on the grid
 * @return {boolean} true if selection enabled
 * @private
 */
DvtDataGrid.prototype._isSelectionEnabled = function()
{
    return (this.m_options.getSelectionCardinality() != "none");
};

/**
 * Check whether multiple row/cell selection is allowed by options on the grid
 * @return {boolean} true if multipl selection enabled
 */
DvtDataGrid.prototype.isMultipleSelection = function()
{
    return (this.m_options.getSelectionCardinality() == "multiple");
};

/**
 * Check if resizing enabled on any header by options on the grid
 * @return {boolean} true if resize enabled
 */
DvtDataGrid.prototype.isResizeEnabled = function()
{
    var row = this.m_options.isResizable("row"), column = this.m_options.isResizable("column");
    return (row["width"] !== "disable" || row["height"] !== "disable" || column["width"] !== "disable" || column["height"] !== "disable");
};

/**
 * Check if resizing enabled on a specific header
 * @param {string} axis the axis which we check whether sort is supported.
 * @param {Object} headerContext the header context object
 * @return {boolean} true if resize enabled
 */
DvtDataGrid.prototype._isHeaderResizeEnabled = function(axis, headerContext)
{
    var resizable = this.m_options.isResizable(axis, headerContext);
    if (axis == 'column')
    {
        if (typeof resizable['width'] == 'function')
        {
            return resizable['width'].call(this, headerContext) == 'enable' ? true:false;
        }
        return resizable['width'] == 'enable' ? true:false;
    }
    else if (axis == 'row')
    {
        if (typeof resizable['height'] == 'function')
        {
            return resizable['height'].call(this, headerContext) == 'enable' ? true:false;
        }
        return resizable['height'] == 'enable' ? true:false;
    }
    return false;
};

/**
 * Handle mousemove events on the document
 * @param {Event} event - mousemove event on the document
 */
DvtDataGrid.prototype.handleMouseMove = function(event)
{
    if (this.isResizeEnabled() && (this.m_databodyDragState == false))
    {
        this.handleResize(event);
    }
};

/**
 * Handle row header mousemove events on the document
 * @param {Event} event - mousemove event on the document
 */
DvtDataGrid.prototype.handleRowHeaderMouseMove = function(event)
{
    if (this.m_databodyMove)
    {
        this._handleMove(event);
    }
};

/**
 * Handle mousedown events on the headers
 * @param {Event} event - mousedown event on the headers
 */
DvtDataGrid.prototype.handleHeaderMouseDown = function(event)
{
    var row, processed;
    //if mousedown in an icon it the click event will handle mousedown/up
    if ((this.m_utils.containsCSSClassName(event.target, this.getMappedStyle('sortascending')) || 
            this.m_utils.containsCSSClassName(event.target, this.getMappedStyle('sortdescending')))
            && this._isDOMElementSortable(event.target))
    {
       event.preventDefault();
       this._handleSortIconMouseDown(event.target);
       return;
    }
    
    //handle resize movements first if we're on the border
    if (this.isResizeEnabled())
    {
        processed = this.handleResizeMouseDown(event);
    }
    
    row = this.findRow(event.target);
    //if our move is enabled make sure our row has the active cell in it
    if (!this.m_isResizing && this._isMoveOnRowEnabled(row))
    {
        this.m_databodyMove = true;
        this.m_currentX = event['pageX'];
        this.m_currentY = event['pageY'];
        processed = true;
    }
    
    //activate header on click
    if (!this.m_isResizing)
    {
        this.handleHeaderClickActive(event);
    }
    
    if (this.processed === true)
    {
        event.preventDefault();
    }
};

/**
 * Handle mouseup events on the document
 * @param {Event} event - mouseup event on the document
 */
DvtDataGrid.prototype.handleMouseUp = function(event)
{
    //if we mouseup outside the grid we want to cancel the selection and return the row
    if (this.m_databodyMove && this.m_moveRow != null)
    {
        this._handleMoveMouseUp(event, false);
    }           
    else if (this.isResizeEnabled())
    {
        this.handleResizeMouseUp(event);
    } 
    this.m_databodyMove = false;
};

DvtDataGrid.prototype.handleHeaderMouseOver = function(event)
{
    this.m_utils.addCSSClassName(this.findHeader(event.target), this.getMappedStyle('hover'));
    if (this._isDOMElementSortable(event.target))
    {
        this._handleSortMouseOver(event);
    }
};

DvtDataGrid.prototype.handleHeaderMouseOut = function(event)
{
    this.m_utils.removeCSSClassName(this.findHeader(event.target), this.getMappedStyle('hover'));
    if (this._isDOMElementSortable(event.target))
    {
        this._handleSortMouseOut(event);
    }
};

DvtDataGrid.prototype.handleHeaderMouseUp = function(event)
{
    if (this.m_databodyMove && this.m_moveRow != null)
    {
        this._handleMoveMouseUp(event, true);
    }
};

/**
 * Event handler for when row/column header is clicked
 * @protected
 * @param {Event} event - click event on the headers
 */
DvtDataGrid.prototype.handleHeaderClick = function(event)
{
    if ((this.m_utils.containsCSSClassName(event.target, this.getMappedStyle('sortascending')) || 
            this.m_utils.containsCSSClassName(event.target, this.getMappedStyle('sortdescending')))
            && this._isDOMElementSortable(event.target))
    {
        this._handleHeaderSort(event);
        event.preventDefault();
    }
};

/**
 * Event handler for when mouse down anywhere in the databody
 * @protected
 * @param {Event} event - mousedown event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseDown = function(event)
{
    //only perform events on left mouse, (right in rtl culture)
    if (event.button === 0)
    {
        if (this._isMoveOnRowEnabled(this.find(event.target, 'row')))
        {
            this.m_databodyMove = true;
            this.m_currentX = event['pageX'];
            this.m_currentY = event['pageY'];
        }
        // no else so that we can select a cell in the same row as long as no drag
        // check if selection is enabled
        if (this._isSelectionEnabled())
        {        
            this.handleDatabodyClickSelection(event);

            if (this.isMultipleSelection())
            {
                this.m_databodyDragState = true;
            }
        }
        else
        {
            // if selection is disable, we'll still need to highlight the active cell
            this.handleDatabodyClickActive(event);
        }
    }
};

DvtDataGrid.prototype.handleDatabodyMouseOut = function(event)
{
    var row, selectionMode;
    if (!this.m_databodyMove)
    {
        selectionMode = this.m_options.getSelectionMode();
        row = this.findRow(event.target);
        if (selectionMode === 'cell')
        {    
            this.m_utils.removeCSSClassName(this.findCell(event.target), this.getMappedStyle('hover'));
        }
        else if (selectionMode === 'row')
        {
            this.m_utils.removeCSSClassName(row, this.getMappedStyle('hover'));
        }
    }
};

DvtDataGrid.prototype.handleDatabodyMouseOver = function(event)
{
    var row, selectionMode;    
    if (!this.m_databodyMove)
    {
        selectionMode = this.m_options.getSelectionMode();
        row = this.findRow(event.target);        
        if (selectionMode === 'cell')
        {
            this.m_utils.addCSSClassName(this.findCell(event.target), this.getMappedStyle('hover'));
        }
        else if (selectionMode === 'row')
        {
            this.m_utils.addCSSClassName(row, this.getMappedStyle('hover'));         
        }
    }
};

/**
 * Event handler for when mouse move anywhere in the databody
 * @protected
 * @param {Event} event - mousemove event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseMove = function(event)
{
    //handle move first because it should happen first on the second click
    if (this.m_databodyMove)
    {
        this._handleMove(event);
    }    
    else if (this.m_databodyDragState)
    {
        this.handleDatabodySelectionDrag(event);
    }
};

/**
 * Event handler for when mouse down anywhere in the databody
 * @protected
 * @param {Event} event - mouseup event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseUp = function(event)
{
    this.m_databodyDragState = false;
    if (this.m_databodyMove && this.m_moveRow != null)
    {
        this._handleMoveMouseUp(event, true);
    }
};

/**
 * Event handler for when user press down a key in the databody
 * @protected
 * @param {Event} event - keydown event on the databody
 */
DvtDataGrid.prototype.handleDatabodyKeyDown = function(event)
{
    var newCellIndex, cell, processed;

    if (this.m_active == null && this.m_activeHeader == null)
    {
        // if nothing is active, first tab will activate first cell in the first row
        if (event.keyCode === DvtDataGrid.TAB_KEY)
        {
            newCellIndex = this.createIndex(0, 0);
            // make sure it's visible
            this.scrollToIndex(newCellIndex);
            // select or focus it            
            if (this._isSelectionEnabled())
            {
                this.selectAndFocus(newCellIndex);
            }
            else
            {
                this.activeAndFocus(newCellIndex);
            }
            //we only prevent the TAB KEY
            event.preventDefault();            
        }  
        return;
    }

    // if selection is disable OR we are in navigation mode, tab key should go to the previous/next focusable
    // element outside of the datagrid, so in such case we should just let the event bubble
    if (event.keyCode === DvtDataGrid.TAB_KEY && (!this._isSelectionEnabled() || !this.isActionableMode()))
    {
        return;
    }      

    // check if header is active
    if (this.m_activeHeader != null)
    {
        //do not take control of keydown event if we aren't the active document element(context menu case)
        if (this.m_activeHeader['elem'] != document.activeElement)
        {
            return;
        }
        processed = this.handleHeaderKeyDown(event);
    }
    else
    {
        //do not take control of keydown event if we aren't the active document element(context menu case)
        cell = this.getElementsInRange(this.createRange(this.m_active));
        if (cell == null || cell[0] != this.findCell(document.activeElement))
        {
            if (this._isSelectionEnabled() && this.m_selectionFrontier != null)
            {
                cell = this.getElementsInRange(this.createRange(this.m_selectionFrontier));
                if (cell == null || cell[0] != this.findCell(document.activeElement))
                {
                    return;
                }
            }
            else
            {
                return;
            }
        }        
        
        // fire key down event (internal.  Used only by row expander for now)
        this._fireDatabodyKeyDownEvent(event);        
        
        processed = this._handleCutPasteKeydown(event);
        if (!processed)
        {
            if (this._isSelectionEnabled())
            {
                processed = this.handleSelectionKeyDown(event);
            }
            else
            {
                processed = this.handleActiveKeyDown(event);
            }
        }
    }
    if (processed === true)
    {
        event.preventDefault();
    }
};

/**
 * Handles when a key down is pressed on the databody
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._fireDatabodyKeyDownEvent = function(event)
{
    var cell, row, rowKey, details;

    cell = this.findCell(event.target);
    if (cell == null)
    {
        // should not happen
        return;
    }

    row = cell['parentNode'];
    rowKey = this._getKey(row);

    // the event contains the context info
    details = {
        'event': event, 'ui': {
            'rowKey': rowKey
        }
    };

    this.fireEvent('keydown', details);
};

/**
 * Find top and left offset of an element relative to the (0,0) point on the page
 * @param {Element} element - the element to find left and top offset of
 * @return {Array.<number>} - [leftOffset, topOffset]
 */
DvtDataGrid.prototype.findPos = function(element)
{
    var parentPos, transform;
    if (element)
    {
        parentPos = this.findPos(element['offsetParent']);
        transform = this.getElementTranslationXYZ(element['parentNode']);
        return [
            parseInt(parentPos[0], 10) + parseInt(element['offsetLeft'], 10) + transform[0],
            parseInt(parentPos[1], 10) + parseInt(element['offsetTop'], 10) + transform[1]
        ];
    }
    return [0, 0];
};

/**
 * Get an elements transform3d X,Y,Z
 * @param {Element} element - the element to find transform3d X,Y,Z of
 * @return {Array.<number>} - [transformX, transformY, transformZ]
 */
DvtDataGrid.prototype.getElementTranslationXYZ = function(element)
{
    var cs, transform, matrixArray, transformX, transformY, transformZ;
    if (element)
    {
        cs = document.defaultView.getComputedStyle(element, null);
        transform = cs.getPropertyValue("-webkit-transform") ||
                cs.getPropertyValue("-moz-transform") ||
                cs.getPropertyValue("-ms-transform") ||
                cs.getPropertyValue("-o-transform") ||
                cs.getPropertyValue("transform");
        matrixArray = transform.substr(7, transform.length - 8).split(', ');
        transformX = isNaN(parseInt(matrixArray[4], 10)) ? 0 : parseInt(matrixArray[4], 10);
        transformY = isNaN(parseInt(matrixArray[5], 10)) ? 0 : parseInt(matrixArray[5], 10);
        transformZ = isNaN(parseInt(matrixArray[6], 10)) ? 0 : parseInt(matrixArray[6], 10);
        return [transformX, transformY, transformZ];
    }
    return [0, 0, 0];
};



/**
 * Event handler for when mouse wheel is used on the databody
 * @param {Event} event - mousewheel event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseWheel = function(event)
{
    var delta, deltaX, deltaY;
    // prevent scrolling of the page
    event.preventDefault();

    delta = this.m_utils.getMousewheelScrollDelta(event);

    deltaX = delta['deltaX'];
    deltaY = delta['deltaY'];

    this.scrollDelta(deltaX, deltaY);
};

/**************** touch related methods ********************/

/**
 * Event handler for when touch is started on the databody
 * @param {Event} event - touchstart event on the databody
 */
DvtDataGrid.prototype.handleTouchStart = function(event)
{
    var fingerCount, dir,selection, target;

    fingerCount = event.touches.length;
    // move = one finger swipe (or two?)
    if (fingerCount == 1)
    {
        // get the coordinates of the touch
        this.m_startX = event.touches[0].pageX;
        this.m_startY = event.touches[0].pageY;
    
        // need these to detect whether touch is hold and move vs. swipe
        this.m_currentX = this.m_startX;
        this.m_currentY = this.m_startY;        
        this.m_prevX = this.m_startX;
        this.m_prevY = this.m_startY;
        this.m_moveCount = 0;

        // flag it
        this.m_touchActive = true;
        
        target = event.touches[0].target;
        //if multiple select enabled check to see if the touch start was on a select affordance
        if (this.isMultipleSelection())
        {
            //if the target is not the container, but rather the icon itself, choose the container instead
            if (target['className'] === this.getMappedStyle("selectaffordancetop") || target['className'] === this.getMappedStyle("selectaffordancebottom"))
            {
                target = target['parentNode'];
            }
            
            //determine which icon was clicked on
            dir = target === this.m_topSelectIconContainer ? 'top' : target === this.m_bottomSelectIconContainer ? 'bottom' : null;
            
            if (dir)
            {
                //keeps track of multiple select mode
                this.m_touchMultipleSelect = true;
                selection = this.GetSelection();
                if (dir === 'top')
                {
                    //anchor is bottom right of selection for selecting top affordance
                    this.m_touchSelectAnchor = selection[selection.length-1]['endIndex'];
                }
                else
                {
                    //anchor is top left of selection for selecting bottom affordance
                    this.m_touchSelectAnchor = selection[selection.length-1]['startIndex'];
                }
            }
        }
        
        //if not multiple select, check for row reorder
        if (!this.m_touchMultipleSelect && this._isMoveOnRowEnabled(this.find(event.touches[0].target, 'row')))
        {
            this.m_databodyMove = true;
        }        
    }
    else
    {
        // more than one finger touched so cancel
        this.handleTouchCancel(event);
    }
};

/**
 * Event handler for when touch moves on the databody
 * @param {Event} event - touchmove event on the databody
 */
DvtDataGrid.prototype.handleTouchMove = function(event)
{
    var diffX, diffY;

    if (this.m_touchActive)
    {
        event.preventDefault();
        this.m_currentX = event.touches[0].pageX;
        this.m_currentY = event.touches[0].pageY;

        diffX = this.m_currentX - this.m_prevX;
        diffY = this.m_currentY - this.m_prevY;        
        if (this.m_touchMultipleSelect)
        {
            this.handleDatabodySelectionDrag(event);        
        }
        else if (this.m_databodyMove)
        {
            this._removeTouchSelectionAffordance();            
            this._handleMove(event);
        }
        else if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10)
        {
            // hold and move motion...
             this.handleTouchAndHoldScroll(diffX, diffY);
             this.m_moveCount++;
        }
        else
        {
            // a longer swipe, reset count
            this.m_moveCount = 0;
        }
        this.m_prevX = this.m_currentX;
        this.m_prevY = this.m_currentY;
    }
    else
    {
        this.handleTouchCancel(event);
    }
};

/**
 * Event handler for when touch ends on the databody
 * @param {Event} event - touchend event on the databody
 */
DvtDataGrid.prototype.handleTouchEnd = function(event)
{
    var swipeLength, swipeAngle, swipeDir;
    
    if (this.m_touchActive)
    {
        if (this.m_touchMultipleSelect) 
        {
            event.preventDefault();
            this.m_touchMultipleSelect = false;            
        }
        else if (this.m_databodyMove)
        {
            event.preventDefault();
            this.m_databodyMove = false;
            this._handleMoveMouseUp(event,true);
        }
        else
        {
            if (this.m_currentX == this.m_startX && this.m_currentY == this.m_startY)
            {
                if (this._isSelectionEnabled())
                {                    
                    this.handleDatabodyClickSelection(event);
                    return;
                }
                else
                {
                    //activate on a tap
                    this.handleDatabodyClickActive(event);
                    return;
                }
            }

            // detect whether this is a swipe
            if (this.m_moveCount > 1)
            {
                event.preventDefault();
                this.handleTouchCancel(event); // reset the variables
                //center touch affordances if row selection multiple
                if (this._isSelectionEnabled())
                {
                    this._scrollTouchSelectionAffordance();
                }
                return;
            }

            // use the Distance Formula to determine the length of the swipe
            swipeLength = Math.round(Math.sqrt(Math.pow(this.m_currentX - this.m_startX, 2) + Math.pow(this.m_currentY - this.m_startY, 2)));
            // if the user swiped more than the minimum length (set at 0 now), perform the appropriate action
            if (swipeLength > 0)
            {
                event.preventDefault();
                swipeAngle = this.caluculateAngle();
                swipeDir = this.determineSwipeDirection(swipeAngle);
                this.handleSwipe(swipeLength, swipeDir);
                //center touch affordances if row selection multiple                
                if (this._isSelectionEnabled())
                {
                    this._scrollTouchSelectionAffordance();
                }
            }
        }

    }

    this.handleTouchCancel(event);
};

/**
 * Event handler for when touch is cancelled on the databody
 * @param {Event} event - touchcancel event on the databody
 */
DvtDataGrid.prototype.handleTouchCancel = function(event)
{
    if (this.m_databodyMove)
    {
        this._handleMoveMouseUp(event, false);
        this.m_databodyMove = false;
    }
    this.m_touchSelectAnchor = null;
    this.m_touchMultipleSelect = false;
    // reset the variables back to default values
    this.m_touchActive = false;
    this.m_moveCount = 0;
    this.m_startX = 0;
    this.m_startY = 0;
    this.m_prevX = 0;
    this.m_prevY = 0;
    this.m_currentX = 0;
    this.m_currentY = 0;
};

/**
 * Handling touch and hold scroll
 * @param {number} deltaX - change in X scroll position
 * @param {number} deltaY - change in Y scroll position
 */
DvtDataGrid.prototype.handleTouchAndHoldScroll = function(deltaX, deltaY)
{
    //if rtl we want to scroll the opposite direction
    if (this.getResources().isRTLMode() )
    {
        deltaX = deltaX * -1;
    }
    this.scrollDelta(deltaX * DvtDataGrid.TOUCHHOLD_MOMENTUM_FACTOR, deltaY * DvtDataGrid.TOUCHHOLD_MOMENTUM_FACTOR);
};

/**
 * Handling swipe gesture scroll
 * @param {number} swipeLength - length of swipe
 * @param {string} swipeDirection - direction of swipe
 */
DvtDataGrid.prototype.handleSwipe = function(swipeLength, swipeDirection)
{
    // give it extra momentum
    swipeLength = swipeLength * DvtDataGrid.SWIPE_MOMENTUM_FACTOR;

    if (swipeDirection == 'down')
    {
        this.scrollDelta(0, swipeLength);
    }
    else if (swipeDirection == 'up')
    {
        this.scrollDelta(0, -swipeLength);
    }
    else if (swipeDirection == 'left')
    {
        this.scrollDelta(-swipeLength, 0);
    }
    else if (swipeDirection == 'right')
    {
        this.scrollDelta(swipeLength, 0);
    }
};

/**
 * Calculate the angle of the swipe using the current versus starting positions.
 */
DvtDataGrid.prototype.caluculateAngle = function()
{
    var X, Y, Z, r, swipeAngle;
    X = this.m_startX - this.m_currentX;
    Y = this.m_currentY - this.m_startY;

    Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))); //the distance - rounded - in pixels
    r = Math.atan2(Y, X); //angle in radians (Cartesian system)
    swipeAngle = Math.round(r * 180 / Math.PI); //angle in degrees
    if (swipeAngle < 0)
    {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
    return swipeAngle;
};

/**
 * Determine the swipe direction based on angle
 * @param {number} swipeAngle - angle of swipe
 * @return {string} direction of swipe, left/right/up/down
 */
DvtDataGrid.prototype.determineSwipeDirection = function(swipeAngle)
{
    var swipeDirection, rtl, left, right;
    
    //if rtl we want to swipe the opposite direction    
    rtl = this.getResources().isRTLMode();
    left = rtl ? "right" : "left";
    right = rtl ? "left" : "right";

    if ((swipeAngle <= 45) && (swipeAngle >= 0))
    {
        swipeDirection = left;
    }
    else if ((swipeAngle <= 360) && (swipeAngle >= 315))
    {
        swipeDirection = left;
    }
    else if ((swipeAngle >= 135) && (swipeAngle <= 225))
    {
        swipeDirection = right;
    }
    else if ((swipeAngle > 45) && (swipeAngle < 135))
    {
        swipeDirection = 'down';
    }
    else
    {
        swipeDirection = 'up';
    }
    return swipeDirection;
};

/**
 * Event handler for when touch is started on the header
 * @param {Event} event - touchstart event on the header
 */
DvtDataGrid.prototype.handleHeaderTouchStart = function(event)
{
    var header, fingerCount;

    //store start time of touch
    this.m_touchStart = (new Date()).getTime();

    fingerCount = event.touches.length;
    // move = one finger swipe (or two?)
    if (fingerCount == 1)
    {
        // get the coordinates of the touch
        this.m_startX = event.touches[0].pageX;
        this.m_startY = event.touches[0].pageY;

        // need these to detect whether touch is hold and move vs. swipe
        this.m_currentX = this.m_startX;
        this.m_currentY = this.m_startY;        
        this.m_prevX = this.m_startX;
        this.m_prevY = this.m_startY;
        this.m_moveCount = 0;

        // flag it
        this.m_touchActive = true;
        header = this.findHeader(event.target);
                
        //after 500ms set the header active color as feedback if finger still down and not resizing
        setTimeout(function(){
            if (this.m_touchActive && !this.m_isResizing)
            {
                this.m_utils.addCSSClassName(header, this.getMappedStyle('focus'));
            }
        }.bind(this), 500);
        
        //after 1000ms remove the header active color because context menu should pop up and selection should be unchanged
        setTimeout(function(){
            if (this.m_touchActive && !this.m_isResizing)
            {
                this.m_utils.removeCSSClassName(header, this.getMappedStyle('focus'));
            }
        }.bind(this), 1000);
        
        if (this.isResizeEnabled())
        {
            this.handleResize(event);
            this.handleResizeMouseDown(event);
        }
        
    }
    else
    {
        // more than one finger touched so cancel
        this.handleHeaderTouchCancel(event);
    }
};


/**
 * Event handler for when touch moves on the header
 * @param {Event} event - touchmove event on the header
 */
DvtDataGrid.prototype.handleHeaderTouchMove = function(event)
{
    var diffX, diffY;

    if (this.m_touchActive)
    {        
        event.preventDefault();

        this.m_currentX = event.touches[0].pageX;
        this.m_currentY = event.touches[0].pageY;

        diffX = this.m_currentX - this.m_prevX;
        diffY = this.m_currentY - this.m_prevY;

        this.m_prevX = this.m_currentX;
        this.m_prevY = this.m_currentY;
        
        if (this.isResizeEnabled())
        {
            this.handleResize(event);
        }
    }
    else
    {
        this.handleTouchCancel(event);
    }
};

/**
 * Event handler for when touch ends on the header
 * @param {Event} event - touchend event on the header
 */
DvtDataGrid.prototype.handleHeaderTouchEnd = function(event)
{
    var touchEnd, touchLength, header, headerIndex, headerAxis, tapMax = 500, tapAndHoldMax =1000;
    
    //calculate the end of touch time for tap and hold
    touchEnd = (new Date()).getTime();
    touchLength = touchEnd - this.m_touchStart;

    if (this.m_touchActive)
    {
        this._removeTouchSelectionAffordance();            
        
        if (this.m_isResizing && this.isResizeEnabled())
        {
            event.preventDefault();            
            this.handleResizeMouseUp(event);
        }         
        else if (touchLength < tapMax)
        {
            //tap sorts on the header
            if (this._isDOMElementSortable(event.target))
            {
                event.preventDefault();                
                this._handleHeaderSort(event);
            }
        }
        else if (touchLength < tapAndHoldMax)
        {
            //tap and hold selects header
            header = this.findHeader(event.target);
            headerIndex = this.getHeaderCellIndex(header);
            headerAxis = this.getHeaderCellAxis(header);            
            if (headerAxis === 'row')
            {
                this._focusRowHeader(headerIndex);
            }
            else if (headerAxis === 'column')
            {
                this._focusColumnHeader(headerIndex);
            }
        }
        
        //tap and long hold shows context menu
        //TODO should show context menu, tbd if menu responsibility
        //this.fireEvent('contextmenu', {'event':event});
    }
    this.handleHeaderTouchCancel(event);
};

/**
 * Event handler for when touch is cancelled on the header
 * @param {Event} event - touchcancel event on the header
 */
DvtDataGrid.prototype.handleHeaderTouchCancel = function(event)
{
    // reset the variables back to default values
    this.m_touchActive = false;
    this.m_moveCount = 0;
    this.m_startX = 0;
    this.m_startY = 0;
    this.m_prevX = 0;
    this.m_prevY = 0;
    this.m_currentX = 0;
    this.m_currentY = 0;
};


/************* end touch related methods ********************/

/**
 * Callback on a widget listener
 * @param {string} functionName - the function name to look up in the callbacks
 * @param {Object} details - the object to pass into the callback function
 */
DvtDataGrid.prototype.fireEvent = function(functionName, details)
{
    var callback;
    if (functionName == null || details == null)
    {
        return;
    }

    callback = this.callbacks[functionName];
    if (callback != null)
    {
        callback(details);
    }
};

/**
 * Add a callback function to the callbacks object
 * @param {string} functionName - the function name to callback on
 * @param {Object.<Function>} handler - the function to callback to
 */
DvtDataGrid.prototype.addListener = function(functionName, handler)
{
    this.callbacks[functionName] = handler;
};
/*********************************** end dom event handling ***************************************/

/**
 * Set the style height on an element in pixels
 * @param {HTMLElement} elem - the element to set height on
 * @param {number} height - the pixel height to set the element to
 */
DvtDataGrid.prototype.setElementHeight = function(elem, height)
{
    elem['style']['height'] = height + "px";
};

/**
 * Get a number of the style height of an element 
 * @param {HTMLElement} elem - the element to get height on
 * @return {number} the style height of the element
 */
DvtDataGrid.prototype.getElementHeight = function(elem)
{
    return parseInt(elem['style']['height'], 10);
};

/**
 * Set the style width on an element in pixels
 * @param {HTMLElement} elem - the element to set width on
 * @param {number} width - the pixel width to set the element to
 */
DvtDataGrid.prototype.setElementWidth = function(elem, width)
{
    elem['style']['width'] = width + "px";
};

/**
 * Get a number of the style width of an element 
 * @param {HTMLElement} elem - the element to get width on
 * @return {number} the style width of the element
 */
DvtDataGrid.prototype.getElementWidth = function(elem)
{
    return parseInt(elem['style']['width'], 10);
};

/**
 * Set the style left/right/top/bottom on an element in pixels
 * @param {HTMLElement} elem - the element to set width on
 * @param {number} pix - the pixel width to set the element to
 * @param {string} dir - 'left','right','top,'bottom'
 * */
DvtDataGrid.prototype.setElementDir = function(elem, pix, dir)
{
    elem['style'][dir] = pix + "px";
};

/**
 * Get a number of the style left/right/top/bottom of an element 
 * @param {HTMLElement} elem - the element to get style left/right/top/bottom on
 * @param {string} dir - 'left','right','top,'bottom' 
 * @return {number} the style left/right/top/bottom of the element
 */
DvtDataGrid.prototype.getElementDir = function(elem, dir)
{
    return parseInt(elem['style'][dir], 10);
};

/************************* Model change event *****************************************/
/**
 * @private
 */
DvtDataGrid.BEFORE = 1;

/**
 * @private
 */
DvtDataGrid.AFTER = 2;

/**
 * @private
 */
DvtDataGrid.INSIDE = 3;

/**
 * Checks whether an index (row/column) is within the range of the current viewport.
 * @param {Object} indexes the row and column indexes
 * @return {number} BEFORE if the index is before the current viewport, AFTER if the index is after 
 *         the current viewport, INSIDE if the index is within the current viewport
 * @private
 */
DvtDataGrid.prototype._isInViewport = function(indexes)
{
    var rowIndex, columnIndex;

    rowIndex = indexes['row'];
    columnIndex = indexes['column'];

    if (rowIndex === -1 && columnIndex === -1)
    {
        // actually, this is an invalid index... should throw an error?
        return -1;
    }
    
    // if row index wasn't specified, just verify the column range
    if (rowIndex === -1)
    {
        if (columnIndex < this.m_startCol)
        {
            return DvtDataGrid.BEFORE;
        }

        if (columnIndex > this.m_endCol)
        {
            return DvtDataGrid.AFTER;
        }

        // if it's not before or after, it must be inside
        return DvtDataGrid.INSIDE;
    }

    // if column index wasn't specified, just verify the row range
    if (columnIndex === -1)
    {                
        if (rowIndex < this.m_startRow)
        {
            return DvtDataGrid.BEFORE;
        }

        if (rowIndex > this.m_endRow)
        {
            return DvtDataGrid.AFTER;
        }

        // if it's not before or after, it must be inside
        return DvtDataGrid.INSIDE;
    }

    // both row and column index are defined, then check both ranges
    if (columnIndex >= this.m_startCol && columnIndex <= this.m_endCol && rowIndex >= this.m_startRow && rowIndex <= this.m_endRow)
    {
        return DvtDataGrid.INSIDE;
    }

    // undefined
    return -1;
};

/**
 * Model event handler
 * @param {Object} event the model change event
 * @protected
 */
DvtDataGrid.prototype.handleModelEvent = function(event)
{
    var operation, keys, cellSet, indexes, source, indices, fragment, silent; //vvc9 vvc10
     
    // in case if the model event arrives before the grid is fully rendered, 
    // queue the event and handle it later
    if (!this.m_initialized)
    {
        if (this.m_modelEvents == undefined)
        {
            this.m_modelEvents = [];
        }
        this.m_modelEvents.push(event);
        return;
    }

    operation = event['operation'];
    keys = event['keys'];
    fragment = event['fragment']; //vvc10
    indices = event['indices']; //vvc10
    source = event['source']; //vvc9    
    indexes = event['indexes'];
    silent = event['silent'];

    if (operation === 'insert')
    {
        cellSet = event['result'];
        if (cellSet != null)
        {
            // range insert event with cellset returned
            // if we use FlattenedTreeDataGridDataSource (ojRowExpander) - allow expand animation
            if(source && source instanceof oj.FlattenedTreeDataGridDataSource)
            {
                this._handleModelInsertRangeEvent(cellSet, true);
            }
            else if(fragment) //vvc10
            {
                this._handleModelInsertRangeEvent(cellSet, fragment); //vvc10
            }            
            else
            {
                this._handleModelInsertRangeEvent(cellSet);
            }
        }
        else
        {
            this._handleModelInsertEvent(indexes, keys);
        }
    }
    else if (operation === 'update')
    {
        this._handleModelUpdateEvent(indexes, keys);
    }
    else if (operation === 'delete')
    {
        if(source && source instanceof oj.FlattenedTreeDataGridDataSource) //vvc9
        {
            this._handleModelDeleteEventWithAnimation(keys);
        }
        //delete rows with animation
        else if(indices) //vvc10
        {               
            this._handleModelDeleteEventWithAnimation(keys, indices);
        }        
        else
        {
            this._handleModelDeleteEvent(indexes, keys, silent);
        }
    }
    else if (operation === 'refresh')
    {
        this._handleModelRefreshEvent();
    }
    else if (operation === 'sync')
    {
        this._handleModelSyncEvent(event);
    }
};

/**
 * Handles model insert event
 * @param {Object} indexes the indexes that identifies the row that got updated.
 * @param {Object} keys the key that identifies the row that got updated.
 * @private
 */
DvtDataGrid.prototype._handleModelInsertEvent = function(indexes, keys)
{
    var flag, row, rowHeader;       
    // checks if the new row/column is in the viewport
    flag = this._isInViewport(indexes);
    //If the model inserted is just the next model fetch it
    if (flag === DvtDataGrid.INSIDE || (flag === DvtDataGrid.AFTER && indexes['row'] == (this.m_endRow + 1)))
    {
        // an insert can only be a insert new row or new column.  A cell insert is
        // automatically treated as row insert, keys['row'/'column'] can be the number 0
        if (keys['row'] != null)
        {
            this.fetchHeaders("row", indexes['row'], this.m_rowHeader, 1, {"success": this._handleHeaderInsertsFetchSuccess});            
            this.fetchCells(this.m_databody, this.m_scroller, indexes['row'], this.m_startCol, 1, this.m_endCol - this.m_startCol + 1, {"success": this._handleCellInsertsFetchSuccess});
        }
        else if (keys['column'] != null)
        {
            // todo: handle column insert
        }
    }
    else
    {        
        if (flag === DvtDataGrid.BEFORE)
        {
            this.m_startRow++;
            this.m_startRowHeader++;
            this.m_endRow++;
            this.m_endRowHeader++;
            this.m_startRowPixel += this.m_avgRowHeight;
            this.m_startRowHeaderPixel += this.m_avgRowHeight;
            this.m_endRowPixel += this.m_avgRowHeight;
            this.m_endRowHeaderPixel += this.m_avgRowHeight;      
            row = this.m_databody['firstChild']['childNodes'][1];
            if (row != null)               
            {
                this.pushRowsDown(row, this.m_avgRowHeight);
            }
            rowHeader = this.m_rowHeader['firstChild']['childNodes'][1];
            if (rowHeader != null)               
            {
                this.pushRowsDown(rowHeader, this.m_avgRowHeight);
            }         
        }

        this.scrollToIndex(indexes);
    }
};

/**
 * Handle a successful call to the data source fetchCells. Update the row and 
 * cell DOM elements when necessary.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRanges - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @param {boolean=} obj
 */
DvtDataGrid.prototype._handleCellInsertsFetchSuccess = function(cellSet, cellRanges, obj) //vvc10
{
    var rowStart;

    // so that grid will be resize
    this.m_initialized = false;

    // insert the row
    this.handleCellsFetchSuccess(cellSet, cellRanges, this.m_endRow >= cellRanges[0]['start'], obj); //vvc10
        
    // make sure the new row is in range
    rowStart = cellRanges[0]['start'];
    this._scrollRowIntoViewport(rowStart);

    // clean up rows outside of viewport (for non-highwatermark scrolling only)
    if (!this._isHighWatermarkScrolling())
    {
        this._cleanupViewport();
    }
    this.updateRowBanding();
    this.m_stopRowFetch = false;
    if (this.m_endRowHeader != -1)
    {
        this.m_stopRowHeaderFetch = false;
    }
    
    // Need to fill viewport in the case of a silent delete of multiple records with an insert following.
    // i.e. a splice of the data which removes 2 models silently and adds 1 back in, need to add the last model to fill view 
    this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
};

/**
 * Handle a successful call to the data source fetchHeaderss. Update the row header DOM elements when necessary.
 * @param {Object} headerSet - a HeaderSet object which encapsulates the result set of cells
 * @param {Array.<Object>} headerRanges - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype._handleHeaderInsertsFetchSuccess = function(headerSet, headerRanges)
{
    // so that grid will be resize
    this.m_initialized = false;
    // insert the row
    this.handleHeadersFetchSuccess(headerSet, headerRanges, this.m_endRowHeader >= headerRanges['start']);

};

/**
 * Scrolls the row with index into the viewport
 * @param {number} index the row index
 * @private
 */
DvtDataGrid.prototype._scrollRowIntoViewport = function(index)
{
    var absIndex, databodyContent, row, viewportTop, viewportBottom, rowTop, diff;

    absIndex = index - this.m_startRow;
    databodyContent = this.m_databody['firstChild'];
    row = databodyContent['childNodes'][absIndex+1];
    if (row == null)
    {
        // something is wrong the newly inserted row does not exists
        return;
    }

    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);

    rowTop = row.offsetTop;
    diff = viewportTop - rowTop;
    if (diff > 0)
    {
        // row added to top, scroll up
        this.scrollDelta(0, diff);
    }
    else
    {
        diff = viewportBottom - rowTop;
        if (diff < 0)
        {
            // row added to bottom, scroll down
            this.scrollDelta(0, diff);
        }
    }
};

/**
 * Remove any rows that are outside of the viewport.
 * @private
 */
DvtDataGrid.prototype._cleanupViewport = function()
{
    var viewportTop, viewportBottom;

    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);

    if (viewportTop > this.m_startRowPixel)
    {
        // clean up top rows
        if ((this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromTop(this.m_databody);
        }
    }
    else if (viewportBottom < this.m_endRowPixel)
    {
        // clean up bottom rows
        if ((this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromBottom(this.m_databody);
        }
    }
    
    if (viewportTop > this.m_startRowHeaderPixel)
    {
        // clean up top rows
        if ((this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromTop(this.m_rowHeader);
        }
    }
    else if (viewportBottom < this.m_endRowPixel)
    {
        // clean up bottom rows
        if ((this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromBottom(this.m_rowHeader);
        }
    }    
};

/**
 * Handles model range insert event
 * @param {Object} cellSet the range of cells inserted.
 * @param {Object} obj
 * @private
 */
DvtDataGrid.prototype._handleModelInsertRangeEvent = function(cellSet, obj) //vvc10
{
    var rowRange, columnRange;

    // reconstruct the cell ranges from result
    rowRange = {"axis": "row", "start": cellSet.getStart("row"), "count": cellSet.getCount("row")};
    columnRange = {"axis": "column", "start": cellSet.getStart("column"), "count": cellSet.getCount("column")};
    
    // insert the rows
    this._handleCellInsertsFetchSuccess(cellSet, [rowRange, columnRange], obj); //vvc10
};

/**
 * Handles model update event
 * @param {Object} indexes the indexes that identifies the row that got updated.
 * @param {Object} keys the key that identifies the row that got updated.
 * @private
 */
DvtDataGrid.prototype._handleModelUpdateEvent = function(indexes ,keys)
{
    var flag, rowRange, columnRange;
    
    // if the new row/column is in the viewport
    flag = this._isInViewport(indexes);
    if (flag === DvtDataGrid.INSIDE)
    {
        // range for the updated row
        rowRange = {"axis": "row", "start": indexes['row'], "count": 1};
        columnRange = {"axis": "column", "start": this.m_startCol, "count": this.m_endCol-this.m_startCol};

        this.showStatusText();

        // fetch the updated row
        this.getDataSource().fetchCells([rowRange, columnRange], {"success": this._handleCellUpdatesFetchSuccess, 
            "error": this.handleHeadersFetchError}, {'success': this, 'error': this});
    }

    // if it's not in range then do nothing
};

/**
 * Handle a successful call to the data source fetchCells. Update the row and 
 * cell DOM elements when necessary.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @private
 */
DvtDataGrid.prototype._handleCellUpdatesFetchSuccess = function(cellSet, cellRange)
{
    var rowStart, databodyContent, renderer, columnBandingInterval, rowBandingInterval, rowIndex, row;

    rowStart = cellRange[0]['start'];
    databodyContent = this.m_databody['firstChild'];

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    rowBandingInterval = this.m_options.getRowBandingInterval();

    // gets the relative index to the dom
    rowIndex = rowStart - this.m_startRow;
    row = databodyContent.childNodes[rowIndex+1];  // +1 since first one is resizer

    // update the cells in the row
    this._updateCellsInRow(cellSet, row, rowIndex, renderer, this.m_startCol, columnBandingInterval, rowBandingInterval);
};

/**
 * Retrieves the type of update animation to use.
 * @return {number} the type of update animation.  See constants.
 * @private
 */
DvtDataGrid.prototype._getUpdateAnimation = function()
{
    return DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT;
};

/**
 * Retrieves the update animation duration.
 * @return {number} the animation duration.
 * @private
 */
DvtDataGrid.prototype._getUpdateAnimationDuration = function()
{
    return DvtDataGrid.UPDATE_ANIMATION_DURATION;
};

/**
 * Adds cells to a row. Iterate over the cells passed in, create new div elements 
 * for them settign appropriate styles, and append or prepend them to the row based on the start column.
 * @param {Object} cellSet - the result set of cell data
 * @param {Element} row - the row element to update cells
 * @param {number} rowIndex - the index of the row element
 * @param {function(Object)} renderer - the cell renderer
 * @param {number} columnStart - the index to start start adding at
 * @param {number} columnBandingInterval - the column banding interval
 * @param {number} rowBandingInterval - the row banding interval
 * @private
 */
DvtDataGrid.prototype._updateCellsInRow = function(cellSet, row, rowIndex, renderer, columnStart, columnBandingInterval, rowBandingInterval)
{
    var animationType, animationDuration;

    animationType = this._getUpdateAnimation();
    animationDuration = this._getUpdateAnimationDuration();

    // check whether animation should be used
    if (animationDuration === 0)
    {
        // clear the content of the row first
        row.innerHTML = "";

        // calls addCellsToRow
        this.addCellsToRow(cellSet, row, rowIndex, renderer, true, columnStart, false, columnBandingInterval);

        // re-apply selection and active cell since content changed
        if (this._isSelectionEnabled())
        {
            this.applySelection();
        }
        this.highlightActive(false);
    }
    else
    {
        switch(animationType)
        {
            case DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT:
                row['style']['opacity'] = 0;
                break;
            case DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT:
                row['style']['left'] = this.getWidth()+'px';
                break;
            default:
                // do nothing
        }
    
        setTimeout(function() {
            // clear the content of the row first
            row.innerHTML = "";

            // calls addCellsToRow
            this.addCellsToRow(cellSet, row, rowIndex, renderer, true, columnStart, false, columnBandingInterval);

            // hide fetching text now that we are done
            this.hideStatusText();

            setTimeout(function() {
                switch(animationType)
                {
                    case DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT:
                        row['style']['opacity'] = 1;
                        break;
                    case DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT:
                        row['style']['left'] = '0px';
                        break;
                    default:
                    // do nothing
                }
            }, animationDuration);

            // re-apply selection and active cell since content changed
            if (this._isSelectionEnabled())
            {
                this.applySelection();
            }
            this.highlightActive(false);
        }.bind(this), animationDuration);
    }
};

/**
 * Handles model delete event
 * @param {Array|Object} indexes the indexes that identifies the row that got deleted.
 * @param {Array|Object} keys the key that identifies the row that got deleted.
 * @param {boolean} silent true if the datagrid should not fill the databody
 * @private
 */
DvtDataGrid.prototype._handleModelDeleteEvent = function(indexes, keys, silent)
{
    var key, i, rowKey, row, height, referenceRow, databodyContent, beforeRowsHeight, insideRowsHeight, afterRowsHeight,
            databodyContentHeight, rowHeader, flag, index, beforeRowsDeleted, insideRowsDeleted, totalHeight, scrollerContent;

    // make it an array if it's a single entry event
    if (!Array.isArray(keys))
    {
        keys = new Array(keys);
        indexes = new Array(indexes);        
    }

    beforeRowsHeight = 0;
    insideRowsHeight = 0;
    afterRowsHeight = 0;
    beforeRowsDeleted = 0;
    insideRowsDeleted = 0;
    for (i=0; i<keys.length; i++)
    {
        key = keys[i];
        index = indexes[i];
        if (key['row'] != null)
        {   
            height = 0;
            rowKey = key['row'];            
            flag = this._isInViewport(index);
            if (flag === DvtDataGrid.BEFORE)
            {
                //should only happen in virtual scrolling
                beforeRowsDeleted++;
                beforeRowsHeight += this.m_avgRowHeight;
                this.m_startRowPixel -= this.m_avgRowHeight;
                this.m_endRowPixel -= this.m_avgRowHeight;
                if (this.m_endRowHeader != -1)
                {                       
                    this.m_startRowHeaderPixel -= this.m_avgRowHeight;
                    this.m_endRowHeaderPixel -= this.m_avgRowHeight;
                }
                row = this.m_databody['firstChild']['childNodes'][1];
                if (row != null)               
                {
                    this.pushRowsUp(row, this.m_avgRowHeight);
                }
                rowHeader = this.m_rowHeader['firstChild']['childNodes'][1];
                if (rowHeader != null)               
                {
                    this.pushRowsUp(rowHeader, this.m_avgRowHeight);
                }                                
            }
            else if (flag === DvtDataGrid.INSIDE)
            {
                insideRowsDeleted++;
                row = this._findRowByKey(rowKey);
                if (row != null)               
                {
                    height = this.calculateRowHeight(row);  
                    referenceRow = row['nextSibling'];
                    row['parentNode'].removeChild(row);
                    this.pushRowsUp(referenceRow, height);
                    this.m_endRowPixel -= height;
                }
                rowHeader = this._findRowHeaderByKey(rowKey);
                if (rowHeader != null)
                {
                    height = this.calculateRowHeaderHeight(rowHeader);
                    referenceRow = rowHeader['nextSibling'];
                    rowHeader['parentNode'].removeChild(rowHeader);
                    this.pushRowHeadersUp(referenceRow, height);
                    this.m_endRowHeaderPixel -= height;                    
                }
                insideRowsHeight = insideRowsHeight + height;
            }
            else //flag === DvtDataGrid.AFTER
            {
                //only include after rows if virtual scroll
                if (this.m_options.getScrollPolicy() === 'scroll')
                {
                    afterRowsHeight += this.m_avgRowHeight;
                }
            }
        }
    }

    this.m_startRow -= beforeRowsDeleted;
    this.m_endRow = this.m_endRow - beforeRowsDeleted - insideRowsDeleted;
    if (this.m_endRowHeader != -1)
    {
        this.m_startRowHeader -= beforeRowsDeleted;
        this.m_endRowHeader = this.m_endRowHeader - beforeRowsDeleted - insideRowsDeleted;
    }
    totalHeight = beforeRowsHeight + insideRowsHeight + afterRowsHeight;
    
    // adjust the databody height         
    databodyContent = this.m_databody['firstChild'];
    scrollerContent = this.m_scroller['firstChild'];
    databodyContentHeight = this.getElementHeight(databodyContent)-totalHeight;
    this.setElementHeight(databodyContent, databodyContentHeight);
    this.setElementHeight(scrollerContent, databodyContentHeight);
    this.resizeGrid();

    if (!silent)
    {
        // so that grid will be resize
        this.m_initialized = false;
        // check viewport to see if we need to fetch because of deleted row causing empty spaces
        this.m_stopRowFetch = false;
        if (this.m_endRowHeader != -1)
        {
            this.m_stopRowHeaderFetch = false;
        }
        this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
    }
    this.updateRowBanding();
};

/**
 * Handles model delete event with animation
 * @param {Array} keys the key that identifies the row that got deleted.
 * @param {Array=} indices
 * @private
 */
DvtDataGrid.prototype._handleModelDeleteEventWithAnimation = function(keys, indices) //vvc9 vvc10
{
    
    if(indices)
    {
        this._removeRowsWithAnimation(keys, indices);
    }
    else
    {
        this._collapseRowsWithAnimation(keys);
    }
};

/**
 * Helper function to calculate gaps in the selection if any.
 * @param {Array.<number>} indices indices that identifies rows that got deleted.
 * @return {Array.<Array.<number>>} idxs.
 * @private
 */
DvtDataGrid.prototype._getSelectionGaps = function(indices) //vvc10
{
    var i, idx, idxs, first;
        
    idx = [];
    idxs = [];    
    first = true;
    
    for(i=0; i < indices.length-1; i++)
    {
        if(indices[i+1]-indices[i] == 1)
        {
            idx.push(indices[i]);
            first = false;
        }
        else
        {
            if(first)
            {
                idx.push(indices[i]);
            }
            else
            {
                idx.push(indices[i]);
            }
            idxs.push(idx);
            idx = [];
            first = true;
        }
    }
    idx.push(indices[indices.length-1]);
    idxs.push(idx);
    
    return idxs;
};

/**
 * Helper method to get row by it's local position. 
 * @param {number} pos the local position of the row.
 * @return {Element} row
 * @private
 */
DvtDataGrid.prototype._getRowByLocalPosition = function(pos) //vvc10
{
    var rowKey;
    rowKey = this._getLocalKeys({'row':pos}).row;
    return this._findRowByKey(rowKey);
};

/**
 * Helper method to process animated rows in responce on the model delete event
 * @param {Object} keys the key that identifies the row that got deleted.
 * @param {Array} indices
 * @param {Array.<Array.<number>>=} indices
 * @private
 */
DvtDataGrid.prototype._removeRowsWithAnimation = function(keys, indices) //vvc10
{
    var self, key, i, j, k, rowKey, row, totalHeight, height, referenceRow, databodyContent,
        rowHeader, duration, lastTopRow, keyAttribute, start, firstRowCase,
        duration_slide, duration_del, delay_slide, delay_del, easing, gaps,
        transition_duration, transition_delay, transition_timing_function, opacity, transform,
        rwn, adjustment, rwp, gap_size;
    
    self = this;
    
    gaps = self._getSelectionGaps(indices);
    row = self._getRowByLocalPosition(indices[indices.length-1]);
    referenceRow = row['nextSibling'];
    gap_size = 0;
    
    duration_slide = 600;
    duration_del = 400; 
    delay_slide = 150;
    delay_del = 0;
    easing = "Cubic-bezier(0.70,0.00,0.51,1.29)";
    
    transition_duration = self.getCssSupport('transition-duration');
    transition_delay = self.getCssSupport('transition-delay');
    transition_timing_function = self.getCssSupport('transition-timing-function');
    opacity = self.getCssSupport('opacity');
    transform = self.getCssSupport('transform');
    
    duration = DvtDataGrid.DELETE_ANIMATION_DURATION;
    firstRowCase = true;
    databodyContent = self.m_databody['firstChild'];
    lastTopRow = self._getRowByLocalPosition(indices[0]);
    if(lastTopRow['previousSibling'].childElementCount != 0)
    {
        lastTopRow = lastTopRow['previousSibling'];
        firstRowCase = false;
    }
    keyAttribute = this.getResources().getMappedAttribute('key');

    for (i=0; i<keys.length; i++)
    {
        key = keys[i];

        // delete row or column
        if (key['row'])
        {
            rowKey = key['row'];
            // find the row locally, we can't ask the datasource for its index since
            // it's already removed.
            row = self._findRowByKey(rowKey);
            if (row != null)
            {
                height = self.calculateRowHeight(row);               
                //add animation CSS rules to each row's style
                self.changeStyleProperty(row, transition_duration, duration_del + "ms");
                self.changeStyleProperty(row, transition_delay, delay_del + "ms");
                self.changeStyleProperty(row, transition_timing_function, easing);
                self.changeStyleProperty(row, opacity, 0);                              
            }
            else
            {
                // outside of viewport
                height = self.m_avgRowHeight;
            }

            rowHeader = self._findRowHeaderByKey(rowKey);
            if (rowHeader != null)
            {
                //TODO implement collapse animation for rowHeaders here
                               
                height = self.calculateRowHeaderHeight(rowHeader);
                referenceRow = rowHeader['nextSibling'];
                self.pushRowHeadersUp(referenceRow, height);
                rowHeader['parentNode'].removeChild(rowHeader);
                rowHeader['style']['display'] = 'none';
                self.m_endRowHeader = self.m_endRowHeader - 1;
                self.m_endRowHeaderPixel = self.m_endRowHeaderPixel - height; 
            }

            // adjust range
            self.m_endRow = self.m_endRow - 1;
            self.m_endRowPixel = self.m_endRowPixel - height;

            totalHeight = totalHeight + height;
        }
        else if (keys['column'])
        {
            // todo: handle remove column
        }
    }
    
    //slide up rest of rows if required
    if(gaps.length > 1)
    {
        for(i=0; i<gaps.length-1; i++){
            gap_size += gaps[i].length;
            adjustment = height*gap_size;
            for(j=gaps[i][gaps[i].length-1]+1; j<gaps[i+1][0]; j++)
            {
                row = self._getRowByLocalPosition(j);
                self.addUpDownMoveStyle(row, duration_slide + "ms", delay_slide + "ms", easing, "-" + adjustment);
            }
        }
    }
    
    rwn = referenceRow; 
    adjustment = height*keys.length; 
    
    while (rwn)
    {        
        rwp = rwn['previousSibling'];
        self.addUpDownMoveStyle(rwn, duration_slide + "ms", delay_slide + "ms", easing, "-" + adjustment);
        rwn = rwn['nextSibling'];
        if(!rwn)
        {
            rwp.addEventListener('transitionend', function() 
            {
                //delete all required rows at the end of the animation process
                for (j=0; j<keys.length; j++)
                {
                    if (keys[j]['row'])
                    {
                        row = self._findRowByKey(keys[j]['row']);                               
                        row['parentNode'].removeChild(row);
                        row['style']['display'] = 'none';
                    }
                }                     
                start = -1;
                for (k = 1; k < databodyContent.childElementCount; k++)
                {
                    row = databodyContent.childNodes[k];
                    if(lastTopRow.attributes[keyAttribute])
                    {                        
                        if(lastTopRow.attributes[keyAttribute].value == databodyContent.childNodes[k].attributes[keyAttribute].value)
                        {
                            start = k+1;
                        }
                    }
                    //clean all animation (transition) parameters for each animated row if required
                    self.changeStyleProperty(row, self.getCssSupport('z-index'), 0, "remove");                                    
                    self.changeStyleProperty(row, transition_duration, 0, "remove");
                    self.changeStyleProperty(row, transition_delay, 0, "remove");
                    self.changeStyleProperty(row, transition_timing_function, 'linear', "remove");
                    self.changeStyleProperty(row, transform, 0, "remove");
                    //and assign correct top values instead
                    if(start > 0)
                    {
                        databodyContent.childNodes[k].style.top = lastTopRow.offsetTop + height*(k-start+1) + 'px';
                    }
                    else
                    {
                        if(firstRowCase)
                        {
                            databodyContent.childNodes[k].style.top = lastTopRow.offsetTop + height*(k-1)+'px';
                        }
                    }                                                   
                }
                
                // adjust the databody height         
                self.setElementHeight(databodyContent, self.getElementHeight(databodyContent)-totalHeight);
                self.setElementHeight(self.m_scroller['firstChild'], self.getElementHeight(databodyContent)-totalHeight);

                // now resize the grid
                self.resizeGrid();

                // check viewport to see if we need to fetch because of deleted row causing empty spaces
                self.m_stopRowFetch = false;
                self.fillViewport(self.m_currentScrollLeft, self.m_currentScrollTop);
                self.updateRowBanding();
                //Note: JSLint 2 issues: Don't make functions within a loop, don't use arguments.callee
                this.removeEventListener('transitionend',arguments.callee,false);
            }, false);
        }
    }
};

/**
 * Helper method to process animated rows in responce on the model delete event
 * @param {Object} keys set of keys that identifies rows that got deleted.
 * @private
 */
DvtDataGrid.prototype._collapseRowsWithAnimation = function(keys) //vvc9 vvc10
{
    var key, i, j, k, rowKey, row, totalHeight, height, referenceRow, databodyContent,
        rowHeader, duration, clickedRow, keyAttribute, start, self,
        transition_duration, transition_delay, transition_timing, transform;

    duration = 300;
    self = this;
    
    transition_duration = self.getCssSupport('transition-duration');
    transition_delay = self.getCssSupport('transition-delay'); 
    transition_timing = self.getCssSupport('transition-timing-function'); 
    transform = self.getCssSupport('transform');
    
    databodyContent = self.m_databody['firstChild'];
    clickedRow = self._findRowByKey(keys[0]['row'])['previousSibling'];
    keyAttribute = self.getResources().getMappedAttribute('key');
    
    //all inherited animated rows should be hidden under primary collapsed one
    this.changeStyleProperty(self._findRowByKey(keys[0]['row'])['parentNode'], self.getCssSupport('z-index'), 10000);   
    
    for (i=keys.length-1; i>=0; i--)
    {
        key = keys[i];

        // delete row or column
        if (key['row'])
        {
            rowKey = key['row'];
            // find the row locally, we can't ask the datasource for its index since
            // it's already removed.
            row = self._findRowByKey(rowKey);
            if (row != null)
            {
                height = self.calculateRowHeight(row);               
                referenceRow = row['nextSibling'];
                self.changeStyleProperty(row, self.getCssSupport('z-index'), "-1"+(i+1));
                //add animation CSS rules to each row's style
                self.addUpDownMoveStyle(row, duration + "ms", 0, 'ease-out', '-'+row['offsetTop']);
                //detect the last row to add transition end event listener to perform final steps
                if(i == keys.length-1)
                {
                    row.addEventListener('transitionend', function() 
                    {                              
                        //delete all required rows at the end of the animation process
                        for (j=0; j<keys.length; j++)
                        {
                            if (keys[j]['row'])
                            {
                                row = self._findRowByKey(keys[j]['row']);                               
                                row['parentNode'].removeChild(row);
                                row['style']['display'] = 'none';
                            }
                        } 
                        
                        setTimeout(function()
                        {                            
                            start = -1;
                            for (k = 1; k < databodyContent.childElementCount; k++)
                            {
                                if(clickedRow.attributes[keyAttribute])
                                {                        
                                    if(clickedRow.attributes[keyAttribute].value == databodyContent.childNodes[k].attributes[keyAttribute].value)
                                    {
                                        start = k+1;
                                    }
                                }
                                //clean all animation (transition) parameters for each animated row if required
                                self.changeStyleProperty(databodyContent.childNodes[k], self.getCssSupport('z-index'), 0, "remove");
                                if(databodyContent.children[k].style[transform])
                                {                                    
                                    self.changeStyleProperty(databodyContent.childNodes[k], transition_duration, 0, "remove");
                                    self.changeStyleProperty(databodyContent.childNodes[k], transition_delay, 0, "remove");
                                    self.changeStyleProperty(databodyContent.childNodes[k], transition_timing, 'linear', "remove");
                                    self.changeStyleProperty(databodyContent.childNodes[k], transform, 0, "remove");
                                }
                                //and assign correct top values instead
                                if(start > 0)
                                {
                                    databodyContent.childNodes[k].style.top = clickedRow.offsetTop + self.getDefaultRowHeight()*(k-start+1) + 'px';
                                }                               
                            }
                        },0);
                        self.resizeGrid();
                        // check viewport to see if we need to fetch because of deleted row causing empty spaces
                        self.m_stopRowFetch = false;
                        self.fillViewport(self.m_currentScrollLeft, self.m_currentScrollTop);
                        self.updateRowBanding();
                        //Note: JSLint 2 issues: Don't make functions within a loop, don't use arguments.callee                        
                        this.removeEventListener('transitionend',arguments.callee,false);
                    }, false);
                }                               
            }
            else
            {
                // outside of viewport
                height = self.m_avgRowHeight;
            }

            rowHeader = self._findRowHeaderByKey(rowKey);
            if (rowHeader != null)
            {
                //TODO implement collapse animation for rowHeaders here
                                
                height = self.calculateRowHeaderHeight(rowHeader);
                referenceRow = rowHeader['nextSibling'];
                self.pushRowHeadersUp(referenceRow, height);
                rowHeader['parentNode'].removeChild(rowHeader);
                rowHeader['style']['display'] = 'none';
                self.m_endRowHeader = self.m_endRowHeader - 1;
                self.m_endRowHeaderPixel = self.m_endRowHeaderPixel - height; 
            }

            // adjust range
            self.m_endRow = self.m_endRow - 1;
            self.m_endRowPixel = self.m_endRowPixel - height;

            totalHeight = totalHeight + height;
        }
        else if (keys['column'])
        {
            // todo: handle remove column
        }
    }
    //animate the rest of rows underlaied to the collapsed ones
    self.pushRowsUpWithAnimation(self, referenceRow, height*keys.length, duration, 0, 'linear');
};

/**
 * Push the row and all of its next siblings up with animation.
 * @param {Object} self this
 * @param {Element} row the starting row to push down.
 * @param {number} adjustment the amount in pixel to push down.
 * @param {number} duration the duration of animation.
 * @param {number} delay the delay of animation.
 * @param {string} easing the easing function.
 * @private
 */
DvtDataGrid.prototype.pushRowsUpWithAnimation = function(self, row, adjustment, duration, delay, easing) //vvc9 vvc10
{
    var i, databodyContent, scrollerContent, databodyContentHeight;
    
    databodyContentHeight = 0;
    while (row)
    {        
        //add transition animation rules to the row's CSS style
        self.addUpDownMoveStyle(row, duration + "ms", delay + "ms", easing, "-"+adjustment); //vvc10
        //detect the last row to add transition end event listener
        if(!row['nextSibling'])
        {
            row.addEventListener('transitionend', function() 
            {
                // adjust the databody height
                databodyContent = self.m_databody['firstChild'];
                scrollerContent = self.m_scroller['firstChild'];
                for(i=1; i<databodyContent.childElementCount; i++)
                {
                    databodyContentHeight += databodyContent.childNodes[i].clientHeight;
                }
                self.setElementHeight(databodyContent, databodyContentHeight);
                self.setElementHeight(scrollerContent, databodyContentHeight);

                // now resize the grid
                self.resizeGrid();
                
                self.m_stopRowFetch = false;
                self.fillViewport(self.m_currentScrollLeft, self.m_currentScrollTop);
                self.updateRowBanding(); 
                //Note: JSLint issue Don't make functions within a loop                
            }, false);
        }
        row = row['nextSibling'];
    }
};

/**
 * Find the row element by row key
 * @param {Object} key the row key
 * @return {Element} the row element
 * @private
 */
DvtDataGrid.prototype._findRowByKey = function(key)
{
    var databodyContent, rows, row, i, rowKey, keyAttribute;
    
    if (this.m_databody == null)
    {
        return null;
    }

    databodyContent = this.m_databody['firstChild'];
    rows = databodyContent['childNodes'];
    keyAttribute = this.getResources().getMappedAttribute('key');
    for (i=1; i<rows.length; i++)
    {
        row = rows[i];
        rowKey = row.getAttribute(keyAttribute);
        if (rowKey == key)
        {
            return row;
        }        
    }

    // can't find it, the row is not in viewport
    return null;
};

/**
 * Find the row header element by row key
 * @param {Object} key the row key
 * @return {Element} the row element
 * @private
 */
DvtDataGrid.prototype._findRowHeaderByKey = function(key)
{
    var rowHeaderContent, rows, row, i, rowKey, keyAttribute;
    
    if (this.m_rowHeader == null)
    {
        return null;
    }

    rowHeaderContent = this.m_rowHeader['firstChild'];
    rows = rowHeaderContent['childNodes'];
    keyAttribute = this.getResources().getMappedAttribute('key');
    for (i=1; i<rows.length; i++)
    {
        row = rows[i];
        rowKey = row.getAttribute(keyAttribute);
        if (rowKey == key)
        {
            return row;
        }        
    }

    // can't find it, the row is not in viewport
    return null;
};

/**
 * Find the row header element by column key
 * @param {Object} key the column key
 * @return {Element} the column element
 * @private
 */
DvtDataGrid.prototype._findColumnHeaderByKey = function(key)
{
    var columnHeaderContent, columns, column, i, columnKey, keyAttribute;
    
    if (this.m_colHeader == null)
    {
        return null;
    }

    columnHeaderContent = this.m_colHeader['firstChild'];
    columns = columnHeaderContent['childNodes'];
    keyAttribute = this.getResources().getMappedAttribute('key');
    for (i=0; i<columns.length; i++)
    {
        column = columns[i];
        columnKey = column.getAttribute(keyAttribute);
        if (columnKey == key)
        {
            return column;
        }        
    }

    // can't find it, the row is not in viewport
    return null;
};

/**
 * Handles model refresh event
 * @private
 */
DvtDataGrid.prototype._handleModelRefreshEvent = function()
{
    //remove all of the relevant children and refresh
    this.empty();
    this.refresh(this.m_root);
};

/**
 * Handles data source fetch end (model sync) event
 * @param {Object} event the model event
 * @private
 */
DvtDataGrid.prototype._handleModelSyncEvent = function(event)
{
    var startRow, pageSize, startRowPixel, startCol, startColPixel;
    //Currently these are set to zero for now, may come from the event later
    startRow = 0;
    startRowPixel = 0;   
    startCol = 0;
    startColPixel = 0;
    pageSize = event['pageSize'];

    //cancel previous fetch calls
    this.m_fetching = {};

    // reset ranges
    this.m_startRow = startRow;
    this.m_endRow = -1;
    this.m_startRowHeader = startRow;
    this.m_endRowHeader = -1;
    this.m_startRowPixel = startRowPixel;
    this.m_endRowPixel = startRowPixel;
    this.m_startRowHeaderPixel = startRowPixel;
    this.m_endRowHeaderPixel = startRowPixel; 
    this.m_startCol = startCol;
    this.m_endCol = -1;
    this.m_startColHeader = startCol;
    this.m_endColHeader = -1;
    this.m_startColPixel = startColPixel;
    this.m_endColPixel = startColPixel;
    this.m_startColHeaderPixel = startColPixel;
    this.m_endColHeaderPixel = startColPixel;    

    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;
    this.m_avgRowHeight = undefined;
    this.m_avgColWidth = undefined;

    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;
    
    //clear selections
    this.m_selection = null;    
    this.m_active = null;
    this.m_prevActive = null;
    
    if (this.m_empty != null)
    {
        this.m_root.removeChild(this.m_empty);
        this.m_empty = null;
    }
    
    this.m_initialized = false;
    this.fetchHeaders("row", startRow, this.m_rowHeader, pageSize, {'success': function(headerSet, headerRange)
        {
            this.handleRowHeadersFetchSuccessForLongScroll(headerSet, headerRange, startRowPixel);
        }});
    this.fetchHeaders("column", startCol, this.m_colHeader, undefined, {'success': function(headerSet, headerRange)
        {
            this.handleColumnHeadersFetchSuccessForLongScroll(headerSet, headerRange);
        }});

    this.fetchCells(this.m_databody, this.m_scroller, startRow, startCol, pageSize, null, {'success': function(cellSet, cellRange)
        {
            this.handleCellsFetchSuccessForLongScroll(cellSet, cellRange);
        }});      
    this.setInitialScrollPosition();
};

/************************************ active cell navigation ******************************/
/**
 * Sets the active cell
 * @param {Object} active the new active cell
 * @param {Event} event the DOM event causing the active cell change
 * @param {function} callback the function to call if the keys of the index need to be fetched
 */
DvtDataGrid.prototype.setActive = function(active, event, callback)
{
    // set key info
    if (active != null)
    {
        //get the active row keys from the index and set the new active on and callback if appropriate
        this._keys({'row': active['row'], 'column': active['column']}, this._setActiveCallback.bind(this, event, callback));   
    }
    else
    {
        this.m_prevActive = this.m_active;
        this.m_active = active;
        this._manageMoveCursor();        
    }
};

/**
 * @param {Event} event the DOM event causing the active cell change
 * @param {function} callback the function to call once completed
 * @param {Object} keys keys of the new active cell
 * @param {Object} indexes indexes of the new active cell
 * @private
 */
DvtDataGrid.prototype._setActiveCallback = function(event, callback, keys, indexes)
{
    var active = indexes;
    if ((this.m_active == null) || (keys['row'] != this.m_active['rowKey'] || keys['column'] != this.m_active['columnKey']))
    {
        active['rowKey'] = keys['row'];
        active['columnKey'] = keys['column'];
        this.m_prevActive = this.m_active;
        this.m_active = active;
        this._manageMoveCursor();
        this._fireActiveKeyChangeEvent(event);
    }
    callback.call(this);
};

/**
 * Fires an event when active key changed
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._fireActiveKeyChangeEvent = function(event)
{
    // the event contains the context info
    var details = {
        'event': event, 'ui': {
            'previousActiveKey': this.m_prevActive,
            'activeKey': this.m_active
        }
    };

    this.fireEvent('active', details);
};

/**
 * Handles click to make a cell active
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodyClickActive = function(event)
{
    var cell, index;

    cell = this.findCell(event.target);
    if (cell != null)
    {
        index = this.createIndex(this.getRowIndex(cell['parentNode']), this.getCellIndex(cell));
    }

    if (index != null && index != undefined)
    {
        // clear any active header
        this._setActiveHeader(-1);
        this.m_activeHeader = null;

        // make sure the cell is visible
        this.scrollToIndex(index);
        
        this.activeAndFocus(index, event);
    }
};

/**
 * Focus on the specified element and make it active
 * @param {Object} index - the end index of the selection.   
 * @param {Event} event - the DOM event causing the avtive and focus change
 */
DvtDataGrid.prototype.activeAndFocus = function(index, event)
{
    if (this.m_active != null)
    {
        // unhighlight previous
        this.unhighlightActive();
    }
    
    //highlight active after setting it using the setActive callback
    this.setActive(index, event, this.highlightActive.bind(this, undefined));
};

/**
 * Retrieve the index of a row
 * @param {Element|EventTarget} row
 * @return {number}
 */
DvtDataGrid.prototype.getRowIndex = function(row)
{
    var index = this.m_startRow;
    while (row['previousSibling'])
    {
        index += 1;
        row = row['previousSibling'];
    }
    return index - 1; // the first row is a resizer, skip it
};

/**
 * Retrieve the (column) index of a cell
 * @param {Element|EventTarget} cell
 * @return {number}
 */
DvtDataGrid.prototype.getCellIndex = function(cell)
{
    var index = this.m_startCol;
    while (cell['previousSibling'])
    {
        index += 1;
        cell = cell['previousSibling'];
    }
    return index;
};

/**
 * Retrieve the index of a header cell
 * @param {Element} header header cell element
 * @return {number}
 */
DvtDataGrid.prototype.getHeaderCellIndex = function(header)
{
    var axis, index;
    axis = this.getHeaderCellAxis(header);
    if (axis === 'row')
    {
        //resizer
        index = this.m_startRowHeader - 1;
        header = header['parentNode'];
    }
    else if (axis === 'column')
    {
        index = this.m_startColHeader;
    }

    while (header['previousSibling'])
    {
        index += 1;
        header = header['previousSibling'];
    }        
    
    return index;
};

/**
 * Retrieve the axis of a header cell
 * @param {Element} header header cell element
 * @return {string|null} row or column
 */
DvtDataGrid.prototype.getHeaderCellAxis = function(header)
{
    if (this.m_utils.containsCSSClassName(header, this.getMappedStyle('colheadercell')))
    {
        return 'column';
    }
    else if (this.m_utils.containsCSSClassName(header, this.getMappedStyle('rowheadercell')))
    {
        return 'row';
    }
    return null;
};

/**
 * Find the cell element (recursively if needed)
 * @private
 * @param {Element|EventTarget} elem
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.findCell = function(elem)
{
    return this.find(elem, "cell");
};

/**
 * Find the cell element (recursively if needed)
 * @param {Element|EventTarget} elem
 * @param {string} key
 * @param {string=} className 
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.find = function(elem, key, className)
{
    // if element is null or if we reach the root of DataGrid
    if (elem == null || elem == this.getRootElement())
    {
        return null;
    }

    // recursively walk up the element and find the class name that matches the cell class name
    if (className == undefined)
    {
        className = this.getMappedStyle(key);
    }

    if (className == null)
    {
        return null;
    }

    // if the element contains the cell class name, then it's a cell, otherwise go up
    if (this.m_utils.containsCSSClassName(elem, className))
    {
        return elem;
    }
    return this.find(elem['parentNode'], key, className);
};

/**
 * Highlight active element
 * @param {boolean=} focus
 */
DvtDataGrid.prototype.highlightActive = function(focus)
{
    var cell, skip;
    if (this.m_active != null)
    {   
        cell = this.highlightIndex(this.m_active, "focus");
    }
    // also set focus index on it
    if (cell != null)
    {
        // check whether the prev and current active cell is in the same row/column so that we can
        // skip row/column header info in aria-labelledby (to make the description more brief)
        if (this.m_prevActive != null && this.m_active != null)
        {
            if (this.m_prevActive['row'] === this.m_active['row'])
            {
                skip = "row";
            }
            else if (this.m_prevActive['column'] === this.m_active['column'])
            {
                skip = "column";
            }
        }
        
        // update context info
        this._updateContextInfo(this.m_active, skip);

        // focus on the cell (or first cell in the row)
        this.setAriaProperties(cell, (focus === undefined || focus === true) ? true : undefined, skip);
    }
};

/**
 * Unhighlight the active index, and turn the active index to selected instead if selectActive is true.
 * @param {boolean=} selectActive
 */
DvtDataGrid.prototype.unhighlightActive = function(selectActive)
{
    var cell, selectedClassName;
    cell = this.unhighlightIndex(this.m_active, true);
    if (selectActive)
    {
        selectedClassName = this.getMappedStyle("selected");
        if (selectedClassName != null)
        {
            this.highlightIndex(this.m_active, selectedClassName);
        }
    }

    // also set focus index on it
    if (cell != null)
    {
        this.unsetAriaProperties(cell);
    }
};

/**
 * Highlight a single cell index
 * @param {Object} index
 * @param {string=} style
 * @return {Element} the cell element that got highlighted.
 */
DvtDataGrid.prototype.highlightIndex = function(index, style)
{
    var cell, range, className, singleCell;

    range = this.createRange(index);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    if (style == undefined)
    {
        style = "selected";
    }

    singleCell = cell[0];
    className = this.getMappedStyle(style);
    if (className != null)
    {
        this.m_utils.addCSSClassName(singleCell, className);
        // only do it if index is a cell
        if (index['row'] && index['column'])
        {
            this.setAriaProperties(singleCell);
        }
    }        

    return singleCell;
};

/**
 * Unhighlight a single cell index
 * @param {Object} index
 * @param {boolean=} activeOnly
 */
DvtDataGrid.prototype.unhighlightIndex = function(index, activeOnly)
{
    var cell, range, activeClassName, selectedClassName, singleCell;
    range = this.createRange(index);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    singleCell = cell[0];
    activeClassName = this.getMappedStyle("focus");
    if (activeClassName != null)
    {
        this.m_utils.removeCSSClassName(singleCell, activeClassName);
    }

    if (activeOnly == undefined || !activeOnly)
    {
        selectedClassName = this.getMappedStyle("selected");
        if (selectedClassName != null)
        {
            this.m_utils.removeCSSClassName(singleCell, selectedClassName);
            this.unsetAriaProperties(singleCell);
        }
    }

    return singleCell;
};

/**
 * Sets appropriate wai-aria properties on a cell.
 * @param {Element} cell the cell element in which to set all wai-aria properties.
 * @param {boolean} focus whether to set focus on the cell
 * @param {string=} skip if "row" then skip getting the row header info, if "column" then skip getting the column header info
 *                  if undefined, then both row and column header info should be retrieved
 */
DvtDataGrid.prototype.setAriaProperties = function(cell, focus, skip)
{
    // set focus index
    cell.setAttribute("id", this.createSubId("active"));
    cell.setAttribute("tabIndex", 0);
    cell.setAttribute("aria-labelledby", this.getLabelledBy(cell, skip));        

    if (focus != undefined)
    {
        // check to see if we should focus on the cell later
        if (this.m_cellToFocus == null || this.m_cellToFocus != cell)
        {
            cell.focus();
        }
    }
};

/**
 * Reset all wai-aria properties from a cell.
 * @param {Element} cell the cell element in which to reset all wai-aria properties.
 */
DvtDataGrid.prototype.unsetAriaProperties = function(cell)
{
    // reset focus index
    cell.setAttribute("tabIndex", -1);
    // remove aria related attributes
    cell.removeAttribute("id");
    cell.removeAttribute("aria-labelledby");        
};

/**
 * Returns the wai-aria labelled by property for a cell
 * @param {Element} cell the element for the cell
 * @param {string=} skip if "row" then skip getting the row header info, if "column" then skip getting the column header info
 *                  if undefined, then both row and column header info should be retrieved
 * @return {string} the wai-aria labelled by property for the cell
 */
DvtDataGrid.prototype.getLabelledBy = function(cell, skip)
{
    var label, row, rowIndex, rows, colIndex, columns;

    label = "";
    // the row header, if any    
    if (this.m_rowHeader != null && skip != "row")
    {
        row = cell['parentNode'];
        rowIndex = this.findIndexOf(row);
        if (rowIndex > -1)
        {
            rows = this.m_rowHeader['firstChild']['childNodes'];
            // row headers might not exists
            if (rowIndex < rows.length)
            {
                label = rows[rowIndex]['id'];
            }
        }
    }
    
    // the column header
    if (this.m_colHeader != null && skip != "column")
    {
        colIndex = this.findIndexOf(cell);
        if (colIndex > -1)
        {
            columns = this.m_colHeader['firstChild']['childNodes'];
            if (colIndex < columns.length)
            {
                if (label == "")
                {
                    label = columns[colIndex]['id'];
                }
                else
                {
                    label = [label, columns[colIndex]['id']].join(" ");
                }
            }
        }
    }
    
    // finally the state info
    if (label == "")
    {
        label = this.createSubId("active");
    }
    else
    {
        label = [label, this.createSubId("active")].join(" ");
    }
    label = [this.createSubId("context"), label, this.createSubId("state")].join(" ");
    
    return label;
};

/**
 * Returns the header that is in line with a cell along an axis. 
 * Key Note: in the case of row, we return the row not the headercell
 * @param {Element} cell the element for the cell
 * @param {string} axis the axis along which to find the header, 'row', 'column'
 * @return {Element} the header Element along the axis
 */
DvtDataGrid.prototype.getHeaderFromCell = function(cell, axis)
{
    var row, rowIndex, rows, colIndex, columns;
    if (axis === 'row') {
        if (this.m_rowHeader != null)
        {
            row = cell['parentNode'];
            rowIndex = this.findIndexOf(row);
            if (rowIndex > -1)
            {                
                rows = this.m_rowHeader['firstChild']['childNodes'];
                // row headers might not exists
                if (rowIndex < rows.length)
                {
                    
                    return rows[rowIndex];
                }
            }
        }
    }
    else if (axis === 'column')
    {
        if (this.m_colHeader != null)
        {
            colIndex = this.findIndexOf(cell);
            if (colIndex > -1)
            {
                columns = this.m_colHeader['firstChild']['childNodes'];
                if (colIndex < columns.length)
                {
                    return columns[colIndex];
                }
            }
        }
    }
    return null;
};



/**
 * Helper method to find the index of a child from its parent
 * @param {Element} elem an HTML element
 * @return {number} the index of the element relative to its parent
 */
DvtDataGrid.prototype.findIndexOf = function(elem)
{
    var child, children, index, i;

    children = elem['parentNode']['childNodes'];
    index = -1;
    for (i=0; i<children.length; i += 1)
    {
        child = children[i];
        if (child === elem)
        {
            return index+1;
        }

        if (child.nodeName == 'DIV')
        {
            index++;
        }
    }

    return index;
};

/**
 * Creates a range object given the start and end index, will add in keys if they are passed in
 * @param {Object} startIndex - the start index of the range
 * @param {Object=} endIndex - the end index of the range.  Optional, if not specified it represents a single cell/row 
 * @param {Object=} startKey - the start key of the range.  Optional, if not specified it represents a single cell/row 
 * @param {Object=} endKey - the end key of the range.  Optional, if not specified it represents a single cell/row 
 * @return {Object} a range object representing the start and end index, along with the start and end key.
 */
DvtDataGrid.prototype.createRange = function(startIndex, endIndex, startKey, endKey)
{
    var startRow, endRow, startColumn, endColumn, startRowKey, endRowKey, startColumnKey, endColumnKey;
    if (endIndex)
    {
        // -1 means unbound
        if (startIndex['row'] < endIndex['row'] || endIndex['row'] == -1)
        {
            startRow = startIndex['row'];
            endRow = endIndex['row'];
            if (startKey)
            {    
                startRowKey = startKey['row'];
                endRowKey = endKey['row'];            
            }
        }
        else
        {
            startRow = endIndex['row'];
            endRow = startIndex['row'];
            if (startKey)
            {                
                startRowKey = endKey['row'];            
                endRowKey = startKey['row'];    
            }
        }

        // row based selection does not have column specified for range
        if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
        {
            // -1 means unbound
            if (startIndex['column'] < endIndex['column'] || endIndex['column'] == -1)
            {
                startColumn = startIndex['column'];
                endColumn = endIndex['column'];
                if (startKey)
                {                        
                    startColumnKey = startKey['column'];            
                    endColumnKey = endKey['column'];    
                }
            }
            else
            {
                startColumn = endIndex['column'];
                endColumn = startIndex['column'];
                if (startKey)
                {                        
                    startColumnKey = endKey['column'];            
                    endColumnKey = startKey['column'];      
                }
            }

            startIndex = {
                "row": startRow, "column": startColumn
            };
            endIndex = {
                "row": endRow, "column": endColumn
            };
            if (startKey)
            {        
                startKey = {
                    "row": startRowKey, "column": startColumnKey        
                };
                endKey = {
                    "row": endRowKey, "column": endColumnKey        
                };           
            }
        }
        else
        {
            startIndex = {
                "row": startRow
            };
            endIndex = {
                "row": endRow
            };
            if (startKey)
            {        
                startKey = {
                    "row": startRowKey, "column": startColumnKey        
                };
                endKey = {
                    "row": endRowKey, "column": endColumnKey        
                };                 
            }
        }
    }

    if (startKey)
    {        
        return {"startIndex": startIndex, "endIndex": endIndex, "startKey": startKey, "endKey":endKey};
    }
    
    return {"startIndex": startIndex, "endIndex": endIndex};    
};


/**
 * Creates a range object given the start and end index
 * @param {Object} startIndex - the start index of the range
 * @param {Object|null} endIndex - the end index of the range.
 * @param {function} callback - the callback for the range to call when its fully fetched
 * @private
 */
DvtDataGrid.prototype._createRangeWithKeys = function(startIndex, endIndex, callback)
{
    this._keys(startIndex, this._createRangeStartKeyCallback.bind(this, endIndex, callback));
};

/**
 * Creates a range object given the start and end index
 * @param {Object|null} endIndex - the end index of the range.
 * @param {function} callback - the callback for the range to call when its fully fetched
 * @param {Object} startKey - the start key of the range
 * @param {Object} startIndex - the start index of the range
 * @private
 */
DvtDataGrid.prototype._createRangeStartKeyCallback = function(endIndex, callback, startKey, startIndex)
{
    //keys will be the same
    if (endIndex === startIndex)
    {
        this._createRangeEndKeyCallback(startKey, startIndex, callback, startKey, startIndex);        
    }
    //new keys needed
    else if (endIndex)
    {
        this._keys(endIndex, this._createRangeEndKeyCallback.bind(this, startKey, startIndex, callback));        
    }
    //create range from single key    
    else
    {
        callback.call(this, {"startIndex": startIndex, "endIndex": startIndex, "startKey": startKey, "endKey": startKey});
    }
};

/**
 * Creates a range object given the start and end index
 * @param {Object} startKey - the start key of the range
 * @param {Object} startIndex - the start index of the range
 * @param {function} callback - the callback for the range to call when its fully fetched
 * @param {Object} endKey - the end key of the range.
 * @param {Object} endIndex - the end index of the range.
 * @private
 */
DvtDataGrid.prototype._createRangeEndKeyCallback = function(startKey, startIndex, callback, endKey, endIndex)
{
    callback.call(this, this.createRange(startIndex, endIndex, startKey, endKey));
};

/**
 * Retrieve the end index of the range, return start index if end index is undefined
 * @param {Object} range 
 * @return {Object}
 */
DvtDataGrid.prototype.getEndIndex = function(range)
{
    return (range['endIndex'] == null) ? range['startIndex'] : range['endIndex'];
};

/**
 * Grabs all the elements in the databody which are within the specified range.
 * @param range - the range in which to get the elements
 * @param {number=} startRow
 * @param {number=} endRow
 * @param {number=} startCol
 * @param {number=} endCol
 * @return {Array}
 */
DvtDataGrid.prototype.getElementsInRange = function(range, startRow, endRow, startCol, endCol)
{
    var startIndex, endIndex, rangeStartRow, rangeEndRow, rangeStartColumn, rangeEndColumn, nodes, databodyContent, rows, i, columns, j, cell, row;
    if (startRow == undefined)
    {
        startRow = this.m_startRow;
    }
    if (endRow == undefined)
    {
        endRow = this.m_endRow + 1;
    }

    startIndex = range['startIndex'];
    endIndex = this.getEndIndex(range);

    rangeStartRow = startIndex['row'];
    rangeEndRow = endIndex['row'];
    // index = -1 means unbounded index
    if (rangeEndRow == -1)
    {
        rangeEndRow = Number.MAX_VALUE;
    }

    // check if in the rendered range
    if (endRow < rangeStartRow || rangeEndRow < startRow)
    {
        return null;
    }

    if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
    {
        rangeStartColumn = startIndex['column'];
        rangeEndColumn = endIndex['column'];
        // index = -1 means unbounded index
        if (rangeEndColumn == -1)
        {
            rangeEndColumn = Number.MAX_VALUE;
        }

        // check if in the rendered range
        if ((this.m_endCol + 1) < rangeStartColumn || rangeEndColumn < this.m_startCol)
        {
            return null;
        }
    }

    nodes = [];
    // now walk the databody to find the nodes in range
    databodyContent = this.m_databody['firstChild'];
    rows = databodyContent['childNodes'];

    // the range is within the databody, calculate the relative position
    rangeStartRow = Math.max(0, rangeStartRow - this.m_startRow);
    rangeEndRow = Math.min(rows.length - 1, rangeEndRow - this.m_startRow + 1);

    // cell case
    if (!isNaN(rangeStartColumn) && !isNaN(rangeEndColumn))
    {
        if (startCol == undefined)
        {
            startCol = this.m_startCol;
        }

        rangeStartColumn = Math.max(0, rangeStartColumn - this.m_startCol);
        rangeEndColumn = rangeEndColumn - this.m_startCol + 1;
        for (i = rangeStartRow; i < rangeEndRow; i += 1)
        {
            // i+1 since first row is the resizer
            columns = rows[i + 1]['childNodes'];
            for (j = rangeStartColumn; j < Math.min(columns.length, rangeEndColumn); j += 1)
            {
                cell = columns[j];
                nodes.push(cell);
            }
        }
    }
    else
    {// row case
        for (i = rangeStartRow; i < rangeEndRow; i += 1)
        {
            row = rows[i + 1];
            nodes.push(row);
        }
    }

    return nodes;
};

/**
 * Checks whether the key event contains key strokes for reading active cell content
 * @param {event} event the dom event
 * @return {boolean} true if the event is for reading active cell content, false otherwise.
 * @protected
 */
DvtDataGrid.prototype.isReadCurrentContent = function(event)
{
    // the key combo is Ctrl+Alt+5
    return (event.altKey && this.m_utils.ctrlEquivalent(event) && event.keyCode === DvtDataGrid.NUM5_KEY);
};

/**
 * Read the full content of the active cell (or frontier cell) to the screen reader
 * @protected
 */
DvtDataGrid.prototype.readCurrentContent = function()
{
    var current, range, cell, currentCell, subid, needToModify, labelledBy;

    current = this.m_active;
    if (this._isSelectionEnabled() && this.isMultipleSelection())
    {
        if (this.m_selectionFrontier != null)
        {
            current = this.m_selectionFrontier;
        }
    }

    // make sure there is an active cell or frontier cell
    if (current == null)
    {
        return;
    }

    // find the cell div
    range = this.createRange(current);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    currentCell = cell[0];

    // update context info with full context reference
    this._updateContextInfo(current);
    
    // the aria-labelledby needs to be different from last time
    // when it's read otherwise the screenreader will not read it
    // therefore, toggle the aria-labelledby with a dummy reference
    subid = this.createSubId("placeHolder");
    needToModify = true;
    labelledBy = currentCell.getAttribute("aria-labelledby");
    if (labelledBy != null && labelledBy.indexOf(subid) != -1)
    {
        needToModify = false;
    }

    // update aria properties with full context reference, don't focus it yet
    this.setAriaProperties(currentCell, false);

    // add the reference to dummy subid if needed (see comment above)
    if (needToModify)
    {
        // the dummy div needs to have something (i.e. space or empty string doesn't work)
        this.m_placeHolder.innerHTML = "&nbsp";
        labelledBy = currentCell.getAttribute("aria-labelledby");
        currentCell.setAttribute("aria-labelledby", labelledBy + ' ' + subid);
    }
    else
    {
        this.m_placeHolder.innerHTML = "";
    }

    // focus active cell so the content is read
    currentCell.focus();
};

/**
 * Handles key event for active cell
 * @param {Event} event
 * @return  boolean true if the event was processed
 */
DvtDataGrid.prototype.handleActiveKeyDown = function(event)
{
    var keyCode;

    if (this._isFocusableElement(event.target))
    {
        // if this is a key operation on a focusable element, don't
        // override the behavior
        return;
    }
    
    // ctrl arrow key should do nothing
    keyCode = event.keyCode;
    if (this.isNavigationKey(keyCode) && !this.m_utils.ctrlEquivalent(event))
    {        
        return this.handleCellArrowKeys(keyCode, false, event);            
    }
    
    // check keystroke for reading content to screen reader
    if (this.isReadCurrentContent(event))
    {
        this.readCurrentContent();
    }
    
    return false;
};

/**
 * Determine whether the element is a focusable element.
 * @param {Element} elem the element to check
 * @return {boolean} true if element is a focusable element, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isFocusableElement = function(elem)
{
    var tagName = elem.tagName;
    return (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || tagName === 'BUTTON' || tagName === 'A' || (elem.getAttribute("tabIndex") != null && parseInt(elem.getAttribute("tabIndex"), 10) >= 0 && this.findCell(elem) != elem));
};

/**
 * 
 * @param {number} keyCode
 * @return {boolean}
 */
DvtDataGrid.prototype.isNavigationKey = function(keyCode)
{
    return (this.isArrowKey(keyCode) || keyCode == DvtDataGrid.HOME_KEY || keyCode == DvtDataGrid.END_KEY || keyCode == DvtDataGrid.PAGEUP_KEY || keyCode == DvtDataGrid.PAGEDOWN_KEY);
};

/**
 * 
 * @param {number} keyCode
 * @return {boolean}
 */
DvtDataGrid.prototype.isArrowKey = function(keyCode)
{
    return (keyCode == DvtDataGrid.UP_KEY || keyCode == DvtDataGrid.DOWN_KEY || keyCode == DvtDataGrid.LEFT_KEY || keyCode == DvtDataGrid.RIGHT_KEY);
};

/**
 * Creates an index object for the cell/row
 * @param {number=} row - the start index of the range
 * @param {number=} column - the end index of the range.  Optional, if not specified it represents a single cell/row 
 * @return {Object} an index object
 */
DvtDataGrid.prototype.createIndex = function(row, column)
{
    if (row != null)
    {
        if (column != null)
        {
            return {"row": row, "column": column};
        }
        return { "row": row};
    }

    return null;
};

/**
 * Handles key event for header
 * @param {Event} event
 * @return  boolean true if the event was processed
 */
DvtDataGrid.prototype.handleHeaderKeyDown = function(event)
{
    var axis, index, elem, keyCode, processed = false;
 
    // if no active header, then return
    if (this.m_activeHeader == null)
    {
        return;
    }

    keyCode = event.keyCode;
    if (this.isArrowKey(keyCode))
    {
        processed = this.handleHeaderArrowKeys(keyCode, event);      
    }
    else if (keyCode == DvtDataGrid.SPACE_KEY)
    {
        // select entire row or column
        if (this._isSelectionEnabled() && this.isMultipleSelection())
        {
            axis = this.m_activeHeader['axis'];
            index = this.m_activeHeader['index'];

            if (axis === "row")
            {
                //handle the space key in headers
                this._selectEntireRow(index, event);

                // announce to screen reader, no need to include context info
                this._setAccInfoText('accessibleRowSelected', {'row': index+1});

                processed = true;
            }
            else if (axis === "column")
            {
                //should only select column in cell selection mode
                if (this.m_options.getSelectionMode() == 'cell')
                {
                    //handle the space key in headers
                    this._selectEntireColumn(index, event);

                    // announce to screen reader, no need to include context info
                    this._setAccInfoText('accessibleColumnSelected', {'column': index+1});

                    processed = true;
                }
            }
        }
    }
    else if (keyCode == DvtDataGrid.ENTER_KEY)
    {
        // sort
        elem = this.m_activeHeader['elem'];
        // first check if the column is sortable
        if (elem.getAttribute(this.getResources().getMappedAttribute("sortable")) == "true")
        {
            this._handleKeyboardSort(elem, event);
            //handle the enter key if the header is sortable
            processed = true;
        }
    }        
    else if (keyCode == DvtDataGrid.PAGEUP_KEY)
    {
        // selects the first available row header
        elem = this.m_activeHeader['elem'];
        this._setActiveHeader(this.m_startRowHeader, elem['parentNode']['firstChild']['nextSibling']);
        this._scrollToActiveHeader();
        processed = true;
    }
    else if (keyCode == DvtDataGrid.PAGEDOWN_KEY)
    {
        // selects the last available row header
        elem = this.m_activeHeader['elem'];
        this._setActiveHeader(this.m_endRowHeader, elem['parentNode']['lastChild']);
        this._scrollToActiveHeader();
        processed = true;
    }        
    else
    {
        processed = this._handleCutPasteKeydown(event);
    }    
    return processed;
};

/**
 * Handles arrow keys navigation on header
 * @param {number} keyCode description
 * @param {Event} event the DOM event that caused the arrow key
 * @return  boolean true if the event was processed
 */
DvtDataGrid.prototype.handleHeaderArrowKeys = function(keyCode, event)
{
    var axis, index, elem, newCellIndex, processed = false;

    // ensure that there's no outstanding fetch requests
    if (!this.isFetchComplete())
    {
        //act like it's processed until we finish the fetch
        return true;
    }

    if (this.getResources().isRTLMode())
    {
        if (keyCode == DvtDataGrid.LEFT_KEY)
        {
            keyCode = DvtDataGrid.RIGHT_KEY;
        }
        else if (keyCode == DvtDataGrid.RIGHT_KEY)
        {
            keyCode = DvtDataGrid.LEFT_KEY;
        }
    }

    axis = this.m_activeHeader['axis'];
    index = this.m_activeHeader['index'];
    elem = this.m_activeHeader['elem'];

    switch (keyCode)
    {
        case DvtDataGrid.LEFT_KEY:
            if (axis === 'column' && index > 0)
            {
                this._setActiveHeader(index-1, elem['previousSibling']);
                this._scrollToActiveHeader();
                processed = true;
            }
            break;
        case DvtDataGrid.RIGHT_KEY:
            if (axis === 'row')
            {
                // row header, move to databody
                this._setActiveHeader(-1);
                this.m_activeHeader = null;

                // make the first cell of the current row active
                // no need to scroll since it will be in the viewport
                newCellIndex = this.createIndex(index, 0);
                if (this._isSelectionEnabled())
                {
                    this.selectAndFocus(newCellIndex, event);
                }
                else
                {
                    this.activeAndFocus(newCellIndex, event);
                }
                processed = true;
            }
            else
            {
                if (!(index >= this.m_endColHeader && this.m_stopColumnHeaderFetch) && (this._isCountUnknown("column") || index < this.getDataSource().getCount("column")))
                {
                    this._setActiveHeader(index+1, elem['nextSibling']);
                    this._scrollToActiveHeader();
                    processed = true;
              }
            }
            break;
        case DvtDataGrid.UP_KEY:
            if (axis === 'row' && index > 0)
            {
                this._setActiveHeader(index-1, elem['previousSibling']);
                this._scrollToActiveHeader();
                processed = true;
            }
            break;
        case DvtDataGrid.DOWN_KEY:
            if (axis === 'column')
            {
                // column header, move to databody
                this._setActiveHeader(-1);
                this.m_activeHeader = null;

                // make the cell of the first row and current column active
                // no need to scroll since it will be in the viewport
                newCellIndex = this.createIndex(0, index);
                if (this._isSelectionEnabled())
                {
                    this.selectAndFocus(newCellIndex, event);
                }
                else
                {
                    this.activeAndFocus(newCellIndex, event);
                }
                processed = true;
            }
            else
            {
                if (!(index >= this.m_endRowHeader && this.m_stopRowHeaderFetch) && (this._isCountUnknown("row") || index + 1 < this.getDataSource().getCount("row")))
                {
                    this._setActiveHeader(index+1, elem['nextSibling']);
                    this._scrollToActiveHeader();
                    processed = true;
                }
            }
            break;
    }
    return processed;
};

/**
 * Sets appropriate wai-aria properties on a header.
 * @param {Element} header the header element in which to set all wai-aria properties.
 */
DvtDataGrid.prototype.setHeaderAriaProperties = function(header)
{
    var labelledBy, key, direction;

    labelledBy = header.id;
    direction = header.getAttribute(this.getResources().getMappedAttribute('sortDir'));
    if (direction === "ascending")
    {
        key = "accessibleSortAscending";
        labelledBy = labelledBy + " " + this.createSubId("state");
    }
    else if (direction === "descending")
    {
        key = "accessibleSortDescending";
        labelledBy = labelledBy + " " + this.createSubId("state");
    }    

    if (key != null)
    {
        this._updateStateInfo(key, {'id': ''});
    }

    // set focus index
    header.setAttribute("tabIndex", 0);
    header.setAttribute("aria-labelledby", labelledBy);        
    header.focus();
};

/**
 * Reset all wai-aria properties from a header.
 * @param {Element} header the header element in which to reset all wai-aria properties.
 */
DvtDataGrid.prototype.unsetHeaderAriaProperties = function(header)
{
    // reset focus index
    header.setAttribute("tabIndex", -1);
    // remove aria related attributes
    header.removeAttribute("aria-labelledby");        
};

/**
 * Sets the current active header
 * @param {number} index the index of the new active header
 * @param {Element=} elem the new active header element
 * @param {string=} axis the axis of the new active header
 * @private
 */
DvtDataGrid.prototype._setActiveHeader = function(index, elem, axis)
{
    var activeClassName = this.getMappedStyle("focus");
    
    // unhighlight existing one
    if (this.m_activeHeader != null && this.m_activeHeader['elem'] != null)
    {
        if (this.m_activeHeader['axis'] === "row")
        {
            if (this.m_activeHeader['elem']['firstChild'] != null)
            {
                this.m_utils.removeCSSClassName(this.m_activeHeader['elem']['firstChild'], activeClassName);
            }
        }
        else
        {
            this.m_utils.removeCSSClassName(this.m_activeHeader['elem'], activeClassName);
        }

        this.unsetHeaderAriaProperties(this.m_activeHeader['elem']);
    }

    if (this.m_activeHeader != null)
    {
        this.m_prevActiveHeader['axis'] = this.m_activeHeader['axis'];
        this.m_prevActiveHeader['index'] = this.m_activeHeader['index'];
        this.m_prevActiveHeader['elem'] = this.m_activeHeader['elem'];
    }
    // set the new one if specified
    if (index != -1)
    {        
        if (this.m_activeHeader == null)
        {
            this.m_activeHeader = {};
            this.m_prevActiveHeader = {};
        }

        if (axis != undefined)
        {
            this.m_activeHeader['axis'] = axis;
        }

        this.m_activeHeader['index'] = index;
        
        // elem will be null if the header is not in the loaded yet
        if (elem != null)
        {
            this.m_activeHeader['elem'] = elem;
            if (this.m_activeHeader['axis'] === "row")
            {
                if (this.m_activeHeader['elem']['firstChild'] != null)
                {
                    this.m_utils.addCSSClassName(this.m_activeHeader['elem']['firstChild'], activeClassName);
                }
                this._manageMoveCursor();
            }
            else
            {
                this.m_utils.addCSSClassName(this.m_activeHeader['elem'], activeClassName);
            }

            this.setHeaderAriaProperties(elem);
        }
    }
    else
    {
        this.m_prevActiveHeader = null;
    }
};

/**
 * Scroll and focus on the active header
 * @private
 */
DvtDataGrid.prototype._scrollToActiveHeader = function()
{
    var axis, index, elem, indexes;

    axis = this.m_activeHeader['axis'];
    index = this.m_activeHeader['index'];
    elem = this.m_activeHeader['elem'];

    if (axis === "column")
    {
        indexes = {"row": 0, "column": index};
    }
    else if (axis === "row")
    {
        indexes = {"row": index, "column": 0};
    }

    this.scrollToIndex(indexes);
 
    // if scrollToIndex scrolls, then override the cell to focus to the header cell
    if (this.m_cellToFocus != null)
    {
        elem.setAttribute("tabIndex", 0);            
        this.m_cellToFocus = elem;
    }
    else if (elem != null)
    {
        // focus the header element
        this.setHeaderAriaProperties(elem);
    }
};

/**
 * Handles arrow keys navigation on cell
 * @param {number} keyCode description
 * @param {boolean=} isExtend
 * @param {Event} event the DOM event causing the arrow keys
 */
DvtDataGrid.prototype.handleCellArrowKeys = function(keyCode, isExtend, event)
{
    var currentCellIndex, row, column, newCellIndex, processed, focusFunc;

    // ensure that there's no outstanding fetch requests
    if (!this.isFetchComplete())
    {
        //act as if processed to prevent page scrolling before fetch done
        return true;
    }

    if (isExtend)
    {
        currentCellIndex = this.m_selectionFrontier;
    }
    else
    {
        currentCellIndex = this.m_active;
    }

    if (currentCellIndex == null)
    {
        return;
    }

    if (this.getResources().isRTLMode())
    {
        if (keyCode == DvtDataGrid.LEFT_KEY)
        {
            keyCode = DvtDataGrid.RIGHT_KEY;
        }
        else if (keyCode == DvtDataGrid.RIGHT_KEY)
        {
            keyCode = DvtDataGrid.LEFT_KEY;
        }
    }

    // invoke different function for handling focusing on active cell depending on whether selection is enabled
    focusFunc = this._isSelectionEnabled() ? this.selectAndFocus.bind(this) : this.activeAndFocus.bind(this);
    processed = false;
    row = currentCellIndex['row'];
    column = currentCellIndex['column'];

    // navigation to cell using arrow keys.  We are using index instead of dom element
    // because the dom element might not be there in all cases
    switch (keyCode)
    {
        case DvtDataGrid.LEFT_KEY:
            if (column > 0)
            {
                // for left and right key in row selection mode, we'll be only shifting active cell and
                // selection will not be affected
                if (this.m_options.getSelectionMode() == "row")
                {
                    // ensure active cell index is used for row since it might use frontier if extended
                    newCellIndex = this.createIndex(this.m_active['row'], column - 1);
                    this.scrollToIndex(newCellIndex, isExtend);
                    this.activeAndFocus(newCellIndex, event);
                }
                else
                {
                    newCellIndex = this.createIndex(row, column - 1);
                    this.scrollToIndex(newCellIndex, isExtend);
                    if (isExtend)
                    {
                        this.extendSelection(newCellIndex, event);
                    }
                    else
                    {
                        focusFunc(newCellIndex, event);
                    }
                    
                    // announce to screen reader that we have reached first column
                    if (column-1 === 0)
                    {
                        this._setAccInfoText('accessibleFirstColumn');
                    }
                }
                processed = true;
            }
            else
            {
                if (!isExtend)
                {
                    // reached the first column, go to row header if available
                    this._focusRowHeader(row);
                    //not setting processed here allows us to scroll the page when we are at the end of the grid                
                    if (this.m_rowHeader != null && this.m_rowHeader['firstChild'])
                    {
                        processed = true;   
                    }
                }
            }
            break;
        case DvtDataGrid.RIGHT_KEY:
            // if condition for unknown count and known count cases on whether we have reached the end
            if (!this._isLastColumn(column))
            {
                // for left and right key in row selection mode, we'll be only shifting active cell and
                // selection will not be affected
                if (this.m_options.getSelectionMode() == "row")
                {
                    // ensure active cell index is used for row since it might use frontier if extended
                    newCellIndex = this.createIndex(this.m_active['row'], column + 1);
                    this.scrollToIndex(newCellIndex, isExtend);
                    this.activeAndFocus(newCellIndex, event);
                }
                else
                {
                    newCellIndex = this.createIndex(row, column + 1);
                    this.scrollToIndex(newCellIndex, isExtend);
                    if (isExtend)
                    {
                        this.extendSelection(newCellIndex, event);
                    }
                    else
                    {
                         focusFunc(newCellIndex, event);
                    }

                    // announce to screen reader that we have reached last column
                    if (this._isLastColumn(column+1))
                    {
                        this._setAccInfoText('accessibleLastColumn');
                    }
                }
                processed = true;
            }
            else if (!isExtend)
            {
                // if anchor cell is in the last column, and they arrow right (without Shift), then collapse the range to just the focus cell.  (Matches Excel and intuition.)
                focusFunc(currentCellIndex, event);
                this.scrollToIndex(currentCellIndex);
                //not setting processed here allows us to scroll the page when we are at the end of the grid
                if (!this._isLastColumn(column))
                {
                    processed = true;
                }            
            }
            break;
        case DvtDataGrid.UP_KEY:
            if (row > 0)
            {
                newCellIndex = this.createIndex(row - 1, column);
                this.scrollToIndex(newCellIndex, isExtend);
                if (isExtend)
                {
                    this.extendSelection(newCellIndex, event);
                }
                else
                {
                    focusFunc(newCellIndex, event);
                }

                // announce to screen reader that we have reached first row
                if (row-1 === 0)
                {
                    this._setAccInfoText('accessibleFirstRow');
                }

                processed = true;
            }
            else
            {
                //if in multiple selection don't clear the selection
                if (!isExtend)
                {
                    // reached the first row, go to column header if available
                    this._focusColumnHeader(column);
                    processed = true;
                }
            }                      
            break;
        case DvtDataGrid.DOWN_KEY:
            if (!this._isLastRow(row))
            {
                newCellIndex = this.createIndex(row + 1, column);
                this.scrollToIndex(newCellIndex, isExtend);
                if (isExtend)
                {
                    this.extendSelection(newCellIndex, event);
                }
                else
                {
                    focusFunc(newCellIndex, event);
                }

                // announce to screen reader that we have reached last row
                if (this._isLastRow(row+1))
                {
                    this._setAccInfoText('accessibleLastRow');
                }
                
                processed = true;
            }
            else if (!isExtend)
            {
                // if anchor cell is in the last row, and they arrow down (without Shift), then collapse the range to just the focus cell.  (Matches Excel and intuition.)
                focusFunc(currentCellIndex, event);
                this.scrollToIndex(currentCellIndex);
                //not setting processed here allows us to scroll the page when we are at the end of the grid
                if (!this._isLastRow(row))
                {
                    processed = true;
                }
            }
            break;
        case DvtDataGrid.HOME_KEY:
            // selects the first cell of the current row
            newCellIndex = this.createIndex(row, 0);
            focusFunc(newCellIndex, event);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
        case DvtDataGrid.END_KEY:
            // selects the last cell of the current row
            if (!this._isCountUnknown("column"))
            {
                newCellIndex = this.createIndex(row, Math.max(0, this.getDataSource().getCount("column") - 1));
            }
            else
            {
                newCellIndex = this.createIndex(row, Math.max(0, this.m_endCol));
            }
            focusFunc(newCellIndex, event);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
        case DvtDataGrid.PAGEUP_KEY:
            // selects the first cell of the current column
            newCellIndex = this.createIndex(0, column);
            focusFunc(newCellIndex, event);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
        case DvtDataGrid.PAGEDOWN_KEY:
            // selects the last cell of the current column
            if (!this._isCountUnknown("column"))
            {
                newCellIndex = this.createIndex(Math.max(0, this.getDataSource().getCount("row") - 1), column);
            }
            else
            {
                newCellIndex = this.createIndex(Math.max(0, this.m_endRow), column);
            }
            focusFunc(newCellIndex, event);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
    }

    return processed;
};

/**
 * Shift focus to column header from databody OR right after fetch
 * @param {number} columnIndex the index of the column to focus
 * @private
 */
DvtDataGrid.prototype._focusColumnHeader = function(columnIndex)
{
    var relIndex, columns, column;

    // first check whether column header is available
    if (this.m_colHeader != null && this.m_colHeader['firstChild'])
    {
        relIndex = columnIndex - this.m_startColHeader;
        columns = this.m_colHeader['firstChild']['childNodes'];
        if (relIndex < columns.length)
        {
            column = columns[relIndex];

            // clear current active cell
            if (this.m_active != null)
            {
                this.unhighlightActive();
                this.setActive(null);
                
                // clear selection
                if (this._isSelectionEnabled())
                {
                    this._clearSelection();
                }
            }

            // store current active header info
            this._setActiveHeader(columnIndex, column, "column");
        }
    }
};

/**
 * Shift focus to row header from databody OR right after fetch
 * @param {number} rowIndex the index of the row to focus
 * @private
 */
DvtDataGrid.prototype._focusRowHeader = function(rowIndex)
{
    var relIndex, rows, row;

    // first check whether row header is available
    if (this.m_rowHeader != null && this.m_rowHeader['firstChild'])
    {
        relIndex = rowIndex - this.m_startRowHeader + 1;  // +1 because of resizer
        rows = this.m_rowHeader['firstChild']['childNodes'];
        if (relIndex < rows.length)
        {
            row = rows[relIndex];

            // clear current active cell
            if (this.m_active != null)
            {
                this.unhighlightActive();
                this.setActive(null);
                
                // clear selection
                if (this._isSelectionEnabled())
                {
                    this._clearSelection();
                }
            }

            // store current active header info
            this._setActiveHeader(rowIndex, row, "row");
        }
    }
};

/**
 * Handles click to select a header
 * @param {Event} event
 */
DvtDataGrid.prototype.handleHeaderClickActive = function(event)
{
    var index, header, axis;

    header = this.findHeader(event.target);

    if (header != null)
    {
        index = this.getHeaderCellIndex(header);
        axis = this.getHeaderCellAxis(header);
    }

    if (index != null && index != undefined)
    {
        if (axis === 'row')
        {
            //clears selection/active and sets focus to row header index
            this._focusRowHeader(index);
        }
        else if (axis === 'column')
        {
            //clears selection/active and sets focus to column header index            
            this._focusColumnHeader(index);
        }
    }
};

/**
 * Scrolls to an  index
 * @param {Object} index - the end index of the selection.      
 * @param {boolean=} isExtend - true if we should not focus the the new index
 */
DvtDataGrid.prototype.scrollToIndex = function(index, isExtend)
{
    var row, column, deltaX, deltaY, scrollTop, databodyContent, rowElem, viewportTop, viewportBottom, rowTop, rowHeight, scrollLeft, cell, cellLeft, cellWidth, viewportLeft, viewportRight;
    row = index['row'];
    column = index['column'];
    
    deltaX = 0;
    deltaY = 0;
    
    // check if index is completely outside of rendered
    if (row < this.m_startRow || row > this.m_endRow)
    {
        if (row < this.m_startRow)
        {
            scrollTop = this.m_avgRowHeight * row;
        }
        else
        {
            scrollTop = this.m_avgRowHeight * (row + 1) - this.getElementHeight(this.m_databody);
        }
        deltaY = this.m_currentScrollTop - scrollTop;

        // remember to focus on the row after fetch
        this.m_scrollIndexAfterFetch = index;
    }
    else
    {
        // it's rendered, find location and scroll to it
        databodyContent = this.m_databody['firstChild'];
        rowElem = databodyContent['childNodes'][row - this.m_startRow + 1];  // +1 to skip resizer
        
        viewportTop = this.m_currentScrollTop;
        viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);
        rowTop = this.getElementDir(rowElem, 'top');
        rowHeight = this.calculateRowHeight(rowElem);
        if (rowTop + rowHeight > viewportBottom)
        {
            deltaY = viewportBottom - (rowTop + rowHeight);
        }
        else if (rowTop < viewportTop)
        {
            deltaY = viewportTop - rowTop;
        }
    }

    // if column is defined and it's not already a fetch outside of rendered
    if (!isNaN(column) && this.m_scrollIndexAfterFetch == null)
    {
        // check if index is completely outside of rendered
        // approximate scroll position
        if (column < this.m_startCol || column > this.m_endCol)
        {            
            if (column < this.m_startCol)
            {
                scrollLeft = this.m_avgColWidth * column;
            }
            else
            {
                scrollLeft = this.m_avgColWidth * (column + 1) - this.getElementWidth(this.m_databody);
            }
            deltaX = this.m_currentScrollLeft - scrollLeft;

            // remember to focus on the cell after fetch
            this.m_scrollIndexAfterFetch = index;
        }
        else
        {            
            // it's rendered, find location and scroll to it
            databodyContent = this.m_databody['firstChild'];
            rowElem = databodyContent['childNodes'][row - this.m_startRow + 1];  // +1 to skip resizer
            cell = rowElem['childNodes'][column - this.m_startCol];
            cellLeft = this.getElementDir(cell, 'left');
            cellWidth = cell['offsetWidth']; // or from cache?

            viewportLeft = this.m_currentScrollLeft;
            viewportRight = this.m_currentScrollLeft + this.getElementWidth(this.m_databody);
            if (cellLeft < viewportLeft)
            {
                deltaX = viewportLeft - cellLeft;
            }
            else if (cellLeft + cellWidth > viewportRight)
            {
                deltaX = viewportRight - (cellLeft + cellWidth);
            }
        }
    }
    
    // scroll if either horiz or vert scroll pos has changed
    if (deltaX != 0 || deltaY != 0)
    {    
        if (cell != null && isExtend !== true)        
        {
            // delay focus on cell until databody has scrolled (by the scroll event handler)
            this.m_cellToFocus = cell;
        }
        this.scrollDelta(deltaX, deltaY);
    }
};

/**
 * Locate the header element.  Look up recursively from its parent if neccessary.
 * @param {Element} elem the starting point to locate the header element
 * @param {string} headerCellClassName the name of the header cell class name
 * @return {Element|null} the header element
 * @private
 */
DvtDataGrid.prototype.findHeader = function(elem, headerCellClassName)
{
    if (headerCellClassName == undefined)
    {
        headerCellClassName = this.getMappedStyle("headercell");
    }

    if (headerCellClassName != null)
    {
        if (this.m_utils.containsCSSClassName(elem, headerCellClassName))
        {
            // found header element
            return elem;
        }
        else if (elem['parentNode'])
        {
            // recursive call with parent node
            return this.findHeader(elem['parentNode'], headerCellClassName);
        }
        else if (elem === this.m_root)
        {
            // short circuit to terminal when root is reached
            return null;
        }
    }

    // all other case returns null
    return null;
};

/**
 * Ensures row banding is set on the proper rows
 * @private
 */
DvtDataGrid.prototype.updateRowBanding = function()
{
    var rowBandingInterval, rows, i, index, bandingClass;
    rowBandingInterval = this.m_options.getRowBandingInterval();
    if (rowBandingInterval > 0)
    {
        rows = this.m_databody['firstChild']['childNodes'];
        bandingClass = this.getMappedStyle("banded");
        for (i = 1; i < rows.length; i++)
        {
            index = this.m_startRow + i - 1;
            if ((Math.floor(index / rowBandingInterval) % 2 === 1))
            {
                if (!this.m_utils.containsCSSClassName(rows[i], bandingClass))
                {
                    this.m_utils.addCSSClassName(rows[i], bandingClass);
                }
            }
            else
            {
                if (this.m_utils.containsCSSClassName(rows[i], bandingClass))
                {
                    this.m_utils.removeCSSClassName(rows[i], bandingClass);
                }
            }
        }
    }
};

/**
 * Ensures column banding is set on the proper rows
 * @private
 */
DvtDataGrid.prototype.updateColumnBanding = function()
{
    var columnBandingInterval, rows, i, index, bandingClass, j, row;
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    if (columnBandingInterval > 0)
    {
        rows = this.m_databody['firstChild']['childNodes'];
        bandingClass = this.getMappedStyle("banded");
        for (i = 1; i < rows.length; i+=1)
        {
            row = rows[i]['childNodes'];
            for (j=0; j < row.length; j+=1)
            {
                index = this.m_startCol + j;
                if ((Math.floor(index / columnBandingInterval) % 2 === 1))
                {
                    if (!this.m_utils.containsCSSClassName(row[j], bandingClass))
                    {
                        this.m_utils.addCSSClassName(row[j], bandingClass);
                    }
                }
                else
                {
                    if (this.m_utils.containsCSSClassName(row[j], bandingClass))
                    {
                        this.m_utils.removeCSSClassName(rows[j], bandingClass);
                    }
                }
            }
        }
    }
};

/**
 * Remove banding (both row and column)
 * @private
 */
DvtDataGrid.prototype._removeBanding = function() //vvc
{
    var rows, row, i, j, bandingClass;
    rows = this.m_databody['firstChild']['childNodes'];
    bandingClass = this.getMappedStyle("banded");
    for (i = 1; i < rows.length; i++)
    {
        if (this.m_utils.containsCSSClassName(rows[i], bandingClass))
        {
            this.m_utils.removeCSSClassName(rows[i], bandingClass);
        } 
        row = rows[i]['childNodes'];
        for (j=0; j < row.length; j+=1)
        {
            if (this.m_utils.containsCSSClassName(row[j], bandingClass))
            {
                this.m_utils.removeCSSClassName(row[j], bandingClass);
            }
        }
    }
};

/**
 * Sets the accessibility status text
 * @param {string} key the message key
 * @param {Object|Array|null} args to pass into the translator
 * @private
 */
DvtDataGrid.prototype._setAccInfoText = function(key, args)
{
    var text = this.getResources().getTranslatedText(key, args);
    if (text != null)
    {
        this.m_accInfo.innerHTML = text;
    }
};

/**
 * Handles expand event from the flattened datasource.
 * @param {Object} event the expand event
 * @private
 */
DvtDataGrid.prototype.handleExpandEvent = function(event)
{
    var row, rowKey;
    rowKey = event['rowKey'];
    row = this._findRowByKey(rowKey);
    row.setAttribute("aria-expanded", true);
    
    // update screen reader alert
    this._setAccInfoText("accessibleRowExpanded"); 
};

/**
 * Handles collapse event from the flattened datasource.
 * @param {Object} event the collapse event
 * @private
 */
DvtDataGrid.prototype.handleCollapseEvent = function(event)
{
    var row, rowKey;
    rowKey = event['rowKey'];    
    row = this._findRowByKey(rowKey);    
    row.setAttribute("aria-expanded", false);
    
    // update screen reader alert
    this._setAccInfoText("accessibleRowCollapsed");    
};

/**
 * Retrieve the key from an element.
 * @param {Element} element the element to retrieve the key from.
 * @return {string|null} the key of the element
 * @private
 */
DvtDataGrid.prototype._getKey = function(element)
{
    if (element != null)
    {
        return element.getAttribute(this.getResources().getMappedAttribute('key'));
    }
    return null;
};

/**
 * Retrieve the active row key.
 * @param {boolean=} prev if we want the previous row key instead
 * @return {string|null} the key of the active row
 * @private
 */
DvtDataGrid.prototype._getActiveRowKey = function(prev)
{
    if (prev)
    {
        //active row key can also come from an active row header
        if (this.m_prevActiveHeader != null && this.m_prevActiveHeader['axis'] === 'row')
        {
            return this._getKey(this.m_prevActiveHeader['elem']);        
        }        
        else if (this.m_prevActive != null)
        {
            //+1 for resizer
            return this.m_prevActive['rowKey'];
        }  
    }
    else
    {
        //active row key can also come from an active row header
        if (this.m_activeHeader != null && this.m_activeHeader['axis'] === 'row')
        {
            return this._getKey(this.m_activeHeader['elem']);        
        }
        else if (this.m_active != null)
        {
            //+1 for resizer
            return this.m_active['rowKey'];
        }        
    }
    return null;
};

/**
 * Retrieve the active row.
 * @return {Element|null} the active row
 * @private
 */
DvtDataGrid.prototype._getActiveRow = function()
{
    if (this.m_active != null)
    {
        //+1 for resizer
        return this.m_databody['firstChild']['childNodes'][this.m_rowStart + this.m_active['row'] + 1];
    }
    return null;
};

///////////////////// move methods////////////////////////
/**
 * Handles cut event from the flattened datasource.
 * @param {Object} event the cut event
 * @return {boolean} true if the event was processed here
 * @private
 */
DvtDataGrid.prototype._handleCutPasteKeydown = function(event)
{
    //make sure that move is allowed to the row
    if (this._isMoveOnRowEnabled(this.findRow(event['target'])))
    {
        if(event.keyCode == DvtDataGrid.X_KEY && this.m_utils.ctrlEquivalent(event))
        {
            return this._handleCut(event);
        }
        else if(event.keyCode == DvtDataGrid.V_KEY && this.m_utils.ctrlEquivalent(event))
        {
            return this._handlePaste(event);                
        }
        else if (event.keyCode == DvtDataGrid.ESC_KEY && this.m_cutRow != null)
        {
            this.m_utils.removeCSSClassName(this.m_cutRow, this.getMappedStyle('cut'));
            this.m_cutRow = null;
            if (this.m_cutRowHeader !== null)
            {
                this.m_utils.removeCSSClassName(this.m_cutRowHeader, this.getMappedStyle('cut'));    
                this.m_cutRowHeader = null;
            }            
            return true;        
        }
    }
    return false;
};

/**
 * Handles cut event from the flattened datasource.
 * @param {Object} event the cut event
 * @return {boolean} true if the event was processed here
 * @private
 */
DvtDataGrid.prototype._handleCut = function(event)
{
    var rowKey;
    //TODO: keep key or element
    if (this.m_cutRow != null)
    {
        this.m_utils.removeCSSClassName(this.m_cutRow, this.getMappedStyle('cut'));
    }
    rowKey = this._getKey(this.find(event.target, 'row'));
    //cut row header with row
    this.m_cutRow = this._findRowByKey(rowKey);
    this.m_cutRowHeader = this._findRowHeaderByKey(rowKey);  
    this.m_utils.addCSSClassName(this.m_cutRow, this.getMappedStyle('cut'));
    if (this.m_cutRowHeader !== null)
    {
        this.m_utils.addCSSClassName(this.m_cutRowHeader, this.getMappedStyle('cut'));    
    }
    return true;
};

/**
 * Handles cut event from the flattened datasource.
 * @param {Object} event the cut event
 * @private
 */
DvtDataGrid.prototype._handlePaste = function(event)
{
    var row;
    
    if (this.m_cutRow != null)
    {
        this.m_utils.removeCSSClassName(this.m_cutRow, this.getMappedStyle('cut'));    
        if (this.m_cutRowHeader !== null)
        {
            //remove css from row header too
            this.m_utils.removeCSSClassName(this.m_cutRowHeader, this.getMappedStyle('cut'));    
        }        
        row = this.find(event.target, 'row');
        if (this.m_cutRow !== row)
        {
            if (this._isSelectionEnabled())
            {
                this.unhighlightSelection();
                this._clearSelection();
            }            
            this.getDataSource().move(this._getKey(this.m_cutRow), this._getKey(row));
        }
        this.m_cutRow = null;
        return true;
    }
    return false;
};

/**
 * Handles cut event from the flattened datasource.
 * @param {Object} event the cut event
 * @private
 */
DvtDataGrid.prototype._handleMove = function(event)
{
    var deltaY, height, rowKey;
    //initialize the move
    if (this.m_moveRow == null)
    {
        //get the move row key to set the move row/rowHeader
        rowKey = this._getKey(this.find(event.target, 'row'));
        this.m_moveRow = this._findRowByKey(rowKey);
        this.m_moveRowHeader = this._findRowHeaderByKey(rowKey);
        
        //need to store the height inline if not already because top values will be changing
        if (this.m_moveRow['style']['height'] != null)
        {
            this.setElementHeight(this.m_moveRow, this.calculateRowHeight(this.m_moveRow));        
        }
        
        //add the move style class to the css
        this.m_utils.addCSSClassName(this.m_moveRow, this.getMappedStyle('drag'));
        this.m_originalTop = this.getElementDir(this.m_moveRow, 'top');
  
        this.m_dropTarget = document.createElement("div");
        this.m_utils.addCSSClassName(this.m_dropTarget, this.getMappedStyle('drop'));        
        this.setElementHeight(this.m_dropTarget, this.calculateRowHeight(this.m_moveRow));
        this.setElementDir(this.m_dropTarget, this.m_originalTop, 'top');        
        this.m_databody['firstChild'].appendChild(this.m_dropTarget);
        
        //if there is a move row header add a drop target there and set appropriate styles
        if (this.m_moveRowHeader !== null)
        {
            //need to store the height inline if not already because top values will be changing
            if (this.m_moveRowHeader['style']['height'] != null)
            {            
                this.setElementHeight(this.m_moveRowHeader, this.calculateRowHeight(this.m_moveRowHeader));
            }
            this.m_utils.addCSSClassName(this.m_moveRowHeader, this.getMappedStyle('drag'));        
            this.m_dropTargetHeader = document.createElement("div");
            this.m_utils.addCSSClassName(this.m_dropTargetHeader, this.getMappedStyle('drop'));        
            this.setElementHeight(this.m_dropTargetHeader, this.calculateRowHeight(this.m_moveRowHeader));
            this.setElementDir(this.m_dropTargetHeader, this.m_originalTop, 'top');        
            this.m_rowHeader['firstChild'].appendChild(this.m_dropTargetHeader);            
        }
    }
    
    //calculate the change in Y direction
    if (!this.m_utils.isTouchDevice())
    {
        this.m_prevY = this.m_currentY;
        this.m_currentY = event['pageY'];
    }
    deltaY = this.m_currentY - this.m_prevY;
    height = this.calculateRowHeight(this.m_moveRow);

    //adjust the top height of the moveRow and moveRowHeader
    this.setElementDir(this.m_moveRow, (this.getElementDir(this.m_moveRow, 'top') + deltaY), 'top');
    if (this.m_moveRowHeader !== null)
    {
        this.setElementDir(this.m_moveRowHeader, (this.getElementDir(this.m_moveRowHeader, 'top') + deltaY), 'top');
    }
    
    //see if the element has crossed the halfway point of the nextSibling
    if (this.m_moveRow['nextSibling'] != null && this.m_moveRow['nextSibling'] != this.m_dropTarget &&
            this.getElementDir(this.m_moveRow['nextSibling'], 'top') < (this.getElementDir(this.m_moveRow, 'top') + (height / 2)))
    {
        this._moveDropRows('nextSibling');
    }
    else if (this.m_moveRow['previousSibling'] != null &&
            this.getElementDir(this.m_moveRow['previousSibling'], 'top') > (this.getElementDir(this.m_moveRow, 'top') - (height / 2)))
    {
        this._moveDropRows('previousSibling');
    }       
};

/**
 * Determined if move is supported for the specified axis.
 * @param {string} sibling nextSibling/previosusSibling
 * @private
 */
DvtDataGrid.prototype._moveDropRows = function(sibling)
{
    var newTop, databodyScroller, newSiblingTop, headerScroller;
    databodyScroller = this.m_moveRow['parentNode'];
    //move the drop target and the adjacent row
    if (sibling == 'nextSibling')
    {
        newTop = this.m_originalTop + this.calculateRowHeight(this.m_moveRow[sibling]);        
        newSiblingTop = this.m_originalTop;                
    }
    else
    {
        newTop = this.getElementDir(this.m_moveRow[sibling], 'top');
        newSiblingTop = newTop + this.calculateRowHeight(this.m_moveRow);         
    }
   
    this.setElementDir(this.m_dropTarget, newTop, 'top');
    this.setElementDir(this.m_moveRow[sibling], newSiblingTop, 'top');
    if (this.m_moveRowHeader !== null)
    {
        headerScroller = this.m_moveRowHeader['parentNode'];
        this.setElementDir(this.m_dropTargetHeader, newTop, 'top');
        this.setElementDir(this.m_moveRowHeader[sibling], newSiblingTop, 'top');
    }
    
    //store the new top value
    this.m_originalTop = newTop;

    this.m_utils.removeCSSClassName(this.m_moveRow['previousSibling'], this.getMappedStyle('activedrop'));                

    //move the moveRow and rowHeader so we can continue to pull the adjacent header
    if (sibling === 'nextSibling')
    {
        databodyScroller.insertBefore(this.m_moveRow, this.m_moveRow[sibling][sibling]);
        if (this.m_moveRowHeader !== null)
        {
            headerScroller.insertBefore(this.m_moveRowHeader, this.m_moveRowHeader[sibling][sibling]);
        }        
    }
    else
    {
        databodyScroller.insertBefore(this.m_moveRow, this.m_moveRow[sibling]);        
        if (this.m_moveRowHeader !== null)
        {
            headerScroller.insertBefore(this.m_moveRowHeader, this.m_moveRowHeader[sibling]);
        }    
    }
    this.m_utils.addCSSClassName(this.m_moveRow['previousSibling'], this.getMappedStyle('activedrop'));    
};

/**
 * Determined if move is supported for the specified axis.
 * @param {string} axis the axis which we check whether move is supported.
 * @private
 */
DvtDataGrid.prototype._isMoveEnabled = function(axis)
{
    var capability, moveable;
    capability = this.getDataSource().getCapability("move");
    moveable = this.m_options.isMoveable('row');
    if (moveable === "enable" && (capability === "full" || capability === axis))
    {
        return true;
    }

    return false;
};

/**
 * Handles a mouse up after move
 * @param {Event} event MouseUp Event
 * @param {boolean} validUp true if in the databody or rowHeader
 * @private
 */
DvtDataGrid.prototype._handleMoveMouseUp = function(event, validUp)
{
    if (this.m_moveRow != null)
    {    
        //remove the the drop target div from the databody/rowHeader
        this.m_dropTarget['parentNode'].removeChild(this.m_dropTarget);
        this.m_moveRow['style']['zIndex'] = '';
        if (this.m_moveRowHeader !== null)
        {
            this.m_dropTargetHeader['parentNode'].removeChild(this.m_dropTargetHeader);
            this.m_moveRowHeader['style']['zIndex'] = '';
        }

        this.setActive(null);
        //clear selection         
        if (this._isSelectionEnabled())
        {
            this.unhighlightSelection();
            this._clearSelection();
        }    

        //if the mousup was in the rowHeader or databody 
        if (validUp == true)
        {
            this.getDataSource().move(this._getKey(this.m_moveRow), this.m_moveRow['nextSibling'] === null ? null : this._getKey(this.m_moveRow['nextSibling']));  
        }
        else
        {
            this.getDataSource().move(this._getKey(this.m_moveRow), this._getKey(this.m_moveRow));
        }
        this.m_moveRow = null;
        this.m_databodyMove = false;    
    }
};

/**
 * Check if a row can be moved, meaning it is the active row and move is enabled
 * @param {Element|null} row the row to move
 * @returns {Boolean} true if the row can be moved
 */
DvtDataGrid.prototype._isMoveOnRowEnabled = function(row)
{
    //make sure it is not row in the column header/null
    if (row == null || this.m_utils.containsCSSClassName(row['parentNode'], this.getMappedStyle('colheader')))
    {
        return false;
    }
    if (this._isMoveEnabled('row'))
    {
        if (this._getActiveRowKey() === this._getKey(row))
        {
            return true;
        }
    }
    return false;
};

/**
 * Applies the draggable class to the new active row and row header, removes it if the active has changed
 */
DvtDataGrid.prototype._manageMoveCursor = function()
{
    var className, activeKey, prevActiveKey, activeRow, prevActiveRow, activeRowHeader, prevActiveRowHeader;
    className = this.getMappedStyle('draggable');
    activeKey = this._getActiveRowKey();
    prevActiveKey = this._getActiveRowKey(true);
    activeRow = this._findRowByKey(activeKey);
    prevActiveRow = this._findRowByKey(prevActiveKey);
    
    //remove draggable class name    
    if (this.m_utils.containsCSSClassName(prevActiveRow, className))
    {
        this.m_utils.removeCSSClassName(prevActiveRow, className);
        prevActiveRowHeader = this._findRowHeaderByKey(prevActiveKey);
        if (this.m_utils.containsCSSClassName(prevActiveRowHeader, className))
        {
            this.m_utils.removeCSSClassName(prevActiveRowHeader, className);
        }
    }
    
    //if move enabled and draggable class name
    if (this._isMoveOnRowEnabled(activeRow))
    {
        activeRowHeader = this._findRowHeaderByKey(activeKey);            
        this.m_utils.addCSSClassName(activeRow, className);
        this.m_utils.addCSSClassName(activeRowHeader, className);
    }
};

/**
 * Handles focus on the root and its children by setting focus class on the root 
 * @param {Event} event
 */
DvtDataGrid.prototype.handleRootFocus = function(event)
{
    this.m_utils.addCSSClassName(this.m_root, this.getMappedStyle('focus'));
};

/**
 * Handles blur on the root and its children by removing focus class on the root 
 * @param {Event} event
 */
DvtDataGrid.prototype.handleRootBlur = function(event)
{
    //don't change the color on move
    if (this.m_moveRow == null)
    {
        this.m_utils.removeCSSClassName(this.m_root, this.getMappedStyle('focus'));
    }
};

/**
 * Calculate the a row's height using top or endRowPixel
 * @param {Element} row the row to calculate height on
 * @return {number} the row height
 */
DvtDataGrid.prototype.calculateRowHeight = function(row)
{
    if (row['style']['height'] != '')
    {
        return this.getElementHeight(row);
    }
    if (row['nextSibling'] != null)
    {
        return this.getElementDir(row['nextSibling'], 'top') - this.getElementDir(row, 'top');
    }
    return this.m_endRowPixel - this.getElementDir(row, 'top');
};

/**
 * Calculate the a row headers's height using top or endRowHeaderPixel
 * @param {Element} rowHeader the rowHeader to calculate height on
 * @return {number} the rowHeader height
 */
DvtDataGrid.prototype.calculateRowHeaderHeight = function(rowHeader)
{
    if (rowHeader['style']['height'] != '')
    {
        return this.getElementHeight(rowHeader);
    }
    if (rowHeader['nextSibling'] != null)
    {
        return this.getElementDir(rowHeader['nextSibling'], 'top') - this.getElementDir(rowHeader, 'top');
    }
    return this.m_endRowHeaderPixel - this.getElementDir(rowHeader, 'top');
};

/**
 * Calculate the a column's width using left/right or endColumnPixel
 * @param {Element} cell the cell to calculate width on
 * @return {number} the cell width
 */
DvtDataGrid.prototype.calculateColumnWidth = function(cell)
{
    if (cell['style']['width'] != '')
    {
        return this.getElementWidth(cell);
    }
    var dir = this.getResources().isRTLMode() ? "right" : "left";    
    if (cell['nextSibling'] != null)
    {
        return this.getElementDir(cell['nextSibling'], dir) - this.getElementDir(cell, dir);
    }
    return this.m_endColPixel - this.getElementDir(cell, dir);
};

/**
 * Calculate the a column headers's width using left/right or endColumnHeaderPixel
 * @param {Element} columnHeader the columnHeader to calculate width on
 * @return {number} the columnHeader width
 */
DvtDataGrid.prototype.calculateColumnHeaderWidth = function(columnHeader)
{
    if (columnHeader['style']['width'] != '')
    {
        return this.getElementWidth(columnHeader);
    }    
    var dir = this.getResources().isRTLMode() ? "right" : "left";        
    if (columnHeader['nextSibling'] != null)
    {
        return this.getElementDir(columnHeader['nextSibling'], dir) - this.getElementDir(columnHeader, dir);
    }
    return this.m_endColHeaderPixel - this.getElementDir(columnHeader, dir);
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
// constants for key codes
DvtDataGrid.ENTER_KEY = 13;
DvtDataGrid.ESC_KEY = 27;
DvtDataGrid.F2_KEY = 113;
DvtDataGrid.F8_KEY = 119;
DvtDataGrid.SPACE_KEY = 32;

/**
 * Checks whether there are any focusable element inside a cell
 * @param {Element} elem the element to check focus inside
 * @return {boolean}
 */
DvtDataGrid.prototype._isContainFocusableElement = function(elem)
{
    var elems = this.getFocusableElementsInNode(elem);
    return (elems.length > 0);
};

/**
 * Unhighlights the selection.  Does not change selection, focus cell, anchor, or frontier
 */
DvtDataGrid.prototype.unhighlightSelection = function()
{
    var i, ranges;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        this.unhighlightRange(ranges[i]);
    }

    // unhighlight active cell
    if (this.m_active != null)
    {
        this.unhighlightActive();
    }
};

/**
 * Unhighlights the range.
 * @param {Object} range
 */
DvtDataGrid.prototype.unhighlightRange = function(range)
{
    var elems = this.getElementsInRange(range);
    this.unhighlightElems(elems);
};

/**
 * Highlights the range.
 * @param {Object} range
 * @param {boolean=} updateAccInfo
 */
DvtDataGrid.prototype.highlightRange = function(range, updateAccInfo)
{
    var elems, count;

    elems = this.getElementsInRange(range);
    this.highlightElems(elems);

    if (updateAccInfo)
    {
        // if there's islands of cells, then we'll have to count them
        if (this.GetSelection().length == 1)
        {
            count = elems.length;
        }
        else
        {
            count = this._getCurrentSelectionCellCount();
        }
        this._setAccInfoText('accessibleMultiCellSelected', {'num': count});
    }
};

/**
 * Calculate the total number of cells within the current selection ranges.
 * @private
 */
DvtDataGrid.prototype._getCurrentSelectionCellCount = function()
{
    var total, selection, elems, i;

    total = 0;
    selection = this.GetSelection();
    for (i=0; i<selection.length; i++)
    {
        // count the number of elements in each selection range
        elems = this.getElementsInRange(selection[i]);
        total = total + elems.length;
    }

    return total;
};

/**
 * Unhighlight elements
 * @param {Array} elems
 */
DvtDataGrid.prototype.unhighlightElems = function(elems)
{
    var i, selectedClassName, activeClassName, elem;
    if (elems == null || elems.length == 0)
    {
        return;
    }

    selectedClassName = this.getMappedStyle("selected");
    activeClassName = this.getMappedStyle("focus");

    // remove any selected or active styling set on the elements
    if (selectedClassName != null && activeClassName != null)
    {
        for (i = 0; i < elems.length; i += 1)
        {
            elem = elems[i];
            this.m_utils.removeCSSClassName(elem, activeClassName);
            this.m_utils.removeCSSClassName(elem, selectedClassName);
        }
    }
};

/**
 * Highlight elements
 * @param {Array} elems
 */
DvtDataGrid.prototype.highlightElems = function(elems)
{
    var selectedClassName, i, elem;
    if (elems == null || elems.length == 0)
    {
        return;
    }

    selectedClassName = this.getMappedStyle("selected");
    if (selectedClassName != null)
    {
        for (i = 0; i < elems.length; i += 1)
        {
            elem = elems[i];
            this.m_utils.addCSSClassName(elem, selectedClassName);
        }
    }
};

/**
 * Apply current selection to a range.  This is called when a newly set of cells are 
 * rendered and selection needs to be applied on them.
 * @param {number} startRow
 * @param {number} endRow
 * @param {number} startCol
 * @param {number} endCol
 */
DvtDataGrid.prototype.applySelection = function(startRow, endRow, startCol, endCol)
{
    var i, ranges, elems;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        elems = this.getElementsInRange(ranges[i], startRow, endRow, startCol, endCol);
        this.highlightElems(elems);
    }
};

/**
 * Handles click and drag to select multiple cells/rows
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodySelectionDrag = function(event)
{
    var index, cell;
    
    if (this.m_utils.isTouchDevice())
    {    
        cell = this.findCell(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY));
    }
    else
    {
        cell = this.findCell(event.target);
    }
    
    if (cell != null)
    {
        index = {
            "row": this.getRowIndex(cell['parentNode']), "column": this.getCellIndex(cell)
        };
        this.extendSelection(index, event);
    }
    
};

/**
 * Checks whether a cell is selected.  This is used in touch logic in handleDatabodyClickSelection.
 * @param {Element} cell the cell element
 * @return {boolean} true if the cell is selected, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isSelected = function(cell)
{
    var selectedClassName = this.getMappedStyle("selected");
    //if row selection, selection is set on the row, not the cell
    if (this.m_options.getSelectionMode() == "row" && selectedClassName != null)
    {
        return this.m_utils.containsCSSClassName(this.findRow(cell), selectedClassName);
    }
    if (selectedClassName != null)
    {
        return this.m_utils.containsCSSClassName(cell, selectedClassName);
    }

    // should not end up here
    return false;
};

/**
 * Deselect a cell/row.  This is used in touch logic in handleDatabodyClickSelection.
 * @param {Object} index the cell index of the cell/row to deselect
 * @private
 */
DvtDataGrid.prototype._deselect = function(index)
{
    var rowIndex, columnIndex, indexToRemove, ranges, i, range, startIndex, endIndex, rangeStartRow,
            rangeEndRow, rangeStartColumn, rangeEndColumn;

    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }

    rowIndex = index['row'];
    columnIndex = index['column'];

    // find the range in current selection
    indexToRemove = -1;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        range = ranges[i];
        startIndex = range['startIndex'];
        endIndex = this.getEndIndex(range);

        rangeStartRow = startIndex['row'];
        rangeEndRow = endIndex['row'];

        if (rangeStartRow != rowIndex || rangeEndRow != rowIndex)
        {
            continue;
        }

        if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
        {
            rangeStartColumn = startIndex['column'];
            rangeEndColumn = endIndex['column'];

            if (rangeStartColumn != columnIndex || rangeEndColumn != columnIndex)
            {
                continue;
            }

            // both row and column index matches, we are done
            indexToRemove = i;
            break;
        }
        else
        {
            // if column index is defined in index, skip this range
            if (!isNaN(columnIndex))
            {
                continue;
            }

            // no column index, and row matches
            indexToRemove = i;
            break;
        }
    }

    // unhighlight index and remove from selection
    if (indexToRemove != -1)
    {
        this.unhighlightRange(ranges[indexToRemove]);
        ranges.splice(indexToRemove, 1);
    }
};

/**
 * Handles click to select multiple cells/rows
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodyClickSelection = function(event)
{
    var index, cell, ctrlKey, shiftKey;

    cell = this.findCell(event.target);
    if (cell != null)
    {
        index = {
            "row": this.getRowIndex(cell['parentNode']), "column": this.getCellIndex(cell)
        };
    }

    if (index != null && index != undefined)
    {
        // clear any active header
        this._setActiveHeader(-1);
        this.m_activeHeader = null;

        // make sure the cell is visible
        this.scrollToIndex(index);

        ctrlKey = this.m_utils.ctrlEquivalent(event);
        shiftKey = event.shiftKey;
        if (this.isMultipleSelection())
        {
            if (this.m_utils.isTouchDevice())
            {
                //remove the touch affordance on a new tap, unhighlight the active cell, and select the new one
                this._removeTouchSelectionAffordance();
                if (this.m_active != null)
                {
                    this.unhighlightActive();
                }
                this.selectAndFocus(index, event);
            }
            else
            {
                if (!ctrlKey && !shiftKey)
                {
                    this.selectAndFocus(index, event);
                }
                else if (!ctrlKey && shiftKey)
                {
                    this.extendSelection(index, event);
                    // active cell doesn't change in this case
                }
                else
                {
                    this.augmentSelectionAndFocus(index, event);
                }
            }
        }
        else
        {
            this.selectAndFocus(index, event);
        }
    }
};

/**
 * Determine if the specified cell index is inside the current selection.
 * @param {Object} index the cell index
 * @return {boolean} true is the cell index specified is inside the selection, false otherwise
 * @private
 */
DvtDataGrid.prototype._isContainSelection = function(index)
{
    var ranges, range, startIndex, endIndex, rangeStartRow, rangeEndRow, rangeStartColumn, rangeEndColumn, i;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        range = ranges[i];
        startIndex = range['startIndex'];
        endIndex = this.getEndIndex(range);

        rangeStartRow = startIndex['row'];
        rangeEndRow = endIndex['row'];

        // checks if row outside of range
        if (index['row'] < rangeStartRow || (rangeEndRow != -1 && index['row'] > rangeEndRow))
        {
            // skip
            continue;
        }

        if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
        {
            rangeStartColumn = startIndex['column'];
            rangeEndColumn = endIndex['column'];

            // checks if row outside of range
            if (index['column'] < rangeStartColumn || (rangeEndColumn != -1 && index['column'] > rangeEndColumn))
            {
                // skip
                continue;
            }

            // within range return immediately
            return true;
        }
        else
        {
            // no column specified, meaning all columns
            return true;
        }
    }

    return false;
};

/**
 * Compare the two selection to see if they are identical.
 * @param {Object} selection1 the first selection
 * @param {Object} selection2 the seonc selection
 * @return {boolean} true if the selections are identical, false otherwise
 * @private
 */
DvtDataGrid.prototype._compareSelections = function(selection1, selection2)
{
    var i, j, foundMatch;
    
    // currently assumes all selections will be the same if old and new selection are equal
    // now allows not to fire on every drag event 
    // todo: needs to handle discontigous selection case
    
    if (selection1.length !== selection2.length)
    {
        return false;
    }

    for (i = 0; i < selection1.length; i += 1)
    {
        foundMatch = false;
        for (j = 0; j < selection2.length; j += 1)
        {
            if (selection1[i]['startIndex']['row'] === selection2[j]['startIndex']['row'] &&
                    selection1[i]['startIndex']['column'] === selection2[j]['startIndex']['column'] &&
                    selection1[i]['endIndex']['row'] === selection2[j]['endIndex']['row'] &&
                    selection1[i]['endIndex']['column'] === selection2[j]['endIndex']['column'])
            {
                foundMatch = true;
            }
        }
        if (foundMatch === false)
        {
            return false;
        }
    }

    return true;
};

/**
 * Find the row element (recursively if needed)
 * @private
 * @param {Element|EventTarget} elem
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.findRow = function(elem)
{
    // recursively walk up the element and find the class name that matches the row class name
    return this.find(elem, "row");
};

/**
 * Clear the current selection.
 * @private
 */
DvtDataGrid.prototype._clearSelection = function()
{
    var selection;

    // unhighlight previous selection
    this.unhighlightSelection();

    // clear the ranges
    selection = this.GetSelection();
    // clear selection
    selection.length = 0;
};

/************************* key handler methods ************************************/
/**
 * Determine if the data grid is in actionable mode.
 * @return returns true if the data grid is in actionable mode, false otherwise.
 * @protected
 */
DvtDataGrid.prototype.isActionableMode = function()
{
    return (this.m_keyMode == "actionable");
};

/**
 * Sets whether the data grid is in actionable mode
 * @param {boolean} flag true to set grid to actionable mode, false otherwise
 * @protected
 */
DvtDataGrid.prototype.setActionableMode = function(flag)
{
    if (flag)
    {
        this.m_keyMode = "actionable";
    }
    else
    {
        this.m_keyMode = "navigation";
    }

    // update screen reader alert
    this._setAccInfoText(this.m_keyMode === 'actionable' ? 'accessibleActionableMode' : 'accessibleNavigationMode');
};

/**
 * Sets whether the data grid is in discontiguous selection mode
 * @param {boolean} flag true to set grid to discontiguous selection mode
 * @private
 */
DvtDataGrid.prototype.setDiscontiguousSelectionMode = function(flag)
{
    this.m_discontiguousSelection = flag;

    // announce to screen reader
    this._setAccInfoText(flag ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff"); 
};

/**
 * Handles key event for selection
 * @param {Event} event
 * @return {boolean} true if the event is processed
 */
DvtDataGrid.prototype.handleSelectionKeyDown = function(event)
{
    var keyCode, ctrlKey, shiftKey, column, row, processed = false;

    keyCode = event.keyCode;

    if (this.isActionableMode())
    {
        // Esc key goes to navigation mode
        if (keyCode == DvtDataGrid.ESC_KEY)
        {
            this.setActionableMode(false);
            // focus back on the active cell
            this.highlightActive();
            processed = true;
        }

        // if arrow key is used and there's no focusable element inside the cell
        // it breaks the actionable mode
        if (this.isArrowKey(keyCode) && !this._isContainFocusableElement(this.findCell(event.target)))
        {
            this.setActionableMode(false);

            // perform the arrow key action
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            this._updateStateInfo('accessibleStateSelected');
            if (!ctrlKey)
            {
                processed = this.handleCellArrowKeys(keyCode, (shiftKey && this.isMultipleSelection()), event);
            }
        }
        else if (keyCode === DvtDataGrid.TAB_KEY || keyCode === DvtDataGrid.ENTER_KEY)
        {
            // tab or enter navigate between actionable items in the grid
            shiftKey = event.shiftKey;
            if (keyCode === DvtDataGrid.TAB_KEY)
            {
                keyCode = shiftKey ? DvtDataGrid.LEFT_KEY : DvtDataGrid.RIGHT_KEY;
            }
            else
            {
                keyCode = shiftKey ? DvtDataGrid.UP_KEY : DvtDataGrid.DOWN_KEY;
            }

            this._updateStateInfo('accessibleStateSelected');
            processed = this.handleCellArrowKeys(keyCode, false, event);
        }
    }
    else
    {        
        // F2 key or Enter key goes to actionable mode
        if (keyCode == DvtDataGrid.F2_KEY || keyCode == DvtDataGrid.ENTER_KEY)
        {
            this.setActionableMode(true);
            // focus on first focusable item in the cell
            this._setFocusToFirstFocusableElement(this.findCell(event.target));
        }
        else if (keyCode == DvtDataGrid.ESC_KEY)
        {
            // if shift+f8 key mode, exit it
            if (this.m_discontiguousSelection)
            {
                this.setDiscontiguousSelectionMode(false);
            }
        }
        else if (this.isNavigationKey(keyCode))
        {
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            this._updateStateInfo('accessibleStateSelected');
            if (!ctrlKey)
            {
                processed = this.handleCellArrowKeys(keyCode, (shiftKey && this.isMultipleSelection()));
            }
        }
        else if (event.shiftKey && keyCode == DvtDataGrid.F8_KEY)
        {
            this.setDiscontiguousSelectionMode(!this.m_discontiguousSelection);
        }
        else if (keyCode == DvtDataGrid.SPACE_KEY)
        {
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            if (this.m_options.getSelectionMode() == "cell" && this.isMultipleSelection() && ((shiftKey && !ctrlKey) || ctrlKey))
            {
                if (ctrlKey)
                {
                    // selects the current column
                    column = this.m_active['column'];
                    this._selectEntireColumn(column, event);
                    // announce to screen reader
                    this._setAccInfoText('accessibleColumnSelected', {'column': this.m_active['columnKey']});
                }
                else
                {
                    // selects the current row
                    row = this.m_active['row'];
                    this._selectEntireRow(row, event);
                    // announce to screen reader
                    this._setAccInfoText('accessibleRowSelected', {'row': this.m_active['rowKey']});
                }
                processed = true;
            }
        }
    }

    // check keystroke for reading content to screen reader
    if (this.isReadCurrentContent(event))
    {
        this.readCurrentContent();
        processed = true;
    }

    return processed;
};

/**
 * Selects the entire row of cells
 * @param {number} row the row index
 * @param {Event} event the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectEntireRow = function(row, event)
{
    var startIndex, endIndex;

    // create the start and end index then selects the range
    startIndex = this.createIndex(row, 0);
    endIndex = this.createIndex(row, -1);

    this._selectRange(startIndex, endIndex, event);
};

/**
 * Selects the entire column of cells
 * @param {number} column the column index
 * @param {Event} event the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectEntireColumn = function(column, event)
{
    var startIndex, endIndex;

    // create the start and end index then selects the range
    startIndex = this.createIndex(0, column);
    endIndex = this.createIndex(-1, column);

    this._selectRange(startIndex, endIndex, event);
};

/**
 * Selects a range of cells.
 * @param {Object} startIndex the start row/column indexes
 * @param {Object} endIndex the end row/column indexes 
 * @param {Event} event the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectRange = function(startIndex, endIndex, event)
{
    // first clear selection
    this._clearSelection();
    this._createRangeWithKeys(startIndex, endIndex, this._selectRangeCallback.bind(this, event));
};
    
/**
 * Callback for once the new range is constructed
 * @param {Event} event the dom event that triggers the selection
 * @param {Object} newRange the new range to be selected
 * @private
 */
DvtDataGrid.prototype._selectRangeCallback = function(event, newRange)
{
    var selection, previous;

    selection = this.GetSelection();
    // option change event needs previous selection
    previous = selection.slice(0);
    

    selection.push(newRange);
    this.highlightRange(newRange);

    if (this.m_active != null)
    {
        // reset frontier to be the same as active
        this.m_selectionFrontier = this.m_active;

        this.highlightActive();
    }

    // fire selection event
    this.fireSelectionEvent(event, previous);
};

/**
 * Retrieve the current selection
 * @return {Array} an array of ranges
 * @export
 */
DvtDataGrid.prototype.GetSelection = function()
{
    if (this.m_selection == null)
    {
        this.m_selection = [];
    }
    return this.m_selection;
};

/**
 * Sets a range of selections
 * @param {Array} selection
 * @export
 */
DvtDataGrid.prototype.SetSelection = function(selection)
{
    var previous;

    // it can be null but cannot be undefined
    if (selection != undefined)
    {
        if (selection == null)
        {
            selection = [];
        }

        previous = this.GetSelection().splice(0);
        this.m_selection = selection;

        // if it's not render yet, don't apply selection
        if (this.m_databody != null)
        {
            this.applySelection(this.m_startRow, this.m_endRow, this.m_startCol, this.m_endCol);
        }
        this.fireSelectionEvent(null, previous);
    }
};

/**
 * Fires selection event
 * @param {Event} event the dom event that triggers the selection
 * @protected
 */
DvtDataGrid.prototype.fireSelectionEvent = function(event, previousSelection)
{
    var details = {
        'event': event, 'ui': {
            'selection': this.GetSelection(),
            'previousSelection': previousSelection
        }
    };
    this.fireEvent('select', details);
};

/**
 * Shift+click to extend the selection
 * @param {Object} index - the end index of the selection.    
 * @param {Event} event - the DOM event causing the selection to to be extended
 */
DvtDataGrid.prototype.extendSelection = function(index, event)
{
    var anchor;
    // find the the top left index
    if (this.m_utils.isTouchDevice())
    { 
        anchor = this.m_touchSelectAnchor;
    }    
    else
    {
        anchor = this.m_active;        
    }
    if (anchor == null)
    {
        return;
    }

    // reset focus on previous selection frontier
    this._resetSelectionFrontierFocus();
    
    // assign frontier before we change index;
    this.m_selectionFrontier = index;

    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }
    this._createRangeWithKeys(anchor, index, this._extendSelectionCallback.bind(this, event));
};

/**
 * Once the range is created from the index continue to extend the selection
 * @param {Event} event - the DOM event causing the selection to to be extended
 * @param {Object} newRange - the new range of the selection.    
 * @private
 */
DvtDataGrid.prototype._extendSelectionCallback = function(event, newRange)
{    
    var selection, currentRange, startIndexesMatch, endIndexesMatch, clone;
    
    selection = this.GetSelection();
    currentRange = selection[selection.length - 1];    
    
    // checks if selection has changed
    startIndexesMatch = (currentRange['startIndex']['row'] == newRange['startIndex']['row']);
    if (currentRange['startIndex']['column'] != null && newRange['startIndex']['column'] != null)
    {
        startIndexesMatch = startIndexesMatch && (currentRange['startIndex']['column'] == newRange['startIndex']['column']);
    }

    endIndexesMatch = (currentRange['endIndex']['row'] == newRange['endIndex']['row']);
    if (currentRange['endIndex']['column'] != null && newRange['endIndex']['column'] != null)
    {
        endIndexesMatch = endIndexesMatch && (currentRange['endIndex']['column'] == newRange['endIndex']['column']);
    }
    
    if (startIndexesMatch && endIndexesMatch)
    {
        return;
    }
    
    clone = selection.slice(0);
    
    // replace the current range
    selection.pop();
    selection.push(newRange);

    this._compareSelectionAndFire(event, clone);

    this.unhighlightRange(currentRange);
    this.highlightRange(newRange, true);
    this.highlightActive();

    // focus on the frontier cell
    this._makeSelectionFrontierFocus();

    // per excel, user have to hit shift+f8 again to create another discontiguous selection
    if (this.m_discontiguousSelection)
    {
        this.m_discontiguousSelection = false;
    }    
};

/**
 * Reset focus on selection frontier
 * @private
 */
DvtDataGrid.prototype._resetSelectionFrontierFocus = function()
{
    var range, cell;

    // make sure there is a selection frontier and it's not the same as the active cell
    if (this.m_selectionFrontier == null || (this.m_active != null && this.m_selectionFrontier['row'] == this.m_active['row'] && this.m_selectionFrontier['column'] == this.m_active['column']))
    {
        return;
    }

    range = this.createRange(this.m_selectionFrontier);
    cell = this.getElementsInRange(range);

    if (cell != null && cell.length > 0)
    {
        this.unsetAriaProperties(cell[0]);
    }
};

/**
 * Make the selection frontier focusable.
 * @private
 */
DvtDataGrid.prototype._makeSelectionFrontierFocus = function()
{
    var range, cell;

    // make sure there is a selection frontier and it's not the same as the active cell
    if (this.m_selectionFrontier == null || (this.m_active != null && this.m_selectionFrontier['row'] == this.m_active['row'] && this.m_selectionFrontier['column'] == this.m_active['column']))
    {
        return;
    }

    // unset focus properties on active cell first
    if (this.m_active != null)
    {
        range = this.createRange(this.m_active);
        cell = this.getElementsInRange(range);

        if (cell != null && cell.length > 0)
        {
            this.unsetAriaProperties(cell[0]);
        }
    }

    range = this.createRange(this.m_selectionFrontier);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    // update context info
    this._updateContextInfo(this.m_selectionFrontier);

    // focus on the cell (or first cell in the row)
    this.setAriaProperties(cell[0], true);    
};

/**
 * Ctrl+click to add cell/row to the current selection
 * @param {Object} index - the end index of the selection.    
 * @param {Event} event - the event causing the selection to to be augmented
 */
DvtDataGrid.prototype.augmentSelectionAndFocus = function(index, event)
{
    var selection;

    selection = this.GetSelection();

    // if the selection is initially set externally, there is no active cell
    // so we better checks for null
    if (selection.length > 0 && this.m_active != null)
    {
        this.unhighlightActive(!this.m_discontiguousSelection);
    }

    // reset any focus properties set on frontier cell
    this._resetSelectionFrontierFocus();

    // update active cell and frontier
    this.setActive(index, event, this._augmentSelectionAndFocusActiveCallback.bind(this, index, event));
};

/**
 * Continue to augmentSelectionAndFocus
 * @param {Object} index - the end index of the selection.  
 * @param {Event} event - the event causing the selection to to be augmented
 * @private  
 */
DvtDataGrid.prototype._augmentSelectionAndFocusActiveCallback = function(index, event)
{        
    this.m_selectionFrontier = index;

    // update selection model
    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }
    // ensure end index is specified when push to selection
    this._createRangeWithKeys(index, index, this._augmentSelectionAndFocusRangeCallback.bind(this, index, event));
};

/**
 * Continue to augmentSelectionAndFocus and _augmentSelectionAndFocusActiveCallback
 * @param {Object} index - the end index of the selection.    
 * @param {Event} event - the event causing the selection to to be augmented
 * @param {Object} range - the range of the selection.    
 * @private
 */
DvtDataGrid.prototype._augmentSelectionAndFocusRangeCallback = function(index, event, range)
{    
    var selection, clone;
    
    selection = this.GetSelection();
    clone = selection.slice(0);
    selection.push(range);

    this._compareSelectionAndFire(event, clone);
    
    // highlight index
    this.highlightActive();
    this.highlightIndex(index, 'selected');
};

/**
 * Selects the focus on the specified element
 * Select and focus is an asynchronus call
 * @param {Object} index - the end index of the selection.      
 * @param {Event} event - the event causing the selection and setting active      
 */
DvtDataGrid.prototype.selectAndFocus = function(index, event)
{
    if (!this.m_discontiguousSelection)
    {
        // clear selection
        this._clearSelection();
    }
    else if (this.m_active != null && this.m_selectionFrontier['row'] == this.m_active['row'] && this.m_selectionFrontier['column'] == this.m_active['column'])
    {
        // remove the last selection
        this.GetSelection().pop();

        // unhighlight previous (active and selection)
        // only if it's not in an existing selection
        if (!this._isContainSelection(this.m_active))
        {
            this.unhighlightIndex(this.m_active);
        }
    }

    // add the elem to selection
    this.augmentSelectionAndFocus(index, event);
};

/**
 * Returns the relative index to the to the row (out of cells that are rendered)
 * @param {Element} cell
 * @return {number}
 */
DvtDataGrid.prototype.getRelativeCellIndex = function(cell)
{
    return this.getCellIndex(cell) - this.m_startCol;
};
/********************* end key handler methods ************************************/

/********************* focusable/editable element related methods *****************/
/**
 * Sets focus on first focusable element contained by an element
 * @param {Element} elem
 */
DvtDataGrid.prototype._setFocusToFirstFocusableElement = function(elem)
{
    var elems = this.getFocusableElementsInNode(elem);
    if (elems.length > 0)
    {
        elems[0].focus();
    }
};

/**
 * Finds all the focusable elements in a node
 * @param {Element} node
 * @return {Array} An array of all of the focusable elements in a node
 */
DvtDataGrid.prototype.getFocusableElementsInNode = function(node)
{
    var inputElems, nodes, elem, nodeCount, inputRegExp, i;
    inputElems = [];

    if (document.evaluate)
    {
        // FF and IE are not case sensitive with x-path, but webkit browser are (GoogleChrome and Safari only recognize lower case)
        // to be safe, we check for both lower and upper case 
        nodes = document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A",
                node, null, XPathResult.ANY_TYPE, null);
        elem = nodes.iterateNext();
        while (elem)
        {
            if (!elem.disabled && (!elem.tabIndex || elem.tabIndex > 0) && this.isElementVisible(elem, node))
            {
                inputElems.push(elem);
            }

            elem = nodes.iterateNext();
        }
    }
    else
    {
        nodes = node.getElementsByTagName("*");
        nodeCount = nodes.length;
        inputRegExp = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
        // we don't want to use AdfDhtmlPivotTablePeer._INPUT_REGEXP because it has OPTION in the regexp
        // in IE, each 'option' after 'select' elem will be counted as an input element(and cause duplicate input elems returned)
        // this will cause problem with TAB/Shift-TAB (recognizing whether to go to next cell or to tab within the current cell
        for (i = 0; i < nodeCount; i += 1)
        {
            elem = nodes[i];
            if (elem.tagName.match(inputRegExp) && !elem.disabled && (!elem.tabIndex || elem.tabIndex > 0) && this.isElementVisible(elem, node))
            {
                inputElems.push(elem);
            }
        }
    }
    return inputElems;
};

//Methods used but not defined
DvtDataGrid.prototype.isElementVisible = function(elem, node)
{
    return true;
};

/**
 * Compare the selection to a clone and fire selection event if it has changed
 * @param {Event} event the DOM event to pass off in the selection event
 * @param {Object} clone the old selection object 
 * @private
 */
DvtDataGrid.prototype._compareSelectionAndFire = function(event, clone)
{
    // fire event if selection has changed
    if (!this._compareSelections(this.GetSelection(), clone))
    {
        //only deal with touch affordances if multiple selection on touch
        if (this.m_utils.isTouchDevice() && this.isMultipleSelection())
        {
            this._addTouchSelectionAffordance(event);            
            this._moveTouchSelectionAffordance();
        }
        this.fireSelectionEvent(event, clone);
    }
};

/**
 * Add the touch affordance to the grid. It will be added to the row containing the active cell in row/cell selection mode.
 * Sets the position of the affordance to be on the corner of a cell in cell selection or the center of the viewport in row
 * selection.
 * @param {Event} event the event that drives the need for touch affordance
 * @private
 */
DvtDataGrid.prototype._addTouchSelectionAffordance = function(event)
{    
    //icon in the corner
    var cell, iconSize, topIcon, bottomIcon, row, selectionMode, left, dir;
    if (this.m_topSelectIconContainer == null && this.m_bottomSelectIconContainer == null)
    {
        dir = this.getResources().isRTLMode() ? "right" : "left";
        iconSize = this._getTouchSelectionAffordanceSize();
        
        //cache the containers so we always know where they are since selection object isn't always current
        //wrap the icon in a container so the touch area is larger than the icon
        this.m_topSelectIconContainer = document.createElement('div');
        this.m_topSelectIconContainer['className'] = this.getMappedStyle('toucharea');
        this.setElementDir(this.m_topSelectIconContainer, -iconSize/2, 'top');
        topIcon = document.createElement('div');
        topIcon['className'] = this.getMappedStyle('selectaffordancetop');
        this.m_topSelectIconContainer.appendChild(topIcon);
        
        this.m_bottomSelectIconContainer = document.createElement('div');
        this.m_bottomSelectIconContainer['className'] = this.getMappedStyle('toucharea');
        this.setElementDir(this.m_bottomSelectIconContainer, -1*iconSize/2, 'bottom');
        bottomIcon = document.createElement('div');
        bottomIcon['className'] = this.getMappedStyle('selectaffordancebottom');
        this.m_bottomSelectIconContainer.appendChild(bottomIcon);
        
        selectionMode = this.m_options.getSelectionMode();
        if (selectionMode === 'row')
        {
            left = (this.getElementWidth(this.m_databody)/2) + this.m_currentScrollLeft - (iconSize/2);                
            this.setElementDir(this.m_topSelectIconContainer, left, dir);
            this.setElementDir(this.m_bottomSelectIconContainer, left, dir);
        }
        else
        {
            cell = this.findCell(event.target);        
            left = this.getElementDir(cell, dir) - (iconSize/2);
            this.setElementDir(this.m_topSelectIconContainer, left, dir);
            this.setElementDir(this.m_bottomSelectIconContainer, left + this.calculateColumnWidth(cell), dir);        
        }

        row = this.getElementsInRange(this.createRange(this.m_active))[0]['parentNode'];
        row.appendChild(this.m_topSelectIconContainer);    
        row.appendChild(this.m_bottomSelectIconContainer);    
    }
};

/**
 * Finds and removes the touch selection icons from the DOM
 * @private
 */
DvtDataGrid.prototype._removeTouchSelectionAffordance = function()
{
    if (this.m_active != null && this.m_topSelectIconContainer && this.m_topSelectIconContainer['parentNode'])
    {
        this.m_topSelectIconContainer['parentNode'].removeChild(this.m_topSelectIconContainer);
        this.m_bottomSelectIconContainer['parentNode'].removeChild(this.m_bottomSelectIconContainer);
    }
};

/**
 * Finds and moves the touch selection affordances based on the old and new selection
 * @private
 */
DvtDataGrid.prototype._moveTouchSelectionAffordance = function()
{     
    var selection, topRow, bottomRow, selectionMode,topIconCell, bottomIconCell, elementsInRange, dir;

    selection = this.GetSelection();
    selectionMode = this.m_options.getSelectionMode();

    topRow =  this._findRowByKey(selection[selection.length - 1]['startKey']['row']);
    bottomRow = this._findRowByKey(selection[selection.length - 1]['endKey']['row']);
    
    if (this.m_topSelectIconContainer != null && this.m_bottomSelectIconContainer != null)
    {
        if (selectionMode === 'row')
        {
            topRow.appendChild(this.m_topSelectIconContainer);
            bottomRow.appendChild(this.m_bottomSelectIconContainer);
        }
        else
        {
            dir = this.getResources().isRTLMode() ? "right" : "left";
            
            //get the cells for left/right alignment
            elementsInRange = this.getElementsInRange(selection[selection.length - 1]);
            topIconCell = elementsInRange[0];
            bottomIconCell = elementsInRange[elementsInRange.length-1];

            topRow.appendChild(this.m_topSelectIconContainer);   
            bottomRow.appendChild(this.m_bottomSelectIconContainer);

            this.setElementDir(this.m_topSelectIconContainer, this.getElementDir(topIconCell, dir) - (this._getTouchSelectionAffordanceSize()/2), dir);
            this.setElementDir(this.m_bottomSelectIconContainer, this.getElementDir(bottomIconCell, dir) + this.calculateColumnWidth(bottomIconCell)  - (this._getTouchSelectionAffordanceSize()/2), dir);
        }
    
    }
};

/**
 * Moves the touch selection affordances horizontally in the row to ensure they are in the viewport.
 * Only moved in row selection.
 * @private
 */
DvtDataGrid.prototype._scrollTouchSelectionAffordance = function()
{
    var selectionMode, newLeft, dir;
    selectionMode = this.m_options.getSelectionMode();   
    if (selectionMode === 'row')
    {      
        if (this.m_topSelectIconContainer != null)
        {
            dir = this.getResources().isRTLMode() ? "right" : "left";
            newLeft = (this.getElementWidth(this.m_databody)/2) + this.m_currentScrollLeft;        
            this.setElementDir(this.m_topSelectIconContainer, newLeft, dir);
            this.setElementDir(this.m_bottomSelectIconContainer, newLeft, dir);
        }
    }
};

/**
 * Get the touch affordance icon size
 * @return {number} the touch affordance icon size
 * @private
 */
DvtDataGrid.prototype._getTouchSelectionAffordanceSize = function()
{
    var div, divWidth;
    if (this.m_touchSelectionAffordanceSize == null)
    {
       div = document.createElement('div');
       div['className'] = this.getMappedStyle('toucharea');
       div['style']['visibilty'] = 'hidden';
       div['style']['top'] = '0px';
       div['style']['visibilty'] = '0px';
       this.m_root.appendChild(div);
       divWidth = div['offsetWidth'];
       this.m_root.removeChild(div);
       this.m_touchSelectionAffordanceSize = divWidth;
    }
    return this.m_touchSelectionAffordanceSize;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
DvtDataGrid.RESIZE_OFFSET = 5;
DvtDataGrid.RESIZE_TOUCH_OFFSET = 12;

/**
 * Handles what to do when the mouse moves. Sets the cursor based on .manageHeaderCursor(),
 * If this.m_isResizing is set to true, treats movement as resizing, calling .handleResizeMouseMove()
 * @param {Event} event - a mousemove event
 */
DvtDataGrid.prototype.handleResize = function(event)
{
    var header;
    //if not resizing, monitor the cursor position, otherwise handle resizing
    if (this.m_isResizing === false)
    {
        header = this.find(event['target'], 'header');
        //only if we are inside our grid's headers, multiple grid case
        if (header != null && (header == this.m_rowHeader || header == this.m_colHeader))
        {
            this.m_cursor = this.manageHeaderCursor(event);
            if (this.m_resizingElement != null)
            {

                //do not set on document body but rather just the header area 
                //don't have to deal with the sibling headers
                if (this.m_cursor == 'default')
                {
                    this.m_resizingElement['style']['cursor'] = '';
                }
                else
                {
                    this.m_resizingElement['style']['cursor'] = this.m_cursor;
                }
            }
        }
    }
    else
    {
        this.handleResizeMouseMove(event);
    }
};

/**
 * On mousedown, if the cursor was set to row/col -resize, set the required resize values.
 * @param {Event} event - a mousedown event
 * @return {boolean} true if event processed
 */
DvtDataGrid.prototype.handleResizeMouseDown = function(event)
{
    if (this.m_cursor === 'col-resize' || this.m_cursor === 'row-resize') {
        this.m_isResizing = true;
        if (this.m_utils.isTouchDevice())
        {
            this.m_lastMouseX = event.touches[0]['pageX'];
            this.m_lastMouseY = event.touches[0]['pageY'];
        }
        else
        {
            this.m_lastMouseX = event['pageX'];
            this.m_lastMouseY = event['pageY'];
        }

        this.m_overResizeLeft = 0;
        this.m_overResizeMinLeft = 0;
        this.m_overResizeTop = 0;
        this.m_overResizeMinTop = 0;
        this.m_overResizeRight = 0;
        this.m_overResizeBottom = 0;
        return true;
    }
    return false;
};

/**
 * On mouseup, if we were resizing, handle cursor and callback firing.
 * @param {Event} event - a mouseup event
 */
DvtDataGrid.prototype.handleResizeMouseUp = function(event)
{
    var size, details;
    if (this.m_isResizing === true)
    {
        //set the information we want to callback with in the resize event and callback
        size = (this.m_cursor === 'col-resize') ? this.m_resizingElement['style']['width'] : this.m_resizingElement['style']['height'];
        details = {
            'event': event, 'ui': {
                'header': this._getKey(this.m_resizingElement), 'size': size
            }
        };
        this.fireEvent('resize', details);

        //no longer resizing
        this.m_isResizing = false;
        this.m_cursor = 'default';
        this.m_resizingElement['style']['cursor'] = this.m_cursor;

    }
};

/**
 * Check if has data-resizable attribute is set to 'true' on a header
 * @param {HMTLElement} element - element to check if has data-resizable true
 * @return {boolean} true if data-resizable attribute is 'true'
 */
DvtDataGrid.prototype._isDOMElementResizable = function(element)
{
    return element.getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
};

/**
 * Check if has data-resizable attribute is set to 'true' on the header before that one
 * @param {HMTLElement} element - element to check if previous sibling has data-resizable true
 * @return {boolean} true if data-resizable attribute on the previouos sibling is 'true'
 */
DvtDataGrid.prototype._isDOMElementSiblingResizable = function(element)
{
    if (this.m_utils.containsCSSClassName(element, this.getMappedStyle('colheadercell')))
    {
        if (element['previousSibling'] !== null)
        {
            return element['previousSibling'].getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
        }
    }
    else if (this.m_utils.containsCSSClassName(element, this.getMappedStyle('rowheadercell')))
    {
        if (element['parentNode']['previousSibling']['firstChild'] !== null)
        {
            return element['parentNode']['previousSibling']['firstChild'].getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
        }
    }
    return false;
};

/**
 * Determine what the document cursor should be for header cells.
 * @param {Event} event - a mousemove event
 * @return {string} the cursor type for a given mouse location
 */
DvtDataGrid.prototype.manageHeaderCursor = function(event)
{
    var elem = event['target'], resizeHeaderMode, edges, cursorX, cursorY, offsetPixel, widthResizable, heightResizable, siblingResizable, rtl;
    //determine the element/header type that should be used for resizing if applicable
    elem = this.find(event['target'], 'colheadercell');
    if (!elem)
    {
        elem = this.find(event['target'], 'rowheadercell');
        resizeHeaderMode = 'row';
    }
    else
    {
        resizeHeaderMode = 'column';
    }

    if (!elem)
    {
        return 'default';
    }

    if (resizeHeaderMode === 'column')
    {
        heightResizable = this.m_options.isResizable(resizeHeaderMode)['height'] === "enable" ? true : false;
        widthResizable = this._isDOMElementResizable(elem);
        siblingResizable = this._isDOMElementSiblingResizable(elem);

    }
    else if (resizeHeaderMode === 'row')
    {
        widthResizable = this.m_options.isResizable(resizeHeaderMode)['width'] === "enable" ? true : false;
        heightResizable = this._isDOMElementResizable(elem);
        siblingResizable = this._isDOMElementSiblingResizable(elem);
    }

    //touch requires an area 24px for touch gestures
    if (this.m_utils.isTouchDevice())
    {
        cursorX = event.touches[0]['pageX'];
        cursorY = event.touches[0]['pageY'];
        offsetPixel = DvtDataGrid.RESIZE_TOUCH_OFFSET;
    }
    else
    {
        cursorX = event['pageX'];
        cursorY = event['pageY'];
        offsetPixel = DvtDataGrid.RESIZE_OFFSET;
    }
    edges = this.getHeaderEdgePixels(elem);
    rtl = this.getResources().isRTLMode();

    //check to see if resizable was enabled on the grid and then check the position of the cursor to the element border
    //we always choose the element preceding the border (so for rows the header before the bottom border)
    if (widthResizable)
    {
        if (rtl ? cursorX < edges[0] + offsetPixel : cursorX > edges[2] - offsetPixel)
        {
            this.m_resizingElement = elem;
            return 'col-resize';
        }
    }
    if (resizeHeaderMode === 'column' && siblingResizable && (rtl ? cursorX > edges[2] - offsetPixel : cursorX < edges[0] + offsetPixel))
    {
        this.m_resizingElement = elem['previousSibling'];
        if (this.m_resizingElement !== null)
        {
            return 'col-resize';
        }
    }
    if (heightResizable)
    {
        if (cursorY > edges[3] - offsetPixel)
        {
            this.m_resizingElement = elem;
            return 'row-resize';
        }
    }

    if (resizeHeaderMode === 'row' && siblingResizable && cursorY < edges[1] + offsetPixel)
    {
        this.m_resizingElement = elem['parentNode']['previousSibling']['firstChild'];
        if (this.m_resizingElement !== null)
        {
            return 'row-resize';
        }
    }

    return 'default';
};

/**
 * On mousemove see which type of resizing we are doing and call the appropriate resizer after calculating 
 * the new elements width based on current and last X and Y page coordinates.
 * @param {Event} event - a mousemove event
 */
DvtDataGrid.prototype.handleResizeMouseMove = function(event)
{
    var resizeHeaderMode, oldElementWidth, newElementWidth, oldElementHeight, newElementHeight;
    //update stored mouse position
    this.m_currentMouseX = event['pageX'];
    this.m_currentMouseY = event['pageY'];

    if (this.m_utils.isTouchDevice())
    {
        this.m_currentMouseX = event.touches[0]['pageX'];
        this.m_currentMouseY = event.touches[0]['pageY'];
    }
    else
    {
        this.m_currentMouseX = event['pageX'];
        this.m_currentMouseY = event['pageY'];
    }

    //check to see if we are resizing a column or row
    if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getMappedStyle('colheadercell')))
    {
        resizeHeaderMode = 'column';
    }
    else
    {
        resizeHeaderMode = 'row';
    }

    //handle width resizing for columns/rows
    if (this.m_cursor === 'col-resize')
    {
        if (resizeHeaderMode === 'column')
        {
            oldElementWidth = this.calculateColumnHeaderWidth(this.m_resizingElement);            
            newElementWidth = this.getNewElementWidth('column', oldElementWidth);
            this.resizeColWidth(oldElementWidth, newElementWidth);
        }
        else if (resizeHeaderMode === 'row')
        {
            oldElementWidth = this.getRowHeaderWidth();            
            newElementWidth = this.getNewElementWidth('row', oldElementWidth);
            this.resizeRowWidth(newElementWidth);
        }
    }
    //handle height resizing for columns/rows
    else if (this.m_cursor === 'row-resize')
    {
        if (resizeHeaderMode === 'row')
        {
            oldElementHeight = this.calculateRowHeaderHeight(this.m_resizingElement['parentNode']);
            newElementHeight = this.getNewElementHeight('row', oldElementHeight);
            this.resizeRowHeight(oldElementHeight, newElementHeight);
        }
        else if (resizeHeaderMode === 'column')
        {
            oldElementHeight = this.getColumnHeaderHeight();            
            newElementHeight = this.getNewElementHeight('column', oldElementHeight);
            this.resizeColHeight(newElementHeight);
        }
    }

    //rebuild the corners
    this.buildCorners();

    //update the last mouse X/Y
    this.m_lastMouseX = this.m_currentMouseX;
    this.m_lastMouseY = this.m_currentMouseY;
};

/**
 * Resize the width of column headers, and the column cells. Also resize the 
 * scroller and databody accordingly. Set the left(or right) style value on all 
 * cells/columns following(preceeding) the resizing element. Update the end 
 * column pixel as well.
 * @param {number} oldElementWidth - the elements width prior to resizing
 * @param {number} newElementWidth - the elements width after resizing
 */
DvtDataGrid.prototype.resizeColWidth = function(oldElementWidth, newElementWidth)
{
    var widthChange, oldScrollerWidth, newScrollerWidth, databodyWidth;
    widthChange = newElementWidth - oldElementWidth;
    if (widthChange != 0)
    {
        oldScrollerWidth = this.getElementWidth(this.m_scroller['firstChild']);
        newScrollerWidth = oldScrollerWidth + widthChange;
        databodyWidth = this.getElementWidth(this.m_databody);

        this.setElementWidth(this.m_scroller['firstChild'], newScrollerWidth);
        this.setElementWidth(this.m_databody['firstChild'], newScrollerWidth);
        this.setElementWidth(this.m_colHeader['firstChild'], newScrollerWidth);
        this.manageResizeScrollbars();
        this.setElementWidth(this.m_resizingElement, newElementWidth);
        //helper to update all elements this effects
        this.resizeColumnWidthAndShift(newElementWidth, widthChange);
        this.m_endColPixel += widthChange;
        this.m_endColHeaderPixel += widthChange;
        this.m_avgColWidth = newScrollerWidth / this.getDataSource().getCount('column');
    }
};

/**
 * Resize the height of row headers, and the rows cells. Also resize the 
 * scroller and databody accordingly. Update the end row pixel as well.
 * @param {number} oldElementHeight - the elements height prior to resizing
 * @param {number} newElementHeight - the elements height after resizing
 */
DvtDataGrid.prototype.resizeRowHeight = function(oldElementHeight, newElementHeight)
{
    var heightChange, oldScrollerHeight, newScrollerHeight, databodyHeight, newParentHeight;
    heightChange = newElementHeight - oldElementHeight;
    if (heightChange != 0)
    {
        oldScrollerHeight = this.getElementHeight(this.m_scroller['firstChild']);
        newScrollerHeight = oldScrollerHeight + heightChange;
        databodyHeight = this.getElementHeight(this.m_databody);

        this.setElementHeight(this.m_resizingElement['parentNode'], newElementHeight);
        newParentHeight = this.getElementHeight(this.m_rowHeader['firstChild']) + heightChange;
        this.setElementHeight(this.m_rowHeader['firstChild'], newParentHeight);
        this.setElementHeight(this.m_scroller['firstChild'], newScrollerHeight);
        this.setElementHeight(this.m_databody['firstChild'], newScrollerHeight);

        //set row height on the appropriate databody row, set the new value in the sizingManager
        this.resizeRowHeightAndShift(newElementHeight, heightChange);

        this.manageResizeScrollbars();

        this.m_endRowPixel += heightChange;
        this.m_endRowHeaderPixel += heightChange;
        this.m_avgRowHeight = newScrollerHeight / this.getDataSource().getCount('row');
    }
};

/**
 * Resize the height of column headers. Also resize the scroller and databody 
 * accordingly.
 * @param {number} newElementHeight - the column header height after resizing
 */
DvtDataGrid.prototype.resizeColHeight = function(newElementHeight)
{
    this.setElementHeight(this.m_colHeader, newElementHeight);
    this.m_colHeaderHeight = newElementHeight;
    this.manageResizeScrollbars();

};

/**
 * Resize the width of row headers. Also resize the scroller and databody 
 * accordingly.
 * @param {number} newElementWidth - the row header width after resizing
 */
DvtDataGrid.prototype.resizeRowWidth = function(newElementWidth)
{
    this.setElementWidth(this.m_rowHeader, newElementWidth);
    this.m_rowHeaderWidth = newElementWidth;
    this.manageResizeScrollbars();
};

/**
 * Determine what the new element width should be based on minimum values. 
 * Accounts for the overshoot potential of passing up the boundries set.
 * @param {string} axis - the axis along which we need a new width
 * @param {number} oldElementWidth - the element width prior to resizing
 * @return {number} the element width after resizing
 */
DvtDataGrid.prototype.getNewElementWidth = function(axis, oldElementWidth)
{
    var minWidth, databodyWidth, deltaWidth, newElementWidth, oldScrollerWidth, halfGridWidth;
    //to account for the 24px resing width
    minWidth = this.m_utils.isTouchDevice() ? 2 * DvtDataGrid.RESIZE_TOUCH_OFFSET : 2 * DvtDataGrid.RESIZE_OFFSET;
    databodyWidth = this.getElementWidth(this.m_databody);
    deltaWidth = this.getResources().isRTLMode() ? this.m_lastMouseX - this.m_currentMouseX : this.m_currentMouseX - this.m_lastMouseX;
    newElementWidth = oldElementWidth + deltaWidth + this.m_overResizeLeft + this.m_overResizeMinLeft + this.m_overResizeRight;
    oldScrollerWidth = this.getElementWidth(this.m_scroller['firstChild']);
    halfGridWidth = Math.round(this.getWidth() / 2);

    //check to make sure the element exceeds the minimum width
    if (newElementWidth < minWidth)
    {
        this.m_overResizeMinLeft += deltaWidth - minWidth + oldElementWidth;
        newElementWidth = minWidth;
    }
    else
    {
        this.m_overResizeMinLeft = 0;
        this.m_overResizeLeft = 0;
    }
    //check to make sure row header width don't exceed half of the grid width
    if (axis === 'row')
    {
        if (newElementWidth > halfGridWidth)
        {
            this.m_overResizeRight += deltaWidth - halfGridWidth + oldElementWidth;
            newElementWidth = halfGridWidth;
        }
        else
        {
            this.m_overResizeRight = 0;
        }
    }
    return newElementWidth;
};

/**
 * Determine what the new element height should be based on minimum values. 
 * Accounts for the overshoot potential of passing up the boundries set.
 * @param {string} axis - the axis along which we need a new width
 * @param {number} oldElementHeight - the element height prior to resizing
 * @return {number} the element height after resizing
 */
DvtDataGrid.prototype.getNewElementHeight = function(axis, oldElementHeight)
{
    var databodyHeight, minHeight, deltaHeight, newElementHeight, oldScrollerHeight, halfGridHeight;
    minHeight = this.m_utils.isTouchDevice() ? 2 * DvtDataGrid.RESIZE_TOUCH_OFFSET : 2 * DvtDataGrid.RESIZE_OFFSET;
    databodyHeight = this.getElementHeight(this.m_databody);
    deltaHeight = this.m_currentMouseY - this.m_lastMouseY;
    newElementHeight = oldElementHeight + deltaHeight + this.m_overResizeTop + this.m_overResizeMinTop + this.m_overResizeBottom;
    oldScrollerHeight = this.getElementHeight(this.m_scroller['firstChild']);
    halfGridHeight = Math.round(this.getHeight() / 2);

    //Check to make sure the element height exceeds the minimum height
    if (newElementHeight < minHeight)
    {
        this.m_overResizeMinTop += deltaHeight - minHeight + oldElementHeight;
        newElementHeight = minHeight;
    }
    else
    {
        this.m_overResizeMinTop = 0;
        this.m_overResizeTop = 0;
    }
    //check to make sure column header width don't exceed half of the grid height
    if (axis === 'column')
    {
        if (newElementHeight > halfGridHeight)
        {
            this.m_overResizeBottom += deltaHeight - halfGridHeight + oldElementHeight;
            newElementHeight = halfGridHeight;
        }
        else
        {
            this.m_overResizeBottom = 0;
        }
    }
    return newElementHeight;
};

/**
 * Manages the databody and scroller sizing when the scrollbars are added and 
 * removed scrollbars from the grid. This allows the grid container to maintain 
 * size as it renders scrollbars inside rahther than out. Method mimics resizeGrid
 */
DvtDataGrid.prototype.manageResizeScrollbars = function() {
    var width, height, colHeader, rowHeader, scroller, databody, colHeaderHeight, rowHeaderWidth,
            databodyContentWidth, databodyWidth, databodyContentHeight, databodyHeight, isDatabodyHorizontalScrollbarRequired,
            isDatabodyVerticalScrollbarRequired, scrollbarSize, dir, scrollerHeight, scrollerWidth;

    width = this.getWidth();
    height = this.getHeight();
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;
    scroller = this.m_scroller;
    databody = this.m_databody;

    // cache these since they will be used in multiple places and we want to minimize reflow
    colHeaderHeight = this.getColumnHeaderHeight();
    rowHeaderWidth = this.getRowHeaderWidth();
    databodyContentWidth = this.getElementWidth(databody['firstChild']);
    databodyContentHeight = this.getElementHeight(databody['firstChild']);

    //adjusted to make the databody wrap the databody content, and the scroller to fill the remaing part of the grid
    //this way our scrollbars are always at the edges of our viewport
    scrollerHeight = height - colHeaderHeight;
    scrollerWidth = width - rowHeaderWidth;
    databodyWidth = Math.min(databodyContentWidth, scrollerWidth);
    databodyHeight = Math.min(databodyContentHeight, scrollerHeight);

    scrollbarSize = this.m_utils.getScrollbarSize();

    //determine which scrollbars are required, if needing one forces need of the other, allows rendering within the root div
    isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(scrollerWidth);
    if (isDatabodyHorizontalScrollbarRequired)
    {
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(scrollerHeight - scrollbarSize);
    }
    else
    {
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(scrollerHeight);
        if (isDatabodyVerticalScrollbarRequired)
        {
            isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(scrollerWidth - scrollbarSize);
        }
    }

    //There what seems to be a browser bug on scrollbars appearing when the values are the same for scroller, and scroller[firstchild]
    //This was in the old code, but didn't get put into the updated version
    if (!isDatabodyVerticalScrollbarRequired && !isDatabodyHorizontalScrollbarRequired && this.m_hasHorizontalScroller && this.m_hasVerticalScroller)
    {
        //workaround for scrollbars not hiding
        scroller['style']['overflow'] = "visible";
    }
    if ((isDatabodyVerticalScrollbarRequired && isDatabodyHorizontalScrollbarRequired && !this.m_hasHorizontalScroller && !this.m_hasVerticalScroller) 
            || (isDatabodyVerticalScrollbarRequired && !this.m_hasVerticalScroller) 
            || (isDatabodyHorizontalScrollbarRequired && !this.m_hasHorizontalScroller))
    {
        scroller['style']['overflow'] = "auto";

    }

    this.m_hasHorizontalScroller = isDatabodyHorizontalScrollbarRequired;
    this.m_hasVerticalScroller = isDatabodyVerticalScrollbarRequired;

    //appropriatley set the width and height in the scrollabr case
    if (isDatabodyHorizontalScrollbarRequired)
    {
        //if the scroller position is bigger than the databody
        if (((scrollerHeight - scrollbarSize) < databodyHeight))
        {
            //if the visible height is going to be less than the databody height, set the databody height to the visible height 
            databodyHeight = scrollerHeight - scrollbarSize;
        }
    }
    if (isDatabodyVerticalScrollbarRequired)
    {
        //if the visible width is going to be less than the databody width, set the databody width to the visible width 
        if (((scrollerWidth - scrollbarSize) < databodyWidth))
        {
            databodyWidth = scrollerWidth - scrollbarSize;
        }
    }

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementDir(rowHeader, colHeaderHeight, 'top');
    this.setElementHeight(rowHeader, databodyHeight);
    this.setElementDir(colHeader, rowHeaderWidth, dir);
    this.setElementWidth(colHeader, databodyWidth);
    this.setElementDir(databody, colHeaderHeight, 'top');
    this.setElementDir(databody, rowHeaderWidth, dir);
    this.setElementWidth(databody, databodyWidth);
    this.setElementHeight(databody, databodyHeight);
    this.setElementDir(scroller, colHeaderHeight, 'top');
    this.setElementDir(scroller, rowHeaderWidth, dir);
    this.setElementWidth(scroller, scrollerWidth);
    this.setElementHeight(scroller, scrollerHeight);

    // cache the scroll width and height to minimize reflow
    this.m_scrollWidth = databodyContentWidth - databodyWidth;
    this.m_scrollHeight = databodyContentHeight - databodyHeight;

    this.buildCorners();
};


/**
 * Resizes all cell in the resizing element's column, and updates the left(right)
 * postion on the cells and column headers that follow(preceed) that column.
 * @param {number} newWidth - the width of the resizing element
 * @param {number} widthChange - the change in width of the resizing element
 */
DvtDataGrid.prototype.resizeColumnWidthAndShift = function(newWidth, widthChange)
{
    var dir, databodyRows, children, after, i, newStart, j;
    dir = this.getResources().isRTLMode() ? "right" : "left";
    databodyRows = this.m_databody['firstChild']['childNodes'];
    children = this.m_resizingElement['parentNode']['childNodes'];
    after = false;
    if (children.length === databodyRows[1]['childNodes'].length)
    {
        this.m_databody['style']['display'] = 'none';
        this.m_colHeader['style']['display'] = 'none';

        for (i = 0; i < children.length; i += 1)
        {
            if (children[i] !== this.m_resizingElement && after === true)
            {
                newStart = this.getElementDir(children[i], dir) + widthChange;
                this.setElementDir(children[i], newStart, dir);
                for (j = 1; j < databodyRows.length; j += 1)
                {
                    this.setElementDir(databodyRows[j]['childNodes'][i], newStart, dir);
                }
            } else if (children[i] === this.m_resizingElement)
            {
                after = true;
                this.m_sizingManager.setSize('column', this.m_resizingElement.getAttribute(this.getResources().getMappedAttribute('key')), newWidth);
                for (j = 1; j < databodyRows.length; j += 1)
                {
                    this.setElementWidth(databodyRows[j]['childNodes'][i], newWidth);
                }
            }
        }

        this.m_databody['style']['display'] = '';
        this.m_colHeader['style']['display'] = '';
    }
};

/**
 * Resizes the resizing elements row, and updates the top
 * postion on the rows and row headers that follow that column.
 * @param {number} newHeight - the width of the resizing element
 * @param {number} heightChange - the change in width of the resizing element
 */
DvtDataGrid.prototype.resizeRowHeightAndShift = function(newHeight, heightChange)
{
    var databodyRows, rowHeaders, after, i, newStart, j;
    databodyRows = this.m_databody['firstChild']['childNodes'];
    rowHeaders = this.m_resizingElement['parentNode']['parentNode']['childNodes'];
    after = false;
    if (databodyRows.length === rowHeaders.length)
    {
        this.m_databody['style']['display'] = 'none';
        this.m_rowHeader['style']['display'] = 'none';

        for (i = 1; i < rowHeaders.length; i += 1)
        {
            if (rowHeaders[i]['firstChild'] !== this.m_resizingElement && after === true)
            {
                newStart = this.getElementDir(rowHeaders[i], 'top') + heightChange;
                this.setElementDir(rowHeaders[i], newStart, 'top');
                this.setElementDir(databodyRows[i], newStart, 'top');

            } else if (rowHeaders[i]['firstChild'] === this.m_resizingElement)
            {
                after = true;
                this.m_sizingManager.setSize('row', this.m_resizingElement['parentNode'].getAttribute(this.getResources().getMappedAttribute('key')), newHeight);
                this.setElementHeight(databodyRows[i], newHeight);
            }
        }

        this.m_databody['style']['display'] = '';
        this.m_rowHeader['style']['display'] = '';
    }
};

/**
 * Takes the original target of the context menu and maps it to the appropriate 
 * column/row header to resize and selects the right resize function.
 * @param {HTMLElement|EventTarget} target - the context menu was applied to
 * @param {string} id - 'width' or 'height'
 * @param {string} val - new width or height to resize to
 */
DvtDataGrid.prototype.handleContextMenuResize = function(target, id, val) {
    var initialValue, value;
    value = parseInt(val, 10);
    if (this.m_utils.containsCSSClassName(target, this.getMappedStyle('sortascending')) ||
            this.m_utils.containsCSSClassName(target, this.getMappedStyle('sortdescending')) ||
            this.m_utils.containsCSSClassName(target, this.getMappedStyle('sortindicators')))
    {
        target = this.findHeader(target);
    }
    this.m_resizingElement = target;
    if (id === 'resizeWidth')
    {
        initialValue = target['offsetWidth'];
        if (initialValue !== value) {
            if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getMappedStyle('colheadercell')))
            {
                if (this._isDOMElementResizable(this.m_resizingElement))
                {
                    this.resizeColWidth(initialValue, value);
                }
            }
            else
            {
                this.resizeRowWidth(value);
            }
        }
    }
    else if (id === 'resizeHeight')
    {
        initialValue = target['offsetHeight'];
        if (initialValue !== value) {
            if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getMappedStyle('colheadercell')))
            {
                this.resizeColHeight(value);
            } else
            {
                if (this._isDOMElementResizable(this.m_resizingElement))
                {
                    this.resizeRowHeight(initialValue, value);
                }
            }
        }
    }

    this.buildCorners();
};


/**
 * Get the edges (left,right,top,bottom) pixel locations relative to the page
 * @param {HTMLElement} elem - the element to find edges of
 * @return {Array.<number>} An array of numbers [leftEdge, topEdge, rightEdge, bottomEdge]
 */
DvtDataGrid.prototype.getHeaderEdgePixels = function(elem)
{
    var elementXY, leftEdge, topEdge, rightEdge, bottomEdge, targetWidth, targetHeight;
    elementXY = this.findPos(elem);
    leftEdge = elementXY[0];
    topEdge = elementXY[1];
    if (this.m_utils.containsCSSClassName(elem, this.getMappedStyle('colheadercell')))
    {
        targetWidth = this.calculateColumnHeaderWidth(elem);
        targetHeight = this.getColumnHeaderHeight();
    }
    else
    {
        targetWidth = this.getRowHeaderWidth();
        targetHeight = this.calculateRowHeaderHeight(elem['parentNode']);
    }
    rightEdge = leftEdge + targetWidth;
    bottomEdge = topEdge + targetHeight;
    return [leftEdge, topEdge, rightEdge, bottomEdge];
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * Event handler for handling mouse over event on headers.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleSortMouseOver = function(event)
{
    // checks if the mouse out is trigger by leaving the sort icons
    // the event can now enter the sort container
    var header = this.findHeader(event.target);
    if (header)
    {
        this._showOrHideSortIcon(header, false);
    }
    
    //if we are hovering the icon add hover class
    if (this.m_utils.containsCSSClassName(event.target, this.getMappedStyle("sortascending")) 
        || this.m_utils.containsCSSClassName(event.target, this.getMappedStyle("sortdescending")))  
    {
        this.m_utils.addCSSClassName(event.target, this.getMappedStyle("hover")); 
    }    
};

/**
 * Event handler for handling mouse out event on headers.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleSortMouseOut = function(event)
{
    var header = this.findHeader(event.target);    
    //if there is no header or we didn't just exit the content of the header
    if (header == null || event.relatedTarget == null ? true: header !== this.findHeader(event.relatedTarget))
    {
        this._showOrHideSortIcon(header, true);
    }  
    
    //if we are done hovering the icon remove hover class    
    if (this.m_utils.containsCSSClassName(event.target, this.getMappedStyle("sortascending")) 
        || this.m_utils.containsCSSClassName(event.target, this.getMappedStyle("sortdescending")))  
    {
        this.m_utils.removeCSSClassName(event.target, this.getMappedStyle("hover")); 
        this.m_utils.removeCSSClassName(event.target, this.getMappedStyle("selected")); 
    }          
};

/**
 * Add the selcted color on mousedown
 * @param {Element} icon the icon to set selected on
 * @private
 */
DvtDataGrid.prototype._handleSortIconMouseDown = function(icon)
{
    this.m_utils.addCSSClassName(icon, this.getMappedStyle("selected"));         
};

/**
 * Show or hide the sort indicator icons.
 * @param {Element} header the dom element of the header to switch icon direction in
 * @param {string} direction asecnding or descending to switch to
 * @private
 */
DvtDataGrid.prototype._toggleSortIconDirection = function(header, direction)
{
    var icon;
    if (header != null)
    {    
        // shows the sort indicator
        icon = this._getSortIcon(header);
        if (direction === 'descending' && this.m_utils.containsCSSClassName(icon, this.getMappedStyle("sortascending")))
        {
            this.m_utils.removeCSSClassName(icon, this.getMappedStyle("sortascending"));   
            this.m_utils.addCSSClassName(icon, this.getMappedStyle("sortdescending"));         
        }
        else if (direction === 'ascending' &&this.m_utils.containsCSSClassName(icon, this.getMappedStyle("sortdescending")))
        {
            this.m_utils.removeCSSClassName(icon, this.getMappedStyle("sortdescending"));   
            this.m_utils.addCSSClassName(icon, this.getMappedStyle("sortascending"));        
        }                
    }
};

/**
 * Show or hide the sort indicator icons.
 * @param {Element} header the dom event
 * @param {boolean} hide true if hide the icons, false to show the icons
 * @private
 */
DvtDataGrid.prototype._showOrHideSortIcon = function(header, hide)
{
    var icon, sorted = false;
    // shows the sort indicator
    if (header != null)
    {
        icon = this._getSortIcon(header);
        if (this.m_sortInfo != null)        
        {
            sorted = this.m_sortInfo['key'] === this._getKey(header);
        }
        if (hide === false && !sorted)
        {
            this.m_utils.removeCSSClassName(icon, this.getMappedStyle("disabled"));                    
            this.m_utils.addCSSClassName(icon, this.getMappedStyle("default"));                    
        }
        else if (hide === true && !sorted)
        {
            this.m_utils.removeCSSClassName(icon, this.getMappedStyle("default"));                    
            this.m_utils.addCSSClassName(icon, this.getMappedStyle("disabled"));                    
        }             
    }
};

/**
 * Creates the sort indicator icons and the panel around them.
 * @param {Object} headerContext a header context object, contianing key
 * @return {Element} the sort indicator icons panel
 * @private
 */
DvtDataGrid.prototype._buildSortIcon = function(headerContext)
{
    var sortIcon, iconClassString, key, direction, sortContainer;
    //sort container is used to create fade effect
    sortContainer = document.createElement("div");
    sortContainer['className'] = this.getMappedStyle("sortcontainer");
    
    sortIcon = document.createElement("div");
    iconClassString = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon");
    key = this.m_sortInfo != null ? this.m_sortInfo['key']:null;

    //handles the case where we scroll the header which was sorted on, off screen and come back to them
    if (headerContext['key'] === key)
    {
        direction = this.m_sortInfo != null ? this.m_sortInfo['direction']:null;
        if (direction === 'ascending')
        {
            sortIcon['className'] = this.getMappedStyle("sortascending") + " "  + iconClassString + " " + this.getMappedStyle("default");                    
        }
        else if (direction === 'descending')
        {
            sortIcon['className'] = this.getMappedStyle("sortdescending") + " "  + iconClassString + " " + this.getMappedStyle("default");                                
        }
    }
    else
    {
        iconClassString += " " + this.getMappedStyle("disabled");        
        sortIcon['className'] = this.getMappedStyle("sortascending") + " "  + iconClassString;
    }
    sortContainer.appendChild(sortIcon);
    return sortContainer;
};

/**
 * Handles sorting using keyboard (enter key while focus on header).  See HandleHeaderKeyDown.
 * @param {Element} header header being sorted on
 * @param {Event} event DOM keyboard event triggering sort
 * @private
 */
DvtDataGrid.prototype._handleKeyboardSort = function(header, event)
{
    var direction = header.getAttribute(this.getResources().getMappedAttribute('sortDir'));
    if (direction == null || direction === "descending")
    {
        direction = "ascending";
    }
    else
    {
        direction = "descending";
    }    

    this._doHeaderSort(event, header, direction);
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @param {string} direction asecnding or descending to sort on 
 * @private
 */
DvtDataGrid.prototype._handleHeaderSort = function(event, direction)
{
    var target, header;
    target = event.target;

    header = this.findHeader(target);
    if (header != null)
    {
        // use the class name to determine if it's asecnding or descending
        if (direction == null)
        {
            if (this.m_sortInfo != null && this.m_sortInfo['key'] === this._getKey(header))
            {
                if (this.m_sortInfo['direction'] === 'ascending')
                {
                    direction = 'descending';
                }
                else
                {
                    direction = 'ascending';
                }
            }
            else
            {
                //we should get here on inital touch sort only
                direction = 'ascending';            
            }          
        }        
        this._doHeaderSort(event, header, direction);
    }
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @param {string} direction asecnding or descending to switch to
 * @param {Element} header the header to sort on
 * @private
 */
DvtDataGrid.prototype._handleCellSort = function(event, direction, header)
{
    var target;
    target = event.target;
    if (header != null)
    {
        this._doHeaderSort(event, header, direction);
    }
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @param {Element} header the header element
 * @param {string} direction the sort direction
 * @private
 */
DvtDataGrid.prototype._doHeaderSort = function(event, header, direction)
{
    var key, axis, details, criteria;
    
    // needed for toggle and screenreader
    header.setAttribute(this.getResources().getMappedAttribute('sortDir'), direction);
    
    // get the key and axis  
    key = this._getKey(header);
    axis = this._getAxis(header);


    this._removeSortSelection();
    this.m_sortInfo = {'key':key, 'axis':axis, 'direction':direction};
    
    //flip the icon direction
    this._toggleSortIconDirection(header, direction);
    this._addSortSelection();

    // creates the criteria object and invoke sort on the data source
    if (direction != null && key != null && axis != null)
    {
        // show status message
        this.showStatusText();

        // invoke sort
        criteria = {"axis": axis, "key": key, "direction": direction};
        this.getDataSource().sort(criteria, {"success": this._handleSortSuccess.bind(this), "error": this._handleSortError.bind(this)});

        // fire event
        details = {
            'event': event, 'ui': {
                'header': key,
                'direction': direction
            }
        };
        this.fireEvent("sort", details);
    }

    // update screen reader alert
    this._setAccInfoText(direction === 'ascending' ? 'accessibleSortAscending': 'accessibleSortDescending', {'id': key});    
};

/**
 * Callback method invoked when the sort operation failed.
 * @private
 */
DvtDataGrid.prototype._handleSortError = function()
{
    this.hideStatusText();
};

/**
 * Remove the selected style class from the previous sorted sort icon, and add disabled back to it
 * @private
 */
DvtDataGrid.prototype._removeSortSelection = function()
{
    var oldSortedHeader, oldsortIcon;
    if (this.m_sortInfo != null)
    {
        //get the header that was sorted on and the icon within it based on the values stored in this.m_sortInfo
        oldSortedHeader = this._findColumnHeaderByKey(this.m_sortInfo['key']);
        oldsortIcon = this._getSortIcon(oldSortedHeader);
        //flip icon back to ascending
        this._toggleSortIconDirection(oldSortedHeader, 'ascending');     
        if (this.m_sortInfo['direction'] === 'descending')
        {
            //switch back to the default ascending icon
            this.m_utils.removeCSSClassName(oldsortIcon, this.getMappedStyle("sortdescending"));   
            this.m_utils.addCSSClassName(oldsortIcon, this.getMappedStyle("sortascending"));         
        }
        //disable the icon to hide it, remove the selected style
        this.m_utils.addCSSClassName(oldsortIcon, this.getMappedStyle('disabled'));
        this.m_utils.removeCSSClassName(oldsortIcon, this.getMappedStyle('default'));        
        this.m_utils.removeCSSClassName(this._getSortContainer(oldSortedHeader), this.getMappedStyle('enabled'));        
    }
};

/**
 * Add the selected style class to the newly sorted sort icon and remove disabled from it
 * @private
 */
DvtDataGrid.prototype._addSortSelection = function()
{
    var sortedHeader, sortIcon;
    if (this.m_sortInfo != null)
    {
        //get the header that is sorted on and the icon within it based on the values stored in this.m_sortInfo        
        sortedHeader = this._findColumnHeaderByKey(this.m_sortInfo['key']);
        sortIcon = this._getSortIcon(sortedHeader);        
        
        //select the icon to show it, remove the disabled style        
        this.m_utils.addCSSClassName(sortIcon, this.getMappedStyle('default'));        
        this.m_utils.removeCSSClassName(sortIcon, this.getMappedStyle('disabled'));
        this.m_utils.removeCSSClassName(sortIcon, this.getMappedStyle('selected'));
        this.m_utils.addCSSClassName(this._getSortContainer(sortedHeader), this.getMappedStyle('enabled'));        
    }
};

/**
 * Determine the axis of the header.
 * @param {Element} header the header to determine the axis, returns either "row" or "column".
 * @return {string|null} the axis of the header
 * @private
 */
DvtDataGrid.prototype._getAxis = function(header)
{
    var columnHeaderCellClassName, rowHeaderCellClassName;

    columnHeaderCellClassName = this.getMappedStyle("colheadercell");
    rowHeaderCellClassName = this.getMappedStyle("rowheadercell");

    if (this.m_utils.containsCSSClassName(header, columnHeaderCellClassName))
    {
        return "column";
    }

    if (this.m_utils.containsCSSClassName(header, rowHeaderCellClassName))
    {
        return "row";
    }

    return null;
};

/**
 * Callback method invoked when the sort operation completed successfully.
 * @private
 */
DvtDataGrid.prototype._handleSortSuccess = function()
{
    // hide the message
    this.hideStatusText();

    // sort is completed successfully, now fetch the sorted data
    // fetch cells for the current range but with sort specific callback
    // scroll position should remain unchanged
    //this.fetchHeaders("row", this.m_startRow, this.m_rowHeader, this.m_endRow-this.m_startRow, {"success": this.handleHeadersFetchSuccess});          

    var newRowHeaderElements = document.createElement("div");
    newRowHeaderElements['id'] = this.createSubId("rowHeader");
    newRowHeaderElements['className'] = this.getResources().getMappedStyle("rowheader") + " " + this.getResources().getMappedStyle("header");
    this.fetchHeaders("row", this.m_startRow, newRowHeaderElements, this.m_endRow - this.m_startRow + 1);
    this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, this.m_startCol, this.m_endRow-this.m_startRow+1, this.m_endCol-this.m_startCol+1, {"success": this.handleCellsFetchSuccessForSort.bind(this, newRowHeaderElements), "error": this.handleCellsFetchError});
};

/**
 * Handle a successful call to the data source fetchCells after sort. 
 * @param {Element} newRowHeaderElements
 * @param {Object} cellSet a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype.handleCellsFetchSuccessForSort = function(newRowHeaderElements, cellSet, cellRange)
{
    var rowRange, rowStart, rowCount, columnRange, columnStart, columnCount, newRowElements, oldRowElements, i,
        oldRowHeaderElements, newRowHeaderElementsFragment, duration, headerContent, databodyContent;
    
    this.m_fetching['cells'] = false;
    
    duration = 800;
    
    // size the grid if fetch is done
    if (this.isFetchComplete())
    {
        this.hideStatusText();
    }

    // obtain params for _addRows
    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");

    // the rows AFTER sort should be inside the newRowElements fragment
    newRowElements = document.createDocumentFragment();
    newRowElements.appendChild(document.createElement("div"));
    
    newRowHeaderElementsFragment = document.createDocumentFragment();
        
    this._addRows(newRowElements, true, this.m_startRowPixel, rowStart, rowCount, columnStart, false, cellSet);
    
    oldRowElements = this.m_databody['firstChild'];
    
    oldRowHeaderElements = this.m_rowHeader['firstChild'];
    
    if(newRowHeaderElements && newRowHeaderElements['firstChild'])
    {
        while(newRowHeaderElements['firstChild']['firstChild'])
        {
            newRowHeaderElementsFragment.appendChild(newRowHeaderElements['firstChild']['firstChild']);
        }
    }    
    // now compare the two set of rows and animate
    //  duration = this.getCSSPropertyValueFromClass('.oj-dvtComponent', 'animation-duration'); //default

    if (!duration || duration == 0)
    {
        if(newRowHeaderElementsFragment.childElementCount > 1)
        {
            headerContent = this.m_rowHeader['firstChild'];
            headerContent.innerHTML = "";
            for (i = 1; i < newRowHeaderElementsFragment.childElementCount; i++)
            {
                newRowHeaderElementsFragment.children[i].style.top = oldRowElements.children[i].style.top;
            }
            headerContent.appendChild(newRowHeaderElementsFragment);
        }
        databodyContent = this.m_databody['firstChild'];
        databodyContent.innerHTML = "";
        databodyContent.appendChild(newRowElements);

        // restore active cell
        this._restoreActive();

        return;
    }
    else
    {
        setTimeout(function(){
            this.processSortAnimationToPosition(duration, 0, "ease-in", oldRowHeaderElements, newRowHeaderElementsFragment, oldRowElements, newRowElements);
        }.bind(this), 0);
    }
};

//--animation---vvc-------------------------------------------------------------
/**
 * Check if value is numeric. 
 * @param {Object} v
 * @return {boolean} 
 * * @private
 */
DvtDataGrid.prototype.isNumeric = function(v)
{
    var expr = /^-{0,1}\d*\.{0,1}\d+$/;
    return (expr.test(v));
};

/**
 * Create array of "data-key" values. 
 * @param {Element} initialData the element from which the "data-key" elements are extracted
 * @return {Array.<Object>} 
 * @private
 */
DvtDataGrid.prototype.getDataKeySet = function (initialData)
{
    var dataKeySet, keyAttr, i, j;

    dataKeySet = [];    
    keyAttr = this.getResources().getMappedAttribute('key');
    for(i = 0; i < initialData.childNodes.length; i++) //vvc12
    {
        for(j = 0; j < initialData.childNodes[i].attributes.length; j++) //vvc12
        {
            if(initialData.childNodes[i].attributes[j].nodeName == keyAttr) //vvc12
            {
                dataKeySet.push(initialData.childNodes[i].attributes[j].nodeValue); //vvc12
                break;
            }
        }
    }
    return dataKeySet;
};


/**
 * Check if CSS property is supported by appropriate vendors
 * @param {string} cssprop css property
 * @return {string} css property with appropiate vendor's prefix
 * @private
 */
DvtDataGrid.prototype.getCssSupport = function(cssprop) 
{
    var vendors, root, i, css3mc;

    vendors = ['', '-moz-', '-webkit-', '-o-', '-ms-', '-khtml-'];
    root = document.documentElement;
    
    function toCamel(str) 
    {
        return str.replace(/\-([a-z])/gi, function(match, val) 
        {
            // convert first letter after "-" to uppercase
            return val.toUpperCase();
        });
    }
    
    for (i = 0; i < vendors.length; i++) 
    {
        css3mc = toCamel(vendors[i] + cssprop);
        // if property starts with 'Ms'
        if (css3mc.substr(0, 2) == 'Ms')
        {
            // Convert 'M' to lowercase            
            css3mc = 'm' + css3mc.substr(1);
        }
        if (css3mc in root.style) 
        {
            return css3mc;
        }
    }

    return undefined;
};

/**
 * Get CSS class by name
 * @param {string} className CSS class name
 * @return {Object|null} CSS class
 * @private
 */
DvtDataGrid.prototype.getCSSClassByName = function(className) 
{
    var i, classes;
    
    classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
    for(i = 0; i < classes.length; i++) 
    {
        if(classes[i].selectorText==className)
	{ 
            return classes[i];
	}
    }
    return null;
};

/**
 * Get CSS property value from CSS class
 * @param {string} fromClass CSS class name
 * @param {string} cssprop CSS property
 * @return {string|null} value css property with appropriate vendor's prefix
 * @private
 */
DvtDataGrid.prototype.getCSSPropertyValueFromClass = function (fromClass, cssprop)
{
    var clazz, style, value;
    
    clazz = this.getCSSClassByName(fromClass);
    style = clazz.style;
    value = style[this.getCssSupport(cssprop)]; 
    if(value)
    {
        return value;
    }
    else
    {
        return null;
    }
};

/**
 * Change or add CSS property of element
 * @param {Element} target the element to which css property will be added
 * @param {string} prop the style property name
 * @param {string} value the value of css property
 * @param {string} action the flag variable if it is require to remove css property
 * @private
 */
DvtDataGrid.prototype.changeStyleProperty = function(target, prop, value, action)
{
    if (typeof prop != "undefined")
    {
        target.style[prop] = (action == "remove") ? "" : value;
    }
};

/**
 * Add set of required animation rules to the element
 * @param {Element} target the element to which animation rules will be added
 * @param {number} duration the duration of animation
 * @param {number} delay the delay of animation
 * @param {string} timing the easing function 
 * @param {number} y the final position (in pixels) of the current animation
 * @private
 */
DvtDataGrid.prototype.addUpDownMoveStyle = function(target, duration, delay, timing, y)
{
    this.changeStyleProperty(target, this.getCssSupport('transition-delay'), delay);
    this.changeStyleProperty(target, this.getCssSupport('transition-timing-function'), timing);
    this.changeStyleProperty(target, this.getCssSupport('transition-duration'), duration);
    this.changeStyleProperty(target, this.getCssSupport('transform'), 'translate3d(0,'+y+'px,0)');
};

/**
 * The main method for animation of the DataGrid rows from before-sort to the after-sort potitions
 * @param {number} duration the duration of animation
 * @param {number} delay_offset the initial delay of animation
 * @param {string} timing the easing function 
 * @param {Element} oldRowHeaderElements
 * @param {Element} newRowHeaderElements
 * @param {Object} oldElementSet the DOM structure on which tha animation will be performed. Initially contains DOM elements in before sorting order
 * @param {Element} newElementSet the element that contains set of sub-elements in "after-sorting" order
 * @private
 */
DvtDataGrid.prototype.processSortAnimationToPosition = function(duration, delay_offset, timing, oldRowHeaderElements, newRowHeaderElements, oldElementSet, newElementSet)
{
    var me, pos, oldLength, oldSet, newSet, animOrder, restSet, v, gridHeight, colHeaderHeight, gridBodyHeight,
        rowHeight, offset, scrollTop, limitRangeInPixels, limitRangeInRows, rowsForAppend, rowHeadersForAppend, restSetLength, dv,
        i, j, key, k, kk, l, dkey, delay, keyAttr, order, idx, bottomLimit, topLimit, rowPos, child, colHeader, rowHeaderSupport,
        newElementSetClone, newRowHeaderElementsClone, databodyContent;

    rowHeaderSupport = false;
    me = this;
    pos = 0;
    newElementSetClone = newElementSet.cloneNode(true);
    newRowHeaderElementsClone = newRowHeaderElements ? newRowHeaderElements.cloneNode(true) : null;
    keyAttr = this.getResources().getMappedAttribute('key');
    oldLength = oldElementSet.childElementCount;
    newSet = this.getDataKeySet(newElementSet);
    oldSet = this.getDataKeySet(oldElementSet);
    animOrder = [];
    restSet = [];
    rowsForAppend = [];
    rowHeadersForAppend = [];
    restSetLength = 0;
    gridHeight = this.getHeight();
    colHeader = this.m_colHeader;
    colHeaderHeight = this.getColumnHeaderHeight();
    gridBodyHeight = gridHeight - colHeaderHeight;
    rowHeight = this.getDefaultRowHeight();
    offset = parseInt(oldElementSet.childNodes[1].style.top.split("px")[0], 10);
    if (!offset)
    {
        offset = 0;
    }
    
    scrollTop = this.m_currentScrollTop - offset;
    limitRangeInPixels = [scrollTop, scrollTop + gridBodyHeight];
    limitRangeInRows = [Math.ceil(scrollTop / rowHeight), Math.floor((scrollTop + gridBodyHeight) / rowHeight)];


    //Note: JSLint this is a weird way of doing what's intended?
    if (oldRowHeaderElements.childElementCount == oldLength)
    {
        oldRowHeaderElements = oldRowHeaderElements;
    }
    else
    {
        if (oldRowHeaderElements['firstChild'].children.length == (oldLength + 1))
        {
            oldRowHeaderElements = oldRowHeaderElements['firstChild'];
        }
    }

    if (oldRowHeaderElements.childElementCount == oldLength && newRowHeaderElements)
    {
        rowHeaderSupport = true;
        for (i = 1; i < oldRowHeaderElements.childElementCount; i++)
        {
            oldRowHeaderElements.childNodes[i].id = oldRowHeaderElements.childNodes[i].id + "_old";
        }
    }

    if (rowHeaderSupport)
    {
        for (i = 0; i < newRowHeaderElementsClone.childNodes.length; i++) //vvc12
        {
            newRowHeaderElementsClone.childNodes[i].style.top = oldElementSet.children[i].style.top; //vvc12
        }
    }

    for (i = 0; i < oldSet.length; i++) //assign order for rows before sorting
    {
        animOrder[oldSet[i]] = i;
    }
    for (j = 0; j < newSet.length; j++) //compare old order with order after sorting 
    {

        if (animOrder.hasOwnProperty(newSet[j]))
        {
            //both row's positions (before and after sorting) are out of the visible area
            if ((animOrder[newSet[j]] < (limitRangeInRows[0] - 1) && j < (limitRangeInRows[0] - 1)) ||
                    (animOrder[newSet[j]] > (limitRangeInRows[1] + 1) && j > (limitRangeInRows[1] + 1)) ||
                    (animOrder[newSet[j]] < (limitRangeInRows[0] - 1) && j > (limitRangeInRows[1] + 1)) ||
                    (animOrder[newSet[j]] > (limitRangeInRows[1] + 1) && j < (limitRangeInRows[0] - 1)))
            {
                animOrder[newSet[j]] = "no_0";
            }

            if (this.isNumeric(animOrder[newSet[j]]))
            {
                //position before sorting is lower of the position after sorting, 3 possible cases:
                if (animOrder[newSet[j]] > j)
                {
                    //1. after-sort row is hidden (above top border), before-sort row is visible; 
                    if (j < limitRangeInRows[0] && animOrder[newSet[j]] > limitRangeInRows[0])
                    {
                        v = animOrder[newSet[j]] - (limitRangeInRows[0] + 1);
                        animOrder[newSet[j]] = "up_-" + v;
                    }
                    else
                    {
                        //3. after-sort row is visible, before-sort row is hidden (below bottom border);
                        if (this.isNumeric(animOrder[newSet[j]]) && animOrder[newSet[j]] > limitRangeInRows[1])
                        {
                            dv = limitRangeInRows[1] - animOrder[newSet[j]] - 1;
                            this.addUpDownMoveStyle(oldElementSet.childNodes[animOrder[newSet[j]] + 1], 0, 0, 'linear', dv * rowHeight); //move it on border
                            if (rowHeaderSupport)
                            {
                                me.addUpDownMoveStyle(oldRowHeaderElements.childNodes[animOrder[newSet[j]] + 1], 0, 0, 'linear', (dv + 1) * rowHeight);
                            }
                        }
                        //2. after-sort row is visible, before-sort row is visible;   
                        v = animOrder[newSet[j]] - j;
                        animOrder[newSet[j]] = "up_-" + v;
                    }
                }
                else
                {
                    //position before sort is higher of the position after sort, 3 possible cases:
                    //3. before-sort row is visible, after-sort row is hidden (below bottom border);    
                    if (animOrder[newSet[j]] < j)
                    {
                        //1. before-sort row is visible, after-sort row is hidden (below bottom border); 
                        if (j > limitRangeInRows[1] && animOrder[newSet[j]] < limitRangeInRows[1])
                        {
                            v = limitRangeInRows[1] + 1 - animOrder[newSet[j]];
                            animOrder[newSet[j]] = "down_" + v;
                        }
                        else
                        {
                            //2. before-sort row is hidden (above top border), after-sort row is visible;
                            if (this.isNumeric(animOrder[newSet[j]]) && animOrder[newSet[j]] < limitRangeInRows[0])
                            {
                                dv = limitRangeInRows[0] - animOrder[newSet[j]] - 1;
                                this.addUpDownMoveStyle(oldElementSet.childNodes[animOrder[newSet[j]] + 1], 0, 0, 'linear', dv * rowHeight); //move it on border 
                                if (rowHeaderSupport)
                                {
                                    me.addUpDownMoveStyle(oldRowHeaderElements.childNodes[animOrder[newSet[j]] + 1], 0, 0, 'linear', dv * rowHeight);
                                }
                                v = j - animOrder[newSet[j]];
                                animOrder[newSet[j]] = "down_" + v;
                            }
                            else
                            {
                                //3. after-sort row is visible, before-sort row is visible;
                                v = j - animOrder[newSet[j]];
                                animOrder[newSet[j]] = "down_" + v;
                            }
                        }
                    }
                    else
                    {
                        if (animOrder[newSet[j]] == j)
                        {
                            animOrder[newSet[j]] = "no_0";
                        }
                    }
                }
            }
        }
        else
        {
            restSet[newSet[j]] = j;
        }
    }

    //work with rest of rows presented in the old set and do not presented in the new one
    for (kk = 0; kk < oldSet.length; kk++)
    {
        if (animOrder.hasOwnProperty(oldSet[kk]))
        {
            if (this.isNumeric(animOrder[oldSet[kk]]))
            {
                if (animOrder[oldSet[kk]] < limitRangeInRows[0])
                {
                    animOrder[oldSet[kk]] = "no_0";
                }
                if (animOrder[oldSet[kk]] > limitRangeInRows[1])
                {
                    animOrder[oldSet[kk]] = "no_0";
                }
                if (animOrder[oldSet[kk]] >= limitRangeInRows[0] && animOrder[oldSet[kk]] <= limitRangeInRows[1])
                {
                    v = limitRangeInRows[1] - animOrder[oldSet[kk]] + 2;
                    animOrder[oldSet[kk]] = "down_" + v;
                }
            }
        }
    }

    //define the rows from new (after sorting) set that should be added to old set for future animation   
    for (key in restSet)
    {
        if (restSet.hasOwnProperty(key))
        {
            restSetLength++;
            idx = restSet[key];
            bottomLimit = limitRangeInPixels[1] + oldElementSet.childNodes[1].clientHeight;
            topLimit = limitRangeInPixels[0] - oldElementSet.childNodes[1].clientHeight;
            rowPos = idx * oldElementSet.childNodes[1].clientHeight;
            if (rowPos < bottomLimit)
            {
                if (rowPos > topLimit)
                {
                    child = newElementSet.childNodes[idx+1];
                    rowsForAppend.push(child);
                    if (rowHeaderSupport)
                    {
                        rowHeadersForAppend.push(newRowHeaderElements.childNodes[idx + 1]);
                    }
                }
            }
        }
    }

    //correct position of new rows added to old set on the border of visible area
    for (k = 0; k < rowsForAppend.length; k++)
    {
        for (kk = 0; kk < rowsForAppend[k].attributes.length; kk++)
        {
            dkey = null;
            if (rowsForAppend[k].attributes[kk].nodeName == keyAttr)
            {
                dkey = rowsForAppend[k].attributes[kk].nodeValue;
                if (restSet.hasOwnProperty(dkey))
                {
                    order = restSet[dkey];
                    this.addUpDownMoveStyle(rowsForAppend[k], 0, 0, 'linear', limitRangeInPixels[1] - order * rowHeight);
                    if (rowHeaderSupport)
                    {
                        rowHeadersForAppend[k].style.top = rowsForAppend[k].style.top;
                        me.addUpDownMoveStyle(rowHeadersForAppend[k], 0, 0, 'linear', limitRangeInPixels[1] - order * rowHeight);
                    }
                }
            }
        }
        oldElementSet.appendChild(rowsForAppend[k]);
        if (rowHeaderSupport)
        {
            oldRowHeaderElements.appendChild(rowHeadersForAppend[k]);
        }
    }

    //main animation loop
    for (l = 0; l < oldElementSet.childElementCount; l++)
    {
        delay = delay_offset * l + "ms";
        if (l < oldLength - 1) //animate rows from the old set 
        {
            pos = parseInt(animOrder[oldSet[l]].split('_')[1], 10) * rowHeight;
            if (pos < limitRangeInPixels[1] - l * rowHeight) //row is in the visible area
            {
                this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration / 2 + "ms", delay, timing, pos);
                if (rowHeaderSupport)
                {
                    me.addUpDownMoveStyle(oldRowHeaderElements.childNodes[l + 1], duration / 2 + "ms", delay, timing, pos);
                }
            }
            else //row is out of the visible area, move it on the border of visible area
            {
                pos = limitRangeInPixels[1] - (l - 1) * oldElementSet.childNodes[1].clientHeight;
                this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration / 2 + "ms", delay, timing, pos);
                if (rowHeaderSupport)
                {
                    me.addUpDownMoveStyle(oldRowHeaderElements.childNodes[l + 1], duration / 2 + "ms", delay, timing, pos);
                }
            }
        }
        else
        { //animate rows added to the old set from the new one to its original positions
            this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration / 2 + "ms", delay, timing, 0);
            if (rowHeaderSupport)
            {
                me.addUpDownMoveStyle(oldRowHeaderElements.childNodes[l + 1], duration / 2 + "ms", delay, timing, 0);
            }
        }
        if (l == oldElementSet.childElementCount - 2)
        {
            oldElementSet.childNodes[l].addEventListener('transitionend', function()
            {
                setTimeout(function()
                {
                    if (rowHeaderSupport)
                    {
                        var headerContent = me.m_rowHeader['firstChild'];
                        me.m_rowHeader['firstChild'] = null;
                        headerContent.innerHTML = "";
                        headerContent.appendChild(newRowHeaderElementsClone);
                        //looking into
                        me.m_startRowHeader = 0;
                    }
                    var databodyContent = me.m_databody['firstChild'];
                    databodyContent.innerHTML = "";
                    databodyContent.appendChild(newElementSetClone);

                    // restore active index
                    me._restoreActive();

                    //me.handleLongScroll(me.m_currentScrollLeft, me.m_currentScrollTop);
                    //Note: JSLint, don't make functions within a loop
                }, 100);
            }, false);            
            break;
        }
    }   
};

/**
 * Restore the active cell after sort.
 * @private
 */
DvtDataGrid.prototype._restoreActive = function()
{
    if (this.m_active)
    {
        // this is what we should do, scroll to where the active key is
        // this._indexes({'row':this.m_active.rowKey, 'column':this.m_active.columnKey}, this._restoreActiveCallback);
        // but for now, we will restore base on current index, since animation works better
        // with the position preserved
        this._restoreActiveCallback(this.m_active);
    }
};

/**
 * Callback method for restoreActive.
 * @param {Object} indexes the active cell index to restore.
 * @private
 */
DvtDataGrid.prototype._restoreActiveCallback = function(indexes)
{
    var rowIndex, columnIndex, cellIndex;

    rowIndex = indexes['row'] === -1 ? 0:indexes['row'];
    columnIndex = indexes['column'] === -1 ? 0:indexes['column'];
    cellIndex = this.createIndex(rowIndex, columnIndex);

    // make sure it's visible
    this.scrollToIndex(cellIndex);
    // select or focus it
    if (this._isSelectionEnabled())
    {
        // this will clear the selection if there's multiple selection before sort
        // this is the behavior we want since the ranges in the previous selection
        // will in most cases be invalid after sort.  The only one we can maintain and
        // make sense to do is the active cell
        this.selectAndFocus(cellIndex);
    }
    else
    {
        this.activeAndFocus(cellIndex);
    }
};

/**
 * Get the default sort icon size
 * @return {number} the default sort icon size
 */
DvtDataGrid.prototype.getSortIconSize = function()
{
    var div, divWidth;
    if (this.m_sortIconSize == null)
    {
       div = document.createElement('div');
       div['className'] = this.getMappedStyle("sortascending") + " " +this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon");
       div['style']['visibilty'] = 'hidden';
       div['style']['top'] = '0px';
       div['style']['visibilty'] = '0px';
       this.m_root.appendChild(div);
       divWidth = div['offsetWidth'];
       this.m_root.removeChild(div);
       this.m_sortIconSize = divWidth;
    }
    return this.m_sortIconSize;
};

/**
 * Gets the sort icon froma  header Element
 * @param {Element} header the header to get sort icon for
 * @private
 */
DvtDataGrid.prototype._getSortIcon = function(header)
{
    //presently guaranteed to be the first child of the last child of the parent
    return header['lastChild']['firstChild'];
};

/**
 * Gets the sort container froma  header Element
 * @param {Element} header the header to get sort container for
 * @private
 */
DvtDataGrid.prototype._getSortContainer = function(header)
{
    //presently guaranteed to be thethe last child of the parent
    return header['lastChild'];
};
return DvtDataGrid;
});