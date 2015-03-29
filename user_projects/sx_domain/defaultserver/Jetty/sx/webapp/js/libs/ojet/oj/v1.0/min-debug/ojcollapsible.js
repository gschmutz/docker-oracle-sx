"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$31$$, $$$$31$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$31$$.$__registerWidget$("oj.ojCollapsible", $$$$31$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
    }, _init:function() {
      this.$_initialRender$ = !0;
      this.$_setExpanded$(this.options.expanded);
      this.$_initialRender$ = void 0;
    }, _OpenContextMenu:function($menu$$15$$, $event$$354$$) {
      $menu$$15$$.open($event$$354$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), initialFocus:"menu"});
    }, $_createIcons$:function() {
      var $icon$$2$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      $$$$31$$("\x3ca href\x3d'#'\x3e").addClass("oj-component-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$2$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.$_findFocusables$(this.content).removeAttr("tabIndex");
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && (this.content.unwrap(), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return!1;
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$114$$, $value$$210$$, $flags$$36$$) {
      "expanded" === $key$$114$$ ? $value$$210$$ !== this.options.expanded && this.$_setExpanded$($value$$210$$) : "expandOn" === $key$$114$$ || "expandArea" === $key$$114$$ ? (this.$_tearDownEvents$(), this._super($key$$114$$, $value$$210$$, $flags$$36$$), this.$_setupEvents$()) : this._super($key$$114$$, $value$$210$$, $flags$$36$$);
    }, $_keydown$:function($event$$355$$) {
      if (!$event$$355$$.altKey && !$event$$355$$.ctrlKey) {
        var $keyCode$$5$$ = $$$$31$$.ui.keyCode;
        switch($event$$355$$.keyCode) {
          case $keyCode$$5$$.SPACE:
          ;
          case $keyCode$$5$$.ENTER:
            this.$_toggleHandler$($event$$355$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
    }, $_refresh$:function() {
      var $header$$9$$ = this.header, $content$$10$$ = this.content, $options$$314$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $header$$9$$.attr("id"), $contentId$$ = $content$$10$$.attr("id");
      $headerId$$ || $header$$9$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$10$$.attr("id", $contentId$$));
      this.$_createIcons$();
      this.$_findFirstFocusableInHeader$().attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$314$$.expanded);
      this.$_setContentTabIndex$($options$$314$$.expanded ? "0" : "-1");
      $options$$314$$.expanded ? $content$$10$$.attr("aria-hidden", "false") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$10$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$3$$) {
      $expanded$$3$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$4$$ = {keydown:this.$_keydown$}, $event$$356_expandArea$$ = this.options.expandOn;
      if ($event$$356_expandArea$$) {
        var $self$$128$$ = this;
        $$$$31$$.each($event$$356_expandArea$$.split(" "), function($index$$177$$, $eventName$$1$$) {
          /^[a-zA-Z]+$/.test($eventName$$1$$) && ($events$$4$$[$eventName$$1$$] = $self$$128$$.$_toggleHandler$);
        });
      }
      $event$$356_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$356_expandArea$$, $events$$4$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$});
      this._hoverable($event$$356_expandArea$$);
      this._focusable($event$$356_expandArea$$);
      this.$_activeable$($event$$356_expandArea$$);
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$357$$) {
      this.options.expanded ? this.collapse(!0, $event$$357$$) : this.expand(!0, $event$$357$$);
      $event$$357$$.preventDefault();
      $event$$357$$.stopPropagation();
      this.header.find(".oj-collapsible-header-icon").focus();
    }, $_expandCollapseHandler$:function($event$$358$$) {
      if ($event$$358$$.target === this.element[0] && (this.$_initialRender$ || !$event$$358$$.isDefaultPrevented())) {
        var $element$$73$$ = this.element, $options$$315$$ = this.options, $content$$11$$ = this.content, $wrapper$$1$$ = this.$wrapper$, $isCollapse$$ = "ojcollapse" === $event$$358$$.type;
        $event$$358$$.preventDefault();
        $options$$315$$.expanded = !$isCollapse$$;
        this.$_initialRender$ ? $isCollapse$$ ? ($element$$73$$.removeClass("oj-expanded"), $element$$73$$.addClass("oj-collapsed"), $wrapper$$1$$.css("max-height", 0), $wrapper$$1$$.hide()) : ($element$$73$$.removeClass("oj-collapsed"), $element$$73$$.addClass("oj-expanded")) : ($wrapper$$1$$.$contentHeight$ = $wrapper$$1$$.outerHeight(), $isCollapse$$ ? ($wrapper$$1$$.removeClass("oj-collapsible-transition"), $wrapper$$1$$.css({"max-height":$wrapper$$1$$.$contentHeight$, "overflow-y":"hidden"}), 
        setTimeout(function() {
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$73$$.removeClass("oj-expanded");
          $element$$73$$.addClass("oj-collapsed");
        }, 10)) : ($wrapper$$1$$.show(), setTimeout(function() {
          $wrapper$$1$$.$contentHeight$ += $content$$11$$.outerHeight();
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$1$$.$contentHeight$});
          $element$$73$$.removeClass("oj-collapsed");
          $element$$73$$.addClass("oj-expanded");
        }, 1)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
        this.$_setContentTabIndex$($isCollapse$$ ? "-1" : "0");
      }
    }, $_focusHandler$:function($event$$359$$) {
      "ojfocusout" == $event$$359$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$359$$.preventDefault(), $event$$359$$.stopPropagation()) : "ojfocus" == $event$$359$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$359$$.preventDefault(), $event$$359$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_setContentTabIndex$:function($value$$211$$) {
      return this.$_findFocusables$(this.content).attr("tabIndex", $value$$211$$);
    }, $_findFocusables$:function($start$$35$$) {
      return $start$$35$$.find("a,:input");
    }, expand:function($vetoable$$, $event$$360$$) {
      var $eventData$$12$$ = {header:this.header, content:this.content};
      $vetoable$$ && !1 === this._trigger("beforeExpand", $event$$360$$, $eventData$$12$$) || (this._trigger("expand", $event$$360$$, $eventData$$12$$), this.$_fireOptionChange$("expanded", !1, !0, $event$$360$$ ? !0 : !1));
    }, collapse:function($vetoable$$1$$, $event$$361$$) {
      if (this.$_initialRender$) {
        var $elem$$45_eventData$$13$$ = this.element[0];
        this.$_expandCollapseHandler$({type:"ojcollapse", target:$elem$$45_eventData$$13$$, currentTarget:$elem$$45_eventData$$13$$, preventDefault:$$$$31$$.noop});
      } else {
        $elem$$45_eventData$$13$$ = {header:this.header, content:this.content}, $vetoable$$1$$ && !1 === this._trigger("beforeCollapse", $event$$361$$, $elem$$45_eventData$$13$$) || (this._trigger("collapse", $event$$361$$, $elem$$45_eventData$$13$$), this.$_fireOptionChange$("expanded", !0, !1, $event$$361$$ ? !0 : !1));
      }
    }, $_transitionEndHandler$:function($event$$362$$) {
      "max-height" == ($event$$362$$.originalEvent ? $event$$362$$.originalEvent.propertyName : null) && ($event$$362$$.preventDefault(), $event$$362$$.stopPropagation());
      this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide();
      this.$wrapper$.removeClass("oj-collapsible-transition");
    }, $_fireOptionChange$:function($key$$115$$, $previousValue$$9$$, $value$$212$$, $originalEvent$$5$$) {
      this._trigger("optionChange", $originalEvent$$5$$, {option:$key$$115$$, previousValue:$previousValue$$9$$, value:$value$$212$$, optionMetadata:{writeback:$originalEvent$$5$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, getNodeBySubId:function($locator$$28_subId$$19$$) {
      if (null == $locator$$28_subId$$19$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$28_subId$$19$$ = $locator$$28_subId$$19$$.subId;
      switch($locator$$28_subId$$19$$) {
        case "oj-collapsible-content":
          return this.content;
        case "oj-collapsible-header":
          return this.header;
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$28_subId$$19$$)[0];
      }
      return null;
    }});
  })();
});
