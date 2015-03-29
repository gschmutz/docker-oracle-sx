"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt"], function($oj$$32$$, $$$$32$$) {
  (function() {
    var $_arMenuCmdMap$$1$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter"};
    $oj$$32$$.$__registerWidget$("oj.ojTabs", $$$$32$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", removable:!1, removeCueText:"Removable", reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$316$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_setupOrientation$($options$$316$$.orientation);
      this.$_setOjDisabledOnPanel$($options$$316$$.disabledTabs);
      this.$_processTabs$();
      this.$_updateDisabledTabs$();
      var $initialSelected$$ = $options$$316$$.selected;
      $options$$316$$.selected = void 0;
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_refresh$();
      $initialSelected$$ = this.$_getPanelId$($initialSelected$$);
      void 0 === $initialSelected$$ && ($initialSelected$$ = this.$_indexToId$(0));
      $options$$316$$.selected = $initialSelected$$;
    }, _init:function() {
      this.$_fireSelectEvents$(this.options.selected);
    }, $_fireSelectEvents$:function($nextIndex$$1_selected$$22$$) {
      this.$_isTabDisabled$($nextIndex$$1_selected$$22$$) && ($nextIndex$$1_selected$$22$$ = this.$_getNextEnabledTab$($nextIndex$$1_selected$$22$$), $nextIndex$$1_selected$$22$$ = void 0 === $nextIndex$$1_selected$$22$$ ? void 0 : this.$_indexToId$($nextIndex$$1_selected$$22$$));
      this.$_activate$($nextIndex$$1_selected$$22$$);
    }, _OpenContextMenu:function($menu$$16$$, $event$$363$$) {
      $menu$$16$$.open($event$$363$$, {launcher:this.$tablist$.children("[tabindex\x3d0]"), initialFocus:"menu"});
    }, $_tabKeydown$:function($event$$364$$) {
      var $anchor$$1_focusedTab$$ = $$$$32$$(this.document[0].activeElement).closest("li"), $selectedIndex$$ = this.$tabs$.index($anchor$$1_focusedTab$$), $goingForward$$ = !0;
      if (!this.$_handlePageNav$($event$$364$$)) {
        switch($event$$364$$.keyCode) {
          case $$$$32$$.ui.keyCode.RIGHT:
          ;
          case $$$$32$$.ui.keyCode.DOWN:
            $selectedIndex$$++;
            break;
          case $$$$32$$.ui.keyCode.UP:
          ;
          case $$$$32$$.ui.keyCode.LEFT:
            $goingForward$$ = !1;
            $selectedIndex$$--;
            break;
          case $$$$32$$.ui.keyCode.END:
            $selectedIndex$$ = this.$tabs$.length - 1;
            break;
          case $$$$32$$.ui.keyCode.HOME:
            $selectedIndex$$ = 0;
            break;
          case 46:
            if ($anchor$$1_focusedTab$$ = this.$active$.find(".oj-tabs-close-icon")) {
              $event$$364$$.preventDefault(), this.$_removeTabHandler$({target:$anchor$$1_focusedTab$$, currentTarget:$anchor$$1_focusedTab$$, preventDefault:$$$$32$$.noop});
            }
            return;
          default:
            return;
        }
        $event$$364$$.preventDefault();
        clearTimeout(this.$activating$);
        var $panelId$$ = this.$_focusNextTab$($selectedIndex$$, $goingForward$$);
        $event$$364$$.ctrlKey || ($anchor$$1_focusedTab$$.attr("aria-selected", "false"), this.$_getTabByPanelId$($panelId$$).attr("aria-selected", "true"), this.$activating$ = this._delay(function() {
          this.option("selected", $panelId$$);
        }, this.delay));
      }
    }, $_panelKeydown$:function($event$$365$$) {
      !this.$_handlePageNav$($event$$365$$) && $event$$365$$.ctrlKey && $event$$365$$.keyCode === $$$$32$$.ui.keyCode.UP && ($event$$365$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$366$$) {
      var $selectedIndex$$1$$ = this.$_idToIndex$(this.options.selected);
      if ($event$$366$$.ctrlKey && $event$$366$$.keyCode === $$$$32$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$1$$ - 1, !1)), !0;
      }
      if ($event$$366$$.ctrlKey && $event$$366$$.keyCode === $$$$32$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$1$$ + 1, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$178$$) {
      return 0 <= $index$$178$$ && $index$$178$$ < this.$tabs$.length ? $$$$32$$(this.$tabs$[$index$$178$$]).hasClass("oj-disabled") : !1;
    }, $_findNextTab$:function($index$$179$$, $goingForward$$1$$) {
      function $constrain$$() {
        $index$$179$$ > $lastTabIndex$$ && ($index$$179$$ = 0);
        0 > $index$$179$$ && ($index$$179$$ = $lastTabIndex$$);
        return $index$$179$$;
      }
      for (var $lastTabIndex$$ = this.$tabs$.length - 1;this.$_isTabDisabled$($constrain$$());) {
        $index$$179$$ = $goingForward$$1$$ ? $index$$179$$ + 1 : $index$$179$$ - 1;
      }
      return $index$$179$$;
    }, $_focusNextTab$:function($index$$180$$, $goingForward$$2$$) {
      $index$$180$$ = this.$_findNextTab$($index$$180$$, $goingForward$$2$$);
      this.$_getTab$($index$$180$$).focus();
      return this.$_indexToId$($index$$180$$);
    }, $_getNextEnabledTab$:function($index$$181_panelId$$1$$) {
      $index$$181_panelId$$1$$ = this.$_idToIndex$($index$$181_panelId$$1$$);
      for (var $next$$4$$ = $index$$181_panelId$$1$$ + 1, $lastTabIndex$$1$$ = this.$tabs$.length - 1;$next$$4$$ <= $lastTabIndex$$1$$;) {
        if (!this.$_isTabDisabled$($next$$4$$)) {
          return $next$$4$$;
        }
        $next$$4$$++;
      }
      for ($next$$4$$ = $index$$181_panelId$$1$$ - 1;0 <= $next$$4$$;) {
        if (!this.$_isTabDisabled$($next$$4$$)) {
          return $next$$4$$;
        }
        $next$$4$$--;
      }
    }, _setOption:function($key$$116$$, $value$$213$$, $flags$$37$$) {
      "selected" === $key$$116$$ ? ($value$$213$$ = this.$_getPanelId$($value$$213$$), void 0 !== $value$$213$$ && this.$_activate$($value$$213$$)) : "disabledTabs" === $key$$116$$ ? Array.isArray($value$$213$$) && (this.$_setOjDisabledOnPanel$($value$$213$$), this.refresh(), this.$_updateDisabledTabs$()) : "removable" === $key$$116$$ ? this.$_setRemovable$($value$$213$$) : "reorderable" === $key$$116$$ ? $value$$213$$ !== this.options.reorderable && (this.options.reorderable = $value$$213$$, this.$_setupReorder$(), 
      this.refresh()) : "orientation" === $key$$116$$ ? (this.$_setupOrientation$($value$$213$$), this.refresh()) : "truncation" === $key$$116$$ ? (this.options.truncation = $value$$213$$, this.refresh()) : ("contextMenu" === $key$$116$$ && (this.$_clearMenu$(), $value$$213$$ && this.$_initMenu$($value$$213$$)), this._super($key$$116$$, $value$$213$$, $flags$$37$$), "selectOn" === $key$$116$$ && (this.$_tearDownEvents$(), this._super($key$$116$$, $value$$213$$), this.$_setupEvents$()), "removeCueText" === 
      $key$$116$$ && this.refresh());
    }, refresh:function() {
      this._super();
      this.$_destroyCloseIcons$();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $options$$317$$ = this.options, $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$_getTabByPanelId$($selectedPanel$$.attr("id")) : $$$$32$$();
      this.$_createCloseIcons$();
      this.$_tearDownEvents$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr({"aria-expanded":"true", "aria-hidden":"false"})) : this.$_getTab$(0).attr("tabIndex", "0");
      void 0 !== this.$_activateLater$ && (this.$_fireSelectEvents$(this.$_activateLater$), this.$_activateLater$ = void 0);
      "horizontal" == $options$$317$$.orientation ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$(), void 0 === this.options.selected || 0 == this.$_idToIndex$(this.options.selected) ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected")) : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $tabsId$$});
    }, $_processTabs$:function() {
      var $self$$130$$ = this;
      this.$_destroyTabBar$();
      this.$tablist$ = $$$$32$$("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist").prependTo(this.element);
      this.$tabs$ = $$$$32$$();
      this.$panels$ = $$$$32$$();
      this.$titles$ = $$$$32$$();
      this.element.children(":not(.oj-tabs-nav)").each(function() {
        var $anchorId_header$$10$$ = $$$$32$$(this).find("\x3e :first-child"), $headerClone_originalAriaControls$$ = $anchorId_header$$10$$.clone();
        $headerClone_originalAriaControls$$.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});
        $self$$130$$.$titles$ = $self$$130$$.$titles$.add($headerClone_originalAriaControls$$);
        var $anchor$$2$$ = $headerClone_originalAriaControls$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();
        $anchor$$2$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        var $tab$$ = $anchor$$2$$.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-tab").attr({role:"tab", "aria-hidden":"false", tabIndex:"-1"});
        $tab$$.appendTo($self$$130$$.$tablist$);
        $self$$130$$.$tabs$ = $self$$130$$.$tabs$.add($tab$$);
        var $chd_panel$$ = $headerClone_originalAriaControls$$[0];
        $chd_panel$$.id && $self$$130$$.$_addPrefixId$($chd_panel$$);
        $headerClone_originalAriaControls$$.find("[id]").each(function() {
          $self$$130$$.$_addPrefixId$(this);
        });
        $anchorId_header$$10$$.hide().attr({"aria-hidden":"true"});
        $anchorId_header$$10$$ = $anchor$$2$$.uniqueId().attr("id");
        $headerClone_originalAriaControls$$ = $tab$$.attr("aria-controls");
        $chd_panel$$ = $$$$32$$(this);
        $chd_panel$$.hasClass("oj-disabled") && ($tab$$.addClass("oj-disabled").attr("aria-disabled", "true"), $anchor$$2$$.removeAttr("href"));
        $headerClone_originalAriaControls$$ && $tab$$.data("oj-tabs-aria-controls", $headerClone_originalAriaControls$$);
        $tab$$.attr({"aria-controls":$self$$130$$.$_getPanelUniqueId$($chd_panel$$), "aria-labelledby":$anchorId_header$$10$$});
        $self$$130$$.$panels$ = $self$$130$$.$panels$.add($chd_panel$$);
        $chd_panel$$.attr("aria-labelledby", $anchorId_header$$10$$);
      });
      "vertical" == this.options.orientation && ($self$$130$$.$tablist$.addClass("oj-tabs-nav-root"), window.setTimeout(function() {
        if ($self$$130$$ && $self$$130$$.$active$) {
          var $maxTabWidth$$ = 0;
          $self$$130$$.$tabs$.addClass("oj-selected").each(function() {
            var $tab$$1$$ = $$$$32$$(this);
            $maxTabWidth$$ = Math.max($maxTabWidth$$, $tab$$1$$.outerWidth());
          }).removeClass("oj-selected");
          $self$$130$$.$active$.addClass("oj-selected");
          $self$$130$$.$tabs$.css({width:$maxTabWidth$$ + "px"});
          var $outerWidth$$ = $self$$130$$.$tablist$.outerWidth(!0), $outerHeight$$ = $self$$130$$.$tablist$.outerHeight(!0), $isR2L$$ = "rtl" == $self$$130$$.$_GetReadingDirection$(), $rootPadding$$ = $isR2L$$ ? $self$$130$$.element.css("padding-right") : $self$$130$$.element.css("padding-left"), $rootPadding$$ = parseInt($rootPadding$$, 10);
          $isR2L$$ ? $self$$130$$.$panels$.css({"margin-right":$outerWidth$$ - 1 + $rootPadding$$ + "px", "min-height":$outerHeight$$ + "px"}) : $self$$130$$.$panels$.css({"margin-left":$outerWidth$$ - 1 + $rootPadding$$ + "px", "min-height":$outerHeight$$ + "px"});
        }
      }, 0));
      this.$panels$.addClass("oj-tabs-panel").attr("role", "tabpanel");
    }, $_setupEvents$:function() {
      var $events$$5$$ = {keydown:this.$_tabKeydown$}, $enabledTabs_event$$367$$ = this.options.selectOn, $selectOnClick$$ = !1;
      if ($enabledTabs_event$$367$$) {
        var $self$$131$$ = this;
        $$$$32$$.each($enabledTabs_event$$367$$.split(" "), function($index$$183$$, $eventName$$2$$) {
          "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
          /^[a-zA-Z]+$/.test($eventName$$2$$) && ($events$$5$$[$eventName$$2$$] = $self$$131$$.$_eventHandler$);
        });
      }
      $enabledTabs_event$$367$$ = this.$tabs$.not(".oj-disabled");
      this._on($enabledTabs_event$$367$$, $events$$5$$);
      $selectOnClick$$ || this._on($enabledTabs_event$$367$$, {click:function($e$$128$$) {
        $e$$128$$.preventDefault();
      }});
      this._on(this.$panels$, {keydown:this.$_panelKeydown$});
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on($enabledTabs_event$$367$$.find(".oj-tabs-close-icon"), $revents$$);
      }
      this._focusable($enabledTabs_event$$367$$);
      this._hoverable($enabledTabs_event$$367$$);
      this.$_activeable$($enabledTabs_event$$367$$);
    }, $_tearDownEvents$:function() {
      var $enabledTabs$$1$$ = this.$tabs$.not(".oj-disabled");
      this._off($enabledTabs$$1$$);
      this._off(this.$panels$);
    }, $_eventHandler$:function($event$$368$$) {
      var $options$$318$$ = this.options, $active_oFromContent$$ = this.$active$, $tab$$2$$ = $$$$32$$($event$$368$$.currentTarget).closest("li"), $clickedIsActive$$ = $active_oFromContent$$ && $tab$$2$$[0] === $active_oFromContent$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$2$$), $active_oFromContent$$ = $active_oFromContent$$ && $active_oFromContent$$.length ? this.$_getPanelForTab$($active_oFromContent$$) : $$$$32$$(), $eventData$$14$$ = {fromTab:$active_oFromContent$$, toTab:$oToContent$$};
      $event$$368$$.preventDefault();
      $tab$$2$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $active_oFromContent$$ && $active_oFromContent$$.length && !1 === this._trigger("beforeDeselect", $event$$368$$, $eventData$$14$$) || !1 === this._trigger("beforeSelect", $event$$368$$, $eventData$$14$$) || ($options$$318$$.selected = this.$_getPanelIdOrIndex$($tab$$2$$), this.$active$ = $tab$$2$$, $oToContent$$.addClass("oj-tabs-selected"), $active_oFromContent$$.removeClass("oj-tabs-selected"), $eventData$$14$$.fromTab.length || 
      $eventData$$14$$.toTab.length || $$$$32$$.error("ojTabs: Mismatching fragment identifier."), this.$_toggle$($event$$368$$, $eventData$$14$$));
    }, $_toggle$:function($event$$369$$, $eventData$$15$$) {
      var $toShow$$ = $eventData$$15$$.toTab, $toHide$$ = $eventData$$15$$.fromTab, $fromId$$, $toId$$;
      $eventData$$15$$ && ($toHide$$ && ($fromId$$ = $toHide$$.attr("id")), $toShow$$ && ($toId$$ = $toShow$$.attr("id")));
      this.$running$ = !0;
      var $fromTab$$ = this.$_getTabByPanelId$($fromId$$).removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$32$$.Components.$subtreeHidden$($toHide$$[0]);
      this.$_getTabByPanelId$($toId$$).addClass("oj-selected");
      "horizontal" == this.options.orientation && 0 < this.$tabs$.length && (0 == this.$_idToIndex$($toId$$) ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$32$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      void 0 !== $fromId$$ && this._trigger("deselect", $event$$369$$, $eventData$$15$$);
      this._trigger("select", $event$$369$$, $eventData$$15$$);
      this.$_fireOptionChange$("selected", this.$_getPanelIdOrIndex$(null, $toHide$$, $fromId$$), this.$_getPanelIdOrIndex$(null, $toShow$$, $toId$$), $event$$369$$ ? !0 : !1);
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$32$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr({"aria-expanded":"true", "aria-hidden":"false"});
      this.$_getTabByPanelId$($toId$$).attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$1_anchor$$3_panelId$$2$$) {
      void 0 !== $active$$1_anchor$$3_panelId$$2$$ && ($active$$1_anchor$$3_panelId$$2$$ = this.$_getTabByPanelId$($active$$1_anchor$$3_panelId$$2$$), this.$active$ && $active$$1_anchor$$3_panelId$$2$$[0] === this.$active$[0] || ($active$$1_anchor$$3_panelId$$2$$ = $active$$1_anchor$$3_panelId$$2$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$active$$1_anchor$$3_panelId$$2$$, currentTarget:$active$$1_anchor$$3_panelId$$2$$, preventDefault:$$$$32$$.noop})));
    }, $_createCloseIcons$:function() {
      if (this.options.removable && "horizontal" == this.options.orientation) {
        var $removeCueText$$ = this.$getTranslatedString$(this.options.removeCueText);
        this.$tabs$.not(".oj-disabled").each(function($index$$184_rmId$$) {
          var $div$$6$$ = $$$$32$$(this).find("\x3e :first-child");
          $div$$6$$.addClass("oj-removable");
          $index$$184_rmId$$ = "ojtabs-id_rm_" + $index$$184_rmId$$;
          $$$$32$$(this).attr("aria-describedby", $index$$184_rmId$$);
          $$$$32$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:$index$$184_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$6$$);
        });
      }
    }, $_destroyCloseIcons$:function() {
      this.$tabs$.find("oj-tabs-close-icon").remove();
    }, $_destroyTabBar$:function() {
      this.$_tabMaxWidthApplied$ = !1;
      this.$_hasResizeListener$ && ($oj$$32$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$conveyor$ ? (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null) : this.element.children(".oj-tabs-nav").remove();
    }, _destroy:function() {
      this.$_clearMenu$();
      var $orientation$$2$$ = this.options.orientation;
      "vertical" == $orientation$$2$$ ? this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix") : this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-first-child-selected");
      this.$_tearDownEvents$();
      this.$_destroyTabBar$();
      this.$panels$.each(function() {
        $$$$32$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-selected oj-tabs-gid oj-tabs-panel").removeUniqueId().css("display", "");
        "vertical" == $orientation$$2$$ && $$$$32$$(this).css("margin-left", "").css("min-height", "");
        $$$$32$$(this).find("\x3e :first-child").css("display", "").removeAttr("aria-hidden");
      });
    }, $_setRemovable$:function($removable$$) {
      $removable$$ !== this.options.removable && (this.options.removable = $removable$$, this.refresh());
    }, $_removeTabHandler$:function($event$$370$$) {
      var $tab$$3$$ = $$$$32$$($event$$370$$.currentTarget).closest("li"), $panel$$1$$ = this.$_getPanelForTab$($tab$$3$$), $eventData$$16$$ = {tab:$panel$$1$$};
      if ($tab$$3$$ && !1 !== this._trigger("beforeRemove", $event$$370$$, $eventData$$16$$)) {
        if ($tab$$3$$.hasClass("oj-selected")) {
          var $nextIndex$$2$$ = this.$_getNextEnabledTab$($panel$$1$$.attr("id"));
          void 0 === $nextIndex$$2$$ ? this.$active$ = this.options.selected = void 0 : (this.options.selected = this.$_getPanelIdOrIndex$(this.$tabs$[$nextIndex$$2$$]), this.$_activateLater$ = this.$_indexToId$($nextIndex$$2$$));
        }
        $panel$$1$$.remove();
        $tab$$3$$.remove();
        this.$_updateDisabledTabs$();
        this.refresh();
        this.$active$ && this.$active$.focus();
        this._trigger("remove", $event$$370$$, $eventData$$16$$);
      }
    }, addTab:function($newTab$$) {
      this.element.append($newTab$$);
      this.element.children(".oj-tabs-selected").length || (this.$_activateLater$ = this.$_getPanelUniqueId$($newTab$$));
      this.refresh();
      this.$tabs$.last()[0].scrollIntoView(!1);
    }, $_setupReorder$:function() {
      if (this.options.reorderable && this.options.disabledTabs.length !== this.$tabs$.length) {
        var $self$$134$$ = this;
        this.$tablist$.sortable({axis:"horizontal" == $self$$134$$.options.orientation ? "x" : "y", stop:function($event$$371$$, $ui$$29$$) {
          var $mvTab$$ = $ui$$29$$.item;
          $self$$134$$.$_doReorder$($mvTab$$, $mvTab$$.prev());
        }});
      } else {
        this.$tablist$.sortable({disabled:!0});
      }
    }, $_setupOrientation$:function($value$$214$$) {
      $value$$214$$ || ($value$$214$$ = this.options.orientation);
      if ("horizontal" == $value$$214$$) {
        "vertical" == this.options.orientation && this.$panels$ && (this.element.removeClass("oj-tabs-vertical oj-helper-clearfix"), this.$panels$.each(function() {
          $$$$32$$(this).css("margin-left", "").css("min-height", "");
        })), this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
      } else {
        if ("vertical" == $value$$214$$) {
          "horizontal" == this.options.orientation && this.$panels$ && this.element.removeClass("oj-tabs-horizontal"), this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
        } else {
          return;
        }
      }
      this.options.orientation = $value$$214$$;
    }, $_sanitizeSelector$:function($hash$$1$$) {
      return $hash$$1$$ ? $hash$$1$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($id$$38_tab$$4$$) {
      $id$$38_tab$$4$$ = $$$$32$$($id$$38_tab$$4$$).attr("aria-controls");
      return this.element.find(this.$_sanitizeSelector$("#" + $id$$38_tab$$4$$));
    }, $_getTab$:function($index$$185$$) {
      return this.$tabs$.eq($index$$185$$);
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), $ulParent$$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$46$$) {
      0 > $elem$$46$$.id.indexOf("ojtabs-id_") && $$$$32$$($elem$$46$$).attr("id", "ojtabs-id_" + $elem$$46$$.id);
    }, getNodeBySubId:function($index$$186_locator$$29$$) {
      if (null == $index$$186_locator$$29$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$20$$ = $index$$186_locator$$29$$.subId;
      $index$$186_locator$$29$$ = $index$$186_locator$$29$$.index;
      if ("oj-conveyorbelt" != $subId$$20$$ && ("number" !== typeof $index$$186_locator$$29$$ || 0 > $index$$186_locator$$29$$ || $index$$186_locator$$29$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$20$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$panels$[$index$$186_locator$$29$$];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$186_locator$$29$$];
        case "oj-tabs-title":
          return this.$titles$[$index$$186_locator$$29$$];
        case "oj-tabs-close-icon":
          return this.$_getTab$($index$$186_locator$$29$$).find("." + $subId$$20$$)[0];
      }
      return null;
    }, $_getTabsWidth$:function() {
      return this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_isMaxWidthApplied$:function() {
      return this.$_tabMaxWidthApplied$;
    }, $_setMaxWidthApplied$:function($bval$$) {
      this.$_tabMaxWidthApplied$ = $bval$$;
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      if (!this.$_tabMaxWidthApplied$) {
        var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
        this.$titles$.each(function() {
          $$$$32$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
        });
        this.$_setMaxWidthApplied$(!0);
      }
    }, $_removeTabMaxWidth$:function() {
      this.$_tabMaxWidthApplied$ && (this.$titles$.each(function() {
        $$$$32$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      }), this.$_setMaxWidthApplied$(!1));
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$();
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      "horizontal" == this.options.orientation && 0 < this.$tabs$.length && this.$_isProgressive$() && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$32$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_fireOptionChange$:function($key$$117$$, $previousValue$$10$$, $value$$215$$, $originalEvent$$6$$) {
      this._trigger("optionChange", $originalEvent$$6$$, {option:$key$$117$$, previousValue:$previousValue$$10$$, value:$value$$215$$, optionMetadata:{writeback:$originalEvent$$6$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, $_handleContextMenuBeforeShow$:function($e$$129$$, $ui$$31$$) {
      this.$_menu$.tab = "keydown" === $e$$129$$.originalEvent.originalEvent.type ? this.$active$ : $$$$32$$($e$$129$$.originalEvent.target).closest("li");
      this.$_menu$.$tabId$ = this.$_menu$.tab.attr("id");
      $ui$$31$$.openOptions.position = {my:"start top", at:"start bottom", of:this.$_menu$.tab[0]};
      if (this.$_menu$.$usermenu$ && (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$)) {
        var $disabledState$$1$$ = !this.$_menu$.$cutTab$;
        this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState$$1$$ && ($disabledState$$1$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"));
      }
    }, $_buildContextMenuItem$:function($cmd$$4_label$$6$$) {
      var $id$$39$$ = $_arMenuCmdMap$$1$$[$cmd$$4_label$$6$$];
      $cmd$$4_label$$6$$ = '\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$($cmd$$4_label$$6$$) + "\x3c/a\x3e";
      return $$$$32$$("\x3cli id\x3d" + $id$$39$$ + "\x3e" + $cmd$$4_label$$6$$ + "\x3c/li\x3e");
    }, $_menu_cut$:function($obj$$105$$) {
      if (!$obj$$105$$ || !$obj$$105$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$105$$;
    }, $_menu_paste$:function($obj$$106$$, $pasteBefore$$) {
      if (!$obj$$106$$ || !$obj$$106$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($mvTab$$1$$, $obj$$106$$, $pasteBefore$$);
    }, $_handleContextMenuSelect$:function($ev$$8$$, $ui$$32$$) {
      var $id$$40$$ = $ui$$32$$ ? $ui$$32$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$40$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$40$$ ? this.$_menu_paste$(this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$40$$ && this.$_menu_paste$(this.$_menu$.tab, !1);
    }, $_initMenu$:function($newVal$$2$$) {
      var $$m$$1_menu$$17$$, $dm$$1_t$$21$$;
      $newVal$$2$$ || this.options.contextMenu || ($$m$$1_menu$$17$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$1_menu$$17$$);
      if ($newVal$$2$$ || this.options.contextMenu) {
        $$m$$1_menu$$17$$ = $newVal$$2$$ || this.options.contextMenu;
        $dm$$1_t$$21$$ = $$$$32$$.type($$m$$1_menu$$17$$);
        if ("function" == $dm$$1_t$$21$$) {
          try {
            $$m$$1_menu$$17$$ = $$m$$1_menu$$17$$();
          } catch ($e$$130$$) {
            $$m$$1_menu$$17$$ = null;
          }
          $dm$$1_t$$21$$ = $$$$32$$.type($$m$$1_menu$$17$$);
        }
        if ("string" === $dm$$1_t$$21$$) {
          if ($$m$$1_menu$$17$$ = $$$$32$$($$m$$1_menu$$17$$)) {
            $$m$$1_menu$$17$$.css("display", "none");
            $dm$$1_t$$21$$ = this.$_menu$;
            if (!$dm$$1_t$$21$$) {
              return;
            }
            $dm$$1_t$$21$$.$$container$ = $$m$$1_menu$$17$$;
            $dm$$1_t$$21$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$2$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderable) {
        var $$menuContainer$$1$$ = this.$_menu$.$$container$, $self$$135$$ = this;
        $$menuContainer$$1$$.on("ojselect", $$$$32$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$1$$.on("ojbeforeopen", $$$$32$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$32$$(this).children("a").length) {
            var $command$$11$$ = $$$$32$$(this).attr("data-oj-command").slice(8);
            $$$$32$$(this).replaceWith($self$$135$$.$_buildContextMenuItem$($command$$11$$));
            $$$$32$$(this).addClass("oj-menu-item");
            $bChanged$$1$$ = !0;
          }
        });
        $bChanged$$1$$ && $$menuContainer$$1$$.ojMenu("refresh");
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$1$$.find("#ojtabspastebefore");
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$1$$.find("#ojtabspasteafter");
      }
    }, $_clearMenu$:function() {
      var $menu$$18$$ = this.$_menu$;
      $menu$$18$$ && $menu$$18$$.$usermenu$ && ($menu$$18$$.$usermenu$ = !1, $menu$$18$$.$$container$.off("ojselect"), $menu$$18$$.$$container$.off("ojbeforeopen"), $menu$$18$$.$$container$ = null);
    }, $_doReorder$:function($mvContent_mvTab$$2$$, $prevTab$$, $pasteBefore$$1$$) {
      this.$_isTabDisabled$(this.$tabs$.index($mvContent_mvTab$$2$$)) || ($mvContent_mvTab$$2$$ = this.$_getPanelForTab$($mvContent_mvTab$$2$$), $prevTab$$.length ? $pasteBefore$$1$$ ? this.$_getPanelForTab$($prevTab$$).before($mvContent_mvTab$$2$$) : this.$_getPanelForTab$($prevTab$$).after($mvContent_mvTab$$2$$) : 0 < this.$panels$.length && this.$panels$.first().before($mvContent_mvTab$$2$$), this.$_updateDisabledTabs$(), this.refresh());
    }, $_getPanelUniqueId$:function($panel$$2$$) {
      var $id$$41$$ = $panel$$2$$.attr("id");
      $id$$41$$ || ($id$$41$$ = $panel$$2$$.uniqueId().attr("id"), $panel$$2$$.addClass("oj-tabs-gid"));
      return $id$$41$$;
    }, $_getTabByPanelId$:function($panelId$$4$$) {
      return this.$_getTab$(this.$_idToIndex$($panelId$$4$$));
    }, $_getPanelId$:function($idOrIndex$$) {
      if ("number" === typeof $idOrIndex$$) {
        if (0 <= $idOrIndex$$ && $idOrIndex$$ < this.$panels$.length) {
          return this.$_indexToId$($idOrIndex$$);
        }
      } else {
        if ("string" === typeof $idOrIndex$$ && -1 != this.$_idToIndex$($idOrIndex$$)) {
          return $idOrIndex$$;
        }
      }
    }, $_indexToId$:function($index$$189$$) {
      return this.$panels$.eq($index$$189$$).attr("id");
    }, $_idToIndex$:function($id$$42$$) {
      return "number" === typeof $id$$42$$ ? $id$$42$$ : this.$panels$.index($$$$32$$("#" + $id$$42$$));
    }, $_getPanelIdOrIndex$:function($tab$$5$$, $panel$$3$$, $id$$43$$) {
      if ($tab$$5$$ || $panel$$3$$) {
        return $tab$$5$$ && ($panel$$3$$ = this.$_getPanelForTab$($tab$$5$$), $id$$43$$ = $panel$$3$$.attr("id")), $panel$$3$$.hasClass("oj-tabs-gid") ? this.$_idToIndex$($id$$43$$) : $id$$43$$;
      }
    }, $_setOjDisabledOnPanel$:function($disTabs$$) {
      this.element.children().removeClass("oj-disabled");
      this.$tabs$ && $$$$32$$(this.$tabs$).removeClass("oj-disabled");
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $children$$8$$ = this.element.children(), $startIndex$$16$$ = this.$conveyor$ ? $children$$8$$.index(this.$conveyor$) + 1 : 0, $idOrIndex$$1$$, $i$$299$$ = 0;$i$$299$$ < $disTabs$$.length;$i$$299$$++) {
          $idOrIndex$$1$$ = $disTabs$$[$i$$299$$], "number" === typeof $idOrIndex$$1$$ && 0 <= $idOrIndex$$1$$ && $startIndex$$16$$ + $idOrIndex$$1$$ < $children$$8$$.length ? $$$$32$$($children$$8$$[$startIndex$$16$$ + $idOrIndex$$1$$]).addClass("oj-disabled") : "string" === typeof $idOrIndex$$1$$ && this.element.find("#" + $idOrIndex$$1$$).addClass("oj-disabled");
        }
      }
    }, $_updateDisabledTabs$:function() {
      var $arr$$23$$ = [], $self$$136$$ = this;
      this.$tablist$.children(".oj-disabled").each(function() {
        $arr$$23$$.push($self$$136$$.$_getPanelIdOrIndex$($$$$32$$(this)));
      });
      this.options.disabledTabs = $arr$$23$$;
    }});
  })();
});
