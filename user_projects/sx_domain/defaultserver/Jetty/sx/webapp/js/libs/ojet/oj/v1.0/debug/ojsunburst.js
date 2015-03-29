"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtSunburst'], function(oj, $)
{
/**
 * An object used for automation verification of sunburst nodes
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.SunburstNode = function(data) {
  this._data = data;
};

/**
 * Returns the color of the node
 * @returns {String} The node color
 * @export
 */
oj.SunburstNode.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of the node
 * @returns {String} The node label
 * @export
 */
oj.SunburstNode.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns the size of the node
 * @returns {Number} The node size
 * @export
 */
oj.SunburstNode.prototype.getSize = function() {
  return this._data ? this._data['size'] : null;
};

/**
 * Returns the tooltip of the node
 * @returns {String} The node tooltip
 * @export
 */
oj.SunburstNode.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns whether or not the node is selected
 * @returns {Boolean} The node selection state
 * @export
 */
oj.SunburstNode.prototype.isSelected = function() {
  return this._data ? this._data['selected'] : false;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojSunburst
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="sunburstOverview-section">
 *   JET Sunburst Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sunburstOverview-section"></a>
 * </h3>
 * 
 * <p>Sunburst component for JET. Sunbursts are used to display hierarchical data across two dimensions, represented by 
 * the size and color of the sunburst nodes.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojSunburst',
 *   nodes: [{value: 100, color: "#FFFF00", label: "Total Sales", 
 *            nodes: [{value: 75, color: "#00FF00", label: "Candy"},
 *                    {value: 20, color: "#FFFF00", label: "Fruit"},
 *                    {value: 15, color: "#FF0000", label: "Vegetables"}]}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="sunburstOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sunburstOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/sunburst.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.  Since component terminology for keyboard 
 * and touch shortcuts can conflict with those of the application, it is the 
 * application's responsibility to provide these shortcuts, possibly via a help 
 * popup.</p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
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
 *       <td>Move focus to next component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>
 *         Move focus and selection to the first adjacent sector in an inner or outer layer (ring). In 
 *         the northern hemisphere of the sunburst, this will move away from the center, while it will move towards the 
 *         center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>
 *         Move focus and selection to the first adjacent sector in an inner or outer layer (ring). In 
 *         the northern hemisphere of the sunburst, this will move towards the center, while it will move away from the
 *         center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus and selection counterclockwise to adjacent sector in the same layer (ring).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus and selection clockwise to adjacent sector in the same layer (ring).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>
 *         Move focus and extend selection to the first adjacent sector in an inner or outer layer (ring). In 
 *         the northern hemisphere of the sunburst, this will move away from the center, while it will move towards the 
 *         center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>
 *         Move focus and extend selection to the first adjacent sector in an inner or outer layer (ring). In 
 *         the northern hemisphere of the sunburst, this will move towards the center, while it will move away from the
 *         center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+LeftArrow</kbd></td>
 *       <td>Move focus and extend selection counterclockwise to adjacent sector in the same layer (ring).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+RightArrow</kbd></td>
 *       <td>Move focus and extend selection clockwise to adjacent sector in the same layer (ring).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+UpArrow</kbd></td>
 *       <td>
 *         Move focus to the first adjacent sector in an inner or outer layer (ring), without changing the 
 *         current selection. In the northern hemisphere of the sunburst, this will move away from the center, while it 
 *         will move towards the center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+DownArrow</kbd></td>
 *       <td>
 *         Move focus to the first adjacent sector in an inner or outer layer (ring), without changing the 
 *         current selection. In the northern hemisphere of the sunburst, this will move towards the center, while it 
 *         will move away from the center in the southern hemisphere of the sunburst.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+LeftArrow</kbd></td>
 *       <td>Move focus counterclockwise to adjacent sector in the same layer (ring), without changing the current 
 *       selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+RightArrow</kbd></td>
 *       <td>Move focus clockwise to adjacent sector in the same layer (ring), without changing the current 
 *       selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Spacebar</kbd></td>
 *       <td>Multi-select sectors with focus.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Alt+LeftArrow</kbd></td>
 *       <td>Rotate 5 degrees counterclockwise.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Alt+RightArrow</kbd></td>
 *       <td>Rotate 5 degrees clockwise.</td>
 *     </tr>
 *   </tbody>
 * </table>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>
 *   As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the 
 *   component must be <code class="prettyprint">refresh()</code>ed.
 * </p>
 * 
 * @desc Creates a JET Sunburst.
 * @example <caption>Initialize the Sunburst with no options specified:</caption>
 * $(".selector").ojSunburst();
 * 
 * @example <caption>Initialize the Sunburst with some options:</caption>
 * $(".selector").ojSunburst({nodes: [{value: 75, color: "#00FF00", label: "Candy"}, {value: 20, color: "#FFFF00", label: "Fruit"}, {value: 15, color: "#FF0000", label: "Vegetables"}]});
 * 
 * @example <caption>Initialize the Sunburst via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojSunburst'}">
 */
oj.__registerWidget('oj.ojSunburst', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Fired whenever a supported component option changes, whether due to user interaction or programmatic 
     * intervention. If the new value is the same as the previous value, no event will be fired. Additional options may 
     * be supported in the future, so listeners should verify which option is changing before taking any action. 
     * Currently supports: <code class="prettyprint">selectedNodes</code>, <code class="prettyprint">startAngle</code>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * @property {Object} ui.optionMetadata information about the option that is changing
     * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
     *                    <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojSunburst({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    optionChange: null,
      
    /**
     * Triggered after user rotation is completed.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the start angle of the sunburst, in degrees
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">rotate</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "rotate": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojrotate</code> event:</caption>
     * $(".selector").on("ojrotate", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    rotate : null,
    
    /**
     * Triggered during user rotation of the sunburst.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the start angle of the sunburst, in degrees
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">rotateInput</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "rotateInput": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojrotateinput</code> event:</caption>
     * $(".selector").on("ojrotateinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    rotateInput : null,
    
    /**
     * Triggered after data items are selected or de-selected.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.items an array containing objects describing the selected nodes
     * @property {string} ui.items.id the id of the node
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
     * $(".selector").ojSunburst({
     *   "select": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
     * $(".selector").on("ojselect", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojSunburst
     * @instance
     */
    select : null
  },
  
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtSunburst.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-sunburst');
    return styleClasses;
  },
  
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _GetChildStyleClasses : function() {
    var styleClasses = this._super();
    // TODO HZHANG fill in the urls after expand/collapse are supported
// 		styleClasses['oj-sunburst-expand-icon'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-expand-icon oj-hover'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-expand-icon oj-active'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon oj-hover'] = {'path' : '', 'property' : 'CSS_URL'};
// 		styleClasses['oj-sunburst-collapse-icon oj-active'] = {'path' : '', 'property' : 'CSS_URL'};
    styleClasses['oj-sunburst-attribute-type-text'] = {'path' : 'styleDefaults/_attributeTypeTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-attribute-value-text'] = {'path' : 'styleDefaults/_attributeValueTextStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    // TODO HZHANG add this once drilling is supported
//    styleClasses['oj-sunburst-current-text'] = {'path' : '', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-node'] = {'path' : 'nodeDefaults/labelStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-sunburst-node oj-hover'] = {'path' : 'nodeDefaults/hoverColor', 'property' : 'border-top-color'};
    styleClasses['oj-sunburst-node oj-selected'] = [
      {'path' : 'nodeDefaults/selectedOuterColor', 'property' : 'border-top-color'},
      {'path' : 'nodeDefaults/selectedInnerColor', 'property' : 'border-bottom-color'}
    ];
    return styleClasses;
  },
    
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _GetEventTypes : function() {
    return ['optionChange', 'rotate', 'rotateInput', 'select'];
  },
  
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _GetTranslationMap: function() {
    // Safe to modify super's map because function guarentees a new map is returned
    var ret = this._super();   
    ret['DvtSunburstBundle.COLOR'] = this._GetTranslatedResource('labelColor');
    ret['DvtSunburstBundle.SIZE'] = this._GetTranslatedResource('labelSize');
    return ret;
  },
  
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _HandleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, selectedItems, selection, selectedItem, i;
    if(type === DvtSelectionEvent.TYPE) {
      selectedItems = [];
      selection = event.getSelection();
      for(i=0; i<selection.length; i++) {
        selectedItem = {'id': selection[i]};
        selectedItems.push(selectedItem);  
      }
      // update the options selection state
      this._UserOptionChange('selectedNodes', selection);
      this._trigger('select', null, {'items': selectedItems});
    }
    else if(type === DvtSunburstRotationEvent.TYPE) {
      // Fired after the rotate interaction is complete
      this._UserOptionChange('startAngle', event.getStartAngle());
      this._trigger('rotate', null, {'value': event.getStartAngle()});
    }
    else if(type === DvtSunburstRotationEvent.TYPE_INPUT) {
      // Fired during the rotate interaction for each change
      this._trigger('rotateInput', null, {'value': event.getStartAngle()});
    }
    else {
      this._super(event);
    }
  },
   
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _LoadResources : function() {
    // Ensure the resources object exists
    if(this.options['_resources'] == null)
      this.options['_resources'] = {};
      
    var resources = this.options['_resources'];
      
    // Add cursors
    resources['rotateCursor'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/sunburst/rotate.cur');
  },
    
  /**
   * @override
   * @memberof! oj.ojSunburst
   * @instance
   * @protected
   */
  _SupportsOptionChangeEvent : function(key) {
    return key == 'selectedNodes' || key == 'startAngle';
  },
  
  /**
   * Returns the subcomponent node represented by the documented locator attribute values.
   * Test authors should target sunburst sub elements using the following locators:
   * <ul>
   *   <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN] - A sunburst node indexed by its position in the hierarchy</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojSunburst
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property 
   *        whose value is a string, documented by the component, that allows 
   *        the component to look up the subcomponent associated with that 
   *        string.  It contains:<p>
   *        component: optional - in the future there may be more than one 
   *        component contained within a page element<p>
   *        subId: the string, documented by the component, that the component 
   *        expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Element|null} the subcomponent located by the subId string passed
   *          in locator, if found.<p>
   */
  getNodeBySubId : function(locator) {
    return this._super(locator);
  },
  
  /**
   * Returns the subId string for the given child DOM node. Valid sunburst subIds include:
   * <ul>
   *   <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN] - A sunburst node indexed by its position in the hierarchy</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojSunburst
   * @instance
   * @param {Element} node The subcomponent node used by the component to lookup the subId string
   * @return {string|null} - the subId for the DOM node or null when none is found
   */
  getSubIdByNode:function(node) {
    return this._super(node);  
  },
  
  /**
   * Returns a SunburstNode object for automation testing verification.
   * @param {Array} subIdPath The array of indices in the subId for the desired node
   * @return {Object} An object containing data for the node at the given subIdPath, or null if none exists
   * @expose
   * @instance
   * @memberof! oj.ojSunburst
   */
  getNode : function(subIdPath) {
    var auto = this._component.getAutomation();
    return new oj.SunburstNode(auto.getNode(subIdPath));
  }
});
});
