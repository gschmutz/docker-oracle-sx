//Here combobox starts

/*(function( $ ) {
 $.widget( "custom.combobox", {
 */
$.widget("custom.combobox", {
    input: null,
    options: {
        source: null,
        // callbacks
        change: null,
        close: null,
        focus: null,
        open: null,
        search: null,
        select: null
    },

    _create: function () {
        this.wrapper = $("<span>")
            .addClass("custom-combobox")
            .insertAfter(this.element);

        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
    },

    _createAutocomplete: function () {
        var src = this.options.source.data;
        var disabled = this.options.source.disabled;
        var autofitWidth = this.options.source.autofitWidthToContent;
        var itemMaxSize = 0;
        var fnSelect = this.options.source.onSelect;
        var elem = this.element;
        if (src && $.isArray(src)) {
            if (this.options.source.needsEmptyValue) {
                $('<option>').text('Select one...')
                    .attr('value', '')
                    .appendTo(elem);
            }
            $.each(src, function (index, value) {
                var label = value.label || value;
                itemMaxSize = label.length > itemMaxSize ? label.length : itemMaxSize;
                $('<option>')
                    .text(label)
                    .attr('value', value.value || value)
                    .appendTo(elem);
            });
        }
        var selected = this.element.children(":selected"),
            value = selected.val() ? selected.text() : "";

        var src = this.options.source;
        this.input = $("<input>")
            .appendTo(this.wrapper)
            .val(value)
            .attr("title", "")
            .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
            .autocomplete({
                delay: 0,
                minLength: 0,
                source: $.proxy(this, "_source"),
                select: fnSelect,
                disabled: disabled
            })
            .tooltip({
                tooltipClass: "ui-state-highlight"
            });
        if (!disabled) {
            this.wrapper.addClass('enabled');
        }
        //.is( ":visible" )
        if (autofitWidth) {
            this.input.attr('size', itemMaxSize);
        }

        this._on(this.input, {
            autocompleteselect: function (event, ui) {
                ui.item.option.selected = true;
                this._trigger("select", event, {
                    item: ui.item.option
                });

            },

            autocompletechange: "_removeIfInvalid"
        });
    },

    _createShowAllButton: function () {
        var input = this.input,
            wasOpen = false;

        $("<a>")
            .attr("tabIndex", -1)
            .attr("title", "Show All Items")
            .tooltip()
            .appendTo(this.wrapper)
            .button({
                icons: {
                    primary: "ui-icon-triangle-1-s"
                },
                text: false
            })
            .removeClass("ui-corner-all")
            .addClass("custom-combobox-toggle ui-corner-right")
            .mousedown(function () {
                wasOpen = input.autocomplete("widget").is(":visible");
            })
            .click(function () {
                input.focus();

                // Close if already visible
                if (wasOpen) {
                    return;
                }

                // Pass empty string as value to search for, displaying all results
                input.autocomplete("search", "");
            });
    },

    _source: function (request, response) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response(this.element.children("option").map(function () {
            var text = $(this).text();
            if (this.value && ( !request.term || matcher.test(text) ))
                return {
                    label: text,
                    value: text,
                    option: this
                };
        }));
    },

    _removeIfInvalid: function (event, ui) {

        // Selected an item, nothing to do
        if (ui.item) {
            return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
            valueLowerCase = value.toLowerCase(),
            valid = false;
        this.element.children("option").each(function () {
            if ($(this).text().toLowerCase() === valueLowerCase) {
                this.selected = valid = true;
                return false;
            }
        });

        // Found a match, nothing to do
        if (valid) {
            return;
        }

        // Remove invalid value
        this.input
            .val("")
            .attr("title", value + " didn't match any item")
            .tooltip("open");
        this.element.val("");
        this._delay(function () {
            this.input.tooltip("close").attr("title", "");
        }, 2500);
        this.input.data("ui-autocomplete").term = "";
    },

    _destroy: function () {
        this.wrapper.remove();
        this.element.show();
    },

    disable: function () {
        this.input.autocomplete("disable");
        this.wrapper.removeClass("enabled");
    },
    enable: function () {
        this.input.autocomplete("enable");
        this.wrapper.addClass("enabled");
    }
});
//})( jQuery );


/*$.extend($.custom.combobox, {
 disable: function() {
 this.input.disable();
 },
 enable: function() {
 this.input.enable();
 }
 });*/

