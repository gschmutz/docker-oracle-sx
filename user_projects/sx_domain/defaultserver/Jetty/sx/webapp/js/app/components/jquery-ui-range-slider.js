define('orderedListMenu', [
    'jquery',
    'knockout',
    'Translate'
],

function( $, ko, Translate ) {

$.widget( "ui.windowSlider", {
    version: "1.0.0",
    options: {
        appendTo: null,
        autoFocus: false,
        delay: 300,
        minLength: 1,
        position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
        },
        source: null,

        // callbacks
        change: null,
                check: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        select: null,
        items: null
    },

    requestIndex: 0,
    pending: 0,

    _create: function() {
        // Some browsers only repeat keydown events, not keypress events,
        // so we use the suppressKeyPress flag to determine if we've already
        // handled the keydown event. #7269
        // Unfortunately the code for & in keypress is the same as the up arrow,
        // so we use the suppressKeyPressRepeat flag to avoid handling keypress
        // events when we know the keydown event was used to modify the
        // search term. #7799
        var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
            nodeName = this.element[0].nodeName.toLowerCase();

        //this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
        this.isNewMenu = true;
                this.isOpen = false;
                this.itemInFocus = -1;
                this.lastItemClicked = -1;
                var that = this;
        
        
        this.element = $('<div></div>')
            .addClass( "oep-range-slider" )
            .attr( "windowslider", "on");                
        
        
        this.initSlider();
                //this.element = this.container;
                 
                    
                this._on(this.element, {
                    click: function(event) {
                        this._toggleOpenList();
                        
                        return true;
                    },
                    blur: function() {
                        //this._closeIfBlur();
                        return true;
                    },
                    focus: function() {
                        that.unFocusList();
                    },
                    keydown: function(event) {
                        var keyCode = $.ui.keyCode;
                        //alert('Key is pressed' + event.keyCode);
                        switch( event.keyCode ) {
                case keyCode.PAGE_UP:
                                case keyCode.UP:
                                        that._focusUpList();
                                        event.preventDefault();
                                        return false;
                    break;
                case keyCode.PAGE_DOWN:
                case keyCode.DOWN:
                    this.checkAllItem.focus();
                                        event.preventDefault();
                                        return false;
                    break;
                case keyCode.ENTER:
                case keyCode.NUMPAD_ENTER:
                                                // when menu is open and has focus
                        // #6055 - Opera still allows the keypress to occur
                        // which causes forms to submit
                                                that._toggleOpenList();
                        event.preventDefault();
                    break;
                case keyCode.TAB:
                    if (!this.isOpen) {
                                            this._openList();
                                        }
                    break;
                case keyCode.ESCAPE:
                    if (this.isOpen) {
                        //this._value();
                        this._closeList( );
                        // Different browsers have different default behavior for escape
                        // Single press can mean undo or clear
                        // Double press in IE means clear the whole form
                        event.preventDefault();
                    }
                    break;
                }
                            }
                });
                if (this.options.alignMenuLeft) {
                    this.container.addClass('alignMenuLeft');
                }
                
                if (this.options.showMenuAbove) {
                    this.container.addClass('showMenuAbove');
                }

                // turning off autocomplete prevents the browser from remembering the
                // value when navigating through history, so we re-enable autocomplete
                // if the page is unloaded before the widget is destroyed. #7790
                this._on( this.window, {
                    beforeunload: function() {
                        this.element.removeAttr( "menuorderedlist" );
                    }
                });
                this._initList();

        },
        isInitialized: function() {
            var attrInited = this.container ? this.container.attr( "menuorderedlist") : false;
            return attrInited;
            
        }, 
        
    _destroy: function() {
        clearTimeout( this.searching );
        this.element
            .removeAttr( "menuorderedlist" );
        this.list.remove();
                this.container.remove();
        //this.liveRegion.remove();
    },

    _setOption: function( key, value ) {
        this._super( key, value );
                if ( key === "items") {
                }
                
                /*if (key === 'alignMenuLeft') {
                    this.container.addClass('alignMenuLeft');
                }*/
                
        if ( key === "source" ) {
            this._initSource();
        }
        if ( key === "appendTo" ) {
            this.menu.element.appendTo( this._appendTo() );
        }
        if ( key === "disabled" && value && this.xhr ) {
            this.xhr.abort();
        }
    },

    _appendTo: function() {
        var element = this.options.appendTo;

        if ( element ) {
            element = element.jquery || element.nodeType ?
                $( element ) :
                this.document.find( element ).eq( 0 );
        }

        if ( !element ) {
            element = this.element.closest( ".ui-front" );
        }

        if ( !element.length ) {
            element = this.document[0].body;
        }

        return element;
    },

    _initSlider: function() {
                var that = this;
                
                this._initUnitControl();
                this._initSliderControl();
                
                if (!$.isArray(initItems)) {
                    throw new Exception("No items for the orderedListMenu is assigned. This is required parameter for orderedListMenu control.");
                }
                
                Translate.getTranslated(this.element);
     },
     
     getUnitSettings: function() {
         var self = this;
         if (this.units) {
             return units;
         }
         units.push({ name: 'NANOSECONDS', displayName: self._getPhrase('NANOSECONDS'), min: 0, max: 1000, displaySlider: true });
         units.push({ name: 'MICROSECONDS', displayName: self._getPhrase('MICROSECONDS'), min: 0, max: 1000, displaySlider: true });
         units.push({ name: 'MILLISECONDS', displayName: self._getPhrase('MILLISECONDS'), min: 0, max: 1000, displaySlider: true });
         units.push({ name: 'SECONDS', displayName: self._getPhrase('SECONDS'), min: 0, max: 60, displaySlider: true });
         units.push({ name: 'MINUTES', displayName: self._getPhrase('MINUTES'), min: 0, max: 60, displaySlider: true });
         units.push({ name: 'HOURS', displayName: self._getPhrase('HOURS'), min: 0, max: 24, displaySlider: true });
         units.push({ name: 'ROWS', displayName: self._getPhrase('ROWS'), min: 0, max: 1000, displaySlider: true });
         units.push({ name: 'NOW', displayName: self._getPhrase('NOW'), min: 0, max: 1000, displaySlider: false });
         units.push({ name: 'UNBOUNDED', displayName: self._getPhrase('UNBOUNDED'), min: 0, max: 1000, displaySlider: false });
         this.units = units;
         return units;
     },
     _getPhrase: function(phraseId) {
         return Translate.getTranslated('oep.exploration.window.' + phraseId);
     },
     _initUnitControl: function() {
         var self = this;
         var unitsElement = this.element.find('select');
         
         var units = self.getUnitSettings();
         var addUnitOption = function(unit) {
             
             var unitOption = $('<option></option>')
                     .val(unit.name)
                     .text(unit.displayName);
         };
         
         if (!unitsElement.find('option').length) {
             $.each(units, function(unitInd, unit) { 
                unitsElement.append(addUnitOption(unit));
            });
         };
         unitsElement.change(function(ev) {
             console.log('units changed...');
         });
         this.unitsElement = unitsElement;
     },
        
        
        
        
     _getItems: function() {
            return ko.isObservable(this.options.items) ? this.options.items(): this.options.items;
     },
        
    _response: function() {
        var index = ++this.requestIndex;

        return $.proxy(function( content ) {
            if ( index === this.requestIndex ) {
                this.__response( content );
            }

            this.pending--;
            if ( !this.pending ) {
                this.element.removeClass( "ui-autocomplete-loading" );
            }
        }, this );
    },

    __response: function( content ) {
        if ( content ) {
            content = this._normalize( content );
        }
        this._trigger( "response", null, { content: content } );
        if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
            this._suggest( content );
            this._trigger( "open" );
        } else {
            // use ._close() instead of .close() so we don't cancel future searches
            this._close();
        }
    },

    close: function( event ) {
        this._close( event );
    },

    _close: function( event ) {
        if ( this.isOpen ) {
            this._closeList();
            this._trigger( "close", event );
        }
    },

    _change: function( event ) {
            this._setItems(this._value());
        if ( this.previous !== this._value() ) {
            this._trigger( "change", event, { items: this.items } );
        }
    },

    widget: function() {
        return this.list;
    },
    value: function() {
            return this._value();
    },

    _value: function() {
            var items = this.items;
            var result = [];
            $.each(items, function(index, value) {
                result.push(this.item);
            });
            return result;
        //return this.valueMethod.apply( this.element, arguments );
    }

    });
});