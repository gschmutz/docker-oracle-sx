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
 * JET Radioset @VERSION
 */
/**
 * @class
 * @name oj.ojRadioset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Radioset component (ojRadioset) enhances a group of 
 * <code class="prettyprint">input type="radio"</code> elements. It 
 * manages the selected value of the group and it adds required validation. 
 * It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojRadioset, group all the inputs and their labels within a 
 *   container dom element, e.g., <code class="prettyprint">div</code>.
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on 
 *   this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and 
 *   refer to that in the input's label's 
 *   <code class="prettyprint">for</code> attribute.
 *   Then create the ojRadioset on this container dom element.  
 * </p>
 * <p>
 *  The <code class="prettyprint">fieldset</code>/<code class="prettyprint">legend</code> elements 
 *  are not a supported way 
 *   to group and label ojRadioset, so <code class="prettyprint">fieldset</code> cannot be the 
 *   container dom element on which you create the ojRadioset. 
 *   Grouping with a <code class="prettyprint">div</code> element and using 
 *   a <code class="prettyprint">label</code> element allows you to
 *   lay out your labels/fields in more ways than if you used a fieldset/legend. 
 *   Both are equally accessible. 
 * </p>
 * <p>
 *  Radioset is used by selecting a container element which contains the 
 *  radio input elements and calling <code class="prettyprint">ojRadioset()</code>. 
 *  You can enable and disable a radio set, 
 *  which will enable and disable all contained radios. 
 * </p>
 * <p>
 *  Radioset does not have a readOnly option since HTML does not support
 *  readonly on radios and checkboxes.
 * </p>
 * 
 * <h3 id="keyboard-section">
   *   Keyboard End User Information
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The radioset does not add any extra keyboard navigation to the input radios. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Radioset takes care of setting 
 * <code class="prettyprint">role="radiogroup"</code> on the radioset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying 
 * <code class="prettyprint">aria-labelledby</code>
 * to point to the radioset's <code class="prettyprint">label</code> element for the group of radios.
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * <h3 id="label-section">
 *   Label and Radioset
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a <code class="prettyprint">label</code> element with the 
 * radioset by putting an <code class="prettyprint">id</code> on the label, and then setting the 
 * <code class="prettyprint">aria-labelledby</code> attribute on the radioset dom to be the label's 
 * <code class="prettyprint">id</code>.
 * Note: The radioset's label is not the same as the label for each radio. The 
 * radioset's label will have the required and help information on it, 
 * not the label for each radio.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code class="prettyprint">required</code> and 
 * <code class="prettyprint">help</code> options are set. 
 * </p>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> 
 *   and <code class="prettyprint">enable()</code> methods from the base class. 
 *    This API duplicates the functionality of the 
 *    <code class="prettyprint">disabled</code> option.  
 *    In JET, to keep the API as lean as possible, we have chosen not to document 
 *    these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Radioset.
 *  For JET Radioset, if the DOM changes (for example, you add/remove a radio), 
 *  you should <code class="prettyprint">refresh()</code>.
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the radioset with no options specified:</caption>
 * $(".selector").ojRadioset();
 * 
 * @example <caption>Initialize the radioset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojRadioset( { "value": "copy", "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="radioset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="radio" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="radio" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="radio" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' radio will be checked)
 * $("#radioset").ojRadioset({'option', 'value', 'ciao'});
 * 
 * @example <caption>Initialize a radioset via the JET 
 * <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', value: 'night'} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', 
 * value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a radio, and both
 * // will change.
 * self.currentTime = ko.observable("night");
 * @constructor
 */
oj.__registerWidget("oj.ojRadioset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * <p>
     * Disabled <code class="prettyprint">true</code> disables the component and disables all the 
     * inputs/labels. 
     * Disabled <code class="prettyprint">false</code> enables the component, and leaves the 
     * inputs' <code class="prettyprint">disabled</code> property as it is in the dom.
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
     * $(".selector").ojRadioset({"disabled": true});
     * 
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof oj.ojRadioset
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
     * $(".selector").ojRadioset({'value': 'coffee'});<br/>
     * @example <caption>Get or set <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns 'coffee'
     * $(".selector").ojRadioset("option", "value");
     * // Setter: sets 'tea'
     * $(".selector").ojRadioset("option", "value", 'tea');
     * 
     * @expose 
     * @access public
     * @instance
     * @default <code class="prettyprint">null</code>
     * When the option is not set, the value of the checked radio is used, if a radio is checked.
     * @memberof oj.ojRadioset
     * @type {string|undefined|null}
     */
    value: undefined
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the radioset
   * <p>A <code class="prettyprint">refresh()</code> is required 
   * when a radioset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After radios are added or removed or modified (without using ojRadioset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof oj.ojRadioset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojRadioset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // we have a rule for refresh: if we have an api for it, then the app dev has to use the
    // option, and not expect changing the dom will update the state with refresh.
    // For the this.$radios, before I call refresh on each of them, change their disabled option
    // based on the DOM.

    // !! ensures it is a boolean
    this.$radios.each(function() 
    {
        var disabledValue = $( this ).attr("disabled") !== undefined ? 
          !!$( this ).prop("disabled") : false;
        $( this )._ojRadioCheckbox("option", "disabled", disabledValue);
    });
      
    // refresh the ojRadioCheckbox's that exist, and  of the type=radio inputs that 
    // are not yet ojRadioCheckboxs, make them ojRadioCheckboxs.
    this.$radios = this._findRadiosWithMatchingName()
                    .filter( ".oj-radio" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojRadioCheckbox out of any 'new' radios.
                     // the END is key here. It makes it so that 
                     // this.$radios has ALL the radios.
                     // .not if a filter, it removes elements that do not have the
                     // oj-radio style class from the list of all input[type=radio]s.
                    .not( ".oj-radio" )
                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the radioset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof oj.ojRadioset
   * @instance
   * @return {jQuery} the radio
  */
  widget : function ()
  {
    return this.uiRadioset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
  /**
   * @protected
   * @override
   * @instance
   * @memberof oj.ojRadioset
   */
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    var radios, checkedRadio, domValue, previousValue;
    // TODO: When Max fixes it so that disabled can be undefined in initial options, then 
    // change it to undefined. Otherwise we aren't getting the defaultOptionValue of false,
    // since the initializeOptionsFromDom code checks for undefined before it sets default.
    // However, if we set disabled: false in our widget options, then this would be the merged
    // value that was written to this.options, and we wouldn't have to use the defaultOptionValue here.
    // There is a debate going on about which is the best thing to do.
    // Right now I use disabled: null, but that's not so good, because disabled is a boolean,
    // and when I init ojRadioset, then ask for the disabled option, it shouldn't return null.
    var props = [{"attribute": "disabled", "defaultOptionValue": false, "validateOption": true},
                 {"attribute": "placeholder", "defaultOptionValue": ""},
                 {"attribute": "required", "defaultOptionValue": false, 
                  "coerceDomValue": true, "validateOption": true},
                 {"attribute": "title", "defaultOptionValue": ""}
                 // {"attribute": "value", "defaultOptionValue": null} // code below sets value
               ]; 
    
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
      // return the checked values by simply looking at DOM node
      radios = this._findRadiosWithMatchingName();
      checkedRadio = radios.filter(":checked");
      domValue = (checkedRadio.length === 0) ? undefined : checkedRadio.val();
      // we only use the dom if SOMETHING is checked. If nothing is checked, we stay with whatever
      // is in this.options['value'].
      if (domValue !== undefined)
      {
        previousValue = this.options['value'];
        this.options['value'] = domValue;
        // when defaulting from DOM we want to trigger optionChange to writeback new value
        // _InitializedOptionFromDom keeps track of the options.
        // In _AfterCreate() each option tracked is written back.
        this._InitializedOptionFromDom('value', previousValue);
      }
      // widget defaults to null
      if (this.options['value'] === undefined)
        this.options['value'] = null;
    }
    

  },      
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   * @memberof oj.ojRadioset
   * @instance
   */
  _ComponentCreate : function ()
  {
    this._super();
    // first check to see if this.element is NOT a fieldset. If fieldset, throw error.
    if (this.element.is("fieldset"))
    {
      throw new Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
    }
    // turn each radio into ojRadioCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$radios = this._findRadiosWithMatchingName()._ojRadioCheckbox();

    this.uiRadioset = this.element.addClass("oj-radioset oj-component")
                                  .attr( "role", "radiogroup" );
    this._on(this._events);
    this._setup();

  },
  /**
   * Sets focus on the element that naturally gets focus. For radioset, this is the first radio <br/>
   * 
   * @returns {*} a truthy value if focus was set to the intended element, a falsey value 
   * otherwise.
   * @override
   * @memberof oj.ojRadioset
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
   * Returns a jquery object that is a set of elements that are input type radio
   * and have the name of the first radio found.
   * 
   * @return {Object} jquery object of all the radios within the root dom element
   * that have the same 'name' attribute as the first radio found.
   * @private
   */
  _findRadiosWithMatchingName : function ()
  {
    //return this.element.find('input[type=radio]'); // simplest thing to do.
    
    var first = this.element.find("input[type=radio]:first"), 
      name, allradios, selector;
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=radio within this element");
    }
    // get the name attribute of the first input radio
    name = first.attr("name");
    // find all input radios with matching name
    if (name === undefined)
    {
    	// search for all radios with no name
      allradios = this.element.find("input[type=radio]");
      // now loop and find the ones without 'name' attribute
      return allradios.not("[name]");
    }
    else
    {
    	// search for all radios with the name
      selector = "input[type=radio][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  // Override to set custom launcher
  _OpenContextMenu: function(menu, event)
  {
    // Setting the launcher to the checked radio if any (since that's what's tabbable in mainstream browsers), 
    // else the first enabled radio (when no selection, all enabled radios are tabbable).
    // Component owner should feel free to specify a different launcher if appropriate.
    // See the superclass JSDoc for _OpenContextMenu for tips on choosing a launcher.
    var radios = this.element.find("input[type=radio]");
    var checked = radios.filter(":checked");
    var launcher = checked.length ? checked : radios.filter(":enabled").first(); 
    menu.open(event, {"launcher": launcher, "initialFocus": "menu"});
  },
  /**
   * _setup is called on create and refresh. Use the disabled option to 
   * update the component. If the component's option is disabled, then
   * leave it alone.
   * @memberof oj.ojRadioset
   * @instance
   * @private
   */
  _setup: function() 
  {
    // disable radio if element was already disabled
    if (this.options.disabled === true)
    {
      // calls _setOption disable is true, which in turn disables all radios.
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
   * @memberof oj.ojRadioset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input radio?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$radios.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super(event);
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof oj.ojRadioset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' radio
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojRadioset stores a String value, and this value matches the value
   * of the currently checked radio. So, if we need to set the display value,
   * what this means is we need to 'check' the radio whose value matches the
   * displayValue.
   * 
   * @param {String} displayValue of the new string to be displayed
   * @override
   * @protected
   * @memberof oj.ojRadioset
  */  
  _SetDisplayValue : function (displayValue) 
  {
    var valueFilter, radioWithMatchingValue;
    if (displayValue != null)
    {
      // If we found a radio with a matching value, and it isn't already checked,
      // then check it. If it is already checked, do nothing.
      // If we can't find a radio with a matching value, then we uncheck 
      // all the radios. We do this so that the radio state matches the value option
      // value.
      
      valueFilter = "[value='" + displayValue + "']"; 
      if (valueFilter !== undefined && this.$radios !== undefined)
      {
        radioWithMatchingValue = 
            this.$radios.filter(valueFilter);
        // found a radio with a matching value
        if (radioWithMatchingValue !== undefined && radioWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!radioWithMatchingValue.prop('checked'))
          {
            radioWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
        else
        {
          // did not find any radios with a matching value, so uncheck
          // all of them.
          this.$radios._ojRadioCheckbox("option", "checked", false);
        }
      }
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojRadioset, the element's value is really the value
   * of the checked radio in the set.
   * @override
   * @protected
   * @memberof oj.ojRadioset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects radios that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the radio for example.
    // for radio, there will be one or none checked; 
    // if none are checked, return null (checkedRadio.val() is undefined if nothing is checked)
    var checkedRadio = this.$radios.filter(":checked");
    if (checkedRadio.length === 0)
      return null;
    else
      return checkedRadio.val();
  },
          
 
 
  
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * radioset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-radioset-label
   * All input components must override
   * 
   * @return {string}
   * @memberof oj.ojRadioset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-radioset";
  },
  /**
   * Returns a jquery object of the elements representing the 
   * content nodes (input type=radio). This is used in EditableValue to add
   * aria-describedby to the input when there is a help icon, to add
   * aria-required and aria-invalid
   * @protected
   * @override
   * @memberof oj.ojRadioset
   */
  _GetContentElement : function ()
  {
    return this._findRadiosWithMatchingName();
  },
   /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @memberof oj.ojRadioset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiRadioset;

    ariaValue = value; //value === "required" ? true : false;
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
   * Note that _setOption does not get called during create in the super class. 
   * It only gets called when the component has already been created.
   * @override
   * @private
   */
  _setOption : function (key, value)
  {
    this._superApply(arguments);
        
    if ( key === "disabled" ) 
    {
      this.$radios.each(function() 
      {
        // this is the technique to use to call package-private functions
        // Calling it like this.$radios.ojRadioCheckbox("__setAncestorComponentDisabled",value)
        // gives an error because jquery prevents you from calling functions with an "_"
        // 
        // This is how we handle 'disabled' for radioset. We don't change the radiocheckbox
        // component's disabled option ever since if we do that we've lost what the initial disabled
        // state is (we store the disabled dom value from the radio into its disabled option)
        // and we need that when we refresh. Instead what we do
        // is we mark if its ancestor (the radioset) is disabled or not. Then, when we render
        // out the radios 'disabled' state, like oj-disabled, we look to see if it is 'effectively
        // disabled' (see _IsEffectivelyDisabled call in ojRadioCheckbox), that is if its 
        // option is disabled OR its ancestor (the radioset) is disabled.
        $( this ).data("oj-_ojRadioCheckbox").__setAncestorComponentDisabled(value);
      });
 
      this.$radios._ojRadioCheckbox("refresh");
    }
  },
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-radioset-inputs</b>: the radioset's input elements</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof oj.ojRadioset
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
      if (subId === "oj-radioset-inputs") {
        node = this.$radios;
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
    if (this.$radios)
    {
      this.$radios._ojRadioCheckbox( "destroy" );
    }
    this._RestoreAttributes(); //remove when _RestoreAttributes is uncommented from jqueryui-base
    return this._super();
  }
  /**** end internal widget functions ****/ 
 
  /**
   * Removes the radioset functionality completely. 
   * This will return the element back to its pre-init state.
   * 
   * <p>This method does not accept any arguments.
   * 
   * @method
   * @name oj.ojRadioset#destroy
   * @memberof oj.ojRadioset
   * @instance
   * 
   * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
   * $( ".selector" ).ojRadioset( "destroy" );
   */
});

//////////////////     SUB-IDS     //////////////////


/**
 * <p>Sub-ID for the radioset's radios.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-radioset-inputs
 * @memberof oj.ojRadioset
 * @instance
 * 
 * @example <caption>Get the nodes for the radios:</caption>
 * var nodes = $( ".selector" ).ojRadioset( "getNodeBySubId", {'subId': 'oj-radioset-inputs'} );
 */


});
