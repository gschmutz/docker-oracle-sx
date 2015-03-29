"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
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
 * @name oj.ojCollapsible
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="collapsibleOverview-section">
 *   JET Collapsible Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#collapsibleOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant collapsible with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Collapsible can be created from any valid markup as long as the root element has at least two children: the first element for the header and the second element for the content.
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div id="collapsible">
 *   &lt;h3>Header 1&lt;/h3>
 *   &lt;p>Content 1&lt;/p>
 * &lt;/div>
 * </code></pre>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
 * <h5>When the focus is on the header</h5>
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
 *       <td><kbd>Space or Enter</kbd></td>
 *       <td> Toggle disclosure state.</tr>
 *   </tbody>
 *  </table>
 *
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the collapsible must be <code class="prettyprint">refresh()</code>ed.
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-collapsible</code> pseudo-selector can be used in jQuery expressions to select JET Collapsible.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-collapsible" ) // selects all JET Collapsible on the page
 * $myEventTarget.closest( ":oj-collapsible" ) // selects the closest ancestor that is a JET Collapsible
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>JET Collapsible supports expandArea option: specifies where to click to toggle disclosure. Default is "disclosureIcon", however if a collapsible is inside an Accordion, default is "header"</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "collapsible".  
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Collapsible. 
 * @example <caption>Initialize the collapsible with no options specified:</caption>
 * $( ".selector" ).ojCollapsible();
 * 
 * @example <caption>Initialize the collapsible with some options specified:</caption>
 * $( ".selector" ).ojCollapsible( { "expanded": true } );
 * 
 * @example <caption>Initialize the collapsible via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="collapsible" data-bind="ojComponent: { component: 'ojCollapsible', expanded: true}">
 *
 */
(function ()
{
  var uid = 0, 
      OPEN_ICON = "oj-collapsible-open-icon", 
      CLOSE_ICON = "oj-collapsible-close-icon";

  oj.__registerWidget("oj.ojCollapsible", $['oj']['baseComponent'], 
  {
    widgetEventPrefix : "oj",
    options : 
    {
      /** 
       * Specifies if the content is expanded.
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">true</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">expanded</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "expanded": false } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">expanded</code> option, after initialization:</caption>
       * // getter
       * var expanded = $( ".selector" ).ojCollapsible( "option", "expanded" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "expanded", true );
       */
      expanded : false, 

      /** 
       * Disables the collapsible if set to <code class="prettyprint">true</code>.
       * @name disabled
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {boolean|null}
       * @default <code class="prettyprint">false</code>
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">disabled</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "disabled": true } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
       * // getter
       * var disabled = $( ".selector" ).ojCollapsible( "option", "disabled" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "disabled", true );

      disabled: null,
       */

      /** 
       * The type of event to expand/collapse the collapsible. 
       * To expand the collapsible on hover, use "mouseover".
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"click"</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">expandOn</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "expandOn": "mouseover" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">expandOn</code> option, after initialization:</caption>
       * // getter
       * var expandOn = $( ".selector" ).ojCollapsible( "option", "expandOn" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "expandOn", "mouseover" );
       */
      expandOn : "click", 

      /** 
       * Where in the header to click to toggle disclosure. Valid values: disclosureIcon or header
       *
       * @expose 
       * @memberof! oj.ojCollapsible
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"disclosureIcon"</code>
       *
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">expandArea</code> option specified:</caption>
       * $( ".selector" ).ojCollapsible( { "expandArea": "header" } );
       * 
       * @example <caption>Get or set the <code class="prettyprint">expandArea</code> option, after initialization:</caption>
       * // getter
       * var expandArea = $( ".selector" ).ojCollapsible( "option", "expandArea" );
       * 
       * // setter
       * $( ".selector" ).ojCollapsible( "option", "expandArea", "header" );
       */
      expandArea : "disclosureIcon",

      // callbacks
      /**
       * Triggered immediately before the collapsible is expanded.
       * beforeExpand can be canceled to prevent the content from expanding by returning a false in the event listener.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The header that is about to be expanded.
       * @property {jQuery} ui.content The content that is about to be expanded.
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "beforeExpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null,

      /**
       * Triggered after the collapsible has been expanded (after animation completes).
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The header that was just expanded.
       * @property {jQuery} ui.content The content that was just expanded.
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">expand</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "expand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
       * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
       */
      expand : null, 

      /**
       * Triggered immediately before the collapsible is collapsed.
       * beforeCollapse can be canceled to prevent the content from collapsing by returning a false in the event listener.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The header that is about to be collapsed.
       * @property {jQuery} ui.content The content that is about to be collapsed.
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">beforeCollapse</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "beforeCollapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforecollapse</code> event:</caption>
       * $( ".selector" ).on( "ojbeforecollapse", function( event, ui ) {} );
       */
      beforeCollapse : null,

      /**
       * Triggered after the collapsible has been collapsed.
       *
       * @expose 
       * @event 
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {jQuery} ui.header The header that was just collapsed.
       * @property {jQuery} ui.content The content that was just collapsed.
       * 
       * @example <caption>Initialize the collapsible with the <code class="prettyprint">collapse</code> callback specified:</caption>
       * $( ".selector" ).ojCollapsible({
       *     "collapse": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
       * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
       */
      collapse : null, 

      /**
       * Fired whenever a supported component option changes, whether due to user interaction or programmatic
       * intervention.  If the new value is the same as the previous value, no event will be fired.
       *
       * Currently there is one supported option, <code class="prettyprint">"expanded"</code>.  Additional
       * options may be supported in the future, so listeners should verify which option is changing
       * before taking any action.
       *
       * @expose
       * @event
       * @memberof! oj.ojCollapsible
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       * @property {string} ui.option the name of the option that is changing
       * @property {boolean} ui.previousValue the previous value of the option
       * @property {boolean} ui.value the current value of the option
       * @property {Object} ui.optionMetadata information about the option that is changing
       * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
       *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
       *
       */
      optionChange: null

    },

    _ComponentCreate : function ()
    {
      this._super();

      //Bug 18633679 - Stop using ui-helper-reset in the layout widgets.
      this.element.addClass("oj-collapsible oj-component")

      this._processPanels();
      this._refresh();
    },

    //fire initial expand event
    _init : function ()
    {
      this._initialRender = true;
      this._setExpanded(this.options.expanded);
      this._initialRender = undefined;
    },

    // Override to set custom launcher
    _OpenContextMenu: function(menu, event)
    {
      // Setting the launcher to the "twisty" icon, since that seems to be the only tabbable thing in the collapsible, 
      // and it seems to remain tabbable even if the collapsible is disabled.  See the superclass JSDoc for _OpenContextMenu 
      // for tips on choosing a launcher.
      menu.open(event, {"launcher": this.element.find(".oj-collapsible-header-icon").first(), "initialFocus": "menu"});
    },

    _createIcons : function ()
    {
      var options = this.options;
      var icon = (options.expanded ? OPEN_ICON : CLOSE_ICON);
      var iconTag = this._isDisabled() ? $("<span>") : $("<a href='#'>");

      iconTag.addClass("oj-component-icon oj-clickable-icon oj-collapsible-header-icon " + icon)
        .attr("aria-labelledby", this.header.attr( "id" ))
        .prependTo(this.header);

    },

    _destroyIcons : function ()
    {
      this.header
        .children(".oj-collapsible-header-icon")
        .remove();
    },

    _destroy : function ()
    {
      this._cleanup();

      // clean up main element
      this.element
        .removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");

      // clean up headers
      if (this._isDisabled())
        this._findFocusables(this.header).removeAttr("tabIndex");

      this.header
        .removeClass("oj-collapsible-header")
        .each(function ()
        {
          if (/^oj-collapsible/.test(this.id))
          {
            this.removeAttribute("id");
          }
        });

      //aria
      var focusable = this._findFirstFocusableInHeader();
      focusable.removeAttr("role")
        .removeAttr("aria-controls")
        .removeAttr("aria-expanded")
        .removeAttr("aria-disabled");

      this._destroyIcons();

      this._findFocusables(this.content).removeAttr("tabIndex");

      // clean up content panels
      this.content
        .css("display", "")
        .removeAttr("aria-hidden")
        .removeAttr("tabIndex")
        .removeClass("oj-component-content oj-collapsible-content")
        .each(function ()
        {
          if (/^oj-collapsible/.test(this.id))
          {
            this.removeAttribute("id");
          }
        });
    },

    _cleanup : function ()
    {
      //remove listeners
      this._tearDownEvents();

      //remove wrapper
      if (this.content)
      {
        this.content.unwrap();
        this.wrapper = null;
      }
      //TODO: remove oj-disabled

    },

    _isDisabled : function ()
    {
//TODO: ignore disabled until disabled propagation is supported
//      return this.element.hasClass("oj-disabled");
      return false;
    },

    _getExpandAreaSelector : function ()
    {
      if (this.options.expandArea == "header")
        return "> .oj-collapsible-header";
      else //disclosureIcon
        return "> .oj-collapsible-header > .oj-collapsible-header-icon";
    },

    _setOption : function (key, value, flags)
    {
      if (key === "expanded")
      {
        if (value === this.options.expanded)
          return;
        this._setExpanded(value);
        return;
      }

      if (key === "expandOn" || key === "expandArea")
      {
        this._tearDownEvents();
        this._super(key, value, flags);
        this._setupEvents();
      }
      else 
      {
        this._super(key, value, flags);
      }

      // #5332 - opacity doesn't cascade to positioned elements in IE
      // so we need to add the disabled class to the headers and panels
//TODO: ignore disabled until disabled propagation is supported
/*
      if (key === "disabled")
      {
        this.header
          .add(this.header.next());
        this.element.toggleClass("oj-disabled", !!value);
      }
*/
    },

    _keydown : function (event)
    {
      if (event.altKey || event.ctrlKey)
      {
        return;
      }
      var keyCode = $.ui.keyCode;

      switch (event.keyCode)
      {
        case keyCode.SPACE:
        case keyCode.ENTER:
          this._toggleHandler(event);
          break;
      }
    },

    /**
     * Refreshes the visual state of the collapsible. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is 
     * programmatically changed underneath the component.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojCollapsible( "refresh" );
     */
    refresh : function ()
    {
      this._super();
      this._cleanup();
      this._processPanels();
      this._destroyIcons();
      this._refresh();
    },

    _processPanels : function ()
    {
      //Bug 18633679 - Stop using ui-helper-reset in the layout widgets.
      this.header = this.element.children(":first-child")
                      .addClass("oj-collapsible-header");

      this.content = this.header.next()
        .addClass("oj-collapsible-content oj-component-content");

      this.content.wrap("<div></div>");
      this.wrapper = this.content.parent()
        .addClass("oj-collapsible-wrapper");

      //Note: must set tabIndex=-1 to focusable elements
      //to avoid tabbing in a disabled header

//TODO: ignore disabled until disabled propagation is supported
/*
      if (this.options.disabled)
        this.element.addClass("oj-disabled");
*/
      if (this._isDisabled())
      {
        this._findFocusables(this.header)
          .attr("tabIndex",  -1);
      }
    },

    /**
     * Used for explicit cases where the component needs to be refreshed 
     * (e.g., when the value option changes or other UI gestures).
     * @private
     */
    _refresh : function ()
    {
      var header = this.header, 
          content = this.content, 
          options = this.options;

      var collapsibleId = this.collapsibleId = 
        "oj-collapsible-" + (this.element.attr("id") || ++uid);

      var headerId = header.attr("id"), 
          contentId = content.attr("id");

      if (!headerId)
      {
        headerId = collapsibleId + "-header";
        header.attr("id", headerId);
      }
      if (!contentId)
      {
        contentId = collapsibleId + "-content";
        content.attr("id", contentId);
      }

      //aria
      this._createIcons();
      var focusable = this._findFirstFocusableInHeader();
      focusable.attr("role", "button")
        .attr("aria-controls", contentId)
        .attr("aria-expanded", options.expanded);

      if (this._isDisabled())
      {
        focusable.attr("aria-disabled", "true");
      }

      if (!this._isDisabled())
      {
        this._setContentTabIndex(options.expanded ? "0" : "-1");
      }

      //Bug 19277743 - when collapsible is refreshed, it's content displays & disclosure icon collapsed
      if (options.expanded)
      {
        content.attr("aria-hidden", "false");
      }
      else 
      {
        this.wrapper.css({
          'max-height': 0,
          'overflow-y': 'hidden',
          'display': 'none'
        });
        this.wrapper.css('max-height', 0);
        content.attr("aria-hidden", "true");
      }

      this._setupEvents();
    },

    _setExpanded : function (expanded)
    {
      if (expanded)
        this.expand(true);
      else 
        this.collapse(true);
    },

    _setupEvents : function ()
    {
      var events = 
      {
        "keydown" : this._keydown
      };

      var event = this.options.expandOn;
      if (event)
      {
        var self = this ;
        $.each(event.split(" "), function (index, eventName)
        {
          //security test
          if (/^[a-zA-Z]+$/.test(eventName)) {
            events[eventName] = self._toggleHandler;
          }
        });
      }

      var expandArea = this.element.find(this._getExpandAreaSelector());

      //add listeners on expandArea (event expandArea)
      this._on(expandArea, events);

      this._on(this.wrapper, 
      {
        "transitionend" : this._transitionEndHandler, 
        "webkitTransitionEnd" : this._transitionEndHandler, 
        "otransitionend" : this._transitionEndHandler, 
        "oTransitionEnd" : this._transitionEndHandler
      });

      if (!this._isDisabled())
      {
        this._on(this.element, 
        {
          "ojexpand" : this._expandCollapseHandler, 
          "ojcollapse" : this._expandCollapseHandler, 
          "ojfocus" : this._focusHandler,
          "ojfocusout" : this._focusHandler
        });

        this._hoverable(expandArea);
        this._focusable(expandArea);
        this._activeable(expandArea);

      }
    },

    _tearDownEvents : function ()
    {
      this._off(this.element.find(this._getExpandAreaSelector()));

      //remove wrapper listeners
      if (this.wrapper)
        this._off(this.wrapper);
      this._off(this.element.add(this.content));
    },

    _toggleHandler : function (event)
    {
      if (this._isDisabled())
        return;

      if (this.options.expanded)
        this.collapse(true, event);
      else 
        this.expand(true, event);

      event.preventDefault();
      event.stopPropagation();

      //set focus on the disclosure icon
      this.header.find(".oj-collapsible-header-icon").focus();

    },

    _expandCollapseHandler : function (event)
    {
      if (this._isDisabled())
        return;

      if (event.target !== this.element[0])
        return;

      if (this._initialRender || !event.isDefaultPrevented())
      {
        var element = this.element, 
            options = this.options, 
            content = this.content,
            wrapper = this.wrapper,
            isCollapse = (event.type === "ojcollapse");

        event.preventDefault();

        options.expanded = ! isCollapse;

        //Bug 19004479 - expansion animation on initial render.
        //skip animation
        if (this._initialRender) {

          if (isCollapse)
          {
            element.removeClass("oj-expanded");
            element.addClass("oj-collapsed");
            wrapper.css('max-height', 0);
            wrapper.hide();
          }
          else
          {
            element.removeClass("oj-collapsed");
            element.addClass("oj-expanded");
          }
        }
        // do animation
        else 
        {
          wrapper.contentHeight = wrapper.outerHeight();

          //collapsing
          if (isCollapse)
          {
            // disable transitions & set max-height to content height
            wrapper.removeClass("oj-collapsible-transition");
            wrapper.css({
              'max-height': wrapper.contentHeight,
              'overflow-y': 'hidden'
            });

            setTimeout(function()
            {
              // enable & start transition
              wrapper.addClass('oj-collapsible-transition')
                .css({
                  'max-height': 0   //!important
                });

              element.removeClass("oj-expanded");
              element.addClass("oj-collapsed");

            }, 10); // 10ms timeout is the secret ingredient for disabling/enabling transitions
            // chrome only needs 1ms but FF needs ~10ms or it chokes on the first animation for some reason
          }

          //expanding
          else
          {
            //James: set display:none on the wrapper when it is hidden and then remove display:none when its is shown. 
            //This should trigger JAWS into refreshing the buffer.
            wrapper.show();

            setTimeout(function()
            {
              wrapper.contentHeight += content.outerHeight(); // if closed, add inner height to content height
              wrapper.addClass('oj-collapsible-transition').css(
              {
                'max-height': wrapper.contentHeight
              });
              element.removeClass("oj-collapsed");
              element.addClass("oj-expanded");

            }, 1);
          }
        }

        this.header
          .find(".oj-collapsible-header-icon").toggleClass(OPEN_ICON, !isCollapse)
            // logic or cause same icon for expanded/collapsed state would remove the oj-icon-class
            .toggleClass(CLOSE_ICON, (isCollapse || OPEN_ICON === CLOSE_ICON))
          .end();

        //aria
        this.content.attr("aria-hidden", isCollapse);

        this._findFirstFocusableInHeader().attr("aria-expanded", !isCollapse);

        this._setContentTabIndex(isCollapse ? "-1" : "0");

      }
    },

    _focusHandler : function (event)
    {
      if (this._isDisabled())
        return null;

      if (event.type == "ojfocusout")
      {
        this._findFirstFocusableInHeader()
          .attr("tabIndex", -1);

        event.preventDefault();
        event.stopPropagation();
      }
      else if (event.type == "ojfocus")
      {
        this._findFirstFocusableInHeader()
          .attr("tabIndex", 0)
          .focus();
        event.preventDefault();
        event.stopPropagation();
      }
    },

    _findFirstFocusableInHeader : function ()
    {
      return this._findFocusables(this.header).first();
    },

    _setContentTabIndex : function (value)
    {
      return this._findFocusables(this.content).attr("tabIndex", value);
    },

    _findFocusables : function (start)
    {
      //create <span> or <a> depending on if this.isDisabled
      if (this._isDisabled()) {
        return start.find("span");
      }
      return start.find("a,:input");
    },

    /**
     * Expand a collapsible.<p>
     * Note the beforeExpand event will only be fired when vetoable is true.<p>
     * Please use the <code class="prettyprint">expanded</code> option 
     * for expanding a collapsible so that it triggers the beforeExpand event:
     * $( ".selector" ).ojCollapsible( "option", "expanded", true );
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * @param {boolean} vetoable if event is vetoable
     */
    expand : function (vetoable, event)
    {
      if (this._isDisabled())
        return;

      var eventData = 
      {
        /** @expose */
        header : this.header, 
        /** @expose */
        content : this.content
      };

      if (!vetoable || this._trigger("beforeExpand", event, eventData) !== false)
      {
        this._trigger("expand", event, eventData);
        this._fireOptionChange("expanded", false, true, event ? true : false);
      }
    },

    /**
     * Collapse a collapsible.<p>
     * Note the beforeCollapse event will only be fired when vetoable is true.<p>
     * Please use the <code class="prettyprint">expanded</code> option 
     * for collapsing a collapsible so that it triggers the beforeCollapse event:
     * $( ".selector" ).ojCollapsible( "option", "expanded", false );
     * 
     * @expose 
     * @memberof! oj.ojCollapsible
     * @instance
     * @param {boolean} vetoable if event is vetoable
     */
    collapse : function (vetoable, event)
    {
      if (this._isDisabled())
        return;

      //don't fire collapse event on initial render
      if (this._initialRender)
      {
        //call expandCollapseHandler
        var elem = this.element[0];
        this._expandCollapseHandler(
      {
        type : "ojcollapse",
        target : elem,
        currentTarget : elem,
        preventDefault : $.noop
      });

        return;
      }


      var eventData = 
      {
        /** @expose */
        header : this.header, 
        /** @expose */
        content : this.content
      };

      if (!vetoable || this._trigger("beforeCollapse", event, eventData) !== false)
      {
        this._trigger("collapse", event, eventData);
        this._fireOptionChange("expanded", true, false, event ? true : false);
      }
    },

    _transitionEndHandler : function (event)
    {
      if (this._isDisabled())
        return;

      var propName = event.originalEvent? event.originalEvent.propertyName : null;

      //TODO: fire expand and collapse here
      if (propName == "max-height")
      {
        event.preventDefault();
        event.stopPropagation();
      }

      //just completed a collapse transition
      if (this.options.expanded)
      {
        this.wrapper.css({
          'max-height': 9999,
          'overflow-y': ''
        });
      }
      else 
      {
        //James: set display:none on the wrapper when it is hidden and then remove display:none when its is shown. 
        //This should trigger JAWS into refreshing the buffer.
        this.wrapper.hide();
      }

      this.wrapper.removeClass("oj-collapsible-transition");
    },

    /**
     * Fire optionChange event 
     * @param {String} key - 'expanded'
     * @param {boolean} previousValue 
     * @param {boolean} value
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
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     *
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-collapsible-header</b>: collapsible header </li>
     * <li><b>oj-collapsible-content</b>: collapsible content </li>
     * <li><b>oj-collapsible-header-icon</b>: collapsible disclosure icon </li>
     * </ul>
     *
     * @expose
     * @memberof! oj.ojCollapsible
     * @instance
     * @override
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
    getNodeBySubId: function(locator)
    {
      if (locator == null)
      {
        return this.element ? this.element[0] : null;
      }

      var subId = locator['subId'];

      switch (subId)
      {
      case 'oj-collapsible-content':
        return this.content;

      case 'oj-collapsible-header':
        return this.header;

      case 'oj-collapsible-header-icon':
        return this.header.find("." + subId)[0];
      }

      // Non-null locators have to be handled by the component subclasses
      return null;
    }

  });

}
());
});
