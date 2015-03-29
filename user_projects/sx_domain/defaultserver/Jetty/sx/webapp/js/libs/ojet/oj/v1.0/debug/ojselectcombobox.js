"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore, validation)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _ComboUtils = {
    KEY:
    {
      TAB : 9,
      ENTER : 13,
      ESC : 27,
      SPACE : 32,
      LEFT : 37,
      UP : 38,
      RIGHT : 39,
      DOWN : 40,
      SHIFT : 16,
      CTRL : 17,
      ALT : 18,
      PAGE_UP : 33,
      PAGE_DOWN : 34,
      HOME : 36,
      END : 35,
      BACKSPACE : 8,
      DELETE : 46,

      isControl : function (e)
      {
        var k = e.which;
        switch (k)
        {
        case _ComboUtils.KEY.SHIFT:
        case _ComboUtils.KEY.CTRL:
        case _ComboUtils.KEY.ALT:
          return true;
        }
        if (e.metaKey)
          return true;
        return false;
      },

      isFunctionKey : function (k)
      {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
      }
    },

    lastMousePosition: {x : 0, y : 0},
    nextUid: (function () {var counter = 1; return function () { return counter++; };}()),

    //TODO:
    scrollBarDimensions: null,
    
    //_ComboUtils
    /*
     * 4-10 times faster .each replacement
     * it overrides jQuery context of element on each iteration
     */
    each2: function(list, c)
    {
      var j = $(list[0]),
      i = -1,
      l = list.length;
      while (
        ++i < l
          && (j.context = j[0] = list[i])
          && c.call(j[0], i, j) !== false //i=index, j=jQuery object
      )
      {};
      return list;
    },

    //_ComboUtils
    measureScrollbar: function()
    {
      var $template = $("<div class='oj-listbox-measure-scrollbar'></div>");
      $template.appendTo('body');
      var dim =
        {
          width : $template.width() - $template[0].clientWidth,
          height : $template.height() - $template[0].clientHeight
        };
      $template.remove();
      return dim;
    },

    //_ComboUtils
    /*
     * Splits the string into an array of values, trimming each value. 
     * An empty array is returned for nulls or empty
     */
    splitVal: function(string, separator)
    {
      var val,
      i,
      l;
      if (string === null || string.length < 1)
        return [];
      val = string.split(separator);
      for (i = 0, l = val.length; i < l; i = i + 1)
        val[i] = $.trim(val[i]);
      return val;
    },

    //_ComboUtils
    getSideBorderPadding: function(element)
    {
      return element.outerWidth(false) - element.width();
    },

    //_ComboUtils
    installKeyUpChangeEvent: function(element)
    {
      var key = "keyup-change-value";
      element.on("keydown", function ()                 
        {
          if ($.data(element, key) === undefined)
          {
            $.data(element, key, element.val());
          }
        });

      element.on("keyup", function (e)
        {
          if (e.which === _ComboUtils.KEY.ENTER)
          {
            e.stopPropagation();
            return;
          }
          var val = $.data(element, key);
          if (val !== undefined && element.val() !== val)
          {
            $.removeData(element, key);
            element.trigger("keyup-change");
          }
        });
    },

    //_ComboUtils
    /*
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    installFilteredMouseMove: function(element)
    {
      element.on("mousemove", function (e)
        {
          var lastpos = _ComboUtils.lastMousePosition;
          if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY)
          {
            $(e.target).trigger("mousemove-filtered", e);
            _ComboUtils.lastMousePosition.x = e.pageX;
            _ComboUtils.lastMousePosition.y = e.pageY;
          }
        });
    },

    //_ComboUtils
    thunk: function(formula)
    {
      var evaluated = false,
      value;
      return function ()
        {
          if (evaluated === false)
          {
            value = formula();
            evaluated = true;
          }
          return value;
        };
    },

    //_ComboUtils
    _focus: function($el)
    {
      if ($el[0] === document.activeElement)
        return;

      /* set the focus in a 0 timeout - that way the focus is set after the processing
         of the current event has finished - which seems like the only reliable way
         to set focus */
      window.setTimeout(function ()
        {
          var el = $el[0],
          pos = $el.val().length,
          range;
          $el.focus();

          /* make sure el received focus so we do not error out when trying to manipulate the caret.
             sometimes modals or others listeners may steal it after its set */
          if ($el.is(":visible") && el === document.activeElement)
          {
            /* after the focus is set move the caret to the end, necessary when we val()
               just before setting focus */
            if (el.setSelectionRange)
              el.setSelectionRange(pos, pos);
            else if (el.createTextRange)
            {
              range = el.createTextRange();
              range.collapse(false);
              range.select();
            }
          }
        }, 0);
    },

    //_ComboUtils
    getCursorInfo: function (el)
    {
      el = $(el)[0];
      var offset = 0;
      var length = 0;
      if ('selectionStart' in el)
      {
        offset = el.selectionStart;
        length = el.selectionEnd - offset;
      }
      else if ('selection' in document)
      {
        el.focus(); //Fixed???
        var sel = document.selection.createRange();
        length = document.selection.createRange().text.length;
        sel.moveStart('character', -el.value.length);
        offset = sel.text.length - length;
      }
      return {offset : offset, length : length};
    },

    //_ComboUtils
    killEvent: function(event)
    {
      event.preventDefault();
      event.stopPropagation();
    },

    //_ComboUtils
    killEventImmediately: function(event)
    {
      event.preventDefault();
      event.stopImmediatePropagation();
    },

    //_ComboUtils
    defaultEscapeMarkup: function(markup)
    {
      var replace_map =
      {
        '\\' : '&#92;',
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&#39;'
      };
      return String(markup).replace(/[&<>"'\\]/g, function (match)
        {
          return replace_map[match];
        });
    },

    //_ComboUtils
    /*
     * Produces a query function that works with a local array
     */
    local: function(options, optKeys)
    {
      var data = options, // data elements
          dataText,
          tmp,
          // function used to retrieve the text portion of a data item that is matched against the search
          text = function (item)
            {
              return "" + item['label'];
            };

      if ($.isArray(data))
      {
        tmp = data;
        data =
          {
            results : tmp
          };
      }
      if ($.isFunction(data) === false)
      {
        tmp = data;
        data = function ()
          {
            return tmp;
          };
      }
      var dataItem = data();
      //select with no options
      if (dataItem && dataItem.text)
      {
        text = dataItem.text;
        // if text is not a function we assume it to be a key name
        if (!$.isFunction(text))
        {
          // we need to store this in a separate variable because in the next step data gets reset 
          // and data.text is no longer available
          dataText = dataItem.text; 
          text = function (item)
            {
              return item[dataText];
            };
        }
      }
      return function (query)
        {
          var t = query.term,
          filtered =
            {
              results : []
            },
          process;
          if (t === "")
          {
            query.callback(data());
            return;
          }
          process = function (datum, collection, keys)
            {
              var group,
              attr;
              datum = datum[0];
              
              // key mappings
              if (!datum['label'] &&(keys && keys['label'])) {
                datum['label'] = datum[keys['label']];
                delete datum[keys['label']];
              }
              if (!datum['value'] && (keys && keys['value'])) {
                datum['value'] = datum[keys['value']];
                delete datum[keys['value']];
              }
              if (!datum['children'] && (keys && keys['children'])) {
                datum['children'] = datum[keys['children']];
                delete datum[keys['children']];
              }
                
              if (datum['children'])
              {
                group = {};
                for (attr in datum)
                {
                  if (datum.hasOwnProperty(attr))
                    group[attr] = datum[attr];
                }
                group.children = [];
                _ComboUtils.each2($(datum['children']), function (i, childDatum)
                 {
                   process(childDatum, group.children, (keys && keys['childKeys']) ? keys['childKeys'] : null);
                 });

                //Bug 18903692 - group labels participate in the filtering
                //Reverted. In the nested data case, group may be selectable. Without putting the 
                //group data in the collection, we will find no match and new entry may be created for combobox
                if (group.children.length || query.matcher(t, text(group), datum))
                {
                  collection.push(group);
                }
              }
              else
              {
                if (query.matcher(t, text(datum), datum))
                {
                  collection.push(datum);
                }
              }
            };
          if(data()){
            _ComboUtils.each2($(data().results), function (i, datum)
              {
                process(datum, filtered.results, optKeys);
              });  
          }  
          query.callback(filtered);
        };
    },

    //_ComboUtils
    checkFormatter: function (ojContext, formatter, formatterName)
    {
      if ($.isFunction(formatter))
        return true;
      if (!formatter)
        return false;

      throw new Error(formatterName + " must be a function or a false value");
    },

    //_ComboUtils
    /*
     * Creates a new class
     */
    clazz: function(SuperClass, methods)
    {
      var constructor = function ()  {};
      oj.Object.createSubclass(constructor, SuperClass, '');
      constructor.prototype = $.extend(constructor.prototype, methods);
      return constructor;
    }

  };


  var _AbstractOjChoice = _ComboUtils.clazz(Object,
    {
      //_AbstractOjChoice
      _bind : function (func)
      {
        var self = this;
        return function ()
        {
          func.apply(self, arguments);
        };
      },

      //_AbstractOjChoice
      _init : function (opts)
      {
        var results,
        search,
        className = this._classNm,
        elemName = this._elemNm,
        resultsSelector = ".oj-listbox-results";

        this.ojContext = opts.ojContext;
        this.opts = opts = this._prepareOpts(opts);
        this.id = opts.id;

        // destroy if called on an existing component
        if (opts.element.data(elemName) !== undefined &&
          opts.element.data(elemName) !== null)
        {
          opts.element.data(elemName)._destroy();
        }
        this.container = this._createContainer();

        //Bug 18871897 - ojselect - rootAttributes are not propagated to generated jet component
        var rootAttr = this.opts.rootAttributes;
        this.containerId = (rootAttr && rootAttr.id) ? 
          rootAttr.id :
          "ojChoiceId_" + (opts.element.attr("id") || "autogen" + _ComboUtils.nextUid());

        this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
        this.container.attr("id", this.containerId);
        // cache the body so future lookups are cheap
        this.body = _ComboUtils.thunk(function ()
          {
            return opts.element.closest("body");
          }
          );
        this.container.attr("style", opts.element.attr("style"));
        this.elementTabIndex = this.opts.element.attr("tabindex");

        // swap container for the element
        this.opts.element
        .data(elemName, this)
        .attr("tabindex", "-1")
        .before(this.container);
        this.container.data(elemName, this);
        this.dropdown = this.container.find(".oj-listbox-drop");
        this.dropdown.data('ojlistbox', this);
        this.dropdown.on("click", _ComboUtils.killEvent);

        // since the dropdown popup is reparented to the body, it looses associate in the dom.
        // establish linkage between the dropdown and the select and combobox.
        var surrogateId = this.containerId;
        this.dropdown.attr(oj.DomUtils.SURROGATE_ID, surrogateId);

        this.results = results = this.container.find(resultsSelector);

        //TODO: should combobox use .oj-listbox-search .oj-listbox-input
//        this.search = search = this.container.find("input." + className + "-input");
        if (className == "oj-select")
          search = this.container.find("input." + "oj-listbox-input");
        else
          search = this.container.find("input." + className + "-input");
        this.search = search;

        this.queryCount = 0;
        this.resultsPage = 0;
        this.context = null;

        // initialize the container
        this._initContainer();
        this.container.on("click", _ComboUtils.killEvent);
        _ComboUtils.installFilteredMouseMove(this.results);
        this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this._bind(this._highlightUnderEvent));
        // do not propagate change event from the search field out of the component
        $(this.container).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        $(this.dropdown).on("change", "." + className + "-input", function (e)
        {
          e.stopPropagation();
        }
        );
        _ComboUtils.installKeyUpChangeEvent(search);
        search.on("keyup-change input paste", this._bind(this._updateResults));
        search.on("focus", function ()
        {
          search.addClass(className + "-focused");
        }
        );
        search.on("blur", function ()
        {
          search.removeClass(className + "-focused");
        }
        );
        this.dropdown.on("mouseup", resultsSelector, this._bind(function (e)
          {
            if ($(e.target).closest(".oj-listbox-result-selectable").length > 0)
            {
              this._highlightUnderEvent(e);
              this._selectHighlighted(null, e);
            }
          }
          ));
        // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
        // for mouse events outside of itself so it can close itself. since the dropdown is now outside the combobox's
        // dom it will trigger the popup close, which is not what we want
        this.dropdown.on("click mouseup mousedown", function (e)
        {
          e.stopPropagation();
        }
        );
        if ($.isFunction(this.opts.initSelection))
        {


          ///support ko options-binding
          this._initSelection();
        }
        var disabled = opts.element.prop("disabled");
        if (disabled === undefined)
          disabled = false;
        this._enable(!disabled);
        var readonly = opts.element.prop("readonly");
        if (readonly === undefined)
          readonly = false;
        this._readonly(readonly);
        // Calculate size of scrollbar
        _ComboUtils.scrollBarDimensions = _ComboUtils.scrollBarDimensions || 
                                          _ComboUtils.measureScrollbar();
        this.autofocus = opts.element.prop("autofocus");
        opts.element.prop("autofocus", false);
        if (this.autofocus)
          this._focus();

        var clickAwayHandler = $(document).data("ojChoiceClickAwayHandler-" + elemName);
        if (!clickAwayHandler) {
            var clickAwayListener = function(event) {

                var dropdown = $("#oj-listbox-drop"),
                    arrow = ".oj-combobox-arrow",
                    self;
                if ($(event.target).closest(dropdown).length)
                    return;

                if (dropdown.length > 0) {
                    self = dropdown.data('ojlistbox');
                    if (self.opts.selectOnBlur) {
                        self._selectHighlighted({
                                noFocus: true
                            }, event ///pass original event
                        );
                    }
                    self.close(event);
                }
            };
            document.addEventListener("mousedown", clickAwayListener, true);
            clickAwayHandler = {
                listener: clickAwayListener,
                components: []
            };
            clickAwayHandler.components.push(this);
            $(document).data("ojChoiceClickAwayHandler-" + elemName, clickAwayHandler);
        } else {
            clickAwayHandler.components.push(this);
        }
      },

      //_AbstractOjChoice
      _destroy : function ()
      {
        var element = this.opts.element,
            ojcomp = element.data(this._elemNm);

        this.close();
        if (this.propertyObserver)
        {
          delete this.propertyObserver;
          this.propertyObserver = null;
        }
        if (ojcomp !== undefined)
        {
          ojcomp.container.remove();
          ojcomp.dropdown.remove();
          element
          .removeAttr("aria-hidden")
          .removeData(this._elemNm)
          .off("." + this._classNm)
          .prop("autofocus", this.autofocus || false);
          if (this.elementTabIndex)
          {
            element.attr(
            {
              tabindex : this.elementTabIndex
            }
            );
          }
          else
          {
            element.removeAttr("tabindex");
          }
          element.show();
        }

        var clickAwayHandler = $(document).data("ojChoiceClickAwayHandler-" + this._elemNm);
        var index = clickAwayHandler.components.indexOf(this);
        if (index > -1) {
            clickAwayHandler.components.splice(index, 1);
            if (!clickAwayHandler.components.length) {
                document.removeEventListener("mousedown", clickAwayHandler.listener, true);
                $(document).removeData("ojChoiceClickAwayHandler-" + this._elemNm);
            }
        }
      },

      //_AbstractOjChoice
      /*
       * Processes option element and return data object
       */
      _optionToData : function (element)
      {
        if (element.is("option"))
        {
          return {
            value : element.prop("value"),
            label : element.text(),
            element : element.get(),
            css : element.attr("class"),
            disabled : element.prop("disabled"),
            locked : (element.attr("locked") === "locked") || (element.data("locked") === true)
          };
        }
        else if (element.is("optgroup"))
        {
          return {
            label : element.attr("label"),
            children : [],
            element : element.get(),
            css : element.attr("class")
          };
        }
      },

      //_AbstractOjChoice
      /*
       * Prepares the option items to display in the drop down
       */
      _prepareOpts : function (opts)
      {
        var element,
        datalist,
        self = this;

        element = opts.element;
        var tagName = element.get(0).tagName.toLowerCase();
        if (tagName === "input" && element.attr("list"))
        {
          this.datalist = datalist = $('#' + element.attr("list"));
        }

        ///ojselect
        else if (tagName === "select" && element.children().length > 0)
        {
          this.datalist = datalist = element;
        }

        opts = $.extend({},
          {
            populateResults : function (container, results, query, showPlaceholder)
            {
              var populate,
              id = this.opts.id;

              populate = function (results, container, depth, showPlaceholder)
              {
                var i,
                l,
                result,
                selectable,
                disabled,
                node,
                label,
                innerContainer,
                formatted;

                //Bug 18827605 - ojselect does not show placeholder text when data option is specified
                ///ojselect only add placeholder to dropdown if there is no search filter
                var placeholder = self._getPlaceholder();
                if (showPlaceholder && placeholder !== null && ! query.term)
                {
                  //create placeholder item
                  result = {
                    value: '',
                    label: placeholder
                  };

                  node = $("<li></li>");
                  node.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable");
                  node.attr("role", "presentation");

                  label = $(document.createElement("div"));
                  label.addClass("oj-listbox-result-label");
                  label.attr("id", "oj-listbox-result-label-" + _ComboUtils.nextUid());
                  label.attr("role", "option");

                  formatted = opts.formatResult(result, self.opts.escapeMarkup);
                  if (formatted !== undefined)
                    label.text(formatted);

                  node.append(label);

                  node.data(self._elemNm, result);
                  container.append(node);
                }

                for (i = 0, l = results.length; i < l; i = i + 1)
                {
                  result = results[i];
                  disabled = (result.disabled === true);
                  selectable = (!disabled) && (id(result) !== undefined);

                  node = $("<li></li>");
                  node.addClass("oj-listbox-results-depth-" + depth);
                  node.addClass("oj-listbox-result");
                  node.addClass(selectable ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable");
                  if (disabled)
                  {
                    node.addClass("oj-disabled");
                  }
                  if (result.children)
                  {
                    node.addClass("oj-listbox-result-with-children");
                  }
                  node.attr("role", "presentation");

                  label = $(document.createElement("div"));
                  label.addClass("oj-listbox-result-label");
                  label.attr("id", "oj-listbox-result-label-" + _ComboUtils.nextUid());
                  label.attr("role", "option");
                  if (disabled)
                    label.attr("aria-disabled", "true");

                  formatted = opts.formatResult(result, self.opts.escapeMarkup);
                  if (formatted !== undefined)
                  {
                    label.text(formatted);
                  }

                  node.append(label);

                  if (result.children && result.children.length > 0)
                  {
                    innerContainer = $("<ul></ul>");
                    innerContainer.addClass("oj-listbox-result-sub");
                    ///ojselect placehholder
                    populate(result.children, innerContainer, depth + 1, false);
                    node.append(innerContainer);
                  }

                  node.data(self._elemNm, result);
                  container.append(node);
                }
              };

              ///ojselect placehholder
              populate(results, container, 0, showPlaceholder);
            }
          }, _ojChoice_defaults, opts);
                        
        opts.id = function (e)
        {
          return e['value'];
        };
          
        opts.formatResult = function (result, escapeMarkup)
        {
          var markup = [], label;
          label = result['label'];
          markup.push(opts.escapeMarkup(label));
          return markup.join("");
        };
        
        opts.formatSelection = function (data, container, escapeMarkup)
        {
          return (data && data['label']) ? escapeMarkup(data['label']) : undefined;
        };
        
        if (tagName !== "select" && opts["manageNewEntry"] !== null)
        {
          opts["manageNewEntry"] = function (term)
          {
            var entry = {};
            entry['value'] = entry['label'] = $.trim(term);
            return entry;
          }
        }

        if (datalist)
        {
          opts.query = this._bind(function (query)
            {
              var data =
              {
                results : [],
                more : false
              },
              term = query.term,
              children,
              process;

              process = function (element, collection)
              {
                var group;
                if (element.is("option"))
                {
                  if (query.matcher(term, element.text(), element))
                  {
                    collection.push(self._optionToData(element));
                  }
                }
                else if (element.is("optgroup"))
                {
                  group = self._optionToData(element);
                  _ComboUtils.each2(element.children(), function (i, elm)
                  {
                    process(elm, group.children);
                  }
                  );
                  if (group.children.length > 0)
                  {
                    collection.push(group);
                  }
                }
              };

              children = datalist.children();

              ///ojselect remove existing placeholder item
              if (this._getPlaceholder() !== undefined && children.length > 0 &&
                  children.first().attr("value") == "")
              {
                children = children.slice(1);
              }

              _ComboUtils.each2(children, function (i, elm)
              {
                process(elm, data.results);
              }
              );
              query.callback(data);
            }
            );
        }
        else if ("options" in opts)
        {
          opts.query = _ComboUtils.local(opts.options, opts.optionsKeys ? opts.optionsKeys : null);
        }

        return opts;
      },

      //_AbstractOjChoice
      _triggerSelect : function (data)
      {
        var evt = $.Event(this._elemNm + "-selecting",
          {
            val : this.id(data),
            object : data
          }
          );
        this.opts.element.trigger(evt);
        return !evt.isDefaultPrevented();
      },

      //_AbstractOjChoice
      _isInterfaceEnabled : function ()
      {
        return this.enabledInterface === true;
      },

      //_AbstractOjChoice
      _enableInterface : function ()
      {
        var enabled = this._enabled && !this._readonly,
        disabled = !enabled;

        if (enabled === this.enabledInterface)
          return false;

        this.container.toggleClass("oj-disabled", disabled);
        this.close();
        this.enabledInterface = enabled;

        return true;
      },

      //_AbstractOjChoice
      _enable : function (enabled)
      {
        if (enabled === undefined)
          enabled = true;
        if (this._enabled === enabled)
          return;
        this._enabled = enabled;

        this.opts.element.prop("disabled", !enabled);
        this._enableInterface();
      },

      //_AbstractOjChoice
      _disable : function ()
      {
        this._enable(false);
      },

      //_AbstractOjChoice
      _readonly : function (enabled)
      {
        if (enabled === undefined)
          enabled = false;
        if (this._readonly === enabled)
          return false;
        this._readonly = enabled;

        this.opts.element.prop("readonly", enabled);
        this._enableInterface();
        return true;
      },

      //_AbstractOjChoice
      _opened : function ()
      {
        return this.container.hasClass("oj-listbox-dropdown-open");
      },

      //_AbstractOjChoice
      _positionDropdown : function ()
      {
        var $dropdown = this.dropdown,
        offset = this.container.offset(),
        height = this.container.outerHeight(false),
        width = this.container.outerWidth(false),
        dropHeight = $dropdown.outerHeight(false),
        $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        viewPortRight = $window.scrollLeft() + windowWidth,
        viewportBottom = $window.scrollTop() + windowHeight,
        dropTop = offset.top + height,
        dropLeft = offset.left,
        enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
        enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
        dropWidth = $dropdown.outerWidth(false),
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
        aboveNow = $dropdown.hasClass("oj-listbox-drop-above"),
        bodyOffset,
        above,
        changeDirection,
        css,
        resultsListNode;

        // always prefer the current above/below alignment, unless there is not enough room
        if (aboveNow)
        {
          above = true;
          if (!enoughRoomAbove && enoughRoomBelow)
          {
            changeDirection = true;
            above = false;
          }
        }
        else
        {
          above = false;
          if (!enoughRoomBelow && enoughRoomAbove)
          {
            changeDirection = true;
            above = true;
          }
        }

        //if we are changing direction we need to get positions when dropdown is hidden;
        if (changeDirection)
        {
          $dropdown.hide();
          offset = this.container.offset();
          height = this.container.outerHeight(false);
          width = this.container.outerWidth(false);
          dropHeight = $dropdown.outerHeight(false);
          viewPortRight = $window.scrollLeft() + windowWidth;
          viewportBottom = $window.scrollTop() + windowHeight;
          dropTop = offset.top + height;

          ///ojselect move 1px up to cover up the border bottom of the select box
          if (!above && this._hasSearchBox())
            dropTop -= 1;

          dropLeft = offset.left;
          dropWidth = $dropdown.outerWidth(false);
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
          $dropdown.show();
        }

        ///ojselect move 1px up to cover up the border bottom of the select box
        else if (!above && this._hasSearchBox())
          dropTop -= 1;

/* Don't think we expose this option
        if (this.opts.dropdownAutoWidth)
        {
          resultsListNode = $(".oj-listbox-results", $dropdown)[0];
          $dropdown.addClass("oj-listbox-drop-auto-width");
          $dropdown.css('width', '');
          // Add scrollbar width to dropdown if vertical scrollbar is present
          dropWidth = $dropdown.outerWidth(false) + 
            (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : 
             _ComboUtils.scrollBarDimensions.width);
          dropWidth > width ? width = dropWidth : dropWidth = width;
          enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
        }
        else
        {
          this.container.removeClass("oj-listbox-drop-auto-width");
        }
*/

        // fix positioning when body has an offset and is not position: static
        if (this.body().css('position') !== 'static')
        {
          bodyOffset = this.body().offset();
          dropTop -= bodyOffset.top;
          dropLeft -= bodyOffset.left;
        }

        if (!enoughRoomOnRight)
        {
          dropLeft = offset.left + width - dropWidth;
        }

        css =
        {
          left : dropLeft,
          width : width
        };

        if (above)
        {
          css.bottom = windowHeight - offset.top;
          css.top = 'auto';
          this.container.addClass("oj-listbox-drop-above");
          $dropdown.addClass("oj-listbox-drop-above");
        }
        else
        {
          css.top = dropTop;
          css.bottom = 'auto';
          this.container.removeClass("oj-listbox-drop-above");
          $dropdown.removeClass("oj-listbox-drop-above");
        }

        $dropdown.css(css);
      },

      //_AbstractOjChoice
      _shouldOpen : function (e)
      {
        var event;

        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        event = $.Event(this._elemNm + "-opening");
        this.opts.element.trigger(event);
        return !event.isDefaultPrevented();
      },

      //_AbstractOjChoice
      _clearDropdownAlignmentPreference : function ()
      {
        // clear the classes used to figure out the preference of where the dropdown should be opened
        this.container.removeClass("oj-listbox-drop-above");
        this.dropdown.removeClass("oj-listbox-drop-above");
      },

      //_AbstractOjChoice
      /**
       * Opens the dropdown
       *
       * @return {boolean} whether or not dropdown was opened. This method will return false if, for example,
       * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
       * @ignore
       */
      open : function (e)
      {
        if (!this._shouldOpen(e))
          return false;
        this._opening();
        return true;
      },
      
      //_AbstractOjChoice
      _opening : function ()
      {
        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        //this._clearPlaceholder();
        this.container.addClass("oj-listbox-dropdown-open");

        this._clearDropdownAlignmentPreference();

        if (this.dropdown[0] !== this.body().children().last()[0])
        {
          this.dropdown.detach().appendTo(this.body());
        }

       
       this.dropdown.appendTo(this.body());

        // move the global id to the correct dropdown
        $("#oj-listbox-drop").removeAttr("id");
        this.dropdown.attr("id", "oj-listbox-drop");

        // show the elements
        
        this._positionDropdown();
        this.dropdown.show();
        this._positionDropdown();

        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", true);

        // attach listeners to events that can change the position of the container and thus require
        // the position of the dropdown to be updated as well so it does not come unglued from the container
        var that = this;
        this.container.parents().add(window).each(function ()
        {
          $(this).on(resize + " " + scroll + " " + orient, function (e)
          {
            that._positionDropdown();
          }
          );
        }
        );

      },

      //_AbstractOjChoice
      close : function (event)
      {
        if (!this._opened())
          return;

        var cid = this.containerId,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;

        // unbind event listeners
        this.container.parents().add(window).each(function ()
        {
          $(this).off(scroll).off(resize).off(orient);
        }
        );

        this._clearDropdownAlignmentPreference();

        this.dropdown.removeAttr("id");
        this.dropdown.hide();
        this.container.removeClass("oj-listbox-dropdown-open");
        this.results.empty();

        ///select: accessibility
        this._getActiveContainer().attr("aria-expanded", false);
      },

      //_AbstractOjChoice
      _clearSearch : function ()  {},

      //_AbstractOjChoice
      _ensureHighlightVisible : function ()
      {
        var results = this.results,
        children,
        index,
        child,
        hb,
        rb,
        y,
        more;

        index = this._highlight();

        if (index < 0)
          return;

        if (index == 0)
        {
          // if the first element is highlighted scroll all the way to the top,
          // that way any unselectable headers above it will also be scrolled
          // into view
          results.scrollTop(0);
          return;
        }

        children = this._findHighlightableChoices().find(".oj-listbox-result-label");
        child = $(children[index]);
        hb = child.offset().top + child.outerHeight(true);

        // if this is the last child lets also make sure oj-combobox-more-results is visible
        if (index === children.length - 1)
        {
          more = results.find("li.oj-listbox-more-results");
          if (more.length > 0)
          {
            hb = more.offset().top + more.outerHeight(true);
          }
        }

        rb = results.offset().top + results.outerHeight(true);
        if (hb > rb)
        {
          results.scrollTop(results.scrollTop() + (hb - rb));
        }
        y = child.offset().top - results.offset().top;

        // make sure the top of the element is visible
        if (y < 0 && child.css('display') != 'none')
        {
          results.scrollTop(results.scrollTop() + y); // y is negative
        }
      },

      //_AbstractOjChoice
      _findHighlightableChoices : function ()
      {
        return this.results.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)");
      },

      //_AbstractOjChoice
      _moveHighlight : function (delta)
      {
        var choices = this._findHighlightableChoices(),
        index = this._highlight();
        while (index >= -1 && index < choices.length)
        {
          index += delta;
          var choice = $(choices[index]);
          if (choice.hasClass("oj-listbox-result-selectable") && !choice.hasClass("oj-disabled") && 
              !choice.hasClass("oj-selected"))
          {
            this._highlight(index);
            break;
          }
        }
      },

      //_AbstractOjChoice
      _highlight : function (index)
      {
        var choices = this._findHighlightableChoices(),
        choice,
        data;

        if (arguments.length === 0)
        {
          return choices.get().indexOf(choices.filter(".oj-hover")[0]);
        }

        if (index >= choices.length)
          index = choices.length - 1;
        if (index < 0)
          index = 0;

        this._removeHighlight();

        choice = $(choices[index]);
        choice.addClass("oj-hover");

        // ensure assistive technology can determine the active choice
        ///select: accessibility
        this._getActiveContainer().attr("aria-activedescendant", 
                                        choice.find(".oj-listbox-result-label").attr("id"));
          
        this._ensureHighlightVisible();
      },

      //_AbstractOjChoice
      _removeHighlight : function ()
      {
        this.results.find(".oj-hover").removeClass("oj-hover");
      },

      //_AbstractOjChoice
      _highlightUnderEvent : function (event)
      {
        var el = $(event.target).closest(".oj-listbox-result-selectable");
        if (el.length > 0 && !el.is(".oj-hover"))
        {
          var choices = this._findHighlightableChoices();
          this._highlight(choices.index(el));
        }
        else if (el.length == 0)
        {
          // if we are over an unselectable item remove all highlights
          this._removeHighlight();
        }
      },

      //_AbstractOjChoice
      _updateResults : function (initial)
      {
        var search = this.search,
        results = this.results,
        opts = this.opts,
        data,
        self = this,
        input,
        term = search.val(),
        lastTerm = $.data(this.container, this._classNm + "-last-term"),
        // sequence number used to drop out-of-order responses
        queryNumber;

        // prevent duplicate queries against the same term
        if (initial !== true && lastTerm && (term === lastTerm))
          return;

        $.data(this.container, this._classNm + "-last-term", term);

        function postRender()
        {
          self._positionDropdown();
        }

        function render(html)
        {
          results.html(html);
          postRender();
        }

        queryNumber = ++this.queryCount;

        this._removeHighlight();
        input = this.search.val();
        if (input !== undefined && input != null && initial !== true)
        {
          term = input;
        }
        else
        {
          term = "";
        }

        this.resultsPage = 1;

        opts.query(
        {
          element : opts.element,
          term : term,
          page : this.resultsPage,
          context : null,
          matcher : opts.matcher,
          callback : this._bind(function (data)
          {
            var def; // default choice

            // ignore old responses
            if (queryNumber != this.queryCount)
            {
              return;
            }

            // ignore a response if the oj-combobox has been closed before it was received
            if (!this._opened())
            {
              return;
            }

            // save context, if any
            this.context = (!data || data.context === undefined) ? null : data.context;
            // create a default choice and prepend it to the list

            if ((!data || data.results.length === 0) && _ComboUtils.checkFormatter(self.ojContext, opts.formatNoMatches, "formatNoMatches"))
            {
              if (this._classNm == "oj-select")
                render("<li class='" + "oj-listbox-no-results'>" + opts.formatNoMatches(self.ojContext, search.val()) + "</li>");
              else
                this.close();
              return;
            }

            results.empty();

            self.opts.populateResults.call(this, results, data.results,
              {
                term : search.val(),
                page : this.resultsPage,
                context : null
              },
              this._showPlaceholder()
            );
            this._postprocessResults(data, initial);
            postRender();
          }
          )
        }
        );
      },

      //_AbstractOjChoice
      _cancel : function (event)
      {
        this.close(event);
      },

      //_AbstractOjChoice
      _focusSearch : function ()
      {
        _ComboUtils._focus(this.search);
      },

      //_AbstractOjChoice
      _selectHighlighted : function (options, event)
      {
        var index = this._highlight(),
        highlighted = this.results.find(".oj-hover"),
        data = highlighted.closest(".oj-listbox-result").data(this._elemNm);

        if (data)
        {
          this._highlight(index);
          this._onSelect(data, options, event);
        }
        else if (options && options.noFocus)
        {
          this.close(event);
        }
      },

      //_AbstractOjChoice
      _getPlaceholder : function ()
      {
        return this.opts.element.attr("placeholder") ||
        this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
        this.opts.element.data("placeholder") ||
        this.opts.placeholder;
      },
      
      //_AbstractOjChoice
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (!placeholder)
          return;
        this.search.attr("placeholder", placeholder);
        this.container.removeClass(this._classNm + "-allowclear");
      },

      //_AbstractOjChoice
      _initContainerWidth : function ()
      {
        function resolveContainerWidth()
        {
          var style,
          attrs,
          matches,
          i,
          l,
          attr;

          // check if there is inline style on the element that contains width
          style = this.opts.element.attr('style');
          if (style !== undefined)
          {
            attrs = style.split(';');
            for (i = 0, l = attrs.length; i < l; i = i + 1)
            {
              attr = attrs[i].replace(/\s/g, '');
              matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
              if (matches !== null && matches.length >= 1)
                return matches[1];
            }
          }
        };

        var width = resolveContainerWidth.call(this);
        if (width !== null)
        {
          this.container.css("width", width);
        }
      },

      //_AbstractOjChoice
      getVal: function () {
        return this.ojContext.option("value");
      },


      //_AbstractOjChoice
      ///pass original event
      setVal: function (val, event) {
        if (typeof val === "string")
        {
          //Bug 19231311 - select needs implementation fixes...
          // 1. _SetValue() compares the value passed in to the last saved display value. This is 
          // from ADF and is useful for comapring display values for inputs but since combo sets an 
          // array, this check is not needed.
          // 2. To bypass the check call this method when the value has changed and with the 
          // additional parameter. 
          this.ojContext._SetValue([val], event, {doValueChangeCheck: false});
        }
        else
        {
          //Bug 19231311 - select needs implementation fixes...
          this.ojContext._SetValue(val, event, {doValueChangeCheck: false});
        }
        // also set on the input element
        this.opts.element.val(val);
      },

      //_AbstractOjChoice
      ///ojselect placeholder
      _showPlaceholder : function ()
      {
        return false;
      },

      //_AbstractOjChoice
      ///select: accessibility
      _getActiveContainer : function ()
      {
        return this.search;
      },

      //_AbstractOjChoice
      _hasSearchBox : function ()
      {
        return (this.opts.minimumResultsForSearch !== undefined &&
          this.container._hasSearchBox !== undefined);
      }

    }
    );

  var _ojChoice_defaults =
  {
    closeOnSelect : true,
    openOnEnter : true,
    formatNoMatches : function (ojContext, val)
    {
//      return ojContext.getTranslatedString("noMatchesFound");
      return "No matches found";
    },
    id : function (e)
    {
      return e.id;
    },
    matcher : function (term, text)
    {
      return ('' + text).toUpperCase().indexOf(('' + term).toUpperCase()) >= 0;
    },

    separator : ",",
    escapeMarkup : _ComboUtils.defaultEscapeMarkup,
    blurOnChange : false,
    selectOnBlur : false
  };


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 *
 * You may obtain a copy of the Apache License and the GPL License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
  /**
   * @private
   */
  var _AbstractSingleChoice = _ComboUtils.clazz(_AbstractOjChoice,
    {
      //_AbstractSingleChoice
      _enableInterface : function ()
      {
        if (_AbstractSingleChoice.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },

      //_AbstractSingleChoice
      _focus : function ()
      {
        if (this._opened())
        {
          this.close();
        }
      },

      //_AbstractSingleChoice
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _AbstractSingleChoice.superclass._destroy.apply(this, arguments);
      },

      //_AbstractSingleChoice
      _clear : function (event)
      {
        var data = this.selection.data(this._elemNm);
        if (data)
        {
        // guard against queued quick consecutive clicks

          //This method will be invoked with or without event but 'data' will be null when it is invoked without event.
          //This logic is intended to clear the existing value when user manualy removes text in placeholder input box(which only happens for Combobox).
          //Ideally we should pass event, when we invoke _SetValue() if it is invoked on a UI action. So adding a warning message if event is null.
          if(!event)
             oj.Logger.warn("Event should not be null when user modified the value in UI");
          this.setVal([], event);
          this.search.val("");
          this.selection.removeData(this._elemNm);
        }
        this._setPlaceholder();
      },

      //_AbstractSingleChoice
      _initSelection : function ()
      {
        var selected,
        element,
        self = this;


        ///support ko options-binding
//        if (this.datalist || this.getVal())
//        {
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, this._bind(this._updateSelectedOption));
//        }
      },

      //_AbstractSingleChoice
      _containerKeydownHandler : function (e)
      {
        if (!this._isInterfaceEnabled())
          return;

        if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
        {
          // prevent the page from scrolling
          _ComboUtils.killEvent(e);
          return;
        }

        switch (e.which)
        {
        case _ComboUtils.KEY.UP:
        case _ComboUtils.KEY.DOWN:
          if (this._opened())
          {
            this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
          }
          else
          {
            this.open(e);
          }
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.ENTER:
          this._selectHighlighted(null, e);
          _ComboUtils.killEvent(e);
          return;

        case _ComboUtils.KEY.TAB:
          this.close(e);
          return;

        case _ComboUtils.KEY.ESC:
          this._cancel(e);
          _ComboUtils.killEvent(e);
          return;
        }

        ///ojselect: used by select
        this._userTyping = true;

        if (!this._opened())
          this.open(e);
      },

      //_AbstractSingleChoice
      _containerKeyupHandler : function (e)
      {
        if (this._isInterfaceEnabled())
        {
          if (!this._opened())
            this.open(e);
        }
      },

      //_AbstractSingleChoice
      _initContainer : function ()
      {
        var selection,
        container = this.container,
        dropdown = this.dropdown,
        idSuffix = _ComboUtils.nextUid(),
        elementLabel;

        this.selection = selection = container.find("." + this._classNm + "-choice");
        //Bug 19335259 - ojselect missing id attribute on oj-select-choice div
        selection.attr("id", this._classNm + "-choice-" + idSuffix);

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        this.results.attr("id", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-owns", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        selection.on("keydown", this._bind(this._containerKeydownHandler));
        //selection.on("keyup-change input", this._bind(this._containerKeyupHandler));

        selection.on("mousedown", "abbr", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            this._clear(e);
            _ComboUtils.killEventImmediately(e);
            this.close(e);
            this.selection.focus();
          }
          ));

        selection.on("mousedown", this._bind(function (e)
          {
            ///prevent user from focusing on disabled select
            if (this.opts.element.prop("disabled"))
              _ComboUtils.killEvent(e);

            if (this._opened())
            {
              this.close(e);
            }
            else if (this._isInterfaceEnabled())
            {
              this.open(e);
            }
            this.search.focus();
          }
          ));

        selection.on("focus", this._bind(function (e)
          {
            _ComboUtils.killEvent(e);
          }
          ));

        this.search.on("blur", this._bind(function (e)
          {
            if (this.search.val() !== undefined && (this.results.children().length <= 0)) {
              // Call _onSelect if no previous data and there is typed in text
              // or the previous data is different from typed in text
              if (this.opts["manageNewEntry"]) {
                if ((!this.selection.data("ojcombobox") && this.search.val() !== "")
                    || (this.selection.data("ojcombobox") && this.selection.data("ojcombobox").label !== this.search.val())) {
                  var data = this.opts["manageNewEntry"](this.search.val());
                  this._onSelect(data, null, e);
                }
              } else if (this.opts["manageNewEntry"] == null) {
                var data = this.selection.data(this._elemNm);
                if (this.search.val() == "")
                  this._clear(e);
                else if (!data && this.search.val() !== "") 
                  this._clearSearch();
                else {
                  var formatted = this.opts.formatSelection(data, this.search, this.opts.escapeMarkup);
                  if (formatted !== undefined) 
                  {
                    this.search.val(formatted);
                  }
                }
              }
            }
            this.search.removeClass(this._classNm + "-focused");
          }
          ));

        this._initContainerWidth();

        this.opts.element.hide()
            .attr("aria-hidden", true);

        this._setPlaceholder();

      },

      //_AbstractSingleChoice
      _prepareOpts : function ()
      {
        var opts = _AbstractSingleChoice.superclass._prepareOpts.apply(this, arguments),
        self = this;

        ///ojselect set initial selected value
        var tagName = opts.element.get(0).tagName.toLowerCase();
        if ((tagName === "input" && opts.element.attr("list")) ||
          (tagName === "select" && opts.element.children().length > 0))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var selected;
            var value = self.getVal();
            if (Array.isArray(value))
              value = value[0];

            if (value !== undefined && value !== null)
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.value === value;
                  }
                  ));
            }
            else
            {
              selected = self._optionToData(element.find("option").filter(function ()
                  {
                    return this.selected;
                  }
                  ));
            }
            callback(selected);
          };
        }
        else if ("options" in opts || (this.getVal() && this.getVal().length > 0))
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var id = "";
            if (self.getVal() && self.getVal().length)
              id = self.getVal()[0];

            //search in data by id, storing the actual matching item
            var first = null;
            var match = null;
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = (id === opts.id(el));
                if (is_match)
                {
                  match = el;
                }
                ///ojselect save the 1st option
                if (!first)
                {
                  first = el;
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                ///ojselect if no match, pick the 1st option
                if (!match && tagName === "select")
                {
                  match = first;
                }
                callback(match);
              }
            }
            );
          };
        }
        return opts;
      },

      //_AbstractSingleChoice
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var selected = -1,
        self = this,
        highlightableChoices;

        highlightableChoices = this._findHighlightableChoices();
        _ComboUtils.each2(highlightableChoices, function (i, elm)
        {
          if (self.getVal() && self.getVal()[0] === self.id(elm.data(self._elemNm)))
          {
            selected = i;
            return false;
          }
        }
        );

        // and highlight it
        if (noHighlightUpdate !== false)
        {
          if (initial === true && selected >= 0)
          {
            this._highlight(selected);
          }
        }
      },

      //_AbstractSingleChoice
      ///pass original event
      _onSelect : function (data, options, event)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }

        var old = this.getVal()? this.getVal()[0] : null;

        this._updateSelection(data);
        this.close(event);
        // When there is validation error, the value option may retain the previous value
        // although the display value is different. In that case, user should be able to still
        // select the previous valid value to get rid off the invalid style and message.
        /*if (!(old === this.id(data)))*/
        this.setVal(this.id(data).length === 0 ? [] : this.id(data), event);
      },

      //_AbstractSingleChoice
      ///beforeExpand
      _shouldOpen : function (e)
      {
        if (this._opened())
          return false;
        if (this._enabled === false || this._readonly === true)
          return false;

        var eventData = {
          'component' : this.opts.element
        };

        return this.ojContext._trigger("beforeExpand", e, eventData);
      },

      //_AbstractSingleChoice
      _clearSearch : function ()
      {
        this.search.val("");
      }

    }
    );


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _OjSingleCombobox = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        //@HTMLUpdateOK
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-component"
          }
          ).html([
              "<div class='oj-combobox-choice' tabindex='-1' role='presentation'>",
              "   <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "       spellcheck='false' class='oj-combobox-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />",
              "   <abbr class='oj-combobox-clear-entry' role='presentation'></abbr>",
              "   <a class='oj-combobox-arrow' role='presentation'><b class='oj-combobox-icon oj-component-icon oj-clickable-icon oj-combobox-open-icon' role='presentation'></b></a>",
              "</div>",
              "<div class='oj-listbox-drop' style='display:none' role='presentation'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      
      _enable : function (enabled)
      {
        _OjSingleCombobox.superclass._enable.apply(this, arguments);

        if (this._enabled) 
          this.container.find(".oj-combobox-arrow").removeClass("oj-disabled");
        else 
          this.container.find(".oj-combobox-arrow").addClass("oj-disabled");
      },
      
      close : function (event)
      {
        if (!this._opened())
          return;
        _OjSingleCombobox.superclass.close.apply(this, arguments);
      },

      _opening : function (event)
      {
        var el,
        range,
        len;
        
        //if beforeExpand is not cancelled
        _OjSingleCombobox.superclass._opening.apply(this, arguments);

          el = this.search.get(0);
          if (el.createTextRange)
          {
            range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
          else if (el.setSelectionRange)
          {
            len = this.search.val().length;
            el.setSelectionRange(len, len);
          }

          this._updateResults(true);
      },

      _updateSelection : function (data)
      {
        var formatted;
        
        this.selection.data(this._elemNm, data);
        if (data !== null)
        {
          formatted = this.opts.formatSelection(data, this.search, this.opts.escapeMarkup);
          if (formatted !== undefined) 
          {
              this.search.val(formatted);
          }
          this.search.removeClass(this._classNm + "-default");
        }else{
          //data will be null only when user set it programmatically.
          this._setPlaceholder();
        }
        
        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },
      
      _updateSelectedOption : function(selected)
      {
        if (selected !== undefined && selected !== null) {
          this._updateSelection(selected);
        }else{
          // if we found no match, update the selection with the value
          var value = this.getVal();
          var data = !value ? null : !Array.isArray(value) ? {'label':value}: (Array.isArray(value) && value.length ) ? { 'label': value[0] } : null ;
          this._updateSelection(data);
        } 
      }
    }
    );


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
  /**
 * @private
 */
var _OjSingleSelect = _ComboUtils.clazz(_AbstractSingleChoice,
    {
      _elemNm : "ojselect",
      _classNm : "oj-select",
      _userTyping : false,


      //_OjSingleSelect
      _createContainer : function ()
      {
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-select oj-component"
          }
          ).html([
              "<div class='oj-select-choice' tabindex='0' role='combobox' ",
              "     aria-autocomplete='none' aria-expanded='false' aria-ready='true'>",
              "  <span class='oj-select-chosen'></span>",
              "  <abbr class='oj-select-search-choice-close' role='presentation'></abbr>",
              "  <a class='oj-select-arrow' role='presentation'>",
              "    <b class='oj-component-icon oj-clickable-icon oj-select-open-icon' role='presentation'></b>",
              "</a></div>",

              "<div class='oj-listbox-drop' style='display:none' role='presentation'>",

              "  <div class='oj-listbox-search-wrapper'>",

              "  <div class='oj-listbox-search'>",
              "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'",
              "           spellcheck='false' class='oj-listbox-input' title='Search field' ",
              "           role='combobox' aria-expanded='false' aria-autocomplete='list' />",

              "    <span class='oj-listbox-spyglass-box'>",
              "      <span class='oj-component-icon oj-clickable-icon oj-listbox-search-icon' role='presentation'>",
              "       <b role='presentation'></b></span>",
              "    </span>",
              "  </div>",

              "  </div>",

              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"

            ].join(""));

        return container;
      },

      //_OjSingleSelect
      _enable : function (enabled)
      {
        _OjSingleSelect.superclass._enable.apply(this, arguments);

        //Bug 18714295 - dropdown icon is in disabled state after enabling ojselect
        if (this._enabled) {
          this.container.find(".oj-select-choice").attr("tabindex", "0");
          this.container.find(".oj-select-arrow").removeClass("oj-disabled");
        }
        else {
          //Don't allow focus on a disabled "select"
          this.container.find(".oj-select-choice").attr("tabindex", "-1");
          //Bug 18697446 - disabled select icon hover still shows changes
          this.container.find(".oj-select-arrow").addClass("oj-disabled");
        }
      },

      //_OjSingleSelect
      close : function (event)
      {
        if (!this._opened())
          return;
        _OjSingleSelect.superclass.close.apply(this, arguments);

        //Bug 18763700 - required validation err is not displayed when user tabs out
        //always clear search text when dropdown close
        if (! this._testClear(event))
          this._clearSearch();

        //set focus to select box
        _ComboUtils._focus(this.selection);

        ///remove "mouse click" listeners on spyglass
        this.container.find(".oj-listbox-spyglass-box").off("mouseup click");
      },

      //_OjSingleSelect
      _opening : function (event)
      {
        var el,
            range,
            len;

        _OjSingleSelect.superclass._opening.apply(this, arguments);

        //select: focus still stay on the selectBox if open dropdown by mouse click
        this._showSearchBox();

        //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
        if (this._hasSearchBox())
        {
          el = this.search.get(0);
          if (el.createTextRange)
          {
            range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
          else if (el.setSelectionRange)
          {
            len = this.search.val().length;
            el.setSelectionRange(len, len);
          }
        }

        this._updateResults(true);
      },

      //_OjSingleSelect
      _initContainer : function ()
      {
        ///ojselect placeholder
        var selectedId = this.containerId + "_selected";
        this.text = this.container.find(".oj-select-chosen").attr("id", selectedId);

        _OjSingleSelect.superclass._initContainer.apply(this, arguments);

        ///select: accessibility
        this.container.find(".oj-select-choice")
          .attr({
            "aria-owns": this.search.attr("aria-owns"),
            "aria-labelledby": this.search.attr("aria-labelledby"),
            "aria-describedby": selectedId
          });

        this.search.on("keydown", this._bind(this._containerKeydownHandler));
        this.search.on("keyup-change input", this._bind(this._containerKeyupHandler));

        //Bug 18763700 - required validation err is not displayed when user tabs out
        var self = this;
        this.selection.on("blur", function(e) {
          self._testClear(e);
        });

      },

      //_OjSingleSelect
      _initSelection : function ()
      {
        if (this._isPlaceholderOptionSelected())
        {
          this._updateSelection(null);
          this.close();
          this._setPlaceholder();
        }
        else
        {
          _OjSingleSelect.superclass._initSelection.apply(this, arguments);
        }

      },
      
      //_OjSingleSelect
      _updateSelectedOption : function(selected)
      {
        if (selected !== undefined && selected !== null)
        {
          //ojSelect by default use first option if user set a value which is not listed in original option items.
          //So need to update options to reflect the correct value in component state.
          var selectedVal,
          value = this.getVal();
          value = Array.isArray(value)? value[0]: value;
          selectedVal = this.opts.id(selected);

          if(value !== selectedVal)
          {
            //no previous value
            if (value === undefined || value === null) {
              this.ojContext.options['value'] = Array.isArray(selectedVal)? selectedVal : [selectedVal];
            }
            //fire optionChange event
            else {
              this.setVal(Array.isArray(selectedVal)? selectedVal : [selectedVal]);
            }
          }
          this._updateSelection(selected);
          this.close();
        }
      },

      //_OjSingleSelect
      _updateSelection : function (data)
      {
        var formatted;

        this.selection.data(this._elemNm, data);
        //Bug 18326121 - ojet select displaying values incorrectly 
        if (data !== null)
        {  
          this.text.text(data['label']);
        }
        ///ojselect placeholder
        ///reduce number of call to setVal
        ///this.setVal(data? this.opts.id(data) : data);

        //make sure placeholder text has "oj-select-default" class
        if (data && data.id != "")
          this.text.removeClass(this._classNm + "-default");

        if (this.opts.allowClear)
        {
          this.container.addClass(this._classNm + "-allowclear");
        }
      },

      //_OjSingleSelect
      _getActiveContainer : function ()
      {
        var expanded = this.search.attr("aria-expanded");
        return (expanded && this._hasSearchBox()) ? this.search : this.selection;
      },

      //_OjSingleSelect
      _isPlaceholderOptionSelected : function ()
      {
        var placeholderOption;
        ///ojselect allow placeholder to be an empty string
        if (this._getPlaceholder() === null)
          return false; // no placeholder specified so no option should be considered

        var cval = this.getVal();
        cval = Array.isArray(cval)? cval[0]: cval;
        //This method is used to check whether placeholder text need to be displayed in ui or not and hence checking current value should be fine.
        return (cval === "")
         || (cval === undefined)
         || (cval === null);
      },

      //_OjSingleSelect
      ///ojselect placeholder this method should be in AbstractOjChoice
      _getPlaceholder : function ()
      {
        return this.opts.placeholder;
      },

      //_OjSingleSelect
      ///ojselect placeholder
      _showPlaceholder : function ()
      {
        return true;
      },

      //_OjSingleSelect
      _setPlaceholder : function ()
      {
        var placeholder = this._getPlaceholder();

        if (this._isPlaceholderOptionSelected() && placeholder !== undefined)
        {
          if (placeholder === undefined)
            placeholder = "";
          this.text.text(placeholder).addClass(this._classNm + "-default");
          this.container.removeClass(this._classNm + "-allowclear");
        }
      },

      //_OjSingleSelect
      setVal: function (val, event)
      {
        ///pass original event
        _OjSingleSelect.superclass.setVal.call(this, val, event);
        this.selection.data("selectVal", val);
      },

      //_OjSingleSelect
      _containerKeydownHandler : function (e)
      {
        ///ignore shift key 
        if (_ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e))
        {
          return;
        }

        switch (e.which)
        {
        case _ComboUtils.KEY.TAB:
          /*
          this._selectHighlighted(
            {
              noFocus : true
            }, e   ///pass original event
          );
          */
          this.close(e);
          //James: tab out of an expanded poplist, focus is going all the way to the top of the page.
          this.selection.focus();

          //Bug 18763700 - required validation err is not displayed when user tabs out
          this._testClear(e);
          return;

        // open dropdown on Enter 
        case _ComboUtils.KEY.ENTER:
          if (e.target === this.selection[0] && ! this._opened())
          {
            this.open(e);
            _ComboUtils.killEvent(e);
            return;
          }
          break;
        }

       _OjSingleSelect.superclass._containerKeydownHandler.apply(this, arguments);
      },

      //_OjSingleSelect
      //Bug 18763700 - required validation err is not displayed when user tabs out
      _testClear : function (event)
      {
        if (this.text.text() == "")
        {
          this._clear(event);
          return true;
        }
        return false;
      },

      //_OjSingleSelect
      _showSearchBox : function ()
      {
        var focusOnSearchBox = false;
        var searchBox = this.dropdown.find(".oj-listbox-search");
        if (searchBox)
        {
          //hide and show the search box
          if (this._hasSearchBox())
          {
            this.dropdown.find(".oj-listbox-search-wrapper")
              .removeClass("oj-helper-hidden-accessible");

            $(searchBox).removeAttr("aria-hidden");

            focusOnSearchBox = true;
          }
          else
          {
            this.dropdown.find(".oj-listbox-search-wrapper")
              .addClass("oj-helper-hidden-accessible");

            $(searchBox)
            .attr(
            {
              "aria-hidden" : "true"
            }
            );
          }
        }

        //if search box is being displayed, focus on the search box otherwise focus on the select box
        _ComboUtils._focus(focusOnSearchBox ? this.search : this.selection);

        ///disable "click" on spyglass
        if (focusOnSearchBox)
        {
          var self = this;
          searchBox.find(".oj-listbox-spyglass-box").on("mouseup click", function (e)
          {
            self.search.focus();
            e.stopPropagation();
          });
        }

      },

      //_OjSingleSelect
      _hasSearchBox : function ()
      {
        var threshold = this.opts.minimumResultsForSearch;
        var len = this.datalist ? this.datalist[0].length : (this.opts.options ? this.opts.options.length: 0);
        return (len > threshold || this._userTyping);
      }

    }
    );


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

  /**
   * @class
   * @name oj.ojCombobox
   * @augments oj.editableValue
   * @since 0.6
   *
   * @classdesc
   * <h3 id="comboboxOverview-section">
   *   JET Combobox Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#comboboxOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Combobox enhances a html input and datalist element into a Combobox that supports
   * single-select, multi-select, free text input, and search filtering.</p>
   *
   * <p>A JET Combobox can be created with the following markup. By default, it creates a single-select
   * Combobox. The 'multiple' option can be specified to change it to a multi-select Combobox.</p>
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input list="items" data-bind="ojComponent: {component: 'ojCombobox', multiple: true}"/>
   * &lt;datalist id="items">
   *   &lt;option value="option 1">option 1&lt;/option>
   *   &lt;option value="option 2">option 2&lt;/option>
   *   &lt;option value="option 3">option 3&lt;/option>
   *   &lt;option value="option 4">option 4&lt;/option>
   * &lt;/datalist>
   * </code></pre>
   *
   * <p>Please note that datalist is not supported in IE 9. To create a JET Combobox that works across browsers
   * including IE 9, please use the <code class="prettyprint">options</code> array to provide the option items.</p>
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;input data-bind="ojComponent: {component: 'ojCombobox', options: 
   *                                     [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}"/>
   * </code></pre>
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
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>LeftArrow or RightArrow</kbd></td>
   *       <td> Move focus to the previous or next selected item in Multi-select Combobox.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.</p>
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Combobox must be <code class="prettyprint">refresh()</code>ed.</p>
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-combobox</code> pseudo-selector can be used in jQuery expressions to select JET Combobox.  For example:</p>
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-combobox" ) // selects all JET Combobox on the page
   * $myEventTarget.closest( ":oj-combobox" ) // selects the closest ancestor that is a JET Combobox
   * </code></pre>
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   * <p>
   * It is up to the application developer to associate the label to the input component.
   * For combobox, you should put an <code>id</code> on the input, and then set 
   * the <code>for</code> attribute on the label to be the input's id.
   * </p>
   * <h3 id="label-section">
   *   Label and Combobox
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
   * </h3>
   * <p>
   * For accessibility, you should associate a label element with the input
   * by putting an <code>id</code> on the input, and then setting the 
   * <code>for</code> attribute on the label to be the input's id.
   * </p>
   * <p>
   * The component will decorate its associated label with required and help 
   * information, if the <code>required</code> and <code>help</code> options are set. 
   * </p>
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Combobox".</p>
   *
   * @desc Creates a JET Combobox.
   * @example <caption>Initialize the Combobox with no options specified:</caption>
   * $( ".selector" ).ojCombobox();
   *
   * @example <caption>Initialize the Combobox with some options:</caption>
   * $( ".selector" ).ojCombobox( { "multiple": true, "placeholder": "Select multiple values." } );
   *
   * @example <caption>Initialize the Combobox via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="combobox" data-bind="ojComponent: { component: 'ojCombobox',
   *                                                    multiple: true}">
   */
  oj.__registerWidget("oj.ojCombobox", $['oj']['editableValue'],
  {
    defaultElement : "<input>",
    widgetEventPrefix : "oj",
    options :
    {
      /** 
       * A converter instance that duck types {@link oj.Converter}. Or an object literal containing 
       * the following properties. 
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
       * @property {string} type - the conveter type registered with the oj.ConverterFactory. 
       * Supported types are 'number' and 'datetime'. See {@link oj.ConverterFactory} for details. <br/>
       * E.g., <code class="prettyprint">{converter: {type: 'number'}</code>
       * @property {Object=} options - optional Object literal of options that the converter expects. 
       * See {@link oj.IntlNumberConverter} for options supported by the number converter. See 
       * {@link oj.IntlDateTimeConverter} for options supported by the date time converter. <br/>
       * E.g., <code class="prettyprint">{converter: {type: 'number', options: {style: 'decimal'}}</code>
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojCombobox
       * @type {Object|undefined}
       */    
      converter: undefined,

    
      /**
       * The placeholder text to set on the element. Though it is possible to set placeholder 
       * attribute on the element itself, the component will only read the value when the component
       * is created. Subsequent changes to the element's placeholder attribute will not be picked up 
       * and page authors should update the option directly.
       * 
       *
       * @example <caption>Initialize the combobox with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "placeholder": "Please select ..." } );
       * 
       * @default when the option is not set, the element's placeholder attribute is used if it exists. 
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojCombobox
       * @type {string|null|undefined}
       */    
      placeholder: undefined,
      
      
      /**
       * If multi-select is enabled for the combobox.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojCombobox( { "multiple": true } );
       */
      multiple : false,
      
      /**
       * The option items for the Combobox. Instead of providing the option items in a datalist, they can be specified as an array of objects containing value and label.
       * The value is used as the value of the option item and label as the label. Both should be of string type. Group data can be provided with label and a children 
       * array containing the option items. Option item can be set as disabled.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">options</code> specified:</caption>
       * $( ".selector" ).ojCombobox( { "options": [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2', disabled: true}, {value: 'option3', label: 'option3'}] } );
       * @example <caption>Initialize the Combobox with group data:</caption>
       * $( ".selector" ).ojCombobox( { "options": [{label : 'group1', children: [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}, {label: 'group2', children: [{value: 'option3', label: 'option3'}]} ] } );
       */
      options : null,
      
      /**
       * Specify the key names to use in the options array.
       *
       * @expose
       * @memberof! oj.ojCombobox
       * @instance
       * @type {Object}
       *
       * @example <caption>Initialize the Combobox with <code class="prettyprint">optionsKeys</code> specified. This allows the key names to be redefined in the options array.</caption>
       * $( ".selector" ).ojCombobox( { "optionsKeys": {value : "state_abbr", label : "state_name"} } );
       * @example <caption>Redefine keys for data with subgroups.</caption>
       * $( ".selector" ).ojCombobox( { "optionsKeys": {label : "regions", children : "states", childKeys : {value : "state_abbr", label : "state_name"}} } );
       */
      optionsKeys : null,
      
      /**
       * Triggered immediately before the combobox drop down is expanded. 
       *
       * @expose
       * @event
       * @memberof! oj.ojCombobox
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Combobox with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojCombobox({
       *     "beforeExpand": function( event, ui ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null

      /** 
       * The value of the combobox. The type of value should be either string or array. 
       * If array is used for single-select, then always first element of the array will be used to select option item.
       * 
       * Note:  <code class="prettyprint">value</code> option can only be bind to a knockout observableArray. 
       * 
       * @example <caption>Initialize the combobox with the <code class="prettyprint">value</code> option specified:</caption>
       * $(".selector").ojCombobox({'value': "option1,option2"});<br/>
       * 
       * @example <caption>Initialize the combobox with the <code class="prettyprint">value</code> option specified as Array for selecting multiple items:</caption>
       * $(".selector").ojCombobox({'value': ["option1", "option2"]});<br/>
       * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
       * // Getter: returns value
       * $(".selector").ojCombobox("option", "value");
       * // Setter: sets value with array containing "option1" and "option2"
       * $(".selector").ojCombobox("option", "value", ["option1", "option2"]);
       * // Setter: sets value with string "option1"
       * $(".selector").ojCombobox("option", "value", "option1"); 
       * // Setter: sets comma string of seperated values
       * $(".selector").ojCombobox("option", "value", "option1,option2"]);
       * 
       * @member 
       * @name  value
       * @access public
       * @instance
       * @default When the option is not set, the element's value property is used as its initial value 
       * if it exists. 
       * @memberof! oj.ojCombobox
       * @type {string|Array}
       */

    },

    /**
     * Returns a jQuery object containing the element visually representing the combobox.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @return {jQuery} the combobox
     */
    widget : function ()
    {
      return this.combobox.container;
    },

    /**
     * @override
     * @private
     */
    _ComponentCreate : function ()
    {
      this._super();
      this._setup();
    },

    _InitOptions : function (originalDefaults, constructorOptions)
    {
      var props = [{"attribute": "disabled", "defaultOptionValue": null, "validateOption": true},
                   {"attribute": "placeholder", "defaultOptionValue": ""},
                   {"attribute": "required", "defaultOptionValue": false, 
                    "coerceDomValue": true, "validateOption": true},
                   {"attribute": "title", "defaultOptionValue": ""}
                   // {"attribute": "value", "defaultOptionValue": null}
                 ]; 
    
      this._super(originalDefaults, constructorOptions);
      oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);  

      // TODO: PAVI - Let's discuss
      if (this.options['value'] === undefined) {
          this.options['value'] = (this.element.attr('value') !== undefined) ? _ComboUtils.splitVal(this.element.val(), ",") : null;
      } else {
          //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
          //TODO: Need to revisit this once 18724975 is fixed.
          var value = this.options['value'];
          if (Array.isArray(value)) {
              value = value.slice(0);
          } else if(typeof value === "string") {
              value = _ComboUtils.splitVal(value, ","); 
          }
          this.options['value'] = value;
      }
    },

    _setup : function ()
    {
      var opts,
      multiple = this.options.multiple;
      opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.combobox = multiple ? new _OjMultiCombobox() : new _OjSingleCombobox();

      this.combobox._init(opts);
    },

    /**
     * @override
     * @private
     */
    _destroy : function ()
    {
      this.combobox._destroy();
    },
    
    /**
     * Refreshes the combobox.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojCombobox
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.combobox._destroy();
      this._setup();
    },

    /**
     * Handles options specific to combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _setOption : function (key, value, flags)
    {
      if (key === "value") {
          //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
          //TODO: Need to revisit this once 18724975 is fixed.
          if (Array.isArray(value)) {
              value = value.slice(0);
          } 
          else if(typeof value === "string") {
              value = _ComboUtils.splitVal(value, ",") ;
          }
      }
      this._super(key, value, flags);  
      
      if (key === "options")
        this.refresh();
        
      if (key === "disabled")
      {
        if (value)
          this.combobox._disable();
        else
          this.combobox._enable();
      }
    },
    
    /**
     * Updates display value of combobox.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _SetDisplayValue: function(displayValue)
    {
      this.combobox._initSelection();
    },
    
    /**
     * Set the placeholder.
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     */
    _SetPlaceholder : function(value)
    {
      if (this.combobox) 
      {
        this.combobox.opts.placeholder = value;
        // TODO: pavitra - noticed that some combobox tests fail because the _setPlaceholder is 
        // undefined, when this method is called from _AfterCreate().
        if (this.combobox._setPlaceholder) 
        {
          this.combobox._setPlaceholder();
        }
      }
    },
    
    /**
     * Validates the component's value using the converter and all validators registered on 
     * the component. 
     * @expose 
     * @override
     * @memberof! oj.ojCombobox
     */
    validate : function ()
    {
      if (this.combobox)
        return this._SetValue(this.combobox.getVal(), null, this._VALIDATE_METHOD_OPTIONS);
    },
    
    /**
     * Returns the messaging launcher element  i.e., where user sets focus that triggers the popup. 
     * Usually this is the element input or select that will receive focus and on which the popup 
     * for messaging is initialized. 
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     * @return {Object} jquery element which represents the messaging launcher component
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.combobox.search;
    }, 
    
    /**
     * Returns the jquery element that represents the content part of the component.
     * This is usually the component that user sets focus on (tabindex is set 0) and 
     * where aria attributes like aria-required, aria-labeledby etc. are set. This is
     * also the element where the new value is updated. Usually this is the same as
     * the _GetMessagingLauncherElement.
     *
     * @override
     * @protected
     * @memberof! oj.ojCombobox
     * @return {Object} jquery element which represents the content.
     */
    _GetContentElement : function ()
    {
      return this.combobox.search;
    },      
    
    /**
     * Returns the default styleclass for the component.
     * 
     * @return {string}
     * @expose
     * @memberof! oj.ojCombobox
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
    return "oj-combobox";
    },
    
    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-combobox-input</b>: the input field </li>
     * <li><b>oj-combobox-arrow</b>: the drop down arrow for single-select combobox </li>
     * <li><b>oj-combobox-drop</b>: the drop down box </li>
     * <li><b>oj-combobox-results</b>: the filtered result list in the rop down</li>
     * <li><b>oj-combobox-selection</b>: the selected choices for multi-select combobox</li>
     * </ul>
     * @expose
     * @memberof! oj.ojCombobox
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *        the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
      var node = null, subId;
	    if (locator == null)
	    {
        return this.combobox.container ? this.combobox.container[0] : null;
	    }
      else
      {
        node = this._super(locator);
      }
	    
      if (!node)
      {
        subId = locator['subId'];
        if (subId === "oj-combobox-drop")
          subId = "oj-listbox-drop";

        if (subId === "oj-combobox-results")
          subId = "oj-listbox-results";
          
        if (subId === "oj-combobox-selection")
          subId = "oj-combobox-selected-choice";

        switch (subId)
        {
          case "oj-combobox-input":
          case "oj-combobox-arrow":
          case "oj-listbox-drop":
          case "oj-listbox-results":
            node = this.widget().find("." + subId)[0];
            break;
          case "oj-combobox-selected-choice":
            node = this.widget().find("." + subId);
            break;
        }    
	    }

	    // Non-null locators have to be handled by the component subclasses
	    return node || null;
    }

  });
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

  /**
   * @class
   * @name oj.ojSelect
   * @augments oj.editableValue
   * @since 0.6
   *
   * @classdesc
   * <h3 id="selectOverview-section">
   *   JET Select Component
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#selectOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Select enhances a html select and option elements into a Select that supports
   * single-select and search filtering. Note: Muliple selection is not supported in V1.
   *
   * <p>A JET Select can be created with the following markup. By default, it creates a single-select
   * Select. 
   *
   * <pre class="prettyprint">
   * <code>
   * &lt;select data-bind="ojComponent: {component: 'ojSelect'}">
   *     &lt;option value="option 1">option 1&lt;/option>
   *     &lt;option value="option 2">option 2&lt;/option>
   *     &lt;option value="option 3">option 3&lt;/option>
   *     &lt;option value="option 4">option 4&lt;/option>
   * &lt;/select>
   * </code></pre>
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   *
   * <p>
   * <h5>When the focus is in the select element</h5>
   * </p>
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
   *       <td><kbd>Enter</kbd></td>
   *       <td> Select the highlighted choice.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>UpArrow or DownArrow</kbd></td>
   *       <td> Highlight the option item on the drop down list in the direction of the arrow.
   *         If the drop down is not open, expand the drop down list.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>Esc</kbd></td>
   *       <td> Collapse the drop down list. If the drop down is already closed, do nothing.</td>
   *     </tr>
   *
   *   </tbody>
   *  </table>
   *
   * <p>Disabled option items receive no highlight and are not selectable.
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the Select must be <code class="prettyprint">refresh()</code>ed.
   *
   *
   * <h3 id="pseudos-section">
   *   Pseudo-selectors
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
   * </h3>
   *
   * <p>The <code class="prettyprint">:oj-select</code> pseudo-selector can be used in jQuery expressions to select JET Select.  For example:
   *
   * <pre class="prettyprint">
   * <code>$( ":oj-select" ) // selects all JET Select on the page
   * $myEventTarget.closest( ":oj-select" ) // selects the closest ancestor that is a JET Select
   * </code></pre>
   *
  * <h3 id="a11y-section">
  *   Accessibility
  *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
  * </h3>
  * <p>
  * It is up to the application developer to associate the label to the select component.
  * For select, you should put an <code>id</code> on the select, and then set 
  * the <code>for</code> attribute on the label to be the select's id.
  * </p>
  * <h3 id="label-section">
  *   Label and Select
  *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
  * </h3>
  * <p>
  * For accessibility, you should associate a label element with the select
  * by putting an <code>id</code> on the select, and then setting the 
  * <code>for</code> attribute on the label to be the select's id.
  * </p>
  * <p>
  * The component will decorate its associated label with required and help 
  * information, if the <code>required</code> and <code>help</code> options are set. 
  * </p>
   * <h3 id="jqui2jet-section">
   *   JET for jQuery UI developers
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
   * </h3>
   *
   * <p>Event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "Select".
   *
   * @desc Creates a JET Select.
   * @example <caption>Initialize the Select with no options specified:</caption>
   * $( ".selector" ).ojSelect();
   *
   * @example <caption>Initialize the Select with some options:</caption>
   * $( ".selector" ).ojSelect( { "placeholder": "Select a value." } );
   *
   * @example <caption>Initialize the Select via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
   * &lt;div id="select" data-bind="ojComponent: { component: 'ojSelect' }">
   */
  oj.__registerWidget("oj.ojSelect", $['oj']['editableValue'],
  {
    defaultElement : "<select>",
    widgetEventPrefix : "oj",
    options :
    {
      /**
       * The threshold for showing the search box in the dropdown when it's expanded.
       * The search box is always displayed when the results size is greater than
       * the threshold, otherwise the search box is initially turned off.
       * However, the search box is displayed as soon as the user starts typing.
       * This property only applies to single-select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {number}
       * @default <code class="prettyprint">10</code>
       */
      minimumResultsForSearch : 10,
      
    
      /**
       * The placeholder text to set on the element.<p>
       * If the <code class="prettyprint">placeholder</code> option is specified to a string, ojselect will adds a placeholder item at the beginning of the dropdown list with
       *<ul>
       *<li>displayValue: placeholder text</li>
       *<li>value: an empty string</li>
       *</ul>
       * The placeholder item in the dropdown is selectable. However, it's not a valid choice, i.e. validation will fail if the select component is a required field.<p>
       * The placeholder item doesn't participate in the filtering, so it will not appear in the result list with a filter specified.<p>
       * Placeholder text can be an empty string, please see the select placeholder cookbook demo.
       * 
       * @example <caption>Initialize the select with the <code class="prettyprint">placeholder</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "placeholder": "Please select ..." } );
       * 
       * @default <code class="prettyprint">undefined</code>
       * 
       * @expose 
       * @access public
       * @instance
       * @memberof! oj.ojSelect
       * @type {string|null|undefined}
       */    
      placeholder: undefined,
      
      /**
       * If multi-select is enabled for the select.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {boolean}
       * @default <code class="prettyprint">false</code>
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">multiple</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "multiple": true } );

      multiple: false,
       */

      /**
       * The option items for the Select. Instead of providing a list of option items, they can be specified as an array of objects containing value and label.
       * The value is used as the value of the option item and label as the label.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Array}
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">options</code> option specified:</caption>
       * $( ".selector" ).ojSelect( { "options": [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}, {value: 'option3', label: 'option3'},] } );
        * @example <caption>Initialize the Select with group data:</caption>
       * $( ".selector" ).ojSelect( { "options": [{label : 'group1', children: [{value: 'option1', label: 'option1'}, {value: 'option2', label: 'option2'}]}, {label: 'group2', children: [{value: 'option3', label: 'option3'}]} ] } );
       */
      options : null,
      
      /**
       * Specify the key names to use in the options array.
       *
       * @expose
       * @memberof! oj.ojSelect
       * @instance
       * @type {Object}
       *
       * @example <caption>Initialize the Select with <code class="prettyprint">optionsKeys</code> specified. This allows the key names to be redefined in the options array.</caption>
       * $( ".selector" ).ojSelect( { "optionsKeys": {value : "state_abbr", label : "state_name"} } );
       * @example <caption>Redefine keys for data with subgroups.</caption>
       * $( ".selector" ).ojSelect( { "optionsKeys": {label : "regions", children : "states", childKeys : {value : "state_abbr", label : "state_name"}} } );
       */
      optionsKeys : null,

      /**
       * Triggered immediately before the Select drop down is expanded. 
       *
       * @expose
       * @event
       * @memberof! oj.ojSelect
       * @instance
       * @property {Event} event <code class="prettyprint">jQuery</code> event object
       * @property {Object} ui Parameters
       *
       * @example <caption>Initialize the Select with the <code class="prettyprint">beforeExpand</code> callback specified:</caption>
       * $( ".selector" ).ojSelect({
       *     "beforeExpand": function( event ) {}
       * });
       *
       * @example <caption>Bind an event listener to the <code class="prettyprint">ojbeforeexpand</code> event:</caption>
       * $( ".selector" ).on( "ojbeforeexpand", function( event, ui ) {} );
       */
      beforeExpand : null

      /** 
       * The value of the select component. The data type of value is array. Only the first element of the array is used.
       * 
       * Note:  <code class="prettyprint">value</code> option can only be bind to a knockout observableArray. 
       * 
       * @example <caption>Initialize the select with the <code class="prettyprint">value</code> option specified:</caption>
       * $(".selector").ojSelect({"value": ["option1"]});<br/>
       * 
       * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
       * // Getter: returns value
       * $(".selector").ojSelect("option", "value");
       * // Setter: sets value with array containing "option1"
       * $(".selector").ojSelect("option", "value", ["option1"]);
       * 
       * @member 
       * @name  value
       * @access public
       * @instance
       * @default When the value option is not set, the first option is used as its initial value if it exists. 
       * @memberof! oj.ojSelect
       * @type {Array}
       */
    },

    /**
     * Returns a jQuery object containing the element visually representing the select.
     *
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @return {jQuery} the select
     */
    widget : function ()
    {
      return this.select.container;
    },

    /**
     * @override
     * @private
     * @memberof! oj.ojSelect
     */
    _ComponentCreate : function ()
    {
      this._super();
      this._setup();
    },

    //ojselect
    _setup : function ()
    {
      var opts = {};
      opts.element = this.element;
      opts.ojContext = this;
      opts = $.extend(this.options, opts);

      this.select = new _OjSingleSelect();
      this.select._init(opts);
    },

    /**
     * Refreshes the visual state of the select. JET components require a <code class="prettyprint">refresh()</code> or re-init after the DOM is programmatically changed underneath the component.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojSelect
     * @instance
     */
    refresh : function ()
    {
      this._super();

      this.select._destroy();
      this._setup();
      //TODO: apply value in options for the selected value
    },

    /**
     * @override
     * @private
     * @memberof! oj.ojSelect
     */
    _destroy : function ()
    {
      this.select._destroy();
    },

    /**
     * Expands the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance

    expand : function ()
    {
      this.select.open();
    },
     */
    /**
     * Collapses the drop down list.
     *
     * This method does not accept any arguments.
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance

    collapse : function ()
    {
      this.select.close();
    },
     */

    /**
     * Sets the placeholder text on the content element by default. It sets the placeholder attribute
     * on the element. Component subclasses can override this method to control where placeholder text
     * gets set.
     * @param {string} value
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @override
     */
    _SetPlaceholder : function(value)
    {
      /*
       * Commented out the content to fix the side effect from 
       * the change made in EditableValue._initComponentMessaging (Revision: 9016).
       * EditableValue called SetPlaceholder with an empty string which made
       * every ojselect to have an empty placeholder in the dropdown.
       * Note: don't remove the method because there is more calls from EditableValue
       * to ojselect before this.select is initialized.
       * ex: _GetContentElement

      if (this.select) 
      {
        this.select.opts.placeholder = value;
        this.select._setPlaceholder();
      }
      */
    },

    /**
     * whether the placeholder option is set
     * 
     * @memberof! oj.ojSelect
     * @instance
     * @protected
     */
    _HasPlaceholderSet : function()
    {
      //Bug 18926010 - an empty placeholder shows up if data changed after first binding 
      return typeof this.options['placeholder'] === 'string';
    },

    /**
     * Clear the placeholder option
     * 
     * @memberof! oj.ojSelect
     * @instance
     * @protected
     */
    _ClearPlaceholder : function()
    {
      //Bug 18926010 - an empty placeholder shows up if data changed after first binding 
      this._SetPlaceholderOption(null);
      this._SetPlaceholder(null);
    },

    //ojselect
    _InitOptions : function (originalDefaults, constructorOptions)
    {
      var props = [{"attribute": "disabled", "defaultOptionValue": null, "validateOption": true},
                   {"attribute": "placeholder", "defaultOptionValue": null},
                   {"attribute": "required", "defaultOptionValue": false, 
                    "coerceDomValue": true, "validateOption": true},
                   {"attribute": "title", "defaultOptionValue": ""}
                   // {"attribute": "value", "defaultOptionValue": null}
                 ]; 
    
      this._super(originalDefaults, constructorOptions);
      oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);  

      // TODO: PAVI - Let's discuss
      if (this.options['value'] === undefined) {
        this.options['value'] = (this.element.attr('value') !== undefined) ? _ComboUtils.splitVal(this.element.val(), ",") : null;
      }
      else {
        //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
        //TODO: Need to revisit this once 18724975 is fixed.
        var value = this.options['value'];
        if (Array.isArray(value)) {
          value = value.slice(0);
        }
/*
        else if(typeof value ==='string') {
          value = [value];
        }
*/
        this.options['value'] = value;
      }
    },
    
    /**
     * @override
     * @memberof! oj.ojSelect
     */
    validate : function ()
    {
      //Bug 19231311 - select needs implementation fixes...
      return this._SetValue(this.select.getVal(), null, this._VALIDATE_METHOD_OPTIONS);
    },
  
     /**
     * Updates display value.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _SetDisplayValue: function(displayValue)
    {
      this.select._initSelection();
    },

    /**
     * Handles options specific to select.
     * @override
     * @protected
     * @memberof! oj.ojSelect
     */
    _setOption : function (key, value, flags)
    {
      if (key === "value") {
        //clone the value, otherwise _setDisplayValue will not be invoked on binding value to ko observableArray.
        //TODO: Need to revisit this once 18724975 is fixed.
        //TODO: Need to validate value (bug 19074312)
        if (Array.isArray(value)) {
          value = value.slice(0);
        }
/*
        else if (typeof value === 'string') {
          value = [value];
        }
*/
      }
      else if (key === "placeholder")
      {
        this.select.opts.placeholder = value;
        this.select._setPlaceholder();
      }

      else if (key === "minimumResultsForSearch")
      {
        this.select.opts.minimumResultsForSearch = value;
      }

      this._super(key, value, flags);

      if (key === "disabled")
      {
        if (value)
          this.select._disable();
        else
          this.select._enable();
      }
      else if (key === "options")
      {
        //Bug 18926010 - an empty placeholder shows up if data changed after first binding
        //TODO: when options change, should we clear the value in case it becomes invalid??
        this._setup();
      }
    },

    _getDropdown : function ()
    {
      if (this.select && this.select._opened())
      {
        var dropdown = $(".oj-listbox-drop");
        if (dropdown.attr("id") == "oj-listbox-drop" &&
            dropdown.attr(oj.DomUtils.SURROGATE_ID) == this.select.containerId)
          return dropdown;
      }
      return null;
    },

    /**
     * Return the subcomponent node represented by the documented locator 
     * attribute values.
     * Test authors should target sub elements using the following names:
     * <ul>
     * <li><b>oj-select-chosen</b>: the selected text in the select box</li>
     * <li><b>oj-select-search</b>: the search box. Note the searchbox is not always visible</li>
     * <li><b>oj-listbox-input</b>: the search input. Note the search input is not always visible</li>
     * <li><b>oj-select-drop</b>: the drop down box </li>
     * <li><b>oj-select-results</b>: the filtered result list </li>
     * <li><b>oj-listbox-result-label</b>: the filtered result item</li>
     * </ul>
     *
     * Note: To lookup a filtered result item, the dropdown must be open and
     *       the locator object should have the following:<p>
     *          subId: 'oj-listbox-result-label' and 
     *          index: number
     *
     * @expose
     * @memberof! oj.ojSelect
     * @instance
     * @override
     * @param {Object} locator An Object containing at minimum a subId property 
     *        whose value is a string, documented by the component, that allows 
     *        the component to look up the subcomponent associated with that 
     *        string.  It contains:<p>
     *        component: optional - in the future there may be more than one 
     *        component contained within a page element<p>
     *        subId: the string, documented by the component, that the component 
     *        expects in getNodeBySubId to locate a particular subcomponent
     * @returns {Element|null} the subcomponent located by the subId string passed
     *          in locator, if found.<p>
     */
    getNodeBySubId: function(locator)
    {
      var node = null, subId;
      if (locator == null)
      {
        return this.select.container ? this.select.container[0] : null;
      }
      else
      {
        node = this._super(locator);
      }
	    
      if (!node)
      {
        subId = locator['subId'];
        if (subId === "oj-select-drop")
          subId = "oj-listbox-drop";

        if (subId === "oj-select-results")
          subId = "oj-listbox-results";

        if (subId === "oj-select-search")
          subId = "oj-listbox-search";

        switch (subId) {
          case "oj-select-choice":
          case "oj-select-chosen":
            node =  this.widget().find("." + subId)[0];
            break;

          case "oj-listbox-drop":
            var dropdown = this._getDropdown();
            if (dropdown) {
              node = dropdown[0];
            }
            break;

          case "oj-listbox-input":
          case "oj-listbox-search":
          case "oj-listbox-results":
            var dropdown = this._getDropdown();
            if (dropdown) {
              node = dropdown.find("." + subId)[0];
            }
            break;

          //Bug 18872085 - ojselect - not able to attach id for generated jet component
          case "oj-listbox-result-label":
            if (this._getDropdown())
            {
              //list of 'li'
              var ddlist =  $("#" + this.select.results.attr("id")).children();
              var index = locator['index'];

              if (ddlist.length && index < ddlist.length) {
                node = ddlist.eq(index).find("." + subId)[0];
              }
            }
            break;
        }
      }
      // Non-null locators have to be handled by the component subclasses
      return node || null;
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
     * @expose
     * @memberof! oj.ojSelect
     * @override
     * @protected
     */
    _GetDefaultStyleClass : function ()
    {
      return "oj-select";
    },

    /**
     * Returns the messaging launcher element i.e., where user sets focus that triggers the popup. 
     * Usually this is the element input or select that will receive focus and on which the popup 
     * for messaging is initialized. 
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     * @return {Object} jquery element which represents the messaging launcher component
     */
    _GetMessagingLauncherElement : function ()
    {
      return this.select.selection;
    },
    
    /**
     * Returns the jquery element that represents the content part of the component.
     * This is usually the component that user sets focus on (tabindex is set 0) and 
     * where aria attributes like aria-required, aria-labeledby etc. are set. This is
     * also the element where the new value is updated. Usually this is the same as
     * the _GetMessagingLauncherElement.
     *
     * @override
     * @protected
     * @memberof! oj.ojSelect
     * @return {Object} jquery element which represents the content.
     */
    _GetContentElement : function ()
    {
      return this.select.selection;
    }

  }
  );


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @preserve Copyright 2012 Igor Vaynberg
 *
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 * General Public License version 2 (the "GPL License"). You may choose either license to govern your
 * use of this software only upon the condition that you accept all of the terms of either the Apache
 * License or the GPL License.
 * 
 * You may obtain a copy of the Apache License and the GPL License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 * the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
/**
 * @private
 */
  var _OjMultiCombobox = _ComboUtils.clazz(_AbstractOjChoice,
    {
      _elemNm : "ojcombobox",
      _classNm : "oj-combobox",

      _createContainer : function ()
      {
        //@HTMLUpdateOK
        var container = $(document.createElement("div")).attr(
          {
            "class" : "oj-combobox oj-combobox-multi oj-component"
          }
          ).html([
              "<ul class='oj-combobox-choices'>",
              "  <li class='oj-combobox-search-field'>",
              "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-combobox-input'>",
              "  </li>",
              "</ul>",
              "<div class='oj-combobox-description oj-helper-hidden-accessible'/>",
              "<div class='oj-listbox-drop oj-listbox-drop-multi' style='display:none'>",
              "   <ul class='oj-listbox-results' role='listbox'>",
              "   </ul>",
              "</div>"].join(""));
        return container;
      },
      
      _prepareOpts : function ()
      {
        var opts = _OjMultiCombobox.superclass._prepareOpts.apply(this, arguments),
        self = this;

        if (opts.element.get(0).tagName.toLowerCase() === "input" && opts.element.attr("list"))
        {
          // install the selection initializer
          opts.initSelection = function (element, callback)
          {
            var data = [];
            if (self.getVal() && self.getVal().length)
            {
              var selected;
              var ids = self.getVal();
              for (var i = 0; i < ids.length; i++)
              {
                var id = ids[i];
                selected = element.find("option").filter(function ()
                  {
                    return this.value === id;
                  }
                  );
                if(selected && selected.length)
                {
                    data.push(self._optionToData(selected));  
                }else{
                   // If user entered value which is not listed in predefiend options
                  data.push({'value':id,'label':id});  
                }
                
              }
            }
            else
            {
              var selected;
              selected = element.find("option").filter(function ()
                {
                  return this.selected
                }
                );
              _ComboUtils.each2(selected, function (i, elm)
              {
                data.push(self._optionToData(elm));
              }
              );
            }
            callback(data);
          };
        }
        else if ("options" in opts)
        {
          // install default initSelection when applied to hidden input and data is local
          opts.initSelection = opts.initSelection || function (element, callback)
          {
            var ids = self.getVal();
            //search in data by array of ids, storing matching items in a list
            var matches = [];
            opts.query(
            {
              matcher : function (term, text, el)
              {
                var is_match = $.grep(ids, function (id)
                  {
                    return id === opts.id(el);
                  }
                  ).length;
                if (is_match)
                {
                  matches.push(el);
                }
                return is_match;
              },
              callback : !$.isFunction(callback) ? $.noop : function ()
              {
                // reorder matches based on the order they appear in the ids array because right now
                // they are in the order in which they appear in data array
                var ordered = [];
                for (var i = 0; i < ids.length; i++)
                {
                  var id = ids[i];
                  var found = false;
                  for (var j = 0; j < matches.length; j++)
                  {
                    var match = matches[j];
                    if (id === opts.id(match))
                    {
                      ordered.push(match);
                      matches.splice(j, 1);
                      found = true;
                      break;
                    }
                  }
                  if(!found){
                    //If user entered value which is not listed in predefiend options
                    ordered.push({'value':id,'label':id});
                  }
                }
                callback(ordered);
              }
            }
            );
          };
        }
        return opts;
      },
      
      _selectChoice : function (choice)
      {
        var selected = this.container.find("." + this._classNm + "-selected-choice.oj-focus");
        if (selected.length && choice && choice[0] == selected[0])
        {}

        else
        {
          if (selected.length)
          {
            this.opts.element.trigger("choice-deselected", selected);
          }
          selected.removeClass("oj-focus");
          if (choice && choice.length)
          {
            this.close();
            choice.addClass("oj-focus");
            this.container.find(".oj-combobox-description").text(choice.attr("valueText") + ". Press back space to delete.")
            .attr("aria-live", "assertive");
            this.opts.element.trigger("choice-selected", choice);
          }
        }
      },
      
      _destroy : function ()
      {
        $("label[for='" + this.search.attr('id') + "']")
        .attr('for', this.opts.element.attr("id"));
        _OjMultiCombobox.superclass._destroy.apply(this, arguments);
      },

      _initContainer : function ()
      {
        var selector = "." + this._classNm + "-choices",
        selection,
        idSuffix = _ComboUtils.nextUid(),
        elementLabel;

        this.searchContainer = this.container.find("." + this._classNm + "-search-field");
        this.selection = selection = this.container.find(selector);

        var _this = this;
        this.selection.on("click", "." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)", function (e)
        {
          _this.search[0].focus(); //Fixed??
          _this._selectChoice($(this));
        }
        );

        elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
        if (!elementLabel.attr("id"))
          elementLabel.attr('id', this._classNm + "-label-" + idSuffix);

        // add aria associations
        selection.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + idSuffix);
        this.results.attr("id", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-owns", "oj-listbox-results-" + idSuffix);
        this.search.attr("aria-labelledby", elementLabel.attr("id"));

        this.search.on("input paste", this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
            if (!this._opened())
            {
              this.open();
            }
          }
          ));

        this.search.attr("tabindex", this.elementTabIndex);
        this.keydowns = 0;
        this.search.on("keydown", this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;

            ++this.keydowns;
            var selected = selection.find("." + this._classNm + "-selected-choice.oj-focus");
            var prev = selected.prev("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)");
            var next = selected.next("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)");
            var pos = _ComboUtils.getCursorInfo(this.search);

            if (selected.length &&
              (e.which == _ComboUtils.KEY.LEFT || e.which == _ComboUtils.KEY.RIGHT || e.which == _ComboUtils.KEY.BACKSPACE || e.which == _ComboUtils.KEY.DELETE || e.which == _ComboUtils.KEY.ENTER))
            {
              var selectedChoice = selected;
              if (e.which == _ComboUtils.KEY.LEFT && prev.length)
              {
                selectedChoice = prev;
              }
              else if (e.which == _ComboUtils.KEY.RIGHT)
              {
                selectedChoice = next.length ? next : null;
              }
              else if (e.which === _ComboUtils.KEY.BACKSPACE)
              {
                this._unselect(selected.first(), e);
                this.search.width(10);
                selectedChoice = prev.length ? prev : next;
              }
              else if (e.which == _ComboUtils.KEY.DELETE)
              {
                this._unselect(selected.first(), e);
                this.search.width(10);
                selectedChoice = next.length ? next : null;
              }
              else if (e.which == _ComboUtils.KEY.ENTER)
              {
                selectedChoice = null;
              }

              this._selectChoice(selectedChoice);
              _ComboUtils.killEvent(e);
              if (!selectedChoice || !selectedChoice.length)
              {
                this.open();
              }
              return;
            }
            else if (((e.which === _ComboUtils.KEY.BACKSPACE && this.keydowns == 1)
                 || e.which == _ComboUtils.KEY.LEFT) && (pos.offset == 0 && !pos.length))
            {
              this._selectChoice(selection.find("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)").last());
              _ComboUtils.killEvent(e);
              return;
            }
            else
            {
              this._selectChoice(null);
            }

            if (this._opened())
            {
              switch (e.which)
              {
              case _ComboUtils.KEY.UP:
              case _ComboUtils.KEY.DOWN:
                this._moveHighlight((e.which === _ComboUtils.KEY.UP) ? -1 : 1);
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.ENTER:
                this._selectHighlighted(null, e);
                _ComboUtils.killEvent(e);
                return;
              case _ComboUtils.KEY.TAB:
                this.close(e);
                return;
              case _ComboUtils.KEY.ESC:
                this._cancel(e);
                _ComboUtils.killEvent(e);
                return;
              }
            }

            if (e.which === _ComboUtils.KEY.TAB || _ComboUtils.KEY.isControl(e) || _ComboUtils.KEY.isFunctionKey(e)
               || e.which === _ComboUtils.KEY.BACKSPACE || e.which === _ComboUtils.KEY.ESC)
            {
              return;
            }

            if (e.which === _ComboUtils.KEY.ENTER)
            {
              if (this.opts.openOnEnter === false)
              {
                return;
              }
              else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)
              {
                return;
              }
            }

            this.open();

            if (e.which === _ComboUtils.KEY.PAGE_UP || e.which === _ComboUtils.KEY.PAGE_DOWN)
            {
              // prevent the page from scrolling
              _ComboUtils.killEvent(e);
            }

            if (e.which === _ComboUtils.KEY.ENTER)
            {
              // prevent form from being submitted
              _ComboUtils.killEvent(e);
            }

          }
          ));

        this.search.on("keyup", this._bind(function (e)
          {
            this.keydowns = 0;
          }
          ));

        this.search.on("blur", this._bind(function (e)
          {
            if (this.opts["manageNewEntry"] && this.search.val() && (this.results.children().length <= 0)) {
              var data = this.opts["manageNewEntry"](this.search.val());
              this._onSelect(data, null, e);
            }
            this.search.removeClass(this._classNm + "-focused");
            this._selectChoice(null);
            if (!this._opened())
              this._clearSearch();
            e.stopImmediatePropagation();
          }
          ));

        this.container.on("click", selector, this._bind(function (e)
          {
            if (!this._isInterfaceEnabled())
              return;
            if ($(e.target).closest("." + this._classNm + "-selected-choice").length > 0)
            {
              // clicked inside a oj-combobox selected choice, do not open
              return;
            }
            this._selectChoice(null);
            this.open();
            this._focusSearch();
            e.preventDefault();
          }
          ));

        this.container.on("focus", selector, this._bind(function ()
          {
            if (!this._isInterfaceEnabled())
              return;
          }
          ));

        this._initContainerWidth();
        this.opts.element.hide()
                  .attr("aria-hidden", true);

        // set the placeholder if necessary
        this._clearSearch();
      },
      
      _enableInterface : function ()
      {
        if (_OjMultiCombobox.superclass._enableInterface.apply(this, arguments))
        {
          this.search.prop("disabled", !this._isInterfaceEnabled());
        }
      },
      
      _initSelection : function ()
      {
        var data;
        if ((this.getVal() === null || this.getVal().length === 0) && this.opts.element.text() === "")
        {
          this._updateSelection([]);
          this.close();
          // set the placeholder if necessary
          this._clearSearch();
        }
        if (this.datalist || (this.getVal() !== null && this.getVal().length))
        {
          var self = this,
          element;
          if (this.datalist)
            element = this.datalist;
          else
            element = this.opts.element;
          this.opts.initSelection.call(null, element, function (data)
          {
            if (data !== undefined && data !== null)
            {
              self._updateSelection(data);
              self.close();
              // set the placeholder if necessary
              self._clearSearch();
            }
          }
          );
        }
      },
      
      _clearSearch : function ()
      {
        var placeholder = this._getPlaceholder(),
        maxWidth = this._getMaxSearchWidth();

        if (placeholder !== undefined && (!this.getVal() || this.getVal().length === 0))
        {
          this.search.attr("placeholder", placeholder);
          // stretch the search box to full width of the container so as much of the placeholder is visible as possible
          // we could call this._resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
          this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
        }
        else
        {
          this.search.attr("placeholder", "");
          this.search.val("").width(10);
        }
      },
      
      _opening : function (event)
      {
        //if beforeExpand is not cancelled
        if (this.ojContext._trigger("beforeExpand", event)) 
        {
          this._resizeSearch();
          _OjMultiCombobox.superclass._opening.apply(this, arguments);
          this._focusSearch();
          this._updateResults(true);
          this.search.focus();
        }
      },
      
      close : function (event)
      {
        if (!this._opened())
          return;
        _OjMultiCombobox.superclass.close.apply(this, arguments);
      },
      
      _focus : function ()
      {
        this.close();
        this.search.focus();
      },
      
      _updateSelection : function (data)
      {
        var ids = [],
        filtered = [],
        self = this;

        // filter out duplicates
        $(data).each(function ()
        {
          if (ids.indexOf(self.id(this)) < 0)
          {
            ids.push(self.id(this));
            filtered.push(this);
          }
        }
        );
        data = filtered;
        this.selection.find("." + this._classNm + "-selected-choice").remove();
        $(data).each(function ()
        {
          self._addSelectedChoice(this);
        }
        );
        self._postprocessResults();
      },
      
      _onSelect : function (data, options, event)
      {
        if (!this._triggerSelect(data))
        {
          return;
        }
        this._addSelectedChoice(data);
        var id = this.id(data);
        //Clone the value before invoking setVal(), otherwise it will not trigger change event.
        var val = this.getVal() ? this.getVal().slice(0) : [];
        
        // If the component is invalid, we will not get all the values matching the displayed value
        if (!this.ojContext.isValid())
          val = _ComboUtils.splitVal(this.opts.element.val(), this.opts.separator);
          
        $(data).each(function() {
            if (val.indexOf(id) < 0) {
                val.push(id);
            }
        });
        this.setVal(val, event);
        if (this.select || !this.opts.closeOnSelect)
          this._postprocessResults(data, false, this.opts.closeOnSelect === true);
        if (this.opts.closeOnSelect)
        {
          this.close(event);
          this.search.width(10);
        }
        
        if (!options || !options.noFocus)
          this._focusSearch();
      },
      
      _cancel : function (event)
      {
        this.close(event);
        this._focusSearch();
      },
      
      _addSelectedChoice : function (data)
      {
        var enableChoice = !data.locked,
        enabledItem = $(
            "<li class='" + this._classNm + "-selected-choice'>" +
            "    <div></div>" +
            "    <a href='#' onclick='return false;' class='" + this._classNm + "-clear-entry' tabindex='-1'>" +
            "    <span class='oj-component-icon oj-clickable-icon oj-combobox-clear-entry-icon' role='presentation'></a>" +
            "</li>"),
        disabledItem = $(
            //"<li class='oj-combobox-selected-choice oj-combobox-locked'>" +
            "<li class='" + this._classNm + "-selected-choice " + this._classNm + "-locked'>" +
            "<div></div>" +
            "</li>");
        var choice = enableChoice ? enabledItem : disabledItem,
        id = this.id(data),
        formatted;

        formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
        if (formatted !== undefined)
        {
          choice.find("div").replaceWith("<div class='" + this._classNm + "-selected-choice-label'>" + formatted + "</div>");
          choice.attr("valueText", formatted);
        }
        if (enableChoice)
        {
          choice.find("." + this._classNm + "-clear-entry")
          .on("mousedown", _ComboUtils.killEvent)
          .on("click dblclick", this._bind(function (e)
            {
              if (!this._isInterfaceEnabled())
                return;

              $(e.target).closest("." + this._classNm + "-selected-choice").fadeOut('fast', this._bind(function ()
                {
                  this._unselect($(e.target), e);
                  this.selection.find("." + this._classNm + "-selected-choice.oj-focus").removeClass("oj-focus");
                  this.close(e);
                  this._focusSearch();
                }
                )).dequeue();
              _ComboUtils.killEvent(e);
            }
            ));
        }
        choice.data(this._elemNm, data);
        choice.insertBefore(this.searchContainer);
        
      },
      
      _unselect : function (selected, event)
      {
        var val = this.getVal() ? this.getVal().slice(0) : [],
        data,
        index;
        selected = selected.closest("." + this._classNm + "-selected-choice");
          
        if (selected.length === 0)
        {
          //TODO: translation string
          throw "Invalid argument: " + selected + ". Must be ." + this._classNm + "-selected-choice";
        }
        data = selected.data(this._elemNm);
        if (!data)
        {
          // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
          // and invoked on an element already removed
          return;
        }
        
        // If the component is invalid, we will not get all the values matching the displayed value
        if (!this.ojContext.isValid())
          val = _ComboUtils.splitVal(this.opts.element.val(), this.opts.separator);
          
        while ((index = val.indexOf(this.id(data))) >= 0)
        {
          val.splice(index, 1);
          this.setVal(val, event);
          if (this.select)
            this._postprocessResults();
        }
        selected.remove();
      },
      
      _postprocessResults : function (data, initial, noHighlightUpdate)
      {
        var val = (this.getVal() &&  (this.opts.element.val() || this.ojContext.isValid())) ? this.getVal() : [],
        choices = this.results.find(".oj-listbox-result"),
        compound = this.results.find(".oj-listbox-result-with-children"),
        self = this;
          
        _ComboUtils.each2(choices, function (i, choice)
        {
          var id = self.id(choice.data(self._elemNm));
          if (val && val.indexOf(id) >= 0)
          {
            choice.addClass("oj-selected");
            // mark all children of the selected parent as selected
            choice.find(".oj-listbox-result-selectable").addClass("oj-selected");
          }
        }
        );
        _ComboUtils.each2(compound, function (i, choice)
        {
          // hide an optgroup if it doesnt have any selectable children
          if (!choice.is(".oj-listbox-result-selectable")
             && choice.find(".oj-listbox-result-selectable:not(.oj-selected)").length === 0)
          {
            choice.addClass("oj-selected");
          }
        }
        );
        
        if (!choices.filter('.oj-listbox-result:not(.oj-selected)').length > 0)
          this.close();
      },
      
      _getMaxSearchWidth : function ()
      {
        return this.selection.width() - _ComboUtils.getSideBorderPadding(this.search);
      },
      
      _textWidth : function (text) {
        var textSpan = '<span style="display:none">' + text + '</span>';
        $('body').append(textSpan);
        var width = $('body').find('span:last').width();
        $('body').find('span:last').remove();
        return width;
      },
      
      _resizeSearch : function ()
      {
        var minimumWidth,
        left,
        maxWidth,
        containerLeft,
        searchWidth,
        sideBorderPadding = _ComboUtils.getSideBorderPadding(this.search);

        minimumWidth = this._textWidth(this.search.val()) + 10;
        left = this.search.offset().left;
        maxWidth = this.selection.width();
        containerLeft = this.selection.offset().left;
        searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
        if (searchWidth < minimumWidth)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth < 40)
        {
          searchWidth = maxWidth - sideBorderPadding;
        }
        if (searchWidth <= 0)
        {
          searchWidth = minimumWidth;
        }
        this.search.width(Math.floor(searchWidth));
      },

      setVal : function (val, event)
      {
        var unique;
        unique = [];
        
        if (typeof val === "string")
          val = _ComboUtils.splitVal(val, this.opts.separator);
        // filter out duplicates
        for(var i =0; i < val.length; i++)
        {
          if (unique.indexOf(val[i]) < 0)
            unique.push(val[i]);
        }
        
        this.ojContext._SetValue(unique, event, {doValueChangeCheck: false});
        this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
        
        this.search.attr("aria-activedescendant", this.opts.element.attr("id"));
      }
    }
    );


});
