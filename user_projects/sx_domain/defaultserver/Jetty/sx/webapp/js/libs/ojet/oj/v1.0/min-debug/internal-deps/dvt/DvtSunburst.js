"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$14$$, $bComplete$$1$$) {
  this.Init($bComplete$$1$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$14$$ % 360
};
(0,D.$goog$exportSymbol$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtBaseSunburst$$ = function $$DvtBaseSunburst$$$($context$$325$$, $callback$$93$$, $callbackObj$$66$$) {
  this.Init($context$$325$$, $callback$$93$$, $callbackObj$$66$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseSunburst$$, D.$DvtBaseTreeView$$, "DvtBaseSunburst");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$326$$, $callback$$94$$, $callbackObj$$67$$) {
  D.$DvtBaseSunburst$$.$superclass$.Init.call(this, $context$$326$$, $callback$$94$$, $callbackObj$$67$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$11$$) {
  return(new D.$DvtSunburstParser$$(this)).parse($xmlString$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($props$$24$$) {
  D.$DvtBaseSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $props$$24$$);
  this.$_rotation$ = $props$$24$$.rotation;
  this.$_rotateCursor$ = (0,D.$DvtAgent$isPlatformIE$$)() ? "url(" + this.$_resources$.cursorRotate + "), auto" : "url(" + this.$_resources$.cursorRotate + ") 8 8, auto";
  this.$_startAngle$ = (360 - $props$$24$$.$startAngle$) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$)
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$85$$) {
  var $bufferSpace$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$85$$.$w$, $availSpace$$85$$.$h$) / 400), 2);
  $availSpace$$85$$.x += $bufferSpace$$;
  $availSpace$$85$$.y += $bufferSpace$$;
  $availSpace$$85$$.$w$ -= 2 * $bufferSpace$$;
  $availSpace$$85$$.$h$ -= 2 * $bufferSpace$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$85$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$85$$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$85$$.$w$, $availSpace$$85$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$Sorting$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$139$$, $bounds$$96$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$139$$);
  this.$_breadcrumbs$ && $container$$139$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$139$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$96$$.x + $bounds$$96$$.$w$ / 2, $bounds$$96$$.y + $bounds$$96$$.$h$ / 2);
  if("on" == this.$_rotation$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$9_nodeContainer$$12_rotationShape$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 60 : 15, $buffer$$9_nodeContainer$$12_rotationShape$$ = new D.$DvtCircle$$(this.$_context$, $bounds$$96$$.x + $bounds$$96$$.$w$ / 2, $bounds$$96$$.y + $bounds$$96$$.$h$ / 2, this.$_totalRadius$ + $buffer$$9_nodeContainer$$12_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$9_nodeContainer$$12_rotationShape$$);
    $buffer$$9_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$139$$.$addChild$($buffer$$9_nodeContainer$$12_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$9_nodeContainer$$12_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$9_nodeContainer$$12_rotationShape$$ = new D.$DvtContainer$$(this.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$9_nodeContainer$$12_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$139$$.$addChild$($buffer$$9_nodeContainer$$12_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$9_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$139$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$66$$, $context$$327$$, $callback$$95$$, $callbackObj$$68$$) {
  return new D.$DvtSunburstEventManager$$($view$$66$$, $context$$327$$, $callback$$95$$, $callbackObj$$68$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$140$$, $bounds$$97$$) {
  if("fan" === this.$AnimationOnDisplay$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$34$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$34$$.$_animator$, "typeNumber", this, this.$_getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$34$$
  }
  return D.$DvtBaseSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$140$$, $bounds$$97$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$96$$ = D.$DvtBaseSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$96$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$96$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$96$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$86_selectedNodes$$1$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$86_selectedNodes$$1$$);
    this.$Render$(this.$_container$, $availSpace$$86_selectedNodes$$1$$);
    for(var $availSpace$$86_selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$566$$ = 0;$i$$566$$ < $availSpace$$86_selectedNodes$$1$$.length;$i$$566$$++) {
      $availSpace$$86_selectedNodes$$1$$[$i$$566$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtBaseSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$66$$) {
  this.$_selectedLayer$.$addChild$($displayable$$66$$);
  !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$_getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$1$$) {
  this.$_angleExtent$ = $extent$$1$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$35$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$35$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$1$$) {
  var $change$$1$$ = $newAngle$$1$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$6$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$6$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$6$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$200$$, $y$$172$$) {
  return window.Math.atan2($y$$172$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$200$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseSunburst$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$324$$, $callback$$92$$, $callbackObj$$65$$) {
  var $component$$26$$ = new D.$DvtSunburst$$;
  $component$$26$$.Init($context$$324$$, $callback$$92$$, $callbackObj$$65$$);
  return $component$$26$$
};
D.$DvtSunburst$$.getDefaults = function $$DvtSunburst$$$getDefaults$($skin$$4$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSunburstDefaults$$, $skin$$4$$)
};
D.$DvtSunburst$$.prototype.$render$ = function $$DvtSunburst$$$$$render$$($options$$233_xmlString$$10$$, $width$$119$$, $height$$99$$) {
  $options$$233_xmlString$$10$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$233_xmlString$$10$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$233_xmlString$$10$$ = (new D.$DvtSunburstJsonUtils$$).$toXml$(this.$Options$);
  D.$DvtSunburst$$.$superclass$.$render$.call(this, $options$$233_xmlString$$10$$, $width$$119$$, $height$$99$$)
};
D.$DvtSunburst$$.prototype.render = D.$DvtSunburst$$.prototype.$render$;
D.$DvtSunburst$$.prototype.$getBundle$ = function $$DvtSunburst$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSunburstBundle$$);
  return this.$_bundle$
};
D.$DvtSunburstParser$$ = function $$DvtSunburstParser$$$($sunburst$$) {
  this.Init($sunburst$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstParser$$, D.$DvtBaseTreeParser$$, "DvtSunburstParser");
D.$DvtSunburstParser$$.prototype.$CreateNode$ = function $$DvtSunburstParser$$$$$CreateNode$$($treeView$$, $props$$1$$, $templates$$) {
  return new D.$DvtSunburstNode$$($treeView$$, $props$$1$$, $templates$$)
};
D.$DvtSunburstParser$$.prototype.$ParseRootAttributes$ = function $$DvtSunburstParser$$$$$ParseRootAttributes$$($xmlNode$$) {
  var $ret$$4$$ = D.$DvtSunburstParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$);
  $ret$$4$$.rotation = $xmlNode$$.$getAttr$("r");
  $ret$$4$$.$startAngle$ = $xmlNode$$.$getAttr$("sa");
  if($ret$$4$$.$startAngle$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($ret$$4$$.$startAngle$)) {
    $ret$$4$$.$startAngle$ = 90
  }
  return $ret$$4$$
};
D.$DvtSunburstParser$$.prototype.$ParseNodeAttributes$ = function $$DvtSunburstParser$$$$$ParseNodeAttributes$$($xmlNode$$1$$) {
  var $ret$$5$$ = D.$DvtSunburstParser$$.$superclass$.$ParseNodeAttributes$.call(this, $xmlNode$$1$$);
  $ret$$5$$.$labelHalign$ = $xmlNode$$1$$.$getAttr$("ha");
  $ret$$5$$.$radius$ = $xmlNode$$1$$.$getAttr$("r");
  return $ret$$5$$
};
D.$DvtSunburstParser$$.prototype.$ParseAdditionalNodeStyles$ = function $$DvtSunburstParser$$$$$ParseAdditionalNodeStyles$$($nodeStyle$$, $nodeHoverStyle$$, $nodeSelectedStyle$$, $styles$$3$$) {
  $styles$$3$$.NODE_DEFAULT_COLOR_STYLE = $nodeStyle$$.$getStyle$("border-color");
  $styles$$3$$.NODE_HOVER_COLOR_STYLE = $nodeHoverStyle$$.$getStyle$("border-color");
  $styles$$3$$.NODE_SELECTED_INNER_COLOR_STYLE = $nodeSelectedStyle$$.$getStyle$("-tr-inner-color");
  $styles$$3$$.NODE_SELECTED_OUTER_COLOR_STYLE = $nodeSelectedStyle$$.$getStyle$("-tr-outer-color")
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$1$$, $props$$2$$, $templates$$1$$) {
  this.Init($sunburst$$1$$, $props$$2$$, $templates$$1$$);
  this.$_labelDisplay$ = $props$$2$$.$labelDisplay$ ? $props$$2$$.$labelDisplay$ : "auto";
  this.$_labelHalign$ = $props$$2$$.$labelHalign$;
  this.$_radius$ = $props$$2$$.$radius$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($container$$7$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$7$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$7$$.$addChild$(this.$_shape$);
    var $afRoot_template$$ = this.$_template$;
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot_template$$) {
      var $afContext_dims$$3_sqrt2$$ = window.Math.sqrt(2), $aw_matrix$$3$$ = this.$_outerRadius$ * $afContext_dims$$3_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $afContext_dims$$3_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $afContext_dims$$3_sqrt2$$ + 2;
      $afContext_dims$$3_sqrt2$$ = this.$_view$.$_afContext$;
      $afContext_dims$$3_sqrt2$$.$_elContext$ = this.$_elAttributes$;
      0 < $aw_matrix$$3$$ && 0 < $aw_matrix$$3$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext_dims$$3_sqrt2$$, $aw_matrix$$3$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext_dims$$3_sqrt2$$, $aw_matrix$$3$$), $afContext_dims$$3_sqrt2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot_template$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext_dims$$3_sqrt2$$, $afRoot_template$$, this.$_shape$), $afContext_dims$$3_sqrt2$$ = 
      $afRoot_template$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot_template$$, this.$_x$ + ($aw_matrix$$3$$ - $afContext_dims$$3_sqrt2$$.$w$) / 2, this.$_y$ + ($aw_matrix$$3$$ - $afContext_dims$$3_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($afContext_dims$$3_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $afContext_dims$$3_sqrt2$$.x, $afContext_dims$$3_sqrt2$$.y, $afContext_dims$$3_sqrt2$$.$w$, $afContext_dims$$3_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw_matrix$$3$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw_matrix$$3$$) || this.$_textBackground$.$setMatrix$($aw_matrix$$3$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$7$$)
  }
};
D.$DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($selected$$) {
  D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$);
  this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$ = function $$JSCompiler_StaticMethods_isExpandCollapseEnabled$$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"i" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "ir" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
};
D.$DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($event$$15_next$$) {
  var $keyCode$$1_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$, $i$$inline_595_idx$$, $root$$1$$;
  if($event$$15_next$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$15_next$$)
  }
  $keyCode$$1_lastVisitedChild$$ = $event$$15_next$$.keyCode;
  if(32 == $keyCode$$1_lastVisitedChild$$ && $event$$15_next$$.ctrlKey) {
    return this
  }
  for($root$$1$$ = this;$root$$1$$.$_parent$;) {
    $root$$1$$ = $root$$1$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$1$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_595_idx$$ = 0;$i$$inline_595_idx$$ < $lastVisitedMidAngle_navigables$$.length;$i$$inline_595_idx$$++) {
      if(this === $lastVisitedMidAngle_navigables$$[$i$$inline_595_idx$$]) {
        break a
      }
    }
    $i$$inline_595_idx$$ = -1
  }
  var $midAngle$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$);
  switch($keyCode$$1_lastVisitedChild$$) {
    case 38:
      if(this === $root$$1$$ || 180 < $midAngle$$) {
        if($keyCode$$1_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$ = $keyCode$$1_lastVisitedChild$$.$_startAngle$ + $keyCode$$1_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$), 180 < $lastVisitedMidAngle_navigables$$) {
            return $keyCode$$1_lastVisitedChild$$
          }
        }
        $event$$15_next$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$15_next$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$15_next$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$1$$ || 0 <= $midAngle$$ && 180 >= $midAngle$$) {
        if($keyCode$$1_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$ = $keyCode$$1_lastVisitedChild$$.$_startAngle$ + $keyCode$$1_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$), 0 <= $lastVisitedMidAngle_navigables$$ && 180 >= $lastVisitedMidAngle_navigables$$) {
            return $keyCode$$1_lastVisitedChild$$
          }
        }
        $event$$15_next$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$15_next$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$15_next$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$15_next$$ = 1 == $lastVisitedMidAngle_navigables$$.length ? this : 0 == $i$$inline_595_idx$$ ? $lastVisitedMidAngle_navigables$$[$lastVisitedMidAngle_navigables$$.length - 1] : $lastVisitedMidAngle_navigables$$[$i$$inline_595_idx$$ - 1];
      break;
    case 39:
      $event$$15_next$$ = 1 == $lastVisitedMidAngle_navigables$$.length ? this : $i$$inline_595_idx$$ == $lastVisitedMidAngle_navigables$$.length - 1 ? $lastVisitedMidAngle_navigables$$[0] : $lastVisitedMidAngle_navigables$$[$i$$inline_595_idx$$ + 1];
      break;
    default:
      $event$$15_next$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$15_next$$);
  return $event$$15_next$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$1$$) {
  var $parent$$4$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$1$$.$_parent$;
  $parent$$4$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$1$$ = $parent$$4$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$4$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$1$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$1$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg_rad$$) {
  $deg_rad$$ = D.$DvtMath$$.$radsToDegrees$($deg_rad$$);
  0 > $deg_rad$$ ? $deg_rad$$ += 360 : 360 < $deg_rad$$ && ($deg_rad$$ -= 360);
  return $deg_rad$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$ = this.$_shape$.$getDimensions$(), $point$$ = new D.$DvtPoint$$($bounds$$.x, $bounds$$.y), $point$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$);
    $bounds$$.x = $point$$.x;
    $bounds$$.y = $point$$.y;
    return $bounds$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$1$$, $outerRadius$$1$$, $startAngle$$4$$, $angleExtent$$2$$) {
  this.$_innerRadius$ = $innerRadius$$1$$;
  this.$_outerRadius$ = $outerRadius$$1$$;
  this.$_startAngle$ = $startAngle$$4$$;
  this.$_angleExtent$ = $angleExtent$$2$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$1$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_innerRadius$, this.$_outerRadius$, this.$_startAngle$, this.$_angleExtent$, $r$$, $g$$, $b$$1$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$) {
  this.$setLayoutParams$($params$$[0], $params$$[1], $params$$[2], $params$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$[4]), window.Math.round($params$$[5]), window.Math.round($params$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$3$$, $oldNode$$) {
  $oldNode$$.$_hasLayout$ && 0 < $oldNode$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$3$$, $oldNode$$) : this.$animateInsert$($handler$$3$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$61$$, $y$$38$$) {
  var $angle$$3$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$61$$, $y$$38$$);
  return window.Math.sqrt($x$$61$$ * $x$$61$$ + $y$$38$$ * $y$$38$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$61$$ * $x$$61$$ + $y$$38$$ * $y$$38$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$3$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$4$$) {
  for(;$angle$$4$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$4$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$4$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$4$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$4$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$4$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$5$$, $angle$$5$$) {
  return{x:window.Math.cos($angle$$5$$) * $radius$$5$$, y:window.Math.sin($angle$$5$$) * $radius$$5$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$63$$, $y$$40$$) {
  var $angle$$6$$ = window.Math.atan2($y$$40$$, $x$$63$$);
  0 > $angle$$6$$ ? $angle$$6$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$6$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$6$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$6$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd_shape$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd_shape$$ = new D.$DvtPath$$(this.$_view$.$_context$, $cmd_shape$$);
  this.$_view$.$__getEventManager$().$associate$($cmd_shape$$, this);
  $cmd_shape$$.$setAlpha$(this.$getAlpha$());
  $cmd_shape$$.$setFill$(this.$GetFill$());
  var $selectedInnerColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_SELECTED_INNER_COLOR_STYLE"), $selectedOuterColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR_STYLE"), $hoverColor$$1$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR_STYLE");
  $cmd_shape$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_DEFAULT_COLOR_STYLE"), 0.3));
  $cmd_shape$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$1$$, 1, 3));
  $cmd_shape$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectedInnerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($selectedOuterColor$$, 1, 3.5));
  $cmd_shape$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$1$$, 1, 3));
  $cmd_shape$$.$setSelectable$(this.$isSelectable$());
  this.$_bArtificialRoot$ && ($cmd_shape$$.$setAlpha$(0.001), $cmd_shape$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd_shape$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$1_p1$$, $p2$$, $p3$$, $p4$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$1_p1$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$1_p1$$ = D.$DvtPathUtils$$.moveTo($cmd$$1_p1$$.x, $cmd$$1_p1$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$.x, $p2$$.y) + D.$DvtPathUtils$$.lineTo($p3$$.x, $p3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 0, $p4$$.x, $p4$$.y) + D.$DvtPathUtils$$.closePath()) : ($cmd$$1_p1$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $p3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$1_p1$$ = D.$DvtPathUtils$$.moveTo($cmd$$1_p1$$.x, $cmd$$1_p1$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$.x, $p2$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$1_p1$$.x, $cmd$$1_p1$$.y), 0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$1_p1$$ += D.$DvtPathUtils$$.moveTo($p4$$.x, $p4$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 
  2, 0, $p3$$.x, $p3$$.y) + D.$DvtPathUtils$$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$.x, $p4$$.y)), $cmd$$1_p1$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$1_p1$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$) {
  if(!this.$_textStr$ || !$JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = D.$JSCompiler_alias_FALSE$$;
  if("auto" == this.$_labelDisplay$) {
    if($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = !(0,D.$DvtAgent$isPlatformIE$$)()) {
      (0,D.$DvtAgent$_initialize$$)(), $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = "Windows" == D.$DvtAgent$_os$$
    }
    $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
  }else {
    "rotated" == this.$_labelDisplay$ && ($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ && this.$_angleExtent$ < 2 * window.Math.PI) {
    var $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = window.Math.max(this.$_innerRadius$, 10), $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$ = this.$_outerRadius$ - $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ - 6, $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ + 
    6);
    if(6 >= $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$) {
      $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, 0, 0), $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$), 
      D.$DvtTextUtils$$.$fitText$($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$, $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$, $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$, $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$)) {
        $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ = ($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ + this.$_outerRadius$) / 2;
        if("s" == this.$_labelHalign$ || "e" == this.$_labelHalign$) {
          $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$.$addChild$($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$), $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$getDimensions$().$w$, "s" == this.$_labelHalign$ ? $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ = 
          $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ + 4.5 + $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ / 2 : "e" == this.$_labelHalign$ && ($anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ = $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ + $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$ - 4.5 - $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ / 
          2)
        }
        $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$alignCenter$();
        $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$alignMiddle$();
        $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$;
        $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = 0 > $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ ? $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$;
        $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ > 0.5 * window.Math.PI && $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ < 1.5 * window.Math.PI && ($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ += window.Math.PI);
        $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$setRotation$($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$, $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$.x, $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$.y);
        $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$
      }else {
        $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = {x:0, y:0}
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x + 
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ / 2, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x - $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ / 2, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.y)) || 
      !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$)) {
        $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$) {
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$);
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$.$alignCenter$();
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$.$alignMiddle$();
      $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$), $x2$$inline_617$$ = $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x, $y1$$inline_618$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.y - 
      $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$.$h$ / 2, $y2$$inline_619$$ = $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.y + $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$.$h$ / 2;this.contains($anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$, $y1$$inline_618$$) && this.contains($anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$, $y2$$inline_619$$);) {
        $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$--
      }
      for(;this.contains($x2$$inline_617$$, $y1$$inline_618$$) && this.contains($x2$$inline_617$$, $y2$$inline_619$$);) {
        $x2$$inline_617$$++
      }
      $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ += 3;
      $x2$$inline_617$$ -= 3;
      $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = 2 * window.Math.min($JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x - $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$, $x2$$inline_617$$ - $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$.x);
      $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ < $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$.$w$ && ($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$.$setX$(($anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$ + $x2$$inline_617$$) / 2), $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$ = $x2$$inline_617$$ - $anchorRadius$$inline_604_availHeight$$inline_602_x1$$inline_616$$);
      $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$, $JSCompiler_temp$$14_bRotated_text$$inline_603_textAnchor$$inline_611_usableSpace$$inline_620$$, $availWidth$$inline_601_estimatedDims$$inline_615_rightAngle$$inline_613$$.$h$, $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$) ? $angle$$inline_607_approxWidth$$inline_612_innerStartCoord$$inline_600_text$$inline_614$$ : 
      D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$218_actualTextWidth$$inline_605_container$$9_textAnchor$$inline_606$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$;
    $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$ = this.$_shape$;
    if(!$JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$ || !(0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this)) {
      $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$ = D.$JSCompiler_alias_NULL$$
    }else {
      var $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$;
      if(this.$_disclosed$) {
        $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$ = this.$_view$.$_context$;
        var $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$ = this.$_view$.$_resources$, $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$ = new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.collapseUp, 0, 0, 16, 16), $overState$$inline_9167_overState$$inline_9175$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.collapseOver, 0, 0, 16, 16), $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$ = new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, 
        $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$ = this.$_view$.$_context$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$ = this.$_view$.$_resources$, $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$ = new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.expandUp, 
        0, 0, 16, 16), $overState$$inline_9167_overState$$inline_9175$$ = new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.expandOver, 0, 0, 16, 16), $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$ = new D.$DvtImage$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, 
        $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_625_upState$$inline_9166_upState$$inline_9174$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_9167_overState$$inline_9175$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$);
      $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$ = new D.$DvtButton$$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$, $overState$$inline_9167_overState$$inline_9175$$, $downState$$inline_9168_downState$$inline_9176_resources$$inline_9165_resources$$inline_9173$$);
      $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$.x - 8, $center$$inline_625_upState$$inline_9166_upState$$inline_9174$$.y - 8);
      $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$.$addChild$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$);
      $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$ = this.$_disclosed$ ? this.$_view$.$_resources$.collapse : this.$_view$.$_resources$.expand;
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$));
      $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$ = $JSCompiler_temp$$9008_button$$inline_624_button$$inline_9169_button$$inline_9177_context$$inline_9164_context$$inline_9172$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$516_container$$inline_623_tooltip$$inline_626$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$3_cmd$$2$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$3_cmd$$2$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$3_cmd$$2$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$17$$ = 0;$i$$17$$ < $children$$3_cmd$$2$$.length;$i$$17$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$3_cmd$$2$$[$i$$17$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$() {
  this.$_disclosed$ = !this.$_disclosed$;
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$ = this.$_view$, $bDisclosed$$inline_630_xmlString$$inline_9182$$ = this.$_disclosed$, $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$_navigableIdToFocus$ = $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$;
  if($bDisclosed$$inline_630_xmlString$$inline_9182$$) {
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", this.getId()))
  }else {
    var $bDisclosed$$inline_630_xmlString$$inline_9182$$ = $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$LastXml$, $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$ = this.getId(), $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$ = $bDisclosed$$inline_630_xmlString$$inline_9182$$.indexOf('\x3cn id\x3d"' + $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$), $endIndex$$inline_9185$$ = $bDisclosed$$inline_630_xmlString$$inline_9182$$.indexOf("\x3e", 
    $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$), $nodeString$$inline_9186$$ = $bDisclosed$$inline_630_xmlString$$inline_9182$$.substring($id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$, $endIndex$$inline_9185$$), $nodeString$$inline_9186$$ = -1 < $nodeString$$inline_9186$$.indexOf("di\x3d") ? $nodeString$$inline_9186$$.replace('di\x3d"t"', 'di\x3d"f"') : $nodeString$$inline_9186$$ + 'di\x3d"f"';
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$render$($bDisclosed$$inline_630_xmlString$$inline_9182$$.substring(0, $id$$inline_9180_nodeId$$inline_9183_startIndex$$inline_9184$$) + $nodeString$$inline_9186$$ + $bDisclosed$$inline_630_xmlString$$inline_9182$$.substring($endIndex$$inline_9185$$), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$Width$, $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$Height$);
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_628$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId()))
  }
  this.$UpdateAriaLabel$()
};
D.$DvtSunburstNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods___getRadius$self$$.$_template$ ? 1 : 0.5
};
D.$DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
  var $states$$ = [];
  this.$isSelectable$() && $states$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) && $states$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$, this.$Bundle$)
};
D.$DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$, $startAngle$$1$$, $angleExtent$$, $sorting$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$, $startAngle$$1$$, $angleExtent$$, $sorting$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$13_node$$3$$, $childStartAngle_startAngle$$2$$, $angleExtent$$1$$, $sorting$$1$$, $children$$1_innerRadius$$) {
  var $outerRadius$$ = $children$$1_innerRadius$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$13_node$$3$$) * $radiusPerDepth$$1$$;
  $i$$13_node$$3$$.$setLayoutParams$($children$$1_innerRadius$$, $outerRadius$$, $childStartAngle_startAngle$$2$$, $angleExtent$$1$$);
  $children$$1_innerRadius$$ = $i$$13_node$$3$$.$getChildNodes$();
  if($children$$1_innerRadius$$ != D.$JSCompiler_alias_NULL$$ && $i$$13_node$$3$$.$isDisclosed$()) {
    "on" == $sorting$$1$$ && ($children$$1_innerRadius$$ = $children$$1_innerRadius$$.slice(0), $children$$1_innerRadius$$.sort(function($radiusPerDepth$$1$$, $i$$13_node$$3$$) {
      return $i$$13_node$$3$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    (0,D.$DvtAgent$isRightToLeft$$)($i$$13_node$$3$$.$_view$.$_context$) && ($children$$1_innerRadius$$ = $children$$1_innerRadius$$.slice(0).reverse());
    var $total$$ = 0;
    for($i$$13_node$$3$$ = 0;$i$$13_node$$3$$ < $children$$1_innerRadius$$.length;$i$$13_node$$3$$++) {
      $total$$ += 0 < $children$$1_innerRadius$$[$i$$13_node$$3$$].$getSize$() ? $children$$1_innerRadius$$[$i$$13_node$$3$$].$getSize$() : 0
    }
    for($i$$13_node$$3$$ = 0;$i$$13_node$$3$$ < $children$$1_innerRadius$$.length;$i$$13_node$$3$$++) {
      var $child$$1$$ = $children$$1_innerRadius$$[$i$$13_node$$3$$];
      if(!(0 >= $child$$1$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$1$$.$getSize$() / $total$$ * $angleExtent$$1$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$1$$, $childStartAngle_startAngle$$2$$, $childAngleExtent$$, $sorting$$1$$, $outerRadius$$);
        $childStartAngle_startAngle$$2$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$4$$) {
  var $maxRadius$$ = 0, $children$$2$$ = $node$$4$$.$getChildNodes$();
  if($children$$2$$ && 0 < $children$$2$$.length) {
    for(var $i$$14$$ = 0;$i$$14$$ < $children$$2$$.length;$i$$14$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$2$$[$i$$14$$]), $maxRadius$$ = window.Math.max($maxRadius$$, $childRadius$$)
    }
    return $maxRadius$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$4$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$4$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$58$$, $id$$5$$) {
  this.Init($type$$58$$);
  this.$_id$ = $id$$5$$ ? $id$$5$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$3$$, $context$$16$$, $callback$$25$$, $callbackObj$$2$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$3$$, $context$$16$$, $callback$$25$$, $callbackObj$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$16_relPos$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$ = this.$GetLogicalObject$($event$$16_relPos$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$16_relPos$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$16_relPos$$.pageX, $event$$16_relPos$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_633_obj$$34$$, $event$$16_relPos$$.x, $event$$16_relPos$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$16_relPos$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$17_relPos$$1$$) {
  if(this.$_bRotating$) {
    $event$$17_relPos$$1$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$17_relPos$$1$$.pageX, $event$$17_relPos$$1$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_637$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_637$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_637$$, $event$$17_relPos$$1$$.x, $event$$17_relPos$$1$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$17_relPos$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$18$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$19$$) {
  var $eventConsumed$$1$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$2_newAngle$$ = $event$$19$$.keyCode, $node$$7$$ = this.$getFocus$(), $sunburst$$2$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)($node$$7$$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$19$$) && !$node$$7$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$19$$) && $node$$7$$.$isDisclosed$() || $event$$19$$.ctrlKey && 13 == $keyCode$$2_newAngle$$) ? ($node$$7$$.$expandCollapseNode$(), $event$$19$$.preventDefault()) : $sunburst$$2$$ && "on" == $sunburst$$2$$.$_rotation$ && (37 == $keyCode$$2_newAngle$$ || 39 == $keyCode$$2_newAngle$$) && !$event$$19$$.ctrlKey && 
  $event$$19$$.altKey && $event$$19$$.shiftKey ? ($keyCode$$2_newAngle$$ = 37 == $keyCode$$2_newAngle$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$2$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$2$$, $keyCode$$2_newAngle$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$2$$), $event$$19$$.preventDefault()) : $eventConsumed$$1$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$19$$);
  return $eventConsumed$$1$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$20$$) {
  var $obj$$35$$ = this.$GetLogicalObject$($event$$20$$.target);
  $obj$$35$$ && ($obj$$35$$.getId && "_rotationShape" == $obj$$35$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$20$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$21$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$21$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$22$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$22$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$23$$, $touch$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$.identifier, "rotateKey", "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$4$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$.pageX, $touch$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_641$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_641$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_641$$, $pos$$4$$.x, $pos$$4$$.y));
    $event$$23$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$24$$, $touch$$1$$) {
  var $pos$$5$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$1$$.pageX, $touch$$1$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_645$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_645$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_645$$, $pos$$5$$.x, $pos$$5$$.y));
  $event$$24$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
D.$DvtSunburstBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstBundle$$, D.$DvtUtilBundle$$, "DvtSunburstBundle");
D.$DvtSunburstBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtSunburstBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSunburstBundle$$$$$GetDefaultStringForKey$$($key$$25$$) {
  var $defaultStr$$1$$ = D.$DvtSunburstBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$25$$);
  return $defaultStr$$1$$ ? $defaultStr$$1$$ : D.$DvtSunburstBundle$$._defaults[$key$$25$$]
};
D.$DvtSunburstBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {rotation:"on"};
D.$DvtSunburstJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtSunburstJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("sunburst");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay_options$$9$$) {
  var $ret$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay_options$$9$$), $ret$$ = $ret$$ + this.$WriteAttr$("r", $animationOnDisplay_options$$9$$.rotation), $ret$$ = $ret$$ + this.$WriteAttr$("sa", ($animationOnDisplay_options$$9$$.startAngle + 360) % 360);
  $animationOnDisplay_options$$9$$ = $animationOnDisplay_options$$9$$.animationOnDisplay;
  return $ret$$ = "auto" == $animationOnDisplay_options$$9$$ ? $ret$$ + this.$WriteAttr$("adi", "fan") : $ret$$ + this.$WriteAttr$("adi", $animationOnDisplay_options$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$10$$, $nodeData$$) {
  var $ret$$1$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$10$$, $nodeData$$), $ret$$1$$ = $ret$$1$$ + this.$WriteAttr$("ld", $nodeData$$.labelDisplay ? $nodeData$$.labelDisplay : $options$$10$$.nodeDefaults.labelDisplay), $labelHalign_radius$$2$$ = $nodeData$$.labelHalign ? $nodeData$$.labelHalign : $options$$10$$.nodeDefaults.labelHalign;
  "inner" == $labelHalign_radius$$2$$ ? $ret$$1$$ += this.$WriteAttr$("ha", "s") : "outer" == $labelHalign_radius$$2$$ && ($ret$$1$$ += this.$WriteAttr$("ha", "e"));
  $labelHalign_radius$$2$$ = $nodeData$$.radius;
  $labelHalign_radius$$2$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($labelHalign_radius$$2$$) && ($ret$$1$$ += this.$WriteAttr$("r", $labelHalign_radius$$2$$));
  return $ret$$1$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$11$$) {
  var $ret$$2$$, $bundle$$ = new D.$DvtSunburstBundle$$;
  $ret$$2$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$, "SIZE"));
  $ret$$2$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$, "COLOR"));
  $ret$$2$$ += this.$WriteAttr$("cursorRotate", $options$$11$$._resources.rotateCursor);
  $ret$$2$$ += this.$WriteAttr$("alta", "true");
  return $ret$$2$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($options$$12_selectedColor$$) {
  var $ret$$3$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $options$$12_selectedColor$$), $animationColor_borderColor_hoverColor$$ = $options$$12_selectedColor$$.animationUpdateColor;
  $animationColor_borderColor_hoverColor$$ && ($ret$$3$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor_borderColor_hoverColor$$));
  ($animationColor_borderColor_hoverColor$$ = $options$$12_selectedColor$$.nodeDefaults.borderColor) && ($ret$$3$$ += this.$WriteAttr$("node", "border-color: " + $animationColor_borderColor_hoverColor$$));
  ($animationColor_borderColor_hoverColor$$ = $options$$12_selectedColor$$.nodeDefaults.hoverColor) && ($ret$$3$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor_borderColor_hoverColor$$));
  ($options$$12_selectedColor$$ = $options$$12_selectedColor$$.nodeDefaults.selectedColor) && ($ret$$3$$ += this.$WriteAttr$("node-selected", "border-color: " + $options$$12_selectedColor$$));
  return $ret$$3$$ + "/\x3e\n"
};
});