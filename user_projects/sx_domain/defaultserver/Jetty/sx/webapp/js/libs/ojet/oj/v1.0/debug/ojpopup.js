define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/*!
 * jQuery UI Popup @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.position.js
 */(function ()
{

  /**
   * List of all pseudo marker selectors that defines rules for where a tail is aligned.
   * @private
   * @const
   */
  var _TAIL_STYLES = ["oj-left", "oj-center", "oj-right", "oj-top", "oj-middle", "oj-bottom"];

  /**
   * Mapping of horizontal-vertical (x,y) positon using alignment to jet tail pseudo marker selectors.
   *
   * horizontal: right, left, center
   * vertical: top, bottom, middle
   *
   * @private
   * @const
   */
  var _TAIL_ALIGN_RULES = 
  {
    'right-top' : 'oj-right oj-top', 'right-middle' : 'oj-right oj-middle', 'right-bottom' : 'oj-right oj-bottom', 'left-top' : 'oj-left oj-top', 'left-middle' : 'oj-left oj-middle', 'left-bottom' : 'oj-left oj-bottom', 'center-top' : 'oj-center oj-top', 'center-middle' : 'oj-left oj-middle', 'center-bottom' : 'oj-center oj-bottom'
  };

  /**
   * @class
   * @name oj.ojPopup
   * @augments oj.baseComponent
   *
   * @classdesc
   * <h3 id="popupOverview-section">
   *   JET Popup Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#popupOverview-section"></a></h3>
   *
   * <p>Description: Themeable, WAI-ARIA-compliant popup that can display arbitrary content.</p>
   *
   * <p>A JET popup can be created from a block ( <code class="prettyprint">&lt;div></code> ) or inline element
   *   ( <code class="prettyprint">&lt;span></code> ).  This element will become the immediate child of the content element.
   *   Dynamic content can be inserted under this element.</p>
   *
   * <pre class="prettyprint">
   * <code>&lt;span id="popup">
   *   Hello World!
   * &lt;/span>
   * </code></pre>
   *
   * <p>For WAI-ARIA compliance, JET automatically adds <code class="prettyprint">role="tooltip"</code> to
   * the root popup dom element.  It also adds the <code class="prettyprint">aria-describedby="popup-id"</code>
   * to the launcher while the popup is open.
   * </p>
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
   *       <td>Forward or backward (<kbd>Shift+Tab</kbd>) tabbing will traverse within the content of the popup.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>F6</kbd></td>
   *       <td>Focus can be toggled from the launcher to the popups content and back using the F6 function key.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td>Esc key from within the content of the popup or from the launcher will close the popup.</td>
   *     </tr>
   * </tbody></table>
   * <br/><br/>
   *   
   * <h3 id="accessibility-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#accessibility-section"></a>
   * </h3>
   * 
   * <p>One point often overlooked is making the gestures that launch a popup accessible.
   *   There are no constraints to what events a page developer might choose to trigger opening a
   *   popup.  The choice should be accessible for screen reader users.  Page 
   *   developers should take care when using mouse events to trigger opening of a popup.
   *   This is especially important if the content of the popup can't be derived from other 
   *   visible areas on the page. In cases that mouseover, mouseout, mouseenter, mouseleave and hover
   *   events are used to launch popups, there needs to be a keyboard functional equivalency.
   * </p> 
   * 
   * <h3 id="eventHandling-section">
   *   Event Handling
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
   * </h3>
   * <ul>
   *  <li>beforeClose(event, ui) - Triggered before a popup closes. Event can prevent closing the popup.</li>
   *  <li>beforeOpen(event, ui) - Triggered before a popup closes. Event can prevent opening the popup.</li>
   *  <li>close(event, ui) - Triggered after the popup has closed.</li>
   *  <li>create(event, ui) - Triggered after the component has been bound to an associated dom element.</li>
   *  <li>focus(event, ui) - Triggered when initial focus is established on opening, depending on the value of the initalFocus 
   *      option, or <kbd>F6</kbd> focus toggle from the associated launcher.</li>
   *  <li>open(event, ui) - Triggered after the popup has been made visible.</li>
   * </ul>
   *
   * @desc Creates a JET Popup.  If called after the popup is already created, it is equivalent to the
   * "set many options" overload of <code class="prettyprint">option()</code>.
   *
   * @param {Object=} options a map of option-value pairs to set on the component
   *
   * @example <caption>Initialize the popup with no options specified:</caption>
   * $( ".selector" ).ojPopup();
   *
   * @example <caption>Initialize the popup with behaviors of a notewindow:</caption>
   * $( ".selector" ).ojPopup({initialFocus: 'none', autoDismiss: 'focusLoss', tail: 'simple'});
   *
   * @example <caption>Initialize a popup via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="popup1" data-bind="ojComponent: {component: 'ojPopup'}">This is a popup!&lt;/div>
   *
   */
  oj.__registerWidget("oj.ojPopup", $['oj']['baseComponent'], 
  {
    widgetEventPrefix : "oj",
    options : 
    {
      /**
       * Defines conditions that will cause an open popup to auto close dismiss.  A value of <code class="prettyprint">focusLoss</code>
       * defines the dismissal condition where focus has left the content of the popup or from the associated
       * launcher.
       *
       * @expose
       * @memberof! oj.ojPopup
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"focusLoss"</code>
       * @ojvalue {string} "none" disables auto dismissal behaviors.
       * @ojvalue {string} "focusLoss" defines auto dismissal behavior when focus leaves the content of the popup or
       *                   associated launcher.
       *
       * @example <caption>Initialize the popup with <code class="prettyprint">autoDismiss</code> option specified:</caption>
       * $( ".selector" ).ojPopup( { "autoDismiss": "focusLoss" } );
       *
       * @example <caption>Get or set the <code class="prettyprint">autoDismiss</code> option, after initialization:</caption>
       * // getter
       * var autoDismiss = $( ".selector" ).ojPopup( "option", "autoDismiss" );
       * // setter
       * $( ".selector" ).ojPopup( "option", "autoDismiss", "none" );
       */
       autoDismiss: 'focusLoss',
      /**
       * Defines the presents of border, shadow and background color of the root popup dom.  Value of
       * <code class="prettyprint">none</code> applies the <code class="prettyprint">oj-popup-no-chrome</code>
       * selector defined by the active theme to the root dom of the popup to remove the default chrome.
       *
       * @expose
       * @memberof! oj.ojPopup
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"default"</code>
       * @ojvalue {string} "default" describes the popups border, shadow, and background color defined by the active theme.
       * @ojvalue {string} "none" turns off the outer chrome defined by the active theme.
       *
       * @example <caption>Initialize the popup with <code class="prettyprint">chrome</code> option specified:</caption>
       * $( ".selector" ).ojPopup( { "chrome": "none" } );
       *
       * @example <caption>Get or set the <code class="prettyprint">chrome</code> option, after initialization:</caption>
       * // getter
       * var chrome = $( ".selector" ).ojPopup( "option", "chrome" );
       *
       * // setter
       * $( ".selector" ).ojPopup( "option", "chrome", "none" );
       */
      chrome : 'default', 
      /**
       * Determines if the popup should steal focus to its content when initially open. A value of <code class="prettyprint">none</code>
       * prevents the popup from grabbing focus when open.
       *
       * @expose
       * @memberof! oj.ojPopup
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"none"</code>
       * @ojvalue {string} "none" prevents the popup from stealing focus when open.
       * @ojvalue {string} "initialFocus" defines that a popup should grab focus to its content when open.
       *
       * @example <caption>Initialize the popup with <code class="prettyprint">initialFocus</code> option specified:</caption>
       * $( ".selector" ).ojPopup( { "initialFocus": "none" } );
       *
       * @example <caption>Get or set the <code class="prettyprint">initialFocus</code> option, after initialization:</caption>
       * // getter
       * var initialFocus = $( ".selector" ).ojPopup( "option", "initialFocus" );
       *
       * // setter
       * $( ".selector" ).ojPopup( "option", "initialFocus", "none" );
       */
      initialFocus : 'none',
      /**
       * <p>Position object is defined by the jquery position API and is used to establish the location the
       * popup will appear relative to another element.  The postion object contains the following properties:
       * "my", "at", "of", "colision", "using" and "within".</p>
       *
       * <p>The "my" and "at" properties defines aligment points relative to the popup and other element.  The
       * "my" property represents the popups alignment where the "at" property represents the other element
       * that can be identified by "of" or defauts to the launcher when the popup opens.  The values of these
       * properties describe a "horizontal vertical" location.</p>
       *
       * <p>Acceptable "horizontal" alignments values are: "right", "center", "left", "start", "end".  Note: Jet has
       * added "start" and "end" options to be more RTL friendly.  The Jet values of "start" and "end" normalize
       * to "right" or "left" depending on the direction of the document.</p>
       *
       * <p>Acceptable "vertical" alignment values are: "top", "center" and "bottom".</p>
       *
       * The following is a short summary of the most interesting positon properties:
       * <ul>
       *   <li><code class="prettyprint">my</code> - A "vertical horizontal" rule that defines the location of the popup
       *       used for alignment.</li>
       *   <li><code class="prettyprint">at</code> - A "vertical horizontal" rule that defines the location of the
       *       other element for used alignment. The other element is defined by "of" or defaults to the open launcher
       *       argument if not specified.</li>
       * </ul>
       *
       * @expose
       * @memberof! oj.ojPopup
       * @instance
       * @type {Object}
       * @default <code class="prettyprint">{my: "start top", at: "start bottom", collision: "flip"}</code>
       *
       * @example <caption>Initialize the popup with <code class="prettyprint">position</code> option specified:</caption>
       * $( ".selector" ).ojPopup( { "position": {"my": "left top", "at": "right top"} } );
       *
       * @example <caption>Get or set the <code class="prettyprint">position</code> option, after initialization:</caption>
       * // getter
       * var position = $( ".selector" ).ojPopup( "option", "position" );
       *
       * // setter
       * $( ".selector" ).ojPopup( "option", "position", {"my": "start bottom", "at": "end+14 top" } );
       */
      position : 
      {
        /**
         * Defines which position on the popup to align with the target ("of") element: "horizontal vertical" alignment.
         * A single value such as "right" will be normalized to "right center", "top" will be normalized to "center top"
         * (following CSS convention). Acceptable horizontal values: "left", "center", "right".
         * Acceptable vertical values: "top", "center", "bottom". Example: "left top" or "center center".
         * Each dimension can also contain offsets, in pixels or percent, e.g., "right+10 top-25%". Percentage offsets are relative
         * to the popup being positioned.
         *
         *
         * @expose
         * @memberof! position#
         * @alias position.my
         * @type {string}
         * @default <code class="prettyprint">left top</code>
         */
         'my' : 'start top', 
        /**
         * Defines which position on the target element ("of") to align the positioned element against: "horizontal vertical"
         * alignment. See the my option for full details on possible values. Percentage offsets are relative to the target element.
         *
         * @expose
         * @type {string}
         * @memberof! position#
         * @alias position.at
         * @default <code class="prettyprint">left bottom</code>
         */
         'at' : 'start bottom', 
        /**
         * Which element to position the popup against.  The default is the <code class="prettyprint">launcher</code> argument
         * passed to the <code class="prettyprint">open</code> method. If you provide a selector or jQuery object,
         * the first matching element will be used. If you provide an event object, the pageX and pageY properties
         * will be used.
         *
         * @expose
         * @memberof! position#
         * @alias position.of
         * @type {string}
         * @default <code class="prettyprint">''</code>
         */
         'of' : '', 
        /**
         *  When the positioned element overflows the window in some direction, move it to an alternative position. Similar to my and
         *  at, this accepts a single value or a pair for horizontal/vertical, e.g., "flip", "fit", "fit flip", "fit none".
         *
         *  <ul>
         *    <li>"flip": Flips the element to the opposite side of the target and the collision detection is run again to see if it
         *        will fit. Whichever side allows more of the element to be visible will be used.</li>
         *    <li>"fit": Shift the element away from the edge of the window.</li>
         *    <li>"flipfit": First applies the flip logic, placing the element on whichever side allows more of the element to be
         *        visible. Then the fit logic is applied to ensure as much of the element is visible as possible.</li>
         *    <li>"none": Does not apply any collision detection.</li>
         *  </ul>
         * @expose
         * @memberof! position#
         * @alias position.collision
         * @type {string}
         * @default <code class="prettyprint">flip</code>
         */
         'collision' : 'flip'
      },
      /**
       * Determines if a decoration will be displayed from the popup that points to the element the popup is aligned to.
       * The <code class="prettyprint">simple</code> value enables the tail defined by the current theme.  In addtion,
       * the <code class="prettyprint">oj-popup-tail-simple</code> selector will be applied to the root dom element.  This
       * is to allow the box-shadow, z-index and other chrome styling to vary per tail decoration.
       *
       * @expose
       * @memberof! oj.ojPopup
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"none"</code>
       * @ojvalue {string} "none" no decoration will be displayed from the popup pointing to the launcher.
       * @ojvalue {string} "simple" enables showing the tail defined by the current theme.
       *
       * @example <caption>Initialize the popup with <code class="prettyprint">tail</code> option specified:</caption>
       * $( ".selector" ).ojPopup( { "tail": "simple" } );
       *
       * @example <caption>Get or set the <code class="prettyprint">tail</code> option, after initialization:</caption>
       * // getter
       * var tail = $( ".selector" ).ojPopup( "option", "tail" );
       *
       * // setter
       * $( ".selector" ).ojPopup( "option", "tail", "simple" );
       */
      tail : 'none', 

      // Events 
      /**
       * Triggered before the popup is launched via the <code class="prettyprint">open()</code> method.
       * The launch can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojPopup
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui dom element that the popup was bound to
       * 
       * @example <caption>Initialize the popup with the <code class="prettyprint">beforeOpen</code> callback specified:</caption>
       * $( ".selector" ).ojPopup({
       *     "beforeOpen": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeopen</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeopen", function( event, ui ) {} );
       */
      beforeOpen : null, 
      /**
       * Triggered after the popup is launched via the <code class="prettyprint">open()</code> method.
       *
       * @expose
       * @event
       * @memberof! oj.ojPopup
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui dom element that the popup was bound to
       *
       * @example <caption>Initialize the popup with the <code class="prettyprint">open</code> callback specified:</caption>
       * $( ".selector" ).ojPopup({
       *     "open": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojopen</code> event:</caption>
       * $( ".selector" ).on( "ojopen", function( event, ui ) {} );
       */
      open : null, 
      /**
       * Triggered before the popup is dismissed via the <code class="prettyprint">close()</code> method.
       * The close can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose
       * @event
       * @memberof! oj.ojPopup
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui dom element that the popup was bound to
       *
       * @example <caption>Initialize the popup with the <code class="prettyprint">beforeClose</code> callback specified:</caption>
       * $( ".selector" ).ojPopup({
       *     "beforeClose": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeclose</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeclose", function( event, ui ) {} );
       */
      beforeClose : null, 
      /**
       * Triggered after the popup is dismissed via the <code class="prettyprint">close()</code> method.
       *
       * @expose
       * @event
       * @memberof! oj.ojPopup
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui dom element that the popup was bound to
       *
       * @example <caption>Initialize the popup with the <code class="prettyprint">close</code> callback specified:</caption>
       * $( ".selector" ).ojPopup({
       *     "close": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojclose</code> event:</caption>
       * $( ".selector" ).on( "ojclose", function( event, ui ) {} );
       */
      close : null,
      /**
       * Triggered after focus has been transfered to the popup. This will occur after the 
       * <code class="prettyprint">open()</code> method is called, depending on the value
       * of the <code class="prettyprint">initialFocus</code> option.  It's also triggered when using the
       * <kbd>F6</kbd> key to toggle focus from the associated launcher element to the content of the popup.
       *
       * @expose
       * @event
       * @memberof! oj.ojPopup
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui dom element that the popup was bound to
       *
       * @example <caption>Initialize the popup with the <code class="prettyprint">focus</code> callback specified:</caption>
       * $( ".selector" ).ojPopup({
       *     "focus": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojfocus</code> event:</caption>
       * $( ".selector" ).on( "ojfocus", function( event, ui ) {} );
       */
      focus : null
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @protected
    * @override 
    * @return {void}
    */
     _ComponentCreate: function ()
    {
      this._super();
      
      var rootStyle = this._getRootStyle();
      var rootElement = $("<div>");
      this._rootElement = rootElement.hide().addClass(rootStyle).attr("aria-hidden", "true");
      rootElement.addClass("oj-helper-reset-inheritable oj-component");

      var content = $("<div>").addClass([rootStyle, "content"].join("-"));
      content.appendTo(rootElement);
      this.element.after(rootElement);
      this.element.appendTo(content);
      this.element.show();

      this._createTail();
      this._setChrome();
      this._createLiveRegion();

      // callback that overrides the positon['using'] for setting the tail.
      this._usingCallback = $.proxy(this._usingHandler, this);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @protected
    * @override 
    * @return {void}
    */
    _destroy : function ()
    {
      this._super();

      if (this.isOpen())
        this.close();

      this._destroyTail();
      this._destroyLiveRegion();
      delete this._usingCallback;

      this._rootElement.replaceWith(this.element);
      this.element.hide();

    },
    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the generated wrapper.
     * This method does not accept any arguments.
     *
     * @expose
     * @name oj.ojpopup#widget
     * @memberof! oj.ojPopup
     * @instance
     * @return {jQuery} the popup
     *
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojPopup( "widget" );
     */
    widget : function ()
    {
      return this._rootElement;
    },
    /**
     * Opens the popup. This method accepts two arguments but both are optional.
     *
     * @expose
     * @method
     * @name oj.ojPopup#open
     * @memberof! oj.ojPopup
     * @instance
     * @param {?(string|jQuery|Element)} launcher jquery object, jquery selector or dom element that
     *                                   is associated with the popup.
     * @param {?Object} position an element relative to another
     * @return {void}
     * @fires oj.ojPopup#beforeOpen
     * @fires oj.ojPopup#open
     *
     * @example <caption>Invoke the <code class="prettyprint">open</code> method:</caption>
     * var open = $( ".selector" ).ojPopup( "open" );
     */
    open : function (launcher, position)
    {

      if (this.isOpen())
      {
        this.close();

        //if beforeClose handler prevents that action, just bail out.
        if (this.isOpen())
          return;
      }

      this._setLauncher(launcher);

      var rootElement = this._rootElement;
      launcher = this._launcher;
      oj.Assert.assertPrototype(rootElement, jQuery);
      oj.Assert.assertPrototype(launcher, jQuery);

      if (oj.StringUtils.isEmptyOrUndefined(rootElement.attr("id")))
        rootElement.uniqueId();

      if (this._trigger("beforeOpen") === false)
        return;

      this._setPosition(position);


      var options = this.options;
      this._setAutoDismiss(options["autoDismiss"]);

      this._on(true, $(window), 
      {
        'resize' : this._resizeHandler,
        'scroll' : this._resizeHandler
      });
      this._on(true, rootElement, 
      {
        'keydown' : this._keydownHandler
      });
      this._on(true, launcher, 
      {
        'keydown' : this._keydownHandler
      });

      this._addDescribedBy();

      rootElement.removeAttr("aria-hidden");
      rootElement.attr("role", "tooltip");

      position = options["position"];
      rootElement.show();
      var isRtl = this._GetReadingDirection() === "rtl";
      rootElement.position(oj.PositionUtils.normalizeHorizontalAlignment(position, isRtl));

      this._trigger("open");

      this._intialFocus();

      var message = this.getTranslatedString("none" === options["initialFocus"] ?
                                             "ariaLiveRegionInitialFocusNone":
                                             "ariaLiveRegionInitialFocusFirstFocusable");
      this._announceLiveRegion(message);
    },
    /**
     * Closes the popup. This method does not accept any arguments.
     *
     * @expose
     * @method
     * @name oj.ojPopup#close
     * @memberof! oj.ojPopup
     * @instance
     * @return {void}
     * @fires oj.ojPopup#beforeClose
     * @fires oj.ojPopup#close
     *
     * @example <caption>Invoke the <code class="prettyprint">close</code> method:</caption>
     * var close = $( ".selector" ).ojPopup( "close" );
     */
    close : function ()
    {
      if (!this.isOpen())
        return;

      if (this._trigger("beforeClose") === false)
        return;

      // if the content has focus, restore the the launcher
      this._restoreFocus();

      var launcher = this._launcher;
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);
      oj.Assert.assertPrototype(launcher, jQuery);

      rootElement.hide();
      rootElement.attr("aria-hidden", "true");

      this._removeDescribedBy();
      this._setAutoDismiss();

      var jqWindow = $(window);
      this._off(jqWindow, "resize");
      this._off(jqWindow, "scroll");
      this._off(rootElement, "keydown");
      this._off(launcher, "keydown");

      delete this._launcher;

      var position = this.options["position"];

      // if the open has set the of because one was not provided by default,
      // remove the override to the launcher.
      if (position["_ofo"])
      {
        delete position["_ofo"];
        delete position["of"];
      }

      //clear live region message
      this._announceLiveRegion(null);

      this._trigger("close");
    },
    /**
     * Returns the state of whether the popup is currently open. This method does not accept any arguments.
     *
     * @expose
     * @method
     * @name oj.ojPopup#isOpen
     * @memberof! oj.ojPopup
     * @instance
     * @return {boolean} <code>true</code> if the popup is open.
     *
     * @example <caption>Invoke the <code class="prettyprint">isOpen</code> method:</caption>
     * var isOpen = $( ".selector" ).ojPopup( "isOpen" );
     */
    isOpen : function ()
    {
      return this._rootElement.is(":visible");
    },
    /**
     * Causes the popup to reevaluate its position.  Call this function after 
     * the content of the popup has dynamically changed while the popup is open.
     *
     * <p>This method does not accept any arguments.</p>
     * 
     * @expose
     * @method
     * @name oj.ojPopup#isOpen
     * @memberof! oj.ojPopup
     * @instance
     * @return {void}
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojPopup( "refresh" );
     */
    refresh : function ()
    {
      this._super();

      if (this.isOpen())
        this._resizeHandler();
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @protected
    * @param {string} key option name
    * @param {?Object} value of the target option identified by the key
    * @override
    */
    _setOption : function (key, value)
    {

      var options = this.options;
      switch (key)
      {
        case "tail":
          if (value !== options["tail"])
          {
            this._setTail(value);
          }
          break;
        case "chrome":
          if (value !== options["chrome"])
            this._setChrome(value);
          break;
        case "position":
          this._setPosition(value);
          if (this.isOpen())
            this._resizeHandler();
          // don't call super because setPosition sets the option after creating a new
          // instance.  This prevents the same position instance from getting registered
          // with multiple component instances.
          return;
        case "autoDismiss":
          if (this.isOpen() && value !== options["autoDismiss"])
            this._setAutoDismiss(value);
          break;
      }

      this._superApply(arguments);
    },
   /**
    * Returns the root selector prefix for the popup components.  In the future if the popup is subcassed,
    * this method can be made protected and override to change the root selector names for the target
    * component.
    *
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {string}
    */
    _getRootStyle : function ()
    {
      return "oj-popup";
    },
   /**
    * Handles setting up the target tail.
    *
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string} tail option value
    * @return {void}
    */
    _setTail : function (tail)
    {
      this._destroyTail();
      this._createTail(tail);
      this._resizeHandler();
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string} tail option value
    * @return {void}
    */
    _createTail : function (tail)
    {
      var tailDecoration = tail ? tail : this.options['tail'];
      if ("none" === tailDecoration)
        return;

      var rootStyle = this._getRootStyle();
      var tailMarkerStyle = [rootStyle, "tail"].join("-");
      var tailStyle = [tailMarkerStyle, tailDecoration].join("-");

      var tailDom = $("<div>").hide().addClass(tailMarkerStyle).addClass(tailStyle);

      // id over "marker style" due to nesting popups in popups
      this._tailId = "#" + tailDom.uniqueId().attr("id");
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);
      tailDom.appendTo(rootElement);

      // tail "value" style is applied to the root dom for shadow and z-index adjustments
      rootElement.addClass(tailStyle);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {jQuery}
    */
    _getTail : function ()
    {
      var tailId = this._tailId;
      if (!tailId)
        return null;

      return $(tailId);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _destroyTail : function ()
    {

      var tail = this._getTail();
      if (tail)
        tail.remove();

      delete this._tailId;

      var tailDecoration = this.options['tail'];
      var rootStyle = this._getRootStyle();
      var tailStyle = [rootStyle, "tail", tailDecoration].join("-");

      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);
      rootElement.removeClass(tailStyle);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string} chrome option value
    * @return {void}
    */
    _setChrome : function (chrome)
    {
      var chromeDecoration = (chrome ? chrome : this.options["chrome"]);
      var noChromeStyle = [this._getRootStyle(), "no-chrome"].join("-");
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);

      if ("default" === chromeDecoration && rootElement.hasClass(noChromeStyle))
        rootElement.removeClass(noChromeStyle);
      else if ("none" === chromeDecoration && !rootElement.hasClass(noChromeStyle))
        rootElement.addClass(noChromeStyle);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string|Node|jQuery|null} launcher provided when the popup is open
    * @return {void}
    */
    _setLauncher: function (launcher)
    {
      if (!launcher)
        launcher = $(document.activeElement);
      else if ($.type(launcher) === "string")//id jquery selector    
        launcher = $(launcher);
      else if (launcher.nodeType === 1)//dom element
        launcher = $(launcher);

      // if a jquery collection, select the first dom node not in the popups content
      if (launcher instanceof jQuery && launcher.length > 1)
      {
        var rootElement = this._rootElement;
        oj.Assert.assertPrototype(rootElement, jQuery);

        for (var i = 0;i < launcher.length;i++)
        {
          var target = launcher[0];
          //if (rootElement.has(target).length === 0) {
          if (!oj.DomUtils.isAncestorOrSelf(rootElement[0], target))
          {
            launcher = $(target);
            break;
          }
        }
      }
      else if (!(launcher instanceof jQuery) || //object is not a jq
               ((launcher instanceof jQuery) && launcher.length === 0))// empty jq collection
        launcher = $(document.activeElement);

      oj.Assert.assertPrototype(launcher, jQuery);
      this._launcher = launcher;
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {?Object} position object set as an option or passed as an argument to the open method.
    * @return {void}
    */
    _setPosition : function (position)
    {

      var options = this.options;

      // new postion extends the existing object
      if (position)
        options["position"] = $.extend(options[position], position);

      // grab the updated postion
      position = options["position"];

      var usingCallback = this._usingCallback;
      oj.Assert.assertFunction(usingCallback);

      // if they provided a using function that is not our callback, stash it
      // away so that we can delegate to it in our proxy.
      if ($.isFunction(position["using"]) && position["using"] !== usingCallback)
        position["origUsing"] = position["using"];

      // override with our proxy to handle positioning of the tail
      position["using"] = usingCallback;

      //override "of" alignment node to the launcher if not specified
      var launcher = this._launcher;
      oj.Assert.assertPrototype(launcher, jQuery);

      if (!position["of"])
      {
        position["of"] = launcher;
        position["_ofo"] = true;
      }
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {Object} pos "my" element associated with the postion object
    * @param {Object} props directions as to where the element should be moved
    * @return {void}
    */
    _usingHandler : function (pos, props)
    {
      var rootElement = props["element"]["element"];
      oj.Assert.assertPrototype(rootElement, jQuery);

      var tail = this._getTail();
      if (!tail)
      {
        rootElement.css(pos);
        return;
      }

      tail.hide();

      for (var i = 0;i < _TAIL_STYLES.length;i++)
      {
        tail.removeClass(_TAIL_STYLES[i]);
        rootElement.removeClass(_TAIL_STYLES[i]);
      }
      tail.removeAttr("style");

      var alignMnemonic = [props["horizontal"], props["vertical"]].join("-");
      var tailStyle = _TAIL_ALIGN_RULES[alignMnemonic];
      oj.Assert.assertString(tailStyle);
      tail.addClass(tailStyle);
      rootElement.addClass(tailStyle);
      tail.show();

      // adjust the vertical and horizontal positioning to account for the tail
      // so that the page developer doesn't have to factor that in
      if ("left" === props["horizontal"] || "right" === props["horizontal"])
      {
        var tailHOffset = (tail.outerWidth() - 1) * ("left" === props["horizontal"] ? 1 :  - 1);
        pos["left"] = pos["left"] + tailHOffset;
      }
      else if ("center" === props["horizontal"])
      {
        var tailVOffset = (tail.outerHeight() - 1) * ("top" === props["vertical"] ? 1 :  - 1);
        pos["top"] = pos["top"] + tailVOffset;
      }
      rootElement.css(pos);

      // adjustments to the vertical or horizontal centering.  The 50% alignment is from
      // the edge of the tail versus the center of the image.  The tail can't be located
      // at cetner, middle so the vertical alignment wins.
      if ("middle" === props["vertical"])
      {
        var rootHeight = rootElement.height();
        var topPercent = Math.round((((rootHeight / 2) - (tail.outerHeight() / 2)) / rootHeight) * 100);
        tail.css(
        {
          top : topPercent + '%'
        });
      }
      else if ("center" === props["horizontal"])
      {
        var rootWidth = rootElement.width();
        var leftPercent = Math.round((((rootWidth / 2) - (tail.outerWidth() / 2)) / rootWidth) * 100);
        tail.css(
        {
          left : leftPercent + '%'
        });
      }

      var options = this.options;
      var origUsing = options["position"]["origUsing"];
      if (origUsing)
        origUsing(pos, props);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {jQuery=} event jQuery event triggered from a window resize
    * @return {void}
    */
    _resizeHandler : function (event)
    {
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);

      var position = this.options["position"];
      oj.Assert.assertObject(position);

      var isRtl = this._GetReadingDirection() === "rtl";
      rootElement.position(oj.PositionUtils.normalizeHorizontalAlignment(position, isRtl));
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {?boolean} skipOptionCheck focus established via keyboard versus from open API
    * @return {void}
    */
    _intialFocus : function (skipOptionCheck)
    {
      var options = this.options;
      if (!skipOptionCheck && "none" === options["initialFocus"])
        return;

      if (skipOptionCheck || "firstFocusable" === options["initialFocus"])
      {
        var nodes = this.element.find(":focusable");
        if (nodes.length > 0)
        {
          var first = nodes[0];
          oj.Assert.assertDomElement(first);
          $(first).focus();
        }
        else
        {
          var rootElement = this._rootElement;
          oj.Assert.assertPrototype(rootElement, jQuery);
          rootElement.attr("tabindex", "-1");
          rootElement.focus();
        }

        this._trigger("focus");
      }
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {Element} activeElement from the event being handled
    * @return {boolean} <code>true</code> if the active element is within the content of the popup
    */
    _isFocusInPopup : function (activeElement)
    {
      if (!activeElement)
        activeElement = document.activeElement;
      oj.Assert.assertDomElement(activeElement);
      
      // added to avoid automation issues where an active element is not established
      if (!activeElement)
        return false;

      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);

      // return rootElement.is(activeElement) || rootElement.has(activeElement).length > 0;
      return oj.DomUtils.isAncestorOrSelf(rootElement[0], activeElement);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {Element} activeElement from the event being handled
    * @return {boolean} <code>true</code> if the active element the launcher or a decedent of the launcher
    */
    _isFocusInLauncher : function (activeElement)
    {
      if (!activeElement)
        activeElement = document.activeElement;
      oj.Assert.assertDomElement(activeElement);

      var launcher = this._launcher;
      oj.Assert.assertPrototype(launcher, jQuery);

      // return launcher.is(activeElement) || launcher.has(activeElement).length > 0;
      return oj.DomUtils.isAncestorOrSelf(launcher[0], activeElement);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _restoreFocus : function ()
    {

      if (this._isFocusInPopup())
      {
        var launcher = this._launcher;
        oj.Assert.assertPrototype(launcher, jQuery);

        launcher.focus();
      }
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {jQuery.Event|Event} event jquery event wrapper
    * @return {void}
    */
    _keydownHandler : function (event)
    {
      if (event.isDefaultPrevented())
        return;

      var target = event.target;
      oj.Assert.assertDomElement(target);
      if (event.keyCode === 27)
      {
        event.preventDefault();
        this.close();
      }
      else if (event.keyCode === 117)
      {
        //F6 - toggle focus to launcher or popup
        if (this._isFocusInPopup(target))
        {
          event.preventDefault();
          var launcher = this._launcher;
          oj.Assert.assertPrototype(launcher, jQuery);
          launcher.focus();
        }
        else if (this._isFocusInLauncher(target))
        {
          event.preventDefault();
          this._intialFocus(true);
        }
      }
      else if (event.keyCode === 9 && this._isFocusInPopup(target))
      {
        // TAB within popup
        var nodes = this.element.find(":tabbable");
        if (nodes.length > 0)
        {
          var firstNode = nodes[0];
          oj.Assert.assertDomElement(firstNode);

          var lastNode = nodes[nodes.length - 1];
          oj.Assert.assertDomElement(lastNode);

          if (firstNode === target && event.shiftKey)
          {
            //tabbing backwards, cycle focus to last node
            event.preventDefault();
            $(lastNode).focus();
          }
          else if (lastNode === target && !event.shiftKey)
          {
            //tabbing forwards, cycle to the first node
            event.preventDefault();
            $(firstNode).focus();
          }
        }
        else
        {
          // if there is nothing in the popup that is tabbable, handle as a F6
          // toggle to the launcher
          event.preventDefault();
          var launcher = this._launcher;
          oj.Assert.assertPrototype(launcher, jQuery);
          launcher.focus();
        }
      }
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string|null} autoDismiss option value
    * @return {void}
    */
    _setAutoDismiss : function (autoDismiss)
    {

      var documentElement = document.documentElement;
      // unregister any existing handlers, might need to add mouseOut in the future
      var focusLossCallback = this._focusLossCallback;
      if (focusLossCallback)
      {
        documentElement.removeEventListener("mousedown", focusLossCallback, true);
        documentElement.removeEventListener("focus", focusLossCallback, true);
        delete this._focusLossCallback;
      }

      if ("focusLoss" === autoDismiss)
      {
        focusLossCallback = this._focusLossCallback = $.proxy(this._dismissalHandler, this);
        documentElement.addEventListener("mousedown", focusLossCallback, true);
        documentElement.addEventListener("focus", focusLossCallback, true);
      }
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {Object} event native dom
    * @return {void}
    */
    _dismissalHandler : function (event)
    {
      var launcher = this._launcher;
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(launcher, jQuery);
      oj.Assert.assertPrototype(rootElement, jQuery);

      var target = event.target;
      oj.Assert.assertDomElement(target);

      // if event target is not under the laucher or popup root dom subtrees, dismiss
      if (!oj.DomUtils.isAncestorOrSelf(launcher[0], target) && !oj.DomUtils.isAncestorOrSelf(rootElement[0], target))
        this.close();
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _addDescribedBy: function () 
    {
      var launcher = this._launcher;
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(launcher, jQuery);
      oj.Assert.assertPrototype(rootElement, jQuery);

      var popupId = rootElement.attr("id");
      var describedby = launcher.attr("aria-describedby");
      var tokens = describedby ? describedby.split(/\s+/) : [];
      tokens.push(popupId);
      describedby = $.trim(tokens.join(" "));
      launcher.attr("aria-describedby", describedby);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _removeDescribedBy: function() {
      var launcher = this._launcher;
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(launcher, jQuery);
      oj.Assert.assertPrototype(rootElement, jQuery);

      var popupId = rootElement.attr("id");
      var describedby = launcher.attr("aria-describedby");
      var tokens = describedby ? describedby.split(/\s+/) : [];
      var index = $.inArray(popupId, tokens);
      if (index !== -1)
        tokens.splice(index, 1);

      describedby = $.trim(tokens.join(" "));
      if (describedby)
        launcher.attr("aria-describedby", describedby);
      else
        launcher.removeAttr("aria-describedby");
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _createLiveRegion: function()
    {
      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);

      // append the aria-live region communicating navigation keys
      var liveRegionId = this._getSubId("ariaLive");
      var liveRegion = this._liveRegion = $( "<div>" );
      liveRegion.attr({'id': liveRegionId, 'role': 'log', 'aria-live': 'polite', 'aria-relevant': 'additions'});
      liveRegion.addClass("oj-helper-hidden-accessible");
      liveRegion.appendTo(document.body);
      rootElement.data("oj-aria-controls", liveRegionId);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string} message to be announced in the live region
    * @return {void}
    */
    _announceLiveRegion: function(message)
    {
      var liveRegion = this._liveRegion;
      oj.Assert.assertPrototype(liveRegion, jQuery);
      liveRegion.children().remove();
      if (!oj.StringUtils.isEmpty(message))
        $("<div>").text(message).appendTo(liveRegion);
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @return {void}
    */
    _destroyLiveRegion: function()
    {
      var liveRegion = this._liveRegion;
      oj.Assert.assertPrototype(liveRegion, jQuery);
      liveRegion.remove();
      delete this._liveRegion;

      var rootElement = this._rootElement;
      oj.Assert.assertPrototype(rootElement, jQuery);
      rootElement.removeData("oj-aria-controls");
    },
   /**
    * @memberof! oj.ojPopup
    * @instance
    * @private 
    * @param {string} sub id that will become a composite id prefixed with the components uuid
    * @return {string}
    */
    _getSubId: function(sub)
    {
      return this["uuid"] + "_" + sub;
    }
  });

}
());
});
