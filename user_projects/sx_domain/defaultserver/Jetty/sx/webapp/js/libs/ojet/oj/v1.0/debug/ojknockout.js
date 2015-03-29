define(['ojs/ojcore', 'jquery', 'knockout'], function(oj, $, ko)
{
/*jslint browser: true, devel: true*/
/*global ComponentChangeTracker:true*/


/**
 * To create a custom binding,
 * use oj.ComponentBinding.create(). Using prototypal inheritance to extend
 * oj.ComponentBinding is not supported.
 * @export
 * @class oj.ComponentBinding 
 * @classdesc JQueryUI component binding for Knockout.js. 
 * @param {string|Array.<string>} name - the name of the binding or an
 * array of strings in case the binding needs to be registered under several names
 * @param {?(Object|string)=} options - property object
 * @see oj.ComponentBinding.create
 * @constructor
 */
oj.ComponentBinding = function(name, options)
{
  this.Init(name, options);
};

oj.Object.createSubclass(oj.ComponentBinding, oj.Object, "oj.ComponentBinding");


/**
 * Creates a binding instance and registers it with Knockout.js
 * @export
 * @param {string|Array.<string>} name - the name of the binding or an
 * array of strings in case the binding needs to be registered under several names
 * @param {?(Object|string)=} options - property object with the following fields:
 * <ul>
 *   <li>{string} 'componentName' - name of the component 
 *       Not specifying this parameter indicates that the binding should use the 'component' attribute 
 *       on itself to determine the constructor name
 *   </li>
 *   <li>{Function} 'afterCreate'- a callback invoked after component instance has been created.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{Element} element - DOM element associated with this binding</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *   </li>
 *   <li>{Function} 'beforeDestroy'- a callback invoked before the component instance is detroyed by this binding
 *        The function will receive the same parameters as the 'afterCreate' callback above.
 *   </li>
 * </ul>
 * When this parameter is specified as a string, it will be interpreted as a single 'componentName' option
 * @return {oj.ComponentBinding} binding instance
 */
oj.ComponentBinding.create = function(name, options)
{
  if (name == null)
  {
    throw "Binding name is required!";
  }
  
  var instance = new oj.ComponentBinding(name, options);
  
  var handlers = ko.bindingHandlers, i;
  var names = Array.isArray(name) ? name : [name];
  for (i=0; i<names.length; i++)
  {
    handlers[names[i]] = instance;
  }
  
  return instance;
};

/**
 * Retrieves the default componnet binding instance registered with Knockout.js
 * @return {oj.ComponentBinding} default binding instance
 * @export
 */
oj.ComponentBinding.getDefaultInstance = function()
{
  return oj.ComponentBinding._INSTANCE;
};

/**
 * Sets up custom handling for attributes that will be managed by this binding 
 * instance
 * @param {Object} opts - property object with the following fields:
 * <ul>
 *   <li>'attributes' - string array of attribue names</li>
 *   <li>{Function} 'init' - a function called when a managed attribute is initialized.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{string} name - attribute name</li>
 *           <li>{Object} value - attribute value</li>
 *           <li>{Element} element - DOM element where this binding is being attached</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *        The optional return value of the function is a name-to-value map of
 *        properties that should be set on the component
 *   </li>
 *   <li>{Function} 'update' - a function called when a managed attribute is updated.
 *        The function will receive the same parameters as the 'init' callback above.
 *        The optional return value of the function is a name-to-value map of
 *        properties that should be set on the component at the time when other
 *        accumulated changes are delivered
 *   </li>
 *   <li>{Function} 'afterCreate'- a callback invoked after component instance has been created.
 *        The function will receive the following parameters:
 *        <ul>
 *           <li>{string} name - attribute name</li>
 *           <li>{Element} element - DOM element associated with this binding</li>
 *           <li>{Function} widgetConstructor - constructor for the JQueryUI widget created
 *            by this binding. The constructor is already bound to the associated 
 *            JQuery element</li>
 *           <li>{Function} valueAccessor - a JavaScript function that you can call to 
 *           get a map of current binding attributes</li>
 *           <li>{Object} allBindings -  a JavaScript object that you can use to access all the model values bound 
 *           to this DOM element</li>
 *           <li>{Object} bindingContext -  an object that holds the binding context available to this element's bindings. 
 *           This object includes special properties including $parent, $parents, and $root that can be used to access
 *           data that is bound against ancestors of this context</li>
 *        </ul>
 *   </li>
 *   <li>{string} 'for' (optional) - a string representing component type or constructor 
 *        name restricting the applicability of these managed attributes
 *   </li>
 *   <li>{Array.<string>} 'use' (optional) - an string array of component types whose managed attribute behavior
 *       should be used for the component type specified with the 'for' attribute
 *   </li>
 * </ul>
 * @export
 */
oj.ComponentBinding.prototype.setupManagedAttributes = function(opts)
{
  var forName = opts['for'];
  forName = forName == null ? '@global' : forName;
  
  var managers = this._managedAttrOptions[forName] || [];
  
  managers.push(opts);
  
  this._managedAttrOptions[forName] = managers;
};



/**
 * Delivers all accumulated component changes across all instances of this binding.
 * Calling this method is optional - the changes will be delivered after a 1ms timeout
 * if this method is never invoked. However, you may call this method to speed up
 * component updates when the aplication code is done updating the view models.
 * @export
 */
oj.ComponentBinding.deliverChanges = function()
{
  oj.ComponentBinding._changeQueue.deliverChanges();
};

/**
 * @private
 */
oj.ComponentBinding.prototype.Init = function(names, options)
{
  oj.ComponentBinding.superclass.Init.call(this);
  
  if (typeof options === "string")
  {
    options = {'componentName': options};
  }
  
  this._bindingOptions = options || {};
  
  
  this._bindingNames = Array.isArray(names) ? names : [names];
  
  this['init'] = oj.Object.createCallback(this, this._init);
  this['update'] = oj.Object.createCallback(this, this._update);
  
  this._managedAttrOptions = {};
};



/**
 * @private
 */
oj.ComponentBinding._NEEDS_JUIB_INIT = "_ojNeedsJUIBInit";


/**
 * @private
 */
oj.ComponentBinding.prototype._init = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) 
{
  //Invoke child bindings first to allow on-the-fly generation of child content
  ko.applyBindingsToDescendants(bindingContext, element);
  
  // Store the flag on the DOM element indicating that this binding still needs to be initialized
  // We will delay initialiazation (including creation of the JQueryUI component until update()
  // because other bindings such as foreachcdelay their DOM manipulation until update(). 
  // We need the complete dom to support functions like buttonset() and menu() on containers
  
  $(element).data(oj.ComponentBinding._NEEDS_JUIB_INIT, true);
  
    
  return {'controlsDescendantBindings': true};
};


/**
 * @private
 */
oj.ComponentBinding.prototype._update = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
{
  var jelem = $(element);
  
  if (!jelem.data(oj.ComponentBinding._NEEDS_JUIB_INIT))
  {
    return;
  }
  
  jelem.data(oj.ComponentBinding._NEEDS_JUIB_INIT, null);
  
  
  this._initComponent(element, jelem, valueAccessor, allBindingsAccessor, bindingContext);
};


/**
 * @private
 */
oj.ComponentBinding.prototype._initComponent = function(element, jelem, valueAccessor, allBindingsAccessor, bindingContext)
{
  var options = valueAccessor();
  var roleAttrName = null;
  var disposed = false;
  var registeredListers = [];
  var tracker = null;
  var comp = null;
  
  var bindingMap = oj.ComponentBinding._getBindingValueMap(this._bindingNames, element, bindingContext);
  
 
  
  var stage = 0; // init
  
  var attributeEvaluatorCache = {};
  
  var componentName = this._bindingOptions['componentName'];
  
  if (componentName == null)
  {
    roleAttrName = 'component';    
      
    if (!bindingMap[roleAttrName])
    {
      // Try the deprecated 'role' attribute
      roleAttrName = 'role';
      
      if (!bindingMap[roleAttrName])
      {
        oj.Logger.error("component attribute is required for the ojComponent binding");
        return;
      }
    }
  
    var role = options[roleAttrName];
    
    if (role == null)
    {
      oj.Logger.error("non-null component attribute is required for the ojComponent binding");
      return;
    }
    
    
    // Use ko.computed to track changes to the 'component' attribute
    ko.computed(
        function()
        { 
          // evaluate full property expression to ensure that Knockout adds subscriptions to any computed observables that
          // may be in the chain
          oj.ComponentBinding._evaluatePropertyExpression(bindingMap[roleAttrName], roleAttrName, attributeEvaluatorCache, 
                                                          bindingContext, false);
          if (stage == 0)
          {
            componentName = ko.utils.unwrapObservable(role);
          }
          else
          {
            disposed = true;
            bindingMap = null;
            
            oj.ComponentBinding._unregisterWritebacks(jelem);
            
            if (comp)
            {
              // Clean up after a component type change
              tracker.dispose();
              tracker = null;
              
              var destroyCallback = this._bindingOptions['beforeDestroy'];
              if (destroyCallback)
              {
                destroyCallback(element, comp, valueAccessor, allBindingsAccessor, bindingContext);
              }
              
              comp("destroy");
              comp = null;
              
              var l;
              for (l=0; l<registeredListers.length; l++)
              {
                registeredListers[l].dispose();
              }
              registeredListers = null;
            }
            
            this._initComponent(element, jelem, valueAccessor, allBindingsAccessor, bindingContext);
          }
          return null;
        },
        this/* 'this' object for the 'read' function*/,
        {'disposeWhenNodeIsRemoved' : element});
  }
  
  if (componentName != null)
  {
    comp = jelem[componentName];
      
    if ((typeof comp) === "function")
    {
      comp = comp.bind(jelem);
      
      var managedAttrMap = oj.ComponentBinding._resolveManagedAttributes(this._managedAttrOptions, bindingMap, componentName);
      var specifiedManagedAttrs = {};
      
      // Always use managed attribute behavior from the default instance
      var defaultInstance = oj.ComponentBinding.getDefaultInstance();
      if (this !== defaultInstance)
      {
        var defaultManagedMap = defaultInstance._getManagedAttributes(bindingMap, componentName);
        // Override default managed attribute map with values from this binding's map.
        // Note that there is no need to clone defaultManagedMap because a new instance gets created
        // every time _getManagedAttributes() is called
        oj.CollectionUtils.copyInto(defaultManagedMap, managedAttrMap);
        managedAttrMap = defaultManagedMap;
      }
      
      var propertyMap = {};
      tracker = new ComponentChangeTracker(comp, element, oj.ComponentBinding._changeQueue);
      
      var writablePropMap = 
      {
        '^slider$' : [{'event': 'slidechange', 'getter': _extractValueFromChangeEvent}],
        '^oj*': [{'event': 'ojoptionchange', 'getter': _extractOptionChange}]
      };    
      
      var binding = this;
      
      var handler = function()
        {
          var prop = this._property;
          
          // evaluate full property expression to ensure that Knockout adds subscriptions to any computed observables that
          // may be in the chain
          var exp = bindingMap[prop];
          
          if (!exp)
          {
            throw "Binding expression for property " + prop + " is not found";
          }
          
         
          var currentVal = oj.ComponentBinding._evaluatePropertyExpression(exp, prop, attributeEvaluatorCache, 
                      bindingContext, stage !== 0 && !disposed);

          
          if (stage === 0) // init, no change
          {
            var val = options[prop];
            var value = oj.ComponentBinding._toJS(val);
          
            var managedPropEntry = managedAttrMap[prop];
            if (managedPropEntry != null)
            {
              specifiedManagedAttrs[prop] = managedPropEntry;
              var initFunc = managedPropEntry.init;
              if (initFunc != null)
              {
                var initProps = initFunc(prop, value, element, comp, valueAccessor, 
                                         allBindingsAccessor, bindingContext) || {};
                oj.CollectionUtils.copyInto(propertyMap, initProps);
              }
            }
            else
            {
              propertyMap[prop] = value;
            }
          }
          // this is a real change
          else if (!disposed)
          {
            var v = oj.ComponentBinding._toJS(currentVal);
            
            if (managedAttrMap[prop] != null)
            {
              var updateFunc = managedAttrMap[prop].update;
              if (updateFunc != null) 
              {
                var updateProps = updateFunc(prop, v, element, comp, valueAccessor, 
                                              allBindingsAccessor, bindingContext) || {};
                
                var updateKeys = Object.keys(updateProps);
                
                for (var k = 0; k<updateKeys.length; k++)            
                {
                  var p = updateKeys[k]; 
                  tracker.addChange(p, updateProps[p]);
                }
              }
            }
            else
            {
            
              tracker.addChange(prop, v);
            }
          }
          
          return null;
        };
      
      var p;
      var optionKeys = Object.keys(options);
      for (var k=0; k<optionKeys.length; k++)
      {
        p = optionKeys[k];
        if (p !== roleAttrName)
        {
          // ko.computed is used to set up dependency tracking for the bindings's attribute
          // Any observable evaulated during the initial invocation of the function is going to be treated as a dependency
          // by Knockout. Once that dependency changes, the fuction below will be called again, in which case we will know
          // to deliver the change
          registeredListers.push(
              ko.computed(handler, {_property: p}/* 'this' object for the 'read' function*/,
                  {'disposeWhenNodeIsRemoved' : element}));
        }
      }
      
      oj.ComponentBinding._registerWritebacks(jelem, componentName, writablePropMap, 
                                              bindingMap, tracker,
                                              bindingContext, attributeEvaluatorCache);
      
      var mutationOptions = oj.ComponentBinding._extractDotNotationOptions(propertyMap);
      
      comp(propertyMap);
      
      for (var mo in mutationOptions)
      {
        comp('option', mo, mutationOptions[mo]);
      }
      
      var createCallback = this._bindingOptions['afterCreate'];
      if (createCallback)
      {
        createCallback(element, comp, valueAccessor, allBindingsAccessor, bindingContext);
      }
      
      oj.ComponentBinding._deliverCreateToManagedProps(specifiedManagedAttrs, element, comp, valueAccessor, 
                                                       allBindingsAccessor, bindingContext);
      
      
      propertyMap = null;
    }
    else
    {
      oj.Logger.error("Component %s is not found", componentName);
    }
  }
  
  stage = 1; // after init
};

// Returns a map of the custom binding's properties. Each key is the property name,
// and each value is a string representation of the property expression
/**
 * @private
 */
oj.ComponentBinding._getBindingValueMap = function(names, elem, bindingContext) 
{
  var map = {},
      bindingValue = null,
      provider = ko.bindingProvider.instance,
      keyValueArray, stringTrimRegex, n, e,
      selfVal = null, i, keyValueEntry;

  if (provider.getBindingsString) 
  {
    bindingValue = provider.getBindingsString(elem, bindingContext);  
  }
  else
  {
    bindingValue = elem.getAttribute("data-bind");
  }
  
  if (!bindingValue) {
    return map;
  }
  
  keyValueArray = ko.jsonExpressionRewriting.parseObjectLiteral(bindingValue);
  
  stringTrimRegex = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
  
  for (i=0; i<keyValueArray.length; i=i+1) 
  {
    keyValueEntry = keyValueArray[i];
    
    var bindingKey = keyValueEntry['key'].replace(stringTrimRegex, '');
    
    if (names.indexOf(bindingKey) >= 0) 
    {
      selfVal = keyValueEntry['value'];
      break;
    }
  }
  
  if (!selfVal) {
    return map;
  }
  
  // now parse this binding's key/value pairs
  keyValueArray = ko.jsonExpressionRewriting.parseObjectLiteral(selfVal);
  
  
  for (n=0; n<keyValueArray.length; n=n+1) 
  {
    e = keyValueArray[n];
    map[e['key'].replace(stringTrimRegex, '')] = e['value'].replace(stringTrimRegex, '');  
  }
  
  return map;
};


// Evaluates an individual custom binding property expression
/**
 * @private
 */
oj.ComponentBinding._evaluatePropertyExpression = function(expOrCallback, key, cache, bindingContext, evalSimpleExpr) 
{
  var info = cache[key];
  
  var isNew = (info === undefined);
  
  if ( isNew || (info.evaluator === null && info.simple && evalSimpleExpr))
  {
    info = _createEvaluator(expOrCallback, evalSimpleExpr, isNew);
    
    cache[key] = info;
  }
  
  return (info.evaluator && (evalSimpleExpr || !info.simple)) ? info.evaluator(bindingContext) : null;
};

/**
 * @private
 */
function _createEvaluator(expOrCallback, evalSimpleExpr, isNew)
{
  if (typeof expOrCallback !== "string")
  {
    expOrCallback = expOrCallback();
  }
  
  var evaluator = null;
  var isSimple = false;
  
  if (expOrCallback !== null)
  {
    if (isNew)
    {
      var first = expOrCallback.charAt(0);
      
      // Check whether the expression is a string literal (starts with a quote) and whether it contains any function calls
      if (first === "'" || first === "\"" || expOrCallback.indexOf("(") <= 0)
      {
        isSimple = true;
      }
    }
    else // if we have already processed this expression, but the evaluator has not been created, the expression must be simple
    {
      isSimple = true;
    }

    // Performance fix: avoid expsive eval when we know that the expression is not referencing any observables or functions
    if (!isSimple || evalSimpleExpr)
    {
      /*jslint evil:true */
      evaluator = new Function("$context", "with($context){with($data||{}){return " + expOrCallback + ";}}");
    }
  }
  
  return {evaluator: evaluator, simple: isSimple};
};

/**
 * @private 
 */
function _extractValueFromChangeEvent(event, eventData) 
{
  var prop = 'value';
  var nameVal = {};
  nameVal[prop] = eventData[prop];
  return nameVal;
};

/**
 * @private 
 */
function _extractOptionChange(event, eventData)
{
  var nameVal = {};
  var metadata = eventData['optionMetadata'];
  var shouldWrite = metadata ? "shouldWrite" === metadata['writeback']: false;
  if (shouldWrite)
  {
    nameVal[eventData['option']] = eventData['value'];  
  }
  return nameVal;
};

/**
 * @private
 */
oj.ComponentBinding.prototype._getManagedAttributes = function(bindingMap, componentName)
{
  return oj.ComponentBinding._resolveManagedAttributes(this._managedAttrOptions, bindingMap, componentName);
}

/**
 * @private
 */
oj.ComponentBinding._resolveManagedAttributes = function(optionMap, bindingMap, componentName)
{
  var managedAttrMap = {};
  
  var applicableOptions = [];
  
  var attrs_field = 'attributes';
  
  var traverseOptions = function(name, followLinks)
  {
    var managers = optionMap[name];
    if (managers != null)
    {
      for (var n=managers.length-1; n>=0; n--)
      {
        var opt = managers[n];
        
        if (opt[attrs_field] != null)
        {
          applicableOptions.push(opt);
        }
        if (followLinks)
        {
          var parents = opt['use'];
          if (parents != null)
          {
            parents = Array.isArray(parents) ? parents : [parents];
            for (var i=0; i<parents.length; i++)
            {
              traverseOptions(parents[i], true);
            }
          }
        }
      }
    }
  };
  
  traverseOptions(componentName, true);
  
  // If this is a JET component, check managed options registered for the ancestors
  var ojNamespace = 'oj';
  var widgetClass = $[ojNamespace][componentName];
  
  if (widgetClass != null)
  {
    var proto = Object.getPrototypeOf(widgetClass.prototype);
    while (proto != null && ojNamespace === proto['namespace'])
    {
      traverseOptions(proto['widgetName'], true)
      proto = Object.getPrototypeOf(proto);
    }
  }
  
  traverseOptions('@global', false);
  
  if (applicableOptions.length > 0)
  {
    var attrs = Object.keys(bindingMap);
    
    for (var k=0; k<attrs.length; k++)
    {
      var attr = attrs[k];
   
      for (var l=0; l<applicableOptions.length; l++)
      {
        var opts  = applicableOptions[l];
        
        var attributes = opts[attrs_field];
        
        if (attributes.indexOf(attr) >= 0)
        {
          managedAttrMap[attr] = {init: opts['init'], update:opts['update'], 
                                  afterCreate:opts['afterCreate']};
          break;
        }
      }
    }
  }
  
  return managedAttrMap;
};

/**
 * @private
 */
oj.ComponentBinding._HANDLER_NAMESPACE = ".ojWriteback";

/**
 * @private
 */
oj.ComponentBinding._unregisterWritebacks = function(jelem)
{
  if (jelem)
  {
    jelem.off(oj.ComponentBinding._HANDLER_NAMESPACE);
  }
}

/**
 * @private
 */
oj.ComponentBinding._registerWritebacks = function(jelem, componentName, writablePropMap, 
                                                   bindingMap, tracker,
                                                   bindingContext,
                                                   attributeEvaluatorCache)
{
  var cachedPropertyExpressionWriters = {};
  
  for (var pattern in writablePropMap)
  {
    if (componentName.match(pattern))
    {
      var eventInfos = writablePropMap[pattern];
      for (var i=0; i<eventInfos.length; i++)
      {
        var info = eventInfos[i];
        
        jelem.on(
          info['event'] + oj.ComponentBinding._HANDLER_NAMESPACE,
          { //JQuery will pass this object as event.data
            getter: info['getter']
          },
          function(evt, data)
          {
            // Prevent bubbling to parent DOM elements. Other event handlers will still be called
            evt.stopPropagation();
            
            var nameValues = evt.data.getter(evt, data);
            
            tracker.suspend();
            
            try
            {
              for (var name in nameValues)
              {
                var expr = bindingMap[name];
                
                if (expr)
                {
                  var target = oj.ComponentBinding._evaluatePropertyExpression(bindingMap[name], name, attributeEvaluatorCache, 
                                                            bindingContext, true);
                  
                  oj.ComponentBinding._writeValueToProperty(name, 
                                                            target, 
                                                            nameValues[name],
                                                            bindingMap[name],
                                                            bindingContext,
                                                            cachedPropertyExpressionWriters);
                }
              }
            }
            finally
            {
              tracker.resume();
            }
          }
        );
      }
      
      break;  
    }
  }
      
};

/**
 * @private
 */
oj.ComponentBinding._getPropertyWriterExpression = function(expression)
{ 
  var reserveddWords = ["true", "false", "null", "undefined"];
  
  if (expression == null || reserveddWords.indexOf(expression) >= 0)
  {
    return null;
  }

  // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
  // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
  // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
  var assignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

  var match = expression.match(assignmentTarget);
  
  if (match === null)
  {
    return null;
  }
  
  var target = match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
  
  return 'function(v){' + target + '=v;}';
};

/**
 * @private
 */
oj.ComponentBinding._writeValueToProperty = function(name, property, value,
                                                     propertyExpression,
                                                     bindingContext, 
                                                     cachedPropertyExpressionWriters)
{  
  if (property == null || !ko.isObservable(property))
  {    
    var func = oj.ComponentBinding._evaluatePropertyExpression(
      function()
      {
        return oj.ComponentBinding._getPropertyWriterExpression(propertyExpression);
      },
      name, 
      cachedPropertyExpressionWriters, 
      bindingContext,
      true);
    
    if (func)
    {
      func(value);
    }
  
  }
  else if (ko.isWriteableObservable(property))
  {
    property(value);
  }
};


/**
 * @private
 */
oj.ComponentBinding._toJS = function(prop) 
{
  // ko.toJS creates a cloned object for both plain javascript objects and Object subclasses. We need to avoid it
  // for the latter case to ensure that complex Model objects can be used as binding properties without being cloned
  
  prop = ko.utils.unwrapObservable(prop);
  
  if ((Array.isArray(prop) || oj.CollectionUtils.isPlainObject(prop)) && prop['ojConvertToJS'])
  {
    prop = ko.toJS(prop);
  }

  return prop;
};

/**
 * @private
 */
oj.ComponentBinding._extractDotNotationOptions = function(options)
{
  var mutationOptions = {};
  
  for (var opt in options)
  {
    if (opt.indexOf('.') >= 0)
    {
      mutationOptions[opt] = options[opt];
    }
  }
  
  for (var mo in mutationOptions)
  {
    delete options[mo];
  }
  
  return mutationOptions;
};

/**
 * @private
 */
oj.ComponentBinding._deliverCreateToManagedProps = function(managedAttrMap, element, comp, 
                                                                  valueAccessor, allBindingsAccessor, bindingContext)
{
  var props = Object.keys(managedAttrMap);
  for (var i=0; i<props.length; i++)
  {
    var prop = props[i];
    var entry = managedAttrMap[prop];
    var callback = entry.afterCreate;
    
    if (callback)
    {
      callback(prop, element, comp, valueAccessor, allBindingsAccessor, bindingContext);
    }
  }
  
};


/**
 * @private
 * @constructor
 * Global Change Queue Implementation
 * The queue is used to delay component updates until all model changes have been propagated
 * This is a private class that does not need to be xported
 */
function GlobalChangeQueue()
{
  this.Init();
}

// Subclass from oj.Object 
oj.Object.createSubclass(GlobalChangeQueue, oj.Object, "ComponentBinding.GlobalChangeQueue");

GlobalChangeQueue.prototype.Init = function()
{
  GlobalChangeQueue.superclass.Init.call(this);
  this._trackers = [];
  this._queue = [];
};

GlobalChangeQueue.prototype.registerComponentChanges = function(tracker)
{
  if (this._trackers.indexOf(tracker) === -1)
  {
    this._trackers.push(tracker);
    if (!this._delayTimer)
    {
      this._delayTimer = setTimeout(oj.Object.createCallback(this, this._deliverChangesImpl), 1);
    }
  }
};

GlobalChangeQueue.prototype.removeComponentChanges = function(tracker)
{
  var index = this._trackers.indexOf(tracker);
  if (index >= 0)
  {
    this._trackers.splice(index, 1);
  }
};

GlobalChangeQueue.prototype.deliverChanges = function()
{
  if (this._delayTimer)
  {
    clearTimeout(this._delayTimer);
  }
  this._deliverChangesImpl();
};

GlobalChangeQueue.prototype._deliverChangesImpl = function()
{
  var i;
  this._delayTimer = null;
  var trackers = this._trackers;
  this._trackers = [];
  
 
  for (i=0; i<trackers.length; i++)
  {
    var tracker = trackers[i];
    this._queue.push({tracker: tracker, changes: tracker.flushChanges()});
  }
  
  while (this._queue.length > 0)
  {
    var record = this._queue.shift();
    record.tracker.applyChanges(record.changes);
  }
};

/**
 * @private
 * @constructor
 * Keeps track of changes for a single component
 */
function ComponentChangeTracker(component, element, queue)
{
  this.Init(component, element, queue);
}

// Subclass from oj.Object 
oj.Object.createSubclass(ComponentChangeTracker, oj.Object, "ComponentBinding.ComponentChangeTracker");

/**
 * @param {Function} component
 * @param {Element} element
 * @param {Object} queue
 */
ComponentChangeTracker.prototype.Init = function(component, element, queue)
{
  ComponentChangeTracker.superclass.Init.call(this);
  this._component = component;
  this._element = element;
  this._queue = queue;
  this._changes = {};
  this._suspendCount = 0;
};


ComponentChangeTracker.prototype.addChange = function(property, value)
{
  if (this._isSuspended() || this._disposed)
  {
    return;
  }
  this._changes[property] = value;
  this._queue.registerComponentChanges(this);
};

ComponentChangeTracker.prototype.dispose = function()
{
  this._queue.removeComponentChanges(this);
  this._disposed = true;
};

ComponentChangeTracker.prototype.resume = function()
{
  oj.Assert.assert(this._suspendCount > 0, "ComponentChangeTracker._suspendCount underflow");
  this._suspendCount -= 1;
};

ComponentChangeTracker.prototype.suspend = function()
{
  this._suspendCount += 1;
};

ComponentChangeTracker.prototype.applyChanges = function(changes)
{
  // Check if the component is still "alive"
  if (oj.Components.getWidgetConstructor(this._element) != null)
  {
    
    var mutationOptions = oj.ComponentBinding._extractDotNotationOptions(changes);
    
    var flags = {'changed' : true}; // indicates that the callee does not need to diff the value
    
    this._component("option", changes, flags); 
    for (var mo in mutationOptions)
    {
      this._component("option", mo, mutationOptions[mo], flags);
    }
  }
};

ComponentChangeTracker.prototype.flushChanges = function()
{
  var changes = this._changes;
  this._changes = {};
  return changes;
};


ComponentChangeTracker.prototype._isSuspended = function()
{
  return (this._suspendCount >= 1);
};



/**
 * @private
 */
oj.ComponentBinding._changeQueue = new GlobalChangeQueue();

/**
 * @private
 */
oj.ComponentBinding._INSTANCE = oj.ComponentBinding.create(["ojComponent", "jqueryUI"]);

//
// Define a template source that allows the use of a knockout array (ko[])
// to provide storage for a template string.
//
// This simplifies template assignment and template usage for the user, as shown in the following example:
//
// Template Assignment:
//
//   ko.templates["myKey"] = templateText;
//
// Template Usage:
//
//   <div data-bind="template: {name: myKey}">
//
/*jslint browser: true*/

/**
 * @export
 */
oj.koStringTemplateEngine = {};

/**
 * @export
 */
oj.koStringTemplateEngine.install = function() 
{
    //define a template source that tries to key into an object first to find a template string

    var _templateText = {}; // Stores the text property for the template object.
    var _templateData = {}; // Stores the data property for the template object.

    // data = {},
    var _engine = new ko['nativeTemplateEngine']();

    /**
     *  @constructor
     *  @private
     */

    var StringTemplate = function(template) {

        this._templateName = template;

        this.text = function(value) 
	{
	    // When passed no parameters, return the template object.
            if (!value)
	    {
                return _templateText[this._templateName];
            }

            _templateText[this._templateName] = value;
        };

        this.data = function(key, value)
	{

            if (!_templateData[this._templateName]) {
		_templateData[this._templateName] = {};
            }

            if (arguments.length === 1) {
                return _templateData[this._templateName][key];
            }

            _templateData[this._templateName][key] = value;
        };
    };

    //
    // Override knockout's makeTemplateSource(), returning the new stringTemplate 
    //
    _engine['makeTemplateSource'] = function(template, templateDocument)
    {
	if (typeof template == "string") 
	{
            templateDocument = templateDocument || document;
            var elem = templateDocument.getElementById(template);

            if (elem) 
	    {
		return new ko['templateSources']['domElement'](elem);
	    }
            return new StringTemplate(template);
	}
        if ((template && (template.nodeType == 1)) || (template.nodeType == 8)) 
	{
            return new ko['templateSources']['anonymousTemplate'](template);
        }
    };

    //make the templates accessible
    // ko.templates = _templateText;
    ko.templates = _templateText;

    //make this new template engine our default engine
    ko['setTemplateEngine'](_engine);
};


/**
 * Returns a header renderer function executes the template specified in the binding attribute.
 * (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getDataGridHeaderRenderer(bindingContext, template)
{
    return function(context)
    {
        var parent, childContext;

        parent = context['parentElement'];
        // runs the template
        // runs the template
        childContext = bindingContext['createChildContext'](context['data'], null, 
                           function(binding)
                           {
                               binding['$key'] = context['key'];
                               binding['$metadata'] = context['metadata'];
                               binding['$headerContext'] = context;
                           }
                       );
        ko['renderTemplate'](template, childContext, null, parent);

        // tell the datagrid not to do anything
        return null;
    };
}

/**
 * Returns a cell renderer function executes the template specified in the binding attribute.
 * (for example, a knockout template).
 * @param {Object} bindingContext the ko binding context
 * @param {string} template the name of the template
 * @return {Function} the renderer function
 * @private
 */
function _getDataGridCellRenderer(bindingContext, template)
{
    return function(context)
    {
        var parent, childContext;

        parent = context['parentElement'];
        // runs the template
        childContext = bindingContext['createChildContext'](context['data'], null, 
                           function(binding)
                           {
                               binding['$keys'] = context['keys'];
                               binding['$metadata'] = context['metadata'];
                               binding['$cellContext'] = context;
                           }
                       );
        ko['renderTemplate'](template, childContext, null, parent);

        // tell the datagrid not to do anything
        return null;
    };
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'attributes': ["header", "cell"],
  'init': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    var row, rowTemplate, column, columnTemplate, cellTemplate;
    if (name === "header")
    {
        // find row template and creates a renderer
        row = value['row'];
        if (row != null)
        {
            rowTemplate = row['template'];
            if (rowTemplate != null)
            {
                row['renderer'] = _getDataGridHeaderRenderer(bindingContext, rowTemplate);
            }
        }

        // find column template and creates a renderer
        column = value['column'];
        if (column != null)
        {
            columnTemplate = column['template'];
            if (columnTemplate != null)
            {
                column['renderer'] = _getDataGridHeaderRenderer(bindingContext, columnTemplate);
            }
        }

        widgetConstructor({'header': value});
    }
    else if (name === "cell")
    {
        // find the cell template and creates a renderer
        cellTemplate = value['template'];
        if (cellTemplate != null)
        {
            value['renderer'] = _getDataGridCellRenderer(bindingContext, cellTemplate);
        }
        widgetConstructor({'cell': value});
    }
  },
  'update': function(name, value, element, widgetConstructor, valueAccessor, allBindingsAccessor, bindingContext)
  {
    var row, rowTemplate, column, columnTemplate, cellTemplate;
    if (name === "header")
    {
        // find row template and creates a renderer
        row = value['row'];
        if (row != null)
        {
            rowTemplate = row['template'];
            if (rowTemplate != null)
            {
                row['renderer'] = _getDataGridHeaderRenderer(bindingContext, rowTemplate);
            }
        }

        // find column template and creates a renderer
        column = value['column'];
        if (column != null)
        {
            columnTemplate = column['template'];
            if (columnTemplate != null)
            {
                column['renderer'] = _getDataGridHeaderRenderer(bindingContext, columnTemplate);
            }
        }

        return {'header': value};
    }
    else if (name === "cell")
    {
        // find the cell template and creates a renderer
        cellTemplate = value['template'];
        if (cellTemplate != null)
        {
            value['renderer'] = _getDataGridCellRenderer(bindingContext, cellTemplate);
        }
        return {'cell': value};
    }
    return null;
  },
      
  'for': 'ojDataGrid'
});

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true, devel: true*/

// TODO: do we have JSDoc / API doc for bindings?  (Latest answer: no for now, just doc it briefly in baseComponent's contextMenu option for now.)
// TODO: split up init and update so get from DOM on init only, and update only sets it on DOM.  That way, 
//       can update observable to null, without having to additionally clear DOM attr to avoid having it restored from DOM attr.
//       Vet with Max first.
// TODO: keep binding and DOM in synch, a la disabled option in JQUI, similar to todo for contextMenu feature on JET base class.
// TODO: share code with baseComponent._setupContextMenu?  Should this have any of the configurability of that method?
//       where would shared code live?
ko.bindingHandlers['ojContextMenu'] = 
{
  'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) 
  {
    var eventNamespace = ".ojContextMenu";
    $(element).off( eventNamespace );

    var menu = ko.utils.unwrapObservable(valueAccessor());
    // menu is selector like "#myMenuId", or null, or some malformed thing.

    if ($.type(menu) !== "string")
    {
      menu = element.getAttribute("contextmenu");
      if (menu)
        menu = "#" + menu;
    }

    if (menu) 
      menu = $(menu).data( "oj-ojMenu" );// if selector finds >1 element, .data() uses the first one.
                                         // if selector finds 0 elements, .data() returns nothing.
    
    if ( menu )
    {
      var $element = $(element);
      $element.on( "keydown" + eventNamespace + " " + "contextmenu" + eventNamespace, function( event ) {
        if (event.type === "contextmenu" || (event.which == 121 && event.shiftKey)) // right-click or Shift-F10
        {
          menu.open(event, {"launcher": $element, "initialFocus": "menu"});
          return false; // Don't show native context menu
        }

        return true;
      });
    }
        
//  if (!menu)
      // TODO: Max suggested logging a warning if menu is null.  Since setting null is the way you would turn off the ContextMenu functionality, 
      // should we really log?  If so, warning or just info?
  }
};



/*jslint browser: true, devel: true*/

/** 
 * @private
 * @const
 */
var _COLUMNS_ATTR = 'columns';

/** 
 * @private
 * @const
 */
var _COLUMNS_DEFAULT_ATTR = 'columnsDefault';

/** 
 * The row template will be used to render the row elements. 
 * The row, status, and component objects will be available 
 * in the template context.
 * @private
 * @const
 */
var _ROW_TEMPLATE_ATTR = 'rowTemplate';

/**
 * Create and return a renderer which the component will call. That renderer
 * will render the template.
 * @param {Object} bindingContext  Binding Context
 * @param {string} type  'cell' or 'header' or 'row'
 * @param {string} template  template name
 * @return {Object} Renderer
 * @private
 */
function _getTableColumnTemplateRenderer(bindingContext, type, template)
{
  var rendererOption = {};
  (function(template, type) {
    rendererOption = function(params) {
      var childContext = null;
      var parentElement = null;
      if (type == 'header')
      {
        // calling bindingContext.extend() creates a context with 
        // new properties without adding extra level to the parent hierarchy
        childContext = bindingContext['extend']({'$column': params['column'],
          '$headerContext': params['headerContext']});
        parentElement = params['headerContext']['parentElement'];
      }
      else if (type == 'cell')
      {
        var childData = params['row'];
        childContext = bindingContext['createChildContext'](childData, null,
          function(binding)
          {
            binding['$column'] = params['column'];
            binding['$cellContext'] = params['cellContext'];
          }
        );
        parentElement = params['cellContext']['parentElement'];
      }
      if (type == 'footer')
      {
        // calling bindingContext.extend() creates a context with 
        // new properties without adding extra level to the parent hierarchy
        childContext = bindingContext['extend']({'$column': params['column'],
          '$footerContext': params['footerContext']});
        parentElement = params['footerContext']['parentElement'];
      }
      ko['renderTemplate'](template, childContext, null, parentElement, 'replaceNode');
    };
  }(template, type));

  return rendererOption;
}

/**
 * Create and return a renderer which the component will call. That renderer
 * will render the template.
 * @param {string} template  template name
 * @return {Object} Renderer
 * @private
 */
function _getTableRowTemplateRenderer(bindingContext, template)
{
  return function(params) {
    var childData = params['row'];
    var childContext = bindingContext['createChildContext'](childData, null,
      function(binding)
      {
        binding['$rowContext'] = params['rowContext'];
      }
    );
    ko['renderTemplate'](template, childContext, null, params['rowContext']['parentElement'], 'replaceNode');
  };
}

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
  {
    'attributes': [_COLUMNS_ATTR, _COLUMNS_DEFAULT_ATTR, _ROW_TEMPLATE_ATTR],
    'init': function(name, value, element, widgetConstructor, valueAccessor,
      allBindingsAccessor, bindingContext)
    {
      if (name == _COLUMNS_ATTR || name == _COLUMNS_DEFAULT_ATTR)
      {
        var i, template, footerTemplate, headerTemplate;
        for (i = 0; i < value.length; i++)
        {
          var column = value[i];
          template = column['template'];
          footerTemplate = column['footerTemplate'];
          headerTemplate = column['headerTemplate'];

          if (template != null)
          {
            column['renderer'] = _getTableColumnTemplateRenderer(bindingContext, 'cell', template);
          }
          if (footerTemplate != null)
          {
            column['footerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'footer', footerTemplate);
          }
          if (headerTemplate != null)
          {
            column['headerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'header', headerTemplate);
          }
        }
        if (name == _COLUMNS_ATTR)
        {
          widgetConstructor({'columns': value});
        }
        else
        {
          widgetConstructor({'columnsDefault': value});
        }
      }
      else if (name == _ROW_TEMPLATE_ATTR)
      {
        widgetConstructor({'rowRenderer': _getTableRowTemplateRenderer(bindingContext, value)});
      }
    },
    'update': function(name, value, element, widgetConstructor, valueAccessor,
      allBindingsAccessor, bindingContext)
    {
      if (name == _COLUMNS_ATTR || name == _COLUMNS_DEFAULT_ATTR)
      {
        var i, template, footerTemplate, headerTemplate;
        for (i = 0; i < value.length; i++)
        {
          var column = value[i];
          template = column['template'];
          footerTemplate = column['footerTemplate'];
          headerTemplate = column['headerTemplate'];

          if (template != null)
          {
            column['renderer'] = _getTableColumnTemplateRenderer(bindingContext, 'cell', template);
          }
          if (footerTemplate != null)
          {
            column['footerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'footer', footerTemplate);
          }
          if (headerTemplate != null)
          {
            column['headerRenderer'] = _getTableColumnTemplateRenderer(bindingContext, 'header', headerTemplate);
          }
        }
        if (name == _COLUMNS_ATTR)
        {
          widgetConstructor({'columns': value});
        }
        else
        {
          widgetConstructor({'columnsDefault': value});
        }
      }
      else if (name == _ROW_TEMPLATE_ATTR)
      {
        return {'rowRenderer': _getTableRowTemplateRenderer(bindingContext, value)};
      }
      return null;
    },
    'for': 'ojTable'
  });

var _DAY_META_DATA = "dayMetaData";

function getMetaData(dayMetaData, position, params) {
  if(!dayMetaData || position === params.length) {
    return dayMetaData;
  }
  
  var nextPos = position + 1;
  return getMetaData(dayMetaData[params[position]], nextPos, params) || getMetaData(dayMetaData["*"], nextPos, params);
};

var _processDayMetaData = function(name, value, element, widgetConstructor, valueAccessor,
                                    allBindingsAccessor, bindingContext) 
{
  if (name === _DAY_META_DATA)
  {
    //as discussed within the API meeting it will set to dayFormatter
    
    widgetConstructor({'dayFormatter': !value ? null : function(dateInfo) {
      return getMetaData(value, 0, [dateInfo["fullYear"], dateInfo["month"], dateInfo["date"]]);
    }});
  }
};

/**
 * ojValue Behavior Definition and Injection
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojDayMetaData',
  
  'attributes': [_DAY_META_DATA],
               
  'init': _processDayMetaData,
  'update': _processDayMetaData
});

/**
 * Default declaration for ojInputDateTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDateTime',
  'use': 'ojDayMetaData'
});

/**
 * Default declaration for ojInputDate
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDate',
  'use': 'ojDayMetaData'
});

/**
 * Default declaration for ojInputTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputTime',
  'use': 'ojDayMetaData'
});
});
