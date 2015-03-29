"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * @export
 */
var DvtAmxThematicMap = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtAmxThematicMap, DvtContainer, 'DvtAmxThematicMap');

DvtAmxThematicMap._LEGEND_COMPONET_GAP = 10;

DvtAmxThematicMap.prototype.Init = function(context, callback, callbackObj) {
  DvtAmxThematicMap.superclass.Init.call(this, context);
  this._tmap = new DvtThematicMap(context, callback, callbackObj);
  this._tmapContainer = new DvtContainer(context);
  this._tmapContainer.addChild(this._tmap);
  this.addChild(this._tmapContainer);
  this.Defaults = new DvtThematicMapDefaults();
};


/**
 * Returns a new instance of DvtAmxThematicMap.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtAmxThematicMap}
 * @export
 */
DvtAmxThematicMap.newInstance = function(context, callback, callbackObj) {
  return new DvtAmxThematicMap(context, callback, callbackObj);
};


/**
 * Renders the component with the specified data.  If no data is supplied to a component
 * that has already been rendered, the component will be rerendered to the specified size.
 * @param {object} options The object containing options for this component.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 * @export
 */
DvtAmxThematicMap.prototype.render = function(options, width, height) {
  this.Options = this.Defaults.calcOptions(options);
  this._width = width;
  this._height = height;

  // render legend
  var availSpace = new DvtRectangle(0, 0, width, height);
  this._renderLegend(this, availSpace);
  // render thematic map
  this._tmap.render(options, availSpace.w, availSpace.h);
};


/**
 * Renders legend and updates the available space.
 * @param {DvtChartImpl} chart The chart being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} availSpace The available space.
 */
DvtAmxThematicMap.prototype._renderLegend = function(container, availSpace) {
  //remove old legend
  if (this._legend) {
    container.removeChild(this._legend);
    this._legend = null;
  }

  var availLegendSpace = new DvtRectangle(DvtAmxThematicMap._LEGEND_COMPONET_GAP, DvtAmxThematicMap._LEGEND_COMPONET_GAP,
      availSpace.w - 2 * DvtAmxThematicMap._LEGEND_COMPONET_GAP, availSpace.h - 2 * DvtAmxThematicMap._LEGEND_COMPONET_GAP);

  var options = this.Options;

  var rendered = options['legend']['rendered'];
  var scrolling = options['legend']['scrolling'];

  // Create the options object for the legend
  var legendOptions = DvtJSONUtils.clone(options['legend']);
  this._addLegendData(this.Options, legendOptions);

  // Done not rendered or nothing to render
  if (!rendered || (legendOptions.sections && legendOptions.sections.length == 0))
    return;

  var position = options['legend']['position'];
  delete legendOptions['position'];
  legendOptions['layout']['gapRatio'] = this.getGapRatio();
  legendOptions['hideAndShowBehavior'] = 'none';
  legendOptions['rolloverBehavior'] = 'none';
  legendOptions['scrolling'] = options['legend']['scrolling'];

  // Create and add the legend to the display list for calc and rendering
  // TODO handle chart event procissing i.e. hide show/ rollover
  var legend = DvtLegend.newInstance(this._tmap.getCtx(), null, null);
  if (this._tmap.getId() != null) {
    //create and set legend id based on parent id
    legend.setId(this._tmap.getId() + 'legend');
  }
  container.addChild(legend);

  var maxWidth;
  var maxHeight;

  // Evaluate the automatic position
  // If scrolling is off, default legend position to bottom
  if (position == 'auto' && scrolling !== 'asNeeded') {
    position = 'bottom';
  }
  // If scrolling is on, auto will always render vertical legend
  else if (position == 'auto' && scrolling == 'asNeeded') {
    position = 'end';
  }

  // Convert "start" and "end" to absolute position
  var isRTL = DvtAgent.isRightToLeft(container.getCtx());
  if (position == 'start')
    position = isRTL ? 'right' : 'left';
  else if (position == 'end')
    position = isRTL ? 'left' : 'right';

  // Add legend orientation
  legendOptions['orientation'] = (position == 'left' || position == 'right' ? 'vertical' : 'horizontal');

  // Evaluate non-auto position
  var isHoriz = (position == 'top' || position == 'bottom');
  maxWidth = isHoriz ? availLegendSpace.w : options['layout']['legendMaxSize'] * availLegendSpace.w;
  maxHeight = isHoriz ? options['layout']['legendMaxSize'] * availLegendSpace.h : availLegendSpace.h;
  var actualSize = legend.getPreferredSize(legendOptions, maxWidth, maxHeight);

  if (actualSize.w > 0 && actualSize.h > 0) {
    legend.render(legendOptions, actualSize.w, actualSize.h);
    this._legend = legend;
    var gap = DvtThematicMapDefaults.getGapSize(this, options['layout']['legendGap']);
    DvtLayoutUtils.position(availLegendSpace, position, legend, actualSize.w, actualSize.h, gap);

    // update availSpace
    switch (position) {
      case 'top':
        this._tmapContainer.setTranslateY(actualSize.h + DvtAmxThematicMap._LEGEND_COMPONET_GAP);
      case 'bottom':
        availSpace.h = availSpace.h - (actualSize.h + DvtAmxThematicMap._LEGEND_COMPONET_GAP);
        break;
      case 'left':
        this._tmapContainer.setTranslateX(actualSize.w + DvtAmxThematicMap._LEGEND_COMPONET_GAP);
      case 'right':
        availSpace.w = availSpace.w - (actualSize.w + DvtAmxThematicMap._LEGEND_COMPONET_GAP);
        break;
      default:
        break;
    }
  }
};

DvtAmxThematicMap.prototype.getGapRatio = function() {
  // If defined in the options, use that instead
  if (this.Options['layout']['gapRatio'] !== null && !isNaN(this.Options['layout']['gapRatio']))
    return this.Options['layout']['gapRatio'];
  else {
    var wRatio = Math.min(this._width / 400, 1);
    var hRatio = Math.min(this._height / 300, 1);
    return Math.min(wRatio, hRatio);
  }
};


/**
 * Added data into the options object to be passed to the legend.
 * @param {DvtChartImpl} chart The chart whose data will be passed to the legend.
 * @param {object} legendOptions The legend options object into which data will be added.
 * @return {object} The data object for the chart's legend.
 */
DvtAmxThematicMap.prototype._addLegendData = function(data, legendOptions) {
  legendOptions['title'] = data['legend'] ? data['legend']['title'] : null;
  legendOptions['sections'] = [];

  if (data && data['legend'] && data['legend']['sections']) {
    // Iterate through any sections defined with attribute groups
    for (var i = 0; i < data['legend']['sections'].length; i++) {
      var dataSection = data['legend']['sections'][i];
      if (dataSection)
        legendOptions['sections'].push({'title': dataSection['title'], 'items': dataSection['items'], 'sections': dataSection['sections']});
    }
  }

  return legendOptions;
};
/**
 * DVT Toolkit based thematic map component
 * @extends {DvtContainer}
 * @class DVT Toolkit based thematic map component
 * @constructor
 * @export
 */
var DvtThematicMap = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtThematicMap, DvtPanZoomComponent, 'DvtThematicMap');

DvtThematicMap._FEATURES_OFF_PAN = 1;
DvtThematicMap._FEATURES_OFF_ZOOM = 2;
DvtThematicMap._FEATURES_OFF_PAN_ZOOM = 3;
DvtThematicMap._FEATURES_OFF_ZOOMTOFIT = 4;
DvtThematicMap._FEATURES_OFF_PAN_ZOOMTOFIT = 5;
DvtThematicMap._FEATURES_OFF_ZOOM_ZOOMTOFIT = 6;
DvtThematicMap._FEATURES_OFF_ALL = 7;

DvtThematicMap._COLLAPSIBLE_PANEL_OFFSET = 5;

DvtThematicMap._ELEM_RESOURCES_CONTROLPANEL = 'controlPanelResources';
DvtThematicMap._ELEM_RESOURCES_LEGEND = 'legendResources';
DvtThematicMap._ELEM_RESOURCES_PANEL_DRAWER = 'panelDrawerResources';
DvtThematicMap._ELEM_RESOURCES = 'resources';

DvtThematicMap.DEFAULT_MAX_ZOOM_FACTOR = 6;


/**
 * Initializes the thematicMap
 * @param {DvtContext} context The rendering context.
 * @param {function} callback The function that should be called to dispatch component events.
 * @param {AdfDhtmlThematicMapPeer} callbackObj The object to dispatch component events to
 * @protected
 */
DvtThematicMap.prototype.Init = function(context, callback, callbackObj) {
  DvtThematicMap.superclass.Init.call(this, context, callback, callbackObj);
  this._createHandlers();

  this._layers = [];
  this._drillAnimFadeOutObjs = [];

  this._legend = null;
  this._legendPanel = null;
  this._legendData = null;
  this._legendButtonImages = null;

  this._bBaseMapChanged = false;
  this._drilledRowKeys = [];
  this._initDrilled = new Object();
  this._processingInitDrilled = false;
  this._drillDataLayer = new Object();

  this._childToParent = new Object();
  this._drilled = [];

  this._areaLayers = new DvtContainer(this.getCtx());
  this._dataAreaLayers = new DvtContainer(this.getCtx());
  this._dataPointLayers = new DvtContainer(this.getCtx());
  this._labelLayers = new DvtContainer(this.getCtx());

  this._initialZooming = false;
  this._zooming = false;
  this._panning = false;
  this._maxZoomFactor = DvtThematicMap.DEFAULT_MAX_ZOOM_FACTOR;
  this._isMarkerZoomBehaviorFixed = true;
  this._selectedAreas = {};

  this._bListenersRemoved = false;
  this._showPopupBehaviors = null;

  this.setDisplayedControls(DvtControlPanel.CONTROLS_ALL);

  this.Defaults = new DvtThematicMapDefaults();
  this._eventHandler.associate(this, this);
  this._bRendered = false;
};


/**
 * Returns a new instance of DvtJsonThematicMap. Currently only called by json supported platforms.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtThematicMap}
 * @export
 */
DvtThematicMap.newInstance = function(context, callback, callbackObj) {
  return new DvtThematicMap(context, callback, callbackObj);
};


/**
 * @override
 */
DvtThematicMap.prototype.SetOptions = function(options) {
  DvtThematicMap.superclass.SetOptions.call(this, options);
  if (!DvtAgent.isEnvironmentBrowser()) {
    this.Options['animationOnDisplay'] = 'none';
    this.Options['animationOnMapChange'] = 'none';
    this.Options['animationOnDrill'] = 'none';
  }

  var parser = new DvtThematicMapJsonParser(this);
  parser.parse(this.Options);
};


/**
 * Sets the style defaults for this component.
 * @param {Object} defaults The json object containing style defaults
 */
DvtThematicMap.prototype.setStyleDefaults = function(defaults) {
  this._styleDefaults = defaults;
};


/**
 * Returns the style defaults for this component.
 * @return {Object} The json object containing style defaults
 */
DvtThematicMap.prototype.getStyleDefaults = function() {
  return this._styleDefaults;
};

DvtThematicMap.prototype.getMaxZoomFactor = function() {
  return (this._zooming ? this._maxZoomFactor : 1);
};

DvtThematicMap.prototype.setMaxZoomFactor = function(maxZoomFactor) {
  this._maxZoomFactor = maxZoomFactor;
};


/**
 * Returns whether the marker zoom behavior is 'fixed'. Valid values are fixed (default) and zoom.
 * @return {boolean} True if the marker zoom behavior is fixed
 */
DvtThematicMap.prototype.isMarkerZoomBehaviorFixed = function() {
  return this._isMarkerZoomBehaviorFixed;
};


/**
 * Sets the marker behavior when zooming. Valid values are fixed (default) and zoom.
 * @param {string} behavior The marker behavior on zoom
 */
DvtThematicMap.prototype.setMarkerZoomBehavior = function(behavior) {
  this._isMarkerZoomBehaviorFixed = (behavior == 'fixed');
};

DvtThematicMap.prototype.getEventHandler = function() {
  return this._eventHandler;
};

DvtThematicMap.prototype.addPointLayer = function(layer) {
  this._layers.push(layer);
};

DvtThematicMap.prototype.addLayer = function(layer) {
  this._layers.push(layer);
};

DvtThematicMap.prototype.getLayer = function(layerName) {
  for (var i = 0; i < this._layers.length; i++) {
    if (this._layers[i].getLayerName() == layerName)
      return this._layers[i];
  }
};


/**
 * Returns the array of area layer and top level point data layers for this map
 * @return {Array} The array of map layers
 */
DvtThematicMap.prototype.getAllLayers = function() {
  return this._layers;
};

DvtThematicMap.prototype.getAreaLayerContainer = function() {
  return this._areaLayers;
};

DvtThematicMap.prototype.getDataAreaContainer = function() {
  return this._dataAreaLayers;
};

DvtThematicMap.prototype.getDataPointContainer = function() {
  return this._dataPointLayers;
};

DvtThematicMap.prototype.getLabelContainer = function() {
  return this._labelLayers;
};

DvtThematicMap.prototype.setMapName = function(attr) {
  this._bBaseMapChanged = (this._mapName && this._mapName != attr);
  this._mapName = attr;
};

DvtThematicMap.prototype.setAnimationOnDisplay = function(attr) {
  this._animationOnDisplay = attr;
};

DvtThematicMap.prototype.setAnimationOnMapChange = function(attr) {
  this._animationOnMapChange = attr;
};

DvtThematicMap.prototype.setAnimationDuration = function(attr) {
  this._animationDuration = parseFloat(attr);
};


/**
 * Returns the animation duration for this component
 * @return {Number} The animation duration in milliseconds
 */
DvtThematicMap.prototype.getAnimationDuration = function() {
  return this._animationDuration;
};

DvtThematicMap.prototype.setDisplayTooltips = function(attr) {
  this._displayTooltips = attr;
};

DvtThematicMap.prototype.getDisplayTooltips = function() {
  return this._displayTooltips;
};

/**
 * Turns off certain features like panning or zooming for this component
 * @param {String} attr Flag for disabled comonent features
 */
DvtThematicMap.prototype.setFeaturesOff = function(attr) {
  var featuresOff = parseInt(attr);
  var controls = this.getDisplayedControls();
  if (featuresOff == DvtThematicMap._FEATURES_OFF_PAN || featuresOff == DvtThematicMap._FEATURES_OFF_PAN_ZOOM ||
      featuresOff == DvtThematicMap._FEATURES_OFF_PAN_ZOOMTOFIT || featuresOff == DvtThematicMap._FEATURES_OFF_ALL) {
    controls = controls & ~DvtControlPanel.CONTROLS_CENTER_BUTTON;
    this.setPanning(false);
  }
  if (featuresOff == DvtThematicMap._FEATURES_OFF_ZOOM || featuresOff == DvtThematicMap._FEATURES_OFF_PAN_ZOOM ||
      featuresOff == DvtThematicMap._FEATURES_OFF_ZOOM_ZOOMTOFIT || featuresOff == DvtThematicMap._FEATURES_OFF_ALL) {
    controls = controls & ~DvtControlPanel.CONTROLS_ZOOM;
    this.setZooming(false);
  }
  if (featuresOff == DvtThematicMap._FEATURES_OFF_ZOOMTOFIT || featuresOff == DvtThematicMap._FEATURES_OFF_PAN_ZOOMTOFIT ||
      featuresOff == DvtThematicMap._FEATURES_OFF_ZOOM_ZOOMTOFIT || featuresOff == DvtThematicMap._FEATURES_OFF_ALL) {
    controls = controls & ~DvtControlPanel.CONTROLS_ZOOM_TO_FIT_BUTTON;
  }

  this.setDisplayedControls(controls);
};

DvtThematicMap.prototype.setInitialCenterX = function(attr) {
  this._initialCenterX = attr;
};

DvtThematicMap.prototype.setInitialCenterY = function(attr) {
  this._initialCenterY = attr;
};

DvtThematicMap.prototype.setInitialZoom = function(attr) {
  this._initialZoom = attr;
};

DvtThematicMap.prototype.setAnimationOnDrill = function(attr) {
  this._animationOnDrill = attr;
};

DvtThematicMap.prototype.setDrillMode = function(attr) {
  this._drillMode = attr;
  this._eventHandler.setDrillMode(attr);
};

DvtThematicMap.prototype.setInitialZooming = function(attr) {
  this._initialZooming = attr;
};

DvtThematicMap.prototype.getLegendPanel = function(node) {
  return this._legendPanel;
};


/**
 * @override
 */
DvtThematicMap.prototype.PreRender = function() {
  DvtThematicMap.superclass.PreRender.call(this);
  // 3 cases we need to handle
  // 1. Initial render
  // 2. New area layer
  // 3. New base map
  // For cases 2 & 3 we will need to clear the old stored information
  if (!this.IsResize() && this._pzcContainer) {
    this._layers = [];
    this._drilledRowKeys = [];
    this._initDrilled = new Object();
    this._drillDataLayer = new Object();
    this._childToParent = new Object();
    this._drilled = [];

    this.removeChild(this._legendPanel);
    this._legendPanel = null;
    this._legend = null;
    this._legendData = null;
    this._legendButtonImages = null;
    this.setDisplayedControls(DvtControlPanel.CONTROLS_ALL);
    this._zooming = true;
    this._panning = true;

    // save a copy of the old pzc for animation
    this._oldPzc = this._pzc;

    this._areaLayers = new DvtContainer(this.getCtx());
    this._dataAreaLayers = new DvtContainer(this.getCtx());
    this._dataPointLayers = new DvtContainer(this.getCtx());
    this._labelLayers = new DvtContainer(this.getCtx());

    this._showPopupBehaviors = null;

    this._eventHandler.removeListeners(this);
    this._createHandlers();
    // clear data tips from previous event handlers
    this._eventHandler.hideTooltip();
    this._eventHandler.associate(this, this);
  }
};


/**
 * Creates all the event handlers that this component needs
 * @private
 */
DvtThematicMap.prototype._createHandlers = function() {
  // Each Tmap has only one keyboard handler. Each layer has its own event manager
  // because selection modes can differ between layers.
  this._eventHandler = new DvtThematicMapEventManager(this.getCtx(), this.__dispatchEvent, this);
  this._eventHandler.addListeners(this);
  if (!DvtAgent.isTouchDevice()) {
    this._keyboardHandler = new DvtThematicMapKeyboardHandler(this, this._eventHandler);
    this._eventHandler.setKeyboardHandler(this._keyboardHandler);
  } else {
    this._keyboardHandler = null;
  }
};

DvtThematicMap.prototype.HandleLegendResize = function(event) {
  if (!DvtAgent.isRightToLeft(this.getCtx())) {
    var x = this.GetWidth() - 5 - event.getWidth();
    this._legendPanel.setTranslateX(x);
  }
};


/**
 * Creates, renders, and positions a DvtCommonLegend and its parent container within this component.
 * @private
 */
DvtThematicMap.prototype._renderLegend = function() {
  if (this._legendData) {
    // Cleanup previoius legend
    if (this._legendPanel) {
      this._legendPanel.destroy();
      this.removeChild(this._legendPanel);
    }

    var disclosed = this._legendData['disclosed'] == 'true';
    var isFixed = this._legendData['display'] == 'fixed' || DvtAgent.isEnvironmentBatik();
    if ((isFixed && !disclosed))
      return;

    // determine the max width of the legend container
    var maxWidth = this._legendData['maxWidth'];
    // check if max legend width is given as a % or px
    var percentIndex = maxWidth.indexOf('%');
    var isPercent = (percentIndex != -1);
    if (isPercent)
      maxWidth = parseFloat(maxWidth.substring(0, percentIndex)) / 100 * this.GetWidth();
    else
      maxWidth = parseFloat(maxWidth);
    var maxHeight = this.GetHeight() - 2 * DvtThematicMap._COLLAPSIBLE_PANEL_OFFSET;

    // create the legend container based on the skin
    if (this.getSkinName() == DvtCSSStyle.SKIN_ALTA) {
      this._legendPanel = new DvtPanelDrawer(this.getCtx(), null, this, 'pd');
      this._legendPanel.addEvtListener(DvtPanelDrawerEvent.TYPE, this.HandleLegendEvent, false, this);
      this._legendPanel.setMaxWidth(maxWidth);
      this._legendPanel.setMaxHeight(maxHeight);
      this._legendPanel.setFixed(isFixed);
      // position the container
      if (!DvtAgent.isRightToLeft(this.getCtx())) {
        this._legendPanel.setTranslateX(this.GetWidth());
      }
      else {
        this._legendPanel.setDiscloseDirection(DvtPanelDrawer.DIR_RIGHT);
        this._legendPanel.setTranslateX(0);
      }
    } else {
      var legendCollapseDir = DvtAgent.isRightToLeft(this.getCtx()) ? DvtCollapsiblePanel.COLLAPSE_NORTHWEST : DvtCollapsiblePanel.COLLAPSE_NORTHEAST;
      this._legendPanel = new DvtCollapsiblePanel(this.getCtx(), maxWidth, maxHeight, legendCollapseDir,
          this.getResourcesMap(), this.getSubcomponentStyles(), disclosed, isFixed);
      this._legendPanel.addEvtListener(DvtCollapsiblePanelEvent.TYPE, this.HandleLegendEvent, false, this);
      this._legendPanel.addEvtListener(DvtResizeEvent.RESIZE_EVENT, this.HandleLegendResize, false, this);
      var expandTooltip = this._legendData['expandTooltip'];
      var collapseTooltip = this._legendData['collapseTooltip'];
      this._legendPanel.setButtonTooltips(expandTooltip, collapseTooltip);
    }

    // create and render the legend
    this._legend = new DvtCommonLegend(this.getCtx(), this._legendPanel.getMaxContentWidth(),
        this._legendPanel.getMaxContentHeight(), this.getResourcesMap(), this.getSkinName());
    this._legend.setJSON(this._legendData);
    this.addChild(this._legendPanel);
    this.addChild(this._legend); // temp add for rendering
    this._legend.render();

    // add the legend to its container
    var legendPanelDim;
    if (this.getSkinName() == DvtCSSStyle.SKIN_ALTA) {
      var dim = this._legend.getDimensions();
      this._legendPanel.setMaxContainerHeight(dim.h);
      this.removeChild(this._legend);

      var upState = new DvtImage(this.getCtx(), this.getResourcesMap()[DvtPanelDrawer.PANEL_LEGEND_ICON_ENA], 0, 0, DvtPanelDrawer.IMAGE_SIZE, DvtPanelDrawer.IMAGE_SIZE);
      var overState = new DvtImage(this.getCtx(), this.getResourcesMap()[DvtPanelDrawer.PANEL_LEGEND_ICON_OVR], 0, 0, DvtPanelDrawer.IMAGE_SIZE, DvtPanelDrawer.IMAGE_SIZE);
      var downState = new DvtImage(this.getCtx(), this.getResourcesMap()[DvtPanelDrawer.PANEL_LEGEND_ICON_DWN], 0, 0, DvtPanelDrawer.IMAGE_SIZE, DvtPanelDrawer.IMAGE_SIZE);
      var tip = this.getBundle().getTranslatedString('LEGEND');
      this._legendPanel.addPanel(this._legend, upState, overState, downState, tip, DvtPanelDrawer.PANEL_LEGEND);
      this._legendPanel.renderComponent();
      if (disclosed)
        this._legendPanel.setDisclosed(true, true);
    } else {
      this._legendPanel.addContent(this._legend);
      // position the container
      legendPanelDim = this._legendPanel.getDimensions();
      var x = DvtAgent.isRightToLeft(this.getCtx()) ? 5 : this.GetWidth() - 5 - legendPanelDim.w - legendPanelDim.x;
      this._legendPanel.setTranslate(x, 5);
      // add on the 5 px border gap to account for legend size when resetting pzc size for fixed legend
      legendPanelDim.w += 5;
    }

    this._isFixedLegend = isFixed;
    if (isFixed) {
      if (!legendPanelDim)
        legendPanelDim = this._legendPanel.getDimensions();
      this._legendWidth = legendPanelDim.w;
      this._pzc.setSize(this.GetWidth() - this._legendWidth, this.GetHeight(), true);
    }

  }
};


/**
 * @override
 */
DvtThematicMap.prototype.Render = function() {
  DvtThematicMap.superclass.Render.call(this);
  // Create a new container and render the component into it
  var pzcContainer = new DvtContainer(this.getCtx());
  var cpContainer = new DvtContainer(this.getCtx());
  this._pzc = this.getPanZoomCanvas();
  this._pzc.addChild(pzcContainer);
  this._pzc.getContentPane().addChild(cpContainer);
  this._render(pzcContainer, cpContainer);

  if (!this._topLayer)
    return;

  // Re-add the control panel on top of any rendered layers
  this._controlPanel = this._pzc.getControlPanel();
  if (this._controlPanel)
    this._pzc.addChild(this._controlPanel);

  // Animation Support
  // Stop any animation in progress
  this._stopAnimation();
  var bounds = new DvtRectangle(0, 0, this.GetWidth(), this.GetHeight());
  // 3 types of animations can occur
  // 1) animation on display
  // 2) animation on base map change
  // 3) animation on area layer change

  if (!this._bRendered && !this._oldPzc) { // Case 1
    // animation on display
    if (DvtBlackBoxAnimationHandler.isSupported(this._animationOnDisplay)) {
      this._animation = DvtBlackBoxAnimationHandler.getInAnimation(this.getCtx(), this._animationOnDisplay,
          this._pzc, bounds,
          this._animationDuration);
    }
  }
  else {
    // Trying to match Flash. If the layer changes for example from country to states then we should display the data
    // layer's animationOnDataChange. However an area layer can have multiple data layers (area and points). We will
    // just use the animation of the first data layer.
    var anim = null;
    if (this._bBaseMapChanged && !this.IsResize()) { // Case 2
      anim = this._animationOnMapChange;
    } else if (this._topLayer && this._topLayer.getLayerName() != this._oldTopLayerName) {
      anim = this._topLayer.getAnimation();
      if (!anim) { // Case 3
        var dataLayers = this._topLayer.getDataLayers();
        for (var i in dataLayers) {
          if (dataLayers[i].getAnimation()) {
            anim = dataLayers[i].getAnimation();
            break;
          }
        }
      }
    }
    if (anim && DvtBlackBoxAnimationHandler.isSupported(anim)) {
      this._animation = DvtBlackBoxAnimationHandler.getCombinedAnimation(this.getCtx(), anim,
          this._oldPzc,
          this._pzc, bounds,
          this._animationDuration);
      if (this._animation)
        this.addChild(this._oldPzc);
    }
    else {
      this._pzc.getContentPane().removeChild(this._cpContainer);
      this.OnAnimationEnd();
    }
  }

  // If an animation was created, play it
  if (this._animation) {
    // Temporarily move control panel to top level container to prevent it from being
    // animated
    if (this._controlPanel)
      this.addChild(this._controlPanel);
    this._eventHandler.hideTooltip();
    // Disable event listeners temporarily
    this._eventHandler.removeListeners(this);
    this._bListenersRemoved = true;
    // Start the animation
    this._animation.setOnEnd(this.OnAnimationEnd, this);
    this._animation.play(true);
  }

  // Update the pointers
  this._pzcContainer = pzcContainer;
  this._cpContainer = cpContainer;

  if (this._topLayer) {
    this._oldTopLayerName = this._topLayer.getLayerName();
  }

  this._bRendered = true;
};


/**
 * Calculate the minimum zoom for this basemap taking into account the pan zoom canvas size
 * @return {number} The minimum zoom for this basemap
 * @private
 */
DvtThematicMap.prototype._calcMinZoom = function() {
  var zoomPadding = this._pzc.getZoomToFitPadding();
  var mapDim = this._topLayer.getLayerDim();
  var pzcDim = this._pzc.getSize();
  var dzx = (pzcDim.w - 2 * zoomPadding) / mapDim.w;
  var dzy = (pzcDim.h - 2 * zoomPadding) / mapDim.h;
  var dz = Math.min(dzx, dzy);
  return dz;
};


/**
 * Renders all layers and subcomponents for this component
 * @param {DvtContainer} pzcContainer A child container of the pan zoom canvas
 * @param {DvtContainer} cpContainer A child container of the pan zoom canvas content pane
 * @private
 */
DvtThematicMap.prototype._render = function(pzcContainer, cpContainer) {
  // render legend first since a fixed legend will affect the canvas size
  this._renderLegend();

  // Add all containers
  cpContainer.addChild(this._areaLayers);
  cpContainer.addChild(this._dataAreaLayers);
  if (this.isMarkerZoomBehaviorFixed())
    pzcContainer.addChild(this._dataPointLayers);
  else
    cpContainer.addChild(this._dataPointLayers);
  pzcContainer.addChild(this._labelLayers);

  // Render all point layers and the first area layer
  var pzcMatrix = this._pzc.getContentPane().getMatrix();
  this._topLayerRendered = false;
  for (var i = 0; i < this._layers.length; i++) {
    var layer = this._layers[i];
    if ((!this._topLayerRendered && layer instanceof DvtMapAreaLayer) || !(layer instanceof DvtMapAreaLayer)) {
      layer.render(pzcMatrix);
      if (!this._topLayerRendered && layer instanceof DvtMapAreaLayer) {
        this._topLayerRendered = true;
        this._topLayer = layer;
      }
    }
  }

  if (!this._topLayer)
    return;

  // Set initially focused area
  var navigables = this.getNavigableAreas();
  if (navigables.length == 0)
    navigables = this.getNavigableObjects();

  // just use the first object as the focus
  if (this._keyboardHandler)
    this._eventHandler.setInitialFocus(navigables[0]);

  // Do not set min and max zoom before calling zoom to fit on map
  this._pzc.setMinZoom(null);
  this._pzc.setMaxZoom(null);
  this._pzc.setZoomingEnabled(true);
  this._pzc.setPanningEnabled(true);


  // Zoom to fit before initial render animations so animations will look correct
  // Additional zooming for initialZooming will be applied after animations are complete
  // On resize and basemap change we want to refit the map to the viewport so ignore any saved zoom state
  if (!this._bBaseMapChanged && !this.IsResize() && this._initialZoom != null) {
    this._pzc.zoomTo(this._initialZoom);
    this._pzc.panTo(this._initialCenterX, this._initialCenterY);
  } else {
    this._pzc.zoomToFit(null, this._topLayer.getLayerDim());
  }

  // Set initially drilled regions
  this._processInitialDrilled();

  // Get the current zoom of the canvas to set min canvas zoom to fit component in viewport
  this._updateZoomLimits();

  this._pzc.setZoomingEnabled(this._zooming);
  this._pzc.setPanningEnabled(this._panning);
};


/**
 * Called on data layer ppr to render a data layer with new data.
 * @param {Object} dataLayerOptions The json object containing data layer information.
 * @param {String} parentLayer The area layer name for this data layer or null
 * @param {boolean} isAreaDataLayer True if we are parsing an area data layer
 */
DvtThematicMap.prototype.updateLayer = function(dataLayerOptions, parentLayer, isAreaDataLayer) {
  // Stop any animations before starting layer animations
  this._bRendered = false;
  this._stopAnimation();

  // Parse new data layer
  var parser = new DvtThematicMapJsonParser(this);
  parser.ParseDataLayers([dataLayerOptions], this.getLayer(parentLayer), this._topLayer.getLayerName(), isAreaDataLayer);
  this._renderLegend();
  this._bRendered = true;
  // reset zoom limits since we could now have an isolated area after data layer update
  this._updateZoomLimits();
};


/**
 * Determines and sets the min and max zoom for the component.
 * @private
 */
DvtThematicMap.prototype._updateZoomLimits = function() {
  var fittedZoom = this._calcMinZoom();
  this._pzc.setMinZoom(fittedZoom);
  this._pzc.setMaxZoom(fittedZoom * this.getMaxZoomFactor());
};

/**
 * Hook for updating the component after a data layer update
 * @protected
 */
DvtThematicMap.prototype.OnUpdateLayerEnd = function() {
  if (this._topLayer.getIsolatedArea())
    this._pzc.zoomToFit(null, this._topLayer.getLayerDim());

  this._processInitialDrilled();

  if (this._initialZooming)
    this._zoomData();
};

DvtThematicMap.prototype.getMapName = function() {
  return this._mapName;
};

DvtThematicMap.prototype.getDrillMode = function() {
  return this._drillMode;
};

DvtThematicMap.prototype.setLegendData = function(data) {
  this._legendData = data;
};

DvtThematicMap.prototype.setRolloverBehavior = function(rolloverBehavior) {
  //  if (this._legend) {
  //    if ("dim" == rolloverBehavior && "dim" != this._rolloverBehavior) {
  //      this._legend.getDisplayObj().addEvtListener('legendItemRollOver', this._rolloverCallback, false, this);
  //    }
  //    if ("dim" != rolloverBehavior && "dim" == this._rolloverBehavior) {
  //      this._legend.getDisplayObj().removeEvtListener('legendItemRollOver', this._rolloverCallback, false, this);
  //    }
  //  }
  this._rolloverBehavior = rolloverBehavior;
};

DvtThematicMap.prototype.getRolloverBehavior = function() {
  return this._rolloverBehavior;
};

/**
 * Handles transforms for containers that aren't updated by the pan zoom canvas
 * @param {DvtMatrix} pzcMatrix The pan zoom canvas transform
 * @private
 */
DvtThematicMap.prototype._transformContainers = function(pzcMatrix) {
  // this._areaLayers, and this._dataAreaLayers transforms handled by pzc

  // update point and label layers with new panX/panY
  var mat = new DvtMatrix();
  mat.translate(pzcMatrix.getTx(), pzcMatrix.getTy());

  // this._dataPointLayers zoom transforms handled by markers to avoid scaling marker filter effects
  // tx/ty transforms are handled by tmap for better interactivity
  if (this.isMarkerZoomBehaviorFixed())
    this._dataPointLayers.setMatrix(mat);
  this._labelLayers.setMatrix(mat);
};

/**
 * Creates and sends a DvtSetPropertyEvent to the peer for legend state saving
 * @param {DvtBaseComponentEvent) event The event fired by the legend container panel on collapse/expand}
 * @protected
 */
DvtThematicMap.prototype.HandleLegendEvent = function(event) {
  // Currently only one collapsible container which contains a legend
  var spEvent = new DvtSetPropertyEvent();
  spEvent.addParam(DvtCommonLegend.LEGEND_DISCLOSED_KEY, event.getSubType() == DvtCollapsiblePanelEvent.SUBTYPE_SHOW);
  this.__dispatchEvent(spEvent);
};


/**
 * Constrain the component panning so that we only allow panning when zoomed beyond the current viewport and we don't
 * allow the map to be panned completely outside of the viewport.
 * @param {number} zoom The current component zoom
 * @private
 */
DvtThematicMap.prototype._constrainPanning = function(zoom) {
  var padding = this._pzc.getZoomToFitPadding();
  var pzcDim = this._pzc.getSize();
  var viewportDim = new DvtRectangle(padding, padding, pzcDim.w - 2 * padding, pzcDim.h - 2 * padding);
  var mapDim = this._topLayer.getLayerDim();
  var zoomedMapX = mapDim.x * zoom;
  var zoomedMapY = mapDim.y * zoom;
  var zoomedMapW = mapDim.w * zoom;
  var zoomedMapH = mapDim.h * zoom;

  var legendAdjust = 0;
  if (zoomedMapW > viewportDim.w) {
    if (this._isFixedLegend && DvtAgent.isRightToLeft(this.getCtx()))
      legendAdjust = this._legendWidth;
    this._pzc.setMinPanX((viewportDim.x + viewportDim.w + legendAdjust) - (zoomedMapX + zoomedMapW));
    this._pzc.setMaxPanX(viewportDim.x - zoomedMapX + legendAdjust);
  } else {
    // if smaller, center it in the viewport
    if (this._isFixedLegend && DvtAgent.isRightToLeft(this.getCtx()))
      legendAdjust = this._legendWidth * 2;
    var minMaxX = (viewportDim.x + viewportDim.w + legendAdjust) / 2 - (zoomedMapX + zoomedMapW / 2);
    this._pzc.setMinPanX(minMaxX);
    this._pzc.setMaxPanX(minMaxX);
  }

  if (zoomedMapH > viewportDim.h) {
    this._pzc.setMinPanY((viewportDim.y + viewportDim.h) - (zoomedMapY + zoomedMapH));
    this._pzc.setMaxPanY(viewportDim.y - zoomedMapY);
  } else {
    var minMaxY = (viewportDim.y + viewportDim.h) / 2 - (zoomedMapY + zoomedMapH / 2);
    this._pzc.setMinPanY(minMaxY);
    this._pzc.setMaxPanY(minMaxY);
  }
};


/**
 * Updates the DvtAnimator associated with a pan or zoom event with additional properties for containers not added to the content pane.
 * @param {DvtBaseComponentEvent} event The pan or zoom event
 * @param {boolean} bRecenterObjs Whether to recenter map objects that are pinned to a particular long/lat or x/y coordinate
 * @private
 */
DvtThematicMap.prototype._updateAnimator = function(event, bRecenterObjs) {
  var animator = event.getAnimator();
  if (animator) {
    var contentPane = this._pzc.getContentPane();
    var mat = animator.getDestVal(contentPane, contentPane.getMatrix);
    if (bRecenterObjs) {
      this._currentAnimMatrix = contentPane.getMatrix();
      animator.addProp(DvtAnimator.TYPE_MATRIX, this, this._getCenteredObjsMatrix, this._setCenteredObjsMatrix, mat);
    }
    var transMat = new DvtMatrix(1, 0, 0, 1, mat.getTx(), mat.getTy());
    if (this.isMarkerZoomBehaviorFixed())
      animator.addProp(DvtAnimator.TYPE_MATRIX, this._dataPointLayers, this._dataPointLayers.getMatrix, this._dataPointLayers.setMatrix, transMat);
    animator.addProp(DvtAnimator.TYPE_MATRIX, this._labelLayers, this._labelLayers.getMatrix, this._labelLayers.setMatrix, transMat);
  }
};


/**
 * Processes a zoom event for this component and subcomponents.
 * @param {DvtZoomEvent} event The event to process
 * @protected
 */
DvtThematicMap.prototype.HandleZoomEvent = function(event) {
  var type = event.getSubType();
  switch (type) {
    case DvtZoomEvent.SUBTYPE_ADJUST_PAN_CONSTRAINTS:
      // Calculate the new content dimensions based on the new zoom
      if (this._panning)
        this._constrainPanning(event.getNewZoom());
      break;
    case DvtZoomEvent.SUBTYPE_ZOOMING:
    case DvtZoomEvent.SUBTYPE_ELASTIC_ANIM_BEGIN:
      this._updateAnimator(event, true);
      break;
    case DvtZoomEvent.SUBTYPE_ZOOMED:
      var zoom = event.getNewZoom();
      if (zoom != null) {
        var pzcMatrix = this._pzc.getContentPane().getMatrix();
        event.addParam('panX', pzcMatrix.getTx());
        event.addParam('panY', pzcMatrix.getTy());
        // null out animator for Flash. Temp fix until bug 17080391 is done.
        event._animator = null;
        this.__dispatchEvent(event);

        this._transformContainers(pzcMatrix);

        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].HandleZoomEvent(event, pzcMatrix);
      }
      break;
    case DvtZoomEvent.SUBTYPE_ZOOM_AND_CENTER:
      // zoom and center on the current selection from the last clicked data layer
      // this can include both points and areas
      this.fitSelectedRegions();
      break;
    case DvtZoomEvent.SUBTYPE_ZOOM_TO_FIT_END:
      // reset pan/zoom state
      this.__dispatchEvent(new DvtZoomEvent());
      break;
    default:
      break;
  }
};


/**
 * @override
 */
DvtThematicMap.prototype.HandlePanEvent = function(event) {
  var subType = event.getSubType();
  if (subType == DvtPanEvent.SUBTYPE_ELASTIC_ANIM_BEGIN) {
    this._updateAnimator(event, false);
  }
  else if (subType == DvtPanEvent.SUBTYPE_PANNED) {
    if (event.getNewX() != null) {
      var pzcMatrix = this._pzc.getContentPane().getMatrix();
      event.addParam('zoom', this._pzc.getZoom());
      event.addParam('panX', pzcMatrix.getTx());
      event.addParam('panY', pzcMatrix.getTy());
      // null out animator for Flash. Temp fix until bug 17080391 is done.
      event._animator = null;
      this.__dispatchEvent(event);

      this._transformContainers(pzcMatrix);

      for (var i = 0; i < this._layers.length; i++)
        this._layers[i].HandlePanEvent(pzcMatrix);
    }
  }

  if (this._legendPanel) {
    // Handle DvtPanelDrawer fade
    if (this.getSkinName() == DvtCSSStyle.SKIN_ALTA) {
      if (subType === DvtPanEvent.SUBTYPE_DRAG_PAN_BEGIN) {
        this._legendPanel.setMouseEnabled(false);
      }
      else if (subType === DvtPanEvent.SUBTYPE_DRAG_PAN_END) {
        this._legendPanel.setMouseEnabled(true);
      }
    } else {
      var styleMap = this.getSubcomponentStyles();
      var stroke = this._legendPanel._background.getStroke().clone();
      // Handle DvtCollapsiblePanel fade
      if (subType === DvtPanEvent.SUBTYPE_DRAG_PAN_BEGIN) {
        this._legend.setAlpha(styleMap[DvtControlPanel.BG_DRAG_ALPHA]);
        stroke.setAlpha(styleMap[DvtControlPanel.FRAME_DRAG_ALPHA]);
        this._legendPanel._background.setStroke(stroke);
        if (this._legendPanel._buttonFrame)
          this._legendPanel._buttonFrame.setAlpha(styleMap[DvtControlPanel.FRAME_DRAG_ALPHA]);
        this._legendPanel.setMouseEnabled(false);
      }
      else if (subType === DvtPanEvent.SUBTYPE_DRAG_PAN_END) {
        this._legend.setAlpha(1);
        stroke.setAlpha(styleMap[DvtControlPanel.FRAME_ROLLOUT_ALPHA]);
        this._legendPanel._background.setStroke(stroke);
        if (this._legendPanel._buttonFrame)
          this._legendPanel._buttonFrame.setAlpha(styleMap[DvtControlPanel.FRAME_ROLLOUT_ALPHA]);
        this._legendPanel.setMouseEnabled(true);
      }
    }
  }
};

/**
 * @override
 */
DvtThematicMap.prototype.GetControlPanelBehavior = function() {
  // Programatically hide control panel if drilling/zooming are off and we are in alta skin
  if (this._drillMode == 'none' && !this._zooming && (!this._panning || this.getSkinName() == DvtCSSStyle.SKIN_ALTA))
    return DvtPanZoomComponent.CONTROL_PANEL_BEHAVIOR_HIDDEN;
  else
    return DvtThematicMap.superclass.GetControlPanelBehavior.call(this);
};

/**
 * @override
 */
DvtThematicMap.prototype.GetControlPanel = function() {
  var cpBehavior = this.GetControlPanelBehavior();
  if (cpBehavior != DvtPanZoomComponent.CONTROL_PANEL_BEHAVIOR_HIDDEN) {
    var cpState = (cpBehavior == DvtPanZoomComponent.CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED ?
        DvtControlPanel.STATE_COLLAPSED : DvtControlPanel.STATE_EXPANDED);
    return new DvtThematicMapControlPanel(this.getCtx(), this, cpState);
  } else {
    return null;
  }
};

DvtThematicMap.prototype.setZooming = function(attr) {
  this._zooming = attr;
};

DvtThematicMap.prototype.setPanning = function(attr) {
  this._panning = attr;
};

DvtThematicMap.prototype.addDisclosedRowKey = function(drilled) {
  this._drilledRowKeys.push(drilled);
};

DvtThematicMap.prototype.addDrilledLayer = function(layerName, drilled) {
  this._initDrilled[layerName] = drilled;
};

DvtThematicMap.prototype._processInitialDrilled = function() {
  this._processingInitDrilled = true;
  for (var i = 0; i < this._layers.length; i++) {
    var layerName = this._layers[i].getLayerName();
    if (layerName in this._initDrilled) {
      this._selectedAreas[layerName] = this._initDrilled[layerName][1];
      this._clickedLayerName = layerName;
      this._clickedDataLayerId = this._initDrilled[layerName][0];
      this.drillDown();
    }
  }
  this._processingInitDrilled = false;
};

DvtThematicMap.prototype.resetMap = function() {
  // stop previous animation
  this._stopAnimation();

  //Clear selection and drilled starting from the lowest layer
  var removeObjs = [];
  var addObjs = [];
  for (var i = this._layers.length - 1; i > -1; i--) {
    if (this._layers[i].getLayerName() == this._topLayer.getLayerName())
      this._layers[i].reset(addObjs);
    else
      this._layers[i].reset(removeObjs);
  }
  for (var j = 0; j < removeObjs.length; j++) {
    if (removeObjs[j]) {
      var parent = removeObjs[j].getParent();
      if (parent)
        parent.removeChild(removeObjs[j]);
    }
  }
  // addObjs have opacity set to 0
  for (var j = 0; j < addObjs.length; j++) {
    if (addObjs[j]) {
      addObjs[j].setAlpha(1);
    }
  }
  this._drilledRowKeys = [];
  this.fitMap();
  this._drilled = [];

  if (this._controlPanel && this._drillMode != 'none') {
    this._controlPanel.setEnabledDrillDownButton(false);
    this._controlPanel.setEnabledDrillUpButton(false);
  }

};


/**
 * Zooms map to fit the current rendered data
 * @private
 */
DvtThematicMap.prototype._zoomData = function() {
  var areaBounds = this._dataAreaLayers.getDimensions();
  var pointBounds = this._dataPointLayers.getDimensions();
  if (this.isMarkerZoomBehaviorFixed()) {
    var mat = this._pzc.getContentPane().getMatrix();
    pointBounds.w /= mat.getA();
    pointBounds.h /= mat.getD();
    pointBounds.x /= mat.getA();
    pointBounds.y /= mat.getD();
  }

  var bounds = areaBounds.getUnion(pointBounds);
  this._stopAnimation();
  if (DvtAgent.isEnvironmentBrowser())
    this._animation = new DvtAnimator(this.getCtx(), .3);
  if (bounds.w > 0 && bounds.h > 0)
    this._pzc.zoomToFit(this._animation, bounds);
  else
    this._pzc.zoomToFit(this._animation, this._topLayer.getLayerDim());
  if (this._animation)
    this._animation.play(true);
};


/**
 * Zooms the component to fit the passed in bounds
 * @param {DvtRectangle} bounds The bounds to zoom
 * @private
 */
DvtThematicMap.prototype._zoomToFitBounds = function(bounds) {
  var animator = new DvtAnimator(this.getCtx(), .3);
  this._pzc.zoomToFit(animator, bounds);
  animator.play(true);
};


/**
 * Zooms the component to fit a passed in or last clicked area
 * @param {DvtMapDataArea} toFit The area to zoom to fit to
 */
DvtThematicMap.prototype.fitRegion = function(toFit) {
  if (!toFit)
    toFit = this._zoomToFitObject;
  if (!toFit)
    toFit = this._clickedObject;
  this._zoomToFitBounds(toFit.getDimensions());
};


/**
 * Zooms the component to fit the currently selected areas
 */
DvtThematicMap.prototype.fitSelectedRegions = function() {
  if (this._clickedDataLayerId) {
    var dataLayer = this.getLayer(this._clickedLayerName).getDataLayer(this._clickedDataLayerId);
    if (dataLayer) {
      var selectionHandler = dataLayer._selectionHandler;
      if (selectionHandler) {
        var selection = selectionHandler.getSelection();
        for (var i = 0; i < selection.length; i++) {
          selection[i] = selection[i].getDisplayable();
        }
        if (selection.length > 0) {
          var bounds = selection[0].getDimensions();
          for (var i = 1; i < selection.length; i++)
            bounds = bounds.getUnion(selection[i].getDimensions());
          this._zoomToFitBounds(bounds);
        }
      }
    }
  }
};

DvtThematicMap.prototype.fitMap = function() {
  var animator = new DvtAnimator(this.getCtx(), .3);
  this._pzc.zoomToFit(animator);
  animator.play(true);
};

DvtThematicMap.prototype.getDrillParentLayer = function(layerName) {
  var parentLayerName = DvtBaseMapManager.getParentLayerName(this._mapName, layerName);
  return this.getLayer(parentLayerName);
};

DvtThematicMap.prototype.getDrillChildLayer = function(layerName) {
  var childLayerName = DvtBaseMapManager.getChildLayerName(this._mapName, layerName);
  return this.getLayer(childLayerName);
};

DvtThematicMap.prototype.getNavigableAreas = function() {
  var disclosed = [];
  if (this._topLayer) {
    for (var i = 0; i < this._layers.length; i++) {
      var dataLayers = this._layers[i].getDataLayers();
      for (var id in dataLayers) {
        if (this._topLayer.getLayerName() == this._layers[i].getLayerName())
          disclosed = disclosed.concat(dataLayers[id].getNavigableAreaObjects());
        else
          disclosed = disclosed.concat(dataLayers[id].getNavigableDisclosedAreaObjects());
      }
    }
  }
  return disclosed;
};

DvtThematicMap.prototype.getNavigableObjects = function() {
  var navigable = [];
  if (this._topLayer) {
    for (var i = 0; i < this._layers.length; i++) {
      var dataLayers = this._layers[i].getDataLayers();
      if (this._topLayer.getLayerName() == this._layers[i].getLayerName() || !(this._layers[i] instanceof DvtMapAreaLayer)) {
        for (var id in dataLayers)
          navigable = navigable.concat(dataLayers[id].getDataObjects());
      }
    }
  }
  return navigable;
};


/**
 * Used for updating the positions of centered objects like markers, images, and labels during animation.
 * @param {DvtMatrix} matrix The current animation matrix to use for updating the centered objects
 * @private
 */
DvtThematicMap.prototype._setCenteredObjsMatrix = function(matrix) {
  this._currentAnimMatrix = matrix;
  // update centered markers and images
  if (this.isMarkerZoomBehaviorFixed()) {
    var objs = this.getNavigableObjects();
    for (var i = 0; i < objs.length; i++)
      objs[i].HandleZoomEvent(matrix);
    // update centered labels for area and area data layers
    var numLabelLayers = this._labelLayers.getNumChildren();
    for (var j = 0; j < numLabelLayers; j++) {
      var labelLayer = this._labelLayers.getChildAt(j);
      var numLabels = labelLayer.getNumChildren();
      for (var k = 0; k < numLabels; k++) {
        var label = labelLayer.getChildAt(k);
        if (label instanceof DvtMapLabel)
          label.update(matrix);
      }
    }
  }
};


/**
 * Returns the current animation matrix used for updating centered objects
 * @return {DvtMatrix} The current animation matrix
 * @private
 */
DvtThematicMap.prototype._getCenteredObjsMatrix = function() {
  return this._currentAnimMatrix;
};

DvtThematicMap.prototype.drillDown = function() {
  // stop previous animation
  this._stopAnimation();

  var childLayer = this.getDrillChildLayer(this._clickedLayerName);
  var parentLayer = this.getLayer(this._clickedLayerName);
  var fadeInObjs = [];

  if (childLayer) {
    this._drillDataLayer[this._clickedLayerName] = this._clickedDataLayerId;

    //Reset other disclosed regions in this layer
    var selectedAreas = this._selectedAreas[this._clickedLayerName];
    // do not reset if just processing initiallly drilled row keys
    if (!this._processingInitDrilled && this._drillMode == 'single') {
      this._drilled.pop();
      parentLayer.reset(fadeInObjs, selectedAreas);
      childLayer.reset(this._drillAnimFadeOutObjs);
    }

    var newSelectedAreas = [];
    for (var i = 0; i < selectedAreas.length; i++) {
      var parentArea = selectedAreas[i];
      var childrenToDisclose = parentLayer.getChildrenForArea(parentArea);
      newSelectedAreas.push(childrenToDisclose[0]);

      //Update child to parent mapping
      for (var j = 0; j < childrenToDisclose.length; j++)
        this._childToParent[childrenToDisclose[j]] = selectedAreas[i];

      //Add disclosed child areas of drilled region
      childLayer.discloseAreas(childrenToDisclose, fadeInObjs);
      //Set the parent area border from selected to drilled
      var drillLayer = parentLayer.getDataLayer(this._clickedDataLayerId);
      if (drillLayer)
        drillLayer.drill(parentArea, this._drillAnimFadeOutObjs);
      //Update list of disclosed areas
      this._drilled.push(parentArea);
    }

    this._handleDrillAnimations(this._drillAnimFadeOutObjs, fadeInObjs, false);
    this._updateDrillButton(childLayer.getLayerName());
    //Update so that drill up will work right after a drill down with no additional selection
    this._clickedLayerName = childLayer.getLayerName();
    this._selectedAreas[this._clickedLayerName] = newSelectedAreas;
  }
};

DvtThematicMap.prototype.drillUp = function() {
  // stop previous animation
  this._stopAnimation();

  var childLayer = this.getLayer(this._clickedLayerName);
  var parentLayer = this.getDrillParentLayer(this._clickedLayerName);
  //For fade in/out animation
  var fadeInObjs = [];
  var newSelectedAreas = [];
  var selectedAreas = this._selectedAreas[this._clickedLayerName];
  for (var i = 0; i < selectedAreas.length; i++) {
    var parentArea = this._childToParent[selectedAreas[i]];
    newSelectedAreas.push(parentArea);
    //Don't add a parent area multiple times if many children are selected
    if (DvtArrayUtils.getIndex(this._drilled, parentArea) != - 1) {
      var childrenToUndisclose = parentLayer.getChildrenForArea(parentArea);

      //Remove disclosed child areas of drilled region
      childLayer.undiscloseAreas(childrenToUndisclose, this._drillAnimFadeOutObjs);
      //Set the parent area border from drilled to selected
      parentLayer.getDataLayer(this._drillDataLayer[parentLayer.getLayerName()]).undrill(parentArea, fadeInObjs);
      //Update list of disclosed areas
      var index = DvtArrayUtils.getIndex(this._drilled, parentArea);
      if (index != - 1)
        this._drilled.splice(index, 1);
    }
  }

  this._handleDrillAnimations(this._drillAnimFadeOutObjs, fadeInObjs, true);

  this._clickedLayerName = parentLayer.getLayerName();
  this._clickedDataLayerId = this._drillDataLayer[this._clickedLayerName];
  this._selectedAreas[this._clickedLayerName] = newSelectedAreas;
  this._updateDrillButton(this._clickedLayerName);
};


DvtThematicMap.prototype._stopAnimation = function() {
  if (this._animation) {
    this._animation.stop(true);
    this._animation = null;
  }
};


/**
 * Handles drilling animations
 * @param {Array} oldObjs The array of displayables that will be removed once drilling is complete
 * @param {Array} newObjs The array of displayables that will be added once drilling is complete
 * @param {boolean} isDrillUp True if this is a drill up animation
 * @private
 */
DvtThematicMap.prototype._handleDrillAnimations = function(oldObjs, newObjs, isDrillUp) {
  var pzcMatrix = this._pzc.getContentPane().getMatrix();
  //Zoom to fit selection only if not proccessing initially drilled on initial render
  if (this._animationOnDrill == 'zoomToFit' && !this._processingInitDrilled) {
    var animator = new DvtAnimator(this.getCtx(), .3);
    if (!DvtAgent.isEnvironmentBrowser())
      animator = null;
    if (isDrillUp)
      this._pzc.zoomToFit(animator);
    else
      this.fitSelectedRegions();
    if (animator)
      animator.play(true);
  }

  //Stop previous animation
  this._stopAnimation();
  if (DvtAgent.isEnvironmentBrowser() && this._animationOnDrill == 'alphaFade')
    this._animation = DvtBlackBoxAnimationHandler.getCombinedAnimation(this.getCtx(), this._animationOnDrill, oldObjs, newObjs, null, 0.5);
  // If an animation was created, play it
  if (this._animation) {
    this._eventHandler.hideTooltip();
    // Disable event listeners temporarily
    this._eventHandler.removeListeners(this);
    // Start the animation
    this._animation.setOnEnd(this.OnDrillAnimationEnd, this);
    this._animation.play(true);
  } else {
    this._cleanUpDrilledObjects();
  }
};

DvtThematicMap.prototype.setClickInfo = function(clientId, layerName, obj) {
  this._clickedLayerName = layerName;
  this._clickedDataLayerId = clientId;
  this._clickedObject = obj;
};

DvtThematicMap.prototype.setEventClientId = function(clientId) {
  this._eventClientId = clientId;
};


/**
 * @override
 */
DvtThematicMap.prototype.__dispatchEvent = function(event) {
  var type = event.getType();
  if (type == DvtSelectionEvent.TYPE) {
    this._handleSelectionEvent(event);
  }
  else if (type == DvtMapDrillEvent.TYPE) {
    this._handleDrillEvent(event);
  }
  else if (type == DvtShowPopupEvent.TYPE || type == DvtHidePopupEvent.TYPE) {
    event.addParam('clientId', this._eventClientId);
  }
  DvtThematicMap.superclass.__dispatchEvent.call(this, event);
};


/**
 * Process a selection event before sending it to the peer
 * @param {DvtSelectionEvent} event The selection event to process
 * @private
 */
DvtThematicMap.prototype._handleSelectionEvent = function(event) {
  if (this._clickedDataLayerId) {
    this._selectedRowKeys = event.getSelection();
    var dataLayer = this.getLayer(this._clickedLayerName).getDataLayer(this._clickedDataLayerId);
    this._selectedAreas[this._clickedLayerName] = dataLayer.getSelectedAreas(this._selectedRowKeys);
    this._updateDrillButton(this._clickedLayerName);
    event.addParam('clientId', this._clickedDataLayerId);

    // Save fit to region object
    if (this._clickedObject && !(this._clickedObject instanceof DvtMarker))
      this._zoomToFitObject = this._clickedObject;
  } else {
    this._updateDrillButton(null);
    this._zoomToFitObject = null;
  }
};

DvtThematicMap.prototype._hideSelectionMenu = function() {
  if (this._selectionText) {
    this.removeChild(this._selectionText);
    this._selectionText = null;
  }
};

DvtThematicMap.prototype._updateDrillButton = function(layerName) {
  if (this._controlPanel && this._drillMode && this._drillMode != 'none') {
    var childLayer = this.getDrillChildLayer(layerName);
    var parentLayer = this.getDrillParentLayer(layerName);
    if (childLayer)
      this._controlPanel.setEnabledDrillDownButton(true);
    else
      this._controlPanel.setEnabledDrillDownButton(false);

    if (parentLayer)
      this._controlPanel.setEnabledDrillUpButton(true);
    else
      this._controlPanel.setEnabledDrillUpButton(false);
  }
};

DvtThematicMap.prototype._handleDrillEvent = function(event) {
  event.addParam('clientId', this._eventClientId);
  if (this._drillMode == 'multiple')
    this._drilledRowKeys = this._drilledRowKeys.concat(this._selectedRowKeys);
  else
    this._drilledRowKeys = this._selectedRowKeys;

  var drillType = event.getDrillType();
  if (drillType == DvtMapDrillEvent.DRILL_UP)
    this.drillUp();
  if (drillType == DvtMapDrillEvent.DRILL_DOWN)
    this.drillDown();
  else if (drillType == DvtMapDrillEvent.RESET)
    this.resetMap();

  event.setDisclosed(this._drilledRowKeys);
};

/**
 * Releases all component resources to prevent memory leaks.
 * @override
 * @export
 */
DvtThematicMap.prototype.destroy = function() {
  DvtThematicMap.superclass.destroy.call(this);
  if (this._eventHandler) {
    this._eventHandler.destroy();
    this._eventHandler = null;
  }
};


/**
 * Hook for cleaning up animation behavior at the end of the animation.
 * @protected
 */
DvtThematicMap.prototype.OnAnimationEnd = function() {
  // Add control panel back to pzc
  if (this._controlPanel)
    this._pzc.addChild(this._controlPanel);

  if (this._oldPzc) {
    this.removeChild(this._oldPzc);
    this._oldPzc = null;
  }

  // Remove the animation reference
  this._animation = null;

  // After the initial render animations we should perform any additional zooms
  if (this._initialZooming)
    this._zoomData();

  // Restore event listeners
  if (this._bListenersRemoved) {
    this._eventHandler.addListeners(this);
    this._bListenersRemoved = false;
  }
};

DvtThematicMap.prototype.OnDrillAnimationEnd = function() {
  this._cleanUpDrilledObjects();
  // Remove the animation reference
  this._animation = null;
  // Restore event listeners
  this._eventHandler.addListeners(this);
};


/**
 * Removes the drilled objects from the map
 * @private
 */
DvtThematicMap.prototype._cleanUpDrilledObjects = function() {
  if (this._drillAnimFadeOutObjs.length > 0) {
    for (var i = 0; i < this._drillAnimFadeOutObjs.length; i++) {
      var obj = this._drillAnimFadeOutObjs[i];
      if (obj) {
        if (obj instanceof DvtMapLabel) {
          obj.reset();
        } else {
          if (obj.isDrilled && obj.isDrilled()) {
            obj.setAlpha(0);
            continue;
          }
          var parent = obj.getParent();
          if (parent)
            parent.removeChild(obj);
        }
      }
    }
    this._drillAnimFadeOutObjs = [];
  }
};

DvtThematicMap.prototype._rolloverCallback = function(event) {
  var category = event.getHideAttributes();
  //  var hiddenAttrGroups = this.getHiddenAttributeGroups();
  //  if (!hiddenAttrGroups) {
  //    hiddenAttrGroups = [];
  //  }
  //  var index = DvtArrayUtils.getIndex(hiddenAttrGroups, category);
  //  if (index != -1) {
  //    return; // ignore rollover on hidden attribute groups
  //  }
  var type = DvtLegendItemRollOverEvent.MOUSEOVER == event.getMouseState() ? DvtCategoryRolloverEvent.TYPE_OVER : DvtCategoryRolloverEvent.TYPE_OUT;
  this._fireRolloverEvent(type, category);
};

DvtThematicMap.prototype._fireRolloverEvent = function(type, category) {
  var rolloverEvent = new DvtCategoryRolloverEvent(type, category);
  // Build object list
  var objects = new Array();

  // Loop through areas
  for (var layerId in this._areas) {
    for (var key in this._areas[layerId]) {
      objects.push(this._areas[layerId][key]);
    }
  }

  // Loop through markers
  for (var layerId in this._markers) {
    for (var key in this._markers[layerId]) {
      objects.push(this._markers[layerId][key]);
    }
  }

  var legendItems = this._legend._hideAttrsLookUp;
  for (var legendCategory in legendItems) {
    var wrapper = new DvtThematicMapCategoryWrapper(legendItems[legendCategory].getContentShape(), legendCategory);
    objects.push(wrapper);
  }
  DvtCategoryRolloverHandler.processEvent(rolloverEvent, objects, 0.1);
};

/*
 * Prototype for view switcher. Currently gets the only the area data objects from the top layer
 */
DvtThematicMap.prototype.getShapesForViewSwitcher = function(bOld) {
  var shapes = {};
  var dataLayers = this._topLayer.getDataLayers();
  for (var id in dataLayers) {
    var areaObjs = dataLayers[id].getAreaObjects();
    for (var i = 0; i < areaObjs.length; i++) {
      var areaObj = areaObjs[i];
      var disp = areaObj.getDisplayable();
      shapes[areaObj.getId()] = disp; //path
    }
    break;
  }
  return shapes;
};

/**
 * Get show popup behaviors
 * @return {array} array of spb's
 */
DvtThematicMap.prototype.getShowPopupBehaviors = function() {
  return this._showPopupBehaviors;
};

/**
 * Add show popup behavior
 * @param {array} spbs array of DvtAfShowPopupBehavior
 */
DvtThematicMap.prototype.setShowPopupBehaviors = function(spbs) {
  this._showPopupBehaviors = spbs;
};

/**
 * Returns the automation object for this thematic map
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtThematicMap.prototype.getAutomation = function() {
  if (!this.Automation)
    this.Automation = new DvtThematicMapAutomation(this);
  return this.Automation;
};
/**
 * Default values and utility functions for thematic map component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtThematicMapDefaults = function() {
  this.Init({'fusion': DvtThematicMapDefaults.DEFAULT,
    'alta': DvtThematicMapDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtThematicMapDefaults, DvtBaseComponentDefaults, 'DvtThematicMapDefaults');

DvtThematicMapDefaults.DEFAULT = {
  'animationDuration' : 500,
  'animationOnDisplay' : 'none',
  'animationOnDrill' : 'none',
  'animationOnMapChange' : 'none',
  'controlPanelBehavior' : 'hidden',
  'drilling' : 'none',
  'initialZooming' : 'none',
  'markerZoomBehavior' : 'fixed',
  'panning' : 'none',
  'tooltipDisplay' : 'auto',
  'visualEffects': 'none',
  'zooming' : 'none',
  'styleDefaults' : {
    'skin' : 'alta',
    'areaStyle' : 'background-color:#B8CDEC;border-color:#FFFFFF;',
    'dataAreaDefaults' : {
      'borderColor' : '#FFFFFF',
      'drilledInnerColor' : '#FFFFFF',
      'drilledOuterColor' : '#000000',
      'hoverColor' : '#FFFFFF',
      'opacity' : 1,
      'selectedInnerColor' : '#FFFFFF',
      'selectedOuterColor' : '#000000'
    },
    'dataMarkerDefaults' : {
      'borderColor' : '#FFFFFF',
      'borderStyle' : 'solid',
      'borderWidth' : '0.5px',
      'color' : '#000000',
      'height' : 8,
      'labelStyle' : 'font-family:Tahoma;font-size:13pt;color:#000000',
      'opacity' : 0.4,
      'scaleX' : 1,
      'scaleY' : 1,
      'shape' : 'circle',
      'width' : 8
    },
    'labelStyle' : 'font-family:Tahoma;font-size:11pt;'
  },
  // for amx only
  'legend' : {
    'position' : 'auto', 'rendered' : true, 'layout' : {
      'gapRatio' : 1.0
    }
  },
  'layout' : {
    'gapRatio' : null, // gapRatio is dynamic based on the component size
    // TODO, the following are internal and should be moved to a _layout object
    'legendMaxSize' : 0.3, 'legendGap' : 10
  },
  'resources' : {
    'images' : {},
    'translations' : {}
  }
};

DvtThematicMapDefaults.SKIN_ALTA = {
  'styleDefaults' : {
    'areaStyle' : 'background-color:#DDDDDD;border-color:#FFFFFF;',
    'dataAreaDefaults' : {
      'drilledOuterColor' : '#0572CE'
    },
    'dataMarkerDefaults' : {
      'color' : 'rgb(51,51,51)',
      'labelStyle' : 'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333',
      'opacity' : 1
    },
    'labelStyle' : 'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'
  }
};

DvtThematicMapDefaults.DEFAULT_AREA_LAYER = {
  'animationOnLayerChange' : 'none',
  'labelDisplay' : 'auto',
  'labelType' : 'short'
};

DvtThematicMapDefaults.DEFAULT_DATA_LAYER = {
  'animationOnDataChange' : 'none',
  'selection' : 'none'
};


/**
 * Combines the user options with the defaults for the specified version for an area layer.
 * Returns the combined options object.  This object will contain internal attribute values and should be
 * accessed in internal code only.
 * @param {object} userOptions The object containing options specifications for this component.
 * @return {object} The combined options object.
 */
DvtThematicMapDefaults.prototype.calcAreaLayerOptions = function(userOptions) {
  return DvtJSONUtils.merge(userOptions, DvtThematicMapDefaults.DEFAULT_AREA_LAYER);
};


/**
 * Combines the user options with the defaults for the specified version for a data layer.
 * Returns the combined options object.  This object will contain internal attribute values and should be
 * accessed in internal code only.
 * @param {object} userOptions The object containing options specifications for this component.
 * @return {object} The combined options object.
 */
DvtThematicMapDefaults.prototype.calcDataLayerOptions = function(userOptions) {
  return DvtJSONUtils.merge(userOptions, DvtThematicMapDefaults.DEFAULT_DATA_LAYER);
};


/**
 * Scales down gap sizes based on the size of the component.
 * @param {DvtThematicMap} map The thematic map that is being rendered.
 * @param {Number} defaultSize The default gap size.
 * @return {Number}
 */
DvtThematicMapDefaults.getGapSize = function(tmap, defaultSize) {
  return Math.ceil(defaultSize * tmap.getGapRatio());
};
// APIs called by the ADF Faces drag source for DvtThematicMap

DvtThematicMap.prototype._getCurrentDragSource = function() {
  for (var i = 0; i < this._layers.length; i++) {
    var dataLayers = this._layers[i].getDataLayers();
    for (var id in dataLayers) {
      var dataLayer = dataLayers[id];
      var dragSource = dataLayer.getDragSource();
      if (dragSource && dragSource.getDragCandidate())
        return dragSource;
    }
  }
  return null;
};


/**
 * If this object supports drag, returns the client id of the drag component.
 * Otherwise returns null.
 * @param mouseX the x coordinate of the mouse
 * @param mouseY the x coordinate of the mouse
 * @param clientIds the array of client ids of the valid drag components
 */
DvtThematicMap.prototype.isDragAvailable = function(mouseX, mouseY, clientIds) {
  this._dragAllowed = false;
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.isDragAvailable(clientIds) : false;
};


/**
 * Returns the transferable object for a drag initiated at these coordinates.
 */
DvtThematicMap.prototype.getDragTransferable = function(mouseX, mouseY) {
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.getDragTransferable(mouseX, mouseY) : null;
};


/**
 * Returns the feedback for the drag operation.
 */
DvtThematicMap.prototype.getDragOverFeedback = function(mouseX, mouseY) {
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.getDragOverFeedback(mouseX, mouseY) : null;
};


/**
 * Returns an Object containing the drag context info.
 */
DvtThematicMap.prototype.getDragContext = function(mouseX, mouseY) {
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.getDragContext(mouseX, mouseY) : null;
};


/**
 * Returns the offset to use for the drag feedback. This positions the drag
 * feedback relative to the pointer.
 */
DvtThematicMap.prototype.getDragOffset = function(mouseX, mouseY) {
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.getDragOffset(mouseX, mouseY) : null;
};


/**
 * Returns the offset from the mouse pointer where the drag is considered to be located.
 */
DvtThematicMap.prototype.getPointerOffset = function(xOffset, yOffset) {
  var dragSource = this._getCurrentDragSource();
  return dragSource ? dragSource.getPointerOffset(xOffset, yOffset) : null;
};


/**
 * Notifies the component that a drag started.
 */
DvtThematicMap.prototype.initiateDrag = function() {
  var dragSource = this._getCurrentDragSource();
  if (dragSource)
    dragSource.initiateDrag();
};


/**
 * Clean up after the drag is completed.
 */
DvtThematicMap.prototype.dragDropEnd = function() {
  var dragSource = this._getCurrentDragSource();
  if (dragSource)
    dragSource.dragDropEnd();
  //BUG 18685501 : clean up the pan zoom touches after DnD
  this.getPanZoomCanvas().resetTouchTargets();
};


/**
 * Implemented for DvtDragRecognizer
 * @override
 */
DvtThematicMap.prototype.prepDrag = function() {
  if (this._panning)
    this._startDragDropTimer(1000);
  else
    this._dragAllowed = true;
};


/**
 * Implemented for DvtDragRecognizer
 * @override
 */
DvtThematicMap.prototype.abortPrep = function() {
  this._stopDragDropTimer();
};


/**
 * Implemented for DvtDragRecognizer
 * @override
 */
DvtThematicMap.prototype.recognizeDrag = function() {
  this._stopDragDropTimer();
  return this._dragAllowed;
};


/**
 * Starts the drag timer to prevent immediately initiating a drag action when panning is available
 * @param {number} time The time in milliseconds to set the timer for
 * @private
 */
DvtThematicMap.prototype._startDragDropTimer = function(time) {
  this._dragDropTimer = new DvtTimer(this.getCtx(), time, this._handleDragDropTimer, this, 1);
  this._dragDropTimer.start();
};


/**
 * Stops the drag timer and allows a drag action to initiate
 * @private
 */
DvtThematicMap.prototype._handleDragDropTimer = function() {
  this._stopDragDropTimer();
  this._dragAllowed = true;
};


/**
 * Stops the drag timer
 * @private
 */
DvtThematicMap.prototype._stopDragDropTimer = function() {
  if (this._dragDropTimer) {
    this._dragDropTimer.stop();
    this._dragDropTimer = null;
  }
};
// APIs called by the ADF Faces drop target for DvtThematicMap

DvtThematicMap.prototype._getCurrentDropTarget = function(mouseX, mouseY) {
  for (var i = 0; i < this._layers.length; i++) {
    if (this._layers[i].getDropTarget) {
      var dropTarget = this._layers[i].getDropTarget();
      if (dropTarget && dropTarget.getDropSite(mouseX, mouseY))
        return dropTarget;
    }
  }
  return null;
};


/**
 * If a drop is possible at these mouse coordinates, returns the client id
 * of the drop component. Returns null if drop is not possible.
 */
DvtThematicMap.prototype.acceptDrag = function(mouseX, mouseY, clientIds) {
  var zoom = this._pzc.getZoom();
  mouseX = (mouseX - this._pzc.getPanX()) / zoom;
  mouseY = (mouseY - this._pzc.getPanY()) / zoom;
  this._dropTarget = this._getCurrentDropTarget(mouseX, mouseY);
  if (this._dropTarget)
    return this._dropTarget.acceptDrag(mouseX, mouseY, clientIds);
  else
    return null;
};


/**
 * Paints drop site feedback as a drag enters the drop site.
 */
DvtThematicMap.prototype.dragEnter = function() {
  if (this._dropTarget)
    return this._dropTarget.dragEnter();
  else
    return null;
};


/**
 * Cleans up drop site feedback as a drag exits the drop site.
 */
DvtThematicMap.prototype.dragExit = function() {
  if (this._dropTarget)
    return this._dropTarget.dragExit();
  else
    return null;
};


/**
 * Returns the object representing the drop site. This method is called when a valid
 * drop is performed.
 */
DvtThematicMap.prototype.getDropSite = function(mouseX, mouseY) {
  var zoom = this._pzc.getZoom();
  mouseX = (mouseX - this._pzc.getPanX()) / zoom;
  mouseY = (mouseY - this._pzc.getPanY()) / zoom;
  if (this._dropTarget)
    return this._dropTarget.getDropSite(mouseX, mouseY);
  else
    return null;
};
/**
 * Drop Target event handler for DvtThematicMap
 * @param {DvtMapAreaLayer} areaLayer The area layer this drop target belongs to
 * @param {String} basemap The basemap name
 * @extends {DvtDropTarget}
 * @constructor
 */
var DvtThematicMapDropTarget = function(areaLayer, basemap) {
  this._areaLayer = areaLayer;
  this._basemap = basemap;
};

DvtObj.createSubclass(DvtThematicMapDropTarget, DvtDropTarget, 'DvtThematicMapDropTarget');


/**
 * @override
 */
DvtThematicMapDropTarget.prototype.acceptDrag = function(mouseX, mouseY, clientIds) {
  // If there is no obj under the point, then don't accept the drag
  var obj = this._areaLayer.__getObjectUnderPoint(mouseX, mouseY);
  if (!obj) {
    this._areaLayer.__showDropSiteFeedback(null);
    return null;
  }
  else if (obj != this._dropSite) {
    this._areaLayer.__showDropSiteFeedback(obj);
    this._dropSite = obj;
  }

  // Return the first clientId, since this component has only a single drag source
  return clientIds[0];
};


/**
 * @override
 */
DvtThematicMapDropTarget.prototype.dragExit = function() {
  // Remove drop site feedback
  this._areaLayer.__showDropSiteFeedback(null);
  this._dropSite = null;
};


/**
 * @override
 */
DvtThematicMapDropTarget.prototype.getDropSite = function(mouseX, mouseY) {
  var obj = this._areaLayer.__getObjectUnderPoint(mouseX, mouseY);
  if (obj) {
    var projPoint = DvtThematicMapProjections.inverseProject(mouseX, mouseY, this._basemap);
    return {regionId: obj.getAreaName(), localX: projPoint.x, localY: projPoint.y};
  } else {
    return null;
  }
};
/**
 * Provides automation services for a DVT component.
 * @class  DvtThematicMapAutomation
 * @param {DvtThematicMap} dvtComponent
 * @implements {DvtAutomation}
 * @constructor
 * @export
 */
var DvtThematicMapAutomation = function(dvtComponent) {
  this._tmap = dvtComponent;
};

DvtObj.createSubclass(DvtThematicMapAutomation, DvtAutomation, 'DvtThematicMapAutomation');


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>dataLayerId:area[index]</li>
 * <li>dataLayerId:marker[index]</li>
 * </ul>
 * @override
 */
DvtThematicMapAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var logicalObj = this._tmap.getEventHandler().GetLogicalObject(displayable);
  if (logicalObj && (logicalObj instanceof DvtMapDataArea || logicalObj instanceof DvtMapDataMarker))
    return this._getSubId(logicalObj);
  return null;
};


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>dataLayerId:area[index]</li>
 * <li>dataLayerId:marker[index]</li>
 * </ul>
 * @override
 * @export
 */
DvtThematicMapAutomation.prototype.getDomElementForSubId = function(subId) {
  var colonIdx = subId.indexOf(':');
  var parenIdx = subId.indexOf('[');
  if (colonIdx > 0 && parenIdx > 0) {
    var dataLayerId = subId.substring(0, colonIdx);
    var dataObjType = subId.substring(colonIdx + 1, parenIdx);
    var dataObjId = subId.substring(parenIdx + 1, subId.length - 1);
    return this._getDomElement(dataLayerId, dataObjType, dataObjId);
  }
  return null;
};


/**
 * Returns an object containing data for a thematic map data object. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>color</li>
 * <li>tooltip</li>
 * <li>label</li>
 * </ul>
 * @param {String} dataLayerId The id of the data layer
 * @param {String} dataObjType The object type. Valid values are area or marker
 * @param {String} dataObjId The id of the marker or area
 * @return {Object} An object containing data for the marker or area
 * @export
 */
DvtThematicMapAutomation.prototype.getData = function(dataLayerId, dataObjType, dataObjId) {
  var dataObj = this._getDataObject(dataLayerId, dataObjType, dataObjId);
  if (dataObj) {
    var data = {};
    data['color'] = dataObj.getDatatipColor();
    data['tooltip'] = dataObj.getDatatip();
    var label = dataObj.getLabel();
    data['label'] = label ? label.getTextString() : null;
    data['isSelected'] = dataObj.isSelected();
    return data;
  }
  return null;
};


/**
 * Returns the SVG DOM Element for a given subId
 * @param {String} dataLayerId The id of the data layer
 * @param {String} dataObjType The object type. Valid values are area or marker
 * @param {String} dataObjId The id of the marker or area
 * @return {SVGElement} The SVG DOM Element
 * @private
 */
DvtThematicMapAutomation.prototype._getDomElement = function(dataLayerId, dataObjType, dataObjId) {
  var dataObj = this._getDataObject(dataLayerId, dataObjType, dataObjId);
  if (dataObj)
    return dataObj.getDisplayable().getElem();
  return null;
};


/**
 * Returns the subId for a thematic map data object
 * @param {DvtMapDataObject} dataObject The DvtMapDataObject to get a subId for
 * @return {String} The subId for the DvtMapDataObject or null if there is no match
 * @private
 */
DvtThematicMapAutomation.prototype._getSubId = function(dataObject) {
  var layers = this._tmap.getAllLayers();
  for (var i = 0; i < layers.length; i++) {
    var dataLayers = layers[i].getDataLayers();
    for (var id in dataLayers) {
      if (dataObject instanceof DvtMapDataArea) {
        var areas = dataLayers[id].getAreaObjects();
        for (var k = 0; k < areas.length; k++) {
          if (areas[k] === dataObject)
            return this._getDataLayerId(id) + ':' + 'area[' + dataObject.getId() + ']';
        }
      }
      else if (dataObject instanceof DvtMapDataMarker) {
        var markers = dataLayers[id].getDataObjects();
        for (var k = 0; k < markers.length; k++) {
          if (markers[k] === dataObject)
            return this._getDataLayerId(id) + ':' + 'marker[' + dataObject.getId() + ']';
        }
      }
    }
  }
  return null;
};


/**
 * Returns the DvtMapDataObject for the given data layer and data object id
 * @param {String} dataLayerId The id of the data layer
 * @param {String} dataObjType The object type. Valid values are area or marker
 * @param {String} dataObjId The id of the marker or area
 * @return {DvtMapDataObject} The DvtMapDataObject matching the parameters or null if none exists
 * @private
 */
DvtThematicMapAutomation.prototype._getDataObject = function(dataLayerId, dataObjType, dataObjId) {
  var layers = this._tmap.getAllLayers();
  for (var i = 0; i < layers.length; i++) {
    var dataLayers = layers[i].getDataLayers();
    for (var id in dataLayers) {
      if (this._getDataLayerId(id) == dataLayerId) {
        if (dataObjType == 'area') {
          var areas = dataLayers[id].getAreaObjects();
          for (var k = 0; k < areas.length; k++) {
            if (areas[k].getId() === dataObjId)
              return areas[k];
          }
        }
        else if (dataObjType == 'marker') {
          var markers = dataLayers[id].getDataObjects();
          for (var k = 0; k < markers.length; k++) {
            if (markers[k].getId() === dataObjId)
              return markers[k];
          }
        }
      }
    }
  }
  return null;
};


/**
 * Returns the data layer id in the expected subId format.
 * @param {String} dataLayerId The id of the data layer
 * @return {String} The id of the data layer in subId format
 * @private
 */
DvtThematicMapAutomation.prototype._getDataLayerId = function(dataLayerId) {
  // For ADF the clientId is passed in and we need to parse out just the data layerId e.g. 'demoTemplate:tm1:adl1'
  var colonIdx = dataLayerId.lastIndexOf(':');
  if (colonIdx > 0)
    return dataLayerId.substring(colonIdx + 1);
  return dataLayerId;
};
// Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
/**
  *  Creates a map selectable shape that also supports drilling.
  *  @extends {DvtDrillablePath}
  *  @constructor
  */
var DvtDrillablePath = function(context, bSupportsVectorEffects) {
  this.Init(context, bSupportsVectorEffects);
};

DvtObj.createSubclass(DvtDrillablePath, DvtPath, 'DvtDrillablePath');

// if not defined, stroke width is 1 for border effects
DvtDrillablePath.HOVER_STROKE_WIDTH = 2;
DvtDrillablePath.SELECTED_INNER_STROKE_WIDTH = 1;
DvtDrillablePath.SELECTED_OUTER_STROKE_WIDTH = 4;
DvtDrillablePath.SELECTED_HOVER_OUTER_STROKE_WIDTH = 6;
DvtDrillablePath.DISCLOSED_INNER_STROKE_WIDTH = 2;
DvtDrillablePath.DISCLOSED_OUTER_STROKE_WIDTH = 4;


/**
 *  Object initializer.
 *  @protected
 */
DvtDrillablePath.prototype.Init = function(context, bSupportsVectorEffects) {
  DvtDrillablePath.superclass.Init.call(this, context);
  this._disclosedInnerStroke = null;
  this._disclosedOuterStroke = null;
  this._disclosedInnerShape = null;
  this._disclosedOuterShape = null;
  this._isDrilled = false;
  this.Zoom = 1;
  //IE10, Flash/XML toolkit do not support vector-effects=non-scaling-stroke so we still need to set stroke width based on zoom
  this._bSupportsVectorEffects = bSupportsVectorEffects;
};

DvtDrillablePath.prototype.isDrilled = function() {
  return this._isDrilled;
};

DvtDrillablePath.prototype.setDrilled = function(drilled) {
  if (this._isDrilled == drilled)
    return;

  this._isDrilled = drilled;

  if (this.isDrilled()) {
    this._disclosedInnerShape = this.copyShape();
    this._disclosedInnerShape.setFill(null);
    this._disclosedInnerShape.setMouseEnabled(false);
    this._disclosedOuterShape = this.copyShape();
    this._disclosedOuterShape.setFill(null);
    this._disclosedOuterShape.setMouseEnabled(false);
    // because we remove the shape from the DOM, set the drill inner border on the parent directly
    var parent = this.getParent();
    parent.addChild(this._disclosedOuterShape);
    parent.addChild(this._disclosedInnerShape);
    this._disclosedInnerShape.setStroke(this._adjustStrokeZoomWidth(this._disclosedInnerStroke, DvtDrillablePath.DISCLOSED_INNER_STROKE_WIDTH));
    this._disclosedOuterShape.setStroke(this._adjustStrokeZoomWidth(this._disclosedOuterStroke, DvtDrillablePath.DISCLOSED_OUTER_STROKE_WIDTH));
    this.setMouseEnabled(false);
    // after object is drilled, it is removed from the DOM and does not recieve the hideHoverEffect call to set this flag
    this.IsShowingHoverEffect = false;
  }
  else {
    if (this.isHoverEffectShown()) {
      this.UpdateSelectionEffect();
      this.InnerShape.setStroke(this._adjustStrokeZoomWidth(this.HoverInnerStroke, 1), DvtDrillablePath.HOVER_STROKE_WIDTH);
    }
    this._disclosedOuterShape.getParent().removeChild(this._disclosedOuterShape);
    this._disclosedInnerShape.getParent().removeChild(this._disclosedInnerShape);
    this.setMouseEnabled(true);
    this.setAlpha(1);
  }
};


/**
 * @override
 */
DvtDrillablePath.prototype.setSelected = function(selected) {
  if (this.IsSelected == selected)
    return;
  if (selected) {
    if (this.isHoverEffectShown()) {
      this.CreateSelectedHoverStrokes();
      this.SelectedHoverInnerStroke = this._adjustStrokeZoomWidth(this.SelectedHoverInnerStroke, DvtDrillablePath.HOVER_STROKE_WIDTH);
      this.SelectedHoverOuterStroke = this._adjustStrokeZoomWidth(this.SelectedHoverOuterStroke, DvtDrillablePath.SELECTED_HOVER_OUTER_STROKE_WIDTH);
    } else {
      this.SelectedInnerStroke = this._adjustStrokeZoomWidth(this.SelectedInnerStroke, DvtDrillablePath.SELECTED_INNER_STROKE_WIDTH);
      this.SelectedOuterStroke = this._adjustStrokeZoomWidth(this.SelectedOuterStroke, DvtDrillablePath.SELECTED_OUTER_STROKE_WIDTH);
    }
  }
  DvtDrillablePath.superclass.setSelected.call(this, selected);
};


/**
 * @override
 */
DvtDrillablePath.prototype.showHoverEffect = function() {
  if (this.isSelected()) {
    this.CreateSelectedHoverStrokes();
    this.SelectedHoverInnerStroke = this._adjustStrokeZoomWidth(this.SelectedHoverInnerStroke, DvtDrillablePath.HOVER_STROKE_WIDTH);
    this.SelectedHoverOuterStroke = this._adjustStrokeZoomWidth(this.SelectedHoverOuterStroke, DvtDrillablePath.SELECTED_HOVER_OUTER_STROKE_WIDTH);
  } else {
    this.HoverInnerStroke = this._adjustStrokeZoomWidth(this.HoverInnerStroke, DvtDrillablePath.HOVER_STROKE_WIDTH);
  }
  DvtDrillablePath.superclass.showHoverEffect.call(this);
};


/**
 * @override
 */
DvtDrillablePath.prototype.CreateSelectedHoverStrokes = function() {
  if (!this.SelectedHoverInnerStroke) {
    this.SelectedHoverInnerStroke = this.HoverInnerStroke.clone();
    this.SelectedHoverInnerStroke.setWidth(DvtDrillablePath.HOVER_STROKE_WIDTH);
    if (this._bSupportsVectorEffects)
      this.SelectedHoverInnerStroke.setFixedWidth(true);
  }
  if (!this.SelectedHoverOuterStroke) {
    this.SelectedHoverOuterStroke = this.SelectedOuterStroke.clone();
    this.SelectedHoverOuterStroke.setWidth(DvtDrillablePath.SELECTED_HOVER_OUTER_STROKE_WIDTH);
    if (this._bSupportsVectorEffects)
      this.SelectedHoverOuterStroke.setFixedWidth(true);
  }
};


/**
 * @override
 */
DvtDrillablePath.prototype.hideHoverEffect = function() {
  if (this.isSelected()) {
    this.SelectedInnerStroke = this._adjustStrokeZoomWidth(this.SelectedInnerStroke, DvtDrillablePath.SELECTED_INNER_STROKE_WIDTH);
    this.SelectedOuterStroke = this._adjustStrokeZoomWidth(this.SelectedOuterStroke, DvtDrillablePath.SELECTED_OUTER_STROKE_WIDTH);
  }
  DvtDrillablePath.superclass.hideHoverEffect.call(this);
};


/**
 * @override
 */
DvtDrillablePath.prototype.setHoverStroke = function(innerStroke, outerStroke) {
  DvtDrillablePath.superclass.setHoverStroke.call(this, innerStroke, outerStroke);
  if (this._bSupportsVectorEffects) {
    if (this.HoverInnerStroke)
      this.HoverInnerStroke.setFixedWidth(true);
    if (this.HoverOuterStroke)
      this.HoverOuterStroke.setFixedWidth(true);
  }
  return this;
};


/**
 * @override
 */
DvtDrillablePath.prototype.setSelectedStroke = function(innerStroke, outerStroke) {
  DvtDrillablePath.superclass.setSelectedStroke.call(this, innerStroke, outerStroke);
  if (this._bSupportsVectorEffects) {
    if (this.SelectedInnerStroke)
      this.SelectedInnerStroke.setFixedWidth(true);
    if (this.SelectedOuterStroke)
      this.SelectedOuterStroke.setFixedWidth(true);
  }
  return this;
};


/**
 * @override
 */
DvtDrillablePath.prototype.setSelectedHoverStroke = function(innerStroke, outerStroke) {
  DvtDrillablePath.superclass.setSelectedHoverStroke.call(this, innerStroke, outerStroke);
  if (this._bSupportsVectorEffects) {
    if (this.SelectedHoverInnerStroke)
      this.SelectedHoverInnerStroke.setFixedWidth(true);
    if (this.SelectedHoverOuterStroke)
      this.SelectedHoverOuterStroke.setFixedWidth(true);
  }
  return this;
};


/**
 * Sets the disclosed stroke for this shape.
 * @return DvtDrillablePath To be used for chaining
 */
DvtDrillablePath.prototype.setDisclosedStroke = function(innerStroke, outerStroke) {
  this._disclosedInnerStroke = innerStroke;
  if (this._disclosedInnerStroke && this._bSupportsVectorEffects)
    this._disclosedInnerStroke.setFixedWidth(true);
  this._disclosedOuterStroke = outerStroke;
  if (this._disclosedOuterStroke && this._bSupportsVectorEffects)
    this._disclosedOuterStroke.setFixedWidth(true);
  return this;
};

DvtDrillablePath.prototype.savePatternFill = function(fill) {
  this._ptFill = fill;
};

DvtDrillablePath.prototype.getSavedPatternFill = function() {
  return this._ptFill;
};

DvtDrillablePath.prototype._updateStrokeZoomWidth = function(shape, fixedWidth) {
  if (!this._bSupportsVectorEffects) {
    var stroke = shape.getStroke();
    if (stroke) {
      stroke = stroke.clone();
      stroke.setWidth(fixedWidth / this.Zoom);
      shape.setStroke(stroke);
    }
  }
};

DvtDrillablePath.prototype._adjustStrokeZoomWidth = function(stroke, fixedWidth) {
  if (!this._bSupportsVectorEffects) {
    var adjustedStroke = stroke.clone();
    adjustedStroke.setWidth(fixedWidth / this.Zoom);
    return adjustedStroke;
  }
  return stroke;
};

DvtDrillablePath.prototype.handleZoomEvent = function(pzcMatrix) {
  this.Zoom = pzcMatrix.getA();
  if (this.isDrilled()) {
    this._updateStrokeZoomWidth(this._disclosedInnerShape, DvtDrillablePath.DISCLOSED_INNER_STROKE_WIDTH);
    this._updateStrokeZoomWidth(this._disclosedOuterShape, DvtDrillablePath.DISCLOSED_OUTER_STROKE_WIDTH);
  }
  else if (this.isSelected()) {
    if (this.isHoverEffectShown()) {
      this._updateStrokeZoomWidth(this.InnerShape, DvtDrillablePath.HOVER_STROKE_WIDTH);
      this._updateStrokeZoomWidth(this, DvtDrillablePath.SELECTED_HOVER_OUTER_STROKE_WIDTH);
    } else {
      this._updateStrokeZoomWidth(this.InnerShape, DvtDrillablePath.SELECTED_INNER_STROKE_WIDTH);
      this._updateStrokeZoomWidth(this, DvtDrillablePath.SELECTED_OUTER_STROKE_WIDTH);
    }
  }
  else if (this.isHoverEffectShown()) {
    this._updateStrokeZoomWidth(this.InnerShape, DvtDrillablePath.HOVER_STROKE_WIDTH);
  }
  else {
    this._updateStrokeZoomWidth(this, 1);
  }
};
// For MAF this != window and we want to use this
// For JET this isn't available in use strict mode so we want to use window
var ref = this ? this : window;
var DvtBaseMapManager;
if (ref['DvtBaseMapManager']) {
  DvtBaseMapManager = ref['DvtBaseMapManager'];
} else {
  DvtBaseMapManager = {};
  ref['DvtBaseMapManager'] = DvtBaseMapManager;
}

DvtObj.createSubclass(DvtBaseMapManager, DvtObj, 'DvtBaseMapManager');

DvtBaseMapManager.TYPE_LABELS = 0;// contain region labels
DvtBaseMapManager.TYPE_PATH = 1;// contain region paths
DvtBaseMapManager.TYPE_PARENTREGION_CHILDREN = 2;// contains parent region id to current region id mappings.  Stored this way since mapping is only needed if child layer is present.
DvtBaseMapManager.TYPE_LABELINFO = 3;// contains leaderline info
DvtBaseMapManager.TYPE_DIM = 4; //basemap dimensions
DvtBaseMapManager._INDEX = '__index';
DvtBaseMapManager._GLOBAL_MAPS = new Object();

DvtBaseMapManager.getBaseMapDim = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  if (layer) {
    var dimAr = layer[DvtBaseMapManager.TYPE_DIM];
    if (dimAr)
      return new DvtRectangle(dimAr[0], dimAr[1], dimAr[2], dimAr[3]);
  }
  return null;
};

DvtBaseMapManager.getAreaLabelInfo = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  if (layer)
    return layer[DvtBaseMapManager.TYPE_LABELINFO];
  else
    return null;
};

DvtBaseMapManager.getAreaNames = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  if (layer)
    return layer[DvtBaseMapManager.TYPE_LABELS];
  else
    return null;
};

DvtBaseMapManager.getLongAreaLabel = function(baseMapName, layerName, areaId) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  var labels;
  if (layer)
    labels = layer[DvtBaseMapManager.TYPE_LABELS];
  if (labels && labels[areaId])
    return labels[areaId][1];
  else
    return null;
};

DvtBaseMapManager.getCityCoordinates = function(baseMapName, city) {
  DvtBaseMapManager._processUnprocessedMaps();
  var basemap = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (basemap) {
    var cityLayer = basemap['cities'];
    if (cityLayer) {
      var coords = cityLayer[DvtBaseMapManager.TYPE_PATH][city];
      if (coords)
        return new DvtPoint(coords[0], coords[1]);
    }
  }
  return null;
};

DvtBaseMapManager.getCityLabel = function(baseMapName, city) {
  DvtBaseMapManager._processUnprocessedMaps();
  var basemap = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (basemap) {
    var cityLayer = basemap['cities'];
    if (cityLayer) {
      var cityLabel = cityLayer[DvtBaseMapManager.TYPE_LABELS][city];
      if (cityLabel)
        return cityLabel[1];
    }
  }
  return null;
};

DvtBaseMapManager.getAreaCenter = function(baseMapName, layerName, areaId) {
  DvtBaseMapManager._processUnprocessedMaps();
  var basemap = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (basemap) {
    var layer = basemap[layerName];
    if (layer) {
      var labelInfo = layer[DvtBaseMapManager.TYPE_LABELINFO];
      if (labelInfo && labelInfo[areaId]) {
        var ar = labelInfo[areaId][0];
        var bounds = DvtRectangle.create(ar);
        return bounds.getCenter();
      } else {
        // manually calculate the area path center
        var path = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName][DvtBaseMapManager.TYPE_PATH][areaId];
        if (!path)
          return null;
        var arPath = DvtPathUtils.createPathArray(path);
        var dim = DvtPathUtils.getDimensions(arPath);
        return dim.getCenter();
      }
    }
  }
  return null;
};

DvtBaseMapManager.getChildLayerName = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  if (layer)
    return DvtBaseMapManager._GLOBAL_MAPS[baseMapName][DvtBaseMapManager._INDEX][layer['__index'] + 1];
  else
    return null;
};


/**
 * Returns the parent layer name of the passed in layer or null if none exists
 * @param {String} baseMapName The basemap name
 * @param {String} layerName The layer name
 * @return {String} The parent layer name of the passed in layer
 */
DvtBaseMapManager.getParentLayerName = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var layer = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName];
  if (layer)
    return DvtBaseMapManager._GLOBAL_MAPS[baseMapName][DvtBaseMapManager._INDEX][DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName]['__index'] - 1];
  else
    return null;
};

DvtBaseMapManager.getAreaPaths = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  return DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName][DvtBaseMapManager.TYPE_PATH];
};

DvtBaseMapManager.getPathForArea = function(baseMapName, layerName, area) {
  DvtBaseMapManager._processUnprocessedMaps();
  return DvtBaseMapManager._GLOBAL_MAPS[baseMapName][layerName][DvtBaseMapManager.TYPE_PATH][area];
};

DvtBaseMapManager.getChildrenForLayerAreas = function(baseMapName, layerName) {
  DvtBaseMapManager._processUnprocessedMaps();
  var childLayerName = DvtBaseMapManager.getChildLayerName(baseMapName, layerName);
  if (childLayerName) {
    var children = DvtBaseMapManager._GLOBAL_MAPS[baseMapName][childLayerName][DvtBaseMapManager.TYPE_PARENTREGION_CHILDREN];
    if (children)
      return children;
    else
      return [];
  }
  return [];
};

DvtBaseMapManager.getMapLayerName = function(baseMapName, index) {
  DvtBaseMapManager._processUnprocessedMaps();
  return DvtBaseMapManager._GLOBAL_MAPS[baseMapName][DvtBaseMapManager._INDEX][index];
};


/**
 * @export
 * called at the end of the base map JS metadata files to register new base map layer metadata
 */
DvtBaseMapManager.registerBaseMapLayer = function(baseMapName, layerName, labelMetadata, pathMetadata, parentsRegionMetadata, labelInfoMetadata, index, dim) {
  // bootstrap global base map metadata
  // find or create basemap metadata
  var basemapMetadata = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (!basemapMetadata) {
    basemapMetadata = new Object();
    basemapMetadata[DvtBaseMapManager._INDEX] = new Array();
    DvtBaseMapManager._GLOBAL_MAPS[baseMapName] = basemapMetadata;
  }

  // find or create layer metadata
  var layerMetadata = basemapMetadata[layerName];
  if (!layerMetadata) {
    layerMetadata = new Object();
    basemapMetadata[layerName] = layerMetadata;
    // custom area layers don't have indicies when registered
    if (index != null)
      basemapMetadata[DvtBaseMapManager._INDEX][index] = layerName;
  }

  // register layer metadata base on type
  layerMetadata[DvtBaseMapManager.TYPE_LABELS] = labelMetadata;
  layerMetadata[DvtBaseMapManager.TYPE_PATH] = pathMetadata;
  layerMetadata[DvtBaseMapManager.TYPE_PARENTREGION_CHILDREN] = parentsRegionMetadata;
  layerMetadata[DvtBaseMapManager.TYPE_LABELINFO] = labelInfoMetadata;
  layerMetadata[DvtBaseMapManager.TYPE_DIM] = dim;
  layerMetadata[DvtBaseMapManager._INDEX] = index;
};


/**
 * @export
 */
DvtBaseMapManager.registerResourceBundle = function(baseMapName, layerName, labelMetadata) {
  var basemapMetadata = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (!basemapMetadata) {
    basemapMetadata = new Object();
    DvtBaseMapManager._GLOBAL_MAPS[baseMapName] = basemapMetadata;
  }

  // find or create layer metadata
  var layerMetadata = basemapMetadata[layerName];
  if (!layerMetadata) {
    layerMetadata = new Object();
    basemapMetadata[layerName] = layerMetadata;
  }

  var layerMetadata = basemapMetadata[layerName];
  // Overwrite english labels with resource bundle language
  if (layerMetadata)
    layerMetadata[DvtBaseMapManager.TYPE_LABELS] = labelMetadata;
};


/**
 * @export
 */
DvtBaseMapManager.updateResourceBundle = function(baseMapName, layerName, labelMetadata) {
  var basemapMetadata = DvtBaseMapManager._GLOBAL_MAPS[baseMapName];
  if (basemapMetadata) {
    var layerMetadata = basemapMetadata[layerName];
    // Overwrite english labels with resource bundle language
    if (layerMetadata) {
      for (var prop in labelMetadata) {
        layerMetadata[DvtBaseMapManager.TYPE_LABELS][prop] = labelMetadata[prop];
      }
    }
  }
};

DvtBaseMapManager._processUnprocessedMaps = function() {
  var i;
  var args;
  var unprocessedMaps = DvtBaseMapManager['_UNPROCESSED_MAPS'];
  if (unprocessedMaps) {
    for (i = 0; i < unprocessedMaps[0].length; i++) { // registerBaseMapLayer
      args = unprocessedMaps[0][i];
      DvtBaseMapManager.registerBaseMapLayer(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    }
    for (i = 0; i < unprocessedMaps[1].length; i++) { // registerResourceBundle
      args = unprocessedMaps[1][i];
      DvtBaseMapManager.registerResourceBundle(args[0], args[1], args[2]);
    }
    for (i = 0; i < unprocessedMaps[2].length; i++) { // updateResourceBundle
      args = unprocessedMaps[2][i];
      DvtBaseMapManager.updateResourceBundle(args[0], args[1], args[2]);
    }
    DvtBaseMapManager['_UNPROCESSED_MAPS'] = null;
  }

  // update custom area layers and update hierarchy indicies
  var unprocessedParentUpdates = DvtBaseMapManager['_UNPROCESSED_PARENT_UPDATES'];
  if (unprocessedParentUpdates) {
    for (i = 0; i < unprocessedParentUpdates[0].length; i++) {
      args = unprocessedParentUpdates[0][i];
      // update extending layer parent mapping
      var basemapName = args[0];
      var extendedLayer = args[1];
      var layerName = args[2];
      var basemapMetadata = DvtBaseMapManager._GLOBAL_MAPS[basemapName];
      var basemapDim;
      var layerMetadata;
      if (basemapMetadata) {
        layerMetadata = basemapMetadata[extendedLayer];
        if (layerMetadata) {
          layerMetadata[DvtBaseMapManager.TYPE_PARENTREGION_CHILDREN] = args[3];
          basemapDim = layerMetadata[DvtBaseMapManager.TYPE_DIM];
          // get the index of the extended layer and update indicies for layers
          var index = layerMetadata[DvtBaseMapManager._INDEX];
          var indicies = basemapMetadata[DvtBaseMapManager._INDEX];
          indicies.splice(index, 0, layerName);
          basemapMetadata[layerName][DvtBaseMapManager._INDEX] = index;
          for (var i = (index + 1); i < indicies.length; i++) {
            var lowerLayer = basemapMetadata[indicies[i]];
            if (lowerLayer)
              lowerLayer[DvtBaseMapManager._INDEX]++;
          }
        }

        // update custom layer dimensions from extending layer
        layerMetadata = basemapMetadata[args[2]];
        if (layerMetadata) {
          layerMetadata[DvtBaseMapManager.TYPE_DIM] = basemapDim;
        }
      }
    }
    DvtBaseMapManager['_UNPROCESSED_PARENT_UPDATES'] = null;
  }
};

DvtBaseMapManager.simplifyAreaPaths = function(paths, basemapW, basemapH, viewportW, viewportH, zoomFactor) {
  // determine the scale factor for the map given the viewport
  if (zoomFactor > 0) {
    var dzx = viewportW / basemapW;
    var dzy = viewportH / basemapH;
    var dz = Math.min(dzx, dzy);
    var scale = 1 / (dz * zoomFactor); // 6 is the current max zoom
    if (scale <= 1)
      return paths;
    // If scale = 10 that means 10 pixels in the map coordinate space = 1 pixel in the current viewport
    // and any draw commands less than 10 pixels in the map coordinate space won't even show up in the viewport
    var simplifiedPaths = [];
    if (paths) {
      for (var path in paths) {
        var pathAr = paths[path];
        if (isNaN(pathAr))
          pathAr = DvtPathUtils.createPathArray(paths[path]);
        simplifiedPaths[path] = DvtPathUtils.simplifyPath(pathAr, scale);
      }
    }
    return simplifiedPaths;
  } else {
    return paths;
  }
};
/**
 * @constructor
 */
var DvtThematicMapCategoryWrapper = function(displayable, category)
{
  this.Init(displayable, category);
};

DvtObj.createSubclass(DvtThematicMapCategoryWrapper, DvtObj, 'DvtThematicMapCategoryWrapper');

DvtThematicMapCategoryWrapper.prototype.Init = function(displayable, category) {
  this._displayable = displayable;
  this._category = category;
};

DvtThematicMapCategoryWrapper.prototype.getCategories = function() {
  return this._category;
};

DvtThematicMapCategoryWrapper.prototype.getDisplayables = function() {
  return [this._displayable];
};
var DvtMapDrillEvent = function(drillType) {
  this.Init(DvtMapDrillEvent.TYPE);
  this._drillType = drillType;
};

DvtObj.createSubclass(DvtMapDrillEvent, DvtBaseComponentEvent, 'DvtMapDrillEvent');

DvtMapDrillEvent.TYPE = 'drill';
DvtMapDrillEvent.DRILL_UP = 0;
DvtMapDrillEvent.DRILL_DOWN = 1;
DvtMapDrillEvent.RESET = 2;


/**
 * Returns the array of currently drilled ids for the component.
 * @return {array} The array of currently drilled ids for the component.
 */
DvtMapDrillEvent.prototype.getDisclosed = function() {
  return this._disclosed;
};

DvtMapDrillEvent.prototype.setDisclosed = function(disclosed) {
  this._disclosed = disclosed;
};

DvtMapDrillEvent.prototype.getDrillType = function() {
  return this._drillType;
};
/**
 * Map action event.
 * @param {string} [clientId] The client id associated with this action event.
 * @param {string} [rowKey] The rowKey for the object associated with this event.
 * @param {string} [action] The action name.
 * @class
 * @constructor
 * @export
 */
var DvtMapActionEvent = function(clientId, rowKey, action) {
  this.Init(DvtMapActionEvent.TYPE);
  this._clientId = clientId;
  this._rowKey = rowKey;
  this._action = action;
};

DvtObj.createSubclass(DvtMapActionEvent, DvtBaseComponentEvent, 'DvtMapActionEvent');


/**
 * @export
 */
DvtMapActionEvent.TYPE = 'action';


/**
 * Returns the clientId associated with this event.
 * @return {string} clientId.
 * @export
 */
DvtMapActionEvent.prototype.getClientId = function() {
  return this._clientId;
};


/**
 * Returns the rowKey of the object associated with this event.
 * @return {string} rowKey.
 * @export
 */
DvtMapActionEvent.prototype.getRowKey = function() {
  return this._rowKey;
};


/**
 * Returns the action name.
 * @return {string} action.
 * @export
 */
DvtMapActionEvent.prototype.getAction = function() {
  return this._action;
};
/**
 * Base map layer metadata
 * @extends {DvtObj}
 * @class base map layer metadata
 * @constructor
 *
 * @param {DvtContext} context The rendering context
 * @param {String} label Text for label
 * @param {Array} labelInfo Contains the label bounding box at different zoom levels and leader line info
 * @param {String} labelDisplay Specifies whether to display labels. "off", "on", or "auto"
 * @param {DvtContainer} parentContainer The container to add the label to
 * @param {boolean} bSupportsVectorEffects Whether the rendering platform supports vector effects
 */
var DvtMapLabel = function(context, label, labelInfo, labelDisplay, parentContainer, bSupportsVectorEffects) {
  this.Init(context, label, labelInfo, labelDisplay, parentContainer, bSupportsVectorEffects);
};

DvtObj.createSubclass(DvtMapLabel, DvtOutputText, 'DvtMapLabel');


/**
 * Initializes label.  Sets bounding rectangle for label and draws leaderlines if present.
 *
 * @param {DvtContext} context The rendering context
 * @param {String} label Text for label
 * @param {Array} labelInfo Contains the label bounding box at different zoom levels and leader line info
 * @param {String} labelDisplay Specifies whether to display labels. "off", "on", or "auto"
 * @param {DvtContainer} parentContainer The container to add the label to
 * @param {boolean} bSupportsVectorEffects Whether the rendering platform supports vector effects
 * @protected
 */
DvtMapLabel.prototype.Init = function(context, label, labelInfo, labelDisplay, parentContainer, bSupportsVectorEffects) {
  DvtMapLabel.superclass.Init.call(this, context, label, 0, 0);
  //IE10, Flash/XML toolkit do not support vector-effects=non-scaling-stroke so we still need to set stroke width based on zoom
  this._bSupportsVectorEffects = bSupportsVectorEffects;
  this._boundRectangle = new Array();
  this.setMouseEnabled(false);
  this.alignCenter();
  this.alignMiddle();
  this._center = null;
  this._labelDisplay = labelDisplay;
  this._parentContainer = parentContainer;

  if (labelInfo) {
    this._boundRectangle.push(DvtRectangle.create(labelInfo[0]));
    if (labelInfo.length > 1) {
      this._leaderLines = new Array();

      for (var i = 1; i < labelInfo.length; i++) {
        var line = labelInfo[i];
        this._boundRectangle.push(DvtRectangle.create(line[0]));

        var polyline = new DvtPolyline(context, line[1]);
        polyline.setPixelHinting(true);
        var stroke = new DvtSolidStroke('#000000');
        if (this._bSupportsVectorEffects)
          stroke.setFixedWidth(true);
        polyline.setStroke(stroke);
        this._leaderLines.push(polyline);
      }
    }
  }
};

DvtMapLabel.prototype.addBounds = function(boundsRect) {
  this._boundRectangle.push(boundsRect);
};

DvtMapLabel.prototype.hasBounds = function() {
  return this._boundRectangle.length > 0;
};


/**
 * Updates this label's position, adding and
 * removing it as needed.
 * @param {DvtMatrix} pzcMatrix zoom matrix
 */
DvtMapLabel.prototype.update = function(pzcMatrix) {
  var zoom = pzcMatrix.getA();
  var state = -1;
  var estimatedDims = DvtTextUtils.guessTextDimensions(this);
  var remove = false;
  for (var i = 0; i < this._boundRectangle.length; i++) {
    var zoomW = this._boundRectangle[i].w * zoom;
    var zoomH = this._boundRectangle[i].h * zoom;
    // estimatedDims is accurate for text height
    if (estimatedDims.h <= zoomH) {
      if (estimatedDims.w <= zoomW) {
        state = i;
        break;
      } else {
        // estimatedDims is a conservative guess so if it doesn't fit we need to check the real dimensions
        if (!this.getParent()) {
          remove = true;
          this._parentContainer.addChild(this);
        }
        if (this.getDimensions().w <= zoomW) {
          state = i;
          break;
        }
      }
    }
  }

  // if labels are always displayed, use the last available bounding box
  if (state == -1 && this._labelDisplay == 'on')
    state = this._boundRectangle.length - 1;

  if (this._currentState != state) {
    if (state == -1) {
      this.reset();
    } else {
      if (!this.getParent())
        this._parentContainer.addChild(this);
      var center = this._boundRectangle[state].getCenter();
      this.setCenter(center);
      if (this._leaderLines) {
        this._parentContainer.removeChild(this._leaderLine);
        this._leaderLine = null;
        if (state > 0) {
          this._leaderLine = this._leaderLines[state - 1];
          this._parentContainer.addChild(this._leaderLine);
          // when using leaderliners, change text to black
          var style = this.getCSSStyle();
          style.setStyle(DvtCSSStyle.COLOR, '#000000');
          this.setCSSStyle(style);
          var labelBox = this._boundRectangle[state];
          var leaderLinePoints = this._leaderLine.getPoints();
          var numPoints = leaderLinePoints.length;
          if (labelBox.x > leaderLinePoints[numPoints - 2]) {
            // leaderline position: left
            this.alignLeft();
            this.alignMiddle();
            this.setCenter(new DvtPoint(labelBox.x, center.y));
          }
          else if (labelBox.y > leaderLinePoints[numPoints - 1]) {
            // leaderline position: top
            this.alignTop();
            this.alignCenter();
            this.setCenter(new DvtPoint(center.x, labelBox.y));
          }
          else if ((labelBox.x + labelBox.w) < leaderLinePoints[numPoints - 2]) {
            // leaderline position: right
            this.alignRight();
            this.alignMiddle();
            this.setCenter(new DvtPoint(labelBox.x + labelBox.w, center.y));
          }
          else if ((labelBox.y + labelBox.h) < leaderLinePoints[numPoints - 1]) {
            // leaderline position: bottom
            this.alignBottom();
            this.alignCenter();
            this.setCenter(new DvtPoint(center.x, labelBox.y + labelBox.h));
          }
        } else {
          // reset label alignment if label now fits without leader line
          this.alignCenter();
          this.alignMiddle();
          // reset label color
          var style = this.getCSSStyle();
          style.setStyle(DvtCSSStyle.COLOR, this._labelColor);
          this.setCSSStyle(style);
        }
      }
    }
    this._currentState = state;
  }
  else if (state == -1 && remove) { // remove label if we added it to call getDimensions and it wasn't already removed
    this._parentContainer.removeChild(this);
  }

  if (this._currentState != -1) {
    var mat = new DvtMatrix();
    mat.translate(zoom * this._center.x - this._center.x, zoom * this._center.y - this._center.y);
    this.setMatrix(mat);
    if (this._leaderLine) {
      this._leaderLine.setMatrix(new DvtMatrix(zoom, 0, 0, zoom));
      if (!this._bSupportsVectorEffects) {
        var stroke = this._leaderLine.getStroke().clone();
        stroke.setWidth(1 / zoom);
        this._leaderLine.setStroke(stroke);
      }
    }
  }

};

DvtMapLabel.prototype.setCenter = function(p) {
  this._center = p;
  this.setX(p.x);
  this.setY(p.y);
};

DvtMapLabel.prototype.getLeaderLine = function() {
  return this._leaderLine;
};

DvtMapLabel.prototype.getCenter = function() {
  return this._center;
};
DvtMapLabel.prototype.setCSSStyle = function(cssStyle) {
  DvtMapLabel.superclass.setCSSStyle.call(this, cssStyle);
  if (!this._labelColor) // save the label color for leader lines
    this._labelColor = cssStyle.getStyle(DvtCSSStyle.COLOR);
};


/**
 * Removes the label from the map and resets it current state
 */
DvtMapLabel.prototype.reset = function() {
  this._parentContainer.removeChild(this);
  this._currentState = -1;
  if (this._leaderLine) {
    this._parentContainer.removeChild(this._leaderLine);
    this._leaderLine = null;
  }
};

/**
 * Base map layer metadata
 * @extends {DvtObj}
 * @class base map layer metadata
 * @constructor
 */
var DvtMapDataObject = function(context, dataLayer, rowKey, clientId, regionId) {
  this.Init(context, dataLayer, rowKey, clientId, regionId);
};

DvtObj.createSubclass(DvtMapDataObject, DvtContainer, 'DvtMapDataObject');

DvtMapDataObject.prototype.Init = function(context, dataLayer, rowKey, clientId, regionId) {
  DvtMapDataObject.superclass.Init.call(this, context, null, clientId);
  this._categories = [];
  this.Shape = null;
  this._id = rowKey;
  this._clientId = clientId;
  this.AreaId = regionId;
  // Keep reference of the data layer and selection layer obj belongs to
  this._selectionLayer = null;
  this._datatipColor = '#000000';
  this.Zoom = 1;
  this._hasAction = false;
  this._dataLayer = dataLayer;
  this.Bundle = dataLayer.getMap().getBundle();
};

DvtMapDataObject.prototype.getId = function() {
  return this._id;
};

DvtMapDataObject.prototype.getClientId = function() {
  return this._clientId;
};

DvtMapDataObject.prototype.getAreaId = function() {
  return this.AreaId;
};

DvtMapDataObject.prototype.setDisplayable = function(disp) {
  this.Shape = disp;

  // WAI-ARIA
  if (this.Shape)
    this.Shape.setAriaRole('img');
};

DvtMapDataObject.prototype.setCenter = function(center) {
  this.Center = center;
};


/**
 * Returns the center of the map data object in relation to the actual size of the base map
 * @return {DvtPoint} The center of the map data object
 */
DvtMapDataObject.prototype.getCenter = function() {
  return this.Center;
};

DvtMapDataObject.prototype.getDisplayable = function() {
  return this.Shape;
};

DvtMapDataObject.prototype.setLabel = function(label) {
  this.Label = label;
};

DvtMapDataObject.prototype.getLabel = function() {
  return this.Label;
};

DvtMapDataObject.prototype.setLabelPosition = function(labelPos) {
  this.LabelPos = labelPos;
};

DvtMapDataObject.prototype.setHasAction = function(bool) {
  this._hasAction = bool;
};

DvtMapDataObject.prototype.hasAction = function() {
  return this._hasAction;
};

DvtMapDataObject.prototype.setAction = function(action) {
  this._action = action;
};

DvtMapDataObject.prototype.getAction = function() {
  return this._action;
};


/**
 * @override
 */
DvtMapDataObject.prototype.setVisible = function(bVisible) {
  DvtMapDataObject.superclass.setVisible.call(this, bVisible);
  if (this.Label)
    this.Label.setVisible(bVisible);
};


/**
 * Implemented for DvtLogicalObject
 * @override
 */
DvtMapDataObject.prototype.getDisplayables = function() {
  return [this.Shape];
};


/**
 * Implemented for DvtLogicalODvtCategoricalObject
 * @override
 */
DvtMapDataObject.prototype.getCategories = function() {
  return this._categories;
};

DvtMapDataObject.prototype.addCategory = function(cat) {
  this._categories.push(cat);
};


/**
 * Implemented for DvtTooltipSource
 * @override
 */
DvtMapDataObject.prototype.getDatatip = function() {
  return this._datatip;
};


/**
 * Implemented for DvtTooltipSource
 * @override
 */
DvtMapDataObject.prototype.getDatatipColor = function() {
  return this._datatipColor;
};

DvtMapDataObject.prototype.setDatatipColor = function(color) {
  this._datatipColor = color;
  if (this.Shape && this.Shape.setDataColor)
    this.Shape.setDataColor(color);
};

DvtMapDataObject.prototype.setDatatip = function(datatip) {
  this._datatip = datatip;
  this.UpdateAriaLabel();
};

/**
 * @override
 */
DvtMapDataObject.prototype.getAriaLabel = function() {
  var states = [];
  if (this.isSelectable())
    states.push(this.Bundle.getTranslatedString(this.isSelected() ? 'STATE_SELECTED' : 'STATE_UNSELECTED'));
  return DvtDisplayable.generateAriaLabel(this.getDatatip(), states, this.Bundle);
};

/**
 * Updates the aria label for a map data object
 * @protected
 */
DvtMapDataObject.prototype.UpdateAriaLabel = function() {
  if (!DvtAgent.deferAriaCreation() && this.Shape)
    this.Shape.setAriaProperty('label', this.getAriaLabel());
};

/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataObject.prototype.isSelectable = function() {
  return this.Shape.isSelectable();
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataObject.prototype.isSelected = function() {
  return this.Shape.isSelected();
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataObject.prototype.showHoverEffect = function() {
  //subclasses should override
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataObject.prototype.hideHoverEffect = function() {
  if (!this._isShowingKeyboardFocusEffect)
    this.HideHoverEffect();
};

DvtMapDataObject.prototype.HideHoverEffect = function() {
  //subclasses should override
};


/**
 * Implemented for DvtPopupSource.
 * Specifies the array of showPopupBehaviors for this node.
 * @param {array} behaviors The array of showPopupBehaviors for this node.
 */
DvtMapDataObject.prototype.setShowPopupBehaviors = function(behaviors) {
  this._showPopupBehaviors = behaviors;
};


/**
 * Implemented for DvtPopupSource.
 * @override
 */
DvtMapDataObject.prototype.getShowPopupBehaviors = function() {
  return this._showPopupBehaviors;
};


/**
 * Implemented for DvtDraggable.
 * @override
 */
DvtMapDataObject.prototype.isDragAvailable = function(clientIds) {
  var parentId = this._dataLayer.getClientId();
  for (var i = 0; i < clientIds.length; i++) {
    if (clientIds[i] == parentId)
      return parentId;
  }
  return parentId;
};

DvtMapDataObject.prototype.getDataLayer = function() {
  return this._dataLayer;
};


/**
 * Implemented for DvtDraggable.
 * @override
 */
DvtMapDataObject.prototype.getDragTransferable = function(mouseX, mouseY) {
  return this._dataLayer.__getDragTransferable(this);
};


/**
 * Implemented for DvtDraggable.
 * @override
 */
DvtMapDataObject.prototype.getDragFeedback = function(mouseX, mouseY) {
  return this._dataLayer.__getDragFeedback();
};


/**
 * Implemented for DvtKeyboardNavigable.
 * @override
 */
DvtMapDataObject.prototype.getNextNavigable = function(event) {
  if (event.type == DvtMouseEvent.CLICK) {
    return this;
  } else if (event.keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey) {
    // multi-select node with current focus; so we navigate to ourself and then let the selection handler take
    // care of the selection
    return this;
  } else {
    return DvtKeyboardHandler.getNextAdjacentNavigable(this, event, this.GetNavigables());
  }
};


/**
 * Returns the possible keyboard navigables
 * @return {array} The array of DvtMapDataObjects that are possible candidates for keyboard navigation
 */
DvtMapDataObject.prototype.GetNavigables = function() {
  // subclasses should override
  return null;
};


/**
 * Implemented for DvtKeyboardNavigable.
 * @override
 */
DvtMapDataObject.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace) {
  if (this.Shape && this.Shape.getParent())
    return this.Shape.getDimensions(targetCoordinateSpace);
  else
    return new DvtRectangle(0, 0, 0, 0);
};


/**
 * @override
 */
DvtMapDataObject.prototype.getTargetElem = function() {
  if (this.Shape)
    return this.Shape.getElem();
  return null;
};

/**
 * Implemented for DvtKeyboardNavigable.
 * @override
 */
DvtMapDataObject.prototype.showKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = true;
  this.showHoverEffect();
};


/**
 * Implemented for DvtKeyboardNavigable.
 * @override
 */
DvtMapDataObject.prototype.hideKeyboardFocusEffect = function() {
  if (this._isShowingKeyboardFocusEffect) {
    this._isShowingKeyboardFocusEffect = false;
    this.hideHoverEffect();
  }
};


/**
 * Implemented for DvtKeyboardNavigable.
 * @override
 */
DvtMapDataObject.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};


/**
 * Rescale and translate
 */
DvtMapDataObject.prototype.HandleZoomEvent = function(pzcMatrix) {
  if (!this.Shape.getParent())
    return;
  this.Zoom = pzcMatrix.getA();
  this.recenter();
};

DvtMapDataObject.prototype.PositionLabel = function(pzcMatrix) {
  //subclasses should override if needed
};

DvtMapDataObject.prototype.recenter = function() {
  //subclasses should override if needed
};


/**
 * Returns the size of this data object. Data object size is used for sorting.
 * @return {Number} The data object size which is its width * height.
 */
DvtMapDataObject.prototype.getSize = function() {
  return 0;
};

/**
 * @Override
 */
DvtMapDataObject.prototype.getTarget = function() {
  return this.Shape ? this.Shape.getElem() : null;
};
/**
 * Thematic Map custom area layer
 * @param {DvtContext} tmap The rendering context
 * @param {DvtMapDataLyaer} The data layer this data object belongs to
 * @param {String} rowKey The row key for this data object
 * @param {String} clientId The client id for data object
 * @param {String} regionId The area id for this data object
 * @constructor
 */
var DvtMapDataArea = function(context, dataLayer, rowKey, clientId, regionId) {
  this.Init(context, dataLayer, rowKey, clientId, regionId);
};

DvtObj.createSubclass(DvtMapDataArea, DvtMapDataObject, 'DvtMapDataArea');


/**
 * Helper method to initialize this DvtMapDataArea object
 * @param {DvtContext} tmap The rendering context
 * @param {DvtMapDataLyaer} The data layer this data object belongs to
 * @param {String} rowKey The row key for this data object
 * @param {String} clientId The client id for data object
 * @param {String} regionId The area id for this data object
 * @protected
 */
DvtMapDataArea.prototype.Init = function(context, dataLayer, rowKey, clientId, regionId) {
  DvtMapDataArea.superclass.Init.call(this, context, dataLayer, rowKey, clientId, regionId);
  this._isHoverEffectShowing = false;
};

DvtMapDataArea.prototype.setDisplayable = function(disp) {
  DvtMapDataArea.superclass.setDisplayable.call(this, disp);
};

DvtMapDataArea.prototype.setAreaLayer = function(layer) {
  this._dataAreaLayer = layer;
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataArea.prototype.setSelected = function(selected) {
  // for initial selection where hover effect isn't shown on selection
  if (selected && !this._isHoverEffectShowing)
    this._dataAreaLayer.addChild(this.Shape);
  this.Shape.setSelected(selected);
  this.UpdateAriaLabel();
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataArea.prototype.showHoverEffect = function() {
  this._dataAreaLayer.addChild(this.Shape);
  this.Shape.showHoverEffect();
  this._isHoverEffectShowing = true;
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataArea.prototype.HideHoverEffect = function() {
  if (this.isSelected())
    this._dataAreaLayer.addChild(this.Shape);
  else
    this._dataAreaLayer.addChildAt(this.Shape, 0);
  this.Shape.hideHoverEffect();
  this._isHoverEffectShowing = false;
};

DvtMapDataArea.prototype.isDrilled = function() {
  return this.Shape.isDrilled();
};

DvtMapDataArea.prototype.setDrilled = function(drilled) {
  this._isDrilled = drilled;
  if (drilled)
    this._dataAreaLayer.addChild(this.Shape);
  else
    this._dataAreaLayer.addChildAt(this.Shape, 0);
  this.Shape.setDrilled(drilled);
};


/**
 * @override
 */
DvtMapDataArea.prototype.HandleZoomEvent = function(pzcMatrix) {
  if (!this.Shape.getParent())
    return;
  DvtMapDataArea.superclass.HandleZoomEvent.call(this, pzcMatrix);
  this.Shape.handleZoomEvent(pzcMatrix);
  if (!this.isDrilled())
    this.PositionLabel(pzcMatrix);
};


/**
 * @override
 */
DvtMapDataArea.prototype.PositionLabel = function(pzcMatrix) {
  if (this.Label)
    this.Label.update(pzcMatrix);
};


/**
 * @override
 */
DvtMapDataArea.prototype.GetNavigables = function() {
  return this.getDataLayer().getMap().getNavigableAreas();
};
/**
 * Base map layer metadata
 * @extends {DvtObj}
 * @class base map layer metadata
 * @constructor
 */
var DvtMapDataMarker = function(context, dataLayer, rowKey, clientId, regionId) {
  this.Init(context, dataLayer, rowKey, clientId, regionId);
};
DvtMapDataMarker.DEFAULT_MARKER_ALPHA = 1;
DvtMapDataMarker.DEFAULT_MARKER_SIZE = 8.0;
DvtMapDataMarker.DEFAULT_MARKER_SHAPE = 'c';
DvtMapDataMarker.DEFAULT_MARKER_SCALE = 1.0;

DvtObj.createSubclass(DvtMapDataMarker, DvtMapDataObject, 'DvtMapDataMarker');

DvtMapDataMarker.prototype.Init = function(context, dataLayer, rowKey, clientId, regionId) {
  DvtMapDataMarker.superclass.Init.call(this, context, dataLayer, rowKey, clientId, regionId);
  this.InitCanvasZoom = 1.0;
  this._size = 0;
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataMarker.prototype.setSelected = function(selected) {
  this.Shape.setSelected(selected);
  this.UpdateAriaLabel();
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataMarker.prototype.showHoverEffect = function() {
  this.Shape.showHoverEffect();
};


/**
 * Implemented for DvtSelectable
 * @override
 */
DvtMapDataMarker.prototype.HideHoverEffect = function() {
  this.Shape.hideHoverEffect();
};


/**
 * @override
 */
DvtMapDataMarker.prototype.PositionLabel = function(pzcMatrix) {
  if (this.Label) {
    this.Label.alignCenter();
    var x = (this.Shape.getX() + this.Shape.getScaledWidth() / 2) * this.Zoom;
    var markerY = this.Shape.getY() * this.Zoom;
    var markerH = this.Shape.getScaledHeight();
    var markerType = this.Shape.getType();

    var y;
    if (this.LabelPos == 'top') {
      y = markerY - 4;
      this.Label.alignBottom();
    } else if (this.LabelPos == 'bottom') {
      y = markerY + markerH;
      this.Label.alignTop();
    } else if (markerType == DvtMarker.TRIANGLE_UP) {
      // we need to move center of the label to the center of gravity, it looks much better
      y = markerY + 2 * markerH / 3;
      // in this special case we need special alignment since standard baseline has to be higher than
      // in other cases to be preciesly in the center of gravity
      this.Label.alignMiddle();
    } else if (markerType == DvtMarker.TRIANGLE_DOWN) {
      // we need to move center of the label to the center of gravity, it looks much better
      y = markerY + markerH / 3;
      this.Label.alignMiddle();
    } else {
      y = markerY + markerH / 2;
      this.Label.alignMiddle();
    }

    this.Label.setX(x);
    this.Label.setY(y);
  }
};


/**
 * @override
 */
DvtMapDataMarker.prototype.recenter = function() {
  var parent = this.Shape.getParent();
  var width = this.Shape.getScaledWidth();
  var height = this.Shape.getScaledHeight();
  if (width != null && height != null && parent) {
    var rotation = this.Shape.getRotation();
    if (this.Label && this.Shape.getRotation()) {
      parent.setTranslate(this.Center.x * this.Zoom - this.Center.x, this.Center.y * this.Zoom - this.Center.y);
      DvtAgent.workaroundFirefoxRepaint(parent);
    } else {
      var rotatedCenterX = this.Center.x * Math.cos(rotation) - this.Center.y * Math.sin(rotation);
      var rotatedCenterY = this.Center.x * Math.sin(rotation) + this.Center.y * Math.cos(rotation);
      this.Shape.setTranslate(this.Center.x * this.Zoom - rotatedCenterX, this.Center.y * this.Zoom - rotatedCenterY);
      DvtAgent.workaroundFirefoxRepaint(this.Shape);
    }
  }
};


/**
 * @override
 */
DvtMapDataMarker.prototype.GetNavigables = function() {
  return this.getDataLayer().getMap().getNavigableObjects();
};


/**
 * Sets the size of this marker. Marker size is used for marker sorting.
 * @param {Number} size The marker size which is its width * height.
 */
DvtMapDataMarker.prototype.setSize = function(size) {
  this._size = size;
};


/**
 * @override
 */
DvtMapDataMarker.prototype.getSize = function() {
  return this._size;
};
var DvtMapDataImage = function(context, dataLayer, rowKey, clientId, regionId) {
  this.Init(context, dataLayer, rowKey, clientId, regionId);
};

DvtObj.createSubclass(DvtMapDataImage, DvtMapDataObject, 'DvtMapDataImage');

/**
 * Initializes this DvtMapDataImage object
 * @param {DvtContext} context The rendering context
 * @param {DvtMapDataLayer} dataLayer The parent map data layer
 * @param {String} rowKey This data object's row key
 * @param {String} clientId This data object's client id
 * @param {String} regionId This data object's region id. Null if not associated with a region.
 * @protected
 */
DvtMapDataImage.prototype.Init = function(context, dataLayer, rowKey, clientId, regionId) {
  DvtMapDataImage.superclass.Init.call(this, context, dataLayer, rowKey, clientId, regionId);
};


/**
 * For DvtImage loading only
 * @param {Object} image The object containing image dimension info
 */
DvtMapDataImage.prototype.onImageLoaded = function(image) {
  if (image && image.width && image.height) {
    if (!this.Shape.getWidth())
      this.Shape.setWidth(image.width);
    if (!this.Shape.getHeight())
      this.Shape.setHeight(image.height);
    this.setSize(image.width * image.height);
    this.Shape.setX(this.Center.x - image.width / 2);
    this.Shape.setY(this.Center.y - image.height / 2);
    this.recenter();
  }
};

/**
 * @override
 */
DvtMapDataImage.prototype.isSelected = function() {
  return false;
};

/**
 * @override
 */
DvtMapDataImage.prototype.isSelectable = function() {
  return false;
};

/**
 * @override
 */
DvtMapDataImage.prototype.recenter = function() {
  var width = this.Shape.getWidth();
  var height = this.Shape.getHeight();
  if (width != null && height != null && this.Shape.getParent()) {
    // Calculate the current (transformed) center point
    var curCenterX = this.Shape.getX() + width / 2;
    var curCenterY = this.Shape.getY() + height / 2;
    this.Shape.setTranslate(curCenterX * this.Zoom - this.Center.x, curCenterY * this.Zoom - this.Center.y);
  }
};


/**
 * Sets the size of this marker. Marker size is used for marker sorting.
 * @param {Number} size The marker size which is its width * height.
 */
DvtMapDataImage.prototype.setSize = function(size) {
  this._size = size;
};


/**
 * @override
 */
DvtMapDataImage.prototype.getSize = function() {
  return this._size;
};
/**
 * DvtMapDataObject extension for a DVT toolkit based json component associated with a DvtMapDataLayer used for
 * Thematic Map mashups.
 * @param {DvtContext} context The rendering context
 * @param {DvtMapDataLayer} dataLayer The parent map data layer
 * @param {String} rowKey This data object's row key
 * @param {String} clientId This data object's client id
 * @param {String} regionId This data object's region id. Null if not associated with a region.
 * @constructor
 */
var DvtMapDataComponent = function(context, dataLayer, rowKey, clientId, regionId) {
  this.Init(context, dataLayer, rowKey, clientId, regionId);
};

DvtObj.createSubclass(DvtMapDataComponent, DvtMapDataObject, 'DvtMapDataComponent');


/**
 * Initializes this DvtMapDataComponent object
 * @param {DvtContext} context The rendering context
 * @param {DvtMapDataLayer} dataLayer The parent map data layer
 * @param {String} rowKey This data object's row key
 * @param {String} clientId This data object's client id
 * @param {String} regionId This data object's region id. Null if not associated with a region.
 * @protected
 */
DvtMapDataComponent.prototype.Init = function(context, dataLayer, rowKey, clientId, regionId) {
  DvtMapDataComponent.superclass.Init.call(this, context, dataLayer, rowKey, clientId, regionId);
};


/**
 * Sets the width for this object
 * @param {number} width The object width
 */
DvtMapDataComponent.prototype.setWidth = function(width) {
  this._width = width;
};


/**
 * Gets the width for this object
 * @return {number} The object width
 */
DvtMapDataComponent.prototype.getWidth = function() {
  return this._width;
};


/**
 * Sets the height for this object
 * @param {number} height The object height
 */
DvtMapDataComponent.prototype.setHeight = function(height) {
  this._height = height;
};


/**
 * Gets the height for this object
 * @return {number} The object height
 */
DvtMapDataComponent.prototype.getHeight = function() {
  return this._height;
};


/**
 * Sets the starting x coordinate for this object
 * @param {number} x The x coordinate of this object
 */
DvtMapDataComponent.prototype.setX = function(x) {
  this._x = x;
};


/**
 * Sets the starting y coordinate for this object
 * @param {number} y The y coordinate of this object
 */
DvtMapDataComponent.prototype.setY = function(y) {
  this._y = y;
};


/**
 * Sets the json object for this object
 * @param {Object} json The json object to set
 */
DvtMapDataComponent.prototype.setJson = function(json) {
  this._json = json;
};


/**
 * @return {Object} The json object for this object
 */
DvtMapDataComponent.prototype.getJson = function() {
  return this._json;
};


/**
 * @override
 */
DvtMapDataComponent.prototype.recenter = function() {
  if (this.Shape.getParent()) {
    // Calculate the current (transformed) center point
    var curCenterX = this._x + this._width / 2;
    var curCenterY = this._y + this._height / 2;
    this.Shape.setTranslateX(this._x + curCenterX * this.Zoom - this.Center.x);
    this.Shape.setTranslateY(this._y + curCenterY * this.Zoom - this.Center.y);
  }
};


/**
 * @override
 */
DvtMapDataComponent.prototype.getSize = function() {
  return this._width * this._height;
};

/**
 * @override
 */
DvtMapDataComponent.prototype.isSelected = function() {
  return false;
};

/**
 * @override
 */
DvtMapDataComponent.prototype.isSelectable = function() {
  return false;
};
/**
 * Base map layer metadata
 * @extends {DvtObj}
 * @class base map layer metadata
 * @constructor
 */
var DvtMapArea = function(context, dvtShape, areaName, bSupportsVectorEffects) {
  this.Init(context, dvtShape, areaName, bSupportsVectorEffects);
};

DvtObj.createSubclass(DvtMapArea, DvtContainer, 'DvtMapArea');

DvtMapArea._DEFAULT_STROKE_WIDTH = 1;

DvtMapArea.prototype.Init = function(context, dvtShape, areaName, bSupportsVectorEffects) {
  DvtMapArea.superclass.Init.call(this, context);
  this._bSelectable = false;
  this._isSelected = false;
  this._areaName = areaName;
  this._shape = dvtShape;
  this.addChild(this._shape);

  //IE10, Flash/XML toolkit do not support vector-effects=non-scaling-stroke so we still need to set stroke width based on zoom
  this._bSupportsVectorEffects = bSupportsVectorEffects;
  var stroke = dvtShape.getStroke();
  if (stroke)
    this._areaStrokeWidth = stroke.getWidth();

  // WAI-ARIA
  if (this._shape)
    this._shape.setAriaRole('img');
};

DvtMapArea.prototype.getAreaName = function() {
  return this._areaName;
};


/**
 * Implemented for DvtTooltipSource
 * @override
 */
DvtMapArea.prototype.getTooltip = function() {
  return this._tooltip;
};


/**
 * Implemented for DvtTooltipSource
 */
DvtMapArea.prototype.setTooltip = function(tooltip) {
  this._tooltip = tooltip;
};

DvtMapArea.prototype.getStroke = function() {
  if (this._shape instanceof DvtShape)
    return this._shape.getStroke();
  return null;
};

DvtMapArea.prototype.setStroke = function(stroke) {
  if (this._shape instanceof DvtShape)
    this._shape.setStroke(stroke);
};

DvtMapArea.prototype.setFill = function(fill) {
  if (this._shape instanceof DvtShape) {
    this._shape.setFill(fill);
  }
};

DvtMapArea.prototype.getFill = function() {
  if (this._shape instanceof DvtShape) {
    return this._shape.getFill();
  }
  return null;
};

DvtMapArea.prototype.getCmds = function() {
  if (this._shape instanceof DvtPath) {
    return this._shape.getCmds();
  }
  return null;
};

DvtMapArea.prototype.setCmds = function(cmds) {
  if (this._shape instanceof DvtPath) {
    this._shape.setCmds(cmds);
  }
};

DvtMapArea.prototype.setSrc = function(src) {
  if (this._shape instanceof DvtImage) {
    this._shape.setSrc(src);
  }
};


/**
 * @override
 */
DvtMapArea.prototype.getDropSiteFeedback = function() {
  return this._shape.copyShape();
};


/**
 * @override
 */
DvtMapArea.prototype.contains = function(x, y) {
  var dims = this.getDimensions();
  return x >= dims.x && x <= dims.x + dims.w &&
         y >= dims.y && y <= dims.y + dims.h;
};

DvtMapArea.prototype.HandleZoomEvent = function(pzcMatrix) {
  if (!this._bSupportsVectorEffects && this._shape && this._areaStrokeWidth) {
    var zoomStroke = this._shape.getStroke().clone();
    zoomStroke.setWidth(this._areaStrokeWidth / pzcMatrix.getA());
    this._shape.setStroke(zoomStroke);
  }
};
/**
 * Thematic Map map layer
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map layer
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @constructor
 */
var DvtMapLayer = function(tmap, layerName, eventHandler) {
  this.Init(tmap, layerName, eventHandler);
};

DvtObj.createSubclass(DvtMapLayer, DvtObj, 'DvtMapLayer');


/**
 * Initializes this map layera
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map layer
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @protected
 */
DvtMapLayer.prototype.Init = function(tmap, layerName, eventHandler) {
  this._tmap = tmap;
  this.LayerName = layerName;
  this.EventHandler = eventHandler;
  this.DataLayers = {};
  this.PzcMatrix = new DvtMatrix();
};


/**
 * Registers a data layer to this map layer
 * @param {DvtMapDataLayer} dataLayer The data layer to add to this map layer
 */
DvtMapLayer.prototype.addDataLayer = function(dataLayer) {
  this.DataLayers[dataLayer.getClientId()] = dataLayer;
};

DvtMapLayer.prototype.PreDataLayerUpdate = function() {
  //subclasses to override
};

DvtMapLayer.prototype.PostDataLayerUpdate = function() {
  //subclasses to override
};


/**
 * Renders a data layer on ppr with new data if currently visible.
 * @param {DvtMapDataLayer} dataLayer The data layer to add and render for this DvtMapLayer
 * @param {DvtMatrix} pzcMatrix The current map transform
 * @param {String} topLayerName The layer name of the current top layer
 */
DvtMapLayer.prototype.updateDataLayer = function(dataLayer, pzcMatrix, topLayerName) {
  // stop previous animation
  if (this._animation) {
    this._animation.stop(true);
  }

  this.PzcMatrix = pzcMatrix;
  // Get old data layer
  this._oldDataLayer = this.getDataLayer(dataLayer.getClientId());
  this.addDataLayer(dataLayer);
  dataLayer.render(this.PzcMatrix);
  // create a zoom event so we can update the data objects with the current zoom
  dataLayer.HandleZoomEvent(new DvtZoomEvent(DvtZoomEvent.SUBTYPE_ZOOMED), this.PzcMatrix);

  if (this._oldDataLayer) {
    var anim = dataLayer.getAnimation();
    var animDur = dataLayer.getAnimationDuration();
    if (DvtBlackBoxAnimationHandler.isSupported(anim)) {
      // since certain animations like zoom and cubeToLeft/Right will use the bounding box of the object we need to
      // ensure all animated objects are the same dimensions by adding an invisible rect to all of them during animation
      var bounds1 = new DvtRectangle(0, 0, this._tmap.GetWidth(), this._tmap.GetHeight());
      var oldNonScaledContainers = this._oldDataLayer.getNonScaledContainers();
      for (var i = 0; i < oldNonScaledContainers.length; i++) {
        var rect = new DvtRect(this._tmap.getCtx(), 0, 0, this._tmap.GetWidth(), this._tmap.GetHeight());
        rect.setFill(null);
        oldNonScaledContainers[i].addChild(rect);
      }
      var newNonScaledContainers = dataLayer.getNonScaledContainers();
      for (var i = 0; i < newNonScaledContainers.length; i++) {
        var rect = new DvtRect(this._tmap.getCtx(), 0, 0, this._tmap.GetWidth(), this._tmap.GetHeight());
        rect.setFill(null);
        newNonScaledContainers[i].addChild(rect);
      }
      var anim1 = DvtBlackBoxAnimationHandler.getCombinedAnimation(this._tmap.getCtx(), anim,
          oldNonScaledContainers,
          newNonScaledContainers, bounds1, animDur);

      var bounds2 = new DvtRectangle(0, 0, this._tmap.GetWidth() / this.PzcMatrix.getA(), this._tmap.GetHeight() / this.PzcMatrix.getA());
      var oldScaledContainers = this._oldDataLayer.getScaledContainers();
      for (var i = 0; i < oldScaledContainers.length; i++) {
        var rect = new DvtRect(this._tmap.getCtx(), 0, 0, this._tmap.GetWidth() / this.PzcMatrix.getA(), this._tmap.GetHeight() / this.PzcMatrix.getA());
        rect.setFill(null);
        oldScaledContainers[i].addChild(rect);
      }
      var newScaledContainers = dataLayer.getScaledContainers();
      for (var i = 0; i < newScaledContainers.length; i++) {
        var rect = new DvtRect(this._tmap.getCtx(), 0, 0, this._tmap.GetWidth() / this.PzcMatrix.getA(), this._tmap.GetHeight() / this.PzcMatrix.getA());
        rect.setFill(null);
        newScaledContainers[i].addChild(rect);
      }

      var anim2 = DvtBlackBoxAnimationHandler.getCombinedAnimation(this._tmap.getCtx(), anim,
          oldScaledContainers,
          newScaledContainers, bounds2, animDur);
      this._animation = new DvtParallelPlayable(this._tmap.getCtx(), [anim1, anim2]);
    } else {
      var oldContainers = this._oldDataLayer.getContainers();
      for (var i = 0; i < oldContainers.length; i++) {
        var parent = oldContainers[i].getParent();
        parent.removeChild(oldContainers[i]);
      }
      this.PostDataLayerUpdate();
    }

    this.PreDataLayerUpdate();

    // If an animation was created, play it
    if (this._animation) {
      // Disable event listeners temporarily
      this.EventHandler.removeListeners(this._callbackObj);

      // Start the animation
      var thisRef = this;
      this._animation.setOnEnd(function() {thisRef.OnAnimationEnd(dataLayer)}, this);
      this._animation.play(true);
    }
  } else {
    this.PostDataLayerUpdate();
    this._tmap.OnUpdateLayerEnd();
  }
};

DvtMapLayer.prototype.getDataLayers = function() {
  return this.DataLayers;
};

DvtMapLayer.prototype.getDataLayer = function(clientId) {
  return this.DataLayers ? this.DataLayers[clientId] : null;
};

/**
 * Returns the name of this map layer i.e. continents, countries, states for built-in basemaps
 * @return {String} The name of this map layer
 */
DvtMapLayer.prototype.getLayerName = function() {
  return this.LayerName;
};

/**
 * Renders a map layer and its children
 * @param {DvtMatrix} pzcMatrix The current pan zoom canvas pan and zoom state
 */
DvtMapLayer.prototype.render = function(pzcMatrix) {
  this.PzcMatrix = pzcMatrix;
  for (var id in this.DataLayers)
    this.DataLayers[id].render(pzcMatrix);
};

/**
 * Handle for drilling to reset the currently drilled areas
 * @param {Array} fadeOutContainer The list of objects to fade out
 * @param {Array} doNotResetAreas The list of areas not to reset
 */
DvtMapLayer.prototype.reset = function(fadeOutContainer, doNotResetAreas) {
  for (var id in this.DataLayers)
    this.DataLayers[id].reset(fadeOutContainer, doNotResetAreas);
};

/**
 * Handles a zoom event for this map layer
 * @param {DvtZoomEvent} event The zoom event
 * @param {DvtMatrix} pzcMatrix The current pan zoom canvas pan and zoom state
 * @protected
 */
DvtMapLayer.prototype.HandleZoomEvent = function(event, pzcMatrix) {
  this.PzcMatrix = pzcMatrix;
  for (var id in this.DataLayers)
    this.DataLayers[id].HandleZoomEvent(event, pzcMatrix);
};

/**
 * Handles a pan event for this map layer
 * @param {DvtMatrix} pzcMatrix The current pan zoom canvas pan and zoom state
 * @protected
 */
DvtMapLayer.prototype.HandlePanEvent = function(pzcMatrix) {
  this.PzcMatrix = pzcMatrix;
  for (var id in this.DataLayers)
    this.DataLayers[id].HandlePanEvent(pzcMatrix);
};


/**
 * Cleans up animated objects after animation finishes
 * @param {DvtMapDataLayer} dataLayer The animated data layere
 * @protected
 */
DvtMapLayer.prototype.OnAnimationEnd = function(dataLayer) {
  // Clean up the old container used by black box updates
  if (this._oldDataLayer) {
    var oldContainers = this._oldDataLayer.getContainers();
    for (var i = 0; i < oldContainers.length; i++) {
      var parent = oldContainers[i].getParent();
      if (parent)
        parent.removeChild(oldContainers[i]);
    }
  }

  // remove invisible rect added for animation
  var newNonScaledContainers = dataLayer.getNonScaledContainers();
  for (var i = 0; i < newNonScaledContainers.length; i++)
    newNonScaledContainers[i].removeChildAt(newNonScaledContainers[i].getNumChildren() - 1);
  var newScaledContainers = dataLayer.getScaledContainers();
  for (var i = 0; i < newScaledContainers.length; i++)
    newScaledContainers[i].removeChildAt(newScaledContainers[i].getNumChildren() - 1);

  this.PostDataLayerUpdate();

  this._tmap.OnUpdateLayerEnd();
  // Reset the animation stopped flag
  // Remove the animation reference
  this._animation = null;
  // Restore event listeners
  this.EventHandler.addListeners(this._callbackObj);
};
/**
 * Thematic Map area layer
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map area layer
 * @param {String} labelDisplay Whether to display the labels for this map layer
 * @param {String} labelType The type of labels to display for this map layer (short or long)
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @constructor
 */
var DvtMapAreaLayer = function(tmap, layerName, labelDisplay, labelType, eventHandler) {
  this.Init(tmap, layerName, labelDisplay, labelType, eventHandler);
};

DvtObj.createSubclass(DvtMapAreaLayer, DvtMapLayer, 'DvtMapAreaLayer');

DvtMapAreaLayer._SHORT_NAME = 0;
DvtMapAreaLayer._LONG_NAME = 1;


/**
 * Helper method to initialize this DvtMapAreaLayer object
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map area layer
 * @param {String} labelDisplay Whether to display the labels for this map layer
 * @param {String} labelType The type of labels to display for this map layer (short or long)
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @protected
 */
DvtMapAreaLayer.prototype.Init = function(tmap, layerName, labelDisplay, labelType, eventHandler) {
  DvtMapAreaLayer.superclass.Init.call(this, tmap, layerName, eventHandler);
  this._labelDisplay = labelDisplay;
  this._labelType = labelType;
  this._areaLabels = new Object();
  this.Areas = new Object();
  this.AreaShapes = {};
  this.AreaNames = null;
  this._labelInfo = null;
  this._disclosed = [];
  this._renderArea = {}; // keep track of whether or not to render an area
  this._renderLabel = {}; // keep track of whether or not to render a label
  this._renderedLabels = {}; // keep track of the labels that are actually added to the DOM

  this.AreaContainer = new DvtContainer(this._tmap.getCtx());
  this.LabelContainer = new DvtContainer(this._tmap.getCtx());
  this._tmap.getAreaLayerContainer().addChildAt(this.AreaContainer, 0);
  this._tmap.getLabelContainer().addChildAt(this.LabelContainer, 0);

  this._dropTarget = new DvtThematicMapDropTarget(this, this._tmap.getMapName());
};

DvtMapAreaLayer.prototype.setAnimation = function(animType) {
  this._animType = animType;
};

DvtMapAreaLayer.prototype.getAnimation = function() {
  return this._animType;
};

DvtMapAreaLayer.prototype.setAnimationDuration = function(animDur) {
  this._animDur = animDur;
};

DvtMapAreaLayer.prototype.getAnimationDuration = function() {
  return this._animDur;
};

DvtMapAreaLayer.prototype.getDropTarget = function() {
  return this._dropTarget;
};

DvtMapAreaLayer.prototype.getLabelType = function() {
  return this._labelType;
};

DvtMapAreaLayer.prototype.setAreaShapes = function(shapes) {
  this.AreaShapes = shapes;
};

DvtMapAreaLayer.prototype.setAreaNames = function(values) {
  this.AreaNames = values;
  for (var area in this.AreaNames) {
    this.setAreaRendered(area, true);
    this.setLabelRendered(area, true);
  }
};

DvtMapAreaLayer.prototype.getShortAreaName = function(area) {
  return this.AreaNames[area][DvtMapAreaLayer._SHORT_NAME];
};

DvtMapAreaLayer.prototype.getLongAreaName = function(area) {
  return this.AreaNames[area][DvtMapAreaLayer._LONG_NAME];
};

DvtMapAreaLayer.prototype.setAreaLabelInfo = function(values) {
  this._labelInfo = values;
};

DvtMapAreaLayer.prototype.getLabelInfoForArea = function(area) {
  if (!this._labelInfo)
    return null;
  return this._labelInfo[area];
};

DvtMapAreaLayer.prototype.setAreaChildren = function(children) {
  this._children = children;
};

DvtMapAreaLayer.prototype.getChildrenForArea = function(area) {
  if (this._children[area])
    return this._children[area].split(',');
  else
    return [];
};

DvtMapAreaLayer.prototype.getArea = function(id) {
  return this.Areas[id];
};

DvtMapAreaLayer.prototype.getAreaShape = function(id) {
  return this.AreaShapes[id];
};

DvtMapAreaLayer.prototype.getLabelDisplay = function() {
  return this._labelDisplay;
};

DvtMapAreaLayer.prototype.setDropSiteCSSStyle = function(style) {
  this._dropSiteCSSStyle = style;
};

DvtMapAreaLayer.prototype.setLayerCSSStyle = function(style) {
  this._layerCSSStyle = style;
};

DvtMapAreaLayer.prototype.getLayerCSSStyle = function() {
  return this._layerCSSStyle;
};

/**
 * Sets whether an area in the area layer should be rendered.  Areas that contain a DvtMapDataArea do not need to
 * render its associated DvtMapArea since the data layer will handle the rendering.
 * @param {String} area The name of the area to update
 * @param {boolean} bRender True if the area should be drawn by the area layer
 */
DvtMapAreaLayer.prototype.setAreaRendered = function(area, bRender) {
  this._renderArea[area] = bRender;
};

/**
 * Sets whether a label for an area should be rendered.  Areas that contain a DvtMapDataMarker do not need to render
 * its associated area label even thought the DvtMapArea should be rendered.
 * @param {String} area The name of the area to update
 * @param {boolean} bRender True if the label should be drawn by the area layer
 */
DvtMapAreaLayer.prototype.setLabelRendered = function(area, bRender) {
  this._renderLabel[area] = bRender;
};

/**
 * Sets the currently isolated area for this area layer
 * @param {String} isolatedArea The id of the isolated area for this area layer
 */
DvtMapAreaLayer.prototype.setIsolatedArea = function(isolatedArea) {
  this._isolatedArea = isolatedArea;
  // reset the layer dimensions in case of data layer update
  this._layerDim = null;
  for (var area in this.AreaShapes) {
    if (area != isolatedArea)
      this._renderArea[area] = false;
  }
};

/**
 * returns the currently isolated area id for this area layer
 * @return {String}
 */
DvtMapAreaLayer.prototype.getIsolatedArea = function() {
  return this._isolatedArea;
};

/**
 * Returns the dimensions for this area layer.  Used for retrieving saved layer dimensions from built-in basemaps
 * and caching the layer dimensions
 * @return {DvtRectangle} The bounding box for this area layer
 */
DvtMapAreaLayer.prototype.getLayerDim = function() {
  if (!this._layerDim) {
    if (this._isolatedArea)
      this._layerDim = DvtPathUtils.getDimensions(DvtPathUtils.createPathArray(DvtBaseMapManager.getPathForArea(this._tmap.getMapName(), this.LayerName, this._isolatedArea)));
    else {
      if (this._tmap.getMapName() != 'world' && this._tmap.getMapName() != 'worldRegions')
        this._layerDim = DvtBaseMapManager.getBaseMapDim(this._tmap.getMapName(), this.LayerName);
      if (!this._layerDim) {
        // all layers for a basemap should have the same dimensions
        // need to combine area, data area and selected data area dimensions bc they are in separate containers
        var dim = this.AreaContainer.getDimensions().getUnion(this._tmap.getDataAreaContainer().getDimensions());
        // if we don't have cached dims and no objects have been rendered yet, dim will have 0 dimensions
        if (dim.w > 0 && dim.h > 0)
          this._layerDim = dim;
      }
    }
  }
  return this._layerDim;
};

DvtMapAreaLayer.prototype._createAreaAndLabel = function(area, bForceUpdateArea) {
  var areaShape = this.AreaShapes[area];
  if (areaShape) {
    if (bForceUpdateArea || !this.Areas[area])
      this.updateAreaShape(area);
    if (!this.Areas[area]) {
      var context = this._tmap.getCtx();
      var mapArea = new DvtMapArea(context, areaShape, area, this._tmap.supportsVectorEffects());
      this.Areas[area] = mapArea;
      this.EventHandler.associate(areaShape, mapArea);
      var tooltip = (this.AreaNames && this.AreaNames[area]) ? this.AreaNames[area][DvtMapAreaLayer._LONG_NAME] : null;
      mapArea.setTooltip(tooltip);
    }

    if (this._renderLabel[area]) {
      var label = this._areaLabels[area];
      if (!label) {
        if (this._labelDisplay != 'off' && this.AreaNames) {
          var labelText = (this._labelType == 'short') ? this.AreaNames[area][DvtMapAreaLayer._SHORT_NAME] :
                                                         this.AreaNames[area][DvtMapAreaLayer._LONG_NAME];
          if (labelText) {
            if (this._labelInfo && this._labelInfo[area])
              label = new DvtMapLabel(this._tmap.getCtx(), labelText, this._labelInfo[area], this._labelDisplay,
                                      this.LabelContainer, this._tmap.supportsVectorEffects());
            else {
              var areaDim = DvtDisplayableUtils.getDimensionsForced(this._tmap.getCtx(), areaShape);
              label = new DvtMapLabel(this._tmap.getCtx(), labelText, [[areaDim.x, areaDim.y, areaDim.w, areaDim.h]],
                                      this._labelDisplay, this.LabelContainer, this._tmap.supportsVectorEffects());
            }
            this._areaLabels[area] = label;
            if (this._layerCSSStyle)
              label.setCSSStyle(this._layerCSSStyle);
          }
        }
      }
    }
  }
};


/**
 * Adds and area and its label.  Can be used for data layer animations to draw
 * @param {String} area The area to be added.
 * @param {Array} fadeInObjs If provided, the array of objects that will be faded out
 * @private
 */
DvtMapAreaLayer.prototype._addAreaAndLabel = function(area, fadeInObjs) {
  if (this.AreaShapes[area]) {
    this.AreaContainer.addChild(this.Areas[area]);

    var label = this._areaLabels[area];
    if (label) {
      if (this._renderLabel[area])
        label.update(this.PzcMatrix);
      else
        label.reset();
      this._renderedLabels[area] = this._renderLabel[area];
    }

    if (fadeInObjs) {
      fadeInObjs.push(this.Areas[area]);
      if (label) {
        fadeInObjs.push(label);
        fadeInObjs.push(label.getLeaderLine());
      }
    }
  }
};


/**
 * Updates an area layer area's path commands based
 * @param {String} area The area id that needs to be updated
 */
DvtMapAreaLayer.prototype.updateAreaShape = function(area) {
  if (!this._paths || this._bUpdateShapesForRender) {
    this._bUpdateShapesForRender = false;
    var layerDim;
    if (this._tmap.getMapName() == 'world' || this._tmap.getMapName() == 'worldRegions')
      layerDim = DvtBaseMapManager.getBaseMapDim(this._tmap.getMapName(), this.LayerName);
    else
      layerDim = this.getLayerDim();
    // don't simplify area paths if we don't know the dimensions ahead of time
    if (!layerDim) {
      this._paths = DvtBaseMapManager.getAreaPaths(this._tmap.getMapName(), this.LayerName);
    } else {
      this._paths = DvtBaseMapManager.simplifyAreaPaths(DvtBaseMapManager.getAreaPaths(this._tmap.getMapName(), this.LayerName),
                                                  layerDim.w, layerDim.h, this._tmap.GetWidth(), this._tmap.GetHeight(),
                                                  this._tmap.getMaxZoomFactor());
    }
  }
  var cmd = this._paths[area];
  if (this.AreaShapes[area] && cmd) {
    this.AreaShapes[area].setCmds(cmd);
  } else {
    delete this.AreaShapes[area];
  }
};

/**
 * Resets which areas and labels within this area layer are rendered
 */
DvtMapAreaLayer.prototype.resetRenderedAreas = function() {
  // reset rendered areas on data layer update
  for (var area in this.AreaNames) {
    this.setAreaRendered(area, true);
    this.setLabelRendered(area, true);
  }
};

/**
 * @override
 */
DvtMapAreaLayer.prototype.updateDataLayer = function(dataLayer, pzcMatrix, topLayerName) {
  DvtMapAreaLayer.superclass.updateDataLayer.call(this, dataLayer, pzcMatrix, topLayerName);
  if (topLayerName == this.getLayerName()) {
    for (var area in this.AreaShapes) {
      this._createAreaAndLabel(area, true);
      if (this._renderArea[area])
        this._addAreaAndLabel(area);
    }
  }
};

/**
 * @override
 */
DvtMapAreaLayer.prototype.render = function(pzcMatrix) {
  // create areashapes and then create the DvtMapArea object for all areas
  this._bUpdateShapesForRender = true;
  for (var area in this.AreaShapes) {
    this._createAreaAndLabel(area, true);
    if (this._renderArea[area])
      this._addAreaAndLabel(area);
  }
  DvtMapAreaLayer.superclass.render.call(this, pzcMatrix);
};


/**
 * @override
 */
DvtMapAreaLayer.prototype.PreDataLayerUpdate = function() {
  // Create and render areas that were originally not created because the area was already created in the data layer
  for (var area in this._renderArea) {
    if (!this._renderArea[area]) {
      this._createAreaAndLabel(area, false);
      this._addAreaAndLabel(area);
    }
  }
};


/**
 * @override
 */
DvtMapAreaLayer.prototype.PostDataLayerUpdate = function() {
  // remove areas that were rendered in the data layer or created for the animation
  for (var area in this._renderArea) {
    if (!this._renderArea[area]) {
      this.AreaContainer.removeChild(this.Areas[area]);
      var label = this._areaLabels[area];
      if (label) {
        this._renderedLabels[area] = false;
        this.LabelContainer.removeChild(label);
        var leaderLine = label.getLeaderLine();
        if (leaderLine)
          this.LabelContainer.removeChild(leaderLine);
      }
    }
  }
};

/**
 * Renders a set of the areas within this area layer
 * @param {Array} areas List of areas to render
 * @param {Array} fadeInObjs Array of objects that will be animated into the view
 */
DvtMapAreaLayer.prototype._renderSelectedAreasAndLabels = function(areas, fadeInObjs) {
  for (var i = 0; i < areas.length; i++) {
    this._createAreaAndLabel(areas[i], false);
    // Do not render areas that were rendered in the data layer
    if (this._renderArea[areas[i]])
      this._addAreaAndLabel(areas[i], fadeInObjs);
  }
};

/**
 * Discloses areas within this area layer
 * @param {Array} areas List of area ids of areas to disclose
 * @param {Array} fadeInObjs Array of objects that will be animated into the view
 */
DvtMapAreaLayer.prototype.discloseAreas = function(areas, fadeInObjs) {
  this._renderSelectedAreasAndLabels(areas, fadeInObjs);
  for (var id in this.DataLayers)
    this.DataLayers[id].discloseAreas(areas, fadeInObjs, this.PzcMatrix);
  this._disclosed = this._disclosed.concat(areas);
};


/**
 * Undiscloses areas within this area layer
 * @param {Array} areas List of area ids of areas to undisclose
 * @param {Array} fadeOutObjs Array of objects that will be removed once undisclosed
 */
DvtMapAreaLayer.prototype.undiscloseAreas = function(areas, fadeOutObjs) {
  for (var id in this.DataLayers)
    this.DataLayers[id].undiscloseAreas(areas, fadeOutObjs);
  var childAreaLayer = this._tmap.getDrillChildLayer(this.LayerName);
  for (var i = 0; i < areas.length; i++) {
    var areaName = areas[i];
    if (this.Areas[areaName]) {
      var idx = DvtArrayUtils.getIndex(this._disclosed, areaName);
      if (idx !== -1) {
        this._disclosed.splice(idx, 1);
        fadeOutObjs.push(this.Areas[areaName]);
      }
    }
    // undisclose its child areas
    if (childAreaLayer)
      childAreaLayer.undiscloseAreas(this.getChildrenForArea(areaName), fadeOutObjs);
  }
};


/**
 * @override
 */
DvtMapAreaLayer.prototype.reset = function(fadeOutObjs, doNotResetAreas) {
  DvtMapAreaLayer.superclass.reset.call(this, fadeOutObjs, doNotResetAreas);
  if (this._tmap.getDrillMode() != 'none') {
    this.undiscloseAreas(this._disclosed, fadeOutObjs);
    this._disclosed = [];
  }
};


/**
 * Returns the node under the specified coordinates.
 * @param {number} x
 * @param {number} y
 * @return {DvtMapDataObject}
 */
DvtMapAreaLayer.prototype.__getObjectUnderPoint = function(x, y) {
  for (var id in this.Areas) {
    if (this.Areas[id].contains(x, y))
      return this.Areas[id];
  }
  // No object found, return null
  return null;
};


/**
 * Displays drop site feedback for the specified node.
 * @param {DvtMapArea} obj The object for which to show drop feedback, or null to remove drop feedback.
 * @return {DvtDisplayable} The drop site feedback, if any.
 */
DvtMapAreaLayer.prototype.__showDropSiteFeedback = function(obj) {
  // Remove any existing drop site feedback
  if (this._dropSiteFeedback) {
    this.AreaContainer.removeChild(this._dropSiteFeedback);
    this._dropSiteFeedback = null;
  }

  // Create feedback for the node
  if (obj) {
    this._dropSiteFeedback = obj.getDropSiteFeedback();
    if (this._dropSiteFeedback) {
      this._dropSiteFeedback.setFill(new DvtSolidFill(this._dropSiteCSSStyle.getStyle(DvtCSSStyle.BACKGROUND_COLOR)));
      var strokeWidth = this._dropSiteCSSStyle.getStyle(DvtCSSStyle.BORDER_WIDTH) ?
          this._dropSiteCSSStyle.getStyle(DvtCSSStyle.BORDER_WIDTH).substring(0, this._dropSiteCSSStyle.getStyle(DvtCSSStyle.BORDER_WIDTH).indexOf('px')) : 1;
      if (!this._tmap.supportsVectorEffects())
        strokeWidth /= this.PzcMatrix.getA();
      var stroke = new DvtSolidStroke(this._dropSiteCSSStyle.getStyle(DvtCSSStyle.BORDER_COLOR), 1, strokeWidth);
      if (this._tmap.supportsVectorEffects())
        stroke.setFixedWidth(true);

      this._dropSiteFeedback.setStroke(stroke);
      this.AreaContainer.addChild(this._dropSiteFeedback);
    }
  }

  return this._dropSiteFeedback;
};

/**
 * @override
 */
DvtMapAreaLayer.prototype.HandleZoomEvent = function(event, pzcMatrix) {
  DvtMapAreaLayer.superclass.HandleZoomEvent.call(this, event, pzcMatrix);
  if (!this._tmap.supportsVectorEffects()) {
    for (var area in this.Areas)
      this.Areas[area].HandleZoomEvent(pzcMatrix);
  }

  for (var area in this._renderedLabels) {
    if (this._renderedLabels[area]) {
      var label = this._areaLabels[area];
      if (label)
        label.update(pzcMatrix);
    }
  }
};
/**
 * Thematic Map custom area layer
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map area layer
 * @param {String} labelDisplay Whether to display the labels for this map layer
 * @param {String} labelType The type of labels to display for this map layer (short or long)
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @constructor
 */
var DvtMapCustomAreaLayer = function(tmap, layerName, labelDisplay, labelType, eventHandler) {
  this.Init(tmap, layerName, labelDisplay, labelType, eventHandler);
};

DvtObj.createSubclass(DvtMapCustomAreaLayer, DvtMapAreaLayer, 'DvtMapCustomAreaLayer');


/**
 * Helper method to initialize this DvtMapCustomAreaLayer object
 * @param {DvtThematicMap} tmap The thematic map this map layer belongs to
 * @param {String} layerName The name of map area layer
 * @param {String} labelDisplay Whether to display the labels for this map layer
 * @param {String} labelType The type of labels to display for this map layer (short or long)
 * @param {DvtEventManager} eventHandler The thematic map event manager
 * @protected
 */
DvtMapCustomAreaLayer.prototype.Init = function(tmap, layerName, labelDisplay, labelType, eventHandler) {
  DvtMapCustomAreaLayer.superclass.Init.call(this, tmap, layerName, labelDisplay, labelType, eventHandler);
};


/**
 * @override
 */
DvtMapCustomAreaLayer.prototype.updateAreaShape = function(area) {
};


/**
 * @override
 */
DvtMapCustomAreaLayer.prototype.getLayerDim = function() {
  return new DvtRectangle(0, 0, this._layerWidth, this._layerHeight);
};

DvtMapCustomAreaLayer.prototype._selectImageBasedOnResolution = function() {
  var widthRes = this._tmap.GetWidth();
  var heightRes = this._tmap.GetHeight();
  var images = this._areaLayerImages;
  // Iterate and use the first image with enough detail
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var source = image['source'];
    var width = image['width'];
    var height = image['height'];
    var isSvg = (source && source.search('.svg') > -1);

    // Use the image if it's SVG, a PNG whose size > resolution, or the last image provided.
    if (isSvg || (width >= widthRes && height >= heightRes) || i == images.length - 1) {
      //Since points are given in the coordinate space of the original image size, we always set the image we choose
      //to that size.  The <image> tag will scale image as necessary.
      return source;
    }
  }
};

DvtMapCustomAreaLayer.prototype.setAreaLayerImage = function(images) {
  var shape = null;
  var isRTL = DvtAgent.isRightToLeft(this._tmap.getCtx());
  // Use the images from the list provided
  if (images && images.length > 0) {
    var refWidth = images[0]['width'];
    var refHeight = images[0]['height'];
    this._layerWidth = refWidth;
    this._layerHeight = refHeight;

    // Filter the list to images matching the locale type.
    var locImages = [];
    for (var i = 0; i < images.length; i++) {
      if (isRTL && images[i]['dir'] == 'rtl')
        locImages.push(images[i]);
      else if (!isRTL && images[i]['dir'] == 'ltr')
        locImages.push(images[i]);
    }
    this._areaLayerImages = locImages.length > 0 ? locImages : images; // Use all images if none match the bidi flag
    this._imageSrc = this._selectImageBasedOnResolution();
    shape = new DvtImage(this._tmap.getCtx(), this._imageSrc, 0, 0, refWidth, refHeight);

  }
  if (shape) {
    this.setAreaNames({'image': [null, null]});
    this.setAreaShapes({'image': shape});
  }
};

DvtMapCustomAreaLayer.prototype.HandleZoomEvent = function(event, pzcMatrix) {
  DvtMapCustomAreaLayer.superclass.HandleZoomEvent.call(this, event, pzcMatrix);
  if (this.Areas['image']) {
    var newImageSrc = this._selectImageBasedOnResolution();
    if (newImageSrc != this._imageSrc) {
      this._imageSrc = newImageSrc;
      this.Areas['image'].setSrc(this._imageSrc);
    }
  }
};
var DvtMapDataLayer = function(tmap, parentLayer, clientId, eventHandler) {
  this.Init(tmap, parentLayer, clientId, eventHandler);
};

DvtObj.createSubclass(DvtMapDataLayer, DvtObj, 'DvtMapDataLayer');


/**
 * @param {string} layerId The client ID of the layer
 */
DvtMapDataLayer.prototype.Init = function(tmap, parentLayer, clientId, eventHandler) {
  this._tmap = tmap;
  this._clientId = clientId;

  this._areaObjs = [];
  this._dataObjs = [];

  this._eventHandler = eventHandler;

  // Drag and drop support
  this._dragSource = new DvtDragSource(tmap.getCtx());
  this._eventHandler.setDragSource(this._dragSource);

  this._dataAreaLayer = new DvtContainer(this._tmap.getCtx());
  this._dataPointLayer = new DvtContainer(this._tmap.getCtx());
  this._dataLabelLayer = new DvtContainer(this._tmap.getCtx());
  // Add containers to head of parent container so parent layer objects are always drawn first i.e. drilled area borders
  this._tmap.getDataAreaContainer().addChildAt(this._dataAreaLayer, 0);
  this._tmap.getDataPointContainer().addChildAt(this._dataPointLayer, 0);
  this._tmap.getLabelContainer().addChildAt(this._dataLabelLayer, 0);

  this._parentLayer = parentLayer;

  this._disclosed = [];
  this._drilled = [];
};

DvtMapDataLayer.prototype.getDragSource = function() {
  return this._dragSource;
};


/**
 * Returns the DvtContainers for this data layer
 * @return {Array} Array of DvtContainers
 */
DvtMapDataLayer.prototype.getContainers = function() {
  var containers = [this._dataAreaLayer, this._dataPointLayer, this._dataLabelLayer];
  return containers;
};


/**
 * Returns an array of scaled containers for data layer animation
 * @return {array} The array of scaled containers
 */
DvtMapDataLayer.prototype.getScaledContainers = function() {
  return [this._dataAreaLayer];
};


/**
 * Returns an array of non scaled containers for data layer animation
 * @return {array} The array of non scaled containers
 */
DvtMapDataLayer.prototype.getNonScaledContainers = function() {
  var containers = [this._dataLabelLayer];
  if (this._tmap.isMarkerZoomBehaviorFixed())
    containers.push(this._dataPointLayer);
  return containers;
};


/**
 * Returns the label container for this data layer
 * @return {DvtContainer} container for labels
 */
DvtMapDataLayer.prototype.getDataLabelContainer = function() {
  return this._dataLabelLayer;
};

DvtMapDataLayer.prototype.getMapLayer = function() {
  return this._parentLayer;
};

DvtMapDataLayer.prototype.getMap = function() {
  return this._tmap;
};

DvtMapDataLayer.prototype.getAllObjects = function() {
  return this._dataObjs.concat(this._areaObjs);
};


/**
 * Returns the area data objects in a data layer
 * @return {Array} The array of area objects
 */
DvtMapDataLayer.prototype.getAreaObjects = function() {
  return this._areaObjs;
};


/**
 * Returns the marker and image data objects in a data layer
 * @return {Array} The array of marker and image objects
 */
DvtMapDataLayer.prototype.getDataObjects = function() {
  return this._dataObjs;
};

DvtMapDataLayer.prototype.getNavigableAreaObjects = function() {
  var navigables = [];
  for (var i = 0; i < this._areaObjs.length; i++) {
    if (!this._areaObjs[i].isDrilled())
      navigables.push(this._areaObjs[i]);
  }
  return navigables;
};

DvtMapDataLayer.prototype.getNavigableDisclosedAreaObjects = function() {
  var navigables = [];
  for (var i = 0; i < this._areaObjs.length; i++) {
    for (var j = 0; j < this._disclosed.length; j++) {
      if (this._areaObjs[i].getAreaId() == this._disclosed[j]) {
        if (!this._areaObjs[i].isDrilled())
          navigables.push(this._areaObjs[i]);
      }
    }
  }
  return navigables;
};

DvtMapDataLayer.prototype.addDataObject = function(obj) {
  this._dataObjs.push(obj);
  this._eventHandler.associate(obj.getDisplayable(), obj);
};


/**
 * Adds an area object to this data layer
 * @param {DvtMapDataArea} obj The map area to add
 */
DvtMapDataLayer.prototype.addAreaObject = function(obj) {
  this._areaObjs.push(obj);
  this._eventHandler.associate(obj.getDisplayable(), obj);
  obj.setAreaLayer(this._dataAreaLayer);
};


/**
 * Removes an area object from this data layer
 * @param {DvtMapDataArea} obj The map area to remove
 * @private
 */
DvtMapDataLayer.prototype._removeAreaObject = function(obj) {
  var idx = this._areaObjs.indexOf(obj);
  if (idx !== -1)
    this._areaObjs.splice(idx, 1);
};

DvtMapDataLayer.prototype.getClientId = function() {
  return this._clientId;
};

DvtMapDataLayer.prototype.setAnimation = function(animType) {
  this._animType = animType;
};

DvtMapDataLayer.prototype.getAnimation = function() {
  return this._animType;
};

DvtMapDataLayer.prototype.setAnimationDuration = function(animDur) {
  this._animDur = animDur;
};

DvtMapDataLayer.prototype.getAnimationDuration = function() {
  return this._animDur;
};


/**
 * Sets the selection mode for this data layer
 * @param {String} mode The selection mode. Valid values are 's' and 'm'
 */
DvtMapDataLayer.prototype.setSelectionMode = function(mode) {
  this._selectionMode = mode;
  if (this._selectionMode) {
    this._selectionHandler = new DvtSelectionHandler(this._selectionMode);
    this._eventHandler.setSelectionHandler(this._clientId, this._selectionHandler);
  }
};

DvtMapDataLayer.prototype.isSelectable = function() {
  return this._selectionMode != null;
};

DvtMapDataLayer.prototype.setIsolatedAreaRowKey = function(isolated) {
  this._isolatedAreaRowKey = isolated;
};


/**
 * Since we don't set the area path commands until render time, we create an empty DvtDrillablePath when parsing the xml
 * so we can still set the area color and other info.  This path with no commands needs to be updated before adding to DOM.
 */
DvtMapDataLayer.prototype._updateAreaShape = function(areaObj) {
  var displayable = areaObj.getDisplayable();
  var pathToCopy = this._parentLayer.getAreaShape(areaObj.getAreaId());
  if (!pathToCopy) {
    this._removeAreaObject(areaObj);
    return false;
  } else {
    displayable.setCmds(pathToCopy.getCmds());
    return true;
  }
};


/**
 * Renders a specific DvtMapDataArea and updates the label
 * @param {number} areaIndex index of the area to be rendered
 * @return {boolean} Whether the area was successfully rendered
 * @private
 */
DvtMapDataLayer.prototype._renderAreaAndLabel = function(areaIndex) {
  if (this._updateAreaShape(this._areaObjs[areaIndex])) {
    var displayable = this._areaObjs[areaIndex].getDisplayable();
    this._dataAreaLayer.addChild(displayable);
    var label = this._areaObjs[areaIndex].getLabel();
    if (label) {
      if (!label.hasBounds()) {
        var areaDim = displayable.getDimensions();
        label.addBounds(areaDim);
      }
      label.update(this._pzcMatrix);
    }
    return true;
  }
  return false;
};


/**
 * Render the data layer objects
 * @param {DvtMatrix} pzcMatrix The matrix to use when rendering the data layer
 */
DvtMapDataLayer.prototype.render = function(pzcMatrix) {
  this._bFixPatterns = true;
  this._pzcMatrix = pzcMatrix;
  var areaLabelsToRemove = {};
  // first sort markers by size to prevent overlapping
  this._dataObjs.sort(function compare(a,b) {if (a.getSize() < b.getSize()) return 1; else if (a.getSize() > b.getSize()) return -1; else return 0;});
  for (var i = 0; i < this._dataObjs.length; i++) {
    var dataObj = this._dataObjs[i];
    var displayable = dataObj.getDisplayable();
    var label = dataObj.getLabel();
    if (label) {
      // For markers that have rotation and labels, create another container and add the label to that to prevent
      // rotating the label. The outer group should have all te transforms except for the rotation and the marker should
      // only have the rotation transform.
      var rotation = displayable.getRotation();
      if (rotation) {
        var container = new DvtContainer(displayable.getCtx());
        this._dataPointLayer.addChild(container);
        container.addChild(displayable);
        container.addChild(label);
      } else {
        this._dataPointLayer.addChild(displayable);
        displayable.addChild(label);
      }
      dataObj.PositionLabel(pzcMatrix);
    } else {
      this._dataPointLayer.addChild(displayable);
    }
    if (dataObj instanceof DvtMapDataComponent) {
      var json = dataObj.getJson();
      if (json)
        displayable.render(json, dataObj.getWidth(), dataObj.getHeight());
      else
        continue;
    }
    // if area marker, do not display area label
    var regionId = dataObj.getAreaId();
    if (regionId)
      areaLabelsToRemove[regionId] = true;
  }
  for (var i = 0; i < this._areaObjs.length; i++) {
    if (areaLabelsToRemove[this._areaObjs[i].getAreaId()])
      this._areaObjs[i].setLabel(null);
    // areaObjs array can be modified by _renderAreaAndLabel if area has
    // been removed from parent area layer due to path simplification routine
    if (!this._renderAreaAndLabel(i))
      i--;
  }

  if (this._initSelections)
    this._processInitialSelections();
};


/**
 * Discloses the children of the current drilled parent area.
 * @param {Array} areas The ids of the areas to disclose
 * @param {Array} fadeInObjs The objects that will be faded in for the drilling animation
 * @param {DvtMatrix} pzcMatrix The current canvas matrix
 */
DvtMapDataLayer.prototype.discloseAreas = function(areas, fadeInObjs, pzcMatrix) {
  this._pzcMatrix = pzcMatrix;
  var drilledAreas = [];
  for (var j = 0; j < areas.length; j++) {
    for (var i = 0; i < this._areaObjs.length; i++) {
      if (this._areaObjs[i].getAreaId() == areas[j]) {
        drilledAreas.push(this._areaObjs[i].getAreaId());
        this._renderAreaAndLabel(i);
        var displayable = this._areaObjs[i].getDisplayable();
        fadeInObjs.push(displayable);
        // update the disclosed area with the current zoom which is needed for IE to render the correct stroke widths
        displayable.handleZoomEvent(pzcMatrix);
        var label = this._areaObjs[i].getLabel();
        if (label) {
          fadeInObjs.push(label);
          var leaderLine = label.getLeaderLine();
          if (leaderLine)
            fadeInObjs.push(leaderLine);
        }
        break;
      }
    }
  }
  //If data layer contains markers or images, just add to data layer regardless of what area it is in if no id
  for (var i = 0; i < this._dataObjs.length; i++) {
    for (var j = 0; j < areas.length; j++) {
      var regionId = this._dataObjs[i].getAreaId();
      var displayable = this._dataObjs[i].getDisplayable();
      if (regionId != null) {
        if (regionId == areas[j]) {
          this._dataPointLayer.addChild(displayable);
          fadeInObjs.push(displayable);
        }
      } else {
        this._dataPointLayer.addChild(displayable);
        fadeInObjs.push(displayable);
      }
    }
  }
  this._disclosed = this._disclosed.concat(drilledAreas);
};

DvtMapDataLayer.prototype.undiscloseAreas = function(areas, fadeOutObjs) {
  for (var j = 0; j < areas.length; j++) {
    for (var i = 0; i < this._areaObjs.length; i++) {
      if (this._areaObjs[i].getAreaId() == areas[j]) {
        if (this._areaObjs[i].isDrilled())
          this._areaObjs[i].setDrilled(false);
        if (this._areaObjs[i].isSelected())
          this._selectionHandler.removeFromSelection(this._areaObjs[i]);
        var idx = DvtArrayUtils.getIndex(this._disclosed, areas[j]);
        if (idx > -1) {
          this._disclosed.splice(idx, 1);
          fadeOutObjs.push(this._areaObjs[i].getDisplayable());
          var label = this._areaObjs[i].getLabel();
          if (label) {
            fadeOutObjs.push(label);
            fadeOutObjs.push(label.getLeaderLine());
          }
        }
        break;
      }
    }
  }
};

DvtMapDataLayer.prototype.drill = function(areaName, fadeOutObjs) {
  for (var i = 0; i < this._areaObjs.length; i++) {
    if (this._areaObjs[i].getAreaId() == areaName) {
      this._areaObjs[i].setDrilled(true);
      this._drilled.push(areaName);
      fadeOutObjs.push(this._areaObjs[i].getDisplayable());
      var label = this._areaObjs[i].getLabel();
      if (label) {
        fadeOutObjs.push(label);
        var leaderLine = label.getLeaderLine();
        if (leaderLine)
          fadeOutObjs.push(leaderLine);
      }
      break;
    }
  }
  for (var i = 0; i < this._dataObjs.length; i++) {
    if (this._dataObjs[i].getAreaId() == areaName) {
      fadeOutObjs.push(this._dataObjs[i].getDisplayable());
      break;
    }
  }
};

DvtMapDataLayer.prototype.undrill = function(areaName, fadeInObjs) {
  for (var i = 0; i < this._areaObjs.length; i++) {
    if (this._areaObjs[i].getAreaId() == areaName) {
      var idx = DvtArrayUtils.getIndex(this._drilled, areaName);
      this._drilled.splice(idx, 1);
      this._areaObjs[i].setDrilled(false);
      var displayable = this._areaObjs[i].getDisplayable();
      this._dataAreaLayer.addChild(displayable);
      fadeInObjs.push(displayable);
      var label = this._areaObjs[i].getLabel();
      if (label) {
        label.update(this._pzcMatrix);
        fadeInObjs.push(label);
        fadeInObjs.push(label.getLeaderLine());
      }
      break;
    }
  }
  for (var i = 0; i < this._dataObjs.length; i++) {
    if (this._dataObjs[i].getAreaId() == areaName) {
      var displayable = this._dataObjs[i].getDisplayable();
      this._dataPointLayer.addChild(displayable);
      fadeInObjs.push(displayable);
      break;
    }
  }
};


/**
 * Resets the data layer to its initial condition.
 * @param {Array} fadeOutObjs The list of objects that will be animated away
 * @param {Array} doNotResetAreas List of ids of areas that should not be reset
 */
DvtMapDataLayer.prototype.reset = function(fadeOutObjs, doNotResetAreas) {
  // Clear selected
  if (this._selectionHandler) {
    var selectedObjs = this._selectionHandler.getSelection();
    for (var i = 0; i < selectedObjs.length; i++) {
      if (!doNotResetAreas || (doNotResetAreas && DvtArrayUtils.getIndex(doNotResetAreas, selectedObjs[i].getAreaId()) == -1))
        this._selectionHandler.removeFromSelection(selectedObjs[i]);
    }
  }

  // Clear drilled if drilling is on
  if (this._tmap.getDrillMode() != 'none') {
    for (var j = 0; j < this._drilled.length; j++) {
      for (var i = 0; i < this._areaObjs.length; i++) {
        if (this._areaObjs[i].getAreaId() == this._drilled[j]) {
          this._areaObjs[i].setDrilled(false);
          var displayable = this._areaObjs[i].getDisplayable();
          this._dataAreaLayer.addChild(displayable);
          fadeOutObjs.push(displayable);
          var label = this._areaObjs[i].getLabel();
          if (label) {
            label.update(this._pzcMatrix);
            fadeOutObjs.push(label);
            fadeOutObjs.push(label.getLeaderLine());
          }
          break;
        }
      }
      for (var i = 0; i < this._dataObjs.length; i++) {
        if (this._dataObjs[i].getAreaId() == this._drilled[j]) {
          var displayable = this._dataObjs[i].getDisplayable();
          this._dataPointLayer.addChild(displayable);
          fadeOutObjs.push(displayable);
          break;
        }
      }
    }
  }

  this._drilled = [];
};


/**
 * Handles zoom events for the data layer objects
 * @param {DvtZoomEvent} event The zoom event sent by the pan zoom canvas
 * @param {DvtMatrix} pzcMatrix The pan zoom canvas matrix
 * @protected
 */
DvtMapDataLayer.prototype.HandleZoomEvent = function(event, pzcMatrix) {
  this._pzcMatrix = pzcMatrix;
  var zoom = pzcMatrix.getA();
  // If this is initial zoom to fit need to set transform on pattern gradients
  var type = event.getSubType();
  if (this._bFixPatterns && type == DvtZoomEvent.SUBTYPE_ZOOMED) {
    this._bFixPatterns = false;
    for (var j = 0; j < this._areaObjs.length; j++) {
      var displayable = this._areaObjs[j].getDisplayable();
      var fill = displayable.getSavedPatternFill();
      if (fill) {
        var scaledFill = new DvtPatternFill();
        fill.mergeProps(scaledFill);
        scaledFill.setMatrix(new DvtMatrix(1 / zoom, null, null, 1 / zoom));
        displayable.setFill(scaledFill);
      }
    }
  }
  var areaObjs = this.getAreaObjects();
  for (var i = 0; i < areaObjs.length; i++)
    areaObjs[i].HandleZoomEvent(pzcMatrix);

  if (this._tmap.isMarkerZoomBehaviorFixed()) {
    var dataObjs = this.getDataObjects();
    for (var i = 0; i < dataObjs.length; i++)
      dataObjs[i].HandleZoomEvent(pzcMatrix);
  }
};


/**
 * Processes a pan event for this data layer and updates the locations of its data objects
 * @param {DvtMatrix} pzcMatrix The matrix to use for updating data object locations
 * @protected
 */
DvtMapDataLayer.prototype.HandlePanEvent = function(pzcMatrix) {
  this._pzcMatrix = pzcMatrix;
};


DvtMapDataLayer.prototype.setInitialSelections = function(selections) {
  this._initSelections = selections;
};


/**
 * Update the selection handler with the initial selections.
 */
DvtMapDataLayer.prototype._processInitialSelections = function() {
  if (this._selectionHandler) {
    this._selectionHandler.processInitialSelections(this._initSelections, this.getAllObjects());
    this._initSelections = null;
  }
};


/**
 * Returns the row keys for the current drag.
 * @param {DvtMapDataObject} obj The object where the drag was initiated.
 * @return {array} The row keys for the current drag.
 */
DvtMapDataLayer.prototype.__getDragTransferable = function(obj) {
  if (this._selectionHandler) {
    // Select the node if not already selected
    if (!obj.isSelected()) {
      this._selectionHandler.processClick(obj, false);
      this._eventHandler.fireSelectionEvent(obj);
    }

    // Gather the rowKeys for the selected objects
    var rowKeys = [];
    var selection = this._selectionHandler.getSelection();
    for (var i = 0; i < selection.length; i++) {
      rowKeys.push(selection[i].getId());
    }

    return rowKeys;
  } else {
    return null;
  }
};


/**
 * Returns the displayables to use for drag feedback for the current drag.
 * @return {array} The displayables for the current drag.
 */
DvtMapDataLayer.prototype.__getDragFeedback = function() {
  // This is called after __getDragTransferable, so the selection has been updated already.
  // Gather the displayables for the selected objects
  var displayables = [];
  var selection = this._selectionHandler.getSelection();
  for (var i = 0; i < selection.length; i++) {
    displayables.push(selection[i].getDisplayable());
  }

  return displayables;
};


/**
 * Given a list of area row keys, looks up and returns a list of their area ids
 * @param {Array} Row keys of areas to retrieve area ids for
 * @preturn {Array} Area ids
 */
DvtMapDataLayer.prototype.getSelectedAreas = function(selectedObjs) {
  var selectedAreas = [];
  var areaObjs = this.getAreaObjects();
  for (var i = 0; i < selectedObjs.length; i++) {
    for (var j = 0; j < areaObjs.length; j++) {
      if (areaObjs[j].getId() == selectedObjs[i]) {
        selectedAreas.push(areaObjs[j].getAreaId());
        break;
      }
    }
  }
  return selectedAreas;
};
/**
 *  @param {DvtEventManager} manager The owning DvtEventManager
 *  @class DvtThematicMapKeyboardHandler
 *  @extends {DvtKeyboardHandler}
 *  @constructor
 */
var DvtThematicMapKeyboardHandler = function(tmap, manager) {
  this.Init(tmap, manager);
};

DvtObj.createSubclass(DvtThematicMapKeyboardHandler, DvtPanZoomCanvasKeyboardHandler, 'DvtThematicMapKeyboardHandler');


/**
 * @override
 */
DvtThematicMapKeyboardHandler.prototype.Init = function(tmap, manager) {
  DvtThematicMapKeyboardHandler.superclass.Init(tmap, manager);
  this._tmap = tmap;
};


/**
 * @override
 */
DvtThematicMapKeyboardHandler.prototype.isSelectionEvent = function(event) {
  return this.isNavigationEvent(event) && !event.ctrlKey;
};


/**
 * @override
 */
DvtThematicMapKeyboardHandler.prototype.processKeyDown = function(event) {
  var keyCode = event.keyCode;

  if (keyCode == DvtKeyboardEvent.CLOSE_BRACKET) {
    var focusObj = this._eventManager.getFocus();
    var navigables = this._tmap.getNavigableObjects();
    if (focusObj instanceof DvtMapDataArea && navigables.length > 0)
      focusObj = DvtKeyboardHandler.getNextAdjacentNavigable(focusObj, event, navigables);
    this._eventManager.SetClickInfo(focusObj);
    return focusObj;
  }
  else if (keyCode == DvtKeyboardEvent.OPEN_BRACKET) {
    var focusObj = this._eventManager.getFocus();
    var navigables = this._tmap.getNavigableAreas();
    if (!(focusObj instanceof DvtMapDataArea) && navigables.length > 0)
      focusObj = DvtKeyboardHandler.getNextAdjacentNavigable(focusObj, event, navigables);
    this._eventManager.SetClickInfo(focusObj);
    return focusObj;
  }
  else {
    var focusObj = DvtThematicMapKeyboardHandler.superclass.processKeyDown.call(this, event);
    // update the clicked object for a navigation and selection event
    if (this.isNavigationEvent(event) && !event.ctrlKey)
      this._eventManager.SetClickInfo(focusObj);
    return focusObj;
  }
};


/**
 * @override
 */
DvtThematicMapKeyboardHandler.prototype.isMultiSelectEvent = function(event) {
  return event.keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey;
};


/**
 * @override
 */
DvtThematicMapKeyboardHandler.prototype.isNavigationEvent = function(event) {
  var isNavigable = DvtThematicMapKeyboardHandler.superclass.isNavigationEvent.call(this, event);

  if (!isNavigable) {
    var keyCode = event.keyCode;
    if (keyCode == DvtKeyboardEvent.OPEN_BRACKET || keyCode == DvtKeyboardEvent.CLOSE_BRACKET)
      isNavigable = true;
  }

  return isNavigable;
};
// Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.



/**
 * @constructor
 */
var DvtThematicMapEventManager = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

DvtObj.createSubclass(DvtThematicMapEventManager, DvtEventManager, 'DvtThematicMapEventManager');

DvtThematicMapEventManager.prototype.Init = function(context, callback, callbackObj) {
  DvtThematicMapEventManager.superclass.Init.call(this, context, callback, callbackObj);
  this._selectionHandlers = new Object();
  this._tmap = callbackObj;
  this._bDragged = false;
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.getSelectionHandler = function(logicalObj) {
  if (logicalObj && logicalObj.getDataLayer) {
    var clientId = logicalObj.getDataLayer().getClientId();
    return this._selectionHandlers[clientId];
  }
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.setSelectionHandler = function(dataLayerId, handler) {
  this._selectionHandlers[dataLayerId] = handler;
};

DvtThematicMapEventManager.prototype.setDrillMode = function(mode) {
  this._drillMode = mode;
};

DvtThematicMapEventManager.prototype.removeFromSelection = function(clientId, obj) {
  var selectionHandler = this._selectionHandlers[clientId];
  if (selectionHandler)
    selectionHandler.removeFromSelection(obj);
};

DvtThematicMapEventManager.prototype.clearSelection = function(clientId) {
  var selectionHandler = this._selectionHandlers[clientId];
  if (selectionHandler)
    selectionHandler.clearSelection();
};

DvtThematicMapEventManager.prototype.setInitialFocus = function(navigable) {
  //focus object will be set on child layers
  if (navigable) {
    DvtThematicMapEventManager.superclass.setFocus.call(this, navigable);
  }
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnMouseOver = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (obj && obj.getShowPopupBehaviors && obj.getDataLayer) {
    this._tmap.setEventClientId(obj.getDataLayer().getClientId());
  }
  DvtThematicMapEventManager.superclass.OnMouseOver.call(this, event);
};

/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnMouseOut = function(event) {
  this._tmap.setEventClientId(null);
  DvtThematicMapEventManager.superclass.OnMouseOut.call(this, event);
};

/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnMouseDown = function(event) {
  this._bDragged = false;
  DvtThematicMapEventManager.superclass.OnMouseDown.call(this, event);
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnMouseMove = function(event) {
  this._bDragged = true;
  DvtThematicMapEventManager.superclass.OnMouseMove.call(this, event);
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnClick = function(event) {
  if (this._bDragged)
    return;

  var obj = this.GetLogicalObject(event.target);
  this.SetClickInfo(obj);

  // Clear all selection handlers if something not selectable is clicked
  if (!(obj && obj.isSelectable && obj.isSelectable())) {
    for (var clientId in this._selectionHandlers) {
      var bSelectionChanged = this._selectionHandlers[clientId].processClick(null, event.ctrlKey);
      // If the selection has changed, fire an event
      if (bSelectionChanged) {
        var selectionEvent = new DvtSelectionEvent([]);
        selectionEvent.addParam('clientId', clientId);
        this._callback.call(this._callbackObj, selectionEvent);
      }
    }
  }

  DvtThematicMapEventManager.superclass.OnClick.call(this, event);
  this._handleClick(obj, event.pageX, event.pageY);
};


/**
 * Performs thematic map specific events on click called by the mouse and touch click handlers
 * @param {DvtDisplayable} obj The displayable that was clicked
 * @param {Number} pageX The x position where the action was triggered
 * @param {Number} pageY The y position where the action was triggered
 * @private
 */
DvtThematicMapEventManager.prototype._handleClick = function(obj, pageX, pageY) {
  if (obj instanceof DvtMapDataObject) {
    if (obj.hasAction()) {
      this.HandleAction(obj, pageX, pageY);
    } else if (obj.getShowPopupBehaviors()) {
      this._tmap.setEventClientId(obj.getDataLayer().getClientId());
    }
  }
};

/**
 * Initiates a DvtMapActionEvent
 * @param {DvtDisplayable} obj The displayable that was clicked
 * @param {Number} pageX The optional x position where the action was triggered
 * @param {Number} pageY The optional y position where the action was triggered
 * @protected
 */
DvtThematicMapEventManager.prototype.HandleAction = function(obj, pageX, pageY) {
  var actionEvent = new DvtMapActionEvent(obj.getClientId(), obj.getId(), obj.getAction());
  actionEvent.addParam('clientId', obj.getDataLayer().getClientId());
  if (pageX != null && pageY != null) {
    // component x/y location is currently only needed by AMX for popup alignment to a marker or area id
    // keyboard triggered action events do not need these values currently
    var offset = this._tmap.getCtx().pageToStageCoords(pageX, pageY);
    actionEvent.addParam('pointXY', { 'x': offset.x, 'y': offset.y });
  }
  this.hideTooltip();
  this._callback.call(this._callbackObj, actionEvent);
};

DvtThematicMapEventManager.prototype.SetClickInfo = function(obj) {
  var clientId = null;
  var mapLayer = null;
  var area = null;
  if (obj) {
    if (obj instanceof DvtMapDataObject)
      area = obj.getDisplayable();
    else if (obj instanceof DvtMapArea)
      area = obj;
    if (obj.getDataLayer) {
      var dataLayer = obj.getDataLayer();
      clientId = dataLayer.getClientId();
      mapLayer = dataLayer.getMapLayer().getLayerName();
    }
  }
  this._tmap.setClickInfo(clientId, mapLayer, area);
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnDblClick = function(event) {
  DvtThematicMapEventManager.superclass.OnDblClick.call(this, event);
  var obj = this.GetLogicalObject(event.target);
  if (this.getSelectionHandler(obj) && this._drillMode && this._drillMode != 'none') {
    // Create and fire the event
    var drillEvent = new DvtMapDrillEvent(DvtMapDrillEvent.DRILL_DOWN);
    this._callback.call(this._callbackObj, drillEvent);
  }
};


/**
 * Keyboard event handler. Handles keyboard navigation and triggering of context menus
 * @param {DvtKeyboardEvent} event
 * @return {boolean} true if this event manager has consumed the event
 */
DvtThematicMapEventManager.prototype.ProcessKeyboardEvent = function(event)
{
  var eventConsumed = true;
  var keyCode = event.keyCode;
  // Map Reset
  if ((keyCode == DvtKeyboardEvent.ZERO || keyCode == DvtKeyboardEvent.NUMPAD_ZERO) && event.ctrlKey && event.shiftKey) {
    this._tmap.resetMap();
    event.preventDefault();
  }
  // Legend
  else if (keyCode == DvtKeyboardEvent.BACK_SLASH) {
    var legendPanel = this._tmap.getLegendPanel();
    if (legendPanel) {
      if (legendPanel instanceof DvtCollapsiblePanel)
        legendPanel.setCollapsed(!legendPanel.isCollapsed());
      else if (legendPanel instanceof DvtPanelDrawer)
        legendPanel.setDisclosed(!legendPanel.isDisclosed());
    }
    event.preventDefault();
  }
  // Drilling or Action
  else if (keyCode == DvtKeyboardEvent.ENTER) {
    var logicalObj = this.getFocus();
    if (logicalObj instanceof DvtMapDataObject && logicalObj.hasAction()) {
      this.HandleAction(logicalObj);
    } else {
      if (event.shiftKey)
        this._tmap.drillUp();
      else
        this._tmap.drillDown();
      event.preventDefault();
    }
  }
  // Selection
  else if (keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey) {
    var logicalObj = this.getFocus();
    this.SetClickInfo(logicalObj);
    this.ProcessSelectionEventHelper(logicalObj, true);
    event.preventDefault();
  }
  // Zoom to fit
  else if ((keyCode == DvtKeyboardEvent.ZERO || keyCode == DvtKeyboardEvent.NUMPAD_ZERO) && event.ctrlKey) {
    var focusObj = this.getFocus();
    if (event.altKey)
      this._tmap.fitRegion(focusObj.getDisplayable());
    else
      this._tmap.fitSelectedRegions();
    event.preventDefault();
  }
  else {
    eventConsumed = DvtThematicMapEventManager.superclass.ProcessKeyboardEvent.call(this, event);
  }

  return eventConsumed;
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnComponentTouchClick = function(event) {
  var obj = this.GetLogicalObject(event.target);
  this.SetClickInfo(obj);

  // If no logical objects then pass on to all selection handlers to clear selection
  if (!obj || obj.isClearSelection) {
    for (var clientId in this._selectionHandlers) {
      var bSelectionChanged = this._selectionHandlers[clientId].processClick(null, event.ctrlKey);
      // If the selection has changed, fire an event
      if (bSelectionChanged) {
        var selectedObjs = this._selectionHandlers[clientId].getSelection();
        var selectedIds = [];
        for (var i = 0; i < selectedObjs.length; i++)
          selectedIds.push(selectedObjs[i].getId());
        var selectionEvent = new DvtSelectionEvent(selectedIds);
        this._callback.call(this._callbackObj, selectionEvent);
      }
    }
  }

  DvtThematicMapEventManager.superclass.OnComponentTouchClick.call(this, event);
  this._handleClick(obj, event.touch.pageX, event.touch.pageY);
};


/**
 * @override
 */
DvtThematicMapEventManager.prototype.HandleTouchHoverOverInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (obj && obj.getShowPopupBehaviors && obj.getDataLayer) {
    this._tmap.setEventClientId(obj.getDataLayer().getClientId());
  }
};

/**
 * @override
 */
DvtThematicMapEventManager.prototype.HandleTouchHoverOutInternal = function(event) {
  this._tmap.setEventClientId(null);
  DvtThematicMapEventManager.superclass.HandleTouchHoverOutInternal.call(this, event);
};

/**
 * @override
 */
DvtThematicMapEventManager.prototype.OnComponentTouchDblClick = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;
  if (this.getSelectionHandler(obj) && this._drillMode && this._drillMode != 'none') {
    // First make sure a selection event is fired to support drilling on double click. Touch doesn't send click event
    // before a double click
    this.ProcessSelectionEventHelper(obj, event.ctrlKey);
    var drillEvent = new DvtMapDrillEvent(DvtMapDrillEvent.DRILL_DOWN);
    this._callback.call(this._callbackObj, drillEvent);
  }
};

// Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
/**
 * Thematic Map JSON parser
 * @param {DvtThematicMap} tmap The thematic map to update
 * @constructor
 */
var DvtThematicMapJsonParser = function(tmap) {
  this.Init(tmap);
};

DvtObj.createSubclass(DvtThematicMapJsonParser, DvtObj, 'DvtThematicMapJsonParser');


/**
 * Initializes this thematic map JSON parser
 * @param {DvtThematicMap} tmap The thematic map to update
 */
DvtThematicMapJsonParser.prototype.Init = function(tmap) {
  this._tmap = tmap;
  this._isCustomBasemap = false;
  this._areaLayerStyle = null;
  this._isMobile = DvtAgent.isTouchDevice();
  this._customAreaLayerImages = {};
  this._customMarkerDefs = {};
};

/**
 * Parses a JSON object containing map attributes and data
 * @param {Object} options The JSON object to parse
 */
DvtThematicMapJsonParser.prototype.parse = function(options) {
  this._parseMapProperties(options);
  if (options['_legend'])
    this._tmap.setLegendData(options['_legend']);
  this._parseStyles(options['styleDefaults']);
  // temporary code until JSON API approved for custom basemap
  if (this._isCustomBasemap && options['sourceXml']) {
    var xmlParser = new DvtXmlParser(this._tmap.getCtx());
    var xmlNode = xmlParser.parse(options['sourceXml']);
    this._parseCustomBasemap(xmlNode);
  }
  this._parseAreaLayers(options['areaLayers']);
  this.ParseDataLayers(options['pointDataLayers'], null, null, false);
};

/**
 * Parses a JSON object containing map attributes
 * @param {Object} options The JSON object to parse
 * @private
 */
DvtThematicMapJsonParser.prototype._parseMapProperties = function(options) {
  this._tmap.setAnimationDuration(options['animationDuration'] / 1000);
  this._tmap.setAnimationOnDisplay(options['animationOnDisplay'] == 'auto' ? 'alphaFade' : options['animationOnDisplay']);
  this._tmap.setAnimationOnMapChange(options['animationOnMapChange'] == 'auto' ? 'alphaFade' : options['animationOnMapChange']);

  this._isCustomBasemap = options['source'] != null;
  // prepend custom basemap name with a symbol so we don't overwrite built-in basemap data
  this._tmap.setMapName(this._isCustomBasemap ? '$' + options['basemap'] : options['basemap']);

  this._tmap.setFeaturesOff(options['featuresOff']);
  this._tmap.setControlPanelBehavior(options['controlPanelBehavior']);
  var tooltipDisplay = options['tooltipDisplay'];
  if (tooltipDisplay == 'shortDesc')
    tooltipDisplay = 'shortDescOnly';
  else if (tooltipDisplay == 'labelAndShortDesc')
    tooltipDisplay = 'auto';
  this._tmap.setDisplayTooltips(tooltipDisplay);
  var popups = options['popups'];
  if (popups) {
    this._tmap.setShowPopupBehaviors(this._getShowPopupBehaviors(popups));
  }

  // drilling attributes
  this._tmap.setDrillMode(options['drilling']);
  this._tmap.setAnimationOnDrill(options['animationOnDrill']);

  // zooming attributes
  this._tmap.setInitialZooming(options['initialZooming'] == 'auto');
  this._tmap.setMarkerZoomBehavior(options['markerZoomBehavior']);
  this._tmap.setPanning(options['panning'] == 'auto');
  this._tmap.setZooming(options['zooming'] == 'auto');
  this._tmap.setInitialCenterX(options['panX']);
  this._tmap.setInitialCenterY(options['panY']);
  this._tmap.setInitialZoom(options['zoom']);
  if (!isNaN(options['maxZoom']))
    this._tmap.setMaxZoomFactor(options['maxZoom']);
};

/**
 * Parses a JSON object containing map area layer attributes and data
 * @param {Object} areaLayers The JSON object to parse
 * @private
 */
DvtThematicMapJsonParser.prototype._parseAreaLayers = function(areaLayers) {
  var basemap = this._tmap.getMapName();
  for (var i = 0; i < areaLayers.length; i++) {
    var areaLayer = this._tmap.Defaults.calcAreaLayerOptions(areaLayers[i]);
    var layer = areaLayer['layer'];
    if (!layer)
      continue;

    var mapLayer;
    if (areaLayer['areaStyle'])
      this._areaLayerStyle.parseInlineStyle(areaLayer['areaStyle']);
    if (areaLayer['labelStyle'])
      this._areaLayerStyle.parseInlineStyle(areaLayer['labelStyle']);

    if (this._isCustomBasemap) {
      mapLayer = new DvtMapCustomAreaLayer(this._tmap, layer, areaLayer['labelDisplay'], areaLayer['labelType'], this._tmap.getEventHandler());
      mapLayer.setAreaLayerImage(this._customAreaLayerImages[layer]);
    } else {
      mapLayer = new DvtMapAreaLayer(this._tmap, layer, areaLayer['labelDisplay'], areaLayer['labelType'], this._tmap.getEventHandler());
      var areaNames = DvtBaseMapManager.getAreaNames(basemap, layer);
      mapLayer.setAreaShapes(this._createPathShapes(areaNames));
      mapLayer.setAreaNames(areaNames);
      mapLayer.setAreaLabelInfo(DvtBaseMapManager.getAreaLabelInfo(basemap, layer));
      mapLayer.setAreaChildren(DvtBaseMapManager.getChildrenForLayerAreas(this._tmap.getMapName(), layer));
    }
    mapLayer.setLayerCSSStyle(this._areaLayerStyle);
    mapLayer.setDropSiteCSSStyle(this._areaDropSiteStyle);

    mapLayer.setAnimation(areaLayer['animationOnLayerChange'] == 'auto' ? 'alphaFade' : areaLayer['animationOnLayerChange']);
    mapLayer.setAnimationDuration(this._tmap.getAnimationDuration());

    this._tmap.addLayer(mapLayer);
    // parse data layers
    if (areaLayer['areaDataLayer'])
      this.ParseDataLayers([areaLayer['areaDataLayer']], mapLayer, null, true);
    if (areaLayer['pointDataLayers'])
      this.ParseDataLayers(areaLayer['pointDataLayers'], mapLayer, null, false);
  }
};


/**
 * Parses JSON objects containing map data layer attributes and data
 * @param {Array} dataLayers An array of data layer JSON objects to parse
 * @param {DvtMapLayer} parentLayer The parent map layer this data layer belongs to
 * @param {String} topLayerName The name of the top area layer passed in for data layer updates
 * @param {boolean} isAreaDataLayer True if we are parsing an area data layer
 * @protected
 */
DvtThematicMapJsonParser.prototype.ParseDataLayers = function(dataLayers, parentLayer, topLayerName, isAreaDataLayer) {
  if (!dataLayers)
    return;

  for (var i = 0; i < dataLayers.length; i++) {
    var dataLayerOptions = this._tmap.Defaults.calcDataLayerOptions(dataLayers[i]);
    // custom markers
    if (dataLayerOptions['markerDefs']) {
      var markerDefs = dataLayerOptions['markerDefs'];
      for (var markerDef in markerDefs) {
        if (!this._customMarkerDefs[markerDef]) {
          var xmlParser = new DvtXmlParser(this._tmap.getCtx());
          var xmlNode = xmlParser.parse(markerDefs[markerDef]);
          this._customMarkerDefs[markerDef] = DvtMarkerUtils.createMarkerDef(this._tmap.getCtx(), xmlNode);
        }
      }
    }

    // for data layer updates we send updated legend info with data layer
    if (dataLayerOptions['legend'])
      this._tmap.setLegendData(dataLayerOptions['legend']);
    if (parentLayer) {
      if (parentLayer instanceof DvtMapAreaLayer && isAreaDataLayer)
        parentLayer.resetRenderedAreas();
    } else {
      parentLayer = new DvtMapLayer(this._tmap, dataLayerOptions['id'], this._tmap.getEventHandler());
      this._tmap.addPointLayer(parentLayer);
    }
    var dataLayer = new DvtMapDataLayer(this._tmap, parentLayer, dataLayerOptions['id'], this._tmap.getEventHandler());

    var selectionMode = dataLayerOptions['selection'];
    if (selectionMode == 'single')
      dataLayer.setSelectionMode(DvtSelectionHandler.TYPE_SINGLE);
    else if (selectionMode == 'multiple')
      dataLayer.setSelectionMode(DvtSelectionHandler.TYPE_MULTIPLE);

    dataLayer.setAnimation(dataLayerOptions['animationOnDataChange'] == 'auto' ? 'alphaFade' : dataLayerOptions['animationOnDataChange']);
    dataLayer.setAnimationDuration(this._tmap.getAnimationDuration());

    //Add initially isolated area
    var isolatedRowKey = null;
    if (parentLayer instanceof DvtMapAreaLayer)
      isolatedRowKey = dataLayerOptions['isolatedItem'];

    var disclosedItems = dataLayerOptions['disclosedItems'];
    var initDisclosed = [];
    var isolatedAreaId;
    var isAreaDataLayer = parentLayer instanceof DvtMapAreaLayer;
    var popups;
    if (dataLayerOptions['popups'])
      popups = this._getShowPopupBehaviors(dataLayerOptions['popups']);
    // Parse data objects
    var areas = dataLayerOptions['areas'];
    if (areas) {
      for (var j = 0; j < areas.length; j++) {
        var areaId = areas[j]['location'];

        if (isolatedRowKey) {
          if (isolatedRowKey != areas[j]['id'])
            continue;
          else
            isolatedAreaId = areaId;
        }

        if (disclosedItems && disclosedItems.indexOf(areas[j]['id']) != -1)
          initDisclosed.push(areaId);

        var dataObj = this._parseMapArea(parentLayer, dataLayer, areas[j]);
        if (popups)
          dataObj.setShowPopupBehaviors(popups);
        if (dataObj) {
          // Selection support
          if (dataLayer.isSelectable()) {
            var displayable = dataObj.getDisplayable();
            displayable.setSelectable(true);
          }
          dataLayer.addAreaObject(dataObj);
        }
      }
    }

    var markers = dataLayerOptions['markers'];
    if (markers) {
      for (var j = 0; j < markers.length; j++) {
        var areaId = markers[j]['location'];

        if (isolatedRowKey) {
          if (isolatedRowKey != markers[j]['id'])
            continue;
          else
            isolatedAreaId = areaId;
        }

        var dataObj = this._parseMapMarker(parentLayer, dataLayer, markers[j], isAreaDataLayer);
        if (popups)
          dataObj.setShowPopupBehaviors(popups);
        if (dataObj) {
          // Selection support
          if (dataLayer.isSelectable()) {
            var displayable = dataObj.getDisplayable();
            displayable.setSelectable(true);
          }
          dataLayer.addDataObject(dataObj);
        }
      }
    }

    var images = dataLayerOptions['images'];
    if (images) {
      for (var j = 0; j < images.length; j++) {
        var areaId = images[j]['location'];

        if (isolatedRowKey) {
          if (isolatedRowKey != images[j]['id'])
            continue;
          else
            isolatedAreaId = areaId;
        }

        var dataObj = this._parseMapImage(parentLayer, dataLayer, images[j], isAreaDataLayer);
        if (popups)
          dataObj.setShowPopupBehaviors(popups);
        if (dataObj) {
          dataLayer.addDataObject(dataObj);
        }
      }
    }

    var components = dataLayerOptions['components'];
    if (components) {
      this._mashupHandler = new DvtMashupHandler(this._tmap.__dispatchEvent, this._tmap);
      for (var j = 0; j < components.length; j++) {
        var areaId = components[j]['location'];

        if (isolatedRowKey) {
          if (isolatedRowKey != components[j]['id'])
            continue;
          else
            isolatedAreaId = areaId;
        }

        if (disclosedItems && disclosedItems.indexOf(components[j]['id']) != -1)
          initDisclosed.push(areaId);

        var dataObj = this._parseMapComponent(parentLayer, dataLayer, components[j], isAreaDataLayer);
        if (popups)
          dataObj.setShowPopupBehaviors(popups);
        if (dataObj) {
          // Selection support
          if (dataLayer.isSelectable()) {
            var displayable = dataObj.getDisplayable();
            displayable.setSelectable(true);
          }
          dataLayer.addDataObject(dataObj);
        }
      }
    }

    // After processing all data objects we should have the area ID of the isolated area
    if (isolatedAreaId) {
      dataLayer.setIsolatedAreaRowKey(isolatedRowKey);
      parentLayer.setIsolatedArea(isolatedAreaId);
    }

    // Process initial data layer selections
    var initSelections = dataLayerOptions['selectedItems'];
    if (initSelections && initSelections.length > 0)
      dataLayer.setInitialSelections(initSelections);

    if (initDisclosed && initDisclosed.length > 0)
      this._tmap.addDrilledLayer(parentLayer.getLayerName(), [dataLayer.getClientId(), initDisclosed]);

    if (topLayerName)
      parentLayer.updateDataLayer(dataLayer, this._tmap.getPanZoomCanvas().getContentPane().getMatrix(), topLayerName);
    else
      parentLayer.addDataLayer(dataLayer);
  }
};

/**
 * Parses a JSON object containing style defaults
 * @param {Object} styles The style default JSON object
 * @private
 */
DvtThematicMapJsonParser.prototype._parseStyles = function(styles) {
  this._tmap.parseComponentJson(styles);
  this._areaLayerStyle = new DvtCSSStyle(styles['areaStyle']);
  this._areaLayerStyle.parseInlineStyle(styles['labelStyle']);
  this._areaDropSiteStyle = new DvtCSSStyle(styles['dropTargetStyle']);
  this._tmap.setStyleDefaults(styles);
};

/**
 * Temporary method for parsing custom basemap xml for AMX and ADF until JET JSON API is approved.
 * @param {DvtXmlNode} xmlNode The xml node containing custom basemap metadata
 * @private
 */
DvtThematicMapJsonParser.prototype._parseCustomBasemap = function(xmlNode) {
  var childNodes = xmlNode.getChildNodes();
  var node, nodeName;
  for (var i = 0; i < childNodes.length; i++) {
    node = childNodes[i];
    nodeName = node.getName();
    if (nodeName == 'layer')
      this._parseCustomLayer(node);
    else if (nodeName == 'points')
      this._parseCustomPoints(node);
  }
};


/**
 * Temporary method for parsing custom basemap xml for AMX and ADF until JET JSON API is approved.
 * @param {DvtXmlNode} xmlNode The xml node containing custom layer metadata
 * @private
 */
DvtThematicMapJsonParser.prototype._parseCustomLayer = function(xmlNode) {
  var childNodes = xmlNode.getChildNodes();
  var layerName = xmlNode.getAttr('id');
  var node, nodeName;
  var images = [];
  for (var i = 0; i < childNodes.length; i++) {
    node = childNodes[i];
    nodeName = node.getName();
    // currently only images are supported
    if (nodeName == 'image') {
      var image = {};
      image['source'] = node.getAttr('source');
      image['width'] = node.getAttr('width');
      image['height'] = node.getAttr('height');
      var bidi = node.getAttr('bidi');
      var dir = node.getAttr('dir');
      // The bidi attribute is deprecated and dir="ltr/rtl" should be used instead.
      if (bidi == 'true' || dir == 'rtl')
        image['dir'] = 'rtl';
      else
        image['dir'] = 'ltr';
      images.push(image);
    }
  }
  this._customAreaLayerImages[layerName] = images;
};


/**
 * Temporary method for parsing custom basemap xml for AMX and ADF until JET JSON API is approved.
 * @param {DvtXmlNode} xmlNode The xml node containing custom points metadata
 * @private
 */
DvtThematicMapJsonParser.prototype._parseCustomPoints = function(xmlNode) {
  var childNodes = xmlNode.getChildNodes();
  var node, nodeName;
  var points = {};
  var labels = {};
  for (var i = 0; i < childNodes.length; i++) {
    node = childNodes[i];
    nodeName = node.getName();
    if (nodeName == 'point') {
      points[node.getAttr('name')] = [node.getAttr('x'), node.getAttr('y')];
      labels[node.getAttr('name')] = [null, node.getAttr('longLabel')];
    }
  }
  // register points with base map manager
  // index will change once we allow more layers besides point
  DvtBaseMapManager.registerBaseMapLayer(this._tmap.getMapName(), 'cities', labels, points, null, null, 1);
};


/**
 * Creates a map of area displayables for an area layer
 * @param {Array} areaNames The array of areas to generate displayables for
 * @return {Object}
 * @private
 */
DvtThematicMapJsonParser.prototype._createPathShapes = function(areaNames) {
  // create empty DvtPath objects as placeholders
  var shapes = {};
  var context = this._tmap.getCtx();
  for (var area in areaNames) {
    shapes[area] = new DvtPath(context);

    // Style area layer border and background colors
    var borderColor = this._areaLayerStyle.getStyle(DvtCSSStyle.BORDER_COLOR);
    if (borderColor && borderColor != 'transparent') {
      var stroke = new DvtSolidStroke(borderColor);
      if (this._tmap.supportsVectorEffects())
        stroke.setFixedWidth(true);
      shapes[area].setStroke(stroke);
    }

    var backgroundColor = this._areaLayerStyle.getStyle(DvtCSSStyle.BACKGROUND_COLOR);
    if (backgroundColor != 'transparent')
      shapes[area].setSolidFill(backgroundColor);
    else //TODO set on area layer instead
      shapes[area].setFill(null);
  }
  return shapes;
};

/**
 * Creates a DvtMapDataArea
 * @param {DvtMapLayer} layer The map layer this data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer this data object belongs to
 * @param {Object} data The JSON object containing data object attributes
 * @return {DvtMapDataArea} The data object
 * @private
 */
DvtThematicMapJsonParser.prototype._parseMapArea = function(layer, dataLayer, data) {
  var areaId = data['location'];
  var areaShape = layer.getAreaShape(areaId);
  // only render data area if we have the path info for it and if it has a data color
  if (areaShape && data['color']) {
    // create an empty DvtPath for now and will set the cmd at render time
    layer.setAreaRendered(areaId, false);
    var context = this._tmap.getCtx();
    var path = new DvtDrillablePath(context, this._tmap.supportsVectorEffects());

    data = DvtJSONUtils.merge(data, this._tmap.getStyleDefaults()['dataAreaDefaults']);
    if (!data['labelStyle'])
      data['labelStyle'] = this._tmap.getStyleDefaults()['labelStyle'];

    var hs = new DvtSolidStroke(data['hoverColor'], 1, DvtDrillablePath.HOVER_STROKE_WIDTH);
    var sis = new DvtSolidStroke(data['selectedInnerColor'], 1, DvtDrillablePath.SELECTED_INNER_STROKE_WIDTH);
    var sos = new DvtSolidStroke(data['selectedOuterColor'], 1, DvtDrillablePath.SELECTED_OUTER_STROKE_WIDTH);
    path.setHoverStroke(hs, null).setSelectedStroke(sis, sos);
    var dis = new DvtSolidStroke(data['drilledInnerColor'], 1, DvtDrillablePath.DISCLOSED_INNER_STROKE_WIDTH);
    var dos = new DvtSolidStroke(data['drilledOuterColor'], 1, DvtDrillablePath.DISCLOSED_OUTER_STROKE_WIDTH);
    path.setDisclosedStroke(dis, dos);

    // clientId field currently only used for MAF and ADF. JET uses data object and data layer ids for events
    var dataObj = new DvtMapDataArea(context, dataLayer, data['id'], data['clientId'], areaId);
    dataObj.setDisplayable(path);
    this._parseCommonData(layer, dataLayer, data, path, dataObj, true);
    return dataObj;
  }
  return null;
};

/**
 * Creates a DvtMapDataMarker
 * @param {DvtMapLayer} layer The map layer this data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer this data object belongs to
 * @param {Object} data The JSON object containing data object attributes
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @return {DvtMapDataMarker} The data object
 * @private
 */
DvtThematicMapJsonParser.prototype._parseMapMarker = function(layer, dataLayer, data, isParentAreaDataLayer) {
  var center = this._getCenter(layer.getLayerName(), data);
  if (!center) // no matching city
    return null;

  var context = this._tmap.getCtx();
  var areaId = data['location'];
  // clientId field currently only used for MAF and ADF. JET uses data object and data layer ids for events
  var dataObj = new DvtMapDataMarker(context, dataLayer, data['id'], data['clientId'], areaId);
  dataObj.setCenter(center);

  // merge data marker default styles, need to handle label style differently because we want to merge the two css strings
  var markerDefaults = this._tmap.getStyleDefaults()['dataMarkerDefaults'];
  var markerLabelStyle = new DvtCSSStyle(markerDefaults['labelStyle']);
  markerLabelStyle.parseInlineStyle(data['labelStyle']);
  data = DvtJSONUtils.merge(data, markerDefaults);
  data['labelStyle'] = markerLabelStyle.toString();

  var shapeType;
  var imgSrc = data['source'];
  // if marker image source is set, ignore the shape type value which is set for custom svg and built in markers
  if (imgSrc) {
    shapeType = [imgSrc, data['sourceSelected'], data['sourceHover'], data['sourceHoverSelected']];
  } else {
    var shapeType = data['shape'];
    if (!shapeType)
      shapeType = DvtMapDataMarker.DEFAULT_MARKER_SHAPE;
  }

  // Parse data object scales. Save original scale to maintain size despite zoom.
  var sx = data['scaleX'];
  if (isNaN(sx))
    sx = DvtMapDataMarker.DEFAULT_MARKER_SCALE;

  var sy = data['scaleY'];
  if (isNaN(sy))
    sy = DvtMapDataMarker.DEFAULT_MARKER_SCALE;

  var w = data['width'];
  var h = data['height'];

  if (!w || isNaN(w))
    w = DvtMapDataMarker.DEFAULT_MARKER_SIZE;

  if (!h || isNaN(h))
    h = DvtMapDataMarker.DEFAULT_MARKER_SIZE;

  var x, y;
  x = center.x - ((w * sx) / 2);
  y = center.y - ((h * sy) / 2);

  // id is used for custom marker definition lookup
  var marker = new DvtMarker(context, shapeType, 'alta', x, y, w, h, null, sx, sy);
  dataObj.setDisplayable(marker);
  dataObj.setSize(w * sx * h * sy);

  dataObj.setLabelPosition(data['labelPosition']);

  var rotation = data['rotation'];
  if (rotation) {
    var radianRot = rotation * Math.PI / 180;
    marker.setRotation(radianRot);
    var center = dataObj.getCenter();
    // shape rotates around origin so need to find out current location after rotation and move back to the correct center
    marker.setTranslate(center.x - (center.x * Math.cos(radianRot) - center.y * Math.sin(radianRot)), center.y - (center.x * Math.sin(radianRot) + center.y * Math.cos(radianRot)));
  }

  this._parseCommonData(layer, dataLayer, data, marker, dataObj, isParentAreaDataLayer);
  return dataObj;
};

/**
 * Creates a DvtMapDataImage
 * @param {DvtMapLayer} layer The map layer this data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer this data object belongs to
 * @param {Object} data The JSON object containing data object attributes
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @return {DvtMapDataImage} The data object
 * @private
 */
DvtThematicMapJsonParser.prototype._parseMapImage = function(layer, dataLayer, data, isParentAreaDataLayer) {
  var center = this._getCenter(layer.getLayerName(), data);
  if (!center) // no matching city
    return null;

  var context = this._tmap.getCtx();
  var areaId = data['location'];
  // clientId field currently only used for MAF and ADF. JET uses data object and data layer ids for events
  var dataObj = new DvtMapDataImage(context, dataLayer, data['id'], data['clientId'], areaId);
  dataObj.setCenter(center);

  var image = new DvtImage(context, data['url']);
  dataObj.setDisplayable(image);

  var width = data['width'];
  var height = data['height'];
  image.setWidth(width);
  image.setHeight(height);
  // set x/y only if both width and height are set, otherwise x/y will be set in the callback
  if (width != null && height != null) {
    image.setX(center.x - width / 2);
    image.setY(center.y - height / 2);
    dataObj.setSize(width * height);
  }
  //If user does not specify image dimensions via jsonObj then use the default image size determined by browser
  if (!width || !height) {
    DvtImageLoader.loadImage(context, data['url'], DvtObj.createCallback(dataObj, dataObj.onImageLoaded));
  }

  this._parseCommonData(layer, dataLayer, data, image, dataObj, isParentAreaDataLayer);
  return dataObj;
};

/**
 * Creates a DvtMapDataImage
 * @param {DvtMapLayer} layer The map layer this data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer this data object belongs to
 * @param {Object} data The JSON object containing data object attributes
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @return {DvtMapDataComponent} The data object
 * @private
 */
DvtThematicMapJsonParser.prototype._parseMapComponent = function(layer, dataLayer, data, isParentAreaDataLayer) {
  var center = this._getCenter(layer.getLayerName(), data);
  if (!center) // no matching city
    return null;

  var context = this._tmap.getCtx();
  var areaId = data['location'];
  // clientId field currently only used for MAF and ADF. JET uses data object and data layer ids for events
  var dataObj = new DvtMapDataComponent(context, dataLayer, data['id'], data['clientId'], areaId);
  dataObj.setCenter(center);

  dataObj.setDisplayable(this._mashupHandler.getComponent(this._tmap.getCtx(), data));

  var width = DvtMashupHandler.getComponentWidth(data);
  var height = DvtMashupHandler.getComponentHeight(data);
  dataObj.setWidth(width);
  dataObj.setHeight(height);
  // set x/y only if both width and height are set, otherwise x/y will be set in the callback
  if (width != null && height != null) {
    dataObj.setX(center.x - width / 2);
    dataObj.setY(center.y - height / 2);
  }
  dataObj.setJson(data);
  return dataObj;
};

/**
 * Parses attributes common amonst all data objects
 * @param {DvtMapLayer} layer
 * @param {DvtMapDataLayer} dataLayer
 * @param {Object} data The json object for the data object
 * @param {DvtDisplayable} displayable The displayable that belongs to the DvtMapDataObject
 * @param {DvtMapDataObject} dataObj
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @private
 */
DvtThematicMapJsonParser.prototype._parseCommonData = function(layer, dataLayer, data, displayable, dataObj, isParentAreaDataLayer) {
  // disable labels in area layer if data layer exists and has label
  if (isParentAreaDataLayer)
    layer.setLabelRendered(data['location'], false);

  if (data['action']) {
    dataObj.setHasAction(true);
    dataObj.setAction(data['action']);
  }

  var destination = data['destination'];
  if (destination) {
    var linkObj = [];
    linkObj['destination'] = destination;
    linkObj['targetFrame'] = '_blank';
    linkObj['focusable'] = true;
    displayable.setHyperlink(linkObj);
  }

  this._setDatatip(layer, dataLayer, data, dataObj, isParentAreaDataLayer);
  this._styleDisplayable(data, displayable, dataObj);
  this._setLabel(layer, dataLayer, data, dataObj, isParentAreaDataLayer);
};


/**
 * Sets a label for a map data object
 * @param {DvtMapLayer} layer The map layer the data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer the data object belongs to
 * @param {Object} data The JSON object containing label attributes
 * @param {DvtMapDataObject} dataObj The data object to set the label on
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @private
 */
DvtThematicMapJsonParser.prototype._setLabel = function(layer, dataLayer, data, dataObj, isParentAreaDataLayer) {
  var areaId = data['location'];
  var labelText = data['label'];
  // if data label is provided, assume label display is on and if is from an area data layer, use area layer's label display
  var labelDisplay = labelText ? 'on' : 'off';
  if (isParentAreaDataLayer)
    labelDisplay = layer.getLabelDisplay();

  // If object is in an areaDataLayer see if label is provided, if not, use the default area label
  if (!labelText && isParentAreaDataLayer && ((dataObj instanceof DvtMapDataArea && labelDisplay != 'off') ||
                                              (!(dataObj instanceof DvtMapDataArea) && labelDisplay == 'on'))) {
    labelText = (layer.getLabelType() == 'long' ? layer.getLongAreaName(areaId) : layer.getShortAreaName(areaId));
  }

  // Labels
  if (labelText) {
    var context = this._tmap.getCtx();
    var label;
    if (dataObj instanceof DvtMapDataMarker)
      label = new DvtOutputText(context, labelText, 0, 0);
    else
      label = new DvtMapLabel(context, labelText, layer.getLabelInfoForArea ? layer.getLabelInfoForArea(areaId) : null,
                              labelDisplay, dataLayer.getDataLabelContainer(), this._tmap.supportsVectorEffects());

    // Label styling
    var labelStyle = new DvtCSSStyle();
    // add label style by merging styles sent from skin and tag
    if (dataObj instanceof DvtMapDataArea)
      labelStyle.merge(layer.getLayerCSSStyle());
    if (data['labelStyle']) {
      labelStyle.parseInlineStyle(data['labelStyle']);
    }
    if (label instanceof DvtMapLabel) {// color label to contrast with data color
      if (!labelStyle.getStyle(DvtCSSStyle.COLOR))
        labelStyle.setStyle(DvtCSSStyle.COLOR, DvtColorUtils.getContrastingTextColor(dataObj.getDatatipColor()));
    }
    label.setCSSStyle(labelStyle);
  }

  dataObj.setLabel(label);
};


/**
 * Sets a datatip for a map data object
 * @param {DvtMapLayer} layer The map layer the data object belongs to
 * @param {DvtMapDataLayer} dataLayer The data layer the data object belongs to
 * @param {Object} data The JSON object containing datatip attributes
 * @param {DvtMapDataObject} dataObj The data object to set the label on
 * @param {boolean} isParentAreaDataLayer True if the parent is an area data layer
 * @private
 */
DvtThematicMapJsonParser.prototype._setDatatip = function(layer, dataLayer, data, dataObj, isParentAreaDataLayer) {
  var displayTooltips = this._tmap.getDisplayTooltips();
  if (displayTooltips != 'none') {
    var datatip = data['shortDesc'];
    if (displayTooltips == 'auto') {
      var preDatatip;
      var areaId = data['location'];
      // For data objects associated with supported areas or cities we prepend the area/city name before the datatip
      if (areaId) {
        if (!isParentAreaDataLayer || this._isCustomBasemap)  // for AMX V1, custom basemaps only support points
          preDatatip = DvtBaseMapManager.getCityLabel(this._tmap.getMapName(), areaId);
        else
          preDatatip = DvtBaseMapManager.getLongAreaLabel(this._tmap.getMapName(), layer.getLayerName(), areaId);
      }
      if (preDatatip)
        datatip = (datatip ? preDatatip + ': ' + datatip : preDatatip);
    }
    if (datatip)
      dataObj.setDatatip(datatip);
  }
};


/**
 * Styles a map data object's displayable
 * @param {Object} style The css style object to style the displayable with
 * @param {DvtDisplayable} displayable The displayable to style
 * @param {DvtMapDataObject} dataObj The displayable's data object
 * @private
 */
DvtThematicMapJsonParser.prototype._styleDisplayable = function(style, displayable, dataObj) {
  var pattern = style['pattern'];
  var backgroundColor = style['color'];
  var gradient = (this._isMobile || this._tmap.getSkinName() == DvtCSSStyle.SKIN_ALTA) ? 'none' : style['visualEffects'];


  if (dataObj)
    dataObj.setDatatipColor(backgroundColor);

  // handle custom svg where color is set by user
  if (displayable instanceof DvtMarker && DvtMarker.isBuiltInShape(displayable.getType())) {
    if (style['borderStyle'] != 'none') {
      var stroke = new DvtSolidStroke(style['borderColor'], DvtMapDataMarker.DEFAULT_MARKER_ALPHA,
                                      style['borderWidth']);
      if (!this._tmap.isMarkerZoomBehaviorFixed())
        stroke.setFixedWidth(true);
      stroke.setType(DvtStroke.convertTypeString(style['borderStyle']));
      displayable.setStroke(stroke);
    }

    var opacity = style['opacity'];
    if (gradient != 'none')
      displayable.setFill(new DvtMarkerGradient.createMarkerGradient(backgroundColor, displayable, opacity));
    else if (pattern)
      displayable.setFill(new DvtPatternFill(pattern, backgroundColor, '#FFFFFF'));
    else if (backgroundColor)
      displayable.setSolidFill(backgroundColor, opacity);
  }
  else if (displayable instanceof DvtPath) {
    var borderColor = style['borderColor'];
    if (borderColor) {
      var stroke = new DvtSolidStroke(borderColor);
      if (this._tmap.supportsVectorEffects())
        stroke.setFixedWidth(true);
      displayable.setStroke(stroke);
    }

    if (pattern)
      displayable.savePatternFill(new DvtPatternFill(pattern, backgroundColor, '#FFFFFF'));
    else
      displayable.setSolidFill(backgroundColor, opacity);
  }
};


/**
 * Retrieves the x/y coordinates for this data object if they exist
 * @param {String} layerName The map area layer name to look up coordinate data from
 * @param {Object} data The JSON object containing data object info
 * @return {DvtPoint}
 * @private
 */
DvtThematicMapJsonParser.prototype._getCenter = function(layerName, data) {
  // We can get the coordiantes for a marker if they are:
  // 1) Passed in the xml
  // 2) A supported city
  // 3) A supported Area
  var mapName = this._tmap.getMapName();
  var location = data['location'];
  if (location) {
    var locationCoords = DvtBaseMapManager.getAreaCenter(mapName, layerName, location);
    if (!locationCoords)
      locationCoords = DvtBaseMapManager.getCityCoordinates(mapName, location);
    return locationCoords;
  } else {
    return DvtThematicMapProjections.project(data['x'], data['y'], this._tmap.getMapName());
  }
};

/**
 * Parses an array of popup behaviors and creates an array of DvtShowPopupBehavior objects
 * @param {Array} popups An array of show popup behavior objects
 * @return {Array} An array of DvtShowPopupBehavior objects
 * @private
 */
DvtThematicMapJsonParser.prototype._getShowPopupBehaviors = function(popups) {
  var spbs = [];
  for (var i = 0; i < popups.length; i++)
    spbs.push(new DvtShowPopupBehavior(popups[i]['popupId'], popups[i]['triggerType'], null, popups[i]['align']));
  return spbs;
};
var DvtThematicMapProjections = {
};

DvtObj.createSubclass(DvtThematicMapProjections, DvtObj, 'DvtThematicMapProjections');

DvtThematicMapProjections._VIEWPORT_BOUNDS = new DvtRectangle(0, 0, 800, 500);
DvtThematicMapProjections._RADIUS = 6378206.4;

DvtThematicMapProjections._NEW_ZEALAND_RECT = new DvtRectangle(500, 200, 200, 200);
DvtThematicMapProjections._NEW_ZEALAND_BOUNDS = new DvtRectangle(163, - 49, 17, 17);
DvtThematicMapProjections._AFRICA_BOUNDS = new DvtRectangle(- 17.379205428479874, - 37.201510854305546, 68.66391442808313, 77.50071544582713);
DvtThematicMapProjections._ASIA_BOUNDS = new DvtRectangle(- 0.8436866097568272, - 0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
DvtThematicMapProjections._AUSTRALIA_BOUNDS = new DvtRectangle(113.29667079927977, - 52.89550592498755, 65.25257389065216, 42.123114617504626);
DvtThematicMapProjections._EUROPE_BOUNDS = new DvtRectangle(- 0.47944476148667076, - 0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
DvtThematicMapProjections._N_AMERICA_BOUNDS = new DvtRectangle(- 0.6154469465354344, - 0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
DvtThematicMapProjections._S_AMERICA_BOUNDS = new DvtRectangle(- 80.60817722658722, - 60.796273249672765, 46.608687602908056, 66.96595767361796);
DvtThematicMapProjections._APAC_BOUNDS = new DvtRectangle(68.20516856593524, - 52.89892708045518, 111.65739821771903, 116.55460214469134);
DvtThematicMapProjections._EMEA_BOUNDS = new DvtRectangle(- 24.543831069368586, - 37.202500659225905, 204.54283106936856, 164.9634493690208);
DvtThematicMapProjections._L_AMERICA_BOUNDS = new DvtRectangle(- 117.12451221229134, - 54.95921623126266, 82.33223251442891, 87.67786623127876);
DvtThematicMapProjections._USA_CANADA_BOUNDS = new DvtRectangle(- 0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
DvtThematicMapProjections._WORLD_BOUNDS = new DvtRectangle(- 171.9, - 62.6, 349.8, 150.8);
DvtThematicMapProjections._ALASKA1_RECT = new DvtRectangle(172, 51, 8, 3);
DvtThematicMapProjections._ALASKA2_RECT = new DvtRectangle(- 180, 51, 51, 21);
DvtThematicMapProjections._HAWAII_RECT = new DvtRectangle(- 178.5, 18.9, 35, 11);
DvtThematicMapProjections._USA_RECT = new DvtRectangle(- 124.8, 24.4, 58, 25.5);
DvtThematicMapProjections._ALASKA_BOUNDS = new DvtRectangle(- 187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
DvtThematicMapProjections._HAWAII_BOUNDS = new DvtRectangle(- 160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
DvtThematicMapProjections._USA_BOUNDS = new DvtRectangle(- 2386803.25, - 1183550.5, 4514111, 2908402);
DvtThematicMapProjections._HAWAII_WINDOW = new DvtRectangle(165.0, 400.0, 100.0, 100.0);
DvtThematicMapProjections._ALASKA_WINDOW = new DvtRectangle(-75.0, 350.0, 240.0, 150.0);

DvtThematicMapProjections._ROBINSON_COORDINATES = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.9900, 0.0943], [0.9822, 0.1258], [0.9730, 0.1572], [0.9600, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.8350, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];


/**
 * Gets the projection for built-in basemaps to be used for JET/AMX
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @param {String} basemap The basemap name
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 */
DvtThematicMapProjections.project = function(x, y, basemap) {
  var point;
  switch (basemap) {
    case 'africa':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._AFRICA_BOUNDS,
                                                             DvtThematicMapProjections._getMercatorProjection(x, y));
      break;
    case 'asia':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._ASIA_BOUNDS,
                                                             DvtThematicMapProjections._getAlbersEqualAreaConicProjection(40, 95, 20, 60, x, y),
                                                             DvtThematicMapProjections.toRadians(5));
      break;
    case 'australia':
      point = DvtThematicMapProjections._getAustraliaProjection(x, y);
      break;
    case 'europe':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._EUROPE_BOUNDS,
                                                             DvtThematicMapProjections._getAlbersEqualAreaConicProjection(35, 25, 40, 65, x, y),
                                                             DvtThematicMapProjections.toRadians(10));
      break;
    case 'northAmerica':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._N_AMERICA_BOUNDS,
                                                             DvtThematicMapProjections._getAlbersEqualAreaConicProjection(23, - 96, 20, 60, x, y));
      break;
    case 'southAmerica':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._S_AMERICA_BOUNDS,
                                                             new DvtPoint(x, y),
                                                             DvtThematicMapProjections.toRadians(5));
      break;
    case 'apac':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._APAC_BOUNDS,
                                                             DvtThematicMapProjections._getMercatorProjection(x, y));
      break;
    case 'emea':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._EMEA_BOUNDS,
                                                             DvtThematicMapProjections._getMercatorProjection(x, y));
      break;
    case 'latinAmerica':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._L_AMERICA_BOUNDS,
          new DvtPoint(x, y));
      break;
    case 'usaAndCanada':
      point = DvtThematicMapProjections._getAffineProjection(DvtThematicMapProjections._USA_CANADA_BOUNDS,
                                                             DvtThematicMapProjections._getAlbersEqualAreaConicProjection(23, - 96, 20, 60, x, y));
      break;
    case 'worldRegions':
      point = DvtThematicMapProjections._getWorldProjection(x, y);
      break;
    case 'usa':
      point = DvtThematicMapProjections._getUSAProjection(x, y);
      break;
    case 'world':
      point = DvtThematicMapProjections._getWorldProjection(x, y);
      break;
    default :
      break;
  }
  if (point)
    return new DvtPoint(point.x * 10, point.y * 10);// multiply by 10 because basemaps are 10x bigger
  else
    return new DvtPoint(x, y);
};


/**
 * Returns the projected long/lat point in the usa basemap coordinate system
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getUSAProjection = function(x, y) {
  var viewPortTransform;
  if (DvtThematicMapProjections._ALASKA1_RECT.containsPoint(x, y) || DvtThematicMapProjections._ALASKA2_RECT.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._ALASKA_BOUNDS, DvtThematicMapProjections._ALASKA_WINDOW);
    return DvtThematicMapProjections._applyAffineTransform(viewPortTransform, DvtThematicMapProjections._getMercatorProjection(x, y));
  }
  else if (DvtThematicMapProjections._HAWAII_RECT.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._HAWAII_BOUNDS, DvtThematicMapProjections._HAWAII_WINDOW);
    return DvtThematicMapProjections._applyAffineTransform(viewPortTransform, new DvtPoint(x, y));
  }
  else if (DvtThematicMapProjections._USA_RECT.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._USA_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);
    return DvtThematicMapProjections._applyAffineTransform(viewPortTransform, DvtThematicMapProjections._getOrthographicProjection(new DvtPoint(- 95, 36), x, y));
  }
  return new DvtPoint(x, y);
};


/**
 * Returns the projected long/lat point in the world basemap coordinate system
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getWorldProjection = function(x, y) {
  var viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._WORLD_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);
  return DvtThematicMapProjections._applyAffineTransform(viewPortTransform, DvtThematicMapProjections._getRobinsonProjection(x, y));
};


/**
 * Returns the projected long/lat point in the australia basemap coordinate system
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getAustraliaProjection = function(x, y) {
  var viewPortTransform;
  if (DvtThematicMapProjections._NEW_ZEALAND_BOUNDS.containsPoint(x, y))
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._NEW_ZEALAND_BOUNDS, DvtThematicMapProjections._NEW_ZEALAND_RECT);
  else
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._AUSTRALIA_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);

  return DvtThematicMapProjections._applyAffineTransform(viewPortTransform, DvtThematicMapProjections._getMercatorProjection(x, y));
};


/**
 * Applies an affine transform to a point
 * @param {DvtRectangle} mapBounds The map bounds
 * @param {DvtPoint} point The point to apply the transform to
 * @param {number} rotRadians The rotation to apply to the transform matrix in radians
 * @private
 */
DvtThematicMapProjections._getAffineProjection = function(mapBounds, point, rotRadians) {
  var viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(mapBounds, DvtThematicMapProjections._VIEWPORT_BOUNDS);
  if (rotRadians) {
    var rotMatrix = new DvtMatrix();
    rotMatrix.rotate(rotRadians);
    viewPortTransform = DvtThematicMapProjections._concatAffineTransforms(viewPortTransform, rotMatrix);
  }
  return viewPortTransform.transformPoint(point);
};


/**
 * Returns the projected long/lat point using the albers equal area conic projection
 * @param {number} latOfOrigin latitude for the origin, in degrees
 * @param {number} lonOfOrigin longitude for the origin, in degrees
 * @param {number} sP1 standard parallel 1, in degrees
 * @param {number} sP2 standard parallel 2, in degrees
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getAlbersEqualAreaConicProjection = function(latOfOrigin, lonOfOrigin, sP1, sP2, x, y) {
  var lambda0 = DvtThematicMapProjections.toRadians(lonOfOrigin);
  var phi0 = DvtThematicMapProjections.toRadians(latOfOrigin);
  sP1 = DvtThematicMapProjections.toRadians(sP1);
  sP2 = DvtThematicMapProjections.toRadians(sP2);

  var n = 0.5 * (Math.sin(sP1) + Math.sin(sP2));
  var c = Math.pow((Math.cos(sP1)), 2) + (2 * n * Math.sin(sP1));

  var rho0 = c - (2 * n * Math.sin(phi0));
  rho0 = Math.sqrt(rho0) / n;

  var lambda = DvtThematicMapProjections.toRadians(x);
  var phi = DvtThematicMapProjections.toRadians(y);

  var theta = n * (lambda - lambda0);

  var rho = c - (2 * n * Math.sin(phi));
  rho = Math.sqrt(rho) / n;

  var pX = rho * Math.sin(theta);
  var pY = rho0 - (rho * Math.cos(theta));

  return new DvtPoint(pX, pY);
};


/**
 * Returns the projected long/lat point using the mercator projection assuming center is at 0,0
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getMercatorProjection = function(x, y) {
  var pY = Math.log(Math.tan(0.25 * Math.PI + 0.5 * DvtThematicMapProjections.toRadians(y)));
  return new DvtPoint(x, DvtThematicMapProjections.toDegrees(pY));
};


/**
 * Returns the projected long/lat point using the orthographic projection
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getOrthographicProjection = function(center, x, y) {
  var radX = DvtThematicMapProjections.toRadians(x);
  var radY = DvtThematicMapProjections.toRadians(y);
  var centerX = DvtThematicMapProjections.toRadians(center.x);
  var centerY = DvtThematicMapProjections.toRadians(center.y);
  var px = Math.cos(radY) * Math.sin(radX - centerX);
  var py = Math.cos(centerY) * Math.sin(radY) - Math.sin(centerY) * Math.cos(radY) * Math.cos(radX - centerX);
  return new DvtPoint(px * DvtThematicMapProjections._RADIUS, py * DvtThematicMapProjections._RADIUS);
};


/**
 * Returns the projected long/lat point using the robinson projection assuming center is at 0,0
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._getRobinsonProjection = function(x, y) {
  var ycriteria = Math.floor(Math.abs(y) / 5);
  if (ycriteria >= DvtThematicMapProjections._ROBINSON_COORDINATES.length - 1)
    ycriteria = DvtThematicMapProjections._ROBINSON_COORDINATES.length - 2;

  var yInterval = (Math.abs(y) - ycriteria * 5) / 5;

  var xLength = DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria + 1][0] - DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria][0];
  var yLength = DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria + 1][1] - DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria][1];

  var newX = x * (DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria][0] + yInterval * xLength);
  var newY = (DvtThematicMapProjections._ROBINSON_COORDINATES[ycriteria][1] + yInterval * yLength);

  if (y < 0)
    newY = - 1 * newY;

  return new DvtPoint(newX, newY * 180);
};


/**
 * Applies an affine transformation to a DvtPoint
 * @param {DvtMatrix} matrix The affine transformation matrix
 * @param {DvtPoint} point The point to apply the transform to
 * @return {DvtPoint} The transformed point
 * @private
 */
DvtThematicMapProjections._applyAffineTransform = function(matrix, point) {
  return new DvtPoint(point.x * matrix.getA() + matrix.getTx(), point.y * matrix.getD() + matrix.getTy());
};


/**
 * Returns the projected long/lat point using the robinson projection assuming center is at 0,0
 * @param {number} x Longitude
 * @param {number} y Latitude
 * @return {DvtPoint} The projected point in the basemap coordinate system for built-in basemaps or the original point
 * @private
 */
DvtThematicMapProjections._concatAffineTransforms = function(transform1, transform2) {
  var t1A = transform1.getA();
  var a = transform2.getA() * t1A;
  var b = transform2.getB() * t1A;
  var tx = transform1.getTx() + transform2.getTx() * t1A;

  var t1D = transform1.getD();
  var c = transform2.getC() * t1D;
  var d = transform2.getD() * t1D;
  var ty = transform1.getTy() + transform2.getTy() * t1D;

  return new DvtMatrix(a, b, c, d, tx, ty);
};


/**
 * Gets the viewport transformation matrix
 * @param {DvtRectangle} mapBound The map bounds
 * @param {DvtRectangle} deviceView The viewport bounds
 * @return {DvtMatrix} The viewport transform matrix
 * @private
 */
DvtThematicMapProjections._getViewPortTransformation = function(mapBound, deviceView) {
  var i = deviceView.x;
  var j = deviceView.y;

  var d = mapBound.w;
  var d1 = mapBound.h;
  var d2 = 0;
  var d3 = deviceView.w / d;
  var d4 = deviceView.h / d1;
  d2 = (d3 <= d4) ? d3 : d4;
  var d5 = i - mapBound.x * d2;
  var d6 = j + mapBound.y * d2;
  d5 += (deviceView.w - d * d2) / 2;
  d6 += deviceView.h - (deviceView.h - d1 * d2) / 2;

  return new DvtMatrix(d2, 0, 0, - d2, d5, d6);
};


/**
 * Converts a number to radians
 * @param {number} x The number to convert to radians
 * @return {number} The number converted to radians
 */
DvtThematicMapProjections.toRadians = function(x) {
  return x * (Math.PI / 180);
};


/**
 * Converts a number to degrees
 * @param {number} x The number to convert to degrees
 * @return {number} The number converted to degrees
 */
DvtThematicMapProjections.toDegrees = function(x) {
  return x * (180 / Math.PI);
};


/**
 * Gets the inverse projection for built-in basemaps to be used for drag and drop
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @param {String} basemap The basemap name
 * @return {DvtPoint} The inversely projected point in longitude/latitude for built-in basemaps or the original point
 */
DvtThematicMapProjections.inverseProject = function(x, y, basemap) {
  var point;
  // divide by 10 because basemaps are 10x larger than original projected maps
  x /= 10;
  y /= 10;
  switch (basemap) {
    case 'africa':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._AFRICA_BOUNDS,
                                                                    new DvtPoint(x, y));
      point = DvtThematicMapProjections._getInverseMercatorProjection(point.x, point.y);
      break;
    case 'asia':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._ASIA_BOUNDS,
                                                                    new DvtPoint(x, y),
                                                                    DvtThematicMapProjections.toRadians(5));
      point = DvtThematicMapProjections._getInverseAlbersEqualAreaConicProjection(40, 95, 20, 60, point.x, point.y);
      break;
    case 'australia':
      point = DvtThematicMapProjections._getInverseAustraliaProjection(x, y);
      break;
    case 'europe':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._EUROPE_BOUNDS,
                                                                    new DvtPoint(x, y),
                                                                    DvtThematicMapProjections.toRadians(10));
      point = DvtThematicMapProjections._getInverseAlbersEqualAreaConicProjection(35, 25, 40, 65, point.x, point.y);
      break;
    case 'northAmerica':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._N_AMERICA_BOUNDS,
                                                                    new DvtPoint(x, y));
      point = DvtThematicMapProjections._getInverseAlbersEqualAreaConicProjection(23, - 96, 20, 60, point.x, point.y);
      break;
    case 'southAmerica':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._S_AMERICA_BOUNDS,
                                                                    new DvtPoint(x, y),
                                                                    DvtThematicMapProjections.toRadians(5));
      break;
    case 'apac':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._APAC_BOUNDS,
                                                                    new DvtPoint(x, y));
      point = DvtThematicMapProjections._getInverseMercatorProjection(point.x, point.y);
      break;
    case 'emea':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._EMEA_BOUNDS,
                                                                    new DvtPoint(x, y));
      point = DvtThematicMapProjections._getInverseMercatorProjection(point.x, point.y);
      break;
    case 'latinAmerica':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._L_AMERICA_BOUNDS,
                                                                    new DvtPoint(x, y));
      break;
    case 'usaAndCanada':
      point = DvtThematicMapProjections._getInverseAffineProjection(DvtThematicMapProjections._USA_CANADA_BOUNDS,
                                                                    new DvtPoint(x, y));
      point = DvtThematicMapProjections._getInverseAlbersEqualAreaConicProjection(23, - 96, 20, 60, point.x, point.y);
      break;
    case 'worldRegions':
      point = DvtThematicMapProjections._getInverseWorldProjection(x, y);
      break;
    case 'usa':
      point = DvtThematicMapProjections._getInverseUSAProjection(x, y);
      break;
    case 'world':
      point = DvtThematicMapProjections._getInverseWorldProjection(x, y);
      break;
    default :
      break;
  }
  if (point)
    return point;
  else
    return new DvtPoint(x, y);
};


/**
 * Returns the inversely projected long/lat point in the usa basemap coordinate system
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseUSAProjection = function(x, y) {
  var viewPortTransform;
  if (DvtThematicMapProjections._ALASKA_WINDOW.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._ALASKA_BOUNDS, DvtThematicMapProjections._ALASKA_WINDOW);
    viewPortTransform.invert();
    var point = viewPortTransform.transformPoint(new DvtPoint(x, y));
    return DvtThematicMapProjections._getInverseMercatorProjection(point.x, point.y);
  }
  else if (DvtThematicMapProjections._HAWAII_WINDOW.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._HAWAII_BOUNDS, DvtThematicMapProjections._HAWAII_WINDOW);
    viewPortTransform.invert();
    return viewPortTransform.transformPoint(new DvtPoint(x, y));
  }
  else if (DvtThematicMapProjections._VIEWPORT_BOUNDS.containsPoint(x, y)) {
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._USA_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);
    viewPortTransform.invert();
    var point = viewPortTransform.transformPoint(new DvtPoint(x, y));
    return DvtThematicMapProjections._getInverseOrthographicProjection(new DvtPoint(- 95, 36), point.x, point.y);
  }
  return new DvtPoint(x, y);
};


/**
 * Returns the inversely projected long/lat point in the world basemap coordinate system
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseWorldProjection = function(x, y) {
  var viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._WORLD_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);
  viewPortTransform.invert();
  var point = viewPortTransform.transformPoint(new DvtPoint(x, y));
  return DvtThematicMapProjections._getInverseRobinsonProjection(point.x, point.y);
};


/**
 * Returns the inversely projected long/lat point in the australia basemap coordinate system
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseAustraliaProjection = function(x, y) {
  var viewPortTransform;
  if (DvtThematicMapProjections._NEW_ZEALAND_RECT.containsPoint(x, y))
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._NEW_ZEALAND_BOUNDS, DvtThematicMapProjections._NEW_ZEALAND_RECT);
  else
    viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(DvtThematicMapProjections._AUSTRALIA_BOUNDS, DvtThematicMapProjections._VIEWPORT_BOUNDS);

  viewPortTransform.invert();
  var point = viewPortTransform.transformPoint(new DvtPoint(x, y));
  return DvtThematicMapProjections._getInverseMercatorProjection(point.x, point.y);
};


/**
 * Applies an inverse affine transform to a point
 * @param {DvtRectangle} mapBounds The map bounds
 * @param {DvtPoint} point The point to apply the transform to
 * @param {number} rotRadians The rotation to apply to the transform matrix in radians
 * @private
 */
DvtThematicMapProjections._getInverseAffineProjection = function(mapBounds, point, rotRadians) {
  var viewPortTransform = DvtThematicMapProjections._getViewPortTransformation(mapBounds, DvtThematicMapProjections._VIEWPORT_BOUNDS);
  if (rotRadians) {
    var rotMatrix = new DvtMatrix();
    rotMatrix.rotate(rotRadians);
    viewPortTransform = DvtThematicMapProjections._concatAffineTransforms(viewPortTransform, rotMatrix);
  }
  viewPortTransform.invert();
  return viewPortTransform.transformPoint(point);
};


/**
 * Returns the inversely projected long/lat point using the albers equal area conic projection
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseAlbersEqualAreaConicProjection = function(latOfOrigin, lonOfOrigin, sP1, sP2, x, y) {
  var lambda0 = DvtThematicMapProjections.toRadians(lonOfOrigin);
  var phi0 = DvtThematicMapProjections.toRadians(latOfOrigin);
  sP1 = DvtThematicMapProjections.toRadians(sP1);
  sP2 = DvtThematicMapProjections.toRadians(sP2);

  var n = 0.5 * (Math.sin(sP1) + Math.sin(sP2));
  var c = Math.pow((Math.cos(sP1)), 2) + (2 * n * Math.sin(sP1));

  var p0 = c - (2 * n * Math.sin(phi0));
  p0 = Math.sqrt(p0) / n;

  var p = Math.sqrt(x * x + (p0 - y) * (p0 - y));
  var pheta = Math.atan(x / (p0 - y));

  var py = Math.asin((c - p * p * n * n) / (2 * n));
  var px = lambda0 + pheta / n;

  return new DvtPoint(DvtThematicMapProjections.toDegrees(px), DvtThematicMapProjections.toDegrees(py));
};


/**
 * Returns the inversely projected long/lat point using the mercator projection, assuming center at 0,0
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseMercatorProjection = function(x, y) {
  var py = 2 * Math.atan(Math.exp(DvtThematicMapProjections.toRadians(y))) - 0.5 * Math.PI;
  return new DvtPoint(x, DvtThematicMapProjections.toDegrees(py));
};


/**
 * Returns the inversely projected long/lat point using the orthographic projection, assuming center at 0,0
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseOrthographicProjection = function(center, x, y) {
  var radX = x / DvtThematicMapProjections._RADIUS;
  var radY = y / DvtThematicMapProjections._RADIUS;
  var centerX = DvtThematicMapProjections.toRadians(center.x);
  var centerY = DvtThematicMapProjections.toRadians(center.y);

  var p = Math.sqrt((radX * radX) + (radY * radY));
  var c = Math.asin(p);

  var py = Math.asin(Math.cos(c) * Math.sin(centerY) + (radY * Math.sin(c) * Math.cos(centerY) / p));
  var px = centerX + Math.atan(radX * Math.sin(c) / (p * Math.cos(centerY) * Math.cos(c) - radY * Math.sin(centerY) * Math.sin(c)));

  return new DvtPoint(DvtThematicMapProjections.toDegrees(px), DvtThematicMapProjections.toDegrees(py));
};


/**
 * Returns the inversely projected long/lat point using the robinson projection, assuming center at 0,0
 * @param {number} x The x coordinate in the basemap coordinate system
 * @param {number} y The y coordinate in the basemap coordinate system
 * @return {DvtPoint} The projected point in longitude/latitude using the basemap projection
 * @private
 */
DvtThematicMapProjections._getInverseRobinsonProjection = function(x, y) {
  var criteria = Math.floor(Math.abs(y) / 5.0);
  if (criteria >= DvtThematicMapProjections._ROBINSON_COORDINATES.length - 1)
    criteria = DvtThematicMapProjections._ROBINSON_COORDINATES.length - 2;

  var xLength = DvtThematicMapProjections._ROBINSON_COORDINATES[criteria + 1][0] - DvtThematicMapProjections._ROBINSON_COORDINATES[criteria][0];
  var yLength = DvtThematicMapProjections._ROBINSON_COORDINATES[criteria + 1][1] - DvtThematicMapProjections._ROBINSON_COORDINATES[criteria][1];

  var yInterval = (Math.abs(y / 180.0) - DvtThematicMapProjections._ROBINSON_COORDINATES[criteria][1]) / yLength;
  var originalY = (yInterval * 5.0) + criteria * 5.0;
  var originalX = x / (DvtThematicMapProjections._ROBINSON_COORDINATES[criteria][0] + yInterval * xLength);

  if (y < 0.0)
    originalY = - 1 * originalY;

  return new DvtPoint(originalX, originalY);
};
/**
 * @constructor
 * ZoomInButton for use with Diagram.
 */
var DvtMapControlButton = function(context, button, mapCallback, panZoomCanvas, btype, resources, eventManager) {
  this.Init(context, button, mapCallback, panZoomCanvas, btype, resources, eventManager);
};

DvtObj.createSubclass(DvtMapControlButton, DvtBaseControl, 'DvtMapControlButton');

DvtMapControlButton.BUTTON_TYPE_DRILLUP = 0;
DvtMapControlButton.BUTTON_TYPE_DRILLDOWN = 1;
DvtMapControlButton.BUTTON_TYPE_RESET = 2;


/**
 * Helper method called by the constructor to initialize this object.
 * @param {DvtContext} context An object maintaining application specific context, as well as well as providing
 *                             access to platform specific data and objects, such as the factory
 * @param {DvtButton} button A button used by the control
 * @param {function} mapCallback A callback function that should be called on click event
 * @param {DvtPanZoomCanvas} canvas The PanZoomCanvas this control will be associated with
 * @param {DvtXmlNode} resources The map of translated resource strings
 * @param {DvtEventManager} eventManager An event manager to handle events for the control
 */
DvtMapControlButton.prototype.Init = function(context, button, mapCallback, panZoomCanvas, btype, resources, eventManager) {
  DvtMapControlButton.superclass.Init.call(this, context, panZoomCanvas, resources);

  this._btype = btype;
  this._button = button;
  this._eventManager = eventManager;
  this._button.setCallback(this.HandleOnClick, this);
  this._button.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  var proxy = new DvtControlPanelEventHandlerProxy(this, null, null,
      null, null, null,
      this._getTooltipText());
  this._eventManager.associate(this._button, proxy);

  this.addChild(this._button);

  this._mapCallback = mapCallback;
  this._isEnabled = true;
};


/**
 * Sets button state
 * @param {boolean} enabled True to enable the button
 */
DvtMapControlButton.prototype.setEnabled = function(enabled)
{
  this.setAlpha(enabled ? 1.0 : 0.4);
  this._button.setCursor(enabled ? DvtSelectionEffectUtils.getSelectingCursor() : null);
  this._isEnabled = enabled;
  this._button.setEnabled(enabled);
  this._button.initState();
};

DvtMapControlButton.prototype.HandleOnClick = function(event)
{
  DvtEventManager.consumeEvent(event);
  if (this._isEnabled && this._mapCallback) {
    this._mapCallback();
  }
};


/**
 * @return tooltip text for current buton type.
 */
DvtMapControlButton.prototype._getTooltipText = function() {
  if (this._btype == DvtMapControlButton.BUTTON_TYPE_DRILLUP) {
    return this.Bundle.getTranslatedString('CONTROL_PANEL_DRILLUP');
  }else if (this._btype == DvtMapControlButton.BUTTON_TYPE_DRILLDOWN) {
    return this.Bundle.getTranslatedString('CONTROL_PANEL_DRILLDOWN');
  }else if (this._btype == DvtMapControlButton.BUTTON_TYPE_RESET) {
    return this.Bundle.getTranslatedString('CONTROL_PANEL_RESET');
  }else {
    return null;
  }
};

/**
 * Thematic map control panel which includes buttons for drilling
 * @param {DvtContext} context The rendering context
 * @param {DvtPanZoomComponent} view The component that this control panel belongs to
 * @param {Number} state Whether the initial state is collapsed or expanded
 * @constructor
 */
var DvtThematicMapControlPanel = function(context, view, state) {
  this.Init(context, view, state);
};

DvtObj.createSubclass(DvtThematicMapControlPanel, DvtControlPanel, 'DvtThematicMapControlPanel');

/**
 * @param {DvtContext} context The rendering context
 * @param {DvtPanZoomComponent} view The component that this control panel belongs to
 * @param {Number} state Whether the initial state is collapsed or expanded
 */
DvtThematicMapControlPanel.prototype.Init = function(context, view, state) {
  DvtThematicMapControlPanel.superclass.Init.call(this, context, view, state);
  this._drillMode = view.getDrillMode();
  this._buttonImages = view.getResourcesMap();
  this._drillUpCallback = DvtObj.createCallback(view, view.drillUp);
  this._drillDownCallback = DvtObj.createCallback(view, view.drillDown);
  this._resetCallback = DvtObj.createCallback(view, view.resetMap);
  this._resetButton = null;
  this._drillUpButton = null;
  this._drillDownButton = null;
  this._drillDownButtonEnabled = false;
  this._drillUpButtonEnabled = false;
  this._styleMap = view.getSubcomponentStyles();
};

DvtThematicMapControlPanel.prototype.setEnabledDrillDownButton = function(enable) {
  this._drillDownButtonEnabled = enable;
  if (this._drillDownButton)
    this._drillDownButton.setEnabled(enable);
};

DvtThematicMapControlPanel.prototype.setEnabledDrillUpButton = function(enable) {
  this._drillUpButtonEnabled = enable;
  if (this._drillUpButton)
    this._drillUpButton.setEnabled(enable);
};

/**
  *  Populate the horizontal part of the control panel
  *  @param {DvtContainer} contentSprite Container for holding additional buttons
  */
DvtThematicMapControlPanel.prototype.PopulateHorzContentBar = function(contentSprite) {
  if (this._drillMode && this._drillMode != 'none') {
    var buttonOffset = DvtStyleUtils.getStyle(this._styleMap, DvtControlPanel.CP_BUTTON_WIDTH, 0);
    this._resetButton = DvtButtonLAFUtils.createResetButton(this.getCtx(), this._resetCallback, this._panZoomCanvas,
                                                            DvtMapControlButton.BUTTON_TYPE_RESET, this.Bundle,
                                                            this._buttonImages, this._eventManager, this._styleMap);
    contentSprite.addChild(this._resetButton);
    this._drillDownButton = DvtButtonLAFUtils.createDrillDownButton(this.getCtx(), this._drillDownCallback,
                                                                    this._panZoomCanvas,
                                                                    DvtMapControlButton.BUTTON_TYPE_DRILLDOWN,
                                                                    this.Bundle, this._buttonImages,
                                                                    this._eventManager, this._styleMap);
    this._drillDownButton.setTranslateX(buttonOffset);
    this._drillDownButton.setEnabled(this._drillDownButtonEnabled);
    contentSprite.addChild(this._drillDownButton);
    this._drillUpButton = DvtButtonLAFUtils.createDrillUpButton(this.getCtx(), this._drillUpCallback,
                                                                this._panZoomCanvas,
                                                                DvtMapControlButton.BUTTON_TYPE_DRILLUP,
                                                                this.Bundle, this._buttonImages,
                                                                this._eventManager, this._styleMap);

    this._drillUpButton.setTranslateX(buttonOffset * 2);
    this._drillUpButton.setEnabled(this._drillUpButtonEnabled);
    contentSprite.addChild(this._drillUpButton);

  }
};
});