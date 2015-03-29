"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreemap$$ = function $$DvtBaseTreemap$$$($context$$338$$, $callback$$106$$, $callbackObj$$79$$) {
  this.Init($context$$338$$, $callback$$106$$, $callbackObj$$79$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemap$$, D.$DvtBaseTreeView$$, "DvtBaseTreemap");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$339$$, $callback$$107$$, $callbackObj$$80$$) {
  D.$DvtBaseTreemap$$.$superclass$.Init.call(this, $context$$339$$, $callback$$107$$, $callbackObj$$80$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$14$$) {
  return(new D.$DvtTreemapParser$$(this)).parse($xmlString$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($isolateRowKey$$inline_5874_props$$27$$) {
  D.$DvtBaseTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $isolateRowKey$$inline_5874_props$$27$$);
  this.$_layout$ = $isolateRowKey$$inline_5874_props$$27$$.$layout$;
  this.$_groupGaps$ = $isolateRowKey$$inline_5874_props$$27$$.$groupGaps$;
  this.$_layout$ && (this.$_layout$.$Sorting$ = this.$Sorting$);
  this.$_isolatedNodes$ = [];
  if(($isolateRowKey$$inline_5874_props$$27$$ = $isolateRowKey$$inline_5874_props$$27$$.$isolateRowKey$) && this.$_root$) {
    var $allNodes$$inline_5875$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_5875$$.push(this.$_root$);
    for(var $i$$inline_5876$$ = 0;$i$$inline_5876$$ < $allNodes$$inline_5875$$.length;$i$$inline_5876$$++) {
      if($allNodes$$inline_5875$$[$i$$inline_5876$$].getId() == $isolateRowKey$$inline_5874_props$$27$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_5875$$[$i$$inline_5876$$]);
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$93$$) {
  var $bufferSpace$$1_gap$$18_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$93$$.$w$, $availSpace$$93$$.$h$) / 400), 2);
  $availSpace$$93$$.x += $bufferSpace$$1_gap$$18_numIsolated$$;
  $availSpace$$93$$.y += $bufferSpace$$1_gap$$18_numIsolated$$;
  $availSpace$$93$$.$w$ -= 2 * $bufferSpace$$1_gap$$18_numIsolated$$;
  $availSpace$$93$$.$h$ -= 2 * $bufferSpace$$1_gap$$18_numIsolated$$;
  $bufferSpace$$1_gap$$18_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$93$$.x += $bufferSpace$$1_gap$$18_numIsolated$$;
  $availSpace$$93$$.$w$ -= 2 * $bufferSpace$$1_gap$$18_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$93$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$93$$);
  $availSpace$$93$$.x -= $bufferSpace$$1_gap$$18_numIsolated$$;
  $availSpace$$93$$.$w$ += 2 * $bufferSpace$$1_gap$$18_numIsolated$$;
  $bufferSpace$$1_gap$$18_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace$$1_gap$$18_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace$$1_gap$$18_numIsolated$$ - 1], $availSpace$$93$$.x, $availSpace$$93$$.y, $availSpace$$93$$.$w$, $availSpace$$93$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$93$$.x, $availSpace$$93$$.y, $availSpace$$93$$.$w$, $availSpace$$93$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$589$$ = 0;$i$$589$$ < $bufferSpace$$1_gap$$18_numIsolated$$;$i$$589$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$589$$], $availSpace$$93$$.x, $availSpace$$93$$.y, $availSpace$$93$$.$w$, $availSpace$$93$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$150_i$$590$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$150_i$$590$$);
  this.$_breadcrumbs$ && $container$$150_i$$590$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$150_i$$590$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$150_i$$590$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$150_i$$590$$) : this.$_root$.$hasChildren$() ? this.$_root$.$renderChildren$($container$$150_i$$590$$) : this.$_root$.$render$($container$$150_i$$590$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$150_i$$590$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$150_i$$590$$.$addChild$(this.$_selectedLayer$);
    $container$$150_i$$590$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$_context$, []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$150_i$$590$$.$addChild$(this.$_hoverEffect$);
    for($container$$150_i$$590$$ = 0;$container$$150_i$$590$$ < this.$_isolatedNodes$.length;$container$$150_i$$590$$++) {
      var $displayable$$67$$ = this.$_isolatedNodes$[$container$$150_i$$590$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$67$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$150_i$$590$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtBaseTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$3$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$591$$ = 0;$i$$591$$ < $selectedNodes$$3$$.length;$i$$591$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$3$$[$i$$591$$] == $lastIsolated$$1$$ || $selectedNodes$$3$$[$i$$591$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$3$$[$i$$591$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$3$$[$i$$591$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$18$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$68$$, $context$$340$$, $callback$$108$$, $callbackObj$$81$$) {
  return new D.$DvtTreemapEventManager$$($view$$68$$, $context$$340$$, $callback$$108$$, $callbackObj$$81$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$14$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($isolatedRootNode$$)) : $root$$14$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($root$$14$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$35$$) {
  for(var $newIndex$$6$$ = 0, $numChildren$$8$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$592$$ = 0;$i$$592$$ < $numChildren$$8$$;$i$$592$$++) {
    var $child$$31$$ = this.$_selectedLayer$.$getChildAt$($i$$592$$);
    $rect$$35$$.zIndex > $child$$31$$.zIndex && ($newIndex$$6$$ = $i$$592$$ + 1)
  }
  $newIndex$$6$$ < $numChildren$$8$$ ? this.$_selectedLayer$.$addChildAt$($rect$$35$$, $newIndex$$6$$) : this.$_selectedLayer$.$addChild$($rect$$35$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$287$$) {
  if($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$AnimationOnDataChange$) {
    for(var $playables$$inline_5888_selectedNodes$$4$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_5889_i$$593$$ = 0;$descendants$$inline_5889_i$$593$$ < $playables$$inline_5888_selectedNodes$$4$$.length;$descendants$$inline_5889_i$$593$$++) {
      $playables$$inline_5888_selectedNodes$$4$$[$descendants$$inline_5889_i$$593$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_5888_selectedNodes$$4$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$287$$)], $descendants$$inline_5889_i$$593$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$287$$), $i$$inline_5890$$ = 0;$i$$inline_5890$$ < $descendants$$inline_5889_i$$593$$.length;$i$$inline_5890$$++) {
      $playables$$inline_5888_selectedNodes$$4$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_5889_i$$593$$[$i$$inline_5890$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_context$, $playables$$inline_5888_selectedNodes$$4$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$2$$) {
  var $keyboardHandler$$2$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$2$$ ? $keyboardHandler$$2$$.$getDefaultNavigable$($navigableItems$$2$$) : $navigableItems$$2$$ && 0 < $navigableItems$$2$$.length ? $navigableItems$$2$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreemap$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$341$$, $callback$$109$$, $callbackObj$$82$$) {
  var $component$$27$$ = new D.$DvtTreemap$$;
  $component$$27$$.Init($context$$341$$, $callback$$109$$, $callbackObj$$82$$);
  return $component$$27$$
};
D.$DvtTreemap$$.getDefaults = function $$DvtTreemap$$$getDefaults$($skin$$6$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtTreemapDefaults$$, $skin$$6$$)
};
D.$DvtTreemap$$.prototype.$render$ = function $$DvtTreemap$$$$$render$$($options$$239_xmlString$$15$$, $width$$123$$, $height$$103$$, $bSkipXml$$) {
  $options$$239_xmlString$$15$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$239_xmlString$$15$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$239_xmlString$$15$$ = $bSkipXml$$ ? D.$JSCompiler_alias_NULL$$ : (new D.$DvtTreemapJsonUtils$$(this.$_context$)).$toXml$(this.$Options$);
  D.$DvtTreemap$$.$superclass$.$render$.call(this, $options$$239_xmlString$$15$$, $width$$123$$, $height$$103$$)
};
D.$DvtTreemap$$.prototype.render = D.$DvtTreemap$$.prototype.$render$;
D.$DvtTreemap$$.prototype.$getBundle$ = function $$DvtTreemap$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtTreemapBundle$$);
  return this.$_bundle$
};
D.$DvtTreemapParser$$ = function $$DvtTreemapParser$$$($treemap$$) {
  this.Init($treemap$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapParser$$, D.$DvtBaseTreeParser$$, "DvtTreemapParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($treeView$$9$$, $props$$7$$, $templates$$5$$) {
  return new D.$DvtTreemapNode$$($treeView$$9$$, $props$$7$$, $templates$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$19$$) {
  var $ret$$29$$ = D.$DvtTreemapParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$19$$), $layoutStr$$ = $xmlNode$$19$$.$getAttr$("layout");
  $ret$$29$$.$layout$ = "h" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "v" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  $ret$$29$$.$groupGaps$ = $xmlNode$$19$$.$getAttr$("gg");
  $ret$$29$$.$groupGaps$ || ($ret$$29$$.$groupGaps$ = "o");
  $ret$$29$$.$isolateRowKey$ = $xmlNode$$19$$.$getAttr$("irk");
  this.$_isolateRowKey$ = $ret$$29$$.$isolateRowKey$;
  return $ret$$29$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($headerLabelStyle_xmlNode$$20$$) {
  var $ret$$30$$ = D.$DvtTreemapParser$$.$superclass$.$ParseNodeAttributes$.call(this, $headerLabelStyle_xmlNode$$20$$);
  $ret$$30$$.$groupLabelDisplay$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("gld");
  $ret$$30$$.$labelHalign$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("ha");
  $ret$$30$$.$labelValign$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("va");
  $ret$$30$$.$isolate$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("hi");
  $ret$$30$$.$headerUseNodeColor$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("unc");
  $ret$$30$$.$headerHalign$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("hha");
  if($headerLabelStyle_xmlNode$$20$$ = $headerLabelStyle_xmlNode$$20$$.$getAttr$("hls")) {
    $ret$$30$$.$headerLabelStyle$ = new D.$DvtCSSStyle$$($headerLabelStyle_xmlNode$$20$$)
  }
  this.$_isolateRowKey$ != D.$JSCompiler_alias_NULL$$ && this.$_isolateRowKey$ == $ret$$30$$.id && ($ret$$30$$.$isIsolated$ = D.$JSCompiler_alias_TRUE$$);
  return $ret$$30$$
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalNodeStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalNodeStyles$$($nodeStyle$$3$$, $nodeHoverStyle$$3$$, $nodeSelectedStyle$$3$$, $styles$$8$$) {
  $styles$$8$$.NODE_HOVER_COLOR = $nodeHoverStyle$$3$$.$getStyle$("border-color");
  $styles$$8$$.NODE_SELECTED_OUTER_COLOR = $nodeSelectedStyle$$3$$.$getStyle$("-tr-outer-color");
  $styles$$8$$.NODE_SELECTED_INNER_COLOR = $nodeSelectedStyle$$3$$.$getStyle$("-tr-inner-color")
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalStyles$$($xmlNode$$21$$, $styles$$9$$) {
  var $nodeHeaderDrillStyle_nodeHeaderStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeader"));
  $styles$$9$$.HEADER_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$9$$.HEADER_BACKGROUND_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  var $nodeHeaderHoverStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeader-hover")));
  $styles$$9$$.HEADER_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderHoverStyle$$;
  $styles$$9$$.HEADER_BACKGROUND_HOVER_STYLE = $nodeHeaderHoverStyle$$;
  var $nodeHeaderSelectedStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeader-selected")));
  $styles$$9$$.HEADER_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderSelectedStyle$$;
  $styles$$9$$.HEADER_BACKGROUND_SELECTED_STYLE = $nodeHeaderSelectedStyle$$;
  $nodeHeaderDrillStyle_nodeHeaderStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeaderDrill")));
  $styles$$9$$.HEADER_DRILL_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$9$$.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeaderDrill-hover")));
  $styles$$9$$.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$21$$.$getAttr$("nodeHeaderDrill-selected")));
  $styles$$9$$.HEADER_HOVER_OUTER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-outer-color");
  $styles$$9$$.HEADER_HOVER_INNER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-inner-color");
  $styles$$9$$.HEADER_SELECTED_OUTER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$9$$.HEADER_SELECTED_INNER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$1$$, $props$$8$$, $templates$$6$$) {
  this.Init($treemap$$1$$, $props$$8$$, $templates$$6$$);
  this.$_labelDisplay$ = $props$$8$$.$labelDisplay$ ? $props$$8$$.$labelDisplay$ : "n";
  this.$_groupLabelDisplay$ = $props$$8$$.$groupLabelDisplay$ ? $props$$8$$.$groupLabelDisplay$ : "h";
  this.$_labelHalign$ = $props$$8$$.$labelHalign$ ? $props$$8$$.$labelHalign$ : "c";
  this.$_labelValign$ = $props$$8$$.$labelValign$ ? $props$$8$$.$labelValign$ : "c";
  this.$_headerHalign$ = $props$$8$$.$headerHalign$ ? $props$$8$$.$headerHalign$ : "s";
  this.$_headerLabelStyle$ = $props$$8$$.$headerLabelStyle$;
  this.$_headerUseNodeColor$ = "on" == $props$$8$$.$headerUseNodeColor$;
  this.$_isolate$ = $props$$8$$.$isolate$ ? $props$$8$$.$isolate$ : "on";
  this.$_isIsolated$ = $props$$8$$.$isIsolated$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.$addChild$(this.$_shape$);
    var $afRoot$$1_template$$2$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$_context$), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$1_template$$2$$ = this.$_template$;
    if($afRoot$$1_template$$2$$) {
      var $afContext$$1$$ = this.$_view$.$_afContext$;
      $afContext$$1$$.$_elContext$ = this.$_elAttributes$;
      var $aw$$1$$ = this.$_width$ - 8 - 2, $ah$$1$$ = this.$_height$ - 4 - 2;
      0 < $aw$$1$$ && 0 < $ah$$1$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$1$$, $aw$$1$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$1$$, $ah$$1$$), $afContext$$1$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$1_template$$2$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$1$$, $afRoot$$1_template$$2$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.$_context$) ? 
      ($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$ = $afRoot$$1_template$$2$$.$getDimensions$(), $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.$w$) : $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$1_template$$2$$, $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$, this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "h" != this.$_textStyle$) && ($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.x, $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.y, $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.$w$, $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$.$h$), 
      this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$ = this.$_text$, "n" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$) : this.$_shape$.$addChild$($container$$40_dim$$8_dims$$7_text$$inline_1148_transX$$))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($parentNode$$1_selected$$11_x$$103$$) {
  D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $parentNode$$1_selected$$11_x$$103$$);
  if(this.$_shape$) {
    if(this.$isSelected$()) {
      $parentNode$$1_selected$$11_x$$103$$ = this.$_x$;
      var $y$$77$$ = this.$_y$ + 1, $w$$12$$ = this.$_width$ - 1, $h$$7$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$77$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$1_selected$$11_x$$103$$, $y$$77$$, $w$$12$$, $h$$7$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$1_selected$$11_x$$103$$ + 1, $y$$77$$ + 1, $w$$12$$ - 2, $h$$7$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", 
      "#003D5B")), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "HEADER_SELECTED_INNER_COLOR_STYLE"), 1)) : (this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#FFFFFF", "NODE_SELECTED_INNER_COLOR"), 1), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", 
      "HEADER_BACKGROUND_STYLE"), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1") : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($parentNode$$1_selected$$11_x$$103$$ = this.$_parent$) && $parentNode$$1_selected$$11_x$$103$$.$_childNodeGroup$ && 
      $parentNode$$1_selected$$11_x$$103$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $isolatedNode_points$$1$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$1$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$1$$ != this && !this.$isDescendantOf$($isolatedNode_points$$1$$))) {
      var $isolatedNode_points$$1$$ = [], $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, $w$$13_x2$$2$$, $h$$8_y2$$2$$;
      "h" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE"), this.$_selectionOuter$ || ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$ = this.$_x$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ = this.$_y$ + 1, $w$$13_x2$$2$$ = this.$_width$ - 1, $h$$8_y2$$2$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ -= 
      1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$, $w$$13_x2$$2$$, $h$$8_y2$$2$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$isSelected$() ? 
      this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$) : this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1"), $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$ = this.$_x$ + 1.5 + 1, $w$$13_x2$$2$$ = this.$_x$ + this.$_width$ - 1.5 - 
      1, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ = this.$_y$ + this.$_titleBarHeight$, $h$$8_y2$$2$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$1$$.push($w$$13_x2$$2$$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$, $w$$13_x2$$2$$, $h$$8_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, $h$$8_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$), $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ = 
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#C4DCFF", "HEADER_HOVER_INNER_COLOR_STYLE"), 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE", "#000000") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_HOVER_DEFAULT_STYLE", "#000000"))) : ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$ = 
      this.$_x$ + 1, $w$$13_x2$$2$$ = this.$_x$ + this.$_width$ - 1, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ = this.$_y$ + 1, $h$$8_y2$$2$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$1$$.push(this.$_x$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$, $w$$13_x2$$2$$, $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$, $w$$13_x2$$2$$, $h$$8_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, $h$$8_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$, 
      $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$), $stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR"), 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$1$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$.$_hoverEffect$.$setStroke$($stroke$$9_stroke$$inline_1152_y$$78_y1$$4$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_1150_x$$104_x1$$4$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && ("h" == this.$_textStyle$ && (this.$isSelected$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, 
  this.$_text$, "HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), 
  this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B")))), this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"on" == this.$_isolate$ && "h" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$2$$) {
  return!$behavior$$2$$ || !$behavior$$2$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$2$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$89_lastChild_next$$9$$) {
  var $keyCode$$11_navigables$$4_parent$$16$$;
  if($event$$89_lastChild_next$$9$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$89_lastChild_next$$9$$)
  }
  $keyCode$$11_navigables$$4_parent$$16$$ = $event$$89_lastChild_next$$9$$.keyCode;
  if(32 == $keyCode$$11_navigables$$4_parent$$16$$ && $event$$89_lastChild_next$$9$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$11_navigables$$4_parent$$16$$ && $event$$89_lastChild_next$$9$$.altKey || 221 == $keyCode$$11_navigables$$4_parent$$16$$) {
    ($keyCode$$11_navigables$$4_parent$$16$$ = this.$_parent$) && $keyCode$$11_navigables$$4_parent$$16$$.getId() != this.$_view$.$_root$.getId() ? ($event$$89_lastChild_next$$9$$ = $keyCode$$11_navigables$$4_parent$$16$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$11_navigables$$4_parent$$16$$)) : $event$$89_lastChild_next$$9$$ = this
  }else {
    if(40 == $keyCode$$11_navigables$$4_parent$$16$$ && $event$$89_lastChild_next$$9$$.altKey || 219 == $keyCode$$11_navigables$$4_parent$$16$$) {
      $event$$89_lastChild_next$$9$$ = ($event$$89_lastChild_next$$9$$ = this.$_lastVisitedChild$) ? $event$$89_lastChild_next$$9$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$6$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$3$$ = 0;
      if($root$$6$$) {
        if(this == $root$$6$$) {
          $depth$$3$$ = 0
        }else {
          $keyCode$$11_navigables$$4_parent$$16$$ = this.$_parent$;
          for($depth$$3$$ = 1;$root$$6$$ != $keyCode$$11_navigables$$4_parent$$16$$;) {
            $depth$$3$$++, $keyCode$$11_navigables$$4_parent$$16$$ = $keyCode$$11_navigables$$4_parent$$16$$.$_parent$
          }
        }
      }else {
        for($root$$6$$ = this;$root$$6$$.$_parent$;) {
          $root$$6$$ = $root$$6$$.$_parent$
        }
        $depth$$3$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$11_navigables$$4_parent$$16$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$6$$, $depth$$3$$);
      $event$$89_lastChild_next$$9$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$89_lastChild_next$$9$$, $keyCode$$11_navigables$$4_parent$$16$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$89_lastChild_next$$9$$);
  return $event$$89_lastChild_next$$9$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$23_x$$105_xx$$, $y$$79_yy$$, $width$$28_ww$$4$$, $height$$25_hh$$4$$) {
  if(!(0 >= $width$$28_ww$$4$$ || 0 >= $height$$25_hh$$4$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$23_x$$105_xx$$;
    this.$_y$ = $y$$79_yy$$;
    this.$_width$ = $width$$28_ww$$4$$ ? $width$$28_ww$$4$$ : 0;
    this.$_height$ = $height$$25_hh$$4$$ ? $height$$25_hh$$4$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "o");
    if("h" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$23_x$$105_xx$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
      $headerLabelHeight_text$$23_x$$105_xx$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$23_x$$105_xx$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B");
      $headerLabelHeight_text$$23_x$$105_xx$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$23_x$$105_xx$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$23_x$$105_xx$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$23_x$$105_xx$$ = this.$_x$;
      $y$$79_yy$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$28_ww$$4$$ = this.$_width$;
      $height$$25_hh$$4$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$28_ww$$4$$ && 0 <= $height$$25_hh$$4$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$23_x$$105_xx$$, $y$$79_yy$$, $width$$28_ww$$4$$, $height$$25_hh$$4$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$107$$, $y$$81$$) {
  return $x$$107$$ >= this.$_x$ && $x$$107$$ <= this.$_x$ + this.$_width$ && $y$$81$$ >= this.$_y$ && $y$$81$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$14$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$2$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$11$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$14$$, $g$$2$$, $b$$11$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$5$$) {
  this.$setLayoutParams$($params$$5$$[0], $params$$5$$[1], $params$$5$$[2], $params$$5$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$5$$[4]), window.Math.round($params$$5$$[5]), window.Math.round($params$$5$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("h" != this.$_textStyle$ || this.$_headerUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), this.$_template$ ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = 
  D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$9$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$_context$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$9$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$9$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$8$$, $oldNode$$10$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$10$$.$_hasLayout$ && 0 < $oldNode$$10$$.$_width$ && 0 < $oldNode$$10$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$8$$, $oldNode$$10$$) : this.$animateInsert$($handler$$8$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$57$$ = this.$_view$.$_context$, $shape$$3$$;
  if("h" == this.$_textStyle$) {
    $shape$$3$$ = new D.$DvtRect$$($context$$57$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$57$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$3$$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$3$$.$addChild$(this.$_innerShape$), 
    this.$_isIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, $shape$$3$$))
  }else {
    var $fill$$5$$ = this.$GetFill$();
    $shape$$3$$ = new D.$DvtRect$$($context$$57$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), 0.3);
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $fillColor_minDim$$ = this.$getColor$(), $topLeftColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$($topLeftColor$$, $fillColor_minDim$$, 0.7), $bottomRightColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), $bottomRightColor$$ = D.$DvtColorUtils$$.$interpolateColor$($bottomRightColor$$, $fillColor_minDim$$, 
      0.7), $fillColor_minDim$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $fillColor_minDim$$ ? ($shape$$3$$.$setSolidFill$($bottomRightColor$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$57$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$3$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$57$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$5$$), 
      this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$3$$.$addChild$(this.$_fillShape$)) : 2 <= $fillColor_minDim$$ ? ($shape$$3$$.$setSolidFill$($bottomRightColor$$), this.$_fillShape$ = new D.$DvtRect$$($context$$57$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$5$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$3$$.$addChild$(this.$_fillShape$)) : $shape$$3$$.$setFill$($fill$$5$$)
    }else {
      $shape$$3$$.$setFill$($fill$$5$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$3$$, this);
  this.$isSelectable$() ? $shape$$3$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$3$$.setCursor("default");
  $shape$$3$$.zIndex = this.$_zIndex$;
  return $shape$$3$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$41$$) {
  if("h" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$ = D.$JSCompiler_alias_NULL$$, $transX$$1_x1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$3$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$6_tooltip$$6_y1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, $y2$$3$$ = 
  $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$3$$ - $transX$$1_x1$$5$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$) {
      var $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_1161_upState$$inline_1169$$ = new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, 
      $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.restoreUp, 0, 0, 12, 12), $overState$$inline_1162_overState$$inline_1170$$ = new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.restoreOver, 0, 0, 12, 12), $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.restoreDown, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_1161_upState$$inline_1169$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_1162_overState$$inline_1170$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$);
      $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$ = new D.$DvtButton$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $upState$$inline_1161_upState$$inline_1169$$, $overState$$inline_1162_overState$$inline_1170$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$);
      $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_1161_upState$$inline_1169$$ = new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, 
      $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.maximizeUp, 0, 0, 12, 12), $overState$$inline_1162_overState$$inline_1170$$ = new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.maximizeOver, 0, 0, 12, 12), $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$.maximizeDown, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_1161_upState$$inline_1169$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_1162_overState$$inline_1170$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$), 
      $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$ = new D.$DvtButton$$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $upState$$inline_1161_upState$$inline_1169$$, $overState$$inline_1162_overState$$inline_1170$$, $downState$$inline_1163_downState$$inline_1171_resources$$inline_1160_resources$$inline_1168$$), $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
      $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$1_x1$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$41$$.$_context$) ? $transX$$1_x1$$5$$ + 1 : $x2$$3$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $transX$$1_x1$$5$$, ($y2$$3$$ + $rect$$6_tooltip$$6_y1$$5$$ - 12) / 2);
    $container$$41$$.$addChild$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$6_tooltip$$6_y1$$5$$ = new D.$DvtRect$$($container$$41$$.$_context$, -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$6_tooltip$$6_y1$$5$$), $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$.$addChild$($rect$$6_tooltip$$6_y1$$5$$));
    "true" == $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.alta ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$6_tooltip$$6_y1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$ ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.restore : 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.isolate, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$6_tooltip$$6_y1$$5$$)))
  }
  return $JSCompiler_temp$$432_button$$5_button$$inline_1164_button$$inline_1172_context$$inline_1159_context$$inline_1167$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$42$$) {
  var $chromeAdjustment_isRTL$$3_peer$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$42$$.$_context$);
  if(!this.$_textStr$ || !$container$$42$$ || !this.$_textStyle$ || "o" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$4$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$4$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$ = "n" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$3_peer$$2$$ && ("s" == $hAlign$$ ? $hAlign$$ = "e" : "e" == $hAlign$$ && ($hAlign$$ = "s"));
  var $availWidth$$8$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$8$$ = "c" == $hAlign$$ ? $availWidth$$8$$ - 2 * $isolateWidth$$ : $availWidth$$8$$ - $isolateWidth$$);
  if(0 >= $availWidth$$8$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$24$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
  $text$$24$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "s" == $hAlign$$ ? ($chromeAdjustment_isRTL$$3_peer$$2$$ ? $text$$24$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$24$$.$setX$(this.$_x$ + 4), $text$$24$$.$alignLeft$()) : "c" == $hAlign$$ ? ($text$$24$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$24$$.$alignCenter$()) : "e" == $hAlign$$ && ($chromeAdjustment_isRTL$$3_peer$$2$$ ? $text$$24$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$24$$.$setX$(this.$_x$ + this.$_width$ - 4 - $isolateWidth$$), $text$$24$$.$alignRight$());
  "n" == this.$_textStyle$ ? ($availHeight$$4$$ = this.$_height$ - 4, "t" == this.$_labelValign$ ? ($text$$24$$.$setY$(this.$_y$ + 2), $text$$24$$.$alignTop$()) : "c" == this.$_labelValign$ ? ($text$$24$$.$setY$(this.$_y$ + this.$_height$ / 2), $text$$24$$.$alignMiddle$()) : "b" == this.$_labelValign$ && ($text$$24$$.$setY$(this.$_y$ + this.$_height$ - 2), $text$$24$$.$alignBottom$()), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$24$$)) : "h" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$3_peer$$2$$ = 
  (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$24$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$3_peer$$2$$), $text$$24$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$24$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"));
  if($text$$24$$ != D.$JSCompiler_alias_NULL$$) {
    return"h" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$24$$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286"), $text$$24$$.setCursor("pointer"), $chromeAdjustment_isRTL$$3_peer$$2$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$3_peer$$2$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$24$$, 
    $chromeAdjustment_isRTL$$3_peer$$2$$)) : $text$$24$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$24$$, $availWidth$$8$$, $availHeight$$4$$, $container$$42$$) ? $text$$24$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$, $shape$$4$$, $innerShape$$, $backgroundColor$$2_defaultStyle$$, $styleDef$$1$$) {
  var $borderColor$$7_style$$14$$ = new D.$DvtCSSStyle$$($backgroundColor$$2_defaultStyle$$);
  $borderColor$$7_style$$14$$.$merge$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$_view$.$_styles$[$styleDef$$1$$]);
  $backgroundColor$$2_defaultStyle$$ = $borderColor$$7_style$$14$$.$getStyle$("background-color");
  $borderColor$$7_style$$14$$ = $borderColor$$7_style$$14$$.$getStyle$("border-color");
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$_headerUseNodeColor$ && "HEADER_BACKGROUND_STYLE" == $styleDef$$1$$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$getColor$(), $innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$), $borderColor$$7_style$$14$$ = D.$DvtColorUtils$$.$interpolateColor$($borderColor$$7_style$$14$$, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$, 
  0.5), $shape$$4$$.$setSolidFill$($borderColor$$7_style$$14$$)) : ($shape$$4$$.$setSolidFill$($borderColor$$7_style$$14$$), $innerShape$$.$setSolidFill$($backgroundColor$$2_defaultStyle$$))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$25$$, $styleDef$$2$$, $defaultFillColor$$1_textStyle$$4$$) {
  var $bHeaderNodeColor$$ = $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerUseNodeColor$ && "HEADER_TEXT_DEFAULT_STYLE" == $styleDef$$2$$;
  $bHeaderNodeColor$$ ? $text$$25$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$)) : $text$$25$$.$setSolidFill$($defaultFillColor$$1_textStyle$$4$$);
  $defaultFillColor$$1_textStyle$$4$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$hasChildren$() && $defaultFillColor$$1_textStyle$$4$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $defaultFillColor$$1_textStyle$$4$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$_styles$[$styleDef$$2$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $defaultFillColor$$1_textStyle$$4$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$25$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor$$1_textStyle$$4$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $bHeaderNodeColor$$ && $text$$25$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  this.$_isolateButton$ || (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_isIsolated$ !== D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_1174$$ = this.$_view$, $currentNavigable$$inline_1176_displayable$$inline_1177$$ = $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_1176_displayable$$inline_1177$$ && $currentNavigable$$inline_1176_displayable$$inline_1177$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_1176_displayable$$inline_1177$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_1174$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_1176_displayable$$inline_1177$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_1174$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_1179$$ = this.$_view$, $restoreNode$$inline_1180$$ = $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$_isolatedNodes$.pop(), $currentNavigable$$inline_1181_id$$inline_9365$$ = $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_1181_id$$inline_9365$$ && $currentNavigable$$inline_1181_id$$inline_9365$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_1181_id$$inline_9365$$ = $restoreNode$$inline_1180$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$_navigableIdToFocus$ = $currentNavigable$$inline_1181_id$$inline_9365$$;
  $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_1179$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_1179$$, $restoreNode$$inline_1180$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$44$$, $x$$108$$, $y$$82$$) {
  return $target$$44$$ && $target$$44$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$44$$, $x$$108$$, $y$$82$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$45$$) {
  return $target$$45$$ && $target$$45$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$45$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$46$$) {
  return $target$$46$$ && $target$$46$$ instanceof D.$DvtButton$$ ? this.$_isIsolated$ ? this.$_view$.$_resources$.restore : this.$_view$.$_resources$.isolate : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$4$$ = [];
  this.$isSelectable$() && $states$$4$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_isIsolated$ && $states$$4$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "STATE_ISOLATED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$4$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$, $availBounds$$1_node$$65$$, $x$$110$$, $y$$84$$, $width$$30$$, $height$$27$$, $isRoot$$2_xx$$1$$) {
  $availBounds$$1_node$$65$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$1$$ || !$availBounds$$1_node$$65$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$.$getGapSize$($availBounds$$1_node$$65$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds$$1_node$$65$$));
    $isRoot$$2_xx$$1$$ = window.Math.round($x$$110$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$);
    var $yy$$1$$ = window.Math.round($y$$84$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$);
    if($availBounds$$1_node$$65$$ = $availBounds$$1_node$$65$$.$setLayoutParams$($isRoot$$2_xx$$1$$, $yy$$1$$, window.Math.round($x$$110$$ + $width$$30$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$) - $isRoot$$2_xx$$1$$, window.Math.round($y$$84$$ + $height$$27$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$5$$) - $yy$$1$$)) {
      return $availBounds$$1_node$$65$$
    }
  }
  return new D.$DvtRectangle$$($x$$110$$, $y$$84$$, $width$$30$$, $height$$27$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$12$$, $depth$$4$$) {
  var $groupGaps$$1$$ = $view$$12$$.$_groupGaps$;
  return"o" == $groupGaps$$1$$ ? 1 == $depth$$4$$ && 2 <= $view$$12$$.$_maxDepth$ ? 3 : 0 : "a" == $groupGaps$$1$$ ? $depth$$4$$ < $view$$12$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$10$$, $root$$5$$, $x$$100$$, $y$$74$$, $width$$25$$, $height$$22$$, $bShowRoot$$) {
  this.$_layout$($root$$5$$, $x$$100$$, $y$$74$$, $width$$25$$, $height$$22$$, $bShowRoot$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$13_node$$64$$, $availBounds_x$$101$$, $children$$inline_1120_w$$8_y$$75$$, $i$$inline_1123_width$$26$$, $area$$inline_1121_factor$$inline_1124_height$$23$$, $child$$inline_1125_isRoot$$1_total$$inline_1122$$) {
  $availBounds_x$$101$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$13_node$$64$$, $availBounds_x$$101$$, $children$$inline_1120_w$$8_y$$75$$, $i$$inline_1123_width$$26$$, $area$$inline_1121_factor$$inline_1124_height$$23$$, $child$$inline_1125_isRoot$$1_total$$inline_1122$$);
  $children$$13_node$$64$$ = $children$$13_node$$64$$.$getChildNodes$();
  if($children$$13_node$$64$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$13_node$$64$$.length) {
    $children$$inline_1120_w$$8_y$$75$$ = $children$$13_node$$64$$;
    $area$$inline_1121_factor$$inline_1124_height$$23$$ = $availBounds_x$$101$$.$w$ * $availBounds_x$$101$$.$h$;
    for($i$$inline_1123_width$$26$$ = $i$$inline_1123_width$$26$$ = $child$$inline_1125_isRoot$$1_total$$inline_1122$$ = 0;$i$$inline_1123_width$$26$$ < $children$$inline_1120_w$$8_y$$75$$.length;$i$$inline_1123_width$$26$$++) {
      $child$$inline_1125_isRoot$$1_total$$inline_1122$$ += 0 < $children$$inline_1120_w$$8_y$$75$$[$i$$inline_1123_width$$26$$].$getSize$() ? $children$$inline_1120_w$$8_y$$75$$[$i$$inline_1123_width$$26$$].$getSize$() : 0
    }
    $area$$inline_1121_factor$$inline_1124_height$$23$$ = 0 == $area$$inline_1121_factor$$inline_1124_height$$23$$ ? 0 : $area$$inline_1121_factor$$inline_1124_height$$23$$ / $child$$inline_1125_isRoot$$1_total$$inline_1122$$;
    for($i$$inline_1123_width$$26$$ = 0;$i$$inline_1123_width$$26$$ < $children$$inline_1120_w$$8_y$$75$$.length;$i$$inline_1123_width$$26$$++) {
      $child$$inline_1125_isRoot$$1_total$$inline_1122$$ = $children$$inline_1120_w$$8_y$$75$$[$i$$inline_1123_width$$26$$], $child$$inline_1125_isRoot$$1_total$$inline_1122$$.$__pxSize$ = $child$$inline_1125_isRoot$$1_total$$inline_1122$$.$getSize$() * $area$$inline_1121_factor$$inline_1124_height$$23$$
    }
    $children$$13_node$$64$$ = $children$$13_node$$64$$.slice(0).sort(function($children$$13_node$$64$$, $availBounds_x$$101$$) {
      return $children$$13_node$$64$$.$getSize$() - $availBounds_x$$101$$.$getSize$()
    });
    $children$$inline_1120_w$$8_y$$75$$ = window.Math.min($availBounds_x$$101$$.$w$, $availBounds_x$$101$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$13_node$$64$$, $children$$inline_1120_w$$8_y$$75$$, new D.$DvtRectangle$$($availBounds_x$$101$$.x, $availBounds_x$$101$$.y, $availBounds_x$$101$$.$w$, $availBounds_x$$101$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$15$$, $w$$9$$, $r$$12$$) {
  var $row$$6$$ = [], $worst$$ = window.Infinity;
  if($children$$15$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$15$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$6$$, $w$$9$$, $r$$12$$)
  }else {
    for(;0 < $children$$15$$.length;) {
      var $c$$13$$ = $children$$15$$.pop();
      if(0 > $c$$13$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$6$$, $w$$9$$, $r$$12$$);
        break
      }
      $row$$6$$.push($c$$13$$);
      var $min$$inline_1130_newWorst$$, $areas$$inline_1127_s2$$inline_1133$$ = $row$$6$$, $w$$inline_1128_w2$$inline_1134$$ = $w$$9$$, $total$$inline_1129$$ = 0;
      $min$$inline_1130_newWorst$$ = window.Infinity;
      for(var $max$$inline_1131$$ = -window.Infinity, $i$$inline_1132$$ = 0;$i$$inline_1132$$ < $areas$$inline_1127_s2$$inline_1133$$.length;$i$$inline_1132$$++) {
        $total$$inline_1129$$ += $areas$$inline_1127_s2$$inline_1133$$[$i$$inline_1132$$].$__pxSize$, $min$$inline_1130_newWorst$$ = window.Math.min($min$$inline_1130_newWorst$$, $areas$$inline_1127_s2$$inline_1133$$[$i$$inline_1132$$].$__pxSize$), $max$$inline_1131$$ = window.Math.max($max$$inline_1131$$, $areas$$inline_1127_s2$$inline_1133$$[$i$$inline_1132$$].$__pxSize$)
      }
      $areas$$inline_1127_s2$$inline_1133$$ = $total$$inline_1129$$ * $total$$inline_1129$$;
      $w$$inline_1128_w2$$inline_1134$$ *= $w$$inline_1128_w2$$inline_1134$$;
      $min$$inline_1130_newWorst$$ = window.Math.max($w$$inline_1128_w2$$inline_1134$$ * $max$$inline_1131$$ / $areas$$inline_1127_s2$$inline_1133$$, $areas$$inline_1127_s2$$inline_1133$$ / ($w$$inline_1128_w2$$inline_1134$$ * $min$$inline_1130_newWorst$$));
      if($min$$inline_1130_newWorst$$ > $worst$$) {
        $children$$15$$.push($c$$13$$);
        $row$$6$$.pop();
        $r$$12$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$6$$, $w$$9$$, $r$$12$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$15$$, window.Math.min($r$$12$$.$w$, $r$$12$$.$h$), $r$$12$$);
        break
      }else {
        if(0 == $children$$15$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$6$$, $w$$9$$, $r$$12$$);
          break
        }else {
          $worst$$ = $min$$inline_1130_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$7$$, $w$$11_width$$27$$, $r$$13$$) {
  var $height$$24_total$$4$$ = 0, $i$$112$$;
  for($i$$112$$ = 0;$i$$112$$ < $row$$7$$.length;$i$$112$$++) {
    $height$$24_total$$4$$ += $row$$7$$[$i$$112$$].$__pxSize$
  }
  var $x$$102$$ = $r$$13$$.x, $y$$76$$ = $r$$13$$.y;
  if($w$$11_width$$27$$ == $r$$13$$.$w$) {
    $height$$24_total$$4$$ = 0 == $w$$11_width$$27$$ ? 0 : $height$$24_total$$4$$ / $w$$11_width$$27$$;
    for($i$$112$$ = 0;$i$$112$$ < $row$$7$$.length;$i$$112$$++) {
      $w$$11_width$$27$$ = $row$$7$$[$i$$112$$].$__pxSize$ / $height$$24_total$$4$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$7$$[$i$$112$$], $x$$102$$, $y$$76$$, $w$$11_width$$27$$, $height$$24_total$$4$$, D.$JSCompiler_alias_FALSE$$), $x$$102$$ += $w$$11_width$$27$$
    }
    return new D.$DvtRectangle$$($r$$13$$.x, $r$$13$$.y + $height$$24_total$$4$$, $r$$13$$.$w$, $r$$13$$.$h$ - $height$$24_total$$4$$)
  }
  $w$$11_width$$27$$ = 0 == $w$$11_width$$27$$ ? 0 : $height$$24_total$$4$$ / $w$$11_width$$27$$;
  for($i$$112$$ = 0;$i$$112$$ < $row$$7$$.length;$i$$112$$++) {
    $height$$24_total$$4$$ = $row$$7$$[$i$$112$$].$__pxSize$ / $w$$11_width$$27$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$7$$[$i$$112$$], $x$$102$$, $y$$76$$, $w$$11_width$$27$$, $height$$24_total$$4$$, D.$JSCompiler_alias_FALSE$$), $y$$76$$ += $height$$24_total$$4$$
  }
  return new D.$DvtRectangle$$($r$$13$$.x + $w$$11_width$$27$$, $r$$13$$.y, $r$$13$$.$w$ - $w$$11_width$$27$$, $r$$13$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$13$$, $root$$8$$, $x$$111$$, $y$$85$$, $width$$31$$, $height$$28$$, $bShowRoot$$2$$) {
  this.$_layout$(this.$_isHoriz$, $view$$13$$, $root$$8$$, $x$$111$$, $y$$85$$, $width$$31$$, $height$$28$$, $bShowRoot$$2$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$1$$, $view$$14$$, $children$$16_node$$66$$, $availBounds$$2_x$$112$$, $childX_y$$86$$, $childY_width$$32$$, $childWidth_height$$29$$, $childHeight_isRoot$$4$$) {
  $availBounds$$2_x$$112$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$16_node$$66$$, $availBounds$$2_x$$112$$, $childX_y$$86$$, $childY_width$$32$$, $childWidth_height$$29$$, $childHeight_isRoot$$4$$);
  $children$$16_node$$66$$ = $children$$16_node$$66$$.$getChildNodes$();
  if($children$$16_node$$66$$ != D.$JSCompiler_alias_NULL$$) {
    $childX_y$$86$$ = $availBounds$$2_x$$112$$.x;
    $childY_width$$32$$ = $availBounds$$2_x$$112$$.y;
    $childWidth_height$$29$$ = $availBounds$$2_x$$112$$.$w$;
    $childHeight_isRoot$$4$$ = $availBounds$$2_x$$112$$.$h$;
    var $total$$5$$ = 0, $i$$115$$;
    for($i$$115$$ = 0;$i$$115$$ < $children$$16_node$$66$$.length;$i$$115$$++) {
      $total$$5$$ += 0 < $children$$16_node$$66$$[$i$$115$$].$getSize$() ? $children$$16_node$$66$$[$i$$115$$].$getSize$() : 0
    }
    "on" == this.$Sorting$ && ($children$$16_node$$66$$ = $children$$16_node$$66$$.slice(0), $children$$16_node$$66$$.sort(function($isHoriz$$1$$, $view$$14$$) {
      return $view$$14$$.$getSize$() - $isHoriz$$1$$.$getSize$()
    }));
    $isHoriz$$1$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$14$$.$_context$) && ($children$$16_node$$66$$ = $children$$16_node$$66$$.slice(0).reverse());
    for($i$$115$$ = 0;$i$$115$$ < $children$$16_node$$66$$.length;$i$$115$$++) {
      var $child$$11$$ = $children$$16_node$$66$$[$i$$115$$];
      if(!(0 >= $child$$11$$.$getSize$())) {
        var $sizeRatio$$1$$ = $child$$11$$.$getSize$() / $total$$5$$;
        $isHoriz$$1$$ ? $childWidth_height$$29$$ = $availBounds$$2_x$$112$$.$w$ * $sizeRatio$$1$$ : $childHeight_isRoot$$4$$ = $availBounds$$2_x$$112$$.$h$ * $sizeRatio$$1$$;
        this.$_layout$(!$isHoriz$$1$$, $view$$14$$, $child$$11$$, $childX_y$$86$$, $childY_width$$32$$, $childWidth_height$$29$$, $childHeight_isRoot$$4$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$1$$ ? $childX_y$$86$$ += $childWidth_height$$29$$ : $childY_width$$32$$ += $childHeight_isRoot$$4$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$33$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$33$$ ? $id$$33$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$5$$) {
  this.Init($manager$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$88_keyCode$$10$$) {
  var $isNavigable$$1$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$88_keyCode$$10$$);
  if(!$isNavigable$$1$$ && ($event$$88_keyCode$$10$$ = $event$$88_keyCode$$10$$.keyCode, 219 == $event$$88_keyCode$$10$$ || 221 == $event$$88_keyCode$$10$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$9$$, $context$$55$$, $callback$$31$$, $callbackObj$$8$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$9$$, $context$$55$$, $callback$$31$$, $callbackObj$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$87$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$87$$.keyCode && $event$$87$$.ctrlKey) {
    var $node$$63$$ = this.$getFocus$();
    $node$$63$$.$isIsolateEnabled$() && ($node$$63$$.$_isIsolated$ ? $node$$63$$.$__restoreNode$() : $node$$63$$.$__isolateNode$());
    $event$$87$$.preventDefault()
  }else {
    $eventConsumed$$5$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$87$$)
  }
  return $eventConsumed$$5$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtTreemapBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapBundle$$, D.$DvtUtilBundle$$, "DvtTreemapBundle");
D.$DvtTreemapBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtTreemapBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtTreemapBundle$$$$$GetDefaultStringForKey$$($key$$34$$) {
  var $defaultStr$$3$$ = D.$DvtTreemapBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$34$$);
  return $defaultStr$$3$$ ? $defaultStr$$3$$ : D.$DvtTreemapBundle$$._defaults[$key$$34$$]
};
D.$DvtTreemapBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {nodeDefaults:{header:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;"), borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", selectedBackgroundColor:"#dae9f5", selectedOuterColor:"#000000", selectedInnerColor:"#FFFFFF"}, hoverColor:"#ebeced", selectedOuterColor:"#000000", selectedInnerColor:"#FFFFFF"}};
D.$DvtTreemapJsonUtils$$ = (0,D.$JSCompiler_set$$)("$_context$");
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtTreemapJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("treemap");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$2_options$$66$$) {
  var $ret$$25$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$2_options$$66$$), $ret$$25$$ = $ret$$25$$ + this.$WriteAttr$("irk", $animationOnDisplay$$2_options$$66$$.isolatedNode), $groupGaps_layout$$ = $animationOnDisplay$$2_options$$66$$.groupGaps;
  "all" == $groupGaps_layout$$ ? $ret$$25$$ += this.$WriteAttr$("gg", "a") : "none" == $groupGaps_layout$$ && ($ret$$25$$ += this.$WriteAttr$("gg", "n"));
  $groupGaps_layout$$ = $animationOnDisplay$$2_options$$66$$.layout;
  "sliceAndDiceHorizontal" == $groupGaps_layout$$ ? $ret$$25$$ += this.$WriteAttr$("layout", "h") : "sliceAndDiceVertical" == $groupGaps_layout$$ && ($ret$$25$$ += this.$WriteAttr$("layout", "v"));
  $animationOnDisplay$$2_options$$66$$ = $animationOnDisplay$$2_options$$66$$.animationOnDisplay;
  return $ret$$25$$ = "auto" == $animationOnDisplay$$2_options$$66$$ ? $ret$$25$$ + this.$WriteAttr$("adi", "alphaFade") : $ret$$25$$ + this.$WriteAttr$("adi", $animationOnDisplay$$2_options$$66$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$67$$, $nodeData$$10$$) {
  var $ret$$26$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$67$$, $nodeData$$10$$);
  if("off" == ($nodeData$$10$$.labelDisplay ? $nodeData$$10$$.labelDisplay : $options$$67$$.nodeDefaults.labelDisplay)) {
    $ret$$26$$ += this.$WriteAttr$("ld", "o")
  }
  var $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ = $nodeData$$10$$.groupLabelDisplay ? $nodeData$$10$$.groupLabelDisplay : $options$$67$$.nodeDefaults.groupLabelDisplay;
  "node" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ ? $ret$$26$$ += this.$WriteAttr$("gld", "n") : "off" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && ($ret$$26$$ += this.$WriteAttr$("gld", "o"));
  $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ = $nodeData$$10$$.labelHalign ? $nodeData$$10$$.labelHalign : $options$$67$$.nodeDefaults.labelHalign;
  "start" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ ? $ret$$26$$ += this.$WriteAttr$("ha", "s") : "end" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && ($ret$$26$$ += this.$WriteAttr$("ha", "e"));
  $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ = $nodeData$$10$$.labelValign ? $nodeData$$10$$.labelValign : $options$$67$$.nodeDefaults.labelValign;
  "top" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ ? $ret$$26$$ += this.$WriteAttr$("va", "t") : "bottom" == $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && ($ret$$26$$ += this.$WriteAttr$("va", "b"));
  var $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ = $nodeData$$10$$.header, $ret$$26$$ = $ret$$26$$ + this.$WriteAttr$("hls", $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.labelStyle ? $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.labelStyle : $options$$67$$.nodeDefaults.header.labelStyle), $headerHalign$$ = $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.labelHalign ? 
  $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.labelHalign : $options$$67$$.nodeDefaults.header.labelHalign;
  "center" == $headerHalign$$ ? $ret$$26$$ += this.$WriteAttr$("hha", "c") : "end" == $headerHalign$$ && ($ret$$26$$ += this.$WriteAttr$("hha", "e"));
  if("off" == ($groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.isolate ? $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.isolate : $options$$67$$.nodeDefaults.header.isolate)) {
    $ret$$26$$ += this.$WriteAttr$("hi", "off")
  }
  if("on" == ($groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$ && $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.useNodeColor ? $groupLabelDisplay_header$$3_labelHalign$$1_labelValign$$.useNodeColor : $options$$67$$.nodeDefaults.header.useNodeColor)) {
    $ret$$26$$ += this.$WriteAttr$("unc", "on")
  }
  return $ret$$26$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$68_resources$$6$$) {
  var $ret$$27$$, $bRtl_bundle$$3$$ = new D.$DvtTreemapBundle$$;
  $ret$$27$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$3$$, "SIZE"));
  $ret$$27$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$3$$, "COLOR"));
  $options$$68_resources$$6$$ = $options$$68_resources$$6$$._resources;
  $bRtl_bundle$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$);
  $ret$$27$$ += this.$WriteAttr$("maximizeUp", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.isolateRtl ? $options$$68_resources$$6$$.isolateRtl : $options$$68_resources$$6$$.isolate);
  $ret$$27$$ += this.$WriteAttr$("maximizeDown", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.isolateDownRtl ? $options$$68_resources$$6$$.isolateDownRtl : $options$$68_resources$$6$$.isolateDown);
  $ret$$27$$ += this.$WriteAttr$("maximizeOver", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.isolateOverRtl ? $options$$68_resources$$6$$.isolateOverRtl : $options$$68_resources$$6$$.isolateOver);
  $ret$$27$$ += this.$WriteAttr$("restoreUp", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.restoreRtl ? $options$$68_resources$$6$$.restoreRtl : $options$$68_resources$$6$$.restore);
  $ret$$27$$ += this.$WriteAttr$("restoreDown", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.restoreDownRtl ? $options$$68_resources$$6$$.restoreDownRtl : $options$$68_resources$$6$$.restoreDown);
  $ret$$27$$ += this.$WriteAttr$("restoreOver", $bRtl_bundle$$3$$ && $options$$68_resources$$6$$.restoreOverRtl ? $options$$68_resources$$6$$.restoreOverRtl : $options$$68_resources$$6$$.restoreOver);
  $ret$$27$$ += this.$WriteAttr$("alta", "true");
  return $ret$$27$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($nodeHeaderSelectedOuterColor_options$$69$$) {
  var $ret$$28$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $nodeHeaderSelectedOuterColor_options$$69$$), $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$69$$.animationUpdateColor;
  $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ && ($ret$$28$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.hoverColor) && ($ret$$28$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.selectedInnerColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.selectedOuterColor;
  ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-inner-color:" + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-outer-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$28$$ += this.$WriteAttr$("node-selected", $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.backgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.borderColor;
  ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "border-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$28$$ += this.$WriteAttr$("nodeHeader", $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.hoverBackgroundColor, $nodeHeaderHoverInnerColor$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.hoverInnerColor, $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = 
  $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.hoverOuterColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "background-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "") + 
  ($nodeHeaderHoverInnerColor$$ ? "-tr-inner-color:" + $nodeHeaderHoverInnerColor$$ + ";" : "");
  ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ += $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-outer-color:" + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ : 
  "") && ($ret$$28$$ += this.$WriteAttr$("nodeHeader-hover", $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$));
  $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.selectedBackgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.selectedInnerColor;
  $nodeHeaderSelectedOuterColor_options$$69$$ = $nodeHeaderSelectedOuterColor_options$$69$$.nodeDefaults.header.selectedOuterColor;
  $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-inner-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "");
  ($animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ += $nodeHeaderSelectedOuterColor_options$$69$$ ? "-tr-outer-color:" + $nodeHeaderSelectedOuterColor_options$$69$$ : "") && ($ret$$28$$ += this.$WriteAttr$("nodeHeader-selected", $animationColor$$1_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  return $ret$$28$$ + "/\x3e\n"
};
});