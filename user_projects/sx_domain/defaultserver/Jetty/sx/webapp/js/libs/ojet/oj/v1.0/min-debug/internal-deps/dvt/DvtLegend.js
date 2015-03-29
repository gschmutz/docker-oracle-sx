"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$349$$, $callback$$115$$, $callbackObj$$88$$) {
  var $legend$$26$$ = new D.$DvtLegend$$;
  $legend$$26$$.Init($context$$349$$, $callback$$115$$, $callbackObj$$88$$);
  return $legend$$26$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$9$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$350$$, $callback$$116$$, $callbackObj$$89$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$350$$, $callback$$116$$, $callbackObj$$89$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$DvtLegend$$.prototype.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$245$$) {
  $options$$245$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$245$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$31_options$$246$$, $maxWidth$$22$$, $maxHeight$$16$$) {
  this.$SetOptions$($dim$$31_options$$246$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$31_options$$246$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$22$$, $maxHeight$$16$$));
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return $dim$$31_options$$246$$
};
D.$DvtLegend$$.prototype.getPreferredSize = D.$DvtLegend$$.prototype.$getPreferredSize$;
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($options$$247$$, $width$$126$$, $height$$106$$) {
  this.$SetOptions$($options$$247$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  this.$_peers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  !(0,D.$DvtAgent$isTouchDevice$$)() && "none" != this.$__getOptions$().hideAndShowBehavior && (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  return D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $width$$126$$, $height$$106$$))
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$11$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$11$$, this.$_peers$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$434$$, $source$$19$$) {
  var $type$$146$$ = $event$$434$$.$getType$();
  ("categoryRollOver" == $type$$146$$ || "categoryRollOut" == $type$$146$$) && "dim" == this.$__getOptions$().hoverBehavior && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$434$$, this.$_peers$);
  (this == $source$$19$$ || "showPopup" == $type$$146$$ || "hidePopup" == $type$$146$$) && this.$__dispatchEvent$($event$$434$$)
};
D.$DvtLegend$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtLegend$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$destroy$ = function $$DvtLegend$$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$9$$) {
  this.$_legend$ = $dvtComponent$$9$$;
  this.$_options$ = this.$_legend$.$__getOptions$()
};
(0,D.$goog$exportSymbol$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$56_indexList$$2_item$$25_logicalObj$$14$$) {
  if(($displayable$$56_indexList$$2_item$$25_logicalObj$$14$$ = this.$_legend$.$__getEventManager$().$GetLogicalObject$($displayable$$56_indexList$$2_item$$25_logicalObj$$14$$)) && $displayable$$56_indexList$$2_item$$25_logicalObj$$14$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$56_indexList$$2_item$$25_logicalObj$$14$$ = $displayable$$56_indexList$$2_item$$25_logicalObj$$14$$.getData(), $displayable$$56_indexList$$2_item$$25_logicalObj$$14$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$56_indexList$$2_item$$25_logicalObj$$14$$, this.$_options$)) {
      return"section" + $displayable$$56_indexList$$2_item$$25_logicalObj$$14$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$, $item$$26$$, $legendOptions$$5$$) {
  if($legendOptions$$5$$.sections && 0 < $legendOptions$$5$$.sections.length) {
    for(var $s$$118$$ = 0;$s$$118$$ < $legendOptions$$5$$.sections.length;$s$$118$$++) {
      if($legendOptions$$5$$.sections[$s$$118$$] == $item$$26$$) {
        return"[" + $s$$118$$ + "]"
      }
      var $itemIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$, $item$$26$$, $legendOptions$$5$$.sections[$s$$118$$]);
      if($itemIndex$$2$$) {
        return"[" + $s$$118$$ + "]" + $itemIndex$$2$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$5$$.items && 0 < $legendOptions$$5$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$ < $legendOptions$$5$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$++) {
      if($legendOptions$$5$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$] == $item$$26$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$510$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$, $series$$24$$, $legendOptions$$6$$) {
  if($legendOptions$$6$$.sections && 0 < $legendOptions$$6$$.sections.length) {
    for(var $s$$119$$ = 0;$s$$119$$ < $legendOptions$$6$$.sections.length;$s$$119$$++) {
      var $itemIndex$$3$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$, $series$$24$$, $legendOptions$$6$$.sections[$s$$119$$]);
      if($itemIndex$$3$$) {
        return"[" + $s$$119$$ + "]" + $itemIndex$$3$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$6$$.items && 0 < $legendOptions$$6$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$ < $legendOptions$$6$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$++) {
      if($legendOptions$$6$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$].text == $series$$24$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$511$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$171$$, $subId$$23$$) {
  var $index$$119_openParen$$4$$ = $subId$$23$$.indexOf("["), $closeParen$$4_nextCloseParen$$1$$ = $subId$$23$$.indexOf("]");
  if(0 <= $index$$119_openParen$$4$$ && 0 <= $closeParen$$4_nextCloseParen$$1$$) {
    var $index$$119_openParen$$4$$ = $subId$$23$$.substring($index$$119_openParen$$4$$ + 1, $closeParen$$4_nextCloseParen$$1$$), $colonIndex$$ = $subId$$23$$.indexOf(":");
    $subId$$23$$ = $subId$$23$$.substring($closeParen$$4_nextCloseParen$$1$$ + 1);
    $closeParen$$4_nextCloseParen$$1$$ = $subId$$23$$.indexOf("]");
    return 0 <= $subId$$23$$.indexOf("[") && 0 <= $closeParen$$4_nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$171$$.sections[$index$$119_openParen$$4$$], $subId$$23$$) : 0 == $colonIndex$$ ? $options$$171$$.items[$index$$119_openParen$$4$$] : $options$$171$$.sections[$index$$119_openParen$$4$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem$$4_subId$$24$$) {
  $legendItem$$4_subId$$24$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem$$4_subId$$24$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$512$$ = 0;$i$$512$$ < $legendPeers$$.length;$i$$512$$++) {
    var $item$$27$$ = $legendPeers$$[$i$$512$$].getData();
    if($legendItem$$4_subId$$24$$ == $item$$27$$) {
      return $legendPeers$$[$i$$512$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$1$$) {
  for(var $item$$28$$, $index$$120$$ = $subIdPath$$1$$.shift(), $options$$172$$ = this.$_options$;$index$$120$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$1$$.length ? $options$$172$$ = $options$$172$$.sections[$index$$120$$] : $item$$28$$ = $options$$172$$.items[$index$$120$$], $index$$120$$ = $subIdPath$$1$$.shift()
  }
  return{text:$item$$28$$.text ? $item$$28$$.text : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$2$$) {
  for(var $section$$5$$, $index$$121$$ = $subIdPath$$2$$.shift(), $options$$173$$ = this.$_options$;$index$$121$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$2$$.length ? $options$$173$$ = $options$$173$$.sections[$index$$121$$] : $section$$5$$ = $options$$173$$.sections[$index$$121$$], $index$$121$$ = $subIdPath$$2$$.shift()
  }
  return{title:$section$$5$$.title ? $section$$5$$.title : D.$JSCompiler_alias_NULL$$, items:$section$$5$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$5$$.items) : D.$JSCompiler_alias_NULL$$, sections:$section$$5$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$5$$.sections) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$20$$) {
  for(var $itemDataArray$$ = [], $i$$513$$ = 0;$i$$513$$ < $items$$20$$.length;$i$$513$$++) {
    $itemDataArray$$.push({text:$items$$20$$[$i$$513$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$2$$) {
  for(var $sectionDataArray$$ = [], $i$$514$$ = 0;$i$$514$$ < $sections$$2$$.length;$i$$514$$++) {
    $sectionDataArray$$.push({title:$sections$$2$$[$i$$514$$].title ? $sections$$2$$[$i$$514$$].title : D.$JSCompiler_alias_NULL$$, items:$sections$$2$$[$i$$514$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$2$$[$i$$514$$].items) : D.$JSCompiler_alias_NULL$$, sections:$sections$$2$$[$i$$514$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$2$$[$i$$514$$].sections) : D.$JSCompiler_alias_NULL$$})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), colors:D.$DvtCSSStyle$COLORS_ALTA$$};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;"), titleHalign:"start", hideAndShowBehavior:"none", hoverBehavior:"none", scrolling:"asNeeded", halign:"center", valign:"middle", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", 
lineWidth:3, layout:{gapWidthRatio:1, gapHeightRatio:1, outerGapWidth:3, outerGapHeight:3, titleGap:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapWidth$$ = function $$DvtLegendDefaults$getGapWidth$$$($options$$174$$, $defaultWidth$$2$$) {
  return window.Math.ceil($defaultWidth$$2$$ * $options$$174$$.layout.gapWidthRatio)
};
D.$DvtLegendDefaults$getGapHeight$$ = function $$DvtLegendDefaults$getGapHeight$$$($options$$175$$, $defaultHeight$$2$$) {
  return window.Math.ceil($defaultHeight$$2$$ * $options$$175$$.layout.gapHeightRatio)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$11$$) {
  this.Init($legend$$11$$.$_context$, $legend$$11$$.$processEvent$, $legend$$11$$);
  this.$_legend$ = $legend$$11$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$128$$, $logicalObj$$15$$) {
  var $id$$inline_5311_params$$45$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$15$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$15$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_5311_params$$45$$ = $logicalObj$$15$$.$getParams$() : $logicalObj$$15$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_5311_params$$45$$ = $logicalObj$$15$$.getId(), $id$$inline_5311_params$$45$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_5311_params$$45$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$128$$, $id$$inline_5311_params$$45$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$348$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$348$$);
  var $action$$19_obj$$149$$ = this.$GetLogicalObject$($event$$348$$.target);
  if($action$$19_obj$$149$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$19_obj$$149$$), $action$$19_obj$$149$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$19_obj$$149$$);
    ($hideShow$$ || $action$$19_obj$$149$$) && $event$$348$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$349$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$349$$);
  var $obj$$150$$ = this.$GetLogicalObject$($event$$349$$.target);
  $obj$$150$$ && (this.$_processRolloverEvent$($obj$$150$$, D.$JSCompiler_alias_TRUE$$) && $event$$349$$.stopPropagation(), this.$UpdateActiveElement$($obj$$150$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$350$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$350$$);
  var $obj$$151$$ = this.$GetLogicalObject$($event$$350$$.target);
  $obj$$151$$ && this.$_processRolloverEvent$($obj$$151$$, D.$JSCompiler_alias_FALSE$$) && $event$$350$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$50_touchEvent$$1$$) {
  var $action$$20_obj$$152$$ = this.$GetLogicalObject$($evt$$50_touchEvent$$1$$.target);
  if($action$$20_obj$$152$$) {
    $evt$$50_touchEvent$$1$$ = $evt$$50_touchEvent$$1$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$20_obj$$152$$), $action$$20_obj$$152$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$20_obj$$152$$);
    ($hideShow$$1$$ || $action$$20_obj$$152$$) && $evt$$50_touchEvent$$1$$ && $evt$$50_touchEvent$$1$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$351$$) {
  var $obj$$153$$ = this.$GetLogicalObject$($event$$351$$.target);
  this.$_processRolloverEvent$($obj$$153$$, D.$JSCompiler_alias_TRUE$$) && $event$$351$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$352$$) {
  var $obj$$154$$ = this.$GetLogicalObject$($event$$352$$.target);
  this.$_processRolloverEvent$($obj$$154$$, D.$JSCompiler_alias_FALSE$$) && $event$$352$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$353$$) {
  var $obj$$155$$ = this.$GetLogicalObject$($event$$353$$.target);
  this.$_processRolloverEvent$($obj$$155$$, D.$JSCompiler_alias_TRUE$$) && $event$$353$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$354$$) {
  var $obj$$156$$ = this.$GetLogicalObject$($event$$354$$.target);
  this.$_processRolloverEvent$($obj$$156$$, D.$JSCompiler_alias_FALSE$$) && $event$$354$$.stopPropagation()
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$157$$) {
  if("none" == $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$__getOptions$().hideAndShowBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$9_id$$137$$ = $obj$$157$$.$getCategories$ ? $obj$$157$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$9_id$$137$$ || 0 >= $categories$$9_id$$137$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $dataItem$$31$$ = $obj$$157$$.getData(), $visibility$$3$$ = $dataItem$$31$$.categoryVisibility, $displayables$$16$$ = $obj$$157$$.$getDisplayables$(), $i$$517$$ = 0;$i$$517$$ < $displayables$$16$$.length;$i$$517$$++) {
    var $displayable$$58$$ = $displayables$$16$$[$i$$517$$];
    $displayable$$58$$ instanceof D.$DvtMarker$$ ? $displayable$$58$$.$setHollow$($obj$$157$$.$getColor$()) : $displayable$$58$$ instanceof D.$DvtRect$$ && $obj$$157$$.$UpdateAriaLabel$($displayable$$58$$)
  }
  $categories$$9_id$$137$$ = $categories$$9_id$$137$$[0];
  "hidden" == $visibility$$3$$ ? ($dataItem$$31$$.categoryVisibility = "visible", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$9_id$$137$$), $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$)) : ($dataItem$$31$$.categoryVisibility = "hidden", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, 
  $categories$$9_id$$137$$), $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__processActionEvent$$ = function $$JSCompiler_StaticMethods__processActionEvent$$$($JSCompiler_StaticMethods__processActionEvent$self$$, $obj$$158$$) {
  return $obj$$158$$ && $obj$$158$$.$getAction$ && $obj$$158$$.$getAction$() ? ($JSCompiler_StaticMethods__processActionEvent$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$158$$.$getAction$(), $obj$$158$$.getId()), $JSCompiler_StaticMethods__processActionEvent$self$$.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$_processRolloverEvent$ = function $$DvtLegendEventManager$$$$$_processRolloverEvent$$($obj$$159$$, $bOver$$11$$) {
  if("none" == this.$_legend$.$__getOptions$().hoverBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$10$$ = $obj$$159$$ && $obj$$159$$.$getCategories$ ? $obj$$159$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$10$$ || 0 >= $categories$$10$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($bOver$$11$$ ? "categoryRollOver" : "categoryRollOut", $categories$$10$$[0]), this.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$10$$, $legend$$9$$) {
  this.Init($manager$$10$$, $legend$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$11$$, $legend$$10$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$11$$);
  this.$_legend$ = $legend$$10$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$347$$) {
  var $keyCode$$24_navigables$$10$$ = $event$$347$$.keyCode, $currentNavigable$$3$$ = this.$_eventManager$.$getFocus$();
  if(9 == $keyCode$$24_navigables$$10$$) {
    if($currentNavigable$$3$$) {
      return $event$$347$$.preventDefault(), $currentNavigable$$3$$
    }
    $keyCode$$24_navigables$$10$$ = this.$_legend$.$_peers$;
    if(0 < $keyCode$$24_navigables$$10$$.length) {
      return $event$$347$$.preventDefault(), this.$getDefaultNavigable$($keyCode$$24_navigables$$10$$)
    }
  }else {
    if(13 == $keyCode$$24_navigables$$10$$ || 32 == $keyCode$$24_navigables$$10$$) {
      $currentNavigable$$3$$ && (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this.$_legend$.$__getEventManager$(), $currentNavigable$$3$$)
    }else {
      return D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$347$$)
    }
  }
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$6$$, $displayables$$13$$, $id$$135$$, $tooltip$$19$$) {
  this.Init($legend$$6$$, $displayables$$13$$, $id$$135$$, $tooltip$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($i$$515_legend$$7$$, $displayables$$14$$, $item$$29$$, $tooltip$$20$$) {
  this.$_legend$ = $i$$515_legend$$7$$;
  this.$_displayables$ = $displayables$$14$$;
  this.$_item$ = $item$$29$$;
  this.$_id$ = $item$$29$$.id ? $item$$29$$.id : $item$$29$$.text;
  this.$_action$ = $item$$29$$.action;
  this.$_spb$ = $item$$29$$._spb;
  this.$_tooltip$ = $tooltip$$20$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_action$) {
    for($i$$515_legend$$7$$ = 0;$i$$515_legend$$7$$ < this.$_displayables$.length;$i$$515_legend$$7$$++) {
      this.$_displayables$[$i$$515_legend$$7$$].setCursor("pointer")
    }
  }
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.$_id$]
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  if("none" != this.$_legend$.$__getOptions$().hideAndShowBehavior) {
    var $bundle$$18$$ = this.$_legend$.$__getBundle$(), $states$$11$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$18$$, "hidden" == this.getData().categoryVisibility ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().text, $states$$11$$, $bundle$$18$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$($displayable$$57$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$57$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$346$$) {
  return $event$$346$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$346$$, this.$_legend$.$_peers$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$17$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$17$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setStroke$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$12$$, $availSpace$$76$$) {
  var $i$$518_options$$176_valign$$1$$ = $legend$$12$$.$__getOptions$(), $context$$280$$ = $legend$$12$$.$_context$, $halign$$6_isScrollable$$1$$ = "off" != $i$$518_options$$176_valign$$1$$.scrolling;
  $i$$518_options$$176_valign$$1$$.isLayout || D.$DvtLegendRenderer$$.$_renderBackground$($legend$$12$$, $availSpace$$76$$);
  var $gapWidth$$2$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($i$$518_options$$176_valign$$1$$, $i$$518_options$$176_valign$$1$$.layout.outerGapWidth), $gapHeight$$2$$ = (0,D.$DvtLegendDefaults$getGapHeight$$)($i$$518_options$$176_valign$$1$$, $i$$518_options$$176_valign$$1$$.layout.outerGapHeight);
  $availSpace$$76$$.x += $gapWidth$$2$$;
  $availSpace$$76$$.y += $gapHeight$$2$$;
  $availSpace$$76$$.$w$ -= 2 * $gapWidth$$2$$;
  $availSpace$$76$$.$h$ -= 2 * $gapHeight$$2$$;
  $legend$$12$$.$__setBounds$($availSpace$$76$$);
  if(0 >= $availSpace$$76$$.$w$ || 0 >= $availSpace$$76$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  var $container$$106_titles$$ = $halign$$6_isScrollable$$1$$ ? new D.$DvtSimpleScrollableContainer$$($context$$280$$, $availSpace$$76$$) : new D.$DvtContainer$$($context$$280$$);
  $legend$$12$$.$addChild$($container$$106_titles$$);
  var $legendSpace$$1_sectionsDim$$ = $availSpace$$76$$.clone(), $title$$12_totalDim$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$12$$, $container$$106_titles$$, $i$$518_options$$176_valign$$1$$.title, $legendSpace$$1_sectionsDim$$, D.$JSCompiler_alias_NULL$$);
  if($title$$12_totalDim$$) {
    var $titleDim$$ = $title$$12_totalDim$$.$measureDimensions$(), $titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapHeight$$)($i$$518_options$$176_valign$$1$$, $i$$518_options$$176_valign$$1$$.layout.titleGap);
    $legendSpace$$1_sectionsDim$$.y += $titleDim$$.$h$ + $titleGap$$1$$;
    $legendSpace$$1_sectionsDim$$.$h$ -= window.Math.floor($titleDim$$.$h$ + $titleGap$$1$$)
  }
  $legendSpace$$1_sectionsDim$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$12$$, $container$$106_titles$$, $legendSpace$$1_sectionsDim$$);
  $title$$12_totalDim$$ = $title$$12_totalDim$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$, $legendSpace$$1_sectionsDim$$) : $legendSpace$$1_sectionsDim$$;
  $title$$12_totalDim$$.$h$ > $availSpace$$76$$.$h$ && ($halign$$6_isScrollable$$1$$ && $container$$106_titles$$.$setContentHeight$($title$$12_totalDim$$.$h$), $title$$12_totalDim$$.$h$ = $availSpace$$76$$.$h$);
  if($i$$518_options$$176_valign$$1$$.isLayout) {
    return new D.$DvtDimension$$($title$$12_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $title$$12_totalDim$$.$h$ + 2 * $gapHeight$$2$$)
  }
  $halign$$6_isScrollable$$1$$ = $i$$518_options$$176_valign$$1$$.hAlign != D.$JSCompiler_alias_NULL$$ ? $i$$518_options$$176_valign$$1$$.hAlign : $i$$518_options$$176_valign$$1$$.halign;
  "center" == $halign$$6_isScrollable$$1$$ ? $container$$106_titles$$.$setTranslateX$($availSpace$$76$$.x - $title$$12_totalDim$$.x + ($availSpace$$76$$.$w$ - $title$$12_totalDim$$.$w$) / 2) : "end" == $halign$$6_isScrollable$$1$$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$280$$) ? $container$$106_titles$$.$setTranslateX$($availSpace$$76$$.x - $title$$12_totalDim$$.x) : $container$$106_titles$$.$setTranslateX$($availSpace$$76$$.x - $title$$12_totalDim$$.x + $availSpace$$76$$.$w$ - $title$$12_totalDim$$.$w$));
  $i$$518_options$$176_valign$$1$$ = $i$$518_options$$176_valign$$1$$.vAlign != D.$JSCompiler_alias_NULL$$ ? $i$$518_options$$176_valign$$1$$.vAlign : $i$$518_options$$176_valign$$1$$.valign;
  "middle" == $i$$518_options$$176_valign$$1$$ ? $container$$106_titles$$.$setTranslateY$($availSpace$$76$$.y - $title$$12_totalDim$$.y + ($availSpace$$76$$.$h$ - $title$$12_totalDim$$.$h$) / 2) : "bottom" == $i$$518_options$$176_valign$$1$$ && $container$$106_titles$$.$setTranslateY$($availSpace$$76$$.y - $title$$12_totalDim$$.y + $availSpace$$76$$.$h$ - $title$$12_totalDim$$.$h$);
  $container$$106_titles$$ = $legend$$12$$.$_titles$;
  for($i$$518_options$$176_valign$$1$$ = 0;$i$$518_options$$176_valign$$1$$ < $container$$106_titles$$.length;$i$$518_options$$176_valign$$1$$++) {
    (0,D.$DvtLayoutUtils$align$$)($title$$12_totalDim$$, $container$$106_titles$$[$i$$518_options$$176_valign$$1$$].$halign$, $container$$106_titles$$[$i$$518_options$$176_valign$$1$$].text, $container$$106_titles$$[$i$$518_options$$176_valign$$1$$].text.$measureDimensions$().$w$)
  }
  return new D.$DvtDimension$$($title$$12_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $title$$12_totalDim$$.$h$ + 2 * $gapHeight$$2$$)
};
D.$DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($legend$$13$$, $availSpace$$77$$) {
  var $borderColor$$27_options$$177$$ = $legend$$13$$.$__getOptions$(), $backgroundColor$$15$$ = $borderColor$$27_options$$177$$.backgroundColor, $borderColor$$27_options$$177$$ = $borderColor$$27_options$$177$$.borderColor;
  if($backgroundColor$$15$$ || $borderColor$$27_options$$177$$) {
    var $rect$$32$$ = new D.$DvtRect$$($legend$$13$$.$_context$, $availSpace$$77$$.x, $availSpace$$77$$.y, $availSpace$$77$$.$w$, $availSpace$$77$$.$h$);
    $backgroundColor$$15$$ ? $rect$$32$$.$setSolidFill$($backgroundColor$$15$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$32$$);
    $borderColor$$27_options$$177$$ && ($rect$$32$$.$setSolidStroke$($borderColor$$27_options$$177$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$32$$));
    $legend$$13$$.$__getEventManager$().$associate$($rect$$32$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
    $legend$$13$$.$addChild$($rect$$32$$)
  }
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$14$$, $container$$107$$, $title$$13_titleStr$$, $availSpace$$78$$, $section$$6$$, $isInline$$) {
  var $options$$178$$ = $legend$$14$$.$__getOptions$(), $isRTL$$15$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$107$$.$_context$);
  if(!$title$$13_titleStr$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $title$$13_titleStr$$ = new D.$DvtOutputText$$($container$$107$$.$_context$, $title$$13_titleStr$$, $availSpace$$78$$.x, $availSpace$$78$$.y);
  var $titleStyle$$ = $section$$6$$ && $section$$6$$.titleStyle ? new D.$DvtCSSStyle$$($section$$6$$.titleStyle) : $options$$178$$.titleStyle;
  $title$$13_titleStr$$.$setCSSStyle$($titleStyle$$);
  return D.$DvtTextUtils$$.$fitText$($title$$13_titleStr$$, $availSpace$$78$$.$w$, window.Infinity, $container$$107$$) ? ($legend$$14$$.$__getEventManager$().$associate$($title$$13_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$13_titleStr$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$})), $isRTL$$15$$ && $title$$13_titleStr$$.$setX$($availSpace$$78$$.x + $availSpace$$78$$.$w$ - $title$$13_titleStr$$.$measureDimensions$().$w$), 
  $options$$178$$.isLayout ? $container$$107$$.removeChild($title$$13_titleStr$$) : $isInline$$ || $legend$$14$$.$_titles$.push({text:$title$$13_titleStr$$, $halign$:$section$$6$$ && $section$$6$$.titleHalign ? $section$$6$$.titleHalign : $options$$178$$.titleHalign}), $title$$13_titleStr$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($legend$$15$$, $container$$108$$, $availSpace$$79$$) {
  var $legendSections_options$$179$$ = $legend$$15$$.$__getOptions$();
  $legendSections_options$$179$$.symbolWidth == D.$JSCompiler_alias_NULL$$ && $legendSections_options$$179$$.symbolHeight == D.$JSCompiler_alias_NULL$$ ? ($legendSections_options$$179$$.symbolWidth = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $legendSections_options$$179$$.symbolHeight = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : $legendSections_options$$179$$.symbolWidth == D.$JSCompiler_alias_NULL$$ ? $legendSections_options$$179$$.symbolWidth = $legendSections_options$$179$$.symbolHeight : 
  $legendSections_options$$179$$.symbolHeight == D.$JSCompiler_alias_NULL$$ && ($legendSections_options$$179$$.symbolHeight = $legendSections_options$$179$$.symbolWidth);
  for(var $gapHeight$$3$$ = (0,D.$DvtLegendDefaults$getGapHeight$$)($legendSections_options$$179$$, $legendSections_options$$179$$.layout.sectionGapHeight), $gapWidth$$3$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($legendSections_options$$179$$, $legendSections_options$$179$$.layout.sectionGapWidth), $rowHeight$$1$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$15$$), $isHoriz$$8$$ = "vertical" != $legendSections_options$$179$$.orientation, $legendSections_options$$179$$ = $legendSections_options$$179$$.sections, 
  $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $horizAvailSpace$$ = $availSpace$$79$$.clone(), $sectionDim$$, $i$$519$$ = 0;$i$$519$$ < $legendSections_options$$179$$.length;$i$$519$$++) {
    $isHoriz$$8$$ ? ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, $container$$108$$, $legendSections_options$$179$$[$i$$519$$], $horizAvailSpace$$, $rowHeight$$1$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $availSpace$$79$$.$w$ && ($availSpace$$79$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$79$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $availSpace$$79$$.$w$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, 
    $container$$108$$, $legendSections_options$$179$$[$i$$519$$], $availSpace$$79$$, $rowHeight$$1$$) : D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$108$$, $legendSections_options$$179$$[$i$$519$$], $availSpace$$79$$, $rowHeight$$1$$, D.$JSCompiler_alias_TRUE$$), $availSpace$$79$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$79$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, $horizAvailSpace$$ = $availSpace$$79$$.clone()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + 
    $gapWidth$$3$$, (0,D.$DvtAgent$isRightToLeft$$)($legend$$15$$.$_context$) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$108$$, $legendSections_options$$179$$[$i$$519$$], $availSpace$$79$$, $rowHeight$$1$$, D.$JSCompiler_alias_FALSE$$), $availSpace$$79$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$79$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $totalDim$$1$$ = $totalDim$$1$$ ? 
    (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($legend$$16$$, $container$$109$$, $section$$7$$, $availSpace$$80_sectionDim$$1$$, $rowHeight$$2$$, $minimizeNumRows_numCols$$) {
  if($section$$7$$) {
    var $options$$180_textSpace$$ = $legend$$16$$.$__getOptions$(), $isScrollable$$2_numRows_title$$14$$ = "off" != $options$$180_textSpace$$.scrolling, $currRow_symbolGap$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$180_textSpace$$, $options$$180_textSpace$$.layout.symbolGapWidth), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapHeight$$)($options$$180_textSpace$$, $options$$180_textSpace$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$180_textSpace$$, $options$$180_textSpace$$.layout.columnGap), 
    $isRTL$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$16$$.$_context$), $sectionSpace$$ = $availSpace$$80_sectionDim$$1$$.clone();
    $isScrollable$$2_numRows_title$$14$$ && ($sectionSpace$$.$h$ = window.Infinity);
    var $currCol_titleDim$$1$$ = ($isScrollable$$2_numRows_title$$14$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$16$$, $container$$109$$, $section$$7$$.title, $sectionSpace$$, $section$$7$$)) ? $isScrollable$$2_numRows_title$$14$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$16$$ ? $sectionSpace$$.x + $sectionSpace$$.$w$ : $sectionSpace$$.x, $sectionSpace$$.y, 0, 0);
    if(!$section$$7$$.items) {
      return $currCol_titleDim$$1$$
    }
    0 < $currCol_titleDim$$1$$.$h$ && ($currCol_titleDim$$1$$.$h$ += (0,D.$DvtLegendDefaults$getGapHeight$$)($options$$180_textSpace$$, $options$$180_textSpace$$.layout.titleGap), $sectionSpace$$.y += $currCol_titleDim$$1$$.$h$, $sectionSpace$$.$h$ -= $currCol_titleDim$$1$$.$h$);
    var $colInfo_colWidth$$ = D.$DvtLegendRenderer$$.$_calcColumns$($legend$$16$$, $sectionSpace$$, $rowHeight$$2$$, $section$$7$$.items, $minimizeNumRows_numCols$$);
    $minimizeNumRows_numCols$$ = $colInfo_colWidth$$.numCols;
    var $isScrollable$$2_numRows_title$$14$$ = $colInfo_colWidth$$.numRows, $colInfo_colWidth$$ = $colInfo_colWidth$$.width, $colInitY$$ = $sectionSpace$$.y, $contentHeight$$1_numItems$$2$$ = $isScrollable$$2_numRows_title$$14$$ * ($rowHeight$$2$$ + $rowGap$$) - $rowGap$$, $contentWidth_i$$520$$ = window.Math.min($minimizeNumRows_numCols$$ * ($colInfo_colWidth$$ + $colGap$$) - $colGap$$, $sectionSpace$$.$w$);
    $availSpace$$80_sectionDim$$1$$ = new D.$DvtRectangle$$($isRTL$$16$$ ? $availSpace$$80_sectionDim$$1$$.x + $availSpace$$80_sectionDim$$1$$.$w$ - window.Math.max($contentWidth_i$$520$$, $currCol_titleDim$$1$$.$w$) : $availSpace$$80_sectionDim$$1$$.x, $availSpace$$80_sectionDim$$1$$.y, window.Math.max($contentWidth_i$$520$$, $currCol_titleDim$$1$$.$w$), $contentHeight$$1_numItems$$2$$ + $currCol_titleDim$$1$$.$h$);
    if($options$$180_textSpace$$.isLayout) {
      return $availSpace$$80_sectionDim$$1$$
    }
    if(0 == $isScrollable$$2_numRows_title$$14$$ || 0 == $minimizeNumRows_numCols$$) {
      return $currCol_titleDim$$1$$
    }
    $options$$180_textSpace$$ = $colInfo_colWidth$$ - $options$$180_textSpace$$.symbolWidth - $currRow_symbolGap$$;
    $currRow_symbolGap$$ = 0;
    $currCol_titleDim$$1$$ = 1;
    $contentHeight$$1_numItems$$2$$ = $section$$7$$.items.length;
    for($contentWidth_i$$520$$ = 0;$contentWidth_i$$520$$ < $contentHeight$$1_numItems$$2$$;$contentWidth_i$$520$$++) {
      D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$16$$, $container$$109$$, $section$$7$$.items[$contentWidth_i$$520$$], $sectionSpace$$, $options$$180_textSpace$$, $rowHeight$$2$$, $contentWidth_i$$520$$), $sectionSpace$$.y += $rowHeight$$2$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $isScrollable$$2_numRows_title$$14$$ && $currCol_titleDim$$1$$ !== $minimizeNumRows_numCols$$ && ($sectionSpace$$.y = $colInitY$$, $sectionSpace$$.$w$ -= $colInfo_colWidth$$ + $colGap$$, $isRTL$$16$$ || 
      ($sectionSpace$$.x += $colInfo_colWidth$$ + $colGap$$), $currRow_symbolGap$$ = 0, $currCol_titleDim$$1$$++)
    }
    return $availSpace$$80_sectionDim$$1$$
  }
};
D.$DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($legend$$17$$, $container$$110$$, $section$$8$$, $availSpace$$81_colWidth$$1$$, $rowHeight$$3$$) {
  if($section$$8$$) {
    var $options$$181$$ = $legend$$17$$.$__getOptions$(), $symbolWidth$$ = $options$$181$$.symbolWidth, $symbolGap$$1$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$181$$, $options$$181$$.layout.symbolGapWidth), $colGap$$1$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$181$$, $options$$181$$.layout.columnGap), $numItems$$3$$ = $section$$8$$.items.length, $isRTL$$17$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$17$$.$_context$), $sectionSpace$$1$$ = $availSpace$$81_colWidth$$1$$.clone(), 
    $title$$15$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$17$$, $container$$110$$, $section$$8$$.title, $availSpace$$81_colWidth$$1$$, $section$$8$$, D.$JSCompiler_alias_TRUE$$), $sectionDim$$2_titleDim$$2$$ = $title$$15$$ ? $title$$15$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$17$$ ? $availSpace$$81_colWidth$$1$$.x + $availSpace$$81_colWidth$$1$$.$w$ : $availSpace$$81_colWidth$$1$$.x, $availSpace$$81_colWidth$$1$$.y, 0, 0);
    if($section$$8$$.items) {
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $colGap$$1$$, $isRTL$$17$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $colGap$$1$$))
    }else {
      return $sectionDim$$2_titleDim$$2$$
    }
    var $textWidths$$ = [], $totalWidth$$5$$ = $availSpace$$81_colWidth$$1$$.$w$ - $sectionSpace$$1$$.$w$, $item$$32_textWidth$$, $i$$521$$;
    for($i$$521$$ = 0;$i$$521$$ < $numItems$$3$$;$i$$521$$++) {
      $item$$32_textWidth$$ = $section$$8$$.items[$i$$521$$], $item$$32_textWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$17$$, $item$$32_textWidth$$.text)), $totalWidth$$5$$ += $item$$32_textWidth$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths$$.push($item$$32_textWidth$$)
    }
    0 < $numItems$$3$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
    $sectionDim$$2_titleDim$$2$$ = new D.$DvtRectangle$$($isRTL$$17$$ ? $availSpace$$81_colWidth$$1$$.x + $availSpace$$81_colWidth$$1$$.$w$ - $totalWidth$$5$$ : $availSpace$$81_colWidth$$1$$.x, $availSpace$$81_colWidth$$1$$.y, $totalWidth$$5$$, window.Math.max($rowHeight$$3$$, $sectionDim$$2_titleDim$$2$$.$h$));
    if($options$$181$$.isLayout || $totalWidth$$5$$ > $availSpace$$81_colWidth$$1$$.$w$) {
      return $container$$110$$.removeChild($title$$15$$), $sectionDim$$2_titleDim$$2$$
    }
    for($i$$521$$ = 0;$i$$521$$ < $numItems$$3$$;$i$$521$$++) {
      $item$$32_textWidth$$ = $section$$8$$.items[$i$$521$$], D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$17$$, $container$$110$$, $item$$32_textWidth$$, $sectionSpace$$1$$, $textWidths$$[$i$$521$$], $rowHeight$$3$$, $i$$521$$), $availSpace$$81_colWidth$$1$$ = $textWidths$$[$i$$521$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $availSpace$$81_colWidth$$1$$ + $colGap$$1$$, $isRTL$$17$$ || ($sectionSpace$$1$$.x += $availSpace$$81_colWidth$$1$$ + $colGap$$1$$)
    }
    return $sectionDim$$2_titleDim$$2$$
  }
};
D.$DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($legend$$18_symbolWidth$$1$$, $availSpace$$82_colWidth$$2$$, $numRows$$1_rowHeight$$4$$, $items$$21$$, $minimizeNumRows$$1_numCols$$1$$) {
  for(var $fullColWidth_options$$182$$ = $legend$$18_symbolWidth$$1$$.$__getOptions$(), $textWidth$$1$$ = 0, $colGap$$2_i$$522$$ = 0;$colGap$$2_i$$522$$ < $items$$21$$.length;$colGap$$2_i$$522$$++) {
    var $rowGap$$1_tempWidth$$ = D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18_symbolWidth$$1$$, $items$$21$$[$colGap$$2_i$$522$$].text);
    $rowGap$$1_tempWidth$$ > $textWidth$$1$$ && ($textWidth$$1$$ = $rowGap$$1_tempWidth$$)
  }
  $legend$$18_symbolWidth$$1$$ = $fullColWidth_options$$182$$.symbolWidth;
  $rowGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapHeight$$)($fullColWidth_options$$182$$, $fullColWidth_options$$182$$.layout.rowGap);
  $colGap$$2_i$$522$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($fullColWidth_options$$182$$, $fullColWidth_options$$182$$.layout.columnGap);
  $fullColWidth_options$$182$$ = window.Math.ceil($legend$$18_symbolWidth$$1$$ + (0,D.$DvtLegendDefaults$getGapWidth$$)($fullColWidth_options$$182$$, $fullColWidth_options$$182$$.layout.symbolGapWidth) + $textWidth$$1$$);
  $minimizeNumRows$$1_numCols$$1$$ ? ($minimizeNumRows$$1_numCols$$1$$ = window.Math.min(window.Math.floor(($availSpace$$82_colWidth$$2$$.$w$ + $colGap$$2_i$$522$$) / ($fullColWidth_options$$182$$ + $colGap$$2_i$$522$$)), $items$$21$$.length), $numRows$$1_rowHeight$$4$$ = window.Math.ceil($items$$21$$.length / $minimizeNumRows$$1_numCols$$1$$)) : window.Infinity == $availSpace$$82_colWidth$$2$$.$h$ ? ($minimizeNumRows$$1_numCols$$1$$ = 1, $numRows$$1_rowHeight$$4$$ = $items$$21$$.length) : ($numRows$$1_rowHeight$$4$$ = 
  window.Math.min(window.Math.floor(($availSpace$$82_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$4$$ + $rowGap$$1_tempWidth$$)), $items$$21$$.length), $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$21$$.length / $numRows$$1_rowHeight$$4$$), $numRows$$1_rowHeight$$4$$ = window.Math.ceil($items$$21$$.length / $minimizeNumRows$$1_numCols$$1$$));
  $availSpace$$82_colWidth$$2$$ = window.Math.min($fullColWidth_options$$182$$, ($availSpace$$82_colWidth$$2$$.$w$ - $colGap$$2_i$$522$$ * ($minimizeNumRows$$1_numCols$$1$$ - 1)) / $minimizeNumRows$$1_numCols$$1$$);
  return $availSpace$$82_colWidth$$2$$ < $legend$$18_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$availSpace$$82_colWidth$$2$$, numCols:$minimizeNumRows$$1_numCols$$1$$, numRows:$numRows$$1_rowHeight$$4$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($legend$$19_text$$53_textHeight$$) {
  var $options$$183$$ = $legend$$19_text$$53_textHeight$$.$__getOptions$();
  $legend$$19_text$$53_textHeight$$ = new D.$DvtOutputText$$($legend$$19_text$$53_textHeight$$.$_context$, "Test");
  $legend$$19_text$$53_textHeight$$.$setCSSStyle$($options$$183$$.textStyle);
  $legend$$19_text$$53_textHeight$$.$alignMiddle$();
  $legend$$19_text$$53_textHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($legend$$19_text$$53_textHeight$$).$h$;
  return window.Math.ceil(window.Math.max($legend$$19_text$$53_textHeight$$, $options$$183$$.symbolHeight + (0,D.$DvtLegendDefaults$getGapHeight$$)($options$$183$$, $options$$183$$.layout.symbolGapHeight)))
};
D.$DvtLegendRenderer$$.$_getTextWidth$ = function $$DvtLegendRenderer$$$$_getTextWidth$$($legend$$20$$, $label$$70$$) {
  var $options$$184$$ = $legend$$20$$.$__getOptions$(), $text$$54$$ = new D.$DvtOutputText$$($legend$$20$$.$_context$, $label$$70$$);
  $text$$54$$.$setCSSStyle$($options$$184$$.textStyle);
  return $text$$54$$.$measureDimensions$().$w$
};
D.$DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($legend$$21$$, $container$$111_displayables$$inline_5316$$, $item$$34$$, $availSpace$$83_itemRect$$, $i$$inline_5321_textSpace$$1$$, $rowHeight$$5$$, $i$$523_marker$$21$$) {
  var $options$$185$$ = $legend$$21$$.$__getOptions$(), $context$$281$$ = $legend$$21$$.$_context$, $isRTL$$18$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$281$$), $symbolWidth$$2$$ = $options$$185$$.symbolWidth, $symbolGap$$3$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$185$$, $options$$185$$.layout.symbolGapWidth), $colGap$$3$$ = (0,D.$DvtLegendDefaults$getGapWidth$$)($options$$185$$, $options$$185$$.layout.columnGap), $symbolX$$ = $isRTL$$18$$ ? $availSpace$$83_itemRect$$.x + $availSpace$$83_itemRect$$.$w$ - 
  $symbolWidth$$2$$ : $availSpace$$83_itemRect$$.x, $textX$$ = $isRTL$$18$$ ? $availSpace$$83_itemRect$$.x + $availSpace$$83_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$83_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$;
  $i$$523_marker$$21$$ = D.$DvtLegendRenderer$$.$_createLegendSymbol$($legend$$21$$, $symbolX$$, $availSpace$$83_itemRect$$.y, $rowHeight$$5$$, $item$$34$$, $i$$523_marker$$21$$);
  var $label$$71$$ = $item$$34$$.text, $identObj$$inline_5320_peer$$21_text$$55$$;
  if($label$$71$$ && ($identObj$$inline_5320_peer$$21_text$$55$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$111_displayables$$inline_5316$$, $i$$inline_5321_textSpace$$1$$, $label$$71$$, $options$$185$$.textStyle))) {
    $identObj$$inline_5320_peer$$21_text$$55$$.$setX$($textX$$), $identObj$$inline_5320_peer$$21_text$$55$$.$setY$($availSpace$$83_itemRect$$.y + $rowHeight$$5$$ / 2), $isRTL$$18$$ && $identObj$$inline_5320_peer$$21_text$$55$$.$alignRight$()
  }
  $container$$111_displayables$$inline_5316$$.$addChild$($i$$523_marker$$21$$);
  $availSpace$$83_itemRect$$ = new D.$DvtRect$$($context$$281$$, $isRTL$$18$$ ? $textX$$ - $i$$inline_5321_textSpace$$1$$ - $colGap$$3$$ / 2 : $symbolX$$ - $colGap$$3$$ / 2, $availSpace$$83_itemRect$$.y, $symbolWidth$$2$$ + $symbolGap$$3$$ + $i$$inline_5321_textSpace$$1$$ + $colGap$$3$$, $rowHeight$$5$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$83_itemRect$$);
  $container$$111_displayables$$inline_5316$$.$addChild$($availSpace$$83_itemRect$$);
  $container$$111_displayables$$inline_5316$$ = [$availSpace$$83_itemRect$$, $i$$523_marker$$21$$, $identObj$$inline_5320_peer$$21_text$$55$$];
  if(!$container$$111_displayables$$inline_5316$$ || !$item$$34$$) {
    $identObj$$inline_5320_peer$$21_text$$55$$ = D.$JSCompiler_alias_NULL$$
  }else {
    $identObj$$inline_5320_peer$$21_text$$55$$ = new D.$DvtLegendObjPeer$$($legend$$21$$, $container$$111_displayables$$inline_5316$$, $item$$34$$, $identObj$$inline_5320_peer$$21_text$$55$$ != D.$JSCompiler_alias_NULL$$ ? $identObj$$inline_5320_peer$$21_text$$55$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$);
    $legend$$21$$.$_peers$.push($identObj$$inline_5320_peer$$21_text$$55$$);
    for($i$$inline_5321_textSpace$$1$$ = 0;$i$$inline_5321_textSpace$$1$$ < $container$$111_displayables$$inline_5316$$.length;$i$$inline_5321_textSpace$$1$$++) {
      $legend$$21$$.$__getEventManager$().$associate$($container$$111_displayables$$inline_5316$$[$i$$inline_5321_textSpace$$1$$], $identObj$$inline_5320_peer$$21_text$$55$$)
    }
  }
  "hidden" == $item$$34$$.categoryVisibility && $identObj$$inline_5320_peer$$21_text$$55$$ && $i$$523_marker$$21$$.$setHollow$($identObj$$inline_5320_peer$$21_text$$55$$.$getColor$());
  "none" != $legend$$21$$.$__getOptions$().hideAndShowBehavior && ($availSpace$$83_itemRect$$.$setAriaRole$("img"), $identObj$$inline_5320_peer$$21_text$$55$$.$UpdateAriaLabel$($availSpace$$83_itemRect$$))
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($container$$112$$, $textSpace$$2$$, $label$$72_text$$56$$, $style$$43$$) {
  $label$$72_text$$56$$ = new D.$DvtOutputText$$($container$$112$$.$_context$, $label$$72_text$$56$$);
  $label$$72_text$$56$$.$alignMiddle$();
  $label$$72_text$$56$$.$setCSSStyle$($style$$43$$);
  return $label$$72_text$$56$$ = D.$DvtTextUtils$$.$fitText$($label$$72_text$$56$$, $textSpace$$2$$, window.Infinity, $container$$112$$) ? $label$$72_text$$56$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($legend$$22$$, $x$$181$$, $y$$154$$, $rowHeight$$6$$, $item$$35$$, $i$$524_symbolWidth$$3$$) {
  var $legendOptions$$7_markerSize$$2$$ = $legend$$22$$.$__getOptions$();
  $item$$35$$.markerShape || ($item$$35$$.markerShape = $legendOptions$$7_markerSize$$2$$.markerShape);
  if(!$item$$35$$.color) {
    var $colorRamp_symbol$$2_symbolType$$ = $legendOptions$$7_markerSize$$2$$.colors;
    $item$$35$$.color = $colorRamp_symbol$$2_symbolType$$[$i$$524_symbolWidth$$3$$ % $colorRamp_symbol$$2_symbolType$$.length]
  }
  $item$$35$$.lineWidth || ($item$$35$$.lineWidth = $legendOptions$$7_markerSize$$2$$.lineWidth);
  $i$$524_symbolWidth$$3$$ = $legendOptions$$7_markerSize$$2$$.symbolWidth;
  $legendOptions$$7_markerSize$$2$$ = window.Math.min($i$$524_symbolWidth$$3$$, $legendOptions$$7_markerSize$$2$$.symbolHeight);
  $colorRamp_symbol$$2_symbolType$$ = $item$$35$$.type != D.$JSCompiler_alias_NULL$$ ? $item$$35$$.type : $item$$35$$.symbolType;
  "line" == $colorRamp_symbol$$2_symbolType$$ ? ($item$$35$$.lineWidth = window.Math.min($item$$35$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $colorRamp_symbol$$2_symbolType$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$22$$.$_context$, $x$$181$$, $y$$154$$, $i$$524_symbolWidth$$3$$, $rowHeight$$6$$, $item$$35$$)) : "lineWithMarker" == $colorRamp_symbol$$2_symbolType$$ ? ($item$$35$$.lineWidth = window.Math.min($item$$35$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), 
  $colorRamp_symbol$$2_symbolType$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$22$$.$_context$, $x$$181$$, $y$$154$$, $i$$524_symbolWidth$$3$$, $rowHeight$$6$$, $item$$35$$), "hidden" != $item$$35$$.categoryVisibility && $colorRamp_symbol$$2_symbolType$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$22$$, $x$$181$$, $y$$154$$, $i$$524_symbolWidth$$3$$, $rowHeight$$6$$, $legendOptions$$7_markerSize$$2$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $item$$35$$))) : $colorRamp_symbol$$2_symbolType$$ = 
  D.$DvtLegendRenderer$$.$_createMarker$($legend$$22$$, $x$$181$$, $y$$154$$, $i$$524_symbolWidth$$3$$, $rowHeight$$6$$, $legendOptions$$7_markerSize$$2$$, $item$$35$$);
  return $colorRamp_symbol$$2_symbolType$$
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($legend$$23_shape$$33$$, $markerX_x$$182$$, $markerY$$1_y$$155$$, $colWidth$$3$$, $rowHeight$$7$$, $legendMarker_markerSize$$3$$, $item$$36$$) {
  var $context$$282$$ = $legend$$23_shape$$33$$.$_context$, $legendOptions$$8$$ = $legend$$23_shape$$33$$.$__getOptions$();
  $legend$$23_shape$$33$$ = $item$$36$$.markerShape;
  var $color$$43$$ = $item$$36$$.markerColor ? $item$$36$$.markerColor : $item$$36$$.color, $pattern$$8$$ = $item$$36$$.pattern;
  $markerY$$1_y$$155$$ += ($rowHeight$$7$$ - $legendMarker_markerSize$$3$$) / 2;
  $markerX_x$$182$$ += ($colWidth$$3$$ - $legendMarker_markerSize$$3$$) / 2;
  $pattern$$8$$ ? ($legendMarker_markerSize$$3$$ = new D.$DvtMarker$$($context$$282$$, $legend$$23_shape$$33$$, $legendOptions$$8$$.skin, 0, 0, $legendMarker_markerSize$$3$$, $legendMarker_markerSize$$3$$), $legendMarker_markerSize$$3$$.$setFill$(new D.$DvtPatternFill$$($pattern$$8$$, $color$$43$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($legendMarker_markerSize$$3$$, $markerX_x$$182$$, $markerY$$1_y$$155$$)) : ($legendMarker_markerSize$$3$$ = new D.$DvtMarker$$($context$$282$$, 
  $legend$$23_shape$$33$$, $legendOptions$$8$$.skin, $markerX_x$$182$$, $markerY$$1_y$$155$$, $legendMarker_markerSize$$3$$, $legendMarker_markerSize$$3$$), $legendMarker_markerSize$$3$$.$setSolidFill$($color$$43$$));
  $item$$36$$.borderColor && $legendMarker_markerSize$$3$$.$setSolidStroke$($item$$36$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$36$$._borderWidth ? $item$$36$$._borderWidth : 1);
  "square" == $legend$$23_shape$$33$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($legendMarker_markerSize$$3$$);
  return $legendMarker_markerSize$$3$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$283_line$$19$$, $stroke$$74_x$$183$$, $lineY_y$$156$$, $colWidth$$4$$, $rowHeight$$8$$, $item$$37_style$$44$$) {
  $lineY_y$$156$$ += $rowHeight$$8$$ / 2;
  $context$$283_line$$19$$ = new D.$DvtLine$$($context$$283_line$$19$$, $stroke$$74_x$$183$$, $lineY_y$$156$$, $stroke$$74_x$$183$$ + $colWidth$$4$$, $lineY_y$$156$$);
  $stroke$$74_x$$183$$ = new D.$DvtSolidStroke$$($item$$37_style$$44$$.color, 1, $item$$37_style$$44$$.lineWidth);
  $item$$37_style$$44$$ = $item$$37_style$$44$$.lineStyle;
  "dashed" == $item$$37_style$$44$$ ? $stroke$$74_x$$183$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$37_style$$44$$), "4,2,4") : "dotted" == $item$$37_style$$44$$ && $stroke$$74_x$$183$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$37_style$$44$$), "2");
  $context$$283_line$$19$$.$setStroke$($stroke$$74_x$$183$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$283_line$$19$$);
  return $context$$283_line$$19$$
};
});