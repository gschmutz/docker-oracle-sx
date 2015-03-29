"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * Legend component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtBaseComponent}
 * @export
 */
var DvtLegend = function() {};

DvtObj.createSubclass(DvtLegend, DvtBaseComponent, 'DvtLegend');


/**
 * Returns a new instance of DvtLegend.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtLegend}
 * @export
 */
DvtLegend.newInstance = function(context, callback, callbackObj) {
  var legend = new DvtLegend();
  legend.Init(context, callback, callbackObj);
  return legend;
};


/**
 * Returns a copy of the default options for the specified skin.
 * @param {string} skin The skin whose defaults are being returned.
 * @return {object} The object containing defaults for this component.
 * @export
 */
DvtLegend.getDefaults = function(skin) 
{
  return (new DvtLegendDefaults()).getDefaults(skin);
};


/**
 * @override
 * @protected
 */
DvtLegend.prototype.Init = function(context, callback, callbackObj) {
  DvtLegend.superclass.Init.call(this, context, callback, callbackObj);
  this.setId('legend' + 1000 + Math.floor(Math.random() * 1000000000));

  // Create the defaults object
  this.Defaults = new DvtLegendDefaults();

  // Create the event handler and add event listeners
  this._eventManager = new DvtLegendEventManager(this);
  this._eventManager.addListeners(this);

  /**
   * The array of logical objects for this legend.
   * @private
   */
  this._peers = [];
  /**
   * The object that stores the bounds for this legend
   * @private
   */
  this._bounds = null;
  /**
   * The object that stores the title objects for this legend
   */
  this._titles = [];

  this._bundle = new DvtUtilBundle();
};

/**
 * Retuns the translation bundle
 * @return {Object}
 */
DvtLegend.prototype.__getBundle = function() {
  return this._bundle;
};

/**
 * @override
 */
DvtLegend.prototype.SetOptions = function(options) {
  if (options) // Combine the user options with the defaults and store
    this.Options = this.Defaults.calcOptions(options);
  else if (!this.Options) // Create a default options object if none has been specified
    this.Options = this.GetDefaults();
};


/**
 * Returns the preferred dimensions for this component given the maximum available space.
 * @param {object} options The object containing specifications and data for this component.
 * @param {Number} maxWidth The maximum width available.
 * @param {Number} maxHeight The maximum height available.
 * @return {DvtDimension} The preferred dimensions for the object.
 * @export
 */
DvtLegend.prototype.getPreferredSize = function(options, maxWidth, maxHeight) {
  // Update the options object.
  this.SetOptions(options);

  // Set the layout flag to indicate this is a layout pass only
  this.__getOptions()['isLayout'] = true;

  // Ask the legend to render its contents in the max space and find the space used.
  var availSpace = new DvtRectangle(0, 0, maxWidth, maxHeight);
  var dim = DvtLegendRenderer.render(this, availSpace);

  // Clear the rendered contents and reset state
  this.__getOptions()['isLayout'] = false;

  // Return the space used
  return dim;
};


/**
 * @override
 * @export
 */
DvtLegend.prototype.render = function(options, width, height) 
{
  // Update the options object.
  this.SetOptions(options);

  // Set the render flag to indicate we are rendering. Not being read correctly in flash - Bug 17310086
  this.__getOptions()['isLayout'] = false;

  // Clear any contents rendered previously
  this.removeChildren();
  this._peers = [];
  this._bounds = null;
  this._titles = [];

  // Set up keyboard handler on non-touch devices if the legend is interactive
  if (!DvtAgent.isTouchDevice() && this.__getOptions()['hideAndShowBehavior'] != 'none')
    this._eventManager.setKeyboardHandler(new DvtLegendKeyboardHandler(this._eventManager, this));

  // Render the legend
  var availSpace = new DvtRectangle(0, 0, width, height);
  return DvtLegendRenderer.render(this, availSpace);
};


/**
 * Highlights the specified categories.
 * @param {array} categories The array of categories whose data items will be highlighted. If null or empty, all
 *                           highlighting will be removed.
 * @export
 */
DvtLegend.prototype.highlight = function(categories) {
  DvtCategoryRolloverHandler.highlight(categories, this.__getObjects());
};


/**
 * Processes the specified event.
 * @param {object} event
 * @param {object} source The component that is the source of the event, if available.
 */
DvtLegend.prototype.processEvent = function(event, source) {
  var type = event.getType();
  if (type == DvtCategoryRolloverEvent.TYPE_OVER || type == DvtCategoryRolloverEvent.TYPE_OUT) {
    if (this.__getOptions()['hoverBehavior'] == 'dim')
      DvtCategoryRolloverHandler.processEvent(event, this.__getObjects());
  }

  // Dispatch the event to the callback if it originated from within this component or if it is a popup event.
  if (this == source || type == DvtShowPopupEvent.TYPE || type == DvtHidePopupEvent.TYPE) {
    this.__dispatchEvent(event);
  }
};


/**
 * Returns the evaluated options object, which contains the user specifications
 * merged with the defaults.
 * @return {object} The options object.
 */
DvtLegend.prototype.__getOptions = function() {
  return this.Options;
};


/**
 * Returns the DvtEventManager for this component.
 * @return {DvtEventManager}
 */
DvtLegend.prototype.__getEventManager = function() {
  return this._eventManager;
};


/**
 * Registers the object peer with the legend.  The peer must be registered to participate
 * in interactivity.
 * @param {DvtLegendObjPeer} peer
 */
DvtLegend.prototype.__registerObject = function(peer) {
  this._peers.push(peer);
};


/**
 * Returns the peers for all objects within the legend.
 * @return {array}
 */
DvtLegend.prototype.__getObjects = function() {
  return this._peers;
};

/**
 * Releases all component resources to prevent memory leaks.
 * @override
 * @export
 */
DvtLegend.prototype.destroy = function() {
  if (this._eventManager) {
    this._eventManager.removeListeners(this);
    this._eventManager.destroy();
    this._eventManager = null;
  }

  // Call super last during destroy
  DvtLegend.superclass.destroy.call(this);
};

/**
 * Stores the bounds for this legend
 * @param {Object} bounds
 */
DvtLegend.prototype.__setBounds = function(bounds) {
  this._bounds = bounds;
};


/**
 * Returns the bounds for this legend
 * @return {Object} the object containing the bounds for this legend
 */
DvtLegend.prototype.__getBounds = function() {
  return this._bounds;
};

/**
 * Adds a title object to be stored by the legend
 * @param {object} title An object containing the text and the alignment
 */
DvtLegend.prototype.__registerTitle = function(title) {
  this._titles.push(title);
};


/**
 * Returns the title objects for this legend
 * @return {array} An array containing the title objects for this legend
 */
DvtLegend.prototype.__getTitles = function() {
  return this._titles;
};

/**
 * Returns the automation object for this chart
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtLegend.prototype.getAutomation = function() {
  return new DvtLegendAutomation(this);
};

/**
 * Returns the keyboard-focused object of the legend
 * @return {DvtKeyboardNavigable} The focused object.
 */
DvtLegend.prototype.getKeyboardFocus = function() {
  return this._eventManager.getFocus();
};

/**
 * Sets the navigable as the keyboard-focused object of the legend. It matches the id in case the legend
 * has been rerendered.
 * @param {DvtKeyboardNavigable} navigable The focused object.
 * @param {boolean} isShowingFocusEffect Whether the keyboard focus effect should be used.
 */
DvtLegend.prototype.setKeyboardFocus = function(navigable, isShowingFocusEffect) {
  for (var i = 0; i < this._peers.length; i++) {
    if (this._peers[i].getId() == navigable.getId()) {
      this._eventManager.setFocusObj(this._peers[i]);
      if (isShowingFocusEffect)
        this._peers[i].showKeyboardFocusEffect();
      break;
    }
  }
};
/**
 * Legend Constants
 * @class
 * @export
 */
var DvtLegendConstants = {};

DvtObj.createSubclass(DvtLegendConstants, DvtObj, 'DvtLegendConstants');


/**
 * @const
 * @export
 */
DvtLegendConstants.BACKGROUND = 'background';


/**
 * @const
 * @export
 */
DvtLegendConstants.LEGEND_ITEM = 'legendItem';


/**
 * @const
 * @export
 */
DvtLegendConstants.TITLE = 'title';
/**
 *  Provides automation services for a DVT component.
 *  @class DvtLegendAutomation
 *  @param {DvtLegend} dvtComponent
 *  @implements {DvtAutomation}
 *  @constructor
 *  @export
 */
var DvtLegendAutomation = function(dvtComponent) {
  this._legend = dvtComponent;
  this._options = this._legend.__getOptions();
};

DvtObj.createSubclass(DvtLegendAutomation, DvtAutomation, 'DvtLegendAutomation');

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>section[sectionIndex0]:item[itemIndex]</li>
 * </ul>
 * @override
 */
DvtLegendAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var logicalObj = this._legend.__getEventManager().GetLogicalObject(displayable);
  if (logicalObj && (logicalObj instanceof DvtLegendObjPeer)) {
    var item = logicalObj.getData();
    var indexList = this._getIndicesFromItem(item, this._options);
    if (indexList)
      return 'section' + indexList;
  }
  return null;
};


/**
 * Returns the index values of the given legend item
 * @param {Object} item the legend item to find the indices of within legendOptions
 * @param {Object} legendOptions the legend options object
 * @return {String} [sectionIndex0] or [sectionIndex0]:item[itemIndex]
 * @private
 */
DvtLegendAutomation.prototype._getIndicesFromItem = function(item, legendOptions) {
  // If there are sections in this options object, recurse through the section object
  if (legendOptions['sections'] && legendOptions['sections'].length > 0) {
    for (var s = 0; s < legendOptions['sections'].length; s++) {
      if (legendOptions['sections'][s] == item)
        return '[' + s + ']';
      else {
        var itemIndex = this._getIndicesFromItem(item, legendOptions['sections'][s]);
        if (itemIndex)
          return '[' + s + ']' + itemIndex;
      }
    }
    return null;
  }
  // If we found the items list for a section, search the items of this section
  else if (legendOptions['items'] && legendOptions['items'].length > 0) {
    for (var i = 0; i < legendOptions['items'].length; i++) {
      if (legendOptions['items'][i] == item)
        return ':item[' + i + ']';
    }
    return null;
  }
};


/**
 * Returns the index values of the legend item that corresponds to the given series
 * @param {Object} series the chart series object
 * @param {Object} legendOptions the legend options object
 * @return {String} [sectionIndex0] or [sectionIndex0]:item[itemIndex]
 */
DvtLegendAutomation.prototype.getIndicesFromSeries = function(series, legendOptions) {
  // If there are sections in this options object, recurse through the section object
  if (legendOptions['sections'] && legendOptions['sections'].length > 0) {
    for (var s = 0; s < legendOptions['sections'].length; s++) {
      var itemIndex = this.getIndicesFromSeries(series, legendOptions['sections'][s]);
      if (itemIndex)
        return '[' + s + ']' + itemIndex;
    }
    return null;
  }
  // If we found the items list for a section, search the items of this section
  else if (legendOptions['items'] && legendOptions['items'].length > 0) {
    for (var i = 0; i < legendOptions['items'].length; i++) {
      if (legendOptions['items'][i]['text'] == series['name'])
        return ':item[' + i + ']';
    }
    return null;
  }
};


/**
 * Returns the legend item for the given subId
 * @param {Object} options the legend options object
 * @param {String} subId the subId of the desired legend item
 * @return {Object} the legend item corresponding to the given subId
 */
DvtLegendAutomation.prototype.getLegendItem = function(options, subId) {
  var openParen = subId.indexOf('[');
  var closeParen = subId.indexOf(']');
  if (openParen >= 0 && closeParen >= 0) {
    var index = subId.substring(openParen + 1, closeParen);
    var colonIndex = subId.indexOf(':');
    subId = subId.substring(closeParen + 1);
    var nextOpenParen = subId.indexOf('[');
    var nextCloseParen = subId.indexOf(']');
    // If there is another index layer recurse into the sections object at that index
    if (nextOpenParen >= 0 && nextCloseParen >= 0) {
      return this.getLegendItem(options['sections'][index], subId);
    }
    else { // If we are at the last index return the item/section object at that index
      if (colonIndex == 0)
        return options['items'][index];
      else
        return options['sections'][index];
    }
  }
};


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>section[sectionIndex0]:item[itemIndex]</li>
 * </ul>
 * @override
 * @export
 */
DvtLegendAutomation.prototype.getDomElementForSubId = function(subId) {
  var legendItem = this.getLegendItem(this._options, subId);
  var legendPeers = this._legend.__getObjects();

  // Find the legend object peer for the item indexed by the subId and return the dom element of its displayable
  for (var i = 0; i < legendPeers.length; i++) {
    var item = legendPeers[i].getData();
    if (legendItem == item)
      return legendPeers[i].getDisplayables()[0].getElem();
  }
  return null;
};


/**
 * Returns the legend title. Used for verification.
 * @return {String} The legend title
 * @export
 */
DvtLegendAutomation.prototype.getTitle = function() {
  return this._options['title'];
};


/**
 * Returns an object containing data for a legend item. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>text</li>
 * </ul>
 * @param {String} subIdPath The array of indices in the subId for the desired legend item
 * @return {Object} An object containing data for the legend item
 * @export
 */
DvtLegendAutomation.prototype.getItem = function(subIdPath) {
  var item;
  var index = subIdPath.shift();
  var options = this._options;
  while (index != undefined) {
    if (subIdPath.length > 0)
      options = options['sections'][index];
    else
      item = options['items'][index];
    index = subIdPath.shift();
  }
  var itemData = {
    'text': item['text'] ? item['text'] : null
  };

  return itemData;
};

/**
 * Returns an object containing data for a legend section. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>title</li>
 * <li>item</li>
 * <li>section</li>
 * </ul>
 * @param {String} subIdPath The array of indices in the subId for the desired legend section
 * @return {Object} An object containing data for the legend section
 * @export
 */
DvtLegendAutomation.prototype.getSection = function(subIdPath) {
  var section;
  var index = subIdPath.shift();
  var options = this._options;
  while (index != undefined) {
    if (subIdPath.length > 0)
      options = options['sections'][index];
    else
      section = options['sections'][index];
    index = subIdPath.shift();
  }
  var sectionData = {
    'title': section['title'] ? section['title'] : null,
    'items' : section['items'] ? this._generateItemObjects(section['items']) : null,
    'sections': section['sections'] ? this._generateSectionObjects(section['sections']) : null
  };

  return sectionData;
};

/**
 * Returns an array containing data for an array of legend items
 * @param {Array} items The array of legend items
 * @return {Array} An array containing objects with data for each legend item
 * @private
 */
DvtLegendAutomation.prototype._generateItemObjects = function(items) {
  var itemDataArray = [];

  for (var i = 0; i < items.length; i++) {
    itemDataArray.push({'text': items[i]['text']});
  }

  return itemDataArray;
};

/**
 * Returns an array containing data for an array of legend sections
 * @param {Array} sections The array of legend sections
 * @return {Array} An array containing objects with data for each legend section
 * @private
 */
DvtLegendAutomation.prototype._generateSectionObjects = function(sections) {
  var sectionDataArray = [];

  for (var i = 0; i < sections.length; i++) {
    sectionDataArray.push({
      'title': sections[i]['title'] ? sections[i]['title'] : null,
      'items' : sections[i]['items'] ? this._generateItemObjects(sections[i]['items']) : null,
      'sections': sections[i]['sections'] ? this._generateSectionObjects(sections[i]['sections']) : null
    });
  }

  return sectionDataArray;
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtLegendDefaults = function() {
  this.Init({'skyros': DvtLegendDefaults.VERSION_1, 'alta': DvtLegendDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtLegendDefaults, DvtBaseComponentDefaults, 'DvtLegendDefaults');


/**
 * Contains overrides for the 'alta' skin.
 */
DvtLegendDefaults.SKIN_ALTA = {
  'skin': DvtCSSStyle.SKIN_ALTA,
  'textStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),
  'titleStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"),
  'colors': DvtCSSStyle.COLORS_ALTA
};


/**
 * Defaults for version 1.
 */
DvtLegendDefaults.VERSION_1 = {
  'skin': DvtCSSStyle.SKIN_SKYROS,
  'orientation': 'vertical',
  'position': null,
  'backgroundColor': null,
  'borderColor': null,
  'textStyle': new DvtCSSStyle('font-size: 11px; color: #333333;'),
  'titleStyle': new DvtCSSStyle('font-size: 12px; color: #003d5b;'),
  'titleHalign': 'start',
  'hideAndShowBehavior': 'none',
  'hoverBehavior': 'none',
  'scrolling': 'asNeeded',
  'halign': 'center',
  'valign': 'middle',

  // default color ramp, marker shape, and line width, for internal use
  'colors': DvtCSSStyle.COLORS_SKYROS,
  'markerShape': 'square',
  'lineWidth': 3,

  //*********** Internal Attributes *************************************************//
  'layout': {
    // Gap ratio is multiplied against all gap sizes
    'gapWidthRatio': 1.0, 'gapHeightRatio': 1.0,
    'outerGapWidth': 3, 'outerGapHeight': 3, // Used by Treemap for legend creation
    'titleGap': 3, 'symbolGapWidth': 5, 'symbolGapHeight': 4,
    'rowGap': 0, 'columnGap': 8,
    'sectionGapHeight': 6, 'sectionGapWidth': 15
  },

  'isLayout': false // true if rendering for layout purposes
};


/**
 * Scales down gap widths based on the width of the component.
 * @param {object} options The object containing options specifications for this component.
 * @param {Number} defaultWidth The default gap width.
 * @return {Number}
 */
DvtLegendDefaults.getGapWidth = function(options, defaultWidth) {
  return Math.ceil(defaultWidth * options['layout']['gapWidthRatio']);
};

/**
 * Scales down gap heights based on the height of the component.
 * @param {object} options The object containing options specifications for this component.
 * @param {Number} defaultHeight The default gap height.
 * @return {Number}
 */
DvtLegendDefaults.getGapHeight = function(options, defaultHeight) {
  return Math.ceil(defaultHeight * options['layout']['gapHeightRatio']);
};
/**
 * Event Manager for DvtLegend.
 * @param {DvtLegend} legend
 * @class
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtLegendEventManager = function(legend) {
  this.Init(legend.getCtx(), legend.processEvent, legend);
  this._legend = legend;
};

DvtObj.createSubclass(DvtLegendEventManager, DvtEventManager, 'DvtLegendEventManager');


/**
 * Returns the parameters for the DvtComponentUIEvent for an object with the specified arguments.
 * @param {string} type The type of object that was the target of the event.
 * @param {object} [id] The id of the object, if one exists.
 * @return {object}
 */
DvtLegendEventManager.getUIEventParams = function(type, id) {
  return {'type': type, 'id': id};
};


/**
 * @override
 */
DvtLegendEventManager.prototype.FireUIEvent = function(type, logicalObj) {
  var params = null;
  if (logicalObj instanceof DvtSimpleObjPeer && logicalObj.getParams() != null)
    params = logicalObj.getParams();
  else if (logicalObj instanceof DvtLegendObjPeer)
    params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.LEGEND_ITEM, logicalObj.getId());

  this.FireEvent(new DvtComponentUIEvent(type, params), this._legend);
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnClick = function(event) {
  DvtLegendEventManager.superclass.OnClick.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  var hideShow = this.processHideShowEvent(obj);
  var action = this._processActionEvent(obj);

  // If a hide/show or action occurs, the event should not bubble.
  if (hideShow || action)
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnMouseOver = function(event) {
  DvtLegendEventManager.superclass.OnMouseOver.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();

  // Accessibility Support
  this.UpdateActiveElement(obj);
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnMouseOut = function(event) {
  DvtLegendEventManager.superclass.OnMouseOut.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchClickInternal = function(evt) {
  var obj = this.GetLogicalObject(evt.target);
  if (!obj)
    return;

  // bug 13810791: if hideAndShow/action is enabled, it takes precedence over series highlighting
  var touchEvent = evt.touchEvent;
  var hideShow = this.processHideShowEvent(obj);
  var action = this._processActionEvent(obj);
  if ((hideShow || action) && touchEvent)
    touchEvent.preventDefault();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverStartInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();
};

/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverEndInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};

/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverOverInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverOutInternal = function(event) {
  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};


/**
 * Processes a hide and show action on the specified legend item.  Returns true if a hide or
 * show has been performed.
 * @param {DvtLegendObjPeer} obj The legend item that was clicked.
 * @return {boolean} True if an event was fired.
 */
DvtLegendEventManager.prototype.processHideShowEvent = function(obj) {
  // Don't continue if not enabled
  if (this._legend.__getOptions()['hideAndShowBehavior'] == 'none')
    return false;

  var categories = obj.getCategories ? obj.getCategories() : null;
  if (!categories || categories.length <= 0)
    return false;


  var dataItem = obj.getData();
  var visibility = dataItem['categoryVisibility'];

  // Update the legend markers
  var displayables = obj.getDisplayables();
  for (var i = 0; i < displayables.length; i++) {
    var displayable = displayables[i];
    if (displayable instanceof DvtMarker) // setHollow is a toggle
      displayable.setHollow(obj.getColor());
    else if (displayable instanceof DvtRect)
      obj.UpdateAriaLabel(displayable);
  }

  // Update the state and create the event
  var id = categories[0];
  if (visibility == 'hidden') {
    // Currently hidden, show
    dataItem['categoryVisibility'] = 'visible';
    this.FireEvent(new DvtCategoryHideShowEvent(DvtCategoryHideShowEvent.TYPE_SHOW, id), this._legend);
  }
  else {
    // Currently visible, hide
    dataItem['categoryVisibility'] = 'hidden';
    this.FireEvent(new DvtCategoryHideShowEvent(DvtCategoryHideShowEvent.TYPE_HIDE, id), this._legend);
  }

  // Return true since an event was fired
  return true;
};


/**
 * Processes an action on the specified legend item.  Returns true if an action event is fired.
 * @param {DvtLegendObjPeer} obj The legend item that was clicked.
 * @return {boolean} True if an event was fired.
 * @private
 */
DvtLegendEventManager.prototype._processActionEvent = function(obj) {
  if (obj && obj.getAction && obj.getAction()) {
    this.FireEvent(new DvtActionEvent(DvtActionEvent.SUBTYPE_ACTION, obj.getAction(), obj.getId()), this._legend);
    return true;
  }
  return false;
};


/**
 * Processes a rollover action on the specified legend item.  Returns true if a rollover
 * event has been fired.
 * @param {DvtLegendObjPeer} obj The legend item that was the target of the event.
 * @param {boolean} bOver True if this is a rollover, false if this is a rollout.
 * @return {boolean} True if an event was fired.
 * @private
 */
DvtLegendEventManager.prototype._processRolloverEvent = function(obj, bOver) {
  // Don't continue if not enabled
  if (this._legend.__getOptions()['hoverBehavior'] == 'none')
    return false;

  var categories = (obj && obj.getCategories) ? obj.getCategories() : null;
  if (!categories || categories.length <= 0)
    return false;

  // Fire the rollover event
  var eventType = bOver ? DvtCategoryRolloverEvent.TYPE_OVER : DvtCategoryRolloverEvent.TYPE_OUT;
  this.FireEvent(new DvtCategoryRolloverEvent(eventType, categories[0]), this._legend);
  return true;
};
/*---------------------------------------------------------------------------------*/
/*  DvtLegendKeyboardHandler     Keyboard handler for Legend                       */
/*---------------------------------------------------------------------------------*/
/**
  *  @param {DvtEventManager} manager The owning DvtEventManager
  *  @param {DvtLegend} legend
  *  @class DvtLegendKeyboardHandler
  *  @extends {DvtKeyboardHandler}
  *  @constructor
  */
var DvtLegendKeyboardHandler = function(manager, legend)
{
  this.Init(manager, legend);
};

DvtObj.createSubclass(DvtLegendKeyboardHandler, DvtKeyboardHandler, 'DvtLegendKeyboardHandler');


/**
 * @override
 */
DvtLegendKeyboardHandler.prototype.Init = function(manager, legend) {
  DvtLegendKeyboardHandler.superclass.Init.call(this, manager);
  this._legend = legend;
};


/**
 * @override
 */
DvtLegendKeyboardHandler.prototype.processKeyDown = function(event) {
  var keyCode = event.keyCode;
  var currentNavigable = this._eventManager.getFocus();

  if (keyCode == DvtKeyboardEvent.TAB) {
    if (currentNavigable) {
      event.preventDefault();
      return currentNavigable;
    }

    // navigate to the default
    var navigables = this._legend.__getObjects();
    if (navigables.length > 0) {
      event.preventDefault();
      return this.getDefaultNavigable(navigables);
    }
  }
  else if (keyCode == DvtKeyboardEvent.ENTER || keyCode == DvtKeyboardEvent.SPACE) {
    if (currentNavigable)
      this._legend.__getEventManager().processHideShowEvent(currentNavigable);
  }
  else
    return DvtLegendKeyboardHandler.superclass.processKeyDown.call(this, event);
};
/**
 * Logical object for legend data object displayables.
 * @param {DvtLegend} legend The owning legend instance.
 * @param {array} displayables The array of associated DvtDisplayables.
 * @param {string} id The id of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 * @class
 * @constructor
 * @implements {DvtLogicalObject}
 * @implements {DvtCategoricalObject}
 */
var DvtLegendObjPeer = function(legend, displayables, id, tooltip) {
  this.Init(legend, displayables, id, tooltip);
};

DvtObj.createSubclass(DvtLegendObjPeer, DvtObj, 'DvtLegendObjPeer');


/**
 * @param {DvtLegend} legend The owning legend instance.
 * @param {array} displayables The array of associated DvtDisplayables.
 * @param {object} item The definition of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 */
DvtLegendObjPeer.prototype.Init = function(legend, displayables, item, tooltip) {
  this._legend = legend;
  this._displayables = displayables;
  this._item = item;
  this._id = item['id'] ? item['id'] : item['text'];
  this._action = item['action'];
  this._spb = item['_spb']; // popup support
  this._tooltip = tooltip;
  this._isShowingKeyboardFocusEffect = false;

  // Apply the cursor for the action if specified
  if (this._action) {
    for (var i = 0; i < this._displayables.length; i++) {
      this._displayables[i].setCursor(DvtSelectionEffectUtils.getSelectingCursor());
    }
  }
};


/**
 * Creates a data item to identify the specified displayable and registers it with the legend.
 * @param {array} displayables The displayables to associate.
 * @param {DvtLegend} legend The owning legend instance.
 * @param {object} item The definition of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 * @return {DvtLegendObjPeer}
 */
DvtLegendObjPeer.associate = function(displayables, legend, item, tooltip) {
  // Item must have displayables and an id to be interactive.
  if (!displayables || !item)
    return null;

  // Create the logical object.
  var identObj = new DvtLegendObjPeer(legend, displayables, item, tooltip);

  // Register with the legend
  legend.__registerObject(identObj);

  // Finally associate using the event manager
  for (var i = 0; i < displayables.length; i++)
    legend.__getEventManager().associate(displayables[i], identObj);

  return identObj;
};


/**
 * Returns the data object defining this legend item.
 * @return {object} The data object defining this legend item.
 */
DvtLegendObjPeer.prototype.getData = function() {
  return this._item;
};


/**
 * Returns the primary data color for this legend item.
 * @return {string} The color string.
 */
DvtLegendObjPeer.prototype.getColor = function() {
  return this._item['color'];
};


/**
 * Returns the id for this legend item.
 * @return {object} The id for this legend item.
 */
DvtLegendObjPeer.prototype.getId = function() {
  return this._id;
};

//---------------------------------------------------------------------//
// Rollover and Hide/Show Support: DvtLogicalObject impl               //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getDisplayables = function() {
  return this._displayables;
};

//---------------------------------------------------------------------//
// Rollover and Hide/Show Support: DvtCategoricalObject impl           //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getCategories = function(category) {
  return [this._id];
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.getTooltip = function(target) {
  return this._tooltip;
};


/**
 * Return the action string for the legend item, if any exists.
 * @return {string} the action outcome for the legend item.
 */
DvtLegendObjPeer.prototype.getAction = function() {
  return this._action;
};

//---------------------------------------------------------------------//
// Popup Support: DvtPopupSource impl                                  //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getShowPopupBehaviors = function() {
  return this._spb;
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.getAriaLabel = function() {
  if (this._legend.__getOptions()['hideAndShowBehavior'] != 'none') {
    var bundle = this._legend.__getBundle();
    var states = [bundle.getTranslatedString(this.getData()['categoryVisibility'] == 'hidden' ?
              'STATE_HIDDEN' : 'STATE_VISIBLE')];
    return DvtDisplayable.generateAriaLabel(this.getData()['text'], states, bundle);
  }
  return null;
};

/**
 * Updates the aria label for a map data object
 * @param {DvtDisplayable} displayable The displayable to update
 * @protected
 */
DvtLegendObjPeer.prototype.UpdateAriaLabel = function(displayable) {
  if (!DvtAgent.deferAriaCreation())
    displayable.setAriaProperty('label', this.getAriaLabel());
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                         //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtLegendObjPeer.prototype.getNextNavigable = function(event) {
  if (event.type == DvtMouseEvent.CLICK)
    return this;

  var navigables = this._legend.__getObjects();
  return DvtKeyboardHandler.getNextNavigable(this, event, navigables);
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace) {
  if (this._displayables[0])
    return this._displayables[0].getDimensions(targetCoordinateSpace);
  else
    return new DvtRectangle(0, 0, 0, 0);
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.getTargetElem = function() {
  if (this._displayables[0])
    return this._displayables[0].getElem();
  return null;
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.showKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = true;
  if (this._displayables[0])
    this._displayables[0].setSolidStroke(DvtAgent.getFocusColor());
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.hideKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = false;
  if (this._displayables[0])
    this._displayables[0].setStroke(null);
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};
/**
 * Renderer for DvtLegend.
 * @class
 */
var DvtLegendRenderer = new Object();

DvtObj.createSubclass(DvtLegendRenderer, DvtObj, 'DvtLegendRenderer');

/** @private */
DvtLegendRenderer._MAX_LINE_WIDTH = 5;
/** @private */
DvtLegendRenderer._MAX_LINE_WIDTH_WITH_MARKER = 2;
/** @private */
DvtLegendRenderer._LINE_MARKER_SIZE_FACTOR = 0.6;
/** @private */
DvtLegendRenderer._DEFAULT_SYMBOL_SIZE = 10;


/**
 * Renders the legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @return {DvtDimension} The dimension of the legend.
 */
DvtLegendRenderer.render = function(legend, availSpace) {
  var options = legend.__getOptions();
  var context = legend.getCtx();
  var isScrollable = options['scrolling'] != 'off';

  if (!options['isLayout'])
    DvtLegendRenderer._renderBackground(legend, availSpace);

  var gapWidth = DvtLegendDefaults.getGapWidth(options, options['layout']['outerGapWidth']);
  var gapHeight = DvtLegendDefaults.getGapHeight(options, options['layout']['outerGapHeight']);
  availSpace.x += gapWidth;
  availSpace.y += gapHeight;
  availSpace.w -= 2 * gapWidth;
  availSpace.h -= 2 * gapHeight;
  legend.__setBounds(availSpace);

  // return if there's no space
  if (availSpace.w <= 0 || availSpace.h <= 0)
    return new DvtDimension(0, 0);

  var container = isScrollable ? new DvtSimpleScrollableContainer(context, availSpace) : new DvtContainer(context);
  legend.addChild(container);

  var legendSpace = availSpace.clone();
  var title = DvtLegendRenderer._renderTitle(legend, container, options['title'], legendSpace, null);
  if (title) {
    var titleDim = title.measureDimensions();
    var titleGap = DvtLegendDefaults.getGapHeight(options, options['layout']['titleGap']);
    legendSpace.y += titleDim.h + titleGap;
    legendSpace.h -= Math.floor(titleDim.h + titleGap); // Bug 17368977: IE9 attributes slightly too much height for the legend title
  }

  var sectionsDim = DvtLegendRenderer._renderSections(legend, container, legendSpace);
  var totalDim = title ? titleDim.getUnion(sectionsDim) : sectionsDim;
  if (totalDim.h > availSpace.h) {
    if (isScrollable)
      container.setContentHeight(totalDim.h);
    totalDim.h = availSpace.h;
  }

  if (options['isLayout'])
    return new DvtDimension(totalDim.w + 2 * gapWidth, totalDim.h + 2 * gapHeight);

  // Align the legend contents
  var halign = options['hAlign'] != null ? options['hAlign'] : options['halign'];
  if (halign == 'center')
    container.setTranslateX(availSpace.x - totalDim.x + (availSpace.w - totalDim.w) / 2);
  else if (halign == 'end') {
    if (DvtAgent.isRightToLeft(context))
      container.setTranslateX(availSpace.x - totalDim.x);
    else
      container.setTranslateX(availSpace.x - totalDim.x + availSpace.w - totalDim.w);
  }

  var valign = options['vAlign'] != null ? options['vAlign'] : options['valign'];
  if (valign == 'middle')
    container.setTranslateY(availSpace.y - totalDim.y + (availSpace.h - totalDim.h) / 2);
  else if (valign == 'bottom')
    container.setTranslateY(availSpace.y - totalDim.y + availSpace.h - totalDim.h);

  // Align the titles now after we know the total width
  var titles = legend.__getTitles();
  for (var i = 0; i < titles.length; i++) {
    DvtLayoutUtils.align(totalDim, titles[i].halign, titles[i].text, titles[i].text.measureDimensions().w);
  }

  return new DvtDimension(totalDim.w + 2 * gapWidth, totalDim.h + 2 * gapHeight);
};


/**
 * Renders the legend background/border colors.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtLegendRenderer._renderBackground = function(legend, availSpace) {
  var options = legend.__getOptions();
  var backgroundColor = options['backgroundColor'];
  var borderColor = options['borderColor'];

  if (backgroundColor || borderColor) {
    var rect = new DvtRect(legend.getCtx(), availSpace.x, availSpace.y, availSpace.w, availSpace.h);

    if (backgroundColor)
      rect.setSolidFill(backgroundColor);
    else
      rect.setInvisibleFill(); // otherwise the borderColor will fill the rect

    if (borderColor) {
      rect.setSolidStroke(borderColor);
      rect.setPixelHinting(true);
    }

    // Associate with logical object to support DvtComponentUIEvent
    var params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.BACKGROUND);
    legend.__getEventManager().associate(rect, new DvtSimpleObjPeer(null, null, null, params));

    legend.addChild(rect);
  }
};


/**
 * Renders the legend title and updates the available space.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContainer} container The title container.
 * @param {string} titleStr
 * @param {DvtRectangle} availSpace The available space.
 * @param {object} section The section attributes, if this is a section
 * @param {boolean} isInline Whether the title is rendered inline with the items (for horizontal legend section).
 * @return {DvtRectangle} The dimension of the title.
 * @private
 */
DvtLegendRenderer._renderTitle = function(legend, container, titleStr, availSpace, section, isInline) {
  var options = legend.__getOptions();
  var isRTL = DvtAgent.isRightToLeft(container.getCtx());

  if (!titleStr)
    return null;

  // Create the title object and add to legend
  var title = new DvtOutputText(container.getCtx(), titleStr, availSpace.x, availSpace.y);
  var titleStyle = (section && section['titleStyle']) ? new DvtCSSStyle(section['titleStyle']) : options['titleStyle'];
  title.setCSSStyle(titleStyle);

  if (DvtTextUtils.fitText(title, availSpace.w, Infinity, container)) {
    // Associate with logical object to support DvtComponentUIEvent and tooltips
    var params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.TITLE);
    legend.__getEventManager().associate(title, new DvtSimpleObjPeer(title.getUntruncatedTextString(), null, null, params));

    if (isRTL) // align right first to get the dims for preferred size
      title.setX(availSpace.x + availSpace.w - title.measureDimensions().w);

    if (!options['isLayout']) {
      if (!isInline) {
        // title alignment will be deferred until we know the total width of the legend content
        var titleHalign = (section && section['titleHalign']) ? section['titleHalign'] : options['titleHalign'];
        legend.__registerTitle({text: title, halign: titleHalign});
      }
    }
    else
      container.removeChild(title);

    return title;
  }

  return null;
};


/**
 * Renders a legend section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContainer} container The container of the section.
 * @param {DvtRectangle} availSpace The available space.
 * @return {DvtRectangle} The total dimension of the sections.
 * @private
 */
DvtLegendRenderer._renderSections = function(legend, container, availSpace) {
  var options = legend.__getOptions();

  // Apply default symbol dimensions. If only one dimension is defined, the other will copy its value.
  if (options['symbolWidth'] == null && options['symbolHeight'] == null) {
    options['symbolWidth'] = DvtLegendRenderer._DEFAULT_SYMBOL_SIZE;
    options['symbolHeight'] = DvtLegendRenderer._DEFAULT_SYMBOL_SIZE;
  }
  else if (options['symbolWidth'] == null)
    options['symbolWidth'] = options['symbolHeight'];
  else if (options['symbolHeight'] == null)
    options['symbolHeight'] = options['symbolWidth'];

  var gapHeight = DvtLegendDefaults.getGapHeight(options, options['layout']['sectionGapHeight']);
  var gapWidth = DvtLegendDefaults.getGapWidth(options, options['layout']['sectionGapWidth']);
  var rowHeight = DvtLegendRenderer._getRowHeight(legend);
  var isHoriz = options['orientation'] != 'vertical';
  var legendSections = options['sections'];

  var totalDim = null;
  var horizAvailSpace = availSpace.clone();
  var sectionDim;
  for (var i = 0; i < legendSections.length; i++) {
    if (isHoriz) { // horizontal legend
      // first try to render horizontally in the current row
      sectionDim = DvtLegendRenderer._renderHorizontalSection(legend, container, legendSections[i], i, horizAvailSpace, rowHeight);

      if (sectionDim.w > horizAvailSpace.w) {
        if (horizAvailSpace.w < availSpace.w) {
          // form a new row
          availSpace.y += sectionDim.h + gapHeight;
          availSpace.h -= sectionDim.h + gapHeight;
        }

        if (sectionDim.w <= availSpace.w) // render horizontally in a new row
          sectionDim = DvtLegendRenderer._renderHorizontalSection(legend, container, legendSections[i], i, availSpace, rowHeight);
        else // render vertically in columns
          sectionDim = DvtLegendRenderer._renderVerticalSection(legend, container, legendSections[i], i, availSpace, rowHeight, true);

        availSpace.y += sectionDim.h + gapHeight;
        availSpace.h -= sectionDim.h + gapHeight;
        horizAvailSpace = availSpace.clone();
      }
      else {
        horizAvailSpace.w -= sectionDim.w + gapWidth;
        if (!DvtAgent.isRightToLeft(legend.getCtx()))
          horizAvailSpace.x += sectionDim.w + gapWidth;
      }
    }
    else { // vertical legend
      sectionDim = DvtLegendRenderer._renderVerticalSection(legend, container, legendSections[i], i, availSpace, rowHeight, false);
      availSpace.y += sectionDim.h + gapHeight;
      availSpace.h -= sectionDim.h + gapHeight;
    }

    totalDim = totalDim ? totalDim.getUnion(sectionDim) : sectionDim;
  }

  return totalDim;
};

/**
 * Renders a vertical legend section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContainer} container The container of the section.
 * @param {object} section The section from the options object.
 * @param {number} sectionIndex The index of the section.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a row of legend items.
 * @param {boolean} minimizeNumRows Whether the number of rows should be minimized.
 * @return {DvtRectangle} The total dimension of the section.
 * @private
 */
DvtLegendRenderer._renderVerticalSection = function(legend, container, section, sectionIndex, availSpace, rowHeight, minimizeNumRows) {
  if (!section)
    return;

  var options = legend.__getOptions();
  var isScrollable = options['scrolling'] != 'off';
  var symbolGap = DvtLegendDefaults.getGapWidth(options, options['layout']['symbolGapWidth']);
  var rowGap = DvtLegendDefaults.getGapHeight(options, options['layout']['rowGap']);
  var colGap = DvtLegendDefaults.getGapWidth(options, options['layout']['columnGap']);
  var isRTL = DvtAgent.isRightToLeft(legend.getCtx());

  var sectionSpace = availSpace.clone();
  if (isScrollable)
    sectionSpace.h = Infinity;

  // Render legend section title
  var title = DvtLegendRenderer._renderTitle(legend, container, section['title'], sectionSpace, section);
  var titleDim = title ? title.measureDimensions() : new DvtRectangle(isRTL ? sectionSpace.x + sectionSpace.w : sectionSpace.x, sectionSpace.y, 0, 0);

  // See if this is a section group which contains more legend sections
  if (!section['items'])
    return titleDim;

  //Title should always be on its own row
  if (titleDim.h > 0) {
    var titleGap = DvtLegendDefaults.getGapHeight(options, options['layout']['titleGap']);
    titleDim.h += titleGap;
    sectionSpace.y += titleDim.h;
    sectionSpace.h -= titleDim.h;
  }

  // Determine needed cols and rows
  var colInfo = DvtLegendRenderer._calcColumns(legend, sectionSpace, rowHeight, section['items'], minimizeNumRows);
  var numCols = colInfo['numCols'];
  var numRows = colInfo['numRows'];
  var colWidth = colInfo['width'];
  var colInitY = sectionSpace.y; // top y-coord of the columns

  var contentHeight = numRows * (rowHeight + rowGap) - rowGap;
  var contentWidth = Math.min(numCols * (colWidth + colGap) - colGap, sectionSpace.w);
  var sectionDim = new DvtRectangle(
      isRTL ? availSpace.x + availSpace.w - Math.max(contentWidth, titleDim.w) : availSpace.x,
      availSpace.y,
      Math.max(contentWidth, titleDim.w),
      contentHeight + titleDim.h
      );

  // No need to render during layout pass
  if (options['isLayout'])
    return sectionDim;

  // Don't render if not enough space
  if (numRows == 0 || numCols == 0)
    return titleDim;

  // For text truncation
  var textSpace = colWidth - options['symbolWidth'] - symbolGap;

  // Render the items one by one
  var currRow = 0;
  var currCol = 1;
  var numItems = section['items'].length;

  // iterate through items
  for (var i = 0; i < numItems; i++) {
    var item = section['items'][i];
    DvtLegendRenderer._createLegendItem(legend, container, item, sectionSpace, textSpace, rowHeight, i);

    // Update coordinates for next row
    sectionSpace.y += (rowHeight + rowGap);
    currRow++;
    if (currRow === numRows && currCol !== numCols) {
      sectionSpace.y = colInitY;
      sectionSpace.w -= colWidth + colGap;
      if (!isRTL)
        sectionSpace.x += colWidth + colGap;
      currRow = 0;
      currCol++;
    }
  }

  return sectionDim;
};

/**
 * Renders a horizontal legend section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContainer} container The container of the section.
 * @param {object} section The section from the options object.
 * @param {number} sectionIndex The index of the section.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a row of legend items.
 * @return {DvtRectangle} The total dimension of the section.
 * @private
 */
DvtLegendRenderer._renderHorizontalSection = function(legend, container, section, sectionIndex, availSpace, rowHeight) {
  if (!section)
    return;

  var options = legend.__getOptions();
  var symbolWidth = options['symbolWidth'];
  var symbolGap = DvtLegendDefaults.getGapWidth(options, options['layout']['symbolGapWidth']);
  var colGap = DvtLegendDefaults.getGapWidth(options, options['layout']['columnGap']);
  var numItems = section['items'].length;
  var isRTL = DvtAgent.isRightToLeft(legend.getCtx());
  var sectionSpace = availSpace.clone();

  // Determine legend section title
  var title = DvtLegendRenderer._renderTitle(legend, container, section['title'], availSpace, section, true);
  var titleDim = title ? title.measureDimensions() : new DvtRectangle(isRTL ? availSpace.x + availSpace.w : availSpace.x, availSpace.y, 0, 0);
  if (!section['items'])
    return titleDim;
  else if (titleDim.w > 0) {
    sectionSpace.w -= titleDim.w + colGap;
    if (!isRTL)
      sectionSpace.x += titleDim.w + colGap;
  }

  // Compute the section width and cache the text widths of the items
  var textWidths = [];
  var totalWidth = availSpace.w - sectionSpace.w;
  var item, textWidth, i;
  for (i = 0; i < numItems; i++) {
    item = section['items'][i];
    textWidth = Math.ceil(DvtLegendRenderer._getTextWidth(legend, item['text']));
    totalWidth += textWidth + symbolWidth + symbolGap + colGap;
    textWidths.push(textWidth);
  }
  if (numItems > 0)
    totalWidth -= colGap;

  // Don't render during layout pass, or if the totalWidth exceeds the available space
  var sectionDim = new DvtRectangle(isRTL ? availSpace.x + availSpace.w - totalWidth : availSpace.x, availSpace.y, totalWidth, Math.max(rowHeight, titleDim.h));
  if (options['isLayout'] || totalWidth > availSpace.w) {
    container.removeChild(title);
    return sectionDim;
  }

  var colWidth;
  for (i = 0; i < numItems; i++) {
    item = section['items'][i];
    DvtLegendRenderer._createLegendItem(legend, container, item, sectionSpace, textWidths[i], rowHeight, i);

    colWidth = textWidths[i] + symbolWidth + symbolGap;
    sectionSpace.w -= colWidth + colGap;
    if (!isRTL)
      sectionSpace.x += colWidth + colGap;
  }

  return sectionDim;
};


/**
 * Returns the space required for a legend section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @param {object} items The legend items to be rendered.
 * @param {boolean} minimizeNumRows Whether the number of rows should be minimized.
 * @return {object} Map containing width, rows and columns in the legend.
 * @private
 */
DvtLegendRenderer._calcColumns = function(legend, availSpace, rowHeight, items, minimizeNumRows) {
  var options = legend.__getOptions();

  // Use widest text since using # of chars can be wrong for unicode
  var textWidth = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var tempWidth = DvtLegendRenderer._getTextWidth(legend, item['text']);
    if (tempWidth > textWidth) {
      textWidth = tempWidth;
    }
  }

  // Row variables
  var symbolWidth = options['symbolWidth'];
  var symbolGap = DvtLegendDefaults.getGapWidth(options, options['layout']['symbolGapWidth']);
  var rowGap = DvtLegendDefaults.getGapHeight(options, options['layout']['rowGap']);
  var colGap = DvtLegendDefaults.getGapWidth(options, options['layout']['columnGap']);

  var numRows;
  var colWidth;
  var numCols;
  var fullColWidth = Math.ceil(symbolWidth + symbolGap + textWidth);

  if (minimizeNumRows) {
    // For horizontal layouts form as many columns as possible to minimize the height
    numCols = Math.min(Math.floor((availSpace.w + colGap) / (fullColWidth + colGap)), items.length);
    numRows = Math.ceil(items.length / numCols);
  }
  else if (availSpace.h == Infinity) {
    // For scrollable legends, don't wrap legend items into more than one column
    numCols = 1;
    numRows = items.length;
  }
  else {
    // For vertical layouts use full depth and then increase cols as necessary
    numRows = Math.min(Math.floor((availSpace.h + rowGap) / (rowHeight + rowGap)), items.length);
    numCols = Math.ceil(items.length / numRows);
    numRows = Math.ceil(items.length / numCols); // to get columns of roughly equal heights
  }

  var maxColWidth = (availSpace.w - (colGap * (numCols - 1))) / numCols;
  colWidth = Math.min(fullColWidth, maxColWidth);

  if (colWidth < symbolWidth)
    return {'width' : 0, 'numCols' : 0, 'numRows' : 0};

  return {'width' : colWidth, 'numCols' : numCols, 'numRows' : numRows};
};


/**
 * Returns the height of a single item in the legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @return {number} The height of a legend item.
 * @private
 */
DvtLegendRenderer._getRowHeight = function(legend) {
  var options = legend.__getOptions();

  // Figure out the legend item height
  var text = new DvtOutputText(legend.getCtx(), 'Test');
  text.setCSSStyle(options['textStyle']);
  text.alignMiddle();
  var textHeight = DvtTextUtils.guessTextDimensions(text).h;
  var symbolHeight = options['symbolHeight'] + DvtLegendDefaults.getGapHeight(options, options['layout']['symbolGapHeight']);
  return Math.ceil(Math.max(textHeight, symbolHeight));
};


/**
 * Returns the width of a text object in the legend with legend CSS styles applied.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {string} label The text to be rendered.
 * @return {number} The width of the text object.
 * @private
 */
DvtLegendRenderer._getTextWidth = function(legend, label) {
  var options = legend.__getOptions();

  // Figure out the legend item height
  var text = new DvtOutputText(legend.getCtx(), label);
  text.setCSSStyle(options['textStyle']);
  var dims = text.measureDimensions();
  return dims.w;
};


/**
 * Creates a legend item (symbol + text).
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContainer} container The container of the legend item.
 * @param {object} item The item in the options object.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} textSpace The maximum text width.
 * @param {object} rowHeight The height of the legend item.
 * @param {number} i The item index.
 * @private
 */
DvtLegendRenderer._createLegendItem = function(legend, container, item, availSpace, textSpace, rowHeight, i) {
  var options = legend.__getOptions();
  var context = legend.getCtx();
  var isRTL = DvtAgent.isRightToLeft(context);
  var symbolWidth = options['symbolWidth'];
  var symbolGap = DvtLegendDefaults.getGapWidth(options, options['layout']['symbolGapWidth']);
  var colGap = DvtLegendDefaults.getGapWidth(options, options['layout']['columnGap']);

  var symbolX = isRTL ? availSpace.x + availSpace.w - symbolWidth : availSpace.x;
  var textX = isRTL ? availSpace.x + availSpace.w - symbolWidth - symbolGap : availSpace.x + symbolWidth + symbolGap;

  // Create legend marker
  var marker = DvtLegendRenderer._createLegendSymbol(legend, symbolX, availSpace.y, rowHeight, item, i);

  // Create legend text
  var label = item['text'];
  var text;
  if (label) {
    text = DvtLegendRenderer._createLegendText(container, textSpace, label, options['textStyle']);
    if (text) {
      text.setX(textX);
      text.setY(availSpace.y + rowHeight / 2);
      if (isRTL)
        text.alignRight();
    }
  }

  // Add legend marker to legend. Legend text has been added by _createLegendText.
  container.addChild(marker);

  // Draw a rectangle on top of the legend item.  This rectangle is used for interactivity and to ensure that
  // rollover is smooth when moving across legend items.
  var itemRect = new DvtRect(context, isRTL ? textX - textSpace - colGap / 2 : symbolX - colGap / 2, availSpace.y, symbolWidth + symbolGap + textSpace + colGap, rowHeight);
  itemRect.setInvisibleFill();
  container.addChild(itemRect);

  // Associate for interactivity. Scrollable legend doesn't handle eventing.
  var tooltip = text != null ? text.getUntruncatedTextString() : null;
  var peer = DvtLegendObjPeer.associate([itemRect, marker, text], legend, item, tooltip);

  // Legend item visibility support
  if (item['categoryVisibility'] == 'hidden' && peer)
    marker.setHollow(peer.getColor());

  if (legend.__getOptions()['hideAndShowBehavior'] != 'none') {
    itemRect.setAriaRole('img');
    peer.UpdateAriaLabel(itemRect);
  }
};

/**
 * Creates a legend text. Adds the text to the legend if it's not empty.
 * @param {DvtContainer} container The text container.
 * @param {number} textSpace The width allowed for text.
 * @param {String} label The content of the text object.
 * @param {String} style The CSS style string to apply to the text object.
 * @return {DvtText}
 * @private
 */
DvtLegendRenderer._createLegendText = function(container, textSpace, label, style) {
  // Draw the legend text.
  var text = new DvtOutputText(container.getCtx(), label);
  text.alignMiddle();
  text.setCSSStyle(style);
  text = DvtTextUtils.fitText(text, textSpace, Infinity, container) ? text : null;
  return text;
};


/**
 * Creates a legend symbol.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {number} x The x coordinate of the legend symbol.
 * @param {number} y The y coordinate of the legend symbol.
 * @param {number} rowHeight The height of the legend item.
 * @param {object} item The data for the legend item.
 * @param {number} i The index of the legend item. Used for determining the default color.
 * @return {DvtShape}
 * @private
 */
DvtLegendRenderer._createLegendSymbol = function(legend, x, y, rowHeight, item, i) {
  // Apply the default styles
  var legendOptions = legend.__getOptions();
  if (!item['markerShape'])
    item['markerShape'] = legendOptions['markerShape'];

  if (!item['color']) {
    var colorRamp = legendOptions['colors'];
    item['color'] = colorRamp[i % colorRamp.length];
  }

  if (!item['lineWidth'])
    item['lineWidth'] = legendOptions['lineWidth'];

  var symbolWidth = legendOptions['symbolWidth'];
  var symbolHeight = legendOptions['symbolHeight'];
  var markerSize = Math.min(symbolWidth, symbolHeight);

  var symbolType = item['type'] != null ? item['type'] : item['symbolType'];
  var symbol;
  if (symbolType == 'line') {
    item['lineWidth'] = Math.min(item['lineWidth'], DvtLegendRenderer._MAX_LINE_WIDTH);
    symbol = DvtLegendRenderer._createLine(legend.getCtx(), x, y, symbolWidth, rowHeight, item);
  }
  else if (symbolType == 'lineWithMarker') {
    item['lineWidth'] = Math.min(item['lineWidth'], DvtLegendRenderer._MAX_LINE_WIDTH_WITH_MARKER);
    symbol = DvtLegendRenderer._createLine(legend.getCtx(), x, y, symbolWidth, rowHeight, item);

    // Only create the marker if the legend item corresponds to a visible category
    if (item['categoryVisibility'] != 'hidden')
      symbol.addChild(DvtLegendRenderer._createMarker(legend, x, y, symbolWidth, rowHeight, markerSize * DvtLegendRenderer._LINE_MARKER_SIZE_FACTOR, item));
  }
  else {
    symbol = DvtLegendRenderer._createMarker(legend, x, y, symbolWidth, rowHeight, markerSize, item);
  }
  return symbol;
};


/**
 * Creates a marker symbol.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {number} x The x coordinate of the legend symbol.
 * @param {number} y The y coordinate of the legend symbol.
 * @param {number} colWidth The column width allocated to the legend symbol.
 * @param {number} rowHeight The height of the legend item.
 * @param {number} markerSize The marker size.
 * @param {object} item The data for the legend item.
 * @return {DvtMarker}
 * @private
 */
DvtLegendRenderer._createMarker = function(legend, x, y, colWidth, rowHeight, markerSize, item) {
  var context = legend.getCtx();
  var legendOptions = legend.__getOptions();

  // Find the style values
  var shape = item['markerShape'];
  var color = item['markerColor'] ? item['markerColor'] : item['color'];
  var pattern = item['pattern'];

  // Find the coords
  var markerY = y + (rowHeight - markerSize) / 2;
  var markerX = x + (colWidth - markerSize) / 2;

  var legendMarker;
  if (pattern) {
    // Pattern markers must be translated, since the pattern starts at the origin of the shape
    legendMarker = new DvtMarker(context, shape, legendOptions['skin'], 0, 0, markerSize, markerSize);
    legendMarker.setFill(new DvtPatternFill(pattern, color, '#FFFFFF'));
    legendMarker.setTranslate(markerX, markerY);
  }
  else {
    legendMarker = new DvtMarker(context, shape, legendOptions['skin'], markerX, markerY, markerSize, markerSize);
    legendMarker.setSolidFill(color);
  }

  if (item['borderColor']) {
    var borderWidth = item['_borderWidth'] ? item['_borderWidth'] : 1;
    legendMarker.setSolidStroke(item['borderColor'], null, borderWidth);
  }

  // Use pixel hinting for crisp squares
  if (shape == 'square')
    legendMarker.setPixelHinting(true);

  return legendMarker;
};


/**
 * Creates a line symbol.
 * @param {DvtContext} context The context in which to create the legend item.
 * @param {number} x The x coordinate of the legend symbol.
 * @param {number} y The y coordinate of the legend symbol.
 * @param {number} colWidth The column width allocated to the legend symbol.
 * @param {number} rowHeight The height of the legend item.
 * @param {object} item The data for the legend item.
 * @return {DvtLine}
 * @private
 */
DvtLegendRenderer._createLine = function(context, x, y, colWidth, rowHeight, item) {
  var lineY = y + rowHeight / 2;
  var line = new DvtLine(context, x, lineY, x + colWidth, lineY);
  var stroke = new DvtSolidStroke(item['color'], 1, item['lineWidth']);

  // Set the line style. The size and the spacing of the dash/dot has to be shrunk so that it's readable inside the 10px box.
  var style = item['lineStyle'];
  if (style == 'dashed')
    stroke.setType(DvtStroke.convertTypeString(style), '4,2,4');
  else if (style == 'dotted')
    stroke.setType(DvtStroke.convertTypeString(style), '2');

  line.setStroke(stroke);
  line.setPixelHinting(true);
  return line;
};
});