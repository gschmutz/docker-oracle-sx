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

(function() {

/**
 * @class 
 * @name oj.ojMenu
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="menuOverview-section">
 *   JET Menu Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#menuOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant menu with mouse and keyboard interactions for navigation.
 * 
 * <p>A JET Menu can be created from any valid markup as long as the elements have a strict parent/child relationship 
 * and each menu item has an anchor. The most commonly used element is the unordered list ( <code class="prettyprint">&lt;ul></code> ):
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 3&lt;/a>
 *     &lt;ul>
 *       &lt;li>&lt;a href="#">Item 3-1&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-2&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-3&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-4&lt;/a>&lt;/li>
 *       &lt;li>&lt;a href="#">Item 3-5&lt;/a>&lt;/li>
 *     &lt;/ul>
 *   &lt;/li>
 *   &lt;li>&lt;a href="#">Item 4&lt;/a>&lt;/li>
 *   &lt;li>&lt;a href="#">Item 5&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * <p>If you use a structure other than <code class="prettyprint">&lt;ul></code>/<code class="prettyprint">&lt;li></code>, including using the same element for the menu and the menu items, use the 
 * <code class="prettyprint">menuSelector</code> option to specify a way to differentiate the two elements, e.g., <code class="prettyprint">menuSelector: "div.menuElement"</code>.
 * 
 * <p>Any menu item can be disabled by adding the <code class="prettyprint">oj-disabled</code> class to that element.  As with any DOM change, doing so post-init 
 * requires a <code class="prettyprint">refresh()</code> of the component.  
 * 
 * 
 * <h3 id="icons-section">
 *   Icons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#icons-section"></a>
 * </h3>
 * 
 * <p>The submenu icon can be customized via theming.  See the "Theming" chapter of the Oracle JET Developer Guide for details.
 * 
 * <p>To add other icons to menu items, include them in the markup:  
 * <!-- TODO: if they're required to include oj-menu-item-icon, should probably call that out.  Is that our rqmt?  Likewise, should we mention the class name they use to set the submenu icon? -->
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li id="foo">&lt;a href="#">&lt;span class="oj-menu-item-icon demo-icon-font demo-palette-icon-24">&lt;/span>Foo&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * 
 * <h3 id="dividers-section">
 *   Dividers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dividers-section"></a>
 * </h3>
 * 
 * <p>Divider elements can be created by including unlinked menu items that contain only spaces and/or dashes, or nothing at all:  
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu">
 *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
 *   &lt;li>---&lt;/li>
 *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
 * &lt;/ul>
 * </code></pre>
 * 
 * <p>For WAI-ARIA compliance, JET automatically adds <code class="prettyprint">role="separator"</code> to the divider element.
 * 
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
 *       <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
 *       <td>Invokes the focused menu item's action, which may be opening a submenu.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Moves focus to the previous menu item, wrapping around at the top.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Moves focus to the next menu item, wrapping around at the bottom.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
 *       <td>Opens the submenu, if any.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
 *       <td>If focus is in a submenu, closes the submenu and moves focus to the parent menu item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td>If focus is in a submenu, closes the submenu and moves focus to the parent menu item.<br>
 *           If focus is on a top-level menu item of a popup menu, closes the popup menu and moves focus to the launcher.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Moves focus to the first menu item.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Moves focus to the last menu item.</td>
 *     </tr>
 *   </tbody>
 * </table>
 * 
 * <p>Typing a letter moves focus to the first item whose title starts with that character. Repeating the same character cycles through matching items. 
 * Typing more characters within the one second timer matches those characters.  
 * 
 * <p>Note that the "Search for text when I start typing" feature in Firefox can interfere with web content that accepts keystrokes, such as this "type a letter" feature of JET Menu.  
 * 
 * <p>Disabled items can receive keyboard focus, but do not allow any other interaction.
 * 
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>The only supported way to set the reading direction (LTR or RTL) is to set the <code class="prettyprint">"dir"</code> attribute on the 
 * <code class="prettyprint">&lt;html></code> element of the page.  As with any JET component, in the unusual case that the reading direction
 * is changed post-init, the menu must be <code class="prettyprint">refresh()</code>ed, or the page must be reloaded. 
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-menu</code> pseudo-selector can be used in jQuery expressions to select JET Menus.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-menu" ) // selects all JET Menus on the page
 * $myEventTarget.closest( ":oj-menu" ) // selects the closest ancestor that is a JET Menu
 * </code></pre>
 * 
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <p>For components like Menu and Buttonset that contain a number of like items, applications may wish to use a <code class="prettyprint">foreach</code> Knockout binding
 * to stamp out the contents.  This binding cannot live on the same node as the JET <code class="prettyprint">ojComponent</code> binding, and must instead live on a nested 
 * virtual element as follows:
 * 
 * <pre class="prettyprint">
 * <code>&lt;ul id="menu" data-bind="ojComponent: {component: 'ojMenu'}">
 *     &lt;!-- ko foreach: menuItems -->
 *         &lt;li data-bind="attr: {id: id}, css: {'oj-disabled': disabled}">
 *             &lt;a href="#" data-bind="text: label">&lt;/a>
 *         &lt;/li>
 *     &lt;!-- /ko -->
 * &lt;/ul>
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>For clarity, JQUI Menu's <code class="prettyprint">menus</code> option has been renamed to <code class="prettyprint">menuSelector</code> in JET Menu.</li>
 *   <li>JQUI Menu's <code class="prettyprint">position</code> option is now a field of the <code class="prettyprint">submenuOpenOptions</code> option in JET Menu.</li>
 *   <li>JQUI Menu has a <code class="prettyprint">role</code> option, which defaults to <code class="prettyprint">"menu"</code>.  This option was removed in JET Menu.  Reason: 
 *       JET Menu is a menu component; thus we feel that the only appropriate WAI-ARIA role for our component is <code class="prettyprint">"menu"</code>.</li>
 *   <li>JQUI Menu has <code class="prettyprint">isFirstItem()</code> and <code class="prettyprint">isLastItem()</code> methods, which were removed in JET Menu.  Reason:  To 
 *       keep the API lean, we prefer to avoid methods with such specific functionality.</li>
 *   <li>JQUI Menu has a number of "programmatic navigation" methods, and <code class="prettyprint">focus</code> / <code class="prettyprint">blur</code> events, that were 
 *       removed in JET Menu due to lack of a use case.</li>
 *   <li>JET Menu swaps the functionality of the left and right arrow keys in RTL.</li>
 *   <li>JET Menu creates WAI-ARIA compliant separator elements, by applying <code class="prettyprint">role="separator"</code> to them.</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "menu" or "button".  
 * E.g. the JQUI <code class="prettyprint">menucreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Menus (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-menu", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Menu.  If called after the menu is already created, it is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the menu with no options specified:</caption>
 * $( ".selector" ).ojMenu();
 * 
 * @example <caption>Initialize the menu with some options and callbacks specified:</caption>
 * $( ".selector" ).ojMenu( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the menu via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;ul id="menu" data-bind="ojComponent: { component: 'ojMenu', 
 *                                         disabled: true, 
 *                                         select: menuItemSelect }">
 */
oj.__registerWidget("oj.ojMenu", $['oj']['baseComponent'], {
    defaultElement: "<ul>", // added to externs.js, since this is an override of a superclass member.  (That's the rule for public methods, what about protected fields?)  TODO: Would @override do the job and be better than externing?
    delay: 300, // Doesn't get renamed even when unquoted and not in (our) externs.js file, so I'm leaving it unquoted for now.  TBD: This is private, but do NOT rename to _delay since there's an inherited instance method by that name, so rename so something else prefixed with _.
    role: "menu", // private.  I moved from options to here since no longer public option.  Leave unquoted so gets renamed by GCC as desired.
    widgetEventPrefix : "oj",
    _MENU_CLICK_AWAY_HANDLER_KEY:"ojMenuClickAwayHandler", 
    options: { // options is in externs.js, so no need for quotes
        /**
         * Disables the menu if set to <code class="prettyprint">true</code>.
         * 
         * @member
         * @name disabled
         * @memberof oj.ojMenu
         * @instance
         * @type {boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojMenu( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter
         * var disabled = $( ".selector" ).ojMenu( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojMenu( "option", "disabled", true );
         */
        // disabled option declared in superclass, but we still want the above API doc
        
        /**
         * Selector for the elements that serve as the menu container, including submenus.
         * 
         * <p>Note: The <code class="prettyprint">menuSelector</code> option should not be changed after initialization. Existing submenus will not be updated.
         * 
         * @expose 
         * @memberof oj.ojMenu
         * @instance
         * @type {string}
         * @default <code class="prettyprint">"ul"</code>
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">menuSelector</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ menuSelector: "div" });
         * 
         * @example <caption>Get the <code class="prettyprint">menuSelector</code> option, after initialization:</caption>
         * // getter
         * var menuSelector = $( ".selector" ).ojMenu( "option", "menuSelector" );
         */
        menuSelector: "ul",
        
        /**
         * <p>A collection of settings impacting the launch of a popup menu.  These <code class="prettyprint">openOptions</code> 
         * may be accessed and overridden individually or collectively, as seen in the examples.
         * 
         * <p>This option affects the top-level menu, while <code class="prettyprint">submenuOpenOptions</code> affects submenus.
         * 
         * <p>The values set here can be overridden on a per-launch basis by passing the corresponding params into the 
         * <code class="prettyprint">open()</code> method.
         * 
         * @expose 
         * @memberof oj.ojMenu
         * @instance
         * @type {Object}
         * 
         * @example <caption>Initialize the menu, setting some <code class="prettyprint">openOptions</code>.  This syntax leaves the 
         * other <code class="prettyprint">openOptions</code> intact at create time, but not if called after create time:</caption>
         * $( ".selector" ).ojMenu({ openOptions: { "initialFocus": "none", "launcher": "#myLauncher" } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">openOptions</code> option, after initialization:</caption>
         * // Get one
         * var value = $( ".selector" ).ojMenu( "option", "openOptions.launcher" );
         * 
         * // Get all
         * var values = $( ".selector" ).ojMenu( "option", "openOptions" );
         * 
         * // Set one, leaving the others intact
         * $( ".selector" ).ojMenu( "option", "openOptions.initialFocus", "none" );
         * 
         * // Set many.  Any existing openOptions not listed are lost
         * $( ".selector" ).ojMenu( "option", "openOptions", { launcher: "#myLauncher",
         *                                                     initialFocus: "firstItem",
         *                                                     position: myPositionObj } );
         */
        openOptions: {
            /**
             * Determines focus behavior when the popup menu is initially opened.
             * 
             * @expose
             * @alias openOptions.initialFocus
             * @memberof! oj.ojMenu
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"menu"</code>
             * @ojvalue {string} "none" Leaves focus where it is, e.g. on the launching component.
             * @ojvalue {string} "menu" Focuses the menu itself, with no menu item focused (e.g. typical Context Menu behavior).
             * @ojvalue {string} "firstItem": Focuses the first menu item (e.g. MenuButton <kbd>DownArrow</kbd> behavior).
             *
             * @example <caption>Initialize the menu with the <code class="prettyprint">openOptions.initialFocus</code> sub-option specified:</caption>
             * $( ".selector" ).ojMenu({ openOptions: { initialFocus: "firstItem" } });
             * 
             * @example <caption>Get or set the <code class="prettyprint">openOptions.initialFocus</code> sub-option, after initialization:</caption>
             * // getter
             * var initialFocus = $( ".selector" ).ojMenu( "option", "openOptions.initialFocus" );
             * 
             * // setter:
             * $( ".selector" ).ojMenu( "option", "openOptions.initialFocus", "none" );
             */
            initialFocus : "menu",
            
            /**
             * <p>The DOM node (which may or may not be a JET component) that launches this popup menu.  
             * This node must be focusable, as focus is returned to it upon menu dismissal.  
             * 
             * <p>Can be a <code class="prettyprint">string</code> JQ selector indicating the DOM node, or a <code class="prettyprint">jQuery</code> 
             * object containing the node.
             * 
             * <p>The launcher must either be specified in this component option, or on each menu launch -- see <code class="prettyprint">open()</code> 
             * and <code class="prettyprint">beforeOpen</code>.
             * 
             * @expose
             * @alias openOptions.launcher
             * @memberof! oj.ojMenu
             * @instance
             * @type {string|jQuery}
             * @default <code class="prettyprint">null</code>
             * 
             * @example <caption>Initialize the menu with the <code class="prettyprint">openOptions.launcher</code> sub-option specified:</caption>
             * $( ".selector" ).ojMenu({ openOptions: { launcher: "#myLauncher" } });
             * 
             * @example <caption>Get or set the <code class="prettyprint">openOptions.launcher</code> sub-option, after initialization:</caption>
             * // getter
             * var launcher = $( ".selector" ).ojMenu( "option", "openOptions.launcher" );
             * 
             * // setter:
             * $( ".selector" ).ojMenu( "option", "openOptions.launcher", "#myLauncher" );
             */
            launcher: null, 
            
            /**
             * <p>Determines the position of this menu when launched via the <code class="prettyprint">open()</code> method or via menu button or 
             * context menu functionality.
             * 
             * <p>By default, the menu is positioned relative to the launching event if that event is a right-click mouse event, and the launcher 
             * element otherwise.  This behavior is appropriate for context menus and menu buttons.  If a value is set on the 
             * <code class="prettyprint">of</code> field, then the menu is positioned relative to that element or position instead.  
             * 
             * <p>Please refer to the jQuery UI [Position]{@link http://api.jqueryui.com/position/} utility for more details about the various choices.
             *
             * <p>In addition to the JQUI syntax given there, note that JET supports <code class="prettyprint">start</code> and <code class="prettyprint">end</code> 
             * values in the <code class="prettyprint">my</code> and <code class="prettyprint">at</code> fields wherever <code class="prettyprint">left</code> 
             * and <code class="prettyprint">right</code> are supported.  The <code class="prettyprint">start</code> value means "left in LTR; right in RTL", 
             * while the <code class="prettyprint">end</code> value means "right in LTR; left in RTL."
             *              * 
             * @expose
             * @alias openOptions.position
             * @memberof! oj.ojMenu
             * @instance
             * @type {Object}
             * @default <code class="prettyprint">{ "my": "start top", "at": "start bottom" }</code>
             * 
             * @example <caption>Initialize the menu with the <code class="prettyprint">openOptions.position</code> option specified:</caption>
             * $( ".selector" ).ojMenu({ openOptions: { position: { "my": "start top", "at": "end-5 top+5" } } });
             * 
             * @example <caption>Get or set the <code class="prettyprint">openOptions.position</code> sub-option, after initialization:</caption>
             * // getter
             * var position = $( ".selector" ).ojMenu( "option", "openOptions.position" );
             * 
             * // setter:
             * $( ".selector" ).ojMenu( "option", "openOptions.position", { "my": "start top", "at": "end-5 top+5" } );
             */
            position: {
                /** @expose */
                my: "start top",
                /** @expose */
                at: "start bottom"
            }
        },
        
        // Omitting the usual verbiage about whether the "other" sub-options are clobbered by a given setter syntax, 
        // since only one sub-option currently.
        // TBD: restore that verbiage (copy from openOptions) if gain 2nd sub-option.  
        /**
         * <p>A collection of settings impacting the launch of submenus.  
         * 
         * <p>This option affects submenus, while the similar <code class="prettyprint">openOptions</code> affects the top-level menu.
         * 
         * @expose 
         * @memberof oj.ojMenu
         * @instance
         * @type {Object}
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">submenuOpenOptions</code> option specified:</caption>
         * $( ".selector" ).ojMenu({ submenuOpenOptions: { "position": { "my": "start top", "at": "end-5 top+5" } } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">submenuOpenOptions</code> option, after initialization:</caption>
         * // Get one
         * var value = $( ".selector" ).ojMenu( "option", "submenuOpenOptions.position" );
         * 
         * // Get all (currently only one)
         * var values = $( ".selector" ).ojMenu( "option", "submenuOpenOptions" );
         * 
         * // Set one
         * $( ".selector" ).ojMenu( "option", "submenuOpenOptions.position", { "my": "start top", "at": "start bottom" } );
         * 
         * // Set many (currently only one)
         * $( ".selector" ).ojMenu( "option", "submenuOpenOptions", { position: { "my": "start top", "at": "start bottom" } } );
         */
        submenuOpenOptions: {
            /**
             * Determines the position of submenus.  By default, the submenu is positioned relative to the parent menu item, but if a value is set on 
             * the <code class="prettyprint">of</code> field, then the submenu is positioned relative to that element or position instead.  
             * 
             * <p>Please refer to the jQuery UI [Position]{@link http://api.jqueryui.com/position/} utility for more details about the various choices.
             * 
             * In addition to the JQUI syntax given there, note that JET supports <code class="prettyprint">start</code> and <code class="prettyprint">end</code> 
             * values in the <code class="prettyprint">my</code> and <code class="prettyprint">at</code> fields wherever <code class="prettyprint">left</code> 
             * and <code class="prettyprint">right</code> are supported.  The <code class="prettyprint">start</code> value means "left in LTR; right in RTL", 
             * while the <code class="prettyprint">end</code> value means "right in LTR; left in RTL."
             * 
             * @expose
             * @alias submenuOpenOptions.position
             * @memberof! oj.ojMenu
             * @instance
             * @type {Object}
             * @default <code class="prettyprint">{ "my": "start top", "at": "end top" }</code>
             * 
             * @example <caption>Initialize the menu with the <code class="prettyprint">submenuOpenOptions.position</code> option specified:</caption>
             * $( ".selector" ).ojMenu({ openOptions: { position: { "my": "start top", "at": "end-5 top+5" } } });
             * 
             * @example <caption>Get or set the <code class="prettyprint">submenuOpenOptions.position</code> sub-option, after initialization:</caption>
             * // getter
             * var position = $( ".selector" ).ojMenu( "option", "submenuOpenOptions.position" );
             * 
             * // setter:
             * $( ".selector" ).ojMenu( "option", "submenuOpenOptions.position", { "my": "start top", "at": "end-5 top+5" } );
             */
            position: {
                /** @expose */
                my: "start top",
                /** @expose */
                at: "end top"
            }
        },

        // Events
        
        // Benefit of making openOptions live is this: 
        //
        // - For MenuButton and ContextMenu, the app doesn't control the call to Menu.open().
        // - Our internal call to this method may pass in overrides to things like "initialFocus", in cases where the Right Thing for (say) MenuButtons differs 
        //   from Menu's default option value (which may be tailored to, say, contextMenus). 
        //     - This way, we don't have to rely on the app to set these things correctly, and we don't have to permanently set the Menu's options, which may be 
        //       shared between (say) a MenuButton, a ContextMenu, and some custom app usage of the menu. 
        // - The remaining piece of the puzzle is to give the app a way to override the values set in our internal call to open().  A live payload field handles this.
        // - It's also useful for components like Table, Tree, DataGrid, and Tabs, that want to set the position to be the current cell / node / tab / etc.  (Another 
        //   way to do it would be to override _OpenContextMenu() and modify its call to open().)
        //
        // If ever needed, we can add a "submenuOpenOptions" payload field alongside the "openOptions" field.
        /**
         * <p>Triggered before this menu is launched via the <code class="prettyprint">open()</code> method or via menu button or context menu functionality.
         * The launch can be cancelled by calling <code class="prettyprint">event.preventDefault()</code>.
         * 
         * <p>The <code class="prettyprint">ui.openOptions</code> payload field contains the settings being used for this menu launch, 
         * resulting from merging the <code class="prettyprint">openOptions</code> passed to <code class="prettyprint">open()</code>, if any, 
         * with the <code class="prettyprint">openOptions</code> component option.  
         * 
         * <p>This field is "live", meaning that the listener can alter fields such as <code class="prettyprint">position</code> to affect this launch without 
         * affecting the component option.  Since these changes are applied to the merged object, they supersede both the <code class="prettyprint">openOptions</code> 
         * passed to <code class="prettyprint">open()</code> and the <code class="prettyprint">openOptions</code> component option.
         * 
         * <p>If any of the above techniques are used to alter the built-in menu button or context menu functionality, it is the app's responsibility to ensure that 
         * the result is both correct and accessible.  
         *
         * @expose 
         * @event 
         * @memberof oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {Object} ui.openOptions Settings in use for this menu launch.
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">beforeOpen</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "beforeOpen": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeopen</code> event:</caption>
         * $( ".selector" ).on( "ojbeforeopen", function( event, ui ) {} );
         */
        beforeOpen: null,
        
        /**
         * Triggered when the menu is created.
         *
         * @event 
         * @name create
         * @memberof oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Currently empty
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
        
        /**
         * <p>Triggered when the active menu item changes.  Private; do not use.
         * 
         * <p>Internal notes:  
         * 
         * <p>We've replaced JQUI's focus/blur events with this internal event, and made their focus/blur methods internal.
         * It's been agreed with the architects that if we ever need any of this API 
         * to be public, we'll have a focusedItem option, read-only or R/W, with an optionChange event, instead 
         * of the removed API.  (Exact name TBD, but they favored focusedRow, with "ed",  for Table if it had an option rather than 
         * a method.)  If for some reason we keep a separate event instead of an optionChange event, do NOT call this event 
         * "focusedItem", since that will prevent ever having an "focusedItem" option since same namespace.  Instead, call this 
         * "focusedItemChange" in that case.
         * 
         * <p>In the meantime, we'll keep firing this private event, since it's used so extensively and usefully in the unit tests to make sure 
         * other stuff works, and since keeping this working and tested means that we can just change the name to optionChange if 
         * we ever need the public event.  
         * 
         * <p>The difference between this method and JQUI's focus event is that it fires for blurs too, it doesn't fire if the old 
         * and new active item are the same, and we fire a single event, not both a blur and focus, when the active state moves from item A to 
         * item B.
         *
         * @event 
         * @name _activeItem
         * @memberof oj.ojMenu
         * @instance
         * @private
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.previousItem the previously focused menu item
         * @property {jQuery} ui.item the currently focused menu item
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">_activeItem</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "_activeItem": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">oj_activeitem</code> event:</caption>
         * $( ".selector" ).on( "oj_activeitem", function( event, ui ) {} );
         */
        
        /**
         * Triggered when a menu item is selected.  The only correct, supported way to react to the selection of a 
         * menu item is to listen for this event.  Click listeners and <code class="prettyprint">href</code> navigation should not be used. 
         *
         * @expose 
         * @event 
         * @memberof oj.ojMenu
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {jQuery} ui.item the selected menu item 
         * 
         * @example <caption>Initialize the menu with the <code class="prettyprint">select</code> callback specified:</caption>
         * $( ".selector" ).ojMenu({
         *     "select": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojselect</code> event:</caption>
         * $( ".selector" ).on( "ojselect", function( event, ui ) {} );
         */
        select: null
    },

    _create: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        // Create aliases, that won't be renamed, for the private methods that are called by unit tests.  These unit tests come 
        // from JQUI, in which these methods were actually public.  With these aliases, we don't have to @expose private method names 
        // (which prevents renaming and bloats minified code), and our internal calls to these methods can be this._focus rather than this["_focus"].
        // TBD: perhaps the unit tests could simulate keyboard events rather than calling these methods.
        this["_focusForTesting"] = this._focus;
        this["_nextForTesting"] = this._next;
        this["_selectForTesting"] = this._select;
        
        this.activeMenu = this.element;
        // flag used to prevent firing of the click handler
        // as the event bubbles up through nested menus
        this.mouseHandled = false;
        this.element
            .uniqueId()
            .addClass( "oj-menu oj-component" )
            
            .toggleClass( "oj-menu-icons", !!this.element.find( ".oj-component-icon" ).length )
            
            .attr({
                "role": this.role,
                "tabIndex": "0"
            });
            // pass true to catch these events on all menus, not just enabled menus
            this._on(true, {
                //Required to stick the focus on disabled menu.
                "mousedown .oj-menu-item": function(event) {
                    if (this.options.disabled) {
                        event.preventDefault();
                    }
                },
                "click": function(event) {
                    if (this.options.disabled) {
                        event.preventDefault();
                    }
                },
                //On Esc key focus should be shifted to launcher and dismiss menu.
                "keydown": function(event) {
                    if (this.options.disabled) {
                        if (event.keyCode === $.ui.keyCode.ESCAPE) {
                            if (this._launcher) { // if this is a popup menu that's currently shown
                                this._focusLauncherAndDismiss(event);
                            }
                        }
                    }
                }
            });
        
        // needed since _setOption() is not automatically called at create time.
        // TBD: Would be a little better to toggle these 2 things rather than only setting them if true, as in superclass _setOption().
        if ( this.options.disabled ) {
            this.element
                .addClass( "oj-disabled" )
                .attr( "aria-disabled", "true" );
        }

        this._on({
            // Prevent focus from sticking to links inside menu after clicking
            // them (focus should always stay on UL during navigation).
            "mousedown .oj-menu-item > a": function( event ) {
                event.preventDefault();
            },
            "click .oj-disabled > a": function( event ) {
                event.preventDefault();
            },
            "click": function(event) {
                // when the click event bubbles out of the root menu element, we're done with it, so 
                // reset this flag to its initial value of false in preparation for the next click
                this.mouseHandled = false;
            },
            "click .oj-menu-item:has(a)": function( event ) {
                var target = $( event.target ).closest( ".oj-menu-item" );
                // the mouseHandled var ensures that the click is handled only for the originally clicked
                // menu item, not for the parent menu items to which it bubbles.
                if ( !this.mouseHandled && target.not( ".oj-disabled" ).length ) {
                    this.mouseHandled = true;
                    
                    // prevent page scrolling and appending # to page URL, which can interfere with routing, etc.
                    // Do this before the bailout so these things are prevented when user clicks a 2nd time on parent menu item.
                    // No need to additionally do this for Enter/Space handler, because menu root, not the anchor, has browser focus
                    // in that case, so anchor click behavior doesn't happen, so doesn't need to be prevented.
                    event.preventDefault();
                    
                    if (this.active && this.active.closest(target).length && this.active.get(0) != target.get(0)) {
                        //If current active menu item  is decendent of (and not equal to) target menu item then 
                        //sub menu of the curent target is already open and hence no need to 
                        //1. expand the sub menu 
                        //2. as current target is a menu item having sub menu no need to invoke this._select(event).
                        return;
                    }
                    // Open submenu on click
                    if ( target.has( ".oj-menu" ).length ) {
                        this._expand( event );
                    }
                    else {
                        //Invoke _select() only for leaf menu items
                        this._select(event);
                        if (!this.element.is(":focus")) {
                            // Redirect focus to the menu
                            this.element.trigger("focus", [true]);

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if (this.active && this.active.parents(".oj-menu").length === 1) {
                                clearTimeout(this.timer);
                            }
                        }
                    }
                }
            },
            "mouseenter .oj-menu-item": function( event ) {
                var target = $( event.currentTarget );
                // Remove oj-focus-ancestor class from siblings of the newly focused menu item
                // to avoid a jump caused by adjacent elements both having a class with a border
                target.siblings().children( ".oj-focus-ancestor" ).removeClass( "oj-focus-ancestor" );
                this._focus( event, target );
            },
            "mouseleave": function( event ) {
                this._collapse( event, "eventSubtree" );
            },
            "mouseleave .oj-menu": function( event ) {
                this._collapse( event, "eventSubtree" );
            },
            "focus": function( event, keepActiveItem ) {
                if ( !keepActiveItem ) {
                    // If there's already an active item, keep it active
                    // If not, make the first item active
                    // TBD: is there a reason that JQUI needed to redundantly call _focus() on this.active when this.active was already set?
                    //      Or should we only call it when it's not set and we're calling it on the first menu item?
                    var item = this.active || this.element.children( ".oj-menu-item" ).eq( 0 );
                    this._focus( event, item );
                }
            },
            "keydown": this._keydown,
            "keyup": function( event ) {
                if (event.keyCode == $.ui.keyCode.ENTER || event.keyCode == $.ui.keyCode.SPACE) 
                    this.__spaceEnterDownInMenu = false;
            }
        });
        
        this._setup();

        this._registerClickAwayHandler();
        this._super();
    },

    //Registers one click away handler on document, only if it is not already registered by another menu widget.
    _registerClickAwayHandler: function() {
        var clikAwayHandler = this.document.data(this._MENU_CLICK_AWAY_HANDLER_KEY);
        if (!clikAwayHandler) {
        // Clicks outside of a menu collapse any open menus, and dismiss the entire menu if it's a popup
            clikAwayHandler = function(event) {
                //Focus event needs to be captured because, in case of menu button (where focus is still on menu button instead of open menu), if user does 
                //a taboff to another element then menu should be closed. With this we also no need to have additional "blur" handler on menu to close the menu popup/submenus.
                
                //Despite of focus/mousedown, still keydown listener is required for contextmenu events especially for menubutton with browser default context menu 
                //and user pressed contextmenu keyboard key(not right mouse click). 
                
                //Checking event.KeyCode along with event.which as currently event created by jquery-simulate.js is setting only event.keyCode for chrome/IE. 
                //This avoids test failures. This can be removed after jquery simulates event properly.
                
                if (event.type === "focus" || event.type === "mousedown" || event.which == 93 || (event.which == 121 && event.shiftKey) || event.keyCode == 93) { // Windows contextMenu key (93) or Shift-F10 (121)
                    //Clone _openPopupMenus as __dismiss() will remove the open menu from _openPopupMenus list                   
                    var openPopupMenus = _openPopupMenus.slice(0, _openPopupMenus.length);
                    $.each(openPopupMenus , function(index, menu) {
                        //Close all open menus unless the mouseDown/focus/keyDown event came from that specific menu.
                        if (!$(event.target).closest(menu.element).length &&  // if event target is outside of menu element AND one of the following is true then close the menu.
                            (event.type === "keydown" || (event.type === "mousedown" && event.which === 3) ||  //1. if it is a contextmenu event(see event.which on outer if)
                             !$(event.target).closest(menu._launcher).length ||  // 2. When focus is moved on to other than launcher or left/middle mousedown on element other than launcher
                             (menu._isContextMenu && event.type === "mousedown" && event.which !== 3))) { //3. If event is a left/middle-mousedown on launcher and current menu is contextmenu ( see bug 18745414)
                            menu._collapse(event, "eventSubtree"); // is effectively "all" since we check that event is outside menu.  "all" would be clearer, but just in case, leaving it as is.
                            if (menu._launcher)
                                menu.__dismiss(event);
                        }
                    });
                };
            }

            this.document.data(this._MENU_CLICK_AWAY_HANDLER_KEY, clikAwayHandler);
            //Capture the event on document to close the menu popup. Must do this in capture phase so that menu is closed even if something eats the event.
            this.document[0].addEventListener("keydown", clikAwayHandler, true);    
            this.document[0].addEventListener("mousedown", clikAwayHandler, true);
            this.document[0].addEventListener("focus", clikAwayHandler, true);
        }
    },

    //Unregisters click away handler on document, only if there are no menu widgets on the page.
    _unregisterClickAwayHandler: function() {
        var clikAwayHandler = this.document.data(this._MENU_CLICK_AWAY_HANDLER_KEY);
        //Remove click away handler while destroying last menu instance.
        if (clikAwayHandler && $(":oj-menu").length === 1 ) {
            //Ensure that all listeners removed on document while destroying the menu.   
            this.document[0].removeEventListener("keydown", clikAwayHandler, true);
            this.document[0].removeEventListener("mousedown", clikAwayHandler, true);
            this.document[0].removeEventListener("focus", clikAwayHandler, true);
            this.document.removeData(this._MENU_CLICK_AWAY_HANDLER_KEY);
        }
    },
    
    _setOption: function( key, value ) { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        this._superApply( arguments );
        
        // this._submenuPosition is used every time a *sub*menu is opened.
        // For non-popup menus, this is set only here and in _setup().
        // For popup menus, this is set in each call to open(), and not changed by the following code while the popup is still open,
        // since while it is still open it should keep using the merged value from open()/beforeOpen, not the new value of the component option.
        if (!this._launcher) { // if this is not a popup menu that's currently shown
            if (key === "submenuOpenOptions")
                this._submenuPosition = oj.PositionUtils.normalizeHorizontalAlignment(value.position, this.isRtl);
            else if (key === "submenuOpenOptions.position")
                this._submenuPosition = oj.PositionUtils.normalizeHorizontalAlignment(value, this.isRtl);
        }
    },
    
    _destroy: function() { // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
        // Destroy (sub)menus
        this.element
            .removeAttr( "aria-activedescendant" )
            .find( ".oj-menu" ).addBack()
                .removeClass( "oj-menu oj-component oj-menu-icons" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeAttr( "aria-labelledby" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .show();

        // Destroy menu items
        this.element.find( ".oj-menu-item" )
            .removeClass( "oj-menu-item" )
            .removeAttr( "role" )
            .children( "a" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .removeClass( "oj-hover" )
                .removeAttr( "tabIndex" )
                .removeAttr( "role" )
                .removeAttr( "aria-haspopup" )
                .children().each( function() {
                    var elem = $( this );
                    if ( elem.data( "oj-ojMenu-submenu-icon" ) ) {
                        elem.remove();
                    }
                });

        // Destroy anchors
        this.element.find( "a" ).removeAttr( "aria-expanded" );
        
        // Destroy menu dividers
        this.element.find( ".oj-menu-divider" )
            .removeClass( "oj-menu-divider" )
            .removeAttr( "role" );
        
        this._unregisterClickAwayHandler();

        // Remove the menu from openPopupMenus list if it is still added.
        if(_openPopupMenus.indexOf(this) >= 0)
            _openPopupMenus.splice(_openPopupMenus.indexOf(this),1);
    },

    _keydown: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        /*jshint maxcomplexity:20*/
        var match, prev, character, skip, regex,
            preventDefault = true;

        function escape( value ) {
            return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
        }

        switch ( event.keyCode ) {
        case $.ui.keyCode.HOME:
            this._move( "first", "first", event );
            break;
        case $.ui.keyCode.END:
            this._move( "last", "last", event );
            break;
        case $.ui.keyCode.UP:
            this._previous( event );
            break;
        case $.ui.keyCode.DOWN:
            this._next( event );
            break;
        case $.ui.keyCode.LEFT:
        case $.ui.keyCode.RIGHT:
            var isExpand = (event.keyCode === $.ui.keyCode.RIGHT) ^ this.isRtl;
            if (isExpand) {
                if ( this.active && !this.active.is( ".oj-disabled" ) ) {
                    this._expand( event );
                }
            } else {
                this._collapse( event, "active" );
            }
            break;
        case $.ui.keyCode.ENTER:
        case $.ui.keyCode.SPACE:
            this._handleEnterSpace( event );
            
            this.__spaceEnterDownInMenu = true;
            var self = this;
            
            // The spaceEnterDelay and __spaceEnterDownInMenu code addresses an issue where closing a menu, from within the menu via 
            // Space or Enter, can immediately reopen the menu, because the keyUp can happen after focus has jumped to the button, 
            // which clicks the button, which reopens the menu.  Repros most readily (only??) in Firefox.
            // TODO: try calling preventDefault() on the event in Menu (which is good practice anyway since it's handling the event), and 
            // checking isDefaultPrevented() in Button.  If works, should be cleaner / more reliable than this existing fix.
            var spaceEnterDelay = 100; // 1 not enough in FF; 100 seems to do it.  If continued problems, try increasing this value.

            setTimeout(function () {
                self.__spaceEnterDownInMenu = false;
            }, spaceEnterDelay); 
            
            break;
        // this handles enabled menus.  For disabled menus, see this handler: this._on(true, {...});
        case $.ui.keyCode.ESCAPE:
            if (this._launcher) { // if this is a popup menu that's currently shown
                var activeItemId = this.element.attr("aria-activedescendant"); // <a> or nothing.  Always the same as this.active now that we change them in lockstep.
                var topLevelAnchorSelector = "#" + this.element.attr("id") + ">*>a"; // * is typically <li>
                var submenuOpen = activeItemId && !$("#" + activeItemId).is( topLevelAnchorSelector );

                if (submenuOpen)
                    this._collapse( event, "active" );
                else
                    this._focusLauncherAndDismiss( event );
            } else {
                this._collapse( event, "active" );
            }
            break;
        default:
            preventDefault = false;
            prev = this.previousFilter || "";
            character = String.fromCharCode( event.keyCode );
            skip = false;

            clearTimeout( this.filterTimer );

            if ( character === prev ) {
                skip = true;
            } else {
                character = prev + character;
            }

            regex = new RegExp( "^" + escape( character ), "i" );
            match = this.activeMenu.children( ".oj-menu-item" ).filter(function() {
                return regex.test( $( this ).children( "a" ).text() );
            });
            match = skip && match.index( this.active.next() ) !== -1 ?
                this.active.nextAll( ".oj-menu-item" ) :
                match;

            // If no matches on the current filter, reset to the last character pressed
            // to move down the menu to the first item that starts with that character
            if ( !match.length ) {
                character = String.fromCharCode( event.keyCode );
                regex = new RegExp( "^" + escape( character ), "i" );
                match = this.activeMenu.children( ".oj-menu-item" ).filter(function() {
                    return regex.test( $( this ).children( "a" ).text() );
                });
            }

            if ( match.length ) {
                this._focus( event, match );
                if ( match.length > 1 ) {
                    this.previousFilter = character;
                    this.filterTimer = this._delay(function() {
                        delete this.previousFilter;
                    }, 1000 );
                } else {
                    delete this.previousFilter;
                }
            } else {
                delete this.previousFilter;
            }
        }

        if ( preventDefault ) {
            event.preventDefault();
        }
    },

    /*
     * Called for Space and Enter
     */
    _handleEnterSpace: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if ( !this.active.is( ".oj-disabled" ) ) {
            if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
                this._expand( event );
            } else {
                this._select( event );
            }
        }
    },

    /**
     * Refreshes the visual state of the menu. JET components require a <code class="prettyprint">refresh()</code> after the DOM is 
     * programmatically changed underneath the component.  For Menu, this includes:
     * 
     * <ul>
     *   <li>After menu items or submenus are added or removed.</li>
     *   <li>After a change to a menu item's disabled status (which is set by applying or removing the <code class="prettyprint">oj-disabled</code> 
     *       class from the menu item).</li>
     *   <li>After the reading direction (LTR vs. RTL) changes.</li>
     * </ul>
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof oj.ojMenu
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojMenu( "refresh" );
     */
    refresh: function() { // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
        this._super();
        this._setup();
    },

    _setup: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.isRtl = this._GetReadingDirection() === "rtl";
        
        // Used every time a *sub*menu is opened.
        // For non-popup menus, this is set only here and in _setOption().
        // For popup menus, this is set in each call to open().  
        this._submenuPosition = oj.PositionUtils.normalizeHorizontalAlignment(this.options.submenuOpenOptions.position, this.isRtl);
        
        var self=this,
            menus,
            submenus = this.element.find( this.options.menuSelector );

        // Initialize nested menus
        submenus.filter( ":not(.oj-menu)" )
            .addClass( "oj-menu oj-component" )
            .hide()
            .attr({
                "role": this.role,
                "aria-hidden": "true"
            })
            .each(function() {
                var menu = $( this ),
                    item = self._getSubmenuItem( menu ),
                    submenuIcon = $( "<span>" );
                
                submenuIcon   // separate stmt rather than chaining, since GCC can't tell that this is the setter overload of .data().
                    .addClass( "oj-menu-submenu-icon oj-component-icon" )
                    .data( "oj-ojMenu-submenu-icon", true ); // TODO: can't we just look for the class at destroy time rather than adding this data?

                item
                    .attr( "aria-haspopup", "true" )
                    .attr( "aria-expanded", "false" ) // per a11y team, live on <a>, not <ul> like JQUI
                    .prepend( submenuIcon );
                var itemId = /** @type {string|undefined}  tell GCC is getter, not setter, overload of attr() */
                             (item.attr( "id" ));
                
                // itemId is undefined if id attr not present, in which case following stmt is a chainable no-op (returns 
                // "this" and doesn't set anything).
                menu.attr( "aria-labelledby", itemId );
            });

        menus = submenus.add( this.element );
        var children = menus.children();
        
        // Anything that used to be a divider, but now has an "a", should become a menu element.
        children.filter( ".oj-menu-divider" ).has("a")
            .removeClass("oj-menu-divider oj-menu-item") // remove oj-menu-item if somehow present to ensure that it enters following block
            .removeAttr("role");
        
        // Don't refresh list items that are already adapted
        // TBD: .has prob has better perf than :has
        children.filter( ":not(.oj-menu-item):has(a)" )
            .addClass( "oj-menu-item" )
            .attr( "role", "presentation" )
            .children( "a" )
                .uniqueId()
                .attr({
                    "tabIndex": "-1",
                    "role": this._itemRole()
                });

        // Initialize unlinked menu-items containing spaces and/or dashes only as dividers
        children.filter( ":not(.oj-menu-item)" ).each(function() {
            var item = $( this );
            // hyphen, em dash, en dash
            if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
                item.addClass( "oj-menu-divider" )
                    .attr( "role", "separator" );
            }
        });

        // Add aria-disabled to any disabled menu item, and remove it from any recently enabled menu item
        children.filter( ".oj-disabled" ).children( "a" ).attr( "aria-disabled", "true" );
        children.filter( ":not(.oj-disabled)" ).children( "a" ).removeAttr( "aria-disabled" );

        // If the active item has been removed, blur the menu
        if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
            this._blur();
        }
    },
    
    /*
     * Given a list of one or more submenus (typically <ul>'s), finds the <a>'s that are their labels.  
     */
    _getSubmenuItem: function(submenu) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return submenu.prev( "a" );
    },

    _itemRole: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return "menuitem"; 
//        {
//            "menu": "menuitem",
//            "listbox": "option"
//        }[ this.role ];
    },

    /**
     * Focuses the specified menu item and triggers the menu's <code class="prettyprint">_activeItem</code> event.
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event} event - What triggered the menu item to gain focus.  May be <code class="prettyprint">null</code>, but may not be omitted.
     * @param {!jQuery} item - The menu item to focus.  Its containing submenu, if any, must already be expanded.
     */
    _focus: function( event, item ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        // JQUI called blur() here.  This "if blah clearTimeout" is the only thing from that call that we (presumably) still want to do here.
        if ( !(event && event.type === "focus") )
            clearTimeout( this.timer );

        item = item.first();
        this._makeActive(item, event);

        // Highlight active parent menu item, if any
        item // li
            .parent() // ul
            .closest( ".oj-menu-item" ) // li
            .children( "a:first" ) // a
            .addClass( "oj-focus-ancestor" );

        if ( event && event.type === "keydown" ) {
            this._close();
        } else {
            this.timer = this._delay(function() {
                this._close();
            }, this.delay );
        }

        var nested = item.children( ".oj-menu" ); // immediately nested submenu.  length 0 or 1.
        if ( nested.length && event && ( /^mouse/.test( event.type ) && !this.active.hasClass( "oj-disabled" ) ) ) {
            this._startOpening(nested);
        }
        this.activeMenu = item.parent();
    },

    /*
     * Sets this.active (<li>), aria-activeDescendant (<a>), and oj-focus (<a>) in lockstep.  
     * Never set those things outside of _makeActive() and _removeActive(), so they stay in synch!
     * 
     * param item length-1 JQ object containing the <li> to focus
     */
    _makeActive: function( item, event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        // don't need to check for "both items null/empty", and don't need to null-check item, since item required to be length-1 JQ object
        var same = item.is(this.active);
        if (same) {
            return;
        }
        
        var previousItem = this.active ? this.active : $();
        var anchor = item.children( "a" );
        
        this.active = item;
        this.element.attr( "aria-activedescendant", anchor.attr( "id" ) );
        
        previousItem.children( "a" ).removeClass( "oj-focus" );
        anchor.addClass( "oj-focus" );
        
        // see private API doc on the private _activeItem event declaration in this file
        this._trigger( "_activeItem", event, { "previousItem": previousItem , "item": item, "privateNotice": "The _activeItem event is private.  Do not use." } );
    },

    /*
     * Unsets this.active (<li>), aria-activeDescendant (<a>), and oj-focus (<a>) in lockstep.
     * Never set those things outside of _makeActive() and _removeActive(), so they stay in synch!
     * 
     * Don't call this if you are immediately going to call _makeActive, to avoid firing the event twice (and redundant work).
     */
    _removeActive: function(event) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if ( this.active ) { // then there is definitely a change, from "something focused" to "nothing focused", so proceed.
            var previousItem = this.active; // non-null, so don't need null-check
            
            this.active = null;
            this.element.removeAttr( "aria-activedescendant");
            
            previousItem.children( "a" ).removeClass( "oj-focus" );
            
        // see private API doc on the private _activeItem event declaration in this file
            this._trigger( "_activeItem", event, { "previousItem": previousItem, "item": $(), "privateNotice": "The _activeItem event is private.  Do not use." } );
        }
    },

    /**
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the menu item to blur.  May be <code class="prettyprint">null</code> or omitted.
     */
    _blur: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        clearTimeout( this.timer );
        this._removeActive(event);
    },
    
    _focusLauncherAndDismiss: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this._launcher.focus();
        this.__dismiss( event );
    },
    
    /*
     * TODO: JSDoc, including making it private-but-actually-internal, then add 2nd star above
     * Could make this method, and the event, public, if ever needed.
     * 
     */
    __dismiss: function(event) { // Internal visibility; called by Button's MenuButton functionality.  Not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element.hide().attr( "aria-hidden", "true" );
        this._launcher = undefined;
        
        // TODO: if keep this, check whether actually open first, to avoid spurious events
        this._trigger( "__dismiss", event, {} ); // internal event

        //Remove menu from openPopupMenus list
        if(_openPopupMenus.indexOf(this) >= 0)
            _openPopupMenus.splice(_openPopupMenus.indexOf(this),1);
    },
    
    /**
     * <p>Launches this menu as a popup, after firing the <code class="prettyprint">beforeOpen</code> event.  Listeners to that event can cancel the launch 
     * via <code class="prettyprint">event.preventDefault()</code>.
     * 
     * <p>This method's optional <code class="prettyprint">openOptions</code> and <code class="prettyprint">submenuOpenOptions</code> params can be used to specify 
     * per-launch values for the settings in the corresponding component options, without altering those options.  Those per-launch values can 
     * be further customized by a <code class="prettyprint">beforeOpen</code> listener.
     * 
     * @expose
     * @memberof oj.ojMenu
     * @instance
     * 
     * @param {Event=} event What triggered the menu launch.  May be <code class="prettyprint">null</code>.  May be omitted if subsequent params are omitted.
     * @param {Object=} openOptions Options to merge with the <code class="prettyprint">openOptions</code> option.  May be <code class="prettyprint">null</code>.  May be omitted if subsequent params are omitted.
     * @param {Object=} submenuOpenOptions Options to merge with the <code class="prettyprint">submenuOpenOptions</code> option.  May be <code class="prettyprint">null</code> or omitted.
     * 
     * @example <caption>Invoke the <code class="prettyprint">open</code> method:</caption>
     * // override the launcher for this launch only, without affecting the other 
     * // openOptions, and without affecting the component's openOptions option
     * $( ".selector" ).ojMenu( "open", myEvent, {launcher: "#myLauncher"} );
     */
    open: function( event, openOptions, submenuOpenOptions ) { // Public, not an override (not in base class), so use @expose with unquoted method name.
        openOptions = $.extend({}, this.options.openOptions, openOptions);
        submenuOpenOptions = $.extend({}, this.options.submenuOpenOptions, submenuOpenOptions);

        // we don't know at create time that we're a popup, so do popup init on first call to open, which is when we find out we're a popup.
        if (!this._popupInited) {
            this._popupInit();
            this._popupInited = true;
        }
        
        this._isContextMenu = event ? (((event.type === "mousedown" || event.type === "contextmenu") && event.which === 3) || 
                                            event.which == 93 || 
                                            (event.which == 121 && event.shiftKey))
                                    : false;
        
        // Important:  Do the merging *before* calling _trigger(), and don't use the merged values until *after* the call.
        // Reason:  Per doc on open() and beforeOpen event, we pass the merged openOptions to beforeOpen listeners as a "live" object, 
        // so the listener can both read and write the values used for this launch.  We may eventually pass submenuOpenOptions too.
        var cancelled = !this._trigger( "beforeOpen", event, {openOptions: openOptions});
        
        if (cancelled) 
            return;
        
        var launcher = openOptions.launcher;
        launcher = $.type(launcher) === "string" 
                   ? $(launcher)
                   : launcher;
        
        if (!launcher || !launcher.length) {
            // need launcher so can return focus to it.
            oj.Logger.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.");
            return;
        }
        
        //Close all other open menus
        var currentMenu = this.element[0];
        //Clone _openPopupMenus as __dismiss() will remove the open menu from _openPopupMenus list
        var openPopupMenus = _openPopupMenus.slice(0, _openPopupMenus.length);
        $.each(openPopupMenus , function(index, menu) {
            if (menu.element[0] !== currentMenu) {
                menu._collapse( event, "eventSubtree"); // TBD: should this be "all"?
                if (menu._launcher)
                    menu.__dismiss(event);
            }
        });
        
        var position = oj.PositionUtils.normalizeHorizontalAlignment(openOptions.position, this.isRtl);
        
        if (position.of == null) {
            // TBD: this isRightClick check works so far, but supposedly browsers are supposed to fire contextmenu event for Shift-F10 too, 
            // so might have to check other stuff like coordinates to distinguish from keyboard.
            var isRightClick = (event && event.type === "contextmenu");
            position.of = isRightClick ? event : launcher;
        }
        
        // cache the merged value for use while the (outer) menu is still open
        this._submenuPosition = oj.PositionUtils.normalizeHorizontalAlignment(submenuOpenOptions.position, this.isRtl);
        
        this.element
            .show()
            .removeAttr( "aria-hidden" )
            .position( position );
    
        var initialFocus = openOptions.initialFocus;
        
        var focusFirstItem = initialFocus === "firstItem";
        var focusMenu = focusFirstItem || initialFocus === "menu" ;
        
        if (focusMenu)
            this.element.focus();

        if (focusFirstItem) {
            this._focus(event, this.element.children().first());
        } else {
            this._blur(event);
        }

        // store launcher so we can return focus to it, e.g. if Esc pressed.  Ivar is non-null iff menu is a popup and is currently shown.
        this._launcher = launcher;

        //Add current menu to openPopupMenus so that it will be closed on focus lost/click away.
        _openPopupMenus.push(this);
    },
    
    _popupInit: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element.css({position: 'absolute'}); // make it a popup menu
    },
    
    _startOpening: function( submenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        clearTimeout( this.timer );

        // Don't open if already open fixes a Firefox bug that caused a .5 pixel
        // shift in the submenu position when mousing over the submenu icon
        if ( submenu.attr( "aria-hidden" ) !== "true" ) {
            return;
        }

        this.timer = this._delay(function() {
            this._close();
            this._open( submenu );
        }, this.delay );
    },
    
    // opens a *sub*menu
    _open: function( submenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var position = $.extend( {"of": this.active}, this._submenuPosition); // normalizeHorizontalAlignment() was already called on the ivar

        clearTimeout( this.timer );
        this.element.find( ".oj-menu" ).not( submenu.parents( ".oj-menu" ) )
            .hide()
            .attr( "aria-hidden", "true" );

        submenu
            .show()
            .removeAttr( "aria-hidden" )
            .position( position );
        
        this._getSubmenuItem(submenu).attr( "aria-expanded", "true" );
        
        if (!this._launcher && _openPopupMenus.indexOf(this) < 0) {
            _openPopupMenus.push(this);
        }
    },

    /*
     * Same as calling _collapse(event, "eventSubtree") or _collapse(event, "all"), except that, if delay param is not passed, it collapses the menu immediately.
     */
    __collapseAll: function(event, all, delay) {
        clearTimeout(this.timer);
        var self = this;
        var collapseMenu = function() {
            // If we were passed an event, look for the submenu that contains the event
            var currentMenu = all ? self.element :
                $(event && event.target).closest(self.element.find(".oj-menu"));

            // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
            if (!currentMenu.length) {
                currentMenu = self.element;
            }

            self._close(currentMenu);

            self._blur(event);
            self.activeMenu = currentMenu;
        };
        if (delay) {
            this.timer = this._delay(collapseMenu, delay);
        } else {
            collapseMenu();
        }
    },

    // With no arguments, closes the currently active menu - if nothing is active
    // it closes all menus.  If passed an argument, it will search for menus BELOW
    _close: function( startMenu ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if ( !startMenu ) {
            startMenu = this.active ? this.active.parent() : this.element;
        }

        var menus = startMenu.find( ".oj-menu" );
        menus.hide()
             .attr( "aria-hidden", "true" );
        this._getSubmenuItem( menus ).attr( "aria-expanded", "false" );
        startMenu.find( "a.oj-focus-ancestor" ).removeClass( "oj-focus-ancestor" );

        if (!this._launcher) {
            // If the current menu is not a popup menu and it's submenu is already open then remove the menu from _openPopupMenus 
            // while closing the submenus of top level menu.
            if (_openPopupMenus.indexOf(this) >= 0) {
                if (startMenu === this.element) {
                    _openPopupMenus.splice(_openPopupMenus.indexOf(this), 1);
                }
            }
        }
    },

    /**
     * Closes one or more open submenus.
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the menu to collapse.  May be <code class="prettyprint">null</code>.  
     *                         May be omitted if the <code class="prettyprint">which</code> parameter is omitted.
     * @param {string=} which - Optional; defaults to <code class="prettyprint">"active"</code>.  Values are the following <code class="prettyprint">string</code>s:
     *     <ul>
     *       <li><code class="prettyprint">"active"</code>: Closes the currently active submenu.</li>
     *       <li><code class="prettyprint">"all"</code>: Closes all submenus.</li>
     *       <li><code class="prettyprint">"eventSubtree"</code>: Closes submenus below but not including the menu that is or contains the target of the triggering event.</li>
     *     </ul>
     */
    _collapse: function( event, which ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        if (which == null || which === "active") {
            var newItem = this.activeMenu &&
                this.activeMenu.closest( ".oj-menu-item", this.element );
            if ( newItem && newItem.length ) {
                this._close();
                this._focus( event, newItem );
            }
        } else if ( which === "all" || which === "eventSubtree") {
            this.__collapseAll(event, which === "all", this.delay);
        } else {
            oj.Logger.warn("Invalid param " + which + " passed to Menu._collapse().  Ignoring the call.");
        }
    },

    /**
     * Opens the submenu below the currently focused item, if one exists.
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the menu to expand.  May be <code class="prettyprint">null</code> or omitted.
     */
    _expand: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var newItem = this.active &&
            this.active
                .children( ".oj-menu " )
                .children( ".oj-menu-item" )
                .first();

        if ( newItem && newItem.length ) {
            this._open( newItem.parent() );

            // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
            this._delay(function() {
                this._focus( event, newItem );
            });
        }
    },

    /**
     * Focuses the next menu item, wrapping at the bottom, as if <kbd>DownArrow</kbd> had been pressed.
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the focus to move.  May be <code class="prettyprint">null</code> or omitted.
     */
    _next: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this._move( "next", "first", event );
    },

    /**
     * Focuses the previous menu item, wrapping at the top, as if <kbd>UpArrow</kbd> had been pressed.
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the focus to move.  May be <code class="prettyprint">null</code> or omitted.
     */
    _previous: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this._move( "prev", "last", event );
    },

    _isFirstItem: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return this.active && !this.active.prevAll( ".oj-menu-item" ).length;
    },

    _isLastItem: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        return this.active && !this.active.nextAll( ".oj-menu-item" ).length;
    },

    _move: function( direction, filter, event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var next;
        if ( this.active ) {
            if ( direction === "first" || direction === "last" ) {
                next = this.active
                    [ direction === "first" ? "prevAll" : "nextAll" ]( ".oj-menu-item" )
                    .eq( -1 );
            } else {
                next = this.active
                    [ direction + "All" ]( ".oj-menu-item" )
                    .eq( 0 );
            }
        }
        if ( !next || !next.length || !this.active ) {
            next = this.activeMenu.children( ".oj-menu-item" )[ filter ]();
        }

        this._focus( event, next );
    },

    /* TODO: update JSdoc to be something like this revised version, once todo's in code are resolved.  
     * Let selectItem be the currently focused menu item if any, else the menu item containing the target of the supplied event if any, else null.
     * 
     * If selectItem is non-null, this method selects that item, collapses all submenus, and triggers the menu's 
     * <code class="prettyprint">select</code> event.
     *
     * Internally, this method should not be invoked for parent menu items or disabled menu items. But still there is a chance of 
     * invoking _select() externally. (Not anymore now that it's private.) In that case, if focused menu item is a disabled or parent menu item then a warning message will be logged.
     */
    /**
     * Selects the currently focused menu item, collapses all submenus and triggers the menu's <code class="prettyprint">select</code> event.  
     * 
     * @memberof oj.ojMenu
     * @instance
     * @private
     * @param {Event=} event - What triggered the selection.  May be <code class="prettyprint">null</code> or omitted.
     */
    _select: function( event ) { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        // If no menu item is focused, then infer one from the event if possible.  TBD: still need this now that not public?  Or is this.active always set?
        if (!this.active && event && event.target ) {
            var menuItem = $( event.target ).closest( ".oj-menu-item" );
            if (menuItem.closest( this.element ).length)
                this._makeActive(menuItem, event);
        }
        
        if (!this.active) {
            // If we reach here, this must be an external call to the method.
            oj.Logger.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
            return;
        }
        
        // now we know this.active is non-null
        if (this.active.has( ".oj-menu" ).length || this.active.is( ".oj-disabled" )) {
            // If we reach here, this must be an external call to the method.
            oj.Logger.warn("Selecting a disabled menu item or parent menu item is not allowed.");
            return;
        }
        
        var ui = { "item": this.active }; // must grab this.active before calling __collapseAll, which clears this.active
        
        // The menu item has been selected, so we can collapse all menus immediately with no timeout via __collapseAll.
        // If we call the version with a timeout, _collapse(event, "all"), then mouseleave event handler will invoke _collapse(event, "eventSubtree") on event.target 
        // which will clear our scheduled _collapse(event, "all") on this.element, so that submenu will not be collapsed,
        // which means that when the menu is later re-launched, the submenu is already open. 
        this.__collapseAll( event, true );

        // if this is a popup menu that's currently shown
        if (this._launcher) {
            this._focusLauncherAndDismiss(event);
        }
        
        // TODO: should this fire before or after calling __collapseAll (clears this.active and fires 
        // _activeItem event) and/or _focusLauncherAndDismiss() (browser-blurs and hides poupup menu)?
        this._trigger( "select", event, ui );
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the menu.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojMenu#widget
     * @memberof oj.ojMenu
     * @instance
     * @return {jQuery} the menu
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojMenu( "widget" );
     */

    /**
     * Removes the menu functionality completely. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojMenu#destroy
     * @memberof oj.ojMenu
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojMenu( "destroy" );
     */
});

// "private static members" shared by all menus

// Array to track all opened menu popups. All the menus opened by Menu Buttons/ Context Menu/using menu.open() and standalone menus having open submenus, will be added to list 
// and later will be removed on __dismiss()/_close() on menu popup/standalone menu.
var _openPopupMenus = new Array();

}());

});