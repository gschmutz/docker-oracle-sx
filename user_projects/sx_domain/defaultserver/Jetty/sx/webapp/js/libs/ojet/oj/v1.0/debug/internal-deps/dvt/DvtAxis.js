"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * Axis component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtBaseComponent}
 * @export
 */
var DvtAxis = function() {};

DvtObj.createSubclass(DvtAxis, DvtBaseComponent, 'DvtAxis');


/**
 * Returns a new instance of DvtAxis.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtAxis}
 * @export
 */
DvtAxis.newInstance = function(context, callback, callbackObj) {
  var axis = new DvtAxis();
  axis.Init(context, callback, callbackObj);
  return axis;
};


/**
 * Returns a copy of the default options for the specified skin.
 * @param {string} skin The skin whose defaults are being returned.
 * @return {object} The object containing defaults for this component.
 * @export
 */
DvtAxis.getDefaults = function(skin) 
{
  return (new DvtAxisDefaults()).getDefaults(skin);
};


/**
 * @override
 * @protected
 */
DvtAxis.prototype.Init = function(context, callback, callbackObj) {
  DvtAxis.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtAxisDefaults();

  // Create the event handler and add event listeners
  this._eventHandler = new DvtAxisEventManager(this);
  this._eventHandler.addListeners(this);

  this._labelTruncationNeeded = true;

  this._bounds = null;
};


/**
 * Minimum buffer for horizontal axis.
 */
DvtAxis.MINIMUM_AXIS_BUFFER = 10;


/**
 * @override
 * @protected
 */
DvtAxis.prototype.SetOptions = function(options) {
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
 */
DvtAxis.prototype.getPreferredSize = function(options, maxWidth, maxHeight) {
  // Update the options object.
  this.SetOptions(options);

  // Set the layout flag to indicate this is a layout pass only
  this.__getOptions()['isLayout'] = true;

  // Ask the axis to render its context in the max space and find the space used
  this.render(null, maxWidth, maxHeight);
  var dims = this.getDimensions();

  // Clear the rendered contents and reset state
  this.__getOptions()['isLayout'] = false;
  this.removeChildren();

  // Return the height needed.  Reserve the full space along the edge of the axis.
  var position = this.__getOptions()['position'];
  if (position == 'top' || position == 'bottom') {
    if (dims.h <= maxHeight)
      this._labelTruncationNeeded = false;
    return new DvtDimension(maxWidth, Math.min(dims.h, maxHeight));
  } else {
    // In Chrome, when getDimensioins is called on DvtAxis the width will sometimes be less the widest text element
    // that is a child of it. When we actually render text labels can get dropped or truncated incorrectly. Work around
    // is to add 10% to the width calculated. To see this, do not add 10% to the dims.w and render a default bar graph
    // in Chrome 13.0.782.215
    var extraWidth = dims.w > 0 ? Math.max(1, dims.w * .1) : 0;
    if (dims.w + extraWidth <= maxWidth)
      this._labelTruncationNeeded = false;
    return new DvtDimension(Math.min(dims.w + extraWidth, maxWidth), maxHeight);
  }
};


/**
 * Renders the component at the specified size.
 * @param {object} options The object containing specifications and data for this component.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 * @param {number} [x] x position of the component.
 * @param {number} [y] y position of the component.
 * @export
 */
DvtAxis.prototype.render = function(options, width, height, x, y) 
{
  // Update the options object.
  this.SetOptions(options);

  this.Width = width;
  this.Height = height;

  // Clear any contents rendered previously
  this.removeChildren();

  // Set default values to undefined properties.
  if (!x) {
    x = 0;
  }

  if (!y) {
    y = 0;
  }

  // Render the axis
  var availSpace = new DvtRectangle(x, y, width, height);
  DvtAxisRenderer.render(this, availSpace);
};


/**
 * Processes the specified event.
 * @param {object} event
 * @param {object} source The component that is the source of the event, if available.
 */
DvtAxis.prototype.processEvent = function(event, source) {
  // Dispatch the event to the callback if it originated from within this component.
  if (this === source) {
    this.__dispatchEvent(event);
  }
};


/**
 * Returns the evaluated options object, which contains the user specifications
 * merged with the defaults.
 * @return {object} The options object.
 */
DvtAxis.prototype.__getOptions = function() {
  return this.Options;
};


/**
 * Returns the DvtEventManager for this component.
 * @return {DvtEventManager}
 */
DvtAxis.prototype.__getEventManager = function() {
  return this._eventHandler;
};


/**
 * Returns the axisInfo for the axis
 * @return {DvtAxisInfo} the axisInfo
 */
DvtAxis.prototype.__getInfo = function() {
  return this.Info;
};


/**
 * Sets the object containing calculated axis information and support
 * for creating drawables.
 * @param {DvtAxisInfo} axisInfo
 */
DvtAxis.prototype.__setInfo = function(axisInfo) {
  this.Info = axisInfo;
};


/**
 * Returns whether label truncation is needed for this axis
 * @return {Boolean}
 */
DvtAxis.prototype.__isLabelTruncationNeeded = function() {
  return this._labelTruncationNeeded;
};


/**
 * Returns the axis width
 * @return {number}
 */
DvtAxis.prototype.getWidth = function() {
  return this.Width;
};


/**
 * Returns the axis height
 * @return {number}
 */
DvtAxis.prototype.getHeight = function() {
  return this.Height;
};


/**
 * @override
 */
DvtAxis.prototype.destroy = function() {
  if (this._eventHandler) {
    this._eventHandler.removeListeners(this);
    this._eventHandler.destroy();
    this._eventHandler = null;
  }

  // Call super last during destroy
  DvtAxis.superclass.destroy.call(this);
};

/**
 * Stores the bounds for this axis
 * @param {Object} bounds
 */
DvtAxis.prototype.__setBounds = function(bounds) {
  this._bounds = bounds;
};

/**
 * Returns the bounds for this axis
 * @return {Object} the object containing the bounds for this axis
 */
DvtAxis.prototype.__getBounds = function() {
  return this._bounds;
};

/**
 * Returns the automation object for this axis
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtAxis.prototype.getAutomation = function() {
  return new DvtAxisAutomation(this);
};

/**
 * Axis Constants
 * @class
 * @export
 */
var DvtAxisConstants = {};

DvtObj.createSubclass(DvtAxisConstants, DvtObj, 'DvtAxisConstants');


/**
 * @const
 * @export
 */
DvtAxisConstants.TICK_LABEL = 'tickLabel';


/**
 * @const
 * @export
 */
DvtAxisConstants.TITLE = 'title';
/**
 * Abstact formatter for an axis label value.
 *
 * @param {object} bundle translations bundle
 * @constructor
 */
var DvtAbstractAxisValueFormatter = function(bundle) {
  this._bundle = bundle;
};

DvtObj.createSubclass(DvtAbstractAxisValueFormatter, DvtObj, 'DvtAbstractAxisValueFormatter');


/**
 * Abstract method which purpose is to format given numeric value.
 * @param {number} value value to be formatted
 * @return {string} formatted value as string
 */
DvtAbstractAxisValueFormatter.prototype.format = function(value) {
};


/**
 * Returns currently used bundle
 * @protected
 * @return {object} currently used bundle
 */
DvtAbstractAxisValueFormatter.prototype.GetBundle = function() {
  return this._bundle;
};
/**
 *  Provides automation services for a DVT component.
 *  @class DvtAxisAutomation
 *  @param {DvtAxis} dvtComponent
 *  @implements {DvtAutomation}
 *  @constructor
 *  @export
 */
var DvtAxisAutomation = function(dvtComponent) {
  this._axis = dvtComponent;

  this._options = this._axis.__getOptions();
  this._axisInfo = this._axis.__getInfo();
};

DvtObj.createSubclass(DvtAxisAutomation, DvtAutomation, 'DvtAxisAutomation');


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>item[groupIndex]</li>
 * </ul>
 * @override
 */
DvtAxisAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var logicalObj = this._axis.__getEventManager().GetLogicalObject(displayable);
  if (logicalObj && (logicalObj instanceof DvtSimpleObjPeer) && this._options['groups']) {
    var group = logicalObj.getParams()['id'];
    for (var g = 0; g < this._options['groups'].length; g++) {
      if (this._options['groups'][g] == group)
        return 'item[' + g + ']';
    }
  }
  return null;
};


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>item[labelIndex]</li>
 * </ul>
 * @override
 * @export
 */
DvtAxisAutomation.prototype.getDomElementForSubId = function(subId) {
  if (this._axisInfo instanceof DvtGroupAxisInfo) {
    var openParen = subId.indexOf('[');
    var closeParen = subId.indexOf(']');

    if (openParen > 0 && closeParen > 0) {
      var groupIndex = subId.substring(openParen + 1, closeParen);
      var labels = this._axisInfo.getLabels(this._axis.getCtx());
      return labels[groupIndex].getElem();
    }
  }
  return null;
};

/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtAxisDefaults = function() {
  this.Init({'skyros': DvtAxisDefaults.VERSION_1, 'alta': DvtAxisDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtAxisDefaults, DvtBaseComponentDefaults, 'DvtAxisDefaults');


/**
 * Contains overrides for the 'alta' skin.
 */
DvtAxisDefaults.SKIN_ALTA = {
  'axisLine': {'lineColor': '#9E9E9E'},
  'majorTick': {'lineColor': 'rgba(196,206,215,0.4)', 'baselineColor': 'auto'},
  'minorTick': {'lineColor': 'rgba(196,206,215,0.2)'},
  'tickLabel': {'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},
  'titleStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")
};


/**
 * Defaults for version 1.
 */
DvtAxisDefaults.VERSION_1 = {
  'position': null,
  'baselineScaling': 'zero',
  'axisLine': {'lineColor': '#8A8DAC', 'lineWidth': 1, 'rendered': 'on'},
  'majorTick': {'lineColor': 'rgba(138,141,172,0.4)', 'lineWidth': 1, 'rendered': 'auto', 'lineStyle': 'solid'},
  'minorTick': {'lineColor': 'rgba(138,141,172,0.20)', 'lineWidth': 1, 'rendered': 'off', 'lineStyle': 'solid'},
  'tickLabel': {
    'scaling': 'auto',
    'style': new DvtCSSStyle('font-size: 11px; color: #333333;'), 'rotation': 'auto', 'rendered': 'on'
  },
  'titleStyle': new DvtCSSStyle('font-size: 11px; color: #737373;'),

  // For group axis, an optional offset expressed as a factor of the group size.
  'startGroupOffset': 0, 'endGroupOffset': 0,

  //*********** Internal Attributes *************************************************//
  'layout': {
    // Gap ratio is multiplied against all gap sizes
    'gapWidthRatio': 1.0, 'gapHeightRatio': 1.0,
    'titleGap': 4
  },

  '_useBaselineColor': false, // when true, will render the baseline in a slightly more prominent color

  'isLayout': false // true if rendering for layout purposes
};


/**
 * Scales down gap widths based on the width of the component.
 * @param {object} options The object containing options specifications for this component.
 * @param {Number} defaultWidth The default gap width.
 * @return {Number}
 */
DvtAxisDefaults.getGapWidth = function(options, defaultWidth) {
  return Math.ceil(defaultWidth * options['layout']['gapWidthRatio']);
};

/**
 * Scales down gap heights based on the height of the component.
 * @param {object} options The object containing options specifications for this component.
 * @param {Number} defaultHeight The default gap height.
 * @return {Number}
 */
DvtAxisDefaults.getGapHeight = function(options, defaultHeight) {
  return Math.ceil(defaultHeight * options['layout']['gapHeightRatio']);
};
/**
 * Event Manager for DvtAxis.
 * @param {DvtAxis} axis
 * @class
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtAxisEventManager = function(axis) {
  this.Init(axis.getCtx(), axis.processEvent, axis);
  this._axis = axis;
};

DvtObj.createSubclass(DvtAxisEventManager, DvtEventManager, 'DvtAxisEventManager');


/**
 * Returns the parameters for the DvtComponentUIEvent for an object with the specified arguments.
 * @param {string} type The type of object that was the target of the event.
 * @param {object} [id] The id of the object, if one exists.
 */
DvtAxisEventManager.getUIEventParams = function(type, id) {
  return {'type': type, 'id': id};
};


/**
 * @override
 */
DvtAxisEventManager.prototype.FireUIEvent = function(type, logicalObj) {
  if (logicalObj instanceof DvtSimpleObjPeer && logicalObj.getParams() != null) {
    this.FireEvent(new DvtComponentUIEvent(type, logicalObj.getParams()), this._axis);
  }
};
/**
 * Renderer for DvtAxis.
 * @class
 */
var DvtAxisRenderer = new Object();

DvtObj.createSubclass(DvtAxisRenderer, DvtObj, 'DvtAxisRenderer');

DvtAxisRenderer._RADIAL_LABEL_GAP = 5;


/**
 * Renders the axis and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtRectangle} availSpace The available space.
 */
DvtAxisRenderer.render = function(axis, availSpace) {
  // Calculate the axis extents and increments
  var options = axis.__getOptions();
  var axisInfo = DvtAxisInfo.newInstance(axis.getCtx(), options, availSpace);
  axis.__setInfo(axisInfo);

  if (options['rendered'] == 'off' || availSpace.w <= 0 || availSpace.h <= 0)
    return;

  axis.__setBounds(availSpace.clone());

  // Render the title
  DvtAxisRenderer._renderTitle(axis, axisInfo, availSpace);

  // Render the tick labels
  DvtAxisRenderer._renderLabels(axis, axisInfo, availSpace);
};


/**
 * Renders the axis title and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtAxisInfo} axisInfo The axis model.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtAxisRenderer._renderTitle = function(axis, axisInfo, availSpace) {
  var options = axis.__getOptions();
  if (!options['title'])
    return;

  // Create the title object and add to axis
  var position = options['position'];

  if (position == 'radial' || position == 'tangential')
    return; // polar chart doesn't have axis titles

  // In layout mode, treat "bottom" as "top" for space calculation
  if (options['isLayout'] && position == 'bottom')
    position = 'top';

  var title, gap;
  if (position == 'top' || position == 'bottom') {
    title = DvtAxisRenderer._createText(axis.__getEventManager(), axis, options['title'], options['titleStyle'],
        0, 0, availSpace.w, availSpace.h,
        DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TITLE));
    gap = DvtAxisDefaults.getGapHeight(options, options['layout']['titleGap']);
  }
  else {
    title = DvtAxisRenderer._createText(axis.__getEventManager(), axis, options['title'], options['titleStyle'],
        0, 0, availSpace.h, availSpace.w,
        DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TITLE));
    gap = DvtAxisDefaults.getGapWidth(options, options['layout']['titleGap']);
  }

  if (title) {
    // Position the title based on text size and axis position
    var isRTL = DvtAgent.isRightToLeft(axis.getCtx());
    var titleDims = title.measureDimensions();

    // Position the label and update the space
    if (position == 'top') {
      title.setX(availSpace.x + availSpace.w / 2 - titleDims.w / 2);
      title.setY(availSpace.y);
      availSpace.y += (titleDims.h + gap);
      availSpace.h -= (titleDims.h + gap);
    }
    else if (position == 'bottom') {
      title.setX(availSpace.x + availSpace.w / 2 - titleDims.w / 2);
      title.setY(availSpace.y + availSpace.h - titleDims.h);
      availSpace.h -= (titleDims.h + gap);
    }
    else if (position == 'left') {
      title.alignCenter();
      title.alignMiddle();
      title.setRotation(isRTL ? Math.PI / 2 : 3 * Math.PI / 2);
      title.setTranslate(availSpace.x + titleDims.h / 2, availSpace.y + availSpace.h / 2);
      availSpace.x += (titleDims.h + gap);
      availSpace.w -= (titleDims.h + gap);
    }
    else if (position == 'right') {
      title.alignCenter();
      title.alignMiddle();
      title.setRotation(isRTL ? Math.PI / 2 : 3 * Math.PI / 2);
      title.setTranslate(availSpace.x + availSpace.w - titleDims.h / 2, availSpace.y + availSpace.h / 2);
      availSpace.w -= (titleDims.h + gap);
    }
  }
};


/**
 * Renders the tick labels and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtAxisInfo} axisInfo The axis model.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtAxisRenderer._renderLabels = function(axis, axisInfo, availSpace) {
  var options = axis.__getOptions();
  if (options['tickLabel']['rendered'] == 'on') {
    // Axis labels are positioned based on the position of the axis.  In layout
    // mode, the labels will be positioned as close to the title as possible to
    // calculate the actual space used.
    var position = options['position'];
    if (position == 'top' || position == 'bottom')
      DvtAxisRenderer._renderLabelsHoriz(axis, axisInfo, availSpace);
    else if (position == 'tangential')
      DvtAxisRenderer._renderLabelsTangent(axis, axisInfo, availSpace);
    else
      DvtAxisRenderer._renderLabelsVert(axis, axisInfo, availSpace);
  }
};


/**
 * Renders tick labels for a horizontal axis and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtAxisInfo} axisInfo The axis model.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtAxisRenderer._renderLabelsHoriz = function(axis, axisInfo, availSpace) {
  // Position and add the axis labels.
  var labels = axisInfo.getLabels(axis.getCtx());
  var isLayout = axis.__getOptions()['isLayout'];
  var maxLv1Height = 0;

  // For BIDI
  var isRTL = DvtAgent.isRightToLeft(axis.getCtx());

  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    if (label == null)
      continue;

    if (axisInfo.isLabelRotated()) {
      //truncate if necesssary
      if (!isLayout && axis.__isLabelTruncationNeeded()) {
        label = DvtTextUtils.fitText(label, availSpace.h, availSpace.w, axis) ? label : null; // swap h and w
      }
      if (!label)
        continue;

      //position and add the axis labels
      if (!isRTL)
        label.alignRight();
      else
        label.alignLeft();
      label.setTranslateY(availSpace.y);

    } else { // not rotated
      if (DvtTextUtils.guessTextDimensions(label).h - 1 > availSpace.h) // -1 to prevent rounding error (bug 18960904)
        continue;

      label.alignTop();
      label.setY(availSpace.y);
    }

    // Associate with logical object to support DvtComponentUIEvent and tooltips
    var params = DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TICK_LABEL, label.getTextString());
    axis.__getEventManager().associate(label, new DvtSimpleObjPeer(label.getUntruncatedTextString(), null, null, params));

    axis.addChild(label);
    maxLv1Height = Math.max(maxLv1Height, DvtTextUtils.guessTextDimensions(label).h);
  }

  availSpace.y += maxLv1Height;
  availSpace.h -= maxLv1Height;

  // Render the nested labels (level 2).
  var lv2Labels = axisInfo.getLabels(axis.getCtx(), 1);
  var offset = 0;

  if (lv2Labels != null) {
    for (i = 0; i < lv2Labels.length; i++) {
      label = lv2Labels[i];
      if (label == null)
        continue;
      if (DvtTextUtils.guessTextDimensions(label).h - 1 > availSpace.h) // -1 to prevent rounding error (bug 18960904)
        continue;

      // Associate with logical object to support DvtComponentUIEvent and tooltips
      axis.__getEventManager().associate(label, new DvtSimpleObjPeer(null, null, null, DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TICK_LABEL, label.getTextString())));

      // align with level 1 label
      if (labels[i] != null)
        offset = labels[i].measureDimensions().w / 2;
      if (isRTL) {
        label.setX(label.getX() + offset);
      } else {
        label.setX(label.getX() - offset);
      }

      label.alignTop();
      label.setY(availSpace.y);
      axis.addChild(label);
    }
  }
};


/**
 * Renders tick labels for a vertical axis and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtAxisInfo} axisInfo The axis model.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtAxisRenderer._renderLabelsVert = function(axis, axisInfo, availSpace) {
  var options = axis.__getOptions();
  var isLayout = options['isLayout'];
  var alwaysAlignRight = options['_alwaysAlignRight'];
  var position = options['position'];
  var isRTL = DvtAgent.isRightToLeft(axis.getCtx());

  // Categorical axis : alignRight if position=left, alignLeft if position=right
  // Numerical axis   : always alignRight
  // During layout    : alignLeft if position=left, alignRight if position=right (in order to get the correct preferred size)
  // Exceptions       : radial axis follow the categorical approach due to implementation constraints
  var isAlignLeft = (position == 'radial' && isRTL) || (isLayout && position == 'left') || (!alwaysAlignRight && !isLayout && position == 'right');

  var labelX;
  if (position == 'radial') {
    labelX = availSpace.x + availSpace.w / 2;
    labelX += DvtAxisRenderer._RADIAL_LABEL_GAP * (isRTL ? 1 : -1);
  }
  else {
    labelX = isAlignLeft ? availSpace.x : availSpace.x + availSpace.w;
  }

  var formatLabelVert = function(label) {
    if (!isLayout && axis.__isLabelTruncationNeeded()) {
      label = DvtTextUtils.fitText(label, availSpace.w, availSpace.h, axis) ? label : null;
    }
    if (!label)
      return;

    // Associate with logical object to support DvtComponentUIEvent and tooltips
    var params = DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TICK_LABEL, label.getTextString());
    axis.__getEventManager().associate(label, new DvtSimpleObjPeer(label.getUntruncatedTextString(), null, null, params));

    label.setX(labelX);
    isAlignLeft ? label.alignLeft() : label.alignRight();

    if (position == 'radial') {
      var labelY = label.getY();
      label.setY(availSpace.y + availSpace.h / 2 - labelY);

      // draw bounding box to improve readability
      var bboxDims = label.getDimensions();
      var padding = bboxDims.h * 0.15;
      var opacity = labelY + bboxDims.h / 2 > axisInfo.getEndCoord() && axis.__getOptions()['polarGridShape'] == 'circle' ? 1 : 0.3;
      var cmd = DvtPathUtils.roundedRectangle(bboxDims.x - padding, bboxDims.y, bboxDims.w + 2 * padding, bboxDims.h, 2, 2, 2, 2);
      var bbox = new DvtPath(axis.getCtx(), cmd);
      bbox.setSolidFill('#FFFFFF', opacity);
      axis.addChild(bbox);
    }

    axis.addChild(label);
  };

  // Position and add the axis labels (level 1).
  var labels = axisInfo.getLabels(axis.getCtx());
  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    if (label != null)
      formatLabelVert(label);
  }

  // Render the nested labels (level 2).
  var lv2Labels = axisInfo.getLabels(axis.getCtx(), 1);
  if (lv2Labels != null) {
    for (i = 0; i < lv2Labels.length; i++) {
      label = lv2Labels[i];
      if (label != null)
        formatLabelVert(label);
    }
  }
};


/**
 * Renders tick labels for a tangential axis and updates the available space.
 * @param {DvtAxis} axis The axis being rendered.
 * @param {DvtAxisInfo} axisInfo The axis model.
 * @param {DvtRectangle} availSpace The available space.
 * @private
 */
DvtAxisRenderer._renderLabelsTangent = function(axis, axisInfo, availSpace) {
  var labels = axisInfo.getLabels(axis.getCtx());
  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    if (label == null)
      continue;
    var textBefore = label.getTextString();
    var maxWidth = availSpace.w / 2 - Math.abs(label.getX());
    var maxHeight = availSpace.h / 2 - Math.abs(label.getY());
    if (DvtTextUtils.fitText(label, maxWidth, maxHeight, axis)) { // truncation
      // Associate with logical object to support DvtComponentUIEvent and tooltips
      var params = DvtAxisEventManager.getUIEventParams(DvtAxisConstants.TICK_LABEL, textBefore);
      var tooltip = label.isTruncated() ? textBefore : null;
      axis.__getEventManager().associate(label, new DvtSimpleObjPeer(tooltip, null, null, params));

      label.setTranslateX(availSpace.x + availSpace.w / 2);
      label.setTranslateY(availSpace.y + availSpace.h / 2);
      axis.addChild(label);
    }
  }
};


/**
 * Creates and adds a DvtText object to a container. Will truncate and add tooltip as necessary.
 * @param {DvtEventManager} eventManager
 * @param {DvtContainer} container The container to add the text object to.
 * @param {String} textString The text string of the text object.
 * @param {DvtCSSStyle} cssStyle The css style to apply to the text object.
 * @param {number} x The x coordinate of the text object.
 * @param {number} y The y coordinate of the text object.
 * @param {number} width The width of available text space.
 * @param {number} height The height of the available text space.
 * @param {object} params Additional parameters that will be passed to the logical object.
 * @return {DvtOutputText} The created text object. Can be null if no text object could be created in the given space.
 * @private
 */
DvtAxisRenderer._createText = function(eventManager, container, textString, cssStyle, x, y, width, height, params) {
  var text = new DvtOutputText(container.getCtx(), textString, x, y);
  text.setCSSStyle(cssStyle);
  if (DvtTextUtils.fitText(text, width, height, container)) {
    // Associate with logical object to support DvtComponentUIEvent and truncation
    eventManager.associate(text, new DvtSimpleObjPeer(text.getUntruncatedTextString(), null, null, params));
    return text;
  }
  else
    return null;
};

/**
 * Calculated axis information and drawable creation.  This class should
 * not be instantiated directly.
 * @class
 * @constructor
 * @extends {DvtObj}
 */
var DvtAxisInfo = function() {};

DvtObj.createSubclass(DvtAxisInfo, DvtObj, 'DvtAxisInfo');


/**
 * Creates an appropriate instance of DvtAxisInfo with the specified parameters.
 * @param {DvtContext} context
 * @param {object} options The object containing specifications and data for this component.
 * @param {DvtRectangle} availSpace The available space.
 * @return {DvtAxisInfo}
 */
DvtAxisInfo.newInstance = function(context, options, availSpace) {
  if (options['timeAxisType'] && options['timeAxisType'] != 'disabled')
    return new DvtTimeAxisInfo(context, options, availSpace);
  else if (isNaN(options['dataMin']) && isNaN(options['dataMax']))
    return new DvtGroupAxisInfo(context, options, availSpace);
  else
    return new DvtDataAxisInfo(context, options, availSpace);
};


/**
 * Calculates and stores the axis information.
 * @param {DvtContext} context
 * @param {object} options The object containing specifications and data for this component.
 * @param {DvtRectangle} availSpace The available space.
 * @protected
 */
DvtAxisInfo.prototype.Init = function(context, options, availSpace) {
  this._context = context;

  // Figure out the start and end coordinate of the axis
  this.Position = options['position'];
  this._radius = options['_radius']; // for polar charts

  if (this.Position == 'top' || this.Position == 'bottom') {
    this.StartCoord = availSpace.x;
    this.EndCoord = availSpace.x + availSpace.w;
  }
  else if (this.Position == 'left' || this.Position == 'right') {
    this.StartCoord = availSpace.y;
    this.EndCoord = availSpace.y + availSpace.h;
  }
  else if (this.Position == 'radial') {
    this.StartCoord = 0;
    this.EndCoord = this._radius;
  }
  else if (this.Position == 'tangential') {
    if (DvtAgent.isRightToLeft(context)) {
      this.StartCoord = 2 * Math.PI;
      this.EndCoord = 0;
    }
    else {
      this.StartCoord = 0;
      this.EndCoord = 2 * Math.PI;
    }
  }

  // Axis min and max value. Subclasses should set.
  this.MinValue = null;
  this.MaxValue = null;
  this.GlobalMin = null;
  this.GlobalMax = null;
  this.DataMin = null;
  this.DataMax = null;

  // Set the maximum zoom for this axis
  this.MinViewportExtent = null;

  // The overflows at the two ends of the axis
  this.StartOverflow = 0;
  this.EndOverflow = 0;

  // Sets the buffers (the maximum amount the labels can go over before they overflow)
  if (options['leftBuffer'] == null)
    options['leftBuffer'] = Infinity;
  if (options['rightBuffer'] == null)
    options['rightBuffer'] = Infinity;

  // Store the options object
  this.Options = options;
};


/**
 * Returns the DvtContext associated with this instance.
 * @return {DvtContext}
 */
DvtAxisInfo.prototype.getCtx = function() {
  return this._context;
};


/**
 * Returns the options settings for the axis.
 * @return {object} The options for the axis.
 */
DvtAxisInfo.prototype.getOptions = function() {
  return this.Options;
};


/**
 * Returns an array containing the tick labels for this axis.
 * @param {DvtContext} context
 * @param {Number} levelIdx The level index (optional). 0 indicates the first level, 1 the second, etc. If skipped, 0 (the first level) is assumed.
 * @return {Array} The Array of DvtText objects.
 */
DvtAxisInfo.prototype.getLabels = function(context, levelIdx) {
  return null; // subclasses should override
};


/**
 * Returns the axis line for this axis.
 * @param {DvtContext} context
 * @return {DvtLine} The axis line.
 */
DvtAxisInfo.prototype.getAxisLine = function(context) {
  return null; // subclasses should override
};


/**
 * Returns an array containing the majorTick grid lines for this axis.  Objects
 * are returned in the desired z-order.
 * @param {DvtContext} context
 * @return {Array} The Array of DvtLine objects.
 */
DvtAxisInfo.prototype.getMajorGridLines = function(context) {
  return []; // subclasses should override
};


/**
 * Returns an array containing the minorTick grid lines for this axis.  Objects
 * are returned in the desired z-order.
 * @param {DvtContext} context
 * @return {Array} The Array of DvtLine objects.
 */
DvtAxisInfo.prototype.getMinorGridLines = function(context) {
  return []; // subclasses should override
};


/**
 * Returns the value for the specified coordinate along the axis.  Returns null
 * if the coordinate is not within the axis.
 * @param {number} coord The coordinate along the axis.
 * @return {object} The value at that coordinate.
 */
DvtAxisInfo.prototype.getValueAt = function(coord) {
  return null; // subclasses should override
};


/**
 * Returns the coordinate for the specified value.  Returns null if the value is
 * not within the axis.
 * @param {object} value The value to locate.
 * @return {number} The coordinate for the value.
 */
DvtAxisInfo.prototype.getCoordAt = function(value) {
  return null; // subclasses should override
};


/**
 * Returns the value for the specified coordinate along the axis.  If a coordinate
 * is not within the axis, returns the value of the closest coordinate within the axis.
 * @param {number} coord The coordinate along the axis.
 * @return {object} The value at that coordinate.
 */
DvtAxisInfo.prototype.getBoundedValueAt = function(coord) {
  return null; // subclasses should override
};


/**
 * Returns the coordinate for the specified value along the axis.  If a value
 * is not within the axis, returns the coordinate of the closest value within the axis.
 * @param {object} value The value to locate.
 * @return {number} The coordinate for the value.
 */
DvtAxisInfo.prototype.getBoundedCoordAt = function(value) {
  return null; // subclasses should override
};


/**
 * Returns the value for the specified coordinate along the axis.
 * @param {number} coord The coordinate along the axis.
 * @return {object} The value at that coordinate.
 */
DvtAxisInfo.prototype.getUnboundedValueAt = function(coord) {
  return null; // subclasses should override
};


/**
 * Returns the coordinate for the specified value.
 * @param {object} value The value to locate.
 * @return {number} The coordinate for the value.
 */
DvtAxisInfo.prototype.getUnboundedCoordAt = function(value) {
  return null; // subclasses should override
};


/**
 * Returns the baseline coordinate for the axis, if applicable.
 * @return {number} The baseline coordinate for the axis.
 */
DvtAxisInfo.prototype.getBaselineCoord = function() {
  return null;
};


/**
 * Returns if the labels of the horizontal axis are rotated by 90 degrees.
 * @return {boolean} Whether the labels are rotated.
 */
DvtAxisInfo.prototype.isLabelRotated = function() {
  return false;
};


/**
 * Creates a DvtText instance for the specified text label.
 * @param {DvtContext} context
 * @param {string} label The label string.
 * @param {number} coord The coordinate for the text.
 * @return {DvtOutputText}
 * @protected
 */
DvtAxisInfo.prototype.CreateLabel = function(context, label, coord) {
  var text;

  if (this.Position == 'tangential') {
    var vTol = 16 / 180 * Math.PI; // the mid area (15 degrees) where labels will be middle aligned.
    var hTol = 1 / 180 * Math.PI; // the tolerance (1 degree) where labels will be center aligned.

    var offset = 0.5 * parseInt(this.Options['tickLabel']['style'].getStyle('font-size'));
    var dist = this._radius + offset;
    if (coord < hTol || coord > 2 * Math.PI - hTol)
      dist += offset; // avoild collision with radial label
    text = new DvtOutputText(context, label, Math.round(dist * Math.sin(coord)), Math.round(-dist * Math.cos(coord)));

    // Align the label according to the angular position
    if (coord < hTol || Math.abs(coord - Math.PI) < hTol || coord > 2 * Math.PI - hTol)
      text.alignCenter();
    else if (coord < Math.PI)
      text.alignLeft();
    else
      text.alignRight();

    if (Math.abs(coord - Math.PI / 2) < vTol || Math.abs(coord - 3 * Math.PI / 2) < vTol)
      text.alignMiddle();
    else if (coord < Math.PI / 2 || coord > 3 * Math.PI / 2)
      text.alignBottom();
    else
      text.alignTop();
  }
  else {
    text = new DvtOutputText(context, label, coord, coord);
    text.alignMiddle();
    text.alignCenter();
  }

  text.setCSSStyle(this.Options['tickLabel']['style']);
  return text;
};


/**
 * Creates a DvtShape instance with the specified stroke and coordinate.
 * @param {DvtContext} context
 * @param {DvtSolidStroke} stroke The stroke for the grid line.
 * @param {number} coord The coordinate for the grid line.
 * @return {DvtShape}
 * @protected
 */
DvtAxisInfo.prototype.CreateGridLine = function(context, stroke, coord) {
  var line;
  var usePixelHinting = !DvtAgent.isTouchDevice() || DvtAgent.getDevicePixelRatio() > 1;
  if (this.Position == 'radial') {
    if (this.Options['polarGridShape'] == 'polygon') {
      var points = DvtPolygonUtils.getRegularPolygonPoints(0, 0, this.Options['_numGroups'], coord, 0);
      line = new DvtPolygon(context, points);
    }
    else
      line = new DvtCircle(context, 0, 0, coord);
    line.setInvisibleFill();
  }
  else if (this.Position == 'tangential') {
    line = new DvtLine(context, 0, 0, this._radius * Math.sin(coord), -this._radius * Math.cos(coord));
    if (coord % Math.PI / 2 < 0.01 && usePixelHinting) // use pixel hinting at 0, 90, 180, and 270 degrees
      line.setPixelHinting(true);
  }
  else {
    line = new DvtLine(context, coord, coord, coord, coord);
    if (usePixelHinting)
      line.setPixelHinting(true);
  }
  line.setStroke(stroke);
  line.setMouseEnabled(false);
  return line;
};


/**
 * Checks all the labels for the axis and returns whether they overlap.
 * @param {Array} labelDims An array of DvtRectangle objects that describe the x, y, height, width of the axis labels.
 * @param {number} skippedLabels The number of labels to skip. If skippedLabels is 1 then every other label will be skipped.
 * @return {boolean} True if any labels overlap.
 * @protected
 */
DvtAxisInfo.prototype.IsOverlapping = function(labelDims, skippedLabels) {
  // If there are no labels, return
  if (!labelDims || labelDims.length <= 0)
    return false;

  var isVert = (this.Position == 'left' || this.Position == 'right' || this.Position == 'radial');
  var isRTL = DvtAgent.isRightToLeft(this.getCtx());
  var gap = this.GetTickLabelGapSize();

  var pointA1, pointA2, pointB1, pointB2;
  for (var j = 0; j < labelDims.length; j += skippedLabels + 1) {
    if (labelDims[j] == null)
      continue;

    if (pointA1 == null || pointA2 == null) {
      // Set the first points
      if (isVert) {
        pointA1 = labelDims[j].y;
        pointA2 = labelDims[j].y + labelDims[j].h;
      } else {
        pointA1 = labelDims[j].x;
        pointA2 = labelDims[j].x + labelDims[j].w;
      }
      continue;
    }

    if (isVert) {
      pointB1 = labelDims[j].y;
      pointB2 = labelDims[j].y + labelDims[j].h;

      // Broken apart for clarity, next label may be above or below
      if (pointB1 >= pointA1 && pointB1 - gap < pointA2) // next label below
        return true;
      else if (pointB1 < pointA1 && pointB2 + gap > pointA1) // next label above
        return true;
    }
    else {
      pointB1 = labelDims[j].x;
      pointB2 = labelDims[j].x + labelDims[j].w;

      // Broken apart for clarity, next label is on the right for non-BIDI, left for BIDI
      if (!isRTL && (pointB1 - gap < pointA2))
        return true;
      else if (isRTL && (pointB2 + gap > pointA1))
        return true;
    }

    // Otherwise start evaluating from label j
    pointA1 = pointB1;
    pointA2 = pointB2;
  }
  return false;
};


/**
 * Returns the tick label gap size.
 * @return {number}
 * @protected
 */
DvtAxisInfo.prototype.GetTickLabelGapSize = function() {
  // Get font-size of label and create gap based on font-size
  // GroupAxis and TimeAxis have smaller gaps since these axes become less useable as more labels are dropped
  var fontSize = parseInt(this.Options['tickLabel']['style'].getStyle('font-size'));
  var gapHoriz = (this instanceof DvtGroupAxisInfo) ? fontSize * 0.3 : fontSize * 1.0;
  var gapVert = (this instanceof DvtGroupAxisInfo) ? fontSize * 0.1 : fontSize * 0.35;

  var isVert = (this.Position == 'left' || this.Position == 'right' || this.Position == 'radial');
  return (isVert || this.isLabelRotated()) ? gapVert : gapHoriz;
};


/**
 * Checks the labels for the axis and skips them as necessary.
 * @param {Array} labels An array of DvtText labels for the axis.
 * @param {Array} labelDims An array of DvtRectangle objects that describe the x, y, height, width of the axis labels.
 * @return {Array} The array of DvtText labels for the axis.
 * @protected
 */
DvtAxisInfo.prototype.SkipLabels = function(labels, labelDims) {
  var skippedLabels = 0;
  var bOverlaps = this.IsOverlapping(labelDims, skippedLabels);
  while (bOverlaps) {
    skippedLabels++;
    bOverlaps = this.IsOverlapping(labelDims, skippedLabels);
  }

  if (skippedLabels > 0) {
    var renderedLabels = [];
    for (var j = 0; j < labels.length; j += skippedLabels + 1) {
      renderedLabels.push(labels[j]);
    }
    return renderedLabels;
  } else {
    return labels;
  }
};


/**
 * Returns an array of DvtRectangle objects that describe the x, y, width, height of the axis labels.
 * @param {Array} labels An array of DvtText labels for the axis.
 * @param {DvtContainer} container
 * @return {Array} An array of DvtRectangle objects
 * @protected
 */
DvtAxisInfo.prototype.GetLabelDims = function(labels, container) {
  var labelDims = [];

  // Get the text dimensions
  for (var i = 0; i < labels.length; i++) {
    var text = labels[i];
    if (text == null) {
      labelDims.push(null);
    } else {
      var dims = text.measureDimensions(container);
      labelDims.push(dims);
    }
  }

  return labelDims;
};


/**
 * Returns an array of DvtRectangle objects that contains a conservative guess the x, y, width, height of the axis labels.
 * Assumes that the labels are center-middle aligned.
 * @param {Array} labels An array of DvtText labels for the axis.
 * @param {DvtContainer} container
 * @param {Number} fudgeFactor (optional) A factor the would be multiplied to the text width. If not provided, assumed to be 1.
 * @return {Array} An array of DvtRectangle objects
 * @protected
 */
DvtAxisInfo.prototype.GuessLabelDims = function(labels, container, fudgeFactor) {
  var labelDims = [];
  if (typeof fudgeFactor == 'undefined')
    fudgeFactor = 1;

  // Get the text dimensions
  for (var i = 0; i < labels.length; i++) {
    var text = labels[i];
    if (text == null) {
      labelDims.push(null);
    } else {
      // get a conservative estimate of the dimensions
      container.addChild(text);
      var estimatedSize = DvtTextUtils.guessTextDimensions(text);
      var estW = estimatedSize.w * fudgeFactor;
      var estH = estimatedSize.h;
      container.removeChild(text);

      var dims;
      if (this.isLabelRotated()) {
        dims = new DvtRectangle(text.getTranslateX() - estH / 2, text.getTranslateY() - estW / 2, estH, estW);
      } else {
        dims = new DvtRectangle(text.getX() - estW / 2, text.getY() - estH / 2, estW, estH);
      }
      labelDims.push(dims);
    }
  }

  return labelDims;
};


/**
 * Returns the number of major tick counts for the axis.
 * @return {number} The number of major tick counts.
 */
DvtAxisInfo.prototype.getMajorTickCount = function() {
  return null; // subclasses that allow major gridlines should implement
};


/**
 * Sets the number of major tick counts for the axis.
 * @param {number} count The number of major tick counts.
 */
DvtAxisInfo.prototype.setMajorTickCount = function(count) {
  // subclasses that allow major gridlines should implement
};


/**
 * Returns the number of minor tick counts for the axis.
 * @return {number} The number of minor tick counts.
 */
DvtAxisInfo.prototype.getMinorTickCount = function() {
  return null; // subclasses that allow minor gridlines should implement
};


/**
 * Sets the number of minor tick counts for the axis.
 * @param {number} count The number of minor tick counts.
 */
DvtAxisInfo.prototype.setMinorTickCount = function(count) {
  // subclasses that allow minor gridlines should implement
};


/**
 * Returns the major increment for the axis.
 * @return {number} The major increment.
 */
DvtAxisInfo.prototype.getMajorIncrement = function() {
  return null; // subclasses that allow major gridlines should implement
};


/**
 * Returns the minor increment for the axis.
 * @return {number} The minor increment.
 */
DvtAxisInfo.prototype.getMinorIncrement = function() {
  return null; // subclasses that allow minor gridlines should implement
};


/**
 * Returns the global min value of the axis.
 * @return {number} The global min value.
 */
DvtAxisInfo.prototype.getGlobalMin = function() {
  return this.GlobalMin;
};


/**
 * Returns the global max value of the axis.
 * @return {number} The global max value.
 */
DvtAxisInfo.prototype.getGlobalMax = function() {
  return this.GlobalMax;
};


/**
 * Returns the viewport min value of the axis.
 * @return {number} The viewport min value.
 */
DvtAxisInfo.prototype.getViewportMin = function() {
  return this.MinValue;
};


/**
 * Returns the viewport max value of the axis.
 * @return {number} The viewport max value.
 */
DvtAxisInfo.prototype.getViewportMax = function() {
  return this.MaxValue;
};


/**
 * Returns the data min value of the axis.
 * @return {number} The data min value.
 */
DvtAxisInfo.prototype.getDataMin = function() {
  return this.DataMin;
};


/**
 * Returns the data max value of the axis.
 * @return {number} The data max value.
 */
DvtAxisInfo.prototype.getDataMax = function() {
  return this.DataMax;
};


/**
 * Returns the minimum extent of the axis, i.e. the (minValue-maxValue) during maximum zoom.
 * @return {number} The minimum extent.
 */
DvtAxisInfo.prototype.getMinimumExtent = function() {
  return 0;
};


/**
 * Returns the start coord.
 * @return {number}
 */
DvtAxisInfo.prototype.getStartCoord = function() {
  return this.StartCoord;
};


/**
 * Returns the end coord.
 * @return {number}
 */
DvtAxisInfo.prototype.getEndCoord = function() {
  return this.EndCoord;
};


/**
 * Returns how much the axis labels overflow over the start coord.
 * @return {number}
 */
DvtAxisInfo.prototype.getStartOverflow = function() {
  return this.StartOverflow;
};


/**
 * Returns how much the axis labels overflow over the end coord.
 * @return {number}
 */
DvtAxisInfo.prototype.getEndOverflow = function() {
  return this.EndOverflow;
};
/**
 * Calculated axis information and drawable creation for a data axis.
 * @param {DvtContext} context
 * @param {object} options The object containing specifications and data for this component.
 * @param {DvtRectangle} availSpace The available space.
 * @class
 * @constructor
 * @extends {DvtAxisInfo}
 */
var DvtDataAxisInfo = function(context, options, availSpace) {
  this.Init(context, options, availSpace);
};

DvtObj.createSubclass(DvtDataAxisInfo, DvtAxisInfo, 'DvtDataAxisInfo');

DvtDataAxisInfo._MAX_NUMBER_OF_GRIDS_AUTO = 10;
DvtDataAxisInfo._MINOR_TICK_COUNT = 2;
DvtDataAxisInfo._MAX_ZOOM_FACTOR = 64;


/**
 * @override
 */
DvtDataAxisInfo.prototype.Init = function(context, options, availSpace) {
  DvtDataAxisInfo.superclass.Init.call(this, context, options, availSpace);

  // Figure out the coords for the min/max values
  if (this.Position == 'top' || this.Position == 'bottom') {
    // Provide at least the minimum buffer at each side to accommodate labels
    if (options['tickLabel']['rendered'] != 'off' && options['rendered'] != 'off') {
      this.StartOverflow = Math.max(DvtAxis.MINIMUM_AXIS_BUFFER - options['leftBuffer'], 0);
      this.EndOverflow = Math.max(DvtAxis.MINIMUM_AXIS_BUFFER - options['rightBuffer'], 0);
    }

    // Axis is horizontal, so flip for BIDI if needed
    if (DvtAgent.isRightToLeft(context)) {
      this._minCoord = this.EndCoord - this.EndOverflow;
      this._maxCoord = this.StartCoord + this.StartOverflow;
    }
    else {
      this._minCoord = this.StartCoord + this.StartOverflow;
      this._maxCoord = this.EndCoord - this.EndOverflow;
    }
  }
  else if (this.Position == 'tangential' || this.Position == 'radial') {
    this._minCoord = this.StartCoord;
    this._maxCoord = this.EndCoord;
  }
  else {
    this._minCoord = this.EndCoord;
    this._maxCoord = this.StartCoord;
  }

  this.GlobalMin = options['min'];
  this.GlobalMax = options['max'];
  this.MinValue = options['viewportMin'] == null ? this.GlobalMin : options['viewportMin'];
  this.MaxValue = options['viewportMax'] == null ? this.GlobalMax : options['viewportMax'];

  this._majorIncrement = options['step'];
  this._minorIncrement = options['minorStep'];
  this._minMajorIncrement = options['minStep'];
  this._converter = null;
  if (options['tickLabel'] != null) {
    this._converter = options['tickLabel']['converter'];
  }

  this.DataMin = options['dataMin'];
  this.DataMax = options['dataMax'];
  this._calcAxisExtents();
};


/**
 * Returns the value correspoding to the first tick label (or gridline) of the axis.
 * @return {number} The value of the min label.
 */
DvtDataAxisInfo.prototype.getMinLabel = function() {
  if (this.Options['baselineScaling'] == 'zero' || (this.Options['_continuousExtent'] == 'on' && this.Options['min'] == null)) {
    // the tickLabels and gridlines should be at integer intervals from zero
    return Math.ceil(this.MinValue / this._majorIncrement) * this._majorIncrement;
  } else {
    // the tickLabels and gridlines should be at integer intervals from the globalMin
    return Math.ceil((this.MinValue - this.GlobalMin) / this._majorIncrement) * this._majorIncrement + this.GlobalMin;
  }
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getLabels = function(context, levelIdx) {
  if (levelIdx && levelIdx > 0) // data axis has only one level
    return null;

  var labels = [];
  var labelDims = [];
  var container = context.getStage();
  var isTangential = this.Position == 'tangential';

  // when scaling is set then init formatter
  if (this.Options['tickLabel'] && this.Options['tickLabel']['scaling']) {
    var autoPrecision = this.Options['tickLabel']['autoPrecision'] ? this.Options['tickLabel']['autoPrecision'] : 'on';
    this._axisValueFormatter = new DvtLinearScaleAxisValueFormatter(this.MinValue, this.MaxValue, this._majorIncrement, this.Options['tickLabel']['scaling'], autoPrecision);
  }

  // Iterate on an integer to reduce rounding error.  We use <= since the first
  // tick is not counted in the tick count.
  for (var i = 0; i <= this._majorTickCount; i++) {
    var value = i * this._majorIncrement + this.getMinLabel();
    if (isTangential && value == this.MaxValue)
      continue; // the last label of tangential axis is skipped bc it overlaps the first.
    var label = this._formatValue(value);
    var coord = this.getUnboundedCoordAt(value);
    var text = this.CreateLabel(context, label, coord);
    labels.push(text);
  }

  if (!isTangential) {
    labelDims = this.GetLabelDims(labels, container);
    labels = this.SkipLabels(labels, labelDims);
  }

  return labels;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getAxisLine = function(context) {
  var axisLineOptions = this.Options['axisLine'];
  if (axisLineOptions['rendered'] == 'on') {
    // TODO hzhang Check Axis Line behavior for negative/mixed axes.
    var axisLineStroke = new DvtSolidStroke(axisLineOptions['lineColor'], 1, axisLineOptions['lineWidth']);
    return this.CreateGridLine(context, axisLineStroke, this._maxCoord);
  }
  else
    return null;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMajorGridLines = function(context) {
  var gridlines = [];
  // Major Ticks
  var coord, line;

  var majorTickOptions = this.Options['majorTick'];
  if (majorTickOptions['rendered'] == 'off')
    return gridlines;

  var lineColor = majorTickOptions['lineColor'];
  var majorTickStroke = new DvtSolidStroke(lineColor, 1, majorTickOptions['lineWidth']);
  if (majorTickOptions['lineStyle'])
    majorTickStroke.setStyle(DvtStroke.convertTypeString(majorTickOptions['lineStyle']));

  // Construct the baseline stroke
  var baselineStroke = majorTickStroke.clone();
  if (majorTickOptions['baselineColor'] != 'inherit') {
    var baselineColor;
    if (majorTickOptions['baselineColor'] == 'auto')
      baselineColor = DvtColorUtils.getDarker(lineColor, 0.4); // derive the baselineColor from lineColor
    else
      baselineColor = majorTickOptions['baselineColor'];
    baselineStroke.setColor(baselineColor);
  }

  baselineStroke.setWidth(majorTickOptions['baselineWidth'] != null ? majorTickOptions['baselineWidth'] : majorTickOptions['lineWidth']);
  baselineStroke.setStyle(DvtStroke.convertTypeString(majorTickOptions['baselineStyle'] ? majorTickOptions['baselineStyle'] : majorTickOptions['lineStyle']));

  // Iterate on an integer to reduce rounding error.  We use <= since the first
  // tick is not counted in the tick count.
  for (var i = 0; i <= this._majorTickCount; i++) {
    var value = i * this._majorIncrement + this.getMinLabel();
    if (this.Position == 'tangential' && value == this.MaxValue)
      continue;
    var stroke = (value == 0) ? baselineStroke : majorTickStroke;
    coord = this.getUnboundedCoordAt(value);
    line = this.CreateGridLine(context, stroke, coord);
    gridlines.push(line);
  }

  return gridlines;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMinorGridLines = function(context) {
  var gridlines = [];
  // Minor Ticks
  var coord, line;

  var minorTickOptions = this.Options['minorTick'];
  if (minorTickOptions['rendered'] != 'on')
    return gridlines;

  var minorTickStroke = new DvtSolidStroke(minorTickOptions['lineColor'], 1, minorTickOptions['lineWidth']);
  if (minorTickOptions['lineStyle'])
    minorTickStroke.setStyle(DvtStroke.convertTypeString(minorTickOptions['lineStyle']));

  // Iterate on an integer to reduce rounding error.  We use <= since the first
  // tick is not counted in the tick count.
  // Start from i=-1 so that minorTicks that should get rendered before the first majorTick are evaluated
  for (var i = -1; i <= this._majorTickCount; i++) {
    var value = i * this._majorIncrement + this.getMinLabel();
    for (var j = 1; j < this._minorTickCount; j++) {
      var minorValue = value + (j * this._minorIncrement);
      if (minorValue > this.MaxValue)
        break;
      if (minorValue < this.MinValue)
        continue;
      coord = this.getUnboundedCoordAt(minorValue);
      line = this.CreateGridLine(context, minorTickStroke, coord);
      gridlines.push(line);
    }
  }
  return gridlines;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getValueAt = function(coord) {
  var minCoord = Math.min(this._minCoord, this._maxCoord);
  var maxCoord = Math.max(this._minCoord, this._maxCoord);

  // Return null if the coord is outside of the axis
  if (coord < minCoord || coord > maxCoord)
    return null;

  return this.getUnboundedValueAt(coord);
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getCoordAt = function(value) {
  // Return null if the value is outside of the axis
  if (value < this.MinValue || value > this.MaxValue)
    return null;

  return this.getUnboundedCoordAt(value);
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getBoundedValueAt = function(coord) {
  var minCoord = Math.min(this._minCoord, this._maxCoord);
  var maxCoord = Math.max(this._minCoord, this._maxCoord);

  if (coord < minCoord)
    coord = minCoord;
  else if (coord > maxCoord)
    coord = maxCoord;

  return this.getUnboundedValueAt(coord);
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getBoundedCoordAt = function(value) {
  if (value < this.MinValue)
    value = this.MinValue;
  else if (value > this.MaxValue)
    value = this.MaxValue;

  return this.getUnboundedCoordAt(value);
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getUnboundedValueAt = function(coord) {
  var ratio = (coord - this._minCoord) / (this._maxCoord - this._minCoord);
  return this.MinValue + (ratio * (this.MaxValue - this.MinValue));
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getUnboundedCoordAt = function(value) {
  var ratio = (value - this.MinValue) / (this.MaxValue - this.MinValue);
  return this._minCoord + (ratio * (this._maxCoord - this._minCoord));
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getBaselineCoord = function() {
  // First find the value of the baseline
  var baseline = 0;
  if (this.MaxValue < 0)
    baseline = this.MaxValue;
  else if (this.MinValue > 0)
    baseline = this.MinValue;

  // Return its coordinate
  return this.getCoordAt(baseline);
};


/**
 * @param {number} value
 * @return {string} Formatted value.
 * @private
 */
DvtDataAxisInfo.prototype._formatValue = function(value) {

  if (this._converter && (this._converter['getAsString'] || this._converter['format'])) {
    if (this._axisValueFormatter)
      return this._axisValueFormatter.format(value, this._converter);
    else if (this._converter['getAsString'])
      return this._converter['getAsString'](value);
    else if (this._converter['format'])
      return this._converter['format'](value);
  }

  else if (this._axisValueFormatter)
    return this._axisValueFormatter.format(value);

  else {
    // set the # of decimals of the value to the # of decimals of the major increment
    var t = Math.log(this._majorIncrement) / Math.log(10);
    var decimals = Math.max(Math.ceil(-t), 0);
    return value.toFixed(decimals);
  }
};


/**
 * Determines the number of major and minor tick counts and increments for the axis if values were not given.
 * The default minor tick count is 2.
 * @param {number} scaleUnit The scale unit of the axis.
 * @private
 */
DvtDataAxisInfo.prototype._calcMajorMinorIncr = function(scaleUnit) {
  this._majorIncrement = this._majorIncrement ? this._majorIncrement : scaleUnit;

  // Bug 17221659 - y and y2 aligntickmarks doesn't work if min/max is set
  if (this.Options['alignTickMarks'] == 'on' && this.Options['_majorTickCount']) {
    this._majorTickCount = this.Options['_majorTickCount'];
    // Re-calculate majorIncrement while adhering to the tick count saved when axis was aligned
    this._majorIncrement = (this.MaxValue - this.getMinLabel()) / this._majorTickCount;

    // Bug 17568354 - y2 axis should show better labels when tick marks are aligned
    var testVal = Math.pow(10, Math.ceil((Math.log(this._majorIncrement) / Math.log(10)) - 1));
    var firstDigit = this._majorIncrement / testVal;
    if (firstDigit > 1 && firstDigit <= 1.5)
      firstDigit = 1.5;
    else
      firstDigit = Math.ceil(firstDigit);

    this._majorIncrement = firstDigit * testVal;
    this.MaxValue = (this._majorIncrement * this._majorTickCount) + this.getMinLabel();
  }
  else {
    if (this._minMajorIncrement != null && this._majorIncrement < this._minMajorIncrement)
      this._majorIncrement = this._minMajorIncrement;

    this._majorTickCount = (this.MaxValue - this.getMinLabel()) / this._majorIncrement;
  }

  if (this._minorIncrement != null && this._majorIncrement / this._minorIncrement >= 2)
    this._minorTickCount = this.Options['_minorTickCount'] ? this.Options['_minorTickCount'] : this._majorIncrement / this._minorIncrement;
  else
    this._minorTickCount = DvtDataAxisInfo._MINOR_TICK_COUNT;
  this._minorIncrement = this._majorIncrement / this._minorTickCount;
};


/**
 * Determines the axis extents based on given start and end value
 * or calculated from the min and max data values of the chart.
 * @private
 */
DvtDataAxisInfo.prototype._calcAxisExtents = function() {
  var zeroBaseline = this.Options['baselineScaling'] == 'zero';
  var continuousExtent = this.Options['_continuousExtent'] == 'on';

  // Include 0 in the axis if we're scaling from the baseline
  if (zeroBaseline) {
    this.DataMin = Math.min(0, this.DataMin);
    this.DataMax = Math.max(0, this.DataMax);
  }

  var scaleUnit = this._calcAxisScale((this.GlobalMin != null ? this.GlobalMin : this.DataMin),
                                      (this.GlobalMax != null ? this.GlobalMax : this.DataMax));

  // If there's only a single value on the axis, we need to adjust the
  // this.DataMin and this.DataMax to produce a nice looking axis with around 6 ticks.
  if (this.DataMin == this.DataMax) {
    if (this.DataMin == 0)
      this.DataMax += 5 * scaleUnit;
    else {
      this.DataMin -= 3 * scaleUnit;
      this.DataMax += 2 * scaleUnit;
    }
  }

  // Set the default global min
  if (this.GlobalMin == null) {
    if (zeroBaseline && this.DataMin >= 0) {
      this.GlobalMin = 0;
    } else if (continuousExtent) { // allow smooth pan/zoom transition
      this.GlobalMin = this.DataMin - (this.DataMax - this.DataMin) * 0.1;
      if (this.DataMin >= 0)
        this.GlobalMin = Math.max(this.GlobalMin, 0);
    } else if (!zeroBaseline && this.GlobalMax != null) {
      this.GlobalMin = this.GlobalMax;
      while (this.GlobalMin > this.DataMin)
        this.GlobalMin -= scaleUnit;
    } else {
      this.GlobalMin = Math.floor(this.DataMin / scaleUnit) * scaleUnit;
    }
  }

  // Set the default global max
  if (this.GlobalMax == null) {
    if (zeroBaseline && this.DataMax <= 0) {
      this.GlobalMax = 0;
    } else if (continuousExtent) { // allow smooth pan/zoom transition
      this.GlobalMax = this.DataMax + (this.DataMax - this.DataMin) * 0.1;
      if (this.DataMax <= 0)
        this.GlobalMax = Math.min(this.GlobalMax, 0);
    } else if (!zeroBaseline) {
      this.GlobalMax = this.GlobalMin;
      while (this.GlobalMax <= this.DataMax)
        this.GlobalMax += scaleUnit;
    } else {
      this.GlobalMax = (Math.floor(this.DataMax / scaleUnit) + 1) * scaleUnit;
    }
  }

  if (this.GlobalMax == this.GlobalMin) { // happens if this.DataMin == this.DataMax == 0
    this.GlobalMax = 100;
    this.GlobalMin = 0;
    scaleUnit = (this.GlobalMax - this.GlobalMin) / DvtDataAxisInfo._MAX_NUMBER_OF_GRIDS_AUTO;
  }

  if (this.MinValue == null)
    this.MinValue = this.GlobalMin;
  if (this.MaxValue == null)
    this.MaxValue = this.GlobalMax;

  // Recalc the scale unit if the axis viewport is limited
  if (this.MinValue != this.GlobalMin || this.MaxValue != this.GlobalMax)
    scaleUnit = this._calcAxisScale(this.MinValue, this.MaxValue);

  // Calculate major and minor gridlines
  this._calcMajorMinorIncr(scaleUnit);
};


/**
 * Determines the scale unit of the axis based on a given start and end axis extent.
 * @param {number} min The start data value for the axis.
 * @param {number} max The end data value for the axis.
 * @return {number} The scale unit of the axis.
 * @private
 */
DvtDataAxisInfo.prototype._calcAxisScale = function(min, max) {
  if (this._majorIncrement)
    return this._majorIncrement;

  var spread = max - min;
  if (spread == 0) {
    if (min == 0)
      return 10;
    else
      return Math.pow(10, Math.floor(Math.log(min) / Math.LN10) - 1);
  }

  var t = Math.log(spread) / Math.log(10);
  var testVal = Math.pow(10, Math.ceil(t) - 2);
  var first2Digits = Math.round(spread / testVal);

  // Aesthetically choose a scaling factor limiting to a max number of steps
  var scaleFactor = 1;
  if (first2Digits >= 10 && first2Digits <= 14)
    scaleFactor = 2;
  else if (first2Digits >= 15 && first2Digits <= 19)
    scaleFactor = 3;
  else if (first2Digits >= 20 && first2Digits <= 24)
    scaleFactor = 4;
  else if (first2Digits >= 25 && first2Digits <= 45)
    scaleFactor = 5;
  else if (first2Digits >= 46 && first2Digits <= 80)
    scaleFactor = 10;
  else
    scaleFactor = 20;

  return scaleFactor * testVal;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMajorTickCount = function() {
  return this._majorTickCount;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.setMajorTickCount = function(count) {
  this._majorTickCount = count;
  this._majorIncrement = (this.MaxValue - this.MinValue) / this._majorTickCount;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMinorTickCount = function() {
  return this._minorTickCount;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.setMinorTickCount = function(count) {
  this._minorTickCount = count;
  this._minorIncrement = this._majorIncrement / this._minorTickCount;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMajorIncrement = function() {
  return this._majorIncrement;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMinorIncrement = function() {
  return this._minorIncrement;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getMinimumExtent = function() {
  return (this.GlobalMax - this.GlobalMin) / DvtDataAxisInfo._MAX_ZOOM_FACTOR;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getStartOverflow = function() {
  if ((this.Position == 'top' || this.Position == 'bottom') && DvtAgent.isRightToLeft(this.getCtx()))
    return this.EndOverflow;
  else
    return this.StartOverflow;
};


/**
 * @override
 */
DvtDataAxisInfo.prototype.getEndOverflow = function() {
  if ((this.Position == 'top' || this.Position == 'bottom') && DvtAgent.isRightToLeft(this.getCtx()))
    return this.StartOverflow;
  else
    return this.EndOverflow;
};
/**
 * Calculated axis information and drawable creation for a group axis.
 * @param {DvtContext} context
 * @param {object} options The object containing specifications and data for this component.
 * @param {DvtRectangle} availSpace The available space.
 * @class
 * @constructor
 * @extends {DvtAxisInfo}
 */
var DvtGroupAxisInfo = function(context, options, availSpace) {
  this.Init(context, options, availSpace);
};

DvtObj.createSubclass(DvtGroupAxisInfo, DvtAxisInfo, 'DvtGroupAxisInfo');


/**
 * @override
 */
DvtGroupAxisInfo.prototype.Init = function(context, options, availSpace) {
  DvtGroupAxisInfo.superclass.Init.call(this, context, options, availSpace);

  // Flip horizontal axes for BIDI
  var isRTL = DvtAgent.isRightToLeft(context);
  if ((this.Position == 'top' || this.Position == 'bottom') && isRTL) {
    var temp = this.StartCoord;
    this.StartCoord = this.EndCoord;
    this.EndCoord = temp;
  }

  // Cache the groups
  this._groups = options['groups'];

  // Calculate the increment and add offsets if specified
  var endOffset = (options['endGroupOffset'] > 0) ? Number(options['endGroupOffset']) : 0;
  var startOffset = (options['startGroupOffset'] > 0) ? Number(options['startGroupOffset']) : 0;

  // Set the axis min/max
  this.DataMin = 0;
  this.DataMax = this._groups.length - 1;

  this.GlobalMin = options['min'] == null ? this.DataMin - startOffset : options['min'];
  this.GlobalMax = options['max'] == null ? this.DataMax + endOffset : options['max'];

  this.MinValue = options['viewportMin'] == null ? this.GlobalMin : options['viewportMin'];
  this.MaxValue = options['viewportMax'] == null ? this.GlobalMax : options['viewportMax'];

  // Set min/max by start/endGroup
  var startIndex = this.getIndexByLabel(options['viewportStartGroup']);
  var endIndex = this.getIndexByLabel(options['viewportEndGroup']);
  if (startIndex != -1)
    this.MinValue = startIndex - startOffset;
  if (endIndex != -1)
    this.MaxValue = endIndex + endOffset;

  this._startBuffer = isRTL ? options['rightBuffer'] : options['leftBuffer'];
  this._endBuffer = isRTL ? options['leftBuffer'] : options['rightBuffer'];

  this._isLabelRotated = false;

  this._renderGridAtLabels = options['_renderGridAtLabels'];

  this._level1Labels = null;
};


/**
 * Rotates the labels of the horizontal axis by 90 degrees and skips the labels if necessary.
 * @param {Array} labels An array of DvtText labels for the axis.
 * @param {DvtContainer} container
 * @param {number} overflow How much overflow the rotated labels will have.
 * @return {Array} The array of DvtText labels for the axis.
 * @private
 */
DvtGroupAxisInfo.prototype._rotateLabels = function(labels, container, overflow) {
  var text;
  var x;
  var isRTL = DvtAgent.isRightToLeft(this.getCtx());

  this._isLabelRotated = true;
  this._setOverflow(overflow, overflow, labels);

  for (var i = 0; i < labels.length; i++) {
    text = labels[i];
    if (text == null)
      continue;
    x = text.getX();
    text.setX(0);
    text.setY(0);
    if (isRTL)
      text.setRotation(Math.PI / 2);
    else
      text.setRotation(3 * Math.PI / 2);
    text.setTranslateX(x);
  }

  var labelDims = this.GuessLabelDims(labels, container); // the guess returns the exact heights

  return this.SkipLabels(labels, labelDims);
};


/**
 * @override
 */
DvtGroupAxisInfo.prototype.isLabelRotated = function() {
  return this._isLabelRotated;
};


/**
 * Sets the start/end overflow of the axis.
 * @param {number} startOverflow How much the first label overflows beyond the start coord.
 * @param {number} endOverflow How much the last label overflows beyonod the end coord.
 * @param {array} labels An array of DvtText labels. The x of the labels will be adjusted according to the overflow amount.
 * @private
 */
DvtGroupAxisInfo.prototype._setOverflow = function(startOverflow, endOverflow, labels) {
  startOverflow = Math.max(startOverflow - this._startBuffer, 0);
  endOverflow = Math.max(endOverflow - this._endBuffer, 0);

  // Revert the start/endCoord to the original positions before applying the new overflow values
  var isRTL = DvtAgent.isRightToLeft(this.getCtx());
  this.StartCoord += (startOverflow - this.StartOverflow) * (isRTL ? -1 : 1);
  this.EndCoord -= (endOverflow - this.EndOverflow) * (isRTL ? -1 : 1);

  // Adjust the label coords
  for (var i = 0; i < labels.length; i++) {
    var text = labels[i];
    if (text)
      text.setX(this.getCoordAt(i));
  }

  this.StartOverflow = startOverflow;
  this.EndOverflow = endOverflow;
};

/**
 * @override
 */
DvtGroupAxisInfo.prototype.getLabels = function(context, levelIdx) {
  if (levelIdx && levelIdx > 0) // group axis has only one level
    return null;

  if (!this._level1Labels)
    this._level1Labels = this._generateLabels(context);

  return this._level1Labels;

};

/**
 * Generates the labels
 * @param {DvtContext} context
 * @return {Array} The labels for this axis
 * @private
 */
DvtGroupAxisInfo.prototype._generateLabels = function(context) {

  var labels = [];
  var container = context.getStage();
  var isHoriz = this.Position == 'top' || this.Position == 'bottom';
  var isRTL = DvtAgent.isRightToLeft(context);

  // Iterate and create the labels
  var numLabels = this._groups.length;
  var firstLabel, lastLabel;
  for (var i = 0; i < numLabels; i++) {
    // Get the label from the group
    var label = this.getLabelAt(i);

    // Create and position the label
    var coord = this.getCoordAt(i);
    if (coord != null) {
      var text = this.CreateLabel(context, label, coord);
      labels.push(text);

      // Store first and last label
      if (!firstLabel)
        firstLabel = text;
      lastLabel = text;
    }
    else
      labels.push(null);
  }

  if (this.Position == 'tangential') // for polar charts, no further computation is needed
    return labels;

  var firstLabelDim = firstLabel.measureDimensions();

  if (isHoriz) {
    var startOverflow, endOverflow;
    if (this.Options['_startOverflow'] != null && this.Options['_endOverflow'] != null) {
      // Use the preset value if available (during z&s animation)
      startOverflow = this.Options['_startOverflow'];
      endOverflow = this.Options['_endOverflow'];
    }
    else {
      // Set the overflow depending on how much the first and the last label go over the bounds
      var lastLabelDim = lastLabel.measureDimensions();
      startOverflow = isRTL ? firstLabelDim.w + firstLabelDim.x - this.StartCoord : this.StartCoord - firstLabelDim.x;
      endOverflow = isRTL ? this.EndCoord - lastLabelDim.x : lastLabelDim.w + lastLabelDim.x - this.EndCoord;
    }

    if (startOverflow > this._startBuffer || endOverflow > this._endBuffer)
      this._setOverflow(startOverflow, endOverflow, labels);
  }

  var labelDims = []; // actual dims
  var minLabelDims = this.GuessLabelDims(labels, container, 0.3); // minimum estimate
  var maxLabelDims = this.GuessLabelDims(labels, container);      // maximum estimate

  if (!this.IsOverlapping(maxLabelDims, 0))
    return labels; // all labels can fit

  // Rotate and skip the labels if necessary
  if (isHoriz) { // horizontal axis
    if (this.Options['tickLabel']['rotation'] == 'auto') {
      if (this.IsOverlapping(minLabelDims, 0)) {
        return this._rotateLabels(labels, container, firstLabelDim.h / 2);
      } else {
        labelDims = this.GetLabelDims(labels, container);
        if (this.IsOverlapping(labelDims, 0))
          return this._rotateLabels(labels, container, firstLabelDim.h / 2);
        else
          return labels;  // all labels can fit
      }
    } else { // no rotation
      labelDims = this.GetLabelDims(labels, container); // get actual dims for skipping
      return this.SkipLabels(labels, labelDims);
    }
  } else { // vertical axis
    return this.SkipLabels(labels, maxLabelDims); // maxLabelDims contain the actual heights
  }
};


/**
 * @override
 */
DvtGroupAxisInfo.prototype.getAxisLine = function(context) {
  var axisLineOptions = this.Options['axisLine'];
  if (axisLineOptions['rendered'] == 'on') {
    // Create and return the axis line
    var axisLineStroke = new DvtSolidStroke(axisLineOptions['lineColor'], 1, axisLineOptions['lineWidth']);
    return this.CreateGridLine(context, axisLineStroke, 0);
  }
  else
    return null;
};


/**
 * @override
 */
DvtGroupAxisInfo.prototype.getMajorGridLines = function(context) {
  var gridlines = [];

  // Major Ticks
  var coord, line;

  var majorTickOptions = this.Options['majorTick'];
  var majorTickStroke = new DvtSolidStroke(majorTickOptions['lineColor'], 1, majorTickOptions['lineWidth']);
  if (majorTickOptions['lineStyle'])
    majorTickStroke.setStyle(DvtStroke.convertTypeString(majorTickOptions['lineStyle']));

  var rendered = majorTickOptions['rendered'];
  if (rendered == 'on' || (rendered == 'auto' && this.Position == 'tangential')) {
    var numGroups = this._groups.length;

    for (var i = 0; i < numGroups; i++) {
      /* If placing gridlines at labels, use the coordinates at the labels
       * Else if placing gridlines in between labels, use the value halfway between two consecutive coordinates*/
      if (this._renderGridAtLabels)
        coord = this.getCoordAt(i);
      else {
        // Check to see if we are not an edge case
        if (this.getCoordAt(i + .5))
          coord = this.getCoordAt(i + .5);
        // If we are at edge case don't draw a gridline
        else
          continue;
      }

      if (coord != null) {
        line = this.CreateGridLine(context, majorTickStroke, coord);
        gridlines.push(line);
      }

    }
  }

  return gridlines;
};


/**
 * @return {number} The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getValueAt = function(coord) {
  var minCoord = Math.min(this.StartCoord, this.EndCoord);
  var maxCoord = Math.max(this.StartCoord, this.EndCoord);

  // Return null if the coord is outside of the axis
  if (coord < minCoord || coord > maxCoord)
    return null;

  return this.getUnboundedValueAt(coord);
};


/**
 * @param {number} value The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getCoordAt = function(value) {
  if (value < this.MinValue || value > this.MaxValue)
    return null;
  else
    return this.getUnboundedCoordAt(value);
};


/**
 * @return {number} The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getBoundedValueAt = function(coord) {
  var minCoord = Math.min(this.StartCoord, this.EndCoord);
  var maxCoord = Math.max(this.StartCoord, this.EndCoord);

  if (coord < minCoord)
    coord = minCoord;
  else if (coord > maxCoord)
    coord = maxCoord;

  return this.getUnboundedValueAt(coord);
};


/**
 * @param {number} value The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getBoundedCoordAt = function(value) {
  if (value < this.MinValue)
    value = this.MinValue;
  else if (value >= this.MaxValue)
    value = this.MaxValue;

  return this.getUnboundedCoordAt(value);
};


/**
 * @return {number} The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getUnboundedValueAt = function(coord) {
  var incr = (this.EndCoord - this.StartCoord) / (this.MaxValue - this.MinValue);
  return this.MinValue + (coord - this.StartCoord) / incr;
};


/**
 * @param {number} value The group index.
 * @override
 */
DvtGroupAxisInfo.prototype.getUnboundedCoordAt = function(value) {
  var incr = (this.EndCoord - this.StartCoord) / (this.MaxValue - this.MinValue);
  return this.StartCoord + (value - this.MinValue) * incr;
};


/**
 * Returns the group label for the specified group.
 * @param {number} index The group index.
 * @return {string} The group label.
 */
DvtGroupAxisInfo.prototype.getLabelAt = function(index) {
  index = Math.round(index);
  if (index < 0 || index >= this._groups.length)
    return null;

  var label = this._groups[index];
  if (label && label.name)
    label = label.name;
  return label;
};


/**
 * Returns the index for the specified group label.
 * @param {string} label The group label.
 * @return {number} The group index. -1 if the group doesn't exist.
 */
DvtGroupAxisInfo.prototype.getIndexByLabel = function(label) {
  if (label == null)
    return -1;

  var index = -1;
  for (var i = 0; i < this._groups.length; i++) {
    if (label == this.getLabelAt(i)) {
      index = i;
      break;
    }
  }
  return index;
};


/**
 * @override
 */
DvtGroupAxisInfo.prototype.getMinimumExtent = function() {
  return 1;
};
/**
 * Formatter for an axis with a linear scale.
 * Following cases can occur:
 * 1. scaling is set to none:
 *    No scaling is used in this case.
 * 2. scaling is set to auto, null or undefined:
 *    Scaling is computed. The nearest (less or equal) known scale is used. Regarding fraction part, if autoPrecision equals "on" then the count of significant decimal places
 *    is based on tickStep otherwise fraction part is not formatted.
 * 3. otherwise
 *    Defined scaling is used.
 *    Examples (autoPrecision = "on"):
 *    minValue = 0, maxValue=10000, tickStep=1000, scale="thousand" -> formatted axis values: 0K , ..., 10K
 *    minValue = 0, maxValue=100, tickStep=10, scale="thousand" -> formatted axis values: 0.00K, 0.01K, ..., 0.10K
 *
 * @param {object} bundle translations bundle
 * @param {number} minValue the minimum value on the axis
 * @param {number} maxValue the maximum value on the axis
 * @param {number} tickStep the tick step between values on the axis
 * @param {string} scale the scale of values on the axis; if null or undefined then auto scaling is used.
 * @param {string} autoPrecision "on" if auto precision should be applied otherwise "off"; if null or undefined then auto precision is applied.
 * @constructor
 */
var DvtLinearScaleAxisValueFormatter = function(minValue, maxValue, tickStep, scale, autoPrecision) {
  var bundle = new DvtUtilBundle();
  DvtAbstractAxisValueFormatter.call(this, bundle);
  this.Init(minValue, maxValue, tickStep, scale, autoPrecision);
};

DvtObj.createSubclass(DvtLinearScaleAxisValueFormatter, DvtAbstractAxisValueFormatter, 'DvtLinearScaleAxisValueFormatter');


/**
 * Allowed scales that can be used as formatter scale param values
 */
DvtLinearScaleAxisValueFormatter.SCALE_NONE = 'none';
DvtLinearScaleAxisValueFormatter.SCALE_AUTO = 'auto';
DvtLinearScaleAxisValueFormatter.SCALE_THOUSAND = 'thousand';
DvtLinearScaleAxisValueFormatter.SCALE_MILLION = 'million';
DvtLinearScaleAxisValueFormatter.SCALE_BILLION = 'billion';
DvtLinearScaleAxisValueFormatter.SCALE_TRILLION = 'trillion';
DvtLinearScaleAxisValueFormatter.SCALE_QUADRILLION = 'quadrillion';


/**
 * The scaling factor difference between successive scale values
 */
DvtLinearScaleAxisValueFormatter.SCALING_FACTOR_DIFFERENCE = 3;


/**
 * Initializes the instance.
 */
DvtLinearScaleAxisValueFormatter.prototype.Init = function(minValue, maxValue, tickStep, scale, autoPrecision) {
  // array of successive scale values
  this._scales = {
  };
  // array of scale values ordered by scale factor asc
  this._scalesOrder = [];
  // mapping of scale factors to corresponding scale objects
  this._factorToScaleMapping = {
  };

  this.InitScales();
  this.InitFormatter(minValue, maxValue, tickStep, scale, autoPrecision);
};


/**
 * Initializes scale objects.
 * @protected
 *
 */
DvtLinearScaleAxisValueFormatter.prototype.InitScales = function() {
  /**
   * Creates scale object and refreshes formatter properties using it.
   * @param {string} scaleName one of allowed scale names (e.g. DvtLinearScaleAxisValueFormatter.SCALE_THOUSAND)
   * @param {number} scaleFactor scale factor of corresponding scale, i.e. 'x' such that 10^x represents corresponding scale (e.g. for scale DvtLinearScaleAxisValueFormatter.SCALE_THOUSAND x = 3)
   * @param {string} scaleBundleSuffix translation key which value (translated) represents given scale (e.g. for DvtLinearScaleAxisValueFormatter.SCALE_THOUSAND an translated english suffix is 'K')
   */
  var createScale = function(scaleName, scaleFactor, scaleKey) {
    var suffix;
    if (this.GetBundle()) {
      if (scaleKey) {
        // when bundle and bundle suffix is defined then init suffix
        suffix = this.GetBundle().getTranslatedString(scaleKey, null);
      }
    }

    var scale = {
      scaleFactor: scaleFactor, localizedSuffix: suffix
    };

    // update private properties
    this._scales[scaleName] = scale;
    this._scalesOrder.push(scale);
    this._factorToScaleMapping[scaleFactor] = scale;
  };

  var diff = DvtLinearScaleAxisValueFormatter.SCALING_FACTOR_DIFFERENCE;

  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_NONE, 0 * diff);
  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_THOUSAND, 1 * diff, 'SCALING_SUFFIX_THOUSAND');
  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_MILLION, 2 * diff, 'SCALING_SUFFIX_MILLION');
  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_BILLION, 3 * diff, 'SCALING_SUFFIX_BILLION');
  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_TRILLION, 4 * diff, 'SCALING_SUFFIX_TRILLION');
  createScale.call(this, DvtLinearScaleAxisValueFormatter.SCALE_QUADRILLION, 5 * diff, 'SCALING_SUFFIX_QUADRILLION');

  // sort _scalesOrder array
  this._scalesOrder.sort(function(scale1, scale2) {
    if (scale1.scaleFactor < scale2.scaleFactor) {
      return - 1;
    }
    else if (scale1.scaleFactor > scale2.scaleFactor) {
      return 1;
    }
    else {
      return 0;
    }
  });
};


/**
 * Initializes properties used for values formatting (e.g. scale factor that should be applied etc.).
 *
 * @param {number} minValue the minimum value on the axis
 * @param {number} maxValue the maximum value on the axis
 * @param {number} tickStep the tick step between values on the axis
 * @param {string} scale the scale of values on the axis
 * @param {boolean} autoPrecision true if auto precision should be applied otherwise false
 * @protected
 *
 */
DvtLinearScaleAxisValueFormatter.prototype.InitFormatter = function(minValue, maxValue, tickStep, scale, autoPrecision) {
  var findScale = false, decimalPlaces, scaleFactor, useAutoPrecision = false;

  // if autoPrecision doesn't equal "off" (i.e. is "on", null, undefined) then auto precision should be used.
  if (!(autoPrecision === 'off')) {
    useAutoPrecision = true;
  }
  // try to use scale given by "scale" param and if no scale factor is found find appropriate scale
  scaleFactor = this._getScaleFactor(scale);
  if ((typeof scaleFactor) !== 'number') {
    findScale = true;
  }

  // base a default scale factor calculation on the order of
  // magnitude (power of ten) of the maximum absolute value on the axis
  if (findScale) {
    // get the axis endpoint with the largest absolute value,
    // and find its base 10 exponent
    var absMax = Math.max(Math.abs(minValue), Math.abs(maxValue));

    var power = this._getPowerOfTen(absMax);
    scaleFactor = this._findNearestLEScaleFactor(power);
  }

  if (useAutoPrecision === true) {
    if (tickStep == 0 && minValue == maxValue) {
      // TODO: HZHANG Remove this hack for chart tooltips, which currently passes 0 as the tick step in all cases.
      // Workaround for now will be to add decimal places to show at least 1 and at most 4 significant digits
      var valuePowerOfTen = this._getPowerOfTen(maxValue);
      var scaleFactorDiff = scaleFactor - valuePowerOfTen;
      if (scaleFactorDiff <= 0) // Value is same or larger than the scale factor, ensure 4 significant digits.
        decimalPlaces = 3 + scaleFactorDiff;
      else // Value is smaller, ensure enough decimals to show 1 significant digit
        decimalPlaces = Math.max(scaleFactorDiff, 4);
    }
    else {
      // get the number of decimal places in the number by subtracting
      // the order of magnitude of the tick step from the order of magnitude
      // of the scale factor
      // (e.g.: scale to K, tick step of 50 -> 3 - 1 = 2 decimal places)
      var tickStepPowerOfTen = this._getPowerOfTen(tickStep);
      decimalPlaces = Math.max(scaleFactor - tickStepPowerOfTen, 0);
    }
  }

  // init private properties with computed values
  this._useAutoPrecision = useAutoPrecision;
  this._scaleFactor = scaleFactor;
  this._decimalPlaces = decimalPlaces;
};


/**
 * Finds a scale factor 'x' such that x <= value (e.g. if value equals 4 then returned scale factor equals 3)
 * @param {number} value value representing an order of magnitude
 * @return {number} a scale factor 'x' such that x <= value
 * @private
 */
DvtLinearScaleAxisValueFormatter.prototype._findNearestLEScaleFactor = function(value) {
  var scaleFactor = 0;

  if (value <= this._scalesOrder[0].scaleFactor) {
    // if the number is less than 10, don't scale
    scaleFactor = this._scalesOrder[0].scaleFactor;
  }
  else if (value >= this._scalesOrder[this._scalesOrder.length - 1].scaleFactor) {
    // if the data is greater than or equal to 10 quadrillion, scale to quadrillions
    scaleFactor = this._scalesOrder[this._scalesOrder.length - 1].scaleFactor;
  }
  else {
    // else find the nearest scaleFactor such that scaleFactor <= value
    var end = this._scalesOrder.length - 1;
    for (var i = end; i >= 0; i--) {
      if (this._scalesOrder[i].scaleFactor <= value) {
        scaleFactor = this._scalesOrder[i].scaleFactor;
        break;
      }
    }
  }
  return scaleFactor;
};


/**
 * Returns scale factor of scale given by scale name.
 * @return scale factor of scale given by scale name
 * @private
 */
DvtLinearScaleAxisValueFormatter.prototype._getScaleFactor = function(scaleName) {
  // If no scaling factor defined, use auto by default.
  if (!scaleName)
    scaleName = DvtLinearScaleAxisValueFormatter.SCALE_AUTO;

  var scaleFactor, scale = this._scales[scaleName];
  if (scale) {
    scaleFactor = scale.scaleFactor;
  }
  return scaleFactor;
};


/**
 * Formats given value using previously computed scale factor and decimal digits count. In case that parsed value equals NaN an unformatted value is returned.
 * @override
 * @param {object} value to be formatted.
 * @return {string} formatted value as string
 */
DvtLinearScaleAxisValueFormatter.prototype.format = function(value, converter) {
  var parsed = parseFloat(value);
  if (!isNaN(parsed)) {
    // Find the suffix for the scale factor
    var suffix;
    if (this._scaleFactor > 0) {
      for (var i = 0; i < this._scaleFactor; i++) {
        parsed /= 10;
      }
      suffix = this._factorToScaleMapping[this._scaleFactor].localizedSuffix;
    }

    // Convert the number itself
    if (converter && converter['getAsString']) {
      parsed = converter['getAsString'](parsed);
    }
    else if (converter && converter['format'])
      parsed = converter['format'](parsed);
    else if (this._useAutoPrecision && !isNaN(parseFloat(parsed))) {
      parsed = parseFloat(new Number(parsed).toFixed(this._decimalPlaces));
      parsed = this._formatFraction(parsed);
    }

    // Add the scale factor suffix
    if (typeof suffix === 'string') {
      parsed += suffix;
    }
    return parsed;
  }
  else {
    return value;
  }
};


/**
 * Formats fraction part of given value (adds zeroes if needed).
 * @param {number} number to be formatted
 * @return {string} number with fraction part formatted as string
 * @private
 */
DvtLinearScaleAxisValueFormatter.prototype._formatFraction = function(value) {
  var formatted = '' + value;
  if (this._decimalPlaces > 0) {
    if (formatted.indexOf('.') == - 1) {
      formatted += '.';
    }
    var existingPlacesCount = formatted.substring(formatted.indexOf('.') + 1).length;

    while (existingPlacesCount < this._decimalPlaces) {
      formatted += '0';
      existingPlacesCount++;
    }
  }
  return formatted;
};


/**
 * Fro given value it returns its order of magnitude.
 * @param {number} value for which order of magnitude should be found
 * @return {number} order of magnitude for given value
 * @private
 */
DvtLinearScaleAxisValueFormatter.prototype._getPowerOfTen = function(value) {
  // more comprehensive and easier than working with value returned by Math.log(value)/Math.log(10)
  value = (value >= 0) ? value : - value;
  var power = 0;

  // Check for degenerate and zero values
  if (value < 1E-15) {
    return 0;
  }
  else if (value == Infinity) {
    return Number.MAX_VALUE;
  }

  if (value >= 10) {
    // e.g. for 1000 the power should be 3
    while (value >= 10) {
      power += 1;
      value /= 10;
    }
  }
  else if (value < 1) {
    while (value < 1) {
      power -= 1;
      value *= 10;
    }
  }
  return power;
};
/**
 * Calculated axis information and drawable creation for a time axis.
 * @param {DvtContext} context
 * @param {object} options The object containing specifications and data for this component.
 * @param {DvtRectangle} availSpace The available space.
 * @class
 * @constructor
 * @extends {DvtAxisInfo}
 */
var DvtTimeAxisInfo = function(context, options, availSpace) {
  this.Init(context, options, availSpace);
};

DvtObj.createSubclass(DvtTimeAxisInfo, DvtAxisInfo, 'DvtTimeAxisInfo');

// ------------------------
// Constants
//
DvtTimeAxisInfo.TIME_SECOND = 1000;
DvtTimeAxisInfo.TIME_MINUTE = 60 * DvtTimeAxisInfo.TIME_SECOND;
DvtTimeAxisInfo.TIME_HOUR = 60 * DvtTimeAxisInfo.TIME_MINUTE;
DvtTimeAxisInfo.TIME_DAY = 24 * DvtTimeAxisInfo.TIME_HOUR;
DvtTimeAxisInfo.TIME_MONTH_MIN = 28 * DvtTimeAxisInfo.TIME_DAY;
DvtTimeAxisInfo.TIME_MONTH_MAX = 31 * DvtTimeAxisInfo.TIME_DAY;
DvtTimeAxisInfo.TIME_YEAR_MIN = 365 * DvtTimeAxisInfo.TIME_DAY;
DvtTimeAxisInfo.TIME_YEAR_MAX = 366 * DvtTimeAxisInfo.TIME_DAY;

// For time localization. Not currently used yet.
DvtTimeAxisInfo.AM_INDEX = 12;
DvtTimeAxisInfo.PM_INDEX = 13;
DvtTimeAxisInfo.AMPM_BEFORE_INDEX = 14;
DvtTimeAxisInfo.DMY_ORDER_INDEX = 15;
DvtTimeAxisInfo.YEAR_TRAILING_CHAR_INDEX = 16;
DvtTimeAxisInfo.DAY_TRAILING_CHAR_INDEX = 17;


/**
 * @override
 */
DvtTimeAxisInfo.prototype.Init = function(context, options, availSpace) {
  DvtTimeAxisInfo.superclass.Init.call(this, context, options, availSpace);

  // Figure out the coords for the min/max values
  if (this.Position == 'top' || this.Position == 'bottom') {
    // Provide at least the minimum buffer at each side to accommodate labels
    if (!options['_isOverview'] && options['tickLabel']['rendered'] == 'on') {
      this.StartOverflow = Math.max(DvtAxis.MINIMUM_AXIS_BUFFER - options['leftBuffer'], 0);
      this.EndOverflow = Math.max(DvtAxis.MINIMUM_AXIS_BUFFER - options['rightBuffer'], 0);
    }

    // Axis is horizontal, so flip for BIDI if needed
    if (DvtAgent.isRightToLeft(context)) {
      this._minCoord = this.EndCoord - this.EndOverflow;
      this._maxCoord = this.StartCoord + this.StartOverflow;
    }
    else {
      this._minCoord = this.StartCoord + this.StartOverflow;
      this._maxCoord = this.EndCoord - this.EndOverflow;
    }
  }
  else {
    // Vertical axis should go from top to bottom
    this._minCoord = this.StartCoord;
    this._maxCoord = this.EndCoord;
  }

  this._converter = null;
  if (options['tickLabel'] != null) {
    this._converter = options['tickLabel']['converter'];
  }

  this._groups = options['groups'];

  this.DataMin = options['dataMin'];
  this.DataMax = options['dataMax'];

  this._averageInterval = this._groups.length > 1 ? (this.DataMax - this.DataMin) / (this._groups.length - 1) : 0;
  this._step = options['step'];

  // Calculate the increment and add offsets if specified
  var endOffset = options['endGroupOffset'] > 0 ? options['endGroupOffset'] * this._averageInterval : 0;
  var startOffset = options['startGroupOffset'] > 0 ? options['startGroupOffset'] * this._averageInterval : 0;

  this.GlobalMin = options['min'] != null ? options['min'] : this.DataMin - startOffset;
  this.GlobalMax = options['max'] != null ? options['max'] : this.DataMax + endOffset;

  this.MinValue = options['viewportMin'] == null ? this.GlobalMin : options['viewportMin'];
  this.MaxValue = options['viewportMax'] == null ? this.GlobalMax : options['viewportMax'];

  // Fall back to a default time interval if there's only zero or one data point
  if (this._averageInterval == 0)
    this._averageInterval = (this.MaxValue - this.MinValue) / 6;

  // Set min/max by start/endGroup
  if (options['viewportStartGroup'] != null)
    this.MinValue = options['viewportStartGroup'] - startOffset;
  if (options['viewportEndGroup'] != null)
    this.MaxValue = options['viewportEndGroup'] + endOffset;

  this._timeRange = this.MaxValue - this.MinValue;

  this._level1Labels = null;
  this._level2Labels = null;
  // Coordinates of labels need to be stored for gridline rendering
  this._level1Coords = null;
  this._level2Coords = null;
  this._isOneLevel = true;

  var bundle = new DvtUtilBundle();
  this._timeAxisResources = [
    bundle.getTranslatedString('MONTH_SHORT_JANUARY', null),
    bundle.getTranslatedString('MONTH_SHORT_FEBRUARY', null),
    bundle.getTranslatedString('MONTH_SHORT_MARCH', null),
    bundle.getTranslatedString('MONTH_SHORT_APRIL', null),
    bundle.getTranslatedString('MONTH_SHORT_MAY', null),
    bundle.getTranslatedString('MONTH_SHORT_JUNE', null),
    bundle.getTranslatedString('MONTH_SHORT_JULY', null),
    bundle.getTranslatedString('MONTH_SHORT_AUGUST', null),
    bundle.getTranslatedString('MONTH_SHORT_SEPTEMBER', null),
    bundle.getTranslatedString('MONTH_SHORT_OCTOBER', null),
    bundle.getTranslatedString('MONTH_SHORT_NOVEMBER', null),
    bundle.getTranslatedString('MONTH_SHORT_DECEMBER', null)
  ];
};


/**
 * Formats the label given an axis value (used for generating tooltips).
 * @param {Number} axisValue The axis value (in milliseconds)
 * @return {String} A formatted axis label
 */
DvtTimeAxisInfo.prototype.formatLabel = function(axisValue) {
  var date = new Date(axisValue);
  var twoLabels = this._formatAxisLabel(date, null);
  if (twoLabels[1] != null)
    return twoLabels[0] + ' ' + twoLabels[1];
  else
    return twoLabels[0];
};


/**
 * Formats the level 1 and level 2 axis labels
 * @param {Date} date The current date
 * @param {Date} prevDate The date of the previous set of labels
 * @return {Array} An array [level1Label, level2Label]
 * @private
 */
DvtTimeAxisInfo.prototype._formatAxisLabel = function(date, prevDate) {
  var label1 = null;// level 1 label
  var label2 = null;// level 2 label
  var isVert = this.Position == 'left' || this.Position == 'right';

  // If dateTimeFormatter is used, use it
  if (this._converter && this._converter['getAsString']) {
    label1 = this._converter['getAsString'](date);
  }
  else if (this._converter && this._converter['format']) {
    label1 = this._converter['format'](date);
  }
  else if (this._step >= DvtTimeAxisInfo.TIME_YEAR_MIN) {
    label1 = this._formatDate(date, false, false, true);// Year
  }

  else if (this._timeRange >= DvtTimeAxisInfo.TIME_YEAR_MIN || this._step >= DvtTimeAxisInfo.TIME_MONTH_MIN) {
    if (prevDate == null || prevDate.getMonth() != date.getMonth())
      label1 = this._formatDate(date, false, true, false);// Month

    if (prevDate == null || prevDate.getYear() != date.getYear())
      label2 = this._formatDate(date, false, false, true);// Year
  }

  else if (this._timeRange >= DvtTimeAxisInfo.TIME_MONTH_MIN || this._step >= DvtTimeAxisInfo.TIME_DAY) {
    if (prevDate == null || prevDate.getDate() != date.getDate())
      label1 = this._formatDate(date, true, false, false);// Day

    if (prevDate == null || prevDate.getYear() != date.getYear())
      label2 = this._formatDate(date, false, true, true);// Year, Month
    else if (prevDate.getMonth() != date.getMonth())
      label2 = this._formatDate(date, false, true, false);// Month
  }

  else {
    if (this._timeRange >= DvtTimeAxisInfo.TIME_HOUR || this._step >= DvtTimeAxisInfo.TIME_MINUTE) {
      if (prevDate == null || (prevDate.getHours() != date.getHours() || prevDate.getMinutes() != date.getMinutes()))
        label1 = this._formatTime(date, false);// HH:MM
    }
    else {
      if (prevDate == null || prevDate.getSeconds() != date.getSeconds())
        label1 = this._formatTime(date, true);// HH:MM:SS
    }

    if (isVert) {
      if (prevDate == null || prevDate.getDate() != date.getDate())
        label2 = this._formatDate(date, true, true, false);// Month, Day
    }
    else {
      if (prevDate == null || prevDate.getYear() != date.getYear())
        label2 = this._formatDate(date, true, true, true);// Year, Month, Day
      else if (prevDate.getMonth() != date.getMonth())
        label2 = this._formatDate(date, true, true, false);// Month, Day
      else if (prevDate.getDate() != date.getDate())
        label2 = this._formatDate(date, true, false, false);// Day
    }
  }

  return [label1, label2];
};


/**
 * Returns the date as a DMY string
 * @param {Date} date The date
 * @param {boolean} showDay Whether the day is shown
 * @param {boolean} showMonth Whether the month is shown
 * @param {boolean} showYear Whether the year is shown
 * @return {string} The formatted string
 * @private
 */
DvtTimeAxisInfo.prototype._formatDate = function(date, showDay, showMonth, showYear) {
  var yearStr = date.getFullYear();
  var monthStr;
  if (this._timeAxisResources && this._timeAxisResources.length >= 12)
    monthStr = this._timeAxisResources[date.getMonth()];
  else
    monthStr = date.toString().split(' ')[1];// date.toString() returns "Day Mon Date HH:MM:SS TZD YYYY"
  var dayStr = date.getDate();

  // Add the day and year trailing characters if needed
  // TODO: Localize properly!
  if (this._timeAxisResources && this._timeAxisResources.length > DvtTimeAxisInfo.DAY_TRAILING_CHAR_INDEX) {
    var yearChar = this._timeAxisResources[DvtTimeAxisInfo.YEAR_TRAILING_CHAR_INDEX];
    var dayChar = this._timeAxisResources[DvtTimeAxisInfo.DAY_TRAILING_CHAR_INDEX];
    // These will be "" if not needed
    yearStr += yearChar;
    dayStr += dayChar;
  }

  // Process the DMY Order
  // TODO: Localize properly!
  var dmyOrder = 'DMY';
  if (this._timeAxisResources && this._timeAxisResources.length > DvtTimeAxisInfo.DMY_ORDER_INDEX) {
    dmyOrder = this._timeAxisResources[DvtTimeAxisInfo.DMY_ORDER_INDEX];
  }

  var dateStr = '';

  for (var i = 0; i < dmyOrder.length; i++) {
    if (showDay && dmyOrder[i] == 'D') {
      dateStr += dayStr + ' ';
    }
    else if (showMonth && dmyOrder[i] == 'M') {
      dateStr += monthStr + ' ';
    }
    else if (showYear && dmyOrder[i] == 'Y') {
      dateStr += yearStr + ' ';
    }
  }

  return dateStr.length > 0 ? dateStr.slice(0, dateStr.length - 1) : dateStr;
};


/**
 * Returns the date as an HH:MM:SS string
 * @param {Date} date The date
 * @param {boolean} showSecond Whether the second is shown
 * @return {string} The formatted string
 * @private
 */
DvtTimeAxisInfo.prototype._formatTime = function(date, showSecond) {
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();

  var am = '';
  var pm = '';
  var ampmBefore = false;

  // TODO: Localize properly!
  if (this._timeAxisResources != null && this._timeAxisResources > DvtTimeAxisInfo.AMPM_BEFORE_INDEX) {
    am = this._timeAxisResources[DvtTimeAxisInfo.AM_INDEX];
    pm = this._timeAxisResources[DvtTimeAxisInfo.PM_INDEX];
    ampmBefore = this._timeAxisResources[DvtTimeAxisInfo.AMPM_BEFORE_INDEX] == 't';
  }

  var b12HFormat = (am != '' && pm != '');
  var ampm;

  if (b12HFormat) {
    ampm = pm;
    if (hours > 12) {
      hours -= 12;
      ampm = pm;
    }
    else if (hours == 0) {
      ampm = am;
      hours = 12;
    }
    else if (hours < 12) {
      ampm = am;
    }
  }

  var timeLabel = this._doubleDigit(hours) + ':' + this._doubleDigit(mins);

  if (showSecond) {
    timeLabel += ':' + this._doubleDigit(secs);
  }

  if (b12HFormat) {
    if (ampmBefore)
      return ampm + ' ' + timeLabel;
    else
      return timeLabel + ' ' + ampm;
  }
  else {
    return timeLabel;
  }
};


/**
 * Creates a double-digit number string for the HH:MM:SS format
 * @param {Number} num A number less than 100
 * @return {String} A double-digit number string
 * @private
 */
DvtTimeAxisInfo.prototype._doubleDigit = function(num) {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};


/**
 * Returns the time label interval for mixed frequency data.
 * Makes sure that the interval is a regular time unit.
 * @return {number} The interval.
 * @private
 */
DvtTimeAxisInfo.prototype._getMixedFrequencyStep = function() {
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_YEAR_MAX)
    return DvtTimeAxisInfo.TIME_YEAR_MAX;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_MONTH_MAX || this._timeRange >= DvtTimeAxisInfo.TIME_YEAR_MAX)
    return DvtTimeAxisInfo.TIME_MONTH_MAX;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_DAY || this._timeRange >= DvtTimeAxisInfo.TIME_MONTH_MAX)
    return DvtTimeAxisInfo.TIME_DAY;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_HOUR || this._timeRange >= DvtTimeAxisInfo.TIME_DAY)
    return DvtTimeAxisInfo.TIME_HOUR;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_MINUTE * 5 || this._timeRange >= DvtTimeAxisInfo.TIME_HOUR)
    return DvtTimeAxisInfo.TIME_MINUTE * 5;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_MINUTE || this._timeRange >= DvtTimeAxisInfo.TIME_MINUTE * 5)
    return DvtTimeAxisInfo.TIME_MINUTE;
  if (this._averageInterval >= DvtTimeAxisInfo.TIME_SECOND * 5 || this._timeRange >= DvtTimeAxisInfo.TIME_MINUTE)
    return DvtTimeAxisInfo.TIME_SECOND * 5;
  return DvtTimeAxisInfo.TIME_SECOND;
};


/**
 * Returns the positions of time axis labels, given the start, end, and step
 * @param {number} start The start time of the axis.
 * @param {number} end The end time of the axis.
 * @param {number} step The increment between labels.
 * @return {array} A list of label positions.
 * @private
 */
DvtTimeAxisInfo._getLabelPositions = function(start, end, step) {
  // The time positions has to be at even intervals from the beginning of a year (January 1, 12:00:00 AM), otherwise
  // we may have labels such as [2013, 2014, 2015, ...] that are drawn at [June 8 2013, June 8 2014, June 8 2015, ...],
  // which is data misrepresentation.
  var times = [];
  var time;
  var anchor = new Date(start);
  if (step >= DvtTimeAxisInfo.TIME_YEAR_MIN && step <= DvtTimeAxisInfo.TIME_YEAR_MAX) {
    // Assume that the step is one year, which can mean different # of days depending on the year
    anchor.setMonth(0, 1); // January 1
    time = anchor.getTime();
    if (time < start)
      time = DvtTimeAxisInfo._addOneYear(time);
    while (time <= end) {
      times.push(time);
      time = DvtTimeAxisInfo._addOneYear(time);
    }
  }
  else if (step >= DvtTimeAxisInfo.TIME_MONTH_MIN && step <= DvtTimeAxisInfo.TIME_MONTH_MAX) {
    // Assume that the step is one month, which can mean different # of days depending on the month
    anchor.setDate(1); // beginning of month;
    time = anchor.getTime();
    if (time < start)
      time = DvtTimeAxisInfo._addOneMonth(time);
    while (time <= end) {
      times.push(time);
      time = DvtTimeAxisInfo._addOneMonth(time);
    }
  }
  else {
    anchor.setMonth(0, 1); // January 1
    if (step < DvtTimeAxisInfo.TIME_DAY)
      anchor.setHours(0, 0, 0, 0); // 00:00:00
    time = anchor.getTime() + Math.ceil((start - anchor.getTime()) / step) * step;
    while (time <= end) {
      times.push(time);
      time += step;
    }
  }
  return times;
};


/**
 * Adds the time by one year, e.g. 2014 January 15 -> 2015 January 15 -> ...
 * @param {number} time The current time
 * @return {number} Next year
 * @private
 */
DvtTimeAxisInfo._addOneYear = function(time) {
  var date = new Date(time);
  date.setFullYear(date.getFullYear() + 1);
  return date.getTime();
};

/**
 * Adds the time by one month, e.g. January 15 -> February 15 -> March 15 -> ...
 * @param {number} time The current time
 * @return {number} Next month
 * @private
 */
DvtTimeAxisInfo._addOneMonth = function(time) {
  var date = new Date(time);
  date.setMonth(date.getMonth() + 1);
  return date.getTime();
};


/**
 * Generates the level 1 and level 2 tick labels
 * @param {DvtContext} context
 * @private
 */
DvtTimeAxisInfo.prototype._generateLabels = function(context) {
  var labels1 = [];
  var labels2 = [];
  var labelInfos1 = [];
  var coords1 = [];
  var coords2 = [];
  var prevDate = null;
  var c1 = 0;// number of level 1 labels
  var c2 = 0;// number of level 2 labels
  var container = context.getStage(context);
  var isRTL = DvtAgent.isRightToLeft(context);
  var isVert = (this.Position == 'left' || this.Position == 'right');
  var scrollable = this.Options['zoomAndScroll'] != 'off';

  if (scrollable)
    var first = true;

  // Bug #17046187 : On Chrome, creating a gap value to be used for spacing level1 labels and level2 labels
  var levelsGap = 0;
  if (isVert && DvtAgent.isBrowserChrome()) {
    levelsGap = parseInt(this.Options['tickLabel']['style'].getStyle('font-size')) * .2;
  }

  // Find the time positions where labels are located
  var times = [];
  var minSkip = 0;
  if (this._step != null) {
    times = DvtTimeAxisInfo._getLabelPositions(this.MinValue, this.MaxValue, this._step);
  }
  else if (this.Options['timeAxisType'] == 'mixedFrequency') {
    this._step = this._getMixedFrequencyStep();
    times = DvtTimeAxisInfo._getLabelPositions(this.MinValue, this.MaxValue, this._step);
    minSkip = Math.floor(this._averageInterval / this._step) - 1; // to avoid label overcrowding
  }
  else {
    for (var i = 0; i < this._groups.length; i++) {
      if (this._groups[i] >= this.MinValue && this._groups[i] <= this.MaxValue)
        times.push(this._groups[i]);
    }
    this._step = this._averageInterval;

    // Check the width of the first level1 label. If we expect that we'll have more group labels than we can fit in the
    // available space, then render the time labels at a regular interval (using mixed freq algorithm).
    var firstLabel = new DvtOutputText(context, this._formatAxisLabel(new Date(times[0]))[0], 0, 0);
    var labelWidth = isVert ? DvtTextUtils.guessTextDimensions(firstLabel).h : firstLabel.measureDimensions().w;
    var totalWidth = (labelWidth + this.GetTickLabelGapSize()) * (times.length - 1);
    var availWidth = Math.abs(this._minCoord - this._maxCoord);
    if (totalWidth > availWidth) {
      this._step = this._getMixedFrequencyStep();
      times = DvtTimeAxisInfo._getLabelPositions(this.MinValue, this.MaxValue, this._step);
      minSkip = Math.floor(this._averageInterval / this._step) - 1; // to avoid label overcrowding
    }
  }

  if (times.length == 0)
    times = [this.MinValue]; // render at least one label

  // Create and format the labels
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var coord = this.getCoordAt(time);
    if (coord == null)
      continue;

    var date = new Date(time);
    var twoLabels = this._formatAxisLabel(date, prevDate);

    var label1 = twoLabels[0];
    var label2 = twoLabels[1];
    //level 1 label
    if (label1 != null) {
      // If level 2 exists put a levelsGap space between labels. levelsGap is only non-zero on Chrome.
      labelInfos1.push({text: label1, coord: (label2 != null ? coord + levelsGap : coord)});
      coords1.push(coord);
    }
    else {
      labelInfos1.push(null);
      coords1.push(null);
    }
    // Defer label1 creation for now for performance optimization.
    // Only the labels we expect not to skip will be created in skipLabelsUniform().
    labels1.push(null);

    if (scrollable) {
      if (first) {
        coord = this.MinValue ? this.getCoordAt(this.MinValue) : coord;
        first = false;
      }
    }

    //level 2 label
    if (label2 != null) {
      var text = this.CreateLabel(context, label2, label2 != null ? coord - levelsGap : coord);
      coords2.push(coord);
      if (!isVert) //set alignment now in order to determine if the labels will overlap
        isRTL ? text.alignRight() : text.alignLeft();
      labels2.push(text);
      this._isOneLevel = false;
    }
    else {
      labels2.push(null);
      coords2.push(null);
    }

    prevDate = date;
  }

  // skip level 1 labels every uniform interval
  c1 = this._skipLabelsUniform(labelInfos1, labels1, container, minSkip);

  // skip level 2 labels greedily
  c2 = this._skipLabelsGreedy(labels2, this.GetLabelDims(labels2, container));

  if (!scrollable && c2 > 1 && c1 <= 1.5 * c2) {
    // too few level 1 labels
    labels1 = labels2;
    labels2 = null;
    // center align the new level1 labels
    for (var j = 0; j < labels1.length; j++) {
      if (labels1[j] != null)
        labels1[j].alignCenter();
    }
  }

  if (isVert && labels2 != null)
    this._skipVertLabels(labels1, labels2, container);

  this._level1Labels = labels1;
  this._level2Labels = labels2;

  // Store coordinates of labels for gridline rendering
  this._level1Coords = coords1;
  this._level2Coords = coords2;
};


/**
 * Determines if rectangle A (bounded by pointA1 and pointA2) and rectangle B (bounded by pointB1 and B2) overlap.
 * All the points should lie in one dimension.
 * @param {Number} pointA1
 * @param {Number} pointA2
 * @param {Number} pointB1
 * @param {Number} pointB2
 * @param {Number} gap The minimum gap between the two rectangles
 * @return {Boolean} whether rectangle A and B overlap
 * @private
 */
DvtTimeAxisInfo._isOverlapping = function(pointA1, pointA2, pointB1, pointB2, gap) {
  if (pointB1 >= pointA1 && pointB1 - gap < pointA2)
    return true;
  else if (pointB1 < pointA1 && pointB2 + gap > pointA1)
    return true;
  return false;
};


/**
 * Skip labels greedily. Delete all labels that overlap with the last rendered label.
 * @param {Array} labels An array of DvtText labels for the axis. This array will be modified by the method.
 * @param {Array} labelDims An array of DvtRectangle objects that describe the x, y, height, width of the axis labels.
 * @return {Number} The number of remaining labels after skipping.
 * @private
 */
DvtTimeAxisInfo.prototype._skipLabelsGreedy = function(labels, labelDims) {
  // If there are no labels, return
  if (!labelDims || labelDims.length <= 0)
    return false;

  var isVert = (this.Position == 'left' || this.Position == 'right');
  var fontSize = parseInt(this.Options['tickLabel']['style'].getStyle('font-size'));
  var gap = isVert ? fontSize * 0.1 : fontSize * 0.3;

  var count = 0;// the number of non-null labels
  var pointA1, pointA2, pointB1, pointB2;

  for (var j = 0; j < labelDims.length; j++) {
    if (labelDims[j] == null)
      continue;

    if (isVert) {
      pointB1 = labelDims[j].y;
      pointB2 = labelDims[j].y + labelDims[j].h;
    }
    else {
      pointB1 = labelDims[j].x;
      pointB2 = labelDims[j].x + labelDims[j].w;
    }

    if (pointA1 != null && pointA2 != null && DvtTimeAxisInfo._isOverlapping(pointA1, pointA2, pointB1, pointB2, gap))
      labels[j] = null;

    if (labels[j] != null) {
      // start evaluating from label j
      pointA1 = pointB1;
      pointA2 = pointB2;
      count++;
    }
  }

  return count;
};


/**
 * Skip labels uniformly (every regular interval).
 * @param {array} labelInfos An array of object containing text (the label text string) and coord (the label coordinate).
 * @param {array} labels An array of DvtOutputText labels for the axis (initially empty). This array will be populated by the method.
 * @param {DvtContainer} container The label container.
 * @param {number} minSkip The minimum label skipping frequency.
 * @return {number} The number of remaining labels after skipping.
 * @private
 */
DvtTimeAxisInfo.prototype._skipLabelsUniform = function(labelInfos, labels, container, minSkip) {
  var rLabelInfos = []; // contains rendered labels only
  var rLabelDims = [];
  for (var j = 0; j < labelInfos.length; j++) {
    if (labelInfos[j] != null) {
      rLabelInfos.push(labelInfos[j]);
      rLabelDims.push(null);
    }
  }

  // Method that returns the label size. If the label object doesn't exist yet, it will create it and measure the
  // dimensions. Otherwise, it simply returns the stored dimensions.
  var isVert = this.Position == 'left' || this.Position == 'right';
  var _this = this;
  var getDim = function(i) {
    if (rLabelDims[i] == null) {
      rLabelInfos[i].label = _this.CreateLabel(container.getCtx(), rLabelInfos[i].text, rLabelInfos[i].coord);
      rLabelDims[i] = isVert ? DvtTextUtils.guessTextDimensions(rLabelInfos[i].label) : rLabelInfos[i].label.measureDimensions(container);
    }
    return isVert ? rLabelDims[i].h : rLabelDims[i].w;
  };


  // Estimate the minimum amount of skipping by dividing the total label width (estimated) by the
  // available axis width.
  var totalWidth = (getDim(0) + this.GetTickLabelGapSize()) * (rLabelInfos.length - 1);
  var availWidth = Math.abs(this._minCoord - this._maxCoord);
  var skip = Math.max(minSkip, availWidth > 0 ? (Math.ceil(totalWidth / availWidth) - 1) : 0);

  // Iterate to find the minimum amount of skipping
  var bOverlaps = true;
  while (bOverlaps) {
    for (var j = 0; j < rLabelInfos.length; j++) {
      if (j % (skip + 1) == 0) {
        getDim(j); // create the label and obtain the dim
        rLabelInfos[j].skipped = false;
      }
      else
        rLabelInfos[j].skipped = true;
    }
    bOverlaps = this.IsOverlapping(rLabelDims, skip);
    skip++;
  }

  // Populate the labels array with non-skipped labels
  var count = 0; // # of rendered labels
  for (var j = 0; j < labelInfos.length; j++) {
    if (labelInfos[j] != null && !labelInfos[j].skipped) {
      labels[j] = labelInfos[j].label;
      count++;
    }
  }
  return count;
};


/**
 * Format the alignments of the vertical axis labels and skip them accordingly so that level1 and level2 don't overlap.
 * @param {Array} labels1 An array of level 1 DvtText labels for the axis. This array will be modified by the method.
 * @param {Array} labels2 An array of level 2 DvtText labels for the axis. This array will be modified by the method.
 * @param {DvtContainer} container
 * @private
 */
DvtTimeAxisInfo.prototype._skipVertLabels = function(labels1, labels2, container) {
  // returns the dimensions of the label
  var getDims = function(label) {
    return DvtTextUtils.guessTextDimensions(label);
  };

  var gap = parseInt(this.Options['tickLabel']['style'].getStyle('font-size')) * .1;

  // returns if two rectangles (dimsA and dimsB) overlap vertically
  var isOverlapping = function(dimsA, dimsB) {
    return DvtTimeAxisInfo._isOverlapping(dimsA.y, dimsA.y + dimsA.h, dimsB.y, dimsB.y + dimsB.h, gap);
  };

  var lastDims = null;
  var overlapping = false;

  // attempt to render both level 1 and level 2 and see if they fit on the axis
  for (var i = 0; i < labels1.length; i++) {
    if (labels1[i] && labels2[i]) {
      labels1[i].alignTop();
      labels2[i].alignBottom();
      if (lastDims && isOverlapping(lastDims, getDims(labels1[i]))) {
        overlapping = true;
        break;
      }
      else if (labels1[i + 1] && isOverlapping(getDims(labels1[i]), getDims(labels1[i + 1]))) {
        overlapping = true;
        break;
      }
      else {
        lastDims = getDims(labels2[i]);
      }
    }
    else if (labels1[i] || labels2[i]) {
      var label = labels1[i] ? labels1[i] : labels2[i];
      if (lastDims && isOverlapping(lastDims, getDims(label))) {
        overlapping = true;
        break;
      }
      else {
        lastDims = getDims(label);
      }
    }
  }

  if (!overlapping)
    return;// if both levels fit, we're done
  var lastLv1Idx = null;
  var lastLv1Dims = null;
  var lastLv2Dims = null;
  var dims;

  // if they don't fit:
  // - for points that have level 2 labels, don't generate the level 1 (one level nesting)
  // - skip all level 1 labels that overlaps with level 2 labels
  for (i = 0; i < labels1.length; i++) {
    if (labels2[i]) {
      // if level 2 exists
      labels1[i] = null;// delete level 1
      labels2[i].alignMiddle();
      dims = getDims(labels2[i]);
      if (lastLv1Dims && isOverlapping(lastLv1Dims, dims)) {
        labels1[lastLv1Idx] = null;
      }
      lastLv2Dims = dims;
    }
    else if (labels1[i]) {
      // if level 1 exists but not level 2
      dims = getDims(labels1[i]);
      if (lastLv2Dims && isOverlapping(lastLv2Dims, dims)) {
        labels1[i] = null;
      }
      else {
        lastLv1Dims = dims;
        lastLv1Idx = i;
      }
    }
  }
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getLabels = function(context, levelIdx) {
  if (levelIdx && levelIdx > 1)// time axis has no more than two levels
    return null;

  if (!this._level1Labels)
    this._generateLabels(context);

  if (levelIdx == 1) {
    return this._level2Labels;
  }

  return this._level1Labels;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getAxisLine = function(context) {
  var axisLineOptions = this.Options['axisLine'];
  if (axisLineOptions['rendered'] == 'on') {
    // TODO hzhang Check Axis Line behavior for negative/mixed axes.
    var axisLineStroke = new DvtSolidStroke(axisLineOptions['lineColor'], 1, axisLineOptions['lineWidth']);
    return this.CreateGridLine(context, axisLineStroke, 10);
  }
  else
    return null;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getMajorGridLines = function(context) {
  var majorTickOptions = this.Options['majorTick'];
  if (majorTickOptions['rendered'] != 'on')
    return [];

  var coords = [];
  if (this._isOneLevel) { // only one level, level1 is majorTick
    for (var i = 0; i < this._level1Coords.length; i++) {
      if (this._level1Coords[i] != null && this._level1Labels[i] != null)
        coords.push(this._level1Coords[i]);
    }
  }
  else { // level1 is minorTick, level2 is majorTick
    for (var i = 0; i < this._level2Coords.length; i++) {
      if (this._level2Coords[i] != null)
        coords.push(this._level2Coords[i]); // render gridline even if label is skipped
    }
  }

  var majorTickStroke = new DvtSolidStroke(majorTickOptions['lineColor'], 1, majorTickOptions['lineWidth']);
  if (majorTickOptions['lineStyle'])
    majorTickStroke.setStyle(DvtStroke.convertTypeString(majorTickOptions['lineStyle']));

  var gridlines = [];
  for (var i = 0; i < coords.length; i++) {
    if (coords[i] >= this._minCoord && coords[i] <= this._maxCoord)
      gridlines.push(this.CreateGridLine(context, majorTickStroke, coords[i]));
  }

  return gridlines;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getMinorGridLines = function(context) {
  var minorTickOptions = this.Options['minorTick'];
  if (minorTickOptions['rendered'] != 'on' || this._isOneLevel) // minorTick only applies on timeAxis if there is more than one level
    return [];

  var coords = [];
  for (var i = 0; i < this._level1Coords.length; i++) {
    if (this._level1Coords[i] != null && this._level1Labels[i] != null)
      coords.push(this._level1Coords[i]);
  }

  var minorTickStroke = new DvtSolidStroke(minorTickOptions['lineColor'], 1, minorTickOptions['lineWidth']);
  if (minorTickOptions['lineStyle'])
    minorTickStroke.setStyle(DvtStroke.convertTypeString(minorTickOptions['lineStyle']));

  var gridlines = [];
  for (var i = 0; i < coords.length; i++) {
    if (coords[i] >= this._minCoord && coords[i] <= this._maxCoord)
      gridlines.push(this.CreateGridLine(context, minorTickStroke, coords[i]));
  }

  return gridlines;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getValueAt = function(coord) {
  var minCoord = Math.min(this._minCoord, this._maxCoord);
  var maxCoord = Math.max(this._minCoord, this._maxCoord);

  // Return null if the coord is outside of the axis
  if (coord < minCoord || coord > maxCoord)
    return null;

  return this.getUnboundedValueAt(coord);
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getCoordAt = function(value) {
  // Return null if the value is outside of the axis
  if (value < this.MinValue || value > this.MaxValue)
    return null;

  return this.getUnboundedCoordAt(value);
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getBoundedValueAt = function(coord) {
  var minCoord = Math.min(this._minCoord, this._maxCoord);
  var maxCoord = Math.max(this._minCoord, this._maxCoord);

  if (coord < minCoord)
    coord = minCoord;
  else if (coord > maxCoord)
    coord = maxCoord;

  return this.getUnboundedValueAt(coord);
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getBoundedCoordAt = function(value) {
  if (value < this.MinValue)
    value = this.MinValue;
  else if (value > this.MaxValue)
    value = this.MaxValue;

  return this.getUnboundedCoordAt(value);
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getUnboundedValueAt = function(coord) {
  var ratio = (coord - this._minCoord) / (this._maxCoord - this._minCoord);
  return this.MinValue + (ratio * (this.MaxValue - this.MinValue));
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getUnboundedCoordAt = function(value) {
  var ratio = (value - this.MinValue) / (this.MaxValue - this.MinValue);
  return this._minCoord + (ratio * (this._maxCoord - this._minCoord));
};


/**
 * Gets the width of a group (for rendering bar chart)
 * @return {Number} the width of a group
 */
DvtTimeAxisInfo.prototype.getGroupWidth = function() {
  return Math.abs(this.getUnboundedCoordAt(this.MinValue + this._averageInterval) - this.getUnboundedCoordAt(this.MinValue));
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getMinimumExtent = function() {
  return this._averageInterval;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getStartOverflow = function() {
  if ((this.Position == 'top' || this.Position == 'bottom') && DvtAgent.isRightToLeft(this.getCtx()))
    return this.EndOverflow;
  else
    return this.StartOverflow;
};


/**
 * @override
 */
DvtTimeAxisInfo.prototype.getEndOverflow = function() {
  if ((this.Position == 'top' || this.Position == 'bottom') && DvtAgent.isRightToLeft(this.getCtx()))
    return this.StartOverflow;
  else
    return this.EndOverflow;
};
});