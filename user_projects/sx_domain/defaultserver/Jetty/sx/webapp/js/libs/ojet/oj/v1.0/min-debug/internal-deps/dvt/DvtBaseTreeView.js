"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$334$$, $callback$$102$$, $callbackObj$$75$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$334$$, $callback$$102$$, $callbackObj$$75$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$334$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$334$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$LastXml$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$12$$, $container$$142_props$$25_width$$121$$, $availSpace$$89_bBlackBoxUpdate_height$$101$$) {
  this.$Width$ = $container$$142_props$$25_width$$121$$;
  this.$Height$ = $availSpace$$89_bBlackBoxUpdate_height$$101$$;
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  this.$Animation$ && !$xmlString$$12$$ && ($xmlString$$12$$ = this.$LastXml$);
  $xmlString$$12$$ && (this.$LastXml$ = $xmlString$$12$$);
  $xmlString$$12$$ && ($container$$142_props$$25_width$$121$$ = this.$Parse$($xmlString$$12$$), this.$ApplyParsedProperties$($container$$142_props$$25_width$$121$$));
  $availSpace$$89_bBlackBoxUpdate_height$$101$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$89_bBlackBoxUpdate_height$$101$$);
  $container$$142_props$$25_width$$121$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$142_props$$25_width$$121$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$_context$, this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$142_props$$25_width$$121$$, $availSpace$$89_bBlackBoxUpdate_height$$101$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  var $ah$$2_bounds$$104$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$89_bBlackBoxUpdate_height$$101$$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_container$) {
    if(this.$AnimationOnDataChange$ && $xmlString$$12$$) {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDataChange$)) {
        this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, this.$AnimationOnDataChange$, this.$_container$, $container$$142_props$$25_width$$121$$, $ah$$2_bounds$$104$$, this.$AnimationDuration$), $availSpace$$89_bBlackBoxUpdate_height$$101$$ = D.$JSCompiler_alias_TRUE$$
      }else {
        if(this.$_oldRoot$ && "auto" == this.$AnimationOnDataChange$) {
          this.$_deleteContainer$ = this.$GetDeleteContainer$();
          this.$addChild$(this.$_deleteContainer$);
          var $ah$$2_bounds$$104$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$_context$, this.$_deleteContainer$), $oldRoot$$inline_5754$$ = this.$_oldRoot$, $newRoot$$inline_5755$$ = this.$_root$, $oldAncestors$$inline_5756_oldList$$inline_5758$$ = this.$_oldAncestors$, $newAncestors$$inline_5757_newList$$inline_5759$$ = this.$_ancestors$;
          $ah$$2_bounds$$104$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$;
          $ah$$2_bounds$$104$$.$_oldRoot$ = $oldRoot$$inline_5754$$;
          $ah$$2_bounds$$104$$.$_oldAncestors$ = $oldAncestors$$inline_5756_oldList$$inline_5758$$;
          (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_5757_newList$$inline_5759$$, $oldRoot$$inline_5754$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($oldAncestors$$inline_5756_oldList$$inline_5758$$, $newRoot$$inline_5755$$) ? ($ah$$2_bounds$$104$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $oldAncestors$$inline_5756_oldList$$inline_5758$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($oldRoot$$inline_5754$$), $newAncestors$$inline_5757_newList$$inline_5759$$ = 
          (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_5755$$), $oldAncestors$$inline_5756_oldList$$inline_5758$$.push($oldRoot$$inline_5754$$), $newAncestors$$inline_5757_newList$$inline_5759$$.push($newRoot$$inline_5755$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_bounds$$104$$, $oldAncestors$$inline_5756_oldList$$inline_5758$$, $newAncestors$$inline_5757_newList$$inline_5759$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_bounds$$104$$, 
          [$oldRoot$$inline_5754$$], [$newRoot$$inline_5755$$]);
          this.$Animation$ = $ah$$2_bounds$$104$$.$getAnimation$()
        }
      }
    }
  }else {
    this.$Animation$ = this.$GetDisplayAnimation$($container$$142_props$$25_width$$121$$, $ah$$2_bounds$$104$$)
  }
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$89_bBlackBoxUpdate_height$$101$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$142_props$$25_width$$121$$;
  $xmlString$$12$$ ? (this.$_processInitialSelections$(), (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$)) : this.$ReselectNodes$()
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$144$$) {
  var $background$$10$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$10$$);
  $container$$144$$.$addChild$($background$$10$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$91$$) {
  if($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$1$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$91$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$1$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_LayoutLegend$$ = function $$JSCompiler_StaticMethods_LayoutLegend$$$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$92$$) {
  var $attrGroups$$11$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$ && $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$) {
    for(var $i$$583$$ = 0;$i$$583$$ < $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$.length;$i$$583$$++) {
      var $agDef$$1$$ = $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$[$i$$583$$];
      if($agDef$$1$$.id == $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$) {
        $attrGroups$$11$$ = $agDef$$1$$.$attrGroups$;
        break
      }
    }
  }
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$ || $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$ || $attrGroups$$11$$) {
    $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$92$$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendSize, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendColor, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$, $attrGroups$$11$$)
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$147$$) {
  if($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$) {
    var $text$$61$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_context$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ / 2, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ / 2);
    $text$$61$$.$alignCenter$();
    $text$$61$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($text$$61$$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$);
    $container$$147$$.$addChild$($text$$61$$)
  }
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$148$$, $bounds$$106$$) {
  return D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDisplay$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$AnimationOnDisplay$, $container$$148$$, $bounds$$106$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$_context$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$16$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$67$$, $context$$335$$, $callback$$103$$, $callbackObj$$76$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$67$$, $context$$335$$, $callback$$103$$, $callbackObj$$76$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$_calcMaxDepth$$ = function $$DvtBaseTreeView$_calcMaxDepth$$$($node$$280$$, $depth$$20$$) {
  var $maxDepth$$2$$ = $depth$$20$$, $children$$20$$ = $node$$280$$.$getChildNodes$();
  if($children$$20$$) {
    for(var $i$$584$$ = 0;$i$$584$$ < $children$$20$$.length;$i$$584$$++) {
      var $childDepth$$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)($children$$20$$[$i$$584$$], $depth$$20$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($props$$26$$) {
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_nodeCount$ = $props$$26$$.$nodeCount$;
  this.$_resources$ = $props$$26$$.$resources$ ? $props$$26$$.$resources$ : {};
  this.$_root$ = $props$$26$$.root;
  this.$_emptyText$ = $props$$26$$.$emptyText$;
  this.$_ancestors$ = $props$$26$$.$ancestors$;
  this.$_dropSiteFill$ = new D.$DvtSolidFill$$($props$$26$$.$dropSiteFillColor$, $props$$26$$.$dropSiteOpacity$);
  this.$_dropSiteStroke$ = new D.$DvtSolidStroke$$($props$$26$$.$dropSiteBorderColor$);
  this.$AnimationOnDisplay$ = $props$$26$$.$animationOnDisplay$;
  this.$AnimationOnDataChange$ = $props$$26$$.$animationOnDataChange$;
  this.$AnimationDuration$ = $props$$26$$.$animationDuration$;
  this.$Sorting$ = $props$$26$$.$sorting$;
  this.$_styles$ = $props$$26$$.$styles$;
  this.$_nodeSelection$ = $props$$26$$.$nodeSelection$;
  $props$$26$$.$templates$ && (this.$_templates$ = $props$$26$$.$templates$);
  this.$_nodeSelection$ ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$($props$$26$$.$nodeSelection$), this.$_initialSelection$ = $props$$26$$.$selectedIds$) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  this.$_eventHandler$.$ContextMenuHandler$ = $props$$26$$.$contextMenuHandler$;
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_root$ && (this.$_maxDepth$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)(this.$_root$, 0));
  this.$_attrGroups$ = $props$$26$$.$attrGroups$;
  this.$_legendSource$ = $props$$26$$.$legendSource$;
  this.$_sizeValueStr$ = $props$$26$$.$sizeValueStr$;
  this.$_colorValueStr$ = $props$$26$$.$colorValueStr$
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$585$$ = 0;$i$$585$$ < $selectedNodes$$2$$.length;$i$$585$$++) {
    $selectedNodes$$2$$[$i$$585$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$4$$ = [];
    (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)(this, this.$_root$, $targets$$4$$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$4$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$165$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$165$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$165$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$DvtBaseTreeView$$.prototype.$setFocused$ = function $$DvtBaseTreeView$$$$$setFocused$$($isFocused$$1$$) {
  this.$_hasFocus$ = $isFocused$$1$$;
  this.$_eventHandler$.$setFocused$($isFocused$$1$$)
};
D.$DvtBaseTreeView$$.prototype.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$ = function $$JSCompiler_StaticMethods__addSelectableObjectsToArray$$$($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$21_node$$281$$, $ret$$97$$) {
  if($children$$21_node$$281$$ && ($ret$$97$$.push($children$$21_node$$281$$), $children$$21_node$$281$$ = $children$$21_node$$281$$.$getChildNodes$())) {
    for(var $i$$586$$ = 0;$i$$586$$ < $children$$21_node$$281$$.length;$i$$586$$++) {
      (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$21_node$$281$$[$i$$586$$], $ret$$97$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$__isDragAvailable$ = function $$DvtBaseTreeView$$$$$__isDragAvailable$$($clientIds$$19$$) {
  return this.$_selectionHandler$ ? $clientIds$$19$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragTransferable$ = function $$DvtBaseTreeView$$$$$__getDragTransferable$$($node$$282_rowKeys$$3$$) {
  $node$$282_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$282_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$282_rowKeys$$3$$ = [];
  for(var $selection$$22$$ = this.$_selectionHandler$.getSelection(), $i$$587$$ = 0;$i$$587$$ < $selection$$22$$.length;$i$$587$$++) {
    $node$$282_rowKeys$$3$$.push($selection$$22$$[$i$$587$$].getId())
  }
  return $node$$282_rowKeys$$3$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragFeedback$ = function $$DvtBaseTreeView$$$$$__getDragFeedback$$() {
  for(var $displayables$$17$$ = [], $selection$$23$$ = this.$_selectionHandler$.getSelection(), $i$$588$$ = 0;$i$$588$$ < $selection$$23$$.length;$i$$588$$++) {
    $displayables$$17$$.push($selection$$23$$[$i$$588$$].$__getDisplayable$())
  }
  return $displayables$$17$$
};
D.$DvtBaseTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtBaseTreeView$$$$$__processBreadcrumbsEvent$$($event$$431$$) {
  $event$$431$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$431$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$166$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$166$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && $JSCompiler_StaticMethods___drill$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$166$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || 
  $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$166$$));
  $JSCompiler_StaticMethods___drill$self$$.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$69$$) {
  return this.$_eventHandler$.$GetLogicalObject$($target$$69$$)
};
D.$DvtBaseTreeView$$.prototype.$getBundle$ = function $$DvtBaseTreeView$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtUtilBundle$$);
  return this.$_bundle$
};
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$42$$, $mouseY$$42$$, $clientIds$$18$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$18$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$43$$, $mouseY$$43$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$43$$, $mouseY$$43$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$47$$, $deleteContainer$$) {
  this.Init($context$$47$$, $deleteContainer$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$, $node$$21$$) {
  if(!$node$$21$$ || !$ancestors$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$64$$ = 0;$i$$64$$ < $ancestors$$.length;$i$$64$$++) {
    if($ancestors$$[$i$$64$$].id == $node$$21$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$6$$, $context$$46$$, $callback$$28$$, $callbackObj$$5$$) {
  this.Init($context$$46$$, $callback$$28$$, $callbackObj$$5$$);
  this.$_view$ = $view$$6$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$47_shiftKey$$inline_1018$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$47_shiftKey$$inline_1018$$);
  var $obj$$53$$ = this.$GetLogicalObject$($event$$47_shiftKey$$inline_1018$$.target);
  $obj$$53$$ && ($event$$47_shiftKey$$inline_1018$$ = $event$$47_shiftKey$$inline_1018$$.shiftKey, $obj$$53$$.$isDrillReplaceEnabled$ && $obj$$53$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$53$$.getId(), $event$$47_shiftKey$$inline_1018$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$48_obj$$54$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$48_obj$$54$$);
  $event$$48_obj$$54$$ = this.$GetLogicalObject$($event$$48_obj$$54$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$48_obj$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$49_obj$$55$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$49_obj$$55$$);
  ($event$$49_obj$$55$$ = this.$GetLogicalObject$($event$$49_obj$$55$$.target)) && $event$$49_obj$$55$$.$handleMouseOver$ && $event$$49_obj$$55$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$50_relatedId_relatedObj$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$50_relatedId_relatedObj$$);
  var $obj$$56$$ = this.$GetLogicalObject$($event$$50_relatedId_relatedObj$$.target);
  $obj$$56$$ && $obj$$56$$.$handleMouseOut$ && ($event$$50_relatedId_relatedObj$$ = ($event$$50_relatedId_relatedObj$$ = this.$GetLogicalObject$($event$$50_relatedId_relatedObj$$.relatedTarget)) && $event$$50_relatedId_relatedObj$$.getId ? $event$$50_relatedId_relatedObj$$.getId() : D.$JSCompiler_alias_NULL$$, ($obj$$56$$.getId() == D.$JSCompiler_alias_NULL$$ || $event$$50_relatedId_relatedObj$$ != $obj$$56$$.getId()) && $obj$$56$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$51$$) {
  var $eventConsumed$$3_obj$$57$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$3_obj$$57$$ = this.$getFocus$();
  13 == $event$$51$$.keyCode && !$event$$51$$.ctrlKey ? ($eventConsumed$$3_obj$$57$$ = this.$getFocus$(), $eventConsumed$$3_obj$$57$$.$isDrillReplaceEnabled$ && $eventConsumed$$3_obj$$57$$.$isDrillReplaceEnabled$() && ($event$$51$$.shiftKey && ($eventConsumed$$3_obj$$57$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$3_obj$$57$$.getId(), $event$$51$$.shiftKey)), $event$$51$$.preventDefault(), $eventConsumed$$3_obj$$57$$ = D.$JSCompiler_alias_TRUE$$) : 
  $eventConsumed$$3_obj$$57$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$51$$);
  return $eventConsumed$$3_obj$$57$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$52_obj$$58$$) {
  $event$$52_obj$$58$$ = this.$GetLogicalObject$($event$$52_obj$$58$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$52_obj$$58$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$52_obj$$58$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$52_obj$$58$$ && $event$$52_obj$$58$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$52_obj$$58$$ && (this.$_currentHoverItem$ = $event$$52_obj$$58$$, $event$$52_obj$$58$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$53_obj$$59$$) {
  ($event$$53_obj$$59$$ = this.$GetLogicalObject$($event$$53_obj$$59$$.target)) && $event$$53_obj$$59$$.$isDrillReplaceEnabled$ && $event$$53_obj$$59$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$53_obj$$59$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$60$$) {
  $obj$$60$$ && ($obj$$60$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$60$$.$_bDrillable$) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$60$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeParser$$, D.$DvtObj$$, "DvtBaseTreeParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$3$$) {
  this.$_view$ = $treeView$$3$$;
  this.$_parser$ = new D.$DvtXmlParser$$;
  this.$_minAGColor$ = window.Infinity;
  this.$_maxAGColor$ = -window.Infinity
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$16_xmlString$$2$$) {
  $ret$$16_xmlString$$2$$ = $ret$$16_xmlString$$2$$.replace(/&Oslash;/gi, "\u00f8");
  var $childNodes$$4_rootNode$$ = this.$_parser$.parse($ret$$16_xmlString$$2$$);
  $ret$$16_xmlString$$2$$ = this.$ParseRootAttributes$($childNodes$$4_rootNode$$);
  var $childNodes$$4_rootNode$$ = $childNodes$$4_rootNode$$.$getChildNodes$(), $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$;
  $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$4_rootNode$$, "f");
  var $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$ = $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$.length;
  if(0 < $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$) {
    for(var $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$, $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$, $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = 
    {}, $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = 0;$childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ < $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$;$childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$++) {
      $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$[$childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$], $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = 
      $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$getAttr$("name"), $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$[$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$] = 
      D.$DvtAfComponentFactory$$.$parseXml$($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$)
    }
    $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$
  }else {
    $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$16_xmlString$$2$$.$templates$ = $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$;
  this.$_nodeCount$ = 0;
  $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$4_rootNode$$, "n");
  $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$ = [];
  for($JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = 0;$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ < $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.length;$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$++) {
    ($ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = this.$_parseDataNode$($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$[$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$], $ret$$16_xmlString$$2$$.$templates$)) && 
    $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.push($ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$)
  }
  $ret$$16_xmlString$$2$$.$nodeCount$ = this.$_nodeCount$;
  if(1 == $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.length) {
    $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$[0]
  }else {
    $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = this.$_view$;
    for($ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = 0;$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ < 
    $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.length;$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$++) {
      $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ += $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$[$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$].$getSize$()
    }
    $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = this.$CreateNode$($JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$, {size:$attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$, $disclosed$:D.$JSCompiler_alias_TRUE$$});
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$, $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$)
  }
  $ret$$16_xmlString$$2$$.root = $JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$;
  for($JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ = 0;$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$ < $childNodes$$4_rootNode$$.length;$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$++) {
    if($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $childNodes$$4_rootNode$$[$JSCompiler_inline_result$$259_JSCompiler_temp$$290_artificialRoot$$inline_1049_i$$65_template$$inline_1037_treeView$$inline_1045$$], $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$ = $ret$$16_xmlString$$2$$, $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$) {
      if($ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.getName(), "spb" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
        $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$;
        $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$;
        var $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$ = $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$, $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$.$getAttr$("popupId"), 
        $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$.$getAttr$("triggerType"), $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ = $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$.$getAttr$("alignId"), $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$ = 
        $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$.$getAttr$("align"), $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = new D.$DvtShowPopupBehavior$$($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$, $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$, 
        $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$, $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$);
        $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$.$getAttr$("T");
        $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$spb$ || ($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$spb$ = {});
        $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$spb$[$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$] || ($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$spb$[$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$] = 
        []);
        $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$spb$[$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$].push($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$);
        $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$showPopupBehaviors$ || ($JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$showPopupBehaviors$ = []);
        $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$showPopupBehaviors$.push(D.$JSCompiler_alias_VOID$$)
      }else {
        if("menus" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
          $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$contextMenuHandler$ || ($JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$contextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$_view$.$_context$)), $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$contextMenuHandler$.add($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$)
        }else {
          if("ag" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
            $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$;
            $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = D.$JSCompiler_alias_VOID$$;
            $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("id");
            $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("T");
            if("continuous" == $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("t")) {
              var $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("minValue"), $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("maxValue"), 
              $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("minLabel"), $groupLabel$$inline_9349_maxLabel$$inline_9343$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("maxLabel"), $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = 
              $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getAttr$("ramp").split(";");
              $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ == D.$JSCompiler_alias_NULL$$ && ($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = this.$_minAGColor$);
              $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ == D.$JSCompiler_alias_NULL$$ && ($alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ = this.$_maxAGColor$);
              $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = new D.$DvtContinuousAttrGroups$$($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$, $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$, $align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$, 
              $groupLabel$$inline_9349_maxLabel$$inline_9343$$, $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$)
            }else {
              $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = new D.$DvtDiscreteAttrGroups$$;
              $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.$getChildNodes$();
              for($alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ = 0;$alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ < $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$.length;$alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$++) {
                var $child$$inline_9347_params$$inline_9350$$ = $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$[$alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$];
                $child$$inline_9347_params$$inline_9350$$ && ($align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$ = $child$$inline_9347_params$$inline_9350$$.$getAttr$("g"), $groupLabel$$inline_9349_maxLabel$$inline_9343$$ = $child$$inline_9347_params$$inline_9350$$.$getAttr$("l"), $child$$inline_9347_params$$inline_9350$$ = {color:$child$$inline_9347_params$$inline_9350$$.$getAttr$("c"), pattern:$child$$inline_9347_params$$inline_9350$$.$getAttr$("p")}, $attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$.add($align$$inline_11253_group$$inline_9348_minLabel$$inline_9342_xmlNode$$inline_11249$$, 
                $groupLabel$$inline_9349_maxLabel$$inline_9343$$, $child$$inline_9347_params$$inline_9350$$))
              }
            }
            $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$attrGroups$ || ($JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$attrGroups$ = []);
            $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$attrGroups$.push({$attrGroups$:$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$, $templateId$:$ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$, 
            id:$attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$})
          }else {
            if("styles" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
              $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$styles$ = this.$_parseStyles$($attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$, $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$)
            }else {
              if("a" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
                $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = [];
                $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.$getChildNodes$();
                for($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = 0;$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ < $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.length;$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$++) {
                  $childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$[$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$].$getAttr$("id"), $alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$ = 
                  $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$[$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$].$getAttr$("l"), $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$.push({id:$childNodes$$inline_9345_i$$inline_1042_id$$inline_9356_ramp$$inline_9344_triggerType$$inline_11251_xmlNode$$inline_9335$$, 
                  text:$alignId$$inline_11252_i$$inline_9346_maxValue$$inline_9341_text$$inline_9357$$})
                }
                $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$ancestors$ = $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$
              }else {
                if("resources" == $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$) {
                  $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$ = {};
                  $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$ = $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.getAttributes();
                  for($attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ = 0;$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$ < $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$.length;$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$++) {
                    $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$[$attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$[$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$].name] = 
                    $attrs$$inline_9361_childNodes$$inline_9354_id$$inline_9338_ret$$inline_9330_size$$inline_1047_temp$$inline_1039_xmlDataNodes_xmlNode$$inline_1052$$[$attrGroups$$inline_9337_i$$inline_9355_i$$inline_9362_minValue$$inline_9340_popupId$$inline_11250_showPopupBehavior$$inline_9331_templateMap$$inline_1041$$].value
                  }
                  $JSCompiler_temp_const$$9039_JSCompiler_temp_const$$9121_count$$inline_1038_ret$$inline_1053_ret$$inline_9336_rootNodes$$.$resources$ = $ancestors$$inline_9353_i$$inline_1048_name$$inline_1054_resources$$inline_9360_root$$4_tempName$$inline_1040_templateId$$inline_9332_templateId$$inline_9339_xmlNode$$inline_9329$$
                }
              }
            }
          }
        }
      }
    }
  }
  this.$_applyParsedProperties$($ret$$16_xmlString$$2$$.root, $ret$$16_xmlString$$2$$);
  return $ret$$16_xmlString$$2$$
};
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$7$$) {
  var $ret$$17$$ = {}, $duration_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$7$$.$getAttr$("sel");
  $ret$$17$$.$nodeSelection$ = "none" == $duration_nodeSelectionStr_selectedIdsStr$$ ? D.$JSCompiler_alias_NULL$$ : "single" == $duration_nodeSelectionStr_selectedIdsStr$$ ? "s" : "m";
  $ret$$17$$.$sorting$ = $xmlNode$$7$$.$getAttr$("sort");
  if($duration_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$7$$.$getAttr$("selIds")) {
    $ret$$17$$.$selectedIds$ = $duration_nodeSelectionStr_selectedIdsStr$$.split(",")
  }
  $ret$$17$$.$emptyText$ = $xmlNode$$7$$.$getAttr$("emptyText");
  $ret$$17$$.$legendSource$ = $xmlNode$$7$$.$getAttr$("ls");
  $ret$$17$$.$sizeValueStr$ = $xmlNode$$7$$.$getAttr$("sv");
  $ret$$17$$.$colorValueStr$ = $xmlNode$$7$$.$getAttr$("cv");
  if($duration_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$7$$.$getAttr$("adu")) {
    $ret$$17$$.$animationDuration$ = $duration_nodeSelectionStr_selectedIdsStr$$ / 1E3
  }
  $ret$$17$$.$animationOnDataChange$ = $xmlNode$$7$$.$getAttr$("adc");
  $ret$$17$$.$animationOnDisplay$ = $xmlNode$$7$$.$getAttr$("adi");
  return $ret$$17$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($labelStyle$$3_xmlNode$$8$$) {
  var $ret$$18$$ = {};
  $ret$$18$$.$templateId$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("T");
  $ret$$18$$.$menuId$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("M");
  $ret$$18$$.$agColor$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("ag");
  $ret$$18$$.id = $labelStyle$$3_xmlNode$$8$$.$getAttr$("id");
  $ret$$18$$.size = (0,window.Number)($labelStyle$$3_xmlNode$$8$$.$getAttr$("s"));
  $ret$$18$$.color = $labelStyle$$3_xmlNode$$8$$.$getAttr$("c");
  $ret$$18$$.pattern = $labelStyle$$3_xmlNode$$8$$.$getAttr$("p");
  $ret$$18$$.label = $labelStyle$$3_xmlNode$$8$$.$getAttr$("l");
  $ret$$18$$.$tooltip$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("tt");
  $ret$$18$$.$labelDisplay$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("ld");
  $ret$$18$$.$drilling$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("d");
  $ret$$18$$.$disclosed$ = "t" == $labelStyle$$3_xmlNode$$8$$.$getAttr$("di") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  $ret$$18$$.$selectable$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("nsel");
  var $tn$$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("tn");
  $tn$$ && ($ret$$18$$.$templateName$ = $tn$$);
  if($labelStyle$$3_xmlNode$$8$$ = $labelStyle$$3_xmlNode$$8$$.$getAttr$("ls")) {
    $ret$$18$$.$labelStyle$ = new D.$DvtCSSStyle$$($labelStyle$$3_xmlNode$$8$$)
  }
  $ret$$18$$.$agColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_maxAGColor$ = window.Math.max(this.$_maxAGColor$, $ret$$18$$.$agColor$), this.$_minAGColor$ = window.Math.min(this.$_minAGColor$, $ret$$18$$.$agColor$));
  return $ret$$18$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$9$$, $templates$$3$$) {
  if(!$xmlNode$$9$$ || "n" != $xmlNode$$9$$.getName()) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_nodeCount$++;
  var $props$$6_treeNode$$ = this.$ParseNodeAttributes$($xmlNode$$9$$), $props$$6_treeNode$$ = this.$CreateNode$(this.$_view$, $props$$6_treeNode$$, $templates$$3$$);
  (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($props$$6_treeNode$$, this.$_parseChildren$($xmlNode$$9$$, $props$$6_treeNode$$, $templates$$3$$));
  return $props$$6_treeNode$$
};
D.$JSCompiler_prototypeAlias$$.$_parseChildren$ = function $$JSCompiler_prototypeAlias$$$$_parseChildren$$($childNodes$$5_xmlNode$$10$$, $treeNode$$1$$, $templates$$4$$) {
  var $treeNodes$$ = [];
  $childNodes$$5_xmlNode$$10$$ = $childNodes$$5_xmlNode$$10$$.$getChildNodes$();
  for(var $i$$67$$ = 0;$i$$67$$ < $childNodes$$5_xmlNode$$10$$.length;$i$$67$$++) {
    var $child$$6$$ = $childNodes$$5_xmlNode$$10$$[$i$$67$$];
    $child$$6$$ && ("el" == $child$$6$$.getName() ? $templates$$4$$ && $treeNode$$1$$.$SetElAttributes$ && $treeNode$$1$$.$SetElAttributes$((0,D.$DvtPropMap$toELContext$$)($child$$6$$)) : $treeNode$$1$$.$isDisclosed$() && $treeNodes$$.push(this.$_parseDataNode$($child$$6$$, $templates$$4$$)))
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($node$$23$$, $ret$$22$$) {
  if($node$$23$$) {
    var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$ = $node$$23$$.$_templateId$;
    if($ret$$22$$.$spb$) {
      var $agDef_behaviors$$2_childIndex_color$$inline_1062$$ = $ret$$22$$.$spb$[$JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$];
      $agDef_behaviors$$2_childIndex_color$$inline_1062$$ && $node$$23$$.$setShowPopupBehaviors$($agDef_behaviors$$2_childIndex_color$$inline_1062$$)
    }
    if($ret$$22$$.$attrGroups$) {
      for(var $i$$69$$ = 0;$i$$69$$ < $ret$$22$$.$attrGroups$.length;$i$$69$$++) {
        if($agDef_behaviors$$2_childIndex_color$$inline_1062$$ = $ret$$22$$.$attrGroups$[$i$$69$$], $agDef_behaviors$$2_childIndex_color$$inline_1062$$.$templateId$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$) {
          if($agDef_behaviors$$2_childIndex_color$$inline_1062$$.$attrGroups$ instanceof D.$DvtContinuousAttrGroups$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$ = $node$$23$$, $agDef_behaviors$$2_childIndex_color$$inline_1062$$ = $agDef_behaviors$$2_childIndex_color$$inline_1062$$.$attrGroups$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$.$_agColor$))) {
            $JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$.$_color$ = $agDef_behaviors$$2_childIndex_color$$inline_1062$$
          }
          break
        }
      }
    }
    if($JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$ = $node$$23$$.$getChildNodes$()) {
      for($agDef_behaviors$$2_childIndex_color$$inline_1062$$ = 0;$agDef_behaviors$$2_childIndex_color$$inline_1062$$ < $JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$.length;$agDef_behaviors$$2_childIndex_color$$inline_1062$$++) {
        this.$_applyParsedProperties$($JSCompiler_StaticMethods_processAttrGroups$self$$inline_1060_children$$12_templateId$$2$$[$agDef_behaviors$$2_childIndex_color$$inline_1062$$], $ret$$22$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods__getChildNodesByName$$ = function $$JSCompiler_StaticMethods__getChildNodesByName$$$($childNodes$$7$$, $name$$62$$) {
  for(var $nodes$$3$$ = [], $i$$70$$ = 0;$i$$70$$ < $childNodes$$7$$.length;$i$$70$$++) {
    var $child$$8$$ = $childNodes$$7$$[$i$$70$$];
    $child$$8$$ && $child$$8$$.getName() == $name$$62$$ && $nodes$$3$$.push($child$$8$$)
  }
  return $nodes$$3$$
};
D.$DvtBaseTreeParser$$.prototype.$_parseStyles$ = function $$DvtBaseTreeParser$$$$$_parseStyles$$($xmlNode$$14$$, $ret$$23$$) {
  var $styles$$5$$ = {}, $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("top"));
  $styles$$5$$.BACKGROUND_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  $styles$$5$$.ANIMATION_UPDATE_COLOR_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$.$getStyle$("-tr-animation-update-color");
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("node"));
  $styles$$5$$.LABEL_TEXT_DEFAULT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  var $nodeHoverStyle$$1$$ = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("node-hover"))), $nodeSelectedStyle$$1$$ = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("node-selected")));
  $ret$$23$$.$dropSiteFillColor$ = $xmlNode$$14$$.$getAttr$("dsf");
  $ret$$23$$.$dropSiteBorderColor$ = $xmlNode$$14$$.$getAttr$("dsb");
  $ret$$23$$.$dropSiteOpacity$ = $xmlNode$$14$$.$getAttr$("dso");
  this.$ParseAdditionalNodeStyles$($attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$, $nodeHoverStyle$$1$$, $nodeSelectedStyle$$1$$, $styles$$5$$);
  this.$ParseAdditionalStyles$($xmlNode$$14$$, $styles$$5$$);
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("rootText"));
  $styles$$5$$.TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("attrType"));
  $styles$$5$$.ATTRIBUTE_TYPE_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("attrValue"));
  $styles$$5$$.ATTRIBUTE_VALUE_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("drillText"));
  $styles$$5$$.DRILL_TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$14$$.$getAttr$("currentText"));
  $styles$$5$$.CURRENT_TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$2_topStyle$$;
  return $styles$$5$$
};
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalNodeStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$1$$, $props$$3$$, $templates$$2$$) {
  this.$_view$ = $treeView$$1$$;
  this.$_templateId$ = $props$$3$$.$templateId$;
  this.$_menuId$ = $props$$3$$.$menuId$;
  this.$_agColor$ = $props$$3$$.$agColor$;
  this.$_id$ = $props$$3$$.id;
  this.$_size$ = $props$$3$$.size;
  this.$_color$ = $props$$3$$.color ? $props$$3$$.color : "#000000";
  this.$_pattern$ = $props$$3$$.pattern;
  this.$_textStr$ = $props$$3$$.label;
  this.$_datatip$ = $props$$3$$.$tooltip$;
  this.$_labelStyle$ = $props$$3$$.$labelStyle$;
  this.$_drilling$ = $props$$3$$.$drilling$;
  this.$_disclosed$ = $props$$3$$.$disclosed$;
  this.$_bArtificialRoot$ = $props$$3$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_templates$ = $templates$$2$$;
  $props$$3$$.$templateName$ ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, $props$$3$$.$templateName$) : $templates$$2$$ && $templates$$2$$.content ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content") : $templates$$2$$ && $templates$$2$$.rootContent && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "rootContent");
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selectable$ = $props$$3$$.$selectable$;
  this.$Bundle$ = $treeView$$1$$.$getBundle$()
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$6$$) {
  if($children$$6$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$56$$ = 0;$i$$56$$ < $children$$6$$.length;$i$$56$$++) {
      $children$$6$$[$i$$56$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$6$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = (0,D.$JSCompiler_get$$)("$_children$");
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$ = [], $childDescendants$$, $child$$2$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$
  }
  for(var $i$$57$$ = 0;$i$$57$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$57$$++) {
    $child$$2$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$57$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$2$$), $descendants$$.push($child$$2$$), $descendants$$ = $descendants$$.concat($childDescendants$$)
  }
  return $descendants$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$9$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$9$$ && ($parent$$9$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$11$$) {
  return!$node$$11$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$11$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$11$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$7$$, $child$$3_root$$2$$, $depth$$1$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$1$$) {
    return $returnArray$$
  }
  if(0 == $depth$$1$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$7$$]
  }
  if($child$$3_root$$2$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$7$$ = $child$$3_root$$2$$.$getChildNodes$();
    for(var $i$$58$$ = 0;$i$$58$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$7$$.length;$i$$58$$++) {
      $child$$3_root$$2$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$7$$[$i$$58$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$3_root$$2$$, $child$$3_root$$2$$, $depth$$1$$ - 1))
    }
  }
  return $returnArray$$
};
D.$JSCompiler_StaticMethods_getLeafNodes$$ = function $$JSCompiler_StaticMethods_getLeafNodes$$$($JSCompiler_StaticMethods_getLeafNodes$self$$) {
  var $leafNodes$$ = [], $child$$4_childLeafNodes$$;
  if(!$JSCompiler_StaticMethods_getLeafNodes$self$$.$hasChildren$()) {
    return[$JSCompiler_StaticMethods_getLeafNodes$self$$]
  }
  for(var $i$$59$$ = 0;$i$$59$$ < $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$.length;$i$$59$$++) {
    $child$$4_childLeafNodes$$ = $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$[$i$$59$$], $child$$4_childLeafNodes$$ = (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($child$$4_childLeafNodes$$), $leafNodes$$ = $leafNodes$$.concat($child$$4_childLeafNodes$$)
  }
  return $leafNodes$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$3$$, $id$$18$$) {
  if($root$$3$$.getId() == $id$$18$$) {
    return $root$$3$$
  }
  for(var $child$$5_node$$12$$ = D.$JSCompiler_alias_NULL$$, $children$$8$$ = $root$$3$$.$getChildNodes$(), $length$$12$$ = $children$$8$$.length, $child$$5_node$$12$$ = D.$JSCompiler_alias_NULL$$, $i$$60$$ = 0;$i$$60$$ < $length$$12$$;$i$$60$$++) {
    if($child$$5_node$$12$$ = $children$$8$$[$i$$60$$], $child$$5_node$$12$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$5_node$$12$$, $id$$18$$)) {
      return $child$$5_node$$12$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$3$$) {
  this.$_alpha$ = $alpha$$3$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"r" == this.$_drilling$ || "ir" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuId$ = (0,D.$JSCompiler_get$$)("$_menuId$");
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$14$$) {
  var $children$$9$$ = this.$getChildNodes$();
  if($children$$9$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$61$$ = 0;$i$$61$$ < $children$$9$$.length;$i$$61$$++) {
      $children$$9$$[$i$$61$$].$render$($container$$14$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$4$$) {
  this.$_selected$ = $selected$$4$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$4$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$__getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$5$$, $oldNode$$1$$) {
  $handler$$5$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$5$$, $oldNode$$1$$.$getChildNodes$(), this.$getChildNodes$());
  var $animationUpdateColor_startState$$ = $oldNode$$1$$.$GetAnimationParams$(), $bSizeChanged_endState$$ = this.$GetAnimationParams$(), $bColorChanged_nodePlayable$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$, $bSizeChanged_endState$$) && ($bColorChanged_nodePlayable$$ = new D.$DvtCustomAnimation$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$), $handler$$5$$.add($bColorChanged_nodePlayable$$, 1), $bSizeChanged_endState$$ = this.$_size$ != 
  $oldNode$$1$$.$_size$, $bColorChanged_nodePlayable$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$1$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$), ($animationUpdateColor_startState$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, D.$JSCompiler_alias_NULL$$, "ANIMATION_UPDATE_COLOR_STYLE")) && ($bSizeChanged_endState$$ || $bColorChanged_nodePlayable$$))) {
    this.$_color$ = $animationUpdateColor_startState$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$6$$) {
  if(!$handler$$6$$.$_bDrill$ || !$handler$$6$$.$_bDrill$ || !($handler$$6$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$6$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$1_i$$62$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
    $handler$$6$$.add($anim$$1_i$$62$$, 2);
    for($anim$$1_i$$62$$ = 0;$anim$$1_i$$62$$ < this.$_children$.length;$anim$$1_i$$62$$++) {
      this.$_children$[$anim$$1_i$$62$$].$animateInsert$($handler$$6$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$7$$, $container$$15$$) {
  $container$$15$$.$addChild$(this.$_shape$);
  var $anim$$2_i$$63$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
  $handler$$7$$.add($anim$$2_i$$63$$, 0);
  if(!$handler$$7$$.$_bDrill$) {
    for($anim$$2_i$$63$$ = 0;$anim$$2_i$$63$$ < this.$_children$.length;$anim$$2_i$$63$$++) {
      this.$_children$[$anim$$2_i$$63$$].$animateDelete$($handler$$7$$, $container$$15$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$10$$) {
  var $depth$$2$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$10$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$10$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$10$$;) {
    $depth$$2$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$10$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$10$$.$_parent$
  }
  return $depth$$2$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$DvtBaseTreeNode$GetNodeTextColor$$ = function $$DvtBaseTreeNode$GetNodeTextColor$$$($node$$13$$) {
  return $node$$13$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($node$$13$$.$_color$)
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$19$$) {
  var $defaultFillColor$$ = (0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$);
  $text$$19$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$ = [];
  $textStyle$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$19$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $text$$19$$.$setSolidFill$($defaultFillColor$$)
};
D.$JSCompiler_StaticMethods_getResolvedColor$$ = function $$JSCompiler_StaticMethods_getResolvedColor$$$($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$, $color$$6_defaultColor$$, $styleColorKey$$) {
  ($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$.$_view$.$_styles$[$styleColorKey$$]) && ($color$$6_defaultColor$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$);
  return $color$$6_defaultColor$$
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$) {
  var $size$$12$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE.$getFontSize$()) && ($size$$12$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$));
  return $size$$12$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$DvtBaseTreeNode$$.prototype.$SetElAttributes$ = function $$DvtBaseTreeNode$$$$$SetElAttributes$$($elAttrs$$1$$) {
  $elAttrs$$1$$ && !this.$_template$ && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content");
  this.$_elAttributes$ = $elAttrs$$1$$
};
D.$JSCompiler_StaticMethods__setTemplate$$ = function $$JSCompiler_StaticMethods__setTemplate$$$($JSCompiler_StaticMethods__setTemplate$self$$, $tempName$$) {
  $tempName$$ && ($JSCompiler_StaticMethods__setTemplate$self$$.$_template$ = $JSCompiler_StaticMethods__setTemplate$self$$.$_templates$[$tempName$$])
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$22$$, $id$$19$$, $tooltip$$5$$, $datatip$$2$$, $datatipColor$$) {
  this.Init($tooltip$$5$$, $datatip$$2$$, $datatipColor$$);
  this.$_node$ = $node$$22$$;
  this.$_id$ = $id$$19$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$DvtBaseTreePeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBaseTreePeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$handleMouseOut$ = function $$DvtBaseTreePeer$$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$6$$, $availSpace$$, $ancestors$$2_dataItems$$1$$, $dims$$5_height$$18_rootLabel$$) {
  var $breadcrumbs$$5_context$$48$$ = $treeView$$6$$.$_context$, $enabledStyle_enabledStyleArray$$ = [];
  $enabledStyle_enabledStyleArray$$.push($treeView$$6$$.$_styles$.TEXT_STYLE);
  $enabledStyle_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle_enabledStyleArray$$.push($treeView$$6$$.$_styles$.DRILL_TEXT_STYLE);
  var $enabledStyle_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyle_disabledStyleArray$$ = [];
  $disabledStyle_disabledStyleArray$$.push($treeView$$6$$.$_styles$.TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$.push($treeView$$6$$.$_styles$.CURRENT_TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyle_disabledStyleArray$$).toString();
  $breadcrumbs$$5_context$$48$$ = new D.$DvtBreadcrumbs$$($breadcrumbs$$5_context$$48$$, $treeView$$6$$.$__processBreadcrumbsEvent$, $treeView$$6$$, {$labelStyle$:$enabledStyle_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_disabledStyleArray$$});
  $treeView$$6$$.$addChild$($breadcrumbs$$5_context$$48$$);
  $ancestors$$2_dataItems$$1$$ = $ancestors$$2_dataItems$$1$$.slice(0).reverse();
  $ancestors$$2_dataItems$$1$$.push({text:$dims$$5_height$$18_rootLabel$$});
  $breadcrumbs$$5_context$$48$$.$render$({items:$ancestors$$2_dataItems$$1$$}, $availSpace$$.$w$);
  $dims$$5_height$$18_rootLabel$$ = $breadcrumbs$$5_context$$48$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs$$5_context$$48$$, $availSpace$$.x, $availSpace$$.y);
  $dims$$5_height$$18_rootLabel$$ = $dims$$5_height$$18_rootLabel$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$.y += $dims$$5_height$$18_rootLabel$$;
  $availSpace$$.$h$ -= $dims$$5_height$$18_rootLabel$$;
  $treeView$$6$$.removeChild($breadcrumbs$$5_context$$48$$);
  return $breadcrumbs$$5_context$$48$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$7$$, $availSpace$$1$$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$) {
  var $context$$49$$ = $treeView$$7$$.$_context$, $eventManager$$10_labelSpace$$ = $treeView$$7$$.$__getEventManager$(), $legend$$ = new D.$DvtContainer$$($context$$49$$);
  $treeView$$7$$.$addChild$($legend$$);
  var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$49$$, $treeView$$7$$, $legend$$, $availSpace$$1$$.$w$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$), $borderColor$$3_colorContainer$$2$$ = $treeView$$7$$.$_resources$.alta ? D.$JSCompiler_alias_NULL$$ : "#000000", $legendStyleArray_legendStyles$$ = [];
  $legendStyleArray_legendStyles$$.push($treeView$$7$$.$_styles$.TEXT_STYLE);
  var $legendStyleArray_legendStyles$$ = {borderColor:$borderColor$$3_colorContainer$$2$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($legendStyleArray_legendStyles$$)}, $borderColor$$3_colorContainer$$2$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$49$$, $eventManager$$10_labelSpace$$, $legend$$, $availSpace$$1$$.$w$, $availSpace$$1$$.$h$, $attrGroups$$6_legendDims$$, $legendStyleArray_legendStyles$$), $labelDims$$1$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
  D.$JSCompiler_alias_NULL$$, $colorDims$$ = $borderColor$$3_colorContainer$$2$$ ? $borderColor$$3_colorContainer$$2$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
  if($labelContainer$$ && !$borderColor$$3_colorContainer$$2$$) {
    $labelContainer$$.$setTranslateX$($availSpace$$1$$.y + ($availSpace$$1$$.$w$ - $labelDims$$1$$.$w$) / 2)
  }else {
    if($borderColor$$3_colorContainer$$2$$ && !$labelContainer$$) {
      $borderColor$$3_colorContainer$$2$$.$setTranslateX$($availSpace$$1$$.y + ($availSpace$$1$$.$w$ - $colorDims$$.$w$) / 2)
    }else {
      if($borderColor$$3_colorContainer$$2$$ && $labelContainer$$) {
        var $availWidth$$6$$ = $availSpace$$1$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
        $labelDims$$1$$.$w$ + $colorDims$$.$w$ > $availWidth$$6$$ && ($labelDims$$1$$.$w$ > $availWidth$$6$$ / 2 && $colorDims$$.$w$ > $availWidth$$6$$ / 2 ? ($legend$$.removeChild($labelContainer$$), $legend$$.removeChild($borderColor$$3_colorContainer$$2$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$49$$, $treeView$$7$$, $legend$$, $availWidth$$6$$ / 2, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$), $borderColor$$3_colorContainer$$2$$ = 
        D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$49$$, $eventManager$$10_labelSpace$$, $legend$$, $availWidth$$6$$ / 2, $availSpace$$1$$.$h$, $attrGroups$$6_legendDims$$, $legendStyleArray_legendStyles$$)) : $labelDims$$1$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$10_labelSpace$$ = $availWidth$$6$$ - $colorDims$$.$w$, $legend$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$49$$, $treeView$$7$$, $legend$$, $eventManager$$10_labelSpace$$, 
        $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$)) : ($colorSpace_sizeStr$$ = $availWidth$$6$$ - $labelDims$$1$$.$w$, $legend$$.removeChild($borderColor$$3_colorContainer$$2$$), $borderColor$$3_colorContainer$$2$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$49$$, $eventManager$$10_labelSpace$$, $legend$$, $colorSpace_sizeStr$$, $availSpace$$1$$.$h$, $attrGroups$$6_legendDims$$, $legendStyleArray_legendStyles$$)), $labelDims$$1$$ = 
        $labelContainer$$.$getDimensions$(), $colorDims$$ = $borderColor$$3_colorContainer$$2$$.$getDimensions$());
        (0,D.$DvtAgent$isRightToLeft$$)($context$$49$$) ? ($borderColor$$3_colorContainer$$2$$.$setTranslateX$($availSpace$$1$$.x), $labelContainer$$.$setTranslateX$($availSpace$$1$$.x + $availSpace$$1$$.$w$ - $labelDims$$1$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$1$$.x), $borderColor$$3_colorContainer$$2$$.$setTranslateX$($availSpace$$1$$.x + $availSpace$$1$$.$w$ - $colorDims$$.$w$))
      }
    }
  }
  $attrGroups$$6_legendDims$$ = $legend$$.$getDimensions$();
  $legend$$.$setTranslateY$($availSpace$$1$$.y + $availSpace$$1$$.$h$ - $attrGroups$$6_legendDims$$.$h$);
  $availSpace$$1$$.$h$ -= $attrGroups$$6_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
  $treeView$$7$$.removeChild($legend$$);
  return $legend$$
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$50_widthPerSection$$, $sizeWidth_treeView$$8$$, $attrTypeStyle$$1_legend$$1$$, $availWidth$$7_x$$90$$, $colorWidth_sizeStr$$1$$, $colorStr$$1$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$50_widthPerSection$$), $eventManager$$11$$ = $sizeWidth_treeView$$8$$.$__getEventManager$(), $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$50_widthPerSection$$);
    $attrTypeStyle$$1_legend$$1$$.$addChild$($labelContainer$$1$$);
    var $attrValueStyle$$1_textStyle$$3$$ = [];
    $attrValueStyle$$1_textStyle$$3$$.push($sizeWidth_treeView$$8$$.$_styles$.TEXT_STYLE);
    $attrValueStyle$$1_textStyle$$3$$.push($sizeWidth_treeView$$8$$.$_styles$.ATTRIBUTE_TYPE_STYLE);
    $attrTypeStyle$$1_legend$$1$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle$$1_textStyle$$3$$);
    $attrValueStyle$$1_textStyle$$3$$ = [];
    $attrValueStyle$$1_textStyle$$3$$.push($sizeWidth_treeView$$8$$.$_styles$.TEXT_STYLE);
    $attrValueStyle$$1_textStyle$$3$$.push($sizeWidth_treeView$$8$$.$_styles$.ATTRIBUTE_VALUE_STYLE);
    var $attrValueStyle$$1_textStyle$$3$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle$$1_textStyle$$3$$), $sizeLabel$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$;
    $sizeWidth_treeView$$8$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel$$ = new D.$DvtOutputText$$($context$$50_widthPerSection$$, $colorWidth_sizeStr$$1$$, 0, 0), $sizeLabel$$.$setCSSStyle$($attrTypeStyle$$1_legend$$1$$), $labelContainer$$1$$.$addChild$($sizeLabel$$), $sizeLabelWidth$$ = $sizeLabel$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$50_widthPerSection$$, $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle$$1_textStyle$$3$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), 
    $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_treeView$$8$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$;
    $colorWidth_sizeStr$$1$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel$$ = new D.$DvtOutputText$$($context$$50_widthPerSection$$, $colorStr$$1$$, 0, 0), $colorLabel$$.$setCSSStyle$($attrTypeStyle$$1_legend$$1$$), $labelContainer$$1$$.$addChild$($colorLabel$$), $colorLabelWidth$$ = $colorLabel$$.$measureDimensions$().$w$, $colorValueLabel$$ = new D.$DvtOutputText$$($context$$50_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle$$1_textStyle$$3$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), 
    $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth_sizeStr$$1$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$7_x$$90$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_treeView$$8$$ + $colorWidth_sizeStr$$1$$ > $availWidth$$7_x$$90$$ && ($context$$50_widthPerSection$$ = $availWidth$$7_x$$90$$ / 2, $sizeWidth_treeView$$8$$ > $context$$50_widthPerSection$$ && $colorWidth_sizeStr$$1$$ > $context$$50_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$50_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$11$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$50_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$11$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_treeView$$8$$ > $colorWidth_sizeStr$$1$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$7_x$$90$$ - $colorWidth_sizeStr$$1$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$11$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$7_x$$90$$ - 
    $sizeWidth_treeView$$8$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$11$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$7_x$$90$$ = 0;
    $isRTL$$2$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel$$.$setX$($availWidth$$7_x$$90$$))) : ($sizeValueLabel$$ && ($sizeLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel$$.$setX$($availWidth$$7_x$$90$$), $availWidth$$7_x$$90$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $colorValueLabel$$.$setX$($availWidth$$7_x$$90$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$2$$) {
  this.Init($manager$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$55$$) {
  return this.$isNavigationEvent$($event$$55$$) && !$event$$55$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$56$$) {
  return 32 == $event$$56$$.keyCode && $event$$56$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {emptyText:"No data to display", nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), _attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")}, _resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap_ret$$15$$) {
  $defaultsMap_ret$$15$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$15$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$15$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap_ret$$15$$)
};
D.$DvtBaseTreeJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeJsonUtils$$, D.$DvtObj$$, "DvtBaseTreeJsonUtils");
D.$DvtBaseTreeJsonUtils$$.prototype.$toXml$ = function $$DvtBaseTreeJsonUtils$$$$$toXml$$($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$) {
  var $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$;
  $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$ = "\x3c" + this.$GetComponentName$();
  $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$ += this.$WriteComponentAttributes$($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$);
  $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$ += "\x3e\n";
  if($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ && $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$.nodes) {
    for(var $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$ = $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$.nodes, $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$ = 0;$attrGroups$$inline_9324_groups$$inline_9326_i$$52$$ < $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$.length;$attrGroups$$inline_9324_groups$$inline_9326_i$$52$$++) {
      $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)(this, $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$, $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$[$attrGroups$$inline_9324_groups$$inline_9326_i$$52$$])
    }
  }
  $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$ = "\x3ca/\x3e\n" + this.$WriteResourcesElement$($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$);
  $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$ += this.$WriteStyleElement$($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$);
  if($attrGroups$$inline_9324_groups$$inline_9326_i$$52$$ = $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$.attributeGroups ? $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ = '\x3cag id\x3d"' + $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.id + '"', "continuous" == $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.attributeType) {
      $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("t", "continuous"), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("ramp", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.colors.join(";")), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("minValue", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.min), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("maxValue", 
      $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.max), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("minLabel", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.minLabel), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("maxLabel", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.maxLabel), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += "/\x3e"
    }else {
      $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += "\x3e\n";
      for(var $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$ = $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.groups, $i$$inline_9327$$ = 0;$i$$inline_9327$$ < $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$.length;$i$$inline_9327$$++) {
        $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += "\x3ci", $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("g", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$[$i$$inline_9327$$].id), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("l", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$[$i$$inline_9327$$].label), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("c", 
        $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$[$i$$inline_9327$$].color), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += this.$WriteAttr$("p", $attrGroups$$inline_9324_groups$$inline_9326_i$$52$$[$i$$inline_9327$$].pattern), $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += "/\x3e\n"
      }
      $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ += "\x3c/ag\x3e\n"
    }
  }else {
    $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ = ""
  }
  $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$ = $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$ + $JSCompiler_inline_result$$9022_options$$15_ret$$inline_9325$$ + ("\x3c/" + this.$GetComponentName$() + "\x3e");
  return $JSCompiler_temp_const$$214_ret$$7_ret$$inline_1010$$ += $JSCompiler_temp_const$$9021_nodes$$1_ret$$inline_1014$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteAttr$ = function $$DvtBaseTreeJsonUtils$$$$$WriteAttr$$($attrName$$, $value$$46$$) {
  return $value$$46$$ != D.$JSCompiler_alias_NULL$$ ? " " + $attrName$$ + '\x3d"' + $value$$46$$ + '"' : ""
};
D.$DvtBaseTreeJsonUtils$$.prototype.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteComponentAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteComponentAttributes$$($options$$17$$) {
  var $ret$$9$$;
  $ret$$9$$ = "" + this.$WriteAttr$("sv", $options$$17$$.sizeLabel);
  $ret$$9$$ += this.$WriteAttr$("cv", $options$$17$$.colorLabel);
  var $attrGroups$$3_selectedNodes$$ = $options$$17$$.attributeGroups ? $options$$17$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3_selectedNodes$$ && ($ret$$9$$ += this.$WriteAttr$("ls", $attrGroups$$3_selectedNodes$$.id));
  for(var $attrGroups$$3_selectedNodes$$ = $options$$17$$.selectedNodes ? $options$$17$$.selectedNodes : [], $selectedNodeStr$$ = "", $i$$53$$ = 0;$i$$53$$ < $attrGroups$$3_selectedNodes$$.length;$i$$53$$++) {
    0 < $selectedNodeStr$$.length && ($selectedNodeStr$$ += ","), $selectedNodeStr$$ += $attrGroups$$3_selectedNodes$$[$i$$53$$]
  }
  0 < $selectedNodeStr$$.length && ($ret$$9$$ += this.$WriteAttr$("selIds", $selectedNodeStr$$));
  $ret$$9$$ += this.$WriteAttr$("adu", $options$$17$$.animationDuration);
  $ret$$9$$ += this.$WriteAttr$("adc", $options$$17$$.animationOnDataChange);
  $ret$$9$$ += this.$WriteAttr$("emptyText", $options$$17$$.emptyText);
  $ret$$9$$ += this.$WriteAttr$("sel", $options$$17$$.selection);
  return $ret$$9$$ += this.$WriteAttr$("sort", $options$$17$$.sorting)
};
D.$JSCompiler_StaticMethods_WriteNodeElement$$ = function $$JSCompiler_StaticMethods_WriteNodeElement$$$($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$19$$, $nodeData$$1_nodes$$2$$) {
  var $ret$$11$$;
  $ret$$11$$ = "\x3cn" + $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteNodeAttributes$($options$$19$$, $nodeData$$1_nodes$$2$$);
  if($nodeData$$1_nodes$$2$$ && $nodeData$$1_nodes$$2$$.nodes && 0 < $nodeData$$1_nodes$$2$$.nodes.length) {
    $ret$$11$$ += $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteAttr$("di", "t");
    $ret$$11$$ += "\x3e\n";
    $nodeData$$1_nodes$$2$$ = $nodeData$$1_nodes$$2$$.nodes;
    for(var $i$$54$$ = 0;$i$$54$$ < $nodeData$$1_nodes$$2$$.length;$i$$54$$++) {
      $ret$$11$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$19$$, $nodeData$$1_nodes$$2$$[$i$$54$$])
    }
    $ret$$11$$ += "\x3c/n\x3e\n"
  }else {
    $ret$$11$$ += "/\x3e\n"
  }
  return $ret$$11$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteNodeAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteNodeAttributes$$($options$$20$$, $nodeData$$2$$) {
  var $ret$$12$$;
  $ret$$12$$ = "" + this.$WriteAttr$("id", $nodeData$$2$$.id);
  $ret$$12$$ += this.$WriteAttr$("s", $nodeData$$2$$.value);
  $ret$$12$$ += this.$WriteAttr$("c", $nodeData$$2$$.color);
  $ret$$12$$ += this.$WriteAttr$("l", $nodeData$$2$$.label);
  $ret$$12$$ += this.$WriteAttr$("p", $nodeData$$2$$.pattern);
  $ret$$12$$ += this.$WriteAttr$("tt", $nodeData$$2$$.shortDesc ? $nodeData$$2$$.shortDesc : $nodeData$$2$$.tooltip);
  $ret$$12$$ += this.$WriteAttr$("ls", $nodeData$$2$$.labelStyle ? $nodeData$$2$$.labelStyle : $options$$20$$.nodeDefaults.labelStyle);
  var $drilling$$ = $nodeData$$2$$.drilling ? $nodeData$$2$$.drilling : $options$$20$$.nodeDefaults.drilling;
  "insert" == $drilling$$ ? $ret$$12$$ += this.$WriteAttr$("d", "i") : "replace" == $drilling$$ ? $ret$$12$$ += this.$WriteAttr$("d", "r") : "insertAndReplace" == $drilling$$ && ($ret$$12$$ += this.$WriteAttr$("d", "ir"));
  return $ret$$12$$ += this.$WriteAttr$("nsel", $nodeData$$2$$.selectable ? $nodeData$$2$$.selectable : "auto")
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteResourcesElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteStyleElement$ = function $$DvtBaseTreeJsonUtils$$$$$WriteStyleElement$$($options$$23$$) {
  var $ret$$14$$;
  $ret$$14$$ = "\x3cstyles " + this.$WriteAttr$("attrType", $options$$23$$.styleDefaults._attributeTypeTextStyle);
  return $ret$$14$$ += this.$WriteAttr$("attrValue", $options$$23$$.styleDefaults._attributeValueTextStyle)
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$2$$) {
  this.$_treeView$ = $treeView$$2$$;
  this.$_root$ = $treeView$$2$$.$_root$
};
(0,D.$goog$exportSymbol$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$14_indices$$) {
  var $childIndices_logicalObj$$3$$ = this.$_treeView$.$getLogicalObject$($displayable$$14_indices$$);
  if(!$childIndices_logicalObj$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$3$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$14_indices$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$3$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$14_indices$$ += "[0]"
    }
    $displayable$$14_indices$$ = ($childIndices_logicalObj$$3$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$3$$, this.$_root$.$getChildNodes$())) ? $displayable$$14_indices$$ + $childIndices_logicalObj$$3$$ : $displayable$$14_indices$$;
    if(0 < $displayable$$14_indices$$.length) {
      return"node" + $displayable$$14_indices$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$14$$, $children$$10$$) {
  if($children$$10$$ && 0 < $children$$10$$.length) {
    for(var $n$$6$$ = 0;$n$$6$$ < $children$$10$$.length;$n$$6$$++) {
      if($children$$10$$[$n$$6$$] == $node$$14$$) {
        return"[" + $n$$6$$ + "]"
      }
      var $nodeIndex$$ = this.$_getIndicesFromNode$($node$$14$$, $children$$10$$[$n$$6$$].$getChildNodes$());
      if($nodeIndex$$) {
        return"[" + $n$$6$$ + "]" + $nodeIndex$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($foundNode_subId$$1$$) {
  return!this.$_root$.$_bArtificialRoot$ && ($foundNode_subId$$1$$ = $foundNode_subId$$1$$.substring(0, $foundNode_subId$$1$$.indexOf("[")) + $foundNode_subId$$1$$.substring($foundNode_subId$$1$$.indexOf("]") + 1), "node" == $foundNode_subId$$1$$) ? this.$_root$.$__getDisplayable$().$getElem$() : ($foundNode_subId$$1$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, this.$_root$, $foundNode_subId$$1$$)) ? $foundNode_subId$$1$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$15$$, $subId$$2$$) {
  var $index$$48_openParen$$ = $subId$$2$$.indexOf("["), $closeParen_nextCloseParen$$ = $subId$$2$$.indexOf("]");
  if(0 <= $index$$48_openParen$$ && 0 <= $closeParen_nextCloseParen$$) {
    return $index$$48_openParen$$ = $subId$$2$$.substring($index$$48_openParen$$ + 1, $closeParen_nextCloseParen$$), $subId$$2$$ = $subId$$2$$.substring($closeParen_nextCloseParen$$ + 1), $closeParen_nextCloseParen$$ = $subId$$2$$.indexOf("]"), 0 <= $subId$$2$$.indexOf("[") && 0 <= $closeParen_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$15$$.$getChildNodes$()[$index$$48_openParen$$], $subId$$2$$) : $node$$15$$.$getChildNodes$()[$index$$48_openParen$$]
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$11_node$$16$$, $path$$13$$) {
  var $index$$49$$ = $path$$13$$.shift();
  $children$$11_node$$16$$ = $children$$11_node$$16$$.$getChildNodes$();
  return 0 == $path$$13$$.length ? $children$$11_node$$16$$[$index$$49$$] : 0 < $path$$13$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$11_node$$16$$[$index$$49$$], $path$$13$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$17_subIdPath$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$17_subIdPath$$[0] && $node$$17_subIdPath$$.shift();
  $node$$17_subIdPath$$ = 0 == $node$$17_subIdPath$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$17_subIdPath$$);
  return{color:$node$$17_subIdPath$$.$getColor$(), label:$node$$17_subIdPath$$.$getLabel$(), selected:$node$$17_subIdPath$$.$isSelected$() == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_FALSE$$ : $node$$17_subIdPath$$.$isSelected$(), size:$node$$17_subIdPath$$.$getSize$(), tooltip:$node$$17_subIdPath$$.$getDatatip$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
});