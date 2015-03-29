"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * @constructor
 * Treemap component.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @class Treemap component.
 * @extends {DvtBaseTreeView}
 */
var DvtBaseTreemap = function(context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
};

// Make DvtBaseTreemap a subclass of DvtBaseTreeView
DvtObj.createSubclass(DvtBaseTreemap, DvtBaseTreeView, 'DvtBaseTreemap');

// Layout and Style Constants
DvtBaseTreemap._BUFFER_SPACE = 7; // This is in addition to gap between groups
DvtBaseTreemap._MIN_BUFFER_SPACE = 2; // Minimum buffer for very small treemaps

DvtBaseTreemap._BACKGROUND_FILL_COLOR = '#EBEFF5';
DvtBaseTreemap._BACKGROUND_BORDER_COLOR = '#DBE0EA';

DvtBaseTreemap._BACKGROUND_INLINE_DEFAULT = 'background-color:' + DvtBaseTreemap._BACKGROUND_FILL_COLOR + ';' +
    'border-color:' + DvtBaseTreemap._BACKGROUND_BORDER_COLOR + ';' +
    'border-width:2px';

/**
 * @override
 */
DvtBaseTreemap.prototype.Init = function(context, callback, callbackObj) {
  DvtBaseTreemap.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtTreemapDefaults();
};

/**
 * @override
 */
DvtBaseTreemap.prototype.Parse = function(xmlString) {
  var parser = new DvtTreemapParser(this);
  return parser.parse(xmlString);
};

/**
 * @override
 */
DvtBaseTreemap.prototype.ApplyParsedProperties = function(props) {
  DvtBaseTreemap.superclass.ApplyParsedProperties.call(this, props);

  // Layout and sorting
  this._layout = props.layout;
  this._groupGaps = props.groupGaps;

  if (this._layout) {
    this._layout.setSorting(this.Sorting);
  }

  // Isolate Support
  this._isolatedNodes = [];
  this._processInitialIsolate(props.isolateRowKey);
};

/**
 * @override
 */
DvtBaseTreemap.prototype.Layout = function(availSpace) {
  // Allocate buffer space for the container
  var bufferSpace = Math.max(Math.ceil(DvtBaseTreemap._BUFFER_SPACE * Math.min(availSpace.w, availSpace.h) / 400), DvtBaseTreemap._MIN_BUFFER_SPACE);
  availSpace.x += bufferSpace;
  availSpace.y += bufferSpace;
  availSpace.w -= 2 * bufferSpace;
  availSpace.h -= 2 * bufferSpace;

  // Legend and Breadcrumbs
  // Add the additional buffer space for nodes to make the legend line up.
  var gap = this._layout.getGapSize(this, 1);
  availSpace.x += gap;
  availSpace.w -= 2 * gap;
  this.LayoutBreadcrumbs(availSpace);
  this.LayoutLegend(availSpace);
  // Restore the gap for use by the nodes
  availSpace.x -= gap;
  availSpace.w += 2 * gap;

  // Layout Algorithm: For a layout in response to isolate or restore, only re-layout the newly visible isolated node.
  // Otherwise, layout the root, and then each isolated child in order.
  var numIsolated = this._isolatedNodes.length;
  if (numIsolated > 0 && this._isolateRestoreLayout) {
    // Isolate or Restore Action: Don't layout unchanged, since it would affect animation
    var lastIsolated = this._isolatedNodes[numIsolated - 1];
    this._layout.layout(this, lastIsolated, availSpace.x, availSpace.y, availSpace.w, availSpace.h, true);
  }
  else {
    // Standard Layout: Layer the isolated nodes so that they can be peeled back like a stack.
    if (this._root)
      this._layout.layout(this, this._root, availSpace.x, availSpace.y, availSpace.w, availSpace.h, false);

    for (var i = 0; i < numIsolated; i++) {
      var layoutRoot = this._isolatedNodes[i];
      this._layout.layout(this, layoutRoot, availSpace.x, availSpace.y, availSpace.w, availSpace.h, true);
    }
  }
};

/**
 * @override
 */
DvtBaseTreemap.prototype.Render = function(container, bounds) {
  // Background
  this.RenderBackground(container, DvtBaseTreemap._BACKGROUND_INLINE_DEFAULT);

  // Breadcrumbs
  this.RenderBreadcrumbs(container);

  // Legend
  this.RenderLegend(container);

  // Node or Empty Text
  if (this.HasValidData()) {
    // Layer for group text displayed on node.  Will be reordered after the selected layer
    this._groupTextLayer = new DvtContainer(this.getCtx());
    container.addChild(this._groupTextLayer);

    // Render the nodes.  The root node is not rendered unless it's a singleton
    // This creates the shape objects, but does not render them yet.
    if (this._isolatedNode)
      this._isolatedNode.render(container);
    else if (!this._root.hasChildren())
      this._root.render(container);
    else
      this._root.renderChildren(container);

    // Create a group for isolated nodes
    this._isolatedLayer = new DvtContainer(this.getCtx());
    container.addChild(this._isolatedLayer);

    // Create a group for selected nodes
    this._selectedLayer = new DvtContainer(this.getCtx());
    container.addChild(this._selectedLayer);

    // Reorder group text after selected layer
    container.addChild(this._groupTextLayer);

    // Prepare the hover effect
    this._hoverEffect = new DvtPolyline(this.getCtx(), new Array());
    this._hoverEffect.setVisible(false);
    this._hoverEffect.setMouseEnabled(false);
    this._hoverEffect.setPixelHinting(true);
    container.addChild(this._hoverEffect);

    // Fix the z-order of the isolated objects
    for (var i = 0; i < this._isolatedNodes.length; i++) {
      var displayable = this._isolatedNodes[i].getDisplayable();
      this._isolatedLayer.addChild(displayable);
    }
  }
  else {
    // Display the empty text message
    this.RenderEmptyText(container);
  }
};

/**
 * Hook for cleaning up animation behavior at the end of the animation.
 * @override
 */
DvtBaseTreemap.prototype.OnAnimationEnd = function() {
  // Before the animation, the treemap nodes will remove their bevels and selection
  // effects.  If the animation is complete (and not stopped), then rerender to restore.
  if (!this.AnimationStopped) {
    this._container.removeChildren();

    // Finally, re-layout and render the component
    var availSpace = new DvtRectangle(0, 0, this.Width, this.Height);
    this.Layout(availSpace);
    this.Render(this._container);

    // Reselect the nodes using the selection handler's state
    this.ReselectNodes();
  }

  // Delegate to the superclass to clear common things
  DvtBaseTreemap.superclass.OnAnimationEnd.call(this);
};

/**
 * Reselects the selected nodes after a re-render.
 * @protected
 */
DvtBaseTreemap.prototype.ReselectNodes = function() {
  var selectedNodes = this._selectionHandler ? this._selectionHandler.getSelection() : new Array();
  for (var i = 0; i < selectedNodes.length; i++) {
    // Don't show selection effect for obscured nodes when isolate is being used
    if (this._isolatedNodes.length > 0) {
      var lastIsolated = this._isolatedNodes[this._isolatedNodes.length - 1];
      if (selectedNodes[i] == lastIsolated || selectedNodes[i].isDescendantOf(lastIsolated))
        selectedNodes[i].setSelected(true);
    }
    else
      selectedNodes[i].setSelected(true);
  }
};

/**
 * @override
 */
DvtBaseTreemap.prototype.CreateKeyboardHandler = function(manager)
{
  return new DvtTreemapKeyboardHandler(manager);
};

/**
 * @override
 */
DvtBaseTreemap.prototype.CreateEventManager = function(view, context, callback, callbackObj)
{
  return new DvtTreemapEventManager(view, context, callback, callbackObj);
};

/**
 * @override
 */
DvtBaseTreemap.prototype.GetInitialFocusedItem = function(root)
{
  var isolatedRootNode = this.__getLastIsolatedNode();

  if (isolatedRootNode)
    return this.__getDefaultNavigable(isolatedRootNode.getLeafNodes());
  else if (root)
    return this.__getDefaultNavigable(root.getLeafNodes());
  else
    return null;
};

/**
 * Updates the hover effect to display the specified stroke along the specified points.
 * @param {array} points The array of points defining the polyline.
 * @param {DvtStroke} stroke The stroke definition.
 * @param {DvtTreemapNode} node The treemap node that this hover effect will belong to.
 */
DvtBaseTreemap.prototype.__showHoverEffect = function(points, stroke, node) {
  this._hoverEffect.setPoints(points);
  this._hoverEffect.setStroke(stroke);
  this._hoverEffect.setVisible(true);
};

/**
 * Hides the hover effect.
 */
DvtBaseTreemap.prototype.__hideHoverEffect = function() {
  this._hoverEffect.setVisible(false);
};

/**
 * Returns the layer for rendering group text displayed on nodes.  This layer is above the selected
 * layer, so that selected nodes will node obscure it.
 * @param {DvtContainer}
 */
DvtBaseTreemap.prototype.__getGroupTextLayer = function() {
  return this._groupTextLayer;
};

/**
 * Moves the specified object to the selected layer, above the non-selected objects.
 * @param {DvtRect} rect The object to be moved.
 */
DvtBaseTreemap.prototype.__moveToSelectedLayer = function(rect) {
  // Loop through the selected layer to find the right position
  var newIndex = 0;
  var numChildren = this._selectedLayer.getNumChildren();
  for (var i = 0; i < numChildren; i++) {
    var child = this._selectedLayer.getChildAt(i);
    if (rect.zIndex > child.zIndex)
      newIndex = i + 1;
  }

  // Add the object
  if (newIndex < numChildren)
    this._selectedLayer.addChildAt(rect, newIndex);
  else
    this._selectedLayer.addChild(rect);
};

/**
 * @override
 */
DvtBaseTreemap.prototype.__getNodeUnderPoint = function(x, y) {
  // For isolated nodes, search from the last isolated node
  if (this._isolatedNodes.length > 0) {
    var lastIsolated = this._isolatedNodes[this._isolatedNodes.length - 1];
    return lastIsolated.getNodeUnderPoint(x, y);
  }
  else
    return this._root.getNodeUnderPoint(x, y);
};

/**
 * Isolates the specified node.
 * @param {DvtBaseTreeNode} node The node to isolate.
 */
DvtBaseTreemap.prototype.__isolate = function(node) {
  var currentNavigable = this.__getEventManager().getFocus();
  if (currentNavigable)
    currentNavigable.hideKeyboardFocusEffect();

  // Keep track of the isolated node
  this._isolatedNodes.push(node);

  // Update state
  this.__dispatchEvent(new DvtTreemapIsolateEvent(node.getId()));

  // Layout the isolated node and its children
  this._isolateRestoreLayout = true;
  this.Layout(new DvtRectangle(0, 0, this.Width, this.Height));
  this._isolateRestoreLayout = false;

  // Update z-order
  var displayable = node.getDisplayable();
  this._isolatedLayer.addChild(displayable);

  // Render the changes
  this._renderIsolateRestore(node);
};

/**
 * Restores the full tree from the isolated state.
 */
DvtBaseTreemap.prototype.__restore = function() {
  var restoreNode = this._isolatedNodes.pop();

  var currentNavigable = this.__getEventManager().getFocus();
  if (currentNavigable)
    currentNavigable.hideKeyboardFocusEffect();

  // after we restore the full tree, set keyboard focus on the node that was previously isolated
  this.__setNavigableIdToFocus(restoreNode.getId());

  // Update state
  this.__dispatchEvent(new DvtTreemapIsolateEvent());

  // Layout the isolated node and its children
  this._isolateRestoreLayout = true;
  this.Layout(new DvtRectangle(0, 0, this.Width, this.Height));
  this._isolateRestoreLayout = false;

  // Render the changes
  this._renderIsolateRestore(restoreNode);
};

/**
 * Returns the currently isolated node, or null if no node is isolated
 *
 * @return {DvtTreemapNode}
 */
DvtBaseTreemap.prototype.__getLastIsolatedNode = function()
{
  if (this._isolatedNodes && this._isolatedNodes.length > 0)
    return this._isolatedNodes[this._isolatedNodes.length - 1];
  else
    return null;
};

/**
 * The node that was isolated or restored.
 * @param {DvtTreemapNode} node
 * @private
 */
DvtBaseTreemap.prototype._renderIsolateRestore = function(node) {
  // Animate or re-render to display the updated state
  if (this.AnimationOnDataChange) {
    // Deselect all nodes so that the selected layer doesn't display above the
    // isolated node during animation.  Nodes will be reselected at the end of animation.
    var selectedNodes = this._selectionHandler ? this._selectionHandler.getSelection() : new Array();
    for (var i = 0; i < selectedNodes.length; i++) {
      selectedNodes[i].setSelected(false);
    }

    // Animate the isolated node
    var playables = node.getIsolateAnimation();
    this.Animation = new DvtParallelPlayable(this.getCtx(), playables);
    this.Animation.setOnEnd(this.OnAnimationEnd, this);

    // Disable event listeners temporarily
    this._eventHandler.removeListeners(this);

    // Start the animation
    this.Animation.play();
  }
  else {
    // Fix for 17562112: the true prevents the options object from being evaluated, so that the isolated node will not
    // be cleared.  This is necessary until we remove the xml layer, after which we can remove the true param.
    this.render(null, this.Width, this.Height, true);
  }
};

/**
 * Processes the initially isolated node, if any.
 * @param {string} isolateRowKey The initially isolated node, if any.
 */
DvtBaseTreemap.prototype._processInitialIsolate = function(isolateRowKey) {
  if (isolateRowKey && this._root) {
    var allNodes = this._root.getDescendantNodes();
    allNodes.push(this._root);

    // Look through all the nodes for the isolated node
    for (var i = 0; i < allNodes.length; i++) {
      if (allNodes[i].getId() == isolateRowKey) {
        this._isolatedNodes.push(allNodes[i]);
        return;
      }
    }
  }
};

/**
 * Returns whether gaps are displayed between groups.
 * @return {string} The types of groups for which gaps are displayed.
 */
DvtBaseTreemap.prototype.__getGroupGaps = function() {
  return this._groupGaps;
};

/**
 * Returns the default navigable item to receive keyboard focus.
 * @param {Array} navigableItems An array of DvtNavigableItems that could receive keyboard focus
 * @return {DvtKeyboardNavigable}
 */
DvtBaseTreemap.prototype.__getDefaultNavigable = function(navigableItems)
{
  var keyboardHandler = this._eventHandler.getKeyboardHandler();
  if (keyboardHandler)
    return keyboardHandler.getDefaultNavigable(navigableItems);
  else if (navigableItems && navigableItems.length > 0)
    return navigableItems[0];
  else
    return null;
};

DvtBaseTreemap.prototype.getShapesForViewSwitcher = function(bOld) {
  var shapes = {};
  if (this._root) {
    var arNodes = [this._root];
    while (arNodes.length > 0) {
      var node = arNodes.splice(0, 1)[0];
      var id = node.getId();
      var shape = node.getDisplayable();
      if (id && shape) {
        shapes[id] = shape;
        shapes[id + '_text'] = node._text;

        // TODO private access is not allowed, so we'll need to fix this before productizing.
        if (node._topLeftShape) {
          shape.removeChild(node._topLeftShape);
        }
        if (node._fillShape) {
          shape.removeChild(node._fillShape);
        }

        // TODO setting the fill to deal with the issue where the animation shapes currently use the background shape
        shape.setFill(node.GetFill());

        //flatten hierarchical structure of nodes so that they animate independently
        if (bOld) {
          var parentNode = node.GetParent();
          if (parentNode) {
            var parentShape = parentNode.getDisplayable();
            var parent = null;
            if (parentShape) {
              parent = parentShape.getParent();
            }
            else {
              parent = this._container;
            }
            if (parent) {
              //this will insert children in reverse z-order, but still after the parent node
              var childIndex = parent.getChildIndex(parentShape);
              if (node._border) {
                parent.addChildAt(node._border, childIndex + 1);
              }
              if (node._borderBR) {
                parent.addChildAt(node._borderBR, childIndex + 1);
              }
              if (node._borderTL) {
                parent.addChildAt(node._borderTL, childIndex + 1);
              }
              if (node._text) {
                parent.addChildAt(node._text, childIndex + 1);
              }
              parent.addChildAt(shape, childIndex + 1);
            }
          }
        }
      }

      var children = node.getChildNodes();
      if (children) {
        arNodes = arNodes.concat(children);
      }
    }
  }
  return shapes;
};
/**
 * Sunburst component.  This component should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtBaseTreemap}
 * @export
 */
var DvtTreemap = function() {};

DvtObj.createSubclass(DvtTreemap, DvtBaseTreemap, 'DvtTreemap');


/**
 * Returns a new instance of DvtTreemap.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtTreemap}
 * @export
 */
DvtTreemap.newInstance = function(context, callback, callbackObj) {
  var component = new DvtTreemap();
  component.Init(context, callback, callbackObj);
  return component;
};


/**
 * Returns a copy of the default options for the specified skin.
 * @param {string} skin The skin whose defaults are being returned.
 * @return {object} The object containing defaults for this component.
 * @export
 */
DvtTreemap.getDefaults = function(skin) 
{
  return (new DvtTreemapDefaults()).getDefaults(skin);
};


/**
 * @override
 * @export
 */
DvtTreemap.prototype.render = function(options, width, height, bSkipXml) 
{
  // Update if a new options object has been provided or initialize with defaults if needed.
  if (options) {
    this.Options = this.Defaults.calcOptions(options);

    // Disable animation for canvas and xml
    if (!DvtAgent.isEnvironmentBrowser()) {
      this.Options['animationOnDisplay'] = 'none';
      this.Options['animationOnDataChange'] = 'none';
    }
  }
  else if (!this.Options)
    this.Options = this.GetDefaults();

  // TODO: bSkipXml is needed for isolate/restore to prevent the XML from being resent to the component.  This can be
  // removed once the XML layer is removed.  See bug 17562112.
  // Convert the options object into XML
  var xmlString = bSkipXml ? null : (new DvtTreemapJsonUtils(this.getCtx())).toXml(this.Options);

  // Call superclass with the xmlString to render
  DvtTreemap.superclass.render.call(this, xmlString, width, height);
};

/**
 * @override
 */
DvtTreemap.prototype.getBundle = function() 
{
  if (!this._bundle)
    this._bundle = new DvtTreemapBundle();
  return this._bundle;
};
/**
 * Treemap XML Parser
 * @param {DvtSunburst} treemap The owning treemap component.
 * @class
 * @constructor
 * @extends {DvtBaseTreeParser}
 */
var DvtTreemapParser = function(treemap) {
  this.Init(treemap);
};

// Make DvtTreemapParser a subclass of DvtBaseTreeParser
DvtObj.createSubclass(DvtTreemapParser, DvtBaseTreeParser, 'DvtTreemapParser');

// Top Level Attributes
DvtTreemapParser.ATTR_LAYOUT = 'layout';
DvtTreemapParser.ATTR_GROUP_GAPS = 'gg';
DvtTreemapParser.ATTR_ISOLATE_ROW_KEY = 'irk';

// Top Level Attribute Values
DvtTreemapParser.LAYOUT_SQUARIFY = 's';
DvtTreemapParser.LAYOUT_SLICE_AND_DICE_HORIZ = 'h';
DvtTreemapParser.LAYOUT_SLICE_AND_DICE_VERT = 'v';

// Node Attributes
DvtTreemapParser.ATTR_GROUP_LABEL_DISPLAY = 'gld';
DvtTreemapParser.ATTR_LABEL_H_ALIGN = 'ha';
DvtTreemapParser.ATTR_LABEL_V_ALIGN = 'va';
DvtTreemapParser.ATTR_HEADER_TITLE_H_ALIGN = 'hha';
DvtTreemapParser.ATTR_HEADER_LABEL_STYLE = 'hls';
DvtTreemapParser.ATTR_HEADER_ISOLATE = 'hi';
DvtTreemapParser.ATTR_HEADER_USE_NODE_COLOR = 'unc';

// Node Attribute Values
DvtTreemapParser.GROUP_GAPS_ALL = 'a';
DvtTreemapParser.GROUP_GAPS_OUTER = 'o';
DvtTreemapParser.GROUP_GAPS_NONE = 'n';


/**
 * @override
 */
DvtTreemapParser.prototype.CreateNode = function(treeView, props, templates) {
  return new DvtTreemapNode(treeView, props, templates);
};


/**
 * @override
 */
DvtTreemapParser.prototype.ParseRootAttributes = function(xmlNode) {
  // The object that will be populated with parsed values and returned
  var ret = DvtTreemapParser.superclass.ParseRootAttributes.call(this, xmlNode);

  var layoutStr = xmlNode.getAttr(DvtTreemapParser.ATTR_LAYOUT);
  if (layoutStr == DvtTreemapParser.LAYOUT_SLICE_AND_DICE_HORIZ)
    ret.layout = new DvtSliceAndDiceLayout(true);
  else if (layoutStr == DvtTreemapParser.LAYOUT_SLICE_AND_DICE_VERT)
    ret.layout = new DvtSliceAndDiceLayout(false);
  else
    ret.layout = new DvtSquarifyingLayout();

  ret.groupGaps = xmlNode.getAttr(DvtTreemapParser.ATTR_GROUP_GAPS);
  if (!ret.groupGaps)
    ret.groupGaps = DvtTreemapParser.GROUP_GAPS_OUTER;

  // Store the isolated row key on the parser, for use when parsing nodes
  ret.isolateRowKey = xmlNode.getAttr(DvtTreemapParser.ATTR_ISOLATE_ROW_KEY);
  this._isolateRowKey = ret.isolateRowKey;

  return ret;
};


/**
 * @override
 */
DvtTreemapParser.prototype.ParseNodeAttributes = function(xmlNode) {
  // The object that will be populated with parsed values and returned
  var ret = DvtTreemapParser.superclass.ParseNodeAttributes.call(this, xmlNode);

  // Parse this node's properties
  ret.groupLabelDisplay = xmlNode.getAttr(DvtTreemapParser.ATTR_GROUP_LABEL_DISPLAY);
  ret.labelHalign = xmlNode.getAttr(DvtTreemapParser.ATTR_LABEL_H_ALIGN);
  ret.labelValign = xmlNode.getAttr(DvtTreemapParser.ATTR_LABEL_V_ALIGN);
  ret.isolate = xmlNode.getAttr(DvtTreemapParser.ATTR_HEADER_ISOLATE);

  ret.headerUseNodeColor = xmlNode.getAttr(DvtTreemapParser.ATTR_HEADER_USE_NODE_COLOR);
  ret.headerHalign = xmlNode.getAttr(DvtTreemapParser.ATTR_HEADER_TITLE_H_ALIGN);
  var headerLabelStyle = xmlNode.getAttr(DvtTreemapParser.ATTR_HEADER_LABEL_STYLE);
  if (headerLabelStyle)
    ret.headerLabelStyle = new DvtCSSStyle(headerLabelStyle);

  // Initially isolated node support
  if ((this._isolateRowKey != null) && (this._isolateRowKey == ret.id))
    ret.isIsolated = true;

  return ret;
};


/**
 * @override
 */
DvtTreemapParser.prototype.ParseAdditionalNodeStyles = function(nodeStyle, nodeHoverStyle, nodeSelectedStyle, styles) {
  styles[DvtTreemapNode.NODE_HOVER_COLOR_STYLE] = nodeHoverStyle.getStyle('border-color');
  styles[DvtTreemapNode.NODE_SELECTED_OUTER_COLOR_STYLE] = nodeSelectedStyle.getStyle(DvtCSSStyle.OUTER_COLOR);
  styles[DvtTreemapNode.NODE_SELECTED_INNER_COLOR_STYLE] = nodeSelectedStyle.getStyle(DvtCSSStyle.INNER_COLOR);
};


/**
 * @override
 */
DvtTreemapParser.prototype.ParseAdditionalStyles = function(xmlNode, styles) {
  var nodeHeaderStyle = new DvtCSSStyle(xmlNode.getAttr('nodeHeader'));
  styles[DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE] = nodeHeaderStyle;
  styles[DvtTreemapNode.HEADER_BACKGROUND_STYLE] = nodeHeaderStyle;

  var nodeHeaderHoverStyle = nodeHeaderStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('nodeHeader-hover')));
  styles[DvtTreemapNode.HEADER_TEXT_HOVER_DEFAULT_STYLE] = nodeHeaderHoverStyle;
  styles[DvtTreemapNode.HEADER_BACKGROUND_HOVER_STYLE] = nodeHeaderHoverStyle;

  var nodeHeaderSelectedStyle = nodeHeaderStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('nodeHeader-selected')));
  styles[DvtTreemapNode.HEADER_TEXT_SELECTED_DEFAULT_STYLE] = nodeHeaderSelectedStyle;
  styles[DvtTreemapNode.HEADER_BACKGROUND_SELECTED_STYLE] = nodeHeaderSelectedStyle;

  var nodeHeaderDrillStyle = nodeHeaderStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('nodeHeaderDrill')));
  styles[DvtTreemapNode.HEADER_DRILL_TEXT_DEFAULT_STYLE] = nodeHeaderDrillStyle;
  styles[DvtTreemapNode.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE] = nodeHeaderDrillStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('nodeHeaderDrill-hover')));
  styles[DvtTreemapNode.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE] = nodeHeaderDrillStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('nodeHeaderDrill-selected')));

  styles[DvtTreemapNode.HEADER_HOVER_OUTER_COLOR_STYLE] = nodeHeaderHoverStyle.getStyle(DvtCSSStyle.OUTER_COLOR);
  styles[DvtTreemapNode.HEADER_HOVER_INNER_COLOR_STYLE] = nodeHeaderHoverStyle.getStyle(DvtCSSStyle.INNER_COLOR);
  styles[DvtTreemapNode.HEADER_SELECTED_OUTER_COLOR_STYLE] = nodeHeaderSelectedStyle.getStyle(DvtCSSStyle.OUTER_COLOR);
  styles[DvtTreemapNode.HEADER_SELECTED_INNER_COLOR_STYLE] = nodeHeaderSelectedStyle.getStyle(DvtCSSStyle.INNER_COLOR);
};
/**
 * Class representing a treemap node.
 * @param {DvtTreemap} treemap The owning treemap component.
 * @param {object} props The properties for the node.
 * @class
 * @constructor
 * @extends {DvtBaseTreeNode}
 * @implements {DvtKeyboardNavigable}
 */
var DvtTreemapNode = function(treemap, props, templates) {
  this.Init(treemap, props, templates);

  this._labelDisplay = props.labelDisplay ? props.labelDisplay : DvtTreemapNode.DEFAULT_LABEL_DISPLAY;
  this._groupLabelDisplay = props.groupLabelDisplay ? props.groupLabelDisplay : DvtTreemapNode.DEFAULT_GROUP_LABEL_DISPLAY;
  this._labelHalign = props.labelHalign ? props.labelHalign : DvtTreemapNode.DEFAULT_NODE_H_ALIGN;
  this._labelValign = props.labelValign ? props.labelValign : DvtTreemapNode.DEFAULT_NODE_V_ALIGN;
  this._headerHalign = props.headerHalign ? props.headerHalign : DvtTreemapNode.DEFAULT_HEADER_H_ALIGN;
  this._headerLabelStyle = props.headerLabelStyle;
  this._headerUseNodeColor = props.headerUseNodeColor == 'on';

  this._isolate = props.isolate ? props.isolate : 'on';
  this._isIsolated = props.isIsolated;
};

// Make DvtTreemapNode a subclass of DvtBaseTreeNode
DvtObj.createSubclass(DvtTreemapNode, DvtBaseTreeNode, 'DvtTreemapNode');

// Text style options
DvtTreemapNode.TEXT_STYLE_HEADER = 'h';
DvtTreemapNode.TEXT_STYLE_NODE = 'n';
DvtTreemapNode.TEXT_STYLE_OFF = 'o';
DvtTreemapNode.DEFAULT_LABEL_DISPLAY = DvtTreemapNode.TEXT_STYLE_NODE;
DvtTreemapNode.DEFAULT_GROUP_LABEL_DISPLAY = DvtTreemapNode.TEXT_STYLE_HEADER;

DvtTreemapNode.LABEL_ALIGN_CENTER = 'c';
DvtTreemapNode.LABEL_ALIGN_START = 's';
DvtTreemapNode.LABEL_ALIGN_END = 'e';
DvtTreemapNode.LABEL_ALIGN_TOP = 't';
DvtTreemapNode.LABEL_ALIGN_BOTTOM = 'b';
DvtTreemapNode.DEFAULT_NODE_H_ALIGN = DvtTreemapNode.LABEL_ALIGN_CENTER;
DvtTreemapNode.DEFAULT_NODE_V_ALIGN = DvtTreemapNode.LABEL_ALIGN_CENTER;
DvtTreemapNode.DEFAULT_HEADER_H_ALIGN = DvtTreemapNode.LABEL_ALIGN_START;

// Constants for All Nodes
DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR = '#003D5B';
DvtTreemapNode._HEADER_DRILLABLE_TEXT_COLOR = '#003286';
DvtTreemapNode._HEADER_HOVER_TEXT_COLOR = '#000000';
DvtTreemapNode._HEADER_SELECTED_TEXT_COLOR = DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR;
DvtTreemapNode._HEADER_TEXT_STYLE = 'font-weight:bold;';

DvtTreemapNode.TEXT_BUFFER_HORIZ = 4; // Buffer for text alignment
DvtTreemapNode.TEXT_BUFFER_VERT = 2; // Buffer for text alignment
DvtTreemapNode.MIN_TEXT_BUFFER = 2; // Minimum buffer for text (on opposite side of alignment for example)

DvtTreemapNode._LINE_FUDGE_FACTOR = 1;

DvtTreemapNode._ANIMATION_ISOLATE_DURATION = 0.3; // in seconds

// Constants for Group Headers
DvtTreemapNode._MIN_TITLE_BAR_HEIGHT = 15;
DvtTreemapNode._MIN_TITLE_BAR_HEIGHT_ISOLATE = 15;
DvtTreemapNode.DEFAULT_HEADER_FILL_COLOR = '#FFFFFF';
DvtTreemapNode.DEFAULT_HEADER_BORDER_COLOR = '#E1E6EE';
DvtTreemapNode.DEFAULT_HEADER_BORDER_WIDTH = 1;
DvtTreemapNode.DEFAULT_HEADER_WITH_NODE_COLOR_ALPHA = 0.5;
DvtTreemapNode._ISOLATE_ICON_SIZE = 12;
DvtTreemapNode._ISOLATE_GAP_SIZE = 1;
DvtTreemapNode._ISOLATE_TOUCH_BUFFER = 2;

DvtTreemapNode.DEFAULT_HEADER_INLINE_STYLE = 'background-color:' + DvtTreemapNode.DEFAULT_HEADER_FILL_COLOR + ';' +
    'border-color:' + DvtTreemapNode.DEFAULT_HEADER_BORDER_COLOR + ';';

// Constants for Leaf Nodes
DvtTreemapNode.DEFAULT_NODE_TOP_BORDER_COLOR = '#FFFFFF';
DvtTreemapNode.DEFAULT_NODE_BOTTOM_BORDER_COLOR = '#000000';
DvtTreemapNode.DEFAULT_NODE_BORDER_WIDTH = 1;
DvtTreemapNode.DEFAULT_NODE_BORDER_OPACITY = 0.3;
DvtTreemapNode.DEFAULT_NODE_PATTERN_BORDER_OPACITY = 0.15;

DvtTreemapNode.MIN_SIZE_FOR_BORDER = 2 * DvtTreemapNode.DEFAULT_NODE_BORDER_WIDTH;

// Constants for Selection Effects
DvtTreemapNode.HEADER_HOVER_FILL_COLOR = '#C4DCFF';
DvtTreemapNode.DEFAULT_HEADER_HOVER_INLINE_STYLE = 'background-color:' + DvtTreemapNode.HEADER_HOVER_FILL_COLOR + ';';
DvtTreemapNode.HEADER_SELECTED_FILL_COLOR = '#9CACC9';
DvtTreemapNode.DEFAULT_HEADER_SELECTED_INLINE_STYLE = 'background-color:' + DvtTreemapNode.HEADER_SELECTED_FILL_COLOR + ';';

DvtTreemapNode.GROUP_HOVER_OUTER_COLOR = '#00AEFF';
DvtTreemapNode.GROUP_HOVER_OUTER_OPACITY = '1';
DvtTreemapNode.GROUP_HOVER_INNER_COLOR = '#C4DCFF';
DvtTreemapNode.GROUP_HOVER_INNER_OPACITY = 0.8;
DvtTreemapNode.GROUP_HOVER_INNER_WIDTH = 3;
DvtTreemapNode.GROUP_SELECTED_OUTER_COLOR = '#000000';
DvtTreemapNode.GROUP_SELECTED_INNER_COLOR = '#FFFFFF';
DvtTreemapNode.GROUP_SELECTED_OPACITY = 1;

DvtTreemapNode.NODE_HOVER_COLOR = '#FFFFFF';
DvtTreemapNode.NODE_HOVER_OPACITY = 1.0;
DvtTreemapNode.NODE_SELECTED_OUTER_COLOR = '#000000';
DvtTreemapNode.NODE_SELECTED_OUTER_OPACITY = 1.0;
DvtTreemapNode.NODE_SELECTED_INNER_COLOR = '#FFFFFF';
DvtTreemapNode.NODE_SELECTED_INNER_OPACITY = 1.0;
DvtTreemapNode.NODE_SELECTION_WIDTH = 2;

// Style keys
DvtTreemapNode.NODE_HOVER_COLOR_STYLE = 'NODE_HOVER_COLOR';
DvtTreemapNode.NODE_SELECTED_OUTER_COLOR_STYLE = 'NODE_SELECTED_OUTER_COLOR';
DvtTreemapNode.NODE_SELECTED_INNER_COLOR_STYLE = 'NODE_SELECTED_INNER_COLOR';

DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE = 'HEADER_TEXT_DEFAULT_STYLE';
DvtTreemapNode.HEADER_TEXT_HOVER_DEFAULT_STYLE = 'HEADER_TEXT_HOVER_DEFAULT_STYLE';
DvtTreemapNode.HEADER_TEXT_SELECTED_DEFAULT_STYLE = 'HEADER_TEXT_SELECTED_DEFAULT_STYLE';

DvtTreemapNode.HEADER_DRILL_TEXT_DEFAULT_STYLE = 'HEADER_DRILL_TEXT_DEFAULT_STYLE';
DvtTreemapNode.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = 'HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE';
DvtTreemapNode.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = 'HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE';

DvtTreemapNode.HEADER_BACKGROUND_STYLE = 'HEADER_BACKGROUND_STYLE';
DvtTreemapNode.HEADER_BACKGROUND_HOVER_STYLE = 'HEADER_BACKGROUND_HOVER_STYLE';
DvtTreemapNode.HEADER_BACKGROUND_SELECTED_STYLE = 'HEADER_BACKGROUND_SELECTED_STYLE';

DvtTreemapNode.HEADER_HOVER_OUTER_COLOR_STYLE = 'HEADER_HOVER_OUTER_COLOR_STYLE';
DvtTreemapNode.HEADER_HOVER_INNER_COLOR_STYLE = 'HEADER_HOVER_INNER_COLOR_STYLE';
DvtTreemapNode.HEADER_SELECTED_OUTER_COLOR_STYLE = 'HEADER_SELECTED_OUTER_COLOR_STYLE';
DvtTreemapNode.HEADER_SELECTED_INNER_COLOR_STYLE = 'HEADER_SELECTED_INNER_COLOR_STYLE';

DvtTreemapNode.LEAF_NODE_TOP_BORDER_COLOR_STYLE = 'LEAF_NODE_TOP_BORDER_COLOR_STYLE';
DvtTreemapNode.LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE = 'LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE';


//**************** Begin Overridden Functions ***************//


/**
 * @override
 */
DvtTreemapNode.prototype.render = function(container) {
  // If not positioned, don't render
  if (!this._hasLayout)
    return;

  // Create the shape object
  this._shape = this._createShapeNode();
  container.addChild(this._shape);

  var template;

  if (this.hasChildren()) {
    // Create the container for the children and render
    this._childNodeGroup = new DvtContainer(this.getView().getCtx());
    this._shape.addChild(this._childNodeGroup);
    this.renderChildren(this._childNodeGroup);
  }
  else {
    template = this.GetTemplate();
  }

  // if content facet exists, added the content to treeNode
  if (template) {
    var elAttrs = this.GetElAttributes();
    var afContext = this.GetAfContext();
    afContext.setELContext(elAttrs);

    //TODO fudge factor and tree node border?
    var bw = DvtTreemapNode.DEFAULT_NODE_BORDER_WIDTH + DvtTreemapNode._LINE_FUDGE_FACTOR;
    var marginx = DvtTreemapNode.TEXT_BUFFER_HORIZ;
    var marginy = DvtTreemapNode.TEXT_BUFFER_VERT;

    var aw = this._width - 2 * marginx - bw;
    var ah = this._height - 2 * marginy - bw;

    if (aw > 0 && ah > 0) {
      afContext.setAvailableWidth(aw);
      afContext.setAvailableHeight(ah);
      afContext.setFontSize(this.GetTextSize());
      //     this._contentRoot = DvtAfComponentFactory.parseAndStamp(afContext, template, this._shape);

      var afRoot = DvtAfComponentFactory.parseAndLayout(afContext, template, this._shape);
      this._contentRoot = afRoot;

      var transX;
      if (DvtAgent.isRightToLeft(container.getCtx())) {
        var dim = afRoot.getDimensions();
        transX = this._x + this._width - marginx - .5 * bw - dim.w;
      }
      else {
        transX = this._x + marginx + .5 * bw;
      }
      afRoot.setTranslate(transX, this._y + marginy + .5 * bw);
    }
  }
  else {
    // Create the text object
    this._text = this._createTextNode(this._shape);
    if (this._text != null) {
      // For pattern nodes, add a background to make the text readable
      if (this._pattern && this._textStyle != DvtTreemapNode.TEXT_STYLE_HEADER) {
        var dims = this._text.measureDimensions();
        this._textBackground = new DvtRect(this.getView().getCtx(), dims.x, dims.y, dims.w, dims.h);
        this._textBackground.setSolidFill('#FFFFFF');
        this._textBackground.setMouseEnabled(false);
        this._shape.addChild(this._textBackground);

        // Reorder the text in front of the background rect
        this._addChildText(this._text);
      }
    }
  }

  // WAI-ARIA
  this._shape.setAriaRole('img');
  this.UpdateAriaLabel();
};


/**
 * @override
 */
DvtTreemapNode.prototype.setSelected = function(selected) {
  // Delegate to super to store the state
  DvtTreemapNode.superclass.setSelected.call(this, selected);

  // If the node isn't displayed, return
  if (!this._shape)
    return;

  if (this.isSelected()) {
    // Calculate the bounds for the selection effect
    var x = this._x;
    var y = this._y + DvtTreemapNode._LINE_FUDGE_FACTOR;
    var w = this._width - DvtTreemapNode._LINE_FUDGE_FACTOR;
    var h = this._height - DvtTreemapNode._LINE_FUDGE_FACTOR;

    // Workaround for different pixel drawing behavior between browsers
    if (DvtAgent.isPlatformWebkit())
      y -= DvtTreemapNode._LINE_FUDGE_FACTOR;

    // Clear the selection inner and outer, which may be used by hover
    this._removeChildShape(this._selectionOuter);
    this._removeChildShape(this._selectionInner);
    this._selectionOuter = null;
    this._selectionInner = null;

    // Create the shapes, the fill will be set based on node type
    this._selectionOuter = new DvtRect(this.getView().getCtx(), x, y, w, h);
    this._selectionOuter.setMouseEnabled(false);
    this._selectionOuter.setFill(null);
    this._selectionOuter.setPixelHinting(true);
    this._shape.addChild(this._selectionOuter);

    this._selectionInner = new DvtRect(this.getView().getCtx(), x + 1, y + 1, w - 2, h - 2);
    this._selectionInner.setMouseEnabled(false);
    this._selectionInner.setFill(null);
    this._selectionInner.setPixelHinting(true);
    this._shape.addChild(this._selectionInner);

    if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER)
    {
      // Apply the selection effect to the header
      if (this.IsHover || this.isShowingKeyboardFocusEffect())
        this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_HOVER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_HOVER_STYLE);
      else {
        this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_SELECTED_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_SELECTED_STYLE);
        // Update the text color
        if (this._text) {
          this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_SELECTED_DEFAULT_STYLE, DvtTreemapNode._HEADER_SELECTED_TEXT_COLOR);
        }
      }
      // Apply the right LAF
      this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_SELECTED_OUTER_COLOR, DvtTreemapNode.HEADER_SELECTED_OUTER_COLOR_STYLE), DvtTreemapNode.GROUP_SELECTED_OPACITY);
      this._selectionInner.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_SELECTED_INNER_COLOR, DvtTreemapNode.HEADER_SELECTED_INNER_COLOR_STYLE), DvtTreemapNode.GROUP_SELECTED_OPACITY);
    }
    else {
      // Apply the right LAF
      this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.NODE_SELECTED_OUTER_COLOR, DvtTreemapNode.NODE_SELECTED_OUTER_COLOR_STYLE), DvtTreemapNode.NODE_SELECTED_OUTER_OPACITY);
      this._selectionInner.setSolidStroke(this.getResolvedColor(DvtTreemapNode.NODE_SELECTED_INNER_COLOR, DvtTreemapNode.NODE_SELECTED_INNER_COLOR_STYLE), DvtTreemapNode.NODE_SELECTED_INNER_OPACITY);

      // Also apply the shadow.  Use a clone since the object is static and may be used elsewhere in the page.
      // Bugs 15875065 and 18794536: Disable shadows in safari and ff due to rendering issues.
      if (!DvtAgent.isBrowserSafari() && !DvtAgent.isPlatformGecko()) {
        this._shape.addDrawEffect(DvtBaseTreeNode.__NODE_SELECTED_SHADOW);
      }

      // Move to the front of the z-order
      this.getView().__moveToSelectedLayer(this._shape);
    }
  }
  else { // !selected
    // Restore the regular effect to the shape
    this._removeChildShape(this._selectionInner);
    this._selectionInner = null;

    if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER)
    {
      // If this is a node with header, adjust it
      if (this.IsHover || this.isShowingKeyboardFocusEffect())
        this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_HOVER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_HOVER_STYLE);
      else {
        this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_STYLE);
        // Restore the text color
        if (this._text) {
          if (this.isDrillReplaceEnabled())
            this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE, DvtTreemapNode._HEADER_DRILLABLE_TEXT_COLOR);
          else
            this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE, DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR);
        }
      }
      if (this._selectionOuter) {
        if (this.IsHover || this.isShowingKeyboardFocusEffect())
          this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_HOVER_OUTER_COLOR, DvtTreemapNode.HEADER_HOVER_OUTER_COLOR_STYLE), DvtTreemapNode.GROUP_HOVER_OUTER_OPACITY);
        else {
          this._removeChildShape(this._selectionOuter);
          this._selectionOuter = null;
        }
      }
    }
    else { // leaf node
      // Remove the selection effects on this node
      this._shape.removeAllDrawEffects();
      if (this._selectionOuter) {
        this._removeChildShape(this._selectionOuter);
        this._selectionOuter = null;
      }

      // Restore the element back to its original location under its parent node
      var parentNode = this.GetParent();
      if (parentNode && parentNode._childNodeGroup) {
        // The exact z-order doesn't matter, since only the selected nodes have effects
        // that overflow into surrounding nodes.
        parentNode._childNodeGroup.addChild(this._shape);
      }
    }
  }
};


/**
 * @override
 */
DvtTreemapNode.prototype.showHoverEffect = function() {
  if (!this._shape || !this._hasLayout)
    return;

  // Fix for 16563380: Do not show the hover effect if the node is not within the isolated subtree.  When a child of an
  // isolated node is selected, it is move to the front of the z-order.  During this move, the node behind it will
  // recieve a mouseOver event, which we should not show a hover effect for.
  var isolatedNode = this._view.__getLastIsolatedNode();
  if (isolatedNode != null && isolatedNode != this && !this.isDescendantOf(isolatedNode))
    return;

  // Prepare the array of points and stroke for the hover effect
  var points = new Array();
  var stroke;
  var x1, y1, x2, y2;
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER)
  {
    // Apply the hover effect to the header
    this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_HOVER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_HOVER_STYLE);

    // Apply the outer hover effect border
    if (!this._selectionOuter) {
      // If the outer effect doesn't exist, create it
      var x = this._x;
      var y = this._y + DvtTreemapNode._LINE_FUDGE_FACTOR;
      var w = this._width - DvtTreemapNode._LINE_FUDGE_FACTOR;
      var h = this._height - DvtTreemapNode._LINE_FUDGE_FACTOR;

      // Workaround for different pixel drawing behavior between browsers
      if (DvtAgent.isPlatformWebkit())
        y -= DvtTreemapNode._LINE_FUDGE_FACTOR;

      this._selectionOuter = new DvtRect(this.getView().getCtx(), x, y, w, h);
      this._selectionOuter.setMouseEnabled(false);
      this._selectionOuter.setFill(null);
      this._selectionOuter.setPixelHinting(true);
      this._shape.addChild(this._selectionOuter);
    }

    // Apply the formatting based on selection
    if (this.isSelected())
      this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_SELECTED_OUTER_COLOR, DvtTreemapNode.HEADER_SELECTED_OUTER_COLOR_STYLE), DvtTreemapNode.GROUP_SELECTED_OUTER_OPACITY);
    else
      this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_HOVER_OUTER_COLOR, DvtTreemapNode.HEADER_HOVER_OUTER_COLOR_STYLE), DvtTreemapNode.GROUP_HOVER_OUTER_OPACITY);

    // Apply the hover effect to the group contents
    x1 = this._x + DvtTreemapNode.GROUP_HOVER_INNER_WIDTH / 2 + DvtTreemapNode._LINE_FUDGE_FACTOR;
    x2 = this._x + this._width - DvtTreemapNode.GROUP_HOVER_INNER_WIDTH / 2 - DvtTreemapNode._LINE_FUDGE_FACTOR;
    y1 = this._y + this._titleBarHeight;
    y2 = this._y + this._height - DvtTreemapNode.GROUP_HOVER_INNER_WIDTH / 2 - DvtTreemapNode._LINE_FUDGE_FACTOR;
    points.push(x2, y1, x2, y2, x1, y2, x1, y1);
    stroke = new DvtSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_HOVER_INNER_COLOR, DvtTreemapNode.HEADER_HOVER_INNER_COLOR_STYLE), DvtTreemapNode.GROUP_HOVER_INNER_OPACITY, DvtTreemapNode.GROUP_HOVER_INNER_WIDTH);

    // Update the text color
    if (this._text) {
      if (this.isDrillReplaceEnabled())
        this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE, DvtTreemapNode._HEADER_HOVER_TEXT_COLOR);
      else
        this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_HOVER_DEFAULT_STYLE, DvtTreemapNode._HEADER_HOVER_TEXT_COLOR);
    }
  }
  else
  {
    x1 = this._x + DvtTreemapNode.NODE_SELECTION_WIDTH / 2;
    x2 = this._x + this._width - DvtTreemapNode.NODE_SELECTION_WIDTH / 2;
    y1 = this._y + DvtTreemapNode.NODE_SELECTION_WIDTH / 2;
    y2 = this._y + this._height - DvtTreemapNode.NODE_SELECTION_WIDTH / 2;

    // Need to start at the right coord, this._x, because of the line end miter
    points.push(this._x, y1, x2, y1, x2, y2, x1, y2, x1, y1);
    stroke = new DvtSolidStroke(this.getResolvedColor(DvtTreemapNode.NODE_HOVER_COLOR, DvtTreemapNode.NODE_HOVER_COLOR_STYLE), DvtTreemapNode.NODE_HOVER_OPACITY, DvtTreemapNode.NODE_SELECTION_WIDTH);
  }

  // Apply and show the effect
  this.getView().__showHoverEffect(points, stroke, this);
};


/**
 * @override
 */
DvtTreemapNode.prototype.hideHoverEffect = function() {
  if (!this._shape || !this._hasLayout)
    return;

  // Remove the hover effect from the header
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER) {
    if (this.isSelected()) {
      this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_SELECTED_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_SELECTED_STYLE);
      this._selectionOuter.setSolidStroke(this.getResolvedColor(DvtTreemapNode.GROUP_SELECTED_OUTER_COLOR, DvtTreemapNode.HEADER_SELECTED_OUTER_COLOR_STYLE), DvtTreemapNode.GROUP_SELECTED_OUTER_OPACITY);
      // Update the text color
      if (this._text) {
        if (this.isDrillReplaceEnabled())
          this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE, DvtTreemapNode._HEADER_SELECTED_TEXT_COLOR);
        else
          this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_SELECTED_DEFAULT_STYLE, DvtTreemapNode._HEADER_SELECTED_TEXT_COLOR);
      }
    }
    else {
      this.ApplyHeaderStyle(this._shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_STYLE);
      if (this._selectionOuter) {
        this._shape.removeChild(this._selectionOuter);
        this._selectionOuter = null;
      }
      // Restore the text color
      if (this._text) {
        if (this.isDrillReplaceEnabled())
          this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_DRILL_TEXT_DEFAULT_STYLE, DvtTreemapNode._HEADER_DRILLABLE_TEXT_COLOR);
        else
          this.ApplyHeaderTextStyle(this._text, DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE, DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR);
      }
    }
  }

  this.getView().__hideHoverEffect();
};


/**
 * Returns true if isolate is enabled for this node.
 * @return {boolean}
 */
DvtTreemapNode.prototype.isIsolateEnabled = function() {
  return this._isolate == 'on' && this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER;
};


/**
 * @override
 */
DvtTreemapNode.prototype.getPopupBounds = function(behavior) {
  // If not specified or if no align provided, defer to default behavior
  if (!behavior || !behavior.getAlign())
    return DvtTreemapNode.superclass.getPopupBounds.call(this, behavior);

  // Otherwise align to the node
  return new DvtRectangle(this._x, this._y, this._width, this._height);
};


/**
 * @override
 */
DvtTreemapNode.prototype.getNextNavigable = function(event) 
{
  var keyCode;
  var parent;
  var lastChild;
  var next;

  if (event.type == DvtMouseEvent.CLICK)
  {
    return DvtTreemapNode.superclass.getNextNavigable.call(this, event);
  }

  keyCode = event.keyCode;

  if (keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey)
  {
    // multi-select node with current focus; so we navigate to ourself and then let the selection handler take
    // care of the selection
    return this;
  }

  // if alt held, or a bracket, move focus up or down one level in tree
  if ((keyCode == DvtKeyboardEvent.UP_ARROW && event.altKey) || keyCode == DvtKeyboardEvent.CLOSE_BRACKET)
  {
    // move up one level in the tree
    parent = this.GetParent();

    // we can move up one level if the parent is not the current root
    if (parent && (parent.getId() != this.getView().getRootNode().getId()))
    {
      next = parent;

      // update the grandparent's last visited child to be the current node's parent
      // updating the parent's (i.e. next node's) last visited child to point to the current node is
      // done at the end of this sequence of if, else-if statements
      parent.MarkAsLastVisitedChild();
    }
    else
    {
      next = this;
    }
  }
  else if ((keyCode == DvtKeyboardEvent.DOWN_ARROW && event.altKey) || keyCode == DvtKeyboardEvent.OPEN_BRACKET)
  {
    // move down one level in the tree
    lastChild = this.GetLastVisitedChild();
    if (lastChild)
    {
      next = lastChild;
    }
    else if (this.hasChildren())
    {
      next = this.getView().__getDefaultNavigable(this.getChildNodes());
    }
    else // leaf node
    {
      next = this;
    }
  }
  else
  {
    // otherwise, stay in the same level
    var root = this.getView().__getLastIsolatedNode();
    var depth = 0;

    if (root)
    {
      // We have isolated a treemap node, so make sure we only consider the nodes currently being displayed.
      // Isolated nodes are rendered on top of the other nodes in the treemap, so we have to exclude the
      // other non-visible nodes in the treemap when navigating through an isolated node.

      // Find the depth of the current node from the isolated node
      if (this == root)
      {
        depth = 0;
      }
      else
      {
        var parent = this.GetParent();
        depth = 1;
        while (root != parent)
        {
          depth++;
          parent = parent.GetParent();
        }
      }
    }
    else
    {
      root = this;
      while (root.GetParent())
      {
        root = root.GetParent();
      }

      depth = this.GetDepth();
    }

    var navigables = this.GetNodesAtDepth(root, depth);
    next = DvtKeyboardHandler.getNextNavigable(this, event, navigables);
  }

  next.MarkAsLastVisitedChild();

  return next;
};


/**
 * @override
 */
DvtTreemapNode.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace) 
{
  return new DvtRectangle(this._x, this._y, this._width, this._height);
};


/**
 * @override
 */
DvtTreemapNode.prototype.getTargetElem = function() 
{
  if (this._shape)
    return this._shape.getElem();
  return null;
};

//**************** End Overridden Functions *****************//


/**
 * Specifies the relative z-order for this node.
 * @param {number} zIndex The relative z-order for this node.
 */
DvtTreemapNode.prototype.setZIndex = function(zIndex) {
  this._zIndex = zIndex;
};


/**
 * Sets the position and bounds of this treemap node.
 * @param {number} x The x coordinate of the bounds.
 * @param {number} y The y coordinate of the bounds.
 * @param {number} width The width of the bounds.
 * @param {number} height The height of the bounds.
 * @return {DvtRectangle} the rectangle indicating the area to allocate to children, if different than inputs
 */
DvtTreemapNode.prototype.setLayoutParams = function(x, y, width, height) {
  // Nothing to render if either dimension is 0px
  if (width <= 0 || height <= 0)
    return;

  // Set a flag indicating layout has been performed
  this._hasLayout = true;

  // Cache the previous size and position for isolate support
  this._oldState = this.GetAnimationParams();

  // Store the given size and position
  this._x = x;
  this._y = y;
  this._width = width ? width : 0;
  this._height = height ? height : 0;

  // Determine the text style for this node
  if (this.hasChildren())
    this._textStyle = this._groupLabelDisplay;
  else
    this._textStyle = this._labelDisplay;

  // If text not specified, same as off
  if (!this._textStr)
    this._textStyle = DvtTreemapNode.TEXT_STYLE_OFF;

  // Return the subsection to allocate to children, ignored for leaf nodes
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER) {
    // Find the height of the header by creating and measuring the text node
    this._titleBarHeight = DvtTreemapNode._MIN_TITLE_BAR_HEIGHT;
    var text = new DvtOutputText(this.getView().getCtx(), this._textStr);
    text.setFontSize(this.GetTextSize());
    this.ApplyHeaderTextStyle(text, DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE, DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR);
    var headerLabelHeight = DvtTextUtils.guessTextDimensions(text).h;
    this._titleBarHeight = Math.max(this._titleBarHeight, headerLabelHeight);

    // Additional space for isolate/restore button
    if (this.isIsolateEnabled())
      this._titleBarHeight = Math.max(this._titleBarHeight, DvtTreemapNode._MIN_TITLE_BAR_HEIGHT_ISOLATE);

    // Headers consume some of the space
    var xx = this._x;
    var yy = this._y + this._titleBarHeight;
    var ww = this._width;
    var hh = this._height - this._titleBarHeight;

    // If there is enough space, then return the rectangle
    if (ww >= 0 && hh >= 0)
      return new DvtRectangle(xx, yy, ww, hh);
    else
      this._textStyle = null; // Not enough space, don't show header
  }

  return new DvtRectangle(this._x, this._y, this._width, this._height);
};


/**
 * @override
 */
DvtTreemapNode.prototype.getNodeUnderPoint = function(x, y) {
  // Check if the node contains the coords
  if (this.contains(x, y) || !this._hasLayout) {
    var childNodes = this.getChildNodes();
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].contains(x, y))
        return childNodes[i].getNodeUnderPoint(x, y);
    }

    // No child found, return the current node
    if (this._hasLayout)
      return this;
  }

  // No node found, return null
  return null;
};


/**
 * @override
 */
DvtTreemapNode.prototype.contains = function(x, y) {
  return x >= this._x && x <= this._x + this._width &&
         y >= this._y && y <= this._y + this._height;
};


/**
 * @override
 */
DvtTreemapNode.prototype.GetAnimationParams = function() {
  var r = DvtColorUtils.getRed(this._color);
  var g = DvtColorUtils.getGreen(this._color);
  var b = DvtColorUtils.getBlue(this._color);

  // Force bevel removal during animation for leaf nodes by passing an additional random number to force animation.
  return [this._x, this._y, this._width, this._height, r, g, b, this.hasChildren() ? 0 : Math.random()];
};


/**
 * @override
 */
DvtTreemapNode.prototype.SetAnimationParams = function(params) {
  // Update the layout params
  this.setLayoutParams(params[0], params[1], params[2], params[3]);

  // Update the color.  Round them since color parts must be ints
  var r = Math.round(params[4]);
  var g = Math.round(params[5]);
  var b = Math.round(params[6]);
  this._color = DvtColorUtils.makeRGB(r, g, b);

  // Update the shapes
  this._updateShapes();
};


/**
 * After a relayout due to isolate or restore, returns the animation to render this node and
 * all of its descendants to the new state.
 * @return {array}
 */
DvtTreemapNode.prototype.getIsolateAnimation = function() {
  var playables = [this._getIsolateAnimation()];
  var descendants = this.getDescendantNodes();
  for (var i = 0; i < descendants.length; i++) {
    playables.push(descendants[i]._getIsolateAnimation());
  }

  return playables;
};


/**
 * Returns the isolate or restore animation for this node.
 * @return {DvtPlayable}
 */
DvtTreemapNode.prototype._getIsolateAnimation = function() {
  if (this._oldState) {
    // Create the playable to animate to the new layout state
    var playable = new DvtCustomAnimation(this.getView().getCtx(), this, DvtTreemapNode._ANIMATION_ISOLATE_DURATION);
    playable.getAnimator().addProp(DvtAnimator.TYPE_NUMBER_ARRAY, this, this.GetAnimationParams, this.SetAnimationParams, this.GetAnimationParams());

    // Initialize the old state
    this.SetAnimationParams(this._oldState);

    return playable;
  }
  else
    return null;
};


/**
 * @override
 */
DvtTreemapNode.prototype.animateUpdate = function(handler, oldNode) {
  if (this.GetDepth() == 0 || (oldNode._hasLayout && oldNode._width > 0 && oldNode._height > 0)) {
    // Old node existed and was visible, show the update animation
    // this.GetDepth() check since root will not have a size
    return DvtTreemapNode.superclass.animateUpdate.call(this, handler, oldNode);
  }
  else {
    // Old node did not exist or was not visible, treat as insert
    return this.animateInsert(handler);
  }
};


/**
 * Creates and return the shape object for this node.
 * @return {DvtShape} The shape object for this node
 * @private
 */
DvtTreemapNode.prototype._createShapeNode = function() {
  var context = this.getView().getCtx();

  // Create the basic shape with geometry
  var shape;
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER) {
    // Create the header, which is made of an outer shape for the border and an inner shape for the fill
    shape = new DvtRect(context, this._x, this._y, this._width, this._height);
    this._innerShape = new DvtRect(context, this._x + 1, this._y + 1, this._width - 2, this._height - 2);

    // Apply the style attributes to the header
    this.ApplyHeaderStyle(shape, this._innerShape, DvtTreemapNode.DEFAULT_HEADER_INLINE_STYLE, DvtTreemapNode.HEADER_BACKGROUND_STYLE);
    this._innerShape.setMouseEnabled(false);
    shape.addChild(this._innerShape);

    // Isolate Support
    if (this._isIsolated)
      this._isolateButton = this._createIsolateRestoreButton(shape);
  }
  else {
    // Non-header node.  3 cases:
    // All bevels: {shape: topLeftBevel, secondShape: bottomRightBevel, thirdShape: fill}
    // Bottom right bevel only: {shape: bottomRightBevel, secondShape: fill}
    // No bevels: {firstShape: fill}
    var fill = this.GetFill();

    // Create the outermost shape
    shape = new DvtRect(context, this._x, this._y, this._width, this._height);

    // Create the bevel effect for the node: Disabled on phones/tablets for 1000+ nodes for performance reasons.
    var bVisualEffects = this.getView().__getNodeCount() < 1000 || !DvtAgent.isTouchDevice();
    if (bVisualEffects && this._width >= DvtTreemapNode.MIN_SIZE_FOR_BORDER && this._height >= DvtTreemapNode.MIN_SIZE_FOR_BORDER) {
      // Figure out the stroke colors
      var topLeft = new DvtSolidStroke(this.getResolvedColor(DvtTreemapNode.DEFAULT_NODE_TOP_BORDER_COLOR, DvtTreemapNode.LEAF_NODE_TOP_BORDER_COLOR_STYLE), DvtTreemapNode.DEFAULT_NODE_BORDER_OPACITY);
      var bottomRight = new DvtSolidStroke(this.getResolvedColor(DvtTreemapNode.DEFAULT_NODE_BOTTOM_BORDER_COLOR, DvtTreemapNode.LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE), DvtTreemapNode.DEFAULT_NODE_BORDER_OPACITY);
      if (this._pattern) {
        topLeft = new DvtSolidStroke(this._color, DvtTreemapNode.DEFAULT_NODE_PATTERN_BORDER_OPACITY);
        bottomRight = topLeft;
      }

      // Retrieve the bevel colors and blend with the fill color to get the desired effect
      var fillColor = this.getColor();
      var topLeftColor = this.getResolvedColor(DvtTreemapNode.DEFAULT_NODE_TOP_BORDER_COLOR, DvtTreemapNode.LEAF_NODE_TOP_BORDER_COLOR_STYLE);
      topLeftColor = DvtColorUtils.interpolateColor(topLeftColor, fillColor, 1 - DvtTreemapNode.DEFAULT_NODE_BORDER_OPACITY);
      var bottomRightColor = this.getResolvedColor(DvtTreemapNode.DEFAULT_NODE_BOTTOM_BORDER_COLOR, DvtTreemapNode.LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE);
      bottomRightColor = DvtColorUtils.interpolateColor(bottomRightColor, fillColor, 1 - DvtTreemapNode.DEFAULT_NODE_BORDER_OPACITY);

      // Creation of bevels varies based on the minimum of the width and height of the node:
      // 0: Won't reach this code
      // 1: No bevels
      // 2: Bottom right bevel only
      // 4+: All bevels
      var minDim = Math.min(this._width, this._height);

      // Both bevels
      if (minDim >= 4) {
        // shape is the bottomRight bevel in this case
        shape.setSolidFill(bottomRightColor);

        // topLeftShape hides all but the bottomRight bevel
        this._topLeftShape = new DvtRect(context, this._x, this._y, this._width - 1, this._height - 1);
        this._topLeftShape.setSolidFill(topLeftColor);
        this._topLeftShape.setMouseEnabled(false);
        shape.addChild(this._topLeftShape);

        // fillShape exposes both bevels
        this._fillShape = new DvtRect(context, this._x + 1, this._y + 1, this._width - 2, this._height - 2);
        this._fillShape.setFill(fill);
        this._fillShape.setMouseEnabled(false);
        shape.addChild(this._fillShape);
      }
      else if (minDim >= 2) { // Bottom Right Bevel
        // shape is the bottomRight bevel in this case
        shape.setSolidFill(bottomRightColor);

        // fillShape exposes the bevel
        this._fillShape = new DvtRect(context, this._x, this._y, this._width - 1, this._height - 1);
        this._fillShape.setFill(fill);
        this._fillShape.setMouseEnabled(false);
        shape.addChild(this._fillShape);
      }
      else // No bevels
        shape.setFill(fill);
    }
    else // No bevels
      shape.setFill(fill);
  }

  // Add pointers between this node and the shape
  this.getView().__getEventManager().associate(shape, this);

  // Allows selection cursor to be shown over nodes if nodeSelection is enabled and node is selectable
  // Unselectable nodes explicitly set as default so correct pointer appears if un-selectable node is drawn inside selectable node
  if (this.isSelectable())
    shape.setSelectable(true);
  else
    shape.setCursor('default');

  shape.zIndex = this._zIndex;
  return shape;
};


/**
 * Creates and positions the isolate or restore button for this node.
 * @param {DvtContainer} container The container for the button.
 * @return {DvtButton}
 * @private
 */
DvtTreemapNode.prototype._createIsolateRestoreButton = function(container) {
  if (this._textStyle != DvtTreemapNode.TEXT_STYLE_HEADER || !this.isIsolateEnabled())
    return null;

  var button = null;
  var x1 = this._x;
  var x2 = this._x + this._width - DvtTreemapNode._LINE_FUDGE_FACTOR;
  var y1 = this._y + DvtTreemapNode._LINE_FUDGE_FACTOR;
  var y2 = this._y + this._titleBarHeight;
  var availIconWidth = x2 - x1 - DvtTreemapNode._ISOLATE_GAP_SIZE * 2;
  if (availIconWidth > DvtTreemapNode._ISOLATE_ICON_SIZE) {
    // Create the button and add to the container
    button = this._isIsolated ? this._getRestoreButton() : this._getIsolateButton();
    var transX;
    if (DvtAgent.isRightToLeft(container.getCtx()))
      transX = x1 + DvtTreemapNode._ISOLATE_GAP_SIZE;
    else
      transX = x2 - DvtTreemapNode._ISOLATE_ICON_SIZE - DvtTreemapNode._ISOLATE_GAP_SIZE;
    button.setTranslate(transX, (y2 + y1 - DvtTreemapNode._ISOLATE_ICON_SIZE) / 2);
    container.addChild(button);

    // Add a buffer to make the objects easier to interact with on touch devices
    if (DvtAgent.isTouchDevice()) {
      var rect = new DvtRect(container.getCtx(),
                             -DvtTreemapNode._ISOLATE_TOUCH_BUFFER, -DvtTreemapNode._ISOLATE_TOUCH_BUFFER,
                             DvtTreemapNode._ISOLATE_ICON_SIZE + 2 * DvtTreemapNode._ISOLATE_TOUCH_BUFFER,
                             DvtTreemapNode._ISOLATE_ICON_SIZE + 2 * DvtTreemapNode._ISOLATE_TOUCH_BUFFER);
      rect.setInvisibleFill();
      button.addChild(rect);
    }

    // For Alta, associate the node so the hover effect doesn't get removed.
    if (this.getView().__getResources()['alta'] == 'true')
      this.getView().__getEventManager().associate(button, this);
    else { // Associate a blank peer so the button is not treated as part of the node
      var tooltip = this._isIsolated ? this.getView().__getResources()['restore'] : this.getView().__getResources()['isolate'];
      this.getView().__getEventManager().associate(button, new DvtBaseTreePeer(this, this.getId(), tooltip));
    }
  }

  return button;
};


/**
 * Removes the isolate/restore button, if displayed.
 * @private
 */
DvtTreemapNode.prototype._removeIsolateRestoreButton = function() {
  if (this._isolateButton) {
    this._removeChildShape(this._isolateButton);
    this._isolateButton = null;
  }
};


/**
 * Creates and return the text object for this node. Adds the text to the container if it's not empty.
 * @param {DvtContainer} container The container to render in.
 * @return {DvtText} The text object for this node.
 * @private
 */
DvtTreemapNode.prototype._createTextNode = function(container) {
  var isRTL = DvtAgent.isRightToLeft(container.getCtx());

  // If no text or no container to place the text, return
  if (!this._textStr || !container || !this._textStyle || this._textStyle == DvtTreemapNode.TEXT_STYLE_OFF)
    return null;

  // Approximate whether the text could fit vertically
  var availHeight = this._height;
  if (this.GetTextSize() > availHeight)
    return null;

  // Figure out the horizontal alignment
  var hAlign = (this._textStyle == DvtTreemapNode.TEXT_STYLE_NODE) ? this._labelHalign : this._headerHalign;
  if (isRTL) {
    if (hAlign == DvtTreemapNode.LABEL_ALIGN_START)
      hAlign = DvtTreemapNode.LABEL_ALIGN_END;
    else if (hAlign == DvtTreemapNode.LABEL_ALIGN_END)
      hAlign = DvtTreemapNode.LABEL_ALIGN_START;
  }

  // Approximate whether the text could fit horizontally (conservative)
  var availWidth = this._width - (DvtTreemapNode.TEXT_BUFFER_HORIZ + DvtTreemapNode.MIN_TEXT_BUFFER);
  var isolateWidth = 0;
  if (this.isIsolateEnabled()) {
    isolateWidth = DvtTreemapNode._ISOLATE_ICON_SIZE + DvtTreemapNode._ISOLATE_GAP_SIZE;
    if (hAlign == DvtTreemapNode.LABEL_ALIGN_CENTER)
      availWidth -= 2 * isolateWidth; // center aligned text should always be centered, meaning space is reserved on either size for the button
    else
      availWidth -= isolateWidth;
  }

  if (availWidth <= 0)
    return null;

  // Create the text object
  var text = new DvtOutputText(this.getView().getCtx(), this._textStr);
  text.setFontSize(this.GetTextSize());

  // Calculate the horizontal text position
  if (hAlign == DvtTreemapNode.LABEL_ALIGN_START) {
    if (isRTL)
      text.setX(this._x + DvtTreemapNode.TEXT_BUFFER_HORIZ + isolateWidth);
    else
      text.setX(this._x + DvtTreemapNode.TEXT_BUFFER_HORIZ);
    text.alignLeft();
  }
  else if (hAlign == DvtTreemapNode.LABEL_ALIGN_CENTER) {
    text.setX(this._x + (this._width / 2));
    text.alignCenter();
  }
  else if (hAlign == DvtTreemapNode.LABEL_ALIGN_END) {
    if (isRTL)
      text.setX(this._x + this._width - DvtTreemapNode.TEXT_BUFFER_HORIZ);
    else
      text.setX(this._x + this._width - DvtTreemapNode.TEXT_BUFFER_HORIZ - isolateWidth);
    text.alignRight();
  }

  // Calculate the vertical text position and style
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_NODE) {
    // Set the correct available height
    availHeight = this._height - DvtTreemapNode.TEXT_BUFFER_VERT * 2;

    // Vertical Alignment
    if (this._labelValign == DvtTreemapNode.LABEL_ALIGN_TOP) {
      text.setY(this._y + DvtTreemapNode.TEXT_BUFFER_VERT);
      text.alignTop();
    }
    else if (this._labelValign == DvtTreemapNode.LABEL_ALIGN_CENTER) {
      text.setY(this._y + (this._height / 2));
      text.alignMiddle();
    }
    else if (this._labelValign == DvtTreemapNode.LABEL_ALIGN_BOTTOM) {
      text.setY(this._y + this._height - DvtTreemapNode.TEXT_BUFFER_VERT);
      text.alignBottom();
    }

    // Update it with the correct style
    this.ApplyLabelTextStyle(text);
  }
  else if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER) {
    // Note: No need to worry about available height here.  Headers are sized based on the text size.
    var chromeAdjustment = DvtAgent.isPlatformWebkit() ? DvtTreemapNode._LINE_FUDGE_FACTOR : 0;
    text.setY(this._y + DvtTreemapNode.DEFAULT_HEADER_BORDER_WIDTH + this._titleBarHeight / 2 + chromeAdjustment);
    text.alignMiddle();
    this.ApplyHeaderTextStyle(text, DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE, DvtTreemapNode._DEFAULT_HEADER_TEXT_COLOR);
  }

  if (text != null) {
    if (this._textStyle == DvtTreemapNode.TEXT_STYLE_HEADER && this.isDrillReplaceEnabled()) {
      // Drillable text link
      this.ApplyHeaderTextStyle(text, DvtTreemapNode.HEADER_DRILL_TEXT_DEFAULT_STYLE, DvtTreemapNode._HEADER_DRILLABLE_TEXT_COLOR);
      text.setCursor('pointer');

      // Associate with a DvtBaseTreePeer to handle drilling
      var peer = new DvtBaseTreePeer(this, this.getId(), null, this.getDatatip(), this.getDatatipColor());
      peer.setDrillable(true);
      this.getView().__getEventManager().associate(text, peer);
    }
    else // Parent node will handle all events
      text.setMouseEnabled(false);

    // Truncate the text if necessary
    return DvtTextUtils.fitText(text, availWidth, availHeight, container) ? text : null;
  }
};


/**
 * Applies skin style information on a header node.
 * @param {DvtShape} shape The outer shape for the header, used for the border
 * @param {DvtShape} innerShape The inner shape for the header, use for the fill
 * @param {string} defaultStyle The CSS style string defining the default style.
 * @param {string} styleDef The string constant indicating which style to retrieve.
 */
DvtTreemapNode.prototype.ApplyHeaderStyle = function(shape, innerShape, defaultStyle, styleDef) {
  // TODO: The treemap skinning mechanism is really confusing.  Need to simplify with the JSON project.
  var style = new DvtCSSStyle(defaultStyle);
  style.merge(this._view.__getStyles()[styleDef]);
  var backgroundColor = style.getStyle(DvtCSSStyle.BACKGROUND_COLOR);
  var borderColor = style.getStyle(DvtCSSStyle.BORDER_COLOR);

  // Fill the header with a color
  if (this._headerUseNodeColor && styleDef == DvtTreemapNode.HEADER_BACKGROUND_STYLE) {
    var fillColor = this.getColor();
    innerShape.setSolidFill(fillColor);
    borderColor = DvtColorUtils.interpolateColor(borderColor, fillColor, 1 - DvtTreemapNode.DEFAULT_HEADER_WITH_NODE_COLOR_ALPHA);
    shape.setSolidFill(borderColor);
  }
  else {
    shape.setSolidFill(borderColor);
    innerShape.setSolidFill(backgroundColor);
  }
};

DvtTreemapNode.prototype.ApplyHeaderTextStyle = function(text, styleDef, defaultFillColor) {
  // Set the text color.  The default color is overridden if headers display node colors.
  var bHeaderNodeColor = (this._headerUseNodeColor && styleDef == DvtTreemapNode.HEADER_TEXT_DEFAULT_STYLE);
  if (bHeaderNodeColor)
    text.setSolidFill(DvtBaseTreeNode.GetNodeTextColor(this));
  else
    text.setSolidFill(defaultFillColor);

  var textStyle = new Array();
  if (this.GetDepth() <= 1 && this.hasChildren()) {
    textStyle.push(new DvtCSSStyle(DvtTreemapNode._HEADER_TEXT_STYLE));
  }

  textStyle.push(this._view.__getStyles()[styleDef]);

  // Update it with the correct style
  if (this._headerLabelStyle)
    textStyle.push(this._headerLabelStyle);

  text.setCSSStyle(DvtCSSStyle.mergeStyles(textStyle));

  // In high contrast mode with headers displaying node colors, override the app settings and use the default colors
  if (DvtAgent.isHighContrast() && bHeaderNodeColor)
    text.setSolidFill(DvtBaseTreeNode.GetNodeTextColor(this));
};


/**
 * Handles a mouse out event on the node.
 */
DvtTreemapNode.prototype.handleMouseOver = function() {
  // Isolate: draw button if needed
  if (!this._isolateButton)
    this._isolateButton = this._createIsolateRestoreButton(this._shape);

  DvtTreemapNode.superclass.handleMouseOver.call(this);
};


/**
 * Handles a mouse out event on the node.
 */
DvtTreemapNode.prototype.handleMouseOut = function() {
  // Isolate: hide button if displayed
  if (this._isIsolated !== true)
    this._removeIsolateRestoreButton();

  DvtTreemapNode.superclass.handleMouseOut.call(this);
};


/**
 * Updates the shapes for the current layout params.
 * @private
 */
DvtTreemapNode.prototype._updateShapes = function() {
  if (!this._shape)
    return;

  // Update the shape and color
  this._shape.setRect(this._x, this._y, this._width, this._height);
  if (this._innerShape)
    this._innerShape.setRect(this._x + 1, this._y + 1, this._width - 2, this._height - 2);

  // Also update the color
  if (this._textStyle != DvtTreemapNode.TEXT_STYLE_HEADER || this._headerUseNodeColor) {
    this._shape.setFill(this.GetFill());
  }

  if (this.isSelected())
    this.setSelected(false);

  // Clear all border effects.  They will be restored in the animationEnd listener.
  this._removeChildShape(this._fillShape);
  this._removeChildShape(this._topLeftShape);
  this._fillShape = null;
  this._topLeftShape = null;

  // Remove isolate/restore if displayed
  this._removeIsolateRestoreButton();

  // Handle the node content
  var template = this.GetTemplate();
  if (template) {
    // Hide the content for now, it will be added back after the animation completes.
    this._removeChildShape(this._contentRoot);
    this._contentRoot = null;
  }
  else { // No template, update the text
    // Remove the text background
    this._removeChildShape(this._textBackground);
    this._textBackground = null;

    // Update the text.  This implementation simply removes and repaints it.
    if (this._text)
      this._text.getParent().removeChild(this._text); // necessary because the parent may not be the shape

    this._text = this._createTextNode(this._shape);
  }
};


/**
 * @override
 */
DvtTreemapNode.prototype.getDropSiteFeedback = function() {
  if (this._shape) {
    return new DvtRect(this.getView().getCtx(),
                       this._shape.getX(), this._shape.getY(),
                       this._shape.getWidth(), this._shape.getHeight());
  }
  else
    return null;
};


/**
 * Adds the specified DvtText as a child.
 * @param {DvtText} text
 */
DvtTreemapNode.prototype._addChildText = function(text) {
  if (this._textStyle == DvtTreemapNode.TEXT_STYLE_NODE && this.hasChildren())
    this.getView().__getGroupTextLayer().addChild(text);
  else
    this._shape.addChild(text);
};


/**
 * Helper function to remove child shapes from this node.
 * @param {DvtShape} childShape The child shape to remove.
 * @private
 */
DvtTreemapNode.prototype._removeChildShape = function(childShape) {
  if (childShape)
    this._shape.removeChild(childShape);
};


/**
 * Returns the isolate button for use on the node header.
 * @return {DvtDisplayable}
 * @private
 */
DvtTreemapNode.prototype._getIsolateButton = function() {
  var context = this.getView().getCtx();

  // Get the resources from the view
  var resources = this.getView().__getResources();

  // Initialize the button states
  var upState = new DvtImage(context, resources['maximizeUp'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);
  var overState = new DvtImage(context, resources['maximizeOver'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);
  var downState = new DvtImage(context, resources['maximizeDown'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);

  // Have to add a transparent fill so that IE9 can capture the mouse events (Bug 14653059)
  upState.setInvisibleFill();
  overState.setInvisibleFill();
  downState.setInvisibleFill();

  // Create button and hook up click listener
  var button = new DvtButton(context, upState, overState, downState);
  button.addEvtListener(DvtMouseEvent.CLICK, this.__isolateNode, false, this);
  return button;
};


/**
 * Returns the restore button for use on the node header.
 * @return {DvtDisplayable}
 * @private
 */
DvtTreemapNode.prototype._getRestoreButton = function() {
  var context = this.getView().getCtx();

  // Get the resources from the view
  var resources = this.getView().__getResources();

  // Initialize the button states
  var upState = new DvtImage(context, resources['restoreUp'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);
  var overState = new DvtImage(context, resources['restoreOver'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);
  var downState = new DvtImage(context, resources['restoreDown'], 0, 0, DvtTreemapNode._ISOLATE_ICON_SIZE, DvtTreemapNode._ISOLATE_ICON_SIZE);

  // Have to add a transparent fill so that IE9 can capture the mouse events (Bug 14653059)
  upState.setInvisibleFill();
  overState.setInvisibleFill();
  downState.setInvisibleFill();

  // Create button and hook up click listener
  var button = new DvtButton(context, upState, overState, downState);
  button.addEvtListener(DvtMouseEvent.CLICK, this.__restoreNode, false, this);
  return button;
};


/**
 * Returns true if this node is isolated
 * @return {Boolean} true if this node is isolated, false otherwise
 */
DvtTreemapNode.prototype.__isIsolated = function()
{
  return this._isIsolated;
};


/**
 * Isolates this node and maximizes it.
 */
DvtTreemapNode.prototype.__isolateNode = function() {
  this._isIsolated = true;
  this.hideHoverEffect();
  this.getView().__isolate(this);

  // Remove the isolate button, to be redrawn after isolate is complete
  this._removeIsolateRestoreButton();

  this.UpdateAriaLabel();
};


/**
 * Restores this node to its normal size.
 */
DvtTreemapNode.prototype.__restoreNode = function() {
  this._isIsolated = false;
  this.hideHoverEffect();
  this.getView().__restore();

  // Remove the restore button, to be redrawn after isolate is complete
  this._removeIsolateRestoreButton();

  this.UpdateAriaLabel();
};


/**
 * @override
 */
DvtTreemapNode.prototype.getDatatip = function(target, x, y) {
  if (target && target instanceof DvtButton)
    return null; // tooltip is displayed for isolate button
  else
    return DvtTreemapNode.superclass.getDatatip.call(this, target, x, y);
};


/**
 * @override
 */
DvtTreemapNode.prototype.getDatatipColor = function(target) {
  if (target && target instanceof DvtButton)
    return null; // tooltip is displayed for isolate button
  else
    return DvtTreemapNode.superclass.getDatatipColor.call(this, target);
};


/**
 * @override
 */
DvtTreemapNode.prototype.getTooltip = function(target) {
  if (target && target instanceof DvtButton)
    return this._isIsolated ? this.getView().__getResources()['restore'] : this.getView().__getResources()['isolate'];
  else
    return null;
};

/**
 * @override
 */
DvtTreemapNode.prototype.getAriaLabel = function() {
  var states = [];
  if (this.isSelectable())
    states.push(this.Bundle.getTranslatedString(this.isSelected() ? 'STATE_SELECTED' : 'STATE_UNSELECTED'));
  if (this._isIsolated)
    states.push(this.Bundle.getTranslatedString('STATE_ISOLATED'));
  return DvtDisplayable.generateAriaLabel(this._datatip, states, this.Bundle);
};


/**
 * @override
 */
DvtTreemapNode.prototype.UpdateAriaLabel = function() {
  if (!DvtAgent.deferAriaCreation() && this._shape) // need the null check bc it may fail in unit test (TreemapSelectionTest)
    this._shape.setAriaProperty('label', this.getAriaLabel());
};
/**
 * Base layout class for treemaps.
 * @class
 * @constructor
 */
var DvtBaseTreemapLayout = function() {
  this.Init();
};

DvtObj.createSubclass(DvtBaseTreemapLayout, DvtObj, 'DvtBaseTreemapLayout');

DvtBaseTreemapLayout._GROUP_GAP = 3;


/**
 * @protected
 */
DvtBaseTreemapLayout.prototype.Init = function() {
  this._zIndex = 0; // counter to help keep track of the zIndex of the nodes
};


/**
 * Performs layout for the tree.  The specific algorithm varies by subclass.
 * @param {DvtTreemap} view The treemap component.
 * @param {DvtBaseTreeNode} root The root of the tree.
 * @param {number} x The x coordinate for this node.
 * @param {number} y The y coordinate for this node.
 * @param {number} width The width of this node.
 * @param {number} height The height of this node.
 * @param {boolean} bShowRoot True if the root node should be displayed.
 */
DvtBaseTreemapLayout.prototype.layout = function(view, root, x, y, width, height, bShowRoot) 
{
  // subclasses should override
};


/**
 * Specifies whether this layout will sort the nodes.  This will be respected only for layouts where
 * ordering is maintained.
 * @param {string} sorting "on" if sorting by size is enabled.
 */
DvtBaseTreemapLayout.prototype.setSorting = function(sorting) {
  this.Sorting = sorting;
};


/**
 * Applies the specified bounds to the node and returns the space available to the node's children.
 * @param {DvtBaseTreeNode} root The root of the tree.
 * @param {number} x The x coordinate for this node.
 * @param {number} y The y coordinate for this node.
 * @param {number} width The width of this node.
 * @param {number} height The height of this node.
 * @param {boolean} isRoot true if this node is the root of the tree.
 * @return {DvtRectangle} The rectangle indicating the area to allocate to the children of this node.
 */
DvtBaseTreemapLayout.prototype.setNodeBounds = function(node, x, y, width, height, isRoot) 
{
  // Set the relative zIndex of the node and increment
  node.setZIndex(this._zIndex);
  this._zIndex++;

  // The root node is not rendered, unless it's a singleton
  if (!isRoot || !node.hasChildren()) {
    // Support for gaps between nodes
    var gap = this.getGapSize(node.getView(), node.GetDepth());

    // Round the values to pixel locations and add gaps
    var xx = Math.round(x + gap);
    var yy = Math.round(y + gap);
    var ww = Math.round(x + width - gap) - xx;
    var hh = Math.round(y + height - gap) - yy;

    // Set the rectangle on the node and get the bounds available to its children
    var availBounds = node.setLayoutParams(xx, yy, ww, hh);
    if (availBounds)
      return availBounds;
  }

  // If no explicit bounds returned, use the entire space
  return new DvtRectangle(x, y, width, height);
};


/**
 * Returns the gap size for a node at the specified depth.
 * @param {DvtTreemap} view
 * @param {number} depth The depth of the node for which the gap should be replied.
 * @return {number} The size of the gaps around this node.
 */
DvtBaseTreemapLayout.prototype.getGapSize = function(view, depth) {
  var groupGaps = view.__getGroupGaps();
  if (groupGaps == DvtTreemapParser.GROUP_GAPS_OUTER)
    return (depth == 1 && view.__getMaxDepth() >= 2) ? DvtBaseTreemapLayout._GROUP_GAP : 0;
  else if (groupGaps == DvtTreemapParser.GROUP_GAPS_ALL)
    return (depth < view.__getMaxDepth()) ? DvtBaseTreemapLayout._GROUP_GAP : 0;
  else // none
    return 0;
};
/**
 * Layout class for treemaps.  This layout optimizes the aspect ratios, making the nodes as square as
 * possible for improved comparisons between nodes.  This layout does not maintain the ordering of
 * the nodes.
 * @class
 * @constructor
 * @extends {DvtBaseTreemapLayout}
 */
var DvtSquarifyingLayout = function() {
  this.Init();
};

DvtObj.createSubclass(DvtSquarifyingLayout, DvtBaseTreemapLayout, 'DvtSquarifyingLayout');


/**
 * @override
 */
DvtSquarifyingLayout.prototype.layout = function(view, root, x, y, width, height, bShowRoot) {
  var isRoot = bShowRoot ? false : true;
  this._layout(root, x, y, width, height, isRoot);
};


/**
 * Performs layout for the specified node in the tree.
 * @param {DvtTreemapNode} node the root of the tree
 * @param {number} x The x coordinate for this node.
 * @param {number} y The y coordinate for this node.
 * @param {number} width The width of this node.
 * @param {number} height The height of this node.
 * @param {boolean} isRoot true if this node is the root of the tree.
 */
DvtSquarifyingLayout.prototype._layout = function(node, x, y, width, height, isRoot) 
{
  // Set the bounds on the current node and get the space available for its children
  var availBounds = this.setNodeBounds(node, x, y, width, height, isRoot);

  // Layout the children
  var children = node.getChildNodes();
  if (children != null && children.length > 0) {
    // Calculate the pixel size for each node and store in a temp field
    this._calcPixelSize(children, availBounds.w * availBounds.h);

    // Make a copy of the children array and sort ascending by size.
    // The ascending sort is used because squarify will move from back to front
    children = children.slice(0).sort(function(a,b) {return a.getSize() - b.getSize()});

    var w = Math.min(availBounds.w, availBounds.h);
    var r = new DvtRectangle(availBounds.x, availBounds.y, availBounds.w, availBounds.h);
    this._squarify(children, new Array(), w, r, Infinity);
  }
};


/**
 * Calculates and sets the pixel size for each child node.
 * @param {array} children The array of treemap node children.
 * @param {number} area The pixel area available for these children.
 * @private
 */
DvtSquarifyingLayout.prototype._calcPixelSize = function(children, area) {
  // First calculate the total.
  var total = 0;
  var i = 0;
  for (i = 0; i < children.length; i++)
    total += children[i].getSize() > 0 ? children[i].getSize() : 0; // ignore negatives, which skew child size calc

  // Then set the size
  var factor = (area == 0) ? 0 : area / total;
  for (i = 0; i < children.length; i++) {
    var child = children[i];
    child.__pxSize = child.getSize() * factor;
  }
};


/**
 * Recursively arranges the rectangles to perform layout with lowest aspect ratio.
 * @param {array} children The array of treemap nodes that still need layout, in ascending order by size.
 * @param {array} row The array of treemap nodes arranged in the current row.
 * @param {number} w The length along which the rectangles will be laid out.
 * @param {DvtRectangle} r The rectangle available for layout.
 * @param {number} worst The worst aspect ratio in the current row.
 * @private
 */
DvtSquarifyingLayout.prototype._squarify = function(children, row, w, r, worst) {
  // Note: This algorithm was modified from recursive to iterative to avoid the maximum
  //       recursive stack size in javascript.  This new implementation is much better
  //       at dealing with 0 size nodes and with large breadth size.

  // If there are no more children, assign the row and return
  if (children == null || children.length == 0) {
    this._layoutRow(row, w, r);
    return;
  }

  while (children.length > 0) {
    var c = children.pop();

    // If c has no visible size, we are done, since children are sorted in ascending size.
    if (c.__pxSize < 0) {
      // Assign the layout and finish
      this._layoutRow(row, w, r);
      return;
    }

    // Otherwise assign it to the row
    row.push(c);

    var newWorst = this._getWorst(row, w);
    if (newWorst > worst) {
      // Adding child does not improve layout. Reset arrays, assign the layout and recurse.
      children.push(c); // add c back to the children
      row.pop(); // remove c from the row
      r = this._layoutRow(row, w, r);
      this._squarify(children, new Array(), Math.min(r.w, r.h), r, Infinity);
      return;
    }
    else if (children.length == 0) {
      // No more children to allocate.  Assign layout and finish
      this._layoutRow(row, w, r);
      return;
    }
    else // update the worst field
      worst = newWorst;
  }
};


/**
 * Returns the highest aspect ratio of a list of rectangles.
 * @param {array} areas The array of treemap nodes
 * @param {number} w The length along which the rectangles will be laid out
 * @return {number} The greatest aspect ratio of the list of rectangles.
 * @private
 */
DvtSquarifyingLayout.prototype._getWorst = function(areas, w) {
  var total = 0;
  var min = Infinity;
  var max = -Infinity;

  for (var i = 0; i < areas.length; i++) {
    total += areas[i].__pxSize;
    min = Math.min(min, areas[i].__pxSize);
    max = Math.max(max, areas[i].__pxSize);
  }

  var s2 = total * total;
  var w2 = w * w;
  return Math.max((w2 * max) / s2, s2 / (w2 * min));
};


/**
 * Assigns the layout for the current row.
 * @param {array} row The array of treemap nodes arranged in the current row.
 * @param {number} w The length along which the rectangles will be laid out.
 * @param {DvtRectangle} r The rectangle available for layout.
 * @return {DvtRectangle} A rectangle containing the unallocated space.
 * @private
 */
DvtSquarifyingLayout.prototype._layoutRow = function(row, w, r) 
{
  // Calculate the sum of the row areas
  var total = 0;
  var i;
  for (i = 0; i < row.length; i++)
    total += row[i].__pxSize;

  // Assign positions to the row nodes
  var x = r.x;
  var y = r.y;
  var width, height;
  if (w == r.w) {
    // Horizontal Layout
    height = (w == 0) ? 0 : total / w;
    for (i = 0; i < row.length; i++) {
      width = row[i].__pxSize / height;  // equivalent to w*size/total
      this._layout(row[i], x, y, width, height, false); // Set and recurse
      x += width;
    }

    // Return the remaining space
    return new DvtRectangle(r.x, r.y + height, r.w, r.h - height);
  }
  else {
    // Vertical Layout
    width = (w == 0) ? 0 : total / w;
    for (i = 0; i < row.length; i++) {
      height = row[i].__pxSize / width;  // equivalent to w*size/total
      this._layout(row[i], x, y, width, height, false); // Set and recurse
      y += height;
    }

    // Return the remaining space
    return new DvtRectangle(r.x + width, r.y, r.w - width, r.h);
  }
};
/**
 * Layout class for treemaps.  This layout allocates space across a single dimension for each layer,
 * alternating between horizontal and vertical allocation.  This layout maintains the ordering of
 * the nodes while sacrificing aspect ratio.
 * @param {boolean} isHoriz true if the first layer is laid out horizontally.
 * @class
 * @constructor
 * @extends {DvtBaseTreemapLayout}
 */
var DvtSliceAndDiceLayout = function(isHoriz) {
  this.Init();
  this._isHoriz = isHoriz;
};

DvtObj.createSubclass(DvtSliceAndDiceLayout, DvtBaseTreemapLayout, 'DvtSliceAndDiceLayout');


/**
 * @override
 */
DvtSliceAndDiceLayout.prototype.layout = function(view, root, x, y, width, height, bShowRoot) {
  var isRoot = bShowRoot ? false : true;
  this._layout(this._isHoriz, view, root, x, y, width, height, isRoot);
};


/**
 * Performs layout for the specified node in the tree.
 * @param {boolean} isHoriz true if this layer is laid out horizontally.
 * @param {DvtTreemap} view The treemap component.
 * @param {DvtTreemapNode} node The root of the tree.
 * @param {number} x The x coordinate for this node.
 * @param {number} y The y coordinate for this node.
 * @param {number} width The width of this node.
 * @param {number} height The height of this node.
 * @param {boolean} isRoot true if this node is the root of the tree.
 * @private
 */
DvtSliceAndDiceLayout.prototype._layout = function(isHoriz, view, node, x, y, width, height, isRoot) 
{
  // Set the bounds on the current node and get the space available for its children
  var availBounds = this.setNodeBounds(node, x, y, width, height, isRoot);

  // Layout the children
  var children = node.getChildNodes();
  if (children != null) {
    var childX = availBounds.x;
    var childY = availBounds.y;
    // Width and height will be overwritten based on isHoriz
    var childWidth = availBounds.w;
    var childHeight = availBounds.h;

    // Find the total size of the children.  This may not match node.getSize() for
    // hierarchies that vary based on depth.
    var total = 0;
    var i;
    for (i = 0; i < children.length; i++)
      total += children[i].getSize() > 0 ? children[i].getSize() : 0; // ignore negatives, which skew child size calc

    // Sorting
    if (this.Sorting == DvtBaseTreeParser.SORTING_ON) {
      // Copy and sort by decreasing size
      children = children.slice(0);
      children.sort(function(a, b) { return b.getSize() - a.getSize(); });
    }

    // BIDI Support: For horizontal layout, reverse the order of the nodes
    if (isHoriz && DvtAgent.isRightToLeft(view.getCtx()))
      children = children.slice(0).reverse();

    for (i = 0; i < children.length; i++) {
      var child = children[i];

      // Ignore negative and zero sized nodes
      if (child.getSize() <= 0)
        continue;

      // Calculate the bounds of the child
      var sizeRatio = child.getSize() / total;
      if (isHoriz)
        childWidth = availBounds.w * sizeRatio;
      else
        childHeight = availBounds.h * sizeRatio;

      // Recursively layout the child
      this._layout(!isHoriz, view, child, childX, childY, childWidth, childHeight, false);

      // Update the x and y
      if (isHoriz)
        childX += childWidth;
      else
        childY += childHeight;
    }
  }
};
/**
 * @constructor
 * A component level treemap isolate event.
 * @type {string} id The id of the node that is the target of the event.
 * @class
 * @extends {DvtBaseComponentEvent}
 * @export
 */
var DvtTreemapIsolateEvent = function(id) {
  this.Init(DvtTreemapIsolateEvent.TYPE);
  this._id = id ? id : null;
};

DvtObj.createSubclass(DvtTreemapIsolateEvent, DvtBaseComponentEvent, 'DvtTreemapIsolateEvent');


/**
 * @export
 */
DvtTreemapIsolateEvent.TYPE = 'treemapIsolate';


/**
 * Returns the id of the isolated node, if any.
 * @return {string}
 * @export
 */
DvtTreemapIsolateEvent.prototype.getId = function() {
  return this._id;
};
/*---------------------------------------------------------------------------------*/
/*  DvtTreemapKeyboardHandler     Keyboard handler for Treemap                     */
/*---------------------------------------------------------------------------------*/
/**
  *  @param {DvtEventManager} manager The owning DvtEventManager
  *  @class DvtTreemapKeyboardHandler
  *  @extends {DvtKeyboardHandler}
  *  @constructor
  */
var DvtTreemapKeyboardHandler = function(manager)
{
  this.Init(manager);
};

DvtObj.createSubclass(DvtTreemapKeyboardHandler, DvtBaseTreeKeyboardHandler, 'DvtTreemapKeyboardHandler');


/**
 * @override
 */
DvtTreemapKeyboardHandler.prototype.isNavigationEvent = function(event)
{
  var isNavigable = DvtTreemapKeyboardHandler.superclass.isNavigationEvent.call(this, event);

  if (!isNavigable)
  {
    var keyCode = event.keyCode;
    if (keyCode == DvtKeyboardEvent.OPEN_BRACKET ||
        keyCode == DvtKeyboardEvent.CLOSE_BRACKET)
      isNavigable = true;
  }

  return isNavigable;
};
/**
 * Event Manager for Treemap.
 * @param {DvtTreemap} view The treemap to associate with this event manager
 * @param {DvtContext} context The platform specific context object.
 * @param {function} callback A function that responds to component events.
 * @param {object} callbackObj The optional object instance that the callback function is defined on.
 * @class
 * @constructor
 */
var DvtTreemapEventManager = function(view, context, callback, callbackObj) {
  DvtBaseTreeEventManager.call(this, view, context, callback, callbackObj);
};

DvtObj.createSubclass(DvtTreemapEventManager, DvtBaseTreeEventManager, 'DvtTreemapEventManager');


/**
 * @override
 */
DvtTreemapEventManager.prototype.ProcessKeyboardEvent = function(event)
{
  var eventConsumed = true;
  var keyCode = event.keyCode;

  if (keyCode == DvtKeyboardEvent.ENTER && event.ctrlKey)
  {
    // isolate or restore
    var node = this.getFocus();
    if (node.isIsolateEnabled())
    {
      if (node.__isIsolated())
        node.__restoreNode();
      else
        node.__isolateNode();
    }
    event.preventDefault();
  }
  else
  {
    eventConsumed = DvtTreemapEventManager.superclass.ProcessKeyboardEvent.call(this, event);
  }

  return eventConsumed;
};

DvtTreemapEventManager.prototype.isClearMenuAllowed = function()
{
  return false;
};
/**
 * Resource bundle for DvtTreemap.
 * @class
 * @constructor
 * @extends {DvtUtilBundle}
 */
var DvtTreemapBundle = function() {};

DvtObj.createSubclass(DvtTreemapBundle, DvtUtilBundle, 'DvtTreemapBundle');

DvtTreemapBundle['_defaults'] = {
  'COLOR': 'Color',
  'SIZE': 'Size'
};


/**
 * @override
 */
DvtTreemapBundle.prototype.GetDefaultStringForKey = function(key) {
  var defaultStr = DvtTreemapBundle.superclass.GetDefaultStringForKey.call(this, key);
  return (defaultStr ? defaultStr : DvtTreemapBundle['_defaults'][key]);
};


/**
 * @override
 */
DvtTreemapBundle.prototype.GetBundlePrefix = function() {
  return 'DvtTreemapBundle';
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseTreeDefaults}
 */
var DvtTreemapDefaults = function() {
  this.Init({'skyros': DvtTreemapDefaults.VERSION_1, 'alta': {}});
};

DvtObj.createSubclass(DvtTreemapDefaults, DvtBaseTreeDefaults, 'DvtTreemapDefaults');

/**
 * Defaults for version 1. This component was exposed after the Alta skin, so no earlier defaults are provided.
 */
DvtTreemapDefaults.VERSION_1 = {
  // Note, only attributes that are different than the XML defaults need
  // to be listed here, at least until the XML API is replaced.
  'nodeDefaults': {
    'header': {
      'labelStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;"),
      'borderColor': '#d6dfe6',
      'hoverBackgroundColor': '#ebeced',
      'hoverOuterColor': '#ebeced',
      'hoverInnerColor': '#d6d7d8',
      'selectedBackgroundColor': '#dae9f5',
      'selectedOuterColor': '#000000',
      'selectedInnerColor': '#FFFFFF'},
    'hoverColor': '#ebeced',
    'selectedOuterColor': '#000000',
    'selectedInnerColor': '#FFFFFF'
  }
};
/**
 * Utility functions for converting between JSON and XML APIs.
 * @param {DvtContext} context
 * @class
 */
var DvtTreemapJsonUtils = function(context) {
  this._context = context;
};

DvtObj.createSubclass(DvtTreemapJsonUtils, DvtBaseTreeJsonUtils, 'DvtTreemapJsonUtils');


/** @override **/
DvtTreemapJsonUtils.prototype.GetComponentName = function() {
  return 'treemap';
};


/** @override **/
DvtTreemapJsonUtils.prototype.WriteComponentAttributes = function(options) {
  var ret = DvtTreemapJsonUtils.superclass.WriteComponentAttributes.call(this, options);
  ret += this.WriteAttr('irk', options['isolatedNode']);

  var groupGaps = options['groupGaps'];
  if (groupGaps == 'all')
    ret += this.WriteAttr('gg', 'a');
  else if (groupGaps == 'none')
    ret += this.WriteAttr('gg', 'n');

  var layout = options['layout'];
  if (layout == 'sliceAndDiceHorizontal')
    ret += this.WriteAttr('layout', 'h');
  else if (layout == 'sliceAndDiceVertical')
    ret += this.WriteAttr('layout', 'v');

  var animationOnDisplay = options['animationOnDisplay'];
  if (animationOnDisplay == 'auto')
    ret += this.WriteAttr('adi', 'alphaFade');
  else
    ret += this.WriteAttr('adi', animationOnDisplay);

  return ret;
};


/** @override **/
DvtTreemapJsonUtils.prototype.WriteNodeAttributes = function(options, nodeData) {
  var ret = DvtTreemapJsonUtils.superclass.WriteNodeAttributes.call(this, options, nodeData);

  var labelDisplay = nodeData['labelDisplay'] ? nodeData['labelDisplay'] : options['nodeDefaults']['labelDisplay'];
  if (labelDisplay == 'off')
    ret += this.WriteAttr('ld', 'o');

  var groupLabelDisplay = nodeData['groupLabelDisplay'] ? nodeData['groupLabelDisplay'] : options['nodeDefaults']['groupLabelDisplay'];
  if (groupLabelDisplay == 'node')
    ret += this.WriteAttr('gld', 'n');
  else if (groupLabelDisplay == 'off')
    ret += this.WriteAttr('gld', 'o');

  var labelHalign = nodeData['labelHalign'] ? nodeData['labelHalign'] : options['nodeDefaults']['labelHalign'];
  if (labelHalign == 'start')
    ret += this.WriteAttr('ha', 's');
  else if (labelHalign == 'end')
    ret += this.WriteAttr('ha', 'e');

  var labelValign = nodeData['labelValign'] ? nodeData['labelValign'] : options['nodeDefaults']['labelValign'];
  if (labelValign == 'top')
    ret += this.WriteAttr('va', 't');
  else if (labelValign == 'bottom')
    ret += this.WriteAttr('va', 'b');

  // Header Properties
  var header = nodeData['header'];

  var labelStyle = header && header['labelStyle'] ? header['labelStyle'] : options['nodeDefaults']['header']['labelStyle'];
  ret += this.WriteAttr('hls', labelStyle);

  var headerHalign = header && header['labelHalign'] ? header['labelHalign'] : options['nodeDefaults']['header']['labelHalign'];
  if (headerHalign == 'center')
    ret += this.WriteAttr('hha', 'c');
  else if (headerHalign == 'end')
    ret += this.WriteAttr('hha', 'e');

  var isolate = header && header['isolate'] ? header['isolate'] : options['nodeDefaults']['header']['isolate'];
  if (isolate == 'off')
    ret += this.WriteAttr('hi', 'off');

  var useNodeColor = header && header['useNodeColor'] ? header['useNodeColor'] : options['nodeDefaults']['header']['useNodeColor'];
  if (useNodeColor == 'on')
    ret += this.WriteAttr('unc', 'on');

  return ret;
};


/** @override **/
DvtTreemapJsonUtils.prototype.WriteResourcesElement = function(options) {
  var ret = '<resources';

  // Translations
  var bundle = new DvtTreemapBundle();
  ret += this.WriteAttr('legendSize', bundle.getTranslatedString('SIZE'));
  ret += this.WriteAttr('legendColor', bundle.getTranslatedString('COLOR'));

  // Image Resources
  var resources = options['_resources'];
  var bRtl = DvtAgent.isRightToLeft(this._context);
  ret += this.WriteAttr('maximizeUp', bRtl && resources['isolateRtl'] ? resources['isolateRtl'] : resources['isolate']);
  ret += this.WriteAttr('maximizeDown', bRtl && resources['isolateDownRtl'] ? resources['isolateDownRtl'] : resources['isolateDown']);
  ret += this.WriteAttr('maximizeOver', bRtl && resources['isolateOverRtl'] ? resources['isolateOverRtl'] : resources['isolateOver']);
  ret += this.WriteAttr('restoreUp', bRtl && resources['restoreRtl'] ? resources['restoreRtl'] : resources['restore']);
  ret += this.WriteAttr('restoreDown', bRtl && resources['restoreDownRtl'] ? resources['restoreDownRtl'] : resources['restoreDown']);
  ret += this.WriteAttr('restoreOver', bRtl && resources['restoreOverRtl'] ? resources['restoreOverRtl'] : resources['restoreOver']);

  // Alta Behavior
  ret += this.WriteAttr('alta', 'true');

  ret += '/>\n';
  return ret;
};


/** @override **/
DvtTreemapJsonUtils.prototype.WriteStyleElement = function(options) {
  var ret = DvtTreemapJsonUtils.superclass.WriteStyleElement.call(this, options);

  var animationColor = options['animationUpdateColor'];
  if (animationColor)
    ret += this.WriteAttr('top', '-tr-animation-update-color: ' + animationColor);

  var nodeHoverColor = options['nodeDefaults']['hoverColor'];
  if (nodeHoverColor)
    ret += this.WriteAttr('node-hover', 'border-color: ' + nodeHoverColor);

  var nodeSelectedInnerColor = options['nodeDefaults']['selectedInnerColor'];
  var nodeSelectedOuterColor = options['nodeDefaults']['selectedOuterColor'];
  var nodeSelectedStr = nodeSelectedInnerColor ? DvtCSSStyle.INNER_COLOR + ':' + nodeSelectedInnerColor + ';' : '';
  nodeSelectedStr += nodeSelectedOuterColor ? DvtCSSStyle.OUTER_COLOR + ':' + nodeSelectedOuterColor : '';
  if (nodeSelectedStr)
    ret += this.WriteAttr('node-selected', nodeSelectedStr);

  var nodeHeaderBackgroundColor = options['nodeDefaults']['header']['backgroundColor'];
  var nodeHeaderBorderColor = options['nodeDefaults']['header']['borderColor'];
  var nodeHeaderStr = nodeHeaderBackgroundColor ? 'background-color:' + nodeHeaderBackgroundColor + ';' : '';
  nodeHeaderStr += nodeHeaderBorderColor ? 'border-color:' + nodeHeaderBorderColor : '';
  if (nodeHeaderStr)
    ret += this.WriteAttr('nodeHeader', nodeHeaderStr);

  var nodeHeaderHoverBackgroundColor = options['nodeDefaults']['header']['hoverBackgroundColor'];
  var nodeHeaderHoverInnerColor = options['nodeDefaults']['header']['hoverInnerColor'];
  var nodeHeaderHoverOuterColor = options['nodeDefaults']['header']['hoverOuterColor'];
  var nodeHeaderHoverStr = nodeHeaderHoverBackgroundColor ? DvtCSSStyle.BACKGROUND_COLOR + ':' + nodeHeaderHoverBackgroundColor + ';' : '';
  nodeHeaderHoverStr += nodeHeaderHoverInnerColor ? DvtCSSStyle.INNER_COLOR + ':' + nodeHeaderHoverInnerColor + ';' : '';
  nodeHeaderHoverStr += nodeHeaderHoverOuterColor ? DvtCSSStyle.OUTER_COLOR + ':' + nodeHeaderHoverOuterColor : '';
  if (nodeHeaderHoverStr)
    ret += this.WriteAttr('nodeHeader-hover', nodeHeaderHoverStr);

  var nodeHeaderSelectedBackgroundColor = options['nodeDefaults']['header']['selectedBackgroundColor'];
  var nodeHeaderSelectedInnerColor = options['nodeDefaults']['header']['selectedInnerColor'];
  var nodeHeaderSelectedOuterColor = options['nodeDefaults']['header']['selectedOuterColor'];
  var nodeHeaderSelectedStr = nodeHeaderSelectedBackgroundColor ? DvtCSSStyle.BACKGROUND_COLOR + ':' + nodeHeaderSelectedBackgroundColor + ';' : '';
  nodeHeaderSelectedStr += nodeHeaderSelectedInnerColor ? DvtCSSStyle.INNER_COLOR + ':' + nodeHeaderSelectedInnerColor + ';' : '';
  nodeHeaderSelectedStr += nodeHeaderSelectedOuterColor ? DvtCSSStyle.OUTER_COLOR + ':' + nodeHeaderSelectedOuterColor : '';
  if (nodeHeaderSelectedStr)
    ret += this.WriteAttr('nodeHeader-selected', nodeHeaderSelectedStr);

  ret += '/>\n';
  return ret;
};
});