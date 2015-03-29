"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue', 'ojs/ojradiocheckbox'], 
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
/*!
 * JET Checkboxset @VERSION
 */
/**
 * @class
 * @name oj.ojCheckboxset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Checkboxset component (ojCheckboxset) enhances a group of 
 * <code class="prettyprint">input type="checkbox"</code> elements and 
 * manages the selected values of the group. It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojCheckboxset, group one or more checkbox inputs and their labels 
 *  within a container dom element, e.g., <code class="prettyprint">div</code>.
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and refer to that in the 
 *   input's label's <code class="prettyprint">for</code> attribute.
 *   Then create the ojCheckboxset on this container dom element.  
 * </p>
 * <p>
 *  The <code class="prettyprint">fieldset</code>/<code class="prettyprint">legend</code> elements 
 *  are not a supported way 
 *  to group and label ojCheckboxset, so <code class="prettyprint">fieldset</code> cannot be the 
 *  container dom element on which you create the ojCheckboxset. 
 *  Grouping with a <code class="prettyprint">div</code> element and using 
 *  a <code class="prettyprint">label</code> element allows you to
 *  lay out your labels/fields in more ways than if you used a fieldset/legend. 
 *  Both are equally accessible. 
 * </p>
 * <p>
 *  Checkboxset is used by selecting a container element which contains the 
 *  checkbox input elements and calling <code class="prettyprint">ojCheckboxset()</code>. 
 *  You can enable and disable a checkbox set, 
 *  which will enable and disable all contained checkboxes. 
 * </p>
 * <p>
 *  Checkboxset does not have a readOnly option since HTML does not support
 *  readonly on radios and checkboxes.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help information, if 
 * the applicable API is set. See the <code class="prettyprint">required</code> and 
 * <code class="prettyprint">help</code>
 * options. Use <code class="prettyprint">aria-labelledby</code> to associate the main label with
 * the checkboxset component. Doing this also makes the checkboxset accessible.
 * </p>
 * <h3 id="keyboard-section">
 *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The checkboxset does not add any extra keyboard navigation to the input checkboxes. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Checkboxset takes care of setting <code class="prettyprint">role="group"</code> 
 * on the checkboxset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying 
 * <code class="prettyprint">aria-labelledby</code>
 * to point to the main label element for the group of checkboxes.
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * <h3 id="label-section">
 *   Label and Checkboxset
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the checkboxset
 * by putting an <code class="prettyprint">id</code> on the label, and then setting the 
 * <code class="prettyprint">aria-labelledby</code> attribute on the checkboxset dom to be the 
 * label's id.
 * Note: The checkboxset's label is not the same as the label for each checkbox.  
 * The checkboxset's label will have the required and help information on it, 
 * not the label for each checkbox.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code class="prettyprint">required</code> and 
 * <code class="prettyprint">help</code> options are set. 
 * </p>
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * <ul>
 *  <li>optionChange(event, ui) - Type: ojoptionchange
 *  <p>
 *   Triggered if the value changes when the user interacts with the component 
 *   (clicking on one of the checkboxe buttons); or if the value has 
 *   changed programmatically via the value option. 
 *  </li>
 * </ul>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates or re-initializes a JET Checkboxset.  For JET components, re-initing 
 * is generally like a hard refresh, meaning it typically does everything 
 * <code class="prettyprint">refresh()</code> does, plus potentially a bit more. 
 *  For JET Checkboxset, if the DOM changes (for example, you add/remove a checkbox), you should refresh.
 * 
 * <p>Don't confuse the re-initializer with the <code class="prettyprint">option()</code> method, 
 * which (in one overload) also accepts a map of option-value pairs
 * to set on the component, but does not re-init.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the checkboxset with no options specified:</caption>
 * $(".selector").ojCheckboxset();
 * 
 * @example <caption>Initialize the checkboxset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojCheckboxset( { "value": ["copy"], "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="checkboxset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="checkbox" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' checkbox will be checked)
 * $("#checkboxset").ojCheckboxset({'option', 'value', ['ciao']});
 * 
 * @example <caption>Initialize a checkboxset via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: ['night']} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="checkboxset" data-bind="ojComponent: {component: 'ojCheckboxset', value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="checkbox" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="checkbox" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a checkbox, and both
 * // will change.
 * self.currentTime = ko.observable(["night"]);
 * @constructor
 */
oj.__registerWidget("oj.ojCheckboxset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
     /** 
     * <p>
     * Disabled <code class="prettyprint">true</code> disables the component and disables 
     * all the inputs/labels. 
     * Disabled <code class="prettyprint">false</code> enables the component, and leaves the inputs 
     * disabled state as it is in the dom.
     * <p>
     * After create time, the disabled state should be set via this API, 
     * not by setting the underlying DOM attribute. 
     *  
     * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by 
     * the <code class="prettyprint">ojComponent</code> binding 
     * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> 
     * and <code class="prettyprint">enable</code> bindings, 
     * as the former sets the API, while the latter sets the underlying DOM attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
     * $(".selector").ojCheckboxset({"disabled": true});
     * 
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof oj.ojCheckboxset
     */
    disabled: null,
    /** 
     * The value of the component. 
     * 
     * <p>
     * When <code class="prettyprint">value</code> option changes due to programmatic 
     * intervention, the component always clears all messages and runs deferred validation, and 
     * always refreshes UI display value.</br>
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
     * $(".selector").ojCheckboxset({'value': ['coffee']});<br/>
     * @example <caption>Get or set <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns ['coffee']
     * $(".selector").ojCheckboxset("option", "value");
     * // Setter: sets ['coffee', 'tea']
     * $(".selector").ojCheckboxset("option", "value", ['coffee', 'tea']);
     * 
     * @expose 
     * @access public
     * @instance
     * @default <code class="prettyprint">[]</code>
     * When the option is not set, value is set to an array built from the checked checkboxes, if
     * any are checked.
     * @memberof oj.ojCheckboxset
     * @type {Array|undefined|null}
     */
    value: undefined
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the checkboxset
   * <p>A <code class="prettyprint">refresh()</code> or re-init is required 
   * when a checkboxset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After checkboxes are added or removed or modified (without using ojCheckboxset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof oj.ojCheckboxset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojCheckboxset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // we have a rule for refresh: if we have an api for it, then the app dev has to use the
    // option, and not expect changing the dom will update the state with refresh.
    // For the this.$radios, before I call refresh on each of them, change their disabled option
    // based on the DOM.

    // !! ensures it is a boolean
    this.$checkboxes.each(function() 
    {
        var disabledValue = $( this ).attr("disabled") !== undefined ? 
          !!$( this ).prop("disabled") : false;
        $( this )._ojRadioCheckbox("option", "disabled", disabledValue);
    });
      
    // refresh the ojRadioCheckbox's that exist, and  of the type=radio inputs that 
    // are not yet ojRadioCheckboxs, make them ojRadioCheckboxs.
    this.$checkboxes = this._findCheckboxesWithMatchingName()
                    .filter( ".oj-checkbox" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojCheckbox out of any 'new' checkboxes.

                     // the END is key here. It makes it so that 
                     // this.$checkboxes has ALL the checkboxes.

                     // .not if a filter, it removes elements that do not have the
                     // oj-checkbox style class from the list of all input[type=checkbox]s.
                    .not( ".oj-checkbox" )

                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the checkboxset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof oj.ojCheckboxset
   * @instance
   * @return {jQuery} the checkbox
  */
  widget : function ()
  {
    return this.uiCheckboxset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
     
  /**
   * Overridden to set the options.value. When constructorOptions value is undefined,
   * we read the CHECKED options on the checkboxes and build the value array from that.
   * 
   * @memberof oj.ojCheckboxset
   * @instance
   * @protected
   */  
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    var checkboxes, checkedValues = new Array(), selectedCheckbox, domValue, previousValue,
        props = [{"attribute": "disabled", "defaultOptionValue": false, "validateOption": true},
                 {"attribute": "title", "defaultOptionValue": ""},
                 {"attribute": "placeholder", "defaultOptionValue": ""},
                 //{"attribute": "value", "defaultValue": null},  // code below sets value
                 {"attribute": "required", "defaultOptionValue": false, 
                  "coerceDomValue": true, "validateOption": true
                 }]; 

    this._super(originalDefaults, constructorOptions);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);

    // component, app, and constructor are merged into this.options.option by the time _InitOptions 
    // is called. Let's take this example:
    // component (widget) default - 'foo'<br/>
    // app default - 'bar'<br/>
    // dom  - 'lucy'<br/>
    // constructorOptions['value'] - undefined<br/>
    // this.options.option is set to 'bar' initially. We don't want to just take this value, because
    // we want DOM value to win over the app and components default if DOM is set.
    // Therefore, the component needs to check if the constructorOptions['value'] is 
    // undefined and if so, set value option to 'lucy' (the DOM value in this example). <br/>
    // 
    // use DOM value if constructorOptions is undefined. if DOM value is undefined, then
    // leave this.options["value"] alone since it's the merged app/widget default at this point.
    if (constructorOptions['value'] === undefined)
    {
      // constructor option for value is undefined. Then we check the dom.
      checkboxes = this._findCheckboxesWithMatchingName();
      selectedCheckbox = checkboxes.filter(":checked");
      if (selectedCheckbox.length > 0)
      {
        selectedCheckbox.each(function(){
          checkedValues.push($(this).val());
        });
        domValue = checkedValues;
        previousValue = this.options["value"];
        // when defaulting from DOM we want to trigger optionChange to writeback new value
        // _InitializedOptionFromDom keeps track of the options.
        // In _AfterCreate() each option is written back.
        this._InitializedOptionFromDom('value', previousValue);
        this.options["value"] = domValue;
      }
      // if nothing is checked, we leave this.options["value"] as it is if not undefined, else
      // the widget's default is [].
      if (this.options["value"] === undefined)
        this.options["value"] = [];

    }
  },    
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   * @memberof oj.ojCheckboxset
   * @instance
   */
  _ComponentCreate : function ()
  {
    this._super();
    // first check to see if this.element is NOT a fieldset. If fieldset, throw error.
    if (this.element.is("fieldset"))
    {
      throw new Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
    }
    // turn each checkbox into ojCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$checkboxes = this._findCheckboxesWithMatchingName()._ojRadioCheckbox();
    this.uiCheckboxset = this.element.addClass("oj-checkboxset oj-component")
                                  .attr( "role", "group" );
    this._on(this._events);
    this._setup();
    
  },
  /**
   * Sets focus on the element that naturally gets focus. For radioset, this is the first checkbox <br/>
   * 
   * @returns {*} a truthy value if focus was set to the intended element, a falsey value 
   * otherwise.
   * @override
   * @memberof oj.ojCheckboxset
   * @instance
   * @protected
   * @since 0.7
   */
  Focus : function ()
  {
    this._GetContentElement().first().focus();
    return true;
  },
  /**
   * Returns a jquery object that is a set of elements that are input type checkbox
   * and have the name of the first checkbox found.
   * 
   * @return {Object} jquery object of all the checkboxes within the root dom element
   * that have the same 'name' attribute as the first checkbox found.
   * @private
   */
  _findCheckboxesWithMatchingName : function ()

  {
    //return this.element.find('input[type=checkbox]'); // simplest thing to do.
    
    var first = this.element.find("input[type=checkbox]:first"),
      name, allcheckboxes, selector;
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=checkbox within this element");
    }
    // get the name attribute of the first input checkbox
    name = first.attr("name");
    // find all input checkboxes with matching name
    if (name === undefined)
    {
    	// search for all checkboxes with no name
      allcheckboxes = this.element.find("input[type=checkbox]");
      // now loop and find the ones without 'name' attribute
      return allcheckboxes.not("[name]");
    }
    else
    {
    	// search for all checkboxes with the name
      selector = "input[type=checkbox][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  
  // Override to set custom launcher
  _OpenContextMenu: function(menu, event)
  {
    // Setting the launcher to the first tabbable checkbox in the set.
    // Component owner should feel free to specify a different launcher if appropriate, 
    // e.g. could specify the "current" checkbox rather than the first if desired.
    // See the superclass JSDoc for _OpenContextMenu for tips on choosing a launcher.
    var launcher = this.element.find("input[type=checkbox]:tabbable").first();
    menu.open(event, {"launcher": launcher, "initialFocus": "menu"});
  },
  /**
   * _setup is called on create and refresh. Use the disabled option to 
   * update the component. If the component's option is disabled, then
   * leave it alone.
   * @memberof oj.ojCheckboxset
   * @instance
   * @private
   */
  _setup: function() 
  {

    // disable checkbox if element was already disabled
    if (this.options.disabled)
    {
      // calls _setOption disable is true, which in turn disables all checkboxs.
      this.disable();
    }
    else if (this.options.disabled === false)
    {
      this.enable();
    }
  },   
  _events : 
  {
    'change' : function (event)
    {
      
      this._HandleChangeEvent(event);
    }
  },

  /**
   * @param {Event} event DOM event 
   * @override
   * @protected
   * @memberof oj.ojCheckboxset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input checkbox?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$checkboxes.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super(event);
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof oj.ojCheckboxset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' checkboxes
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojCheckboxset stores an Array value, and this value matches the values
   * of the currently checked checkboxes. So, if we need to set the display value,
   * what this means is we need to 'check' the checkboxes whose values match the
   * displayValue.
   * 
   * @param {String} checkedBoxes of the new string to be displayed
   * @override
   * @protected
   * @memberof oj.ojCheckboxset
  */  
 _SetDisplayValue : function (checkedBoxes) 
  {
    var displayValue, valueFilter, checkboxWithMatchingValue;
    this.$checkboxes._ojRadioCheckbox("option", "checked", false);
    if (checkedBoxes != null)
    {
      // Uncheck all the checkboxes then iterate through and checkoff any matching checkboxes from the value
      for(var i = 0; i < checkedBoxes.length; i++) {
        displayValue = checkedBoxes[i];
        valueFilter = "[value='" + displayValue + "']"; 

        checkboxWithMatchingValue = this.$checkboxes.filter(valueFilter);
        if (checkboxWithMatchingValue !== undefined && checkboxWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!checkboxWithMatchingValue.prop('checked'))

          {
            checkboxWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
      }
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojCheckboxset, the element's value is really the value
   * of the checked checkboxes in the set.
   * @override
   * @protected
   * @memberof oj.ojCheckboxset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects checkboxes that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the checkbox for example.
    // for checkbox, there will be one or none checked; 
    // if none are checked, return null (selectedCheckbox.val() is undefined if nothing is checked)
    var checkedValues=new Array();
    var selectedCheckbox = this.$checkboxes.filter(":checked");
    if (selectedCheckbox.length === 0)
      return [];
    else 
    { 
      selectedCheckbox.each(function(){checkedValues.push($(this).val());});
      return checkedValues;
    }
  },

  
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * checkboxset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-checkboxset-label
   * All input components must override
   * 
   * @return {string}
   * @memberof oj.ojCheckboxset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-checkboxset";
  },
  /**
   * Returns a jquery object of the elements representing the content nodes (checkboxes/labels).
   * @protected
   * @override
   * @memberof oj.ojCheckboxset
   */
  _GetContentElement : function ()
  {
    return this._findCheckboxesWithMatchingName();
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {boolean=} value the current value of the required option
   * @memberof oj.ojCheckboxset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiCheckboxset;

    ariaValue = (value) ? true : false;
    if (ariaValue && rootNode) 
    {
      rootNode.attr("aria-required", ariaValue);
    }
    else
    {
      rootNode.removeAttr("aria-required");
    }
  },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value, flags)
  {
    this._super(key, value, flags);

    if ( key === "disabled" ) 
    {
      this.$checkboxes.each(function() 
      {
        // this is the technique to use to call package-private functions
        // Calling it like this.$radios.ojRadioCheckbox("__setAncestorComponentDisabled",value)
        // gives an error because jquery prevents you from calling functions with an "_"
        // 
        // This is how we handle 'disabled' for the checkboxset. We don't change the radiocheckbox
        // component's disabled option ever since if we do that we've lost what the initial disabled
        // state is (we store the disabled dom value from the radio into its disabled option)
        // and we need that when we refresh. Instead what we do
        // is we mark if its ancestor (the checkboxset) is disabled or not. Then, when we render
        // out the checkboxes 'disabled' state, like oj-disabled, we look to see if it is 'effectively
        // disabled' (see _IsEffectivelyDisabled call in ojRadioCheckbox), that is if its 
        // option is disabled OR its ancestor (the checkboxset) is disabled.
        $( this ).data("oj-_ojRadioCheckbox").__setAncestorComponentDisabled(value);
      });
      
      this.$checkboxes._ojRadioCheckbox("refresh"); // re-render
    }
  },
/**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-checkboxset-inputs</b>: the checkboxset's input elements</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof oj.ojCheckboxset
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property 
   * whose value is a string, documented by the component, that allows the component to 
   * look up the subcomponent associated with that string.  It contains:
   * <ul>
   * <li>
   * component: optional - in the future there may be more than one component 
   *   contained within a page element
   * </li>
   * <li>
   * subId: the string, documented by the component, that the component expects 
   * in getNodeBySubId to locate a particular subcomponent 
   * </li>
   * </ul>  
   * @returns {Element|null} the subcomponent located by the subId string 
   * passed in locator, if found.
   */
  getNodeBySubId: function(locator)
  {
    var node = this._super(locator), subId;
    if (!node)
    {
      subId = locator['subId'];
      if (subId === "oj-checkboxset-inputs") {
        return this.$checkboxes;
      }
    }    
    // Non-null locators have to be handled by the component subclasses
    return node || null;
  }, 
  
  /**
   * @ignore
   * @protected
   * @override
   */
  _destroy : function ()
  {  
    if (this.$checkboxes)
    {
      this.$checkboxes._ojRadioCheckbox( "destroy" );
    }
    this._RestoreAttributes(); //remove when _RestoreAttributes is uncommented from jqueryui-base
    return this._super();
  }
  /**** end internal widget functions ****/ 
   /**
   * Removes the checkboxset functionality completely. 
   * This will return the element back to its pre-init state.
   * 
   * <p>This method does not accept any arguments.
   * 
   * @method
   * @name oj.ojCheckboxset#destroy
   * @memberof oj.ojCheckboxset
   * @instance
   * 
   * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
   * $( ".selector" ).ojCheckboxset( "destroy" );
   */
});

//////////////////     SUB-IDS     //////////////////


/**
 * <p>Sub-ID for the checkboxset's checkboxes.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-checkboxset-inputs
 * @memberof oj.ojCheckboxset
 * @instance
 * 
 * @example <caption>Get the nodes for the checkboxes:</caption>
 * var nodes = $( ".selector" ).ojRadioset( "getNodeBySubId", {'subId': 'oj-checkboxset-inputs'} );
 */
});
