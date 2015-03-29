define('orderedListMenu', [
        'jquery',
        'knockout',
        'Translate'
    ],

    function ($, ko, Translate) {

        $.widget("ui.orderedListMenu", {
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
                items: null,
                alignMenuLeft: false,
                showMenuAbove: false,
                itemIdProperty: null,
                itemStyleProperty: null,
                itemLabelProperty: null,
                itemCheckedProperty: null,
                edit: {
                    reorderEnabled: true,
                    addEnabled: true,
                    createNewConstantField: null,
                    applyFieldsEditedInTablePropertiesMenu: null,
                    newItemBaseClass: null,
                    newItemValueProperty: '',
                    labelPatternRegExp: null
                }
            },

            requestIndex: 0,
            pending: 0,

            _create: function () {
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

                this.container = $('<div></div>')
                    .addClass("ordered-list-menu")
                    .attr("menuorderedlist", "on")
                    .insertBefore(this.element)
                    .append(this.element);


                //this.element = this.container;


                this._on(this.element, {
                    click: function (event) {
                        this._toggleOpenList();

                        return true;
                    },
                    blur: function () {
                        //this._closeIfBlur();
                        return true;
                    },
                    focus: function () {
                        that.unFocusList();
                    },
                    keydown: function (event) {
                        var keyCode = $.ui.keyCode;
                        //alert('Key is pressed' + event.keyCode);
                        switch (event.keyCode) {
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
                                    this._closeList();
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
                this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("menuorderedlist");
                    }
                });
                this._initList();

            },
            isInitialized: function () {
                var attrInited = this.container ? this.container.attr("menuorderedlist") : false;
                return attrInited;

            },
            rebuildItems: function (newItems) {
                this._setNewItems(newItems);
                if (this.isInitialized()) {
                    this._refreshList();
                } else {
                    this._create();
                }
            },
            _refreshList: function () {
                if (this.listItemsContainer) {
                    this.listItemsContainer.empty();
                    //this.onBlurClosingAttached[this.listItemsContainer] = false;
                    this.items = this._addList(this.listItemsContainer);
                    this._bindOnBlurClosing(this.listItemsContainer);
                    //this._closeList();
                } else {
                    this._initList();
                }
            },
            _openList: function () {
                this.isOpen = true;
                this.list.addClass('show');
                this._bindOnBlurClosing(this.container);
                this.element.focus();

            },
            _closeList: function () {

                var fieldsEditedInTablePropertiesMenu = [];
                for (var i = 0; i < this.items.length; i++) {
                    var item = this.items[i].item;
                    fieldsEditedInTablePropertiesMenu.push(item);
                }

                this.options.edit.applyFieldsEditedInTablePropertiesMenu(fieldsEditedInTablePropertiesMenu);


                this.isOpen = false;
                this.list.removeClass('show');
                this.unFocusList();
                //this.hideAddArea();
            },
            _toggleOpenList: function () {
                this.list.toggleClass('show');
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this._bindOnBlurClosing(this.container);
                } else {
                    this.unFocusList();
                    //this.hideAddArea();
                }
                this.element.focus();
            },
            _selectFirstListItem: function () {
                if (this.items.length) {
                    var firstItem = this.items[0].element;
                    firstItem.focus();
                }
            },
            _selectLastListItem: function () {
                if (this.items.length) {
                    var lastItem = this.items[this.items.length - 1].element;
                    lastItem.focus();
                }
            },
            _focusUpList: function () {
                //console.log('Moving up list');
                if (this.itemInFocus > 0) {
                    this.items[this.itemInFocus - 1].element.focus();
                } else if (this.itemInFocus === 0) {
                    //this._getSelectedItemElement().element.focus();
                    this.checkAllItem.focus();
                } else {
                    this._selectLastListItem();
                }

            },
            _focusDownList: function () {
                //console.log('Moving down list');
                if ((this.itemInFocus < (this.items.length - 1))) {
                    this.items[this.itemInFocus + 1].element.focus();
                } else if (this.itemInFocus === (this.items.length - 1)) {
                    this._getSelectedItemElement().focus();
                } else {
                    //this._selectFirstListItem();
                    this.checkAllItem.focus();
                }
            },

            _moveFirstList: function (event) {
                if (this.options.edit.reorderEnabled) {
                    var selItem = this._getSelectedItemElement();
                    if (selItem && selItem.prev().length) {
                        var selIndex = this.itemInFocus;
                        //Moving selected element in this.items array down!
                        var selElem = this.items[selIndex];
                        this.items.splice(selIndex, 1);
                        this.items.unshift(selElem);
                        //TODO:: Moving elements in value

                        //moving elements visually
                        //var firstItem = selItem.parent().find('*:first-child');
                        //firstItem.before(selItem);
                        this.listItemsContainer.prepend(selItem);
                        selItem.focus();
                        this._change(event);
                    } else {
                        if (selItem) {
                            selItem.focus();
                        } else {
                            this._selectFirstListItem();
                        }
                    }
                }
            },

            _moveLastList: function (event) {
                if (this.options.edit.reorderEnabled) {
                    var selItem = this._getSelectedItemElement();
                    if (selItem && selItem.next().length) {
                        var selIndex = this.itemInFocus;
                        //Moving selected element in this.items array down!
                        var selElem = this.items[selIndex];
                        this.items.splice(selIndex, 1);
                        this.items.push(selElem);
                        //TODO:: Moving elements in value

                        //moving elements visually
                        //var prevItem = selItem.prev();
                        //prevItem.before(selItem);
                        this.listItemsContainer.append(selItem);
                        selItem.focus();
                        this._change(event);
                    } else {
                        if (selItem) {
                            selItem.focus();
                        } else {
                            this._selectLastListItem();
                        }
                    }
                }
            },

            _moveUpList: function (event) {
                if (this.options.edit.reorderEnabled) {
                    if (this.itemInFocus === -1) {
                        this.itemInFocus = this.items.length - 1;
                    }
                    var selItem = this._getSelectedItemElement();
                    if (selItem && selItem.prev().length) {
                        var selIndex = this.itemInFocus;
                        //Moving selected element in this.items array down!
                        var selElem = this.items[selIndex];
                        this.items.splice(selIndex, 1);
                        this.items.splice(selIndex - 1, 0, selElem);
                        //TODO:: Moving elements in value

                        //moving elements visually
                        var prevItem = selItem.prev();
                        prevItem.before(selItem);
                        selItem.focus();
                        this._change(event);
                    } else {
                        if (selItem) {
                            selItem.focus();
                        } else {
                            this._selectLastListItem();
                        }
                    }
                }
            },
            _moveDownList: function (event) {
                if (this.options.edit.reorderEnabled) {
                    var selItem = this._getSelectedItemElement();
                    if (selItem && selItem.next().length) {
                        var selIndex = this.itemInFocus;
                        //Moving selected element in this.items array down!
                        var selElem = this.items[selIndex];
                        this.items.splice(selIndex, 1);
                        this.items.splice(selIndex + 1, 0, selElem);
                        //TODO:: Moving elements in value
                        var nextItem = selItem.next();
                        nextItem.after(selItem);
                        selItem.focus();
                        this._change(event);
                    } else {
                        if (selItem) {
                            selItem.focus();
                        } else {
                            this._selectFirstListItem();
                        }
                    }
                }

            },
            _subscribeOnItems: function () {
                var that = this;
                if (ko.isObservable(this.options.items)) {
                    this.options.items.subscribe(function (newItems) {
                        that._refreshList();
                    });
                }
            },
            _getSelectedItemElement: function () {
                var selItem = this._getSelectedItem();
                if (selItem) {
                    return selItem.element;
                }
                return null;
            },
            _getSelectedItem: function () {
                if (this.itemInFocus >= 0) {
                    return this.items[this.itemInFocus];
                }
                return null;
            },
            _focusSomething: function (toFocusAtLast) {
                //If some item was selected - select it.
                if (this.itemInFocus) {
                    var selItem = this._getSelectedItemElement();
                    if (selItem) {
                        selItem.focus();
                        return;
                    } else {
                        this.unFocusList();
                    }
                }
                //Select item by assigned index
                if ($.type(toFocusAtLast) === 'number') {
                    var selItem = this.items[toFocusAtLast];
                    if (selItem) {
                        selItem.element.focus();
                    } else {
                        this.element.focus();
                    }
                    return;
                }

                if (toFocusAtLast && toFocusAtLast.length) {
                    toFocusAtLast.focus();
                }
            },
            _destroy: function () {
                clearTimeout(this.searching);
                this.element
                    .removeAttr("menuorderedlist");
                this.list.remove();
                this.container.remove();
                //this.liveRegion.remove();
            },

            _setOption: function (key, value) {
                this._super(key, value);
                if (key === "items") {
                }

                if (key === 'alignMenuLeft') {
                    this.container.addClass('alignMenuLeft');
                }

                if (key === "source") {
                    this._initSource();
                }
                if (key === "appendTo") {
                    this.menu.element.appendTo(this._appendTo());
                }
                if (key === "disabled" && value && this.xhr) {
                    this.xhr.abort();
                }
            },

            _appendTo: function () {
                var element = this.options.appendTo;

                if (element) {
                    element = element.jquery || element.nodeType ?
                        $(element) :
                        this.document.find(element).eq(0);
                }

                if (!element) {
                    element = this.element.closest(".ui-front");
                }

                if (!element.length) {
                    element = this.document[0].body;
                }

                return element;
            },

            _initList: function () {
                var that = this;
                var list = $('<div></div>')
                    .addClass('list')
                    .appendTo(this.container);
                var relativeContainer = $('<div></div>').appendTo(list);
                if (this.options.edit.reorderEnabled) {
                    this._createUpNDownArea(relativeContainer);
                }
                this._addToolbarItem(relativeContainer);

                this.list = list;
                var items = this._addList(relativeContainer);

                //Add list items to the list

                this.items = items;
                this.unFocusList();

                Translate.getTranslated(this.container);
            },

            _addList: function (parentContainer) {
                var that = this;
                var items = [];
                this.keyPressed = false;
                var listItemCont = this.listItemsContainer || $('<div></div>')
                    .appendTo(parentContainer)
                    .addClass('itemsContainer')
                    .bind('scroll', function (event) {
                        if (that.keyPressed) {
                            //console.log('Scroll while key pressed');
                        } else {
                            //console.log('Scroll:: visible element: ' + listItemContainer);
                            if (listItemCont.is(':active')) {
                                that.element.focus();
                                that.unFocusList();
                            }
                        }
                    });
                this.listItemsContainer = listItemCont;
                var initItems = this._getItems();
                if (!$.isArray(initItems)) {
                    throw new Exception("No items for the orderedListMenu is assigned. This is required parameter for orderedListMenu control.");
                    initItems = [];
                }
                $.each(initItems, function (key) {
                    var item = that._addItemElement(this, listItemCont);
                    items.push(item);
                });

                this._addAddArea();
                this._addEditArea();
                //Assign events on list items


                return items;
            },

            _checkItem: function (event, onlyCheckbox) {
                var selectedItem = this._getSelectedItem();
                if (selectedItem) {
                    var chb = selectedItem.checkbox[0];
                    var checked = chb.checked;
                    if (event.target.tagName.toLowerCase() === 'input') {
                        this._setItemChecked(selectedItem, checked);
                    } else {
                        if (!onlyCheckbox) {
                            checked = !checked;
                            this._setItemChecked(selectedItem, checked);
                        }
                    }

                }


            },
            _createUpNDownArea: function (appendTo) {
                var that = this;
                var area = $('<div></div>')
                    .addClass('upDownArea')
                    .appendTo(appendTo);
                this.goFirstBtn = $('<input type="button" />')
                    .addClass('goFirstBtn')
                    .appendTo(area)
                    .click(function (event) {
                        that._moveFirstList(event);
                        return true;
                    });
                this.goUpBtn = $('<input type="button" />')
                    .addClass('upBtn')
                    .click(function (event) {
                        that._moveUpList(event);
                        return true;
                    })
                    .appendTo(area);
                this.goDownBtn = $('<input type="button" />')
                    .addClass('downBtn')
                    .appendTo(area)
                    .click(function (event) {
                        that._moveDownList(event);
                        return true;
                    });
                this.goLastBtn = $('<input type="button" />')
                    .addClass('goLastBtn')
                    .appendTo(area).click(function (event) {
                        that._moveLastList(event);
                        return true;
                    });

            },

            _addToolbarItem: function (container) {
                var that = this;
                var toolbarArea = $('<div></div>')
                    .addClass('toolbar')
                    .addClass('listItem')
                    .appendTo(container);
                $('<a href="javascript: void(0)" data-i18n="*oep.controls.orderedListMenu.done"></a>')
                    .addClass('doneLnk')
                    .click(function (event) {
                        that._change()
                        that._closeList();
                    })
                    .appendTo(toolbarArea);
                var checkAllItem = $('<a href="javascript: void(0)"></a>')
                    .appendTo(toolbarArea);
                ;
                this.checkAllBox = $('<input type="checkbox" />')
                    .appendTo(checkAllItem);
                $('<span data-i18n="*oep.controls.orderedListMenu.checkAll"></span>')
                    .addClass('listItemName')
                    .appendTo(checkAllItem);
                if (this.options.edit.addEnabled) {
                    var addFieldBtn = $('<input type="button" />')
                        .addClass('add')
                        .appendTo(toolbarArea);
                    this._on(addFieldBtn, {
                        click: function (event) {
                            that.goAdd(event);
                        },
                        focus: function (event) {
                            that.unFocusList();
                        }
                    });
                }

                if (this.options.edit.editEnabled) {
                    var editFieldBtn = $('<input type="button" />')
                        .addClass('edit')
                        .attr('disabled', true)
                        .appendTo(toolbarArea);
                    this._on(editFieldBtn, {
                        click: function (event) {
                            if (!that.goEdit()) {
                                that.unFocusList();
                            }
                        },
                        focus: function (event) {
                            //that.unFocusList();
                        }
                    });
                    this.editFieldBtn = editFieldBtn;
                }

                if (this.options.edit.deleteEnabled) {
                    var deleteFieldBtn = $('<input type="button" />')
                        .addClass('deleteBtn')
                        .attr('disabled', true)
                        .appendTo(toolbarArea);
                    this._on(deleteFieldBtn, {
                        click: function (event) {
                            var delIndex = that.itemInFocus;
                            if (that.goDelete()) {
                                if (delIndex > 0) {
                                    this.items[delIndex - 1].element.focus();
                                } else {
                                    that.unFocusList();
                                }
                            }
                        },
                        focus: function (event) {
                            //that.unFocusList();
                        }
                    });
                    this.deleteFieldBtn = deleteFieldBtn;
                }

                this._on(checkAllItem, {
                    click: function (event) {
                        that._checkAll(event);
                    },
                    focus: function (event) {
                        that.unFocusList();
                    },
                    keydown: function (event) {
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                            case keyCode.ENTER:
                            case keyCode.NUMPAD_ENTER:
                            case keyCode.SPACE:
                                that._checkAll(event);
                                event.preventDefault();
                                break;

                            case keyCode.PAGE_UP:
                            case keyCode.UP:
                                that.element.focus();
                                event.preventDefault();
                                return false;
                                break;
                            case keyCode.PAGE_DOWN:
                            case keyCode.DOWN:
                                this._selectFirstListItem();
                                event.preventDefault();
                                return false;
                                break;
                            case keyCode.ESCAPE:
                                //this._value();
                                that.element.focus();
                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                                break;
                        }
                    }


                });
                this.checkAllItem = checkAllItem;

            },

            _checkAll: function (event) {
                var that = this;
                var checked;
                if (event.target.tagName.toLowerCase() === 'input') {
                    checked = event.target.checked;
                } else {
                    var chb = $(event.currentTarget).find('input')[0];
                    checked = !chb.checked;
                    chb.checked = checked;
                }
                var items = this.items;
                $.each(items, function () {
                    that._setItemChecked(this, checked);
                });
                this.checkAllItem.focus();
            },
            _setItemChecked: function (item, checked) {
                item.checkbox[0].checked = checked;
                if (this.options.itemCheckedProperty) {
                    eval('item.item.' + this.options.itemCheckedProperty + ' = ' + checked);
                }
                var allChecked = true;
                $.each(this.items, function (index, value) {
                    var checkedElem = this.checkbox[0];
                    allChecked = allChecked && checkedElem.checked;
                })
                this.checkAllBox[0].checked = allChecked;
                this._trigger("check", null, this);
            },

            _bindOnBlurClosing: function (elementToBindOnBlur) {
                if (!this.onBlurClosingAttached) {
                    this.onBlurClosingAttached = new Array();
                }
                if (this.onBlurClosingAttached[elementToBindOnBlur]) {
                    //return;
                }
                var that = this;
                var keyMousePressed = false;
                this._on(elementToBindOnBlur.find('a, input, button').add(elementToBindOnBlur), {
                    blur: function (event) {
                        var that = this;
                        if (this.isOpen) {
                            var interval = setInterval(function () {
                                //console.log('interval is working');
                                if (!that.isOpen) {
                                    clearInterval(interval);
                                    return;
                                }
                                if (!keyMousePressed) {
                                    if (!that.container.find('*:focus').length) {
                                        that._closeList();
                                        //console.log('closing list on blur');
                                    }
                                    clearInterval(interval);
                                }
                            }, 300);
                        }
                        return true;
                    },
                    click: function () {
                        keyMousePressed = false;
                        return true;
                    },
                    keydown: function () {
                        keyMousePressed = true;
                        return true;
                    },
                    keyup: function () {
                        keyMousePressed = false;
                        return true;
                    },
                    mousedown: function (event) {
                        keyMousePressed = true;
                        return true;
                    },
                    mouseup: function () {
                        keyMousePressed = false;
                        return true;
                    }
                });
                this.onBlurClosingAttached[elementToBindOnBlur] = true;
            },

            _getItems: function () {
                return ko.isObservable(this.options.items) ? this.options.items() : this.options.items;
            },

            _addItemElement: function (incoming, listItemCont, isKeyPressed) {
                var that = this;
                var keyPressed = isKeyPressed || this.keyPressed;

                function getLabelProp(item) {
                    if (that.options.itemLabelProperty) {
                        var pureValue = that._getItemPropertyValue(item, 'itemLabelProperty');
                        if (pureValue) {
                            return pureValue;
                        } else if (($.type(pureValue) === 'number') && ($.type(pureValue) === 'boolean') && ($.type(pureValue) === 'string')) {
                            return pureValue;
                        }
                    }
                    return item;
                }

                function getCheckedProp(item) {
                    if (that.options.itemCheckedProperty) {
                        var pureValue = that._getItemPropertyValue(item, 'itemCheckedProperty');
                        return pureValue ? true : false;
                    }
                    return false;
                }

                function getStyleProp(item) {
                    var cssClass = that._getItemPropertyValue(item, 'itemStyleProperty');
                    return cssClass || that.options.defaultItemCssClass;
                }

                function getValueProp(item) {
                    return that._getItemPropertyValue(item, 'itemValueProperty');
                }

                var itemElement = $('<a href="javascript: void(0)"></a>')
                    .addClass('listItem');
                var addedListItems = listItemCont.find('.listItem');
                if (addedListItems.length) {
                    itemElement.insertAfter(addedListItems[addedListItems.length - 1]);
                } else {
                    itemElement.appendTo(listItemCont);
                }
                //Set style class for an item element
                var style = getStyleProp(incoming);
                if (style) {
                    itemElement.addClass(style);
                }
                var checkbox = $('<input type="checkbox" />')
                    .appendTo(itemElement);
                if (getCheckedProp(incoming)) {
                    checkbox.attr('checked', true);
                }

                var name = getLabelProp(incoming);
                var label = $('<span  />')
                    .addClass('listItemName')
                    /*.focus(function(event) {
                     var tryEdit = false;
                     var curTarget = $(event.currentTarget);
                     var parentListItem = $(curTarget.parent()[0]);
                     var curItemIndex = parentListItem.index();
                     if (curItemIndex === that.itemInFocus) {
                     tryEdit = true;
                     }
                     if (tryEdit && that.editState) {
                     var itemSelected = that.items[curItemIndex];
                     that.editState.goEdit(itemSelected);
                     console.log('go Edit');
                     }
                     return true;
                     })*/
                    .appendTo(itemElement)
                    .text(name);
                var value = getValueProp(incoming);
                var isCustom = value || $.type(value) === 'number' || $.type(value) === 'boolean';
                this._on(itemElement, {
                    focus: function (event) {
                        that._onItemInFocus(event);
                        return true;
                    },
                    blur: function (event) {
                        //this._closeIfBlur();
                        return true;
                    },
                    click: function (event) {
                        var itemClickedIndex = itemElement.index();
                        event.currentTarget.focus();
                        if ((event.target.tagName.toLowerCase() !== 'input') && (itemClickedIndex === that.lastItemClicked)) {
                            if (that.editState) {
                                that.goEdit();
                            }
                        }
                        that._checkItem(event, true);

                        that.lastItemClicked = itemClickedIndex;
                        return true;
                    },
                    dblclick: function (event) {
                        if (that.editState) {
                            that._onItemInFocus(event);
                            var itemSelected = that._getSelectedItem();
                            that.editState.goEdit(itemSelected);
                        }
                        return true;
                    },
                    keydown: function (event) {
                        keyPressed = true;
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                            case keyCode.PAGE_UP:
                            case keyCode.UP:
                                if (that.options.edit.reorderEnabled && (event.altKey || event.ctrlKey || event.shiftKey)) {
                                    that._moveUpList(event);
                                } else {
                                    that._focusUpList();
                                }
                                event.preventDefault();
                                return false;
                                break;
                            case keyCode.PAGE_DOWN:
                            case keyCode.DOWN:
                                if (that.options.edit.reorderEnabled && (event.altKey || event.ctrlKey || event.shiftKey)) {
                                    this._moveDownList(event);
                                } else {
                                    this._focusDownList();
                                }
                                event.preventDefault();
                                return false;
                                break;
                            case keyCode.ENTER:
                            case keyCode.NUMPAD_ENTER:
                                // when menu is open and has focus
                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                var itemSelected = that._getSelectedItem();
                                that.editState.goEdit(itemSelected);
                                event.preventDefault();
                                break;
                            case keyCode.TAB:
                                if (this.isOpen) {
                                    this._selectFirstListItem();
                                }
                                break;
                            case keyCode.ESCAPE:
                                if (this.isOpen) {
                                    //this._value();
                                    this._closeList();
                                    // Different browsers have different default behavior for escape
                                    // Single press can mean undo or clear
                                    // Double press in IE means clear the whole form
                                    event.preventDefault();
                                }
                                break;
                            case keyCode.SPACE:
                                that._checkItem(event, false);
                                event.preventDefault();
                                break;
                            default:

                                break;
                        }

                    },
                    keyup: function (event) {
                        keyPressed = false;
                    }

                });
                var item = { element: itemElement, item: incoming, checkbox: checkbox, label: label, isCustom: isCustom};
                return item;
            },
            _addEditArea: function () {
                if (!this.options.edit.editEnabled) {
                    return;
                }
                var area = $('<div></div>')
                    .addClass('editArea');
                var nameField = $('<input type="text "/>')
                    .addClass('editField')
                    .attr('name', 'nameField')
                    .attr('tabIndex', 1)
                    .appendTo(area);
                var valueField = $('<input type="text" />')
                    .addClass('editField')
                    .addClass('hidden')
                    .attr('name', 'valueField')
                    .attr('tabIndex', 2)
                    .appendTo(area);
            
                var that = this;
                this.editState = {
                    area: area,
                    nameField: nameField,
                    isShown: false,
                    itemInEdit: null,
                    error: that._error,
                    goEdit: function (editItem) {
                        if (this.itemInEdit && (this.itemInEdit === editItem)) {
                            this.scrollToArea();
                            return;
                        }
                        if (!editItem) {
                            return;
                        }

                        if (editItem.isCustom) {
                            area.addClass('isCustom');
                            //The constant field mode
                            //TODO:: case, when value is 0 or false.
                            var value = that._getItemPropertyValue(editItem.item, 'itemValueProperty');
                            valueField
                                .val(value);
                            //.removeClass('hidden');
                        } else {
                            area.removeClass('isCustom');
                            //valueField.addClass('hidden');
                        }
                        var name = that._getItemPropertyValue(editItem.item, 'itemLabelProperty');
                        this.itemInEdit = editItem;

                        editItem.element.after(area);
                        editItem.element.detach();

                        nameField.val(name);
                        
                        this.scrollToArea();
                        nameField.focus();
                        
                        this.isShown = true;
                    },
                    scrollToArea: function () {
                        if (this.itemInEdit.isCustom) {
                            that.listItemsContainer.animate({ scrollTop: area.position().top }, 200);
                        }
                    },

                    validate: function (onSubmit) {
                        var editItem = this.itemInEdit;
                        var newLabel = nameField.val();
                        var nameMatchesPattern = (that.options.edit.labelPatternRegExp ? newLabel.match(that.options.edit.labelPatternRegExp) : true);
                        var nameIsFilled = $.trim(newLabel);
                       if (nameIsFilled && nameMatchesPattern) {
                            editItem.label.val(newLabel);
                            this.error.removeFieldError(nameField);
                            if (that.options.itemLabelProperty && onSubmit) {
                                eval('editItem.item.' + that.options.itemLabelProperty + ' = newLabel');
                            }

                        } else {
                            var error = !nameIsFilled ?
                                that._getPhrase('errFieldLabelRequiredShort') :
                                that._getPhrase('errFieldLabelNotMatchPatternShort');
                            this.error.show(
                                {   field: nameField,
                                    label: editItem.element, 
                                    required: !nameIsFilled,
                                    patternMiss: !nameMatchesPattern,
                                    message: error
                                }
                                , onSubmit);
                        }
                        if (editItem.isCustom) {
                            var newValue = valueField.val();
                            if ($.trim(newValue)) {
                                this.error.removeFieldError(valueField);
                                if (that.options.itemValueProperty && onSubmit) {
                                    eval('editItem.item.' + that.options.itemValueProperty + ' = newValue');
                                }
                            } else {
                                this.error.show(
                                    {   field: valueField,
                                        label: editItem.element, 
                                        required: true,
                                        patternMiss: false,
                                        message: that._getPhrase('errFieldValueRequired')
                                    }
                                    , onSubmit);
                            }
                        }

                    },
                    submit: function () {
                        if (!this.itemInEdit || !this.isShown) {
                            return;
                        }
                        this.isShown = false;
                        this.validate(true);
                        
                        
                        this.close();
                    },
                    close: function() {
                        
                        var editItem = this.itemInEdit;
                        this.isShown = false;
                        
                        var newLabel = that._getItemPropertyValue(editItem.item, 'itemLabelProperty');
                        editItem.label.text(newLabel);
                        
                        this.error.removeFieldError(nameField, true);
                        if (editItem.isCustom) {
                            this.error.removeFieldError(valueField, true);
                        }
                        if (editItem) {
                            area.after(editItem.element);
                            area.detach();
                        
                            editItem.element.focus();
                        }
                        this.itemInEdit = null;
                    }
                };
                var tabClicked = false;
                that._on(area.find('input'), {
                    focus: function (event) {
                        //that.editState.removeFieldError(event.currentTarget);
                        return true;
                    },
                    blur: function (event) {
                        console.log('on blur ' + event.currentTarget.name);
                        if (!area.is(':active') && !tabClicked) {
                            that.editState.submit();
                        } else {
                            this.editState.validate();
                        }
                        tabClicked = false;
                    },
                    keydown: function (event) {
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                            case keyCode.ENTER:
                            case keyCode.NUMPAD_ENTER:
                                that.editState.submit(event);
                                event.preventDefault();
                                break;
                            /*case keyCode.SPACE:
                             //that._checkAll(event);
                             event.preventDefault();
                             break;

                             case keyCode.PAGE_UP:
                             case keyCode.UP:
                             that.element.focus();
                             event.preventDefault();
                             return false;
                             break;
                             case keyCode.PAGE_DOWN:
                             case keyCode.DOWN:
                             this._selectFirstListItem();
                             event.preventDefault();
                             return false;
                             break;*/
                            case keyCode.ESCAPE:
                                //this._value();
                                that.editState.submit();
                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                                break;
                            case keyCode.TAB:
                                if (($(event.currentTarget).attr('name') === nameField.attr('name')) && that.editState.itemInEdit.isCustom) {
                                    tabClicked = true;
                                }
                                break;

                        }
                    }
                });

            },

            _error: {
                     getErrorWrap: function(field) {
                        return field.parent('*[name="error"]');
                    },
                    isFieldInError: function(field) {
                        var errorWrap = this.getErrorWrap(field);
                        return errorWrap.length ? true : false;
                    },
                    removeFieldError: function(field, completely) {
                        var errorWrap = this.getErrorWrap(field);
                        
                        if (errorWrap.length) {
                            errorWrap.removeClass('error');
                            errorWrap.find('.errorContent').remove();
                            if (completely) {
                                $(field).unwrap();
                            }
                        }
                    },
                    show: function (errorObj, onSubmit) {
                        var showElement = errorObj.label;
                        var field = errorObj.field;
                        this.removeFieldError(errorObj.field);
                        var errorContent = $('<div></div>')
                                .addClass('errorContent')
                                .text(errorObj.message)
                                .click(function() {
                                    errorContent.remove();
                                    if (showElement) { 
                                        showElement
                                            .attr('title', '')
                                            .removeClass('error');
                                    }
                        });
                        if (onSubmit) {
                            
                            
                            showElement
                                .attr('title', errorObj.message)
                                .append(errorContent)
                                .addClass('error');
                            
                            setTimeout(function () {
                                showElement
                                    .attr('title', '')
                                    .removeClass('error');
                                errorContent.remove();   
                                
                            }, 1500);
                        } else {
                            var errWrap = this.getErrorWrap(field);
                            if (errWrap.length) {
                                errWrap.append(errorContent); 
                            } else {
                                errWrap = $('<div name="error" class="error"></div>');
                                field
                                    .add(errorContent)
                                    //.addClass(errorObj.required ? 'error' : '')
                                    //.addClass(errorObj.patternMiss ? 'error' : '')
                                    .wrapAll(errWrap);
                            }
                            errWrap.addClass('error');
                            console.log(field.attr('name') + ' is being wrapped around');
                            setTimeout(function () {
                                errorContent.remove();
                                /*errorObj.field
                                    .unwrap();
                                */
                                
                            }, 1500);
                        }
                    }
            },
            _getPhrase: function (phraseId) {
                return Translate.getTranslated('oep.controls.orderedListMenu.' + phraseId);
            },
            _addNewItem: function (initNewItem, keepOpened) {
                if (this.options.edit.createNewConstantField && initNewItem.name && initNewItem.value) {
                    var newOptionItem = this.options.edit.createNewConstantField(initNewItem.name, initNewItem.value);

                    this.options.items.push(newOptionItem);
                    //this._refreshList();
                    var newItem = this._addItemElement(newOptionItem, this.listItemsContainer);
                    this._bindOnBlurClosing(newItem.element);
                    this.items.push(newItem);
                    //this._selectLastListItem();
                }
            },
            _addAddArea: function () {
                if (this.options.edit.addEnabled) {
                    /*if (this.addState) {
                     this.addState.area.appendTo(this.listItemsContainer);
                     return;
                     }*/
                    var that = this;
                    var addArea = $('<a href="javascript: void(0)"></a>')
                        .addClass('addArea');
                    var nameField = $('<input type="text" />')
                        .addClass('nameField')
                        .attr('name', 'nameField')
                        .attr('tabIndex', 1)
                        .appendTo(addArea);
                    var valueField = $('<input type="text" />')
                        .addClass('valueField')
                        .attr('name', 'valueField')
                        .attr('tabIndex', 2)
                        .appendTo(addArea);

                    this.addState = {
                        area: addArea,
                        nameField: nameField,
                        valueField: valueField,
                        isShown: false,
                        nameFieldVisited: true,
                        valueFieldVisited: true,
                        nameFieldDefault: that._getPhrase('defaultPropertyName'),
                        valueFieldDefault: that._getPhrase('defaultPropertyValue'),
                        error: that._error,
                        onSubmit: function (newItem) {
                            that._addNewItem(newItem);
                            that._selectLastListItem();
                        },
                        scrollToArea: function () {
                            that.listItemsContainer.animate({ scrollTop: addArea.offset().top }, 200);
                        },
                        submit: function () {
                            if (this.isShown) {
                                this.isShown = false;
                                var name = this.nameField.val();
                                var value = this.valueField.val();

                                if ($.type(this.onSubmit) === 'function') {
                                    var newItem = { name: name, value: value};
                                    this.onSubmit(newItem);
                                }
                                this.cancel();
                            }
                        },
                        reset: function () {
                            this.isShown = false;
                            this.nameFieldVisited = true;
                            this.valueFieldVisited = true;
                            nameField.val(this[nameField.attr('name') + 'Default']);
                            valueField.val(this[valueField.attr('name') + 'Default']);
                        },
                        cancel: function () {
                            //return;
                            this.reset(this);
                            
                            this.error.removeFieldError(nameField, true);
                            this.error.removeFieldError(valueField, true);
                            this.isShown = false;
                            this.area.detach();
                        },
                        show: function () {
                            if (this.isShown) {
                                this.nameField.focus();
                                this.scrollToArea();
                                return true;
                            }
                            this.reset();
                            //this.area.addClass('show');
                            this.area.appendTo(that.listItemsContainer);
                            this.nameField.focus();

                            this.scrollToArea();
                            this.isShown = true;
                        },
                        onPartialSubmit: function (event, submit) {
                            var element = event ? event.currentTarget : null;
                            var isNameFieldEmpty = ($.trim(nameField.val()) === '') || (nameField.val() === this[nameField.attr('name') + 'Default']);
                            var isValueFieldEmpty = ($.trim(valueField.val()) === '') || (valueField.val() === this[valueField.attr('name') + 'Default']);
                            //Case, when cursor is out addArea
                            //if (addArea.is(':active') || tabClicked) {
                            //if (inArea || tabClicked) {
                            if (addArea.find('input:focus').length || tabClicked) {
                                //console.log('in area');
                                //Case when focus is in addArea
                                if (element && !$.trim(element.value)) {
                                    element.value = this[element.name + 'Default'];
                                }
                                //Case, when both fields are filled and we submit a new field
                                if (isNameFieldEmpty && that.addState.nameFieldVisited) {
                                    this.error.show(
                                    {   field: nameField,
                                        required: true,
                                        patternMiss: false,
                                        message: that._getPhrase('errFieldLabelRequiredShort')
                                    });
                                    return false;
                                }

                                var labelMatchesPattern = (that.options.edit.labelPatternRegExp ?
                                    nameField.val().match(that.options.edit.labelPatternRegExp) : true);
                                if (!labelMatchesPattern) {
                                    this.error.show(
                                    {   field: nameField,
                                        required: false,
                                        patternMiss: true,
                                        message: that._getPhrase('errFieldLabelNotMatchPatternShort')
                                    });
                                    return false;
                                }
                                if (isValueFieldEmpty && that.addState.valueFieldVisited) {
                                    this.error.show(
                                    {   field: valueField,
                                        required: true,
                                        patternMiss: false,
                                        message: that._getPhrase('errFieldValueRequired')
                                    });
                                    return false;
                                }
                                if (!isNameFieldEmpty && !isValueFieldEmpty && submit) {
                                    this.submit();
                                    return true;
                                }
                                return true;
                            } else {
                                //Cursor is out of Add area
                                //Case, when name and value field are empty - just close addArea
                                if (isNameFieldEmpty && isValueFieldEmpty) {
                                    this.cancel();
                                    return true;
                                }
                                if (isNameFieldEmpty) {
                                    this.error.show(
                                    {   field: nameField,
                                        required: true,
                                        patternMiss: false,
                                        message: that._getPhrase('errFieldLabelRequiredShort')
                                    });
                                    nameField.focus();
                                    return false;
                                }
                                var labelMatchesPattern = (that.options.edit.labelPatternRegExp ?
                                    nameField.val().match(that.options.edit.labelPatternRegExp) : true);
                                if (!labelMatchesPattern) {
                                    this.error.show(
                                    {   field: nameField,
                                        required: false,
                                        patternMiss: true,
                                        message: that._getPhrase('errFieldLabelNotMatchPatternShort')
                                    });
                                    return false;
                                }
                                if (isValueFieldEmpty) {
                                    this.error.show(
                                    {   field: valueField,
                                        required: true,
                                        patternMiss: false,
                                        message: that._getPhrase('errFieldValueRequired')
                                    });
                                    valueField.focus();
                                    return false;
                                }

                                if (!isNameFieldEmpty && !isValueFieldEmpty) {
                                    this.submit();
                                    return true;
                                }
                                return false;
                            }
                        }
                    };

                    var tabClicked = false;
                    this._on(addArea.find('input'), {
                        blur: function (event) {
                            that.addState.onPartialSubmit(event, false);
                            tabClicked = false;
                        },
                        focus: function (event) {
                            var element = event.currentTarget;
                            if (element.value === that.addState[element.name + 'Default']) {
                                element.value = '';
                            }
                            that.addState.error.removeFieldError($(element));
                            that.addState[element.name + 'Visited'] = true;
                        },
                        keydown: function (event) {
                            var keyCode = $.ui.keyCode;
                            switch (event.keyCode) {
                                case keyCode.ENTER:
                                case keyCode.NUMPAD_ENTER:
                                    that.addState.onPartialSubmit(event, true);
                                    event.preventDefault();
                                    break;
                                case keyCode.SPACE:
                                    event.preventDefault();
                                    break;
                                case keyCode.ESCAPE:
                                    //this._value();
                                    that.addState.onPartialSubmit(event, true);
                                    // Different browsers have different default behavior for escape
                                    // Single press can mean undo or clear
                                    // Double press in IE means clear the whole form
                                    event.preventDefault();
                                    break;

                                case keyCode.TAB:
                                    if (event.currentTarget.name === nameField.attr('name')) {
                                        tabClicked = true;
                                        //valueField.focus();
                                        /*if ($.trim(nameField.val())) {
                                         valueField.focus();
                                         } else {
                                         nameField.focus();
                                         //that.addState.onPartialSubmit(event);
                                         }*/

                                    }

                                    //return false;
                                    break;
                            }
                        }


                    });
                    this.addState.reset();
                }


            },
            goAdd: function () {
                if (this.options.edit.addEnabled) {
                    this.addState.show();
                }
            },
            goEdit: function () {
                //console.log('Trying to go edit...');
                if (this.options.edit.editEnabled && (this.itemInFocus >= 0) && this.editState) {
                    var selItem = this._getSelectedItem();
                    this.editState.goEdit(selItem);
                    return true;
                }
                return false;
            },
            goDelete: function () {
                if (this.options.edit.deleteEnabled && (this.itemInFocus >= 0)) {
                    var item = this._getSelectedItem();
                    if (item.isCustom) {
                        item.element.remove();
                        this.items.splice(this.itemInFocus);

                        return true;
                    }
                }
                return false;
            },
            unFocusList: function () {
                this.itemInFocus = -1;
                this.lastItemClicked = -1;
                //console.log('unfocus everything...');
                this._onItemInFocus();
            },
            _onItemInFocus: function (event) {
                this.itemInFocus = event ? $(event.currentTarget).index() : -1;
                var selItem = this._getSelectedItem();

                //enable/disable up/down/last/first/edit/delete buttons
                this.goFirstBtn.attr('disabled', false);
                this.goUpBtn.attr('disabled', false);
                this.goLastBtn.attr('disabled', false);
                this.goDownBtn.attr('disabled', false);
                this.editFieldBtn.attr('disabled', false);
                this.deleteFieldBtn.attr('disabled', true);
                if (this._isFirstItemSelected() || this._isNoneItemSelected() || this._noItemsFound()) {
                    this.goFirstBtn.attr('disabled', true);
                    this.goUpBtn.attr('disabled', true);
                }
                if (this._isLastItemSelected() || this._isNoneItemSelected() || this._noItemsFound()) {
                    this.goLastBtn.attr('disabled', true);
                    this.goDownBtn.attr('disabled', true);
                }
                if (this.itemInFocus === -1) {
                    //console.log('Disabling edit button...');
                    this.editFieldBtn.attr('disabled', true);
                }
                if (selItem) {
                    //console.log('item on focus:: selItem: ' + selItem.label.text() + ', isCustom: ' + selItem.isCustom);
                }
                if (selItem && selItem.isCustom) {
                    this.deleteFieldBtn.attr('disabled', false);
                }
            },
            _isFirstItemSelected: function () {
                return this.items.length && (this.itemInFocus === 0);
            },
            _isNoneItemSelected: function () {
                return this.itemInFocus === -1;
            },
            _noItemsFound: function () {
                return !this.items.length;
            },
            _isLastItemSelected: function () {
                var itemsCount = this.items.length;
                return (itemsCount > 0) && (this.itemInFocus === itemsCount - 1);
            },
            _setItems: function (newItems) {
                if (ko.isObservable(this.options.items) && !ko.isObservable(newItems)) {
                    this.options.items(newItems);
                } else {
                    this.options.items = newItems;
                }
            },
            _setNewItems: function (newItems) {
                if (ko.isObservable(this.options.items) && !ko.isObservable(newItems)) {
                    this.options.items(newItems);
                } else {
                    this.options.items = newItems;
                }
            },
            _setCheckedItems: function (newItems) {
                if (ko.isObservable(this.options.items)) {
                    this.options.checkedItems(newItems);
                } else {
                    //this.options.checkedItems = newItems;
                }
            },

            _getItemPropertyValue: function (item, propertyName) {
                var propPath = this.options[propertyName];
                if (!item) {
                    return null;
                }
                if (!propPath) {
                    return null;
                }
                var propParts = propPath.split('.');
                if (!propParts.length) {
                    return null;
                }

                var getSimpleProp = function (obj, propName) {
                    if (!obj) {
                        return null;
                    }
                    return obj[propName];
                };

                var propValue = item;
                for (var ind = 0; ind < propParts.length; ind++) {
                    var propName = propParts[ind];
                    propValue = getSimpleProp(propValue, propName);
                    if (!propValue) {
                        return propValue;
                    }
                }
                return propValue;
            },

            _setItemPropertyValue: function (item, propertyName, value) {
                var propPath = this.options[propertyName];
                if (!item) {
                    return null;
                }
                if (!propPath) {
                    return null;
                }
                var propParts = propPath.split('.');
                if (!propParts.length) {
                    return null;
                }

                var getSimpleProp = function (obj, propName) {
                    if (!obj) {
                        return null;
                    }
                    return obj[propName];
                };

                var propValue = item;
                for (var ind = 0; ind < (propParts.length - 1); ind++) {
                    var propName = propParts[ind];
                    propValue = getSimpleProp(propValue, propName);
                    if (!propValue) {
                        return false;
                    }
                }
                var lastPropPart = propParts[propParts.length - 1];
                if (!lastPropPart) return false;
                propValue[lastPropPart] = value;
                return true;
            },


            _response: function () {
                var index = ++this.requestIndex;

                return $.proxy(function (content) {
                    if (index === this.requestIndex) {
                        this.__response(content);
                    }

                    this.pending--;
                    if (!this.pending) {
                        this.element.removeClass("ui-autocomplete-loading");
                    }
                }, this);
            },

            __response: function (content) {
                if (content) {
                    content = this._normalize(content);
                }
                this._trigger("response", null, { content: content });
                if (!this.options.disabled && content && content.length && !this.cancelSearch) {
                    this._suggest(content);
                    this._trigger("open");
                } else {
                    // use ._close() instead of .close() so we don't cancel future searches
                    this._close();
                }
            },

            close: function (event) {
                this._close(event);
            },

            _close: function (event) {
                if (this.isOpen) {
                    this._closeList();
                    this._trigger("close", event);
                }
            },

            _change: function (event) {
                this._setItems(this._value());
                if (this.previous !== this._value()) {
                    this._trigger("change", event, { items: this.items });
                }
            },

            widget: function () {
                return this.list;
            },
            value: function () {
                return this._value();
            },

            _value: function () {
                var items = this.items;
                var result = [];
                $.each(items, function (index, value) {
                    result.push(this.item);
                });
                return result;
                //return this.valueMethod.apply( this.element, arguments );
            }

        });
    });