define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};D.$JSCompiler_alias_VOID$$ = void 0;
D.$JSCompiler_alias_TRUE$$ = !0;
D.$JSCompiler_alias_NULL$$ = null;
D.$JSCompiler_alias_FALSE$$ = !1;
D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.COMPILED = D.$JSCompiler_alias_TRUE$$;
D.$goog$global$$ = this == window ? this : window;
D.$goog$basePath$$ = "";
if(!D.COMPILED) {
  D.$goog$dependencies_$$ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  D.$goog$inHtmlDocument_$$ = function $$goog$inHtmlDocument_$$$() {
    var $doc$$4$$ = D.$goog$global$$.document;
    return"undefined" != typeof $doc$$4$$ && "write" in $doc$$4$$
  };
  D.$goog$writeScriptTag_$$ = function $$goog$writeScriptTag_$$$($src$$6$$) {
    return(0,D.$goog$inHtmlDocument_$$)() ? (D.$goog$global$$.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$6$$ + '"\x3e\x3c/script\x3e'), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
  };
  if(D.$goog$global$$.CLOSURE_BASE_PATH) {
    D.$goog$basePath$$ = D.$goog$global$$.CLOSURE_BASE_PATH
  }else {
    if((0,D.$goog$inHtmlDocument_$$)()) {
      for(D.$scripts$$inline_548$$ = D.$goog$global$$.document.getElementsByTagName("script"), D.$i$$inline_549$$ = D.$scripts$$inline_548$$.length - 1;0 <= D.$i$$inline_549$$;--D.$i$$inline_549$$) {
        D.$src$$inline_550$$ = D.$scripts$$inline_548$$[D.$i$$inline_549$$].src;
        D.$qmark$$inline_551$$ = D.$src$$inline_550$$.lastIndexOf("?");
        D.$l$$inline_552$$ = -1 == D.$qmark$$inline_551$$ ? D.$src$$inline_550$$.length : D.$qmark$$inline_551$$;
        if("base.js" == D.$src$$inline_550$$.substr(D.$l$$inline_552$$ - 7, 7)) {
          D.$goog$basePath$$ = D.$src$$inline_550$$.substr(0, D.$l$$inline_552$$ - 7);
          break
        }
      }
    }
  }
  if(!D.$goog$global$$.CLOSURE_NO_DEPS) {
    D.$src$$inline_554$$ = D.$goog$basePath$$ + "deps.js";
    D.$importScript$$inline_555$$ = D.$goog$global$$.CLOSURE_IMPORT_SCRIPT || D.$goog$writeScriptTag_$$;
    !D.$goog$dependencies_$$.written[D.$src$$inline_554$$] && (0,D.$importScript$$inline_555$$)(D.$src$$inline_554$$) && (D.$goog$dependencies_$$.written[D.$src$$inline_554$$] = D.$JSCompiler_alias_TRUE$$)
  }
}
window.Math.floor(2147483648 * window.Math.random()).toString(36);
D.$goog$exportSymbol$$ = function $$goog$exportSymbol$$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_560$$ = $publicPath$$1$$.split("."), $cur$$inline_561$$ = D.$goog$global$$;
  !($parts$$inline_560$$[0] in $cur$$inline_561$$) && $cur$$inline_561$$.execScript && $cur$$inline_561$$.execScript("var " + $parts$$inline_560$$[0]);
  for(var $part$$inline_562$$;$parts$$inline_560$$.length && ($part$$inline_562$$ = $parts$$inline_560$$.shift());) {
    !$parts$$inline_560$$.length && $object$$6$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$inline_561$$[$part$$inline_562$$] = $object$$6$$ : $cur$$inline_561$$ = $cur$$inline_561$$[$part$$inline_562$$] ? $cur$$inline_561$$[$part$$inline_562$$] : $cur$$inline_561$$[$part$$inline_562$$] = {}
  }
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : D.$JSCompiler_alias_NULL$$;
  this.$os$ = (0,D.$JSCompiler_StaticMethods__determineOS$$)($dataGrid_userAgent$$);
  this.platform = (0,D.$JSCompiler_StaticMethods__determinePlatform$$)($dataGrid_userAgent$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_1071$$ = window.document.createElement("div");
    $scrollDiv$$inline_1071$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1071$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1071$$.offsetWidth - $scrollDiv$$inline_1071$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1071$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if($JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ == D.$JSCompiler_alias_VOID$$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$12$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$12$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$ != D.$JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$12$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$12$$ + " " + $currentClassName$$ : $className$$12$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$13$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$13$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$1$$ != D.$JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$13$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$13$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? 
  D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = $beforestring_classNameIndex$$1$$ == D.$JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : 
  $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$14$$) {
  return $className$$14$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$2$$ != D.$JSCompiler_alias_NULL$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$2$$.className, $className$$14$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$15$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$5_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$15$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$15$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$15$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$5_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$5_hasEnd$$ = $endIndex$$5_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$5_hasEnd$$);
    if($hasStart$$ && $endIndex$$5_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$15$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$5_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$5_hasEnd$$ = $endIndex$$5_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$5_hasEnd$$), $hasStart$$ && $endIndex$$5_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$15$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$54$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$54$$.metaKey : $event$$54$$.ctrlKey
};
D.$JSCompiler_StaticMethods_getElementScrollLeft$$ = function $$JSCompiler_StaticMethods_getElementScrollLeft$$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$, $element$$10$$) {
  var $width$$21$$, $elemWidth$$;
  if($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_resources$.isRTLMode()) {
    if("gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform) {
      return window.Math.abs($element$$10$$.scrollLeft)
    }
    $width$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_scroller$.firstChild);
    $elemWidth$$ = (0,window.parseInt)($element$$10$$.style.width, 10);
    return window.Math.max(0, $width$$21$$ - $elemWidth$$ - $element$$10$$.scrollLeft)
  }
  return $element$$10$$.scrollLeft
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$, $element$$11$$, $scrollLeft$$9$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$.platform ? $element$$11$$.scrollLeft = -$scrollLeft$$9$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$.platform ? $element$$11$$.scrollLeft = $scrollLeft$$9$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$11$$.style.width, 10), $element$$11$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$22$$ - $elemWidth$$1$$ - $scrollLeft$$9$$) : $element$$11$$.scrollLeft = $scrollLeft$$9$$
};
D.$JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$1$$) {
  if($userAgent$$1$$) {
    if(-1 != $userAgent$$1$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$1$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$1$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$2$$) {
  if($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if(-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3$$) {
  return $arg1$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$ != D.$JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], $arg3$$ != D.$JSCompiler_alias_NULL$$ && $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ ? $arg2_val2$$[$arg3$$] : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$51$$, $obj$$35$$) {
  return"function" == typeof $value$$51$$ ? $value$$51$$.call(this, $obj$$35$$) : $value$$51$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$28$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$28$$ || "column" == $axis$$28$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$28$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$28$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$29$$, $obj$$36$$) {
  return $obj$$36$$ === D.$JSCompiler_alias_VOID$$ ? (0,D.$JSCompiler_StaticMethods_extract$$)(this, $prop$$8$$, $axis$$29$$) : this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$8$$, $axis$$29$$), $obj$$36$$)
};
D.$JSCompiler_StaticMethods_nullOrDefault$$ = function $$JSCompiler_StaticMethods_nullOrDefault$$$($value$$52$$) {
  return $value$$52$$ != D.$JSCompiler_alias_NULL$$ ? $value$$52$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$.$getProperty$("bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$.$getProperty$("bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return this.$getProperty$("emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$43$$) {
  var $mode$$8_val$$25$$;
  $mode$$8_val$$25$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$43$$.$getProperty$("selectionMode");
  if($mode$$8_val$$25$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$43$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$43$$.$getSelectionMode$();
  $mode$$8_val$$25$$ = $mode$$8_val$$25$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$43$$];
  return $mode$$8_val$$25$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$8_val$$25$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = this.$getProperty$("selectionMode");
  if($cardinality_mode$$9$$ == D.$JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return $cardinality_mode$$9$$ != D.$JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell"
};
D.$DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
  return this.$getProperty$("selection")
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$31$$, $obj$$38$$) {
  $obj$$38$$ === D.$JSCompiler_alias_VOID$$ && ($obj$$38$$ = D.$JSCompiler_alias_NULL$$);
  return(0,D.$JSCompiler_StaticMethods_nullOrDefault$$)($JSCompiler_StaticMethods_isResizable$self$$.$getProperty$("resizable", $axis$$31$$, $obj$$38$$))
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$33$$, $obj$$39$$) {
  return this.$getProperty$("style", $axis$$33$$, $obj$$39$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$34$$, $obj$$40$$) {
  return this.$getProperty$("className", $axis$$34$$, $obj$$40$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$35$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$35$$)
};
D.$JSCompiler_StaticMethods_getScrollPolicy$$ = function $$JSCompiler_StaticMethods_getScrollPolicy$$$($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$) {
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$.$getProperty$("scrollPolicy");
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = "auto");
  return $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$26$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$26$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$27$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$27$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$27$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
};
(0,D.$goog$exportSymbol$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$3$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$3$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
  for(var $candidate$$ in $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$candidate$$])
  }
  for($candidate$$ in $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
    a: {
      $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = D.$JSCompiler_alias_VOID$$;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = D.$JSCompiler_alias_VOID$$, $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = 
          D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = this.getMappedStyle("banded");
          for($i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = 1;$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ < $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$.length;$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$], $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$], 
            $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$);
            $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$].childNodes;
            for($headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = 0;$headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ < $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$.length;$headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$[$headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$], $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$[$headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$], 
              $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$)
            }
          }
          var $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = 
          D.$JSCompiler_alias_VOID$$, $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
            $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = this.getMappedStyle("banded");
            for($i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = 1;$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ < $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$.length;$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ += 1) {
              $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$[$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$].childNodes;
              for($j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = 0;$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ < $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$.length;$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ += 1) {
                $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = this.$m_startCol$ + $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$, 1 === window.Math.floor($headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ / $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$], 
                $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$], $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$], 
                $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$[$j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$], $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_9192_opt$$inline_9204$$ = $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = 
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), 
          $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$.length, $dir$$inline_9192_opt$$inline_9204$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
          for($JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = 1;$JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ < $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$;$JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ += 
          1) {
            $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$].childNodes;
            for($colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = 0;$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ < $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$.length;$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ += 1) {
              "hidden" === $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ + this.$m_startCol$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$], 
              $dir$$inline_9192_opt$$inline_9204$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)(this, $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$]) >= this.getWidth() ? "left" === $dir$$inline_9192_opt$$inline_9204$$ ? $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$].style.borderRightStyle = "none" : 
              $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$].style.borderLeftStyle = "none" : "left" === $dir$$inline_9192_opt$$inline_9204$$ ? $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$].style.borderRightStyle = "" : $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$].style.borderLeftStyle = 
              "", $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$[$colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$].style.borderBottomStyle = "hidden" === $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ + 
              this.$m_startRow$ - 1) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$], D.$JSCompiler_alias_NULL$$) >= this.getHeight() ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = this.$m_options$.options.header;
          $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ = $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ = $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = D.$JSCompiler_alias_VOID$$;
          this.$m_resources$.getMappedAttribute("key");
          $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = D.$JSCompiler_alias_FALSE$$;
          for($bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ in $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
            if("column" == $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ || "row" == $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$) {
              if($j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$) {
                break
              }
              "column" == $bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$ ? this.$m_colHeader$ && ($headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && 1 < this.$m_rowHeader$.firstChild.childElementCount && ($headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$) {
                for($i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$ in $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$ = $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$[$bandingClass$$inline_9173_bandingClass$$inline_9180_element$$inline_9199_horizontalGridlines$$inline_9189$$], $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$) {
                  b: {
                    var $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = $headers$$inline_9198_index$$inline_9179_j$$inline_9172_rowCount$$inline_9188$$, $dir$$inline_9192_opt$$inline_9204$$ = $i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$, $value$$inline_9205$$ = $colObj$$inline_9196_j$$inline_9186_row$$inline_9170_rows$$inline_9177$$[$i$$inline_9171_i$$inline_9178_opt$$inline_9197_row$$inline_9187$$], $i$$inline_9206$$ = D.$JSCompiler_alias_VOID$$, 
                    $attribute$$inline_9207$$ = D.$JSCompiler_alias_VOID$$, $val$$inline_9208$$ = D.$JSCompiler_alias_VOID$$;
                    this.$m_resources$.getMappedAttribute("key");
                    $attribute$$inline_9207$$ = this.$m_resources$.getMappedAttribute($dir$$inline_9192_opt$$inline_9204$$);
                    $val$$inline_9208$$ = $value$$inline_9205$$;
                    $value$$inline_9205$$.width ? $val$$inline_9208$$ = $value$$inline_9205$$.width : $value$$inline_9205$$.height && ($val$$inline_9208$$ = $value$$inline_9205$$.height);
                    for($i$$inline_9206$$ = 0;$i$$inline_9206$$ < $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$.length;$i$$inline_9206$$++) {
                      if("disable" == $val$$inline_9208$$) {
                        $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$i$$inline_9206$$].setAttribute($attribute$$inline_9207$$, "false")
                      }else {
                        if("enable" == $val$$inline_9208$$) {
                          $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$[$i$$inline_9206$$].setAttribute($attribute$$inline_9207$$, "true")
                        }else {
                          $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = D.$JSCompiler_alias_FALSE$$;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$ = D.$JSCompiler_alias_TRUE$$
                  }
                  if(!$JSCompiler_inline_result$$inline_9201_headers$$inline_9203_row$$inline_9182_rows$$inline_9191$$) {
                    $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ = D.$JSCompiler_alias_TRUE$$;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_9181_refresh$$inline_9200_verticalGridlines$$inline_9190$$ && this.refresh(this.$m_root$);
          break;
        case "selection":
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = this.$m_options$.getSelection();
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods__clearSelection$$)(this), this.$SetSelection$($JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$)) : 
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$.length = 0);
          break;
        default:
          $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = D.$JSCompiler_alias_FALSE$$;
          break a
      }
      $JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$ = D.$JSCompiler_alias_TRUE$$
    }
    if(!$JSCompiler_inline_result$$33_columnBandingInterval$$inline_9176_i$$inline_9185_obj$$inline_570_obj$$inline_9195_options$$4_rows$$inline_9169_selection$$inline_9212$$) {
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.$getStartRow$ = (0,D.$JSCompiler_get$$)("$m_startRow$");
D.$DvtDataGrid$$.prototype.getStartRow = D.$DvtDataGrid$$.prototype.$getStartRow$;
D.$DvtDataGrid$$.prototype.$getStartRowHeader$ = (0,D.$JSCompiler_get$$)("$m_startRowHeader$");
D.$DvtDataGrid$$.prototype.getStartRowHeader = D.$DvtDataGrid$$.prototype.$getStartRowHeader$;
D.$DvtDataGrid$$.prototype.$getStartColumn$ = (0,D.$JSCompiler_get$$)("$m_startCol$");
D.$DvtDataGrid$$.prototype.getStartColumn = D.$DvtDataGrid$$.prototype.$getStartColumn$;
D.$DvtDataGrid$$.prototype.$getStartColumnHeader$ = (0,D.$JSCompiler_get$$)("$m_startColHeader$");
D.$DvtDataGrid$$.prototype.getStartColumnHeader = D.$DvtDataGrid$$.prototype.$getStartColumnHeader$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$26$$) {
  return this.$m_resources$.getMappedStyle($key$$26$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $dataSource$$ != D.$JSCompiler_alias_NULL$$ && ($dataSource$$.on("change", this.$handleModelEvent$.bind(this), this), $dataSource$$.on("expand", this.$handleExpandEvent$.bind(this), this), $dataSource$$.on("collapse", this.$handleCollapseEvent$.bind(this), this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$4$$, $callback$$24$$) {
  var $keys$$2$$;
  $keys$$2$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$4$$);
  "function" === typeof $keys$$2$$.then ? $keys$$2$$.then(function($keys$$2$$) {
    $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
  }, function() {
    $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$}, $indexes$$4$$)
  }) : $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
};
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$) {
  return"scroll" != (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$.$m_options$)
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  window.document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && (this.$m_dataSource$.off("change", this.$handleModelEvent$), this.$m_dataSource$.off("expand", this.$handleExpandEvent$), this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$));
  this.$m_root$ != D.$JSCompiler_alias_NULL$$ && this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == D.$JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.clientWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == D.$JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.clientHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$4$$) {
  return"row" == $axis$$4$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$4$$ ? 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  $emptyText_resources$$1$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
  return $emptyText_resources$$1$$
};
D.$JSCompiler_StaticMethods_setDefaultDimensions$$ = function $$JSCompiler_StaticMethods_setDefaultDimensions$$$($JSCompiler_StaticMethods_setDefaultDimensions$self$$) {
  var $div$$, $resources$$2$$;
  $div$$ = window.document.createElement("div");
  $div$$.style.visibilty = "hidden";
  $resources$$2$$ = $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_resources$;
  $div$$.className = $resources$$2$$.getMappedStyle("colheader");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_root$.appendChild($div$$);
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnHeaderHeight$ = $div$$.offsetHeight;
  $div$$.className = $resources$$2$$.getMappedStyle("colheadercell") + " " + $resources$$2$$.getMappedStyle("headercell");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnWidth$ = $div$$.offsetWidth;
  $div$$.className = $resources$$2$$.getMappedStyle("rowheader");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeaderWidth$ = $div$$.offsetWidth;
  $div$$.className = $resources$$2$$.getMappedStyle("row");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeight$ = $div$$.offsetHeight;
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_root$.removeChild($div$$)
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultRowHeight$self$$);
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$ = function $$JSCompiler_StaticMethods_getDefaultColumnWidth$$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$) {
  $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$);
  return $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$
};
D.$JSCompiler_StaticMethods_getRowHeight$$ = function $$JSCompiler_StaticMethods_getRowHeight$$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$1$$, $key$$27$$) {
  var $rowHeight$$, $className$$7$$;
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$27$$);
  if($rowHeight$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_setElementHeight$$)($elem$$1$$, $rowHeight$$), $rowHeight$$
  }
  if("" != $elem$$1$$.style.height) {
    return $rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$1$$), $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$setSize$("row", $key$$27$$, $rowHeight$$), $rowHeight$$
  }
  $className$$7$$ = $elem$$1$$.className;
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$className$$7$$];
  $rowHeight$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$1$$.style.visibility = "hidden", window.document.body.appendChild($elem$$1$$), $rowHeight$$ = $elem$$1$$.offsetHeight, $elem$$1$$.style.visibility = "");
  $rowHeight$$ != (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowHeight$self$$) && $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$setSize$("row", $key$$27$$, $rowHeight$$);
  return $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$className$$7$$] = $rowHeight$$
};
D.$JSCompiler_StaticMethods_getColumnWidth$$ = function $$JSCompiler_StaticMethods_getColumnWidth$$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$2$$, $key$$28$$) {
  var $columnWidth$$, $className$$8$$;
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$28$$);
  if($columnWidth$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_setElementWidth$$)($elem$$2$$, $columnWidth$$), $columnWidth$$
  }
  if("" != $elem$$2$$.style.width) {
    return $columnWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$2$$), $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$setSize$("column", $key$$28$$, $columnWidth$$), $columnWidth$$
  }
  $className$$8$$ = $elem$$2$$.className;
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$className$$8$$];
  $columnWidth$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$2$$.style.visibility = "hidden", window.document.body.appendChild($elem$$2$$), $columnWidth$$ = $elem$$2$$.offsetWidth, $elem$$2$$.style.visibility = "");
  $columnWidth$$ != (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getColumnWidth$self$$) && $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$setSize$("column", $key$$28$$, $columnWidth$$);
  return $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$className$$8$$] = $columnWidth$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$2$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$2$$ == D.$JSCompiler_alias_NULL$$ && ($id$$2$$ = "");
  return[$id$$2$$, $subId$$].join(":")
};
D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$ = function $$JSCompiler_StaticMethods_isHeaderFetchComplete$$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === D.$JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$45$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$45$$ === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$45$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$46$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$46$$ === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$46$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
};
D.$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
  this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
  this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
  this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
  this.$m_root$.removeChild(this.$m_placeHolder$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_contextInfo$);
  this.$m_root$.removeChild(this.$m_colHeader$);
  this.$m_root$.removeChild(this.$m_rowHeader$);
  this.$m_root$.removeChild(this.$m_databody$);
  this.$m_root$.removeChild(this.$m_scroller$)
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  this.$destroy$();
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnHeaderHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActive$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActiveHeader$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_639_i$$inline_641_root$$1$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_startCol$ = this.$m_startRow$ = 0;
  this.$m_endCol$ = this.$m_endRow$ = -1;
  this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
  this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
  var $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$, $colHeader$$inline_635$$, $rowHeader$$inline_636$$, $emptyText$$inline_640_root$$inline_9215$$;
  this.$m_root$ = $empty$$inline_639_i$$inline_641_root$$1$$;
  this.$m_root$.className = this.getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-describedby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $empty$$inline_639_i$$inline_641_root$$1$$.tabIndex = 0;
  $emptyText$$inline_640_root$$inline_9215$$ = window.document.createElement("div");
  $emptyText$$inline_640_root$$inline_9215$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $emptyText$$inline_640_root$$inline_9215$$.className = this.getMappedStyle("status");
  $emptyText$$inline_640_root$$inline_9215$$.setAttribute("role", "status");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($emptyText$$inline_640_root$$inline_9215$$);
  this.$m_status$ = $emptyText$$inline_640_root$$inline_9215$$;
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = window.document.createElement("div");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.className = this.getMappedStyle("info");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$);
  this.$m_accSummary$ = $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$;
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = window.document.createElement("div");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.className = this.getMappedStyle("info");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.setAttribute("role", "status");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$);
  this.$m_accInfo$ = $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$;
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = window.document.createElement("div");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.className = this.getMappedStyle("info");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$);
  this.$m_stateInfo$ = $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$;
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = window.document.createElement("div");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "context");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.className = this.getMappedStyle("info");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$);
  this.$m_contextInfo$ = $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$;
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = window.document.createElement("div");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "placeHolder");
  $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$.className = this.getMappedStyle("info");
  $empty$$inline_639_i$$inline_641_root$$1$$.appendChild($root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$);
  this.$m_placeHolder$ = $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    this.$m_empty$ = D.$JSCompiler_alias_NULL$$;
    $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_635$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_636$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_9233$$ = window.document.createElement("div");
    $root$$inline_9233$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_9233$$.className = this.getMappedStyle("scrollers");
    $root$$inline_9233$$.tabIndex = "-1";
    $root$$inline_9233$$.addEventListener ? $root$$inline_9233$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_9233$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_9237$$ = window.document.createElement("div");
    $root$$inline_9237$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_9237$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_9237$$, $root$$inline_9233$$, 0, 0);
    $root$$inline_9218_root$$inline_9221_root$$inline_9224_root$$inline_9227_root$$inline_9230_rtl$$inline_634$$ && ($colHeader$$inline_635$$.style.direction = "rtl", $root$$inline_9237$$.style.direction = "rtl", $root$$inline_9233$$.style.direction = "rtl");
    $empty$$inline_639_i$$inline_641_root$$1$$.insertBefore($colHeader$$inline_635$$, $emptyText$$inline_640_root$$inline_9215$$);
    $empty$$inline_639_i$$inline_641_root$$1$$.insertBefore($rowHeader$$inline_636$$, $emptyText$$inline_640_root$$inline_9215$$);
    $empty$$inline_639_i$$inline_641_root$$1$$.insertBefore($root$$inline_9233$$, $emptyText$$inline_640_root$$inline_9215$$);
    $empty$$inline_639_i$$inline_641_root$$1$$.insertBefore($root$$inline_9237$$, $emptyText$$inline_640_root$$inline_9215$$);
    this.$m_colHeader$ = $colHeader$$inline_635$$;
    this.$m_rowHeader$ = $rowHeader$$inline_636$$;
    this.$m_databody$ = $root$$inline_9237$$;
    this.$m_scroller$ = $root$$inline_9233$$;
    this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
    this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ($root$$inline_9237$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $empty$$inline_639_i$$inline_641_root$$1$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_639_i$$inline_641_root$$1$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), 
    $empty$$inline_639_i$$inline_641_root$$1$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_639_i$$inline_641_root$$1$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_639_i$$inline_641_root$$1$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$), $root$$inline_9237$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : "mousewheel", 
    this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $root$$inline_9237$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_636$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_635$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9233$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), 
    $root$$inline_9233$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$));
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_639_i$$inline_641_root$$1$$ = 0;$empty$$inline_639_i$$inline_641_root$$1$$ < this.$m_modelEvents$.length;$empty$$inline_639_i$$inline_641_root$$1$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_639_i$$inline_641_root$$1$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $emptyText$$inline_640_root$$inline_9215$$ = this.$getEmptyText$(), $empty$$inline_639_i$$inline_641_root$$1$$ = window.document.createElement("div"), $empty$$inline_639_i$$inline_641_root$$1$$.className = this.getMappedStyle("emptytext"), $empty$$inline_639_i$$inline_641_root$$1$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "empty")), $empty$$inline_639_i$$inline_641_root$$1$$.innerHTML = $emptyText$$inline_640_root$$inline_9215$$, this.$m_root$.appendChild($empty$$inline_639_i$$inline_641_root$$1$$), 
    this.$m_empty$ = $empty$$inline_639_i$$inline_641_root$$1$$
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$13$$, $height$$12$$, $colHeader$$1$$, $rowHeader$$1$$, $colHeaderHeight$$, $rowHeaderWidth$$, $dir$$2$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$13$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$12$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $rowHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $dir$$2$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, 0, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, $colHeaderHeight$$, 
  "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$1$$, $height$$12$$ - $colHeaderHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $width$$13$$ - $rowHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$) || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$14$$, $height$$13$$) {
  if($width$$14$$ != this.$m_width$ || $height$$13$$ != this.$m_height$) {
    this.$m_width$ = $width$$14$$, this.$m_height$ = $height$$13$$, this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$))
  }
};
D.$DvtDataGrid$$.prototype.HandleResize = D.$DvtDataGrid$$.prototype.$HandleResize$;
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$15$$, $height$$14_scrollerHeight$$, $borderStyle$$inline_654_colHeader$$2_empty$$1$$, $emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? ($emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), $borderStyle$$inline_654_colHeader$$2_empty$$1$$ = window.document.createElement("div"), $borderStyle$$inline_654_colHeader$$2_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.getMappedStyle("emptytext"), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_654_colHeader$$2_empty$$1$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$), "top"), $borderStyle$$inline_654_colHeader$$2_empty$$1$$.innerHTML = $emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_654_colHeader$$2_empty$$1$$), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ = $borderStyle$$inline_654_colHeader$$2_empty$$1$$) : ($databodyWidth_width$$15$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth(), $height$$14_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight(), $borderStyle$$inline_654_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, 
  $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), 
  $databodyContentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), $height$$14_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$15$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$15$$ = window.Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$14_scrollerHeight$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), 
  $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$ - 
  $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && $height$$14_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$14_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$15$$ && ($databodyWidth_width$$15$$ = $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$, $databodyHeight$$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_654_colHeader$$2_empty$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderStyle$$inline_654_colHeader$$2_empty$$1$$, $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), 
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, 
  $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$15$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$) + 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() && ($borderStyle$$inline_654_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "borderLeftStyle" : "borderRightStyle", $emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$.firstChild.lastChild, $emptyText$$2_lastHeader$$inline_655_rowHeader$$2$$.style[$borderStyle$$inline_654_colHeader$$2_empty$$1$$] = 
  "none"), (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$);
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, "top"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ == 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner$$ = window.document.createElement("div"), $bottomCorner$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), 
  $bottomCorner$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner$$, 
  $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && $bottomCorner$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$;
  $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$.$getProperty$("scrollPosition");
  $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$ = $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$ && $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$, "scrollPosition", "key", "column");
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$, "scrollPosition", 
    "index", "column");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    var $rowScrollPosition$$inline_664$$;
    $rowScrollPosition$$inline_664$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$, "scrollPosition", "key", "row");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$ = $rowScrollPosition$$inline_664$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_664$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$, "scrollPosition", "index", "row");
    if("key" === $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$) {
      var $keys$$inline_667$$ = {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$}, $callback$$inline_668$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$;
      $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes($keys$$inline_667$$);
      "function" === typeof $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$.then ? $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$.then(function($indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$) {
        $callback$$inline_668$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$, $keys$$inline_667$$)
      }, function() {
        $callback$$inline_668$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:-1, column:-1}, $keys$$inline_667$$)
      }) : $callback$$inline_668$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_670_scrollMode_scrollPosition$$inline_658$$, $keys$$inline_667$$)
    }else {
      $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_663_columnScrollPosition$$inline_661_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_660_columnScrollPosition$$})
    }
  }
};
D.$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$6_rowScrollPosition$$1$$) {
  var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.column ? 0 : $indexes$$6_rowScrollPosition$$1$$.column;
  $indexes$$6_rowScrollPosition$$1$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.row ? 0 : $indexes$$6_rowScrollPosition$$1$$.row;
  $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$6_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)(this.$m_utils$, this.$m_scroller$, $columnScrollPosition$$1_initialScrollLeft$$);
  this.$m_scroller$.scrollTop = $initialScrollTop$$
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$2$$;
  $databody$$2$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$.firstChild) > ($expectedWidth$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$) : $expectedWidth$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$3$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$.firstChild) > ($expectedHeight$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$) : $expectedHeight$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($context$$4$$) {
  $context$$4$$ != D.$JSCompiler_alias_NULL$$ && ($context$$4$$.context != D.$JSCompiler_alias_NULL$$ && (this.$m_accessibleContext$ = $context$$4$$.context), $context$$4$$.state != D.$JSCompiler_alias_NULL$$ && (this.$m_stateInfo$.innerHTML = $context$$4$$.state))
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$29_text$$10$$, $args$$4$$) {
  $key$$29_text$$10$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$29_text$$10$$, $args$$4$$);
  $key$$29_text$$10$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.innerHTML = $key$$29_text$$10$$)
};
D.$JSCompiler_StaticMethods__updateContextInfo$$ = function $$JSCompiler_StaticMethods__updateContextInfo$$$($JSCompiler_StaticMethods__updateContextInfo$self$$, $column_context$$5$$, $skip$$) {
  var $row$$1_text$$11$$, $info$$;
  $row$$1_text$$11$$ = $column_context$$5$$.row;
  $column_context$$5$$ = $column_context$$5$$.column;
  $info$$ = "";
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ == D.$JSCompiler_alias_NULL$$ && (!(0,window.isNaN)($row$$1_text$$11$$) && "row" != $skip$$) && ($row$$1_text$$11$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowContext", {index:$row$$1_text$$11$$ + 1}), $row$$1_text$$11$$ != D.$JSCompiler_alias_NULL$$ && ($info$$ = $row$$1_text$$11$$));
  !(0,window.isNaN)($column_context$$5$$) && "column" != $skip$$ && ($row$$1_text$$11$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnContext", {index:$column_context$$5$$ + 1}), $row$$1_text$$11$$ != D.$JSCompiler_alias_NULL$$ && ($info$$ = 0 === $info$$.length ? $row$$1_text$$11$$ : $info$$ + " " + $row$$1_text$$11$$));
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ != D.$JSCompiler_alias_NULL$$ && ($info$$ = $info$$ + ", " + $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$, $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_contextInfo$.innerHTML = $info$$
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$) : "column" === $axis$$5$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$9$$ = window.document.createElement("div");
  $root$$9$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$9$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$9$$);
  return $root$$9$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  var $axisStart_count$$6$$, $axisEnd$$;
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, $fetchSize$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$8_headerRange$$1$$), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, $axis$$8_headerRange$$1$$) || ($axisStart_count$$6$$ = "row" == $axis$$8_headerRange$$1$$ ? this.$m_startRowHeader$ : this.$m_startColHeader$, $axisEnd$$ = "row" == $axis$$8_headerRange$$1$$ ? 
  this.$m_endRowHeader$ : this.$m_endColHeader$, $start$$9$$ < $axisStart_count$$6$$ ? $fetchSize$$ = window.Math.min($fetchSize$$, $axisStart_count$$6$$) : ($axisStart_count$$6$$ = this.$m_dataSource$.getCount($axis$$8_headerRange$$1$$), 0 <= $axisStart_count$$6$$ && ($fetchSize$$ = window.Math.min($fetchSize$$, window.Math.max(0, $axisStart_count$$6$$ - $axisEnd$$)))))), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = 
  $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($avgWidth$$inline_701_results$$, $headerRange$$3_scroller$$inline_682$$, $rowInsert$$) {
  var $axis$$10_renderer$$inline_683_scroller$$inline_714$$, $root$$10$$, $rowHeader$$inline_9251_start$$10$$, $count$$7_totalCount$$inline_711$$;
  if($headerRange$$3_scroller$$inline_682$$.start == this.$m_fetching$[$headerRange$$3_scroller$$inline_682$$.axis].start) {
    $axis$$10_renderer$$inline_683_scroller$$inline_714$$ = $headerRange$$3_scroller$$inline_682$$.axis;
    this.$m_fetching$[$axis$$10_renderer$$inline_683_scroller$$inline_714$$] = D.$JSCompiler_alias_FALSE$$;
    $root$$10$$ = $headerRange$$3_scroller$$inline_682$$.header;
    $rowHeader$$inline_9251_start$$10$$ = $headerRange$$3_scroller$$inline_682$$.start;
    $count$$7_totalCount$$inline_711$$ = this.$m_dataSource$.getCount($axis$$10_renderer$$inline_683_scroller$$inline_714$$);
    if("column" === $axis$$10_renderer$$inline_683_scroller$$inline_714$$) {
      a: {
        var $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$, $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$, $headerCount$$inline_686_referenceRow$$inline_735$$, $firstHeader$$inline_687_headerCount$$inline_713$$, $headerClass$$inline_688_resizer$$inline_715$$, $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$, $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$, 
        $dir$$inline_691_renderer$$inline_716$$, $i$$inline_692_isAppend$$inline_717$$, $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$, $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$, $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$, $col$$inline_699_top$$inline_718$$, 
        $fragment$$inline_720_sortableAttribute$$inline_704$$, $i$$inline_722_resizableAttribute$$inline_705$$;
        $headerCount$$inline_686_referenceRow$$inline_735$$ = $avgWidth$$inline_701_results$$.getCount();
        if($root$$10$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_686_referenceRow$$inline_735$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $headerRange$$3_scroller$$inline_682$$ = $root$$10$$.firstChild;
          -1 == this.$m_endColHeader$ && "" == $root$$10$$.className && ($root$$10$$.className = this.getMappedStyle("colheader") + " " + this.getMappedStyle("header"), $root$$10$$.style.height = "", $headerRange$$3_scroller$$inline_682$$.style.height = "")
        }else {
          $headerRange$$3_scroller$$inline_682$$ = window.document.createElement("div"), $headerRange$$3_scroller$$inline_682$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_686_referenceRow$$inline_735$$ && ($root$$10$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($root$$10$$, 0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($headerRange$$3_scroller$$inline_682$$, 
          0), this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
        $axis$$10_renderer$$inline_683_scroller$$inline_714$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ = 0;
        $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ = $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_687_headerCount$$inline_713$$ = $headerRange$$3_scroller$$inline_682$$.firstChild;
        $headerClass$$inline_688_resizer$$inline_715$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
        $dir$$inline_691_renderer$$inline_716$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
        $fragment$$inline_720_sortableAttribute$$inline_704$$ = this.$m_resources$.getMappedAttribute("sortable");
        $i$$inline_722_resizableAttribute$$inline_705$$ = this.$m_resources$.getMappedAttribute("resizable");
        for($i$$inline_692_isAppend$$inline_717$$ = 0;$i$$inline_692_isAppend$$inline_717$$ < $headerCount$$inline_686_referenceRow$$inline_735$$;$i$$inline_692_isAppend$$inline_717$$ += 1) {
          $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? $rowHeader$$inline_9251_start$$10$$ + $headerCount$$inline_686_referenceRow$$inline_735$$ - 1 - $i$$inline_692_isAppend$$inline_717$$ : $rowHeader$$inline_9251_start$$10$$ + $i$$inline_692_isAppend$$inline_717$$;
          $col$$inline_699_top$$inline_718$$ = window.document.createElement("div");
          $col$$inline_699_top$$inline_718$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "c" + $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
          $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$ = window.document.createElement("div");
          $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.className = this.getMappedStyle("headercellcontent");
          $col$$inline_699_top$$inline_718$$.appendChild($headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$);
          $headerRange$$3_scroller$$inline_682$$.appendChild($col$$inline_699_top$$inline_718$$);
          $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = $avgWidth$$inline_701_results$$.getData($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
          $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ = $avgWidth$$inline_701_results$$.getMetadata($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
          $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "column", $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$, $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$, $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, 
          $col$$inline_699_top$$inline_718$$);
          $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ = this.$m_options$.$getInlineStyle$("column", $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$);
          $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ = this.$m_options$.$getStyleClass$("column", $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$);
          $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ != D.$JSCompiler_alias_NULL$$ && ($col$$inline_699_top$$inline_718$$.style.cssText = $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$);
          $col$$inline_699_top$$inline_718$$.className = $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_688_resizer$$inline_715$$ + " " + $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ : $headerClass$$inline_688_resizer$$inline_715$$;
          this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && "" != $col$$inline_699_top$$inline_718$$.style.height && (this.$m_colHeaderHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($col$$inline_699_top$$inline_718$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($root$$10$$, this.$m_colHeaderHeight$));
          "" != $col$$inline_699_top$$inline_718$$.style.height && ($col$$inline_699_top$$inline_718$$.style.height = "100%");
          $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_699_top$$inline_718$$, $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$.key);
          (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ + $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ >= this.getWidth() && ("left" === $dir$$inline_691_renderer$$inline_716$$ ? $col$$inline_699_top$$inline_718$$.style.borderRightStyle = 
          "none" : $col$$inline_699_top$$inline_718$$.style.borderLeftStyle = "none");
          $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_699_top$$inline_718$$, $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ - $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, $dir$$inline_691_renderer$$inline_716$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_699_top$$inline_718$$, $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$, 
          $dir$$inline_691_renderer$$inline_716$$);
          (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "column", $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$) && $col$$inline_699_top$$inline_718$$.setAttribute($i$$inline_722_resizableAttribute$$inline_705$$, "true");
          $axis$$10_renderer$$inline_683_scroller$$inline_714$$ != D.$JSCompiler_alias_NULL$$ ? ($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = $axis$$10_renderer$$inline_683_scroller$$inline_714$$.call(this, $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$), $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ != 
          D.$JSCompiler_alias_NULL$$ && ($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$) : $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.parentNode == 
          D.$JSCompiler_alias_NULL$$ && $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString && ($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = window.document.createElement("span"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.className = 
          this.getMappedStyle("headercelltext"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.appendChild(window.document.createTextNode($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString())), $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$)))) : 
          ($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = window.document.createElement("span"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.className = this.getMappedStyle("headercelltext"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.appendChild(window.document.createTextNode($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString())), 
          $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$));
          $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$ = $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$;
          $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = D.$JSCompiler_alias_VOID$$;
          $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = this.$m_dataSource$.getCapability("sort");
          $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)(this.$m_options$.$getProperty$("sortable", "column", $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$));
          if(("enable" === $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ || "auto" === $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$) && ("full" === $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ || "column" === $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$)) {
            $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ = $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$ = D.$JSCompiler_alias_VOID$$, $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ = 
            window.document.createElement("div"), $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.className = this.getMappedStyle("sortcontainer"), $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$ = window.document.createElement("div"), $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon"), 
            $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$.key === (this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ ? 
            $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ + " " + this.getMappedStyle("default") : "descending" === $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ && 
            ($headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.className = this.getMappedStyle("sortdescending") + " " + $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ + " " + this.getMappedStyle("default"))) : ($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ += 
            " " + this.getMappedStyle("disabled"), $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$), $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.appendChild($headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$), 
            $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$ = $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$, $col$$inline_699_top$$inline_718$$.appendChild($headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$), $col$$inline_699_top$$inline_718$$.setAttribute($fragment$$inline_720_sortableAttribute$$inline_704$$, "true")
          }
          $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ = $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ - $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ : $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ + $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$;
          $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ += $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$;
          $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? ($headerRange$$3_scroller$$inline_682$$.insertBefore($col$$inline_699_top$$inline_718$$, $firstHeader$$inline_687_headerCount$$inline_713$$), $firstHeader$$inline_687_headerCount$$inline_713$$ = $col$$inline_699_top$$inline_718$$) : $headerRange$$3_scroller$$inline_682$$.appendChild($col$$inline_699_top$$inline_718$$)
        }
        $rowHeader$$inline_9251_start$$10$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_686_referenceRow$$inline_735$$, this.$m_startColHeaderPixel$ -= $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$) : (this.$m_endColHeader$ += $headerCount$$inline_686_referenceRow$$inline_735$$, this.$m_endColHeaderPixel$ += $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$);
        $root$$10$$.hasChildNodes() || $root$$10$$.appendChild($headerRange$$3_scroller$$inline_682$$);
        if(0 < $headerCount$$inline_686_referenceRow$$inline_735$$ && ($avgWidth$$inline_701_results$$ = $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ / $headerCount$$inline_686_referenceRow$$inline_735$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_701_results$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_701_results$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerRange$$3_scroller$$inline_682$$, $count$$7_totalCount$$inline_711$$ * $avgWidth$$inline_701_results$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ + 1 >= $count$$7_totalCount$$inline_711$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$10_renderer$$inline_683_scroller$$inline_714$$) {
        a: {
          var $headerContext$$inline_725_headerMetadata$$inline_724$$, $height$$inline_728_inlineStyle$$inline_727$$, $styleClass$$inline_730$$;
          $firstHeader$$inline_687_headerCount$$inline_713$$ = $avgWidth$$inline_701_results$$.getCount();
          if($root$$10$$.hasChildNodes()) {
            if(0 == $firstHeader$$inline_687_headerCount$$inline_713$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row")) {
              this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
            $axis$$10_renderer$$inline_683_scroller$$inline_714$$ = $root$$10$$.firstChild;
            -1 == this.$m_endRowHeader$ && "" == $root$$10$$.className && ($root$$10$$.className = this.getMappedStyle("rowheader") + " " + this.getMappedStyle("header"), $root$$10$$.style.width = "", $axis$$10_renderer$$inline_683_scroller$$inline_714$$.style.width = "");
            $headerClass$$inline_688_resizer$$inline_715$$ = $axis$$10_renderer$$inline_683_scroller$$inline_714$$.firstChild
          }else {
            $axis$$10_renderer$$inline_683_scroller$$inline_714$$ = window.document.createElement("div"), $axis$$10_renderer$$inline_683_scroller$$inline_714$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $firstHeader$$inline_687_headerCount$$inline_713$$ && ($root$$10$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($root$$10$$, 0), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$10_renderer$$inline_683_scroller$$inline_714$$, 
            0), this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$), $headerClass$$inline_688_resizer$$inline_715$$ = window.document.createElement("div"), $headerClass$$inline_688_resizer$$inline_715$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerClass$$inline_688_resizer$$inline_715$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($headerClass$$inline_688_resizer$$inline_715$$, 0), $axis$$10_renderer$$inline_683_scroller$$inline_714$$.appendChild($headerClass$$inline_688_resizer$$inline_715$$)
          }
          $dir$$inline_691_renderer$$inline_716$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");
          ($i$$inline_692_isAppend$$inline_717$$ = $rowHeader$$inline_9251_start$$10$$ >= this.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $col$$inline_699_top$$inline_718$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$ ? ($currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ = $root$$10$$.firstChild, $headerCount$$inline_686_referenceRow$$inline_735$$ = $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$.childNodes[$rowHeader$$inline_9251_start$$10$$ - 
          this.$m_startRowHeader$ + 1], $col$$inline_699_top$$inline_718$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($headerCount$$inline_686_referenceRow$$inline_735$$, "top")) : $col$$inline_699_top$$inline_718$$ = this.$m_startRowHeaderPixel$;
          -1 == $count$$7_totalCount$$inline_711$$ && ($count$$7_totalCount$$inline_711$$ = this.$m_endRowHeader$ + $firstHeader$$inline_687_headerCount$$inline_713$$);
          $headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$ = this.$m_resources$.getMappedAttribute("resizable");
          $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ = 0;
          $fragment$$inline_720_sortableAttribute$$inline_704$$ = window.document.createDocumentFragment();
          for($i$$inline_722_resizableAttribute$$inline_705$$ = 0;$i$$inline_722_resizableAttribute$$inline_705$$ < $firstHeader$$inline_687_headerCount$$inline_713$$;$i$$inline_722_resizableAttribute$$inline_705$$ += 1) {
            $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = $i$$inline_692_isAppend$$inline_717$$ ? $rowHeader$$inline_9251_start$$10$$ + $i$$inline_722_resizableAttribute$$inline_705$$ : $rowHeader$$inline_9251_start$$10$$ + ($firstHeader$$inline_687_headerCount$$inline_713$$ - 1 - $i$$inline_722_resizableAttribute$$inline_705$$);
            $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$ = window.document.createElement("div");
            $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "r" + $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
            $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$ = window.document.createElement("div");
            $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$ = window.document.createElement("div");
            $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.className = this.getMappedStyle("headercellcontent");
            $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.appendChild($headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$);
            $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.appendChild($col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$);
            $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = $avgWidth$$inline_701_results$$.getData($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
            $headerContext$$inline_725_headerMetadata$$inline_724$$ = $avgWidth$$inline_701_results$$.getMetadata($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$);
            $headerContext$$inline_725_headerMetadata$$inline_724$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "row", $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$, $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$, $headerContext$$inline_725_headerMetadata$$inline_724$$, $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$);
            $height$$inline_728_inlineStyle$$inline_727$$ = this.$m_options$.$getInlineStyle$("row", $headerContext$$inline_725_headerMetadata$$inline_724$$);
            $styleClass$$inline_730$$ = this.$m_options$.$getStyleClass$("row", $headerContext$$inline_725_headerMetadata$$inline_724$$);
            $height$$inline_728_inlineStyle$$inline_727$$ != D.$JSCompiler_alias_NULL$$ && ($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.cssText = $height$$inline_728_inlineStyle$$inline_727$$, $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.cssText = $height$$inline_728_inlineStyle$$inline_727$$);
            $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.className = this.getMappedStyle("row");
            $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.className = this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell");
            $styleClass$$inline_730$$ != D.$JSCompiler_alias_NULL$$ && ($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.className += " " + $styleClass$$inline_730$$, $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.className += " " + $styleClass$$inline_730$$);
            this.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && "" != $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.width && (this.$m_rowHeaderWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($root$$10$$, this.$m_rowHeaderWidth$));
            "" != $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.width && ($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.width = "100%");
            if($styleClass$$inline_730$$ != D.$JSCompiler_alias_NULL$$ || "" != $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.width || "" != $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.height) {
              $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.width = "100%", $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.height = "100%"
            }
            $height$$inline_728_inlineStyle$$inline_727$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)(this, $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, $headerContext$$inline_725_headerMetadata$$inline_724$$.key);
            $i$$inline_692_isAppend$$inline_717$$ || $rowInsert$$ ? ($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.top = $col$$inline_699_top$$inline_718$$ + "px", $col$$inline_699_top$$inline_718$$ += $height$$inline_728_inlineStyle$$inline_727$$) : ($col$$inline_699_top$$inline_718$$ -= $height$$inline_728_inlineStyle$$inline_727$$, $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$.style.top = $col$$inline_699_top$$inline_718$$ + 
            "px");
            (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, $col$$inline_699_top$$inline_718$$) >= this.getHeight() && ($col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.style.borderBottomStyle = "none");
            (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "row", $headerContext$$inline_725_headerMetadata$$inline_724$$) && $col$$inline_729_sortContainer$$inline_9249_styleClass$$inline_698$$.setAttribute($headerContext$$inline_696_headerContext$$inline_9245_resizableAttribute$$inline_732_sortIcon$$inline_702$$, "true");
            $dir$$inline_691_renderer$$inline_716$$ != D.$JSCompiler_alias_NULL$$ ? ($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ = $dir$$inline_691_renderer$$inline_716$$.call(this, $headerContext$$inline_725_headerMetadata$$inline_724$$), $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$ != D.$JSCompiler_alias_NULL$$ && 
            ($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$) : $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.parentNode == 
            D.$JSCompiler_alias_NULL$$ && $capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString && ($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = window.document.createElement("span"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.className = 
            this.getMappedStyle("headercelltext"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.appendChild(window.document.createTextNode($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString())), $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$)))) : 
            ($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$ = window.document.createElement("span"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.className = this.getMappedStyle("headercelltext"), $direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$.appendChild(window.document.createTextNode($capability$$inline_9241_content$$inline_703_content$$inline_733_headerData$$inline_694_headerData$$inline_723_iconClassString$$inline_9247$$.toString())), 
            $headerContent$$inline_690_headerContent$$inline_737_headerContext$$inline_9240_sortIcon$$inline_9246$$.appendChild($direction$$inline_9248_index$$inline_693_index$$inline_721_sortable$$inline_9242_textWrapper$$inline_689_textWrapper$$inline_736$$));
            $i$$inline_692_isAppend$$inline_717$$ ? $fragment$$inline_720_sortableAttribute$$inline_704$$.appendChild($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$) : $fragment$$inline_720_sortableAttribute$$inline_704$$.insertBefore($headerMetadata$$inline_695_inlineStyle$$inline_697_row$$inline_726_width$$inline_700$$, $fragment$$inline_720_sortableAttribute$$inline_704$$.firstChild);
            $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ += $height$$inline_728_inlineStyle$$inline_727$$
          }
          if($i$$inline_692_isAppend$$inline_717$$ && 0 != $firstHeader$$inline_687_headerCount$$inline_713$$) {
            $axis$$10_renderer$$inline_683_scroller$$inline_714$$.appendChild($fragment$$inline_720_sortableAttribute$$inline_704$$), -1 != this.$m_endRowHeader$ && 0 != $firstHeader$$inline_687_headerCount$$inline_713$$ && ($currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ = $axis$$10_renderer$$inline_683_scroller$$inline_714$$.childNodes[this.$m_endRowHeader$ - this.$m_startRowHeader$ + 1], $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$ != D.$JSCompiler_alias_NULL$$ && 
            ($currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$.firstChild.style.borderBottomStyle = "")), this.$m_endRowHeader$ = $rowHeader$$inline_9251_start$$10$$ + $firstHeader$$inline_687_headerCount$$inline_713$$ - 1, this.$m_endRowHeaderPixel$ += $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$
          }else {
            if($rowInsert$$) {
              $currentLeft$$inline_685_prev$$inline_731_rowHeaderContent$$inline_734$$.insertBefore($fragment$$inline_720_sortableAttribute$$inline_704$$, $headerCount$$inline_686_referenceRow$$inline_735$$);
              $rowHeader$$inline_9251_start$$10$$ < this.$m_startRowHeader$ && (this.$m_startRowHeader$ = $rowHeader$$inline_9251_start$$10$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$));
              this.$m_endRowHeader$ += $firstHeader$$inline_687_headerCount$$inline_713$$;
              this.$m_endRowHeaderPixel$ = window.Math.max(0, this.$m_endRowHeaderPixel$ + $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$);
              for($rowHeader$$inline_9251_start$$10$$ = $headerCount$$inline_686_referenceRow$$inline_735$$;$rowHeader$$inline_9251_start$$10$$;) {
                $rowHeader$$inline_9251_start$$10$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$inline_9251_start$$10$$, "top") + $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$ + "px", $rowHeader$$inline_9251_start$$10$$ = $rowHeader$$inline_9251_start$$10$$.nextSibling
              }
            }else {
              $axis$$10_renderer$$inline_683_scroller$$inline_714$$.insertBefore($fragment$$inline_720_sortableAttribute$$inline_704$$, $headerClass$$inline_688_resizer$$inline_715$$.nextSibling), this.$m_startRowHeader$ -= $firstHeader$$inline_687_headerCount$$inline_713$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $adjustment$$inline_9252_totalColWidth$$inline_684_totalRowHeight$$inline_719$$)
            }
          }
          $rowInsert$$ || $root$$10$$.appendChild($axis$$10_renderer$$inline_683_scroller$$inline_714$$);
          !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endRowHeader$ + 1 >= $count$$7_totalCount$$inline_711$$) && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
        $avgWidth$$inline_701_results$$.getCount() < $headerRange$$3_scroller$$inline_682$$.count && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) ? ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), !this.$m_initialized$ && !$rowInsert$$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))) : (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && (this.$m_initialized$ || (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12$$, $index$$47_key$$30$$, $data$$21$$, $metadata$$, $elem$$3$$) {
  var $headerContext$$, $prop$$4$$;
  $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12$$;
  $headerContext$$.index = $index$$47_key$$30$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $elem$$3$$ != D.$JSCompiler_alias_NULL$$ && ($headerContext$$.parentElement = $elem$$3$$.firstChild);
  $index$$47_key$$30$$ = $metadata$$.key;
  $index$$47_key$$30$$ != D.$JSCompiler_alias_NULL$$ && $elem$$3$$ != D.$JSCompiler_alias_NULL$$ && ("row" === $axis$$12$$ ? $elem$$3$$.parentNode.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$47_key$$30$$) : $elem$$3$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$47_key$$30$$));
  for($prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$4$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  var $count$$8$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, $rowCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || ($rowRange_rowStart$$ < this.$m_startRow$ ? $rowCount$$2$$ = window.Math.min($rowCount$$2$$, this.$m_startRow$) : ($count$$8$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$8$$ && ($rowCount$$2$$ = 
  window.Math.min($rowCount$$2$$, window.Math.max(0, $count$$8$$ - this.$m_endRow$)))))), $colCount$$1$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$1$$ = window.Math.min($colCount$$1$$, this.$m_startCol$) : ($count$$8$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$8$$ && ($colCount$$1$$ = window.Math.min($colCount$$1$$, 
  window.Math.max(0, $count$$8$$ - this.$m_endCol$)))))), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$4$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$4$$, scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$4_successCallback$$27$$.success : 
  this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$4$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$3_databody$$5$$, $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$, $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$) {
  var $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$, $scrollerContentHeight$$inline_811_totalColumnCount$$, $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$, $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$, $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$, 
  $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$, $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$, $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$, $databodyContent_scroller$$8_viewportTop$$inline_758$$, $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$, 
  $avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $avgWidth$$1_renderer$$inline_799$$;
  $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_811_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = $cellRange$$3_databody$$5$$[0].start;
    $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ = $cellRange$$3_databody$$5$$[1].start;
    $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ = this.$m_fetching$.cells;
    $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ = $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$.row;
    $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ = $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$.column;
    if(!($columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ == $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ == $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$)) {
      return
    }
    if($JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $i$$inline_805_viewportRight$$inline_761$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ = $cellRange$$3_databody$$5$$[0].start, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = 
      $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ = $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ + $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$, $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = 
      $cellRange$$3_databody$$5$$[1].start, $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ = $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ *= this.$m_avgRowHeight$, $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ *= this.$m_avgRowHeight$, $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ = 
      this.$m_avgColWidth$ * $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ + $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$), $databodyContent_scroller$$8_viewportTop$$inline_758$$ = this.$m_currentScrollTop$, $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ = 
      this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = this.$m_currentScrollLeft$, $i$$inline_805_viewportRight$$inline_761$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == 
      $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ < $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$) && ($columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ = $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$), 
      !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ && $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ < $i$$inline_805_viewportRight$$inline_761$$) && ($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = $i$$inline_805_viewportRight$$inline_761$$), $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = 
      $databodyContent_scroller$$8_viewportTop$$inline_758$$ >= $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ && $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ <= $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ && $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ >= 
      $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ && $i$$inline_805_viewportRight$$inline_761$$ <= $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$);
      $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = !$JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$
    }
    if($JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ = $cellRange$$3_databody$$5$$[0];
  $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ = $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$.start;
  $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ = $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = 0 < $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ && ($JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ > this.$m_endRow$ || $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ + $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$.count || $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, 
  "row") && this.$m_endRow$ + $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ + 1 >= $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ || $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ < $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$.count) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = $cellRange$$3_databody$$5$$[1];
  $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ = $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$.start;
  $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ = $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ = 0 < $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ && ($columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ == this.$m_endCol$ + 1 || $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ + $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + 
  $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ + 1 >= $scrollerContentHeight$$inline_811_totalColumnCount$$ || $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ < $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$.count) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$3_databody$$5$$ = this.$m_databody$;
  $cellRange$$3_databody$$5$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$3_databody$$5$$ = $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$.databody);
  $databodyContent_scroller$$8_viewportTop$$inline_758$$ = this.$m_scroller$;
  $databodyContent_scroller$$8_viewportTop$$inline_758$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent_scroller$$8_viewportTop$$inline_758$$ = $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$.scroller);
  $databodyContent_scroller$$8_viewportTop$$inline_758$$.hasChildNodes() ? $columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$.firstChild : ($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$ = window.document.createElement("div"), $databodyContent_scroller$$8_viewportTop$$inline_758$$.appendChild($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$));
  $cellRange$$3_databody$$5$$.hasChildNodes() ? ($databodyContent_scroller$$8_viewportTop$$inline_758$$ = $cellRange$$3_databody$$5$$.firstChild, $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$.firstChild) : ($databodyContent_scroller$$8_viewportTop$$inline_758$$ = window.document.createElement("div"), $databodyContent_scroller$$8_viewportTop$$inline_758$$.className = this.getMappedStyle("scroller") + 
  ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ = window.document.createElement("div"), $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$, 
  1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$, 0), $databodyContent_scroller$$8_viewportTop$$inline_758$$.appendChild($horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$));
  if($avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ || $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$) {
    if(($avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = !$JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ && $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = 
    this.$m_endRowPixel$ : $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ ? ($columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$.childNodes[$JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ - this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$, 
    "top")) : $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = this.$m_startRowPixel$, $avgWidth$$inline_804_fragment$$1_row$$inline_803$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ || 
    $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$, $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$, $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$, $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$, 
    $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$.totalRowHeight, $avgWidth$$1_renderer$$inline_799$$ = $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$.avgWidth, $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = 
    $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$, $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$) {
      $databodyContent_scroller$$8_viewportTop$$inline_758$$.appendChild($avgWidth$$inline_804_fragment$$1_row$$inline_803$$);
      if(-1 != this.$m_endRow$ && 0 != $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ && ($columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$.childNodes[this.$m_endRow$ - this.$m_startRow$ + 1], $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$ != D.$JSCompiler_alias_NULL$$)) {
        $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$ = $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$.childNodes;
        for($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ = 0;$bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ < $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$.length;$bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ += 1) {
          $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$[$bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ = $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ + $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ - 1;
      this.$m_endRowPixel$ += $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$3_databody$$5$$.hasChildNodes() || ($cellRange$$3_databody$$5$$.appendChild($databodyContent_scroller$$8_viewportTop$$inline_758$$), this.$isDraggable$() && ($adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = window.document.createElement("div"), $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ = window.document.createElement("div"), $cellRange$$3_databody$$5$$.appendChild($adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), 
      $cellRange$$3_databody$$5$$.appendChild($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$)))
    }else {
      if($JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$) {
        if($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ && $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ == D.$JSCompiler_alias_TRUE$$) {
          var $databodyContent$$inline_766$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$, $referenceRow$$inline_768$$ = $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$;
          $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$;
          var $i$$inline_773$$, $j$$inline_774$$, $shift$$inline_776$$, $beforeCount$$inline_778$$, $startRowIdx$$inline_779$$, $transition_duration$$inline_781$$, $z_index$$inline_782$$, $transition_timing$$inline_783$$, $transform$$inline_784$$;
          $startRowIdx$$inline_779$$ = $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ - this.$m_startRow$;
          $beforeCount$$inline_778$$ = $startRowIdx$$inline_779$$ + $avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes.length;
          $shift$$inline_776$$ = $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ * $avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes.length;
          $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ = [];
          (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_766$$.childNodes[$startRowIdx$$inline_779$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E3);
          for($j$$inline_774$$ = 0;$j$$inline_774$$ < $avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes.length;$j$$inline_774$$++) {
            $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$.push($avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes[$j$$inline_774$$].style.top.split("px")[0] - ($startRowIdx$$inline_779$$ - 1) * $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$)
          }
          for($avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = 0;$avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ < $avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes.length;$avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$++) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($avgWidth$$inline_804_fragment$$1_row$$inline_803$$.childNodes[$avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$], 0, 0, "linear", "-" + $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$[$avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$])
          }
          $databodyContent$$inline_766$$.insertBefore($avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $referenceRow$$inline_768$$);
          (0,window.setTimeout)(function() {
            for($j$$inline_774$$ = $startRowIdx$$inline_779$$;$j$$inline_774$$ <= $beforeCount$$inline_778$$;$j$$inline_774$$++) {
              (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($databodyContent$$inline_766$$.childNodes[$j$$inline_774$$], "500ms", 0, "ease-out", 0)
            }
            $databodyContent$$inline_766$$.childNodes[$beforeCount$$inline_778$$].addEventListener("transitionend", function() {
              $transition_duration$$inline_781$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
              $z_index$$inline_782$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index");
              $transition_timing$$inline_783$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
              $transform$$inline_784$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
              for($i$$inline_773$$ = 1;$i$$inline_773$$ < $databodyContent$$inline_766$$.childElementCount;$i$$inline_773$$++) {
                $databodyContent$$inline_766$$.children[$i$$inline_773$$].style[(0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform")] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_766$$.childNodes[$startRowIdx$$inline_779$$], $z_index$$inline_782$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_766$$.childNodes[$i$$inline_773$$], $transition_duration$$inline_781$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_766$$.childNodes[$i$$inline_773$$], 
                $transition_timing$$inline_783$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_766$$.childNodes[$i$$inline_773$$], $transform$$inline_784$$, 0, "remove"), this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$))
              }
              (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_768$$, $shift$$inline_776$$)
            }, D.$JSCompiler_alias_FALSE$$)
          }, 0)
        }else {
          $databodyContent_scroller$$8_viewportTop$$inline_758$$.insertBefore($avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$)
        }
        $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$));
        this.$m_endRow$ += $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$;
        this.$m_endRowPixel$ += $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
        if($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$) {
          -1 != $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, this.$m_endRowPixel$);
          for($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ = $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$;$bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$;) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$, "530ms", "0ms", "ease-out", $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ = $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$.nextSibling
          }
        }else {
          (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
        }
      }else {
        $databodyContent_scroller$$8_viewportTop$$inline_758$$.insertBefore($avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$.nextSibling), this.$m_startRow$ -= $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
      }
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ && ($bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$ = $databodyContent_scroller$$8_viewportTop$$inline_758$$.childNodes, $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ == $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$.length - 1)) {
      $avgWidth$$1_renderer$$inline_799$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($i$$inline_805_viewportRight$$inline_761$$ = 0;$i$$inline_805_viewportRight$$inline_761$$ < $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$;$i$$inline_805_viewportRight$$inline_761$$ += 1) {
        $avgWidth$$inline_804_fragment$$1_row$$inline_803$$ = $bottomHotspot_i$$14_obj$$32_row$$inline_787_rows$$1$$[$i$$inline_805_viewportRight$$inline_761$$ + 1], $avgWidth$$inline_804_fragment$$1_row$$inline_803$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_804_fragment$$1_row$$inline_803$$, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ + 
        $i$$inline_805_viewportRight$$inline_761$$, $avgWidth$$1_renderer$$inline_799$$, D.$JSCompiler_alias_FALSE$$, $columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$, $i$$inline_805_viewportRight$$inline_761$$ == $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$ - 1, $columnBandingInterval$$inline_800_prev$$1_referenceRow$$1$$, $horizontalGridlines$$inline_801_resizer$$1_tops$$inline_777_viewportBottom$$inline_759$$, $avgHeight$$inline_770_isAppend$$1_jk$$inline_775_rowRangeNeedsUpdate_verticalGridlines$$inline_802_viewportLeft$$inline_760$$)
      }
      $avgWidth$$1_renderer$$inline_799$$ = $avgWidth$$inline_804_fragment$$1_row$$inline_803$$
    }
  }
  $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_811_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_811_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_799$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_799$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_799$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_811_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$) || $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ != 
    (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent_scroller$$8_viewportTop$$inline_758$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_757_columnRange$$3_columnStart$$inline_752_inner$$, $adjustment$$inline_788_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_756$$ && ($columnStart$$1_requestRowStart$$inline_744_rowRange$$3_rowStart$$inline_750_rowStartPixel$$inline_754$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$ : this.$m_endCol$ += $columnCount$$1_requestCellRanges$$inline_743_requestColumnStart$$inline_745_rowEnd$$inline_751_rowEndPixel$$inline_755$$);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_811_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$), $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$), 
  $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ && $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_810_scrollerContentWidth$$inline_812_top$$3$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ && $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ == 
  $scrollerContentHeight$$inline_811_totalColumnCount$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), ($JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ || this.$m_endRowHeaderPixel$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$5$$) && (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$) > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$5$$)) && (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this)) : 
  ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$), 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, this.$m_scrollIndexAfterFetch$) && (this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? 
  "row" === this.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_scrollIndexAfterFetch$.row == this.$m_active$.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.column) && this.$highlightActive$(), this.$m_scrollIndexAfterFetch$ = 
  D.$JSCompiler_alias_NULL$$)) : this.$highlightActive$(), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$3_databody$$5$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$, $JSCompiler_inline_result$$217_JSCompiler_temp$$216_responseRowStart$$inline_741_rowCount$$inline_762_rowStart$$2$$ + 
  $columnCount$$inline_763_responseColumnStart$$inline_742_rowCount$$4$$)), $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:this.$m_endRow$ + 1, colnum:this.$m_endCol$ + 1}), this.$m_dataSource$.getExpandedKeys && ($scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:this.$m_dataSource$.getExpandedKeys().length}), 
  $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ + ". " + $scrollerWidth$$inline_809_summaryExpanded$$inline_816_totalRowCount$$), $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ = $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$ + ". " + this.$m_resources$.getTranslatedText("accessibleInitialFocus"), 
  this.$m_accSummary$.innerHTML = $JSCompiler_inline_result$$56_rowInsert$$2_scrollerHeight$$inline_808_summary$$inline_815$$)
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$3$$, $isAppendOrInsert$$, $top$$4$$, $rowStart$$5$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$3$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$5$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$16_index$$50$$, $i$$17$$, $shimHeaderContext_styleClass$$3$$, $inlineStyle$$2$$;
  $renderer$$3$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for($i$$17$$ = $totalRowHeight$$2$$ = 0;$i$$17$$ < $rowCount$$6$$;$i$$17$$ += 1) {
    $height$$16_index$$50$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$17$$ : $rowStart$$5$$ + ($rowCount$$6$$ - 1 - $i$$17$$), $row$$5$$ = window.document.createElement("div"), $avgWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$5$$, $height$$16_index$$50$$, $renderer$$3$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$3$$, $i$$17$$ == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, 
    $verticalGridlines$$2$$, $top$$4$$ + (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$)), -1 == $JSCompiler_StaticMethods__addRows$self$$.$m_endRowHeader$ && ($shimHeaderContext_styleClass$$3$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods__addRows$self$$, "row", $height$$16_index$$50$$, D.$JSCompiler_alias_NULL$$, {key:$JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$5$$)}, D.$JSCompiler_alias_NULL$$), 
    $inlineStyle$$2$$ = $JSCompiler_StaticMethods__addRows$self$$.$m_options$.$getInlineStyle$("row", $shimHeaderContext_styleClass$$3$$), $shimHeaderContext_styleClass$$3$$ = $JSCompiler_StaticMethods__addRows$self$$.$m_options$.$getStyleClass$("row", $shimHeaderContext_styleClass$$3$$), $row$$5$$.style.cssText = $inlineStyle$$2$$, $row$$5$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row") + " " + $shimHeaderContext_styleClass$$3$$, (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, 
    $row$$5$$, $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$5$$)), $row$$5$$.style.cssText = "", $row$$5$$.className = ""), $row$$5$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), 1 === window.Math.floor($height$$16_index$$50$$ / $rowBandingInterval$$) % 2 && ($row$$5$$.className += " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded")), $height$$16_index$$50$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, 
    $row$$5$$, $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$5$$)), $totalRowHeight$$2$$ += $height$$16_index$$50$$, $isAppendOrInsert$$ ? ($row$$5$$.style.top = $top$$4$$ + "px", $top$$4$$ += $height$$16_index$$50$$, $fragment$$3$$.appendChild($row$$5$$)) : ($top$$4$$ -= $height$$16_index$$50$$, $row$$5$$.style.top = $top$$4$$ + "px", $fragment$$3$$.insertBefore($row$$5$$, $fragment$$3$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$4$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$6$$, $adjustment$$1$$) {
  for(;$row$$6$$;) {
    $row$$6$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$6$$, "top") + $adjustment$$1$$ + "px", $row$$6$$ = $row$$6$$.nextSibling
  }
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  if(-1 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$ != D.$JSCompiler_alias_NULL$$) {
    return $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$
  }
  $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_defaultColumnHeaderCellHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getRowHeaderWidth$self$$);
  return $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_defaultRowHeaderWidth$
};
D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$ = function $$JSCompiler_StaticMethods_getColumnHeaderHeight$$$($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$) {
  if(-1 === $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_endColHeader$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$ != D.$JSCompiler_alias_NULL$$) {
    return $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$
  }
  $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_defaultColumnHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$);
  return $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_defaultColumnHeaderHeight$
};
D.$JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_height$$17$$, $row$$8$$, $bottom$$1_top$$7$$) {
  var $colHeaderHeight$$3$$;
  $colHeaderHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$17$$);
  if($bottom$$1_top$$7$$ != D.$JSCompiler_alias_NULL$$) {
    return $colHeaderHeight$$3$$ + $bottom$$1_top$$7$$
  }
  $bottom$$1_top$$7$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$8$$, "top");
  $JSCompiler_StaticMethods_getRowBottom$self_height$$17$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$17$$, $row$$8$$);
  return!(0,window.isNaN)($bottom$$1_top$$7$$) && !(0,window.isNaN)($JSCompiler_StaticMethods_getRowBottom$self_height$$17$$) ? $colHeaderHeight$$3$$ + $bottom$$1_top$$7$$ + $JSCompiler_StaticMethods_getRowBottom$self_height$$17$$ : $colHeaderHeight$$3$$
};
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$9$$, $rowIndex$$, $renderer$$4$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
  var $isAppend$$2$$, $cellContent$$, $firstColumn$$, $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$, $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$, $currentLeft$$1$$, $dir$$6$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$2$$, $cellMetadata_metadata$$inline_821$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$, $j$$4$$, $cell$$, $columnIndex_textWrapper$$2$$, $keyAttribute$$, $selectionAffordanceAppend$$;
  $isAppend$$2$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$9$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.children[$row$$9$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$9$$.children[$row$$9$$.children.length - 
  2] : $row$$9$$.lastChild);
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.getMappedAttribute("key");
  $dir$$6$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$4$$ = 0;$j$$4$$ < $columnCount$$2$$;$j$$4$$ += 1) {
    $columnIndex_textWrapper$$2$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$4$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$4$$);
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ = {row:$rowIndex$$, column:$columnIndex_textWrapper$$2$$};
    $cellData_content$$2$$ = $cellSet$$4$$.getData($indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$);
    $cellMetadata_metadata$$inline_821$$ = $cellSet$$4$$.getMetadata($indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$);
    $cell$$ = window.document.createElement("div");
    $cell$$.setAttribute("tabIndex", -1);
    $cellContent$$ = window.document.createElement("div");
    $cellContent$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cellcontent");
    $cell$$.appendChild($cellContent$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$ = $cellData_content$$2$$;
    var $cellContext$$inline_823$$ = D.$JSCompiler_alias_VOID$$, $prop$$inline_824$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_823$$ = {};
    $cellContext$$inline_823$$.parentElement = $cell$$.firstChild;
    $cellContext$$inline_823$$.indexes = $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$;
    $cellContext$$inline_823$$.data = $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$;
    $cellContext$$inline_823$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$;
    $cellContext$$inline_823$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.$m_dataSource$;
    for($prop$$inline_824$$ in $cellMetadata_metadata$$inline_821$$) {
      $cellMetadata_metadata$$inline_821$$.hasOwnProperty($prop$$inline_824$$) && ($cellContext$$inline_823$$[$prop$$inline_824$$] = $cellMetadata_metadata$$inline_821$$[$prop$$inline_824$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$, $cellContext$$inline_823$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$ = $cellContext$$inline_823$$;
    $row$$9$$.hasAttribute($keyAttribute$$) || $row$$9$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.keys.row);
    -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColHeader$ && (0 == $rowIndex$$ && !$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_initialized$) && ($cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "column", $columnIndex_textWrapper$$2$$, D.$JSCompiler_alias_NULL$$, {key:$JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.keys.column}, 
    D.$JSCompiler_alias_NULL$$), $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("column", $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$), $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("column", $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$), $cell$$.style.cssText = 
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$, $cell$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("colheadercell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("headercell") + " " + $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$, (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.keys.column), 
    $cell$$.style.cssText = "", $cell$$.className = "");
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$);
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$.style.cssText = $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$);
    "" != $cell$$.style.height && ($cell$$.style.height = "");
    "" != $cell$$.style.width && ($cell$$.style.width = "");
    $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$ = 1 === window.Math.floor($columnIndex_textWrapper$$2$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$);
    $cell$$.className = $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$ + " " + $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ : $cellStyleClass_data$$inline_820_shimHeaderContext$$1_styleClass$$4$$;
    $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$.keys.column);
    if("hidden" === $verticalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex_textWrapper$$2$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$1$$ + $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth()) {
      "left" === $dir$$6$$ ? $cell$$.style.borderRightStyle = "none" : $cell$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $bottom$$2$$) >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight()) {
      $cell$$.style.borderBottomStyle = "none"
    }
    $isAppend$$2$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$, $dir$$6$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$ - $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$, $dir$$6$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($cell$$);
    $renderer$$4$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData_content$$2$$ = $renderer$$4$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_818_cellContext$$1$$), $cellData_content$$2$$ != D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$.parentNode === D.$JSCompiler_alias_NULL$$ || $cellData_content$$2$$.parentNode instanceof window.DocumentFragment ? $cellContent$$.appendChild($cellData_content$$2$$) : $cellData_content$$2$$.parentNode == 
    D.$JSCompiler_alias_NULL$$ && $cellData_content$$2$$.toString && ($columnIndex_textWrapper$$2$$ = window.document.createElement("span"), $columnIndex_textWrapper$$2$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$2$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$2$$)))) : ($cellData_content$$2$$ == D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$ = 
    ""), $columnIndex_textWrapper$$2$$ = window.document.createElement("span"), $columnIndex_textWrapper$$2$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$2$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$2$$));
    $isAppend$$2$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$9$$.insertBefore($cell$$, $selectionAffordanceAppend$$) : $row$$9$$.appendChild($cell$$), $currentLeft$$1$$ += $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$) : ($row$$9$$.insertBefore($cell$$, $firstColumn$$), $firstColumn$$ = $cell$$, $currentLeft$$1$$ -= $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$, $totalWidth$$ += $indexes$$8_indexes$$inline_819_inlineStyle$$3_inlineStyleClass_width$$17$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? $totalWidth$$ / $columnCount$$2$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$3_msg$$;
  $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.innerHTML = $left$$3_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$3_msg$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$4_scrollLeft$$) {
  var $scroller$$9$$;
  $event$$4_scrollLeft$$ || ($event$$4_scrollLeft$$ = window.event);
  $scroller$$9$$ = $event$$4_scrollLeft$$.target ? $event$$4_scrollLeft$$.target : $event$$4_scrollLeft$$.srcElement;
  $event$$4_scrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)(this.$m_utils$, $scroller$$9$$);
  this.scrollTo($event$$4_scrollLeft$$, $scroller$$9$$.scrollTop)
};
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_diff$$, $deltaY$$) {
  var $scrollLeft$$1$$, $scrollTop$$1$$, $scrollerScrollLeft$$, $scrollerScrollTop$$;
  0 != $deltaX_diff$$ && 0 != $deltaY$$ && ($deltaX_diff$$ > $deltaY$$ ? $deltaY$$ = 0 : $deltaX_diff$$ = 0);
  $scrollLeft$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX_diff$$;
  $scrollTop$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $scrollLeft$$1$$)));
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "row") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $scrollTop$$1$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$) && ($scrollerScrollTop$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop, $scrollerScrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$), 0 != $deltaY$$ && $scrollTop$$1$$ != $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop ? 
  ($deltaX_diff$$ = $scrollTop$$1$$ - $scrollerScrollTop$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = 0 < $deltaX_diff$$ ? window.Math.min(50, $deltaX_diff$$) : window.Math.max(-50, $deltaX_diff$$)) : 0 != $deltaX_diff$$ && $scrollLeft$$1$$ != $scrollerScrollLeft$$ && ($deltaX_diff$$ = $scrollLeft$$1$$ - $scrollerScrollLeft$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = 0 < $deltaX_diff$$ ? window.Math.min(50, $deltaX_diff$$) : window.Math.max(-50, 
  $deltaX_diff$$)))
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$3$$, $scrollTop$$3$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$3$$;
  this.$m_currentScrollTop$ = $scrollTop$$3$$;
  $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$3$$ > this.$m_endColPixel$ || $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$3$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$3$$, $scrollTop$$3$$);
  var $scrollerContent$$inline_832_viewportRight$$inline_829$$;
  $scrollerContent$$inline_832_viewportRight$$inline_829$$ = $scrollLeft$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$3$$ || this.$m_endColPixel$ < $scrollerContent$$inline_832_viewportRight$$inline_829$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$3$$) {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
    var $scrollerContentHeight$$inline_833$$, $scrollerContentWidth$$inline_834$$, $databodyContent$$inline_835$$;
    $scrollerContent$$inline_832_viewportRight$$inline_829$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_833$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_832_viewportRight$$inline_829$$);
    $scrollerContentWidth$$inline_834$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_832_viewportRight$$inline_829$$);
    $databodyContent$$inline_835$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_833$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_833$$) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_832_viewportRight$$inline_829$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_835$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_834$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_834$$) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_832_viewportRight$$inline_829$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_835$$, this.$m_endColPixel$)
    }
    this.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$4$$, $scrollTop$$4$$, $databody$$6$$, $colHeader$$3$$, $rowHeader$$5$$;
  $scrollLeft$$4$$ = this.$m_currentScrollLeft$;
  $scrollTop$$4$$ = this.$m_currentScrollTop$;
  $databody$$6$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$5$$ = this.$m_rowHeader$.firstChild;
  $databody$$6$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  this.$m_resources$.isRTLMode() ? ($databody$$6$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$4$$ + "px, 0, 0)") : ($databody$$6$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$4$$ + "px, 0, 0)");
  $rowHeader$$5$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$4$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$) {
  var $scrollLeft$$5$$, $scrollTop$$5$$, $databody$$7$$, $colHeader$$4$$, $rowHeader$$6$$;
  $scrollLeft$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollTop$;
  $databody$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_colHeader$.firstChild;
  $rowHeader$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_rowHeader$.firstChild;
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && (new window.WebKitCSSMatrix).hasOwnProperty("m11")) {
    if($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ : $scrollTop$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$)), 
      $databody$$7$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$)
    }
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_resources$.isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, 0, 0)");
    $rowHeader$$6$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)"
  }else {
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollTop$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$5$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), 
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$6$$, -$scrollTop$$5$$, "top")
  }
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $scrollTop$$6_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$6_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$6_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$6_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$6_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$6_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$6_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$6_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$6_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$6_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    this.$m_colHeader$.firstChild.innerHTML = "";
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$6_startRow$$, $scrollLeft$$6_startCol$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$6_startCol$$, $startRowPixel$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$4$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerResizer$$, $headerContent$$2$$;
  $headerContent$$2$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  $headerContent$$2$$ != D.$JSCompiler_alias_NULL$$ && ($headerResizer$$ = $headerContent$$2$$.firstChild.cloneNode(), $headerContent$$2$$.innerHTML = "", $headerContent$$2$$.appendChild($headerResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($headerResizer$$, $startRowPixel$$1$$));
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$4$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$, $startRowPixel$$2$$) {
  var $databodyContent$$3$$, $databodyResizer$$;
  $databodyContent$$3$$ = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  $databodyContent$$3$$ != D.$JSCompiler_alias_NULL$$ && ($databodyResizer$$ = $databodyContent$$3$$.firstChild.cloneNode(), $databodyContent$$3$$.innerHTML = "", $databodyContent$$3$$.appendChild($databodyResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyResizer$$, $startRowPixel$$2$$));
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$, $fetchSize$$inline_883_scrollTop$$7$$) {
  var $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$, $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$;
  $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_FALSE$$;
  $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ = $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$);
    if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$, $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$, $i$$inline_844_prevLeft$$inline_865$$, $header$$inline_846$$, $prevLeft$$inline_847$$;
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.childNodes;
      for($i$$inline_844_prevLeft$$inline_865$$ = $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = 0;$i$$inline_844_prevLeft$$inline_865$$ < $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$.length;$i$$inline_844_prevLeft$$inline_865$$ += 1) {
        if($header$$inline_846$$ = $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$[$i$$inline_844_prevLeft$$inline_865$$], $prevLeft$$inline_847$$ = $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$, $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$inline_846$$, "left"), $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ > 
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $i$$inline_844_prevLeft$$inline_865$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_847$$;
          break
        }
      }
      for($column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = 0;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ < $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ += 1) {
        $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.removeChild($colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.firstChild)
      }
    }
    $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if($fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$) {
      $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"));
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, 
      $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$))) {
        $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.lastChild;
        for($column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ > $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$;) {
          $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.removeChild($column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 1, $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = 
          $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.lastChild, $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$.offsetWidth
        }
      }
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1);
    if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = 
    $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$.length))) {
      $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = 0;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ < $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$.length;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ += 1) {
        if($column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$[$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$], $i$$inline_844_prevLeft$$inline_865$$ = $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = 
        (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$, "left"), $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ = $column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_844_prevLeft$$inline_865$$;
          break
        }
      }
      for($colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = 1;$colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ < $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$.length;$colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ += 
      1) {
        $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$[$colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$];
        for($column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = 0;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ < $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ += 1) {
          $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$.removeChild($column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$.firstChild)
        }
      }
    }
    $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if($fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$) {
      $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"));
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 
      1, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
      $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$))) {
        $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ = $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$[1];
        $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$.lastChild;
        for($column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ > 
        $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$;) {
          for($column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ = 1;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ < $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$.length;$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$ += 1) {
            $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$ = $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$[$column$$inline_853_headers$$inline_840_i$$inline_863_j$$inline_845_j$$inline_877_k$$inline_868$$], $column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$.removeChild($column$$inline_864_left$$inline_842_row$$inline_878_width$$inline_854$$.lastChild)
          }
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
          $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$.lastChild;
          $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$ = $column$$inline_874_columns$$inline_862_fetchStartCol_indexToRemove$$inline_841_row$$inline_867_threshold$$inline_852_width$$inline_875$$.offsetWidth
        }
      }
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ = $fetchSize$$inline_883_scrollTop$$7$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if(window.Math.max(0, $fetchSize$$inline_883_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_873_fetchStartRow_indexToRemove$$inline_859_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$);
      !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$);
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  if($fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$), $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    if(window.Math.max(0, $fetchSize$$inline_883_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$) {
        return
      }
      $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $fetchSize$$inline_883_scrollTop$$7$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_884_rows$$inline_858_scrollLeft$$7_threshold$$inline_872_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_883_scrollTop$$7$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 
      1);
      !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
      $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $colHeaderContent$$inline_839_colHeaderContent$$inline_851_fetchSize$$1_initFlag_j$$inline_866_left$$inline_860_rows$$inline_876$$ || ($JSCompiler_StaticMethods_fillViewport$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTop$$$($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $rowHeader$$7$$) {
  var $rowHeaderContent$$1$$, $resizer$$2$$, $resizerHeight$$, $header$$4$$, $height$$18$$;
  $rowHeaderContent$$1$$ = $rowHeader$$7$$.firstChild;
  $resizer$$2$$ = $rowHeaderContent$$1$$.firstChild;
  $resizerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$2$$);
  if(!($resizerHeight$$ >= $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $header$$4$$ = $resizer$$2$$.nextSibling;
    for($height$$18$$ = $header$$4$$.offsetHeight;$resizerHeight$$ + $height$$18$$ < $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $rowHeaderContent$$1$$.removeChild($header$$4$$), $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ += $height$$18$$, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeader$ += 1, $resizerHeight$$ += $height$$18$$, $header$$4$$ = $resizer$$2$$.nextSibling, $height$$18$$ = $header$$4$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$2$$, $resizerHeight$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$10$$) {
  var $databodyContent$$7$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$12$$, $height$$19$$;
  $databodyContent$$7$$ = $databody$$10$$.firstChild;
  $resizer$$3$$ = $databodyContent$$7$$.firstChild;
  $resizerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$12$$ = $resizer$$3$$.nextSibling;
    for($height$$19$$ = $row$$12$$.offsetHeight;$resizerHeight$$1$$ + $height$$19$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$7$$.removeChild($row$$12$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$19$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$19$$;
      $row$$12$$ = $resizer$$3$$.nextSibling;
      if($row$$12$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$19$$ = $row$$12$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$3$$, $resizerHeight$$1$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeader$$8$$) {
  var $rowHeaderContent$$2$$, $threshold$$2$$, $row$$13$$, $height$$20$$;
  $rowHeaderContent$$2$$ = $rowHeader$$8$$.firstChild;
  $threshold$$2$$ = $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ <= $threshold$$2$$)) {
    $row$$13$$ = $rowHeaderContent$$2$$.lastChild;
    for($height$$20$$ = $row$$13$$.offsetHeight;$JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ + $height$$20$$ > $threshold$$2$$;) {
      $rowHeaderContent$$2$$.removeChild($row$$13$$), $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ -= $height$$20$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeader$ -= 1, $row$$13$$ = $rowHeaderContent$$2$$.lastChild, $height$$20$$ = $row$$13$$.offsetHeight
    }
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$11$$) {
  var $databodyContent$$8$$, $threshold$$3$$, $row$$14$$, $height$$21$$;
  $databodyContent$$8$$ = $databody$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ <= $threshold$$3$$)) {
    $row$$14$$ = $databodyContent$$8$$.lastChild;
    for($height$$21$$ = $row$$14$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$21$$ > $threshold$$3$$;) {
      $databodyContent$$8$$.removeChild($row$$14$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$21$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$14$$ = $databodyContent$$8$$.lastChild, $height$$21$$ = $row$$14$$.offsetHeight
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$7$$, $direction$$4_id$$3$$, $value$$47$$) {
  var $target$$41$$, $cell$$1$$;
  $target$$41$$ = $event$$7$$.target;
  $cell$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $target$$41$$);
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row").firstChild : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeHeight", $value$$47$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? 
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column") : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeWidth", $value$$47$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? 
  ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : 
  (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$3$$ = $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$7$$, $target$$41$$, $direction$$4_id$$3$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$7$$, $direction$$4_id$$3$$)) : 
  $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $event$$7$$) : $direction$$4_id$$3$$ === this.$m_resources$.getMappedCommand("paste") && (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $event$$7$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$6$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$6$$);
  return $header$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$) {
  var $row$$15$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$.$m_options$, "column");
  return"disable" !== $row$$15$$.width || "disable" !== $row$$15$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$4$$.height
};
D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$ = function $$JSCompiler_StaticMethods__isHeaderResizeEnabled$$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$14$$, $headerContext$$4$$) {
  var $resizable$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$14$$, $headerContext$$4$$);
  return"column" == $axis$$14$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "row" == $axis$$14$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, 
  $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$8$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$9$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$10$$) {
  var $header$$inline_906_row$$16$$;
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$10$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$10$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$10$$.target)) {
    $event$$10$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$10$$.target, this.getMappedStyle("selected"))
  }else {
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$10$$);
    $header$$inline_906_row$$16$$ = this.find($event$$10$$.target, "row");
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_906_row$$16$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$10$$.pageX, this.$m_currentY$ = $event$$10$$.pageY);
    if(!this.$m_isResizing$) {
      var $index$$inline_905$$, $axis$$inline_907$$;
      $header$$inline_906_row$$16$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$10$$.target);
      $header$$inline_906_row$$16$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_905$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$inline_906_row$$16$$), $axis$$inline_907$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$inline_906_row$$16$$));
      $index$$inline_905$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_905$$ != D.$JSCompiler_alias_VOID$$ && ("row" === $axis$$inline_907$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $index$$inline_905$$) : "column" === $axis$$inline_907$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $index$$inline_905$$))
    }
    this.$processed$ === D.$JSCompiler_alias_TRUE$$ && $event$$10$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$11$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$11$$);
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$12$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$12$$.target)) {
    var $header$$inline_911$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target);
    $header$$inline_911$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_911$$, D.$JSCompiler_alias_FALSE$$);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$12$$.target, this.getMappedStyle("hover"))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$13$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$13$$.target)) {
    var $header$$inline_915$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target);
    ($header$$inline_915$$ == D.$JSCompiler_alias_NULL$$ || $event$$13$$.relatedTarget == D.$JSCompiler_alias_NULL$$ || $header$$inline_915$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_915$$, D.$JSCompiler_alias_TRUE$$);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$13$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$13$$.target, this.getMappedStyle("selected"))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$15$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$15$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$15$$), $event$$15$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$16$$) {
  0 === $event$$16$$.button && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$16$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$16$$.pageX, this.$m_currentY$ = $event$$16$$.pageY), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$16$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (this.$m_databodyDragState$ = 
  D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$16$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$17$$) {
  var $row$$17$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$17$$ = this.find($event$$17$$.target, "row"), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$17$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$17$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$18$$) {
  var $row$$18$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$18$$ = this.find($event$$18$$.target, "row"), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$18$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$18$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$19$$) {
  this.$m_databodyMove$ ? (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$19$$) : this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$21$$) {
  var $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$;
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
    9 === $event$$21$$.keyCode && ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$), 
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) : this.$activeAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$), 
    $event$$21$$.preventDefault())
  }else {
    if(!(9 === $event$$21$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || "actionable" != this.$m_keyMode$))) {
      if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
        if(this.$m_activeHeader$.elem != window.document.activeElement) {
          return
        }
        var $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$;
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_FALSE$$;
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          if($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = $event$$21$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$)) {
            $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$;
            var $elem$$inline_9263_shiftKey$$inline_936$$, $processed$$inline_9265$$ = D.$JSCompiler_alias_FALSE$$;
            if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
              this.$m_resources$.isRTLMode() && (37 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ ? $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
              39 : 39 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ && ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
              37));
              $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = this.$m_activeHeader$.axis;
              $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = this.$m_activeHeader$.index;
              $elem$$inline_9263_shiftKey$$inline_936$$ = this.$m_activeHeader$.elem;
              switch($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) {
                case 37:
                  "column" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ && 0 < $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ - 1, $elem$$inline_9263_shiftKey$$inline_936$$.previousSibling), 
                  (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 39:
                  if("row" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = this.createIndex($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$, 
                    0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, $event$$21$$) : this.$activeAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, 
                    $event$$21$$), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ >= this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ < this.$m_dataSource$.getCount("column"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ + 1, $elem$$inline_9263_shiftKey$$inline_936$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                  break;
                case 38:
                  "row" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ && 0 < $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ - 1, $elem$$inline_9263_shiftKey$$inline_936$$.previousSibling), 
                  (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 40:
                  if("column" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = this.createIndex(0, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, $event$$21$$) : this.$activeAndFocus$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, 
                    $event$$21$$), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ >= this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ + 1 < this.$m_dataSource$.getCount("row"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ + 1, $elem$$inline_9263_shiftKey$$inline_936$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9265$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
              }
              $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = $processed$$inline_9265$$
            }else {
              $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_TRUE$$
            }
          }else {
            32 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = this.$m_activeHeader$.index, "row" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? ((0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$, 
            $event$$21$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:$JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ + 1}), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_TRUE$$) : "column" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ && "cell" == this.$m_options$.$getSelectionMode$() && ((0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$, $event$$21$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, 
            "accessibleColumnSelected", {column:$JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ + 1}), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_TRUE$$)) : 
            13 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? ($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = this.$m_activeHeader$.elem, "true" == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$, 
            $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), 
            (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$21$$, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ == 
            D.$JSCompiler_alias_NULL$$ || "descending" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? "ascending" : "descending"), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_TRUE$$)) : 33 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? ($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = this.$m_activeHeader$.elem, (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, this.$m_startRowHeader$, 
            $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$.parentNode.firstChild.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_TRUE$$) : 34 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? ($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = this.$m_activeHeader$.elem, (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, this.$m_endRowHeader$, 
            $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$.parentNode.lastChild), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$21$$)
          }
        }else {
          $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_VOID$$
        }
      }else {
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$));
        if($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$[0] != 
        (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$) {
            if($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_selectionFrontier$)), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ == 
            D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$[0] != (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
              return
            }
          }else {
            return
          }
        }
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target);
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$.parentNode, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
        this.$_getKey$($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
        {event:$event$$21$$, ui:{rowKey:$JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$}}, this.fireEvent("keydown", $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$));
        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$21$$);
        if(!$JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
            $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_FALSE$$;
            $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = $event$$21$$.keyCode;
            if("actionable" == this.$m_keyMode$) {
              27 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), this.$highlightActive$(), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
              D.$JSCompiler_alias_TRUE$$);
              if($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$)) {
                $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target), $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$).length)
              }
              if($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_9263_shiftKey$$inline_936$$ = $event$$21$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ || 
                ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$, 
                $elem$$inline_9263_shiftKey$$inline_936$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this), $event$$21$$))
              }else {
                if(9 === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 13 === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                  $elem$$inline_9263_shiftKey$$inline_936$$ = $event$$21$$.shiftKey, $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = 9 === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ ? $elem$$inline_9263_shiftKey$$inline_936$$ ? 37 : 39 : 
                  $elem$$inline_9263_shiftKey$$inline_936$$ ? 38 : 40, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, 
                  $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$, D.$JSCompiler_alias_FALSE$$, $event$$21$$)
                }
              }
            }else {
              if(113 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 13 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$21$$.target), $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = 
                (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$), 0 < $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$.length && $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$[0].focus()
              }else {
                if(27 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                  this.$m_discontiguousSelection$ && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, D.$JSCompiler_alias_FALSE$$)
                }else {
                  if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) || 36 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 35 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 
                  33 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 34 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                    $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_9263_shiftKey$$inline_936$$ = $event$$21$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ || ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
                    (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$, $elem$$inline_9263_shiftKey$$inline_936$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)))
                  }else {
                    if($event$$21$$.shiftKey && 119 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$) {
                      (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !this.$m_discontiguousSelection$)
                    }else {
                      if(32 == $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ && ($JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$), $elem$$inline_9263_shiftKey$$inline_936$$ = $event$$21$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && 
                      (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($elem$$inline_9263_shiftKey$$inline_936$$ && !$JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ || $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$))) {
                        $JSCompiler_temp$$9062_ctrlKey$$inline_935_elem$$inline_9273_index$$inline_920_index$$inline_9262$$ ? ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, 
                        $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, $event$$21$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:this.$m_active$.columnKey})) : ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
                        this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, $event$$21$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", 
                        {row:this.$m_active$.rowKey})), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = D.$JSCompiler_alias_TRUE$$
                      }
                    }
                  }
                }
              }
            }
            $event$$21$$.altKey && ((0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$) && 53 === $event$$21$$.keyCode) && ((0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_TRUE$$)
          }else {
            $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = $event$$21$$.target, $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ = 
            $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$.tagName, "INPUT" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 
            "TEXTAREA" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || "SELECT" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || "BUTTON" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || 
            "A" === $axis$$inline_919_axis$$inline_9261_direction$$inline_9270_elem$$inline_921_elem$$inline_9276_elems$$inline_9277_keyCode$$inline_922_keyCode$$inline_934_tagName$$inline_9281$$ || $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$.getAttribute("tabIndex") != 
            D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$.getAttribute("tabIndex"), 10) && (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) != 
            $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ ? $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_VOID$$ : ($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = $event$$21$$.keyCode, ((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) || 
            36 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ || 35 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ || 
            33 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ || 34 == $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$) && 
            !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$) ? $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$, 
            D.$JSCompiler_alias_FALSE$$, $event$$21$$) : ($event$$21$$.altKey && ((0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$21$$) && 53 === $event$$21$$.keyCode) && (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ = 
            D.$JSCompiler_alias_FALSE$$))
          }
        }
      }
      $JSCompiler_temp$$308_cell$$2_cell$$inline_927_column$$inline_937_details$$inline_930_elem$$inline_9280_header$$inline_9268_keyCode$$inline_9259_keyCode$$inline_943_newCellIndex_newCellIndex$$inline_9264_processed$$1_processed$$inline_923_processed$$inline_939_row$$inline_928_row$$inline_938_rowKey$$inline_929$$ === D.$JSCompiler_alias_TRUE$$ && $event$$21$$.preventDefault()
    }
  }
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$7$$) {
  var $parentPos$$, $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$;
  if($element$$7$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$7$$.offsetParent);
    $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = $element$$7$$.parentNode;
    var $matrixArray$$inline_948_transformZ$$inline_951$$, $transformY$$inline_950$$;
    $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ ? ($cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = window.document.defaultView.getComputedStyle($cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.getPropertyValue("-moz-transform") || $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.getPropertyValue("-ms-transform") || $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.getPropertyValue("-o-transform") || $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.getPropertyValue("transform"), 
    $matrixArray$$inline_948_transformZ$$inline_951$$ = $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.substr(7, $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$.length - 8).split(", "), $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[4], 
    10), $transformY$$inline_950$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[5], 10), $matrixArray$$inline_948_transformZ$$inline_951$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_948_transformZ$$inline_951$$[6], 10), $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = 
    [$cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$, $transformY$$inline_950$$, $matrixArray$$inline_948_transformZ$$inline_951$$]) : $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$7$$.offsetLeft, 10) + $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$7$$.offsetTop, 10) + $cs$$inline_946_element$$inline_945_transform$$1_transform$$inline_947_transformX$$inline_949$$[1]]
  }
  return[0, 0]
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$inline_955_event$$23$$) {
  var $delta$$1_deltaX$$inline_954$$;
  $deltaY$$inline_955_event$$23$$.preventDefault();
  $deltaY$$inline_955_event$$23$$.wheelDeltaX ? ($delta$$1_deltaX$$inline_954$$ = $deltaY$$inline_955_event$$23$$.wheelDeltaX, $deltaY$$inline_955_event$$23$$ = $deltaY$$inline_955_event$$23$$.wheelDeltaY) : ($delta$$1_deltaX$$inline_954$$ = 0, $deltaY$$inline_955_event$$23$$ = $deltaY$$inline_955_event$$23$$.detail ? -40 * $deltaY$$inline_955_event$$23$$.detail : $deltaY$$inline_955_event$$23$$.wheelDelta);
  $delta$$1_deltaX$$inline_954$$ = {deltaX:$delta$$1_deltaX$$inline_954$$, deltaY:$deltaY$$inline_955_event$$23$$};
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $delta$$1_deltaX$$inline_954$$.deltaX, $delta$$1_deltaX$$inline_954$$.deltaY)
};
D.$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$24$$) {
  var $dir$$9_target$$42$$, $selection$$1$$;
  if(1 == $event$$24$$.touches.length) {
    this.$m_startX$ = $event$$24$$.touches[0].pageX;
    this.$m_startY$ = $event$$24$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_moveCount$ = 0;
    this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$;
    $dir$$9_target$$42$$ = $event$$24$$.touches[0].target;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) {
      if($dir$$9_target$$42$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$9_target$$42$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$9_target$$42$$ = $dir$$9_target$$42$$.parentNode
      }
      if($dir$$9_target$$42$$ = $dir$$9_target$$42$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$9_target$$42$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : D.$JSCompiler_alias_NULL$$) {
        this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_TRUE$$, $selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$9_target$$42$$ ? $selection$$1$$[$selection$$1$$.length - 1].endIndex : $selection$$1$$[$selection$$1$$.length - 1].startIndex
      }
    }
    !this.$m_touchMultipleSelect$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$24$$.touches[0].target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$handleTouchCancel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($deltaX$$inline_958_event$$25$$) {
  var $diffX$$, $diffY$$;
  this.$m_touchActive$ ? ($deltaX$$inline_958_event$$25$$.preventDefault(), this.$m_currentX$ = $deltaX$$inline_958_event$$25$$.touches[0].pageX, this.$m_currentY$ = $deltaX$$inline_958_event$$25$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_touchMultipleSelect$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $deltaX$$inline_958_event$$25$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $deltaX$$inline_958_event$$25$$)) : 10 > window.Math.abs($diffX$$) && 10 > window.Math.abs($diffY$$) ? ($deltaX$$inline_958_event$$25$$ = $diffX$$, this.$m_resources$.isRTLMode() && ($deltaX$$inline_958_event$$25$$ *= -1), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 1.5 * $deltaX$$inline_958_event$$25$$, 1.5 * $diffY$$), this.$m_moveCount$++) : this.$m_moveCount$ = 0, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : 
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$) {
  var $swipeLength$$;
  if(this.$m_touchActive$) {
    if(this.$m_touchMultipleSelect$) {
      $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$.preventDefault(), this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$
    }else {
      if(this.$m_databodyMove$) {
        $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$.preventDefault(), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$);
          return
        }
        if(1 < this.$m_moveCount$) {
          $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$.preventDefault();
          this.$handleTouchCancel$();
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
          return
        }
        $swipeLength$$ = window.Math.round(window.Math.sqrt(window.Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + window.Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
        if(0 < $swipeLength$$) {
          $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$.preventDefault();
          $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ = window.Math.round(180 * window.Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / window.Math.PI);
          0 > $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ && ($event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ = 360 - window.Math.abs($event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$));
          var $rtl$$inline_966$$, $left$$inline_967$$;
          $left$$inline_967$$ = ($rtl$$inline_966$$ = this.$m_resources$.isRTLMode()) ? "right" : "left";
          $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ = 45 >= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ && 0 <= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ ? $left$$inline_967$$ : 360 >= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ && 315 <= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ ? $left$$inline_967$$ : 135 <= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ && 225 >= $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ ? 
          $rtl$$inline_966$$ ? "left" : "right" : 45 < $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ && 135 > $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$ ? "down" : "up";
          this.$handleSwipe$($swipeLength$$, $event$$26_swipeAngle_swipeAngle$$inline_962_swipeDir$$);
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this)
        }
      }
    }
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$);
  this.$m_touchSelectAnchor$ = D.$JSCompiler_alias_NULL$$;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleSwipe$ = function $$JSCompiler_prototypeAlias$$$$handleSwipe$$($swipeLength$$1$$, $swipeDirection$$) {
  $swipeLength$$1$$ *= 3.5;
  "down" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $swipeLength$$1$$) : "up" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, -$swipeLength$$1$$) : "left" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, -$swipeLength$$1$$, 0) : "right" == $swipeDirection$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $swipeLength$$1$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$28$$) {
  var $header$$6$$;
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$28$$.touches.length ? (this.$m_startX$ = $event$$28$$.touches[0].pageX, this.$m_startY$ = $event$$28$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$, $header$$6$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$28$$.target), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$6$$, this.getMappedStyle("focus"))
  }.bind(this), 500), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$6$$, this.getMappedStyle("focus"))
  }.bind(this), 1E3), (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$28$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$28$$))) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$29$$) {
  this.$m_touchActive$ ? ($event$$29$$.preventDefault(), this.$m_currentX$ = $event$$29$$.touches[0].pageX, this.$m_currentY$ = $event$$29$$.touches[0].pageY, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$, (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$29$$)) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$30_headerIndex$$) {
  var $header$$7_headerAxis_touchLength$$;
  $header$$7_headerAxis_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? ($event$$30_headerIndex$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$30_headerIndex$$)) : 500 > $header$$7_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$30_headerIndex$$.target) && ($event$$30_headerIndex$$.preventDefault(), (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, 
  $event$$30_headerIndex$$)) : 1E3 > $header$$7_headerAxis_touchLength$$ && ($header$$7_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$30_headerIndex$$.target), $event$$30_headerIndex$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$7_headerAxis_touchLength$$), $header$$7_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$7_headerAxis_touchLength$$), "row" === $header$$7_headerAxis_touchLength$$ ? 
  (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $event$$30_headerIndex$$) : "column" === $header$$7_headerAxis_touchLength$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $event$$30_headerIndex$$)));
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$26$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$3$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$26$$ = this.$callbacks$[$functionName$$], $callback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callback$$26$$($details$$3$$))
};
D.$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$
};
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$5$$, $height$$22$$) {
  $elem$$5$$.style.height = $height$$22$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$6$$) {
  return(0,window.parseInt)($elem$$6$$.style.height, 10)
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$7$$, $width$$20$$) {
  $elem$$7$$.style.width = $width$$20$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$8$$) {
  return(0,window.parseInt)($elem$$8$$.style.width, 10)
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$9$$, $pix$$, $dir$$10$$) {
  $elem$$9$$.style[$dir$$10$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$10$$, $dir$$11$$) {
  return(0,window.parseInt)($elem$$10$$.style[$dir$$11$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$9$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$9$$.row;
  $columnIndex$$1$$ = $indexes$$9$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$) {
  var $i$$inline_995_operation$$1$$, $keys$$4$$, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$, $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$, 
  $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$;
  if(this.$m_initialized$) {
    if($i$$inline_995_operation$$1$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.operation, $keys$$4$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.keys, $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.fragment, 
    $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.indices, $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.source, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ = 
    $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.indexes, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.silent, "insert" === $i$$inline_995_operation$$1$$) {
      $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.result, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ != D.$JSCompiler_alias_NULL$$ ? $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ && 
      $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ instanceof window.oj.FlattenedTreeDataGridDataSource ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, D.$JSCompiler_alias_TRUE$$) : $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ ? 
      (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$) : (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$) : 
      ($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$), 3 === $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ || 2 === $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ && 
      $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$.row == this.$m_endRow$ + 1 ? $keys$$4$$.row != D.$JSCompiler_alias_NULL$$ && (this.fetchHeaders("row", $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$.row, 
      this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$})) : (1 === $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, this.$m_startRowHeaderPixel$ += this.$m_avgRowHeight$, this.$m_endRowPixel$ += 
      this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = this.$m_databody$.firstChild.childNodes[1], $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, 
      this.$m_avgRowHeight$), $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = this.$m_rowHeader$.firstChild.childNodes[1], $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, 
      this.$m_avgRowHeight$)), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$)))
    }else {
      if("update" === $i$$inline_995_operation$$1$$) {
        3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$) && ($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = {axis:"row", start:$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$.row, count:1}, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = 
        {axis:"column", start:this.$m_startCol$, count:this.$m_endCol$ - this.$m_startCol$}, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$], {success:this.$_handleCellUpdatesFetchSuccess$, 
        error:this.$handleHeadersFetchError$}, {success:this, error:this}))
      }else {
        if("delete" === $i$$inline_995_operation$$1$$) {
          if($afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ && $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ instanceof window.oj.FlattenedTreeDataGridDataSource) {
            (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$4$$)
          }else {
            if($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$) {
              if($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$) {
                var $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$ = this, $j$$inline_9288$$, $k$$inline_9289$$, $row$$inline_9291$$, $totalHeight$$inline_9292$$, $height$$inline_9293$$, $databodyContent$$inline_9295$$, $lastTopRow$$inline_9297$$, $keyAttribute$$inline_9298$$, $start$$inline_9299$$, $firstRowCase$$inline_9300$$, $transition_duration$$inline_9302$$, $transition_delay$$inline_9303$$, $transition_timing_function$$inline_9304$$, $transform$$inline_9306$$;
                $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ = [];
                $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = [];
                for($i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ = 0;$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ < $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$.length - 1;$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$++) {
                  1 == $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ + 1] - $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$] ? $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$.push($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$]) : 
                  ($afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$.push($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$]), $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.push($afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$), 
                  $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ = [])
                }
                $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$.push($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$.length - 1]);
                $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.push($afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$);
                $row$$inline_9291$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$.length - 1]);
                $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ = $row$$inline_9291$$.nextSibling;
                $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ = 0;
                $transition_duration$$inline_9302$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
                $transition_delay$$inline_9303$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
                $transition_timing_function$$inline_9304$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
                $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("opacity");
                $transform$$inline_9306$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
                $firstRowCase$$inline_9300$$ = D.$JSCompiler_alias_TRUE$$;
                $databodyContent$$inline_9295$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_databody$.firstChild;
                $lastTopRow$$inline_9297$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$[0]);
                0 != $lastTopRow$$inline_9297$$.previousSibling.childElementCount && ($lastTopRow$$inline_9297$$ = $lastTopRow$$inline_9297$$.previousSibling, $firstRowCase$$inline_9300$$ = D.$JSCompiler_alias_FALSE$$);
                $keyAttribute$$inline_9298$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_resources$.getMappedAttribute("key");
                for($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = 0;$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ < $keys$$4$$.length;$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$++) {
                  $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = $keys$$4$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$], $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.row && ($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = 
                  $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.row, $row$$inline_9291$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$), $row$$inline_9291$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_9293$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, 
                  $row$$inline_9291$$), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_duration$$inline_9302$$, "400ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_delay$$inline_9303$$, "0ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_timing_function$$inline_9304$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, 
                  $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$, 0)) : $height$$inline_9293$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_avgRowHeight$, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$), 
                  $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_9293$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$), $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ = 
                  $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$, -$height$$inline_9293$$), $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.parentNode.removeChild($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$), 
                  $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.style.display = "none", $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_endRowHeaderPixel$ -= $height$$inline_9293$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_endRowPixel$ -= 
                  $height$$inline_9293$$, $totalHeight$$inline_9292$$ += $height$$inline_9293$$)
                }
                if(1 < $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.length) {
                  for($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = 0;$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ < $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.length - 1;$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$++) {
                    $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ += $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$].length;
                    $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = $height$$inline_9293$$ * $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$;
                    for($j$$inline_9288$$ = $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$][$cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$].length - 
                    1] + 1;$j$$inline_9288$$ < $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$[$beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ + 1][0];$j$$inline_9288$$++) {
                      $row$$inline_9291$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $j$$inline_9288$$), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($row$$inline_9291$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", "-" + $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$)
                    }
                  }
                }
                $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$;
                for($adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = $height$$inline_9293$$ * $keys$$4$$.length;$cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$;) {
                  $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.previousSibling, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, 
                  "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", "-" + $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$), ($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$.nextSibling) || 
                  $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$.addEventListener("transitionend", function() {
                    for($j$$inline_9288$$ = 0;$j$$inline_9288$$ < $keys$$4$$.length;$j$$inline_9288$$++) {
                      $keys$$4$$[$j$$inline_9288$$].row && ($row$$inline_9291$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $keys$$4$$[$j$$inline_9288$$].row), $row$$inline_9291$$.parentNode.removeChild($row$$inline_9291$$), $row$$inline_9291$$.style.display = "none")
                    }
                    $start$$inline_9299$$ = -1;
                    for($k$$inline_9289$$ = 1;$k$$inline_9289$$ < $databodyContent$$inline_9295$$.childElementCount;$k$$inline_9289$$++) {
                      $row$$inline_9291$$ = $databodyContent$$inline_9295$$.childNodes[$k$$inline_9289$$], $lastTopRow$$inline_9297$$.attributes[$keyAttribute$$inline_9298$$] && $lastTopRow$$inline_9297$$.attributes[$keyAttribute$$inline_9298$$].value == $databodyContent$$inline_9295$$.childNodes[$k$$inline_9289$$].attributes[$keyAttribute$$inline_9298$$].value && ($start$$inline_9299$$ = $k$$inline_9289$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 
                      0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_duration$$inline_9302$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_delay$$inline_9303$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transition_timing_function$$inline_9304$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9291$$, $transform$$inline_9306$$, 
                      0, "remove"), 0 < $start$$inline_9299$$ ? $databodyContent$$inline_9295$$.childNodes[$k$$inline_9289$$].style.top = $lastTopRow$$inline_9297$$.offsetTop + $height$$inline_9293$$ * ($k$$inline_9289$$ - $start$$inline_9299$$ + 1) + "px" : $firstRowCase$$inline_9300$$ && ($databodyContent$$inline_9295$$.childNodes[$k$$inline_9289$$].style.top = $lastTopRow$$inline_9297$$.offsetTop + $height$$inline_9293$$ * ($k$$inline_9289$$ - 1) + "px")
                    }
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_9295$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9295$$) - $totalHeight$$inline_9292$$);
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_scroller$.firstChild, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9295$$) - $totalHeight$$inline_9292$$);
                    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$);
                    $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
                    (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$.$m_currentScrollTop$);
                    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9283$$);
                    this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
                  }, D.$JSCompiler_alias_FALSE$$)
                }
              }else {
                (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$4$$)
              }
            }else {
              $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$;
              $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = $keys$$4$$;
              var $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$, $row$$inline_997$$, $height$$inline_998$$, $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$, $beforeRowsDeleted$$inline_1008$$, $insideRowsDeleted$$inline_1009$$;
              window.Array.isArray($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$) || ($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = (0,window.Array)($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$), $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = 
              (0,window.Array)($adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$));
              for($i$$inline_995_operation$$1$$ = $insideRowsDeleted$$inline_1009$$ = $beforeRowsDeleted$$inline_1008$$ = $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ = $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ = $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = 0;$i$$inline_995_operation$$1$$ < $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.length;$i$$inline_995_operation$$1$$++) {
                $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$[$i$$inline_995_operation$$1$$], $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ = $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$[$i$$inline_995_operation$$1$$], $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$.row != 
                D.$JSCompiler_alias_NULL$$ && ($height$$inline_998$$ = 0, $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ = $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$.row, $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$), 1 === $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ ? ($beforeRowsDeleted$$inline_1008$$++, 
                $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ += this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$inline_997$$ = this.$m_databody$.firstChild.childNodes[1], $row$$inline_997$$ != D.$JSCompiler_alias_NULL$$ && 
                (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($row$$inline_997$$, -this.$m_avgRowHeight$), $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ = this.$m_rowHeader$.firstChild.childNodes[1], $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$, -this.$m_avgRowHeight$)) : 3 === $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ ? 
                ($insideRowsDeleted$$inline_1009$$++, $row$$inline_997$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$), $row$$inline_997$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_998$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)(this, $row$$inline_997$$), $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ = $row$$inline_997$$.nextSibling, $row$$inline_997$$.parentNode.removeChild($row$$inline_997$$), 
                (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$, -$height$$inline_998$$), this.$m_endRowPixel$ -= $height$$inline_998$$), $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$), $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_998$$ = 
                (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)(this, $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$), $flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$ = $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$.nextSibling, $key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$.parentNode.removeChild($key$$inline_994_rowHeader$$inline_1005_rowKey$$inline_996$$), (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_1006_index$$inline_1007_referenceRow$$inline_999$$, 
                -$height$$inline_998$$), this.$m_endRowHeaderPixel$ -= $height$$inline_998$$), $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ += $height$$inline_998$$) : "scroll" === (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)(this.$m_options$) && ($afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$ += this.$m_avgRowHeight$))
              }
              this.$m_startRow$ -= $beforeRowsDeleted$$inline_1008$$;
              this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$inline_1008$$ - $insideRowsDeleted$$inline_1009$$;
              -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$inline_1008$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$inline_1008$$ - $insideRowsDeleted$$inline_1009$$);
              $adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$ = this.$m_databody$.firstChild;
              $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$ = this.$m_scroller$.firstChild;
              $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$) - ($beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$ + $i$$inline_11263_indexes$$10_insideRowsHeight$$inline_1002_referenceRow$$inline_9294$$ + 
              $afterRowsHeight$$inline_1003_gap_size$$inline_9310_idx$$inline_11264_source$$3$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($adjustment$$inline_9308_databodyContent$$inline_1000_fragment$$4_indexes$$inline_991_opacity$$inline_9305$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $beforeRowsHeight$$inline_1001_columnRange$$inline_980_databodyContentHeight$$inline_1004_i$$inline_9287_indices_rwp$$inline_9309$$);
              (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
              $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ || (this.$m_stopRowFetch$ = this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
              (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
            }
          }
        }else {
          "refresh" === $i$$inline_995_operation$$1$$ ? (this.empty(), this.refresh(this.$m_root$)) : "sync" === $i$$inline_995_operation$$1$$ && ($cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$ = $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$.pageSize, this.$m_fetching$ = {}, this.$m_startRow$ = 0, this.$m_endRow$ = -1, 
          this.$m_startRowHeader$ = 0, this.$m_endRowHeader$ = -1, this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = 0, this.$m_endCol$ = -1, this.$m_startColHeader$ = 0, this.$m_endColHeader$ = -1, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = 
          this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, this.$m_empty$ != D.$JSCompiler_alias_NULL$$ && (this.$m_root$.removeChild(this.$m_empty$), this.$m_empty$ = D.$JSCompiler_alias_NULL$$), this.$m_initialized$ = 
          D.$JSCompiler_alias_FALSE$$, this.fetchHeaders("row", 0, this.$m_rowHeader$, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, {success:function($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$) {
            this.$m_colHeader$.firstChild.innerHTML = "";
            this.$handleHeadersFetchSuccess$($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $cellSet$$7_flag$$inline_973_idxs$$inline_11265_pageSize$$inline_1017_row$$inline_974_rowHeader$$inline_975_rowRange$$inline_979_rwn$$inline_9307_silent$$, D.$JSCompiler_alias_NULL$$, {success:function($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$, $i$$inline_995_operation$$1$$)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($event$$32_key$$inline_9286_keys$$inline_992_rowHeader$$inline_9296_rowKey$$inline_9290_scrollerContent$$inline_1011$$)
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$, $obj$$33_row$$inline_1027_rowTop$$inline_1030$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$, this.$m_endRow$ >= $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$[0].start, $obj$$33_row$$inline_1027_rowTop$$inline_1030$$);
  $obj$$33_row$$inline_1027_rowTop$$inline_1030$$ = this.$m_databody$.firstChild.childNodes[$cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$[0].start - this.$m_startRow$ + 1];
  $obj$$33_row$$inline_1027_rowTop$$inline_1030$$ != D.$JSCompiler_alias_NULL$$ && ($cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ = this.$m_currentScrollTop$, $cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $obj$$33_row$$inline_1027_rowTop$$inline_1030$$ = $obj$$33_row$$inline_1027_rowTop$$inline_1030$$.offsetTop, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ -= 
  $obj$$33_row$$inline_1027_rowTop$$inline_1030$$, 0 < $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$) : ($cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ = $cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$ - $obj$$33_row$$inline_1027_rowTop$$inline_1030$$, 0 > 
  $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$)));
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || ($cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$ = this.$m_currentScrollTop$, $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && 
  (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)(this, this.$m_databody$) : $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)(this, this.$m_databody$), $cellSet$$8_viewportBottom$$inline_1029_viewportTop$$inline_1034$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && 
  (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)(this, this.$m_rowHeader$) : $cellRanges$$1_diff$$inline_1031_viewportBottom$$inline_1035_viewportTop$$inline_1028$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)(this, this.$m_rowHeader$));
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
  this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$6$$, $headerRanges$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start)
};
D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$9$$, $obj$$34$$) {
  var $rowRange$$4$$, $columnRange$$4$$;
  $rowRange$$4$$ = {axis:"row", start:$cellSet$$9$$.getStart("row"), count:$cellSet$$9$$.getCount("row")};
  $columnRange$$4$$ = {axis:"column", start:$cellSet$$9$$.getStart("column"), count:$cellSet$$9$$.getCount("column")};
  $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowRange$$4$$, $columnRange$$4$$], $obj$$34$$)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowStart$$7$$, $databodyContent$$10$$, $renderer$$5$$, $columnBandingInterval$$3$$, $rowIndex$$2$$;
  $rowStart$$7$$ = $cellRange$$7$$[0].start;
  $databodyContent$$10$$ = this.$m_databody$.firstChild;
  $renderer$$5$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)(this.$m_options$);
  $rowIndex$$2$$ = $rowStart$$7$$ - this.$m_startRow$;
  var $row$$inline_1039$$ = $databodyContent$$10$$.childNodes[$rowIndex$$2$$ + 1], $columnStart$$inline_1042$$ = this.$m_startCol$;
  $row$$inline_1039$$.style.left = this.getWidth() + "px";
  (0,window.setTimeout)(function() {
    $row$$inline_1039$$.innerHTML = "";
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_1039$$, $rowIndex$$2$$, $renderer$$5$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_1042$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
    (0,window.setTimeout)(function() {
      $row$$inline_1039$$.style.left = "0px"
    }, 250);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this);
    this.$highlightActive$(D.$JSCompiler_alias_FALSE$$)
  }.bind(this), 250)
};
D.$JSCompiler_StaticMethods__getRowByLocalPosition$$ = function $$JSCompiler_StaticMethods__getRowByLocalPosition$$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $pos$$4$$) {
  var $indexes$$inline_1048$$ = {row:$pos$$4$$}, $keys$$inline_1049$$ = {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$};
  $indexes$$inline_1048$$.row != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_1049$$.row = $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$_getKey$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_databody$.firstChild.childNodes[$indexes$$inline_1048$$.row - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startRow$ + 1]));
  $indexes$$inline_1048$$.column != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_1049$$.column = $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$_getKey$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_colHeader$.firstChild.childNodes[$indexes$$inline_1048$$.column - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startColHeader$]));
  return(0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $keys$$inline_1049$$.$row$)
};
D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__collapseRowsWithAnimation$$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$10$$) {
  var $key$$33_rowHeader$$12_rowKey$$4$$, $i$$23_row$$inline_9341$$, $j$$9$$, $k$$2$$, $row$$26$$, $adjustment$$inline_9342_height$$25$$, $referenceRow$$5$$, $databodyContent$$13$$, $clickedRow$$, $keyAttribute$$2$$, $start$$14$$, $transition_duration$$2$$, $transition_delay$$1$$, $transition_timing$$1$$, $transform$$4$$;
  $transition_duration$$2$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
  $transition_delay$$1$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
  $transition_timing$$1$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
  $transform$$4$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
  $databodyContent$$13$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
  $clickedRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$10$$[0].row).previousSibling;
  $keyAttribute$$2$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_resources$.getMappedAttribute("key");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)((0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$10$$[0].row).parentNode, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E4);
  for($i$$23_row$$inline_9341$$ = $keys$$10$$.length - 1;0 <= $i$$23_row$$inline_9341$$;$i$$23_row$$inline_9341$$--) {
    $key$$33_rowHeader$$12_rowKey$$4$$ = $keys$$10$$[$i$$23_row$$inline_9341$$], $key$$33_rowHeader$$12_rowKey$$4$$.row && ($key$$33_rowHeader$$12_rowKey$$4$$ = $key$$33_rowHeader$$12_rowKey$$4$$.row, $row$$26$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$33_rowHeader$$12_rowKey$$4$$), $row$$26$$ != D.$JSCompiler_alias_NULL$$ ? ($adjustment$$inline_9342_height$$25$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, 
    $row$$26$$), $referenceRow$$5$$ = $row$$26$$.nextSibling, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$26$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), "-1" + ($i$$23_row$$inline_9341$$ + 1)), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($row$$26$$, "300ms", 0, "ease-out", "-" + $row$$26$$.offsetTop), $i$$23_row$$inline_9341$$ == $keys$$10$$.length - 1 && $row$$26$$.addEventListener("transitionend", function() {
      for($j$$9$$ = 0;$j$$9$$ < $keys$$10$$.length;$j$$9$$++) {
        $keys$$10$$[$j$$9$$].row && ($row$$26$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$10$$[$j$$9$$].row), $row$$26$$.parentNode.removeChild($row$$26$$), $row$$26$$.style.display = "none")
      }
      (0,window.setTimeout)(function() {
        $start$$14$$ = -1;
        for($k$$2$$ = 1;$k$$2$$ < $databodyContent$$13$$.childElementCount;$k$$2$$++) {
          $clickedRow$$.attributes[$keyAttribute$$2$$] && $clickedRow$$.attributes[$keyAttribute$$2$$].value == $databodyContent$$13$$.childNodes[$k$$2$$].attributes[$keyAttribute$$2$$].value && ($start$$14$$ = $k$$2$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), $databodyContent$$13$$.children[$k$$2$$].style[$transform$$4$$] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], 
          $transition_duration$$2$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], $transition_delay$$1$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], $transition_timing$$1$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$13$$.childNodes[$k$$2$$], $transform$$4$$, 0, "remove")), 0 < $start$$14$$ && ($databodyContent$$13$$.childNodes[$k$$2$$].style.top = 
          $clickedRow$$.offsetTop + (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$) * ($k$$2$$ - $start$$14$$ + 1) + "px")
        }
      }, 0);
      (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
      (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
    }, D.$JSCompiler_alias_FALSE$$)) : $adjustment$$inline_9342_height$$25$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_avgRowHeight$, $key$$33_rowHeader$$12_rowKey$$4$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$33_rowHeader$$12_rowKey$$4$$), $key$$33_rowHeader$$12_rowKey$$4$$ != D.$JSCompiler_alias_NULL$$ && ($adjustment$$inline_9342_height$$25$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, 
    $key$$33_rowHeader$$12_rowKey$$4$$), $referenceRow$$5$$ = $key$$33_rowHeader$$12_rowKey$$4$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$5$$, -$adjustment$$inline_9342_height$$25$$), $key$$33_rowHeader$$12_rowKey$$4$$.parentNode.removeChild($key$$33_rowHeader$$12_rowKey$$4$$), $key$$33_rowHeader$$12_rowKey$$4$$.style.display = "none", $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= 
    $adjustment$$inline_9342_height$$25$$), $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ -= $adjustment$$inline_9342_height$$25$$)
  }
  $i$$23_row$$inline_9341$$ = $referenceRow$$5$$;
  $adjustment$$inline_9342_height$$25$$ *= $keys$$10$$.length;
  var $i$$inline_9343$$, $databodyContent$$inline_9344$$, $scrollerContent$$inline_9345$$, $databodyContentHeight$$inline_9346$$;
  for($databodyContentHeight$$inline_9346$$ = 0;$i$$23_row$$inline_9341$$;) {
    (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($i$$23_row$$inline_9341$$, "300ms", "0ms", "linear", "-" + $adjustment$$inline_9342_height$$25$$), $i$$23_row$$inline_9341$$.nextSibling || $i$$23_row$$inline_9341$$.addEventListener("transitionend", function() {
      $databodyContent$$inline_9344$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
      $scrollerContent$$inline_9345$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_scroller$.firstChild;
      for($i$$inline_9343$$ = 1;$i$$inline_9343$$ < $databodyContent$$inline_9344$$.childElementCount;$i$$inline_9343$$++) {
        $databodyContentHeight$$inline_9346$$ += $databodyContent$$inline_9344$$.childNodes[$i$$inline_9343$$].clientHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_9344$$, $databodyContentHeight$$inline_9346$$);
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_9345$$, $databodyContentHeight$$inline_9346$$);
      (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
      (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$)
    }, D.$JSCompiler_alias_FALSE$$), $i$$23_row$$inline_9341$$ = $i$$23_row$$inline_9341$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$34$$) {
  var $rows$$5$$, $row$$28$$, $i$$25$$, $rowKey$$5$$, $keyAttribute$$3$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  $keyAttribute$$3$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$25$$ = 1;$i$$25$$ < $rows$$5$$.length;$i$$25$$++) {
    if($row$$28$$ = $rows$$5$$[$i$$25$$], $rowKey$$5$$ = $row$$28$$.getAttribute($keyAttribute$$3$$), $rowKey$$5$$ == $key$$34$$) {
      return $row$$28$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$35$$) {
  var $rows$$6$$, $row$$29$$, $i$$26$$, $rowKey$$6$$, $keyAttribute$$4$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$6$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.firstChild.childNodes;
  $keyAttribute$$4$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$26$$ = 1;$i$$26$$ < $rows$$6$$.length;$i$$26$$++) {
    if($row$$29$$ = $rows$$6$$[$i$$26$$], $rowKey$$6$$ = $row$$29$$.getAttribute($keyAttribute$$4$$), $rowKey$$6$$ == $key$$35$$) {
      return $row$$29$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$36$$) {
  var $columns$$2$$, $column$$5$$, $i$$27$$, $columnKey$$, $keyAttribute$$5$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columns$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.firstChild.childNodes;
  $keyAttribute$$5$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$27$$ = 0;$i$$27$$ < $columns$$2$$.length;$i$$27$$++) {
    if($column$$5$$ = $columns$$2$$[$i$$27$$], $columnKey$$ = $column$$5$$.getAttribute($keyAttribute$$5$$), $columnKey$$ == $key$$36$$) {
      return $column$$5$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.setActive = function $$DvtDataGrid$$$$setActive$($active$$, $event$$34$$, $callback$$27$$) {
  $active$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, {row:$active$$.row, column:$active$$.column}, this.$_setActiveCallback$.bind(this, $event$$34$$, $callback$$27$$)) : (this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this))
};
D.$DvtDataGrid$$.prototype.$_setActiveCallback$ = function $$DvtDataGrid$$$$$_setActiveCallback$$($event$$35$$, $callback$$28$$, $keys$$11$$, $indexes$$14$$) {
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ || $keys$$11$$.row != this.$m_active$.rowKey || $keys$$11$$.column != this.$m_active$.columnKey) {
    $indexes$$14$$.rowKey = $keys$$11$$.row, $indexes$$14$$.columnKey = $keys$$11$$.column, this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $indexes$$14$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this), this.fireEvent("active", {event:$event$$35$$, ui:{previousActiveKey:this.$m_prevActive$, activeKey:this.$m_active$}})
  }
  $callback$$28$$.call(this)
};
D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$37$$) {
  var $cell$$4$$, $index$$53$$;
  $cell$$4$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$37$$.target);
  $cell$$4$$ != D.$JSCompiler_alias_NULL$$ && ($index$$53$$ = $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.createIndex($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getRowIndex$($cell$$4$$.parentNode), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getCellIndex$($cell$$4$$)));
  $index$$53$$ != D.$JSCompiler_alias_NULL$$ && $index$$53$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $index$$53$$), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$activeAndFocus$($index$$53$$, 
  $event$$37$$))
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$54$$, $event$$38$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.setActive($index$$54$$, $event$$38$$, this.$highlightActive$.bind(this, D.$JSCompiler_alias_VOID$$))
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$30$$) {
  for(var $index$$55$$ = this.$m_startRow$;$row$$30$$.previousSibling;) {
    $index$$55$$ += 1, $row$$30$$ = $row$$30$$.previousSibling
  }
  return $index$$55$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$5$$) {
  for(var $index$$56$$ = this.$m_startCol$;$cell$$5$$.previousSibling;) {
    $index$$56$$ += 1, $cell$$5$$ = $cell$$5$$.previousSibling
  }
  return $index$$56$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$) {
  var $axis$$15$$, $index$$57$$;
  $axis$$15$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$);
  "row" === $axis$$15$$ ? ($index$$57$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$ - 1, $header$$8$$ = $header$$8$$.parentNode) : "column" === $axis$$15$$ && ($index$$57$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$);
  for(;$header$$8$$.previousSibling;) {
    $index$$57$$ += 1, $header$$8$$ = $header$$8$$.previousSibling
  }
  return $index$$57$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$11$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$11$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$12$$, $key$$37$$, $className$$9$$) {
  if($elem$$12$$ == D.$JSCompiler_alias_NULL$$ || $elem$$12$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$9$$ == D.$JSCompiler_alias_VOID$$ && ($className$$9$$ = this.getMappedStyle($key$$37$$));
  return $className$$9$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$12$$, $className$$9$$) ? $elem$$12$$ : this.find($elem$$12$$.parentNode, $key$$37$$, $className$$9$$)
};
D.$DvtDataGrid$$.prototype.$highlightActive$ = function $$DvtDataGrid$$$$$highlightActive$$($focus$$) {
  var $cell$$6$$, $skip$$1$$;
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$6$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_active$, "focus"));
  $cell$$6$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$.row === this.$m_active$.row ? $skip$$1$$ = "row" : this.$m_prevActive$.column === this.$m_active$.column && ($skip$$1$$ = "column")), (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_active$, $skip$$1$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$6$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || 
  $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$, $skip$$1$$))
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $cell$$7$$, $selectedClassName$$;
  $cell$$7$$ = (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, D.$JSCompiler_alias_TRUE$$);
  $selectActive$$ && ($selectedClassName$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName$$));
  $cell$$7$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$7$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$58$$, $className$$10_style$$2$$) {
  var $cell$$8_range$$5_singleCell$$;
  $cell$$8_range$$5_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$58$$);
  $cell$$8_range$$5_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$);
  if(!($cell$$8_range$$5_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$8_range$$5_singleCell$$.length)) {
    return $className$$10_style$$2$$ == D.$JSCompiler_alias_VOID$$ && ($className$$10_style$$2$$ = "selected"), $cell$$8_range$$5_singleCell$$ = $cell$$8_range$$5_singleCell$$[0], $className$$10_style$$2$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$10_style$$2$$), $className$$10_style$$2$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$8_range$$5_singleCell$$, $className$$10_style$$2$$), $index$$58$$.row && $index$$58$$.column && 
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$)), $cell$$8_range$$5_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_unhighlightIndex$$ = function $$JSCompiler_StaticMethods_unhighlightIndex$$$($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$59_range$$6_singleCell$$1$$, $activeOnly$$) {
  var $activeClassName$$;
  $cell$$9_index$$59_range$$6_singleCell$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.createRange($cell$$9_index$$59_range$$6_singleCell$$1$$);
  $cell$$9_index$$59_range$$6_singleCell$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$59_range$$6_singleCell$$1$$);
  if(!($cell$$9_index$$59_range$$6_singleCell$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$9_index$$59_range$$6_singleCell$$1$$.length)) {
    $cell$$9_index$$59_range$$6_singleCell$$1$$ = $cell$$9_index$$59_range$$6_singleCell$$1$$[0];
    $activeClassName$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("focus");
    $activeClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$59_range$$6_singleCell$$1$$, $activeClassName$$);
    if($activeOnly$$ == D.$JSCompiler_alias_VOID$$ || !$activeOnly$$) {
      $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("selected"), $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$59_range$$6_singleCell$$1$$, $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$9_index$$59_range$$6_singleCell$$1$$))
    }
    return $cell$$9_index$$59_range$$6_singleCell$$1$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$10$$, $focus$$1$$, $colIndex$$inline_1061_skip$$2$$) {
  $cell$$10$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active"));
  $cell$$10$$.setAttribute("tabIndex", 0);
  var $label$$inline_1057$$, $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$, $rows$$inline_1060$$;
  $label$$inline_1057$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && "row" != $colIndex$$inline_1061_skip$$2$$ && ($columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$ = $cell$$10$$.parentNode, $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$), -1 < $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$ && ($rows$$inline_1060$$ = 
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$ < $rows$$inline_1060$$.length && ($label$$inline_1057$$ = $rows$$inline_1060$$[$columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && "column" != $colIndex$$inline_1061_skip$$2$$ && ($colIndex$$inline_1061_skip$$2$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$10$$), -1 < $colIndex$$inline_1061_skip$$2$$ && ($columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_1061_skip$$2$$ < $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$.length && 
  ($label$$inline_1057$$ = "" == $label$$inline_1057$$ ? $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$[$colIndex$$inline_1061_skip$$2$$].id : [$label$$inline_1057$$, $columns$$inline_1062_row$$inline_1058_rowIndex$$inline_1059$$[$colIndex$$inline_1061_skip$$2$$].id].join(" "))));
  $label$$inline_1057$$ = "" == $label$$inline_1057$$ ? (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active") : [$label$$inline_1057$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active")].join(" ");
  $label$$inline_1057$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "context"), $label$$inline_1057$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join(" ");
  $cell$$10$$.setAttribute("aria-labelledby", $label$$inline_1057$$);
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$10$$) && $cell$$10$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$11$$) {
  $cell$$11$$.setAttribute("tabIndex", -1);
  $cell$$11$$.removeAttribute("id");
  $cell$$11$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$, $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$, $axis$$16$$) {
  if("row" === $axis$$16$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ = $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$.parentNode, $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$32_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$32_rowIndex$$5$$]
    }
  }else {
    if("column" === $axis$$16$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$32_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$32_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$32_rowIndex$$5$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$13$$) {
  var $child$$1$$, $children$$1$$, $index$$60$$, $i$$28$$;
  $children$$1$$ = $elem$$13$$.parentNode.childNodes;
  $index$$60$$ = -1;
  for($i$$28$$ = 0;$i$$28$$ < $children$$1$$.length;$i$$28$$ += 1) {
    $child$$1$$ = $children$$1$$[$i$$28$$];
    if($child$$1$$ === $elem$$13$$) {
      return $index$$60$$ + 1
    }
    "DIV" == $child$$1$$.nodeName && $index$$60$$++
  }
  return $index$$60$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endColumn_endIndex$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$, $endRowKey$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$ && ($startIndex$$.row < $endColumn_endIndex$$.row || -1 == $endColumn_endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endColumn_endIndex$$.row, $startKey$$ && ($startRowKey$$ = $startKey$$.row, $endRowKey$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$.row, $endRow$$ = $startIndex$$.row, $startKey$$ && ($startRowKey$$ = $endKey$$.row, $endRowKey$$ = $startKey$$.row)), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endColumn_endIndex$$.column) ? 
  ($startIndex$$.column < $endColumn_endIndex$$.column || -1 == $endColumn_endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn_endIndex$$ = $endColumn_endIndex$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$.column, $endColumn_endIndex$$ = $startIndex$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$ = {row:$startRow$$3$$, 
  column:$startColumn$$}, $endColumn_endIndex$$ = {row:$endRow$$, column:$endColumn_endIndex$$}) : ($startIndex$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$ = {row:$endRow$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$}
};
D.$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$2$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) {
  $endIndex$$2$$ === $startIndex$$2$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$2$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) : $endIndex$$2$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, $endIndex$$2$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$2$$, $callback$$30$$)) : $callback$$30$$.call(this, {startIndex:$startIndex$$2$$, endIndex:$startIndex$$2$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$})
};
D.$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$3$$, $callback$$31$$, $endKey$$1$$, $endIndex$$3$$) {
  $callback$$31$$.call(this, this.createRange($startIndex$$3$$, $endIndex$$3$$, $startKey$$2$$, $endKey$$1$$))
};
D.$JSCompiler_StaticMethods_getEndIndex$$ = function $$JSCompiler_StaticMethods_getEndIndex$$$($range$$7$$) {
  return $range$$7$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$7$$.startIndex : $range$$7$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$, $range$$8_rangeEndRow$$, $nodes_startRow$$4$$, $endRow$$1_rows$$9$$) {
  var $j$$10_startIndex$$4$$, $cell$$14_endIndex$$4$$, $columns$$5_rangeStartRow$$, $rangeStartColumn_row$$33$$, $rangeEndColumn$$;
  $nodes_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startRow$);
  $endRow$$1_rows$$9$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_endRow$ + 1);
  $j$$10_startIndex$$4$$ = $range$$8_rangeEndRow$$.startIndex;
  $cell$$14_endIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($range$$8_rangeEndRow$$);
  $columns$$5_rangeStartRow$$ = $j$$10_startIndex$$4$$.row;
  $range$$8_rangeEndRow$$ = $cell$$14_endIndex$$4$$.row;
  -1 == $range$$8_rangeEndRow$$ && ($range$$8_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$9$$ < $columns$$5_rangeStartRow$$ || $range$$8_rangeEndRow$$ < $nodes_startRow$$4$$ || !(0,window.isNaN)($j$$10_startIndex$$4$$.column) && !(0,window.isNaN)($cell$$14_endIndex$$4$$.column) && ($rangeStartColumn_row$$33$$ = $j$$10_startIndex$$4$$.column, $rangeEndColumn$$ = $cell$$14_endIndex$$4$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_endCol$ + 1 < $rangeStartColumn_row$$33$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes_startRow$$4$$ = [];
  $endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_databody$.firstChild.childNodes;
  $columns$$5_rangeStartRow$$ = window.Math.max(0, $columns$$5_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startRow$);
  $range$$8_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$9$$.length - 1, $range$$8_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$33$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$33$$ = window.Math.max(0, $rangeStartColumn_row$$33$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ += 1) {
      $columns$$5_rangeStartRow$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ + 1].childNodes;
      for($j$$10_startIndex$$4$$ = $rangeStartColumn_row$$33$$;$j$$10_startIndex$$4$$ < window.Math.min($columns$$5_rangeStartRow$$.length, $rangeEndColumn$$);$j$$10_startIndex$$4$$ += 1) {
        $cell$$14_endIndex$$4$$ = $columns$$5_rangeStartRow$$[$j$$10_startIndex$$4$$], $nodes_startRow$$4$$.push($cell$$14_endIndex$$4$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ += 1) {
      $rangeStartColumn_row$$33$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$29$$ + 1], $nodes_startRow$$4$$.push($rangeStartColumn_row$$33$$)
    }
  }
  return $nodes_startRow$$4$$
};
D.$JSCompiler_StaticMethods_readCurrentContent$$ = function $$JSCompiler_StaticMethods_readCurrentContent$$$($JSCompiler_StaticMethods_readCurrentContent$self$$) {
  var $current_subid$$, $cell$$15_currentCell_range$$9$$, $needToModify$$, $labelledBy$$;
  $current_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$;
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$ && ($current_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$);
  $current_subid$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$15_currentCell_range$$9$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.createRange($current_subid$$), $cell$$15_currentCell_range$$9$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$15_currentCell_range$$9$$), $cell$$15_currentCell_range$$9$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$15_currentCell_range$$9$$.length || ($cell$$15_currentCell_range$$9$$ = $cell$$15_currentCell_range$$9$$[0], 
  (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $current_subid$$), $current_subid$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, "placeHolder"), $needToModify$$ = D.$JSCompiler_alias_TRUE$$, $labelledBy$$ = $cell$$15_currentCell_range$$9$$.getAttribute("aria-labelledby"), $labelledBy$$ != D.$JSCompiler_alias_NULL$$ && -1 != $labelledBy$$.indexOf($current_subid$$) && ($needToModify$$ = 
  D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$15_currentCell_range$$9$$, D.$JSCompiler_alias_FALSE$$), $needToModify$$ ? ($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.innerHTML = "\x26nbsp", $labelledBy$$ = $cell$$15_currentCell_range$$9$$.getAttribute("aria-labelledby"), $cell$$15_currentCell_range$$9$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $current_subid$$)) : 
  $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.innerHTML = "", $cell$$15_currentCell_range$$9$$.focus()))
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$34$$, $column$$6$$) {
  return $row$$34$$ != D.$JSCompiler_alias_NULL$$ ? $column$$6$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$34$$, column:$column$$6$$} : {row:$row$$34$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$ = function $$JSCompiler_StaticMethods_setHeaderAriaProperties$$$($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $header$$10$$) {
  var $labelledBy$$1$$, $key$$38$$, $direction$$5$$;
  $labelledBy$$1$$ = $header$$10$$.id;
  $direction$$5$$ = $header$$10$$.getAttribute($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir"));
  "ascending" === $direction$$5$$ ? ($key$$38$$ = "accessibleSortAscending", $labelledBy$$1$$ = $labelledBy$$1$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state")) : "descending" === $direction$$5$$ && ($key$$38$$ = "accessibleSortDescending", $labelledBy$$1$$ = $labelledBy$$1$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state"));
  $key$$38$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $key$$38$$, {id:""});
  $header$$10$$.setAttribute("tabIndex", 0);
  $header$$10$$.setAttribute("aria-labelledby", $labelledBy$$1$$);
  $header$$10$$.focus()
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$63$$, $elem$$17$$, $axis$$19$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("focus");
  if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != D.$JSCompiler_alias_NULL$$) {
    "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$);
    var $header$$inline_1064$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem;
    $header$$inline_1064$$.setAttribute("tabIndex", -1);
    $header$$inline_1064$$.removeAttribute("aria-labelledby")
  }
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.index = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.elem = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem);
  -1 != $index$$63$$ ? ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = {}), $axis$$19$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$19$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$63$$, $elem$$17$$ != 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = $elem$$17$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)($JSCompiler_StaticMethods__setActiveHeader$self$$)) : 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$), (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $elem$$17$$))) : $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__scrollToActiveHeader$$ = function $$JSCompiler_StaticMethods__scrollToActiveHeader$$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$20$$, $index$$64$$, $elem$$18$$, $indexes$$15$$;
  $axis$$20$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$64$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$18$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$20$$ ? $indexes$$15$$ = {row:0, column:$index$$64$$} : "row" === $axis$$20$$ && ($indexes$$15$$ = {row:$index$$64$$, column:0});
  (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$15$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($elem$$18$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$18$$) : $elem$$18$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $elem$$18$$)
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$, $event$$43$$) {
  var $currentCellIndex$$, $row$$35$$, $column$$7$$, $processed$$4$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$;
  if($currentCellIndex$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$5_newCellIndex$$2$$ ? $keyCode$$5_newCellIndex$$2$$ = 39 : 39 == $keyCode$$5_newCellIndex$$2$$ && ($keyCode$$5_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $row$$35$$ = $currentCellIndex$$.row;
    $column$$7$$ = $currentCellIndex$$.column;
    switch($keyCode$$5_newCellIndex$$2$$) {
      case 37:
        0 < $column$$7$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$7$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, 
        $event$$43$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$, $column$$7$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$43$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$43$$), 0 === $column$$7$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstColumn")), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$35$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$.firstChild && 
        ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$));
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$7$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$43$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$7$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? 
        ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$7$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, $event$$43$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$, 
        $column$$7$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$43$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$7$$ + 
        1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastColumn")), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$35$$ ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$ - 1, $column$$7$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$43$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$43$$), 0 === $row$$35$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstRow"), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$7$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$35$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$43$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$35$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ($keyCode$$5_newCellIndex$$2$$ = 
        $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$ + 1, $column$$7$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$43$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $row$$35$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastRow"), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$, 0);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$35$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1));
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 33:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$7$$);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 34:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$), $column$$7$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), $column$$7$$), 
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$43$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$
    }
    return $processed$$4$$
  }
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$) {
  var $column$$8_relIndex$$, $columns$$6$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$8_relIndex$$ = $columnIndex$$2$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$6$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$8_relIndex$$ < $columns$$6$$.length && ($column$$8_relIndex$$ = $columns$$6$$[$column$$8_relIndex$$], 
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $column$$8_relIndex$$, "column")))
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$6$$) {
  var $relIndex$$1_row$$36$$, $rows$$10$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$36$$ = $rowIndex$$6$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$10$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$36$$ < $rows$$10$$.length && ($relIndex$$1_row$$36$$ = $rows$$10$$[$relIndex$$1_row$$36$$], 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$6$$, $relIndex$$1_row$$36$$, "row")))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$66$$, $isExtend$$1$$) {
  var $cellWidth_row$$37$$, $column$$9_viewportLeft$$2$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$8$$, $databodyContent$$17_viewportRight$$3_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$16$$;
  $cellWidth_row$$37$$ = $cellLeft_index$$66$$.row;
  $column$$9_viewportLeft$$2$$ = $cellLeft_index$$66$$.column;
  $deltaY$$3_scrollTop$$8$$ = $deltaX$$3_scrollLeft$$8$$ = 0;
  $cellWidth_row$$37$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$37$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$3_scrollTop$$8$$ = $cellWidth_row$$37$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$37$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$37$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$3_scrollTop$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$66$$) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$37$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, 
  $rowElem_rowHeight$$1$$), $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$3_scrollTop$$8$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$8$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($column$$9_viewportLeft$$2$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == D.$JSCompiler_alias_NULL$$ && ($column$$9_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$9_viewportLeft$$2$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$3_scrollLeft$$8$$ = $column$$9_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $column$$9_viewportLeft$$2$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($column$$9_viewportLeft$$2$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$3_scrollLeft$$8$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$3_scrollLeft$$8$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$66$$) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$37$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$16$$ = $rowElem_rowHeight$$1$$.childNodes[$column$$9_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$66$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$16$$, "left"), $cellWidth_row$$37$$ = 
  $cell$$16$$.offsetWidth, $column$$9_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$66$$ < $column$$9_viewportLeft$$2$$ ? $deltaX$$3_scrollLeft$$8$$ = $column$$9_viewportLeft$$2$$ - $cellLeft_index$$66$$ : 
  $cellLeft_index$$66$$ + $cellWidth_row$$37$$ > $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaX$$3_scrollLeft$$8$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - ($cellLeft_index$$66$$ + $cellWidth_row$$37$$))));
  if(0 != $deltaX$$3_scrollLeft$$8$$ || 0 != $deltaY$$3_scrollTop$$8$$) {
    $cell$$16$$ != D.$JSCompiler_alias_NULL$$ && $isExtend$$1$$ !== D.$JSCompiler_alias_TRUE$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$16$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$3_scrollLeft$$8$$, $deltaY$$3_scrollTop$$8$$)
  }
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$19$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$19$$, $headerCellClassName$$)) {
      return $elem$$19$$
    }
    if($elem$$19$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$19$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$3$$, $rows$$11$$, $i$$30$$, $index$$67$$, $bandingClass$$;
  $rowBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$3$$) {
    $rows$$11$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$30$$ = 1;$i$$30$$ < $rows$$11$$.length;$i$$30$$++) {
      $index$$67$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$30$$ - 1, 1 === window.Math.floor($index$$67$$ / $rowBandingInterval$$3$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$30$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$11$$[$i$$30$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$30$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$11$$[$i$$30$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$39_text$$12$$, $args$$5$$) {
  $key$$39_text$$12$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$39_text$$12$$, $args$$5$$);
  $key$$39_text$$12$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $key$$39_text$$12$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$45$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$45$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$46$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$46$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed")
};
D.$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$9$$) {
  return $element$$9$$ != D.$JSCompiler_alias_NULL$$ ? $element$$9$$.getAttribute(this.$m_resources$.getMappedAttribute("key")) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getActiveRowKey$$ = function $$JSCompiler_StaticMethods__getActiveRowKey$$$($JSCompiler_StaticMethods__getActiveRowKey$self$$, $prev$$2$$) {
  if($prev$$2$$) {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$_getKey$($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.elem)
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.rowKey
    }
  }else {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$_getKey$($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.elem)
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.rowKey
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$47$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.find($event$$47$$.target, "row"))) {
    if(88 == $event$$47$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$47$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$47$$)
    }
    if(86 == $event$$47$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$47$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$47$$)
    }
    if(27 == $event$$47$$.keyCode && $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$48$$) {
  var $rowKey$$9$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $rowKey$$9$$ = $JSCompiler_StaticMethods__handleCut$self$$.$_getKey$($JSCompiler_StaticMethods__handleCut$self$$.find($event$$48$$.target, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$9$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$9$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$49$$) {
  var $row$$42$$;
  return $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $row$$42$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$49$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$42$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$)), $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), 
  $JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($row$$42$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$50$$) {
  var $deltaY$$4_rowKey$$10$$, $height$$26$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$4_rowKey$$10$$ = $JSCompiler_StaticMethods__handleMove$self$$.$_getKey$($JSCompiler_StaticMethods__handleMove$self$$.find($event$$50$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$10$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $deltaY$$4_rowKey$$10$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), 
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$50$$.pageY);
  $deltaY$$4_rowKey$$10$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$26$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$4_rowKey$$10$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$4_rowKey$$10$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$26$$ / 2 ? 
  (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "nextSibling") : $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$26$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], 
  "top"), $newSiblingTop$$ = $newTop$$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$;
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : 
  ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]));
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"))
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = "", $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = ""), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$)), 
  $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$)), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$43$$) {
  var $JSCompiler_temp$$522_capability$$inline_1068$$;
  $row$$43$$ == D.$JSCompiler_alias_NULL$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$43$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? $JSCompiler_temp$$522_capability$$inline_1068$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_temp$$522_capability$$inline_1068$$ = $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_dataSource$.getCapability("move"), $JSCompiler_temp$$522_capability$$inline_1068$$ = "enable" === (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)((0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_options$, 
  "dnd", "reorder", "row")) && ("full" === $JSCompiler_temp$$522_capability$$inline_1068$$ || "row" === $JSCompiler_temp$$522_capability$$inline_1068$$) && (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($row$$43$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_temp$$522_capability$$inline_1068$$
};
D.$JSCompiler_StaticMethods__manageMoveCursor$$ = function $$JSCompiler_StaticMethods__manageMoveCursor$$$($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$) {
  var $className$$11$$, $activeKey$$, $prevActiveKey_prevActiveRowHeader$$, $activeRow$$, $prevActiveRow$$;
  $className$$11$$ = $JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$.getMappedStyle("draggable");
  $activeKey$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$);
  $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, D.$JSCompiler_alias_TRUE$$);
  $activeRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$);
  $prevActiveRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$);
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveRow$$, $className$$11$$) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveRow$$, $className$$11$$), $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$), (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$11$$) && 
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$11$$));
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeRow$$) && ($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($activeRow$$, $className$$11$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, 
  $className$$11$$))
};
D.$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$() {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  this.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$JSCompiler_StaticMethods_calculateRowHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeight$$$($JSCompiler_StaticMethods_calculateRowHeight$self$$, $row$$44$$) {
  return"" != $row$$44$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$44$$) : $row$$44$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$44$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$44$$, "top") : $JSCompiler_StaticMethods_calculateRowHeight$self$$.$m_endRowPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$44$$, "top")
};
D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeaderHeight$$$($JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$, $rowHeader$$13$$) {
  return"" != $rowHeader$$13$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$13$$) : $rowHeader$$13$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$, "top") : $JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$.$m_endRowHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$, "top")
};
D.$JSCompiler_StaticMethods_calculateColumnWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnWidth$$$($JSCompiler_StaticMethods_calculateColumnWidth$self$$, $cell$$17$$) {
  if("" != $cell$$17$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$17$$)
  }
  var $dir$$12$$ = $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $cell$$17$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$17$$.nextSibling, $dir$$12$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$17$$, $dir$$12$$) : $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_endColPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$17$$, $dir$$12$$)
};
D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$$($JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$, $columnHeader$$) {
  if("" != $columnHeader$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$)
  }
  var $dir$$13$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $columnHeader$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$.nextSibling, $dir$$13$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$, $dir$$13$$) : $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_endColHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$, $dir$$13$$)
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$40$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$40$$ = 0;$i$$40$$ < $ranges$$.length;$i$$40$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_1175$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_1177$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1175$$, $ranges$$[$i$$40$$]);
    (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1175$$, $elems$$inline_1177$$)
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$11_selection$$inline_1181$$, $JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$) {
  $elems$$2_range$$11_selection$$inline_1181$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$11_selection$$inline_1181$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$11_selection$$inline_1181$$);
  if($JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$) {
    if(1 == $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$().length) {
      $JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$ = $elems$$2_range$$11_selection$$inline_1181$$.length
    }else {
      var $elems$$inline_1182$$, $i$$inline_1183$$;
      $JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$ = 0;
      $elems$$2_range$$11_selection$$inline_1181$$ = $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$();
      for($i$$inline_1183$$ = 0;$i$$inline_1183$$ < $elems$$2_range$$11_selection$$inline_1181$$.length;$i$$inline_1183$$++) {
        $elems$$inline_1182$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$11_selection$$inline_1181$$[$i$$inline_1183$$]), $JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$ += $elems$$inline_1182$$.length
      }
    }
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$JSCompiler_temp$$417_total$$inline_1180_updateAccInfo$$})
  }
};
D.$JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$4$$) {
  var $i$$42$$, $selectedClassName$$2$$, $activeClassName$$2$$, $elem$$23$$;
  if(!($elems$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$4$$.length)) {
    if($selectedClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("selected"), $activeClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("focus"), $selectedClassName$$2$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$2$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$42$$ = 0;$i$$42$$ < $elems$$4$$.length;$i$$42$$ += 1) {
        $elem$$23$$ = $elems$$4$$[$i$$42$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$23$$, $activeClassName$$2$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$23$$, $selectedClassName$$2$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$5$$) {
  var $selectedClassName$$3$$, $i$$43$$, $elem$$24$$;
  if(!($elems$$5$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$5$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$43$$ = 0;$i$$43$$ < $elems$$5$$.length;$i$$43$$ += 1) {
        $elem$$24$$ = $elems$$5$$[$i$$43$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$24$$, $selectedClassName$$3$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$44$$, $ranges$$1$$, $elems$$6$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$44$$ = 0;$i$$44$$ < $ranges$$1$$.length;$i$$44$$ += 1) {
    $elems$$6$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$44$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$6$$)
  }
};
D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$67$$) {
  var $cell$$18_index$$69$$;
  $cell$$18_index$$69$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$67$$.touches[0].clientX, $event$$67$$.touches[0].clientY)) : (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$67$$.target);
  $cell$$18_index$$69$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$18_index$$69$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$18_index$$69$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$18_index$$69$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$18_index$$69$$, $event$$67$$))
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$19$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.find($cell$$19$$, "row"), $selectedClassName$$4$$) : $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$19$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$68$$) {
  var $index$$71$$, $cell$$20_ctrlKey$$2$$, $shiftKey$$2$$;
  $cell$$20_ctrlKey$$2$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$68$$.target);
  $cell$$20_ctrlKey$$2$$ != D.$JSCompiler_alias_NULL$$ && ($index$$71$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$20_ctrlKey$$2$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$20_ctrlKey$$2$$)});
  $index$$71$$ != D.$JSCompiler_alias_NULL$$ && $index$$71$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$71$$), $cell$$20_ctrlKey$$2$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, 
  $event$$68$$), $shiftKey$$2$$ = $event$$68$$.shiftKey, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ != 
  D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$71$$, $event$$68$$)) : !$cell$$20_ctrlKey$$2$$ && !$shiftKey$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$71$$, $event$$68$$) : !$cell$$20_ctrlKey$$2$$ && $shiftKey$$2$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
  $index$$71$$, $event$$68$$) : (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$71$$, $event$$68$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$71$$, $event$$68$$))
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$4$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$4$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$ = function $$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$) {
  $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$.$m_discontiguousSelection$ = $flag$$5$$;
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1187_row$$46$$, $callback$$inline_9367_event$$70$$) {
  var $startIndex$$7$$;
  $startIndex$$7$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1187_row$$46$$, 0);
  $endIndex$$inline_1187_row$$46$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1187_row$$46$$, -1);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireRow$self$$);
  $callback$$inline_9367_event$$70$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $callback$$inline_9367_event$$70$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$7$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1187_row$$46$$, $callback$$inline_9367_event$$70$$))
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$11_endIndex$$inline_1192$$, $callback$$inline_9372_event$$71$$) {
  var $startIndex$$8$$;
  $startIndex$$8$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$11_endIndex$$inline_1192$$);
  $column$$11_endIndex$$inline_1192$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$11_endIndex$$inline_1192$$);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  $callback$$inline_9372_event$$71$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $callback$$inline_9372_event$$71$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$8$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$11_endIndex$$inline_1192$$, $callback$$inline_9372_event$$71$$))
};
D.$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$73$$, $newRange$$) {
  var $selection$$4$$, $previous$$;
  $selection$$4$$ = this.$GetSelection$();
  $previous$$ = $selection$$4$$.slice(0);
  $selection$$4$$.push($newRange$$);
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$);
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_selectionFrontier$ = this.$m_active$, this.$highlightActive$());
  this.$fireSelectionEvent$($event$$73$$, $previous$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
  var $previous$$1$$;
  $selection$$5$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$5$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$5$$ = []), $previous$$1$$ = this.$GetSelection$().splice(0), this.$m_selection$ = $selection$$5$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$(D.$JSCompiler_alias_NULL$$, $previous$$1$$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$74$$, $previousSelection$$) {
  var $details$$7$$ = {event:$event$$74$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
  this.fireEvent("select", $details$$7$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$73$$, $callback$$inline_9377_event$$75$$) {
  var $anchor$$;
  $anchor$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  $anchor$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_extendSelection$self$$), $JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$73$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$73$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$73$$.row)), $callback$$inline_9377_event$$75$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, 
  $callback$$inline_9377_event$$75$$), (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$73$$, $callback$$inline_9377_event$$75$$)))
};
D.$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$76$$, $newRange$$1$$) {
  var $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$, $currentRange$$, $clone$$2_startIndexesMatch$$, $endIndexesMatch$$;
  $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = this.$GetSelection$();
  $currentRange$$ = $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$[$cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.length - 1];
  $clone$$2_startIndexesMatch$$ = $currentRange$$.startIndex.row == $newRange$$1$$.startIndex.row;
  $currentRange$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($clone$$2_startIndexesMatch$$ = $clone$$2_startIndexesMatch$$ && $currentRange$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $currentRange$$.endIndex.row == $newRange$$1$$.endIndex.row;
  $currentRange$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $newRange$$1$$.endIndex.column);
  if(!$clone$$2_startIndexesMatch$$ || !$endIndexesMatch$$) {
    $clone$$2_startIndexesMatch$$ = $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.slice(0), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.pop(), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.push($newRange$$1$$), (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$76$$, $clone$$2_startIndexesMatch$$), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, 
    $currentRange$$), (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)(this, $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$), (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$1$$, D.$JSCompiler_alias_TRUE$$), this.$highlightActive$(), this.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$.row == this.$m_active$.row && this.$m_selectionFrontier$.column == this.$m_active$.column || 
    (this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = this.createRange(this.$m_active$), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ != D.$JSCompiler_alias_NULL$$ && 0 < $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.length && 
    (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$[0])), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = this.createRange(this.$m_selectionFrontier$), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$), $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$ == 
    D.$JSCompiler_alias_NULL$$ || 0 == $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$.length || ((0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_selectionFrontier$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$inline_1209_elems$$inline_1205_range$$inline_1208_selection$$6$$[0], D.$JSCompiler_alias_TRUE$$))), this.$m_discontiguousSelection$ && (this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$ = function $$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$) {
  var $range$$14$$;
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_selectionFrontier$.row == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_active$.row && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_selectionFrontier$.column == 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_active$.column || ($range$$14$$ = $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.createRange($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.$m_selectionFrontier$), $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$, $range$$14$$), 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$ != D.$JSCompiler_alias_NULL$$ && 0 < $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$.length && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$21$$[0]))
};
D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$ = function $$JSCompiler_StaticMethods_augmentSelectionAndFocus$$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$74$$, $event$$77$$) {
  0 < $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$().length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  (0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.setActive($index$$74$$, $event$$77$$, $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$_augmentSelectionAndFocusActiveCallback$.bind($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$74$$, $event$$77$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusActiveCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusActiveCallback$$($index$$75$$, $event$$78$$) {
  this.$m_selectionFrontier$ = $index$$75$$;
  "row" == this.$m_options$.$getSelectionMode$() && ($index$$75$$ = this.createIndex($index$$75$$.row));
  var $callback$$inline_9382$$ = this.$_augmentSelectionAndFocusRangeCallback$.bind(this, $index$$75$$, $event$$78$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)(this, $index$$75$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$75$$, $callback$$inline_9382$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusRangeCallback$$($index$$76$$, $event$$79$$, $range$$16$$) {
  var $selection$$8$$, $clone$$3$$;
  $selection$$8$$ = this.$GetSelection$();
  $clone$$3$$ = $selection$$8$$.slice(0);
  $selection$$8$$.push($range$$16$$);
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$79$$, $clone$$3$$);
  this.$highlightActive$();
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, $index$$76$$, "selected")
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$77$$, $event$$80$$) {
  if(this.$m_discontiguousSelection$) {
    if(this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$.row == this.$m_active$.row && this.$m_selectionFrontier$.column == this.$m_active$.column) {
      this.$GetSelection$().pop();
      var $JSCompiler_inline_result$$314_index$$inline_1212$$;
      a: {
        $JSCompiler_inline_result$$314_index$$inline_1212$$ = this.$m_active$;
        var $ranges$$inline_1213$$, $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$, $rangeStartColumn$$inline_1219_startIndex$$inline_1215$$, $rangeStartRow$$inline_1217$$, $rangeEndRow$$inline_1218$$, $i$$inline_1221$$;
        $ranges$$inline_1213$$ = this.$GetSelection$();
        for($i$$inline_1221$$ = 0;$i$$inline_1221$$ < $ranges$$inline_1213$$.length;$i$$inline_1221$$ += 1) {
          if($endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$ = $ranges$$inline_1213$$[$i$$inline_1221$$], $rangeStartColumn$$inline_1219_startIndex$$inline_1215$$ = $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$.startIndex, $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$), $rangeStartRow$$inline_1217$$ = $rangeStartColumn$$inline_1219_startIndex$$inline_1215$$.row, 
          $rangeEndRow$$inline_1218$$ = $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$.row, !($JSCompiler_inline_result$$314_index$$inline_1212$$.row < $rangeStartRow$$inline_1217$$ || -1 != $rangeEndRow$$inline_1218$$ && $JSCompiler_inline_result$$314_index$$inline_1212$$.row > $rangeEndRow$$inline_1218$$)) {
            if(!(0,window.isNaN)($rangeStartColumn$$inline_1219_startIndex$$inline_1215$$.column) && !(0,window.isNaN)($endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$.column)) {
              if($rangeStartColumn$$inline_1219_startIndex$$inline_1215$$ = $rangeStartColumn$$inline_1219_startIndex$$inline_1215$$.column, $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$ = $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$.column, !($JSCompiler_inline_result$$314_index$$inline_1212$$.column < $rangeStartColumn$$inline_1219_startIndex$$inline_1215$$ || -1 != $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$ && $JSCompiler_inline_result$$314_index$$inline_1212$$.column > 
              $endIndex$$inline_1216_range$$inline_1214_rangeEndColumn$$inline_1220$$)) {
                $JSCompiler_inline_result$$314_index$$inline_1212$$ = D.$JSCompiler_alias_TRUE$$;
                break a
              }
            }else {
              $JSCompiler_inline_result$$314_index$$inline_1212$$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
          }
        }
        $JSCompiler_inline_result$$314_index$$inline_1212$$ = D.$JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$314_index$$inline_1212$$ || (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)(this, this.$m_active$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this)
  }
  (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)(this, $index$$77$$, $event$$80$$)
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$3_nodes$$1$$) {
  var $inputElems$$, $elem$$27$$, $nodeCount$$, $inputRegExp$$, $i$$48$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $node$$3_nodes$$1$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$3_nodes$$1$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$27$$ = $node$$3_nodes$$1$$.iterateNext();$elem$$27$$;) {
      !$elem$$27$$.disabled && (!$elem$$27$$.tabIndex || 0 < $elem$$27$$.tabIndex) && $inputElems$$.push($elem$$27$$), $elem$$27$$ = $node$$3_nodes$$1$$.iterateNext()
    }
  }else {
    $node$$3_nodes$$1$$ = $node$$3_nodes$$1$$.getElementsByTagName("*");
    $nodeCount$$ = $node$$3_nodes$$1$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$48$$ = 0;$i$$48$$ < $nodeCount$$;$i$$48$$ += 1) {
      $elem$$27$$ = $node$$3_nodes$$1$$[$i$$48$$], $elem$$27$$.tagName.match($inputRegExp$$) && (!$elem$$27$$.disabled && (!$elem$$27$$.tabIndex || 0 < $elem$$27$$.tabIndex)) && $inputElems$$.push($elem$$27$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$81$$, $clone$$4$$) {
  var $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$;
  a: {
    $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
    var $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$, $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$, $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$;
    if($JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.length !== $clone$$4$$.length) {
      $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      for($bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ = 0;$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ < $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.length;$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ += 1) {
        $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$ = D.$JSCompiler_alias_FALSE$$;
        for($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = 0;$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ < $clone$$4$$.length;$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ += 1) {
          $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$[$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$].startIndex.row === $clone$$4$$[$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$].startIndex.row && ($JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$[$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$].startIndex.column === 
          $clone$$4$$[$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$].startIndex.column && $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$[$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$].endIndex.row === $clone$$4$$[$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$].endIndex.row && 
          $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$[$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$].endIndex.column === $clone$$4$$[$bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$].endIndex.column) && ($foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$ = D.$JSCompiler_alias_TRUE$$)
        }
        if($foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$ === D.$JSCompiler_alias_FALSE$$) {
          $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = D.$JSCompiler_alias_FALSE$$;
          break a
        }
      }
      $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  if(!$JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$) {
    if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$)) {
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ = 
      (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      -$bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ / 2, "top"), $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = window.document.createElement("div"), $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), 
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ / 2, "bottom"), $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = window.document.createElement("div"), $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$.className = 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$), $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ ? ($bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - 
      $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$, $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
      $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$, $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$)) : ($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$81$$.target), $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ = 
      (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$, $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$) - $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$, $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
      $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$), $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$)), $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$))[0].parentNode, 
      $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$));
      var $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$;
      $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
      $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$();
      $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$[$foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$.length - 1].startKey.row);
      $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$[$foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$.length - 1].endKey.row);
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ("row" === $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ ? ($JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), 
      $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$)) : ($bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$ = 
      (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$[$foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$.length - 1]), $foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$ = $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$[0], $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$ = $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$[$bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$.length - 
      1], $JSCompiler_inline_result$$159_dir$$inline_1238_row$$inline_1235_selection1$$inline_1223_topRow$$inline_1242$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $bottomRow$$inline_1243_i$$inline_1225_iconSize$$inline_1232_left$$inline_1237$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      (0,D.$JSCompiler_StaticMethods_getElementDir$$)($foundMatch$$inline_1227_selection$$inline_1241_topIconCell$$inline_1245$$, $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 2, $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$), 
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$, $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
      $bottomIconCell$$inline_1246_elementsInRange$$inline_1247$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 2, $bottomIcon$$inline_1234_cell$$inline_1231_dir$$inline_1248_j$$inline_1226_selectionMode$$inline_1236_selectionMode$$inline_1244_topIcon$$inline_1233$$)))
    }
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$81$$, $clone$$4$$)
  }
};
D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$))
};
D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$, $dir$$18$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ($dir$$18$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 
  2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$, $dir$$18$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$18$$))
};
D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$2$$, $divWidth$$1$$;
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ == D.$JSCompiler_alias_NULL$$ && ($div$$2$$ = window.document.createElement("div"), $div$$2$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$2$$.style.visibilty = "hidden", $div$$2$$.style.top = "0px", $div$$2$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$2$$), 
  $divWidth$$1$$ = $div$$2$$.offsetWidth, $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$2$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$1$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$62$$) {
  var $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$;
  if($JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
    if($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($event$$62$$.target, "header"), $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ != D.$JSCompiler_alias_NULL$$ && ($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ == 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$ || $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ == $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$)) {
      $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$62$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = "default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "" : $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$)
    }
  }else {
    var $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$62$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$62$$.pageY;
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$62$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$62$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$62$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$62$$.pageY);
    $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ ? ($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$, $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$)) : "row" === $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ && ($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = 
    (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$), $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), 
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$, $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeaderWidth$ = $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$, 
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ ? ($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = 
    (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode), $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), 
    (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$, $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$)) : "column" === $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ && 
    ($header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$), $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$ = $newElementHeight$$inline_1145_newElementWidth$$inline_1143$$ = 
    (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$, $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$), 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeaderHeight$ = $header$$24_newElementHeight$$inline_9356_newElementWidth$$inline_9353_oldElementHeight$$inline_1144_oldElementWidth$$inline_1142_resizeHeaderMode$$inline_1141$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$63$$) {
  if("col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$) {
    $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$63$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$63$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = 
    $event$$63$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$63$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 
    0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$64$$) {
  var $details$$6_size$$10$$;
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($details$$6_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$6_size$$10$$ = {event:$event$$64$$, ui:{header:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
  size:$details$$6_size$$10$$}}, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$6_size$$10$$), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.cursor = $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$)
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$12$$) {
  return"true" === $element$$12$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$13$$) {
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("colheadercell"))) {
    if($element$$13$$.previousSibling !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("rowheadercell")) && $element$$13$$.parentNode.previousSibling.firstChild !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$65$$) {
  var $elem$$20$$ = $event$$65$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_1150$$, $cursorX$$, $cursorY$$, $offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$;
  ($elem$$20$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$65$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$20$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$65$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$20$$) {
    return"default"
  }
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$20$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$20$$)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$20$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$20$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX$$ = $event$$65$$.touches[0].pageX, $cursorY$$ = $event$$65$$.touches[0].pageY, $offsetPixel$$ = 12) : ($cursorX$$ = $event$$65$$.pageX, $cursorY$$ = $event$$65$$.pageY, $offsetPixel$$ = 5);
  $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ = $elem$$20$$;
  var $elementXY$$inline_1149_topEdge$$inline_1151$$, $targetWidth$$inline_1152$$;
  $elementXY$$inline_1149_topEdge$$inline_1151$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$);
  $edges_leftEdge$$inline_1150$$ = $elementXY$$inline_1149_topEdge$$inline_1151$$[0];
  $elementXY$$inline_1149_topEdge$$inline_1151$$ = $elementXY$$inline_1149_topEdge$$inline_1151$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($targetWidth$$inline_1152$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$), $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$)) : 
  ($targetWidth$$inline_1152$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$), $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$.parentNode));
  $edges_leftEdge$$inline_1150$$ = [$edges_leftEdge$$inline_1150$$, $elementXY$$inline_1149_topEdge$$inline_1151$$, $edges_leftEdge$$inline_1150$$ + $targetWidth$$inline_1152$$, $elementXY$$inline_1149_topEdge$$inline_1151$$ + $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$];
  $elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  if($widthResizable$$ && ($elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ ? $cursorX$$ < $edges_leftEdge$$inline_1150$$[0] + $offsetPixel$$ : $cursorX$$ > $edges_leftEdge$$inline_1150$$[2] - $offsetPixel$$)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$20$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_1148_rtl$$2_targetHeight$$inline_1153$$ ? $cursorX$$ > $edges_leftEdge$$inline_1150$$[2] - $offsetPixel$$ : $cursorX$$ < $edges_leftEdge$$inline_1150$$[0] + $offsetPixel$$)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$20$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_1150$$[3] - $offsetPixel$$ ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$20$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_1150$$[1] + $offsetPixel$$) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$20$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
  D.$JSCompiler_alias_NULL$$) ? "row-resize" : "default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1$$) {
  var $newScrollerWidth_oldScrollerWidth$$;
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1_widthChange$$;
  if(0 != $oldElementWidth$$1_widthChange$$) {
    $newScrollerWidth_oldScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$, $newElementWidth$$1$$);
    var $dir$$inline_1158$$, $databodyRows$$inline_1159$$, $children$$inline_1160$$, $after$$inline_1161$$, $i$$inline_1162$$, $newStart$$inline_1163$$, $j$$inline_1164$$;
    $dir$$inline_1158$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $databodyRows$$inline_1159$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_1160$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_1161$$ = D.$JSCompiler_alias_FALSE$$;
    if($children$$inline_1160$$.length === $databodyRows$$inline_1159$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_1162$$ = 0;$i$$inline_1162$$ < $children$$inline_1160$$.length;$i$$inline_1162$$ += 1) {
        if($children$$inline_1160$$[$i$$inline_1162$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_1161$$ === D.$JSCompiler_alias_TRUE$$) {
          $newStart$$inline_1163$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($children$$inline_1160$$[$i$$inline_1162$$], $dir$$inline_1158$$) + $oldElementWidth$$1_widthChange$$;
          (0,D.$JSCompiler_StaticMethods_setElementDir$$)($children$$inline_1160$$[$i$$inline_1162$$], $newStart$$inline_1163$$, $dir$$inline_1158$$);
          for($j$$inline_1164$$ = 1;$j$$inline_1164$$ < $databodyRows$$inline_1159$$.length;$j$$inline_1164$$ += 1) {
            (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1159$$[$j$$inline_1164$$].childNodes[$i$$inline_1162$$], $newStart$$inline_1163$$, $dir$$inline_1158$$)
          }
        }else {
          if($children$$inline_1160$$[$i$$inline_1162$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_1161$$ = D.$JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_1164$$ = 1;$j$$inline_1164$$ < $databodyRows$$inline_1159$$.length;$j$$inline_1164$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyRows$$inline_1159$$[$j$$inline_1164$$].childNodes[$i$$inline_1162$$], $newElementWidth$$1$$)
            }
          }
        }
      }
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = ""
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1$$) {
  var $newScrollerHeight_oldScrollerHeight$$, $databodyRows$$inline_1169_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  if(0 != $heightChange_oldElementHeight$$1$$) {
    $newScrollerHeight_oldScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_1169_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_1169_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    var $rowHeaders$$inline_1170$$, $after$$inline_1171$$, $i$$inline_1172$$, $newStart$$inline_1173$$;
    $databodyRows$$inline_1169_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_1170$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_1171$$ = D.$JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_1169_newParentHeight$$.length === $rowHeaders$$inline_1170$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_1172$$ = 1;$i$$inline_1172$$ < $rowHeaders$$inline_1170$$.length;$i$$inline_1172$$ += 1) {
        $rowHeaders$$inline_1170$$[$i$$inline_1172$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_1171$$ === D.$JSCompiler_alias_TRUE$$ ? ($newStart$$inline_1173$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeaders$$inline_1170$$[$i$$inline_1172$$], "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeaders$$inline_1170$$[$i$$inline_1172$$], $newStart$$inline_1173$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1169_newParentHeight$$[$i$$inline_1172$$], 
        $newStart$$inline_1173$$, "top")) : $rowHeaders$$inline_1170$$[$i$$inline_1172$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_1171$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resources$.getMappedAttribute("key")), $newElementHeight$$1$$), 
        (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyRows$$inline_1169_newParentHeight$$[$i$$inline_1172$$], $newElementHeight$$1$$))
      }
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = ""
    }
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$24$$, $oldElementWidth$$2$$) {
  var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_utils$) ? 24 : 10;
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $halfGridWidth$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementWidth$self$$.getWidth() / 2);
  $newElementWidth$$3$$ < $minWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$24$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$25$$, $oldElementHeight$$2$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_utils$) ? 24 : 10;
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $halfGridHeight$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementHeight$self$$.getHeight() / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$25$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyWidth$$3_width$$23$$, $height$$27_scrollerHeight$$3$$, $colHeader$$8$$, $rowHeader$$14$$, $scroller$$10$$, $databody$$12$$, $colHeaderHeight$$5$$, $rowHeaderWidth$$3$$, $databodyContentWidth$$1$$, $databodyContentHeight$$3$$, $databodyHeight$$3$$, $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $scrollerWidth$$3$$;
  $databodyWidth$$3_width$$23$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth();
  $height$$27_scrollerHeight$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight();
  $colHeader$$8$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$12$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$5$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $rowHeaderWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $databodyContentWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$12$$.firstChild);
  $databodyContentHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$12$$.firstChild);
  $height$$27_scrollerHeight$$3$$ -= $colHeaderHeight$$5$$;
  $scrollerWidth$$3$$ = $databodyWidth$$3_width$$23$$ - $rowHeaderWidth$$3$$;
  $databodyWidth$$3_width$$23$$ = window.Math.min($databodyContentWidth$$1$$, $scrollerWidth$$3$$);
  $databodyHeight$$3$$ = window.Math.min($databodyContentHeight$$3$$, $height$$27_scrollerHeight$$3$$);
  $scrollbarSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
  ($dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$27_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
  $height$$27_scrollerHeight$$3$$)) && ($dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
  !$isDatabodyVerticalScrollbarRequired$$1$$ && (!$dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && ($scroller$$10$$.style.overflow = "visible");
  if($isDatabodyVerticalScrollbarRequired$$1$$ && $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$) {
    $scroller$$10$$.style.overflow = "auto"
  }
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
  $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$27_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$3$$ && ($databodyHeight$$3$$ = $height$$27_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
  $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$3_width$$23$$ && ($databodyWidth$$3_width$$23$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
  $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$14$$, $colHeaderHeight$$5$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$14$$, $databodyHeight$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$8$$, $rowHeaderWidth$$3$$, $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$8$$, $databodyWidth$$3_width$$23$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$12$$, $colHeaderHeight$$5$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$12$$, $rowHeaderWidth$$3$$, $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$12$$, $databodyWidth$$3_width$$23$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$12$$, $databodyHeight$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $colHeaderHeight$$5$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$14_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$10$$, $scrollerWidth$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$10$$, $height$$27_scrollerHeight$$3$$);
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$1$$ - $databodyWidth$$3_width$$23$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$3$$ - $databodyHeight$$3$$;
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)
};
D.$JSCompiler_StaticMethods_handleContextMenuResize$$ = function $$JSCompiler_StaticMethods_handleContextMenuResize$$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$47$$, $id$$4$$, $val$$24_value$$50$$) {
  $val$$24_value$$50$$ = (0,window.parseInt)($val$$24_value$$50$$, 10);
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$47$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$47$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortdescending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$47$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortindicators"))) {
    $initialValue_target$$47$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$47$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$47$$;
  "resizeWidth" === $id$$4$$ ? ($initialValue_target$$47$$ = $initialValue_target$$47$$.offsetWidth, $initialValue_target$$47$$ !== $val$$24_value$$50$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && 
  (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$47$$, $val$$24_value$$50$$) : ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeader$, $val$$24_value$$50$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeaderWidth$ = $val$$24_value$$50$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)))) : 
  "resizeHeight" === $id$$4$$ && ($initialValue_target$$47$$ = $initialValue_target$$47$$.offsetHeight, $initialValue_target$$47$$ !== $val$$24_value$$50$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeader$, 
  $val$$24_value$$50$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeaderHeight$ = $val$$24_value$$50$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $initialValue_target$$47$$, $val$$24_value$$50$$)));
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$15_icon$$1$$, $direction$$6$$) {
  $header$$15_icon$$1$$ != D.$JSCompiler_alias_NULL$$ && ($header$$15_icon$$1$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$15_icon$$1$$), "descending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$15_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$16$$, $hide$$) {
  var $icon$$2$$, $sorted$$ = D.$JSCompiler_alias_FALSE$$;
  $header$$16$$ != D.$JSCompiler_alias_NULL$$ && ($icon$$2$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$16$$), $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($sorted$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$_getKey$($header$$16$$)), $hide$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : $hide$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$59$$, $direction$$9$$) {
  var $header$$18$$;
  $header$$18$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$59$$.target);
  $header$$18$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ == D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$_getKey$($header$$18$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, 
  $event$$59$$, $header$$18$$, $direction$$9$$))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$5_event$$61$$, $criteria$$1_header$$20_sortedHeader$$inline_1083$$, $direction$$11$$) {
  var $key$$41$$, $axis$$23_columnHeaderCellClassName$$inline_1075$$;
  $criteria$$1_header$$20_sortedHeader$$inline_1083$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$11$$);
  $key$$41$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($criteria$$1_header$$20_sortedHeader$$inline_1083$$);
  var $oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$;
  $axis$$23_columnHeaderCellClassName$$inline_1075$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("colheadercell");
  $oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("rowheadercell");
  $axis$$23_columnHeaderCellClassName$$inline_1075$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1083$$, $axis$$23_columnHeaderCellClassName$$inline_1075$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1083$$, $oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$) ? "row" : D.$JSCompiler_alias_NULL$$;
  var $oldsortIcon$$inline_1080$$;
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldsortIcon$$inline_1080$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$), 
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1080$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1080$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1080$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1080$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$.lastChild, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {key:$key$$41$$, axis:$axis$$23_columnHeaderCellClassName$$inline_1075$$, direction:$direction$$11$$};
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $criteria$$1_header$$20_sortedHeader$$inline_1083$$, $direction$$11$$);
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($criteria$$1_header$$20_sortedHeader$$inline_1083$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($criteria$$1_header$$20_sortedHeader$$inline_1083$$), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1079_rowHeaderCellClassName$$inline_1076_sortIcon$$inline_1084$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($criteria$$1_header$$20_sortedHeader$$inline_1083$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $direction$$11$$ != D.$JSCompiler_alias_NULL$$ && ($key$$41$$ != D.$JSCompiler_alias_NULL$$ && $axis$$23_columnHeaderCellClassName$$inline_1075$$ != D.$JSCompiler_alias_NULL$$) && ((0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $criteria$$1_header$$20_sortedHeader$$inline_1083$$ = {axis:$axis$$23_columnHeaderCellClassName$$inline_1075$$, key:$key$$41$$, direction:$direction$$11$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($criteria$$1_header$$20_sortedHeader$$inline_1083$$, 
  {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$5_event$$61$$ = {event:$details$$5_event$$61$$, ui:{header:$key$$41$$, direction:$direction$$11$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$5_event$$61$$));
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$41$$})
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  var $newRowHeaderElements$$ = window.document.createElement("div");
  $newRowHeaderElements$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "rowHeader");
  $newRowHeaderElements$$.className = this.$m_resources$.getMappedStyle("rowheader") + " " + this.$m_resources$.getMappedStyle("header");
  this.fetchHeaders("row", this.$m_startRow$, $newRowHeaderElements$$, this.$m_endRow$ - this.$m_startRow$ + 1);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$ + 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $newRowHeaderElements$$), error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$1$$, $cellSet$$13$$, $cellRange$$9_columnStart$$6$$) {
  var $rowStart$$8$$, $rowCount$$7$$, $newRowElements$$, $oldRowElements$$, $oldRowHeaderElements$$, $newRowHeaderElementsFragment$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $rowStart$$8$$ = $cellRange$$9_columnStart$$6$$[0].start;
  $rowCount$$7$$ = $cellSet$$13$$.getCount("row");
  $cellRange$$9_columnStart$$6$$ = $cellRange$$9_columnStart$$6$$[1].start;
  $cellSet$$13$$.getCount("column");
  $newRowElements$$ = window.document.createDocumentFragment();
  $newRowElements$$.appendChild(window.document.createElement("div"));
  $newRowHeaderElementsFragment$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $newRowElements$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $rowStart$$8$$, $rowCount$$7$$, $cellRange$$9_columnStart$$6$$, D.$JSCompiler_alias_FALSE$$, $cellSet$$13$$);
  $oldRowElements$$ = this.$m_databody$.firstChild;
  $oldRowHeaderElements$$ = this.$m_rowHeader$.firstChild;
  if($newRowHeaderElements$$1$$ && $newRowHeaderElements$$1$$.firstChild) {
    for(;$newRowHeaderElements$$1$$.firstChild.firstChild;) {
      $newRowHeaderElementsFragment$$.appendChild($newRowHeaderElements$$1$$.firstChild.firstChild)
    }
  }
  (0,window.setTimeout)(function() {
    var $newRowHeaderElements$$1$$ = $oldRowHeaderElements$$, $cellSet$$13$$, $cellRange$$9_columnStart$$6$$, $rowStart$$8$$, $rowCount$$7$$, $idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$, $animOrder$$inline_1099$$, $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$, $gridHeight$$inline_1102_rowHeight$$inline_1105$$, $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$, $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$, 
    $l$$inline_1119_rowsForAppend$$inline_1110$$, $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$, $dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$, $j$$inline_1115_rowPos$$inline_1127$$, $k$$inline_1117_key$$inline_1116$$, $keyAttr$$inline_1122$$, $rowHeaderSupport$$inline_1129$$, $newElementSetClone$$inline_1130$$, $newRowHeaderElementsClone$$inline_1131$$;
    $rowHeaderSupport$$inline_1129$$ = D.$JSCompiler_alias_FALSE$$;
    $cellSet$$13$$ = this;
    $cellRange$$9_columnStart$$6$$ = 0;
    $newElementSetClone$$inline_1130$$ = $newRowElements$$.cloneNode(D.$JSCompiler_alias_TRUE$$);
    $newRowHeaderElementsClone$$inline_1131$$ = $newRowHeaderElementsFragment$$ ? $newRowHeaderElementsFragment$$.cloneNode(D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_NULL$$;
    $keyAttr$$inline_1122$$ = this.$m_resources$.getMappedAttribute("key");
    $rowStart$$8$$ = $oldRowElements$$.childElementCount;
    $idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $newRowElements$$);
    $rowCount$$7$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $oldRowElements$$);
    $animOrder$$inline_1099$$ = [];
    $cellRange$$9_columnStart$$6$$ = [];
    $l$$inline_1119_rowsForAppend$$inline_1110$$ = [];
    $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$ = [];
    $dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ = 0;
    $gridHeight$$inline_1102_rowHeight$$inline_1105$$ = this.getHeight();
    $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)(this);
    $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$ = $gridHeight$$inline_1102_rowHeight$$inline_1105$$ - $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$;
    $gridHeight$$inline_1102_rowHeight$$inline_1105$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
    ($colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$ = (0,window.parseInt)($oldRowElements$$.childNodes[1].style.top.split("px")[0], 10)) || ($colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$ = 0);
    $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = this.$m_currentScrollTop$ - $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$;
    $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$ = [$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$, $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ + $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$];
    $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$ = [window.Math.ceil($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ / $gridHeight$$inline_1102_rowHeight$$inline_1105$$), window.Math.floor(($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ + $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$) / $gridHeight$$inline_1102_rowHeight$$inline_1105$$)];
    $newRowHeaderElements$$1$$.childElementCount != $rowStart$$8$$ && $newRowHeaderElements$$1$$.firstChild.children.length == $rowStart$$8$$ + 1 && ($newRowHeaderElements$$1$$ = $newRowHeaderElements$$1$$.firstChild);
    if($newRowHeaderElements$$1$$.childElementCount == $rowStart$$8$$ && $newRowHeaderElementsFragment$$) {
      $rowHeaderSupport$$inline_1129$$ = D.$JSCompiler_alias_TRUE$$;
      for($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = 1;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ < $newRowHeaderElements$$1$$.childElementCount;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$++) {
        $newRowHeaderElements$$1$$.childNodes[$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$].id += "_old"
      }
    }
    if($rowHeaderSupport$$inline_1129$$) {
      for($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = 0;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ < $newRowHeaderElementsClone$$inline_1131$$.childNodes.length;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$++) {
        $newRowHeaderElementsClone$$inline_1131$$.childNodes[$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$].style.top = $oldRowElements$$.children[$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$].style.top
      }
    }
    for($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = 0;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ < $rowCount$$7$$.length;$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$++) {
      $animOrder$$inline_1099$$[$rowCount$$7$$[$dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$]] = $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$
    }
    for($j$$inline_1115_rowPos$$inline_1127$$ = 0;$j$$inline_1115_rowPos$$inline_1127$$ < $idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$.length;$j$$inline_1115_rowPos$$inline_1127$$++) {
      if($animOrder$$inline_1099$$.hasOwnProperty($idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$])) {
        if($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] - 1 && $j$$inline_1115_rowPos$$inline_1127$$ < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] - 1 || $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] > 
        $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] + 1 && $j$$inline_1115_rowPos$$inline_1127$$ > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] + 1 || $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] - 
        1 && $j$$inline_1115_rowPos$$inline_1127$$ > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] + 1 || $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] + 1 && $j$$inline_1115_rowPos$$inline_1127$$ < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] - 
        1) {
          $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] = "no_0"
        }
        (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]]) && ($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] > $j$$inline_1115_rowPos$$inline_1127$$ ? ($j$$inline_1115_rowPos$$inline_1127$$ < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] && $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] > 
        $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] ? $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] - ($bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] + 1) : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]]) && 
        $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] && ($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] - $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] - 
        1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldRowElements$$.childNodes[$animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] + 1], 0, 0, "linear", $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$), $rowHeaderSupport$$inline_1129$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1$$.childNodes[$animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] + 
        1], 0, 0, "linear", ($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ + 1) * $gridHeight$$inline_1102_rowHeight$$inline_1105$$)), $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] - $j$$inline_1115_rowPos$$inline_1127$$), $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] = 
        "up_-" + $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$) : $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] < $j$$inline_1115_rowPos$$inline_1127$$ ? ($j$$inline_1115_rowPos$$inline_1127$$ > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] && $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] < 
        $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] ? $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] + 1 - $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]]) && 
        $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] && ($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] - $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] - 
        1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldRowElements$$.childNodes[$animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] + 1], 0, 0, "linear", $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$), $rowHeaderSupport$$inline_1129$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1$$.childNodes[$animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] + 
        1], 0, 0, "linear", $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$)), $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $j$$inline_1115_rowPos$$inline_1127$$ - $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]]), $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] = 
        "down_" + $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$) : $animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] == $j$$inline_1115_rowPos$$inline_1127$$ && ($animOrder$$inline_1099$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] = "no_0"))
      }else {
        $cellRange$$9_columnStart$$6$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$[$j$$inline_1115_rowPos$$inline_1127$$]] = $j$$inline_1115_rowPos$$inline_1127$$
      }
    }
    for($idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ = 0;$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ < $rowCount$$7$$.length;$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$++) {
      $animOrder$$inline_1099$$.hasOwnProperty($rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]) && (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]]) && ($animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] && ($animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] = 
      "no_0"), $animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] > $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] && ($animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] = "no_0"), $animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] >= $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[0] && 
      $animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] <= $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] && ($dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$[1] - $animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] + 
      2, $animOrder$$inline_1099$$[$rowCount$$7$$[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$]] = "down_" + $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$))
    }
    for($k$$inline_1117_key$$inline_1116$$ in $cellRange$$9_columnStart$$6$$) {
      $cellRange$$9_columnStart$$6$$.hasOwnProperty($k$$inline_1117_key$$inline_1116$$) && ($dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$++, $idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ = $cellRange$$9_columnStart$$6$$[$k$$inline_1117_key$$inline_1116$$], $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$ = $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[1] + $oldRowElements$$.childNodes[1].clientHeight, 
      $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ = $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[0] - $oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1115_rowPos$$inline_1127$$ = $idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ * $oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1115_rowPos$$inline_1127$$ < $bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$ && 
      $j$$inline_1115_rowPos$$inline_1127$$ > $dv$$inline_1113_i$$inline_1114_scrollTop$$inline_1107_topLimit$$inline_1126_v$$inline_1101$$ && ($bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$ = $newRowElements$$.childNodes[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ + 1], $l$$inline_1119_rowsForAppend$$inline_1110$$.push($bottomLimit$$inline_1125_child$$inline_1128_gridBodyHeight$$inline_1104_limitRangeInRows$$inline_1109$$), $rowHeaderSupport$$inline_1129$$ && 
      $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$.push($newRowHeaderElementsFragment$$.childNodes[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ + 1])))
    }
    for($k$$inline_1117_key$$inline_1116$$ = 0;$k$$inline_1117_key$$inline_1116$$ < $l$$inline_1119_rowsForAppend$$inline_1110$$.length;$k$$inline_1117_key$$inline_1116$$++) {
      for($idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ = 0;$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$ < $l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$].attributes.length;$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$++) {
        $dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ = D.$JSCompiler_alias_NULL$$, $l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$].attributes[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$].nodeName == $keyAttr$$inline_1122$$ && ($dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ = $l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$].attributes[$idx$$inline_1124_kk$$inline_1118_newSet$$inline_1098$$].nodeValue, 
        $cellRange$$9_columnStart$$6$$.hasOwnProperty($dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$) && ($dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ = $cellRange$$9_columnStart$$6$$[$dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$], (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$], 0, 0, "linear", $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[1] - 
        $dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$), $rowHeaderSupport$$inline_1129$$ && ($delay$$inline_1121_rowHeadersForAppend$$inline_1111$$[$k$$inline_1117_key$$inline_1116$$].style.top = $l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$].style.top, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($delay$$inline_1121_rowHeadersForAppend$$inline_1111$$[$k$$inline_1117_key$$inline_1116$$], 
        0, 0, "linear", $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[1] - $dkey$$inline_1120_order$$inline_1123_restSetLength$$inline_1112$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$))))
      }
      $oldRowElements$$.appendChild($l$$inline_1119_rowsForAppend$$inline_1110$$[$k$$inline_1117_key$$inline_1116$$]);
      $rowHeaderSupport$$inline_1129$$ && $newRowHeaderElements$$1$$.appendChild($delay$$inline_1121_rowHeadersForAppend$$inline_1111$$[$k$$inline_1117_key$$inline_1116$$])
    }
    for($l$$inline_1119_rowsForAppend$$inline_1110$$ = 0;$l$$inline_1119_rowsForAppend$$inline_1110$$ < $oldRowElements$$.childElementCount;$l$$inline_1119_rowsForAppend$$inline_1110$$++) {
      if($delay$$inline_1121_rowHeadersForAppend$$inline_1111$$ = 0 * $l$$inline_1119_rowsForAppend$$inline_1110$$ + "ms", $l$$inline_1119_rowsForAppend$$inline_1110$$ < $rowStart$$8$$ - 1 ? ($cellRange$$9_columnStart$$6$$ = (0,window.parseInt)($animOrder$$inline_1099$$[$rowCount$$7$$[$l$$inline_1119_rowsForAppend$$inline_1110$$]].split("_")[1], 10) * $gridHeight$$inline_1102_rowHeight$$inline_1105$$, $cellRange$$9_columnStart$$6$$ < $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[1] - 
      $l$$inline_1119_rowsForAppend$$inline_1110$$ * $gridHeight$$inline_1102_rowHeight$$inline_1105$$ || ($cellRange$$9_columnStart$$6$$ = $colHeaderHeight$$inline_1103_limitRangeInPixels$$inline_1108_offset$$inline_1106$$[1] - ($l$$inline_1119_rowsForAppend$$inline_1110$$ - 1) * $oldRowElements$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldRowElements$$.childNodes[$l$$inline_1119_rowsForAppend$$inline_1110$$ + 1], "400ms", $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$, 
      "ease-in", $cellRange$$9_columnStart$$6$$), $rowHeaderSupport$$inline_1129$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1$$.childNodes[$l$$inline_1119_rowsForAppend$$inline_1110$$ + 1], "400ms", $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$, "ease-in", $cellRange$$9_columnStart$$6$$)) : ((0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($oldRowElements$$.childNodes[$l$$inline_1119_rowsForAppend$$inline_1110$$ + 1], "400ms", $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$, 
      "ease-in", 0), $rowHeaderSupport$$inline_1129$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1$$.childNodes[$l$$inline_1119_rowsForAppend$$inline_1110$$ + 1], "400ms", $delay$$inline_1121_rowHeadersForAppend$$inline_1111$$, "ease-in", 0)), $l$$inline_1119_rowsForAppend$$inline_1110$$ == $oldRowElements$$.childElementCount - 2) {
        $oldRowElements$$.childNodes[$l$$inline_1119_rowsForAppend$$inline_1110$$].addEventListener("transitionend", function() {
          (0,window.setTimeout)(function() {
            if($rowHeaderSupport$$inline_1129$$) {
              var $newRowHeaderElements$$1$$ = $cellSet$$13$$.$m_rowHeader$.firstChild;
              $cellSet$$13$$.$m_rowHeader$.firstChild = D.$JSCompiler_alias_NULL$$;
              $newRowHeaderElements$$1$$.innerHTML = "";
              $newRowHeaderElements$$1$$.appendChild($newRowHeaderElementsClone$$inline_1131$$);
              $cellSet$$13$$.$m_startRowHeader$ = 0
            }
            $newRowHeaderElements$$1$$ = $cellSet$$13$$.$m_databody$.firstChild;
            $newRowHeaderElements$$1$$.innerHTML = "";
            $newRowHeaderElements$$1$$.appendChild($newElementSetClone$$inline_1130$$);
            $cellSet$$13$$.$m_active$ && ($newRowHeaderElements$$1$$ = $cellSet$$13$$.$m_active$, $newRowHeaderElements$$1$$ = $cellSet$$13$$.createIndex(-1 === $newRowHeaderElements$$1$$.row ? 0 : $newRowHeaderElements$$1$$.row, -1 === $newRowHeaderElements$$1$$.column ? 0 : $newRowHeaderElements$$1$$.column), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($cellSet$$13$$, $newRowHeaderElements$$1$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($cellSet$$13$$) ? $cellSet$$13$$.$selectAndFocus$($newRowHeaderElements$$1$$) : 
            $cellSet$$13$$.$activeAndFocus$($newRowHeaderElements$$1$$))
          }, 100)
        }, D.$JSCompiler_alias_FALSE$$);
        break
      }
    }
  }.bind(this), 0)
};
D.$JSCompiler_StaticMethods_isNumeric$$ = function $$JSCompiler_StaticMethods_isNumeric$$$($v$$) {
  return/^-{0,1}\d*\.{0,1}\d+$/.test($v$$)
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$34$$, $j$$13$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$34$$ = 0;$i$$34$$ < $initialData$$.childNodes.length;$i$$34$$++) {
    for($j$$13$$ = 0;$j$$13$$ < $initialData$$.childNodes[$i$$34$$].attributes.length;$j$$13$$++) {
      if($initialData$$.childNodes[$i$$34$$].attributes[$j$$13$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.childNodes[$i$$34$$].attributes[$j$$13$$].nodeValue);
        break
      }
    }
  }
  return $dataKeySet$$
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$13$$, $i$$35$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$13$$ = window.document.documentElement;
  for($i$$35$$ = 0;$i$$35$$ < $vendors$$.length;$i$$35$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$35$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$13$$.style) {
      return $css3mc$$
    }
  }
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$45$$, $prop$$6$$, $value$$49$$, $action$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$45$$.style[$prop$$6$$] = "remove" == $action$$ ? "" : $value$$49$$)
};
D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$ = function $$JSCompiler_StaticMethods_addUpDownMoveStyle$$$($target$$46$$, $duration$$7$$, $delay$$5$$, $timing$$1$$, $y$$37$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$5$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$1$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$7$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$46$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(0," + $y$$37$$ + "px,0)")
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$22$$) {
  return $header$$22$$.lastChild.firstChild
};
return DvtDataGrid;
});