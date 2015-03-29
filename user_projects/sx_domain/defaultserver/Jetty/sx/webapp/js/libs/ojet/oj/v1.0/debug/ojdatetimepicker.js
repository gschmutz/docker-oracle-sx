define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue',
        'ojs/ojinputtext', 'ojs/ojvalidation', 'ojs/ojpopup', 'ojs/ojbutton'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore, inputText, validation)
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
 * Shared for ojInputDate + ojInputTime
 * @ignore
 */
function disableEnableSpan(children, val) 
{
  var filteredChildren = children.filter("span");
  if (val)
  {
    filteredChildren.addClass("oj-disabled").removeClass("oj-enabled oj-default");
  }
  else 
  {
    filteredChildren.removeClass("oj-disabled").addClass("oj-enabled oj-default");
  }
}

/**
 * Copies time over from the from date to the to date. Used for ojtimepicker + ojdatetimepicker as well.
 */
function copyTimeOver(from, to)
{
  to.setHours(from.getHours());
  to.setMinutes(from.getMinutes());
  to.setSeconds(from.getSeconds());
  to.setMilliseconds(from.getMilliseconds());
  return to;
}

/**
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 * @ignore
 */
function bindHover(dpDiv)
{
  var selector = ".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon.oj-component-icon, .oj-datepicker-calendar td a";
  return dpDiv.delegate(selector, "mouseout", function ()
  {
    $(this).removeClass("oj-hover");
  }).delegate(selector, "mouseover", function ()
  {
    $(this).addClass("oj-hover");
  }).delegate(selector, "focus", function ()
  {
    $(this).addClass("oj-focus");
  }).delegate(selector, "blur", function ()
  {
    $(this).removeClass("oj-focus");
  });
}

//to display the suffix for the year
var yearDisplay = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(
{
  "year" : "numeric"
});


/*!
 * JET Input Date @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundertion and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Depends:
 *  jquery.ui.widget.js
 */
/**
 * @class
 * @name oj.ojInputDate
 * @augments oj.inputBase
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputDateOverview-section">
 *   JET ojInputDate Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputDateOverview-section"></a>
 * </h3>
 * 
 * <p>Description: ojInputDate provides basic support for datepicker selection.
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>When focus is on the input element.
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
 *       <td><kbd>DownArrow or UpArrow</kbd></td>
 *       <td>Shows the grid and moves the focus into the expanded date grid</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td>Close the grid.</tr>
 *     <tr>
 * </tbody></table>
 * 
 * <br/>
 * <p>When focus is on the picker.
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
 *       <td><kbd>Enter</kbd></td>
 *       <td>Select the currently focused day</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Move up in the grid.</tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move down in the grid.</tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move right in the grid.</tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move left in the grid.</tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td>Close the grid.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first day of the month.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last day of the month.</tr>
 *     <tr>
 *       <td><kbd>PageUp</kbd></td>
 *       <td>Switch to previous month.</tr>
 *     <tr>
 *       <td><kbd>PageDown</kbd></td>
 *       <td>Switch to next month.</tr>
 *     <tr>
 *       <td><kbd>Alt + PageUp</kbd></td>
 *       <td>Switch to previous year.</tr>
 *     <tr>
 *       <td><kbd>Alt + PageDown</kbd></td>
 *       <td>Switch to next year.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + PageUp</kbd></td>
 *       <td>Switch to previous by stepBigMonths.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + PageDown</kbd></td>
 *       <td>Switch to next by stepBigMonths.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + T</kbd></td>
 *       <td>Places focus on Today button if it exists.</tr>
 *    </tbody>
 * </table>
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputDate" )            // selects all JET input on the page
 * </code>
 * </pre>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * It is up to the application developer to associate the label to the input component.
 * For inputDate, you should put an <code>id</code> on the input, and then set 
 * the <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <h3 id="label-section">
 *   Label and InputDate
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the input
 * by putting an <code>id</code> on the input, and then setting the 
 * <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p>
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="dateId" data-bind="ojComponent: {component: 'ojInputDate'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputDate
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputDate();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputDate( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="dateId" data-bind="ojComponent: {component: 'ojInputDate'}" /&gt;
 */
oj.__registerWidget("oj.ojInputDate", $['oj']['inputBase'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  
  //-------------------------------------From base---------------------------------------------------//
  _CLASS_NAMES : "oj-inputdatetime-input",
  _WIDGET_CLASS_NAMES : "oj-inputdatetime-date-only oj-component oj-inputdatetime",
  _INPUT_HELPER_KEY: "inputHelp",
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "text"}],
  //-------------------------------------End from base-----------------------------------------------//
  
  _TRIGGER_CLASS : "oj-inputdatetime-input-trigger", 
  _TRIGGER_CALENDAR_CLASS : "oj-inputdatetime-calendar-icon", 
  
  _CURRENT_CLASS : "oj-datepicker-current-day", 
  _DAYOVER_CLASS : "oj-datepicker-days-cell-over",
  _UNSELECTABLE_CLASS : "oj-datepicker-unselectable",
  
  _DATEPICKER_DESCRIPTION_ID : "oj-datepicker-desc",
  _CALENDAR_DESCRIPTION_ID : "oj-datepicker-calendar", 
  _MAIN_DIV_ID : "oj-datepicker-div", 
  
  _INLINE_CLASS : "oj-datepicker-inline",
  _INPUT_CONTAINER_CLASS : " oj-inputdatetime-input-container",
  
  options : 
  {
    /**
     * <p>
     * Note that Jet framework prohibits setting subset of options which are object types.<br/><br/>
     * For example $(".selector").ojInputDate("option", "datePicker", {footerLayout: "today"}); is prohibited as it will 
     * wipe out all other sub-options for "datePicker" object.<br/><br/> If one wishes to do this [by above syntax or knockout] one 
     * will have to get the "datePicker" object, modify the necessary sub-option and pass it to above syntax.<br/><br/>
     * 
     * The properties supported on the datePicker option are:
     * 
     * @property {string=} footerLayout Will dictate what content is shown within the footer of the calendar. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {footerLayout: ""}}</code> with possible values being 
     * <ul>
     *   <li>"" - Do not show anything</li>
     *   <li>"today" - the today button</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.footerLayout", "today");</code>
     * 
     * @property {string=} changeMonth Whether the month should be rendered as a dropdown instead of text. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {changeMonth: "select"}}</code> with possible values being 
     * <ul>
     *  <li>"select" - As a dropdown</li>
     *  <li>"none" - As a text</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.changeMonth", "none");</code>
     * 
     * @property {string=} changeYear Whether the year should be rendered as a dropdown instead of text. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {changeYear: "select"}}</code> with possible values being 
     * <ul>
     *  <li>"select" - As a dropdown</li>
     *  <li>"none" - As a text</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.changeYear", "none");</code>
     * 
     * @property {number=} currentMonthPos The position in multipe months at which to show the current month (starting at 0). <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {currentMonthPos: 0}}</code> <br/><br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.currentMonthPos", 1);</code>
     * 
     * @property {string=} daysOutsideMonth Dictates the behavior of days outside the current viewing month. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {daysOutsideMonth: "hidden"}}</code> with possible values being 
     * <ul>
     *  <li>"hidden" - Days outside the current viewing month will be hidden</li>
     *  <li>"visible" - Days outside the current viewing month will be visible</li>
     *  <li>"selectable" - Days outside the current viewing month will be visible + selectable</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.daysOutsideMonth", "visible");</code>
     * 
     * @property {number=} numberOfMonths The number of months to show at once. Note that if one is using a numberOfMonths > 4 then one should define a CSS rule 
     * for the width of each of the months. For example if numberOfMonths is set to 6 then one should define a CSS rule .oj-datepicker-multi-6 .oj-datepicker-group 
     * providing the width each month should take in percentage.  <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {numberOfMonths: 1}}</code> <br/><br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.numberOfMonths", 2);</code>
     * 
     * @property {string=} showOn When the datepicker should be shown. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {showOn: "image"}}</code> with possible values being 
     * <ul>
     *  <li>"focus" - when the element receives focus or when the trigger calendar image is clicked</li>
     *  <li>"image" - when the trigger calendar image is clicked</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.showOn", "focus");</code>
     * 
     * @property {string|number=} stepMonths How the prev + next will step back/forward the months. <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {stepMonths: "numberOfMonths"}}</code>
     * <ul>
     *  <li>"numberOfMonths" - Will use numberOfMonths option value as value</li>
     *  <li>number - Number of months to step back/forward</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.stepMonths", 2);</code>
     * 
     * @property {number=} stepBigMonths Number of months to step back/forward for the (Alt + Page up) + (Alt + Page down) key strokes.  <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {stepBigMonths: 12}}</code><br/><br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.stepBigMonths", 3);</code>
     * 
     * @property {string=} weekDisplay Whether week of the year will be shown.<br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {weekDisplay: "none"}}</code>
     * <ul>
     *  <li>"number" - Will show the week of the year as a number</li>
     *  <li>"none" - Nothing will be shown</li>
     * </ul>
     * <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.weekDisplay", "number");</code>
     * 
     * @property {string=} yearRange The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), 
     * relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn"). <br/><br/>
     * The default value is <code class="prettyprint">{datePicker: {yearRange: "c-10:c+10"}}</code><br/><br/>
     * Example <code class="prettyprint">$(".selector").ojInputDate("option", "datePicker.yearRange", "c-5:c+10");</code>
     * </p>
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputDate
     * @type {Object}
     */
    datePicker: 
    {
      /**
       * @expose
       */
      footerLayout : "", 
      
      /**
       * @expose
       */
      changeMonth : "select", 
  
      /**
       * @expose
       */
      changeYear : "select", 
      
      /**
       * @expose
       */
      currentMonthPos : 0,
      
      /**
       * @expose
       */
      daysOutsideMonth : "hidden", 
      
      /**
       * @expose
       */
      numberOfMonths : 1, 
  
      /**
       * @expose
       */
      showOn : "image", 
  
      /**
       * @expose
       */
      stepMonths : "numberOfMonths", 
  
      /**
       * @expose
       */
      stepBigMonths : 12, 
  
      /**
       * @expose
       */
      weekDisplay : "none", // "number" to show week of the year, "none" to not show it
  
      /** 
       * @expose 
       */
      yearRange : "c-10:c+10" // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
      
    },
    
    /**
     * A datetime converter instance that duck types {@link oj.DateTimeConverter}. Or an object literal 
     * containing the properties listed below. 
     * 
     * The converter used for ojInputDate. Page authors can set a custom converter by creating one using the datetime converter factory 
     * and providing custom options - 
     * oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(customOptions).
     * 
     * <p>
     * When <code class="prettyprint">converter</code> option changes due to programmatic 
     * intervention, the component performs various tasks based on the current state it is in. </br>
     * 
     * <h4>Steps Performed Always</h4>
     * <ul>
     * <li>Any cached converter instance is cleared and new converter created. The converter hint is 
     * pushed to messaging. E.g., notewindow displays the new hint(s).
     * </li>
     * </ul>
     * 
     * <h4>Running Validation</h4>
     * <ul>
     * <li>if component is valid when <code class="prettyprint">converter</code> option changes, the 
     * display value is refreshed.</li>
     * <li>if component is invalid and is showing messages -
     * <code class="prettyprint">messagesShown</code> option is non-empty, when 
     * <code class="prettyprint">converter</code> option changes then all component messages are 
     * cleared and full validation run using the current display value on the component. 
     * <ul>
     *   <li>if there are validation errors, then <code class="prettyprint">value</code> 
     *   option is not updated, and the error pushed to <code class="prettyprint">messagesShown</code>
     *   option. The display value is not refreshed in this case. </li>
     *   <li>if no errors result from the validation, the <code class="prettyprint">value</code> 
     *   option is updated; page author can listen to the <code class="prettyprint">optionChange</code> 
     *   event on the <code class="prettyprint">value</code> option to clear custom errors. The 
     *   display value is refreshed with the formatted value provided by converter.</li>
     * </ul>
     * </li>
     * <li>if component is invalid and has deferred messages when converter option changes, the 
     *   display value is again refreshed with the formatted value provided by converter.</li>
     * </ul>
     * 
     * <h4>Clearing Messages</h4>
     * <ul>
     * <li>Only messages created by the component are cleared. This includes both 
     * <code class="prettyprint">messagesHidden</code> and <code class="prettyprint">messagesShown</code>
     *  options.</li>
     * <li><code class="prettyprint">messagesCustom</code> option is not cleared.</li>
     * </ul>
     * </p> 
     * 
     * @property {string} type - the converter type registered with the oj.ConverterFactory. 
     * Usually 'datetime'. See {@link oj.DateTimeConverterFactory} for details. <br/>
     * E.g., <code class="prettyprint">{converter: {type: 'datetime'}</code>
     * @property {Object=} options - optional Object literal of options that the converter expects. 
     * See {@link oj.IntlDateTimeConverter} for options supported by the jet datetime converter. 
     * E.g., <code class="prettyprint">{converter: {type: 'datetime', options: {formatType: 'date'}}</code>
     * 
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputDate
     * @default <code class="prettyprint">oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter()</code>
     */
    converter : oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(
    {
      "day" : "2-digit", "month" : "2-digit", "year" : "2-digit"
    }),
    
    /**
     * The maximum selectable date. When set to null, there is no maximum.
     *
     * <ul>
     *  <li> type string - ISOString
     *  <li> null - no limit
     * </ul>
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputDate
     * @default <code class="prettyprint">null</code>
     */
    max : undefined, 
    
    /**
     * The minimum selectable date. When set to null, there is no minimum.
     *
     * <ul>
     *  <li> type string - ISOString
     *  <li> null - no limit
     * </ul>
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputDate
     * @default <code class="prettyprint">null</code>
     */
    min : undefined,
    
    /**
     * Additional info to be used when rendering the day
     *
     * This should be a JavaScript Function reference which accepts as its argument the following JSON format 
     * {fullYear: Date.getFullYear(), month: Date.getMonth()+1, date: Date.getDate()}
     * 
     * and returns null or all or partial JSON data of 
     * {disabled: true|false, className: "additionalCSS", tooltip: 'Stuff to display'}
     * 
     * @expose
     * @instance
     * @memberof! oj.ojInputDate
     * @type {Function}
     * @default <code class="prettyprint">null</code>
     */
    dayFormatter : null
    
    /**
     * Additional info to be used when rendering the day
     *
     * This should be in the following JSON format with the year, month, day based on Date.getFullYear(), Date.getMonth(), and Date.getDate():
     * {year: {month: {day: {disabled: true|false, className: "additionalCSS", tooltip: 'Stuff to display'}}}
     * 
     * There also exists a special '*' character which represents ALL within that field [i.e. * within year, represents for ALL year].
     *
     * @expose
     * @name dayMetaData
     * @instance
     * @memberof! oj.ojInputDate
     * @default <code class="prettyprint">null</code>
     * @example <code class="prettyprint">{2013: {11: {25: {disabled: true, className: 'holiday', tooltip: 'Stuff to display'}, 5: {disabled: true}}}}}</code>
     */
    
    // DOCLETS 
    /** 
     * The placeholder text to set on the element. Though it is possible to set placeholder 
     * attribute on the element itself, the component will only read the value when the component
     * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
     * and page authors should update the option directly.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;!-- Foo is InputDate, InputDateTime -->
     * &lt;input id="date" data-bind="ojComponent: {component: 'ojFoo', placeholder: 'Birth Date'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;!-- Foo is InputDate, InputDateTime -->
     * &lt;input id="date" data-bind="ojComponent: {component: 'ojFoo'}" placeholder="User Name" /&gt;
     * 
     * @default when the option is not set, the element's placeholder attribute is used if it exists. 
     * If the attribute is not set then the default can be the converter hint provided by the 
     * datetime converter. See displayOptions for details.
     * 
     * @access public
     * @instance
     * @expose 
     * @name placeholder
     * @instance
     * @memberof! oj.ojInputDate
     */
    
    /** 
     * The value of the ojInputDate component which should be an ISOString.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputDate({'value': new Date().toISOString()});<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns Today's date in ISOString
     * $(".selector").ojInputDate("option", "value");
     * // Setter: sets it to a different date
     * $(".selector").ojInputDate("option", "value", new Date(2013, 0, 1).ISOString);
     * 
     * @expose 
     * @name value
     * @instance
     * @memberof! oj.ojInputDate
     * @default When the option is not set, the element's value property is used as its initial value 
     * if it exists. This value must be an ISOString.
     */
    
    /** 
     * @name prevText
     * @see #translations
     */
    
    /** 
     * @name nextText
     * @see #translations
     */
    
    /** 
     * @name currentText
     * @see #translations
     */
    
    /** 
     * @name weekHeader
     * @see #translations
     */
  },
  
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    var props = [{"attribute": "disabled", "defaultOptionValue": false, "validateOption": true},
                 {"attribute": "title", "defaultOptionValue": ""},
                 {"attribute": "placeholder", "defaultOptionValue": ""},
                 {"attribute": "value", "defaultOptionValue": null},
                 {"attribute": "required", "defaultOptionValue": false, 
                  "coerceDomValue": true, "validateOption": true},
                 {"attribute": "min", "defaultOptionValue": null},
                 {"attribute": "max", "defaultOptionValue": null}]; 
    
    this._super(originalDefaults, constructorOptions);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);
  },
  
  /**
   * @ignore
   * @protected
   */
  _InitBase : function __InitBase() 
  {
    this._triggerNode = null;
    this._ignoreShow = false; //only case is when of showOn of focus and one hides the element [need to avoid showing]
    this._maxRows = 4;

    this._currentDay = 0;
    this._drawMonth = this._currentMonth = 0;
    this._drawYear = this._currentYear = 0;
    
    this._datePickerDefaultValidators = {};
    
    var nodeName = this.element[0].nodeName.toLowerCase();
    this._isInLine = (nodeName === "div" || nodeName === "span");
    
    this._dpDiv = bindHover($("<div id='" + this._GetSubId(this._MAIN_DIV_ID) + "' role='region' aria-describedby='" + this._GetSubId(this._DATEPICKER_DESCRIPTION_ID) + "' class='oj-datepicker-content'></div>"));
    $("body").append(this._dpDiv);
    
    if(this._isInLine) 
    {
      //if inline then there is no input element, so reset _CLASS_NAMES
      this._CLASS_NAMES = "";
    }
    else
    {
      //append input container class to be applied to the root node as well, since not inline
      //[note the special case where input container class will NOT be on the widget node is when 
      //ojInputDateTime is of inline and ojInputTime places container around the input element]
      this._WIDGET_CLASS_NAMES += this._INPUT_CONTAINER_CLASS;
      var self = this;
      this._popUpDpDiv = this._dpDiv.ojPopup({"initialFocus": "none", 
                                              "rootAttributes": {"class": "datetimepicker-dropdown"},
                                              "open": function () {
                              self._dpDiv.find(".oj-datepicker-calendar").focus();
                          }});
    }
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */
  _ComponentCreate : function __ComponentCreate()
  {
    
    this._InitBase();
    
    var retVal = this._super();
    
    //Need to set the currentDay, currentMonth, currentYear to either the value or the default of today's Date
    //Note that these are days indicator for the datepicker, so it is correct in using today's date even if value 
    //hasn't been set
    this._setCurrentDate(this._getDate());
    
    if (this._isInLine)
    {
      this.element.append(this._dpDiv);
      this.element.addClass(this._INLINE_CLASS); //by applying the inline class it places margin bottom, to separate in case ojInputTime exists
      
      // Set display:block in place of inst._dpDiv.show() which won't work on disconnected elements
      // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
      this._dpDiv.css("display", "block");
    }
    else 
    {
      this._attachTrigger();
    }
    
    return retVal;
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */        
  _AfterCreate : function () 
  {
    var ret = this._superApply(arguments);
    
    this._disableEnable(this.options["disabled"]);
    
    return ret;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _setOption : function __setOption(key, value, flags)
  {
    
    var retVal = null, 
        dateTimeRangeOptions = {}, 
        dateRestrictionOptions = {};
    
    //When a null, undefined, or "" value is passed in set to null for consistency
    //note that if they pass in 0 it will also set it null
    if (key === "value")
    {
      if(!value) 
      {
        value = null;
      }
      
      retVal = this._super(key, value, flags);
      this._setCurrentDate(value);
      if(this._datepickerShowing()) 
      {
        this._updateDatepicker();
      }
      return retVal;
    }
    
    retVal = this._super(key, value, flags);
    
    if (key === "disabled")
    {
      this._disableEnable(value);
    }
    else if (key === "max" || key === "min") 
    {
      //since validators are immutable, they will contain min + max as local values. B/c of this will need to recreate
      dateTimeRangeOptions = {'min': this.options['min'], 
          'max': this.options['max'],
          'converter': this._GetConverter()};

      this._datePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE] = 
        oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE).createValidator(dateTimeRangeOptions);
      
      this._AfterSetOptionValidators();
    }
    else if(key === "readOnly" && value) 
    {
      this.hide();
    }
    else if (key === "dayFormatter") 
    {
      //since validators are immutable, they will contain dayFormatter as local values. B/c of this will need to recreate
      dateRestrictionOptions = {'dayFormatter': this.options["dayFormatter"], 
          'converter': this._GetConverter()};

      this._datePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION] = 
        oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION).createValidator(dateRestrictionOptions);
      
      this._AfterSetOptionValidators();
    }
    
    if (key === "datePicker" && flags["subkey"] === "currentMonthPos")
    {
      //need to reset up the drawMonth + drawYear
      this._setCurrentDate(this.options["value"]);
    }
    
    var updateDatePicker = {"max": true, "min": true, "dayFormatter": true, "datePicker": true, "translations": true, "dayMetaData": true};
    
    if(this._datepickerShowing() && key in updateDatePicker) 
    {
      this._updateDatepicker();
    }
    
    return retVal;
  },
  
  /**
   * Need to override due to usage of display: inline-table [as otherwise for webkit the hidden content takes up 
   * descent amount of space]
   *  
   * @protected
   * @instance
   * @memberOf !oj.ojInputDate
   */
  _AppendInputHelperParent : function __AppendInputHelperParent() 
  {
    return this._triggerNode;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function __destroy()
  {
    var retVal = this._super();
    
    this.element.off("focus");
    
    if (this._triggerNode)
    {
      this._triggerNode.remove();
    }
    
    if(this._isInLine) 
    {
      //need to remove disabled + readOnly b/c they are set by super classes and datepicker is special in that this.element 
      //can be a div element for inline mode
      this.element.removeProp("disabled");
      this.element.removeProp("readonly");
    }
    
    this._dpDiv.remove();
    return retVal;
  },
  
  _datepickerShowing: function() 
  {
    return this._isInLine || this._popUpDpDiv.ojPopup("isOpen");
  },
  
  /**
   * This function will create the necessary calendar trigger container [i.e. image to launch the calendar] 
   * and perform any attachment to events
   * 
   * @private
   */
  _attachTrigger : function __attachTrigger()
  {
    var showOn = this.options["datePicker"]["showOn"], 
        triggerContainer = $("<span>").addClass(this._TRIGGER_CLASS);

    if (showOn === "focus")
    {
      // pop-up date picker when in the marked field
      this.element.on("focus", $.proxy(this.show, this));
    }

    // pop-up date picker when button clicked
    var triggerCalendar = $("<span/>").addClass(this._TRIGGER_CALENDAR_CLASS + " oj-clickable-icon oj-component-icon");
    triggerContainer.append(triggerCalendar);

    var self = this;
    triggerCalendar.on("click", function ()
    {
      if (self._datepickerShowing())
      {
        self.hide();
      }
      else 
      {
        self.show();
      }
      return false;
    }).on("mouseenter", function ()
    {
      $(this).addClass("oj-hover");
    }).on("mousedown", function ()
    {
      $(this).addClass("oj-active");
    }).on("mouseleave", function ()
    {
      $(this).removeClass("oj-hover oj-active");
    });
    
    this._triggerNode = triggerContainer;
    this.element.after(triggerContainer);
  },
  
  //This handler is when an user keys down with the calendar having focus
  _doCalendarKeyDown : function __doCalendarKeyDown(event)
  {
    var sel, handled = false, 
        kc = $.ui.keyCode, 
        isRTL = this._IsRTL();

    if (this._datepickerShowing())
    {
      switch (event.keyCode)
      {
        case 84: //t character
          if (event.altKey && event.ctrlKey) 
          {
            this._dpDiv.find(".oj-datepicker-current").focus();
            handled = true;
          }
          break;
        case kc.TAB:
          this.hide();
          // hide on tab out
          break;
        case kc.ENTER:
          sel = $("td." + this._DAYOVER_CLASS + ":not(." + this._CURRENT_CLASS + ")", this._dpDiv);
          if (sel[0])
          {
            this._selectDay(this._currentMonth, this._currentYear, sel[0], event);
          }
          //need to return false so preventing default + stop propagation here
          event.preventDefault();
          event.stopPropagation();
          return false;
        case kc.ESCAPE:
          this.hide();
          this.element.focus();
          handled = true;
          break;// hide on escape
        case kc.PAGE_UP:
          if(event.ctrlKey && event.altKey)
          {
            this._adjustDate(- this.options["datePicker"]["stepBigMonths"], "M", true);
          }
          else if (event.altKey)
          {
            this._adjustDate( - 1, "Y", true);
          }
          else 
          {
            this._adjustDate(- this._getStepMonths(), "M", true);
          }
          handled = true;
          break;// previous month/year on page up/+ ctrl
        case kc.PAGE_DOWN:
          if(event.ctrlKey && event.altKey)
          {
            this._adjustDate(+ this.options["datePicker"]["stepBigMonths"], "M", true);
          }
          else if (event.altKey)
          {
            this._adjustDate(1, "Y", true);
          }
          else 
          {
            this._adjustDate(+ this._getStepMonths(), "M", true);
          }
          handled = true;
          break;// next month/year on page down/+ ctrl
        case kc.END:
          this._currentDay = this._getDaysInMonth(this._currentYear, this._currentMonth);
          this._updateDatepicker(true);
          handled = true;
          break;
        case kc.HOME:
          this._currentDay = 1;
          this._updateDatepicker(true);
          handled = true;
          break;
        case kc.LEFT:
          this._adjustDate((isRTL ?  + 1 :  - 1), "D", true);
          // -1 day on ctrl or command +left
          if (event.originalEvent.altKey)
          {
            this._adjustDate((event.ctrlKey ?  - this.options["datePicker"]["stepBigMonths"] :  - this._getStepMonths()), "M", true);
          }
          // next month/year on alt +left on Mac
          handled = true;
          break;
        case kc.UP:
          this._adjustDate( - 7, "D", true);
          handled = true;
          break;// -1 week on ctrl or command +up
        case kc.RIGHT:
          this._adjustDate((isRTL ?  - 1 :  + 1), "D", true);
          // +1 day on ctrl or command +right
          if (event.originalEvent.altKey)
          {
            this._adjustDate((event.ctrlKey ?  + this.options["datePicker"]["stepBigMonths"] :  + this._getStepMonths()), "M", true);
          }
          // next month/year on alt +right
          handled = true;
          break;
        case kc.DOWN:
          this._adjustDate( + 7, "D", true);
          handled = true;
          break;// +1 week on ctrl or command +down
        default : ;
      }
    }
    else if (event.keyCode === kc.HOME && event.ctrlKey)
    {
      // display the date picker on ctrl+home
      this.show();
      handled = true;
    }

    if (handled)
    {
      event.preventDefault();
      event.stopPropagation();
    }

  },

  /**
   * Thie function will update the calendar display
   * 
   * @private
   * @param {boolean=} focusOnCalendar
   */
  _updateDatepicker : function __updateDatepicker(focusOnCalendar)
  {
    this._maxRows = 4;//Reset the max number of rows being displayed (see #7043)
    var generatedHtmlContent = this._generateHTML();
    this._dpDiv.empty().append(generatedHtmlContent.html);
    
    var buttons = $("button", this._dpDiv);
    
    if(buttons.length > 0) 
    {
      if(buttons.length === 1) 
      {
        $(buttons[0]).addClass("oj-datepicker-single-button");
      }
      
      $.each(buttons, function (index, ele)
      {
        $(ele).ojButton();
      });
      
    }
    
    this._attachHandlers();
    
    if (generatedHtmlContent.dayOverId)
    {
      this._dpDiv.find(".oj-datepicker-calendar").attr("aria-activedescendant", generatedHtmlContent.dayOverId);
    }

    var numMonths = this._getNumberOfMonths(), 
        cols = numMonths[1], 
        width = 17;

    this._dpDiv.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
    if (cols > 1)
    {
      this._dpDiv.addClass("oj-datepicker-multi-" + cols).css("width", (width * cols) + "em");
    }
    this._dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("oj-datepicker-multi");

    // #6694 - don't focus the input if it's already focused
    // this breaks the change event in IE
    if (this._datepickerShowing() && this.element.is(":visible") && !this.element.is(":disabled"))
    {
      if (!focusOnCalendar && !this._isInLine)
      {
        if (this.element[0] !== document.activeElement)
        {
          this.element.focus();
        }
      }
      else 
      {
        var calendar = this._dpDiv.find(".oj-datepicker-calendar");
        if (calendar[0] !== document.activeElement)
        {
          calendar.focus();
        }
      }
    }
    
  },

  /**
   * Adjust one of the date sub-fields.
   * 
   * @private
   * @param {number} offset
   * @param {string} period
   * @param {boolean=} focusOnCalendar
   */
  _adjustDate : function __adjustDate(offset, period, focusOnCalendar)
  {
    if (this.options["disabled"])
    {
      return;
    }
    this._adjustInstDate(offset + (period === "M" ? this.options["datePicker"]["currentMonthPos"] : 0), // undo positioning
    period);
    this._updateDatepicker(focusOnCalendar);
  },

  /**
   * Action for current link.
   * 
   * @private
   */
  _gotoToday : function __gotoToday()
  {
    var date = new Date();

    this._currentDay = date.getDate();
    this._drawMonth = this._currentMonth = date.getMonth();
    this._drawYear = this._currentYear = date.getFullYear();

    this._adjustDate();
  },

  /**
   * Action for selecting a new month/year.
   * 
   * @private
   * @param {Object} select
   * @param {string} period
   */
  _selectMonthYear : function __selectMonthYear(select, period)
  {
    var selected = parseInt(select.options[select.selectedIndex].value, 10);

    if (period === "M")
    {
      this._currentMonth = this._drawMonth = selected;
    }
    else 
    {
      this._currentYear = this._drawYear = selected;
    }
    
    //Take care of accessibility
    $("#" + this._GetSubId(this._CALENDAR_DESCRIPTION_ID)).html(this.options["monthWide"][this._drawMonth] + " " + yearDisplay.format(new Date(this._drawYear, this._drawMonth, 1).toISOString()));

    this._adjustDate();
  },
  
  //Action for selecting a day.
  _selectDay : function __selectDay(month, year, td, event)
  {
    if ($(td).hasClass(this._UNSELECTABLE_CLASS) || this.options["disabled"])
    {
      return;
    }

    this._currentDay = $("a", td).html();
    this._currentMonth = month;
    this._currentYear = year;

    var value = this.options['value'] ? oj.IntlConverterUtils.isoToLocalDate(this.options['value']) : null;
    if (value)
    {
      var temp = new Date(this._currentYear, this._currentMonth, this._currentDay);
      
      copyTimeOver(value, temp);

      value = temp;
    }
    else 
    {
      value = new Date(this._currentYear, this._currentMonth, this._currentDay);
    }
    
    var isoString = value.toISOString();
    var formatted = this._GetConverter()["format"](isoString);
    this._SetDisplayValue( formatted ); //need to set the display value, since _SetValue doesn't trigger it per discussion
    this._SetValue(isoString, event);
    this.hide();
  },
  
  //A date may be specified as an exact value or a relative one.
  _determineDate : function __determineDate(date, defaultDate)
  {
    return !date ? defaultDate : (typeof date === "string" ? oj.IntlConverterUtils.isoToLocalDate(date) : new Date(date.getTime()));
  },

  /**
   * Set the date(s) directly.
   * 
   * @private
   * @param {Object} date
   */
  _setCurrentDate : function __setCurrentDate(date)
  {
    var newDate = this._determineDate(date, this._getTodayDate());

    this._currentDay = newDate.getDate();
    this._drawMonth = this._currentMonth = newDate.getMonth();
    this._drawYear = this._currentYear = newDate.getFullYear();

    this._adjustInstDate();
  },

  _getStepMonths : function __getStepMonths()
  {
    var stepMonths = this.options["datePicker"]["stepMonths"];
    return $.isNumeric(stepMonths) ? stepMonths : this.options["datePicker"]["numberOfMonths"];
  },

  /**
   * Attach the onxxx handlers.  These are declared statically so 
   * they work with static code transformers like Caja.
   * 
   * @private
   */
  _attachHandlers : function __attachHandlers()
  {
    var stepMonths = this._getStepMonths(), self = this;
    this._dpDiv.find("[data-handler]").map(function ()
    {
      var handler = 
      {
        /** @expose */
        prev : function (evt)
        {
          self._adjustDate( - stepMonths, "M", true);
          evt.preventDefault();
        },
        /** @expose */
        next : function (evt)
        {
          self._adjustDate( + stepMonths, "M", true);
          evt.preventDefault();
        },
        /** @expose */
        today : function (evt)
        {
          if((evt.type === "keyup" && evt.keyCode === 13) || evt.type === "click")
          {
            self._gotoToday();
            evt.preventDefault();
            evt.stopPropagation();
          }
        },
        /** @expose */
        selectDay : function (evt)
        {
          self._selectDay( + this.getAttribute("data-month"),  + this.getAttribute("data-year"), this, evt);
          return false;
        },
        /** @expose */
        selectMonth : function ()
        {
          self._selectMonthYear(this, "M");
          return false;
        },
        /** @expose */
        selectYear : function ()
        {
          self._selectMonthYear(this, "Y");
          return false;
        },
        /** @expose */
        calendarKey : function (evt)
        {
          self._doCalendarKeyDown(evt);
        }
      };
      $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
    });
  },

  /**
   * Generate the HTML for the current state of the date picker.
   * 
   * @private
   */
  _generateHTML : function __generateHTML()
  {
    var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, todayControl,
        footerLayout, weekDisplay, dayNames = this.options["dayWide"], dayNamesMin = this.options["dayNarrow"], 
        monthNames = this.options["monthWide"], monthNamesShort = this.options["monthAbbreviated"], 
        firstDay = this.options["firstDayOfWeek"], daysOutsideMonth, html, dow, row, group, col, selected, rowCellId, 
        dayOverClass, dayOverId = "", calender, thead, day, daysInMonth, leadDays, curRows, numRows, 
        printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(), 
        today = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate()), // clear time
        isRTL = this._IsRTL(), footerLayoutDisplay = this.options["datePicker"]["footerLayout"], numMonths = this._getNumberOfMonths(), 
        currentMonthPos = this.options["datePicker"]["currentMonthPos"], dayFormatter = this.options["dayFormatter"], 
        currMetaData = null, isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1), minDate = this._getMinMaxDate("min"), 
        maxDate = this._getMinMaxDate("max"), drawMonth = this._drawMonth - currentMonthPos, drawYear = this._drawYear, 
        compareDate = new Date(this._currentYear, this._currentMonth, this._currentDay), valueDate = new Date(this._getDate()), 
        selectedDay = valueDate.getDate(), selectedMonth = valueDate.getMonth(), selectedYear = valueDate.getFullYear(), 
        wDisabled = this.options["disabled"], calculatedWeek, weekText = this.getTranslatedString("weekText");

    valueDate.setHours(0);
    valueDate.setMinutes(0);
    valueDate.setSeconds(0);
    valueDate.setMilliseconds(0);

    if (drawMonth < 0)
    {
      drawMonth += 12;
      drawYear--;
    }
    if (maxDate)
    {
      maxDraw = new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate());
      maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
      while (new Date(drawYear, drawMonth, 1) > maxDraw)
      {
        drawMonth--;
        if (drawMonth < 0)
        {
          drawMonth = 11;
          drawYear--;
        }
      }
    }
    this._drawMonth = drawMonth;
    this._drawYear = drawYear;

    prevText = this.getTranslatedString("prevText");

    prev = (this._canAdjustMonth( - 1, drawYear, drawMonth) && !wDisabled ? "<a href='#' class='oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon' data-handler='prev' data-event='click'" + " title='" + prevText + "'></a>" : "<a class='oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon' title='" + prevText + "'></a>");

    nextText = this.getTranslatedString("nextText");

    next = (this._canAdjustMonth( + 1, drawYear, drawMonth) && !wDisabled ? "<a href='#' class='oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon' data-handler='next' data-event='click'" + " title='" + nextText + "'></a>" : "<a class='oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon' title='" + nextText + "'></a>");

    currentText = this.getTranslatedString("currentText");
    gotoDate = today;

    footerLayout = "";
    todayControl = "<button type='button' class='oj-datepicker-current oj-priority-secondary' data-handler='today' data-event='click keyup'" + ">" + currentText + "</button>";
    
    if(footerLayoutDisplay.length > 1) //keep the code for future multiple buttons
    {
      var todayIndex = footerLayoutDisplay.indexOf("today"),
          loop = 0,
          footerLayoutButtons = [{index: todayIndex, content: (this._isInRange(gotoDate) ? todayControl : "")}];
      
      //rather than using several if + else statements, sort the content to add by index of the strings
      footerLayoutButtons.sort(function(a, b) 
      {
        return a.index - b.index;
      });
      
      //continue to loop until the index > -1 [contains the string]
      while(loop < footerLayoutButtons.length && footerLayoutButtons[loop].index < 0) { loop++; }
      
      while(loop < footerLayoutButtons.length) 
      {
        footerLayout += footerLayoutButtons[loop++].content;
      }
      
      if(footerLayout.length > 0) 
      {
        footerLayout = "<div class='oj-datepicker-buttonpane'>" + footerLayout + "</div>";
      }
    }

    weekDisplay = this.options["datePicker"]["weekDisplay"];

    daysOutsideMonth = this.options["datePicker"]["daysOutsideMonth"];
    html = "";
    
    var monthControl = "all";
    for (row = 0;row < numMonths[0];row++)
    {
      group = "";
      this._maxRows = 4;
      for (col = 0;col < numMonths[1];col++)
      {
        monthControl = "all";
        calender = "";
        if (isMultiMonth)
        {
          calender += "<div class='oj-datepicker-group";
          if (numMonths[1] > 1)
          {
            switch (col)
            {
              case 0:
                calender += " oj-datepicker-group-first";
                monthControl = (isRTL ? "right" : "left");
                break;
              case numMonths[1] - 1:
                calender += " oj-datepicker-group-last";
                monthControl = (isRTL ? "left" : "right");
                break;
              default :
                calender += " oj-datepicker-group-middle";
                monthControl = "";
                break;
            }
          }
          calender += "'>";
        }
        calender += "<div class='oj-datepicker-header" + (wDisabled ? " oj-disabled " : " oj-enabled oj-default ") + "'>" + (/all|left/.test(monthControl) && row === 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(monthControl) && row === 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
"</div><table class='oj-datepicker-calendar" + (wDisabled ? " oj-disabled " : " oj-enabled oj-default ") + "' tabindex=-1 data-handler='calendarKey' data-event='keydown' aria-readonly='true' role='grid' " + "aria-labelledby='" + this._GetSubId(this._CALENDAR_DESCRIPTION_ID) + "'><thead role='presentation'>" + "<tr role='row'>";
        thead = (weekDisplay === "number" ? "<th class='oj-datepicker-week-col'>" + this.getTranslatedString("weekHeader") + "</th>" : "");
        for (dow = 0;dow < 7;dow++)
        {
          // days of the week
          day = (dow + parseInt(firstDay, 10)) % 7;
          thead += "<th role='columnheader' aria-label='" + dayNames[day] + "'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='oj-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
        }
        calender += thead + "</tr></thead><tbody role='presentation'>";
        daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
        if (drawYear === selectedYear && drawMonth === selectedMonth)
        {
          selectedDay = Math.min(selectedDay, daysInMonth);
        }
        leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
        curRows = Math.ceil((leadDays + daysInMonth) / 7);// calculate the number of rows to generate
        numRows = (isMultiMonth ? this._maxRows > curRows ? this._maxRows : curRows : curRows);//If multiple months, use the higher number of rows (see #7043)
        this._maxRows = numRows;
        printDate = new Date(drawYear, drawMonth, 1 - leadDays);
        for (dRow = 0;dRow < numRows;dRow++)
        {
          // create date picker rows
          calender += "<tr role='row'>";
          
          calculatedWeek = this._GetConverter().calculateWeek(printDate.toISOString());
          tbody = (weekDisplay === "none" ? "" : "<td class='oj-datepicker-week-col' role='rowheader' aria-label='" + weekText + " " + calculatedWeek + "'>" + calculatedWeek + "</td>");
          for (dow = 0;dow < 7;dow++)
          {
            // create date picker days
            otherMonth = (printDate.getMonth() !== drawMonth);
            selected = printDate.getTime() === valueDate.getTime();
            rowCellId = "oj-dp-" + dRow + "-" + dow;
            dayOverClass = (printDate.getTime() === compareDate.getTime() && drawMonth === this._currentMonth);
            if (dayOverClass)
            {
              dayOverId = rowCellId;
            }

            daySettings = [true, ""];
            var pYear = printDate.getFullYear(), 
                pMonth = printDate.getMonth(), 
                pDate = printDate.getDate();

            if (dayFormatter)
            {
              currMetaData = dayFormatter({"fullYear": pYear, "month": pMonth+1, "date": pDate}); //request to start from 1 rather than 0
              if (currMetaData)
              {
                //has content
                daySettings = [!currMetaData["disabled"], currMetaData["className"] || ""];
                if (currMetaData["tooltip"])
                {
                  daySettings.push(currMetaData["tooltip"]);
                }
              }
            }
            var selectedDate = printDate.getTime() === valueDate.getTime();

            unselectable = (otherMonth && daysOutsideMonth !== "selectable") || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
            tbody += "<td role='gridcell' aria-disabled='" + !!unselectable + "' aria-selected='" + selected + "' id='" + rowCellId + "' " + "class='" + ((dow + firstDay + 6) % 7 >= 5 ? " oj-datepicker-week-end" : "") + // highlight weekends
(otherMonth ? " oj-datepicker-other-month" : "") + // highlight days from other months
(dayOverClass ? " " + this._DAYOVER_CLASS : "") + // highlight selected day
(unselectable || wDisabled ? " " + this._UNSELECTABLE_CLASS + " oj-disabled" : " oj-enabled ") + // highlight unselectable days
(otherMonth && daysOutsideMonth === "hidden" ? "" : " " + daySettings[1] + // highlight custom dates
(selected ? " " + this._CURRENT_CLASS : "") + // highlight selected day
(printDate.getTime() === today.getTime() ? " oj-datepicker-today" : "")) + "'" + // highlight today (if different)
((!otherMonth || daysOutsideMonth !== "hidden") && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
(otherMonth && daysOutsideMonth === "hidden" ? "&#xa0;" : // display for other months
(unselectable || wDisabled ? "<span class='oj-disabled'>" + printDate.getDate() + "</span>" : "<a class='oj-enabled" + (selectedDate ? " oj-selected" : "") + // highlight selected day
(otherMonth ? " oj-priority-secondary" : "") + // distinguish dates from other months
"' " + (selectedDate || dayOverClass ? "" : "tabindex='-1' ") + " href='#'>" + printDate.getDate() + "</a>")) + "</td>";// display selectable date
            printDate.setDate(printDate.getDate() + 1);
          }
          calender += tbody + "</tr>";
        }
        drawMonth++;
        if (drawMonth > 11)
        {
          drawMonth = 0;
          drawYear++;
        }
        calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col === numMonths[1] - 1) ? "<div class='oj-datepicker-row-break'></div>" : "") : "");
        group += calender;
      }
      html += group;
    }
    html += footerLayout;
    return {html : html, dayOverId : dayOverId};
  },

  /**
   * Generate the month and year header.
   * 
   * @private
   */
  _generateMonthYearHeader : function __generateMonthYearHeader(drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort)
  {

    var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, 
        changeMonth = this.options["datePicker"]["changeMonth"], changeYear = this.options["datePicker"]["changeYear"], 
        positionOfMonthToYear = oj.LocaleData.isMonthPriorToYear() ? "before" : "after", 
        html = "<div class='oj-datepicker-title' role='header'>", monthHtml = "", 
        wDisabled = this.options["disabled"];

    // month selection
    if (secondary || changeMonth === "none")
    {
      monthHtml += "<span class='oj-datepicker-month'>" + monthNames[drawMonth] + "</span>";
    }
    else 
    {
      inMinYear = (minDate && minDate.getFullYear() === drawYear);
      inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
      monthHtml += "<select tabindex='-1' class='oj-datepicker-month " + (wDisabled ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler='selectMonth' data-event='change' role='listbox'>";
      for (month = 0;month < 12;month++)
      {
        if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth()))
        {
          monthHtml += "<option role='option' value='" + month + "' aria-selected='" + (month === drawMonth ? "true' selected='selected'" : "false'") + ">" + monthNamesShort[month] + "</option>";
        }
      }
      monthHtml += "</select>";
    }

    if (positionOfMonthToYear === "before")
    {
      html += monthHtml + (secondary || !((changeMonth === "select") && (changeYear === "select")) ? "&#xa0;" : "");
    }

    // year selection
    if (!this.yearshtml)
    {
      this.yearshtml = "";
      if (secondary || changeYear === "none")
      {
        html += "<span class='oj-datepicker-year'>" + yearDisplay.format(new Date(drawYear, drawMonth, 1).toISOString()) + "</span>";
      }
      else 
      {
        // determine range of years to display
        years = this.options["datePicker"]["yearRange"].split(":");
        thisYear = new Date().getFullYear();
        determineYear = function (value)
        {
          var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
          return (isNaN(year) ? thisYear : year);
        };
        year = determineYear(years[0]);
        endYear = Math.max(year, determineYear(years[1] || ""));
        year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
        endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
        this.yearshtml += "<select tabindex='-1' class='oj-datepicker-year " + (wDisabled ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler='selectYear' data-event='change' role='listbox'>";
        for (;year <= endYear;year++)
        {
          this.yearshtml += "<option role='option' value='" + year + "' aria-selected='" + (year === drawYear ? "true' selected='selected'" : "false'") + ">" + yearDisplay.format(new Date(year, drawMonth, 1).toISOString()) + "</option>";
        }
        this.yearshtml += "</select>";

        html += this.yearshtml;
        this.yearshtml = null;
      }
    }

    if (positionOfMonthToYear === "after")
    {
      html += (secondary || !((changeMonth === "select") && (changeYear === "select")) ? "&#xa0;" : "") + monthHtml;
    }
    html += "<span class='oj-helper-hidden-accessible' id='" + this._GetSubId(this._CALENDAR_DESCRIPTION_ID) + "'>" + monthNames[drawMonth] + " " + yearDisplay.format(new Date(drawYear, drawMonth, 1).toISOString()) + "</span>";
    html += "<span class='oj-helper-hidden-accessible' id='" + this._GetSubId(this._DATEPICKER_DESCRIPTION_ID) + "'>" + this.getTranslatedString("datePicker") + "</span>";
    html += "</div>";// Close datepicker_header
    return html;
  },

  /**
   * Adjust one of the date sub-fields.
   * 
   * @private
   */
  _adjustInstDate : function __adjustInstDate(offset, period)
  {
    var year = this._drawYear + (period === "Y" ? offset : 0), 
        month = this._drawMonth + (period === "M" ? offset : 0), 
        day = Math.min(this._currentDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0), 
        date = new Date(year, month, day);

    this._currentDay = date.getDate();
    this._drawMonth = this._currentMonth = date.getMonth();
    this._drawYear = this._currentYear = date.getFullYear();
  },

  /**
   * Determine the number of months to show.
   * 
   * @private
   */
  _getNumberOfMonths : function __getNumberOfMonths()
  {
    var numMonths = this.options["datePicker"]["numberOfMonths"];
    numMonths = typeof numMonths === "string" ? parseInt(numMonths, 10) : numMonths;
    return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
  },

  /**
   * Determine the current maximum date - ensure no time components are set.
   * 
   * @private
   */
  _getMinMaxDate : function __getMinMaxDate(minMax)
  {
    return this._determineDate(this.options[minMax], null);
  },

  /**
   * Find the number of days in a given month.
   * 
   * @private
   */
  _getDaysInMonth : function __getDaysInMonth(year, month)
  {
    return 32 - new Date(year, month, 32).getDate();
  },

  /**
   * Find the day of the week of the first of a month.
   * 
   * @private
   */
  _getFirstDayOfMonth : function __getFirstDayOfMonth(year, month)
  {
    return new Date(year, month, 1).getDay();
  },

  /**
   * Determines if we should allow a "next/prev" month display change.
   * 
   * @private
   */
  _canAdjustMonth : function __canAdjustMonth(offset, curYear, curMonth)
  {
    var numMonths = this._getNumberOfMonths(), date = new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1);

    if (offset < 0)
    {
      date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
    }
    return this._isInRange(date);
  },

  /**
   * Is the given date in the accepted range? 
   * 
   * @private
   */
  _isInRange : function __isInRange(date)
  {
    var yearSplit, currentYear, minDate = this._getMinMaxDate("min"), maxDate = this._getMinMaxDate("max"), minYear = null, maxYear = null, years = this.options["datePicker"]["yearRange"];
    if (years)
    {
      yearSplit = years.split(":");
      currentYear = new Date().getFullYear();
      minYear = parseInt(yearSplit[0], 10);
      maxYear = parseInt(yearSplit[1], 10);
      if (yearSplit[0].match(/[+\-].*/))
      {
        minYear += currentYear;
      }
      if (yearSplit[1].match(/[+\-].*/))
      {
        maxYear += currentYear;
      }
    }

    return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear));
  },
  
  /**
   * To disable or enable the widget
   * 
   * @private
   * @instance
   */
  _disableEnable : function __disableEnable(val)
  {
    if (this._triggerNode)
    {
      disableEnableSpan(this._triggerNode.children(), val);
    }
    
    if(val) 
    {
      this.hide();
    }
    
    //need to update the look, note that if it is displaying the datepicker dropdown it would be hidden in _setOption function
    if(this._isInLine) 
    {
      this._updateDatepicker();
    }
  },
  
  /**
   * Invoke super only if it is not inline
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */
  _AppendInputHelper : function __AppendInputHelper()
  {
    if (!this._isInLine)
    {
      this._superApply(arguments);
    }
  },
  
  /**
   * This handler will set the value from the input text element. 
   * 
   * @ignore
   * @protected
   * @override
   * @param {Event} event
   * @instance
   * @memberof! oj.ojInputDate
   */
  _onBlurHandler : function __onBlurHandler(event)
  {
    if(this._isInLine) 
    {
      return;
    }
    
    this._superApply(arguments);
  },
  
  /**
   * This handler will be invoked when keydown is triggered for this.element. When is of inline ignore the keydowns
   * 
   * @ignore
   * @protected
   * @override
   * @param {Event} event
   * @instance
   * @memberof! oj.ojInputDate
   */
  _onKeyDownHandler : function __onKeyDownHandler(event) 
  {
    if(this._isInLine) 
    {
      return;
    }
    
    this._superApply(arguments);
    
    var kc = $.ui.keyCode, 
        handled = false;

    if (this._datepickerShowing())
    {

      switch (event.keyCode)
      {
        case kc.TAB: 
          this.hide();
          break;
        case kc.ESCAPE:
          this.hide();
          handled = true;
          break;
        case kc.UP: ;
        case kc.DOWN:
          this._dpDiv.find(".oj-datepicker-calendar").focus();
          handled = true;
          break;
        default: ;
      }

    }
    else 
    {

      switch (event.keyCode)
      {
        case kc.UP: ;
        case kc.DOWN:
          this.show();
          handled = true;
          break;
        default: ;
      }

    }

    if (handled)
    {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  },
  
  /**
   * Ignore for when of inline, since then this.element would be of div and has a funky nature
   * 
   * @param {String} displayValue of the new string to be displayed
   * 
   * @memberof! oj.ojInputDate
   * @instance
   * @protected
   * @override
  */  
  _SetDisplayValue : function (displayValue) 
  {
    if(!this._isInLine) 
    {
      this._superApply(arguments);
    }
    
    this._setCurrentDate(this._getDate());
    
    //so this is a change in behavior from original design. Previously it was decided that app developer 
    //would have to invoke refresh to render the calendar after setting the new value programatically; however now it is 
    //required to hook it in when _SetDisplayValue is invoked [can't use _SetValue b/c that function is not invoked 
    //when developer invokes ("option", "value", new Date().toISOString())
    if(this._datepickerShowing())
    {
      this._updateDatepicker();
    }
  },
  
  /**
   * Need to override since apparently we allow users to set the converter to null, undefined, and etc and when 
   * they do we use the default converter
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof! oj.ojInputDate
   * @instance
   * @protected
   * @override
   */
  _GetConverter : function () 
  {
    return this.options['converter'] ? 
        this._superApply(arguments) : 
        $["oj"]["ojInputDate"]["prototype"]["options"]["converter"];
  },

  /**
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */
  _GetElementValue : function ()
  {
    return this.options['value'] || "";
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputdate";
  },
  
  /**
   * Sets up the default dateTimeRange and dateRestriction validators.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */
  _GetImplicitValidators : function ()
  {
    var ret = this._superApply(arguments),
        minDate = this.options['min'],
        maxDate = this.options['max'],
        dateTimeRangeOptions = {}, dateRestrictionOptions = {};
    
    if(minDate != null || maxDate != null) 
    {
      //need to alter how the default validators work as validators are now immutable
      dateTimeRangeOptions = {'min': this.options['min'], 
                              'max': this.options['max'],
                              'converter': this._GetConverter()};
      this._datePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE] = 
              oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE).createValidator(dateTimeRangeOptions);
    }
    
    if(this.options["dayFormatter"] != null) 
    {
      dateRestrictionOptions = {'dayFormatter': this.options["dayFormatter"], 
                                'converter': this._GetConverter()};
      this._datePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION] = 
            oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATERESTRICTION).createValidator(dateRestrictionOptions);
    }
    
    return $.extend(this._datePickerDefaultValidators, ret);
  },
  
  /**
   * Gets today's date w/o time
   * 
   * @private
   * @return {Object} date
   */
  _getTodayDate : function __getTodayDate()
  {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  },

  /**
   * Retrieve the default date shown on opening.
   * 
   * @private
   */
  _getDate : function __getDate()
  {
    return this._determineDate(this.options['value'], this._getTodayDate());
  },

  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * 
   * @expose
   * @override
   * @memberof! oj.ojInputDate
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   *                        look up the subcomponent associated with that string.  It contains:<p>
   *                        component: optional - in the future there may be more than one component contained within a page element<p>
   *                        subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Object|null} the subcomponent located by the subId string passed in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    var node = null,
        subId = locator && locator['subId'],
        dpDiv = this._dpDiv;
    
    if(subId) 
    {
      switch(subId) 
      {
      case "oj-datepicker-content": node = dpDiv[0]; break;
      case "oj-inputdatetime-calendar-icon": node = $(".oj-inputdatetime-calendar-icon", this._triggerNode)[0]; break;
      case "oj-datepicker-prev-icon": node = $(".oj-datepicker-prev-icon", dpDiv)[0]; break;
      case "oj-datepicker-next-icon": node = $(".oj-datepicker-next-icon", dpDiv)[0]; break;
      case "oj-datepicker-month": node = $(".oj-datepicker-month", dpDiv)[0]; break;
      case "oj-datepicker-year": node = $(".oj-datepicker-year", dpDiv)[0]; break;
      case "oj-datepicker-current": node = $(".oj-datepicker-current", dpDiv)[0]; break;
      default: node = null;
      }
    }
    
    // Non-null locators have to be handled by the component subclasses
    return node || this._superApply(arguments);
  },
  
  /**
   * Returns the subId string for the given child DOM node.  For more details, see 
   * <a href="#getNodeBySubId">getNodeBySubId</a>.
   * 
   * @expose
   * @override
   * @memberof oj.ojInputDate
   * @instance
   * 
   * @param {!Element} node - child DOM node
   * @return {string|null} The subId for the DOM node, or <code class="prettyprint">null</code> when none is found.
   * 
   * @example <caption>Get the subId for a certain DOM node:</caption>
   * // Foo is ojInputNumber, ojInputDate, etc.
   * var subId = $( ".selector" ).ojFoo( "getSubIdByNode", nodeInsideComponent );
   */
  getSubIdByNode: function(node)
  {
    var dpDiv = this._dpDiv,
        subId = null,
        checks = [{"selector": ".oj-inputdatetime-calendar-icon", "ele": this._triggerNode},
                  {"selector": ".oj-datepicker-prev-icon", "ele": dpDiv},
                  {"selector": ".oj-datepicker-next-icon", "ele": dpDiv},
                  {"selector": ".oj-datepicker-month", "ele": dpDiv},
                  {"selector": ".oj-datepicker-year", "ele": dpDiv},
                  {"selector": ".oj-datepicker-current", "ele": dpDiv}];
    
    if(node === dpDiv[0]) 
    {
      return "oj-datepicker-content";
    }
    
    for(var i=0, j=checks.length; i < j; i++) 
    {
      var map = checks[i],
          entry = $(map["selector"], map["ele"]);
      
      if(entry.length === 1 && entry[0] === node) 
      {
        subId = map["selector"].substr(1);
        break;
      }
    }
    
    return subId || this._superApply(arguments);
  },
  
  /** 
   * Hides the datepicker
   * 
   * @expose 
   * @memberof! oj.ojInputDate
   * @instance
   */
  hide : function __hide()
  {

    if (this._datepickerShowing() && !this._isInLine)
    {
      this._popUpDpDiv.ojPopup("close");
      
      if(this.options["datePicker"]["showOn"] === "focus") 
      {
        this._ignoreShow = true;
      }
      this.element.focus();
    }

    return this;
  },
  
  /** 
   * @expose
   * @memberof! oj.ojInputDate
   * @instance
   */
  refresh : function __refresh()
  {
    return this._superApply(arguments) || this;
  },

  /**
   * Shows the datepicker
   * 
   * @expose
   * @memberof! oj.ojInputDate
   * @instance
   */
  show : function __show()
  {
    if (this._datepickerShowing() || this.options["disabled"] || this.options["readOnly"])
    {
      return;
    }
    
    if (this._ignoreShow) 
    {
      //set within hide or elsewhere and focus is placed back on this.element
      this._ignoreShow = false;
      return;
    }

    var rtl = this._IsRTL();

    //to avoid flashes on Firefox
    this._dpDiv.empty();
    this._updateDatepicker();
    
    // Since the popup is reparented to the body, it looses associate in the dom.
    // Establish linkage between the popup and the datepicker.
    var widget = this.widget();
    var surrogateId = !widget.is("[id]") ? widget.uniqueId().attr("id") : widget.attr("id");
    this._popUpDpDiv.ojPopup("widget").attr(oj.DomUtils.SURROGATE_ID, surrogateId);

    this._popUpDpDiv.ojPopup("open", this.element, {"my" : rtl ? "right top" : "left top", 
                              "at" : rtl ? "right bottom" : "left bottom", "collision" : "fit"});
    
    return this;
  }
  
});

// Add custom getters for properties from the LocaleElements bundle
oj.Components.setDefaultOptions(
  {
    'ojInputDate': 
    {
      'firstDayOfWeek': oj.Components.createDynamicPropertyGetter(
        function() 
        {
           return oj.LocaleData.getFirstDayOfWeek();
        }),
        
      'dayWide': oj.Components.createDynamicPropertyGetter(
        function() 
        {
           return oj.LocaleData.getDayNames("wide");
        }),
        
      'dayNarrow': oj.Components.createDynamicPropertyGetter(
        function() 
        {
            return oj.LocaleData.getDayNames("narrow");
        }),
        
      'monthWide': oj.Components.createDynamicPropertyGetter(
        function() 
        {
           return oj.LocaleData.getMonthNames("wide");
        }),
        
      'monthAbbreviated': oj.Components.createDynamicPropertyGetter(
        function() 
        {
           return oj.LocaleData.getMonthNames("abbreviated");
        })
    }
  }
);

//////////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the calendar drop down node.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-content
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the calendar drop down node:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-content'} );
 */

/**
 * <p>Sub-ID for the calendar icon that triggers the calendar drop down.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-inputdatetime-calendar-icon
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the calendar icon that triggers the calendar drop down:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-inputdatetime-calendar-icon'} );
 */
 
/**
 * <p>Sub-ID for the previous month icon.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-prev-icon
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the previous month icon:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-prev-icon'} );
 */

/**
 * <p>Sub-ID for the next month icon.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-next-icon
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the next month icon:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-next-icon'} );
 */

/**
 * <p>Sub-ID for the month span or select element.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-month
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the month span or select element:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-month'} );
 */
 
/**
 * <p>Sub-ID for the year span or select element.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-year
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the year span or select element:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-year'} );
 */
 
/**
 * <p>Sub-ID for the current/today button for button bar.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-datepicker-current
 * @memberof oj.ojInputDate
 * @instance
 * 
 * @example <caption>Get the current/today button for button bar:</caption>
 * // Foo is ojInputDate or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-datepicker-current'} );
 */
 
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.ojInputTime
 * @augments oj.inputBase
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputTimeOverview-section">
 *   JET ojInputTime Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputTimeOverview-section"></a>
 * </h3>
 * 
 * <p>Description: ojInputTime provides a simple time selection drop down.
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputTime" )            // selects all JET input on the page
 * </code>
 * </pre>
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="timeId" data-bind="ojComponent: {component: 'ojInputTime'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputTime
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputTime();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputTime( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="timeId" data-bind="ojComponent: {component: 'ojInputTime'}" /&gt;
 */
oj.__registerWidget("oj.ojInputTime", $['oj']['inputBase'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  
  //-------------------------------------From base---------------------------------------------------//
  _CLASS_NAMES : "oj-inputdatetime-input",
  _WIDGET_CLASS_NAMES : "oj-inputdatetime-time-only oj-component oj-inputdatetime oj-inputdatetime-input-container",
  _INPUT_HELPER_KEY: "inputHelp",
  _ATTR_CHECK : [{"attr": "type", "setMandatory": "text"}],
  //-------------------------------------End from base-----------------------------------------------//
  
  _TIME_PICKER_ID : "ojInputTime", 
  _TRIGGER_CLASS : "oj-inputdatetime-input-trigger",
  _TRIGGER_TIME_CLASS : "oj-inputdatetime-time-icon",
  
  options : 
  {
    /**
     * Default converter for ojInputTime
     *
     * If one wishes to provide a custom converter for the ojInputTime override the factory returned for
     * oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME)
     *
     * @expose
     * @memberof! oj.ojInputTime
     * @instance
     * @default <code class="prettyprint">oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({"hour": "2-digit", "hour12": true, "minute": "2-digit"})</code>
     */
    converter : oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(
    {
      "hour" : "2-digit", "hour12" : true, "minute" : "2-digit"
    }),
    
    /**
     * The maximum selectable date. When set to null, there is no maximum.
     *
     * <ul>
     *  <li> type string - ISOString
     *  <li> null - no limit
     * </ul>
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputTime
     * @default <code class="prettyprint">null</code>
     */
    max : undefined, 
    
    /**
     * The minimum selectable date. When set to null, there is no minimum.
     *
     * <ul>
     *  <li> type string - ISOString
     *  <li> null - no limit
     * </ul>
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputTime
     * @default <code class="prettyprint">null</code>
     */
    min : undefined, 
    
    /**
     * JSON data passed when the widget is of ojInputDateTime
     * 
     * {
     *  widget : dateTimePickerInstance,
     *  inline: true|false
     * }
     * 
     * @expose
     * @memberof! oj.ojInputTime
     * @instance
     * @private
     */
    datePickerComp : null,
    
    /**
     * <p>
     * The properties supported on the timePicker option are:
     * @property {string=} timeIncrement Time increment to be used for ojInputTime, the format is hh:mm:ss:SS. <br/><br/>
     * 
     * The default value is <code class="prettyprint">{timePicker: {timeIncrement': "00:30:00:00"}}</code>. <br/><br/>
     * Example <code class="prettyprint">$(".selector").ojInputTime("option", "timePicker.timeIncrement", "00:10:00:00");</code>
     * </p>
     * 
     * @expose
     * @instance
     * @memberof! oj.ojInputTime
     */
    timePicker: 
    {
      /**
       * @expose
       */
      timeIncrement : "00:30:00:00"
    }
    
    // DOCLETS 

    /** 
     * The placeholder text to set on the element. Though it is possible to set placeholder 
     * attribute on the element itself, the component will only read the value when the component
     * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
     * and page authors should update the option directly.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;input id="date" data-bind="ojComponent: {component: 'ojInputTime', placeholder: 'Birth Date'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;input id="date" data-bind="ojComponent: {component: 'ojInputTime'}" placeholder="User Name" /&gt;
     * 
     * @default when the option is not set, the element's placeholder attribute is used if it exists. 
     * If the attribute is not set then the default can be the converter hint provided by the 
     * datetime converter. See displayOptions for details.
     * 
     * @access public
     * @instance
     * @expose 
     * @name placeholder
     * @instance
     * @memberof! oj.ojInputTime
     */    
    
    /** 
     * The value of the ojInputTime component which should be an ISOString.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputTime({'value': new Date().toISOString()});<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns Today's date in ISOString
     * $(".selector").ojInputTime("option", "value");
     * // Setter: sets it to a different date
     * $(".selector").ojInputTime("option", "value", new Date(2013, 0, 1, 0, 0, 0, 0).toISOString());
     * 
     * @expose 
     * @name value
     * @instance
     * @memberof! oj.ojInputTime
     * @default When the option is not set, the element's value property is used as its initial value 
     * if it exists. This value must be an ISOString.
     */
    
  },
  
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    var props = [{"attribute": "disabled", "defaultOptionValue": false, "validateOption": true},
                 {"attribute": "title", "defaultOptionValue": ""},
                 {"attribute": "placeholder", "defaultOptionValue": ""},
                 {"attribute": "value", "defaultOptionValue": null},
                 {"attribute": "required", "defaultOptionValue": false, 
                  "coerceDomValue": true, "validateOption": true},
                 {"attribute": "min", "defaultOptionValue": null},
                 {"attribute": "max", "defaultOptionValue": null}]; 
    
    this._super(originalDefaults, constructorOptions);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);
  },
  
  /**
   * @ignore
   */
  _InitBase : function __InitBase() 
  {
    this._timePickerDefaultValidators = {};
    
    this._datePickerComp = this.options["datePickerComp"];
    
    this._timePickerDisplay = $("<div id='" + this._GetSubId(this._TIME_PICKER_ID) + "' class='oj-listbox-drop' style='display:none'></div>");
    $("body").append(this._timePickerDisplay);
    
    var self = this;
    this._popUpTimePickerDisplay = this._timePickerDisplay.ojPopup({
                                              "initialFocus": "none", 
                                              "rootAttributes": {"class": "datetimepicker-dropdown"},
                                              "open": function () {
                              
                              var selected = $("[aria-selected]", self._timePickerDisplay);
                              if (selected.length === 1)
                              {
                                self._checkScrollTop($(selected));
                              }
                          
                              $("ul", self._timePickerDisplay).focus();
                          }});
  },
  
  _timepickerShowing: function () 
  {
    return this._popUpTimePickerDisplay.ojPopup("isOpen");
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputTime
   */
  _ComponentCreate : function __ComponentCreate()
  {
    this._InitBase();
    
    var ret = this._superApply(arguments);
    
    if (this._isContainedInDateTimePicker() && !this._isDatePickerInline())
    {
      //set to nothing since then of not inline and don't want to place two component classes to 
      //the same input element
      this._CLASS_NAMES = "";
    }
    
    this._attachTrigger();
    
    return ret;
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputTime
   */        
  _AfterCreate : function () 
  {
    var ret = this._superApply(arguments);
    
    disableEnableSpan(this._triggerNode.children(), this.options["disabled"]);
    
    return ret;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _setOption : function __setOption(key, value, flags)
  {
    var retVal = null,
        timeRangeOptions = {};
    
    //When a null, undefined, or "" value is passed in set to null for consistency
    //note that if they pass in 0 it will also set it null
    if (key === "value")
    {
      if(!value) 
      {
        value = null;
      }
      
      retVal = this._super(key, value, flags);
      this._generateTime();
      return retVal;
    }
    
    retVal = this._superApply(arguments);

    if(key === "disabled") 
    {
      if(value) 
      {
        this.hide();
      }
      disableEnableSpan(this._triggerNode.children(), value);
    }
    else if ((key === "max" || key === "min") && this._isIndependentInput())
    {
      //since validators are immutable, they will contain min + max as local values. B/c of this will need to recreate
      timeRangeOptions = {'min': this.options['min'], 
          'max': this.options['max'],
          'converter': this._GetConverter()};

      this._timePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE] = 
        oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE).createValidator(timeRangeOptions);
      
      this._AfterSetOptionValidators();
    }
    else if(key === "readOnly" && value) 
    {
      this.hide();
    }
    
    var redrawTimePicker = {"max": true, "min": true, "converter": true, "timePicker": true};
    if(key in redrawTimePicker) 
    {
      //changing back to original code of invoking _generateTime per discussion
      this._generateTime();
    }
 
    return retVal;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function __destroy()
  {
    var retVal = this._super();
    
    if (this._triggerNode)
    {
      this._triggerNode.remove();
    }

    this._timePickerDisplay.remove();
    
    return retVal;
  },
  
  /**
   * Invoke super only if it is standlone or if it is part of ojInputDateTime and ojInputDateTime is inline
   * 
   * @ignore
   * @protected
   * @override
   */
  _AppendInputHelper : function __AppendInputHelper()
  {
    if (this._isIndependentInput())
    {
      this._superApply(arguments);
    }
  },
  
  /**
   * Need to override due to usage of display: inline-table [as otherwise for webkit the hidden content takes up 
   * descent amount of space]
   *  
   * @protected
   * @instance
   * @memberOf !oj.ojInputTime
   */
  _AppendInputHelperParent : function __AppendInputHelperParent() 
  {
    return this._triggerNode;
  },
  
  /**
   * Only time to have ojInputTime handle the display of timepicker by keyDown is when datePickerComp reference is null or 
   * when it is not null and is inline
   * 
   * @ignore
   * @protected
   * @override
   * @param {Event} event
   */
  _onKeyDownHandler : function __onKeyDownHandler(event) 
  {
    if(this._isIndependentInput()) 
    {
      this._superApply(arguments);
      
      var kc = $.ui.keyCode, 
        handled = false;
      
      if (this._timepickerShowing())
      {
        switch (event.keyCode)
        {
          case kc.TAB: ;
            this.hide();
            break;
          case kc.ESCAPE:
            this.hide();
            handled = true;
            break;
          case kc.UP: ;
          case kc.DOWN:
            $("ul", this._timePickerDisplay).focus();
            handled = true;
            break;
        }
      }
      else 
      {
        switch (event.keyCode)
        {
          case kc.UP: ;
          case kc.DOWN:
            this.show();
            handled = true;
            break;
        }
      }
  
      if (handled || event.keyCode === kc.ENTER)
      {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }
  },
  
  /**
   * This function will create the necessary time trigger container [i.e. image to launch the time drop down] 
   * and perform any attachment to events
   * 
   * @private
   */
  _attachTrigger : function __attachTrigger()
  {

    //only time to create one's own span element is when datePickerComp reference is null or when it is not null and is inline
    var createNewSpan = this._isIndependentInput(), 
        triggerContainer = createNewSpan ? $($("<span>").addClass(this._TRIGGER_CLASS)) : $("+ span", this.element),
        triggerTime = $("<span/>").addClass(this._TRIGGER_TIME_CLASS + " oj-clickable-icon oj-component-icon");

    triggerContainer.append(triggerTime);
    
    var self = this;
    triggerTime.on("click", function ()
    {
      if (self._timepickerShowing())
      {
        self.hide();
      }
      else 
      {
        self.show();
      }
    }).on("mouseenter", function() 
    {
      $(this).addClass("oj-hover");
    }).on("mousedown", function() 
    {
      $(this).addClass("oj-active");
    }).on("mouseleave", function() 
    {
      $(this).removeClass("oj-hover oj-active");
    });
    
    this._triggerNode = triggerContainer;
    if (createNewSpan)
    {
      this.element.after(triggerContainer);
    }
  },
  
  /**
   * Returns a boolean of whether the date is in the min + max range
   * 
   * @private
   */
  _inMinMaxRange : function __inMinMaxRange(date) 
  {
    var minDate = this.options["min"] ? oj.IntlConverterUtils.isoToLocalDate(this.options["min"]) : null,
        maxDate = this.options["max"] ? oj.IntlConverterUtils.isoToLocalDate(this.options["max"]) : null;
    
    return (minDate !== null && date < minDate) || (maxDate !== null && date > maxDate);
  },
  
  /**
   * This function will generate the time drop down 
   * 
   * @private
   */
  _generateTime : function __generateTime()
  {

    var processDate = this.options["value"] ? oj.IntlConverterUtils.isoToLocalDate(this.options["value"]) : new Date(), //don't care about year, month, and date since will generate by time
        timeNode = $("<ul class='oj-listbox-results' tabindex='-1' role='listbox'></ul>"), 
        selectedDateFormat = this._getFormattedValue(), source = [], i, j;

    processDate.setHours(0);
    processDate.setMinutes(0);
    processDate.setSeconds(0);
    processDate.setMilliseconds(0);

    source = this._getTimeSource(processDate);
    selectedDateFormat = selectedDateFormat || source[0].value; //either choose the selected date or if it doesn't exist the first value

    this._timePickerDisplay.empty();

    for (i = 0, j = source.length;i < j;i++)
    {
      var value = source[i].value,
          minMaxRange = source[i]["minMaxRange"],
          liNode = $("<li class='oj-listbox-result " + (minMaxRange ? "oj-disabled" : "") + "' role='presentation'>"),
          nodeId = this["uuid"] + "_sel" + i,
          node = $("<div class='oj-listbox-result-label' " + (minMaxRange ? "aria-disabled " : "") + "data-value='" + value + "' role='option' id='" + 
                    nodeId + "'>" + source[i].label + "</li>");

      if (selectedDateFormat === value)
      {
        node.attr("aria-selected", "true");
        liNode.addClass("oj-hover"); //TODO When combo box changes it's CSS to Jet specific [i.e. oj-selected or something else] make the same change
        timeNode.attr("aria-activedescendant", nodeId);
      }
      
      liNode.append(node);
      timeNode.append(liNode);
    }

    this._timePickerDisplay.append(timeNode);
    
    $(".oj-listbox-result", timeNode).on("mousemove", function ()
    {
      var ref = $(this);
      
      if(ref.hasClass("oj-disabled")) 
      {
        //ignore disabled entries
        return;
      }
      
      $(".oj-hover", timeNode).removeClass("oj-hover"); //remove previously selected entry TODO modify when combo box changes
      
      ref.addClass("oj-hover"); //TODO modify when combo box changes its CSS selection identifier
      
      timeNode.attr("aria-activedescendant", ref.children()[0].id);
    });

    var self = this;
    timeNode.on("click", function (event)
    {
      var target = $(event.target);
      
      if(target.hasClass("oj-disabled") || target.attr("aria-disabled") !== undefined) 
      {
        //disabled
        return;
      }
      
      self.hide();
      self._processTimeSelection(event);
    }).on("keydown", function (event)
    {
      self._timeNodeKeyDown(event);
    });

  },
  
  /**
   * This function will return an array of JSON objects of label + value for the 
   * time drop down
   * 
   * @private
   * @param {Object} date to get timeSource of
   * @return {Array} source
   */
  _getTimeSource : function __getTimeSource(date)
  {
    var source = [], 
        converter = this._GetConverter();

    if (date)
    {
      var timeIncrement = this.options["timePicker"]["timeIncrement"],
          splitted = timeIncrement.split(":");
      
      if (splitted.length === 4)
      {
        var increments = {
                            hourIncr : parseInt(splitted[0].substring(0), 10), 
                            minuteIncr : parseInt(splitted[1], 10), 
                            secondIncr : parseInt(splitted[2], 10), 
                            millisecondIncr : parseInt(splitted[3], 10)
                          };

        var processDate = new Date(date), formatted = "";
        //continue until day differs
        do 
        {
          formatted = converter.format(processDate.toISOString());
          source.push(
          {
            label : formatted, value : formatted, "minMaxRange" : this._inMinMaxRange(processDate)
          });
          processDate.setHours(processDate.getHours() + increments.hourIncr);
          processDate.setMinutes(processDate.getMinutes() + increments.minuteIncr);
          processDate.setSeconds(processDate.getSeconds() + increments.secondIncr);
          processDate.setMilliseconds(processDate.getMilliseconds() + increments.millisecondIncr);
        }
        while (processDate.getDate() === date.getDate());
      }
      else 
      {
        throw new Error("timeIncrement value should be in the format of hh:mm:ss:SS");
      }
      
    }

    return source;
  },
  
  //This handler is when an user keys down with the drop down has focus
  _timeNodeKeyDown : function __timeNodeKeyDown(event)
  {

    if (this._timepickerShowing())
    {

      var kc = $.ui.keyCode, 
          handled = false;

      switch (event.keyCode)
      {
        case kc.TAB: ;
          this.hide();
          break;
        case kc.ESCAPE:
          this.hide();
          this.element.focus();
          handled = true;
          break;
        case kc.UP:
          this._processNextPrevSibling(event, "prev");
          handled = true;
          break;
        case kc.DOWN:
          this._processNextPrevSibling(event, "next");
          handled = true;
          break;
        case kc.ENTER:
          this._processTimeSelection(event);
          handled = true;
          break;
      }

      if (handled)
      {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }
  },
  
  /**
   * This function will set the oj-hover to the next or previous sibling due to key down or key up stroke
   * 
   * @private
   * @param {Event} event
   * @param {string} prevOrNext
   */
  _processNextPrevSibling : function __processNextPrevSibling(event, prevOrNext)
  {
    var prevActive = $(".oj-hover", this._timePickerDisplay), //TODO update when combobox updates their selector CSS
        ulElement = $("ul", this._timePickerDisplay);
    
    if (prevActive.length === 1)
    {
      var node = prevActive[prevOrNext]();
      if (node.length === 1)
      {
        prevActive.removeClass("oj-hover"); //TODO update when combobox updates their selector CSS
        node.addClass("oj-hover");  //TODO update when combobox updates their selector CSS
        ulElement.attr("aria-activedescendant", node.children()[0].id);
        this._checkScrollTop(node);
      }
    }
  },
  
  /**
   * This handler is when an user selects a time entry
   * 
   * @private
   * @param {Event} event
   */
  _processTimeSelection : function __processTimeSelection(event)
  {

    var timePickerDisplay = this._timePickerDisplay, 
        prevSelected = $("[aria-selected]", timePickerDisplay), 
        ulElement = $("ul", timePickerDisplay), 
        selected = $(".oj-hover div", timePickerDisplay); //TODO update when combobox updates their selector CSS

    if (selected.length !== 1)
    {
      return;
    }
    
    if(prevSelected.length === 1)
    {
      //previous selection can be 0 so remove only when of size 1
      prevSelected.removeAttr("aria-selected");
      prevSelected.parent().removeClass("oj-hover");  //TODO update when combobox updates their selector CSS
    }
    
    selected.attr("aria-selected", "true");
    selected.parent().addClass("oj-hover"); //TODO update when combobox updates their selector CSS
    
    this._SetDisplayValue(selected.attr("data-value")); //requirement to invoke _SetDisplayValue since _SetValue doesn't invoke it
    this._SetValue(selected.attr("data-value"), event);
    
    ulElement.attr("aria-activedescendant", selected[0].id);
    
    this.hide();
    
    this.element.focus();
    
    if (this._isContainedInDateTimePicker())
    {
      //when focus is placed on the input, since datePickerComp w/ showOn of focus can display it
      this._datePickerComp["widget"].hide();
    }
  },
  
  /**
   * Invoked when blur is triggered of the this.element
   * 
   * @ignore
   * @protected
   * @param {Event} event
   */
  _onBlurHandler : function __onBlurHandler(event) 
  {
    if(this._isIndependentInput())
    {
      this._superApply(arguments);
    }
  },
  
  /** 
   * Shows the timepicker
   * 
   * @expose 
   * @instance
   * @memberof! oj.ojInputTime
   */
  show : function __show()
  {
    if (this.options["disabled"] || this.options["readOnly"])
    {
      return;
    }

    if (this._isContainedInDateTimePicker())
    {
      //need to hide the datePickerComp prior to showing timepicker
      this._datePickerComp["widget"].hide();
    }
    
    //lazily generate
    if (this._timePickerDisplay.children().length === 0)
    {
      this._generateTime();
    }
    
    //Need to set the width to align with what combobox does
    this._timePickerDisplay.width(this.element.parent().width());
    
    //TODO REMOVE LATER WHEN THE CSS HAS BEEN MODIFIED for oj-listbox-drop, causes the popup to think it's not visible 
    //due to offsetwidth + offsetheight being 0
    this._timePickerDisplay.css({"position": "relative"});
    
    var rtl = this._IsRTL();

    // Since the popup is reparented to the body, it looses associate in the dom.
    // Establish linkage between the popup and the timepicker.
    var widget = this.widget();
    var surrogateId = !widget.is("[id]") ? widget.uniqueId().attr("id") : widget.attr("id");
    this._popUpTimePickerDisplay.ojPopup("widget").attr(oj.DomUtils.SURROGATE_ID, surrogateId);

    this._popUpTimePickerDisplay.ojPopup("open", this.element, {"my" : rtl ? "right top" : "left top", 
                                          "at" : rtl ? "right bottom" : "left bottom", "collision" : "fit"});
    
  },
  
  /** 
   * Hides the timepicker
   * 
   * @expose 
   * @instance
   * @memberof! oj.ojInputTime
   */
  hide : function __hide()
  {
    if (this._timepickerShowing())
    {
      this._popUpTimePickerDisplay.ojPopup("close");
      this.element.focus();
    }
  },
  
  /** 
   * @expose 
   * @instance
   * @memberof! oj.ojInputTime
   */
  refresh : function __refresh()
  {
    return this._superApply(arguments) || this;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputTime
   */
  _SetDisplayValue : function __setDisplayValue(displayValue)
  {
    //When not part of datePickerComp or of inline should update input element
    if (this._isIndependentInput())
    {
      this._superApply(arguments);
    }
    
    //so this is a change in behavior from original design. Previously it was decided that app developer 
    //would have to invoke refresh to render the calendar after setting the new value programatically; however now it is 
    //required to hook it in when _SetDisplayValue is invoked [can't use _SetValue b/c that function is not invoked 
    //when developer invokes ("option", "value", new Date())
    if(this._timepickerShowing()) 
    {
      this._generateTime();
    }
  },
  
  /**
   * Whether the this.element should be wrapped. Function so that additional conditions can be placed
   * 
   * @ignore
   * @protected
   * @override
   * @return {boolean}
   */
  _DoWrapElement : function ()
  {
    return this._isIndependentInput();
  },
  
  /**
   * Whether the input element of ojInputTime is shared or not [i.e. not part of ojInputDateTime or if it has 
   * been created by ojInputDateTime that is inline
   * 
   * @ignore
   * @return {boolean}
   */
  _isIndependentInput : function __isIndependentInput()
  {
    return !this._isContainedInDateTimePicker() || this._isDatePickerInline();
  },
  
  /**
   * @protected
   * @override
   * @return {string}
   * @instance
   * @memberof! oj.ojInputTime
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputtime";
  },
  
  /**
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputTime
   */
  _GetElementValue : function ()
  {
    return this.options['value'] || "";
  },
  
  /**
   * Sets up the default dateTimeRange and dateRestriction validators.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDate
   */
  _GetImplicitValidators : function ()
  {
    var ret = this._superApply(arguments),
        minDate = this.options['min'],
        maxDate = this.options['max'],
        timeRangeOptions = {};
    
    if((minDate != null || maxDate != null) && this._isIndependentInput()) 
    {
      //need to alter how the default validators work as validators are now immutable
      timeRangeOptions = {'min': minDate, 
                          'max': maxDate,
                          'converter': this._GetConverter()};
      this._timePickerDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE] = 
              oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_DATETIMERANGE).createValidator(timeRangeOptions);
    }
    
    return $.extend(this._timePickerDefaultValidators, ret);
  },
  
  /**
   * Need to override since apparently we allow users to set the converter to null, undefined, and etc and when 
   * they do we use the default converter
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof! oj.ojInputTime
   * @instance
   * @protected
   * @override
   */
  _GetConverter : function () 
  {
    return this.options['converter'] ? 
            this._superApply(arguments) : 
            $["oj"]["ojInputTime"]["prototype"]["options"]["converter"];
  },
  
  /**
   * This helper function will check if the currently selected time entry is within the view and if not will scroll to it
   * 
   * @private
   * @param {Object} node
   */
  _checkScrollTop : function (node)
  {
    /* After CSS change of listbox this feature is broken, need to investigate why and am disabling for now
    var top = node.position().top, 
        height = this._timePickerDisplay.height(), 
        results = $(".oj-listbox-results", this._timePickerDisplay),
        scrollTop = results.scrollTop();

    if ((height + scrollTop) < top || top < scrollTop)
    {
      results.scrollTop(top);
    }*/
  },
  
  /**
   * This function will return a formattedValue of the date object
   * 
   * @private
   * @return {string} increments
   */
  _getFormattedValue : function __getFormattedValue()
  {
    var converter = this._GetConverter(), 
        date = this.options['value'];

    return date ? converter.format(date) : "";
  },
  
  /**
   * Whether ojInputTime has been created by ojInputDateTime
   * 
   * @private
   */
  _isContainedInDateTimePicker : function __isContainedInDateTimePicker()
  {
    return this._datePickerComp !== null;
  },
  
  /**
   * Helper function to determine whether the provided datePickerComp is inline or not
   * 
   * @private
   */
  _isDatePickerInline : function __isDatePickerInline()
  {
    return this._datePickerComp["inline"];
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values. For Time
   * 
   * @expose
   * @override
   * @instance
   * @memberof! oj.ojInputTime
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   *                        look up the subcomponent associated with that string.  It contains:<p>
   *                        component: optional - in the future there may be more than one component contained within a page element<p>
   *                        subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Object|null} the subcomponent located by the subId string passed in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    var node = null,
        subId = locator && locator['subId'];
    
    if(subId) {
      if (subId === "oj-listbox-drop")
      {
        node = this._timePickerDisplay[0];
      }
      else if (subId === "oj-inputdatetime-time-icon")
      {
        node = $(".oj-inputdatetime-time-icon", this._triggerNode)[0];
      }
    }
    
    return node || this._superApply(arguments);
  },
  
  /**
   * Returns the subId string for the given child DOM node.  For more details, see 
   * <a href="#getNodeBySubId">getNodeBySubId</a>.
   * 
   * @expose
   * @override
   * @memberof oj.ojInputTime
   * @instance
   * 
   * @param {!Element} node - child DOM node
   * @return {string|null} The subId for the DOM node, or <code class="prettyprint">null</code> when none is found.
   * 
   * @example <caption>Get the subId for a certain DOM node:</caption>
   * // Foo is ojInputNumber, ojInputTime, etc.
   * var subId = $( ".selector" ).ojFoo( "getSubIdByNode", nodeInsideComponent );
   */
  getSubIdByNode: function(node)
  {
     var timeIcon = $(".oj-inputdatetime-time-icon", this._triggerNode),
        subId = null;
    
    if(node === this._timePickerDisplay[0]) 
    {
      subId = "oj-listbox-drop";
    }
    else if(node === timeIcon[0])
    {
      subId = "oj-inputdatetime-time-icon";
    }
    
    return subId || this._superApply(arguments);
  },
  
  /** 
   * Returns the root node
   * 
   * @expose 
   * @instance
   * @memberof! oj.ojInputTime
   */
  widget : function __widget()
  {
    return this._isIndependentInput() ? this._super() : this._datePickerComp["widget"].widget();
  }
  
});

//////////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the time drop down div container.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-listbox-drop
 * @memberof oj.ojInputTime
 * @instance
 * 
 * @example <caption>Get the time drop down div container:</caption>
 * // Foo is ojInputTime, ojInputDateTime, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-listbox-drop'} );
 */
 
 /**
 * <p>Sub-ID for the time icon that triggers the time drop down display.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-inputdatetime-time-icon
 * @memberof oj.ojInputTime
 * @instance
 * 
 * @example <caption>Get the time icon that triggers the time drop down display:</caption>
 * // Foo is ojInputTime or ojInputDateTime.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-inputdatetime-time-icon'} );
 */
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @name oj.ojInputDateTime
 * @augments oj.ojInputDate
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="inputDateTimeOverview-section">
 *   JET ojInputDateTime Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputDateTimeOverview-section"></a>
 * </h3>
 * 
 * <p>Description: ojInputDateTime extends from ojInputDate providing additionally time selection drop down.</p>
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>
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
 *       <td><kbd>Enter</kbd></td>
 *       <td>Select the currently focused day</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Move up in the grid.</tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Move down in the grid.</tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Move right in the grid.</tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Move left in the grid.</tr>
 *     <tr>
 *       <td><kbd>Esc</kbd></td>
 *       <td>Close the grid.</tr>
 *     <tr>
 *       <td><kbd>Home</kbd></td>
 *       <td>Move focus to first day of the month.</tr>
 *     <tr>
 *       <td><kbd>End</kbd></td>
 *       <td>Move focus to last day of the month.</tr>
 *     <tr>
 *       <td><kbd>PageUp</kbd></td>
 *       <td>Switch to previous month.</tr>
 *     <tr>
 *       <td><kbd>PageDown</kbd></td>
 *       <td>Switch to next month.</tr>
 *     <tr>
 *       <td><kbd>Alt + PageUp</kbd></td>
 *       <td>Switch to previous year.</tr>
 *     <tr>
 *       <td><kbd>Alt + PageDown</kbd></td>
 *       <td>Switch to next year.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + PageUp</kbd></td>
 *       <td>Switch to previous by stepBigMonths.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + PageDown</kbd></td>
 *       <td>Switch to next by stepBigMonths.</tr>
 *     <tr>
 *       <td><kbd>Ctrl + Alt + T</kbd></td>
 *       <td>Places focus on Today button if it exists.</tr>
 *     <tr>
 *       <td><kbd>Shift + DownArrow or UpArrow</kbd></td>
 *       <td>Shows the timepicker and moves the focus into the expanded timepicker list</td>
 *     </tr>
 * </tbody></table>
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-inputDateTime" )            // selects all JET input on the page
 * </code>
 * </pre>
 * 
  * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * It is up to the application developer to associate the label to the input component.
 * For inputDateTime, you should put an <code>id</code> on the input, and then set 
 * the <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <h3 id="label-section">
 *   Label and InputDateTime
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the input
 * by putting an <code>id</code> on the input, and then setting the 
 * <code>for</code> attribute on the label to be the input's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p> 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <pre class="prettyprint">
 * <code>
 *    &lt;input id="dateTimeId" data-bind="ojComponent: {component: 'ojInputDateTime'}" /&gt;
 * </code>
 * </pre>
 * 
 * @desc Creates or re-initializes a JET ojInputDateTime
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the input element with no options specified:</caption>
 * $( ".selector" ).ojInputDateTime();
 * 
 * * @example <caption>Initialize the input element with some options:</caption>
 * $( ".selector" ).ojInputDateTime( { "disabled": true } );
 * 
 * @example <caption>Initialize the input element via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;input id="dateTimeId" data-bind="ojComponent: {component: 'ojInputDateTime'}" /&gt;
 */
oj.__registerWidget("oj.ojInputDateTime", $['oj']['ojInputDate'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj",
  
  //-------------------------------------From base---------------------------------------------------//
  _WIDGET_CLASS_NAMES : "oj-inputdatetime-date-time oj-component oj-inputdatetime",
  _INPUT_HELPER_KEY: "inputHelpBoth",
  //-------------------------------------End from base-----------------------------------------------//
  
  options : 
  {
    /**
     * Default converter for ojInputDateTime
     *
     * If one wishes to provide a custom converter for the ojInputDateTime override the factory returned for
     * oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME)
     *
     * @expose
     * @instance
     * @memberof! oj.ojInputDateTime
     * @default <code class="prettyprint">oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({"day": "2-digit", "month": "2-digit", "year": "2-digit", "hour": "2-digit", "hour12": true, "minute": "2-digit"})</code>
     */
    converter : oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(
    {
      "day" : "2-digit", "month" : "2-digit", "year" : "2-digit", "hour" : "2-digit", "hour12" : true, "minute" : "2-digit"
    }),
    
    /**
     * Time Picker option is a JSON object containing sub-options for the ojInputDateTime component
     * 
     * <p>
     * The properties supported on the timePicker option are:
     * @property {string=} timeIncrement Time increment to be used for ojInputDateTime, the format is hh:mm:ss:SS. <br/> 
     * The default value is <code class="prettyprint">{timePicker: {timeIncrement': "00:30:00:00"}}</code>. <br/>
     * Example <code class="prettyprint">$(".selector").ojInputDateTime("option", "timePicker.timeIncrement", "00:10:00:00");</code>
     * </p>
     * 
     * @expose
     * @instance
     * @memberof! oj.ojInputDateTime
     * @type {Object.<string>}
     */
    timePicker: 
    {
      /**
       * @expose
       */
      timeIncrement : "00:30:00:00"
    }
    
    /** 
     * The value of the ojInputDateTime component which should be an ISOString
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputDateTime({'value': new Date().toISOString()});<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns Today's date in ISOString
     * $(".selector").ojInputDateTime("option", "value");
     * // Setter: sets it to a different date
     * $(".selector").ojInputDateTime("option", "value", new Date(2013, 0, 1, 0, 0, 0, 0).toISOString());
     * 
     * @expose 
     * @name value
     * @instance
     * @memberof! oj.ojInputDateTime
     * @default When the option is not set, the element's value property is used as its initial value 
     * if it exists. This value must be an ISOString.
     */
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  _InitBase : function __InitBase() 
  {
    this._super();
    
    this._timePickerElement = this.element; //if the ojInputDateTime is inline, then this ref will change to a NEW input element
    this._timePicker = null;
    this._timeConverter = null;
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  _ComponentCreate : function __ComponentCreate()
  {
    var ret = this._super(), 
        timeConverter = this._getTimePickerConverter(this._GetConverter());
    
    if (timeConverter === null)
    {
      throw new Error("Plase use ojInputDate if you do not have time portion");
    }
    
    if (this._isInLine)
    {
      //Since DatePicker never intended to have timepicker associated to it
      //need to have an input element that is tied to the time selector
      
      var input = $("<input type='text'>");
      input.insertAfter(this.element);
      
      //Now need to reset this._timePickerElement to the newly created input element
      this._timePickerElement = input;
    }
    
    //create time instance for the time portion
    this._timePicker = this._timePickerElement.ojInputTime(
    {
      "converter" : timeConverter,
      "min": this.options["min"],
      "max": this.options["max"],
      "value": this._getDate().toISOString(),
      "optionChange" : $.proxy(this._timeSelected, this), 
      "timePicker" : this.options["timePicker"], 
      "datePickerComp" : {"widget": this, "inline": this._isInLine} 
    });
    
    this._timePicker.ojInputTime("option", "disabled", this.options["disabled"]);
    
    return ret;
  },
  
  _setOption : function __setOption(key, value, flags)
  {
    var retVal = this._superApply(arguments);
    
    if(this._timePicker) 
    {
      var timeInvoker = {"disabled": true, "min": true, "max": true};
      
      if (key in timeInvoker)
      {
        this._timePicker.ojInputTime("option", key, value);
      }
      else if(key === "timePicker" && flags["subkey"] === "timeIncrement")
      {
        this._timePicker.ojInputTime("option", "timePicker.timeIncrement", value["timeIncrement"]);
      }
      else if (key === "converter")
      {
        this._timeConverter = null;
        this._timePicker.ojInputTime("option", key, this._getTimePickerConverter(this._GetConverter())); //need to invoke _GetConverter for the case when null and etc sent in
      }
    }
    
    return retVal;
  },
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function __destroy()
  {
    var ret = this._super();

    this._timePicker.ojInputTime("destroy");

    if (this._isInLine)
    {
      //note that this.element below would be of the TimePicker's input element
      this._timePickerElement.remove();
    }
    
    return ret;
  },
  
  /*
   * Will provide the timePicker converter based on the actual converter
   */
  _getTimePickerConverter : function __getTimePickerConverter(converter) 
  {
    if(this._timeConverter !== null) 
    {
      return this._timeConverter;
    }
    
    var resolvedOptions = converter.resolvedOptions(), options = { },
        params = ["hour", "hour12", "minute", "second", "millisecond", "timeFormat"], i, j;

    for (i = 0, j = params.length;i < j;i++)
    {
      if (params[i] in resolvedOptions)
      {
        if(params[i] === "timeFormat") {
          //special case for timeFormat, formatType of time must be added
          options["formatType"] = "time";
        }
        options[params[i]] = resolvedOptions[params[i]];
      }
    }
    
    if ($.isEmptyObject(options))
    {
      return null;
    }
    
    var timeConverter = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter(options);
    this._timeConverter = timeConverter;
    return timeConverter;
  },
  
  /**
   * Handler for when the time is selected
   * 
   * @private
   * @param {Event} event
   * @param {Object} params
   */
  _timeSelected : function __timeSelected(event, params)
  {
    
    if(params["option"] === "value" && params["value"])
    {
      this._SetValue(copyTimeOver(params["value"] ? oj.IntlConverterUtils.isoToLocalDate(params["value"]) : new Date(), this._getDate()).toISOString(), event);
    }
    
  },
  
  /**
   * Just for the case of launching timepicker with Shift + Up or Shift + Down
   * 
   * @ignore
   * @protected
   * @override
   * @param {Event} event
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  _onKeyDownHandler : function __onKeyDownHandler(event) 
  {
    var kc = $.ui.keyCode, 
        handled = false;
    
    switch (event.keyCode)
    {
      case kc.UP: ;
      case kc.DOWN:
        if(event.shiftKey)
        {
          this._timePicker.ojInputTime("show");
          handled = true;
        }
        break;
      default: ;
    }

    if (handled)
    {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    
    return this._superApply(arguments);
  },
  
  /**
   * @ignore
   * @expose
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  show : function __show()
  {
    this._timePicker.ojInputTime("hide");
    return this._super();
  },
  
  /**
   * Method to show the internally created ojInputTime
   * 
   * @expose
   * @memberof! oj.ojInputDateTime
   * @instance
   */
  showTimePicker : function __showTimePicker()
  {
    this.hide();
    return this._timePicker.ojInputTime("show");
  },
  
  /**
   * Method to hide the internally created ojInputTime
   * 
   * @expose
   * @memberof! oj.ojInputDateTime
   * @instance
   */
  hideTimePicker : function __hideTimePicker()
  {
    return this._timePicker.ojInputTime("hide");
  },
  
  /** 
   * @ignore
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  refresh : function __refresh()
  {
    return this._superApply(arguments) || this;
  },
  
  /**
   * So _SetDisplayValue gets invoked when the value gets updated and is the reason that _SetDisplayValue is overridden 
   * rather than _SetValue to update the the internal ojInputTime's value as well as updating the look of the calendar 
   * + time drop down.
   * 
   * @param {String} displayValue of the new string to be displayed
   * @memberof! oj.ojInputDateTime
   * @instance
   * @protected
  */  
  _SetDisplayValue : function (displayValue) 
  {
    this._superApply(arguments);
    
    if(this._timePicker)
    {
      this._timePicker.ojInputTime("option", "value", this.options["value"]);
    }
    
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * 
   * @expose
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   * @param {Object} locator An Object containing at minimum a subId property whose value is a string, documented by the component, that allows the component to 
   *                        look up the subcomponent associated with that string.  It contains:<p>
   *                        component: optional - in the future there may be more than one component contained within a page element<p>
   *                        subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
   * @returns {Object|null} the subcomponent located by the subId string passed in locator, if found.<p>
   */
  getNodeBySubId: function(locator)
  {
    var subId = locator && locator['subId'];
    
    if(subId && (subId === "oj-listbox-drop" || subId === "oj-inputdatetime-time-icon")) 
    {
      return this._timePicker.ojInputTime("getNodeBySubId", locator);
    }
    else 
    {
      return this._superApply(arguments);
    }
    
  },
  
  /**
   * Returns the subId string for the given child DOM node.  For more details, see 
   * <a href="#getNodeBySubId">getNodeBySubId</a>.
   * 
   * @expose
   * @override
   * @memberof oj.ojInputDateTime
   * @instance
   * 
   * @param {!Element} node - child DOM node
   * @return {string|null} The subId for the DOM node, or <code class="prettyprint">null</code> when none is found.
   * 
   * @example <caption>Get the subId for a certain DOM node:</caption>
   * // Foo is ojInputNumber, ojInputDate, etc.
   * var subId = $( ".selector" ).ojFoo( "getSubIdByNode", nodeInsideComponent );
   */
  getSubIdByNode: function(node)
  {
    return this._timePicker.ojInputTime("getSubIdByNode", node) || this._superApply(arguments);
  },
  
  /**
   * Need to override since apparently we allow users to set the converter to null, undefined, and etc and when 
   * they do we use the default converter
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof! oj.ojInputDateTime
   * @instance
   * @protected
   * @override
   */
  _GetConverter : function () 
  {
    return this.options['converter'] ? 
            this._superApply(arguments) :
            $["oj"]["ojInputDateTime"]["prototype"]["options"]["converter"];
  },
  
  /**
   * 
   * @return {Object} jquery object 
   * 
   * 
   * @expose
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  _GetMessagingLauncherElement : function ()
  {
    // pavitra: changing this to be the timepicker element as the messaging launcher is the element 
    // that user inputs
    return !this._isInLine ? this._super() : this._timePickerElement;
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @memberof! oj.ojInputDateTime
   * @return {string}
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-inputdatetime";
  },
  
  /**
   * @protected
   * @override
   * @instance
   * @instance
   * @memberof! oj.ojInputDateTime
   */
  _GetTranslationsSectionName: function()
  {
    return "oj-ojInputDate"; 
  }
  
});
});
