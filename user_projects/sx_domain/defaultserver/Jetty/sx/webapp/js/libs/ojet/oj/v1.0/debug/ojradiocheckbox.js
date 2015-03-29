"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
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
 * JET Radio This component is private. @VERSION
 */
/**
 * The _ojRadio component enhances a browser input element into one that is 
 * of type=radio. This is a private component used by ojRadioset.
 * 
 * <h3>Events:</h3>
 * <ul>
 *   <li>clicked/checked?<p>
 *   Triggered if the checkbox is clicked; or if the checkbox was checked programatically
 *   with the checked option.
 *   </li>
 * </ul>
 * 
 * @class
 * @private
 * @constructor
 * @name oj._ojRadioCheckbox
 * @augments oj.baseComponent TODO: Should I extend this? 
 * Pros: it gives me oj-disabled/oj-enabled. (easy to add myself)
 * Cons: It gives me tooltip stuff that I don't want. I want that on the div or on the first checkbox only.
 * Pro/Con?: it rewrites required for me if it is on the dom node, but then it makes it required??? Should I rewrite required or don't care?
 */
oj.__registerWidget("oj._ojRadioCheckbox", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<input>", 
  widgetEventPrefix : "oj", 
  options : 
  {	 
    /** 
     * First we look for the disabled option to be explicitly set. If not, then
     * we look if disabled is on the dom. If null, disabled defaults to false.
     * @expose 
     * @type {?boolean|undefined}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof oj._ojRadioCheckbox
     */
    disabled: null,
    /** 
     * First we look for the checked option to be explicitly set. If not, then
     * we look if checked is on the dom. If null, checked defaults to false.
     * @expose 
     * @type {?boolean}
     * @public
     * @instance
     * @memberof oj._ojRadioCheckbox */
    checked : null,
    /** 
     * First we look for the disabled option to be explicitly set. If not, then
     * we look if disabled is on the dom. If null, disabled defaults to false.
     * @expose 
     * @type {?boolean}
     * @default <code class="prettyprint">false</code>
     * @public
     * @instance
     * @memberof oj._ojRadioCheckbox
     */
     type: null	
  },
  /**** start Public APIs ****/
  /**
   * 
   * <p>This method does not accept any arguments.
   * 
   * @public
   * @expose
   * @memberof oj.RadioCheckbox 
   * @return {jQuery} the label(s) for the checkbox/radio input
  */
  label : function ()
  {
    if (this.$label === undefined)
    {
      this.$label = this._getLabelsForElement();
    }
    return this.$label;
  },  
  /**
   * @expose 
   * @memberof oj._ojRadioCheckbox
   * @instance
   * @override
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" )._ojRadioCheckbox( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    this._setup();
  },    
  /**
   * Returns a jQuery object containing the element visually representing the checkbox. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof oj._ojRadioCheckbox
   * @instance
   * @return {jQuery} the checkbox or radio
  */
  widget : function ()
  {
      return this.uiRadioCheckbox;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
 /**
  * Called at component create time primarily to initialize options, often using DOM values. This 
  * method is called before _ComponentCreate is called, so components that override this method 
  * should be aware that the component has not been rendered yet. The element DOM is available and 
  * can be relied on to retrieve any default values. <p> 
  * @param {!Object} originalDefaults - original default options defined on the widget and its ancestors
  * @param {?Object} constructorOptions - options passed into the widget constructor
  * 
  * @memberof oj._ojRadioCheckbox
  * @instance
  * @protected
  */
  _InitOptions: function(originalDefaults, constructorOptions)
  {
    this._super(originalDefaults, constructorOptions);
    // CHECKED:
    // if options.checked is not set, or not valid, get it from the element
    // if options.checked is set to a valid value (boolean), set it on the 
    // element to keep the two in sync (we do this in _AfterCreate -> _setup)
    // TODO: throw an Error if the options.checked or disabled is set to something other than a boolean!
    if (this.options.checked === null)
    {
      // !! ensures it is a boolean
      this.options.checked = this.element.attr("checked") !== undefined ? 
          !!this.element.prop("checked") : false;
    }
    else if (typeof this.options.checked !== "boolean")
    {
      throw new Error("checked option must be a boolean");
    }
    // DISABLED:
    // if options.disabled is not set, or not valid, get it from the element
    // if options.disabled is set to a valid value (boolean), set it on the 
    // element to keep the two in sync (we do this in _AfterCreate -> _setup)
    if (this.options.disabled === null)
    {
      // !! ensures it is a boolean
      this.options.disabled = this.element.attr("disabled") !== undefined ? 
          !!this.element.prop("disabled") : false;
    }
    else if (typeof this.options.disabled !== "boolean")
    {
      throw new Error("disabled option must be a boolean");
    } 
	
	// TYPE:
	// Get's the type which will be either radio or checkbox
    this.options.type = this.element.prop( "type" );
  },
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   * @instance
   * @memberof oj._ojRadioCheckbox
   */
  _ComponentCreate: function()
  {
    this._super();

    var type = this.options.type;
    if (type == "checkbox") {
        this.uiRadioCheckbox = this.element.addClass("oj-checkbox oj-component");
        this.$label = this._getLabelsForElement();
        this.$label.addClass("oj-checkbox-label");
    }
    else if (type == "radio") {
        this.uiRadioCheckbox = this.element.addClass("oj-radio oj-component");
        this.$label = this._getLabelsForElement();
        this.$label.addClass("oj-radio-label");
    }	
    
    // oj-hover/oj-focus/oj-active should be added/removed in code as needed, 
    // however these should only be added when the item is enabled. 
    // When the item is disabled these classes should not be added.
    var self = this;
    this._hoverable( this.element );
    this._focusable( this.element );
    this._activeable( this.element );
    // loop through each label
    $.each(self.$label, function ()
    {
      self._hoverable(this);
      self._focusable(this);
      self._activeable(this);
    });
    this._on(this._events);    
  },
  /**
   * This is where we do things right after the component was created.
   * this._super should be called first.
   * 
   * @override
   * @memberof oj._ojRadioCheckbox
   * @instance
   * @protected
   */
  _AfterCreate: function()
  {
    this._super();
    this._setup();

  },
  /* _setup called during creation and refresh */
  _setup : function() 
  {
    this._renderDisabled();

    // set checked checkbox or radio dom if component checked option is true
    if (this.options.checked)
    {
      this._setOption("checked", true);
    }
    else
    {
      this._setOption("checked", false);
    }
  },
  _renderDisabled : function()
  {
    var effectivelyDisabled = this._IsEffectivelyDisabled();
    if (effectivelyDisabled)
    {
      // set the dom to show DISABLED, but do NOT change the disabled option!
      // 
      // when a dom element supports disabled, use that, and not aria-disabled.
     // having both is an error.
     this.element.prop("disabled", true).removeAttr( "aria-disabled")
     .removeClass("oj-enabled").addClass("oj-disabled");

     this.$label.removeClass("oj-enabled")
     .addClass("oj-disabled");
    }
    else // option not set to disabled. nor is parent. On refresh this is ok, since we get it from the option.
    {
      // when a dom element supports disabled, use that, and not aria-disabled.
      // having both is an error.
      this.element.prop("disabled", false)
      .removeAttr( "aria-disabled").removeClass("oj-disabled")
      .addClass("oj-enabled");
      this.$label.addClass("oj-enabled")
      .removeClass("oj-disabled");      
    }
  },
  _events : 
  {

  },
  /**
   * @override
   * @private
   */
  _setOption : function (key, value)
  {

    this._superApply(arguments);

    if (key === "disabled")
    {
      value = !!value;
      this._renderDisabled(value);
    }
 
    if (key === "checked")
    {
      if (value)
      {
        this.element.prop("checked", true);
      }
      else 
      {
        this.element.prop("checked", false);
      }
      this.element.toggleClass("oj-selected", value);
    }
  }, 
  /**
   * Returns the list of labels for the element. Most likely this will be 
   * one label, not multiple labels.
   * We do not guarantee that the returned list is live
   * We do not guarantee that the returned list is in document order
   * We first check if we are nested in a label, and then we check a jquery 
   * selector query on <label>s with a 'for' id equal to our id.
   * NOTE: The .labels DOM property does not work on most browsers, so we don't use it.
   * e.g,
   * <pre>
   * <input id="opt3" type="checkbox" name="rb" value="opt3">
   * <label class="oj-choice-label" for="opt3">Checkbox Option 3</label>
   * </pre>
   * @private
   */
  _getLabelsForElement: function() 
  {
    // .closest("label") - For each element in the set, get the first element   
    // that matches the selector by testing the element itself and traversing up 
    // through its ancestors in the DOM tree.   
    var labelClosestParent = this.element.closest("label");
    var id = this.element.prop("id");
    var labelForQuery = "label[for='" + id + "']";
    // combine these two query results to return the label we are nested in
    //  and/or the label with the for attribute pointing to the checkbox's id.
    return labelClosestParent.add($(labelForQuery)); 
  },
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-radiocheckbox-input</b>: the radio/checkbox's input</li>
   * <li><b>oj-radiocheckbox-label</b>: the radio/checkbox's label</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof oj._ojRadioCheckbox
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
    var node = this._super(locator);    
    if (!node)
    {
      var subId = locator['subId'];
      if (subId === "oj-radiocheckbox-input") {
        node = this.element[0];
      }
      if (subId === "oj-radiocheckbox-label") {
        // this.label() returns a jquery object. we want to return a dom element
        node = this.label()[0];
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
    var type = this.options.type;
    // this.$label is the label for the checkbox/radio, NOT the label for the radioset/checkboxset.
    // We don't save and restore these attributes in base class, so we need to clean up ourselves
    if (type == "checkbox") 
    {
      this.$label.removeClass("oj-enabled oj-disabled oj-checkbox-label");
    }
    else if (type == "radio") 
    {
      this.$label.removeClass("oj-enabled oj-disabled oj-radio-label");
    }
    this._RestoreAttributes(); //remove when _RestoreAttributes is uncommented from jqueryui-base
    return this._super();
  }
  
  /**** end internal widget functions ****/ 
 
});
});
