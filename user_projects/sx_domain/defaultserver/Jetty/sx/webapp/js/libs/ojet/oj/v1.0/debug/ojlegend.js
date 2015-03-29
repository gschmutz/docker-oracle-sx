"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtLegend'], function(oj, $)
{
/**
 * An object used for automation verification of legend items
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.LegendItem = function(data) {
  this._data = data;
};

/**
 * Returns the text of a legend item
 * @returns {String} The legend item text
 * @export
 */
oj.LegendItem.prototype.getText = function() {
  return this._data ? this._data['text'] : null;
};
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojLegend
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="legendOverview-section">
 *   JET Legend Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#legendOverview-section"></a>
 * </h3>
 * 
 * <p>Legend component for JET.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojLegend',
 *   orientation: 'vertical',
 *   sections: [{text : "Database"},
 *              {text : "Middleware"},
 *              {text : "Applications"}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="legendOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#legendOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/legend.xml">here</a>.</p>
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
 *       <td>Move focus to previous item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus to next item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus to previous item (on left).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus to next item (on right).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Enter</kbd></td>
 *       <td>Hides or unhides the data associated with the current item.</td>
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
 * @desc Creates a JET Legend.
 * @example <caption>Initialize the Legend with no options specified:</caption>
 * $(".selector").ojLegend();
 * 
 * @example <caption>Initialize the Legend with some options:</caption>
 * $(".selector").ojLegend({orientation: 'vertical', sections: [{text : "Database"}, {text : "Middleware"}, {text : "Applications"}});
 * 
 * @example <caption>Initialize the Legend via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojLegend'}">
 */
oj.__registerWidget('oj.ojLegend', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj",  
  options: {
    /**
     * Triggered when a category of data items is hidden or shown. TODO: This event is in development and may change.
     * 
     * @property {Object} ui event payload
     * @property {Object} ui.category the category that was filtered on
     * @property {string} ui.type specifies whether the category is being filtered 'in' or 'out'
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">categoryFilter</code> callback specified:</caption>
     * $(".selector").ojLegend({
     *   "categoryFilter": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryfilter</code> event:</caption>
     * $(".selector").on("ojcategoryfilter", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojLegend
     * @instance
     */
    categoryFilter : null,
    
    /**
     * Triggered when a category of data items is highlighted. TODO: This event is in development and may change.
     * 
     * @property {Object} ui event payload
     * @property {Array} ui.categories the categories that are being highlighted
     * @property {string} ui.type specifies whether highlighting is being turned 'on' or 'off'
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">categoryHighlight</code> callback specified:</caption>
     * $(".selector").ojLegend({
     *   "categoryHighlight": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryhighlight</code> event:</caption>
     * $(".selector").on("ojcategoryhighlight", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojLegend
     * @instance
     */
    categoryHighlight : null
  },
  
  /**
   * @override
   * @memberof! oj.ojLegend
   * @instance
   * @protected
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtLegend.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   * @memberof! oj.ojLegend
   * @instance
   * @protected
   */
  _GetChildStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses['oj-legend'] = {'path' : 'textStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-legendTitle'] = {'path' : 'titleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    // TODO HZHANG: Need to support a default sectionTitleStyle property
    styleClasses['oj-legendSectionTitle'] = {'path' : '_sectionTitleStyle', 'property' : 'CSS_TEXT_PROPERTIES'};
    return styleClasses;
  },
  
  /**
   * @override
   * @memberof! oj.ojLegend
   * @instance
   * @protected
   */
  _GetEventTypes : function() {
    return ['categoryFilter', 'categoryHighlight'];
  },
    
  /**
   * @override
   * @memberof! oj.ojLegend
   * @instance
   * @protected
   */
  _HandleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null, filterType, highlightType;
    if(type === DvtCategoryHideShowEvent.TYPE_HIDE || type === DvtCategoryHideShowEvent.TYPE_SHOW) {
      filterType = (type === DvtCategoryHideShowEvent.TYPE_HIDE) ? 'out' : 'in';
      this._updateLegendItemVisibility(this.options['sections'], event.getCategory(), filterType);
      this._trigger('categoryFilter', null, {'category': event.getCategory(), 'type': filterType});
    }
    else if(type === DvtCategoryRolloverEvent.TYPE_OVER || type === DvtCategoryRolloverEvent.TYPE_OUT) {
      highlightType = (type === DvtCategoryRolloverEvent.TYPE_OVER) ? 'on' : 'off';
      this._trigger('categoryHighlight', null, {'categories': [event.getCategory()], 'type': highlightType});
    }
    else {
      this._super(event);
    }
  },
  
  /**
   * Updates item visibility state in options for categoryFilter events
   * @param {Array} sections An array of legend sections
   * @param {String} category The category of the categoryFilter event
   * @param {String} filterType The filtered state: out for hidden or in for visible.
   * @private
   */
  _updateLegendItemVisibility : function(sections, category, filterType) {
    if (!sections)
      return;
    for (var i = 0; i < sections.length; i++) {
      if (!sections[i]['items']) {
        this._updateLegendItemVisibility(sections[i]['sections'], category, filterType);
      } else {
        var items = sections[i]['items'];
        for (var j = 0; j < items.length; j++) {
          if ((items[j]['id'] && items[j]['id'] == category) || 
            (!items[j]['id'] && items[j]['text'] == category)) {
            items[j]['categoryVisibility'] = (filterType == 'out' ? 'hidden' : 'visible');
          }
        }
      }
    }
  },
  
  /**
   * Returns the subcomponent node represented by the documented locator attribute values.
   * Test authors should target legend sub elements using the following locators:
   * <ul>
   *   <li>section[sectionIndex] - A legend indexed by its position in the legend's section array</li>
   *   <li>section[sectionIndex]:item[itemIndex] - A legend item indexed by its position in its parent section's
   *                                               item array and its parent's sectionIndex</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojLegend
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
   * Returns the subId string for the given child DOM node. Valid legend subIds include:
   * <ul>
   *   <li>section[sectionIndex] - A legend indexed by its position in the legend's section array</li>
   *   <li>section[sectionIndex]:item[itemIndex] - A legend item indexed by its position in its parent section's
   *                                               item array and its parent's sectionIndex</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojLegend
   * @instance
   * @param {Element} node The subcomponent node used by the component to lookup the subId string
   * @return {string|null} - the subId for the DOM node or null when none is found
   */
  getSubIdByNode:function(node) {
    return this._super(node);  
  },
  
  /**
   * Returns the legend title for automation testing verification.
   * @return {String} The legend title
   * @expose
   * @instance
   * @memberof! oj.ojLegend
   */
  getTitle : function() {
    var auto = this._component.getAutomation();
    return auto.getTitle();
  },
  
  /**
   * Returns a LegendSection  object for automation testing verification.
   * @param {Array} subIdPath The array of indices in the subId for the desired legend section
   * @return {Object} An object containing data for the legend section at the given subIdPath, or null if none exists
   * @expose
   * @instance
   * @memberof! oj.ojLegend
   */
  getSection : function(subIdPath) {
    var auto = this._component.getAutomation();
    return new oj.LegendSection(auto.getSection(subIdPath));
  },
  
  /**
   * Returns a LegendItem object for automation testing verification.
   * @param {Array} subIdPath The array of indices in the subId for the desired legend item
   * @return {Object} An object containing data for the legend item at the given subIdPath, or null if none exists
   * @expose
   * @instance
   * @memberof! oj.ojLegend
   */
  getItem : function(subIdPath) {
    var auto = this._component.getAutomation();
    return new oj.LegendItem(auto.getItem(subIdPath));
  },
          
  /**
   * Returns the preferred size of the legend, given the available width and height.
   * @param {Number} width The available width.
   * @param {Number} height The available height.
   * @return {Object} An object containing the preferred width and height.
   * @expose
   * @instance
   * @memberof! oj.ojLegend
   */
  getPreferredSize : function(width, height) {
    var dims = this._component.getPreferredSize(this.options, width, height);
    return {'width': dims.getWidth(), 'height': dims.getHeight()};
  }
});
/**
 * An object used for automation verification of legend sections
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.LegendSection = function(data) {
  this._data = data;
};

/**
 * Returns the title of a legend section
 * @returns {String} The legend section title
 * @export
 */
oj.LegendSection.prototype.getTitle = function() {
  return this._data ? this._data['title'] : null;
};

/**
 * Returns a nested section within a legend section
 * @param {Number} sectionIndex The position of the desired section in the sections array
 * @returns {Object} The legend section
 * @export
 */
oj.LegendSection.prototype.getSection = function(sectionIndex) {
  return this._data['sections'] ? new oj.LegendSection(this._data['sections'][sectionIndex]) : null;
};

/**
 * Returns an item within a legend section
 * @param {Number} itemIndex The position of the desired item in the items array
 * @returns {Object} The legend item
 * @export
 */
oj.LegendSection.prototype.getItem = function(itemIndex) {
  return this._data['items'] ? new oj.LegendItem(this._data['items'][itemIndex]) : null;
};


});
