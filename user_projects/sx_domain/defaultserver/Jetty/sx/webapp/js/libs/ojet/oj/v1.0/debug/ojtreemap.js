"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtTreemap'], function(oj, $)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojTreemap
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="treemapOverview-section">
 *   JET Treemap Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#treemapOverview-section"></a>
 * </h3>
 * 
 * <p>Treemap component for JET. Treemaps are used to display hierarchical data across two dimensions, represented by 
 * the size and color of the treemap nodes. Treemaps are generally preferred over sunbursts when emphasizing the data
 * for the leaf nodes.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojTreemap',
 *   nodes: [{value: 100, color: "#FFFF00", label: "Total Sales", 
 *            nodes: [{value: 75, color: "#00FF00", label: "Candy"},
 *                    {value: 20, color: "#FFFF00", label: "Fruit"},
 *                    {value: 15, color: "#FF0000", label: "Vegetables"}]}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="treemapOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#treemapOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/treemap.xml">here</a>.</p>
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
 *       <td>Move focus and selection up to the nearest tile or header in same level.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus and selection down to the nearest tile or header in same level.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus and selection to the left to nearest tile or header in same level</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus and selection to the right to nearest tile or header in same level</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>]</kbd> or <kbd>Alt+UpArrow</kbd></td>
 *       <td>Move focus and selection from tile or header to group header in level above.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>[</kbd> or <kbd>Alt+DownArrow</kbd></td>
 *       <td>Move focus and selection from tile or header to group header in level below.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>Move focus and extend selection up to the nearest tile or header in same level.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>Move focus and extend selection down to the nearest tile or header in same level.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+LeftArrow</kbd></td>
 *       <td>Move focus and extend selection to the left to nearest tile or header in same level</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+RightArrow</kbd></td>
 *       <td>Move focus and extend selection to the right to nearest tile or header in same level</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+]</kbd> or <kbd>Shift+Alt+UpArrow</kbd></td>
 *       <td>Move focus and extend selection from tile or header to group header in level above.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+[</kbd> or <kbd>Shift+Alt+DownArrow</kbd></td>
 *       <td>Move focus and extend selection from tile or header to group header in level below.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+UpArrow</kbd></td>
 *       <td>Move focus up to the nearest tile or header in same level, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+DownArrow</kbd></td>
 *       <td>Move focus down to the nearest tile or header in same level, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+LeftArrow</kbd></td>
 *       <td>Move focus to the left to nearest tile or header in same level, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+RightArrow</kbd></td>
 *       <td>Move focus to the right to nearest tile or header in same level, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+]</kbd> or <kbd>Ctrl+Alt+UpArrow</kbd></td>
 *       <td>Move focus from tile or header to group header in level above, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+[</kbd> or <kbd>Ctrl+Alt+DownArrow</kbd></td>
 *       <td>Move focus from tile or header to group header in level below, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Spacebar</kbd></td>
 *       <td>Multi-select tiles or headers with focus.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Enter</kbd></td>
 *       <td>Maximize/Restore on a group header.</td>
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
 * @desc Creates a JET Treemap.
 * @example <caption>Initialize the Treemap with no options specified:</caption>
 * $(".selector").ojTreemap();
 * 
 * @example <caption>Initialize the Treemap with some options:</caption>
 * $(".selector").ojTreemap({nodes: [{value: 75, color: "#00FF00", label: "Candy"}, {value: 20, color: "#FFFF00", label: "Fruit"}, {value: 15, color: "#FF0000", label: "Vegetables"}]});
 * 
 * @example <caption>Initialize the Treemap via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojTreemap'}">
 */
oj.__registerWidget('oj.ojTreemap', $['oj']['dvtBaseComponent'],
  {
    version: "1.0.0",
    widgetEventPrefix: "oj",
    options: {
      /**
       * Triggered when node isolation is turned on or off.
       * 
       * @property {Object} ui event payload
       * @property {Object} ui.item an object with the following properties
       * @property {string} ui.items.id the id of the node
       * @property {string} ui.type specifies whether the node isolation is being turned 'on' or 'off'
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">isolate</code> callback specified:</caption>
       * $(".selector").ojTreemap({
       *   "isolate": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojisolate</code> event:</caption>
       * $(".selector").on("ojisolate", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojTreemap
       * @instance
       */
      isolate: null,
      
      /**
       * Fired whenever a supported component option changes, whether due to user interaction or programmatic 
       * intervention. If the new value is the same as the previous value, no event will be fired. Additional options may 
       * be supported in the future, so listeners should verify which option is changing before taking any action. 
     * Currently supports: <code class="prettyprint">isolatedNode</code>, <code class="prettyprint">selectedNodes</code>
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
       * $(".selector").ojTreemap({
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
       * @memberof! oj.ojTreemap
       * @instance
       */
      optionChange: null,
      
      /**
       * Triggered after data items are selected or de-selected.
       * 
       * @property {Object} ui event payload
       * @property {Array} ui.items an array containing objects describing the selected nodes
       * @property {string} ui.items.id the id of the node
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
       * $(".selector").ojTreemap({
       *   "select": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
       * $(".selector").on("ojselect", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojTreemap
       * @instance
       */
      select: null
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _CreateDvtComponent: function(context, callback, callbackObj) {
      return DvtTreemap.newInstance(context, callback, callbackObj);
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _GetComponentStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses.push('oj-treemap');
      return styleClasses;
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _GetChildStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses['oj-treemap-isolate-icon'] = {'path': '_resources/isolate', 'property': 'CSS_URL'};
      styleClasses['oj-treemap-isolate-icon oj-hover'] = {'path': '_resources/isolateOver', 'property': 'CSS_URL'};
      styleClasses['oj-treemap-isolate-icon oj-active'] = {'path': '_resources/isolateDown', 'property': 'CSS_URL'};

      styleClasses['oj-treemap-restore-icon'] = {'path': '_resources/restore', 'property': 'CSS_URL'};
      styleClasses['oj-treemap-restore-icon oj-hover'] = {'path': '_resources/restoreOver', 'property': 'CSS_URL'};
      styleClasses['oj-treemap-restore-icon oj-active'] = {'path': '_resources/restoreDown', 'property': 'CSS_URL'};

      styleClasses['oj-treemap-attribute-type-text'] = {'path': 'styleDefaults/_attributeTypeTextStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-treemap-attribute-value-text'] = {'path': 'styleDefaults/_attributeValueTextStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      // TODO HZHANG add this once drilling is supported
//    styleClasses['oj-treemapCurrentText '] = {'path' : '', 'property' : 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-treemap-node'] = {'path': 'nodeDefaults/labelStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-treemap-node oj-hover'] = {'path': 'nodeDefaults/hoverColor', 'property': 'border-top-color'};
      styleClasses['oj-treemap-node oj-selected'] = [
        {'path': 'nodeDefaults/selectedOuterColor', 'property': 'border-top-color'},
        {'path': 'nodeDefaults/selectedInnerColor', 'property': 'border-bottom-color'}
      ];
      styleClasses['oj-treemap-node-header'] = [
        {'path': 'nodeDefaults/header/backgroundColor', 'property': 'background-color'},
        {'path': 'nodeDefaults/header/borderColor', 'property': 'border-top-color'},
        {'path': 'nodeDefaults/header/labelStyle', 'property': 'CSS_TEXT_PROPERTIES'}
      ];
      styleClasses['oj-treemap-node-header oj-hover'] = [
        {'path': 'nodeDefaults/header/hoverBackgroundColor', 'property': 'background-color'},
        {'path': 'nodeDefaults/header/hoverOuterColor', 'property': 'border-top-color'},
        {'path': 'nodeDefaults/header/hoverInnerColor', 'property': 'border-bottom-color'}
      ];
      styleClasses['oj-treemap-node-header oj-selected'] = [
        {'path': 'nodeDefaults/header/selectedBackgroundColor', 'property': 'background-color'},
        {'path': 'nodeDefaults/header/selectedOuterColor', 'property': 'border-top-color'},
        {'path': 'nodeDefaults/header/selectedInnerColor', 'property': 'border-bottom-color'}
      ];
      return styleClasses;
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _GetEventTypes : function() {
      return ['isolate', 'optionChange', 'select'];
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _GetTranslationMap: function() {
      // Safe to modify super's map because function guarentees a new map is returned
      var ret = this._super();
      ret['DvtTreemapBundle.COLOR'] = this._GetTranslatedResource('labelColor');
      ret['DvtTreemapBundle.SIZE'] = this._GetTranslatedResource('labelSize');
      return ret;
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _HandleEvent: function(event) {
      var type = event && event.getType ? event.getType() : null, selectedItems, selection, i, selectedItem,
        isolatedNodes, isolatedNode, isolateType;
      if (type === DvtSelectionEvent.TYPE) {
        selectedItems = [];
        selection = event.getSelection();
        for (i = 0; i < selection.length; i++) {
          selectedItem = {'id': selection[i]};
          selectedItems.push(selectedItem);
        }
        // update the options selection state
        this._UserOptionChange('selectedNodes', selection);
        this._trigger('select', null, {'items': selectedItems});
      }
      else if (type === DvtTreemapIsolateEvent.TYPE) {
        // Keep track of all isolated nodes
        isolatedNodes = this.options._isolatedNodes;
        if (!isolatedNodes) {
          this.options._isolatedNodes = [];
          isolatedNodes = this.options._isolatedNodes;
        }

        // If event has id, it's an isolate.  If null id, then restore.      
        isolatedNode = event.getId();
        if (isolatedNode) {
          isolateType = "on";
          isolatedNodes.push(isolatedNode);
          this._UserOptionChange('isolatedNode', isolatedNode);
        }
        else {
          isolateType = "off";
          isolatedNode = isolatedNodes.pop();
          this._UserOptionChange('isolatedNode', (isolatedNodes.length > 0) ? isolatedNodes[isolatedNodes.length] : null);
        }

        this._trigger('isolate', null, {'item': {'id': isolatedNode}, 'type': isolateType});
      }
      else {
        this._super(event);
      }
    },
    
    /**
     * @override
     * @memberof! oj.ojTreemap
     * @instance
     * @protected
     */
    _SupportsOptionChangeEvent : function(key) {
      return key == 'isolatedNode' || key == 'selectedNodes';
    },
    
    /**
     * Returns the subcomponent node represented by the documented locator attribute values.
     * Test authors should target treemap sub elements using the following locators:
     * <ul>
     *   <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN] - A treemap node indexed by its position in the hierarchy</li>
     * </ul>
     * @override
     * @memberof! oj.ojTreemap
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
    getNodeBySubId: function(locator) {
      return this._super(locator);
    },
    
    /**
     * Returns the subId string for the given child DOM node.  Valid treemap subIds include:
     * <ul>
     *   <li>node[nodeIndex0][nodeIndex1]...[nodeIndexN] - A treemap node indexed by its position in the hierarchy</li>
     * </ul>
     * @override
     * @expose
     * @memberof! oj.ojTreemap
     * @instance
     * @param {Element} node The subcomponent node used by the component to lookup the subId string
     * @return {string|null} - the subId for the DOM node or null when none is found
     */
    getSubIdByNode: function(node) {
      return this._super(node);
    },
    
    /**
     * Returns a TreemapNode object for automation testing verification.
     * @param {Array} subIdPath The array of indices in the subId for the desired node
     * @return {Object} An object containing data for the node at the given subIdPath, or null if none exists
     * @expose
     * @memberof! oj.ojTreemap
     * @instance
     */
    getNode: function(subIdPath) {
      var auto = this._component.getAutomation();
      return new oj.TreemapNode(auto.getNode(subIdPath));
    }
  });
/**
 * An object used for automation verification of treemap nodes
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.TreemapNode = function(data) {
  this._data = data;
};

/**
 * Returns the color of the node
 * @returns {String} The node color
 * @export
 */
oj.TreemapNode.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of the node
 * @returns {String} The node label
 * @export
 */
oj.TreemapNode.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns the size of the node
 * @returns {Number} The node size
 * @export
 */
oj.TreemapNode.prototype.getSize = function() {
  return this._data ? this._data['size'] : null;
};

/**
 * Returns the tooltip of the node
 * @returns {String} The node tooltip
 * @export
 */
oj.TreemapNode.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns whether or not the node is selected
 * @returns {Boolean} The node selection state
 * @export
 */
oj.TreemapNode.prototype.isSelected = function() {
  return this._data ? this._data['selected'] : false;
};
});
