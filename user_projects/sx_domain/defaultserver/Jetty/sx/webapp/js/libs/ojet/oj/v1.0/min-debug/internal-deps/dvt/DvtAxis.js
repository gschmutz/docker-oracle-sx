"use strict";
define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$345$$, $callback$$112$$, $callbackObj$$85$$) {
  var $axis$$27$$ = new D.$DvtAxis$$;
  $axis$$27$$.Init($context$$345$$, $callback$$112$$, $callbackObj$$85$$);
  return $axis$$27$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$8$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$346$$, $callback$$113$$, $callbackObj$$86$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$346$$, $callback$$113$$, $callbackObj$$86$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$242$$) {
  $options$$242$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$242$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($dims$$43_options$$243$$, $maxWidth$$21$$, $maxHeight$$15$$) {
  this.$SetOptions$($dims$$43_options$$243$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  this.$render$(D.$JSCompiler_alias_NULL$$, $maxWidth$$21$$, $maxHeight$$15$$);
  $dims$$43_options$$243$$ = this.$getDimensions$();
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  var $extraWidth_position$$31$$ = this.$__getOptions$().position;
  if("top" == $extraWidth_position$$31$$ || "bottom" == $extraWidth_position$$31$$) {
    return $dims$$43_options$$243$$.$h$ <= $maxHeight$$15$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$), new D.$DvtDimension$$($maxWidth$$21$$, window.Math.min($dims$$43_options$$243$$.$h$, $maxHeight$$15$$))
  }
  $extraWidth_position$$31$$ = 0 < $dims$$43_options$$243$$.$w$ ? window.Math.max(1, 0.1 * $dims$$43_options$$243$$.$w$) : 0;
  $dims$$43_options$$243$$.$w$ + $extraWidth_position$$31$$ <= $maxWidth$$21$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtDimension$$(window.Math.min($dims$$43_options$$243$$.$w$ + $extraWidth_position$$31$$, $maxWidth$$21$$), $maxHeight$$15$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$244$$, $width$$125$$, $height$$105$$, $x$$206$$, $y$$176$$) {
  this.$SetOptions$($options$$244$$);
  this.$Width$ = $width$$125$$;
  this.$Height$ = $height$$105$$;
  this.$removeChildren$();
  $x$$206$$ || ($x$$206$$ = 0);
  $y$$176$$ || ($y$$176$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$206$$, $y$$176$$, $width$$125$$, $height$$105$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$432$$, $source$$18$$) {
  this === $source$$18$$ && this.$__dispatchEvent$($event$$432$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventHandler$ && (this.$_eventHandler$.$removeListeners$(this), this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
D.$DvtAxisConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtAxisConstants", D.$DvtAxisConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.TICK_LABEL = D.$DvtAxisConstants$$.$TICK_LABEL$;
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAxisConstants$$.TITLE = D.$DvtAxisConstants$$.$TITLE$;
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_set$$)("$_bundle$");
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$4$$) {
  this.$_axis$ = $dvtComponent$$4$$;
  this.$_options$ = this.$_axis$.$__getOptions$();
  this.$_axisInfo$ = this.$_axis$.$Info$
};
(0,D.$goog$exportSymbol$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$34_group$$26_logicalObj$$11$$) {
  if(($displayable$$34_group$$26_logicalObj$$11$$ = this.$_axis$.$__getEventManager$().$GetLogicalObject$($displayable$$34_group$$26_logicalObj$$11$$)) && $displayable$$34_group$$26_logicalObj$$11$$ instanceof D.$DvtSimpleObjPeer$$ && this.$_options$.groups) {
    $displayable$$34_group$$26_logicalObj$$11$$ = $displayable$$34_group$$26_logicalObj$$11$$.$getParams$().id;
    for(var $g$$5$$ = 0;$g$$5$$ < this.$_options$.groups.length;$g$$5$$++) {
      if(this.$_options$.groups[$g$$5$$] == $displayable$$34_group$$26_logicalObj$$11$$) {
        return"item[" + $g$$5$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($groupIndex$$51_subId$$10$$) {
  if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
    var $openParen$$3$$ = $groupIndex$$51_subId$$10$$.indexOf("["), $closeParen$$3$$ = $groupIndex$$51_subId$$10$$.indexOf("]");
    if(0 < $openParen$$3$$ && 0 < $closeParen$$3$$) {
      return $groupIndex$$51_subId$$10$$ = $groupIndex$$51_subId$$10$$.substring($openParen$$3$$ + 1, $closeParen$$3$$), this.$_axisInfo$.$getLabels$(this.$_axis$.$_context$)[$groupIndex$$51_subId$$10$$].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{gapWidthRatio:1, gapHeightRatio:1, titleGap:4}, _useBaselineColor:D.$JSCompiler_alias_FALSE$$, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$25$$) {
  this.Init($axis$$25$$.$_context$, $axis$$25$$.$processEvent$, $axis$$25$$);
  this.$_axis$ = $axis$$25$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$92$$, $logicalObj$$12$$) {
  $logicalObj$$12$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$12$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$92$$, $logicalObj$$12$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ = 5;
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$19$$, $availSpace$$68$$) {
  var $options$$147$$ = $axis$$19$$.$__getOptions$(), $axisInfo$$1$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$19$$.$_context$, $options$$147$$, $availSpace$$68$$);
  $axis$$19$$.$Info$ = $axisInfo$$1$$;
  "off" == $options$$147$$.rendered || (0 >= $availSpace$$68$$.$w$ || 0 >= $availSpace$$68$$.$h$) || ($axis$$19$$.$__setBounds$($availSpace$$68$$.clone()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$19$$, $axisInfo$$1$$, $availSpace$$68$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$19$$, $axisInfo$$1$$, $availSpace$$68$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$20_isRTL$$8$$, $axisInfo$$2_position$$17$$, $availSpace$$69$$) {
  var $gap$$14_options$$148$$ = $axis$$20_isRTL$$8$$.$__getOptions$();
  if($gap$$14_options$$148$$.title && ($axisInfo$$2_position$$17$$ = $gap$$14_options$$148$$.position, !("radial" == $axisInfo$$2_position$$17$$ || "tangential" == $axisInfo$$2_position$$17$$))) {
    $gap$$14_options$$148$$.isLayout && "bottom" == $axisInfo$$2_position$$17$$ && ($axisInfo$$2_position$$17$$ = "top");
    var $title$$10$$;
    "top" == $axisInfo$$2_position$$17$$ || "bottom" == $axisInfo$$2_position$$17$$ ? ($title$$10$$ = D.$DvtAxisRenderer$$.$_createText$($axis$$20_isRTL$$8$$.$__getEventManager$(), $axis$$20_isRTL$$8$$, $gap$$14_options$$148$$.title, $gap$$14_options$$148$$.titleStyle, $availSpace$$69$$.$w$, $availSpace$$69$$.$h$), $gap$$14_options$$148$$ = window.Math.ceil($gap$$14_options$$148$$.layout.titleGap * $gap$$14_options$$148$$.layout.gapHeightRatio)) : ($title$$10$$ = D.$DvtAxisRenderer$$.$_createText$($axis$$20_isRTL$$8$$.$__getEventManager$(), 
    $axis$$20_isRTL$$8$$, $gap$$14_options$$148$$.title, $gap$$14_options$$148$$.titleStyle, $availSpace$$69$$.$h$, $availSpace$$69$$.$w$), $gap$$14_options$$148$$ = window.Math.ceil($gap$$14_options$$148$$.layout.titleGap * $gap$$14_options$$148$$.layout.gapWidthRatio));
    if($title$$10$$) {
      $axis$$20_isRTL$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$20_isRTL$$8$$.$_context$);
      var $titleDims$$1$$ = $title$$10$$.$measureDimensions$();
      "top" == $axisInfo$$2_position$$17$$ ? ($title$$10$$.$setX$($availSpace$$69$$.x + $availSpace$$69$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $title$$10$$.$setY$($availSpace$$69$$.y), $availSpace$$69$$.y += $titleDims$$1$$.$h$ + $gap$$14_options$$148$$, $availSpace$$69$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$14_options$$148$$) : "bottom" == $axisInfo$$2_position$$17$$ ? ($title$$10$$.$setX$($availSpace$$69$$.x + $availSpace$$69$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $title$$10$$.$setY$($availSpace$$69$$.y + 
      $availSpace$$69$$.$h$ - $titleDims$$1$$.$h$), $availSpace$$69$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$14_options$$148$$) : "left" == $axisInfo$$2_position$$17$$ ? ($title$$10$$.$alignCenter$(), $title$$10$$.$alignMiddle$(), $title$$10$$.$setRotation$($axis$$20_isRTL$$8$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($title$$10$$, $availSpace$$69$$.x + $titleDims$$1$$.$h$ / 2, $availSpace$$69$$.y + $availSpace$$69$$.$h$ / 2), $availSpace$$69$$.x += 
      $titleDims$$1$$.$h$ + $gap$$14_options$$148$$, $availSpace$$69$$.$w$ -= $titleDims$$1$$.$h$ + $gap$$14_options$$148$$) : "right" == $axisInfo$$2_position$$17$$ && ($title$$10$$.$alignCenter$(), $title$$10$$.$alignMiddle$(), $title$$10$$.$setRotation$($axis$$20_isRTL$$8$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($title$$10$$, $availSpace$$69$$.x + $availSpace$$69$$.$w$ - $titleDims$$1$$.$h$ / 2, $availSpace$$69$$.y + $availSpace$$69$$.$h$ / 
      2), $availSpace$$69$$.$w$ -= $titleDims$$1$$.$h$ + $gap$$14_options$$148$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$21$$, $axisInfo$$3$$, $availSpace$$70$$) {
  var $options$$149_position$$18$$ = $axis$$21$$.$__getOptions$();
  "on" == $options$$149_position$$18$$.tickLabel.rendered && ($options$$149_position$$18$$ = $options$$149_position$$18$$.position, "top" == $options$$149_position$$18$$ || "bottom" == $options$$149_position$$18$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$21$$, $axisInfo$$3$$, $availSpace$$70$$) : "tangential" == $options$$149_position$$18$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$21$$, $axisInfo$$3$$, $availSpace$$70$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$21$$, 
  $axisInfo$$3$$, $availSpace$$70$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$22$$, $axisInfo$$4_lv2Labels$$, $availSpace$$71$$) {
  for(var $labels$$14$$ = $axisInfo$$4_lv2Labels$$.$getLabels$($axis$$22$$.$_context$), $isLayout_offset$$20$$ = $axis$$22$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$22$$.$_context$), $i$$223$$ = 0;$i$$223$$ < $labels$$14$$.length;$i$$223$$++) {
    var $label$$41$$ = $labels$$14$$[$i$$223$$];
    if($label$$41$$ != D.$JSCompiler_alias_NULL$$) {
      if($axisInfo$$4_lv2Labels$$.$isLabelRotated$()) {
        !$isLayout_offset$$20$$ && $axis$$22$$.$_labelTruncationNeeded$ && ($label$$41$$ = D.$DvtTextUtils$$.$fitText$($label$$41$$, $availSpace$$71$$.$h$, $availSpace$$71$$.$w$, $axis$$22$$) ? $label$$41$$ : D.$JSCompiler_alias_NULL$$);
        if(!$label$$41$$) {
          continue
        }
        $isRTL$$9$$ ? $label$$41$$.$alignLeft$() : $label$$41$$.$alignRight$();
        $label$$41$$.$setTranslateY$($availSpace$$71$$.y)
      }else {
        if(D.$DvtTextUtils$$.$guessTextDimensions$($label$$41$$).$h$ - 1 > $availSpace$$71$$.$h$) {
          continue
        }
        $label$$41$$.$alignTop$();
        $label$$41$$.$setY$($availSpace$$71$$.y)
      }
      $axis$$22$$.$__getEventManager$().$associate$($label$$41$$, new D.$DvtSimpleObjPeer$$($label$$41$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$41$$.$getTextString$()}));
      $axis$$22$$.$addChild$($label$$41$$);
      $maxLv1Height$$ = window.Math.max($maxLv1Height$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$41$$).$h$)
    }
  }
  $availSpace$$71$$.y += $maxLv1Height$$;
  $availSpace$$71$$.$h$ -= $maxLv1Height$$;
  $axisInfo$$4_lv2Labels$$ = $axisInfo$$4_lv2Labels$$.$getLabels$($axis$$22$$.$_context$, 1);
  $isLayout_offset$$20$$ = 0;
  if($axisInfo$$4_lv2Labels$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$223$$ = 0;$i$$223$$ < $axisInfo$$4_lv2Labels$$.length;$i$$223$$++) {
      $label$$41$$ = $axisInfo$$4_lv2Labels$$[$i$$223$$], $label$$41$$ != D.$JSCompiler_alias_NULL$$ && !(D.$DvtTextUtils$$.$guessTextDimensions$($label$$41$$).$h$ - 1 > $availSpace$$71$$.$h$) && ($axis$$22$$.$__getEventManager$().$associate$($label$$41$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$41$$.$getTextString$()})), $labels$$14$$[$i$$223$$] != D.$JSCompiler_alias_NULL$$ && 
      ($isLayout_offset$$20$$ = $labels$$14$$[$i$$223$$].$measureDimensions$().$w$ / 2), $isRTL$$9$$ ? $label$$41$$.$setX$($label$$41$$.$getX$() + $isLayout_offset$$20$$) : $label$$41$$.$setX$($label$$41$$.$getX$() - $isLayout_offset$$20$$), $label$$41$$.$alignTop$(), $label$$41$$.$setY$($availSpace$$71$$.y), $axis$$22$$.$addChild$($label$$41$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$23$$, $axisInfo$$5$$, $availSpace$$72$$) {
  var $i$$224_isRTL$$10_options$$150$$ = $axis$$23$$.$__getOptions$(), $isLayout$$1$$ = $i$$224_isRTL$$10_options$$150$$.isLayout, $alwaysAlignRight_formatLabelVert$$ = $i$$224_isRTL$$10_options$$150$$._alwaysAlignRight, $position$$19$$ = $i$$224_isRTL$$10_options$$150$$.position, $i$$224_isRTL$$10_options$$150$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$23$$.$_context$), $isAlignLeft$$ = "radial" == $position$$19$$ && $i$$224_isRTL$$10_options$$150$$ || $isLayout$$1$$ && "left" == $position$$19$$ || 
  !$alwaysAlignRight_formatLabelVert$$ && !$isLayout$$1$$ && "right" == $position$$19$$, $labelX$$4$$;
  "radial" == $position$$19$$ ? ($labelX$$4$$ = $availSpace$$72$$.x + $availSpace$$72$$.$w$ / 2, $labelX$$4$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($i$$224_isRTL$$10_options$$150$$ ? 1 : -1)) : $labelX$$4$$ = $isAlignLeft$$ ? $availSpace$$72$$.x : $availSpace$$72$$.x + $availSpace$$72$$.$w$;
  for(var $alwaysAlignRight_formatLabelVert$$ = function $$alwaysAlignRight_formatLabelVert$$$($i$$224_isRTL$$10_options$$150$$) {
    !$isLayout$$1$$ && $axis$$23$$.$_labelTruncationNeeded$ && ($i$$224_isRTL$$10_options$$150$$ = D.$DvtTextUtils$$.$fitText$($i$$224_isRTL$$10_options$$150$$, $availSpace$$72$$.$w$, $availSpace$$72$$.$h$, $axis$$23$$) ? $i$$224_isRTL$$10_options$$150$$ : D.$JSCompiler_alias_NULL$$);
    if($i$$224_isRTL$$10_options$$150$$) {
      $axis$$23$$.$__getEventManager$().$associate$($i$$224_isRTL$$10_options$$150$$, new D.$DvtSimpleObjPeer$$($i$$224_isRTL$$10_options$$150$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$i$$224_isRTL$$10_options$$150$$.$getTextString$()}));
      $i$$224_isRTL$$10_options$$150$$.$setX$($labelX$$4$$);
      $isAlignLeft$$ ? $i$$224_isRTL$$10_options$$150$$.$alignLeft$() : $i$$224_isRTL$$10_options$$150$$.$alignRight$();
      if("radial" == $position$$19$$) {
        var $alwaysAlignRight_formatLabelVert$$ = $i$$224_isRTL$$10_options$$150$$.$getY$();
        $i$$224_isRTL$$10_options$$150$$.$setY$($availSpace$$72$$.y + $availSpace$$72$$.$h$ / 2 - $alwaysAlignRight_formatLabelVert$$);
        var $labels$$15_lv2Labels$$1$$ = $i$$224_isRTL$$10_options$$150$$.$getDimensions$(), $label$$42$$ = 0.15 * $labels$$15_lv2Labels$$1$$.$h$, $alwaysAlignRight_formatLabelVert$$ = $alwaysAlignRight_formatLabelVert$$ + $labels$$15_lv2Labels$$1$$.$h$ / 2 > $axisInfo$$5$$.$getEndCoord$() && "circle" == $axis$$23$$.$__getOptions$().polarGridShape ? 1 : 0.3, $labels$$15_lv2Labels$$1$$ = D.$DvtPathUtils$$.$roundedRectangle$($labels$$15_lv2Labels$$1$$.x - $label$$42$$, $labels$$15_lv2Labels$$1$$.y, 
        $labels$$15_lv2Labels$$1$$.$w$ + 2 * $label$$42$$, $labels$$15_lv2Labels$$1$$.$h$, 2, 2, 2, 2), $labels$$15_lv2Labels$$1$$ = new D.$DvtPath$$($axis$$23$$.$_context$, $labels$$15_lv2Labels$$1$$);
        $labels$$15_lv2Labels$$1$$.$setSolidFill$("#FFFFFF", $alwaysAlignRight_formatLabelVert$$);
        $axis$$23$$.$addChild$($labels$$15_lv2Labels$$1$$)
      }
      $axis$$23$$.$addChild$($i$$224_isRTL$$10_options$$150$$)
    }
  }, $labels$$15_lv2Labels$$1$$ = $axisInfo$$5$$.$getLabels$($axis$$23$$.$_context$), $i$$224_isRTL$$10_options$$150$$ = 0;$i$$224_isRTL$$10_options$$150$$ < $labels$$15_lv2Labels$$1$$.length;$i$$224_isRTL$$10_options$$150$$++) {
    var $label$$42$$ = $labels$$15_lv2Labels$$1$$[$i$$224_isRTL$$10_options$$150$$];
    $label$$42$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$42$$)
  }
  $labels$$15_lv2Labels$$1$$ = $axisInfo$$5$$.$getLabels$($axis$$23$$.$_context$, 1);
  if($labels$$15_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$224_isRTL$$10_options$$150$$ = 0;$i$$224_isRTL$$10_options$$150$$ < $labels$$15_lv2Labels$$1$$.length;$i$$224_isRTL$$10_options$$150$$++) {
      $label$$42$$ = $labels$$15_lv2Labels$$1$$[$i$$224_isRTL$$10_options$$150$$], $label$$42$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$42$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$24$$, $axisInfo$$6_labels$$16$$, $availSpace$$73$$) {
  $axisInfo$$6_labels$$16$$ = $axisInfo$$6_labels$$16$$.$getLabels$($axis$$24$$.$_context$);
  for(var $i$$225$$ = 0;$i$$225$$ < $axisInfo$$6_labels$$16$$.length;$i$$225$$++) {
    var $label$$44$$ = $axisInfo$$6_labels$$16$$[$i$$225$$];
    if($label$$44$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$44$$.$getTextString$(), $maxWidth$$6$$ = $availSpace$$73$$.$w$ / 2 - window.Math.abs($label$$44$$.$getX$()), $maxHeight$$5$$ = $availSpace$$73$$.$h$ / 2 - window.Math.abs($label$$44$$.$getY$());
      D.$DvtTextUtils$$.$fitText$($label$$44$$, $maxWidth$$6$$, $maxHeight$$5$$, $axis$$24$$) && ($axis$$24$$.$__getEventManager$().$associate$($label$$44$$, new D.$DvtSimpleObjPeer$$($label$$44$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$})), $label$$44$$.$setTranslateX$($availSpace$$73$$.x + $availSpace$$73$$.$w$ / 2), $label$$44$$.$setTranslateY$($availSpace$$73$$.y + 
      $availSpace$$73$$.$h$ / 2), $axis$$24$$.$addChild$($label$$44$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$14$$, $container$$91$$, $text$$35_textString$$1$$, $cssStyle$$4$$, $width$$46$$, $height$$43$$) {
  var $params$$27$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$35_textString$$1$$ = new D.$DvtOutputText$$($container$$91$$.$_context$, $text$$35_textString$$1$$, 0, 0);
  $text$$35_textString$$1$$.$setCSSStyle$($cssStyle$$4$$);
  return D.$DvtTextUtils$$.$fitText$($text$$35_textString$$1$$, $width$$46$$, $height$$43$$, $container$$91$$) ? ($eventManager$$14$$.$associate$($text$$35_textString$$1$$, new D.$DvtSimpleObjPeer$$($text$$35_textString$$1$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$27$$)), $text$$35_textString$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$118$$, $options$$145$$, $availSpace$$66$$) {
  return $options$$145$$.timeAxisType && "disabled" != $options$$145$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$118$$, $options$$145$$, $availSpace$$66$$) : (0,window.isNaN)($options$$145$$.dataMin) && (0,window.isNaN)($options$$145$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$118$$, $options$$145$$, $availSpace$$66$$) : new D.$DvtDataAxisInfo$$($context$$118$$, $options$$145$$, $availSpace$$66$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$119$$, $options$$146$$, $availSpace$$67$$) {
  this.$_context$ = $context$$119$$;
  this.$Position$ = $options$$146$$.position;
  this.$_radius$ = $options$$146$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$67$$.x, this.$EndCoord$ = $availSpace$$67$$.x + $availSpace$$67$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$67$$.y, this.$EndCoord$ = $availSpace$$67$$.y + $availSpace$$67$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$119$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$146$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$146$$.leftBuffer = window.Infinity);
  $options$$146$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$146$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$146$$
};
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$124_text$$32$$, $label$$40$$, $coord$$24$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $offset$$19$$ = 0.5 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $dist$$1$$ = this.$_radius$ + $offset$$19$$;
    if($coord$$24$$ < $hTol$$ || $coord$$24$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$1$$ += $offset$$19$$
    }
    $context$$124_text$$32$$ = new D.$DvtOutputText$$($context$$124_text$$32$$, $label$$40$$, window.Math.round($dist$$1$$ * window.Math.sin($coord$$24$$)), window.Math.round(-$dist$$1$$ * window.Math.cos($coord$$24$$)));
    $coord$$24$$ < $hTol$$ || window.Math.abs($coord$$24$$ - window.Math.PI) < $hTol$$ || $coord$$24$$ > 2 * window.Math.PI - $hTol$$ ? $context$$124_text$$32$$.$alignCenter$() : $coord$$24$$ < window.Math.PI ? $context$$124_text$$32$$.$alignLeft$() : $context$$124_text$$32$$.$alignRight$();
    window.Math.abs($coord$$24$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$24$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$124_text$$32$$.$alignMiddle$() : $coord$$24$$ < window.Math.PI / 2 || $coord$$24$$ > 3 * window.Math.PI / 2 ? $context$$124_text$$32$$.$alignBottom$() : $context$$124_text$$32$$.$alignTop$()
  }else {
    $context$$124_text$$32$$ = new D.$DvtOutputText$$($context$$124_text$$32$$, $label$$40$$, $coord$$24$$, $coord$$24$$), $context$$124_text$$32$$.$alignMiddle$(), $context$$124_text$$32$$.$alignCenter$()
  }
  $context$$124_text$$32$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$124_text$$32$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$125_line$$11$$, $stroke$$19$$, $coord$$25_points$$12$$) {
  var $usePixelHinting$$ = !(0,D.$DvtAgent$isTouchDevice$$)() || 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$25_points$$12$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$25_points$$12$$), $context$$125_line$$11$$ = new D.$DvtPolygon$$($context$$125_line$$11$$, $coord$$25_points$$12$$)) : $context$$125_line$$11$$ = new D.$DvtCircle$$($context$$125_line$$11$$, 
  0, 0, $coord$$25_points$$12$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$125_line$$11$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$125_line$$11$$ = new D.$DvtLine$$($context$$125_line$$11$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$25_points$$12$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$25_points$$12$$)), 0.01 > $coord$$25_points$$12$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$125_line$$11$$)) : ($context$$125_line$$11$$ = new D.$DvtLine$$($context$$125_line$$11$$, $coord$$25_points$$12$$, $coord$$25_points$$12$$, $coord$$25_points$$12$$, $coord$$25_points$$12$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$125_line$$11$$));
  $context$$125_line$$11$$.$setStroke$($stroke$$19$$);
  $context$$125_line$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$125_line$$11$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$, $labelDims$$4$$, $skippedLabels$$) {
  if(!$labelDims$$4$$ || 0 >= $labelDims$$4$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $isVert$$4$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$.$Position$, $isRTL$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$.$_context$);
  $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$ = (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$);
  for(var $pointA1$$2$$, $pointA2$$2$$, $pointB1$$2$$, $pointB2$$2$$, $j$$44$$ = 0;$j$$44$$ < $labelDims$$4$$.length;$j$$44$$ += $skippedLabels$$ + 1) {
    if($labelDims$$4$$[$j$$44$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$2$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$2$$ == D.$JSCompiler_alias_NULL$$) {
        $isVert$$4$$ ? ($pointA1$$2$$ = $labelDims$$4$$[$j$$44$$].y, $pointA2$$2$$ = $labelDims$$4$$[$j$$44$$].y + $labelDims$$4$$[$j$$44$$].$h$) : ($pointA1$$2$$ = $labelDims$$4$$[$j$$44$$].x, $pointA2$$2$$ = $labelDims$$4$$[$j$$44$$].x + $labelDims$$4$$[$j$$44$$].$w$)
      }else {
        if($isVert$$4$$) {
          if($pointB1$$2$$ = $labelDims$$4$$[$j$$44$$].y, $pointB2$$2$$ = $labelDims$$4$$[$j$$44$$].y + $labelDims$$4$$[$j$$44$$].$h$, $pointB1$$2$$ >= $pointA1$$2$$ && $pointB1$$2$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$ < $pointA2$$2$$ || $pointB1$$2$$ < $pointA1$$2$$ && $pointB2$$2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($pointB1$$2$$ = $labelDims$$4$$[$j$$44$$].x, $pointB2$$2$$ = $labelDims$$4$$[$j$$44$$].x + $labelDims$$4$$[$j$$44$$].$w$, !$isRTL$$7$$ && $pointB1$$2$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$ < $pointA2$$2$$ || $isRTL$$7$$ && $pointB2$$2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$13$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }
        $pointA1$$2$$ = $pointB1$$2$$;
        $pointA2$$2$$ = $pointB2$$2$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$ = function $$JSCompiler_StaticMethods_GetTickLabelGapSize$$$($JSCompiler_StaticMethods_GetTickLabelGapSize$self$$) {
  var $fontSize$$5_gapVert$$ = (0,window.parseInt)($JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gapHoriz$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.3 * $fontSize$$5_gapVert$$ : 1 * $fontSize$$5_gapVert$$, $fontSize$$5_gapVert$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.1 * $fontSize$$5_gapVert$$ : 0.35 * $fontSize$$5_gapVert$$;
  return"left" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || ("right" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || "radial" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$) || $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$isLabelRotated$() ? $fontSize$$5_gapVert$$ : $gapHoriz$$
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$11$$, $j$$45_labelDims$$5$$) {
  for(var $skippedLabels$$1$$ = 0, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$45_labelDims$$5$$, $skippedLabels$$1$$);$bOverlaps$$1$$;) {
    $skippedLabels$$1$$++, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$45_labelDims$$5$$, $skippedLabels$$1$$)
  }
  if(0 < $skippedLabels$$1$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$45_labelDims$$5$$ = 0;$j$$45_labelDims$$5$$ < $labels$$11$$.length;$j$$45_labelDims$$5$$ += $skippedLabels$$1$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$11$$[$j$$45_labelDims$$5$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$11$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$12$$, $container$$89$$) {
  for(var $labelDims$$6$$ = [], $i$$221$$ = 0;$i$$221$$ < $labels$$12$$.length;$i$$221$$++) {
    var $dims$$13_text$$33$$ = $labels$$12$$[$i$$221$$];
    $dims$$13_text$$33$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$6$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$13_text$$33$$ = $dims$$13_text$$33$$.$measureDimensions$($container$$89$$), $labelDims$$6$$.push($dims$$13_text$$33$$))
  }
  return $labelDims$$6$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$13$$, $container$$90$$, $fudgeFactor$$) {
  var $labelDims$$7$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$222$$ = 0;$i$$222$$ < $labels$$13$$.length;$i$$222$$++) {
    var $dims$$14_text$$34$$ = $labels$$13$$[$i$$222$$];
    if($dims$$14_text$$34$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$7$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$90$$.$addChild$($dims$$14_text$$34$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$14_text$$34$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$90$$.removeChild($dims$$14_text$$34$$);
      $dims$$14_text$$34$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$() ? new D.$DvtRectangle$$($dims$$14_text$$34$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$14_text$$34$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$14_text$$34$$.$getX$() - $estW$$ / 2, $dims$$14_text$$34$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$7$$.push($dims$$14_text$$34$$)
    }
  }
  return $labelDims$$7$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = (0,D.$JSCompiler_get$$)("$GlobalMin$");
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = (0,D.$JSCompiler_get$$)("$GlobalMax$");
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = (0,D.$JSCompiler_get$$)("$MinValue$");
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = (0,D.$JSCompiler_get$$)("$MaxValue$");
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = (0,D.$JSCompiler_get$$)("$DataMin$");
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = (0,D.$JSCompiler_get$$)("$DataMax$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$112$$, $options$$143$$, $availSpace$$64$$) {
  this.Init($context$$112$$, $options$$143$$, $availSpace$$64$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$, $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$, $availSpace$$65_scaleUnit$$inline_1810$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$, $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$, $availSpace$$65_scaleUnit$$inline_1810$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.tickLabel.rendered && "off" != $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.rightBuffer, 
  0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = 
  this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.max;
  this.$MinValue$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$.dataMax;
  $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ = "on" == this.$Options$._continuousExtent;
  $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$65_scaleUnit$$inline_1810$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (0 == this.$DataMin$ ? this.$DataMax$ += 5 * $availSpace$$65_scaleUnit$$inline_1810$$ : (this.$DataMin$ -= 3 * $availSpace$$65_scaleUnit$$inline_1810$$, this.$DataMax$ += 2 * $availSpace$$65_scaleUnit$$inline_1810$$));
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$65_scaleUnit$$inline_1810$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$65_scaleUnit$$inline_1810$$) * $availSpace$$65_scaleUnit$$inline_1810$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$65_scaleUnit$$inline_1810$$) + 1) * $availSpace$$65_scaleUnit$$inline_1810$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$65_scaleUnit$$inline_1810$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$65_scaleUnit$$inline_1810$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$65_scaleUnit$$inline_1810$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$65_scaleUnit$$inline_1810$$;
  "on" == this.$Options$.alignTickMarks && this.$Options$._majorTickCount ? (this.$_majorTickCount$ = this.$Options$._majorTickCount, this.$_majorIncrement$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorTickCount$, $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$ = window.Math.pow(10, window.Math.ceil(window.Math.log(this.$_majorIncrement$) / window.Math.log(10) - 1)), $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ = this.$_majorIncrement$ / $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$, 
  $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ = 1 < $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ && 1.5 >= $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ ? 1.5 : window.Math.ceil($continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$), this.$_majorIncrement$ = $continuousExtent$$inline_1809_firstDigit$$inline_9485_options$$144$$ * $context$$113_testVal$$inline_9484_zeroBaseline$$inline_1808$$, this.$MaxValue$ = 
  this.$_majorIncrement$ * this.$_majorTickCount$ + this.$getMinLabel$()) : (this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$), this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$);
  this.$_minorTickCount$ = this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$Options$._minorTickCount ? this.$Options$._minorTickCount : this.$_majorIncrement$ / this.$_minorIncrement$ : 2;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$114$$, $levelIdx$$1$$) {
  if($levelIdx$$1$$ && 0 < $levelIdx$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$10$$ = [], $container$$88_labelDims$$3$$ = [], $container$$88_labelDims$$3$$ = $context$$114$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$218$$ = 0;$i$$218$$ <= this.$_majorTickCount$;$i$$218$$++) {
    var $coord$$15_value$$74$$ = $i$$218$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$15_value$$74$$ == this.$MaxValue$)) {
      var $label$$39_text$$31$$ = this.$_formatValue$($coord$$15_value$$74$$), $coord$$15_value$$74$$ = this.$getUnboundedCoordAt$($coord$$15_value$$74$$), $label$$39_text$$31$$ = this.$CreateLabel$($context$$114$$, $label$$39_text$$31$$, $coord$$15_value$$74$$);
      $labels$$10$$.push($label$$39_text$$31$$)
    }
  }
  $isTangential$$ || ($container$$88_labelDims$$3$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$10$$, $container$$88_labelDims$$3$$), $labels$$10$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$10$$, $container$$88_labelDims$$3$$));
  return $labels$$10$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$115$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$115$$, $axisLineOptions$$1_axisLineStroke$$1$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$116$$) {
  var $gridlines$$3$$ = [], $coord$$16_value$$75$$, $baselineColor_line$$9_lineColor$$1_stroke$$18$$, $i$$219_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("off" == $i$$219_majorTickOptions$$1$$.rendered) {
    return $gridlines$$3$$
  }
  $baselineColor_line$$9_lineColor$$1_stroke$$18$$ = $i$$219_majorTickOptions$$1$$.lineColor;
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($baselineColor_line$$9_lineColor$$1_stroke$$18$$, 1, $i$$219_majorTickOptions$$1$$.lineWidth);
  $i$$219_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$219_majorTickOptions$$1$$.lineStyle));
  var $baselineStroke$$ = $majorTickStroke$$1$$.clone();
  "inherit" != $i$$219_majorTickOptions$$1$$.baselineColor && ($baselineColor_line$$9_lineColor$$1_stroke$$18$$ = "auto" == $i$$219_majorTickOptions$$1$$.baselineColor ? D.$DvtColorUtils$$.$getDarker$($baselineColor_line$$9_lineColor$$1_stroke$$18$$, 0.4) : $i$$219_majorTickOptions$$1$$.baselineColor, $baselineStroke$$.$setColor$($baselineColor_line$$9_lineColor$$1_stroke$$18$$));
  $baselineStroke$$.$setWidth$($i$$219_majorTickOptions$$1$$.baselineWidth != D.$JSCompiler_alias_NULL$$ ? $i$$219_majorTickOptions$$1$$.baselineWidth : $i$$219_majorTickOptions$$1$$.lineWidth);
  $baselineStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$219_majorTickOptions$$1$$.baselineStyle ? $i$$219_majorTickOptions$$1$$.baselineStyle : $i$$219_majorTickOptions$$1$$.lineStyle));
  for($i$$219_majorTickOptions$$1$$ = 0;$i$$219_majorTickOptions$$1$$ <= this.$_majorTickCount$;$i$$219_majorTickOptions$$1$$++) {
    $coord$$16_value$$75$$ = $i$$219_majorTickOptions$$1$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$16_value$$75$$ == this.$MaxValue$ || ($baselineColor_line$$9_lineColor$$1_stroke$$18$$ = 0 == $coord$$16_value$$75$$ ? $baselineStroke$$ : $majorTickStroke$$1$$, $coord$$16_value$$75$$ = this.$getUnboundedCoordAt$($coord$$16_value$$75$$), $baselineColor_line$$9_lineColor$$1_stroke$$18$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$116$$, 
    $baselineColor_line$$9_lineColor$$1_stroke$$18$$, $coord$$16_value$$75$$), $gridlines$$3$$.push($baselineColor_line$$9_lineColor$$1_stroke$$18$$))
  }
  return $gridlines$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$117$$) {
  var $gridlines$$4$$ = [], $coord$$17_line$$10_minorValue$$, $i$$220_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $i$$220_minorTickOptions$$1$$.rendered) {
    return $gridlines$$4$$
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($i$$220_minorTickOptions$$1$$.lineColor, 1, $i$$220_minorTickOptions$$1$$.lineWidth);
  $i$$220_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$220_minorTickOptions$$1$$.lineStyle));
  for($i$$220_minorTickOptions$$1$$ = -1;$i$$220_minorTickOptions$$1$$ <= this.$_majorTickCount$;$i$$220_minorTickOptions$$1$$++) {
    for(var $value$$76$$ = $i$$220_minorTickOptions$$1$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$43$$ = 1;$j$$43$$ < this.$_minorTickCount$;$j$$43$$++) {
      $coord$$17_line$$10_minorValue$$ = $value$$76$$ + $j$$43$$ * this.$_minorIncrement$;
      if($coord$$17_line$$10_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$17_line$$10_minorValue$$ < this.$MinValue$ || ($coord$$17_line$$10_minorValue$$ = this.$getUnboundedCoordAt$($coord$$17_line$$10_minorValue$$), $coord$$17_line$$10_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$117$$, $minorTickStroke$$1$$, $coord$$17_line$$10_minorValue$$), $gridlines$$4$$.push($coord$$17_line$$10_minorValue$$))
    }
  }
  return $gridlines$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$77$$) {
  return $value$$77$$ < this.$MinValue$ || $value$$77$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$77$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$19$$) {
  var $minCoord$$4$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$4$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$19$$ < $minCoord$$4$$ ? $coord$$19$$ = $minCoord$$4$$ : $coord$$19$$ > $maxCoord$$4$$ && ($coord$$19$$ = $maxCoord$$4$$);
  return this.$getUnboundedValueAt$($coord$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$78$$) {
  $value$$78$$ < this.$MinValue$ ? $value$$78$$ = this.$MinValue$ : $value$$78$$ > this.$MaxValue$ && ($value$$78$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$78$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$20$$) {
  return this.$MinValue$ + ($coord$$20$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$79$$) {
  return this.$_minCoord$ + ($value$$79$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$5$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$5$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$5$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$80$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$80$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$80$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$80$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$80$$)
    }
    var $decimals_t$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$ = window.Math.max(window.Math.ceil(-$decimals_t$$), 0);
    return $value$$80$$.toFixed($decimals_t$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$, $min$$13_t$$1_testVal$$1$$, $max$$13$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = $max$$13$$ - $min$$13_t$$1_testVal$$1$$;
  if(0 == $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) {
    return 0 == $min$$13_t$$1_testVal$$1$$ ? 10 : window.Math.pow(10, window.Math.floor(window.Math.log($min$$13_t$$1_testVal$$1$$) / window.Math.LN10) - 1)
  }
  $min$$13_t$$1_testVal$$1$$ = window.Math.log($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) / window.Math.log(10);
  $min$$13_t$$1_testVal$$1$$ = window.Math.pow(10, window.Math.ceil($min$$13_t$$1_testVal$$1$$) - 2);
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = window.Math.round($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ / $min$$13_t$$1_testVal$$1$$);
  return(10 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 14 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 2 : 15 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 19 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 3 : 20 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 24 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 4 : 25 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 
  45 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 5 : 46 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 80 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 10 : 20) * $min$$13_t$$1_testVal$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$15$$) {
  this.$_majorTickCount$ = $count$$15$$;
  this.$_majorIncrement$ = (this.$MaxValue$ - this.$MinValue$) / this.$_majorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$16$$) {
  this.$_minorTickCount$ = $count$$16$$;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_get$$)("$_majorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_get$$)("$_minorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$GlobalMax$ - this.$GlobalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$126$$, $options$$153$$, $availSpace$$74$$) {
  this.Init($context$$126$$, $options$$153$$, $availSpace$$74$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$127_isRTL$$11$$, $options$$154$$, $availSpace$$75_endOffset$$1_temp$$2$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$127_isRTL$$11$$, $options$$154$$, $availSpace$$75_endOffset$$1_temp$$2$$);
  $context$$127_isRTL$$11$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$127_isRTL$$11$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$127_isRTL$$11$$) {
    $availSpace$$75_endOffset$$1_temp$$2$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$75_endOffset$$1_temp$$2$$
  }
  this.$_groups$ = $options$$154$$.groups;
  $availSpace$$75_endOffset$$1_temp$$2$$ = 0 < $options$$154$$.endGroupOffset ? (0,window.Number)($options$$154$$.endGroupOffset) : 0;
  var $startOffset$$1$$ = 0 < $options$$154$$.startGroupOffset ? (0,window.Number)($options$$154$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$154$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$1$$ : $options$$154$$.min;
  this.$GlobalMax$ = $options$$154$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$75_endOffset$$1_temp$$2$$ : $options$$154$$.max;
  this.$MinValue$ = $options$$154$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$154$$.viewportMin;
  this.$MaxValue$ = $options$$154$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$154$$.viewportMax;
  var $startIndex$$2$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$154$$.viewportStartGroup), $endIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$154$$.viewportEndGroup);
  -1 != $startIndex$$2$$ && (this.$MinValue$ = $startIndex$$2$$ - $startOffset$$1$$);
  -1 != $endIndex$$1$$ && (this.$MaxValue$ = $endIndex$$1$$ + $availSpace$$75_endOffset$$1_temp$$2$$);
  this.$_startBuffer$ = $context$$127_isRTL$$11$$ ? $options$$154$$.rightBuffer : $options$$154$$.leftBuffer;
  this.$_endBuffer$ = $context$$127_isRTL$$11$$ ? $options$$154$$.leftBuffer : $options$$154$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$154$$._renderGridAtLabels;
  this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$17$$, $container$$92_labelDims$$8$$, $overflow$$3_text$$36$$) {
  var $x$$141$$, $isRTL$$12$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow$$3_text$$36$$, $overflow$$3_text$$36$$, $labels$$17$$);
  for(var $i$$226$$ = 0;$i$$226$$ < $labels$$17$$.length;$i$$226$$++) {
    $overflow$$3_text$$36$$ = $labels$$17$$[$i$$226$$], $overflow$$3_text$$36$$ != D.$JSCompiler_alias_NULL$$ && ($x$$141$$ = $overflow$$3_text$$36$$.$getX$(), $overflow$$3_text$$36$$.$setX$(0), $overflow$$3_text$$36$$.$setY$(0), $isRTL$$12$$ ? $overflow$$3_text$$36$$.$setRotation$(window.Math.PI / 2) : $overflow$$3_text$$36$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$3_text$$36$$.$setTranslateX$($x$$141$$))
  }
  $container$$92_labelDims$$8$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$17$$, $container$$92_labelDims$$8$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$17$$, $container$$92_labelDims$$8$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$18$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$227_isRTL$$13$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$227_isRTL$$13$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$227_isRTL$$13$$ ? -1 : 1);
  for($i$$227_isRTL$$13$$ = 0;$i$$227_isRTL$$13$$ < $labels$$18$$.length;$i$$227_isRTL$$13$$++) {
    var $text$$37$$ = $labels$$18$$[$i$$227_isRTL$$13$$];
    $text$$37$$ && $text$$37$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$227_isRTL$$13$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$128$$, $levelIdx$$3$$) {
  if($levelIdx$$3$$ && 0 < $levelIdx$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || (this.$_level1Labels$ = this.$_generateLabels$($context$$128$$));
  return this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$129_firstLabelDim$$) {
  for(var $labels$$19$$ = [], $container$$93$$ = $context$$129_firstLabelDim$$.$_stage$, $isHoriz$$7$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$129_firstLabelDim$$), $maxLabelDims_numLabels_startOverflow$$1$$ = this.$_groups$.length, $firstLabel$$1_lastLabelDim$$, $lastLabel_text$$38$$, $i$$228$$ = 0;$i$$228$$ < $maxLabelDims_numLabels_startOverflow$$1$$;$i$$228$$++) {
    var $label$$45$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$228$$), $coord$$26$$ = this.$getCoordAt$($i$$228$$);
    $coord$$26$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_text$$38$$ = this.$CreateLabel$($context$$129_firstLabelDim$$, $label$$45$$, $coord$$26$$), $labels$$19$$.push($lastLabel_text$$38$$), $firstLabel$$1_lastLabelDim$$ || ($firstLabel$$1_lastLabelDim$$ = $lastLabel_text$$38$$)) : $labels$$19$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$19$$
  }
  $context$$129_firstLabelDim$$ = $firstLabel$$1_lastLabelDim$$.$measureDimensions$();
  $isHoriz$$7$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($maxLabelDims_numLabels_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = this.$Options$._endOverflow) : ($firstLabel$$1_lastLabelDim$$ = $lastLabel_text$$38$$.$measureDimensions$(), $maxLabelDims_numLabels_startOverflow$$1$$ = $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ ? $context$$129_firstLabelDim$$.$w$ + 
  $context$$129_firstLabelDim$$.x - this.$StartCoord$ : this.$StartCoord$ - $context$$129_firstLabelDim$$.x, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ ? this.$EndCoord$ - $firstLabel$$1_lastLabelDim$$.x : $firstLabel$$1_lastLabelDim$$.$w$ + $firstLabel$$1_lastLabelDim$$.x - this.$EndCoord$), ($maxLabelDims_numLabels_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ > this.$_endBuffer$) && 
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, $maxLabelDims_numLabels_startOverflow$$1$$, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$, $labels$$19$$));
  $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = [];
  $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$19$$, $container$$93$$, 0.3);
  $maxLabelDims_numLabels_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$19$$, $container$$93$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $maxLabelDims_numLabels_startOverflow$$1$$, 0)) {
    return $labels$$19$$
  }
  if($isHoriz$$7$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$19$$, $container$$93$$, $context$$129_firstLabelDim$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$19$$, $container$$93$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$19$$, $container$$93$$, $context$$129_firstLabelDim$$.$h$ / 2) : $labels$$19$$
    }
    $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$19$$, $container$$93$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$19$$, $endOverflow$$1_isRTL$$14_labelDims$$9_minLabelDims$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$19$$, $maxLabelDims_numLabels_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$130$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$130$$, $axisLineOptions$$2_axisLineStroke$$2$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$131$$) {
  var $gridlines$$5$$ = [], $coord$$27_line$$12$$, $majorTickOptions$$2_numGroups$$2_rendered$$1$$ = this.$Options$.majorTick, $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($majorTickOptions$$2_numGroups$$2_rendered$$1$$.lineColor, 1, $majorTickOptions$$2_numGroups$$2_rendered$$1$$.lineWidth);
  $majorTickOptions$$2_numGroups$$2_rendered$$1$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions$$2_numGroups$$2_rendered$$1$$.lineStyle));
  $majorTickOptions$$2_numGroups$$2_rendered$$1$$ = $majorTickOptions$$2_numGroups$$2_rendered$$1$$.rendered;
  if("on" == $majorTickOptions$$2_numGroups$$2_rendered$$1$$ || "auto" == $majorTickOptions$$2_numGroups$$2_rendered$$1$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions$$2_numGroups$$2_rendered$$1$$ = this.$_groups$.length, $i$$229$$ = 0;$i$$229$$ < $majorTickOptions$$2_numGroups$$2_rendered$$1$$;$i$$229$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$27_line$$12$$ = this.$getCoordAt$($i$$229$$)
      }else {
        if(this.$getCoordAt$($i$$229$$ + 0.5)) {
          $coord$$27_line$$12$$ = this.$getCoordAt$($i$$229$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$27_line$$12$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$27_line$$12$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$131$$, $majorTickStroke$$2$$, $coord$$27_line$$12$$), $gridlines$$5$$.push($coord$$27_line$$12$$))
    }
  }
  return $gridlines$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$84$$) {
  return $value$$84$$ < this.$MinValue$ || $value$$84$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$84$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$29$$) {
  var $minCoord$$6$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$6$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$29$$ < $minCoord$$6$$ ? $coord$$29$$ = $minCoord$$6$$ : $coord$$29$$ > $maxCoord$$6$$ && ($coord$$29$$ = $maxCoord$$6$$);
  return this.$getUnboundedValueAt$($coord$$29$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$85$$) {
  $value$$85$$ < this.$MinValue$ ? $value$$85$$ = this.$MinValue$ : $value$$85$$ >= this.$MaxValue$ && ($value$$85$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$85$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$30$$) {
  return this.$MinValue$ + ($coord$$30$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$86$$) {
  return this.$StartCoord$ + ($value$$86$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self$$, $index$$66$$) {
  $index$$66$$ = window.Math.round($index$$66$$);
  if(0 > $index$$66$$ || $index$$66$$ >= $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $label$$46$$ = $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$[$index$$66$$];
  $label$$46$$ && $label$$46$$.name && ($label$$46$$ = $label$$46$$.name);
  return $label$$46$$
};
D.$JSCompiler_StaticMethods_getIndexByLabel$$ = function $$JSCompiler_StaticMethods_getIndexByLabel$$$($JSCompiler_StaticMethods_getIndexByLabel$self$$, $label$$47$$) {
  if($label$$47$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$67$$ = -1, $i$$230$$ = 0;$i$$230$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$230$$++) {
    if($label$$47$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$230$$)) {
      $index$$67$$ = $i$$230$$;
      break
    }
  }
  return $index$$67$$
};
D.$DvtGroupAxisInfo$$.prototype.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($minValue$$8$$, $maxValue$$8$$, $tickStep$$, $scale$$15$$, $autoPrecision$$1$$) {
  this.$_bundle$ = new D.$DvtUtilBundle$$;
  this.Init($minValue$$8$$, $maxValue$$8$$, $tickStep$$, $scale$$15$$, $autoPrecision$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$9_scaleFactorDiff$$inline_1800$$, $maxValue$$9$$, $tickStep$$1$$, $i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$, $autoPrecision$$2$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_1780_useAutoPrecision$$inline_1798$$ = function $$createScale$$inline_1780_useAutoPrecision$$inline_1798$$$($minValue$$9_scaleFactorDiff$$inline_1800$$, $maxValue$$9$$, $tickStep$$1$$) {
    var $i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$9$$, $localizedSuffix$:$i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$};
    this.$_scales$[$minValue$$9_scaleFactorDiff$$inline_1800$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$9$$] = $tickStep$$1$$
  };
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "none", 0);
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$9_scaleFactorDiff$$inline_1800$$, $maxValue$$9$$) {
    return $minValue$$9_scaleFactorDiff$$inline_1800$$.$scaleFactor$ < $maxValue$$9$$.$scaleFactor$ ? -1 : $minValue$$9_scaleFactorDiff$$inline_1800$$.$scaleFactor$ > $maxValue$$9$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_1796$$, $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$, $createScale$$inline_1780_useAutoPrecision$$inline_1798$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$2$$ && ($createScale$$inline_1780_useAutoPrecision$$inline_1798$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$ || ($i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$ = "auto");
  if($i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$ = this.$_scales$[$i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$]) {
    $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ = $i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ && ($absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$) {
    if($absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ = window.Math.max(window.Math.abs($minValue$$9_scaleFactorDiff$$inline_1800$$), window.Math.abs($maxValue$$9$$)), $absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$), $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ = 0, $absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$;$i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$--) {
          if(this.$_scalesOrder$[$i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$].$scaleFactor$ <= $absMax$$inline_1799_findScale$$inline_1795_value$$inline_9478$$) {
            $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ = this.$_scalesOrder$[$i$$inline_9480_scale$$16_scale$$inline_9475_scaleName$$inline_9473$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_1780_useAutoPrecision$$inline_1798$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$9_scaleFactorDiff$$inline_1800$$ == $maxValue$$9$$ ? ($minValue$$9_scaleFactorDiff$$inline_1800$$ = $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$9$$), $decimalPlaces$$inline_1796$$ = 0 >= $minValue$$9_scaleFactorDiff$$inline_1800$$ ? 3 + $minValue$$9_scaleFactorDiff$$inline_1800$$ : 
  window.Math.max($minValue$$9_scaleFactorDiff$$inline_1800$$, 4)) : $decimalPlaces$$inline_1796$$ = window.Math.max($scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_1780_useAutoPrecision$$inline_1798$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_1797_scaleFactor$$inline_9474_scaleFactor$$inline_9479$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_1796$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$71$$, $converter$$1$$) {
  var $formatted$$inline_1804_parsed$$ = (0,window.parseFloat)($value$$71$$);
  if((0,window.isNaN)($formatted$$inline_1804_parsed$$)) {
    return $value$$71$$
  }
  var $i$$217_suffix$$2$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$217_suffix$$2$$ = 0;$i$$217_suffix$$2$$ < this.$_scaleFactor$;$i$$217_suffix$$2$$++) {
      $formatted$$inline_1804_parsed$$ /= 10
    }
    $i$$217_suffix$$2$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$1$$ && $converter$$1$$.getAsString) {
    $formatted$$inline_1804_parsed$$ = $converter$$1$$.getAsString($formatted$$inline_1804_parsed$$)
  }else {
    if($converter$$1$$ && $converter$$1$$.format) {
      $formatted$$inline_1804_parsed$$ = $converter$$1$$.format($formatted$$inline_1804_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_1804_parsed$$)) && ($formatted$$inline_1804_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_1804_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_1804_parsed$$ = "" + $formatted$$inline_1804_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_1804_parsed$$.indexOf(".") && ($formatted$$inline_1804_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_1805$$ = $formatted$$inline_1804_parsed$$.substring($formatted$$inline_1804_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_1805$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_1804_parsed$$ += "0", $existingPlacesCount$$inline_1805$$++
        }
      }
    }
  }
  "string" === typeof $i$$217_suffix$$2$$ && ($formatted$$inline_1804_parsed$$ += $i$$217_suffix$$2$$);
  return $formatted$$inline_1804_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$73$$) {
  $value$$73$$ = 0 <= $value$$73$$ ? $value$$73$$ : -$value$$73$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$73$$) {
    return 0
  }
  if(window.Infinity == $value$$73$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$73$$) {
    for(;10 <= $value$$73$$;) {
      $power$$1$$ += 1, $value$$73$$ /= 10
    }
  }else {
    if(1 > $value$$73$$) {
      for(;1 > $value$$73$$;) {
        $power$$1$$ -= 1, $value$$73$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$105$$, $options$$141$$, $availSpace$$62$$) {
  this.Init($context$$105$$, $options$$141$$, $availSpace$$62$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($context$$106_endOffset$$, $bundle$$10_options$$142$$, $availSpace$$63_startOffset$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $context$$106_endOffset$$, $bundle$$10_options$$142$$, $availSpace$$63_startOffset$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$bundle$$10_options$$142$$._isOverview && "on" == $bundle$$10_options$$142$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $bundle$$10_options$$142$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $bundle$$10_options$$142$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$106_endOffset$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : 
  (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $bundle$$10_options$$142$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $bundle$$10_options$$142$$.tickLabel.converter);
  this.$_groups$ = $bundle$$10_options$$142$$.groups;
  this.$DataMin$ = $bundle$$10_options$$142$$.dataMin;
  this.$DataMax$ = $bundle$$10_options$$142$$.dataMax;
  this.$_averageInterval$ = 1 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  this.$_step$ = $bundle$$10_options$$142$$.step;
  $context$$106_endOffset$$ = 0 < $bundle$$10_options$$142$$.endGroupOffset ? $bundle$$10_options$$142$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$63_startOffset$$ = 0 < $bundle$$10_options$$142$$.startGroupOffset ? $bundle$$10_options$$142$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $bundle$$10_options$$142$$.min != D.$JSCompiler_alias_NULL$$ ? $bundle$$10_options$$142$$.min : this.$DataMin$ - $availSpace$$63_startOffset$$;
  this.$GlobalMax$ = $bundle$$10_options$$142$$.max != D.$JSCompiler_alias_NULL$$ ? $bundle$$10_options$$142$$.max : this.$DataMax$ + $context$$106_endOffset$$;
  this.$MinValue$ = $bundle$$10_options$$142$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $bundle$$10_options$$142$$.viewportMin;
  this.$MaxValue$ = $bundle$$10_options$$142$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $bundle$$10_options$$142$$.viewportMax;
  0 == this.$_averageInterval$ && (this.$_averageInterval$ = (this.$MaxValue$ - this.$MinValue$) / 6);
  $bundle$$10_options$$142$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $bundle$$10_options$$142$$.viewportStartGroup - $availSpace$$63_startOffset$$);
  $bundle$$10_options$$142$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $bundle$$10_options$$142$$.viewportEndGroup + $context$$106_endOffset$$);
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$10_options$$142$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$142$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)]
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, $prevDate$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$, $isVert$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString) {
    $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString($date$$2$$)
  }else {
    if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format) {
      $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format($date$$2$$)
    }else {
      if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$2$$.getMonth()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$2$$.getYear()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
          }
        }else {
          if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
            if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$2$$.getDate()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$2$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$2$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$, 
            D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
          }else {
            if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getHours() != $date$$2$$.getHours() || $prevDate$$.getMinutes() != $date$$2$$.getMinutes()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getSeconds() != $date$$2$$.getSeconds()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$)
              }
            }
            if($isVert$$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$2$$.getDate()) {
                $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$2$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$2$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, 
              D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$.getDate() != $date$$2$$.getDate() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$2$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
            }
          }
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dateStr$$, $date$$3_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = $date$$3_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[$date$$3_dayStr$$.getMonth()] : $date$$3_dayStr$$.toString().split(" ")[1];
  $date$$3_dayStr$$ = $date$$3_dayStr$$.getDate();
  if($JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 17 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length) {
    var $dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[17], $yearStr$$ = $yearStr$$ + $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[16];
    $date$$3_dayStr$$ += $dayChar_dmyOrder$$
  }
  $dayChar_dmyOrder$$ = "DMY";
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 15 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length && ($dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[15]);
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$ = "";
  for(var $i$$210$$ = 0;$i$$210$$ < $dayChar_dmyOrder$$.length;$i$$210$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$210$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$3_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$210$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$210$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.slice(0, $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length - 1) : $JSCompiler_StaticMethods__formatDate$self_dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self_b12HFormat$$, $date$$4_secs$$, $showSecond$$) {
  var $hours_timeLabel$$ = $date$$4_secs$$.getHours(), $mins$$ = $date$$4_secs$$.getMinutes();
  $date$$4_secs$$ = $date$$4_secs$$.getSeconds();
  var $am$$ = "", $pm$$ = "", $ampmBefore$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ != D.$JSCompiler_alias_NULL$$ && 14 < $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ && ($am$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[12], $pm$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[13], $ampmBefore$$ = "t" == $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[14]);
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ = "" != $am$$ && "" != $pm$$;
  var $ampm$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ && ($ampm$$ = $pm$$, 12 < $hours_timeLabel$$ ? ($hours_timeLabel$$ -= 12, $ampm$$ = $pm$$) : 0 == $hours_timeLabel$$ ? ($ampm$$ = $am$$, $hours_timeLabel$$ = 12) : 12 > $hours_timeLabel$$ && ($ampm$$ = $am$$));
  $hours_timeLabel$$ = (10 > $hours_timeLabel$$ ? "0" + $hours_timeLabel$$ : "" + $hours_timeLabel$$) + ":" + (10 > $mins$$ ? "0" + $mins$$ : "" + $mins$$);
  $showSecond$$ && ($hours_timeLabel$$ += ":" + (10 > $date$$4_secs$$ ? "0" + $date$$4_secs$$ : "" + $date$$4_secs$$));
  return $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $hours_timeLabel$$ : $hours_timeLabel$$ + " " + $ampm$$ : $hours_timeLabel$$
};
D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$ = function $$JSCompiler_StaticMethods__getMixedFrequencyStep$$$($JSCompiler_StaticMethods__getMixedFrequencyStep$self$$) {
  return 316224E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ ? 316224E5 : 26784E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 316224E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 26784E5 : 864E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 26784E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 864E5 : 36E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 
  864E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 36E5 : 3E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 36E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 3E5 : 6E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 3E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 6E4 : 5E3 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_averageInterval$ || 
  6E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 5E3 : 1E3
};
D.$DvtTimeAxisInfo$_getLabelPositions$$ = function $$DvtTimeAxisInfo$_getLabelPositions$$$($start$$13$$, $end$$6$$, $step$$1$$) {
  var $times$$ = [], $anchor_time$$1$$;
  $anchor_time$$1$$ = new window.Date($start$$13$$);
  if(31536E6 <= $step$$1$$ && 316224E5 >= $step$$1$$) {
    $anchor_time$$1$$.setMonth(0, 1);
    $anchor_time$$1$$ = $anchor_time$$1$$.getTime();
    for($anchor_time$$1$$ < $start$$13$$ && ($anchor_time$$1$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor_time$$1$$));$anchor_time$$1$$ <= $end$$6$$;) {
      $times$$.push($anchor_time$$1$$), $anchor_time$$1$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor_time$$1$$)
    }
  }else {
    if(24192E5 <= $step$$1$$ && 26784E5 >= $step$$1$$) {
      $anchor_time$$1$$.setDate(1);
      $anchor_time$$1$$ = $anchor_time$$1$$.getTime();
      for($anchor_time$$1$$ < $start$$13$$ && ($anchor_time$$1$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor_time$$1$$));$anchor_time$$1$$ <= $end$$6$$;) {
        $times$$.push($anchor_time$$1$$), $anchor_time$$1$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor_time$$1$$)
      }
    }else {
      $anchor_time$$1$$.setMonth(0, 1);
      864E5 > $step$$1$$ && $anchor_time$$1$$.setHours(0, 0, 0, 0);
      for($anchor_time$$1$$ = $anchor_time$$1$$.getTime() + window.Math.ceil(($start$$13$$ - $anchor_time$$1$$.getTime()) / $step$$1$$) * $step$$1$$;$anchor_time$$1$$ <= $end$$6$$;) {
        $times$$.push($anchor_time$$1$$), $anchor_time$$1$$ += $step$$1$$
      }
    }
  }
  return $times$$
};
D.$DvtTimeAxisInfo$_addOneYear$$ = function $$DvtTimeAxisInfo$_addOneYear$$$($date$$5_time$$2$$) {
  $date$$5_time$$2$$ = new window.Date($date$$5_time$$2$$);
  $date$$5_time$$2$$.setFullYear($date$$5_time$$2$$.getFullYear() + 1);
  return $date$$5_time$$2$$.getTime()
};
D.$DvtTimeAxisInfo$_addOneMonth$$ = function $$DvtTimeAxisInfo$_addOneMonth$$$($date$$6_time$$3$$) {
  $date$$6_time$$3$$ = new window.Date($date$$6_time$$3$$);
  $date$$6_time$$3$$.setMonth($date$$6_time$$3$$.getMonth() + 1);
  return $date$$6_time$$3$$.getTime()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$) {
  var $labels1$$ = [], $labels2$$ = [], $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_prevDate$$1_text$$30$$ = D.$JSCompiler_alias_NULL$$, $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = 0, $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = 0, $container$$85$$ = $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.$_stage$, 
  $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$), $isVert$$1_labels1$$inline_1760$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$40_labels2$$inline_1761_scrollable$$ = "off" != this.$Options$.zoomAndScroll;
  if($j$$40_labels2$$inline_1761_scrollable$$) {
    var $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ = 0;
  $isVert$$1_labels1$$inline_1760$$ && (0,D.$DvtAgent$isBrowserChrome$$)() && ($availWidth$$inline_1740_count$$inline_1752_levelsGap$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
  var $pointB1$$inline_1755_times$$1$$ = [], $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = 0;
  if(this.$_step$ != D.$JSCompiler_alias_NULL$$) {
    $pointB1$$inline_1755_times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
  }else {
    if("mixedFrequency" == this.$Options$.timeAxisType) {
      this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $pointB1$$inline_1755_times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$), $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = window.Math.floor(this.$_averageInterval$ / this.$_step$) - 1
    }else {
      for(var $firstLabel_i$$211_pointB2$$inline_1756$$ = 0;$firstLabel_i$$211_pointB2$$inline_1756$$ < this.$_groups$.length;$firstLabel_i$$211_pointB2$$inline_1756$$++) {
        this.$_groups$[$firstLabel_i$$211_pointB2$$inline_1756$$] >= this.$MinValue$ && this.$_groups$[$firstLabel_i$$211_pointB2$$inline_1756$$] <= this.$MaxValue$ && $pointB1$$inline_1755_times$$1$$.push(this.$_groups$[$firstLabel_i$$211_pointB2$$inline_1756$$])
      }
      this.$_step$ = this.$_averageInterval$;
      $firstLabel_i$$211_pointB2$$inline_1756$$ = new D.$DvtOutputText$$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$, (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, new window.Date($pointB1$$inline_1755_times$$1$$[0]))[0], 0, 0);
      if((($isVert$$1_labels1$$inline_1760$$ ? D.$DvtTextUtils$$.$guessTextDimensions$($firstLabel_i$$211_pointB2$$inline_1756$$).$h$ : $firstLabel_i$$211_pointB2$$inline_1756$$.$measureDimensions$().$w$) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($pointB1$$inline_1755_times$$1$$.length - 1) > window.Math.abs(this.$_minCoord$ - this.$_maxCoord$)) {
        this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $pointB1$$inline_1755_times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$), $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = window.Math.floor(this.$_averageInterval$ / this.$_step$) - 1
      }
    }
  }
  0 == $pointB1$$inline_1755_times$$1$$.length && ($pointB1$$inline_1755_times$$1$$ = [this.$MinValue$]);
  for($firstLabel_i$$211_pointB2$$inline_1756$$ = 0;$firstLabel_i$$211_pointB2$$inline_1756$$ < $pointB1$$inline_1755_times$$1$$.length;$firstLabel_i$$211_pointB2$$inline_1756$$++) {
    var $date$$7_time$$4$$ = $pointB1$$inline_1755_times$$1$$[$firstLabel_i$$211_pointB2$$inline_1756$$], $coord$$11_j$$inline_1757$$ = this.$getCoordAt$($date$$7_time$$4$$);
    if($coord$$11_j$$inline_1757$$ != D.$JSCompiler_alias_NULL$$) {
      var $date$$7_time$$4$$ = new window.Date($date$$7_time$$4$$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$7_time$$4$$, $label1$$1_prevDate$$1_text$$30$$), $label1$$1_prevDate$$1_text$$30$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      $label1$$1_prevDate$$1_text$$30$$ != D.$JSCompiler_alias_NULL$$ ? ($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$.push({text:$label1$$1_prevDate$$1_text$$30$$, $coord$:$label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $coord$$11_j$$inline_1757$$ + $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ : $coord$$11_j$$inline_1757$$}), $coords1$$.push($coord$$11_j$$inline_1757$$)) : ($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$.push(D.$JSCompiler_alias_NULL$$), 
      $coords1$$.push(D.$JSCompiler_alias_NULL$$));
      $labels1$$.push(D.$JSCompiler_alias_NULL$$);
      $j$$40_labels2$$inline_1761_scrollable$$ && $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ && ($coord$$11_j$$inline_1757$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$11_j$$inline_1757$$, $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = D.$JSCompiler_alias_FALSE$$);
      $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$1_prevDate$$1_text$$30$$ = this.$CreateLabel$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$, $label2$$1_twoLabels$$1$$, $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $coord$$11_j$$inline_1757$$ - $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ : $coord$$11_j$$inline_1757$$), $coords2$$.push($coord$$11_j$$inline_1757$$), $isVert$$1_labels1$$inline_1760$$ || 
      ($bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ ? $label1$$1_prevDate$$1_text$$30$$.$alignRight$() : $label1$$1_prevDate$$1_text$$30$$.$alignLeft$()), $labels2$$.push($label1$$1_prevDate$$1_text$$30$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$.push(D.$JSCompiler_alias_NULL$$));
      $label1$$1_prevDate$$1_text$$30$$ = $date$$7_time$$4$$
    }
  }
  $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = $labels1$$;
  for(var $rLabelInfos$$inline_1733$$ = [], $rLabelDims$$inline_1734$$ = [], $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = 0;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ < $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$.length;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$++) {
    $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$] != D.$JSCompiler_alias_NULL$$ && ($rLabelInfos$$inline_1733$$.push($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$]), $rLabelDims$$inline_1734$$.push(D.$JSCompiler_alias_NULL$$))
  }
  for(var $isVert$$inline_1736$$ = "left" == this.$Position$ || "right" == this.$Position$, $_this$$inline_1737$$ = this, $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = function $$count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$) {
    $rLabelDims$$inline_1734$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$] == D.$JSCompiler_alias_NULL$$ && ($rLabelInfos$$inline_1733$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].label = $_this$$inline_1737$$.$CreateLabel$($container$$85$$.$_context$, $rLabelInfos$$inline_1733$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].text, 
    $rLabelInfos$$inline_1733$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].$coord$), $rLabelDims$$inline_1734$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$] = $isVert$$inline_1736$$ ? D.$DvtTextUtils$$.$guessTextDimensions$($rLabelInfos$$inline_1733$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].label) : 
    $rLabelInfos$$inline_1733$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].label.$measureDimensions$($container$$85$$));
    return $isVert$$inline_1736$$ ? $rLabelDims$$inline_1734$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].$h$ : $rLabelDims$$inline_1734$$[$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$].$w$
  }, $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = ($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$(0) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($rLabelInfos$$inline_1733$$.length - 1), $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ = window.Math.abs(this.$_minCoord$ - this.$_maxCoord$), $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = 
  window.Math.max($c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$, 0 < $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ ? window.Math.ceil($bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ / $availWidth$$inline_1740_count$$inline_1752_levelsGap$$) - 1 : 0), $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = D.$JSCompiler_alias_TRUE$$;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$;) {
    for($bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = 0;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ < $rLabelInfos$$inline_1733$$.length;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$++) {
      0 == $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ % ($c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ + 1) ? ($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$($bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$), $rLabelInfos$$inline_1733$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$].$skipped$ = 
      D.$JSCompiler_alias_FALSE$$) : $rLabelInfos$$inline_1733$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$].$skipped$ = D.$JSCompiler_alias_TRUE$$
    }
    $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $rLabelDims$$inline_1734$$, $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$);
    $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$++
  }
  for($bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = 0;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ < $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$.length;$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$++) {
    $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$] != D.$JSCompiler_alias_NULL$$ && !$labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$].$skipped$ && ($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$] = 
    $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$].label, $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$++)
  }
  $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$;
  $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = $labels2$$;
  $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $container$$85$$);
  if(!$context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ || 0 >= $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.length) {
    $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    for(var $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = "left" == this.$Position$ || "right" == this.$Position$, $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = 
    $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ ? 0.1 * $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ : 0.3 * $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$, $availWidth$$inline_1740_count$$inline_1752_levelsGap$$ = 0, $isOverlapping$$inline_1764_pointA1$$inline_1753$$, $i$$inline_1767_pointA2$$inline_1754$$, 
    $coord$$11_j$$inline_1757$$ = 0;$coord$$11_j$$inline_1757$$ < $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.length;$coord$$11_j$$inline_1757$$++) {
      $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$] != D.$JSCompiler_alias_NULL$$ && ($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ ? ($pointB1$$inline_1755_times$$1$$ = $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].y, $firstLabel_i$$211_pointB2$$inline_1756$$ = 
      $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].y + $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].$h$) : ($pointB1$$inline_1755_times$$1$$ = $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].x, $firstLabel_i$$211_pointB2$$inline_1756$$ = 
      $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].x + $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$[$coord$$11_j$$inline_1757$$].$w$), $isOverlapping$$inline_1764_pointA1$$inline_1753$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_1767_pointA2$$inline_1754$$ != D.$JSCompiler_alias_NULL$$ && ($pointB1$$inline_1755_times$$1$$ >= $isOverlapping$$inline_1764_pointA1$$inline_1753$$ && 
      $pointB1$$inline_1755_times$$1$$ - $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ < $i$$inline_1767_pointA2$$inline_1754$$ || $pointB1$$inline_1755_times$$1$$ < $isOverlapping$$inline_1764_pointA1$$inline_1753$$ && $firstLabel_i$$211_pointB2$$inline_1756$$ + $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ > $isOverlapping$$inline_1764_pointA1$$inline_1753$$)) && 
      ($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$coord$$11_j$$inline_1757$$] = D.$JSCompiler_alias_NULL$$), $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$[$coord$$11_j$$inline_1757$$] != D.$JSCompiler_alias_NULL$$ && ($isOverlapping$$inline_1764_pointA1$$inline_1753$$ = $pointB1$$inline_1755_times$$1$$, $i$$inline_1767_pointA2$$inline_1754$$ = $firstLabel_i$$211_pointB2$$inline_1756$$, $availWidth$$inline_1740_count$$inline_1752_levelsGap$$++))
    }
    $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ = $availWidth$$inline_1740_count$$inline_1752_levelsGap$$
  }
  if(!$j$$40_labels2$$inline_1761_scrollable$$ && 1 < $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$ && $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ <= 1.5 * $bOverlaps$$inline_1742_c2$$2_fontSize$$inline_1750_gap$$inline_1751_isRTL$$6_j$$inline_1735_totalWidth$$inline_1739$$) {
    $labels1$$ = $labels2$$;
    $labels2$$ = D.$JSCompiler_alias_NULL$$;
    for($j$$40_labels2$$inline_1761_scrollable$$ = 0;$j$$40_labels2$$inline_1761_scrollable$$ < $labels1$$.length;$j$$40_labels2$$inline_1761_scrollable$$++) {
      $labels1$$[$j$$40_labels2$$inline_1761_scrollable$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$[$j$$40_labels2$$inline_1761_scrollable$$].$alignCenter$()
    }
  }
  if($isVert$$1_labels1$$inline_1760$$ && $labels2$$ != D.$JSCompiler_alias_NULL$$) {
    var $isVert$$1_labels1$$inline_1760$$ = $labels1$$, $j$$40_labels2$$inline_1761_scrollable$$ = $labels2$$, $gap$$inline_1763$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size"));
    $isOverlapping$$inline_1764_pointA1$$inline_1753$$ = function $$isOverlapping$$inline_1764_pointA1$$inline_1753$$$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$, $labels1$$) {
      return $labels1$$.y >= $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.y && $labels1$$.y - $gap$$inline_1763$$ < $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.y + $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.$h$ || $labels1$$.y < $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.y && 
      $labels1$$.y + $labels1$$.$h$ + $gap$$inline_1763$$ > $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$.y ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    };
    $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = D.$JSCompiler_alias_NULL$$;
    $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = D.$JSCompiler_alias_FALSE$$;
    for($i$$inline_1767_pointA2$$inline_1754$$ = 0;$i$$inline_1767_pointA2$$inline_1754$$ < $isVert$$1_labels1$$inline_1760$$.length;$i$$inline_1767_pointA2$$inline_1754$$++) {
      if($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] && $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$]) {
        if($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$].$alignTop$(), $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$].$alignBottom$(), $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ && $isOverlapping$$inline_1764_pointA1$$inline_1753$$($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$, D.$DvtTextUtils$$.$guessTextDimensions$($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$]))) {
          $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }else {
          if($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$ + 1] && $isOverlapping$$inline_1764_pointA1$$inline_1753$$(D.$DvtTextUtils$$.$guessTextDimensions$($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$]), D.$DvtTextUtils$$.$guessTextDimensions$($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$ + 1]))) {
            $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = D.$DvtTextUtils$$.$guessTextDimensions$($j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$])
          }
        }
      }else {
        if($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] || $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$]) {
          if($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = $isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] ? $isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] : $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$], $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ && $isOverlapping$$inline_1764_pointA1$$inline_1753$$($labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$, 
          D.$DvtTextUtils$$.$guessTextDimensions$($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$))) {
            $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = D.$DvtTextUtils$$.$guessTextDimensions$($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$)
          }
        }
      }
    }
    if($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$) {
      $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = D.$JSCompiler_alias_NULL$$;
      for($i$$inline_1767_pointA2$$inline_1754$$ = 0;$i$$inline_1767_pointA2$$inline_1754$$ < $isVert$$1_labels1$$inline_1760$$.length;$i$$inline_1767_pointA2$$inline_1754$$++) {
        $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$] ? ($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] = D.$JSCompiler_alias_NULL$$, $j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$].$alignMiddle$(), $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = D.$DvtTextUtils$$.$guessTextDimensions$($j$$40_labels2$$inline_1761_scrollable$$[$i$$inline_1767_pointA2$$inline_1754$$]), $context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ && 
        $isOverlapping$$inline_1764_pointA1$$inline_1753$$($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$, $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$) && ($isVert$$1_labels1$$inline_1760$$[$labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$] = D.$JSCompiler_alias_NULL$$), $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ = 
        $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$) : $isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] && ($c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$ = D.$DvtTextUtils$$.$guessTextDimensions$($isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$]), $count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$ && $isOverlapping$$inline_1764_pointA1$$inline_1753$$($count$$inline_1743_first$$1_getDim$$inline_1738_isVert$$inline_1749_label$$inline_1768_lastLv2Dims$$inline_1771$$, 
        $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$) ? $isVert$$1_labels1$$inline_1760$$[$i$$inline_1767_pointA2$$inline_1754$$] = D.$JSCompiler_alias_NULL$$ : ($context$$107_labelDims$$inline_1748_labels$$inline_1730_lastLv1Dims$$inline_1770_overlapping$$inline_1766$$ = $c1$$2_dims$$inline_1772_minSkip_minSkip$$inline_1732_skip$$inline_1741$$, $labelInfos1_labels$$inline_1747_lastDims$$inline_1765_lastLv1Idx$$inline_1769$$ = $i$$inline_1767_pointA2$$inline_1754$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$108$$, $levelIdx$$) {
  if($levelIdx$$ && 1 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$108$$);
  return 1 == $levelIdx$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$109$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$109$$, $axisLineOptions_axisLineStroke$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$110$$) {
  var $gridlines$$1_majorTickOptions$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$1_majorTickOptions$$.rendered) {
    return[]
  }
  var $coords$$14$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$214$$ = 0;$i$$214$$ < this.$_level1Coords$.length;$i$$214$$++) {
      this.$_level1Coords$[$i$$214$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$214$$] != D.$JSCompiler_alias_NULL$$ && $coords$$14$$.push(this.$_level1Coords$[$i$$214$$])
    }
  }else {
    for($i$$214$$ = 0;$i$$214$$ < this.$_level2Coords$.length;$i$$214$$++) {
      this.$_level2Coords$[$i$$214$$] != D.$JSCompiler_alias_NULL$$ && $coords$$14$$.push(this.$_level2Coords$[$i$$214$$])
    }
  }
  var $majorTickStroke$$ = new D.$DvtSolidStroke$$($gridlines$$1_majorTickOptions$$.lineColor, 1, $gridlines$$1_majorTickOptions$$.lineWidth);
  $gridlines$$1_majorTickOptions$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$1_majorTickOptions$$.lineStyle));
  $gridlines$$1_majorTickOptions$$ = [];
  for($i$$214$$ = 0;$i$$214$$ < $coords$$14$$.length;$i$$214$$++) {
    $coords$$14$$[$i$$214$$] >= this.$_minCoord$ && $coords$$14$$[$i$$214$$] <= this.$_maxCoord$ && $gridlines$$1_majorTickOptions$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$110$$, $majorTickStroke$$, $coords$$14$$[$i$$214$$]))
  }
  return $gridlines$$1_majorTickOptions$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$111$$) {
  var $gridlines$$2_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$2_minorTickOptions$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$15$$ = [], $i$$215$$ = 0;$i$$215$$ < this.$_level1Coords$.length;$i$$215$$++) {
    this.$_level1Coords$[$i$$215$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$215$$] != D.$JSCompiler_alias_NULL$$ && $coords$$15$$.push(this.$_level1Coords$[$i$$215$$])
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($gridlines$$2_minorTickOptions$$.lineColor, 1, $gridlines$$2_minorTickOptions$$.lineWidth);
  $gridlines$$2_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$2_minorTickOptions$$.lineStyle));
  $gridlines$$2_minorTickOptions$$ = [];
  for($i$$215$$ = 0;$i$$215$$ < $coords$$15$$.length;$i$$215$$++) {
    $coords$$15$$[$i$$215$$] >= this.$_minCoord$ && $coords$$15$$[$i$$215$$] <= this.$_maxCoord$ && $gridlines$$2_minorTickOptions$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$111$$, $minorTickStroke$$, $coords$$15$$[$i$$215$$]))
  }
  return $gridlines$$2_minorTickOptions$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$66$$) {
  return $value$$66$$ < this.$MinValue$ || $value$$66$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$66$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$13$$) {
  var $minCoord$$2$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$2$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$13$$ < $minCoord$$2$$ ? $coord$$13$$ = $minCoord$$2$$ : $coord$$13$$ > $maxCoord$$2$$ && ($coord$$13$$ = $maxCoord$$2$$);
  return this.$getUnboundedValueAt$($coord$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$67$$) {
  $value$$67$$ < this.$MinValue$ ? $value$$67$$ = this.$MinValue$ : $value$$67$$ > this.$MaxValue$ && ($value$$67$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$67$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$14$$) {
  return this.$MinValue$ + ($coord$$14$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$68$$) {
  return this.$_minCoord$ + ($value$$68$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_get$$)("$_averageInterval$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
});