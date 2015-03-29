"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtThematicMap'], function(oj, $)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class 
 * @name oj.ojThematicMap
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="thematicMapOverview-section">
 *   JET Thematic Map Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#thematicMapOverview-section"></a>
 * </h3>
 * 
 * <p>Thematic Map component for JET. Thematic maps are used to display data corresponding to a geographic location
 * or region, such as election data for a state or sales by territory for a product.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojThematicMap',
 *   basemap: 'usa',
 *   areaLayers: [{
 *     layer: 'states',
 *     areaDataLayer: {
 *       areas: [{color:'#003366', location:'FL'},
 *               {color:'#CC3300', location:'TX'},
 *               {color:'#99CC33', location:'CA'}]
 *     }
 *   }]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="thematicMapOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#thematicMapOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/thematicMap.xml">here</a>.</p>
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
 *   <tr><td><kbd>Tab</kbd></td><td>Move focus to map and then to next component</td></tr>
 *   <tr><td><kbd>Shift+Tab</kbd></td><td>Move focus to map and then to previous component</td></tr>
 *   <tr><td><kbd>= or +</kbd></td><td>Zoom in one level if zooming is enabled</td></tr>
 *   <tr><td><kbd>- or _</kbd></td><td>Zoom out one level if zooming is enabled</td></tr>
 *   <tr><td><kbd>0</kbd></td><td>Zoom to fit map if zooming is enabled</td></tr>
 *   <tr><td><kbd>Ctrl+Alt+0</kbd></td><td>Zoom to fit region with focus</td></tr>
 *   <tr><td><kbd>Ctrl+0</kbd></td><td>Zoom to fit selected regions</td></tr>
 *   <tr><td><kbd>Ctrl+Shift+0</kbd></td><td>Reset map</td></tr>
 *   <tr><td><kbd>PageUp</kbd></td><td>Pan up</td></tr>
 *   <tr><td><kbd>PageDown</kbd></td><td>Pan down</td></tr>
 *   <tr><td><kbd>Shift+PageUp</kbd></td><td>Pans left in left to right locales.  Pans right in right to left locales.</td></tr>
 *   <tr><td><kbd>Shift+PageDown</kbd></td><td>Pans right in left to right locales.  Pans left in right to left locales.</td></tr>
 *   <tr><td><kbd>LeftArrow</kbd></td><td>Move focus and selection to nearest base map region or marker to the left in same data layer</td></tr>
 *   <tr><td><kbd>RightArrow</kbd></td><td>Move focus and selection to nearest base map region or marker to the right in same data layer</td></tr>
 *   <tr><td><kbd>UpArrow</kbd></td><td>Move focus and selection to nearest base map region or marker above in same data layer</td></tr>
 *   <tr><td><kbd>DownArrow</kbd></td><td>Move focus and selection to nearest base map region or marker below in same data layer</td></tr>
 *   <tr><td><kbd>Shift+LeftArrow</kbd></td><td>Move focus and multi-select nearest base map region or marker to the left in same data layer</td></tr>
 *   <tr><td><kbd>Shift+RightArrow</kbd></td><td>Move focus and multi-select nearest base map region or marker to the right in same data layer</td></tr>
 *   <tr><td><kbd>Shift+UpArrow</kbd></td><td>Move focus and multi-select nearest base map region or marker above in same data layer</td></tr>
 *   <tr><td><kbd>Shift+DownArrow</kbd></td><td>Move focus and multi-select nearest base map region or marker below in same data layer</td></tr>
 *   <tr><td><kbd>Ctrl+LeftArrow</kbd></td><td>Move focus to nearest base map region or marker to the left in same data layer, without changing the current selection</td></tr>
 *   <tr><td><kbd>Ctrl+RightArrow</kbd></td><td>Move focus to nearest base map region or marker to the right in same data layer, without changing the current selection</td></tr>
 *   <tr><td><kbd>Ctrl+UpArrow</kbd></td><td>Move focus to nearest base map region or marker above in same data layer, without changing the current selection</td></tr>
 *   <tr><td><kbd>Ctrl+DownArrow</kbd></td><td>Move focus to nearest base map region or marker below in same data layer, without changing the current selection</td></tr>
 *   <tr><td><kbd>]</kbd></td><td>Move focus and selection to nearest marker in the next data layer above</td></tr>
 *   <tr><td><kbd>[</kbd></td><td>Move focus and selection to nearest base map region or marker in the next data layer below</td></tr>
 *   <tr><td><kbd>Shift+]</kbd></td><td>Move focus to nearest marker in the next data layer above and multi-select</td></tr>
 *   <tr><td><kbd>Shift+[</kbd></td><td>Move focus to nearest base map region or marker in the next data layer below and multi-select</td></tr>
 *   <tr><td><kbd>Ctrl+]</kbd></td><td>Move focus to nearest marker in the next data layer above, without changing the current selection</td></tr>
 *   <tr><td><kbd>Ctrl+[</kbd></td><td>Move focus to nearest base map region or marker in the next data layer below, without changing the current selection</td></tr>
 *   <tr><td><kbd>Ctrl+Spacebar</kbd></td><td>Multi-select base map region or marker with focus</td></tr>
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
 * @desc Creates a JET Thematic Map.
 * @example <caption>Initialize the Thematic Map with no options specified:</caption>
 * $(".selector").ojThematicMap();
 * 
 * @example <caption>Initialize the Thematic Map with some options:</caption>
 * $(".selector").ojThematicMap({basemap: 'usa'});
 * 
 * @example <caption>Initialize the Thematic Map via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojThematicMap'}">
 */
oj.__registerWidget('oj.ojThematicMap', $['oj']['dvtBaseComponent'],
  {
    version: "1.0.0",
    widgetEventPrefix: "oj",
    options: {
      /**
       * Triggered after data items are selected or de-selected.
       * 
       * @property {Object} ui event payload
       * @property {Array} ui.items an array containing objects describing the selected data items
       * @property {string} ui.items.dataLayerId the id of the data layer to which the data item belongs
       * @property {string} ui.items.id the id of the data item
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
       * $(".selector").ojThematicMap({
       *   "select": function(event, ui){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
       * $(".selector").on("ojselect", function(event, ui){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojThematicMap
       * @instance
       */
      select: null,
      /**
       * Triggered after thematic map resources are loaded and the component has rendered.
       * 
       * @example <caption>Initialize the component with the <code class="prettyprint">select</code> callback specified:</caption>
       * $(".selector").ojThematicMap({
       *   "load": function(){}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
       * $(".selector").on("ojload", function(){});
       * 
       * @expose 
       * @event 
       * @memberof! oj.ojThematicMap
       * @instance
       */
      load: null
    },
    
    _selectedItems: {},
    _loadedBasemaps: [],
    _checkBasemaps: [],
    _supportedLocales: ['ar', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'hu', 'it', 'iw', 'ja', 'ko', 'nl', 'no', 'pl', 'pt', 'pt_BR', 'ro', 'ru', 'sk', 'sv', 'th', 'tr', 'zh_CN', 'zh_TW'],
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _CreateDvtComponent: function(context, callback, callbackObj) {
      return DvtThematicMap.newInstance(context, callback, callbackObj);
    },
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _GetComponentStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses.push('oj-thematicmap');
      return styleClasses;
    },
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _GetChildStyleClasses: function() {
      var styleClasses = this._super();
      styleClasses['oj-dvtbase oj-thematicmap'] = {'path': 'animationDuration', 'property': 'animation-duration'};
      styleClasses['oj-thematicmap-arealayer'] = [
        {'path': 'styleDefaults/areaStyle', 'property': 'CSS_BACKGROUND_PROPERTIES'},
        {'path': 'styleDefaults/labelStyle', 'property': 'CSS_TEXT_PROPERTIES'}
      ];
      styleClasses['oj-thematicmap-area'] = {'path': 'styleDefaults/dataAreaDefaults/borderColor', 'property': 'border-top-color'};
      styleClasses['oj-thematicmap-area oj-hover'] = {'path': 'styleDefaults/dataAreaDefaults/hoverColor', 'property': 'border-top-color'};
      styleClasses['oj-thematicmap-area oj-selected'] = [
        {'path': 'styleDefaults/dataAreaDefaults/selectedInnerColor', 'property': 'border-top-color'},
        {'path': 'styleDefaults/dataAreaDefaults/selectedOuterColor', 'property': 'border-bottom-color'}];
      styleClasses['oj-thematicmap-marker'] = [
        {'path': 'styleDefaults/dataMarkerDefaults/labelStyle', 'property': 'CSS_TEXT_PROPERTIES'},
        {'path': 'styleDefaults/dataMarkerDefaults/color', 'property': 'background-color'},
        {'path': 'styleDefaults/dataMarkerDefaults/opacity', 'property': 'opacity'},
        {'path': 'styleDefaults/dataMarkerDefaults/borderStyle', 'property': 'border-style'},
        {'path': 'styleDefaults/dataMarkerDefaults/borderColor', 'property': 'border-top-color'},
        {'path': 'styleDefaults/dataMarkerDefaults/borderWidth', 'property': 'border-width'}
      ];
      return styleClasses;
    },
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _GetEventTypes : function() {
      return ['load', 'select'];
    },
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _Render: function() {
      // For thematic map, we must ensure that all basemaps are loaded before rendering.  If basemaps are still loading,
      // return and wait for the load listener to call _Render again.
      this._loadBasemap();
      for (var i = 0; i < this._checkBasemaps.length; i++) {
        if (!this._loadedBasemaps[this._checkBasemaps[i]])
          return;
      }
      this._checkBasemaps = [];
      
      // Delegate to the super to call the shared JS component for actual rendering.
      this._super();
      
      // Send event once basemaps have been loaded and rendering is complete
      this._trigger('load', null, null);
    },
    
    /**
     * Loads the basemaps and resource bundles.
     * @private
     */
    _loadBasemap: function() {
      var basemap = this.options['basemap'];
      if (basemap) {
        var locale = oj.Config.getLocale();

        // Track basemaps that need to be loaded before rendering
        basemap = basemap.charAt(0).toUpperCase() + basemap.slice(1);

        var areaLayers = this.options['areaLayers'];
        // load area layer basemaps
        if (areaLayers) {
          for (var i = 0; i < areaLayers.length; i++) {
            var layer = areaLayers[i]['layer'];
            if (layer) {
              layer = layer.charAt(0).toUpperCase() + layer.slice(1);
              this._loadBasemapHelper(basemap, layer, locale);
            }
          }
        }

        // load city basemap
        var pointDataLayers = this.options['pointDataLayers'];
        if (pointDataLayers && pointDataLayers.length > 0)
          this._loadBasemapHelper(basemap, 'Cities', locale);
      }
    },
    
    /**
     * Utility function for loading resource bundles by url.
     * @param {string} url The url of the resource to load
     * @private
     */
    _loadResourceByUrl: function(url) {
      // resource is already loaded or function tried to load this resource but failed
      if (this._loadedBasemaps[url])
        return;

      var resolvedUrl = oj.Config.getResourceUrl(url);
      var thisRef = this;
      var loadedBundles = this._loadedBasemaps;
      $.getScript(resolvedUrl, function(data, textStatus, jqxhr) {
        loadedBundles[url] = true;
        thisRef._Render();
      });
    },
    
    _loadBasemapHelper: function(basemap, layer, locale) {
      var relativeUrl = 'resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap' + basemap + layer + '.js';
      this._checkBasemaps.push(relativeUrl);

      if (locale.indexOf('en') === -1) {
        // split locale by subtags and try to load resource bundle that satisfies
        var splitLocale = locale.split('_');
        var localeList = [];
        for (var j = 0; j < splitLocale.length; j++) {
          var tempLocale = '';
          for (var k = 0; k < (j + 1); k++) {
            if (k != 0)
              tempLocale += '_';
            tempLocale += splitLocale[k];
          }
          localeList.push(tempLocale)
        }

        var bundleName = 'resources/internal-deps/dvt/thematicMap/resourceBundles/' + basemap + layer + 'Bundle';
        // Go thru list of supported DVT languages
        for (var i = localeList.length - 1; i >= 0; i++) {
          if (this._supportedLocales.indexOf(localeList[i]) !== -1) {
            var bundleUrl = bundleName + "_" + localeList[i] + ".js";
            this._checkBasemaps.push(bundleUrl);
            this._loadResourceByUrl(bundleUrl);
            break;
          }
        }
      }

      this._loadResourceByUrl(relativeUrl);
    },
    
    /**
     * @override
     * @memberof! oj.ojThematicMap
     * @instance
     * @protected
     */
    _HandleEvent: function(event) {
      var type = event && event.getType ? event.getType() : null, selectedItems, selection, i, selectedItem;
      if (type === DvtSelectionEvent.TYPE) {
        selectedItems = [];
        selection = event.getSelection();
        var dataLayerId = event.getParamValue('clientId');
        for (i = 0; i < selection.length; i++) {
          selectedItem = {'id': selection[i], 'dataLayerId': dataLayerId};
          selectedItems.push(selectedItem);
          this._selectedItems[dataLayerId] = selection;
        }
        this._updateSelectionItems();
        // TODO selectedItems need to be all the selected items for all the data layers
        this._trigger('select', null, {'items': selectedItems});
      }
      else {
        this._super(event);
      }
    },
    
    /**
     * Updates the options object with the current data layer selection states 
     * @private
     */
    _updateSelectionItems: function() {
      var pdls = this.options['pointDataLayers'];
      if (pdls) {
        for (var i = 0; i < pdls.length; i++) {
          if (this._selectedItems[pdls[i]['id']])
            pdls[i]['selectedItems'] = this._selectedItems[pdls[i]['id']];
        }
      }
   
      var als = this.options['areaLayers'];
      for (var i = 0; i < als.length; i++) {
        // JET Thematic Map does not support nesting of point data layers within an area layer
        var adl = als[i]['areaDataLayer'];
        if (this._selectedItems[adl['id']])
          adl['selectedItems'] = this._selectedItems[adl['id']];
      }
    },
    
    /**
     * Returns the subcomponent node represented by the documented locator attribute values.
     * Test authors should target thematic map sub elements using the following names:
     * <ul>
     *   <li>dataLayerId:area[id] - An area indexed by the given id in a data layer with id dataLayerId</li>
     *   <li>dataLayerId:marker[id] - A marker indexed by the given id in a data layer with id dataLayerId</li>
     * </ul>
     * @override
     * @memberof! oj.ojThematicMap
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
     * Returns the subId string for the given child DOM node. Valid thematic map subIds include:
     * <ul>
     *   <li>dataLayerId:area[id] - An area indexed by the given id in a data layer with id dataLayerId</li>
     *   <li>dataLayerId:marker[id] - A marker indexed by the given id in a data layer with id dataLayerId</li>
     * </ul>
     * @override
     * @expose
     * @memberof! oj.ojThematicMap
     * @instance
     * @param {Element} node The subcomponent node used by the component to lookup the subId string
     * @return {string|null} - the subId for the DOM node or null when none is found
     */
    getSubIdByNode: function(node) {
      return this._super(node);
    },
    
    /**
     * Returns a ThematicMapArea object for automation testing verification.
     * @param {String} dataLayerId The dataLayer id
     * @param {String} id The area id 
     * @return {Object} The thematic map area with the given id 
     *                             within the given data layer or null if none exists
     * @expose
     * @instance
     * @memberof! oj.ojThematicMap
     */
    getArea : function(dataLayerId, id) {
      var auto = this._component.getAutomation();
      return new oj.ThematicMapArea(auto.getData(dataLayerId, 'area', id));
    },
    
    /**
     * Returns a ThematicMapMarker object for automation testing verification.
     * @param {String} dataLayerId The dataLayer id
     * @param {String} id The marker id 
     * @return {Object} The thematic map marker with the given id 
     *                             within the given data layer or null if none exists
     * @expose
     * @instance
     * @memberof! oj.ojThematicMap
     */
    getMarker : function(dataLayerId, id) {
      var auto = this._component.getAutomation();
      return new oj.ThematicMapMarker(auto.getData(dataLayerId, 'marker', id));
    }
});
/**
 * An object used for automation verification of thematic map markers.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapMarker = function(data) {
  this._data = data;
};

/**
 * Returns the color of a thematic map marker
 * @return {String} The marker color
 * @export
 */
oj.ThematicMapMarker.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the label of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the tooltip of a thematic map marker
 * @return {String} The marker tooltip
 * @export
 */
oj.ThematicMapMarker.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns whether a thematic map marker is selected
 * @return {boolean} Whether the marker is selected
 * @export
 */
oj.ThematicMapMarker.prototype.isSelected = function() {
  return this._data ? this._data['isSelected'] : false;
};
/**
 * An object used for automation verification of thematic map areas.
 * Applications should not create this object.
 * @param {Object} data An object containing verification data
 * @constructor
 * @export
 */  
oj.ThematicMapArea = function(data) {
  this._data = data;
};

/**
 * Returns the color of a thematic map area
 * @returns {String} The area color
 * @export
 */
oj.ThematicMapArea.prototype.getColor = function() {
  return this._data ? this._data['color'] : null;
};

/**
 * Returns the tooltip of a thematic map area
 * @returns {String} The area tooltip
 * @export
 */
oj.ThematicMapArea.prototype.getTooltip = function() {
  return this._data ? this._data['tooltip'] : null;
};

/**
 * Returns the label of a thematic map area
 * @returns {String} The area label
 * @export
 */
oj.ThematicMapArea.prototype.getLabel = function() {
  return this._data ? this._data['label'] : null;
};

/**
 * Returns whether a thematic map area is selected
 * @return {boolean} Whether the area is selected
 * @export
 */
oj.ThematicMapArea.prototype.isSelected = function() {
  return this._data ? this._data['isSelected'] : false;
};
});
