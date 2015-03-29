"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$28$$, $$$$28$$) {
  (function() {
    $oj$$28$$.$__registerWidget$("oj.ojAccordion", $$$$28$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.$_refresh$();
    }, _OpenContextMenu:function($menu$$14$$, $event$$340$$) {
      $menu$$14$$.open($event$$340$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), initialFocus:"menu"});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$103$$, $value$$209$$, $flags$$35$$) {
      if ("multiple" === $key$$103$$) {
        !1 == $value$$209$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$103$$) {
          this.$_setExpandedOption$($value$$209$$);
          return;
        }
      }
      this._super($key$$103$$, $value$$209$$, $flags$$35$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this._setOption("expanded", this.options.expanded);
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$28$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$3$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$3$$);
    }, $_keydown$:function($event$$341$$) {
      if (!$event$$341$$.altKey && !$event$$341$$.ctrlKey && ($$$$28$$($event$$341$$.target).hasClass("oj-collapsible-header") || $$$$28$$($event$$341$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$4$$ = $$$$28$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$16$$ = $enabledCollapsibles$$.length, $target$$82$$ = $$$$28$$($event$$341$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$82$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$1$$) {
          switch($event$$341$$.keyCode) {
            case $keyCode$$4$$.RIGHT:
            ;
            case $keyCode$$4$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ + 1) % $length$$16$$];
              break;
            case $keyCode$$4$$.LEFT:
            ;
            case $keyCode$$4$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ - 1 + $length$$16$$) % $length$$16$$];
              break;
            case $keyCode$$4$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$4$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$16$$ - 1];
          }
        }
        $toFocus$$ && ($target$$82$$ && $$$$28$$($target$$82$$).trigger("ojfocusout"), $$$$28$$($toFocus$$).trigger("ojfocus"), $event$$341$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$342$$) {
      return!this.options.multiple && ($closestCollapsible_event$$342$$ = $$$$28$$($closestCollapsible_event$$342$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$342$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$342$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$28$$(this).data("oj-ojCollapsible");
      }) : $$$$28$$();
    }, $_beforeExpandHandler$:function($event$$343$$) {
      if (!this.$_isTargetMyCollapsible$($event$$343$$)) {
        return!0;
      }
      var $result$$27$$, $self$$120$$ = this, $newData$$2$$;
      this.$_findTargetSiblings$($event$$343$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$2$$ = $self$$120$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$28$$($event$$343$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$27$$ = this._trigger("beforeCollapse", $event$$343$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$2$$ || ($newData$$2$$ = $self$$120$$.$_initEventData$(null, $$$$28$$($event$$343$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$343$$, $newData$$2$$);
      return $result$$27$$;
    }, $_expandHandler$:function($event$$344$$, $eventData$$7$$) {
      if (this.$_isTargetMyCollapsible$($event$$344$$)) {
        var $newData$$3$$, $self$$121$$ = this;
        this.$_findTargetSiblings$($event$$344$$).each(function() {
          this.collapse(!1, $event$$344$$, $eventData$$7$$);
          $newData$$3$$ = $self$$121$$.$_initEventData$(this.element, $$$$28$$($event$$344$$.target));
        });
        $newData$$3$$ || ($newData$$3$$ = $self$$121$$.$_initEventData$(null, $$$$28$$($event$$344$$.target)));
        this.options.multiple || this._trigger("expand", $event$$344$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$345$$, $eventData$$8$$) {
      return this.$_isTargetMyCollapsible$($event$$345$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$345$$, this.$_initCollapseEventData$($event$$345$$, $eventData$$8$$)) : !0;
    }, $_collapseHandler$:function($event$$346$$, $eventData$$9$$) {
      if (this.$_isTargetMyCollapsible$($event$$346$$)) {
        var $newData$$4$$ = this.$_initCollapseEventData$($event$$346$$, $eventData$$9$$);
        this.options.multiple || this._trigger("collapse", $event$$346$$, $newData$$4$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$347$$, $eventData$$11$$) {
      var $newData$$5$$;
      if ($eventData$$11$$.toCollapsible) {
        $newData$$5$$ = $eventData$$11$$;
      } else {
        if ($event$$347$$.originalEvent && $event$$347$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$28$$($event$$347$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$5$$ = this.$_initEventData$($$$$28$$($event$$347$$.target), $collapsible$$1$$));
        }
        $newData$$5$$ || ($newData$$5$$ = this.$_initEventData$($$$$28$$($event$$347$$.target), null));
      }
      return $newData$$5$$;
    }, $_isTargetMyCollapsible$:function($event$$348$$) {
      return $$$$28$$($event$$348$$.target).is(this.$colllapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$28$$ = [];
      this.$colllapsibles$.each(function($index$$162$$) {
        $$$$28$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$28$$(this).attr("id"), $result$$28$$.push($cid$$8$$ ? $cid$$8$$ : $index$$162$$));
      });
      this.options.expanded = $result$$28$$;
    }, $_setExpandedOption$:function($expanded$$2$$) {
      var $idMap$$ = {};
      this.$colllapsibles$.each(function($index$$163$$) {
        var $id$$37$$ = $$$$28$$(this).attr("id");
        $id$$37$$ && ($idMap$$[$id$$37$$] = $index$$163$$);
      });
      var $expandedList$$ = [];
      if (Array.isArray($expanded$$2$$)) {
        for (var $ex$$1$$, $i$$295$$ = 0;$i$$295$$ < $expanded$$2$$.length;$i$$295$$++) {
          $ex$$1$$ = $expanded$$2$$[$i$$295$$], "string" === typeof $ex$$1$$ ? void 0 !== $idMap$$[$ex$$1$$] && ($expandedList$$[$idMap$$[$ex$$1$$]] = !0) : "number" === typeof $ex$$1$$ && ($expandedList$$[$ex$$1$$] = !0);
        }
      }
      for ($i$$295$$ = 0;$i$$295$$ < $expandedList$$.length;$i$$295$$++) {
        $$$$28$$(this.$colllapsibles$[$i$$295$$]).ojCollapsible("option", "expanded", !!$expandedList$$[$i$$295$$]);
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$164_locator$$25$$) {
      if (null == $collapsible$$2_index$$164_locator$$25$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$18$$ = $collapsible$$2_index$$164_locator$$25$$.subId;
      $collapsible$$2_index$$164_locator$$25$$ = $collapsible$$2_index$$164_locator$$25$$.index;
      if ("number" !== typeof $collapsible$$2_index$$164_locator$$25$$ || 0 > $collapsible$$2_index$$164_locator$$25$$ || $collapsible$$2_index$$164_locator$$25$$ >= this.$colllapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$164_locator$$25$$ = this.$colllapsibles$[$collapsible$$2_index$$164_locator$$25$$];
      switch($subId$$18$$) {
        case "oj-accordion-content":
          $subId$$18$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$18$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$18$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$164_locator$$25$$;
        default:
          return null;
      }
      return $$$$28$$($collapsible$$2_index$$164_locator$$25$$).ojCollapsible("getNodeBySubId", {subId:$subId$$18$$});
    }});
  })();
});
