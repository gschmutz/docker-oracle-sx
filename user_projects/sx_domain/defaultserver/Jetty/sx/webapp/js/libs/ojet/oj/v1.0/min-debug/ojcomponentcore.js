/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "jqueryui", "ojs/ojmessaging"], function($oj$$3$$, $$$$3$$) {
  function $_applyToComponents$$($subtreeRoot$$, $callback$$76$$) {
    $$$$3$$($subtreeRoot$$).find("." + $_OJ_COMPONENT_NODE_CLASS$$).each(function($index$$68$$, $elem$$12$$) {
      var $jelem$$ = $$$$3$$($elem$$12$$), $names$$ = $jelem$$.data($_OJ_WIDGET_NAMES_DATA$$);
      if (null != $names$$) {
        for (var $i$$66$$ = 0;$i$$66$$ < $names$$.length;$i$$66$$++) {
          var $instance$$1$$ = $jelem$$.data("oj-" + $names$$[$i$$66$$]);
          null != $instance$$1$$ && $callback$$76$$($instance$$1$$);
        }
      }
    });
  }
  function $__ojDynamicGetter$$($callback$$77$$) {
    this.$getCallback$ = function $this$$getCallback$$() {
      return $callback$$77$$;
    };
  }
  function $_defineDynamicProperty$$($self$$28$$, $originalDefaultValue$$, $constructorValue$$, $options$$103$$, $prop$$45$$, $getter$$, $contextCallback$$) {
    var $override$$ = $constructorValue$$, $replaced$$ = !1, $overriddenSubkeys$$ = {};
    delete $options$$103$$[$prop$$45$$];
    Object.defineProperty($options$$103$$, $prop$$45$$, {get:function() {
      if ($replaced$$ || null != $self$$28$$.$_settingNestedKey$) {
        return $override$$;
      }
      var $defaultVal$$ = $getter$$($contextCallback$$ ? $contextCallback$$() : $prop$$45$$);
      return $_mergeOptionLayers$$([$originalDefaultValue$$, $defaultVal$$, $override$$], $overriddenSubkeys$$);
    }, set:function($value$$66$$) {
      $override$$ = $value$$66$$;
      null != $self$$28$$.$_settingNestedKey$ ? $overriddenSubkeys$$[$self$$28$$.$_settingNestedKey$] = !0 : $replaced$$ = !0;
    }, enumerable:!0});
  }
  function $_mergeOptionLayers$$($values$$5$$, $overriddenSubkeys$$1$$) {
    for (var $result$$2$$ = void 0, $i$$67$$ = 0;$i$$67$$ < $values$$5$$.length;$i$$67$$++) {
      var $value$$67$$ = $values$$5$$[$i$$67$$];
      void 0 !== $value$$67$$ && ($result$$2$$ = $$$$3$$.isPlainObject($value$$67$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($result$$2$$) ? [$result$$2$$, $value$$67$$] : [$value$$67$$], $i$$67$$ == $values$$5$$.length - 1 ? null : $overriddenSubkeys$$1$$, null) : $value$$67$$);
    }
    return $result$$2$$;
  }
  function $_mergeObjectsWithExclusions$$($input$$1$$, $ignoreSubkeys$$, $basePath$$) {
    for (var $target$$73$$ = {}, $inputLength$$ = $input$$1$$.length, $inputIndex$$ = 0;$inputIndex$$ < $inputLength$$;$inputIndex$$++) {
      for (var $source$$7$$ = $input$$1$$[$inputIndex$$], $keys$$4$$ = Object.keys($source$$7$$), $i$$68$$ = 0;$i$$68$$ < $keys$$4$$.length;$i$$68$$++) {
        var $key$$26$$ = $keys$$4$$[$i$$68$$], $path$$6$$ = null == $ignoreSubkeys$$ ? null : null == $basePath$$ ? $key$$26$$ : $basePath$$ + "." + $key$$26$$;
        if (null == $ignoreSubkeys$$ || !$ignoreSubkeys$$[$path$$6$$]) {
          var $value$$68$$ = $source$$7$$[$key$$26$$];
          void 0 !== $value$$68$$ && ($target$$73$$[$key$$26$$] = $$$$3$$.isPlainObject($value$$68$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($target$$73$$[$key$$26$$]) ? [$target$$73$$[$key$$26$$], $value$$68$$] : [$value$$68$$], $ignoreSubkeys$$, $path$$6$$) : $value$$68$$);
        }
      }
    }
    return $target$$73$$;
  }
  $oj$$3$$.Components = {};
  $goog$exportPath_$$("Components", $oj$$3$$.Components, $oj$$3$$);
  $oj$$3$$.Components.$setDefaultOptions$ = function $$oj$$3$$$Components$$setDefaultOptions$$($options$$104$$) {
    $oj$$3$$.Components.$_defaultProperties$ = $$$$3$$.widget.extend($oj$$3$$.Components.$_defaultProperties$ || {}, $options$$104$$);
  };
  $goog$exportPath_$$("Components.setDefaultOptions", $oj$$3$$.Components.$setDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$getDefaultOptions$ = function $$oj$$3$$$Components$$getDefaultOptions$$() {
    return $oj$$3$$.Components.$_defaultProperties$ || {};
  };
  $goog$exportPath_$$("Components.getDefaultOptions", $oj$$3$$.Components.$getDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$createDynamicPropertyGetter$ = function $$oj$$3$$$Components$$createDynamicPropertyGetter$$($callback$$78$$) {
    return new $__ojDynamicGetter$$($callback$$78$$);
  };
  $goog$exportPath_$$("Components.createDynamicPropertyGetter", $oj$$3$$.Components.$createDynamicPropertyGetter$, $oj$$3$$);
  $oj$$3$$.Components.$getWidgetConstructor$ = function $$oj$$3$$$Components$$getWidgetConstructor$$($element$$12$$, $widgetName$$2$$) {
    var $jelem$$1$$ = $$$$3$$($element$$12$$);
    if (null == $widgetName$$2$$) {
      var $data$$45_func$$8$$ = $jelem$$1$$.data($_OJ_WIDGET_NAMES_DATA$$);
      $data$$45_func$$8$$ && ($widgetName$$2$$ = $data$$45_func$$8$$[0]);
    }
    return null != $widgetName$$2$$ && ($data$$45_func$$8$$ = $jelem$$1$$[$widgetName$$2$$], "function" === typeof $data$$45_func$$8$$) ? $data$$45_func$$8$$.bind($jelem$$1$$) : null;
  };
  $goog$exportPath_$$("Components.getWidgetConstructor", $oj$$3$$.Components.$getWidgetConstructor$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeAttached$ = function $$oj$$3$$$Components$$subtreeAttached$$($node$$5$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$5$$);
    $_applyToComponents$$($node$$5$$, function($instance$$2$$) {
      $instance$$2$$.$_NotifyAttached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeAttached", $oj$$3$$.Components.$subtreeAttached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeDetached$ = function $$oj$$3$$$Components$$subtreeDetached$$($node$$6$$) {
    $_applyToComponents$$($node$$6$$, function($instance$$3$$) {
      $instance$$3$$.$_NotifyDetached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeDetached", $oj$$3$$.Components.$subtreeDetached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeShown$ = function $$oj$$3$$$Components$$subtreeShown$$($node$$7$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$7$$);
    $_applyToComponents$$($node$$7$$, function() {
    });
  };
  $goog$exportPath_$$("Components.subtreeShown", $oj$$3$$.Components.$subtreeShown$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeHidden$ = function $$oj$$3$$$Components$$subtreeHidden$$($node$$8$$) {
    $_applyToComponents$$($node$$8$$, function() {
    });
  };
  $goog$exportPath_$$("Components.subtreeHidden", $oj$$3$$.Components.$subtreeHidden$, $oj$$3$$);
  $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$ = "data-oj-container";
  var $_OJ_WIDGET_NAMES_DATA$$ = "oj-component-names", $_OJ_COMPONENT_NODE_CLASS$$ = "oj-component-initnode";
  $$$$3$$.widget("oj.baseComponent", {options:{contextMenu:null, rootAttributes:void 0}, refresh:function() {
    this.$_propertyContext$ = null;
  }, _createWidget:function($options$$105$$, $element$$13$$) {
    this.$_originalDefaults$ = this.options || {};
    this.$_constructorOptions$ = $options$$105$$ || {};
    this._super($options$$105$$, $element$$13$$);
  }, $_SetRootAttributes$:function() {
    var $unsupportedAttrs_value$$69$$ = this.options.rootAttributes;
    if ($unsupportedAttrs_value$$69$$) {
      var $widget$$ = this.widget();
      if (null != $widget$$) {
        var $classValue_styleValue$$ = $unsupportedAttrs_value$$69$$["class"];
        $classValue_styleValue$$ && $widget$$.addClass($classValue_styleValue$$);
        if ($classValue_styleValue$$ = $unsupportedAttrs_value$$69$$.style) {
          var $currStyle$$ = $widget$$.attr("style");
          $currStyle$$ ? $widget$$.attr("style", $currStyle$$ + ";" + $classValue_styleValue$$) : $widget$$.attr("style", $classValue_styleValue$$);
        }
        $unsupportedAttrs_value$$69$$ = $$$$3$$.extend({}, $unsupportedAttrs_value$$69$$);
        delete $unsupportedAttrs_value$$69$$["class"];
        delete $unsupportedAttrs_value$$69$$.style;
        $widget$$.attr($unsupportedAttrs_value$$69$$);
        delete $unsupportedAttrs_value$$69$$.id;
        $unsupportedAttrs_value$$69$$ = Object.keys($unsupportedAttrs_value$$69$$);
        if ($unsupportedAttrs_value$$69$$.length) {
          throw Error("Unsupported values passed to rootAttributes option: " + $unsupportedAttrs_value$$69$$.toString());
        }
      }
    }
  }, _create:function() {
    this.$_SaveAttributes$(this.element);
    this._InitOptions(this.$_originalDefaults$, this.$_constructorOptions$);
    delete this.$_originalDefaults$;
    delete this.$_constructorOptions$;
    this._ComponentCreate();
    this.$_AfterCreate$();
  }, _InitOptions:function($originalDefaults$$, $constructorOptions$$) {
    this.$_setupDefaultOptions$($originalDefaults$$, $constructorOptions$$);
  }, _ComponentCreate:function() {
    this.activeable = $$$$3$$();
    this.element.addClass($_OJ_COMPONENT_NODE_CLASS$$);
    var $element$$inline_390$$ = this.element, $widgetName$$inline_391$$ = this.widgetName, $data$$inline_392$$ = $element$$inline_390$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_392$$ || ($data$$inline_392$$ = [], $element$$inline_390$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_392$$));
    0 > $data$$inline_392$$.indexOf($widgetName$$inline_391$$) && $data$$inline_392$$.push($widgetName$$inline_391$$);
  }, $_AfterCreate$:function() {
    this.$_SetRootAttributes$();
    this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
    this.$_setupContextMenu$();
  }, $_SaveAttributes$:function($element$$14$$) {
    var $self$$29$$ = this;
    this.$_savedAttributes$ = [];
    $$$$3$$.each($element$$14$$, function($index$$70$$, $ele$$1$$) {
      var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$1$$.attributes;
      $self$$29$$.$_savedAttributes$.push({element:$ele$$1$$, attributes:$saveAttributes$$});
      $$$$3$$.each($attributes$$10$$, function($index$$71$$, $attr$$10$$) {
        var $attrName$$ = $attr$$10$$.name;
        $saveAttributes$$[$attrName$$] = {attr:$attr$$10$$.value, prop:$$$$3$$($ele$$1$$).prop($attrName$$)};
      });
    });
  }, $_GetSavedAttributes$:function($element$$15$$) {
    var $savedAttributes$$ = this.$_savedAttributes$;
    $element$$15$$ = $element$$15$$[0];
    for (var $i$$69$$ = 0, $j$$7$$ = $savedAttributes$$.length;$i$$69$$ < $j$$7$$;$i$$69$$++) {
      var $curr$$ = $savedAttributes$$[$i$$69$$];
      if ($curr$$.element === $element$$15$$) {
        return $curr$$.attributes;
      }
    }
    return{};
  }, $_RestoreAttributes$:function() {
    $$$$3$$.each(this.$_savedAttributes$, function($index$$72$$, $savedAttr$$) {
      var $element$$16$$ = $$$$3$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
      if (1 === $element$$16$$.length) {
        for (var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$70$$ = 0, $j$$8$$ = $currAttr$$.length;$i$$70$$ < $j$$8$$;$i$$70$$++) {
          $currAttr$$[$i$$70$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$70$$].name);
        }
        $i$$70$$ = 0;
        for ($j$$8$$ = $removeAttr$$.length;$i$$70$$ < $j$$8$$;$i$$70$$++) {
          $element$$16$$.removeAttr($removeAttr$$[$i$$70$$]);
        }
        for (var $attribute$$1$$ in $attributes$$11$$) {
          $element$$16$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr);
        }
      }
    });
  }, $_GetTranslationsSectionName$:function() {
    return this.widgetFullName;
  }, $getTranslatedString$:function($key$$27$$, $var_args$$47$$) {
    var $params$$3$$ = {}, $pattern$$2$$;
    2 < arguments.length ? $params$$3$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$3$$ = arguments[1], "object" === typeof $params$$3$$ || $params$$3$$ instanceof Array || ($params$$3$$ = [$params$$3$$]));
    $pattern$$2$$ = this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$27$$);
    return null == $pattern$$2$$ ? $key$$27$$ : $oj$$3$$.$Translations$.$applyParameters$($pattern$$2$$.toString(), $params$$3$$);
  }, getNodeBySubId:function($locator$$) {
    return null == $locator$$ || null == $locator$$.subId ? this.element ? this.element[0] : null : null;
  }, getSubIdByNode:function() {
    return null;
  }, destroy:function() {
    this.$_unbindContextMenu$();
    this._super();
    this.element.removeClass($_OJ_COMPONENT_NODE_CLASS$$);
    this.widget().removeClass("oj-disabled");
    this.hoverable.removeClass("oj-hover");
    this.focusable.removeClass("oj-focus");
    this.activeable.removeClass("oj-active");
    var $element$$inline_394$$ = this.element, $index$$inline_397_widgetName$$inline_395$$ = this.widgetName, $data$$inline_396$$ = $element$$inline_394$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_396$$ && ($index$$inline_397_widgetName$$inline_395$$ = $data$$inline_396$$.indexOf($index$$inline_397_widgetName$$inline_395$$), 0 <= $index$$inline_397_widgetName$$inline_395$$ && ($data$$inline_396$$.splice($index$$inline_397_widgetName$$inline_395$$, 1), 0 === $data$$inline_396$$.length && $element$$inline_394$$.removeData($_OJ_WIDGET_NAMES_DATA$$)));
  }, option:function($optionName$$, $value$$70$$) {
    if (0 === arguments.length) {
      return $$$$3$$.widget.extend({}, this.options);
    }
    var $i$$71_key$$28$$ = arguments[0], $options$$106$$ = $i$$71_key$$28$$, $subkey$$1$$ = null, $flags$$3$$ = {};
    if ("string" === typeof $i$$71_key$$28$$) {
      var $options$$106$$ = {}, $parts$$3$$ = $i$$71_key$$28$$.split("."), $i$$71_key$$28$$ = $parts$$3$$.shift();
      if ($parts$$3$$.length) {
        var $subkey$$1$$ = $parts$$3$$.join("."), $curOption$$;
        try {
          1 < arguments.length && (this.$_settingNestedKey$ = $subkey$$1$$), $curOption$$ = $options$$106$$[$i$$71_key$$28$$] = $$$$3$$.widget.extend({}, this.options[$i$$71_key$$28$$]);
        } finally {
          this.$_settingNestedKey$ = null;
        }
        for ($i$$71_key$$28$$ = 0;$i$$71_key$$28$$ < $parts$$3$$.length - 1;$i$$71_key$$28$$++) {
          $curOption$$[$parts$$3$$[$i$$71_key$$28$$]] = $curOption$$[$parts$$3$$[$i$$71_key$$28$$]] || {}, $curOption$$ = $curOption$$[$parts$$3$$[$i$$71_key$$28$$]];
        }
        $i$$71_key$$28$$ = $parts$$3$$.pop();
        if (1 === arguments.length) {
          return void 0 === $curOption$$[$i$$71_key$$28$$] ? null : $curOption$$[$i$$71_key$$28$$];
        }
        $curOption$$[$i$$71_key$$28$$] = $value$$70$$;
      } else {
        if (1 === arguments.length) {
          return void 0 === this.options[$i$$71_key$$28$$] ? null : this.options[$i$$71_key$$28$$];
        }
        $options$$106$$[$i$$71_key$$28$$] = $value$$70$$;
      }
      $flags$$3$$ = arguments[2] || $flags$$3$$;
    } else {
      $flags$$3$$ = arguments[1] || $flags$$3$$;
    }
    null != $subkey$$1$$ && ($flags$$3$$ = $$$$3$$.widget.extend({}, $flags$$3$$, {subkey:$subkey$$1$$}));
    this._setOptions($options$$106$$, $flags$$3$$);
    return this;
  }, _setOptions:function($options$$107$$, $flags$$4$$) {
    for (var $key$$29$$ in $options$$107$$) {
      this._setOption($key$$29$$, $options$$107$$[$key$$29$$], $flags$$4$$);
    }
    return this;
  }, _setOption:function($key$$30$$, $value$$71$$, $flags$$5$$) {
    if ("disabled" === $key$$30$$) {
      this.options[$key$$30$$] = $value$$71$$, this.widget().toggleClass("oj-disabled", !!$value$$71$$).attr("aria-disabled", $value$$71$$), $value$$71$$ && (this.hoverable.removeClass("oj-hover"), this.focusable.removeClass("oj-focus"), this.activeable || (this.activeable = $$$$3$$()), this.activeable.removeClass("oj-active"));
    } else {
      try {
        var $subkey$$2$$ = null == $flags$$5$$ ? null : $flags$$5$$.subkey;
        null != $subkey$$2$$ && (this.$_settingNestedKey$ = $subkey$$2$$);
        this._super($key$$30$$, $value$$71$$);
      } finally {
        this.$_settingNestedKey$ = null;
      }
      "contextMenu" === $key$$30$$ && this.$_setupContextMenu$();
    }
    return this;
  }, $_setupContextMenu$:function() {
    this.$_unbindContextMenu$();
    var $menu$$ = this.options.contextMenu;
    $menu$$ || ($menu$$ = this.element.attr("contextmenu")) && ($menu$$ = "#" + $menu$$);
    $menu$$ && ($menu$$ = $$$$3$$($menu$$).data("oj-ojMenu"));
    if ($menu$$) {
      var $self$$30$$ = this, $widget$$1$$ = this.widget();
      $widget$$1$$ && $widget$$1$$.on("keydown" + this.$contextMenuEventNamespace$ + " contextmenu" + this.$contextMenuEventNamespace$, function($event$$14$$) {
        return "contextmenu" === $event$$14$$.type || 121 == $event$$14$$.which && $event$$14$$.shiftKey ? ($self$$30$$._OpenContextMenu($menu$$, $event$$14$$), !1) : !0;
      });
    }
  }, $_unbindContextMenu$:function() {
    var $widget$$2$$ = this.widget();
    $widget$$2$$ && $widget$$2$$.off(this.$contextMenuEventNamespace$);
  }, _OpenContextMenu:function($menu$$1$$, $event$$15$$) {
    $menu$$1$$.open($event$$15$$, {launcher:this.element, initialFocus:"menu"});
  }, _hoverable:function($element$$17$$) {
    this.hoverable = this.hoverable.add($element$$17$$);
    this._on($element$$17$$, {mouseenter:function($event$$16$$) {
      $$$$3$$($event$$16$$.currentTarget).addClass("oj-hover");
    }, mouseleave:function($event$$17$$) {
      $$$$3$$($event$$17$$.currentTarget).removeClass("oj-hover");
    }});
  }, _focusable:function($element$$18$$) {
    this.focusable = this.focusable.add($element$$18$$);
    this._on($element$$18$$, {focusin:function($event$$18$$) {
      $$$$3$$($event$$18$$.currentTarget).addClass("oj-focus");
    }, focusout:function($event$$19$$) {
      $$$$3$$($event$$19$$.currentTarget).removeClass("oj-focus");
    }});
  }, $_activeable$:function($element$$19$$) {
    this.activeable = this.activeable.add($element$$19$$);
    this._on($element$$19$$, {mousedown:function($event$$20$$) {
      $$$$3$$($event$$20$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$21$$) {
      $$$$3$$($event$$21$$.currentTarget).removeClass("oj-active");
    }});
  }, $getResource$:function($key$$31$$) {
    return this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$31$$);
  }, $_GetReadingDirection$:function() {
    var $dir$$ = document.documentElement.getAttribute("dir");
    $dir$$ && ($dir$$ = $dir$$.toLowerCase());
    return "rtl" === $dir$$ ? "rtl" : "ltr";
  }, $_NotifyAttached$:function() {
    this.$_propertyContext$ = null;
  }, $_NotifyDetached$:function() {
    this.$_propertyContext$ = null;
  }, $_NotifyShown$:function() {
  }, $_NotifyHidden$:function() {
  }, $_IsEffectivelyDisabled$:function() {
    return this.options.disabled || this.$_ancestorDisabled$ ? !0 : !1;
  }, $__setAncestorComponentDisabled$:function($disabled$$) {
    this.$_ancestorDisabled$ = $disabled$$;
  }, $_getTranslationSectionLoader$:function() {
    var $sectionNames$$ = [], $self$$31$$ = this, $index$$73$$ = 0;
    this.$_traverseWidgetHierarchy$(function($name$$63_proto$$1$$) {
      $name$$63_proto$$1$$ = 0 == $index$$73$$ ? $self$$31$$.$_GetTranslationsSectionName$() : $name$$63_proto$$1$$.widgetFullName;
      $index$$73$$++;
      var $section$$ = $oj$$3$$.$Translations$.$getComponentTranslations$($name$$63_proto$$1$$);
      null == $section$$ || $$$$3$$.isEmptyObject($section$$) || $sectionNames$$.push($name$$63_proto$$1$$);
    });
    var $count$$14$$ = $sectionNames$$.length;
    return 0 < $count$$14$$ ? function() {
      if (1 == $count$$14$$) {
        return $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[0]);
      }
      for (var $trs$$ = {}, $i$$72$$ = $count$$14$$ - 1;0 <= $i$$72$$;$i$$72$$--) {
        $$$$3$$.widget.extend($trs$$, $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[$i$$72$$]));
      }
      return $trs$$;
    } : null;
  }, $_getDynamicPropertyContext$:function() {
    if (!this.$_propertyContext$) {
      var $c$$19$$ = {};
      this.$_propertyContext$ = $c$$19$$;
      for (var $elem$$inline_399$$ = this.element[0], $containers$$inline_400$$ = [];$elem$$inline_399$$;) {
        var $ga$$inline_401_name$$inline_402$$ = $elem$$inline_399$$.getAttribute, $ga$$inline_401_name$$inline_402$$ = $ga$$inline_401_name$$inline_402$$ ? $ga$$inline_401_name$$inline_402$$.call($elem$$inline_399$$, $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$) : null;
        null != $ga$$inline_401_name$$inline_402$$ && $containers$$inline_400$$.push($ga$$inline_401_name$$inline_402$$);
        $elem$$inline_399$$ = $elem$$inline_399$$.parentNode;
      }
      $c$$19$$.containers = $containers$$inline_400$$;
    }
    return this.$_propertyContext$;
  }, $_setupDefaultOptions$:function($originalDefaults$$1$$, $constructorOptions$$1$$) {
    var $options$$108$$ = this.options, $translationLoader$$ = this.$_getTranslationSectionLoader$(), $currVal$$ = $constructorOptions$$1$$[$_OJ_TRANSLATIONS_OPTION$$];
    null == $translationLoader$$ || void 0 !== $currVal$$ && !$$$$3$$.isPlainObject($currVal$$) || $_defineDynamicProperty$$(this, void 0, $constructorOptions$$1$$[$_OJ_TRANSLATIONS_OPTION$$], $options$$108$$, $_OJ_TRANSLATIONS_OPTION$$, $translationLoader$$);
    this.$_loadGlobalDefaultOptions$($originalDefaults$$1$$, $constructorOptions$$1$$);
  }, $_loadGlobalDefaultOptions$:function($originalDefaults$$2$$, $constructorOptions$$2$$) {
    var $options$$109$$ = this.options, $defaults$$ = {}, $widgetHierNames$$ = [];
    this.$_traverseWidgetHierarchy$(function($proto$$2$$) {
      $widgetHierNames$$.push($proto$$2$$.widgetName);
    });
    var $allProperties_contextCallback$$1$$ = $oj$$3$$.Components.$getDefaultOptions$();
    $widgetHierNames$$.push("default");
    for (var $i$$73_val$$19$$ = $widgetHierNames$$.length - 1;0 <= $i$$73_val$$19$$;$i$$73_val$$19$$--) {
      var $callback$$79_defaultVal$$1_props$$3$$ = $allProperties_contextCallback$$1$$[$widgetHierNames$$[$i$$73_val$$19$$]];
      void 0 !== $callback$$79_defaultVal$$1_props$$3$$ && ($defaults$$ = $$$$3$$.widget.extend($defaults$$, $callback$$79_defaultVal$$1_props$$3$$));
    }
    if (!$$$$3$$.isEmptyObject($defaults$$)) {
      var $self$$32$$ = this, $allProperties_contextCallback$$1$$ = function $$allProperties_contextCallback$$1$$$() {
        return $self$$32$$.$_getDynamicPropertyContext$();
      }, $prop$$46$$;
      for ($prop$$46$$ in $defaults$$) {
        if ($i$$73_val$$19$$ = $constructorOptions$$2$$[$prop$$46$$], void 0 === $i$$73_val$$19$$ || $$$$3$$.isPlainObject($i$$73_val$$19$$)) {
          $callback$$79_defaultVal$$1_props$$3$$ = $defaults$$[$prop$$46$$], null != $callback$$79_defaultVal$$1_props$$3$$ && $callback$$79_defaultVal$$1_props$$3$$ instanceof $__ojDynamicGetter$$ ? ($callback$$79_defaultVal$$1_props$$3$$ = $callback$$79_defaultVal$$1_props$$3$$.$getCallback$(), $$$$3$$.isFunction($callback$$79_defaultVal$$1_props$$3$$) ? $_defineDynamicProperty$$(this, $originalDefaults$$2$$[$prop$$46$$], $i$$73_val$$19$$, $options$$109$$, $prop$$46$$, $callback$$79_defaultVal$$1_props$$3$$, 
          $allProperties_contextCallback$$1$$) : $oj$$3$$.$Logger$.error("Dynamic getter for property %s is not a function", $prop$$46$$)) : $options$$109$$[$prop$$46$$] = $_mergeOptionLayers$$([$originalDefaults$$2$$[$prop$$46$$], $callback$$79_defaultVal$$1_props$$3$$, $i$$73_val$$19$$]);
        }
      }
    }
  }, $_traverseWidgetHierarchy$:function($callback$$80$$) {
    for (var $proto$$3$$ = this.constructor.prototype;null != $proto$$3$$ && "oj" === $proto$$3$$.namespace;) {
      $callback$$80$$($proto$$3$$), $proto$$3$$ = Object.getPrototypeOf($proto$$3$$);
    }
  }});
  $oj$$3$$.$__registerWidget$ = function $$oj$$3$$$$__registerWidget$$($name$$65_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$) {
    $$$$3$$.widget($name$$65_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$);
    if ("oj.oj" === $name$$65_namespace$$3$$.substring(0, 5) || "oj._oj" === $name$$65_namespace$$3$$.substring(0, 6)) {
      $base$$3_nameArray_simpleName$$ = $name$$65_namespace$$3$$.split(".");
      $name$$65_namespace$$3$$ = $base$$3_nameArray_simpleName$$[0];
      $base$$3_nameArray_simpleName$$ = $base$$3_nameArray_simpleName$$[1];
      var $fullName$$ = $name$$65_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$;
      $$$$3$$.expr[":"][("_" === $base$$3_nameArray_simpleName$$.substring(0, 1) ? "_" + $name$$65_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(3) : $name$$65_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(2)).toLowerCase()] = function $$$$$3$$$expr$__1$_$$base$$3_nameArray_simpleName$$$substring$_$$name$$65_namespace$$3$$$__2$$base$$3_nameArray_simpleName$$$substring$$name$$65_namespace$$3$$$__3$$base$$3_nameArray_simpleName$$$substring$toLowerCase$($elem$$14$$) {
        return!!$$$$3$$.data($elem$$14$$, $fullName$$);
      };
    }
  };
  var $_OJ_TRANSLATIONS_OPTION$$ = "translations", $_OJ_TRANSLATIONS_PREFIX$$ = $_OJ_TRANSLATIONS_OPTION$$ + ".";
  $oj$$3$$.$DomUtils$ = {};
  $oj$$3$$.$DomUtils$.$_HTML_START_TAG$ = "\x3chtml\x3e";
  $oj$$3$$.$DomUtils$.$_HTML_END_TAG$ = "\x3c/html\x3e";
  $oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, A:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1, href:1};
  $oj$$3$$.$DomUtils$.$SURROGATE_ID$ = "data-oj-surrogateid";
  $oj$$3$$.$DomUtils$.$isHTMLContent$ = function $$oj$$3$$$$DomUtils$$$isHTMLContent$$($content$$4$$) {
    return 0 === $content$$4$$.indexOf($oj$$3$$.$DomUtils$.$_HTML_START_TAG$) && $content$$4$$.lastIndexOf($oj$$3$$.$DomUtils$.$_HTML_END_TAG$) === $content$$4$$.length - 7 ? !0 : !1;
  };
  $oj$$3$$.$DomUtils$.$cleanHtml$ = function $$oj$$3$$$$DomUtils$$$cleanHtml$$($value$$72$$) {
    var $offSpan$$ = $$$$3$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$72$$) && 0 <= $value$$72$$.indexOf("\x3c") && $oj$$3$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$;
  };
  $oj$$3$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$3$$$$DomUtils$$$_cleanElementHtml$$($node$$10$$) {
    for (var $children$$ = $node$$10$$.childNodes, $child$$1$$, $attrs$$15$$, $attr$$11$$, $childHasAttr$$, $i$$74$$, $count$$15$$ = $children$$.length - 1;0 <= $count$$15$$;) {
      if (($child$$1$$ = $children$$.item($count$$15$$)) && 1 === $child$$1$$.nodeType) {
        if ($oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          $attrs$$15$$ = $child$$1$$.attributes;
          for ($i$$74$$ = $attrs$$15$$.length - 1;0 <= $i$$74$$;$i$$74$$--) {
            $attr$$11$$ = $attrs$$15$$[$i$$74$$], ($childHasAttr$$ = void 0 !== $$$$3$$($child$$1$$).attr($attr$$11$$.name)) && ($oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$11$$.name] || $child$$1$$.removeAttribute($attr$$11$$.nodeName));
          }
          $oj$$3$$.$DomUtils$.$_cleanElementHtml$($child$$1$$);
        } else {
          $child$$1$$ && $node$$10$$.removeChild($child$$1$$);
        }
      }
      $count$$15$$--;
    }
  };
  $oj$$3$$.$DomUtils$.$isAncestor$ = function $$oj$$3$$$$DomUtils$$$isAncestor$$($ancestorNode$$, $node$$11$$) {
    $oj$$3$$.$Assert$.$assertDomElement$($ancestorNode$$);
    $oj$$3$$.$Assert$.$assertDomElement$($node$$11$$);
    var $jump_surrogateId$$, $parentNode$$1$$;
    1 === $node$$11$$.nodeType && $node$$11$$.hasAttribute($oj$$3$$.$DomUtils$.$SURROGATE_ID$) ? ($jump_surrogateId$$ = $node$$11$$.getAttribute($oj$$3$$.$DomUtils$.$SURROGATE_ID$), $jump_surrogateId$$ = $$$$3$$("#" + $jump_surrogateId$$), $parentNode$$1$$ = 0 < $jump_surrogateId$$.length ? $jump_surrogateId$$[0] : $node$$11$$.parentNode) : $parentNode$$1$$ = $node$$11$$.parentNode;
    for (;$parentNode$$1$$;) {
      if ($parentNode$$1$$ == $ancestorNode$$) {
        return!0;
      }
      1 === $parentNode$$1$$.nodeType && $parentNode$$1$$.hasAttribute($oj$$3$$.$DomUtils$.$SURROGATE_ID$) ? ($jump_surrogateId$$ = $parentNode$$1$$.getAttribute($oj$$3$$.$DomUtils$.$SURROGATE_ID$), $jump_surrogateId$$ = $$$$3$$("#" + $jump_surrogateId$$), $parentNode$$1$$ = 0 < $jump_surrogateId$$.length ? $jump_surrogateId$$[0] : $parentNode$$1$$.parentNode) : $parentNode$$1$$ = $parentNode$$1$$.parentNode;
    }
    return!1;
  };
  $oj$$3$$.$DomUtils$.$isAncestorOrSelf$ = function $$oj$$3$$$$DomUtils$$$isAncestorOrSelf$$($ancestorNode$$1$$, $node$$12$$) {
    $oj$$3$$.$Assert$.$assertDomElement$($ancestorNode$$1$$);
    $oj$$3$$.$Assert$.$assertDomElement$($node$$12$$);
    return $node$$12$$ == $ancestorNode$$1$$ ? !0 : $oj$$3$$.$DomUtils$.$isAncestor$($ancestorNode$$1$$, $node$$12$$);
  };
  $oj$$3$$.$DomUtils$.$addResizeListener$ = function $$oj$$3$$$$DomUtils$$$addResizeListener$$($elem$$15$$, $listener$$32$$) {
    var $jelem$$2$$ = $$$$3$$($elem$$15$$), $tracker$$ = $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null == $tracker$$ && ($tracker$$ = new $oj$$3$$.$DomUtils$.$_ResizeTracker$($elem$$15$$), $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$, $tracker$$), $tracker$$.start());
    $tracker$$.addListener($listener$$32$$);
  };
  $oj$$3$$.$DomUtils$.$removeResizeListener$ = function $$oj$$3$$$$DomUtils$$$removeResizeListener$$($elem$$16$$, $listener$$33$$) {
    var $jelem$$3$$ = $$$$3$$($elem$$16$$), $tracker$$1$$ = $jelem$$3$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null != $tracker$$1$$ && ($tracker$$1$$.removeListener($listener$$33$$), $tracker$$1$$.isEmpty() && ($tracker$$1$$.stop(), $jelem$$3$$.removeData($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$)));
  };
  $oj$$3$$.$DomUtils$.$fixResizeListeners$ = function $$oj$$3$$$$DomUtils$$$fixResizeListeners$$($subtreeRoot$$1$$) {
    $$$$3$$($subtreeRoot$$1$$).find(".oj-helper-detect-expansion").parent().each(function($index$$74$$, $div$$1$$) {
      var $tracker$$2$$ = $$$$3$$($div$$1$$).data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
      null != $tracker$$2$$ && $tracker$$2$$.$checkSize$(!1);
    });
  };
  $oj$$3$$.$DomUtils$.$isMetaKeyPressed$ = function $$oj$$3$$$$DomUtils$$$isMetaKeyPressed$$($evt$$16$$) {
    void 0 === $oj$$3$$.$DomUtils$.$_isMac$ && ($oj$$3$$.$DomUtils$.$_isMac$ = navigator && navigator.userAgent ? 0 <= navigator.userAgent.toLowerCase().indexOf("mac os") : !1);
    return $oj$$3$$.$DomUtils$.$_isMac$ ? $evt$$16$$.metaKey : $evt$$16$$.ctrlKey;
  };
  $oj$$3$$.$DomUtils$.$_invokeAfterPaint$ = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($fn$$5$$) {
    return window.setTimeout($fn$$5$$, 0);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$ = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function($id$$10$$) {
    return window.clearTimeout($id$$10$$);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_ResizeTracker$ = function $$oj$$3$$$$DomUtils$$$_ResizeTracker$$($div$$2$$) {
    this.$_listeners$ = $$$$3$$.Callbacks();
    this.addListener = function $this$addListener$($listener$$34$$) {
      this.$_listeners$.add($listener$$34$$);
    };
    this.removeListener = function $this$removeListener$($listener$$35$$) {
      this.$_listeners$.remove($listener$$35$$);
    };
    this.isEmpty = function $this$isEmpty$() {
      return this.$_listeners$.empty();
    };
    this.start = function $this$start$() {
      this.$_scrollListener$ = this.$_handleScroll$.bind(this);
      if ($div$$2$$.attachEvent) {
        this.$_resizeListener$ = this.$_handleResize$.bind(this), $div$$2$$.attachEvent("onresize", this.$_resizeListener$);
      } else {
        var $firstChild$$ = $div$$2$$.childNodes[0], $expDiv$$ = this.$_detectExpansion$ = document.createElement("div");
        $expDiv$$.className = "oj-helper-detect-expansion";
        var $cotrDiv_expansionChild$$ = document.createElement("div");
        $expDiv$$.appendChild($cotrDiv_expansionChild$$);
        $div$$2$$.insertBefore($expDiv$$, $firstChild$$);
        $expDiv$$.addEventListener("scroll", this.$_scrollListener$, !1);
        $cotrDiv_expansionChild$$ = this.$_detectContraction$ = document.createElement("div");
        $cotrDiv_expansionChild$$.className = "oj-helper-detect-contraction";
        var $contractionChild$$ = document.createElement("div");
        $contractionChild$$.style.width = "200%";
        $contractionChild$$.style.height = "200%";
        $cotrDiv_expansionChild$$.appendChild($contractionChild$$);
        $div$$2$$.insertBefore($cotrDiv_expansionChild$$, $firstChild$$);
        $cotrDiv_expansionChild$$.addEventListener("scroll", this.$_scrollListener$, !1);
        null != $expDiv$$.offsetParent && this.$_adjust$($expDiv$$.offsetWidth, $expDiv$$.offsetHeight);
      }
    };
    this.stop = function $this$stop$() {
      null != this.$_detectExpansion$ ? (this.$_detectExpansion$.removeEventListener("scroll", this.$_scrollListener$), this.$_detectContraction$.removeEventListener("scroll", this.$_scrollListener$), $div$$2$$.removeChild(this.$_detectExpansion$), $div$$2$$.removeChild(this.$_detectContraction$)) : $div$$2$$.detachEvent("onresize", this.$_resizeListener$);
    };
    this.$checkSize$ = function $this$$checkSize$$($checkScrollPos$$) {
      var $expDiv$$1$$ = this.$_detectExpansion$;
      if (null != $expDiv$$1$$.offsetParent) {
        var $newWidth$$ = $expDiv$$1$$.offsetWidth, $newHeight$$ = $expDiv$$1$$.offsetHeight;
        if (this.$_oldWidth$ !== $newWidth$$ || this.$_oldHeight$ !== $newHeight$$) {
          this.$_retrySetScroll$ = 2;
          this.$_adjust$($newWidth$$, $newHeight$$);
          void 0 !== this.$_invokeId$ && $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$(this.$_invokeId$);
          var $self$$33$$ = this, $listeners$$ = this.$_listeners$;
          this.$_invokeId$ = $oj$$3$$.$DomUtils$.$_invokeAfterPaint$(function() {
            $self$$33$$.$_invokeId$ = void 0;
            $listeners$$.fire($newWidth$$, $newHeight$$);
          });
        } else {
          $checkScrollPos$$ && 0 < this.$_retrySetScroll$ && (0 == $expDiv$$1$$.scrollLeft || 0 == $expDiv$$1$$.scrollTop) && (this.$_retrySetScroll$--, this.$_adjust$($newWidth$$, $newHeight$$));
        }
      }
    };
    this.$_handleScroll$ = function $this$$_handleScroll$$($evt$$17$$) {
      $evt$$17$$.stopPropagation();
      this.$checkSize$(!0);
    };
    this.$_handleResize$ = function $this$$_handleResize$$() {
      this.$_listeners$.fire($div$$2$$.offsetWidth, $div$$2$$.offsetHeight);
    };
    this.$_adjust$ = function $this$$_adjust$$($width$$12$$, $height$$11$$) {
      this.$_oldWidth$ = $width$$12$$;
      this.$_oldHeight$ = $height$$11$$;
      var $expansionChild$$1$$ = this.$_detectExpansion$.firstChild;
      $expansionChild$$1$$.style.width = $width$$12$$ + 1 + "px";
      $expansionChild$$1$$.style.height = $height$$11$$ + 1 + "px";
      this.$_detectExpansion$.scrollLeft = 1;
      this.$_detectExpansion$.scrollTop = 1;
      this.$_detectContraction$.scrollLeft = $width$$12$$;
      this.$_detectContraction$.scrollTop = $height$$11$$;
    };
  };
  $oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$ = "_ojResizeTracker";
  $oj$$3$$.$ComponentMessaging$ = function $$oj$$3$$$$ComponentMessaging$$($component$$) {
    this.Init($component$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentMessaging$, $oj$$3$$.$Object$, "oj.ComponentMessaging");
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$ = {NONE:"none", $NOTEWINDOW$:"notewindow", $PLACEHOLDER$:"placeholder"};
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$ = {};
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$registerMessagingStrategy$$($type$$63$$, $strategyConstructorCallback$$) {
    $type$$63$$ && "function" === typeof $strategyConstructorCallback$$ && ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$63$$] = $strategyConstructorCallback$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.Init = function $$oj$$3$$$$ComponentMessaging$$$Init$($component$$1$$) {
    $oj$$3$$.$ComponentMessaging$.$superclass$.Init.call(this);
    this.$_component$ = $component$$1$$;
    this.$_activated$ = !1;
    this.$_initializeMessagingStrategies$();
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$activate$ = function $$oj$$3$$$$ComponentMessaging$$$$activate$$($launcher$$, $content$$5$$) {
    var $that$$ = this;
    $oj$$3$$.$Assert$.$assertObject$($content$$5$$);
    this.$_launcher$ = $launcher$$;
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$5$$);
    this.$_activated$ ? this.$_reactivate$() : ($$$$3$$.each(this.$_strategies$, function($i$$75$$, $strategy$$) {
      $strategy$$.$activate$($that$$);
    }), this.$_activated$ = !0);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.update = function $$oj$$3$$$$ComponentMessaging$$$update$($content$$6$$) {
    $oj$$3$$.$Assert$.$assertObject$($content$$6$$);
    $oj$$3$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$6$$);
    this.$_activated$ && $$$$3$$.each(this.$_strategies$, function($i$$76$$, $strategy$$1$$) {
      $strategy$$1$$.update();
    });
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$deactivate$$() {
    $$$$3$$.each(this.$_strategies$, function($i$$77$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$();
    });
    this.$_activated$ = !1;
    this.$_launcher$ = this.$_component$ = null;
    this.$_strategies$ = {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$64$$, $options$$110$$) {
    return new ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$64$$] || $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE])($options$$110$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getComponent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getComponent$$() {
    return this.$_component$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getLauncher$ = function $$oj$$3$$$$ComponentMessaging$$$$_getLauncher$$() {
    return this.$_launcher$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getMessagingContent$$() {
    return this.$_messagingContent$ || {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$3$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $displayTypes$$, $displayType_key$$32$$, $compPH$$ = this.$_component$.options.placeholder, $artifact$$, $keys$$5$$, $i$$78$$, $j$$9$$, $messagingPreferences$$ = this.$_component$.options.displayOptions || {}, $$messagingPreferences$$ = {};
    $keys$$5$$ = Object.keys($messagingPreferences$$);
    for ($i$$78$$ = 0;$i$$78$$ < $keys$$5$$.length;$i$$78$$++) {
      $displayType_key$$32$$ = $keys$$5$$[$i$$78$$];
      $displayTypes$$ = $messagingPreferences$$[$displayType_key$$32$$];
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$ = $displayType_key$$32$$ + "";
      if (Array.isArray($displayTypes$$)) {
        for ($j$$9$$ = 0;$j$$9$$ < $displayTypes$$.length;$j$$9$$++) {
          $displayType_key$$32$$ = $displayTypes$$[$j$$9$$], $artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayType_key$$32$$, $compPH$$, $$messagingPreferences$$));
        }
      } else {
        "string" === typeof $displayTypes$$ && ($artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayTypes$$, $compPH$$, $$messagingPreferences$$)));
      }
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$] = $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE);
    }
    $$$$3$$.each($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$65$$, $name$$66$$) {
      $artifactsByDisplayType$$[$name$$66$$] = [];
    });
    $$$$3$$.each($$messagingPreferences$$, function($artifact$$1$$, $displayType$$1$$) {
      $artifactsByDisplayType$$[$displayType$$1$$].push($artifact$$1$$);
    });
    return $artifactsByDisplayType$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_resolveDisplayTypeForArtifact$ = function $$oj$$3$$$$ComponentMessaging$$$$_resolveDisplayTypeForArtifact$$($artifact$$2$$, $displayType$$2$$, $compPH$$1$$, $$messagingPreferences$$1$$) {
    var $artifactDisplayTypeResolved$$1$$ = !1;
    switch($displayType$$2$$) {
      case $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        "converterHint" !== $artifact$$2$$ || $artifactDisplayTypeResolved$$1$$ || $compPH$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      default:
        $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
    }
    return $artifactDisplayTypeResolved$$1$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_initializeMessagingStrategies$ = function $$oj$$3$$$$ComponentMessaging$$$$_initializeMessagingStrategies$$() {
    var $artifactsByDisplayType$$1_displayInPlaceholder$$ = this.$_getResolvedMessagingDisplayOptions$(), $displayInNoteWindow$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$], $displayNone$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE], $artifactsByDisplayType$$1_displayInPlaceholder$$ = $artifactsByDisplayType$$1_displayInPlaceholder$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$], 
    $messagingStrategies$$ = {};
    0 < $displayInNoteWindow$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $displayInNoteWindow$$));
    0 < $artifactsByDisplayType$$1_displayInPlaceholder$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $artifactsByDisplayType$$1_displayInPlaceholder$$));
    $messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $displayNone$$);
    this.$_strategies$ = $messagingStrategies$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_reactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$_reactivate$$() {
    var $artifactsByDisplayType$$2$$ = this.$_getResolvedMessagingDisplayOptions$(), $strategy$$3$$, $cm$$ = this;
    $$$$3$$.each($artifactsByDisplayType$$2$$, function($type$$66$$, $artifactsForType$$) {
      $type$$66$$ += "";
      $strategy$$3$$ = $cm$$.$_strategies$[$type$$66$$];
      $artifactsForType$$ && 0 < $artifactsForType$$.length ? $strategy$$3$$ ? $strategy$$3$$ && $strategy$$3$$.$reactivate$($artifactsForType$$) : ($strategy$$3$$ = $cm$$.$_createMessagingStrategy$($type$$66$$, $artifactsForType$$), $cm$$.$_strategies$[$type$$66$$] = $strategy$$3$$, $strategy$$3$$.$activate$($cm$$)) : $strategy$$3$$ && $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE !== $type$$66$$ && ($strategy$$3$$.$deactivate$(), delete $cm$$.$_strategies$[$type$$66$$]);
    });
  };
  $oj$$3$$.$MessagingStrategy$ = function $$oj$$3$$$$MessagingStrategy$$($displayOptions$$) {
    this.Init($displayOptions$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$MessagingStrategy$, $oj$$3$$.$Object$, "oj.MessagingStrategy");
  $oj$$3$$.$MessagingStrategy$.prototype.Init = function $$oj$$3$$$$MessagingStrategy$$$Init$($displayOptions$$1$$) {
    $oj$$3$$.$Assert$.$assertArray$($displayOptions$$1$$);
    $oj$$3$$.$MessagingStrategy$.$superclass$.Init.call(this);
    this.$_displayOptions$ = $displayOptions$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$MessagingStrategy$$$$activate$$($cm$$1$$) {
    this.$_componentMessaging$ = $cm$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.update = function $$oj$$3$$$$MessagingStrategy$$$update$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$deactivate$$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$reactivate$$($newDisplayOptions$$) {
    this.Init($newDisplayOptions$$);
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetLauncher$ = function $$oj$$3$$$$MessagingStrategy$$$$GetLauncher$$() {
    return this.$_componentMessaging$.$_getLauncher$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetComponent$ = function $$oj$$3$$$$MessagingStrategy$$$$GetComponent$$() {
    return this.$_componentMessaging$.$_getComponent$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMessages$$() {
    return this.$GetValidityState$().$_messages$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMaxSeverity$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMaxSeverity$$() {
    return this.$GetValidityState$().$getMaxSeverity$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$GetConverterHint$$() {
    var $hints$$ = [], $converterHint$$ = this.$_getMessagingContent$().converterHint;
    $converterHint$$ && $hints$$.push($converterHint$$);
    return $hints$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidatorHints$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidatorHints$$() {
    var $hints$$1$$ = [], $vHints$$ = this.$_getMessagingContent$().validatorHint || [];
    $$$$3$$.each($vHints$$, function($index$$75$$, $hint$$1$$) {
      $hints$$1$$.push($hint$$1$$);
    });
    return $hints$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$GetTitle$$() {
    return this.$_getMessagingContent$().title || "";
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidityState$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidityState$$() {
    return this.$_getMessagingContent$().validityState;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$HasMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$HasMessages$$() {
    var $messages$$2$$ = this.$GetMessages$();
    return $messages$$2$$ && 0 < $messages$$2$$.length ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowMessages$$() {
    return-1 !== this.$_displayOptions$.indexOf("messages") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowConverterHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("converterHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowValidatorHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowValidatorHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("validatorHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowTitle$$() {
    return-1 !== this.$_displayOptions$.indexOf("title") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$IsInvalid$ = function $$oj$$3$$$$MessagingStrategy$$$$IsInvalid$$() {
    return this.$GetValidityState$().$isInvalid$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$MessagingStrategy$$$$_getMessagingContent$$() {
    return this.$_componentMessaging$ ? this.$_componentMessaging$.$_getMessagingContent$() : {};
  };
  $oj$$3$$.$DefaultMessagingStrategy$ = function $$oj$$3$$$$DefaultMessagingStrategy$$($displayOptions$$2$$) {
    this.Init($displayOptions$$2$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $oj$$3$$.$DefaultMessagingStrategy$);
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$ = "oj-invalid";
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$ = "oj-warning";
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$DefaultMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.DefaultMessagingStrategy");
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.update = function $$oj$$3$$$$DefaultMessagingStrategy$$$update$() {
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.update.call(this);
    var $launcher$$1$$ = this.$GetLauncher$(), $maxSeverity$$1$$ = this.$GetMaxSeverity$(), $removeClasses$$ = [], $addClasses$$ = [], $invalid$$ = !1, $jqRoot$$ = this.$GetComponent$().widget();
    $launcher$$1$$ && (this.$IsInvalid$() ? ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$), $addClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0) : this.$HasMessages$() && $maxSeverity$$1$$ === $oj$$3$$.$Message$.$SEVERITY_LEVEL$.WARNING ? ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), 
    $removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)), $jqRoot$$.removeClass($removeClasses$$.join(" ")).addClass($addClasses$$.join(" ")), $launcher$$1$$.attr({"aria-invalid":$invalid$$}));
  };
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$DefaultMessagingStrategy$$$$deactivate$$() {
    this.$GetComponent$().widget().removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$GetLauncher$().removeAttr("aria-invalid");
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$($displayOptions$$3$$) {
    this.Init($displayOptions$$3$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $oj$$3$$.$PlaceholderMessagingStrategy$);
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$PlaceholderMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.Init = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$Init$($displayOptions$$4$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$4$$);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$activate$$($cm$$2$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$activate$.call(this, $cm$$2$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$reactivate$$($newDisplayOptions$$1$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$1$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$deactivate$$() {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$7_hints$$2_launcher$$2$$ = this.$GetLauncher$();
    this.$GetComponent$().widget();
    if (this.$ShowPlaceholderContent$() && $content$$7_hints$$2_launcher$$2$$ && ($content$$7_hints$$2_launcher$$2$$ = this.$GetConverterHint$(), $content$$7_hints$$2_launcher$$2$$ = $content$$7_hints$$2_launcher$$2$$.length ? $content$$7_hints$$2_launcher$$2$$[0] : "")) {
      var $values$$6$$ = {}, $flags$$6$$ = {};
      $values$$6$$.placeholder = $content$$7_hints$$2_launcher$$2$$;
      $flags$$6$$._oj_messaging_update = !0;
      this.$GetComponent$().option($values$$6$$, $flags$$6$$);
    }
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$ShowPlaceholderContent$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$ShowPlaceholderContent$$() {
    return this.$ShowConverterHint$();
  };
  $oj$$3$$.$ComponentValidity$ = function $$oj$$3$$$$ComponentValidity$$($valid$$1$$, $messages$$3$$) {
    this.Init($valid$$1$$, $messages$$3$$);
  };
  $oj$$3$$.$ComponentValidity$.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$isInvalid$$($messages$$4$$) {
    return $oj$$3$$.$Message$.$getMaxSeverity$($messages$$4$$) >= $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentValidity$, $oj$$3$$.$Object$, "oj.ComponentValidity");
  $oj$$3$$.$ComponentValidity$.prototype.Init = function $$oj$$3$$$$ComponentValidity$$$Init$($valid$$2$$, $messages$$5$$) {
    $oj$$3$$.$ComponentValidity$.$superclass$.Init.call(this);
    this.$_initialize$($messages$$5$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$$isInvalid$$() {
    return this.$_invalid$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.$getMaxSeverity$ = function $$oj$$3$$$$ComponentValidity$$$$getMaxSeverity$$() {
    return this.$_maxSeverity$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.update = function $$oj$$3$$$$ComponentValidity$$$update$($valid$$3$$, $messages$$6$$) {
    this.$_initialize$($messages$$6$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_initialize$ = function $$oj$$3$$$$ComponentValidity$$$$_initialize$$($messages$$7$$) {
    this.$_compMessages$ = $messages$$7$$;
    this.$_messages$ = this.$_getImmediateMessages$();
    this.$_maxSeverity$ = $oj$$3$$.$Message$.$getMaxSeverity$(this.$_messages$);
    this.$_invalid$ = $oj$$3$$.$ComponentValidity$.$isInvalid$(this.$_messages$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_getImmediateMessages$ = function $$oj$$3$$$$ComponentValidity$$$$_getImmediateMessages$$() {
    var $messages$$8$$ = this.$_compMessages$ || [], $immediateMsgs$$ = [], $msg$$3$$, $index$$76$$;
    for ($index$$76$$ in $messages$$8$$) {
      $msg$$3$$ = $messages$$8$$[$index$$76$$], $msg$$3$$ instanceof $oj$$3$$.$ComponentMessage$ && !$msg$$3$$.$canDisplay$() || $immediateMsgs$$.push($msg$$3$$);
    }
    return $immediateMsgs$$;
  };
  $oj$$3$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$3$$.$Test$, $oj$$3$$);
  $oj$$3$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$3$$.$Test$.ready, $oj$$3$$);
  $oj$$3$$.$Test$.$domNodeForLocator$ = function $$oj$$3$$$$Test$$$domNodeForLocator$$($element$$20_locator$$1$$) {
    var $locObj$$ = $element$$20_locator$$1$$;
    if ($oj$$3$$.$StringUtils$.$isString$($element$$20_locator$$1$$)) {
      try {
        $locObj$$ = $$$$3$$.parseJSON($element$$20_locator$$1$$);
      } catch ($e$$26$$) {
        return null;
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$20_locator$$1$$ = $$$$3$$($locObj$$.element)) ? $oj$$3$$.Components.$getWidgetConstructor$($element$$20_locator$$1$$[0], $locObj$$.component)("getNodeBySubId", {subId:$locObj$$.subId}) : null;
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$3$$.$Test$.$domNodeForLocator$, $oj$$3$$);
  $$$$3$$(document).ready(function() {
    var $div$$inline_416$$ = $$$$3$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_417$$;
    $div$$inline_416$$.appendTo("body");
    $bki$$inline_417$$ = $div$$inline_416$$.css("backgroundImage");
    $div$$inline_416$$.css("borderTopColor") != $div$$inline_416$$.css("borderRightColor") && (null == $bki$$inline_417$$ || "none" != $bki$$inline_417$$ && "url (invalid-url:)" != $bki$$inline_417$$) || $$$$3$$("body").addClass("oj-hicontrast");
    $div$$inline_416$$.remove();
  });
  $$$$3$$(document).ready(function() {
    "Microsoft Internet Explorer" == navigator.appName && $$$$3$$("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow");
  });
  $oj$$3$$.$PositionUtils$ = {};
  $oj$$3$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$3$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$, $isRtl$$) {
    $oj$$3$$.$Assert$.$assertObject$($position$$, "position");
    for (var $target$$74$$ = $$$$3$$.extend({}, $position$$), $i$$79$$ = 0;$i$$79$$ < $oj$$3$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$79$$++) {
      var $propName$$ = $oj$$3$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$79$$], $align$$ = $target$$74$$[$propName$$];
      $align$$ && ($target$$74$$[$propName$$] = $align$$.replace("start", $isRtl$$ ? "right" : "left").replace("end", $isRtl$$ ? "left" : "right"));
    }
    return $target$$74$$;
  };
  $oj$$3$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
});
