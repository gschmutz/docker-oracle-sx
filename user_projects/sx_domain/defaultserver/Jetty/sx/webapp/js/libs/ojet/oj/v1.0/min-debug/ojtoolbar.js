/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$43$$, $$$$41$$) {
  (function() {
    function $_radioGroup$$1$$($radio$$1$$, $$elems$$1$$) {
      var $name$$95_selector$$21$$ = $radio$$1$$.name, $$radios$$1_form$$2$$ = $radio$$1$$.form;
      $name$$95_selector$$21$$ ? ($name$$95_selector$$21$$ = $name$$95_selector$$21$$.replace(/'/g, "\\'"), $name$$95_selector$$21$$ = ":radio[name\x3d'" + $name$$95_selector$$21$$ + "']:oj-button", $$radios$$1_form$$2$$ = $$elems$$1$$ ? $$elems$$1$$.filter($name$$95_selector$$21$$) : $$radios$$1_form$$2$$ ? $$$$41$$($$radios$$1_form$$2$$).find($name$$95_selector$$21$$) : $$$$41$$($name$$95_selector$$21$$, $radio$$1$$.ownerDocument).filter(function() {
        return!this.form;
      })) : $$radios$$1_form$$2$$ = ($$elems$$1$$ ? $$elems$$1$$.filter($radio$$1$$) : $$$$41$$($radio$$1$$)).filter(":oj-button");
      return $$radios$$1_form$$2$$;
    }
    $oj$$43$$.$__registerWidget$("oj.ojToolbar", $$$$41$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{disabled:null}, _create:function() {
      this.element.addClass("oj-toolbar oj-component").attr("role", "toolbar");
      null !== this.options.disabled && $oj$$43$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.");
      this.$_setup$(!0);
      this._super();
    }, _OpenContextMenu:function($menu$$20$$, $event$$403$$) {
      $menu$$20$$.open($event$$403$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), initialFocus:"menu"});
    }, _setOption:function($key$$127$$, $value$$234$$) {
      "disabled" === $key$$127$$ ? $oj$$43$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.") : this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$2$$) {
      var $self$$144$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(":oj-button").unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$404$$) {
        $self$$144$$.$_handleKeyDown$($event$$404$$, $$$$41$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$41$$(this).ojButton("option", "disabled") || $self$$144$$.$_setTabStop$($$$$41$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$144$$.$_setTabStop$($$$$41$$(this));
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$41$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$2$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$3$$) {
      var $$last$$1$$ = $$$$41$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$3$$ = $$newTabStop$$1_isCreate$$3$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$3$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$204$$, $elem$$47$$) {
        if ("radio" != $elem$$47$$.type || $elem$$47$$.checked || "" == $elem$$47$$.name) {
          return $elem$$47$$;
        }
        var $$checkedRadio$$1$$ = $_radioGroup$$1$$($elem$$47$$, $$enabledButtons$$2$$).filter(":checked");
        return $$checkedRadio$$1$$.length ? $$checkedRadio$$1$$[0] : $elem$$47$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$3$$ = $$button$$4$$[0], $last$$4$$ = this.$_lastTabStop$;
      $button$$3$$ !== $last$$4$$ && ($$$$41$$($last$$4$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$3$$);
    }, $_handleKeyDown$:function($event$$407$$, $$button$$5$$) {
      switch($event$$407$$.which) {
        case $$$$41$$.ui.keyCode.LEFT:
        ;
        case $$$$41$$.ui.keyCode.RIGHT:
          $event$$407$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$17$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$17$$) {
            break;
          }
          var $oldIndex$$1$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$1$$ + ($event$$407$$.which == $$$$41$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$17$$) % $length$$17$$).focus();
          break;
        case $$$$41$$.ui.keyCode.UP:
        ;
        case $$$$41$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$407$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0");
    }});
  })();
});
