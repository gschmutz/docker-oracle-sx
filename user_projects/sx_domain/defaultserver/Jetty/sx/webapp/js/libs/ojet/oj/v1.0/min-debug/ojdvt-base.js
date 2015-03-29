"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation"], function($oj$$16$$, $$$$16$$) {
  function $DvtJsonPath$$($object$$6$$, $path$$8$$) {
    this.$_path$ = $path$$8$$;
    this.$_root$ = $object$$6$$;
    this.$_delimiter$ = "/";
  }
  $oj$$16$$.$AttributeGroupHandler$ = function $$oj$$16$$$$AttributeGroupHandler$$($matchRules$$) {
    this.Init($matchRules$$);
  };
  $goog$exportPath_$$("AttributeGroupHandler", $oj$$16$$.$AttributeGroupHandler$, $oj$$16$$);
  $oj$$16$$.$Object$.$createSubclass$($oj$$16$$.$AttributeGroupHandler$, $oj$$16$$.$Object$, "oj.AttributeGroupHandler");
  $oj$$16$$.$AttributeGroupHandler$.prototype.Init = function $$oj$$16$$$$AttributeGroupHandler$$$Init$($idx$$9_matchRules$$1$$) {
    $oj$$16$$.$AttributeGroupHandler$.$superclass$.Init.call(this);
    this.$_matchRules$ = $idx$$9_matchRules$$1$$ ? $idx$$9_matchRules$$1$$ : {};
    this.$_assignments$ = {};
    this.$_valueIndex$ = 0;
    this.$Values$ = this.$getValueRamp$();
    for (var $key$$79$$ in this.$_matchRules$) {
      $idx$$9_matchRules$$1$$ = this.$Values$.indexOf(this.$_matchRules$[$key$$79$$]), -1 !== $idx$$9_matchRules$$1$$ && this.$Values$.splice($idx$$9_matchRules$$1$$, 1);
    }
  };
  $oj$$16$$.$AttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$16$$$$AttributeGroupHandler$$$$getValueRamp$$() {
    return[];
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValueRamp", {$getValueRamp$:$oj$$16$$.$AttributeGroupHandler$.prototype.$getValueRamp$});
  $oj$$16$$.$AttributeGroupHandler$.prototype.$getValue$ = function $$oj$$16$$$$AttributeGroupHandler$$$$getValue$$($category$$) {
    if (this.$_matchRules$[$category$$]) {
      return this.$_matchRules$[$category$$];
    }
    this.$_assignments$[$category$$] || (this.$_assignments$[$category$$] = this.$Values$[this.$_valueIndex$], this.$_valueIndex$ == this.$Values$.length - 1 ? this.$_valueIndex$ = 0 : this.$_valueIndex$++);
    return this.$_assignments$[$category$$];
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValue", {$getValue$:$oj$$16$$.$AttributeGroupHandler$.prototype.$getValue$});
  $oj$$16$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$ = function $$oj$$16$$$$AttributeGroupHandler$$$$getCategoryAssignments$$() {
    var $assignments$$ = [], $i$$232$$;
    for ($i$$232$$ in this.$_assignments$) {
      $assignments$$.push({category:$i$$232$$, value:this.$_assignments$[$i$$232$$]});
    }
    return $assignments$$;
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getCategoryAssignments", {$getCategoryAssignments$:$oj$$16$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$});
  $oj$$16$$.$AttributeGroupHandler$.prototype.$addMatchRule$ = function $$oj$$16$$$$AttributeGroupHandler$$$$addMatchRule$$($category$$1$$, $attributeValue$$) {
    this.$_matchRules$[$category$$1$$] = $attributeValue$$;
  };
  $oj$$16$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.addMatchRule", {$addMatchRule$:$oj$$16$$.$AttributeGroupHandler$.prototype.$addMatchRule$});
  var $DvtStyleProcessor$$ = {CSS_TEXT_PROPERTIES:function($node$$33$$, $styleString$$) {
    var $ignoreProperties$$ = {};
    $node$$33$$ && ($node$$33$$.hasClass("oj-gaugeMetricLabel") && $node$$33$$.hasClass($node$$33$$.parentNode, "oj-ledGauge") && ($ignoreProperties$$["font-size"] = !0, $ignoreProperties$$.color = !0), $node$$33$$.hasClass($node$$33$$, "oj-chartSliceLabel") && ($ignoreProperties$$.color = !0));
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$33$$, $styleString$$, !1, $ignoreProperties$$);
  }, CSS_BACKGROUND_PROPERTIES:function($node$$34$$, $styleString$$1$$) {
    return $DvtStyleProcessor$$.$_mergeOptionsAndDivStyle$($node$$34$$, $styleString$$1$$, !0, {});
  }, CSS_URL:function($node$$35$$) {
    return $DvtStyleProcessor$$.$_parseUrl$($node$$35$$);
  }, $_INHERITED_FONT_COLOR$:"rgb(254, 0, 254)", $_INHERITED_FONT_FAMILY$:"Times", $_INHERITED_FONT_SIZE$:"1px", $_INHERITED_FONT_WEIGHT$:"1", $_INHERITED_FONT_STYLE$:"normal", $_FONT_SIZE_BUFFER$:4, $defaultStyleProcessor$:function($cssDiv$$, $property$$27$$) {
    return $cssDiv$$.css($property$$27$$);
  }, $_parseUrl$:function($cssDiv$$1_url$$18$$) {
    return($cssDiv$$1_url$$18$$ = $cssDiv$$1_url$$18$$.css("background-image")) && -1 !== $cssDiv$$1_url$$18$$.indexOf("url(") ? $cssDiv$$1_url$$18$$.slice($cssDiv$$1_url$$18$$.indexOf("url(") + 4, $cssDiv$$1_url$$18$$.length - 1).replace(/"/g, "") : $cssDiv$$1_url$$18$$;
  }, $_buildCssBackgroundPropertiesString$:function($cssDiv$$2$$) {
    var $styleString$$3$$ = "";
    $cssDiv$$2$$.css("border-top-color") && ($styleString$$3$$ += "border-color: " + $cssDiv$$2$$.css("border-top-color") + ";");
    $cssDiv$$2$$.css("border-width") && $cssDiv$$2$$.css("border-style") && "none" != $cssDiv$$2$$.css("border-style") && ($styleString$$3$$ += "border-width: " + $cssDiv$$2$$.css("border-width") + ";");
    $cssDiv$$2$$.css("background-color") && ($styleString$$3$$ += "background-color: " + $cssDiv$$2$$.css("background-color") + ";");
    return $styleString$$3$$;
  }, $_buildTextCssPropertiesString$:function($cssDiv$$3$$, $ignoreProperties$$1$$) {
    var $styleString$$4$$ = "", $value$$187$$ = $cssDiv$$3$$.css("font-family");
    $value$$187$$ && $value$$187$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$ && ($styleString$$4$$ += "font-family: " + $value$$187$$.replace(/"/g, "'") + ";");
    $value$$187$$ = $cssDiv$$3$$.css("font-size");
    !$value$$187$$ || -1 < $value$$187$$.indexOf("px") && parseFloat($value$$187$$) < $DvtStyleProcessor$$.$_FONT_SIZE_BUFFER$ || $ignoreProperties$$1$$["font-size"] || ($styleString$$4$$ += "font-size: " + $value$$187$$ + ";");
    ($value$$187$$ = $cssDiv$$3$$.css("font-weight")) && $value$$187$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$ && ($styleString$$4$$ += "font-weight: " + $value$$187$$ + ";");
    ($value$$187$$ = $cssDiv$$3$$.css("color")) && $value$$187$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$ && !$ignoreProperties$$1$$.color && ($styleString$$4$$ += "color: " + $value$$187$$ + ";");
    ($value$$187$$ = $cssDiv$$3$$.css("font-style")) && $value$$187$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$ && ($styleString$$4$$ += "font-style: " + $value$$187$$ + ";");
    return $styleString$$4$$;
  }, $_mergeOptionsAndDivStyle$:function($cssDiv$$4$$, $optionsStyle_styleString$$5$$, $bIncludeBackgroundProps$$, $ignoreProperties$$2$$) {
    $ignoreProperties$$2$$ || ($ignoreProperties$$2$$ = {});
    if (!$cssDiv$$4$$) {
      return $optionsStyle_styleString$$5$$;
    }
    var $oldStyle$$;
    $optionsStyle_styleString$$5$$ && (($oldStyle$$ = $cssDiv$$4$$.attr("style")) ? $cssDiv$$4$$.attr("style", $oldStyle$$ + $optionsStyle_styleString$$5$$) : $cssDiv$$4$$.attr("style", $optionsStyle_styleString$$5$$));
    $optionsStyle_styleString$$5$$ = "";
    !0 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildTextCssPropertiesString$($cssDiv$$4$$, $ignoreProperties$$2$$));
    !1 !== $bIncludeBackgroundProps$$ && ($optionsStyle_styleString$$5$$ += this.$_buildCssBackgroundPropertiesString$($cssDiv$$4$$));
    $oldStyle$$ && $cssDiv$$4$$.attr("style", $oldStyle$$);
    return $optionsStyle_styleString$$5$$;
  }, $processStyles$:function($element$$69_styleClasses$$, $options$$293$$, $componentClasses_innerDummyDiv$$, $childClasses$$) {
    var $dummyDiv_outerDummyDiv$$ = $$$$16$$(document.createElement("div"));
    $dummyDiv_outerDummyDiv$$.attr("style", "display:none;");
    $element$$69_styleClasses$$.append($dummyDiv_outerDummyDiv$$);
    $element$$69_styleClasses$$ = "";
    for (var $i$$233$$ = 0;$i$$233$$ < $componentClasses_innerDummyDiv$$.length;$i$$233$$++) {
      $element$$69_styleClasses$$ = $element$$69_styleClasses$$ + $componentClasses_innerDummyDiv$$[$i$$233$$] + " ";
    }
    $dummyDiv_outerDummyDiv$$.attr("class", $element$$69_styleClasses$$);
    $componentClasses_innerDummyDiv$$ = $$$$16$$(document.createElement("div"));
    $dummyDiv_outerDummyDiv$$.append($componentClasses_innerDummyDiv$$);
    $componentClasses_innerDummyDiv$$.css("font-family", $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$);
    $componentClasses_innerDummyDiv$$.css("font-size", $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$);
    $componentClasses_innerDummyDiv$$.css("color", $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$);
    $componentClasses_innerDummyDiv$$.css("font-weight", $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$);
    $componentClasses_innerDummyDiv$$.css("font-style", $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$);
    for (var $styleClass$$2$$ in $childClasses$$) {
      $dummyDiv_outerDummyDiv$$ = $$$$16$$(document.createElement("div")), $dummyDiv_outerDummyDiv$$.addClass($styleClass$$2$$), $componentClasses_innerDummyDiv$$.append($dummyDiv_outerDummyDiv$$), $DvtStyleProcessor$$.$_processStyle$($options$$293$$, $dummyDiv_outerDummyDiv$$, $childClasses$$[$styleClass$$2$$]);
    }
  }, $_processStyle$:function($options$$294$$, $cssDiv$$5$$, $definition$$) {
    if ($definition$$ instanceof Array) {
      for (var $i$$234$$ = 0;$i$$234$$ < $definition$$.length;$i$$234$$++) {
        $DvtStyleProcessor$$.$_resolveStyle$($options$$294$$, $cssDiv$$5$$, $definition$$[$i$$234$$]);
      }
    } else {
      $DvtStyleProcessor$$.$_resolveStyle$($options$$294$$, $cssDiv$$5$$, $definition$$);
    }
  }, $_resolveStyle$:function($options$$295_path$$7$$, $cssDiv$$6$$, $definition$$1$$) {
    $options$$295_path$$7$$ = new $DvtJsonPath$$($options$$295_path$$7$$, $definition$$1$$.path);
    var $handler$$47_value$$188$$;
    $definition$$1$$.property && ($handler$$47_value$$188$$ = ($handler$$47_value$$188$$ = $DvtStyleProcessor$$[$definition$$1$$.property]) ? $handler$$47_value$$188$$($cssDiv$$6$$, $options$$295_path$$7$$.$getValue$()) : $DvtStyleProcessor$$.$defaultStyleProcessor$($cssDiv$$6$$, $definition$$1$$.property));
    null == $handler$$47_value$$188$$ || "string" == typeof $handler$$47_value$$188$$ && "" == $handler$$47_value$$188$$.replace(/^\s+/g, "") || $options$$295_path$$7$$.$setValue$($handler$$47_value$$188$$);
  }};
  $oj$$16$$.$__registerWidget$("oj.dvtBaseComponent", $$$$16$$.oj.baseComponent, {_ComponentCreate:function() {
    this._super();
    this.$_referenceDiv$ = $$$$16$$(document.createElement("div"));
    this.$_referenceDiv$.attr("style", "visibility:hidden;");
    this.element.append(this.$_referenceDiv$);
    this.$_context$ = new DvtContext(this.element[0], null, this.$_referenceDiv$[0]);
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_context$.setTooltipStyleClass("oj-dvt-tooltip");
    this.$_context$.setDatatipStyleClass("oj-dvt-datatip");
    $$$$16$$(document.body).hasClass("oj-hicontrast") && DvtAgent.setHighContrast(!0);
    this.element.attr("tabIndex", 0);
    this.$_component$ = this.$_CreateDvtComponent$(this.$_context$, this.$_HandleEvent$, this);
    this.$_context$.getStage().addChild(this.$_component$);
    this.$_ProcessStyles$();
    this.$_processTranslations$();
    this.$_LoadResources$();
    this.$_Render$();
    $oj$$16$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$16$$.proxy(this.$_handleResize$, this));
  }, refresh:function() {
    this._super();
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_processTranslations$();
    this.$_Render$();
  }, getNodeBySubId:function($locator$$16$$) {
    var $automation$$;
    this.$_component$ && this.$_component$.getAutomation && ($automation$$ = this.$_component$.getAutomation());
    return $automation$$ ? $automation$$.getDomElementForSubId($locator$$16$$.subId) : null;
  }, getSubIdByNode:function($node$$36$$) {
    var $automation$$1$$;
    this.$_component$ && this.$_component$.getAutomation && ($automation$$1$$ = this.$_component$.getAutomation());
    return $automation$$1$$ ? $automation$$1$$.getSubIdForDomElement($node$$36$$) : null;
  }, $_ProcessStyles$:function() {
    for (var $componentStyles$$ = this.$_GetComponentStyleClasses$(), $i$$235$$ = 0;$i$$235$$ < $componentStyles$$.length;$i$$235$$++) {
      this.element.addClass($componentStyles$$[$i$$235$$]);
    }
    $DvtStyleProcessor$$.$processStyles$(this.element, this.options, this.$_GetComponentStyleClasses$(), this.$_GetChildStyleClasses$());
  }, $_GetComponentStyleClasses$:function() {
    return["oj-dvtbase"];
  }, $_GetChildStyleClasses$:function() {
    return{};
  }, $_GetEventTypes$:function() {
    return[];
  }, $_GetTranslationMap$:function() {
    var $ret$$27$$ = {"DvtUtilBundle.CLEAR_SELECTION":this.$getResource$("labelClearSelection"), "DvtUtilBundle.STATE_SELECTED":this.$getResource$("stateSelected"), "DvtUtilBundle.STATE_UNSELECTED":this.$getResource$("stateUnselected"), "DvtUtilBundle.STATE_MAXIMIZED":this.$getResource$("stateMaximized"), "DvtUtilBundle.STATE_MINIMIZED":this.$getResource$("stateMinimized"), "DvtUtilBundle.STATE_EXPANDED":this.$getResource$("stateExpanded"), "DvtUtilBundle.STATE_COLLAPSED":this.$getResource$("stateCollapsed"), 
    "DvtUtilBundle.STATE_ISOLATED":this.$getResource$("stateIsolated"), "DvtUtilBundle.STATE_HIDDEN":this.$getResource$("stateHidden"), "DvtUtilBundle.STATE_VISIBLE":this.$getResource$("stateVisible"), "DvtUtilBundle.SCALING_SUFFIX_THOUSAND":this.$getResource$("labelScalingSuffixThousand"), "DvtUtilBundle.SCALING_SUFFIX_MILLION":this.$getResource$("labelScalingSuffixMillion"), "DvtUtilBundle.SCALING_SUFFIX_BILLION":this.$getResource$("labelScalingSuffixBillion"), "DvtUtilBundle.SCALING_SUFFIX_TRILLION":this.$getResource$("labelScalingSuffixTrillion"), 
    "DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":this.$getResource$("labelScalingSuffixQuadrillion")}, $monthNames$$2$$ = $oj$$16$$.$LocaleData$.$getMonthNames$("abbreviated");
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_JANUARY"] = $monthNames$$2$$[0];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_FEBRUARY"] = $monthNames$$2$$[1];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_MARCH"] = $monthNames$$2$$[2];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_APRIL"] = $monthNames$$2$$[3];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_MAY"] = $monthNames$$2$$[4];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_JUNE"] = $monthNames$$2$$[5];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_JULY"] = $monthNames$$2$$[6];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_AUGUST"] = $monthNames$$2$$[7];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"] = $monthNames$$2$$[8];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_OCTOBER"] = $monthNames$$2$$[9];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_NOVEMBER"] = $monthNames$$2$$[10];
    $ret$$27$$["DvtUtilBundle.MONTH_SHORT_DECEMBER"] = $monthNames$$2$$[11];
    return $ret$$27$$;
  }, $_GetTranslatedResource$:function($key$$80$$, $params$$17$$) {
    var $translatedResource$$ = this.$getResource$($key$$80$$);
    if ($params$$17$$) {
      for (var $paramMap$$ = {}, $i$$236$$ = 0;$i$$236$$ < $params$$17$$.length;$i$$236$$++) {
        $paramMap$$[$params$$17$$[$i$$236$$]] = "{" + $i$$236$$ + "}";
      }
      $translatedResource$$ = $oj$$16$$.$Translations$.$applyParameters$($translatedResource$$, $paramMap$$);
    }
    return $translatedResource$$;
  }, $_processTranslations$:function() {
    var $translationMap$$ = this.$_GetTranslationMap$();
    DvtBundle.addLocalizedStrings($translationMap$$);
  }, _destroy:function() {
    this.$_component$.destroy && this.$_component$.destroy();
    $oj$$16$$.$DomUtils$.$removeResizeListener$(this.element[0], $$$$16$$.proxy(this.$_handleResize$, this));
    this.element.children().remove();
    this.element.removeAttr("role").removeAttr("tabIndex");
    for (var $componentStyles$$1$$ = this.$_GetComponentStyleClasses$(), $i$$237$$ = 0;$i$$237$$ < $componentStyles$$1$$.length;$i$$237$$++) {
      this.element.removeClass($componentStyles$$1$$[$i$$237$$]);
    }
    this._super();
  }, _setOptions:function($options$$296$$) {
    this._superApply(arguments);
    if (!this.$_bUserDrivenChange$) {
      var $bRenderNeeded$$ = !1, $eventTypes$$ = this.$_GetEventTypes$();
      $$$$16$$.each($options$$296$$, function($key$$81$$) {
        if (0 > $eventTypes$$.indexOf($key$$81$$)) {
          return $bRenderNeeded$$ = !0, !1;
        }
      });
      $bRenderNeeded$$ && this.$_Render$();
    }
  }, _setOption:function($key$$82$$, $value$$190$$) {
    var $bSupportsOptionChange_newValue$$7$$ = this.$_SupportsOptionChangeEvent$($key$$82$$), $previousValue$$5$$ = this.options[$key$$82$$], $ret$$28$$ = this._superApply(arguments);
    $bSupportsOptionChange_newValue$$7$$ && ($bSupportsOptionChange_newValue$$7$$ = this.options[$key$$82$$], $oj$$16$$.$Object$.$__innerEquals$($previousValue$$5$$, $bSupportsOptionChange_newValue$$7$$) || this._trigger("optionChange", null, {option:$key$$82$$, previousValue:$previousValue$$5$$, value:$bSupportsOptionChange_newValue$$7$$, optionMetadata:{writeback:this.$_bUserDrivenChange$ ? "shouldWrite" : "shouldNotWrite"}}));
    return $ret$$28$$;
  }, $_CreateDvtComponent$:function() {
    return null;
  }, $_HandleEvent$:function() {
  }, $_handleResize$:function() {
    var $newWidth$$1$$ = this.element.width(), $newHeight$$1$$ = this.element.height();
    5 <= Math.abs($newWidth$$1$$ - this.$_width$) + Math.abs($newHeight$$1$$ - this.$_height$) && (this.$_component$.render(null, $newWidth$$1$$, $newHeight$$1$$), this.$_width$ = $newWidth$$1$$, this.$_height$ = $newHeight$$1$$);
  }, $_LoadResources$:function() {
  }, $_Render$:function() {
    this.$_context$.isReadyToRender() ? (this.$_width$ = this.element.width(), this.$_height$ = this.element.height(), this.$_component$.render(this.options, this.$_width$, this.$_height$)) : $oj$$16$$.$Logger$.error(this.$getResource$("notReadyToRender").summary);
  }, $_SupportsOptionChangeEvent$:function() {
    return!1;
  }, $_UserOptionChange$:function($key$$84$$, $value$$191$$) {
    this.$_bUserDrivenChange$ = !0;
    this.option($key$$84$$, $value$$191$$);
    this.$_bUserDrivenChange$ = !1;
  }});
  $oj$$16$$.$ShapeAttributeGroupHandler$ = function $$oj$$16$$$$ShapeAttributeGroupHandler$$($matchRules$$2$$) {
    this.Init($matchRules$$2$$);
  };
  $goog$exportPath_$$("ShapeAttributeGroupHandler", $oj$$16$$.$ShapeAttributeGroupHandler$, $oj$$16$$);
  $oj$$16$$.$Object$.$createSubclass$($oj$$16$$.$ShapeAttributeGroupHandler$, $oj$$16$$.$AttributeGroupHandler$, "oj.ShapeAttributeGroupHandler");
  $oj$$16$$.$ShapeAttributeGroupHandler$.$_attributeValues$ = "square circle diamond plus triangleDown triangleUp human".split(" ");
  $oj$$16$$.$ShapeAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$16$$$$ShapeAttributeGroupHandler$$$$getValueRamp$$() {
    return $oj$$16$$.$ShapeAttributeGroupHandler$.$_attributeValues$.slice();
  };
  $oj$$16$$.$ColorAttributeGroupHandler$ = function $$oj$$16$$$$ColorAttributeGroupHandler$$($matchRules$$3$$) {
    this.$_attributeValues$ = [];
    if ($$$$16$$(document.body).hasClass("oj-hicontrast")) {
      this.$_attributeValues$ = $oj$$16$$.$ColorAttributeGroupHandler$.$_defaultColors$.slice();
    } else {
      var $attrGpsDiv$$ = $$$$16$$(document.createElement("div"));
      $attrGpsDiv$$.attr("style", "display:none;");
      $attrGpsDiv$$.attr("id", "attrGps");
      $$$$16$$(document.body).append($attrGpsDiv$$);
      for (var $i$$238$$ = 0;$i$$238$$ < $oj$$16$$.$ColorAttributeGroupHandler$.$_styleClasses$.length;$i$$238$$++) {
        var $childDiv$$ = $$$$16$$(document.createElement("div"));
        $childDiv$$.addClass($oj$$16$$.$ColorAttributeGroupHandler$.$_styleClasses$[$i$$238$$]);
        $attrGpsDiv$$.append($childDiv$$);
        this.$_attributeValues$.push($childDiv$$.css("color"));
      }
      $attrGpsDiv$$.remove();
    }
    this.Init($matchRules$$3$$);
  };
  $goog$exportPath_$$("ColorAttributeGroupHandler", $oj$$16$$.$ColorAttributeGroupHandler$, $oj$$16$$);
  $oj$$16$$.$Object$.$createSubclass$($oj$$16$$.$ColorAttributeGroupHandler$, $oj$$16$$.$AttributeGroupHandler$, "oj.ColorAttributeGroupHandler");
  $oj$$16$$.$ColorAttributeGroupHandler$.$_styleClasses$ = "oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
  $oj$$16$$.$ColorAttributeGroupHandler$.$_defaultColors$ = "#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");
  $oj$$16$$.$ColorAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$16$$$$ColorAttributeGroupHandler$$$$getValueRamp$$() {
    return this.$_attributeValues$.slice();
  };
  $DvtJsonPath$$.prototype.$_resolveLeafObjectAndProperty$ = function $$DvtJsonPath$$$$$_resolveLeafObjectAndProperty$$($root$$2$$, $path$$9$$, $delimiter$$, $createIfMissing$$) {
    for (var $result$$25$$ = {};$root$$2$$ && -1 < $path$$9$$.indexOf($delimiter$$);) {
      var $subProperty$$ = $path$$9$$.substring(0, $path$$9$$.indexOf($delimiter$$));
      $createIfMissing$$ && void 0 === $root$$2$$[$subProperty$$] && ($root$$2$$[$subProperty$$] = {});
      $root$$2$$ = $root$$2$$[$subProperty$$];
      $path$$9$$ = $path$$9$$.substring($path$$9$$.indexOf($delimiter$$) + 1, $path$$9$$.length);
    }
    $root$$2$$ && ($result$$25$$.object = $root$$2$$, $result$$25$$.parameter = $path$$9$$);
    return $result$$25$$;
  };
  $DvtJsonPath$$.prototype.$_resolvePath$ = function $$DvtJsonPath$$$$$_resolvePath$$($createIfMissing$$1_result$$26$$) {
    void 0 === this.$_leaf$ && ($createIfMissing$$1_result$$26$$ = this.$_resolveLeafObjectAndProperty$(this.$_root$, this.$_path$, this.$_delimiter$, $createIfMissing$$1_result$$26$$), this.$_leaf$ = $createIfMissing$$1_result$$26$$.object, this.$_param$ = $createIfMissing$$1_result$$26$$.parameter);
  };
  $DvtJsonPath$$.prototype.$getValue$ = function $$DvtJsonPath$$$$$getValue$$() {
    this.$_resolvePath$(!1);
    return void 0 === this.$_leaf$ ? void 0 : this.$_leaf$[this.$_param$];
  };
  $DvtJsonPath$$.prototype.$setValue$ = function $$DvtJsonPath$$$$$setValue$$($value$$192$$) {
    this.$_resolvePath$(!0);
    this.$_leaf$[this.$_param$] !== $value$$192$$ && (this.$_leaf$[this.$_param$] = $value$$192$$);
  };
});
