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

// lory retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.resizable.js on 04/09/2014, and then modified


/*
*
*   - This widget is NOT EXPOSED.
*     ojResizable is made available only to dialog and other components that need to call resize functionality.
*   Changes:
*    - Options minWidth, minHeight, maxWidth, and maxHeight have been deleted
*    - Removed zIndex option
*    - Removed css write of zIndex (this is supported in style sheets)
*
*/

(function() {

    "use strict";

    var mouseHandled = false;
    $( document ).mouseup( function() {
	mouseHandled = false;
    });


    oj.__registerWidget("oj.ojResizable", $['oj']['baseComponent'], {
	version: "1.0.0",
        widgetEventPrefix : "oj", 

	options: {

	/////////////////////////////////////////////////////////////////////////////////////
	//
	// Mouse Options (copied)
	//
	/////////////////////////////////////////////////////////////////////////////////////

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    cancel: "input,textarea,button,select,option",

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    distance: 1,

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    delay: 0,

	/////////////////////////////////////////////////////////////////////////////////////
	//
	// Resize Options
	//
	/////////////////////////////////////////////////////////////////////////////////////


	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    maxHeight: null,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    maxWidth: null,

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    minHeight: 10,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    minWidth: 10,

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    alsoResize: false,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    animate: false,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    animateDuration: "slow",
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    animateEasing: "swing",

	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    containment: false,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    ghost: false,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    grid: false,
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    handles: "e,s,se",
	    /** 
             *
             * @private
             * @expose
             * @memberof! oj.ojResizable
	     * @instance
             *
             */
	    helper: false,

	    // See #7960
	    // zIndex: 90,

	    /////////////////
	    // callbacks
	    /////////////////


            /**
              * Triggered when the ojResizable is resized.
              *
              * @private
              * @expose
              * @event 
              * @name resize
              * @memberof! oj.ojResizable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Empty object included for consistency with other events
              * 
              * @example <caption>Initialize the resizable with the <code class="prettyprint">resize</code> callback specified:</caption>
              * $( ".selector" ).ojResizable({
              *     "resize": function( event, ui ) {}
              * });
              * 
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojresize</code> event:</caption>
              * $( ".selector" ).on( "ojresize", function( event, ui ) {} );
              */
	    resize: null,

            /**
              * Triggered on the start of a resize operation.
              *
              * @private
              * @expose
              * @event 
              * @name start
              * @memberof! oj.ojResizable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Empty object included for consistency with other events
              * 
              * @example <caption>Initialize the resizable with the <code class="prettyprint">start</code> callback specified:</caption>
              * $( ".selector" ).ojResizable({
              *     "start": function( event, ui ) {}
              * });
              * 
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojstart</code> event:</caption>
              * $( ".selector" ).on( "ojstart", function( event, ui ) {} );
              */
	    // note - jqui doc has .on("resizestart" 
	    start: null,


            /**
              * Triggered on the end of a resize operation.
              *
              * @private
              * @expose
              * @event 
              * @name stop
              * @memberof! oj.ojResizable
              * @instance
              * @property {Event} event <code class="prettyprint">jQuery</code> event object
              * @property {Object} ui Empty object included for consistency with other events
              * 
              * @example <caption>Initialize the resizable with the <code class="prettyprint">stop</code> callback specified:</caption>
              * $( ".selector" ).ojResizable({
              *     "stop": function( event, ui ) {}
              * });
              * 
              * @example <caption>Bind an event listener to the <code class="prettyprint">ojstop</code> event:</caption>
              * $( ".selector" ).on( "ojstop", function( event, ui ) {} );
              */
	    // note - jqui doc has .on("resizestop" 
	    stop: null
	},

	/////////////////////////////////////////////////////////////////////////////////////
	//
	// Mouse Functions (copied)
	//
	/////////////////////////////////////////////////////////////////////////////////////

	_mouseInit: function() {
	    var that = this;

	    this.element
		.bind("mousedown." + this.widgetName, function(event) {
		    return that._mouseDown(event);
		})
		.bind("click." + this.widgetName, function(event) {
		    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
			$.removeData(event.target, that.widgetName + ".preventClickEvent");
			event.stopImmediatePropagation();
			return false;
		    }
		});

	    this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
	    this.element.unbind("." + this.widgetName);
	    if ( this._mouseMoveDelegate ) {
		this.document
		    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
		    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
	    }
	},

	_mouseDown: function(event) {
	    // don't let more than one widget handle mouseStart
	    if ( mouseHandled ) {
		return;
	    }

	    // we may have missed mouseup (out of window)
	    (this._mouseStarted && this._mouseUp(event));

	    this._mouseDownEvent = event;

	    var that = this,
	    btnIsLeft = (event.which === 1),
	    // event.target.nodeName works around a bug in IE 8 with
	    // disabled inputs (#7620)
	    elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
	    if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
		return true;
	    }

	    this.mouseDelayMet = !this.options.delay;
	    if (!this.mouseDelayMet) {
		this._mouseDelayTimer = setTimeout(function() {
		    that.mouseDelayMet = true;
		}, this.options.delay);
	    }

	    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
		this._mouseStarted = (this._mouseStart(event) !== false);
		if (!this._mouseStarted) {
		    event.preventDefault();
		    return true;
		}
	    }

	    // Click event may never have fired (Gecko & Opera)
	    if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
		$.removeData(event.target, this.widgetName + ".preventClickEvent");
	    }

	    // these delegates are required to keep context
	    this._mouseMoveDelegate = function(event) {
		return that._mouseMove(event);
	    };
	    this._mouseUpDelegate = function(event) {
		return that._mouseUp(event);
	    };

	    this.document
		.bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
		.bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

	    event.preventDefault();

	    mouseHandled = true;
	    return true;
	},

	_mouseMove: function(event) {
	    // IE mouseup check - mouseup happened when mouse was out of window
	    if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
		return this._mouseUp(event);

		// Iframe mouseup check - mouseup occurred in another document
	    } else if ( !event.which ) {
		return this._mouseUp( event );
	    }

	    if (this._mouseStarted) {
		this._mouseDrag(event);
		return event.preventDefault();
	    }

	    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
		this._mouseStarted =
		    (this._mouseStart(this._mouseDownEvent, event) !== false);
		(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
	    }

	    return !this._mouseStarted;
	},

	_mouseUp: function(event) {
	    this.document
		.unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
		.unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

	    if (this._mouseStarted) {
		this._mouseStarted = false;

		if (event.target === this._mouseDownEvent.target) {
		    $.data(event.target, this.widgetName + ".preventClickEvent", true);
		}

		this._mouseStop(event);
	    }

	    mouseHandled = false;
	    return false;
	},

	_mouseDistanceMet: function(event) {
	    return (Math.max(
		Math.abs(this._mouseDownEvent.pageX - event.pageX),
		Math.abs(this._mouseDownEvent.pageY - event.pageY)
	    ) >= this.options.distance
		   );
	},

	_mouseDelayMet: function(/* event */) {
	    return this.mouseDelayMet;
	},


	/////////////////////////////////////////////////////////////////////////////////////
	//
	// Original Resize Functions
	//
	/////////////////////////////////////////////////////////////////////////////////////


	_num: function( value ) {
	    return parseInt( value, 10 ) || 0;
	},

	_isNumber: function( value ) {
	    return !isNaN( parseInt( value , 10 ) );
	},

	_hasScroll: function( el, a ) {

	    if ( $( el ).css( "overflow" ) === "hidden") {
		return false;
	    }

	    var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
	    has = false;

	    if ( el[ scroll ] > 0 ) {
		return true;
	    }

	    // TODO: determine which cases actually cause this to happen
	    // if the element doesn't have the scroll set, see if it's possible to
	    // set the scroll
	    el[ scroll ] = 1;
	    has = ( el[ scroll ] > 0 );
	    el[ scroll ] = 0;
	    return has;
	},

        /**
         * Triggered when the ojResizable is created.
         *
         * @private
         * @expose
         * @event 
         * @name create
         * @memberof! oj.ojResizable
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the resizable with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojResizable({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
	// note - jqui has on("resizecreate", ... need to verify if we need some form of "ojcreate".
	_ComponentCreate : function ()
	{
            this._super();

	    // _create: function() {

	    var n, i, handle, axis, hname,
	    that = this,
	    o = this.options;
	    this.element.addClass("oj-resizable");

	    $.extend(this, {
		originalElement: this.element,
		_proportionallyResizeElements: [],
		// _helper: o.helper || o.ghost || o.animate ? o.helper || "oj-resizable-helper" : null
		_helper: null
	    });

	    this._initialResize = true;
/*


	    // Wrap the element if it cannot hold child nodes
	    if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

		this.element.wrap(
		    $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
			position: this.element.css("position"),
			width: this.element.outerWidth(),
			height: this.element.outerHeight(),
			top: this.element.css("top"),
			left: this.element.css("left")
		    })
		);

		this.element = this.element.parent().data(
		    "oj-resizable", this.element.resizable( "instance" )
		);

		this.elementIsWrapper = true;

		this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
		this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});
		// support: Safari
		// Prevent Safari textarea resize
		this.originalResizeStyle = this.originalElement.css("resize");
		this.originalElement.css("resize", "none");

		this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" }));

		// support: IE9
		// avoid IE jump (hard set the margin)
		this.originalElement.css({ margin: this.originalElement.css("margin") });

		this._proportionallyResize();
	    }
*/


	    this.handles = o.handles || (!$(".oj-resizable-handle", this.element).length ? "e,s,se" : { n: ".oj-resizable-n", e: ".oj-resizable-e", s: ".oj-resizable-s", w: ".oj-resizable-w", se: ".oj-resizable-se", sw: ".oj-resizable-sw", ne: ".oj-resizable-ne", nw: ".oj-resizable-nw" });
	    if(this.handles.constructor === String) {

		if ( this.handles === "all") {
		    this.handles = "n,e,s,w,se,sw,ne,nw";
		}

		n = this.handles.split(",");
		this.handles = {};

		for(i = 0; i < n.length; i++) {

		    handle = $.trim(n[i]);
		    hname = "oj-resizable-"+handle;
		    axis = $("<div class='oj-resizable-handle " + hname + "'></div>");

		    // axis.css({ zIndex: o.zIndex });

		    // Todo: refine for alta styles
		    // 
		    // if ("se" === handle) {
		    // axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
		    //}

		    this.handles[handle] = ".oj-resizable-"+handle;
		    this.element.append(axis);
		}
	    }

	    this._renderAxis = function(target) {

		var i, axis, padPos, padWrapper;

		target = target || this.element;

		for(i in this.handles) {

		    if(this.handles[i].constructor === String) {
			this.handles[i] = this.element.children( this.handles[ i ] ).first().show();
		    }

		}
	    };

	    // TODO: make renderAxis a prototype function
	    this._renderAxis(this.element);

	    // removed 
	    // this._handles = $(".oj-resizable-handle", this.element).disableSelection();
	    this._handles = $(".oj-resizable-handle", this.element);

	    this._handles.mouseover(function() {
		if (!that.resizing) {
		    if (this.className) {
			axis = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i);
		    }
		    that.axis = axis && axis[1] ? axis[1] : "se";
		}
	    });

	    this._mouseInit();

	},

	/**
	 * Remove the ojResizable functionality completely. 
	 * This will return the element back to its pre-init state.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
         * @private
         * @expose
	 * @method
	 * @name oj.ojResizable#destroy
	 * @memberof! oj.ojResizable
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
	 * var destroy = $( ".selector" ).ojResizable( "destroy" );
	 */

	_destroy: function() {

	    this._mouseDestroy();

	    var wrapper,
	    _destroy = function(exp) {
		$(exp).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing")
		    .removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
	    };

/*

	    if (this.elementIsWrapper) {
		_destroy(this.element);
		wrapper = this.element;
		this.originalElement.css({
		    position: wrapper.css("position"),
		    width: wrapper.outerWidth(),
		    height: wrapper.outerHeight(),
		    top: wrapper.css("top"),
		    left: wrapper.css("left")
		}).insertAfter( wrapper );
		wrapper.remove();
	    }

*/

	    // this.originalElement.css("resize", this.originalResizeStyle);
	    _destroy(this.originalElement);

	    return this;
	},

	_mouseCapture: function(event) {
	    var i, handle,
	    capture = false;

	    for (i in this.handles) {
		handle = $(this.handles[i])[0];
		if (handle === event.target || $.contains(handle, event.target)) {
		    capture = true;
		}
	    }

	    return !this.options.disabled && capture;
	},

	_mouseStart: function(event) {

	    var curleft, curtop, cursor,
	    o = this.options,
	    iniPos = this.element.position(),
	    el = this.element;

	    this.resizing = true;

	    // Bugfix for http://bugs.jqueryui.com/ticket/1749
	    if ( (/absolute/).test( el.css("position") ) ) {
		el.css({ position: "absolute", top: el.css("top"), left: el.css("left") });
	    } else if (el.is(".ui-draggable")) {
		el.css({ position: "absolute", top: iniPos.top, left: iniPos.left });
	    }

	    this._renderProxy();

	    curleft = this._num(this.helper.css("left"));
	    curtop = this._num(this.helper.css("top"));

	    if (o.containment) {
		curleft += $(o.containment).scrollLeft() || 0;
		curtop += $(o.containment).scrollTop() || 0;
	    }

	    this.offset = this.helper.offset();
	    this.position = { left: curleft, top: curtop };
	    this.size = { width: el.width(), height: el.height() };
	    this.originalSize = { width: el.width(), height: el.height() };
	    this.originalPosition = { left: curleft, top: curtop };
	    this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
	    this.originalMousePosition = { left: event.pageX, top: event.pageY };

	    this.aspectRatio =  (this.originalSize.width / this.originalSize.height) || 1;

	    // cursor = $(".oj-resizable-" + this.axis).css("cursor");
	    cursor = /** @type string */ ($(".oj-resizable-" + this.axis).css("cursor"));
	    $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

	    el.addClass("oj-resizable-resizing");

	    this._propagate("start", event);

	    this._alsoresize_start(event);
	    this._containment_start(event);

	    return true;
	},

	_mouseDrag: function(event) {

	    var data,
	    el = this.helper, props = {},
	    smp = this.originalMousePosition,
	    a = this.axis,
	    dx = (event.pageX-smp.left)||0,
	    dy = (event.pageY-smp.top)||0,
	    trigger = this._change[a];

	    this.prevPosition = {
		top: this.position.top,
		left: this.position.left
	    };
	    this.prevSize = {
		width: this.size.width,
		height: this.size.height
	    };

	    if (!trigger) {
		return false;
	    }

	    data = trigger.apply(this, [event, dx, dy]);

	    this._updateVirtualBoundaries(event.shiftKey);
	    if (event.shiftKey) {
		data = this._updateRatio(data, event);
	    }

	    data = this._respectSize(data, event);

	    this._updateCache(data);

	    this._propagate("resize", event);

	    this._alsoresize_resize(event, this.ui());
	    this._containment_resize(event, this.ui());

	    if ( this.position.top !== this.prevPosition.top ) {
		props.top = this.position.top + "px";
	    }
	    if ( this.position.left !== this.prevPosition.left ) {
		props.left = this.position.left + "px";
	    }
	    if ( this.size.width !== this.prevSize.width ) {
		props.width = this.size.width + "px";
	    }
	    if ( this.size.height !== this.prevSize.height ) {
		props.height = this.size.height + "px";
	    }
	    el.css( props );

	    if ( !this._helper && this._proportionallyResizeElements.length ) {
		this._proportionallyResize();
	    }

	    if ( !$.isEmptyObject( props ) ) {
		this._trigger( "resize", event, this.ui() );
	    }

	    return false;
	},

	_mouseStop: function(event) {

	    this.resizing = false;
	    var pr, ista, soffseth, soffsetw, s, left, top,
	    o = this.options, that = this;

	    $("body").css("cursor", "auto");

	    this.element.removeClass("oj-resizable-resizing");

	    this._propagate("stop", event);

	    this._alsoresize_stop(event);
	    this._containment_stop(event);

	    return false;

	},

	_updateVirtualBoundaries: function(forceAspectRatio) {
	    var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
	    o = this.options;

	    b = {
		minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
		maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
		minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
		maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity

		/*
		minWidth: 0,
		maxWidth: Infinity,
		minHeight: 0,
		maxHeight: Infinity
*/

	    };

	    if(forceAspectRatio) {
		pMinWidth = b.minHeight * this.aspectRatio;
		pMinHeight = b.minWidth / this.aspectRatio;
		pMaxWidth = b.maxHeight * this.aspectRatio;
		pMaxHeight = b.maxWidth / this.aspectRatio;

		if(pMinWidth > b.minWidth) {
		    b.minWidth = pMinWidth;
		}
		if(pMinHeight > b.minHeight) {
		    b.minHeight = pMinHeight;
		}
		if(pMaxWidth < b.maxWidth) {
		    b.maxWidth = pMaxWidth;
		}
		if(pMaxHeight < b.maxHeight) {
		    b.maxHeight = pMaxHeight;
		}
	    }
	    this._vBoundaries = b;
	},

	_updateCache: function(data) {
	    this.offset = this.helper.offset();
	    if (this._isNumber(data.left)) {
		this.position.left = data.left;
	    }
	    if (this._isNumber(data.top)) {
		this.position.top = data.top;
	    }
	    if (this._isNumber(data.height)) {
		this.size.height = data.height;
	    }
	    if (this._isNumber(data.width)) {
		this.size.width = data.width;
	    }
	},

	_updateRatio: function( data ) {

	    var cpos = this.position,
	    csize = this.size,
	    a = this.axis;

	    if (this._isNumber(data.height)) {
		data.width = (data.height * this.aspectRatio);
	    } else if (this._isNumber(data.width)) {
		data.height = (data.width / this.aspectRatio);
	    }

	    if (a === "sw") {
		data.left = cpos.left + (csize.width - data.width);
		data.top = null;
	    }
	    if (a === "nw") {
		data.top = cpos.top + (csize.height - data.height);
		data.left = cpos.left + (csize.width - data.width);
	    }

	    return data;
	},

	_respectSize: function( data ) {

	    var o = this._vBoundaries,
	    a = this.axis,
	    ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
	    isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
	    dw = this.originalPosition.left + this.originalSize.width,
	    dh = this.position.top + this.size.height,
	    cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
	    if (isminw) {
		data.width = o.minWidth;
	    }
	    if (isminh) {
		data.height = o.minHeight;
	    }
	    if (ismaxw) {
		data.width = o.maxWidth;
	    }
	    if (ismaxh) {
		data.height = o.maxHeight;
	    }

	    if (isminw && cw) {
		data.left = dw - o.minWidth;
	    }
	    if (ismaxw && cw) {
		data.left = dw - o.maxWidth;
	    }
	    if (isminh && ch) {
		data.top = dh - o.minHeight;
	    }
	    if (ismaxh && ch) {
		data.top = dh - o.maxHeight;
	    }

	    // Fixing jump error on top/left - bug #2330
	    if (!data.width && !data.height && !data.left && data.top) {
		data.top = null;
	    } else if (!data.width && !data.height && !data.top && data.left) {
		data.left = null;
	    }

	    return data;
	},

	_proportionallyResize: function() {

	    if (!this._proportionallyResizeElements.length) {
		return;
	    }

	    var i, j, borders, paddings, prel,
	    element = this.helper || this.element;

	    for ( i=0; i < this._proportionallyResizeElements.length; i++) {

		prel = this._proportionallyResizeElements[i];

		if (!this.borderDif) {
		    this.borderDif = [];
		    borders = [prel.css("borderTopWidth"), prel.css("borderRightWidth"), prel.css("borderBottomWidth"), prel.css("borderLeftWidth")];
		    paddings = [prel.css("paddingTop"), prel.css("paddingRight"), prel.css("paddingBottom"), prel.css("paddingLeft")];

		    for ( j = 0; j < borders.length; j++ ) {
			this.borderDif[ j ] = ( parseInt( borders[ j ], 10 ) || 0 ) + ( parseInt( paddings[ j ], 10 ) || 0 );
		    }
		}

		prel.css({
		    height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
		    width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
		});

	    }

	},

	_renderProxy: function() {

	    var el = this.element, o = this.options;
	    this.elementOffset = el.offset();

	    this.helper = this.element;

	},

	_change: {
	    "e": function(event, dx) {
		return { width: this.originalSize.width + dx };
	    },
	    "w": function(event, dx) {
		var cs = this.originalSize, sp = this.originalPosition;
		return { left: sp.left + dx, width: cs.width - dx };
	    },
	    "n": function(event, dx, dy) {
		var cs = this.originalSize, sp = this.originalPosition;
		return { top: sp.top + dy, height: cs.height - dy };
	    },
	    "s": function(event, dx, dy) {
		return { height: this.originalSize.height + dy };
	    },
	    "se": function(event, dx, dy) {
		return $.extend(this._change["s"].apply(this, arguments), this._change["e"].apply(this, [event, dx, dy]));
	    },
	    "sw": function(event, dx, dy) {
		return $.extend(this._change["s"].apply(this, arguments), this._change["w"].apply(this, [event, dx, dy]));
	    },
	    "ne": function(event, dx, dy) {
		return $.extend(this._change["n"].apply(this, arguments), this._change["e"].apply(this, [event, dx, dy]));
	    },
	    "nw": function(event, dx, dy) {
		return $.extend(this._change["n"].apply(this, arguments), this._change["w"].apply(this, [event, dx, dy]));
	    }
	},

	_propagate: function(n, event) {

	    // 
	    // Propage resizeStart and resizeStop events.
	    // (resize is propagated internally by drag)
	    // 

	    // $.ui.plugin.call(this, n, [event, this.ui()]);
	    (n !== "resize" && this._trigger(n, event, this.ui()));
	},

	//////////////////////////////////////////////////////////////////////////////////
	//
	// Code block that implements functionality formerly in defined as a plugin.
	// (note: plugin code is deprecated)
	//
	// The alsoResize functionality "also resizes" the dialog body.
	// This approach allows the footer area to remain at a fixed height
	// the dialog is resized.
	//
	// $.ui.plugin.add("resizable", "alsoResize", {
	// 
	/////////////////////////////////////////////////////////////////////////////////

	_alsoresize_start: function () {

	    //var that = $(this).resizable( "instance" ),
	    // var that = $(this).data("oj-resizable"), // w
	    var that = this;
	    var o = that.options;
	    // var initialR = that._initialResize;

	    var _store = function (exp) {
		$(exp).each(function() {
		    var el = $(this);

		    el.data("oj-resizable-alsoresize", {
			width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
			left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
		    });
		});
	    };

	    if (typeof(o.alsoResize) === "object" && !o.alsoResize.parentNode) {
		if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0]; _store(o.alsoResize); }
		else { $.each(o.alsoResize, function (exp) { _store(exp); }); }
	    }else{
		_store(o.alsoResize);
	    }
	},

	_alsoresize_resize: function (event, ui) {

	    // var that = $(this).resizable( "instance" ),
	    // var that = $(this).data("oj-resizable"), // v
	    var that = this;

	    var o = that.options;
	    var os = that.originalSize;
	    var op = that.originalPosition;

	    var delta = {
		height: (that.size.height - os.height) || 0, width: (that.size.width - os.width) || 0,
		top: (that.position.top - op.top) || 0, left: (that.position.left - op.left) || 0
	    },

	    _alsoResize = function (exp, c) {
		$(exp).each(function() {
		    var el = $(this), start = $(this).data("oj-resizable-alsoresize"), style = {},
		    css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];

		    $.each(css, function (i, prop) {
			var sum = (start[prop]||0) + (delta[prop]||0);
			if (sum && sum >= 0) {
			    style[prop] = sum || null;
			}
		    });

		    el.css(style);
		});
	    };

	    if (typeof(o.alsoResize) === "object" && !o.alsoResize.nodeType) {
		$.each(o.alsoResize, function (exp, c) { _alsoResize(exp, c); });
	    }else{
		_alsoResize(o.alsoResize, null);
	    }
	},

	_alsoresize_stop: function () {
	    // $(this).removeData("resizable-alsoresize");
	    $(this).removeData("oj-resizable-alsoresize");
	},


	/////////////////////////////////////////////////////////////////////////////////
	// 
	// Code block for containment functionality (formerly defined as a plugin)
	// 
	// $.ui.plugin.add( "resizable", "containment", {
	// 
	/////////////////////////////////////////////////////////////////////////////////

	_containment_start: function() {

	    var element, p, co, ch, cw, width, height;

	    // var that = $(this).data("oj-resizable");
	    var that = this;

	    var o = that.options,
	    el = that.element,
	    oc = o.containment,
	    ce = ( oc instanceof $ ) ? oc.get( 0 ) : ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

	    if ( !ce ) {
		return;
	    }

	    that.containerElement = $( ce );

	    if ( /document/.test( oc ) || oc === document ) {
		that.containerOffset = {
		    left: 0,
		    top: 0
		};
		that.containerPosition = {
		    left: 0,
		    top: 0
		};

		that.parentData = {
		    element: $( document ),
		    left: 0,
		    top: 0,
		    width: $( document ).width(),
		    height: $( document ).height() || document.body.parentNode.scrollHeight
		};
	    } else {
		element = $( ce );
		p = [];
		$([ "Top", "Right", "Left", "Bottom" ]).each(function( i, name ) {
		    p[ i ] = that._num( element.css( "padding" + name ) );
		});

		that.containerOffset = element.offset();
		that.containerPosition = element.position();
		that.containerSize = {
		    height: ( element.innerHeight() - p[ 3 ] ),
		    width: ( element.innerWidth() - p[ 1 ] )
		};

		co = that.containerOffset;
		ch = that.containerSize.height;
		cw = that.containerSize.width;
		width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
		height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

		that.parentData = {
		    element: ce,
		    left: co.left,
		    top: co.top,
		    width: width,
		    height: height
		};
	    }
	},

	_containment_resize: function( event, ui ) {
	    var woset, hoset, isParent, isOffsetRelative;

	    // var that = $(this).data("oj-resizable");
	    var that = this;

	    var o = that.options,
	    co = that.containerOffset,
	    cp = that.position,
	    pRatio = event.shiftKey,
	    cop = {
		top: 0,
		left: 0
	    },
	    ce = that.containerElement,
	    continueResize = true;

	    if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
		cop = co;
	    }

	    if ( cp.left < ( that._helper ? co.left : 0 ) ) {
		that.size.width = that.size.width + ( that._helper ? ( that.position.left - co.left ) : ( that.position.left - cop.left ) );
		if ( pRatio ) {
		    that.size.height = that.size.width / that.aspectRatio;
		    continueResize = false;
		}
		that.position.left = o.helper ? co.left : 0;
	    }

	    if ( cp.top < ( that._helper ? co.top : 0 ) ) {
		that.size.height = that.size.height + ( that._helper ? ( that.position.top - co.top ) : that.position.top );
		if ( pRatio ) {
		    that.size.width = that.size.height * that.aspectRatio;
		    continueResize = false;
		}
		that.position.top = that._helper ? co.top : 0;
	    }

	    that.offset.left = that.parentData.left + that.position.left;
	    that.offset.top = that.parentData.top + that.position.top;

	    woset = Math.abs( ( that._helper ? that.offset.left - cop.left : ( that.offset.left - co.left ) ) + that.sizeDiff.width );
	    hoset = Math.abs( ( that._helper ? that.offset.top - cop.top : ( that.offset.top - co.top ) ) + that.sizeDiff.height );

	    isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
	    isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

	    if ( isParent && isOffsetRelative ) {
		woset -= Math.abs( that.parentData.left );
	    }

	    if ( woset + that.size.width >= that.parentData.width ) {
		that.size.width = that.parentData.width - woset;
		if ( pRatio ) {
		    that.size.height = that.size.width / that.aspectRatio;
		    continueResize = false;
		}
	    }

	    if ( hoset + that.size.height >= that.parentData.height ) {
		that.size.height = that.parentData.height - hoset;
		if ( pRatio ) {
		    that.size.width = that.size.height * that.aspectRatio;
		    continueResize = false;
		}
	    }

	    if ( !continueResize ){
		that.position.left = ui.prevPosition.left;
		that.position.top = ui.prevPosition.top;
		that.size.width = ui.prevSize.width;
		that.size.height = ui.prevSize.height;
	    }
	},

	_containment_stop: function(){

	    // var that = $(this).data("oj-resizable"),
	    var that = this,

	    o = that.options,
	    co = that.containerOffset,
	    cop = that.containerPosition,
	    ce = that.containerElement,
	    helper = $( that.helper ),
	    ho = helper.offset(),
	    w = helper.outerWidth() - that.sizeDiff.width,
	    h = helper.outerHeight() - that.sizeDiff.height;

	    if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
		$( this ).css({
		    left: ho.left - cop.left - co.left,
		    width: w,
		    height: h
		});
	    }

	    if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
		$( this ).css({
		    left: ho.left - cop.left - co.left,
		    width: w,
		    height: h
		});
	    }
	},

	ui: function() {
	    return {
		originalElement: this.originalElement,
		element: this.element,
		helper: this.helper,
		position: this.position,
		size: this.size,
		originalSize: this.originalSize,
		originalPosition: this.originalPosition,
		prevSize: this.prevSize,
		prevPosition: this.prevPosition
	    };
	}


    });


}() );

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

// lory retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.dialog.js on 09/03/2013, and then modified

//
// Note that one of the main differences between JET Dialog and the jQueryUI dialog 
// is the reparenting approach:
//
//   - JET Dialog reparents to the body on OPEN
//   - jQueryUI dialog reparents to the appendTo() container on CREATE
//

// Notes:
//  - $.uiBackCompat has been deprecated
//

/*!
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 */


(function() {
"use strict";

    var /** @const */ _placeHolderPrefix = "ojDialogPlaceHolder-";
    var /** @const */ _placeHolderFooterPrefix = "ojDialogPlaceHolderFooter-";
    var /** @const */ _placeHolderHeaderPrefix = "ojDialogPlaceHolderHeader-";
    var /** @const */ _wrapperPrefix = "ojDialogWrapper-";
    var /** @const */ _putback = true;
    var /** @const */ _padYDelta = 2;   // add a small amount of padding so that the scrollbar does not inadvertantly show up.

    var /** @const */ _resizeDelay = 50;   // delay between body refresh during resize

    /**
    * @class
    * @name oj.ojDialog
    * @augments oj.baseComponent
    * @since 0.6
    *
    * @classdesc
    * <h3 id="dialogOverview-section">
    *   JET Dialog Component
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialogOverview-section"></a>
    * </h3>
    * <p>Description: Themeable, WAI-ARIA-compliant dialog component.
    * A dialog is a floating window that typically contains a title bar and a content area. 
    * The dialog window can be moved by dragging on the title area, and closed with the 'x' icon (by default). Dialogs can also be resized by dragging on edges or corners of the dialog component. </p>
    *
    *<p>If the content length exceeds the maximum height, a scrollbar will automatically appear.</p>
    *
    *<p>A bottom button bar and semi-transparent modal overlay layer are common options that can be added.</p>
    *
    * <h3 id="markup-section">
    *   HTML Markup and Style Classes
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#markup-section"></a>
    * </h3>
    *
    * <p>Three main formatting classes are provided:
    *
    *<ul>
    *  <li> <b> oj-dialog-header </b> </li>
    *  Optional. If oj-dialog-header is omitted, a header will automatically be created. 
    *  <li> <b> oj-dialog-body </b> </li>
    *  Expected. Formats the body of the dialog.
    *  <li> <b> oj-dialog-footer </b> </li>
    *  Optional. Formats the footer of the dialog. Omit if the dialog has no footer. 
    *</ul>
    *
    * <p>For automically created headers (when <code class="prettyprint"> oj-dialog-header </code> 
    * is not part of the user's markup), the title of the header is the dialog title, and a close button is created.
    *
    *<p>A separator between the dialog body and the dialog footer can be added by using a second style class ( <code class="prettyprint"> oj-dialog-footer-separator </code>) in the footer:
    *
    *<ul>
    *  <li> <b> oj-dialog-footer oj-dialog-footer-separator </b> </li>
    *  Add a footer separator to the dialog.
    *</ul>
    *
    * See the demo section for a live example of the footer separator.
    *
    * Note that the dialog component wraps additional divs around the user's content and also performs other DOM manipulations.
    * Thus, the user should be careful if they wish to engage in advanced coding approaches. 
    * In general, it is better to target DOM elements by id or class name 
    * (e.g., developers should not rely on relative positioning of dialog DOM elements).
    *
    * <p> In addition to the three main formatting classes, another class is provided for formatting embedded progress bars.
    *
    *<ul>
    *  <li> <b> oj-dialog-body-header </b> </li>
    *  Optional. Used to format a progress bar embedded in the dialog header.
    *</ul>
    *
    * <h3 id="focus-section">
    *   Focus
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#focus-section"></a>
    * </h3>
    *
    *<p>Upon opening a dialog, focus is automatically moved to the first item that matches the following:</p>
    *<ol>
    *  <li>The first element within the dialog with the <code>autofocus</code> attribute</li>
    *  <li>The first <code>:tabbable</code> element within the dialog body</li>
    *  <li>The first <code>:tabbable</code> element within the dialog footer</li>
    *  <li>The dialog's close button</li>
    *  <li>The dialog itself</li>
    *</ol>
    *<p>While open, the dialog widget ensures that tabbing cycles focus between elements within the dialog itself, not elements outside of it. Modal dialogs additionally prevent mouse users fro  clicking on elements outside of the dialog.</p>
    *
    *<p>Upon closing a dialog, focus is automatically returned to the element that had focus when the dialog was opened.</p>
    *
    * <h3 id="keyboard-section">
    *   Keyboard End User Information
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
    * </h3>
    * 
    * <p>For the close icon:
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
    *       <td><kbd>Esc</kbd></td>
    *       <td>Closes the dialog.</td>
    *     </tr>
    *   </tbody>
    * </table>
    *
    * <p>Also for the close icon, with focus on the close icon:
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
    *       <td>Closes the dialog.</td>
    *     </tr>
    *     <tr>
    *     </tr>
    *   </tbody>
    * </table>
    * 
    *<h3>Sizing</h3>
    *
    * <p> Dialog dimensions, including <code class="prettyprint"> height, width, min-width, max-width, min-height</code> and <code class="prettyprint">max-height</code> are defined with css variables. The default dialog dimensions are the following:
    *
    *<ul>
    *  <li> <code class="prettyprint">height: auto</code> </li>
    *  <li> <code class="prettyprint">width: 300px</code> </li>
    *  <li> <code class="prettyprint">min-width: 200px</code> </li>
    *</ul>
    * 
    * In most cases, you will want to use the default <code class="prettyprint">height:auto</code>, since this will automatically adjust the height based on the content.
    * 
    * <p> Dialog dimensions can be set using rootAttributes:
    *
    * <pre class="prettyprint">
    * <code>
    *  &lt;div id="wideDialog" title="Wide Dialog" style="" 
    *       data-bind="ojComponent:{component: 'ojDialog', initialVisibility: 'show',
    *		  rootAttributes: { style: 'width: 400px; min-width: 100px; max-width 500px;'}}"&gt;
    *       &lt;div class="oj-dialog-body"&gt;
    *         &lt;p&gt; Dialog Text
    *       &lt;/div&gt;
    *  &lt;/div&gt;
    * </code></pre>
    *
    *
    * To dynamically change a dialog dimension (e.g., change a dimension after the dialog has been created), the 'widget' syntax is required:
    * <pre class="prettyprint">
    * <code>
    * $("#wideDialog").ojDialog('widget').css{'width', '400px'}
    * </code></pre>
    *
    * <h3 id="accessibility-section">
    *   Accessibility
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#accessibility-section"></a>
    * </h3>
    * <h4> role </h4>
    * By default, the role will be set to dialog.
    * This can be observed by inspecting the DOM: 
    *
    * <pre class="prettyprint">
    * <code>
    *  &lt;div class="ojdialog ..." role="dialog"&gt;
    * </code></pre>
    *
    * This can be changed using the role option. WAI-ARIA recommends that role="dialog" be used if the dialog expects input (such as text input),
    * otherwise, use the role option to assign role="alertdialog".
    *
    * <h4> labeled-by </h4>
    *
    * For default headers, the dialog component takes care of labeled-by for you. User-defined headers require additional work on the user's part:
    *<ul>
    *  <li> <b> Default Headers </b> </li>
    *   For default headers, the labeled-by attribute will be generated automatically (and set to the id of the title).
    *  <li> <b> User-defined Headers </b> </li>
    *   For user-defined headers, the the labeled-by attribute should be defined in the user's markup. Please refer to the demos for examples.
    *</ul>
    *
    * <h3 id="rtl-section">
    *   Reading direction
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
    * </h3>
    * 
    * <p> Setting the reading direction (LTR or RTL) is supported by setting the <code class="prettyprint">"dir"</code> attribute on the 
    * <code class="prettyprint">&lt;html></code> element of the page.  As with any JET component, in the unusual case that the reading direction
    * is changed post-init, the dialog must be <code class="prettyprint">refresh()</code>ed, or the page must be reloaded. 
    * 
    * <h3 id="pseudos-section">
    *   Pseudo-selectors
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
    * </h3>
    * 
    * <p>The <code class="prettyprint">:oj-dialog</code> pseudo-selector can be used in jQuery expressions to select JET Dialogs.  For example:
    * 
    * <pre class="prettyprint">
    * <code>$( ":oj-dialog" ) // selects all JET Dialogs on the page
    * $myEventTarget.closest( ":oj-dialog" ) // selects the closest ancestor that is a JET Dialog
    * </code></pre>
    * 
    *<h3>Additional Examples</h3>
    *
    * <p> The following defines a basic dialog, with a cancel and an ok button in the footer:
    *
    * <pre class="prettyprint">
    * <code>
    *
    * &lt;div id="dialog" class="ojDialog" title="ojDialog Title"&gt;
    *     &lt;div class="oj-dialog-body"&gt;
    *         &lt;p&gt;Dialog Text&lt;/p&gt;
    *     &lt;/div&gt;
    *     &lt;div class="oj-dialog-footer"&gt;
    *        &lt;button id="buttonCancel" data-bind="ojComponent: 
    *              { component: 'ojButton', label: 'OK'}"&gt; &lt;/button&gt;
    *        &lt;button data-bind="ojComponent: 
    *              { component: 'ojButton', label: 'Cancel'}"&gt; &lt;/button&gt;
    *     &lt;/div&gt;
    * &lt;/div&gt;
    *
    * </code></pre>
    *
    * Note that you will need to define your own event handlers for the ok and close buttons (see the demos for examples of this).
    *
    * <p> A dialog with user-defined header is shown next. Arbitrary header content can be defined using a user-defined header.
    *
    * <pre class="prettyprint">
    * <code>
    *
    * &lt;div id="dialog" class="ojDialog" title="ojDialog Title"&gt;
    *   &lt;div class="oj-dialog-header" aria-labelledby="dialog-title-id"&gt;
    *     &lt;span id="dialog-title-id" class="oj-dialog-title"&gt; User Defined Header&lt;/span&gt;
    *    &lt;/div&gt;
    *    &lt;div class="oj-dialog-body"&gt;
    *        &lt;p&gt;Dialog Text&lt;/p&gt;
    *        &lt;br&gt;
    *    &lt;/div&gt;
    *    &lt;div class="oj-dialog-footer"&gt;
    *       &lt;button data-bind="ojComponent: 
    *           { component: 'ojButton', label: 'OK'}"&gt; &lt;/button&gt;
    *       &lt;button id="buttonCancel" class="" data-bind="ojComponent: 
    *           { component: 'ojButton', label: 'Cancel'}"&gt; &lt;/button&gt;
    *    &lt;/div&gt;
    * &lt;/div&gt;
    * 
    * </code></pre>
    *
    * <h3 id="jqui2jet-section">
    *   JET for jQuery UI developers
    *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
    * </h3>
    * 
    * This section summarizes the major differences between the JQueryUI dialog and the JET dialog API.
    * 
    * <h4> Options added to JET Dialog </h4>
    * 
    * <p>
    * One additional option has been added to the JET dialog:
    *
    * <p>
    * <table class="keyboard-table">
    *   <thead>
    *     <tr>
    *       <th>JQueryUI Dialog Option</th>
    *       <th>JET Dialog Option </th>
    *     </tr>
    *   </thead>
    *   <tbody>
    *     <tr>
    *       <td></td>
    *       <td><code class="prettyprint">role</code></td>
    *     </tr>
    *   </tbody>
    * </table>
    *
    * The JET Dialog option allows the developer to set the WAI-ARIA role. The <td><code class="prettyprint">role </code></td> option is not part of the JQueryUI dialog.
    *
    * <h4> Options Renamed between JQueryUI Dialog and JET Dialog </h4>
    *
    * <p>
    * The following options have been renamed between the JQueryUI dialog and the JET dialog.
    *
    * <p>
    * <table class="keyboard-table">
    *   <thead>
    *     <tr>
    *       <th>JQueryUI Dialog Option</th>
    *       <th>JET Dialog Option </th>
    *     </tr>
    *   </thead>
    *   <tbody>
    *     <tr>
    *       <td><code class="prettyprint">autoOpen </code></td>
    *       <td><code class="prettyprint">initialVisibility</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">closeOnEscape </code></td>
    *       <td><code class="prettyprint">cancelBehavior</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">draggable</code></td>
    *       <td><code class="prettyprint">dragAffordance</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">modal</code></td>
    *       <td><code class="prettyprint">modality</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">resizable</code></td>
    *       <td><code class="prettyprint">resizeBehavior</code></td>
    *     </tr>
    *   </tbody>
    * </table>
    *
    * <p>Also note that the JQueryUI dialog defines these options as booleans, while the JET dialog defines these options as strings.
    * <h4> Options in JQueryUI Dialog but not In JET Dialog </h4>
    * 
    * <p>
    * The following options are part of the JQueryUI dialog but are not options in JET Dialog:
    *
    * <p>
    * <table class="keyboard-table">
    *   <thead>
    *     <tr>
    *       <th>JQueryUI Dialog Option</th>
    *       <th>JET Dialog Approach </th>
    *     </tr>
    *   </thead>
    *   <tbody>
    *     <tr>
    *       <td><code class="prettyprint">appendTo</code></td>
    *       <td>Use the jquery <code class="prettyprint">appendTo()</code> instead</td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">button</code></td>
    *       <td>Buttons are added directly to HTML markup</td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">width</code>, <code class="prettyprint">height</code></td>
    *       <td>Use css variables <code class="prettyprint">width</code>, <code class="prettyprint">height</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">minWidth</code>, <code class="prettyprint">maxWidth</code>, <code class="prettyprint">minHeight</code>, <code class="prettyprint">maxHeight</code></td>
    *       <td>Use css variables <code class="prettyprint">min-width</code>, <code class="prettyprint">max-width</code>, <code class="prettyprint">min-height</code>, <code class="prettyprint">max-height</code></td>
    *     </tr>
    *     <tr>
    *       <td><code class="prettyprint">show</code>, <code class="prettyprint">hide</code></td>
    *       <td>Use css classes instead, e.g., <code class="prettyprint">display: none</code> to hide an element</td>
    *     </tr>
    *   </tbody>
    * </table>
    *
    *
    * <h4> Event Names </h4>
    *
    * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "dialog".
    * E.g. the JQUI <code class="prettyprint">dialogcreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
    *
    *
    * <!-- - - - - Above this point, the tags are for the class.
    *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
    * 
    * 
    * @desc Creates a JET Dialog.
    * @param {Object=} options a map of option-value pairs to set on the component
    * @example <caption>Initialize a (modal) dialog with no options specified:</caption>
    * $( ".selector" ).ojDialog();
    * @example <caption>Create a modeless dialog: </caption>
    * $("#dialog").ojDialog(modality: "modeless"});
    */

    oj.__registerWidget("oj.ojDialog", $['oj']['baseComponent'], {
	version: "1.0.0",
        widgetEventPrefix : "oj", 
	options: 
	{
	    // Specify the appendTo container of the dialog. 
            // If the appendTo container is null, then dialogs will be appended inline.
            // Setting to "body" would append all dialogs to the end of the body.
	    /** 
             *
             * @expose 
             * @memberof oj.ojDialog
	     * @instance
             * @type {string|null}
             * @deprecated 
             *
             */
	    // appendTo: null,


	    // 
            // <p> Specifies the location of open dialogs.
            // The default is "auto". 
            // "body" will append dialog content (for open dialogs) to the end of the HTML body.
            // The alternative is "inline", which will position dialog content in the same DOM hierarchy as the user's dialog markup.
            //
            // @expose 
            // @memberof oj.ojDialog
            // @instance
            // @type {string}
            // @default <code class="prettyprint">"body"</code>
            //
            // @example <caption>Initialize the dialog with the <code class="prettyprint">location</code> option specified:</caption>
            // $(".selector" ).ojDialog( {location: "show" } );
            // 
            // @example <caption>Get or set the <code class="prettyprint">location</code> option, after initialization:</caption>
            // // getter
            // var location = $(".selector" ).ojDialog( "option", "location" );
            // 
            // // setter
            // $(".selector" ).ojDialog( "option", "location", "inline");
            // 
	    // location: "auto",

	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated Replaced by initialVisibility.
             //
	    // autoOpen: true,

	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated Replaced by html markup.
             //
	    // buttons: [],
	    //
             //
             // @expose 
             // @memberof oj.ojDialog
             // @instance
             // @deprecated (replaced by cancelBehavior)
            //
	    // escapeBehavior: "close",

	    /**
	     * Specifies the cancel behavior of the dialog. The following are valid values:
             *
             * <ul>
             * <li> 
	     * <code class="prettyprint">"icon"</code> - (the default) (a) a close icon will automatically be created, and (b) the dialog will close when it has focus and user presses the escape (ESC) key.
             * </li> 
             * <li> 
	     * <code class="prettyprint">"none"</code> - no actions will be associated with the escape key.
             * </li> 
             * <li> 
	     * <code class="prettyprint">"escape"</code> -  the dialog will close when it has focus and user presses the escape (ESC) key. A close icon will not automatically be created.
             * </li> 
             * </ul>
             *
             * Note that the cancelBehavior applies to both automatic and user-defined headers. So by default, a user-defined header will have a system generated close icon.
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"icon"</code>
             *
             * @example <caption>Initialize the dialog to disable the default <code class="prettyprint">cancelBehavior</code></caption>
             * $(".selector" ).ojDialog( {cancelBehavior: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">cancelBehavior</code> option, after initialization:</caption>
             * // getter
             * var cancelBehavior = $(".selector" ).ojDialog( "option", "cancelBehavior" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "cancelBehavior", "none");
             */
	    cancelBehavior: "icon",

	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (replaced by escapeBehavior)
             //
	    // closeOnEscape: true,

	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated
             //
	    // closeText: "",

	    //
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated
             //
             // dialogClass: "",

	    /**
	     * Specifies the drag affordance.
	     * If set to <code class="prettyprint">"title-bar"</code> (the default) the dialog will be draggable by the title bar.
	     * If <code class="prettyprint">"none"</code>, the dialog will not be draggable.
             *
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"title-bar"</code>
             *
             * @example <caption>Initialize the dialog to disable dragging <code class="prettyprint">dragAffordance</code></caption>
             * $(".selector" ).ojDialog( {dragAffordance: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">dragAffordance</code> option, after initialization:</caption>
             * // getter
             * var dragAffordance = $(".selector" ).ojDialog( "option", "dragAffordance" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "dragAffordance", "none");
             */
	    dragAffordance: "title-bar",

	    //
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (renamed to dragAffordance)
             //
	    // draggable: true,

	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (use css classes instead)
	    // 
	    // hide: null,

	    //
	     // The height of the dialog. <br>
	     // <strong>Multiple types are supported:</strong><ul>
	     // <li>
	     // <strong>Number</strong>: The height in pixels.</li>
	     // <li>
	     // <strong>String</strong>: The only supported string value is <code>"auto"</code> which will allow the dialog height to adjust based on its content.</li>
	     // </ul>
             //
             // @expose 
             // @memberof oj.ojDialog
             // @type {string|number} 
             //
             // @example <caption>Initialize the dialog to a fixed height <code class="prettyprint">height</code></caption>
             // $(".selector" ).ojDialog( {height: 300 } );
             // 
             // @example <caption>Get or set the <code class="prettyprint">height</code> option, after initialization:</caption>
             // // getter
             // var height = $(".selector" ).ojDialog( "option", "height" );
             // 
             // // setter
             // $(".selector" ).ojDialog( "option", "height", 300);
            //
	    // height: "auto",

	    /**
             * <p> Set the initial visibility of the dialog. 
	     * If set to <code class="prettyprint">"show"</code>, the dialog will automatically open upon initialization. 
	     * If <code class="prettyprint">"hide"</code>, the dialog will stay hidden until the <a href="#method-open"><code class="prettyprint">open()</code></a> method is called.
             *
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"hide"</code>
             *
             * @example <caption>Initialize the dialog with the <code class="prettyprint">initialVisibility</code> option specified:</caption>
             * $(".selector" ).ojDialog( {initialVisibility: "show" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">initialVisibility</code> option, after initialization:</caption>
             * // getter
             * var initialVisibility = $(".selector" ).ojDialog( "option", "initialVisibility" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "initialVisibility", "show");
             */
	    // initialVisibility: "show",
	    initialVisibility: "hide",

	    // createTitlebar: true,

	    //
            // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (use css variables max-height instead)
             //
	    // maxHeight: null,
	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (use css variables max-width instead)
             //
	    // maxWidth: null,
	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (use css variables min-height instead)
             //
	    // minHeight: 150,
	    // 
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (use css variables min-width instead)
            //
	    // minWidth: 150,

	    //
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @deprecated (replaced by modality)
             //
	    // modal: false,

	    /**
	     *
	     * The modality of the dialog. Valid values are:
             * <ul>
             * <li> 
	     * <code class="prettyprint">"modal"</code> - (the default) The dialog is modal. Interactions with other page elements are disabled. Modal dialogs overlay other page elements.
             * </li> 
             * <li> 
	     * <code class="prettyprint">"modeless"</code> - defines a modeless dialog.
             * </li> 
             * </ul>
             *
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @default <code class="prettyprint">"modal"</code>
             * @type {string}
             *
             * @example <caption>Initialize the dialog to a specific modality <code class="prettyprint">modality</code></caption>
             * $(".selector" ).ojDialog( {modality: "modal" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">modality</code> option, after initialization:</caption>
             * // getter
             * var modality = $(".selector" ).ojDialog( "option", "modality" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "modality", "modal");
             */
	    modality: "modal",

	    // todo: link to position utility?
	    // JQUi doc had { ..., of: button}} - what does this mean?

           /**
            * <p>Position object is defined by the jquery position API and is used to establish the location the
            * dialog will appear relative to another element.  The postion object contains the following properties:
            * "my", "at", "of", "colision", "using" and "within".</p>
            *
            * <p>The "my" and "at" properties defines aligment points relative to the dialog and other element.  The
            * "my" property represents the dialogs alignment where the "at" property represents the other element
            * that can be identified by "of" or defauts to the launcher when the dialog opens.  The values of these
            * properties describe a "horizontal vertical" location.</p>
            *
            * <p>Acceptable "horizontal" alignments values are: "right", "center", "left", "start", "end".  Note: Jet has
            * added "start" and "end" options to be more RTL friendly.  The Jet values of "start" and "end" normalize
            * to "right" or "left" depending on the direction of the document.</p>
            *
            * <p>Acceptable "vertical" alignment values are: "top", "center" and "bottom".</p>
            *
            * The following is a short summary of the most interesting positon properties:
            * <ul>
            *   <li><code class="prettyprint">my</code> - A "vertical horizontal" rule that defines the location of the dialog
            *       used for alignment.</li>
            *   <li><code class="prettyprint">at</code> - A "vertical horizontal" rule that defines the location of the
            *       other element for used alignment. The other element is defined by "of" or defaults to the open launcher
            *       argument if not specified.</li>
            * </ul>
            *
            * @expose
            * @memberof oj.ojDialog
            * @instance
            * @type {Object}
            * @default <code class="prettyprint">{my: "center", at: "center", collision: "fit"}</code>
            *
            * @example <caption>Initialize the dialog with <code class="prettyprint">position</code> option specified:</caption>
            * $( ".selector" ).ojDialog( { "position": {"my": "left top", "at": "right top"} } );
            *
            * @example <caption>Get or set the <code class="prettyprint">position</code> option, after initialization:</caption>
            * // getter
            * var position = $( ".selector" ).ojDialog( "option", "position" );
            *
            * // setter
            * $( ".selector" ).ojDialog( "option", "position", {"my": "start bottom", "at": "end+14 top" } );
            */
     	    position: {
                /**
                 *
                 * @expose 
                 * @alias position.my
                 * @memberof! oj.ojDialog
                 * @instance
     		 * @type {string}
                 * @default <code class="prettyprint">"center"</code>
                 *
                 */
		my: "center",
                /**
                 *
                 * @expose 
                 * @alias position.at
                 * @memberof! oj.ojDialog
                 * @instance
		 * @type {string}
                 * @default <code class="prettyprint">"center"</code>
                 *
                 */
		at: "center",
                /**
                 *
                 * @expose 
                 * @alias position.of
                 * @memberof! oj.ojDialog
                 * @instance
		 * @type {Object}
                 * @default <code class="prettyprint">"window"</code>
                 *
                 */
		of: window,
                /**
                 *
                 * @expose 
                 * @alias position.collision
                 * @memberof! oj.ojDialog
                 * @instance
		 * @type {string}
                 * @default <code class="prettyprint">"fit"</code>
                 *
                 */
		collision: "fit",
		// Ensure the titlebar is always visible
		using: function( pos ) {
		    var topOffset = $( this ).css( pos ).offset().top;
		    if ( topOffset < 0 ) {
			$( this ).css( "top", pos.top - topOffset );
		    }
		}
	    },

	    /**
	     *
	     * The resizeBehavior of the dialog. "resizable" (default) makes the dialog resizable.
             * "none" disables dialog resizability.
             *
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"resizable"</code>
             *
             * @example <caption>Initialize the dialog to a specific resizeBehavior <code class="prettyprint">resizeBehavior</code></caption>
             * $(".selector" ).ojDialog( {resizeBehavior: "none" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">resizeBehavior</code> option, after initialization:</caption>
             * // getter
             * var resizeBehavior = $(".selector" ).ojDialog( "option", "resizeBehavior" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "resizeBehavior", "none");
             */
	    resizeBehavior: "resizable",

	    //
             // @expose 
	     // @memberof oj.ojDialog
	     // @instance
             // @deprecated Replaced by resizeBehavior.
             //
	    // resizable: true,


	    /**
	     *
	     * The WAI-ARIA role of the dialog. By default, role="dialog" is added to the generated HTML markup that surrounds the dialog.
             * When used as an alert dialog, the user should set role to "alertdialog".
             *
             * @expose 
             * @memberof oj.ojDialog
             * @instance
             * @type {string}
             * @default <code class="prettyprint">"dialog"</code>
             *
             * @example <caption>Initialize the dialog with the <code class="prettyprint">role</code></caption> option specified:</caption>
             * $(".selector" ).ojDialog( {role: "alertdialog" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">role</code> option, after initialization:</caption>
             * // getter
             * var role = $(".selector" ).ojDialog( "option", "role" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "role", "alertdialog");
             */
	    role: "dialog",

	    //
            // @expose 
	    // @memberof oj.ojDialog
	    // @instance
            // @deprecated (use css classes instead)
            //
	    // show: null,

	    /**
	     *
	     * Specify the title of the dialog. null is the default. 
             *
             * @expose 
             * @memberof oj.ojDialog
	     * @instance
             * @type {string|null}
             *
             * @example <caption>Initialize the dialog to a specific title <code class="prettyprint">title</code></caption>
             * $(".selector" ).ojDialog( {title: "Title of Dialog" } );
             * 
             * @example <caption>Get or set the <code class="prettyprint">title</code> option, after initialization:</caption>
             * // getter
             * var title = $(".selector" ).ojDialog( "option", "title" );
             * 
             * // setter
             * $(".selector" ).ojDialog( "option", "title", "Title of Dialog");
             */
	    title: null,

	    //
	     // The width of the dialog, in pixels <br>
	     // <strong>Multiple types are supported:</strong><ul>
	     // <li>
	     // <strong>Number</strong>: The width in pixels.</li>
	     // <li>
	     // <strong>String</strong>: The only supported string value is <code>"auto"</code> which will allow the dialog width to adjust based on its content.</li>
	     // </ul>
             //
             //
             // @expose 
             // @memberof oj.ojDialog
	     // @instance
             // @type {string|number} 
             // @default <code class="prettyprint">300</code>
             //
             // @example <caption>Initialize the dialog to a fixed width <code class="prettyprint">width</code></caption>
             // $(".selector" ).ojDialog( {width: 400 } );
             // 
             // @example <caption>Get or set the <code class="prettyprint">width</code> option, after initialization:</caption>
             // // getter
             // var width = $(".selector" ).ojDialog("option", "width" );
             // 
             // // setter
             // $(".selector" ).ojDialog("option", "width", 400);
            //

	    // width: "auto",
	    // width: "300",

	    ///////////////////////////////////////////////////////
	    // events
	    ///////////////////////////////////////////////////////

            /**
             * Triggered when a dialog is about to close. If cancelled, the dialog will not close.
             *
	     * @expose
             * @event 
             * @name beforeClose
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">beforeClose</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "beforeClose": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeClose</code> event:</caption>
             * $( ".selector" ).on( "ojbeforeclose", function( event, ui ) {} );
             */

	    beforeClose: null,

            /**
             * Triggered when the dialog is about to to open.
             *
	     * @expose
             * @event 
             * @name beforeOpen
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">beforeOpen</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "beforeOpen": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeOpen</code> event:</caption>
             * $( ".selector" ).on( "ojbeforeopen", function( event, ui ) {} );
             */

	    beforeOpen: null,


		// * @name close
            /**
             * Triggered when the dialog is closed.
             *
	     * @expose
             * @event 
             * @name oj.ojDialog#close
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">close</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "close": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">close</code> event:</caption>
             * $( ".selector" ).on( "close", function( event, ui ) {} );
             */

	    close : null,

	    //
             // @expose 
	     // @memberof oj.ojDialog
	     // @instance
             // @deprecated (In the future, this functionality will be supported in HTML 5)
             //
	    // drag: null,

	    //
             // @expose 
	     // @memberof oj.ojDialog
	     // @instance
             // @deprecated (In the future, this functionality will be supported in HTML 5)
             //
	    //dragStart: null,

	    //
             // @expose 
	     // @memberof oj.ojDialog
	     // @instance
             // @deprecated (In the future, this functionality will be supported in HTML 5)
             //
	    // dragStop: null,

            /**
             * Triggered when the dialog gains focus.
             *
	     * @expose
             * @event 
             * @name focus
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">focus</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "focus": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojfocus</code> event:</caption>
             * $( ".selector" ).on( "ojfocus", function( event, ui ) {} );
             */

	    focus: null,
            /**
             * Triggered when the dialog is opened.
             *
	     * @expose
             * @event oj.ojDialog#open
             * @name open
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">open</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "open": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojopen</code> event:</caption>
             * $( ".selector" ).on( "ojopen", function( event, ui ) {} );
             */
	    open: null,

            /**
             * Triggered when the dialog is being resized.
             *
	     * @expose
             * @event 
             * @name resize
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resize</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resize": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresize</code> event:</caption>
             * $( ".selector" ).on( "ojresize", function( event, ui ) {} );
             */
	    resize: null,

            /**
             * Triggered when the user starts resizing the dialog.
             *
	     * @expose
             * @event 
             * @name resizeStart
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resizeStart</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resizeStart": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresizeStart</code> event:</caption>
             * $( ".selector" ).on( "ojresizestart", function( event, ui ) {} );
             */
	    resizeStart: null,

            /**
             * Triggered when the user stops resizing the dialog.
             *
	     * @expose
             * @event 
             * @name resizeStop
             * @memberof oj.ojDialog
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Currently empty
             * 
	     * <ul>
	     * <li>
	     * <div><strong>event</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Event">Event</a>
	     * </div>
	     * <div></div>
	     * </li>
	     * <li>
	     * <div><strong>ui</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div></div>
	     * <ul>
	     * <li>
	     * <div><strong>originalPosition</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The CSS position of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>position</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current CSS position of the dialog.</div>
	     * </li>
	     * <li>
	     * <div><strong>originalSize</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The size of the dialog prior to being resized.</div>
	     * </li>
	     * <li>
	     * <div><strong>size</strong></div>
	     * <div>Type: <a href="http://api.jquery.com/Types/#Object">Object</a>
	     * </div>
	     * <div>The current size of the dialog.</div>
	     * </li>
	     * </ul>
	     * </li>
	     * </ul>
	     * 
             * @example <caption>Initialize the dialog with the <code class="prettyprint">resizeStop</code> callback specified:</caption>
             * $( ".selector" ).ojDialog({
             *     "resizeStop": function( event, ui ) {}
             * });
             * 
             * @example <caption>Bind an event listener to the <code class="prettyprint">ojresizeStop</code> event:</caption>
             * $( ".selector" ).on( "ojresizestop", function( event, ui ) {} );
             */
	    resizeStop: null
	},

        
        /**
         * Triggered when the dialog is created.
         *
         * @expose
         * @override
         * @event 
         * @name create
         * @memberof oj.ojDialog
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Currently empty
         * 
         * @example <caption>Initialize the dialog with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojDialog({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */

	_ComponentCreate : function ()
	{
            this._super();
	    // _create: function() {
	    this.originalCss = {
		display: this.element[0].style.display,
		width: this.element[0].style.width,
		// minHeight: this.element[0].style.minHeight,
		// maxHeight: this.element[0].style.maxHeight,
		height: this.element[0].style.height
	    };
	    this.originalPosition = {
		parent: this.element.parent(),
		index: this.element.parent().children().index( this.element )
	    };
	    this.originalTitle = this.element.attr("title");
	    this.options.title = this.options.title || this.originalTitle;

	    this._createWrapper();

	    this.element
		.show()
		.removeAttr("title")
		// .addClass("oj-dialog-content oj-component-content")
		.addClass("oj-dialog-content oj-dialog-default-content")
		.appendTo( this.uiDialog );

	    this.userDefinedDialogHeader = false;

	    // 
	    // If there is not nested content,
	    // simply find the first oj-dialog-header
	    // 
	    var nestedContent = this.element.find(".oj-dialog");

	    if (!nestedContent.length) {

		this._userDefinedHeader = this.element.find(".oj-dialog-header");
		if (this._userDefinedHeader.length) {
		    this.userDefinedDialogHeader = true;
		}
	    }
	    else {

		//
		// For nested content,
		// look for a header that is NOT contained with an oj-dialog-body
		//

		var allDialogHeaders = this.element.find('.oj-dialog-header');

		var that = this;

		//this.element('.oj-dialog-header').each(function(index, li) {
		allDialogHeaders.each(function(index, li) {

		    var dialogHeader = $(li);
		    var isNestedDialog = dialogHeader.closest('.oj-dialog-body');

		    //
		    // If the header is not nested within an .oj-dialog-body,
		    // then it IS a user-defined header.
		    //
		    if (!isNestedDialog.length) {
			// this._userDefinedHeader = dialogHeader;
			that._userDefinedHeader = dialogHeader;
			// this.userDefinedDialogHeader = true;
			that.userDefinedDialogHeader = true;
			return false;
		    }
		    
		});

	    }

	    if (this.userDefinedDialogHeader) {

		this._createPlaceHolderHeader(this._userDefinedHeader);
		this._userDefinedHeader.prependTo(this.uiDialog);

		if (this.options.cancelBehavior === "icon") {

		    this._createCloseButton(this._userDefinedHeader);

		    // 
		    // Insert oj-dialog-title between oj-dialog-header and oj-dialog-header-close-wrapper
		    // 
		    this._userDefinedTitle = this._userDefinedHeader.find(".oj-dialog-title");
		    if (this._userDefinedTitle.length)
		    	this._userDefinedTitle.insertAfter(this.uiDialogTitlebarCloseWrapper);

		}

	    }
	    else {
		this._createTitlebar(); 
	    }

	    this.uiDialogFooter = this.element.find(".oj-dialog-footer");
	    this._createPlaceHolderFooter(this.uiDialogFooter);

	    if (this.uiDialogFooter) {
		this.uiDialogFooter.addClass("oj-helper-clearfix")
		this.uiDialogFooter.appendTo(this.uiDialog);
	    }

	    if ( this.options.dragAffordance === "title-bar" && $.fn.draggable ) {
		this._makeDraggable();
	    }

	    // 
	    // Set up the resize delay.
	    // 
	    this._delayedResizeFcn = this._resizeBody.bind(this);
	    this._delayId = window.setTimeout(this._delayedResizeFcn, _resizeDelay);

	    // 
	    // Create the resize listener.
	    // 

	    //
	    // use this for testing (this would bypass the timeout code path).
	    // this._handleResizeFcn = this._resizeBody.bind(this);
	    //
	    this._handleResizeFcn = this._handleResize.bind(this);
            oj.DomUtils.addResizeListener(this.uiDialog[0], this._handleResizeFcn);

            this._hasResizeListener = true;

	    this['_isOpen'] = false;

	    this._trackFocus();

            this._super();
	},

	_init: function() {

	    if (this.options.initialVisibility === "show" ) {
		this.open();
	    }

	    // if ( this.options.autoOpen ) {
	    // this.open();
    	    // }

	},

	// 
	// Return the location to append to.
	// (Always returns "body" element)
	// 
	_appendTo: function() {

	    // var element = this.options.appendTo;
	    // if ( element && (element.jquery || element.nodeType) ) return $( element );
	    // return this.document.find( element || "body" ).eq( 0 );
	    return this.document.find("body").eq( 0 );
	},

	/**
	 * Remove the dialog functionality completely. 
	 * This will return the element back to its pre-init state.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#destroy
	 * @memberof oj.ojDialog
	 * @instance
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
	 * var destroy = $( ".selector" ).ojDialog( "destroy" );
	 */

	_destroy: function() {

	    var next,
	    originalPosition = this.originalPosition;

	    if (this['_isOpen']) this.close();

	    if (this._hasResizeListener)
	    {
		oj.DomUtils.removeResizeListener(this.uiDialog[0], this._handleResizeFcn);
		this._hasResizeListener = false;
	    }

	    // this._destroyOverlay();

	    if (this._resizableComponent) {
		this._resizableComponent("destroy");
		this._resizableComponent = null;
	    }

	    // var footer = this.uiDialog.find(".oj-dialog-footer");

	    if (this.uiDialogFooter) {
		this.uiDialogFooter.removeClass("oj-helper-clearfix")
		$('#' + this._placeHolderFooterId).replaceWith(this.uiDialogFooter);
	    }

	    this._desroyCloseButton();

	    if (this.userDefinedDialogHeader) {

		var header = this.uiDialog.find(".oj-dialog-header");
		if (header) 
		    $('#' + this._placeHolderHeaderId).replaceWith(header);
	    }




	    if (this.uiDialogTitle) {
		this.uiDialogTitle.remove();
		this.uiDialogTitle = null;
	    }

	    // causes testing problems.

/*

	    if (this.uiDialogTitlebar) {
		this.uiDialogTitlebar.remove();
		this.uiDialogTitlebar = null;
	    }

*/


	    this.element
		.removeUniqueId()
		.removeClass( "oj-dialog-content oj-dialog-default-content" )
		.css( this.originalCss );

	    this.uiDialog.stop( true, true );
	    this.element.unwrap();

	    if ( this.originalTitle ) {
		this.element.attr( "title", this.originalTitle );
	    }



	    // if (_putback) {
	    // $('#' + this._placeHolderId).replaceWith(this.element);
	    // this._destroyPutback();
	    // }

            this._super();
	},

	/* resize handler */
	_handleResize: function(width, height)
	{

	    if (this._delayId == null)
		this._delayId = window.setTimeout(this._delayedResizeFcn, _resizeDelay);
	},

	/**
         * Refreshes the dialog. JET components require a <code class="prettyprint">refresh()</code> after a supported DOM change is made 
         * that affects the component, of which the component would otherwise be unaware.  
         * 
         * <p>This method calls <code class="prettyprint">baseComponent.refresh()</code>, but doesn't currently do anything dialog-specific.
         * Note that anything having a JS API, such as the Dialog's title or modality, must be set via the API, not 
         * by mutating the DOM and calling <code class="prettyprint">refresh()</code>. 
         * 
         * @expose 
         * @name oj.ojDialog#refresh
	 * @memberof oj.ojDialog
	 * @method 
	 * @instance
         * 
         * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
         * $( ".selector" ).ojDialog( "refresh" );
         */
	refresh: function() // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
	{
            this._super();
	    // this._measureDiv();
	},

	/**
	 * Returns a <code class="prettyprint">jQuery</code> object containing the generated wrapper.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @expose
	 * @name oj.ojDialog#widget
	 * @memberof oj.ojDialog
	 * @instance
	 * @return {jQuery} the dialog
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
	 * var widget = $( ".selector" ).ojDialog( "widget" );
	 */
	widget: function() {
	    return this.uiDialog;
	},

	disable: $.noop,
	enable: $.noop,

	
        // * @variation 2
	    // @name oj.ojDialog#close

	/**
	 * Closes the dialog.
	 * 
         * @name oj.ojDialog#close
	 * @method 
	 * @memberof oj.ojDialog
	 * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @return {void}
         * @fires oj.ojDialog#beforeClose
         * @fires oj.ojDialog#close
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">close</code> method:</caption>
	 * var close = $( ".selector" ).ojDialog( "close" );
	 */
	close: function( event ) {
	    var that = this;

	    if ( !this['_isOpen'] || this._trigger( "beforeClose", event ) === false ) {
		return;
	    }

	    // manage resizable notifications
            oj.Components.subtreeHidden(this.uiDialog[0]);

	    this['_isOpen'] = false;
	    this._focusedElement = null;
	    this._destroyOverlay();
	    this._untrackInstance();

	    if ( !this.opener.filter(":focusable").focus().length ) {
		// Hiding a focused element doesn't trigger blur in WebKit
		// so in case we have nothing to focus on, explicitly blur the active element
		// https://bugs.webkit.org/show_bug.cgi?id=47182
		$( this.document[0].activeElement ).blur();
	    }

	    // this._hide( this.uiDialog, this.options.hide, function() {
	    this._hide( this.uiDialog, null, function() {
		that._trigger( "close", event );
	    });

	    if (_putback) {

		// Put the dialog back to its original location.
		// Old - this would put the unwrapped code back
		// $('#' + this._placeHolderId).replaceWith($('#' + this._elementId));

		// Remove the old wrapper.
		//$('#' + this._wrapperId).remove();

		//
		// Put contents and wrapper back to inline location.
		//
		$('#' + this._placeHolderId).replaceWith($('#' + this._wrapperId));

	    }
	},

	/**
	 * Returns true if the dialog is currently open.
	 * 
	 * <p>This method does not accept any arguments.
	 * 
	 * @method
	 * @name oj.ojDialog#isOpen
	 * @memberof oj.ojDialog
	 * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">isOpen</code> method:</caption>
	 * var isOpen = $( ".selector" ).ojDialog( "isOpen" );
	 */
	isOpen: function() {
	    return this['_isOpen'];
	},

	// 
	// Moves the dialog to the top of the dialog stack.
	// 
	// <p>This method does not accept any arguments.
	// 
	// @method
	// @name oj.ojDialog#moveToTop
	// @memberof oj.ojDialog
	// @instance
	// 
	// @example <caption>Invoke the <code class="prettyprint">moveToTop</code> method:</caption>
	// var moveToTop = $( ".selector" ).ojDialog( "moveToTop" );
	// 
	// moveToTop: function() {
	// this._moveToTop();
        // },

	// 
	// For the opened dialog and focus managment,
	// _moveToTop moves the dialog to the top of the visibility stack.
	// 
	_moveToTop: function( event, silent ) {

	    var moved = !!this.uiDialog.nextAll(":visible").insertBefore( this.uiDialog ).length;
	    if ( moved && !silent ) {
		this._trigger( "focus", event );
	    }
	    return moved;

	},


   // * @memberof oj.ojDialog

	/**
	 * Opens the dialog.
	 * 
	 * @method
	 * @name oj.ojDialog#open
	 * @memberof oj.ojDialog
	 * @instance
         * @return {void}
         * @fires oj.ojDialog#beforeOpen
         * @fires oj.ojDialog#open
	 * 
	 * @example <caption>Invoke the <code class="prettyprint">open</code> method:</caption>
	 * var open = $( ".selector" ).ojDialog( "open" );
	 */
	open: function( event ) {

            // this.$element.on('click.ojDialog', $.proxy(this.uiDialog.hide, this));

	    if (this._trigger( "beforeOpen", event ) === false ) {
		return;
	    }

	    var that = this;

	    if ( this['_isOpen'] ) {

		// orig
		// if ( this._moveToTop() ) {
		// this._focusTabbable();
		// }

		if ( this._moveToTop() ) {
		    this._focusTabbable();
		}

		return;
	    }

	    this['_isOpen'] = true;
	    this.opener = $( this.document[0].activeElement );

	    this._size();
	     if (this.options.resizeBehavior === "resizable") {
	        this._makeResizable();
	     }

	    //
	    // Reparent dialog to body on OPEN (NOT Create, as JQueryUI Dialog does).
	    //

	    this._relocateWithPutback();
	    this._createOverlay();

	    // new code - this._position() was BEFORE relocateWithPutback()
	    this._position();

	    this._moveToTop( null, true ); // orig

	    // 
	    // Reduced functonality from jqueryUI since we now encourage
	    // the use of css classes for animation instead of the jQueryUI effects package
	    // exposed via jquery show()
	    // 
	    // this._show( this.uiDialog, this.options.show, function() {
	    this._show( this.uiDialog, null, function() {
		that._focusTabbable();
		that._trigger("focus");
	    });

	    // manage resizable notifications
            oj.Components.subtreeShown(this.uiDialog[0]);

	    // Track the dialog immediately upon openening in case a focus event
	    // somehow occurs outside of the dialog before an element inside the
	    // dialog is focused (#10152)
	    this._makeFocusTarget();

	    this._trigger("open");
	},

	_focusTabbable: function() {
	    // Set focus to the first match:
	    // 1. First element inside the dialog matching [autofocus]
	    // 2. Tabbable element inside the content element
	    // 3. Tabbable element inside the footer
	    // 4. The close button
	    // 5. The dialog itself

	    // var hasFocus = this.element.find("[autofocus]");
	    var hasFocus = this._focusedElement;
	    if ( !hasFocus ) {
		hasFocus = this.element.find( "[autofocus]" );
	    }

	    if ( !hasFocus.length ) {
		hasFocus = this.element.find(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		if (this.uiDialogFooter) 
		    // hasFocus = this.uiDialogFooter.filter(":tabbable");
		    hasFocus = this.uiDialogFooter.find(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		// todo: this may not exist when a user-defined header is used.
		// We may want to provide an api for the focusable element, or
		// check the oj-dialog-header markup
		if (this.uiDialogTitlebarClose)
		    hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
	    }
	    if ( !hasFocus.length ) {
		hasFocus = this.uiDialog;
	    }
	    hasFocus.eq( 0 ).focus();
	},

	'_keepFocus': function( event ) {
	    function checkFocus() {
		var activeElement = this.document[0].activeElement,
		isActive = this.uiDialog[0] === activeElement ||
		    $.contains( this.uiDialog[0], activeElement );
		if ( !isActive ) {
		    this._focusTabbable();
		}
	    }
	    event.preventDefault();
	    checkFocus.call( this );
	},


	_trackFocus: function() {
		this._on( this.widget(), {
			focusin: function( event ) {
				this._makeFocusTarget();
				this._focusedElement = $( event.target );
			}
		});
	},

	_makeFocusTarget: function() {
		this._untrackInstance();
		this._trackingInstances().unshift( this );
	},

	_untrackInstance: function() {
		var instances = this._trackingInstances(),
			exists = $.inArray( this, instances );
		if ( exists !== -1 ) {
			instances.splice( exists, 1 );
		}
	},

	_trackingInstances: function() {
		var instances = this.document.data( "ui-dialog-instances" );
		if ( !instances ) {
			instances = [];
			this.document.data( "ui-dialog-instances", instances );
		}
		return instances;
	},


	_isNumber: function( value ) {
	    return !isNaN( parseInt( value , 10 ) );
	},

	_createWrapper: function() {

	    // make sure that the element has a unique id.
	    this.element.uniqueId();
	    this._elementId = this.element.attr('id');
	    this._wrapperId = _wrapperPrefix + this._elementId;

	    this.uiDialog = $("<div>")
		// .addClass( "oj-dialog oj-component oj-component-content oj-corner-all oj-front " +
		// .addClass( "oj-dialog oj-helper-reset-inheritable oj-component oj-dialog-front " +
	    // this.options.dialogClass )
		.addClass( "oj-dialog oj-component oj-dialog-front ")
		.hide()
		.attr({
		    // Setting tabIndex makes the div focusable
		    'tabIndex': -1,
		    'role': this.options.role,
		    'id' : this._wrapperId
		});

	    this.uiDialog.insertBefore(this.element);   // position inline

	    this._on( this.uiDialog, {
		keyup: function( event ) {

		    // if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
		    // if (this.options.escapeBehavior === "close" && !event.isDefaultPrevented() && event.keyCode &&
		    if (this.options.cancelBehavior != "none" && !event.isDefaultPrevented() && event.keyCode &&
			event.keyCode === $.ui.keyCode.ESCAPE ) {
			event.preventDefault();
			event.stopImmediatePropagation();
			this.close( event );
			return;
		    }

		    // prevent tabbing out of dialogs
		    if ( event.keyCode !== $.ui.keyCode.TAB ) {
			return;
		    }
		    var tabbables = this.uiDialog.find(":tabbable"),
		    first = tabbables.filter(":first"),
		    last  = tabbables.filter(":last");

		    if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
			first.focus( 1 );
			event.preventDefault();
		    } else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
			last.focus( 1 );
			event.preventDefault();
		    }
		},
		mousedown: function( event ) {
		    // if ( this._moveToTop( event ) ) {
		    // this._focusTabbable();
		    // }
		    if ( this._moveToTop( event ) ) {
			this._focusTabbable();
		    }
		}
	    });

	    // We assume that any existing aria-describedby attribute means
	    // that the dialog content is marked up properly
	    // otherwise we brute force the content as the description
	    if ( !this.element.find("[aria-describedby]").length ) {
		this.uiDialog.attr({
		    "aria-describedby": this.element.uniqueId().attr("id")
		});
	    }

	},


	_desroyCloseButton: function() {

	    if (this.uiDialogTitlebarCloseWrapper) {
		this.uiDialogTitlebarCloseWrapper.remove();
		this.uiDialogTitlebarCloseWrapper = null;
		this.uiDialogTitlebarClose = null;
	    }
	},


	// 
	// Create a close button.
	// 
	_createCloseButton: function(domDestination) {

	    this.uiDialogTitlebarCloseWrapper = $("<div>")
		.addClass("oj-dialog-header-close-wrapper")
		.attr("tabindex", "1")
		.attr("aria-label", "close")
		.attr("role", "button")
		.appendTo(domDestination);

	    this.uiDialogTitlebarClose = $("<span>")
		.addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon")
		.attr("alt", "close icon" )
		.prependTo( this.uiDialogTitlebarCloseWrapper);

	    this._on( this.uiDialogTitlebarCloseWrapper, {
		click: function( event ) {
		    event.preventDefault();
		    event.stopImmediatePropagation();
		    this.close( event );
		},
		mousedown: function( event ) {
		    var currTarget = event.currentTarget;
		    $(currTarget).addClass("oj-active");
		},
		mouseup: function( event ) {
		    var currTarget = event.currentTarget;
		    $(currTarget).removeClass("oj-active");
		},
		mouseenter: function( event ) {
		    var currTarget = event.currentTarget;
		    $(currTarget).addClass("oj-hover");
		},
		mouseleave: function( event ) {
		    var currTarget = event.currentTarget;
		    $(currTarget).removeClass("oj-hover");
		    $(currTarget).removeClass("oj-active");
		},

		//
		// Close dialog when close icon has focus and SPACE is entered.
		//
		keyup: function( event ) {

                    if (event.keyCode && event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER) {
			event.preventDefault();
			event.stopImmediatePropagation();
			this.close( event );
			return;
		    }
		}

	    });

	},

	_createTitlebar: function() {
	    var uiDialogTitle;
	    var headerClasses;

	    headerClasses = "oj-dialog-header oj-helper-clearfix";

	    this.uiDialogTitlebar = $("<div>")
		.addClass(headerClasses)
		.prependTo( this.uiDialog );

	    this._on( this.uiDialogTitlebar, {
		mousedown: function( event ) {
		    // Don't prevent click on close button (#8838)
		    // Focusing a dialog that is partially scrolled out of view
		    // causes the browser to scroll it into view, preventing the click event
		    // if ( !$( event.target ).closest(".oj-fwk-icon-close") ) {
		    if ( !$( event.target ).closest(".oj-dialog-close-icon") ) {
			// Dialog isn't getting focus when dragging (#8063)
			this.uiDialog.focus();
		    }
		}
	    });


	    if (this.options.cancelBehavior === "icon")
		this._createCloseButton(this.uiDialogTitlebar);


	    uiDialogTitle = $("<span>")
		.uniqueId()
		.addClass("oj-dialog-title")
		// .prependTo( this.uiDialogTitlebar );
		.appendTo( this.uiDialogTitlebar );
	    this._title( uiDialogTitle );

	    this.uiDialog.attr({
		"aria-labelledby": uiDialogTitle.attr("id")
	    });
	},

	_title: function( title ) {
	    if ( !this.options.title ) {
		title.html("&#160;");
	    }
	    title.text( this.options.title );
	},


	_makeDraggable: function() {
	    var that = this,
	    options = this.options;

	    function filteredUi( ui ) {
		return {
		    position: ui.position,
		    offset: ui.offset
		};
	    }

	    this.uiDialog.draggable({
		// cancel: ".oj-dialog-content, .oj-dialog-titlebar-close",
		// handle: ".oj-dialog-titlebar",
		cancel: ".oj-dialog-content, .oj-dialog-header-close",
		handle: ".oj-dialog-header",
		containment: "document",
		start: function( event, ui ) {
		    $( this ).addClass("oj-dialog-dragging");
		    that._blockFrames();
		    that._trigger( "dragStart", event, filteredUi( ui ) );
		},
		'drag': function( event, ui ) {
		    that._trigger( "drag", event, filteredUi( ui ) );
		},
		stop: function( event, ui ) {
		    options.position = [
			ui.position.left - that.document.scrollLeft(),
			ui.position.top - that.document.scrollTop()
		    ];
		    $( this ).removeClass("oj-dialog-dragging");
		    that._unblockFrames();
		    that._trigger( "dragStop", event, filteredUi( ui ) );
		}
	    });
	},

	_makeResizable: function() {
	    var that = this,

	    options = this.options,

	    // handles = options.resizable,
	    position = this.uiDialog.css("position"),
	    // resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";

	    resizeHandles = "n,e,s,w,se,sw,ne,nw";

	    function filteredUi( ui ) {
		return {
		    'originalPosition': ui.originalPosition,
		    'originalSize': ui.originalSize,
		    position: ui.position,
		    size: ui.size
		};
	    }

	    this._resizableComponent = this.uiDialog['ojResizable'].bind(this.uiDialog);

	    // this.uiDialog.['ojResizable']({
	    // this.uiDialog.resizable({

	    this._resizableComponent({
		cancel: ".oj-dialog-content",
		containment: "document",

		handles: resizeHandles,
		start: function( event, ui ) {
		    $( this ).addClass("oj-dialog-resizing");
		    that._blockFrames();
		    // fire resizestart
		    that._trigger( "resizeStart", event, filteredUi( ui ) );
		},
		resize: function( event, ui ) {
		    that._trigger( "resize", event, filteredUi( ui ) );
		},
		stop: function( event, ui ) {

		    $( this ).removeClass("oj-dialog-resizing");
		    that._unblockFrames();
		    that._trigger( "resizeStop", event, filteredUi( ui ) );
		}
	    })
		    .css( "position", position );

	},

	_position: function() {

	    // Need to show the dialog to get the actual offset in the position plugin
	    var isVisible = this.uiDialog.is(":visible");
	    if ( !isVisible ) {
		this.uiDialog.show();
	    }

	    var pos = this.options.position;

	    // 
	    // Extended position objects with better names to support RTL.
	    // 
	    var isRtl = this._GetReadingDirection() === "rtl";
	    this.uiDialog.position(oj.PositionUtils.normalizeHorizontalAlignment(pos, isRtl));

	    // this.uiDialog.position(pos);
	    // this.uiDialog.position( this.options.position );

	    if ( !isVisible ) {
		this.uiDialog.hide();
	    }
	},

	_setOption: function( key, value, flags ) {
	    /*jshint maxcomplexity:15*/
	    var isDraggable, isResizable,
	    uiDialog = this.uiDialog;

	    if ( key === "disabled" ) {
		return;
	    }

	    this._super( key, value, flags );

            switch (key) 
            {
	    case "dragAffordance":

		isDraggable = uiDialog.is(":data(ui-draggable)");

		if ( isDraggable && value === "none") {
		    uiDialog.draggable("destroy");
		}

		if ( !isDraggable && value === "title-bar" ) {
		    this._makeDraggable();
		}

		break;

	    case "position":
		this._position();
		break;

	    case "resizeBehavior":

		isResizable = false;
		if (this._resizableComponent) isResizable = true;

		// currently resizable, becoming non-resizable
		if ( isResizable && value != "resizable" ) {
		    // uiDialog._resizableComponent("destroy");
		    this._resizableComponent("destroy");
		    this._resizableComponent = null;
		}

		// currently resizable, changing handles
		// if ( isResizable && typeof value === "string" ) {
		// this._resizableComponent( "option", "handles", value );
		//}

		// currently non-resizable, becoming resizable
		// if ( !isResizable && value !== false ) {
		if ( !isResizable && value === "resizable" ) {
		    this._makeResizable();
		}

		break;

	    case "title":
		this._title( this.uiDialogTitlebar.find(".oj-dialog-title") );
		break;

	    case "role":
		uiDialog.attr("role", value);
		break;

	    case "modality":

		if (value === "modal") {
		    this._createOverlay();
		}
		else if (value === "modeless")
		    this._destroyOverlay();

		break;

	    case "cancelBehavior":

		if (value === "none" || value === "escape") {

		    // we may need additional code here
		    // if (this.userDefinedDialogHeader) {   }

		    this._desroyCloseButton();

		}
		else if (value === "icon") {

		    if (this.userDefinedDialogHeader) {

			this._createCloseButton(this._userDefinedHeader);

			// 
			// Insert oj-dialog-title between oj-dialog-header and oj-dialog-header-close-wrapper
			// 
			this._userDefinedTitle = this._userDefinedHeader.find(".oj-dialog-title");
			if (this._userDefinedTitle.length)
		    	    this._userDefinedTitle.insertAfter(this.uiDialogTitlebarCloseWrapper);

		    } else 
			this._createCloseButton(this.uiDialogTitlebar);

		}

		break;

	    }
	},

	// 
	// Set the height of the body based on the dialog, header, and footer height.
	// bodyHeight = dialogHeight - headerHeight - footerHeight;
	// Called to implement interactive resize.
	// 
	_resizeBody: function() {

	    // clearTimeout(this._delayId);

	    var bodyHeight = this._getBodyHeight();

	    this.element.css({height: bodyHeight});

	},

	_getBodyHeight: function() {

	    var header;

	    this._delayId = null;

	    if (this.userDefinedDialogHeader)
		header = this._userDefinedHeader;
	    else header = this.uiDialogTitlebar;

	    var headerHeight = header.outerHeight();

	    var footerHeight = 0;
	    if (this.uiDialogFooter) {
		footerHeight = this.uiDialogFooter.outerHeight();
	    }

	    var bodyHeight =  this.uiDialog.height() - headerHeight - footerHeight;

	    return bodyHeight;
	},

	_measureDialogHeight: function() {

	    // 
	    // Convert the .css width and height variables to numerical values.
	    // This is done in order to be compatible with the ojResizable API.
	    // The numberical value conversion is done by rendering to an off-document div.
	    // 

	    // create a temporary element
	    var tempE = $("<div></div>");

	    // 
	    // Note: we use Math.ceil() for width and height.
	    // 
	    this._cssHeight = this.uiDialog.css('height');
	    if (this._cssHeight != "auto") {
		tempE.height(this._cssHeight);
		this._cssHeightNumeric = tempE.height();
		if (this._isNumber(this._cssHeightNumeric))
		    this._cssHeightNumeric = Math.ceil(this._cssHeightNumeric);
	    } 
	    else this._cssHeightNumeric = "auto";

	    tempE.remove();

	},

	//
	// Calculate the initial height of the dialog content, this is passed into ojResizable.
	//
	_size: function() {

	    this._measureDialogHeight();

	    // 
	    // Save the original dimensions
	    // 
	    var heightValue = this.uiDialog[0].style.height;
	    var widthValue = this.uiDialog[0].style.width;

	    // 
	    // Save the min/max heights, since we temporarily step on them.
	    // 
	    var minHeightValue = this.uiDialog[0].style.minHeight;
	    var maxHeightValue = this.uiDialog[0].style.maxHeight;

	    // Set element height to 0 in order to determine the height of the non-content elements.
	    this.element.css({
		width: "auto",
		minHeight: 0,
		maxHeight: "none",
		height: 0
	    });

	    var nonContentHeight;

	    // 
	    // determine the height of all the non-content elements
	    // Note: height: 'auto' is needed for accurate scrolling calculations.
	    //

	    nonContentHeight = this.uiDialog.css({
		minHeight: 0,
		maxHeight: "none",
		height: "auto"
	    }).outerHeight();

	    // 
	    // Restore the element height
	    //
	    this.element.css({
		width: '',
		minHeight: '',
		maxHeight: '',
		height: ''
	    });

	    //
	    // Restore the height back to its original.
	    // This is necessary to support browser resize of %height and % width
	    //
	    this.uiDialog.css({width: widthValue});
	    this.uiDialog.css({height: heightValue});
	    // 
	    // Restore the min and max heights.
	    // 
	    this.uiDialog.css({minHeight: minHeightValue});
	    this.uiDialog.css({maxHeight: maxHeightValue});

	    //
	    // Set the height of the inner element
	    // This is needed in order to see the overflow scrollbar
	    // if overflow occurs on the initial, unresized dialog
	    // 
	    if (heightValue != "auto" ) {
		this.element.height(Math.max( 0, this._cssHeightNumeric + _padYDelta - nonContentHeight));
	    }

	},

	_blockFrames: function() {
	    this.iframeBlocks = this.document.find( "iframe" ).map(function() {
		var iframe = $( this );

		var offset = /** @type {{left: number, top: number}}  */ (iframe.offset());

		return $( "<div>" )
		    .css({
			position: "absolute",
			width: iframe.outerWidth(),
			height: iframe.outerHeight()
		    })
		    .appendTo( iframe.parent() )
		    .offset( offset )[0];
	    });
	},

	_unblockFrames: function() {
	    if ( this.iframeBlocks ) {
		this.iframeBlocks.remove();
		delete this.iframeBlocks;
	    }
	},

	_allowInteraction: function( event ) {
	    if ( $( event.target ).closest(".oj-dialog").length ) {
		return true;
	    }

	    // TODO: Remove hack when datepicker implements
	    // the .oj-front logic (#8989)
	    return !!$( event.target ).closest(".oj-datepicker").length;
	},

	//
	// Place a system generated div in the DOM spot where the dialog is defined.
	// This is used later to return the dialog to its original relocated position.
	// Relocate the dialog to the end of the body.
	//
	_relocateWithPutback: function() {

	    if (_putback) {

		this._placeHolderId = _placeHolderPrefix + this._elementId;

		this._placeHolder = $("<div>")
		    .hide()
		    .attr({'id' : this._placeHolderId});

		this._placeHolder.insertBefore($('#' + this._wrapperId));  // position placeHolder at original in-line DOM location, before the wrapper id
	    }

		// Since the dialog is reparented to the body, it looses associate in the dom.
		// Establish linkage between the dialog and its placeholder.
		this.uiDialog.attr(oj.DomUtils.SURROGATE_ID, this._placeHolder.attr("id"));

	    this.uiDialog.appendTo( this._appendTo() ); 
	},

	_createPlaceHolderFooter: function(domElement) {

	    this._placeHolderFooterId = _placeHolderFooterPrefix + this._elementId;

	    this._placeHolderFooter = $("<div>")
		.hide()
		.attr({'id' : this._placeHolderFooterId});

	    this._placeHolderFooter.insertBefore(domElement);  

	},

	_createPlaceHolderHeader: function(domElement) {

	    this._placeHolderHeaderId = _placeHolderHeaderPrefix + this._elementId;

	    this._placeHolderHeader = $("<div>")
		.hide()
		.attr({'id' : this._placeHolderHeaderId});

	    this._placeHolderHeader.insertBefore(domElement);  

	},

	_destroyPutback: function() {

	    if (_putback) {

		if ( this.placeHolder) {

		    this.placeHolder.remove();
		    this.placeHolder = null;
		}
	    }
	},

	_createOverlay: function() {

	    if (this.options.modality === "modeless" ) {
		return;
	    }

	    if ( this.overlay ) return;

	    // We use a delay in case the overlay is created from an
	    // event that we're going to be cancelling (#2804)
	    var isOpening = true;
	    this._delay(function() {
		isOpening = false;
	    });

	    if ( !this.document.data( "oj-dialog-overlays" ) ) {

		// Prevent use of anchors and inputs
		// Using _on() for an event handler shared across many instances is
		// safe because the dialogs stack and must be closed in reverse order
		this._on( this.document, {
		    focusin: function( event ) {
			if ( isOpening ) {
			    return;
			}

			if ( !this._allowInteraction( event ) ) {
			    event.preventDefault();
			    this._trackingInstances()[ 0 ]._focusTabbable();
			}
		    }
		});
	    }

	    
	    //
	    // create an overlay that will disable anything except the dialog.
	    //
	    this.overlay = $("<div>")
		.addClass("oj-component-overlay oj-dialog-front");

	    // this.overlay.appendTo( this._appendTo() );
	    // This insertion point works better for dynamic option changes (modality option)
	    var bod = this.document.find("body").eq( 0 );
	    this.overlay.insertBefore(bod.find(".oj-dialog").eq(-0));

	    this._on( this.overlay, {
		mousedown: "_keepFocus"
	    });

	    this.document.data( "oj-dialog-overlays",
				(this.document.data( "oj-dialog-overlays" ) || 0) + 1 );
	},

	_destroyOverlay: function() {

	    // if (this.options.modality === "modeless" ) { return; }

	    if ( this.overlay ) {
		var overlays = this.document.data( "oj-dialog-overlays" ) - 1;

		if ( !overlays ) {
		    this.document
			.unbind( "focusin" )
			.removeData( "oj-dialog-overlays" );
		} else {
		    this.document.data( "oj-dialog-overlays", overlays );
		}

		this.overlay.remove();
		this.overlay = null;
	    }
	},

	/**
   * Return the subcomponent node represented by the documented locator 
   * attribute values.
   * Test authors should target sub elements using the following names:
   * <ul>
   * <li><b>oj-dialog-header</b>: dialog header div </li>
   * <li><b>oj-dialog-body</b>: dialog body div </li>
   * <li><b>oj-dialog-footer</b>: dialog footer div </li>
   * <li><b>oj-dialog-content</b>: dialog content div </li>
   * <li><b>oj-dialog-header-close-wrapper</b>: dialog header-close wrapper </li>
   * <li><b>oj-dialog-header-close-icon</b>: dialog header-close icon </li>
   * <li><b>oj-resizable-n</b>: North resizable handle </li>
   * <li><b>oj-resizable-e</b>: East resizable handle </li>
   * <li><b>oj-resizable-s</b>: South resizable handle </li>
   * <li><b>oj-resizable-w</b>: West resizable handle </li>
   * <li><b>oj-resizable-se</b>: Southeast resizable handle </li>
   * <li><b>oj-resizable-sw</b>: Southwest resizable handle </li>
   * <li><b>oj-resizable-ne</b>: Northeast resizable handle </li>
   * <li><b>oj-resizable-nw</b>: Northwest resizable handle </li>
   * </ul>
   * @expose
   * @memberof oj.ojDialog
   * @instance
   * @override
   * @param {Object} locator An Object containing at a minimum a subId property 
   *        whose value is a string, documented by the component, that allows 
   *        the component to look up the subcomponent associated with that 
   *        string.  It contains:<p>
   *        component: optional - in the future there may be more than one 
   *        component contained within a page element<p>
   *        subId: the string, documented by the component, that the component 
   *        expects in getNodeBySubId to locate a particular subcomponent
    * @example <caption>Return the locator for the dialog footer: </caption>
    * var node = $( ".selector" ).ojDialog("getNodeBySubId", {'subId', '.oj-dialog-footer'});
   * @returns {Element|null} the subcomponent located by the subId string passed
   *          in locator, if found.<p>
   */
	getNodeBySubId: function(locator)
	{
	    if (locator == null)
	    {
		return this.element ? this.element[0] : null;
	    }
	    
	    var subId = locator['subId'];

	    switch (subId) {

	    case "oj-dialog":
	    case "oj-dialog-header":
	    case "oj-dialog-body":
	    case "oj-dialog-footer":
	    case "oj-dialog-content":
	    case "oj-dialog-header-close-wrapper":
	    case "oj-dialog-header-close-icon":
	    case "oj-resizable-n":
	    case "oj-resizable-e":
	    case "oj-resizable-s":
	    case "oj-resizable-w":
	    case "oj-resizable-se":
	    case "oj-resizable-sw":
	    case "oj-resizable-ne":
	    case "oj-resizable-nw":

		var dotSubId = "." + subId;
		return (this.widget().find(dotSubId)[0]);
		break;

	    }

	    // Non-null locators have to be handled by the component subclasses
	    return null;
	}


    });


}() );


});
