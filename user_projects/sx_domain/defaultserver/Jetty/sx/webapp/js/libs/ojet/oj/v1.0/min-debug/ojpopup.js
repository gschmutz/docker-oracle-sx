define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$41$$, $$$$39$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-left oj-middle", "center-bottom":"oj-center oj-bottom"};
    $oj$$41$$.$__registerWidget$("oj.ojPopup", $$$$39$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"none", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$ = $$$$39$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$.addClass("oj-helper-reset-inheritable oj-component");
      var $content$$12$$ = $$$$39$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$12$$.appendTo($rootElement$$);
      this.element.after($rootElement$$);
      this.element.appendTo($content$$12$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_createLiveRegion$();
      this.$_usingCallback$ = $$$$39$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this._super();
      this.isOpen() && this.close();
      this.$_destroyTail$();
      this.$_destroyLiveRegion$();
      delete this.$_usingCallback$;
      this.$_rootElement$.replaceWith(this.element);
      this.element.hide();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$7$$, $position$$21$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$7$$);
      var $message$$36_rootElement$$1$$ = this.$_rootElement$;
      $launcher$$7$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($message$$36_rootElement$$1$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$7$$, jQuery);
      $oj$$41$$.$StringUtils$.$isEmptyOrUndefined$($message$$36_rootElement$$1$$.attr("id")) && $message$$36_rootElement$$1$$.uniqueId();
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$21$$);
        var $options$$332$$ = this.options;
        this.$_setAutoDismiss$($options$$332$$.autoDismiss);
        this._on(!0, $$$$39$$(window), {resize:this.$_resizeHandler$, scroll:this.$_resizeHandler$});
        this._on(!0, $message$$36_rootElement$$1$$, {keydown:this.$_keydownHandler$});
        this._on(!0, $launcher$$7$$, {keydown:this.$_keydownHandler$});
        this.$_addDescribedBy$();
        $message$$36_rootElement$$1$$.removeAttr("aria-hidden");
        $message$$36_rootElement$$1$$.attr("role", "tooltip");
        $position$$21$$ = $options$$332$$.position;
        $message$$36_rootElement$$1$$.show();
        var $isRtl$$2$$ = "rtl" === this.$_GetReadingDirection$();
        $message$$36_rootElement$$1$$.position($oj$$41$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$21$$, $isRtl$$2$$));
        this._trigger("open");
        this.$_intialFocus$();
        $message$$36_rootElement$$1$$ = this.$getTranslatedString$("none" === $options$$332$$.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
        this.$_announceLiveRegion$($message$$36_rootElement$$1$$);
      }
    }, close:function() {
      if (this.isOpen() && !1 !== this._trigger("beforeClose")) {
        this.$_restoreFocus$();
        var $launcher$$8_position$$22$$ = this.$_launcher$, $rootElement$$2$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$2$$, jQuery);
        $oj$$41$$.$Assert$.$assertPrototype$($launcher$$8_position$$22$$, jQuery);
        $rootElement$$2$$.hide();
        $rootElement$$2$$.attr("aria-hidden", "true");
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        var $jqWindow$$ = $$$$39$$(window);
        this._off($jqWindow$$, "resize");
        this._off($jqWindow$$, "scroll");
        this._off($rootElement$$2$$, "keydown");
        this._off($launcher$$8_position$$22$$, "keydown");
        delete this.$_launcher$;
        $launcher$$8_position$$22$$ = this.options.position;
        $launcher$$8_position$$22$$._ofo && (delete $launcher$$8_position$$22$$._ofo, delete $launcher$$8_position$$22$$.of);
        this.$_announceLiveRegion$(null);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_resizeHandler$();
    }, _setOption:function($key$$125$$, $value$$232$$) {
      var $options$$333$$ = this.options;
      switch($key$$125$$) {
        case "tail":
          $value$$232$$ !== $options$$333$$.tail && this.$_setTail$($value$$232$$);
          break;
        case "chrome":
          $value$$232$$ !== $options$$333$$.chrome && this.$_setChrome$($value$$232$$);
          break;
        case "position":
          this.$_setPosition$($value$$232$$);
          this.isOpen() && this.$_resizeHandler$();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$232$$ !== $options$$333$$.autoDismiss && this.$_setAutoDismiss$($value$$232$$);
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_resizeHandler$();
    }, $_createTail$:function($tail$$1_tailDecoration_tailStyle$$) {
      $tail$$1_tailDecoration_tailStyle$$ = $tail$$1_tailDecoration_tailStyle$$ ? $tail$$1_tailDecoration_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration_tailStyle$$) {
        $tail$$1_tailDecoration_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration_tailStyle$$].join("-");
        var $tailDom$$ = $$$$39$$("\x3cdiv\x3e").hide().addClass("oj-popup-tail").addClass($tail$$1_tailDecoration_tailStyle$$);
        this.$_tailId$ = "#" + $tailDom$$.uniqueId().attr("id");
        var $rootElement$$3$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$3$$, jQuery);
        $tailDom$$.appendTo($rootElement$$3$$);
        $rootElement$$3$$.addClass($tail$$1_tailDecoration_tailStyle$$);
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$39$$($tailId$$) : null;
    }, $_destroyTail$:function() {
      var $tail$$2_tailStyle$$1$$ = this.$_getTail$();
      $tail$$2_tailStyle$$1$$ && $tail$$2_tailStyle$$1$$.remove();
      delete this.$_tailId$;
      var $tail$$2_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$4$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
      $rootElement$$4$$.removeClass($tail$$2_tailStyle$$1$$);
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$5$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$5$$.hasClass("oj-popup-no-chrome") ? $rootElement$$5$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$5$$.hasClass("oj-popup-no-chrome") || $rootElement$$5$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$9$$) {
      $launcher$$9$$ ? "string" === $$$$39$$.type($launcher$$9$$) ? $launcher$$9$$ = $$$$39$$($launcher$$9$$) : 1 === $launcher$$9$$.nodeType && ($launcher$$9$$ = $$$$39$$($launcher$$9$$)) : $launcher$$9$$ = $$$$39$$(document.activeElement);
      if ($launcher$$9$$ instanceof jQuery && 1 < $launcher$$9$$.length) {
        var $rootElement$$6$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$6$$, jQuery);
        for (var $i$$314$$ = 0;$i$$314$$ < $launcher$$9$$.length;$i$$314$$++) {
          var $target$$83$$ = $launcher$$9$$[0];
          if (!$oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$6$$[0], $target$$83$$)) {
            $launcher$$9$$ = $$$$39$$($target$$83$$);
            break;
          }
        }
      } else {
        if (!($launcher$$9$$ instanceof jQuery) || $launcher$$9$$ instanceof jQuery && 0 === $launcher$$9$$.length) {
          $launcher$$9$$ = $$$$39$$(document.activeElement);
        }
      }
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$9$$, jQuery);
      this.$_launcher$ = $launcher$$9$$;
    }, $_setPosition$:function($position$$23$$) {
      var $launcher$$10_options$$334_usingCallback$$ = this.options;
      $position$$23$$ && ($launcher$$10_options$$334_usingCallback$$.position = $$$$39$$.extend($launcher$$10_options$$334_usingCallback$$[$position$$23$$], $position$$23$$));
      $position$$23$$ = $launcher$$10_options$$334_usingCallback$$.position;
      $launcher$$10_options$$334_usingCallback$$ = this.$_usingCallback$;
      $oj$$41$$.$Assert$.$assertFunction$($launcher$$10_options$$334_usingCallback$$);
      $$$$39$$.isFunction($position$$23$$.using) && $position$$23$$.using !== $launcher$$10_options$$334_usingCallback$$ && ($position$$23$$.origUsing = $position$$23$$.using);
      $position$$23$$.using = $launcher$$10_options$$334_usingCallback$$;
      $launcher$$10_options$$334_usingCallback$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$10_options$$334_usingCallback$$, jQuery);
      $position$$23$$.of || ($position$$23$$.of = $launcher$$10_options$$334_usingCallback$$, $position$$23$$._ofo = !0);
    }, $_usingHandler$:function($pos$$12$$, $props$$18$$) {
      var $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $props$$18$$.element.element;
      $oj$$41$$.$Assert$.$assertPrototype$($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$, jQuery);
      var $origUsing_tail$$3$$ = this.$_getTail$();
      if ($origUsing_tail$$3$$) {
        $origUsing_tail$$3$$.hide();
        for (var $i$$315_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$315_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$315_tailHOffset_tailStyle$$2_tailVOffset$$++) {
          $origUsing_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$315_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$315_tailHOffset_tailStyle$$2_tailVOffset$$]);
        }
        $origUsing_tail$$3$$.removeAttr("style");
        $i$$315_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$18$$.horizontal, $props$$18$$.vertical].join("-")];
        $oj$$41$$.$Assert$.$assertString$($i$$315_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.addClass($i$$315_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.addClass($i$$315_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.show();
        "left" === $props$$18$$.horizontal || "right" === $props$$18$$.horizontal ? ($i$$315_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerWidth() - 1) * ("left" === $props$$18$$.horizontal ? 1 : -1), $pos$$12$$.left += $i$$315_tailHOffset_tailStyle$$2_tailVOffset$$) : "center" === $props$$18$$.horizontal && ($i$$315_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerHeight() - 1) * ("top" === $props$$18$$.vertical ? 1 : -1), $pos$$12$$.top += $i$$315_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
        "middle" === $props$$18$$.vertical ? ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerHeight() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ * 100), $origUsing_tail$$3$$.css({top:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"})) : "center" === $props$$18$$.horizontal && ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerWidth() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ * 100), $origUsing_tail$$3$$.css({left:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"}));
        ($origUsing_tail$$3$$ = this.options.position.origUsing) && $origUsing_tail$$3$$($pos$$12$$, $props$$18$$);
      } else {
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
      }
    }, $_resizeHandler$:function() {
      var $rootElement$$8$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
      var $position$$24$$ = this.options.position;
      $oj$$41$$.$Assert$.$assertObject$($position$$24$$);
      var $isRtl$$3$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$8$$.position($oj$$41$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$24$$, $isRtl$$3$$));
    }, $_intialFocus$:function($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$) {
      var $options$$336$$ = this.options;
      if ($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$ || "none" !== $options$$336$$.initialFocus) {
        if ($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$ || "firstFocusable" === $options$$336$$.initialFocus) {
          $first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$ = this.element.find(":focusable"), 0 < $first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$.length ? ($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$ = $first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$[0], $oj$$41$$.$Assert$.$assertDomElement$($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$), $$$$39$$($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$).focus()) : ($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$ = this.$_rootElement$, 
          $oj$$41$$.$Assert$.$assertPrototype$($first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$, jQuery), $first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$.attr("tabindex", "-1"), $first$$11_nodes$$5_rootElement$$9_skipOptionCheck$$.focus()), this._trigger("focus");
        }
      }
    }, $_isFocusInPopup$:function($activeElement$$1$$) {
      $activeElement$$1$$ || ($activeElement$$1$$ = document.activeElement);
      $oj$$41$$.$Assert$.$assertDomElement$($activeElement$$1$$);
      if (!$activeElement$$1$$) {
        return!1;
      }
      var $rootElement$$10$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      return $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$10$$[0], $activeElement$$1$$);
    }, $_isFocusInLauncher$:function($activeElement$$2$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      $oj$$41$$.$Assert$.$assertDomElement$($activeElement$$2$$);
      var $launcher$$11$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$11$$, jQuery);
      return $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($launcher$$11$$[0], $activeElement$$2$$);
    }, $_restoreFocus$:function() {
      if (this.$_isFocusInPopup$()) {
        var $launcher$$12$$ = this.$_launcher$;
        $oj$$41$$.$Assert$.$assertPrototype$($launcher$$12$$, jQuery);
        $launcher$$12$$.focus();
      }
    }, $_keydownHandler$:function($event$$395_launcher$$13$$) {
      if (!$event$$395_launcher$$13$$.isDefaultPrevented()) {
        var $target$$84$$ = $event$$395_launcher$$13$$.target;
        $oj$$41$$.$Assert$.$assertDomElement$($target$$84$$);
        if (27 === $event$$395_launcher$$13$$.keyCode) {
          $event$$395_launcher$$13$$.preventDefault(), this.close();
        } else {
          if (117 === $event$$395_launcher$$13$$.keyCode) {
            this.$_isFocusInPopup$($target$$84$$) ? ($event$$395_launcher$$13$$.preventDefault(), $event$$395_launcher$$13$$ = this.$_launcher$, $oj$$41$$.$Assert$.$assertPrototype$($event$$395_launcher$$13$$, jQuery), $event$$395_launcher$$13$$.focus()) : this.$_isFocusInLauncher$($target$$84$$) && ($event$$395_launcher$$13$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if (9 === $event$$395_launcher$$13$$.keyCode && this.$_isFocusInPopup$($target$$84$$)) {
              var $lastNode_nodes$$6$$ = this.element.find(":tabbable");
              if (0 < $lastNode_nodes$$6$$.length) {
                var $firstNode$$ = $lastNode_nodes$$6$$[0];
                $oj$$41$$.$Assert$.$assertDomElement$($firstNode$$);
                $lastNode_nodes$$6$$ = $lastNode_nodes$$6$$[$lastNode_nodes$$6$$.length - 1];
                $oj$$41$$.$Assert$.$assertDomElement$($lastNode_nodes$$6$$);
                $firstNode$$ === $target$$84$$ && $event$$395_launcher$$13$$.shiftKey ? ($event$$395_launcher$$13$$.preventDefault(), $$$$39$$($lastNode_nodes$$6$$).focus()) : $lastNode_nodes$$6$$ !== $target$$84$$ || $event$$395_launcher$$13$$.shiftKey || ($event$$395_launcher$$13$$.preventDefault(), $$$$39$$($firstNode$$).focus());
              } else {
                $event$$395_launcher$$13$$.preventDefault(), $event$$395_launcher$$13$$ = this.$_launcher$, $oj$$41$$.$Assert$.$assertPrototype$($event$$395_launcher$$13$$, jQuery), $event$$395_launcher$$13$$.focus();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss$$) {
      var $documentElement$$ = document.documentElement, $focusLossCallback$$ = this.$_focusLossCallback$;
      $focusLossCallback$$ && ($documentElement$$.removeEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.removeEventListener("focus", $focusLossCallback$$, !0), delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$39$$.proxy(this.$_dismissalHandler$, this), $documentElement$$.addEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.addEventListener("focus", $focusLossCallback$$, !0));
    }, $_dismissalHandler$:function($event$$396_target$$85$$) {
      var $launcher$$14$$ = this.$_launcher$, $rootElement$$11$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$14$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$11$$, jQuery);
      $event$$396_target$$85$$ = $event$$396_target$$85$$.target;
      $oj$$41$$.$Assert$.$assertDomElement$($event$$396_target$$85$$);
      $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($launcher$$14$$[0], $event$$396_target$$85$$) || $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $event$$396_target$$85$$) || this.close();
    }, $_addDescribedBy$:function() {
      var $launcher$$15$$ = this.$_launcher$, $popupId_rootElement$$12$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$15$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($popupId_rootElement$$12$$, jQuery);
      var $popupId_rootElement$$12$$ = $popupId_rootElement$$12$$.attr("id"), $describedby_tokens$$2$$ = $launcher$$15$$.attr("aria-describedby"), $describedby_tokens$$2$$ = $describedby_tokens$$2$$ ? $describedby_tokens$$2$$.split(/\s+/) : [];
      $describedby_tokens$$2$$.push($popupId_rootElement$$12$$);
      $describedby_tokens$$2$$ = $$$$39$$.trim($describedby_tokens$$2$$.join(" "));
      $launcher$$15$$.attr("aria-describedby", $describedby_tokens$$2$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$16$$ = this.$_launcher$, $index$$202_popupId$$1_rootElement$$13$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$16$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($index$$202_popupId$$1_rootElement$$13$$, jQuery);
      var $index$$202_popupId$$1_rootElement$$13$$ = $index$$202_popupId$$1_rootElement$$13$$.attr("id"), $describedby$$1_tokens$$3$$ = $launcher$$16$$.attr("aria-describedby"), $describedby$$1_tokens$$3$$ = $describedby$$1_tokens$$3$$ ? $describedby$$1_tokens$$3$$.split(/\s+/) : [], $index$$202_popupId$$1_rootElement$$13$$ = $$$$39$$.inArray($index$$202_popupId$$1_rootElement$$13$$, $describedby$$1_tokens$$3$$);
      -1 !== $index$$202_popupId$$1_rootElement$$13$$ && $describedby$$1_tokens$$3$$.splice($index$$202_popupId$$1_rootElement$$13$$, 1);
      ($describedby$$1_tokens$$3$$ = $$$$39$$.trim($describedby$$1_tokens$$3$$.join(" "))) ? $launcher$$16$$.attr("aria-describedby", $describedby$$1_tokens$$3$$) : $launcher$$16$$.removeAttr("aria-describedby");
    }, $_createLiveRegion$:function() {
      var $rootElement$$14$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$14$$, jQuery);
      var $liveRegionId$$ = this.$_getSubId$("ariaLive"), $liveRegion$$ = this.$_liveRegion$ = $$$$39$$("\x3cdiv\x3e");
      $liveRegion$$.attr({id:$liveRegionId$$, role:"log", "aria-live":"polite", "aria-relevant":"additions"});
      $liveRegion$$.addClass("oj-helper-hidden-accessible");
      $liveRegion$$.appendTo(document.body);
      $rootElement$$14$$.data("oj-aria-controls", $liveRegionId$$);
    }, $_announceLiveRegion$:function($message$$37$$) {
      var $liveRegion$$1$$ = this.$_liveRegion$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$1$$, jQuery);
      $liveRegion$$1$$.children().remove();
      $oj$$41$$.$StringUtils$.isEmpty($message$$37$$) || $$$$39$$("\x3cdiv\x3e").text($message$$37$$).appendTo($liveRegion$$1$$);
    }, $_destroyLiveRegion$:function() {
      var $liveRegion$$2_rootElement$$15$$ = this.$_liveRegion$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$2_rootElement$$15$$, jQuery);
      $liveRegion$$2_rootElement$$15$$.remove();
      delete this.$_liveRegion$;
      $liveRegion$$2_rootElement$$15$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$2_rootElement$$15$$, jQuery);
      $liveRegion$$2_rootElement$$15$$.removeData("oj-aria-controls");
    }, $_getSubId$:function($sub$$1$$) {
      return this.uuid + "_" + $sub$$1$$;
    }});
  })();
});
