"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue', 'ojs/ojbutton'], 
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

// jeanne retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.spinner.js on 6/2013, and then modified

/*!
 * JET InputNumber @VERSION
 *
 *
 * Depends:
 *  jquery.ui.widget.js
 */

/**
 * @class
 * @name oj.ojInputNumber
 * @augments oj.editableValue
 * 
 * @classdesc
 * <h3 id="inputNumberOverview-section">
 *   JET InputNumber Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#inputNumberOverview-section"></a>
 * </h3>
 * <p>Description: The ojInputNumber component enhances a browser input element 
 * into one that holds numbers and it has a spinbox to quickly increment or 
 * decrement the number. The <code class="prettyprint">value</code> option must be a number and must 
 * be within the <code class="prettyprint">min</code> and <code class="prettyprint">max</code> range. 
 * </p>
 * <p>A step mismatch is when
 * the value is not a multiple of <code class="prettyprint">step</code>, 
 * starting at the <code class="prettyprint">min</code> 
 * or 0 if no <code class="prettyprint">min</code> is set.
 * A step mismatch will not be flagged as a validation error by default, but
 * the step up and step down feature will change the value to be a step match
 * if it isn't already.
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
 *       <td><kbd>Enter</kbd> or <kbd>Tab</kbd></td>
 *       <td>Submit the value you typed in the input field. If you type in
 *       a value out of range, and press Enter, you will see a validation error.
 *       Step mismatch errors will not cause a validation error.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Increment the number in the input field; alternatively you can click 
 *           on the up arrow icon. If the resulting value is above the
 *           <code class="prettyprint">max</code>, below the <code class="prettyprint">min</code>, 
 *           or results in a step 
 *           mismatch, the value will be adjusted to the closest valid value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Decrement the number in the input field; alternatively you can click
 *           on the down arrow icon. If the resulting value is above the 
 *           <code class="prettyprint">max</code>, below the <code class="prettyprint">min</code>, 
 *           or results in a step
 *           mismatch, the value will be adjusted to the closest valid value.</td>
 *     </tr>
 * </tbody></table>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * <p>
 * The component is accessible; it sets and maintains the appropriate aria- attributes, 
 * like aria-valuenow, aria-valuemax, aria-valuemin and aria-valuetext.
 * </p>
 * <p>
 * It is up to the application developer to associate the label to the input component.
 * For inputNumber, you should put an <code class="prettyprint">id</code> on the input, and then set 
 * the <code class="prettyprint">for</code> attribute on the label to be the input's id.
 * </p>
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * <h3 id="label-section">
 *   Label and InputNumber
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the input
 * by putting an <code class="prettyprint">id</code> on the input, and then setting the 
 * <code class="prettyprint">for</code> attribute on the label to be the input's id.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code class="prettyprint">required</code> and <code class="prettyprint">help</code> options are set. 
 * </p>
 * <h3 id="state-section">
 *   Setting the Value Option
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#state-section"></a>
 * </h3>
 * <p>If the value option is undefined, 
 * then the DOM value property is used, if any; else it is null.</p>
 * <p>The value option (if it is not null or undefined) 
 * is coerced (+ val). e.g., "123a" is coerced to NaN</p>
 * <p>To clear out the value option, you can set it to null.
 * <code class="prettyprint">$(".selector").ojInputNumber("option", "value", null);</code>
 * </p>
 *
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * @desc Creates an ojInputNumber component
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize component using widget API</caption>
 * &lt;input id="spin" type="text"/&gt;<br/>
 * $("#spin").ojInputNumber({'value': 10, 'max':100, 'min':0, 'step':2});
 * $("#spin").ojInputNumber({'option', 'value', 10});
 * @example <caption>Using knockout, value, min, max bind to observables - salary, salaryMax, salaryMin</caption> 
 * &lt;input id="foo" data-bind="ojComponent: 
 *   {component: 'ojInputNumber', value: salary, min:salaryMin, max:salaryMax, step:5}"/&gt;
 * 
 * @constructor
 */
oj.__registerWidget("oj.ojInputNumber", $['oj']['editableValue'],
{
  version: "1.0.0",
  defaultElement: "<input>",
  widgetEventPrefix: "oj",
  options:
  {
    // TODO: revisit
    // It's expensive to create a default converter ahead of time when a page author can set a custom 
    // one for if they do this will be promptly discarded. 
    
    /** 
     * A number converter instance that duck types {@link oj.NumberConverter}. Or an object literal 
     * containing the properties listed below. 
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
     * <code class="prettyprint">converter</code> option changes, then all messages generated by the 
     * component are cleared and full validation run using its current display value. 
     * <ul>
     *   <li>if there are validation errors, then <code class="prettyprint">value</code> 
     *   option is not updated, and the errors pushed to <code class="prettyprint">messagesShown</code>
     *   option. The display value is not refreshed in this case. </li>
     *   <li>if no errors result from the validation, <code class="prettyprint">value</code> 
     *   option is updated; page author can listen to the <code class="prettyprint">optionChange</code> 
     *   event on the <code class="prettyprint">value</code> option to clear custom errors. The 
     *   display value is refreshed with the formatted value provided by converter.</li>
     * </ul>
     * </li>
     * <li>if component is invalid and has deferred messages -  
     * <code class="prettyprint">messagesHidden</code> option is non-empty, when 
     * <code class="prettyprint">converter</code> option changes, then the display value is 
     * refreshed with the formatted value provided by converter.</li>
     * </ul>
     * </p>
     * 
     * <h4>Clearing Messages</h4>
     * <ul>
     * <li>When component messages are cleared in the cases described above, messages created by 
     * the component that are present in both <code class="prettyprint">messagesHidden</code> and 
     * <code class="prettyprint">messagesShown</code> options are cleared.</li>
     * <li><code class="prettyprint">messagesCustom</code> option is not cleared. Page authors can 
     * choose to clear it explicitly when setting the converter option.</li>
     * </ul>
     * </p>
     * 
     * @property {string} type - the converter type registered with the oj.ConverterFactory. 
     * Usually 'number'. See {@link oj.NumberConverterFactory} for details. <br/>
     * E.g., <code class="prettyprint">{converter: {type: 'number'}</code>
     * @property {Object=} options - optional Object literal of options that the converter expects. 
     * See {@link oj.IntlNumberConverter} for options supported by the jet number converter. 
     * E.g., <code class="prettyprint">{converter: {type: 'number', options: {style: 'decimal'}}</code>
     * 
     * @example <caption>Initialize component to use default converter</caption>
     * $(".selector").ojInputNumber({value: 25000});
     * 
     * @example <caption>Initialize the component with a number converter instance:</caption>
     * // Initialize converter instance using currency options
     * var options = {style: 'currency', 'currency': 'USD', maximumFractionDigits: 0};
     * var numberConverterFactory = oj.Validation.converterFactory("number");
     * var salaryConverter = numberConverterFactory.createConverter(options);<br/>
     * // set converter instance using converter option
     * $(".selector").ojInputNumber({ 
     *   value: 25000,
     *   converter: salaryConverter
     * });
     * 
     * @example <caption>Initialize the component with converter object literal:</caption>
     * $(".selector").ojInputNumber({
     *   value: 25000,
     *   converter: {
     *     type: 'number', 
     *     options : {
     *       style: 'currency', 
     *       currency: 'USD', 
     *       maximumFractionDigits: 0
     *     }
     *   }
     * });
     * 
     * @example <caption>Change the converter option:</caption>
     * // new converter instance 
     * var options = {style: 'currency', currency: 'USD', 'currencyDisplay': 'name', maximumFractionDigits: 2};
     * var numberConverterFactory = oj.Validation.converterFactory("number");
     * var salaryConverter = numberConverterFactory.createConverter(options);<br/>
     * // set converter instance using converter option
     * $(".selector").ojInputNumber("option", "converter", salaryConverter);
     * 
     * 
     * @default <code class="prettyprint">oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter()</code>. 
     * When initialized with no options, the default options for the current locale are assumed.
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof oj.ojInputNumber
     * @type {Object|undefined}
     */    
    converter: oj.Validation.converterFactory(
            oj.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter(),

    /** 
     * The maximum allowed value. This number is used in the range validator; if the 
     * <code class="prettyprint">value</code> is greater than the <code class="prettyprint">max</code>,
     * then the range validator flags an error to the user. The up arrow
     *  is disabled when the maximum value is reached. 
     *  <p>
     * The element's <code class="prettyprint">max</code> attribute is used if it 
     * exists and the option is not explicitly set.
     * <p>
     *  <code class="prettyprint">Max</code> must be a
     *  <code class="prettyprint">number</code> or <code class="prettyprint">null</code>; 
     *  <code class="prettyprint">null</code> indicates no maximum. If not null, 
     *  the <code class="prettyprint">max</code> option value will be coerced (+). 
     *  If the coerced value is <code class="prettyprint">NaN</code>, 
     *  an <code class="prettyprint">Error</code> is thrown.
     * <p>
     * The <code class="prettyprint">max</code> must not be less than the 
     * <code class="prettyprint">min</code>, else an Error is thrown during initialization.
     * @expose 
     * @memberof oj.ojInputNumber
     * @instance
     * @type {?number|undefined}
     * @default <code class="prettyprint">null</code>
     * @example <caption>Initialize the inputNumber with the 
     * <code class="prettyprint">max</code> option specified:</caption>
     * $( ".selector" ).ojInputNumber( { "max": 100 } );
     * @example <caption>Change the 
     * <code class="prettyprint">max</code> option to a float:</caption>
     * $( ".selector" ).ojInputNumber("option", "max", 100.5);
     * @example <caption>To remove the maximum range restriction from inputNumber:</caption>
     * $( ".selector" ).ojInputNumber( { "max": null } );
     * @example <caption>Set the <code class="prettyprint">max</code> to a non-number 
     * which will throw an Error:</caption>
     * $( ".selector" ).ojInputNumber( { "max": "123abc" } );
     * $( ".selector" ).ojInputNumber( { "max": "abc123" } );
     * @example <caption>Set the <code class="prettyprint">max</code> to a number inside 
     * of quotes; this is valid and will be coerced to a number,
     * -100 in this example:</caption>
     * $( ".selector" ).ojInputNumber( { "max": "-100" } );
     */
    max: undefined,
    
    /** 
     * The minimum allowed value. This number is used in the range validator; if the 
     * <code class="prettyprint">value</code> is less than the <code class="prettyprint">min</code>,
     * then the range validator flags an error to the user. The down arrow
     *  is disabled when the minimum value is reached. 
     *  <p>
     * The element's <code class="prettyprint">min</code> attribute is used if it 
     * exists and the option is not explicitly set.
     * <p>
     *  <code class="prettyprint">Min</code> must be a
     *  <code class="prettyprint">number</code> or <code class="prettyprint">null</code>; 
     *  <code class="prettyprint">null</code> indicates no minimum. If not null, 
     *  the <code class="prettyprint">min</code> option value will be coerced (+). 
     *  If the coerced value is <code class="prettyprint">NaN</code>, 
     *  an <code class="prettyprint">Error</code> is thrown.
     * <p>
     * The <code class="prettyprint">max</code> must not be less than the 
     * <code class="prettyprint">min</code>, else an Error is thrown during initialization.
     * @expose 
     * @memberof oj.ojInputNumber
     * @instance
     * @type {?number|undefined}
     * @default <code class="prettyprint">null</code>
     * @example <caption>Initialize the inputNumber with the 
     * <code class="prettyprint">min</code> option specified:</caption>
     * $( ".selector" ).ojInputNumber( { "min": -100 } );
     * @example <caption>Change the 
     * <code class="prettyprint">min</code> option to a float:</caption>
     * $( ".selector" ).ojInputNumber("option", "min", 1.5);
     * @example <caption>To remove the minimum range restriction from inputNumber:</caption>
     * $( ".selector" ).ojInputNumber( { "min": null } );
     * @example <caption>Set the <code class="prettyprint">min</code> to a non-number 
     * which will throw an Error:</caption>
     * $( ".selector" ).ojInputNumber( { "min": "123abc" } );
     * $( ".selector" ).ojInputNumber( { "min": "abc123" } );
     * @example <caption>Set the <code class="prettyprint">min</code> to a number inside 
     * of quotes; this is valid and will be coerced to a number,
     * -100 in this example:</caption>
     * $( ".selector" ).ojInputNumber( { "min": "-100" } );
     */
    min: undefined,
  
    /**
     * The placeholder text to set on the element. Though it is possible to set placeholder 
     * attribute on the element itself, the component will only read the value when the component
     * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
     * and page authors should update the option directly.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">placeholder</code> option:</caption>
     * &lt;input id="number" data-bind="ojComponent: {
     *   component: 'ojInputNumber', placeholder: 'Please enter a number'}" /&gt;
     * 
     * @example <caption>Initialize <code class="prettyprint">placeholder</code> option from html attribute:</caption>
     * &lt;input id="number" data-bind="ojComponent: {component: 'ojInputNumber'}" 
     *   placeholder="Please enter a number" /&gt;
     * 
     * @default when the option is not set, the element's placeholder attribute is used if it exists. 
     * If the attribute is not set then the default can be a converter hint. See displayOptions for 
     * details.
     * 
     * @expose 
     * @instance
     * @memberof oj.ojInputNumber
     * @type {string|null|undefined}
     */
    placeholder: undefined,
    
    /** 
     * Whether the component is readOnly. The element's <code class="prettyprint">readOnly</code>
     *  property is used as its initial 
     * value if it exists, when the option is not explicitly set. When neither is set, 
     * <code class="prettyprint">readOnly </code>
     * defaults to false.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">readOnly</code> option:</caption>
     * $(".selector").ojInputNumber({"readOnly": true});
     * 
     * @expose 
     * @type {?boolean|undefined}
     * @default <code class="prettyprint">false</code>
     * @instance
     * @memberof oj.ojInputNumber
     */
    readOnly: undefined,
    
    /** 
     * The size of the step to take when spinning via buttons or via the 
     * <code class="prettyprint">stepUp()</code>/<code class="prettyprint">stepDown()</code> methods. 
     * The element's <code class="prettyprint">step</code> attribute is used if it 
     * exists and the option is not explicitly set. Step must be a 
     * <code class="prettyprint">number</code>
     * greater than 0, otherwise an exception is thrown. It defaults to 
     * <code class="prettyprint">1</code> if nothing, or <code class="prettyprint">null</code>, is specified.
     *  If not null, the <code class="prettyprint">step</code> option value will be 
     *  coerced (+). 
     *  If the coerced value is <code class="prettyprint">NaN</code>, 
     *  an <code class="prettyprint">Error</code> is thrown.
     * <p>
     * The step up and step down feature will change the value to be a step match if it isn't already.
     * A step match is when the value is a multiple of step, starting at the 
     * <code class="prettyprint">min</code> or <code class="prettyprint">0</code> if no 
     * <code class="prettyprint">min</code> is set.
     * A value can be a step mismatch; if the <code class="prettyprint">value</code> is set 
     * to be a step mismatch, it will not be flagged as a validation error.
     * @expose 
     * @instance
     * @type {?number|undefined}
     * @default <code class="prettyprint">1</code>
     * @memberof oj.ojInputNumber 
     * @example <caption>Initialize the inputNumber with the 
     * <code class="prettyprint">step</code> option specified:</caption>
     * $( ".selector" ).ojInputNumber( { "step": 10 } );
     * @example <caption>Change the 
     * <code class="prettyprint">step</code> option to a float:</caption>
     * $( ".selector" ).ojInputNumber("option", "step", 0.5);
     * @example <caption>Set the <code class="prettyprint">step</code> to a non-number 
     * which will throw an Error:</caption>
     * $( ".selector" ).ojInputNumber( { "step": "123abc" } );
     * $( ".selector" ).ojInputNumber( { "step": "abc123" } );
     * @example <caption>Set the <code class="prettyprint">step</code> to a number inside 
     * of quotes; this is valid and will be coerced to a number,
     * 10 in this example:</caption>
     * $( ".selector" ).ojInputNumber( { "step": "10" } );
     * */
    step: undefined,
    /** 
     * The value of the component. 
     * 
     * <p>
     * When <code class="prettyprint">value</code> option changes due to programmatic 
     * intervention, the component always clears all messages and runs deferred validation, and 
     * always refreshes UI display value. If the value cannot be coerced to a number, an
     * Error is thrown.</br>
     * 
     * <h4>Clearing Messages</h4>
     * <ul>
     * <li>All messages are cleared. This includes  
     * <code class="prettyprint">messagesHidden</code>, <code class="prettyprint">messagesShown</code>
     *  and <code class="prettyprint">messagesCustom</code> options.</li>
     * </ul>
     * 
     *  
     * <h4>Running Validation</h4>
     * <ul>
     * <li>component always runs deferred validation; if there is a validation error the 
     * <code class="prettyprint">messagesHidden</code> option is updated.</li>
     * </ul>
     * </p>
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojInputNumber({'value': 55});<br/>
     * @example <caption>Get or set <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns 55
     * $(".selector").ojInputNumber("option", "value");
     * // Setter: sets 20
     * $(".selector").ojInputNumber("option", "value", 20);
     * @example <caption>Set the <code class="prettyprint">value</code> to a non-number 
     * which will throw an Error:</caption>
     * $( ".selector" ).ojInputNumber( { "value": "123abc" } );
     * $( ".selector" ).ojInputNumber( { "value": "abc123" } );
     * @example <caption>Set the <code class="prettyprint">value</code> to a number inside 
     * of quotes; this is valid and will be coerced to a number,
     * 10 in this example:</caption>
     * $( ".selector" ).ojInputNumber( { "value": "10" } );
     * @example <caption>Set the <code class="prettyprint">value</code> to an empty string; 
     * this is valid and value is coerced (+), to 0 in this example:</caption>
     * $( ".selector" ).ojInputNumber( { "value": "" } );
     * @expose 
     * @access public
     * @instance
     * @default <code class="prettyprint">null</code>
     * When the option is not set, the element's dom value is used as its initial value 
     * if it exists.
     * @memberof oj.ojInputNumber
     * @type {Object|undefined|null}
     */
    value: undefined
  },
  // P U B L I C    M E T H O D S
  /**
 * <p>Sub-ID for the inputNumber's Up arrow.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-inputnumber-up
 * @memberof oj.ojInputNumber
 * @instance
 * 
 * @example <caption>Get the node for the Up arrow:</caption>
 * var node = $( ".selector" ).ojInputNumber( "getNodeBySubId", {'subId': 'oj-inputnumber-up'} );
 */
  getNodeBySubId: function(locator)
  {
    var node = this._superApply(arguments), subId;
    if (!node)
    {
      subId = locator['subId'];
      if (subId === "oj-inputnumber-up") {
        node = this.widget().find(".oj-inputnumber-up")[0];
      }
      if (subId === "oj-inputnumber-down") {
        node = this.widget().find(".oj-inputnumber-down")[0];
      }
      if (subId === "oj-inputnumber-input") {
        node = this.widget().find(".oj-inputnumber-input")[0];
      }
    }
    // Non-null locators have to be handled by the component subclasses
    return node || null;
 },
  /**
   * Refreshes the inputNumber component
   * <p>A <code class="prettyprint">refresh()</code> or re-init is required 
   * when an inputNumber is changed in a non-option way, like in the following circumstances:
   * <ul>
   *   <li>Button translations change.</li>
   * </ul>    
   * @expose 
   * @memberof oj.ojInputNumber
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojInputNumber( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    this._setup();
  },
  /**
   * <p>Decrements the value by the specified number of steps. 
   * Without the parameter, a single step is decremented.</p>
   <p>If the resulting value is above the max, below the min, 
   or results in a step mismatch, the value will be adjusted to the closest valid value.</p>
   * @param {Number} steps - Number of steps to decrement, defaults to 1.
   * @expose
   * @instance
   * @memberof oj.ojInputNumber 
   */
  stepDown: function(steps)
  {
    this._step(steps, false);
  },
   /**
   * <p>Increments the value by the specified number of steps. 
   * Without the parameter, a single step is incremented.</p>
   <p>If the resulting value is above the max, below the min, 
   or results in a step mismatch, the value will be adjusted to the closest valid value.</p>
   * @param {Number} steps - Number of steps to increment, defaults to 1.
   * @expose
   * @instance
   * @memberof oj.ojInputNumber 
   */
  stepUp: function(steps)
  {
    this._step(steps, true);
  },

  /**
   * Returns a jQuery object containing the element visually representing the inputnumber. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof oj.ojInputNumber
   * @instance
   * @return {jQuery} the inputnumber
   */
  widget: function()
  {
    return this.uiInputNumber;
  },
  
  // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

  // *********** START WIDGET FACTORY METHODS (they retain _camelcase naming convention) **********
  
  
  /**
  * Called at component create time primarily to initialize options, often using DOM values. This 
  * method is called before _ComponentCreate is called, so components that override this method 
  * should be aware that the component has not been rendered yet. The element DOM is available and 
  * can be relied on to retrieve any default values. <p> 
  * @param {!Object} originalDefaults - original default options defined on the widget and its ancestors
  * @param {?Object} constructorOptions - options passed into the widget constructor
  * 
  * @memberof oj.ojInputNumber
  * @instance
  * @protected
  */
  _InitOptions: function(originalDefaults, constructorOptions)
  {
    var that = this;

    var props = 
      [{"attribute": "disabled", "defaultOptionValue": false, "validateOption": true},
      {"attribute": "pattern", "defaultOptionValue": ""},
      {"attribute": "placeholder", "defaultOptionValue": ""},
      {"attribute": "value", "defaultOptionValue": null}, // don't coerce here. I do it myself
      {"attribute": "readonly", "option": "readOnly", "defaultOptionValue": false,
        "validateOption": true},
      {"attribute": "required", "defaultOptionValue": false,
        "coerceDomValue": true, "validateOption": true},
      {"attribute": "title", "defaultOptionValue": ""},
      {"attribute": "min", "defaultOptionValue": null},
      {"attribute": "max", "defaultOptionValue": null},
      {"attribute": "step", "defaultOptionValue": 1}];

    this._superApply(arguments);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);
    // coerce regardless of where the option value came from - dom/constructor
    this.options['value'] = this._parse("value", this.options['value']);
    if (this.options['step'] != null)
      this.options['step'] = this._parseStep(this.options['step']);
    if (this.options['min'] != null)
      this.options['min'] = this._parse("min", this.options['min']);
    if (this.options['max'] != null)
      this.options['max'] = this._parse("max", this.options['max']);   
    // now make sure min < max, else throw an Error
    if (this.options['min'] != null && this.options['max'] != null)
    {
      if (this.options['max'] < this.options['min'])
      {
        throw new Error("ojInputNumber's max must not be less than min");
      }
    }
    
  },
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   * @instance
   * @memberof oj.ojInputNumber
   */
  _ComponentCreate: function()
  {
    var node = this.element;
    this._super();

    this._draw();

    this._on(this._events);

    // turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on(this.window,
            {
              "beforeunload": function()
              {
                node.removeAttr("autocomplete");
              }
            });

    // input type=number does not support the 'pattern' attribute, so
    // neither should ojInputNumber.
    // remove this before EditableValue grabs it and uses it.
    node.removeAttr("pattern");

    this._inputNumberDefaultValidators = {};
  },
  /**
   * This is where we do things right after the component was created.
   * this._super should be called first.
   * 
   * @override
   * @memberof oj.ojInputNumber
   * @instance
   * @protected
   */
  _AfterCreate: function()
  {
    this._super();
    this._setup();

  },
    /**
   * Performs post processing after _SetOption() is called. Different options when changed perform
   * different tasks. See _AfterSetOption[OptionName] method for details.
   * 
   * @param {string} option
   * @param {Object|string=} previous
   * @param {Object=} flags 
   * @protected
   * @memberof! oj.ojInputNumber
   * @instance
   */
  _AfterSetOption : function (option, previous, flags)
  {
    this._superApply(arguments);
    switch (option)
    {
      case "min": 
      case "max":
        this._Refresh(option, this.options[option]);
        break; 
      default:
        break;
    }
    
  },
  
  /**
   * Handles options specific to inputnumber.
   * Note that _setOption does not get called during create in the super class. 
   * It only gets called when the component has already been created.
   * However, we do call _setOption in _draw for certain attributes 
   * (disabled)
   * @override
   * @protected
   * @memberof oj.ojInputNumber
   */
  _setOption: function(key, value, flags)
  {
    var coercedValue;

    if (key === "value" || key === "max" || key === "min")
    {
      coercedValue = this._parse(key, value);
    }
    else if (key === "step")
    {
      coercedValue = this._parseStep(value);    
    }
    else
      coercedValue = value;
    

    // the superclass calls _Refresh. Our _Refresh calls _updateButtons
    // and _refreshAriaMinMaxValue.
    // call _super with the newly coerced 'value' property.
    this._super(key, coercedValue, flags);
    
    if (key === "max" || key === "min")
    {
      // since validators are immutable, they will contain min + max as local values. 
      // Because of this will need to recreate
      this._createRangeValidator();
      this._AfterSetOptionValidators();
    }

    // when a dom element supports disabled, use that, and not aria-disabled.
    // having both is an error. 
    // having aria-disabled on root dom element is ok (if it is added in base class)
    if (key === "disabled")
    {
      // force it to be a boolean. this is what/how ojbutton, EditableValue does.
      this.element.prop("disabled", !!value);
    }
    // when a dom element supports readonly, use that, and not aria-readonly.
    // having both is an error
    if (key === "readOnly")
    {
      this.element.prop("readonly", !!value);
      this._refreshStateTheming("readOnly", this.options.readOnly);
      this._refreshRoleSpinbutton("readOnly", this.options.readOnly);
    }
  },
  /**
   * Override of protected base class method.  
   * Method name needn't be quoted since is in externs.js.
   * @protected
   * @memberof oj.ojInputNumber
   * @instance
   */
  _destroy: function()
  {
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.uiInputNumber.replaceWith(this.element);
    clearTimeout(this.timer);
    return this._super();
  },
  /**
   * Used for explicit cases where the component needs to be refreshed 
   * (e.g., when the value option changes or other UI gestures).
   * @override
   * @protected
   * @memberof oj.ojInputNumber
   */
  _Refresh: function(name, value, forceDisplayValueRefresh)
  {
    this._superApply(arguments);
    var valueMinMax = (name === "value" || name === "max" || name === "min");
    if (valueMinMax)
      this._refreshAriaMinMaxValue();
    // needs to get called if value, min, max, or disabled change, but not otherwise.
    // put this condition since EditableValue calls _Refresh for every
    // option change, and we don't want to updateButtons for every single option
    // change.
    if (valueMinMax || name === "disabled")
      this._updateButtons();
  },
  // *********** END WIDGET FACTORY METHODS **********
  /**
   * Whether the a value can be set on the component. 
   * If the component is disabled (or readOnly) then 
   * then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * @memberof oj.ojInputNumber
   * @instance
   * @protected
   */
  _CanSetValue: function()
  {
    var canSetValue = this._superApply(arguments);

    if (!canSetValue)
      return false;

    var readOnly = this.options['readOnly'] || false;

    if (readOnly)
    {
      return false;
    }

    return true;
  },
  /**
   * Need to override since we allow users to set the converter to null, undefined, and etc and when 
   * they do we use the default converter
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof oj.ojInputNumber
   * @instance
   * @protected
   * @override
   */
  _GetConverter : function () 
  {
    return this.options['converter'] ? 
        this._superApply(arguments) : 
        $["oj"]["ojInputNumber"]["prototype"]["options"]["converter"];
  },
  /**
   * Sets up the default numberRange validators if there is a min or max.
   * 
   * @ignore
   * @protected
   * @override
   * @instance
   * @memberof oj.ojInputNumber
   */
  _GetImplicitValidators: function()
  {
    var ret = this._superApply(arguments);
    if (this.options['min'] != null || this.options['max'] != null)
    {
      this._createRangeValidator();
    }

    return $.extend(this._inputNumberDefaultValidators, ret);
  },
  /**
   * Returns the default styleclass for the component.
   * 
   * @return {string}
   * @memberof oj.ojInputNumber
   * @override
   * @protected
   */
  _GetDefaultStyleClass: function()
  {
    return "oj-inputnumber";
  },
  _events:
          {
            'keydown': function(event)
            {
              var keyCode = $.ui.keyCode;
              if (event.keyCode === keyCode.ENTER)
              {
                this._blurEnterSetValue(event);
                event.preventDefault();
              }
              else if (this._start() && this._keydown(event))
              {
                event.preventDefault();
              }
            },
            'keyup': function(event) {
              this._stop(event);
            },
            'focus': function()
            {
              this.previous = this.element.val();
            },
            'blur': function(event)
            {
              if (this.cancelBlur)
              {
                delete this.cancelBlur;
                return;
              }
              this._blurEnterSetValue(event);
            },
            "mousedown .oj-inputnumber-button": function(event)
            {
              var previous;

              // We never want the buttons to have focus; whenever the user is
              // interacting with the inputnumber, the focus should be on the input.
              // If the input is focused then this.previous is properly set from
              // when the input first received focus. If the input is not focused
              // then we need to set this.previous based on the value before spinning.
              previous = this.element[0] === this.document[0].activeElement ?
                      this.previous : this.element.val();

              function checkFocus()
              {
                var isActive = this.element[0] === this.document[0].activeElement;
                if (!isActive)
                {
                  this.element.focus();
                  this.previous = previous;
                  // support: IE
                  // IE sets focus asynchronously, so we need to check if focus
                  // moved off of the input because the user clicked on the button.
                  this._delay(function()
                  {
                    this.previous = previous;
                  });
                }
              }

              // ensure focus is on (or stays on) the text field
              event.preventDefault();
              checkFocus.call(this);

              // support: IE
              // IE doesn't prevent moving focus even with event.preventDefault()
              // so we set a flag to know when we should ignore the blur event
              // and check (again) if focus moved off of the input.
              this.cancelBlur = true;
              this._delay(function()
              {
                delete this.cancelBlur;
                checkFocus.call(this);
              });

              this._start();

              this._repeat(null, $(event.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, event);
            },
            "mouseup .oj-inputnumber-button": function(event)
            {
              this._stop(event);
            },
            "mouseenter .oj-inputnumber-button": function(event)
            {
              // button will add oj-active if mouse was down while mouseleave and kept down
              if (!$(event.currentTarget).hasClass("oj-active"))
              {
                return;
              }

              this._start();

              this._repeat(null, $(event.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, event);
            },
            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .oj-inputnumber-button": function(event)
            {
              this._stop(event);
            }
          },
  // I N T E R N A L   P R I V A T E   C O N S T A N T S    A N D   M E T H O D S 
  // Subclasses should not override or call these methods
  /**
   * @private
   * @const
   */
  _BUNDLE_KEY:
          {
            _TOOLTIP_DECREMENT: 'tooltipDecrement',
            _TOOLTIP_INCREMENT: 'tooltipIncrement'
          },
  /**
   * when below listed options are passed to the component, corresponding CSS will be toggled
   * @private
   * @const
   * @type {Object}
   */
  _OPTION_TO_CSS_MAPPING: {
    "readOnly": "oj-read-only"
  },
    /**
   * _setup is called on create and refresh.
   * @private
   */
  _setup: function() 
  {

    // button bindings. interesting.
    var incrementString =
            this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_INCREMENT);
    var decrementString =
            this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_DECREMENT);
    this.uiInputNumber.find(".oj-inputnumber-up").ojButton({display: 'icons',
      icons: {start: 'oj-component-icon oj-inputnumber-up-icon'},
      label: incrementString});
    this.uiInputNumber.find(".oj-inputnumber-down").ojButton({display: 'icons',
      icons: {start: 'oj-component-icon oj-inputnumber-down-icon'},
      label: decrementString});
    this._refreshAriaMinMaxValue();
    this._updateButtons();
    // update element DOM for readOnly
    if (typeof this.options['readOnly'] === "boolean")
    {
      this.element.prop("readonly", this.options['readOnly']);
    }
    this._refreshStateTheming("readOnly", this.options.readOnly);
    this._refreshRoleSpinbutton("readOnly", this.options.readOnly);
  }, 
  /**
   * @private
   */
  _draw: function()
  {
    var uiInputNumber = this.uiInputNumber = this.element.addClass("oj-inputnumber-input")
            .attr("autocomplete", "off")
            .wrap(this._uiInputNumberHtml()).parent()
            // add buttons
            .append(this._buttonHtml());

    // 
    // TODO: need to save off attributes and reset on destroy generically.
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");


    // add aria-hidden=true to buttons. As they are not in the keyboard sequence 
    // we decided it makes more sense to just add aria-hidden="true" to them 
    // and rely on the up/down arrow keys
    this.buttons = uiInputNumber.find(".oj-inputnumber-button")
            .attr("tabIndex", "-1").attr("aria-hidden", true);
  },
  /**
   * @private
   */
  _keydown: function(event)
  {
    var options = this.options, keyCode = $.ui.keyCode;

    switch (event.keyCode)
    {
      // keeping the up/down pressed repeats
      // using the up and down arrows will adjust the value so that it is 
      // a multiple of step and it is in min/max, same as if you used the 
      // up and down buttons
      case keyCode.UP:
        this._repeat(null, 1, event);
        return true;
      case keyCode.DOWN:
        this._repeat(null, -1, event);
        return true;
    }

    return false;
  },
  /**
   * @private
   */
  _uiInputNumberHtml: function()
  {
    return "<span class='oj-inputnumber oj-component'></span>";
  },
  /**
   * @private
   */
  _buttonHtml: function()
  {
    return "" + "<a class='oj-inputnumber-button oj-inputnumber-down'></a>" +
            "<a class='oj-inputnumber-button oj-inputnumber-up'></a>";
  },
  /**
   * @private
   */
  _start: function()
  {
    this.spinning = true;
    return true;
  },
  /**
   * @private
   */
  _repeat: function(i, steps, event)
  {
    // repeat spinning as long as the key is down and min/max isn't reached
    i = i || 500;

    clearTimeout(this.timer);
    this.timer = this._delay(function()
    {
      this._repeat(40, steps, event);
    },
            i);

    this._spin(steps * this.options.step, event);
  },
  /**
   * @private
   * @param {Number} step - Number of steps to increment.
   * @param {Object=} event an optional event if this was a result of ui interaction.
   */
  _spin: function(step, event)
  {
    // When the component's 'value' changes, the displayValue is automatically updated.
    // So reading the component's display value should always give you the element's value
    var value = this._getConvertedDisplayValue();
    value = this._adjustValue(value, step);

    this._SetValue(value, event, this._VALIDATION_MODE.VALIDATORS_ONLY);
  },
  /**
   * called from _adjustValue
   * @private
   */
  _precision: function()
  {
    var precision = this._precisionOf(this.options.step);
    if (this.options.min != null)
    {
      precision = Math.max(precision, this._precisionOf(this.options.min));
    }
    return precision;
  },
  /**
   * return the number of digits after the '.'
   * called from _adjustValue->_precision
   * @private
   * @param {Number} num - Number from which to calculate the precision
   */
  _precisionOf: function(num)
  {
    var str = num.toString(), decimal = str.indexOf(".");
    return decimal === -1 ? 0 : str.length - decimal - 1;
  },
  /**
   * adjust the value to be "valid".
   * The logic follows that of HTML-5's input number.
   * http://www.w3.org/TR/html5/forms.html#dom-input-stepup
   * A valid value is one that is a multiple of 
   * step starting at stepBase, where stepBase is min (if present),
   * else initial value (if present) TODO,
   * else (if type == number) 0 
   * If max is not a valid value, stepUp/stepDown will never go to max. It
   * will go to the calculated valid max (one that is the largest value 
   * that is an integral multiple of the step, and that is less than or equal
   * to the maximum.
   * @private
   */
  _adjustValue: function(value, step)
  {
    var newValue;
    var stepBase, aboveMin, options = this.options;
    var precision = this._precision();

    // make sure we're at a valid step when we step up or down.
    // - find out where we are relative to the base (min or 0)
    stepBase = options.min != null ? options.min : 0;

    // From http://www.w3.org/TR/html5/forms.html#dom-input-stepup:
    // If value subtracted from the step base is not an integral multiple 
    // of the step, then set value to the nearest value that, when subtracted
    // from the step base, is an integral multiple of the allowed value step,
    // and that is less than value if the method invoked was stepDown() and
    // more than value if the method invoked was stepUp().

    // is value-stepBase an integral multiple of step?
    aboveMin = value - stepBase;
    var rounded = Math.round(aboveMin / options.step) * options.step;
    rounded = parseFloat(rounded.toFixed(precision));
    var multiple = (rounded === aboveMin);

    if (!multiple)
    {
      if (step < 0)
        aboveMin = Math.ceil(aboveMin / options.step) * options.step;
      else
      {
        aboveMin = Math.floor(aboveMin / options.step) * options.step;
      }

      // rounding is based on 0, so adjust back to our base
      newValue = stepBase + aboveMin + step;
    }
    else
    {
      newValue = value + step;
    }

    // fix precision from bad JS floating point math
    // toFixed returns the newValue with a specific # of digits after the 
    // decimal point (this_precision() looks at max of step/min's # of 
    // digits.
    newValue = parseFloat(newValue.toFixed(precision));

    if (options.min != null && newValue < options.min)
      return options.min;

    if (options.max != null && newValue > options.max)
    {
      var validMax = (Math.floor((options.max - stepBase) / options.step) *
              options.step) + stepBase;
      // fix precision from bad JS floating point math
      validMax = parseFloat(validMax.toFixed(precision));
      return validMax;
    }

    return newValue;
  },
  /**
   * @private
   */
  _stop: function(event)
  {
    if (!this.spinning)
    {
      return;
    }
    clearTimeout(this.timer);
    this.spinning = false;
  },
  /**
   * @private
   */
  _updateButtons: function()
  {
    // When the component's 'value' changes, the displayValue is automatically updated.
    // So reading the component's display value gives you the value you see
    // on the screen. We want to update the up/down buttons to match.
    // We need the parsed version of displayValue, since displayValue could
    // be something like $10.00..
    var value = this._getConvertedDisplayValue();

    var min = this.options.min, max = this.options.max;
    if (!this.uiInputNumber)
      return;
    var downButton = this.uiInputNumber.find(".oj-inputnumber-down").ojButton();
    var upButton = this.uiInputNumber.find(".oj-inputnumber-up").ojButton();

    if (this.options.disabled || value === undefined)
    {
      downButton.ojButton("disable");
      upButton.ojButton("disable");
    }
    else if (max != null && value >= max)
    {
      downButton.ojButton("enable");
      upButton.ojButton("disable");
    }
    else if (min != null && value <= min)
    {
      downButton.ojButton("disable");
      upButton.ojButton("enable");
    }
    else
    {
      downButton.ojButton("enable");
      upButton.ojButton("enable");
    }

  },
  /**
   * @private
   */
  _getConvertedDisplayValue: function()
  {
    var value, displayValue;
    try
    {
      displayValue = this._GetDisplayValue() || 0;
      // if displayValue is not parseable, say it is 'abc', 
      // then _parseValue throws an error. catch it and move on.
      // TODO: Make _parseValue public in EditableValue();
      value = this._parseValue(displayValue);
    }
    catch (e)
    {
      // catch the error, set value to undefined, and continue to update
      // the buttons. both the up/down buttons will be disabled in this case.
      value = undefined;
    }
    return value;
  },
  /**
   * @private
   */
  _blurEnterSetValue: function(event)
  {
    this._stop();
    if (this.previous !== this.element.val())
    {
      this._refreshAriaMinMaxValue();
      this._updateButtons();
      // _SetValue triggers valuechange event
      this._SetValue(this.element.val(), event);
    }
  },
  /**
   * @private
   */
  _createRangeValidator: function()
  {
    var newMin = this.options['min'] != null ? this.options['min'] : undefined;
    var newMax = this.options['max'] != null ? this.options['max'] : undefined;
    
    var reqTrans = this.options['translations'] ? 
      this.options['translations']['numberRange'] || {}: {};

    var hintMin, hintMax, hintInRange;
    var messageDetailRangeOverflow, messageDetailRangeUnderflow;
    var messageSummaryRangeOverflow, messageSummaryRangeUnderflow;

    var hint = reqTrans['hint'] || {};
    var messageDetail = reqTrans['messageDetail'] || {};
    var messageSummary = reqTrans['messageSummary'] || {};

    if (hint !== null)
    {
      hintMin = hint['min'] || null;
      hintMax = hint['max'] || null;
      hintInRange = hint['inRange'] || null;
    }
    if (messageDetail !== null)
    {
      messageDetailRangeOverflow = messageDetail['rangeOverflow'] || null;
      messageDetailRangeUnderflow = messageDetail['rangeUnderflow'] || null;
    }
    if (messageSummary !== null)
    {
      messageSummaryRangeOverflow = messageSummary['rangeOverflow'] || null;
      messageSummaryRangeUnderflow = messageSummary['rangeUnderflow'] || null;
    }

    var numberRangeOptions = {
      'min': newMin,
      'max': newMax,
      'hint' : {'min':hintMin || null,
                'max':hintMax || null,
                'inRange': hintInRange || null
               },
      'messageDetail' : {
                'rangeOverflow':messageDetailRangeOverflow || null, 
                'rangeUnderflow': messageDetailRangeUnderflow || null},
      'messageSummary' : {
                'rangeOverflow':messageSummaryRangeOverflow || null, 
                'rangeUnderflow': messageSummaryRangeUnderflow || null},
      'converter': this._GetConverter()};
     
    this._inputNumberDefaultValidators[oj.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE] =
            oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE)
            .createValidator(numberRangeOptions);
  },

  // The user can clear out min/max by setting the option to null, so we
  // do not coerce null.
  /**
   * @param {string} option name of the option. this will show up in the error if thrown
   * @param val value to parse
   * @throws {Error} if option value is invalid
   * @private
   */
  _parse: function(option, val)
  {
    var returnValue;
    if (val !== null)
      returnValue = +val;
    else
      returnValue = val;

    // isNaN(null) returns false, which is what we want
    if (isNaN(returnValue))
      throw new Error("ojInputNumber's " + option + " option is not a number");
   
    return returnValue;
  },
  /**
   * parse the step's value
   * We are following the behavior of HTML-5 the best we can. According
   * to the spec, it says step must be a number greater than 0. 
   * Chrome defaults it to 1 if it is not.
   * @throws {Error} if option value is invalid 
   * @private
   */
  _parseStep: function(val)
  {
    var defaultStep = 1, parsedStep;
    if (val === null)
      return defaultStep;
    parsedStep = this._parse("step", val);
    if (parsedStep <= 0)
    {
      // throw an exception
      throw new Error("Invalid step for ojInputNumber; step must be > 0");
    }
    // DEFAULT to 1 if it isn't > 0
    if (parsedStep === null || parsedStep <= 0)
      parsedStep = defaultStep;
    return parsedStep;
  },
  /**
   * Toggles css selector on the widget. E.g., when readOnly option changes, 
   * the oj-read-only selector needs to be toggled.
   * @param {string} option
   * @param {Object|string|boolean} value 
   * @private
   */
  _refreshStateTheming: function(option, value)
  {
    if (Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(option) != -1)
    {
      // value is a boolean
      this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], !!value);
    }
  },
  /**
   * When readOnly option changes, 
   * the role spinbutton needs to be toggled We don't have role spinbutton
   * on readOnly inputNumber.
   * @param {string} option
   * @param {Object|string|boolean} value 
   * @private
   */
  _refreshRoleSpinbutton: function(option, value)
  {
    value = !!value;
    // if readonly is true, remove role spinbutton
    // if readonly is false, add role spinbutton
    if (value)
      this.widget().removeAttr("role");
    else
      this.widget().attr("role", "spinbutton");
  },
  /* updates the aria-value information */
  _refreshAriaMinMaxValue: function()
  {
    // valuenow needs to be the converted display value.
    var valuenow = this._getConvertedDisplayValue();
    var valuetext = this.element.val();

    this.element.attr(
            {
              "aria-valuemin": this.options.min, "aria-valuemax": this.options.max,
              // TODO: what should we do with values that can't be parsed?
              // TODO: Ask Pavitra, do we need to parse the value?
              "aria-valuenow": valuenow
            });
    if (!this._ValueEquals("" + valuenow, valuetext))
      this.element.attr({"aria-valuetext": valuetext});
  },
  /**
   * step the inputnumber value up or down
   * @private
   * @param {Number} steps - Number of steps to increment.
   * @param {boolean} up If true step up, else step down.
   */
  _step: function(steps, up)
  {
    this._start();
    if (up)
      this._spin((steps || 1) * this.options.step);
    else
      this._spin((steps || 1) * -this.options.step);
    this._stop();
  }

  /**
   * Removes the inputNumber functionality completely. 
   * This will return the element back to its pre-init state.
   * 
   * <p>This method does not accept any arguments.
   * 
   * @method
   * @name oj.ojInputNumber#destroy
   * @memberof oj.ojInputNumber
   * @instance
   * 
   * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
   * $( ".selector" ).ojInputNumber( "destroy" );
   */
});

//////////////////     SUB-IDS     //////////////////



/**
 * <p>Sub-ID for the inputNumber's Down arrow.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-inputnumber-down
 * @memberof oj.ojInputNumber
 * @instance
 * 
 * @example <caption>Get the node for the Down arrow:</caption>
 * var node = $( ".selector" ).ojInputNumber( "getNodeBySubId", {'subId': 'oj-inputnumber-down'} );
 */

/**
 * <p>Sub-ID for the inputNumber's input element.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-inputnumber-input
 * @memberof oj.ojInputNumber
 * @instance
 * 
 * @example <caption>Get the node for the input element:</caption>
 * var node = $( ".selector" ).ojInputNumber( "getNodeBySubId", {'subId': 'oj-inputnumber-input'} );
 */

});
