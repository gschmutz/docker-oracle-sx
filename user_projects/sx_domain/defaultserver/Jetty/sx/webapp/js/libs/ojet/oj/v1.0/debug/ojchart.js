"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtChart'], function(oj, $)
{
/**
 * An object used for automation verification of chart axes
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartAxis = function(data) {
  this._data = data;
};

/**
 * Returns the title of an axis
 * @return {String} The axis title
 * @export
 */
oj.ChartAxis.prototype.getTitle = function() {
  return this._data ? this._data['title'] : null;
};

/**
 * Returns the bounds of an axis
 * @return {Object} An object containing the x, y coordinates and width and height of the axis
 * @export
 */
oj.ChartAxis.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

/**
 * An object used for automation verification of spark chart data items
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.SparkChartDataItem = function(data) {
  this._data = data;
};

/**
 * Returns the border color of a spark chart data item
 * @returns {String} The data item border color
 * @export
 */
oj.SparkChartDataItem.prototype.getBorderColor = function() {
  return this._data ? this._data['borderColor'] : null;
};

/**
 * Returns the color of a spark chart data item
 * @returns {String} The data item color
 * @export
 */
oj.SparkChartDataItem.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the date of a spark chart data item.
 * @returns {Date} The data item date
 * @export
 */
oj.SparkChartDataItem.prototype.getDate = function() {
  return this._data ? this._data['date'] : null;
};

/**
 * Returns the float value of a spark chart data item. Only applies to floatingBar sparkChart types.
 * @returns {Number} The data item float value
 * @export
 */
oj.SparkChartDataItem.prototype.getFloatValue = function() {
  return this._data ? this._data['floatValue'] : null;
};

/**
 * Returns the value of a spark chart data item.
 * @returns {Number} The data item value
 * @export
 */
oj.SparkChartDataItem.prototype.getValue = function() {
  return this._data ? this._data['value'] : null;
};


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojChart
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="chartOverview-section">
 *   JET Chart Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#chartOverview-section"></a>
 * </h3>
 * 
 * <p>Chart component for JET with support for bar, line, area, combination, pie, scatter, bubble, and funnel
 * charts.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojChart',
 *   type: 'bar',
 *   series: [{name: 'Q1 Sales', items: [50, 60, 20]}],  
 *   groups: ['Phones', 'Tablets', 'Laptops']
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="chartOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#chartOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/chart.xml">here</a>.</p>
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
 *       <td>Move focus and selection to previous data item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move focus and selection to next data item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move focus and selection to previous data item (on left).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move focus and selection to next data item (on right).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+UpArrow</kbd></td>
 *       <td>Move focus and multi-select previous data item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+DownArrow</kbd></td>
 *       <td>Move focus and multi-select next data item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+LeftArrow</kbd></td>
 *       <td>Move focus and multi-select previous data item (on left).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+RightArrow</kbd></td>
 *       <td>Move focus and multi-select next data item (on right).</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+UpArrow</kbd></td>
 *       <td>Move focus to previous data item, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+DownArrow</kbd></td>
 *       <td>Move focus to next data item, without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+LeftArrow</kbd></td>
 *       <td>Move focus to previous data item (on left), without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+RightArrow</kbd></td>
 *       <td>Move focus to next data item (on right), without changing the current selection.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Spacebar</kbd></td>
 *       <td>Multi-select data item with focus.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>= or +</kbd></td>
 *       <td>Zoom in one level if zooming is enabled</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>- or _</kbd></td>
 *       <td>Zoom out one level if zooming is enabled</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>PageUp</kbd></td>
 *       <td>Pan up if scrolling is enabled</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>PageDown</kbd></td>
 *       <td>Pan down if scrolling is enabled</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+PageUp</kbd></td>
 *       <td>Pan left in left-to-right locales. Pan right in right-to-left locales.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+PageDown</kbd></td>
 *       <td>Pan right in left-to-right locales. Pan left in right-to-left locales.</td>
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
 * @desc Creates a JET Chart.
 * @example <caption>Initialize the Chart with no options specified:</caption>
 * $(".selector").ojChart();
 * 
 * @example <caption>Initialize the Chart with some options:</caption>
 * $(".selector").ojChart({type: 'bar'});
 * 
 * @example <caption>Initialize the Chart via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojChart'}">
 */
oj.__registerWidget('oj.ojChart', $['oj']['dvtBaseComponent'],
  {
    version: "1.0.0",
    widgetEventPrefix: "oj",
    options: {
      /**
       * Triggered when a category of data items is hidden or shown. 
       * 
       * @property {Object} ui event payload
       * @property {Object} ui.category the category that was filtered on
       * @property {string} ui.type specifies whether the category is being filtered 'in' or 'out'
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">categoryFilter</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "categoryFilter": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryfilter</code> event:</caption>
       * $(".selector").on("ojcategoryfilter", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      categoryFilter: null,
      /**
       * Triggered when a category of data items is highlighted. 
       * 
       * @property {Object} ui event payload
       * @property {Array} ui.categories the categories that are being highlighted
       * @property {string} ui.type specifies whether highlighting is being turned 'on' or 'off'
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">categoryHighlight</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "categoryHighlight": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojcategoryhighlight</code> event:</caption>
       * $(".selector").on("ojcategoryhighlight", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      categoryHighlight: null,
    
      /**
       * Fired whenever a supported component option changes, whether due to user interaction or programmatic 
       * intervention. If the new value is the same as the previous value, no event will be fired. Additional options may 
       * be supported in the future, so listeners should verify which option is changing before taking any action. 
       * Currently supports: <code class="prettyprint">selectedItems</code>
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
       * $(".selector").ojChart({
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
       * @memberof! oj.ojChart
       * @instance
       */
      optionChange: null,
      
      /**
       * Triggered after data items are selected or de-selected.
       * 
       * @property {Object} ui event payload
       * @property {Array} ui.items an array containing objects describing the selected data items
       * @property {string} ui.items.id the id of the data item, if one was specified
       * @property {string} ui.items.group the group of the data item
       * @property {string} ui.items.series the series of the data item
       * @property {string} ui.endGroup the end group of a marquee selection on a chart with categorical axis
       * @property {string} ui.startGroup the start group of a marquee selection on a chart with categorical axis
       * @property {number} ui.xMax the maximum x value of a marquee selection 
       * @property {number} ui.xMin the minimum x value of a marquee selection 
       * @property {number} ui.yMax the maximum y value of a marquee selection 
       * @property {number} ui.yMin the minimum y value of a marquee selection 
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "select": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
       * $(".selector").on("ojselect", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      select: null,
      
      /**
       * Triggered during a selection gesture, such as a change in the marquee selection rectangle.
       * 
       * @property {Object} ui event payload
       * @property {Array} ui.items an array containing objects describing the selected data items
       * @property {string} ui.items.id the id of the data item, if one was specified
       * @property {string} ui.items.group the group of the data item
       * @property {string} ui.items.series the series of the data item
       * @property {string} ui.endGroup the end group of a marquee selection on a chart with categorical axis
       * @property {string} ui.startGroup the start group of a marquee selection on a chart with categorical axis
       * @property {number} ui.xMax the maximum x value of a marquee selection 
       * @property {number} ui.xMin the minimum x value of a marquee selection 
       * @property {number} ui.yMax the maximum y value of a marquee selection 
       * @property {number} ui.yMin the minimum y value of a marquee selection 
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">selectInput</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "selectInput": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselectinput</code> event:</caption>
       * $(".selector").on("ojselectinput", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      selectInput: null,
      
      /**
       * Triggered after the viewport is changed due to a zoom or scroll operation.
       * 
       * @property {Object} ui event payload
       * @property {string} ui.endGroup the end group of the new viewport on a chart with categorical axis
       * @property {string} ui.startGroup the start group of the new viewport on a chart with categorical axis
       * @property {number} ui.xMax the maximum x value of the new viewport
       * @property {number} ui.xMin the minimum x value of the new viewport
       * @property {number} ui.yMax the maximum y value of the new viewport
       * @property {number} ui.yMin the minimum y value of the new viewport
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">viewportChange</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "viewportChange": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojviewportchange</code> event:</caption>
       * $(".selector").on("ojviewportchange", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      viewportChange: null,
      
      /**
       * Triggered during a viewport change gesture, such as a drag operation on the overview window. Note: There are
       * situations where the component cannot determine whether the viewport change gesture is still in progress, such
       * as with mouse wheel zoom interactions. Standard viewportChange events are fired in these cases.
       * 
       * @property {Object} ui event payload
       * @property {string} ui.endGroup the end group of the new viewport on a chart with categorical axis
       * @property {string} ui.startGroup the start group of the new viewport on a chart with categorical axis
       * @property {number} ui.xMax the maximum x value of the new viewport
       * @property {number} ui.xMin the minimum x value of the new viewport
       * @property {number} ui.yMax the maximum y value of the new viewport
       * @property {number} ui.yMin the minimum y value of the new viewport
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">viewportChangeInput</code> callback specified:</caption>
       * $(".selector").ojChart({
       *   "viewportChangeInput": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojviewportchangeinput</code> event:</caption>
       * $(".selector").on("ojviewportchangeinput", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojChart
       * @instance
       */
      viewportChangeInput: null
    },
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _CreateDvtComponent: function(context, callback, callbackObj) {
      return DvtChart.newInstance(context, callback, callbackObj);
    },
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _ProcessStyles: function() {
      this._super();
      if (!this.options['styleDefaults'])
        this.options['styleDefaults'] = {};
      if (!this.options['styleDefaults']['colors']) {
        var handler = new oj.ColorAttributeGroupHandler();
        // override default colors with css attribute group colors
        this.options['styleDefaults']['colors'] = handler.getValueRamp();
      }
    },
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _GetComponentStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses.push('oj-chart');
      return styleClasses;
    },
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _GetChildStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses['oj-chart-footnote'] = {'path': 'footnote/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-slice-label'] = {'path': 'styleDefaults/sliceLabelStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-subtitle'] = {'path': 'subtitle/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-title'] = {'path': 'title/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-xaxis-tick-label'] = {'path': 'xAxis/tickLabel/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-xaxis-title'] = {'path': 'xAxis/titleStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-yaxis-tick-label'] = {'path': 'yAxis/tickLabel/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-yaxis-title'] = {'path': 'yAxis/titleStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-y2axis-tick-label'] = {'path': 'y2Axis/tickLabel/style', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-chart-y2axis-title'] = {'path': 'y2Axis/titleStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-legend'] = {'path': 'legend/textStyle', 'property': 'CSS_TEXT_PROPERTIES'};
      styleClasses['oj-legend-title'] = {'path': 'legend/titleStyle', 'property': 'CSS_TEXT_PROPERTIES'};

      // Images
      styleClasses['oj-chart-pan-icon'] = {'path': '_resources/panUp', 'property': 'CSS_URL'};
      styleClasses['oj-chart-pan-icon oj-active'] = {'path': '_resources/panDown', 'property': 'CSS_URL'};
      styleClasses['oj-chart-select-icon'] = {'path': '_resources/selectUp', 'property': 'CSS_URL'};
      styleClasses['oj-chart-select-icon oj-active'] = {'path': '_resources/selectDown', 'property': 'CSS_URL'};
      styleClasses['oj-chart-zoom-icon'] = {'path': '_resources/zoomUp', 'property': 'CSS_URL'};
      styleClasses['oj-chart-zoom-icon oj-active'] = {'path': '_resources/zoomDown', 'property': 'CSS_URL'};
      return styleClasses;
    },
    
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _GetEventTypes : function() {
      return ['categoryFilter', 'categoryHighlight', 'optionChange', 'select', 'selectInput', 
              'viewportChange', 'viewportChangeInput'];
    },
    
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _GetTranslationMap: function() {
      // Safe to modify super's map because function guarentees a new map is returned
      var ret = this._super();
      ret['DvtChartBundle.DEFAULT_GROUP_NAME'] = this._GetTranslatedResource('labelDefaultGroupName', ['groupName']);
      ret['DvtChartBundle.EMPTY_TEXT'] = this._GetTranslatedResource('msgNoData');
      ret['DvtChartBundle.INVALID_DATA'] = this._GetTranslatedResource('msgInvalidData');
      ret['DvtChartBundle.LABEL_SERIES'] = this._GetTranslatedResource('labelSeries', ['seriesName']);
      ret['DvtChartBundle.LABEL_GROUP'] = this._GetTranslatedResource('labelGroup', ['groupName']);
      ret['DvtChartBundle.LABEL_VALUE'] = this._GetTranslatedResource('labelValue', ['value']);
      ret['DvtChartBundle.LABEL_TARGET_VALUE'] = this._GetTranslatedResource('labelTargetValue', ['targetValue']);
      ret['DvtChartBundle.LABEL_X'] = this._GetTranslatedResource('labelX', ['x']);
      ret['DvtChartBundle.LABEL_Y'] = this._GetTranslatedResource('labelY', ['y']);
      ret['DvtChartBundle.LABEL_Z'] = this._GetTranslatedResource('labelZ', ['z']);
      ret['DvtChartBundle.LABEL_LOW'] = this._GetTranslatedResource('labelLow', ['low']);
      ret['DvtChartBundle.LABEL_HIGH'] = this._GetTranslatedResource('labelHigh', ['high']);
      ret['DvtChartBundle.LABEL_OTHER'] = this._GetTranslatedResource('labelOther');
      ret['DvtChartBundle.PAN'] = this._GetTranslatedResource('tooltipPan');
      ret['DvtChartBundle.MARQUEE_SELECT'] = this._GetTranslatedResource('tooltipSelect');
      ret['DvtChartBundle.MARQUEE_ZOOM'] = this._GetTranslatedResource('tooltipZoom');
      return ret;
    },
  
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _HandleEvent: function(event) {
      var type = event && event.getType ? event.getType() : null;
      if (type === DvtSelectionEvent.TYPE || type === DvtSelectionEvent.TYPE_INPUT) {
        var selection = event.getSelection();
        if (selection) {
          // Convert the graph selection context into the JET context
          var selectedItems = [];
          for (var i = 0; i < selection.length; i++) {
            var selectedItem = {'id': selection[i].getId(),
              'series': selection[i].getSeries(),
              'group': selection[i].getGroup()};
            selectedItems.push(selectedItem);
          }
          
          // Update the options selection state if this is a non-input event
          if(type === DvtSelectionEvent.TYPE)
            this._UserOptionChange('selectedItems', selectedItems);

          var selectPayload = {
            'items': selectedItems,
            'endGroup': event.getEndGroup(), 'startGroup': event.getStartGroup(),
            'xMax': event.getXMax(), 'xMin': event.getXMin(),
            'yMax': event.getYMax(), 'yMin': event.getYMin()
          };
          
          this._trigger(type === DvtSelectionEvent.TYPE ? 'select' : 'selectInput', null, selectPayload);
        }
      }
      else if (type === DvtCategoryHideShowEvent.TYPE_HIDE || type === DvtCategoryHideShowEvent.TYPE_SHOW) {
        var filterType = (type === DvtCategoryHideShowEvent.TYPE_HIDE) ? 'out' : 'in';
        var series = this.options['series'];
        for (var i = 0; i < series.length; i++) {
          if (series[i]['name'] == event.getCategory())
            series[i]['visibility'] = (type === DvtCategoryHideShowEvent.TYPE_HIDE ? 'hidden' : 'visible');
        }
        this._trigger('categoryFilter', null, {'category': event.getCategory(), 'type': filterType});
      }
      else if (type === DvtCategoryRolloverEvent.TYPE_OVER || type === DvtCategoryRolloverEvent.TYPE_OUT) {
        var highlightType = (type === DvtCategoryRolloverEvent.TYPE_OVER) ? 'on' : 'off';
        this._trigger('categoryHighlight', null, {'categories': [event.getCategory()], 'type': highlightType});
      }
      else if (type === DvtChartViewportChangeEvent.TYPE || type === DvtChartViewportChangeEvent.TYPE_INPUT) {
        var viewportChangePayload = {'endGroup': event.getEndGroup(), 'startGroup': event.getStartGroup(),
          'xMax': event.getXMax(), 'xMin': event.getXMin(),
          'yMax': event.getYMax(), 'yMin': event.getYMin()};
          
        this._trigger(type === DvtChartViewportChangeEvent.TYPE ? 'viewportChange' : 'viewportChangeInput', null, viewportChangePayload);
      }
      else {
        this._super(event);
      }
    },
    
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _LoadResources: function() {
      // Ensure the resources object exists
      if (this.options['_resources'] == null)
        this.options['_resources'] = {};

      var resources = this.options['_resources'];

      // Add images
      resources['overviewGrippy'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/drag_horizontal.png');

      // Add cursors
      resources['panCursorDown'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-closed.cur');
      resources['panCursorUp'] = oj.Config.getResourceUrl('resources/internal-deps/dvt/chart/hand-open.cur');
    },
    
    /**
     * @override
     * @memberof! oj.ojChart
     * @instance
     * @protected
     */
    _SupportsOptionChangeEvent : function(key) {
      return key == 'selectedItems';
    },
    
    /**
     * Returns the subcomponent node represented by the documented locator attribute values.
     * Test authors should target chart sub elements using the following locators:
     * <ul>
     *   <li>dataItem[seriesIndex][groupIndex] - A data item indexed by its series index and group index. [groupIndex] 
     *       is not required for pie and funnel chart types.</li>
     *   <li>series[seriesIndex] - A legend item that represents the series with the given seriesIndex</li>
     *   <li>group[groupIndex] - A categorical axis label that represents the group with the given groupIndex</li>
     * </ul>
     * @override
     * @expose
     * @memberof! oj.ojChart
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
     * Returns the subId string for the given child DOM node. Valid chart subIds include:
     * <ul>
     *   <li>dataItem[seriesIndex][groupIndex] - A data item indexed by its series index and group index. [groupIndex] 
     *       is not required for pie and funnel chart types.</li>
     *   <li>series[seriesIndex] - A legend item that represents the series with the given seriesIndex</li>
     *   <li>group[groupIndex] - A categorical axis label that represents the group with the given groupIndex</li>
     * </ul> 
     * @override
     * @expose
     * @memberof! oj.ojChart
     * @instance
     * @param {Element} node The subcomponent node used by the component to lookup the subId string
     * @return {string|null} - the subId for the DOM node or null when none is found
     */
    getSubIdByNode: function(node) {
      return this._super(node);
    },
    
    /**
     * Returns the chart title. 
     * @return {String} The chart title
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getTitle: function() {
      var auto = this._component.getAutomation();
      return auto.getTitle();
    },
    
    /**
     * Returns the group corresponding to the given index
     * @param {String} groupIndex the group index
     * @return {String} The group name corresponding to the given group index
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getGroup: function(groupIndex) {
      var auto = this._component.getAutomation();
      return auto.getGroup(groupIndex);
    },
    
    /**
     * Returns the series corresponding to the given index
     * @param {String} seriesIndex the series index
     * @return {String} The series name corresponding to the given series index
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getSeries: function(seriesIndex) {
      var auto = this._component.getAutomation();
      return auto.getSeries(seriesIndex);
    },
    
    /**
     * Returns number of groups in the chart data
     * @return {Number} The number of groups
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getGroupCount: function() {
      var auto = this._component.getAutomation();
      return auto.getGroupCount();
    },
    
    /**
     * Returns number of series in the chart data
     * @return {Number} The number of series
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getSeriesCount: function() {
      var auto = this._component.getAutomation();
      return auto.getSeriesCount();
    },
    
    /**
     * Returns a ChartDataItem object for automation testing verification.
     * @param {Number} seriesIndex The series index
     * @param {Number} groupIndex The group index
     * @return {Object} The chart data item with the given series index and group index 
     *                             or null if none exists
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getDataItem: function(seriesIndex, groupIndex) {
      var auto = this._component.getAutomation();
      return new oj.ChartDataItem(auto.getDataItem(seriesIndex, groupIndex));
    },
    
    /**
     * Returns a ChartLegend object for automation testing verification.
     * @return {Object} The legend for this chart
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getLegend: function() {
      var auto = this._component.getAutomation();
      return new oj.ChartLegend(auto.getLegend());
    },
    
    /**
     * Returns a ChartPlotArea object for automation testing verification.
     * @return {Object} The plot area for this chart
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getPlotArea: function() {
      var auto = this._component.getAutomation();
      return new oj.ChartPlotArea(auto.getPlotArea());
    },
    
    /**
     * Returns a ChartAxis object for automation testing verification.
     * @return {Object} The xAxis for this chart or null if it doesn't exist
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getXAxis: function() {
      var auto = this._component.getAutomation();
      return new oj.ChartAxis(auto.getXAxis());
    },
    
    /**
     * Returns a ChartAxis object for automation testing verification.
     * @return {Object} The yAxis for this chart or null if it doesn't exist
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getYAxis: function() {
      var auto = this._component.getAutomation();
      return new oj.ChartAxis(auto.getYAxis());
    },
    
    /**
     * Returns a ChartAxis object for automation testing verification.
     * @return {Object} The y2Axis for this chart or null if it doesn't exist
     * @expose
     * @instance
     * @memberof! oj.ojChart
     */
    getY2Axis: function() {
      var auto = this._component.getAutomation();
      return new oj.ChartAxis(auto.getY2Axis());
    }
  });
/**
 * An object used for automation verification of a chart plot area
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartPlotArea = function(data) {
  this._data = data;
};

/**
 * Returns the bounds of the plot area
 * @return {Object} An object containing the x, y coordinates and width and height of the plotarea
 * @export
 */
oj.ChartPlotArea.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

/**
 * An object used for automation verification of a chart legend
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartLegend = function(data) {
  this._data = data;
};

/**
 * Returns the title of a legend
 * @return {String} The legend title
 * @export
 */
oj.ChartLegend.prototype.getTitle = function() {
  return this._data ? this._data['title'] : null;
};

/**
 * Returns the bounds of a legend
 * @return {Object} An object containing the x, y coordinates and width and height of the legend
 * @export
 */
oj.ChartLegend.prototype.getBounds = function() {
  return this._data ? this._data['bounds'] : null;
};

/**
 * @class 
 * @name oj.ojSparkChart
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="sparkChartOverview-section">
 *   JET Spark Chart Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sparkChartOverview-section"></a>
 * </h3>
 * 
 * <p>Spark Chart component for JET with support for bar, line, area, and floating bar subtypes.  Spark Charts are
 * designed to visualize the trend of a data set in a compact form factor.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojSparkChart', 
 *   type: 'line', 
 *   items: [5, 8, 2, 7, 0, 9]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="sparkChartOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#sparkChartOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/sparkChart.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.</p>
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
 * @desc Creates a JET Spark Chart. 
 * @example <caption>Initialize the Chart with no options specified:</caption>
 * $(".selector").ojSparkChart();
 * 
 * @example <caption>Initialize the Spark Chart with some options:</caption>
 * $(".selector").ojSparkChart({type: 'line', items: [5, 8, 2, 7, 0, 9]});
 * 
 * @example <caption>Initialize the Spark Chart via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojSparkChart'}">
 */
oj.__registerWidget('oj.ojSparkChart', $['oj']['dvtBaseComponent'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  
  /**
   * @override
   * @memberof! oj.ojSparkChart
   * @instance
   * @protected
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtSparkChart.newInstance(context, callback, callbackObj);
  },  
  
  /**
   * @override
   * @memberof! oj.ojSparkChart
   * @instance
   * @protected
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-sparkchart');
    return styleClasses;
  },
  
  /**
   * @override
   * @memberof! oj.ojSparkChart
   * @instance
   * @protected
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip. Remove title from div to avoid browser default tooltip.
    if(this.element.attr('title'))
    {
      this.options['shortDesc'] =  this.element.attr('title');
      this.element.data( this.element,'title', this.element.attr('title'));
      this.element.removeAttr('title');
    }
    else if (this.element.data('title'))
      this.options['shortDesc'] =  this.element.data('title');
  
    // Call the super to render
    this._super();
  },  
  
  /**
   * Returns the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spark chart sub elements using the following locators:
   * <ul>
   *   <li>dataItem[itemIndex] - A data item indexed by its location in the item array</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojSparkChart
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
   * Returns the subId string for the given child DOM node. Valid spark chart subIds include:
   * <ul>
   *   <li>dataItem[itemIndex] - A data item indexed by its location in the item array</li>
   * </ul>
   * @override
   * @expose
   * @memberof! oj.ojSparkChart
   * @instance
   * @param {Element} node The subcomponent node used by the component to lookup the subId string
   * @return {string|null} - the subId for the DOM node or null when none is found
   */
  getSubIdByNode:function(node) {
    return this._super(node);  
  },
  
  /**
   * Returns a SparkChartDataItem object for automation testing verification.
   * @param {String} itemIndex The dataItem index
   * @return {Object} The spark chart data item with the given item index
   * @expose
   * @instance
   * @memberof! oj.ojSparkChart
   */
  getDataItem: function(itemIndex) {
    var auto = this._component.getAutomation();
    return new oj.SparkChartDataItem(auto.getDataItem(itemIndex));
  }
});
/**
 * An object used for automation verification of chart data items
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ChartDataItem = function(data) {
  this._data = data;
};

/**
 * Returns the group of a chart data item
 * @returns {String} The data item group
 * @export
 */
oj.ChartDataItem.prototype.getGroup = function() {
  return this._data ? this._data['group'] : null;
};

/**
 * Returns the series of a chart data item
 * @returns {String} The data item series
 * @export
 */
oj.ChartDataItem.prototype.getSeries = function() {
  return this._data ? this._data['series'] : null;
};

/**
 * Returns the border color of a chart data item
 * @returns {String} The data item border color
 * @export
 */
oj.ChartDataItem.prototype.getBorderColor = function() {
  return this._data ? this._data['borderColor'] : null;
};

/**
 * Returns the color of a chart data item
 * @returns {String} The data item color
 * @export
 */
oj.ChartDataItem.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of a chart data item
 * @returns {String} The data item label
 * @export
 */
oj.ChartDataItem.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns the value of a chart data item.
 * @returns {Number} The data item value
 * @export
 */
oj.ChartDataItem.prototype.getValue = function() {
  return this._data ? this._data['value'] : null;
};

/**
 * Returns the target value of a chart data item. Only applies to funnel chart types.
 * @returns {Number} The data item target value
 * @export
 */
oj.ChartDataItem.prototype.getTargetValue = function() {
  return this._data ? this._data['targetValue'] : null;
};

/**
 * Returns the tooltip of a chart data item.
 * @returns {String} The data item tooltip
 * @export
 */
oj.ChartDataItem.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the x value of a chart data item.
 * @returns {Number} The data item x value
 * @export
 */
oj.ChartDataItem.prototype.getX = function() {
  return this._data ? this._data['x'] : null;
};

/**
 * Returns the y value of a chart data item.
 * @returns {Number} The data item y value
 * @export
 */
oj.ChartDataItem.prototype.getY = function() {
  return this._data ? this._data['y'] : null;
};

/**
 * Returns the z value of a chart data item.
 * @returns {Number} The data item z value
 * @export
 */
oj.ChartDataItem.prototype.getZ = function() {
  return this._data ? this._data['z'] : null;
};

/**
 * Returns whether or not the data item is selected
 * @returns {Boolean} The data item selection state
 * @export
 */
oj.ChartDataItem.prototype.isSelected = function() {
  return this._data ? this._data['selected'] : false;
};
});
