"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$29$$, $groupLabel$$2$$, $params$$59$$) {
  this.$_results$.push({group:$group$$29$$, $groupLabel$:$groupLabel$$2$$, $params$:$params$$59$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$30$$) {
  if($group$$30$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$565$$ = 0;$i$$565$$ < this.$_results$.length;$i$$565$$++) {
    if(this.$_results$[$i$$565$$].group == $group$$30$$) {
      return this.$_results$[$i$$565$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$15$$, $maxValue$$16$$, $minLabel$$3$$, $maxLabel$$3$$, $ramp$$2$$) {
  this.$_minValue$ = $minValue$$15$$;
  this.$_maxValue$ = $maxValue$$16$$;
  this.$_minLabel$ = $minLabel$$3$$ ? $minLabel$$3$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$3$$ ? $maxLabel$$3$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$2$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$128_ratio$$7_value$$118$$) {
  if((0,window.isNaN)($index$$128_ratio$$7_value$$118$$) || $index$$128_ratio$$7_value$$118$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$128_ratio$$7_value$$118$$ = 0 < this.$_range$ ? ($index$$128_ratio$$7_value$$118$$ - this.$_minValue$) / this.$_range$ : 0.5;
  $index$$128_ratio$$7_value$$118$$ = window.Math.max(window.Math.min($index$$128_ratio$$7_value$$118$$, 1), 0);
  $index$$128_ratio$$7_value$$118$$ *= this.$_ramp$.length - 1;
  return $index$$128_ratio$$7_value$$118$$ === window.Math.round($index$$128_ratio$$7_value$$118$$) ? this.$_ramp$[$index$$128_ratio$$7_value$$118$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$128_ratio$$7_value$$118$$)], this.$_ramp$[window.Math.ceil($index$$128_ratio$$7_value$$118$$)], $index$$128_ratio$$7_value$$118$$ - window.Math.floor($index$$128_ratio$$7_value$$118$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$11$$, $eventManager$$5$$, $container$$4$$, $availWidth$$2$$, $availHeight$$, $attrGroups$$, $styles$$) {
  var $colorContainer$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$ && ($attrGroups$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$11$$, $eventManager$$5$$, $container$$4$$, $availWidth$$2$$, $attrGroups$$, $styles$$) : $attrGroups$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$11$$, $container$$4$$, $availWidth$$2$$, $availHeight$$, $attrGroups$$, $styles$$)));
  return $colorContainer$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$12_maxLabel$$, $eventManager$$6$$, $container$$5_minLabelStr$$, $availWidth$$3$$, $attrGroups$$1_maxLabelStr$$, $maxLabelWidth_minLabelWidth_styles$$1$$) {
  var $isRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$12_maxLabel$$), $labelY$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$1$$ = new D.$DvtContainer$$($context$$12_maxLabel$$);
  $container$$5_minLabelStr$$.$addChild$($colorContainer$$1$$);
  $container$$5_minLabelStr$$ = $attrGroups$$1_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$ = new D.$DvtOutputText$$($context$$12_maxLabel$$, $container$$5_minLabelStr$$, 0, $labelY$$);
  $minLabel$$.$setCSSStyle$($maxLabelWidth_minLabelWidth_styles$$1$$.$labelStyle$);
  $minLabel$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($minLabel$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$12_maxLabel$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$ = $isRTL$$ ? $attrGroups$$1_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$1_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$));
  $maxLabelWidth_minLabelWidth_styles$$1$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth_minLabelWidth_styles$$1$$.borderColor);
  $colorContainer$$1$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$1_maxLabelStr$$ = $attrGroups$$1_maxLabelStr$$.$_maxLabel$;
  $context$$12_maxLabel$$ = new D.$DvtOutputText$$($context$$12_maxLabel$$, $attrGroups$$1_maxLabelStr$$, 0, $labelY$$);
  $context$$12_maxLabel$$.$setCSSStyle$($maxLabelWidth_minLabelWidth_styles$$1$$.$labelStyle$);
  $context$$12_maxLabel$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($context$$12_maxLabel$$);
  $isRTL$$ ? ($maxLabelWidth_minLabelWidth_styles$$1$$ = $context$$12_maxLabel$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth_minLabelWidth_styles$$1$$), $minLabel$$.$setX$($maxLabelWidth_minLabelWidth_styles$$1$$ + $gradientWidth_ramp$$)) : ($maxLabelWidth_minLabelWidth_styles$$1$$ = $minLabel$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth_minLabelWidth_styles$$1$$), 
  $context$$12_maxLabel$$.$setX$($maxLabelWidth_minLabelWidth_styles$$1$$ + $gradientWidth_ramp$$));
  $eventManager$$6$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$5_minLabelStr$$ + " - " + $attrGroups$$1_maxLabelStr$$));
  $colorContainer$$1$$.$getDimensions$().$w$ > $availWidth$$3$$ && ($colorContainer$$1$$.removeChild($minLabel$$), $colorContainer$$1$$.removeChild($context$$12_maxLabel$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$13_rect$$2$$, $container$$6_preferredDims$$, $actualDims_availWidth$$4$$, $availHeight$$2$$, $attrGroups$$2_mappings$$, $component_styles$$2$$) {
  var $items_legendOptions$$ = [];
  $attrGroups$$2_mappings$$ = $attrGroups$$2_mappings$$.$_results$.slice(0);
  for(var $i$$12$$ = 0;$i$$12$$ < $attrGroups$$2_mappings$$.length;$i$$12$$++) {
    var $mapping$$4$$ = $attrGroups$$2_mappings$$[$i$$12$$];
    $items_legendOptions$$.push({text:$mapping$$4$$.$groupLabel$, color:$mapping$$4$$.$params$.color, pattern:$mapping$$4$$.$params$.pattern, borderColor:$component_styles$$2$$.borderColor})
  }
  $items_legendOptions$$ = {sections:[{items:$items_legendOptions$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$component_styles$$2$$.$labelStyle$.toString()};
  $component_styles$$2$$ = (0,D.$DvtLegend$newInstance$$)($context$$13_rect$$2$$);
  $component_styles$$2$$.setId(D.$JSCompiler_alias_NULL$$);
  $container$$6_preferredDims$$.$addChild$($component_styles$$2$$);
  $container$$6_preferredDims$$ = $component_styles$$2$$.$getPreferredSize$($items_legendOptions$$, $actualDims_availWidth$$4$$, $availHeight$$2$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component_styles$$2$$.$render$($items_legendOptions$$, $actualDims_availWidth$$4$$, $container$$6_preferredDims$$.$h$);
  $actualDims_availWidth$$4$$ = $component_styles$$2$$.$getDimensions$();
  $context$$13_rect$$2$$ = new D.$DvtRect$$($context$$13_rect$$2$$, 0, 0, $actualDims_availWidth$$4$$.$w$, $container$$6_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$13_rect$$2$$);
  $component_styles$$2$$.$addChildAt$($context$$13_rect$$2$$, 0);
  return $component_styles$$2$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$158$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$158$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$319$$, $callback$$90$$, $callbackObj$$63$$, $options$$230$$) {
  this.Init($context$$319$$, $callback$$90$$, $callbackObj$$63$$, $options$$230$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$320$$, $callback$$91$$, $callbackObj$$64$$, $options$$231$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$320$$);
  this.$setOptions$($options$$231$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$320$$, $callback$$91$$, $callbackObj$$64$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$232$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$232$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$101$$, $width$$118$$) {
  this.$_data$ = $data$$101$$ ? D.$DvtJSONUtils$$.clone($data$$101$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$118$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$321_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$14_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$14_nextCrumbObj$$) {
    var $bounds$$94_peer$$22$$ = this.$_eventHandler$.$GetLogicalObject$($matrix$$14_nextCrumbObj$$);
    $bounds$$94_peer$$22$$ && $bounds$$94_peer$$22$$.$isDrillable$ && $bounds$$94_peer$$22$$.$_bDrillable$ ? ($context$$321_nextKeyboardFocusRect$$ = this.$_context$, $bounds$$94_peer$$22$$ = $matrix$$14_nextCrumbObj$$.$getDimensions$(), $matrix$$14_nextCrumbObj$$ = $matrix$$14_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$321_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$321_nextKeyboardFocusRect$$, this, $bounds$$94_peer$$22$$, $matrix$$14_nextCrumbObj$$)) : 
    this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$321_nextKeyboardFocusRect$$ && $context$$321_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-size: 11px; color: #003286;", disabledLabelStyle:"font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$) {
  var $defaults$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$);
  return $userOptions$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$, $defaults$$) : $defaults$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.clone(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$8$$, $defaultSize$$) {
  return window.Math.ceil($defaultSize$$ * $options$$8$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$, $context$$5$$, $callback$$24$$, $callbackObj$$1$$) {
  this.Init($context$$5$$, $callback$$24$$, $callbackObj$$1$$);
  this.$_breadcrumbs$ = $breadcrumbs$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$9$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$9$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, this.$GetLogicalObject$($event$$9$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$10$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, this.$GetLogicalObject$($event$$10$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$33$$) {
  if($obj$$33$$ && $obj$$33$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$33$$.$_bDrillable$) {
    var $event$$11$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$33$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$11$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$12$$) {
  var $eventConsumed$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$ = $event$$12$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_567$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_curCrumbIdx$, $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$;
    $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ = $prevCrumbIdx$$inline_567$$;
    var $bForward$$inline_9159$$ = !$event$$12$$.shiftKey;
    $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ = -1 == $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ ? $bForward$$inline_9159$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_data$.$items$.length - 2 : $bForward$$inline_9159$$ ? $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ : 
    0 == $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$ ? -1 : --$JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$9093_prevIndex$$inline_9158$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_567$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$ ? $eventConsumed$$ = D.$JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$((0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_565_curCrumbIdx_keyCode$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$)))
  }
  $eventConsumed$$ && $event$$12$$.preventDefault();
  return $eventConsumed$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$2$$, $displayable$$) {
  this.Init();
  this.$_id$ = $id$$2$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$, $width$$12$$) {
  for(var $context$$6$$ = $breadcrumbs$$1$$.$_context$, $dataItems$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$3$$ = $breadcrumbs$$1$$.$__getOptions$(), $eventManager$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$ = [], $peers$$ = [], $i$$9$$ = 0;$i$$9$$ < $dataItems$$.length;$i$$9$$++) {
    var $dataItem_peer$$ = $dataItems$$[$i$$9$$];
    if($dataItem_peer$$) {
      var $label$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$6$$, $dataItem_peer$$.text ? $dataItem_peer$$.text : "", $options$$3$$, $i$$9$$ < $dataItems$$.length - 1);
      $labels$$.push($label$$2$$);
      $dataItem_peer$$ = new D.$DvtBreadcrumbsPeer$$($dataItem_peer$$.id, $label$$2$$);
      $eventManager$$.$associate$($label$$2$$, $dataItem_peer$$);
      $peers$$.push($dataItem_peer$$);
      $i$$9$$ < $dataItems$$.length - 1 && ($label$$2$$.setCursor("pointer"), $dataItem_peer$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$))
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$;
  (0,D.$DvtAgent$isRightToLeft$$)($context$$6$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$, $width$$12$$, $labels$$, $peers$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$, $width$$12$$, $labels$$, $peers$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$7_state$$, $dvtText_text$$10$$, $cssStyle$$) {
  $dvtText_text$$10$$ = new D.$DvtOutputText$$($context$$7_state$$, $dvtText_text$$10$$, 0, 0);
  $dvtText_text$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$10$$.$setCSSStyle$($cssStyle$$);
  var $padTop$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$, "padding-top"), $padRight$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$, "padding-right"), $padBottom$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$, "padding-bottom"), $padLeft$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$, "padding-left"), $labelDims$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$7_state$$, $dvtText_text$$10$$);
  $context$$7_state$$ = new D.$DvtRect$$($context$$7_state$$, 0, 0, $labelDims$$.$w$ + $padLeft$$ + $padRight$$, $labelDims$$.$h$ + $padTop$$ + $padBottom$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$7_state$$);
  $context$$7_state$$.$setCSSStyle$($cssStyle$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$10$$, $padLeft$$, $padTop$$);
  $context$$7_state$$.$addChild$($dvtText_text$$10$$);
  return $context$$7_state$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$8_label$$3$$, $textStr$$1$$, $dwn_dwnCss_options$$4$$, $bEnabled_cssStyle$$1_ovr_ovrCss$$) {
  if($bEnabled_cssStyle$$1_ovr_ovrCss$$ && ($dwn_dwnCss_options$$4$$.$labelStyleOver$ || $dwn_dwnCss_options$$4$$.$labelStyleDown$)) {
    var $ena_enaCss$$ = new D.$DvtCSSStyle$$($dwn_dwnCss_options$$4$$.$labelStyle$);
    $bEnabled_cssStyle$$1_ovr_ovrCss$$ = new D.$DvtCSSStyle$$($dwn_dwnCss_options$$4$$.$labelStyleOver$);
    $dwn_dwnCss_options$$4$$ = new D.$DvtCSSStyle$$($dwn_dwnCss_options$$4$$.$labelStyleDown$);
    $ena_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$8_label$$3$$, $textStr$$1$$, $ena_enaCss$$);
    $bEnabled_cssStyle$$1_ovr_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$8_label$$3$$, $textStr$$1$$, $bEnabled_cssStyle$$1_ovr_ovrCss$$);
    $dwn_dwnCss_options$$4$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$8_label$$3$$, $textStr$$1$$, $dwn_dwnCss_options$$4$$);
    $context$$8_label$$3$$ = new D.$DvtButton$$($context$$8_label$$3$$, $ena_enaCss$$, $bEnabled_cssStyle$$1_ovr_ovrCss$$, $dwn_dwnCss_options$$4$$);
    $context$$8_label$$3$$.$setAriaRole$("link");
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$8_label$$3$$, "label", $textStr$$1$$)
  }else {
    $bEnabled_cssStyle$$1_ovr_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled_cssStyle$$1_ovr_ovrCss$$ ? $dwn_dwnCss_options$$4$$.$labelStyle$ : $dwn_dwnCss_options$$4$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled_cssStyle$$1_ovr_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled_cssStyle$$1_ovr_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled_cssStyle$$1_ovr_ovrCss$$, "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled_cssStyle$$1_ovr_ovrCss$$, 
    "padding-bottom") ? $context$$8_label$$3$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$8_label$$3$$, $textStr$$1$$, $bEnabled_cssStyle$$1_ovr_ovrCss$$) : ($context$$8_label$$3$$ = new D.$DvtOutputText$$($context$$8_label$$3$$, $textStr$$1$$, 0, 0), $context$$8_label$$3$$.$setCSSStyle$($bEnabled_cssStyle$$1_ovr_ovrCss$$))
  }
  return $context$$8_label$$3$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$4_text$$11$$) {
  if($label$$4_text$$11$$ instanceof D.$DvtButton$$) {
    return $label$$4_text$$11$$ = $label$$4_text$$11$$.$upState$.$getChildAt$(0), $label$$4_text$$11$$.$getTextString$()
  }
  $label$$4_text$$11$$ instanceof D.$DvtRect$$ && ($label$$4_text$$11$$ = $label$$4_text$$11$$.$getChildAt$(0));
  return $label$$4_text$$11$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$5$$, $maxWidth$$) {
  if($label$$5$$ instanceof D.$DvtButton$$) {
    var $text$$12$$ = $label$$5$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$12$$, window.Math.max($maxWidth$$ - $text$$12$$.$getTranslateX$(), 0), window.Infinity, $text$$12$$.getParent());
    $text$$12$$ = $label$$5$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$12$$, window.Math.max($maxWidth$$ - $text$$12$$.$getTranslateX$(), 0), window.Infinity, $text$$12$$.getParent());
    $text$$12$$ = $label$$5$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$12$$, window.Math.max($maxWidth$$ - $text$$12$$.$getTranslateX$(), 0), window.Infinity, $text$$12$$.getParent())
  }else {
    $label$$5$$ instanceof D.$DvtRect$$ ? ($text$$12$$ = $label$$5$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$12$$, window.Math.max($maxWidth$$ - $text$$12$$.$getTranslateX$(), 0), window.Infinity, $text$$12$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$5$$, $maxWidth$$, window.Infinity, $label$$5$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$, $container$$1$$, $availWidth$$, $labels$$1$$, $peers$$1$$) {
  for(var $options$$5$$ = $breadcrumbs$$2_labelString$$.$__getOptions$(), $eventManager$$1$$ = $breadcrumbs$$2_labelString$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$ = 0, $i$$10$$ = 0;$i$$10$$ < $labels$$1$$.length;$i$$10$$++) {
    $container$$1$$.$addChild$($labels$$1$$[$i$$10$$]);
    var $dims_separator$$ = $labels$$1$$[$i$$10$$].$getDimensions$();
    $arDims$$[$i$$10$$] = $dims_separator$$;
    $maxHeight$$ = window.Math.max($dims_separator$$.$h$, $maxHeight$$);
    $container$$1$$.removeChild($labels$$1$$[$i$$10$$])
  }
  for(var $x$$58$$ = 0, $i$$10$$ = 0;$i$$10$$ < $labels$$1$$.length;$i$$10$$++) {
    $container$$1$$.$addChild$($labels$$1$$[$i$$10$$]);
    $dims_separator$$ = $arDims$$[$i$$10$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$1$$[$i$$10$$], $x$$58$$, 0.5 * ($maxHeight$$ - $dims_separator$$.$h$));
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$1$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims_separator$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims_separator$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect_sepDims_separatorWidth$$);
      $labels$$1$$[$i$$10$$].$addChild$($rect_sepDims_separatorWidth$$);
      $i$$10$$ < $peers$$1$$.length && $eventManager$$1$$.$associate$($rect_sepDims_separatorWidth$$, $peers$$1$$[$i$$10$$])
    }
    if($x$$58$$ + $dims_separator$$.$w$ > $availWidth$$) {
      $breadcrumbs$$2_labelString$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$1$$[$i$$10$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$1$$[$i$$10$$], $availWidth$$ - $x$$58$$);
      $i$$10$$ < $peers$$1$$.length ? $peers$$1$$[$i$$10$$].$setTooltip$($breadcrumbs$$2_labelString$$) : $eventManager$$1$$.$associate$($labels$$1$$[$i$$10$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$));
      break
    }else {
      $x$$58$$ += $dims_separator$$.$w$ + $options$$5$$.$__labelGap$
    }
    if($i$$10$$ < $labels$$1$$.length - 1) {
      $dims_separator$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$);
      $container$$1$$.$addChild$($dims_separator$$);
      $rect_sepDims_separatorWidth$$ = $dims_separator$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims_separator$$, $x$$58$$, 0.5 * ($maxHeight$$ - $rect_sepDims_separatorWidth$$.$h$));
      $rect_sepDims_separatorWidth$$ = $rect_sepDims_separatorWidth$$.$w$;
      if($x$$58$$ + $rect_sepDims_separatorWidth$$ > $availWidth$$) {
        $container$$1$$.removeChild($dims_separator$$);
        break
      }
      $x$$58$$ += $rect_sepDims_separatorWidth$$ + $options$$5$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$1$$, $container$$2$$, $availWidth$$1_x$$59$$, $labels$$2$$, $peers$$2$$) {
  for(var $options$$6$$ = $breadcrumbs$$3_labelString$$1$$.$__getOptions$(), $eventManager$$2$$ = $breadcrumbs$$3_labelString$$1$$.$getEventManager$(), $i$$11$$ = 0;$i$$11$$ < $labels$$2$$.length;$i$$11$$++) {
    $container$$2$$.$addChild$($labels$$2$$[$i$$11$$]);
    var $dims$$1_separator$$1$$ = $labels$$2$$[$i$$11$$].$getDimensions$();
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$1_separatorWidth$$1$$ = new D.$DvtRect$$($container$$2$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$1_separator$$1$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$1_separator$$1$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$1_separatorWidth$$1$$);
      $labels$$2$$[$i$$11$$].$addChild$($rect$$1_separatorWidth$$1$$);
      $i$$11$$ < $peers$$2$$.length && $eventManager$$2$$.$associate$($rect$$1_separatorWidth$$1$$, $peers$$2$$[$i$$11$$])
    }
    if(0 > $availWidth$$1_x$$59$$ - $dims$$1_separator$$1$$.$w$) {
      $breadcrumbs$$3_labelString$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$2$$[$i$$11$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$2$$[$i$$11$$], $availWidth$$1_x$$59$$);
      $labels$$2$$[$i$$11$$].$setTranslateX$(0);
      $i$$11$$ < $peers$$2$$.length ? $peers$$2$$[$i$$11$$].$setTooltip$($breadcrumbs$$3_labelString$$1$$) : $eventManager$$2$$.$associate$($labels$$2$$[$i$$11$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$1$$));
      break
    }else {
      $labels$$2$$[$i$$11$$].$setTranslateX$($availWidth$$1_x$$59$$ - $dims$$1_separator$$1$$.$w$), $availWidth$$1_x$$59$$ -= $dims$$1_separator$$1$$.$w$ + $options$$6$$.$__labelGap$
    }
    if($i$$11$$ < $labels$$2$$.length - 1) {
      if($dims$$1_separator$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$1$$), $container$$2$$.$addChild$($dims$$1_separator$$1$$), $rect$$1_separatorWidth$$1$$ = $dims$$1_separator$$1$$.$getDimensions$().$w$, 0 > $availWidth$$1_x$$59$$ - $rect$$1_separatorWidth$$1$$) {
        $container$$2$$.removeChild($dims$$1_separator$$1$$);
        break
      }else {
        $dims$$1_separator$$1$$.$setTranslateX$($availWidth$$1_x$$59$$ - $rect$$1_separatorWidth$$1$$), $availWidth$$1_x$$59$$ -= $rect$$1_separatorWidth$$1$$ + $options$$6$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$6$$) {
  var $options$$7$$ = $breadcrumbs$$4_label$$6$$.$__getOptions$();
  $breadcrumbs$$4_label$$6$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$6$$.$_context$, $options$$7$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$7$$.$labelStyle$));
  return $breadcrumbs$$4_label$$6$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$6$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$6$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$313$$, $callback$$88$$, $callbackObj$$61$$, $sid$$1$$) {
  this.Init($context$$313$$, $callback$$88$$, $callbackObj$$61$$, $sid$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$314$$, $callback$$89$$, $callbackObj$$62$$, $sid$$2$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$314$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$2$$);
  this.$_sid$ = $sid$$2$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$314$$, $callback$$89$$, $callbackObj$$62$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  this.$_callback$ = $callback$$89$$;
  this.$_callbackObj$ = $callbackObj$$62$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_expandedContentPanel$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$62$$ && (this.$_styleMap$ = $callbackObj$$62$$.$getSubcomponentStyles$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  this.$_bDeferPanelVisibility$ = D.$JSCompiler_alias_FALSE$$;
  this.$_scrollEnabled$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$4$$, $upState$$14$$, $overState$$11$$, $downState$$11$$, $tooltip$$41$$, $id$$144$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$144$$] = {panel:$panel$$4$$, iconUp:$upState$$14$$, iconOver:$overState$$11$$, iconDown:$downState$$11$$, tooltip:$tooltip$$41$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$144$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$DvtPanelDrawer$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentWidth$ = function $$DvtPanelDrawer$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - (2 * this.$_contentPadding$ + 21)
};
D.$DvtPanelDrawer$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentHeight$ = function $$DvtPanelDrawer$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - (2 * this.$_contentPadding$ + 21)
};
D.$JSCompiler_StaticMethods_GetPanel$$ = function $$JSCompiler_StaticMethods_GetPanel$$$($JSCompiler_StaticMethods_GetPanel$self$$, $id$$145$$) {
  return $JSCompiler_StaticMethods_GetPanel$self$$.$_panels$[$id$$145$$].panel
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$149$$, $bImmediate$$15$$, $onEnd$$4$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$149$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$149$$, $bImmediate$$15$$, $onEnd$$4$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$1$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$1$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$1$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$9_destX$$inline_5512$$, $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, $onEnd$$5$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$1$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$9_destX$$inline_5512$$;
    if($oldDisclosed$$1$$ != $bDisclosed$$9_destX$$inline_5512$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$9_destX$$inline_5512$$) {
        var $panel$$inline_5511$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $panel$$inline_5511$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_5511$$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$9_destX$$inline_5512$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$9_destX$$inline_5512$$ = -$bDisclosed$$9_destX$$inline_5512$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$9_destX$$inline_5512$$), $panel$$inline_5511$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_5511$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $onEnd$$5$$ && $onEnd$$5$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$ = new D.$DvtAnimator$$(this.$_context$, 0.25), $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$9_destX$$inline_5512$$), $panel$$inline_5511$$ && this.$_bDeferPanelVisibility$ ? 
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, function() {
            $panel$$inline_5511$$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
            $onEnd$$5$$ && $onEnd$$5$$()
          }) : $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, $onEnd$$5$$), $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$) {
            var $thisRef$$inline_5514$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, function() {
              $thisRef$$inline_5514$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$5$$ && $onEnd$$5$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
          $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, this.$ChangeTabsState$, this);
          $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, $onEnd$$5$$);
          var $thisRef$$inline_5520$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$, function() {
            $thisRef$$inline_5520$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_5513_anim$$inline_5519_bImmediate$$16$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$, "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$_context$, "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_5523$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_5523$$ = 0);
    var $currY$$inline_5524$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_5525$$ = 0;$i$$inline_5525$$ < this.$_panelOrder$.length;$i$$inline_5525$$++) {
        var $panelId$$inline_5526_tab$$inline_5527$$ = this.$_panelOrder$[$i$$inline_5525$$], $panelId$$inline_5526_tab$$inline_5527$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_5526_tab$$inline_5527$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_5526_tab$$inline_5527$$, $currX$$inline_5523$$, $currY$$inline_5524$$);
        $currY$$inline_5524$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_5524$$ = -57;
        for($i$$inline_5525$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_5525$$;$i$$inline_5525$$--) {
          $panelId$$inline_5526_tab$$inline_5527$$ = this.$_panelOrder$[$i$$inline_5525$$], $panelId$$inline_5526_tab$$inline_5527$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_5526_tab$$inline_5527$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_5526_tab$$inline_5527$$, $currX$$inline_5523$$, $currY$$inline_5524$$), $currY$$inline_5524$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$) {
  var $closedPath_downState$$12$$, $arPoints$$inline_5530_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_5530_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_5530_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$12$$ = $arPoints$$inline_5530_tab$$1$$;
  $arPoints$$inline_5530_tab$$1$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$, "pdcp_tab_" + $panelId$$3$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_5530_tab$$1$$);
  $arPoints$$inline_5530_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_5530_tab$$1$$, 0);
  $arPoints$$inline_5530_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_5530_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$], $icon$$30_upState$$15$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$30_upState$$15$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$30_upState$$15$$.$addChild$($panelObj$$.iconUp);
  var $overState$$12$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$12$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$12$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$12$$.$addChild$($panelObj$$.iconDown);
  $icon$$30_upState$$15$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $icon$$30_upState$$15$$, $overState$$12$$, $closedPath_downState$$12$$);
  $icon$$30_upState$$15$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $icon$$30_upState$$15$$.setCursor("pointer");
  $panelObj$$.icon = $icon$$30_upState$$15$$;
  $arPoints$$inline_5530_tab$$1$$.$addChild$($icon$$30_upState$$15$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$] = $arPoints$$inline_5530_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_5530_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$3$$;
    var $closedPath_downState$$12$$ = function $$closedPath_downState$$12$$$() {
      var $panelId$$3$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_context$.$getTooltipManager$();
      $panelId$$3$$ && $panelId$$3$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$3$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$12$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$, D.$JSCompiler_alias_FALSE$$)) : ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, 
    D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$12$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$))
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip
  }});
  $JSCompiler_StaticMethods_RenderTab$self$$.$addAccessibilityAttributes$($arPoints$$inline_5530_tab$$1$$, $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip);
  return $arPoints$$inline_5530_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $bImmediate$$17_oldPanel$$1$$, $onEnd$$6$$) {
  var $anim$$27$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$17_oldPanel$$1$$ || ($anim$$27$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$_context$, 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$17_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$)) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$17_oldPanel$$1$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $anim$$27$$);
  $anim$$27$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$6$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$27$$, $onEnd$$6$$), $anim$$27$$.play()) : $onEnd$$6$$ && $onEnd$$6$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$150$$, $anim$$30$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtScrollableContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ == 
  window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 10, "pdcp_expandedContentPanel" + $JSCompiler_StaticMethods_DisplayPanel$self$$.$_sid$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_scrollEnabled$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_vertScrollEnabled$ = 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setSkinName$("alta"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_styleMap$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_styleMap$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateX$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateY$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $panel$$6$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$150$$);
  if($panel$$6$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($panel$$6$$);
    $anim$$30$$ && $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bDeferPanelVisibility$ && ($panel$$6$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)($anim$$30$$, function() {
      $panel$$6$$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }));
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ecw$$inline_5550_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$);
      $ecw$$inline_5550_oldPanel$$2$$ && $ecw$$inline_5550_oldPanel$$2$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $panel$$6$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $ecw$$inline_5550_oldPanel$$2$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_5551$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_5552$$ = 0, $dims$$inline_5554_yy$$inline_5553$$ = 0;
  (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$150$$) && ($dims$$inline_5554_yy$$inline_5553$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$getDimensionsWithStroke$(), $ecw$$inline_5550_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_5554_yy$$inline_5553$$.$w$), $ech$$inline_5551$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, 
  $dims$$inline_5554_yy$$inline_5553$$.$h$), $xx$$inline_5552$$ = $dims$$inline_5554_yy$$inline_5553$$.x, $dims$$inline_5554_yy$$inline_5553$$ = $dims$$inline_5554_yy$$inline_5553$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$150$$, $anim$$30$$, $ecw$$inline_5550_oldPanel$$2$$, $ech$$inline_5551$$, $xx$$inline_5552$$, $dims$$inline_5554_yy$$inline_5553$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$417_yy$$27$$) {
  var $anim$$31$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  this.$_expandedContentPanel$.refresh();
  var $ecw_resizeWidth$$ = $event$$417_yy$$27$$.getWidth(), $ech_resizeHeight$$ = $event$$417_yy$$27$$.getHeight(), $sbPadding_xx$$26$$ = this.$_expandedContentPanel$.$_sbWidth$ + 10;
  this.$_expandedContentPanel$.$_hsb$ != D.$JSCompiler_alias_NULL$$ && ($ech_resizeHeight$$ += $sbPadding_xx$$26$$);
  this.$_expandedContentPanel$.$_vsb$ != D.$JSCompiler_alias_NULL$$ && ($ecw_resizeWidth$$ += $sbPadding_xx$$26$$);
  $ecw_resizeWidth$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$);
  $ech_resizeHeight$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$);
  $sbPadding_xx$$26$$ = $event$$417_yy$$27$$.$getX$() ? $event$$417_yy$$27$$.$getX$() : 0;
  $event$$417_yy$$27$$ = $event$$417_yy$$27$$.$getY$() ? $event$$417_yy$$27$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$31$$, $ecw_resizeWidth$$, $ech_resizeHeight$$, $sbPadding_xx$$26$$, $event$$417_yy$$27$$);
  $anim$$31$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$152$$, $anim$$33$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $expandedContentWidth_tab$$2_xx$$28$$, $yy$$29$$) {
  var $panel$$8$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$152$$);
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $panel$$8$$, $panel$$8$$.$getTranslateX$, $panel$$8$$.$setTranslateX$, -$expandedContentWidth_tab$$2_xx$$28$$) : $panel$$8$$.$setTranslateX$(-$expandedContentWidth_tab$$2_xx$$28$$);
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $panel$$8$$, $panel$$8$$.$getTranslateY$, $panel$$8$$.$setTranslateY$, -$yy$$29$$) : $panel$$8$$.$setTranslateY$(-$yy$$29$$);
  var $clipRect$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_tab$$2_xx$$28$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$33$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_tab$$2_xx$$28$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_bDeferPanelVisibility$ ? (0,D.$DvtPlayable$appendOnEnd$$)($anim$$33$$, function() {
    $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$)
  }) : (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, 
  $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_tab$$2_xx$$28$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$));
  $expandedContentWidth_tab$$2_xx$$28$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$152$$];
  var $borderPath$$;
  $edgeX_id$$152$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$152$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $expandedContentWidth_tab$$2_xx$$28$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$28$$.$getTranslateY$(), "M", 0, $expandedContentWidth_tab$$2_xx$$28$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 
  1]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$152$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$152$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : 
  "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($expandedContentWidth_tab$$2_xx$$28$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$28$$.$getTranslateY$() + 42, "M", 0, $expandedContentWidth_tab$$2_xx$$28$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $edgeX_id$$152$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$152$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$152$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$33$$) {
  if(this.$_expandedContentPanel$ && $rect$$33$$) {
    var $clipPath$$7$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$7$$, $rect$$33$$.x, $rect$$33$$.y, $rect$$33$$.$w$, $rect$$33$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$7$$)
  }
  this.$_contentClipPath$ = $rect$$33$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$79$$ = $preferredWidth$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$79$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$79$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$79$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$79$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$79$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$65$$ = $preferredHeight$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$65$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$65$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$65$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$65$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$65$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$27$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$49$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().clone();
    $fill$$49$$.$setAlpha$($alpha$$27$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$49$$)
  }
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$3$$ && ($fill$$49$$ = $tab$$3$$.$getFill$().clone(), $fill$$49$$.$setAlpha$($alpha$$27$$), $tab$$3$$.$setFill$($fill$$49$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$78$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().clone();
    $stroke$$78$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$78$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$78$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().clone(), $stroke$$78$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$78$$));
  for(var $panelId$$7$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$7$$];
    $tab$$4$$ && ($stroke$$78$$ = $tab$$4$$.$getStroke$().clone(), $stroke$$78$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$78$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$31$$ = this.$_panels$[$panelId$$8$$].icon;
    $icon$$31$$ && $icon$$31$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $icon$$32$$ = this.$_panels$[$panelId$$9$$].icon;
    $icon$$32$$ && $icon$$32$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$10$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$10$$];
    $tab$$5$$ && ($panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$33$$ = this.$_panels$[$panelId$$10$$].icon;
    $icon$$33$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$33$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$($obj$$169$$, $desc$$15$$) {
  $obj$$169$$ && $desc$$15$$ && ($obj$$169$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($obj$$169$$, "label", $desc$$15$$))
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$98$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$98$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$98$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$27_targetCoordinateSpace$$18$$) {
  $dim$$27_targetCoordinateSpace$$18$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$27_targetCoordinateSpace$$18$$);
  $dim$$27_targetCoordinateSpace$$18$$.$w$ /= 1.25;
  return $dim$$27_targetCoordinateSpace$$18$$
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$4$$, $callback$$23$$, $callbackObj$$) {
  this.Init($context$$4$$, $callback$$23$$, $callbackObj$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$4$$) {
  var $obj$$28$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$4$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$4$$);
  $obj$$28$$ && ($obj$$28$$.$HandleClick$ && $obj$$28$$.$HandleClick$($event$$4$$), $event$$4$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$5$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$5$$);
  var $obj$$29$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$5$$));
  $obj$$29$$ && ($obj$$29$$.$isDoubleClickable$ && ($obj$$29$$.$isDoubleClickable$() && $obj$$29$$.$HandleDblClick$) && $obj$$29$$.$HandleDblClick$($event$$5$$), $event$$5$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$6$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$6$$);
  var $obj$$30$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$6$$));
  $obj$$30$$ && $obj$$30$$.$HandleRollOver$ && $obj$$30$$.$HandleRollOver$($event$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$7$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$7$$);
  var $obj$$31$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$7$$));
  $obj$$31$$ && $obj$$31$$.$HandleRollOut$ && $obj$$31$$.$HandleRollOut$($event$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$8$$) {
  var $obj$$32$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$8$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$8$$);
  $obj$$32$$ && ($obj$$32$$.$HandleClick$ && $obj$$32$$.$HandleClick$($event$$8$$), $event$$8$$.stopPropagation())
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$315$$, $id$$153$$, $w$$28$$, $h$$20$$, $eventManager$$19$$, $images$$18$$, $styleMap$$41$$) {
  this.Init($context$$315$$, $id$$153$$, $w$$28$$, $h$$20$$, $eventManager$$19$$, $images$$18$$, $styleMap$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$316$$, $id$$154$$, $w$$29$$, $h$$21$$, $eventManager$$20$$, $images$$19$$, $styleMap$$42$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$316$$, D.$JSCompiler_alias_NULL$$, $id$$154$$);
  this.$_images$ = $images$$19$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$42$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$29$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$21$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$20$$;
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this)
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$16$$, $sectionContent$$1$$, $isActive$$3$$, $id$$155$$) {
  $id$$155$$ || ($id$$155$$ = "accordion_" + $accordionSection_title$$16$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$16$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$_context$, $sectionContent$$1$$, $accordionSection_title$$16$$, $isActive$$3$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$155$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$155$$] = $accordionSection_title$$16$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$155$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$16$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$556$$ = 0;$i$$556$$ < this.$_sectionOrder$.length;$i$$556$$++) {
    var $section$$9$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$556$$);
    $section$$9$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$9$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$9$$.$_isActive$ && $section$$9$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.$Update$ = function $$DvtAccordion$$$$$Update$$($activeSection_activeSectionId$$1$$) {
  $activeSection_activeSectionId$$1$$ = this.$_sections$[$activeSection_activeSectionId$$1$$];
  var $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = $activeSection_activeSectionId$$1$$.$_isActive$;
  if($JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$) {
    if($JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$) {
      if($activeSection_activeSectionId$$1$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_5566$$ = 0, $i$$inline_5567$$ = 0;$i$$inline_5567$$ < this.$_sectionOrder$.length;$i$$inline_5567$$++) {
            $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_5567$$), $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$.$_isActive$ && $expandedSectionCounter$$inline_5566$$++
          }
          $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = 1 < $expandedSectionCounter$$inline_5566$$
        }
      }else {
        $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ && $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ = 0;$JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$332_currActiveState_i$$557_section$$inline_5565$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$1$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$558$$ = 0;$i$$558$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$558$$++) {
      var $secWidth_section$$10$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$558$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$ = $secWidth_section$$10$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_titleDim$) {
        var $dim$$inline_5571_text$$inline_5570$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_title$);
        $dim$$inline_5571_text$$inline_5570$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_titleStyle$);
        if($dim$$inline_5571_text$$inline_5570$$ = $dim$$inline_5571_text$$inline_5570$$.$measureDimensions$()) {
          $dim$$inline_5571_text$$inline_5570$$.$w$ = $dim$$inline_5571_text$$inline_5570$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_titleDim$ = $dim$$inline_5571_text$$inline_5570$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_5569_dim$$28$$.$w$);
      $secWidth_section$$10$$ = $secWidth_section$$10$$.$getContentDimensions$().$w$ + 2 * $paddingX$$1$$;
      $secWidth_section$$10$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$10$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$126$$) {
  return 0 <= $index$$126$$ && $index$$126$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$126$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$9_dims$$42$$ = 0, $i$$561$$ = 0;$i$$561$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$561$$++) {
    var $section$$13$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$561$$);
    $section$$13$$.$setTranslateY$($currY$$9_dims$$42$$);
    $section$$13$$.$_isActive$ ? ($section$$13$$.expand(), $currY$$9_dims$$42$$ += $section$$13$$.$getDimensionsWithStroke$().$h$, $currY$$9_dims$$42$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$13$$.collapse(), $currY$$9_dims$$42$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$9_dims$$42$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$9_dims$$42$$.$w$, $currY$$9_dims$$42$$.$h$, 0, 0))
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$9$$, $section$$, $title$$7$$, $isActive$$, $isCollapsible$$, $parent$$2$$, $eventManager$$3$$, $id$$3$$, $images$$, $styleMap$$) {
  this.Init($context$$9$$, $section$$, $title$$7$$, $isActive$$, $isCollapsible$$, $parent$$2$$, $eventManager$$3$$, $id$$3$$, $images$$, $styleMap$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$10$$, $section$$1$$, $title$$8$$, $isActive$$1$$, $isCollapsible$$1$$, $parent$$3$$, $eventManager$$4$$, $id$$4$$, $images$$1$$, $styleMap$$1$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$10$$, D.$JSCompiler_alias_NULL$$, $id$$4$$);
  this.$_parent$ = $parent$$3$$;
  this.$_images$ = $images$$1$$;
  this.$_title$ = $title$$8$$;
  this.$_id$ = $id$$4$$;
  this.$_sectionContent$ = $section$$1$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$1$$) ? $isActive$$1$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$4$$;
  this.$_styleMap$ = $styleMap$$1$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_580_proxy$$inline_579_width$$13$$) {
  var $height$$inline_574_text$$inline_581$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    var $ena$$inline_575$$, $ovr$$inline_576$$, $dwn$$inline_577$$;
    this.$_images$.$getAttr$ ? ($ena$$inline_575$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $ovr$$inline_576$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $dwn$$inline_577$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$)) : ($ena$$inline_575$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $ovr$$inline_576$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $dwn$$inline_577$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, $ena$$inline_575$$, $ovr$$inline_576$$, $dwn$$inline_577$$);
    this.$_images$.$getAttr$ ? ($ena$$inline_575$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $ovr$$inline_576$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $dwn$$inline_577$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$)) : ($ena$$inline_575$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $ovr$$inline_576$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $dwn$$inline_577$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, $ena$$inline_575$$, $ovr$$inline_576$$, $dwn$$inline_577$$);
    var $thisRef$$inline_578$$ = this;
    $base$$inline_580_proxy$$inline_579_width$$13$$ = {$HandleClick$:function $$base$$inline_580_proxy$$inline_579_width$$13$$$$HandleClick$$() {
      $thisRef$$inline_578$$.$_parent$.$Update$($thisRef$$inline_578$$.getId())
    }};
    this.$_eventManager$.$associate$(this.$_expandedBtn$, $base$$inline_580_proxy$$inline_579_width$$13$$);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, $base$$inline_580_proxy$$inline_579_width$$13$$)
  }else {
    $base$$inline_580_proxy$$inline_579_width$$13$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_580_proxy$$inline_579_width$$13$$, $height$$inline_574_text$$inline_581$$), $height$$inline_574_text$$inline_581$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_580_proxy$$inline_579_width$$13$$), this.$_header$.$addChild$($height$$inline_574_text$$inline_581$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$, $base$$2_state$$1$$, $image$$2_uri$$11$$, $label$$7_text$$15$$, $ww$$1$$, $hh$$1$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_context$);
  $base$$2_state$$1$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$, $base$$2_state$$1$$, $ww$$1$$, $hh$$1$$);
  $buttonState$$.$addChild$($base$$2_state$$1$$);
  ($image$$2_uri$$11$$ = $image$$2_uri$$11$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_context$, $image$$2_uri$$11$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$.$addChild$($image$$2_uri$$11$$);
  $label$$7_text$$15$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$, $label$$7_text$$15$$, $ww$$1$$ - $imageWidth$$ - 0, $hh$$1$$, $buttonState$$);
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$_context$) ? ($JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$ = $label$$7_text$$15$$.$measureDimensions$(), $label$$7_text$$15$$.$setTranslateX$($ww$$1$$ - $JSCompiler_StaticMethods__createHeaderState$self_dim$$4$$.$w$ - $imageWidth$$), $image$$2_uri$$11$$ && $image$$2_uri$$11$$.$setTranslateX$($ww$$1$$ - $imageWidth$$)) : $label$$7_text$$15$$.$setTranslateX$($imageWidth$$);
  return $buttonState$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$2_label$$8$$, $ww$$2$$, $hh$$2$$, $container$$3$$) {
  var $text$$16$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$2_label$$8$$) {
    $text$$16$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$2_label$$8$$);
    $text$$16$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$16$$, $ww$$2$$, $hh$$2$$, $container$$3$$);
    $dims$$2_label$$8$$ = $text$$16$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$2_label$$8$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$2_label$$8$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$2_label$$8$$
    }
    $text$$16$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$2_label$$8$$.$h$) / 2)
  }
  return $text$$16$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$3$$, $state$$3$$, $ww$$3$$, $hh$$3$$) {
  var $style$$2$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$3$$) {
    case 1:
      $style$$2$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$2$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$2$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$2$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$_context$, 0, 0, $ww$$3$$, $hh$$3$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$2$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$2$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$3$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$2_gradObj_style$$3$$) {
  var $arColors_color$$2$$ = $angle$$2_gradObj_style$$3$$.$getStyle$("background-color");
  $angle$$2_gradObj_style$$3$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$2_gradObj_style$$3$$);
  var $arAlphas_fill$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$2_gradObj_style$$3$$ && $angle$$2_gradObj_style$$3$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors_color$$2$$ = $angle$$2_gradObj_style$$3$$.$_arColors$, $arAlphas_fill$$ = $angle$$2_gradObj_style$$3$$.$_arAlphas$, $arStops$$ = $angle$$2_gradObj_style$$3$$.$_arRatios$;
    $angle$$2_gradObj_style$$3$$ = $angle$$2_gradObj_style$$3$$.$getAngle$();
    $arAlphas_fill$$ = new D.$DvtLinearGradientFill$$($angle$$2_gradObj_style$$3$$, $arColors_color$$2$$, $arAlphas_fill$$, $arStops$$)
  }else {
    $arColors_color$$2$$ && ($arAlphas_fill$$ = new D.$DvtSolidFill$$($arColors_color$$2$$, 1))
  }
  return $arAlphas_fill$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$3_style$$4$$) {
  $color$$3_style$$4$$ = $color$$3_style$$4$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$3_style$$4$$, 1, 1)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$317$$, $eventManager$$21$$, $labels$$20$$, $buttonStyles$$5$$, $id$$156$$, $isAltaSkin$$4$$) {
  this.Init($context$$317$$, $eventManager$$21$$, $labels$$20$$, $buttonStyles$$5$$, $id$$156$$, $isAltaSkin$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$318$$, $eventManager$$22$$, $labels$$21$$, $buttonStyles$$6$$, $id$$157$$, $isAltaSkin$$5$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$318$$, D.$JSCompiler_alias_NULL$$, $id$$157$$);
  this.$_tooltipManager$ = $context$$318$$.$getTooltipManager$();
  this.$_labels$ = $labels$$21$$;
  this.$_buttonStyles$ = $buttonStyles$$6$$;
  this.$_count$ = $labels$$21$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$_isAltaSkin$ = $isAltaSkin$$5$$;
  this.$RenderSelf$($eventManager$$22$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$127$$) {
  0 <= $index$$127$$ && $index$$127$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$127$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$420_selIndex$$1$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$420_selIndex$$1$$);
  for(var $event$$inline_5577_i$$562$$ = 0;$event$$inline_5577_i$$562$$ < this.$_buttons$.length;$event$$inline_5577_i$$562$$++) {
    var $target$$68$$ = $event$$420_selIndex$$1$$.target;
    if(this.$_buttons$[$event$$inline_5577_i$$562$$] === $target$$68$$ || this.$_buttons$[$event$$inline_5577_i$$562$$] === $target$$68$$.getParent()) {
      $event$$420_selIndex$$1$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$420_selIndex$$1$$, $event$$inline_5577_i$$562$$);
      $event$$420_selIndex$$1$$ != $event$$inline_5577_i$$562$$ && ($event$$inline_5577_i$$562$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_5577_i$$562$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$64_oldIndex$$2$$, $newIndex$$5$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$5$$;
  if($button$$64_oldIndex$$2$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$64_oldIndex$$2$$]) {
    $button$$64_oldIndex$$2$$.$overState$ && $button$$64_oldIndex$$2$$.$overState$.setCursor("pointer"), $button$$64_oldIndex$$2$$.$downState$ && $button$$64_oldIndex$$2$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$64_oldIndex$$2$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$64_oldIndex$$2$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$5$$]) {
    $button$$64_oldIndex$$2$$.$overState$ && $button$$64_oldIndex$$2$$.$overState$.setCursor("default"), $button$$64_oldIndex$$2$$.$downState$ && $button$$64_oldIndex$$2$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$64_oldIndex$$2$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$23$$) {
  var $bBiDi$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $buttonSize_buttonStyle$$inline_5580$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_5580$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_5580$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_5580$$ = this.$_buttonSize$;
  for(var $i$$563$$ = 0;$i$$563$$ < this.$_count$;$i$$563$$++) {
    var $button$$65$$, $button$$inline_5583_j$$90$$ = $button$$65$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_5580$$, $i$$563$$ == this.$_selectedIndex$, this.$_labels$[$i$$563$$]);
    $button$$inline_5583_j$$90$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    (0,D.$DvtAgent$isTouchDevice$$)() || $button$$inline_5583_j$$90$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_5583_j$$90$$ = $i$$563$$;
    $bBiDi$$2$$ && ($button$$inline_5583_j$$90$$ = this.$_count$ - 1 - $i$$563$$);
    $eventManager$$23$$ && $eventManager$$23$$.$associate$($button$$65$$, $button$$65$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$65$$, $button$$inline_5583_j$$90$$ * ($buttonSize_buttonStyle$$inline_5580$$ + 3), this.$_isAltaSkin$ ? 0 : 1);
    this.$addChild$($button$$65$$);
    this.$_buttons$[$i$$563$$] = $button$$65$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$24$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$_context$, $url$$24$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$, $buttonSize$$3$$, $state$$73$$, $bSelected$$4$$) {
  var $bdColor$$inline_5589_style$$46_url$$25$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$[$state$$73$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_5589_style$$46_url$$25$$ = $bdColor$$inline_5589_style$$46_url$$25$$ ? $bdColor$$inline_5589_style$$46_url$$25$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$CreateButtonState$($bdColor$$inline_5589_style$$46_url$$25$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_5588$$, $bgColor$$inline_5590$$, $offset$$inline_5591$$;
    2 == $state$$73$$ ? ($offset$$inline_5591$$ = 0, $bgColor$$inline_5590$$ = "#61bde3", $bdColor$$inline_5589_style$$46_url$$25$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$ && ($buttonStyle$$inline_5588$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$[2])) : ($offset$$inline_5591$$ = 1, $bgColor$$inline_5590$$ = "#c0cbd5", $bdColor$$inline_5589_style$$46_url$$25$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$ && ($buttonStyle$$inline_5588$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_5588$$ && ($buttonStyle$$inline_5588$$.$getStyle$("border-color") && ($bdColor$$inline_5589_style$$46_url$$25$$ = $buttonStyle$$inline_5588$$.$getStyle$("border-color")), $buttonStyle$$inline_5588$$.$getStyle$("background-color") && ($bgColor$$inline_5590$$ = $buttonStyle$$inline_5588$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$_context$, $offset$$inline_5591$$, $offset$$inline_5591$$, $buttonSize$$3$$ - 2 * $offset$$inline_5591$$, $buttonSize$$3$$ - 2 * $offset$$inline_5591$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$setSolidFill$($bgColor$$inline_5590$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.$setSolidStroke$($bdColor$$inline_5589_style$$46_url$$25$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$.setCursor(0 == $state$$73$$ || $bSelected$$4$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$415_shape$$45_shape$$inline_5592$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$68_buttonSize$$4$$, $bSelected$$5$$, $tooltip$$42$$) {
  $button$$68_buttonSize$$4$$ = new D.$DvtButton$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$68_buttonSize$$4$$, 0, $bSelected$$5$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$68_buttonSize$$4$$, 1, $bSelected$$5$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$68_buttonSize$$4$$, 2, $bSelected$$5$$), D.$JSCompiler_alias_NULL$$);
  $button$$68_buttonSize$$4$$.$setTooltip$($tooltip$$42$$);
  $button$$68_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$5$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$68_buttonSize$$4$$, $bSelected$$5$$);
  return $button$$68_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$125$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$125$$
};
(0,D.$goog$exportSymbol$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$322$$, $id$$159$$, $x$$198$$, $y$$170$$, $ww$$80$$, $hh$$66$$) {
  this.Init($context$$322$$, $id$$159$$, $x$$198$$, $y$$170$$, $ww$$80$$, $hh$$66$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$323$$, $id$$160$$, $x$$199$$, $y$$171$$, $ww$$81$$, $hh$$67$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$323$$, D.$JSCompiler_alias_NULL$$, $id$$160$$);
  this.$_x$ = $x$$199$$;
  this.$_y$ = $y$$171$$;
  this.$_ww$ = $ww$$81$$;
  this.$_hh$ = $hh$$67$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$4_clipPath$$8$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$4_clipPath$$8$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$4_clipPath$$8$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$4_clipPath$$8$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$4_clipPath$$8$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$29_vx$$, $animator$$120$$) {
  var $topLeft$$5_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$29_vx$$.x, $dim$$29_vx$$.y, $animator$$120$$), $bottomRight$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$29_vx$$.x + $dim$$29_vx$$.$w$, $dim$$29_vx$$.y + $dim$$29_vx$$.$h$, $animator$$120$$);
  $dim$$29_vx$$ = $topLeft$$5_vh$$.x;
  var $vy$$ = $topLeft$$5_vh$$.y, $vw$$ = $bottomRight$$5$$.x - $topLeft$$5_vh$$.x, $topLeft$$5_vh$$ = $bottomRight$$5$$.y - $topLeft$$5_vh$$.y;
  $animator$$120$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$120$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$29_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$120$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$120$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$120$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft$$5_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$29_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft$$5_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$) {
  var $topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$6$$.x, $topLeft$$6$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.x - $topLeft$$6$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.y - $topLeft$$6$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$58_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$29$$ = this.$_getRelativePosition$($evt$$58_viewportEvent$$);
    $evt$$58_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$29$$), $evt$$58_viewportEvent$$);
    this.$FireListener$($evt$$58_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$59_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$30$$ = this.$_getRelativePosition$($evt$$59_viewportEvent$$1$$);
    $evt$$59_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$30$$), $evt$$59_viewportEvent$$1$$);
    this.$FireListener$($evt$$59_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$62_touches$$7$$) {
  var $pageX$$11$$, $pageY$$11$$;
  (0,D.$DvtAgent$isTouchDevice$$)() ? ($evt$$62_touches$$7$$ = $evt$$62_touches$$7$$.touches, 0 < $evt$$62_touches$$7$$.length && ($pageX$$11$$ = $evt$$62_touches$$7$$[0].pageX, $pageY$$11$$ = $evt$$62_touches$$7$$[0].pageY)) : ($pageX$$11$$ = $evt$$62_touches$$7$$.pageX, $pageY$$11$$ = $evt$$62_touches$$7$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$11$$, $pageY$$11$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$21$$ = 0, $ty$$21$$ = 0, $sx$$6$$ = 1, $sy$$6$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$21$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$21$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$6$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$6$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$21$$) / $sx$$6$$, ($vy$$1$$ - $ty$$21$$) / $sy$$6$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$24$$, $cy$$24$$, $animator$$121$$) {
  var $tx$$22$$ = 0, $ty$$22$$ = 0, $sx$$7$$ = 1, $sy$$7$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$22$$ = $animator$$121$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$121$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$22$$ = 
  $animator$$121$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$121$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$7$$ = $animator$$121$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$121$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$7$$ = $animator$$121$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$121$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$24$$ * $sx$$7$$ + $tx$$22$$, $cy$$24$$ * $sy$$7$$ + $ty$$22$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$7$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$7$$] ? this.$_skinStyle$[$attr$$7$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$55$$) {
  var $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$7_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$55$$.x - $overviewStart_topLeft$$7$$.x - $bottomRight$$7_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$55$$.y - $overviewStart_topLeft$$7$$.y - $bottomRight$$7_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$7_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$7_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$7_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$7$$.x, $overviewStart_topLeft$$7$$.y, $bottomRight$$7_viewportDims$$.x - $overviewStart_topLeft$$7$$.x, $bottomRight$$7_viewportDims$$.y - $overviewStart_topLeft$$7$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$34$$) {
  this.$_viewport$.$setX$($rect$$34$$.x);
  this.$_viewport$.$setY$($rect$$34$$.y);
  this.$_viewport$.$setWidth$($rect$$34$$.$w$);
  this.$_viewport$.$setHeight$($rect$$34$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$19$$) {
  var $bounds$$95$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$19$$ || $targetCoordinateSpace$$19$$ === this ? $bounds$$95$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$95$$, $targetCoordinateSpace$$19$$)
};
D.DvtOverviewWindow.prototype.$getDimensionsWithStroke$ = function $DvtOverviewWindow$$$getDimensionsWithStroke$$($targetCoordinateSpace$$20$$) {
  return this.$getDimensions$($targetCoordinateSpace$$20$$)
};
D.$DvtSubcomponentBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSubcomponentBundle$$, D.$DvtUtilBundle$$, "DvtSubcomponentBundle");
D.$DvtSubcomponentBundle$$._defaults = {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", 
CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"};
D.$DvtSubcomponentBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSubcomponentBundle$$$$$GetDefaultStringForKey$$($key$$24$$) {
  var $defaultStr$$ = D.$DvtSubcomponentBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$24$$);
  return $defaultStr$$ ? $defaultStr$$ : D.$DvtSubcomponentBundle$$._defaults[$key$$24$$]
};
D.$DvtSubcomponentBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSubcomponentBundle");
});