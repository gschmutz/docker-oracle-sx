"use strict";
define(['./DvtToolkit', './DvtAxis'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$353$$, $callback$$119$$, $callbackObj$$92$$, $bStaticRendering$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$353$$, $callback$$119$$, $callbackObj$$92$$);
  this.$Bundle$ = new D.$DvtGaugeBundle$$;
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$353$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$249$$) {
  this.$Options$ = $options$$249$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$, $container$$153_eventManager$$24_width$$128$$, $ariaId_bParentIsStage_height$$108_oldShapes$$) {
  $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$153_eventManager$$24_width$$128$$) && !(0,window.isNaN)($ariaId_bParentIsStage_height$$108_oldShapes$$) && (this.$Width$ = $container$$153_eventManager$$24_width$$128$$, this.$Height$ = $ariaId_bParentIsStage_height$$108_oldShapes$$);
  $ariaId_bParentIsStage_height$$108_oldShapes$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$153_eventManager$$24_width$$128$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChildAt$($container$$153_eventManager$$24_width$$128$$, 0);
  this.$Render$($container$$153_eventManager$$24_width$$128$$, this.$Width$, this.$Height$);
  var $bData$$inline_6580_newObjs$$inline_10615$$ = $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$ = this.$Width$, $context$$inline_6589_endState$$inline_10621_height$$inline_6583$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDataChange, $animationOnDisplay$$inline_6586_i$$inline_10618$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDisplay, $animationDuration$$inline_6587$$ = this.$__getOptions$().animationDuration / 1E3;
  if($animationOnDisplay$$inline_6586_i$$inline_10618$$ || $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$) {
    $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$, $context$$inline_6589_endState$$inline_10621_height$$inline_6583$$);
    $context$$inline_6589_endState$$inline_10621_height$$inline_6583$$ = this.$_context$;
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_6586_i$$inline_10618$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_6589_endState$$inline_10621_height$$inline_6583$$, $animationOnDisplay$$inline_6586_i$$inline_10618$$, $container$$153_eventManager$$24_width$$128$$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$, $animationDuration$$inline_6587$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_6586_i$$inline_10618$$, $animationDuration$$inline_6587$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$ && $bData$$inline_6580_newObjs$$inline_10615$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_6589_endState$$inline_10621_height$$inline_6583$$, $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$, this.$_container$, $container$$153_eventManager$$24_width$$128$$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$, $animationDuration$$inline_6587$$)) {
          $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_6580_newObjs$$inline_10615$$ = this.$__shapes$;
          $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$ = [];
          for($animationOnDisplay$$inline_6586_i$$inline_10618$$ = 0;$animationOnDisplay$$inline_6586_i$$inline_10618$$ < $ariaId_bParentIsStage_height$$108_oldShapes$$.length;$animationOnDisplay$$inline_6586_i$$inline_10618$$++) {
            var $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$ = $bData$$inline_6580_newObjs$$inline_10615$$[$animationOnDisplay$$inline_6586_i$$inline_10618$$], $animation$$inline_10622_startState$$inline_10620$$ = $ariaId_bParentIsStage_height$$108_oldShapes$$[$animationOnDisplay$$inline_6586_i$$inline_10618$$].$getAnimationParams$(), $context$$inline_6589_endState$$inline_10621_height$$inline_6583$$ = $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$.$getAnimationParams$();
            $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$.$setAnimationParams$($animation$$inline_10622_startState$$inline_10620$$);
            $animation$$inline_10622_startState$$inline_10620$$ = new D.$DvtCustomAnimation$$(this.$_context$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$, $animationDuration$$inline_6587$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10622_startState$$inline_10620$$.$_animator$, "typeNumberArray", $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$.$getAnimationParams$, $bounds$$inline_6588_newObj$$inline_10619_width$$inline_6582$$.$setAnimationParams$, $context$$inline_6589_endState$$inline_10621_height$$inline_6583$$);
            $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$.push($animation$$inline_10622_startState$$inline_10620$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$inline_10617_animationOnDataChange$$inline_6585$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$153_eventManager$$24_width$$128$$
  }
  this.$_editingOverlay$ && this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$));
  this.$_bStaticRendering$ || ($ariaId_bParentIsStage_height$$108_oldShapes$$ = this.getParent() == this.$_context$.$_stage$, $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), this.$Options$.readOnly && $ariaId_bParentIsStage_height$$108_oldShapes$$ ? (this.$_context$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$_context$, $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$)) : ($container$$153_eventManager$$24_width$$128$$.$setAriaRole$("img"), 
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$153_eventManager$$24_width$$128$$, "label", $bBlackBoxUpdate$$inline_6584_options$$250_tooltip$$43$$), this.$_renderCount$ = this.$_renderCount$ != D.$JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_bParentIsStage_height$$108_oldShapes$$ = this.getId() + "_" + this.$_renderCount$, $container$$153_eventManager$$24_width$$128$$.setId($ariaId_bParentIsStage_height$$108_oldShapes$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, 
  $container$$153_eventManager$$24_width$$128$$), ($container$$153_eventManager$$24_width$$128$$ = this.$__getEventManager$()) && $container$$153_eventManager$$24_width$$128$$.$associate$(this.$_editingOverlay$, this.$GetLogicalObject$(), D.$JSCompiler_alias_TRUE$$)))
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  var $tooltip$$44$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$54$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $tooltip$$44$$, $color$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$213$$, $y$$183$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$213$$, $y$$183$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$214$$, $y$$184$$) {
  this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$214$$, $y$$184$$));
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$215$$, $y$$185$$) {
  this.$__processValueChangeMove$($x$$215$$, $y$$185$$);
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$51$$, $b$$34$$) {
  return $a$$51$$.max && $b$$34$$.max ? $a$$51$$.max - $b$$34$$.max : $a$$51$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$20$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$20$$, this)
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportSymbol$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$__getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
D.$DvtGaugeBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeBundle$$, D.$DvtBundle$$, "DvtGaugeBundle");
D.$DvtGaugeBundle$$._defaults = {EMPTY_TEXT:"No data to display"};
D.$DvtGaugeBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtGaugeBundle$$$$$GetDefaultStringForKey$$($key$$61$$) {
  return D.$DvtGaugeBundle$$._defaults[$key$$61$$]
};
D.$DvtGaugeBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtGaugeBundle");
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$, textType:"number"}, __layout:{outerGap:1, labelGap:3}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$92$$) {
  $defaultsMap$$1_ret$$92$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$92$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$92$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$92$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$47$$) {
  return"skyros" == $gauge$$47$$.$__getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge_options$$186$$) {
  $gauge_options$$186$$ = $gauge_options$$186$$.$__getOptions$();
  return!$gauge_options$$186$$ || (0,window.isNaN)($gauge_options$$186$$.value) || $gauge_options$$186$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$1$$, $value$$108$$) {
  var $options$$187_thresholds$$ = $gauge$$1$$.$__getOptions$(), $gaugeValue$$ = $value$$108$$ ? $value$$108$$ : $options$$187_thresholds$$.value, $options$$187_thresholds$$ = $options$$187_thresholds$$.thresholds;
  if(!$options$$187_thresholds$$) {
    return-1
  }
  for(var $i$$525$$ = 0;$i$$525$$ < $options$$187_thresholds$$.length;$i$$525$$++) {
    if($gaugeValue$$ <= $options$$187_thresholds$$[$i$$525$$].max) {
      return $i$$525$$
    }
  }
  return $options$$187_thresholds$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$2$$, $index$$122$$) {
  var $thresholds$$1$$ = $gauge$$2$$.$__getOptions$().thresholds;
  return $thresholds$$1$$ && 0 <= $index$$122$$ && $index$$122$$ < $thresholds$$1$$.length ? $thresholds$$1$$[$index$$122$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$3$$, $index$$123$$) {
  var $referenceObjects$$ = $gauge$$3$$.$__getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$123$$ && $index$$123$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$123$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$4$$) {
  this.Init($gauge$$4$$.$_context$, $gauge$$4$$.$__dispatchEvent$, $gauge$$4$$);
  this.$_gauge$ = $gauge$$4$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$17_event$$355$$) {
  this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$17_event$$355$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$17_event$$355$$.pageX, $coords$$17_event$$355$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$17_event$$355$$.x, $coords$$17_event$$355$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$17_event$$355$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$18_event$$356$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$18_event$$356$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$18_event$$356$$.pageX, $coords$$18_event$$356$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$18_event$$356$$.x, $coords$$18_event$$356$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$18_event$$356$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$357$$) {
  if(this.$isEditing$) {
    var $coords$$19$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$357$$.pageX, $event$$357$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$19$$.x, $coords$$19$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$357$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$358$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$358$$.type && this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$358$$.touches[0].pageX, $event$$358$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$20$$.x, $coords$$20$$.y);
    $event$$358$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$358$$.type && this.$isEditing$ ? ($coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$358$$.touches[0].pageX, $event$$358$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$20$$.x, $coords$$20$$.y), $event$$358$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$358$$.type && this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$358$$.changedTouches[0].pageX, $event$$358$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$20$$.x, $coords$$20$$.y), $event$$358$$.preventDefault()) : D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$358$$)
  }
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$10_stageCoords$$, $pageY$$10$$) {
  $pageX$$10_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$_context$, $pageX$$10_stageCoords$$, $pageY$$10$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$10_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$12$$, $gauge$$30$$) {
  this.Init($manager$$12$$, $gauge$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$13$$, $gauge$$31$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$13$$);
  this.$_gauge$ = $gauge$$31$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$359$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ = $event$$359$$.keyCode, $isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$_context$);
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ == ($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.readOnly || ($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), $event$$359$$.preventDefault()
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ == ($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.readOnly || ($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$5_oldValue$$inline_5332_oldValue$$inline_5335$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5334_JSCompiler_StaticMethods___increaseValue$self$$inline_5331_keyCode$$25$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), $event$$359$$.preventDefault()
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$5$$) {
  var $options$$189$$ = $gauge$$5$$.$__getOptions$(), $thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$5$$), $threshold$$1$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$5$$, $thresholdIndex$$);
  return $threshold$$1$$ && (!($gauge$$5$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$5$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$189$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$5$$, $threshold$$1$$, $thresholdIndex$$) : $options$$189$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$6$$) {
  var $options$$190$$ = $gauge$$6$$.$__getOptions$(), $threshold$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$6$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$6$$));
  return $threshold$$2$$ && $threshold$$2$$.borderColor && (!($gauge$$6$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$6$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$190$$.thresholdDisplay) ? $threshold$$2$$.borderColor : $options$$190$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$7$$) {
  var $options$$191$$ = $gauge$$7$$.$__getOptions$(), $thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$7$$), $threshold$$3$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$7$$, $thresholdIndex$$2$$);
  return $threshold$$3$$ && (!($gauge$$7$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$7$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$191$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$7$$, $threshold$$3$$, $thresholdIndex$$2$$) : $options$$191$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$8$$, $threshold$$4$$, $thresholdIndex$$3$$) {
  if($threshold$$4$$.color) {
    return $threshold$$4$$.color
  }
  if($thresholdIndex$$3$$ < D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$.length) {
    return(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$8$$) ? D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$] : D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$3$$]
  }
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$) {
  return"rectangleAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === 
  $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$) {
  return"needleAntique" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$48$$, $container$$137$$, $availSpace$$84_label$$76$$) {
  var $options$$212$$ = $gauge$$48$$.$__getOptions$(), $emptyTextStr$$1$$ = $options$$212$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($gauge$$48$$.$__getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  var $width$$110$$ = $availSpace$$84_label$$76$$.$w$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, $height$$90$$ = $availSpace$$84_label$$76$$.$h$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$;
  $availSpace$$84_label$$76$$ = new D.$DvtOutputText$$($gauge$$48$$.$_context$, $emptyTextStr$$1$$, $availSpace$$84_label$$76$$.x + $availSpace$$84_label$$76$$.$w$ / 2, $availSpace$$84_label$$76$$.y + $availSpace$$84_label$$76$$.$h$ / 2);
  $options$$212$$.metricLabel.style.$getStyle$("font-size") || $options$$212$$.metricLabel.style.$setStyle$("font-size", "13px");
  $availSpace$$84_label$$76$$.$setCSSStyle$($options$$212$$.metricLabel.style);
  $availSpace$$84_label$$76$$.$alignCenter$();
  $availSpace$$84_label$$76$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($availSpace$$84_label$$76$$, $width$$110$$, $height$$90$$, $container$$137$$) && $availSpace$$84_label$$76$$.$isTruncated$() && $gauge$$48$$.$__getEventManager$().$associate$($availSpace$$84_label$$76$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$1$$))
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$112$$, $gauge$$49$$) {
  var $options$$213$$ = $gauge$$49$$.$__getOptions$(), $isPercent$$ = "percent" == $options$$213$$.metricLabel.textType;
  $isPercent$$ && ($value$$112$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$213$$, $options$$213$$.min, $value$$112$$));
  var $converter$$3$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$213$$.metricLabel.rendered && $options$$213$$.metricLabel.converter && ($converter$$3$$ = $options$$213$$.metricLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$213$$.metricLabel.rendered && $options$$213$$.metricLabel.scaling && ($scaling$$1$$ = $options$$213$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$112$$, $gauge$$49$$, $converter$$3$$, $scaling$$1$$, $options$$213$$.metricLabel.autoPrecision ? $options$$213$$.metricLabel.autoPrecision : "on", $isPercent$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$113$$, $gauge$$50$$) {
  var $options$$214$$ = $gauge$$50$$.$__getOptions$(), $isPercent$$1$$ = "percent" == $options$$214$$.tickLabel.textType;
  $isPercent$$1$$ && ($value$$113$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$214$$, $options$$214$$.min, $value$$113$$));
  var $converter$$4$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$214$$.tickLabel.rendered && $options$$214$$.tickLabel.converter && ($converter$$4$$ = $options$$214$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$214$$.tickLabel.rendered && $options$$214$$.tickLabel.scaling && ($scaling$$2$$ = $options$$214$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$113$$, $gauge$$50$$, $converter$$4$$, $scaling$$2$$, $options$$214$$.tickLabel.autoPrecision ? $options$$214$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($value$$114$$, $gauge$$51_minValue$$14_output$$, $converter$$5$$, $formatter$$1_scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $maxValue$$15_options$$215$$ = $gauge$$51_minValue$$14_output$$.$__getOptions$();
  $gauge$$51_minValue$$14_output$$ = $value$$114$$;
  $gauge$$51_minValue$$14_output$$ = $maxValue$$15_options$$215$$.min;
  var $maxValue$$15_options$$215$$ = $maxValue$$15_options$$215$$.max, $difference$$1$$ = $maxValue$$15_options$$215$$ - $gauge$$51_minValue$$14_output$$, $increment$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$1$$) || ($increment$$ = $difference$$1$$ / (1E3 > $difference$$1$$ ? 100 : 1E3));
  $formatter$$1_scaling$$3$$ = new D.$DvtLinearScaleAxisValueFormatter$$($gauge$$51_minValue$$14_output$$, $maxValue$$15_options$$215$$, $increment$$, $formatter$$1_scaling$$3$$, $autoPrecision$$7$$);
  if($converter$$5$$ && $converter$$5$$.getAsString) {
    $gauge$$51_minValue$$14_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$114$$, $converter$$5$$)
  }else {
    if($converter$$5$$ && $converter$$5$$.format) {
      return $formatter$$1_scaling$$3$$.$format$($value$$114$$, $converter$$5$$)
    }
    $gauge$$51_minValue$$14_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$114$$)
  }
  return $isPercent$$2$$ ? (0,window.String)($gauge$$51_minValue$$14_output$$) + "%" : $gauge$$51_minValue$$14_output$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$216_percentFill$$1$$, $min$$15$$, $value$$115$$) {
  $options$$216_percentFill$$1$$ = ($value$$115$$ - $min$$15$$) / ($options$$216_percentFill$$1$$.max - $options$$216_percentFill$$1$$.min);
  return $options$$216_percentFill$$1$$ = window.Math.min(window.Math.max(0, $options$$216_percentFill$$1$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$52$$) {
  var $options$$217$$ = $gauge$$52$$.$__getOptions$(), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$52$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$52$$));
  return $threshold$$7$$ && $threshold$$7$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$7$$.shortDesc : $options$$217$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$217$$.shortDesc : D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$217$$.value, $gauge$$52$$)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$53_label$$77$$, $container$$138$$, $bounds$$87$$, $color$$50$$) {
  var $i$$534_options$$218$$ = $gauge$$53_label$$77$$.$__getOptions$();
  if("on" == $i$$534_options$$218$$.metricLabel.rendered) {
    var $labelString$$7$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$534_options$$218$$.value, $gauge$$53_label$$77$$), $labelWidth$$5$$ = $bounds$$87$$.$w$, $labelHeight$$6$$ = $bounds$$87$$.$h$;
    $gauge$$53_label$$77$$ = new D.$DvtOutputText$$($gauge$$53_label$$77$$.$_context$, $labelString$$7$$, $bounds$$87$$.x + $bounds$$87$$.$w$ / 2, $bounds$$87$$.y + $bounds$$87$$.$h$ / 2);
    $gauge$$53_label$$77$$.$setCSSStyle$($i$$534_options$$218$$.metricLabel.style);
    var $longestLabel$$3_size$$39$$ = $i$$534_options$$218$$.metricLabel.style.$getStyle$("font-size");
    if(!$i$$534_options$$218$$.metricLabel.style.$getStyle$("font-size")) {
      var $longestLabel$$3_size$$39$$ = window.Math.max($i$$534_options$$218$$.max.toString().length, $i$$534_options$$218$$.min.toString().length, $labelString$$7$$.length), $maxString$$3$$ = "";
      "percent" == $i$$534_options$$218$$.metricLabel.textType && ($longestLabel$$3_size$$39$$ = window.Math.max(3, $labelString$$7$$.length), $maxString$$3$$ += "%");
      for($i$$534_options$$218$$ = 0;$i$$534_options$$218$$ < $longestLabel$$3_size$$39$$;$i$$534_options$$218$$++) {
        $maxString$$3$$ += "0"
      }
      $gauge$$53_label$$77$$.$setTextString$($maxString$$3$$);
      $longestLabel$$3_size$$39$$ = $gauge$$53_label$$77$$.$getOptimalFontSize$($bounds$$87$$);
      $gauge$$53_label$$77$$.$setTextString$($labelString$$7$$);
      $gauge$$53_label$$77$$.$setFontSize$($longestLabel$$3_size$$39$$)
    }
    $gauge$$53_label$$77$$.$alignMiddle$();
    $gauge$$53_label$$77$$.$alignCenter$();
    $color$$50$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$53_label$$77$$.$setSolidFill$($color$$50$$);
    D.$DvtTextUtils$$.$fitText$($gauge$$53_label$$77$$, $labelWidth$$5$$, $labelHeight$$6$$, $container$$138$$) && $gauge$$53_label$$77$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$219$$, $value$$116$$) {
  var $step$$2$$ = (0,window.Number)($options$$219$$.step);
  if($step$$2$$ && 0 < $step$$2$$) {
    var $stepNum$$ = ($value$$116$$ - $options$$219$$.min) / $step$$2$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$219$$.max, window.Math.round($stepNum$$) * $step$$2$$ + $options$$219$$.min), $options$$219$$.min) : $options$$219$$.min
  }
  return $value$$116$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$359$$, $callback$$124$$, $callbackObj$$97$$, $bStaticRendering$$1$$) {
  var $gauge$$58$$ = new D.$DvtLedGauge$$;
  $gauge$$58$$.Init($context$$359$$, $callback$$124$$, $callbackObj$$97$$, $bStaticRendering$$1$$);
  return $gauge$$58$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$360$$, $callback$$125$$, $callbackObj$$98$$, $bStaticRendering$$2$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$360$$, $callback$$125$$, $callbackObj$$98$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$253$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$253$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$159$$, $width$$133$$, $height$$113$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$159$$, $width$$133$$, $height$$113$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$9$$, $container$$113$$, $bounds$$54_width$$103$$, $height$$83_labelColor$$1$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$9$$)) {
    var $options$$192$$ = $gauge$$9$$.$__getOptions$(), $outerGap$$ = $options$$192$$.__layout.outerGap, $size$$35$$ = $options$$192$$ && (0 <= $options$$192$$.size || 1 > $options$$192$$.size) ? window.Math.sqrt($options$$192$$.size) : 1;
    $bounds$$54_width$$103$$ = new D.$DvtRectangle$$($outerGap$$ + ($bounds$$54_width$$103$$ - 2 * $outerGap$$) * (1 - $size$$35$$) / 2, $outerGap$$ + ($height$$83_labelColor$$1$$ - 2 * $outerGap$$) * (1 - $size$$35$$) / 2, ($bounds$$54_width$$103$$ - 2 * $outerGap$$) * $size$$35$$, ($height$$83_labelColor$$1$$ - 2 * $outerGap$$) * $size$$35$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$9$$, $container$$113$$, $bounds$$54_width$$103$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$9$$, $container$$113$$, $bounds$$54_width$$103$$);
    "on" == $options$$192$$.metricLabel.rendered && (D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$192$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$9$$, $container$$113$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$9$$, $bounds$$54_width$$103$$), D.$JSCompiler_alias_NULL$$) : ($height$$83_labelColor$$1$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$9$$)), 
    $options$$192$$.metricLabel.style.$setStyle$("color", $height$$83_labelColor$$1$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$9$$, $container$$113$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$9$$, $bounds$$54_width$$103$$), $height$$83_labelColor$$1$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$9$$, $container$$113$$, new D.$DvtRectangle$$(0, 0, $bounds$$54_width$$103$$, $height$$83_labelColor$$1$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$10$$, $container$$114$$, $bounds$$55$$) {
  var $context$$285_shape$$34$$ = $gauge$$10$$.$_context$, $options$$193$$ = $gauge$$10$$.$__getOptions$(), $type$$129$$ = $options$$193$$.type, $color$$44$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$10$$), $borderColor$$28_eventManager$$18$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$10$$), $arColors$$8_cx$$17_tooltip$$23$$ = $bounds$$55$$.x + $bounds$$55$$.$w$ / 2, $cy$$17_rotation$$6$$ = $bounds$$55$$.y + $bounds$$55$$.$h$ / 2, $r$$35$$ = window.Math.min($bounds$$55$$.$w$, $bounds$$55$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$10$$), $cmds$$7$$, $scale$$57$$ = window.Math.min($bounds$$55$$.$w$ / 100, $bounds$$55$$.$h$ / 100);
  "rectangle" == $type$$129$$ ? $context$$285_shape$$34$$ = new D.$DvtRect$$($context$$285_shape$$34$$, $bounds$$55$$.x, $bounds$$55$$.y, $bounds$$55$$.$w$, $bounds$$55$$.$h$) : "diamond" == $type$$129$$ ? $context$$285_shape$$34$$ = new D.$DvtPolygon$$($context$$285_shape$$34$$, [$arColors$$8_cx$$17_tooltip$$23$$ - $r$$35$$, $cy$$17_rotation$$6$$, $arColors$$8_cx$$17_tooltip$$23$$, $cy$$17_rotation$$6$$ - $r$$35$$, $arColors$$8_cx$$17_tooltip$$23$$ + $r$$35$$, $cy$$17_rotation$$6$$, $arColors$$8_cx$$17_tooltip$$23$$, 
  $cy$$17_rotation$$6$$ + $r$$35$$]) : "star" == $type$$129$$ || "triangle" == $type$$129$$ || "arrow" == $type$$129$$ ? ("star" == $type$$129$$ ? $cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$129$$ ? $cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$129$$ && ($cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : 
  D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$), $isSkyros$$ && "triangle" == $type$$129$$ || $isSkyros$$ && "arrow" == $type$$129$$ ? ($cmds$$7$$ = D.$DvtPathUtils$$.$transformPath$($cmds$$7$$, $bounds$$55$$.x + $bounds$$55$$.$w$ / 2, $bounds$$55$$.y + $bounds$$55$$.$h$ / 2, $scale$$57$$, $scale$$57$$), $context$$285_shape$$34$$ = new D.$DvtPath$$($context$$285_shape$$34$$, $cmds$$7$$)) : ($cmds$$7$$ = D.$DvtPolygonUtils$$.scale($cmds$$7$$, $scale$$57$$, $scale$$57$$), $cmds$$7$$ = D.$DvtPolygonUtils$$.translate($cmds$$7$$, 
  $bounds$$55$$.x + $bounds$$55$$.$w$ / 2, $bounds$$55$$.y + $bounds$$55$$.$h$ / 2), $context$$285_shape$$34$$ = new D.$DvtPolygon$$($context$$285_shape$$34$$, $cmds$$7$$))) : $context$$285_shape$$34$$ = new D.$DvtCircle$$($context$$285_shape$$34$$, $arColors$$8_cx$$17_tooltip$$23$$, $cy$$17_rotation$$6$$, $r$$35$$);
  $isSkyros$$ || "none" == $options$$193$$.visualEffects ? $context$$285_shape$$34$$.$setSolidFill$($color$$44$$) : ($arColors$$8_cx$$17_tooltip$$23$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$44$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$44$$, -0.04, -0.05)], $cy$$17_rotation$$6$$ = $options$$193$$ && 0 == $options$$193$$.rotation % 90 ? $options$$193$$.rotation : 0, $context$$285_shape$$34$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == $type$$129$$ || "star" == $type$$129$$ || 
  "triangle" == $type$$129$$ ? $cy$$17_rotation$$6$$ - 90 : 270, $arColors$$8_cx$$17_tooltip$$23$$, [1, 1], [0, 1])));
  $borderColor$$28_eventManager$$18$$ && $context$$285_shape$$34$$.$setSolidStroke$($borderColor$$28_eventManager$$18$$);
  $borderColor$$28_eventManager$$18$$ = $gauge$$10$$.$__getEventManager$();
  ($arColors$$8_cx$$17_tooltip$$23$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$10$$)) && $borderColor$$28_eventManager$$18$$ && $borderColor$$28_eventManager$$18$$.$associate$($context$$285_shape$$34$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $arColors$$8_cx$$17_tooltip$$23$$, $color$$44$$));
  $cy$$17_rotation$$6$$ = $isSkyros$$ ? $options$$193$$.rotation + 90 : $options$$193$$.rotation;
  if(0 != $cy$$17_rotation$$6$$ && ("arrow" == $type$$129$$ || "triangle" == $type$$129$$)) {
    $context$$285_shape$$34$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$10$$, $container$$114$$, $context$$285_shape$$34$$, $bounds$$55$$)
  }
  $container$$114$$.$addChild$($context$$285_shape$$34$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$11_translateGroup$$, $container$$115_groupDims_matrix$$12_rotation$$7$$, $shape$$35_tx$$18$$, $bounds$$56_ty$$18$$) {
  var $options$$194_rotationMatrix$$2$$ = $gauge$$11_translateGroup$$.$__getOptions$();
  $gauge$$11_translateGroup$$ = new D.$DvtContainer$$($gauge$$11_translateGroup$$.$_context$);
  $container$$115_groupDims_matrix$$12_rotation$$7$$.$addChild$($gauge$$11_translateGroup$$);
  $gauge$$11_translateGroup$$.$addChild$($shape$$35_tx$$18$$);
  $container$$115_groupDims_matrix$$12_rotation$$7$$ = $options$$194_rotationMatrix$$2$$ && 0 == $options$$194_rotationMatrix$$2$$.rotation % 90 ? $options$$194_rotationMatrix$$2$$.rotation : 0;
  $options$$194_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$194_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$115_groupDims_matrix$$12_rotation$$7$$ / 180);
  $shape$$35_tx$$18$$.$setMatrix$($options$$194_rotationMatrix$$2$$);
  $container$$115_groupDims_matrix$$12_rotation$$7$$ = $gauge$$11_translateGroup$$.$getDimensions$();
  $shape$$35_tx$$18$$ = $bounds$$56_ty$$18$$.x + $bounds$$56_ty$$18$$.$w$ / 2 - ($container$$115_groupDims_matrix$$12_rotation$$7$$.x + $container$$115_groupDims_matrix$$12_rotation$$7$$.$w$ / 2);
  $bounds$$56_ty$$18$$ = $bounds$$56_ty$$18$$.y + $bounds$$56_ty$$18$$.$h$ / 2 - ($container$$115_groupDims_matrix$$12_rotation$$7$$.y + $container$$115_groupDims_matrix$$12_rotation$$7$$.$h$ / 2);
  $container$$115_groupDims_matrix$$12_rotation$$7$$ = new D.$DvtMatrix$$;
  $container$$115_groupDims_matrix$$12_rotation$$7$$.translate($shape$$35_tx$$18$$, $bounds$$56_ty$$18$$);
  $gauge$$11_translateGroup$$.$setMatrix$($container$$115_groupDims_matrix$$12_rotation$$7$$);
  return $gauge$$11_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$12$$, $container$$116$$, $bounds$$57$$) {
  var $options$$195$$ = $gauge$$12$$.$__getOptions$(), $type$$130$$ = $options$$195$$.type;
  "none" != $options$$195$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$12$$) && ("rectangle" == $type$$130$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$12$$, $container$$116$$, $bounds$$57$$) : "diamond" == $type$$130$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$12$$, $container$$116$$, $bounds$$57$$) : "triangle" == $type$$130$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$12$$, $container$$116$$, $bounds$$57$$) : "star" == $type$$130$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$12$$, $container$$116$$) : "arrow" == $type$$130$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$12$$, $container$$116$$, $bounds$$57$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$12$$, $container$$116$$, $bounds$$57$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$13_overlay$$8$$, $container$$117_gradient$$2$$, $bounds$$58_overlayBounds$$1$$) {
  var $dx$$9$$ = 0.05 * $bounds$$58_overlayBounds$$1$$.$w$, $dy$$9$$ = 0.05 * $bounds$$58_overlayBounds$$1$$.$h$;
  $bounds$$58_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$58_overlayBounds$$1$$.x + $dx$$9$$, $bounds$$58_overlayBounds$$1$$.y + $dy$$9$$, $bounds$$58_overlayBounds$$1$$.$w$ - 2 * $dx$$9$$, $bounds$$58_overlayBounds$$1$$.$h$ - 2 * $dy$$9$$);
  $gauge$$13_overlay$$8$$ = new D.$DvtRect$$($gauge$$13_overlay$$8$$.$_context$, $bounds$$58_overlayBounds$$1$$.x, $bounds$$58_overlayBounds$$1$$.y, $bounds$$58_overlayBounds$$1$$.$w$, $bounds$$58_overlayBounds$$1$$.$h$);
  $gauge$$13_overlay$$8$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$117_gradient$$2$$.$addChild$($gauge$$13_overlay$$8$$);
  $container$$117_gradient$$2$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$13_overlay$$8$$.$setFill$($container$$117_gradient$$2$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$14_overlay$$9$$, $container$$118_gradient$$3$$, $bounds$$59_cx$$18$$) {
  var $cy$$18_dx$$10$$ = 0.05 * $bounds$$59_cx$$18$$.$w$, $dy$$10_overlayBounds$$2_r$$36$$ = 0.05 * $bounds$$59_cx$$18$$.$h$, $dy$$10_overlayBounds$$2_r$$36$$ = new D.$DvtRectangle$$($bounds$$59_cx$$18$$.x + $cy$$18_dx$$10$$, $bounds$$59_cx$$18$$.y + $dy$$10_overlayBounds$$2_r$$36$$, $bounds$$59_cx$$18$$.$w$ - 2 * $cy$$18_dx$$10$$, $bounds$$59_cx$$18$$.$h$ - 2 * $dy$$10_overlayBounds$$2_r$$36$$);
  $bounds$$59_cx$$18$$ = $dy$$10_overlayBounds$$2_r$$36$$.x + $dy$$10_overlayBounds$$2_r$$36$$.$w$ / 2;
  $cy$$18_dx$$10$$ = $dy$$10_overlayBounds$$2_r$$36$$.y + $dy$$10_overlayBounds$$2_r$$36$$.$h$ / 2;
  $dy$$10_overlayBounds$$2_r$$36$$ = window.Math.min($dy$$10_overlayBounds$$2_r$$36$$.$w$, $dy$$10_overlayBounds$$2_r$$36$$.$h$) / 2;
  $gauge$$14_overlay$$9$$ = new D.$DvtPolygon$$($gauge$$14_overlay$$9$$.$_context$, [$bounds$$59_cx$$18$$ - $dy$$10_overlayBounds$$2_r$$36$$, $cy$$18_dx$$10$$, $bounds$$59_cx$$18$$, $cy$$18_dx$$10$$ - $dy$$10_overlayBounds$$2_r$$36$$, $bounds$$59_cx$$18$$ + $dy$$10_overlayBounds$$2_r$$36$$, $cy$$18_dx$$10$$, $bounds$$59_cx$$18$$, $cy$$18_dx$$10$$ + $dy$$10_overlayBounds$$2_r$$36$$]);
  $gauge$$14_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$118_gradient$$3$$.$addChild$($gauge$$14_overlay$$9$$);
  $container$$118_gradient$$3$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$14_overlay$$9$$.$setFill$($container$$118_gradient$$3$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$15$$, $container$$119$$, $bounds$$60_overlay$$10$$) {
  var $dx$$11_overlayBounds$$3$$ = 0.05 * $bounds$$60_overlay$$10$$.$w$, $cmds$$8_dy$$11_options$$196_rotation$$8$$ = 0.05 * $bounds$$60_overlay$$10$$.$h$, $gradient$$4_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$15$$), $dx$$11_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$60_overlay$$10$$.x + $dx$$11_overlayBounds$$3$$, $bounds$$60_overlay$$10$$.y + $cmds$$8_dy$$11_options$$196_rotation$$8$$, $bounds$$60_overlay$$10$$.$w$ - 2 * $dx$$11_overlayBounds$$3$$, $bounds$$60_overlay$$10$$.$h$ - 
  2 * $cmds$$8_dy$$11_options$$196_rotation$$8$$), $cmds$$8_dy$$11_options$$196_rotation$$8$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$58$$ = window.Math.min($dx$$11_overlayBounds$$3$$.$w$ / 100, $dx$$11_overlayBounds$$3$$.$h$ / 100), $cmds$$8_dy$$11_options$$196_rotation$$8$$ = D.$DvtPolygonUtils$$.scale($cmds$$8_dy$$11_options$$196_rotation$$8$$, $scale$$58$$, $scale$$58$$), $cmds$$8_dy$$11_options$$196_rotation$$8$$ = D.$DvtPolygonUtils$$.translate($cmds$$8_dy$$11_options$$196_rotation$$8$$, 
  $bounds$$60_overlay$$10$$.x + $bounds$$60_overlay$$10$$.$w$ / 2, $bounds$$60_overlay$$10$$.y + $bounds$$60_overlay$$10$$.$h$ / 2);
  $bounds$$60_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$15$$.$_context$, $cmds$$8_dy$$11_options$$196_rotation$$8$$);
  $cmds$$8_dy$$11_options$$196_rotation$$8$$ = ($cmds$$8_dy$$11_options$$196_rotation$$8$$ = $gauge$$15$$.$__getOptions$()) && 0 == $cmds$$8_dy$$11_options$$196_rotation$$8$$.rotation % 90 ? $cmds$$8_dy$$11_options$$196_rotation$$8$$.rotation : 0;
  $gradient$$4_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$4_isSkyros$$1$$ ? $cmds$$8_dy$$11_options$$196_rotation$$8$$ - 90 : 360 - $cmds$$8_dy$$11_options$$196_rotation$$8$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$60_overlay$$10$$.$setFill$($gradient$$4_isSkyros$$1$$);
  $bounds$$60_overlay$$10$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$15$$, $container$$119$$, $bounds$$60_overlay$$10$$, $dx$$11_overlayBounds$$3$$);
  $bounds$$60_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$119$$.$addChild$($bounds$$60_overlay$$10$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$16$$, $container$$120$$, $bounds$$61_overlay$$11$$) {
  var $dx$$12_overlayBounds$$4$$ = 0.05 * $bounds$$61_overlay$$11$$.$w$, $cmds$$9_dy$$12_options$$197_rotation$$9$$ = 0.05 * $bounds$$61_overlay$$11$$.$h$, $gradient$$5_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$16$$), $dx$$12_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$61_overlay$$11$$.x + $dx$$12_overlayBounds$$4$$, $bounds$$61_overlay$$11$$.y + $cmds$$9_dy$$12_options$$197_rotation$$9$$, $bounds$$61_overlay$$11$$.$w$ - 2 * $dx$$12_overlayBounds$$4$$, $bounds$$61_overlay$$11$$.$h$ - 
  2 * $cmds$$9_dy$$12_options$$197_rotation$$9$$), $cmds$$9_dy$$12_options$$197_rotation$$9$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$59$$ = window.Math.min($dx$$12_overlayBounds$$4$$.$w$ / 100, $dx$$12_overlayBounds$$4$$.$h$ / 100), $cmds$$9_dy$$12_options$$197_rotation$$9$$ = D.$DvtPolygonUtils$$.scale($cmds$$9_dy$$12_options$$197_rotation$$9$$, $scale$$59$$, $scale$$59$$), $cmds$$9_dy$$12_options$$197_rotation$$9$$ = D.$DvtPolygonUtils$$.translate($cmds$$9_dy$$12_options$$197_rotation$$9$$, 
  $bounds$$61_overlay$$11$$.x + $bounds$$61_overlay$$11$$.$w$ / 2, $bounds$$61_overlay$$11$$.y + $bounds$$61_overlay$$11$$.$h$ / 2);
  $bounds$$61_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$16$$.$_context$, $cmds$$9_dy$$12_options$$197_rotation$$9$$);
  $cmds$$9_dy$$12_options$$197_rotation$$9$$ = ($cmds$$9_dy$$12_options$$197_rotation$$9$$ = $gauge$$16$$.$__getOptions$()) && 0 == $cmds$$9_dy$$12_options$$197_rotation$$9$$.rotation % 90 ? $cmds$$9_dy$$12_options$$197_rotation$$9$$.rotation : 0;
  $gradient$$5_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$5_isSkyros$$2$$ ? $cmds$$9_dy$$12_options$$197_rotation$$9$$ - 90 : 360 - $cmds$$9_dy$$12_options$$197_rotation$$9$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$61_overlay$$11$$.$setFill$($gradient$$5_isSkyros$$2$$);
  $bounds$$61_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$16$$, $container$$120$$, $bounds$$61_overlay$$11$$, $dx$$12_overlayBounds$$4$$);
  $bounds$$61_overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$120$$.$addChild$($bounds$$61_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$17$$, $container$$121$$) {
  var $overlay$$12$$ = new D.$DvtPath$$($gauge$$17$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $gradient$$6_gradientRotation$$3_options$$198$$ = $gauge$$17$$.$__getOptions$(), $gradient$$6_gradientRotation$$3_options$$198$$ = 360 - ($gradient$$6_gradientRotation$$3_options$$198$$ && 0 == $gradient$$6_gradientRotation$$3_options$$198$$.rotation % 90 ? $gradient$$6_gradientRotation$$3_options$$198$$.rotation : 0), $arColors$$13_color$$45$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$17$$), 
  $arColors$$13_color$$45$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$13_color$$45$$, 0.9), $arColors$$13_color$$45$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$13_color$$45$$)], $gradient$$6_gradientRotation$$3_options$$198$$ = new D.$DvtLinearGradientFill$$($gradient$$6_gradientRotation$$3_options$$198$$, $arColors$$13_color$$45$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $overlay$$12$$.$setFill$($gradient$$6_gradientRotation$$3_options$$198$$);
  $overlay$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$121$$.$addChild$($overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$18_highlight$$, $container$$122_highlightGradient$$, $bounds$$63_gradientBounds$$) {
  var $cx$$19_dx$$14$$ = 0.05 * $bounds$$63_gradientBounds$$.$w$, $cy$$19_dy$$14$$ = 0.05 * $bounds$$63_gradientBounds$$.$h$;
  $bounds$$63_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$63_gradientBounds$$.x + $cx$$19_dx$$14$$, $bounds$$63_gradientBounds$$.y + $cy$$19_dy$$14$$, $bounds$$63_gradientBounds$$.$w$ - 2 * $cx$$19_dx$$14$$, $bounds$$63_gradientBounds$$.$h$ - 2 * $cy$$19_dy$$14$$);
  var $cx$$19_dx$$14$$ = $bounds$$63_gradientBounds$$.x + $bounds$$63_gradientBounds$$.$w$ / 2, $cy$$19_dy$$14$$ = $bounds$$63_gradientBounds$$.y + $bounds$$63_gradientBounds$$.$h$ / 2, $radius$$21_ry$$13$$ = window.Math.min($bounds$$63_gradientBounds$$.$w$, $bounds$$63_gradientBounds$$.$h$) / 2, $overlay$$13_rx$$17$$ = new D.$DvtCircle$$($gauge$$18_highlight$$.$_context$, $cx$$19_dx$$14$$, $cy$$19_dy$$14$$, $radius$$21_ry$$13$$);
  $overlay$$13_rx$$17$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$122_highlightGradient$$.$addChild$($overlay$$13_rx$$17$$);
  var $gradient$$7$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$19_dx$$14$$, $cy$$19_dy$$14$$ - 0.6 * $radius$$21_ry$$13$$, 1.5 * $radius$$21_ry$$13$$, [$bounds$$63_gradientBounds$$.x, $bounds$$63_gradientBounds$$.y, $bounds$$63_gradientBounds$$.$w$, $bounds$$63_gradientBounds$$.$h$]);
  $overlay$$13_rx$$17$$.$setFill$($gradient$$7$$);
  $overlay$$13_rx$$17$$ = 0.6 * $radius$$21_ry$$13$$;
  $radius$$21_ry$$13$$ *= 0.4;
  $cy$$19_dy$$14$$ -= 0.3 * $radius$$21_ry$$13$$;
  $gauge$$18_highlight$$ = new D.$DvtOval$$($gauge$$18_highlight$$.$_context$, $cx$$19_dx$$14$$, $cy$$19_dy$$14$$ - $radius$$21_ry$$13$$, $overlay$$13_rx$$17$$, $radius$$21_ry$$13$$);
  $gauge$$18_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$122_highlightGradient$$.$addChild$($gauge$$18_highlight$$);
  $container$$122_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$19_dx$$14$$, $cy$$19_dy$$14$$, $overlay$$13_rx$$17$$, [$bounds$$63_gradientBounds$$.x, $bounds$$63_gradientBounds$$.y, $bounds$$63_gradientBounds$$.$w$, $bounds$$63_gradientBounds$$.$h$]);
  $gauge$$18_highlight$$.$setFill$($container$$122_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$19$$, $bounds$$64$$) {
  var $options$$199_rotation$$11$$ = $gauge$$19$$.$__getOptions$(), $type$$131$$ = $options$$199_rotation$$11$$.type, $options$$199_rotation$$11$$ = 0 == $options$$199_rotation$$11$$.rotation % 90 ? $options$$199_rotation$$11$$.rotation : 0, $minDim$$1$$ = window.Math.min($bounds$$64$$.$w$, $bounds$$64$$.$h$), $newX$$5$$ = $bounds$$64$$.x + $bounds$$64$$.$w$ / 2 - $minDim$$1$$ / 2, $newY$$6$$ = $bounds$$64$$.y + $bounds$$64$$.$h$ / 2 - $minDim$$1$$ / 2, $newWidth$$4$$ = $minDim$$1$$, $newHeight$$1$$ = 
  $minDim$$1$$;
  "triangle" == $type$$131$$ ? 0 == $options$$199_rotation$$11$$ ? ($newX$$5$$ += 0.2 * $minDim$$1$$, $newY$$6$$ += 0.25 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : 90 == $options$$199_rotation$$11$$ ? ($newX$$5$$ += 0.05 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$199_rotation$$11$$ ? ($newX$$5$$ += 0.2 * $minDim$$1$$, $newY$$6$$ += 0.05 * $minDim$$1$$, 
  $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : 270 == $options$$199_rotation$$11$$ && ($newX$$5$$ += 0.25 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : "arrow" == $type$$131$$ ? 0 == $options$$199_rotation$$11$$ ? ($newX$$5$$ += 0.2 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 90 == $options$$199_rotation$$11$$ ? 
  ($newX$$5$$ += 0.05 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.28 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$199_rotation$$11$$ ? ($newX$$5$$ += 0.2 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 270 == $options$$199_rotation$$11$$ && ($newX$$5$$ += 0.23 * $minDim$$1$$, $newY$$6$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.28 * $minDim$$1$$, $newHeight$$1$$ -= 
  0.4 * $minDim$$1$$) : "star" == $type$$131$$ ? ($newX$$5$$ += 0.25 * $minDim$$1$$, $newY$$6$$ += 0.25 * $minDim$$1$$, $newWidth$$4$$ -= 0.5 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : "diamond" == $type$$131$$ ? ($newX$$5$$ += 0.15 * $minDim$$1$$, $newY$$6$$ += 0.15 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : "rectangle" == $type$$131$$ ? ($newX$$5$$ += 0.1 * $minDim$$1$$, $newY$$6$$ += 0.1 * $minDim$$1$$, $newWidth$$4$$ -= 0.2 * $minDim$$1$$, 
  $newHeight$$1$$ -= 0.2 * $minDim$$1$$) : "circle" == $type$$131$$ && ($newX$$5$$ += 0.15 * $minDim$$1$$, $newY$$6$$ += 0.15 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$);
  return new D.$DvtRectangle$$($newX$$5$$, $newY$$6$$, $newWidth$$4$$, $newHeight$$1$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$newInstance$$ = function $$DvtStatusMeterGauge$newInstance$$$($context$$351$$, $callback$$117$$, $callbackObj$$90$$) {
  var $gauge$$55$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$55$$.Init($context$$351$$, $callback$$117$$, $callbackObj$$90$$);
  return $gauge$$55$$
};
D.$DvtStatusMeterGauge$$.newInstance = D.$DvtStatusMeterGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$352$$, $callback$$118$$, $callbackObj$$91$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$352$$, $callback$$118$$, $callbackObj$$91$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$248$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$248$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$152$$, $width$$127$$, $height$$107$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$152$$, $width$$127$$, $height$$107$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$5$$, $animatedObjs_animationType$$, $animationDuration$$4$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$600$$ = 0;$i$$600$$ < $objs$$5$$.length;$i$$600$$++) {
    var $obj$$175$$ = $objs$$5$$[$i$$600$$], $endState$$14$$ = $obj$$175$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$175$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[0], $endState$$14$$[2], $endState$$14$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$175$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[1], $endState$$14$$[3], $endState$$14$$[3]]) : "circular" == this.$Options$.orientation && $obj$$175$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[1], 0, $endState$$14$$[3], $endState$$14$$[4]]);
    var $animation$$4$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$175$$, $animationDuration$$4$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$4$$.$_animator$, "typeNumberArray", $obj$$175$$, $obj$$175$$.$getAnimationParams$, $obj$$175$$.$setAnimationParams$, $endState$$14$$);
    $animation$$4$$.$_animator$.$setEasing$(function($objs$$5$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$5$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$4$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$211$$, $y$$181$$) {
  if("horizontal" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$211$$)
  }
  if("vertical" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$181$$)
  }
  if("circular" == this.$Options$.orientation) {
    var $angle$$38$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$181$$ - this.$Height$ / 2, $x$$211$$ - this.$Width$ / 2)) - 270, $angle$$38$$ = ($angle$$38$$ + 720) % 360;
    0 <= $angle$$38$$ && 360 >= $angle$$38$$ || ($angle$$38$$ = 360 < $angle$$38$$ ? 360 - $angle$$38$$ < $angle$$38$$ - 360 ? 0 : 360 : 0 - $angle$$38$$ < $angle$$38$$ ? 0 : 360);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      for($angle$$38$$ = 360 - $angle$$38$$;0 > $angle$$38$$;) {
        $angle$$38$$ += 360
      }
    }
    var $minValue$$16$$ = this.$Options$.min;
    return $angle$$38$$ / 360 * (this.$Options$.max - $minValue$$16$$) + $minValue$$16$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {color:"#313842", indicatorSize:1, metricLabel:{style:new D.$DvtCSSStyle$$("color: #333333;")}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto"}, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$21$$, $container$$125$$, $bounds$$66_width$$105$$, $height$$85$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$21$$)) {
    var $maxDiameter$$1_options$$201$$ = $gauge$$21$$.$__getOptions$(), $outerGap$$2$$ = $maxDiameter$$1_options$$201$$.__layout.outerGap;
    $bounds$$66_width$$105$$ = new D.$DvtRectangle$$($outerGap$$2$$, $outerGap$$2$$, $bounds$$66_width$$105$$ - 2 * $outerGap$$2$$, $height$$85$$ - 2 * $outerGap$$2$$);
    "horizontal" == $maxDiameter$$1_options$$201$$.orientation || "vertical" == $maxDiameter$$1_options$$201$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$21$$, $container$$125$$, $bounds$$66_width$$105$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$21$$, $container$$125$$, $bounds$$66_width$$105$$)) : "circular" == $maxDiameter$$1_options$$201$$.orientation && ($maxDiameter$$1_options$$201$$ = window.Math.min($bounds$$66_width$$105$$.$w$, $bounds$$66_width$$105$$.$h$), 
    D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$21$$, $container$$125$$, new D.$DvtRectangle$$($bounds$$66_width$$105$$.x + $bounds$$66_width$$105$$.$w$ / 2 - 0.325 * $maxDiameter$$1_options$$201$$, $bounds$$66_width$$105$$.y + $bounds$$66_width$$105$$.$h$ / 2 - 0.25 * $maxDiameter$$1_options$$201$$, 0.65 * $maxDiameter$$1_options$$201$$, 0.5 * $maxDiameter$$1_options$$201$$), D.$JSCompiler_alias_NULL$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$($gauge$$21$$, $container$$125$$, $bounds$$66_width$$105$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$21$$, $container$$125$$, new D.$DvtRectangle$$(0, 0, $bounds$$66_width$$105$$, $height$$85$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularShape$$($gauge$$22$$, $container$$126_tooltip$$25$$, $bounds$$67_overlayRect$$1$$) {
  var $options$$202$$ = $gauge$$22$$.$__getOptions$(), $angleExtent$$6_max$$14_percentFill$$ = 0, $angle$$31_value$$109$$ = $options$$202$$.value, $indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$202$$.thresholds, $maxDiameter$$2_referenceLineColor_totalWidth$$6$$ = window.Math.min($bounds$$67_overlayRect$$1$$.$w$, $bounds$$67_overlayRect$$1$$.$h$), $innerRadius$$2_referenceObjects$$1$$ = 0.3125 * $maxDiameter$$2_referenceLineColor_totalWidth$$6$$, $i$$527_outerRadius$$2$$ = 0.4625 * 
  $maxDiameter$$2_referenceLineColor_totalWidth$$6$$, $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI, $angleExtent$$6_max$$14_percentFill$$ = 2 * $angleExtent$$6_max$$14_percentFill$$ * window.Math.PI;
  if($indicatorSize_referenceLineWidth_thresholds$$2$$ && "off" != $options$$202$$.plotArea.rendered && "all" == $options$$202$$.thresholdDisplay) {
    for(var $currentThresholdIndex$$ = 0;$currentThresholdIndex$$ < $indicatorSize_referenceLineWidth_thresholds$$2$$.length;$currentThresholdIndex$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$22$$, $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$], $currentThresholdIndex$$), $angleExtent$$6_max$$14_percentFill$$ = $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max ? $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max : $options$$202$$.max, $min$$14$$ = 0 == $currentThresholdIndex$$ ? $options$$202$$.min : $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$ - 
      1].max, $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI + 2 * window.Math.PI * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$202$$, $options$$202$$.min, $min$$14$$), $angleExtent$$6_max$$14_percentFill$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$202$$, $min$$14$$, $angleExtent$$6_max$$14_percentFill$$), $angleExtent$$6_max$$14_percentFill$$ = 2 * $angleExtent$$6_max$$14_percentFill$$ * window.Math.PI;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$22$$, $container$$126_tooltip$$25$$, $bounds$$67_overlayRect$$1$$, $referenceLineStyle_startAngle$$6$$, $angleExtent$$6_max$$14_percentFill$$, $innerRadius$$2_referenceObjects$$1$$, $i$$527_outerRadius$$2$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    "off" != $options$$202$$.plotArea.rendered && (!("auto" == $options$$202$$.plotArea.rendered && "onIndicator" == $options$$202$$.thresholdDisplay) && "all" != $options$$202$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$22$$), $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI, $angleExtent$$6_max$$14_percentFill$$ = 2 * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$22$$, $container$$126_tooltip$$25$$, $bounds$$67_overlayRect$$1$$, 
    $referenceLineStyle_startAngle$$6$$, $angleExtent$$6_max$$14_percentFill$$, $innerRadius$$2_referenceObjects$$1$$, $i$$527_outerRadius$$2$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  if(($indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$202$$.indicatorSize) && 1 != $indicatorSize_referenceLineWidth_thresholds$$2$$) {
    $maxDiameter$$2_referenceLineColor_totalWidth$$6$$ *= 0.075 * (1 - $indicatorSize_referenceLineWidth_thresholds$$2$$), $innerRadius$$2_referenceObjects$$1$$ += $maxDiameter$$2_referenceLineColor_totalWidth$$6$$, $i$$527_outerRadius$$2$$ -= $maxDiameter$$2_referenceLineColor_totalWidth$$6$$
  }
  $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI;
  $angleExtent$$6_max$$14_percentFill$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$202$$, $options$$202$$.min, $angle$$31_value$$109$$);
  $angleExtent$$6_max$$14_percentFill$$ = 2 * $angleExtent$$6_max$$14_percentFill$$ * window.Math.PI;
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$22$$, $container$$126_tooltip$$25$$, $bounds$$67_overlayRect$$1$$, $referenceLineStyle_startAngle$$6$$, $angleExtent$$6_max$$14_percentFill$$, $innerRadius$$2_referenceObjects$$1$$, $i$$527_outerRadius$$2$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$22$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$2_referenceObjects$$1$$ = $options$$202$$.referenceLines) {
    for($i$$527_outerRadius$$2$$ = 0;$i$$527_outerRadius$$2$$ < $innerRadius$$2_referenceObjects$$1$$.length;$i$$527_outerRadius$$2$$++) {
      $maxDiameter$$2_referenceLineColor_totalWidth$$6$$ = $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].color ? $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].color : "black", $indicatorSize_referenceLineWidth_thresholds$$2$$ = $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].lineWidth ? $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].lineWidth : 2, $referenceLineStyle_startAngle$$6$$ = $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].lineStyle, 
      $angle$$31_value$$109$$ = $innerRadius$$2_referenceObjects$$1$$[$i$$527_outerRadius$$2$$].value, $angle$$31_value$$109$$ = 1.5 * window.Math.PI + 2 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$202$$, $options$$202$$.min, $angle$$31_value$$109$$) * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$22$$, $container$$126_tooltip$$25$$, $bounds$$67_overlayRect$$1$$, $angle$$31_value$$109$$, $maxDiameter$$2_referenceLineColor_totalWidth$$6$$, $indicatorSize_referenceLineWidth_thresholds$$2$$, 
      $referenceLineStyle_startAngle$$6$$)
    }
  }
  $bounds$$67_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$22$$.$_context$, $bounds$$67_overlayRect$$1$$.x, $bounds$$67_overlayRect$$1$$.y, $bounds$$67_overlayRect$$1$$.$w$, $bounds$$67_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$67_overlayRect$$1$$);
  $container$$126_tooltip$$25$$.$addChild$($bounds$$67_overlayRect$$1$$);
  (($container$$126_tooltip$$25$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$22$$)) || $gauge$$22$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$22$$.$__getEventManager$().$associate$($bounds$$67_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$126_tooltip$$25$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$22$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$23$$, $container$$127_tooltip$$26$$, $axisArea_bounds$$68$$) {
  var $options$$203$$ = $gauge$$23$$.$__getOptions$(), $color$$46_isRTL$$19$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$23$$.$_context$), $isVert$$6$$ = "vertical" == $options$$203$$.orientation, $axisInfo$$7_axisOptions$$9$$ = {layout:{}};
  $axisInfo$$7_axisOptions$$9$$.layout.gapRatio = 0;
  $axisInfo$$7_axisOptions$$9$$.timeAxisType = "disabled";
  $axisInfo$$7_axisOptions$$9$$.position = $isVert$$6$$ ? "left" : "bottom";
  $axisInfo$$7_axisOptions$$9$$.min = $options$$203$$.min;
  $axisInfo$$7_axisOptions$$9$$.max = $options$$203$$.max;
  $axisInfo$$7_axisOptions$$9$$.dataMin = $options$$203$$.min;
  $axisInfo$$7_axisOptions$$9$$.dataMax = $options$$203$$.max;
  $axisInfo$$7_axisOptions$$9$$.tickLabel = {rendered:"off"};
  $axisInfo$$7_axisOptions$$9$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$23$$.$_context$, $axisInfo$$7_axisOptions$$9$$, $axisArea_bounds$$68$$);
  $gauge$$23$$.$__axisInfo$ = $axisInfo$$7_axisOptions$$9$$;
  var $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = 0;
  0 >= $options$$203$$.max ? $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = $options$$203$$.max : 0 <= $options$$203$$.min && ($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = $options$$203$$.min);
  $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = $axisInfo$$7_axisOptions$$9$$.$getCoordAt$($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$);
  "off" != $options$$203$$.plotArea.rendered && !("auto" == $options$$203$$.plotArea.rendered && "onIndicator" == $options$$203$$.thresholdDisplay) && ($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.min));
  var $endCoord$$6_gradientAngle$$ = $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.value), $endCoord$$6_gradientAngle$$ = $isVert$$6$$ ? window.Math.max($axisArea_bounds$$68$$.y, window.Math.min($axisArea_bounds$$68$$.y + $axisArea_bounds$$68$$.$h$, $endCoord$$6_gradientAngle$$)) : window.Math.max($axisArea_bounds$$68$$.x, window.Math.min($axisArea_bounds$$68$$.x + $axisArea_bounds$$68$$.$w$, $endCoord$$6_gradientAngle$$)), $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = 
  0, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = 0 > $options$$203$$.min && 0 > $options$$203$$.value ? $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.min) : $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.max), $arColors$$15_gradient$$8_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$, $indicatorX2_value$$110_yCoord$$4$$, $indicatorSize$$1_indicatorY1$$, $indicatorY2_referenceObjects$$2$$ = 0;
  $isVert$$6$$ ? ($arColors$$15_gradient$$8_plotX1$$ = $axisArea_bounds$$68$$.x, $plotX2$$ = $axisArea_bounds$$68$$.x + $axisArea_bounds$$68$$.$w$, $plotY2$$ = $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$, $plotY1$$ = window.Math.min($axisArea_bounds$$68$$.y, window.Math.min($axisArea_bounds$$68$$.y + $axisArea_bounds$$68$$.$h$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$)), $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = $axisArea_bounds$$68$$.x + (1 - 
  $options$$203$$.indicatorSize) / 2 * $axisArea_bounds$$68$$.$w$ + 0.5, $indicatorX2_value$$110_yCoord$$4$$ = $axisArea_bounds$$68$$.x + $axisArea_bounds$$68$$.$w$ * (1 - (1 - $options$$203$$.indicatorSize) / 2) - 0.5, $indicatorY2_referenceObjects$$2$$ = $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ - 0.5, $indicatorSize$$1_indicatorY1$$ = $endCoord$$6_gradientAngle$$ + 0.5) : ($arColors$$15_gradient$$8_plotX1$$ = $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$, 
  $plotX2$$ = window.Math.max($axisArea_bounds$$68$$.x, window.Math.max($axisArea_bounds$$68$$.x + $axisArea_bounds$$68$$.$w$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$)), $plotY1$$ = $axisArea_bounds$$68$$.y, $plotY2$$ = $axisArea_bounds$$68$$.y + $axisArea_bounds$$68$$.$h$, $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = $color$$46_isRTL$$19$$ ? $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ - 0.5 : $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ + 
  0.5, $indicatorX2_value$$110_yCoord$$4$$ = $color$$46_isRTL$$19$$ ? $endCoord$$6_gradientAngle$$ + 0.5 : $endCoord$$6_gradientAngle$$ - 0.5, $indicatorSize$$1_indicatorY1$$ = $axisArea_bounds$$68$$.y + (1 - $options$$203$$.indicatorSize) / 2 * $axisArea_bounds$$68$$.$h$ + 0.5, $indicatorY2_referenceObjects$$2$$ = $axisArea_bounds$$68$$.y + $axisArea_bounds$$68$$.$h$ * (1 - (1 - $options$$203$$.indicatorSize) / 2) - 0.5);
  $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$6_gradientAngle$$ == $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ && ($bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$29$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$23$$), $plotAreaBorderColor$$ = $options$$203$$.plotArea.borderColor, $thresholds$$3$$ = $options$$203$$.thresholds, $endCoord$$6_gradientAngle$$ = $isVert$$6$$ ? 0 : 270;
  if($thresholds$$3$$ && "off" != $options$$203$$.plotArea.rendered && "all" == $options$$203$$.thresholdDisplay) {
    for($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = $thresholds$$3$$.length - 1;0 <= $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$;$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$--) {
      var $currentThresholdIndex$$1$$ = $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$, $plotArea$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$23$$, $gauge$$23$$.$_context$, $arColors$$15_gradient$$8_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $cp$$6$$ = new D.$DvtClipPath$$("pacp" + $gauge$$23$$.getId());
      $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ == $thresholds$$3$$.length - 1 ? $isVert$$6$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, $axisArea_bounds$$68$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $color$$46_isRTL$$19$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.max), 0, $axisArea_bounds$$68$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 
      0, 0, $axisArea_bounds$$68$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $isVert$$6$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.max), $plotX2$$ - $arColors$$15_gradient$$8_plotX1$$ + 2, 1 * window.Math.abs($options$$203$$.max - $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$203$$.min - $options$$203$$.max) * $axisArea_bounds$$68$$.$h$, 0, 0) : $color$$46_isRTL$$19$$ ? 
      (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, 1 * ($options$$203$$.max - ($thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$203$$.min - $options$$203$$.max) * $axisArea_bounds$$68$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, 1 * window.Math.abs($thresholds$$3$$[$currentThresholdIndex$$1$$].max - 
      $options$$203$$.min) / window.Math.abs($options$$203$$.min - $options$$203$$.max) * $axisArea_bounds$$68$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3$$, $cp$$6$$);
      if($color$$46_isRTL$$19$$ || $isVert$$6$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$3$$.length - 1 - $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$
      }
      $plotArea$$3$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$23$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$23$$, $container$$127_tooltip$$26$$, $plotArea$$3$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$23$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$6_gradientAngle$$)
    }
  }else {
    "off" != $options$$203$$.plotArea.rendered && (!("auto" == $options$$203$$.plotArea.rendered && "onIndicator" == $options$$203$$.thresholdDisplay) && "all" != $options$$203$$.thresholdDisplay) && ($plotArea$$3$$ = $isVert$$6$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$23$$, $gauge$$23$$.$_context$, $arColors$$15_gradient$$8_plotX1$$, $plotX2$$, $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.max), $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.min), 
    D.$JSCompiler_alias_TRUE$$) : D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$23$$, $gauge$$23$$.$_context$, $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.min), $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($options$$203$$.max), $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$23$$), $plotArea$$3$$.$setSolidFill$($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$), 
    $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$23$$, $container$$127_tooltip$$26$$, $plotArea$$3$$, $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$, $endCoord$$6_gradientAngle$$))
  }
  $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$23$$, $gauge$$23$$.$_context$, $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$, $indicatorX2_value$$110_yCoord$$4$$, $indicatorSize$$1_indicatorY1$$, $indicatorY2_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  $gauge$$23$$.$__shapes$.push($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$);
  $color$$46_isRTL$$19$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$23$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$23$$) && "none" != $options$$203$$.visualEffects ? ($arColors$$15_gradient$$8_plotX1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$46_isRTL$$19$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$46_isRTL$$19$$, -0.04, -0.05)], $arColors$$15_gradient$$8_plotX1$$ = new D.$DvtLinearGradientFill$$($endCoord$$6_gradientAngle$$, $arColors$$15_gradient$$8_plotX1$$, [1, 1], [0, 1]), $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$.$setFill$($arColors$$15_gradient$$8_plotX1$$)) : 
  $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$.$setSolidFill$($color$$46_isRTL$$19$$);
  $borderColor$$29$$ && $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$.$setSolidStroke$($borderColor$$29$$);
  $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ && $container$$127_tooltip$$26$$.$addChild$($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$);
  $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$23$$, $gauge$$23$$.$_context$, $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$, $indicatorX2_value$$110_yCoord$$4$$, $indicatorSize$$1_indicatorY1$$, $indicatorY2_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$23$$, $container$$127_tooltip$$26$$, $baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$, $endCoord$$6_gradientAngle$$);
  if($indicatorY2_referenceObjects$$2$$ = $options$$203$$.referenceLines) {
    for($baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ = 0;$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$ < $indicatorY2_referenceObjects$$2$$.length;$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$++) {
      $color$$46_isRTL$$19$$ = $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].color ? $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].color : "white", $indicatorX2_value$$110_yCoord$$4$$ = $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].value, $indicatorSize$$1_indicatorY1$$ = $options$$203$$.indicatorSize, $isVert$$6$$ ? 
      ($indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = ((1 - $indicatorSize$$1_indicatorY1$$) / 2 + $indicatorSize$$1_indicatorY1$$) * $axisArea_bounds$$68$$.$w$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = $axisArea_bounds$$68$$.x + (1 - $indicatorSize$$1_indicatorY1$$) / 4 * $axisArea_bounds$$68$$.$w$, $indicatorX2_value$$110_yCoord$$4$$ = $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($indicatorX2_value$$110_yCoord$$4$$), $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = 
      new D.$DvtLine$$($gauge$$23$$.$_context$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$, $indicatorX2_value$$110_yCoord$$4$$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ + $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$, $indicatorX2_value$$110_yCoord$$4$$)) : ($indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = ((1 - $indicatorSize$$1_indicatorY1$$) / 2 + $indicatorSize$$1_indicatorY1$$) * $axisArea_bounds$$68$$.$h$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = $axisInfo$$7_axisOptions$$9$$.$getUnboundedCoordAt$($indicatorX2_value$$110_yCoord$$4$$), 
      $indicatorX2_value$$110_yCoord$$4$$ = $axisArea_bounds$$68$$.y + (1 - $indicatorSize$$1_indicatorY1$$) / 4 * $axisArea_bounds$$68$$.$h$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$ = new D.$DvtLine$$($gauge$$23$$.$_context$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$, $indicatorX2_value$$110_yCoord$$4$$, $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$, $indicatorX2_value$$110_yCoord$$4$$ + $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$)), $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = 
      new D.$DvtSolidStroke$$($color$$46_isRTL$$19$$, 1, $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].lineWidth ? $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].lineWidth : 2), $indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].lineStyle && $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($indicatorY2_referenceObjects$$2$$[$baseline$$6_baselineCoord$$7_i$$528_overlay$$14_plotAreaColor_shape$$36$$].lineStyle)), 
      $bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$.$setStroke$($indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$), $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $container$$127_tooltip$$26$$.$addChild$($bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($bRender$$2_plotAreaEnd_referenceLine_xCoord$$6$$, 
      $indicatorX1_referenceLineSize_shadow$$3_stroke$$75$$)
    }
  }
  $axisArea_bounds$$68$$ = new D.$DvtRect$$($gauge$$23$$.$_context$, $axisArea_bounds$$68$$.x, $axisArea_bounds$$68$$.y, $axisArea_bounds$$68$$.$w$, $axisArea_bounds$$68$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$68$$);
  $container$$127_tooltip$$26$$.$addChild$($axisArea_bounds$$68$$);
  (($container$$127_tooltip$$26$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$23$$)) || $options$$203$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$23$$.$__getEventManager$().$associate$($axisArea_bounds$$68$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$127_tooltip$$26$$, $color$$46_isRTL$$19$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$24$$, $context$$286$$, $x1$$19$$, $x2$$19$$, $y1$$17$$, $y2$$16$$, $roundCorners$$1$$) {
  return new D.$DvtStatusMeterGaugeIndicator$$($gauge$$24$$, $context$$286$$, $x1$$19$$, $x2$$19$$, $y1$$17$$, $y2$$16$$, $roundCorners$$1$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$25$$, $container$$128$$, $shape$$37$$, $bRender$$3$$, $gradient$$9_gradientAngle$$1$$) {
  "none" != $gauge$$25$$.$__getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$25$$) && ($gradient$$9_gradientAngle$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$9_gradientAngle$$1$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$37$$.$setFill$($gradient$$9_gradientAngle$$1$$), $gauge$$25$$.$__shapes$.push($shape$$37$$), $shape$$37$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$3$$ && $container$$128$$.$addChild$($shape$$37$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$17_gauge$$26$$, $container$$129$$, $shape$$38$$, $color$$47$$, $gradient$$10_gradientAngle$$2$$) {
  var $options$$205$$ = $arColors$$17_gauge$$26$$.$__getOptions$();
  $shape$$38$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$129$$.$addChild$($shape$$38$$);
  "none" != $options$$205$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$17_gauge$$26$$) ? ($arColors$$17_gauge$$26$$ = [D.$DvtColorUtils$$.$getDarker$($color$$47$$, 0.9), $color$$47$$, D.$DvtColorUtils$$.$getBrighter$($color$$47$$)], $gradient$$10_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_gradientAngle$$2$$, $arColors$$17_gauge$$26$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$17_gauge$$26$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$47$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$47$$, -0.09, 0.04)], $gradient$$10_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_gradientAngle$$2$$, $arColors$$17_gauge$$26$$, [1, 1], [0, 1])), $shape$$38$$.$setFill$($gradient$$10_gradientAngle$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$27_minLabelDims$$1$$, $container$$130$$, $bounds$$69$$) {
  var $options$$206$$ = $gauge$$27_minLabelDims$$1$$.$__getOptions$(), $isRTL$$20_labelBounds$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$27_minLabelDims$$1$$.$_context$), $isVert$$7_minValue$$11_size$$37$$ = "vertical" == $options$$206$$.orientation, $label$$73$$ = new D.$DvtOutputText$$($gauge$$27_minLabelDims$$1$$.$_context$, ""), $labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$206$$.value, $gauge$$27_minLabelDims$$1$$), $labelGap$$1$$ = $options$$206$$.__layout.labelGap;
  $label$$73$$.$setCSSStyle$($options$$206$$.metricLabel.style);
  if($isVert$$7_minValue$$11_size$$37$$ && "on" == $options$$206$$.metricLabel.rendered) {
    var $bound$$5_labelSpace$$1_maxValue$$12$$ = 0 < $options$$206$$.max ? $options$$206$$.max : $options$$206$$.min, $bound$$5_labelSpace$$1_maxValue$$12$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$5_labelSpace$$1_maxValue$$12$$, $gauge$$27_minLabelDims$$1$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$27_minLabelDims$$1$$.$_context$, $bound$$5_labelSpace$$1_maxValue$$12$$);
    $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$206$$.metricLabel.style);
    $isRTL$$20_labelBounds$$9$$ = new D.$DvtRectangle$$($bounds$$69$$.x, $bounds$$69$$.y + 0.8 * $bounds$$69$$.$h$, $bounds$$69$$.$w$, 0.2 * $bounds$$69$$.$h$);
    $isVert$$7_minValue$$11_size$$37$$ = ($isVert$$7_minValue$$11_size$$37$$ = $options$$206$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$7_minValue$$11_size$$37$$) : $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$getOptimalFontSize$($isRTL$$20_labelBounds$$9$$);
    $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$measureDimensions$();
    $bounds$$69$$.$h$ -= $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$h$;
    $bound$$5_labelSpace$$1_maxValue$$12$$ = $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$w$;
    $label$$73$$.$setFontSize$($isVert$$7_minValue$$11_size$$37$$);
    $label$$73$$.$setTextString$($labelString$$4$$);
    $label$$73$$.$setX$($bounds$$69$$.x + $bounds$$69$$.$w$ / 2);
    $label$$73$$.$setY$($bounds$$69$$.y + $bounds$$69$$.$h$);
    $bounds$$69$$.$h$ -= $labelGap$$1$$;
    $label$$73$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$73$$, $bounds$$69$$.$w$, $bounds$$69$$.$h$, $container$$130$$)
  }else {
    if(!$isVert$$7_minValue$$11_size$$37$$ && "on" == $options$$206$$.metricLabel.rendered) {
      var $isVert$$7_minValue$$11_size$$37$$ = ($isVert$$7_minValue$$11_size$$37$$ = $options$$206$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$7_minValue$$11_size$$37$$) : 13, $maxString_minLabel$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$206$$.min, $gauge$$27_minLabelDims$$1$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$206$$.max, $gauge$$27_minLabelDims$$1$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = 
      window.Math.max($longestLabel_maxLabel$$2_maxLabelDims$$1$$.toString().length, $maxString_minLabel$$2$$.toString().length), $maxString_minLabel$$2$$ = "";
      "percent" == $options$$206$$.metricLabel.textType && ($longestLabel_maxLabel$$2_maxLabelDims$$1$$ = 3, $maxString_minLabel$$2$$ += "%");
      for(var $i$$529$$ = 0;$i$$529$$ < $longestLabel_maxLabel$$2_maxLabelDims$$1$$;$i$$529$$++) {
        $maxString_minLabel$$2$$ += "0"
      }
      $label$$73$$.$setTextString$($maxString_minLabel$$2$$);
      18 > $bounds$$69$$.$h$ && ($isVert$$7_minValue$$11_size$$37$$ = $label$$73$$.$getOptimalFontSize$($bounds$$69$$));
      $label$$73$$.$setFontSize$($isVert$$7_minValue$$11_size$$37$$);
      var $alignCoord$$;
      if(0 < $options$$206$$.max || "off" != $options$$206$$.plotArea.rendered || !("auto" == $options$$206$$.plotArea.rendered && "onIndicator" == $options$$206$$.thresholdDisplay)) {
        $bound$$5_labelSpace$$1_maxValue$$12$$ = 0 < $options$$206$$.max ? $options$$206$$.max : $options$$206$$.min, $bound$$5_labelSpace$$1_maxValue$$12$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$5_labelSpace$$1_maxValue$$12$$, $gauge$$27_minLabelDims$$1$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$27_minLabelDims$$1$$.$_context$, $bound$$5_labelSpace$$1_maxValue$$12$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$206$$.metricLabel.style), 
        $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$setFontSize$($isVert$$7_minValue$$11_size$$37$$), $longestLabel_maxLabel$$2_maxLabelDims$$1$$ = $label$$73$$.$measureDimensions$(), $alignCoord$$ = $isRTL$$20_labelBounds$$9$$ ? $bounds$$69$$.x + $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$w$ : $bounds$$69$$.x + $bounds$$69$$.$w$, $bound$$5_labelSpace$$1_maxValue$$12$$ = $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$w$, $isRTL$$20_labelBounds$$9$$ && ($bounds$$69$$.x += $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$w$ + 
        $labelGap$$1$$), $bounds$$69$$.$w$ -= $longestLabel_maxLabel$$2_maxLabelDims$$1$$.$w$ + $labelGap$$1$$
      }
      if(0 > $options$$206$$.min && "on" != $options$$206$$.plotArea.rendered && !("auto" == $options$$206$$.plotArea.rendered && "onIndicator" == $options$$206$$.thresholdDisplay)) {
        $isVert$$7_minValue$$11_size$$37$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$206$$.min, $gauge$$27_minLabelDims$$1$$);
        $maxString_minLabel$$2$$ = new D.$DvtOutputText$$($gauge$$27_minLabelDims$$1$$.$_context$, $isVert$$7_minValue$$11_size$$37$$);
        $maxString_minLabel$$2$$.$setCSSStyle$($options$$206$$.metricLabel.style);
        $gauge$$27_minLabelDims$$1$$ = $maxString_minLabel$$2$$.$measureDimensions$();
        if(0 > $options$$206$$.value || 0 >= $options$$206$$.max) {
          $alignCoord$$ = $isRTL$$20_labelBounds$$9$$ ? $bounds$$69$$.x + $bounds$$69$$.$w$ : $bounds$$69$$.x + $gauge$$27_minLabelDims$$1$$.$w$, $bound$$5_labelSpace$$1_maxValue$$12$$ = $gauge$$27_minLabelDims$$1$$.$w$
        }
        $isRTL$$20_labelBounds$$9$$ || ($bounds$$69$$.x += $gauge$$27_minLabelDims$$1$$.$w$ + $labelGap$$1$$);
        $bounds$$69$$.$w$ -= $gauge$$27_minLabelDims$$1$$.$w$ + $labelGap$$1$$
      }
      $label$$73$$.$setTextString$($labelString$$4$$);
      $label$$73$$.$setX$($alignCoord$$);
      $label$$73$$.$setY$($bounds$$69$$.y + $bounds$$69$$.$h$ / 2);
      $label$$73$$.$alignMiddle$();
      $label$$73$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$73$$, $bound$$5_labelSpace$$1_maxValue$$12$$, $bounds$$69$$.$h$, $container$$130$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$70$$, $radius$$22$$, $angle$$32$$) {
  return{x:window.Math.cos($angle$$32$$) * $radius$$22$$ + $bounds$$70$$.$w$ / 2 + $bounds$$70$$.x, y:window.Math.sin($angle$$32$$) * $radius$$22$$ + $bounds$$70$$.$h$ / 2 + $bounds$$70$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$30_gauge$$28$$, $container$$131$$, $bounds$$71_shape$$39$$, $startAngle$$7$$, $angleExtent$$7$$, $innerRadius$$3$$, $outerRadius$$3$$, $color$$48$$, $isPlotArea$$) {
  var $context$$287$$ = $borderColor$$30_gauge$$28$$.$_context$;
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$30_gauge$$28$$.$_context$) && ($startAngle$$7$$ = window.Math.PI - $startAngle$$7$$ - $angleExtent$$7$$, $startAngle$$7$$ = 0 < $startAngle$$7$$ ? $startAngle$$7$$ : $startAngle$$7$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$71_shape$$39$$ = new D.$DvtPath$$($context$$287$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$71_shape$$39$$, $startAngle$$7$$, $angleExtent$$7$$, $innerRadius$$3$$, $outerRadius$$3$$)) : ($bounds$$71_shape$$39$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$287$$, $bounds$$71_shape$$39$$, $startAngle$$7$$, $angleExtent$$7$$, $innerRadius$$3$$, $outerRadius$$3$$), $borderColor$$30_gauge$$28$$.$__shapes$.push($bounds$$71_shape$$39$$));
  $bounds$$71_shape$$39$$.$setSolidFill$($color$$48$$);
  ($borderColor$$30_gauge$$28$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$30_gauge$$28$$)) && !$isPlotArea$$ && $bounds$$71_shape$$39$$.$setSolidStroke$($borderColor$$30_gauge$$28$$);
  $container$$131$$.$addChild$($bounds$$71_shape$$39$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$29_p1$$5$$, $container$$132$$, $bounds$$72_p2$$6$$, $angle$$33$$, $color$$49_stroke$$76$$, $lineWidth$$4$$, $lineStyle$$6$$) {
  var $context$$288_shape$$40$$ = $gauge$$29_p1$$5$$.$_context$, $maxDiameter$$3_outerRadius$$4$$ = window.Math.min($bounds$$72_p2$$6$$.$w$, $bounds$$72_p2$$6$$.$h$), $innerRadius$$4$$ = 0.275 * $maxDiameter$$3_outerRadius$$4$$, $maxDiameter$$3_outerRadius$$4$$ = 0.5 * $maxDiameter$$3_outerRadius$$4$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$29_p1$$5$$.$_context$) && ($angle$$33$$ = window.Math.PI - $angle$$33$$, $angle$$33$$ = 0 < $angle$$33$$ ? $angle$$33$$ : $angle$$33$$ + 2 * window.Math.PI);
  $gauge$$29_p1$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$72_p2$$6$$, $innerRadius$$4$$, $angle$$33$$);
  $bounds$$72_p2$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$72_p2$$6$$, $maxDiameter$$3_outerRadius$$4$$, $angle$$33$$);
  $context$$288_shape$$40$$ = new D.$DvtLine$$($context$$288_shape$$40$$, $gauge$$29_p1$$5$$.x, $gauge$$29_p1$$5$$.y, $bounds$$72_p2$$6$$.x, $bounds$$72_p2$$6$$.y);
  $color$$49_stroke$$76$$ = new D.$DvtSolidStroke$$($color$$49_stroke$$76$$, 1, $lineWidth$$4$$);
  $lineStyle$$6$$ && $color$$49_stroke$$76$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$6$$));
  $context$$288_shape$$40$$.$setStroke$($color$$49_stroke$$76$$);
  $container$$132$$.$addChild$($context$$288_shape$$40$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$73_p4$$1$$, $startAngle$$8$$, $angleExtent$$8$$, $innerRadius$$5$$, $cmd$$12_outerRadius$$5$$) {
  var $p1$$6$$, $p2$$7$$, $p3$$2$$;
  $angleExtent$$8$$ < 2 * window.Math.PI ? ($p1$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $cmd$$12_outerRadius$$5$$, $startAngle$$8$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $cmd$$12_outerRadius$$5$$, $startAngle$$8$$ + $angleExtent$$8$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $innerRadius$$5$$, $startAngle$$8$$ + $angleExtent$$8$$), $bounds$$73_p4$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, 
  $innerRadius$$5$$, $startAngle$$8$$), $cmd$$12_outerRadius$$5$$ = D.$DvtPathUtils$$.moveTo($p1$$6$$.x, $p1$$6$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$12_outerRadius$$5$$, $cmd$$12_outerRadius$$5$$, $angleExtent$$8$$, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.lineTo($p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$8$$, 0, $bounds$$73_p4$$1$$.x, $bounds$$73_p4$$1$$.y) + D.$DvtPathUtils$$.closePath()) : ($p1$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, 
  $cmd$$12_outerRadius$$5$$, $startAngle$$8$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $cmd$$12_outerRadius$$5$$, $startAngle$$8$$ + $angleExtent$$8$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $innerRadius$$5$$, $startAngle$$8$$), $bounds$$73_p4$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$73_p4$$1$$, $innerRadius$$5$$, $startAngle$$8$$ + $angleExtent$$8$$ / 2), $cmd$$12_outerRadius$$5$$ = 
  D.$DvtPathUtils$$.moveTo($p1$$6$$.x, $p1$$6$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$12_outerRadius$$5$$, $cmd$$12_outerRadius$$5$$, $angleExtent$$8$$ / 2, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$12_outerRadius$$5$$, $cmd$$12_outerRadius$$5$$, $angleExtent$$8$$ / 2, 1, $p1$$6$$.x, $p1$$6$$.y), 0 < $innerRadius$$5$$ && ($cmd$$12_outerRadius$$5$$ += D.$DvtPathUtils$$.moveTo($bounds$$73_p4$$1$$.x, $bounds$$73_p4$$1$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$5$$, $innerRadius$$5$$, 
  $angleExtent$$8$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$5$$, $innerRadius$$5$$, $angleExtent$$8$$ / 2, 0, $bounds$$73_p4$$1$$.x, $bounds$$73_p4$$1$$.y)), $cmd$$12_outerRadius$$5$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$12_outerRadius$$5$$
};
D.$DvtStatusMeterGaugeIndicator$$ = function $$DvtStatusMeterGaugeIndicator$$$($gauge$$45$$, $context$$291$$, $x1$$20$$, $x2$$20$$, $y1$$18$$, $y2$$17$$, $roundCorners$$2$$) {
  this.Init($gauge$$45$$, $context$$291$$, $x1$$20$$, $x2$$20$$, $y1$$18$$, $y2$$17$$, $roundCorners$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeIndicator$$, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
D.$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$46$$, $context$$292$$, $x1$$21$$, $x2$$21$$, $y1$$19$$, $y2$$18$$, $roundCorners$$3$$) {
  D.$DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$292$$);
  this.$_gauge$ = $gauge$$46$$;
  this.$_roundCorners$ = $roundCorners$$3$$;
  this.$_isVert$ = "vertical" == $gauge$$46$$.$__getOptions$().orientation;
  this.$setCoords$($x1$$21$$, $x2$$21$$, $y1$$19$$, $y2$$18$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$109_x1$$22$$, $x2$$22$$, $height$$89_y1$$20$$, $y2$$19$$) {
  this.$_x1$ = $width$$109_x1$$22$$;
  this.$_x2$ = $x2$$22$$;
  this.$_y1$ = $height$$89_y1$$20$$;
  this.$_y2$ = $y2$$19$$;
  var $radius$$25_x$$187$$ = window.Math.min($width$$109_x1$$22$$, $x2$$22$$), $y$$159$$ = window.Math.min($height$$89_y1$$20$$, $y2$$19$$);
  $width$$109_x1$$22$$ = window.Math.abs($width$$109_x1$$22$$ - $x2$$22$$);
  $height$$89_y1$$20$$ = window.Math.abs($y2$$19$$ - $height$$89_y1$$20$$);
  (0,D.$JSCompiler_StaticMethods_setRect$$)(this, $radius$$25_x$$187$$, $y$$159$$, $width$$109_x1$$22$$, $height$$89_y1$$20$$);
  this.$_roundCorners$ && ($radius$$25_x$$187$$ = (this.$_isVert$ ? $width$$109_x1$$22$$ : $height$$89_y1$$20$$) * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? 0.25 : 0.15), 2.5 <= $radius$$25_x$$187$$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)(this, $radius$$25_x$$187$$, $radius$$25_x$$187$$))
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$50$$) {
  $params$$50$$ && 4 == $params$$50$$.length && this.$setCoords$($params$$50$$[0], $params$$50$$[1], $params$$50$$[2], $params$$50$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$289$$, $bounds$$74$$, $startAngle$$9$$, $angleExtent$$9$$, $innerRadius$$6$$, $outerRadius$$6$$) {
  this.Init($context$$289$$, $bounds$$74$$, $startAngle$$9$$, $angleExtent$$9$$, $innerRadius$$6$$, $outerRadius$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$290$$, $bounds$$75$$, $startAngle$$10$$, $angleExtent$$10$$, $innerRadius$$7$$, $outerRadius$$7$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$290$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$75$$, $startAngle$$10$$, $angleExtent$$10$$, $innerRadius$$7$$, $outerRadius$$7$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$76$$, $startAngle$$11$$, $angleExtent$$11$$, $innerRadius$$8$$, $outerRadius$$8$$) {
  $bounds$$76$$ && $bounds$$76$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$76$$ : $bounds$$76$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$11$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$11$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$8$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$8$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$76$$, $startAngle$$11$$, $angleExtent$$11$$, $innerRadius$$8$$, $outerRadius$$8$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$49$$) {
  $params$$49$$ && 5 == $params$$49$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$49$$[0], $params$$49$$[1], $params$$49$$[2], $params$$49$$[3], $params$$49$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$newInstance$$ = function $$DvtDialGauge$newInstance$$$($context$$355$$, $callback$$120$$, $callbackObj$$93$$) {
  var $gauge$$56$$ = new D.$DvtDialGauge$$;
  $gauge$$56$$.Init($context$$355$$, $callback$$120$$, $callbackObj$$93$$);
  return $gauge$$56$$
};
D.$DvtDialGauge$$.newInstance = D.$DvtDialGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$356$$, $callback$$121$$, $callbackObj$$94$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$356$$, $callback$$121$$, $callbackObj$$94$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$251$$) {
  var $backgroundType$$1$$ = $options$$251$$.background, $indicatorType$$1$$ = $options$$251$$.indicator;
  "string" === typeof $backgroundType$$1$$ && ($options$$251$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$1$$), $options$$251$$.background.images = $options$$251$$._backgroundImages);
  "string" === typeof $indicatorType$$1$$ && ($options$$251$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$1$$), $options$$251$$.indicator.images = $options$$251$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$251$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$156$$, $width$$131$$, $height$$111$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$156$$, $width$$131$$, $height$$111$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$7$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$8$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$602$$ = 0;$i$$602$$ < $objs$$7$$.length;$i$$602$$++) {
    var $obj$$176$$ = $objs$$7$$[$i$$602$$], $endState$$16$$ = $obj$$176$$.$getAnimationParams$(), $animation$$6_startAngle$$15$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$176$$.$setAngle$($animation$$6_startAngle$$15$$);
    $animation$$6_startAngle$$15$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$176$$, $animationDuration$$8$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$6_startAngle$$15$$.$_animator$, "typeNumberArray", $obj$$176$$, $obj$$176$$.$getAnimationParams$, $obj$$176$$.$setAnimationParams$, $endState$$16$$);
    $animation$$6_startAngle$$15$$.$_animator$.$setEasing$(function($objs$$7$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$7$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$6_startAngle$$15$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$216$$, $y$$186$$) {
  var $angle$$39_ratio$$9$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$186$$ - this.$__anchorPt$.y, $x$$216$$ - this.$__anchorPt$.x));
  0 >= $angle$$39_ratio$$9$$ && ($angle$$39_ratio$$9$$ += 360);
  var $isRTL$$27_minValue$$17$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $angleExtent$$13_backgroundOptions$$4$$ = this.$__getOptions$().background, $startAngle$$16$$ = $isRTL$$27_minValue$$17$$ ? 180 + $angleExtent$$13_backgroundOptions$$4$$.startAngle : 360 - $angleExtent$$13_backgroundOptions$$4$$.startAngle, $angleExtent$$13_backgroundOptions$$4$$ = $angleExtent$$13_backgroundOptions$$4$$.angleExtent, $endAngle$$1$$ = $startAngle$$16$$ + $angleExtent$$13_backgroundOptions$$4$$;
  if($isRTL$$27_minValue$$17$$) {
    $endAngle$$1$$ = $startAngle$$16$$;
    for($startAngle$$16$$ -= $angleExtent$$13_backgroundOptions$$4$$;0 > $startAngle$$16$$;) {
      $startAngle$$16$$ += 360, $endAngle$$1$$ += 360
    }
  }
  $angle$$39_ratio$$9$$ + 360 >= $startAngle$$16$$ && $angle$$39_ratio$$9$$ + 360 <= $endAngle$$1$$ ? $angle$$39_ratio$$9$$ += 360 : $angle$$39_ratio$$9$$ >= $startAngle$$16$$ && $angle$$39_ratio$$9$$ <= $endAngle$$1$$ || ($angle$$39_ratio$$9$$ = $angle$$39_ratio$$9$$ > $endAngle$$1$$ ? $startAngle$$16$$ + 360 - $angle$$39_ratio$$9$$ < $angle$$39_ratio$$9$$ - $endAngle$$1$$ ? $startAngle$$16$$ : $endAngle$$1$$ : $startAngle$$16$$ - $angle$$39_ratio$$9$$ < $angle$$39_ratio$$9$$ + 360 - $endAngle$$1$$ ? 
  $startAngle$$16$$ : $endAngle$$1$$);
  $angle$$39_ratio$$9$$ = ($angle$$39_ratio$$9$$ - $startAngle$$16$$) / $angleExtent$$13_backgroundOptions$$4$$;
  $isRTL$$27_minValue$$17$$ && ($angle$$39_ratio$$9$$ = 1 - $angle$$39_ratio$$9$$);
  $isRTL$$27_minValue$$17$$ = this.$Options$.min;
  return $angle$$39_ratio$$9$$ * (this.$Options$.max - $isRTL$$27_minValue$$17$$) + $isRTL$$27_minValue$$17$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$33$$, $container$$133$$, $bounds$$77_width$$106$$, $height$$86$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$33$$) ? ($bounds$$77_width$$106$$ = new D.$DvtRectangle$$(0, 0, $bounds$$77_width$$106$$, $height$$86$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$33$$, $container$$133$$, $bounds$$77_width$$106$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$33$$, $container$$133$$, $bounds$$77_width$$106$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$33$$, $container$$133$$, new D.$DvtRectangle$$(0, 0, $bounds$$77_width$$106$$, $height$$86$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$34$$, $container$$134$$, $bounds$$78_scale$$60$$) {
  var $options$$208_tooltip$$27$$ = $gauge$$34$$.$__getOptions$(), $background$$9_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$34$$, $bounds$$78_scale$$60$$);
  $container$$134$$.$addChild$($background$$9_backgroundAnchor$$);
  $options$$208_tooltip$$27$$.background.majorTickCount && $options$$208_tooltip$$27$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$34$$, $container$$134$$, $bounds$$78_scale$$60$$);
  var $indicator$$13$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$34$$, $bounds$$78_scale$$60$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$34$$.$_context$), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$34$$.$_context$);
  $container$$134$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$13$$);
  var $indicatorBounds_mat$$19$$ = $indicator$$13$$.$getDimensions$(), $angleRads$$4$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$34$$, $options$$208_tooltip$$27$$.value), $background$$9_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$34$$, $bounds$$78_scale$$60$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$34$$, $indicatorBounds_mat$$19$$);
  $bounds$$78_scale$$60$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$34$$, $bounds$$78_scale$$60$$, $indicatorBounds_mat$$19$$);
  $indicatorBounds_mat$$19$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$19$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$19$$.scale($bounds$$78_scale$$60$$, $bounds$$78_scale$$60$$);
  $indicator$$13$$.$setMatrix$($indicatorBounds_mat$$19$$);
  $rotateContainer$$.$setAngle$($angleRads$$4$$);
  $indicatorBounds_mat$$19$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$19$$.translate($background$$9_backgroundAnchor$$.x, $background$$9_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$19$$);
  $gauge$$34$$.$__shapes$.push($rotateContainer$$);
  (($options$$208_tooltip$$27$$ = $options$$208_tooltip$$27$$.shortDesc) || $gauge$$34$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$34$$.$__getEventManager$().$associate$($container$$134$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$208_tooltip$$27$$));
  $gauge$$34$$.$__anchorPt$ = $background$$9_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$35$$, $bounds$$79$$) {
  var $backgroundOptions$$ = $gauge$$35$$.$__getOptions$().background, $isRTL$$22_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$35$$.$_context$), $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$41_widthRes$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ ? 2 * $bounds$$79$$.$w$ : $bounds$$79$$.$w$, $heightRes$$1_scale$$61$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ ? 2 * $bounds$$79$$.$h$ : $bounds$$79$$.$h$, 
  $images$$16_tx$$19$$ = $backgroundOptions$$.images;
  if($images$$16_tx$$19$$ && 0 < $images$$16_tx$$19$$.length) {
    var $i$$530_ty$$19$$, $refWidth$$1$$, $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ = [];
    for($i$$530_ty$$19$$ = 0;$i$$530_ty$$19$$ < $images$$16_tx$$19$$.length;$i$$530_ty$$19$$++) {
      var $imageDims_isImageRTL_source$$14$$ = "rtl" == $images$$16_tx$$19$$[$i$$530_ty$$19$$].dir;
      $isRTL$$22_radiusScale$$1$$ && $imageDims_isImageRTL_source$$14$$ ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.push($images$$16_tx$$19$$[$i$$530_ty$$19$$]) : !$isRTL$$22_radiusScale$$1$$ && !$imageDims_isImageRTL_source$$14$$ && $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.push($images$$16_tx$$19$$[$i$$530_ty$$19$$])
    }
    $images$$16_tx$$19$$ = 0 < $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.length ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ : $images$$16_tx$$19$$;
    for($i$$530_ty$$19$$ = 0;$i$$530_ty$$19$$ < $images$$16_tx$$19$$.length;$i$$530_ty$$19$$++) {
      var $height$$87_image$$9$$ = $images$$16_tx$$19$$[$i$$530_ty$$19$$], $imageDims_isImageRTL_source$$14$$ = $height$$87_image$$9$$.src, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ = $height$$87_image$$9$$.width, $height$$87_image$$9$$ = $height$$87_image$$9$$.height, $isSvg$$1$$ = $imageDims_isImageRTL_source$$14$$ && -1 < $imageDims_isImageRTL_source$$14$$.search(".svg");
      0 == $i$$530_ty$$19$$ && ($refWidth$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$, $refHeight$$1$$ = $height$$87_image$$9$$);
      if($isSvg$$1$$ || $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ >= $shape$$41_widthRes$$1$$ && $height$$87_image$$9$$ >= $heightRes$$1_scale$$61$$ || $i$$530_ty$$19$$ == $images$$16_tx$$19$$.length - 1) {
        var $shape$$41_widthRes$$1$$ = new D.$DvtImage$$($gauge$$35$$.$_context$, $imageDims_isImageRTL_source$$14$$, 0, 0, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$, $height$$87_image$$9$$), $matrix$$13$$ = new D.$DvtMatrix$$, $heightRes$$1_scale$$61$$ = window.Math.min($bounds$$79$$.$w$ / $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$, $bounds$$79$$.$h$ / $height$$87_image$$9$$), $images$$16_tx$$19$$ = ($bounds$$79$$.$w$ - $heightRes$$1_scale$$61$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$) / 
        2;
        $i$$530_ty$$19$$ = ($bounds$$79$$.$h$ - $heightRes$$1_scale$$61$$ * $height$$87_image$$9$$) / 2;
        $matrix$$13$$.scale($heightRes$$1_scale$$61$$, $heightRes$$1_scale$$61$$);
        $matrix$$13$$.translate($images$$16_tx$$19$$, $i$$530_ty$$19$$);
        $shape$$41_widthRes$$1$$.$setMatrix$($matrix$$13$$);
        $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims_isImageRTL_source$$14$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$35$$.$_context$, $imageDims_isImageRTL_source$$14$$, D.$DvtObj$$.$createCallback$($shape$$41_widthRes$$1$$, $shape$$41_widthRes$$1$$.$__setDimensions$))) && $shape$$41_widthRes$$1$$.$__setDimensions$($imageDims_isImageRTL_source$$14$$);
        $bounds$$79$$.x += $images$$16_tx$$19$$;
        $bounds$$79$$.y += $i$$530_ty$$19$$;
        $bounds$$79$$.$w$ = $heightRes$$1_scale$$61$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$;
        $bounds$$79$$.$h$ = $heightRes$$1_scale$$61$$ * $height$$87_image$$9$$;
        !(0,window.isNaN)($backgroundOptions$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$.anchorY) && ($backgroundOptions$$._anchorX = $isRTL$$22_radiusScale$$1$$ ? $bounds$$79$$.x + $bounds$$79$$.$w$ - $bounds$$79$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$1$$ : $bounds$$79$$.x + $bounds$$79$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$1$$, $backgroundOptions$$._anchorY = $bounds$$79$$.y + $bounds$$79$$.$h$ * $backgroundOptions$$.anchorY / $refHeight$$1$$);
        $backgroundOptions$$.metricLabelBounds && ($isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$ = {}, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.width = $bounds$$79$$.$w$ * $backgroundOptions$$.metricLabelBounds.width / $refWidth$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.height = $bounds$$79$$.$h$ * $backgroundOptions$$.metricLabelBounds.height / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.y = $bounds$$79$$.y + $bounds$$79$$.$h$ * 
        $backgroundOptions$$.metricLabelBounds.y / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.x = $isRTL$$22_radiusScale$$1$$ ? $bounds$$79$$.x + $bounds$$79$$.$w$ - $bounds$$79$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$1$$ - $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$.width : $bounds$$79$$.x + $bounds$$79$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$1$$, $backgroundOptions$$._metricLabelBounds = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$107$$);
        $isRTL$$22_radiusScale$$1$$ = window.Math.min($bounds$$79$$.$w$ / $refWidth$$1$$, $bounds$$79$$.$h$ / $refHeight$$1$$);
        $backgroundOptions$$._radius = $backgroundOptions$$.radius * $isRTL$$22_radiusScale$$1$$;
        $backgroundOptions$$._tickLabelHeight = $backgroundOptions$$.tickLabelHeight * $bounds$$79$$.$h$ / $refHeight$$1$$;
        $backgroundOptions$$._tickLabelWidth = $backgroundOptions$$.tickLabelWidth * $bounds$$79$$.$w$ / $refWidth$$1$$;
        return $shape$$41_widthRes$$1$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$36$$, $bounds$$80$$) {
  var $indicatorOptions$$ = $gauge$$36$$.$__getOptions$().indicator, $indicatorLength_source$$15$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$36$$, $bounds$$80$$), $heightRes$$2_shape$$42$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$15$$ : $indicatorLength_source$$15$$, $refWidth$$2$$, $refHeight$$2$$, $images$$17$$ = $indicatorOptions$$.images;
  if($images$$17$$ && 0 < $images$$17$$.length) {
    for(var $i$$531$$ = 0;$i$$531$$ < $images$$17$$.length;$i$$531$$++) {
      var $height$$88_image$$10$$ = $images$$17$$[$i$$531$$], $indicatorLength_source$$15$$ = $height$$88_image$$10$$.src, $width$$108$$ = $height$$88_image$$10$$.width, $height$$88_image$$10$$ = $height$$88_image$$10$$.height, $isSvg$$2$$ = $indicatorLength_source$$15$$ && -1 < $indicatorLength_source$$15$$.search(".svg");
      0 == $i$$531$$ && ($refWidth$$2$$ = $width$$108$$, $refHeight$$2$$ = $height$$88_image$$10$$);
      if($isSvg$$2$$ || $height$$88_image$$10$$ >= $heightRes$$2_shape$$42$$ || $i$$531$$ == $images$$17$$.length - 1) {
        return $heightRes$$2_shape$$42$$ = new D.$DvtImage$$($gauge$$36$$.$_context$, $indicatorLength_source$$15$$, 0, 0, $width$$108$$, $height$$88_image$$10$$), $isSvg$$2$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$36$$.$_context$, $indicatorLength_source$$15$$, D.$DvtObj$$.$createCallback$($heightRes$$2_shape$$42$$, $heightRes$$2_shape$$42$$.$__setDimensions$)) && ($heightRes$$2_shape$$42$$.$setWidth$($width$$108$$), $heightRes$$2_shape$$42$$.$setHeight$($height$$88_image$$10$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$108$$ / $refWidth$$2$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$88_image$$10$$ / $refHeight$$2$$), $heightRes$$2_shape$$42$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$37_startAngle$$12$$) {
  var $backgroundOptions$$1$$ = $gauge$$37_startAngle$$12$$.$__getOptions$().background;
  $gauge$$37_startAngle$$12$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$37_startAngle$$12$$.$_context$) ? 180 - $backgroundOptions$$1$$.startAngle : $backgroundOptions$$1$$.startAngle;
  return window.Math.PI * (90 - $gauge$$37_startAngle$$12$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$38$$, $value$$111$$) {
  var $isRTL$$24_maxValue$$13_options$$209$$ = $gauge$$38$$.$__getOptions$(), $backgroundOptions$$2$$ = $isRTL$$24_maxValue$$13_options$$209$$.background, $minValue$$12_ratio$$5$$ = $isRTL$$24_maxValue$$13_options$$209$$.min, $isRTL$$24_maxValue$$13_options$$209$$ = $isRTL$$24_maxValue$$13_options$$209$$.max;
  $value$$111$$ = window.Math.max(window.Math.min($value$$111$$, $isRTL$$24_maxValue$$13_options$$209$$), $minValue$$12_ratio$$5$$);
  $minValue$$12_ratio$$5$$ = ($value$$111$$ - $minValue$$12_ratio$$5$$) / ($isRTL$$24_maxValue$$13_options$$209$$ - $minValue$$12_ratio$$5$$);
  $isRTL$$24_maxValue$$13_options$$209$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$38$$.$_context$);
  return window.Math.PI * (90 - (($isRTL$$24_maxValue$$13_options$$209$$ ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle) - $minValue$$12_ratio$$5$$ * ($isRTL$$24_maxValue$$13_options$$209$$ ? -$backgroundOptions$$2$$.angleExtent : $backgroundOptions$$2$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$39$$, $bounds$$81$$) {
  var $anchorY$$2_backgroundOptions$$3$$ = $gauge$$39$$.$__getOptions$().background, $anchorX$$2$$ = $anchorY$$2_backgroundOptions$$3$$._anchorX, $anchorY$$2_backgroundOptions$$3$$ = $anchorY$$2_backgroundOptions$$3$$._anchorY;
  return!(0,window.isNaN)($anchorX$$2$$) && !(0,window.isNaN)($anchorY$$2_backgroundOptions$$3$$) ? new D.$DvtPoint$$($anchorX$$2$$, $anchorY$$2_backgroundOptions$$3$$) : new D.$DvtPoint$$($bounds$$81$$.x + $bounds$$81$$.$w$ / 2, $bounds$$81$$.y + $bounds$$81$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$40$$, $bounds$$82$$) {
  var $radius$$23$$ = window.Math.min($bounds$$82$$.$w$, $bounds$$82$$.$h$) / 2;
  return $gauge$$40$$.$__getOptions$().background.indicatorLength * $radius$$23$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$41$$, $indicatorBounds$$1$$) {
  var $anchorY$$3_indicatorOptions$$1$$ = $gauge$$41$$.$__getOptions$().indicator, $anchorX$$3$$ = $anchorY$$3_indicatorOptions$$1$$._anchorX, $anchorY$$3_indicatorOptions$$1$$ = $anchorY$$3_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$3$$) && !(0,window.isNaN)($anchorY$$3_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$3$$, $anchorY$$3_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$42$$, $bounds$$84$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$42$$, $bounds$$84$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$43$$, $container$$135$$, $bounds$$85$$) {
  var $i$$532_options$$210$$ = $gauge$$43$$.$__getOptions$();
  if("on" == $i$$532_options$$210$$.metricLabel.rendered) {
    var $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$532_options$$210$$.value, $gauge$$43$$), $cx$$20_label$$74$$ = $bounds$$85$$.x + $bounds$$85$$.$w$ / 2, $cy$$20_longestLabel$$1_size$$38$$ = $bounds$$85$$.y + $bounds$$85$$.$h$ / 2, $labelWidth$$4$$ = $bounds$$85$$.$w$, $labelHeight$$5$$ = $bounds$$85$$.$h$, $maxString$$1_metricLabelBounds$$ = $i$$532_options$$210$$.background._metricLabelBounds;
    $maxString$$1_metricLabelBounds$$ && ($cx$$20_label$$74$$ = $maxString$$1_metricLabelBounds$$.x + $maxString$$1_metricLabelBounds$$.width / 2, $cy$$20_longestLabel$$1_size$$38$$ = $maxString$$1_metricLabelBounds$$.y + $maxString$$1_metricLabelBounds$$.height / 2, $bounds$$85$$.$w$ = $maxString$$1_metricLabelBounds$$.width, $bounds$$85$$.$h$ = $maxString$$1_metricLabelBounds$$.height);
    $cx$$20_label$$74$$ = new D.$DvtOutputText$$($gauge$$43$$.$_context$, $labelString$$5$$, $cx$$20_label$$74$$, $cy$$20_longestLabel$$1_size$$38$$);
    !$i$$532_options$$210$$.metricLabel.style.$getStyle$("color") && $i$$532_options$$210$$.background._isDark && $i$$532_options$$210$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$20_label$$74$$.$setCSSStyle$($i$$532_options$$210$$.metricLabel.style);
    $cy$$20_longestLabel$$1_size$$38$$ = (0,window.parseInt)($i$$532_options$$210$$.metricLabel.style.$getFontSize$());
    if(!$cy$$20_longestLabel$$1_size$$38$$) {
      $cy$$20_longestLabel$$1_size$$38$$ = window.Math.max(D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$532_options$$210$$.max, $gauge$$43$$).length, D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$532_options$$210$$.min, $gauge$$43$$).length, $labelString$$5$$.length);
      $maxString$$1_metricLabelBounds$$ = "";
      "percent" == $i$$532_options$$210$$.metricLabel.textType && ($cy$$20_longestLabel$$1_size$$38$$ = window.Math.max(3, $labelString$$5$$.length), $maxString$$1_metricLabelBounds$$ += "%");
      for($i$$532_options$$210$$ = 0;$i$$532_options$$210$$ < $cy$$20_longestLabel$$1_size$$38$$;$i$$532_options$$210$$++) {
        $maxString$$1_metricLabelBounds$$ += "0"
      }
      $cx$$20_label$$74$$.$setTextString$($maxString$$1_metricLabelBounds$$);
      $cy$$20_longestLabel$$1_size$$38$$ = $cx$$20_label$$74$$.$getOptimalFontSize$($bounds$$85$$);
      $cx$$20_label$$74$$.$setTextString$($labelString$$5$$);
      $cx$$20_label$$74$$.$setFontSize$($cy$$20_longestLabel$$1_size$$38$$)
    }
    $cx$$20_label$$74$$.$alignCenter$();
    $cx$$20_label$$74$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$20_label$$74$$, $labelWidth$$4$$, $labelHeight$$5$$, $container$$135$$) && $cx$$20_label$$74$$.$isTruncated$() && $gauge$$43$$.$__getEventManager$().$associate$($cx$$20_label$$74$$, new D.$DvtSimpleObjPeer$$($labelString$$5$$))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$44$$, $container$$136$$, $bounds$$86$$) {
  var $options$$211$$ = $gauge$$44$$.$__getOptions$(), $isRTL$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$44$$.$_context$);
  if($options$$211$$.background.radius && $options$$211$$.background.majorTickCount) {
    var $radius$$24$$ = $options$$211$$.background._radius, $minValue$$13$$ = $options$$211$$.min, $maxValue$$14$$ = $options$$211$$.max, $majorTickCount$$1$$ = $options$$211$$.background.majorTickCount, $fontSize$$6_longestLabel$$2$$ = 12, $labelBounds$$10$$ = new D.$DvtRectangle$$($cx$$21_i$$533_labelValue$$2$$, $angleRads$$5_cy$$21$$, $bounds$$86$$.$w$, $bounds$$86$$.$h$), $maxString$$2_style$$45_x$$186$$ = $options$$211$$.metricLabel.style.$getStyle$("font-size");
    $options$$211$$.background._tickLabelHeight && !$maxString$$2_style$$45_x$$186$$ && ($labelBounds$$10$$.$h$ = $options$$211$$.background._tickLabelHeight);
    $options$$211$$.background._tickLabelWidth && !$maxString$$2_style$$45_x$$186$$ && ($labelBounds$$10$$.$w$ = $options$$211$$.background._tickLabelWidth);
    if(!$maxString$$2_style$$45_x$$186$$) {
      var $label$$75_labelString$$6$$ = new D.$DvtOutputText$$($gauge$$44$$.$_context$, "", $cx$$21_i$$533_labelValue$$2$$, $angleRads$$5_cy$$21$$), $fontSize$$6_longestLabel$$2$$ = window.Math.max(D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$211$$.max, $gauge$$44$$).length, D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$211$$.min, $gauge$$44$$).length), $maxString$$2_style$$45_x$$186$$ = "";
      "percent" == $options$$211$$.tickLabel.textType && ($fontSize$$6_longestLabel$$2$$ = window.Math.max(3, D.$DvtGaugeRenderer$$.$formatTickLabelValue$(100, $gauge$$44$$).length - 1), $maxString$$2_style$$45_x$$186$$ += "%");
      for(var $cx$$21_i$$533_labelValue$$2$$ = 0;$cx$$21_i$$533_labelValue$$2$$ < $fontSize$$6_longestLabel$$2$$;$cx$$21_i$$533_labelValue$$2$$++) {
        $maxString$$2_style$$45_x$$186$$ += "0"
      }
      $label$$75_labelString$$6$$.$setTextString$($maxString$$2_style$$45_x$$186$$);
      $fontSize$$6_longestLabel$$2$$ = $label$$75_labelString$$6$$.$getOptimalFontSize$($labelBounds$$10$$)
    }
    for($maxString$$2_style$$45_x$$186$$ = 0;$maxString$$2_style$$45_x$$186$$ < $majorTickCount$$1$$;$maxString$$2_style$$45_x$$186$$++) {
      $cx$$21_i$$533_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$14$$ - $minValue$$13$$) * $maxString$$2_style$$45_x$$186$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$25$$ && ($cx$$21_i$$533_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$14$$ - $minValue$$13$$) * ($majorTickCount$$1$$ - 1 - $maxString$$2_style$$45_x$$186$$) / ($majorTickCount$$1$$ - 1));
      var $label$$75_labelString$$6$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$21_i$$533_labelValue$$2$$, $gauge$$44$$), $angleRads$$5_cy$$21$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$44$$, $cx$$21_i$$533_labelValue$$2$$), $anchor$$2$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$44$$, $bounds$$86$$), $cx$$21_i$$533_labelValue$$2$$ = $anchor$$2$$.x + $radius$$24$$ * window.Math.cos($angleRads$$5_cy$$21$$ - window.Math.PI / 2), $angleRads$$5_cy$$21$$ = $anchor$$2$$.y + 
      $radius$$24$$ * window.Math.sin($angleRads$$5_cy$$21$$ - window.Math.PI / 2), $label$$75_labelString$$6$$ = new D.$DvtOutputText$$($gauge$$44$$.$_context$, $label$$75_labelString$$6$$, $cx$$21_i$$533_labelValue$$2$$, $angleRads$$5_cy$$21$$);
      !$options$$211$$.tickLabel.style.$getStyle$("color") && $options$$211$$.background._isDark && $options$$211$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$75_labelString$$6$$.$setCSSStyle$($options$$211$$.tickLabel.style);
      $options$$211$$.tickLabel.style.$getStyle$("font-size") || $label$$75_labelString$$6$$.$setFontSize$($fontSize$$6_longestLabel$$2$$);
      $label$$75_labelString$$6$$.$alignCenter$();
      $label$$75_labelString$$6$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$75_labelString$$6$$, $labelBounds$$10$$.$w$ + 0.5, $labelBounds$$10$$.$h$ + 0.5, $container$$136$$) && $label$$75_labelString$$6$$.$isTruncated$() && $gauge$$44$$.$__getEventManager$().$associate$($label$$75_labelString$$6$$, new D.$DvtSimpleObjPeer$$($label$$75_labelString$$6$$.$_untruncatedTextString$))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$284$$) {
  this.Init($context$$284$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$3$$) {
  var $mat$$18$$ = new D.$DvtMatrix$$;
  $mat$$18$$.rotate($angleRads$$3$$);
  this.$setMatrix$($mat$$18$$);
  this.$_angleRads$ = $angleRads$$3$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$48$$) {
  $params$$48$$ && 1 == $params$$48$$.length && this.$setAngle$($params$$48$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$newInstance$$ = function $$DvtRatingGauge$newInstance$$$($context$$357$$, $callback$$122$$, $callbackObj$$95$$) {
  var $gauge$$57$$ = new D.$DvtRatingGauge$$;
  $gauge$$57$$.Init($context$$357$$, $callback$$122$$, $callbackObj$$95$$);
  return $gauge$$57$$
};
D.$DvtRatingGauge$$.newInstance = D.$DvtRatingGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$358$$, $callback$$123$$, $callbackObj$$96$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$358$$, $callback$$123$$, $callbackObj$$96$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$252$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$252$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$157$$, $width$$132$$, $height$$112$$) {
  var $outerGap$$3$$ = this.$__getOptions$().__layout.outerGap, $maxValue$$19$$ = this.$Options$.max;
  this.$_size$ = window.Math.min($height$$112$$ - 2 * $outerGap$$3$$, ($width$$132$$ - 2 * $outerGap$$3$$) / $maxValue$$19$$);
  this.$_bounds$ = new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$19$$) / 2, $outerGap$$3$$, this.$_size$ * $maxValue$$19$$, this.$Height$ - 2 * $outerGap$$3$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$157$$, $width$$132$$, $height$$112$$)
};
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$217$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    $x$$217$$ = window.Math.max(window.Math.min($x$$217$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
    var $val$$29$$ = 0, $val$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$217$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$217$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min);
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$29$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods___processHoverEnd$$ = function $$JSCompiler_StaticMethods___processHoverEnd$$$($JSCompiler_StaticMethods___processHoverEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$, $JSCompiler_StaticMethods___processHoverEnd$self$$.$Options$.value, "render")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeStart$ = function $$DvtRatingGauge$$$$$__processValueChangeStart$$($x$$220$$, $y$$190$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, this.$GetValueAt$($x$$220$$, $y$$190$$), "hover")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeMove$ = function $$DvtRatingGauge$$$$$__processValueChangeMove$$($x$$221$$, $y$$191$$) {
  var $value$$121$$ = this.$GetValueAt$($x$$221$$, $y$$191$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$121$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$121$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtRatingGauge$$$$$__processValueChangeEnd$$($x$$222$$, $y$$192$$) {
  var $oldValue$$4$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$222$$, $y$$192$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$4$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$4$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $selContainer$$1_unselContainer$$1_value$$122$$, $proc_selClip_unselClip$$, $container$$158_hoverContainer$$1$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$158_hoverContainer$$1$$ || ($container$$158_hoverContainer$$1$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$_context$);
    $selContainer$$1_unselContainer$$1_value$$122$$ = window.Math.max(window.Math.min($selContainer$$1_unselContainer$$1_value$$122$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$52_hoverClip$$ = 0, $b$$35$$ = $selContainer$$1_unselContainer$$1_value$$122$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$30$$ = $selContainer$$1_unselContainer$$1_value$$122$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $proc_selClip_unselClip$$ && ($a$$52_hoverClip$$ = $selContainer$$1_unselContainer$$1_value$$122$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$35$$ = 0);
    $isRTL$$28$$ ? ($selContainer$$1_unselContainer$$1_value$$122$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - 
    $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$122$$, $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$122$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$52_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$122$$, $proc_selClip_unselClip$$), $container$$158_hoverContainer$$1$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(2), $a$$52_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$52_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$35$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($selContainer$$1_unselContainer$$1_value$$122$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$122$$, 
    $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$122$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$52_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), 
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$122$$, $proc_selClip_unselClip$$), $container$$158_hoverContainer$$1$$ = $container$$158_hoverContainer$$1$$.$getChildAt$(2), $a$$52_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$52_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $b$$35$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$158_hoverContainer$$1$$, $a$$52_hoverClip$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$32$$) {
  this.Init();
  this.$_gauge$ = $gauge$$32$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$207_target$$66$$, $threshold$$6_thresholdIndex$$5_x$$185$$, $y$$158$$) {
  $options$$207_target$$66$$ = this.$_gauge$.$__getOptions$();
  $threshold$$6_thresholdIndex$$5_x$$185$$ = this.$_gauge$.$__getEventManager$().$isEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$6_thresholdIndex$$5_x$$185$$, $y$$158$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$6_thresholdIndex$$5_x$$185$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$6_thresholdIndex$$5_x$$185$$)) && $threshold$$6_thresholdIndex$$5_x$$185$$.shortDesc ? $threshold$$6_thresholdIndex$$5_x$$185$$.shortDesc : $options$$207_target$$66$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = ["circle", "diamond", "rectangle", "star", "triangle"];
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$20$$, $container$$124$$, $threshold$$5_width$$104$$, $bounds$$65_height$$84$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$20$$)) {
    var $options$$200$$ = $gauge$$20$$.$__getOptions$(), $outerGap$$1_unselectedOptions$$ = $options$$200$$.__layout.outerGap, $maxValue$$11_overlayRect$$ = $options$$200$$.max, $size$$36$$ = window.Math.min($bounds$$65_height$$84$$ - 2 * $outerGap$$1_unselectedOptions$$, ($threshold$$5_width$$104$$ - 2 * $outerGap$$1_unselectedOptions$$) / $maxValue$$11_overlayRect$$);
    $bounds$$65_height$$84$$ = new D.$DvtRectangle$$(($threshold$$5_width$$104$$ - $size$$36$$ * $maxValue$$11_overlayRect$$) / 2, $outerGap$$1_unselectedOptions$$, $size$$36$$ * $maxValue$$11_overlayRect$$, $bounds$$65_height$$84$$ - 2 * $outerGap$$1_unselectedOptions$$);
    $threshold$$5_width$$104$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$20$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$20$$));
    var $selectedColor$$1_selectedOptions$$ = $options$$200$$.selectedState.color, $changedColor_changedOptions$$ = $options$$200$$.changedState.color, $selectedBorderColor_unselContainer$$ = $options$$200$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$200$$.changedState.borderColor;
    $threshold$$5_width$$104$$ && $threshold$$5_width$$104$$.color && ($changedColor_changedOptions$$ = $selectedColor$$1_selectedOptions$$ = $threshold$$5_width$$104$$.color);
    $threshold$$5_width$$104$$ && $threshold$$5_width$$104$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$ = $threshold$$5_width$$104$$.borderColor);
    $outerGap$$1_unselectedOptions$$ = {value:0, type:$options$$200$$.unselectedState.shape, color:$options$$200$$.unselectedState.color, borderColor:$options$$200$$.unselectedState.borderColor, visualEffects:$options$$200$$.visualEffects};
    $selectedColor$$1_selectedOptions$$ = {value:0, type:$options$$200$$.selectedState.shape, color:$selectedColor$$1_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$, visualEffects:$options$$200$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$200$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$200$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$200$$.hoverState.shape, color:$options$$200$$.hoverState.color, borderColor:$options$$200$$.hoverState.borderColor, visualEffects:$options$$200$$.visualEffects};
    "dot" == $options$$200$$.unselectedState.shape && ($outerGap$$1_unselectedOptions$$.type = "circle", $outerGap$$1_unselectedOptions$$.visualEffects = "none", $outerGap$$1_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$ = new D.$DvtContainer$$($gauge$$20$$.$_context$);
    $container$$124$$.$addChild$($selectedBorderColor_unselContainer$$);
    var $selContainer$$ = new D.$DvtContainer$$($gauge$$20$$.$_context$);
    $container$$124$$.$addChild$($selContainer$$);
    var $hoverContainer$$ = new D.$DvtContainer$$($gauge$$20$$.$_context$);
    $container$$124$$.$addChild$($hoverContainer$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$20$$, $options$$200$$.value, "render", $container$$124$$);
    for(var $i$$526$$ = 0;$i$$526$$ < $maxValue$$11_overlayRect$$;$i$$526$$++) {
      if("none" != $options$$200$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$20$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$65_height$$84$$.x + $i$$526$$ * $size$$36$$, $bounds$$65_height$$84$$.y + $bounds$$65_height$$84$$.$h$ / 2 - $size$$36$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$1_unselectedOptions$$.type) && ($outerGap$$1_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$1_unselectedOptions$$, $size$$36$$, $size$$36$$)
      }
      $options$$200$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$20$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$65_height$$84$$.x + $i$$526$$ * $size$$36$$, $bounds$$65_height$$84$$.y + $bounds$$65_height$$84$$.$h$ / 
      2 - $size$$36$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedColor_changedOptions$$.type) && ($changedColor_changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$36$$, $size$$36$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$20$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), 
      $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$65_height$$84$$.x + $i$$526$$ * $size$$36$$, $bounds$$65_height$$84$$.y + $bounds$$65_height$$84$$.$h$ / 2 - $size$$36$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $selectedColor$$1_selectedOptions$$.type) && ($selectedColor$$1_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($selectedColor$$1_selectedOptions$$, 
      $size$$36$$, $size$$36$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$20$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$65_height$$84$$.x + $i$$526$$ * $size$$36$$, $bounds$$65_height$$84$$.y + $bounds$$65_height$$84$$.$h$ / 2 - $size$$36$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedBorderColor_hoverOptions$$.type) && ($changedBorderColor_hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$36$$, $size$$36$$)
    }
    $maxValue$$11_overlayRect$$ = new D.$DvtRect$$($gauge$$20$$.$_context$, $bounds$$65_height$$84$$.x, $bounds$$65_height$$84$$.y, $bounds$$65_height$$84$$.$w$, $bounds$$65_height$$84$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($maxValue$$11_overlayRect$$);
    $container$$124$$.$addChild$($maxValue$$11_overlayRect$$);
    ($threshold$$5_width$$104$$ && $threshold$$5_width$$104$$.shortDesc ? $threshold$$5_width$$104$$.shortDesc : $options$$200$$.shortDesc) && $gauge$$20$$.$__getEventManager$().$associate$($maxValue$$11_overlayRect$$, new D.$DvtRatingGaugePeer$$($gauge$$20$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$20$$, $container$$124$$, new D.$DvtRectangle$$(0, 0, $threshold$$5_width$$104$$, $bounds$$65_height$$84$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$54$$) {
  this.Init($gauge$$54$$.$_context$, $gauge$$54$$.$__dispatchEvent$, $gauge$$54$$);
  this.$_gauge$ = $gauge$$54$$;
  this.$_bValueChanged$ = this.$isEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isIE$ = (0,D.$DvtAgent$isPlatformIE$$)();
  this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$360$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && !this.$_bValueChanged$) {
    var $coords$$21$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$360$$.pageX, $event$$360$$.pageY), $JSCompiler_StaticMethods___processHoverStart$self$$inline_5337$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverStart$self$$inline_5337$$, $JSCompiler_StaticMethods___processHoverStart$self$$inline_5337$$.$GetValueAt$($coords$$21$$.x, $coords$$21$$.y), "hover");
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$360$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$361$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    if(this.$_isIE$ && this.$_bValueChanged$ && this.$_stopAutoMouseOut$) {
      this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$;
      return
    }
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$361$$.pageX, $event$$361$$.pageY);
    (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$);
    this.$_bValueChanged$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$361$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$23_event$$362$$) {
  this.$_bValueChanged$ || (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$23_event$$362$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$23_event$$362$$.pageX, $coords$$23_event$$362$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$23_event$$362$$.x, $coords$$23_event$$362$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$23_event$$362$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$24_event$$363$$) {
  this.$isEditing$ && (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$24_event$$363$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$24_event$$363$$.pageX, $coords$$24_event$$363$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$24_event$$363$$.x, $coords$$24_event$$363$$.y), (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$), this.$_bValueChanged$ = D.$JSCompiler_alias_TRUE$$, 
  this.$_isIE$ && (this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_TRUE$$)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$24_event$$363$$))
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
});