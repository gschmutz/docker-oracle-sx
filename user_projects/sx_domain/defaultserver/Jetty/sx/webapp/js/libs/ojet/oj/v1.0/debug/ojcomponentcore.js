define(['ojs/ojcore', 'jquery', 'jqueryui', 'ojs/ojmessaging'], function(oj, $)
{
/*
** Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
**
**34567890123456789012345678901234567890123456789012345678901234567890123456789
*/


/**
 * @class JET Component services
 * @export
 */
oj.Components = {};


/**
 * Sets default options values for JET components.
 * @param {Object} options - property values that will be merged into the values
 * that were previously set using this method. The options object is expected to have the format demonstrated
 * by the following example:
 * <pre>
 * {
 *   'default': // properties for all JET components 
 *   {
 *     'option1': 'somevalue'
 *   },
 *   'editableValue': // properties for editableValue components 
 *   {
 *     'option1': 'somevalue1',
 *     'option2': oj.Components.createDynamicPropertyGetter(function(context){
 *                                 return context['containers'].indexOf('ojTable') >= 0 ? 'tableValue' : 'normalValue'})
 *   },
 *   'ojText': // properties for instances of ojText 
 *   {
 *     'option1': 'somevalue2'
 *   }
 * }
 * </pre>
 * To specify a dynamic getter for the property, pass your callback to oj.Components.createDynamicPropertyGetter(). Note
 * that dynamic getters nested within a complex property value are not supported
 * @see oj.Components.createDynamicPropertyGetter
 * @export
 */
oj.Components.setDefaultOptions = function(options)
{
  oj.Components._defaultProperties = $.widget.extend(oj.Components._defaultProperties || {}, options);
};

/**
 * Retrieves default option values for JET components.
 * @return {Object} default option values
 * @see oj.Components.setDefaultOptions
 * @export
 */
oj.Components.getDefaultOptions = function()
{
  return (oj.Components._defaultProperties || {});
};


/**
 * Creates a dynamic getter that can be used as a property value in oj.Components.setDefaultOptions()
 * @param {!Function} callback - dynamic property callback. The callback will receive a context object as a parameter.
 * The following properties are currently supported on the context object:
 * <ul>
 * <li>containers - an array of component names of the current component's containers that require special behavior from
 * their children</li>
 * </ul>
 * The callback should return the computed property value
 * 
 * @return {Object} - dynamic property getter
 * @see oj.Components.setDefaultOptions
 * @export
 */
oj.Components.createDynamicPropertyGetter = function(callback)
{
  return new __ojDynamicGetter(callback);
};

/**
 * Retrieves widget constructor associated with the HTML element
 * or null if none is found. The returned constructor is already bound to the associated 
 * JQuery element, so it can be invoked as a function directly. For example:
 * <pre>
 * widgetConstructor("option", "label", "custom"); // sets label option
 * </pre>
 * If widgetName is not specified, and if more than one widget is associated with the element, 
 * the method will a return the widget that was created first.
 * @param {Element} element - HTML element
 * @param {string=} widgetName - optional widget name
 * @return {Function|null} widget constructor
 * @export
 */
oj.Components.getWidgetConstructor = function(element, widgetName)
{
  var jelem = $(element);
  
  if (widgetName == null)
  {
    var data = jelem.data(_OJ_WIDGET_NAMES_DATA);
    if (data)
    {
      widgetName = data[0]; 
    }
  }
  
  if (widgetName != null)
  {
    var func = jelem[widgetName];
    if ((typeof func) === "function")
    {
      return func.bind(jelem);
    }
  }
  
  return null;
};

/**
 * Notifies JET framework that a subtree possibly containing JET components has been inserted
 * into the document programmatically.
 *
 * Note that there is no need to call this method when the new DOM is being inserted by the template engine
 * in Knockout.js 
 * @param {!Element} node - the root of the subtree
 * @see oj.Components.subtreeDetached
 * @export
 */
oj.Components.subtreeAttached = function(node)
{
  oj.DomUtils.fixResizeListeners(node);
  _applyToComponents(node,
    function(instance)
    {
      instance._NotifyAttached();
    }
  );
};

/**
 * Notifies JET framework that a subtree possibly containing JET components has been removed
 * from the document programmatically.
 * 
 * Note that calling this method is not needs after calling JQuery's .remove() because all JET components would have been 
 * already destroyed in that case. Similarly, there is no need to call this method after the subtree has been removed by 
 * Knockout.js
 * @param {!Element} node - the root of the subtree
 * @see oj.Components.subtreeAttached
 * @export
 */
oj.Components.subtreeDetached = function(node)
{
  _applyToComponents(node,
    function(instance)
    {
      instance._NotifyDetached();
    }
  );
};

/**
 * Notifies JET framework that a subtree possibly containing JET components is no longer hidden with display:none style
 * This method should be called by the application if the 'display' style is being changed from 'hidden' programmatically,
 * such as when JQuery's .show() method is called
 * 
 * @param {!Element} node - the root of the subtree
 * @see oj.Components.subtreeHidden
 * @export
 */
oj.Components.subtreeShown = function(node)
{
  oj.DomUtils.fixResizeListeners(node);
  
  _applyToComponents(node,
    function(instance)
    {
      instance._NotifyShown();
    }
  );
};


/**
 * Notifies JET framework that a subtree possibly containing JET components has been hidden  with display:none style
 * This method should be called by the application after the subtree has been hidden programmatically, such as 
 * when JQuery's .hide() method is called.
 * 
 * @param {!Element} node - the root of the subtree
 * @see oj.Components.subtreeShown
 * @export
 */
oj.Components.subtreeHidden = function(node)
{
  _applyToComponents(node,
    function(instance)
    {
      instance._NotifyHidden();
    }
  );
};

/**
 * @private
 */
function _applyToComponents(subtreeRoot, callback)
{
  $(subtreeRoot).find('.' + _OJ_COMPONENT_NODE_CLASS).each(
    function(index, elem) 
    {
      var jelem =  $(elem);
      var names = jelem.data(_OJ_WIDGET_NAMES_DATA);
      if (names != null)
      {
        for (var i=0; i < names.length; i++)
        {
          var instance =  jelem.data("oj-" + names[i]);
          if (instance != null)
          {
            callback(instance);
          }
        }
      }
    }
  );
}


/**
 * @constructor
 * @param {!Function} callback
 * @private
 */
function __ojDynamicGetter(callback)
{
  this.getCallback = function()
  {
    return callback;
  }
};



/**
 * @private
 */
oj.Components._OJ_CONTAINER_ATTR = "data-oj-container";

/**
 * @private
 */
var _OJ_WIDGET_NAMES_DATA = "oj-component-names";

/**
 * @private
 */
var _OJ_COMPONENT_NODE_CLASS = "oj-component-initnode";
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/

/**
 * @class
 * @abstract
 * @name oj.baseComponent
 * @since 0.6
 */
$.widget('oj.baseComponent', 
{
  options: 
  {
    /**
     * JQ selector identifying the JET Menu that the component should launch as a context menu on right-click or <kbd>Shift-F10</kbd>. If specified, 
     * the browser's native context menu will be replaced by the specified JET Menu.
     * 
     * <p>To specify a JET context menu on a DOM element that is not a JET component, see the <code class="prettyprint">ojContextMenu</code> binding.  
     * 
     * <p>To make the page semantically accurate from the outset, applications are encouraged to specify the context menu via the standard 
     * HTML5 syntax shown in the below example.  When the component is initialized, the context menu thus specified will be set on the component.
     * 
     * <p>The JET Menu should be initialized before any component using it as a context menu.
     * 
     * @expose
     * @memberof! oj.baseComponent
     * @instance
     * @type {Object}
     * @default <code class="prettyprint">null</code>
     * 
     * @example <caption>Initialize a JET component with a context menu:</caption>
     * // via recommended HTML5 syntax:
     * &lt;div id="myComponent" contextmenu="myMenu" data-bind="ojComponent: { ... }>
     * 
     * // via JET initializer (less preferred) :
     * // Foo is the component, e.g., Menu, Button, InputText, InputNumber, Select, etc.
     * $( ".selector" ).ojFoo({ "contextMenu": "#myMenu" });
     * 
     * @example <caption>Get or set the <code class="prettyprint">contextMenu</code> option, after initialization:</caption>
     * // getter
     * // Foo is the component, e.g., Menu, Button, InputText, InputNumber, Select, etc.
     * var menu = $( ".selector" ).ojFoo( "option", "contextMenu" );
     * 
     * // setter
     * // Foo is the component, e.g., Menu, Button, InputText, InputNumber, Select, etc.
     * $( ".selector" ).ojFoo( "option", "contextMenu", ".my-marker-class" );
     * 
     * @example <caption>Set a JET context menu on an ordinary HTML element:</caption>
     * &lt;a href="#" id="myAnchor" contextmenu="myMenu" data-bind="ojContextMenu: {}">Some text</a>
     */
    contextMenu: null,
    
    /**
     * <p>Attributes specified here will be set on the component's root DOM element at creation time.
     * This is particularly useful for components like Dialog that wrap themselves in a root element
     * at creation time.
     * 
     * <p>The supported attributes are <code class="prettyprint">id</code>, which overwrites any existing value, 
     * and <code class="prettyprint">class</code> and <code class="prettyprint">style</code>, which are appended 
     * to the current class and style, if any.
     * 
     * <p>Setting this option after component creation has no effect.  
     *
     * @example <caption>Initialize a JET component, specifying a set of attributes to be set
     * on the component's root DOM element:</caption>
     * // Foo is the component, e.g., Menu, Button, InputText, InputNumber, Select, etc.
     * $( ".selector" ).ojFoo({ "rootAttributes": {
     *   'id': 'myId', 
     *   'style': 'max-width:100%; color:blue;', 
     *   'class': 'my-class'
     * }});
     * 
     * @expose
     * @memberof oj.baseComponent
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">null</code>
     */
    rootAttributes: undefined
    
    /**
     * <p>A collection of translated resources from the translation bundle, or <code class="prettyprint">null</code> if this
     * component has no resources.  Resources may be accessed and overridden individually or collectively, as seen in the examples.
     * 
     * <p>If this component has (or inherits) translations, their documentation immediately follows this doc entry.
     * 
     * @member
     * @name translations
     * @memberof oj.baseComponent
     * @instance
     * @type {Object}
     * @default an object containing all resources relevant to the component and all its superclasses, or <code class="prettyprint">null</code> if none
     * 
     * @example <caption>Initialize the component, overriding some translated resources.  This syntax leaves the other translations intact at create
     * time, but not if called after create time:</caption>
     * // Foo is InputDate, InputNumber, etc.
     * $( ".selector" ).ojFoo({ "translations": { someKey: "someValue",
     *                                            someOtherKey: "someOtherValue" } });
     * 
     * @example <caption>Get or set the <code class="prettyprint">translations</code> option, after initialization:</caption>
     * // Get one.  (Foo is InputDate, InputNumber, etc.)
     * var value = $( ".selector" ).ojFoo( "option", "translations.someResourceKey" );
     * 
     * // Get all.  (Foo is InputDate, InputNumber, etc.)
     * var values = $( ".selector" ).ojFoo( "option", "translations" );
     * 
     * // Set one, leaving the others intact.  (Foo is InputDate, InputNumber, etc.)
     * $( ".selector" ).ojFoo( "option", "translations.someResourceKey", "someValue" );
     * 
     * // Set many.  Any existing resource keys not listed are lost.  (Foo is InputDate, InputNumber, etc.)
     * $( ".selector" ).ojFoo( "option", "translations", { someKey: "someValue",
     *                                                     someOtherKey: "someOtherValue" } );
     * 
     */
    // translations option is initialized programmatically, so this top-level API doc lives in this virtual comment.
    // Translations for all components are listed and JSDoc'ed in rt\src\main\resources\nls\root\ojtranslations.js.
    // That JSDoc appears in the same generated doc page as this top-level doc.

    
  },
  
  /**
   * Refreshes the component.
   * 
   * @expose
   * @memberof! oj.baseComponent
   * @instance
   */
  refresh: function()
  {
    this._propertyContext = null;
  },
  
  /**
   * Overridden to save off component's default options and the options passed into the constructor (to be passed into
   * the _InitOptions() call)
   * @private
   */
  _createWidget: function(options, element)
  {
    // Thereis no need to clone these objects since they are not modified by the _createWidget() in the base class
    this._originalDefaults = this.options || {};
    this._constructorOptions = options || {};
    
    this._super(options, element);
  },
  
  /**
   * Reads the <code class="prettyprint">rootAttributes</code> option, and sets the root attributes on the 
   * component's root DOM element.  See <a href="#rootAttributes">rootAttributes</a> for the set of supported 
   * attributes and how they are handled.
   * 
   * @memberof oj.baseComponent
   * @instance
   * @protected
   * @throws if unsupported attributes are supplied.
   */
  _SetRootAttributes : function () 
  {
    var value = this.options.rootAttributes;
    if (value)
    {
      var widget = this.widget();
      if (widget == null)
        return;
      
      var classValue = value["class"];
      
      if (classValue)
      {
        widget.addClass(classValue);
      }
      
      var styleValue = value["style"];
      
      if (styleValue)
      {
        var currStyle = widget.attr('style');
        
        if (currStyle)
        {
          widget.attr('style', currStyle + ';' + styleValue);
        }
        else
        {
          widget.attr('style', styleValue);
        }
      }
      
      // make shallow copy, remove class and style from the copy, and set all 
      // remaining attrs on the element.  Currently id is the only remaining attr 
      // that we support.
      value = $.extend({}, value); 
      delete value['class'];
      delete value['style'];
      
      widget.attr(value);
      
      delete value['id']; // remove the remaining supported value
      var unsupportedAttrs = Object.keys(value);
      if (unsupportedAttrs.length)
        throw new Error("Unsupported values passed to rootAttributes option: " + unsupportedAttrs.toString());
    }
  },

  /*
   * It's recommended that you override oj.baseComponent#_ComponentCreate and 
   * oj.baseComponent#_AfterCreate, instead of this method to render your component. This 
   * method saves off all element attributes (retrieved using 
   * oj.baseComponent#_GetSavedAttributes) and then calls _InitOptions(), _ComponentCreate(),
   * _AfterCreate() in that order.
   * 
   * TODO: JSDoc!!  (with at-protected tag, at-final, etc.)
   * memberof! oj.baseComponent
   * instance
   * protected
   */
  _create : function()
  {
    this._SaveAttributes(this.element);
    this._InitOptions(this._originalDefaults, this._constructorOptions);
    
    delete this._originalDefaults; 
    delete this._constructorOptions;
    
    this._ComponentCreate();
    this._AfterCreate();
  },

  /**
   * <p>This method is called before <code class="prettyprint">_ComponentCreate</code>, at which 
   * point the component has not yet been rendered.  Component options should be initialized in this 
   * method, so that their final values are in place when 
   * <code class="prettyprint">_ComponentCreate</code> is called. 
   * 
   * <p>This includes getting option values from the DOM, where applicable, and coercing option 
   * values (however derived) to their appropriate data type.  No other work should be done in this 
   * method.  See below for details.
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * <p>Usage:
   * 
   * <ul>
   * <li>If the component has an option like <code class="prettyprint">disabled</code> that can be set from the DOM 
   * at create time, then the "get from DOM" logic should live in this method.  E.g. a typical override might say "if 
   * the <code class="prettyprint">disabled</code> option still has its initial value of <code class="prettyprint">undefined</code>
   * (i.e., the option has not been set), then get the DOM property and set it on the option." (See also next bullet.)</li>
   * 
   * <li>For attributes that live on the component's root node, keep in mind that anything specified via 
   * the <code class="prettyprint">rootAttributes</code> option will not be placed on the DOM until 
   * <code class="prettyprint">_AfterCreate</code>.  So when getting attributes from the root node, components must first look in the 
   * <code class="prettyprint">rootAttributes</code> option, and then, only if the attribute is not found there, look on the component 
   * root (if it already exists).</li>
   * 
   * <li>For options that, unlike <code class="prettyprint">disabled</code>, have no corresponding DOM property, and are not otherwise 
   * set from the DOM, there is nothing to do in this method.</li>
   * 
   * <li>Do NOT set anything on the DOM in this method (like the resolved <code class="prettyprint">disabled</code> value, or any 
   * <code class="prettyprint">rootAttributes</code> values). The resolved option values should be set on the DOM later, in 
   * <code class="prettyprint">_ComponentCreate</code>, and the <code class="prettyprint">rootAttributes</code> values are set in 
   * <code class="prettyprint">baseComponent._AfterCreate</code>.</li>
   * </ul> 
   * 
   * @param {!Object} originalDefaults - original default options defined on the component and its ancestors
   * @param {?Object} constructorOptions - options passed into the wiget constructor
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    this._setupDefaultOptions(originalDefaults, constructorOptions);
  },
  
  /**
   * <p>All component create-time initialization lives in this method, except the logic that specifically 
   * needs to live in <code class="prettyprint">_InitOptions</code> or <code class="prettyprint">_AfterCreate</code>, 
   * per the documentation for those methods.  All DOM creation must happen here, since the intent of 
   * <code class="prettyprint">_AfterCreate</code> is to contain superclass logic that must run after that DOM is created.  
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _ComponentCreate : function ()
  {
    this['activeable'] = $();
    
    // marker class for all JET components on the init node (as opposed to the outer node)
    this.element.addClass(_OJ_COMPONENT_NODE_CLASS);
    
    // Store widget name, so that oj.Components.getWidgetConstructor() can get widget from the element
    _storeWidgetName(this.element, this.widgetName);
  },
          
  /**
   * This method is called after <code class="prettyprint">_ComponentCreate</code>.  The JET base component does 
   * tasks here that must happen after the component (subclass) has created itself in its override of 
   * <code class="prettyprint">_ComponentCreate</code>.  Notably, the base component handles the 
   * <code class="prettyprint">rootAttributes</code> and <code class="prettyprint">contextMenu</code> options here, 
   * since those options operate on the component root node, which for some components is created in their override 
   * of <code class="prettyprint">_ComponentCreate</code>. 
   * 
   * <p>Subclasses should override this method only if they have tasks that must happen after a superclass's 
   * implementation of this method, e.g. tasks that must happen after the context menu is set on the component.
   * 
   * <p>Overrides of this method should call <code class="prettyprint">this._super</code> first.
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _AfterCreate : function ()
  {
    this._SetRootAttributes(); // do first, since has no dependencies, but other stuff might care about these attrs
    
    // namespace facilitates removing contextMenu handlers separately, if app clears the "contextMenu" option
    this.contextMenuEventNamespace = this.eventNamespace + "contextMenu";
    this._setupContextMenu(); 
  },
  
  /**
   * Saves the element's attributes within an internal variable to be reset during the destroy function
   *
   * The JSON variable will be held as :
   * [
   *   {
   *   "element" : element[i], 
   *   "attributes" : 
   *     {
   *       attributes[m]["name"] : {"attr": attributes[m]["value"], "prop": $(element[i]).prop(attributes[m]["name"])
   *     }
   *   }
   * ]
   *
   * @param {Object} element - jQuery selection to save attributes for
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _SaveAttributes : function (element)
  {
    var self = this;
    this._savedAttributes = [];

    $.each(element, function (index, ele)
    {
      //need to be able to save for multiple elements 
      var saveAttributes = {},
          save = { "element" : ele, "attributes" : saveAttributes },
          attributes = ele.attributes;
      
      self._savedAttributes.push(save);
      
      $.each(attributes, function (index, attr)
      {
        // for proper access certain so called attributes should be accessed as properties 
        // [i.e. required, disabled] so fetch them initially
        var attrName = attr["name"];
        
        saveAttributes[attrName] = { "attr" : attr["value"], "prop" : $(ele).prop(attrName) };
      });
  
    });
  
  },
  
  /**
   * Gets the saved attributes for the provided element. This is usually the original list of 
   * attributes set on the element.
   *
   * @param {Object} element - jQuery selection, should be a single entry
   * @return {Object} savedAttributes - attributes that were saved for this element. 
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _GetSavedAttributes : function (element)
  {
    var savedAttributes = this._savedAttributes;
  
    element = element[0];
  
    for (var i = 0, j = savedAttributes.length;i < j;i++)
    {
      var curr = savedAttributes[i];
      
      if (curr["element"] === element)
      {
        return curr["attributes"];
      }
    }
  
    return {};
  },
  
  /**
   * Restores the saved element's attributes
   *
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   */
  _RestoreAttributes : function ()
  {
    
    $.each(this._savedAttributes, function (index, savedAttr)
    {
      var element = $(savedAttr["element"]), 
          attributes = savedAttr["attributes"];
      
      //sanity check
      if (element.length === 1)
      {
        var currAttr = savedAttr["element"].attributes,
            removeAttr = [];

        //request is to remove any attributes that didn't exist previously
        //need to store the attributes in an array and remove them afterwards as otherwise there are side affects
        for(var i=0, j=currAttr.length; i < j; i++) 
        {
          if(!(currAttr[i]["name"] in attributes)) 
          {
            removeAttr.push(currAttr[i]["name"]);
          }
        }

        for(var i=0, j=removeAttr.length; i < j; i++) 
        {
          element.removeAttr(removeAttr[i]);
        }

        for (var attribute in attributes)
        {
          element.attr(attribute, attributes[attribute]["attr"]);
        }
      }

    });
    
  },
    
  
  /**
   * Determines the name of the translation bundle section for this component
   * @return {string} the name of this component's translations section
   * 
   * @memberof! oj.baseComponent
   * @protected
   */
  _GetTranslationsSectionName: function()
  {
    return this.widgetFullName;
  },
  
  
  /**
   * Retrieves a translated string after inserting optional parameters
   * @param {string} key the translations resource key
   * The key is used to retrieve a format pattern from the component options, or if none
   * is found - from the translated resource bundle.
   * Tokens like {0}, {1}, {name} within the pattern will be used to define placement
   * for the optional parameters.  Token strings should not contain comma (,) 
   * or space characters, since they are reserved for future format type enhancements.
   * The reserved characters within a pattern are:
   * $ { } [ ]  
   * These characters will not appear in the formatted output unless they are escaped
   * with a dollar character ('$').
   * 
   * @param {...string|Object|Array} var_args  - optional parameters to be inserted into the 
   * translated pattern.
   * 
   * If more than one var_args arguments are passed, they will be treated as an array 
   * for replacing positional tokens like {0}, {1}, etc.
   * If a single argument is passed, it will be treated as a Javascript Object whose
   * keys will be matched to tokens within the pattern. Note that an Array is just
   * a special kind of such an Object.
   * 
   * For backward compatibility, a var_args argument whose type is neither 
   * Object or Array will be used to replace {0} in the pattern.
   * @return formatted translated string or the key argument if the resource for the
   * key was not found
   * @private
   */
  getTranslatedString : function (key, var_args)
  {
    var params = {}, pattern;
  
    if (arguments.length > 2)
    {
      params = Array.prototype.slice.call(arguments, 1);
    }
    else if (arguments.length == 2)
    {
      params = arguments[1];
      if (typeof params !== 'object' && !(params instanceof Array))
      {
        params = [params];
      }
        
    }
    pattern = this.option(_OJ_TRANSLATIONS_PREFIX + key);
    // pattern could be undefined
    return (pattern == null) ? key : oj.Translations.applyParameters(pattern.toString(), params);
  },
  
  /**
   * <p>Returns the component DOM node indicated by the <code class="prettyprint">locator</code> parameter.
   * 
   * <p>If the <code class="prettyprint">locator</code> or its <code class="prettyprint">subId</code> is 
   * <code class="prettyprint">null</code>, then this method returns the element on which this component was initalized.
   * 
   * <p>If a <code class="prettyprint">subId</code> was provided but no corresponding node 
   * can be located, then this method returns <code class="prettyprint">null</code>.
   * 
   * @expose
   * @memberof oj.baseComponent
   * @instance
   * 
   * @param {Object} locator An Object containing, at minimum, a <code class="prettyprint">subId</code> 
   * property, whose value is a string that identifies a particular DOM node in this component.  
   * 
   * <p>If this component has (or inherits) any subIds, then they are documented in the 
   * "Sub-ID's" section of this document.
   * 
   * <p>Subclasses of this component may support additional fields of the 
   * <code class="prettyprint">locator</code> Object, to further specify the desired node.
   * 
   * @returns {Element|null} The DOM node located by the <code class="prettyprint">subId</code> string passed in 
   * <code class="prettyprint">locator</code>, or <code class="prettyprint">null</code> if none is found.
   * 
   * @example <caption>Get the node for a certain subId:</caption>
   * // Foo is ojInputNumber, ojInputDate, etc.
   * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-some-sub-id'} );
   */
  getNodeBySubId: function(locator)
  {
    if (locator == null || locator['subId'] == null)
    {
      return this.element ? this.element[0] : null;
    }
    
    // Non-null locators have to be handled by the component subclasses
    return null;
  },
  
  /**
   * Returns the subId string for the given child DOM node.  For more details, see 
   * <a href="#getNodeBySubId">getNodeBySubId</a>.
   * 
   * @expose
   * @memberof oj.baseComponent
   * @instance
   * 
   * @param {!Element} node - child DOM node
   * @return {string|null} The subId for the DOM node, or <code class="prettyprint">null</code> when none is found.
   * 
   * @example <caption>Get the subId for a certain DOM node:</caption>
   * // Foo is ojInputNumber, ojInputDate, etc.
   * var subId = $( ".selector" ).ojFoo( "getSubIdByNode", nodeInsideComponent );
   * @private
   */
  getSubIdByNode: function(node)
  {
    return null;
  },
  
  /**
   * Overridden to set oj-hover and oj-focus classes
   * @private
   */
  'destroy': function()
  {
    this._unbindContextMenu();
    this._super();
    
    // clean up states
    this.element.removeClass(_OJ_COMPONENT_NODE_CLASS);
    this.widget().removeClass( "oj-disabled" );
    this['hoverable'].removeClass( "oj-hover" );
    this['focusable'].removeClass( "oj-focus" );
    this['activeable'].removeClass( "oj-active" );
    
    _removeWidgetName(this.element, this.widgetName);
    
    //this._RestoreAttributes();
  },
  
  /*
   * Internal notes:
   * Overridden to pass extra flags to _setOption
   * param {...Object} var_args - key (or map), value, flags
   */
  /**
   * This method has several overloads, which get and set component options and their fields.  The functionality is unchanged from 
   * that provided by JQUI.  See the examples for details on each overload.
   * 
   * @expose
   * @memberof! oj.baseComponent
   * @instance
   * 
   * @param {string|Object=} optionName the option name (string, first two overloads), or the map (Object, last overload).
   *        Omitted in the third overload.
   * @param {Object=} value a value to set for the option.  Second overload only.
   * @return {Object|undefined} The getter overloads return the retrieved value(s).  When called via the public jQuery syntax, the setter overloads 
   *         return the object on which they were called, to facilitate method chaining.
   * 
   * @example <caption>First overload: get one option:
   * <p>This overload accepts a (possibly dot-separated) <code class="prettyprint">optionName</code> param as a string, and returns 
   * the current value of that option.</caption>
   * var isDisabled = $( ".selector" ).ojFoo( "option", "disabled" ); // Foo is Button, Menu, etc.
   * 
   * // For object-valued options, dot notation can be used to get the value of a field or nested field.
   * var startIcon = $( ".selector" ).ojButton( "option", "icons.start" ); // icons is object with "start" field
   * 
   * @example <caption>Second overload: set one option:
   * <p>This overload accepts two params: a (possibly dot-separated) <code class="prettyprint">optionName</code> string, and a new value to 
   * which that option will be set.</caption>
   * $( ".selector" ).ojFoo( "option", "disabled", true ); // Foo is Button, Menu, etc.
   * 
   * // For object-valued options, dot notation can be used to set the value 
   * // of a field or nested field, without altering the rest of the object.
   * $( ".selector" ).ojButton( "option", "icons.start", myStartIcon ); // icons is object with "start" field
   * 
   * @example <caption>Third overload: get all options:
   * <p>This overload accepts no params, and returns a map of key/value pairs representing all the component 
   * options and their values.</caption>
   * var options = $( ".selector" ).ojFoo( "option" ); // Foo is Button, Menu, etc.
   * 
   * @example <caption>Fourth overload: set one or more options:
   * <p>This overload accepts a single map of option-value pairs to set on the component.  Unlike the first two 
   * overloads, dot notation cannot be used.</caption>
   * $( ".selector" ).ojFoo( "option", { disabled: true, bar: 42 } ); // Foo is Button, Menu, etc.
   */
  option: function(optionName, value) // actually varArgs per comment above the JSDoc, but GCC warns unless matches the @param that we wish to doc
  {
    if (arguments.length === 0)
    {
      // don't return a reference to the internal hash
      return $.widget.extend({}, this.options);
    }
    
    var key = arguments[0];
    
    var options = key;
    var subkey = null;
    
    var flags = {};

    if (typeof key === "string")
    {
      // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      var parts = key.split(".");
      key = parts.shift();
      if (parts.length)
      {
        subkey = parts.join(".");
        
        var curOption; 
        try
        {
          // Inform dynamic getters that the subkey is being set
          if (arguments.length > 1)
          {
            this._settingNestedKey = subkey;
          }
          
          curOption = options[key] = $.widget.extend({}, this.options[key]);
        }
        finally
        {
          this._settingNestedKey = null;
        }
        
        for (var i = 0; i < parts.length - 1; i++)
        {
          curOption[parts[i]] = curOption[parts[i]] || {};
          curOption = curOption[parts[i]];
        }
        
        key = parts.pop();
        if (arguments.length === 1)
        {
          return curOption[key] === undefined ? null : curOption[key];
        }
        
        curOption[key] = value;
      }
      else 
      {
        if (arguments.length === 1)
        {
          return this.options[key] === undefined ? null : this.options[key];
        }
        options[key] = value;
      }
      
      flags = arguments[2] || flags;
    }
    else
    {
      flags = arguments[1] || flags;
    }
    
    // Store subkey on the flags to let _setOption() know that dot notation was used
    if (subkey != null)
    {
      flags = $.widget.extend({}, flags, {'subkey': subkey});
    }

    this._setOptions(options, flags);

    return this;
  
  },
  
  /**
   * Overridden to pass extra flags to _setOption
   * @private
   */
  _setOptions : function (options, flags)
  {
  
    for (var key in options)
    {
      this._setOption(key, options[key], flags);
    }

    return this;
  },
        
  /**
   * Overridden to set oj-hover and oj-focus classes
   * @private
   */
  _setOption: function(key, value, flags)
  {
    if ( key === "disabled" )
    {
      // The JQUI superclass method has hard-coded style classes in the 'if key === "disabled"' block, so unfortunately 
      // we must copy that logic here with updated style classes, and NOT call _super() for the disabled case.
      // TBD: keep this logic updated if superclass method changes.  
      this.options[ key ] = value;
      
      // TBD: widget() is not always the thing that should have aria-disabled on it.  E.g. for the checkbox/radio flavors of ojButton, 
      // widget() returns the root node, but aria-disabled belongs on the <input>.  We fixed this JQUI bug in ojButton by having ojButton
      // override this method to remove it from the root node and add it to the input.  Would be better for each component to know which 
      // element to apply that to, e.g. an overridable method returning that element, or copying "hoverable" paradigm if appropriate.  
      // In the cases where this.element is different than widget(), this.element is more likely to be the right thing, so maybe change 
      // default to that.
      // Update: this issue is getting even more awkward now that we have "effectively disabled".  Probably need to refactor this code!
      this.widget()
	  .toggleClass( "oj-disabled", !!value )
	  .attr( "aria-disabled", value );
      
      if (value) 
      {
          this['hoverable'].removeClass( "oj-hover" );
          this['focusable'].removeClass( "oj-focus" );
          // TODO: when we have worked out the 'create' super code change,
          // this this check should not be necessary. Right now, this gets
          // called before _create for radioset (and possibly others) when
          // we create a component like ojRadioset({disabled: true});
          if (!this['activeable'])
            this['activeable'] = $(); 
          this['activeable'].removeClass( "oj-active" );
      }
    }
    else {
      // disabled is the only key for which we don't call _super()
      
      try
      {
        var subkey = (flags == null)? null :flags['subkey'];
        if (subkey != null)
        {
          this._settingNestedKey = subkey;
        }
        
        this._super(key, value);
      }
      finally
      {
        this._settingNestedKey = null;
      }
      
      if ( key === "contextMenu" )
        this._setupContextMenu();
    }
    
    return this;
  },
  
  /*
   * Private.  Do not override.
   * 
   * This method adds/removes a contextMenu listener on the component, based on the component's "contextMenu" option.
   * It is private since the logic that is likely to vary by component is encapsulated in the protected callee
   * <code class="prettyprint">_OpenContextMenu()</code>.
   */
  _setupContextMenu: function()
  {
    this._unbindContextMenu();
    
    var menu = this.options.contextMenu;
    // menu is selector like "#myMenuId", or null, or some malformed thing.
    
    // TODO: move this part to _InitOptions, in the trxn that handles that refactoring
    if (!menu)
    {
        menu = this.element.attr("contextmenu");
        if (menu)
            menu = "#" + menu;
    }
    
    if ( menu )
        menu = $(menu).data( "oj-ojMenu" ); // if selector finds >1 element, .data() uses the first one.
                                            // if selector finds 0 elements, .data() returns nothing.
    if ( menu )
    {
        var self = this;
        
        // TODO: remove this "widget &&" null-check when create-time changes have all been made.  Until then, want to make 
        // sure we don't NPE if this runs before the subclass has created the root node returned by widget().
        var widget = this.widget();
        widget && widget.on( "keydown" + this.contextMenuEventNamespace + " " + "contextmenu" + this.contextMenuEventNamespace, function( event ) {
            if (event.type === "contextmenu" || (event.which == 121 && event.shiftKey)) // right-click or Shift-F10
            {
                self._OpenContextMenu(menu, event);
                return false; // don't show native context menu
            }

            return true;
        });
    }
  },
  
  /* 
   * This method removes contextMenu functionality from the component.
   * 
   * TODO: all API doc at-tags, including @private, then add 2nd star at top.
   */
  _unbindContextMenu: function()
  {
    // TODO: remove this "widget &&" null-check when create-time changes have all been made.  Until then, want to make 
    // sure we don't NPE if this runs before the subclass has created the root node returned by widget().
    var widget = this.widget();
    widget && widget.off( this.contextMenuEventNamespace );
  },
  
  /**
   * <p>When the <code class="prettyprint">contextMenu</code> option is set, this method is called when the user invokes the context menu.
   * The default implementation simply calls <code class="prettyprint">menu.open(event, {"launcher": this.element, "initialFocus": "menu"})</code>.
   * 
   * <p>This method may be overridden by components needing to configure the menu specially, typically to customize the <code class="prettyprint">launcher</code>.
   * 
   * <p>Depending on individual component needs, any focusable element within the component can be the appropriate launcher.  By default it's the component root, 
   * but (e.g.) Toolbar uses the currently focused toolbar button.
   * 
   * <p>Focus returns to the launcher on menu dismissal, so the launcher must at least be focusable.  Typically a tabbable (not just 
   * focusable) element is safer, since it just focuses something the user could have focused on their own anyway.  
   * 
   * <p>In particular, components with a "roving tabstop" (like Toolbar) should typically choose the current tabstop as their launcher.
   * 
   * <p>The [:focusable]{@link http://api.jqueryui.com/focusable-selector/} and [:tabbable]{@link http://api.jqueryui.com/tabbable-selector/} selectors 
   * may come in handy for choosing a launcher, e.g. something like <code class="prettyprint">this.element.find(".my-class:tabbable").first()</code>.
   * 
   * <p>Subclasses should specify <code class="prettyprint">initialFocus:"menu"</code> in the call to <code class="prettyprint">menu.open()</code>.
   * 
   * @expose
   * @memberof oj.baseComponent
   * @instance
   * @protected
   * 
   * @param {Object} menu The JET Menu to open as a context menu
   * @param {Event} event What triggered the menu launch
   */
  _OpenContextMenu: function(menu, event)
  {
    menu.open(event, {"launcher": this.element, "initialFocus": "menu"});
  },
    
  /**
   * Overridden to set oj-hover class
   * @private
   */
  _hoverable: function( element )
  {
    // The JQUI superclass method has hard-coded style classes, so unfortunately 
    // we must copy that logic here with updated style classes, and NOT call _super().
    // TBD: keep this logic updated if superclass method changes.  
    this['hoverable'] = this['hoverable'].add( element );
    this._on( element, {
      mouseenter: function( event ) {
        $( event.currentTarget ).addClass( "oj-hover" );
      },
      mouseleave: function( event ) {
        $( event.currentTarget ).removeClass( "oj-hover" );
      }
    });
  },
  
  /**
   * Overridden to set oj-focus class
   * @private
   */
  _focusable: function( element )
  {
    // The JQUI superclass method has hard-coded style classes, so unfortunately 
    // we must copy that logic here with updated style classes, and NOT call _super().
    // TBD: keep this logic updated if superclass method changes.  
    this['focusable'] = this['focusable'].add( element );
    this._on( element, {
      focusin: function( event ) {
	  $( event.currentTarget ).addClass( "oj-focus" );
	},
	focusout: function( event ) {
	  $( event.currentTarget ).removeClass( "oj-focus" );
	}
    });
  },      
  
  /**
   * Set oj-active class on mousedown  and remove it on mouseup.
   * oj-active is one of JET's 'marker' style classes. It emulates 
   * the css :active pseudo-class.
   * @private
   */
  _activeable: function( element )
  {
    this['activeable'] = this['activeable'].add( element );
    
    this._on( element, {
    mousedown: function( event ) 
    {
      $( event.currentTarget ).addClass( "oj-active" );
    },
    mouseup: function( event ) 
    {
      $( event.currentTarget ).removeClass( "oj-active" );
    }
    });
  },
  
  /**
   * Retrieves a translated resource for a given key
   * @param {string} key
   * @return {Object} resource associated with the key or null if none was found
   * @private
   */
  getResource : function (key)
  {
    return this.option(_OJ_TRANSLATIONS_PREFIX + key);
  },
  
  /**
   * <p>Determines whether the component is LTR or RTL.
   * 
   * <p>Component responsibilities:
   * 
   * <ul>
   * <li>All components must determine directionality exclusively by calling this protected superclass method.
   *     (So that any future updates to the logic can be made in this one place.)</li>
   * <li>Components that need to know the directionality must call this method from <code class="prettyprint">_create()</code> 
   *     and <code class="prettyprint">refresh()</code>, and cache the value.  
   * <li>Components should not call this at other times, and should instead use the cached value.  (This avoids constant DOM 
   *     queries, and avoids any future issues if directional islands and component reparenting (e.g. popups) should coexist.)</li>
   * </ul>
   * 
   * <p>App responsibilities:
   * 
   * <ul>
   * <li>The app specifies directionality by setting the HTML <code class="prettyprint">"dir"</code> attribute on the 
   *     <code class="prettyprint">&lt;html></code> node.  When omitted, the default is <code class="prettyprint">"ltr"</code>.  
   *     (Per-component directionality / directional islands are not currently supported due to inadequate CSS support.)</li>
   * <li>As with any DOM change, the app must <code class="prettyprint">refresh()</code> the component if the directionality changes dynamically. 
   *   (This provides a hook for component housekeeping, and allows caching.)</li>
   * </ul>
   * 
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   * @return {string} the reading direction, either <code class="prettyprint">"ltr"</code> or <code class="prettyprint">"rtl"</code>
   * @default <code class="prettyprint">"ltr"</code>
   */
  _GetReadingDirection: function( )
  {
    var dir = document.documentElement.getAttribute("dir");
    if (dir)
      dir = dir.toLowerCase();
    return (dir === "rtl") ? "rtl" : "ltr";
  },
  
  /**
   * Notifies the component that its subtree has been connected to the document programmatically after the component has
   * been created
   * @memberof! oj.baseComponent
   * @instance
   * @protected 
   */
  _NotifyAttached: function()
  {
    this._propertyContext = null;
  },
  
  /**
   * Notifies the component that its subtree has been removed from the document programmatically after the component has
   * been created
   * @memberof! oj.baseComponent
   * @instance
   * @protected 
   */
  _NotifyDetached: function()
  {
    this._propertyContext = null;
  },
  
  /**
   * Notifies the component that its subtree has been made visible programmatically after the component has
   * been created
   * @memberof! oj.baseComponent
   * @instance
   * @protected 
   */
  _NotifyShown: function()
  {
    
  },
  
  /**
   * Notifies the component that its subtree has been made hidden programmatically after the component has
   * been created
   * @memberof! oj.baseComponent
   * @instance
   * @protected 
   */
  _NotifyHidden: function()
  {
    
  },
  
  /**
   * Determines whether this component is effectively disabled, i.e. it has its 'disabled' atrribute set to true
   * or it has been disabled by its ancestor  component
   * @memberof! oj.baseComponent
   * @instance
   * @protected
   * @return {boolean} true of the component has been effectively disabled, false otherwise
   */
  _IsEffectivelyDisabled: function()
  {
    return (this.options['disabled'] || this._ancestorDisabled) ? true : false;
  },
  
  /**
   * Sets the ancestor-provided disabled state on this component 
   * @memberof! oj.baseComponent
   * @instance
   * @private
   * @param {boolean} disabled - true if this component is being disabled by its ancestor component, false otherwise
   */
  __setAncestorComponentDisabled: function(disabled)
  {
    this._ancestorDisabled = disabled;
  },
  
  
  /**
   * @private
   */
  _getTranslationSectionLoader: function()
  {
    var sectionNames = [];
    
    var self = this;
    
    var index = 0;
    
    this._traverseWidgetHierarchy(
      function(proto)
      {
        // retrive translation section name for the widget and all of its ancestors
        
        // Since _GetTranslationsSectionName() is a protected method, we can only call it on the widget instance.
        // For superclases, we will assume that their section names can only be their full widget name 
        
        var name = (index == 0) ? self._GetTranslationsSectionName() : proto.widgetFullName;
        index++;
        
        var section = oj.Translations.getComponentTranslations(name);
        
        if (section != null && !$.isEmptyObject(section))
        {
          sectionNames.push(name);
        }
      }
    );
    
    var count = sectionNames.length;
    
    if (count > 0)
    {
      return function()
            {
              // Optimize for the most common case where superclasses do not define translations
              if (count == 1)
              {
                return oj.Translations.getComponentTranslations(sectionNames[0]);
              }
              else
              {
                var trs = {};
                
                for (var i = count-1; i>=0; i--)
                {
                  $.widget.extend(trs, oj.Translations.getComponentTranslations(sectionNames[i]));
                }
                
                return trs;
              }
            };
    }
    return null;
  },
  
  /**
   * @private
   */
  _getDynamicPropertyContext: function()
  {
    if (!this._propertyContext)
    {
      var c = {};
      this._propertyContext = c;
      c['containers'] = _getSpecialContainerNames(this.element[0]);
    }
    return this._propertyContext;
  },
  
  /**
   * @private
   */
  _setupDefaultOptions: function(originalDefaults, constructorOptions)
  {
    var options = this.options;
    
    // Load component translations
    var translationLoader = this._getTranslationSectionLoader();
    
    var currVal = constructorOptions[_OJ_TRANSLATIONS_OPTION];
    
    if (translationLoader != null && (currVal === undefined || $.isPlainObject(currVal) ))
    {
      _defineDynamicProperty(this, undefined, constructorOptions[_OJ_TRANSLATIONS_OPTION], 
                             options,  _OJ_TRANSLATIONS_OPTION, translationLoader);
    }
    
    
    // Load options specified with oj.Components.setDefaultOptions()
    this._loadGlobalDefaultOptions(originalDefaults, constructorOptions)
    
  },
  
  /**
   * @private
   */
  _loadGlobalDefaultOptions: function(originalDefaults, constructorOptions)
  {
    var options = this.options;
    
    var defaults = {};
    
    var widgetHierNames = [];
    
    // walk up the widget hierarchy
    this._traverseWidgetHierarchy( 
              function(proto)
              {
                 widgetHierNames.push(proto.widgetName);
              }
    );
    
    var allProperties = oj.Components.getDefaultOptions();
    widgetHierNames.push('default');
    
    
    // merge properties applicable to this component
    for (var i = widgetHierNames.length-1; i>=0; i--)
    {
      var name = widgetHierNames[i];
      var props = allProperties[name];
      if (props !== undefined)
      {
        defaults = $.widget.extend(defaults, props);
      }
    }
    
    if ($.isEmptyObject(defaults))
    {
      return;
    }
    
    var self = this;
    
    var contextCallback = function()
    {
      return self._getDynamicPropertyContext();
    };
    
    
    for (var prop in defaults)
    {
      var val = constructorOptions[prop];
      
      if (val === undefined || $.isPlainObject(val))
      {
        var defaultVal = defaults[prop];
        
        if (defaultVal != null && defaultVal instanceof __ojDynamicGetter)
        {
          var callback = defaultVal.getCallback();
          if ($.isFunction(callback))
          {
            _defineDynamicProperty(this, originalDefaults[prop], val, options, prop, callback, contextCallback);
          }
          else 
          {
            oj.Logger.error("Dynamic getter for property %s is not a function", prop);
          }
        }
        else
        {
          options[prop] = _mergeOptionLayers([originalDefaults[prop], defaultVal, val]);
        }
      }
    }
  },
  
  /**
   * @private
   */
  _traverseWidgetHierarchy: function(callback)
  {
    var proto = this.constructor.prototype;
    while (proto != null && 'oj' === proto['namespace'])
    {
      callback(proto);
      proto = Object.getPrototypeOf(proto);
    }
  }
});

/**
 * This method is our version of $.widget, i.e. the static initializer of a component such as ojButton.
 * It calls that method, plus does any other static init we need.
 * 
 * TODO: 
 * - Consider moving this method into its own file.
 * - For base param, make the type oj.baseComponent rather than Object, but need to declare that as a type first.  Review how that's done.
 * 
 * @private
 * @param {string} name typically of the form "oj.ojMenu"
 * @param {Object} base NOT optional (unlike JQUI) 
 * @param {Object} prototype
 */
oj.__registerWidget = function( name, base, prototype )
{
  $.widget( name, base, prototype );

  // create single-OJ pseudo-selector for component, e.g. ":oj-menu", in addition to the ":oj-ojMenu" that $.widget() creates.
  // for private components it will begin with an underscore, e.g.,  ":_oj-radio"
  if (name.substring(0, 5) === "oj.oj" || name.substring(0, 6) === "oj._oj")
  { 
    var nameArray = name.split( "." ); // ["oj", "ojMenu"], ["oj", "_ojRadio"]
    var namespace = nameArray[ 0 ];    // "oj"
    var simpleName = nameArray [ 1 ];  // "ojMenu", "_ojRadio"
    var fullName = namespace + "-" + simpleName; // "oj-ojMenu", "oj-_ojRadio"
    var isPrivate = simpleName.substring(0, 1) === "_";
    // if private, make the single-oj pseudo-selector start with an underscore, like this -> "_oj-radio"
    var modifiedFullName; // "oj-Menu", "_oj-Radio".  Lowercased below.
    if (isPrivate)
    {
      modifiedFullName = "_" + namespace + "-" + simpleName.substring(3); 
    }
    else
    {
      modifiedFullName = namespace + "-" + simpleName.substring(2);
    }

    // Capitalization doesn't seem to matter with JQ pseudos, e.g. for the existing double-oj pseudo, both $(":oj-ojMenu") and $(":oj-ojmenu") work.
    // So, follow JQUI's pattern of using toLowerCase here, which will lowercase not only the "M' in "Menu", but also any camelcased chars after that.
    $.expr[ ":" ][ modifiedFullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };
  }
};



/**
 * @param {Object} self
 * @param {Object|undefined} originalDefaultValue
 * @param {?Object} constructorValue
 * @param {!Object} options
 * @param {string} prop
 * @param {Function} getter
 * @param {Function=} contextCallback
 * @private
 */
 function _defineDynamicProperty(self, originalDefaultValue, constructorValue, options, prop, getter, contextCallback)
 {
   var override = constructorValue;
   var replaced = false;
   var overriddenSubkeys = {};
   
   delete options[prop];
   
   Object.defineProperty(options, prop,
     {
       'get': function()
              {
                // Once the option is replaced, we no longer merge in defaults
                if (replaced)
                {
                  return override;
                }
                
                if (self._settingNestedKey != null)
                {
                  // The getter is getting called from the option() method that will be mutating the current
                  // object. We need to return only the override portion in this case to avoid the defaults being
                  // reapplied as an override
                  
                  return override;
                  
                }
                 
                var defaultVal = getter(contextCallback? contextCallback() : prop);
                
                return _mergeOptionLayers([originalDefaultValue, defaultVal, override], overriddenSubkeys)
              },
       'set': function(value)
              {
                override = value;
                
                if (self._settingNestedKey != null) 
                {
                  overriddenSubkeys[self._settingNestedKey] = true;
                }
                else // The entire option has been replaced
                {
                  replaced = true;
                }
              },
       'enumerable' : true
     }
   );
 };
 
 /**
  * @private
  */
 function _getSpecialContainerNames(elem)
 {
    var containers = [];
    while (elem)
    {
      var ga =  elem.getAttribute;
      var name = ga ? ga.call(elem, oj.Components._OJ_CONTAINER_ATTR) : null;
      if (name != null)
      {
        containers.push(name);
      }
      elem = elem.parentNode;
    }
    
    return containers;
 };
 
 /**
  * @private
  */
 function _storeWidgetName(element, widgetName)
 {
   var data = element.data(_OJ_WIDGET_NAMES_DATA);
   if (!data)
   {
     data = [];
     element.data(_OJ_WIDGET_NAMES_DATA, data);
   }
   if (data.indexOf(widgetName) < 0)
   {
     data.push(widgetName);
   }
 }
 
 /**
  * @private
  */
 function _removeWidgetName(element, widgetName)
 {
   var data = element.data(_OJ_WIDGET_NAMES_DATA);
   if (data)
   {
     var index = data.indexOf(widgetName);
     if (index >= 0)
     {
       data.splice(index, 1);
       if (data.length === 0)
       {
         element.removeData(_OJ_WIDGET_NAMES_DATA);
       }
     }
   }
 }
 
 /**
  * @private
  * @param {Array} values - values to merge
  * @param {Object=} overriddenSubkeys subkeys where the merging should not occur, i.e.
  * the value from corresponsing subkey on the last element of values array should win
  */
 function _mergeOptionLayers(values, overriddenSubkeys)
 {
   var result = undefined;
   for (var i=0; i<values.length; i++) 
   {
      var value = values[i];
      if (value !== undefined )
      {
        if ($.isPlainObject(value)) 
        {
          var input =  $.isPlainObject(result) ? [result, value] : [value];
          // The last object (overrides) is always fully merged in
          result = _mergeObjectsWithExclusions({}, input, (i == values.length - 1)? null: overriddenSubkeys, null);
        } 
        else 
        {
          result = value;
        }
      }
    }
    return result;
 }
 
 /**
 * @private
 */
function _mergeObjectsWithExclusions(target, input, ignoreSubkeys, basePath)
{
  var inputLength = input.length;
  
  for (var inputIndex = 0; inputIndex < inputLength; inputIndex++)
  {
    var source = input[inputIndex];
    var keys = Object.keys(source); 
    for (var i=0; i<keys.length; i++)
    {
      var key = keys[i];
      var path = (ignoreSubkeys == null)? null:  (basePath == null ? key : basePath + '.' + key);
      // Ignore all sources when the current path is registered in ignoreSubkeys
      if (ignoreSubkeys == null || !ignoreSubkeys[path])
      {
        var value = source[key];
        if (value !== undefined)
        {
          if ($.isPlainObject(value))
          {
            var params = $.isPlainObject(target[key])? [target[key], value]: [value];
            target[key] = _mergeObjectsWithExclusions({}, params, ignoreSubkeys, path);
          }
          else 
          {
            target[key] = value;
          }
        }
      }
    }
  }
  return target;
}

 
 /**
  * @private
  */
  var _OJ_TRANSLATIONS_OPTION = "translations";
  var _OJ_TRANSLATIONS_PREFIX = _OJ_TRANSLATIONS_OPTION + ".";
/*jslint browser: true*/
/*
** Copyright (c) 2004, 2012, Oracle and/or its affiliates. All rights reserved.
*/
/**
 * DOM utilities.
 * @ignore
 */
oj.DomUtils = {};

oj.DomUtils._HTML_START_TAG = "\x3chtml\x3e";
oj.DomUtils._HTML_END_TAG = "\x3c/html\x3e";
oj.DomUtils._LEGAL_ELEMENTS = {"SPAN":1, "B":1, "A":1, "I":1, "EM":1, "BR":1, "HR":1, "LI":1, "OL":1, "UL":1, "P":1, "TT":1, "BIG":1, "SMALL":1, "PRE":1};
oj.DomUtils._LEGAL_ATTRIBUTES = {"class":1, "style":1, "href":1};
oj.DomUtils.SURROGATE_ID = "data-oj-surrogateid";
/**
 * Returns true if the value is null or if the trimmed value is of zero length.
 * 
 * @param {string|null} content
 * @return {boolean} true if the string is wrapped in <html> tag.
 */        
oj.DomUtils.isHTMLContent = function(content)
{    
  if (content.indexOf(oj.DomUtils._HTML_START_TAG) === 0 && 
      content.lastIndexOf(oj.DomUtils._HTML_END_TAG) === content.length - 7) 
  {
    return true;
  }

  return false;
};

oj.DomUtils.cleanHtml = function (value) 
{
  var offSpan = $(document.createElement("span")).get(0);
  offSpan.innerHTML = value;
  if (value && value.indexOf("\x3c") >= 0) 
  {
    oj.DomUtils._cleanElementHtml(offSpan);
  }
  return offSpan;
}; 

oj.DomUtils._cleanElementHtml = function(node) 
{
  var children = node.childNodes, child, attrs, attr, childHasAttr, i;
  var count = children.length - 1;
  while (count >= 0) 
  {
    child = children.item(count);
    if (child && child.nodeType === 1) 
    {
      if (oj.DomUtils._LEGAL_ELEMENTS[child.nodeName]) 
      {
        attrs = child.attributes;
        for (i = attrs.length - 1;i >= 0;i--) 
        {
          attr = attrs[i];
          // jquery - the .attr() method returns undefined for attributes that have not been set.
          childHasAttr = $(child).attr(attr.name) !== undefined;
          if (childHasAttr) 
          {
            if (!oj.DomUtils._LEGAL_ATTRIBUTES[attr.name]) 
            {
              child.removeAttribute(attr.nodeName);
            }
          }
        }
        oj.DomUtils._cleanElementHtml(child);       
      }
      else 
      {
        if (child)
        {
          node.removeChild(child);
        }
      }      
    }

    count--;
  }
};

/**
 * Checks to see if the "ancestorNode" is a ancestor of "node".
 *
 * @param {!Element} ancestorNode dom subtree to check to see if the target node exists
 * @param {!Element} node target node to check to see if it exists within a subtree rooted at the ancestorNode
 * @return {boolean} <code>true</code> if the "ancestorNode" is a ancestor of "node".
 */
oj.DomUtils.isAncestor = function (ancestorNode, node) 
{
  oj.Assert.assertDomElement(ancestorNode);
  oj.Assert.assertDomElement(node);

  var surrogateId;
  var jump;
  var parentNode;

  // Some popups are reparented when open.  An attribute on the root popup dom points to
  // their associated placeholder element.  This link provides logical traversal
  // of the dom tree.
  if (node.nodeType === 1 && node.hasAttribute(oj.DomUtils.SURROGATE_ID))
  {
    surrogateId = node.getAttribute(oj.DomUtils.SURROGATE_ID);
    jump = $("#" + surrogateId);
    if (jump.length > 0)
      parentNode = jump[0];
    else
      parentNode = node.parentNode;
  }
  else
    parentNode = node.parentNode;

  while (parentNode) {
    if (parentNode == ancestorNode)
      return true;

    if (parentNode.nodeType === 1 && parentNode.hasAttribute(oj.DomUtils.SURROGATE_ID))
    {
      surrogateId = parentNode.getAttribute(oj.DomUtils.SURROGATE_ID);
      jump = $("#" + surrogateId);
      if (jump.length > 0)
        parentNode = jump[0];
      else
        parentNode = parentNode.parentNode;
    }
    else
      parentNode = parentNode.parentNode;

  }

  return false;
}

/**
 * Checks to see if the "ancestorNode" is a ancestor of "node" or if they are the same.
 *
 * @param {!Element} ancestorNode dom subtree to check to see if the target node exists
 * @param {!Element} node target node to check to see if it exists within a subtree rooted at the ancestorNode
 * @return {boolean} <code>true</code> if the "ancestorNode" is a ancestor of "node" or if they are the same
 */
oj.DomUtils.isAncestorOrSelf = function (ancestorNode, node) 
{
  oj.Assert.assertDomElement(ancestorNode);
  oj.Assert.assertDomElement(node);

  return (node == ancestorNode) ?
          true :
          oj.DomUtils.isAncestor(ancestorNode, node);
};


/**
 * Adds a resize listener for a block or inline-block element
 * @param {!Element} elem - node where the listener should be added
 * @param {!Function} listener - listener to be added. The listener will receive
 * two parameters: 1) the new width in pixels; 2) the new height in pixels
 */
oj.DomUtils.addResizeListener = function(elem, listener)
{
  var jelem = $(elem);
  var tracker = jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY);
  if (tracker == null)
  {
    tracker = new oj.DomUtils._ResizeTracker(elem);
    jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY, tracker);
    tracker.start();
  }
  tracker.addListener(listener);
}

/**
 * Removes a resize listener
 * @param {!Element} elem - node whose listener should be removed
 * @param {!Function} listener - listener to be removed
 */
oj.DomUtils.removeResizeListener = function(elem, listener)
{
  var jelem = $(elem);
  var tracker = jelem.data(oj.DomUtils._RESIZE_TRACKER_KEY);
  if (tracker != null)
  {
    tracker.removeListener(listener);
    if (tracker.isEmpty())
    {
      tracker.stop();
      jelem.removeData(oj.DomUtils._RESIZE_TRACKER_KEY);
    }
  }
};


/**
 * Fixes resize listeners after a subtree has been connected to the DOM or after
 * its display:none stayle has been removed
 * @param {!Element} subtreeRoot - subtree root
 */
oj.DomUtils.fixResizeListeners = function(subtreeRoot)
{  
  $(subtreeRoot).find(".oj-helper-detect-expansion").parent().each(
    function(index, div) 
    {
      var tracker = $(div).data(oj.DomUtils._RESIZE_TRACKER_KEY);
      if (tracker != null)
      {
        tracker.checkSize(false);
      }
    }
  );
};

/**
 * Determines whether a special 'meta' key was pressed when the event was fired.
 * For Mac OS, the 'meta' key is mapped to the 'Command' key, for all other platforms it is mapped
 * to the 'Control' key.
 * Note that this method will only work for the events that support .ctrlKey and .metaKey fields.
 * @param {!Object} evt - the event
 * @return true if the meta key is pressed, false otherwise
 */
oj.DomUtils.isMetaKeyPressed = function(evt)
{
  if (oj.DomUtils._isMac === undefined)
  {
    oj.DomUtils._isMac = (navigator && navigator.userAgent) ? 
          navigator.userAgent.toLowerCase().indexOf('mac os') >= 0: false;
  }
  
   return (oj.DomUtils._isMac ? evt.metaKey : evt.ctrlKey);
};



/**
 * @private
 */
oj.DomUtils._invokeAfterPaint =  (window['requestAnimationFrame'] || window['mozRequestAnimationFrame'] || 
                                  window['webkitRequestAnimationFrame'] || 
                                  function(fn){ return window.setTimeout(fn, 0); }
                                  ).bind(window);

/**
 * @private
 */                                  
oj.DomUtils._cancelInvokeAfterPaint =  (window['cancelAnimationFrame'] || window['mozCancelAnimationFrame'] || 
                                  window['webkitCancelAnimationFrame'] || 
                                  function(id){ return window.clearTimeout(id); }
                                  ).bind(window);

/**
 * Utility class for tracking resize events for a given element and  sispatching them
 * to listeners
 * @constructor
 * @ignore
 */
oj.DomUtils._ResizeTracker = function(div)
{
  this._listeners = $.Callbacks();
  
  this.addListener = function(listener)
  {
    this._listeners.add(listener);    
  };
  
  this.removeListener = function(listener)
  {
    this._listeners.remove(listener);    
  };
  
  this.isEmpty = function()
  {
    return this._listeners.empty();
  };
  
  this.start = function()
  {
    this._scrollListener = this._handleScroll.bind(this);
    
    // bug 19422383: Use native onresize support on teh DIV in IE9/10 and  since no scroll events are fired on the
    // contraction/expansion DIVs in IE9
    if (div.attachEvent)
    {
      this._resizeListener = this._handleResize.bind(this);
      div.attachEvent('onresize', this._resizeListener);
    }
    
    else
    {
      var firstChild = div.childNodes[0]; // could be undefined, but insertBefore() will deal with it
      
      // This child DIV will track expansion events. It is meant to be 1px taller and wider than the DIV
      // whose resize events we are tracking. After we set its scrollTop and scrollLeft to 1, any increate in size
      // will fire a scroll event
      var expDiv = this._detectExpansion = document.createElement("div");
      expDiv.className = "oj-helper-detect-expansion";
      var expansionChild = document.createElement("div");
      expDiv.appendChild(expansionChild);
      div.insertBefore(expDiv, firstChild);
       
      expDiv.addEventListener("scroll", this._scrollListener, false);
        
      // This child DIV will track contraction events. Its height and width are set to 200%. After we set its scrollTop and 
      // scrollLeft to the current height and width of its parent, any decrease in size will fire a scroll event
      var cotrDiv = this._detectContraction = document.createElement("div");
      cotrDiv.className = "oj-helper-detect-contraction";
      
      var contractionChild = document.createElement("div");
      contractionChild.style.width = "200%";
      contractionChild.style.height = "200%";
      cotrDiv.appendChild(contractionChild);
      div.insertBefore(cotrDiv, firstChild);
       
      cotrDiv.addEventListener("scroll", this._scrollListener, false);
      
      //Size child DIVs adn recored the current size of the tracked DIV
      if (expDiv.offsetParent != null)
      {
        this._adjust(expDiv.offsetWidth, expDiv.offsetHeight);
      }
    }
  };
  
  this.stop = function()
  {
    if (this._detectExpansion != null)
    {
      this._detectExpansion.removeEventListener("scroll", this._scrollListener);
      this._detectContraction.removeEventListener("scroll", this._scrollListener);
      div.removeChild(this._detectExpansion);
      div.removeChild(this._detectContraction);
    }
    else
    {
      // assume IE9/10
      div.detachEvent('onresize', this._resizeListener);
    }
  };
  
  
  this.checkSize = function(checkScrollPos)
  {
    var expDiv = this._detectExpansion;
    
    if (expDiv.offsetParent == null)
    {
      return;
    }
    
    var newWidth = expDiv.offsetWidth;
    var newHeight = expDiv.offsetHeight;
    if (this._oldWidth !== newWidth || this._oldHeight !== newHeight)
    {
      this._retrySetScroll = 2;
      this._adjust(newWidth, newHeight);
      
      if (this._invokeId !== undefined)
      {
        oj.DomUtils._cancelInvokeAfterPaint(this._invokeId);
      }
      
      var self = this;
      var listeners = this._listeners;
      
      this._invokeId = oj.DomUtils._invokeAfterPaint(
        function()
        {
          self._invokeId = undefined;
          listeners.fire(newWidth, newHeight);
        }
      );
    }
    // Workaround for the WebKit issue where scrollLeft gets reset to 0 without the DIV being expanded
    // We will retry to the set the scrollTop only twice to avoid infinite loops
    else if (checkScrollPos && this._retrySetScroll > 0 && (expDiv.scrollLeft == 0 || expDiv.scrollTop == 0))
    {
      this._retrySetScroll--;
      this._adjust(newWidth, newHeight);
    }
  };
  
  this._handleScroll = function(evt)
  {
    evt.stopPropagation();
    this.checkSize(true);
  };
  
  this._handleResize = function()
  {
     this._listeners.fire(div.offsetWidth, div.offsetHeight);
  };
  
  this._adjust = function(width, height)
  { 
    this._oldWidth = width;
    this._oldHeight = height;
    
    var expansionChild = this._detectExpansion.firstChild;
    expansionChild.style.width = width + 1 + 'px';
    expansionChild.style.height = height + 1 + 'px';
    
    this._detectExpansion.scrollLeft = 1;
    this._detectExpansion.scrollTop = 1;
    
    this._detectContraction.scrollLeft = width;
    this._detectContraction.scrollTop = height;
  };
}

oj.DomUtils._RESIZE_TRACKER_KEY = "_ojResizeTracker";
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * Component Messaging Utilities.
 * @param {Object} component instance
 * @protected
 * @constructor
 * @since 0.6
 */
oj.ComponentMessaging = function (component) 
{
  this.Init(component);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.ComponentMessaging, oj.Object, "oj.ComponentMessaging");

/**
 * Default display types supported for component messaging.
 * Future: support for inline 
 * @memberof! oj.ComponentMessaging
 * @const
 * @protected
 */
oj.ComponentMessaging._DISPLAY_TYPE = {
  NONE: "none",
  NOTEWINDOW: "notewindow", 
  PLACEHOLDER: "placeholder"
};

/**
 * Tracks the messaging strategy callback function by type, used to instantiate messaging strategies.
 * Implementations register by type. 
 * @memberof! oj.ComponentMessaging
 * @const
 * @protected
 */
oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK = {};
  
/**
 * Stores the constructor function callback object used to constuct a strategy object for the 
 * specified type.
 * 
 * @param {string} type
 * @param {Function} strategyConstructorCallback a constructor callback that can be used to constuct
 * a strategy object for the specified type
 * @returns {undefined}
 */
oj.ComponentMessaging.registerMessagingStrategy = function (type, strategyConstructorCallback)
{
  if (type && typeof strategyConstructorCallback === "function")
  {
    oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK[type] = strategyConstructorCallback;
  }
};

/**
 * Initializes the strategy based on the display options that specify the messaging artifacts that 
 * will be displayed by this strategy.
 * 
 * @param {Object} component widget instance
 * @memberof! oj.ComponentMessaging
 * @instance
 * @protected
 */
oj.ComponentMessaging.prototype.Init = function (component)
{
  oj.ComponentMessaging.superclass.Init.call(this);
  
  this._component = component;
  this._activated = false;
  
  this._initializeMessagingStrategies();
};

/**
 * Utility function that activates messaging on the component using the strategy provided.
 * @param {Object} launcher element(s) to which messaging applies
 * @param {Object} content 
 * @private
 */
oj.ComponentMessaging.prototype.activate = function (launcher, content)
{
  var that = this;
  oj.Assert.assertObject(content);
  this._launcher = launcher;
  
  this._messagingContent = oj.CollectionUtils.copyInto(this._messagingContent || {}, content);
  
  // if already active, reinitialize strategies based on new messagingDisplay preferences.
  if (!this._isActive())
  {
    $.each(this._strategies, function(i, strategy) 
    {
      strategy.activate(that);
    });
    this._activated = true;
  }
  else
  {
    this._reactivate();
  }
};

/**
 * Utility function that updates messaging on the component for the content provided, using the 
 * strategies.
 * 
 * @param {Object} content 
 * @private
 */
// TODO: component messaging could take the component instance
oj.ComponentMessaging.prototype.update = function (content)
{
  oj.Assert.assertObject(content);
  oj.Assert.assertBoolean(this._activated);
  
  this._messagingContent = oj.CollectionUtils.copyInto(this._messagingContent || {}, content);

  if (this._activated)
  {
    $.each(this._strategies, function(i, strategy) 
      {
        strategy.update();
      });
  }
};

/**
 * Utility function that deactivates messaging on the component using the strategy provided.
 * @private
 */
oj.ComponentMessaging.prototype.deactivate = function ()
{
  $.each(this._strategies, function(i, strategy) 
    {
      strategy.deactivate();
    });
    
  this._activated = false;
  this._component = null;
  this._launcher = null;
  this._strategies = {};
};

/**
 * Creates a messaging strategy for the specified type, initializing it with the options provided.
 * @param {string|number} type defined by oj.ComponentMessaging._DISPLAY_TYPE
 * @param {Array|undefined} options
 * 
 * @private
 * @instance
 * @memberOf !oj.ComponentMessaging
 */
oj.ComponentMessaging.prototype._createMessagingStrategy = function (type, options)
{
  var callback = oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK[type] || 
          oj.ComponentMessaging._DISPLAY_TYPE_TO_CALLBACK[oj.ComponentMessaging._DISPLAY_TYPE.NONE];
  
  // dynamically instantiate the strategy objects
  return new callback(options);
},

/**
 * Returns the component instance or null
 * 
 * @return {Object|null} 
 * @private
 * @instance
 * @memberOf !oj.ComponentMessaging
 */
oj.ComponentMessaging.prototype._getComponent = function ()     
{
  return this._component || null;
};

/**
 * Returns the launcher jquery element. This is the element on the component to which messaging 
 * applies. 
 * 
 * @return {Object|null} null if messaging is not activated.
 * @private
 * @instance
 * @memberOf !oj.ComponentMessaging
 */
oj.ComponentMessaging.prototype._getLauncher = function ()     
{
  return this._launcher || null;
};

/**
 * Returns the last saved messagingContent object.
 * 
 * @return {Object} 
 * @private
 * @instance
 * @memberOf !oj.ComponentMessaging
 */
oj.ComponentMessaging.prototype._getMessagingContent = function ()     
{
  return this._messagingContent || {};
};

/**
 * Whether the component messaging is activated. 
 * @return {boolean}
 * @private
 */
oj.ComponentMessaging.prototype._isActive = function ()
{
  return this._activated;
};

oj.ComponentMessaging.prototype._getResolvedMessagingDisplayOptions = function ()
{
    var artifactsByDisplayType = {}, artifactDisplayTypeResolved = false, displayTypes, displayType,
      compPH = this._component.options['placeholder'], artifact, keys, key, i, j,
      messagingPreferences = this._component.options['displayOptions'] || {},
      $messagingPreferences = {}, self = this;
      
    // first resolve primary display options for each artifact.
    // E.g. at the end of this loop you should have something like this
    // {messages: 'notewindow', converterHint: 'placeholder', validatorHint: 'notewindow', title: 'none'}
    keys = Object.keys(messagingPreferences);
    for (i = 0; i < keys.length; i++)
    {
      key = keys[i];
      displayTypes = messagingPreferences[key];
      // loop over array of displayTypes preferred for artifact.
      // artifacts are 'messages', 'converterHint', 'validatorHint', 'title'
      artifactDisplayTypeResolved = false;
      artifact = key + "";
      // we take either array or string values for displayOptions.
      if (Array.isArray(displayTypes))
      {
        for (j = 0; j < displayTypes.length; j++) 
        {
          displayType = displayTypes[j];
          if (!artifactDisplayTypeResolved)
          {
            artifactDisplayTypeResolved = 
              self._resolveDisplayTypeForArtifact(artifact, displayType, compPH, $messagingPreferences);
          }
        }
      }
      else if (typeof displayTypes === "string")
      {
        if (!artifactDisplayTypeResolved)
        {
          artifactDisplayTypeResolved = 
            self._resolveDisplayTypeForArtifact(artifact, displayTypes, compPH, $messagingPreferences);
        }
      }

      // if we couldn't resolve then use "none". E.g., validationHint: ['placeholder']
      if (!artifactDisplayTypeResolved)
      {
        $messagingPreferences[artifact] = oj.ComponentMessaging._DISPLAY_TYPE.NONE;
      }
    }
    
    // collate by displayType -> artifact. but first reset 
    $.each(oj.ComponentMessaging._DISPLAY_TYPE, function(type, name){
      artifactsByDisplayType[name] = [];
    });
    
    $.each($messagingPreferences, function(artifact, displayType)
    {
      // an artifact eventually resolves to one displayType. 
      artifactsByDisplayType[displayType].push(artifact);        
    });
    
    return artifactsByDisplayType;
},
        
oj.ComponentMessaging.prototype._resolveDisplayTypeForArtifact = function(
  artifact, 
  displayType, 
  compPH,
  $messagingPreferences)
{
  var artifactDisplayTypeResolved = false;
  switch (displayType)
  {
    // placeholder display is special in that it's only supported on 'converterHint'.
    case oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER :

      if (artifact === "converterHint")
      {
        // if placeholder is the first preference for converterHint, it's used under certain 
        // conditions
        // if options.placeholder is not set then use 'converterHint' as the default 
        // 'placeholder'
        // alternately if (options.placeholder), i.e., a custom placeholder is set, then 
        // ignore the placeholder displayType and use the next display type as the default 
        // for the artifact. We may have a fallback displayType in which case we use it, 
        // otherwise we use 'none'. E.g., 
        // {'converterHint': ['placeholder', 'notewindow']} // use notewindow
        // {'converterHint': ['placeholder']}               // use none

        if (!artifactDisplayTypeResolved)
        {
          if (!compPH)
          {
            $messagingPreferences[artifact] = displayType;
            artifactDisplayTypeResolved = true;
            
          }
        }
      }
      else
      {
        // displayType 'placeholder' is not supported on other artifacts
        // ignore if present
        // TODO: In the future we may want to support configuring validatorHint ot title as 
        // placeholder as well.
      }

      break;

    default:
      if (!artifactDisplayTypeResolved)
      {
        $messagingPreferences[artifact] = displayType;
        artifactDisplayTypeResolved = true;
      }
      break;
  }
  
  return artifactDisplayTypeResolved;
  
},

/**
 * Creates messaging strategies for the component based on the displayOptions.
 * @private
 */
oj.ComponentMessaging.prototype._initializeMessagingStrategies = function ()
{
  var artifactsByDisplayType = this._getResolvedMessagingDisplayOptions(), 
    displayInNoteWindow = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW], 
    displayNone = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.NONE], 
    displayInPlaceholder = artifactsByDisplayType[oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER],
    messagingStrategies = {};
    
  if (displayInNoteWindow.length > 0)
  {
    messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW] = 
      this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW, displayInNoteWindow);
  }
  
  if (displayInPlaceholder.length > 0)
  {
    messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER] = 
      this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER, displayInPlaceholder);
  }
  
  messagingStrategies[oj.ComponentMessaging._DISPLAY_TYPE.NONE] = 
    this._createMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NONE, displayNone);

  this._strategies = messagingStrategies;
};

/**
 * Reinitializes component messaging with new messagingDisplayOptions.
 * 
 * @private
 */
oj.ComponentMessaging.prototype._reactivate = function ()
{
  var artifactsByDisplayType = this._getResolvedMessagingDisplayOptions(), strategy, cm = this; 
  
  // for every displayType being requested either create the messaging strategy for the type or 
  // reuse existing strategy if it has already been created. 
  $.each(artifactsByDisplayType, function(type, artifactsForType) 
    {
      type = type + ""; // coerce to avoid GCC warning
      strategy = cm._strategies[type];
      if (artifactsForType && artifactsForType.length > 0)
      {
        if (!strategy)
        {
          // create a strategy if one doesn't exist for the type
          strategy = cm._createMessagingStrategy(type, artifactsForType);
          cm._strategies[type] = strategy;
          strategy.activate(cm);
        }
        else if (strategy)
        {
          // update strategy with the latest displayOptions if already present. we don;t 
          // want to remove it once activated.
          strategy.reactivate(artifactsForType);
        }
      }
      else
      {
        if (strategy && oj.ComponentMessaging._DISPLAY_TYPE.NONE !== type)
        {
          // if we have no artifacts to show for a type, then remove the strategy.
          // only if its other than the DefaultMessagingStrategy as it's always needed to theme 
          // component.
          strategy.deactivate();
          delete cm._strategies[type];
        }
      }
    });
};

/**
 * A base messaging strategy class that is initialized with a set of displayOptions. This object 
 * also provides helper methods for its subclasses.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed.
 * 
 * @constructor
 * @class oj.MessagingStrategy
 * @private
 */
oj.MessagingStrategy = function (displayOptions)
{
  this.Init(displayOptions);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.MessagingStrategy, oj.Object, "oj.MessagingStrategy");

/**
 * Initializes the strategy based on the display options that specify the messaging artifacts that 
 * will be displayed by this strategy.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed.
 * @private
 */
oj.MessagingStrategy.prototype.Init = function (displayOptions)
{
  oj.Assert.assertArray(displayOptions);
  oj.MessagingStrategy.superclass.Init.call(this);
  
  this._displayOptions = displayOptions;
};

oj.MessagingStrategy.prototype.activate = function (cm)
{
  this._componentMessaging = cm;
};

/**
 * Updates component with instance using the content provided.
 * 
 * @private
 */
oj.MessagingStrategy.prototype.update = function ()
{
};

/**
 * Cleans up messaging artifacts that were created on the component instance. E.g., destroys any 
 * widgets it created, removes styles added etc.
 * 
 * @private
 */
oj.MessagingStrategy.prototype.deactivate = function ()
{
};

/**
 * Reinitializes with the new display options and updates component messaging using the new content. 
 * 
 * @param {Array} newDisplayOptions
 * @private
 */
oj.MessagingStrategy.prototype.reactivate = function (newDisplayOptions)
{
  this.Init(newDisplayOptions);
};

// P R O T E C T E D  M E T H O D S 
/**
 * Gets the launcher element for which the messaging is applied.
 * @return {Object} the jquery element of the form element.
 * @private
 */
oj.MessagingStrategy.prototype.GetLauncher = function ()
{
  return this._componentMessaging._getLauncher();
};

/**
 * Gets the component (widget).
 * @return {Object} the jet component instance
 * @private
 */
oj.MessagingStrategy.prototype.GetComponent = function ()
{
  return this._componentMessaging._getComponent();
};

/**
 * Returns an array of messages.
 * 
 * @return {Array} of messages each an instance of oj.Message
 * @private
 */
oj.MessagingStrategy.prototype.GetMessages = function ()
{
  return this.GetValidityState().getMessages();
};

oj.MessagingStrategy.prototype.GetMaxSeverity = function ()
{
  return this.GetValidityState().getMaxSeverity();
};

/**
 * Gets the converter hint.
 * 
 * @return {Array} an array of hints, each a string.
 * @private
 */
oj.MessagingStrategy.prototype.GetConverterHint = function ()
{
  var hints = [], converterHint = this._getMessagingContent()['converterHint'], hint;
  if (converterHint)
  {
    hints.push(converterHint);
  }
  
  return hints;
};

oj.MessagingStrategy.prototype.GetValidatorHints = function ()
{
  var hints = [], vHints = this._getMessagingContent()['validatorHint'] || [];
  $.each(vHints, function (index, hint)
    {
      hints.push(hint);
    }
  );
  
  return hints;
};


/**
 * Gets the short description.
 * @return {string} title or ""
 * @private
 */
oj.MessagingStrategy.prototype.GetTitle = function ()
{
  return this._getMessagingContent()['title'] || ""; 
};

/**
 * Gets the validityState.
 * @private
 */
oj.MessagingStrategy.prototype.GetValidityState = function ()
{
  return this._getMessagingContent()['validityState'];
};

/**
 * Whether the strategy is displaying messages or not.
 * @return {boolean} true if strategy has messages to display
 * @private
 */
oj.MessagingStrategy.prototype.HasMessages = function ()
{
  var messages = this.GetMessages();
  return (messages && messages.length > 0) ? true: false;
};

oj.MessagingStrategy.prototype.ShowMessages = function ()
{
  return this._displayOptions.indexOf('messages') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowConverterHint = function ()
{
  return this._displayOptions.indexOf('converterHint') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowValidatorHint = function ()
{
  return this._displayOptions.indexOf('validatorHint') !== -1 ? true : false;
};

oj.MessagingStrategy.prototype.ShowTitle = function ()
{
  return this._displayOptions.indexOf('title') !== -1 ? true : false;
};

/**
 * Returns true if we have invalid messages; false otherwise.
 * 
 * @return {boolean}
 * @private
 */
oj.MessagingStrategy.prototype.IsInvalid = function ()
{
  return this.GetValidityState().isInvalid();
};


/**
 * Gets the messagingContent stored in ComponentMessaging instance
 * @return {Object}
 * @private
 */
oj.MessagingStrategy.prototype._getMessagingContent = function ()
{
  if (this._componentMessaging)
  {
    return this._componentMessaging._getMessagingContent();
  }
  
  return {};
};


/**
 * A messaging strategy that updates the component theming and accessibility attributes.
 * 
 * @param {Array} displayOptions .
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.DefaultMessagingStrategy = function(displayOptions)
{
  this.Init(displayOptions);
};

oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NONE, 
                                                oj.DefaultMessagingStrategy);

// TODO: Need to retrieve style selectors from a Style Manager
oj.DefaultMessagingStrategy._SELECTOR_STATE_INVALID = "oj-invalid";
oj.DefaultMessagingStrategy._SELECTOR_STATE_WARNING = "oj-warning";

oj.Object.createSubclass(oj.DefaultMessagingStrategy, oj.MessagingStrategy, "oj.DefaultMessagingStrategy");

/**
 * Updates component theming, a11y attributes using the latest component state and its messaging 
 * content.
 * 
 * @private
 */
oj.DefaultMessagingStrategy.prototype.update = function ()
{
  oj.DefaultMessagingStrategy.superclass.update.call(this);

  var launcher = this.GetLauncher(), maxSeverity = this.GetMaxSeverity(), removeClasses = [], 
      addClasses=[], invalid = false, component = this.GetComponent(), jqRoot = component.widget();
  
  if (!launcher)
  {
    return;
  }
  
  // apply element error styling if invalid
  if (this.IsInvalid())
  {
    // enable tooltip; set invalid class and aria invalid
    // TODO: oj classes should be set on the root DOM
    removeClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_WARNING);
    addClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_INVALID);
    invalid = true;
  }
  else
  {
    // TODO: add warning or other severity state
    if (this.HasMessages() && maxSeverity === oj.Message.SEVERITY_LEVEL['WARNING'])
    {
      removeClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_INVALID);
      addClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_WARNING);
    }
    else
    {
      // for all other messages we remove selectors
      removeClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_INVALID);
      removeClasses.push(oj.DefaultMessagingStrategy._SELECTOR_STATE_WARNING);
    }
  }
  
  jqRoot.removeClass(removeClasses.join(" "))
          .addClass(addClasses.join(" ")); // classes added to root
  launcher.attr({"aria-invalid": invalid}); // aria attrs added to the launcher element
  
};

/**
 * Cleans up messaging artifacts that were created on the component instance. E.g., destroys any 
 * widgets it created, removes styles added etc.
 * 
 * @private
 */
oj.DefaultMessagingStrategy.prototype.deactivate = function ()
{
  var jqRoot = this.GetComponent().widget();
  
  jqRoot.removeClass(oj.DefaultMessagingStrategy._SELECTOR_STATE_INVALID)
                  .removeClass(oj.DefaultMessagingStrategy._SELECTOR_STATE_WARNING);
  this.GetLauncher().removeAttr("aria-invalid");
  oj.DefaultMessagingStrategy.superclass.deactivate.call(this);
};


/**
 * A messaging strategy that uses html5 placeholder (for now) to set/remove placeholder content.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed in the placeholder.
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.PlaceholderMessagingStrategy = function(displayOptions)
{
  this.Init(displayOptions);
};

oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.PLACEHOLDER, 
                                                oj.PlaceholderMessagingStrategy);

// Subclass from oj.MessagingStrategy 
oj.Object.createSubclass(oj.PlaceholderMessagingStrategy, oj.MessagingStrategy, "oj.PlaceholderMessagingStrategy");

/**
 * Initializer
 *  
 * @param {Array} displayOptions an array of messaging artifacts displayed in the notewindow.
 * @private
 */
oj.PlaceholderMessagingStrategy.prototype.Init = function (displayOptions) 
{
  oj.PlaceholderMessagingStrategy.superclass.Init.call(this, displayOptions);
};

/**
 * Sets up a placeholder for the component instance using the converter hint.
 * 
 * @param {Object} cm a reference to an instance of oj.ComponentMessaging that provides access to 
 * the latest messaging content.
 * 
 * @private
 */
oj.PlaceholderMessagingStrategy.prototype.activate = function (cm)
{
  oj.PlaceholderMessagingStrategy.superclass.activate.call(this, cm);
  this._refreshPlaceholder();
};

oj.PlaceholderMessagingStrategy.prototype.reactivate = function (newDisplayOptions)
{
  oj.PlaceholderMessagingStrategy.superclass.reactivate.call(this, newDisplayOptions);
  this._refreshPlaceholder();
};

oj.PlaceholderMessagingStrategy.prototype.deactivate = function ()
{
  oj.PlaceholderMessagingStrategy.superclass.deactivate.call(this);
};

// a default placeholder is set on the component, and that is typically the converter hint
oj.PlaceholderMessagingStrategy.prototype._refreshPlaceholder = function()
{
  var launcher = this.GetLauncher(), jqRoot = this.GetComponent().widget(), content, hints;
  
  if (this.ShowPlaceholderContent() && launcher)
  {
    hints = this.GetConverterHint();
    content = hints.length ? hints[0] : "";
    if (content)
    {
      var values = {}, flags = {};
      values['placeholder'] = content;
      flags['_oj_messaging_update'] = true; // to indicate to component that placeholder is being 
                                             // set from messaging module 

      this.GetComponent().option(values, flags);
    }
  }
};

oj.PlaceholderMessagingStrategy.prototype.ShowPlaceholderContent = function ()
{
  // we have a placeholder to set/show if we have converterHint set.
  return this.ShowConverterHint();
};

/**
 * The ComponentValidity object represent a component's current validity state. The instance 
 * provides specific methods to retrieve info such as <p>
 *  - whether the component is valid <p>
 *  - the messages currently tracked on the component.<p>
 *  - the max severity level of the messages, e.g., fatal, error etc. See oj.Message for details
 * 
 * @param {boolean} valid
 * @param {Array} messages
 * @constructor
 * @private
 */
oj.ComponentValidity = function(valid, messages)
{
  // TODO: provide methods that allow model implementations to instruct the elements to showMessages, 
  // especially the ones marked for 'lazy' notification. 
  this.Init(valid, messages);
};

/**
 * whether there are invalid messages among the list of messages.
 * 
 * @param {Array} messages list of messages
 * @returns {boolean} true if we have invalid messages; false otherwise
 */
oj.ComponentValidity.isInvalid = function (messages)
{
  var maxLevel = oj.Message.getMaxSeverity(messages);
  if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
  {
    return true;
  }

  return false;
  
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.ComponentValidity, oj.Object, "oj.ComponentValidity");

/**
 * The jquery element whose validity this object describes
 * @param {boolean} valid
 * @param {Array} messages instances of oj.Message
 */
oj.ComponentValidity.prototype.Init = function (valid, messages) 
{
  oj.ComponentValidity.superclass.Init.call(this);
  this._initialize(valid, messages);
};

/**
 * Returns a boolean true if valid; false if element not valid
 * @returns {boolean}
 * @private
 */
oj.ComponentValidity.prototype.isInvalid = function () 
{
  return this._invalid;
};

/**
 * Returns a boolean true if has messages to show; false if no messages to show
 * @returns {boolean}
 * @private
 */
oj.ComponentValidity.prototype.hasMessages = function () 
{
  return this._messages.length > 0;
};

/**
 * Returns an Array or messages that we are marked for immediate display or an empty array.
 * @private
 * @returns {Array}
 */
oj.ComponentValidity.prototype.getMessages = function () 
{
  return this._messages;
};

/**
 * Returns the max severity level.
 * @return {number}
 * @private
 */
oj.ComponentValidity.prototype.getMaxSeverity = function () 
{
  return this._maxSeverity;
};

/**
 * Updates the validity state for the component.
 * 
 * @param {boolean} valid
 * @param {Array} messages instances of oj.Message
 * @private
 */
oj.ComponentValidity.prototype.update = function (valid, messages)
{
  this._initialize(valid, messages);
};

oj.ComponentValidity.prototype._initialize = function (valid, messages)
{
  this._compValid = valid;
  this._compMessages = messages;
  
  this._messages = this._getImmediateMessages(); // messages currently showing
  this._maxSeverity = oj.Message.getMaxSeverity(this._messages); // max severity of messages currently showing
  this._invalid = oj.ComponentValidity.isInvalid(this._messages); 
};

/**
 * Returns an array of messages that are marked for immediate display.
 * 
 * @return {Array} of messages each an instance of oj.Message
 * @private
 */
oj.ComponentValidity.prototype._getImmediateMessages = function ()
{
  var messages = this._compMessages || [], immediateMsgs = [], msg;
  for (var index in messages)
  {
    msg = messages[index];
    // gather component messages marked for immediate display 
    if (msg instanceof oj.ComponentMessage && !msg.canDisplay())
    {
      continue;
    }
    immediateMsgs.push(msg);
  }
  
  return immediateMsgs;
};

// Copyright (c) 2013, Oracle and/or its affiliates. 
// All rights reserved.

/*jslint browser: true*/

/**
 * @export
 * @class
 * Common test support in JavaScript
 */ 
oj.Test = {}; 


/**
 * @export
 * @type {boolean} 
 * A global application flag that can be set by a test to indicate that all page startup processing is done
 * and an external automated test can begin
 */
oj.Test.ready = false;

/**
 * @export
 * Return the node found given the locator
 * @param {Object|string} locator A locator which is either a JSON string (to be parsed using $.parseJSON), or an Object with the following properties:
 *                                             element: the component's selector, determined by the test author when laying out the page
 *                                             component: optional - in the future there may be more than one component contained within a page element
 *                                             subId: the string, documented by the component, that the component expects in getNodeBySubId to locate a particular subcomponent
 *  @returns {Object} the subcomponent located by the subId string passed in locator, if found.
 */
oj.Test.domNodeForLocator = function(locator) {   
    var locObj = locator;
    if (oj.StringUtils.isString(locator)) {
        var locStr = /** @type {string} */ (locator);
        try {
            locObj = $.parseJSON(locStr);
        }
        catch (e) {
            return null;
        }
    }
    if (locObj && locObj['element']) {
        var element = $(locObj['element']);
        if (element) {
            var widgetConst = oj.Components.getWidgetConstructor(element[0], locObj['component']);
            return widgetConst("getNodeBySubId", {'subId' : locObj['subId']});
        }
    }
    return null;
};




/*jslint browser: true*/
/**
 * in some OS/browser combinations you can attempt to detect high contrast mode
 * in javascript, go to the url below and look for "High Contrast"
 * http://www.w3.org/TR/wai-aria-practices/
 * 
 * This function uses a variation of the code in the "High Contrast" section of  
 * the site above to try and detect high contrast mode
 * by script, but it by no means definitively tells you whether or not you
 * are actually in high contrast mode. As discussed at the url above you 
 * may need to have a user preference setting for high contrast.
 * 
 * If the script is able to detect high contrast mode it sets the class 
 * "oj-hicontrast" on the body tag. When "oj-high-contrast" is present 
 * JET provides alternate informational images that are specially designed 
 * for high contrast users. 
 * @private
 */
function _ojHighContrast()
{
  // using a data uri, I googled for shortest uri to get this one since 
  // I don't care about the actual image, but I do want a legit image
  // otherwise I see an error in chrome and I don't want users to be
  // confused by seeing any error.

  var div = $("<div style='border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=);'></div>"), bki;
  div.appendTo("body");

  bki = div.css("backgroundImage");
  //console.log("background-image:" + bki);
  //console.log("borderTopColor == borderRightColor: ", div.css("borderTopColor") == div.css("borderRightColor"));
  if (div.css("borderTopColor") == div.css("borderRightColor") ||
      (bki != null && (bki == 'none' || bki == 'url (invalid-url:)')))
  {
    $('body').addClass("oj-hicontrast");
  }

  div.remove();
}

$(document).ready(function() {
  _ojHighContrast();
});
/*jslint browser: true*/
/**
 * @private
 */
function _ojSlowCSS()
{
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    $('html').addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow");
  }

}

$(document).ready(function() {
  _ojSlowCSS();
});
/*jslint browser: true*/
/*
** Copyright (c) 2004, 2012, Oracle and/or its affiliates. All rights reserved.
*/
/**
 * Utilities used in conjunction with the jquery positon utility.
 * @ignore
 */
oj.PositionUtils = {};

/**
 * Of the properties on the position object, "my" and "at" are of intrest. The base jquery
 * horizontal alignment mnemonics are "right", "center" and "left". For better Jet RTL
 * support we have added "start" and "end".  Depending on the rtl direction, "start" and
 * "end" will be replaced with "left" or "right". The resultant postion object will
 * be a new instance that extends the postion passed as the first argument.
 * 
 * @param {Object} position source position object
 * @param {boolean} isRtl 
 * @return {Object} position object that has normalized jquery horizontal mnemonics.
 */        
oj.PositionUtils.normalizeHorizontalAlignment = function(position, isRtl)
{
  oj.Assert.assertObject(position, "position");
  var target = $.extend({}, position);  
  for (var i = 0; i < oj.PositionUtils._ALIGN_RULE_PROPERTIES.length; i++)
  {
    var propName = oj.PositionUtils._ALIGN_RULE_PROPERTIES[i];
    var align = target[propName];
    if (align)
      target[propName] = align.replace("start", (isRtl ? "right" : "left"))
                              .replace("end", (isRtl ? "left" : "right"));
  } 

  return target;
};

oj.PositionUtils._ALIGN_RULE_PROPERTIES = ['my', 'at'];
});
