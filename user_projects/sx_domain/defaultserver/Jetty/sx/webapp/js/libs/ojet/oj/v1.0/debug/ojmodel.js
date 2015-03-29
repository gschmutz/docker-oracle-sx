"use strict";

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
define(['ojs/ojcore', 'jquery', 'promise'], function(oj, $)
{
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*jslint browser: true*/
/**
 * @constructor
 * @class oj.Events
 * @classdesc Supports event system for the common model (oj.Collection and oj.Model)
 */
oj.Events = window['oj']['Events'] =
/** @lends oj.Events */
{        
    /**
     * Add an event handler for an event type to the model or collection object.
     * @param {String|Object} eventType Types of event handlers to add (may be a single event type, a space-delimited set of event types, or an object mapping events to callbacks). 
     * @param {function(String, Object)} callback User's event handler callback function (called with the eventType and model or collection object as parameters--the context will be the model or collection unless specified by context, below). 
     * @param {Object=} context A context for the event 
     */
    'on': function (eventType, callback, context) {
            return this.OnInternal(eventType, callback, context, false, false);
        },

    /**
     * Remove an event handler for an event type from the model or collection object.
     * @param {String|Object=} eventType Types of event handlers to remove (may be a single event type, a space-delimited set of event types, or a map of events to callbacks). If omitted, remove all event handlers. 
     * @param {function(String, Object)=} callback If provided, remove handlers only for eventType events with the given callback function. 
     * @param {Object=} context If provided, remove handlers only for eventType events with the given callback function and context object. 
     */
    'off': function(eventType, callback, context) {
             return this._offInternal(eventType, callback, context, false);
        },
    
    /**
     * Fire the given event type(s) for all registered handlers.
     * @param {String} eventType Types of event handlers to fire (may be a single event type or a space-delimited set of event types). 
     */        
    'trigger': function(eventType) {
                 var args = Array.prototype.slice.call(arguments);
                 // Inject a silent setting in there: if this is being called outside we want to fire all relevant events
                 args.unshift(false);
                 return oj.Events.TriggerInternal.apply(this, args);
             },
            
    /**
     * Add an event handler for an event type to the model or collection object, but only fire it once, then remove it from the list of handlers.
     * @param {String} eventType Types of event handlers to add (may be a single event type or a space-delimited set of event types). 
     * @param {function(String, Object)} callback User's event handler callback function (called with the eventType and model or collection object as parameters--the context will be the model or collection unless specified by context, below). 
     * @param {Object=} context A context for the event
     */
    'once': function(eventType, callback, context) {
                return this._onceInternal(eventType, callback, context, false);
            },
               
    /**
     * Add an event handler for an event type to a second model or collection object ("otherObj"), but track it on the called object.
     * @param {Object} otherObj Model or collection object on which to add this event handler. 
     * @param {String} eventType Types of event handlers to add (may be a single event type or a space-delimited set of event types). 
     * @param {function(String, Object)} callback User's event handler callback function (called with the eventType and model or collection object as parameters--the context will be the model or collection unless specified by context, below). 
     */
    'listenTo': function(otherObj, eventType, callback) {
                var eventArray, e, event, attr, eventString, listenerObj, index, prop, eventMap = {};

                if (eventType.constructor === String) {
                    // Create a map out of it
                    eventMap[eventType] = callback;
                }
                else {
                    eventMap = eventType;
                }
        
                for (prop in eventMap) {
                    if (eventMap.hasOwnProperty(prop)) {
                        eventArray = oj.Events._getEvents(prop);
                        for (e = 0; e < eventArray.length; e=e+1) {
                            event = eventArray[e].event;
                            attr = eventArray[e].attribute;
                            listenerObj = {event: event, attribute: attr, object: otherObj, callback: eventMap[prop]};
                            index = this._checkForHandler(this.listeningList, listenerObj, oj.Events._listenersIdentical);
                            eventString = attr ? event + ":" + attr : event;    
                            if (this.listeningList === undefined) {
                                this.listeningList = [];
                            }
//                            if (index === -1) {
                                this.listeningList.push(listenerObj);    
/*                           }
                            else {
                                // Replace it
                                this.listeningList[index] = listenerObj;
                                otherObj.off(eventString);
                            }*/
                            // fire
                            otherObj.OnInternal(eventString, eventMap[prop], null, true, false);
                        }
                    }
                }
                return this;
            },

    /**
     * Add an event handler for an event type to a second model or collection object ("otherObj"), but track it on the called object.  Only fire once.
     * @param {Object} otherObj Model or collection object on which to add this event handler. 
     * @param {String} eventType Types of event handlers to add (may be a single event type or a space-delimited set of event types). 
     * @param {function(String, Object)} callback User's event handler callback function (called with the eventType and model or collection object as parameters--the context will be the model or collection unless specified by context, below). 
     */
    'listenToOnce': function(otherObj, eventType, callback) {
                var eventArray, e, event, attr, eventString, listenerObj, index, prop, eventMap = {};

                if (eventType.constructor === String) {
                    // Create a map out of it
                    eventMap[eventType] = callback;
                }
                else {
                    eventMap = eventType;
                }
        
                for (prop in eventMap) {
                    if (eventMap.hasOwnProperty(prop)) {
                        eventArray = oj.Events._getEvents(prop);
                        for (e = 0; e < eventArray.length; e=e+1) {
                            event = eventArray[e].event;
                            attr = eventArray[e].attribute;
                            listenerObj = {event: event, attribute: attr, object: otherObj, callback: eventMap[prop]};
                            index = this._checkForHandler(this.listeningList, listenerObj, oj.Events._listenersIdentical);
                            eventString = attr ? event + ":" + attr : event;    
                            if (this.listeningList === undefined) {
                                this.listeningList = [];
                            }
//                            if (index === -1) {
                                this.listeningList.push(listenerObj);    
/*                            }
                            else {
                                // Replace it
                                this.listeningList[index] = listenerObj;
                                otherObj.off(eventString);
                            }*/
                            // fire
                            otherObj._onceInternal(eventString, eventMap[prop], null, true);
                        }
                    }
                }
                return this;
            },
            
    /**
     * Remove event handlers from a model or collection object. If the arguments are omitted, removes all event handlers from the model or collection.
     * @param {Object=} otherObj If specified, remove event handlers that target otherObj from this model or collection. 
     * @param {String=} eventType If specified, remove the event handlers for the given event types from this model or collection 
     * @param {function(String, Object)=} callback If specified, remove event handlers that call the given user callback function from this model or collection 
     */
    'stopListening': function(otherObj, eventType, callback) {
                        var eventArray, actualType, eventMap = {}, e, oneEvent, oneAttr, event, objEqual,
                                eventEqual, callbackEqual, attrEqual, i, prop, len, cb;
                        
                        if (arguments == null || arguments.length == 0) {
                            len = this.listeningList ? this.listeningList.length : 0;
                            // Remove everything
                            for (i = 0; i < len; i++) {
                                cb = this.listeningList[i].object._offInternal;
                                cb.apply(this.listeningList[i].object, [this.listeningList[i].event, this.listeningList[i].callback, this.listeningList[i].context, true]);
                            }
                            this.listeningList = [];
                            return this;
                        }

                        actualType = eventType;
                        // Account for missing otherObj
                        if (otherObj && otherObj.constructor === String) {
                            actualType = otherObj;
                        }
                        
                        if (actualType.constructor === String) {
                            // Create a map out of it
                            eventMap[actualType] = callback;
                        }
                        else {
                            eventMap = actualType;
                        }
        
                        for (prop in eventMap) {
                            if (eventMap.hasOwnProperty(prop)) {
                                eventArray = oj.Events._getEvents(prop);
                                for (e = 0; e < eventArray.length; e=e+1) {
                                    oneEvent = eventArray[e].event;
                                    oneAttr = eventArray[e].attribute;
                                    len = this.listeningList ? this.listeningList.length : 0;
                                    for (i = len-1; i >= 0; i=i-1) {
                                        event = this.listeningList[i];
                                        objEqual = otherObj ? otherObj === event.object : true;
                                        eventEqual = oneEvent ? oneEvent === event.event : true;
                                        callbackEqual = callback ? eventMap[prop] === event.callback : true;
                                        attrEqual = oneAttr ? oneAttr === event.attribute : true;
                                        if (objEqual && eventEqual && callbackEqual && attrEqual) {
                                            cb = this.listeningList[i].object._offInternal;
                                            cb.apply(this.listeningList[i].object, [this.listeningList[i].event, this.listeningList[i].callback, this.listeningList[i].context, true]);
                                            this.listeningList.splice(i, 1);
                                        }
                                    }                        
                                }
                            }        
                        }
                    return this;
                }
};

// Aliases for backward compatibility
oj.Events['bind'] =  oj.Events['on'];
oj.Events['unbind'] = oj.Events['off'];

/**
 * @export
 * Event types
 * @enum {string}
 */
  oj.Events.EventType = {
        /** Triggered when a model is added to a collection<p> 
         *  The event passes these arguments to the handler: <p>
         *  model - the model being added to the collection<p>
         *  collection - the collection to which the model has been added<p>
         *  options - any options passed in to the add call that triggered the event
         */
        'ADD' : "add",
        /** Triggered when a model is removed from a collection<p>
         *  The event passes these arguments to the handler: <p>
         * model - the model being removed from the collection<p>
         * collection - the collection from which the model was removed<p>
         * options - index: the index of the model being removed
         */
        'REMOVE' : "remove",
        /** Triggered when a collection is reset (see oj.Collection.reset)<p>
         *  The event passes these arguments to the handler: <p>
         *  collection - the collection being reset<p>
         *  options - any options passed in to the reset call
         */
        'RESET' : "reset",
        /** Triggered when a collection is refreshed (see oj.Collection.refresh)<p>
         *  The event passes these arguments to the handler: <p>
         *  collection - the collection being refreshed<p>
         *  options - any options passed in to the refresh call
         */
        'REFRESH' : "refresh",
        /** Triggered when a collection is sorted.  If the second argument to the callback is set (options) and 'add' is true, it means this sort event was triggered as a result of an add <p>
         *  The event passes these arguments to the handler:<p>
         *  collection - the collection being sorted<p>
         *  options - add: true if this sort event was triggered as the result of an add call, undefined or false if not
         */
        'SORT' : "sort",
        /** Triggered when a model's attributes are changed.  This can be the result of a clear call on a model; a property set call on a model; an unset call on a model; or the changing of properties due to the merging of models (in an add, for example) <p>
         * The event passes these arguments to the handler:<p>
         * model - the model on which the change occurred<p>
         * value - for property-specific change events, the new value of the property being changed<p>
         * options - any options passed in to the call that triggered the change event.  This is the second argument passed for overall change events, and the third parameter (after value) for property-specific change events.
         */
        'CHANGE' : "change",
        /** Triggered when a model is deleted from the data service (and thus from its Collection), due to a model destroy call<p>
         * The event passes these arguments to the handler:<p>
         * model - the model being deleted<p>
         * collection - the deleted model's collection, if any <p>
         */
        'DESTROY' : "destroy",
        /** Triggered by a collection during a remove call once all models passed in have been removed and destroyed<p>
         * The event passes these arguments to the handler:<p>
         * collection - the collection from which the models have been removed<p>
         * models - the array of models that have been removed <p>
         * options - any options passed in to the remove call
         */
        'ALLREMOVED': "allremoved",
        /** Triggered when a model or collection has sent a request to the data service <p>
         *  The event passes these arguments to the handler:<p>
         *  collection or model - the collection or model triggering the request<p>
         *  xhr - the xhr argument for the request<p>
         *  options - any options passed as part of the request<p>
         */
        'REQUEST' : "request",
        /** Triggered when a model or collection has been updated from the data service<p>
         *  The event passes these arguments to the handler:<p>
         *  collection or model - the collection or model that triggered the update<p>
         *  response - the response object from the data service<p>
         *  options - any options passed in to the call that triggered the update
         */
        'SYNC' : "sync",
        /** Triggered when a model has failed to update on the data service<p>
         *  The event passes these arguments to the handler:<p>
         *  collection or model - the collection or model that made the call that resulted in the error<p>
         *  xhr - the xhr argument for the failing request, if any<p>
         *  options - any options passed in to the call that triggered the failing request
         */
        'ERROR' : "error",
        /** Triggered when a model being saved or created or a model's property being set has been invalidated <p>
         * The event passes these arguments to the handler:<p>
         * model - the model on which the save or property set is invalid <p>
         * validationError - the model's validationError property<p>
         * options - any options passed in to the call that triggered the invalid event
         */
        'INVALID' : "invalid",
        /** Triggered for any of the above events <p>
         * The event passes the name of the actual event and then any arguments normally passed to that event following the name
         */
        'ALL' : "all"
    };
            

/**
 * @private
 * @param {Object} myClass
 * @param {Object=} source
 */
oj.Events.Mixin = function(myClass, source) {
    var methodName, obj = source || this;
    for (methodName in obj ) {
        if (typeof obj[methodName] === 'function' /*&& !Object.hasOwnProperty(myClass.prototype, methodName)*/ ) {
            myClass[methodName] = obj[methodName];
        }
    }
    // Make sure actual vars are own copies
    myClass.eventHandlers = {};
    myClass.listeningList = [];
};

oj.Events._onceInternal = function(eventType, callback, context, listenTo) {
    var eventArray, e, event, attr, eventMap, prop;
    
    eventMap = this._getEventMap(eventType, callback, context);

    for (prop in eventMap) {
        if (eventMap.hasOwnProperty(prop)) {
            eventArray = this._getEvents(prop);
    
            for (e = 0; e < eventArray.length; e=e+1) {
               event = eventArray[e].event;
               attr = eventArray[e].attribute;
               if (this.eventHandlers === undefined) {
                   this.eventHandlers = [];
               }
               if (this.eventHandlers[event] === undefined) {
                   this.eventHandlers[event] = [];
               }

               this.eventHandlers[event].push({callback: eventMap[prop], context: context, attribute: attr, once: true, fired: false, listen:listenTo});    
            }
        }
   }
   return this;
};

oj.Events._shouldFire = function(handler) {
    if (handler.once) {
        if (!handler.fired) {
            handler.fired = true;
            return true;
        }
        return false;
    }
    return true;
};

oj.Events.TriggerInternal = function(silent, eventType) {
    var eventArray = this._getEvents(eventType), e, event, attr, eventsToFire, handlers, i, args, allHandlers, callback;
                  
    eventsToFire = [];                  
    for (e = 0; e < eventArray.length; e=e+1) {  
        event = eventArray[e].event;
        attr = eventArray[e].attribute;
        // Do specific event...
        eventsToFire.push({event:event, attribute:attr});
    }
    for (e = 0; e < eventsToFire.length; e=e+1) {
      allHandlers = this._getHandlers(this.eventHandlers, oj.Events.EventType['ALL']);
      handlers = oj.Events._getHandlers(this.eventHandlers, eventsToFire[e].event, false);
      for (i=0; i < (handlers ? handlers.length : 0); i=i+1) {
            if (handlers[i].attribute === eventsToFire[e].attribute && handlers[i].callback) {
                args = Array.prototype.slice.call(arguments);                
                if (handlers && handlers[i] && handlers[i].once) {
                      // Remove it: only want to fire once--make sure we remove it from the original
                      //oj.Events._getHandlers(this.eventHandlers, eventsToFire[e].event, true).splice(i, 1);
                      this._removeHandler(oj.Events._getHandlers(this.eventHandlers, eventsToFire[e].event, true), handlers[i]);
                }
                if (handlers && handlers[i] && this._shouldFire(handlers[i])) {
                  callback = handlers[i].callback;
                  // If this isn't a silent firing or this handler always wants to be called, make the call
                  if (!silent || handlers[i].ignoreSilent) {
                    callback.apply(handlers[i].context || this, args.slice(2));
                  }
                }
            }
      }
            // Handle all
         for (i=0; i < (allHandlers ? allHandlers.length : 0); i=i+1) {
               args = Array.prototype.slice.call(arguments);
               if (args.length > 0) {
                   if (eventsToFire[e].attribute) {
                       args[1] = eventsToFire[e].event + ":" + eventsToFire[e].attribute;
                   }
                   else {
                      args[1] =  eventsToFire[e].event;
                   }
               }
               // All case--make sure to pass event name
               if (allHandlers && allHandlers[i] && allHandlers[i].callback && this._shouldFire(allHandlers[i])) {
                   callback = allHandlers[i].callback;
                   // If this isn't a silent firing or this handler always wants to be called, make the call
                   if (!silent || allHandlers[i].ignoreSilent) {
                      callback.apply(allHandlers[i].context || this, args.slice(1));
                   }
               }
               if (allHandlers && allHandlers[i] && allHandlers[i].once) {
                   // Remove it: only want to fire once
                   //this._getHandlers(this.eventHandlers, oj.Events.EventType['ALL'], true).splice(i, 1);
                   this._removeHandler(this._getHandlers(this.eventHandlers, oj.Events.EventType['ALL'], true), allHandlers[i]);
               }
           }

    }
    return this;    
};

oj.Events.OnInternal = function(eventType, callback, context, listenTo, ignoreSilent) {
    var eventMap, prop, eventArray, i, event, attr, eventObj;

    eventMap = this._getEventMap(eventType, callback, context);

    for (prop in eventMap) {
        if (eventMap.hasOwnProperty(prop)) {
            eventArray = this._getEvents(prop);

            for (i = 0; i < eventArray.length; i=i+1)
            {
                event = eventArray[i].event;
                attr = eventArray[i].attribute;
                if (this.eventHandlers === undefined) {
                    this.eventHandlers = [];
                }
                if (this.eventHandlers[event] === undefined) {
                    this.eventHandlers[event] = [];
                }

                eventObj = {callback: eventMap[prop], context: context, attribute:attr, listen: listenTo, ignoreSilent:ignoreSilent};
                if (this._checkForHandler(this.eventHandlers[event], eventObj, oj.Events._handlersIdentical) === -1) {
                    this.eventHandlers[event].push(eventObj);    
                }
            }
        }
    }
    return this;
};

oj.Events._offInternal = function(eventType, callback, context, listen) {
    var eventMap, prop;
     if (arguments == null || arguments.length == 0) {
         // Remove everything
         this.eventHandlers = {};
         return this;
     }

     if (eventType == null) {
         this._removeEvent(eventType, callback, context, listen);
         return this;
     }

     eventMap = this._getEventMap(eventType, callback, context);

     for (prop in eventMap) {
         if (eventMap.hasOwnProperty(prop)) {
             this._removeEvent(prop, eventMap[prop], context, listen);
         }
     }
     return this;
};
 


oj.Events._getEventMap = function(eventType, callback, context) {
    var eventMap = {};
    
    if (eventType.constructor === String) {
        // Create a map out of it
        eventMap[eventType] = callback;
    }
    else {
        eventMap = eventType;
        // If eventType is a map of events->callbacks, then the callback argument is now context
        context = callback;
    }
    return eventMap;
};

oj.Events._removeEvent = function(eventType, callback, context, listen) {
    var eventArray = [], e, i, event, attr, handlers, callbacks, contexts, attrs, listenEq;
    
    if (eventType) {
        eventArray = oj.Events._getEvents(eventType);
    }
    else {
        // Walk entire eventHandlers property list
        if (this.eventHandlers !== undefined) {
            for (event in this.eventHandlers) {
                if (this.eventHandlers.hasOwnProperty(event)) {
                    eventArray.push({event:event});
                }
            }
        }
    }
    
    for (e = 0; e < eventArray.length; e=e+1) {
        event = eventArray[e].event;
        attr = eventArray[e].attribute;
        if (this.eventHandlers !== undefined && this.eventHandlers[event] instanceof Array) {
            handlers = this.eventHandlers[event];
            for (i=handlers.length-1; i >= 0; i=i-1){
                callbacks = (callback === undefined || callback === null || handlers[i].callback == callback);

                contexts = (context === undefined || context === null || handlers[i].context == context);
                attrs = (attr === undefined || attr === null || handlers[i].attribute == attr);
                listenEq = (listen === undefined || listen === null || handlers[i].listen == listen);
                if (callbacks && contexts && attrs && listenEq){
                    handlers.splice(i, 1);
                    //break;
                }
            }
            if (handlers.length === 0) {
                // Delete the entry
                delete this.eventHandlers[event];
            }
        }
    }   
};

oj.Events._removeHandler = function(handlers, handler) {
    var i, callbacks, contexts, attrs, listenEq, onceEq;
    
    for (i=handlers.length-1; i >= 0; i=i-1){
        callbacks = (handler.callback === undefined || handler.callback === null || handlers[i].callback == handler.callback);

        contexts = (handler.context === undefined || handler.context === null || handlers[i].context == handler.context);
        attrs = (handler.attribute === undefined || handler.attribute === null || handlers[i].attribute == handler.attribute);
        listenEq = (handler.listen === undefined || handler.listen === null || handlers[i].listen == handler.listen);
        onceEq = (handler.once === undefined || handler.once === null || handlers[i].once == handler.once);
        if (callbacks && contexts && attrs && listenEq && onceEq){
            handlers.splice(i, 1);
        }
    }    
};

oj.Events._getEvents = function(eventString) {    
    var eventList = eventString ? eventString.split(" ") : [], retList = [], i, eventWithAttr, name, attr;
    for (i = 0; i < eventList.length; i=i+1) {
        eventWithAttr = eventList[i].split(":");
        name = eventWithAttr[0];
        attr = eventWithAttr.length > 1 ? eventWithAttr[1] : null;
        retList.push({event:name, attribute:attr});
    }
    return retList;
};

oj.Events._handlersIdentical = function(handler1, handler2) {
   return (handler1.callback === handler2.callback) && (handler1.attribute === handler2.attribute) && (handler1.context === handler2.context) && (handler1.listen === handler2.listen) && (handler1.once === handler2.once);
};

oj.Events._listenersIdentical = function(listener1, listener2) {
   return (listener1.event === listener2.event) && (listener1.attribute === listener2.attribute) && (listener1.context === listener2.context) && (listener1.object === listener2.object);    
};

oj.Events._checkForHandler = function(handlerList, handler, handlerTest) {
    var i;
    if (handlerList === undefined) {
        return -1;        
    }
    
    for (i = 0; i < handlerList.length; i=i+1) {
        if (handlerTest(handlerList[i], handler)) {
            return i;
        }
    }
    return -1;
};

oj.Events._getHandlers = function(handlers, eventType, original) {
    if (handlers && handlers[eventType] instanceof Array) {
        if (original) {
            return handlers[eventType];
        }
        // Make a copy
        var handlerReturn = [], i;
        for (i = 0; i < handlers[eventType].length; i++) {
            handlerReturn.push(handlers[eventType][i]);
        }
        return handlerReturn;
    }
    return null;
};

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/

/**
 * @export
 * @class oj.Model
 * @classdesc Object representing name/value pairs for a data service record
 *
 * @param {Object=} attributes Initial set of attribute/value pairs with which to seed this Model object 
 * @param {Object=} options 
 *                  collection: collection for this model
 * @constructor
 * @mixes oj.Events
 */
oj.Model = function (attributes, options) {
    oj.Model._init(this, attributes, options, null);
};


// Subclass from oj.Object 
oj.Object.createSubclass(oj.Model, oj.Object, "Model.Model");
  
oj.Model.prototype.Init = function()
{
    oj.Model.superclass.Init.call(this);
};

/**
 * 
 * @export
 * @desc Attribute/value pairs held by the Model.
 * 
 * @type Object
 */
oj.Model.prototype.attributes = {};

/**
 * @export
 * @desc The set of attribute/value pairs that serve as default values when new Model objects are created.
 * 
 * @type Object
 */
oj.Model.prototype.defaults = {};

/**
 * @export
 * @desc The Model's unique ID.  This can be set by the application or retrieved from the data service. This ID will be appended to the URL for single-record data operations (update, delete). 
 * 
 * @type String
 */
oj.Model.prototype.id = null;

/**
 * @export
 * @desc The name of the model property to be used as the unique ID. See property id. This defaults to a value of "id".
 *  
 * @type String
 */
oj.Model.prototype.idAttribute = null;

/**
 * @export
 * @desc The base url on the data service used to perform CRUD operations on models.  If not defined, the Model will look to its collection.  One or the other must be defined before CRUD operations can succeed.
 * 
 * @type String
 */
oj.Model.prototype.urlRoot = null;

/**
 * @export
 * @desc A callback to allow users to completely customize the data service URLs
 * The callback has the following parameters:
 * operation (String): one of create, read, update, patch, or delete indicating the type of operation for which to return the URL<p>
 * model (Object): the oj.Model object requesting the URL<p>
 * options (Object) : one or more of the following properties:<p>
 * recordID : id of the record involved, if relevant<p>
 * 
 * customURL functions should return either: null, in which case the default will be used; a string, which will be used with the standard
 * HTTP method for the type of operation, or an Object with any ajax attributes.  This must at minimum include the URL:<p>
 *  url: giving the custom URL string<p>
 *  type: (optional) a string indicating the type of HTTP method to use (GET, POST, DELETE, etc.)<p>
 *  (other): (optional) any other ajax attributes to pass in the ajax call
 *  
 * @type (function(string,Object):(string|null)|null)
 */
oj.Model.prototype.customURL = null;

oj.Model._idCount = 0;

oj.Model._init = function(model, attributes, options, properties) {
    var prop = null, parse, attrCopy;

    if (oj.Model._justExtending) {
        return;
    }

    model.Init();
    
    // Augment with Event
    oj.Events.Mixin(model);

    model._clearChanged();
    model.previousAttrs = {};
    model.nestedSet = false;
    model.index = -1;

    options = options || {};

    // Deep copy actual data if found

    model.attributes = {};
    if (model['defaults']) {
        model.attributes = oj.Model._cloneAttributes(oj.Model.IsFunction(model['defaults']) ? model['defaults']() : model['defaults'], null);
    }

    // First, copy all properties passed in
    for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
            model[prop] = properties[prop]; 
        }
    }

    if (attributes) {
        parse = options['parse'];
        if (oj.Model.IsFunction(parse)) {
            model['parse'] = parse;
        }
 
        attrCopy = oj.Model._cloneAttributes(attributes, model.attributes);
        
        attrCopy = parse ? model['parse'](attrCopy) : attrCopy;
        if (attrCopy == null || attrCopy === undefined) {
            // Reset it
            model.attributes = {};
        }
        else {
            // Move them in
            for (prop in attrCopy) {
                if (attrCopy.hasOwnProperty(prop)) {
                    model._setProp(prop, attrCopy[prop], false, false, options);
                }
            }
        }
    }

    model.SetCid();

    // Grab collection option, if there
    model.SetCollection(options['collection']);

    if (options['customURL']) {
        model['customURL'] = options['customURL'];
    }
    
    // If URL is set, use that
    if (options['url']) {
        model['url'] = options['url'];
    }

    if (options['urlRoot']) {
        model['urlRoot'] = options['urlRoot'];
    }

    if (model['initialize']) {
        model['initialize'](attributes, options);
    }
    
    model.SetupId();
};


/**
 * Create a new, specific type of Model object to represent single records from a JSON data set.
 * @param {Object=} properties Properties for the new Model class.<p>
 *                  defaults: an Object containing starting attribute/value pairs for some or all of the record's potential attributes<p>
 *                  parse: a user callback function to allow parsing of JSON record objects as they are returned from the data service<p>
 *                  parseSave: a user callback function to allow conversion of Models back into a format appropriate for the data service on save calls<p>
 *                  urlRoot: the URL to use to get records from the data service in the abscence of a collection (when an id is appended)<p>
 *                  initialize: a user callback function to be called when this model is created<p>
 *                  validate: a user callback function that will be called before a save to the data service occurs. The callback is passed the current set of attributes and save options. 
 * @param {Object=} classProperties properties that attach to the whole class
 * @return {function(new:Object, ...)} new Model object
 * @export
 * @this {Object}
 */
oj.Model.extend = function (properties, classProperties) {
    oj.Model._justExtending = true;
    var obj, prop;

    obj = new oj.Model();
    oj.Model._justExtending = false;

    // Add regular properties from this "parent"
    oj.Events.Mixin(obj, this.prototype);

    // Grab properties
    properties = properties || {};
    for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
            obj[prop] = properties[prop];
        }
    }

    var Model;
    
    if (properties && properties['constructor'] && properties.hasOwnProperty('constructor')) {
        Model =  properties['constructor'];
    }
    else {
        Model = function(attributes, options) {
            oj.Model._init(this, attributes, options, properties);
        }
    }

    Model.prototype = obj;
    
    // Allow extending resulting obj
    Model.extend = oj.Model.extend;

    Model.prototype.constructor = Model;
    

    // Add class properties from this
    oj.Events.Mixin(Model, this);
    
    if (classProperties) {
        for (prop in classProperties) {
            if (classProperties.hasOwnProperty(prop)) {
                Model[prop] = classProperties[prop];
            }
        }
    }

        
    return Model;
};

// Placeholder for event mixins
oj.Model.prototype.TriggerInternal = function (silent, event, arg1, arg2, options) {};

oj.Model.prototype.SetCid = function () {
    // Create cid property if necessary
    if (!this.GetCid()) {
        this['cid'] = 'id' + oj.Model._idCount;
        oj.Model._idCount = oj.Model._idCount+1;
    }
};

oj.Model.prototype.GetCid = function () { 
    return this['cid'];
};

// Index within collection
oj.Model.prototype.SetIndex = function(index) {
    this.index = index;
};

oj.Model.prototype.GetIndex = function() {
    return this.index;
};

// LRU functions
oj.Model.prototype.SetNext = function(model) {
    var retVal = this.nextModel;
    this.nextModel = model;
    return retVal;
};

oj.Model.prototype.GetNext = function() {
    return this.nextModel;
};

oj.Model.prototype.SetPrevious = function(model) {
    var retVal = this.previousModel;
    this.previousModel = model;
    return retVal;
};

oj.Model.prototype.GetPrevious = function() {
    return this.previousModel;
};

// Merge the given model's attributes with this model's attributes
oj.Model.prototype.Merge = function(model, comparator, silent) {
    var prop, needSort = false, isStringComparator = oj.StringUtils.isString(comparator),
        valueChange, changes = false;
    
    for (prop in model.attributes) {
        if (model.attributes.hasOwnProperty(prop)) {
            valueChange = (this.attributes[prop] != model.attributes[prop]);
            if (isStringComparator) {
                // We have a string comparator--does it match this property?  If we hit a property that doesn't match, we need sort
                if (prop === comparator) {
                    // The property matches the comparator property: are we changing the value?
                    if (valueChange) {
                        needSort = true;
                    }
                }
            }
            else {
                if (valueChange) {
                    needSort = true;
                }
            }
            if (valueChange) {
                changes = true;
                this.attributes[prop] = model.attributes[prop];
                this._addChange(prop, model.attributes[prop]);
                this._fireAttrChange(prop, this.attributes[prop], null, silent);
            }                
        }
    }
    this.SetupId();
    // Only fire master change if there were any changes
    if (changes) {
        this._fireChange(null, silent);
    }
    return needSort;
};

oj.Model._hasProperties = function(object) {
    var prop;
    if (object && object instanceof Object) {
        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                return true;
            }
        }
    }
    return false;
};

oj.Model.prototype.SetCollection = function(coll) {
    if (coll == null) {
        delete this['collection'];
        return;
    }
    this['collection'] = coll;
};

oj.Model.prototype.GetCollection = function() {
    return this['collection'];
};

oj.Model.prototype._fireAttrChange = function(prop, value, options, silent) {
    if (prop != null) {
        this.TriggerInternal(silent, oj.Events.EventType['CHANGE'] + ":" + prop, this, value, options);    
    }    
};

oj.Model.prototype._fireChange = function(options, silent) {
    var coll;
    
    this.TriggerInternal(silent, oj.Events.EventType['CHANGE'], this, options, null);        
};
    
oj.Model.prototype.SetupId = function() {
    // Replicate id attribute at top level
    var idAttr = this._getIdAttr();
    // Supposedly this should always be model.id...who knew?
    this['id'] = this.attributes != null ? this.attributes[idAttr] : null;
};

oj.Model.prototype._setPropInternal = function(prop, value, copyRegardless) {
    var equality = oj.Object.__innerEquals(this.attributes[prop], value);
    if (copyRegardless || !equality) {
        this.attributes[prop] = value;
        this.SetupId();
        // Return value management here seems bizarre due to backbone tests: do the direct set if copyRegardless, but only return if the
        // inner equals was different
        return !equality;
    }
    return false;
};

oj.Model.prototype._clearChanged = function() {
    this['changed'] = {};
};

oj.Model.prototype._addChange = function(property, value) {
    this['changed'][property] = value;
};

/**
 * @ignore
 * @param {Object||string} prop
 * @param {Object} value
 * @param {boolean} copyRegardless
 * @param {boolean} propertyBag
 * @param {Object=} options
 * @returns {boolean}
 */
oj.Model.prototype._setProp = function(prop, value, copyRegardless, propertyBag, options) {
    if (prop == null) {
        return true;
    }
    
    var attrs = {}, p, isNested = this.nestedSet, opts;
    opts = oj.Model._copyOptions(options);

    if (!propertyBag) {
        attrs[prop] = value;
    }
    else {
        // We've passed in a whole property bag at once: validate all together
        for (p in prop) {
            if (prop.hasOwnProperty(p)) {
                attrs[p] = prop[p];
            }
        }
    }
    opts = opts || {};    
    
    if (!this._checkValid(attrs, {'validate':opts['validate']}, false)) {
        return false;
    }
    
    if (!isNested) {
        this._clearChanged();
        this.changes = [];
    }
    
    // Store old value
    if (!this.nestedSet) {
        this.previousAttrs = oj.Model._cloneAttributes(this.attributes, null);
    }
    
    this.nestedSet = true;
    for (p in attrs) {
        if (attrs.hasOwnProperty(p)) {
            if (this._setPropInternal(p, attrs[p], copyRegardless)) {    
                // Trigger changes
                this._addChange(p, attrs[p]);
                this.changes.push(p);
            }
            else {
                delete attrs[p];
            }
        }
    }
    // Fire events: don't fire if silent 
    var silent = opts['silent'];
    for (p in attrs) {
        if (attrs.hasOwnProperty(p)) {
            if (!silent && (this.changes.length > 0 || (isNested && this.changes.indexOf(p) === -1))) {
                this.pendingChanges = true;
            }
            this._fireAttrChange(p, attrs[p], opts, silent);
        }
    }
    
    if (isNested) {
        return true;
    }
    if (!silent && !isNested) {
        while (this.pendingChanges) {
            this.pendingChanges = false;
            this._fireChange(opts, silent);
        }
    }    
    
    this.nestedSet = false;
    return true;
};

oj.Model.prototype._areTherePendingChanges = function() {
};

/**
 * @export
 * Clears all attributes from the model and fires a change event.  A change event is fired for each property and then an overall change event is fired.
 * @param {Object=} options silent: if true, do not fire the change event
 *                          validate: if true, validate the unsetting of all properties
 * @return {Object||boolean} the Model, or false if validation on clear fails
 */
oj.Model.prototype.clear = function(options) {
    // Use unset to silently clear, to track changes to attributes
    var prop, unsetOpt = {'silent':true}, silent;
    options = options || {};
    silent = options['silent'];
    unsetOpt['validate'] = options['validate'];
    this._clearChanged();
    
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            if (!this._unsetInternal(prop, unsetOpt, true)) {
                return false;
            }
            this.TriggerInternal(silent, oj.Events.EventType['CHANGE'] + ":" + prop, this, undefined, null);    
        }
    }
    this.attributes = {};
    this.SetupId();
    
    this._fireAttrChange(null, null, null, silent);
    this._fireChange(null, silent);
    return this;
};

oj.Model._cloneAttributes = function(oldData, newData) {    
    var prop;
    if (oldData === null) {
        return null;
    }
    newData = newData || {};
    var props = false;
    for (prop in oldData) { 
        props = true;
        if (oldData.hasOwnProperty(prop)){// && oldData[prop] !== undefined) {
            if (typeof(oldData[prop]) !== 'object') {
                // Only overwrite if not undefined
                if (newData.hasOwnProperty(prop)) {
                    if (oldData[prop] !== undefined) {
                        newData[prop] = oldData[prop];
                    }
                }
                else {
                    newData[prop] = oldData[prop];
                }
            }
            else {
                if (oj.Model.IsArray(oldData[prop])) {
                    // Handle arrays
                    if (oldData[prop] === null) {
                        newData[prop] = null;
                    }
                    else {
                        newData[prop] = [];
                        // Special case zero length array because of backbone unit test checking actual object value--strange
                        if (oldData[prop].length === 0) {
                            newData[prop] = oldData[prop];
                        }
                        else {
                            for (var i = 0; i < oldData[prop].length; i++) {
                                newData[prop].push(oj.Model._cloneAttributes(oldData[prop][i], null));
                            }
                        }
                    }
                }
                else {
                    newData[prop] = oj.Model._cloneAttributes(oldData[prop], null);
                }
            }
        }
    }
    if (props) {
        return newData;
    }
    if (typeof(oldData) === 'object') {
        return newData;
    }
    // Not an object: no-op
    return oldData;
};

/**
 * @export
 * Return a copy of the Model with identical attributes and settings
 */
oj.Model.prototype.clone = function() {
    var c = new this.constructor(), prop;
    
    for (prop in this) {
        // Shallow copy all but data
        if (this.hasOwnProperty(prop) && this[prop] !== this.attributes) {
            c[prop] = this[prop];
        }
    }
    // Deep copy data
    c.attributes = oj.Model._cloneAttributes(this.attributes, null);

    // Remove the cid--this should be unique
    delete c['cid'];    
    // Set a new cid
    c.SetCid();
    
    c.SetupId();
    
    return c;
};

// Does this model match the given id or cid?
oj.Model.prototype.Match = function(id, cid) {
    var modId = this.GetId(), modCid;
    if (modId !== undefined && modId == id) {
        return true;          
    }
    modCid = this['cid'];
    if (modCid !== undefined && modCid == cid) {
        return true;
    }
    return false;
};

/**
 * Set the value(s) of one or more attributes of the model, and fire events.
 * @param {string||Object} property Property attribute name to set, or an Object containing attribute/value pairs
 * @param {Object=} value Value for property if property is not an Object containing attribute/value pairs
 * @param {Object=} options Options may be passed in including "silent" to prevent events from firing, or "unset" to delete all the properties passed in rather than setting them
 * @returns {Object||boolean} the model itself, false if validation failed on set
 * @export
 */
oj.Model.prototype.set = function (property, value, options) {
    var opts = {}, ignoreLastArg = false, prop, i, valid = true;
    
    if (arguments) {
        if (arguments.length > 0) {
            // Check if the last argument is not the first argument
            if (arguments.length > 1) {
                if (arguments[arguments.length-1]) {
                    // Last arg is options: ignore later
                    ignoreLastArg = true;
                    opts = arguments[arguments.length-1] || {};
                }
            }
            // Check if first arg is property bag
            if (oj.Model._hasProperties(property)) {
                // For set, pass entire thing to setProp
                if (opts['unset']) {
                    for (prop in property) {
                        if (property.hasOwnProperty(prop)) {
                            this._unsetInternal(prop, null, false);
                        }
                    }
                }
                else {
                    if (!this._setProp(property, null, true, true, opts)) {
                        valid = false;
                    }
                }
            }
            else {
                // Not a property bag?  We assume it's a series of property/value arguments
                for (i = 0; i < arguments.length; i+=2) {
                    // Process the arg as long as its: defined, and isn't the last argument where we're supposed to ignore the last argument
                    // due to it being 'options'
                    if (arguments[i] !== undefined || i < arguments.length-1 || (!ignoreLastArg && i === arguments.length-1)) {
                        if (opts['unset']) {
                            this._unsetInternal(arguments[i], null, false);
                        }
                        else {
                            if (!this._setProp(arguments[i], arguments[i+1], false, false, opts)) {
                                valid = false;
                            }
                        }
                    }
                }
            }
        }
    }
    if (valid) {
        return this;
    }
    return false;
};

/**
 * Deletes the given property from the Model.
 * @param {string} property Property to remove from model 
 * @param {Object=} options do not fire change events if "silent" is set to true
 * @returns {boolean} false if validation of the unset fails
 * @export
 */
oj.Model.prototype.unset = function (property, options) {
    return this._unsetInternal(property, options, false);
};


oj.Model.prototype._unsetInternal = function (property, options, clear) {
    options = options || {};
    var silent = options['silent'], attrs = {};
    
    if (this.has(property)) {
        if (!this._checkValid(attrs, options, false)) {
            return false;
        }
        if (!clear) {
            this._clearChanged();
        }
        
        //attrs[property] = undefined;
        delete this.attributes[property];
        this._addChange(property, undefined);
        //if (!silent) {
            this._fireAttrChange(property, null, null, silent);
            this._fireChange(null, silent);
        //}
    }
    this.SetupId();
    return true;    
};

/**
 * Returns the value of the property from the Model.
 * @param {string} property Property to get from model 
 * @return {Object} value of property
 * @export
 */
oj.Model.prototype.get = function (property) {
    return this.attributes[property];
};

/**
 * Determines if the Model has a certain property set, vs. undefined.
 * @param {string} property Property to check for
 * @return {boolean} true if the model contains the given property
 * @export
 */
oj.Model.prototype.has = function (property) {
    return this.attributes[property] !== undefined && this.attributes[property] !== null;
};

/**
 * Loads the Model object from the data service URL. Performs a data "read."
 * @param {Object=} options Options to control fetch<p>
 * success: a user callback called when the fetch has completed successfully. This makes the fetch an asynchronous process. The callback is called passing the Model object, raw response, and the fetch options argument.<p>
 * error: a user callback function called if the fetch fails. The callback is called passing the model object, xhr, and options arguments. 
 * @export
 */
oj.Model.prototype.fetch = function (options) { 
    options = options || {};
    var success = options['success'], userErr = options['error'], self = this, opts;

    opts = oj.Model._copyOptions(options);
    opts['error'] = function(xhr, status, err) {
                        // Trigger an error event
                        self.TriggerInternal(false, oj.Events.EventType['ERROR'], self, xhr, options);

                        if (userErr) {
                            userErr.call(self, arguments);
                        }
                    };

    opts['success'] = function (response) {
            oj.Model._fireSyncEvent(self, response, opts, false);
            
            if (oj.Model.IsFunction(this['parse'])) {
                this.set(this['parse'](response), opts);
            }
             if (success) {
                 success.call(self, this, response, options);
             }};
    oj.Model._internalSync("read", this, opts);
};

oj.Model.prototype['parse'] = function (rawData) {
    return rawData;
};

/**
 * @export
 * Return the URL used to access this model in the data source
 * 
 * @returns {string|null} url to access this model in the data source
 */
oj.Model.prototype.url = function() {
    var urlRoot = this._getUrlRoot(), id = this.GetId(), coll, collUrl, slash;
    if (urlRoot) {
        return id ? urlRoot + '/' + encodeURIComponent(id) : urlRoot;
    }
    
    coll = this['collection'];
    if (coll) {
        if (oj.Model.IsFunction(coll['url'])) {
            collUrl = coll['url']();
        }
        else {
            collUrl = coll['url'];
        }
        if (id && collUrl) {
            slash = oj.Model._getLastChar(collUrl) == '/' ? '' : '/';
            return collUrl + slash + encodeURIComponent(this.GetId());
        }
        return collUrl;
    }
    
    throw "No URL defined";
};

/**
 * @export
 * Return all of the model's attributes as an array
 * 
 * @returns {Array} array of all the model's attributes
 */
oj.Model.prototype.keys = function() {
    var prop, retArray = [];
    
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            retArray.push(prop);
        }
    }
    return retArray;
};


/**
 * @export
 * Return all of the model's attributes values as an array
 * 
 * @returns {Array} array of all the model's attributes values
 */
oj.Model.prototype.values = function() {
    var prop, retArray = [];
    
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            retArray.push(this.get(prop));
        }
    }
    return retArray;
};

/**
 * @export
 * Return an array of attributes/value pairs found in the model 
 * 
 * @returns {Object} returns the model's attribute/value pairs as an array
 */
oj.Model.prototype.pairs = function() {
    var prop, retObj = [], item;
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            item = [];
            item.push(prop);
            item.push(this.get(prop));
            retObj.push(item);;
        }
    }
    return retObj;
};

/**
 * @export
 * Return attribute/value pairs for the model minus those attributes listed in keys
 * 
 * @param {Array||Object} keys keys to exclude from the returned attribute/value pairs
 * 
 * @returns {Object} array of the model's attribute/value pairs except those listed in keys
 */
oj.Model.prototype.omit = function(keys) {
    var keyArr = [], i, prop, retObj = {};
    
    if (keys instanceof Array) {
        keyArr = keys;
    }
    else {
        for (i = 0; i < arguments.length; i++) {
            keyArr.push(arguments[i]);
        }
    }
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            if (keyArr.indexOf(prop) == -1) {
                retObj[prop] = this.get(prop);
            }
        }
    }
    return retObj;
};

/**
 * @export
 * Return attribute/value pairs for the model for the keys
 * 
 * @param {Array||Object} keys keys for which to return attribute/value pairs
 * 
 * @returns {Object} array of the model's attribute/value pairs filtered by keys
 */
oj.Model.prototype.pick = function(keys) {
    var keyArr = [], i, retObj = {};
    
    if (keys instanceof Array) {
        keyArr = keys;
    }
    else {
        for (i = 0; i < arguments.length; i++) {
            keyArr.push(arguments[i]);
        }
    }
    for (i = 0; i < keyArr.length; i++) {
        if (this.attributes.hasOwnProperty(keyArr[i])) {
            retObj[keyArr[i]] = this.get(keyArr[i]);
        }
    }
    return retObj;
};

/**
 * @export
 * Return an array of value/attribute pairs found in the model 
 * 
 * @returns {Object} returns the model's value/attribute pairs as an array
 */
oj.Model.prototype.invert = function() {
    var prop, retObj = {}, val;
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            val = this.get(prop);
            retObj[val] = prop;
        }
    }
    return retObj;
};

oj.Model._getLastChar = function(str) {
    return str.charAt(str.length-1);
};

oj.Model.prototype._saveUrl = function() {
    var urlRoot = this._getUrlRoot();
    if (urlRoot) {
        return urlRoot;
    }
    
    if (this.GetCollection()) {
        return this.GetCollection()['url'];
    }
    
    return null;
    
};

oj.Model.prototype._getUrlRoot = function() {
    if (oj.Model.IsFunction(this['urlRoot'])) {
        return this['urlRoot']();
    }
    return this['urlRoot'];
};

oj.Model.prototype['parseSave'] = function (modelData) {
    return modelData;
};

/**
 * @export
 * Check to see if the model is valid by running the validate callback, if it exists
 * 
 * @returns {boolean} true if validate passes or if no validate callback
 */
oj.Model.prototype.isValid = function() {
    var options = {};
    options['validate'] = this['validate'];
    return this._checkValid(this.attributes, options, false);
};

oj.Model._isValidateSet = function(options, save) {
    options = options || {};
    if (options['validate'] !== undefined && options['validate'] !== null) {
        return options['validate'];
    }
    // The "default" is different for save vs. set
    return save;
};

oj.Model.prototype._checkValid = function(attributes, options, save) {  
    options = options || {};    
    var validate = this['validate'];
    if (validate && oj.Model._isValidateSet(options, save)) {
        // If we have a validate override and it returns something, don't save
        this['validationError'] = validate.call(this, attributes, options);
        if (this['validationError']) {
            this.TriggerInternal(false, oj.Events.EventType['INVALID'], this, this['validationError'], options);
            return false;
        }
    }        
    return true;
};

oj.Model._processArgs = function(args) {
    var ignoreLastArg = false, options = {}, prop, attributes = {}, i;
    
    if (args) {
        if (args.length > 0) {
            // Check if the last argument is not the first argument
            if (args.length > 1) {
                if (args[args.length-1] && oj.Model._hasProperties(args[args.length-1])) {
                    // Last arg is options: ignore later
                    ignoreLastArg = true;
                    options = args[args.length-1] || {};
                }
            }
            if (args[0] == null) {
                return {attributes:null,options:options};
            }
            
            // Check if first arg is property bag
            if (oj.Model._hasProperties(args[0])) {
                for (prop in args[0]) {
                    if (args[0].hasOwnProperty(prop)) {
                        attributes[prop] = args[0][prop];
                    }
                }
            }
            else {
                // Not a property bag?  We assume arguments are a series of attr/values
                for (i = 0; i < args.length; i+=2) {
                    // Process the arg as long as its: defined, and isn't the last argument where we're supposed to ignore the last argument
                    // due to it being 'options'
                    if (args[i] !== undefined || i < args.length-1 || (!ignoreLastArg && i === args.length-1)) {
                        attributes[args[i]] = args[i+1];
                    }
                }
            }
        }
    }    
    return {attributes:attributes, options:options};
};

oj.Model._copyOptions = function(options) {
    var optReturn = {}, prop;
    options = options || {};
    
    for (prop in options) {
        if (options.hasOwnProperty(prop)) {
            optReturn[prop] = options[prop];
        }
    }
    return optReturn;
};

/**
 * Saves the current Model object to the data service. Performs a data "update."
 * @param {Object=} attributes One or more attribute name/value pairs to set on the Model before the save. 
 * @param {Object=} options Options to control save<p>
 * success: a user callback called when the save has completed successfully. This makes the save an asynchronous process. The callback is called passing the Model object, response from the AJAX call, and the fetch options argument.<p>
 * error: a user callback function called if the save fails. 
 * contextType: in case the user's REST service requires a different POST content type than the default, 'application/json'
 * validate: should the validation routine be called if available
 * patch: should only changed attributes be sent via a PATCH?
 * @return {Object|boolean} returns false if validation failed
 * @export
 */
oj.Model.prototype.save = function (attributes, options) {    
    var forceNew, success, callback, self, userErr, patch, argResults = oj.Model._processArgs(arguments), opts, oldAttrs, attrArgs;
    attrArgs = attributes === undefined ? undefined : argResults.attributes;
    opts = oj.Model._copyOptions(argResults.options);

    if (!opts['wait']) {
        this.set(attrArgs);
    }
    
    if (!this._checkValid(this.attributes, opts, true)) {
        return false;
    }
    
    forceNew  = opts['forceNew'] === undefined ? false : opts['forceNew'];
    self = this;
    userErr = opts['error'];
    patch = opts['patch'];

    opts['error'] = function(xhr, status, err) {
                            // Trigger an error event
                            self.TriggerInternal(false, oj.Events.EventType['ERROR'], self, xhr, options);

                            if (userErr) {
                                userErr.call(self, arguments);
                            }
                        };
                        
    opts['saveAttrs'] = opts['wait'] ? this._attrUnion(attrArgs) : this.attributes;
    
    // Must temporarily at least set attrs for toJSON()
    oldAttrs = this.attributes;
    // Swap in what's to be saved and call toJSON()
    this.attributes = opts['saveAttrs'];
    opts['saveAttrs'] = this.toJSON();    
    this.attributes = oldAttrs;
    
    if (!forceNew && !this.isNew()) {
        success = opts['success'];
        opts['success'] = 
            function (resp, textStatus, jqXHR) {
                var attrs;
                
                if (resp) {
                    if (oj.Model.IsFunction(this['parse'])) {
                        attrs = this['parse'](resp);
                    }
                    else {
                        attrs = resp;
                    }
                    
                    self.attributes = attrs;
                    self.SetupId();
                }
                
                oj.Model._fireSyncEvent(self, resp, opts, false);
                if (success) {
                     success.call(oj.Model.GetContext(opts, self), self, resp, options);
                }
                self._clearChanged();
            };        
        if (attrArgs === undefined) {
            opts['attrs'] = undefined;
        }
        else {
            opts['attrs'] = patch ? attrArgs : opts['saveAttrs'];
        }
        return oj.Model._internalSync(patch ? "patch" : "update", this, opts);
    }
    
    callback = oj.Model._getSuccess(opts);
    opts['success'] = function(resp, status, xhr) {
       var attrs;
       if (resp) {
            if (oj.Model.IsFunction(self['parse'])) {
                attrs = self['parse'](resp);
            }
            else {
                attrs = resp;
            }
            if (!self._checkValid(attrs, opts, true)) {
                return;
            }
            self.attributes = attrs;
            self.SetupId();
       }
       if (opts['wait']) {
           self.set(attrArgs);
       }
       oj.Model._fireSyncEvent(self, resp, opts, false);
       
        if (callback) {
            callback.call(oj.Model.GetContext(opts, self), self, resp, options);
        }
        self._clearChanged();        
    };

    opts['attrs'] = opts['saveAttrs'];
    
    // Turn on parse flag
    opts['parse'] = true;

    return oj.Model._internalSync("create", this, opts);
};

oj.Model.prototype._attrUnion = function(attrs) {
    var attrReturn = {}, prop;
    
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            attrReturn[prop] = this.attributes[prop];
        }
    }
    for (prop in attrs) {
        if (attrs.hasOwnProperty(prop)) {
            attrReturn[prop] = attrs[prop];
        }
    }
    return attrReturn;
};

oj.Model.IsArray = function(obj) {
    return obj != null && obj.constructor === Array;
};

oj.Model.IsFunction = function(obj) {
    return obj instanceof Function;
};

oj.Model.IsComplexValue = function(val) {
    return val && val.hasOwnProperty("value") && val.hasOwnProperty("comparator");
};
    
// Does this model contain all of the given attribute/value pairs?
oj.Model.prototype._hasAttrs = function(attrs) {
    var prop;
    for (prop in attrs) {
        if (attrs.hasOwnProperty(prop)) {
            if (!this.attributes.hasOwnProperty(prop)) {
                return false;
            }

            var val = oj.Model.IsArray(attrs[prop]) ? attrs[prop] : [attrs[prop]];
            for (var i = 0; i < val.length; i++) {
                if (oj.Model.IsComplexValue(val[i])) {
                    var comparator = val[i]['comparator'];
                    var value = val[i]['value'];
                    if (oj.StringUtils.isString(comparator)) {
                        throw new Error("String comparator invalid for local where/findWhere");
                    }
                    if (!comparator(this, prop, value)) {
                        return false;
                    }
                } else {
                    // Array case meaningless here.  Model can't be == value1 and value2
                    if (attrs[prop] !== this.attributes[prop]) {
                        return false;
                    }
                }
            }
        }
    }    
    return true;
};

// See if this model contains any of the given attribute/value pairs 
oj.Model.prototype.Contains = function(attrs) {
    var attrList = (attrs.constructor === Array) ? attrs : [attrs], i;
    
    for (i = 0; i < attrList.length; i++) {
        if (this._hasAttrs(attrList[i])) {
            return true;
        }
    }
    return false;
};

oj.Model._getSuccess = function(options) {
    return options != null && options['success'] ? options['success'] : null;
};

oj.Model.GetContext = function(options, model) { 
    if (options !== undefined && options['context'] !== undefined) {
        return options['context'];
    }
    return model;
};

/**
 * Determines if this Model object has been assigned an id value yet. This indicates whether or not the Model's data has been saved to or fetched from the data service at any point.
 * @returns {boolean} true if the Model object has not had its id set yet, false if not.
 * @export
 */
oj.Model.prototype.isNew = function() {
    return this.GetId() == undefined;
};

oj.Model.prototype._getIdAttr = function () {
    return this['idAttribute'] || 'id';
};

oj.Model.prototype.GetId = function () {
    return this['id'];
};

/**
 * Return the set of attributes and values that have changed since the last fetch, or since the Model object was created. If attribute/value pairs are passed in, check those to see if they're different than the model.
 * Return false if there were no changes
 * @param {Object=} attributes One or more attribute/value pairs to check against the model for changes 
 * @return {Object||boolean} the set of all attribute value pairs that have changed since last update or save, if no attributes passed in; the set of all attribute value pairs that are different than those listed in the attributes parameter, if present.  False if no changes
 * @export
 */
oj.Model.prototype.changedAttributes = function(attributes) {
    if (attributes) {
        var internalChanges = {}, prop;
        for (prop in attributes) {
            if (attributes.hasOwnProperty(prop)) {
                if (!oj.Object.__innerEquals(attributes[prop], this.attributes[prop])) {
                    internalChanges[prop] = attributes[prop];
                }
            }
        }
        return oj.Object.isEmpty(internalChanges) ? false : internalChanges;
    }
    return oj.Object.isEmpty(this['changed']) ? false : this['changed'];
};

/**
 * Return true if the Model object has had any changes made to its values, or if any changes have been made to the optional set of attributes passed in.
 * @param {Array=} attribute One or more attributes to check for changes 
 * @returns {boolean} true if the Model object has had any changes since retrieval or last update at all (if no attributes parameter); true if the Model object has had changes to one or more of the passed-in attributes since retrieval or last update (if attributes parameter present).
 * @export
 */
oj.Model.prototype.hasChanged = function(attribute) {
    if (attribute !== undefined) {
        return oj.Model._hasProperties(this['changed']) && this['changed'].hasOwnProperty(attribute);
    }
    return oj.Model._hasProperties(this['changed']);
};


/**
 * Delete the record represented by this Model object from the data service.
 * @param {Object=} options Options for the destroy operation. They include success and/or error callback function upon the delete or failure of the delete. 
 * @export
 */
oj.Model.prototype.destroy = function (options) {
    options = options || {};
    var isWait = options['wait'], callback, context, userErr = options['error'], self = this, xhr, opts;
    
    opts = oj.Model._copyOptions(options);
    callback = oj.Model._getSuccess(opts);
    context = oj.Model.GetContext(opts, this);
    
    opts['success'] = function(data, status, xhr) {
        if (isWait) {
            self._fireDestroy(false);
        }
        oj.Model._fireSyncEvent(self, data, opts, false);
    
        if (callback) {
            callback.call(oj.Model.GetContext(opts, self), self, data, options);
        }
    };
    opts['error'] = function(xhr, status, err) {
                            // Trigger an error event
                            self.TriggerInternal(false, oj.Events.EventType['ERROR'], self, xhr, opts);

                            if (userErr) {
                                userErr.call(self, arguments);
                            }
                        };

    if (!this.isNew()) {
        xhr = oj.Model._internalSync("delete", this, opts);
        if (!isWait) {
            this._fireDestroy(false);
        }
        return xhr;
    }
    if (!isWait) {
        this._fireDestroy(false);
    }
    if (callback) {
        callback.call(oj.Model.GetContext(opts, self), self, null, options);
    }
    return false;
};

// Fire request event
oj.Model.prototype._fireRequest = function(model, xhr, options, silent) {
    this.TriggerInternal(silent, oj.Events.EventType['REQUEST'], model, xhr, options);
};
    
// Fire destroy event to all listeners
oj.Model.prototype._fireDestroy = function (silent) {
    this.TriggerInternal(silent, oj.Events.EventType['DESTROY'], this, this['collection'], null);
};

// Fire sync event to all listeners
oj.Model._fireSyncEvent = function(model, resp, options, silent) {
    model.TriggerInternal(silent, oj.Events.EventType['SYNC'], model, resp, options);
};

/**
 * Return a copy of Model's current attribute/value pairs
 * @return {Object} a copy of the Model's current set of attribute/value pairs.
 * @export
 */
oj.Model.prototype.toJSON = function() {
    var retObj = {}, prop;
    for (prop in this.attributes) {
        if (this.attributes.hasOwnProperty(prop)) {
            if (Array.isArray(this.attributes[prop])) {
                retObj[prop] = this.attributes[prop].slice(0);
            }
            else {
                retObj[prop] = this.attributes[prop];
            }
        }
    }
    return retObj;
};

/**
 * @export
 * Return the previous value of the given attribute, if any.
 * 
 * @param {string} attr
 * @returns {Object} previous value of attr, if any.  If the attribute has not changed, returns undefined
 */
oj.Model.prototype.previous = function(attr) {
    return this.previousAttrs[attr];
};

/**
 * @export
 * Return a copy of the model's previously set attributes
 * 
 * @returns {Object} a copy of the model's previous attributes
 */
oj.Model.prototype.previousAttributes = function() {
    return this.previousAttrs;
};

/**
 * Performs communications with the server.  Can be overridden/replaced by clients
 * 
 * @param {string} method "create", "read", "update", or "delete"
 * @param {Object} model Model to be read/saved/deleted/created
 * @param {Object=} options to control sync
 * success: called if sync succeeds
 * error: called if sync fails
 * others are passed to jQuery
 * 
 * @return {Object} xhr object
 * @alias oj.Model.protoype.sync
 */
oj.Model.prototype['sync'] = function(method, model, options) {    
    return window['oj']['sync'](method, model, options);
};

// Internal processing before sync-- we want this stuff to happen even if user replaces sync
oj.Model._internalSync = function(method, model, options) {
    options = options || {};
    // If Model/Collection has OAuth object, then create Authorization header (see oj.RestImpl.addOptions)
    if(model['oauth']) {
            options['oauthHeader'] = model['oauth']['getHeader']();
    }
    	
	// Make sure to transfer the data type if it's set on the calling object
    if (!options['dataType'] && model['dataType']) {
        options['dataType'] = model['dataType'];
    }
    if (!options['jsonpCallback'] && model['jsonpCallback']) {
        options['jsonpCallback'] = model['jsonpCallback'];
    }
    
    // Do parsing if necessary and tuck it on options
    if (method === "create" || method === "patch" || method === "update") {
        options.parsedData = model['parseSave'].call(model, method==="patch" ? model['changed'] : options['saveAttrs']);
    }
    return model['sync'](method, model, options);
};

/**
 * @export
 * Master server access method for all models and collections
 * @param {string} method "create", "read", "update", "patch", or "delete"
 * @param {Object} model Model (or Collection to be read) to be read/saved/deleted/created
 * @param {Object=} options to control sync
 * success: called if sync succeeds
 * error: called if sync fails
 * others are passed to jQuery
 * 
 * @return {Object} xhr object
 */
oj.sync = function(method, model, options) {
    function _fireAndReturn(xhr) {
        model._fireRequest(model, xhr, options, options['silent']);
        return xhr;        
    };
    
    options = options || {};
    var restService, success = options['success'], error = options['error'], cors, customURL, xhr;
    
    cors = options['dataType'] === 'jsonp' ? false : true;
    customURL = model['customURL'];
    
    if (method.valueOf() === "create") {
      restService = new oj.RestImpl(model._saveUrl(), customURL);
      return _fireAndReturn(restService.addRecord(options.parsedData, error, options, model));
    }

    if (method.valueOf() === "read") {
        if (model instanceof oj.Model) {
            restService = new oj.RestImpl(model.url(), customURL);
            return _fireAndReturn(restService.getRecord(success, error, model.GetId(), options, oj.Model.GetContext(options, model)));
        }
        // Collection fetch
        restService = new oj.RestImpl(model.GetCollectionFetchUrl(options), customURL);
        return _fireAndReturn(restService.getRecords(success, error, options, model));
    }
    
    restService = new oj.RestImpl(model.url(), customURL);
    var recordId = null;
    if (model instanceof oj.Model) {
        recordId = model.GetId();
    }
    if (method.valueOf() === "update") {
        return _fireAndReturn(restService.updateRecord(success, recordId, options.parsedData, error, options, model, false));
    }
    if (method.valueOf() === "patch") {
        return _fireAndReturn(restService.updateRecord(success, recordId, options.parsedData, error, options, model, true));
    }
    if (method.valueOf() === "delete") {
        return _fireAndReturn(restService.deleteRecord(recordId, error, options, model));
    }
    return null;
};


oj.Model._urlError = function(ajaxOptions) {
    if (!ajaxOptions['url']) {
        throw new Error('The url property or function must be specified');
    }
};

oj.ajax = function() {
    if (arguments && arguments.length > 0) {
        oj.Model._urlError(arguments[0]);
    }
    return $.ajax.apply(window['oj'], arguments);
};
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*jslint browser: true*/

/**
 * @export
 * @class oj.Collection 
 * @classdesc Collection of Model objects 
 * 
 * @param {Array=} models Set of model objects to put into collection at construction time 
 * @param {Object=} options Passed through to the user's initialize routine, if any, upon construction 
 * @constructor
 * @mixes oj.Events
 */
oj.Collection = function(models, options) {
    if (oj.Collection._justExtending) {
        return;
    }

    // Initialize
    oj.Collection._init(this, models, options, null);
};

/**
 * @export
 * @desc Property specifying the model class object contained/used by the collection
 * 
 * @type Object
 */
oj.Collection.prototype.model = null;


/**
 * @export
 * @desc Total number of models in the collection (note that when the collection is virtual, not all may be available or currently fetched)
 * 
 * @type number
 */
oj.Collection.prototype.length = 0;

/**
 * @export
 * @desc Direct access to the Collection's list of Models.<br/>
 * Note that this property should not be used directly when a collection is paging (virtual).<br/>
 * Automatic fetches will not be triggered for undefined elements in the model.  Use at() instead.
 * 
 * @type Array 
 */
oj.Collection.prototype.models = [];

/**
 * @export
 * @desc The data service's URL on the server.
 * 
 * @type String
 */
oj.Collection.prototype.url = null;

/**
 * A callback to allow users to completely customize the data service URLs
 * @param {String} operation one of create, read, update, patch, or delete indicating the type of operation for which to return the URL<p>
 * @param {Object} collection the oj.Collection object requesting the URL<p>
 * @param {Object} options any of the following properties:<p>
 * recordID : id of the record involved, if relevant<p>
 * fetchSize : how many records to return.  If not set, return all.<p>
 * startIndex: Starting record number of the set to return.<p>
 * startID: Retrieve records starting with the record with the given unique ID. <p>
 * since: Retrieve records with timestamps after the given timestamp.<p>
 * until: Retrieve records with timestamps up to the given timestamp.  Default is "until"<p>
 * sort:  field(s) by which to sort, if set<p>
 * sortDir: sort ascending or descending (asc/dsc) <p>
 * query: a set of attributes indicating filtering that should be done on the server.  @see (@link where) for complete documentation of query values<p>
 * all: true (along with 'query', above) indicates that this is a findWhere or where type call that is expecting all models meeting the query condition to be returned<p>
 * 
 * @return {(function(string,Object,Object):(string|Object|null))|null} customURL callbacks should return either: null, in which case the default will be used; a string, which will be used with the standard
 * HTTP method for the type of operation, or an Object with any ajax attributes.  This must at minimum include the URL:<p>
 *  url: giving the custom URL string<p>
 *  type: (optional) a string indicating the type of HTTP method to use (GET, POST, DELETE, etc.)<p>
 *  (other): (optional) any other ajax attributes to pass in the ajax call
 * @export
 */
oj.Collection.prototype.customURL = function(operation, collection, options) {
    return null;
};

/**
 * A callback allowing users to extract their own paging/virtualization return values from their response
 * The callback is made with the raw data response to the collection fetch
 * @param {Object} response the raw data response coming back from the fetch
 * 
 * @return {(function(Object):(Object|null)|null)} customPagingOptions callbacks should return either null, in which case the Collection will look for the simple default properties, or
 * an object containing the one or more of the following attribute/value pairs (note that the Collection will look back to the response for default paging return properties if 
 * not returned in this object):<p>
 * 
 *                  totalResults: the total number of records available on the server side, not just in the current result.  Default is "totalResults"<p>
 *                  limit: the actual fetchSize used by the server in generating the result.  This may not be the client's fetchSize or the number of records in the current result.  Default is "limit".  This becomes the collection's "lastFetchSize" property<p>
 *                  count: the actual number of records returned by the server in the last result.  This becomes the collection's "lastFetchCount"<p>
 *                  offset: the actual starting record number of the current result.  Default is "offset"<p>
 *                  hasMore: boolean indicating whether or not there are more records available beyond the current result.  Default is "hasMore"<p>
 *                  
 * 
 * @export
 */
oj.Collection.prototype.customPagingOptions = function(response) {
    return null;
};


/**
 * @export
 * @desc The number of records brought back on the last fetch.
 * 
 * @type number
 */
oj.Collection.prototype.lastFetchSize = 0;

/**
 * @export
 * @desc Indicates whether or not there are more records available on the server, beyond the latest fetch.
 * 
 * @type boolean
 */
oj.Collection.prototype.hasMore = false;

/**
 * @export
 * @desc The total number of records available for this collection regardless of whether they have been fetched or not.  For non-virtual collections this will equal the length.
 * 
 * @type number
 */
oj.Collection.prototype.totalResults = 0;

/**
 * 
 * @export
 * @desc The number of records actually fetched the last time the collection went to the server.  This may or may not match fetchSize or limit
 * 
 * @type number
 */
oj.Collection.prototype.lastFetchCount = 0;

/**
 * @export
 * @desc The number of records to be kept in memory at any one time.  The default of -1 indicates that no records are thrown out
 * 
 * @type number
 */
oj.Collection.prototype.modelLimit = -1;

/**
 * @export
 * @desc The actual starting record number of the last fetch from the server.
 * 
 * @type number
 */
oj.Collection.prototype.offset = 0;

/**
 * @export
 * @desc The number of records to be fetched from the server in any one round trip.  The server's fetch size comes back as the "limit" property.  The default value of -1 indicates that virtualization/paging is not being used or is not available, and all records will be fetched.
 * and the number of records actually fetched comes back as "count"
 * 
 * @type number
 */
oj.Collection.prototype.fetchSize = -1;

/**
 * @export
 * @desc Sort direction for string-based field comparators.  A value of 1 (the default), indicates ascending sorts, -1 indicates descending.  Users should call sort() after changing sort direction to ensure that models in the collection are sorted correctly, or that there are no left over models sorted in a different sort order in the virtual case.
 *       
 * 
 * @type number
 */
oj.Collection.prototype.sortDirection = 1;

/**
 * @export
 * @desc If set, sort the collection using the given attribute of a model (if string); function(Model) returning a string attribute
 * by which the sort should take place; function(Model1, Model2) if a user-defined function comparing Model1 and Model2 (see the
 * JavaScript array.sort() for details)<p>
 * In the virtual case, comparator must be a string-based field comparator.  Users should call sort() after making any changes to the comparator to ensure that the models are correctly sorted, or that there are no leftover models sorted incorrectly in the virtual case.
 * 
 * @type {String|function(Object)|function(Object,Object)}
 */
oj.Collection.prototype.comparator = null;

/**
 * @export
 * @desc Set to true if sort is supported.  This will only be false if the collection is connected to a paging REST service that does 
 * not support sorting
 * 
 * @type boolean
 */
oj.Collection.prototype.sortSupported = true;


// Subclass from oj.Object 
oj.Object.createSubclass(oj.Collection, oj.Object, "Collection.Collection");

oj.Collection.prototype.Init = function()
{
    oj.Collection.superclass.Init.call(this);
};

/**
 * Create a new, specific type of Collection object to represent a collection of records from a JSON data set.
 * @param {Object=} properties Properties for the new Collection class.<p>
 *                  parse: a user callback function to allow parsing of the JSON collection after it's returned from the data service<p>
 *                  model: the specific type of Model object to use for each member of the Collection<p>
 *                  url: the URL to use to get the record collection from the data service<p>
 *                  initialize: a user callback function to be called when this collection is created<p>
 *                  comparator: a user callback used on sort calls. May also be set to false to prevent sorting.<p>
 *                  fetchSize: the number of records to be fetched on each round trip to the server.  If not set, none of the paging/virtualization API will be invoked<p>
 *                  modelLimit: the number of records to be held in memory at any one time, if virtualization is in force.  The default is all records.  This uses an LRU algorithm to determine which to roll off as more records are added.<p>
 * @return {function(new:Object, ...)} new Collection object
 * @export
 */
oj.Collection.extend = function(properties)
{
    oj.Collection._justExtending = true;
    var obj = new oj.Collection();
    oj.Collection._justExtending = false;
          
    var Collection;
    if (properties && properties['constructor'] && properties.hasOwnProperty('constructor')) {
        Collection =  properties['constructor'];
    }
    else {
        Collection = function(models, options) {
                        oj.Collection._init(this, models, options, properties);
                    }
    }

    Collection.prototype = obj;
    
    Collection.prototype.constructor = Collection;
    return Collection;    
};


oj.Collection._init = function(collection, models, options, properties) {
    var prop, i, optionlist, modelList;

    collection.Init();
    
    // Augment with Event    
    oj.Events.Mixin(collection);

    // First, copy all properties passed in
    if (properties) {
        for (prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                collection[prop] = properties[prop];
            }
        }        
    }

    // Check options
    options = options || {};
    optionlist = ["url", "comparator", "model", oj.Collection._FETCH_SIZE_PROP, "modelLimit", "customURL"];
    for (i = 0; i < optionlist.length; i++) {            
        if (options.hasOwnProperty(optionlist[i]) && options[optionlist[i]] !== undefined) {
            collection[optionlist[i]] = options[optionlist[i]];            
        }
    }
    if (collection._getFetchSize(null) === undefined) {
        collection.setFetchSize(-1);
    }
    if (collection['modelLimit'] === undefined) {
        collection.setModelLimit(-1);
    }
    collection['hasMore'] = false;
    collection.lruCount = 0;

    collection._setModels([]);
    if (options['parse']) {
        models = collection['parse'](models);
    }
    if (models != null && models !== undefined) {
        modelList = (models instanceof Array) ? models : [models];    
        for (i = 0; i < modelList.length; i=i+1) {
            collection.add(modelList[i], options);
        }
    }
    collection._setLength();
    
    if (properties && properties['initialize']) {
        properties['initialize'].call(collection, models, options);
    }    
};


// Placeholder for event mixins
oj.Collection.prototype.on = function (event, callback) {};
oj.Collection.prototype.OnInternal = function(event, callback, context, listenTo, ignoreSilent) {};
oj.Collection.prototype.TriggerInternal = function (silent, event, arg1, arg2, options) {};

// Fire request event
oj.Collection.prototype._fireRequest = function(collection, xhr, options, silent) {
    this.TriggerInternal(silent, oj.Events.EventType['REQUEST'], collection, xhr, options);
};

oj.Collection.prototype._setModels = function(models) {
    this['models'] = models;
};

oj.Collection.prototype._getModels = function() {
    return this['models'];
};

oj.Collection.prototype._getModelsLength = function() {
    return this._getModels().length;
};

// Designed to check if index exceeds the length of the models.  If we're in a virtual and "no totalResults" case, we're never over the upper limit
oj.Collection.prototype._overUpperLimit = function(index) {
    if (index < this._getModelsLength()) {
        return false;
    }
    if (this.__isVirtual()) {
        if (!this._hasTotalResults() || this._getModelsLength() === 0) {
            return false;
        }
    }
    return true;
};

oj.Collection.prototype._hasTotalResults = function() {
    return this['totalResults'] !== undefined && this['totalResults'] != null;
}

oj.Collection.prototype._pushModels = function(model) {
    // Model is being added to the end, it should be made the head
    this._makeModelHead(model);
    this._getModels().push(model);
    this.lruCount++;
    model.SetIndex(this._getModelsLength()-1);
};

oj.Collection.prototype._reduceLRU = function(removed) {
    if (removed) {
        for (var i = 0; i < removed.length; i++) {
            if (removed[i]) {
                this.lruCount--;
            }
        }
    }    
};

/**
 * @private
 * @param {number} start
 * @param {number} count
 * @param {Object=} model
 */
oj.Collection.prototype._spliceModels = function(start, count, model) {
    // Clean up prev/next links for models being removed
    for (var i = start; i < start + count; i++) {
        this._removePrevNext(this._getModels()[i]);
    }
    if (model === undefined) {
        this._reduceLRU(this._getModels().splice(start, count));
    }
    else {
        this._reduceLRU(this._getModels().splice(start, count, model));
        this._makeModelHead(model);
    }
    if (this.lruCount < 0) {
        this.lruCount = 0;
    }
    this._realignModelIndices(start);
};

oj.Collection.prototype._getModel = function(index) {
    return this._getModels()[index];
};

// Realign all the indices of the models (after sort for example)
oj.Collection.prototype._realignModelIndices = function(start) {
//    for (var i = start; i < this._getModelsLength(); i++) {
    this._getModels().forEach(function(model, i) {
        if (i >= start) {
            if (model) {
                model.SetIndex(i);
            }
        }
    });
};

// Update next/prev pointers as though the given model were being removed
oj.Collection.prototype._removePrevNext = function(model) {
    if (!model) {
        return;
    }
    
    var oldPrev = model.GetPrevious();
    var oldNext = model.GetNext();
    // Link the two surrounding previous/next elements to each other, because this one is being replaced and moved
    // to the head
    if (oldPrev) {
        oldPrev.SetNext(oldNext);        
    }
    else {
        // This element used to be the head
        this.head = oldNext;
    }
    if (oldNext) {
        oldNext.SetPrevious(oldPrev);
    }
    else {
        // This element used to be the tail
        this.tail = oldPrev;
    }    
};

oj.Collection.prototype._makeModelHead = function(model) {
    // Make this new model the most recently used: the head
    model.SetNext(this.head);
    if (this.head) {
        this.head.SetPrevious(model);
    }
    else {
        // No head: list is empty-->make tail the same element
        this.tail = model;
    }
    model.SetPrevious(null);
    this.head = model;    
};

oj.Collection.prototype._setModel = function(index, model) {
    var oldModel = this._getModels()[index];
    this._removePrevNext(oldModel);
    if (!oldModel) {
        // Newly "inserted" model
        this.lruCount++;
    }
    this._getModels()[index] = model;
    model.SetIndex(index);
    this._makeModelHead(model);
};

// Clean off n models from tail (oldest) of prev/next list
oj.Collection.prototype._clearOutModels = function(n) {
    var current = this.tail, index, model;
    var i = 0;
    this.tail = null;
    while (current && i < n) {
        // Erase this model from collection, iff it hasn't changed
        index = current.GetIndex();
        model = this._getModels()[index];
        if (!(model && model.hasChanged())) {
            this.lruCount--;
            if (index > -1) {
                this._getModels()[index] = undefined;
            }

            // Clear its pointers
            current.SetNext(null);
            current = current.SetPrevious(null);
            i++;
        }
        else {
            // Lock down the tail to this one we're not deleting
            if (!this.tail) {
                this.tail = current;
            }
            current = current.GetPrevious();
        }
    }
    // Make sure we set tail if not already set
    if (!this.tail) {
        this.tail = current;
    }
    if (this.lruCount < 0) {
        this.lruCount = 0;
    }
    if (this.lruCount === 0) {
        this.head = null;
        this.tail = null;
    }
};


// Reset the LRU list
oj.Collection.prototype._resetLRU = function() {
    this.lruCount = 0;
    this.head = null;
    this.tail = null;
};

// Make sure we have room in the LRU
oj.Collection.prototype._manageLRU = function(incoming) {
    if (this.__isVirtual()) {
        var limit = this._getModelLimit();
        if (limit > -1) {
            if (this.lruCount + incoming > limit) {
                // Must flush the amount over the limit
                this._clearOutModels(this.lruCount + incoming - limit);
            }
        }
    }
};

/**
 * @export
 * Return a copy of the Collection 
 * @return {Object} copy of the Collection
 */
oj.Collection.prototype.clone = function() {
    return this._cloneInternal(true);
};

oj.Collection.prototype._cloneInternal = function(withProperties) {
    var c = new this.constructor(), i;

    // Only copy locally if virtual
    var model;
    if (this.__isVirtual()) {
        c = this._copyProperties(c);
        c._resetModelsToFullLength();
    }
        
    if (withProperties) {
        // Try to copy models only if told to--we may only need the shell of the collection with properties
        for (i = 0; i < this._getLength(); i=i+1) {
            model = this._atInternal(i, null, true, false);
            if (model) {
                c._addInternal(model.clone(), {'at':i}, true, false);
            }
        }
    }
    return c;
};
    
// Copy critical properties in clone
oj.Collection.prototype._copyProperties = function(collection) {
    var props = ['totalResults', 'hasMore', oj.Collection._FETCH_SIZE_PROP], prop, i;
    for (i = 0; i < props.length; i++) {
        prop = props[i];
        collection[prop] = this[prop];
    }
    return collection;
};

oj.Collection.prototype._getLength = function() {
    return this['length'];
};

oj.Collection.prototype._setLength = function()
{
    var modelsLen = this._getModelsLength();
    this['length'] = modelsLen;    
    if (!this.__isVirtual()) {
        this['totalResults'] = modelsLen;
    }
};


oj.Collection.prototype._newModel = function(m, parse, options) {
    var newModel = null, validationValue;
    var opt = options || {};
    
    opt.noparse = !parse;

    if (m instanceof oj.Model) {
        newModel = m;
    }
    else {
        if (this['model']) {
            // model is defined
            if (oj.Model.IsFunction(this['model'])) {
                newModel = new this['model'](m, opt);
            }
            else {
                newModel = new this['model'].constructor(m, opt);
            }
        }
        else {
            newModel = new oj.Model(m, opt);
        }
    }    
    // Validate
    if (opt['validate'] && newModel['validate']) {
        validationValue = newModel['validate'](newModel.attributes);
        if (validationValue) {
            opt['validationError'] = validationValue;
            this.TriggerInternal(false, oj.Events.EventType['INVALID'], newModel, validationValue, opt);
            return null;
        }
    }
    return newModel;
};

/**
 * Add an instance of this collection's model(s) to the end of the collection.
 * Note that for virtual collections, if a new model is added after being saved up to the server, no add event will be fired as the 
 * collection will already "see" the model as existing.  Note that a warning will be logged if this add is not a force, not merging, and duplicate IDs are found.
 * @param {Object|Array} m Model object (or array of models) to add. These can be already-created instance of the oj.Model object, or sets of attribute/values, which will be wrapped by add() using the collection's model.
 * @param {Object=} options silent: if set, do not fire an add event<p>
 *                          at: splice the new model into the collection at the value given (at:index) <p>
 *                          merge: if set, and if the given model already exists in the collection (matched by id), then merge the attribute/value sets, firing change events<p>
 *                          sort: if set, do not re-sort the collection even if the comparator is set. <p>
 *                          force: if set to true, do an add to the collection no matter whether the item is found or not <p>
 *                          deferred: if true, return a promise as though this collection were virtual whether it is or not
 * 
 * @returns {Object|Array} The model or models added to the collection (or found/merged if appropriate).  If deferred or virtual, return the model or models added in a promise when the set has completed
 * @export
 */
oj.Collection.prototype.add = function(m, options) {    
    this._manageLRU(1);
    var opt = options || {};
    return this._addInternal(m, options, false, opt['deferred']);
};

// fillIn: true indicates that we're just trying to use add() after a fetch to 
// insert into a preallocated list of models, not truly do an add/merge from the API
oj.Collection.prototype._addInternal = function(m, options, fillIn, deferred) {
    // Get options
    options = options || {};
    var modelArray = [], 
        at = options['at'],
        silent = options['silent'],
        force = options['force'],
        i, index, cid,
        merge = options['merge'] || false,
        sort = options['sort'], needSort = true, added = false,
        modelReturnList = [];

    if (m instanceof Array) {
        modelArray = m;
    }
    else {
        modelArray.push(m);
    }
    
    function addToCollection(collection, newModel) {
        if (at === undefined) {
            collection._pushModels(newModel);
            index = collection._getModelsLength()-1;
            collection._getModel(index).SetCid();
        }
        else {
            index = at;
            if (collection.__isVirtual() && fillIn) {
                // Array has been preallocated in this case
                collection._setModel(index, newModel);
            }                        
            else {
                collection._spliceModels(index, 0, newModel);
            }
            collection._getModel(index).SetCid();
            // Increment at so that later models will be added right after their predecessors, if an array is passed in
            at = at + 1;
        }
        if (newModel.GetCollection() === undefined) {
            newModel.SetCollection(collection);
        }
        collection._setLength();
        collection._listenToModel(newModel);
        added = true;
    }

    function resortAndFireEvents(collection, existingModel, modelFoundInCollection, newModel, deferred) {
        // Now resort if required (don't resort if either told not to, or if 'at' option is set) and if there's more than one model
        if (fillIn) {
            options = options || {};
            options['fillIn'] = true;
        }
        if (needSort && existingModel === undefined && !sort && at === undefined && collection._getLength() > 1) {
            if (index > -1) {
                cid = collection._getModel(index)['cid'];
            }
            var sortOpt = {};
            oj.CollectionUtils.copyInto(sortOpt, options);            
            sortOpt['add'] = true;
            collection.sort(sortOpt);
            // Reset index
            if (index > -1) {
                index = collection.indexOf(collection.getByCid(cid), deferred);
            }
        }

        if (/*!silent && */added) {
            if (newModel) {
                newModel.TriggerInternal(silent, oj.Events.EventType['ADD'], newModel, collection, options);
            }
            else {
                modelFoundInCollection.TriggerInternal(silent, oj.Events.EventType['ADD'], modelFoundInCollection, collection, options);
            }
        }    
    }
    
    function mergeAttrs(collection, modelToTryAndMerge, modelFoundInCollection, newModel, deferred) {
        var existingModel, modelAdded = null;
        
        if (!force && merge && modelFoundInCollection) {
            // Try to merge the attributes--we're merging and the model (by id) was already in the collection
            needSort = modelFoundInCollection.Merge(modelToTryAndMerge, collection['comparator'], silent);
            modelAdded = modelFoundInCollection;
        }
        else {
            // Make sure model is not already in there
            if (!force) {
                existingModel = collection._getLocal(newModel);
                if (existingModel && fillIn && at !== existingModel.index) {
                    // We're filling in a virtual collection: we should *not* be finding the new model already in the collection
                    // if we're not merging and not forcing: this indicates duplicate ids
                    //throw new Error("Duplicate IDs fetched or added without merging");
                    oj.Logger.warn("Duplicate ID fetched or added without merging, the id = " + existingModel.GetId());
                }
            }

            if (existingModel === undefined) {
                addToCollection(collection, newModel);
                modelAdded = newModel;
            }
            else {
                modelAdded = existingModel;
            }
        }        

        resortAndFireEvents(collection, existingModel, modelFoundInCollection, newModel, deferred);
        
        return modelAdded;
    }

    function doAdd(collection, model, deferred) {
        var newModel = collection._newModel(model, true, options), modelToTryAndMerge = null, modelFoundInCollection = null;
        if (newModel != null) {
            index = -1;
            // Make sure ID is up to date
            newModel.SetupId();

            // Use original model array not cloned model if merging--otherwise we won't find the model in the collection
            modelToTryAndMerge = model instanceof oj.Model ? model : newModel;
            if (deferred) {
                if (force) {
                    return oj.Object.__getPromise(function(resolve, reject) {
                        mergeAttrs(collection, modelToTryAndMerge, undefined, newModel, deferred);
                        resolve();
                    });
                }
                return collection._getInternal(modelToTryAndMerge, null, deferred, true).then(function (modInfo) {
                                                                    modelFoundInCollection = modInfo['m'];
                                                                    var mod = mergeAttrs(collection, modelToTryAndMerge, modelFoundInCollection, newModel, deferred);
                                                                    modelReturnList.push(mod);
                                                                 });
            }
            if (!force && merge) {
                // Grab the actual model we want to merge from the collection, if the caller has indicated that we aren't
                // forcing an add and we want to merge
                modelFoundInCollection = fillIn ? collection._getLocal(modelToTryAndMerge) : collection.get(modelToTryAndMerge);
            }
            var modelAdded = mergeAttrs(collection, modelToTryAndMerge, modelFoundInCollection, newModel, deferred);
            if (modelAdded) {
                modelReturnList.push(modelAdded);
            }
        }
    }
    
    if (!fillIn && (this.__isVirtual() || deferred)) {
        var self = this;
        return oj.Object.__getPromise(function(allResolve, allReject) {
            var doTask = function(index) {
                            return oj.Object.__getPromise(function(resolve, reject) {
                                doAdd(self, modelArray[index], true).then(function() {
                                    resolve(index);
                                });
                            });
            };

            var currentStep = doTask(0);
            var nextTask = function(j) {
                                return doTask(j+1);
            };

            for (i = 1; i < modelArray.length; i++) {
                currentStep = currentStep.then(nextTask);
            }
            currentStep.then(function() {
                allResolve(oj.Collection._returnModels(modelReturnList));
            });
        });
    }
    
    for (i = 0; i < modelArray.length; i++) {
        doAdd(this, modelArray[i], false);
    }
    return oj.Collection._returnModels(modelReturnList);
};

oj.Collection._returnModels = function(modelReturnList) {
    if (modelReturnList.length === 1) {
        return modelReturnList[0];
    }
    return modelReturnList;    
};
    
oj.Collection.prototype._hasComparator = function() {
    var comparator = this['comparator'];
    return comparator !== undefined && comparator !== null;
};

/**
 * @export
 * Sort the models in the collection
 * 
 * @param {Object=} options silent: if true, do not fire the sort event
 */
oj.Collection.prototype.sort = function(options) {
    options = options || {};
    var silent = options['silent'], comparator = this['comparator'], self;
    
    // Check for comparator
    if (!this._hasComparator()) {
        return;
    }
    
    // This is a no-op in case of virtualization: we should just clear things out so that
    // any elements will be refetched
    if (this.__isVirtual()) {        
        var totalResults =  this['totalResults'];
        if (totalResults !== undefined) {
            // Make sure to set up the array if the length changes (i.e., from 0 to totalResults--need to preallocate)
            this._setModels(new Array(totalResults));
        }
        else {
            // No totalresults
            this._setModels([]);
            this._resetLRU();
            this._setLength();
        }
        var eventOpts = options['add'] ? {'add':true} : null;
        this.TriggerInternal(silent, oj.Events.EventType['SORT'], this, eventOpts, null);
        return;
    }
    
    self = this;
    this._getModels().sort(function(a, b) {
                            return oj.Collection.SortFunc(a, b, comparator, self, self);
                        });
    this._realignModelIndices(0);
    // Indicate this sort is due to an add
    var eventOpts = options['add'] ? {'add':true} : null;
    this.TriggerInternal(silent, oj.Events.EventType['SORT'], this, eventOpts, null);
};

oj.Collection._getKey = function(val, attr) {
    if (val instanceof oj.Model) {
        return val.get(attr);
    }
    if (oj.Model.IsFunction(val[attr])) {
        return val[attr]();
    }
    return val[attr];
};

oj.Collection.SortFunc = function(a, b, comparator, collection, self) {
    var keyA, keyB, i, retVal;
    
    if (oj.Model.IsFunction(comparator)) {        
        // How many args?
        if (comparator.length === 1) {
            // "sortBy" comparator option
            keyA = comparator.call(self, a);
            keyB = comparator.call(self, b);
            var attrs1 = oj.StringUtils.isString(keyA) ? keyA.split(",") : [keyA];
            var attrs2 = oj.StringUtils.isString(keyB) ? keyB.split(",") : [keyB];
            for (i = 0; i < attrs1.length; i++) {                
                retVal = oj.Collection._compareKeys(attrs1[i], attrs2[i], collection['sortDirection']);
                if (retVal !== 0) {
                    return retVal;
                }
            }
        }
        // "sort" comparator option
        return comparator.call(self, a, b);
    }
    // String option
    if (oj.StringUtils.isString(comparator)) {
        var attrs = comparator.split(",");
        
        for (i = 0; i < attrs.length; i++) {
            keyA = oj.Collection._getKey(a, attrs[i]);
            keyB = oj.Collection._getKey(b, attrs[i]);
            retVal = oj.Collection._compareKeys(keyA, keyB, collection['sortDirection']);            
            if (retVal !== 0) {
                return retVal;
            }
        }
    }
    return 0;    
};

/**
 * @export
 * Return the index at which the given model would be inserted, using the collection comparator
 * 
 * @param {Object} model model for which to determine the insert point
 * @param {String|Object=} comparator optional comparator to override the default
 * @returns {number} index at which model would be inserted.  -1 if no comparator
 */
oj.Collection.prototype.sortedIndex = function(model, comparator) {
    var comp = comparator ? comparator : this['comparator'], self, test;
    
    // Check for comparator
    if (!comp) {
        return -1;
    }
    
    this._throwErrIfVirtual("sortedIndex");
    
    self = this;
    test = function(a, b) {
            var keyA, keyB;

            if (oj.Model.IsFunction(comp)) {        
                // How many args?
                if (comp.length === 1) {
                    // "sortBy" comparator option
                    keyA = comp.call(self, a);
                    keyB = comp.call(self, b);
                    var attrs1 = oj.StringUtils.isString(keyA) ? keyA.split(",") : [keyA];
                    var attrs2 = oj.StringUtils.isString(keyB) ? keyB.split(",") : [keyB];
                    var retVal, i;
                    for (i = 0; i < attrs1.length; i++) {                
                        retVal = oj.Collection._compareKeys(attrs1[i], attrs2[i], self['sortDirection']);
                        if (retVal !== 0) {
                            return retVal;
                        }
                    }
                }
                // "sort" comparator option
                return comp.call(self, a, b);
            }
            // String option
            if (oj.StringUtils.isString(comp)) {
                keyA = a.get(comp);
                keyB = b.get(comp);
                return oj.Collection._compareKeys(keyA, keyB, self['sortDirection']);            
            }
            return 0;
        };
    return oj.Collection._find(this._getModels(), model, test);
};


// Binary search and return the index at which model would be inserted into sorted modelArray
oj.Collection._find = function(modelArray, model, comparator) {
    function search(min, max) {
        var cid, id, mid;
        
        if (min > max) {
            return -1;
        }
        
        cid = model.GetCid();
        id = model.GetId();
        if (modelArray[min].Match(id, cid)) {
            return min;
        }
        if (modelArray[max].Match(id, cid)) {
            return max;
        }
        
        mid = Math.floor((max+min)/2);
        if (comparator(modelArray[mid], model) === -1) {
            return search(min+1, mid);
        }
        if (comparator(modelArray[mid], model) === 1) {
            return search(mid, max-1);
        }
        return mid;
    }
    
    return search(0, modelArray.length-1);
};

oj.Collection._compareKeys = function(keyA, keyB, sortDirection) {
    if (sortDirection === -1) {
        if (keyA < keyB) {        
            return 1;
        }
        if (keyB < keyA) {
            return -1;
        }
    }
    else {
        if (keyA > keyB) {        
            return 1;
        }
        if (keyB > keyA) {
            return -1;
        }
    }
    return 0;    
};


/**
 * @export
 * Add the given model to the front of the collection
 * @param {Object} m model to add to the beginning of the collection
 * @param {Object=} options see add
 * @return {Object} If this is a paging/virtual collection, this will return a Promise that will be called when the
 *                  operation is done.  Otherwise undefined
 */
oj.Collection.prototype.unshift = function(m, options) {
    // Like an add but set 'at' to zero if not specified
    var opt = {};
    oj.CollectionUtils.copyInto(opt, options || {});
    if (!opt['at']) {
        opt['at'] = 0;
    }
    this._manageLRU(1);
    return this._addInternal(m, opt, false, opt['deferred']);
};

/**
 * @export
 * Remove the first model from the collection and return it
 * @param {Object=} options same as remove, plus: <p>
 *                          deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} model that was removed.  If this is a paging/virtual collection, this will return a Promise
 *                  which will call its done function, passing the model value that was removed
 */
oj.Collection.prototype.shift = function(options) {
    var deferred = this._getDeferred(options);
    if (this.__isVirtual() || deferred) {
        var self = this;
        return this.at(0, options).then(function (model) {             
            return self._removeInternal(model, 0, options);
        });
    }
    return this._removeInternal(this.at(0), 0, options);
};

/**
 * @export
 * Return an array of models found in the Collection, excepting the last n.
 * @param {number=} n number of models to leave off the returned array; defaults to 1
 * @return {Object} array of models from 0 to the length of the collection - n - 1
 */
oj.Collection.prototype.initial = function(n) {
    if (n === undefined) {
        n = 1;
    }
    
    var array = [], i;
    for (i = 0; i < this._getLength() - n; i=i+1) {
        array.push(this.at(i));
    }
    return array;
};

oj.Collection.prototype._getDeferred = function(options) {
   var opt = options || {};
   return opt['deferred'];
};

/**
 * @export
 * Return the last model in the Collection.  If n is passed in, then the last n models are returned as an array
 * Note that if the collection is virtual, and totalResults is not returned by the server, the results returned by last can be
 * difficult to predict.  They depend on the fetch sizes, last known offset of a fetch, etc.  If code is using a server that does not return
 * totalResults the use of last is not recommended.
 * @param {number=} n number of models to return.  Defaults to 1
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object|Array|null} array of n models from the end of the Collection.  If this is a paging/virtual collection,
 *                             this will return a Promise which will call its done function, passing the array or single model
 */
oj.Collection.prototype.last = function(n, options) {
    var deferred = this._getDeferred(options);
    if (n === undefined) {
        n = 1;
    }
    
    if (n === 1) {
        var len = this._getModelsLength();
        if (len === 0) {
            len = n;
        }
        if (len > 0) {
            return this.at(len-1, deferred);
        }
        return null;
    }
    
    var array = [], i;
    var len = this._getLength();    
    if (deferred || this.__isVirtual()) {
        // Loop using deferred
        var start = len-n;        
        
        // Handle edge or no totalResults cases
        if (start < 0) {
            start = 0;
        }
        if (len === 0) {
            // No totalresults, probably
            len = n;
        }

        return this.IterativeAt(start, len);
    }
                    
    for (i = len - n; i < len; i=i+1) {
        array.push(this.at(i));
    }
    return array;
};

// Loop calling at() in a deferred way and return a promise to be resolved when all the elements are sequentially fetched
oj.Collection.prototype.IterativeAt = function (start, end) {
    var array = [], i;
    var self = this;
    return oj.Object.__getPromise(function(allResolve, allReject) {
        var doTask = function(index) {
                        return oj.Object.__getPromise(function(resolve, reject) {
                            self._deferredAt(index, null).then(function(model) {
                                array.push(model);
                                resolve(index);
                            });
                        });
        };

        var currentStep = doTask(start);
        var nextTask = function(j) {
                            return doTask(j+1);
        };

        for (i = start+1; i < end; i++) {
            currentStep = currentStep.then(nextTask);
        }
        currentStep.then(function() {
                            allResolve(array);
                        });
    });
};

oj.Collection.prototype._getDefaultFetchSize = function(n) {
    if (n === undefined || n === null) {
        return this[oj.Collection._FETCH_SIZE_PROP];
    }
    else {
        return n;
    }
};

oj.Collection.prototype._calculateNextStart = function() {
    var lastFetch = this['lastFetchCount'];
    if (lastFetch === undefined || lastFetch === null) {
        lastFetch = this[oj.Collection._FETCH_SIZE_PROP];
    }
    if (this['offset'] === undefined || this['offset'] === null) {
        // Assume zero offset (0+lastFetch)
        return lastFetch;
    }
    return this['offset'] + lastFetch;   
};

/**
 * @export
 * Fetch the next set of models from the server.
 * 
 * @param {number} n number of models to fetch.  If undefined or null, the collection will attempt to use the overall fetchSize property value
 * @param {Object=} options Options to control next<p>
 *                  success: a user callback called when the fetch has completed successfully. This makes the fetch an asynchronous process. The callback is called passing the Collection object, raw response, and the options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the collection object, xhr, and options arguments.<p>
 * @return {Object} xhr object; null if nothing to fetch (the success callback will still be called)
 */
oj.Collection.prototype.next = function(n, options) {
    options = options || {};
    options[oj.Collection._FETCH_SIZE_PROP] = this._getDefaultFetchSize(n);
    
    var start = this._calculateNextStart();
    var length = this._getLength();
    if (length === 0 && options[oj.Collection._FETCH_SIZE_PROP] > 0) {
        // If we have a fetch size and we have no length let next() do a fetchSize fetch starting at zero to kick things off
        start = 0;
    } else if (start >= length) {
        // No op -- still call success because the items are already fetched.  
        var self = this;
        if (options['success']) {
            options['success'].call(oj.Model.GetContext(options, self), self, null, options);
        }
        
        return null;
    }
    options['startIndex'] = start;
    return this.fetch(options);
};

oj.Collection.prototype._calculatePrevStart = function(n) {
    if (this['offset'] === undefined || this['offset'] === null) {
        // Assume zero: we can't back up beyond that so if the offset wasn't set there's nothing to do
        return 0;
    }
    return this['offset'] - n;
};

/**
 * @export
 * Fetch the previous set of models from the server.
 * 
 * @param {number} n number of models to fetch.  If undefined or null, the collection will attempt to use the overall fetchSize property value
 * @param {Object=} options Options to control previous<p>
 *                  success: a user callback called when the fetch has completed successfully. This makes the fetch an asynchronous process. The callback is called passing the Collection object, raw response, and the options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the collection object, xhr, and options arguments.<p>
 * @return {Object} xhr object, or null if there is nothing earlier to fetch (no fetch has happened or the last fetch started at 0).  The success callback will still be called
 */
oj.Collection.prototype.previous = function(n, options) {
    options = options || {};
    if (this['offset'] === 0) {
        // No op -- still call success (if we've fetched before--lastFetchCount is other than zero) because the items are already fetched.  
        var self = this;
        if (options['success'] && this['lastFetchCount']) {
            options['success'].call(oj.Model.GetContext(options, self), self, null, options);
        }
        
        return null;
    }
    options[oj.Collection._FETCH_SIZE_PROP] = this._getDefaultFetchSize(n);
    var start = this._calculatePrevStart(options[oj.Collection._FETCH_SIZE_PROP]);
    if (start < 0) {
        // Only fetch from 0 to the last fetch's starting point...
        options[oj.Collection._FETCH_SIZE_PROP] = this['offset'];
        start = 0;
    }
    options['startIndex'] = start;
    return this.fetch(options);
};


/**
 * @export
 * Set or change the number of models held at any one time
 * 
 * @param {number} n maximum number of models to keep at a time
 */
oj.Collection.prototype.setModelLimit = function(n) {
    this['modelLimit'] = n;
    // Clean out down to the new limit, if necessary
    this._manageLRU(0);
};

oj.Collection.prototype._getModelLimit = function() {
    return this['modelLimit'];
};

/**
 * Set or change the number of models to fetch with each server request
 * 
 * @param {number} n number of models to fetch with each request
 * @export
 */
oj.Collection.prototype.setFetchSize = function(n) {
    this[oj.Collection._FETCH_SIZE_PROP] = n;
};



/**
 * @export
 * Return the array of models found in the Collection starting with index n.
 * @param {number=} n index at which to start the returned array of models.  Defaults to 1.
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} array of models from the Collection
 */
oj.Collection.prototype.rest = function(n, options) {
    var deferred = this._getDeferred(options);
    if (n === undefined) {
        n = 1;
    }
    
    var array = [], i;
    if (this.__isVirtual() || deferred) {
        return this.IterativeAt(n, this._getLength());
    }
    
    for (i = n; i < this._getLength(); i=i+1) {
        array.push(this.at(i));
    }
    return array;
};

/**
 * Remove a model from the collection, if found.  Will fire an allremoved event once all the models have been removed.
 * @param {Object|Array} m Model object or array of Models to remove. 
 * @param {Object=} options silent: if set, do not fire destroy or allremoved events 
 * @export
 */
oj.Collection.prototype.remove = function(m, options)
{
    options = options || {};
    var modArray = [], mod;
    
    if (m instanceof Array) {
        modArray = m;
    }
    else {
        modArray.push(m);
    }
    
    for (mod = modArray.length-1; mod >= 0; mod=mod-1) {
        this._removeInternal(modArray[mod], -1, options);
    }
    this.TriggerInternal(options['silent'], oj.Events.EventType['ALLREMOVED'], this, modArray, options);
};

oj.Collection.prototype._removeInternal = function(model, index, options) {
    options = options || {};
    var modInfo = index == -1 ? this._getInternal(model) : oj.Collection._getModinfo(index, model), 
        silent = options['silent'];
    
    index = modInfo.index;
    if (index > -1) {
        var mod = modInfo['m'];
        // only unset the collection setting if it's mine
        if (mod !== undefined && mod.GetCollection() === this) {
            mod.SetCollection(null);
        }
        this._spliceModels(index, 1);
        this._setLength();
        //if (!silent) {
            var opt = {};
            oj.CollectionUtils.copyInto(opt, options);
            opt['index'] = index;
            if (mod !== undefined) {
                mod.TriggerInternal(silent, oj.Events.EventType['REMOVE'], mod, this, opt);
            }
      //  }
        // Unlisten after event fired
        this._unlistenToModel(mod);        
    }
    return modInfo['m'];
};


oj.Collection.prototype._unlistenToModel = function(m) {
    if (m !== undefined) {
        m.off(null, null, this);
    }
};

oj.Collection.prototype._listenToModel = function(m) {
    m.OnInternal(oj.Events.EventType['ALL'], this._modelEvent, this, false, true);
};

// Handle model destroyed events via the all listener
oj.Collection.prototype._modelEvent = function(event, model, collection, options) {
    var args;
    
    if (event === oj.Events.EventType['DESTROY']) {
        this.remove(model);
    }
    
    // Don't process general events if we're not the target
    if (collection !== undefined && collection instanceof oj.Collection && collection !== this) {
        return;
    }

    // Throw up to the collection
    args = Array.prototype.slice.call(arguments);
    var silent = options && options['silent'];
    this.TriggerInternal(silent, event, model, collection, options);
};

/**
 * Clear all data from the collection and refetch (if non-virtual).  If virtual, clear all data.  In both cases, fire a refresh event
 * if silent is not set
 * @param {Object=} options user options<p>
 *                          silent: if set, do not fire a refresh event<p>
 * @return {Object} promise object triggering done when complete (in case there is a fetch for non-virtual mode)
 * @export
 */
oj.Collection.prototype.refresh = function(options)
{
    options = options || {};
    
    var self = this;
    return oj.Object.__getPromise(function(resolve, reject) {
        if (!self.__isVirtual()) {
            // Do a reset, with silent
            self.reset(null, {'silent':true});
            // Local: do a fetch to fill back up
            self.fetch({'success': function (collection, response, options) {
                            var silent = options['silent'] !== undefined && options['silent'];
                            self.TriggerInternal(silent, oj.Events.EventType['REFRESH'], self, options, null);
                            resolve({'collection':collection, 'response':response, 'options':options});                                    
                        },
                        'error': function (xhr, status, error) {
                            reject({'collection':self, 'xhr':xhr, 'status':status, 'error':error});
                        }
                        });
            return;        
        }
        // Virtual
        var totalResults =  self['totalResults'];
        if (totalResults !== undefined) {
            self._setModels(new Array(totalResults));
            self._resetLRU();
        }
        var silent = options['silent'] !== undefined && options['silent'];
        self.TriggerInternal(silent, oj.Events.EventType['REFRESH'], self, options, null);
        resolve();        
    });
};

/**
 * Remove and replace the collection's entire list of models with a new set of models, if provided. Otherwise, empty the collection.
 * @param {Object=} data Array of model objects or attribute/value pair objects with which to replace the collection's data. 
 * @param {Object=} options user options, passed to event, unless silent<p>
 *                          silent: if set, do not fire events<p>
 * @export
 */
oj.Collection.prototype.reset = function(data, options)
{
    options = options || {};    
    options['previousModels'] = this._getModels();

//    for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        if (model) {
            this._unlistenToModel(model);
            model.SetCollection(null);
        }
    }, this);
    this._setModels([]);
    this._resetLRU();
    
    if (data) {
        // Parse collection
        if (options['parse']) {
            data = this['parse'](data);
        }
        
        if (data instanceof Array) {
            this._manageLRU(data.length);
            for (var i = 0; i < data.length; i=i+1) {
                this._addInternal(data[i], options, true, false);
            }
        }
        else {
            this._manageLRU(1);
            this._addInternal(data, options, true, false);
        }
    }
    this._setLength();
    
    var silent = options['silent'] !== undefined && options['silent'];
    this.TriggerInternal(silent, oj.Events.EventType['RESET'], this, options, null);
};

/**
 * Return the model object found at the given index of the collection, or a promise object that will return the model to a function
 * in the done() call.
 * 
 * @param {number} index Index for which to return the model object. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting <p>
 *                  deferred: if true, return a deferred/promise object as described below.  If not specified, the return value will
 *                   be determined by whether or not the collection is virtual
 * @return {Object} Model object located at index. If index is out of range, returns null.  If this is a paging/virtual collection or
 *                  if deferred is specified and true, at will return a Promise object which will call its done function,
 *                  passing the value at(index) 
 * @export
 */
oj.Collection.prototype.at = function(index, options)
{
    var deferred = this._getDeferred(options);
    return this._atInternal(index, options, false, deferred);
};

// Local indicates that only what's stored locally should be returned (if true)--no fetching
oj.Collection.prototype._atInternal = function(index, options, local, deferred) {
    if (index < 0 || this._overUpperLimit(index)) {
        return null;
    }
    if (!local && (this.__isVirtual() || deferred)) {
        return this._deferredAt(index, options);
    }
    return this._getModel(index);
};

oj.Collection.prototype._deferredAt = function(index, options) {
    var self = this;
    // If it's virtual, we need to see if this item has been fetched or not: if not, we need to fetch it + fetchSize
    var model = self._getModel(index);
    if (model === undefined) {
        return oj.Object.__getPromise(function(resolve, reject) {
            // Go fetch
            var opts = {};
            oj.CollectionUtils.copyInto(opts, options || {});
            opts['context'] = self;
            opts['startIndex'] = index;
            opts['error'] = function(collection, error, options) {
                // Handle potential errors
                reject(error);
                return;
            }

            self._fetchInternal(opts, -1, false).then(function () {
                    resolve(self._getModel(index));
               }, function(e) { reject(e);});
        });
    }
    return oj.Object.__getPromise(function(resolve, reject) {
        resolve(model);                   
    });
};

/**
 * Return the first model object from the collection whose client ID is the given model cid
 * @param {string} clientId Client ID (see Model cid) for which to return the model object, if found. 
 * @return {Object} First model object in the collection where model.cid = clientId. If none are found, returns null.
 * 
 * @throws {Error} when called on a virtual/paging Collection if the item isn't found in memory
 * @export
 */
oj.Collection.prototype.getByCid = function(clientId)
{
//    for (i = 0; i < this._getModelsLength(); i=i+1)
    var foundModel = null;
    this._getModels().some(function(model) {
        if (model !== undefined && clientId === model['cid']) {
            foundModel = model;
            return true;
        }
        return false;
    });
    if (foundModel) {
        return foundModel;
    }
    if (this.__isVirtual()) {
        throw new Error("Not found locally and not supported by server for virtual collections");
    }
    return null;
};


/**
 * Return the first model object from the collection whose model id value is the given id or cid, or the id or cid from a passed in model
 * Note this method will not function as expected if the id or cid is not set
 * @param {Object|string} id ID, cid, or Model (see Model id or cid) for which to return the model object, if found. 
 * @param {Object=} options <p>
 *                  fetchSize: fetch size to use if the call needs to fetch more records from the server, if virtualized.  Overrides the overall fetchSize setting<p>
 *                  deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} First model object in the collection where model.id = id or model.cid = id. If none are found, returns null.
 *                  If deferred or virtual, return a promise passing the model when done
 * @export
 */
oj.Collection.prototype.get = function(id, options)
{
    var deferred = this._getDeferred(options);
    var internalGet = this._getInternal(id, options, deferred);
    if (internalGet) {
        // Is this a deferred object?
        if ($.isFunction(internalGet.then)) {
            return oj.Object.__getPromise(function(resolve, reject) {
                internalGet.then(function(modInfo) {
                    resolve(modInfo['m']);
                });
            });
        }
        if (this.__isVirtual()) {
            return oj.Object.__getPromise(function(resolve, reject) {
                resolve(internalGet['m']);
            });
        }
        if (internalGet.hasOwnProperty('m')) {
            return internalGet['m'];
        }
    }
    return null;
};

oj.Collection.prototype._getLocal = function(id) {
    var internalGet = this._getLocalInternal(id);
    if (internalGet) {
        return internalGet['m'];
    }
    return null;
};

oj.Collection.prototype._getLocalInternal = function(id) {
    var cid = id;
    if (id instanceof oj.Model) {
        // Get the cid
        cid = id.GetCid();
        // Get the id
        id = id.GetId();
    }
    else if (id !== undefined && id != null && id['id'] !== undefined) {
        id = id['id'];
    }
//    for (i = 0; i < len; i=i+1)
    var foundObj = null;
    this._getModels().some(function(model, i) {
        if (model !== undefined && model.Match(id, cid)) {
            foundObj = oj.Collection._getModinfo(i, model);
            return true;
        }
        return false;
    });
    if (foundObj) {
        return foundObj;
    }
    return oj.Collection._getModinfo(-1, undefined);
};

/**
 * @private
 * @param {Object|null|string} id
 * @param {Object=} options
 * @param {boolean=} deferred
 * @param {boolean=} fillIn
 * @returns {Object}
 */
oj.Collection.prototype._getInternal = function(id, options, deferred, fillIn) {
    var cid = id;
    if (fillIn === undefined) {
        fillIn = false;
    }
    if (id instanceof oj.Model) {
        // Get the cid
        cid = id.GetCid();
        // Get the id
        id = id.GetId();
    }
    else if (id !== undefined && id != null && id['id'] !== undefined) {
        id = id['id'];
    }
    
//    for (i = 0; i < this._getModelsLength(); i=i+1)
    var foundObj = null;
    this._getModels().some(function(model, i) {
        if (model !== undefined && model.Match(id, cid)) {
            var retObj =  oj.Collection._getModinfo(i, model);
            foundObj = retObj;
            return true;
        }
        return false;
    });
    
    if (foundObj) {
        if (deferred) {
            return oj.Object.__getPromise(function(resolve, reject) {
                resolve(foundObj);
            });
        }
        return foundObj;
    }
    // If virtual, might be undefined because it needs to be fetched
    if (this.__isVirtual()) {
        // Try to fetch using start ID.  cid not supported
        if (id === undefined && cid !== undefined) {
            return oj.Object.__getPromise(function(resolve, reject) {
                resolve(oj.Collection._getModinfo(-1, undefined));
            });
        }
        var self = this;
        return oj.Object.__getPromise(function(resolve, reject) {
            var resp = function (resp) {
                            if (resp != null) {                            
                                var index = self._getOffset();
                                // Check that the model at index is the right one
                                var model = self._getModel(index);
                                if (model !== undefined && model.Match(id, cid)) {
                                    resolve(oj.Collection._getModinfo(index, model));
                                }
                                else {
                                    resolve(oj.Collection._getModinfo(-1, undefined));
                                }
                            }
                            else {
                                resolve(oj.Collection._getModinfo(-1, undefined));
                            }
                       };

            // Go fetch
            var opts = {};
            oj.CollectionUtils.copyInto(opts, options || {});
            opts['context'] = self;
            opts['startID'] = id;
            opts['error'] = function(collection, error, options) {
                // Handle potential errors
                reject(error);
            }

            self._fetchInternal(opts, -1, fillIn).then(resp, function(e) { reject(e);});
        });
    }
    
    var undefinedModInfo = oj.Collection._getModinfo(-1, undefined);
    if (deferred) {
        return oj.Object.__getPromise(function(resolve, reject) {
            resolve(undefinedModInfo);
        });
    }
    return undefinedModInfo;
};
    
oj.Collection._getModinfo = function(index, model) {
    return {index: index, 'm': model};
};

oj.Collection.prototype['parse'] = function (response) {
    var prop;
    
    // Try to interpret ADFbc like controls where a collection is hanging off a property
    if (response instanceof Array) {
        return response;
    }
    
    if (!response) {
        return response;
    }
    
    // See if any of the properties contain arrays
    for (prop in response) {
        if (response.hasOwnProperty(prop)) {
            if (response[prop] instanceof Array) {
                return response[prop];
            }
        }
    }
    return response;
};

/**
 * 
 * @export
 * Tell the Collection to try and ensure that the given range is available locally.  
 * 
 * @param {number} start starting index to make local
 * @param {number} count number of elements to make local
 * @return {Object} a promise Object that calls done upon completion.  The promise will be passed an Object containing start and count properties that represent
 * the *actual* starting position and count of the items fetched, which may be fewer than what was requested
 */
oj.Collection.prototype.setRangeLocal = function(start, count) {
    var actual = this._getLocalRange(start, count);
    if (actual.start === start && actual.count === count) {
        return oj.Object.__getPromise(function (resolve, reject) {
            resolve(actual);
        });
    }
    
    // Manage the LRU - set model limit at least as high as the count we're trying to fetch
    var modelLimit = this._getModelLimit();
    if (modelLimit > -1 && modelLimit < count) {
        this['modelLimit'] = count;
    }
    var self = this;
    return oj.Object.__getPromise(function (resolve, reject) {
        self._setRangeLocalInternal(start, count, -1, {start:start, count:count}, resolve, reject, true);
    });
}
  
oj.Collection.prototype._setRangeLocalInternal = function(start, count, placement, original, resolve, reject, fill) {
    var self = this;
    var resp = function () {
                    var actual = self._getLocalRange(original.start, original.count);
                    if (fill && self._hasTotalResults() && actual.count < original.count) {
                        // The range wasn't fulfilled: try again                       
                        var newPlacement = actual.start + actual.count;
                        // Try the next block...don't repeat the request
                        var newStart = start + count;
                        if (newStart < self['totalResults']) {
                            self._setRangeLocalInternal(newStart, count, newPlacement, original, resolve, reject, fill);
                        }
                        else {
                            // Can't go any further
                            resolve(actual);
                        }
                    }
                    else {
                        resolve(actual);
                    }
               };
               
    // Go fetch
    var limit = this._getMaxLength(start, count);   
    // Get the greater of the limit-start or fetchSize
    if (this[oj.Collection._FETCH_SIZE_PROP] && this[oj.Collection._FETCH_SIZE_PROP] > limit-start) {
        limit = this[oj.Collection._FETCH_SIZE_PROP] + start;
    }
    // Adjust for no totalResults
    if (!this._hasTotalResults() && limit < start + count) {
        // We shouldn't be limited by the size of the current storage
        limit = start+count;
    }    

    // Now, to optimize, move start up to the first undefined model in the sequence
    var newStart = this._getFirstMissingModel(start, limit);
    if (newStart > start) {
        start = newStart;
        // Recheck the limit
        limit = this._getMaxLength(newStart, count);
    }
    var opts = this.__isVirtual() ? {'context': this, 'startIndex': start, 'fetchSize': limit-start} : {'context': this};
    opts['error'] = function(collection, error, options) {
        // Handle potential errors
        reject(error);
        return;
    }
    this._fetchInternal(opts, placement, placement > -1).then(resp, function(e) { reject(e);});
};

oj.Collection.prototype._getMaxLength = function(start, count) {
    var len = this._getModelsLength();
    if (len === 0) {
        // This is an exception: could be uninitialized
        return start + count;
    }
    return start + count > len ? len : start + count;    
};

/**
 * @export
 * Determine if every element of the given range is filled in locally
 * 
 * @param {number} start starting index to make local
 * @param {number} count number of elements to make local
 * @return {boolean} true if all elements are local, false otherwise
 */
oj.Collection.prototype.isRangeLocal = function(start, count) {
    var localRange = this._getLocalRange(start, count);
    return start === localRange.start && count === localRange.count;
};

// For a given range of models, return the actual range which are local within that set.  
oj.Collection.prototype._getLocalRange = function(start, count) {
    // Not virtual, local if there are any models
    if (!this.__isVirtual()) {
        if (this._getModelsLength() > 0) {
            return {start:start, count:count};
        }
        return {start:start, count:0};
    }
    var limit = this._getMaxLength(start, count);
    // Adjust for no totalResults
    if (!this._hasTotalResults() && limit < start + count) {
        // We don't know if it's local or not
        return {start:start, count:0};
    }
    if (limit === 0) {
        // There nothing here
        return {start:start, count:0};
    }
    var firstMissingModel = this._getFirstMissingModel(start, limit);
    if (firstMissingModel > -1) {
        return {start:start, count:(firstMissingModel-start)};
    }
    return {start:start,count:count};
};

// Return the first model between start and limit that's undefined
oj.Collection.prototype._getFirstMissingModel = function(start, limit) {
    for (var i = start; i < limit; i++) {
        if (this._getModel(i) === undefined) {
            return i;
        }
    }
    return -1;
};

/**
 * Loads the Collection object from the data service URL. Performs a data "read."
 * @param {Object=} options Options to control fetch<p>
 *                  success: a user callback called when the fetch has completed successfully. This makes the fetch an asynchronous process. The callback is called passing the Collection object, raw response, and the fetch options argument.<p>
 *                  error: a user callback function called if the fetch fails. The callback is called passing the collection object, xhr, and options arguments.<p>
 *                  add: if set, new records retrieved from the data service will be added to those models already in the collection. If not set, the records retrieved will be passed to the reset() method, effectively replacing the previous contents of the collection with the new data.  Not supported for virtual/paging cases.<p>
 *                  set: if true, fetch will try to use the set function to try and merge the fetched models with those already in the collection, on the client.  The default behavior is to reset the collection before adding back in the fetched models.  This default is the reverse of Backbone's current default.
 *                  startIndex: numeric index with which to start fetching Models from the server.  The page setting controls the number of Models to be fetched.  startID takes precedence over startIndex if both are specified.  If both are specified and startID isn't supported then startIndex will be used instead.<p>
 *                  startID: unique ID of the Model to start fetching from the server.  The page setting controls the number of Models to be fetched.  Note if this is not supported by the server then startID will be ignored.<p>
 *                  since: fetch records having a timestamp since the given UTC time
 *                  until: fetch records having a timestamp up to the given UTC time
 *                  fetchSize: use specified page size instead of collection's setting
 * @return {Object} xhr object
 * @export
 */
oj.Collection.prototype.fetch = function (options) {
    return this._fetchInternal(options, -1, false);
};

// fillIn is used to indicate that this fetch is just the result of a get() or part of an add(), etc., when virtual
oj.Collection.prototype._fetchInternal = function(options, placement, fillIn) {
    function doReset(collection, opt, fillIn) {
        if (!collection.__isVirtual()) {
           // If we're not doing a "fetch add", delete all the current models
           if (!opt['add'] && !opt.useset) {
                // Reset with internal model
                collection.reset();
            }
        }
        else {
            // If we're not infilling based on an at, get, etc., delete all the current local models
            if (!fillIn) {
               collection._resetModelsToFullLength();
            }
        }
    }
    
    var opt = options || {}, success = opt['success'], self;

    if (opt['set']) {
        opt.useset = opt['set'] ? true : false;
    }
 
    // Set up the parsing option
    if (opt['parse'] === undefined) {
        opt['parse'] = true;
    }
    self = this;
    
    opt['success'] = function (response, status, xhr) {
        // Pull any virtualization properties out of the response
        self._setPagingReturnValues(response, options);
        
        // Run the entire returned dataset through the collection's parser (either default no-op or user specified)
        var data = self['parse'](response, options);
        var dataList = null;
                
        if (!opt['add'] && !self['model']) {
             // We're not doing a "fetch add" and we don't have a model set on the collection
             if (!fillIn) {
                if (self.__isVirtual()) {
                    // Virtual case only
                    // Clean out the collection
                    doReset(self, opt, fillIn);
                    
                    var manageLRU = false;
                    // Check for passed in offset
                    if (placement === -1) {
                        manageLRU = true;
                        placement = self._getOffset();
                    }
                    // Put the new data in
                    dataList = self._putDataIntoCollection(data, placement, manageLRU);
                }
                else {
                    // New backbone option to not reset
                    if (opt.useset) {
                        self._setInternal(data, false, opt, false);
                    }
                    else {
                        // Replace the data in the collection with a new set (non virtual)
                        self.reset(data);             
                    }
                }
             }
         }
         else {     
             // We have a model and/or we're doing a "fetch add"
             // Clean out the old models if we're not "adding" or infilling for virtual
             doReset(self, opt, fillIn);
             
             // Parse each returned model (if appropriate), and put it into the collection, either from the zeroth offset if non-virtual
             // or using the appropriate offset if virtual
             try {
                var manageLRU = false;
                // Check for passed in offset
                if (placement === -1) {
                    manageLRU = true;
                    placement = self._getOffset();
                }
                dataList = self._fillInCollectionWithParsedData(data, placement, manageLRU, opt);
             }
             catch (e) {
                 if (opt['error']) {
                     opt['error'].call(oj.Model.GetContext(options, self), self, e, options);
                 }
                 return;
             }
         }
         if (self.__isVirtual()) {
             // Take in the number of records actually fetched
             if (dataList) {
                 self['lastFetchCount'] = dataList.length;
             }
         }
         
         // Fire the sync event
         self.TriggerInternal(false, oj.Events.EventType['SYNC'], self, response, opt);
         // Call the caller's success callback, if specified
         if (success) {
              success.call(oj.Model.GetContext(options, self), self, response, opt);
         }
     };
     // Make the actual fetch call using ajax, etc.
     return this._fetchCall(opt);
};

// Puts server data into an empty virtual collection using a "silent add"
oj.Collection.prototype._putDataIntoCollection = function(data, placement, manageLRU) {
    var dataList;
    
    if (data) {
       dataList = (data instanceof Array) ? data : [data];  
            
       var addOpt = {};
       // Only manage the LRU if we're not trying to achieve a range
       if (manageLRU) {
            this._manageLRU(dataList.length);
       }
       var insertPos = placement;
       var virtual = this.__isVirtual();
       var prevItem = null;
       for (var i = 0; i < dataList.length; i=i+1) {
           if (virtual) {
               addOpt = {'at': insertPos};
               prevItem = this._atInternal(insertPos, null, true, false);
           }
           // Don't fire add events
           addOpt['silent'] = true;           
           this._addInternal(dataList[i], addOpt, true, false);
           // If virtual, make sure the item was really added where we thought--in other words, what's there now shouldn't match what was there
           // otherwise could be duplicate id and don't increment counter
           if (this._atInternal(insertPos, null, true, false) !== prevItem) {
               insertPos++;
           }
       }
    }           
    return dataList;
};

// Parse each model returned, if appropriate, and push them into the (empty) collection with appropriate offsets if virtual
oj.Collection.prototype._fillInCollectionWithParsedData = function(data, placement, manageLRU, opt) {
    opt = opt || {};
    var parse = opt['parse'];
    var modelInstance = oj.Collection._createParsingModel(this);

    if (data) {
       var dataList = (data instanceof Array) ? data : [data];  

       var addOpt = {}, parsedModel;
       
       // Only manage the LRU if we're not trying to achieve a range
       if (manageLRU) {
            this._manageLRU(dataList.length);
       }
       var virtual = this.__isVirtual();
       if (opt.useset && !virtual) {
           // New backbone option
           for (var i = 0; i < dataList.length; i=i+1) {
               if (modelInstance && parse) {
                   parsedModel = modelInstance.parse(dataList[i]);
               }
               else {
                   parsedModel = dataList[i];
               }

               dataList[i] = parsedModel;
           }
           this._setInternal(dataList, false, opt, false);
       }
       else {
            var prevItem = null;
            var insertPos = placement;
            for (var i = 0; i < dataList.length; i=i+1) {
                if (modelInstance && parse) {
                    parsedModel = modelInstance.parse(dataList[i]);
                }
                else {
                    parsedModel = dataList[i];
                }

                if (virtual) {
                    addOpt = {'at': insertPos};
                    prevItem = this._atInternal(insertPos, addOpt, true, false);
                }
                // Don't fire add events
                addOpt['silent'] = true;
                this._addInternal(parsedModel, addOpt, true, false);
                // If virtual, make sure the item was really added where we thought--in other words, what's there now shouldn't match what was there
                // otherwise could be duplicate id and don't increment counter
                if (this._atInternal(insertPos, null, true, false) !== prevItem) {
                    insertPos++;
                }           
            }
        }    
    }
    return dataList;
};
    
// Used in virtualization to conduct server-based searches: returns list of fetched models via a promise but does not add them to the collection
// model list
oj.Collection.prototype._fetchOnly = function(options) {
    var opt = options || {},
        success = opt['success'], 
        parsedModel, self;

    if (opt['parse'] === undefined) {
        opt['parse'] = true;
    }
    self = this;
    
    opt['success'] = function (response, status, xhr) {
        var i, modelInstance;
        
        var data = self['parse'](response, options), dataList = null, fetchedModels = [];
                
        if (!opt['add'] && !self['model']) {
            dataList = (data instanceof Array) ? data : [data];              
         }
         else {
             modelInstance = oj.Collection._createParsingModel(self);
             
             if (data) {
                dataList = (data instanceof Array) ? data : [data];  
                
                for (i = 0; i < dataList.length; i=i+1) {
                    if (modelInstance && opt['parse']) {
                        parsedModel = modelInstance.parse(dataList[i]);
                    }
                    else {
                        parsedModel = dataList[i];
                    }
                    fetchedModels.push(self._newModel(parsedModel));
                }
             }
         }
         
         self.TriggerInternal(false, oj.Events.EventType['SYNC'], self, response, opt);
         if (success) {
              success.call(oj.Model.GetContext(options, self), self, fetchedModels, opt);
         }
     };
     return this._fetchCall(opt);
};

oj.Collection._createParsingModel = function(collection) {
    if (collection['model']) {
        // Create model instance to use for parsing
        if (oj.Model.IsFunction(collection['model'])) {
           return new collection['model']();
        }
        return new collection['model'].constructor();
    }
};

oj.Collection.prototype._fetchCall = function(opt) {
     try {
        return oj.Model._internalSync("read", this, opt);
     }
     catch (e) {
         // Some kind of error: trigger an error event
        this.TriggerInternal(false, oj.Events.EventType['ERROR'], this, null, opt);
        throw e;
     }
 };

oj.Collection.prototype._resetModelsToFullLength = function() {
    var totalResults =  this['totalResults'];
    if (totalResults !== undefined && this._getModelsLength() !== totalResults) {
        // Make sure to set up the array if the length changes (i.e., from 0 to totalResults--need to preallocate)
        this._setModels(new Array(totalResults));
        this._resetLRU();
        this._setLength();
        return true;
    }
    return false;
};

oj.Collection.prototype._getFetchSize = function(options) {
    options = options || {};
    return options[oj.Collection._FETCH_SIZE_PROP] || this[oj.Collection._FETCH_SIZE_PROP];
};

// Are we doing virtualization/paging?
oj.Collection.prototype.__isVirtual = function() {
    return this._getFetchSize(null) > -1;
};

oj.Collection.prototype._getReturnProperty = function(customObj, response, property, optionValue, defaultValue) {
    var value = parseInt(oj.Collection._getProp(customObj, response, property), 10);
    if (value === undefined || value === null || isNaN(value)) {
        // use fetchsize            
        return optionValue ? optionValue : defaultValue;
    }
    return value;
};

// Parse out some of the paging return values we might expect in a virtual response
oj.Collection.prototype._setPagingReturnValues = function(response, options) {
    var customObj = {};
    // See if there's a custom call out
    if (this['customPagingOptions']) {
        customObj = this['customPagingOptions'].call(this, response);
        if (!customObj) {
            customObj = {};
        }
    }
    // What limit was actually used to generate this response?
    options = options || {};
    this['lastFetchSize'] = this._getReturnProperty(customObj, response, 'limit', options['fetchSize'], this['fetchSize']);
    
    // What offset was actually used to generate this response?
    this['offset'] = this._getReturnProperty(customObj, response, 'offset', options['startIndex'], 0);

    // How many records actually came back?
    this['lastFetchCount'] = this._getReturnProperty(customObj, response, 'count', this['lastFetchCount'], this['lastFetchCount']);
    
    // What is the total number of records possible for this collection?
    this['totalResults'] = this._getReturnProperty(customObj, response, 'totalResults', this['totalResults'], this['totalResults']);
    
    // Is there more?
    this['hasMore'] = this._getHasMore(oj.Collection._getProp(customObj, response, 'hasMore'), 
                                       this['offset'], this['lastFetchSize'], this['totalResults']);
                              
    // Was fetchSize set?  If not, set it to limit
    if (!this.__isVirtual() && this['totalResults'] && this['totalResults'] !== this['lastFetchCount'] && this['lastFetchSize']) {
        this.setFetchSize(this['lastFetchSize']);
    }
};

oj.Collection.prototype._getHasMore = function(hasMore, offset, lastFetchSize, totalResults) {
    if (hasMore && hasMore !== undefined) {
        return hasMore;        
    }
    // Not there: figure it out.  It's true unless we're walking off the end
    return (offset + lastFetchSize > totalResults) ? false : true;
};

oj.Collection._getProp = function(custom, response, prop) {
    if (custom.hasOwnProperty(prop)) {
        return custom[prop];
    }
    return response ? response[prop] : undefined;
};

oj.Collection.prototype._getOffset = function() {
    return (this['offset'] !== undefined ? this['offset'] : 0);
};

/**
 * Creates a new model, saves it to the data service, and adds it on to the collection.
 * @param {Object=} attributes Set of attribute/value pairs with which to initialize the new model object, or a new Model object
 * @param {Object=} options Options to control save (see oj.Model.save).  Plus:<p>
 *                          deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object|boolean} new model or false if validation failed.  If virtual, returns a promise that calls with the new model
 * @export
 */
oj.Collection.prototype.create = function (attributes, options) {
    function doSave(collection, newModel, validate, opt) {
/*        if (newModel.save(attributes instanceof oj.Model ? null : attributes, opt) === false) {
            // Invalid
            options['validationError'] = newModel['validationError'];
            collection.TriggerInternal(false, oj.Events.EventType['INVALID'], collection, newModel['validationError'], opt);
            if (validate) {
                collection._unlistenToModel(newModel);
                collection.remove(newModel);
                return false;
            }
        }*/
        newModel.save(attributes instanceof oj.Model ? null : attributes, opt);
        
        return newModel;
    }
    
    var deferred = this._getDeferred(options);
    options = options || {};
    // Save the user's context and callback, if any
    var newModel = this._newModel(attributes, true, options),
        callback = options['success'],
        context = options['context'], validate = options['validate'];
    options['context'] = this;
    options['success'] = function(model, resp, options) {
            if (callback) {
                callback.call(context != null ? context : this, model, resp, options);
            }
        };
        
    // Did validation pass?
    if (newModel == null) {       
        return false;
    }
    
    // Force a save in case user has set value of idAttribute on the new Model
    options['forceNew'] = newModel.GetId() != null;
    
    newModel.SetCollection(this);
    var self = this;
    if (deferred || this.__isVirtual()) {
        return oj.Object.__getPromise(function (resolve, reject) {
            self.add(newModel, {'merge':true, 'deferred':true})
                    .then(function() {
                            options['success'] = function(model, resp, options) {
                                    if (callback) {
                                        callback.call(context != null ? context : self, model, resp, options);
                                    }
                                    resolve(model);
                                };
                                var model = doSave(self, newModel, validate, options);
                                // make sure that success is called first if successful...promise resolved
                                // second
                                if (!model) {
                                    // Failed: make sure we resolve the promise.  Otherwise promise will
                                    // be resolved by success call, above
                                    resolve(model);
                                }
                            });
                        });
    }
    
    this.add(newModel, {merge:true});
    return doSave(this, newModel, validate, options);
};

/**
 * @export
 * Return a list of all the values of attr found in the Collection
 * 
 * @param {string} attr attribute to return
 * @return {Object} array of values of attr
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.pluck = function(attr) {
    var arr = [], i;
    
    this._throwErrIfVirtual("pluck");
    
    for (i = 0; i < this._getLength(); i=i+1) {
        arr.push(this.at(i).get(attr));
    }
    return arr;
};

/**
 * @export
 * Return an array of models that contain the given attribute/value pairs.  Note that this function, along with findWhere, expects server-resolved
 * filtering to return *all* models that meet the criteria, even in virtual cases.  The fetchSize will be set to the value of totalResults for this call to indicate that
 * all should be returned.
 * 
 * @param {Object|Array} attrs attribute/value pairs to find.  The attribute/value pairs are ANDed together.  If attrs is an array of attribute/value pairs, then these are ORed together
 *                             If the value is an object (or an array of objects, in which case the single attribute must meet all of the value/comparator conditions), then if it has both 'value' and 'comparator' parameters these will be interpreted as
 *                             expressions needing custom commparisons.  The comparator value may either be a string or a comparator callback function.
 *                             Strings are only valid where the filtering is sent back to the data service (virtual collections).  In the case of a comparator
 *                             function, the function always takes the signature function(model, attr, value), and for non-virtual collections, is called for each 
 *                             Model in the collection with the associated attribute and value.  The function should return true if the model meets the attribute/value
 *                             condition, and false if not.  For cases where the filtering is to be done on the server, the function will be called once per attr/value pair
 *                             with a null model, and the function should return the string to pass as the comparison in the expression for the filtering parameter
 *                             in the URL sent back to the server.  Note that the array of value object case is really only meaningful for server-evaluated filters where
 *                             a complex construction on a single attribute might be needed (e.g., x>v1 && x <=v2)
 *                             For example:<p>
 *                             {Dept:53,Name:'Smith'}<p>
 *                             will return an array of models that have a Dept=53 and a Name=Smith, or, for server-filtered
 *                             collections, a ?q=Dept=53+Name=Smith parameter will be sent with the URL.<p>
 *                             [{Dept:53},{Dept:90}]<p>
 *                             will return all models that have a Dept of 53 or 90.  Or, ?q=Dept=53,Dept=90 will be sent to the server.<p>
 *                             {Dept:{value:53,comparator:function(model, attr, value) { return model.get(attr) !== value;}}}<p>
 *                             will return all models that do not have a Dept of 53.<p>
 *                             {Dept:{value:53,comparator:'<>'}}<p>
 *                             For server-evaluated filters, a parameter ?q=Dept<>53 will be sent with the URL.  This form is an
 *                             error on locally-evaluated colleection filters<p>
 *                             {Dept:{value:53,comparator:function(model, attr, value) { return "<>";}}}<p>
 *                             expresses the same thing for server-evaluated filters<p>
 *                             {Dept:[{value:53,comparator:'<'},{value:90,comparator:'<'}]}<p>
 *                             For server-evaluated filters, a parameter ?q=Dept>53+Dept<93 will be sent to the server<p>
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not<p>
 * 
 * @return {Object} array of models.  If virtual or deferred, a promise that calls with the returned array from the server
 */
oj.Collection.prototype.where = function(attrs, options) {
    options = options || {};
    var deferred = this._getDeferred(options);
    var self = this;
    if (this.__isVirtual()) {
        return oj.Object.__getPromise(function(resolve, reject) {
            var success = function(collection, fetchedModels, options) {
                resolve(fetchedModels);
            };
            // Send the attributes for a server-based filter; also indicate that we need *all* the attributes.  In the standard
            // REST URL construction this is accomplished by leaving off fetchSize/start indices, etc.
            var opt = {'query':attrs,  
                       'all': true,
                       'success': success,
                       'error': function(collection, xhr, error) {
                           reject({'collection':collection,'xhr':xhr,'error':error});
                       }};
            self._fetchOnly(opt);
        });
    }
    
    var arr = [], i, m;
    for (i = 0; i < this._getLength(); i=i+1) {
        m = this.at(i);
        if (m.Contains(attrs)) {
            arr.push(m);
        }
    }
    if (deferred) {
        return oj.Object.__getPromise(function(resolve, reject) {
            resolve(arr);
        });
    }
    return arr;
};

/**
 * @export
 * Return a collection only containing models that contain the given attribute/value pairs
 * Note that this returns a non-virtual collection with all the models returned by the server
 * even if the original collection is virtual.  Virtual collections doing filtering on the server should return all models that meet
 * the critera.  @see (@link where)
 * @see (@link where) for complete documentation of the parameters
 *
 * @return {Object} A collection, or if virtual or deferred, a promise that calls with the Collection
 */
oj.Collection.prototype.whereToCollection = function(attrs, options) {
    options = options || {};
    var deferred = this._getDeferred(options);
    var self = this;
    if (this.__isVirtual() || deferred) {
        return oj.Object.__getPromise(function(resolve, reject) {
            return self.where(attrs, options).then(function (models) {
                                                var collection = self._makeNewCollection(models);
                                                resolve(collection);
                                            });
                                        });
    }
    else {
        var models = this.where(attrs, options);
        var newCollection = this._makeNewCollection(models);
        newCollection[oj.Collection._FETCH_SIZE_PROP] = -1;
        newCollection._setLength();
        return newCollection;
    }
};
    
oj.Collection.prototype._makeNewCollection = function(models) {
    var collection = this._cloneInternal(false);
    collection._setModels(models);
    collection._resetLRU();
    collection._setLength();
    return collection;
};

oj.Collection.prototype._throwErrIfVirtual = function(func) {
    if (this.__isVirtual()) {
        throw new Error(func + " not valid on a virtual Collection");
    }
};

/**
 * @export
 * Return an array whose entries are determined by the passed-in iterator function.  The iterator will be called for each model in the collection
 * 
 * @param {function(Object)} iterator function to determine the mapped value for each model
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Array} array of values determined by calls to iterator for each model
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.map = function(iterator, context) {
    var retArr = [], value;
    
    this._throwErrIfVirtual("map");
    
//    for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        value = iterator.call(context || this, model);
        retArr.push(value);
    });
    return retArr;
};

/**
 * @export
 * Iterates over the models in the collection and calls iterator
 * 
 * @param {function(Object)} iterator function to call for each model
 * @param {Object=} context context with which to make the calls on iterator
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.each = function(iterator, context) {
    this._throwErrIfVirtual("each");
    
    this._getModels().forEach(iterator, context);
};

/**
 * @export
 * Return the length of the collection
 * @returns {number} length of the collection
 */
oj.Collection.prototype.size = function() { 
    return this._getLength();
};

/**
 * @export
 * Return the models sorted determined by the iterator function (or property, if a string value)
 * 
 * @param {String|function(Object)} iterator method called or property used to get the sorting value
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Object} models sorted using iterator
 */
oj.Collection.prototype.sortBy = function(iterator, context) {
    var retArr = [], self;

    this._throwErrIfVirtual("sortBy");
    
//    for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        retArr.push(model);
    });
    self = this;
    
    retArr.sort(function(a, b) {
            var keyA, keyB;

            if (oj.Model.IsFunction(iterator)) {        
                // "sortBy" comparator option
                keyA = iterator.call(context || self, a);
                keyB = iterator.call(context || self, b);
                return oj.Collection._compareKeys(keyA, keyB, self['sortDirection']);
            }
            // String option
            keyA = a.get(iterator);
            keyB = b.get(iterator);
            return oj.Collection._compareKeys(keyA, keyB, self['sortDirection']);            
        });

    return retArr;
};

/**
 * @export
 * Return the collection with models grouped into sets determined by the iterator function (or property, if a string value)
 * 
 * @param {String|function(Object)} iterator method called or property used to get the group key
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Object} models grouped into sets
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.groupBy = function(iterator, context) {
    var retObj = {}, groupVal;
    
    this._throwErrIfVirtual("groupBy");
    
//    for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        if (oj.Model.IsFunction(iterator)) {
            groupVal = iterator.call(context || this, model);
        }
        else {
            groupVal = model.get(iterator);
        }
        if (retObj[groupVal] === undefined) {
            retObj[groupVal] = [];
        }
        retObj[groupVal].push(model);
    }, this);
    return retObj;    
};

/**
 * @export
 * Return the "minimum" model in the collection, as determined by calls to iterator.  The return value of iterator (called with a model passed in) will be compared against the current minimum
 * 
 * @param {function(Object)} iterator function to determine a model's value for checking for the minimum
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Object} "Minimum" model in the collection
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.min = function(iterator, context) { 
    var minModel = {}, minModelValue, currValue;
    
    this._throwErrIfVirtual("min");
    
    if (this._getModelsLength() == 0) {
        return null;        
    }
    // Get vals started
    minModel = this._getModel(0);
    minModelValue = iterator.call(context || this, this._getModel(0));
    
    //for (i = 1; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model, i) {
        if (i >= 1) {
            currValue = iterator.call(context || this, model);
            if (currValue < minModelValue) {
                minModel = model;
                minModelValue = currValue;
            }
        }
    }, this);
    return minModel;
};

/**
 * @export
 * Return the "maximum" model in the collection, as determined by calls to iterator.  The return value of iterator (called with a model passed in) will be compared against the current maximum
 * 
 * @param {function(Object)} iterator function to determine a model's value for checking for the maximum
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Object} "Maximum" model in the collection
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.max = function(iterator, context) { 
    var maxModel = {}, maxModelValue, currValue;
    
    this._throwErrIfVirtual("max");
    if (this._getModelsLength() == 0) {
        return null;        
    }
    // Get vals started
    maxModel = this._getModel(0);
    maxModelValue = iterator.call(context, this._getModel(0));
    
//    for (i = 1; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model, i) {
        if (i >= 1) {
            currValue = iterator.call(context || this, model);
            if (currValue > maxModelValue) {
                maxModel = model;
                maxModelValue = currValue;
            }
        }
    }, this);
    return maxModel;
};

/**
 * @export
 * Return an array of models that cause iterator to return true
 * 
 * @param {function(Object)} iterator function to determine if a model should be included or not
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {Array} array of models that cause iterator to return true
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.filter = function(iterator, context) {
    var retArr = [];
    
    this._throwErrIfVirtual("filter");
    
//    for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        if (iterator.call(context || this, model)) {
            retArr.push(model);
        }
    });
    return retArr;
};

/**
 * @export
 * Return an array of models minus those passed in as arguments
 * @param {...Object} var_args models models to remove from the returned array
 * @returns {Array} array of models from the collection minus those passed in to models
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.without = function(var_args) {
    var retArr = [], j, id, cid, add;
    
    this._throwErrIfVirtual("without");
    
    var model;
    for (var i = 0; i < this._getModels().length; i++) {
        add = true;
        model = this._getModels()[i];
        for (j = 0; j < arguments.length; j=j+1) {
            // Get the cid
            cid = arguments[j].GetCid();
            // Get the id
            id = arguments[j].GetId();             
            if (model.Match(id, cid)) {
                add = false;
                break;
            }
        }
        if (add) {
            retArr.push(model);
        }
    }
    return retArr;    
};

/**
 * @export
 * Determine if the collection has any models
 * 
 * @returns {boolean} true if collection is empty
 */
oj.Collection.prototype.isEmpty = function() {
    return this._getLength() === 0;
};

/**
 * @export
 * Return true if any of the models in the collection pass the test in the iterator function
 * 
 * @param {function(Object)} iterator function to determine if a model 'passes'
 * @param {Object=} context context with which to make the calls on iterator
 * @returns {boolean} true if any of the models cause the iterator function to return true
 * 
 * @throws {Error} when called on a virtual/paging Collection
 */
oj.Collection.prototype.any = function(iterator, context) {
    this._throwErrIfVirtual("any");
    
    var model;
    for (var i = 0; i < this._getModelsLength(); i=i+1) {
        model = this._getModel(i);
        if (iterator.call(context || this, model)) {
            return true;
        }
    }
    return false;
};

/**
 * @export
 * A version of where that only returns the first element found
 * 
 * @param {Object|Array} attrs attribute/value pairs to find.  
 * @see (@link where) for more details and examples.
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not<p>
 * 
 * @returns {Object} first model found with the attribute/value pairs.  If virtual or deferred, a promise that calls with the returned array from the server
 */
oj.Collection.prototype.findWhere = function(attrs, options) {
    var deferred = this._getDeferred(options);
    var self = this;
    if (this.__isVirtual() || deferred) {
        return oj.Object.__getPromise(function(resolve, reject) {
            self.where(attrs, options).then(function(modelList) {
                                                        if (modelList && modelList.length > 0) {
                                                            resolve(modelList[0]);
                                                        }
                                                        resolve(null);
                                                    });
                                                });
    }
    
    var arr = this.where(attrs);
    if (arr.length > 0) {
        return arr[0];
    }
    return null;
};

/**
 * @export
 * Return a shallow copy of the models from start to end (if specified), in an array
 * 
 * @param {number} start model to start the return array with
 * @param {number=} end model to end the return array with, if specified (not inclusive).  If not, returns to the end of the collection
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Array} array of model objects from start to end, or a promise that calls specifying the returned array when done
 */
oj.Collection.prototype.slice = function(start, end, options) {
    var deferred = this._getDeferred(options);
    var ret = [], i;
    if (end === undefined) {
        if (this._isVirtual && !this._hasTotalResults()) {
            // We can't set the end: throw an error
            throw new Error("End must be set for virtual collections with no totalResults");
        }
        end = this._getModelsLength();
    }

    if (deferred || this.__isVirtual()) {
        // Loop using deferred
        return this.IterativeAt(start, end);
    }

    for (i = start; i < end; i=i+1) {
        ret.push(this._getModel(i));
    }
    return ret;
};

/**
 * @export
 * Update the collection with a model or models.  Depending on the options, new models will be added, existing models will be merged, and unspecified models will be removed.
 * The model cid is used to determine whether a given model exists or not.
 * 
 * @param {Object} models an array of or single model with which to update the Collection
 * @param {Object=} options add:false stops the addition of new models<p>
 *                          remove: false stops the removal of missing models<p>
 *                          merge:false prevents the merging of existing models<p>
 *                          silent: true prevents notifications on adds, removes, etc.<p>
 *                          deferred: if true, return a promise as though this collection were virtual whether it is or not
 * 
 * @returns {Object|null} if deferred or virtual, return a promise when the set has completed
*/
oj.Collection.prototype.set = function(models, options) {
    var deferred = this._getDeferred(options);
    return this._setInternal(models, true, options, deferred || this.__isVirtual());
};

oj.Collection._removeAfterSet = function(collection, remove, foundModels, options) {
    // Now remove models that weren't found
    // get an array of all models
    if (remove) {    
        for (var i = collection._getModelsLength()-1; i >= 0; i=i-1) {
            if (foundModels.indexOf(i) == -1) {
                collection._removeInternal(collection._getModel(i), i, options);
            }
        }
    }       
};

oj.Collection.prototype._setInternal = function(models, parse, options, deferred) {
    // Determine if any of the options are set
    options = options || {};
    var add = options['add'] === undefined ? true : options['add'],
        remove = options['remove'] === undefined ? true : options['remove'],
        merge = options['merge'] === undefined ? true : options['merge'],
        foundModels = [], currModel = null, i, modelList;        

    if (parse) {
        models = this['parse'](models);
    }

    modelList = oj.Model.IsArray(models) ? models : [models];

    if (deferred) {
        return this._deferredSet(modelList, options, remove, add, merge, parse);
    }
    
    // Go through the passed in models and determine what to do
    for (i = 0; i < modelList.length; i=i+1) {
        currModel = this._updateModel(this._newModel(modelList[i], parse, options), add, merge, deferred);
        if (currModel !== -1) {
            foundModels.push(currModel);
        }
    }
        
    oj.Collection._removeAfterSet(this, remove, foundModels, options);
};

// Handle the updates/removes on virtual collections
oj.Collection.prototype._deferredSet = function(modelList, options, remove, add, merge, parse) {
    var foundModels = [], i;
      
    // Go through the passed in models and determine what to do
    var self = this;
    return oj.Object.__getPromise(function(allResolve, allReject) {
        var doTask = function(index) {
                        return oj.Object.__getPromise(function(resolve, reject) {
                            self._updateModel(self._newModel(modelList[index], parse, options), add, merge, true).then(function (currModel) {
                                                if (currModel !== -1) {
                                                    foundModels.push(currModel);
                                                }
                                                resolve(index);                                        
                                            });
                                        });
        };

        var currentStep = doTask(0);
        var nextTask = function(j) {
                            return doTask(j+1);
        };

        for (i = 1; i < modelList.length; i=i+1) {
           currentStep = currentStep.then(nextTask);
        }
        currentStep.then(function() {
            oj.Collection._removeAfterSet(self, remove, foundModels, options);
            allResolve();
        });
    });
};


// Return the index of the given model after updating it, if it was found.  Otherwise it is added and a -1 is returned
oj.Collection.prototype._updateModel = function(model, add, merge, deferred) {
    function update(collection, found, deferred) {
        var index = found ? found.index : -1;
        var foundModel = found ? found['m'] : null;

        if (foundModel) {
            if (merge) {
                // Do merge if not overridden
                var opt = {'merge':merge};
                if (deferred) {
                    return oj.Object.__getPromise(function(resolve, reject) {                    
                        collection._addInternal(model, opt, false, true).then(function() {
                            resolve(index);
                        });
                    });
                }
                collection.add(model, opt);
            }
        }
        else if (add) {
            if (deferred) {
                return oj.Object.__getPromise(function(resolve, reject) {
                    collection.add(model, {'deferred':true}).then(function() {
                        resolve(collection._getLength()-1);
                    });
                });
            }
            collection.add(model);
            index = collection._getLength()-1;
        }
        return index;
    }
    
    // Check to see if this model is in the collection
    if (deferred || this.__isVirtual()) {
        var self = this;
        
        return oj.Object.__getPromise(function(resolve, reject) {
            self._getInternal(model, null, deferred).then(function(found) {

                update(self, found, true).then(function (index) {
                    resolve(index);
                });
            });
        });
    }
    
    var found = this._getInternal(model);
    return update(this, found, false);
};

/**
 * Return a copy of the Collection's list of current attribute/value pairs.
 * @return {Object} a copy of all the Collection's current sets of attribute/value pairs.
 * 
 * @throws {Error} when called on a virtual/paging Collection
 * @export
 */
oj.Collection.prototype.toJSON = function() {
    var retArr = [];
    
    this._throwErrIfVirtual("toJSON");
    
    //for (i = 0; i < this._getModelsLength(); i=i+1) {
    this._getModels().forEach(function(model) {
        retArr.push(model.toJSON());
    });
    return retArr;
};

/**
 * Return the first model object in the collection, or an array of the first n model objects from the collection.
 * @param {number=} n Number of model objects to include in the array, starting with the first. 
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Array|null} An array of n model objects found in the collection, starting with the first. If n is not included,
 *                      returns all of the collection's models as an array.  Returns a promise that returns the array or model if deferred or virtual
 * @export
 */
oj.Collection.prototype.first = function(n, options) {
    var deferred = this._getDeferred(options);
    var elementCount = this._getLength(),
        retArray = [], 
        i;

    if (n) {
        elementCount = n;
    }
    else {
        n = 1;
    }
    
    var virtual = this.__isVirtual() || deferred;
    
    if (n === 1) {
        if (virtual) {
            return this._deferredAt(0, null);
        }
        
        if (this._getModelsLength() > 0) {
            return this._getModel(0);
        }
        return null;
    }
   
    if (elementCount > this._getModelsLength()) {
        if (this.__isVirtual() && !this._hasTotalResults()) {
            // Virtual, no total results: don't restrict elementCount
        }
        else {
            elementCount = this._getModelsLength();
        }
    }
    
    if (virtual) {
        return this.IterativeAt(0, elementCount);
    }
    
    for (i = 0; i < elementCount; i=i+1) {
        retArray.push(this._getModel(i));
    }
    return retArray;
};

/**
 * Return the array index location of the given model object.
 * @param {Object} model Model object (or Model id) to locate 
 * @param {Object=} options deferred: if true, return a promise as though this collection were virtual whether it is or not

 * @return {number} The index of the given model object, or a promise that will call with the index when complete.
 *                  If the object is not found, returns -1.
 * @export
 */
oj.Collection.prototype.indexOf = function(model, options) {
    var location;
    var deferred = this._getDeferred(options);
    
    if (this.__isVirtual() || deferred) {
        return this._getInternal(model, null, true).then(function(loc) {
                                                            return loc.index;
                                                        });
    }
    location = this._getInternal(model);
    
    return location.index;
};

// Only look on models already fetched
oj.Collection.prototype._localIndexOf = function(model) {
    var location = this._getLocalInternal(model);
    
    return location !== undefined ? location.index : -1;
};

/**
 * @export
 * Remove the last model in the collection and return it
 * @param {Object=} options silent: if set, do not fire a remove event <p>
 *                  deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} the model that was removed, or a promise that will call with the model that was removed when complete
 */
oj.Collection.prototype.pop = function(options) {
    var deferred = this._getDeferred(options);
    if (this.__isVirtual() || deferred) {
        var self = this;
        return this.at(this._getLength()-1, {'deferred':deferred}).then(function (model) {             
            self.remove(model, options);
            return model;
        });        
    }
    
    var m = this.at(this._getLength()-1);
    this.remove(m, options);
    return m;
};

/**
 * @export
 * Add the given model to the end of the Collection
 * @param {Object} m model to add to the end of the Collection
 * @param {Object=} options same options as add<p>
 *                  deferred: if true, return a promise as though this collection were virtual whether it is or not
 * @return {Object} if deferred or virtual, a promise that will be called when the function is done.  Otherwise undefined
 */
oj.Collection.prototype.push = function(m, options) {
    var deferred = this._getDeferred(options);
    this._manageLRU(1);
    return this._addInternal(m, options, false, deferred);
};

/**
 * @export
 * Returns the index of the last location of the given model.  Not supported in virtual cases.
 * @param {Object} model Model object to locate
 * @param {number=} fromIndex optionally start search at the given index
 * @return {number} The last index of the given model object.  If the object is not found, returns -1.
 */
oj.Collection.prototype.lastIndexOf = function(model, fromIndex) {
    var i;
    
    this._throwErrIfVirtual("lastIndexOf");
    
    if (fromIndex === undefined) {
        fromIndex = 0;
    }
    
    for (i = this._getLength()-1; i >= fromIndex; i=i-1) {
        if (oj.Object.__innerEquals(model, this.at(i))) {
            return i;
        }
    }
    return -1;
};

oj.Collection.prototype._getSortAttrs = function(sortStr) {
    if (sortStr === undefined) {
        return [];
    }
    return sortStr.split(",");
};

// Return a URL query string based on an array of or a single attr/value pair set
oj.Collection._getQueryString = function(q) {
    function expression(left, right, compare) {
        return left + compare + right;
    }
    
    var queries = oj.Model.IsArray(q) ? q : [q];
    var str = "", query, exp, i, prop;
    for (i = 0; i < queries.length; i++) {
        query = queries[i];
        for (prop in query) {
            if (query.hasOwnProperty(prop)) {
                var val = oj.Model.IsArray(query[prop]) ? query[prop] : [query[prop]];
                for (var j = 0; j < val.length; j++) {
                    if (oj.Model.IsComplexValue(val[j])) {
                        var value = val[j]['value'];
                        var compare = null;
                        var comparator = val[j]['comparator'];
                        if (oj.Model.IsFunction(comparator)) {
                            compare = comparator(null, prop, value);
                        }
                        else {
                            compare = comparator;
                        }
                        exp = expression(prop, value, compare);
                    }
                    else {
                        exp = expression(prop, query[prop], "=");
                    }
                    str += exp + "+";
                }
            }
        }
        // Remove trailing '+'
        str = str.substring(0, str.length-1) + ",";
    }
    // Remove trailing ','
    if (str.substring(str.length-1) === ",") {
        return str.substring(0, str.length-1);
    }
    return str;
};

oj.Collection.prototype.ModifyOptionsForCustomURL = function(options) {
    var opt = {};
    for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
            opt[prop] = options[prop];
        }
    }
    var comparator = this['comparator'];
    if (comparator && oj.StringUtils.isString(comparator)) {
        var attrs = this._getSortAttrs(comparator);        
        for (var i = 0; i < attrs.length; i++) {
            if (i === 0) {
                opt['sort'] = attrs[i];
            }
            else {
                opt['sort'] += "," + attrs[i];
            }
        }
        opt['sortDir'] = this._getSortDirStr();
    }
    // Put fetchSize on if appropriate, and not already set
    if (this.__isVirtual()) {
        opt[oj.Collection._FETCH_SIZE_PROP] = this._getFetchSize(opt);
    }
    return opt;
};

// Build a URL with parameters for the collection fetch
oj.Collection.prototype.GetCollectionFetchUrl = function(options) {
    var url = oj.Model.IsFunction(this['url']) ? this['url']() : this['url'];
    
    // Adorn it with options, if any
    if (this.__isVirtual()) {
        var all = options['all'];
        
        // Put in page size
        var limit = null;
        if (all) {
            var totalResults = this['totalResults'];
            limit = totalResults ? totalResults : this._getFetchSize(options);
        }
        else {
            limit = this._getFetchSize(options);
        }
        url += "?limit=" + limit;

        if (!all) {
            if (options['startIndex']) {
                url += "&offset=" + options['startIndex'];
            }
            if (options['startID']) {
                url += "&fromID=" + options['startID'];
            }
            if (options['since']) {
                url += "&since=" + options['since'];
            }
            if (options['until']) {
                url += "&until=" + options['until'];
            }
        }
        // Query
        if (options['query']) {
            var queryString = oj.Collection._getQueryString(options['query']);
            if (queryString && queryString.length > 0) {
                url += "&q=" + queryString;
            }
        }
        
        // Add sorting
        var comparator = this['comparator'];
        if (comparator) {
            var attrs = this._getSortAttrs(comparator);
            var sortDirStr = this._getSortDirStr(), i;
            for (i = 0; i < attrs.length; i++) {
                if (i === 0) {
                    url += "&orderBy=" + attrs[i] + ":" + sortDirStr;
                }
                else {
                    url += "," + attrs[i] + ":" + sortDirStr;
                }
            }
        }
        // Always ask for totalresults
        url +="&totalResults=true";        
    }
    return url;
};

oj.Collection.prototype._getSortDirStr = function() {
    if (this['sortDirection'] === -1) {
        return "desc";
    }
    return "asc";
};

/**
 * Called to perfrom server interactions, such as reading the collection.  Designed to be overridden by users
 * 
 * @param {string} method "read"
 * @param {Object} collection the Collection to be read
 * @param {Object=} options to control sync
 * success: called if sync succeeds
 * error: called if sync fails
 * others are passed to jQuery
 * @return {Object} xhr response
 * @alias oj.Collection.prototype.sync
 */
oj.Collection.prototype['sync'] = function(method, collection, options) {
    return window['oj']['sync'](method, collection, options);
};

// Constants
oj.Collection._FETCH_SIZE_PROP = 'fetchSize';

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/
/*global jQuery:false*/
/**
 * @private
 * @constructor
 */
oj.RestImpl = function(rootURL, custom) {
    this.rootURL = rootURL;
    this.customURL = custom;
    $.support['cors'] = true;    
};

oj.RestImpl._HEADER_PROP = "headers";

// Add the properties in options to starter, if not already there
oj.RestImpl.addOptions = function(starter, options, customOptions) {
    var prop;
    starter = $.extend(true, starter, customOptions);
    for (prop in options) {
        if (options.hasOwnProperty(prop) && prop !== 'oauthHeader') {
            if (!starter.hasOwnProperty(prop)) {
                starter[prop] = options[prop];
            }
            if (prop === oj.RestImpl._HEADER_PROP) {
                // Deep merge
                starter[prop] = $.extend(true, starter[prop], options[prop]);
            }
        }
    }
	
	if(options['oauthHeader']) {
		// if there are no any headers then create a new one.
		if(!starter[oj.RestImpl._HEADER_PROP]) starter[oj.RestImpl._HEADER_PROP] = {}; 	
		for (prop in options['oauthHeader']) {
			if (options['oauthHeader'].hasOwnProperty(prop)) {
				if (!starter[oj.RestImpl._HEADER_PROP].hasOwnProperty(prop)) {
					starter[oj.RestImpl._HEADER_PROP][prop] = options['oauthHeader'][prop];
				}
			}
		}
	}
		
    return starter;
};

oj.RestImpl.prototype.getRecords = function(callback, errFunc, options, context) {
        options = options || {};
        var isJsonp = options['dataType'] === 'jsonp';
        var urlInfo = this._getURL("read", this.rootURL, this.customURL, null, context, options);
        var ajaxOptions = {
                'crossDomain': options['crossDomain'] || !isJsonp,
		'dataType': options['dataType'] || "json",
                'jsonpCallback' : options['jsonpCallback'],
                'context': context !== null ? context : this,
		'success':  callback,
                'error': errFunc
	};
        ajaxOptions = this._addHeaderProp(ajaxOptions);
        ajaxOptions = oj.RestImpl.addOptions(ajaxOptions, options, urlInfo);
	options.xhr = this.ajax(ajaxOptions);
        return options.xhr;
};

oj.RestImpl.prototype._addHeaderProp = function(options) {
    options[oj.RestImpl._HEADER_PROP] = {'Accept-Language': this.getLocale()};
    return options;
};

oj.RestImpl.prototype.getRecord = function(success, error, recordID, options, context) {
        options = options || {};
        var isJsonp = options['dataType'] === 'jsonp';
        var urlInfo = this._getURL("read", this.rootURL, this.customURL, recordID, context, options);
        var ajaxOptions = {
                'crossDomain': options['crossDomain'] || !isJsonp,
		'dataType': options['dataType'] || "json",
                'jsonpCallback' : options['jsonpCallback'],
                'context': context !== null ? context : this,
		'success': success,
                'error': error
	};
        ajaxOptions = this._addHeaderProp(ajaxOptions);
        ajaxOptions = oj.RestImpl.addOptions(ajaxOptions, options, urlInfo);
	options.xhr = this.ajax(ajaxOptions);    
        return options.xhr;
};


oj.RestImpl.prototype.updateRecord = function(callback, recordID, record, error, options, context, patch) {
    options = options || {};
    var isJsonp = options['dataType'] === 'jsonp';
    var urlInfo = this._getURL(patch ? "patch": "update", this.rootURL, this.customURL, recordID, context, options);
    var ajaxOptions = {
        'crossDomain': options['crossDomain'] || !isJsonp,
        'contentType': options['contentType'] || 'application/json',
        'dataType': options['dataType'] || "json",
        'jsonpCallback' : options['jsonpCallback'],
        'data': JSON.stringify(record),
        'success': callback,
        'error': error,
        'context': context !== null ? context : this
    };
    ajaxOptions = this._addHeaderProp(ajaxOptions);
    ajaxOptions = oj.RestImpl.addOptions(ajaxOptions, options, urlInfo);
    options.xhr = this.ajax(ajaxOptions);
    return options.xhr;
};

oj.RestImpl.prototype._getHTTPMethod = function(operation, options) {
    if (options['type']) {
        return options['type'];
    }
    if (operation === "create") {
        return "POST";
    }
    if (operation === "delete") {
        return "DELETE";
    }
    if (operation === "patch") {
        return "PATCH";
    }
    if (operation === "update") {
        return "PUT";
    }
    return "GET";
};

oj.RestImpl.prototype._setCustomURLOptions = function(recordID, context, opt) {
    var options = context instanceof oj.Collection ? context.ModifyOptionsForCustomURL(opt) : {};
    if (recordID) {
        options['recordID'] = recordID;
    }
    return options;
};

oj.RestImpl.prototype._getURL = function(operation, rootURL, customURL, recordID, context, options) {
   if (oj.Model.IsFunction(customURL)) {
       var result = customURL.call(this, operation, context, this._setCustomURLOptions(recordID, context, options));
       if (oj.StringUtils.isString(result)) {
           return {'url': result, 'type' : this._getHTTPMethod(operation, options)};
       }
       else if (result) {
           result['url'] = result.hasOwnProperty('url') ? result['url'] : rootURL;
           result['type'] = result.hasOwnProperty('type') ? result['type'] : this._getHTTPMethod(operation, options);
           return result;
       }
    }
    var http = this._getHTTPMethod(operation, options);
    return {'url': rootURL, 'type': http};
};

oj.RestImpl.prototype.deleteRecord = function(recordID, error, options, context) {
    options = options || {};
    var isJsonp = options['dataType'] === 'jsonp';
    var urlInfo = this._getURL("delete", this.rootURL, this.customURL, recordID, context, options);

    var ajaxOptions = {
        'crossDomain': options['crossDomain'] || !isJsonp,
        'success': options.success,
        'error': error,
        'context': context !== null ? context : this
    };
    ajaxOptions = oj.RestImpl.addOptions(ajaxOptions, options, urlInfo);
    options.xhr = this.ajax(ajaxOptions);
    return options.xhr;
};

oj.RestImpl.prototype.addRecord = function(record, error, options, context) {
    options = options || {};
    var recordStr = JSON.stringify(record), isJsonp = options['dataType'] === 'jsonp';
    var urlInfo = this._getURL("create", this.rootURL, this.customURL, null, context, options);

    var ajaxOptions = {
        'crossDomain': options['crossDomain'] || !isJsonp,
        'contentType': options['contentType'] || 'application/json',
        'dataType': options['dataType'] || "json",
        'jsonpCallback' : options['jsonpCallback'],
        'data': recordStr,
        'success': options.success,
        'error': error,
        'context': context !== null ? context : this
    };
    ajaxOptions = this._addHeaderProp(ajaxOptions);
    ajaxOptions = oj.RestImpl.addOptions(ajaxOptions, options, urlInfo);
    options.xhr = this.ajax(ajaxOptions);  

    return options.xhr;
};

oj.RestImpl.prototype.getLocale = function() {
    return oj.Config.getLocale();
};

oj.RestImpl.prototype.ajax = function(settings) {
    return window['oj']['ajax'](settings);
};


/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true*/
/*global jQuery:false*/

/**
 * @export
 * @class oj.OAuth
 * @classdesc Object representing name/value pairs for a data service record
 *
 * @param {Object} attributes Initial set of attribute/value pairs with which to seed this OAuth object 
 * @param {string} header Actual name for the Authorization header (default 'Authorization') 
 * @example <caption>Initialize OAuth with client credentials</caption>
 * var myOAuth = new oj.OAuth('X-Authorization', {...Clent Credentials ...});
 * 
 * @example <caption>Initialize OAuth with access_token</caption>
 * var myOAuth = new oj.OAuth('X-Authorization', {...Access Token...});
 * 
 * @example <caption>Initialize empty OAuth and set access_token</caption>
 * var myOAuth = new oj.OAuth();
 * myOAuth.setAccessTokenResponse({...Access Token...});
 *
 * @constructor
 */
oj.OAuth = function(header, attributes) 
{
	attributes = attributes || {};
	header = header || 'Authorization';
	oj.OAuth._init(this, attributes, header);
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.OAuth, oj.Object, "OAuth.OAuth");
oj.OAuth.prototype.Init = function()
{
    oj.OAuth.superclass.Init.call(this);
};

/**
 * Calculates Authorization header based on client credentials or access_token
 * @return {Object} OAuth 2.0 Authorization header
 * @example <caption>Get Authorization header</caption>
 * myOAuth.getHeader();
 *
 * @export
 */
oj.OAuth.prototype.getHeader = function() 
{
	var headers = {};
	if(!this.accessTokenResponse['access_token']) {
		this.clientCredentialGrant();
	}
	headers[this.accessTokenRequest.auth_header]='Bearer '+this.accessTokenResponse['access_token'];
	return headers;
}

/**
 * Check is OAuth initialized (not null access_token).
 * @return {boolean} true/false
 * @example <caption>Check if OAuth initialized</caption>
 * if(myOAuth.isInitialized()) console.log('Initialized');
 *
 * @export
 */
oj.OAuth.prototype.isInitialized = function() 
{
	return (this.accessTokenResponse.access_token) ? true : false;
}

/**
 * Request for access_token(bearer token) using Client Credential Authorization Grant.
 * Initialize response part of the OAuth object (access_token, e.t.c.)
 * @example <caption>Set/Re-set response part of the OAuth object using Client Credentials</caption>
 * myOAuth.clientCredentialGrant();
 *
 * @export
 */
oj.OAuth.prototype.clientCredentialGrant = function() 
{
	var headers = {}, self = this;
	headers[self.accessTokenRequest.auth_header] = 'Basic ' + 
		oj.OAuth._base64_encode(self.accessTokenRequest['client_id']+':'+self.accessTokenRequest['client_secret']);
		
	$.ajax({
		type: 'POST',
		async: false,
		url: this.accessTokenRequest['bearer_url'],
		data: 'grant_type=client_credentials',
		headers: headers,
		success:function(data) {
			oj.OAuth._initAccessToken(self.accessTokenResponse, data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			throw new Error(jqXHR.responseText);
		}
	});	

}

/**
 * Set response part of the OAuth object (access_token, e.t.c.)
 * @param {Object} data current response
 * @example <caption>'Initialize' response part of the OAuth object with access_token</caption>
 * myOAuth.setAccessTokenResponse({...Access Token...});
 *
 * @export
 */
oj.OAuth.prototype.setAccessTokenResponse = function(data) 
{
	oj.OAuth._initAccessToken(this.accessTokenResponse, data);
}

/**
 * Get response part of the OAuth object (access_token, e.t.c.)
 * @return {Object} cached response
 * @export
 */
oj.OAuth.prototype.getAccessTokenResponse = function()
{
	return this.accessTokenResponse;
}

/**
 * Clean response part of the OAuth object (access_token, e.t.c.)
 * Null and remove all data from response part of the OAuth object
 * @export
 */
oj.OAuth.prototype.cleanAccessTokenResponse = function()
{
	oj.OAuth._cleanAccessToken(this.accessTokenResponse);
}

/**
 * Set request part of the OAuth object (client credentials, uri endpoint)
 * @param {Object} data current client credentials and uri
 * @example <caption>'Initialize' request part of the OAuth object with client credentials and calculate access_token</caption>
 * myOAuth.setAccessTokenRequest({...Clent Credentials ...});
 * myOAuth.clientCredentialGrant();
 *
 * @export
 */
oj.OAuth.prototype.setAccessTokenRequest = function(data) 
{
	oj.OAuth._initAccessToken(this.accessTokenRequest, data);
}

/**
 * Get request part of the OAuth object (client credentials, uri endpoint)
 * @return {Object} cached request
 * @export
 */
oj.OAuth.prototype.getAccessTokenRequest = function()
{
	return this.accessTokenRequest;
}

/**
 * Clean request part of the OAuth object (client credentials, uri endpoint)
 * Null and remove all data from request part of the OAuth object
 * @export
 */
oj.OAuth.prototype.cleanAccessTokenRequest = function()
{
	oj.OAuth._cleanAccessToken(this.accessTokenRequest);
}

/**
 * @private
 * @param {Object} oauth
 * @param {Object} attributes
 * @param {string||null} header
 */
oj.OAuth._init = function(oauth, attributes, header) 
{
	oauth.Init();
	oauth.accessTokenRequest = {};
	oauth.accessTokenResponse = {};
	
	if(attributes['access_token']) { // access_token has higher preference
		oj.OAuth._initAccessToken(oauth.accessTokenResponse, attributes);
	} else if(attributes['client_id'] && attributes['client_secret'] && attributes['bearer_url']) { // Client Credential Grant		
		oj.OAuth._initAccessToken(oauth.accessTokenRequest, attributes);
	}
	oauth.accessTokenRequest.auth_header = header;
}

/**
 * @private
 * @param {Object} oauthObj - Request/Response object to deal with
 * @param {Object} data - object to populate
 */
oj.OAuth._initAccessToken = function(oauthObj, data) {
	var prop;
	data = data || {};
	for (prop in data) {
		oauthObj[prop] = data[prop];
	}
}

/**
 * @private
 * @param {Object} oauthObj - Request/Response object to deal with
 */
oj.OAuth._cleanAccessToken = function(oauthObj) {
	var key;
	for (key in oauthObj) {
		if (oauthObj.hasOwnProperty(key)) {
			if(key !== 'auth_header') {
				oauthObj[key] = null;
				delete oauthObj[key];
			}
		}
	}
}

/**
 * @private
 * @param {string} a The data to calculate the base64 representation from
 * @return {string} The base64 representation
 */
 oj.OAuth._base64_encode = function (a) {
	var d, e, f, b, g = 0,
		h = 0,
		i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		c = [];
	do {
		d = a.charCodeAt(g++);
		e = a.charCodeAt(g++);
		f = a.charCodeAt(g++);
		b = d << 16 | e << 8 | f;
		d = b >> 18 & 63;
		e = b >> 12 & 63;
		f = b >> 6 & 63;
		b &= 63;
		c[h++] = i.charAt(d) + i.charAt(e) + i.charAt(f) + i.charAt(b);
	} while (g < a.length);
	c = c.join("");
	d = a.length % 3;
	return (d ? c.slice(0, d - 3) : c) + "===".slice(d || 3);	
}

});
