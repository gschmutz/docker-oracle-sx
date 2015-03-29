"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojconveyorbelt'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/**
 * @class 
 * @name oj.ojTabs
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="tabsOverview-section">
 *   JET Tabs Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#tabsOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant tabs with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Tabs can be created from a <code class="prettyprint">div</code> element as long as the root element has one or more child <code class="prettyprint">div</code> elements. 
 * Each child <code class="prettyprint">div</code> element must have at least two children: 
 * The first element for the tab header and the rest of the element(s) for the tab content.
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="tabs">
 *   &lt;div id ="tab-1">
 *     &lt;span>Tab 1&lt;/span>
 *     &lt;p>Tab 1 content&lt;/p>
 *     &lt;p>Tab 1 more content&lt;/p>
 *   &lt;/div>
 *   &lt;div id ="tab-2">
 *     &lt;span>Tab 2&lt;/span>
 *     &lt;p>Tab 2 content&lt;/p>
 *   &lt;/div>
 *   &lt;div id ="tab-3">
 *     &lt;span>Tab 3&lt;/span>
 *     &lt;p>Tab 3 content&lt;/p>
 *   &lt;/div>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
 * <h5>When the focus is on the tab bar</h5>
 * </p>
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
 *       <td> Only the selected tab is in the tab order.</tr>
 *     <tr>
 *       <td><kbd>UpArrow or LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td> Move focus to the previous tab and select it.</tr>
 *     <tr>
 *       <td><kbd>DownArrow or RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td> Move focus to the next tab and select it.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td> Move focus to the first tabs item.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td> Move focus to the last tabs item.</tr>
 *     <tr>
 *       <td><kbd>Delete</kbd></td>
 *       <td> If deletion is allowed, will delete the current tab.</tr>
 *   </tbody>
 *  </table>
 *
 * <p>
 * <h5>When the focus is on anywhere within the tab content</h5>
 * </p>
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
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td> move focus to the tab for that tab panel.</tr>
 *   </tbody>
 *  </table>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the tabs must be <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-tabs</code> pseudo-selector can be used in jQuery expressions to select JET Tabs.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-tabs" ) // selects all JET Tabs on the page
 * $myEventTarget.closest( ":oj-tabs" ) // selects the closest ancestor that is a JET Tabs
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <ul>
 *   <li>JQUI Tabs expects the tabs titles either in an ordered or unordered list followed by their content elements. Each tab must have an anchor with the href points to its content element.
 *     <pre class="prettyprint">
 *     <code>
 *       &lt;div id="tabs">
 *         &lt;ul>
 *           &lt;li>&lt;a href="#tabs-1">Tab 1 Title&lt;/a>&lt;/li>
 *           &lt;li>&lt;a href="#tabs-2">Tab 2 Title&lt;/a>&lt;/li>
 *         &lt;/ul>
 *         &lt;div id="tabs-1">
 *           &lt;p>Tab 1 content.&lt;/p>
 *         &lt;/div>
 *         &lt;div id="tabs-2">
 *           &lt;p>Tab 2 content.&lt;/p>
 *           &lt;p>More Tab 2 content.&lt;/p>
 *         &lt;/div
 *       &lt;/div>
 *     </code></pre>
 *   </li>
 *
 *   <li>JET Tabs requires a simplier DOM structures. Like the JQuery Accordion, JET tabs is a list where each tab contains its own title and content. It requires no anchors and pointers to the contents.
 *     <pre class="prettyprint">
 *     <code>
 *       &lt;div id="tabs">
 *         &lt;div id="tabs-1">
 *           &lt;span>Tab 1 Title&lt;/span>
 *           &lt;p>Tab 1 content.&lt;/p>
 *         &lt;/div>
 *         &lt;div id="tabs-2">
 *           &lt;span>Tab 2 Title&lt;/span>
 *           &lt;p>Tab 2 content.&lt;/p>
 *           &lt;p>More Tab 2 content.&lt;/p>
 *         &lt;/div
 *       &lt;/div>
 *     </code></pre>
 *   </li>
 *   </ul>
 *   <li>JET Tabs supports <code class="prettyprint">orientation</code> option: to be placed horizontal (default) or vertical</li>
 *   <li>JET Tabs supports <code class="prettyprint">removable</code> option by adding a close icon to each tab header which when clicked remove the tab from the DOM.</li>
 *   <li>JET Tabs supports <code class="prettyprint">reorderable</code> option allow the tab to be reordered by drag and drop within the Tab bar</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "tabs".  
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Tabs. 
 * @example <caption>Initialize the tabs with no options specified:</caption>
 * $( ".selector" ).ojTabs();
 * 
 * @example <caption>Initialize the tabs with some options specified:</caption>
 * $( ".selector" ).ojTabs( { "orientation": "vertical" } );
 * 
 * @example <caption>Initialize the tabs via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="tabs" data-bind="ojComponent: { component: 'ojTabs', orientation: 'vertical'}">
 *
 */
(function ()
{
  var _CLOSE_ICON = "oj-tabs-close-icon";
  var _CLOSE_ICON_SIZE = 28;
  var _ID_PREFIX = "ojtabs-id_";
  var _DELETE_KEY = 46;

  //Context Menu: menu item id's
  var /** @const */ _arMenuCmdMap = { "cut"          : "ojtabscut",
                                      "paste-before" : "ojtabspastebefore",
                                      "paste-after"  : "ojtabspasteafter"
                                    } ;

  oj.__registerWidget("oj.ojTabs", $['oj']['baseComponent'], 
  {
    widgetEventPrefix : "oj", 
    delay : 300, 
    options : 
    {
      /** 
       * The id or zero-based index of the tab panel that is selected.<p>
       * Setter value: either an id or index.<p>
       * Getter value: id or index. If the selected tab has a page author provided id, that id is returned, otherwise that tab's index will be returned.
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {number|string}
       * @default <code class="prettyprint">0</code>
       *
       * @example <caption>Initialize the tabs with the 
       * <code class="prettyprint">selected</code> option specified:</caption>
       * $( ".selector" ).ojTabs( { "selected": "myTabDiv" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">selected</code> 
       * option after initialization:</caption>
       * // getter
       * var selected = $( ".selector" ).ojTabs( "option", "selected" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "selected", "myTabDiv" );
       */
      selected : 0, 

      /** 
       * Array contains either ids or zero-based indices of the tabs that should be disabled.<p> 
       * Setter value: array of either ids or indices.<p>
       * Getter value: array of either ids or indices. If a disabled tab has a page author provided id, that id is returned, otherwise that tab's index will be returned.
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @default <code class="prettyprint">false</code>
       * @type {Array}
       *
       * @example [ 0, "myTabDiv" ] would disable the first tab and the tab with id="myTabDiv"
       * @example <caption>Initialize the tabs with the 
       * <code class="prettyprint">disabledTabs</code> option specified:</caption>
       * $( ".selector" ).ojTabs( { "disabledTabs": [0, "myTabDiv"] } );
       * 
       */
      disabledTabs : null, 

      /** 
       * Truncation option applies to the tab titles when there is not enough room to display
       * all tabs.
       * Valid Values: none, progressive and auto.
       *
       * <ul>
       *  <li> none - tabs always take up the space needed by the title texts. When there
       *   is not enough room, the conveyorBelt's navigation arrows are displayed to allow
       *   the title texts be scrolled within the conveyor.</li>
       *
       *  <li> progressive - If not enough space is available to display all of the tabs, 
       *   then the width of each tab title is restricted just enough to allow all tabs to fit. 
       *   All tab titles that are truncated are displayed with ellipses. However the width 
       *   of each tab title will not be truncated below tabLabelMinWidth. If after all truncation 
       *   has been applied, there still is not enough room, then the conveyorBelt's navigation 
       *   arrows will appear. When the container of the tabs is resized the truncation will 
       *   be reevaluated.</li>
       *
       *  <li> auto - same as "progressive".</li>
       * </ul>
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">auto</code>
       *
       * @example <caption>Get or set the <code class="prettyprint">truncation</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var truncation = $( ".selector" ).ojTabs( "option", "truncation" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "truncation", "none" );
       */
      truncation : "auto",

      /** 
       * The type of event to select the tab. 
       * To select a tab on hover, use "mouseover".
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"click"</code>
       *
       * @example <caption>Get or set the <code class="prettyprint">selectOn</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var selectOn = $( ".selector" ).ojTabs( "option", "selectOn" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "selectOn", "mouseover" );
       */
      selectOn : "click", 

      /** 
       * The orientation of the tab bar. 
       * Valid Values: horizontal and vertical
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"horizontal"</code>
       *
       * @example <caption>Get or set the <code class="prettyprint">orientation</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var orientation = $( ".selector" ).ojTabs( "option", "orientation" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "orientation", "vertical" );
       */
      orientation : "horizontal", 

      /** 
       * Specifies if the tabs can be closed (removed)
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Get or set the <code class="prettyprint">removable</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var removable = $( ".selector" ).ojTabs( "option", "removable" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "removable", true );
       */
      removable : false, 

      /** 
       * This text is used to provide audible feedback for screen reader users
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {string}
       * @default <code class="prettyprint">Removable</code>
       */
      removeCueText : "Removable",

      /** 
       * Specifies if the tabs can be reordered within the tab bar by drag-and-drop
       *
       * @expose 
       * @memberof! oj.ojTabs
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Get or set the <code class="prettyprint">reorderable</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var reorderable = $( ".selector" ).ojTabs( "option", "reorderable" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "reorderable", true );
       */
      reorderable : false,

      /**
       * Identifies the JET Menu that the component should launch as a context menu on right-click or
       * <kbd>Shift-F10</kbd>. If specified, the browser's native context menu will be replaced by the
       * specified JET Menu.
       * 
       * <p>To specify a JET context menu on a DOM element that is not a JET component, see the
       * <code class="prettyprint">ojContextMenu</code> binding.  
       * 
       * <p>To make the page semantically accurate from the outset, applications are encouraged to specify the
       * context menu via the standard HTML5 syntax shown in the below example.  When the component is
       * initialized, the context menu thus specified will be set on the component.
       *
       * <p>When defining a contextMenu, ojTabs will provide built-in behavior for "cut" and "paste"
       *  if the following format for menu &lt;li&gt; item's is used (no &lt;a&gt; 
       *  elements are required):
       * <ul><li> &lt;li data-oj-command="oj-tabs-cut" /&gt;</li>
       *     <li> &lt;li data-oj-command="oj-tabs-paste-before" /&gt;</li>
       *     <li> &lt;li data-oj-command="oj-tabs-paste-after" /&gt;</li>
       * </ul>
       * The available translated text will be applied to menu items defined this way.
       *
       * <p>The JET Menu should be initialized before any component using it as a context menu.
       * 
       * @member
       * @name contextMenu
       * @memberof! oj.ojTabs
       * @instance
       * @type {string | null}
       * @default <code class="prettyprint">null</code>
       * 
       * @example <caption>Initialize a JET Tabs with a context menu:</caption>
       * // via recommended HTML5 syntax:
       * &lt;div id="myTabs" contextmenu="myMenu" data-bind="ojComponent: { ... }>
       * 
       * // via JET initializer (less preferred) :
       * $( ".selector" ).ojTabs({ "contextMenu": "#myContextMenu"  ... } });
       * 
       * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option for
       *      an ojTabs after initialization:</caption>
       * // getter
       * var menu = $( ".selector" ).ojTabs( "option", "contextMenu" );
       * 
       * // setter
       * $( ".selector" ).ojTabs( "option", "contextMenu", "#myContextMenu" );
       */

      // callbacks
      /**
       * Triggered immediately before a tab is selected.<p>
       * beforeSelect can be canceled to prevent the content from selecting by returning a false in the event listener.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.fromTab The tab being navigated from
       * @property {jQuery} ui.toTab The tab being navigated to
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeSelect</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeSelect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeselect</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeselect", function( event, ui ) {} );
       */
      beforeSelect : null,

      /**
       * Triggered after a tab has been selected.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.fromTab The tab being navigated from
       * @property {jQuery} ui.toTab The tab being navigated to
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">select</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "select": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
       * $( ".selector" ).on( "ojselect", function( event, ui ) {} );
       */
      select : null, 

      /**
       * Triggered immediately before a tab is deselected.<p>
       * beforeDeselect can be canceled to prevent the content from deselecting by returning a false in the event listener.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.fromTab The tab being navigated from
       * @property {jQuery} ui.toTab The tab being navigated to
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeDeselect</code> callback specified:</caption>
       * $( ".deselector" ).ojTabs({
       *     "beforeDeselect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforedeselect</code> event:</caption>
       * $( ".deselector" ).on( "ojbeforedeselect", function( event, ui ) {} );
       */
      beforeDeselect : null,

      /**
       * Triggered after a tab has been deselected.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.fromTab The tab being navigated from
       * @property {jQuery} ui.toTab The tab being navigated to
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">deselect</code> callback specified:</caption>
       * $( ".deselector" ).ojTabs({
       *     "deselect": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojdeselect</code> event:</caption>
       * $( ".deselector" ).on( "ojdeselect", function( event, ui ) {} );
       */
      deselect : null, 

      /**
       * Triggered immediately before a tab is removed.
       * beforeRemove can be canceled to prevent the content from removeing by returning a false in the event listener.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.tab The tab that is about to be removed.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">beforeRemove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "beforeRemove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeremove</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeremove", function( event, ui ) {} );
       */
      beforeRemove : null,

      /**
       * Triggered after a tab has been removed.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.tab The tab that was just removed.
       * 
       * @example <caption>Initialize the tabs with the <code class="prettyprint">remove</code> callback specified:</caption>
       * $( ".selector" ).ojTabs({
       *     "remove": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojremove</code> event:</caption>
       * $( ".selector" ).on( "ojremove", function( event, ui ) {} );
       */
      remove : null, 

      /**
       * Fired whenever a supported component option changes, whether due to user interaction or programmatic
       * intervention.  If the new value is the same as the previous value, no event will be fired.
       *
       * Currently there is one supported option, <code class="prettyprint">"selected"</code>.  Additional
       * options may be supported in the future, so listeners should verify which option is changing
       * before taking any action.
       *
       * @expose
       * @event
       * @memberof! oj.ojTabs
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {string} ui.option the name of the option that is changing
       * @property {Object} ui.previousValue the previous value of the option
       * @property {Object} ui.value the current value of the option
       * @property {Object} ui.optionMetadata information about the option that is changing
       * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
       *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
       *
       */
      optionChange: null

    },

    _ComponentCreate : function ()
    {
      var self = this, 
          options = this.options;

      this._super();
      this.running = false;

      this._setupOrientation(options.orientation);

      //set oj-disabled on panel divs
      this._setOjDisabledOnPanel(options.disabledTabs);

      this._processTabs();

      //update disabledTabs to contains ids if provided, index otherwise
      this._updateDisabledTabs();

      //Bug 18270242 - When ojtab first displays beforeSelect & select events are not raised  
      // select the selected tab after refresh
      var initialSelected = options.selected;
      options.selected = undefined;

      //Context Menu
      this._menu = {};
      this._menu.usermenu = false;
      this._menu.$container = false;
      this._menu.$elemPasteBefore = false;
      this._menu.$elemPasteAfter = false;

      this._initMenu();
      this._applyMenu();

      this._refresh();

      //Bug 18728223 - ojcreate should be raised before ojbeforeselect and ojselect events
      initialSelected = this._getPanelId(initialSelected);
      if (initialSelected === undefined)
        initialSelected = this._indexToId(0);

      options.selected = initialSelected;
    },

    /**
     * Fire select and deselect events right after the component is created.
     * 
     * @memberof! oj.ojTabs
     * @instance
     * @override
     */
    _init : function ()
    {
      //Bug 18728223 - ojcreate should be raised before ojbeforeselect and ojselect events
      this._fireSelectEvents(this.options.selected);
    },

    _fireSelectEvents : function(selected)
    {
      //Bug 18270242 - When ojtab first displays beforeSelect & select events are not raised  
      //Bug 18539151 - ojtabs should not let user set focus on disabled tabs
      //if the selected tab is disabled or undefined, select the next enabled tab
      if (this._isTabDisabled(selected))
      {
        var nextIndex = this._getNextEnabledTab(selected);
        selected = (nextIndex === undefined) ? undefined : this._indexToId(nextIndex);
      }
      this._activate(selected);
    },

    // Override to set custom launcher
    _OpenContextMenu: function(menu, event)
    {
      // Setting the launcher to the current tabbable tab.  Component owner should feel free to specify a different 
      // launcher if appropriate.  See the superclass JSDoc for _OpenContextMenu for tips on choosing a launcher.
      menu.open(event, {"launcher": this.tablist.children("[tabindex=0]"), "initialFocus": "menu"});
    },

    _tabKeydown : function (event)
    {
      /*jshint maxcomplexity:15*/
      var focusedTab = $(this.document[0].activeElement).closest("li"), 
          selectedIndex = this.tabs.index(focusedTab), goingForward = true;

      if (this._handlePageNav(event))
        return;

      switch (event.keyCode)
      {
        case $.ui.keyCode.RIGHT:
        case $.ui.keyCode.DOWN:
          selectedIndex++;
          break;
        case $.ui.keyCode.UP:
        case $.ui.keyCode.LEFT:
          goingForward = false;
          selectedIndex--;
          break;
        case $.ui.keyCode.END:
//TODO: disabled tab 
          selectedIndex = this.tabs.length - 1;
          break;
        case $.ui.keyCode.HOME:
          selectedIndex = 0;
          break;

        case _DELETE_KEY:
        // James: remove tab keystroke doesn't seem to work with JAWS. 
        // ALT+DEL seems to conflict with a JAWS keystroke. I have raised an issue on the Authoring 
        // Practices for this. Could we just use Delete as well or does that sound like a bad idea?
//          if (event.altKey)
//          {
            // simulate a click on the close icon of the current selected header
            var anchor = this.active.find("." + _CLOSE_ICON);
            if (anchor)
            {
              event.preventDefault();
              this._removeTabHandler(
                {
                  target : anchor, 
                  currentTarget : anchor, 
                  preventDefault : $.noop
                });
            }
//          }
          return;

        default :
          return;
      }

      // Focus the appropriate tab, based on which key was pressed
      event.preventDefault();
      clearTimeout(this.activating);
      var panelId = this._focusNextTab(selectedIndex, goingForward);

      // Navigating with control key will prevent automatic activation
      if (!event.ctrlKey)
      {
        // Update aria-selected immediately so that AT think the tab is already selected.
        // Otherwise AT may confuse the user by stating that they need to select the tab,
        // but the tab will already be selected by the time the announcement finishes.
        focusedTab.attr("aria-selected", "false");
        this._getTabByPanelId(panelId).attr("aria-selected", "true");

        this.activating = this._delay(function ()
        {
          this.option("selected", panelId);
        },
        this.delay);
      }
    },

    _panelKeydown : function (event)
    {
      if (this._handlePageNav(event))
        return;

      // Ctrl+up moves focus to the current tab
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP)
      {
        event.preventDefault();
        this.active.focus();
      }

    },

    // Ctrl+page up/down moves focus to the previous/next tab (and selects)
    _handlePageNav : function (event)
    {
      var selectedIndex = this._idToIndex(this.options.selected);

      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_UP)
      {
        this._activate(this._focusNextTab(selectedIndex - 1, false));
        return true;
      }
      if (event.ctrlKey && event.keyCode === $.ui.keyCode.PAGE_DOWN)
      {
        this._activate(this._focusNextTab(selectedIndex + 1, true));
        return true;
      }
    },

    _isTabDisabled : function (index)
    {
      if (index >=0 && index < this.tabs.length)
        return $(this.tabs[index]).hasClass("oj-disabled");
      return false;
    },

    _findNextTab : function (index, goingForward)
    {
      var lastTabIndex = this.tabs.length - 1;

      function constrain()
      {
        if (index > lastTabIndex)
        {
          index = 0;
        }
        if (index < 0)
        {
          index = lastTabIndex;
        }
        return index;
      }

      while (this._isTabDisabled(constrain()))
      {
        index = goingForward ? index + 1 : index - 1;
      }

      return index;
    },

    _focusNextTab : function (index, goingForward)
    {
      index = this._findNextTab(index, goingForward);
      this._getTab(index).focus();
      return this._indexToId(index);
    },

    //return index
    _getNextEnabledTab : function (panelId)
    {
      var index = this._idToIndex(panelId),
          next = index + 1,
          lastTabIndex = this.tabs.length - 1;

      while (next <= lastTabIndex) 
      {
        if (! this._isTabDisabled(next))
        {
          return next;
        }
        next++;
      }
      next = index - 1;
      while (next >= 0)
      {
        if (! this._isTabDisabled(next))
        {
          return next;
        }
        next--;
      }
      return undefined;
    },

    _setOption : function (key, value, flags)
    {
      if (key === "selected")
      {
        value = this._getPanelId(value);
        if (value === undefined)
          return;

        // _activate() will update this.options
        this._activate(value);
        return;
      }

      if (key === "disabledTabs")
      {
        if (Array.isArray(value))
        {
          this._setOjDisabledOnPanel(value);

          //Bug 18679648 - when observable is used to update disabled tabs, tabs do not function right
          this.refresh();

          //update disabledTabs to contains ids if provided, index otherwise
          this._updateDisabledTabs();
        }
        return;
      }

      if (key === "removable")
      {
        this._setRemovable(value);
        return;
      }

      //allow drag and drop a tab within the tab bar
      if (key === "reorderable")
      {
        if (value !== this.options.reorderable)
        {
          this.options.reorderable = value;
          this._setupReorder();
          //Bug 19263316 - if reorderable option is changed to true programmatically,
          //it doesn't take affect
          this.refresh();
        }
        return;
      }

      //change orientation need refresh
      if (key === "orientation")
      {
        this._setupOrientation(value);
        this.refresh();
        return;
      }

      if (key === "truncation")
      {
        this.options.truncation = value;
        this.refresh();
        return;
      }

      if (key === "contextMenu")
      {
        this._clearMenu();
        if (value)
          this._initMenu(value);
      }

      this._super(key, value, flags);

      if (key === "selectOn")
      {
        this._tearDownEvents();
        this._super(key, value);
        this._setupEvents();
      }

      if (key === "removeCueText")
        this.refresh();

    },

    /**
     * Refreshes the visual state of the tabs. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is 
     * programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojTabs( "refresh" );
     */
    refresh : function ()
    {
      this._super();

      this._destroyCloseIcons();
      this._processTabs();

      this._refresh();
    },

    _refresh : function ()
    {
      var options = this.options;

      // check for length avoids error when initializing empty list
      var selectedPanel = this.element.children(".oj-tabs-selected");
      if (selectedPanel.length)
        this.active = this._getTabByPanelId(selectedPanel.attr("id"));
      else
        this.active = $();

      this._createCloseIcons();

      this._tearDownEvents();
      this._setupEvents();

      this.tabs.not(this.active).attr(
      {
        "aria-selected" : "false", 
        "tabIndex" : "-1"
      });
      this.panels.not(this._getPanelForTab(this.active)).hide().attr(
      {
        "aria-expanded" : "false", 
        "aria-hidden" : "true"
      });

      // Make sure one tab is in the tab order
      if (this.active.length)
      {
        this.active.addClass("oj-selected").attr(
        {
          "aria-selected" : "true", 
          "tabIndex" : "0"
        });
        selectedPanel.show().attr(
        {
          "aria-expanded" : "true", 
          "aria-hidden" : "false"
        });
      }
      else 
      {
        this._getTab(0).attr("tabIndex", "0");
      }

      // handle active numbers: negative, out of range
      if (this._activateLater !== undefined)
      {
        this._fireSelectEvents(this._activateLater);
        this._activateLater = undefined;        
      }

      if (options.orientation == "horizontal")
      {
        //always add conveyor
        this._truncateBeforeOverflow();
        this._addConveyor();

       if (this.options.selected === undefined || 
           this._idToIndex(this.options.selected) == 0)
         this.element.addClass("oj-first-child-selected");
       else
         this.element.removeClass("oj-first-child-selected");
      }
      else {
        this.element.removeClass("oj-first-child-selected");
      }

      //Bug 18269323 - After a tab is deleted, reorder does not work
      this._setupReorder();
    },

    _addConveyor : function ()
    {
      var tabsId = this.tablist.uniqueId().attr("id");
      var conveyorDiv = this._getTabbarWrapper().parent();

      this.conveyor = conveyorDiv.ojConveyorBelt(
        {
          orientation: "horizontal", 
          contentParent: "#" + tabsId
        });
    },

    _processTabs : function ()
    {
      var self = this;

      //destroy the old tab bar before creating a new one
      this._destroyTabBar();

      //create a tab bar: create a <ul> and its <li> children based on the 
      //original tabs markup
      //Bug 18633679 - Stop using ui-helper-reset in the layout widgets.
      this.tablist = $("<ul>")
        .addClass("oj-tabs-nav oj-helper-clearfix")
        .attr("role", "tablist")
        .prependTo(this.element);

      //list of tabs
      this.tabs = $();
      //list of contents
      this.panels = $();
      //list of titles
      this.titles = $();

      this.element.children(":not(.oj-tabs-nav)").each(
        function (index)
        {
          var header = $(this).find("> :first-child");
          var headerClone = header.clone();
          headerClone
            .addClass("oj-tabs-title")
            .css(
            {
              "display": ""
            })
            .attr(
            {
              "aria-hidden": "false"
            });

          self.titles = self.titles.add(headerClone);

          var anchor = headerClone
              .wrap("<li><div><a href='#'></a></div></li>")
              .parent();

          anchor.addClass("oj-tabs-anchor")
            .attr(
            {
              "role" : "presentation", 
              "tabIndex" : "-1"
            });

          var div = anchor.parent()
            .addClass("oj-tabs-tab-content");

          var tab = div.parent()
            .addClass("oj-tabs-tab")
            .attr(
            {
              "role" : "tab", 
              "aria-hidden": "false",
              "tabIndex" : "-1"
            });

          tab.appendTo(self.tablist);
          self.tabs = self.tabs.add(tab);

          //make sure the cloned elements have unique ids
          var chd = headerClone[0];
          if (chd.id)
            self._addPrefixId(chd);
          headerClone.find("[id]").each(function() {
            self._addPrefixId(this);
          });

          //TODO: remove aria-hidden attribute
          header.hide()            
            .attr(
            {
              "aria-hidden": "true"
            });

          var anchorId = anchor.uniqueId().attr("id"),
              originalAriaControls = tab.attr("aria-controls"),
              panel = $(this);

          if (panel.hasClass("oj-disabled")) 
          {
            tab.addClass("oj-disabled")
              .attr("aria-disabled", "true");
            //Bug 18270899 - clicking on disabled tab takes user to the top of the page
            anchor.removeAttr("href");
          }

          if (originalAriaControls)
            tab.data("oj-tabs-aria-controls", originalAriaControls);

          tab.attr(
            {
              "aria-controls" : self._getPanelUniqueId(panel),
              "aria-labelledby" : anchorId
            });

          self.panels = self.panels.add(panel);
          panel.attr("aria-labelledby", anchorId);
        });

      if (this.options.orientation == "vertical")
      {
        //In vertical, "oj-tabs-nav-root" is on the same element as the element with "oj-tabs-nav"
        //as long as the theming doesn't care whether the root is on the same element or not
        self.tablist.addClass("oj-tabs-nav-root");

        /* 
         * calulate tab maxWidth and content left margin in a 0 timeout 
         * because font size is not correctly set
         */
        window.setTimeout(function () {
          //qunit test failure
          if (! self || ! self.active)
            return;

          //get the longest tab width
          var maxTabWidth = 0;

          self.tabs
            .addClass("oj-selected")
            .each(function ()
              {
                var tab = $(this);
                maxTabWidth = Math.max(maxTabWidth, tab.outerWidth());
              })
            .removeClass("oj-selected");

          //reset oj-selected
          self.active.addClass("oj-selected")
          self.tabs.css(
            {
              'width': maxTabWidth + "px"
            });

          //get margin-left and min-height of content
          var outerWidth = self.tablist.outerWidth(true);
          var outerHeight = self.tablist.outerHeight(true);

          var isR2L = (self._GetReadingDirection() == "rtl");
          var rootPadding = isR2L? self.element.css("padding-right") : self.element.css("padding-left");
          rootPadding = parseInt(rootPadding, 10);

          if (isR2L)
          {
            self.panels.css(
              {
                'margin-right': outerWidth - 1 + rootPadding + "px",
                'min-height': outerHeight + "px"
              });
          }
          else
          {
            self.panels.css(
              {
                'margin-left': outerWidth - 1 + rootPadding + "px",
                'min-height': outerHeight + "px"
              });
          }
        }, 0);
      }

      this.panels.addClass("oj-tabs-panel")
        .attr("role", "tabpanel");

    },

    _setupEvents : function ()
    {
      var events = 
      {
        'keydown' : this._tabKeydown
      };

      var event = this.options.selectOn;
      var selectOnClick = false;
      if (event)
      {
        var self = this;
        $.each(event.split(" "), function (index, eventName)
        {
          //Bug 19377933 - mousedown is a better default for jtab selecton than click 
          if (eventName == "click")
            selectOnClick = true;

          //security test
          if (/^[a-zA-Z]+$/.test(eventName)) {
            events[eventName] = self._eventHandler;
          }
        });
      }

      var enabledTabs = this.tabs.not(".oj-disabled");

      this._on(enabledTabs, events);

      //Bug 19377933 - mousedown is a better default for jtab selecton than click 
      if (! selectOnClick) {
        this._on(enabledTabs,
        {
	  // prevent the default action
          'click' : function(e) {e.preventDefault();}
        });
      }

      this._on(this.panels, 
      {
        'keydown' : this._panelKeydown
      });

      //add listeners on close icon
      if (this.options.removable)
      {
        var revents = 
        {
          "click" : this._removeTabHandler
        }
        this._on(enabledTabs.find("." + _CLOSE_ICON), revents);
      }

      this._focusable(enabledTabs);
      this._hoverable(enabledTabs);
      this._activeable(enabledTabs);

    },

    _tearDownEvents : function ()
    {
      var enabledTabs = this.tabs.not(".oj-disabled");
      this._off(enabledTabs);
      this._off(this.panels);

    },

    _eventHandler : function (event)
    {
      var options = this.options, 
          active = this.active, 
          tab = $(event.currentTarget).closest("li"), 
          clickedIsActive = (active && tab[0] === active[0]), 
          oToContent = this._getPanelForTab(tab),
          oFromContent = (active && active.length) ? this._getPanelForTab(active) : $(),

          eventData = 
          {
            /** @expose */
            fromTab : oFromContent,
            /** @expose */
            toTab : oToContent
          };

      event.preventDefault();

      if (tab.hasClass("oj-disabled") || 

          // can't switch durning an animation
          this.running || 
          // click on active header, 
          clickedIsActive || 

          // allow canceling deselect
          // Bug 18681075 - ojbeforedeseselect & ojdeselect events shouldn't be raised
          // when tab is rendered initially
          (oFromContent && oFromContent.length &&
           this._trigger("beforeDeselect", event, eventData) === false) ||

          // allow canceling select
          (this._trigger("beforeSelect", event, eventData) === false))
      {
        return;
      }

      options.selected = this._getPanelIdOrIndex(tab);
      this.active = tab;

      //add or remove oj-selected on the corresponding panel
      oToContent.addClass("oj-tabs-selected");
      oFromContent.removeClass("oj-tabs-selected");

      if (!eventData.fromTab.length && ! eventData.toTab.length)
      {
        $.error("ojTabs: Mismatching fragment identifier.");
      }

      this._toggle(event, eventData);
    },

    // handles show/hide for selecting tabs
    _toggle : function (event, eventData)
    {
      var self = this, 
          toShow = eventData.toTab, 
          toHide = eventData.fromTab,
          fromId,
          toId;

      if (eventData)
      {
        if (toHide)
          fromId = toHide.attr("id");

        if (toShow)
          toId = toShow.attr("id");
      }
      this.running = true;

      function complete()
      {
        self.running = false;

        //Bug 18681075 - ojbeforedeseselect & ojdeselect events shouldn't be raised 
        //when tab is rendered initially
        if (fromId !== undefined)
          self._trigger("deselect", event, eventData);
        self._trigger("select", event, eventData);

        self._fireOptionChange("selected", 
                               self._getPanelIdOrIndex(null, toHide, fromId),
                               self._getPanelIdOrIndex(null, toShow, toId),
                               event ? true : false);
      }

      function show()
      {
        self._getTabByPanelId(toId).addClass("oj-selected");
        if (self.options.orientation == "horizontal" && self.tabs.length > 0) {
          if (self._idToIndex(toId) == 0)
            self.element.addClass("oj-first-child-selected");
          else
            self.element.removeClass("oj-first-child-selected");
        }

        toShow.show();
        //Bug 19429607 - unable to stretch ojtable in an initially hidden ojtab
        if (toShow.length > 0)
          oj.Components.subtreeShown(toShow[0]);
        complete();
      }

      // start out by hiding, then showing, then completing
      var fromTab = this._getTabByPanelId(fromId)
        .removeClass("oj-selected");

      toHide.hide();
      //Bug 19429607 - unable to stretch ojtable in an initially hidden ojtab
      if (toHide.length > 0)
        oj.Components.subtreeHidden(toHide[0]);
      show();

      toHide.attr(
      {
        "aria-expanded" : "false", 
        "aria-hidden" : "true"
      });

      fromTab.attr("aria-selected", "false");        

      // If we're switching tabs, remove the old tab from the tab order.
      // If we're opening from collapsed state, remove the previous tab from the tab order.
      if (toShow.length && toHide.length)
      {
        fromTab.attr("tabIndex", "-1");
      }
      else if (toShow.length)
      {
        this.tabs.filter(function ()
        {
          return $(this).attr("tabIndex") === "0";
        })
          .attr("tabIndex", "-1");
      }

      toShow.attr(
      {
        "aria-expanded" : "true", 
        "aria-hidden" : "false"
      });

      this._getTabByPanelId(toId).attr(
      {
        "aria-selected" : "true", 
        "tabIndex" : "0"
      });

    },

    _activate : function (panelId)
    {
      if (panelId === undefined)
        return;

      var active = this._getTabByPanelId(panelId),
          anchor;

      // trying to activate the already active panel
      if (this.active && (active[0] === this.active[0]))
        return;

      //Bug 18539151 - ojtabs should not let user set focus on disabled tabs
      //this.options.selected = panelId;

      // simulate a click on the new active header
      anchor = active.find(".oj-tabs-anchor")[0];
      this._eventHandler(
      {
        target : anchor, 
        currentTarget : anchor, 
        preventDefault : $.noop
      });
    },

    _createCloseIcons : function ()
    {
      //Bug 18727052 - for vertical tabs, removable option should be ignored
      //create close icon only if it's horizontal and  not disabled
      if (this.options.removable && this.options.orientation == "horizontal")
      {
        var removeCueText = this.getTranslatedString(this.options.removeCueText);
        this.tabs.not(".oj-disabled").each(function (index)
        {
          var div = $(this).find("> :first-child");
          div.addClass("oj-removable");

          //add cue text for removable icon for screen reader users
          var rmId = _ID_PREFIX + "rm_" + index;
          $(this).attr("aria-describedby", rmId);

          $("<a href='#'>")
            .addClass("oj-tabs-icon oj-component-icon oj-clickable-icon " + _CLOSE_ICON)
            .attr(
              {
                "id": rmId,
                "tabIndex" : "-1",
                "aria-label" : removeCueText,
                "role" : "presentation"
              })
            .appendTo(div);

        });
      }
    },

    _destroyCloseIcons : function ()
    {
      this.tabs.find(_CLOSE_ICON).remove();
    },

    _destroyTabBar : function ()
    {
      //remove listener
      this._tabMaxWidthApplied = false;
      if (this._hasResizeListener)
      {
        oj.DomUtils.removeResizeListener(this.element[0], this._resizeHandler);
        this._hasResizeListener = false;
        this._originalWidth = undefined;
      }

      if (this.conveyor) {
        this.conveyor.ojConveyorBelt( "destroy" );
        this.conveyor.remove();
        this.conveyor = null;
        this.active = null;
      }
      else
      {
        this.element.children(".oj-tabs-nav").remove();
      }
    },

    _destroy : function ()
    {
      this._clearMenu();

      var orientation = this.options.orientation;
      if (orientation == "vertical")
        this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
      else
        this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-first-child-selected");

      //destroy tab bar and conveyor
      this._tearDownEvents();
      this._destroyTabBar();

      var self = this;
      this.panels.each(function ()
      {
        $(this).removeAttr("tabIndex")
          .removeAttr("aria-expanded")
          .removeAttr("aria-selected")
          .removeAttr("aria-labelledby")
          .removeAttr("aria-hidden")
          .removeAttr("role")
          .removeClass("oj-active oj-disabled oj-tabs-selected oj-tabs-gid oj-tabs-panel")
          .removeUniqueId()
          .css("display", "");

        if (orientation == "vertical")
        {
          $(this).css("margin-left", "")
            .css("min-height", "");
        }

        //remove display:none
        var header = $(this).find("> :first-child");
        header.css("display", "")
          .removeAttr("aria-hidden");

      });
    },

    _setRemovable : function (removable)
    {
      if (removable === this.options.removable)
        return;

      this.options.removable = removable;
      this.refresh();
    },

    _removeTabHandler : function (event)
    {
      var icon = $(event.currentTarget),
          tab = icon.closest("li"),
          panel = this._getPanelForTab(tab),
          eventData = 
          {
            /** @expose */
            tab : panel
          };

      //trigger before delete event and only delete if it's not cancelled
      if (tab && this._trigger("beforeRemove", event, eventData) !== false)
      {
        //if tab to be removed is selected, select the next enabled tab
        if (tab.hasClass("oj-selected"))
        {
          //fire select event 
          var nextIndex = this._getNextEnabledTab(panel.attr("id"));
          // no enabled tabs left
          if (nextIndex === undefined)
          {
            this.options.selected = undefined;
            this.active = undefined;
          }
          else
          {
            this.options.selected = this._getPanelIdOrIndex(this.tabs[nextIndex]);
            this._activateLater = this._indexToId(nextIndex);
          }
        }

        panel.remove();
        tab.remove();

        //Bug 18269291 - If user closes tab then index for tabs changes and disabled tab becomes enable
        // update indices of disabled tabs 
        this._updateDisabledTabs();

        this.refresh();

        //set focus on the active
        if (this.active)
          this.active.focus();

        this._trigger("remove", event, eventData);
      }
    },

    /**
     * Add a tab to the end of the tabs
     * 
     * @expose 
     * @memberof! oj.ojTabs
     * @instance
     * @param {jQuery} newTab jQuery object of the new tab
     * @example <caption>Invoke the <code class="prettyprint">addTab</code> method:</caption>
     * $( ".selector" ).ojTabs( "addTab", $("&lt;div>&lt;h3>New Tab&lt;/h3>&lt;p>Content of New Tab&lt;/p>&lt;/div>") );
     */
    addTab : function (newTab)
    {
      this.element.append(newTab);

      //in case all tabs are disabled, make sure the new tab is enabled.
      var selectedPanel = this.element.children(".oj-tabs-selected");
      if (! selectedPanel.length)
      {
        var panelId = this._getPanelUniqueId(newTab);
        this._activateLater = panelId;
      }

      this.refresh();

      //Bug 18427258 - new tabs don't get focus
      this.tabs.last()[0].scrollIntoView(false);
    },

    _setupReorder : function ()
    {
      //enable sortable
      //Bug 18793240 - when one of the tab is disabled, sorting does not work
      if (this.options.reorderable && this.options.disabledTabs.length !== this.tabs.length)
      {
        var self = this;
        this.tablist.sortable(
        {
          axis: (self.options.orientation == "horizontal") ? "x" : "y",
          stop: function(event, ui) {              
            //find the element that was moved
            var mvTab = ui.item;
            self._doReorder(mvTab, mvTab.prev());
          }
        })
      }
      //disable sortable
      else
      {
        this.tablist.sortable({ disabled: true });
      }
    },

    _setupOrientation : function (value)
    {
      if (! value)
        value = this.options.orientation;

      if (value == "horizontal")
      {
        if (this.options.orientation == "vertical" && this.panels)
        {
          this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.panels.each(function ()
          {
            $(this).css("margin-left", "")
              .css("min-height", "");
          });
        }
        this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
      }
      else if (value == "vertical")
      {
        if (this.options.orientation == "horizontal" && this.panels)
        {
          this.element.removeClass("oj-tabs-horizontal");
        }
        this.element.addClass( "oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix" );
      }
      else
        return;

      this.options.orientation = value;
    },

    //Bug 18290621 - ojtabs do not work with tabs whose id has '::' 
    _sanitizeSelector: function( hash ) {
      return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
    },

    _getPanelForTab : function (tab)
    {
      var id = $(tab).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + id));
    },

    _getTab : function (index)
    {
      return this.tabs.eq(index);
    },

    _getTabbarWrapper: function()
    {
      var ulParent = this.tablist.parent();
      if (! ulParent.hasClass("oj-tabs-conveyor"))
      {
        ulParent = this.tablist
            .wrap("<div>")
            .parent()
            .addClass("oj-tabs-conveyor");

        //Bug 19209791 - truncation not working
        //need to create the "oj-tabs-nav-root" before addConveyor
        //otherwise, all skin selectors wont apply

        // add special class so tabs component can skin the conveyor 
        // overflow indicators to add padding between them and the tabs
        var navRoot = ulParent
          .wrap("<div>")
          .parent()
          .addClass("oj-tabs-nav-root");

        navRoot.uniqueId().attr("id");
      }
      return ulParent;
    },

    _addPrefixId : function (elem)
    {
      if (elem.id.indexOf(_ID_PREFIX) < 0)
        $(elem).attr("id", _ID_PREFIX + elem.id);
    },

    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     *
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-tabs-tab</b>: tab div </li>
     * <li><b>oj-tabs-title</b>: tab title text </li>
     * <li><b>oj-tabs-panel</b>: tab content panel </li>
     * <li><b>oj-tabs-close-icon</b>: tab close icon </li>
     * <li><b>oj-conveyorbelt</b>: conveyorbelt </li>
     * </ul>
     *
     * In addition, tabs requires a zero-based index of the child tab.
     *
     * @expose
     * @memberof! oj.ojTabs
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *        the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent.<p>
     *        index: a number, the index of tab.
     * @returns {Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
      if (locator == null)
      {
        return this.element ? this.element[0] : null;
      }

      var subId = locator['subId'],
          index = locator['index'];

      if (subId != 'oj-conveyorbelt' &&
          ((typeof index !== 'number') ||
           index < 0 || index >= this.panels.length))
        return null;

      switch (subId)
      {
      case 'oj-conveyorbelt':
        return this.conveyor ? this.conveyor[0] : null;

      case 'oj-tabs-panel':
        return this.panels[index];

      case 'oj-tabs-tab':
        return this.tabs[index];

      case 'oj-tabs-title':
        return this.titles[index];

      case 'oj-tabs-close-icon':
        return this._getTab(index).find("." + subId)[0];
      }

      // Non-null locators have to be handled by the component subclasses
      return null;
    },

    _getTabsWidth: function()
    {
      return this.element[0].clientWidth;
    },

    _isOverflow: function()
    {
      return (this._originalWidth > this._getTabsWidth());
    },

    _isMaxWidthApplied: function()
    {
      return this._tabMaxWidthApplied;
    },

    _setMaxWidthApplied: function(bval)
    {
      this._tabMaxWidthApplied = bval;
    },

    _getTabMaxWidth: function()
    {
      var max = Math.floor(this._getTabsWidth()  / this.tabs.length);

      if (this.options.removable)
        max -= _CLOSE_ICON_SIZE;

      return max;
    },

    _applyTabMaxWidth: function()
    {
      if (! this._isMaxWidthApplied())
      {
        var maxWidth = this._getTabMaxWidth();

        this.titles.each(function (index)
        {
          $(this)
            .css("max-width", "" + maxWidth + "px")
            .addClass("oj-tabs-title-overflow");
        });

        this._setMaxWidthApplied(true);
        this._logMessage("apply max width");
      }
    },

    _removeTabMaxWidth: function()
    {
      if (this._isMaxWidthApplied())
      {
        this.titles.each(function (index)
        {
          $(this)
            .css("max-width", "")
            .removeClass("oj-tabs-title-overflow");
        });

        this._setMaxWidthApplied(false);
        this._logMessage("remove max width");
      }
    },

    _logMessage: function(msg)
    {
//      console.log(msg);
    },

    /* resize handler */
    _handleResize: function(width, height)
    {
      this._logMessage("width " + width + " ulWidth " + this._originalWidth +
                       " clientWidth " + this._getTabsWidth());

      if (this._isOverflow())
      {
        this._logMessage("overflow");
        this._applyTabMaxWidth();
      }
      else
      {
        this._logMessage("underflow");
        this._removeTabMaxWidth();
      }
    },

    _isProgressive: function()
    {
      return this.options.truncation == "auto" ||
        this.options.truncation == "progressive";
    },

    _truncateBeforeOverflow: function()
    {
      var options = this.options;
      if (options.orientation == "horizontal" && this.tabs.length > 0 && 
          this._isProgressive())
      {
        if (this._resizeHandler == null)
          this._resizeHandler = this._handleResize.bind(this);

        oj.DomUtils.addResizeListener(this.element[0], this._resizeHandler);
        this._hasResizeListener = true;

        //handle initial overflow
        this._originalWidth = this._getTabbarWrapper()[0].scrollWidth;

        if (this._isOverflow())
          this._applyTabMaxWidth();
      }
    },

    /**
     * Fire optionChange event 
     * @param {String} key - 'selected'
     * @param {Object} previousValue 
     * @param {Object} value
     * @param {Boolean} originalEvent  
     *
     * @private
     */
    _fireOptionChange: function(key, previousValue, value, originalEvent) 
    {
      var ui = {
        "option": key,
        "previousValue": previousValue,
        "value": value,
        // (originalEvent is non-null) iff (option change is due to user interaction) 
        // iff (binding should write back the value)
        "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
      };
      this._trigger('optionChange', originalEvent, ui);
    },

    /**
     *  @private
     */
    _handleContextMenuBeforeShow: function(e, ui)
    {
      //Context Menu: 
      //got here either by right mouse click (e.which == 3)
      //or <shift F10> key (ev.keyCode = 121 and ev.shiftKey = true)
      var ev = e['originalEvent']['originalEvent'];

      if (ev['type'] === 'keydown') {
        this._menu.tab = this.active;
      }
      else  {
        this._menu.tab = $(e.originalEvent.target).closest("li");
      }
      this._menu.tabId = this._menu.tab.attr("id");

      // TODO: Should set "of" only for keyboard, like Table/DataGrid do, so that 
      // for right-clicks the menu is positioned at the event.
      // TODO: Rather than setting "position" in this beforeOpen listener, probably better to 
      // override _OpenContextMenu() and pass "position" in its call to menu.open().  That way, 
      // if the app wants to tweak the position in its beforeOpen listener, its success 
      // doesn't depend on who gets their listeners registered first.
      ui.openOptions.position = {"my" : "start top",
                                 "at" : "start bottom",
                                 "of" : this._menu.tab[0]};

      // Set menu "Paste" disable state, depending on whether there's been a
      // previous "cut"
      if (this._menu.usermenu && 
          (this._menu.$elemPasteBefore || this._menu.$elemPasteAfter)) {

        var disabledState = (! this._menu.cutTab);
        var state = this._menu.$elemPasteBefore.hasClass("oj-disabled");

        if (state != disabledState) {
          if (disabledState) {
            this._menu.$elemPasteBefore.addClass("oj-disabled");
            this._menu.$elemPasteAfter.addClass("oj-disabled");
          }
          else {
            this._menu.$elemPasteBefore.removeClass("oj-disabled");
            this._menu.$elemPasteAfter.removeClass("oj-disabled");
          }
          this._menu.$container.ojMenu("refresh");
        }
      }
    },

    _buildContextMenuItem : function(cmd)
    {
      var id = _arMenuCmdMap[cmd];
      var label = '<a href="#">' + this.getTranslatedString(cmd) + '</a>';
      return $('<li id=' + id + '>' + label + '</li>');
     },

    /**
     *  Menu "cut" functionality
     *  @private
     */
    _menu_cut : function (obj)
    {
      if (!obj || !obj.length)  {
        return false;
      }

      this._menu.cutTab = obj;
    },

    /**
     *  Menu "paste" functionality
     *  @private
     */
    _menu_paste : function (obj, pasteBefore)
    { 
      if (!obj || !obj.length) {
        return false;
      }
      if (! this._menu.cutTab)  {
        return false;
      }

      var mvTab = this._menu.cutTab;
      this._menu.cutTab = false;
      this._doReorder(mvTab, obj, pasteBefore);

    },

    /**
     *   Check menu selected to see if it one of tabs predefined cut/paste id's
     *   @private
     */
    _handleContextMenuSelect: function(ev, ui)
    {
      var  id = ui? ui.item.attr("id") : undefined;

      if (id === "ojtabscut") {
        this._menu_cut(this._menu.tab);
      }
      else if (id === "ojtabspastebefore") {
        this._menu_paste(this._menu.tab, true);
      }
      else if (id === "ojtabspasteafter") {
        this._menu_paste(this._menu.tab, false);
      }
    },

    /**
     *  Initialize the context menu.  This is called on startup, or on option
     *  "contextMenu" change.
     *  @param {Object=} newVal   true if called because of an option change.
     *  @private
     */
    _initMenu : function(newVal)
    {
      var  menu, t, html, $html;

      // check for contextmenu attribute on the root element
      if ((! newVal) && (! this.options["contextMenu"])) {
        menu = this.element.attr("contextmenu");
        if (menu) {
          this.options["contextMenu"] = "#" + menu;
        }
      }

      if ((! newVal) && (! this.options["contextMenu"])) {
        return;
      }

      menu =  newVal || this.options["contextMenu"];
      t = $.type(menu);
      if (t == "function") {
        try {
          menu = menu();             // call user's method to get the context menu
        }
        catch (e) {
          menu = null;
        }
        t = $.type(menu);
      }

      if (t !== "string") {
        return;
      }

      var $m = $(menu);                    // get the user's <ul> list   
      if ($m) {
        $m.css("display", "none");         // ensure it's not visible
        var  dm = this._menu;
        if (! dm)
          return;

        dm.$container = $m;
        dm.usermenu   = true;              // have a context menu
      }
      
      // if we have a context menu
      if (this._menu.usermenu) {
        if (newVal) {                      // and it is it being changed
          this._applyMenu();               // complete menu creation/attachnment
        }
      }

      //  If not a new val from options, Menu will be noted at the end of initialization in _start()
    },


    /**
     *   Attach the user menu <ul> list to the tabs div, and set up listeners on it.
     *   @private
     */
    _applyMenu : function()
    {
      if (! this._menu || ! this._menu.usermenu || ! this.options.reorderable) {
        return;
      }

      // Add our listeners so that we can handle build-in cut/paste, etc
      var $menuContainer = this._menu.$container;
      var self = this;

      $menuContainer.on("ojselect",     $.proxy(this._handleContextMenuSelect,     this));
      $menuContainer.on("ojbeforeopen", $.proxy(this._handleContextMenuBeforeShow, this));

      // If there are any ojTabs built in menu item ids, construct the menu items
      var listItems = $menuContainer.find("[data-oj-command]");
      var bChanged  = false;

      listItems.each(function()  {
        if ($(this).children('a').length === 0)  {

          var command = $(this).attr('data-oj-command').slice("oj-tabs-".length);
          $(this).replaceWith(self._buildContextMenuItem(command));
          $(this).addClass("oj-menu-item")

          bChanged = true;
        }
      });

      if (bChanged) {
        $menuContainer.ojMenu('refresh');
      }

      //  Note "paste" elements for disabling if no prev "cut"
      this._menu.$elemPasteBefore = $menuContainer.find("#ojtabspastebefore");
      this._menu.$elemPasteAfter = $menuContainer.find("#ojtabspasteafter");       
    },
       
    /**
     *  Clear out any contextMenu data.
     *  @private
     */
    _clearMenu : function()
    {
      var menu = this._menu;
      if (menu && menu.usermenu)
      {
        menu.usermenu = false;
        menu.$container.off("ojselect");
        menu.$container.off("ojbeforeopen");
        menu.$container = null;
      }
    },

    _doReorder: function (mvTab, prevTab, pasteBefore)
    {
      //Bug 19263181 - if a tab is removed, any re-ordering performed on the tabs is lost
      //don't allow reorder on a disabled tab
      if (this._isTabDisabled(this.tabs.index(mvTab)))
        return;

      var mvContent = this._getPanelForTab(mvTab);

      if (prevTab.length)
      {
        if (pasteBefore) {
          this._getPanelForTab(prevTab).before(mvContent);
        }
        else {
          this._getPanelForTab(prevTab).after(mvContent);
        }
      }
      else if (this.panels.length > 0)
      {
        this.panels.first().before(mvContent);
      }

      //Bug 18680706 - calling refresh after reordering tabs causes tabs to loose there disabled state 
      //update disabled and active
      this._updateDisabledTabs();

      //Bug 18721093 - add new tab. move it to first place. add another tab.first tab disappears.
      this.refresh();
    },

    _getPanelUniqueId: function (panel)
    {
      var id = panel.attr("id");
      if (! id) {
        id = panel.uniqueId().attr("id");
        panel.addClass("oj-tabs-gid");
      }
      return id;
    },

    _getTabByPanelId: function (panelId)
    {
      return this._getTab(this._idToIndex(panelId));
    },

    _getPanelId: function (idOrIndex)
    {
      if (typeof idOrIndex === 'number') {
        if (idOrIndex >= 0 && idOrIndex < this.panels.length) {
          return this._indexToId(idOrIndex);
        }
      }
      else if (typeof idOrIndex === 'string') {
        if (this._idToIndex(idOrIndex) != -1)
          return idOrIndex;
      }
      return undefined;
    },

    _indexToId: function (index)
    {
      return this.panels.eq(index).attr("id");
    },

    //Note: return -1 if not valid id
    _idToIndex: function (id)
    {
      if (typeof id === 'number')
        return id;

      return this.panels.index($("#" + id));
    },

    /* 
     * return either page author provided id or index
     */
    _getPanelIdOrIndex: function (tab, panel, id) {
      if (! tab && ! panel)
        return undefined;

      if (tab) {
        panel = this._getPanelForTab(tab);
        id = panel.attr("id");
      }
      return panel.hasClass("oj-tabs-gid") ? this._idToIndex(id) : id;
    },

    _setOjDisabledOnPanel: function (disTabs)
    {
      //clear oj-disabled that were on the tabs and panels
      this.element.children().removeClass("oj-disabled");
      if (this.tabs) {
        $(this.tabs).removeClass("oj-disabled");
      }

      //for each disabled tab in otpions.disabledTabs, add oj-disabled to the corresponding panel 
      if (disTabs && disTabs.length > 0) {
        var children = this.element.children();
        var startIndex = this.conveyor ? (children.index(this.conveyor) + 1) : 0;
        var idOrIndex;

        for (var i = 0; i < disTabs.length; i++) {
          idOrIndex = disTabs[i];

          //Note: this.tabs may be undefined if this method is called from componenetCreate
          if ((typeof idOrIndex === 'number') &&
              idOrIndex >= 0 && (startIndex + idOrIndex) < children.length) {
            $(children[startIndex + idOrIndex]).addClass("oj-disabled");
          }
          else if (typeof idOrIndex === 'string') {
            this.element.find("#" + idOrIndex).addClass("oj-disabled");
          }
        }
      }
    },

    /* 
     * update disabledTabs array
     * entry value is either page author provided id or index
     */
    _updateDisabledTabs: function () {
      var arr  = [];
      var self = this;
      this.tablist.children(".oj-disabled").each(
        function() {
          arr.push(self._getPanelIdOrIndex($(this)));
        }
      );
      this.options.disabledTabs = arr;
    }


  });
}
());


});
