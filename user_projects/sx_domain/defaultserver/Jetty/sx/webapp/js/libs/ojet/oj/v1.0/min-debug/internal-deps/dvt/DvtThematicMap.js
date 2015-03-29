"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$331$$, $callback$$99$$, $callbackObj$$72$$) {
  this.Init($context$$331$$, $callback$$99$$, $callbackObj$$72$$)
};
(0,D.$goog$exportSymbol$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$332$$, $callback$$100$$, $callbackObj$$73$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$332$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$332$$, $callback$$100$$, $callbackObj$$73$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$332$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$333$$, $callback$$101$$, $callbackObj$$74$$) {
  return new D.$DvtAmxThematicMap$$($context$$333$$, $callback$$101$$, $callbackObj$$74$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$235$$, $availSpace$$87_width$$120$$, $height$$100$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$235$$);
  this.$_width$ = $availSpace$$87_width$$120$$;
  this.$_height$ = $height$$100$$;
  $availSpace$$87_width$$120$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$87_width$$120$$, $height$$100$$);
  this.$_renderLegend$(this, $availSpace$$87_width$$120$$);
  this.$_tmap$.$render$($options$$235$$, $availSpace$$87_width$$120$$.$w$, $availSpace$$87_width$$120$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$141$$, $availSpace$$88$$) {
  this.$_legend$ && ($container$$141$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$88$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$88$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$17_options$$236$$ = this.$Options$, $position$$30_rendered$$3$$ = $gap$$17_options$$236$$.legend.rendered, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ = $gap$$17_options$$236$$.legend.scrolling, $legendOptions$$9$$ = 
  D.$DvtJSONUtils$$.clone($gap$$17_options$$236$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$9$$);
  if($position$$30_rendered$$3$$ && !($legendOptions$$9$$.$sections$ && 0 == $legendOptions$$9$$.$sections$.length)) {
    $position$$30_rendered$$3$$ = $gap$$17_options$$236$$.legend.position;
    delete $legendOptions$$9$$.position;
    $legendOptions$$9$$.layout.gapRatio = (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this);
    $legendOptions$$9$$.hideAndShowBehavior = "none";
    $legendOptions$$9$$.rolloverBehavior = "none";
    $legendOptions$$9$$.scrolling = $gap$$17_options$$236$$.legend.scrolling;
    var $legend$$24$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
    this.$_tmap$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$24$$.setId(this.$_tmap$.getId() + "legend");
    $container$$141$$.$addChild$($legend$$24$$);
    "auto" == $position$$30_rendered$$3$$ && "asNeeded" !== $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ ? $position$$30_rendered$$3$$ = "bottom" : "auto" == $position$$30_rendered$$3$$ && "asNeeded" == $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ && ($position$$30_rendered$$3$$ = "end");
    $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$141$$.$_context$);
    "start" == $position$$30_rendered$$3$$ ? $position$$30_rendered$$3$$ = $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ ? "right" : "left" : "end" == $position$$30_rendered$$3$$ && ($position$$30_rendered$$3$$ = $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ ? "left" : "right");
    $legendOptions$$9$$.orientation = "left" == $position$$30_rendered$$3$$ || "right" == $position$$30_rendered$$3$$ ? "vertical" : "horizontal";
    $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ = "top" == $position$$30_rendered$$3$$ || "bottom" == $position$$30_rendered$$3$$;
    $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ = $legend$$24$$.$getPreferredSize$($legendOptions$$9$$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ ? $availLegendSpace$$.$w$ : $gap$$17_options$$236$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$ ? $gap$$17_options$$236$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$w$ && 0 < $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$h$) {
      switch($legend$$24$$.$render$($legendOptions$$9$$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$w$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$h$), this.$_legend$ = $legend$$24$$, $gap$$17_options$$236$$ = window.Math.ceil($gap$$17_options$$236$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this)), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$30_rendered$$3$$, $legend$$24$$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$w$, $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$h$, 
      $gap$$17_options$$236$$), $position$$30_rendered$$3$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$88$$.$h$ -= $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$88$$.$w$ -= $actualSize$$5_isHoriz$$9_isRTL$$26_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getGapRatio$$ = function $$JSCompiler_StaticMethods_getGapRatio$$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$103$$, $legendOptions$$10$$) {
  $legendOptions$$10$$.title = $data$$103$$.legend ? $data$$103$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$10$$.sections = [];
  if($data$$103$$ && $data$$103$$.legend && $data$$103$$.legend.sections) {
    for(var $i$$582$$ = 0;$i$$582$$ < $data$$103$$.legend.sections.length;$i$$582$$++) {
      var $dataSection$$2$$ = $data$$103$$.legend.sections[$i$$582$$];
      $dataSection$$2$$ && $legendOptions$$10$$.sections.push({title:$dataSection$$2$$.title, items:$dataSection$$2$$.items, sections:$dataSection$$2$$.sections})
    }
  }
  return $legendOptions$$10$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$328$$, $callback$$96$$, $callbackObj$$69$$) {
  this.Init($context$$328$$, $callback$$96$$, $callbackObj$$69$$)
};
(0,D.$goog$exportSymbol$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$329$$, $callback$$97$$, $callbackObj$$70$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$329$$, $callback$$97$$, $callbackObj$$70$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$;
  this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$;
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$330$$, $callback$$98$$, $callbackObj$$71$$) {
  return new D.$DvtThematicMap$$($context$$330$$, $callback$$98$$, $callbackObj$$71$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$234$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$234$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$22$$) {
  for(var $i$$567$$ = 0;$i$$567$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$567$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$567$$].$LayerName$ == $layerName$$22$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$567$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$11$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$13_featuresOff$$1$$) {
  $attr$$13_featuresOff$$1$$ = (0,window.parseInt)($attr$$13_featuresOff$$1$$);
  var $controls$$3$$ = this.$_displayedControls$;
  if(1 == $attr$$13_featuresOff$$1$$ || 3 == $attr$$13_featuresOff$$1$$ || 5 == $attr$$13_featuresOff$$1$$ || 7 == $attr$$13_featuresOff$$1$$) {
    $controls$$3$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$13_featuresOff$$1$$ || 3 == $attr$$13_featuresOff$$1$$ || 6 == $attr$$13_featuresOff$$1$$ || 7 == $attr$$13_featuresOff$$1$$) {
    $controls$$3$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$13_featuresOff$$1$$ || 5 == $attr$$13_featuresOff$$1$$ || 6 == $attr$$13_featuresOff$$1$$ || 7 == $attr$$13_featuresOff$$1$$) {
    $controls$$3$$ &= -257
  }
  this.$_displayedControls$ = $controls$$3$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$18$$) {
  this.$_drillMode$ = $attr$$18$$;
  this.$_eventHandler$.$setDrillMode$($attr$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$_context$), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$, this.$_eventHandler$.$removeListeners$(this), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, this))
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$_context$, $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$422_x$$202$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) || ($event$$422_x$$202$$ = this.$_width$ - 5 - $event$$422_x$$202$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$422_x$$202$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = "true" == this.$_legendData$.disclosed, $isFixed$$ = "fixed" == this.$_legendData$.display || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$ || $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$) {
      var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = this.$_legendData$.maxWidth, $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.indexOf("%"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = 
      -1 != $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$ ? (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.substring(0, $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$)) / 100 * this.$_width$ : (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$), 
      $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$ = this.$_height$ - 10;
      if("alta" == this.$_skinName$) {
        this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$_context$, D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$), this.$_legendPanel$.$setMaxHeight$($collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$), 
        this.$_legendPanel$.$_isFixed$ = $isFixed$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.$_width$)
      }else {
        var $downState$$13_legendCollapseDir$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? "col_northwest" : "col_northeast";
        this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$_context$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$, $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$, $downState$$13_legendCollapseDir$$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, 
        $isFixed$$);
        this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this);
        this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this);
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = this.$_legendPanel$;
        $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$ = this.$_legendData$.collapseTooltip;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.$_expandTooltip$ = this.$_legendData$.expandTooltip;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.$_collapseTooltip$ = $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$
      }
      this.$_legend$ = new D.DvtCommonLegend(this.$_context$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$_skinName$);
      this.$_legend$.$setJSON$(this.$_legendData$);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      this.$_legend$.$render$();
      var $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = this.$_legend$.$getDimensions$();
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $downState$$13_legendCollapseDir$$ = 
        new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$7$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$getBundle$(), "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$, $collapse$$inline_5645_maxHeight$$13_overState$$13_percentIndex$$, $downState$$13_legendCollapseDir$$, $tip$$7$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$ = this.$_legendPanel$, $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_scrollableContainer$.$addChild$($disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_scrollableContainer$.$getDimensions$(), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.$w$ + 10, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$.$h$ + 10, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_height$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_width$ = $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$, 
        $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$)), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseDir$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$ && $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ && $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_width$)) : ($disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_context$, 
        (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$, $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$)), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$ = 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_styleMap$.borderAlpha, $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_bgAlpha$), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_borderColor$, 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_5643_alpha$$inline_10536_dim$$30_dims$$inline_5649_height$$inline_5651_maxWidth$$19_upState$$16$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_background$ = $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_background$, 
        0), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_context$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_styleMap$.borderAlpha), 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonImages$, 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$), 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseDir$ || ($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$setTranslateY$(25), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$setRotation$(-window.Math.PI)), (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_context$) && 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_width$), (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$) : 
        ($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$OnButtonHoverOver$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$_collapse$ && 
        (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 5 : this.$_width$ - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$w$ - 
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $disclosed$$2_object$$inline_5648_rect$$inline_10535_west$$inline_5652_width$$inline_5650_x$$203$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_5647_legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.$_width$ - this.$_legendWidth$, this.$_height$, D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$_context$), $cpContainer$$ = new D.$DvtContainer$$(this.$_context$);
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($cpContainer$$);
  this.$_render$($pzcContainer$$, $cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    var $bounds$$100$$ = new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$_animationOnDisplay$, this.$_pzc$, $bounds$$100$$, this.$_animationDuration$))
    }else {
      var $anim$$35$$ = D.$JSCompiler_alias_NULL$$;
      if(this.$_bBaseMapChanged$ && !this.$_isResize$) {
        $anim$$35$$ = this.$_animationOnMapChange$
      }else {
        if(this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$35$$ = this.$_topLayer$.$getAnimation$(), !$anim$$35$$)) {
          var $dataLayers$$7$$ = this.$_topLayer$.$DataLayers$, $i$$568$$;
          for($i$$568$$ in $dataLayers$$7$$) {
            if($dataLayers$$7$$[$i$$568$$].$getAnimation$()) {
              $anim$$35$$ = $dataLayers$$7$$[$i$$568$$].$getAnimation$();
              break
            }
          }
        }
      }
      $anim$$35$$ && D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$35$$) ? (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $anim$$35$$, this.$_oldPzc$, this.$_pzc$, $bounds$$100$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$) : (this.$_pzc$.$_contentPane$.removeChild(this.$_cpContainer$), this.$OnAnimationEnd$())
    }
    this.$_animation$ && (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play(D.$JSCompiler_alias_TRUE$$));
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_cpContainer$ = $cpContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$569_mapDim$$inline_10542$$ = 0;$i$$569_mapDim$$inline_10542$$ < this.$_layers$.length;$i$$569_mapDim$$inline_10542$$++) {
    var $layer$$18_pzcDim$$inline_10543$$ = this.$_layers$[$i$$569_mapDim$$inline_10542$$];
    if(!this.$_topLayerRendered$ && $layer$$18_pzcDim$$inline_10543$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$18_pzcDim$$inline_10543$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$18_pzcDim$$inline_10543$$.$render$($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$), !this.$_topLayerRendered$ && $layer$$18_pzcDim$$inline_10543$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$18_pzcDim$$inline_10543$$)
    }
  }
  this.$_topLayer$ && ($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$.length && ($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && 
  ($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$), this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), 
  this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), 
  $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = this.$_pzc$.$_zoomToFitPadding$, $i$$569_mapDim$$inline_10542$$ = this.$_topLayer$.$getLayerDim$(), $layer$$18_pzcDim$$inline_10543$$ = this.$_pzc$.$getSize$(), $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ = window.Math.min(($layer$$18_pzcDim$$inline_10543$$.$w$ - 2 * $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$) / 
  $i$$569_mapDim$$inline_10542$$.$w$, ($layer$$18_pzcDim$$inline_10543$$.$h$ - 2 * $fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$) / $i$$569_mapDim$$inline_10542$$.$h$), this.$_pzc$.$setMinZoom$($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$), this.$_pzc$.$setMaxZoom$($fittedZoom$$inline_5664_navigable$$inline_5655_navigables$$11_pzcMatrix$$20_zoomPadding$$inline_10541$$ * (this.$_zooming$ ? 
  this.$_maxZoomFactor$ : 1)), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_prototypeAlias$$.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$21$$) {
  var $mat$$24$$ = new D.$DvtMatrix$$;
  $mat$$24$$.translate($pzcMatrix$$21$$.$_tx$, $pzcMatrix$$21$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$24$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$24$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$423$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$, "show" == $event$$423$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$122_event$$424$$, $bRecenterObjs_transMat$$) {
  if($animator$$122_event$$424$$ = $animator$$122_event$$424$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$25$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$122_event$$424$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$122_event$$424$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$25$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$25$$.$_tx$, $mat$$25$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$122_event$$424$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$122_event$$424$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$) {
  switch($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$_newZoom$;
        $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$ = this.$_pzc$.$getSize$();
        $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$ = new D.$DvtRectangle$$($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$.$w$ - 2 * $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$.$h$ - 2 * 
        $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$);
        var $legendAdjust$$inline_5706_mapDim$$inline_5701$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_5707_zoomedMapX$$inline_5702$$ = $legendAdjust$$inline_5706_mapDim$$inline_5701$$.x * $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$, $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$ = $legendAdjust$$inline_5706_mapDim$$inline_5701$$.y * $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$, $zoomedMapW$$inline_5704$$ = $legendAdjust$$inline_5706_mapDim$$inline_5701$$.$w$ * 
        $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$, $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ = $legendAdjust$$inline_5706_mapDim$$inline_5701$$.$h$ * $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$, $legendAdjust$$inline_5706_mapDim$$inline_5701$$ = 0;
        $zoomedMapW$$inline_5704$$ > $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$w$ ? (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && ($legendAdjust$$inline_5706_mapDim$$inline_5701$$ = this.$_legendWidth$), this.$_pzc$.$_minPanX$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.x + $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$w$ + $legendAdjust$$inline_5706_mapDim$$inline_5701$$ - 
        ($minMaxX$$inline_5707_zoomedMapX$$inline_5702$$ + $zoomedMapW$$inline_5704$$), this.$_pzc$.$_maxPanX$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.x - $minMaxX$$inline_5707_zoomedMapX$$inline_5702$$ + $legendAdjust$$inline_5706_mapDim$$inline_5701$$) : (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && ($legendAdjust$$inline_5706_mapDim$$inline_5701$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_5707_zoomedMapX$$inline_5702$$ = 
        ($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.x + $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$w$ + $legendAdjust$$inline_5706_mapDim$$inline_5701$$) / 2 - ($minMaxX$$inline_5707_zoomedMapX$$inline_5702$$ + $zoomedMapW$$inline_5704$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_5707_zoomedMapX$$inline_5702$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_5707_zoomedMapX$$inline_5702$$);
        $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ > $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.y + $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$h$ - ($pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$ + $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$), this.$_pzc$.$_maxPanY$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.y - 
        $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$) : ($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$ = ($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.y + $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$h$) / 2 - ($pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$ + $i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ / 2), this.$_pzc$.$_minPanY$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, 
        this.$_pzc$.$_maxPanY$ = $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, "panX", $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, "panY", $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$.$_ty$);
        $event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$);
        for($i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ = 0;$i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$ < this.$_layers$.length;$i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$++) {
          this.$_layers$[$i$$570_zoom$$inline_5697_zoomedMapH$$inline_5705$$].$HandleZoomEvent$($event$$425_minMaxY$$inline_5708_padding$$inline_5698_viewportDim$$inline_5700$$, $pzcDim$$inline_5699_pzcMatrix$$22_zoomedMapY$$inline_5703$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitEnd":
      this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$426_i$$571_stroke$$79$$) {
  var $subType$$5$$ = $event$$426_i$$571_stroke$$79$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$5$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$426_i$$571_stroke$$79$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$5$$ && $event$$426_i$$571_stroke$$79$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$23_styleMap$$43$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$426_i$$571_stroke$$79$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$426_i$$571_stroke$$79$$, "panX", $pzcMatrix$$23_styleMap$$43$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$426_i$$571_stroke$$79$$, "panY", $pzcMatrix$$23_styleMap$$43$$.$_ty$);
      $event$$426_i$$571_stroke$$79$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$426_i$$571_stroke$$79$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$23_styleMap$$43$$);
      for($event$$426_i$$571_stroke$$79$$ = 0;$event$$426_i$$571_stroke$$79$$ < this.$_layers$.length;$event$$426_i$$571_stroke$$79$$++) {
        this.$_layers$[$event$$426_i$$571_stroke$$79$$].$HandlePanEvent$($pzcMatrix$$23_styleMap$$43$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$5$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$5$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$23_styleMap$$43$$ = this.$getSubcomponentStyles$(), $event$$426_i$$571_stroke$$79$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), "dragPanBegin" === $subType$$5$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$23_styleMap$$43$$.backgroundDragAlpha), 
  $event$$426_i$$571_stroke$$79$$.$setAlpha$($pzcMatrix$$23_styleMap$$43$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$426_i$$571_stroke$$79$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$23_styleMap$$43$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$5$$ && (this.$_legend$.$setAlpha$(1), $event$$426_i$$571_stroke$$79$$.$setAlpha$($pzcMatrix$$23_styleMap$$43$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$426_i$$571_stroke$$79$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$23_styleMap$$43$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$572$$ = 0;$i$$572$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$572$$++) {
    var $layerName$$24$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$572$$].$LayerName$;
    $layerName$$24$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$24$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$24$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$24$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$24$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_5711_removeObjs$$ = [], $addObjs$$ = [], $i$$573_j$$91$$ = this.$_layers$.length - 1;-1 < $i$$573_j$$91$$;$i$$573_j$$91$$--) {
    this.$_layers$[$i$$573_j$$91$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$573_j$$91$$].reset($addObjs$$) : this.$_layers$[$i$$573_j$$91$$].reset($animator$$inline_5711_removeObjs$$)
  }
  for($i$$573_j$$91$$ = 0;$i$$573_j$$91$$ < $animator$$inline_5711_removeObjs$$.length;$i$$573_j$$91$$++) {
    if($animator$$inline_5711_removeObjs$$[$i$$573_j$$91$$]) {
      var $parent$$54$$ = $animator$$inline_5711_removeObjs$$[$i$$573_j$$91$$].getParent();
      $parent$$54$$ && $parent$$54$$.removeChild($animator$$inline_5711_removeObjs$$[$i$$573_j$$91$$])
    }
  }
  for($i$$573_j$$91$$ = 0;$i$$573_j$$91$$ < $addObjs$$.length;$i$$573_j$$91$$++) {
    $addObjs$$[$i$$573_j$$91$$] && $addObjs$$[$i$$573_j$$91$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_5711_removeObjs$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_5711_removeObjs$$);
  $animator$$inline_5711_removeObjs$$.play(D.$JSCompiler_alias_TRUE$$);
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$101$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$26$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$26$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$26$$.$_d$;
    $pointBounds$$.x /= $mat$$26$$.$_a$;
    $pointBounds$$.y /= $mat$$26$$.$_d$
  }
  $areaBounds_bounds$$101$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$101$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$_context$, 0.3));
  0 < $areaBounds_bounds$$101$$.$w$ && 0 < $areaBounds_bounds$$101$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$101$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$102$$) {
  var $animator$$123$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$123$$, $bounds$$102$$);
  $animator$$123$$.play(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$29_selection$$21_selectionHandler$$5$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$29_selection$$21_selectionHandler$$5$$ && ($dataLayer$$29_selection$$21_selectionHandler$$5$$ = $dataLayer$$29_selection$$21_selectionHandler$$5$$.$_selectionHandler$)) {
      for(var $dataLayer$$29_selection$$21_selectionHandler$$5$$ = $dataLayer$$29_selection$$21_selectionHandler$$5$$.getSelection(), $i$$574$$ = 0;$i$$574$$ < $dataLayer$$29_selection$$21_selectionHandler$$5$$.length;$i$$574$$++) {
        $dataLayer$$29_selection$$21_selectionHandler$$5$$[$i$$574$$] = $dataLayer$$29_selection$$21_selectionHandler$$5$$[$i$$574$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$29_selection$$21_selectionHandler$$5$$.length) {
        for(var $bounds$$103$$ = $dataLayer$$29_selection$$21_selectionHandler$$5$$[0].$getDimensions$(), $i$$574$$ = 1;$i$$574$$ < $dataLayer$$29_selection$$21_selectionHandler$$5$$.length;$i$$574$$++) {
          $bounds$$103$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$103$$, $dataLayer$$29_selection$$21_selectionHandler$$5$$[$i$$574$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$103$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$25$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$25$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$26$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$26$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$3$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$575$$ = 0;$i$$575$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$575$$++) {
      var $dataLayers$$8$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$575$$].$DataLayers$, $id$$162$$;
      for($id$$162$$ in $dataLayers$$8$$) {
        $disclosed$$3$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$575$$].$LayerName$ ? $disclosed$$3$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$8$$[$id$$162$$])) : $disclosed$$3$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$8$$[$id$$162$$]))
      }
    }
  }
  return $disclosed$$3$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$9$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$576$$ = 0;$i$$576$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$576$$++) {
      var $dataLayers$$9$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$576$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$576$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$576$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$163$$ in $dataLayers$$9$$) {
          $navigable$$9$$ = $navigable$$9$$.concat($dataLayers$$9$$[$id$$163$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$9$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$15$$) {
  this.$_currentAnimMatrix$ = $matrix$$15$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$4$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$577_j$$92$$ = 0;$i$$577_j$$92$$ < $numLabelLayers_objs$$4$$.length;$i$$577_j$$92$$++) {
      $numLabelLayers_objs$$4$$[$i$$577_j$$92$$].$HandleZoomEvent$($matrix$$15$$)
    }
    $numLabelLayers_objs$$4$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$577_j$$92$$ = 0;$i$$577_j$$92$$ < $numLabelLayers_objs$$4$$;$i$$577_j$$92$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$577_j$$92$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$5$$ = 0;$k$$5$$ < $numLabels$$1$$;$k$$5$$++) {
        var $label$$78$$ = $labelLayer$$.$getChildAt$($k$$5$$);
        $label$$78$$ instanceof D.$DvtMapLabel$$ && $label$$78$$.update($matrix$$15$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$4$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$578$$ = 0;$i$$578$$ < $selectedAreas$$1$$.length;$i$$578$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$578$$], $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_5714_j$$93$$ = 0;$areaName$$inline_5714_j$$93$$ < $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.length;$areaName$$inline_5714_j$$93$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$[$areaName$$inline_5714_j$$93$$]] = $selectedAreas$$1$$[$i$$578$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$ = $parentLayer$$4$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_5714_j$$93$$ = $parentArea$$, $fadeOutObjs$$inline_5715$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ = 0;$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ < $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$AreaId$ == $areaName$$inline_5714_j$$93$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_5714_j$$93$$);
            $fadeOutObjs$$inline_5715$$.push($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$getDisplayable$());
            if($i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ = $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$getLabel$()) {
              $fadeOutObjs$$inline_5715$$.push($i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$), ($i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ = $i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$.$_leaderLine$) && $fadeOutObjs$$inline_5715$$.push($i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$)
            }
            break
          }
        }
        for($i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ = 0;$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$ < $JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$AreaId$ == $areaName$$inline_5714_j$$93$$) {
            $fadeOutObjs$$inline_5715$$.push($JSCompiler_StaticMethods_drill$self$$inline_5713_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_5716_label$$inline_5717_leaderLine$$inline_5718$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$579$$ = 0;$i$$579$$ < $selectedAreas$$2$$.length;$i$$579$$++) {
    var $index$$129_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$579$$]];
    $newSelectedAreas$$1$$.push($index$$129_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$129_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$5$$, $index$$129_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_5720$$ = $parentLayer$$5$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$5$$.$LayerName$]), $areaName$$inline_5721$$ = $index$$129_parentArea$$1$$, $fadeInObjs$$inline_5722$$ = $fadeInObjs$$6$$, $i$$inline_5723_label$$inline_5725$$ = 0;$i$$inline_5723_label$$inline_5725$$ < $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_areaObjs$.length;$i$$inline_5723_label$$inline_5725$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_areaObjs$[$i$$inline_5723_label$$inline_5725$$].$AreaId$ == $areaName$$inline_5721$$) {
          $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_drilled$.splice(D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_drilled$, $areaName$$inline_5721$$), 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_areaObjs$[$i$$inline_5723_label$$inline_5725$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$inline_5724$$ = $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_areaObjs$[$i$$inline_5723_label$$inline_5725$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_dataAreaLayer$.$addChild$($displayable$$inline_5724$$);
          $fadeInObjs$$inline_5722$$.push($displayable$$inline_5724$$);
          if($i$$inline_5723_label$$inline_5725$$ = $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_areaObjs$[$i$$inline_5723_label$$inline_5725$$].$getLabel$()) {
            $i$$inline_5723_label$$inline_5725$$.update($JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_pzcMatrix$), $fadeInObjs$$inline_5722$$.push($i$$inline_5723_label$$inline_5725$$), $fadeInObjs$$inline_5722$$.push($i$$inline_5723_label$$inline_5725$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_5723_label$$inline_5725$$ = 0;$i$$inline_5723_label$$inline_5725$$ < $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_dataObjs$.length;$i$$inline_5723_label$$inline_5725$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_dataObjs$[$i$$inline_5723_label$$inline_5725$$].$AreaId$ == $areaName$$inline_5721$$) {
          $displayable$$inline_5724$$ = $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_dataObjs$[$i$$inline_5723_label$$inline_5725$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_5720$$.$_dataPointLayer$.$addChild$($displayable$$inline_5724$$);
          $fadeInObjs$$inline_5722$$.push($displayable$$inline_5724$$);
          break
        }
      }
      $index$$129_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$129_parentArea$$1$$);
      -1 != $index$$129_parentArea$$1$$ && this.$_drilled$.splice($index$$129_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$5$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$, $newObjs$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$125$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$125$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$125$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$125$$ && $animator$$125$$.play(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && "alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$, $oldObjs$$, $newObjs$$, D.$JSCompiler_alias_NULL$$, 0.5));
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play(D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$427$$) {
  var $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ = $event$$427$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$427$$.getSelection();
      for(var $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$9009$$ = this.$_clickedLayerName$, $selectedObjs$$inline_10570$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_10571$$ = [], $areaObjs$$inline_10572$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_10573$$ = 0;$i$$inline_10573$$ < $selectedObjs$$inline_10570$$.length;$i$$inline_10573$$++) {
        for(var $j$$inline_10574$$ = 0;$j$$inline_10574$$ < $areaObjs$$inline_10572$$.length;$j$$inline_10574$$++) {
          if($areaObjs$$inline_10572$$[$j$$inline_10574$$].getId() == $selectedObjs$$inline_10570$$[$i$$inline_10573$$]) {
            $selectedAreas$$inline_10571$$.push($areaObjs$$inline_10572$$[$j$$inline_10574$$].$AreaId$);
            break
          }
        }
      }
      $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$[$JSCompiler_temp_const$$9009$$] = $selectedAreas$$inline_10571$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$427$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$427$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ = $event$$427$$.$_drillType$, $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$427$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$ || "hidePopup" == $JSCompiler_temp_const$$9010_drillType$$inline_5732_type$$134$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$427$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$427$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$28$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$28$$), $parentLayer$$6$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$28$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$6$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$580$$ = 0;$i$$580$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$580$$++) {
      var $obj$$173$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$580$$];
      if($obj$$173$$) {
        if($obj$$173$$ instanceof D.$DvtMapLabel$$) {
          $obj$$173$$.reset()
        }else {
          if($obj$$173$$.$isDrilled$ && $obj$$173$$.$isDrilled$()) {
            $obj$$173$$.$setAlpha$(0)
          }else {
            var $parent$$55$$ = $obj$$173$$.getParent();
            $parent$$55$$ && $parent$$55$$.removeChild($obj$$173$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_rolloverCallback$ = function $$JSCompiler_prototypeAlias$$$$_rolloverCallback$$($event$$430$$) {
  this.$_fireRolloverEvent$("mouseover" == $event$$430$$.$_mouseState$ ? "categoryRollOver" : "categoryRollOut", $event$$430$$.$getHideAttributes$())
};
D.$JSCompiler_prototypeAlias$$.$_fireRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$_fireRolloverEvent$$($type$$136$$, $category$$15$$) {
  var $rolloverEvent$$1$$ = new D.$DvtCategoryRolloverEvent$$($type$$136$$, $category$$15$$), $objects$$5$$ = [], $layerId_legendItems$$1$$;
  for($layerId_legendItems$$1$$ in this.$_areas$) {
    for(var $key$$62_wrapper$$1$$ in this.$_areas$[$layerId_legendItems$$1$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$1$$][$key$$62_wrapper$$1$$])
    }
  }
  for($layerId_legendItems$$1$$ in this.$_markers$) {
    for($key$$62_wrapper$$1$$ in this.$_markers$[$layerId_legendItems$$1$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$1$$][$key$$62_wrapper$$1$$])
    }
  }
  $layerId_legendItems$$1$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$1$$ in $layerId_legendItems$$1$$) {
    $key$$62_wrapper$$1$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$1$$[$legendCategory$$1$$].$getContentShape$(), $legendCategory$$1$$), $objects$$5$$.push($key$$62_wrapper$$1$$)
  }
  (0,D.$DvtCategoryRolloverHandler$processEvent$$)($rolloverEvent$$1$$, $objects$$5$$, 0.1)
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", dataAreaDefaults:{borderColor:"#FFFFFF", drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", 
hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:"0.5px", color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selection:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$44$$ = 0;$i$$44$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$44$$++) {
    var $dataLayers$$1$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$44$$].$DataLayers$, $id$$11$$;
    for($id$$11$$ in $dataLayers$$1$$) {
      var $dragSource$$ = $dataLayers$$1$$[$id$$11$$].$_dragSource$;
      if($dragSource$$ && $dragSource$$.$_dragCandidate$) {
        return $dragSource$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$1_mouseX$$5$$, $mouseY$$5$$, $clientIds$$2$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$1_mouseX$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$1_mouseX$$5$$.$isDragAvailable$($clientIds$$2$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$6$$, $mouseY$$6$$) {
  var $dragSource$$2$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$2$$ ? $dragSource$$2$$.$getDragTransferable$($mouseX$$6$$, $mouseY$$6$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$1$$, $basemap$$4$$) {
  this.$_areaLayer$ = $areaLayer$$1$$;
  this.$_basemap$ = $basemap$$4$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportSymbol$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$13_logicalObj$$2$$) {
  $displayable$$13_logicalObj$$2$$ = this.$_tmap$.$_eventHandler$.$GetLogicalObject$($displayable$$13_logicalObj$$2$$);
  var $JSCompiler_temp$$479_id$$inline_989$$;
  if($displayable$$13_logicalObj$$2$$ && ($displayable$$13_logicalObj$$2$$ instanceof D.$DvtMapDataArea$$ || $displayable$$13_logicalObj$$2$$ instanceof D.$DvtMapDataMarker$$)) {
    a: {
      for(var $layers$$inline_986$$ = this.$_tmap$.$_layers$, $i$$inline_987$$ = 0;$i$$inline_987$$ < $layers$$inline_986$$.length;$i$$inline_987$$++) {
        var $dataLayers$$inline_988$$ = $layers$$inline_986$$[$i$$inline_987$$].$DataLayers$;
        for($JSCompiler_temp$$479_id$$inline_989$$ in $dataLayers$$inline_988$$) {
          if($displayable$$13_logicalObj$$2$$ instanceof D.$DvtMapDataArea$$) {
            for(var $areas$$inline_990_markers$$inline_992$$ = $dataLayers$$inline_988$$[$JSCompiler_temp$$479_id$$inline_989$$].$_areaObjs$, $k$$inline_991$$ = 0;$k$$inline_991$$ < $areas$$inline_990_markers$$inline_992$$.length;$k$$inline_991$$++) {
              if($areas$$inline_990_markers$$inline_992$$[$k$$inline_991$$] === $displayable$$13_logicalObj$$2$$) {
                $JSCompiler_temp$$479_id$$inline_989$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$479_id$$inline_989$$) + ":area[" + $displayable$$13_logicalObj$$2$$.getId() + "]";
                break a
              }
            }
          }else {
            if($displayable$$13_logicalObj$$2$$ instanceof D.$DvtMapDataMarker$$) {
              $areas$$inline_990_markers$$inline_992$$ = $dataLayers$$inline_988$$[$JSCompiler_temp$$479_id$$inline_989$$].$_dataObjs$;
              for($k$$inline_991$$ = 0;$k$$inline_991$$ < $areas$$inline_990_markers$$inline_992$$.length;$k$$inline_991$$++) {
                if($areas$$inline_990_markers$$inline_992$$[$k$$inline_991$$] === $displayable$$13_logicalObj$$2$$) {
                  $JSCompiler_temp$$479_id$$inline_989$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$479_id$$inline_989$$) + ":marker[" + $displayable$$13_logicalObj$$2$$.getId() + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$479_id$$inline_989$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$479_id$$inline_989$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$479_id$$inline_989$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$439_dataObj$$inline_998_subId$$) {
  var $colonIdx$$ = $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.indexOf(":"), $parenIdx$$ = $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.indexOf("[");
  $JSCompiler_temp$$439_dataObj$$inline_998_subId$$ = 0 < $colonIdx$$ && 0 < $parenIdx$$ ? ($JSCompiler_temp$$439_dataObj$$inline_998_subId$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.substring(0, $colonIdx$$), $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.substring($colonIdx$$ + 1, $parenIdx$$), $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.substring($parenIdx$$ + 1, $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.length - 
  1))) ? $JSCompiler_temp$$439_dataObj$$inline_998_subId$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$439_dataObj$$inline_998_subId$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$2_dataObj$$10$$, $data$$29_dataObjType$$1$$, $dataObjId$$1_label$$24$$) {
  return($dataLayerId$$2_dataObj$$10$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$2_dataObj$$10$$, $data$$29_dataObjType$$1$$, $dataObjId$$1_label$$24$$)) ? ($data$$29_dataObjType$$1$$ = {}, $data$$29_dataObjType$$1$$.color = $dataLayerId$$2_dataObj$$10$$.$getDatatipColor$(), $data$$29_dataObjType$$1$$.tooltip = $dataLayerId$$2_dataObj$$10$$.$getDatatip$(), $dataObjId$$1_label$$24$$ = $dataLayerId$$2_dataObj$$10$$.$getLabel$(), $data$$29_dataObjType$$1$$.label = $dataObjId$$1_label$$24$$ ? 
  $dataObjId$$1_label$$24$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$29_dataObjType$$1$$.isSelected = $dataLayerId$$2_dataObj$$10$$.$isSelected$(), $data$$29_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$4$$, $dataObjType$$3$$, $dataObjId$$3$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$50$$ = 0;$i$$50$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$50$$++) {
    var $dataLayers$$3$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$50$$].$DataLayers$, $id$$17$$;
    for($id$$17$$ in $dataLayers$$3$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$17$$) == $dataLayerId$$4$$) {
        if("area" == $dataObjType$$3$$) {
          for(var $areas$$7_markers$$2$$ = $dataLayers$$3$$[$id$$17$$].$_areaObjs$, $k$$1$$ = 0;$k$$1$$ < $areas$$7_markers$$2$$.length;$k$$1$$++) {
            if($areas$$7_markers$$2$$[$k$$1$$].getId() === $dataObjId$$3$$) {
              return $areas$$7_markers$$2$$[$k$$1$$]
            }
          }
        }else {
          if("marker" == $dataObjType$$3$$) {
            $areas$$7_markers$$2$$ = $dataLayers$$3$$[$id$$17$$].$_dataObjs$;
            for($k$$1$$ = 0;$k$$1$$ < $areas$$7_markers$$2$$.length;$k$$1$$++) {
              if($areas$$7_markers$$2$$[$k$$1$$].getId() === $dataObjId$$3$$) {
                return $areas$$7_markers$$2$$[$k$$1$$]
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$5$$) {
  var $colonIdx$$1$$ = $dataLayerId$$5$$.lastIndexOf(":");
  return 0 < $colonIdx$$1$$ ? $dataLayerId$$5$$.substring($colonIdx$$1$$ + 1) : $dataLayerId$$5$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$20$$, $bSupportsVectorEffects$$) {
  this.Init($context$$20$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$21$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$21$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$5$$) {
  this.$_isDrilled$ != $drilled_parent$$5$$ && (this.$_isDrilled$ = $drilled_parent$$5$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $drilled_parent$$5$$ = 
  this.getParent(), $drilled_parent$$5$$.$addChild$(this.$_disclosedOuterShape$), $drilled_parent$$5$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = 
  D.$JSCompiler_alias_FALSE$$) : (this.$isHoverEffectShown$() && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$1$$) {
  this.$IsSelected$ != $selected$$1$$ && ($selected$$1$$ && (this.$isHoverEffectShown$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$1$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$, $outerStroke$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$, $outerStroke$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$1$$, $outerStroke$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$1$$, $outerStroke$$1$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$2$$, $outerStroke$$2$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$2$$, $outerStroke$$2$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$1$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$1$$ = $shape$$1$$.$getStroke$();
    $stroke$$1$$ && ($stroke$$1$$ = $stroke$$1$$.clone(), $stroke$$1$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$1$$.$setStroke$($stroke$$1$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$2$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$2$$ = $adjustedStroke_stroke$$2$$.clone(), $adjustedStroke_stroke$$2$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$2$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$3$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$3$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$ref$$ = this ? this : window;
D.$ref$$.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = D.$ref$$.DvtBaseMapManager : (D.$DvtBaseMapManager$$ = {}, D.$ref$$.DvtBaseMapManager = D.$DvtBaseMapManager$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$4$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$8$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$4$$];
  return $dimAr_layer$$8$$ && ($dimAr_layer$$8$$ = $dimAr_layer$$8$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$8$$[0], $dimAr_layer$$8$$[1], $dimAr_layer$$8$$[2], $dimAr_layer$$8$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$5$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$9$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$5$$];
  return $layer$$9$$ ? $layer$$9$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$6$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$10$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$6$$];
  return $layer$$10$$ ? $layer$$10$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$11$$, $layerName$$7$$, $areaId$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$11$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$11$$][$layerName$$7$$];
  var $labels$$4$$;
  $baseMapName$$3_layer$$11$$ && ($labels$$4$$ = $baseMapName$$3_layer$$11$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$4$$ && $labels$$4$$[$areaId$$7$$] ? $labels$$4$$[$areaId$$7$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLayer_coords$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap$$1_cityLayer_coords$$ && ($basemap$$1_cityLayer_coords$$ = $basemap$$1_cityLayer_coords$$.cities)) {
    if($basemap$$1_cityLayer_coords$$ = $basemap$$1_cityLayer_coords$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap$$1_cityLayer_coords$$[0], $basemap$$1_cityLayer_coords$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$2_cityLabel_cityLayer$$1$$ && ($basemap$$2_cityLabel_cityLayer$$1$$ = $basemap$$2_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$2_cityLabel_cityLayer$$1$$ = $basemap$$2_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$2_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath_baseMapName$$6_path$$11$$, $layerName$$8$$, $areaId$$8$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$3_labelInfo$$2_layer$$12$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath_baseMapName$$6_path$$11$$];
  if($basemap$$3_labelInfo$$2_layer$$12$$ && ($basemap$$3_labelInfo$$2_layer$$12$$ = $basemap$$3_labelInfo$$2_layer$$12$$[$layerName$$8$$])) {
    if(($basemap$$3_labelInfo$$2_layer$$12$$ = $basemap$$3_labelInfo$$2_layer$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$3_labelInfo$$2_layer$$12$$[$areaId$$8$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$3_labelInfo$$2_layer$$12$$[$areaId$$8$$][0]).$getCenter$()
    }
    $arPath_baseMapName$$6_path$$11$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath_baseMapName$$6_path$$11$$][$layerName$$8$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$8$$];
    if(!$arPath_baseMapName$$6_path$$11$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath_baseMapName$$6_path$$11$$ = D.$DvtPathUtils$$.$createPathArray$($arPath_baseMapName$$6_path$$11$$);
    return D.$DvtPathUtils$$.$getDimensions$($arPath_baseMapName$$6_path$$11$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$13$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$9$$];
  return $layer$$13$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$13$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$10$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$10$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$10$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$11$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$11$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$12$$, $area$$19$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$12$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$19$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$13$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$5$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$13$$);
  return $childLayerName_children$$5$$ && ($childLayerName_children$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName_children$$5$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$5$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$45$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$45$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$14$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$46$$, $dim$$7$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$14$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$14$$] = $baseMapName$$13_layerMetadata$$, $index$$46$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$46$$] = $layerName$$14$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$7$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$46$$
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$15$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$15$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$15$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$15$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$16$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$16$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$16$$]) {
      for(var $prop$$4$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$16$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$4$$] = $labelMetadata$$2$$[$prop$$4$$]
      }
    }
  }
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$43_index$$47$$, $args$$4$$, $unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$43_index$$47$$ = 0;$i$$43_index$$47$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$43_index$$47$$++) {
      $args$$4$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$43_index$$47$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2], $args$$4$$[3], $args$$4$$[4], $args$$4$$[5], $args$$4$$[6], $args$$4$$[7])
    }
    for($i$$43_index$$47$$ = 0;$i$$43_index$$47$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$43_index$$47$$++) {
      $args$$4$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$43_index$$47$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2])
    }
    for($i$$43_index$$47$$ = 0;$i$$43_index$$47$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$43_index$$47$$++) {
      $args$$4$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$43_index$$47$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2])
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = D.$JSCompiler_alias_NULL$$
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$43_index$$47$$ = 0;$i$$43_index$$47$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$43_index$$47$$++) {
      $args$$4$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$43_index$$47$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$4$$[1], $layerName$$17_lowerLayer$$ = $args$$4$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$4$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$4$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$43_index$$47$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$43_index$$47$$, 0, $layerName$$17_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$17_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$43_index$$47$$;
          for($i$$43_index$$47$$ += 1;$i$$43_index$$47$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$43_index$$47$$++) {
            ($layerName$$17_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$43_index$$47$$]]) && $layerName$$17_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$4$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$2$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$) {
  if(0 < $zoomFactor$$) {
    $basemapW_scale$$2$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$2$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$);
    if(1 >= $basemapW_scale$$2$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$12$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$12$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = D.$DvtPathUtils$$.$createPathArray$($paths$$[$path$$12$$])), $basemapH_simplifiedPaths$$[$path$$12$$] = D.$DvtPathUtils$$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$2$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$11$$, $category$$) {
  this.Init($displayable$$11$$, $category$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$12$$, $category$$1$$) {
  this.$_displayable$ = $displayable$$12$$;
  this.$_category$ = $category$$1$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$13$$, $rowKey$$4$$, $action$$1$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$13$$;
  this.$_rowKey$ = $rowKey$$4$$;
  this.$_action$ = $action$$1$$
};
(0,D.$goog$exportSymbol$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$32$$, $label$$21$$, $labelInfo$$, $labelDisplay$$4$$, $parentContainer$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$32$$, $label$$21$$, $labelInfo$$, $labelDisplay$$4$$, $parentContainer$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$33$$, $i$$40_label$$22$$, $labelInfo$$1$$, $labelDisplay$$5_line$$5_polyline$$, $parentContainer$$1_stroke$$7$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$33$$, $i$$40_label$$22$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$5_line$$5_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$7$$;
  if($labelInfo$$1$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$1$$[0])), 1 < $labelInfo$$1$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$40_label$$22$$ = 1;$i$$40_label$$22$$ < $labelInfo$$1$$.length;$i$$40_label$$22$$++) {
      $labelDisplay$$5_line$$5_polyline$$ = $labelInfo$$1$$[$i$$40_label$$22$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$5_line$$5_polyline$$[0])), $labelDisplay$$5_line$$5_polyline$$ = new D.$DvtPolyline$$($context$$33$$, $labelDisplay$$5_line$$5_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$5_line$$5_polyline$$), $parentContainer$$1_stroke$$7$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$7$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$5_line$$5_polyline$$.$setStroke$($parentContainer$$1_stroke$$7$$), this.$_leaderLines$.push($labelDisplay$$5_line$$5_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$10_zoom$$3$$) {
  $pzcMatrix$$10_zoom$$3$$ = $pzcMatrix$$10_zoom$$3$$.$_a$;
  for(var $mat_state$$4_stroke$$8$$ = -1, $center$$4_estimatedDims$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$8$$ = D.$JSCompiler_alias_FALSE$$, $i$$41_leaderLinePoints$$ = 0;$i$$41_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$41_leaderLinePoints$$++) {
    var $numPoints_zoomW$$ = this.$_boundRectangle$[$i$$41_leaderLinePoints$$].$w$ * $pzcMatrix$$10_zoom$$3$$;
    if($center$$4_estimatedDims$$1$$.$h$ <= this.$_boundRectangle$[$i$$41_leaderLinePoints$$].$h$ * $pzcMatrix$$10_zoom$$3$$) {
      if($center$$4_estimatedDims$$1$$.$w$ <= $numPoints_zoomW$$) {
        $mat_state$$4_stroke$$8$$ = $i$$41_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$8$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints_zoomW$$) {
          $mat_state$$4_stroke$$8$$ = $i$$41_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat_state$$4_stroke$$8$$ && "on" == this.$_labelDisplay$ && ($mat_state$$4_stroke$$8$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat_state$$4_stroke$$8$$ ? (-1 == $mat_state$$4_stroke$$8$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$4_estimatedDims$$1$$ = this.$_boundRectangle$[$mat_state$$4_stroke$$8$$].$getCenter$(), this.$setCenter$($center$$4_estimatedDims$$1$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat_state$$4_stroke$$8$$ ? (this.$_leaderLine$ = this.$_leaderLines$[$mat_state$$4_stroke$$8$$ - 
  1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$8$$ = this.$getCSSStyle$(), $labelBox_remove_style$$8$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$8$$), $labelBox_remove_style$$8$$ = this.$_boundRectangle$[$mat_state$$4_stroke$$8$$], $i$$41_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints_zoomW$$ = $i$$41_leaderLinePoints$$.length, $labelBox_remove_style$$8$$.x > $i$$41_leaderLinePoints$$[$numPoints_zoomW$$ - 2] ? 
  (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$8$$.x, $center$$4_estimatedDims$$1$$.y))) : $labelBox_remove_style$$8$$.y > $i$$41_leaderLinePoints$$[$numPoints_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$4_estimatedDims$$1$$.x, $labelBox_remove_style$$8$$.y))) : $labelBox_remove_style$$8$$.x + $labelBox_remove_style$$8$$.$w$ < $i$$41_leaderLinePoints$$[$numPoints_zoomW$$ - 2] ? (this.$alignRight$(), 
  this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$8$$.x + $labelBox_remove_style$$8$$.$w$, $center$$4_estimatedDims$$1$$.y))) : $labelBox_remove_style$$8$$.y + $labelBox_remove_style$$8$$.$h$ < $i$$41_leaderLinePoints$$[$numPoints_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$4_estimatedDims$$1$$.x, $labelBox_remove_style$$8$$.y + $labelBox_remove_style$$8$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), 
  $labelBox_remove_style$$8$$ = this.$getCSSStyle$(), $labelBox_remove_style$$8$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$8$$)))), this.$_currentState$ = $mat_state$$4_stroke$$8$$) : -1 == $mat_state$$4_stroke$$8$$ && $labelBox_remove_style$$8$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat_state$$4_stroke$$8$$ = new D.$DvtMatrix$$, $mat_state$$4_stroke$$8$$.translate($pzcMatrix$$10_zoom$$3$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$10_zoom$$3$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat_state$$4_stroke$$8$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$10_zoom$$3$$, 0, 0, $pzcMatrix$$10_zoom$$3$$)), this.$_bSupportsVectorEffects$ || ($mat_state$$4_stroke$$8$$ = this.$_leaderLine$.$getStroke$().clone(), 
  $mat_state$$4_stroke$$8$$.$setWidth$(1 / $pzcMatrix$$10_zoom$$3$$), this.$_leaderLine$.$setStroke$($mat_state$$4_stroke$$8$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$) {
  this.$_center$ = $p$$;
  this.$setX$($p$$.x);
  this.$setY$($p$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$2$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$2$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$2$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapDataObject$$ = function $$DvtMapDataObject$$$($context$$34$$, $dataLayer$$12$$, $rowKey$$2$$, $clientId$$10$$, $regionId$$4$$) {
  this.Init($context$$34$$, $dataLayer$$12$$, $rowKey$$2$$, $clientId$$10$$, $regionId$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataObject$$, D.$DvtContainer$$, "DvtMapDataObject");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataObject$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$35$$, $dataLayer$$13$$, $rowKey$$3$$, $clientId$$11$$, $regionId$$5$$) {
  D.$DvtMapDataObject$$.$superclass$.Init.call(this, $context$$35$$, D.$JSCompiler_alias_NULL$$, $clientId$$11$$);
  this.$_categories$ = [];
  this.$Shape$ = D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $rowKey$$3$$;
  this.$_clientId$ = $clientId$$11$$;
  this.$AreaId$ = $regionId$$5$$;
  this.$_selectionLayer$ = D.$JSCompiler_alias_NULL$$;
  this.$_datatipColor$ = "#000000";
  this.Zoom = 1;
  this.$_hasAction$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$ = $dataLayer$$13$$;
  this.$Bundle$ = $dataLayer$$13$$.$_tmap$.$getBundle$()
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$) {
  (this.$Shape$ = $disp$$) && this.$Shape$.$setAriaRole$("img")
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = (0,D.$JSCompiler_set$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Shape$");
D.$JSCompiler_prototypeAlias$$.$setLabel$ = (0,D.$JSCompiler_set$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$LabelPos$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$) {
  D.$DvtMapDataObject$$.$superclass$.$setVisible$.call(this, $bVisible$$);
  this.$Label$ && this.$Label$.$setVisible$($bVisible$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$Shape$]
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_datatipColor$");
D.$JSCompiler_prototypeAlias$$.$setDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$setDatatipColor$$($color$$4$$) {
  this.$_datatipColor$ = $color$$4$$;
  this.$Shape$ && this.$Shape$.$setDataColor$ && this.$Shape$.$setDataColor$($color$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$setDatatip$ = function $$JSCompiler_prototypeAlias$$$$setDatatip$$($datatip$$1$$) {
  this.$_datatip$ = $datatip$$1$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$1$$ = [];
  this.$isSelectable$() && $states$$1$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$1$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$Shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Shape$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$Shape$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ || this.$HideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$1$$) {
  for(var $parentId$$ = this.$_dataLayer$.$_clientId$, $i$$42$$ = 0;$i$$42$$ < $clientIds$$1$$.length && $clientIds$$1$$[$i$$42$$] != $parentId$$;$i$$42$$++) {
  }
  return $parentId$$
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$39$$) {
  return $event$$39$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$39$$.keyCode && $event$$39$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$39$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$1$$) {
  return this.$Shape$ && this.$Shape$.getParent() ? this.$Shape$.$getDimensions$($targetCoordinateSpace$$1$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Shape$ ? this.$Shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$11$$) {
  this.$Shape$.getParent() && (this.Zoom = $pzcMatrix$$11$$.$_a$, this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$DvtMapDataArea$$ = function $$DvtMapDataArea$$$($context$$42$$, $dataLayer$$20$$, $rowKey$$7$$, $clientId$$16$$, $regionId$$8$$) {
  this.Init($context$$42$$, $dataLayer$$20$$, $rowKey$$7$$, $clientId$$16$$, $regionId$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataArea$$, D.$DvtMapDataObject$$, "DvtMapDataArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$43$$, $dataLayer$$21$$, $rowKey$$8$$, $clientId$$17$$, $regionId$$9$$) {
  D.$DvtMapDataArea$$.$superclass$.Init.call(this, $context$$43$$, $dataLayer$$21$$, $rowKey$$8$$, $clientId$$17$$, $regionId$$9$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$1$$) {
  D.$DvtMapDataArea$$.$superclass$.$setDisplayable$.call(this, $disp$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$3$$) {
  $selected$$3$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$setSelected$($selected$$3$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$showHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$hideHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Shape$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  (this.$_isDrilled$ = $drilled$$1$$) ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$18$$) {
  this.$Shape$.getParent() && (D.$DvtMapDataArea$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$18$$), (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Shape$, $pzcMatrix$$18$$), this.$isDrilled$() || this.$PositionLabel$($pzcMatrix$$18$$))
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$($pzcMatrix$$19$$) {
  this.$Label$ && this.$Label$.update($pzcMatrix$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$DvtMapDataMarker$$ = function $$DvtMapDataMarker$$$($context$$24$$, $dataLayer$$2$$, $rowKey$$, $clientId$$8$$, $regionId$$2$$) {
  this.Init($context$$24$$, $dataLayer$$2$$, $rowKey$$, $clientId$$8$$, $regionId$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataMarker$$, D.$DvtMapDataObject$$, "DvtMapDataMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$25$$, $dataLayer$$3$$, $rowKey$$1$$, $clientId$$9$$, $regionId$$3$$) {
  D.$DvtMapDataMarker$$.$superclass$.Init.call(this, $context$$25$$, $dataLayer$$3$$, $rowKey$$1$$, $clientId$$9$$, $regionId$$3$$);
  this.$InitCanvasZoom$ = 1;
  this.$_size$ = 0
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$2$$) {
  this.$Shape$.$setSelected$($selected$$2$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$Shape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$Shape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$() {
  if(this.$Label$) {
    this.$Label$.$alignCenter$();
    var $x$$67$$ = (this.$Shape$.$getX$() + (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) / 2) * this.Zoom, $markerY_y$$44$$ = this.$Shape$.$getY$() * this.Zoom, $markerH$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$), $markerType$$ = this.$Shape$.$getType$();
    "top" == this.$LabelPos$ ? ($markerY_y$$44$$ -= 4, this.$Label$.$alignBottom$()) : "bottom" == this.$LabelPos$ ? ($markerY_y$$44$$ += $markerH$$, this.$Label$.$alignTop$()) : ($markerY_y$$44$$ = "triangleUp" == $markerType$$ ? $markerY_y$$44$$ + 2 * $markerH$$ / 3 : "triangleDown" == $markerType$$ ? $markerY_y$$44$$ + $markerH$$ / 3 : $markerY_y$$44$$ + $markerH$$ / 2, this.$Label$.$alignMiddle$());
    this.$Label$.$setX$($x$$67$$);
    this.$Label$.$setY$($markerY_y$$44$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $parent$$6$$ = this.$Shape$.getParent(), $height$$12_rotation$$3$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$);
  (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) != D.$JSCompiler_alias_NULL$$ && ($height$$12_rotation$$3$$ != D.$JSCompiler_alias_NULL$$ && $parent$$6$$) && ($height$$12_rotation$$3$$ = this.$Shape$.$getRotation$(), this.$Label$ && this.$Shape$.$getRotation$() ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)($parent$$6$$, this.$Center$.x * this.Zoom - this.$Center$.x, this.$Center$.y * this.Zoom - this.$Center$.y), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)($parent$$6$$)) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, 
  this.$Center$.x * this.Zoom - (this.$Center$.x * window.Math.cos($height$$12_rotation$$3$$) - this.$Center$.y * window.Math.sin($height$$12_rotation$$3$$)), this.$Center$.y * this.Zoom - (this.$Center$.x * window.Math.sin($height$$12_rotation$$3$$) + this.$Center$.y * window.Math.cos($height$$12_rotation$$3$$))), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Shape$)))
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataImage$$ = function $$DvtMapDataImage$$$($context$$44$$, $dataLayer$$22$$, $rowKey$$9$$, $clientId$$18$$, $regionId$$10$$) {
  this.Init($context$$44$$, $dataLayer$$22$$, $rowKey$$9$$, $clientId$$18$$, $regionId$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataImage$$, D.$DvtMapDataObject$$, "DvtMapDataImage");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataImage$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$45$$, $dataLayer$$23$$, $rowKey$$10$$, $clientId$$19$$, $regionId$$11$$) {
  D.$DvtMapDataImage$$.$superclass$.Init.call(this, $context$$45$$, $dataLayer$$23$$, $rowKey$$10$$, $clientId$$19$$, $regionId$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$onImageLoaded$ = function $$JSCompiler_prototypeAlias$$$$onImageLoaded$$($image$$6$$) {
  $image$$6$$ && ($image$$6$$.width && $image$$6$$.height) && (this.$Shape$.getWidth() || this.$Shape$.$setWidth$($image$$6$$.width), this.$Shape$.getHeight() || this.$Shape$.$setHeight$($image$$6$$.height), this.$setSize$($image$$6$$.width * $image$$6$$.height), this.$Shape$.$setX$(this.$Center$.x - $image$$6$$.width / 2), this.$Shape$.$setY$(this.$Center$.y - $image$$6$$.height / 2), this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $curCenterX$$1_width$$20$$ = this.$Shape$.getWidth(), $curCenterY$$1_height$$17$$ = this.$Shape$.getHeight();
  $curCenterX$$1_width$$20$$ != D.$JSCompiler_alias_NULL$$ && ($curCenterY$$1_height$$17$$ != D.$JSCompiler_alias_NULL$$ && this.$Shape$.getParent()) && ($curCenterX$$1_width$$20$$ = this.$Shape$.$getX$() + $curCenterX$$1_width$$20$$ / 2, $curCenterY$$1_height$$17$$ = this.$Shape$.$getY$() + $curCenterY$$1_height$$17$$ / 2, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, $curCenterX$$1_width$$20$$ * this.Zoom - this.$Center$.x, $curCenterY$$1_height$$17$$ * this.Zoom - this.$Center$.y))
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataComponent$$ = function $$DvtMapDataComponent$$$($context$$36$$, $dataLayer$$18$$, $rowKey$$5$$, $clientId$$14$$, $regionId$$6$$) {
  this.Init($context$$36$$, $dataLayer$$18$$, $rowKey$$5$$, $clientId$$14$$, $regionId$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataComponent$$, D.$DvtMapDataObject$$, "DvtMapDataComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$37$$, $dataLayer$$19$$, $rowKey$$6$$, $clientId$$15$$, $regionId$$7$$) {
  D.$DvtMapDataComponent$$.$superclass$.Init.call(this, $context$$37$$, $dataLayer$$19$$, $rowKey$$6$$, $clientId$$15$$, $regionId$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  if(this.$Shape$.getParent()) {
    var $curCenterY$$ = this.$_y$ + this.$_height$ / 2;
    this.$Shape$.$setTranslateX$(this.$_x$ + (this.$_x$ + this.$_width$ / 2) * this.Zoom - this.$Center$.x);
    this.$Shape$.$setTranslateY$(this.$_y$ + $curCenterY$$ * this.Zoom - this.$Center$.y)
  }
};
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_width$ * this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$22$$, $dvtShape$$, $areaName$$3$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$22$$, $dvtShape$$, $areaName$$3$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$23_stroke$$3$$, $dvtShape$$1$$, $areaName$$4$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$23_stroke$$3$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$4$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$23_stroke$$3$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$23_stroke$$3$$.getWidth()
  }
  this.$_shape$ && this.$_shape$.$setAriaRole$("img")
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$4$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$3$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$7$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$7$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$66$$, $y$$43$$) {
  var $dims$$4$$ = this.$getDimensions$();
  return $x$$66$$ >= $dims$$4$$.x && $x$$66$$ <= $dims$$4$$.x + $dims$$4$$.$w$ && $y$$43$$ >= $dims$$4$$.y && $y$$43$$ <= $dims$$4$$.y + $dims$$4$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$8$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().clone();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$8$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$8$$, $layerName$$18$$, $eventHandler$$4$$) {
  this.Init($tmap$$8$$, $layerName$$18$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$9$$, $layerName$$19$$, $eventHandler$$5$$) {
  this.$_tmap$ = $tmap$$9$$;
  this.$LayerName$ = $layerName$$19$$;
  this.$EventHandler$ = $eventHandler$$5$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$12$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$12$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$12$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$12$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$13$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$13$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$44$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$14$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$14$$].$HandleZoomEvent$($event$$44$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$15$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$15$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$17_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $containers$$inline_11245_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ = 0;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ < $containers$$inline_11245_oldContainers$$1$$.length;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$++) {
      var $parent$$8$$ = $containers$$inline_11245_oldContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$].getParent();
      $parent$$8$$ && $parent$$8$$.removeChild($containers$$inline_11245_oldContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$])
    }
  }
  $containers$$inline_11245_oldContainers$$1$$ = [$dataLayer$$17_newScaledContainers$$1$$.$_dataLabelLayer$];
  $dataLayer$$17_newScaledContainers$$1$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$inline_11245_oldContainers$$1$$.push($dataLayer$$17_newScaledContainers$$1$$.$_dataPointLayer$);
  for($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ = 0;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ < $containers$$inline_11245_oldContainers$$1$$.length;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$++) {
    $containers$$inline_11245_oldContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$].$removeChildAt$($containers$$inline_11245_oldContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$].$getNumChildren$() - 1)
  }
  $dataLayer$$17_newScaledContainers$$1$$ = [$dataLayer$$17_newScaledContainers$$1$$.$_dataAreaLayer$];
  for($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ = 0;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ < $dataLayer$$17_newScaledContainers$$1$$.length;$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$++) {
    $dataLayer$$17_newScaledContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$].$removeChildAt$($dataLayer$$17_newScaledContainers$$1$$[$JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$].$getNumChildren$() - 1)
  }
  this.$PostDataLayerUpdate$();
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$ = this.$_tmap$;
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$inline_11247_i$$46$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$, $layerName$$, $labelDisplay$$1$$, $labelType$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$, $labelDisplay$$1$$, $labelType$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $layerName$$1$$, $labelDisplay$$2$$, $labelType$$1$$, $eventHandler$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$1$$, $eventHandler$$1$$);
  this.$_labelDisplay$ = $labelDisplay$$2$$;
  this.$_labelType$ = $labelType$$1$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$6$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$6$$;
  for(var $area$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$3$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$3$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$4$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$4$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$4$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = D.$DvtPathUtils$$.$getDimensions$(D.$DvtPathUtils$$.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$5$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$5$$.$w$ && 0 < $dim$$5$$.$h$ && (this.$_layerDim$ = $dim$$5$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$8$$, $bForceUpdateArea_label$$9_labelText_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$8$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$9_labelText_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$8$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$8$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$8$$] || ($bForceUpdateArea_label$$9_labelText_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$, $area$$8$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$8$$] = $bForceUpdateArea_label$$9_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$9_labelText_mapArea$$), $bForceUpdateArea_label$$9_labelText_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$8$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$8$$][1] : 
  D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$8$$] && ($bForceUpdateArea_label$$9_labelText_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$8$$], !$bForceUpdateArea_label$$9_labelText_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$9_labelText_mapArea$$ = "short" == 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$8$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$8$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$8$$] ? $bForceUpdateArea_label$$9_labelText_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$9_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$8$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$), $bForceUpdateArea_label$$9_labelText_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$9_labelText_mapArea$$, [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, 
    $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$8$$] = $bForceUpdateArea_label$$9_labelText_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && $bForceUpdateArea_label$$9_labelText_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$9$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$9$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$9$$]);
    var $label$$10$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$9$$];
    $label$$10$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$9$$] ? $label$$10$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$10$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$9$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$9$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$9$$]), $label$$10$$ && ($fadeInObjs$$.push($label$$10$$), $fadeInObjs$$.push($label$$10$$.$_leaderLine$)))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$10$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$3_layerDim$$;
    this.$_paths$ = ($cmd$$3_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$3_layerDim$$.$w$, $cmd$$3_layerDim$$.$h$, this.$_tmap$.$_width$, this.$_tmap$.$_height$, this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$3_layerDim$$ = this.$_paths$[$area$$10$$];
  this.$AreaShapes$[$area$$10$$] && $cmd$$3_layerDim$$ ? this.$AreaShapes$[$area$$10$$].$setCmds$($cmd$$3_layerDim$$) : delete this.$AreaShapes$[$area$$10$$]
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$1$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$13$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$13$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$13$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$13$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$15$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$15$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$15$$]);
      var $label$$11_leaderLine$$ = this.$_areaLabels$[$area$$15$$];
      $label$$11_leaderLine$$ && (this.$_renderedLabels$[$area$$15$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$11_leaderLine$$), ($label$$11_leaderLine$$ = $label$$11_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$11_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_668$$ = 0;$i$$inline_668$$ < $areas$$1$$.length;$i$$inline_668$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_668$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$1$$[$i$$inline_668$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_668$$], $fadeInObjs$$2$$)
  }
  for(var $id$$8$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$8$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$9$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$9$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$9$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$19$$ = 0;$i$$19$$ < $areas$$2$$.length;$i$$19$$++) {
    var $areaName$$ = $areas$$2$$[$i$$19$$];
    if(this.$Areas$[$areaName$$]) {
      var $idx$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$);
      -1 !== $idx$$1$$ && (this.$_disclosed$.splice($idx$$1$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$]))
    }
    $childAreaLayer_id$$9$$ && $childAreaLayer_id$$9$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$26$$, $pzcMatrix$$2$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$26$$, $pzcMatrix$$2$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$16$$ in this.$Areas$) {
      this.$Areas$[$area$$16$$].$HandleZoomEvent$($pzcMatrix$$2$$)
    }
  }
  for($area$$16$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$16$$]) {
      var $label$$12$$ = this.$_areaLabels$[$area$$16$$];
      $label$$12$$ && $label$$12$$.update($pzcMatrix$$2$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$10$$, $layerName$$20$$, $labelDisplay$$6$$, $labelType$$2$$, $eventHandler$$6$$) {
  this.Init($tmap$$10$$, $layerName$$20$$, $labelDisplay$$6$$, $labelType$$2$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$11$$, $layerName$$21$$, $labelDisplay$$7$$, $labelType$$3$$, $eventHandler$$7$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$11$$, $layerName$$21$$, $labelDisplay$$7$$, $labelType$$3$$, $eventHandler$$7$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$) {
  var $widthRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$.$_tmap$.$_width$, $heightRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$.$_tmap$.$_height$;
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$.$_areaLayerImages$;
  for(var $i$$47$$ = 0;$i$$47$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$.length;$i$$47$$++) {
    var $height$$15_image$$5$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$[$i$$47$$], $source$$3$$ = $height$$15_image$$5$$.source, $width$$18$$ = $height$$15_image$$5$$.width, $height$$15_image$$5$$ = $height$$15_image$$5$$.height;
    if($source$$3$$ && -1 < $source$$3$$.search(".svg") || $width$$18$$ >= $widthRes$$ && $height$$15_image$$5$$ >= $heightRes$$ || $i$$47$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$4$$.length - 1) {
      return $source$$3$$
    }
  }
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$45$$, $pzcMatrix$$17$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$45$$, $pzcMatrix$$17$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$2$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $parentLayer$$, $clientId$$6$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$3$$, $parentLayer$$1$$, $clientId$$7$$, $eventHandler$$3$$) {
  this.$_tmap$ = $tmap$$3$$;
  this.$_clientId$ = $clientId$$7$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_eventHandler$ = $eventHandler$$3$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$3$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$1$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$1$$ = [], $i$$21$$ = 0;$i$$21$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$21$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$21$$].$isDrilled$() || $navigables$$1$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$21$$])
  }
  return $navigables$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$2$$ = [], $i$$22$$ = 0;$i$$22$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$22$$++) {
    for(var $j$$2$$ = 0;$j$$2$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$2$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$22$$].$AreaId$ == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$2$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$22$$].$isDrilled$() || $navigables$$2$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$22$$]))
    }
  }
  return $navigables$$2$$
};
D.$JSCompiler_StaticMethods_addDataObject$$ = function $$JSCompiler_StaticMethods_addDataObject$$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$47$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$47$$);
  $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$47$$.$getDisplayable$(), $obj$$47$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$9$$) {
  if(this.$_selectionMode$ = $mode$$9$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$) {
  var $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$;
  $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$];
  var $areaDim$$1_displayable$$2_displayable$$inline_728$$ = $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$.$getDisplayable$(), $pathToCopy$$inline_729$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$.$AreaId$];
  $pathToCopy$$inline_729$$ ? ($areaDim$$1_displayable$$2_displayable$$inline_728$$.$setCmds$($pathToCopy$$inline_729$$.$getCmds$()), $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$), -1 !== $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$, 1), $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$) {
    $areaDim$$1_displayable$$2_displayable$$inline_728$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$2_displayable$$inline_728$$);
    if($JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$2_displayable$$inline_728$$ = $areaDim$$1_displayable$$2_displayable$$inline_728$$.$getDimensions$(), $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$.$_boundRectangle$.push($areaDim$$1_displayable$$2_displayable$$inline_728$$)), $JSCompiler_inline_result$$382_areaObj$$inline_727_idx$$inline_9190_label$$13$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$4$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $pzcMatrix$$4$$;
  var $areaLabelsToRemove$$ = {};
  this.$_dataObjs$.sort(function compare($pzcMatrix$$4$$, $areaLabelsToRemove$$) {
    return $pzcMatrix$$4$$.$getSize$() < $areaLabelsToRemove$$.$getSize$() ? 1 : $pzcMatrix$$4$$.$getSize$() > $areaLabelsToRemove$$.$getSize$() ? -1 : 0
  });
  for(var $i$$23$$ = 0;$i$$23$$ < this.$_dataObjs$.length;$i$$23$$++) {
    var $dataObj_regionId$$ = this.$_dataObjs$[$i$$23$$], $displayable$$3$$ = $dataObj_regionId$$.$getDisplayable$(), $json_label$$14$$ = $dataObj_regionId$$.$getLabel$();
    if($json_label$$14$$) {
      if($displayable$$3$$.$getRotation$()) {
        var $container$$12$$ = new D.$DvtContainer$$($displayable$$3$$.$_context$);
        this.$_dataPointLayer$.$addChild$($container$$12$$);
        $container$$12$$.$addChild$($displayable$$3$$);
        $container$$12$$.$addChild$($json_label$$14$$)
      }else {
        this.$_dataPointLayer$.$addChild$($displayable$$3$$), $displayable$$3$$.$addChild$($json_label$$14$$)
      }
      $dataObj_regionId$$.$PositionLabel$($pzcMatrix$$4$$)
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$3$$)
    }
    if($dataObj_regionId$$ instanceof D.$DvtMapDataComponent$$) {
      if($json_label$$14$$ = $dataObj_regionId$$.$_json$) {
        $displayable$$3$$.$render$($json_label$$14$$, $dataObj_regionId$$.getWidth(), $dataObj_regionId$$.getHeight())
      }else {
        continue
      }
    }
    ($dataObj_regionId$$ = $dataObj_regionId$$.$AreaId$) && ($areaLabelsToRemove$$[$dataObj_regionId$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$23$$ = 0;$i$$23$$ < this.$_areaObjs$.length;$i$$23$$++) {
    $areaLabelsToRemove$$[this.$_areaObjs$[$i$$23$$].$AreaId$] && this.$_areaObjs$[$i$$23$$].$setLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$23$$) || $i$$23$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$3$$, $fadeInObjs$$3$$, $pzcMatrix$$5_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$5_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$3$$ = 0;$j$$3$$ < $areas$$3$$.length;$j$$3$$++) {
    for(var $i$$24_label$$15_leaderLine$$1$$ = 0;$i$$24_label$$15_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$24_label$$15_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$24_label$$15_leaderLine$$1$$].$AreaId$ == $areas$$3$$[$j$$3$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$24_label$$15_leaderLine$$1$$].$AreaId$);
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$24_label$$15_leaderLine$$1$$);
        var $displayable$$4$$ = this.$_areaObjs$[$i$$24_label$$15_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$4$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$4$$, $pzcMatrix$$5_regionId$$1$$);
        if($i$$24_label$$15_leaderLine$$1$$ = this.$_areaObjs$[$i$$24_label$$15_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$24_label$$15_leaderLine$$1$$), ($i$$24_label$$15_leaderLine$$1$$ = $i$$24_label$$15_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$24_label$$15_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$24_label$$15_leaderLine$$1$$ = 0;$i$$24_label$$15_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$24_label$$15_leaderLine$$1$$++) {
    for($j$$3$$ = 0;$j$$3$$ < $areas$$3$$.length;$j$$3$$++) {
      $pzcMatrix$$5_regionId$$1$$ = this.$_dataObjs$[$i$$24_label$$15_leaderLine$$1$$].$AreaId$, $displayable$$4$$ = this.$_dataObjs$[$i$$24_label$$15_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$5_regionId$$1$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$5_regionId$$1$$ == $areas$$3$$[$j$$3$$] && (this.$_dataPointLayer$.$addChild$($displayable$$4$$), $fadeInObjs$$3$$.push($displayable$$4$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$4$$), $fadeInObjs$$3$$.push($displayable$$4$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$4$$, $fadeOutObjs$$2$$) {
  for(var $j$$4$$ = 0;$j$$4$$ < $areas$$4$$.length;$j$$4$$++) {
    for(var $i$$25_label$$16$$ = 0;$i$$25_label$$16$$ < this.$_areaObjs$.length;$i$$25_label$$16$$++) {
      if(this.$_areaObjs$[$i$$25_label$$16$$].$AreaId$ == $areas$$4$$[$j$$4$$]) {
        this.$_areaObjs$[$i$$25_label$$16$$].$isDrilled$() && this.$_areaObjs$[$i$$25_label$$16$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$25_label$$16$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$25_label$$16$$]);
        var $idx$$3$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$4$$[$j$$4$$]);
        if(-1 < $idx$$3$$ && (this.$_disclosed$.splice($idx$$3$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$25_label$$16$$].$getDisplayable$()), $i$$25_label$$16$$ = this.$_areaObjs$[$i$$25_label$$16$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$25_label$$16$$), $fadeOutObjs$$2$$.push($i$$25_label$$16$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$5_selectedObjs$$1$$ = this.$_selectionHandler$.getSelection(), $i$$28_label$$19$$ = 0;$i$$28_label$$19$$ < $j$$5_selectedObjs$$1$$.length;$i$$28_label$$19$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$5_selectedObjs$$1$$[$i$$28_label$$19$$].$AreaId$)) && this.$_selectionHandler$.$removeFromSelection$($j$$5_selectedObjs$$1$$[$i$$28_label$$19$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$5_selectedObjs$$1$$ = 0;$j$$5_selectedObjs$$1$$ < this.$_drilled$.length;$j$$5_selectedObjs$$1$$++) {
      for($i$$28_label$$19$$ = 0;$i$$28_label$$19$$ < this.$_areaObjs$.length;$i$$28_label$$19$$++) {
        if(this.$_areaObjs$[$i$$28_label$$19$$].$AreaId$ == this.$_drilled$[$j$$5_selectedObjs$$1$$]) {
          this.$_areaObjs$[$i$$28_label$$19$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$6$$ = this.$_areaObjs$[$i$$28_label$$19$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$6$$);
          $fadeOutObjs$$4$$.push($displayable$$6$$);
          if($i$$28_label$$19$$ = this.$_areaObjs$[$i$$28_label$$19$$].$getLabel$()) {
            $i$$28_label$$19$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$28_label$$19$$), $fadeOutObjs$$4$$.push($i$$28_label$$19$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$28_label$$19$$ = 0;$i$$28_label$$19$$ < this.$_dataObjs$.length;$i$$28_label$$19$$++) {
        if(this.$_dataObjs$[$i$$28_label$$19$$].$AreaId$ == this.$_drilled$[$j$$5_selectedObjs$$1$$]) {
          $displayable$$6$$ = this.$_dataObjs$[$i$$28_label$$19$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$6$$);
          $fadeOutObjs$$4$$.push($displayable$$6$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$38$$, $pzcMatrix$$6$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$6$$;
  var $i$$29_zoom$$ = $pzcMatrix$$6$$.$_a$, $areaObjs_dataObjs_j$$6_type$$59$$ = $event$$38$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs_j$$6_type$$59$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs_j$$6_type$$59$$ = 0;$areaObjs_dataObjs_j$$6_type$$59$$ < this.$_areaObjs$.length;$areaObjs_dataObjs_j$$6_type$$59$$++) {
      var $displayable$$7$$ = this.$_areaObjs$[$areaObjs_dataObjs_j$$6_type$$59$$].$getDisplayable$(), $fill$$2$$ = $displayable$$7$$.$_ptFill$;
      if($fill$$2$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$2$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$29_zoom$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$29_zoom$$));
        $displayable$$7$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs_j$$6_type$$59$$ = this.$_areaObjs$;
  for($i$$29_zoom$$ = 0;$i$$29_zoom$$ < $areaObjs_dataObjs_j$$6_type$$59$$.length;$i$$29_zoom$$++) {
    $areaObjs_dataObjs_j$$6_type$$59$$[$i$$29_zoom$$].$HandleZoomEvent$($pzcMatrix$$6$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs_j$$6_type$$59$$ = this.$_dataObjs$;
    for($i$$29_zoom$$ = 0;$i$$29_zoom$$ < $areaObjs_dataObjs_j$$6_type$$59$$.length;$i$$29_zoom$$++) {
      $areaObjs_dataObjs_j$$6_type$$59$$[$i$$29_zoom$$].$HandleZoomEvent$($pzcMatrix$$6$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$50_rowKeys$$) {
  if(this.$_selectionHandler$) {
    $obj$$50_rowKeys$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$50_rowKeys$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$50_rowKeys$$));
    $obj$$50_rowKeys$$ = [];
    for(var $selection$$ = this.$_selectionHandler$.getSelection(), $i$$30$$ = 0;$i$$30$$ < $selection$$.length;$i$$30$$++) {
      $obj$$50_rowKeys$$.push($selection$$[$i$$30$$].getId())
    }
    return $obj$$50_rowKeys$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$ = [], $selection$$1$$ = this.$_selectionHandler$.getSelection(), $i$$31$$ = 0;$i$$31$$ < $selection$$1$$.length;$i$$31$$++) {
    $displayables$$.push($selection$$1$$[$i$$31$$].$getDisplayable$())
  }
  return $displayables$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$6$$, $manager$$) {
  this.Init($tmap$$6$$, $manager$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $manager$$1$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init($tmap$$7$$, $manager$$1$$);
  this.$_tmap$ = $tmap$$7$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$40$$) {
  return this.$isNavigationEvent$($event$$40$$) && !$event$$40$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$41$$) {
  var $focusObj$$1_keyCode$$4$$ = $event$$41$$.keyCode;
  if(221 == $focusObj$$1_keyCode$$4$$) {
    var $focusObj$$1_keyCode$$4$$ = this.$_eventManager$.$getFocus$(), $navigables$$3$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$1_keyCode$$4$$ instanceof D.$DvtMapDataArea$$ && 0 < $navigables$$3$$.length && ($focusObj$$1_keyCode$$4$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$4$$, $event$$41$$, $navigables$$3$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$4$$)
  }else {
    219 == $focusObj$$1_keyCode$$4$$ ? ($focusObj$$1_keyCode$$4$$ = this.$_eventManager$.$getFocus$(), $navigables$$3$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$1_keyCode$$4$$ instanceof D.$DvtMapDataArea$$) && 0 < $navigables$$3$$.length && ($focusObj$$1_keyCode$$4$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$4$$, $event$$41$$, $navigables$$3$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$4$$)) : 
    ($focusObj$$1_keyCode$$4$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$41$$), this.$isNavigationEvent$($event$$41$$) && !$event$$41$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$4$$))
  }
  return $focusObj$$1_keyCode$$4$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$42$$) {
  return 32 == $event$$42$$.keyCode && $event$$42$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$43_keyCode$$5$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$43_keyCode$$5$$);
  if(!$isNavigable$$ && ($event$$43_keyCode$$5$$ = $event$$43_keyCode$$5$$.keyCode, 219 == $event$$43_keyCode$$5$$ || 221 == $event$$43_keyCode$$5$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$18$$, $callback$$26$$, $callbackObj$$3$$) {
  this.Init($context$$18$$, $callback$$26$$, $callbackObj$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$19$$, $callback$$27$$, $callbackObj$$4$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$19$$, $callback$$27$$, $callbackObj$$4$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$4$$;
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$) {
  if($logicalObj$$ && $logicalObj$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$.$getDataLayer$().$_clientId$]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$, $handler$$4$$) {
  this.$_selectionHandlers$[$dataLayerId$$] = $handler$$4$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$1$$, $obj$$37$$) {
  var $selectionHandler$$ = this.$_selectionHandlers$[$clientId$$1$$];
  $selectionHandler$$ && $selectionHandler$$.$removeFromSelection$($obj$$37$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$2_selectionHandler$$1$$) {
  ($clientId$$2_selectionHandler$$1$$ = this.$_selectionHandlers$[$clientId$$2_selectionHandler$$1$$]) && $clientId$$2_selectionHandler$$1$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$27$$) {
  var $obj$$38$$ = this.$GetLogicalObject$($event$$27$$.target);
  $obj$$38$$ && ($obj$$38$$.$getShowPopupBehaviors$ && $obj$$38$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$38$$.$getDataLayer$().$_clientId$);
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$28$$) {
  this.$_tmap$.$_eventClientId$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$28$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$29$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$29$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$30$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$31$$) {
  if(!this.$_bDragged$) {
    var $obj$$39$$ = this.$GetLogicalObject$($event$$31$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$39$$);
    if(!$obj$$39$$ || !$obj$$39$$.$isSelectable$ || !$obj$$39$$.$isSelectable$()) {
      for(var $clientId$$3$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$3$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$31$$.ctrlKey)) {
          var $selectionEvent$$ = new D.$DvtSelectionEvent$$([]);
          (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$, "clientId", $clientId$$3$$);
          this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$31$$);
    this.$_handleClick$($obj$$39$$, $event$$31$$.pageX, $event$$31$$.pageY)
  }
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$40$$, $pageX$$1$$, $pageY$$1$$) {
  $obj$$40$$ instanceof D.$DvtMapDataObject$$ && ($obj$$40$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$40$$, $pageX$$1$$, $pageY$$1$$) : $obj$$40$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$40$$.$getDataLayer$().$_clientId$))
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$41_offset$$14$$, $pageX$$2$$, $pageY$$2$$) {
  var $actionEvent$$ = new D.$DvtMapActionEvent$$($obj$$41_offset$$14$$.$_clientId$, $obj$$41_offset$$14$$.getId(), $obj$$41_offset$$14$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "clientId", $obj$$41_offset$$14$$.$getDataLayer$().$_clientId$);
  $pageX$$2$$ != D.$JSCompiler_alias_NULL$$ && $pageY$$2$$ != D.$JSCompiler_alias_NULL$$ && ($obj$$41_offset$$14$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$_context$, $pageX$$2$$, $pageY$$2$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "pointXY", {x:$obj$$41_offset$$14$$.x, y:$obj$$41_offset$$14$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$42$$) {
  var $clientId$$4$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$1_mapLayer$$ = D.$JSCompiler_alias_NULL$$, $area$$17$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$42$$ && ($obj$$42$$ instanceof D.$DvtMapDataObject$$ ? $area$$17$$ = $obj$$42$$.$getDisplayable$() : $obj$$42$$ instanceof D.$DvtMapArea$$ && ($area$$17$$ = $obj$$42$$), $obj$$42$$.$getDataLayer$ && ($dataLayer$$1_mapLayer$$ = $obj$$42$$.$getDataLayer$(), $clientId$$4$$ = $dataLayer$$1_mapLayer$$.$_clientId$, $dataLayer$$1_mapLayer$$ = $dataLayer$$1_mapLayer$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_679$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_679$$.$_clickedLayerName$ = $dataLayer$$1_mapLayer$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_679$$.$_clickedDataLayerId$ = $clientId$$4$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_679$$.$_clickedObject$ = $area$$17$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$32_obj$$43$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$32_obj$$43$$);
  $drillEvent_event$$32_obj$$43$$ = this.$GetLogicalObject$($drillEvent_event$$32_obj$$43$$.target);
  this.$getSelectionHandler$($drillEvent_event$$32_obj$$43$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$32_obj$$43$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$32_obj$$43$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$33$$) {
  var $eventConsumed$$2$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ = $event$$33$$.keyCode;
  if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$) && $event$$33$$.ctrlKey && $event$$33$$.shiftKey) {
    this.$_tmap$.$resetMap$(), $event$$33$$.preventDefault()
  }else {
    if(220 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$) {
      ($JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.isCollapsed()) : 
      $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$isDisclosed$())), $event$$33$$.preventDefault()
    }else {
      if(13 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$) {
        $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ = this.$getFocus$(), $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ instanceof D.$DvtMapDataObject$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$) : 
        ($event$$33$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$33$$.preventDefault())
      }else {
        if(32 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ && $event$$33$$.ctrlKey) {
          $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ = this.$getFocus$(), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$, D.$JSCompiler_alias_TRUE$$), $event$$33$$.preventDefault()
        }else {
          if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$) && $event$$33$$.ctrlKey) {
            var $focusObj_toFit$$inline_685$$ = this.$getFocus$();
            $event$$33$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$ = this.$_tmap$, $focusObj_toFit$$inline_685$$ = $focusObj_toFit$$inline_685$$.$getDisplayable$(), $focusObj_toFit$$inline_685$$ || ($focusObj_toFit$$inline_685$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$_zoomToFitObject$), $focusObj_toFit$$inline_685$$ || ($focusObj_toFit$$inline_685$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$_clickedObject$), 
            $JSCompiler_StaticMethods_fitRegion$self$$inline_684_keyCode$$3_legendPanel_logicalObj$$1$$.$_zoomToFitBounds$($focusObj_toFit$$inline_685$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$);
            $event$$33$$.preventDefault()
          }else {
            $eventConsumed$$2$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$33$$)
          }
        }
      }
    }
  }
  return $eventConsumed$$2$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$34$$) {
  var $obj$$44$$ = this.$GetLogicalObject$($event$$34$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$44$$);
  if(!$obj$$44$$ || $obj$$44$$.$isClearSelection$) {
    for(var $clientId$$5$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$5$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$34$$.ctrlKey)) {
        for(var $selectedObjs_selectionEvent$$1$$ = this.$_selectionHandlers$[$clientId$$5$$].getSelection(), $selectedIds$$ = [], $i$$20$$ = 0;$i$$20$$ < $selectedObjs_selectionEvent$$1$$.length;$i$$20$$++) {
          $selectedIds$$.push($selectedObjs_selectionEvent$$1$$[$i$$20$$].getId())
        }
        $selectedObjs_selectionEvent$$1$$ = new D.$DvtSelectionEvent$$($selectedIds$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs_selectionEvent$$1$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$34$$);
  this.$_handleClick$($obj$$44$$, $event$$34$$.$touch$.pageX, $event$$34$$.$touch$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$35_obj$$45$$) {
  if(($event$$35_obj$$45$$ = this.$GetLogicalObject$($event$$35_obj$$45$$.target)) && $event$$35_obj$$45$$.$getShowPopupBehaviors$ && $event$$35_obj$$45$$.$getDataLayer$) {
    this.$_tmap$.$_eventClientId$ = $event$$35_obj$$45$$.$getDataLayer$().$_clientId$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$36$$) {
  this.$_tmap$.$_eventClientId$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$HandleTouchHoverOutInternal$.call(this, $event$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$37$$) {
  var $obj$$46$$ = this.$GetLogicalObject$($drillEvent$$1_event$$37$$.target);
  $obj$$46$$ && (this.$getSelectionHandler$($obj$$46$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$46$$, $drillEvent$$1_event$$37$$.ctrlKey), $drillEvent$$1_event$$37$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$37$$))
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$4$$) {
  this.Init($tmap$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($tmap$$5$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
D.$DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($options$$13$$) {
  this.$_tmap$.$setAnimationDuration$($options$$13$$.animationDuration / 1E3);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$13$$.animationOnDisplay ? "alphaFade" : $options$$13$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$13$$.animationOnMapChange ? "alphaFade" : $options$$13$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$13$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = this.$_tmap$, $attr$$inline_9199_basemap$$inline_751_i$$inline_747$$ = this.$_isCustomBasemap$ ? "$" + $options$$13$$.basemap : $options$$13$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.$_mapName$ != $attr$$inline_9199_basemap$$inline_751_i$$inline_747$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.$_mapName$ = $attr$$inline_9199_basemap$$inline_751_i$$inline_747$$;
  this.$_tmap$.$setFeaturesOff$($options$$13$$.featuresOff);
  this.$_tmap$.$_controlPanelBehavior$ = $options$$13$$.controlPanelBehavior;
  $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = $options$$13$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ && 
  ($JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = $options$$13$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$));
  this.$_tmap$.$setDrillMode$($options$$13$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$13$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$13$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$13$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$13$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$13$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$13$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$13$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$13$$.zoom;
  (0,window.isNaN)($options$$13$$.maxZoom) || (this.$_tmap$.$_maxZoomFactor$ = $options$$13$$.maxZoom);
  $options$$13$$._legend && (this.$_tmap$.$_legendData$ = $options$$13$$._legend);
  this.$_parseStyles$($options$$13$$.styleDefaults);
  if(this.$_isCustomBasemap$ && $options$$13$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = (new D.$DvtXmlParser$$).parse($options$$13$$.sourceXml).$getChildNodes$(), $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$, $attr$$inline_9199_basemap$$inline_751_i$$inline_747$$ = 0;$attr$$inline_9199_basemap$$inline_751_i$$inline_747$$ < 
    $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.length;$attr$$inline_9199_basemap$$inline_751_i$$inline_747$$++) {
      if($childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$[$attr$$inline_9199_basemap$$inline_751_i$$inline_747$$], $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$.getName(), 
      "layer" == $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$) {
        $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$;
        $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$ = $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getChildNodes$();
        $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = D.$JSCompiler_alias_VOID$$, $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ = [], $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ = 
        0;$children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ < $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$.length;$children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$[$children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$], $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.getName(), 
          "image" == $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$) {
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = {};
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$getAttr$("source");
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$.width = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$getAttr$("width");
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$.height = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$getAttr$("height");
            var $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$getAttr$("dir");
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$.dir = "true" == $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ ? "rtl" : "ltr";
            $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.push($JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$] = $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$
      }else {
        if("points" == $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$) {
          $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$ = $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$.$getChildNodes$();
          $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ = $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = D.$JSCompiler_alias_VOID$$;
          $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = {};
          for($JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = 0;$JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ < $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$.length;$JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$++) {
            $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = $childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$[$JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$], $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ = $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.getName(), "point" == 
            $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ && ($children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[$areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("name")] = [$areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("x"), $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("y")], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$[$areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.$getAttr$("longLabel")])
          }
          D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$ = $options$$13$$.areaLayers;
  $attr$$inline_9199_basemap$$inline_751_i$$inline_747$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$ = 0;$childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$.length;$childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$++) {
    if($areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_9198_areaLayers$$inline_750_childNodes$$inline_744_popups$$inline_737_tooltipDisplay$$inline_736$$[$childNodes$$inline_9236_childNodes$$inline_9248_i$$inline_752_node$$inline_745$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ = 
    $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.layer) {
      $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.areaStyle);
      $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelDisplay, 
        $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelType, this.$_tmap$.$_eventHandler$);
        $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ = this.$_customAreaLayerImages$[$children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$];
        $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_tmap$.$_context$);
        if($children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ && 0 < $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$.length) {
          var $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ = $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[0].width, $context$$inline_9267_refHeight$$inline_9260$$ = $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_layerWidth$ = $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_layerHeight$ = $context$$inline_9267_refHeight$$inline_9260$$;
          for(var $area$$inline_9268_locImages$$inline_9261$$ = [], $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ = 0;$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ < $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$.length;$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$++) {
            $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ && "rtl" == $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$].dir ? $area$$inline_9268_locImages$$inline_9261$$.push($children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$]) : 
            !$JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ && "ltr" == $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$].dir && $area$$inline_9268_locImages$$inline_9261$$.push($children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$[$areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_areaLayerImages$ = 0 < $area$$inline_9268_locImages$$inline_9261$$.length ? $area$$inline_9268_locImages$$inline_9261$$ : $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$);
          $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_tmap$.$_context$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$_imageSrc$, 0, 0, $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$, 
          $context$$inline_9267_refHeight$$inline_9260$$)
        }
        $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$.$AreaShapes$ = 
        {image:$bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$})
      }else {
        $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelDisplay, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.labelType, this.$_tmap$.$_eventHandler$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$inline_9199_basemap$$inline_751_i$$inline_747$$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$);
        $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$ = $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$;
        $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$;
        $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$ = {};
        $context$$inline_9267_refHeight$$inline_9260$$ = this.$_tmap$.$_context$;
        $area$$inline_9268_locImages$$inline_9261$$ = D.$JSCompiler_alias_VOID$$;
        for($area$$inline_9268_locImages$$inline_9261$$ in $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$) {
          $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$[$area$$inline_9268_locImages$$inline_9261$$] = new D.$DvtPath$$($context$$inline_9267_refHeight$$inline_9260$$);
          if(($areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ = this.$_areaLayerStyle$.$getStyle$("border-color")) && "transparent" != $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$) {
            $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ = new D.$DvtSolidStroke$$($areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$[$area$$inline_9268_locImages$$inline_9261$$].$setStroke$($areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$)
          }
          $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ = this.$_areaLayerStyle$.$getStyle$("background-color");
          "transparent" != $areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$ ? $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$[$area$$inline_9268_locImages$$inline_9261$$].$setSolidFill$($areaNames$$inline_9265_backgroundColor$$inline_9271_borderColor$$inline_9269_i$$inline_9262_stroke$$inline_9270$$) : $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$[$area$$inline_9268_locImages$$inline_9261$$].$setFill$(D.$JSCompiler_alias_NULL$$)
        }
        $JSCompiler_temp_const$$9154_i$$inline_9253_image$$inline_9242_isRTL$$inline_9258_nodeName$$inline_9239$$.$AreaShapes$ = $bidi$$inline_9243_refWidth$$inline_9259_shape$$inline_9257_shapes$$inline_9266$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_9199_basemap$$inline_751_i$$inline_747$$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$);
        $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_9255_areaNames$$inline_756_dir$$inline_9244_labels$$inline_9252_node$$inline_9238_values$$inline_9277$$;
        $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$);
        $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$_children$ = $children$$inline_9280_i$$inline_9241_images$$inline_9256_layer$$inline_754_points$$inline_9251$$
      }
      $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$setAnimation$("auto" == $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.animationOnLayerChange);
      $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$);
      $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.areaDataLayer && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, [$areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.areaDataLayer], $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.pointDataLayers && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $areaLayer$$inline_753_layerName$$inline_9237_node$$inline_9249_nodeName$$inline_746_xmlNode$$inline_9235$$.pointDataLayers, $images$$inline_9240_mapLayer$$inline_755_nodeName$$inline_9250$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $options$$13$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_ParseDataLayers$$ = function $$JSCompiler_StaticMethods_ParseDataLayers$$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$, $parentLayer$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$) {
  if($dataLayers$$) {
    for(var $i$$34$$ = 0;$i$$34$$ < $dataLayers$$.length;$i$$34$$++) {
      var $dataLayerOptions_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$[$i$$34$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions_initSelections$$.markerDefs) {
        var $area$$inline_813_dataLayer$$4_markerDefs$$ = $dataLayerOptions_initSelections$$.markerDefs, $markerDef$$;
        for($markerDef$$ in $area$$inline_813_dataLayer$$4_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$]) {
            var $initDisclosed_xmlNode$$3$$ = (new D.$DvtXmlParser$$).parse($area$$inline_813_dataLayer$$4_markerDefs$$[$markerDef$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_context$, $initDisclosed_xmlNode$$3$$)
          }
        }
      }
      $dataLayerOptions_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions_initSelections$$.legend);
      if($parentLayer$$2$$) {
        if($parentLayer$$2$$ instanceof D.$DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$) {
          for($area$$inline_813_dataLayer$$4_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$ = $parentLayer$$2$$, $area$$inline_813_dataLayer$$4_markerDefs$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$.$_renderArea$[$area$$inline_813_dataLayer$$4_markerDefs$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$.$_renderLabel$[$area$$inline_813_dataLayer$$4_markerDefs$$] = D.$JSCompiler_alias_TRUE$$
          }
        }
      }else {
        $parentLayer$$2$$ = new D.$DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_eventHandler$), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$2$$)
      }
      $area$$inline_813_dataLayer$$4_markerDefs$$ = new D.$DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$2$$, $dataLayerOptions_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_eventHandler$);
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$ = $dataLayerOptions_initSelections$$.selection;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$ ? $area$$inline_813_dataLayer$$4_markerDefs$$.$setSelectionMode$("s") : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$ && $area$$inline_813_dataLayer$$4_markerDefs$$.$setSelectionMode$("m");
      $area$$inline_813_dataLayer$$4_markerDefs$$.$setAnimation$("auto" == $dataLayerOptions_initSelections$$.animationOnDataChange ? "alphaFade" : $dataLayerOptions_initSelections$$.animationOnDataChange);
      $area$$inline_813_dataLayer$$4_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$2$$ instanceof D.$DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ = $dataLayerOptions_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_880$$ = $dataLayerOptions_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$3$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$ = $parentLayer$$2$$ instanceof D.$DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions_initSelections$$.popups));
      var $areas$$5_components_images$$2_markers$$ = $dataLayerOptions_initSelections$$.areas;
      if($areas$$5_components_images$$2_markers$$) {
        for(var $area$$inline_881_j$$8$$ = 0;$area$$inline_881_j$$8$$ < $areas$$5_components_images$$2_markers$$.length;$area$$inline_881_j$$8$$++) {
          var $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ != $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$
            }
          }
          $disclosedItems_isolatedArea$$inline_880$$ && -1 != $disclosedItems_isolatedArea$$inline_880$$.indexOf($areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) && $initDisclosed_xmlNode$$3$$.push($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$);
          var $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $parentLayer$$2$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$ = 
          $area$$inline_813_dataLayer$$4_markerDefs$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$], $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.location;
          if($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$AreaShapes$[$areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$] && $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.color) {
            $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$_renderArea$[$areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$] = D.$JSCompiler_alias_FALSE$$;
            var $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_context$, $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ = new D.$DvtDrillablePath$$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$, 
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, 
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.labelStyle || ($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.labelStyle = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_styleDefaults$.labelStyle);
            var $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.selectedInnerColor, 
            1, 1), $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.selectedOuterColor, 1, 4);
            $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$.$setHoverStroke$($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$, $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$);
            $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.drilledInnerColor, 1, 2);
            $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.drilledOuterColor, 1, 4);
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$;
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedInnerStroke$ = $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$;
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedInnerStroke$.$_bFixedWidth$ = 
            D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedOuterStroke$ = $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$;
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$_disclosedOuterStroke$.$_bFixedWidth$ = 
            D.$JSCompiler_alias_TRUE$$);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$ = new D.$DvtMapDataArea$$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.id, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.clientId, 
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$setDisplayable$($height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$);
            (0,D.$JSCompiler_StaticMethods__parseCommonData$$)($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, 
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$, $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$, D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$
          }else {
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = D.$JSCompiler_alias_NULL$$
          }
          $popups$$1$$ && $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$setShowPopupBehaviors$($popups$$1$$);
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ && ($area$$inline_813_dataLayer$$4_markerDefs$$.$isSelectable$() && ($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$getDisplayable$(), 
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $area$$inline_813_dataLayer$$4_markerDefs$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$_areaObjs$.push($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$), 
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$_eventHandler$.$associate$($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$getDisplayable$(), $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$), 
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$_dataAreaLayer$)
        }
      }
      if($areas$$5_components_images$$2_markers$$ = $dataLayerOptions_initSelections$$.markers) {
        for($area$$inline_881_j$$8$$ = 0;$area$$inline_881_j$$8$$ < $areas$$5_components_images$$2_markers$$.length;$area$$inline_881_j$$8$$++) {
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ != $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$
            }
          }
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $parentLayer$$2$$;
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$ = $area$$inline_813_dataLayer$$4_markerDefs$$;
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$];
          $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$;
          if($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ = (0,D.$JSCompiler_StaticMethods__getCenter$$)($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$LayerName$, 
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$)) {
            $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_context$;
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$ = new D.$DvtMapDataMarker$$($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.id, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.clientId, 
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.location);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$setCenter$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$);
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_styleDefaults$.dataMarkerDefaults;
            $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.labelStyle);
            (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.labelStyle);
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$);
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.labelStyle = $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$.toString();
            var $shapeType$$inline_845$$ = D.$JSCompiler_alias_VOID$$;
            ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.source) ? $shapeType$$inline_845$$ = [$JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$, 
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.sourceSelected, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.sourceHover, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.sourceHoverSelected] : ($shapeType$$inline_845$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.shape) || 
            ($shapeType$$inline_845$$ = "c");
            $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.scaleX;
            (0,window.isNaN)($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$) && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = 1);
            $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.scaleY;
            (0,window.isNaN)($dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$) && ($dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = 1);
            var $height$$inline_865_w$$inline_849$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.width, $h$$inline_850$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.height;
            if(!$height$$inline_865_w$$inline_849$$ || (0,window.isNaN)($height$$inline_865_w$$inline_849$$)) {
              $height$$inline_865_w$$inline_849$$ = 8
            }
            if(!$h$$inline_850$$ || (0,window.isNaN)($h$$inline_850$$)) {
              $h$$inline_850$$ = 8
            }
            $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$ = new D.$DvtMarker$$($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, $shapeType$$inline_845$$, "alta", $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.x - $height$$inline_865_w$$inline_849$$ * $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ / 
            2, $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.y - $h$$inline_850$$ * $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ / 2, $height$$inline_865_w$$inline_849$$, $h$$inline_850$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$, 
            $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$setDisplayable$($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$setSize$($height$$inline_865_w$$inline_849$$ * $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ * $h$$inline_850$$ * $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$);
            $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$setLabelPosition$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.labelPosition);
            if($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.rotation) {
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ * window.Math.PI / 180, $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$.$setRotation$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$), 
              $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ = $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.x - ($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.x * 
              window.Math.cos($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$) - $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.y * window.Math.sin($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$)), 
              $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.y - ($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.x * window.Math.sin($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$) + $center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$.y * window.Math.cos($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$)))
            }
            (0,D.$JSCompiler_StaticMethods__parseCommonData$$)($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, 
            $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$, $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$);
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$
          }else {
            $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = D.$JSCompiler_alias_NULL$$
          }
          $popups$$1$$ && $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$setShowPopupBehaviors$($popups$$1$$);
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ && ($area$$inline_813_dataLayer$$4_markerDefs$$.$isSelectable$() && ($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$getDisplayable$(), 
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_813_dataLayer$$4_markerDefs$$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$))
        }
      }
      if($areas$$5_components_images$$2_markers$$ = $dataLayerOptions_initSelections$$.images) {
        for($area$$inline_881_j$$8$$ = 0;$area$$inline_881_j$$8$$ < $areas$$5_components_images$$2_markers$$.length;$area$$inline_881_j$$8$$++) {
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ != $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$
            }
          }
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $parentLayer$$2$$;
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$ = $area$$inline_813_dataLayer$$4_markerDefs$$;
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$];
          $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_812_isAreaDataLayer_selectionMode$$;
          ($areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$ = (0,D.$JSCompiler_StaticMethods__getCenter$$)($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$LayerName$, 
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$)) ? ($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$_tmap$.$_context$, $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$ = 
          new D.$DvtMapDataImage$$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.id, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.clientId, 
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.location), $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$.$setCenter$($areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$ = 
          new D.$DvtImage$$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.url), $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$.$setDisplayable$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$), 
          $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.width, $height$$inline_865_w$$inline_849$$ = $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.height, $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$setWidth$($dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$), 
          $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$setHeight$($height$$inline_865_w$$inline_849$$), $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ != D.$JSCompiler_alias_NULL$$ && $height$$inline_865_w$$inline_849$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$setX$($areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.x - 
          $dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ / 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$.$setY$($areaId$$inline_822_center$$inline_860_dataObj$$inline_830_dataObj$$inline_842$$.y - $height$$inline_865_w$$inline_849$$ / 2), $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$.$setSize$($dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ * 
          $height$$inline_865_w$$inline_849$$)), (!$dos$$inline_829_markerLabelStyle$$inline_844_outerStroke$$inline_9305_sos$$inline_827_sy$$inline_848_width$$inline_864$$ || !$height$$inline_865_w$$inline_849$$) && D.$DvtImageLoader$$.$loadImage$($center$$inline_840_context$$inline_823_context$$inline_861_rotation$$inline_852$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.url, D.$DvtObj$$.$createCallback$($context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, 
          $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$.$onImageLoaded$)), (0,D.$JSCompiler_StaticMethods__parseCommonData$$)($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$, 
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_9303_image$$inline_863_imgSrc$$inline_846_markerDefaults$$inline_843_radianRot$$inline_853_sis$$inline_826_sx$$inline_847$$, $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$, 
          $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$), $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $context$$inline_841_dataObj$$inline_862_dis$$inline_828_hs$$inline_825_marker$$inline_851$$) : $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = 
          D.$JSCompiler_alias_NULL$$;
          $popups$$1$$ && $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$setShowPopupBehaviors$($popups$$1$$);
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ && (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_813_dataLayer$$4_markerDefs$$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$)
        }
      }
      if($areas$$5_components_images$$2_markers$$ = $dataLayerOptions_initSelections$$.components) {
        $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_mashupHandler$ = new D.$DvtMashupHandler$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__dispatchEvent$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$);
        for($area$$inline_881_j$$8$$ = 0;$area$$inline_881_j$$8$$ < $areas$$5_components_images$$2_markers$$.length;$area$$inline_881_j$$8$$++) {
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ != $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$
            }
          }
          $disclosedItems_isolatedArea$$inline_880$$ && -1 != $disclosedItems_isolatedArea$$inline_880$$.indexOf($areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$].id) && $initDisclosed_xmlNode$$3$$.push($JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$);
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$ = $area$$inline_813_dataLayer$$4_markerDefs$$;
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $areas$$5_components_images$$2_markers$$[$area$$inline_881_j$$8$$];
          ($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = (0,D.$JSCompiler_StaticMethods__getCenter$$)($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$, $parentLayer$$2$$.$LayerName$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$)) ? 
          ($dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$ = new D.$DvtMapDataComponent$$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.$_tmap$.$_context$, $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.id, 
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.clientId, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.location), $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setCenter$($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$), 
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setDisplayable$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.$_mashupHandler$.$getComponent$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$.$_tmap$.$_context$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$)), 
          $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$._width, $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$._height, 
          $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setWidth$($JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$), $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setHeight$($height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$), $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ != 
          D.$JSCompiler_alias_NULL$$ && $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ != D.$JSCompiler_alias_NULL$$ && ($dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setX$($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.x - $JSCompiler_StaticMethods__parseMapComponent$self$$inline_867_data$$inline_821_data$$inline_838_data$$inline_858_width$$inline_873$$ / 
          2), $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$setY$($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.y - $height$$inline_874_isParentAreaDataLayer$$inline_839_isParentAreaDataLayer$$inline_859_path$$inline_824$$ / 2)), $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$.$_json$ = 
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = $dataLayer$$inline_820_dataLayer$$inline_837_dataLayer$$inline_857_dataLayer$$inline_869_dataObj$$inline_872$$) : 
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ = D.$JSCompiler_alias_NULL$$;
          $popups$$1$$ && $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$setShowPopupBehaviors$($popups$$1$$);
          $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$ && ($area$$inline_813_dataLayer$$4_markerDefs$$.$isSelectable$() && ($JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$ = $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$.$getDisplayable$(), 
          $JSCompiler_StaticMethods_addAreaObject$self$$inline_832_center$$inline_871_displayable$$8_layer$$inline_819_layer$$inline_836_layer$$inline_856$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_813_dataLayer$$4_markerDefs$$, $JSCompiler_StaticMethods__parseMapArea$self$$inline_818_JSCompiler_StaticMethods__parseMapImage$self$$inline_855_JSCompiler_StaticMethods__parseMapMarker$self$$inline_835_areaId_data$$inline_870_dataObj$$1_obj$$inline_833$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_881_j$$8$$ in $area$$inline_813_dataLayer$$4_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$ = $parentLayer$$2$$, $disclosedItems_isolatedArea$$inline_880$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_880$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$.$_layerDim$ = 
        D.$JSCompiler_alias_NULL$$, $area$$inline_881_j$$8$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_881_j$$8$$ != $disclosedItems_isolatedArea$$inline_880$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_879_isolatedRowKey$$.$_renderArea$[$area$$inline_881_j$$8$$] = D.$JSCompiler_alias_FALSE$$)
        }
      }
      if(($dataLayerOptions_initSelections$$ = $dataLayerOptions_initSelections$$.selectedItems) && 0 < $dataLayerOptions_initSelections$$.length) {
        $area$$inline_813_dataLayer$$4_markerDefs$$.$_initSelections$ = $dataLayerOptions_initSelections$$
      }
      $initDisclosed_xmlNode$$3$$ && 0 < $initDisclosed_xmlNode$$3$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$2$$.$LayerName$] = [$area$$inline_813_dataLayer$$4_markerDefs$$.$_clientId$, $initDisclosed_xmlNode$$3$$]);
      $parentLayer$$2$$.$DataLayers$[$area$$inline_813_dataLayer$$4_markerDefs$$.$_clientId$] = $area$$inline_813_dataLayer$$4_markerDefs$$
    }
  }
};
D.$DvtThematicMapJsonParser$$.prototype.$_parseStyles$ = function $$DvtThematicMapJsonParser$$$$$_parseStyles$$($styles$$4$$) {
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $styles$$4$$);
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($styles$$4$$.areaStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $styles$$4$$.labelStyle);
  this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($styles$$4$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $styles$$4$$
};
D.$JSCompiler_StaticMethods__parseCommonData$$ = function $$JSCompiler_StaticMethods__parseCommonData$$$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$, $layer$$5$$, $dataLayer$$9$$, $data$$25$$, $areaId$$inline_943_displayable$$9$$, $dataObj$$6$$, $isParentAreaDataLayer$$3$$) {
  $isParentAreaDataLayer$$3$$ && ($layer$$5$$.$_renderLabel$[$data$$25$$.location] = D.$JSCompiler_alias_FALSE$$);
  $data$$25$$.action && ($dataObj$$6$$.$_hasAction$ = D.$JSCompiler_alias_TRUE$$, $dataObj$$6$$.$_action$ = $data$$25$$.action);
  var $backgroundColor$$inline_931_datatip$$inline_922_destination$$ = $data$$25$$.destination;
  if($backgroundColor$$inline_931_datatip$$inline_922_destination$$) {
    var $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ = [];
    $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$.destination = $backgroundColor$$inline_931_datatip$$inline_922_destination$$;
    $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$.targetFrame = "_blank";
    $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$.focusable = D.$JSCompiler_alias_TRUE$$;
    (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($areaId$$inline_943_displayable$$9$$, $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$)
  }
  $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_displayTooltips$;
  if("none" != $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$) {
    $backgroundColor$$inline_931_datatip$$inline_922_destination$$ = $data$$25$$.shortDesc;
    if("auto" == $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$) {
      var $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$;
      ($areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ = $data$$25$$.location) && ($labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ = !$isParentAreaDataLayer$$3$$ || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_mapName$, $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$) : 
      D.$DvtBaseMapManager$$.$getLongAreaLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_mapName$, $layer$$5$$.$LayerName$, $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$));
      $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ && ($backgroundColor$$inline_931_datatip$$inline_922_destination$$ = $backgroundColor$$inline_931_datatip$$inline_922_destination$$ ? $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ + ": " + $backgroundColor$$inline_931_datatip$$inline_922_destination$$ : $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$)
    }
    $backgroundColor$$inline_931_datatip$$inline_922_destination$$ && $dataObj$$6$$.$setDatatip$($backgroundColor$$inline_931_datatip$$inline_922_destination$$)
  }
  $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ = $data$$25$$.pattern;
  $backgroundColor$$inline_931_datatip$$inline_922_destination$$ = $data$$25$$.color;
  $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_skinName$ ? "none" : $data$$25$$.visualEffects;
  $dataObj$$6$$ && $dataObj$$6$$.$setDatatipColor$($backgroundColor$$inline_931_datatip$$inline_922_destination$$);
  if($areaId$$inline_943_displayable$$9$$ instanceof D.$DvtMarker$$ && (0,D.$DvtMarker$isBuiltInShape$$)($areaId$$inline_943_displayable$$9$$.$getType$())) {
    if("none" != $data$$25$$.borderStyle) {
      var $stroke$$inline_933$$ = new D.$DvtSolidStroke$$($data$$25$$.borderColor, 1, $data$$25$$.borderWidth);
      $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($stroke$$inline_933$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $stroke$$inline_933$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($data$$25$$.borderStyle));
      $areaId$$inline_943_displayable$$9$$.$setStroke$($stroke$$inline_933$$)
    }
    var $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$ = $data$$25$$.opacity;
    "none" != $areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ ? $areaId$$inline_943_displayable$$9$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$inline_931_datatip$$inline_922_destination$$, $areaId$$inline_943_displayable$$9$$, $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$)) : $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ ? $areaId$$inline_943_displayable$$9$$.$setFill$(new D.$DvtPatternFill$$($labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$, 
    $backgroundColor$$inline_931_datatip$$inline_922_destination$$, "#FFFFFF")) : $backgroundColor$$inline_931_datatip$$inline_922_destination$$ && $areaId$$inline_943_displayable$$9$$.$setSolidFill$($backgroundColor$$inline_931_datatip$$inline_922_destination$$, $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$)
  }else {
    if($areaId$$inline_943_displayable$$9$$ instanceof D.$DvtPath$$) {
      if($areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$ = $data$$25$$.borderColor) {
        $stroke$$inline_933$$ = new D.$DvtSolidStroke$$($areaId$$inline_924_borderColor$$inline_935_displayTooltips$$inline_921_gradient$$inline_932_linkObj$$), $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_bSupportsVectorEffects$ && ($stroke$$inline_933$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $areaId$$inline_943_displayable$$9$$.$setStroke$($stroke$$inline_933$$)
      }
      $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ ? ($fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$ = new D.$DvtPatternFill$$($labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$, $backgroundColor$$inline_931_datatip$$inline_922_destination$$, "#FFFFFF"), $areaId$$inline_943_displayable$$9$$.$_ptFill$ = $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$) : $areaId$$inline_943_displayable$$9$$.$setSolidFill$($backgroundColor$$inline_931_datatip$$inline_922_destination$$, 
      $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$)
    }
  }
  $areaId$$inline_943_displayable$$9$$ = $data$$25$$.location;
  $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ = ($fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$ = $data$$25$$.label) ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ = $layer$$5$$.$getLabelDisplay$());
  if(!$fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$ && $isParentAreaDataLayer$$3$$ && ($dataObj$$6$$ instanceof D.$DvtMapDataArea$$ && "off" != $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$ || !($dataObj$$6$$ instanceof D.$DvtMapDataArea$$) && "on" == $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$)) {
    $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$ = "long" == $layer$$5$$.$_labelType$ ? $layer$$5$$.$AreaNames$[$areaId$$inline_943_displayable$$9$$][1] : $layer$$5$$.$AreaNames$[$areaId$$inline_943_displayable$$9$$][0]
  }
  if($fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$) {
    var $context$$inline_946_label$$inline_947$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_context$, $context$$inline_946_label$$inline_947$$ = $dataObj$$6$$ instanceof D.$DvtMapDataMarker$$ ? new D.$DvtOutputText$$($context$$inline_946_label$$inline_947$$, $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_946_label$$inline_947$$, $fill$$inline_9320_labelText$$inline_944_opacity$$inline_934$$, $layer$$5$$.$getLabelInfoForArea$ ? 
    $layer$$5$$.$getLabelInfoForArea$($areaId$$inline_943_displayable$$9$$) : D.$JSCompiler_alias_NULL$$, $labelDisplay$$inline_945_pattern$$inline_930_preDatatip$$inline_923$$, $dataLayer$$9$$.$_dataLabelLayer$, $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$_tmap$.$_bSupportsVectorEffects$);
    $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$ = new D.$DvtCSSStyle$$;
    $dataObj$$6$$ instanceof D.$DvtMapDataArea$$ && $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$merge$($layer$$5$$.$_layerCSSStyle$);
    $data$$25$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$, $data$$25$$.labelStyle);
    $context$$inline_946_label$$inline_947$$ instanceof D.$DvtMapLabel$$ && ($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$getStyle$("color") || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$6$$.$getDatatipColor$())));
    $context$$inline_946_label$$inline_947$$.$setCSSStyle$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_948$$)
  }
  $dataObj$$6$$.$setLabel$($context$$inline_946_label$$inline_947$$)
};
D.$JSCompiler_StaticMethods__getCenter$$ = function $$JSCompiler_StaticMethods__getCenter$$$($JSCompiler_StaticMethods__getCenter$self_locationCoords$$, $layerName$$3$$, $data$$28$$) {
  var $mapName$$ = $JSCompiler_StaticMethods__getCenter$self_locationCoords$$.$_tmap$.$_mapName$, $location$$21$$ = $data$$28$$.location;
  return $location$$21$$ ? (($JSCompiler_StaticMethods__getCenter$self_locationCoords$$ = D.$DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $layerName$$3$$, $location$$21$$)) || ($JSCompiler_StaticMethods__getCenter$self_locationCoords$$ = D.$DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$21$$)), $JSCompiler_StaticMethods__getCenter$self_locationCoords$$) : D.$DvtThematicMapProjections$$.$project$($data$$28$$.x, $data$$28$$.y, $JSCompiler_StaticMethods__getCenter$self_locationCoords$$.$_tmap$.$_mapName$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$ = [], $i$$38$$ = 0;$i$$38$$ < $popups$$2$$.length;$i$$38$$++) {
    $spbs$$.push(new D.$DvtShowPopupBehavior$$($popups$$2$$[$i$$38$$].popupId, $popups$$2$$[$i$$38$$].triggerType, D.$JSCompiler_alias_NULL$$, $popups$$2$$[$i$$38$$].align))
  }
  return $spbs$$
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$70$$, $y$$47$$, $basemap$$5$$) {
  var $point$$2$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$70$$, $y$$47$$));
      break;
    case "asia":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$70$$, $y$$47$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$70$$, $y$$47$$);
      break;
    case "europe":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$70$$, $y$$47$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$70$$, $y$$47$$));
      break;
    case "southAmerica":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$70$$, $y$$47$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$70$$, $y$$47$$));
      break;
    case "emea":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$70$$, $y$$47$$));
      break;
    case "latinAmerica":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$70$$, $y$$47$$));
      break;
    case "usaAndCanada":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$70$$, $y$$47$$));
      break;
    case "worldRegions":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$70$$, $y$$47$$);
      break;
    case "usa":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$70$$, $y$$47$$);
      break;
    case "world":
      $point$$2$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$70$$, $y$$47$$)
  }
  return $point$$2$$ ? new D.$DvtPoint$$(10 * $point$$2$$.x, 10 * $point$$2$$.y) : new D.$DvtPoint$$($x$$70$$, $y$$47$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$71$$, $y$$48$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$71$$, $y$$48$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$71$$, $y$$48$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$71$$, $y$$48$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$71$$, $y$$48$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$71$$, $y$$48$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$71$$, $y$$48$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$71$$, $y$$48$$))) : new D.$DvtPoint$$($x$$71$$, 
  $y$$48$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$72$$, $y$$49$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$72$$, $y$$49$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$73$$, $y$$50$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$73$$, $y$$50$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$73$$, $y$$50$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$3$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$3$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c_sP1$$, $n$$4_sP2$$, $theta_x$$74$$, $rho_y$$51$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c_sP1$$);
  $n$$4_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$4_sP2$$);
  $n$$4_sP2$$ = 0.5 * (window.Math.sin($c_sP1$$) + window.Math.sin($n$$4_sP2$$));
  $c_sP1$$ = window.Math.pow(window.Math.cos($c_sP1$$), 2) + 2 * $n$$4_sP2$$ * window.Math.sin($c_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c_sP1$$ - 2 * $n$$4_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$4_sP2$$;
  $theta_x$$74$$ = $n$$4_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta_x$$74$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$51$$ = $c_sP1$$ - 2 * $n$$4_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$51$$));
  $rho_y$$51$$ = window.Math.sqrt($rho_y$$51$$) / $n$$4_sP2$$;
  return new D.$DvtPoint$$($rho_y$$51$$ * window.Math.sin($theta_x$$74$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$51$$ * window.Math.cos($theta_x$$74$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$75$$, $y$$52$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$52$$)));
  return new D.$DvtPoint$$($x$$75$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$6_centerY$$, $radX_x$$76$$, $radY_y$$53$$) {
  $radX_x$$76$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX_x$$76$$);
  $radY_y$$53$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY_y$$53$$);
  var $centerX$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$6_centerY$$.x);
  $center$$6_centerY$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$6_centerY$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY_y$$53$$) * window.Math.sin($radX_x$$76$$ - $centerX$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$6_centerY$$) * window.Math.sin($radY_y$$53$$) - window.Math.sin($center$$6_centerY$$) * window.Math.cos($radY_y$$53$$) * window.Math.cos($radX_x$$76$$ - $centerX$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$77$$, $y$$54$$) {
  var $newY_ycriteria$$ = window.Math.floor(window.Math.abs($y$$54$$) / 5);
  $newY_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$54$$) - 5 * $newY_ycriteria$$) / 5, $newX$$ = $x$$77$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$][0])), $newY_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$][1] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$ + 
  1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY_ycriteria$$][1]);
  0 > $y$$54$$ && ($newY_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$, 180 * $newY_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$4$$, $point$$4$$) {
  return new D.$DvtPoint$$($point$$4$$.x * $matrix$$4$$.$_a$ + $matrix$$4$$.$_tx$, $point$$4$$.y * $matrix$$4$$.$_d$ + $matrix$$4$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$51$$ = $deviceView$$.x, $d6_j$$9$$ = $deviceView$$.y, $d$$1$$ = $mapBound$$.$w$, $d1$$ = $mapBound$$.$h$, $d2_d3$$ = 0, $d2_d3$$ = $deviceView$$.$w$ / $d$$1$$, $d4$$ = $deviceView$$.$h$ / $d1$$, $d2_d3$$ = $d2_d3$$ <= $d4$$ ? $d2_d3$$ : $d4$$, $d5_i$$51$$ = $d5_i$$51$$ - $mapBound$$.x * $d2_d3$$, $d6_j$$9$$ = $d6_j$$9$$ + $mapBound$$.y * $d2_d3$$, $d5_i$$51$$ = $d5_i$$51$$ + ($deviceView$$.$w$ - $d$$1$$ * $d2_d3$$) / 2, $d6_j$$9$$ = $d6_j$$9$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - 
  $d1$$ * $d2_d3$$) / 2);
  return new D.$DvtMatrix$$($d2_d3$$, 0, 0, -$d2_d3$$, $d5_i$$51$$, $d6_j$$9$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$78$$) {
  return $x$$78$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$79$$) {
  return $x$$79$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$80$$, $y$$55$$, $basemap$$6$$) {
  var $point$$5$$;
  $x$$80$$ /= 10;
  $y$$55$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$5$$.x, $point$$5$$.y);
      break;
    case "asia":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$5$$.x, $point$$5$$.y);
      break;
    case "australia":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$80$$, $y$$55$$);
      break;
    case "europe":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$5$$.x, $point$$5$$.y);
      break;
    case "northAmerica":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$5$$.x, $point$$5$$.y);
      break;
    case "southAmerica":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$5$$.x, $point$$5$$.y);
      break;
    case "emea":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$5$$.x, $point$$5$$.y);
      break;
    case "latinAmerica":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      break;
    case "usaAndCanada":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$80$$, $y$$55$$));
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$5$$.x, $point$$5$$.y);
      break;
    case "worldRegions":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$80$$, $y$$55$$);
      break;
    case "usa":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$80$$, $y$$55$$);
      break;
    case "world":
      $point$$5$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$80$$, $y$$55$$)
  }
  return $point$$5$$ ? $point$$5$$ : new D.$DvtPoint$$($x$$80$$, $y$$55$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$81$$, $y$$56$$) {
  var $point$$6_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$81$$, $y$$56$$) ? ($point$$6_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$6_viewPortTransform$$4$$.$invert$(), $point$$6_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$6_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$81$$, 
  $y$$56$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$6_viewPortTransform$$4$$.x, $point$$6_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$81$$, $y$$56$$) ? ($point$$6_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$6_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$6_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$81$$, $y$$56$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$81$$, $y$$56$$) ? ($point$$6_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$6_viewPortTransform$$4$$.$invert$(), $point$$6_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$6_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$81$$, $y$$56$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$6_viewPortTransform$$4$$.x, $point$$6_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$81$$, $y$$56$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$82$$, $y$$57$$) {
  var $point$$7_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$7_viewPortTransform$$5$$.$invert$();
  $point$$7_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$7_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$82$$, $y$$57$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$7_viewPortTransform$$5$$.x, $point$$7_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$83$$, $y$$58$$) {
  var $point$$8_viewPortTransform$$6$$;
  $point$$8_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$83$$, $y$$58$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$8_viewPortTransform$$6$$.$invert$();
  $point$$8_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$8_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$83$$, $y$$58$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$8_viewPortTransform$$6$$.x, $point$$8_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$9$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$9$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$2_sP1$$1$$, $n$$5_sP2$$1$$, $x$$84$$, $y$$59$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0_phi0$$1$$);
  $c$$2_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$2_sP1$$1$$);
  $n$$5_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$5_sP2$$1$$);
  $n$$5_sP2$$1$$ = 0.5 * (window.Math.sin($c$$2_sP1$$1$$) + window.Math.sin($n$$5_sP2$$1$$));
  $c$$2_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$2_sP1$$1$$), 2) + 2 * $n$$5_sP2$$1$$ * window.Math.sin($c$$2_sP1$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = $c$$2_sP1$$1$$ - 2 * $n$$5_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0_phi0$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0_phi0$$1$$) / $n$$5_sP2$$1$$;
  var $p$$1$$ = window.Math.sqrt($x$$84$$ * $x$$84$$ + ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$59$$) * ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$59$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$84$$ / ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$59$$)) / $n$$5_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$2_sP1$$1$$ - $p$$1$$ * $p$$1$$ * $n$$5_sP2$$1$$ * $n$$5_sP2$$1$$) / (2 * $n$$5_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$85$$, $y$$60$$) {
  return new D.$DvtPoint$$($x$$85$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$60$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$7$$, $radX$$1_x$$86$$, $radY$$1_y$$61$$) {
  $radX$$1_x$$86$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$1_y$$61$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$7$$.y), $p$$2$$ = window.Math.sqrt($radX$$1_x$$86$$ * $radX$$1_x$$86$$ + $radY$$1_y$$61$$ * $radY$$1_y$$61$$), $c$$3$$ = window.Math.asin($p$$2$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$7$$.x) + window.Math.atan($radX$$1_x$$86$$ * window.Math.sin($c$$3$$) / ($p$$2$$ * window.Math.cos($centerY$$1$$) * window.Math.cos($c$$3$$) - $radY$$1_y$$61$$ * window.Math.sin($centerY$$1$$) * window.Math.sin($c$$3$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$3$$) * window.Math.sin($centerY$$1$$) + $radY$$1_y$$61$$ * window.Math.sin($c$$3$$) * 
  window.Math.cos($centerY$$1$$) / $p$$2$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$87$$, $y$$62$$) {
  var $criteria$$1_originalX$$ = window.Math.floor(window.Math.abs($y$$62$$) / 5);
  $criteria$$1_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$1_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$62$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$1_originalX$$, $criteria$$1_originalX$$ = $x$$87$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0]));
  0 > $y$$62$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$1_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$38$$, $button$$3$$, $mapCallback$$, $panZoomCanvas$$, $btype$$, $resources$$3$$, $eventManager$$8$$) {
  this.Init($context$$38$$, $button$$3$$, $mapCallback$$, $panZoomCanvas$$, $btype$$, $resources$$3$$, $eventManager$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$39_proxy$$1$$, $button$$4$$, $mapCallback$$1$$, $panZoomCanvas$$1$$, $btype$$1$$, $resources$$4$$, $eventManager$$9$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$39_proxy$$1$$, $panZoomCanvas$$1$$, $resources$$4$$);
  this.$_btype$ = $btype$$1$$;
  this.$_button$ = $button$$4$$;
  this.$_eventManager$ = $eventManager$$9$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  this.$_button$.setCursor("pointer");
  $context$$39_proxy$$1$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$39_proxy$$1$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$1$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$) {
  this.$setAlpha$($enabled$$ ? 1 : 0.4);
  this.$_button$.setCursor($enabled$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_isEnabled$ = $enabled$$;
  this.$_button$.$setEnabled$($enabled$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$46$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$46$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$40$$, $view$$4$$, $state$$5$$) {
  this.Init($context$$40$$, $view$$4$$, $state$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$41$$, $view$$5$$, $state$$6$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$41$$, $view$$5$$, $state$$6$$);
  this.$_drillMode$ = $view$$5$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$5$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$5$$, $view$$5$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$5$$, $view$$5$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$5$$, $view$$5$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$5$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$_context$, this.$_resetCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$_context$, this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$_context$, this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillUpButton$)
  }
};
});