"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGraphSelectableArc$$ = function $$DvtGraphSelectableArc$$$($context$$64$$, $cx$$1$$, $cy$$1$$, $rx$$, $ry$$, $sa$$, $ae$$, $clos$$, $id$$34$$) {
  this.Init($context$$64$$, $cx$$1$$, $cy$$1$$, $rx$$, $ry$$, $sa$$, $ae$$, $clos$$, $id$$34$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectableArc$$, D.$DvtArc$$, "DvtGraphSelectableArc");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectableArc$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$65$$, $cx$$2$$, $cy$$2$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $clos$$1$$, $id$$35$$) {
  D.$DvtGraphSelectableArc$$.$superclass$.Init.call(this, $context$$65$$, $cx$$2$$, $cy$$2$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $clos$$1$$, $id$$35$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$1$$) {
  this.$_bHover$ != $bOver$$1$$ && (this.$_bHover$ = $bOver$$1$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$) {
  this.$_bSelected$ != $bSel$$ && (this.$_bSelected$ = $bSel$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$1$$, $innerColor$$, $outerColor$$) {
  this.$_dataColor$ = $dataColor$$1$$;
  this.$_innerColor$ = $innerColor$$;
  this.$_outerColor$ = $outerColor$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePath$$ = function $$DvtGraphSelectablePath$$$($context$$66$$, $cmds$$1$$, $id$$36$$) {
  this.Init($context$$66$$, $cmds$$1$$, $id$$36$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePath$$, D.$DvtPath$$, "DvtGraphSelectablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$67$$, $cmds$$2$$, $id$$37$$) {
  D.$DvtGraphSelectablePath$$.$superclass$.Init.call(this, $context$$67$$, $cmds$$2$$, $id$$37$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$2$$) {
  this.$_bHover$ != $bOver$$2$$ && (this.$_bHover$ = $bOver$$2$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$1$$) {
  this.$_bSelected$ != $bSel$$1$$ && (this.$_bSelected$ = $bSel$$1$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$2$$, $innerColor$$1$$, $outerColor$$1$$) {
  this.$_dataColor$ = $dataColor$$2$$;
  this.$_innerColor$ = $innerColor$$1$$;
  this.$_outerColor$ = $outerColor$$1$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePolygon$$ = function $$DvtGraphSelectablePolygon$$$($color$$14$$, $context$$68$$, $arPoints$$, $id$$38$$) {
  this.Init($color$$14$$, $context$$68$$, $arPoints$$, $id$$38$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePolygon$$, D.$DvtPolygon$$, "DvtGraphSelectablePolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$69$$, $arPoints$$1$$, $id$$39$$) {
  D.$DvtGraphSelectablePolygon$$.$superclass$.Init.call(this, $context$$69$$, $arPoints$$1$$, $id$$39$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$3$$) {
  this.$_bHover$ != $bOver$$3$$ && (this.$_bHover$ = $bOver$$3$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$2$$) {
  this.$_bSelected$ != $bSel$$2$$ && (this.$_bSelected$ = $bSel$$2$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$3$$, $innerColor$$2$$, $outerColor$$2$$) {
  this.$_dataColor$ = $dataColor$$3$$;
  this.$_innerColor$ = $innerColor$$2$$;
  this.$_outerColor$ = $outerColor$$2$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$90$$, $callback$$39$$, $callbackObj$$16$$) {
  this.Init($context$$90$$, $callback$$39$$, $callbackObj$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$DvtChartAxis$$.prototype.$getOptions$ = function $$DvtChartAxis$$$$$getOptions$$() {
  return this.$Info$.$Options$
};
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$, $coord$$2$$, $bRoundResult$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$.$getOptions$().position) {
    return $coord$$2$$
  }
  if($coord$$2$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$ = $coord$$2$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$);
  return $bRoundResult$$ === D.$JSCompiler_alias_FALSE$$ ? $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$ : window.Math.round($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$33$$)
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$3$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$3$$
  }
  if($coord$$3$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$34$$ = $coord$$3$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$34$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$55$$, $bRoundResult$$2$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$55$$), $bRoundResult$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$5$$) {
  return this.$Info$ ? this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$5$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$56$$, $bRoundResult$$3$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$56$$), $bRoundResult$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$6$$) {
  return this.$Info$ ? this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$6$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$57$$, $bRoundResult$$4$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$57$$), $bRoundResult$$4$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$__getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)(this) ? window.Math.abs(this.$getUnboundedCoordAt$(1) - this.$getUnboundedCoordAt$(0)) : this.$Info$ instanceof D.$DvtTimeAxisInfo$$ ? this.$Info$.$getGroupWidth$() : 0
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$91$$) {
  return this.$Info$ ? this.$Info$.$getAxisLine$($context$$91$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$92$$) {
  return this.$Info$ ? this.$Info$.$getMajorGridLines$($context$$92$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$93$$) {
  return this.$Info$ ? this.$Info$.$getMinorGridLines$($context$$93$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMajorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$11$$) {
  this.$Info$ && this.$Info$.$setMajorTickCount$($count$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMinorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$12$$) {
  this.$Info$ && this.$Info$.$setMinorTickCount$($count$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMajorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMinorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMinorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMin$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMax$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = function $$JSCompiler_prototypeAlias$$$$getViewportMin$$() {
  return this.$Info$ ? this.$Info$.$getViewportMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = function $$JSCompiler_prototypeAlias$$$$getViewportMax$$() {
  return this.$Info$ ? this.$Info$.$getViewportMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = function $$JSCompiler_prototypeAlias$$$$getDataMin$$() {
  return this.$Info$ ? this.$Info$.$getDataMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = function $$JSCompiler_prototypeAlias$$$$getDataMax$$() {
  return this.$Info$ ? this.$Info$.$getDataMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return this.$Info$ ? this.$Info$.$getMinimumExtent$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMin$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMin$() && $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMax$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMax$()
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getLeftOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getRightOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartBar$$ = function $$DvtChartBar$$$($context$$94$$, $bHoriz$$7$$, $bStacked$$2$$, $axisCoord$$1$$, $baselineCoord$$2$$, $endCoord$$, $x1$$7$$, $x2$$5$$) {
  this.Init($context$$94$$);
  this.$_bHoriz$ = $bHoriz$$7$$;
  this.$_bStacked$ = $bStacked$$2$$;
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_setBarCoords$($baselineCoord$$2$$, $endCoord$$, $x1$$7$$, $x2$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$9$$, $stroke$$14$$, $dataColor$$7$$, $innerColor$$5$$, $outerColor$$5$$) {
  this.$_fill$ = $fill$$9$$;
  this.$_stroke$ = $stroke$$14$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$7$$);
  this.$_innerColor$ = $innerColor$$5$$;
  this.$_outerColor$ = $outerColor$$5$$;
  this.$setFill$($fill$$9$$);
  $stroke$$14$$ && this.$setStroke$($stroke$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_hoverColor$, this.$isSelected$() ? this.$_innerColor$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$16$$) {
  this.$IsSelected$ != $selected$$16$$ && (this.$IsSelected$ = $selected$$16$$, this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$15$$, $indicator$$8$$) {
  this.$_setBarCoords$($params$$15$$[0], $params$$15$$[1], $params$$15$$[2], $params$$15$$[3]);
  if($indicator$$8$$) {
    var $indicatorPosition_x$$inline_1448$$, $widthCoord$$inline_1447_y$$inline_1449$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_1451_midLength$$inline_1450$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_1448$$ = this.$_bHoriz$ ? $lengthCoord$$inline_1451_midLength$$inline_1450$$ : $widthCoord$$inline_1447_y$$inline_1449$$;
    $widthCoord$$inline_1447_y$$inline_1449$$ = this.$_bHoriz$ ? $widthCoord$$inline_1447_y$$inline_1449$$ : $lengthCoord$$inline_1451_midLength$$inline_1450$$;
    $indicatorPosition_x$$inline_1448$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_1448$$, $widthCoord$$inline_1447_y$$inline_1449$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$8$$, $indicatorPosition_x$$inline_1448$$.x, $indicatorPosition_x$$inline_1448$$.y);
    $indicator$$8$$.$setAlpha$(1);
    $indicator$$8$$.getParent().$addChild$($indicator$$8$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$21_nodePlayable$$15$$) {
  var $endState$$8$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$21_nodePlayable$$15$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$21_nodePlayable$$15$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$21_nodePlayable$$15$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  return $duration$$21_nodePlayable$$15$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$22_nodePlayable$$16$$) {
  var $endState$$9$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$22_nodePlayable$$16$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$22_nodePlayable$$16$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$22_nodePlayable$$16$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$9$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$22_nodePlayable$$16$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$22_nodePlayable$$16$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$23_nodePlayable$$17$$) {
  this.$setAlpha$(0);
  $duration$$23_nodePlayable$$17$$ = this.$getDisplayAnimation$($duration$$23_nodePlayable$$17$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$23_nodePlayable$$17$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$23_nodePlayable$$17$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$3$$, $endCoord$$1$$, $x1$$8$$, $x2$$6$$) {
  this.$_baselineCoord$ = $baselineCoord$$3$$;
  this.$_endCoord$ = $endCoord$$1$$;
  this.$_x1$ = $x1$$8$$;
  this.$_x2$ = $x2$$6$$;
  this.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this));
  this.$_outerChild$ && this.$_outerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 2));
  this.$_innerChild$ && this.$_innerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 3.5))
};
D.$JSCompiler_StaticMethods__createPointsArray$$ = function $$JSCompiler_StaticMethods__createPointsArray$$$($JSCompiler_StaticMethods__createPointsArray$self$$, $inset$$) {
  var $baselineCoord$$4$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_baselineCoord$, $endCoord$$2$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_endCoord$, $x1$$9$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x1$, $x2$$7$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$9$$ - $x2$$7$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$4$$ - $endCoord$$2$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$9$$ += $inset$$;
    $x2$$7$$ -= $inset$$;
    $endCoord$$2$$ < $baselineCoord$$4$$ ? ($baselineCoord$$4$$ -= $inset$$, $endCoord$$2$$ += $inset$$) : ($baselineCoord$$4$$ += $inset$$, $endCoord$$2$$ -= $inset$$)
  }
  return $JSCompiler_StaticMethods__createPointsArray$self$$.$_bHoriz$ ? [$endCoord$$2$$, $x1$$9$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$4$$, $x2$$7$$, $baselineCoord$$4$$, $x1$$9$$] : [$x1$$9$$, $endCoord$$2$$, $x2$$7$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$4$$, $x1$$9$$, $baselineCoord$$4$$]
};
D.$JSCompiler_StaticMethods__showNestedBorders$$ = function $$JSCompiler_StaticMethods__showNestedBorders$$$($JSCompiler_StaticMethods__showNestedBorders$self$$, $outerBorderColor$$, $innerBorderColor$$) {
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ || ($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 2)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 3.5)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$));
  $innerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setSolidFill$($innerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($outerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_stroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$))
};
D.$DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
  var $x$$127$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$99$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$14$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$10$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$99$$, $x$$127$$, $h$$10$$, $w$$14$$) : new D.$DvtRectangle$$($x$$127$$, $y$$99$$, $w$$14$$, $h$$10$$)
};
D.$DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($targetCoordinateSpace$$11$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$11$$)
};
D.$DvtChartCoord$$ = function $$DvtChartCoord$$$($x$$125$$, $y1$$6$$, $y2$$4$$, $groupIndex$$13$$, $group$$15$$, $filtered$$) {
  this.x = $x$$125$$;
  this.$y1$ = $y1$$6$$;
  this.$y2$ = $y2$$4$$;
  this.$groupIndex$ = $groupIndex$$13$$;
  this.group = $group$$15$$;
  this.$filtered$ = $filtered$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCoord$$, D.$DvtObj$$, "DvtChartCoord");
D.$JSCompiler_StaticMethods_isUpstep$$ = function $$JSCompiler_StaticMethods_isUpstep$$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$1$$) {
  return window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$1$$) > window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$1$$)
};
D.$DvtChartCoord$$.prototype.clone = function $$DvtChartCoord$$$$clone$() {
  return new D.$DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
D.$DvtChartLineArea$$ = function $$DvtChartLineArea$$$($chart$$86$$, $bArea$$2$$, $availSpace$$61$$, $baseline$$2$$, $fill$$11$$, $stroke$$16$$, $type$$75$$, $arCoord$$, $baseType$$, $arBaseCoord$$) {
  this.Init($chart$$86$$.$_context$);
  this.$_chart$ = $chart$$86$$;
  this.$_bArea$ = $bArea$$2$$;
  this.$_availSpace$ = $availSpace$$61$$;
  this.$_baseline$ = $baseline$$2$$;
  this.$_fill$ = $fill$$11$$;
  this.$_stroke$ = $stroke$$16$$;
  this.$_type$ = $type$$75$$;
  this.$_baseType$ = $baseType$$ ? $baseType$$ : $type$$75$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineArea$$, D.$DvtContainer$$, "DvtChartLineArea");
D.$DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_1489_indicatorObj$$inline_1488$$, $pos$$inline_1490_y$$inline_1491$$, $coord$$inline_1492$$, $i$$inline_1493$$ = 0;$i$$inline_1493$$ < this.$_arCoord$.length;$i$$inline_1493$$++) {
    if($coord$$inline_1492$$ = this.$_arCoord$[$i$$inline_1493$$], ($indicator$$inline_1489_indicatorObj$$inline_1488$$ = this.$_indicatorMap$[$coord$$inline_1492$$.$groupIndex$]) && $indicator$$inline_1489_indicatorObj$$inline_1488$$.$indicator$) {
      $pos$$inline_1490_y$$inline_1491$$ = ((0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$inline_1492$$, this.$_baseline$) ? $coord$$inline_1492$$.$y2$ : $coord$$inline_1492$$.$y1$) + 8 * ($indicator$$inline_1489_indicatorObj$$inline_1488$$.direction == D.$DvtDCChartUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_1490_y$$inline_1491$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)(this, new D.$DvtPoint$$($coord$$inline_1492$$.x, $pos$$inline_1490_y$$inline_1491$$)), $indicator$$inline_1489_indicatorObj$$inline_1488$$ = 
      $indicator$$inline_1489_indicatorObj$$inline_1488$$.$indicator$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$inline_1489_indicatorObj$$inline_1488$$, $pos$$inline_1490_y$$inline_1491$$.x, $pos$$inline_1490_y$$inline_1491$$.y), $indicator$$inline_1489_indicatorObj$$inline_1488$$.$setAlpha$(1), $indicator$$inline_1489_indicatorObj$$inline_1488$$.getParent().$addChild$($indicator$$inline_1489_indicatorObj$$inline_1488$$)
    }
  }
};
D.$DvtChartLineArea$$.prototype.$isArea$ = (0,D.$JSCompiler_get$$)("$_bArea$");
D.$JSCompiler_StaticMethods__getPointArrays$$ = function $$JSCompiler_StaticMethods__getPointArrays$$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$7_coords$$inline_1495$$, $type$$76$$) {
  var $pointsArrays$$1$$ = [], $points$$7$$ = [];
  $pointsArrays$$1$$.push($points$$7$$);
  for(var $isPolar$$3_pointCoords$$inline_1496$$ = [], $i$$inline_1497_isCentered$$ = 0;$i$$inline_1497_isCentered$$ < $coords$$7_coords$$inline_1495$$.length;$i$$inline_1497_isCentered$$++) {
    if(!$coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].$filtered$) {
      if($coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].x == D.$JSCompiler_alias_NULL$$) {
        $isPolar$$3_pointCoords$$inline_1496$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        if($isPolar$$3_pointCoords$$inline_1496$$.push(new D.$DvtPoint$$($coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].x, $coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].$y1$)), $coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].$y1$ != $coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].$y2$) {
          var $isUncentered_p2$$inline_1498$$ = new D.$DvtPoint$$($coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].x, $coords$$7_coords$$inline_1495$$[$i$$inline_1497_isCentered$$].$y2$);
          $isUncentered_p2$$inline_1498$$.$_isY2$ = D.$JSCompiler_alias_TRUE$$;
          $isPolar$$3_pointCoords$$inline_1496$$.push($isUncentered_p2$$inline_1498$$)
        }
      }
    }
  }
  $coords$$7_coords$$inline_1495$$ = $isPolar$$3_pointCoords$$inline_1496$$;
  var $isPolar$$3_pointCoords$$inline_1496$$ = D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $i$$inline_1497_isCentered$$ = "centeredStepped" == $type$$76$$ || "centeredSegmented" == $type$$76$$, $isUncentered_p2$$inline_1498$$ = "stepped" == $type$$76$$ || "segmented" == $type$$76$$, $groupWidth$$ = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$xAxis$.$getGroupWidth$(), $dir$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_context$) && 
  D.$DvtChartTypeUtils$$.$isVertical$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) ? -1 : 1, $lastCoord$$;
  $isPolar$$3_pointCoords$$inline_1496$$ && ($lastCoord$$ = $coords$$7_coords$$inline_1495$$[$coords$$7_coords$$inline_1495$$.length - 1]);
  for(var $coord$$7$$, $xCoord$$5$$, $isY2$$, $inBump$$ = D.$JSCompiler_alias_FALSE$$, $i$$155$$ = 0;$i$$155$$ < $coords$$7_coords$$inline_1495$$.length;$i$$155$$++) {
    if($coords$$7_coords$$inline_1495$$[$i$$155$$] == D.$JSCompiler_alias_NULL$$) {
      D.$DvtChartDataUtils$$.$hasMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) || ($points$$7$$ = [], $pointsArrays$$1$$.push($points$$7$$), $lastCoord$$ = D.$JSCompiler_alias_NULL$$)
    }else {
      $coord$$7$$ = $coords$$7_coords$$inline_1495$$[$i$$155$$];
      $isY2$$ = $coords$$7_coords$$inline_1495$$[$i$$155$$].$_isY2$;
      $xCoord$$5$$ = $i$$inline_1497_isCentered$$ ? $coord$$7$$.x - $groupWidth$$ / 2 * $dir$$2$$ : $coord$$7$$.x;
      if($isY2$$) {
        if($inBump$$ && ($isUncentered_p2$$inline_1498$$ || $i$$inline_1497_isCentered$$)) {
          $xCoord$$5$$ += $groupWidth$$ * $dir$$2$$
        }
        $inBump$$ = !$inBump$$
      }
      "curved" == $type$$76$$ && $isY2$$ && $points$$7$$.push(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
      $lastCoord$$ && ($isUncentered_p2$$inline_1498$$ || $i$$inline_1497_isCentered$$) && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$7$$, $xCoord$$5$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$76$$ || "centeredSegmented" == $type$$76$$)) {
        $points$$7$$ = [], $pointsArrays$$1$$.push($points$$7$$)
      }
      (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$7$$, $xCoord$$5$$, $coord$$7$$.y);
      $lastCoord$$ = $coord$$7$$
    }
  }
  !$isPolar$$3_pointCoords$$inline_1496$$ && (!$isY2$$ && $lastCoord$$) && ($i$$inline_1497_isCentered$$ ? (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$7$$, $lastCoord$$.x + 0.5 * $groupWidth$$ * $dir$$2$$, $lastCoord$$.y) : $isUncentered_p2$$inline_1498$$ && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$7$$, $lastCoord$$.x + $groupWidth$$ * $dir$$2$$, $lastCoord$$.y));
  D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && 1 < $pointsArrays$$1$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$JSCompiler_StaticMethods__convertCoord$$ = function $$JSCompiler_StaticMethods__convertCoord$$$($JSCompiler_StaticMethods__convertCoord$self$$, $coord$$8$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$)) {
    var $cartesian$$2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($coord$$8$$.y, $coord$$8$$.x, $JSCompiler_StaticMethods__convertCoord$self$$.$_availSpace$);
    return new D.$DvtPoint$$($cartesian$$2$$.x, $cartesian$$2$$.y)
  }
  return D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$) ? new D.$DvtPoint$$($coord$$8$$.y, $coord$$8$$.x) : new D.$DvtPoint$$($coord$$8$$.x, $coord$$8$$.y)
};
D.$JSCompiler_StaticMethods__pushCoord$$ = function $$JSCompiler_StaticMethods__pushCoord$$$($JSCompiler_StaticMethods__pushCoord$self_coord$$9$$, $pointArray$$, $x$$128$$, $y$$100$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$9$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)($JSCompiler_StaticMethods__pushCoord$self_coord$$9$$, new D.$DvtPoint$$($x$$128$$, $y$$100$$));
  $pointArray$$.push(window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$9$$.x), window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$9$$.y))
};
D.$JSCompiler_StaticMethods__isRing$$ = function $$JSCompiler_StaticMethods__isRing$$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$156$$ = 0;$i$$156$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$156$$++) {
    if($JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$156$$].x == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getSplineType$$ = function $$JSCompiler_StaticMethods__getSplineType$$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? (0,D.$JSCompiler_StaticMethods__isRing$$)($JSCompiler_StaticMethods__getSplineType$self$$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ : D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_VERTICAL$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $cmd$$7_line$$8_points$$8$$, $i$$157$$ = 0;$i$$157$$ < $pointArrays$$.length;$i$$157$$++) {
    if(($cmd$$7_line$$8_points$$8$$ = $pointArrays$$[$i$$157$$]) && 1 < $cmd$$7_line$$8_points$$8$$.length) {
      "curved" == this.$_type$ ? ($cmd$$7_line$$8_points$$8$$ = (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$7_line$$8_points$$8$$, D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this)), $cmd$$7_line$$8_points$$8$$ = new D.$DvtPath$$(this.$_context$, $cmd$$7_line$$8_points$$8$$), $cmd$$7_line$$8_points$$8$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__isRing$$)(this) ? ($cmd$$7_line$$8_points$$8$$ = new D.$DvtPolygon$$(this.$_context$, 
      $cmd$$7_line$$8_points$$8$$), $cmd$$7_line$$8_points$$8$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $cmd$$7_line$$8_points$$8$$ = new D.$DvtPolyline$$(this.$_context$, $cmd$$7_line$$8_points$$8$$), $cmd$$7_line$$8_points$$8$$.$setStroke$(this.$_stroke$), this.$addChild$($cmd$$7_line$$8_points$$8$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $highArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $lowArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arBaseCoord$, this.$_baseType$);
  if($highArrays$$.length == $lowArrays$$.length) {
    for(var $area$$24_lowCurved_points$$9$$, $i$$158$$ = 0;$i$$158$$ < $highArrays$$.length;$i$$158$$++) {
      var $cmd$$8_highArray$$ = $highArrays$$[$i$$158$$], $lowArray_splineType$$ = $lowArrays$$[$i$$158$$];
      if(!(2 > $cmd$$8_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area$$24_lowCurved_points$$9$$ = "curved" == this.$_baseType$;
        (0,D.$JSCompiler_StaticMethods__isRing$$)(this) && ($highCurved$$ || $cmd$$8_highArray$$.push($cmd$$8_highArray$$[0], $cmd$$8_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area$$24_lowCurved_points$$9$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$27$$ = 0;$j$$27$$ < $lowArray_splineType$$.length;$j$$27$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$27$$], $lowArray_splineType$$[$j$$27$$ + 1])
        }
        $highCurved$$ || $area$$24_lowCurved_points$$9$$ ? ($lowArray_splineType$$ = (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this), $cmd$$8_highArray$$ = $highCurved$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$8_highArray$$, D.$JSCompiler_alias_FALSE$$, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($cmd$$8_highArray$$, D.$JSCompiler_alias_FALSE$$), $cmd$$8_highArray$$ += $area$$24_lowCurved_points$$9$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($revLowArray$$, 
        D.$JSCompiler_alias_TRUE$$, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($revLowArray$$, D.$JSCompiler_alias_TRUE$$), $cmd$$8_highArray$$ += D.$DvtPathUtils$$.closePath(), $area$$24_lowCurved_points$$9$$ = new D.$DvtPath$$(this.$_context$, $cmd$$8_highArray$$)) : ($area$$24_lowCurved_points$$9$$ = $revLowArray$$.concat($cmd$$8_highArray$$), $area$$24_lowCurved_points$$9$$ = new D.$DvtPolygon$$(this.$_context$, $area$$24_lowCurved_points$$9$$));
        $area$$24_lowCurved_points$$9$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area$$24_lowCurved_points$$9$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area$$24_lowCurved_points$$9$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$8_params$$17$$) {
  $coords$$8_params$$17$$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($coords$$8_params$$17$$);
  this.$setCoords$($coords$$8_params$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$18$$) {
  this.$_arBaseCoord$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($params$$18$$)
};
D.$JSCompiler_StaticMethods_getCommonGroupIndices$$ = function $$JSCompiler_StaticMethods_getCommonGroupIndices$$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$2$$ = [], $i$$160$$ = 0;$i$$160$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$160$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$160$$].$filtered$ || $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$160$$].x == D.$JSCompiler_alias_NULL$$)) {
      for(var $j$$28$$ = 0;$j$$28$$ < $other$$6$$.$_arCoord$.length;$j$$28$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$28$$].$filtered$ || $other$$6$$.$_arCoord$[$j$$28$$].x == D.$JSCompiler_alias_NULL$$) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$160$$].group == $other$$6$$.$_arCoord$[$j$$28$$].group) {
          $indices$$2$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$160$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$2$$
};
D.$DvtChartLineArea$_coordsToAnimationParams$$ = function $$DvtChartLineArea$_coordsToAnimationParams$$$($coords$$10$$, $otherCoords_otherGroups$$1$$, $baseline$$3_params$$19$$) {
  if($otherCoords_otherGroups$$1$$ && 0 < $otherCoords_otherGroups$$1$$.length) {
    if($coords$$10$$ && 0 < $coords$$10$$.length) {
      $coords$$10$$ = $coords$$10$$.slice(0);
      $otherCoords_otherGroups$$1$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($otherCoords_otherGroups$$1$$);
      for(var $groups$$12$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($coords$$10$$), $idx$$8$$ = $coords$$10$$.length, $dummyCoord_group$$16_groupIdx$$, $g$$4_i$$162$$ = $otherCoords_otherGroups$$1$$.length - 1;0 <= $g$$4_i$$162$$;$g$$4_i$$162$$--) {
        if($dummyCoord_group$$16_groupIdx$$ = $otherCoords_otherGroups$$1$$[$g$$4_i$$162$$], $dummyCoord_group$$16_groupIdx$$ = $groups$$12$$.indexOf($dummyCoord_group$$16_groupIdx$$), -1 == $dummyCoord_group$$16_groupIdx$$) {
          if(0 == $idx$$8$$) {
            $dummyCoord_group$$16_groupIdx$$ = $coords$$10$$[0].clone();
            $coords$$10$$[0] = $coords$$10$$[0].clone();
            var $startCoord$$inline_1500_startCoord$$inline_1504$$ = $dummyCoord_group$$16_groupIdx$$, $endCoord$$inline_1501$$ = $coords$$10$$[0];
            (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_1500_startCoord$$inline_1504$$, $baseline$$3_params$$19$$) ? $endCoord$$inline_1501$$.$y1$ = $endCoord$$inline_1501$$.$y2$ : $startCoord$$inline_1500_startCoord$$inline_1504$$.$y2$ = $startCoord$$inline_1500_startCoord$$inline_1504$$.$y1$
          }else {
            $dummyCoord_group$$16_groupIdx$$ = $coords$$10$$[$idx$$8$$ - 1].clone(), $coords$$10$$[$idx$$8$$ - 1] = $coords$$10$$[$idx$$8$$ - 1].clone(), $startCoord$$inline_1500_startCoord$$inline_1504$$ = $coords$$10$$[$idx$$8$$ - 1], (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_1500_startCoord$$inline_1504$$, $baseline$$3_params$$19$$) ? $dummyCoord_group$$16_groupIdx$$.$y1$ = $dummyCoord_group$$16_groupIdx$$.$y2$ : $startCoord$$inline_1500_startCoord$$inline_1504$$.$y2$ = $startCoord$$inline_1500_startCoord$$inline_1504$$.$y1$
          }
          $dummyCoord_group$$16_groupIdx$$.$groupIndex$ = -1;
          $coords$$10$$.splice($idx$$8$$, 0, $dummyCoord_group$$16_groupIdx$$)
        }else {
          $idx$$8$$ = $dummyCoord_group$$16_groupIdx$$
        }
      }
    }else {
      $coords$$10$$ = [];
      for($g$$4_i$$162$$ = 0;$g$$4_i$$162$$ < $otherCoords_otherGroups$$1$$.length;$g$$4_i$$162$$++) {
        $coords$$10$$.push(new D.$DvtChartCoord$$($otherCoords_otherGroups$$1$$[$g$$4_i$$162$$].x, $baseline$$3_params$$19$$, $baseline$$3_params$$19$$))
      }
    }
  }
  $baseline$$3_params$$19$$ = [];
  for($g$$4_i$$162$$ = 0;$g$$4_i$$162$$ < $coords$$10$$.length;$g$$4_i$$162$$++) {
    $coords$$10$$[$g$$4_i$$162$$].$filtered$ || ($coords$$10$$[$g$$4_i$$162$$].x == D.$JSCompiler_alias_NULL$$ ? ($baseline$$3_params$$19$$.push(window.Infinity), $baseline$$3_params$$19$$.push(window.Infinity), $baseline$$3_params$$19$$.push(window.Infinity)) : ($baseline$$3_params$$19$$.push($coords$$10$$[$g$$4_i$$162$$].x), $baseline$$3_params$$19$$.push($coords$$10$$[$g$$4_i$$162$$].$y1$), $baseline$$3_params$$19$$.push($coords$$10$$[$g$$4_i$$162$$].$y2$)), $baseline$$3_params$$19$$.push($coords$$10$$[$g$$4_i$$162$$].$groupIndex$))
  }
  return $baseline$$3_params$$19$$
};
D.$DvtChartLineArea$_animationParamsToCoords$$ = function $$DvtChartLineArea$_animationParamsToCoords$$$($params$$20$$) {
  for(var $coords$$11$$ = [], $i$$163$$ = 0;$i$$163$$ < $params$$20$$.length;$i$$163$$ += 4) {
    window.Infinity == $params$$20$$[$i$$163$$] ? $coords$$11$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$20$$[$i$$163$$ + 3])) : $coords$$11$$.push(new D.$DvtChartCoord$$($params$$20$$[$i$$163$$], $params$$20$$[$i$$163$$ + 1], $params$$20$$[$i$$163$$ + 2], $params$$20$$[$i$$163$$ + 3]))
  }
  return $coords$$11$$
};
D.$DvtChartLineArea$_coordsToGroups$$ = function $$DvtChartLineArea$_coordsToGroups$$$($coords$$12$$) {
  for(var $groups$$13$$ = [], $i$$164$$ = 0;$i$$164$$ < $coords$$12$$.length;$i$$164$$++) {
    $coords$$12$$[$i$$164$$].$filtered$ || $groups$$13$$.push($coords$$12$$[$i$$164$$].group)
  }
  return $groups$$13$$
};
D.$DvtChartLineArea$_getCurvedPathCommands$$ = function $$DvtChartLineArea$_getCurvedPathCommands$$$($cmd$$9_points$$10$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$5$$ = [];
  $arP$$.push($p$$5$$);
  for(var $i$$165$$ = 0;$i$$165$$ < $cmd$$9_points$$10$$.length;$i$$165$$ += 2) {
    $cmd$$9_points$$10$$[$i$$165$$] == D.$JSCompiler_alias_NULL$$ ? ($p$$5$$ = [], $arP$$.push($p$$5$$)) : $p$$5$$.push($cmd$$9_points$$10$$[$i$$165$$], $cmd$$9_points$$10$$[$i$$165$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$);
  $cmd$$9_points$$10$$ = "";
  for($i$$165$$ = 0;$i$$165$$ < $arP$$.length;$i$$165$$++) {
    $p$$5$$ = $arP$$[$i$$165$$], $cmd$$9_points$$10$$ += D.$DvtPathUtils$$.$curveThroughPoints$($p$$5$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $cmd$$9_points$$10$$
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$97$$, $type$$77$$, $x$$129$$, $y$$102$$, $size$$17$$) {
  this.Init($context$$97$$, $type$$77$$, D.$JSCompiler_alias_NULL$$, $x$$129$$, $y$$102$$, $size$$17$$, $size$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$_SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$_SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$9$$) {
  this.$_dataColor$ = $dataColor$$9$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$9$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$_SELECTED_STROKE$$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$18$$) {
  this.$IsSelected$ != $selected$$18$$ && (this.$IsSelected$ = $selected$$18$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$_SELECTED_FILL$$), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$DvtChartLineMarker$_SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($context$$96$$, $axisCoord$$2$$, $baselineCoord$$5$$, $endCoord$$3$$, $x1$$10$$, $x2$$8$$, $availSpace$$60$$) {
  this.Init($context$$96$$);
  this.$_axisCoord$ = $axisCoord$$2$$;
  this.$_availSpace$ = $availSpace$$60$$.clone();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_setBarCoords$($baselineCoord$$5$$, $endCoord$$3$$, $x1$$10$$, $x2$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtGraphSelectablePath$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$10$$, $stroke$$15$$, $dataColor$$8$$, $innerColor$$6$$, $outerColor$$6$$) {
  this.$setFill$($fill$$10$$);
  this.$setStroke$($stroke$$15$$);
  this.$setDataColor$($dataColor$$8$$, $innerColor$$6$$, $outerColor$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$16$$) {
  this.$_setBarCoords$($params$$16$$[0], $params$$16$$[1], $params$$16$$[2], $params$$16$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$24_nodePlayable$$18$$) {
  var $endState$$10$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$24_nodePlayable$$18$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$24_nodePlayable$$18$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$24_nodePlayable$$18$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$10$$);
  return $duration$$24_nodePlayable$$18$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$25_nodePlayable$$19$$) {
  var $endState$$11$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$25_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$25_nodePlayable$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$25_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$11$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$25_nodePlayable$$19$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$25_nodePlayable$$19$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$26_nodePlayable$$20$$) {
  this.$setAlpha$(0);
  var $endState$$12$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$26_nodePlayable$$20$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$26_nodePlayable$$20$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$26_nodePlayable$$20$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$12$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$26_nodePlayable$$20$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$26_nodePlayable$$20$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$6$$, $endCoord$$4$$, $x1$$11$$, $x2$$9$$) {
  var $inner1_maxY$$1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$6$$, $x1$$11$$, this.$_availSpace$), $inner2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$6$$, $x2$$9$$, this.$_availSpace$), $outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$4$$, $x1$$11$$, this.$_availSpace$), $outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$4$$, $x2$$9$$, this.$_availSpace$), $cmds$$4_minX$$1$$ = D.$DvtPathUtils$$.moveTo($inner1_maxY$$1$$.x, 
  $inner1_maxY$$1$$.y) + D.$DvtPathUtils$$.arcTo($baselineCoord$$6$$, $baselineCoord$$6$$, $x2$$9$$ - $x1$$11$$, 1, $inner2$$.x, $inner2$$.y) + D.$DvtPathUtils$$.lineTo($outer2$$.x, $outer2$$.y) + D.$DvtPathUtils$$.arcTo($endCoord$$4$$, $endCoord$$4$$, $x2$$9$$ - $x1$$11$$, 0, $outer1$$.x, $outer1$$.y) + D.$DvtPathUtils$$.lineTo($inner1_maxY$$1$$.x, $inner1_maxY$$1$$.y) + D.$DvtPathUtils$$.closePath();
  this.$setCmds$($cmds$$4_minX$$1$$);
  var $cmds$$4_minX$$1$$ = window.Math.min($inner1_maxY$$1$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $maxX$$1$$ = window.Math.max($inner1_maxY$$1$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $minY$$1$$ = window.Math.min($inner1_maxY$$1$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y), $inner1_maxY$$1$$ = window.Math.max($inner1_maxY$$1$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$4_minX$$1$$, $minY$$1$$, $maxX$$1$$ - $cmds$$4_minX$$1$$, $inner1_maxY$$1$$ - $minY$$1$$);
  this.$_baselineCoord$ = $baselineCoord$$6$$;
  this.$_endCoord$ = $endCoord$$4$$;
  this.$_x1$ = $x1$$11$$;
  this.$_x2$ = $x2$$9$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$84$$, $seriesIndex$$23$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$) {
  this.Init($chart$$84$$, $seriesIndex$$23$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$, $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$, $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$, $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$, $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$, 
$startPercent$$1_textDim$$inline_1479$$, $pos$$inline_1480_valuePercent$$1$$, $displacement$$inline_1482_fillPercent$$1$$, $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.$_context$);
  this.$_chart$ = $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$;
  this.$_seriesIndex$ = $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$;
  this.$_numDrawnSeries$ = $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$;
  this.$_funnelWidth$ = $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$;
  this.$_funnelHeight$ = $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$;
  this.$_startPercent$ = $startPercent$$1_textDim$$inline_1479$$;
  this.$_valuePercent$ = $pos$$inline_1480_valuePercent$$1$$;
  this.$_fillPercent$ = $displacement$$inline_1482_fillPercent$$1$$;
  this.$_gap$ = $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$;
  $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.$getOptions$().styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.slice);
  $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$_context$, $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ = $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.sliceBounds;
  $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$);
  $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$)) : this.$setFill$($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$);
  this.$setSolidStroke$($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ != D.$JSCompiler_alias_NULL$$ ? $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ : "#FFFFFF");
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$.$setHoverStroke$(new D.$DvtSolidStroke$$($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$, 
  1, 2)), $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$, 1, 1.5), new D.$DvtSolidStroke$$($backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$, 1, 4.5)), $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$, 
  1, 1.5), new D.$DvtSolidStroke$$($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$ = $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.sliceBounds;
    $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$ = $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$.barBounds;
    if($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$)) {
      if($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$ = new D.$DvtOutputText$$(this.$_context$, $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$, 0, 0), $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$, 
      $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$ = [this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], $funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$), 
      $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$), D.$DvtTextUtils$$.$fitText$($innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.$h$ - 10, 
      $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.$w$, this, 3)) {
        $startPercent$$1_textDim$$inline_1479$$ = $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$measureDimensions$();
        $pos$$inline_1480_valuePercent$$1$$ = (0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$);
        $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ && ($bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$ = 0.15 * $startPercent$$1_textDim$$inline_1479$$.$h$, $displacement$$inline_1482_fillPercent$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 0.5 : -0.5, $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$ = D.$DvtPathUtils$$.$roundedRectangle$($startPercent$$1_textDim$$inline_1479$$.x - 
        $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$, $startPercent$$1_textDim$$inline_1479$$.y, $startPercent$$1_textDim$$inline_1479$$.$w$ + 2 * $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$, $startPercent$$1_textDim$$inline_1479$$.$h$, 2, 2, 2, 2), $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$ = new D.$DvtPath$$(this.$_context$, $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$), $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$.$setSolidFill$("#FFFFFF", 
        0.9), $pos$$inline_1480_valuePercent$$1$$.translate($displacement$$inline_1482_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_1479$$.$h$, -$displacement$$inline_1482_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_1479$$.$w$), $bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$.$setMatrix$($pos$$inline_1480_valuePercent$$1$$), this.$addChild$($bbox$$inline_1484_cmd$$inline_1483_gap$$9_padding$$inline_1481$$));
        $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$ = $backgroundFill$$inline_1465_funnelWidth$$1_isPatternBg$$inline_1476_outerColor$$inline_1468_sliceBounds$$inline_1462$$ ? "#0000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.x, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.y + 
        ($JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$.$h$ - $startPercent$$1_textDim$$inline_1479$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
        (!$funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$.$getStyle$("color") || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) && $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_1477_shapeForSelection$$inline_1469_style$$inline_1478$$.$setStyle$("color", $barBounds$$inline_1473_cmds$$5_labelColor$$inline_1485_seriesIndex$$24$$));
        $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$));
        $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$alignCenter$();
        $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$.$alignMiddle$();
        $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$ = $innerColor$$inline_1467_label$$inline_1475_labelString$$inline_1474_numDrawnSeries$$2_sliceBorder$$inline_1464$$;
        break a
      }
    }
    $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$489_chart$$85_hoverColor$$inline_1466_sliceBounds$$inline_1472_sliceFill$$inline_1463$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ = D.$DvtMath$$.$degreesToRads$(31);
D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ = D.$DvtMath$$.$degreesToRads$(29);
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self_alpha$$8$$) {
  var $is3D_rx$$2$$ = "on" == $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $isBiDi$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_context$), $gapCount_ry$$2$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_chart$), $ar$$4_offset$$16$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_numDrawnSeries$ + 
  1) * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_gap$;
  if($is3D_rx$$2$$) {
    var $is3D_rx$$2$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $gapCount_ry$$2$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$2$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$), $ratio$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$), 
    $delta$$1_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_startPercent$), $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_valuePercent$), $c1_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ + $gapCount_ry$$2$$, 
    $c2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ - $gapCount_ry$$2$$, $arcDir1$$ = 1, $arcDir2$$ = 0;
    $isBiDi$$ ? ($ar$$4_offset$$16$$ = [$is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$) + $ar$$4_offset$$16$$, $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$), $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$) + $ar$$4_offset$$16$$, $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$) + $ar$$4_offset$$16$$, $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$) + $ar$$4_offset$$16$$, $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$4_offset$$16$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$), $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - 
    $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$), $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$), $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$), 
    $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$)];
    $delta$$1_pathCommands$$ = D.$DvtPathUtils$$.moveTo($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]);
    $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$;
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$ * ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[7]);
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$ * ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]);
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$4_offset$$16$$[2], $ar$$4_offset$$16$$[3]);
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$ * ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 2, ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 2, window.Math.PI, $arcDir2$$, $ar$$4_offset$$16$$[4], $ar$$4_offset$$16$$[5]);
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[7]);
    $c1_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[2]), $ar$$4_offset$$16$$[5], window.Math.abs($ar$$4_offset$$16$$[0] - $ar$$4_offset$$16$$[2]), window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]));
    if($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
      var $barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$, 1), 0);
      $JSCompiler_StaticMethods__getPath$self_alpha$$8$$ = $isBiDi$$ ? -$barBounds_percent$$1$$ * window.Math.PI : $barBounds_percent$$1$$ * window.Math.PI;
      $barCommands_gamma$$ = D.$DvtPathUtils$$.moveTo($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]);
      $barCommands_gamma$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$4_offset$$16$$[2], $ar$$4_offset$$16$$[3]);
      $barCommands_gamma$$ += D.$DvtPathUtils$$.arcTo($ratio$$ * ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 2, ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$8$$, $arcDir2$$, $ar$$4_offset$$16$$[2] + $ratio$$ * ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$8$$), ($ar$$4_offset$$16$$[5] + $ar$$4_offset$$16$$[3]) / 2 + ($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) / 
      2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$8$$));
      $barCommands_gamma$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$4_offset$$16$$[6] + $ratio$$ * ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$8$$), ($ar$$4_offset$$16$$[7] + $ar$$4_offset$$16$$[1]) / 2 + ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$8$$));
      $barCommands_gamma$$ += D.$DvtPathUtils$$.arcTo($ratio$$ * ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, ($ar$$4_offset$$16$$[1] - $ar$$4_offset$$16$$[7]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$8$$, $arcDir1$$, $ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]);
      $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[2]), $ar$$4_offset$$16$$[5] + window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$4_offset$$16$$[0] - $ar$$4_offset$$16$$[2]), window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) * $barBounds_percent$$1$$)
    }
  }else {
    $is3D_rx$$2$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $gapCount_ry$$2$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$2$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $delta$$1_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_startPercent$), 
    $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_valuePercent$), $c1_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ + $gapCount_ry$$2$$, $c2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelHeight$ - $gapCount_ry$$2$$, 
    $arcDir1$$ = 1, $arcDir2$$ = 0, $isBiDi$$ ? ($ar$$4_offset$$16$$ = [$is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$) + $ar$$4_offset$$16$$, $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$), $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$) + $ar$$4_offset$$16$$, $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$) + $ar$$4_offset$$16$$, $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$) + $ar$$4_offset$$16$$, $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$4_offset$$16$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$), $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - 
    $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$), $c1_sliceBounds$$ - $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($barCommands_gamma$$), $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_funnelWidth$ - $ar$$4_offset$$16$$ - $is3D_rx$$2$$ * window.Math.sin($delta$$1_pathCommands$$), 
    $c2$$ + $gapCount_ry$$2$$ * window.Math.cos($delta$$1_pathCommands$$)], $delta$$1_pathCommands$$ = D.$DvtPathUtils$$.moveTo($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]), $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$, $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$4_offset$$16$$[2], $ar$$4_offset$$16$$[3]), $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.lineTo($ar$$4_offset$$16$$[4], $ar$$4_offset$$16$$[5]), 
    $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[7]), $delta$$1_pathCommands$$ += D.$DvtPathUtils$$.closePath(), $c1_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[2]), $ar$$4_offset$$16$$[5], window.Math.abs($ar$$4_offset$$16$$[0] - $ar$$4_offset$$16$$[2]), window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5])), 
    $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ && ($barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$, 1), 0), $barCommands_gamma$$ = D.$DvtPathUtils$$.moveTo($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[1]), $barCommands_gamma$$ += D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$4_offset$$16$$[2], $ar$$4_offset$$16$$[3]), 
    $barCommands_gamma$$ += D.$DvtPathUtils$$.lineTo($ar$$4_offset$$16$$[4], $ar$$4_offset$$16$$[3] + $barBounds_percent$$1$$ * ($ar$$4_offset$$16$$[5] - $ar$$4_offset$$16$$[3])), $barCommands_gamma$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$ ? $barCommands_gamma$$ + D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$4_offset$$16$$[7] - 
    $ar$$4_offset$$16$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self_alpha$$8$$.$_fillPercent$ ? $barCommands_gamma$$ + D.$DvtPathUtils$$.arcTo($is3D_rx$$2$$, $gapCount_ry$$2$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir2$$, $ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$4_offset$$16$$[7] - $ar$$4_offset$$16$$[1])) : $barCommands_gamma$$ + D.$DvtPathUtils$$.lineTo($ar$$4_offset$$16$$[6], $ar$$4_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$4_offset$$16$$[7] - 
    $ar$$4_offset$$16$$[1])), $barCommands_gamma$$ += D.$DvtPathUtils$$.closePath(), $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$4_offset$$16$$[0], $ar$$4_offset$$16$$[2]), $ar$$4_offset$$16$$[5] + window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$4_offset$$16$$[0] - $ar$$4_offset$$16$$[2]), window.Math.abs($ar$$4_offset$$16$$[3] - $ar$$4_offset$$16$$[5]) * $barBounds_percent$$1$$))
  }
  return{slice:$delta$$1_pathCommands$$, bar:$barCommands_gamma$$, sliceBounds:$c1_sliceBounds$$, barBounds:$barCommands_gamma$$ ? $barBounds_percent$$1$$ : $c1_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getSliceLabelPosition$$ = function $$JSCompiler_StaticMethods__getSliceLabelPosition$$$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$2$$ = "on" == $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? 0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelHeight$) / 2 : 0, $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_context$) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$2$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$2$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$()]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$5_cmds$$6$$) {
  this.$_startPercent$ = $ar$$5_cmds$$6$$[0];
  this.$_valuePercent$ = $ar$$5_cmds$$6$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ ? $ar$$5_cmds$$6$$[2] : D.$JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$5_cmds$$6$$[3]);
  $ar$$5_cmds$$6$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$5_cmds$$6$$.slice);
  $ar$$5_cmds$$6$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$5_cmds$$6$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $ar$$5_cmds$$6$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$17$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$17$$) {
      return
    }
    this.$IsSelected$ = $selected$$17$$;
    this.$_bar$.$setSelected$($selected$$17$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$17$$)
  }
  var $dims$$9$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$15$$ = $dims$$9$$.$w$;
  $selected$$17$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$15$$ - 3) / $w$$15$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$15$$ * $dims$$9$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$82$$, $availSpace$$58$$, $callback$$37$$, $callbackObj$$14$$) {
  this.Init($chart$$82$$, $availSpace$$58$$, $callback$$37$$, $callbackObj$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$83$$, $availSpace$$59$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$83$$.$_context$);
  this.$chart$ = $chart$$83$$;
  this.$_options$ = $chart$$83$$.$getOptions$();
  this.$_frame$ = $availSpace$$59$$.clone();
  $chart$$83$$.$pieChart$ = this;
  this.$_labelPosition$ = this.$_options$.styleDefaults.sliceLabelPosition;
  "auto" == this.$_labelPosition$ && (this.$_labelPosition$ = "outside");
  this.$_center$ = new D.$DvtPoint$$($availSpace$$59$$.x + window.Math.floor($availSpace$$59$$.$w$ / 2), $availSpace$$59$$.y + window.Math.floor($availSpace$$59$$.$h$ / 2));
  var $radiusScale_slices$$inline_1375$$ = "outside" == this.$_labelPosition$ ? 0.38 : 0.45;
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$59$$.$w$, $availSpace$$59$$.$h$) * $radiusScale_slices$$inline_1375$$);
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$59$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $radiusScale_slices$$inline_1375$$ = [], $seriesIndex$$inline_1378_slice$$inline_1376$$, $seriesIndices$$inline_1377$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_1379$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $i$$inline_1380$$ = 0;$i$$inline_1380$$ < $seriesIndices$$inline_1377$$.length;$i$$inline_1380$$++) {
    $seriesIndex$$inline_1378_slice$$inline_1376$$ = $seriesIndices$$inline_1377$$[$i$$inline_1380$$], D.$DvtChartStyleUtils$$.$isSeriesRendered$(this.$chart$, $seriesIndex$$inline_1378_slice$$inline_1376$$) && ($seriesIndex$$inline_1378_slice$$inline_1376$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_1378_slice$$inline_1376$$), 0 >= $seriesIndex$$inline_1378_slice$$inline_1376$$.getValue() || $radiusScale_slices$$inline_1375$$.push($seriesIndex$$inline_1378_slice$$inline_1376$$))
  }
  0 < $otherValue$$inline_1379$$ && $radiusScale_slices$$inline_1375$$.push(new D.$DvtPieSlice$$(this));
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && $radiusScale_slices$$inline_1375$$.reverse();
  this.$_slices$ = $radiusScale_slices$$inline_1375$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$processEvent$ = function $$DvtPieChart$$$$$processEvent$$($bHide$$inline_1385_event$$102$$) {
  var $objs$$inline_1383_type$$74$$ = $bHide$$inline_1385_event$$102$$.$getType$();
  if($objs$$inline_1383_type$$74$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $objs$$inline_1383_type$$74$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    if($objs$$inline_1383_type$$74$$ = this.$_slices$, $bHide$$inline_1385_event$$102$$ && $objs$$inline_1383_type$$74$$) {
      var $category$$inline_1384$$ = $bHide$$inline_1385_event$$102$$.$_category$;
      $bHide$$inline_1385_event$$102$$ = $bHide$$inline_1385_event$$102$$.$getType$() === D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$;
      for(var $i$$inline_1386$$ = 0;$i$$inline_1386$$ < $objs$$inline_1383_type$$74$$.length;$i$$inline_1386$$++) {
        var $displayables$$inline_9443_obj$$inline_1387$$ = $objs$$inline_1383_type$$74$$[$i$$inline_1386$$];
        if($displayables$$inline_9443_obj$$inline_1387$$ && $displayables$$inline_9443_obj$$inline_1387$$.$getCategories$ && 0 <= D.$DvtArrayUtils$$.$getIndex$($displayables$$inline_9443_obj$$inline_1387$$.$getCategories$(), $category$$inline_1384$$)) {
          var $displayables$$inline_1388$$ = $displayables$$inline_9443_obj$$inline_1387$$.$getDisplayables$($displayables$$inline_1388$$), $displayables$$inline_9443_obj$$inline_1387$$ = $displayables$$inline_1388$$, $bVisible$$inline_9444$$ = !$bHide$$inline_1385_event$$102$$;
          if($displayables$$inline_9443_obj$$inline_1387$$) {
            for(var $i$$inline_9445$$ = 0;$i$$inline_9445$$ < $displayables$$inline_9443_obj$$inline_1387$$.length;$i$$inline_9445$$++) {
              $displayables$$inline_9443_obj$$inline_1387$$[$i$$inline_9445$$].$setVisible$($bVisible$$inline_9444$$)
            }
          }
        }
      }
    }
  }else {
    ("categoryRollOver" == $objs$$inline_1383_type$$74$$ || "categoryRollOut" == $objs$$inline_1383_type$$74$$) && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($bHide$$inline_1385_event$$102$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$7$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$7$$, this.$_slices$)
};
(0,D.$goog$exportSymbol$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $handler$$inline_1434_shadow$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$)), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($handler$$inline_1434_shadow$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = this.$_slices$, $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$, 
  $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = 0, $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ ? $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$.length : 
  0;
  360 < $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ && ($anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ -= 360);
  0 > $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ && ($anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ += 360);
  var $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = 0;
  0 < $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ && ($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ < $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$;$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$++) {
    $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$], $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$.getValue(), 
    $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = 0 == $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ ? 0 : 100 * (window.Math.abs($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$) / $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$), 
    $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ *= 3.6, $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ -= $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$, 0 > $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ && 
    ($anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ += 360), $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$.$setAngleStart$($anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$), $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$.$setAngleExtent$($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$), 
    $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$.$getAngleStart$()
  }
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = 0;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < this.$_slices$.length;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ = this.$_slices$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$];
    $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_chart$);
    $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$getFillColor$();
    $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$getFillPattern$();
    $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ || $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = new D.$DvtPatternFill$$($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$, $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$)
    }else {
      if("gradient" == $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$) {
        var $arRatios$$inline_1412_skin$$inline_1407$$ = $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$.$getSkin$(), $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = "skyros" == $arRatios$$inline_1412_skin$$inline_1407$$ ? 297 : 270, $arBounds$$inline_1413_style$$inline_1409$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$) ? 
        "2D" : "3D", $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$), $arBounds$$inline_1413_style$$inline_1409$$, $arRatios$$inline_1412_skin$$inline_1407$$), $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = 
        D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$), $arBounds$$inline_1413_style$$inline_1409$$), $arRatios$$inline_1412_skin$$inline_1407$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($arBounds$$inline_1413_style$$inline_1409$$, $arRatios$$inline_1412_skin$$inline_1407$$), $arBounds$$inline_1413_style$$inline_1409$$ = 
        [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$.$getCenter$().x - $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$.$getCenter$().y - $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_radiusY$), 
        window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_radiusX$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_radiusY$)], $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = new D.$DvtLinearGradientFill$$($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$, 
        $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$, $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$, $arRatios$$inline_1412_skin$$inline_1407$$, $arBounds$$inline_1413_style$$inline_1409$$)
      }else {
        $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = new D.$DvtSolidFill$$($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$), $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$, 
        0.6))
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$);
    if((0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$) && (0 < $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_pieChart$.$getDepth$() || $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$radiusY$)) {
      $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = ($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = "gradient" == $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ || "pattern" == $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$) ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, D.$DvtPieRenderUtils$$.$SIDE$) : $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$, $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, D.$DvtPieRenderUtils$$.$CRUST$) : $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$, $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, 
      D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$), $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, 
      $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$), $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.$_crustSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$)
    }
  }
  $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ = [];
  $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ ? $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$.length : 0;
  for(var $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = -1, $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$, $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = 0;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    if($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$], $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = 
    $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getAngleStart$(), $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getAngleExtent$(), 
    $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ + $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$, 360 < $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ && 
    ($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ -= 360), 0 > $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ && ($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ += 360), 
    90 == $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ || 90 > $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ && 90 < $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$) {
      $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$;
      $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$ = $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ - 90;
      break
    }
  }
  $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$ = [];
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$.push($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$])
  }
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = 0;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$.push($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$])
  }
  $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ = 0;
  $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$ = 180 + $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$;
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = 0;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    if($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$]) {
      if($accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ + $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getAngleExtent$() > $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$) {
        $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$ = $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.push($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$);
      $accumAngle$$inline_1429_dataTotal$$inline_1398_grAngle$$inline_1408_pattern$$inline_1404_slices$$inline_1418_useGradientFill$$inline_1414$$ += $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getAngleExtent$()
    }
  }
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = $crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ - 1;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ >= $anchorOffset$$inline_1391_angle$$inline_1394_arColors$$inline_1410_lastSliceIndexToProcess$$inline_1430_rotateIdx$$inline_1423_topFill$$inline_1405$$;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$--) {
    ($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = $angleStart$$inline_1424_arAlphas$$inline_1411_arc$$inline_1395_color$$inline_1403_percentage$$inline_1397_rotatedSlices$$inline_1428_value$$inline_1399$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.push($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$)
  }
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = 0;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ < $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$.length;$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$[$i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$].$render$(this.$_duringDisplayAnim$)
  }
  (0,D.$DvtAgent$isPlatformWebkit$$)() || $handler$$inline_1434_shadow$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $handler$$inline_1434_shadow$$);
  if($handler$$inline_1434_shadow$$ = this.$chart$.$getSelectionHandler$()) {
    $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$);
    $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$ = [];
    for($JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$ < $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$.length;$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$++) {
      for($crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ = 0;$crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$ < this.$_slices$.length;$crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$++) {
        ($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$ = this.$_slices$[$crustFill$$inline_1416_j$$inline_1438_lateralFill$$inline_1406_nSlices$$inline_1421_slice$$inline_1393$$].getId()) && ($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$].id && 
        $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.getId() == $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$].id || $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getSeries$() == 
        $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$].series && $angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$.$getGroup$() == $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$[$JSCompiler_StaticMethods_preRender$self$$inline_1401_i$$inline_1392_i$$inline_1437_zOrderedSlices$$inline_1419$$].group) && 
        $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$.push($angleExtent$$inline_1425_fillType$$inline_1402_nSlices$$inline_1396_peerId$$inline_1439_sideFill$$inline_1415_slice$$inline_1422_sliceSpanEnd$$inline_1426$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$) && ($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$.push($i$$149_i$$inline_1420_otherPeerId$$inline_1440_selected$$inline_1435_slices$$inline_1390$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$inline_1434_shadow$$, $accumAngleThreshold$$inline_1431_selectedIds$$inline_1436_sliceSpanBeforeNoon$$inline_1427$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$6$$ = 0, $i$$150$$ = 0;$i$$150$$ < this.$_slices$.length;$i$$150$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$150$$].getValue();
    0 <= $sliceValue$$ && ($total$$6$$ += $sliceValue$$)
  }
  return $total$$6$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
  for(var $anim$$3_handler$$26$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this), $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$ = [], $fillerAnim_i$$153_value$$inline_1443$$ = 0;$fillerAnim_i$$153_value$$inline_1443$$ < this.$_slices$.length;$fillerAnim_i$$153_value$$inline_1443$$++) {
    $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$ = $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)(this.$_slices$[$fillerAnim_i$$153_value$$inline_1443$$]))
  }
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$ = new D.$DvtAnimFadeIn$$(this.$_context$, $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$, this.$getAnimationDuration$());
  $anim$$3_handler$$26$$.add($ar$$3_labelAnim_renderAnim_slice$$inline_1444$$, 0);
  $fillerAnim_i$$153_value$$inline_1443$$ = this.$getTotalValue$();
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$ = new D.$DvtPieSlice$$(this);
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_value$ = $fillerAnim_i$$153_value$$inline_1443$$;
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_fillColor$ = "rgba(255,255,255,0)";
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_strokeColor$ = "rgba(255,255,255,0)";
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_tooltip$ = D.$JSCompiler_alias_NULL$$;
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_id$ = D.$JSCompiler_alias_NULL$$;
  this.$_slices$.push($ar$$3_labelAnim_renderAnim_slice$$inline_1444$$);
  $fillerAnim_i$$153_value$$inline_1443$$ = new D.$DvtCustomAnimation$$(this.$_context$, $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($fillerAnim_i$$153_value$$inline_1443$$.$_animator$, "typeNumberArray", $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$, $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$GetAnimationParams$, $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$SetAnimationParams$, [0, 0, 0, 0]);
  $fillerAnim_i$$153_value$$inline_1443$$.$setOnEnd$($ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_removeDeletedSlice$, $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$);
  $anim$$3_handler$$26$$.add($fillerAnim_i$$153_value$$inline_1443$$, 0);
  for($fillerAnim_i$$153_value$$inline_1443$$ = 0;$fillerAnim_i$$153_value$$inline_1443$$ < this.$_slices$.length - 1;$fillerAnim_i$$153_value$$inline_1443$$++) {
    this.$_slices$[$fillerAnim_i$$153_value$$inline_1443$$].$animateInsert$($anim$$3_handler$$26$$)
  }
  $ar$$3_labelAnim_renderAnim_slice$$inline_1444$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$3_labelAnim_renderAnim_slice$$inline_1444$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$3_handler$$26$$.add($ar$$3_labelAnim_renderAnim_slice$$inline_1444$$, 0);
  this.$_setAnimationParams$();
  $anim$$3_handler$$26$$ = $anim$$3_handler$$26$$.$getAnimation$();
  $anim$$3_handler$$26$$.$setOnEnd$(this.$_restoreLabelPosition$, this);
  return $anim$$3_handler$$26$$
};
D.$JSCompiler_prototypeAlias$$.$_restoreLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$_restoreLabelPosition$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getDepth$ = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$27$$, $oldPie$$) {
  var $anim$$4_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$4_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$4_sliceAnim_sliceHandler$$ = $anim$$4_sliceAnim_sliceHandler$$.$getAnimation$(), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$4_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$_context$, $anim$$4_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$4_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$27$$.add($anim$$4_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[1]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$() {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$5$$) {
  var $par$$2$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$;
  if($par$$2$$) {
    var $parentChildCount$$2$$ = $par$$2$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$2$$.removeChild($slice$$5$$.$_topSurface$[0]), $par$$2$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$6$$) {
  for(var $len$$1_par$$3$$ = this.$_slices$.length, $counter_newIndex$$4$$ = 0, $i$$154$$ = 0;$i$$154$$ < $len$$1_par$$3$$;$i$$154$$++) {
    this.$_slices$[$i$$154$$].$isSelected$() && $counter_newIndex$$4$$++
  }
  this.$_numSelectedObjsInFront$ = $counter_newIndex$$4$$;
  if($len$$1_par$$3$$ = $slice$$6$$.$_pieChart$.$_shapesContainer$) {
    $counter_newIndex$$4$$ = $len$$1_par$$3$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter_newIndex$$4$$ && ($len$$1_par$$3$$.removeChild($slice$$6$$.$_topSurface$[0]), $len$$1_par$$3$$.$addChildAt$($slice$$6$$.$_topSurface$[0], $counter_newIndex$$4$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$1$$, $seriesIndex$$25$$) {
  this.Init($pieChart$$1$$, $seriesIndex$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$2$$, $seriesIndex$$26$$) {
  this.$_pieChart$ = $pieChart$$2$$;
  this.$_chart$ = $pieChart$$2$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = D.$JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = D.$JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  var $dataItem$$8_options$$100$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$26$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$8_options$$100$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$26$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$26$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$26$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$26$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
  $seriesIndex$$26$$, 0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$26$$), this.$_customLabel$ = $dataItem$$8_options$$100$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$26$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $seriesIndex$$26$$, 0), this.$_action$ = $dataItem$$8_options$$100$$.action, this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$8_options$$100$$._id), 
  this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$26$$), this.$_seriesIndex$ = $seriesIndex$$26$$) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$8_options$$100$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$8_options$$100$$.styleDefaults.borderColor, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_chart$.$getBundle$(), 
  "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$), this.$_action$ = D.$JSCompiler_alias_NULL$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$) {
  var $i$$166_topSurface$$inline_1508$$ = this.$_topSurface$, $leftSurface$$inline_1509_len$$2$$ = this.$_leftSurface$, $rightSurface$$inline_1510_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_1511_shapeCount$$ = this.$_crustSurface$, $angleStart$$inline_1512_j$$29$$ = this.$_angleStart$, $angleExtent$$inline_1513$$ = this.$_angleExtent$, $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$ = [];
  $leftSurface$$inline_1509_len$$2$$ && ($rightSurface$$inline_1510_shapeArray$$ && $crustSurface$$inline_1511_shapeCount$$) && (270 >= $angleStart$$inline_1512_j$$29$$ && 270 < $angleStart$$inline_1512_j$$29$$ + $angleExtent$$inline_1513$$ ? ($feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($leftSurface$$inline_1509_len$$2$$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($rightSurface$$inline_1510_shapeArray$$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($crustSurface$$inline_1511_shapeCount$$)) : 
  270 < $angleStart$$inline_1512_j$$29$$ || 90 >= $angleStart$$inline_1512_j$$29$$ + $angleExtent$$inline_1513$$ ? ($feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($leftSurface$$inline_1509_len$$2$$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($crustSurface$$inline_1511_shapeCount$$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($rightSurface$$inline_1510_shapeArray$$)) : ($feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($rightSurface$$inline_1510_shapeArray$$), 
  $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($crustSurface$$inline_1511_shapeCount$$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($leftSurface$$inline_1509_len$$2$$)));
  $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.push($i$$166_topSurface$$inline_1508$$);
  $leftSurface$$inline_1509_len$$2$$ = $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$.length;
  for($i$$166_topSurface$$inline_1508$$ = 0;$i$$166_topSurface$$inline_1508$$ < $leftSurface$$inline_1509_len$$2$$;$i$$166_topSurface$$inline_1508$$++) {
    $rightSurface$$inline_1510_shapeArray$$ = $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$[$i$$166_topSurface$$inline_1508$$];
    $crustSurface$$inline_1511_shapeCount$$ = $rightSurface$$inline_1510_shapeArray$$.length;
    for($angleStart$$inline_1512_j$$29$$ = 0;$angleStart$$inline_1512_j$$29$$ < $crustSurface$$inline_1511_shapeCount$$;$angleStart$$inline_1512_j$$29$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($rightSurface$$inline_1510_shapeArray$$[$angleStart$$inline_1512_j$$29$$]), $rightSurface$$inline_1510_shapeArray$$[$angleStart$$inline_1512_j$$29$$].$render$ && $rightSurface$$inline_1510_shapeArray$$[$angleStart$$inline_1512_j$$29$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), "outside" == this.$_pieChart$.$getLabelPosition$() && ($displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, 
  this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_1518_sortedSurfaces$$inline_1514$$)));
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this);
  if(this.$_action$) {
    $displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$ = this.$getDisplayables$();
    for($i$$166_topSurface$$inline_1508$$ = 0;$i$$166_topSurface$$inline_1508$$ < $displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$.length;$i$$166_topSurface$$inline_1508$$++) {
      $displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$[$i$$166_topSurface$$inline_1508$$].setCursor("pointer")
    }
  }
  if($displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this)) {
    $displayable$$29_duringDisplayAnim_feelerRad$$inline_1517_sliceDisplayables$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler_pt1$$, $color$$18_pt2_stroke$$17$$) {
  $feeler_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$_context$, $feeler_pt1$$.x, $feeler_pt1$$.y, $color$$18_pt2_stroke$$17$$.x, $color$$18_pt2_stroke$$17$$.y);
  $color$$18_pt2_stroke$$17$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$18_pt2_stroke$$17$$ = new D.$DvtSolidStroke$$($color$$18_pt2_stroke$$17$$);
  $feeler_pt1$$.$setStroke$($color$$18_pt2_stroke$$17$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler_pt1$$);
  return $feeler_pt1$$
};
D.$JSCompiler_StaticMethods__explodeSlice$$ = function $$JSCompiler_StaticMethods__explodeSlice$$$($JSCompiler_StaticMethods__explodeSlice$self$$) {
  if(0 != $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$) {
    var $oldStartX_radian$$ = (360 - ($JSCompiler_StaticMethods__explodeSlice$self$$.$_angleStart$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $oldStartY_tilt$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) ? 0.59 : 1, $explodeOffset_newStartX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$ * $JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$.$_radiusX$ * (0.5 / 
    0.45 - 1);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.cos($oldStartX_radian$$) * $explodeOffset_newStartX$$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.sin($oldStartX_radian$$) * $oldStartY_tilt$$ * $explodeOffset_newStartX$$;
    (0,D.$DvtAgent$isPlatformWebkit$$)() && ($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$))
  }else {
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = 0, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = 0
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  if($JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$) {
    var $oldStartX_radian$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.x, $oldStartY_tilt$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.y, $explodeOffset_newStartX$$ = $oldStartX_radian$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $newStartY$$ = $oldStartY_tilt$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX1$($explodeOffset_newStartX$$);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY1$($newStartY$$);
    var $oldMidX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.x, $oldMidY$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.y;
    0 < $oldMidX$$ - $oldStartX_radian$$ != 0 < $oldMidX$$ - $explodeOffset_newStartX$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($explodeOffset_newStartX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($explodeOffset_newStartX$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($oldMidX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($oldMidX$$));
    0 < $oldMidY$$ - $oldStartY_tilt$$ != 0 < $oldMidY$$ - $newStartY$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($newStartY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($newStartY$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($oldMidY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($oldMidY$$))
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$ && !$JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$)
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$4$$, $tx$$1$$, $ty$$1$$) {
  if($shapes$$4$$) {
    for(var $len$$3$$ = $shapes$$4$$.length, $i$$167$$ = 0;$i$$167$$ < $len$$3$$;$i$$167$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$4$$[$i$$167$$], $tx$$1$$, $ty$$1$$)
    }
  }
};
D.$DvtPieSlice$$.prototype.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$DvtPieSlice$$.prototype.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$6$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$6$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$6$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$6$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$6$$
};
D.$DvtPieSlice$$.prototype.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$DvtPieSlice$$.prototype.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$DvtPieSlice$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtPieSlice$$.prototype.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$DvtPieSlice$_shapeIsSelectable$$ = function $$DvtPieSlice$_shapeIsSelectable$$$($shape$$14$$) {
  return $shape$$14$$ instanceof D.$DvtGraphSelectableArc$$ || $shape$$14$$ instanceof D.$DvtGraphSelectablePolygon$$ || $shape$$14$$ instanceof D.$DvtGraphSelectablePath$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$131$$, $y$$103$$) {
  for(var $c$$14_sin$$ = this.$_pieChart$.$getCenter$(), $cos$$ = ($x$$131$$ - $c$$14_sin$$.x) / this.$_radiusX$, $c$$14_sin$$ = ($y$$103$$ - $c$$14_sin$$.y) / this.$_radiusY$, $angle$$12_containsAngle$$ = -window.Math.atan2($c$$14_sin$$, $cos$$) * (180 / window.Math.PI);$angle$$12_containsAngle$$ < this.$_angleStart$;) {
    $angle$$12_containsAngle$$ += 360
  }
  for(;360 <= $angle$$12_containsAngle$$ - this.$_angleStart$;) {
    $angle$$12_containsAngle$$ -= 360
  }
  $angle$$12_containsAngle$$ = $angle$$12_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return 1 >= window.Math.pow($cos$$, 2) + window.Math.pow($c$$14_sin$$, 2) && $angle$$12_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$21$$) {
  this.$_value$ = $params$$21$$[0];
  this.$_radiusX$ = $params$$21$$[1];
  this.$_radiusY$ = $params$$21$$[2];
  this.$_explode$ = $params$$21$$[3]
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$30$$, $oldSlice$$) {
  var $startState$$6$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$13$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$6$$, $endState$$13$$)) {
    var $anim$$5$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$5$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$13$$);
    $handler$$30$$.add($anim$$5$$, 0);
    this.$SetAnimationParams$($startState$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$31$$) {
  var $anim$$6$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$6$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$31$$.add($anim$$6$$, 0);
  this.$SetAnimationParams$([0, 0, 0, 0])
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$32$$, $container$$83$$) {
  var $anim$$7_newSlices$$ = $container$$83$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$168_prevIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$168_prevIndex$$2$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$168_prevIndex$$2$$].getId();
    for($i$$168_prevIndex$$2$$ = 0;$i$$168_prevIndex$$2$$ < $anim$$7_newSlices$$.length;$i$$168_prevIndex$$2$$++) {
      if($anim$$7_newSlices$$[$i$$168_prevIndex$$2$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$7_newSlices$$.splice($i$$168_prevIndex$$2$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$7_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$83$$;
  $anim$$7_newSlices$$ = new D.$DvtCustomAnimation$$($container$$83$$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$7_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, [0, 0, 0, 0]);
  $anim$$7_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$32$$.add($anim$$7_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$61$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$61$$ && $slices$$3$$.splice($index$$61$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$35$$ = [];
  this.$_topSurface$ && ($ret$$35$$ = $ret$$35$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$35$$ = $ret$$35$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$35$$ = $ret$$35$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$35$$ = $ret$$35$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$35$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$35$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$35$$.push(this.$_feelerHoriz$);
  return $ret$$35$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $bundle$$4$$ = this.$_chart$.$getBundle$(), $percentage$$1_tooltip$$9$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$(this, "percent"), $percentage$$1_tooltip$$9$$ = this.$getTooltip$() + "; " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4$$, "LABEL_PERCENTAGE", $percentage$$1_tooltip$$9$$), $states$$6$$ = [];
  this.$isSelectable$() && $states$$6$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4$$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($percentage$$1_tooltip$$9$$, $states$$6$$, $bundle$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$30$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this);
  $displayable$$30$$ && !(0,D.$DvtAgent$deferAriaCreation$$)() && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$30$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_StaticMethods_getTopDisplayable$$ = function $$JSCompiler_StaticMethods_getTopDisplayable$$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getPhysicalShape$$ = function $$JSCompiler_StaticMethods_getPhysicalShape$$$($JSCompiler_StaticMethods_getPhysicalShape$self$$, $obj$$72$$) {
  $obj$$72$$.$setDataColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$));
  $obj$$72$$.setCursor("pointer");
  return $obj$$72$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1_explode$$) {
  (this.$_selected$ = $bSelected$$1_explode$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  if(D.$DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
    for(var $anim$$8_shapeArr$$ = this.$getDisplayables$(), $i$$169$$ = 0;$i$$169$$ < $anim$$8_shapeArr$$.length;$i$$169$$++) {
      (0,D.$DvtPieSlice$_shapeIsSelectable$$)($anim$$8_shapeArr$$[$i$$169$$]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $anim$$8_shapeArr$$[$i$$169$$]).$setSelected$($bSelected$$1_explode$$)
    }
  }
  D.$DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($bSelected$$1_explode$$ = $bSelected$$1_explode$$ ? 1 : 0, "none" != D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($anim$$8_shapeArr$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$() / 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$8_shapeArr$$.$_animator$, "typeNumber", this, this.$getExplode$, this.$setExplode$, $bSelected$$1_explode$$), $anim$$8_shapeArr$$.play()) : 
  this.$setExplode$($bSelected$$1_explode$$));
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  for(var $shapeArr$$1$$ = this.$getDisplayables$(), $i$$170$$ = 0;$i$$170$$ < $shapeArr$$1$$.length;$i$$170$$++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$1$$[$i$$170$$]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$1$$[$i$$170$$]).$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  for(var $shapeArr$$2$$ = this.$getDisplayables$(), $i$$171$$ = 0;$i$$171$$ < $shapeArr$$2$$.length;$i$$171$$++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$2$$[$i$$171$$]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$2$$[$i$$171$$]).$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$48$$) {
  return $target$$48$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$105$$) {
  if($event$$105$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$105$$.keyCode && $event$$105$$.ctrlKey) {
    return this
  }
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$9$$ = $slices$$4$$.indexOf(this), $next$$11$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$105$$.keyCode ? $next$$11$$ = $idx$$9$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$9$$ + 1] : $slices$$4$$[0] : 37 == $event$$105$$.keyCode && ($next$$11$$ = 0 == $idx$$9$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$9$$ - 1]);
  return $next$$11$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$12$$) {
  var $displayables$$7$$ = this.$getDisplayables$();
  return $displayables$$7$$[0] ? $displayables$$7$$[0].$getDimensions$($targetCoordinateSpace$$12$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$8$$ = this.$getDisplayables$();
  return $displayables$$8$$[0] ? $displayables$$8$$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getExplode$ = (0,D.$JSCompiler_get$$)("$_explode$");
D.$JSCompiler_prototypeAlias$$.$setExplode$ = function $$JSCompiler_prototypeAlias$$$$setExplode$$($explode$$1$$) {
  this.$_explode$ = $explode$$1$$;
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($context$$95$$, $callback$$40$$, $callbackObj$$17$$, $id$$45$$, $oldChart$$7$$) {
  this.Init($context$$95$$, $callback$$40$$, $callbackObj$$17$$);
  this.$_chart$ = $oldChart$$7$$;
  this.$_id$ = $id$$45$$ + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$98$$, $width$$40$$, $glassPane$$inline_1459_height$$37$$) {
  $options$$98$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$98$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$98$$.animationOnClick = "off";
  var $options$$inline_1456$$ = $options$$98$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_chartContainer$);
  $options$$inline_1456$$ = D.$DvtJSONUtils$$.$merge$({zoomAndScroll:"off", legend:{rendered:"off"}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off"}, y2Axis:{rendered:"off"}, title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, 
  titleSeparator:{rendered:"off"}, layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:D.$JSCompiler_alias_TRUE$$}, $options$$inline_1456$$);
  "disabled" == $options$$inline_1456$$.timeAxisType && ($options$$inline_1456$$.xAxis.tickLabel.rendered = "off");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$_context$), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_1456$$, $width$$40$$, $glassPane$$inline_1459_height$$37$$);
  $glassPane$$inline_1459_height$$37$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$40$$, $glassPane$$inline_1459_height$$37$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_1459_height$$37$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_1459_height$$37$$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_chart$.$getEventManager$(), D.$JSCompiler_alias_NULL$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$98$$, $width$$40$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($chart$$63$$, $arPlayables_type$$73$$, $duration$$7$$) {
  $arPlayables_type$$73$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$63$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($chart$$63$$, $duration$$7$$, $arPlayables_type$$73$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$63$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$63$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($chart$$63$$, $duration$$7$$, $arPlayables_type$$73$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($chart$$63$$) && $chart$$63$$.$pieChart$) {
        return $chart$$63$$.$pieChart$.$getDisplayAnimation$()
      }
    }
  }
  return 0 < $arPlayables_type$$73$$.length ? new D.$DvtParallelPlayable$$($chart$$63$$.$_context$, $arPlayables_type$$73$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$64$$, $duration$$8$$, $arPlayables$$1$$) {
  var $objs$$ = $chart$$64$$.$getObjects$(), $objCount$$ = $objs$$ ? $objs$$.length : 0;
  if($objCount$$) {
    for(var $obj$$67$$, $nodePlayable$$2_peer$$10$$, $i$$135$$ = 0;$i$$135$$ < $objCount$$;$i$$135$$++) {
      $nodePlayable$$2_peer$$10$$ = $objs$$[$i$$135$$];
      $obj$$67$$ = $nodePlayable$$2_peer$$10$$.$getDisplayables$()[0];
      var $seriesType$$2$$ = $nodePlayable$$2_peer$$10$$.$getSeriesType$();
      $nodePlayable$$2_peer$$10$$ = D.$JSCompiler_alias_NULL$$;
      $obj$$67$$ instanceof D.$DvtChartBar$$ || $obj$$67$$ instanceof D.$DvtChartPolarBar$$ ? $nodePlayable$$2_peer$$10$$ = $obj$$67$$.$getDisplayAnimation$($duration$$8$$) : $obj$$67$$ instanceof D.$DvtChartLineArea$$ ? $nodePlayable$$2_peer$$10$$ = "line" == $seriesType$$2$$ ? D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$64$$, $obj$$67$$, $duration$$8$$) : D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$64$$, $obj$$67$$, $duration$$8$$) : $obj$$67$$ instanceof D.$DvtMarker$$ && ($nodePlayable$$2_peer$$10$$ = 
      new D.$DvtAnimFadeIn$$($chart$$64$$.$_context$, $obj$$67$$, $duration$$8$$ - 0.8, 0.8));
      $nodePlayable$$2_peer$$10$$ && $arPlayables$$1$$.push($nodePlayable$$2_peer$$10$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$65$$, $duration$$9$$, $arPlayables$$2$$) {
  var $objs$$1$$ = $chart$$65$$.$getObjects$(), $objCount$$1$$ = $objs$$1$$ ? $objs$$1$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$68_peer$$11$$, $nodePlayable$$3$$, $i$$136$$ = 0;$i$$136$$ < $objCount$$1$$;$i$$136$$++) {
      $obj$$68_peer$$11$$ = $objs$$1$$[$i$$136$$], $obj$$68_peer$$11$$ = $obj$$68_peer$$11$$.$getDisplayables$()[0], $obj$$68_peer$$11$$ instanceof D.$DvtMarker$$ ? $nodePlayable$$3$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$65$$) ? D.$DvtAnimOnDisplay$$.$_getBubblePlayable$($chart$$65$$, $obj$$68_peer$$11$$, $duration$$9$$) : D.$DvtAnimOnDisplay$$.$_getScatterPlayable$($chart$$65$$, $obj$$68_peer$$11$$, $duration$$9$$) : $obj$$68_peer$$11$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$3$$ = 
      D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$65$$, $obj$$68_peer$$11$$, $duration$$9$$)), $nodePlayable$$3$$ && $arPlayables$$2$$.push($nodePlayable$$3$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$66_nodePlayable$$4$$, $shape$$12$$, $duration$$10_topAnim$$) {
  var $context$$85$$ = $chart$$66_nodePlayable$$4$$.$_context$, $baselineCoord$$1$$ = $shape$$12$$.$_baseline$, $baseAnim_baseParams$$;
  if($shape$$12$$.$isArea$()) {
    var $baseCoords$$ = $shape$$12$$.$_arBaseCoord$;
    $baseAnim_baseParams$$ = $shape$$12$$.$getBaseAnimationParams$();
    for(var $baseEndState_endState$$2$$ = $baseAnim_baseParams$$.slice(0), $j$$25$$ = 0;$j$$25$$ < $baseAnim_baseParams$$.length;$j$$25$$++) {
      if(1 == $j$$25$$ % 4 || 2 == $j$$25$$ % 4) {
        $baseAnim_baseParams$$[$j$$25$$] = $baselineCoord$$1$$
      }
    }
    $shape$$12$$.$setBaseAnimationParams$($baseAnim_baseParams$$);
    $baseAnim_baseParams$$ = new D.$DvtCustomAnimation$$($context$$85$$, $shape$$12$$, $duration$$10_topAnim$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim_baseParams$$.$_animator$, "typeNumberArray", $shape$$12$$, $shape$$12$$.$getBaseAnimationParams$, $shape$$12$$.$setBaseAnimationParams$, $baseEndState_endState$$2$$)
  }
  for(var $coords$$5$$ = $shape$$12$$.$_arCoord$, $params$$9$$ = $shape$$12$$.$getAnimationParams$(), $baseEndState_endState$$2$$ = $params$$9$$.slice(0), $j$$25$$ = 0;$j$$25$$ < $params$$9$$.length;$j$$25$$++) {
    if(1 == $j$$25$$ % 4 || 2 == $j$$25$$ % 4) {
      $params$$9$$[$j$$25$$] = $baselineCoord$$1$$
    }
  }
  $shape$$12$$.$setAnimationParams$($params$$9$$);
  $duration$$10_topAnim$$ = new D.$DvtCustomAnimation$$($context$$85$$, $shape$$12$$, $duration$$10_topAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$10_topAnim$$.$_animator$, "typeNumberArray", $shape$$12$$, $shape$$12$$.$getAnimationParams$, $shape$$12$$.$setAnimationParams$, $baseEndState_endState$$2$$);
  $chart$$66_nodePlayable$$4$$ = new D.$DvtParallelPlayable$$($chart$$66_nodePlayable$$4$$.$_context$, $baseAnim_baseParams$$, $duration$$10_topAnim$$);
  $chart$$66_nodePlayable$$4$$.$setOnEnd$(function() {
    $shape$$12$$.$setCoords$($coords$$5$$, $baseCoords$$)
  });
  return $chart$$66_nodePlayable$$4$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$67_context$$86$$, $slice$$1$$, $duration$$11_nodePlayable2$$) {
  $chart$$67_context$$86$$ = $chart$$67_context$$86$$.$_context$;
  var $arPoints$$2_nodePlayable1$$ = $slice$$1$$.$getAnimationParams$(), $endState1$$ = $arPoints$$2_nodePlayable1$$.slice(0), $endState2$$ = $arPoints$$2_nodePlayable1$$.slice(0);
  $arPoints$$2_nodePlayable1$$[0] = 0;
  $arPoints$$2_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$1$$.$setAnimationParams$($arPoints$$2_nodePlayable1$$);
  $arPoints$$2_nodePlayable1$$ = new D.$DvtCustomAnimation$$($chart$$67_context$$86$$, $slice$$1$$, $duration$$11_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($arPoints$$2_nodePlayable1$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState1$$);
  $duration$$11_nodePlayable2$$ = new D.$DvtCustomAnimation$$($chart$$67_context$$86$$, $slice$$1$$, $duration$$11_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$11_nodePlayable2$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState2$$);
  return new D.$DvtSequentialPlayable$$($chart$$67_context$$86$$, [$arPoints$$2_nodePlayable1$$, $duration$$11_nodePlayable2$$])
};
D.$DvtAnimOnDisplay$$.$_getBubblePlayable$ = function $$DvtAnimOnDisplay$$$$_getBubblePlayable$$($chart$$68_context$$87$$, $marker$$5_p3$$1$$, $duration$$12$$) {
  $chart$$68_context$$87$$ = $chart$$68_context$$87$$.$_context$;
  var $endScale_p1$$2$$ = new D.$DvtPoint$$($marker$$5_p3$$1$$.$getScaleX$(), $marker$$5_p3$$1$$.$getScaleY$());
  $marker$$5_p3$$1$$.$setScale$(1, 1);
  var $endScale_p1$$2$$ = new D.$DvtAnimScaleBy$$($chart$$68_context$$87$$, $marker$$5_p3$$1$$, $endScale_p1$$2$$, $duration$$12$$), $p2$$2$$ = new D.$DvtAnimFadeIn$$($chart$$68_context$$87$$, $marker$$5_p3$$1$$, $duration$$12$$), $size$$16$$ = $marker$$5_p3$$1$$.$getSize$(), $matrix$$8$$ = $marker$$5_p3$$1$$.$getMatrix$().clone();
  $matrix$$8$$.translate($size$$16$$ / 2, $size$$16$$ / 2);
  $marker$$5_p3$$1$$.$setMatrix$($matrix$$8$$);
  $marker$$5_p3$$1$$ = new D.$DvtAnimMoveBy$$($chart$$68_context$$87$$, $marker$$5_p3$$1$$, new D.$DvtPoint$$(-$size$$16$$ / 2, -$size$$16$$ / 2), $duration$$12$$);
  return new D.$DvtParallelPlayable$$($chart$$68_context$$87$$, [$endScale_p1$$2$$, $p2$$2$$, $marker$$5_p3$$1$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$69_nodePlayable$$5$$, $line$$7$$, $duration$$13$$) {
  var $coords$$6$$ = $line$$7$$.$_arCoord$, $params$$10$$ = $line$$7$$.$getAnimationParams$(), $endState$$3$$ = $params$$10$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($params$$10$$);
  $line$$7$$.$setAnimationParams$($params$$10$$);
  $chart$$69_nodePlayable$$5$$ = new D.$DvtCustomAnimation$$($chart$$69_nodePlayable$$5$$.$_context$, $line$$7$$, $duration$$13$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$69_nodePlayable$$5$$.$_animator$, "typeNumberArray", $line$$7$$, $line$$7$$.$getAnimationParams$, $line$$7$$.$setAnimationParams$, $endState$$3$$);
  $chart$$69_nodePlayable$$5$$.$setOnEnd$(function() {
    $line$$7$$.$setCoords$($coords$$6$$)
  });
  return $chart$$69_nodePlayable$$5$$
};
D.$DvtAnimOnDisplay$$.$_getScatterPlayable$ = function $$DvtAnimOnDisplay$$$$_getScatterPlayable$$($chart$$70$$, $marker$$6$$, $duration$$14$$) {
  return new D.$DvtAnimPopIn$$($chart$$70$$.$_context$, $marker$$6$$, D.$JSCompiler_alias_TRUE$$, $duration$$14$$)
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($params$$11$$) {
  var $mean$$ = 0, $min$$2$$ = window.Number.MAX_VALUE, $max$$2$$ = window.Number.MIN_VALUE, $len$$ = $params$$11$$.length, $i$$137$$;
  for($i$$137$$ = 0;$i$$137$$ < $len$$;$i$$137$$++) {
    var $v$$ = $params$$11$$[$i$$137$$];
    0 == $i$$137$$ % 4 || (3 == $i$$137$$ % 4 || window.Infinity == $v$$) || ($v$$ < $min$$2$$ && ($min$$2$$ = $v$$), $v$$ > $max$$2$$ && ($max$$2$$ = $v$$), $mean$$ += $v$$)
  }
  8 < $len$$ ? ($mean$$ = $mean$$ - 2 * $min$$2$$ - 2 * $max$$2$$, $mean$$ /= $len$$ / 2 - 4) : $mean$$ /= $len$$ / 2;
  for($i$$137$$ = 0;$i$$137$$ < $len$$;$i$$137$$++) {
    if(1 == $i$$137$$ % 4 || 2 == $i$$137$$ % 4) {
      $params$$11$$[$i$$137$$] = $mean$$
    }
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$15_oldChart$$1$$, $newChart$$1$$, $arOldList_type$$72$$, $duration$$5$$, $delContainer$$2$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$15_oldChart$$1$$, $newChart$$1$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ctx$$1$$ = $newChart$$1$$.$_context$;
  $arOldList_type$$72$$ = [];
  var $arNewList$$ = [];
  D.$DvtChartTypeUtils$$.$isPie$($newChart$$1$$) ? ($arOldList_type$$72$$.push($handler$$15_oldChart$$1$$.$pieChart$), $arNewList$$.push($newChart$$1$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList_type$$72$$, $handler$$15_oldChart$$1$$, $arNewList$$, $newChart$$1$$, $duration$$5$$);
  var $playable$$12$$;
  $handler$$15_oldChart$$1$$ = new D.$DvtDataAnimationHandler$$($ctx$$1$$, $delContainer$$2$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$15_oldChart$$1$$, $arOldList_type$$72$$, $arNewList$$);
  0 < $handler$$15_oldChart$$1$$.$_playables$.length && ($playable$$12$$ = $handler$$15_oldChart$$1$$.$getAnimation$());
  return $playable$$12$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$134$$, $oldChart$$2$$, $arNewList$$1$$, $newChart$$2$$, $duration$$6$$) {
  var $j$$24$$, $ar$$2$$ = $oldChart$$2$$.$peers$, $aOut$$ = $arOldList$$1_i$$134$$, $peer$$9$$, $obj$$66$$, $dch$$;
  for($arOldList$$1_i$$134$$ = 0;2 > $arOldList$$1_i$$134$$;$arOldList$$1_i$$134$$++) {
    for($j$$24$$ = 0;$j$$24$$ < $ar$$2$$.length;$j$$24$$++) {
      $peer$$9$$ = $ar$$2$$[$j$$24$$], $obj$$66$$ = $peer$$9$$.$getDisplayables$()[0], $dch$$ = D.$JSCompiler_alias_NULL$$, $obj$$66$$ instanceof D.$DvtFunnelSlice$$ ? $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$9$$, $duration$$6$$) : $obj$$66$$ instanceof D.$DvtChartBar$$ || $obj$$66$$ instanceof D.$DvtChartPolarBar$$ ? $dch$$ = new D.$DvtDCChart2DBar$$($peer$$9$$, $duration$$6$$) : $obj$$66$$ instanceof D.$DvtChartLineArea$$ ? $dch$$ = new D.$DvtDCChartLineArea$$($peer$$9$$, $duration$$6$$) : $obj$$66$$ instanceof 
      D.$DvtMarker$$ && ($dch$$ = new D.$DvtDCChartMarker$$($peer$$9$$, $duration$$6$$)), $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$2$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$2$$ = $newChart$$2$$.$getObjects$()
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$3$$, $newChart$$3$$) {
  return D.$DvtChartTypeUtils$$.$isPie$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isPie$($newChart$$3$$) ? $oldChart$$3$$ && $newChart$$3$$ : D.$DvtChartTypeUtils$$.$isBLAC$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isBLAC$($newChart$$3$$) ? D.$JSCompiler_alias_TRUE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($newChart$$3$$) ? D.$JSCompiler_alias_TRUE$$ : $oldChart$$3$$.$getType$() == $newChart$$3$$.$getType$() ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$
};
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$5$$, $duration$$1$$) {
  this.Init($peer$$5$$, $duration$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$6$$, $duration$$2$$) {
  this.$_peer$ = $peer$$6$$;
  this.$_updateDuration$ = 0.75 * $duration$$2$$;
  this.$_insertDuration$ = 0.5 * $duration$$2$$;
  this.$_deleteDuration$ = 0.5 * $duration$$2$$;
  this.$_shape$ = $peer$$6$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$6$$.$getSeries$() + "/" + $peer$$6$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$7$$, $duration$$3$$) {
  this.Init($peer$$7$$, $duration$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$8$$, $duration$$4$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$8$$, $duration$$4$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_animId$ += "/bar"
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$12$$) {
  var $playable$$10$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$12$$.add($playable$$10$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$13$$, $delContainer$$1$$) {
  $delContainer$$1$$.$addChild$(this.$_shape$);
  var $playable$$11$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$13$$.add($playable$$11$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$14$$, $oldDC$$) {
  var $nodePlayable$$1_startState$$1$$ = $oldDC$$.$_getAnimationParams$(), $endState$$1$$ = this.$_getAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$1_startState$$1$$, $endState$$1$$)) {
    var $oldChart$$ = this.$_oldChart$, $newChart$$ = this.$_peer$.$_chart$, $newSIdx$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdx$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$ = $oldDC$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$) && (this.$_indicator$ = D.$DvtDCChartUtils$$.$makeIndicator$($oldChart$$, $oldSIdx$$, $oldGIdx$$, $newChart$$, $newSIdx$$, $newGIdx$$));
    this.$_setAnimationParams$($nodePlayable$$1_startState$$1$$);
    $nodePlayable$$1_startState$$1$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$1_startState$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$1$$);
    this.$_indicator$ && ($nodePlayable$$1_startState$$1$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$14$$.add($nodePlayable$$1_startState$$1$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$1$$) {
  this.$_shape$.$setAnimationParams$($ar$$1$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$16$$, $duration$$19$$) {
  this.Init($peer$$16$$, $duration$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$22$$, $oldDC$$4$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$138_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$12_oldChart$$6$$ = this.$_oldChart$, $newChart$$6$$ = this.$_chart$, $newSIdx$$4$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$4$$ = $oldDC$$4$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)(this.$_shape$, $oldDC$$4$$.$_shape$), $oldGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)($oldDC$$4$$.$_shape$, this.$_shape$), $baseAnim$$1$$;
  if($i$$138_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$ = $oldDC$$4$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$ = this.$_getBaseAnimationParams$($oldDC$$4$$.$_shape$);
    (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$);
    D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$), $baseAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$))
  }
  var $topAnim$$1$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$ = $oldDC$$4$$.$_getAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$ = this.$_getAnimationParams$($oldDC$$4$$.$_shape$);
  (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$);
  D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$), $topAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($topAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, 
  this.$_setAnimationParams$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$));
  if("none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$6$$) && !($i$$138_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$4_direction$$inline_1349$$, $indicator$$7_indicator$$inline_1350$$, $i$$138_isArea$$ = 0;$i$$138_isArea$$ < $newGIdcs$$.length;$i$$138_isArea$$++) {
      if($direction$$4_direction$$inline_1349$$ = D.$DvtDCChartUtils$$.$getDirection$($nodePlayable$$12_oldChart$$6$$, $oldSIdx$$4$$, $oldGIdcs$$[$i$$138_isArea$$], $newChart$$6$$, $newSIdx$$4$$, $newGIdcs$$[$i$$138_isArea$$]), $indicator$$7_indicator$$inline_1350$$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$12_oldChart$$6$$, $oldSIdx$$4$$, $oldGIdcs$$[$i$$138_isArea$$], $newChart$$6$$, $newSIdx$$4$$, $newGIdcs$$[$i$$138_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$ = this.$_shape$, $baseEndState$$1_endState$$7_groupIndex$$inline_1348$$ = $newGIdcs$$[$i$$138_isArea$$], $indicator$$7_indicator$$inline_1350$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_1347_baseStartState_startState$$5$$.$_indicatorMap$[$baseEndState$$1_endState$$7_groupIndex$$inline_1348$$] = {direction:$direction$$4_direction$$inline_1349$$, $indicator$:$indicator$$7_indicator$$inline_1350$$}
      }
    }
  }
  if($baseAnim$$1$$ || $topAnim$$1$$) {
    $nodePlayable$$12_oldChart$$6$$ = new D.$DvtParallelPlayable$$(this.$_context$, $baseAnim$$1$$, $topAnim$$1$$), $nodePlayable$$12_oldChart$$6$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$22$$.add($nodePlayable$$12_oldChart$$6$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$23$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$13$$ = new D.$DvtAnimFadeIn$$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$23$$.add($nodePlayable$$13$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$24$$, $delContainer$$5$$) {
  var $areaContainer$$1_nodePlayable$$14$$;
  "area" == D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer$$1_nodePlayable$$14$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer$$1_nodePlayable$$14$$ && ($areaContainer$$1_nodePlayable$$14$$.$addChild$(this.$_deletedAreas$), $areaContainer$$1_nodePlayable$$14$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer$$1_nodePlayable$$14$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$24$$.add($areaContainer$$1_nodePlayable$$14$$, 0))) : ($delContainer$$5$$.$addChild$(this.$_shape$), $areaContainer$$1_nodePlayable$$14$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$24$$.add($areaContainer$$1_nodePlayable$$14$$, 0))
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$2$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$2$$ && $areaContainer$$2$$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$12$$) {
  this.$_shape$.$setAnimationParams$($params$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$13$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_1352$$ = this.$_shape$, $groupIndex$$inline_1353$$;
  for($groupIndex$$inline_1353$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_1352$$.$_indicatorMap$) {
    var $indicator$$inline_1354$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_1352$$.$_indicatorMap$[$groupIndex$$inline_1353$$].$indicator$;
    $indicator$$inline_1354$$ && $indicator$$inline_1354$$.getParent().removeChild($indicator$$inline_1354$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_1352$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
D.$DvtDCChartLineArea$_matchGroupIndices$$ = function $$DvtDCChartLineArea$_matchGroupIndices$$$($startParams$$, $endParams$$) {
  for(var $i$$139$$ = 3;$i$$139$$ < $startParams$$.length;$i$$139$$ += 4) {
    $startParams$$[$i$$139$$] = $endParams$$[$i$$139$$]
  }
};
D.$DvtDCChartLineArea$$.prototype.Init = function $$DvtDCChartLineArea$$$$Init$($peer$$17$$, $duration$$20$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$17$$, $duration$$20$$);
  this.$_context$ = this.$_shape$.$_context$;
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$14$$, $duration$$17$$) {
  this.Init($peer$$14$$, $duration$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$19$$, $oldDC$$2$$) {
  var $oldObj$$ = $oldDC$$2$$.$_shape$, $newObj$$ = this.$_shape$, $alpha$$7_chart$$71_endMatrix_fc$$ = $newObj$$.$getMatrix$(), $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ = new D.$DvtMatrix$$;
  $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.translate(-$newObj$$.$getX$(), -$newObj$$.$getY$());
  $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.scale($oldObj$$.getWidth() / $newObj$$.getWidth(), $oldObj$$.getHeight() / $newObj$$.getHeight());
  $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.translate($oldObj$$.$getX$(), $oldObj$$.$getY$());
  if(!$alpha$$7_chart$$71_endMatrix_fc$$.$equals$($bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$)) {
    var $nodePlayable$$9$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    this.$_shape$.$setMatrix$($bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$9$$.$_animator$, "typeMatrix", this.$_shape$, this.$_shape$.$getMatrix$, this.$_shape$.$setMatrix$, $alpha$$7_chart$$71_endMatrix_fc$$);
    $alpha$$7_chart$$71_endMatrix_fc$$ = this.$_peer$.$_chart$;
    $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$2$$) {
      var $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_1338$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_1339$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_1340$$ = $oldDC$$2$$.$_oldChart$.$getOptions$(), $newData$$inline_1341$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_1342$$ = $oldData$$inline_1340$$.series[$bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$].items[$fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$].y, 
      $oldZ$$inline_1343$$ = $oldData$$inline_1340$$.series[$bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$].items[$fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$].z, $newY$$inline_1344$$ = $newData$$inline_1341$$.series[$newSIdx$$inline_1338$$].items[$newGIdx$$inline_1339$$].y, $newZ$$inline_1345$$ = $newData$$inline_1341$$.series[$newSIdx$$inline_1338$$].items[$newGIdx$$inline_1339$$].z, $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ = $newData$$inline_1341$$.series[$newSIdx$$inline_1338$$].items[$newGIdx$$inline_1339$$].x !== 
      $oldData$$inline_1340$$.series[$bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$].items[$fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$].x || $newY$$inline_1344$$ !== $oldY$$inline_1342$$ || $newZ$$inline_1345$$ !== $oldZ$$inline_1343$$
    }
    $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ && ("none" != D.$DvtChartStyleUtils$$.$getAnimationIndicators$(this.$_peer$.$_chart$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($alpha$$7_chart$$71_endMatrix_fc$$)) && ($bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$ = $oldDC$$2$$.$_shape$, D.$DvtChartTypeUtils$$.$isScatter$($alpha$$7_chart$$71_endMatrix_fc$$) ? ($alpha$$7_chart$$71_endMatrix_fc$$ = "#FFFF2B", $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$ = 0.7) : 
    ($alpha$$7_chart$$71_endMatrix_fc$$ = "#D5D500", $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$ = 0.4), $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$ = new D.$DvtSolidFill$$($alpha$$7_chart$$71_endMatrix_fc$$, $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$), $alpha$$7_chart$$71_endMatrix_fc$$ = this.$_shape$.$getAlpha$(), this.$_shape$.$setAlpha$(0), $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.$setFill$($fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$), 
    $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$ = new D.$DvtMatrix$$, $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$.translate(-$oldObj$$.$getX$(), -$oldObj$$.$getY$()), $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$.scale($newObj$$.getWidth() / $oldObj$$.getWidth(), $newObj$$.getHeight() / $oldObj$$.getHeight()), $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$.translate($newObj$$.$getX$(), $newObj$$.$getY$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$9$$.$_animator$, 
    "typeNumber", this.$_shape$, this.$_shape$.$getAlpha$, this.$_shape$.$setAlpha$, $alpha$$7_chart$$71_endMatrix_fc$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$9$$.$_animator$, "typeMatrix", $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$, $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.$getMatrix$, $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.$setMatrix$, $fa_fill$$8_oldGIdx$$inline_1337_overlayEndMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$9$$.$_animator$, 
    "typeNumber", $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$, $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.$getAlpha$, $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$.$setAlpha$, 0), this.$_overlay$ = $bRet$$inline_1335_oldSIdx$$inline_1336_overlay_startMatrix$$, $nodePlayable$$9$$.$setOnEnd$(this.$_onEndAnimation$, this));
    $handler$$19$$.add($nodePlayable$$9$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$10$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$20$$.add($nodePlayable$$10$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $nodePlayable$$11$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$_context$, this.$_shape$, this.$_deleteDuration$);
  $handler$$21$$.add($nodePlayable$$11$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$15$$, $duration$$18$$) {
  D.$DvtDCChartMarker$$.$superclass$.Init.call(this, $peer$$15$$, $duration$$18$$);
  this.$_animId$ += "/marker"
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$makeIndicator$ = function $$DvtDCChartUtils$$$$makeIndicator$$($bDown_indicator$$6_oldChart$$4_uiDirection$$, $fc$$1_oldSIdx$$2$$, $oldGIdx$$2$$, $newChart$$4$$, $newSIdx$$2$$, $newGIdx$$2$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($newChart$$4$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $bDown_indicator$$6_oldChart$$4_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown_indicator$$6_oldChart$$4_uiDirection$$, $fc$$1_oldSIdx$$2$$, $oldGIdx$$2$$, $newChart$$4$$, $newSIdx$$2$$, $newGIdx$$2$$);
  if($bDown_indicator$$6_oldChart$$4_uiDirection$$ == D.$DvtDCChartUtils$$.$DIR_NOCHANGE$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $fc$$1_oldSIdx$$2$$ = ($bDown_indicator$$6_oldChart$$4_uiDirection$$ = $bDown_indicator$$6_oldChart$$4_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$4$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$4$$);
  $bDown_indicator$$6_oldChart$$4_uiDirection$$ = D.$DvtDCChartUtils$$.$_drawIndicator$($newChart$$4$$.$_context$, $bDown_indicator$$6_oldChart$$4_uiDirection$$, D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$4$$), $fc$$1_oldSIdx$$2$$);
  $newChart$$4$$.$getPlotArea$().$addChild$($bDown_indicator$$6_oldChart$$4_uiDirection$$);
  return $bDown_indicator$$6_oldChart$$4_uiDirection$$
};
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$5_oldValue$$, $oldSIdx$$3$$, $oldGIdx$$3$$, $newChart$$5_newValue$$, $newSIdx$$3$$, $newGIdx$$3$$) {
  $oldChart$$5_oldValue$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$5_oldValue$$, $oldSIdx$$3$$, $oldGIdx$$3$$);
  $newChart$$5_newValue$$ = D.$DvtChartDataUtils$$.getValue($newChart$$5_newValue$$, $newSIdx$$3$$, $newGIdx$$3$$);
  return $newChart$$5_newValue$$ == D.$JSCompiler_alias_NULL$$ || $oldChart$$5_oldValue$$ == D.$JSCompiler_alias_NULL$$ || $newChart$$5_newValue$$ == $oldChart$$5_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ : $newChart$$5_newValue$$ > $oldChart$$5_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : D.$DvtDCChartUtils$$.$DIR_DOWN$
};
D.$DvtDCChartUtils$$.$_drawIndicator$ = function $$DvtDCChartUtils$$$$_drawIndicator$$($context$$88_ret$$32$$, $bDown$$1_ptrCmds$$, $bHoriz$$6$$, $fc$$2$$) {
  $bDown$$1_ptrCmds$$ = $bHoriz$$6$$ ? ((0,D.$DvtAgent$isRightToLeft$$)($context$$88_ret$$32$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$88_ret$$32$$ = new D.$DvtPath$$($context$$88_ret$$32$$, $bDown$$1_ptrCmds$$);
  $context$$88_ret$$32$$.$setSolidFill$($fc$$2$$);
  return $context$$88_ret$$32$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$12$$, $duration$$15$$) {
  this.Init($peer$$12$$, $duration$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$16$$, $oldDC$$1$$) {
  var $obj$$69$$ = this.$_shape$, $nodePlayable$$6_startState$$2$$ = $oldDC$$1$$.$_shape$.$getAnimationParams$(), $endState$$4$$ = $obj$$69$$.$getAnimationParams$();
  D.$DvtArrayUtils$$.$equals$($nodePlayable$$6_startState$$2$$, $endState$$4$$) || ($obj$$69$$.$setAnimationParams$($nodePlayable$$6_startState$$2$$), $nodePlayable$$6_startState$$2$$ = new D.$DvtCustomAnimation$$($obj$$69$$.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$6_startState$$2$$.$_animator$, "typeNumberArray", $obj$$69$$, $obj$$69$$.$getAnimationParams$, $obj$$69$$.$setAnimationParams$, $endState$$4$$), this.$_indicator$ && $nodePlayable$$6_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, 
  this), $handler$$16$$.add($nodePlayable$$6_startState$$2$$, 1))
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$17$$) {
  var $obj$$70$$ = this.$_shape$, $endState$$5$$ = $obj$$70$$.$getAnimationParams$(), $nodePlayable$$7_startState$$3$$ = $endState$$5$$.slice(0);
  $nodePlayable$$7_startState$$3$$[0] += $nodePlayable$$7_startState$$3$$[1] / 2;
  $nodePlayable$$7_startState$$3$$[1] = 0;
  $nodePlayable$$7_startState$$3$$[3] = 0;
  $obj$$70$$.$setAnimationParams$($nodePlayable$$7_startState$$3$$);
  $nodePlayable$$7_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$70$$.$_context$, this, this.$_insertDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$7_startState$$3$$.$_animator$, "typeNumberArray", $obj$$70$$, $obj$$70$$.$getAnimationParams$, $obj$$70$$.$setAnimationParams$, $endState$$5$$);
  $handler$$17$$.add($nodePlayable$$7_startState$$3$$, 2)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$18$$, $delContainer$$3$$) {
  var $obj$$71$$ = this.$_shape$;
  $delContainer$$3$$.$addChild$($obj$$71$$);
  var $nodePlayable$$8_startState$$4$$ = $obj$$71$$.$getAnimationParams$(), $endState$$6$$ = $nodePlayable$$8_startState$$4$$.slice(0);
  $endState$$6$$[0] += $nodePlayable$$8_startState$$4$$[1] / 2;
  $endState$$6$$[1] = 0;
  $endState$$6$$[3] = 0;
  $nodePlayable$$8_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$71$$.$_context$, this, this.$_deleteDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8_startState$$4$$.$_animator$, "typeNumberArray", $obj$$71$$, $obj$$71$$.$getAnimationParams$, $obj$$71$$.$setAnimationParams$, $endState$$6$$);
  $handler$$18$$.add($nodePlayable$$8_startState$$4$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.Init = function $$DvtDCFunnelSlice$$$$Init$($peer$$13$$, $duration$$16$$) {
  D.$DvtDCFunnelSlice$$.$superclass$.Init.call(this, $peer$$13$$, $duration$$16$$);
  this.$_animId$ += "/funnel"
};
D.$DvtChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$342$$, $callback$$110$$, $callbackObj$$83$$) {
  return new D.$DvtChartImpl$$($context$$342$$, $callback$$110$$, $callbackObj$$83$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$7$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$7$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$343$$, $callback$$111$$, $callbackObj$$84$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$343$$, $callback$$111$$, $callbackObj$$84$$);
  this.$Bundle$ = new D.$DvtChartBundle$$;
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($handler$$inline_5953_options$$240$$) {
  $handler$$inline_5953_options$$240$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($handler$$inline_5953_options$$240$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) ? ($handler$$inline_5953_options$$240$$ = new D.$DvtChartSeriesRolloverHandler$$(this, this.$EventManager$), this.$EventManager$.$_seriesRolloverHandler$ = 
  $handler$$inline_5953_options$$240$$) : this.$EventManager$.$_seriesRolloverHandler$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$241_paSpace$$, $container$$151_width$$124$$, $animationDuration$$3_height$$104$$) {
  var $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$8$$ = D.$JSCompiler_alias_NULL$$, $context$$344$$ = this.$_context$;
  this.$Options$ && "none" !== $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ && ($oldChart$$8$$ = {options:this.$Options$, type:this.$getType$(), $seriesStyleArray$:this.$getSeriesStyleArray$(), $peers$:this.$getObjects$().slice(0), $getOptions$:(0,D.$JSCompiler_get$$)("options"), $getType$:(0,D.$JSCompiler_get$$)("type"), $getSeriesStyleArray$:(0,D.$JSCompiler_get$$)("$seriesStyleArray$"), $pieChart$:this.$pieChart$});
  this.$__cleanUp$();
  this.$SetOptions$($options$$241_paSpace$$);
  !(0,window.isNaN)($container$$151_width$$124$$) && !(0,window.isNaN)($animationDuration$$3_height$$104$$) && (this.$Width$ = $container$$151_width$$124$$, this.$Height$ = $animationDuration$$3_height$$104$$);
  $container$$151_width$$124$$ = new D.$DvtContainer$$($context$$344$$);
  this.$addChild$($container$$151_width$$124$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$151_width$$124$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$legend$ && "none" != D.$DvtChartEventUtils$$.$getHideAndShowBehavior$(this) && (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)($context$$344$$, [this, this.$legend$]);
  this.$_animation$ && this.$_animation$.stop();
  var $animationOnDisplay$$5$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$3_height$$104$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$109$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$2$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ && $options$$241_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$344$$, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$, this.$_container$, $container$$151_width$$124$$, $bounds$$109$$, $animationDuration$$3_height$$104$$)) ? $bBlackBoxUpdate$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($options$$241_paSpace$$ = this.$_plotAreaSpace$, 
  this.$_delContainer$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$241_paSpace$$.$w$, $options$$241_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$8$$, this, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$, $animationDuration$$3_height$$104$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.$addChild$(this.$_delContainer$) : 
  this.$getPlotArea$().$addChild$(this.$_delContainer$)))) : "none" !== $animationOnDisplay$$5$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$344$$, $animationOnDisplay$$5$$, $container$$151_width$$124$$, $bounds$$109$$, $animationDuration$$3_height$$104$$), this.$_animation$ || (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$5$$, $animationDuration$$3_height$$104$$)));
  this.$_animation$ && (this.$_animation$.play(), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$2$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = D.$JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$151_width$$124$$;
  (D.$DvtChartTypeUtils$$.$isPie$(this) || D.$DvtChartTypeUtils$$.$isFunnel$(this) || D.$DvtChartTypeUtils$$.$isPolar$(this) ? 0 : "on" === this.$Options$.dataCursor || "auto" === this.$Options$.dataCursor && (0,D.$DvtAgent$isTouchDevice$$)() && D.$DvtChartTypeUtils$$.$isLineArea$(this)) ? (this.$DataCursor$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this) ? new D.$DvtDataCursor$$($context$$344$$, D.$JSCompiler_alias_TRUE$$) : new D.$DvtDataCursor$$($context$$344$$, D.$JSCompiler_alias_FALSE$$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ = 
  this.$Options$.dataCursorBehavior, "auto" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ && ($animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ = D.$DvtChartTypeUtils$$.$isLineArea$(this) ? "smooth" : "snap"), "snap" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ ? this.$DataCursor$.$_behavior$ = "SNAP" : "smooth" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ && (this.$DataCursor$.$_behavior$ = "SMOOTH"), 
  this.$addChild$(this.$DataCursor$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$ = new D.$DvtChartDCEH$$(this), this.$EventManager$.$_dataCursorHandler$ = $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_5965$$) : this.$EventManager$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$destroy$ = function $$DvtChart$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtChart$$.prototype.destroy = D.$DvtChart$$.prototype.$destroy$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$DataCursor$ && (this.removeChild(this.$DataCursor$), this.$DataCursor$ = D.$JSCompiler_alias_NULL$$);
  if(this.$EventManager$) {
    var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5978$$ = this.$EventManager$;
    $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5978$$.$hideTooltip$();
    $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5978$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5978$$.$_dataCursorHandler$)
  }
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.removeChild(this.$_delContainer$) : this.$getPlotArea$().removeChild(this.$_delContainer$));
  this.$_animation$ = this.$_delContainer$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$19$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$19$$, this)
};
D.$DvtChart$$.prototype.$getAutomation$ = function $$DvtChart$$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
D.$DvtChartConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtChartConstants", D.$DvtChartConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartConstants$$, D.$DvtObj$$, "DvtChartConstants");
D.$DvtChartConstants$$.$BACKGROUND$ = "background";
D.$DvtChartConstants$$.BACKGROUND = D.$DvtChartConstants$$.$BACKGROUND$;
D.$DvtChartConstants$$.$DATA_ITEM$ = "dataItem";
D.$DvtChartConstants$$.DATA_ITEM = D.$DvtChartConstants$$.$DATA_ITEM$;
D.$DvtChartConstants$$.$DATA_ITEM_OTHER$ = "dataItemOther";
D.$DvtChartConstants$$.DATA_ITEM_OTHER = D.$DvtChartConstants$$.$DATA_ITEM_OTHER$;
D.$DvtChartConstants$$.$FOOTNOTE$ = "footnote";
D.$DvtChartConstants$$.FOOTNOTE = D.$DvtChartConstants$$.$FOOTNOTE$;
D.$DvtChartConstants$$.$LEGEND$ = "legend";
D.$DvtChartConstants$$.LEGEND = D.$DvtChartConstants$$.$LEGEND$;
D.$DvtChartConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtChartConstants$$.LEGEND_ITEM = D.$DvtChartConstants$$.$LEGEND_ITEM$;
D.$DvtChartConstants$$.$LEGEND_TITLE$ = "legendTitle";
D.$DvtChartConstants$$.LEGEND_TITLE = D.$DvtChartConstants$$.$LEGEND_TITLE$;
D.$DvtChartConstants$$.$PLOT_AREA$ = "plotArea";
D.$DvtChartConstants$$.PLOT_AREA = D.$DvtChartConstants$$.$PLOT_AREA$;
D.$DvtChartConstants$$.$SERIES$ = "series";
D.$DvtChartConstants$$.SERIES = D.$DvtChartConstants$$.$SERIES$;
D.$DvtChartConstants$$.$SUBTITLE$ = "subtitle";
D.$DvtChartConstants$$.SUBTITLE = D.$DvtChartConstants$$.$SUBTITLE$;
D.$DvtChartConstants$$.$TITLE$ = "title";
D.$DvtChartConstants$$.TITLE = D.$DvtChartConstants$$.$TITLE$;
D.$DvtChartConstants$$.$X_AXIS_LABEL$ = "xAxisLabel";
D.$DvtChartConstants$$.X_AXIS_LABEL = D.$DvtChartConstants$$.$X_AXIS_LABEL$;
D.$DvtChartConstants$$.$X_AXIS_TITLE$ = "xAxisTitle";
D.$DvtChartConstants$$.X_AXIS_TITLE = D.$DvtChartConstants$$.$X_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y_AXIS_LABEL$ = "yAxisLabel";
D.$DvtChartConstants$$.Y_AXIS_LABEL = D.$DvtChartConstants$$.$Y_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y_AXIS_TITLE$ = "yAxisTitle";
D.$DvtChartConstants$$.Y_AXIS_TITLE = D.$DvtChartConstants$$.$Y_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ = "y2AxisLabel";
D.$DvtChartConstants$$.Y2_AXIS_LABEL = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y2_AXIS_TITLE$ = "y2AxisTitle";
D.$DvtChartConstants$$.Y2_AXIS_TITLE = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$;
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$24$$, $type$$138$$, $xMin$$1$$, $xMax$$1$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$2$$, $yMax$$2$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$24$$, $type$$138$$);
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$2$$;
  this.$_yMax$ = $yMax$$2$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($type$$139$$, $xMin$$2$$, $xMax$$2$$, $startGroup$$2$$, $endGroup$$2$$, $yMin$$3$$, $yMax$$3$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, $type$$139$$);
  this.$_xMin$ = $xMin$$2$$;
  this.$_xMax$ = $xMax$$2$$;
  this.$_startGroup$ = $startGroup$$2$$;
  this.$_endGroup$ = $endGroup$$2$$;
  this.$_yMin$ = $yMin$$3$$;
  this.$_yMax$ = $yMax$$3$$
};
(0,D.$goog$exportSymbol$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.TYPE_INPUT = "viewportChangeInput";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChart$$.prototype.$processActiveDataChanges$ = function $$DvtChart$$$$$processActiveDataChanges$$($changes$$) {
  for(var $optionsOld$$ = D.$DvtJSONUtils$$.clone(this.$Options$), $optionsNew$$ = this.$Options$, $changeIndex$$ = 0;$changeIndex$$ < $changes$$.length;$changeIndex$$++) {
    var $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$ = $changes$$[$changeIndex$$], $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.type;
    if("u" == $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$) {
      for(var $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.data, $i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$ = 0;$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$ < $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$.length;$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$++) {
        var $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.id, $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$]._id);
        if($dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$) {
          for(var $key$$inline_10581$$ in $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$]) {
            "_id" != $key$$inline_10581$$ && ($dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$.item[$key$$inline_10581$$] = $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$][$key$$inline_10581$$])
          }
        }
      }
    }else {
      if("ia" == $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ || "ib" == $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$) {
        $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.data;
        for($i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$ = 0;$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$ < $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$.length;$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$++) {
          var $insertId$$inline_10587$$ = $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.insertId, $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$ = $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$].group, $insertedSeries$$inline_10589_seriesItems$$inline_10594$$ = $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$].series, 
          $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$ = D.$DvtChartDataUtils$$.$getSeriesCount$(this), $groupCount$$inline_10591_seriesIndex$$inline_10597$$ = D.$DvtChartDataUtils$$.$getGroupCount$(this), $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$(this, $insertedSeries$$inline_10589_seriesItems$$inline_10594$$), $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = 
          D.$DvtChartDataUtils$$.$getGroupIndex$(this, $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$);
          if(0 <= $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ && 0 <= $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$) {
            $insertedSeries$$inline_10589_seriesItems$$inline_10594$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$).items, $insertedSeries$$inline_10589_seriesItems$$inline_10594$$[$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$] = {}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$], 
            $insertedSeries$$inline_10589_seriesItems$$inline_10594$$[$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$])
          }else {
            if(0 <= $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$) {
              $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$ = (0,window.Array)($groupCount$$inline_10591_seriesIndex$$inline_10597$$), $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$[$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$] = {}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$], 
              $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$[$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$]), this.$Options$.series.push({name:$insertedSeries$$inline_10589_seriesItems$$inline_10594$$, items:$dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$})
            }else {
              if($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $insertId$$inline_10587$$)) {
                $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = "ia" == $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.type ? $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$.$groupIndex$ + 1 : $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$.$groupIndex$;
                0 > $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ && (this.$Options$.series.push({name:$insertedSeries$$inline_10589_seriesItems$$inline_10594$$, items:(0,window.Array)($groupCount$$inline_10591_seriesIndex$$inline_10597$$)}), $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ = $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$, $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$++);
                for($groupCount$$inline_10591_seriesIndex$$inline_10597$$ = 0;$groupCount$$inline_10591_seriesIndex$$inline_10597$$ < $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$;$groupCount$$inline_10591_seriesIndex$$inline_10597$$++) {
                  $insertedSeries$$inline_10589_seriesItems$$inline_10594$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $groupCount$$inline_10591_seriesIndex$$inline_10597$$).items, $insertedSeries$$inline_10589_seriesItems$$inline_10594$$.splice($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$, 0, {}), $groupCount$$inline_10591_seriesIndex$$inline_10597$$ == $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ && (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$[$i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$], 
                  $insertedSeries$$inline_10589_seriesItems$$inline_10594$$[$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$])
                }
                this.$Options$.groups.splice($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$, 0, $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$)
              }
            }
          }
        }
      }else {
        if("d" == $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ && ($dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.id))) {
          $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = $data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = D.$JSCompiler_alias_VOID$$;
          for($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ in $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.item) {
            $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.item[$data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$] = D.$JSCompiler_alias_NULL$$
          }
          $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.item._deleted = D.$JSCompiler_alias_TRUE$$;
          $i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$ = D.$DvtChartDataUtils$$.$getSeriesCount$(this);
          $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$ = D.$DvtChartDataUtils$$.$getGroupCount$(this);
          $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$ = D.$JSCompiler_alias_TRUE$$;
          for($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = 0;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ < $i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$++) {
            if(($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = D.$DvtChartDataUtils$$.$getDataItem$(this, $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$, $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.$groupIndex$)) && !$data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$._deleted) {
              $bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$ = D.$JSCompiler_alias_FALSE$$;
              break
            }
          }
          $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ = D.$JSCompiler_alias_TRUE$$;
          for($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = 0;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ < $dataItemInfo$$inline_10580_groupCount$$inline_10605_insertedGroup$$inline_10588_items$$inline_10595$$;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$++) {
            if(($data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$ = D.$DvtChartDataUtils$$.$getDataItem$(this, $dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.$seriesIndex$, $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$)) && !$data$$inline_10578_data$$inline_10585_dataItem$$inline_10602_key$$inline_10603_type$$inline_5906$$._deleted) {
              $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ = D.$JSCompiler_alias_FALSE$$;
              break
            }
          }
          if($bDeleteGroup$$inline_10606_seriesCount$$inline_10590$$) {
            for($dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ = 0;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$ < $i$$inline_10579_i$$inline_10586_seriesCount$$inline_10604$$;$dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$++) {
              D.$DvtChartDataUtils$$.$getSeriesItem$(this, $dataItemInfo$$inline_10596_groupIndex$$inline_10609_insertedGroupIndex$$inline_10593_seriesIndex$$inline_10607$$).$items$.splice($dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.$groupIndex$, 1)
            }
            this.$Options$.groups.splice($dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.$groupIndex$, 1)
          }
          $bDeleteSeries$$inline_10608_insertedSeriesIndex$$inline_10592$$ && this.$Options$.series.splice($dataItemInfo$$inline_10601_entry$$inline_10577_entry$$inline_10584_entry$$inline_5905$$.$seriesIndex$, 1)
        }
      }
    }
  }
  this.$Options$ = $optionsOld$$;
  this.$render$($optionsNew$$)
};
D.$DvtChart$$.prototype.processActiveDataChanges = D.$DvtChart$$.prototype.$processActiveDataChanges$;
D.$DvtChart$_copyActiveDataProperties$$ = function $$DvtChart$_copyActiveDataProperties$$$($entry$$10$$, $item$$39$$) {
  for(var $key$$65$$ in $entry$$10$$) {
    $item$$39$$[$key$$65$$] = $entry$$10$$[$key$$65$$]
  }
};
D.$JSCompiler_StaticMethods__findDataItemById$$ = function $$JSCompiler_StaticMethods__findDataItemById$$$($JSCompiler_StaticMethods__findDataItemById$self$$, $id$$169$$, $stampId$$14$$) {
  if($id$$169$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $seriesCount$$31$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $groupCount$$7$$ = D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $seriesIndex$$90$$ = 0;$seriesIndex$$90$$ < $seriesCount$$31$$;$seriesIndex$$90$$++) {
    for(var $groupIndex$$53$$ = 0;$groupIndex$$53$$ < $groupCount$$7$$;$groupIndex$$53$$++) {
      var $dataItem$$34$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__findDataItemById$self$$, $seriesIndex$$90$$, $groupIndex$$53$$);
      if($dataItem$$34$$ != D.$JSCompiler_alias_NULL$$ && $dataItem$$34$$.id === $id$$169$$ && ($stampId$$14$$ == D.$JSCompiler_alias_NULL$$ || $stampId$$14$$ === $dataItem$$34$$._id)) {
        return{item:$dataItem$$34$$, $seriesIndex$:$seriesIndex$$90$$, $groupIndex$:$groupIndex$$53$$}
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartImpl$$ = function $$DvtChartImpl$$$($context$$75$$, $callback$$34$$, $callbackObj$$11$$) {
  this.Init($context$$75$$, $callback$$34$$, $callbackObj$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartImpl$$, D.$DvtChart$$, "DvtChartImpl");
D.$DvtChartImpl$$.prototype.Init = function $$DvtChartImpl$$$$Init$($context$$76$$, $callback$$35$$, $callbackObj$$12$$) {
  D.$DvtChartImpl$$.$superclass$.Init.call(this, $context$$76$$, $callback$$35$$, $callbackObj$$12$$);
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_seriesStyleArray$ = [];
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtChartImpl$$.prototype.$SetOptions$ = function $$DvtChartImpl$$$$$SetOptions$$($options$$70_popupBehaviors_selectionMode$$5$$) {
  D.$DvtChartImpl$$.$superclass$.$SetOptions$.call(this, $options$$70_popupBehaviors_selectionMode$$5$$);
  $options$$70_popupBehaviors_selectionMode$$5$$ = this.$Options$.selection;
  this.$_selectionHandler$ = "single" == $options$$70_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$70_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$70_popupBehaviors_selectionMode$$5$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$1$$ in $options$$70_popupBehaviors_selectionMode$$5$$) {
      for(var $popupBehaviorArray$$ = $options$$70_popupBehaviors_selectionMode$$5$$[$stampId$$1$$], $i$$121$$ = 0;$i$$121$$ < $popupBehaviorArray$$.length;$i$$121$$++) {
        this.$_popupBehaviors$[$stampId$$1$$] || (this.$_popupBehaviors$[$stampId$$1$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$121$$];
        this.$_popupBehaviors$[$stampId$$1$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChartImpl$$.prototype.filter = function $$DvtChartImpl$$$$filter$($category$$5$$, $type$$63$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$5$$, "out" == $type$$63$$ ? "hidden" : "visible");
  var $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$ = this.$EventManager$.$getFocus$(), $legendFocus_navigable$$inline_1237$$, $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$;
  this.$legend$ && ($legendFocus_navigable$$inline_1237$$ = this.$legend$.$_eventManager$.$getFocus$()) && ($focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$ = $legendFocus_navigable$$inline_1237$$.$isShowingKeyboardFocusEffect$());
  this.$render$(this.$Options$);
  if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$) {
    for(var $i$$inline_1239_navigables$$5$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this), $i$$122$$ = 0;$i$$122$$ < $i$$inline_1239_navigables$$5$$.length;$i$$122$$++) {
      var $id$$40$$ = $i$$inline_1239_navigables$$5$$[$i$$122$$].getId();
      if($id$$40$$ instanceof D.$DvtChartDataItem$$ && $id$$40$$.$equals$($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.getId())) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $i$$inline_1239_navigables$$5$$[$i$$122$$]);
        break
      }
      (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($i$$inline_1239_navigables$$5$$))
    }
  }
  if($legendFocus_navigable$$inline_1237$$ && this.$legend$) {
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$_context$, [this, this.$legend$]);
    (0,D.$JSCompiler_StaticMethods_nextKeyboardFocus$$)(this.$_context$);
    $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$ = this.$legend$;
    for($i$$inline_1239_navigables$$5$$ = 0;$i$$inline_1239_navigables$$5$$ < $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.$_peers$.length;$i$$inline_1239_navigables$$5$$++) {
      if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.$_peers$[$i$$inline_1239_navigables$$5$$].getId() == $legendFocus_navigable$$inline_1237$$.getId()) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.$_eventManager$, $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.$_peers$[$i$$inline_1239_navigables$$5$$]);
        $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$ && $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_1236_chartFocus$$.$_peers$[$i$$inline_1239_navigables$$5$$].$showKeyboardFocusEffect$();
        break
      }
    }
    $legendFocus_navigable$$inline_1237$$ = this.$legend$.$_eventManager$.$getFocus$();
    $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$ = $legendFocus_navigable$$inline_1237$$.$getDisplayables$()[0];
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$, "label", $legendFocus_navigable$$inline_1237$$.$getAriaLabel$());
    (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_1238$$)
  }
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.filter", D.$DvtChartImpl$$.prototype.filter);
D.$DvtChartImpl$$.prototype.$highlight$ = function $$DvtChartImpl$$$$$highlight$$($categories$$6$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$6$$, this.$getObjects$());
  this.$legend$ && this.$legend$.$highlight$($categories$$6$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$6$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.highlight", D.$DvtChartImpl$$.prototype.$highlight$);
D.$DvtChartImpl$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtChartImpl$$.prototype.$processEvent$ = function $$DvtChartImpl$$$$$processEvent$$($event$$91$$, $source$$6$$) {
  var $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $event$$91$$.$getType$();
  if($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$91$$.$_category$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ || "categoryRollOut" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) {
      "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) && ((0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$91$$, this.$getObjects$()), this.$_distributeToChildren$($event$$91$$, $source$$6$$))
    }else {
      if("selection" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) {
        $event$$91$$ = this.$_processSelectionEvent$($event$$91$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) {
          var $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = $event$$91$$, $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$getSubtype$(), $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = "dvtPanEndEvent" == 
          $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || "dvtZoomEvent" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || "dvtPinchEndEvent" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$, $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = 
          "dvtPanStartEvent" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || "dvtPinchStartEvent" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$;
          (0,D.$DvtAgent$isTouchDevice$$)() && ($actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dxMin$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dxMax$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dyMin$, 
          $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dyMax$), $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || (this.$setViewport$($bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, 
          $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$))) : ($bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dxMinTotal$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dxMaxTotal$, 
          $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dyMinTotal$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$), $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ && 
          this.$setViewport$($bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$));
          $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ && (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$));
          $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ ? "viewportChange" : "viewportChangeInput";
          $event$$91$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$xMin$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$xMax$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$startGroup$, 
          $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$xMin$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$xMax$, 
          D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$yMin$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.$yMax$)
        }else {
          if("dvtMarquee" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) {
            $event$$91$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$91$$)
          }else {
            if("overview" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) {
              if($actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = $event$$91$$.$getSubType$(), "dropCallback" != $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$) {
                $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $event$$91$$.$getParamValue$("newStartTime");
                $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = $event$$91$$.$getParamValue$("newEndTime");
                $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = "scrollTime" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || "scrollEnd" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ || "rangeChange" == $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$;
                if(D.$DvtChartEventUtils$$.$isLiveScroll$(this) || $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$) {
                  $source$$6$$ == this.$yScrollbar$ ? this.$setViewport$({$yMin$:$actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $yMax$:$bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$}, $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$) : this.$setViewport$({$xMin$:$actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, 
                  $xMax$:$bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$}, $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$)
                }
                $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ ? "viewportChange" : "viewportChangeInput";
                if($source$$6$$ == this.$yScrollbar$) {
                  $event$$91$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$)
                }else {
                  var $newItems_removedSet_startEndGroup$$inline_1257$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$);
                  $event$$91$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$, $newItems_removedSet_startEndGroup$$inline_1257$$.$startGroup$, $newItems_removedSet_startEndGroup$$inline_1257$$.$endGroup$, 
                  D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)
                }
              }else {
                $event$$91$$ = D.$JSCompiler_alias_VOID$$
              }
            }else {
              "showPopup" == $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ ? ($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $event$$91$$, "mouseHover" != $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = 
              D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = new D.$DvtShowPopupEvent$$($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.$_showPopupBehavior$, $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.$_launcherBounds$, 
              $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.$_launcherId$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$, "clientRowKey", $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$)), $event$$91$$ = $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$) : 
              $event$$91$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$91$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, $event$$91$$, $source$$6$$))
            }
          }
        }
      }
    }
  }
  if($event$$91$$ instanceof D.$DvtChartSelectionEvent$$) {
    $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = this.$getOptions$();
    $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.selectedItems;
    $newItems_removedSet_startEndGroup$$inline_1257$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$.selectedItems = $newItems_removedSet_startEndGroup$$inline_1257$$;
    var $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ = $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ ? $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$ : [], $newItems_removedSet_startEndGroup$$inline_1257$$ = $newItems_removedSet_startEndGroup$$inline_1257$$ ? $newItems_removedSet_startEndGroup$$inline_1257$$ : [], $newIndex_oldIndex$$, 
    $oldItemId_oldSet$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.length;$newIndex_oldIndex$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$[$newIndex_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $newItems_removedSet_startEndGroup$$inline_1257$$.length;$newIndex_oldIndex$$++) {
      $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$[$newItems_removedSet_startEndGroup$$inline_1257$$[$newIndex_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $newItems_removedSet_startEndGroup$$inline_1257$$.length;$newIndex_oldIndex$$++) {
      var $newItemId$$ = $newItems_removedSet_startEndGroup$$inline_1257$$[$newIndex_oldIndex$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet_startEndGroup$$inline_1257$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$.length;$newIndex_oldIndex$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_1244_event$$inline_1260_eventType$$inline_1247_oldItems_start$$inline_1253_type$$64$$[$newIndex_oldIndex$$].id, $bounds$$inline_1246_end$$inline_1254_event$$inline_1242_newSet_options$$71_selection$$inline_1261$$[$oldItemId_oldSet$$] || ($newItems_removedSet_startEndGroup$$inline_1257$$[$oldItemId_oldSet$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$91$$.addedSet = $actionDone$$inline_1255_actionStart$$inline_1245_addedSet_eventType$$inline_1256_subtype$$inline_1243_subtype$$inline_1252$$;
    $event$$91$$.removedSet = $newItems_removedSet_startEndGroup$$inline_1257$$
  }
  $event$$91$$ && this.$__dispatchEvent$($event$$91$$)
};
D.$DvtChartImpl$$.prototype.$_processSelectionEvent$ = function $$DvtChartImpl$$$$$_processSelectionEvent$$($event$$92_selection$$4$$) {
  $event$$92_selection$$4$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$92_selection$$4$$.getSelection());
  if(this.$overview$) {
    var $ovChart$$ = this.$overview$.$_chart$;
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$.$getSelectionHandler$(), $event$$92_selection$$4$$, $ovChart$$.$getObjects$())
  }
  return new D.$DvtChartSelectionEvent$$($event$$92_selection$$4$$, "selection")
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$94$$) {
  var $ovChart$$1_subtype$$1$$ = $event$$94$$.$getSubtype$(), $em_selection$$5_selectionHandler$$2$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$, $bounds$$4_selectionEvent$$2_targets$$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$94$$);
  if("select" == $em_selection$$5_selectionHandler$$2$$.$_dragMode$) {
    $em_selection$$5_selectionHandler$$2$$ = $em_selection$$5_selectionHandler$$2$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $ovChart$$1_subtype$$1$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$94$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($em_selection$$5_selectionHandler$$2$$) : []
    }else {
      $bounds$$4_selectionEvent$$2_targets$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$94$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($em_selection$$5_selectionHandler$$2$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$getObjects$());
      for(var $target$$inline_1266$$, $i$$inline_1267$$ = 0;$i$$inline_1267$$ < $bounds$$4_selectionEvent$$2_targets$$.length;$i$$inline_1267$$++) {
        $target$$inline_1266$$ = $bounds$$4_selectionEvent$$2_targets$$[$i$$inline_1267$$], (!$target$$inline_1266$$ || !$target$$inline_1266$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($em_selection$$5_selectionHandler$$2$$, $target$$inline_1266$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    $em_selection$$5_selectionHandler$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($em_selection$$5_selectionHandler$$2$$);
    $bounds$$4_selectionEvent$$2_targets$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$94$$, D.$JSCompiler_alias_FALSE$$);
    $bounds$$4_selectionEvent$$2_targets$$ = new D.$DvtChartSelectionEvent$$($em_selection$$5_selectionHandler$$2$$, "dvtMarqueeEndEvent" == $ovChart$$1_subtype$$1$$ ? "selection" : "selectionInput", $bounds$$4_selectionEvent$$2_targets$$.$xMin$, $bounds$$4_selectionEvent$$2_targets$$.$xMax$, $bounds$$4_selectionEvent$$2_targets$$.$startGroup$, $bounds$$4_selectionEvent$$2_targets$$.$endGroup$, $bounds$$4_selectionEvent$$2_targets$$.$yMin$, $bounds$$4_selectionEvent$$2_targets$$.$yMax$, $bounds$$4_selectionEvent$$2_targets$$.$y2Min$, 
    $bounds$$4_selectionEvent$$2_targets$$.$y2Max$);
    "dvtMarqueeEndEvent" == $ovChart$$1_subtype$$1$$ && $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$ && ($ovChart$$1_subtype$$1$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$.$_chart$, (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$1_subtype$$1$$.$getSelectionHandler$(), $em_selection$$5_selectionHandler$$2$$, $ovChart$$1_subtype$$1$$.$getObjects$()));
    return $bounds$$4_selectionEvent$$2_targets$$
  }
  if("zoom" == $em_selection$$5_selectionHandler$$2$$.$_dragMode$) {
    if("dvtMarqueeEndEvent" != $ovChart$$1_subtype$$1$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $bounds$$4_selectionEvent$$2_targets$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$94$$, D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$setViewport$($bounds$$4_selectionEvent$$2_targets$$, D.$JSCompiler_alias_TRUE$$);
    (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$4_selectionEvent$$2_targets$$);
    D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$4_selectionEvent$$2_targets$$.$xMin$, $bounds$$4_selectionEvent$$2_targets$$.$xMax$, $bounds$$4_selectionEvent$$2_targets$$.$startGroup$, $bounds$$4_selectionEvent$$2_targets$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$4_selectionEvent$$2_targets$$.$xMin$, 
    $bounds$$4_selectionEvent$$2_targets$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$4_selectionEvent$$2_targets$$.$yMin$, $bounds$$4_selectionEvent$$2_targets$$.$yMax$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$97$$, $source$$8$$) {
  var $params$$6$$ = $event$$97$$.params, $chartObjType$$ = $params$$6$$.type;
  return $source$$8$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$97$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$6$$.id))) : $source$$8$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$97$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$6$$.id))) : 
  $source$$8$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$97$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$6$$.id))) : $source$$8$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$97$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$6$$.id))) : $event$$97$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_distributeToChildren$ = function $$JSCompiler_prototypeAlias$$$$_distributeToChildren$$($event$$98$$, $source$$9$$) {
  this.$legend$ && this.$legend$ != $source$$9$$ && this.$legend$.$processEvent$($event$$98$$, $source$$9$$);
  this.$pieChart$ && this.$pieChart$ != $source$$9$$ && this.$pieChart$.$processEvent$($event$$98$$, $source$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  D.$DvtChartImpl$$.$superclass$.$__cleanUp$.call(this);
  this.$_peers$.length = 0;
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)(this);
  this.$_areaContainer$ = this.$dragButtons$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__cleanUpAxisAndPlotArea$ = function $$JSCompiler_prototypeAlias$$$$__cleanUpAxisAndPlotArea$$() {
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1269$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1269$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1269$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_1269$$.$_dataCursorHandler$);
  this.$_peers$.length = 0;
  this.$_container$.removeChild(this.$xAxis$);
  this.$_container$.removeChild(this.$yAxis$);
  this.$_container$.removeChild(this.$y2Axis$);
  this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$)
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$3$$) {
  this.$_peers$.push($peer$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = function $$JSCompiler_prototypeAlias$$$$getOptions$$() {
  this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  return this.$Options$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$getSeriesStyleArray$ = (0,D.$JSCompiler_get$$)("$_seriesStyleArray$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_StaticMethods_getGapWidthRatio$$ = function $$JSCompiler_StaticMethods_getGapWidthRatio$$$($JSCompiler_StaticMethods_getGapWidthRatio$self$$) {
  var $options$$72$$ = $JSCompiler_StaticMethods_getGapWidthRatio$self$$.$getOptions$();
  return $options$$72$$.layout.gapWidthRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$72$$.layout.gapWidthRatio) ? $options$$72$$.layout.gapWidthRatio : window.Math.min($JSCompiler_StaticMethods_getGapWidthRatio$self$$.$Width$ / 400, 1)
};
D.$JSCompiler_StaticMethods_getGapHeightRatio$$ = function $$JSCompiler_StaticMethods_getGapHeightRatio$$$($JSCompiler_StaticMethods_getGapHeightRatio$self$$) {
  var $options$$73$$ = $JSCompiler_StaticMethods_getGapHeightRatio$self$$.$getOptions$();
  return $options$$73$$.layout.gapHeightRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$73$$.layout.gapHeightRatio) ? $options$$73$$.layout.gapHeightRatio : window.Math.min($JSCompiler_StaticMethods_getGapHeightRatio$self$$.$Height$ / 300, 1)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$2$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$2$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$ = $detObj$$.getParent();
  if($par$$) {
    var $parentChildCount$$ = $par$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$.removeChild($detObj$$), $par$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$isHoverEffectShown$()) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$1$$ = $detObj$$1$$.getParent();
  if($par$$1$$) {
    var $newIndex$$2$$ = $par$$1$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$2$$ && ($par$$1$$.removeChild($detObj$$1$$), $par$$1$$.$addChildAt$($detObj$$1$$, $newIndex$$2$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$setViewport$ = function $$JSCompiler_prototypeAlias$$$$setViewport$$($bounds$$5$$, $actionDone$$2$$) {
  D.$DvtChartTypeUtils$$.$isScrollSupported$(this) && ($bounds$$5$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $bounds$$5$$.$xMax$), $bounds$$5$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $bounds$$5$$.$xMin$), D.$DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$) : ($bounds$$5$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && 
  (this.$Options$.yAxis.viewportMax = $bounds$$5$$.$yMax$), $bounds$$5$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $bounds$$5$$.$yMin$)), this.$Options$._duringAnimation = !$actionDone$$2$$, D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$))
};
D.$JSCompiler_StaticMethods_setScrollbarViewport$$ = function $$JSCompiler_StaticMethods_setScrollbarViewport$$$($JSCompiler_StaticMethods_setScrollbarViewport$self$$, $bounds$$6$$) {
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$.$setViewportRange$($bounds$$6$$.$xMin$, $bounds$$6$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($bounds$$6$$.$xMin$, $bounds$$6$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($bounds$$6$$.$yMin$, $bounds$$6$$.$yMax$)
};
D.$DvtChartImpl$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_hideDragButtons$$ = function $$JSCompiler_StaticMethods_hideDragButtons$$$($JSCompiler_StaticMethods_hideDragButtons$self$$) {
  $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$3$$) {
  this.$_chart$ = $dvtComponent$$3$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_axis$ = this.$_chart$.$xAxis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_axisAutomation$ = this.$_axis$ ? this.$_axis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$) {
  if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.$isDescendantOf$(this.$_legend$)) {
    $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$);
    a: {
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this.$_legendAutomation$, this.$_legend$.$__getOptions$(), $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$)) {
        for(var $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ = 0;$groupIndex$$16_logicalObj$$7_s$$inline_1523$$ < this.$_options$.series.length;$groupIndex$$16_logicalObj$$7_s$$inline_1523$$++) {
          if(this.$_options$.series[$groupIndex$$16_logicalObj$$7_s$$inline_1523$$].name == $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.text) {
            $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = "series[" + $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ + "]";
            break a
          }
        }
      }
      $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = D.$JSCompiler_alias_NULL$$
    }
    return $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$
  }
  if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.$isDescendantOf$(this.$_axis$)) {
    return $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = this.$_axisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$), ($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.substring($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.indexOf("[") + 
    1, $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.indexOf("]"))) ? "group[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ + "]" : D.$JSCompiler_alias_NULL$$
  }
  if("pie" == this.$_options$.type) {
    if($groupIndex$$16_logicalObj$$7_s$$inline_1523$$ = $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$.$_logicalObjects$[0].logicalObject) {
      return"dataItem[" + $groupIndex$$16_logicalObj$$7_s$$inline_1523$$.$getSeriesIndex$() + "]"
    }
  }else {
    if($groupIndex$$16_logicalObj$$7_s$$inline_1523$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$), $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ instanceof D.$DvtChartObjPeer$$) {
      $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ = $groupIndex$$16_logicalObj$$7_s$$inline_1523$$.$getSeriesIndex$();
      $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ = $groupIndex$$16_logicalObj$$7_s$$inline_1523$$.$getGroupIndex$();
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ && "funnel" != this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ + "][" + $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ + "]"
      }
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ != D.$JSCompiler_alias_NULL$$ && $groupIndex$$16_logicalObj$$7_s$$inline_1523$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ + "]"
      }
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ != D.$JSCompiler_alias_NULL$$ && ($groupIndex$$16_logicalObj$$7_s$$inline_1523$$ == D.$JSCompiler_alias_NULL$$ || 0 > $groupIndex$$16_logicalObj$$7_s$$inline_1523$$)) {
        return"series[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$31_index$$inline_1526_legendItem$$inline_1522_legendSubId_seriesIndex$$27$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$8_subId$$8$$) {
  var $firstIndex_openParen1$$ = $logicalObj$$8_subId$$8$$.indexOf("["), $closeParen1_openParen2$$ = $logicalObj$$8_subId$$8$$.indexOf("]");
  if(0 < $firstIndex_openParen1$$ && 0 < $closeParen1_openParen2$$) {
    var $closeParen2_objType_pieSlice$$ = $logicalObj$$8_subId$$8$$.substring(0, $firstIndex_openParen1$$);
    if("group" == $closeParen2_objType_pieSlice$$) {
      return this.$_axisAutomation$.$getDomElementForSubId$($logicalObj$$8_subId$$8$$)
    }
    if("series" == $closeParen2_objType_pieSlice$$) {
      return $logicalObj$$8_subId$$8$$ = "section" + (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)(this.$_legendAutomation$, this.$_options$.series[$logicalObj$$8_subId$$8$$.substring($logicalObj$$8_subId$$8$$.indexOf("[") + 1, $logicalObj$$8_subId$$8$$.indexOf("]"))], this.$_legend$.$__getOptions$()), this.$_legendAutomation$.$getDomElementForSubId$($logicalObj$$8_subId$$8$$)
    }
    $firstIndex_openParen1$$ = $logicalObj$$8_subId$$8$$.substring($firstIndex_openParen1$$ + 1, $closeParen1_openParen2$$);
    if("pie" == this.$_options$.type && ($closeParen2_objType_pieSlice$$ = 0 <= $firstIndex_openParen1$$ && $firstIndex_openParen1$$ < this.$_chart$.$pieChart$.$_slices$.length ? (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this.$_chart$.$pieChart$.$_slices$[$firstIndex_openParen1$$]) : D.$JSCompiler_alias_NULL$$)) {
      return $closeParen2_objType_pieSlice$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $secondIndex$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $logicalObj$$8_subId$$8$$ = $logicalObj$$8_subId$$8$$.substring($closeParen1_openParen2$$ + 1), $closeParen1_openParen2$$ = $logicalObj$$8_subId$$8$$.indexOf("["), $closeParen2_objType_pieSlice$$ = $logicalObj$$8_subId$$8$$.indexOf("]"), 0 <= $closeParen1_openParen2$$ && 0 <= $closeParen2_objType_pieSlice$$ && ($secondIndex$$ = $logicalObj$$8_subId$$8$$.substring($closeParen1_openParen2$$ + 1, $closeParen2_objType_pieSlice$$))
    }
    if($logicalObj$$8_subId$$8$$ = this.$_getChartObjPeer$($firstIndex_openParen1$$, $secondIndex$$)) {
      return $logicalObj$$8_subId$$8$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$1$$, $secondIndex$$1$$) {
  for(var $peers$$3$$ = this.$_chart$.$getObjects$(), $i$$172$$ = 0;$i$$172$$ < $peers$$3$$.length;$i$$172$$++) {
    var $seriesIndex$$28$$ = $peers$$3$$[$i$$172$$].$getSeriesIndex$(), $groupIndex$$17$$ = $peers$$3$$[$i$$172$$].$getGroupIndex$();
    if($seriesIndex$$28$$ == $firstIndex$$1$$ && $groupIndex$$17$$ == $secondIndex$$1$$) {
      return $peers$$3$$[$i$$172$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($firstIndex$$2$$, $secondIndex$$2$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $secondIndex$$2$$ = 0
  }
  var $dataItem$$9$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$);
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $firstIndex$$2$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), 
  value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $firstIndex$$2$$, $secondIndex$$2$$), y:$dataItem$$9$$ ? $dataItem$$9$$.y : D.$JSCompiler_alias_NULL$$, z:$dataItem$$9$$ ? $dataItem$$9$$.z : D.$JSCompiler_alias_NULL$$, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $secondIndex$$2$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $firstIndex$$2$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, 
  $firstIndex$$2$$, $secondIndex$$2$$)}
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($groupIndex$$18$$) {
  return this.$_options$.groups[$groupIndex$$18$$]
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$30$$) {
  return this.$_options$.series[$seriesIndex$$30$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return this.$_options$.groups.length
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$ = this.$_legend$.$_bounds$, $point$$10$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$.x, $legendSpace$$.y));
  return{bounds:{x:$point$$10$$.x, y:$point$$10$$.y, width:$legendSpace$$.$w$, height:$legendSpace$$.$h$}, title:this.$_legend$.$__getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  if(this.$_chart$.$xAxis$) {
    var $xAxisSpace$$ = this.$_chart$.$xAxis$.$_bounds$;
    return{bounds:{x:$xAxisSpace$$.x, y:$xAxisSpace$$.y, width:$xAxisSpace$$.$w$, height:$xAxisSpace$$.$h$}, title:this.$_options$.xAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  if(this.$_chart$.$yAxis$) {
    var $yAxisSpace$$ = this.$_chart$.$yAxis$.$_bounds$;
    return{bounds:{x:$yAxisSpace$$.x, y:$yAxisSpace$$.y, width:$yAxisSpace$$.$w$, height:$yAxisSpace$$.$h$}, title:this.$_options$.yAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  if(this.$_chart$.$y2Axis$) {
    var $y2AxisSpace$$ = this.$_chart$.$y2Axis$.$_bounds$;
    return{bounds:{x:$y2AxisSpace$$.x, y:$y2AxisSpace$$.y, width:$y2AxisSpace$$.$w$, height:$y2AxisSpace$$.$h$}, title:this.$_options$.y2Axis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtChartBundle$$, D.$DvtUtilBundle$$, "DvtChartBundle");
D.$DvtChartBundle$$._defaults = {EMPTY_TEXT:"No data to display", DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series: {0}", LABEL_GROUP:"Group: {0}", LABEL_VALUE:"Value: {0}", LABEL_TARGET_VALUE:"Target: {0}", LABEL_X:"X: {0}", LABEL_Y:"Y: {0}", LABEL_Z:"Z: {0}", LABEL_LOW:"Low: {0}", LABEL_HIGH:"High: {0}", LABEL_PERCENTAGE:"Percentage: {0}", LABEL_OTHER:"Other", PAN:"Pan", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", INVALID_DATA:"Invalid data"};
D.$DvtChartBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtChartBundle$$$$$GetDefaultStringForKey$$($key$$35$$) {
  var $defaultStr$$4$$ = D.$DvtChartBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$35$$);
  return $defaultStr$$4$$ ? $defaultStr$$4$$ : D.$DvtChartBundle$$._defaults[$key$$35$$]
};
D.$DvtChartBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtChartBundle");
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$254$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$254$$.$_context$, $chart$$254$$.$processEvent$, $chart$$254$$);
  this.$_chart$ = $chart$$254$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$_seriesRolloverHandler$ = this.$selectButton$ = this.$zoomButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$89$$, $id$$48$$, $series$$15$$) {
  return{type:$type$$89$$, id:$id$$48$$, series:$series$$15$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$32$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$32$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$32$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$32$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$33$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$33$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$33$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$33$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$90$$, $logicalObj$$9$$) {
  if($logicalObj$$9$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$9$$.$getParams$() != D.$JSCompiler_alias_NULL$$) {
    $logicalObj$$9$$.$getParams$()
  }else {
    if($logicalObj$$9$$ instanceof D.$DvtPieSlice$$) {
      var $sliceId$$1$$ = $logicalObj$$9$$.getId();
      $sliceId$$1$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ || ($sliceId$$1$$.getId(), $sliceId$$1$$.$getSeries$(), $sliceId$$1$$.$getGroup$())
    }else {
      $logicalObj$$9$$ instanceof D.$DvtChartObjPeer$$ && (0 <= $logicalObj$$9$$.$getSeriesIndex$() && 0 <= $logicalObj$$9$$.$getGroupIndex$() || $logicalObj$$9$$.$getSeriesIndex$(), $logicalObj$$9$$.$getSeries$(), $logicalObj$$9$$.$getGroup$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$51$$) {
  return this.$GetLogicalObject$($target$$51$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$4$$, $pageY$$4$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$4$$ - this.$_stageAbsolutePosition$.x, $pageY$$4$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$) {
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($JSCompiler_temp$$283_event$$112$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$ = $JSCompiler_temp$$283_event$$112$$.touches, $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$, $dataCursorOn$$inline_1603_relPos$$inline_1611$$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$;
    1 == $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$.length ? ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? ($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$ = this.$_getRelativePosition$($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageX, $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageY), 
    $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$processDragStart$($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageX, 
    $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageY, $JSCompiler_temp$$283_event$$112$$.target, this.$GetLogicalObject$($JSCompiler_temp$$283_event$$112$$.target)), $dataCursorOn$$inline_1603_relPos$$inline_1611$$ = D.$JSCompiler_alias_TRUE$$) : 2 == $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), 
    $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = this.$_getRelativePosition$($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageX, $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[0].pageY), $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$ = this.$_getRelativePosition$($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[1].pageX, 
    $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_pinchOn$ ? $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt1$ = 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_container$.$stageToLocal$($chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_container$.$stageToLocal$($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt2$.x, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_origPt2$.y) ? $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 
    0, 0, 0, 0, 0, 0, 0))));
    $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$), this.$_context$.$getTooltipManager$().$hideTooltip$());
    $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ || $dataCursorOn$$inline_1603_relPos$$inline_1611$$ ? ($JSCompiler_temp$$283_event$$112$$.preventDefault(), $JSCompiler_temp$$283_event$$112$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$283_event$$112$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$283_event$$112$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $dataCursorOn$$inline_1603_relPos$$inline_1611$$ = this.$_getRelativePosition$($JSCompiler_temp$$283_event$$112$$.pageX, $JSCompiler_temp$$283_event$$112$$.pageY);
    $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($JSCompiler_temp$$283_event$$112$$));
    if((!$JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$isSelectable$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9455_dragHandler$$inline_1604_obj$$inline_1614$$.$isSelectable$()) && 0 == $JSCompiler_temp$$283_event$$112$$.button && $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$) {
      ($chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$ = $chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$.$processDragStart$($dataCursorOn$$inline_1603_relPos$$inline_1611$$, $JSCompiler_temp$$283_event$$112$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$), this.$_chart$.setCursor($chartEvent$$inline_1602_dragHandler$$inline_1612_relPos1$$inline_1606$$.getCursor($dataCursorOn$$inline_1603_relPos$$inline_1611$$)), 
      (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_1613_relPos$$inline_1605_relPos2$$inline_1607_touches$$inline_1601$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$), $JSCompiler_temp$$283_event$$112$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$283_event$$112$$ = D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_temp$$283_event$$112$$
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$113$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$ = $event$$113$$.touches, $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$, $dataCursorOn$$inline_1620_relPos$$inline_1628$$;
    if(1 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.length) {
      var $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
      $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$ ? ($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageY), 
      $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$.$processDragMove$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageX, 
      $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageY, $event$$113$$.target, this.$GetLogicalObject$($event$$113$$.target)), $dataCursorOn$$inline_1620_relPos$$inline_1628$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      if(2 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
        if($chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[0].pageY), $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[1].pageX, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_pinchOn$) {
          $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_container$.$stageToLocal$($chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$);
          var $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_container$.$stageToLocal$($dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$), $deltas$$inline_9466$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$, 
          $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$, $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_lastPt2$), $totalDeltas$$inline_9467$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$, 
          $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$, $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_origPt2$);
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_lastPt1$ = $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$;
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$.$_lastPt2$ = $dragHandler$$inline_1621_newPt2$$inline_9465_relPos2$$inline_1624$$;
          $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_9466$$.$dxMin$, $deltas$$inline_9466$$.$dxMax$, $deltas$$inline_9466$$.$dyMin$, $deltas$$inline_9466$$.$dyMax$, $totalDeltas$$inline_9467$$.$dxMin$, $totalDeltas$$inline_9467$$.$dxMax$, $totalDeltas$$inline_9467$$.$dyMin$, $totalDeltas$$inline_9467$$.$dyMax$)
        }else {
          $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }
    ($chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ || $dataCursorOn$$inline_1620_relPos$$inline_1628$$) && $event$$113$$.preventDefault();
    $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$), this.$_context$.$getTooltipManager$().$hideTooltip$())
  }else {
    $dataCursorOn$$inline_1620_relPos$$inline_1628$$ = this.$_getRelativePosition$($event$$113$$.pageX, $event$$113$$.pageY);
    if($chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$ = $chartEvent$$inline_1619_dragHandler$$inline_1629_newPt1$$inline_9464_relPos1$$inline_1623$$.$processDragMove$($dataCursorOn$$inline_1620_relPos$$inline_1628$$, $event$$113$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
      }
    }
    $JSCompiler_StaticMethods_processPinchMove$self$$inline_9461_chartEvent$$inline_1630_relPos$$inline_1622_touches$$inline_1618$$ && $event$$113$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent1$$inline_1634_relPos$$inline_1639$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$;
    if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$ = this.$_panZoomHandler$;
      if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_pinchOn$) {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
        var $totalDeltas$$inline_9470$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_origPt1$, 
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_9470$$.$dxMin$, $totalDeltas$$inline_9470$$.$dxMax$, $totalDeltas$$inline_9470$$.$dyMin$, $totalDeltas$$inline_9470$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$)
    }
    if($chartEvent1$$inline_1634_relPos$$inline_1639$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$) {
      $axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$.preventDefault(), this.$_context$.$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
  }else {
    $chartEvent1$$inline_1634_relPos$$inline_1639$$ = this.$_getRelativePosition$($axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$.pageX, $axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$.pageY);
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$ = $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.$processDragEnd$($chartEvent1$$inline_1634_relPos$$inline_1639$$, $axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
      }
      this.$_chart$.setCursor($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9469_chartEvent2$$inline_1635_dragHandler$$inline_1640$$.getCursor($chartEvent1$$inline_1634_relPos$$inline_1639$$));
      ($axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$inline_1642_chartEvent$$inline_1641_event$$114$$, $chartEvent1$$inline_1634_relPos$$inline_1639$$.x, $chartEvent1$$inline_1634_relPos$$inline_1639$$.y))
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$118_relPos$$5$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$118_relPos$$5$$);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$118_relPos$$5$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$118_relPos$$5$$.pageX, $event$$118_relPos$$5$$.pageY, $event$$118_relPos$$5$$.target));
  var $dragHandler$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  $event$$118_relPos$$5$$ = this.$_getRelativePosition$($event$$118_relPos$$5$$.pageX, $event$$118_relPos$$5$$.pageY);
  $dragHandler$$3$$ && this.$_chart$.setCursor($dragHandler$$3$$.getCursor($event$$118_relPos$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$119_obj$$75$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$119_obj$$75$$);
  ($event$$119_obj$$75$$ = this.$GetLogicalObject$($event$$119_obj$$75$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOver$($event$$119_obj$$75$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$120_obj$$76$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$120_obj$$76$$);
  var $relPos$$6$$ = this.$_getRelativePosition$($event$$120_obj$$76$$.pageX, $event$$120_obj$$76$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$, $relPos$$6$$.x, $relPos$$6$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$.$getPlotRect$(), $relPos$$6$$.x, $relPos$$6$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_1648_axisSpace$$1$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  ($event$$120_obj$$76$$ = this.$GetLogicalObject$($event$$120_obj$$76$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOut$($event$$120_obj$$76$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$121$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$2_delta$$inline_1653$$ = $event$$121$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$121$$.wheelDelta : 0, $deltaXMin$$inline_1655_relPos$$7$$ = this.$_getRelativePosition$($event$$121$$.pageX, $event$$121$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$ = this.$_panZoomHandler$;
      var $startPt$$inline_1654$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_container$.$stageToLocal$($deltaXMin$$inline_1655_relPos$$7$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$, $startPt$$inline_1654$$.x, $startPt$$inline_1654$$.y)) {
        var $delta$$2_delta$$inline_1653$$ = $delta$$2_delta$$inline_1653$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_zoomRate$, $deltaXMin$$inline_1655_relPos$$7$$ = $delta$$2_delta$$inline_1653$$ * ($startPt$$inline_1654$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_1656$$ = -$delta$$2_delta$$inline_1653$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_1654$$.x), $deltaYMin$$inline_1657$$ = $delta$$2_delta$$inline_1653$$ * ($startPt$$inline_1654$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$ = -$delta$$2_delta$$inline_1653$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_1654$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $deltaXMin$$inline_1655_relPos$$7$$, $deltaXMax$$inline_1656$$, $deltaYMin$$inline_1657$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$, $deltaXMin$$inline_1655_relPos$$7$$, $deltaXMax$$inline_1656$$, $deltaYMin$$inline_1657$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$ && ($event$$121$$.preventDefault(), $event$$121$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1651_deltaYMax$$inline_1658_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$121$$.pageX, $event$$121$$.pageY, $event$$121$$.target))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$122_pos$$11$$) {
  var $obj$$77$$ = this.$GetLogicalObject$($event$$122_pos$$11$$.target);
  $event$$122_pos$$11$$ = this.$_getRelativePosition$($event$$122_pos$$11$$.pageX, $event$$122_pos$$11$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$122_pos$$11$$, $obj$$77$$);
  $obj$$77$$ && $obj$$77$$.$getAction$ && $obj$$77$$.$getAction$() && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$77$$.$getAction$(), $obj$$77$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$123$$) {
  var $dlo$$ = this.$GetLogicalObject$($event$$123$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$123$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$124$$) {
  var $dlo$$1$$ = this.$GetLogicalObject$($event$$124$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$124$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$1$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($dlo$$2_event$$125$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$2_event$$125$$ = this.$GetLogicalObject$($dlo$$2_event$$125$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$2_event$$125$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($dlo$$3_event$$126$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$3_event$$126$$ = this.$GetLogicalObject$($dlo$$3_event$$126$$.target), this.$_seriesRolloverHandler$.$processMouseOver$($dlo$$3_event$$126$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($dlo$$4_event$$127$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$4_event$$127$$ = this.$GetLogicalObject$($dlo$$4_event$$127$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$4_event$$127$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$16_obj$$78$$) {
  D.$DvtChartEventManager$$.$superclass$.$HandleTouchClickInternal$.call(this, $evt$$16_obj$$78$$);
  ($evt$$16_obj$$78$$ = this.$GetLogicalObject$($evt$$16_obj$$78$$.target)) && $evt$$16_obj$$78$$.$getAction$ && $evt$$16_obj$$78$$.$getAction$() && this.$FireEvent$(new D.$DvtActionEvent$$("action", $evt$$16_obj$$78$$.$getAction$(), $evt$$16_obj$$78$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$1$$) {
  this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$1$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$1$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$4$$, $dy$$4$$) {
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$4$$, $dy$$4$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$($logicalObj$$10$$) {
  return this.$_dataCursorHandler$ && ($logicalObj$$10$$ instanceof D.$DvtChartObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$131$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$131$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$DvtAgent$isTouchDevice$$)() ? "tooltip" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selection ? "select" : D.$JSCompiler_alias_NULL$$ : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, D.$JSCompiler_alias_FALSE$$), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$) {
  if($visible$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_showDragButtons$self$$inline_1664$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_showDragButtons$self$$inline_1664$$.$dragButtons$ && $JSCompiler_StaticMethods_showDragButtons$self$$inline_1664$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ((0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$), $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !(0,D.$DvtAgent$isTouchDevice$$)() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$6$$, $chart$$250$$) {
  this.Init($manager$$6$$, $chart$$250$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$7$$, $chart$$251$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$7$$);
  this.$_chart$ = $chart$$251$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$109$$) {
  return this.$isNavigationEvent$($event$$109$$) && !$event$$109$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$110$$) {
  return 32 == $event$$110$$.keyCode && $event$$110$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$111$$) {
  var $currentNavigable$$1_keyCode$$14_navigables$$8$$ = $event$$111$$.keyCode;
  if(9 == $currentNavigable$$1_keyCode$$14_navigables$$8$$) {
    if($currentNavigable$$1_keyCode$$14_navigables$$8$$ = this.$_eventManager$.$getFocus$()) {
      return $event$$111$$.preventDefault(), $currentNavigable$$1_keyCode$$14_navigables$$8$$
    }
    $currentNavigable$$1_keyCode$$14_navigables$$8$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable$$1_keyCode$$14_navigables$$8$$.length) {
      return $event$$111$$.preventDefault(), this.$getDefaultNavigable$($currentNavigable$$1_keyCode$$14_navigables$$8$$)
    }
  }else {
    27 == $currentNavigable$$1_keyCode$$14_navigables$$8$$ ? this.$_eventManager$.$cancelMarquee$($event$$111$$) : 33 == $currentNavigable$$1_keyCode$$14_navigables$$8$$ ? ($event$$111$$.ctrlKey || $event$$111$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), $event$$111$$.preventDefault()) : 34 == $currentNavigable$$1_keyCode$$14_navigables$$8$$ ? ($event$$111$$.ctrlKey || $event$$111$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? 
    this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), $event$$111$$.preventDefault()) : (0,D.$DvtKeyboardEvent$isEquals$$)($event$$111$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$111$$) ? this.$_eventManager$.$zoomBy$(1.5) : ((0,D.$DvtKeyboardEvent$isMinus$$)($event$$111$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$111$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
  }
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$111$$)
};
D.$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$1$$) {
  if(!$navigableItems$$1$$ || 0 >= $navigableItems$$1$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $isPie$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$4$$, $i$$206$$ = 0;$i$$206$$ < $navigableItems$$1$$.length;$i$$206$$++) {
    $navigable$$4$$ = $navigableItems$$1$$[$i$$206$$], !$defaultNavigable$$ || $navigable$$4$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$4$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
D.$DvtSeriesRolloverHandler$$ = function $$DvtSeriesRolloverHandler$$$($chart$$) {
  this.Init($chart$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSeriesRolloverHandler$$, D.$DvtObj$$, "DvtSeriesRolloverHandler");
D.$DvtSeriesRolloverHandler$$.prototype.Init = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOver$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOver$$($obj$$63$$) {
  this.$ProcessEvent$($obj$$63$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOut$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOut$$($obj$$64$$) {
  this.$ProcessEvent$($obj$$64$$, D.$JSCompiler_alias_FALSE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$ProcessEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartSeriesRolloverHandler$$ = function $$DvtChartSeriesRolloverHandler$$$($chart$$252$$, $handler$$36$$) {
  this.Init($chart$$252$$, $handler$$36$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesRolloverHandler$$, D.$DvtSeriesRolloverHandler$$, "DvtChartSeriesRolloverHandler");
D.$DvtChartSeriesRolloverHandler$$.prototype.Init = function $$DvtChartSeriesRolloverHandler$$$$Init$($chart$$253$$, $handler$$37$$) {
  D.$DvtChartSeriesRolloverHandler$$.$superclass$.Init.call(this);
  this.$_chart$ = $chart$$253$$;
  this.$EventHandler$ = $handler$$37$$
};
D.$DvtChartSeriesRolloverHandler$$.prototype.$ProcessEvent$ = function $$DvtChartSeriesRolloverHandler$$$$$ProcessEvent$$($obj$$73$$, $bOver$$4$$) {
  this.$_rolloverHandled$ = D.$JSCompiler_alias_FALSE$$;
  if($obj$$73$$) {
    var $rolloverContainer$$ = this.$_chart$, $eventType$$7$$ = $bOver$$4$$ ? "categoryRollOver" : "categoryRollOut", $categories$$8$$ = $obj$$73$$.$getCategories$ ? $obj$$73$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
    $categories$$8$$ && 0 < $categories$$8$$.length && (this.$EventHandler$.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($eventType$$7$$, $categories$$8$$), $rolloverContainer$$), this.$_rolloverHandled$ = D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$75$$, $displayables$$5$$, $seriesIndex$$16$$, $groupIndex$$7$$, $dataPos$$2$$) {
  this.Init($chart$$75$$, $displayables$$5$$, $seriesIndex$$16$$, $groupIndex$$7$$, $dataPos$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($chart$$76_dataItem$$7_i$$140_index$$59$$, $displayables$$6$$, $seriesIndex$$17$$, $groupIndex$$8$$, $dataPos$$3_seriesItem$$1$$) {
  this.$_chart$ = $chart$$76_dataItem$$7_i$$140_index$$59$$;
  this.$_displayables$ = $displayables$$6$$;
  this.$_group$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataPos$ = $dataPos$$3_seriesItem$$1$$;
  this.$_bundle$ = $chart$$76_dataItem$$7_i$$140_index$$59$$.$getBundle$();
  this.$_seriesIndex$ = (0,window.isNaN)($seriesIndex$$17$$) ? -1 : $seriesIndex$$17$$;
  0 <= this.$_seriesIndex$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$76_dataItem$$7_i$$140_index$$59$$, this.$_seriesIndex$));
  this.$_groupIndex$ = (0,window.isNaN)($groupIndex$$8$$) ? -1 : $groupIndex$$8$$;
  0 <= this.$_groupIndex$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$76_dataItem$$7_i$$140_index$$59$$, this.$_groupIndex$));
  if($dataPos$$3_seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$76_dataItem$$7_i$$140_index$$59$$, $seriesIndex$$17$$)) {
    this.$_action$ = $dataPos$$3_seriesItem$$1$$.action, this.$_stampId$ = $dataPos$$3_seriesItem$$1$$._id
  }
  this.$_categories$ = this.$_series$ != D.$JSCompiler_alias_NULL$$ ? [this.$_series$] : [];
  if($chart$$76_dataItem$$7_i$$140_index$$59$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$76_dataItem$$7_i$$140_index$$59$$, $seriesIndex$$17$$, $groupIndex$$8$$)) {
    $chart$$76_dataItem$$7_i$$140_index$$59$$.categories && (this.$_categories$ = this.$_categories$.concat($chart$$76_dataItem$$7_i$$140_index$$59$$.categories)), this.$_dataItemId$ = $chart$$76_dataItem$$7_i$$140_index$$59$$.id, this.$_action$ = $chart$$76_dataItem$$7_i$$140_index$$59$$.action, this.$_stampId$ = $chart$$76_dataItem$$7_i$$140_index$$59$$._id
  }
  if(this.$_action$) {
    for($chart$$76_dataItem$$7_i$$140_index$$59$$ = 0;$chart$$76_dataItem$$7_i$$140_index$$59$$ < this.$_displayables$.length;$chart$$76_dataItem$$7_i$$140_index$$59$$++) {
      this.$_displayables$[$chart$$76_dataItem$$7_i$$140_index$$59$$].setCursor("pointer")
    }
  }
  this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  for($chart$$76_dataItem$$7_i$$140_index$$59$$ = 0;$chart$$76_dataItem$$7_i$$140_index$$59$$ < $displayables$$6$$.length;$chart$$76_dataItem$$7_i$$140_index$$59$$++) {
    $displayables$$6$$[$chart$$76_dataItem$$7_i$$140_index$$59$$].$setAriaRole$("img"), this.$_updateAriaLabel$($displayables$$6$$[$chart$$76_dataItem$$7_i$$140_index$$59$$])
  }
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$27$$, $chart$$77$$, $identObj_seriesIndex$$18$$, $groupIndex$$9$$, $dataPos$$4$$) {
  $displayable$$27$$ && ($identObj_seriesIndex$$18$$ = new D.$DvtChartObjPeer$$($chart$$77$$, [$displayable$$27$$], $identObj_seriesIndex$$18$$, $groupIndex$$9$$, $dataPos$$4$$), $chart$$77$$.$registerObject$($identObj_seriesIndex$$18$$), $chart$$77$$.$getEventManager$().$associate$($displayable$$27$$, $identObj_seriesIndex$$18$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$_series$, this.$_group$) : this.$_series$ != D.$JSCompiler_alias_NULL$$ ? this.$_series$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getChart$ = (0,D.$JSCompiler_get$$)("$_chart$");
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$47$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($target$$47$$, this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$() && this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$141$$ = 0;$i$$141$$ < this.$_displayables$.length;$i$$141$$++) {
    this.$_displayables$[$i$$141$$].$setSelected$ && (this.$_displayables$[$i$$141$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$141$$]))
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$142$$ = 0;$i$$142$$ < this.$_displayables$.length;$i$$142$$++) {
    this.$_displayables$[$i$$142$$].$showHoverEffect$ && this.$_displayables$[$i$$142$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$143$$ = 0;$i$$143$$ < this.$_displayables$.length;$i$$143$$++) {
    this.$_displayables$[$i$$143$$].$hideHoverEffect$ && this.$_displayables$[$i$$143$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$5$$ = [];
  this.$isSelectable$() && $states$$5$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$5$$, this.$_bundle$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$28$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$28$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_1359_event$$100$$) {
  var $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$, $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$;
  $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ = $chart$$inline_1359_event$$100$$.keyCode;
  if($chart$$inline_1359_event$$100$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ && $chart$$inline_1359_event$$100$$.ctrlKey) {
    return this
  }
  $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ = $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$.$getObjects$(), $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ = [], $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = 0;$groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ < $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$.length;$groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$++) {
    (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chartObjs_groupIndex$$inline_1362_i$$inline_9441$$[$groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$]) && $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$.push($chartObjs_groupIndex$$inline_1362_i$$inline_9441$$[$groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$)) {
    $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_1359_event$$100$$, $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isLineArea$($chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$)) {
      $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ = $chart$$inline_1359_event$$100$$.keyCode;
      $chart$$inline_1359_event$$100$$ = this.$_chart$;
      var $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ = $chart$$inline_1359_event$$100$$.$_context$;
      $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ = this.$getGroupIndex$(), $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_1359_event$$100$$), $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$, $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_1359_event$$100$$), 
      $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$inline_1359_event$$100$$), $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$), $isDown$$inline_1369$$ = $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ ? $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ ? 39 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 
      37 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 40 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$, $isLeft$$inline_1370$$ = $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ ? 38 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ ? 39 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 
      37 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$, $isRight$$inline_1371$$ = $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ ? 40 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ ? 37 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 39 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$;
      if($i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ ? $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ ? 37 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 39 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ : 38 == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$) {
        $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$;
        $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_1359_event$$100$$);
        $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_1359_event$$100$$, $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$, $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$);
        $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ = $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ = 0;$i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ < $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$;$i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$++) {
          if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_1359_event$$100$$, $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$) && ($context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_1359_event$$100$$, $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$, $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$), $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ > $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ || 
          $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ == $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ && $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ > $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$)) {
            if($groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ !== D.$JSCompiler_alias_NULL$$ && $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$ < $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ || $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ == D.$JSCompiler_alias_NULL$$) {
              $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = $context$$inline_1360_isRTL$$inline_1368_itemValue$$inline_9426$$, $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ = $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$
            }
          }
        }
        $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$
      }else {
        if($isDown$$inline_1369$$) {
          $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$;
          $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_1359_event$$100$$);
          $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_1359_event$$100$$, $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$, $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$);
          $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ = D.$JSCompiler_alias_NULL$$;
          for($i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ -= 1;0 <= $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$;$i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$--) {
            if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_1359_event$$100$$, $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$) && ($i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_1359_event$$100$$, $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$, $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$), $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ < 
            $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ || $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ == $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ && $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$ < $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$)) {
              if($currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ !== D.$JSCompiler_alias_NULL$$ && $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ > $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ || $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ == D.$JSCompiler_alias_NULL$$) {
                $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$ = $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$, $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ = $i$$inline_9435_isHoriz$$inline_1366_nextSeriesIndex$$inline_9424_seriesCount$$inline_9431$$
              }
            }
          }
          $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$
        }else {
          $isRight$$inline_1371$$ ? ($currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$, $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ + 1, $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ && $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ >= $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ && 
          ($groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = 0)) : $isLeft$$inline_1370$$ && ($currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$ = $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$, $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ - 1, $i$$inline_9425_isPolar$$inline_1367_itemValue$$inline_9436$$ && 
          0 > $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ && ($groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $groupCount$$inline_1363_i$$144_nextSeriesIndex$$inline_9434_nextValue$$inline_9423$$ - 1))
        }
      }
      a: {
        $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ = $currentValue$$inline_9432_nextSeriesIndex$$inline_1364_seriesCount$$inline_9421$$;
        for($chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ = 0;$chartObjs_groupIndex$$inline_1362_i$$inline_9441$$ < $chart$$inline_1359_event$$100$$.$_peers$.length;$chartObjs_groupIndex$$inline_1362_i$$inline_9441$$++) {
          if($chart$$inline_1359_event$$100$$.$_peers$[$chartObjs_groupIndex$$inline_1362_i$$inline_9441$$].$getSeriesIndex$() == $chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$ && $chart$$inline_1359_event$$100$$.$_peers$[$chartObjs_groupIndex$$inline_1362_i$$inline_9441$$].$getGroupIndex$() == $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$) {
            $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $chart$$inline_1359_event$$100$$.$_peers$[$chartObjs_groupIndex$$inline_1362_i$$inline_9441$$];
            break a
          }
        }
        $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = D.$JSCompiler_alias_NULL$$
      }
      $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ && (0,D.$JSCompiler_StaticMethods_isNavigable$$)($groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$) ? $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ : this
    }else {
      if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$78_keyCode$$12_seriesIndex$$inline_1361_seriesIndex$$inline_9439$$) && (38 == $chart$$inline_1359_event$$100$$.keyCode || 40 == $chart$$inline_1359_event$$100$$.keyCode)) {
        $chart$$inline_1359_event$$100$$.keyCode -= 1
      }
      $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_1359_event$$100$$, $currentValue$$inline_9422_keyCode$$inline_1358_navigables$$6_nextValue$$inline_9433$$)
    }
  }
  return $groupIndex$$inline_9440_next$$10_nextGroupIndex$$inline_1365_nextObj$$inline_1372$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$10$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$10$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_StaticMethods_isNavigable$$ = function $$JSCompiler_StaticMethods_isNavigable$$$($JSCompiler_StaticMethods_isNavigable$self$$) {
  return-1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getGroupIndex$() && -1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getSeriesIndex$()
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$42$$, $series$$1$$, $group$$11$$) {
  this.Init($id$$42$$, $series$$1$$, $group$$11$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$43$$, $series$$2$$, $group$$12$$) {
  this.$_id$ = $id$$43$$;
  this.$_series$ = $series$$2$$;
  this.$_group$ = $group$$12$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$1$$) {
  return $dataItem$$1$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$1$$.$getGroup$() && this.$_series$ === $dataItem$$1$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, sliceLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), 
dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:D.$JSCompiler_alias_NULL$$, type:"bar", stack:"off", orientation:"vertical", polarGridShape:"circle", selection:"none", hideAndShowBehavior:"none", zoomAndScroll:"off", hoverBehavior:"none", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", timeAxisType:"disabled", __sparkBarSpacing:"subpixel", __spark:D.$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", title:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b; font-weight: bold"), 
halign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, xAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}}, yAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}}, y2Axis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}, alignTickMarks:"on"}, plotArea:{backgroundColor:D.$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"on", maxSize:0.3, layout:{gapRatio:1}}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), 
shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", selectionEffect:"highlight", groupTooltipType:"auto", seriesTooltipType:"auto", valueTooltipType:"auto", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:D.$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", 
marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelPosition:"auto", sliceLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), sliceLabelType:"percent", otherColor:"#4b4b4b", dataLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), dataLabelPosition:"auto", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E"}, 
layout:{gapWidthRatio:D.$JSCompiler_alias_NULL$$, gapHeightRatio:D.$JSCompiler_alias_NULL$$, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGap:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _resources:{}};
D.$DvtChartDefaults$getGapHeight$$ = function $$DvtChartDefaults$getGapHeight$$$($chart$$73$$, $defaultHeight$$) {
  return window.Math.ceil($defaultHeight$$ * (0,D.$JSCompiler_StaticMethods_getGapHeightRatio$$)($chart$$73$$))
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$236$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$236$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$236$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$236$$.$_context$) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$237$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$237$$) ? "radial" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$237$$) ? "bottom" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$237$$.$_context$) ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$238$$) {
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$238$$) ? "top" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$238$$.$_context$) ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$239$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$239$$) ? "disabled" != $chart$$239$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$240$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$240$$) ? "disabled" == $chart$$240$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$241$$) {
  return D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$241$$) || D.$DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$241$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$241$$) && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$241$$) ? 0.5 : 0
};
D.$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$242$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$242$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$22$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$242$$), $i$$205$$ = 0;$i$$205$$ < $seriesCount$$22$$;$i$$205$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$242$$, $i$$205$$)) {
      var $seriesType$$6$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$242$$, $i$$205$$), $lineType$$7$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$242$$, $i$$205$$);
      if("bar" != $seriesType$$6$$ && "centeredSegmented" != $lineType$$7$$ && "centeredStepped" != $lineType$$7$$) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$243$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$243$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$243$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$243$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$244$$, $type$$87$$) {
  if("y" == $type$$87$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$244$$) || "y2" == $type$$87$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$244$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $axisOptions$$7$$ = $chart$$244$$.$getOptions$()[$type$$87$$ + "Axis"];
  return"off" == $axisOptions$$7$$.rendered || "off" == $axisOptions$$7$$.tickLabel.rendered && !$axisOptions$$7$$.title ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$getTickLabelFontSize$ = function $$DvtChartAxisUtils$$$$getTickLabelFontSize$$($chart$$245$$, $type$$88$$) {
  var $options$$137$$ = $chart$$245$$.$getOptions$(), $tickLabelStyle$$ = $options$$137$$[$type$$88$$ + "Axis"].tickLabel.style;
  $tickLabelStyle$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$, (0,D.$DvtAxis$getDefaults$$)($options$$137$$.skin).tickLabel.style);
  return(0,window.parseInt)($tickLabelStyle$$.$getStyle$("font-size"))
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$_TYPE_LABEL$ = "label";
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$146$$) {
  var $options$$121_seriesCount$$12$$ = $chart$$146$$.$getOptions$();
  if(!$options$$121_seriesCount$$12$$ || !$options$$121_seriesCount$$12$$.series || 1 > $options$$121_seriesCount$$12$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$121_seriesCount$$12$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$146$$), $i$$190$$ = 0;$i$$190$$ < $options$$121_seriesCount$$12$$;$i$$190$$++) {
    var $seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$146$$, $i$$190$$);
    if($seriesItem$$18$$ && $seriesItem$$18$$.items && 1 <= $seriesItem$$18$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($chart$$147$$) {
  return!D.$DvtChartDataUtils$$.$hasData$($chart$$147$$) || D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$147$$)
};
D.$DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($chart$$148$$) {
  if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$148$$) || D.$DvtChartTypeUtils$$.$isPie$($chart$$148$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $groupIndex$$35_options$$122$$ = $chart$$148$$.$getOptions$();
  if(!$groupIndex$$35_options$$122$$ || !$groupIndex$$35_options$$122$$.series || 1 > $groupIndex$$35_options$$122$$.series.length || !$groupIndex$$35_options$$122$$.groups || 1 > $groupIndex$$35_options$$122$$.groups.length) {
    return D.$JSCompiler_alias_TRUE$$
  }
  var $seriesIndex$$62$$, $groupItem_seriesCount$$13$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$148$$), $groupCount$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$148$$);
  if("mixedFrequency" == $groupIndex$$35_options$$122$$.timeAxisType) {
    for($seriesIndex$$62$$ = 0;$seriesIndex$$62$$ < $groupItem_seriesCount$$13$$;$seriesIndex$$62$$++) {
      for($groupIndex$$35_options$$122$$ = 0;$groupIndex$$35_options$$122$$ < $groupCount$$2$$;$groupIndex$$35_options$$122$$++) {
        var $dataItem$$24$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$148$$, $seriesIndex$$62$$, $groupIndex$$35_options$$122$$);
        if($dataItem$$24$$ && ($dataItem$$24$$.x == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataItem$$24$$.x))) {
          return D.$JSCompiler_alias_TRUE$$
        }
      }
    }
  }else {
    if("enabled" == $groupIndex$$35_options$$122$$.timeAxisType) {
      for($groupIndex$$35_options$$122$$ = 0;$groupIndex$$35_options$$122$$ < $groupCount$$2$$;$groupIndex$$35_options$$122$$++) {
        if($groupItem_seriesCount$$13$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$148$$, $groupIndex$$35_options$$122$$), $groupItem_seriesCount$$13$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupItem_seriesCount$$13$$)) {
          return D.$JSCompiler_alias_TRUE$$
        }
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$149$$, $seriesIndex$$63$$) {
  var $dataItems$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$149$$, $seriesIndex$$63$$).items;
  if($dataItems$$2$$) {
    for(var $i$$191$$ = 0;$i$$191$$ < $dataItems$$2$$.length;$i$$191$$++) {
      if($dataItems$$2$$[$i$$191$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$150$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$150$$)) {
    for(var $maxGroups$$ = 0, $arSeriesStyle_options$$123$$ = $chart$$150$$.$getSeriesStyleArray$(), $bundle$$9_seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$150$$), $group$$19_i$$192$$ = 0;$group$$19_i$$192$$ < $bundle$$9_seriesCount$$14$$;$group$$19_i$$192$$++) {
      var $series$$11_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$150$$, $group$$19_i$$192$$);
      $series$$11_seriesItem$$20$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_options$$123$$, $series$$11_seriesItem$$20$$) && $arSeriesStyle_options$$123$$.push($series$$11_seriesItem$$20$$);
      if(($series$$11_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$150$$, $group$$19_i$$192$$)) && $series$$11_seriesItem$$20$$.items && $series$$11_seriesItem$$20$$.items.length > $maxGroups$$) {
        $maxGroups$$ = $series$$11_seriesItem$$20$$.items.length
      }
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$150$$) && ($series$$11_seriesItem$$20$$.displayInLegend = "off")
    }
    $arSeriesStyle_options$$123$$ = $chart$$150$$.$getOptions$();
    $arSeriesStyle_options$$123$$.groups || ($arSeriesStyle_options$$123$$.groups = []);
    for($bundle$$9_seriesCount$$14$$ = $chart$$150$$.$getBundle$();$arSeriesStyle_options$$123$$.groups.length < $maxGroups$$;) {
      $group$$19_i$$192$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$9_seriesCount$$14$$, "DEFAULT_GROUP_NAME", $arSeriesStyle_options$$123$$.groups.length + 1), $arSeriesStyle_options$$123$$.groups.push($group$$19_i$$192$$)
    }
    D.$DvtChartDataUtils$$.$_processTimeAxis$($chart$$150$$);
    D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$150$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$150$$) && ($arSeriesStyle_options$$123$$.styleDefaults.groupTooltipType = "none")
  }
};
D.$DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($chart$$151$$) {
  var $options$$124_seriesIndex$$64$$ = $chart$$151$$.$getOptions$(), $groupIndex$$36$$, $group$$20_seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$151$$), $groupCount$$3$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$151$$);
  if("mixedFrequency" == $options$$124_seriesIndex$$64$$.timeAxisType) {
    for($options$$124_seriesIndex$$64$$ = 0;$options$$124_seriesIndex$$64$$ < $group$$20_seriesCount$$15$$;$options$$124_seriesIndex$$64$$++) {
      for($groupIndex$$36$$ = 0;$groupIndex$$36$$ < $groupCount$$3$$;$groupIndex$$36$$++) {
        var $dataItem$$25$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$151$$, $options$$124_seriesIndex$$64$$, $groupIndex$$36$$);
        $dataItem$$25$$ != D.$JSCompiler_alias_NULL$$ && "string" == typeof $dataItem$$25$$.x && ($dataItem$$25$$.x = window.Date.parse($dataItem$$25$$.x))
      }
    }
  }else {
    if("enabled" == $options$$124_seriesIndex$$64$$.timeAxisType) {
      for($groupIndex$$36$$ = 0;$groupIndex$$36$$ < $groupCount$$3$$;$groupIndex$$36$$++) {
        $group$$20_seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$151$$, $groupIndex$$36$$), $group$$20_seriesCount$$15$$ != D.$JSCompiler_alias_NULL$$ && "string" == typeof $group$$20_seriesCount$$15$$ && ($options$$124_seriesIndex$$64$$.groups[$groupIndex$$36$$] = window.Date.parse($group$$20_seriesCount$$15$$))
      }
    }
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$152$$) {
  return $chart$$152$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$153$$, $seriesIndex$$65$$) {
  var $seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$153$$, $seriesIndex$$65$$);
  return $seriesItem$$21$$ ? $seriesItem$$21$$.id ? $seriesItem$$21$$.id : $seriesItem$$21$$.name || "" == $seriesItem$$21$$.name ? $seriesItem$$21$$.name : (0,window.String)($seriesIndex$$65$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$154$$, $seriesIndex$$66$$) {
  var $seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$154$$, $seriesIndex$$66$$);
  return $seriesItem$$22$$ && ($seriesItem$$22$$.name || "" == $seriesItem$$22$$.name) ? $seriesItem$$22$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$155$$, $series$$12$$) {
  for(var $numSeries$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$155$$), $seriesIndex$$67$$ = 0;$seriesIndex$$67$$ < $numSeries$$;$seriesIndex$$67$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$155$$, $seriesIndex$$67$$) == $series$$12$$) {
      return $seriesIndex$$67$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$156$$, $series$$13$$) {
  return $series$$13$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$156$$.$getSeriesStyleArray$(), $series$$13$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$156$$, $series$$13$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$157$$, $seriesIndex$$68$$) {
  if((0,window.isNaN)($seriesIndex$$68$$) || $seriesIndex$$68$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$125$$ = $chart$$157$$.$getOptions$();
  if($options$$125$$.series && $options$$125$$.series.length > $seriesIndex$$68$$) {
    return $options$$125$$.series[$seriesIndex$$68$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$158_seriesItem$$23$$, $seriesIndex$$69$$, $groupIndex$$37$$) {
  if((0,window.isNaN)($groupIndex$$37$$) || $groupIndex$$37$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($chart$$158_seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$158_seriesItem$$23$$, $seriesIndex$$69$$)) && $chart$$158_seriesItem$$23$$.items && 0 <= $groupIndex$$37$$ && $chart$$158_seriesItem$$23$$.items.length > $groupIndex$$37$$) {
    return $chart$$158_seriesItem$$23$$.items[$groupIndex$$37$$]
  }
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$159$$) {
  return $chart$$159$$.$getOptions$().groups.length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$160$$, $groupIndex$$38$$) {
  var $group$$21_groupItems$$ = $chart$$160$$.$getOptions$().groups;
  return 0 <= $groupIndex$$38$$ && $groupIndex$$38$$ < $group$$21_groupItems$$.length && ($group$$21_groupItems$$ = $group$$21_groupItems$$[$groupIndex$$38$$]) ? $group$$21_groupItems$$.id ? $group$$21_groupItems$$.id : $group$$21_groupItems$$.name || "" == $group$$21_groupItems$$.name ? $group$$21_groupItems$$.name : $group$$21_groupItems$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$161$$, $group$$22$$) {
  return D.$DvtChartDataUtils$$.$getGroups$($chart$$161$$).indexOf($group$$22$$)
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$162$$, $groupIndex$$39$$) {
  var $group$$23_groupItems$$1$$ = $chart$$162$$.$getOptions$().groups;
  return 0 <= $groupIndex$$39$$ && $groupIndex$$39$$ < $group$$23_groupItems$$1$$.length && ($group$$23_groupItems$$1$$ = $group$$23_groupItems$$1$$[$groupIndex$$39$$]) ? $group$$23_groupItems$$1$$.name ? $group$$23_groupItems$$1$$.name : $group$$23_groupItems$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$163$$) {
  for(var $groupCount$$4$$ = $chart$$163$$.$getOptions$().groups.length, $groups$$15$$ = [], $groupIndex$$40$$ = 0;$groupIndex$$40$$ < $groupCount$$4$$;$groupIndex$$40$$++) {
    $groups$$15$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$163$$, $groupIndex$$40$$))
  }
  return $groups$$15$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$164_dataItem$$26$$, $seriesIndex$$70$$, $groupIndex$$41$$) {
  $chart$$164_dataItem$$26$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$164_dataItem$$26$$, $seriesIndex$$70$$, $groupIndex$$41$$);
  if($chart$$164_dataItem$$26$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,window.isNaN)($chart$$164_dataItem$$26$$)) {
      if($chart$$164_dataItem$$26$$.value != D.$JSCompiler_alias_NULL$$) {
        return $chart$$164_dataItem$$26$$.value
      }
      if($chart$$164_dataItem$$26$$.y != D.$JSCompiler_alias_NULL$$) {
        return $chart$$164_dataItem$$26$$.y
      }
    }else {
      return $chart$$164_dataItem$$26$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$165$$, $seriesIndex$$71$$, $groupIndex$$42$$, $bIncludeHiddenSeries$$) {
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$165$$)) {
    for(var $seriesType$$5$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$165$$, $seriesIndex$$71$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$165$$, $seriesIndex$$71$$), $total$$7$$ = 0, $i$$193$$ = 0;$i$$193$$ <= $seriesIndex$$71$$;$i$$193$$++) {
      if(($bIncludeHiddenSeries$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$165$$, $i$$193$$)) && $seriesType$$5$$ == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$165$$, $i$$193$$) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$165$$, $i$$193$$)) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$165$$, $i$$193$$, $groupIndex$$42$$), $total$$7$$ = $total$$7$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
    return $total$$7$$
  }
  return D.$DvtChartDataUtils$$.getValue($chart$$165$$, $seriesIndex$$71$$, $groupIndex$$42$$)
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$166$$, $dataItem$$27_seriesIndex$$72_xVal$$, $groupIndex$$43$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$166$$)) {
    return $groupIndex$$43$$
  }
  $dataItem$$27_seriesIndex$$72_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$166$$, $dataItem$$27_seriesIndex$$72_xVal$$, $groupIndex$$43$$);
  if($dataItem$$27_seriesIndex$$72_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$27_seriesIndex$$72_xVal$$ = $dataItem$$27_seriesIndex$$72_xVal$$.x;
  return(0,window.isNaN)($dataItem$$27_seriesIndex$$72_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$166$$, $groupIndex$$43$$) : $dataItem$$27_seriesIndex$$72_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$167$$, $seriesIndex$$73$$) {
  var $dataItem$$28$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$167$$, $seriesIndex$$73$$, 0);
  return!(0,window.isNaN)($dataItem$$28$$) || $dataItem$$28$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$28$$.targetValue
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$168_minMax$$2$$, $seriesIndex$$74_xVal$$1$$, $groupIndex$$44$$) {
  $seriesIndex$$74_xVal$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$168_minMax$$2$$, $seriesIndex$$74_xVal$$1$$, $groupIndex$$44$$);
  if((0,window.isNaN)($seriesIndex$$74_xVal$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$168_minMax$$2$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$168_minMax$$2$$);
  return $chart$$168_minMax$$2$$.min != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$74_xVal$$1$$ < $chart$$168_minMax$$2$$.min || $chart$$168_minMax$$2$$.max != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$74_xVal$$1$$ > $chart$$168_minMax$$2$$.max ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($x1$$13$$, $y1$$9$$, $x2$$11$$, $y2$$7$$, $x$$134$$) {
  return $y1$$9$$ + ($y2$$7$$ - $y1$$9$$) * ($x$$134$$ - $x1$$13$$) / ($x2$$11$$ - $x1$$13$$)
};
D.$DvtChartDataUtils$$.$getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$getViewportEdgeYValues$$($chart$$169$$, $seriesIndex$$75$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$169$$, $seriesIndex$$75$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$1$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$169$$), $max$$5_minMax$$3$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$169$$), $min$$5$$ = $max$$5_minMax$$3$$.min, $max$$5_minMax$$3$$ = $max$$5_minMax$$3$$.max, $x$$135$$, $y$$107$$, $prevX$$, $prevY$$, $yMin$$, $yMax$$, $groupIndex$$45$$ = 0;$groupIndex$$45$$ < $seriesData$$.length;$groupIndex$$45$$++) {
    if($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$169$$, $seriesIndex$$75$$, $groupIndex$$45$$)) {
      $x$$135$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$169$$, $seriesIndex$$75$$, $groupIndex$$45$$), $y$$107$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$169$$, $seriesIndex$$75$$, $groupIndex$$45$$, $bIncludeHiddenSeries$$1$$), $prevX$$ != D.$JSCompiler_alias_NULL$$ && ($min$$5$$ != D.$JSCompiler_alias_NULL$$ && ($min$$5$$ > $prevX$$ && $min$$5$$ < $x$$135$$) && ($yMin$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$, $prevY$$, $x$$135$$, $y$$107$$, $min$$5$$)), $max$$5_minMax$$3$$ != 
      D.$JSCompiler_alias_NULL$$ && ($max$$5_minMax$$3$$ > $prevX$$ && $max$$5_minMax$$3$$ < $x$$135$$) && ($yMax$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$, $prevY$$, $x$$135$$, $y$$107$$, $max$$5_minMax$$3$$))), $prevX$$ = $x$$135$$, $prevY$$ = $y$$107$$
    }
  }
  return{min:$yMin$$, max:$yMax$$}
};
D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$ = function $$DvtChartDataUtils$$$$_getXAxisViewportMinMax$$($chart$$170$$) {
  var $options$$126$$ = $chart$$170$$.$getOptions$().xAxis, $isGroupAxis$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$170$$), $min$$6$$ = D.$JSCompiler_alias_NULL$$, $min$$6$$ = $options$$126$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $options$$126$$.viewportMin : $options$$126$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$170$$, $options$$126$$.viewportStartGroup) : $options$$126$$.viewportStartGroup : $options$$126$$.min, 
  $max$$6$$ = D.$JSCompiler_alias_NULL$$, $max$$6$$ = $options$$126$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $options$$126$$.viewportMax : $options$$126$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$170$$, $options$$126$$.viewportEndGroup) : $options$$126$$.viewportEndGroup : $options$$126$$.max;
  return{min:$min$$6$$, max:$max$$6$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$171$$, $type$$81$$, $limitToViewport$$, $excludeBubbleRadii$$) {
  var $isY2Value$$ = "y2" == $type$$81$$;
  $isY2Value$$ && ($type$$81$$ = "y");
  var $isYValue$$ = "y" == $type$$81$$;
  if(!$isYValue$$ || !D.$DvtChartTypeUtils$$.$isBLAC$($chart$$171$$)) {
    $limitToViewport$$ = D.$JSCompiler_alias_FALSE$$
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$171$$), $maxValue$$5$$ = -window.Infinity, $minValue$$5$$ = window.Infinity, $options$$127$$ = $chart$$171$$.$getOptions$(), $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$171$$), $seriesIndex$$76$$ = 0;$seriesIndex$$76$$ < $seriesCount$$16$$;$seriesIndex$$76$$++) {
    var $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$171$$, $seriesIndex$$76$$);
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$171$$, $seriesIndex$$76$$)) {
      var $groupIndex$$46_i$$194_isY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$171$$, $seriesIndex$$76$$);
      if(!($isYValue$$ && $isY2Value$$ != $groupIndex$$46_i$$194_isY2Series$$) && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.items)) {
        for($groupIndex$$46_i$$194_isY2Series$$ = 0;$groupIndex$$46_i$$194_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$46_i$$194_isY2Series$$++) {
          if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$171$$, $seriesIndex$$76$$, $groupIndex$$46_i$$194_isY2Series$$)) {
            "object" != typeof $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$46_i$$194_isY2Series$$] && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$46_i$$194_isY2Series$$] = {y:$edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$46_i$$194_isY2Series$$]});
            var $data$$63_items$$6$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$46_i$$194_isY2Series$$], $timeAxisGroupLabel_value$$64$$;
            $isYValue$$ ? $timeAxisGroupLabel_value$$64$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$171$$, $seriesIndex$$76$$, $groupIndex$$46_i$$194_isY2Series$$, $bIncludeHiddenSeries$$2$$) : $data$$63_items$$6$$ != D.$JSCompiler_alias_NULL$$ && ($options$$127$$.timeAxisType && ("enabled" == $options$$127$$.timeAxisType && $data$$63_items$$6$$.x == D.$JSCompiler_alias_NULL$$) && ($timeAxisGroupLabel_value$$64$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$171$$, $groupIndex$$46_i$$194_isY2Series$$), 
            (0,window.isNaN)($timeAxisGroupLabel_value$$64$$) || ($data$$63_items$$6$$.x = $timeAxisGroupLabel_value$$64$$)), $timeAxisGroupLabel_value$$64$$ = $data$$63_items$$6$$[$type$$81$$]);
            if((!$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$171$$, $seriesIndex$$76$$, $groupIndex$$46_i$$194_isY2Series$$)) && !(0,window.isNaN)($timeAxisGroupLabel_value$$64$$)) {
              var $min$$7_radius$$9$$ = 0;
              D.$DvtChartTypeUtils$$.$isBubble$($chart$$171$$) && (!$excludeBubbleRadii$$ && $data$$63_items$$6$$.markerSize) && ($isYValue$$ ? $min$$7_radius$$9$$ = $data$$63_items$$6$$._yAxisRadius : "x" == $type$$81$$ && ($min$$7_radius$$9$$ = $data$$63_items$$6$$._xAxisRadius));
              $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $timeAxisGroupLabel_value$$64$$ + $min$$7_radius$$9$$);
              $minValue$$5$$ = window.Math.min($minValue$$5$$, $timeAxisGroupLabel_value$$64$$ - $min$$7_radius$$9$$)
            }
          }
        }
        $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$JSCompiler_alias_NULL$$;
        "x" == $type$$81$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$171$$) : "y" == $type$$81$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$171$$) : "y2" == $type$$81$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$171$$));
        if($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ != D.$JSCompiler_alias_NULL$$) {
          for($groupIndex$$46_i$$194_isY2Series$$ = 0;$groupIndex$$46_i$$194_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$46_i$$194_isY2Series$$++) {
            var $j$$34_refObj$$5$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$46_i$$194_isY2Series$$];
            if($data$$63_items$$6$$ = $j$$34_refObj$$5$$.items) {
              for($j$$34_refObj$$5$$ = 0;$j$$34_refObj$$5$$ < $data$$63_items$$6$$.length;$j$$34_refObj$$5$$++) {
                if($data$$63_items$$6$$[$j$$34_refObj$$5$$] != D.$JSCompiler_alias_NULL$$) {
                  var $min$$7_radius$$9$$ = $data$$63_items$$6$$[$j$$34_refObj$$5$$].min, $max$$7$$ = $data$$63_items$$6$$[$j$$34_refObj$$5$$].max, $val$$24$$ = (0,window.isNaN)($data$$63_items$$6$$[$j$$34_refObj$$5$$]) ? $data$$63_items$$6$$[$j$$34_refObj$$5$$].value : $data$$63_items$$6$$[$j$$34_refObj$$5$$];
                  $min$$7_radius$$9$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($min$$7_radius$$9$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $min$$7_radius$$9$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $min$$7_radius$$9$$));
                  $max$$7$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($max$$7$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $max$$7$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $max$$7$$));
                  $val$$24$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$24$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$24$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $val$$24$$))
                }
              }
            }else {
              $min$$7_radius$$9$$ = $j$$34_refObj$$5$$.min, $max$$7$$ = $j$$34_refObj$$5$$.max, $val$$24$$ = $j$$34_refObj$$5$$.value, $min$$7_radius$$9$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($min$$7_radius$$9$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $min$$7_radius$$9$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $min$$7_radius$$9$$)), $max$$7$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($max$$7$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, 
              $max$$7$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $max$$7$$)), $val$$24$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$24$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$24$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $val$$24$$))
            }
          }
        }
        $limitToViewport$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getViewportEdgeYValues$($chart$$171$$, $seriesIndex$$76$$), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min)), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max != 
        D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max)))
      }
    }
  }
  return{min:$minValue$$5$$, max:$maxValue$$5$$}
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$172$$, $seriesIndex$$77$$) {
  var $seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$172$$, $seriesIndex$$77$$);
  return $seriesItem$$26$$ && "on" == $seriesItem$$26$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$172$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasMixedFrequency$ = function $$DvtChartDataUtils$$$$hasMixedFrequency$$($chart$$173$$) {
  return"mixedFrequency" == $chart$$173$$.$getOptions$().timeAxisType
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$174_peers$$4$$) {
  var $selection$$7$$ = $chart$$174_peers$$4$$.$getOptions$().selectedItems;
  $selection$$7$$ || ($selection$$7$$ = []);
  $chart$$174_peers$$4$$ = $chart$$174_peers$$4$$.$getObjects$();
  for(var $i$$195$$ = 0;$i$$195$$ < $selection$$7$$.length;$i$$195$$++) {
    var $id$$47$$ = $selection$$7$$[$i$$195$$].id;
    if($id$$47$$ && (!$selection$$7$$[$i$$195$$].series || !$selection$$7$$[$i$$195$$].group)) {
      for(var $j$$35$$ = 0;$j$$35$$ < $chart$$174_peers$$4$$.length;$j$$35$$++) {
        var $peer$$18$$ = $chart$$174_peers$$4$$[$j$$35$$];
        if($id$$47$$ == $peer$$18$$.$_dataItemId$) {
          $selection$$7$$[$i$$195$$].series = $peer$$18$$.$getSeries$();
          $selection$$7$$[$i$$195$$].group = $peer$$18$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$7$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$175_handler$$33_selectedIds$$4$$) {
  var $selection$$8$$ = [];
  if($chart$$175_handler$$33_selectedIds$$4$$ = $chart$$175_handler$$33_selectedIds$$4$$.$getSelectionHandler$()) {
    $chart$$175_handler$$33_selectedIds$$4$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$175_handler$$33_selectedIds$$4$$);
    for(var $i$$196$$ = 0;$i$$196$$ < $chart$$175_handler$$33_selectedIds$$4$$.length;$i$$196$$++) {
      var $selectedId$$ = $chart$$175_handler$$33_selectedIds$$4$$[$i$$196$$];
      $selection$$8$$.push({series:$selectedId$$.$getSeries$(), group:$selectedId$$.$getGroup$(), id:$selectedId$$.getId()})
    }
  }
  return $selection$$8$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$176_group$$24$$, $series$$14_seriesIndex$$78$$, $groupIndex$$47_i$$197$$) {
  var $handler$$34_selectedIds$$5$$ = $chart$$176_group$$24$$.$getSelectionHandler$();
  $series$$14_seriesIndex$$78$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$176_group$$24$$, $series$$14_seriesIndex$$78$$);
  $chart$$176_group$$24$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$176_group$$24$$, $groupIndex$$47_i$$197$$);
  if($handler$$34_selectedIds$$5$$ && $series$$14_seriesIndex$$78$$ != D.$JSCompiler_alias_NULL$$ && $chart$$176_group$$24$$ != D.$JSCompiler_alias_NULL$$) {
    $handler$$34_selectedIds$$5$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($handler$$34_selectedIds$$5$$);
    for($groupIndex$$47_i$$197$$ = 0;$groupIndex$$47_i$$197$$ < $handler$$34_selectedIds$$5$$.length;$groupIndex$$47_i$$197$$++) {
      var $selectedId$$1$$ = $handler$$34_selectedIds$$5$$[$groupIndex$$47_i$$197$$];
      if($selectedId$$1$$.$getSeries$() == $series$$14_seriesIndex$$78$$ && $selectedId$$1$$.$getGroup$() == $chart$$176_group$$24$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($axis$$14_chart$$177$$, $seriesIndex$$79$$, $dataItem$$29_groupIndex$$48$$) {
  $dataItem$$29_groupIndex$$48$$ = D.$DvtChartDataUtils$$.$getDataItem$($axis$$14_chart$$177$$, $seriesIndex$$79$$, $dataItem$$29_groupIndex$$48$$);
  if($dataItem$$29_groupIndex$$48$$.label != D.$JSCompiler_alias_NULL$$) {
    if("number" == typeof $dataItem$$29_groupIndex$$48$$.label) {
      var $options$$128$$ = $axis$$14_chart$$177$$.$getOptions$(), $min$$8$$, $max$$8$$, $majorIncrement$$1$$;
      if($axis$$14_chart$$177$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($axis$$14_chart$$177$$, $seriesIndex$$79$$) && $axis$$14_chart$$177$$.$y2Axis$ ? $axis$$14_chart$$177$$.$y2Axis$ : $axis$$14_chart$$177$$.$yAxis$) {
        $min$$8$$ = $axis$$14_chart$$177$$.$getGlobalMin$(), $max$$8$$ = $axis$$14_chart$$177$$.$getGlobalMax$(), $majorIncrement$$1$$ = $axis$$14_chart$$177$$.$getMajorIncrement$()
      }
      return D.$DvtChartTooltipUtils$$.$_formatValue$($options$$128$$.valueFormats, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $dataItem$$29_groupIndex$$48$$.label, $min$$8$$, $max$$8$$, $majorIncrement$$1$$)
    }
    return $dataItem$$29_groupIndex$$48$$.label
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$216$$) {
  return $chart$$216$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$217$$) {
  return $chart$$217$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$218_options$$134$$, $category$$8$$, $visibility$$2$$) {
  var $hiddenCategories$$4_i$$200_seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$218_options$$134$$, D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$218_options$$134$$, $category$$8$$));
  if($category$$8$$ == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ && D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$218_options$$134$$) !== $visibility$$2$$) {
    D.$DvtPieChartUtils$$.$setOtherSliceVisibility$($chart$$218_options$$134$$, $visibility$$2$$)
  }else {
    if($hiddenCategories$$4_i$$200_seriesItem$$27$$ && $hiddenCategories$$4_i$$200_seriesItem$$27$$.visibility !== $visibility$$2$$) {
      $hiddenCategories$$4_i$$200_seriesItem$$27$$.visibility = $visibility$$2$$
    }else {
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$218_options$$134$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
      $hiddenCategories$$4_i$$200_seriesItem$$27$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$218_options$$134$$);
      "hidden" == $visibility$$2$$ ? $hiddenCategories$$4_i$$200_seriesItem$$27$$.push($category$$8$$) : $hiddenCategories$$4_i$$200_seriesItem$$27$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$4_i$$200_seriesItem$$27$$, $category$$8$$), 1);
      if(($chart$$218_options$$134$$ = $chart$$218_options$$134$$.$getOptions$()) && $chart$$218_options$$134$$.legend && $chart$$218_options$$134$$.legend.sections) {
        for($hiddenCategories$$4_i$$200_seriesItem$$27$$ = 0;$hiddenCategories$$4_i$$200_seriesItem$$27$$ < $chart$$218_options$$134$$.legend.sections.length;$hiddenCategories$$4_i$$200_seriesItem$$27$$++) {
          var $dataSection$$1$$ = $chart$$218_options$$134$$.legend.sections[$hiddenCategories$$4_i$$200_seriesItem$$27$$];
          if($dataSection$$1$$ && $dataSection$$1$$.items) {
            for(var $j$$36$$ = 0;$j$$36$$ < $dataSection$$1$$.items.length;$j$$36$$++) {
              $dataSection$$1$$.items[$j$$36$$].id == $category$$8$$ && ($dataSection$$1$$.items[$j$$36$$].categoryVisibility = $visibility$$2$$)
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$219$$) {
  return"off" != $chart$$219$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$220_zs$$) {
  $chart$$220_zs$$ = $chart$$220_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$220_zs$$ || "delayed" == $chart$$220_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$221_zs$$1$$) {
  $chart$$221_zs$$1$$ = $chart$$221_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$221_zs$$1$$ || "liveScrollOnly" == $chart$$221_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$222_zs$$2$$) {
  $chart$$222_zs$$2$$ = $chart$$222_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$222_zs$$2$$ || "delayedScrollOnly" == $chart$$222_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$223$$, $selection$$9$$) {
  for(var $ret$$37$$ = [], $i$$201$$ = 0;$i$$201$$ < $selection$$9$$.length;$i$$201$$++) {
    var $item$$3_otherItems$$ = $selection$$9$$[$i$$201$$];
    $item$$3_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$3_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$223$$), $ret$$37$$ = $ret$$37$$.concat($item$$3_otherItems$$)) : $ret$$37$$.push($item$$3_otherItems$$)
  }
  return $ret$$37$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$106$$) {
  $event$$106$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$106$$.x -= 1);
  $event$$106$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$106$$.$w$ += 2);
  $event$$106$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$106$$.y -= 1);
  $event$$106$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$106$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$224$$, $event$$107$$) {
  for(var $peers$$5$$ = $chart$$224$$.$getObjects$(), $boundedPeers$$ = [], $i$$202$$ = 0;$i$$202$$ < $peers$$5$$.length;$i$$202$$++) {
    var $peer$$19$$ = $peers$$5$$[$i$$202$$], $dataPos$$5$$ = $peer$$19$$.$_dataPos$;
    if($dataPos$$5$$) {
      var $dataPos$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$224$$.$getPlotArea$(), $dataPos$$5$$), $withinY$$ = $event$$107$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.y >= $event$$107$$.y && $dataPos$$5$$.y <= $event$$107$$.y + $event$$107$$.$h$;
      ($event$$107$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.x >= $event$$107$$.x && $dataPos$$5$$.x <= $event$$107$$.x + $event$$107$$.$w$) && $withinY$$ && $boundedPeers$$.push($peer$$19$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$225$$, $event$$108_maxPt_xMinMax$$, $limitExtent$$) {
  var $plotArea$$2_yMinMax$$ = $chart$$225$$.$getPlotArea$(), $coords$$13_minPt$$ = $plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$108_maxPt_xMinMax$$.x, $event$$108_maxPt_xMinMax$$.y));
  $event$$108_maxPt_xMinMax$$ = $plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$108_maxPt_xMinMax$$.x + $event$$108_maxPt_xMinMax$$.$w$, $event$$108_maxPt_xMinMax$$.y + $event$$108_maxPt_xMinMax$$.$h$));
  $coords$$13_minPt$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$225$$, $coords$$13_minPt$$.x, $event$$108_maxPt_xMinMax$$.x, $coords$$13_minPt$$.y, $event$$108_maxPt_xMinMax$$.y);
  $event$$108_maxPt_xMinMax$$ = {};
  var $plotArea$$2_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$225$$.$xAxis$ && ($event$$108_maxPt_xMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$225$$.$xAxis$, $coords$$13_minPt$$.$xMin$, $coords$$13_minPt$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$225$$.$xAxis$, $event$$108_maxPt_xMinMax$$.min, $event$$108_maxPt_xMinMax$$.max));
  $chart$$225$$.$yAxis$ && ($plotArea$$2_yMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$225$$.$yAxis$, $coords$$13_minPt$$.$yMin$, $coords$$13_minPt$$.$yMax$, $limitExtent$$));
  $chart$$225$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$225$$.$y2Axis$, $coords$$13_minPt$$.$yMin$, $coords$$13_minPt$$.$yMax$, $limitExtent$$));
  return{$xMin$:$event$$108_maxPt_xMinMax$$.min, $xMax$:$event$$108_maxPt_xMinMax$$.max, $yMin$:$plotArea$$2_yMinMax$$.min, $yMax$:$plotArea$$2_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$15$$, $center$$10_min$$9_minCoord$$, $max$$9_maxCoord$$, $limitExtent$$1_minExtent$$) {
  $center$$10_min$$9_minCoord$$ = $axis$$15$$.$getUnboundedValueAt$($center$$10_min$$9_minCoord$$);
  $max$$9_maxCoord$$ = $axis$$15$$.$getUnboundedValueAt$($max$$9_maxCoord$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$15$$.$getMinimumExtent$(), $max$$9_maxCoord$$ - $center$$10_min$$9_minCoord$$ < $limitExtent$$1_minExtent$$ && ($center$$10_min$$9_minCoord$$ = ($max$$9_maxCoord$$ + $center$$10_min$$9_minCoord$$) / 2, $max$$9_maxCoord$$ = $center$$10_min$$9_minCoord$$ + $limitExtent$$1_minExtent$$ / 2, $center$$10_min$$9_minCoord$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$15$$, $center$$10_min$$9_minCoord$$, 
  $max$$9_maxCoord$$)) : {min:$center$$10_min$$9_minCoord$$, max:$max$$9_maxCoord$$}
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$226$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$226$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$1$$ = {};
  $yMinDelta_yMinMax$$1$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$2$$ = {};
  $chart$$226$$.$xAxis$ && ($xMaxDelta_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$226$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$226$$.$xAxis$, $xMaxDelta_xMinMax$$1$$.min, $xMaxDelta_xMinMax$$1$$.max));
  $chart$$226$$.$yAxis$ && ($yMinDelta_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$226$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$226$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$226$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$1$$.min, $xMax$:$xMaxDelta_xMinMax$$1$$.max, $yMin$:$yMinDelta_yMinMax$$1$$.min, $yMax$:$yMinDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$16$$, $minDelta$$, $maxDelta$$) {
  var $min$$10$$ = $axis$$16$$.$getViewportMin$(), $max$$10$$ = $axis$$16$$.$getViewportMax$();
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$16$$)) {
    return{min:$min$$10$$, max:$max$$10$$}
  }
  var $minDeltaVal$$ = $axis$$16$$.$getUnboundedValueAt$($minDelta$$) - $axis$$16$$.$getUnboundedValueAt$(0), $maxDeltaVal$$ = $axis$$16$$.$getUnboundedValueAt$($maxDelta$$) - $axis$$16$$.$getUnboundedValueAt$(0), $weight$$ = 1;
  $minDelta$$ != $maxDelta$$ && $max$$10$$ + $maxDeltaVal$$ - ($min$$10$$ + $minDeltaVal$$) < $axis$$16$$.$getMinimumExtent$() && ($weight$$ = ($max$$10$$ - $min$$10$$ - $axis$$16$$.$getMinimumExtent$()) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$16$$, $min$$10$$ + $minDeltaVal$$ * $weight$$, $max$$10$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$227$$, $xMin$$, $xMax$$, $yMin$$1$$, $yMax$$1$$) {
  var $axisCoord$$3$$ = {}, $isRTL$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$227$$.$_context$);
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$227$$) ? ($axisCoord$$3$$.$xMin$ = $yMin$$1$$, $axisCoord$$3$$.$xMax$ = $yMax$$1$$, $axisCoord$$3$$.$yMin$ = $isRTL$$5$$ ? $xMax$$ : $xMin$$, $axisCoord$$3$$.$yMin$ = $isRTL$$5$$ ? $xMin$$ : $xMax$$) : ($axisCoord$$3$$.$xMin$ = $isRTL$$5$$ ? $xMax$$ : $xMin$$, $axisCoord$$3$$.$xMax$ = $isRTL$$5$$ ? $xMin$$ : $xMax$$, $axisCoord$$3$$.$yMin$ = $yMax$$1$$, $axisCoord$$3$$.$yMax$ = $yMin$$1$$);
  return $axisCoord$$3$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$17_globalMax$$, $min$$11$$, $max$$11$$) {
  var $globalMin$$ = $axis$$17_globalMax$$.$getGlobalMin$();
  $axis$$17_globalMax$$ = $axis$$17_globalMax$$.$getGlobalMax$();
  $max$$11$$ - $min$$11$$ >= $axis$$17_globalMax$$ - $globalMin$$ ? ($min$$11$$ = $globalMin$$, $max$$11$$ = $axis$$17_globalMax$$) : $min$$11$$ < $globalMin$$ ? ($max$$11$$ += $globalMin$$ - $min$$11$$, $min$$11$$ = $globalMin$$) : $max$$11$$ > $axis$$17_globalMax$$ && ($min$$11$$ -= $max$$11$$ - $axis$$17_globalMax$$, $max$$11$$ = $axis$$17_globalMax$$);
  return{min:$min$$11$$, max:$max$$11$$}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$18$$, $min$$12_startIdx$$, $endIdx_max$$12$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$18$$) && ($min$$12_startIdx$$ = window.Math.ceil($min$$12_startIdx$$), $endIdx_max$$12$$ = window.Math.floor($endIdx_max$$12$$), $endIdx_max$$12$$ >= $min$$12_startIdx$$) ? {$startGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$18$$) ? $axis$$18$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$18$$.$Info$, $min$$12_startIdx$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$, $endGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$18$$) ? 
  $axis$$18$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$18$$.$Info$, $endIdx_max$$12$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$} : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$228$$, $selected$$20$$) {
  var $handler$$35$$ = $chart$$228$$.$getSelectionHandler$();
  if($handler$$35$$) {
    for(var $peers$$6$$ = $chart$$228$$.$getObjects$(), $selectedIds$$6$$ = [], $i$$203$$ = 0;$i$$203$$ < $selected$$20$$.length;$i$$203$$++) {
      for(var $j$$37$$ = 0;$j$$37$$ < $peers$$6$$.length;$j$$37$$++) {
        var $peer$$20$$ = $peers$$6$$[$j$$37$$];
        $peer$$20$$.$getSeries$() === $selected$$20$$[$i$$203$$].series && $peer$$20$$.$getGroup$() === $selected$$20$$[$i$$203$$].group && $selectedIds$$6$$.push($peer$$20$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$35$$, $selectedIds$$6$$, $peers$$6$$)
  }
};
D.$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$229_peers$$7$$) {
  var $navigables$$7$$ = [];
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$229_peers$$7$$)) {
    for(var $slices$$7$$ = $chart$$229_peers$$7$$.$pieChart$.$_slices$, $i$$204$$ = 0;$i$$204$$ < $slices$$7$$.length;$i$$204$$++) {
      D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$229_peers$$7$$, $slices$$7$$[$i$$204$$].$getSeriesIndex$()) && $navigables$$7$$.push($slices$$7$$[$i$$204$$])
    }
  }else {
    $chart$$229_peers$$7$$ = $chart$$229_peers$$7$$.$getObjects$();
    for($i$$204$$ = 0;$i$$204$$ < $chart$$229_peers$$7$$.length;$i$$204$$++) {
      (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chart$$229_peers$$7$$[$i$$204$$]) && $navigables$$7$$.push($chart$$229_peers$$7$$[$i$$204$$])
    }
  }
  return $navigables$$7$$
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getObjects$ = function $$DvtChartRefObjUtils$$$$getObjects$$($chart$$246_y2$$8$$) {
  var $x$$137$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$246_y2$$8$$), $y$$109$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$246_y2$$8$$);
  $chart$$246_y2$$8$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$246_y2$$8$$);
  return $x$$137$$.concat($y$$109$$, $chart$$246_y2$$8$$)
};
D.$DvtChartRefObjUtils$$.$getXAxisObjects$ = function $$DvtChartRefObjUtils$$$$getXAxisObjects$$($chart$$247_options$$138$$) {
  return($chart$$247_options$$138$$ = $chart$$247_options$$138$$.$getOptions$()) && $chart$$247_options$$138$$.xAxis && $chart$$247_options$$138$$.xAxis.referenceObjects ? $chart$$247_options$$138$$.xAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getYAxisObjects$ = function $$DvtChartRefObjUtils$$$$getYAxisObjects$$($chart$$248_options$$139$$) {
  return($chart$$248_options$$139$$ = $chart$$248_options$$139$$.$getOptions$()) && $chart$$248_options$$139$$.yAxis && $chart$$248_options$$139$$.yAxis.referenceObjects ? $chart$$248_options$$139$$.yAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getY2AxisObjects$ = function $$DvtChartRefObjUtils$$$$getY2AxisObjects$$($chart$$249_options$$140$$) {
  return($chart$$249_options$$140$$ = $chart$$249_options$$140$$.$getOptions$()) && $chart$$249_options$$140$$.y2Axis && $chart$$249_options$$140$$.y2Axis.referenceObjects ? $chart$$249_options$$140$$.y2Axis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$6$$) {
  return"area" == $refObj$$6$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$7$$) {
  return"front" == $refObj$$7$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$8$$) {
  return $refObj$$8$$.color ? $refObj$$8$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$9$$) {
  return $refObj$$9$$.lineWidth ? $refObj$$9$$.lineWidth : 1
};
D.$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$10$$) {
  return $refObj$$10$$.lineType ? $refObj$$10$$.lineType : "straight"
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$230_colors$$, $pattern$$3_seriesIndex$$83$$, $groupIndex$$49_seriesEffect$$, $angle$$18_bHoriz$$8$$, $barWidth$$4$$) {
  var $color$$20_stops$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$230_colors$$, $pattern$$3_seriesIndex$$83$$, $groupIndex$$49_seriesEffect$$);
  $pattern$$3_seriesIndex$$83$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$230_colors$$, $pattern$$3_seriesIndex$$83$$, $groupIndex$$49_seriesEffect$$);
  $groupIndex$$49_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$230_colors$$);
  return $pattern$$3_seriesIndex$$83$$ ? new D.$DvtPatternFill$$($pattern$$3_seriesIndex$$83$$, $color$$20_stops$$) : "gradient" == $groupIndex$$49_seriesEffect$$ && 3 < $barWidth$$4$$ ? ($angle$$18_bHoriz$$8$$ = $angle$$18_bHoriz$$8$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$230_colors$$) ? ($chart$$230_colors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$20_stops$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$20_stops$$, -0.04, -0.05)], $color$$20_stops$$ = [0, 
  1]) : ($chart$$230_colors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$20_stops$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$20_stops$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$20_stops$$, 0.25), $color$$20_stops$$, D.$DvtColorUtils$$.$getPastel$($color$$20_stops$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$20_stops$$, 0.9)], $color$$20_stops$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$18_bHoriz$$8$$, $chart$$230_colors$$, D.$JSCompiler_alias_NULL$$, 
  $color$$20_stops$$)) : new D.$DvtSolidFill$$($color$$20_stops$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$231$$, $seriesIndex$$84$$) {
  var $alpha$$10_colors$$1_isLineWithArea$$1$$ = "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$231$$, $seriesIndex$$84$$), $color$$21_seriesItem$$28_stops$$1$$;
  ($color$$21_seriesItem$$28_stops$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$231$$, $seriesIndex$$84$$)) && $color$$21_seriesItem$$28_stops$$1$$.areaColor ? $color$$21_seriesItem$$28_stops$$1$$ = $color$$21_seriesItem$$28_stops$$1$$.areaColor : ($color$$21_seriesItem$$28_stops$$1$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$231$$, $seriesIndex$$84$$), $alpha$$10_colors$$1_isLineWithArea$$1$$ && ($color$$21_seriesItem$$28_stops$$1$$ = D.$DvtColorUtils$$.$setAlpha$($color$$21_seriesItem$$28_stops$$1$$, 
  0.2)));
  var $angle$$19_pattern$$4$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$231$$, $seriesIndex$$84$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$231$$);
  return $angle$$19_pattern$$4$$ ? new D.$DvtPatternFill$$($angle$$19_pattern$$4$$, $color$$21_seriesItem$$28_stops$$1$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$19_pattern$$4$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$231$$) ? 180 : 270, $alpha$$10_colors$$1_isLineWithArea$$1$$ ? ($alpha$$10_colors$$1_isLineWithArea$$1$$ = D.$DvtColorUtils$$.$getAlpha$($color$$21_seriesItem$$28_stops$$1$$), $alpha$$10_colors$$1_isLineWithArea$$1$$ = [D.$DvtColorUtils$$.$setAlpha$($color$$21_seriesItem$$28_stops$$1$$, 
  window.Math.min($alpha$$10_colors$$1_isLineWithArea$$1$$ + 0.2, 1)), D.$DvtColorUtils$$.$setAlpha$($color$$21_seriesItem$$28_stops$$1$$, window.Math.max($alpha$$10_colors$$1_isLineWithArea$$1$$ - 0.15, 0))], $color$$21_seriesItem$$28_stops$$1$$ = [0, 1]) : D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$231$$) ? ($alpha$$10_colors$$1_isLineWithArea$$1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$21_seriesItem$$28_stops$$1$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$21_seriesItem$$28_stops$$1$$, 
  -0.04, -0.05)], $color$$21_seriesItem$$28_stops$$1$$ = [0, 1]) : ($alpha$$10_colors$$1_isLineWithArea$$1$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$231$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$21_seriesItem$$28_stops$$1$$, 0.5), $color$$21_seriesItem$$28_stops$$1$$, D.$DvtColorUtils$$.$getPastel$($color$$21_seriesItem$$28_stops$$1$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$21_seriesItem$$28_stops$$1$$, 0.5), $color$$21_seriesItem$$28_stops$$1$$, D.$DvtColorUtils$$.$getDarker$($color$$21_seriesItem$$28_stops$$1$$, 
  0.7)], $color$$21_seriesItem$$28_stops$$1$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$($angle$$19_pattern$$4$$, $alpha$$10_colors$$1_isLineWithArea$$1$$, D.$JSCompiler_alias_NULL$$, $color$$21_seriesItem$$28_stops$$1$$)) : new D.$DvtSolidFill$$($color$$21_seriesItem$$28_stops$$1$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$232_colors$$2_linearColors_radialColors$$, $seriesIndex$$85$$, $groupIndex$$50$$) {
  var $color$$22$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$232_colors$$2_linearColors_radialColors$$, $seriesIndex$$85$$, $groupIndex$$50$$), $pattern$$5$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$232_colors$$2_linearColors_radialColors$$, $seriesIndex$$85$$, $groupIndex$$50$$);
  if("bubble" == $chart$$232_colors$$2_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$232_colors$$2_linearColors_radialColors$$);
    if($pattern$$5$$) {
      return new D.$DvtPatternFill$$($pattern$$5$$, $color$$22$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$232_colors$$2_linearColors_radialColors$$)) {
        return $chart$$232_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$22$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$22$$, -0.04, -0.05)], new D.$DvtLinearGradientFill$$(270, $chart$$232_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 1])
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$232_colors$$2_linearColors_radialColors$$, $seriesIndex$$85$$, $groupIndex$$50$$)) {
        return $chart$$232_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$22$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$22$$, 0.1), $color$$22$$, D.$DvtColorUtils$$.$getDarker$($color$$22$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$232_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$232_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$22$$, 0.15), $color$$22$$, D.$DvtColorUtils$$.$getDarker$($color$$22$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$22$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$232_colors$$2_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$22$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$233_colors$$3$$, $pattern$$6_seriesIndex$$86$$, $color$$23_stops$$3$$, $dimensions$$1_fill$$15$$, $bBackground$$) {
  $pattern$$6_seriesIndex$$86$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$233_colors$$3$$, $pattern$$6_seriesIndex$$86$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$233_colors$$3$$);
  return $pattern$$6_seriesIndex$$86$$ && !$bBackground$$ ? ($dimensions$$1_fill$$15$$ = new D.$DvtPatternFill$$($pattern$$6_seriesIndex$$86$$, $color$$23_stops$$3$$), "vertical" == $chart$$233_colors$$3$$.$getOptions$().orientation && ((0,D.$DvtAgent$isRightToLeft$$)($chart$$233_colors$$3$$.$_context$) ? $dimensions$$1_fill$$15$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions$$1_fill$$15$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions$$1_fill$$15$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$233_colors$$3$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$233_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$23_stops$$3$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$23_stops$$3$$, 0, 0.12), $color$$23_stops$$3$$], $color$$23_stops$$3$$ = [0, 0.65, 1]) : ($chart$$233_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$23_stops$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$23_stops$$3$$, -0.04, -0.05)], $color$$23_stops$$3$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$233_colors$$3$$, D.$JSCompiler_alias_NULL$$, $color$$23_stops$$3$$, [$dimensions$$1_fill$$15$$.x, $dimensions$$1_fill$$15$$.y, $dimensions$$1_fill$$15$$.$w$, $dimensions$$1_fill$$15$$.$h$])) : new D.$DvtSolidFill$$($color$$23_stops$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$234$$) {
  return"skyros" != $chart$$234$$.$getOptions$().skin
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$91$$, $seriesIndex$$33$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$91$$)) {
    return"auto"
  }
  var $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$91$$, $seriesIndex$$33$$), $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ = $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ ? $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
  if(!$series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ || "auto" == $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$) {
    if(D.$DvtChartTypeUtils$$.$isBar$($chart$$91$$)) {
      return"bar"
    }
    if(D.$DvtChartTypeUtils$$.$isLine$($chart$$91$$)) {
      return"line"
    }
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$91$$)) {
      return"area"
    }
    if(D.$DvtChartTypeUtils$$.$isLineWithArea$($chart$$91$$)) {
      return"lineWithArea"
    }
    if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$91$$)) {
      return $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$91$$, $seriesIndex$$33$$), $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$91$$, $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$6_seriesItem$$4_seriesType$$4_typeIndex$$]
    }
  }else {
    return $series$$6_seriesItem$$4_seriesType$$4_typeIndex$$
  }
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$92$$) {
  return $chart$$92$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$93_colorIndex$$, $series$$7_seriesIndex$$34$$, $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$) {
  if(($dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$93_colorIndex$$, $series$$7_seriesIndex$$34$$, $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$)) && $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$.color || ($dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$93_colorIndex$$, $series$$7_seriesIndex$$34$$)) && $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$.color) {
    return $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$.color
  }
  $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$ = $chart$$93_colorIndex$$.$getOptions$();
  var $defaultColors$$ = $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$.styleDefaults.colors;
  $series$$7_seriesIndex$$34$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$93_colorIndex$$, $series$$7_seriesIndex$$34$$);
  $chart$$93_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$93_colorIndex$$, $series$$7_seriesIndex$$34$$) % $defaultColors$$.length;
  return $dataItem$$12_groupIndex$$19_options$$102_seriesItem$$5$$.styleDefaults.colors[$chart$$93_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$, $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$) {
  if(D.$DvtChartTypeUtils$$.$isScatter$($chart$$94_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$, $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$)) && $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.pattern && "auto" != $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.pattern || ($dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$)) && 
  $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.pattern && "auto" != $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.pattern) {
    return $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$94_patternIndex$$)) {
    $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$ = $chart$$94_patternIndex$$.$getOptions$();
    var $defaultPatterns$$ = $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.styleDefaults.patterns;
    $series$$8_seriesIndex$$35$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$);
    $chart$$94_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$94_patternIndex$$, $series$$8_seriesIndex$$35$$) % $defaultPatterns$$.length;
    return $dataItem$$13_groupIndex$$20_options$$103_seriesItem$$6$$.styleDefaults.patterns[$chart$$94_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$95_markerColor$$, $seriesIndex$$36$$, $groupIndex$$21$$) {
  var $dataItem$$14_options$$104_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$95_markerColor$$, $seriesIndex$$36$$, $groupIndex$$21$$);
  if($dataItem$$14_options$$104_seriesItem$$7$$ && $dataItem$$14_options$$104_seriesItem$$7$$.borderColor || ($dataItem$$14_options$$104_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$95_markerColor$$, $seriesIndex$$36$$)) && $dataItem$$14_options$$104_seriesItem$$7$$.borderColor) {
    return $dataItem$$14_options$$104_seriesItem$$7$$.borderColor
  }
  $dataItem$$14_options$$104_seriesItem$$7$$ = $chart$$95_markerColor$$.$getOptions$();
  return"undefined" != typeof $dataItem$$14_options$$104_seriesItem$$7$$.styleDefaults.borderColor ? $dataItem$$14_options$$104_seriesItem$$7$$.styleDefaults.borderColor : "bubble" == $chart$$95_markerColor$$.$getType$() && "alta" == $chart$$95_markerColor$$.$getOptions$().skin && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$95_markerColor$$) ? ($chart$$95_markerColor$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$95_markerColor$$, $seriesIndex$$36$$, $groupIndex$$21$$), 
  D.$DvtColorUtils$$.$adjustHSL$($chart$$95_markerColor$$, 0.15, -0.25)) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$96$$, $seriesIndex$$37$$, $groupIndex$$22$$) {
  var $dataItem$$15_defaultMarkerColor_seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$96$$, $seriesIndex$$37$$, $groupIndex$$22$$);
  return $dataItem$$15_defaultMarkerColor_seriesItem$$8$$ && $dataItem$$15_defaultMarkerColor_seriesItem$$8$$.color ? $dataItem$$15_defaultMarkerColor_seriesItem$$8$$.color : ($dataItem$$15_defaultMarkerColor_seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$96$$, $seriesIndex$$37$$)) && $dataItem$$15_defaultMarkerColor_seriesItem$$8$$.markerColor ? $dataItem$$15_defaultMarkerColor_seriesItem$$8$$.markerColor : ($dataItem$$15_defaultMarkerColor_seriesItem$$8$$ = $chart$$96$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$15_defaultMarkerColor_seriesItem$$8$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$96$$, $seriesIndex$$37$$, $groupIndex$$22$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$97_styleIndex$$3$$, $series$$9_seriesIndex$$38$$, $dataItem$$16_groupIndex$$23$$) {
  var $options$$106_shapeRamp$$ = $chart$$97_styleIndex$$3$$.$getOptions$(), $shape$$18$$ = $options$$106_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$97_styleIndex$$3$$, $series$$9_seriesIndex$$38$$);
  $seriesItem$$9$$ && $seriesItem$$9$$.markerShape && ($shape$$18$$ = $seriesItem$$9$$.markerShape);
  ($dataItem$$16_groupIndex$$23$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$97_styleIndex$$3$$, $series$$9_seriesIndex$$38$$, $dataItem$$16_groupIndex$$23$$)) && $dataItem$$16_groupIndex$$23$$.markerShape && ($shape$$18$$ = $dataItem$$16_groupIndex$$23$$.markerShape);
  "auto" == $shape$$18$$ && ("bubble" == $chart$$97_styleIndex$$3$$.$getType$() ? $shape$$18$$ = "circle" : ($series$$9_seriesIndex$$38$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$97_styleIndex$$3$$, $series$$9_seriesIndex$$38$$), $chart$$97_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$97_styleIndex$$3$$, $series$$9_seriesIndex$$38$$), $options$$106_shapeRamp$$ = $options$$106_shapeRamp$$.styleDefaults.shapes, $shape$$18$$ = $options$$106_shapeRamp$$[$chart$$97_styleIndex$$3$$ % 
  $options$$106_shapeRamp$$.length]));
  return $shape$$18$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$98_options$$107$$, $seriesIndex$$39_seriesItem$$10$$, $dataItem$$17_groupIndex$$24_markerSize$$1$$) {
  $dataItem$$17_groupIndex$$24_markerSize$$1$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$98_options$$107$$, $seriesIndex$$39_seriesItem$$10$$, $dataItem$$17_groupIndex$$24_markerSize$$1$$);
  $seriesIndex$$39_seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$98_options$$107$$, $seriesIndex$$39_seriesItem$$10$$);
  $chart$$98_options$$107$$ = $chart$$98_options$$107$$.$getOptions$();
  $dataItem$$17_groupIndex$$24_markerSize$$1$$ = $dataItem$$17_groupIndex$$24_markerSize$$1$$ && $dataItem$$17_groupIndex$$24_markerSize$$1$$.markerSize ? $dataItem$$17_groupIndex$$24_markerSize$$1$$.markerSize : $seriesIndex$$39_seriesItem$$10$$ && $seriesIndex$$39_seriesItem$$10$$.markerSize ? $seriesIndex$$39_seriesItem$$10$$.markerSize : $chart$$98_options$$107$$.styleDefaults.markerSize;
  $chart$$98_options$$107$$._isOverview && ($dataItem$$17_groupIndex$$24_markerSize$$1$$ = window.Math.ceil(0.6 * $dataItem$$17_groupIndex$$24_markerSize$$1$$));
  return $dataItem$$17_groupIndex$$24_markerSize$$1$$
};
D.$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$99$$, $seriesIndex$$40$$, $dataItem$$18_displayed_groupIndex$$25$$) {
  $dataItem$$18_displayed_groupIndex$$25$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$99$$, $seriesIndex$$40$$, $dataItem$$18_displayed_groupIndex$$25$$);
  var $seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$99$$, $seriesIndex$$40$$);
  $dataItem$$18_displayed_groupIndex$$25$$ = $dataItem$$18_displayed_groupIndex$$25$$ && $dataItem$$18_displayed_groupIndex$$25$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $dataItem$$18_displayed_groupIndex$$25$$.markerDisplayed : $seriesItem$$11$$ && $seriesItem$$11$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $seriesItem$$11$$.markerDisplayed : $chart$$99$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$18_displayed_groupIndex$$25$$ ? D.$JSCompiler_alias_TRUE$$ : "off" == $dataItem$$18_displayed_groupIndex$$25$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$99$$) || "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$99$$, $seriesIndex$$40$$)
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$100$$, $seriesIndex$$41$$) {
  var $lineWidth$$2_seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$100$$, $seriesIndex$$41$$), $options$$108$$ = $chart$$100$$.$getOptions$(), $lineWidth$$2_seriesItem$$12$$ = $lineWidth$$2_seriesItem$$12$$ && $lineWidth$$2_seriesItem$$12$$.lineWidth ? $lineWidth$$2_seriesItem$$12$$.lineWidth : $options$$108$$.styleDefaults.lineWidth ? $options$$108$$.styleDefaults.lineWidth : "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$100$$, $seriesIndex$$41$$) ? 2 : 3;
  $options$$108$$._isOverview && ($lineWidth$$2_seriesItem$$12$$ = window.Math.ceil(0.6 * $lineWidth$$2_seriesItem$$12$$));
  return $lineWidth$$2_seriesItem$$12$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$101$$, $seriesIndex$$42$$) {
  var $seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$101$$, $seriesIndex$$42$$);
  return $seriesItem$$13$$ && $seriesItem$$13$$.lineStyle ? $seriesItem$$13$$.lineStyle : $chart$$101$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$102$$, $seriesIndex$$43$$) {
  var $lineType$$4_seriesItem$$14$$;
  $lineType$$4_seriesItem$$14$$ = ($lineType$$4_seriesItem$$14$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$102$$, $seriesIndex$$43$$)) && $lineType$$4_seriesItem$$14$$.lineType ? $lineType$$4_seriesItem$$14$$.lineType : $chart$$102$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$4_seriesItem$$14$$ && ($lineType$$4_seriesItem$$14$$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$102$$) ? "none" : "straight");
  D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$102$$) && ("none" != $lineType$$4_seriesItem$$14$$ && "straight" != $lineType$$4_seriesItem$$14$$ && "curved" != $lineType$$4_seriesItem$$14$$) && ($lineType$$4_seriesItem$$14$$ = "none");
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$102$$) && ("centeredSegmented" == $lineType$$4_seriesItem$$14$$ && ($lineType$$4_seriesItem$$14$$ = "segmented"), "centeredStepped" == $lineType$$4_seriesItem$$14$$ && ($lineType$$4_seriesItem$$14$$ = "stepped"));
  return $lineType$$4_seriesItem$$14$$
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$103$$) {
  return $chart$$103$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$104$$, $barCount_barSeriesCount$$1$$, $axis$$13_barWidth$$1$$) {
  var $maxBarWidth_options$$111$$ = $chart$$104$$.$getOptions$(), $isPolar$$5$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$104$$);
  $barCount_barSeriesCount$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$104$$) ? D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$104$$) ? 2 : 1 : $barCount_barSeriesCount$$1$$;
  var $barGapRatio$$ = $maxBarWidth_options$$111$$.styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$ && "%" == $barGapRatio$$.slice(-1) && ($barGapRatio$$ = (0,window.Number)($barGapRatio$$.slice(0, -1)) / 100);
  $barGapRatio$$ == D.$JSCompiler_alias_NULL$$ && ($barGapRatio$$ = $isPolar$$5$$ ? 1 == $barCount_barSeriesCount$$1$$ || D.$DvtChartTypeUtils$$.$isStacked$($chart$$104$$) ? 0 : 0.25 : 1 == $barCount_barSeriesCount$$1$$ ? 0.625 : 0.25);
  $axis$$13_barWidth$$1$$ = $axis$$13_barWidth$$1$$.$getGroupWidth$() * (1 - $barGapRatio$$) / $barCount_barSeriesCount$$1$$;
  $maxBarWidth_options$$111$$ = $maxBarWidth_options$$111$$.styleDefaults.maxBarWidth;
  $maxBarWidth_options$$111$$ != D.$JSCompiler_alias_NULL$$ && !$isPolar$$5$$ && ($axis$$13_barWidth$$1$$ = window.Math.min($axis$$13_barWidth$$1$$, $maxBarWidth_options$$111$$));
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$104$$) && ($axis$$13_barWidth$$1$$ = window.Math.max(window.Math.floor($axis$$13_barWidth$$1$$), 1));
  return $axis$$13_barWidth$$1$$
};
D.$DvtChartStyleUtils$$.$getBarOffset$ = function $$DvtChartStyleUtils$$$$getBarOffset$$($chart$$105$$, $barWidth$$2$$, $barSeriesCount$$2_offset$$17$$) {
  $barSeriesCount$$2_offset$$17$$ = -($barWidth$$2$$ * $barSeriesCount$$2_offset$$17$$ / 2);
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$105$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$105$$)) {
    $barSeriesCount$$2_offset$$17$$ = D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$105$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$105$$.$_context$) ? 0 : -$barWidth$$2$$ : -$barWidth$$2$$ / 2
  }
  return $barSeriesCount$$2_offset$$17$$
};
D.$DvtChartStyleUtils$$.$getY2BarOffset$ = function $$DvtChartStyleUtils$$$$getY2BarOffset$$($chart$$106$$, $barWidth$$3$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$106$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$106$$.$_context$) ? -$barWidth$$3$$ : $barWidth$$3$$ : 0
};
D.$DvtChartStyleUtils$$.$getVisibility$ = function $$DvtChartStyleUtils$$$$getVisibility$$($chart$$107$$, $seriesIndex$$44$$) {
  var $seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$107$$, $seriesIndex$$44$$);
  return $seriesItem$$15$$ && $seriesItem$$15$$.visibility ? $seriesItem$$15$$.visibility : "visible"
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$108$$, $seriesIndex$$45$$) {
  return"hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$108$$, $seriesIndex$$45$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$109_dataItem$$19$$, $i$$173_seriesIndex$$46$$, $groupIndex$$26$$) {
  if("hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$109_dataItem$$19$$, $i$$173_seriesIndex$$46$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $hiddenCategories$$3$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$109_dataItem$$19$$);
  $chart$$109_dataItem$$19$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$109_dataItem$$19$$, $i$$173_seriesIndex$$46$$, $groupIndex$$26$$);
  if(0 < $hiddenCategories$$3$$.length && $chart$$109_dataItem$$19$$ && $chart$$109_dataItem$$19$$.categories) {
    for($i$$173_seriesIndex$$46$$ = 0;$i$$173_seriesIndex$$46$$ < $chart$$109_dataItem$$19$$.categories.length;$i$$173_seriesIndex$$46$$++) {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$3$$, $chart$$109_dataItem$$19$$.categories[$i$$173_seriesIndex$$46$$])) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$110$$) {
  return $chart$$110$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$111$$) {
  return $chart$$111$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$112$$) {
  return $chart$$112$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$113$$) {
  return $chart$$113$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$114$$) {
  return $chart$$114$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$115$$) {
  return $chart$$115$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$116_options$$112$$) {
  $chart$$116_options$$112$$ = $chart$$116_options$$112$$.$getOptions$();
  $chart$$116_options$$112$$._hiddenCategories || ($chart$$116_options$$112$$._hiddenCategories = []);
  return $chart$$116_options$$112$$._hiddenCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$117$$) {
  return $chart$$117$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$118$$) {
  return $chart$$118$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($chart$$119_effect$$1$$) {
  $chart$$119_effect$$1$$ = $chart$$119_effect$$1$$.$getOptions$().styleDefaults.selectionEffect;
  return"highlight" == $chart$$119_effect$$1$$ || "highlightAndExplode" == $chart$$119_effect$$1$$
};
D.$DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($chart$$120_effect$$2$$) {
  $chart$$120_effect$$2$$ = $chart$$120_effect$$2$$.$getOptions$().styleDefaults.selectionEffect;
  return"explode" == $chart$$120_effect$$2$$ || "highlightAndExplode" == $chart$$120_effect$$2$$
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$121$$, $seriesIndex$$47$$, $groupIndex$$27$$, $dataColor$$10$$, $position$$15$$) {
  var $labelStyleArray$$1$$ = [], $contrastingColor$$;
  $dataColor$$10$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$121$$, $seriesIndex$$47$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$121$$)) && ("center" == $position$$15$$ || "inBottom" == $position$$15$$ || "inTop" == $position$$15$$ || "inRight" == $position$$15$$ || "inLeft" == $position$$15$$) ? ($contrastingColor$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$121$$, $seriesIndex$$47$$, $groupIndex$$27$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$10$$), 
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push($chart$$121$$.$getOptions$().styleDefaults.dataLabelStyle);
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$121$$, $seriesIndex$$47$$, $groupIndex$$27$$).labelStyle));
  $contrastingColor$$ && D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($chart$$122$$, $bNegative_seriesIndex$$48$$, $groupIndex$$28$$) {
  var $position$$16$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$122$$, $bNegative_seriesIndex$$48$$, $groupIndex$$28$$).labelPosition;
  $position$$16$$ || ($position$$16$$ = $chart$$122$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $bBidi$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$122$$.$_context$);
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$122$$, $bNegative_seriesIndex$$48$$)) {
    if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$122$$)) {
      return"center"
    }
    if("insideBarEdge" != $position$$16$$ && "center" != $position$$16$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$122$$)) {
        return"center"
      }
      "outsideBarEdge" != $position$$16$$ && ($position$$16$$ = "insideBarEdge")
    }
    $bNegative_seriesIndex$$48$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$122$$, $bNegative_seriesIndex$$48$$, $groupIndex$$28$$);
    return"outsideBarEdge" == $position$$16$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$122$$) ? !$bNegative_seriesIndex$$48$$ && !$bBidi$$ || $bNegative_seriesIndex$$48$$ && $bBidi$$ ? "right" : "left" : $bNegative_seriesIndex$$48$$ ? "below" : "above" : "insideBarEdge" == $position$$16$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$122$$) ? !$bNegative_seriesIndex$$48$$ && !$bBidi$$ || $bNegative_seriesIndex$$48$$ && $bBidi$$ ? "inRight" : "inLeft" : $bNegative_seriesIndex$$48$$ ? "inBottom" : 
    "inTop" : "center"
  }
  if("belowMarker" == $position$$16$$) {
    return"below"
  }
  if("aboveMarker" == $position$$16$$) {
    return"above"
  }
  if("afterMarker" != $position$$16$$ && "beforeMarker" != $position$$16$$ && "center" != $position$$16$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$122$$)) {
      return"center"
    }
    $position$$16$$ = "afterMarker"
  }
  return!$bBidi$$ && "afterMarker" == $position$$16$$ || $bBidi$$ && "beforeMarker" == $position$$16$$ ? "right" : !$bBidi$$ && "beforeMarker" == $position$$16$$ || $bBidi$$ && "afterMarker" == $position$$16$$ ? "left" : "center"
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$123$$) {
  var $options$$113$$ = $chart$$123$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$123$$) && "off" != $options$$113$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$124$$) {
  var $options$$114$$ = $chart$$124$$.$getOptions$(), $height$$40$$ = $options$$114$$.overview.height;
  $height$$40$$ == D.$JSCompiler_alias_NULL$$ && ($height$$40$$ = "disabled" == $options$$114$$.timeAxisType ? 0.2 : 0.25);
  return D.$DvtChartStyleUtils$$.$getSizeInPixels$($height$$40$$, $chart$$124$$.getHeight())
};
D.$DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($size$$18$$, $totalSize$$) {
  if("string" == typeof $size$$18$$) {
    if("%" == $size$$18$$.slice(-1)) {
      return $totalSize$$ * (0,window.Number)($size$$18$$.slice(0, -1)) / 100
    }
    if("px" == $size$$18$$.slice(-2)) {
      return(0,window.Number)($size$$18$$.slice(0, -2))
    }
    $size$$18$$ = (0,window.Number)($size$$18$$)
  }
  return(0,window.isNaN)($size$$18$$) ? 0 : 1 >= $size$$18$$ ? $totalSize$$ * $size$$18$$ : $size$$18$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$13$$, $container$$84$$, $text$$29_textString$$, $cssStyle$$3$$, $x$$136$$, $y$$108$$, $width$$43$$, $height$$41$$, $params$$22$$) {
  $text$$29_textString$$ = new D.$DvtOutputText$$($container$$84$$.$_context$, $text$$29_textString$$, $x$$136$$, $y$$108$$);
  $text$$29_textString$$.$setCSSStyle$($cssStyle$$3$$);
  return D.$DvtTextUtils$$.$fitText$($text$$29_textString$$, $width$$43$$, $height$$41$$, $container$$84$$) ? ($eventManager$$13$$.$associate$($text$$29_textString$$, new D.$DvtSimpleObjPeer$$($text$$29_textString$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$22$$)), $text$$29_textString$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$235_options$$135$$) {
  $chart$$235_options$$135$$ = $chart$$235_options$$135$$.$getOptions$();
  return $chart$$235_options$$135$$.title.text || $chart$$235_options$$135$$.subtitle.text || $chart$$235_options$$135$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$_TYPE_X$ = "x";
D.$DvtChartTooltipUtils$$.$_TYPE_Y$ = "y";
D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ = "y2";
D.$DvtChartTooltipUtils$$.$_TYPE_Z$ = "z";
D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$ = "value";
D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$ = "targetValue";
D.$DvtChartTooltipUtils$$.$hasDatatips$ = function $$DvtChartTooltipUtils$$$$hasDatatips$$($chart$$125_options$$115$$) {
  $chart$$125_options$$115$$ = $chart$$125_options$$115$$.$getOptions$();
  return"none" == $chart$$125_options$$115$$.styleDefaults.seriesTooltipType && "none" == $chart$$125_options$$115$$.styleDefaults.groupTooltipType && "none" == $chart$$125_options$$115$$.styleDefaults.valueTooltipType ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$126$$, $seriesIndex$$49$$, $groupIndex$$29$$) {
  return D.$DvtChartStyleUtils$$.$getColor$($chart$$126$$, $seriesIndex$$49$$, $groupIndex$$29$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($arTooltip_dataItem$$20_target$$49$$, $chart$$127$$, $seriesIndex$$50$$, $groupIndex$$30$$) {
  if(0 > $seriesIndex$$50$$ || 0 > $groupIndex$$30$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($arTooltip_dataItem$$20_target$$49$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$127$$, $seriesIndex$$50$$, $groupIndex$$30$$)) && $arTooltip_dataItem$$20_target$$49$$.shortDesc) {
    return $arTooltip_dataItem$$20_target$$49$$.shortDesc
  }
  $arTooltip_dataItem$$20_target$$49$$ = [];
  D.$DvtChartTooltipUtils$$.$_addSeriesStrings$($arTooltip_dataItem$$20_target$$49$$, $chart$$127$$, $seriesIndex$$50$$);
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip_dataItem$$20_target$$49$$, $chart$$127$$, $seriesIndex$$50$$, $groupIndex$$30$$);
  D.$DvtChartTooltipUtils$$.$_addValueStrings$($arTooltip_dataItem$$20_target$$49$$, $chart$$127$$, $seriesIndex$$50$$, $groupIndex$$30$$);
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip_dataItem$$20_target$$49$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$128$$, $otherValue$$1$$) {
  var $arTooltip$$1$$ = [], $options$$116_val$$22$$ = $chart$$128$$.$getOptions$(), $bundle$$5_labelValue$$ = $chart$$128$$.$getBundle$();
  if("none" != $options$$116_val$$22$$.styleDefaults.seriesTooltipType) {
    var $otherStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$5_labelValue$$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$);
    $arTooltip$$1$$.push($otherStr$$)
  }
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip$$1$$, $chart$$128$$, 0, 0);
  "none" != $options$$116_val$$22$$.styleDefaults.valueTooltipType && ($options$$116_val$$22$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$116_val$$22$$.valueFormats, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $otherValue$$1$$), $bundle$$5_labelValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$5_labelValue$$, "LABEL_VALUE", $options$$116_val$$22$$), $arTooltip$$1$$.push($bundle$$5_labelValue$$));
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip$$1$$)
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($refObj$$4$$) {
  if($refObj$$4$$.shortDesc) {
    return $refObj$$4$$.shortDesc
  }
};
D.$DvtChartTooltipUtils$$.$_addSeriesStrings$ = function $$DvtChartTooltipUtils$$$$_addSeriesStrings$$($arTooltip$$2$$, $chart$$130_labelSeries$$, $seriesIndex$$51_seriesLabel$$1$$) {
  if("none" != $chart$$130_labelSeries$$.$getOptions$().styleDefaults.seriesTooltipType) {
    var $bundle$$6$$ = $chart$$130_labelSeries$$.$getBundle$();
    if($seriesIndex$$51_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$130_labelSeries$$, $seriesIndex$$51_seriesLabel$$1$$)) {
      "funnel" == $chart$$130_labelSeries$$.$getType$() ? $arTooltip$$2$$.push($seriesIndex$$51_seriesLabel$$1$$) : ($chart$$130_labelSeries$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6$$, "LABEL_SERIES", $seriesIndex$$51_seriesLabel$$1$$), $arTooltip$$2$$.push($chart$$130_labelSeries$$))
    }
  }
};
D.$DvtChartTooltipUtils$$.$_addGroupStrings$ = function $$DvtChartTooltipUtils$$$$_addGroupStrings$$($arTooltip$$3$$, $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$, $bundle$$7_labelGroup_seriesIndex$$52$$, $groupIndex$$33$$) {
  var $options$$118$$ = $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$.$getOptions$(), $dataItem$$21$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$, $bundle$$7_labelGroup_seriesIndex$$52$$, $groupIndex$$33$$);
  "none" == $options$$118$$.styleDefaults.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$) || ($bundle$$7_labelGroup_seriesIndex$$52$$ = $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$.$getBundle$(), $options$$118$$.timeAxisType && "disabled" != $options$$118$$.timeAxisType ? ($JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$.$xAxis$.$Info$, 
  new window.Date($dataItem$$21$$.x), D.$JSCompiler_alias_NULL$$), $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$ = $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$[1] != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$[0] + " " + $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$[1] : $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$[0]) : $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$ = 
  D.$DvtChartDataUtils$$.$getGroupLabel$($JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$, $groupIndex$$33$$), $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$ && ($bundle$$7_labelGroup_seriesIndex$$52$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$7_labelGroup_seriesIndex$$52$$, "LABEL_GROUP", $JSCompiler_temp$$327_chart$$131_groupLabel$$1_twoLabels$$inline_1580$$), $arTooltip$$3$$.push($bundle$$7_labelGroup_seriesIndex$$52$$)))
};
D.$DvtChartTooltipUtils$$.$_addValueStrings$ = function $$DvtChartTooltipUtils$$$$_addValueStrings$$($arTooltip$$4$$, $chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$, $groupIndex$$34_labelX$$3_xValue$$3$$) {
  var $options$$119_valueFormats$$1$$ = $chart$$132_target$$50_type$$79_zValue$$.$getOptions$();
  if("none" != $options$$119_valueFormats$$1$$.styleDefaults.valueTooltipType) {
    var $bundle$$8_labelValue2_labelZ$$ = $chart$$132_target$$50_type$$79_zValue$$.$getBundle$(), $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$, $groupIndex$$34_labelX$$3_xValue$$3$$), $options$$119_valueFormats$$1$$ = $options$$119_valueFormats$$1$$.valueFormats;
    if("scatter" == $chart$$132_target$$50_type$$79_zValue$$.$getType$() || "bubble" == $chart$$132_target$$50_type$$79_zValue$$.$getType$()) {
      $groupIndex$$34_labelX$$3_xValue$$3$$ = $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$.x, $labelY$$2_seriesIndex$$53_y1Value$$ = $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$.y, $groupIndex$$34_labelX$$3_xValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_X$, $groupIndex$$34_labelX$$3_xValue$$3$$), $labelY$$2_seriesIndex$$53_y1Value$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Y$, 
      $labelY$$2_seriesIndex$$53_y1Value$$), $groupIndex$$34_labelX$$3_xValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_X", $groupIndex$$34_labelX$$3_xValue$$3$$), $labelY$$2_seriesIndex$$53_y1Value$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_Y", $labelY$$2_seriesIndex$$53_y1Value$$), $arTooltip$$4$$.push($groupIndex$$34_labelX$$3_xValue$$3$$), $arTooltip$$4$$.push($labelY$$2_seriesIndex$$53_y1Value$$), 
      "bubble" == $chart$$132_target$$50_type$$79_zValue$$.$getType$() && ($chart$$132_target$$50_type$$79_zValue$$ = $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$.z, $chart$$132_target$$50_type$$79_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Z$, $chart$$132_target$$50_type$$79_zValue$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_Z", $chart$$132_target$$50_type$$79_zValue$$), 
      $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$))
    }else {
      if("pie" == $chart$$132_target$$50_type$$79_zValue$$.$getType$()) {
        $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$, $groupIndex$$34_labelX$$3_xValue$$3$$), $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, 
        "LABEL_VALUE", $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$22_labelValue$$1_val$$23_yValue$$3$$)
      }else {
        if("funnel" == $chart$$132_target$$50_type$$79_zValue$$.$getType$()) {
          if($dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$, $groupIndex$$34_labelX$$3_xValue$$3$$), $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, 
          "LABEL_VALUE", $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $chart$$132_target$$50_type$$79_zValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$)) {
            $chart$$132_target$$50_type$$79_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$, $chart$$132_target$$50_type$$79_zValue$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_TARGET_VALUE", $chart$$132_target$$50_type$$79_zValue$$), $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$)
          }
        }else {
          $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$, $groupIndex$$34_labelX$$3_xValue$$3$$), $chart$$132_target$$50_type$$79_zValue$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$132_target$$50_type$$79_zValue$$, $labelY$$2_seriesIndex$$53_y1Value$$) ? D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ : D.$DvtChartTooltipUtils$$.$_TYPE_Y$, $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$ = 
          D.$DvtChartTooltipUtils$$.$_formatValue$($options$$119_valueFormats$$1$$, $chart$$132_target$$50_type$$79_zValue$$, $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $bundle$$8_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue2_labelZ$$, "LABEL_VALUE", $dataItem$$22_labelValue$$1_val$$23_yValue$$3$$), $arTooltip$$4$$.push($bundle$$8_labelValue2_labelZ$$)
        }
      }
    }
  }
};
D.$DvtChartTooltipUtils$$.$_convertLinesToString$ = function $$DvtChartTooltipUtils$$$$_convertLinesToString$$($arTooltip$$5$$) {
  for(var $ret$$36$$ = "", $i$$177$$ = 0;$i$$177$$ < $arTooltip$$5$$.length;$i$$177$$++) {
    0 < $ret$$36$$.length && ($ret$$36$$ += "\n"), $ret$$36$$ += $arTooltip$$5$$[$i$$177$$]
  }
  return $ret$$36$$
};
D.$DvtChartTooltipUtils$$.$_formatValue$ = function $$DvtChartTooltipUtils$$$$_formatValue$$($formatter_valueFormats$$2$$, $type$$80$$, $value$$59$$, $min$$4$$, $max$$4$$, $majorIncrement$$) {
  var $scaling$$ = "auto", $autoPrecision$$ = "on", $converter$$;
  if($formatter_valueFormats$$2$$) {
    for(var $i$$178$$ = 0;$i$$178$$ < $formatter_valueFormats$$2$$.length;$i$$178$$++) {
      if($formatter_valueFormats$$2$$[$i$$178$$].type == $type$$80$$) {
        $formatter_valueFormats$$2$$[$i$$178$$].scaling && ($scaling$$ = $formatter_valueFormats$$2$$[$i$$178$$].scaling);
        $formatter_valueFormats$$2$$[$i$$178$$].autoPrecision && ($autoPrecision$$ = $formatter_valueFormats$$2$$[$i$$178$$].autoPrecision);
        $formatter_valueFormats$$2$$[$i$$178$$].converter && ($converter$$ = $formatter_valueFormats$$2$$[$i$$178$$].converter);
        break
      }
    }
  }
  $formatter_valueFormats$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($min$$4$$ != D.$JSCompiler_alias_NULL$$ ? $min$$4$$ : $value$$59$$, $max$$4$$ != D.$JSCompiler_alias_NULL$$ ? $max$$4$$ : $value$$59$$, $majorIncrement$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$ : 0, $scaling$$, $autoPrecision$$);
  return $converter$$ && ($converter$$.getAsString || $converter$$.format) ? $formatter_valueFormats$$2$$.$format$($value$$59$$, $converter$$) : $formatter_valueFormats$$2$$.$format$($value$$59$$)
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$178$$) {
  return $chart$$178$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$179$$) {
  return"combo" == $chart$$179$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$180$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$180$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$180$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$181$$) {
  return"horizontal" == $chart$$181$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$181$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$181$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$181$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$182$$) {
  return"polar" == $chart$$182$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$183$$) {
  return"on" != $chart$$183$$.$getOptions$().stack || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$183$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$183$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$184$$) {
  return"bar" == $chart$$184$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$185$$) {
  return"line" == $chart$$185$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$186$$) {
  return"lineWithArea" == $chart$$186$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$187$$) {
  return"area" == $chart$$187$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$188$$) {
  return"scatter" == $chart$$188$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$189$$) {
  return"bubble" == $chart$$189$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$190$$) {
  return"pie" == $chart$$190$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$191$$) {
  return"funnel" == $chart$$191$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$192$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$192$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$192$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$192$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$193_type$$82$$) {
  $chart$$193_type$$82$$ = $chart$$193_type$$82$$.$getType$();
  return"bar" == $chart$$193_type$$82$$ || "line" == $chart$$193_type$$82$$ || "area" == $chart$$193_type$$82$$ || "lineWithArea" == $chart$$193_type$$82$$ || "combo" == $chart$$193_type$$82$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$194_type$$83$$) {
  $chart$$194_type$$83$$ = $chart$$194_type$$83$$.$getType$();
  return"scatter" == $chart$$194_type$$83$$ || "bubble" == $chart$$194_type$$83$$
};
D.$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$195_type$$84$$) {
  $chart$$195_type$$84$$ = $chart$$195_type$$84$$.$getType$();
  return"line" == $chart$$195_type$$84$$ || "area" == $chart$$195_type$$84$$ || "lineWithArea" == $chart$$195_type$$84$$
};
D.$DvtChartTypeUtils$$.$isTimeAxisSupported$ = function $$DvtChartTypeUtils$$$$isTimeAxisSupported$$($chart$$196$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$196$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$196$$)
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$197$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$197$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$197$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$197$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$198$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$198$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$198$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$199$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$199$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$199$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$199$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$199$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$200$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$200$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$200$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$200$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$200$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$201$$) {
  return!("pie" == $chart$$201$$.$getType$() || "funnel" == $chart$$201$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$202$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$202$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$202$$);
  if(0 == $seriesCount$$17$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$198$$ = 0;$i$$198$$ < $seriesCount$$17$$;$i$$198$$++) {
    if(!D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$202$$, $i$$198$$)) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$203$$, $type$$85$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$203$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$203$$), $i$$199$$ = 0;$i$$199$$ < $seriesCount$$18$$;$i$$199$$++) {
    if(!($type$$85$$ && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$203$$, $i$$199$$) != $type$$85$$) && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$203$$, $i$$199$$)) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$204$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$204$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$205$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$205$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$206$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$206$$, "line")
};
D.$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$207$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$207$$, "area")
};
D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$208$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$208$$, "lineWithArea")
};
D.$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$209$$, $type$$86$$) {
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$209$$)) {
    for(var $seriesCount$$19$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$209$$), $seriesIndex$$80$$ = 0;$seriesIndex$$80$$ < $seriesCount$$19$$;$seriesIndex$$80$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$209$$, $seriesIndex$$80$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$209$$, $seriesIndex$$80$$) == $type$$86$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$210$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$210$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$20$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$210$$), $seriesIndex$$81$$ = 0;$seriesIndex$$81$$ < $seriesCount$$20$$;$seriesIndex$$81$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$210$$, $seriesIndex$$81$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$210$$, $seriesIndex$$81$$)) {
      var $lineType$$5$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$210$$, $seriesIndex$$81$$);
      if("centeredSegmented" == $lineType$$5$$ || "centeredStepped" == $lineType$$5$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$211$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$211$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$211$$), $seriesIndex$$82$$ = 0;$seriesIndex$$82$$ < $seriesCount$$21$$;$seriesIndex$$82$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$211$$, $seriesIndex$$82$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$211$$, $seriesIndex$$82$$)) {
      var $lineType$$6$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$211$$, $seriesIndex$$82$$);
      if("segmented" == $lineType$$6$$ || "stepped" == $lineType$$6$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$212$$) {
  var $options$$130$$ = $chart$$212$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$212$$) || "off" != $options$$130$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$212$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$212$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$212$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$213$$) {
  var $options$$131$$ = $chart$$213$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$213$$) || "off" != $options$$131$$.legend.rendered || "off" != $options$$131$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$213$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$213$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$214$$) {
  var $options$$132$$ = $chart$$214$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$214$$) || "off" != $options$$132$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$214$$, "x") || "off" != $options$$132$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$214$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$215$$) {
  var $options$$133$$ = $chart$$215$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$215$$) || "off" != $options$$133$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$215$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$215$$, "y") || "off" != $options$$133$$.plotArea.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$87$$, $width$$41$$, $height$$38$$) {
  var $isPolar$$4$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$87$$), $minMax_xAxisValueRange$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$87$$, "z"), $minValue$$2$$ = $minMax_xAxisValueRange$$.min, $maxValue$$2_valueRange$$ = $minMax_xAxisValueRange$$.max, $minMax_xAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$87$$, "x"), $yAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$87$$, "y"), $axisWidth$$, $axisHeight$$;
  $isPolar$$4$$ ? ($axisWidth$$ = window.Infinity, $axisHeight$$ = $chart$$87$$.$getRadius$()) : ($axisWidth$$ = $width$$41$$ - 3 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$87$$, "y"), $axisHeight$$ = $height$$38$$ - 2 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$87$$, "x"));
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2), $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($width$$41$$, $height$$38$$), $maxArea_maxMarkerSize_seriesCount$$8$$ = window.Math.PI * window.Math.pow($areaRange_maxRadius$$1_minMaxArea$$, 2), $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$87$$, $minArea$$, $maxArea_maxMarkerSize_seriesCount$$8$$, 
  $minValue$$2$$, $maxValue$$2_valueRange$$), $minArea$$ = $areaRange_maxRadius$$1_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$8$$ = $areaRange_maxRadius$$1_minMaxArea$$.maxArea, $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $maxArea_maxMarkerSize_seriesCount$$8$$, $minValue$$2$$, $maxValue$$2_valueRange$$), $minArea$$ = $areaRange_maxRadius$$1_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$8$$ = $areaRange_maxRadius$$1_minMaxArea$$.maxArea, 
  $maxValue$$2_valueRange$$ = $maxValue$$2_valueRange$$ - $minValue$$2$$, $areaRange_maxRadius$$1_minMaxArea$$ = $maxArea_maxMarkerSize_seriesCount$$8$$ - $minArea$$, $maxArea_maxMarkerSize_seriesCount$$8$$ = 2 * window.Math.sqrt($maxArea_maxMarkerSize_seriesCount$$8$$ / window.Math.PI);
  $axisWidth$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$8$$;
  $axisHeight$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$8$$;
  for(var $maxArea_maxMarkerSize_seriesCount$$8$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$87$$), $seriesIndex$$31$$ = 0;$seriesIndex$$31$$ < $maxArea_maxMarkerSize_seriesCount$$8$$;$seriesIndex$$31$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$87$$, $seriesIndex$$31$$)) {
      for(var $seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$87$$, $seriesIndex$$31$$), $numGroups$$1$$ = $seriesItem$$2$$.items ? $seriesItem$$2$$.items.length : 0, $j$$30$$ = 0;$j$$30$$ < $numGroups$$1$$;$j$$30$$++) {
        var $dataItem$$10$$ = $seriesItem$$2$$.items[$j$$30$$];
        $dataItem$$10$$ && $dataItem$$10$$.z && (1 === $maxArea_maxMarkerSize_seriesCount$$8$$ && 1 === $numGroups$$1$$ ? ($dataItem$$10$$.markerSize = D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($width$$41$$, $height$$38$$), $dataItem$$10$$._xAxisRadius = $isPolar$$4$$ ? 0 : 29, $dataItem$$10$$._yAxisRadius = 29) : ($dataItem$$10$$.markerSize = 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$10$$.z - $minValue$$2$$) / $maxValue$$2_valueRange$$ * $areaRange_maxRadius$$1_minMaxArea$$) / 
        window.Math.PI), $dataItem$$10$$._xAxisRadius = 0.5 * ($dataItem$$10$$.markerSize / $axisWidth$$) * $minMax_xAxisValueRange$$, $dataItem$$10$$._yAxisRadius = 0.5 * ($dataItem$$10$$.markerSize / $axisHeight$$) * $yAxisValueRange$$))
      }
    }
  }
};
D.$DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($chart$$88$$, $type$$78$$) {
  var $axisOptions$$6_max$$3$$ = $chart$$88$$.$getOptions$()[$type$$78$$ + "Axis"], $zeroBaseline$$ = "zero" == $axisOptions$$6_max$$3$$.baselineScaling, $minMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$88$$, $type$$78$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), $min$$3$$ = $axisOptions$$6_max$$3$$.min;
  $min$$3$$ == D.$JSCompiler_alias_NULL$$ && ($min$$3$$ = $zeroBaseline$$ ? window.Math.min(0, $minMax$$1$$.min) : $minMax$$1$$.min);
  $axisOptions$$6_max$$3$$ = $axisOptions$$6_max$$3$$.max;
  $axisOptions$$6_max$$3$$ == D.$JSCompiler_alias_NULL$$ && ($axisOptions$$6_max$$3$$ = $zeroBaseline$$ ? window.Math.max(0, $minMax$$1$$.max) : $minMax$$1$$.max);
  return $axisOptions$$6_max$$3$$ == $min$$3$$ ? 60 : $axisOptions$$6_max$$3$$ - $min$$3$$
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$8$$) {
  $markers$$8$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$28$$, $b$$14$$) {
  var $aSize$$ = $a$$28$$.$getSize$(), $bSize$$ = $b$$14$$.$getSize$();
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$89_s2$$1$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$3_s1_t1$$, $maxValue$$3_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$89_s2$$1$$), $seriesIndex$$32$$ = 0;$seriesIndex$$32$$ < $seriesCount$$9$$;$seriesIndex$$32$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($avgRelSize_chart$$89_s2$$1$$, $seriesIndex$$32$$)) {
      for(var $seriesItem$$3$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$89_s2$$1$$, $seriesIndex$$32$$), $numDataItems$$ = $seriesItem$$3$$.items.length, $j$$31$$ = 0;$j$$31$$ < $numDataItems$$;$j$$31$$++) {
        var $dataItem$$11$$ = $seriesItem$$3$$.items[$seriesIndex$$32$$];
        $dataItem$$11$$ && $dataItem$$11$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$11$$.z)
      }
    }
  }
  $avgRelSize_chart$$89_s2$$1$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$3_s1_t1$$) / ($maxValue$$3_t2$$ - $minValue$$3_s1_t1$$);
  $minValue$$3_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$89_s2$$1$$));
  $maxValue$$3_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$89_s2$$1$$));
  $bubbleCount$$ >= $maxValue$$3_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$3_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$3_t2$$ - $minValue$$3_s1_t1$$) * ($bubbleCount$$ - $minValue$$3_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$3_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$89_s2$$1$$));
  $avgRelSize_chart$$89_s2$$1$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$89_s2$$1$$));
  $bubbleCount$$ < $minValue$$3_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$89_s2$$1$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$89_s2$$1$$ - $minValue$$3_s1_t1$$) * ($bubbleCount$$ - $minValue$$3_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$8_minValue$$4$$, $maxValue$$4$$) {
  if(0 != $maxValue$$4$$ - $buffer$$8_minValue$$4$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$4$$ && 0 < $buffer$$8_minValue$$4$$ ? $dataRatio$$ = $maxValue$$4$$ / $buffer$$8_minValue$$4$$ : 0 > $buffer$$8_minValue$$4$$ && 0 > $maxValue$$4$$ && ($dataRatio$$ = $buffer$$8_minValue$$4$$ / $maxValue$$4$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$8_minValue$$4$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$8_minValue$$4$$ && ($minArea$$2$$ += $buffer$$8_minValue$$4$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$133$$, $seriesIndex$$54$$) {
  var $dataItem$$23_id$$46$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$133$$, $seriesIndex$$54$$, 0), $dataItem$$23_id$$46$$ = $dataItem$$23_id$$46$$ ? $dataItem$$23_id$$46$$.id : D.$JSCompiler_alias_NULL$$, $series$$10$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$133$$, $seriesIndex$$54$$), $group$$17$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$133$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$23_id$$46$$, $series$$10$$, $group$$17$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$134_group$$18$$) {
  $chart$$134_group$$18$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$134_group$$18$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$134_group$$18$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$135$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$135$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$136$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$136$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$137$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$137$$).$other$, $otherValue$$2$$ = 0, $i$$179$$ = 0;$i$$179$$ < $otherSeries$$.length;$i$$179$$++) {
    var $seriesIndex$$55_value$$60$$ = $otherSeries$$[$i$$179$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$137$$, $seriesIndex$$55_value$$60$$) && ($seriesIndex$$55_value$$60$$ = D.$DvtChartDataUtils$$.getValue($chart$$137$$, $seriesIndex$$55_value$$60$$, 0), 0 < $seriesIndex$$55_value$$60$$ && ($otherValue$$2$$ += $seriesIndex$$55_value$$60$$))
  }
  return $otherValue$$2$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$138$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$138$$).$other$, $seriesIds$$ = [], $i$$180$$ = 0;$i$$180$$ < $otherSeries$$1$$.length;$i$$180$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$138$$, $otherSeries$$1$$[$i$$180$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$getOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$getOtherSliceVisibility$$($chart$$139$$) {
  for(var $otherSeries$$2$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$139$$).$other$, $i$$181$$ = 0;$i$$181$$ < $otherSeries$$2$$.length;$i$$181$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$139$$, $otherSeries$$2$$[$i$$181$$])) {
      return"visible"
    }
  }
  return"hidden"
};
D.$DvtPieChartUtils$$.$setOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$setOtherSliceVisibility$$($chart$$140$$, $visibility$$1$$) {
  for(var $otherSeries$$3$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$140$$).$other$, $i$$182$$ = 0;$i$$182$$ < $otherSeries$$3$$.length;$i$$182$$++) {
    D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$140$$, $otherSeries$$3$$[$i$$182$$]).visibility = $visibility$$1$$
  }
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$141$$, $selected$$19$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$141$$), $j$$32$$ = 0;$j$$32$$ < $otherIds$$.length;$j$$32$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$32$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$183$$ = 0;$i$$183$$ < $selected$$19$$.length;$i$$183$$++) {
      if($selected$$19$$[$i$$183$$].id && $sliceId$$.getId() === $selected$$19$$[$i$$183$$].id || $sliceId$$.$getSeries$() === $selected$$19$$[$i$$183$$].series && $sliceId$$.$getGroup$() === $selected$$19$$[$i$$183$$].group) {
        $sliceSelected$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$142$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$4$$ = [], $seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$142$$), $options$$120$$ = $chart$$142$$.$getOptions$(), $otherThreshold$$ = $options$$120$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$142$$), $seriesIndex$$59$$ = 0;$seriesIndex$$59$$ < $seriesCount$$10$$;$seriesIndex$$59$$++) {
    var $value$$61$$ = D.$DvtChartDataUtils$$.getValue($chart$$142$$, $seriesIndex$$59$$, 0);
    0 < $otherThreshold$$ && $value$$61$$ < $otherThreshold$$ ? $otherSeries$$4$$.push($seriesIndex$$59$$) : $renderedSeries$$.push($seriesIndex$$59$$)
  }
  "on" == $options$$120$$.sorting && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$4$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$142$$, $otherSeries$$4$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$142$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$4$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$143$$) {
  for(var $seriesCount$$11$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$143$$), $totalValue$$1$$ = 0, $seriesIndex$$60$$ = 0;$seriesIndex$$60$$ < $seriesCount$$11$$;$seriesIndex$$60$$++) {
    var $value$$62$$ = D.$DvtChartDataUtils$$.getValue($chart$$143$$, $seriesIndex$$60$$, 0);
    0 < $value$$62$$ && ($totalValue$$1$$ += $value$$62$$)
  }
  return $totalValue$$1$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$144$$, $seriesIndex$$61$$) {
  var $seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$144$$, $seriesIndex$$61$$);
  return $seriesItem$$17$$ && $seriesItem$$17$$.pieSliceExplode ? $seriesItem$$17$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$145$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$145$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$145$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$145$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$, 0)._id, $chart$$145$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$14_radian$$1$$, $cx$$7$$, $cy$$7$$, $rx$$3$$, $ry$$3$$) {
  $angle$$14_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$14_radian$$1$$);
  return{x:$cx$$7$$ + window.Math.cos($angle$$14_radian$$1$$) * $rx$$3$$, y:$cy$$7$$ + window.Math.sin($angle$$14_radian$$1$$) * $ry$$3$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$2_style$$18$$, $c$$15_skin$$1$$) {
  if($c$$15_skin$$1$$ && "skyros" != $c$$15_skin$$1$$) {
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$2_style$$18$$ = [], $arColors$$2_style$$18$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$2_style$$18$$[1] = $arColors$$2_style$$18$$[0], $arColors$$2_style$$18$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$2_style$$18$$
    }
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$15_skin$$1$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$1$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$1$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$2_style$$18$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$15_skin$$1$$, $c2$$1$$, $baseColor_c3$$, $c$$15_skin$$1$$]
    }
    if("SIDE" == $arColors$$2_style$$18$$) {
      return[$c$$15_skin$$1$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$2_style$$18$$) {
      return[$baseColor_c3$$, $c2$$1$$, $c$$15_skin$$1$$, $c1$$1$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$19$$) {
  var $alpha$$9$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$19$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$9$$, $alpha$$9$$, $alpha$$9$$]
  }
  if($style$$19$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$9$$ / 1.59375, $alpha$$9$$ / 5.3125, $alpha$$9$$ / 2.65625]
  }
  if($style$$19$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$9$$, $alpha$$9$$, $alpha$$9$$, $alpha$$9$$, $alpha$$9$$]
  }
  if($style$$19$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$9$$, $alpha$$9$$, $alpha$$9$$, $alpha$$9$$]
  }
  if($style$$19$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$9$$, $alpha$$9$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$20$$, $skin$$2$$) {
  if($skin$$2$$ && "skyros" != $skin$$2$$) {
    return[0, 1]
  }
  if($style$$20$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$20$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$20$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$20$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$20$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$11$$, $fill$$12$$) {
  var $edge_pieChart$$4$$ = $slice$$11$$.$_pieChart$, $context$$98_shapes$$5_wedge$$ = $edge_pieChart$$4$$.$_context$, $pieCenter$$ = $edge_pieChart$$4$$.$getCenter$(), $sliceClosureType$$ = "PIE";
  360 == $slice$$11$$.$getAngleExtent$() && ($sliceClosureType$$ = "OPEN");
  $context$$98_shapes$$5_wedge$$ = new D.$DvtGraphSelectableArc$$($context$$98_shapes$$5_wedge$$, $pieCenter$$.x, $pieCenter$$.y, $slice$$11$$.$_radiusX$, $slice$$11$$.$_radiusY$, $slice$$11$$.$getAngleStart$(), $slice$$11$$.$getAngleExtent$(), $sliceClosureType$$);
  $context$$98_shapes$$5_wedge$$.$setDataColor$($slice$$11$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$4$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$4$$.$chart$));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$98_shapes$$5_wedge$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$);
  $context$$98_shapes$$5_wedge$$.$setFill$($fill$$12$$);
  $slice$$11$$.$getStrokeColor$() && $context$$98_shapes$$5_wedge$$.$setSolidStroke$($slice$$11$$.$getStrokeColor$());
  $context$$98_shapes$$5_wedge$$ = [$context$$98_shapes$$5_wedge$$];
  if(!$slice$$11$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$4$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$4$$) && 0 < $edge_pieChart$$4$$.$getDepth$() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$4$$.$chart$) && (180 <= $slice$$11$$.$getAngleStart$() || 180 <= $slice$$11$$.$getAngleStart$() + $slice$$11$$.$getAngleExtent$() || 360 == $slice$$11$$.$getAngleExtent$())) {
    $edge_pieChart$$4$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$11$$, $fill$$12$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$4$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$), $context$$98_shapes$$5_wedge$$.push($edge_pieChart$$4$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$11$$, $context$$98_shapes$$5_wedge$$);
  return $context$$98_shapes$$5_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$12$$, $displayables$$9$$) {
  if($displayables$$9$$) {
    for(var $i$$174$$ = 0;$i$$174$$ < $displayables$$9$$.length;$i$$174$$++) {
      $slice$$12$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$9$$[$i$$174$$], $slice$$12$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$13$$, $topFill$$1$$) {
  var $angExtent_arRatios$$1_diff_style$$21$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$3_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff_style$$21$$), $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff_style$$21$$), $angExtent_arRatios$$1_diff_style$$21$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$1_diff_style$$21$$), 
  $arBounds$$1_pieChart$$5$$ = $topFill$$1$$.$getBounds$(), $arColors$$3_gradBorder$$ = new D.$DvtLinearGradientStroke$$(120, $arColors$$3_gradBorder$$, $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff_style$$21$$, $arBounds$$1_pieChart$$5$$);
  $arColors$$3_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = $slice$$13$$.$getAngleStart$();
  $angExtent_arRatios$$1_diff_style$$21$$ = 180 > $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$1_diff_style$$21$$ ? 180 : $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$1_diff_style$$21$$ = $slice$$13$$.$getAngleExtent$() - $angExtent_arRatios$$1_diff_style$$21$$;
  360 < $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$1_diff_style$$21$$ && ($angExtent_arRatios$$1_diff_style$$21$$ = 360 - $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$);
  var $arBounds$$1_pieChart$$5$$ = $slice$$13$$.$_pieChart$, $pieCenter$$1$$ = $arBounds$$1_pieChart$$5$$.$getCenter$(), $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$1_pieChart$$5$$.$_context$, $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$1_pieChart$$5$$.$_radiusX$, $arBounds$$1_pieChart$$5$$.$_radiusY$, $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff_style$$21$$, "OPEN");
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$3_gradBorder$$);
  return $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$14$$, $pathType$$, $fill$$13$$) {
  if(0 == $slice$$14$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$6$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$14$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$6$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$13$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$1$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$14$$), $len$$4$$ = $pathCommands$$1$$.length, $i$$175$$ = 0;$i$$175$$ < $len$$4$$;$i$$175$$++) {
          $shapes$$6$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, $pathCommands$$1$$[$i$$175$$], $fill$$13$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$14$$, $shapes$$6$$);
  return $shapes$$6$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$15$$, $objType$$1$$) {
  var $pieChart$$6$$ = $slice$$15$$.$_pieChart$, $skin$$3$$ = $pieChart$$6$$.$getSkin$(), $yOffset$$2$$ = $objType$$1$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $pieChart$$6$$.$getDepth$() : 0, $angle$$15$$ = "skyros" == $skin$$3$$ ? 0 : 270, $arColors$$4$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$15$$.$getFillColor$()), $objType$$1$$, $skin$$3$$), $arAlphas$$3$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$15$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$2$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$3$$), $arBounds$$2$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$3$$ && ($arBounds$$2$$ = [window.Math.floor($pieChart$$6$$.$getCenter$().x - $pieChart$$6$$.$_radiusX$), window.Math.floor($pieChart$$6$$.$getCenter$().y - $pieChart$$6$$.$_radiusY$) + $yOffset$$2$$, window.Math.ceil(2 * $pieChart$$6$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$6$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$15$$, $arColors$$4$$, $arAlphas$$3$$, $arRatios$$2$$, $arBounds$$2$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$16$$, $pathType$$1_pointArray$$1_pt$$, $pathCommand_points$$11_xCenter$$, $fill$$14$$) {
  var $pie$$ = $slice$$16$$.$_pieChart$, $context$$99_path$$15_polygon$$ = $pie$$.$_context$;
  if($pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$16$$ = $slice$$16$$.$getAngleStart$(), $arc$$2$$ = $slice$$16$$.$getAngleExtent$();
    $pathCommand_points$$11_xCenter$$ = $pie$$.$getCenter$().x;
    var $i$$176_yCenter$$ = $pie$$.$getCenter$().y, $xRadius$$ = $slice$$16$$.$_radiusX$, $yRadius$$ = $slice$$16$$.$_radiusY$, $depth$$5$$ = $pie$$.$getDepth$();
    $pathType$$1_pointArray$$1_pt$$ = $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$16$$ + $arc$$2$$, $pathCommand_points$$11_xCenter$$, $i$$176_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$16$$, $pathCommand_points$$11_xCenter$$, $i$$176_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray$$1_pt$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$11_xCenter$$, $i$$176_yCenter$$, $pathType$$1_pointArray$$1_pt$$.x, $pathType$$1_pointArray$$1_pt$$.y, $depth$$5$$);
    $pathCommand_points$$11_xCenter$$ = [];
    for($i$$176_yCenter$$ = 0;$i$$176_yCenter$$ < $pathType$$1_pointArray$$1_pt$$.length;$i$$176_yCenter$$++) {
      $pathCommand_points$$11_xCenter$$.push($pathType$$1_pointArray$$1_pt$$[$i$$176_yCenter$$].x, $pathType$$1_pointArray$$1_pt$$[$i$$176_yCenter$$].y)
    }
    $context$$99_path$$15_polygon$$ = new D.$DvtGraphSelectablePolygon$$($context$$99_path$$15_polygon$$, $pathCommand_points$$11_xCenter$$);
    $context$$99_path$$15_polygon$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$99_path$$15_polygon$$, $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$);
    $context$$99_path$$15_polygon$$.$setFill$($fill$$14$$);
    $slice$$16$$.$getStrokeColor$() && $context$$99_path$$15_polygon$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$());
    return $context$$99_path$$15_polygon$$
  }
  return $pathCommand_points$$11_xCenter$$ ? ($context$$99_path$$15_polygon$$ = new D.$DvtGraphSelectablePath$$($context$$99_path$$15_polygon$$, D.$JSCompiler_alias_NULL$$), $context$$99_path$$15_polygon$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$)), $context$$99_path$$15_polygon$$.$setCmds$($pathCommand_points$$11_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$99_path$$15_polygon$$, 
  $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$), $context$$99_path$$15_polygon$$.$setFill$($fill$$14$$), $slice$$16$$.$getStrokeColor$() && $context$$99_path$$15_polygon$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$()), $context$$99_path$$15_polygon$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($slice$$17_yRadius$$1$$) {
  var $angle$$17$$ = $slice$$17_yRadius$$1$$.$getAngleStart$(), $arc$$3$$ = $slice$$17_yRadius$$1$$.$getAngleExtent$(), $angleEnd$$ = $angle$$17$$ + $arc$$3$$, $depth$$6_pie$$1$$ = $slice$$17_yRadius$$1$$.$_pieChart$, $xCenter$$1$$ = $depth$$6_pie$$1$$.$getCenter$().x, $yCenter$$1$$ = $depth$$6_pie$$1$$.$getCenter$().y, $xRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusX$;
  $slice$$17_yRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusY$;
  var $depth$$6_pie$$1$$ = $depth$$6_pie$$1$$.$getDepth$(), $arOuterPath$$ = [];
  180 > $angle$$17$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, $angle$$17$$, 180 - $angle$$17$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, 
  $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, $angle$$17$$, 360 - $angle$$17$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$17$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, $angle$$17$$, 180 - $angle$$17$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$6_pie$$1$$, $angle$$17$$, $arc$$3$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$8_endPointTopX$$, $cy$$8_endPointTopY$$, $rx$$4$$, $ry$$4$$, $depth$$7$$, $startAngle$$5_startPointTop$$, $angleExtent$$5_angleExtentRads$$) {
  $angleExtent$$5_angleExtentRads$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$5_angleExtentRads$$);
  var $endAngleRads_pathCommands$$2$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$5_startPointTop$$) + $angleExtent$$5_angleExtentRads$$);
  $cy$$8_endPointTopY$$ -= 1;
  $startAngle$$5_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$5_startPointTop$$, $cx$$8_endPointTopX$$, $cy$$8_endPointTopY$$, $rx$$4$$, $ry$$4$$);
  $cx$$8_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$2$$) * $rx$$4$$;
  $cy$$8_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$2$$) * $ry$$4$$;
  $endAngleRads_pathCommands$$2$$ = D.$DvtPathUtils$$.moveTo($startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y);
  $endAngleRads_pathCommands$$2$$ += D.$DvtPathUtils$$.arcTo($rx$$4$$, $ry$$4$$, $angleExtent$$5_angleExtentRads$$, 0, $cx$$8_endPointTopX$$, $cy$$8_endPointTopY$$);
  $endAngleRads_pathCommands$$2$$ += D.$DvtPathUtils$$.lineTo($cx$$8_endPointTopX$$, $cy$$8_endPointTopY$$ + $depth$$7$$);
  $endAngleRads_pathCommands$$2$$ += D.$DvtPathUtils$$.arcTo($rx$$4$$, $ry$$4$$, $angleExtent$$5_angleExtentRads$$, 1, $startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y + $depth$$7$$);
  return $endAngleRads_pathCommands$$2$$ += D.$DvtPathUtils$$.lineTo($startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$9$$, $cy$$9$$, $xpos$$, $ypos$$, $tilt$$1$$) {
  var $pointArray$$2$$ = [];
  $pointArray$$2$$.push({x:$cx$$9$$, y:$cy$$9$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$1$$});
  $pointArray$$2$$.push({x:$cx$$9$$, y:$cy$$9$$ + $tilt$$1$$});
  return $pointArray$$2$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$getMaxY$ = (0,D.$JSCompiler_get$$)("$_maxY$");
D.$JSCompiler_prototypeAlias$$.$getMinY$ = (0,D.$JSCompiler_get$$)("$_minY$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$105$$) {
  $y$$105$$ = window.Math.max($y$$105$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$105$$ = window.Math.min($y$$105$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 0.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$2$$) {
  var $labelPosition$$ = $pie$$2$$.$getLabelPosition$();
  "none" != $labelPosition$$ && ("inside" == $labelPosition$$ ? D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$2$$) : D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$2$$))
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$3$$) {
  if($pie$$3$$ != D.$JSCompiler_alias_NULL$$) {
    var $slices$$5$$ = $pie$$3$$.$_slices$, $n$$12$$ = $slices$$5$$.length;
    if(0 < $n$$12$$) {
      for(var $i$$184$$ = 0;$i$$184$$ < $n$$12$$;$i$$184$$++) {
        var $slice$$18$$ = $slices$$5$$[$i$$184$$], $estimatedDims$$2_midAngle$$1_midPt$$1$$;
        $estimatedDims$$2_midAngle$$1_midPt$$1$$ = $slice$$18$$.$getAngleStart$() + $slice$$18$$.$getAngleExtent$() / 2;
        var $center$$9_x1$$12$$ = $pie$$3$$.$getCenter$(), $posX_usableSpace$$1$$ = 0, $posY_stage$$1_y2$$6$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$18$$, D.$JSCompiler_alias_TRUE$$);
        1 == $n$$12$$ ? ($posX_usableSpace$$1$$ = $center$$9_x1$$12$$.x, $posY_stage$$1_y2$$6$$ = $center$$9_x1$$12$$.y) : ($estimatedDims$$2_midAngle$$1_midPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims$$2_midAngle$$1_midPt$$1$$, $center$$9_x1$$12$$.x, $center$$9_x1$$12$$.y, 0.66 * $pie$$3$$.$_radiusX$, 0.66 * $pie$$3$$.$_radiusY$), $posX_usableSpace$$1$$ = $estimatedDims$$2_midAngle$$1_midPt$$1$$.x, $posY_stage$$1_y2$$6$$ = $estimatedDims$$2_midAngle$$1_midPt$$1$$.y);
        $sliceLabel$$1$$.$setX$($posX_usableSpace$$1$$);
        $sliceLabel$$1$$.$setY$($posY_stage$$1_y2$$6$$);
        $sliceLabel$$1$$.$alignMiddle$();
        $sliceLabel$$1$$.$alignCenter$();
        $estimatedDims$$2_midAngle$$1_midPt$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$);
        for(var $x2$$10$$ = $center$$9_x1$$12$$ = $posX_usableSpace$$1$$, $y1$$8$$ = $posY_stage$$1_y2$$6$$ - $estimatedDims$$2_midAngle$$1_midPt$$1$$.$h$ / 2, $posY_stage$$1_y2$$6$$ = $posY_stage$$1_y2$$6$$ + $estimatedDims$$2_midAngle$$1_midPt$$1$$.$h$ / 2;$slice$$18$$.contains($center$$9_x1$$12$$, $y1$$8$$) && $slice$$18$$.contains($center$$9_x1$$12$$, $posY_stage$$1_y2$$6$$);) {
          $center$$9_x1$$12$$--
        }
        for(;$slice$$18$$.contains($x2$$10$$, $y1$$8$$) && $slice$$18$$.contains($x2$$10$$, $posY_stage$$1_y2$$6$$);) {
          $x2$$10$$++
        }
        $center$$9_x1$$12$$ += 3;
        $x2$$10$$ -= 3;
        $posX_usableSpace$$1$$ = 2 * window.Math.min($posX_usableSpace$$1$$ - $center$$9_x1$$12$$, $x2$$10$$ - $posX_usableSpace$$1$$);
        $posX_usableSpace$$1$$ < $estimatedDims$$2_midAngle$$1_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($center$$9_x1$$12$$ + $x2$$10$$) / 2), $posX_usableSpace$$1$$ = $x2$$10$$ - $center$$9_x1$$12$$);
        $posY_stage$$1_y2$$6$$ = $slice$$18$$.$_pieChart$.$_context$.$_stage$;
        D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $posX_usableSpace$$1$$, $estimatedDims$$2_midAngle$$1_midPt$$1$$.$h$, $posY_stage$$1_y2$$6$$) && ($posY_stage$$1_y2$$6$$.removeChild($sliceLabel$$1$$), $slice$$18$$.$setSliceLabel$($sliceLabel$$1$$))
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$4$$) {
  if($pie$$4$$ != D.$JSCompiler_alias_NULL$$) {
    var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$4$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  }
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$19$$, $noWrap$$) {
  var $contrastingColor$$1_labelStr$$1_pieChart$$7$$ = $slice$$19$$.$_pieChart$;
  if("none" == $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $context$$100_sliceLabel$$2$$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$_context$, $context$$100_sliceLabel$$2$$ = $noWrap$$ ? new D.$DvtOutputText$$($context$$100_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$100_sliceLabel$$2$$), $styleDefaults$$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getOptions$().styleDefaults, $style$$22$$ = $styleDefaults$$.sliceLabelStyle.clone(), $bColorDefined$$ = $style$$22$$.$getStyle$("color") != D.$JSCompiler_alias_NULL$$;
  "inside" == $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getLabelPosition$() && (!$bColorDefined$$ || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) ? ($contrastingColor$$1_labelStr$$1_pieChart$$7$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($slice$$19$$.$getFillColor$()), $style$$22$$.$setStyle$("color", $contrastingColor$$1_labelStr$$1_pieChart$$7$$)) : $bColorDefined$$ || $style$$22$$.$setStyle$("color", $styleDefaults$$._defaultSliceLabelColor);
  D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$($style$$22$$, $context$$100_sliceLabel$$2$$);
  $contrastingColor$$1_labelStr$$1_pieChart$$7$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$($slice$$19$$, $styleDefaults$$.sliceLabelType);
  $context$$100_sliceLabel$$2$$.$setTextString$($contrastingColor$$1_labelStr$$1_pieChart$$7$$);
  $slice$$19$$.$_sliceLabelString$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$;
  return $context$$100_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$generateSliceLabelString$$($slice$$20$$, $labelType$$4$$) {
  var $dataTotal$$1_pieChart$$8_valueFormats$$3$$ = $slice$$20$$.$_pieChart$;
  if("none" == $dataTotal$$1_pieChart$$8_valueFormats$$3$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $percentage$$2_s$$5_spercent$$ = "", $svalue$$ = "", $stext_value$$63$$ = "", $percentage$$2_s$$5_spercent$$ = "", $stext_value$$63$$ = $slice$$20$$.getValue(), $percentage$$2_s$$5_spercent$$ = 0, $dataTotal$$1_pieChart$$8_valueFormats$$3$$ = $dataTotal$$1_pieChart$$8_valueFormats$$3$$.$getTotalValue$(), $percentage$$2_s$$5_spercent$$ = 0 == $dataTotal$$1_pieChart$$8_valueFormats$$3$$ ? 0 : 100 * (window.Math.abs($stext_value$$63$$) / $dataTotal$$1_pieChart$$8_valueFormats$$3$$), $dataTotal$$1_pieChart$$8_valueFormats$$3$$ = 
  $slice$$20$$.$_chart$.$getOptions$().valueFormats, $customLabel$$ = $slice$$20$$.$_customLabel$;
  if($customLabel$$ != D.$JSCompiler_alias_NULL$$) {
    if($dataTotal$$1_pieChart$$8_valueFormats$$3$$ && "number" == typeof $customLabel$$) {
      $percentage$$2_s$$5_spercent$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($dataTotal$$1_pieChart$$8_valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $customLabel$$)
    }else {
      return $customLabel$$
    }
  }else {
    $percentage$$2_s$$5_spercent$$ = $percentage$$2_s$$5_spercent$$.toString();
    if(5 < $percentage$$2_s$$5_spercent$$.length) {
      $percentage$$2_s$$5_spercent$$ = $percentage$$2_s$$5_spercent$$.slice(0, 5)
    }else {
      for(0 > $percentage$$2_s$$5_spercent$$.indexOf(".", 0) && 4 > $percentage$$2_s$$5_spercent$$.length && ($percentage$$2_s$$5_spercent$$ += ".");5 > $percentage$$2_s$$5_spercent$$.length;) {
        $percentage$$2_s$$5_spercent$$ += "0"
      }
    }
    $percentage$$2_s$$5_spercent$$ += "%"
  }
  (0,window.isNaN)($stext_value$$63$$) || ($svalue$$ = $dataTotal$$1_pieChart$$8_valueFormats$$3$$ ? D.$DvtChartTooltipUtils$$.$_formatValue$($dataTotal$$1_pieChart$$8_valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $slice$$20$$.getValue()) : $stext_value$$63$$.toString());
  $stext_value$$63$$ = $slice$$20$$.$getSeriesLabel$();
  return"percent" == $labelType$$4$$ ? $percentage$$2_s$$5_spercent$$ : "number" == $labelType$$4$$ ? $svalue$$ : "text" == $labelType$$4$$ ? $stext_value$$63$$ : "textAndPercent" == $labelType$$4$$ ? $stext_value$$63$$ + ", " + $percentage$$2_s$$5_spercent$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$ = function $$DvtPieLabelUtils$$$$_setFontPropsOnLabel$$($style$$23$$, $sliceLabel$$3$$) {
  $sliceLabel$$3$$ == D.$JSCompiler_alias_NULL$$ || $style$$23$$ == D.$JSCompiler_alias_NULL$$ || $sliceLabel$$3$$.$setCSSStyle$($style$$23$$)
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$5$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$3$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$3$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$4$$ = $isLeftSideLabels_side$$4$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$185$$ = 0;$i$$185$$ < $labelInfoArray$$.length;$i$$185$$++) {
      $collide_labelInfo$$3$$ = $labelInfoArray$$[$i$$185$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$3$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$3$$.$getY$() + $collide_labelInfo$$3$$.getHeight(), ($collide_labelInfo$$3$$ = $lastY$$ - $collide_labelInfo$$3$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$6$$, $alabels$$1$$, $i$$186_side$$5$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$21$$, $sliceLabel$$4$$, $labelInfo$$4$$, $isLeftSide$$ = $i$$186_side$$5$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$1$$ = window.Infinity;
    for($i$$186_side$$5$$ = 0;$i$$186_side$$5$$ < $alabels$$1$$.length;$i$$186_side$$5$$++) {
      $labelInfo$$4$$ = $alabels$$1$$[$i$$186_side$$5$$], $excessLength_slice$$21$$ = $labelInfo$$4$$.$_slice$, $labelInfo$$4$$.$_hasFeeler$ ? ($excessLength_slice$$21$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$4$$, $excessLength_slice$$21$$, $isLeftSide$$), $excessWidth$$1$$ = window.Math.min($excessWidth$$1$$, $excessLength_slice$$21$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)
    }
    for($i$$186_side$$5$$ = 0;$i$$186_side$$5$$ < $alabels$$1$$.length;$i$$186_side$$5$$++) {
      $labelInfo$$4$$ = $alabels$$1$$[$i$$186_side$$5$$];
      $excessLength_slice$$21$$ = $labelInfo$$4$$.$_slice$;
      $sliceLabel$$4$$ = $labelInfo$$4$$.$_sliceLabel$;
      $labelInfo$$4$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$4$$.$setX$($labelInfo$$4$$.$getX$() + $excessWidth$$1$$) : $labelInfo$$4$$.$setX$($labelInfo$$4$$.$getX$() - $excessWidth$$1$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$4$$, $excessLength_slice$$21$$, $isLeftSide$$), $sliceLabel$$4$$.$setMaxLines$(1));
      $sliceLabel$$4$$.$setY$($labelInfo$$4$$.$getY$());
      $sliceLabel$$4$$.$setX$($labelInfo$$4$$.$getX$());
      var $frame$$ = $pie$$6$$.$_frame$;
      $labelInfo$$4$$.$getY$() < $frame$$.y || $labelInfo$$4$$.$getY$() + $labelInfo$$4$$.getHeight() > $frame$$.y + $frame$$.$h$ ? ($excessLength_slice$$21$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$6$$, $excessLength_slice$$21$$, $labelInfo$$4$$, $isLeftSide$$), $excessLength_slice$$21$$.$setSliceLabel$($sliceLabel$$4$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$5_pa$$, $slice$$22$$, $isLeft$$1$$) {
  var $pieChart$$9_radFeelerAngle$$ = $slice$$22$$.$_pieChart$, $endPt$$1_targetX$$ = $labelInfo$$5_pa$$.$getX$(), $horizOffset_targetY_tilt$$2$$ = $labelInfo$$5_pa$$.$getY$() + $labelInfo$$5_pa$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $pieChart$$9_radFeelerAngle$$.$_radiusX$, $midPt$$2_midX$$;
  $isLeft$$1$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  if("outside" == $pieChart$$9_radFeelerAngle$$.$getLabelPosition$()) {
    var $ma_startPt$$1$$ = {x:0, y:0};
    $midPt$$2_midX$$ = {x:$midPt$$2_midX$$, y:$horizOffset_targetY_tilt$$2$$};
    $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$horizOffset_targetY_tilt$$2$$};
    $ma_startPt$$1$$ = $labelInfo$$5_pa$$.$getAngle$();
    $horizOffset_targetY_tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$1$$, $pieChart$$9_radFeelerAngle$$.$getDepth$());
    $ma_startPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$1$$, $pieChart$$9_radFeelerAngle$$.$getCenter$().x, $pieChart$$9_radFeelerAngle$$.$getCenter$().y + $horizOffset_targetY_tilt$$2$$, $pieChart$$9_radFeelerAngle$$.$_radiusX$, $pieChart$$9_radFeelerAngle$$.$_radiusY$);
    $labelInfo$$5_pa$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$5_pa$$.$getPosition$());
    $pieChart$$9_radFeelerAngle$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$.x - $ma_startPt$$1$$.x, $ma_startPt$$1$$.y - $midPt$$2_midX$$.y));
    $horizOffset_targetY_tilt$$2$$ = ($ma_startPt$$1$$.y - $midPt$$2_midX$$.y) * window.Math.tan($labelInfo$$5_pa$$);
    if($labelInfo$$5_pa$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < $labelInfo$$5_pa$$ || $labelInfo$$5_pa$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > $labelInfo$$5_pa$$) {
      $midPt$$2_midX$$.x = $isLeft$$1$$ ? $ma_startPt$$1$$.x - $horizOffset_targetY_tilt$$2$$ : $ma_startPt$$1$$.x + $horizOffset_targetY_tilt$$2$$
    }
    $slice$$22$$.$_outsideFeelerStart$ = $ma_startPt$$1$$;
    $slice$$22$$.$_outsideFeelerMid$ = $midPt$$2_midX$$;
    $slice$$22$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
    $slice$$22$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
    return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$.x) - $minHorizLength$$
  }
  return 0
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$8$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$8$$ = $pieDepth$$);
  return $depth$$8$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$187$$ = 0;$i$$187$$ < $alabels$$2$$.length;$i$$187$$++) {
    var $pa$$1$$ = $alabels$$2$$[$i$$187$$].$getPosition$();
    window.Math.abs($pa$$1$$ - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs($pa$$1$$ - 90), $bestIndex$$ = $i$$187$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$7$$, $labelInfo$$6$$, $heightFromCenter_vertX$$) {
  $labelInfo$$6$$.$setX$($heightFromCenter_vertX$$);
  $heightFromCenter_vertX$$ = $optimalY_pie$$7$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$) * window.Math.cos(D.$DvtMath$$.$degreesToRads$($labelInfo$$6$$.$getPosition$()));
  var $tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$6$$.$getAngle$(), $optimalY_pie$$7$$.$getDepth$());
  $optimalY_pie$$7$$ = $optimalY_pie$$7$$.$getCenter$().y - $heightFromCenter_vertX$$ - $labelInfo$$6$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $tilt$$3$$;
  $labelInfo$$6$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$6$$, $optimalY_pie$$7$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$8$$, $alabels$$3$$, $i$$188_isLeft$$3_startLabel$$, $isTop_labelInfo$$7$$, $isBottom$$) {
  var $frame$$1_vertX$$1$$ = $pie$$8$$.$_frame$, $minY$$3_startIndex$$1$$ = $frame$$1_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$3$$ = $frame$$1_vertX$$1$$.y + $frame$$1_vertX$$1$$.$h$, $frame$$1_vertX$$1$$ = $pie$$8$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$8$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$1_vertX$$1$$ = $i$$188_isLeft$$3_startLabel$$ ? $frame$$1_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$1_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$188_isLeft$$3_startLabel$$ = 0;$i$$188_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$188_isLeft$$3_startLabel$$++) {
    $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$].$_minY$ = $minY$$3_startIndex$$1$$, $minY$$3_startIndex$$1$$ += $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$].getHeight()
  }
  for($i$$188_isLeft$$3_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$188_isLeft$$3_startLabel$$;$i$$188_isLeft$$3_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$3$$ -= $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$].getHeight(), $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$3$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$188_isLeft$$3_startLabel$$ = 0;$i$$188_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$188_isLeft$$3_startLabel$$++) {
      $isTop_labelInfo$$7$$ = $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$], $isTop_labelInfo$$7$$.$setX$($frame$$1_vertX$$1$$), $isTop_labelInfo$$7$$.$setY$(($isTop_labelInfo$$7$$.$_minY$ + $isTop_labelInfo$$7$$.$_maxY$) / 2), $isTop_labelInfo$$7$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$3_startIndex$$1$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$188_isLeft$$3_startLabel$$ = $alabels$$3$$[$minY$$3_startIndex$$1$$];
    $highestY_isStartAtTop_maxY$$3$$ = 90 >= $i$$188_isLeft$$3_startLabel$$.$getPosition$();
    $isTop_labelInfo$$7$$ && !$isBottom$$ && $i$$188_isLeft$$3_startLabel$$.$_minY$ + $i$$188_isLeft$$3_startLabel$$.getHeight() > $pie$$8$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$7$$ && $i$$188_isLeft$$3_startLabel$$.$_maxY$ < $pie$$8$$.$getCenter$().y && ($isTop_labelInfo$$7$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$7$$ && $highestY_isStartAtTop_maxY$$3$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$3$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $i$$188_isLeft$$3_startLabel$$, $frame$$1_vertX$$1$$), $i$$188_isLeft$$3_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$3$$ = $i$$188_isLeft$$3_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$188_isLeft$$3_startLabel$$.$getY$() + $i$$188_isLeft$$3_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$4$$;
    if($isTop_labelInfo$$7$$) {
      for($i$$188_isLeft$$3_startLabel$$ = $minY$$3_startIndex$$1$$ - 1;0 <= $i$$188_isLeft$$3_startLabel$$;$i$$188_isLeft$$3_startLabel$$--) {
        $isTop_labelInfo$$7$$ = $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$], $labelHeight$$4$$ = $isTop_labelInfo$$7$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$7$$, $frame$$1_vertX$$1$$), $isTop_labelInfo$$7$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$7$$.$getY$(), $highestY_isStartAtTop_maxY$$3$$ = $optimalY$$1$$ + $labelHeight$$4$$ < $highestY_isStartAtTop_maxY$$3$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$3$$ - 
        $labelHeight$$4$$, $isTop_labelInfo$$7$$.$setY$($highestY_isStartAtTop_maxY$$3$$)
      }
    }
    if($isBottom$$) {
      for($i$$188_isLeft$$3_startLabel$$ = $minY$$3_startIndex$$1$$ + 1;$i$$188_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$188_isLeft$$3_startLabel$$++) {
        $isTop_labelInfo$$7$$ = $alabels$$3$$[$i$$188_isLeft$$3_startLabel$$], $labelHeight$$4$$ = $isTop_labelInfo$$7$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$7$$, $frame$$1_vertX$$1$$), $isTop_labelInfo$$7$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$7$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$4$$ : $lowestY_minFeelerDist$$ + $labelHeight$$4$$, 
        $isTop_labelInfo$$7$$.$setY$($lowestY_minFeelerDist$$ - $labelHeight$$4$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$9_tmDimPt$$, $frame$$2_slice$$23$$, $labelInfo$$8$$, $isLeft$$4$$) {
  var $sliceLabel$$5$$ = $labelInfo$$8$$.$_sliceLabel$, $style$$24$$ = $sliceLabel$$5$$.$getCSSStyle$(), $maxLabelWidth$$1_numChildren$$ = 0, $maxLabelWidth$$1_numChildren$$ = $pie$$9_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$9_tmDimPt$$.contains($sliceLabel$$5$$) || ($pie$$9_tmDimPt$$.$addChild$($sliceLabel$$5$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$5$$.$setCSSStyle$($style$$24$$);
  $sliceLabel$$5$$.$setTextString$($frame$$2_slice$$23$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$9_tmDimPt$$.$removeChildAt$($maxLabelWidth$$1_numChildren$$);
  $frame$$2_slice$$23$$ = $pie$$9_tmDimPt$$.$_frame$;
  $maxLabelWidth$$1_numChildren$$ = $isLeft$$4$$ ? $labelInfo$$8$$.$getX$() - $frame$$2_slice$$23$$.x : $frame$$2_slice$$23$$.x + $frame$$2_slice$$23$$.$w$ - $labelInfo$$8$$.$getX$();
  $pie$$9_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$9_tmDimPt$$, $sliceLabel$$5$$, $maxLabelWidth$$1_numChildren$$, $labelInfo$$8$$.$_initialNumLines$);
  $labelInfo$$8$$.$setWidth$($pie$$9_tmDimPt$$.x);
  $labelInfo$$8$$.getHeight() != $pie$$9_tmDimPt$$.y && $labelInfo$$8$$.$setHeight$($pie$$9_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$10$$) {
  var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $dist_labelPt$$, $maxLabelWidth$$2_tmDimPt$$1$$, $ma$$2$$ = 0, $pa$$2_tilt$$4$$ = 0, $i$$189$$, $s_label$$, $slices$$6$$ = $pie$$10$$.$_slices$, $n$$13$$ = $slices$$6$$.length, $frame$$3$$ = $pie$$10$$.$_frame$;
  if(0 < $n$$13$$) {
    for($i$$189$$ = 0;$i$$189$$ < $n$$13$$;$i$$189$$++) {
      var $slice$$24$$ = $slices$$6$$[$i$$189$$];
      $s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$24$$);
      $ma$$2$$ = $slice$$24$$.$getAngleStart$() + $slice$$24$$.$getAngleExtent$() / 2;
      360 < $ma$$2$$ && ($ma$$2$$ -= 360);
      0 > $ma$$2$$ && ($ma$$2$$ += 360);
      $dist_labelPt$$ = 1 + D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$;
      $dist_labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$10$$.$getCenter$().x, $pie$$10$$.$getCenter$().y, $pie$$10$$.$_radiusX$ * $dist_labelPt$$, $pie$$10$$.$_radiusY$ * $dist_labelPt$$);
      $maxLabelWidth$$2_tmDimPt$$1$$ = 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $dist_labelPt$$.x - $frame$$3$$.x : $frame$$3$$.x + $frame$$3$$.$w$ - $dist_labelPt$$.x;
      $maxLabelWidth$$2_tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$10$$, $s_label$$, $maxLabelWidth$$2_tmDimPt$$1$$, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
      165 > $ma$$2$$ && 15 < $ma$$2$$ ? $dist_labelPt$$.y -= 1 * $maxLabelWidth$$2_tmDimPt$$1$$.y : 15 > $ma$$2$$ || 345 < $ma$$2$$ ? ($dist_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist_labelPt$$.x += 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($dist_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist_labelPt$$.x -= 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y);
      $pa$$2_tilt$$4$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$10$$.$getDepth$());
      $dist_labelPt$$.y += $pa$$2_tilt$$4$$;
      1 == $n$$13$$ && ($dist_labelPt$$.x -= $maxLabelWidth$$2_tmDimPt$$1$$.x / 2);
      $dist_labelPt$$.y < $frame$$3$$.y && ($dist_labelPt$$.y = $frame$$3$$.y);
      $dist_labelPt$$.y + $maxLabelWidth$$2_tmDimPt$$1$$.y > $frame$$3$$.y + $frame$$3$$.$h$ && ($dist_labelPt$$.y = $frame$$3$$.y + $frame$$3$$.$h$ - $maxLabelWidth$$2_tmDimPt$$1$$.y);
      90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($s_label$$.$alignRight$(), $pa$$2_tilt$$4$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$24$$, $s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist_labelPt$$, $leftLabels$$1$$)) : ($pa$$2_tilt$$4$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$24$$, $s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist_labelPt$$, 
      $rightLabels$$1$$))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($slice$$25$$, $sliceLabel$$6$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $insertPos$$ = -1, $labelInfo$$9$$, $j$$33$$ = 0;$j$$33$$ < $labelInfoArray$$1$$.length;$j$$33$$++) {
    if($labelInfo$$9$$ = $labelInfoArray$$1$$[$j$$33$$], $labelInfo$$9$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$33$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$9$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$9$$.$setPosition$($pa$$3$$);
  $labelInfo$$9$$.$setAngle$($ma$$3$$);
  $labelInfo$$9$$.$setSliceLabel$($sliceLabel$$6$$);
  $labelInfo$$9$$.$_slice$ = $slice$$25$$;
  $labelInfo$$9$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$9$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$9$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$9$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$9$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$10$$, $sliceLabel$$7$$, $dimensions_maxWidth$$5$$, $maxLines$$) {
  $sliceLabel$$7$$.$setMaxLines$($maxLines$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$7$$, $dimensions_maxWidth$$5$$, window.Infinity, $pieChart$$10$$);
  $pieChart$$10$$.$addChild$($sliceLabel$$7$$);
  $dimensions_maxWidth$$5$$ = $sliceLabel$$7$$.$getDimensions$();
  $pieChart$$10$$.removeChild($sliceLabel$$7$$);
  return{x:$dimensions_maxWidth$$5$$.$w$, y:$dimensions_maxWidth$$5$$.$h$}
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$29$$, $container$$56$$, $availSpace$$29$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
  if(D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$29$$)) {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$29$$, $container$$56$$, $availSpace$$29$$)
  }else {
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$29$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$29$$, $container$$56$$, $availSpace$$29$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $maxHeight$$inline_1289_space$$inline_1287$$ = $availSpace$$29$$.clone();
    $chart$$29$$.$_axisSpace$ = $maxHeight$$inline_1289_space$$inline_1287$$;
    var $maxWidth$$inline_1288_space$$inline_1292$$;
    D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$29$$, "x") ? ($maxWidth$$inline_1288_space$$inline_1292$$ = 0.8 * $maxHeight$$inline_1289_space$$inline_1287$$.$w$, $maxHeight$$inline_1289_space$$inline_1287$$ = $maxHeight$$inline_1289_space$$inline_1287$$.$h$ - 5 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$29$$, "x")) : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$29$$, "y") ? ($maxWidth$$inline_1288_space$$inline_1292$$ = $maxHeight$$inline_1289_space$$inline_1287$$.$w$, $maxHeight$$inline_1289_space$$inline_1287$$ = 
    $maxHeight$$inline_1289_space$$inline_1287$$.$h$ - D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$29$$, "y")) : ($maxWidth$$inline_1288_space$$inline_1292$$ = $maxHeight$$inline_1289_space$$inline_1287$$.$w$, $maxHeight$$inline_1289_space$$inline_1287$$ = $maxHeight$$inline_1289_space$$inline_1287$$.$h$);
    $chart$$29$$.$_radius$ = window.Math.min($maxWidth$$inline_1288_space$$inline_1292$$, $maxHeight$$inline_1289_space$$inline_1287$$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    $maxWidth$$inline_1288_space$$inline_1292$$ = $availSpace$$29$$.clone();
    $chart$$29$$.$_plotAreaSpace$ = $maxWidth$$inline_1288_space$$inline_1292$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$29$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$29$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$29$$, $container$$56$$, $availSpace$$29$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$29$$) && $container$$56$$.$addChild$($chart$$29$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$29$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$30$$) {
  var $options$$84$$ = $chart$$30$$.$getOptions$(), $em$$1$$ = $chart$$30$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$30$$) && !$options$$84$$._isOverview) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$30$$.getWidth(), $chart$$30$$.getHeight()), $plotAreaBounds$$7$$ = $chart$$30$$.$_plotAreaSpace$, $axisBounds_vertAxisBounds$$ = $chart$$30$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$7$$.x, $axisBounds_vertAxisBounds$$.y, $plotAreaBounds$$7$$.$w$, $axisBounds_vertAxisBounds$$.$h$), $axisBounds_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds_vertAxisBounds$$.x, $plotAreaBounds$$7$$.y, $axisBounds_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$7$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$84$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$84$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$;
    if(D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$30$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$30$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$30$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtPanZoomHandler$$($chart$$30$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$);
      var $panUpCursor$$inline_1295$$ = $options$$84$$._resources.panCursorUp, $panDownCursor$$inline_1296$$ = $options$$84$$._resources.panCursorDown;
      (0,D.$DvtAgent$isPlatformIE$$)() || ($panUpCursor$$inline_1295$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_1295$$ + ") 8 8, auto"), $panDownCursor$$inline_1296$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_1296$$ + ") 8 8, auto"));
      $em$$1$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$30$$) && ($marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$30$$) ? new D.$DvtMarqueeHandler$$($chart$$30$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$30$$) ? new D.$DvtMarqueeHandler$$($chart$$30$$, $plotAreaBounds$$7$$, $chartBounds$$, 
      $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$30$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
    }
    "multiple" == $options$$84$$.selection && ($marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtMarqueeHandler$$($chart$$30$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$31$$, $container$$57$$) {
  if(!D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$31$$)) {
    var $availSpace$$30$$ = $chart$$31$$.$_axisSpace$.clone(), $selectionHandler$$3$$ = $chart$$31$$.$getSelectionHandler$();
    if($selectionHandler$$3$$) {
      var $selectedIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$3$$)
    }
    $chart$$31$$.$__cleanUpAxisAndPlotArea$();
    D.$DvtChartAxisRenderer$$.$render$($chart$$31$$, $container$$57$$, $availSpace$$30$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$30$$);
    var $space$$inline_1308$$ = $availSpace$$30$$.clone();
    $chart$$31$$.$_plotAreaSpace$ = $space$$inline_1308$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$31$$, $container$$57$$, $availSpace$$30$$);
    $selectionHandler$$3$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$3$$, $selectedIds$$2$$, $chart$$31$$.$getObjects$());
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$31$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$31$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$32$$, $container$$58$$, $availSpace$$31_rect$$7$$) {
  var $options$$85$$ = $chart$$32$$.$getOptions$();
  $availSpace$$31_rect$$7$$ = new D.$DvtRect$$($chart$$32$$.$_context$, $availSpace$$31_rect$$7$$.x, $availSpace$$31_rect$$7$$.y, $availSpace$$31_rect$$7$$.$w$, $availSpace$$31_rect$$7$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$31_rect$$7$$);
  $container$$58$$.$addChild$($availSpace$$31_rect$$7$$);
  $chart$$32$$.$getEventManager$().$associate$($availSpace$$31_rect$$7$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)));
  $availSpace$$31_rect$$7$$.$setAriaRole$("img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($availSpace$$31_rect$$7$$, "label", $options$$85$$.shortDesc)
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$33$$, $availSpace$$32$$) {
  var $gapHeight$$1_options$$86$$ = $chart$$33$$.$getOptions$(), $gapWidth$$1$$ = window.Math.ceil($gapHeight$$1_options$$86$$.layout.outerGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$33$$)), $gapHeight$$1_options$$86$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$33$$, $gapHeight$$1_options$$86$$.layout.outerGapHeight);
  if(D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$33$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$33$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$33$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$33$$)) {
    $gapWidth$$1$$ = window.Math.min($gapWidth$$1$$, 1), $gapHeight$$1_options$$86$$ = window.Math.min($gapHeight$$1_options$$86$$, 1)
  }
  $availSpace$$32$$.x += $gapWidth$$1$$;
  $availSpace$$32$$.$w$ -= 2 * $gapWidth$$1$$;
  $availSpace$$32$$.y += $gapHeight$$1_options$$86$$;
  $availSpace$$32$$.$h$ -= 2 * $gapHeight$$1_options$$86$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$34$$, $container$$59_footnoteObj$$, $availSpace$$33$$) {
  var $options$$87$$ = $chart$$34$$.$getOptions$();
  if($options$$87$$.title.text) {
    var $lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$34$$.$getEventManager$(), $container$$59_footnoteObj$$, $options$$87$$.title.text, $options$$87$$.title.style, $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, $titleDims$$;
    $lowerSepObj_titleGapBelow_titleObj$$ ? ($titleDims$$ = $lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $titleDims$$.$h$) : ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 0, $titleDims$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$87$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$34$$.$_context$, $options$$87$$.subtitle.text, $availSpace$$33$$.x, $availSpace$$33$$.y);
      $subtitleObj$$.$setCSSStyle$($options$$87$$.subtitle.style);
      $container$$59_footnoteObj$$.$addChild$($subtitleObj$$);
      var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = window.Math.ceil($options$$87$$.layout.titleSubtitleGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$34$$)), $titleSpace$$ = $titleDims$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
      $titleSpace$$ > $availSpace$$33$$.$w$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$34$$, $options$$87$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$33$$.y + $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), $container$$59_footnoteObj$$.removeChild($subtitleObj$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, $chart$$34$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$34$$.$_context$) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$33$$.$w$ - $subtitleDims$$.$w$), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$33$$.$w$ - $titleDims$$.$w$)))) : ($subtitleObj$$.$setY$($titleDims$$.$h$ - $subtitleDims$$.$h$ + $availSpace$$33$$.y), (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, 
      $options$$87$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$87$$.title.hAlign : $options$$87$$.title.halign, $lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$), (0,D.$DvtAgent$isRightToLeft$$)($chart$$34$$.$_context$) ? ($subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + 
      $titleSpace$$ - $subtitleDims$$.$w$));
      (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($subtitleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
      $chart$$34$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $options$$87$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$87$$.title.hAlign : $options$$87$$.title.halign, $lowerSepObj_titleGapBelow_titleObj$$, $titleDims$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($lowerSepObj_titleGapBelow_titleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
    $lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$87$$.titleSeparator.rendered ? $options$$87$$.layout.titleSeparatorGap : $options$$87$$.layout.titlePlotAreaGap;
    $availSpace$$33$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$34$$, $lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$33$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$34$$, $lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$87$$.titleSeparator.rendered && ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$34$$.$_context$, $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y), $lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$34$$.$_context$, $availSpace$$33$$.x, $availSpace$$33$$.y + 1, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y + 1), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$87$$.titleSeparator.upperColor), 
    $lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$87$$.titleSeparator.lowerColor), $container$$59_footnoteObj$$.$addChild$($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$), $container$$59_footnoteObj$$.$addChild$($lowerSepObj_titleGapBelow_titleObj$$), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$34$$, $options$$87$$.layout.titlePlotAreaGap), $availSpace$$33$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, 
    $availSpace$$33$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$)
  }
  if($options$$87$$.footnote.text) {
    if($container$$59_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$34$$.$getEventManager$(), $container$$59_footnoteObj$$, $options$$87$$.footnote.text, $options$$87$$.footnote.style, $availSpace$$33$$.x, 0, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$))) {
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $container$$59_footnoteObj$$.$getDimensions$(), $container$$59_footnoteObj$$.$setY$($availSpace$$33$$.y + $availSpace$$33$$.$h$ - $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$), $availSpace$$33$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$34$$, $options$$87$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $options$$87$$.footnote.hAlign != 
      D.$JSCompiler_alias_NULL$$ ? $options$$87$$.footnote.hAlign : $options$$87$$.footnote.halign, $container$$59_footnoteObj$$, $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$59_footnoteObj$$, "hidden", D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$35$$, $container$$60$$, $availSpace$$34$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$35$$)) {
    var $pieChart_plotArea$$ = new D.$DvtContainer$$($chart$$35$$.$_context$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart_plotArea$$, $availSpace$$34$$.x, $availSpace$$34$$.y);
    $container$$60$$.$addChild$($pieChart_plotArea$$);
    $chart$$35$$.$_plotArea$ = $pieChart_plotArea$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$35$$, $pieChart_plotArea$$, new D.$DvtRectangle$$(0, 0, $availSpace$$34$$.$w$, $availSpace$$34$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$35$$) ? ($pieChart_plotArea$$ = new D.$DvtPieChart$$($chart$$35$$, $availSpace$$34$$), 0 < $pieChart_plotArea$$.$_slices$.length ? ($container$$60$$.$addChild$($pieChart_plotArea$$), $pieChart_plotArea$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$35$$, $container$$60$$, $availSpace$$34$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$35$$) && D.$DvtFunnelRenderer$$.$render$($chart$$35$$, $container$$60$$, $availSpace$$34$$)
  }
  $availSpace$$34$$.$w$ = 0;
  $availSpace$$34$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$36$$, $container$$61$$, $availSpace$$35$$) {
  var $options$$88$$ = $chart$$36$$.$getOptions$();
  if(D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$36$$) && D.$DvtChartDataUtils$$.$hasData$($chart$$36$$)) {
    var $emptyTextStr_text$$28$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$36$$.$getBundle$(), "INVALID_DATA", D.$JSCompiler_alias_NULL$$)
  }else {
    ($emptyTextStr_text$$28$$ = $options$$88$$.emptyText) || ($emptyTextStr_text$$28$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$36$$.$getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$))
  }
  $emptyTextStr_text$$28$$ = new D.$DvtOutputText$$($chart$$36$$.$_context$, $emptyTextStr_text$$28$$, $availSpace$$35$$.x + $availSpace$$35$$.$w$ / 2, $availSpace$$35$$.y + $availSpace$$35$$.$h$ / 2);
  $emptyTextStr_text$$28$$.$setCSSStyle$($options$$88$$.title.style);
  $emptyTextStr_text$$28$$.$alignCenter$();
  $emptyTextStr_text$$28$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($emptyTextStr_text$$28$$, $availSpace$$35$$.$w$ - 2 * D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, window.Infinity, $container$$61$$, 0) && ($emptyTextStr_text$$28$$.$isTruncated$() && $chart$$36$$.$getEventManager$().$associate$($emptyTextStr_text$$28$$, new D.$DvtSimpleObjPeer$$($emptyTextStr_text$$28$$.$_untruncatedTextString$)), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($emptyTextStr_text$$28$$, "hidden", D.$JSCompiler_alias_NULL$$))
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$37$$, $container$$62$$, $availSpace$$36$$) {
  var $width$$36$$ = $availSpace$$36$$.$w$, $height$$33$$ = 0;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$37$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$37$$)) {
    if(D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$37$$)) {
      if($height$$33$$ = window.Math.min(D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$37$$), $availSpace$$36$$.$h$), 0 < $height$$33$$) {
        var $oldOverviewChart$$ = $chart$$37$$.$overview$ ? $chart$$37$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
        $chart$$37$$.$overview$ = new D.$DvtChartOverview$$($chart$$37$$.$_context$, $chart$$37$$.$processEvent$, $chart$$37$$, $chart$$37$$.getId(), $oldOverviewChart$$);
        $container$$62$$.$addChild$($chart$$37$$.$overview$);
        (0,D.$DvtLayoutUtils$position$$)($availSpace$$36$$, "bottom", $chart$$37$$.$overview$, $width$$36$$, $height$$33$$, 10)
      }
    }else {
      $height$$33$$ = $chart$$37$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$37$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$37$$.$_context$, $chart$$37$$.$processEvent$, $chart$$37$$), $container$$62$$.$addChild$($chart$$37$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$36$$, "bottom", $chart$$37$$.$xScrollbar$, $width$$36$$, $height$$33$$, 8), $chart$$37$$.$overview$ = D.$JSCompiler_alias_NULL$$
    }
  }
  return new D.$DvtDimension$$($width$$36$$, $height$$33$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$38$$, $container$$63$$, $availSpace$$37$$) {
  var $width$$37$$ = 0, $height$$34$$ = $availSpace$$37$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$38$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$38$$)) {
    var $width$$37$$ = $chart$$38$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$ = new D.$DvtSimpleScrollbar$$($chart$$38$$.$_context$, $chart$$38$$.$processEvent$, $chart$$38$$);
    $container$$63$$.$addChild$($scrollbar$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$37$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$38$$.$_context$) ? "right" : "left", $scrollbar$$, $width$$37$$, $height$$34$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$38$$) ? $chart$$38$$.$xScrollbar$ = $scrollbar$$ : $chart$$38$$.$yScrollbar$ = $scrollbar$$
  }
  return new D.$DvtDimension$$($width$$37$$, $height$$34$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$39$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$89$$ = $chart$$39$$.$getOptions$(), $sbOptions$$ = {color:$options$$89$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$89$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$39$$.$_plotAreaSpace$, $hitAreaSize$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 8 : 4;
  if($chart$$39$$.$xScrollbar$) {
    $sbOptions$$.min = $chart$$39$$.$xAxis$.$getGlobalMin$();
    $sbOptions$$.max = $chart$$39$$.$xAxis$.$getGlobalMax$();
    if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$39$$)) {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$39$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$39$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)
    }else {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$;
      $sbOptions$$.isReversed = (0,D.$DvtAgent$isRightToLeft$$)($chart$$39$$.$_context$);
      $chart$$39$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x);
      $chart$$39$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$);
      var $hitArea$$ = new D.$DvtRect$$($chart$$39$$.$_context$, 0, -$hitAreaSize$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$ + 2 * $hitAreaSize$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$);
      $chart$$39$$.$xScrollbar$.$addChild$($hitArea$$)
    }
    $chart$$39$$.$xScrollbar$.$setViewportRange$($chart$$39$$.$xAxis$.$getViewportMin$(), $chart$$39$$.$xAxis$.$getViewportMax$())
  }
  $chart$$39$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$39$$.$yAxis$.$getGlobalMin$(), $sbOptions$$.max = $chart$$39$$.$yAxis$.$getGlobalMax$(), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$39$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$39$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$39$$.$yScrollbar$.$setViewportRange$($chart$$39$$.$yAxis$.$getViewportMin$(), 
  $chart$$39$$.$yAxis$.$getViewportMax$()), $hitArea$$ = new D.$DvtRect$$($chart$$39$$.$_context$, -$hitAreaSize$$, 0, $ovOptions_vertScrollbarDim$$.$w$ + 2 * $hitAreaSize$$, $plotAreaDim$$.$h$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$), $chart$$39$$.$yScrollbar$.$addChild$($hitArea$$));
  $chart$$39$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$39$$.$xAxis$.$getGlobalMin$(), endTime:$chart$$39$$.$xAxis$.$getGlobalMax$(), viewportStartTime:$chart$$39$$.$xAxis$.$getViewportMin$(), viewportEndTime:$chart$$39$$.$xAxis$.$getViewportMax$(), minimumWindowSize:$chart$$39$$.$xAxis$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.clone($options$$89$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$39$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $chart$$39$$.$overview$.$setTranslateX$($plotAreaDim$$.x), 
  $chart$$39$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$39$$.$overview$.$setViewportRange$($chart$$39$$.$xAxis$.$getViewportMin$(), $chart$$39$$.$xAxis$.$getViewportMax$()))
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$40$$) {
  var $options$$90_position$$8_tooltip$$8$$ = $chart$$40$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$40$$) && !$options$$90_position$$8_tooltip$$8$$._isOverview) {
    var $isTouch$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $isScrollable$$ = D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$40$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$40$$), $em$$2$$ = $chart$$40$$.$getEventManager$();
    $chart$$40$$.$dragButtons$ = new D.$DvtContainer$$($chart$$40$$.$_context$);
    var $resources$$9$$ = $options$$90_position$$8_tooltip$$8$$._resources;
    if("multiple" == $options$$90_position$$8_tooltip$$8$$.selection && ($isTouch$$ || $isScrollable$$)) {
      $options$$90_position$$8_tooltip$$8$$ = $isScrollable$$ && ($isTouch$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$40$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$40$$, $chart$$40$$.$dragButtons$, $resources$$9$$.selectUp, $resources$$9$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $options$$90_position$$8_tooltip$$8$$), $options$$90_position$$8_tooltip$$8$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$40$$.$getBundle$(), 
      "MARQUEE_SELECT"), $em$$2$$.$associate$($em$$2$$.$selectButton$, new D.$DvtSimpleObjPeer$$($options$$90_position$$8_tooltip$$8$$))
    }
    $isScrollable$$ && ($options$$90_position$$8_tooltip$$8$$ = $em$$2$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $isTouch$$ ? ($em$$2$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$40$$, $chart$$40$$.$dragButtons$, $resources$$9$$.panUp, $resources$$9$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $options$$90_position$$8_tooltip$$8$$), $options$$90_position$$8_tooltip$$8$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$40$$.$getBundle$(), 
    "PAN"), $em$$2$$.$associate$($em$$2$$.$panButton$, new D.$DvtSimpleObjPeer$$($options$$90_position$$8_tooltip$$8$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$40$$) && ($em$$2$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$40$$, $chart$$40$$.$dragButtons$, $resources$$9$$.zoomUp, $resources$$9$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $options$$90_position$$8_tooltip$$8$$), $options$$90_position$$8_tooltip$$8$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$40$$.$getBundle$(), 
    "MARQUEE_ZOOM"), $em$$2$$.$associate$($em$$2$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($options$$90_position$$8_tooltip$$8$$))));
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$40$$);
    (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, D.$JSCompiler_alias_NULL$$);
    0 < $chart$$40$$.$dragButtons$.$getNumChildren$() && ($chart$$40$$.$addChild$($chart$$40$$.$dragButtons$), $isTouch$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$2$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$2$$.$onPanButtonClick$()) : (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($chart$$40$$), $chart$$40$$.$dragButtons$.setCursor("default"))
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$41_transX$$2$$, $button$$8$$, $availSpace$$38$$) {
  (0,D.$DvtAgent$isRightToLeft$$)($chart$$41_transX$$2$$.$_context$) ? ($chart$$41_transX$$2$$ = $availSpace$$38$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$38$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$41_transX$$2$$ = $availSpace$$38$$.x + $availSpace$$38$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$38$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$8$$, $chart$$41_transX$$2$$, $availSpace$$38$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$42$$) {
  var $availSpace$$39$$ = $chart$$42$$.$_plotAreaSpace$.clone();
  $availSpace$$39$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$39$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$39$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$42$$.$getEventManager$();
  $em$$3$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$42$$, $em$$3$$.$selectButton$, $availSpace$$39$$);
  $em$$3$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$42$$, $em$$3$$.$panButton$, $availSpace$$39$$);
  $em$$3$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$42$$, $em$$3$$.$zoomButton$, $availSpace$$39$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$79$$, $position$$9$$) {
  var $background$$3_blcr_cmd$$4$$ = 2, $trcr$$ = 2, $isR2L$$3_pos$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$79$$);
  "start" == $position$$9$$ ? $isR2L$$3_pos$$8$$ ? $background$$3_blcr_cmd$$4$$ = 0 : $trcr$$ = 0 : "end" == $position$$9$$ && ($isR2L$$3_pos$$8$$ ? $trcr$$ = 0 : $background$$3_blcr_cmd$$4$$ = 0);
  var $isR2L$$3_pos$$8$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$14$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$3_blcr_cmd$$4$$ = D.$DvtPathUtils$$.$roundedRectangle$($isR2L$$3_pos$$8$$, $isR2L$$3_pos$$8$$, $size$$14$$, $size$$14$$, $background$$3_blcr_cmd$$4$$, $trcr$$, $trcr$$, $background$$3_blcr_cmd$$4$$), $background$$3_blcr_cmd$$4$$ = new D.$DvtPath$$($context$$79$$, $background$$3_blcr_cmd$$4$$);
  1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? ($background$$3_blcr_cmd$$4$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$3_blcr_cmd$$4$$)) : $background$$3_blcr_cmd$$4$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$3_blcr_cmd$$4$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$43_context$$80$$, $container$$65_isR2L$$4$$, $overDownState_upSrc$$, $button$$9_downSrc$$, $callback$$36_enabled$$inline_1315_hitPadding$$, $callbackObj$$13$$, $hitArea$$1_position$$10$$) {
  $chart$$43_context$$80$$ = $chart$$43_context$$80$$.$_context$;
  var $upState$$4$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$43_context$$80$$, $hitArea$$1_position$$10$$);
  $upState$$4$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$4$$.$addChild$(new D.$DvtImage$$($chart$$43_context$$80$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$4$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$43_context$$80$$, $hitArea$$1_position$$10$$);
  $overState$$4$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$4$$.$addChild$(new D.$DvtImage$$($chart$$43_context$$80$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$4$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$43_context$$80$$, $hitArea$$1_position$$10$$);
  $downState$$4$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$4$$.$addChild$(new D.$DvtImage$$($chart$$43_context$$80$$, $button$$9_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$43_context$$80$$, $hitArea$$1_position$$10$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$43_context$$80$$, $button$$9_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$9_downSrc$$ = new D.$DvtButton$$($chart$$43_context$$80$$, $upState$$4$$, $overState$$4$$, $downState$$4$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$36_enabled$$inline_1315_hitPadding$$, $callbackObj$$13$$);
  if(!$button$$9_downSrc$$.$overDownState$ || $button$$9_downSrc$$.$overDownState$ == $overDownState_upSrc$$) {
    $callback$$36_enabled$$inline_1315_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$9_downSrc$$.$overDownState$ && ($callback$$36_enabled$$inline_1315_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$9_downSrc$$.$overDownState$), $button$$9_downSrc$$.removeChild($button$$9_downSrc$$.$overDownState$)), $overDownState_upSrc$$ && $button$$9_downSrc$$.$addChild$($overDownState_upSrc$$), $button$$9_downSrc$$.$overDownState$ = $overDownState_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$9_downSrc$$.$overDownState$, 
    $callback$$36_enabled$$inline_1315_hitPadding$$)
  }
  $button$$9_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$65_isR2L$$4$$.$addChild$($button$$9_downSrc$$);
  $button$$9_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$43_context$$80$$) {
    $chart$$43_context$$80$$.stopPropagation()
  });
  (0,D.$DvtAgent$isTouchDevice$$)() && ($container$$65_isR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$43_context$$80$$), $callback$$36_enabled$$inline_1315_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea$$1_position$$10$$ = "solo" == $hitArea$$1_position$$10$$ ? new D.$DvtRect$$($chart$$43_context$$80$$, -$callback$$36_enabled$$inline_1315_hitPadding$$, -$callback$$36_enabled$$inline_1315_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$36_enabled$$inline_1315_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$36_enabled$$inline_1315_hitPadding$$) : "start" == $hitArea$$1_position$$10$$ && !$container$$65_isR2L$$4$$ || "end" == $hitArea$$1_position$$10$$ && $container$$65_isR2L$$4$$ ? new D.$DvtRect$$($chart$$43_context$$80$$, -$callback$$36_enabled$$inline_1315_hitPadding$$, -$callback$$36_enabled$$inline_1315_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$36_enabled$$inline_1315_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$36_enabled$$inline_1315_hitPadding$$) : new D.$DvtRect$$($chart$$43_context$$80$$, -0.5 * $callback$$36_enabled$$inline_1315_hitPadding$$, -$callback$$36_enabled$$inline_1315_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$36_enabled$$inline_1315_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$36_enabled$$inline_1315_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_position$$10$$), $button$$9_downSrc$$.$addChild$($hitArea$$1_position$$10$$));
  return $button$$9_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$40$$) {
  $availSpace$$40$$.x = window.Math.round($availSpace$$40$$.x);
  $availSpace$$40$$.y = window.Math.round($availSpace$$40$$.y);
  $availSpace$$40$$.$w$ = window.Math.round($availSpace$$40$$.$w$);
  $availSpace$$40$$.$h$ = window.Math.round($availSpace$$40$$.$h$)
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$12$$, $container$$48_xAxisInfo$$, $availSpace$$23$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$12$$)) {
    var $options$$77$$ = $chart$$12$$.$getOptions$(), $isHorizGraph_leftOverflow$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$12$$), $isVertGraph_yAxisInfo$$ = D.$DvtChartTypeUtils$$.$isVertical$($chart$$12$$), $isPolarGraph_rightOverflow$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$12$$), $isR2L$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$12$$.$_context$), $newWidth_numGroups$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$12$$), $totalAvailSpace$$ = $availSpace$$23$$.clone(), $axisGap_y2AxisInfo$$ = 
    $options$$77$$.layout.verticalAxisGap;
    if(D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$12$$)) {
      $isHorizGraph_leftOverflow$$ && ($axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$12$$, "x"), $availSpace$$23$$.y += $axisGap_y2AxisInfo$$, $availSpace$$23$$.$h$ -= 2 * $axisGap_y2AxisInfo$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$12$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$12$$)) {
        $isVertGraph_yAxisInfo$$ && ($axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$12$$, D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$12$$) ? "y" : "y2"), $availSpace$$23$$.y += $axisGap_y2AxisInfo$$, $availSpace$$23$$.$h$ -= 2 * $axisGap_y2AxisInfo$$)
      }else {
        if($isHorizGraph_leftOverflow$$ && D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$12$$, "x") && !D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$12$$, "y2") || $isVertGraph_yAxisInfo$$ && (D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$12$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$12$$, "y2"))) {
          $axisGap_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$12$$, $isHorizGraph_leftOverflow$$ ? "x" : "y"), $availSpace$$23$$.y += $axisGap_y2AxisInfo$$, $availSpace$$23$$.$h$ -= $axisGap_y2AxisInfo$$
        }
      }
    }
    D.$DvtChartTypeUtils$$.$isBubble$($chart$$12$$) && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$12$$, $availSpace$$23$$.$w$, $availSpace$$23$$.$h$);
    $isVertGraph_yAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$12$$, $container$$48_xAxisInfo$$, $availSpace$$23$$);
    $axisGap_y2AxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$12$$, $container$$48_xAxisInfo$$, $availSpace$$23$$);
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$23$$, $totalAvailSpace$$, $isVertGraph_yAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$12$$, "y"));
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$23$$, $totalAvailSpace$$, $axisGap_y2AxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$12$$, "y2"));
    "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$12$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$12$$) && $availSpace$$23$$.$w$ > $newWidth_numGroups$$ && ($newWidth_numGroups$$ *= window.Math.floor($availSpace$$23$$.$w$ / $newWidth_numGroups$$), $availSpace$$23$$.x += ($availSpace$$23$$.$w$ - $newWidth_numGroups$$) / 2, $availSpace$$23$$.$w$ = $newWidth_numGroups$$);
    $container$$48_xAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$12$$, $container$$48_xAxisInfo$$, $availSpace$$23$$, $totalAvailSpace$$);
    $isPolarGraph_rightOverflow$$ ? ($container$$48_xAxisInfo$$.axis.$setTranslateX$($availSpace$$23$$.x), $container$$48_xAxisInfo$$.axis.$setTranslateY$($availSpace$$23$$.y), $container$$48_xAxisInfo$$.axis.$render$($container$$48_xAxisInfo$$.options, $availSpace$$23$$.$w$, $availSpace$$23$$.$h$)) : ($container$$48_xAxisInfo$$.axis.$render$($container$$48_xAxisInfo$$.options, $container$$48_xAxisInfo$$.$dim$.$w$, $container$$48_xAxisInfo$$.$dim$.$h$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$23$$, 
    $totalAvailSpace$$, $container$$48_xAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$12$$, "x")));
    $isPolarGraph_rightOverflow$$ && $isVertGraph_yAxisInfo$$ ? ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$23$$.x), $isVertGraph_yAxisInfo$$.axis.$setTranslateY$($availSpace$$23$$.y), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $availSpace$$23$$.$w$, $availSpace$$23$$.$h$)) : $isHorizGraph_leftOverflow$$ ? ($isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$23$$.x), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, 
    $availSpace$$23$$.$w$, $isVertGraph_yAxisInfo$$.$dim$.$h$)), $axisGap_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap_y2AxisInfo$$.axis, $options$$77$$, $axisGap_y2AxisInfo$$.options), $axisGap_y2AxisInfo$$.axis.$setTranslateX$($availSpace$$23$$.x), $axisGap_y2AxisInfo$$.axis.$render$($axisGap_y2AxisInfo$$.options, $availSpace$$23$$.$w$, $axisGap_y2AxisInfo$$.$dim$.$h$)), $isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($isVertGraph_yAxisInfo$$.axis), 
    $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($isVertGraph_yAxisInfo$$.axis), $availSpace$$23$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$23$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$) : ($isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($container$$48_xAxisInfo$$.axis), $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($container$$48_xAxisInfo$$.axis), $availSpace$$23$$.x += 
    $isHorizGraph_leftOverflow$$, $availSpace$$23$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$, $isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($isVertGraph_yAxisInfo$$.axis.$getTranslateX$() + ($isR2L$$ ? -$isPolarGraph_rightOverflow$$ : $isHorizGraph_leftOverflow$$)), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $isVertGraph_yAxisInfo$$.$dim$.$w$, $availSpace$$23$$.$h$)), $axisGap_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && 
    this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap_y2AxisInfo$$.axis, $options$$77$$, $axisGap_y2AxisInfo$$.options), $axisGap_y2AxisInfo$$.axis.$setTranslateX$($axisGap_y2AxisInfo$$.axis.$getTranslateX$() + ($isR2L$$ ? $isHorizGraph_leftOverflow$$ : -$isPolarGraph_rightOverflow$$)), $axisGap_y2AxisInfo$$.axis.$render$($axisGap_y2AxisInfo$$.options, $axisGap_y2AxisInfo$$.$dim$.$w$, $availSpace$$23$$.$h$)));
    $chart$$12$$.$xAxis$ && ($chart$$12$$.$xAxis$.$destroy$(), $chart$$12$$.removeChild($chart$$12$$.$xAxis$));
    $chart$$12$$.$yAxis$ && ($chart$$12$$.$yAxis$.$destroy$(), $chart$$12$$.removeChild($chart$$12$$.$yAxis$));
    $chart$$12$$.$y2Axis$ && ($chart$$12$$.$y2Axis$.$destroy$(), $chart$$12$$.removeChild($chart$$12$$.$y2Axis$));
    $chart$$12$$.$xAxis$ = $container$$48_xAxisInfo$$.axis;
    $chart$$12$$.$yAxis$ = $isVertGraph_yAxisInfo$$ ? $isVertGraph_yAxisInfo$$.axis : D.$JSCompiler_alias_NULL$$;
    $chart$$12$$.$y2Axis$ = $axisGap_y2AxisInfo$$ ? $axisGap_y2AxisInfo$$.axis : D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$13$$, $container$$49_isR2L$$1_maxSize$$, $availSpace$$24$$, $axis$$4_totalAvailSpace$$1$$) {
  var $actualSize$$1_options$$78$$ = $chart$$13$$.$getOptions$(), $position$$2$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$13$$), $axisOptions$$ = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$78$$.xAxis);
  $axisOptions$$.position = $position$$2$$;
  $axisOptions$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$13$$);
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$, "x", $chart$$13$$);
  $axisOptions$$.groups = $actualSize$$1_options$$78$$.groups;
  $axisOptions$$.timeAxisType = $actualSize$$1_options$$78$$.timeAxisType && D.$DvtChartTypeUtils$$.$isTimeAxisSupported$($chart$$13$$) ? $actualSize$$1_options$$78$$.timeAxisType : "disabled";
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$13$$) && ($axisOptions$$.axisLine = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$78$$.yAxis.axisLine));
  var $isGridShifted$$ = D.$DvtChartAxisUtils$$.$isGridShifted$($chart$$13$$);
  if("tangential" == $position$$2$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$13$$)) {
    $isGridShifted$$ ? ($axisOptions$$.startGroupOffset = 0.5, $axisOptions$$.endGroupOffset = 0.5) : $axisOptions$$.endGroupOffset = 1
  }else {
    var $axisOffset_isHoriz$$3$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$13$$);
    $axisOptions$$.startGroupOffset = $axisOffset_isHoriz$$3$$;
    $axisOptions$$.endGroupOffset = $axisOffset_isHoriz$$3$$;
    D.$DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$13$$) && ($axisOptions$$.endGroupOffset = 1)
  }
  $axisOffset_isHoriz$$3$$ = "top" == $position$$2$$ || "bottom" == $position$$2$$;
  $axisOptions$$.leftBuffer = $axisOffset_isHoriz$$3$$ ? $availSpace$$24$$.x - $axis$$4_totalAvailSpace$$1$$.x : 0;
  $axisOptions$$.rightBuffer = $axisOffset_isHoriz$$3$$ ? $axis$$4_totalAvailSpace$$1$$.$w$ + $axis$$4_totalAvailSpace$$1$$.x - ($availSpace$$24$$.$w$ + $availSpace$$24$$.x) : 0;
  $axisOptions$$._renderGridAtLabels = !$isGridShifted$$ || "disabled" != $axisOptions$$.timeAxisType;
  $axis$$4_totalAvailSpace$$1$$ = new D.$DvtChartAxis$$($chart$$13$$.$_context$, $chart$$13$$.$processEvent$, $chart$$13$$);
  $container$$49_isR2L$$1_maxSize$$.$addChild$($axis$$4_totalAvailSpace$$1$$);
  $container$$49_isR2L$$1_maxSize$$ = D.$DvtChartAxisRenderer$$.$_getMaxSize$($axisOptions$$, "x", $chart$$13$$, $availSpace$$24$$);
  "tangential" == $position$$2$$ ? $actualSize$$1_options$$78$$ = new D.$DvtDimension$$(0, 0) : $actualSize$$1_options$$78$$._duringAnimation ? $axisOffset_isHoriz$$3$$ ? ($actualSize$$1_options$$78$$ = new D.$DvtDimension$$($container$$49_isR2L$$1_maxSize$$.$w$, $chart$$13$$.$xAxis$.getHeight()), $container$$49_isR2L$$1_maxSize$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$13$$.$_context$), $axisOptions$$._startOverflow = $container$$49_isR2L$$1_maxSize$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$13$$.$xAxis$) : 
  (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$13$$.$xAxis$), $axisOptions$$._endOverflow = $container$$49_isR2L$$1_maxSize$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$13$$.$xAxis$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$13$$.$xAxis$)) : $actualSize$$1_options$$78$$ = new D.$DvtDimension$$($chart$$13$$.$xAxis$.getWidth(), $container$$49_isR2L$$1_maxSize$$.$h$) : $actualSize$$1_options$$78$$ = $axis$$4_totalAvailSpace$$1$$.$getPreferredSize$($axisOptions$$, 
  $container$$49_isR2L$$1_maxSize$$.$w$, $container$$49_isR2L$$1_maxSize$$.$h$);
  return{axis:$axis$$4_totalAvailSpace$$1$$, options:$axisOptions$$, position:$position$$2$$, $dim$:$actualSize$$1_options$$78$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($actualSize$$2_chart$$14$$, $container$$50_maxSize$$1$$, $availSpace$$25$$) {
  var $options$$79$$ = $actualSize$$2_chart$$14$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($actualSize$$2_chart$$14$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $position$$3$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($actualSize$$2_chart$$14$$), $isHoriz$$4$$ = "top" == $position$$3$$ || "bottom" == $position$$3$$, $axisOptions$$1$$ = D.$DvtJSONUtils$$.clone($options$$79$$.yAxis);
  $axisOptions$$1$$.position = $position$$3$$;
  $axisOptions$$1$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($actualSize$$2_chart$$14$$);
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$1$$, "y", $actualSize$$2_chart$$14$$);
  D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$1$$, $actualSize$$2_chart$$14$$);
  D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$14$$) && ($axisOptions$$1$$.axisLine = D.$DvtJSONUtils$$.clone($options$$79$$.xAxis.axisLine));
  var $axis$$5$$ = new D.$DvtChartAxis$$($actualSize$$2_chart$$14$$.$_context$, $actualSize$$2_chart$$14$$.$processEvent$, $actualSize$$2_chart$$14$$);
  $container$$50_maxSize$$1$$.$addChild$($axis$$5$$);
  $container$$50_maxSize$$1$$ = D.$DvtChartAxisRenderer$$.$_getMaxSize$($axisOptions$$1$$, "y", $actualSize$$2_chart$$14$$, $availSpace$$25$$);
  $actualSize$$2_chart$$14$$ = "radial" == $position$$3$$ ? new D.$DvtDimension$$(0, 0) : $options$$79$$._duringAnimation ? $isHoriz$$4$$ ? new D.$DvtDimension$$($container$$50_maxSize$$1$$.$w$, $actualSize$$2_chart$$14$$.$yAxis$.getHeight()) : new D.$DvtDimension$$($actualSize$$2_chart$$14$$.$yAxis$.getWidth(), $container$$50_maxSize$$1$$.$h$) : $axis$$5$$.$getPreferredSize$($axisOptions$$1$$, $container$$50_maxSize$$1$$.$w$, $container$$50_maxSize$$1$$.$h$);
  $options$$79$$.yAxis.min = $axisOptions$$1$$.min;
  $options$$79$$.yAxis.max = $axisOptions$$1$$.max;
  return{axis:$axis$$5$$, options:$axisOptions$$1$$, position:$position$$3$$, $dim$:$actualSize$$2_chart$$14$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($actualSize$$3_chart$$15$$, $container$$51_maxSize$$2$$, $availSpace$$26$$) {
  var $options$$80$$ = $actualSize$$3_chart$$15$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($actualSize$$3_chart$$15$$)) {
    var $position$$4$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($actualSize$$3_chart$$15$$), $isHoriz$$5$$ = "top" == $position$$4$$ || "bottom" == $position$$4$$, $axisOptions$$2$$ = D.$DvtJSONUtils$$.clone($options$$80$$.y2Axis);
    $axisOptions$$2$$.position = $position$$4$$;
    $axisOptions$$2$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($actualSize$$3_chart$$15$$);
    D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$2$$, "y2", $actualSize$$3_chart$$15$$);
    D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$2$$, $actualSize$$3_chart$$15$$);
    var $axis$$6$$ = new D.$DvtChartAxis$$($actualSize$$3_chart$$15$$.$_context$, $actualSize$$3_chart$$15$$.$processEvent$, $actualSize$$3_chart$$15$$);
    $container$$51_maxSize$$2$$.$addChild$($axis$$6$$);
    $container$$51_maxSize$$2$$ = D.$DvtChartAxisRenderer$$.$_getMaxSize$($axisOptions$$2$$, "y2", $actualSize$$3_chart$$15$$, $availSpace$$26$$);
    $actualSize$$3_chart$$15$$ = $options$$80$$._duringAnimation ? $isHoriz$$5$$ ? new D.$DvtDimension$$($container$$51_maxSize$$2$$.$w$, $actualSize$$3_chart$$15$$.$y2Axis$.getHeight()) : new D.$DvtDimension$$($actualSize$$3_chart$$15$$.$y2Axis$.getWidth(), $container$$51_maxSize$$2$$.$h$) : $axis$$6$$.$getPreferredSize$($axisOptions$$2$$, $container$$51_maxSize$$2$$.$w$, $container$$51_maxSize$$2$$.$h$);
    $options$$80$$.y2Axis.min = $axisOptions$$2$$.min;
    $options$$80$$.y2Axis.max = $axisOptions$$2$$.max;
    return{axis:$axis$$6$$, options:$axisOptions$$2$$, position:$position$$4$$, $dim$:$actualSize$$3_chart$$15$$}
  }
};
D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($axisOptions$$3$$, $dataValues_type$$66$$, $chart$$16$$) {
  var $options$$81$$ = $chart$$16$$.$getOptions$();
  $axisOptions$$3$$.skin = $options$$81$$.skin;
  $axisOptions$$3$$.layout.gapHeightRatio = (0,D.$JSCompiler_StaticMethods_getGapHeightRatio$$)($chart$$16$$);
  $axisOptions$$3$$.layout.gapWidthRatio = (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$16$$);
  $axisOptions$$3$$.zoomAndScroll = $options$$81$$.zoomAndScroll;
  $axisOptions$$3$$._isOverview = $options$$81$$._isOverview;
  if("x" != $dataValues_type$$66$$ || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$16$$)) {
    $dataValues_type$$66$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$16$$, $dataValues_type$$66$$, D.$DvtChartTypeUtils$$.$isBLAC$($chart$$16$$)), $axisOptions$$3$$.dataMin = $axisOptions$$3$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMin : $dataValues_type$$66$$.min, $axisOptions$$3$$.dataMax = $axisOptions$$3$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMax : $dataValues_type$$66$$.max
  }
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$16$$) && ($axisOptions$$3$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$16$$) ? "polygon" : "circle", $axisOptions$$3$$._radius = $chart$$16$$.$getRadius$(), $axisOptions$$3$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$16$$))
};
D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($axisOptions$$4$$, $chart$$17$$) {
  $axisOptions$$4$$.timeAxisType = "disabled";
  D.$DvtChartEventUtils$$.$isLiveScroll$($chart$$17$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$17$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$17$$)) && ($axisOptions$$4$$._continuousExtent = "on");
  $axisOptions$$4$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
  if($axisOptions$$4$$.isStandalone) {
    $axisOptions$$4$$.leftBuffer = 0, $axisOptions$$4$$.rightBuffer = 0
  }else {
    var $isR2L$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$17$$.$_context$);
    $axisOptions$$4$$.leftBuffer = $isR2L$$2$$ ? 0 : 10;
    $axisOptions$$4$$.rightBuffer = $isR2L$$2$$ ? 10 : 0
  }
};
D.$DvtChartAxisRenderer$$.$_getMaxSize$ = function $$DvtChartAxisRenderer$$$$_getMaxSize$$($axisOptions$$5_maxHeight$$3$$, $tickLabelGap_type$$67$$, $chart$$18_isStandalone$$, $availSpace$$27$$) {
  $tickLabelGap_type$$67$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$18_isStandalone$$, $tickLabelGap_type$$67$$);
  $chart$$18_isStandalone$$ = $axisOptions$$5_maxHeight$$3$$.isStandalone;
  var $maxWidth$$3_position$$5$$ = $axisOptions$$5_maxHeight$$3$$.position;
  "top" == $maxWidth$$3_position$$5$$ || "bottom" == $maxWidth$$3_position$$5$$ ? ($maxWidth$$3_position$$5$$ = $availSpace$$27$$.$w$, $axisOptions$$5_maxHeight$$3$$ = $chart$$18_isStandalone$$ ? $availSpace$$27$$.$h$ - $tickLabelGap_type$$67$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$5_maxHeight$$3$$.maxSize, $availSpace$$27$$.$h$)) : ($maxWidth$$3_position$$5$$ = $chart$$18_isStandalone$$ ? $availSpace$$27$$.$w$ - $tickLabelGap_type$$67$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$5_maxHeight$$3$$.maxSize, 
  $availSpace$$27$$.$w$), $axisOptions$$5_maxHeight$$3$$ = $availSpace$$27$$.$h$);
  return new D.$DvtDimension$$($maxWidth$$3_position$$5$$, $axisOptions$$5_maxHeight$$3$$)
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($minorTickCount_yAxis$$, $y2Axis$$, $options$$82$$, $y2AxisOptions$$) {
  var $majorTickCount$$ = $minorTickCount_yAxis$$.$getMajorTickCount$();
  $minorTickCount_yAxis$$ = $minorTickCount_yAxis$$.$getMinorTickCount$();
  "on" == $options$$82$$.y2Axis.alignTickMarks && $options$$82$$.y2Axis.step == D.$JSCompiler_alias_NULL$$ && ($y2Axis$$.$setMajorTickCount$($majorTickCount$$), $y2Axis$$.$setMinorTickCount$($minorTickCount_yAxis$$), $y2AxisOptions$$._majorTickCount = $majorTickCount$$, $y2AxisOptions$$._minorTickCount = $minorTickCount_yAxis$$, $y2AxisOptions$$.step = $y2Axis$$.$getMajorIncrement$(), $y2AxisOptions$$.minorStep = $y2Axis$$.$getMinorIncrement$())
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$28_bounds$$8$$, $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$, $axisInfo_shiftedPos$$1$$, $gap$$7$$) {
  if($axisInfo_shiftedPos$$1$$) {
    var $isStandalone$$1$$ = $axisInfo_shiftedPos$$1$$.options.isStandalone, $axisSize$$ = $axisInfo_shiftedPos$$1$$.options.size;
    if($isStandalone$$1$$ || $axisSize$$ != D.$JSCompiler_alias_NULL$$) {
      if("top" == $axisInfo_shiftedPos$$1$$.position || "bottom" == $axisInfo_shiftedPos$$1$$.position) {
        $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ = $isStandalone$$1$$ ? $availSpace$$28_bounds$$8$$.$h$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$.$h$), $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ = window.Math.max($excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ - $axisInfo_shiftedPos$$1$$.$dim$.$h$ - $gap$$7$$, 0), $availSpace$$28_bounds$$8$$.$h$ -= 
        $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$, "top" == $axisInfo_shiftedPos$$1$$.position && ($availSpace$$28_bounds$$8$$.y += $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$)
      }else {
        if("left" == $axisInfo_shiftedPos$$1$$.position || "right" == $axisInfo_shiftedPos$$1$$.position) {
          $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ = $isStandalone$$1$$ ? $availSpace$$28_bounds$$8$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$.$w$), $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ = window.Math.max($excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$ - $axisInfo_shiftedPos$$1$$.$dim$.$w$ - $gap$$7$$, 0), $availSpace$$28_bounds$$8$$.$w$ -= 
          $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$, "left" == $axisInfo_shiftedPos$$1$$.position && ($availSpace$$28_bounds$$8$$.x += $excessHeight_excessWidth_fixedHeight_fixedWidth$$2_totalAvailSpace$$4$$)
        }
      }
    }
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$28_bounds$$8$$, $axisInfo_shiftedPos$$1$$.position, $axisInfo_shiftedPos$$1$$.axis, $axisInfo_shiftedPos$$1$$.$dim$.$w$, $axisInfo_shiftedPos$$1$$.$dim$.$h$, $gap$$7$$);
    if($availSpace$$28_bounds$$8$$ = $axisInfo_shiftedPos$$1$$.axis.$_bounds$) {
      $axisInfo_shiftedPos$$1$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axisInfo_shiftedPos$$1$$.axis, new D.$DvtPoint$$($availSpace$$28_bounds$$8$$.x, $availSpace$$28_bounds$$8$$.y)), $availSpace$$28_bounds$$8$$.x = $axisInfo_shiftedPos$$1$$.x, $availSpace$$28_bounds$$8$$.y = $axisInfo_shiftedPos$$1$$.y
    }
  }
};
D.$DvtChartAxisRenderer$$.$_getTickLabelGap$ = function $$DvtChartAxisRenderer$$$$_getTickLabelGap$$($chart$$19$$, $type$$68$$) {
  var $gapHeight_options$$83$$ = $chart$$19$$.$getOptions$(), $isHorizGraph$$1$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$19$$), $scalingFactor$$ = D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$19$$, $type$$68$$), $gapWidth$$ = $gapHeight_options$$83$$.layout.tickLabelGapWidth * $scalingFactor$$, $gapHeight_options$$83$$ = $gapHeight_options$$83$$.layout.tickLabelGapHeight * $scalingFactor$$;
  return"x" == $type$$68$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$19$$, "x") ? $isHorizGraph$$1$$ ? $gapWidth$$ : $gapHeight_options$$83$$ : 0 : "y" == $type$$68$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$19$$, "y") ? $isHorizGraph$$1$$ ? $gapHeight_options$$83$$ : $gapWidth$$ : 0 : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$19$$, "y2") ? $isHorizGraph$$1$$ ? $gapHeight_options$$83$$ : $gapWidth$$ : 0
};
D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$ = function $$DvtChartAxisRenderer$$$$_getGapScalingFactor$$($chart$$20$$, $type$$69$$) {
  return D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$20$$, $type$$69$$) / 11
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$6$$, $container$$47$$, $availSpace$$22_bounds$$7$$) {
  var $gap$$6_options$$75$$ = $chart$$6$$.$getOptions$(), $position$$1_shiftedPos$$ = $gap$$6_options$$75$$.legend.position;
  if("on" == $gap$$6_options$$75$$.legend.rendered) {
    var $legendOptions$$1$$ = D.$DvtJSONUtils$$.clone($gap$$6_options$$75$$.legend);
    delete $legendOptions$$1$$.position;
    $legendOptions$$1$$.skin = $gap$$6_options$$75$$.skin;
    $legendOptions$$1$$.layout.gapWidthRatio = (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$6$$);
    $legendOptions$$1$$.layout.gapHeightRatio = (0,D.$JSCompiler_StaticMethods_getGapHeightRatio$$)($chart$$6$$);
    $legendOptions$$1$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$6$$);
    $legendOptions$$1$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$6$$);
    "auto" == $position$$1_shiftedPos$$ && ($position$$1_shiftedPos$$ = $availSpace$$22_bounds$$7$$.$w$ >= $availSpace$$22_bounds$$7$$.$h$ ? "end" : "bottom");
    var $isHoriz$$2$$ = "top" == $position$$1_shiftedPos$$ || "bottom" == $position$$1_shiftedPos$$;
    $legendOptions$$1$$.orientation = $isHoriz$$2$$ ? "horizontal" : "vertical";
    "start" == $position$$1_shiftedPos$$ ? $legendOptions$$1$$.halign = "end" : "end" == $position$$1_shiftedPos$$ ? $legendOptions$$1$$.halign = "start" : "top" == $position$$1_shiftedPos$$ ? $legendOptions$$1$$.valign = "bottom" : "bottom" == $position$$1_shiftedPos$$ && ($legendOptions$$1$$.valign = "top");
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$6$$, $legendOptions$$1$$);
    if(0 != $legendOptions$$1$$.sections.length) {
      var $legend$$4$$ = (0,D.$DvtLegend$newInstance$$)($chart$$6$$.$_context$, $chart$$6$$.$processEvent$, $chart$$6$$);
      $chart$$6$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$4$$.setId($chart$$6$$.getId() + "legend");
      $container$$47$$.$addChild$($legend$$4$$);
      var $actualSize_maxWidth$$2$$;
      if($legendOptions$$1$$.size != D.$JSCompiler_alias_NULL$$) {
        $actualSize_maxWidth$$2$$ = $isHoriz$$2$$ ? new D.$DvtDimension$$($availSpace$$22_bounds$$7$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$1$$.size, $availSpace$$22_bounds$$7$$.$h$)) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$1$$.size, $availSpace$$22_bounds$$7$$.$w$), $availSpace$$22_bounds$$7$$.$h$)
      }else {
        $actualSize_maxWidth$$2$$ = $isHoriz$$2$$ ? $availSpace$$22_bounds$$7$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$1$$.maxSize, $availSpace$$22_bounds$$7$$.$w$);
        var $maxHeight$$2$$ = $isHoriz$$2$$ ? D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$1$$.maxSize, $availSpace$$22_bounds$$7$$.$h$) : $availSpace$$22_bounds$$7$$.$h$;
        $actualSize_maxWidth$$2$$ = $legend$$4$$.$getPreferredSize$($legendOptions$$1$$, $actualSize_maxWidth$$2$$, $maxHeight$$2$$)
      }
      $legend$$4$$.$render$($legendOptions$$1$$, $actualSize_maxWidth$$2$$.$w$, $actualSize_maxWidth$$2$$.$h$);
      $gap$$6_options$$75$$ = $isHoriz$$2$$ ? (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$6$$, $gap$$6_options$$75$$.layout.legendGap) : window.Math.ceil($gap$$6_options$$75$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$6$$));
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$22_bounds$$7$$, $position$$1_shiftedPos$$, $legend$$4$$, $actualSize_maxWidth$$2$$.$w$, $actualSize_maxWidth$$2$$.$h$, $gap$$6_options$$75$$);
      $availSpace$$22_bounds$$7$$ = $legend$$4$$.$_bounds$;
      $position$$1_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$4$$, new D.$DvtPoint$$($availSpace$$22_bounds$$7$$.x, $availSpace$$22_bounds$$7$$.y));
      $availSpace$$22_bounds$$7$$.x = $position$$1_shiftedPos$$.x;
      $availSpace$$22_bounds$$7$$.y = $position$$1_shiftedPos$$.y;
      $chart$$6$$.$legend$ && ($chart$$6$$.$legend$.$destroy$(), $container$$47$$.removeChild($chart$$6$$.$legend$));
      $chart$$6$$.$legend$ = $legend$$4$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$7$$, $legendOptions$$2$$) {
  var $chartOptions$$ = $chart$$7$$.$getOptions$();
  $legendOptions$$2$$.title = $chartOptions$$.legend ? $chartOptions$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$2$$.sections = [];
  var $refObjItems_seriesItems$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$7$$);
  0 < $refObjItems_seriesItems$$.length && (D.$DvtChartTypeUtils$$.$isStacked$($chart$$7$$) && (D.$DvtChartTypeUtils$$.$isVertical$($chart$$7$$) && "vertical" == $legendOptions$$2$$.orientation) && $refObjItems_seriesItems$$.reverse(), $legendOptions$$2$$.sections.push({items:$refObjItems_seriesItems$$}));
  D.$DvtChartLegendRenderer$$.$_addLegendSections$($chart$$7$$, $legendOptions$$2$$.sections);
  $refObjItems_seriesItems$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$7$$);
  0 < $refObjItems_seriesItems$$.length && $legendOptions$$2$$.sections.push({items:$refObjItems_seriesItems$$, title:$chartOptions$$.legend ? $chartOptions$$.legend.referenceObjectTitle : D.$JSCompiler_alias_NULL$$})
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$8$$) {
  var $ret$$31$$ = [], $legendItem$$;
  if("pie" == $chart$$8$$.$getType$()) {
    for(var $seriesCount$$1_seriesIndices$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$8$$), $seriesIndex$$3$$, $i$$125$$ = 0;$i$$125$$ < $seriesCount$$1_seriesIndices$$.length;$i$$125$$++) {
      $seriesIndex$$3$$ = $seriesCount$$1_seriesIndices$$[$i$$125$$], ($legendItem$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$8$$, $seriesIndex$$3$$)) && $ret$$31$$.push($legendItem$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$8$$) && ($legendItem$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$8$$.$getBundle$(), "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), categoryVisibility:D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$8$$), symbolType:"marker", color:$chart$$8$$.$getOptions$().styleDefaults.otherColor, borderColor:$chart$$8$$.$getOptions$().styleDefaults.borderColor}, $ret$$31$$.push($legendItem$$))
  }else {
    $seriesCount$$1_seriesIndices$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$8$$);
    for($seriesIndex$$3$$ = 0;$seriesIndex$$3$$ < $seriesCount$$1_seriesIndices$$;$seriesIndex$$3$$++) {
      ($legendItem$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$8$$, $seriesIndex$$3$$)) && $ret$$31$$.push($legendItem$$)
    }
  }
  return $ret$$31$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$9$$, $seriesIndex$$4$$) {
  var $seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$9$$, $seriesIndex$$4$$), $chartType$$ = $chart$$9$$.$getType$(), $seriesType$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$9$$, $seriesIndex$$4$$), $lineType$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$9$$, $seriesIndex$$4$$);
  if(!$seriesItem$$ || "off" == $seriesItem$$.displayInLegend || "on" != $seriesItem$$.displayInLegend && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$9$$, $seriesIndex$$4$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$1_seriesLabel$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$9$$, $seriesIndex$$4$$);
  if(!$legendItem$$1_seriesLabel$$ || 0 >= $legendItem$$1_seriesLabel$$.trim().length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $legendItem$$1_seriesLabel$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$9$$, $seriesIndex$$4$$), text:$legendItem$$1_seriesLabel$$, categoryVisibility:$seriesItem$$.visibility};
  "line" == $seriesType$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($legendItem$$1_seriesLabel$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$9$$, $seriesIndex$$4$$), $legendItem$$1_seriesLabel$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$9$$, $seriesIndex$$4$$), D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$9$$, $seriesIndex$$4$$) ? ($legendItem$$1_seriesLabel$$.symbolType = "none" == $lineType$$ ? "marker" : "lineWithMarker", $legendItem$$1_seriesLabel$$.markerShape = 
  D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$9$$, $seriesIndex$$4$$), $legendItem$$1_seriesLabel$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$9$$, $seriesIndex$$4$$)) : $legendItem$$1_seriesLabel$$.symbolType = "line") : ($legendItem$$1_seriesLabel$$.symbolType = "marker", "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$9$$, $seriesIndex$$4$$) && ($legendItem$$1_seriesLabel$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$9$$, $seriesIndex$$4$$)));
  $legendItem$$1_seriesLabel$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$9$$, $seriesIndex$$4$$);
  $legendItem$$1_seriesLabel$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$9$$, $seriesIndex$$4$$);
  $legendItem$$1_seriesLabel$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$9$$, $seriesIndex$$4$$);
  "bubble" == $chartType$$ && ($legendItem$$1_seriesLabel$$._borderWidth = 0.5);
  $legendItem$$1_seriesLabel$$.action = $seriesItem$$.action;
  $legendItem$$1_seriesLabel$$._spb = $chart$$9$$.$getShowPopupBehaviors$($seriesItem$$._id);
  return $legendItem$$1_seriesLabel$$
};
D.$DvtChartLegendRenderer$$.$_addLegendSections$ = function $$DvtChartLegendRenderer$$$$_addLegendSections$$($chart$$10$$, $sections$$1$$) {
  var $options$$76$$ = $chart$$10$$.$getOptions$();
  if($options$$76$$ && $options$$76$$.legend && $options$$76$$.legend.sections) {
    for(var $i$$126$$ = 0;$i$$126$$ < $options$$76$$.legend.sections.length;$i$$126$$++) {
      var $dataSection$$ = $options$$76$$.legend.sections[$i$$126$$];
      $dataSection$$ && $dataSection$$.items && $sections$$1$$.push({title:$dataSection$$.title, items:$dataSection$$.items})
    }
  }
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$11_refObjs$$) {
  $chart$$11_refObjs$$ = D.$DvtChartRefObjUtils$$.$getObjects$($chart$$11_refObjs$$);
  if(0 >= $chart$$11_refObjs$$.length) {
    return[]
  }
  for(var $items$$2$$ = [], $i$$127$$ = 0;$i$$127$$ < $chart$$11_refObjs$$.length;$i$$127$$++) {
    var $refObj$$ = $chart$$11_refObjs$$[$i$$127$$];
    if($refObj$$ && "on" == $refObj$$.displayInLegend && $refObj$$.text) {
      var $type$$65$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$);
      $items$$2$$.push({symbolType:"area" == $type$$65$$ ? "square" : "line", text:$refObj$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$), lineStyle:$refObj$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$)})
    }
  }
  return $items$$2$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$44$$, $container$$66$$, $availSpace$$41$$) {
  "off" == $chart$$44$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$44$$, $container$$66$$, $availSpace$$41$$) : 0 < $availSpace$$41$$.$w$ && 0 < $availSpace$$41$$.$h$ && ($chart$$44$$.$_currentMarkers$ = [], $chart$$44$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$44$$, $container$$66$$, $availSpace$$41$$), D.$DvtPlotAreaRenderer$$.$_renderGridLines$($chart$$44$$, $container$$66$$, $availSpace$$41$$), D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$44$$, 
  $container$$66$$, $availSpace$$41$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$44$$, $container$$66$$, $availSpace$$41$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$45$$, $container$$67$$, $availSpace$$42$$) {
  var $clipGroup_options$$91$$ = $chart$$45$$.$getOptions$(), $background$$4_cx$$5_points$$4$$, $areaContainer_context$$81$$ = $chart$$45$$.$_context$;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$45$$)) {
    $background$$4_cx$$5_points$$4$$ = $availSpace$$42$$.x + $availSpace$$42$$.$w$ / 2;
    var $cy$$5$$ = $availSpace$$42$$.y + $availSpace$$42$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$45$$) ? ($background$$4_cx$$5_points$$4$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$4_cx$$5_points$$4$$, $cy$$5$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$45$$), $chart$$45$$.$getRadius$()), $background$$4_cx$$5_points$$4$$ = new D.$DvtPolygon$$($areaContainer_context$$81$$, $background$$4_cx$$5_points$$4$$)) : $background$$4_cx$$5_points$$4$$ = new D.$DvtCircle$$($areaContainer_context$$81$$, $background$$4_cx$$5_points$$4$$, 
    $cy$$5$$, $chart$$45$$.$getRadius$())
  }else {
    $background$$4_cx$$5_points$$4$$ = new D.$DvtRect$$($areaContainer_context$$81$$, $availSpace$$42$$.x, $availSpace$$42$$.y, $availSpace$$42$$.$w$, $availSpace$$42$$.$h$)
  }
  $clipGroup_options$$91$$.plotArea.backgroundColor ? $background$$4_cx$$5_points$$4$$.$setSolidFill$($clipGroup_options$$91$$.plotArea.backgroundColor) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$4_cx$$5_points$$4$$);
  $container$$67$$.$addChild$($background$$4_cx$$5_points$$4$$);
  $chart$$45$$.$getEventManager$().$associate$($background$$4_cx$$5_points$$4$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($clipGroup_options$$91$$.xAxis.referenceObjects || $clipGroup_options$$91$$.yAxis.referenceObjects || $clipGroup_options$$91$$.y2Axis.referenceObjects) {
    $clipGroup_options$$91$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$45$$, $container$$67$$, $availSpace$$42$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$45$$, $clipGroup_options$$91$$, $availSpace$$42$$)
  }
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$45$$) && ($areaContainer_context$$81$$ = new D.$DvtContainer$$($areaContainer_context$$81$$), $container$$67$$.$addChild$($areaContainer_context$$81$$), $chart$$45$$.$_areaContainer$ = $areaContainer_context$$81$$, D.$DvtChartTypeUtils$$.$hasAreaSeries$($chart$$45$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$45$$, $areaContainer_context$$81$$, $availSpace$$42$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtPlotAreaRenderer$$.$_renderGridLines$ = function $$DvtPlotAreaRenderer$$$$_renderGridLines$$($chart$$46$$, $container$$68$$, $availSpace$$43$$) {
  var $context$$82$$ = $container$$68$$.$_context$, $options$$92_renderY2Axis$$ = $chart$$46$$.$getOptions$(), $renderXAxis$$ = $chart$$46$$.$xAxis$ && "off" != $options$$92_renderY2Axis$$.xAxis.rendered, $renderYAxis$$ = $chart$$46$$.$yAxis$ && "off" != $options$$92_renderY2Axis$$.yAxis.rendered, $options$$92_renderY2Axis$$ = $chart$$46$$.$y2Axis$ && "off" != $options$$92_renderY2Axis$$.y2Axis.rendered;
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$xAxis$, $chart$$46$$.$xAxis$.$getMinorGridLines$($context$$82$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$yAxis$, $chart$$46$$.$yAxis$.$getMinorGridLines$($context$$82$$));
  $options$$92_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$y2Axis$, $chart$$46$$.$y2Axis$.$getMinorGridLines$($context$$82$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$xAxis$, $chart$$46$$.$xAxis$.$getMajorGridLines$($context$$82$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$yAxis$, $chart$$46$$.$yAxis$.$getMajorGridLines$($context$$82$$));
  $options$$92_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$68$$, $availSpace$$43$$, $chart$$46$$.$y2Axis$, $chart$$46$$.$y2Axis$.$getMajorGridLines$($context$$82$$))
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$47$$, $container$$69$$, $availSpace$$44$$) {
  var $options$$93_renderY2Axis$$1$$ = $chart$$47$$.$getOptions$(), $renderXAxis$$1$$ = $chart$$47$$.$xAxis$ && "off" != $options$$93_renderY2Axis$$1$$.xAxis.rendered, $renderYAxis$$1$$ = $chart$$47$$.$yAxis$ && "off" != $options$$93_renderY2Axis$$1$$.yAxis.rendered, $options$$93_renderY2Axis$$1$$ = $chart$$47$$.$y2Axis$ && "off" != $options$$93_renderY2Axis$$1$$.y2Axis.rendered, $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$47$$);
  $renderXAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$69$$, $availSpace$$44$$, $isPolar$$ ? $chart$$47$$.$yAxis$ : $chart$$47$$.$xAxis$);
  $renderYAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$69$$, $availSpace$$44$$, $isPolar$$ ? $chart$$47$$.$xAxis$ : $chart$$47$$.$yAxis$);
  $options$$93_renderY2Axis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$69$$, $availSpace$$44$$, $chart$$47$$.$y2Axis$)
};
D.$DvtPlotAreaRenderer$$.$_positionGridLines$ = function $$DvtPlotAreaRenderer$$$$_positionGridLines$$($container$$70$$, $availSpace$$45$$, $axis$$11$$, $gridlines$$) {
  for(var $position$$11$$ = $axis$$11$$.$getPosition$(), $i$$129$$ = 0;$i$$129$$ < $gridlines$$.length;$i$$129$$++) {
    var $gridline$$ = $gridlines$$[$i$$129$$];
    $container$$70$$.$addChild$($gridline$$);
    "radial" == $position$$11$$ || "tangential" == $position$$11$$ ? ($gridline$$.$setTranslateX$($availSpace$$45$$.x + $availSpace$$45$$.$w$ / 2), $gridline$$.$setTranslateY$($availSpace$$45$$.y + $availSpace$$45$$.$h$ / 2)) : "top" == $position$$11$$ || "bottom" == $position$$11$$ ? ($gridline$$.$setY1$($availSpace$$45$$.y), $gridline$$.$setY2$($availSpace$$45$$.y + $availSpace$$45$$.$h$), $gridline$$.$setX1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$11$$, $gridline$$.$getX1$())), 
    $gridline$$.$setX2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$11$$, $gridline$$.$getX2$()))) : ($gridline$$.$setX1$($availSpace$$45$$.x), $gridline$$.$setX2$($availSpace$$45$$.x + $availSpace$$45$$.$w$), $gridline$$.$setY1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$11$$, $gridline$$.$getY1$())), $gridline$$.$setY2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$11$$, $gridline$$.$getY2$())))
  }
};
D.$DvtPlotAreaRenderer$$.$_positionAxisLine$ = function $$DvtPlotAreaRenderer$$$$_positionAxisLine$$($container$$71_position$$12$$, $availSpace$$46$$, $axis$$12$$) {
  var $axisLine$$ = $axis$$12$$.$getAxisLine$($container$$71_position$$12$$.$_context$);
  $axisLine$$ && ($container$$71_position$$12$$.$addChild$($axisLine$$), $container$$71_position$$12$$ = $axis$$12$$.$getPosition$(), "radial" == $container$$71_position$$12$$ || "tangential" == $container$$71_position$$12$$ ? ($axisLine$$.$setTranslateX$($availSpace$$46$$.x + $availSpace$$46$$.$w$ / 2), $axisLine$$.$setTranslateY$($availSpace$$46$$.y + $availSpace$$46$$.$h$ / 2)) : "top" == $container$$71_position$$12$$ ? ($axisLine$$.$setX1$($availSpace$$46$$.x), $axisLine$$.$setX2$($availSpace$$46$$.x + 
  $availSpace$$46$$.$w$), $axisLine$$.$setY1$($availSpace$$46$$.y), $axisLine$$.$setY2$($availSpace$$46$$.y)) : "bottom" == $container$$71_position$$12$$ ? ($axisLine$$.$setX1$($availSpace$$46$$.x), $axisLine$$.$setX2$($availSpace$$46$$.x + $availSpace$$46$$.$w$), $axisLine$$.$setY1$($availSpace$$46$$.y + $availSpace$$46$$.$h$), $axisLine$$.$setY2$($availSpace$$46$$.y + $availSpace$$46$$.$h$)) : "left" == $container$$71_position$$12$$ ? ($axisLine$$.$setX1$($availSpace$$46$$.x), $axisLine$$.$setX2$($availSpace$$46$$.x), 
  $axisLine$$.$setY1$($availSpace$$46$$.y), $axisLine$$.$setY2$($availSpace$$46$$.y + $availSpace$$46$$.$h$)) : "right" == $container$$71_position$$12$$ && ($axisLine$$.$setX1$($availSpace$$46$$.x + $availSpace$$46$$.$w$), $axisLine$$.$setX2$($availSpace$$46$$.x + $availSpace$$46$$.$w$), $axisLine$$.$setY1$($availSpace$$46$$.y), $axisLine$$.$setY2$($availSpace$$46$$.y + $availSpace$$46$$.$h$)))
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$48$$, $container$$72_selected$$14$$, $availSpace$$47$$) {
  var $clipGroup$$1_options$$94$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$48$$, $container$$72_selected$$14$$, $availSpace$$47$$);
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$48$$) ? (D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$48$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$48$$, $container$$72_selected$$14$$, $availSpace$$47$$, D.$JSCompiler_alias_TRUE$$), D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$48$$) && D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$48$$, $clipGroup$$1_options$$94$$, $availSpace$$47$$), D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$48$$) && D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$48$$, 
  $container$$72_selected$$14$$, $clipGroup$$1_options$$94$$, $availSpace$$47$$)) : D.$DvtChartTypeUtils$$.$isScatter$($chart$$48$$) ? D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$48$$, $container$$72_selected$$14$$, $availSpace$$47$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$48$$) && D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$48$$, $clipGroup$$1_options$$94$$, $availSpace$$47$$);
  $clipGroup$$1_options$$94$$ = $chart$$48$$.$getOptions$();
  if($clipGroup$$1_options$$94$$.xAxis.referenceObjects || $clipGroup$$1_options$$94$$.yAxis.referenceObjects || $clipGroup$$1_options$$94$$.y2Axis.referenceObjects) {
    $clipGroup$$1_options$$94$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$48$$, $container$$72_selected$$14$$, $availSpace$$47$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$48$$, $clipGroup$$1_options$$94$$, $availSpace$$47$$)
  }
  $container$$72_selected$$14$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$48$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$48$$, $container$$72_selected$$14$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($bbox$$2_chart$$49$$, $container$$73$$, $cmd$$5_dataItemBounds_padding$$2$$, $seriesIndex$$5$$, $groupIndex$$2$$, $dataColor$$4_style$$15_textDim$$) {
  if(!$bbox$$2_chart$$49$$.$getOptions$()._isOverview) {
    var $label$$34_labelString$$2$$ = D.$DvtChartDataUtils$$.$getDataLabel$($bbox$$2_chart$$49$$, $seriesIndex$$5$$, $groupIndex$$2$$);
    if($label$$34_labelString$$2$$) {
      $label$$34_labelString$$2$$ = new D.$DvtOutputText$$($bbox$$2_chart$$49$$.$_context$, $label$$34_labelString$$2$$, 0, 0);
      $label$$34_labelString$$2$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$13_size$$15$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($bbox$$2_chart$$49$$, $seriesIndex$$5$$, $groupIndex$$2$$);
      $dataColor$$4_style$$15_textDim$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($bbox$$2_chart$$49$$, $seriesIndex$$5$$, $groupIndex$$2$$, $dataColor$$4_style$$15_textDim$$, $position$$13_size$$15$$);
      $label$$34_labelString$$2$$.$setCSSStyle$($dataColor$$4_style$$15_textDim$$);
      $label$$34_labelString$$2$$.$setY$($cmd$$5_dataItemBounds_padding$$2$$.y + $cmd$$5_dataItemBounds_padding$$2$$.$h$ / 2);
      $label$$34_labelString$$2$$.$setX$($cmd$$5_dataItemBounds_padding$$2$$.x + $cmd$$5_dataItemBounds_padding$$2$$.$w$ / 2);
      $label$$34_labelString$$2$$.$alignCenter$();
      $label$$34_labelString$$2$$.$alignMiddle$();
      $dataColor$$4_style$$15_textDim$$ = $label$$34_labelString$$2$$.$measureDimensions$();
      if("center" == $position$$13_size$$15$$ || "inBottom" == $position$$13_size$$15$$ || "inTop" == $position$$13_size$$15$$ || "inRight" == $position$$13_size$$15$$ || "inLeft" == $position$$13_size$$15$$) {
        $cmd$$5_dataItemBounds_padding$$2$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$5_dataItemBounds_padding$$2$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$5_dataItemBounds_padding$$2$$.$h$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        $cmd$$5_dataItemBounds_padding$$2$$.$w$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($bbox$$2_chart$$49$$, $seriesIndex$$5$$)) {
          if($dataColor$$4_style$$15_textDim$$.$w$ > $cmd$$5_dataItemBounds_padding$$2$$.$w$ || $dataColor$$4_style$$15_textDim$$.$h$ > $cmd$$5_dataItemBounds_padding$$2$$.$h$) {
            return
          }
          "inRight" == $position$$13_size$$15$$ ? $label$$34_labelString$$2$$.$setX$($cmd$$5_dataItemBounds_padding$$2$$.x + $cmd$$5_dataItemBounds_padding$$2$$.$w$ - $dataColor$$4_style$$15_textDim$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inLeft" == $position$$13_size$$15$$ ? $label$$34_labelString$$2$$.$setX$($cmd$$5_dataItemBounds_padding$$2$$.x + $dataColor$$4_style$$15_textDim$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $position$$13_size$$15$$ ? 
          $label$$34_labelString$$2$$.$setY$($cmd$$5_dataItemBounds_padding$$2$$.y + $dataColor$$4_style$$15_textDim$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$13_size$$15$$ && $label$$34_labelString$$2$$.$setY$($cmd$$5_dataItemBounds_padding$$2$$.y + $cmd$$5_dataItemBounds_padding$$2$$.$h$ - $dataColor$$4_style$$15_textDim$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
        }else {
          if(D.$DvtChartTypeUtils$$.$isBubble$($bbox$$2_chart$$49$$) && ($position$$13_size$$15$$ = $label$$34_labelString$$2$$.$getOptimalFontSize$($cmd$$5_dataItemBounds_padding$$2$$), $label$$34_labelString$$2$$.$setFontSize$($position$$13_size$$15$$), !D.$DvtTextUtils$$.$fitText$($label$$34_labelString$$2$$, $cmd$$5_dataItemBounds_padding$$2$$.$w$, $cmd$$5_dataItemBounds_padding$$2$$.$h$, $container$$73$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
            return
          }
        }
        D.$DvtChartStyleUtils$$.$getPattern$($bbox$$2_chart$$49$$, $seriesIndex$$5$$, $groupIndex$$2$$) != D.$JSCompiler_alias_NULL$$ && ($dataColor$$4_style$$15_textDim$$ = $label$$34_labelString$$2$$.$getDimensions$(), $cmd$$5_dataItemBounds_padding$$2$$ = 0.15 * $dataColor$$4_style$$15_textDim$$.$h$, $cmd$$5_dataItemBounds_padding$$2$$ = D.$DvtPathUtils$$.$roundedRectangle$($dataColor$$4_style$$15_textDim$$.x - $cmd$$5_dataItemBounds_padding$$2$$, $dataColor$$4_style$$15_textDim$$.y, $dataColor$$4_style$$15_textDim$$.$w$ + 
        2 * $cmd$$5_dataItemBounds_padding$$2$$, $dataColor$$4_style$$15_textDim$$.$h$, 2, 2, 2, 2), $bbox$$2_chart$$49$$ = new D.$DvtPath$$($bbox$$2_chart$$49$$.$_context$, $cmd$$5_dataItemBounds_padding$$2$$), $bbox$$2_chart$$49$$.$setSolidFill$("#FFFFFF", 0.9), $container$$73$$.$addChild$($bbox$$2_chart$$49$$))
      }else {
        "right" == $position$$13_size$$15$$ ? $label$$34_labelString$$2$$.$setX$($cmd$$5_dataItemBounds_padding$$2$$.x + $cmd$$5_dataItemBounds_padding$$2$$.$w$ + $dataColor$$4_style$$15_textDim$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "left" == $position$$13_size$$15$$ ? $label$$34_labelString$$2$$.$setX$($cmd$$5_dataItemBounds_padding$$2$$.x - $dataColor$$4_style$$15_textDim$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "above" == $position$$13_size$$15$$ ? 
        $label$$34_labelString$$2$$.$setY$($cmd$$5_dataItemBounds_padding$$2$$.y - $dataColor$$4_style$$15_textDim$$.$h$ / 2) : "below" == $position$$13_size$$15$$ && $label$$34_labelString$$2$$.$setY$($cmd$$5_dataItemBounds_padding$$2$$.y + $cmd$$5_dataItemBounds_padding$$2$$.$h$ + $dataColor$$4_style$$15_textDim$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
      }
      $container$$73$$.$addChild$($label$$34_labelString$$2$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$ = function $$DvtPlotAreaRenderer$$$$_renderLabelForDataMarker$$($chart$$50$$, $container$$74$$, $marker$$3$$) {
  var $logicalObject$$2$$ = $chart$$50$$.$getEventManager$().$getLogicalObject$($marker$$3$$), $markerBounds$$ = new D.$DvtRectangle$$($marker$$3$$.$getX$(), $marker$$3$$.$getY$(), $marker$$3$$.getWidth(), $marker$$3$$.getHeight());
  D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$50$$, $container$$74$$, $markerBounds$$, $logicalObject$$2$$.$getSeriesIndex$(), $logicalObject$$2$$.$getGroupIndex$(), $marker$$3$$.$_dataColor$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkers$$($chart$$51$$, $container$$75$$, $availSpace$$48_numMarkers$$1$$) {
  for(var $markers$$4$$ = [], $i$$130_seriesCount$$2$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$51$$), $seriesIndex$$6$$ = 0;$seriesIndex$$6$$ < $i$$130_seriesCount$$2$$;$seriesIndex$$6$$++) {
    "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$51$$, $seriesIndex$$6$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$51$$, $container$$75$$, $seriesIndex$$6$$, $availSpace$$48_numMarkers$$1$$);
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$51$$, $seriesIndex$$6$$, $availSpace$$48_numMarkers$$1$$), $markers$$4$$ = $markers$$4$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($markers$$4$$);
  $availSpace$$48_numMarkers$$1$$ = $markers$$4$$.length;
  for($i$$130_seriesCount$$2$$ = 0;$i$$130_seriesCount$$2$$ < $availSpace$$48_numMarkers$$1$$;$i$$130_seriesCount$$2$$++) {
    $container$$75$$.$addChild$($markers$$4$$[$i$$130_seriesCount$$2$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$51$$, $container$$75$$, $markers$$4$$[$i$$130_seriesCount$$2$$])
  }
  $chart$$51$$.$_currentMarkers$.push($markers$$4$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkersForSeries$$($chart$$52$$, $container$$76$$, $markers$$5_seriesIndex$$7$$, $availSpace$$49_numMarkers$$2$$) {
  $markers$$5_seriesIndex$$7$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$52$$, $markers$$5_seriesIndex$$7$$, $availSpace$$49_numMarkers$$2$$);
  $availSpace$$49_numMarkers$$2$$ = $markers$$5_seriesIndex$$7$$.length;
  for(var $i$$131$$ = 0;$i$$131$$ < $availSpace$$49_numMarkers$$2$$;$i$$131$$++) {
    $container$$76$$.$addChild$($markers$$5_seriesIndex$$7$$[$i$$131$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$52$$, $container$$76$$, $markers$$5_seriesIndex$$7$$[$i$$131$$])
  }
  $chart$$52$$.$_currentMarkers$.push($markers$$5_seriesIndex$$7$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$53$$, $seriesIndex$$8$$, $availSpace$$50$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$53$$, $seriesIndex$$8$$)) {
    return[]
  }
  var $isTouchDevice$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$83$$ = $chart$$53$$.$_context$, $xAxis$$ = $chart$$53$$.$xAxis$, $yAxis$$1$$ = $chart$$53$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$53$$, $seriesIndex$$8$$) && ($yAxis$$1$$ = $chart$$53$$.$y2Axis$);
  for(var $options$$95$$ = $chart$$53$$.$getOptions$(), $bHasDatatips$$ = D.$DvtChartTooltipUtils$$.$hasDatatips$($chart$$53$$), $bBubbleChart$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$53$$), $isPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$53$$), $markers$$6$$ = [], $groupIndex$$3$$ = 0;$groupIndex$$3$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$53$$);$groupIndex$$3$$++) {
    var $dataValue_hitArea$$2_xCoord$$2_xValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$);
    if(!($dataValue_hitArea$$2_xCoord$$2_xValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue_hitArea$$2_xCoord$$2_xValue$$)) && !("multiple" != $options$$95$$.selection && D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$)) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$)) {
      var $dataValue_hitArea$$2_xCoord$$2_xValue$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$), $cartesian$$1_yCoord$$1_yValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$);
      if($bBubbleChart$$) {
        if($isPolar$$1$$ && $cartesian$$1_yCoord$$1_yValue$$ < $yAxis$$1$$.$getViewportMin$()) {
          continue
        }
        $dataValue_hitArea$$2_xCoord$$2_xValue$$ = $isPolar$$1$$ ? $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$2_xValue$$) : $xAxis$$.$getUnboundedCoordAt$($dataValue_hitArea$$2_xCoord$$2_xValue$$);
        $cartesian$$1_yCoord$$1_yValue$$ = $yAxis$$1$$.$getUnboundedCoordAt$($cartesian$$1_yCoord$$1_yValue$$)
      }else {
        $dataValue_hitArea$$2_xCoord$$2_xValue$$ = $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$2_xValue$$), $cartesian$$1_yCoord$$1_yValue$$ = $yAxis$$1$$.$getCoordAt$($cartesian$$1_yCoord$$1_yValue$$)
      }
      if(!($dataValue_hitArea$$2_xCoord$$2_xValue$$ == D.$JSCompiler_alias_NULL$$ || $cartesian$$1_yCoord$$1_yValue$$ == D.$JSCompiler_alias_NULL$$)) {
        if($isPolar$$1$$) {
          $cartesian$$1_yCoord$$1_yValue$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_yCoord$$1_yValue$$, $dataValue_hitArea$$2_xCoord$$2_xValue$$, $availSpace$$50$$), $dataValue_hitArea$$2_xCoord$$2_xValue$$ = $cartesian$$1_yCoord$$1_yValue$$.x, $cartesian$$1_yCoord$$1_yValue$$ = $cartesian$$1_yCoord$$1_yValue$$.y
        }else {
          if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$53$$)) {
            var $bMarkerDisplayed_temp$$1$$ = $dataValue_hitArea$$2_xCoord$$2_xValue$$, $dataValue_hitArea$$2_xCoord$$2_xValue$$ = $cartesian$$1_yCoord$$1_yValue$$, $cartesian$$1_yCoord$$1_yValue$$ = $bMarkerDisplayed_temp$$1$$
          }
        }
        $bMarkerDisplayed_temp$$1$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$);
        if(!$bMarkerDisplayed_temp$$1$$) {
          var $lastIndex_prevValue_shape$$10$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$53$$) - 1, $dataPos_nextIndex$$1_nextValue$$ = $isPolar$$1$$ && 0 < $lastIndex_prevValue_shape$$10$$ && $groupIndex$$3$$ == $lastIndex_prevValue_shape$$10$$ ? 0 : $groupIndex$$3$$ + 1, $lastIndex_prevValue_shape$$10$$ = D.$DvtChartDataUtils$$.getValue($chart$$53$$, $seriesIndex$$8$$, $isPolar$$1$$ && 0 < $lastIndex_prevValue_shape$$10$$ && 0 == $groupIndex$$3$$ ? $lastIndex_prevValue_shape$$10$$ : $groupIndex$$3$$ - 
          1), $dataPos_nextIndex$$1_nextValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$53$$, $seriesIndex$$8$$, $dataPos_nextIndex$$1_nextValue$$);
          if(($lastIndex_prevValue_shape$$10$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lastIndex_prevValue_shape$$10$$)) && ($dataPos_nextIndex$$1_nextValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataPos_nextIndex$$1_nextValue$$)) && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$53$$)) {
            $bMarkerDisplayed_temp$$1$$ = D.$JSCompiler_alias_TRUE$$
          }
        }
        if(!$options$$95$$._duringAnimation && !$options$$95$$._isOverview || $bMarkerDisplayed_temp$$1$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$)) {
          var $dataPos_nextIndex$$1_nextValue$$ = new D.$DvtPoint$$($dataValue_hitArea$$2_xCoord$$2_xValue$$, $cartesian$$1_yCoord$$1_yValue$$), $lastIndex_prevValue_shape$$10$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$), $borderColor$$8$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$), $borderWidth$$1$$ = $bBubbleChart$$ ? 0.5 : 1, $markerSize$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$53$$, 
          $seriesIndex$$8$$, $groupIndex$$3$$), $halfMarkerSize_marker$$4$$ = $markerSize$$ / 2, $xCoordMinHalf$$ = $dataValue_hitArea$$2_xCoord$$2_xValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $yCoordMinHalf$$ = $cartesian$$1_yCoord$$1_yValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $dataValue_hitArea$$2_xCoord$$2_xValue$$ = $dataValue_hitArea$$2_xCoord$$2_xValue$$ - $halfMarkerSize_marker$$4$$, $cartesian$$1_yCoord$$1_yValue$$ = $cartesian$$1_yCoord$$1_yValue$$ - 
          $halfMarkerSize_marker$$4$$, $halfMarkerSize_marker$$4$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$5$$ = $bMarkerDisplayed_temp$$1$$ ? D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$), $hoverColor$$4$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$5$$), $innerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$53$$), $outerColor$$3$$ = 
          D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$53$$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$53$$) : $dataColor$$5$$;
          $bMarkerDisplayed_temp$$1$$ ? ($halfMarkerSize_marker$$4$$ = new D.$DvtMarker$$($context$$83$$, $lastIndex_prevValue_shape$$10$$, "alta", $dataValue_hitArea$$2_xCoord$$2_xValue$$, $cartesian$$1_yCoord$$1_yValue$$, $markerSize$$, $markerSize$$), $chart$$53$$.$isSelectionSupported$() && $halfMarkerSize_marker$$4$$.setCursor("pointer"), $halfMarkerSize_marker$$4$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$)), $borderColor$$8$$ && 
          $halfMarkerSize_marker$$4$$.$setSolidStroke$($borderColor$$8$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$1$$), $halfMarkerSize_marker$$4$$.$setDataColor$($dataColor$$5$$), $halfMarkerSize_marker$$4$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 2)), $halfMarkerSize_marker$$4$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$3$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$3$$, 1, 4.5)), $halfMarkerSize_marker$$4$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$3$$, 
          1, 1.5), new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 4.5)), $isTouchDevice$$ && $markerSize$$ < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && ($dataValue_hitArea$$2_xCoord$$2_xValue$$ = new D.$DvtRect$$($context$$83$$, $dataValue_hitArea$$2_xCoord$$2_xValue$$, $cartesian$$1_yCoord$$1_yValue$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$2_xValue$$), 
          $halfMarkerSize_marker$$4$$.$addChild$($dataValue_hitArea$$2_xCoord$$2_xValue$$))) : ($chart$$53$$.$isSelectionSupported$() ? ($halfMarkerSize_marker$$4$$ = new D.$DvtChartLineMarker$$($context$$83$$, $lastIndex_prevValue_shape$$10$$, $dataValue_hitArea$$2_xCoord$$2_xValue$$, $cartesian$$1_yCoord$$1_yValue$$, $markerSize$$), $halfMarkerSize_marker$$4$$.setCursor("pointer"), $isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$2_xValue$$ = new D.$DvtRect$$($context$$83$$, $xCoordMinHalf$$, 
          $yCoordMinHalf$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$2_xValue$$), $halfMarkerSize_marker$$4$$.$addChild$($dataValue_hitArea$$2_xCoord$$2_xValue$$))) : ($isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$2_xValue$$ = $xCoordMinHalf$$, $cartesian$$1_yCoord$$1_yValue$$ = $yCoordMinHalf$$, $markerSize$$ = D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
          $bHasDatatips$$ && ($halfMarkerSize_marker$$4$$ = new D.$DvtMarker$$($context$$83$$, "square", D.$JSCompiler_alias_NULL$$, $dataValue_hitArea$$2_xCoord$$2_xValue$$, $cartesian$$1_yCoord$$1_yValue$$, $markerSize$$, $markerSize$$))), $halfMarkerSize_marker$$4$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($halfMarkerSize_marker$$4$$), $halfMarkerSize_marker$$4$$.$setDataColor$($dataColor$$5$$, $innerColor$$3$$, $outerColor$$3$$)));
          $halfMarkerSize_marker$$4$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$6$$.push($halfMarkerSize_marker$$4$$), (0,D.$DvtChartObjPeer$associate$$)($halfMarkerSize_marker$$4$$, $chart$$53$$, $seriesIndex$$8$$, $groupIndex$$3$$, $dataPos_nextIndex$$1_nextValue$$))
        }
      }
    }
  }
  return $markers$$6$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$54$$, $container$$77$$, $availSpace$$51$$) {
  for(var $context$$84$$ = $chart$$54$$.$_context$, $groupCount_options$$96$$ = $chart$$54$$.$getOptions$(), $xAxis$$1$$ = $chart$$54$$.$xAxis$, $bHoriz$$5$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$54$$), $bPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$54$$), $bStacked$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$54$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$54$$), $barSeries$$ = [], $barSeriesCount_seriesCount$$3$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$54$$), 
  $seriesIndex$$9$$ = 0;$seriesIndex$$9$$ < $barSeriesCount_seriesCount$$3$$;$seriesIndex$$9$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$54$$, $seriesIndex$$9$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$54$$, $seriesIndex$$9$$) && $barSeries$$.push($seriesIndex$$9$$)
  }
  (0,D.$DvtAgent$isRightToLeft$$)($context$$84$$) && (!$bStacked$$ && !$bHoriz$$5$$) && $barSeries$$.reverse();
  for(var $groupCount_options$$96$$ = $groupCount_options$$96$$.groups ? $groupCount_options$$96$$.groups.length : 0, $barSeriesCount_seriesCount$$3$$ = $barSeries$$.length, $barWidth$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$54$$, $barSeriesCount_seriesCount$$3$$, $xAxis$$1$$), $offset$$15$$ = D.$DvtChartStyleUtils$$.$getBarOffset$($chart$$54$$, $barWidth$$, $barSeriesCount_seriesCount$$3$$), $y2Offset$$ = D.$DvtChartStyleUtils$$.$getY2BarOffset$($chart$$54$$, $barWidth$$), $barSeriesIndex$$ = 
  0;$barSeriesIndex$$ < $barSeriesCount_seriesCount$$3$$;$barSeriesIndex$$++) {
    for(var $seriesIndex$$9$$ = $barSeries$$[$barSeriesIndex$$], $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$54$$, $seriesIndex$$9$$), $yAxis$$2$$ = $bY2Series$$ ? $chart$$54$$.$y2Axis$ : $chart$$54$$.$yAxis$, $groupIndex$$4$$ = 0;$groupIndex$$4$$ < $groupCount_options$$96$$;$groupIndex$$4$$++) {
      var $shape$$11_xValue$$1_yCoord$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$), $bInvisible_fill$$6_yValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$), $dataPos$$1_markers$$7_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$);
      if(!($bInvisible_fill$$6_yValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bInvisible_fill$$6_yValue$$1$$))) {
        var $innerColor$$4_x1$$6_xCoord$$3$$ = $xAxis$$1$$.$getUnboundedCoordAt$($shape$$11_xValue$$1_yCoord$$2$$, D.$JSCompiler_alias_FALSE$$), $shape$$11_xValue$$1_yCoord$$2$$ = $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$1_markers$$7_totalYValue$$), $axisCoord_stroke$$11$$ = $yAxis$$2$$.$getBaselineCoord$(), $baseCoord_borderColor$$9_dataColor$$6$$ = $bStacked$$ ? $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$1_markers$$7_totalYValue$$ - $bInvisible_fill$$6_yValue$$1$$) : $axisCoord_stroke$$11$$;
        if(!($shape$$11_xValue$$1_yCoord$$2$$ == $baseCoord_borderColor$$9_dataColor$$6$$ && $yAxis$$2$$.$getCoordAt$($dataPos$$1_markers$$7_totalYValue$$) === D.$JSCompiler_alias_NULL$$)) {
          $bInvisible_fill$$6_yValue$$1$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$11_xValue$$1_yCoord$$2$$ - $baseCoord_borderColor$$9_dataColor$$6$$) && ($bInvisible_fill$$6_yValue$$1$$ = D.$JSCompiler_alias_TRUE$$, $shape$$11_xValue$$1_yCoord$$2$$ > $baseCoord_borderColor$$9_dataColor$$6$$ ? $shape$$11_xValue$$1_yCoord$$2$$ = $baseCoord_borderColor$$9_dataColor$$6$$ + 3 : $shape$$11_xValue$$1_yCoord$$2$$ <= $baseCoord_borderColor$$9_dataColor$$6$$ && ($shape$$11_xValue$$1_yCoord$$2$$ = $baseCoord_borderColor$$9_dataColor$$6$$ - 3));
          var $innerColor$$4_x1$$6_xCoord$$3$$ = $bY2Series$$ ? $innerColor$$4_x1$$6_xCoord$$3$$ + $offset$$15$$ + $y2Offset$$ : $innerColor$$4_x1$$6_xCoord$$3$$ + $offset$$15$$, $outerColor$$4_x2$$4$$ = $innerColor$$4_x1$$6_xCoord$$3$$ + $barWidth$$, $dataPos$$1_markers$$7_totalYValue$$ = $bPolar$$ ? D.$DvtPlotAreaRenderer$$.$polarToCartesian$($shape$$11_xValue$$1_yCoord$$2$$, ($innerColor$$4_x1$$6_xCoord$$3$$ + $outerColor$$4_x2$$4$$) / 2, $availSpace$$51$$) : $bHoriz$$5$$ ? new D.$DvtPoint$$($shape$$11_xValue$$1_yCoord$$2$$, 
          ($innerColor$$4_x1$$6_xCoord$$3$$ + $outerColor$$4_x2$$4$$) / 2) : new D.$DvtPoint$$(($innerColor$$4_x1$$6_xCoord$$3$$ + $outerColor$$4_x2$$4$$) / 2, $shape$$11_xValue$$1_yCoord$$2$$), $shape$$11_xValue$$1_yCoord$$2$$ = $bPolar$$ ? new D.$DvtChartPolarBar$$($context$$84$$, $axisCoord_stroke$$11$$, $baseCoord_borderColor$$9_dataColor$$6$$, $shape$$11_xValue$$1_yCoord$$2$$, $innerColor$$4_x1$$6_xCoord$$3$$, $outerColor$$4_x2$$4$$, $availSpace$$51$$) : new D.$DvtChartBar$$($context$$84$$, 
          $bHoriz$$5$$, $bStacked$$, $axisCoord_stroke$$11$$, $baseCoord_borderColor$$9_dataColor$$6$$, $shape$$11_xValue$$1_yCoord$$2$$, $innerColor$$4_x1$$6_xCoord$$3$$, $outerColor$$4_x2$$4$$);
          $container$$77$$.$addChild$($shape$$11_xValue$$1_yCoord$$2$$);
          $chart$$54$$.$isSelectionSupported$() && $shape$$11_xValue$$1_yCoord$$2$$.setCursor("pointer");
          $axisCoord_stroke$$11$$ = D.$JSCompiler_alias_NULL$$;
          $bInvisible_fill$$6_yValue$$1$$ ? $bInvisible_fill$$6_yValue$$1$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($bInvisible_fill$$6_yValue$$1$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$, $bHoriz$$5$$, $barWidth$$), ($baseCoord_borderColor$$9_dataColor$$6$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$)) && ($axisCoord_stroke$$11$$ = new D.$DvtSolidStroke$$($baseCoord_borderColor$$9_dataColor$$6$$)));
          $baseCoord_borderColor$$9_dataColor$$6$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$);
          $innerColor$$4_x1$$6_xCoord$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$54$$);
          $outerColor$$4_x2$$4$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$54$$);
          $shape$$11_xValue$$1_yCoord$$2$$.$setStyleProperties$($bInvisible_fill$$6_yValue$$1$$, $axisCoord_stroke$$11$$, $baseCoord_borderColor$$9_dataColor$$6$$, $innerColor$$4_x1$$6_xCoord$$3$$, $outerColor$$4_x2$$4$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$11_xValue$$1_yCoord$$2$$);
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$54$$, $container$$77$$, $shape$$11_xValue$$1_yCoord$$2$$.$getBoundingBox$(), $seriesIndex$$9$$, $groupIndex$$4$$, D.$DvtChartStyleUtils$$.$getColor$($chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$));
          (0,D.$DvtChartObjPeer$associate$$)($shape$$11_xValue$$1_yCoord$$2$$, $chart$$54$$, $seriesIndex$$9$$, $groupIndex$$4$$, $dataPos$$1_markers$$7_totalYValue$$);
          $dataPos$$1_markers$$7_totalYValue$$ = [];
          $dataPos$$1_markers$$7_totalYValue$$.push($shape$$11_xValue$$1_yCoord$$2$$);
          $chart$$54$$.$_currentMarkers$.push($dataPos$$1_markers$$7_totalYValue$$)
        }
      }
    }
    !$bStacked$$ && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$54$$) && ($offset$$15$$ += $barWidth$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$55$$, $container$$78$$, $clipGroup$$2$$, $availSpace$$52$$) {
  for(var $lineSeries$$ = [], $lineIndex_seriesCount$$4$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$55$$), $seriesIndex$$10$$ = 0;$seriesIndex$$10$$ < $lineIndex_seriesCount$$4$$;$seriesIndex$$10$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$55$$, $seriesIndex$$10$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$55$$, $seriesIndex$$10$$) && $lineSeries$$.push($seriesIndex$$10$$)
  }
  for($lineIndex_seriesCount$$4$$ = 0;$lineIndex_seriesCount$$4$$ < $lineSeries$$.length;$lineIndex_seriesCount$$4$$++) {
    $seriesIndex$$10$$ = $lineSeries$$[$lineIndex_seriesCount$$4$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$55$$, $seriesIndex$$10$$) && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$55$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$55$$, $seriesIndex$$10$$), D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$55$$, $clipGroup$$2$$, $seriesIndex$$10$$, $availSpace$$52$$))
  }
  for($lineIndex_seriesCount$$4$$ = 0;$lineIndex_seriesCount$$4$$ < $lineSeries$$.length;$lineIndex_seriesCount$$4$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$55$$, $container$$78$$, $lineSeries$$[$lineIndex_seriesCount$$4$$], $availSpace$$52$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$56$$, $container$$79$$, $availSpace$$53$$, $isLineWithArea$$) {
  for(var $bStacked$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$56$$), $bPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$56$$), $group$$13_seriesType$$1$$ = $isLineWithArea$$ ? "lineWithArea" : "area", $areaSeries$$ = [], $areaY2Series_baselineCoord$$ = [], $seriesCount$$5_y2PrevCoords$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$56$$), $seriesIndex$$11$$ = 0;$seriesIndex$$11$$ < $seriesCount$$5_y2PrevCoords$$;$seriesIndex$$11$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$56$$, $seriesIndex$$11$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$56$$, $seriesIndex$$11$$) == $group$$13_seriesType$$1$$ && ($bStacked$$1$$ && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$56$$, $seriesIndex$$11$$) ? $areaY2Series_baselineCoord$$.push($seriesIndex$$11$$) : $areaSeries$$.push($seriesIndex$$11$$))
  }
  0 < $areaY2Series_baselineCoord$$.length && ($areaSeries$$ = $areaY2Series_baselineCoord$$.concat($areaSeries$$));
  for(var $group$$13_seriesType$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$56$$, $container$$79$$, $availSpace$$53$$), $areaY2Series_baselineCoord$$ = $chart$$56$$.$yAxis$ ? $chart$$56$$.$yAxis$.$getBaselineCoord$() : $chart$$56$$.$y2Axis$.$getBaselineCoord$(), $area$$23_prevCoords$$ = [], $seriesCount$$5_y2PrevCoords$$ = [], $yPrevCoords$$ = [], $i$$132$$ = 0;$i$$132$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$56$$);$i$$132$$++) {
    $yPrevCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $areaY2Series_baselineCoord$$, $areaY2Series_baselineCoord$$, $i$$132$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$56$$, $i$$132$$), D.$JSCompiler_alias_TRUE$$)), D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$56$$) && $seriesCount$$5_y2PrevCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $areaY2Series_baselineCoord$$, $areaY2Series_baselineCoord$$, $i$$132$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$56$$, $i$$132$$), 
    D.$JSCompiler_alias_TRUE$$))
  }
  for(var $prevType$$, $rawCoords$$, $borderColor$$10_coords$$2$$, $fill$$7$$, $stroke$$12$$, $type$$71$$, $areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
    if($seriesIndex$$11$$ = $areaSeries$$[$areaIndex$$1$$], $area$$23_prevCoords$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$56$$, $seriesIndex$$11$$) ? $seriesCount$$5_y2PrevCoords$$ : $yPrevCoords$$, "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$56$$, $seriesIndex$$11$$)) {
      D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$56$$, $container$$79$$, $seriesIndex$$11$$, $availSpace$$53$$)
    }else {
      $fill$$7$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$56$$, $seriesIndex$$11$$);
      $stroke$$12$$ = ($borderColor$$10_coords$$2$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$56$$, $seriesIndex$$11$$)) ? new D.$DvtSolidStroke$$($borderColor$$10_coords$$2$$) : D.$JSCompiler_alias_NULL$$;
      $type$$71$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$56$$, $seriesIndex$$11$$);
      $bPolar$$1$$ || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$56$$, $seriesIndex$$11$$);
      $rawCoords$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$56$$, $seriesIndex$$11$$);
      $borderColor$$10_coords$$2$$ = [];
      for($i$$132$$ = 0;$i$$132$$ < $area$$23_prevCoords$$.length;$i$$132$$++) {
        $borderColor$$10_coords$$2$$.push($area$$23_prevCoords$$[$i$$132$$].clone())
      }
      for(var $lastIndex$$1$$ = $rawCoords$$.length - 1, $i$$132$$ = 0;$i$$132$$ < $rawCoords$$.length;$i$$132$$++) {
        if($rawCoords$$[$i$$132$$].x != D.$JSCompiler_alias_NULL$$) {
          var $coord$$ = $borderColor$$10_coords$$2$$[$rawCoords$$[$i$$132$$].$groupIndex$], $prevIndex$$1$$ = $bPolar$$1$$ && 0 == $i$$132$$ ? $lastIndex$$1$$ : $i$$132$$ - 1, $nextIndex$$2$$ = $bPolar$$1$$ && $i$$132$$ == $lastIndex$$1$$ ? 0 : $i$$132$$ + 1;
          0 <= $prevIndex$$1$$ && $rawCoords$$[$prevIndex$$1$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$.$y1$ = $rawCoords$$[$i$$132$$].$y1$);
          $nextIndex$$2$$ <= $lastIndex$$1$$ && $rawCoords$$[$nextIndex$$2$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$.$y2$ = $rawCoords$$[$i$$132$$].$y2$);
          $coord$$.x = $rawCoords$$[$i$$132$$].x;
          $coord$$.$filtered$ = $rawCoords$$[$i$$132$$].$filtered$
        }
      }
      $area$$23_prevCoords$$ = new D.$DvtChartLineArea$$($chart$$56$$, D.$JSCompiler_alias_TRUE$$, $availSpace$$53$$, $areaY2Series_baselineCoord$$, $fill$$7$$, $stroke$$12$$, $type$$71$$, $borderColor$$10_coords$$2$$, $prevType$$, $bStacked$$1$$ && 0 < $areaIndex$$1$$ ? $area$$23_prevCoords$$ : []);
      $group$$13_seriesType$$1$$.$addChild$($area$$23_prevCoords$$);
      $chart$$56$$.$_currentAreas$.push($area$$23_prevCoords$$);
      (0,D.$DvtChartObjPeer$associate$$)($area$$23_prevCoords$$, $chart$$56$$, $seriesIndex$$11$$);
      $bStacked$$1$$ && (D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$56$$, $seriesIndex$$11$$) ? $seriesCount$$5_y2PrevCoords$$ = $borderColor$$10_coords$$2$$ : $yPrevCoords$$ = $borderColor$$10_coords$$2$$, $prevType$$ = $type$$71$$);
      $bStacked$$1$$ || ($isLineWithArea$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$56$$, $group$$13_seriesType$$1$$, $seriesIndex$$11$$, $availSpace$$53$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$56$$, $container$$79$$, $seriesIndex$$11$$, $availSpace$$53$$), $areaIndex$$1$$ + 1 < $areaSeries$$.length && ($group$$13_seriesType$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$56$$, $container$$79$$, $availSpace$$53$$)))
    }
  }
  if($bStacked$$1$$) {
    for($areaIndex$$1$$ = 0;$areaIndex$$1$$ < $areaSeries$$.length;$areaIndex$$1$$++) {
      $seriesIndex$$11$$ = $areaSeries$$[$areaIndex$$1$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$56$$, $seriesIndex$$11$$) && ($isLineWithArea$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$56$$, $group$$13_seriesType$$1$$, $seriesIndex$$11$$, $availSpace$$53$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$56$$, $container$$79$$, $seriesIndex$$11$$, $availSpace$$53$$))
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$57$$, $container$$80$$, $seriesIndex$$12$$, $availSpace$$54_line$$6$$) {
  var $color$$17_stroke$$13$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$57$$, $seriesIndex$$12$$), $lineType$$3$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$57$$, $seriesIndex$$12$$), $baseline_lineWidth$$1$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$57$$, $seriesIndex$$12$$), $coords$$3_lineStyle$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$57$$, $seriesIndex$$12$$)), $color$$17_stroke$$13$$ = new D.$DvtSolidStroke$$($color$$17_stroke$$13$$, 
  1, $baseline_lineWidth$$1$$);
  $color$$17_stroke$$13$$.$setStyle$($coords$$3_lineStyle$$);
  $coords$$3_lineStyle$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$57$$, $seriesIndex$$12$$);
  $baseline_lineWidth$$1$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$57$$, $seriesIndex$$12$$) ? $chart$$57$$.$y2Axis$.$getBaselineCoord$() : $chart$$57$$.$yAxis$.$getBaselineCoord$();
  $availSpace$$54_line$$6$$ = new D.$DvtChartLineArea$$($chart$$57$$, D.$JSCompiler_alias_FALSE$$, $availSpace$$54_line$$6$$, $baseline_lineWidth$$1$$, D.$JSCompiler_alias_NULL$$, $color$$17_stroke$$13$$, $lineType$$3$$, $coords$$3_lineStyle$$);
  $container$$80$$.$addChild$($availSpace$$54_line$$6$$);
  (0,D.$DvtChartObjPeer$associate$$)($availSpace$$54_line$$6$$, $chart$$57$$, $seriesIndex$$12$$)
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$58$$, $seriesIndex$$13$$) {
  var $maxNumPts_setSize$$ = $chart$$58$$.$_plotAreaSpace$.$w$, $seriesItems$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$58$$, $seriesIndex$$13$$).items, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$1$$.length / (($chart$$58$$.$xAxis$.$getDataMax$() - $chart$$58$$.$xAxis$.$getDataMin$()) / ($chart$$58$$.$xAxis$.$getViewportMax$() - $chart$$58$$.$xAxis$.$getViewportMin$()))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for(var $i$$133$$ = 0;$i$$133$$ < $seriesItems$$1$$.length;$i$$133$$++) {
      ($dataItem$$5$$ = $seriesItems$$1$$[$i$$133$$]) && ($dataItem$$5$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$, $maxValue$$1$$, $minIndex$$, $minValue$$1$$, $dataItem$$5$$, $dataValue$$1$$, $i$$133$$ = 0;$i$$133$$ < $seriesItems$$1$$.length;$i$$133$$ += $maxNumPts_setSize$$) {
      $maxIndex$$ = -1;
      $maxValue$$1$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$1$$ = window.Infinity;
      for(var $j$$23$$ = $i$$133$$;$j$$23$$ < window.Math.min($i$$133$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$23$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$58$$, $seriesIndex$$13$$, $j$$23$$), $dataItem$$5$$ = $seriesItems$$1$$[$j$$23$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$5$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$1$$ && ($maxIndex$$ = $j$$23$$, $maxValue$$1$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$1$$ && ($minIndex$$ = $j$$23$$, $minValue$$1$$ = $dataValue$$1$$), $dataItem$$5$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$23$$ = $i$$133$$;$j$$23$$ < window.Math.min($i$$133$$ + $maxNumPts_setSize$$, $seriesItems$$1$$.length);$j$$23$$++) {
        if($dataItem$$5$$ = $seriesItems$$1$$[$j$$23$$], $dataItem$$5$$ != D.$JSCompiler_alias_NULL$$ && ($j$$23$$ == $maxIndex$$ || $j$$23$$ == $minIndex$$)) {
          $dataItem$$5$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$59_dataItem$$6$$, $seriesIndex$$14$$, $groupIndex$$5$$) {
  return($chart$$59_dataItem$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$59_dataItem$$6$$, $seriesIndex$$14$$, $groupIndex$$5$$)) && $chart$$59_dataItem$$6$$._filtered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$60$$, $seriesIndex$$15$$) {
  var $xAxis$$2$$ = $chart$$60$$.$xAxis$, $yAxis$$3$$ = $chart$$60$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$60$$, $seriesIndex$$15$$) && ($yAxis$$3$$ = $chart$$60$$.$y2Axis$);
  for(var $coords$$4$$ = [], $groupIndex$$6$$ = 0;$groupIndex$$6$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$60$$);$groupIndex$$6$$++) {
    var $dataValue$$2_yCoord$$3_yValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$60$$, $seriesIndex$$15$$, $groupIndex$$6$$), $coord$$1_group$$14$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$60$$, $groupIndex$$6$$);
    if($dataValue$$2_yCoord$$3_yValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue$$2_yCoord$$3_yValue$$2$$)) {
      $coords$$4$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $groupIndex$$6$$, $coord$$1_group$$14$$, D.$JSCompiler_alias_FALSE$$))
    }else {
      var $xCoord$$4_xValue$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$60$$, $seriesIndex$$15$$, $groupIndex$$6$$), $dataValue$$2_yCoord$$3_yValue$$2$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$60$$, $seriesIndex$$15$$, $groupIndex$$6$$);
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$60$$) && ($dataValue$$2_yCoord$$3_yValue$$2$$ = window.Math.max($dataValue$$2_yCoord$$3_yValue$$2$$, $yAxis$$3$$.$getViewportMin$()));
      $xCoord$$4_xValue$$2$$ = $xAxis$$2$$.$getUnboundedCoordAt$($xCoord$$4_xValue$$2$$);
      $dataValue$$2_yCoord$$3_yValue$$2$$ = $yAxis$$3$$.$getUnboundedCoordAt$($dataValue$$2_yCoord$$3_yValue$$2$$);
      $coord$$1_group$$14$$ = new D.$DvtChartCoord$$($xCoord$$4_xValue$$2$$, $dataValue$$2_yCoord$$3_yValue$$2$$, $dataValue$$2_yCoord$$3_yValue$$2$$, $groupIndex$$6$$, $coord$$1_group$$14$$, D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$60$$, $seriesIndex$$15$$, $groupIndex$$6$$));
      $coords$$4$$.push($coord$$1_group$$14$$)
    }
  }
  return $coords$$4$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$61_obj$$inline_1322_r$$inline_1327$$, $clip_container$$81$$, $availSpace$$56_cy$$6$$) {
  var $clipGroup$$3$$ = new D.$DvtContainer$$($clip_container$$81$$.$_context$);
  $clip_container$$81$$.$addChild$($clipGroup$$3$$);
  $clip_container$$81$$ = new D.$DvtClipPath$$($chart$$61_obj$$inline_1322_r$$inline_1327$$.getId());
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$61_obj$$inline_1322_r$$inline_1327$$)) {
    var $cx$$6_points$$5$$ = $availSpace$$56_cy$$6$$.x + $availSpace$$56_cy$$6$$.$w$ / 2;
    $availSpace$$56_cy$$6$$ = $availSpace$$56_cy$$6$$.y + $availSpace$$56_cy$$6$$.$h$ / 2;
    if(D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$61_obj$$inline_1322_r$$inline_1327$$)) {
      $cx$$6_points$$5$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$6_points$$5$$, $availSpace$$56_cy$$6$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$61_obj$$inline_1322_r$$inline_1327$$), $chart$$61_obj$$inline_1322_r$$inline_1327$$.$getRadius$()), $chart$$61_obj$$inline_1322_r$$inline_1327$$ = {type:3}, $chart$$61_obj$$inline_1322_r$$inline_1327$$.$points$ = $cx$$6_points$$5$$, $chart$$61_obj$$inline_1322_r$$inline_1327$$ && $clip_container$$81$$.$_regions$.push($chart$$61_obj$$inline_1322_r$$inline_1327$$)
    }else {
      $chart$$61_obj$$inline_1322_r$$inline_1327$$ = $chart$$61_obj$$inline_1322_r$$inline_1327$$.$getRadius$();
      var $obj$$inline_1328$$ = {type:5};
      $obj$$inline_1328$$.$cx$ = $cx$$6_points$$5$$;
      $obj$$inline_1328$$.$cy$ = $availSpace$$56_cy$$6$$;
      $obj$$inline_1328$$.$r$ = $chart$$61_obj$$inline_1322_r$$inline_1327$$;
      $obj$$inline_1328$$ && $clip_container$$81$$.$_regions$.push($obj$$inline_1328$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clip_container$$81$$, $availSpace$$56_cy$$6$$.x, $availSpace$$56_cy$$6$$.y, $availSpace$$56_cy$$6$$.$w$, $availSpace$$56_cy$$6$$.$h$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$3$$, $clip_container$$81$$);
  return $clipGroup$$3$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$17$$, $theta$$1$$, $availSpace$$57$$) {
  return new D.$DvtPoint$$($availSpace$$57$$.x + $availSpace$$57$$.$w$ / 2 + $r$$17$$ * window.Math.sin($theta$$1$$), $availSpace$$57$$.y + $availSpace$$57$$.$h$ / 2 - $r$$17$$ * window.Math.cos($theta$$1$$))
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 60;
D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ = 1 / 360;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$4$$, $container$$45_selected$$13$$, $availSpace$$20$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$4$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$20$$.x, $availSpace$$20$$.y);
  $container$$45_selected$$13$$.$addChild$($funnelContainer$$);
  $chart$$4$$.$_funnelContainer$ = $funnelContainer$$;
  var $bbox$$1$$;
  if("horizontal" == $chart$$4$$.$getOptions$().orientation) {
    $bbox$$1$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$20$$.$w$, $availSpace$$20$$.$h$)
  }else {
    var $rotationMatrix$$ = new D.$DvtMatrix$$;
    (0,D.$DvtAgent$isRightToLeft$$)($chart$$4$$.$_context$) ? ($rotationMatrix$$.translate($availSpace$$20$$.y - $availSpace$$20$$.$h$ / 2, $availSpace$$20$$.y - $availSpace$$20$$.$w$ / 2), $rotationMatrix$$.rotate(-window.Math.PI / 2), $rotationMatrix$$.translate($availSpace$$20$$.x + $availSpace$$20$$.$w$ / 2, $availSpace$$20$$.x + $availSpace$$20$$.$h$ / 2)) : ($rotationMatrix$$.translate(-$availSpace$$20$$.$h$ / 2, -$availSpace$$20$$.$w$ / 2), $rotationMatrix$$.rotate(window.Math.PI / 2), $rotationMatrix$$.translate($availSpace$$20$$.$w$ / 
    2, $availSpace$$20$$.y + $availSpace$$20$$.$h$ / 2));
    $bbox$$1$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$20$$.$h$, $availSpace$$20$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$4$$, $funnelContainer$$, $bbox$$1$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$4$$, $container$$45_selected$$13$$, $availSpace$$20$$);
  $container$$45_selected$$13$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$4$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$4$$, $container$$45_selected$$13$$)
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$5$$, $container$$46$$, $availSpace$$21$$) {
  for(var $options$$74_totalValue$$ = $chart$$5$$.$getOptions$(), $seriesCount_slice_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$5$$), $gapSize$$ = "on" == $options$$74_totalValue$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ * $availSpace$$21$$.$w$ : D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ * $availSpace$$21$$.$w$, $gapSize$$ = "on" == $options$$74_totalValue$$.styleDefaults.funnelSliceGaps ? window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * 
  $availSpace$$21$$.$w$ / ($seriesCount_slice_targetValue$$ - 1), $gapSize$$) : D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ * $availSpace$$21$$.$w$, $numDrawnSeries$$ = $options$$74_totalValue$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$2$$ = 0;$seriesIndex$$2$$ < $seriesCount_slice_targetValue$$;$seriesIndex$$2$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$5$$, $seriesIndex$$2$$)) {
      var $value$$51$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$5$$, $seriesIndex$$2$$);
      $value$$51$$ == D.$JSCompiler_alias_NULL$$ && ($value$$51$$ = D.$DvtChartDataUtils$$.getValue($chart$$5$$, $seriesIndex$$2$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$51$$ || ($options$$74_totalValue$$ += $value$$51$$)
    }
  }
  if(0 == $options$$74_totalValue$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$2$$ = $seriesCount_slice_targetValue$$ - 1;0 <= $seriesIndex$$2$$;$seriesIndex$$2$$--) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$5$$, $seriesIndex$$2$$) && ($value$$51$$ = D.$DvtChartDataUtils$$.getValue($chart$$5$$, $seriesIndex$$2$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount_slice_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$5$$, $seriesIndex$$2$$), 0 >= $value$$51$$ && $seriesCount_slice_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount_slice_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= $seriesCount_slice_targetValue$$ || 
    ($seriesCount_slice_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount_slice_targetValue$$ / $options$$74_totalValue$$, $seriesCount_slice_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$5$$, $seriesIndex$$2$$, $numDrawnSeries$$, $availSpace$$21$$.$w$, $availSpace$$21$$.$h$, 1 - $cumulativeValue$$, $seriesCount_slice_targetValue$$ / $options$$74_totalValue$$, $value$$51$$ / $seriesCount_slice_targetValue$$, $gapSize$$)) : ($cumulativeValue$$ += $value$$51$$ / $options$$74_totalValue$$, 
    $seriesCount_slice_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$5$$, $seriesIndex$$2$$, $numDrawnSeries$$, $availSpace$$21$$.$w$, $availSpace$$21$$.$h$, 1 - $cumulativeValue$$, $value$$51$$ / $options$$74_totalValue$$, D.$JSCompiler_alias_NULL$$, $gapSize$$)), $numDrawnSeries$$++, $container$$46$$.$addChild$($seriesCount_slice_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount_slice_targetValue$$, $chart$$5$$, $seriesIndex$$2$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$21$$, $container$$52$$, $plotAreaBounds$$1$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$21$$, $container$$52$$, $plotAreaBounds$$1$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$22$$, $container$$53$$, $plotAreaBounds$$2$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$22$$, $container$$53$$, $plotAreaBounds$$2$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$23$$, $container$$54$$, $plotAreaBounds$$3$$, $location$$22$$) {
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$23$$, $container$$54$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$23$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$23$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$23$$, $container$$54$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$23$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$23$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$23$$, $container$$54$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$23$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$23$$))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$24$$, $container$$55$$, $plotAreaBounds$$4$$, $location$$23$$, $axis$$7$$, $objects$$2$$) {
  if($objects$$2$$ && $axis$$7$$) {
    for(var $i$$128$$ = 0;$i$$128$$ < $objects$$2$$.length;$i$$128$$++) {
      var $refObj$$1_tooltip$$7$$ = $objects$$2$$[$i$$128$$];
      if($refObj$$1_tooltip$$7$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$1_tooltip$$7$$) == $location$$23$$) {
        var $shape$$7$$, $type$$70$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$1_tooltip$$7$$);
        "area" == $type$$70$$ ? $shape$$7$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$1_tooltip$$7$$, $chart$$24$$, $plotAreaBounds$$4$$, $axis$$7$$) : "line" == $type$$70$$ && ($shape$$7$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$1_tooltip$$7$$, $chart$$24$$, $plotAreaBounds$$4$$, $axis$$7$$));
        $shape$$7$$ != D.$JSCompiler_alias_NULL$$ && ($refObj$$1_tooltip$$7$$ = D.$DvtChartTooltipUtils$$.$getRefObjTooltip$($refObj$$1_tooltip$$7$$), $chart$$24$$.$getEventManager$().$associate$($shape$$7$$, new D.$DvtSimpleObjPeer$$($refObj$$1_tooltip$$7$$)), $container$$55$$.$addChild$($shape$$7$$), $shape$$7$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($shape$$7$$, "label", $refObj$$1_tooltip$$7$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$3_lowCoords_refObj$$2$$, $chart$$25_outerPoints_radius$$8$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$, $axis$$8_highCoord$$) {
  var $context$$77_items$$3$$ = $chart$$25_outerPoints_radius$$8$$.$_context$, $color$$15_position$$6$$ = $axis$$8_highCoord$$.$getPosition$(), $bHoriz$$3_cx$$3_highCoords$$ = "top" == $color$$15_position$$6$$ || "bottom" == $color$$15_position$$6$$, $bRadial_pLow_pointIndex$$ = "radial" == $color$$15_position$$6$$, $color$$15_position$$6$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$3_lowCoords_refObj$$2$$), $lineType$$1_lowCoord$$ = D.$DvtChartRefObjUtils$$.$getLineType$($cy$$3_lowCoords_refObj$$2$$);
  if($cy$$3_lowCoords_refObj$$2$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$8_highCoord$$ == $chart$$25_outerPoints_radius$$8$$.$yAxis$) {
    $context$$77_items$$3$$ = $cy$$3_lowCoords_refObj$$2$$.items;
    $bHoriz$$3_cx$$3_highCoords$$ = [];
    $cy$$3_lowCoords_refObj$$2$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$25_outerPoints_radius$$8$$.$xAxis$)) {
      for(;$context$$77_items$$3$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$25_outerPoints_radius$$8$$);) {
        $context$$77_items$$3$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($bRadial_pLow_pointIndex$$ = 0;$bRadial_pLow_pointIndex$$ < $context$$77_items$$3$$.length;$bRadial_pLow_pointIndex$$++) {
      var $dataItem$$2_hCoord$$ = $context$$77_items$$3$$[$bRadial_pLow_pointIndex$$];
      if($dataItem$$2_hCoord$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$2_hCoord$$.min == D.$JSCompiler_alias_NULL$$ || $dataItem$$2_hCoord$$.max == D.$JSCompiler_alias_NULL$$) {
        $bHoriz$$3_cx$$3_highCoords$$.push(new D.$DvtChartCoord$$), $cy$$3_lowCoords_refObj$$2$$.push(new D.$DvtChartCoord$$)
      }else {
        var $lCoord$$ = $axis$$8_highCoord$$.$getUnboundedCoordAt$($dataItem$$2_hCoord$$.min), $dataItem$$2_hCoord$$ = $axis$$8_highCoord$$.$getUnboundedCoordAt$($dataItem$$2_hCoord$$.max), $xCoord$$ = $chart$$25_outerPoints_radius$$8$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($context$$77_items$$3$$, $bRadial_pLow_pointIndex$$, $chart$$25_outerPoints_radius$$8$$));
        $bHoriz$$3_cx$$3_highCoords$$.push(new D.$DvtChartCoord$$($xCoord$$, $dataItem$$2_hCoord$$, $dataItem$$2_hCoord$$));
        $cy$$3_lowCoords_refObj$$2$$.push(new D.$DvtChartCoord$$($xCoord$$, $lCoord$$, $lCoord$$))
      }
    }
    $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = new D.$DvtChartLineArea$$($chart$$25_outerPoints_radius$$8$$, D.$JSCompiler_alias_TRUE$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$, D.$JSCompiler_alias_NULL$$, new D.$DvtSolidFill$$($color$$15_position$$6$$), D.$JSCompiler_alias_NULL$$, $lineType$$1_lowCoord$$, $bHoriz$$3_cx$$3_highCoords$$, $lineType$$1_lowCoord$$, $cy$$3_lowCoords_refObj$$2$$)
  }else {
    if($cy$$3_lowCoords_refObj$$2$$.min == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $cy$$3_lowCoords_refObj$$2$$.min) {
      $cy$$3_lowCoords_refObj$$2$$.min = $axis$$8_highCoord$$.$getGlobalMin$()
    }
    if($cy$$3_lowCoords_refObj$$2$$.max == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$3_lowCoords_refObj$$2$$.max) {
      $cy$$3_lowCoords_refObj$$2$$.max = $axis$$8_highCoord$$.$getGlobalMax$()
    }
    $lineType$$1_lowCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$25_outerPoints_radius$$8$$, $axis$$8_highCoord$$, $cy$$3_lowCoords_refObj$$2$$.min);
    $axis$$8_highCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$25_outerPoints_radius$$8$$, $axis$$8_highCoord$$, $cy$$3_lowCoords_refObj$$2$$.max);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$25_outerPoints_radius$$8$$) ? ($bHoriz$$3_cx$$3_highCoords$$ = $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.x + $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$w$ / 2, $cy$$3_lowCoords_refObj$$2$$ = $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.y + $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$h$ / 2, $bRadial_pLow_pointIndex$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$25_outerPoints_radius$$8$$) ? 
    ($cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$25_outerPoints_radius$$8$$), $chart$$25_outerPoints_radius$$8$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$, $axis$$8_highCoord$$, 1), $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$3_cx$$3_highCoords$$, 
    $cy$$3_lowCoords_refObj$$2$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$, $lineType$$1_lowCoord$$, 0), $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtPathUtils$$.$polyline$($chart$$25_outerPoints_radius$$8$$) + D.$DvtPathUtils$$.$polyline$($cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$) + D.$DvtPathUtils$$.closePath()) : $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$3_cx$$3_highCoords$$, 
    $cy$$3_lowCoords_refObj$$2$$ - $axis$$8_highCoord$$) + D.$DvtPathUtils$$.arcTo($axis$$8_highCoord$$, $axis$$8_highCoord$$, window.Math.PI, 1, $bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$ + $axis$$8_highCoord$$) + D.$DvtPathUtils$$.arcTo($axis$$8_highCoord$$, $axis$$8_highCoord$$, window.Math.PI, 1, $bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$ - $axis$$8_highCoord$$) + D.$DvtPathUtils$$.moveTo($bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$ - $lineType$$1_lowCoord$$) + 
    D.$DvtPathUtils$$.arcTo($lineType$$1_lowCoord$$, $lineType$$1_lowCoord$$, window.Math.PI, 0, $bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$ + $lineType$$1_lowCoord$$) + D.$DvtPathUtils$$.arcTo($lineType$$1_lowCoord$$, $lineType$$1_lowCoord$$, window.Math.PI, 0, $bHoriz$$3_cx$$3_highCoords$$, $cy$$3_lowCoords_refObj$$2$$ - $lineType$$1_lowCoord$$) + D.$DvtPathUtils$$.closePath() : ($chart$$25_outerPoints_radius$$8$$ = $chart$$25_outerPoints_radius$$8$$.$getRadius$(), $bRadial_pLow_pointIndex$$ = 
    D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$25_outerPoints_radius$$8$$, $lineType$$1_lowCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$), $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$25_outerPoints_radius$$8$$, $axis$$8_highCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$), $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$3_cx$$3_highCoords$$, 
    $cy$$3_lowCoords_refObj$$2$$) + D.$DvtPathUtils$$.lineTo($bRadial_pLow_pointIndex$$.x, $bRadial_pLow_pointIndex$$.y) + D.$DvtPathUtils$$.arcTo($chart$$25_outerPoints_radius$$8$$, $chart$$25_outerPoints_radius$$8$$, $axis$$8_highCoord$$ - $lineType$$1_lowCoord$$, (0,D.$DvtAgent$isRightToLeft$$)($context$$77_items$$3$$) ? 0 : 1, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.x, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.y) + D.$DvtPathUtils$$.lineTo($cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.x, 
    $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.y) + D.$DvtPathUtils$$.closePath()), $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = new D.$DvtPath$$($context$$77_items$$3$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$)) : $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$ = new D.$DvtPolygon$$($context$$77_items$$3$$, $bHoriz$$3_cx$$3_highCoords$$ ? [$lineType$$1_lowCoord$$, 0, $axis$$8_highCoord$$, 0, $axis$$8_highCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$h$, 
    $lineType$$1_lowCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$h$] : [0, $lineType$$1_lowCoord$$, 0, $axis$$8_highCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$w$, $axis$$8_highCoord$$, $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$w$, $lineType$$1_lowCoord$$]);
    $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$.$setSolidFill$($color$$15_position$$6$$)
  }
  return $cmds$$3_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$8$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, $cartesian_chart$$26_shape$$9$$, $plotAreaBounds$$6$$, $axis$$9_cx$$4$$) {
  var $lineWidth_position$$7_stroke$$10$$ = $axis$$9_cx$$4$$.$getPosition$(), $bHoriz$$4_items$$4$$ = "top" == $lineWidth_position$$7_stroke$$10$$ || "bottom" == $lineWidth_position$$7_stroke$$10$$, $bRadial$$1_coords$$1_points$$3$$ = "radial" == $lineWidth_position$$7_stroke$$10$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth_position$$7_stroke$$10$$, $lineWidth_position$$7_stroke$$10$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $cy$$4_lineType$$2$$ = 
  D.$DvtChartRefObjUtils$$.$getLineType$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $color$$16_context$$78_dataItem$$3_yCoord$$ = D.$DvtChartRefObjUtils$$.$getColor$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $lineWidth_position$$7_stroke$$10$$ = new D.$DvtSolidStroke$$($color$$16_context$$78_dataItem$$3_yCoord$$, 1, $lineWidth_position$$7_stroke$$10$$);
  $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.lineStyle && $lineWidth_position$$7_stroke$$10$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.lineStyle));
  $color$$16_context$$78_dataItem$$3_yCoord$$ = $cartesian_chart$$26_shape$$9$$.$_context$;
  if($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$9_cx$$4$$ == $cartesian_chart$$26_shape$$9$$.$yAxis$) {
    $bHoriz$$4_items$$4$$ = $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.items;
    $bRadial$$1_coords$$1_points$$3$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian_chart$$26_shape$$9$$.$xAxis$)) {
      for(;$bHoriz$$4_items$$4$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$26_shape$$9$$);) {
        $bHoriz$$4_items$$4$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$1_points$$3$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$4_items$$4$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$16_context$$78_dataItem$$3_yCoord$$ = $bHoriz$$4_items$$4$$[$bTangential_pointIndex$$1$$], $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ = D.$JSCompiler_alias_NULL$$, $color$$16_context$$78_dataItem$$3_yCoord$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($color$$16_context$$78_dataItem$$3_yCoord$$) ? $color$$16_context$$78_dataItem$$3_yCoord$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ = $color$$16_context$$78_dataItem$$3_yCoord$$.value) : 
      $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ = $color$$16_context$$78_dataItem$$3_yCoord$$), $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$1_points$$3$$.push(new D.$DvtChartCoord$$) : ($color$$16_context$$78_dataItem$$3_yCoord$$ = $axis$$9_cx$$4$$.$getUnboundedCoordAt$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ = $cartesian_chart$$26_shape$$9$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($bHoriz$$4_items$$4$$, 
      $bTangential_pointIndex$$1$$, $cartesian_chart$$26_shape$$9$$)), $bRadial$$1_coords$$1_points$$3$$.push(new D.$DvtChartCoord$$($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, $color$$16_context$$78_dataItem$$3_yCoord$$, $color$$16_context$$78_dataItem$$3_yCoord$$)))
    }
    $cartesian_chart$$26_shape$$9$$ = new D.$DvtChartLineArea$$($cartesian_chart$$26_shape$$9$$, D.$JSCompiler_alias_FALSE$$, $plotAreaBounds$$6$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $lineWidth_position$$7_stroke$$10$$, $cy$$4_lineType$$2$$, $bRadial$$1_coords$$1_points$$3$$)
  }else {
    if($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.value) {
      $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian_chart$$26_shape$$9$$, $axis$$9_cx$$4$$, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$.value);
      if($lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ == D.$JSCompiler_alias_NULL$$ || window.Infinity == $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$ || -window.Infinity == $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$9_cx$$4$$ = $plotAreaBounds$$6$$.x + $plotAreaBounds$$6$$.$w$ / 2;
      $cy$$4_lineType$$2$$ = $plotAreaBounds$$6$$.y + $plotAreaBounds$$6$$.$h$ / 2;
      $bRadial$$1_coords$$1_points$$3$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian_chart$$26_shape$$9$$) ? ($bRadial$$1_coords$$1_points$$3$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$9_cx$$4$$, $cy$$4_lineType$$2$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$26_shape$$9$$), $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $cartesian_chart$$26_shape$$9$$ = new D.$DvtPolygon$$($color$$16_context$$78_dataItem$$3_yCoord$$, $bRadial$$1_coords$$1_points$$3$$)) : 
      $cartesian_chart$$26_shape$$9$$ = new D.$DvtCircle$$($color$$16_context$$78_dataItem$$3_yCoord$$, $axis$$9_cx$$4$$, $cy$$4_lineType$$2$$, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), $cartesian_chart$$26_shape$$9$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian_chart$$26_shape$$9$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian_chart$$26_shape$$9$$.$getRadius$(), $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, $plotAreaBounds$$6$$), $cartesian_chart$$26_shape$$9$$ = 
      new D.$DvtLine$$($color$$16_context$$78_dataItem$$3_yCoord$$, $axis$$9_cx$$4$$, $cy$$4_lineType$$2$$, $cartesian_chart$$26_shape$$9$$.x, $cartesian_chart$$26_shape$$9$$.y)) : ($cartesian_chart$$26_shape$$9$$ = $bHoriz$$4_items$$4$$ ? new D.$DvtLine$$($color$$16_context$$78_dataItem$$3_yCoord$$, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, 0, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, $plotAreaBounds$$6$$.$h$) : new D.$DvtLine$$($color$$16_context$$78_dataItem$$3_yCoord$$, 0, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$, 
      $plotAreaBounds$$6$$.$w$, $lineCoord$$2_refObj$$3_value$$52_xCoord$$1$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian_chart$$26_shape$$9$$));
      $cartesian_chart$$26_shape$$9$$.$setStroke$($lineWidth_position$$7_stroke$$10$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian_chart$$26_shape$$9$$
};
D.$DvtRefObjRenderer$$.$_getXValue$ = function $$DvtRefObjRenderer$$$$_getXValue$$($dataItem$$4_items$$5$$, $index$$57$$, $chart$$27$$) {
  $dataItem$$4_items$$5$$ = $dataItem$$4_items$$5$$[$index$$57$$];
  return(0,window.isNaN)($dataItem$$4_items$$5$$.x) ? "enabled" == $chart$$27$$.$getOptions$().timeAxisType ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$27$$, $index$$57$$) : $index$$57$$ : $dataItem$$4_items$$5$$.x
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$28_index$$58$$, $axis$$10$$, $value$$53$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$10$$) && ($chart$$28_index$$58$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$28_index$$58$$, $value$$53$$), 0 <= $chart$$28_index$$58$$) ? $axis$$10$$.$getUnboundedCoordAt$($chart$$28_index$$58$$) : !(0,window.isNaN)($value$$53$$) ? $axis$$10$$.$getUnboundedCoordAt$($value$$53$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$60$$, $bHoriz$$) {
  this.Init($context$$60$$, $bHoriz$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$61$$, $bHoriz$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$61$$);
  this.$_bHoriz$ = $bHoriz$$1$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $bHoriz$$1$$ ? (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 2, "dcLine"), this.$_cursorLineRect$.$setTranslateY$(-1)) : (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 2, 0, "dcLine"), this.$_cursorLineRect$.$setTranslateX$(-1));
  this.$_cursorLineRect$.$setSolidFill$("#5a5a5a");
  this.$_cursorLineRect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_cursorLineRect$);
  this.$_marker$ = new D.$DvtContainer$$(this.$_context$, "dotContainer");
  this.$_marker$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_marker$);
  var $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 16, 16);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -8, -8);
  $middleCircle_outerCircle$$.$setSolidFill$("#5a5a5a");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 12, 12);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -6, -6);
  $middleCircle_outerCircle$$.$setSolidFill$("white");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  this.$_markerInnerCircle$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 8, 8);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_markerInnerCircle$, -4, -4);
  this.$_markerInnerCircle$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$(this.$_markerInnerCircle$)
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($plotAreaBounds$$, $dataX_isChrome$$, $cursorHeight_dataY$$, $lineCoord$$, $startX_text$$27_tooltipBounds$$, $dataColor$$) {
  var $bHoriz$$2$$ = this.$isHorizontal$(), $bRtl$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$), $tooltipManager$$ = this.$_context$.$getTooltipManager$("_dvtDataCursor");
  $tooltipManager$$.$showDatatip$($dataX_isChrome$$ + $stagePageCoords$$.x, $cursorHeight_dataY$$ + $stagePageCoords$$.y, $startX_text$$27_tooltipBounds$$, $dataColor$$, D.$JSCompiler_alias_FALSE$$);
  $startX_text$$27_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
  var $tooltipX$$, $tooltipY$$;
  $bHoriz$$2$$ ? ($tooltipX$$ = $bRtl$$1$$ ? $plotAreaBounds$$.x - 0.75 * $startX_text$$27_tooltipBounds$$.$w$ : $plotAreaBounds$$.x + $plotAreaBounds$$.$w$ - $startX_text$$27_tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$ - $startX_text$$27_tooltipBounds$$.$h$ / 2, !$bRtl$$1$$ && 16 > $tooltipX$$ - $dataX_isChrome$$ ? $tooltipX$$ = $dataX_isChrome$$ + 16 : $bRtl$$1$$ && 16 > $dataX_isChrome$$ - ($tooltipX$$ + $startX_text$$27_tooltipBounds$$.$w$) && ($tooltipX$$ = $dataX_isChrome$$ - 16 - $startX_text$$27_tooltipBounds$$.$w$)) : 
  ($tooltipX$$ = $lineCoord$$ - $startX_text$$27_tooltipBounds$$.$w$ / 2, $tooltipY$$ = $plotAreaBounds$$.y - 0.75 * $startX_text$$27_tooltipBounds$$.$h$, 16 > $cursorHeight_dataY$$ - ($tooltipY$$ + $startX_text$$27_tooltipBounds$$.$h$) && ($tooltipY$$ = $cursorHeight_dataY$$ - 16 - $startX_text$$27_tooltipBounds$$.$h$));
  (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
  $startX_text$$27_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
  $tooltipX$$ = $startX_text$$27_tooltipBounds$$.x - $stagePageCoords$$.x;
  $tooltipY$$ = $startX_text$$27_tooltipBounds$$.y - $stagePageCoords$$.y;
  this.$_markerInnerCircle$.$setSolidFill$($dataColor$$);
  $bHoriz$$2$$ ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $plotAreaBounds$$.x, $lineCoord$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $plotAreaBounds$$.x, $cursorHeight_dataY$$ - $lineCoord$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($tooltipX$$ + 1 - $plotAreaBounds$$.x, 0)), $bRtl$$1$$ && ($startX_text$$27_tooltipBounds$$ = $tooltipX$$ + $startX_text$$27_tooltipBounds$$.$w$ + 1 - $plotAreaBounds$$.x, this.$_cursorLineRect$.$setX$($startX_text$$27_tooltipBounds$$), 
  this.$_cursorLineRect$.$setWidth$(window.Math.max($plotAreaBounds$$.$w$ - $startX_text$$27_tooltipBounds$$, 0)))) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $lineCoord$$, $plotAreaBounds$$.y + 1), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $lineCoord$$, $cursorHeight_dataY$$ - $plotAreaBounds$$.y), $dataX_isChrome$$ = (0,D.$DvtAgent$isBrowserChrome$$)(), $cursorHeight_dataY$$ = $plotAreaBounds$$.y + $plotAreaBounds$$.$h$ - $tooltipY$$ - $startX_text$$27_tooltipBounds$$.$h$ + 
  ($dataX_isChrome$$ ? 4 : 0), this.$_cursorLineRect$.$setTranslateY$($tooltipY$$ + $startX_text$$27_tooltipBounds$$.$h$ - ($plotAreaBounds$$.y + ($dataX_isChrome$$ ? 4 : 1))), this.$_cursorLineRect$.$setHeight$(window.Math.max($cursorHeight_dataY$$, 0)));
  (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$_marker$)
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtDCEH$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtDCEH$$, D.$DvtObj$$, "DvtDCEH");
D.$DvtDCEH$$.prototype.$_Init$ = function $$DvtDCEH$$$$$_Init$$($context$$63$$, $dataCursor$$1$$) {
  this.$_context$ = $context$$63$$;
  this.$_isNumericMainAxis$ = this.$_useAllInGroup$ = this.$_horizontal$ = this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_threeDHorizontalOffset$ = 0
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $dataCursor$$inline_1191_pageX$$3_pos$$6$$, $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$, $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$, $blockEventsRect_logicalObj$$4$$) {
  if($closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$) {
    $dataCursor$$inline_1191_pageX$$3_pos$$6$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$, $dataCursor$$inline_1191_pageX$$3_pos$$6$$, $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$);
    $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ = $dataCursor$$inline_1191_pageX$$3_pos$$6$$.x;
    var $dcY$$inline_1195_y$$87$$ = $dataCursor$$inline_1191_pageX$$3_pos$$6$$.y;
    if($blockEventsRect_logicalObj$$4$$ = $JSCompiler_StaticMethods_processMove$self$$.$getActionablePlotRect$($dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$, $dcY$$inline_1195_y$$87$$, $blockEventsRect_logicalObj$$4$$)) {
      $dataCursor$$inline_1191_pageX$$3_pos$$6$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$;
      var $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$;
      var $centerPoint$$inline_1193_horizontal$$inline_9372$$ = $JSCompiler_StaticMethods_processMove$self$$.$_horizontal$;
      $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ = $JSCompiler_StaticMethods_processMove$self$$.$_useAllInGroup$;
      var $closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ = $JSCompiler_StaticMethods_processMove$self$$.$_isNumericMainAxis$, $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ = [];
      if($closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ = $JSCompiler_StaticMethods_processMove$self$$.$findMatches$($dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$, $dcY$$inline_1195_y$$87$$, $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$, $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$, $blockEventsRect_logicalObj$$4$$)) {
        $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ = $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$
      }else {
        $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ = 1E7;
        for(var $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ = [], $diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ = 0;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ < $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$.length;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$++) {
          var $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$ = $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$[$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$], $diffValue$$inline_11265_match$$inline_9383$$ = window.Math.abs((($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.x) + 
          ($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.$w$)) / 
          2 - ($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $dcY$$inline_1195_y$$87$$ : $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$));
          $diffValue$$inline_11265_match$$inline_9383$$ <= $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ && ($diffValue$$inline_11265_match$$inline_9383$$ < $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ && ($closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ = []), $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.push($closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$), 
          $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ = $diffValue$$inline_11265_match$$inline_9383$$)
        }
        $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$ = $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$;
        if(!$closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$) {
          $closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ = 1E6;
          $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ = -1E6;
          $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$ = D.$JSCompiler_alias_NULL$$;
          for($diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ = 0;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ < $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$.length;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$++) {
            $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$ = $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$[$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$], $closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ = window.Math.min($closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$, $centerPoint$$inline_1193_horizontal$$inline_9372$$ ? 
            $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.x), $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ = window.Math.max($closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$, $centerPoint$$inline_1193_horizontal$$inline_9372$$ ? 
            $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$ = 
            $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$.$gidx$
          }
          for($diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ = 0;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ < $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$.length;$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$++) {
            var $diffValue$$inline_11265_match$$inline_9383$$ = $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$[$diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$], $itemGroup$$inline_9384_midPoint$$inline_9385$$ = $diffValue$$inline_11265_match$$inline_9383$$.$gidx$;
            $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ ? $closestFirstDirectionMatch$$inline_9382_closestGroup$$inline_9380_matchObj$$inline_11264$$ == $itemGroup$$inline_9384_midPoint$$inline_9385$$ && $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$.push($diffValue$$inline_11265_match$$inline_9383$$) : ($itemGroup$$inline_9384_midPoint$$inline_9385$$ = (($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? 
            $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.y : $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.x) + ($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.y + $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.$h$ : $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.x + $diffValue$$inline_11265_match$$inline_9383$$.$matchRegion$.$w$)) / 2, $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ >= 
            $itemGroup$$inline_9384_midPoint$$inline_9385$$ && $closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ <= $itemGroup$$inline_9384_midPoint$$inline_9385$$ && $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$.push($diffValue$$inline_11265_match$$inline_9383$$))
          }
        }
        $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ = D.$JSCompiler_alias_NULL$$;
        $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ = 1E8;
        for($closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ = 0;$closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$ < $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$.length;$closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$++) {
          $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$ = $closestFirstDirectionMatches$$inline_9377_immediateMatch$$inline_9376_minDiff$$inline_11261_targetObj$$2$$[$closestLowerBound$$inline_9378_i$$inline_11273_isNumericMainAxis$$inline_9374$$], $diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ = window.Math.abs((($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.x : 
          $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.y) + ($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.x + $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.$w$ : $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.y + 
          $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$.$matchRegion$.$h$)) / 2 - ($centerPoint$$inline_1193_horizontal$$inline_9372$$ ? $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ : $dcY$$inline_1195_y$$87$$)), $diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$ < $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ && ($matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ = 
          $diffValue$$inline_11275_i$$inline_11263_i$$inline_9381$$, $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ = $closestFirstDirectionMatches$$inline_11262_closestHigherBound$$inline_9379_match$$inline_11274$$)
        }
      }
      $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$) : ($centerPoint$$inline_1193_horizontal$$inline_9372$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$.$matchRegion$), "SNAP" == ($dataCursor$$inline_1191_pageX$$3_pos$$6$$.$_behavior$ ? 
      $dataCursor$$inline_1191_pageX$$3_pos$$6$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_1191_pageX$$3_pos$$6$$.$isHorizontal$() ? $dcY$$inline_1195_y$$87$$ = window.Math.min(window.Math.max($centerPoint$$inline_1193_horizontal$$inline_9372$$.y, $blockEventsRect_logicalObj$$4$$.y), $blockEventsRect_logicalObj$$4$$.y + $blockEventsRect_logicalObj$$4$$.$h$) : $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ = window.Math.min(window.Math.max($centerPoint$$inline_1193_horizontal$$inline_9372$$.x, 
      $blockEventsRect_logicalObj$$4$$.x), $blockEventsRect_logicalObj$$4$$.x + $blockEventsRect_logicalObj$$4$$.$w$)), $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$ && ($matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ = $blockEventsRect_logicalObj$$4$$.x + $blockEventsRect_logicalObj$$4$$.$w$ - $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$, $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ > $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ && 
      ($dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ = $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$)), $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ = $JSCompiler_StaticMethods_processMove$self$$.$getTooltipText$($closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$), !$matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ || 
      "" == $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$ ? $dataCursor$$inline_1191_pageX$$3_pos$$6$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_1191_pageX$$3_pos$$6$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$ = $JSCompiler_StaticMethods_processMove$self$$.$getSeriesColor$($closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$.$sidx$, 
      $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$.$gidx$), $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$ = $dataCursor$$inline_1191_pageX$$3_pos$$6$$.$isHorizontal$() ? $dcY$$inline_1195_y$$87$$ : $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$, $dataCursor$$inline_1191_pageX$$3_pos$$6$$.$render$($blockEventsRect_logicalObj$$4$$, $centerPoint$$inline_1193_horizontal$$inline_9372$$.x, $centerPoint$$inline_1193_horizontal$$inline_9372$$.y, 
      $dcX$$inline_1194_lineCoord$$inline_1199_pageY$$3_x$$113$$, $matches$$inline_9375_minDiff$$inline_11272_tooltipText$$inline_1197_xExtent$$inline_1196$$, $closestMatch$$inline_11271_closestMatch$$inline_1192_seriesColor$$inline_1198_useAllInGroup$$inline_9373$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = (0,D.$JSCompiler_returnArg$$)("black");
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = (0,D.$JSCompiler_returnArg$$)("Base class should override");
D.$JSCompiler_prototypeAlias$$.$findMatches$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtChartDCEH$$ = function $$DvtChartDCEH$$$($chart$$1$$) {
  this.$_Init$($chart$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDCEH$$, D.$DvtDCEH$$, "DvtChartDCEH");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_Init$ = function $$JSCompiler_prototypeAlias$$$$_Init$$($chart$$2$$) {
  D.$DvtChartDCEH$$.$superclass$.$_Init$.call(this, $chart$$2$$.$_context$, $chart$$2$$.$DataCursor$);
  this.$_Chart$ = $chart$$2$$;
  this.$_horizontal$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$2$$);
  this.$_useAllInGroup$ = D.$DvtChartTypeUtils$$.$isLineArea$($chart$$2$$);
  this.$_isNumericMainAxis$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$2$$);
  this.$_isStockChart$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isArea$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = function $$JSCompiler_prototypeAlias$$$$getPlotRect$$() {
  return this.$_Chart$.$_plotAreaSpace$
};
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = function $$JSCompiler_prototypeAlias$$$$getActionablePlotRect$$($x$$121$$, $y$$94$$) {
  var $plotRect$$5$$ = this.$getPlotRect$();
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$5$$, $x$$121$$, $y$$94$$) ? $plotRect$$5$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$findMatches$ = function $$JSCompiler_prototypeAlias$$$$findMatches$$($chart$$3_x$$122$$, $stage_y$$95$$, $eventManager$$12_targetObj$$6$$, $matches$$4$$) {
  $chart$$3_x$$122$$ = this.$_Chart$;
  $stage_y$$95$$ = $chart$$3_x$$122$$.$_context$.$_stage$;
  $eventManager$$12_targetObj$$6$$ = $chart$$3_x$$122$$.$getEventManager$();
  if(!$chart$$3_x$$122$$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$120$$ = 0;$i$$120$$ < $chart$$3_x$$122$$.$_currentMarkers$.length;$i$$120$$++) {
    for(var $markers$$3$$ = $chart$$3_x$$122$$.$_currentMarkers$[$i$$120$$], $numMarkers$$ = $markers$$3$$.length, $idx$$7$$ = 0;$idx$$7$$ < $numMarkers$$;$idx$$7$$++) {
      var $item$$2_match$$2$$ = $markers$$3$$[$idx$$7$$], $logicalObject$$1$$ = $eventManager$$12_targetObj$$6$$.$GetLogicalObject$($item$$2_match$$2$$), $dims$$8$$ = $item$$2_match$$2$$.$getDimensionsSelf$ ? $item$$2_match$$2$$.$getDimensionsSelf$($stage_y$$95$$) : $item$$2_match$$2$$.$getDimensions$($stage_y$$95$$), $item$$2_match$$2$$ = {$obj$:$item$$2_match$$2$$, $matchRegion$:$dims$$8$$, $gidx$:$logicalObject$$1$$.$getGroupIndex$(), $sidx$:$logicalObject$$1$$.$getSeriesIndex$(), $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$4$$.push($item$$2_match$$2$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = function $$JSCompiler_prototypeAlias$$$$getSeriesColor$$($seriesIndex$$, $groupIndex$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_Chart$, $seriesIndex$$, $groupIndex$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = function $$JSCompiler_prototypeAlias$$$$getTooltipText$$($closestMatch$$3$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($closestMatch$$3$$.$obj$, this.$_Chart$, $closestMatch$$3$$.$sidx$, $closestMatch$$3$$.$gidx$)
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$newInstance$$ = function $$DvtSparkChart$newInstance$$$($context$$615$$, $callback$$150$$, $callbackObj$$117$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$615$$, $callback$$150$$, $callbackObj$$117$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.newInstance = D.$DvtSparkChart$newInstance$$;
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$16$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$616$$, $callback$$151$$, $callbackObj$$118$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$616$$, $callback$$151$$, $callbackObj$$118$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventHandler$ = new D.$DvtEventManager$$($context$$616$$);
  this.$_eventHandler$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$616$$);
  this.$addChild$(this.$_chart$);
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$616$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$263$$) {
  $options$$263$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$263$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$283$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$283$$);
  this.$_chart$ && this.$_chart$.setId($id$$283$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$264_tooltip$$51$$, $width$$153$$, $height$$128$$) {
  this.$SetOptions$($options$$264_tooltip$$51$$);
  !(0,window.isNaN)($width$$153$$) && !(0,window.isNaN)($height$$128$$) && (this.$Width$ = $width$$153$$, this.$Height$ = $height$$128$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$264_tooltip$$51$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$264_tooltip$$51$$ && this.$_eventHandler$.$associate$(this.$_tooltipMask$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$264_tooltip$$51$$, this.$Options$.color));
  this.getParent() == this.$_context$.$_stage$ ? (this.$_context$.$setAriaRole$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$_context$, $options$$264_tooltip$$51$$)) : (this.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", $options$$264_tooltip$$51$$))
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtSparkChart$$.prototype.$getAutomation$ = function $$DvtSparkChart$$$$$getAutomation$$() {
  return new D.$DvtSparkChartAutomation$$(this)
};
D.$DvtSparkChart$$.prototype.getAutomation = D.$DvtSparkChart$$.prototype.$getAutomation$;
D.$DvtSparkChartAutomation$$ = function $$DvtSparkChartAutomation$$$($dvtComponent$$11$$) {
  this.$_sparkChart$ = $dvtComponent$$11$$;
  this.$_options$ = this.$_sparkChart$.$__getOptions$();
  this.$_seriesIndex$ = "floatingBar" == this.$_options$.type ? 1 : 0
};
(0,D.$goog$exportSymbol$$)("DvtSparkChartAutomation", D.$DvtSparkChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartAutomation$$, D.$DvtAutomation$$, "DvtSparkChartAutomation");
D.$DvtSparkChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtSparkChartAutomation$$$$$GetSubIdForDomElement$$($displayable$$63_itemIndex$$4_logicalObj$$16$$) {
  $displayable$$63_itemIndex$$4_logicalObj$$16$$ = this.$_sparkChart$.$_chart$.$getEventManager$().$GetLogicalObject$($displayable$$63_itemIndex$$4_logicalObj$$16$$);
  return $displayable$$63_itemIndex$$4_logicalObj$$16$$ instanceof D.$DvtChartObjPeer$$ && ($displayable$$63_itemIndex$$4_logicalObj$$16$$ = $displayable$$63_itemIndex$$4_logicalObj$$16$$.$getGroupIndex$(), 0 <= $displayable$$63_itemIndex$$4_logicalObj$$16$$) ? "dataItem[" + $displayable$$63_itemIndex$$4_logicalObj$$16$$ + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtSparkChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$17_subId$$25$$) {
  var $openParen$$5$$ = $logicalObj$$17_subId$$25$$.indexOf("["), $closeParen$$5$$ = $logicalObj$$17_subId$$25$$.indexOf("]");
  return 0 < $openParen$$5$$ && 0 < $closeParen$$5$$ && ($logicalObj$$17_subId$$25$$ = this.$_getChartObjPeer$(this.$_seriesIndex$, $logicalObj$$17_subId$$25$$.substring($openParen$$5$$ + 1, $closeParen$$5$$))) ? $logicalObj$$17_subId$$25$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.getDomElementForSubId = D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtSparkChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtSparkChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$6$$, $secondIndex$$3$$) {
  for(var $peers$$8$$ = this.$_sparkChart$.$_chart$.$getObjects$(), $i$$554$$ = 0;$i$$554$$ < $peers$$8$$.length;$i$$554$$++) {
    var $seriesIndex$$87$$ = $peers$$8$$[$i$$554$$].$getSeriesIndex$(), $itemIndex$$6$$ = $peers$$8$$[$i$$554$$].$getGroupIndex$();
    if($seriesIndex$$87$$ == $firstIndex$$6$$ && $itemIndex$$6$$ == $secondIndex$$3$$) {
      return $peers$$8$$[$i$$554$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($itemIndex$$7$$) {
  var $dataItem$$32$$ = this.$_options$.items[$itemIndex$$7$$];
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$7$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$7$$), date:$dataItem$$32$$.date ? $dataItem$$32$$.date : D.$JSCompiler_alias_NULL$$, floatValue:$dataItem$$32$$.floatValue ? $dataItem$$32$$.floatValue : D.$JSCompiler_alias_NULL$$, value:D.$DvtChartDataUtils$$.getValue(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, 
  $itemIndex$$7$$)}
};
D.$DvtSparkChartAutomation$$.prototype.getDataItem = D.$DvtSparkChartAutomation$$.prototype.$getDataItem$;
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, color:"#666699", firstColor:D.$JSCompiler_alias_NULL$$, lastColor:D.$JSCompiler_alias_NULL$$, highColor:D.$JSCompiler_alias_NULL$$, lowColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$22_spark$$, $width$$115$$, $height$$95$$) {
  var $chart$$255$$ = $items$$22_spark$$.$_chart$, $chartOptions$$1$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$22_spark$$), $markerGap$$1_options$$225$$ = $items$$22_spark$$.$__getOptions$();
  if("area" == $markerGap$$1_options$$225$$.type || "line" == $markerGap$$1_options$$225$$.type || "lineWithArea" == $markerGap$$1_options$$225$$.type) {
    $items$$22_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$22_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap$$1_options$$225$$.firstColor || $markerGap$$1_options$$225$$.lastColor || $markerGap$$1_options$$225$$.highColor || $markerGap$$1_options$$225$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$552$$ = 0;$i$$552$$ < $items$$22_spark$$.length;$i$$552$$++) {
        if($items$$22_spark$$[$i$$552$$] && "on" == $items$$22_spark$$[$i$$552$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items$$22_spark$$.length || "none" == $markerGap$$1_options$$225$$.lineType) {
      $markerGap$$1_options$$225$$ = $markerGap$$1_options$$225$$.markerSize / 2, $width$$115$$ -= 2 * $markerGap$$1_options$$225$$, $height$$95$$ -= 2 * $markerGap$$1_options$$225$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$255$$, $markerGap$$1_options$$225$$, $markerGap$$1_options$$225$$)
    }
  }
  $chart$$255$$.$render$($chartOptions$$1$$, $width$$115$$, $height$$95$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$226_spark$$1$$) {
  return($options$$226_spark$$1$$ = $options$$226_spark$$1$$.$__getOptions$()) && $options$$226_spark$$1$$.items ? $options$$226_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$23_spark$$2$$) {
  var $options$$227$$ = $items$$23_spark$$2$$.$__getOptions$(), $chartOptions$$2$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]}, $bFloatingBar$$ = "floatingBar" == $options$$227$$.type, $barSpacing_chartItems_zeroBaseline$$2$$ = [], $axisGap$$1_floatItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$ = -window.Infinity, $lowValue$$ = window.Infinity;
  $items$$23_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$23_spark$$2$$);
  for(var $i$$553$$ = 0;$i$$553$$ < $items$$23_spark$$2$$.length;$i$$553$$++) {
    var $item$$38_topValue$$ = $items$$23_spark$$2$$[$i$$553$$], $baseValue_chartItem$$ = {}, $floatValue$$1$$ = 0;
    $item$$38_topValue$$ instanceof window.Object ? ($baseValue_chartItem$$.y = $item$$38_topValue$$.value, $item$$38_topValue$$.date && ($chartOptions$$2$$.timeAxisType = "enabled", $chartOptions$$2$$.groups.push($item$$38_topValue$$.date)), "on" == $item$$38_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item$$38_topValue$$.color && ($baseValue_chartItem$$.color = $item$$38_topValue$$.color), $item$$38_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = 
    $item$$38_topValue$$.borderColor), $item$$38_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item$$38_topValue$$.markerShape), $item$$38_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item$$38_topValue$$.markerSize), $bFloatingBar$$ && ($floatValue$$1$$ = $item$$38_topValue$$.floatValue, (0,window.isNaN)($floatValue$$1$$) && ($floatValue$$1$$ = 0), $axisGap$$1_floatItems$$.push($floatValue$$1$$))) : ($baseValue_chartItem$$.y = $item$$38_topValue$$, $bFloatingBar$$ && 
    $axisGap$$1_floatItems$$.push(0));
    $barSpacing_chartItems_zeroBaseline$$2$$.push($baseValue_chartItem$$);
    $item$$38_topValue$$ = $bFloatingBar$$ ? window.Math.max($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $highValue$$ < $item$$38_topValue$$ && ($highValue$$ = $item$$38_topValue$$, $highIndex$$ = $i$$553$$);
    $baseValue_chartItem$$ = $bFloatingBar$$ ? window.Math.min($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $lowValue$$ > $baseValue_chartItem$$ && ($lowValue$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$553$$)
  }
  $options$$227$$.highColor && 0 <= $highIndex$$ && ($barSpacing_chartItems_zeroBaseline$$2$$[$highIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$2$$[$highIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$2$$[$highIndex$$].color = $options$$227$$.highColor));
  $options$$227$$.lowColor && 0 <= $lowIndex$$ && ($barSpacing_chartItems_zeroBaseline$$2$$[$lowIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$2$$[$lowIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$2$$[$lowIndex$$].color = $options$$227$$.lowColor));
  $options$$227$$.firstColor && 0 < $barSpacing_chartItems_zeroBaseline$$2$$.length && ($barSpacing_chartItems_zeroBaseline$$2$$[0].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$2$$[0].color || ($barSpacing_chartItems_zeroBaseline$$2$$[0].color = $options$$227$$.firstColor));
  $options$$227$$.lastColor && 0 < $barSpacing_chartItems_zeroBaseline$$2$$.length && ($barSpacing_chartItems_zeroBaseline$$2$$[$barSpacing_chartItems_zeroBaseline$$2$$.length - 1].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$2$$[$barSpacing_chartItems_zeroBaseline$$2$$.length - 1].color || ($barSpacing_chartItems_zeroBaseline$$2$$[$barSpacing_chartItems_zeroBaseline$$2$$.length - 1].color = $options$$227$$.lastColor));
  $chartOptions$$2$$.series = [{items:$barSpacing_chartItems_zeroBaseline$$2$$, areaColor:$options$$227$$.areaColor}];
  $bFloatingBar$$ && $chartOptions$$2$$.series.splice(0, 0, {items:$axisGap$$1_floatItems$$, color:"rgba(0, 0, 0, 0)"});
  $options$$227$$.referenceObjects && ($chartOptions$$2$$.yAxis.referenceObjects = $options$$227$$.referenceObjects);
  $chartOptions$$2$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $barSpacing_chartItems_zeroBaseline$$2$$ = $options$$227$$.barSpacing;
  "auto" == $barSpacing_chartItems_zeroBaseline$$2$$ && ($barSpacing_chartItems_zeroBaseline$$2$$ = 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? "subpixel" : "pixel");
  $chartOptions$$2$$.__sparkBarSpacing = $barSpacing_chartItems_zeroBaseline$$2$$;
  $chartOptions$$2$$.type = $options$$227$$.type;
  $chartOptions$$2$$.animationOnDataChange = $options$$227$$.animationOnDataChange;
  $chartOptions$$2$$.animationOnDisplay = $options$$227$$.animationOnDisplay;
  $chartOptions$$2$$.emptyText = $options$$227$$.emptyText;
  $chartOptions$$2$$.styleDefaults.colors = [$options$$227$$.color];
  $chartOptions$$2$$.styleDefaults.animationDuration = $options$$227$$.animationDuration;
  $chartOptions$$2$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$2$$.styleDefaults.lineWidth = $options$$227$$.lineWidth;
  $chartOptions$$2$$.styleDefaults.lineStyle = $options$$227$$.lineStyle;
  $chartOptions$$2$$.styleDefaults.lineType = $options$$227$$.lineType;
  $chartOptions$$2$$.styleDefaults.markerSize = $options$$227$$.markerSize;
  $chartOptions$$2$$.styleDefaults.markerShape = $options$$227$$.markerShape;
  $chartOptions$$2$$.styleDefaults.barGapRatio = $options$$227$$.barGapRatio;
  $chartOptions$$2$$.styleDefaults.seriesTooltipType = "none";
  $chartOptions$$2$$.styleDefaults.groupTooltipType = "none";
  $chartOptions$$2$$.styleDefaults.valueTooltipType = "none";
  $chartOptions$$2$$.xAxis.rendered = "off";
  $chartOptions$$2$$.yAxis.rendered = "off";
  $barSpacing_chartItems_zeroBaseline$$2$$ = "zero" == $options$$227$$.baselineScaling;
  $axisGap$$1_floatItems$$ = 0.1 * ($highValue$$ - $lowValue$$);
  $chartOptions$$2$$.yAxis.min = $barSpacing_chartItems_zeroBaseline$$2$$ && 0 <= $lowValue$$ ? 0 : $lowValue$$ - $axisGap$$1_floatItems$$;
  $chartOptions$$2$$.yAxis.max = $barSpacing_chartItems_zeroBaseline$$2$$ && 0 >= $highValue$$ ? 0 : $highValue$$ + $axisGap$$1_floatItems$$;
  $bFloatingBar$$ && ($chartOptions$$2$$.type = "bar", $chartOptions$$2$$.stack = "on");
  $chartOptions$$2$$.styleDefaults.seriesEffect = "none" == $options$$227$$.visualEffects || !("area" == $options$$227$$.type || "lineWithArea" == $options$$227$$.type) ? "color" : "gradient";
  $chartOptions$$2$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
  $chartOptions$$2$$.legend = {rendered:"off"};
  $chartOptions$$2$$.title = $chartOptions$$2$$.title ? $chartOptions$$2$$.title : {};
  $chartOptions$$2$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$2$$
};
});