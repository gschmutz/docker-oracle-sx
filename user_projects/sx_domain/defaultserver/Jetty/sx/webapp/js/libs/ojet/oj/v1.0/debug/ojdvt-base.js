"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojvalidation'], function(oj, $)
{
/**
 * Creates an attribute group handler that will generate stylistic attribute values such as colors or shapes based on data set categories.
 * @param {Object} [matchRules] A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "square", "water" : "circle", "iced tea" : "triangleUp"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 */
oj.AttributeGroupHandler = function(matchRules) {
  this.Init(matchRules);
};

oj.Object.createSubclass(oj.AttributeGroupHandler, oj.Object, "oj.AttributeGroupHandler");

oj.AttributeGroupHandler.prototype.Init = function(matchRules) {
  oj.AttributeGroupHandler.superclass.Init.call(this);
  this._matchRules = matchRules ? matchRules : {};
  this._assignments = {};
  this._valueIndex = 0;
  this.Values = this.getValueRamp();
  for (var key in this._matchRules) {
    // remove match rule value from attribute group values
    var idx = this.Values.indexOf(this._matchRules[key]);
    if (idx !== -1)
      this.Values.splice(idx, 1);
  }
}

/**
 * Returns the array of possible attribute values for this attribute group handler.
 * This array can be modified so subclasses should return a copy of its internal value ramp.
 * @returns {Array} The array of attribute values
 * @export
 */
oj.AttributeGroupHandler.prototype.getValueRamp = function() {
  return [];
}

/**
 * Assigns the given category an attribute value.  Will consistently return the same attribute value for equal categories.
 * @param {Object} category The category to assign
 * @returns {Object} The attribute value for the category
 * @export
 */
oj.AttributeGroupHandler.prototype.getValue = function(category) {
  if (this._matchRules[category])
    return this._matchRules[category];
  else if (this._assignments[category])
    return this._assignments[category];
  else {
    this._assignments[category] = this.Values[this._valueIndex];
    if (this._valueIndex == this.Values.length - 1)
      this._valueIndex = 0;
    else
      this._valueIndex++;
    return this._assignments[category];
  } 
}

/**
 * Returns the current map of key value pairs for categories and the assigned attribute values
 * @return {Array} The current list of category and value pairing
 * @export
 */
oj.AttributeGroupHandler.prototype.getCategoryAssignments  = function() {
  var assignments = [];
  for (var i in this._assignments)
    assignments.push({"category": i, "value": this._assignments[i]});
  return assignments;
}

/**
 * Reserves an attribute value for the given category
 * @param {String} category Used for checking inputs to getAttributeValue against when assigning an attribute value
 * @param {String} attributeValue The attribute value to assign for inputs matching the given category e.g. "square" or "circle"
 * @export
 */
oj.AttributeGroupHandler.prototype.addMatchRule = function(category, attributeValue) {
  this._matchRules[category] = attributeValue;
}
var DvtStyleProcessor = {
	'CSS_TEXT_PROPERTIES':
		function(node, styleString) {
			var ignoreProperties = {};
			if (node) {
				if (node.hasClass("oj-gaugeMetricLabel") && node.hasClass(node.parentNode, "oj-ledGauge")) {
					ignoreProperties ['font-size'] = true;
					ignoreProperties ['color'] = true;
				}
				if (node.hasClass(node, "oj-chartSliceLabel")) {
					ignoreProperties ['color'] = true;
				}
			}
			return DvtStyleProcessor._mergeOptionsAndDivStyle(node, styleString, false, ignoreProperties);
		},
	'CSS_BACKGROUND_PROPERTIES':
		function(node, styleString) {
			return DvtStyleProcessor._mergeOptionsAndDivStyle(node, styleString, true, {});
		},
	'CSS_URL':
		function(node, styleString) {
			return DvtStyleProcessor._parseUrl(node);
		}
	}
        
DvtStyleProcessor._INHERITED_FONT_COLOR = "rgb(254, 0, 254)";
DvtStyleProcessor._INHERITED_FONT_FAMILY = "Times";
DvtStyleProcessor._INHERITED_FONT_SIZE = "1px";
DvtStyleProcessor._INHERITED_FONT_WEIGHT = "1";
DvtStyleProcessor._INHERITED_FONT_STYLE = "normal";

// Chrome adjusts px font size when zooming, so only set the font size if the inherited size is less than 4px.
DvtStyleProcessor._FONT_SIZE_BUFFER = 4.0;

DvtStyleProcessor.defaultStyleProcessor = function(cssDiv, property) {
	return cssDiv.css(property);
}

/**
 * @param {Object} cssDiv The element with style class or with some default style
 */
DvtStyleProcessor._parseUrl = function(cssDiv) {
  var url = cssDiv.css('background-image');
  if (url && url.indexOf('url(') !== -1)
    return url.slice(url.indexOf('url(')+4, url.length-1).replace(/"/g,"");
  else
    return url;
}

/**
 * @param {Object} cssDiv The element with style class or with some default style
 * @return {string} The merged CSS background properties string including border-color, border-width, and background-color
 */
DvtStyleProcessor._buildCssBackgroundPropertiesString = function(cssDiv) {
  var styleString = "";
  if (cssDiv.css('border-top-color'))
  {
    styleString += "border-color: " + cssDiv.css('border-top-color') + ";";
  }
  // border without border-style is always nonsense (with width 0px)
  if (cssDiv.css('border-width') && (cssDiv.css('border-style') && cssDiv.css('border-style') != 'none'))
  {
    styleString += "border-width: " + cssDiv.css('border-width') + ";";
  }
  if (cssDiv.css('background-color'))
  {
    styleString += "background-color: " + cssDiv.css('background-color') + ";";
  }

  return styleString;
}

/**
 * build css style string
 * @param {Object} cssDiv The element with style class or with some default style
 * @param {Object} ignoreProperties The css properties to ignore
 * @return {string} The merged CSS text properties string including font-family, font-size, font-weight, color, and font-style
 */
DvtStyleProcessor._buildTextCssPropertiesString = function(cssDiv, ignoreProperties)
{
  var styleString = "";
  var value = cssDiv.css('font-family');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_FAMILY)
  {
    styleString += "font-family: " + value.replace(/"/g,"'") + ";";
  }
  value = cssDiv.css('font-size');
  if (value && !(value.indexOf("px") > -1 && parseFloat(value) < DvtStyleProcessor._FONT_SIZE_BUFFER) && !ignoreProperties ['font-size'])
  {
    styleString += "font-size: " + value + ";";
  }
  value = cssDiv.css('font-weight');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_WEIGHT)
  {
    styleString += "font-weight: " + value + ";";
  }
  value = cssDiv.css('color');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_COLOR && !ignoreProperties ['color'])
  {
    styleString += "color: " + value + ";";
  }
  value = cssDiv.css('font-style');
  if (value && value !== DvtStyleProcessor._INHERITED_FONT_STYLE)
  {
    styleString += "font-style: " + value + ";";
  }
  return styleString;
}

/**
 * Merges style on div with css text in optionsStyle.
 * 
 * @param {Object} cssDiv The element with style class or with some default style
 * @param {string} optionsStyle The extending CSS text style
 * @param {Object} ignoreProperties The css properties to ignore
 * @param {boolean} bIncludeBackgroundProps Whether to merge background properties in addition to text properties. Default is to merge only text properties.
 * @return {string} The merged CSS properties string
 */
DvtStyleProcessor._mergeOptionsAndDivStyle = function(cssDiv, optionsStyle, bIncludeBackgroundProps, ignoreProperties)
{
  if (!ignoreProperties)
    ignoreProperties = {};

  if (!cssDiv)
  {
    return optionsStyle;
  }

  var oldStyle;
  if (optionsStyle)
  {
    oldStyle = cssDiv.attr("style");
    if (oldStyle)
      cssDiv.attr("style", oldStyle + optionsStyle);
    else
      cssDiv.attr("style", optionsStyle);
  }

  var styleString = '';

  if (bIncludeBackgroundProps !== true)
  {
    styleString += this._buildTextCssPropertiesString(cssDiv, ignoreProperties);
  }

  if (bIncludeBackgroundProps !== false)
  {
    styleString += this._buildCssBackgroundPropertiesString(cssDiv);
  }
  if (oldStyle)
  {
    cssDiv.attr("style", oldStyle);
  }
  return styleString;
}

/**
 * Creates dummy divs for each component style class and merges their values with the component options object.
 * @param {Object} element DOM node to add CSS styles to for processing
 * @param {Object} options The options object to merge CSS properties with
 * @param {Array} componentClasses The style classes associated with the component
 * @param {Object} childClasses Style classes associated with a component's children
 * @private
 */ 
DvtStyleProcessor.processStyles = function(element, options, componentClasses, childClasses)
{
  // Add the component style classes to a hidden dummy div
  var outerDummyDiv = $(document.createElement("div"));
  outerDummyDiv.attr("style", "display:none;");
  element.append(outerDummyDiv);
  var styleClasses = '';
  for (var i=0; i<componentClasses.length; i++)
    styleClasses = styleClasses + componentClasses[i] + " ";
  outerDummyDiv.attr("class", styleClasses);

  // Add an inner dummy div to overwrite inherited values and prevent populating options object with them
  var innerDummyDiv = $(document.createElement("div"));
  outerDummyDiv.append(innerDummyDiv);
  innerDummyDiv.css("font-family", DvtStyleProcessor._INHERITED_FONT_FAMILY);
  innerDummyDiv.css("font-size", DvtStyleProcessor._INHERITED_FONT_SIZE);
  innerDummyDiv.css("color", DvtStyleProcessor._INHERITED_FONT_COLOR);
  innerDummyDiv.css("font-weight", DvtStyleProcessor._INHERITED_FONT_WEIGHT);
  innerDummyDiv.css("font-style", DvtStyleProcessor._INHERITED_FONT_STYLE);
  for (var styleClass in childClasses) {
    var dummyDiv = $(document.createElement("div"));
    dummyDiv.addClass(styleClass);
    innerDummyDiv.append(dummyDiv);
    DvtStyleProcessor._processStyle(options, dummyDiv, childClasses[styleClass]);
  }
}

/**
 * Resolves the css properties within a dummy div
 * @param {Object} options The options object to merge CSS properties with
 * @param {Object} cssDiv The div to use for processing CSS style
 * @param {Object} definition Map of CSS style attribute and values to process
 * @private
 */ 
DvtStyleProcessor._processStyle = function(options, cssDiv, definition)
{
  if (definition instanceof Array) {
    for (var i=0;i<definition.length; i++) 
      DvtStyleProcessor._resolveStyle(options, cssDiv, definition[i]);
  } else {
    DvtStyleProcessor._resolveStyle(options, cssDiv, definition);
  }
}
      
/**
 * Helper function to resolve the css properties within a dummy div.
 * @param {Object} options The options object to merge CSS properties with
 * @param {Object} cssDiv The div to use for processing CSS style
 * @param {Object} definition Map of CSS style attribute and values to process
 * @private
 */ 
DvtStyleProcessor._resolveStyle = function(options, cssDiv, definition)
{
  var path = new DvtJsonPath(options, definition['path']);
  var value;
  if(definition['property']) {
    var handler = DvtStyleProcessor[definition['property']];
    if (!handler)
      value = DvtStyleProcessor.defaultStyleProcessor(cssDiv, definition['property']);
    else
      value = handler(cssDiv, path.getValue());
  }
  if(value != null
     && !(typeof value == 'string' && value.replace(/^\s+/g, '') == '')) {
    path.setValue(value);
  }
}
oj.__registerWidget('oj.dvtBaseComponent', $['oj']['baseComponent'], {
 
  /** 
   * @override
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _ComponentCreate : function() {
    this._super();
    
    // Create a reference div within the element to be used for computing relative event coords.
    this._referenceDiv = $(document.createElement("div"));
    this._referenceDiv.attr("style", "visibility:hidden;");
    this.element.append(this._referenceDiv);
  
    // Create the DvtContext, which creates the svg element and adds it to the DOM.
    this._context = new DvtContext(this.element[0], null, this._referenceDiv[0]);
    
    // Set the reading direction on the context
    this._context.setReadingDirection(this._GetReadingDirection());
    
    // Set the tooltip and datatip div style classes on the context
    this._context.setTooltipStyleClass('oj-dvt-tooltip');
    this._context.setDatatipStyleClass('oj-dvt-datatip');
    
    // Set high contrast mode if needed
    if ($(document.body).hasClass('oj-hicontrast'))
      DvtAgent.setHighContrast(true);
    
    // Set the tabindex on the element to enable keyboard handling
    this.element.attr("tabIndex", 0);
    
    // Create and cache the component instance
    this._component = this._CreateDvtComponent(this._context, this._HandleEvent, this);

    // Add the component to the display tree of the rendering context.
    this._context.getStage().addChild(this._component);  
    
    // Merge css styles with with json options object
    this._ProcessStyles();
    
    // Retrieve and apply the translated strings onto the component bundle
    this._processTranslations();

    // Load component resources
    this._LoadResources();

    // Render the component
    this._Render();
    
    // Add resize listener
    oj.DomUtils.addResizeListener(this.element[0], $.proxy(this._handleResize, this));
  },
  
  /** 
   * @override
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  refresh : function() {
    this._super();
  
    // Update the reading direction on the context
    this._context.setReadingDirection(this._GetReadingDirection());
    
    // Retrieve and apply the translated strings onto the component bundle
    this._processTranslations();
  
    // Render the component with any changes
    this._Render();
  },
  
  /** 
   * @override
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  getNodeBySubId : function(locator) {
    // subcomponents should override for jsDoc to list subId values
    var automation;
    if (this._component && this._component.getAutomation)
      automation = this._component.getAutomation();
    if (automation)
      return automation.getDomElementForSubId(locator['subId']);
    return null;
  },
  
  /** 
   * @override
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  getSubIdByNode : function(node) {
    // subcomponents should override for jsDoc to list subId values
    var automation;
    if (this._component && this._component.getAutomation)
      automation = this._component.getAutomation();
    if (automation)
      return automation.getSubIdForDomElement(node);
    return null;
  },
  
  /**
   * Create dummy divs for style classes and merge style class values with json 
   * options object
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _ProcessStyles : function() {
    // Append the component style classes to the element
    var componentStyles = this._GetComponentStyleClasses();
    for(var i=0; i<componentStyles.length; i++) {
      this.element.addClass(componentStyles[i]);
    }
  	
  	// Process selectors for this component
    DvtStyleProcessor.processStyles(this.element, this.options, 
                                    this._GetComponentStyleClasses(), 
                                    this._GetChildStyleClasses());
  },
  
  /**
   * Returns the style classes associated with the component.
   * @return {Array}
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _GetComponentStyleClasses : function() {
    return ['oj-dvtbase'];
  },
  
  /**
   * Returns a map of the style classes associated with a component's children.
   * @return {Object}
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _GetChildStyleClasses : function() {
    return {};
  },
  
  /**
   * Returns an array of supported event types.  Used in conjunction with _setOptions to skip unnecessary rendering when 
   * event listeners are bound. Subclasses must override to return supported event types.
   * @return {Array}
   */
  _GetEventTypes : function() {
    return [];
  },
  
  /**
   * Returns a map containing keys corresponding to the string ids in ojtranslations.js and values corresponding to the 
   * toolkit constants for the DvtBundle objects.  This map must be guaranteed to be a new instance so that subclasses can
   * add their translations to it.
   * @return {Object}
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _GetTranslationMap: function() {
    var ret = {
      'DvtUtilBundle.CLEAR_SELECTION': this.getResource('labelClearSelection'),
      
      // Stages for Accessibility
      'DvtUtilBundle.STATE_SELECTED': this.getResource('stateSelected'),
      'DvtUtilBundle.STATE_UNSELECTED': this.getResource('stateUnselected'),
      'DvtUtilBundle.STATE_MAXIMIZED': this.getResource('stateMaximized'),
      'DvtUtilBundle.STATE_MINIMIZED': this.getResource('stateMinimized'),
      'DvtUtilBundle.STATE_EXPANDED': this.getResource('stateExpanded'),
      'DvtUtilBundle.STATE_COLLAPSED': this.getResource('stateCollapsed'),
      'DvtUtilBundle.STATE_ISOLATED': this.getResource('stateIsolated'),
      'DvtUtilBundle.STATE_HIDDEN': this.getResource('stateHidden'),
      'DvtUtilBundle.STATE_VISIBLE': this.getResource('stateVisible'),
      
      'DvtUtilBundle.SCALING_SUFFIX_THOUSAND': this.getResource('labelScalingSuffixThousand'),
      'DvtUtilBundle.SCALING_SUFFIX_MILLION': this.getResource('labelScalingSuffixMillion'),
      'DvtUtilBundle.SCALING_SUFFIX_BILLION': this.getResource('labelScalingSuffixBillion'),
      'DvtUtilBundle.SCALING_SUFFIX_TRILLION': this.getResource('labelScalingSuffixTrillion'),
      'DvtUtilBundle.SCALING_SUFFIX_QUADRILLION': this.getResource('labelScalingSuffixQuadrillion')
    };
    
    // Add abbreviated month strings
    var monthNames = oj.LocaleData.getMonthNames("abbreviated");
    ret['DvtUtilBundle.MONTH_SHORT_JANUARY'] = monthNames[0];
    ret['DvtUtilBundle.MONTH_SHORT_FEBRUARY'] = monthNames[1];
    ret['DvtUtilBundle.MONTH_SHORT_MARCH'] = monthNames[2];
    ret['DvtUtilBundle.MONTH_SHORT_APRIL'] = monthNames[3];
    ret['DvtUtilBundle.MONTH_SHORT_MAY'] = monthNames[4];
    ret['DvtUtilBundle.MONTH_SHORT_JUNE'] = monthNames[5];
    ret['DvtUtilBundle.MONTH_SHORT_JULY'] = monthNames[6];
    ret['DvtUtilBundle.MONTH_SHORT_AUGUST'] = monthNames[7];
    ret['DvtUtilBundle.MONTH_SHORT_SEPTEMBER'] = monthNames[8];
    ret['DvtUtilBundle.MONTH_SHORT_OCTOBER'] = monthNames[9];
    ret['DvtUtilBundle.MONTH_SHORT_NOVEMBER'] = monthNames[10];
    ret['DvtUtilBundle.MONTH_SHORT_DECEMBER'] = monthNames[11];
    
    return ret;
  },
  
  /**
   * Retrieves the translated resource with the specified 
   * @param {string} key The key used to retrieve the translated resource.
   * @param {Array.<string>} params The array of named parameters that need to be converted into index based parameters.
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _GetTranslatedResource: function(key, params) {
    var translatedResource = this.getResource(key);
    
    // If named parameters are defined, replace with index based params     
    if(params) {
      var paramMap = {};
      
      for(var i=0; i<params.length; i++) {
        paramMap[params[i]] = '{' + i + '}';
      }
      
      translatedResource = oj.Translations.applyParameters(translatedResource, paramMap);
    }

    return translatedResource;
  },
   
  /**
   * Called to process the translated strings for this widget.  
   * @private
   */
  _processTranslations: function() {
    // Retrieve the map of translation keys + DvtBundle identifiers
    var translationMap = this._GetTranslationMap();
    
    // Register with the DvtBundle
    DvtBundle.addLocalizedStrings(translationMap);
  },
  
  /**
   * @override
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _destroy : function() {
    // Call destroy on the JS component
    if (this._component.destroy)
      this._component.destroy();
      
    // Remove DOM resize listener  
    oj.DomUtils.removeResizeListener(this.element[0], $.proxy(this._handleResize, this));
    
    // Remove children and clean up DOM changes
    this.element.children().remove();
    this.element.removeAttr('role').removeAttr('tabIndex');
    
    // Remove style classes that were added
    var componentStyles = this._GetComponentStyleClasses();
    for(var i=0; i<componentStyles.length; i++) {
      this.element.removeClass(componentStyles[i]);
    }
    
    // Call super last for destroy
    this._super();
  },

  /**
   * @override
   * @memberof! oj.dvtBaseComponent
   * @instance
   * @protected
   */
  _setOptions : function(options) {
    // Call the super to update the property values
    this._superApply(arguments);
    
    // Render the component with the updated options.
    if(this._bUserDrivenChange) {
      // Option change fired in response to user gesture. Already reflected in UI, so no render needed.
      return;
    }
    else {
      // Event listeners don't require rendering.  Iterate through options to check for non-event options.
      var bRenderNeeded = false;
      var eventTypes = this._GetEventTypes();
      $.each(options, function(key, value) {
        if(eventTypes.indexOf(key) < 0) {
          bRenderNeeded = true;
          return false;
        }
      });
      
      // Render the component with the changes.
      if(bRenderNeeded)
        this._Render();
    }
  },
  
  /**
   * @override
   * @memberof! oj.dvtBaseComponent
   * @instance
   * @protected
   */
  _setOption : function (key, value)
  {  
    // If this property supports option change events, keep track of the previous value.
    var bSupportsOptionChange = this._SupportsOptionChangeEvent(key);
    var previousValue = this.options[key];
    
    // Call the super to set the option 
    var ret = this._superApply(arguments);
    
    // Trigger option change event if needed
    if (bSupportsOptionChange)
    {
      var newValue = this.options[key];
      
      // trigger a optionChange event only when the newValue is different from the previousValue to 
      // avoid recursion. E.g., setOption() triggers optionChange, which calls ko binding callback, 
      // which then writes to observable. Which then causes binding update to call set option again
      if (!oj.Object.__innerEquals(previousValue, newValue))
      {
        var ui = {
          'option': key, 'previousValue': previousValue, 'value': newValue,
          "optionMetadata": {'writeback': this._bUserDrivenChange ? "shouldWrite" : "shouldNotWrite"}
        };
        this._trigger('optionChange', null, ui);
      }
    }
    
    return ret;
  },
  
  /**
   * Called by _create to instantiate the specific DVT component instance.  Subclasses must override.
   * @param {DvtContext} context
   * @param {Function} callback
   * @param {Object} callbackObj
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return null; // subclasses must override
  },
  
  /**
   * Called by the component to process events.  Subclasses should override to delegate DVT component events to their 
   * JQuery listeners.
   * @param {Object} event
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _HandleEvent : function(event) {
    // subclasses should override to delegate component events to their listeners
  },
  
  /**
   * Called when the component is resized.
   * @param {number} width
   * @param {number} height
   * @private
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _handleResize : function(width, height) {
    // Render the component at the new size if it changed enough
    var newWidth = this.element.width();
    var newHeight = this.element.height();
    if(Math.abs(newWidth - this._width) + Math.abs(newHeight - this._height) >= 5) {    
      this._component.render(null, newWidth, newHeight);
      
      // Update the rendered size
      this._width = newWidth;
      this._height = newHeight;
    }
  },
  
  /**
   * Called once during component creation to load resources.
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _LoadResources : function() {
    // subcomponents should override
  }, 
          
  /**
   * Called to render the component at the current size.
   * @protected
   * @instance
   * @memberof! oj.dvtBaseComponent
   */
  _Render : function() {
    // Fix 18498656: If the component is not attached to a visible subtree of the DOM, rendering will fail because 
    // getBBox calls will not return the correct values.  Log an error message in this case and avoid rendering.
    // Note: Checking offsetParent() does not work here since it returns false for position: fixed.
    if(!this._context.isReadyToRender())
      oj.Logger.error(this.getResource('notReadyToRender')['summary']);
    else {
      // Render the component
      this._width = this.element.width();
      this._height = this.element.height();
      this._component.render(this.options, this._width, this._height);
    }
  },
  
  /**
   * Returns true if the specified option supports firing optionChange events.
   * @param {string} key The name of the option.
   * @return {boolean} true if the option supports optionChange events.
   * @memberof! oj.dvtBaseComponent
   * @instance
   * @protected
   */
  _SupportsOptionChangeEvent : function(key) {
    return false;
  },
  
  /**
   * Sets an option change that was driven by user gesture.  Used in conjunction with _setOption to ensure that the
   * correct optionMetadata flag for writeback is set.
   * @param {string} key The name of the option to set.
   * @param {Object} value The value to set for the option.
   * @memberof! oj.dvtBaseComponent
   * @instance
   * @protected
   */
  _UserOptionChange : function(key, value) {
    this._bUserDrivenChange = true;
    this.option(key, value);
    this._bUserDrivenChange = false;
  }
});
/**
 * Creates a shape attribute group handler that will generate shape attribute values.
 * @param {Object} [matchRules] A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "square", "water" : "circle", "iced tea" : "triangleUp"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 * @extends {oj.AttributeGroupHandler}
 */
oj.ShapeAttributeGroupHandler = function(matchRules) {
  this.Init(matchRules);
}

oj.Object.createSubclass(oj.ShapeAttributeGroupHandler, oj.AttributeGroupHandler, "oj.ShapeAttributeGroupHandler");

oj.ShapeAttributeGroupHandler._attributeValues = ['square', 'circle', 'diamond', 'plus', 'triangleDown', 'triangleUp', 'human'];

/**
 * @override
 */
oj.ShapeAttributeGroupHandler.prototype.getValueRamp = function() {
  return oj.ShapeAttributeGroupHandler._attributeValues.slice();
}
/**
 * Creates a color attribute group handler that will generate color attribute values.
 * @param {Object} [matchRules] A map of key value pairs for categories and the matching attribute value e.g. {"soda" : "#336699", "water" : "#CC3300", "iced tea" : "#F7C808"}.
 *                            Attribute values listed in the matchRules object will be reserved only for the matching categories when getAttributeValue is called.
 * @export
 * @constructor
 * @extends {oj.AttributeGroupHandler}
 */
oj.ColorAttributeGroupHandler = function(matchRules) {
  this._attributeValues = [];
  // In high contrast mode attribute group colors get overridden to all
  // white or all black. In this case we should use the default colors.
  if ($(document.body).hasClass('oj-hicontrast'))  {
    this._attributeValues = oj.ColorAttributeGroupHandler._defaultColors.slice();
  } else {
    var attrGpsDiv = $(document.createElement("div"));
    attrGpsDiv.attr("style", "display:none;");
    attrGpsDiv.attr("id", "attrGps");
    $(document.body).append(attrGpsDiv);
    for (var i = 0; i < oj.ColorAttributeGroupHandler._styleClasses.length; i++) {
      var childDiv = $(document.createElement("div"));
      childDiv.addClass(oj.ColorAttributeGroupHandler._styleClasses[i]);
      attrGpsDiv.append(childDiv);
      this._attributeValues.push(childDiv.css('color'));
    }
    attrGpsDiv.remove();
  }
  this.Init(matchRules);
}

oj.Object.createSubclass(oj.ColorAttributeGroupHandler, oj.AttributeGroupHandler, "oj.ColorAttributeGroupHandler");

oj.ColorAttributeGroupHandler._styleClasses = ['oj-dvt-category1',
  'oj-dvt-category2', 'oj-dvt-category3', 'oj-dvt-category4',
  'oj-dvt-category5', 'oj-dvt-category6', 'oj-dvt-category7',
  'oj-dvt-category8', 'oj-dvt-category9', 'oj-dvt-category10',
  'oj-dvt-category11', 'oj-dvt-category12'];

oj.ColorAttributeGroupHandler._defaultColors = ['#267db3', '#68c182', '#fad55c',
                                                '#ed6647', '#8561c8', '#6ddbdb', 
                                                '#ffb54d', '#e371b2', '#47bdef', 
                                                '#a2bf39', '#a75dba', '#f7f37b'];
/**
 * @override
 */
oj.ColorAttributeGroupHandler.prototype.getValueRamp = function() {
  return this._attributeValues.slice();
}
/**
 * Class to help set css properties on the component root options object
 * @param {Object} object The root options object from which this path should be resolved
 * @param {string} path The string path within the options object to resolve
 * @constructor
 * @ignore
 */
var DvtJsonPath = function(object, path)
{
  this._path = path;
  this._root = object;
  this._delimiter = '/';
}

/**
 * Resolves the parameter of the leaf object and the leaf object itself
 * @param {Object} root The root object to update
 * @param {string} path The string path within the root object to resolve
 * @param {string} delimiter The string delimiter for the path string
 * @param {boolean} createIfMissing Flag to create the hierarchy of the namespaces if they do not exist
 * @return {Object} The resolved parameter
 * @private
 */
DvtJsonPath.prototype._resolveLeafObjectAndProperty = function(root, path, delimiter, createIfMissing)
{
  var result = {};
  while (root && path.indexOf(delimiter) > -1)
  {
    var subProperty = path.substring(0, path.indexOf(delimiter));
    if (createIfMissing && root[subProperty] === undefined)
    {
      root[subProperty] = {};
    }
    root = root[subProperty];
    path = path.substring(path.indexOf(delimiter) + 1, path.length);
  }

  if (root)
  {
    result['object'] = root;
    result['parameter'] = path;
  }

  return result;
}

/**
 * Resolves path to the leaf object and parameter of this object
 * @param {boolean} createIfMissing Flag to create the hierarchy of the namespaces if they do not exist
 * @private
 */
DvtJsonPath.prototype._resolvePath = function(createIfMissing)
{
  if (this._leaf === undefined)
  {
    var result = this._resolveLeafObjectAndProperty(this._root, this._path, this._delimiter, createIfMissing);

    this._leaf = result['object'];
    this._param = result['parameter'];
  }
}

/**
 * Returns value of the leaf element of the path.
 * @return {string} value The value of the leaf element or undefined if path structure is not yet created
 */
DvtJsonPath.prototype.getValue = function()
{
  this._resolvePath(false);
  return this._leaf === undefined ? undefined : this._leaf[this._param];
}

/**
 * Sets value of the leaf element of the path.
 * @param {String} value The value of the leaf element
 */
DvtJsonPath.prototype.setValue = function(value)
{
  this._resolvePath(true);

  if (this._leaf[this._param] !== value)
  {
    this._leaf[this._param] = value;
  }
}
});
