"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * The base class for tree components.
 * @extends {DvtBaseComponent}
 * @class The base class for tree components.
 * @constructor
 * @export
 */
var DvtBaseTreeView = function() {};

DvtObj.createSubclass(DvtBaseTreeView, DvtBaseComponent, 'DvtBaseTreeView');

// Layout Constants
DvtBaseTreeView._EMPTY_TEXT_BUFFER = 2;

// Style
DvtBaseTreeView.BACKGROUND_STYLE = 'BACKGROUND_STYLE';
DvtBaseTreeView.TEXT_STYLE = 'TEXT_STYLE';
DvtBaseTreeView.ATTRIBUTE_TYPE_STYLE = 'ATTRIBUTE_TYPE_STYLE';
DvtBaseTreeView.ATTRIBUTE_VALUE_STYLE = 'ATTRIBUTE_VALUE_STYLE';
DvtBaseTreeView.DRILL_TEXT_STYLE = 'DRILL_TEXT_STYLE';
DvtBaseTreeView.CURRENT_TEXT_STYLE = 'CURRENT_TEXT_STYLE';


/**
 * Initializes the tree view.
 * @param {DvtContext} context The rendering context.
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @protected
 */
DvtBaseTreeView.prototype.Init = function(context, callback, callbackObj) {
  DvtBaseTreeView.superclass.Init.call(this, context, callback, callbackObj);

  // Create the event handler and add event listeners
  this._eventHandler = this.CreateEventManager(this, context, this.__dispatchEvent, this);
  this._eventHandler.addListeners(this);

  // Drag and drop support
  this._dragSource = new DvtDragSource(context);
  this._dropTarget = new DvtBaseTreeDropTarget(this);
  this._eventHandler.setDragSource(this._dragSource);

  /**
   * Field used to store the legend displayable during render.
   * @private
   */
  this._legend = null;

  this.LastXml = null;

  // boolean to indicate whether or not this view has current keyboard focus
  this._hasFocus = false;

  // String to indicate the id of the node that should get keyboard focus
  // Used when an event causes the view to re-render or animate and we want to re-set the keyboard focus to a
  // non-default node, for example when we
  // 1. drill up (set keyboard focus to the node that was the previous, drilled-in root of the treemap)
  // 2. restore a treemap after isolating a node (set focus to the node that was previously isolated)
  // 3. expand or collapse a sunburst node (set focus to the node that was expanded/collapsed)
  this._navigableIdToFocus = null;
};


/**
 * Renders the component using the specified xml.  If no xml is supplied to a component
 * that has already been rendered, this function will rerender the component with the
 * specified size.
 * @param {string} xmlString The component xml.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtBaseTreeView.prototype.render = function(xmlString, width, height) 
{
  // Store the size
  this.Width = width;
  this.Height = height;

  // Hide any currently shown tooltips
  if (this._eventHandler)
    this._eventHandler.hideTooltip();

  if (this.Animation && !xmlString) {
    xmlString = this.LastXml;
  }
  if (xmlString)
    this.LastXml = xmlString;

  // If new xml is provided, parse it and apply the properties
  if (xmlString) {
    var props = this.Parse(xmlString);
    this.ApplyParsedProperties(props);
  }

  // Relayout the component (for resize or new data)
  var availSpace = new DvtRectangle(0, 0, this.Width, this.Height);
  this.Layout(availSpace);

  // Create a new container and render the component into it
  var container = new DvtContainer(this.getCtx());
  this.addChild(container);

  // content facet: create afContext
  if (this._templates) {
    this._afContext = new DvtAfContext(this.getCtx(), this._eventHandler);
    //remove any components that don't fit in the tree node
    this._afContext.setRmIfNotFit(true);
  }

  this.Render(container, availSpace);

  // Animation Support
  // Stop any animation in progress
  if (this.Animation) {
    this.AnimationStopped = true;
    this.Animation.stop();
  }

  // Construct the new animation playable
  var bounds = new DvtRectangle(0, 0, this.Width, this.Height);
  var bBlackBoxUpdate = false; // true if this is a black box update animation
  if (!this._container) {
    this.Animation = this.GetDisplayAnimation(container, bounds);
  }
  else if (this.AnimationOnDataChange && xmlString) {
    // AnimationOnDataChange
    if (DvtBlackBoxAnimationHandler.isSupported(this.AnimationOnDataChange)) {
      // Black Box Animation
      this.Animation = DvtBlackBoxAnimationHandler.getCombinedAnimation(this.getCtx(), this.AnimationOnDataChange, this._container, container, bounds, this.AnimationDuration);
      bBlackBoxUpdate = true;
    }
    else if (this._oldRoot && this.AnimationOnDataChange == 'auto') {
      // Data Change Animation
      // Create the animation handler, calc, and play the animation
      this._deleteContainer = this.GetDeleteContainer();
      this.addChild(this._deleteContainer);
      var ah = new DvtBaseTreeAnimationHandler(this.getCtx(), this._deleteContainer);
      ah.animate(this._oldRoot, this._root, this._oldAncestors, this._ancestors);
      this.Animation = ah.getAnimation();
    }
  }

  // Clear out the old info, not needed anymore
  this._oldRoot = null;
  this._oldAncestors = null;

  // If an animation was created, play it
  if (this.Animation) {
    // Disable event listeners temporarily
    this._eventHandler.removeListeners(this);

    // Start the animation
    this.Animation.setOnEnd(this.OnAnimationEnd, this);
    this.Animation.play();
  }

  // Clean up the old container.  If doing black box animation, store a pointer and clean
  // up after animation is complete.  Otherwise, remove immediately.
  if (bBlackBoxUpdate) {
    this._oldContainer = this._container;
  }
  else if (this._container) {
    // Not black box animation, so clean up the old contents
    this.removeChild(this._container);
  }

  // Update the pointer to the new container
  this._container = container;

  // Selection Support
  if (xmlString) {
    // Update the selection manager with the initial selections.  This must be done after
    // the shapes are created to apply the selection effects.
    this._processInitialSelections();

    // Update the event manager with the initial focus
    this._processInitialFocus(!this.Animation);
  }
  else
    this.ReselectNodes(); // Resize or Rerender: Reselect the nodes using the selection handler's state
};


/**
 * Parses the xml and returns the root node.
 * @return {object} An object containing the parsed properties.
 * @protected
 */
DvtBaseTreeView.prototype.Parse = function(xmlString) {
  // subclasses should override
  return null;
};


/**
 * Performs layout for the component.
 * @param {DvtRect} availSpace The rectangle within which to perform layout.
 * @protected
 */
DvtBaseTreeView.prototype.Layout = function(availSpace) {
  // subclasses should override
};


/**
 * Renders the component.
 * @param {DvtContainer} container The container to render within.
 * @param {DvtRectangle} bounds The bounds of the node area.
 * @protected
 */
DvtBaseTreeView.prototype.Render = function(container, bounds) {
  // subclasses should override
};


/**
 * Renders the background.
 * @param {DvtContainer} container The container to render within.
 * @protected
 */
DvtBaseTreeView.prototype.RenderBackground = function(container, defaultStyle) {
  // Render an invisible fill for eventing
  var background = new DvtRect(this.getCtx(), 0, 0, this.Width, this.Height);
  background.setInvisibleFill();
  container.addChild(background);
};


/**
 * Lays out the breadcrumbs and updates the available space.
 * @param {DvtRect} availSpace The rectangle within which to perform layout.
 * @protected
 */
DvtBaseTreeView.prototype.LayoutBreadcrumbs = function(availSpace) {
  if (this._ancestors && this._ancestors.length > 0) {
    var rootLabel = this._root ? this._root.getLabel() : null;

    if (this._breadcrumbs)
      this._eventHandler.removeComponentKeyboardHandler(this._breadcrumbs.getEventManager());

    this._breadcrumbs = DvtTreeBreadcrumbsRenderer.render(this, availSpace, this._ancestors, rootLabel);
    this._eventHandler.addComponentKeyboardHandlerAt(this._breadcrumbs.getEventManager(), 0);
  }
  else {
    if (this._breadcrumbs)
      this._eventHandler.removeComponentKeyboardHandler(this._breadcrumbs.getEventManager());

    this._breadcrumbs = null;
  }
};


/**
 * Renders the breadcrumbs.
 * @param {DvtContainer} container The container to render within.
 * @protected
 */
DvtBaseTreeView.prototype.RenderBreadcrumbs = function(container) {
  // The breadcrumbs are actually already rendered in _layoutBreadcrumbs, so just add it to the tree here.
  if (this._breadcrumbs) {
    container.addChild(this._breadcrumbs);
  }
};


/**
 * Lays out the legend component and updates the available space.
 * @param {DvtRect} availSpace The rectangle within which to perform layout.
 * @protected
 */
DvtBaseTreeView.prototype.LayoutLegend = function(availSpace) {
  // If a legend source is specified, find the associated attribute groups and render the legend
  var attrGroups = null;
  if (this._legendSource && this._attrGroups) {
    for (var i = 0; i < this._attrGroups.length; i++) {
      var agDef = this._attrGroups[i];
      if (agDef.id == this._legendSource) {
        attrGroups = agDef.attrGroups;
        break;
      }
    }
  }

  // Render the legend
  if (this._sizeValueStr || this._colorValueStr || attrGroups)
    this._legend = DvtTreeLegendRenderer.render(this, availSpace,
                                                this.__getResources()['legendSize'], this.__getResources()['legendColor'],
                                                this._sizeValueStr, this._colorValueStr, attrGroups);
};


/**
 * Renders the legend.
 * @param {DvtContainer} container The container to render within.
 * @protected
 */
DvtBaseTreeView.prototype.RenderLegend = function(container) {
  // The legend is actually already rendered in _layoutLegend, so just add it to the tree here.
  if (this._legend) {
    container.addChild(this._legend);

    // Clear the pointer, since we don't need it anymore
    this._legend = null;
  }
};


/**
 * Renders the empty text message, centered in the available space.
 * @param {DvtContainer} container The container to render within.
 * @protected
 */
DvtBaseTreeView.prototype.RenderEmptyText = function(container) {
  if (this._emptyText) {
    // Create the text and position it in the middle of the available space
    var text = new DvtOutputText(this.getCtx(), this._emptyText, this.Width / 2, this.Height / 2);
    text.alignCenter();
    text.alignMiddle();
    DvtTextUtils.fitText(text,
                         this.Width - 2 * DvtBaseTreeView._EMPTY_TEXT_BUFFER,
                         this.Height - 2 * DvtBaseTreeView._EMPTY_TEXT_BUFFER,
                         this);
    container.addChild(text);
  }
};


/**
 * Checks whether the component has valid data.
 * @return {boolean} True if the component has valid data.
 * @protected
 */
DvtBaseTreeView.prototype.HasValidData = function() {
  return (this._root && this._root.getSize() > 0);
};


/**
 * Returns the animation to use on initial display of this component.
 * @return {DvtBaseAnimation} The initial display animation.
 * @protected
 */
DvtBaseTreeView.prototype.GetDisplayAnimation = function(container, bounds) {
  if (DvtBlackBoxAnimationHandler.isSupported(this.AnimationOnDisplay))
    return DvtBlackBoxAnimationHandler.getInAnimation(this.getCtx(), this.AnimationOnDisplay, container, bounds, this.AnimationDuration);
  else
    return null;
};


/**
 * Hook for cleaning up animation behavior at the end of the animation.
 * @protected
 */
DvtBaseTreeView.prototype.OnAnimationEnd = function() {
  // Remove the container containing the delete animations
  if (this._deleteContainer) {
    this.removeChild(this._deleteContainer);
    this._deleteContainer = null;
  }

  // Clean up the old container used by black box updates
  if (this._oldContainer) {
    this.removeChild(this._oldContainer);
    this._oldContainer = null;
  }

  // Reset the animation stopped flag
  this.AnimationStopped = false;

  // Remove the animation reference
  this.Animation = null;

  // Restore event listeners
  this._eventHandler.addListeners(this);

  // Restore visual effects on node with keyboard focus
  this._processInitialFocus(true);
};


/**
 * Creates a container that can be used for storing delete animation content.
 */
DvtBaseTreeView.prototype.GetDeleteContainer = function() {
  return new DvtContainer(this.getCtx());
};


/**
 * Returns a keyboard handler that can be used by the view's event manager
 * @param {DvtEventManager} The owning event manager
 * @return {DvtKeyboardHandler}
 * @protected
 */
DvtBaseTreeView.prototype.CreateKeyboardHandler = function(manager)
{
  return new DvtBaseTreeKeyboardHandler(manager);
};


/**
 * Returns an event manager that will handle events on this view
 * @param {DvtContainer} view
 * @param {DvtContext} context
 * @param {object} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The object context for the callback function
 * @return {DvtEventManager}
 * @protected
 */
DvtBaseTreeView.prototype.CreateEventManager = function(view, context, callback, callbackObj)
{
  return new DvtBaseTreeEventManager(view, context, callback, callbackObj);
};


/**
 * Returns the node that should receive initial keyboard focus when the view first gets focus
 * @param {DvtBaseTreeNode} root
 * @param {DvtBaseTreeNode} The node that should receive initial keyboard focus
 * @protected
 */
DvtBaseTreeView.prototype.GetInitialFocusedItem = function(root)
{
  return root;
};


/**
 * Returns the DvtEventManager for this component.
 * @return {DvtEventManager}
 */
DvtBaseTreeView.prototype.__getEventManager = function() {
  return this._eventHandler;
};


/**
 * Returns the map of resources for use in rendering this component.
 * @return {object}
 */
DvtBaseTreeView.prototype.__getResources = function() {
  return this._resources;
};


/**
 * Returns the maximum depth of the tree.
 * @return {number} The maximum depth of the tree.
 */
DvtBaseTreeView.prototype.__getMaxDepth = function() {
  return this._maxDepth;
};


/**
 * Returns the node count of the tree.
 * @return {number} The node count of the tree.
 */
DvtBaseTreeView.prototype.__getNodeCount = function() {
  return this._nodeCount;
};


/**
 * Returns the maximum depth of the tree rooted at the specified node.
 * @param {DvtBaseTreeNode} node The subtree to find the depth for.
 * @param {number} depth The depth of the specified node.
 * @return {number} The maximum depth of the tree.
 * @private
 */
DvtBaseTreeView._calcMaxDepth = function(node, depth) {
  var maxDepth = depth;  // Initialize to current depth

  // Search children
  var children = node.getChildNodes();
  if (children) {
    for (var i = 0; i < children.length; i++) {
      var childDepth = DvtBaseTreeView._calcMaxDepth(children[i], depth + 1);
      maxDepth = Math.max(maxDepth, childDepth);
    }
  }

  return maxDepth;
};


/**
 * Applies the parsed properties to this component.
 * @param {object} props An object containing the parsed properties for this component.
 * @protected
 */
DvtBaseTreeView.prototype.ApplyParsedProperties = function(props) {
  // Save the old info for animation support
  this._oldRoot = this._root;
  this._oldAncestors = this._ancestors;

  // Save the parsed properties
  this._nodeCount = props.nodeCount;
  this._resources = props.resources ? props.resources : {};
  this._root = props.root;
  this._emptyText = props.emptyText;
  this._ancestors = props.ancestors;
  this._dropSiteFill = new DvtSolidFill(props.dropSiteFillColor, props.dropSiteOpacity);
  this._dropSiteStroke = new DvtSolidStroke(props.dropSiteBorderColor);

  this.AnimationOnDisplay = props.animationOnDisplay;
  this.AnimationOnDataChange = props.animationOnDataChange;
  this.AnimationDuration = props.animationDuration;
  this.Sorting = props.sorting;

  this._styles = props.styles;

  this._nodeSelection = props.nodeSelection;

  if (props.templates) {
    this._templates = props.templates;
  }

  // Selection Support
  if (this._nodeSelection) {
    this._selectionHandler = new DvtSelectionHandler(props.nodeSelection);
    this._initialSelection = props.selectedIds;
  }
  else
    this._selectionHandler = null;

  // Event Handler delegates to other handlers
  this._eventHandler.setSelectionHandler(this._selectionHandler);
  this._eventHandler.setContextMenuHandler(props.contextMenuHandler);

  // Keyboard Support
  this._eventHandler.setKeyboardHandler(this.CreateKeyboardHandler(this._eventHandler));

  // Update the max depth of the tree
  if (this._root)
    this._maxDepth = DvtBaseTreeView._calcMaxDepth(this._root, 0);

  // Attribute Groups Support
  this._attrGroups = props.attrGroups;

  // Legend
  this._legendSource = props.legendSource;
  this._sizeValueStr = props.sizeValueStr;
  this._colorValueStr = props.colorValueStr;
};


/**
 * Reselects the selected nodes after a re-render.
 * @protected
 */
DvtBaseTreeView.prototype.ReselectNodes = function() {
  var selectedNodes = this._selectionHandler ? this._selectionHandler.getSelection() : new Array();
  for (var i = 0; i < selectedNodes.length; i++)
    selectedNodes[i].setSelected(true);
};


/**
 * Update the selection handler with the initial selections.
 * @private
 */
DvtBaseTreeView.prototype._processInitialSelections = function() {
  if (this._selectionHandler && this._initialSelection) {
    var targets = new Array();
    this._addSelectableObjectsToArray(this._root, targets); // adds all selectable objects to array
    this._selectionHandler.processInitialSelections(this._initialSelection, targets);
    this._initialSelection = null;
  }
};


/**
 * Update the event manager with the initial focused item
 * @param {Boolean} applyVisualEffects True if we want to apply visual effects to indicate which node has
 *                  keyboard focus.
 */
DvtBaseTreeView.prototype._processInitialFocus = function(applyVisualEffects) {

  var initialFocus = null;
  var id = this.__getNavigableIdToFocus();

  if (id)
  {
    initialFocus = DvtBaseTreeNode.getNodeById(this._root, id);
    this._eventHandler.setFocus(initialFocus);
  }

  if (applyVisualEffects)
  {
    // if we are applying visual effects in response to an event that caused a re-render or animation, and this
    // event specified a non-default node to set keyboard focus on, clear that value now that we've used it
    this.__setNavigableIdToFocus(null);
  }

  if (!initialFocus)
  {
    // set the item that has initial keyboard focus to a default if none was previously defined
    initialFocus = this.GetInitialFocusedItem(this._root);
    this._eventHandler.setFocus(initialFocus);
  }

  // have the event manager apply any needed visual effects
  // however, do this only if we are not animating so as to prevent the focus visual effect
  // from appearing during the duration of the animation
  if (applyVisualEffects)
    this.setFocused(this.isFocused());

};


/**
 * Update the visual effects on view when it receives or loses keyboard focus
 *
 * @param {boolean} isFocused
 */
DvtBaseTreeView.prototype.setFocused = function(isFocused)
{
  this._hasFocus = isFocused;
  this._eventHandler.setFocused(isFocused);
};


/**
 * Returns true if the view currently has keyboard focus
 */
DvtBaseTreeView.prototype.isFocused = function()
{
  return this._hasFocus;
};


/**
 * Recursively returns an array containing all nodes in the subtree of a given node.
 * @param {DvtBaseTreeNode} node The root of the subtree whose children will be returned.
 * @param {array} ret The array onto which to add the subtree.
 * @private
 */
DvtBaseTreeView.prototype._addSelectableObjectsToArray = function(node, ret) {
  if (!node)
    return;

  // Add this node
  ret.push(node);

  // Add its children
  var children = node.getChildNodes();
  if (children) {
    for (var i = 0; i < children.length; i++) {
      this._addSelectableObjectsToArray(children[i], ret);
    }
  }
};


/**
 * Returns the animation duration, in milliseconds.
 * @return {number}
 */
DvtBaseTreeView.prototype.__getAnimationDuration = function() {
  return this.AnimationDuration;
};


/**
 * get templates of content facet
 * @return {array} array of templates
 */
DvtBaseTreeView.prototype.__getTemplates = function() {
  return this._templates;
};

DvtBaseTreeView.prototype.__getStyles = function() {
  return this._styles;
};


/**
 * get afComponent context
 */
DvtBaseTreeView.prototype.__getAfContext = function() {
  return this._afContext;
};


/**
 * Returns the node under the specified coordinates.
 * @param {number} x
 * @param {number} y
 * @param {DvtBaseTreeNode} node The node to search from, null to search from the root.
 * @return {DvtBaseTreeView}
 */
DvtBaseTreeView.prototype.__getNodeUnderPoint = function(x, y) {
  return this._root.getNodeUnderPoint(x, y);
};


/**
 * Returns the clientId of the drag source owner if dragging is supported.
 * @param {array} clientIds
 * @return {string}
 */
DvtBaseTreeView.prototype.__isDragAvailable = function(clientIds) {
  // Drag and drop supported when selection is enabled, only 1 drag source
  if (this._selectionHandler)
    return clientIds[0];
  else
    return null;
};


/**
 * Returns the row keys for the current drag.
 * @param {DvtBaseTreeNode} node The node where the drag was initiated.
 * @return {array} The row keys for the current drag.
 */
DvtBaseTreeView.prototype.__getDragTransferable = function(node) {
  // Select the node if not already selected
  if (!node.isSelected()) {
    this._selectionHandler.processClick(node, false);
    this._eventHandler.fireSelectionEvent();
  }

  // Gather the rowKeys for the selected objects
  var rowKeys = [];
  var selection = this._selectionHandler.getSelection();
  for (var i = 0; i < selection.length; i++) {
    rowKeys.push(selection[i].getId());
  }

  return rowKeys;
};


/**
 * Returns the displayables to use for drag feedback for the current drag.
 * @param {DvtBaseTreeNode} node The node where the drag was initiated.
 * @return {array} The displayables for the current drag.
 */
DvtBaseTreeView.prototype.__getDragFeedback = function() {
  // This is called after __getDragTransferable, so the selection has been updated already.
  // Gather the displayables for the selected objects
  var displayables = [];
  var selection = this._selectionHandler.getSelection();
  for (var i = 0; i < selection.length; i++) {
    displayables.push(selection[i].__getDisplayable());
  }

  return displayables;
};


/**
 * Displays drop site feedback for the specified node.
 * @param {DvtBaseTreeNode} node The node for which to show drop feedback, or null to remove drop feedback.
 * @return {DvtDisplayable} The drop site feedback, if any.
 */
DvtBaseTreeView.prototype.__showDropSiteFeedback = function(node) {
  // Remove any existing drop site feedback
  if (this._dropSiteFeedback) {
    this.removeChild(this._dropSiteFeedback);
    this._dropSiteFeedback = null;
  }

  // Create feedback for the node
  if (node) {
    this._dropSiteFeedback = node.getDropSiteFeedback();
    if (this._dropSiteFeedback) {
      this._dropSiteFeedback.setFill(this._dropSiteFill);
      this._dropSiteFeedback.setStroke(this._dropSiteStroke);
      this.addChild(this._dropSiteFeedback);
    }
  }

  return this._dropSiteFeedback;
};


/**
 * Processes a breadcrumb drill event.
 * @param {DvtBreadcrumbsDrillEvent} event
 */
DvtBaseTreeView.prototype.__processBreadcrumbsEvent = function(event) {
  if (event instanceof DvtBreadcrumbsDrillEvent)
    this.__drill(event.getId(), false);
};


/**
 * Performs a drill on the specified node.
 * @param {string} id
 * @param {boolean} bDrillUp True if this is a drill up operation.
 */
DvtBaseTreeView.prototype.__drill = function(id, bDrillUp) {
  if (bDrillUp && this._root && id == this._root.getId() && this._ancestors && this._ancestors.length > 0) {
    // after the drill up completes, set keyboard focus on the node that was the
    // root of the previously drilled-down view
    this.__setNavigableIdToFocus(id);

    // Drill up only supported on the root node
    this.__dispatchEvent(new DvtDrillReplaceEvent(this._ancestors[0].id));
  }
  else if (!bDrillUp) // Fire the event
    this.__dispatchEvent(new DvtDrillReplaceEvent(id));

  // Hide any tooltips being shown
  this.getCtx().getTooltipManager().hideTooltip();
};


/**
 * Returns the logical object corresponding to the physical target
 * @param {Object} target
 * @return {Object}
 */
DvtBaseTreeView.prototype.getLogicalObject = function(target)
{
  return this._eventHandler.GetLogicalObject(target);
};


/**
 * @return {DvtBaseTreeNode} the root tree node.
 */
DvtBaseTreeView.prototype.getRootNode = function()
{
  return this._root;
};


/**
 * Returns the id of the node that should get keyboard focus, if the default node should not receive focus.
 * Used when an event causes the view to re-render or animate and we want to set the keyboard focus
 * to a non-default node.
 *
 * @return {String} the id of the node that should receive keyboard focus
 */
DvtBaseTreeView.prototype.__getNavigableIdToFocus = function() 
{
  return this._navigableIdToFocus;
};


/**
 * Sets the id of the node that should get keyboard focus, if the default node should not receive focus.
 * Used when an event causes the view to re-render or animate and we want to set the keyboard focus
 * to a non-default node.
 *
 * @param {String} id The id of the node that should receive keyboard focus
 */
DvtBaseTreeView.prototype.__setNavigableIdToFocus = function(id) 
{
  this._navigableIdToFocus = id;
};


/**
 * @return {String} whether nodeSelection is multiple, single, or null.
 */
DvtBaseTreeView.prototype.__getNodeSelection = function() 
{
  return this._nodeSelection;
};

/**
 * @return {DvtBundle} The bundle.
 */
DvtBaseTreeView.prototype.getBundle = function() 
{
  if (!this._bundle)
    this._bundle = new DvtUtilBundle();
  return this._bundle;
};

/**
 * Returns the automation object for this treeView
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtBaseTreeView.prototype.getAutomation = function() {
  return new DvtTreeAutomation(this);
};
// APIs called by the ADF Faces drag source for DvtBaseTreeView


/**
 * If this object supports drag, returns the client id of the drag component.
 * Otherwise returns null.
 * @param mouseX the x coordinate of the mouse
 * @param mouseY the x coordinate of the mouse
 * @param clientIds the array of client ids of the valid drag components
 */
DvtBaseTreeView.prototype.isDragAvailable = function(mouseX, mouseY, clientIds) {
  return this._dragSource.isDragAvailable(clientIds);
};


/**
 * Returns the transferable object for a drag initiated at these coordinates.
 */
DvtBaseTreeView.prototype.getDragTransferable = function(mouseX, mouseY) {
  return this._dragSource.getDragTransferable(mouseX, mouseY);
};


/**
 * Returns the feedback for the drag operation.
 */
DvtBaseTreeView.prototype.getDragOverFeedback = function(mouseX, mouseY) {
  return this._dragSource.getDragOverFeedback(mouseX, mouseY);
};


/**
 * Returns an Object containing the drag context info.
 */
DvtBaseTreeView.prototype.getDragContext = function(mouseX, mouseY) {
  return this._dragSource.getDragContext(mouseX, mouseY);
};


/**
 * Returns the offset to use for the drag feedback. This positions the drag
 * feedback relative to the pointer.
 */
DvtBaseTreeView.prototype.getDragOffset = function(mouseX, mouseY) {
  return this._dragSource.getDragOffset(mouseX, mouseY);
};


/**
 * Returns the offset from the mouse pointer where the drag is considered to be located.
 */
DvtBaseTreeView.prototype.getPointerOffset = function(xOffset, yOffset) {
  return this._dragSource.getPointerOffset(xOffset, yOffset);
};


/**
 * Notifies the component that a drag started.
 */
DvtBaseTreeView.prototype.initiateDrag = function() {
  this._dragSource.initiateDrag();
};


/**
 * Clean up after the drag is completed.
 */
DvtBaseTreeView.prototype.dragDropEnd = function() {
  this._dragSource.dragDropEnd();
};
// APIs called by the ADF Faces drop target for DvtBaseTreeView


/**
 * If a drop is possible at these mouse coordinates, returns the client id
 * of the drop component. Returns null if drop is not possible.
 */
DvtBaseTreeView.prototype.acceptDrag = function(mouseX, mouseY, clientIds) {
  return this._dropTarget.acceptDrag(mouseX, mouseY, clientIds);
};


/**
 * Paints drop site feedback as a drag enters the drop site.
 */
DvtBaseTreeView.prototype.dragEnter = function() {
  this._dropTarget.dragEnter();
};


/**
 * Cleans up drop site feedback as a drag exits the drop site.
 */
DvtBaseTreeView.prototype.dragExit = function() {
  this._dropTarget.dragExit();
};


/**
 * Returns the object representing the drop site. This method is called when a valid
 * drop is performed.
 */
DvtBaseTreeView.prototype.getDropSite = function(mouseX, mouseY) {
  return this._dropTarget.getDropSite(mouseX, mouseY);
};
/**
 * Animation handler for tree data objects.
 * @param {DvtContext} context The platform specific context object.
 * @param {DvtContainer} deleteContainer The container where deletes should be moved for animation.
 * @class DvtBaseTreeAnimationHandler
 * @constructor
 */
var DvtBaseTreeAnimationHandler = function(context, deleteContainer) {
  this.Init(context, deleteContainer);
};

DvtObj.createSubclass(DvtBaseTreeAnimationHandler, DvtDataAnimationHandler, 'DvtBaseTreeAnimationHandler');


/**
 * Animates the tree component, with support for data changes and drilling.
 * @param {DvtBaseTreeNode} oldRoot The state of the tree before the animation.
 * @param {DvtBaseTreeNode} newRoot The state of the tree after the animation.
 * @param {array} oldAncestors The array of ancestors for the old root node.
 * @param {array} newAncestors The array of ancestors for the new root node.
 */
DvtBaseTreeAnimationHandler.prototype.animate = function(oldRoot, newRoot, oldAncestors, newAncestors) {
  this._bDrill = false; // true if this is a drilling animation
  this._oldRoot = oldRoot;
  this._oldAncestors = oldAncestors;

  // Determine whether this is a drill or data change animation
  if (DvtBaseTreeAnimationHandler._isAncestor(newAncestors, oldRoot) ||
      DvtBaseTreeAnimationHandler._isAncestor(oldAncestors, newRoot))
  {
    // Drilling
    this._bDrill = true;
    var oldList = oldRoot.getDescendantNodes();
    var newList = newRoot.getDescendantNodes();
    oldList.push(oldRoot);
    newList.push(newRoot);
    this.constructAnimation(oldList, newList);
  }
  else {
    // Data Change Animation
    this.constructAnimation([oldRoot], [newRoot]);
  }
};


/**
 * Returns true if the current animation is for a drill operation.  The nodes
 * will call this function and handle their animations differently.
 * @return {boolean}
 */
DvtBaseTreeAnimationHandler.prototype.isDrillAnimation = function() {
  return this._bDrill;
};


/**
 * Returns true if the specified node was previously an ancestor of the old root.  A value
 * of true indicates that an insert animation should not be performed on this node.
 * @param {DvtBaseTreeNode} node
 */
DvtBaseTreeAnimationHandler.prototype.isAncestorInsert = function(node) {
  if (this._bDrill)
    return this._oldRoot.getId() == node.getId() ||
           DvtBaseTreeAnimationHandler._isAncestor(this._oldAncestors, node);
  else
    return false;
};


/**
 * Returns true if the specified node is contained in the array of ancestors.
 * @param {array} ancestors The array of ancestors to search.
 * @param {DvtBaseTreeNode} node The node to search for.
 * @return {boolean}
 */
DvtBaseTreeAnimationHandler._isAncestor = function(ancestors, node) {
  if (!node || !ancestors)
    return false;

  // Iterate through the array and search for the node
  for (var i = 0; i < ancestors.length; i++) {
    if (ancestors[i].id == node.getId())
      return true;
  }

  // No match found
  return false;
};
/**
 * Drop Target event handler for DvtBaseTreeView
 * @param {DvtBaseTreeView} view
 * @class DvtBaseTreeDropTarget
 * @extends {DvtDropTarget}
 * @constructor
 */
var DvtBaseTreeDropTarget = function(view) {
  this._view = view;
};

DvtObj.createSubclass(DvtBaseTreeDropTarget, DvtDropTarget, 'DvtBaseTreeDropTarget');


/**
 * @override
 */
DvtBaseTreeDropTarget.prototype.acceptDrag = function(mouseX, mouseY, clientIds) {
  // If there is no node under the point, then don't accept the drag
  var node = this._view.__getNodeUnderPoint(mouseX, mouseY);
  if (!node) {
    this._view.__showDropSiteFeedback(null);
    return null;
  }
  else if (node != this._dropSite) {
    this._view.__showDropSiteFeedback(node);
    this._dropSite = node;
  }

  // Return the first clientId, since this component has only a single drag source
  return clientIds[0];
};


/**
 * @override
 */
DvtBaseTreeDropTarget.prototype.dragExit = function() {
  // Remove drop site feedback
  this._view.__showDropSiteFeedback(null);
  this._dropSite = null;
};


/**
 * @override
 */
DvtBaseTreeDropTarget.prototype.getDropSite = function(mouseX, mouseY) {
  var node = this._view.__getNodeUnderPoint(mouseX, mouseY);
  if (node)
    return {clientRowKey: node.getId()};
  else
    return null;
};
/**
 * @constructor
 * Event Manager for tree components.
 */
var DvtBaseTreeEventManager = function(view, context, callback, callbackObj) {
  this.Init(context, callback, callbackObj);
  this._view = view;
};

DvtObj.createSubclass(DvtBaseTreeEventManager, DvtEventManager, 'DvtBaseTreeEventManager');


/**
 * Returns the owning tree component.
 * @return {DvtBaseTreeView}
 * @protected
 */
DvtBaseTreeEventManager.prototype.GetView = function() {
  return this._view;
};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.OnDblClick = function(event) {
  DvtBaseTreeEventManager.superclass.OnDblClick.call(this, event);

  // Done if there is no object
  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  this._processDrill(obj, event.shiftKey);

};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.OnClick = function(event) {
  DvtBaseTreeEventManager.superclass.OnClick.call(this, event);

  // If the object is a DvtBaseTreePeer (for node labels), handle drilling
  var obj = this.GetLogicalObject(event.target);
  this._processNodeLabel(obj);
};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.OnMouseOver = function(event) {
  DvtBaseTreeEventManager.superclass.OnMouseOver.call(this, event);

  // Additional mouse over support
  var obj = this.GetLogicalObject(event.target);
  if (obj && obj.handleMouseOver) {
    obj.handleMouseOver();
  }
};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.OnMouseOut = function(event) {
  DvtBaseTreeEventManager.superclass.OnMouseOut.call(this, event);

  // Additional mouse out support
  var obj = this.GetLogicalObject(event.target);
  if (obj && obj.handleMouseOut) {
    // Don't hide on mouseOut to object belonging to same node (expand button for example)
    var relatedObj = this.GetLogicalObject(event.relatedTarget);
    var relatedId = relatedObj && relatedObj.getId ? relatedObj.getId() : null;
    if ((obj.getId() == null) || (relatedId != obj.getId()))
      obj.handleMouseOut();
  }
};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.ProcessKeyboardEvent = function(event)
{
  var eventConsumed = false;
  var keyCode = event.keyCode;
  var obj = this.getFocus(); // the item with current keyboard focus

  if (keyCode == DvtKeyboardEvent.ENTER && !event.ctrlKey)
  {
    // handle drill operations
    obj = this.getFocus();
    if (obj.isDrillReplaceEnabled && obj.isDrillReplaceEnabled())
    {
      // SHIFT+ENTER means drill up from the current root, even if the node with keyboard focus is not the current root
      if (event.shiftKey)
        obj = this._view.getRootNode();

      // Delegate to the view to fire a drill event
      this._view.__drill(obj.getId(), event.shiftKey);
    }

    event.preventDefault();
    eventConsumed = true;
  }
  else
  {
    eventConsumed = DvtBaseTreeEventManager.superclass.ProcessKeyboardEvent.call(this, event);
  }

  return eventConsumed;
};

DvtBaseTreeEventManager.prototype.HandleTouchClickInternal = function(event) {
  var targetObj = event.target;
  var obj = this.GetLogicalObject(targetObj);
  this._processNodeLabel(obj);

  if (this._currentHoverItem) {
    if (this._currentHoverItem != obj) {
      this._currentHoverItem.handleMouseOut();
      this._currentHoverItem = null;
    }
  }

  if (obj && obj instanceof DvtBaseTreeNode) {
    if (this._currentHoverItem != obj) {
      this._currentHoverItem = obj;
      obj.handleMouseOver();
    }
  }
};


/**
 * @override
 */
DvtBaseTreeEventManager.prototype.OnComponentTouchDblClick = function(event) {
  var targetObj = event.target;
  var obj = this.GetLogicalObject(targetObj);
  if (!obj)
    return;
  this._processDrill(obj, false);
};

DvtBaseTreeEventManager.prototype._processNodeLabel = function(obj) {
  if (obj && obj instanceof DvtBaseTreePeer && obj.isDrillable()) {
    // Delegate to the view to fire a drill event
    this._view.__drill(obj.getId(), false);
  }
};

DvtBaseTreeEventManager.prototype._processDrill = function(obj, shiftKey) {
  // Fire a drill event if drilling is enabled
  if (obj.isDrillReplaceEnabled && obj.isDrillReplaceEnabled()) {
    // Delegate to the view to fire a drill event
    this._view.__drill(obj.getId(), shiftKey);
  }
};
/**
 * Abstract class for parsing XML for tree components.
 * @class
 * @constructor
 */
var DvtBaseTreeParser = function() {};

DvtObj.createSubclass(DvtBaseTreeParser, DvtObj, 'DvtBaseTreeParser');

// Top Level Attributes
DvtBaseTreeParser.ATTR_NODE_SELECTION = 'sel';
DvtBaseTreeParser.ATTR_SORTING = 'sort';
DvtBaseTreeParser.ATTR_SELECTED_IDS = 'selIds';
DvtBaseTreeParser.ATTR_EMPTY_TEXT = 'emptyText';

DvtBaseTreeParser.ATTR_LEGEND_SOURCE = 'ls';
DvtBaseTreeParser.ATTR_LEGEND_SIZE_VALUE = 'sv';
DvtBaseTreeParser.ATTR_LEGEND_COLOR_VALUE = 'cv';

DvtBaseTreeParser.ATTR_ANIMATION_DURATION = 'adu';
DvtBaseTreeParser.ATTR_ANIMATION_ON_DATA_CHANGE = 'adc';
DvtBaseTreeParser.ATTR_ANIMATION_ON_DISPLAY = 'adi';

DvtBaseTreeParser.ATTR_DROP_SITE_FILL_COLOR = 'dsf';
DvtBaseTreeParser.ATTR_DROP_SITE_BORDER_COLOR = 'dsb';
DvtBaseTreeParser.ATTR_DROP_SITE_OPACITY = 'dso';

// Top Level Attribute Values
DvtBaseTreeParser.NODE_SELECTION_NONE = 'none';
DvtBaseTreeParser.NODE_SELECTION_SINGLE = 'single';
DvtBaseTreeParser.NODE_SELECTION_MULTIPLE = 'multiple';
DvtBaseTreeParser.SORTING_ON = 'on';

// Node Attributes
DvtBaseTreeParser.ATTR_TEMPLATE_ID = 'T';
DvtBaseTreeParser.ATTR_MENU_ID = 'M';
DvtBaseTreeParser.ATTR_ATTR_GROUPS_COLOR = 'ag';
DvtBaseTreeParser.ATTR_ID = 'id';
DvtBaseTreeParser.ATTR_SIZE = 's';
DvtBaseTreeParser.ATTR_COLOR = 'c';
DvtBaseTreeParser.ATTR_PATTERN = 'p';
DvtBaseTreeParser.ATTR_LABEL = 'l';
DvtBaseTreeParser.ATTR_TOOLTIP = 'tt';
DvtBaseTreeParser.ATTR_LABEL_STYLE = 'ls';
DvtBaseTreeParser.ATTR_LABEL_DISPLAY = 'ld';
DvtBaseTreeParser.ATTR_TEMPLATE_NAME = 'tn';
DvtBaseTreeParser.ATTR_DRILLING = 'd';
DvtBaseTreeParser.ATTR_DISCLOSED = 'di';
DvtBaseTreeParser.ATTR_SELECTABLE = 'nsel';

// Attr Groups Attributes
DvtBaseTreeParser.ATTR_AG_GROUP = 'g';
DvtBaseTreeParser.ATTR_AG_GROUP_LABEL = 'l';
DvtBaseTreeParser.ATTR_AG_COLOR = 'c';
DvtBaseTreeParser.ATTR_AG_PATTERN = 'p';

DvtBaseTreeParser._ELEM_NODE = 'n';
DvtBaseTreeParser._ELEM_F = 'f';
DvtBaseTreeParser._ELEM_EL = 'el';

// Style properties
DvtBaseTreeParser.ANIMATION_UPDATE_COLOR = '-tr-animation-update-color';


/**
 * @param {DvtBaseTreeView} treeView
 * @protected
 */
DvtBaseTreeParser.prototype.Init = function(treeView) {
  this._view = treeView;
  this._parser = new DvtXmlParser(treeView.getCtx());

  // Continuous Attribute Groups Support
  this._minAGColor = Infinity;
  this._maxAGColor = -Infinity;
};


/**
 * Parses the specified XML String and returns the root node of the treemap.
 * @param {string} xmlString The String containing XML describing the component.
 * @return {object} An object containing the parsed properties
 */
DvtBaseTreeParser.prototype.parse = function(xmlString) 
{
  // For bug 18177964. Non-unicode characters in the xml need to be changed
  xmlString = xmlString.replace(/&Oslash;/gi, '\u00F8');

  // Parse the XML string and get the root node
  var rootNode = this._parser.parse(xmlString);

  // Parse attributes on the top level node
  var ret = this.ParseRootAttributes(rootNode);

  // Parse templates if exist
  var childNodes = rootNode.getChildNodes();
  ret.templates = this._parseTemplates(childNodes);

  // Parse the child nodes
  var i;
  this._nodeCount = 0;
  var xmlDataNodes = this._getChildNodesByName(childNodes, DvtBaseTreeParser._ELEM_NODE);
  var rootNodes = [];
  for (i = 0; i < xmlDataNodes.length; i++) {
    var root = this._parseDataNode(xmlDataNodes[i], ret.templates);
    if (root)
      rootNodes.push(root);
  }
  ret.nodeCount = this._nodeCount;

  // Create an artificial root if needed, or assign the root
  if (rootNodes.length == 1)
    ret.root = rootNodes[0];
  else
    ret.root = this._createArtificialRoot(this._view, rootNodes);

  // Parse any other nodes
  for (i = 0; i < childNodes.length; i++)
    this._parseNode(childNodes[i], ret);

  // Apply any parsed properties to the nodes
  this._applyParsedProperties(ret.root, ret);

  return ret;
};


/**
 * Creates a tree node for the specified view.
 * @param {DvtBaseTreeView} treeView
 * @param {object} props The properties for the node.
 * @return {DvtBaseTreeNode} The resulting tree component node.
 * @protected
 */
DvtBaseTreeParser.prototype.CreateNode = function(treeView, props) {
  // subclasses should override
  return null;
};


/**
 * Parses the attributes on the root node.
 * @param {DvtXmlNode} xmlNode The xml node defining the root
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtBaseTreeParser.prototype.ParseRootAttributes = function(xmlNode) {
  // The object that will be populated with parsed values and returned
  var ret = new Object();

  var nodeSelectionStr = xmlNode.getAttr(DvtBaseTreeParser.ATTR_NODE_SELECTION);
  if (nodeSelectionStr == DvtBaseTreeParser.NODE_SELECTION_NONE)
    ret.nodeSelection = null;
  else if (nodeSelectionStr == DvtBaseTreeParser.NODE_SELECTION_SINGLE)
    ret.nodeSelection = DvtSelectionHandler.TYPE_SINGLE;
  else
    ret.nodeSelection = DvtSelectionHandler.TYPE_MULTIPLE;

  ret.sorting = xmlNode.getAttr(DvtBaseTreeParser.ATTR_SORTING);

  // The selected ids are a comma delimited list
  var selectedIdsStr = xmlNode.getAttr(DvtBaseTreeParser.ATTR_SELECTED_IDS);
  if (selectedIdsStr)
    ret.selectedIds = selectedIdsStr.split(',');

  ret.emptyText = xmlNode.getAttr(DvtBaseTreeParser.ATTR_EMPTY_TEXT);

  // Legend
  ret.legendSource = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LEGEND_SOURCE);
  ret.sizeValueStr = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LEGEND_SIZE_VALUE);
  ret.colorValueStr = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LEGEND_COLOR_VALUE);

  // Animation
  var duration = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ANIMATION_DURATION);
  if (duration) // convert server duration to client duration
    ret.animationDuration = duration / 1000;

  ret.animationOnDataChange = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ANIMATION_ON_DATA_CHANGE);
  ret.animationOnDisplay = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ANIMATION_ON_DISPLAY);

  return ret;
};


/**
 * Parses the attributes on a tree node.
 * @param {DvtXmlNode} xmlNode The xml node defining the tree node
 * @return {object} An object containing the parsed properties
 * @protected
 */
DvtBaseTreeParser.prototype.ParseNodeAttributes = function(xmlNode) {
  // The object that will be populated with parsed values and returned
  var ret = new Object();

  // Parse this node's properties
  ret.templateId = xmlNode.getAttr(DvtBaseTreeParser.ATTR_TEMPLATE_ID);
  ret.menuId = xmlNode.getAttr(DvtBaseTreeParser.ATTR_MENU_ID);
  ret.agColor = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ATTR_GROUPS_COLOR);
  ret.id = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ID);
  ret.size = Number(xmlNode.getAttr(DvtBaseTreeParser.ATTR_SIZE));
  ret.color = xmlNode.getAttr(DvtBaseTreeParser.ATTR_COLOR);
  ret.pattern = xmlNode.getAttr(DvtBaseTreeParser.ATTR_PATTERN);
  ret.label = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LABEL);
  ret.tooltip = xmlNode.getAttr(DvtBaseTreeParser.ATTR_TOOLTIP);
  ret.labelDisplay = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LABEL_DISPLAY);
  ret.drilling = xmlNode.getAttr(DvtBaseTreeParser.ATTR_DRILLING);
  ret.disclosed = xmlNode.getAttr(DvtBaseTreeParser.ATTR_DISCLOSED) == 't' ? true : false;
  ret.selectable = xmlNode.getAttr(DvtBaseTreeParser.ATTR_SELECTABLE);

  var tn = xmlNode.getAttr(DvtBaseTreeParser.ATTR_TEMPLATE_NAME);
  if (tn) {
    ret.templateName = tn;
  }

  var labelStyle = xmlNode.getAttr(DvtBaseTreeParser.ATTR_LABEL_STYLE);
  if (labelStyle)
    ret.labelStyle = new DvtCSSStyle(labelStyle);

  // Keep track of the min and max attribute groups color values
  if (ret.agColor != null) {
    this._maxAGColor = Math.max(this._maxAGColor, ret.agColor);
    this._minAGColor = Math.min(this._minAGColor, ret.agColor);
  }

  return ret;
};


/**
 * Creates an artificial root above the given root nodes.
 * @param {DvtBaseTreeView} treeView
 * @param {array} rootNodes The array of nodes at the root level
 * @return {DvtBaseTreeNode} The resulting artificial tree component root node.
 * @private
 */
DvtBaseTreeParser.prototype._createArtificialRoot = function(treeView, rootNodes) {
  // Calculate the sum of the child sizes
  var size = 0;
  for (var i = 0; i < rootNodes.length; i++) {
    size += rootNodes[i].getSize();
  }

  // Create the actual node and set the children
  var props = {size: size, bArtificialRoot: true, disclosed: true};
  var artificialRoot = this.CreateNode(treeView, props);
  artificialRoot.setChildNodes(rootNodes);
  return artificialRoot;
};


/**
 * Recursively parses the XML nodes, creating tree component nodes.
 * @param {DvtXmlNode} xmlNode The XML node to parse.
 * @return {DvtBaseTreeNode} The resulting tree component node.
 * @private
 */
DvtBaseTreeParser.prototype._parseDataNode = function(xmlNode, templates) {
  if (!xmlNode || xmlNode.getName() != DvtBaseTreeParser._ELEM_NODE)
    return null;

  // Increment the count
  this._nodeCount++;

  // Parse the attributes and create the node
  var props = this.ParseNodeAttributes(xmlNode);
  var treeNode = this.CreateNode(this._view, props, templates);

  // Parse the children if the node is disclosed
  treeNode.setChildNodes(this._parseChildren(xmlNode, treeNode, templates));

  return treeNode;
};


/**
 * Parses the children of the given node, returning the Array of results.
 * @param {DvtXmlNode} xmlNode the XML node whose children will be parsed
 * @return {array} the Array of resulting DvtBaseTreeNodes
 * @private
 */
DvtBaseTreeParser.prototype._parseChildren = function(xmlNode, treeNode, templates) {
  var treeNodes = new Array();

  //Bug 14059366 - TREEMAP ADVANCED NODE CONTENT DEMO NOT DISPLAYING PROPERLY
  // if(!treeNode.isDisclosed())
  //   return treeNodes;

  var childNodes = xmlNode.getChildNodes();
  for (var i = 0; i < childNodes.length; i++) {
    var child = childNodes[i];
    if (child) {
      // has EL data?
      if (child.getName() == DvtBaseTreeParser._ELEM_EL) {
        if (templates) {
          this._parseELData(treeNode, child);
        }
      }
      else {
        //Bug 14059366 - TREEMAP ADVANCED NODE CONTENT DEMO NOT DISPLAYING PROPERLY
        // Return an empty array if children are not disclosed
        if (treeNode.isDisclosed())
          treeNodes.push(this._parseDataNode(child, templates));
      }
    }
  }

  return treeNodes;
};


/**
 * Parses the specified xml node.
 * @param {DvtXmlNode} xmlNode The xml node containing the node templates.
 * @param {object} ret The object containing the parsed state of the component.
 * @private
 */
DvtBaseTreeParser.prototype._parseNode = function(xmlNode, ret) {
  if (!xmlNode)
    return;

  var name = xmlNode.getName();
  if (name == 'spb') {
    var showPopupBehavior = this._parseShowPopupBehavior(xmlNode, ret);
    if (!ret.showPopupBehaviors)
      ret.showPopupBehaviors = new Array();
    ret.showPopupBehaviors.push(showPopupBehavior);
  }
  else if (name == 'menus') {
    // Make sure the handler is created
    if (!ret.contextMenuHandler)
      ret.contextMenuHandler = new DvtContextMenuHandler(this._view.getCtx());

    // Add this definition to the handler
    ret.contextMenuHandler.add(xmlNode);
  }
  else if (name == 'ag')
    this._parseAttrGroups(xmlNode, ret);
  else if (name == 'styles')
    ret.styles = this._parseStyles(xmlNode, ret);
  else if (name == 'a')
    ret.ancestors = this._parseAncestors(xmlNode);
  else if (name == 'resources')
    ret.resources = this._parseResources(xmlNode);
};


/**
 * Parses a showPopupBehavior element.
 * @param {DvtXmlNode} xmlNode The xml node defining the showPopupBehavior.
 * @param {object} ret The object containing the parsed state of the component.
 * @private
 */
DvtBaseTreeParser.prototype._parseShowPopupBehavior = function(xmlNode, ret) {
  // First parse the showPopupBehavior
  var showPopupBehavior = DvtShowPopupBehavior.newInstance(xmlNode);
  var templateId = xmlNode.getAttr(DvtBaseTreeParser.ATTR_TEMPLATE_ID);

  // Then store in it the ret object
  if (!ret.spb)
    ret.spb = new Object();

  if (!ret.spb[templateId])
    ret.spb[templateId] = new Array();

  ret.spb[templateId].push(showPopupBehavior);
};


/**
 * Parses an attributeGroups element.
 * @param {DvtXmlNode} xmlNode The xml node defining the attr groups.
 * @param {object} ret The object containing the parsed state of the component.
 * @private
 */
DvtBaseTreeParser.prototype._parseAttrGroups = function(xmlNode, ret) {
  // Parse and create an entry for this attribute groups xml
  var attrGroups;
  var id = xmlNode.getAttr(DvtBaseTreeParser.ATTR_ID);
  var templateId = xmlNode.getAttr(DvtBaseTreeParser.ATTR_TEMPLATE_ID);
  var attrType = xmlNode.getAttr('t');

  if (attrType == 'continuous') {
    // Continuous attribute groups support
    var minValue = xmlNode.getAttr('minValue');
    var maxValue = xmlNode.getAttr('maxValue');
    var minLabel = xmlNode.getAttr('minLabel');
    var maxLabel = xmlNode.getAttr('maxLabel');

    // The ramp is separated by semicolons
    var rampStr = xmlNode.getAttr('ramp');
    var ramp = rampStr.split(';');

    // Support implicit min/max values
    if (minValue == null)
      minValue = this._minAGColor;
    if (maxValue == null)
      maxValue = this._maxAGColor;

    // Create the attribute groups handler and pass it with the parsed properties
    attrGroups = new DvtContinuousAttrGroups(minValue, maxValue, minLabel, maxLabel, ramp);
  }
  else {
    // Discrete attribute groups support
    attrGroups = new DvtDiscreteAttrGroups();

    // Loop through the child nodes to find the mapping results
    var childNodes = xmlNode.getChildNodes();
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i];
      if (child) {
        var group = child.getAttr(DvtBaseTreeParser.ATTR_AG_GROUP);
        var groupLabel = child.getAttr(DvtBaseTreeParser.ATTR_AG_GROUP_LABEL);
        var params = {color: child.getAttr(DvtBaseTreeParser.ATTR_AG_COLOR),
          pattern: child.getAttr(DvtBaseTreeParser.ATTR_AG_PATTERN)};
        attrGroups.add(group, groupLabel, params);
      }
    }
  }

  // Make sure the attrGroups array is created
  if (!ret.attrGroups)
    ret.attrGroups = [];

  // Add the attr groups to the array
  ret.attrGroups.push({attrGroups: attrGroups, templateId: templateId, id: id});
};


/**
 * Recursively applies parsed properties onto the nodes.
 * @param {DvtBaseTreeNode} node The current node.
 * @param {object} ret The object containing the parsed state of the component.
 */
DvtBaseTreeParser.prototype._applyParsedProperties = function(node, ret) {
  if (!node)
    return;

  // Template ID is used to identify associated behaviors
  var templateId = node.getTemplateId();

  // ShowPopupBehavior
  if (ret.spb) {
    var behaviors = ret.spb[templateId];
    if (behaviors)
      node.setShowPopupBehaviors(behaviors);
  }

  // Attribute Groups
  if (ret.attrGroups) {
    // Iterate through and find the associated attribute groups definition
    for (var i = 0; i < ret.attrGroups.length; i++) {
      var agDef = ret.attrGroups[i];
      if (agDef.templateId == templateId) {
        // Only continuous attribute groups are processed here, as discrete attribute
        // groups are processed in the server and the results baked into the xml.
        if (agDef.attrGroups instanceof DvtContinuousAttrGroups)
          node.processAttrGroups(agDef.attrGroups);

        break;
      }
    }
  }

  // Recurse
  var children = node.getChildNodes();
  if (children) {
    for (var childIndex = 0; childIndex < children.length; childIndex++) {
      this._applyParsedProperties(children[childIndex], ret);
    }
  }
};


/**
 * Get the child nodes with the name specified
 * @param {array} array of child nodes
 * @return {array} array of the child nodes with the name specified
 * @private
 */
DvtBaseTreeParser.prototype._getChildNodesByName = function(childNodes, name) {
  var nodes = [];
  for (var i = 0; i < childNodes.length; i++) {
    var child = childNodes[i];

    if (child && child.getName() == name) {
      nodes.push(child);
    }
  }
  return nodes;
};

DvtBaseTreeParser.prototype._parseStyles = function(xmlNode, ret) {
  var styles = new Object();

  var topStyle = new DvtCSSStyle(xmlNode.getAttr('top'));
  styles[DvtBaseTreeView.BACKGROUND_STYLE] = topStyle;
  styles[DvtBaseTreeNode.ANIMATION_UPDATE_COLOR_STYLE] = topStyle.getStyle(DvtBaseTreeParser.ANIMATION_UPDATE_COLOR);

  var nodeStyle = new DvtCSSStyle(xmlNode.getAttr('node'));
  styles[DvtBaseTreeNode.LABEL_TEXT_DEFAULT_STYLE] = nodeStyle;

  var nodeHoverStyle = nodeStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('node-hover')));
  var nodeSelectedStyle = nodeStyle.clone().merge(new DvtCSSStyle(xmlNode.getAttr('node-selected')));

  // Parse drop site feedback
  ret.dropSiteFillColor = xmlNode.getAttr(DvtBaseTreeParser.ATTR_DROP_SITE_FILL_COLOR);
  ret.dropSiteBorderColor = xmlNode.getAttr(DvtBaseTreeParser.ATTR_DROP_SITE_BORDER_COLOR);
  ret.dropSiteOpacity = xmlNode.getAttr(DvtBaseTreeParser.ATTR_DROP_SITE_OPACITY);

  // Additional support
  this.ParseAdditionalNodeStyles(nodeStyle, nodeHoverStyle, nodeSelectedStyle, styles);
  this.ParseAdditionalStyles(xmlNode, styles);

  var textStyle = new DvtCSSStyle(xmlNode.getAttr('rootText'));
  styles[DvtBaseTreeView.TEXT_STYLE] = textStyle;

  var attrTypeStyle = new DvtCSSStyle(xmlNode.getAttr('attrType'));
  styles[DvtBaseTreeView.ATTRIBUTE_TYPE_STYLE] = attrTypeStyle;

  var attrValueStyle = new DvtCSSStyle(xmlNode.getAttr('attrValue'));
  styles[DvtBaseTreeView.ATTRIBUTE_VALUE_STYLE] = attrValueStyle;

  var drillTextStyle = new DvtCSSStyle(xmlNode.getAttr('drillText'));
  styles[DvtBaseTreeView.DRILL_TEXT_STYLE] = drillTextStyle;

  var currentTextStyle = new DvtCSSStyle(xmlNode.getAttr('currentText'));
  styles[DvtBaseTreeView.CURRENT_TEXT_STYLE] = currentTextStyle;

  return styles;
};

DvtBaseTreeParser.prototype.ParseAdditionalNodeStyles = function(nodeStyle, nodeHoverStyle, nodeSelectedStyle, styles) {
};

DvtBaseTreeParser.prototype.ParseAdditionalStyles = function(xmlNode, styles) {
};


/**
 * Parses the template if exists
 * @param {DvtXmlNode} xmlNode The xml node containing the node template.
 * @return {Object} The object containing the parsed state of the tempaltes.
 * @private
 */
DvtBaseTreeParser.prototype._parseTemplates = function(childNodes) {

  // parse template, ex:
  // <f name="content">
  //     <ot value="Fixed Facet" id="j_id_id10"/>
  // </f>

  // <f name="content, 2">
  //     <ot id="j_id_id14" value="#{b1}"/>
  // </f>

  var template = this._getChildNodesByName(childNodes, DvtBaseTreeParser._ELEM_F);
  var count = template.length;
  if (count > 0) {
    var temp;
    var tempName;
    var templateMap = {};
    for (var i = 0; i < count; i++) {
      temp = template[i];
      tempName = temp.getAttr('name');
      templateMap[tempName] = DvtAfComponentFactory.parseXml(temp);
    }
    return templateMap;
  }
  return null;
};


/**
 * Parses the EL data if exists
 * @param {DvtXmlNode} xmlNode The xml node containing the node template.
 * @return {afComponent} The object containing the parsed state of the tempalte.
 * @private
 */
DvtBaseTreeParser.prototype._parseELData = function(treeNode, xmlNode) {
  // content facet: save EL attributes to be used in stamping afComponent
  if (treeNode.SetElAttributes) {
    treeNode.SetElAttributes(DvtPropMap.toELContext(xmlNode));
  }
};


/**
 * Parses an ancestors element.
 * @param {DvtXmlNode} xmlNode The xml node defining the ancestors.
 * @return {array} The array of ancestors.
 * @private
 */
DvtBaseTreeParser.prototype._parseAncestors = function(xmlNode) {
  // Ancestors are defined in order from direct ancestor to oldest ancestor
  var ancestors = [];

  // Iterate through the ancestors and retrieve their information
  var childNodes = xmlNode.getChildNodes();
  for (var i = 0; i < childNodes.length; i++) {
    var id = childNodes[i].getAttr(DvtBaseTreeParser.ATTR_ID);
    var text = childNodes[i].getAttr(DvtBaseTreeParser.ATTR_LABEL);
    ancestors.push({id: id, text: text});
  }

  return ancestors;
};


/**
 * Parses a resources element.
 * @param {DvtXmlNode} xmlNode The xml node defining the resources.
 * @return {object} The map containing resources for this component.
 * @private
 */
DvtBaseTreeParser.prototype._parseResources = function(xmlNode) {
  var resources = {};

  // Iterate through the array of attributes
  var attrs = xmlNode.getAttributes();
  for (var i = 0; i < attrs.length; i++) {
    var name = attrs[i].name;
    var value = attrs[i].value;
    resources[name] = value;
  }

  return resources;
};


/**
 * Applies the specified disclosed flag to the node with the given id to the xml string.
 * @param {string} The original xml string.
 * @param {string} The id of the node to update.
 * @param {boolean} The new disclosure state.
 * @return {string} The resulting xml string.
 */
DvtBaseTreeParser.applyDisclosure = function(xmlString, nodeId, bDisclosed) {
  // Find the substring of the xml for the node
  var startIndex = xmlString.indexOf('<n id="' + nodeId);
  var endIndex = xmlString.indexOf('>', startIndex);
  var nodeString = xmlString.substring(startIndex, endIndex);

  // Update the disclosed flag
  var disclosedIndex = nodeString.indexOf(DvtBaseTreeParser.ATTR_DISCLOSED + '=');
  if (disclosedIndex > -1) {
    if (bDisclosed)
      nodeString = nodeString.replace(DvtBaseTreeParser.ATTR_DISCLOSED + '="f"', DvtBaseTreeParser.ATTR_DISCLOSED + '="t"');
    else
      nodeString = nodeString.replace(DvtBaseTreeParser.ATTR_DISCLOSED + '="t"', DvtBaseTreeParser.ATTR_DISCLOSED + '="f"');
  }
  else
    nodeString += DvtBaseTreeParser.ATTR_DISCLOSED + (bDisclosed ? '="t"' : '="f"');

  // Reconstruct the xml string and return
  var prefix = xmlString.substring(0, startIndex);
  var suffix = xmlString.substring(endIndex);
  var ret = prefix + nodeString + suffix;
  return ret;
};
/**
 * Base class for tree component nodes.
 * @class The base class for tree component nodes.
 * @constructor
 * @implements {DvtTooltipSource}
 * @implements {DvtSelectable}
 * @implements {DvtPopupSource}
 * @implements {DvtContextMenuSource}
 * @implements {DvtKeyboardNavigable}
 * @implements {DvtDraggable}
 */
var DvtBaseTreeNode = function() {};

DvtObj.createSubclass(DvtBaseTreeNode, DvtObj, 'DvtBaseTreeNode');

DvtBaseTreeNode._ANIMATION_DELETE_PRIORITY = 0;   // The order in which the delete animation occurs
DvtBaseTreeNode._ANIMATION_UPDATE_PRIORITY = 1;   // The order in which the update animation occurs
DvtBaseTreeNode._ANIMATION_INSERT_PRIORITY = 2;   // The order in which the insert animation occurs
DvtBaseTreeNode._ANIMATION_UPDATE_COLOR = null;   // The color that the node will flash on update, none by default

DvtBaseTreeNode._DEFAULT_FILL_COLOR = '#000000';
DvtBaseTreeNode._DEFAULT_TEXT_SIZE = 11;
DvtBaseTreeNode._DEFAULT_TEMPLATE_NAME = 'content';
DvtBaseTreeNode._ROOT_TEMPLATE_NAME = 'rootContent';


DvtBaseTreeNode.__NODE_SELECTED_SHADOW = new DvtShadow('#000000', 2, 5, 5, 45, 0.5);

// Style
DvtBaseTreeNode.ANIMATION_UPDATE_COLOR_STYLE = 'ANIMATION_UPDATE_COLOR_STYLE';
DvtBaseTreeNode.LABEL_TEXT_DEFAULT_STYLE = 'LABEL_TEXT_DEFAULT_STYLE';


/**
 * @param {DvtBaseTreeView} treeView The DvtBaseTreeView that owns this node.
 * @param {object} props The properties for the node.
 * @protected
 */
DvtBaseTreeNode.prototype.Init = function(treeView, props, templates) 
{
  this._view = treeView;
  this._templateId = props.templateId;
  this._menuId = props.menuId;
  this._agColor = props.agColor;

  this._id = props.id;
  this._size = props.size;
  this._color = props.color ? props.color : DvtBaseTreeNode._DEFAULT_FILL_COLOR;
  this._pattern = props.pattern;
  this._textStr = props.label;
  this._datatip = props.tooltip;
  this._labelStyle = props.labelStyle;
  this._drilling = props.drilling;
  this._disclosed = props.disclosed;

  // Whether this node is an artificial root
  this._bArtificialRoot = props.bArtificialRoot;

  // Node alpha is always 1 unless during animation
  this._alpha = 1;

  // reference to last visited child
  this._lastVisitedChild = null;

  this._isShowingKeyboardFocusEffect = false;

  //save template info
  this._templates = templates;

  //if template name is specified (switcher case)
  if (props.templateName) {
    this._setTemplate(props.templateName);
  }
  else if (templates && templates[DvtBaseTreeNode._DEFAULT_TEMPLATE_NAME]) {
    this._setTemplate(DvtBaseTreeNode._DEFAULT_TEMPLATE_NAME);
  }
  else if (templates && templates[DvtBaseTreeNode._ROOT_TEMPLATE_NAME])
    this._setTemplate(DvtBaseTreeNode._ROOT_TEMPLATE_NAME);

  this.IsHover = false;

  // Whether or not this node will have the ability to be selectable
  this._selectable = props.selectable;

  this.Bundle = treeView.getBundle();
};


/**
 * Sets the Array containing all children of this node.
 * @param {array} children The array of children for this node.
 */
DvtBaseTreeNode.prototype.setChildNodes = function(children) {
  // Set this node as the parent of the children
  if (children != null) {
    for (var i = 0; i < children.length; i++)
      children[i]._parent = this;
  }

  // Store the children
  this._children = children;
};


/**
 * Returns the Array containing all children of this node.
 * @return {array} The array of children belonging to this node.
 */
DvtBaseTreeNode.prototype.getChildNodes = function() {
  return this._children;
};


/**
 * Returns an Array containing all the descendants of this node
 * @return {Array} The array of descendants of this node
 */
DvtBaseTreeNode.prototype.getDescendantNodes = function()
{
  var descendants = [];
  var childDescendants;
  var child;

  if (!this.hasChildren())
    return descendants;

  for (var i = 0; i < this._children.length; i++)
  {
    child = this._children[i];
    childDescendants = child.getDescendantNodes();
    descendants.push(child);
    descendants = descendants.concat(childDescendants);
  }

  return descendants;
};


/**
 * Sets a reference to the last visited child.
 *
 * @param {DvtBaseTreeNode} lastVisited
 * @protected
 */
DvtBaseTreeNode.prototype.SetLastVisitedChild = function(lastVisited)
{
  this._lastVisitedChild = lastVisited;
};


/**
 * Returns the last visited child
 *
 * @return {DvtBaseTreeNode} The last visited child
 * @protected
 */
DvtBaseTreeNode.prototype.GetLastVisitedChild = function() 
{
  return this._lastVisitedChild;
};


/**
 * Updates the last visited child on the given node's parent to this node
 * @protected
 */
DvtBaseTreeNode.prototype.MarkAsLastVisitedChild = function()
{
  var parent = this.GetParent();
  if (parent)
  {
    parent.SetLastVisitedChild(this);
  }
};


/**
 * Returns true if this node is a descendant of the specified node.
 * @param {DvtBaseTreeNode} node
 */
DvtBaseTreeNode.prototype.isDescendantOf = function(node) {
  if (!node || !this.GetParent())
    return false;
  else if (this.GetParent() == node)
    return true;
  else
    return this.GetParent().isDescendantOf(node);
};


/**
 * Returns an Array containing all nodes that are at the given depth away from the current node
 * @param {DvtBaseTreeNode} root
 * @param {Number} depth
 * @return {Array}
 */
DvtBaseTreeNode.prototype.GetNodesAtDepth = function(root, depth)
{
  var returnArray = [];
  if (depth < 0)
    return returnArray;

  if (depth == 0)
    return [this];
  else if (root.hasChildren())
  {
    var children = root.getChildNodes();
    var child;
    for (var i = 0; i < children.length; i++)
    {
      child = children[i];
      returnArray = returnArray.concat(child.GetNodesAtDepth(child, depth - 1));
    }
  }

  return returnArray;
};


/**
 * Returns an Array containing all the leaves stemming from the tree rooted at this node
 * @return {Array}
 */
DvtBaseTreeNode.prototype.getLeafNodes = function()
{
  var leafNodes = [];
  var childLeafNodes;
  var child;

  if (!this.hasChildren())
    return [this];

  for (var i = 0; i < this._children.length; i++)
  {
    child = this._children[i];
    childLeafNodes = child.getLeafNodes();
    leafNodes = leafNodes.concat(childLeafNodes);
  }

  return leafNodes;
};


/**
 * Returns the node with the given id, if it is in the tree with the given root
 * @param {DvtBaseTreeNode} root
 * @param {String} id
 * @return {DvtBaseTreeNode} The node with the given id, or null if no node with the given id is found
 */
DvtBaseTreeNode.getNodeById = function(root, id)
{
  if (root.getId() == id)
  {
    return root;
  }
  else
  {
    // recursively call getNodeById on each of the children
    var node = null;
    var children = root.getChildNodes();
    var length = children.length;
    var child = null;

    for (var i = 0; i < length; i++)
    {
      child = children[i];
      node = DvtBaseTreeNode.getNodeById(child, id);
      if (node)
      {
        // if we found the node, return it, otherwise check the next child
        return node;
      }
    }
    return null;
  }
};


/**
 * Returns the component that owns this node.
 * @return {DvtBaseTreeView} The component that owns this node.
 */
DvtBaseTreeNode.prototype.getView = function() {
  return this._view;
};


/**
 * Returns the id of the template for this node.
 * @return {string} The id of the template for this node.
 */
DvtBaseTreeNode.prototype.getTemplateId = function() {
  return this._templateId;
};


/**
 * Returns the id for this node.
 * @return {string} The id for this node.
 */
DvtBaseTreeNode.prototype.getId = function() {
  return this._id;
};


/**
 * Returns the relative size of this node.
 * @return {Number} The relative size of this node.
 */
DvtBaseTreeNode.prototype.getSize = function() {
  // Note: Called by automation APIs
  return this._size;
};


/**
 * Returns the color of this node.
 * @return {String} The color of this node.
 */
DvtBaseTreeNode.prototype.getColor = function() {
  // Note: Called by automation APIs
  return this._color;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getDatatip = function() {
  // Note: Called by automation APIs
  return this._datatip;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getDatatipColor = function() {
  return this._color;
};


/**
 * Returns the alpha for this node.
 * @return {number} The alpha for this node.
 */
DvtBaseTreeNode.prototype.getAlpha = function() {
  // Note: This API is called by the fadeIn and fadeOut animations
  return this._alpha;
};


/**
 * Specifies the alpha for this node.
 * @param {number} alpha The alpha for this node.
 */
DvtBaseTreeNode.prototype.setAlpha = function(alpha) {
  // Note: This API is called by the fadeIn and fadeOut animations
  this._alpha = alpha;

  if (this._shape)
    this._shape.setAlpha(this._alpha);
};


/**
 * Returns true if the children of this node are disclosed.
 * @return {boolean}
 * @protected
 */
DvtBaseTreeNode.prototype.isDisclosed = function() {
  return this._disclosed;
};


/**
 * Returns true if this node is the artificial root of the tree.
 * @return {boolean}
 */
DvtBaseTreeNode.prototype.isArtificialRoot = function() {
  return this._bArtificialRoot;
};


/**
 * Returns true if drill replace is enabled for this node.
 * @return {boolean}
 */
DvtBaseTreeNode.prototype.isDrillReplaceEnabled = function() {
  return this._drilling == 'r' || this._drilling == 'ir';
};


/**
 * Specifies the array of showPopupBehaviors for this node.
 * @param {array} behaviors The array of showPopupBehaviors for this node.
 */
DvtBaseTreeNode.prototype.setShowPopupBehaviors = function(behaviors) {
  this._showPopupBehaviors = behaviors;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getShowPopupBehaviors = function() {
  return this._showPopupBehaviors;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getContextMenuId = function() {
  return this._menuId;
};


/**
 * Renders this node.
 * @param {DvtContainer} container The container to render in.
 */
DvtBaseTreeNode.prototype.render = function(container) {
  // subclasses should override
};


/**
 * Renders the child nodes of this node.
 * @param {DvtContainer} container The container to render in.
 */
DvtBaseTreeNode.prototype.renderChildren = function(container) {
  // Render all children of this node
  var children = this.getChildNodes();
  if (children != null) {
    for (var i = 0; i < children.length; i++) {
      children[i].render(container);
    }
  }
};


/**
 * Updates this node and its children with values from the attribute groups.
 * @param {DvtAttrGroups} ag
 */
DvtBaseTreeNode.prototype.processAttrGroups = function(ag) {
  var color = ag.get(this._agColor);
  if (color)
    this._color = color;
};


/**
 * Default implementation of getNextNavigable. Returns this node as the next navigable.  Subclasses should override
 * @override
 */
DvtBaseTreeNode.prototype.getNextNavigable = function(event) 
{
  // subclasses should override
  this.MarkAsLastVisitedChild();
  return this;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace) 
{
  // subclasses should override
  return new DvtRectangle(0, 0, 0, 0);
};

/**
 * @override
 */
DvtBaseTreeNode.prototype.getTargetElem = function() 
{
  // subclasses should override
  return null;
};

/**
 * @override
 */
DvtBaseTreeNode.prototype.showKeyboardFocusEffect = function() 
{
  this._isShowingKeyboardFocusEffect = true;

  this.showHoverEffect();
  if (this.handleMouseOver)
    this.handleMouseOver();

};


/**
 * @override
 */
DvtBaseTreeNode.prototype.hideKeyboardFocusEffect = function()
{
  // Hide the hover effect if it was shown in response to keyboard focus
  if (this._isShowingKeyboardFocusEffect) {
    this._isShowingKeyboardFocusEffect = false;
    this.hideHoverEffect();
  }

  if (this.handleMouseOut)
    this.handleMouseOut();
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.isShowingKeyboardFocusEffect = function() 
{
  return this._isShowingKeyboardFocusEffect;
};


/**
 * Handles a mouse over event on the node.
 */
DvtBaseTreeNode.prototype.handleMouseOver = function() {
  this.IsHover = true;
};


/**
 * Handles a mouse out event on the node.
 */
DvtBaseTreeNode.prototype.handleMouseOut = function() {
  this.IsHover = false;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.isSelectable = function() {
  return this._selectable != 'off' && this.getView().__getNodeSelection() != null;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.isSelected = function() {
  return this._selected;
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.setSelected = function(selected) {
  // Store the selection state
  this._selected = selected;
  this.UpdateAriaLabel();
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.showHoverEffect = function() {
  // subclasses should override
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.hideHoverEffect = function() {
  // subclasses should override
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.isDragAvailable = function(clientIds) {
  return this.getView().__isDragAvailable(clientIds);
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getDragTransferable = function(mouseX, mouseY) {
  return this.getView().__getDragTransferable(this);
};


/**
 * @override
 */
DvtBaseTreeNode.prototype.getDragFeedback = function(mouseX, mouseY) {
  return this.getView().__getDragFeedback();
};


/**
 * Returns a displayable used for drop site feedback.
 * @return {DvtDisplayable}
 */
DvtBaseTreeNode.prototype.getDropSiteFeedback = function() {
  return null;
};


/**
 * Returns the displayable for this node.
 */
DvtBaseTreeNode.prototype.__getDisplayable = function() {
  return this._shape;
};


/**
 * Returns the bounds upon which the popup fired by the given behavior should align.
 * @param {DvtShowPopupBehavior} behavior The DvtShowPopupBehavior that is firing the popup.
 * @return {DvtRectangle} The rectangle that the popup should align to.
 */
DvtBaseTreeNode.prototype.getPopupBounds = function(behavior) {
  return null; // subclasses can override, or else default positioning will occur
};


/**
 * Returns true if this node contains the given coordinates.
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
DvtBaseTreeNode.prototype.contains = function(x, y) {
  return false; // subclasses should override
};


/**
 * Returns the node under the given point, if it exists in the subtree of this node.
 * @param {number} x
 * @param {number} y
 * @return {DvtBaseTreeNode}
 */
DvtBaseTreeNode.prototype.getNodeUnderPoint = function(x, y) {
  return null; // subclasses should override
};


/**
 * Returns the layout parameters for the current animation frame.
 * @return {array} The array of layout parameters.
 * @protected
 */
DvtBaseTreeNode.prototype.GetAnimationParams = function() {
  return []; // subclasses should override
};


/**
 * Sets the layout parameters for the current animation frame.
 * @param {array} params The array of layout parameters.
 * @protected
 */
DvtBaseTreeNode.prototype.SetAnimationParams = function(params) {
  // subclasses should override
};


/**
 * Creates the update animation for this node.
 * @param {DvtBaseTreeAnimationHandler} handler The animation handler, which can be used to chain animations.
 * @param {DvtBaseTreeNode} oldNode The old node state to animate from.
 */
DvtBaseTreeNode.prototype.animateUpdate = function(handler, oldNode) {
  // Drilling animations are handled across all nodes up front, no recursion needed
  if (!handler.isDrillAnimation()) {
    // Recurse and animate the children
    handler.constructAnimation(oldNode.getChildNodes(), this.getChildNodes());
  }

  // Create the animator for this node
  var startState = oldNode.GetAnimationParams();
  var endState = this.GetAnimationParams();
  var nodePlayable;
  if (!DvtArrayUtils.equals(startState, endState)) {
    // Only create if state changed
    nodePlayable = new DvtCustomAnimation(this.getView().getCtx(), this, this.getView().__getAnimationDuration());
    nodePlayable.getAnimator().addProp(DvtAnimator.TYPE_NUMBER_ARRAY, this, this.GetAnimationParams, this.SetAnimationParams, endState);

    // Create the playable
    handler.add(nodePlayable, DvtBaseTreeNode._ANIMATION_UPDATE_PRIORITY);

    // Determine whether size and color changed.  This must be done before start state is set.
    var bSizeChanged = (this._size != oldNode._size);
    var bColorChanged = (DvtColorUtils.getRGBA(this._color) != DvtColorUtils.getRGBA(oldNode._color));

    // Initialize the start state
    this.SetAnimationParams(startState);

    var animationUpdateColor = this.getResolvedColor(DvtBaseTreeNode._ANIMATION_UPDATE_COLOR, DvtBaseTreeNode.ANIMATION_UPDATE_COLOR_STYLE);
    // If the data changed, flash directly into the update color.
    if (animationUpdateColor && (bSizeChanged || bColorChanged))
      this._color = animationUpdateColor;
  }
};


/**
 * Creates the insert animation for this node.
 * @param {DvtBaseTreeAnimationHandler} handler The animation handler, which can be used to chain animations.
 */
DvtBaseTreeNode.prototype.animateInsert = function(handler) {
  // Animate if this is a data change animation (not drilling), or if this node is not an
  // ancestor of the old root in a drilling animation.  The ancestors are not animated
  // so that they appear at the beginning of the animation.
  if (!handler.isDrillAnimation() || !handler.isAncestorInsert(this)) {
    // Initialize the start state
    this.setAlpha(0);

    var anim = new DvtAnimFadeIn(this.getView().getCtx(), this, this.getView().__getAnimationDuration());
    handler.add(anim, DvtBaseTreeNode._ANIMATION_INSERT_PRIORITY);

    // Recurse to children
    for (var i = 0; i < this._children.length; i++) {
      this._children[i].animateInsert(handler);
    }
  }
};


/**
 * Creates the delete animation for this node.
 * @param {DvtBaseTreeAnimationHandler} handler The animation handler, which can be used to chain animations.
 * @param {DvtContainer} container The container where deletes should be moved for animation.
 */
DvtBaseTreeNode.prototype.animateDelete = function(handler, container) {
  // Move to the new container, since the old container may be removed
  container.addChild(this._shape);

  // Create the animation
  var anim = new DvtAnimFadeOut(this.getView().getCtx(), this, this.getView().__getAnimationDuration());
  handler.add(anim, DvtBaseTreeNode._ANIMATION_DELETE_PRIORITY);

  // Drilling animations are handled across all nodes up front, no recursion needed
  if (!handler.isDrillAnimation()) {
    // Recurse to children
    for (var i = 0; i < this._children.length; i++) {
      this._children[i].animateDelete(handler, container);
    }
  }
};


/**
 * Returns true if this node has children.
 * @return {boolean} true if this node has children.
 */
DvtBaseTreeNode.prototype.hasChildren = function() {
  return (this._children != null && this._children.length > 0);
};


/**
 * Returns the parent node for this node.
 * @return {DvtBaseTreeNode} The parent node.
 * @protected
 */
DvtBaseTreeNode.prototype.GetParent = function() {
  return this._parent;
};


/**
 * Returns the depth of the node in the tree.
 * @return {number} The depth of the node.
 * @protected
 */
DvtBaseTreeNode.prototype.GetDepth = function() {
  var depth = 0;
  var parent = this.GetParent();
  while (parent) {
    depth++;
    parent = parent.GetParent();
  }
  return depth;
};


/**
 * Returns the DvtFill to use for this node.
 * @return {DvtFill}
 */
DvtBaseTreeNode.prototype.GetFill = function() {
  if (this._pattern)
    return new DvtPatternFill(this._pattern, this._color);
  else
    return new DvtSolidFill(this._color);
};


/**
 * Calculates and returns a color for node text that will provide a
 * good contrast with the given color.
 * @param {DvtBaseTreeNode} node
 * @protected
 */
DvtBaseTreeNode.GetNodeTextColor = function(node) {
  if (node._pattern) {
    // Use black for all patterned nodes against white backgrounds
    return '#000000';
  }
  else {
    return DvtColorUtils.getContrastingTextColor(node._color);
  }
};

DvtBaseTreeNode.prototype.ApplyLabelTextStyle = function(text) {
  var styleDef = DvtBaseTreeNode.LABEL_TEXT_DEFAULT_STYLE;
  var defaultFillColor = DvtBaseTreeNode.GetNodeTextColor(this);
  text.setSolidFill(defaultFillColor);
  var textStyle = new Array();
  textStyle.push(this._view.__getStyles()[styleDef]);
  if (this._labelStyle)
    textStyle.push(this._labelStyle);
  text.setCSSStyle(DvtCSSStyle.mergeStyles(textStyle));

  // In high contrast mode, override the app settings and use the default colors
  if (DvtAgent.isHighContrast())
    text.setSolidFill(defaultFillColor);
};

DvtBaseTreeNode.prototype.getResolvedColor = function(defaultColor, styleColorKey) {
  var color = defaultColor;
  var colorValue = this._view.__getStyles()[styleColorKey];
  if (colorValue)
    color = colorValue;
  return color;
};

DvtBaseTreeNode.prototype.GetTextSize = function() {
  var size = DvtBaseTreeNode._DEFAULT_TEXT_SIZE;
  var textStyle = this._view.__getStyles()[DvtBaseTreeNode.LABEL_TEXT_DEFAULT_STYLE];
  var fontSize = textStyle.getFontSize();
  if (fontSize) {
    size = parseFloat(fontSize);
  }
  return size;
};


DvtBaseTreeNode.prototype.getDisplayable = function() {
  // Note: Called by automation APIs
  return this._shape;
};

DvtBaseTreeNode.prototype.getLabel = function() {
  // Note: Called by automation APIs
  return this._textStr;
};


DvtBaseTreeNode.prototype.GetAfContext = function() {
  return this.getView().__getAfContext();
};

DvtBaseTreeNode.prototype.SetElAttributes = function(elAttrs) {
  //if no template name is specified(simple content facet case)
  if (elAttrs && ! this._template) {
    this._setTemplate(DvtBaseTreeNode._DEFAULT_TEMPLATE_NAME);
  }
  this._elAttributes = elAttrs;
};

DvtBaseTreeNode.prototype.GetElAttributes = function() {
  return this._elAttributes;
};

DvtBaseTreeNode.prototype._setTemplate = function(tempName) {
  if (tempName) {
    this._template = this._templates[tempName];
  }
};

DvtBaseTreeNode.prototype.GetTemplate = function() {
  return this._template;
};


/**
 * Returns whether this node can be double clicked.
 */
DvtBaseTreeNode.prototype.isDoubleClickable = function() {
  return this.isDrillReplaceEnabled();
};

/**
 * Updates the aria label of the node.
 * @protected
 */
DvtBaseTreeNode.prototype.UpdateAriaLabel = function() {
  // subclasses should override
};
/**
 * Simple logical object for drilling and tooltip support.
 * @param {DvtBaseTreeNode} node The associated node, if it has been created.
 * @param {string} id The id of the associated node.
 * @param {string} tooltip The tooltip to display.
 * @param {string} datatip The datatip to display.
 * @param {string} datatipColor The border color of the datatip.
 * @class
 * @constructor
 * @implements {DvtTooltipSource}
 */
var DvtBaseTreePeer = function(node, id, tooltip, datatip, datatipColor) {
  this.Init(tooltip, datatip, datatipColor);
  this._node = node;
  this._id = id;
  this._bDrillable = false;
};

DvtObj.createSubclass(DvtBaseTreePeer, DvtSimpleObjPeer, 'DvtBaseTreePeer');


/**
 * Returns the id of the associated node.
 * @return {string}
 */
DvtBaseTreePeer.prototype.getId = function() {
  return this._id;
};


/**
 * Returns true if the associated object is drillable.
 * @return {boolean}
 */
DvtBaseTreePeer.prototype.isDrillable = function() {
  return this._bDrillable;
};


/**
 * Specifies whether the associated object is drillable.
 * @param {boolean} drillable
 */
DvtBaseTreePeer.prototype.setDrillable = function(drillable) {
  this._bDrillable = drillable;
};


/**
 * Handles a mouse out event on the associated object.
 */
DvtBaseTreePeer.prototype.handleMouseOut = function() {
  // Expand/Collapse: hide button if displayed
  if (this._node && this._node.handleMouseOut) {
    this._node.handleMouseOut();
  }
};
/**
 * Breadcrumb rendering utilities for tree components.
 * @class
 */
var DvtTreeBreadcrumbsRenderer = function() {};

DvtObj.createSubclass(DvtTreeBreadcrumbsRenderer, DvtObj, 'DvtTreeBreadcrumbsRenderer');

DvtTreeBreadcrumbsRenderer._COMPONENT_GAP = 6;
DvtTreeBreadcrumbsRenderer._ENABLED_INLINE_STYLE = 'color: #003286;';


/**
 * Performs layout and rendering for the breadcrumbs in the given space.  Updates the available
 * space and returns the rendered displayable.
 * @param {DvtBaseTreeView} treeView The owning component.
 * @param {DvtRectangle} availSpace The rectangle within which to layout.
 * @param {array} ancestors
 * @param {string} rootLabel The label for the root node.
 * @return {DvtDisplayable} The rendered legend contents.
 */
DvtTreeBreadcrumbsRenderer.render = function(treeView, availSpace, ancestors, rootLabel) {
  var context = treeView.getCtx();

  // Figure out the label styles
  var enabledStyleArray = new Array();
  enabledStyleArray.push(treeView.__getStyles()[DvtBaseTreeView.TEXT_STYLE]);
  enabledStyleArray.push(new DvtCSSStyle(DvtTreeBreadcrumbsRenderer._ENABLED_INLINE_STYLE));
  enabledStyleArray.push(treeView.__getStyles()[DvtBaseTreeView.DRILL_TEXT_STYLE]);
  var enabledStyle = DvtCSSStyle.mergeStyles(enabledStyleArray).toString();
  var enabledStyleOver = enabledStyle + 'text-decoration: underline;';

  var disabledStyleArray = new Array();
  disabledStyleArray.push(treeView.__getStyles()[DvtBaseTreeView.TEXT_STYLE]);
  disabledStyleArray.push(treeView.__getStyles()[DvtBaseTreeView.CURRENT_TEXT_STYLE]);
  var disabledStyle = DvtCSSStyle.mergeStyles(disabledStyleArray).toString();

  // Create the breadcrumbs component and temporarily add to the component
  var options = {labelStyle: enabledStyle, labelStyleOver: enabledStyleOver, labelStyleDown: enabledStyleOver, disabledLabelStyle: disabledStyle};
  var breadcrumbs = new DvtBreadcrumbs(context, treeView.__processBreadcrumbsEvent, treeView, options);
  treeView.addChild(breadcrumbs);

  // Create the data object for the breadcrumbs.  Use the reverse of the ancestors array, since
  // the most distant ancestor is rendered first.
  var dataItems = ancestors.slice(0).reverse();
  dataItems.push({text: rootLabel});
  var data = {'items': dataItems};
  breadcrumbs.render(data, availSpace.w);

  // Figure out the height used and reduce availSpace
  var dims = breadcrumbs.getDimensions();
  breadcrumbs.setTranslate(availSpace.x, availSpace.y);
  var height = dims.h + DvtTreeBreadcrumbsRenderer._COMPONENT_GAP;
  availSpace.y += height;
  availSpace.h -= height;

  // Remove the breadcrumbs so that it can be added under the right parent.
  treeView.removeChild(breadcrumbs);
  return breadcrumbs;
};
/**
 * Legend rendering utilies for tree components.
 * @class
 */
var DvtTreeLegendRenderer = function() {};

DvtObj.createSubclass(DvtTreeLegendRenderer, DvtObj, 'DvtTreeLegendRenderer');

DvtTreeLegendRenderer._LEGEND_GAP = 4;
DvtTreeLegendRenderer._LEGEND_LABEL_GAP = 7;
DvtTreeLegendRenderer._LEGEND_SECTION_GAP = 24;
DvtTreeLegendRenderer._LABEL_SIZE = 11;
DvtTreeLegendRenderer._LABEL_COLOR = '#636363';

DvtTreeLegendRenderer._LABEL_INLINE_STYLE = 'color:' + DvtTreeLegendRenderer._LABEL_COLOR + ';';


/**
 * Performs layout and rendering for the legend in the given space.  Updates the available
 * space and returns the rendered displayable.
 * @param {DvtBaseTreeView} treeView The owning component.
 * @param {DvtRectangle} availSpace The rectangle within which to layout.
 * @param {string} sizeStr The resource for "Size".
 * @param {string} colorStr The resource for "Color".
 * @param {string} sizeValueStr A description of the size metric.
 * @param {string} colorValueStr A description of the color metric.
 * @param {DvtAttrGroups} attrGroups An attribute groups describing the colors.
 * @return {DvtDisplayable} The rendered legend contents.
 */
DvtTreeLegendRenderer.render = function(treeView, availSpace, sizeStr, colorStr, sizeValueStr, colorValueStr, attrGroups) {
  var context = treeView.getCtx();
  var eventManager = treeView.__getEventManager();

  // Create the legend container and temporarily add to the component
  var legend = new DvtContainer(context);
  treeView.addChild(legend);

  // Size/Color Labels
  var labelContainer = DvtTreeLegendRenderer._renderLabels(context, treeView, legend, availSpace.w, sizeStr, colorStr, sizeValueStr, colorValueStr, attrGroups);

  var borderColor = treeView.__getResources()['alta'] ? null : '#000000';
  var legendStyleArray = new Array();
  legendStyleArray.push(treeView.__getStyles()[DvtBaseTreeView.TEXT_STYLE]);
  var legendStyles = {borderColor: borderColor, labelStyle: DvtCSSStyle.mergeStyles(legendStyleArray)};

  // Color Section
  var colorContainer = DvtLegendAttrGroupsRenderer.renderAttrGroups(context, eventManager, legend, availSpace.w, availSpace.h, attrGroups, legendStyles);

  // Position the sections horizontally
  var labelDims = labelContainer ? labelContainer.getDimensions() : null;
  var colorDims = colorContainer ? colorContainer.getDimensions() : null;
  if (labelContainer && !colorContainer) // Only labels, center
    labelContainer.setTranslateX(availSpace.y + (availSpace.w - labelDims.w) / 2);
  else if (colorContainer && !labelContainer) // Only colors, center
    colorContainer.setTranslateX(availSpace.y + (availSpace.w - colorDims.w) / 2);
  else if (colorContainer && labelContainer) {
    // Deal with overflow
    var availWidth = availSpace.w - DvtTreeLegendRenderer._LEGEND_SECTION_GAP;
    if (labelDims.w + colorDims.w > availWidth) {
      if (labelDims.w > availWidth / 2 && colorDims.w > availWidth / 2) {
        // Both don't fit, recreate at half of the avail width each
        legend.removeChild(labelContainer);
        legend.removeChild(colorContainer);
        labelContainer = DvtTreeLegendRenderer._renderLabels(context, treeView, legend, availWidth / 2, sizeStr, colorStr, sizeValueStr, colorValueStr, attrGroups);
        colorContainer = DvtLegendAttrGroupsRenderer.renderAttrGroups(context, eventManager, legend, availWidth / 2, availSpace.h, attrGroups, legendStyles);
      }
      else if (labelDims.w > colorDims.w) {
        // Labels don't fit, give all remaining space
        var labelSpace = availWidth - colorDims.w;

        // Recreate the labelContainer at the available size
        legend.removeChild(labelContainer);
        labelContainer = DvtTreeLegendRenderer._renderLabels(context, treeView, legend, labelSpace, sizeStr, colorStr, sizeValueStr, colorValueStr, attrGroups);
      }
      else {
        // Colors don't fit, give all remaining space
        var colorSpace = availWidth - labelDims.w;

        // Recreate the labelContainer at the available size
        legend.removeChild(colorContainer);
        colorContainer = DvtLegendAttrGroupsRenderer.renderAttrGroups(context, eventManager, legend, colorSpace, availSpace.h, attrGroups, legendStyles);
      }

      // Size changed so recalc dimensions
      labelDims = labelContainer.getDimensions();
      colorDims = colorContainer.getDimensions();
    }

    // Position
    if (DvtAgent.isRightToLeft(context)) {
      colorContainer.setTranslateX(availSpace.x);
      labelContainer.setTranslateX(availSpace.x + availSpace.w - labelDims.w);
    }
    else {
      labelContainer.setTranslateX(availSpace.x);
      colorContainer.setTranslateX(availSpace.x + availSpace.w - colorDims.w);
    }
  }

  // Figure out the height used and reduce availSpace
  var legendDims = legend.getDimensions();
  legend.setTranslateY(availSpace.y + availSpace.h - legendDims.h);
  availSpace.h -= (legendDims.h + DvtTreeLegendRenderer._LEGEND_GAP);

  // Remove the legend so that it can be added under the right parent.
  treeView.removeChild(legend);
  return legend;
};


/**
 * Performs layout and rendering for the legend labels.
 * @param {DvtContext} context
 * @param {DvtBaseTreeView} treeView The owning component.
 * @param {DvtContainer} legend The legend container.
 * @param {number} availWidth The available horizontal space.
 * @param {string} sizeStr The resource for "Size".
 * @param {string} colorStr The resource for "Color".
 * @param {string} sizeValueStr A description of the size metric.
 * @param {string} colorValueStr A description of the color metric.
 * @param {DvtAttrGroups} attrGroups An attribute groups describing the colors.
 * @return {DvtDisplayable} The rendered contents.
 */
DvtTreeLegendRenderer._renderLabels = function(context, treeView, legend, availWidth, sizeStr, colorStr, sizeValueStr, colorValueStr, attrGroups) {
  var isRTL = DvtAgent.isRightToLeft(context);
  var eventManager = treeView.__getEventManager();
  var labelContainer = null;
  if (sizeValueStr || colorValueStr) {
    // Create a container for the labels
    labelContainer = new DvtContainer(context);
    legend.addChild(labelContainer);

    var textStyle = new Array();
    textStyle.push(treeView.__getStyles()[DvtBaseTreeView.TEXT_STYLE]);
    textStyle.push(treeView.__getStyles()[DvtBaseTreeView.ATTRIBUTE_TYPE_STYLE]);
    var attrTypeStyle = DvtCSSStyle.mergeStyles(textStyle);

    textStyle = new Array();
    textStyle.push(treeView.__getStyles()[DvtBaseTreeView.TEXT_STYLE]);
    textStyle.push(treeView.__getStyles()[DvtBaseTreeView.ATTRIBUTE_VALUE_STYLE]);
    var attrValueStyle = DvtCSSStyle.mergeStyles(textStyle);

    // Size: Size Metric
    var sizeLabel;
    var sizeValueLabel;
    var sizeLabelWidth;
    var sizeValueLabelWidth;
    var sizeWidth = 0;
    if (sizeValueStr) {
      // Size Label
      sizeLabel = new DvtOutputText(context, sizeStr, 0, 0);
      sizeLabel.setCSSStyle(attrTypeStyle);

      labelContainer.addChild(sizeLabel);
      sizeLabelWidth = sizeLabel.measureDimensions().w;

      // Size Value Label
      sizeValueLabel = new DvtOutputText(context, sizeValueStr, 0, 0);
      sizeValueLabel.setCSSStyle(attrValueStyle);

      labelContainer.addChild(sizeValueLabel);
      sizeValueLabelWidth = sizeValueLabel.measureDimensions().w;

      // Size section width
      sizeWidth = sizeLabelWidth + sizeValueLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
    }

    // Color: Color Metric
    var colorLabel;
    var colorValueLabel;
    var colorLabelWidth;
    var colorValueLabelWidth;
    var colorWidth = 0;
    if (colorValueStr) {
      // Color Label
      colorLabel = new DvtOutputText(context, colorStr, 0, 0);
      colorLabel.setCSSStyle(attrTypeStyle);

      labelContainer.addChild(colorLabel);
      colorLabelWidth = colorLabel.measureDimensions().w;

      // Color Value Label
      colorValueLabel = new DvtOutputText(context, colorValueStr, 0, 0);
      colorValueLabel.setCSSStyle(attrValueStyle);

      labelContainer.addChild(colorValueLabel);
      colorValueLabelWidth = colorValueLabel.measureDimensions().w;

      // Size section width
      colorWidth = colorLabelWidth + colorValueLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
    }

    // Reduce size to fit if needed
    availWidth -= DvtTreeLegendRenderer._LEGEND_SECTION_GAP;
    if (sizeWidth + colorWidth > availWidth) {
      var widthPerSection = availWidth / 2;
      if (sizeWidth > widthPerSection && colorWidth > widthPerSection) {
        // Both don't fit, truncate and reposition
        var sizeValueSpace = widthPerSection - sizeLabelWidth - DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        if (DvtTextUtils.fitText(sizeValueLabel, sizeValueSpace, Infinity, labelContainer)) {
          sizeValueLabelWidth = sizeValueLabel.measureDimensions().w;
          eventManager.associate(sizeValueLabel, new DvtSimpleObjPeer(sizeValueStr));
        }
        else {
          labelContainer.removeChild(sizeLabel);
          labelContainer.removeChild(sizeValueLabel);
          sizeValueLabel = null;
          sizeValueLabelWidth = 0;
        }

        var colorValueSpace = widthPerSection - colorLabelWidth - DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        if (DvtTextUtils.fitText(colorValueLabel, colorValueSpace, Infinity, labelContainer)) {
          colorValueLabelWidth = colorValueLabel.measureDimensions().w;
          eventManager.associate(colorValueLabel, new DvtSimpleObjPeer(colorValueStr));
        }
        else {
          labelContainer.removeChild(colorLabel);
          labelContainer.removeChild(colorValueLabel);
          colorValueLabel = null;
          colorValueLabelWidth = 0;
        }
      }
      else if (sizeWidth > colorWidth) { // Reduce the size label size
        if (DvtTextUtils.fitText(sizeValueLabel, availWidth - colorWidth - sizeLabelWidth - DvtTreeLegendRenderer._LEGEND_LABEL_GAP, Infinity, labelContainer)) {
          sizeValueLabelWidth = sizeValueLabel.measureDimensions().w;
          eventManager.associate(sizeValueLabel, new DvtSimpleObjPeer(sizeValueStr));
        }
        else {
          labelContainer.removeChild(sizeLabel);
          labelContainer.removeChild(sizeValueLabel);
          sizeValueLabel = null;
          sizeValueLabelWidth = 0;
        }
      }
      else { // Reduce the color label size
        if (DvtTextUtils.fitText(colorValueLabel, availWidth - sizeWidth - colorLabelWidth - DvtTreeLegendRenderer._LEGEND_LABEL_GAP, Infinity, labelContainer)) {
          colorValueLabelWidth = colorValueLabel.measureDimensions().w;
          eventManager.associate(colorValueLabel, new DvtSimpleObjPeer(colorValueStr));
        }
        else {
          labelContainer.removeChild(colorLabel);
          labelContainer.removeChild(colorValueLabel);
          colorValueLabel = null;
          colorValueLabelWidth = 0;
        }
      }
    }

    // Position the text objects
    var x = 0;
    if (isRTL) {
      if (colorValueLabel) {
        colorValueLabel.setX(x);
        x += colorValueLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        colorLabel.setX(x);
        x += colorLabelWidth + DvtTreeLegendRenderer._LEGEND_SECTION_GAP;
      }

      if (sizeValueLabel) {
        sizeValueLabel.setX(x);
        x += sizeValueLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        sizeLabel.setX(x);
      }
    }
    else {
      if (sizeValueLabel) {
        sizeLabel.setX(x);
        x += sizeLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        sizeValueLabel.setX(x);
        x += sizeValueLabelWidth + DvtTreeLegendRenderer._LEGEND_SECTION_GAP;
      }

      if (colorValueLabel) {
        colorLabel.setX(x);
        x += colorLabelWidth + DvtTreeLegendRenderer._LEGEND_LABEL_GAP;
        colorValueLabel.setX(x);
      }
    }
  }
  return labelContainer;
};
/*---------------------------------------------------------------------------------*/
/*  DvtBaseTreeKeyboardHandler     Keyboard handler for Sunburst                   */
/*---------------------------------------------------------------------------------*/
/**
  *  @param {DvtEventManager} manager The owning DvtEventManager
  *  @class DvtBaseTreeKeyboardHandler
  *  @extends {DvtKeyboardHandler}
  *  @constructor
  */
var DvtBaseTreeKeyboardHandler = function(manager)
{
  this.Init(manager);
};

DvtObj.createSubclass(DvtBaseTreeKeyboardHandler, DvtKeyboardHandler, 'DvtBaseTreeKeyboardHandler');


/**
 * @override
 */
DvtBaseTreeKeyboardHandler.prototype.isSelectionEvent = function(event)
{
  return this.isNavigationEvent(event) && !event.ctrlKey;
};


/**
 * @override
 */
DvtBaseTreeKeyboardHandler.prototype.isMultiSelectEvent = function(event)
{
  return event.keyCode == DvtKeyboardEvent.SPACE && event.ctrlKey;
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtBaseTreeDefaults = function() {};

DvtObj.createSubclass(DvtBaseTreeDefaults, DvtBaseComponentDefaults, 'DvtBaseTreeDefaults');


/**
 * Defaults for version 1. This component was exposed after the Alta skin, so no earlier defaults are provided.
 */
DvtBaseTreeDefaults.VERSION_1 = {
  // Note, only attributes that are different than the XML defaults need
  // to be listed here, at least until the XML API is replaced.
  'emptyText': 'No data to display',
  'nodeDefaults': {
    'labelStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")
  },

  'styleDefaults': {
    '_attributeTypeTextStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"),
    '_attributeValueTextStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")
  },

  '_resources': {}
};


/**
 * @override
 */
DvtBaseTreeDefaults.prototype.Init = function(defaultsMap) {
  // This will only be called via subclasses.  Combine with defaults from this class before passing to super.
  var ret = {
    'skyros': DvtJSONUtils.merge(defaultsMap['skyros'], DvtBaseTreeDefaults.VERSION_1),
    'alta': DvtJSONUtils.merge(defaultsMap['alta'], {})
  };

  DvtBaseTreeDefaults.superclass.Init.call(this, ret);
};
/**
 * Utility functions for converting between JSON and XML APIs.
 * @class
 */
var DvtBaseTreeJsonUtils = function() {};

DvtObj.createSubclass(DvtBaseTreeJsonUtils, DvtObj, 'DvtBaseTreeJsonUtils');


/**
 * Converts the options JSON API into the XML API.
 * @param {object} options The object containing specifications and data for this component.
 * @return {string} The resulting XML string.
 */
DvtBaseTreeJsonUtils.prototype.toXml = function(options) {
  var ret = this.StartComponentElement(options);

  // Write out the nodes
  if (options && options['nodes']) {
    var nodes = options['nodes'];
    for (var i = 0; i < nodes.length; i++)
      ret += this.WriteNodeElement(options, nodes[i]);
  }

  ret += this.EndComponentElement(options);
  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteAttr = function(attrName, value) {
  return value != null ? ' ' + attrName + '=\"' + value + '\"' : '';
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.GetComponentName = function() {
  return null;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.StartComponentElement = function(options) {
  var ret = '<' + this.GetComponentName();
  ret += this.WriteComponentAttributes(options);
  ret += '>\n';
  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteComponentAttributes = function(options) {
  var ret = '';

  // Data Attrs
  ret += this.WriteAttr('sv', options['sizeLabel']);
  ret += this.WriteAttr('cv', options['colorLabel']);

  // Legend Source
  var attrGroups = options['attributeGroups'] ? options['attributeGroups'][0] : null;
  if (attrGroups)
    ret += this.WriteAttr('ls', attrGroups['id']);

  // Selected Node Ids
  var selectedNodes = options['selectedNodes'] ? options['selectedNodes'] : [];
  var selectedNodeStr = '';
  for (var i = 0; i < selectedNodes.length; i++) {
    if (selectedNodeStr.length > 0)
      selectedNodeStr += ',';

    selectedNodeStr += selectedNodes[i];
  }

  if (selectedNodeStr.length > 0)
    ret += this.WriteAttr('selIds', selectedNodeStr);

  // Options Attrs
  ret += this.WriteAttr('adu', options['animationDuration']);
  ret += this.WriteAttr('adc', options['animationOnDataChange']);
  ret += this.WriteAttr('emptyText', options['emptyText']);
  ret += this.WriteAttr('sel', options['selection']);
  ret += this.WriteAttr('sort', options['sorting']);

  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.EndComponentElement = function(options) {
  // TODO ancestors, resources, styles
  var ret = '';

  ret += '<a/>\n';
  ret += this.WriteResourcesElement(options);
  ret += this.WriteStyleElement(options);
  ret += this.WriteAttributeGroupsElement(options);
  ret += '<\/' + this.GetComponentName() + '>';
  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteNodeElement = function(options, nodeData) {
  var ret = '<n';

  // Write node attributes
  ret += this.WriteNodeAttributes(options, nodeData);

  // Write child nodes
  if (nodeData && nodeData['nodes'] && nodeData['nodes'].length > 0) {
    // Disclosed true
    ret += this.WriteAttr('di', 't');

    // Close the current element
    ret += '>\n';

    var nodes = nodeData['nodes'];
    for (var i = 0; i < nodes.length; i++)
      ret += this.WriteNodeElement(options, nodes[i]);

    // Really close the current element
    ret += '<\/n>\n';
  }
  else // No children
    ret += '/>\n';

  // Return the xml
  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteNodeAttributes = function(options, nodeData) {
  var ret = '';

  ret += this.WriteAttr('id', nodeData['id']);
  ret += this.WriteAttr('s', nodeData['value']);
  ret += this.WriteAttr('c', nodeData['color']);
  ret += this.WriteAttr('l', nodeData['label']);
  ret += this.WriteAttr('p', nodeData['pattern']);

  var tooltip = nodeData['shortDesc'] ? nodeData['shortDesc'] : nodeData['tooltip'];
  ret += this.WriteAttr('tt', tooltip);

  var labelStyle = nodeData['labelStyle'] ? nodeData['labelStyle'] : options['nodeDefaults']['labelStyle'];
  ret += this.WriteAttr('ls', labelStyle);

  var drilling = nodeData['drilling'] ? nodeData['drilling'] : options['nodeDefaults']['drilling'];
  if (drilling == 'insert')
    ret += this.WriteAttr('d', 'i');
  else if (drilling == 'replace')
    ret += this.WriteAttr('d', 'r');
  else if (drilling == 'insertAndReplace')
    ret += this.WriteAttr('d', 'ir');

  var selectable = nodeData['selectable'] ? nodeData['selectable'] : 'auto';
  ret += this.WriteAttr('nsel', selectable);

  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteAttributeGroupsElement = function(options) {
  var attrGroups = options['attributeGroups'] ? options['attributeGroups'][0] : null;
  if (!attrGroups)
    return '';

  var ret = '<ag id="' + attrGroups['id'] + '"';
  if (attrGroups['attributeType'] == 'continuous') {
    // Write out the properties
    ret += this.WriteAttr('t', 'continuous');
    ret += this.WriteAttr('ramp', attrGroups['colors'].join(';'));
    ret += this.WriteAttr('minValue', attrGroups['min']);
    ret += this.WriteAttr('maxValue', attrGroups['max']);
    ret += this.WriteAttr('minLabel', attrGroups['minLabel']);
    ret += this.WriteAttr('maxLabel', attrGroups['maxLabel']);
    ret += '/>';
  }
  else { // discrete
    ret += '>\n';

    // Write out the group items
    var groups = attrGroups['groups'];
    for (var i = 0; i < groups.length; i++) {
      ret += '<i';
      ret += this.WriteAttr('g', groups[i]['id']);
      ret += this.WriteAttr('l', groups[i]['label']);
      ret += this.WriteAttr('c', groups[i]['color']);
      ret += this.WriteAttr('p', groups[i]['pattern']);
      ret += '/>\n';
    }

    ret += '<\/ag>\n';
  }

  return ret;
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteResourcesElement = function(options) {
  // subclasses should override
};


/** @protected **/
DvtBaseTreeJsonUtils.prototype.WriteStyleElement = function(options) {
  var ret = '<styles ';

  var attributeTypeTextStyle = options['styleDefaults']['_attributeTypeTextStyle'];
  ret += this.WriteAttr('attrType', attributeTypeTextStyle);

  var attributeValueTextStyle = options['styleDefaults']['_attributeValueTextStyle'];
  ret += this.WriteAttr('attrValue', attributeValueTextStyle);

  return ret;
};
// Copyright (c) 2008, 2014, Oracle and/or its affiliates. All rights reserved.
/*---------------------------------------------------------------------*/
/*  DvtTreeAutomation         Tree Automation Services         */
/*---------------------------------------------------------------------*/
/**
  *  Provides automation services for treemap/sunburst.  To obtain a
  *  @class  DvtTreeAutomation
  *  @param {DvtBaseTreeView} treeView
  *  @implements {DvtAutomation}
  *  @constructor
  *  @export
  */
var DvtTreeAutomation = function(treeView)
{
  this._treeView = treeView;
  this._root = treeView.getRootNode();
};

DvtObj.createSubclass(DvtTreeAutomation, DvtAutomation, 'DvtTreeAutomation');

/**
 * The subId prefix for tree nodes
 */
DvtTreeAutomation.NODE_ID_PREFIX = 'node';

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN]</li>
 * </ul>
 * @override
 */
DvtTreeAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var logicalObj = this._treeView.getLogicalObject(displayable);

  if (!logicalObj)
    return null;

  if (logicalObj instanceof DvtBaseTreeNode)
  {
    var currentNode = logicalObj;
    var indices = '';

    if (!this._root.isArtificialRoot()) {
      // If logicalObj represents real root node, return default subId
      // Else include index for real root as first index in string of indices
      if (currentNode == this._root)
        return DvtTreeAutomation.NODE_ID_PREFIX + '[0]';
      else
        indices += '[0]';
    }
    // Indices for nodes beyond the root
    var childIndices = this._getIndicesFromNode(currentNode, this._root.getChildNodes());
    indices = childIndices ? indices + childIndices : indices;

    if (indices.length > 0)
      return DvtTreeAutomation.NODE_ID_PREFIX + indices;
  }
  return null;
};


/**
 * Returns the index values of the given node
 * @param {Object} node The tree node to find the indices for
 * @param {Object} children The legend nodes whose descendants are being searched
 * @return {String} [nodeIndex0][nodeIndex1]...[nodeIndexN]
 * @private
 */
DvtTreeAutomation.prototype._getIndicesFromNode = function(node, children) {
  // If there are sections in this options object, recurse through the section object
  if (children && children.length > 0) {
    for (var n = 0; n < children.length; n++) {
      if (children[n] == node)
        return '[' + n + ']';
      else {
        var nodeIndex = this._getIndicesFromNode(node, children[n].getChildNodes());
        if (nodeIndex)
          return '[' + n + ']' + nodeIndex;
      }
    }
  }
  return null;
};

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN]</li>
 * </ul>
 * @override
 * @export
 */
DvtTreeAutomation.prototype.getDomElementForSubId = function(subId) {
  //If root is real remove first index from subId because we begin searching at the root
  if (!this._root.isArtificialRoot()) {
    subId = subId.substring(0, subId.indexOf('[')) + subId.substring(subId.indexOf(']') + 1);
    //If no more indices exist in the string return the root dom element
    if (subId == DvtTreeAutomation.NODE_ID_PREFIX)
      return this._root.__getDisplayable().getElem();
  }

  var foundNode = this._getNodeFromSubId(this._root, subId);
  if (foundNode)
    return foundNode.getDisplayable().getElem();

  return null;
};

/**
 * Returns the tree node for the given subId
 * @param {Object} node The tree node whose children wil be searched
 * @param {String} subId The subId of the desired node
 * @return {Object} the child node corresponding to the given subId
 * @private
 */
DvtTreeAutomation.prototype._getNodeFromSubId = function(node, subId) {
  var openParen = subId.indexOf('[');
  var closeParen = subId.indexOf(']');
  if (openParen >= 0 && closeParen >= 0) {
    var index = subId.substring(openParen + 1, closeParen);
    subId = subId.substring(closeParen + 1);
    var nextOpenParen = subId.indexOf('[');
    var nextCloseParen = subId.indexOf(']');
    // If there is another index layer recurse into the child node at that index
    if (nextOpenParen >= 0 && nextCloseParen >= 0) {
      return this._getNodeFromSubId(node.getChildNodes()[index], subId);
    }
    else // If we are at the last index return the child node at that index
      return node.getChildNodes()[index];
  }
};


/**
 * Returns the tree node for the given path array
 * @param {Object} node The tree node whose children wil be searched
 * @param {String} path The array of indices
 * @return {Object} the child node corresponding to the given path
 * @private
 */
DvtTreeAutomation.prototype._getNodeFromPath = function(node, path) {
  // Remove index at the head of the array
  var index = path.shift();

  var children = node.getChildNodes();

  if (path.length == 0) // If this is the last index return child node at that position
    return children[index];
  else if (path.length > 0)
    return this._getNodeFromPath(children[index], path);

  return null;
};


/**
 * Returns an object containing data for a tree node. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>color</li>
 * <li>label</li>
 * <li>selected</li>
 * <li>size</li>
 * <li>tooltip</li>
 * </ul>
 * @param {String} subIdPath The array of indices in the subId for the desired node
 * @return {Object} An object containing data for the node
 * @export
 */
DvtTreeAutomation.prototype.getNode = function(subIdPath) {
  // If the root is real, remove first element of subIdPath since we already start searching at the root
  if (!this._root.isArtificialRoot() && subIdPath[0] == 0)
    subIdPath.shift();

  // If root index was the only element of subIdPath, set the node to get data for as the root, else search for the correct node
  var node = (subIdPath.length == 0) ? this._root : this._getNodeFromPath(this._root, subIdPath);

  var nodeData = {
    'color': node.getColor(),
    'label': node.getLabel(),
    'selected': node.isSelected() == undefined ? false : node.isSelected(),
    'size': node.getSize(),
    'tooltip': node.getDatatip()
  };

  return nodeData;
};
});